import * as React from "react";
import { forwardRef, useContext } from "react";
import { DefaultDataRowRenderer, DefaultRowRenderer, table } from "./table";

export const EmptyRowContext = React.createContext({
    emptyRowContentRenderer: () => null,
    isEmpty: () => false,
});

/**
 * Table dataRowRenderer decorator HoC.
 * 
 * @param {*} Row - dataRowRenderer
 */
const rowEnhancer = (
    DataRow=DefaultDataRowRenderer,
    Row=DefaultRowRenderer
) => {
    const EmptyRowRenderer = (props: any) => {
        const { isEmpty, Component } = useContext(EmptyRowContext);

        return Component != null && isEmpty(props) ? (
            <Row className="empty-row">
                <td colSpan={props.columns.length}>
                    <Component {...props}/>
                </td>
            </Row>
        ) : (
            <DataRow {...props} />
        )
    }

    return EmptyRowRenderer;
}

/**
 * HoC that injects EmptyRowContext into a Table.
 * 
 * Injects the context.
 * Overrides row renderer to inject Component into the table.
 * 
 * @param {*} isEmpty
 * @param {*} Component
 */

export const withEmptyRow = ({
    isEmpty=({data})=>false,
    Component=()=>null
}={}) => (tableFactory = table) => ({
    dataRowRenderer,
    rowRenderer,
    ...options
}) => {
    
    const Table = tableFactory({
        dataRowRenderer: rowEnhancer(dataRowRenderer, rowRenderer),
        rowRenderer,
        ...options
    })

    return forwardRef((props, ref) => (
        <EmptyRowContext.Provider
            value={{
                isEmpty,
                Component
            }}
        >
            <Table ref={ref} {...props} />
        </EmptyRowContext.Provider>
    ))
}
