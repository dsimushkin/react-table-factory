import React, { forwardRef, useContext } from 'react';

import { table, Column, DefaultHeaderCellRenderer, DefaultHeaderCellContentRenderer } from './index';
import { SortableContext, sortParameterFactory, sortableContext, controlledSortableContext } from './hocs/sortableHoc';

/**
 * Table headerCellRenderer decorator HoC.
 * 
 * @param {*} Cell - headerCellRenderer
 */
const sortableHeaderCellRenderer = (Cell=DefaultHeaderCellRenderer) => forwardRef(({
    className, sortable, name, ...props
}, ref) => {
    const {sortOrder, sort} = useContext(SortableContext);
    const {parameter, direction} = sortOrder;
    const classNames = [];

    if (className) classNames.push(className);
    if (sortable) classNames.push('sortable-column');

    if (name != null && name === parameter) {
        classNames.push(`sorted-${direction.toLowerCase()}`);
    }

    return (
        <Cell
            ref={ref}
            className={classNames.join(" ")}
            onClick={sortable ? () => sort(name) : undefined}
            {...props}
        />
    )
})

/**
 * Table headerCellContentRenderer decorator HoC.
 * 
 * @param {*} Cell 
 */
const addSortIcon = (Cell=DefaultHeaderCellContentRenderer) => forwardRef((
    {children, ...props},
    ref
) => (
    <Cell ref={ref} {...props}>
        { children }
        <div className="sort-image" />
    </Cell>
))

/**
 * Overloaded method for sortableTable with inMemory flag set to true.
 * 
 * Sets
 *  inMemory to true
 *  sortableContextHoc to sortableContext 
 * 
 * @param {*} tableFactory 
 * @param {*} sortParams - options for sortableTable
 * 
 * @see sortableTable
 * @see sortableContext
 */
export const withInMemorySortingContext = ({
    inMemory,
    sortableContextHoc,
    ...props
}={}) => withSortingContext({
    inMemory: true,
    sortableContextHoc: sortableContext,
    ...props
})

/**
 * HoC factory that injects sortableContext into a Table.
 * 
 * Defaults are
 *  inMemory = false
 *  sortableContextHoc = controlledSortableContext
 * 
 * Wraps the Table with sortableContext.
 * Modifies column name (in case of a list).
 * Overrides header renderer to inject sorting into header.
 * 
 * @param {*} tableFactory
 * @param {*} options
 * 
 * @see sortableContext
 * @see controlledSortableContext
 */
export const withSortingContext = ({
    defaultDirection,
    sortFactory,
    inMemory=false,
    sortableContextHoc=controlledSortableContext,
}) => (tableFactory=table) => ({
    headerCellRenderer=DefaultHeaderCellRenderer,
    headerCellContentRenderer=DefaultHeaderCellContentRenderer,
    ...props
}={}) => {
    const Table = tableFactory({
        headerCellRenderer: sortableHeaderCellRenderer(headerCellRenderer),
        headerCellContentRenderer: addSortIcon(headerCellContentRenderer),
        ...props
    })

    return (
        sortableContextHoc(forwardRef(({children, ...props}, ref) => {
            const {sortOrder} = useContext(SortableContext);
            const columns = React.Children.toArray(children).filter(({type}) => type === Column).map(({props}) => props);
            
            return (
                <Table
                    ref={ref}
                    {...props}
                >
                    { columns.map(({name, ...props}, i) => (
                        <Column
                            key={i}
                            name={Array.isArray(name) ? sortParameterFactory(sortOrder)(...name) : name}
                            {...props}
                        />
                    ))}
                    { React.Children.toArray(children).filter(({type}) => type !== Column) }
                </Table>
            )
        }), {defaultDirection, sortFactory, inMemory})
    )
}