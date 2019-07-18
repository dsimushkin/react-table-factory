import React, { useMemo, useState, forwardRef, useContext } from 'react';

/**
 * returns a new sorting order based on current sorting order
 */
export const sortOrderFactory = ({parameter, direction, defaultDirection='asc'} = {}) => (name) => ({
    parameter: name,
    direction: name !== parameter ? defaultDirection : (direction.toLowerCase() === 'asc' ? 'desc' : 'asc')
})

/**
 * returns a single parameter from list of names
 * if one of names is a sorting parameter then it will be returned
 * otherwise the first element in names will be returned
 */
export const sortParameterFactory = ({parameter}={}) => (...names) => {
    if (names.indexOf(parameter) >= 0) return parameter;

    return names[0];
}


export const SortableContext = React.createContext({
    sortOrder: {}, data: [], sortedData: [], sort: () => {}
});

/**
 * Simple wrapper to inject sorting on click
 * //FIXME overrides onClick
 */
export const Sorter = ({name, disabled=false, Component = 'span', className, ...props}) => {
    const {sortOrder, sort} = useContext(SortableContext);
    const classNames = [];
    if (className) classNames.push(className)

    if (!disabled) {
        classNames.push('sorter');
        const { parameter } = sortOrder;
        if (name === parameter) classNames.push('sorted')
    }

    return (
        <Component
            className={classNames.length > 0 ? classNames.join(' ') : undefined}
            onClick={disabled ? undefined : (e) => {
                e.stopPropagation();
                sort(name);
            }}
            {...props}
        />
    )
}

/**
 * 
 * @param {*} parameter 
 * @param {*} direction 
 */
const defaultSortFactory = (parameter, direction) => (a, b) => {
    const m = direction === 'asc' ? 1 : -1;
    let result;
    if (typeof a[parameter] === 'string') {
        result = (a[parameter] || '').toUpperCase() >= (b[parameter] || '').toUpperCase()
    } else {
        result = a[parameter] >= b[parameter];
    }

    return (result ? 1 : -1) * m;
};

/**
 * HoC to create sortable context.
 * Based on react hooks.
 * 
 * Wrapper recieves 'data' prop, sorts it
 * and returns sorted data as 'data' prop to the Component.
 * 
 * @param {*} Component 
 * @param {*} options - {
 *  sortFactory - (parameter, direction) => (a, b) => number,
 *  parameter - default sort parameter
 *  direction - default sort direction
 *  defaultDirection - a direction that is used when the sort parameter changes
 * }
 */
export const controlledSortableContext = (Component, {
    sortFactory=defaultSortFactory, defaultDirection='asc', inMemory=true
} = {}) => (
    forwardRef(({
        data=[],
        onSort,
        sortDirection='asc',
        sortParameter,
        ...props
    }, ref) => {
        const sortedData = !inMemory ? data : (
            useMemo(() => {
                const sortedData = sortParameter == null
                    ? data
                    : data.sort(sortFactory(sortParameter, sortDirection))
                ;

                return sortedData.slice();
            }, [data, sortParameter, sortDirection]
        ));

        const sortOrder = useMemo(() => ({
            parameter: sortParameter,
            direction: sortDirection,
            defaultDirection
        }), [sortParameter, sortDirection]);

        const sort = (name) => {
            const {parameter, direction} = sortOrderFactory(sortOrder)(name);

            typeof onSort === 'function' && onSort({
                parameter, direction
            });
        }

        return (
            <SortableContext.Provider value={{sortOrder, data, sortedData, sort}}>
                <Component {...props} data={sortedData} ref={ref} />
            </SortableContext.Provider>
        )
    })
)

/**
 * A HoC for generating wrapper around controlledSortableContext
 * that stores the state.
 * 
 * @returns a component with 
 *  defaultSortParameter
 *  defaultSortDirection
 *  onSort
 * props.
 * 
 * @param {*} Component 
 * @param {*} options - controlledSortableContext options
 * @see controlledSortableContext
 */
export const sortableContext = (Component, {
    sortFactory=defaultSortFactory, defaultDirection='asc', inMemory=true
} = {}) => {
    const Sortable = controlledSortableContext(Component, {
        sortFactory, defaultDirection, inMemory
    })

    return (
        forwardRef(({
            onSort,
            defaultSortParameter,
            defaultSortDirection='asc',
            ...props
        }, ref) => {
            const [state, changeState] = useState({
                parameter: defaultSortParameter,
                direction: defaultSortDirection
            });

            const sort = ({parameter, direction}) => {
                changeState({
                    parameter, direction
                })

                typeof onSort === 'function' && onSort({
                    parameter, direction
                });
            }

            return (
                <Sortable
                    ref={ref}
                    sortParameter={state.parameter}
                    sortDirection={state.direction}
                    onSort={sort}
                    {...props}
                />
            )
        })
    )
}