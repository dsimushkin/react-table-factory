# react-table-factory

A set of table factory decorators to easily implement table components inside user projects.

[Demo](http://dsimushkin.github.io/react-table-factory/)

## _table_ HoC

A HoC to implement table components with a set of overridable options.

| option | default | description |
| --- | --- | --- |
| `rowRenderer` | `DefaultRowRenderer` | table row component |
| `cellRenderer` | `DefaultCellRenderer` | table tbody cell component |
| `dataRowRenderer` | `DefaultDataRowRenderer` | table tbody row implementation |
| `dataCellRenderer` | `DefaultDataCellRenderer` | wrapper around tbody cell content |
| `headerCellRenderer` | `DefaultHeaderCellRenderer` | table thead cell component |
| `headerCellContentRenderer` | `DefaultHeaderCellRenderer` | wrapper around thead cell content|
| `headerRenderer` | `DefaultHeaderRenderer` | table thead component |
| `columns` | `[]` | array of column configurations. |

## columns config
| name | type | description |
| --- | --- | -- |
| `cell` (optional) | `Component` {`data`, `index`, `rowIndex`, table props that are not used for HoC implementation} | Component to render a table cell |
| `header` (optional) | `Component` {table props that are not used for HoC implementation} | Component to render a header cell |
| `name` (optional) | `string` | Column key |

Simple example:
```jsx
import { table } from 'react-table-factory';

...
const Table = table();

const columns = [
    {
        name: "attr1"
    },
    {
        header: (props) => (
            'Attr custom component'
        ),
        cell: ({data, ...props}) => (
            <span>Custom output {data['attr2']}</span>
        )
    },
];
...

const MyComponent = ({data, ...props}) => (
    <Table
        data={data}
        columns={columns}
        {...props} // props that will be propagated to cells.
    />
)

```

---
## _Decorators_

A set of decorators around table factory.

Some components can use css. Corresponding files should have the same base name. (i.e withFixedHeader.css).

| name (css) (remarks) | options(=defaults) | Table props:column config | description |
| --- | --- | --- | --- |
| `withFixedHeader` (true) ||| Creates 2 Tables to implement a fixed header and a scrollable table content. Since it creates 2 tables, any decorators with context wrappers around table should NOT be wrapped by this component. |
| `withInlineDetailsContext` (false) | {`selectionReducer`, `tabIndex`, `clearOnDataChange`, `isSelectable`, `keyFactory`} | {`detailsRenderer`, `clearOnDataChange`}:{} | Wraps Table with `selectionContext`. Implemented `selectionReducer`s are `singeSelectionReducer` and `multiSelectionReducer`. |
| `withClickableRowContext` (false) | {`tabIndex`, `isClickable`} | {`onRowClick`}:{} | Wraps Table with `ClickableRowContext`. Provides capabilities for row clicking. |
| `withLazyLoading` (false) | {`Loading` = ()=>'Loading', `threshold`=50, `NoDataComponent`} | {`fetch`, `fetching`, `fetchable`}:{} | Decorator around `withFixedHeader` table decorator. When fetching prop is set to true, show `Loading` component after table contents. If `fetching` is equal to `false` and the container is scrolled to bottom (taking `threshold` into account) `fetch` is called once. |
| `withSortingContext` (true) | {`defaultDirection`, `sortFactory`, `inMemory` = false, `sortableContextHoc`} | {`onSort`, `sortDirection`='asc', `sortParameter`}:{`sortable`,`name`} | Wraps Table with `SortableContext`. Provides a `Sorter` Component to implement custom sorting elements. If a `name` option of column config is an array, the one from Table props will be used, otherwise the first elem will be used. |
| `withInMemorySortingContext` (true) | {`defaultDirection`, `sortFactory`} | { `onSort`, `defaultSortParameter`, `defaultSortDirection`= 'asc'}:{`sortable`,`name`} | An overload wrapper for `withSortingContext` to provide in-memory sorting.
| `withAdaptive` (true) (will change) | {`Component`} | {}:{`removeAdaptiveColname`, `hideAdaptive`, `hideFullSize`} | Injects a `Component` inside each cell. Adaptive layout should be handled using CSS rules. |
| `withHeaderControl` (false) (will change) || {}:{`control`} | Adds 1 to colspan of each cell previous to column with `controll`. This component is used when you want to create an element in header, but doesn't effect the tbody cell layout. |
| `withHeaderCellOverflow` (true) || {}:{`removeOverflowWrapper`} | Adds a set of wrapper around header cell contents. Overflow should be handled using css. |
| `withEmptyRow` (false) | {`isEmpty` = (rowProps)=>false, `Component`, `classNameFactory` = (dataRowProps)=>'empty-row'}:{} || Provides capabilities to implement empty td that spans the whole row |
---

## TODO
- [ ] Add ColGroup Component.
- [ ] Add tbody renderer option to table hoc.
- [ ] Create decorator to add virtualization to withFixedHeader.
- [ ] Remove withHeaderControl for a more flexible decorator.
- [ ] Create user guide to create new decorators and use existing.
- [ ] Use react router for more usage examples.