import React, { useContext, forwardRef, useEffect, useRef } from 'react';

import { table, DefaultDataRowRenderer, DefaultRowRenderer } from './table';
import { selectionContext, SelectionContext, singleSelectionReducer } from './hocs/withSelection';

/**
 * Table dataRowRenderer decorator HoC.
 * 
 * @param {*} Row - rowRenderer
 * @param {*} DataRow - dataRowRenderer
 */
const detailsRowRenderer = (
    DataRow=DefaultDataRowRenderer,
    Row=DefaultRowRenderer
) => {
    const RowWithDetals = ({
        className,
        tableProps,
        ...props
    }) => {
        const {
            close, toggle, isSelected,
            detailsRenderer: Details,
            tabIndex,
            isSelectable=(index) => true,
        } = useContext(DetailsContext);
        if (Details == null)
        {
            return <DataRow {...{className, tableProps, ...props}} />
        }

        const { index, columns } = props;

        const onClick = () => toggle(index);
        const selected = isSelected(index);
        const selectable = isSelectable(index);

        const classNames = [];
        if (className) classNames.push(className);
        if (selectable) classNames.push('selectable-row');
        if (selected) classNames.push('selected-row');

        return (
            <React.Fragment>
                <DataRow
                    {...props}
                    tableProps={tableProps}
                    tabIndex={onClick && tabIndex ? tabIndex : undefined}
                    onKeyPress={selectable ? (e) => {
                        if (e.which === 13 && e.target.click) e.target.click();
                    } : undefined}
                    onClick={selectable ? onClick : undefined}
                    className={classNames.length > 0 ? classNames.join(' ') : undefined}
                />
                { selected ? (
                    <Row className="inline-details">
                        <td colSpan={columns.length}>
                            <Details
                                {...props}
                                {...tableProps}
                                close={() => close(index)}
                            />
                        </td>
                    </Row>
                ) : null}
            </React.Fragment>
        )
    }

    return RowWithDetals;
}

export const DetailsContext = React.createContext({
    detailsRenderer: () => null,
    close: index => {},
    toggle: index => {},
    open: index => {},
    isSelected: index => true,
    clear: ()=> {},
    isSelectable: index => true,
    selected: [],
    tabIndex: undefined,
    keyFactory: index => true
});

/**
 * HoC that injects DetailsContext into a Table.
 * Utilizes SelectionContext.
 * 
 * Injects the context.
 * Overrides row renderer to inject details into the table.
 * Overrides tabIndex, onClick and onKeyPress from table dataRowProps attribute.
 * 
 * @param {*} selectionReducer -- a reducer used by SelectionContext. 
 */
export const withInlineDetailsContext = ({
    selectionReducer=singleSelectionReducer,
    tabIndex,
    clearOnDataChange=true,
    isSelectable=(data, index) => true,
    keyFactory=(data, index) => index,
}={}) => (tableFactory=table) => ({
    dataRowRenderer,
    rowRenderer,
    ...options
}={}) => {
    const Table = tableFactory({
        dataRowRenderer: detailsRowRenderer(dataRowRenderer, rowRenderer),
        rowRenderer,
        ...options
    })

    return (
        selectionContext(selectionReducer, forwardRef(({
            data,
            detailsRenderer,
            ...props
        }, ref) => {
                const selection = useContext(SelectionContext);
                
                // dirty
                const mounted = useRef();
                useEffect(
                    () => {
                        if (!mounted.current) {
                            mounted.current = true;
                        }
                        else {
                            if (clearOnDataChange) {
                                selection.clear();
                            }
                        }
                    },
                    [data]
                );

                return (
                    <DetailsContext.Provider
                        value={{
                            close: (index) => {
                                selection.remove(keyFactory(data, index))
                            },
                            toggle: (index) => {
                                selection.toggle(keyFactory(data, index))
                            },
                            isSelected: (index) => (
                                selection.isSelected(keyFactory(data, index))
                            ),
                            open: (index) => (
                                selection.add(keyFactory(data, index))
                            ),
                            clear: selection.clear,
                            detailsRenderer,
                            isSelectable: (index) => (
                                isSelectable(data, index)
                            ),
                            tabIndex, keyFactory,
                            selected: selection.selected
                        }}
                    >
                        <Table
                            ref={ref}
                            data={data}
                            {...props}
                        />
                    </DetailsContext.Provider>
                )
            }
        ))
    )
}
