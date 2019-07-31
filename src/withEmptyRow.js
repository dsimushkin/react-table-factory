import React, { forwardRef, useContext } from "react";
import { table, DefaultDataRowRenderer, DefaultRowRenderer } from "./table";

export const EmptyRowContext = React.createContext({
    isEmpty: () => false,
    emptyRowContentRenderer: () => null,
    classNameFactory: () => 'empty-row'
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
    const EmptyRowRenderer = (props) => {
        const { isEmpty, Component, classNameFactory } = useContext(EmptyRowContext);

        return Component != null && isEmpty(props) ? (
            <Row className={classNameFactory(props)}>
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
    Component=()=>null,
    classNameFactory=(dataRowProps)=>'empty-row'
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
                Component,
                classNameFactory
            }}
        >
            <Table ref={ref} {...props} />
        </EmptyRowContext.Provider>
    ))
}
