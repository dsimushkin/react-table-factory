import React, { forwardRef } from 'react';

import { table, DefaultDataCellRenderer } from './table';

/**
 * Table dataCellRenderer decorator HoC.
 * 
 * @param {*} Cell - dataCellRenderer
 * @param {*} Component - colname component
 */
const withColname = (Cell=DefaultDataCellRenderer, Component) => {
    const WithAdaptiveColname = forwardRef(({header, name, ...props}, ref) => {
        return (
            <React.Fragment>
                <Component
                    header={header}
                    name={name}
                    {...props}
                />
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

export const withAdaptiveColname = (
    Component=({header: Header, name, onClick, ...props}) => (
        <span className="adaptive-col-name">
            { Header ? (
                <Header {...props} name={name} disabled />
            ) : name || null }
        </span>
    )
) => (tableFactory=table) => ({
    dataCellRenderer,
    ...options
}={}) => {
    const Table = tableFactory({
        dataCellRenderer: withColname(dataCellRenderer, Component),
        ...options
    })

    return Table;
}