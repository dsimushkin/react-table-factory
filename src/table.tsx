import * as React from "react";

export interface IColumnProps {
    name?: string,
    cell?: React.ComponentType<any>,
    header?: React.ComponentType<any>,
}

export const DefaultRowRenderer = React.forwardRef<any, any>((
    props, ref,
) => (
    <tr {...props} ref={ref} />
))

export interface ICellRendererProps {
    columns?: IColumnProps[],
    index?: number,
    rowIndex?: number,
}

export const DefaultCellRenderer = React.forwardRef<any, ICellRendererProps & any>((
    {
        columns,
        index,
        rowIndex,
        ...props
    },
    ref,
) => (
    <td {...props} ref={ref} />
))

export interface IDataCellRendererProps {
    header?: any,
    name?: string,
    cell?: React.ComponentType<any>,
    data?: []
}

export const DefaultDataCellRenderer = React.forwardRef<any, IDataCellRendererProps>((
    {
        header,
        name,
        cell: Cell,
        data,
        ...props
    },
    ref,
) => (
    Cell ? (
        <Cell data={data} ref={ref} {...props}/>
    ) : (
        <span ref={ref}>{name != null && data != null ? data[name] : null}</span>
    )
))

export interface IHeaderCellContentRendererProps {
    header?: React.ComponentType<any>,
    name?: string,
    cell?: React.ComponentType<any>,
    tableProps?: any,
    children?: any,
}

export const DefaultHeaderCellContentRenderer = ({
    header: Header,
    name,
    cell,
    tableProps,
    children,
    ...props
}: IHeaderCellContentRendererProps) => (
    <React.Fragment>
        { Header ? (
            <Header {...tableProps} name={name} cell={cell}/>
        ) : (
            name || null
        )}
        { children }
    </React.Fragment>
)

export interface IHeaderCellRendererProps {
    headerCellContentRenderer?: typeof DefaultHeaderCellContentRenderer,
    header?: React.ComponentType<any>,
    name?: string,
    cell?: React.ComponentType<any>,
    tableProps?: any,
    children?: any,
    index?: number,
}

export const DefaultHeaderCellRenderer = React.forwardRef<any, IHeaderCellRendererProps & any>((
    {
        headerCellContentRenderer: HeaderCell = DefaultHeaderCellContentRenderer,
        header,
        name,
        cell,
        tableProps,
        children,
        ...props
    },
    ref,
) => {
    return (
        <th ref={ref} {...props}>
            <HeaderCell
                tableProps={tableProps}
                name={name}
                cell={cell}
                header={header}
            />
            {children}
        </th>
    )
})

export interface IHeaderRendererProps {
    columns?: IColumnProps[],
    headerCellContentRenderer?: typeof DefaultHeaderCellContentRenderer,
    headerCellRenderer?: typeof DefaultHeaderCellRenderer,
    tableProps?: any,
    rowRenderer?: typeof DefaultRowRenderer,
}

export const DefaultHeaderRenderer = React.forwardRef<any, IHeaderRendererProps>((
    {
        columns,
        headerCellContentRenderer,
        headerCellRenderer: Cell = DefaultHeaderCellRenderer,
        tableProps,
        rowRenderer: Row = DefaultRowRenderer,
        ...props
    },
    ref,
) => (
    <thead ref={ref} {...props}>
        <Row>
            { columns != null ? columns.map((colProps, i) => (
                <Cell
                    key={i}
                    tableProps={tableProps}
                    headerCellContentRenderer={headerCellContentRenderer}
                    index={i}
                    {...colProps}
                />
            )) : null}
        </Row>
    </thead>
))

export interface IDataRowRendererProps {
    data?: [],
    columns?: IColumnProps[],
    index: number,
    cellRenderer?: typeof DefaultCellRenderer,
    dataCellRenderer?: typeof DefaultDataCellRenderer,
    tableProps?: any,
    rowRenderer?: typeof DefaultRowRenderer,
}

export const DefaultDataRowRenderer = React.forwardRef<any, IDataRowRendererProps & any>((
    {
        data,
        columns,
        index,
        cellRenderer: Cell = DefaultCellRenderer,
        dataCellRenderer: DataCell = DefaultDataCellRenderer,
        tableProps,
        rowRenderer: Row = DefaultRowRenderer,
        ...props
    },
    ref,
) => (
    <Row {...props} ref={ref}>
        { columns != null ? columns.map((columnProps: any, i: number) => (
            <Cell
                key={i}
                columns={columns}
                index={i}
                rowIndex={index}
            >
                <DataCell
                    {...columnProps}
                    data={data}
                    index={i}
                    rowIndex={index}
                    {...tableProps}
                />
            </Cell>
        )) : null}
    </Row>
))

export interface ITableConfig {
    rowRenderer?: typeof DefaultRowRenderer,
    cellRenderer?: typeof DefaultCellRenderer,
    dataRowRenderer?: typeof DefaultDataRowRenderer,
    dataCellRenderer?: typeof DefaultDataCellRenderer,
    headerCellRenderer?: typeof DefaultHeaderCellRenderer,
    headerCellContentRenderer?: typeof DefaultHeaderCellContentRenderer,
    headerRenderer?: typeof DefaultHeaderRenderer,
}

export interface ITableProps {
    children?: any,
    data?: [],
    columns?: IColumnProps[],
    style?: React.CSSProperties,
    className?: string,
}

export const table = ({
    rowRenderer: Row = DefaultRowRenderer,
    cellRenderer: Cell = DefaultCellRenderer,
    dataRowRenderer: DataRow = DefaultDataRowRenderer,
    dataCellRenderer = DefaultDataCellRenderer,
    headerCellRenderer = DefaultHeaderCellRenderer,
    headerCellContentRenderer = DefaultHeaderCellContentRenderer,
    headerRenderer: Header = DefaultHeaderRenderer,
}: ITableConfig = {}) => React.forwardRef<any, ITableProps>((
    {
        children,
        data = [],
        columns = [],
        style = {},
        className,
        ...props
    },
    ref,
) => {
    const tableRef = React.useRef<any>();
    const headRef = React.useRef<any>();

    React.useImperativeHandle(ref, () => ({
        head: headRef,
        table: tableRef,
    }));

    return (
        <table
            ref={tableRef}
            style={style}
            className={className}
            cellSpacing={0}
            cellPadding={0}
        >
            <colgroup>
                { columns.map((_, i) => (
                    <col key={i}/>
                )) }
            </colgroup>
            <Header
                ref={headRef}
                columns={columns}
                headerCellRenderer={headerCellRenderer}
                headerCellContentRenderer={headerCellContentRenderer}
                tableProps={props}
                rowRenderer={Row}
            />
            <tfoot>
                { children ? (
                    <Row className="additional-row">
                        <Cell colSpan={columns.length}>
                            { children }
                        </Cell>
                    </Row>
                ) : null}
            </tfoot>
            <tbody>
                { data.map((dataPros, i) => (
                    <DataRow
                        data={dataPros}
                        key={i}
                        columns={columns}
                        index={i}
                        cellRenderer={Cell}
                        dataCellRenderer={dataCellRenderer}
                        tableProps={props}
                        rowRenderer={Row}
                    />
                ))}
            </tbody>
        </table>
    )
})

export const composeDecorators = (...hocFactories: any[]) => (tableHoc = table) => (
    hocFactories.reverse().reduce((r, h) => h(r), tableHoc)()
)
