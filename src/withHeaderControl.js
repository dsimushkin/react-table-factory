import React, { forwardRef } from 'react';
import { table, DefaultHeaderCellRenderer, DefaultCellRenderer } from './table';

export const Controll = () => null;

/**
 * Table cellRenderer decorator HoC.
 * Ads 1 to colSpan of a previous column.
 * 
 * @param {*} Cell 
 */
const decorateCellRenderer = (Cell=DefaultCellRenderer) => forwardRef(({
    colSpan,
    ...props
}, ref) => {
        const { columns, index } = props;
        if (
            columns == null
            || index == null
            || columns[index] == null
        )
        {
            return (
                <Cell
                    ref={ref}
                    colSpan={colSpan}
                    {...props}
                />
            );
        }

        if (columns[index].control) return null;

        return (
            <Cell
                ref={ref}
                colSpan={index + 1 < columns.length && columns[index + 1].control ? (colSpan || 1) + 1 : colSpan}
                {...props}
            />
        )
    }
)

/**
 * Table headerCellRenderer decorator HoC.
 * Removes control property.
 * 
 * @param {*} Cell 
 */
const decorateHeaderCellRenderer = (Cell=DefaultHeaderCellRenderer) => (
    forwardRef(({
        control,
        ...props
    }, ref) => (
        <Cell
            ref={ref}
            {...props}
        />
    ))
)

export const withHeaderControl = (
    tableFactory=table
) => ({
    cellRenderer,
    headerCellRenderer,
    ...options
}={}) => {
    const Table = tableFactory({
        cellRenderer: decorateCellRenderer(cellRenderer),
        headerCellRenderer: decorateHeaderCellRenderer(headerCellRenderer),
        ...options
    });

    return Table;
}