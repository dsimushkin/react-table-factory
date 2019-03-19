import React, { forwardRef } from 'react';

import { table, DefaultDataCellRenderer, DefaultHeaderCellRenderer } from './table';

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
        return (
            <React.Fragment>
                { !removeAdaptiveColname ? (
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

export const DefaultAdaptiveComponent = ({header: Header, name, onClick, ...props}) => (
    <span className="adaptive-col-name">
        { Header ? (
            <Header {...props} name={name} disabled />
        ) : name || null }
    </span>
);

export const withAdaptive = ({
    Component=DefaultAdaptiveComponent
}={}) => (tableFactory=table) => ({
    dataCellRenderer,
    headerCellRenderer,
    ...options
}={}) => {
    const Table = tableFactory({
        dataCellRenderer: withColname(dataCellRenderer, Component),
        headerCellRenderer: decorateHeaderCellRenderer(headerCellRenderer),
        ...options
    })

    return Table;
}