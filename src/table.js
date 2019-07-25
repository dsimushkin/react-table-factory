import React, { forwardRef, useRef, useImperativeHandle } from 'react';

export const DefaultRowRenderer = forwardRef((props, ref) => (
    <tr {...props} ref={ref} />
))

export const DefaultCellRenderer = forwardRef(({
    columns,
    index,
    rowIndex,
    ...props
}, ref) => (
    <td {...props} ref={ref} />
))

export const DefaultDataCellRenderer = forwardRef(({
    header, name, cell: Cell, data, ...props
}, ref) => (
    Cell ? (
        <Cell data={data} ref={ref} {...props}/>
    ) : (
        <span ref={ref}>{data[name]}</span>
    )
))

export const DefaultHeaderCellContentRenderer = ({
    header: Header, name, cell, tableProps, children
}) => (
    <React.Fragment>
        { Header ? (
            <Header {...tableProps} name={name} cell={cell}/>
        ) : (
            name || null
        )}
        { children }
    </React.Fragment>
)

export const DefaultHeaderCellRenderer = forwardRef(({
    headerCellContentRenderer: HeaderCell=DefaultHeaderCellContentRenderer,
    header,
    name,
    cell,
    tableProps,
    children,
    ...props
}, ref) => {
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

export const DefaultHeaderRenderer = forwardRef(({
    columns,
    headerCellContentRenderer,
    headerCellRenderer: Cell=DefaultHeaderCellRenderer,
    tableProps,
    rowRenderer: Row=DefaultRowRenderer,
    ...props
}, ref) => (
    <thead ref={ref} {...props}>
        <Row>
            { columns.map((props, i) => (
                <Cell
                    key={i}
                    tableProps={tableProps}
                    headerCellContentRenderer={headerCellContentRenderer}
                    index={i}
                    {...props}
                />
            ))}
        </Row>
    </thead>
))

export const DefaultDataRowRenderer = forwardRef(({
    data,
    columns,
    index,
    cellRenderer: Cell=DefaultCellRenderer,
    dataCellRenderer: DataCell=DefaultDataCellRenderer,
    tableProps,
    rowRenderer: Row=DefaultRowRenderer,
    ...props
}, ref) => (
    <Row {...props} ref={ref}>
        { columns.map((columnProps, i) => (
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
        ))}
    </Row>
))

export const table = ({
    rowRenderer: Row=DefaultRowRenderer,
    cellRenderer: Cell=DefaultCellRenderer,
    dataRowRenderer: DataRow=DefaultDataRowRenderer,
    dataCellRenderer=DefaultDataCellRenderer,
    headerCellRenderer=DefaultHeaderCellRenderer,
    headerCellContentRenderer=DefaultHeaderCellContentRenderer,
    headerRenderer: Header=DefaultHeaderRenderer,
}={}) => forwardRef(({
    children,
    data=[], columns=[], // arbitrary
    style={}, className, // styles
    ...props
}, ref) => {
    const tableRef = useRef();
    const headRef = useRef();

    useImperativeHandle(ref, () => ({
        table: tableRef,
        head: headRef
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
                { data.map((data, i) => (
                    <DataRow
                        data={data}
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

export const composeDecorators = (...hocFactories) => (tableHoc=table, config) => (
    hocFactories.reverse().reduce((r, h) => h(r), tableHoc)(config)
)
