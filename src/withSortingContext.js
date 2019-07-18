import React, { forwardRef, useContext } from 'react';

import { table, DefaultHeaderCellRenderer, DefaultHeaderCellContentRenderer } from './table';
import { SortableContext, sortParameterFactory, sortableContext, controlledSortableContext } from './hocs/sortableHoc';

export { Sorter } from './hocs/sortableHoc';

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
    if (sortable && name != null) classNames.push('sortable-column');

    if (name != null && name === parameter) {
        classNames.push(`sorted-${direction.toLowerCase()}`);
    }

    return (
        <Cell
            ref={ref}
            className={classNames.length > 0 ? classNames.join(' ') : undefined}
            onClick={sortable ? () => sort(name) : undefined}
            name={name}
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
        sortableContextHoc(forwardRef(({columns=[], ...props}, ref) => {
            const {sortOrder} = useContext(SortableContext);
            
            return (
                <Table
                    ref={ref}
                    columns={columns.map(({name: names, ...props}) => {
                        const name = Array.isArray(names) ? sortParameterFactory(sortOrder)(...names) : names;
                        return { name, ...props };
                    })}
                    {...props}
                />
            )
        }), {defaultDirection, sortFactory, inMemory})
    )
}