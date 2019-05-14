import * as React from "react";
import { useMediaMaxWidth } from "./hooks/useMediaMaxWidth";
import {
    DefaultDataCellRenderer,
    DefaultHeaderCellRenderer,
    IColumnProps,
    ITableConfig,
    ITableProps,
    table,
} from "./table";

/**
 * Table dataCellRenderer decorator HoC.
 */
const withColname = (
    Cell = DefaultDataCellRenderer,
    Component = DefaultAdaptiveComponent,
) => {
    const WithAdaptiveColname = React.forwardRef<any, {
        header?: any,
        name?: string,
        removeAdaptiveColname?: boolean,
    }>((
        {
            header,
            name,
            removeAdaptiveColname = false,
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
 */
const decorateHeaderCellRenderer = (
    Cell = DefaultHeaderCellRenderer,
) => (
    React.forwardRef<any, {
        removeAdaptiveColname?: boolean,
    }>((
        {
            removeAdaptiveColname,
            ...props
        },
        ref,
    ) => (
        <Cell
            ref={ref}
            {...props}
        />
    ))
)

export const DefaultAdaptiveComponent = ({
    header: Header,
    name,
    onClick,
    ...props
}: {
    header?: React.ComponentType<any>,
    name?: string,
    onClick?: any,
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

export interface IWithAdaptiveColumn extends IColumnProps {
    removeAdaptiveColname?: boolean
}

export interface IWithAdaptiveProps extends ITableProps {
    columns?: IWithAdaptiveColumn[]
}

export const withAdaptive = ({
    Component = DefaultAdaptiveComponent,
    width = 940,
} = {}) => (
    tableFactory = table,
) => ({
    dataCellRenderer,
    headerCellRenderer,
    ...options
}: ITableConfig = {}) => {
    const Table = tableFactory({
        dataCellRenderer: withColname(dataCellRenderer, Component),
        headerCellRenderer: decorateHeaderCellRenderer(headerCellRenderer),
        ...options,
    })

    return React.forwardRef<any, IWithAdaptiveProps>((
        {
            className,
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

        return (
            <AdaptiveContext.Provider value={{isAdaptive}}>
                <Table
                    ref={ref}
                    className={classNames.length > 0 ? classNames.join(" ") : undefined}
                    {...props}
                />
            </AdaptiveContext.Provider>
        )
    });
}
