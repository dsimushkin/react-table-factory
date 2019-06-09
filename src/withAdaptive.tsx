import * as React from "react";

import { useMediaMaxWidth } from "./hooks/useMediaMaxWidth";
import { DefaultDataCellRenderer, DefaultHeaderCellRenderer, table } from "./table";

/**
 * Table dataCellRenderer decorator HoC.
 *
 * @param {*} Cell - dataCellRenderer
 * @param {*} Component - colname component
 */
const withColname = (Cell= DefaultDataCellRenderer, Component: any) => {
    const WithAdaptiveColname = React.forwardRef((
        {
            header,
            name,
            removeAdaptiveColname= false,
            hideFullSize,
            hideAdaptive,
            ...props
        },
        ref,
    ) => {
        const {isAdaptive} = React.useContext(AdaptiveContext);

        return (
            <React.Fragment>
                { isAdaptive && !removeAdaptiveColname ? (
                    <Component
                        header={header}
                        name={name}
                        {...props}
                    />
                ) : null}
                <Cell
                    header={header}
                    name={name}
                    ref={ref}
                    {...props}
                />
            </React.Fragment>
        )
    });

    return WithAdaptiveColname;
}

/**
 * Table headerCellRenderer decorator HoC.
 * Removes removeOverflowWrapper property and stores it on context.
 *
 * @param {*} Cell
 */
const decorateHeaderCellRenderer = (Cell= DefaultHeaderCellRenderer) => (
    React.forwardRef((
        {
            removeAdaptiveColname,
            hideFullSize,
            hideAdaptive,
            ...props
        },
        ref,
    ) => {
        const {isAdaptive} = React.useContext(AdaptiveContext);

        if ((isAdaptive && hideAdaptive)
            || (!isAdaptive && hideFullSize)) {
            return null;
        }

        return (
            <Cell
                ref={ref}
                {...props}
            />
        )
    })
)

export const DefaultAdaptiveComponent = ({
    header: Header,
    name,
    onClick,
    ...props
}) => (
    <span className="adaptive-col-name">
        { Header ? (
            <Header {...props} name={name} disabled />
        ) : name || null }
    </span>
);

export const AdaptiveContext = React.createContext({
    isAdaptive: false,
})

export const withAdaptive = ({
    Component= DefaultAdaptiveComponent,
    width= 940,
}= {}) => (
    tableFactory= table,
) => ({
    dataCellRenderer,
    headerCellRenderer,
    ...options
}= {}) => {
    const Table = tableFactory({
        dataCellRenderer: withColname(dataCellRenderer, Component),
        headerCellRenderer: decorateHeaderCellRenderer(headerCellRenderer),
        ...options,
    })

    return React.forwardRef((
        {
            className,
            columns,
            ...props
        },
        ref,
    ) => {
        const isAdaptiveByDefault = useMediaMaxWidth((matches) => {
            if (matches !== isAdaptive) { changeAdaptive(matches); }
        }, width);

        const [isAdaptive, changeAdaptive] = React.useState(
            isAdaptiveByDefault,
        );

        const classNames = [];
        if (className != null) { classNames.push(className); }
        if (isAdaptive) { classNames.push("adaptive-table"); }

        const filteredColumns = React.useMemo(
            () => columns.filter(({
                hideAdaptive, hideFullSize,
            }) => (
                (isAdaptive && !hideAdaptive) || (!isAdaptive && !hideFullSize)
            )),
            [isAdaptive],
        )

        return (
            <AdaptiveContext.Provider value={{isAdaptive}}>
                <Table
                    ref={ref}
                    columns={filteredColumns}
                    className={classNames.length > 0 ? classNames.join(" ") : undefined}
                    {...props}
                />
            </AdaptiveContext.Provider>
        )
    });
}
