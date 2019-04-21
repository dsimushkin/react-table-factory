import React, { forwardRef, useState, useEffect, useContext } from 'react';

import { table, DefaultDataCellRenderer, DefaultHeaderCellRenderer } from './table';
import { useMediaMaxWidth } from './hooks/useMediaMaxWidth';

/**
 * Table dataCellRenderer decorator HoC.
 * 
 * @param {*} Cell - dataCellRenderer
 * @param {*} Component - colname component
 */
const withColname = (Cell=DefaultDataCellRenderer, Component) => {
    const WithAdaptiveColname = forwardRef(({
        header,
        name,
        removeAdaptiveColname=false,
        ...props
    }, ref) => {
        const {isAdaptive} = useContext(AdaptiveContext);

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
const decorateHeaderCellRenderer = (Cell=DefaultHeaderCellRenderer) => (
    forwardRef(({
        removeAdaptiveColname,
        ...props
    }, ref) => (
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
}) => (
    <span className="adaptive-col-name">
        { Header ? (
            <Header {...props} name={name} disabled />
        ) : name || null }
    </span>
);

export const AdaptiveContext = React.createContext({
    isAdaptive: false
})

export const withAdaptive = ({
    Component=DefaultAdaptiveComponent,
    width=940,
}={}) => (
    tableFactory=table
) => ({
    dataCellRenderer,
    headerCellRenderer,
    ...options
}={}) => {
    const Table = tableFactory({
        dataCellRenderer: withColname(dataCellRenderer, Component),
        headerCellRenderer: decorateHeaderCellRenderer(headerCellRenderer),
        ...options
    })

    return forwardRef(({
            className,
            ...props
        },
        ref
    ) => {
        const isAdaptiveByDefault = useMediaMaxWidth((matches) => {
            if (matches !== isAdaptive) changeAdaptive(matches);
        }, width);
        
        const [isAdaptive, changeAdaptive] = useState(
            isAdaptiveByDefault
        );

        const classNames = [];
        if (className != null) classNames.push(className);
        if (isAdaptive) classNames.push('adaptive-table');

        return (
            <AdaptiveContext.Provider value={{isAdaptive}}>
                <Table
                    ref={ref}
                    className={classNames.length > 0 ? classNames.join(' ') : undefined}
                    {...props}
                />
            </AdaptiveContext.Provider>
        )
    });
}