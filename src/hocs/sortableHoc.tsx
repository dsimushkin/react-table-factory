import * as React from "react";

export interface ISortOrder {
    direction?: string,
    parameter?: string,
}

export interface ISortingOptions {
    defaultDirection?: string,
    direction?: string,
    parameter?: string,
}

/**
 * returns a new sorting order based on current sorting order
 */
export const sortOrderFactory = ({
    direction,
    defaultDirection = "asc",
    parameter,
}: ISortingOptions = {}) => (
    name?: string,
) => ({
    direction: name !== parameter || direction == null
        ? defaultDirection
        : (direction.toLowerCase() === "asc" ? "desc" : "asc")
    ,
    parameter: name,
})

/**
 * returns a single parameter from list of names
 * if one of names is a sorting parameter then it will be returned
 * otherwise the first element in names will be returned
 */
export const sortParameterFactory = ({
    parameter,
}: {parameter?: string} = {}) => (
    ...names: string[]
) => {
    if (parameter != null && names.indexOf(parameter) >= 0) { return parameter; }

    return names[0];
}

export interface ISortableContext {
    data: object[],
    sort: (name: string) => any,
    sortOrder: ISortingOptions,
    sortedData: object[]
}

export const SortableContext = React.createContext<ISortableContext>({
    data: [],
    sort: () => {},
    sortOrder: {},
    sortedData: [],
});

export interface ISorterProps {
    name: string,
    disabled: boolean,
    Component: React.ComponentType<any> | string,
    className?: string
}

/**
 * Simple wrapper to inject sorting on click
 * //FIXME overrides onClick
 */
export const Sorter = ({
    disabled = false,
    Component = "span",
    className,
    name,
    ...props
}: ISorterProps) => {
    const {sortOrder, sort} = React.useContext(SortableContext);
    const classNames = [];
    if (className) { classNames.push(className) }

    if (!disabled) {
        classNames.push("sorter");
        const { parameter } = sortOrder;
        if (name === parameter) { classNames.push("sorted") }
    }

    return (
        <Component
            className={classNames.length > 0 ? classNames.join(" ") : undefined}
            onClick={disabled ? undefined : () => sort(name)}
            {...props}
        />
    )
}

/**
 *
 * @param {*} parameter
 * @param {*} direction
 */
const defaultSortFactory = (
    direction: string,
    parameter: string,
) => (a: object, b: object) => {
    const m = direction === "asc" ? 1 : -1;
    let result;
    if (typeof a[parameter] === "string") {
        result = (a[parameter] || "").toUpperCase() >= (b[parameter] || "").toUpperCase()
    } else {
        result = a[parameter] >= b[parameter];
    }

    return (result ? 1 : -1) * m;
};

export interface IControlledSortableProps {
    data?: object[],
    onSort?: (sortOrder: ISortOrder) => any,
    sortDirection?: string,
    sortParameter?: string,
}

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
export const controlledSortableContext = (
    Component: React.ComponentType<any>,
    {
        sortFactory = defaultSortFactory,
        defaultDirection = "asc",
        inMemory = true,
    } = {},
) => (
    React.forwardRef((
        {
            data = [],
            onSort,
            sortDirection= "asc",
            sortParameter,
            ...props
        }: IControlledSortableProps,
        ref,
    ) => {
        const sortedData = !inMemory ? data : (
            React.useMemo(() => {
                return (sortParameter == null
                    ? data
                    : data.sort(sortFactory(sortParameter, sortDirection))
                ).slice();
            }, [data, sortParameter, sortDirection],
        ));

        const sortOrder = React.useMemo(() => ({
            defaultDirection,
            direction: sortDirection,
            parameter: sortParameter,
        }), [sortParameter, sortDirection]);

        const sort = (name?: string) => {
            const {parameter, direction} = sortOrderFactory(sortOrder)(name);

            if (typeof onSort === "function") {
                onSort({ direction, parameter });
            }
        }

        return (
            <SortableContext.Provider value={{sortOrder, data, sortedData, sort}}>
                <Component {...props} data={sortedData} ref={ref} />
            </SortableContext.Provider>
        )
    })
)

export interface ISortableProps {
    onSort?: (sortOrder: ISortOrder) => any,
    defaultSortParameter?: string,
    defaultSortDirection?: string,
}

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
export const sortableContext = (
    Component: React.ComponentType<any>,
    {
        sortFactory = defaultSortFactory,
        defaultDirection= "asc",
        inMemory= true,
} = {}) => {
    const Sortable = controlledSortableContext(
        Component,
        { defaultDirection, inMemory, sortFactory },
    )

    return (
        React.forwardRef((
            {
                onSort,
                defaultSortParameter,
                defaultSortDirection = "asc",
                ...props
            }: ISortableProps,
            ref,
        ) => {
            const [state, changeState] = React.useState<ISortOrder>({
                direction: defaultSortDirection,
                parameter: defaultSortParameter,
            });

            const sort = (sortOrder: ISortOrder) => {
                changeState(sortOrder);

                if (typeof onSort === "function") {
                    onSort(sortOrder);
                }
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
