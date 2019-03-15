import React, { useContext, forwardRef, useEffect } from 'react';

import { table, DefaultDataRowRenderer } from './table';
import { selectionContext, SelectionContext, singleSelectionReducer } from './hocs/withSelection';

/**
 * Table dataRowRenderer decorator HoC.
 * 
 * @param {*} Row - dataRowRenderer
 */
const detailsRowRenderer = (Row=DefaultDataRowRenderer) => {
    const RowWithDetals = ({
        columns,
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
            return <Row {...{columns, className, ...props}} />
        }

        const { index } = props;

        const onClick = () => toggle(index);
        const selected = isSelected(index);
        const selectable = isSelectable(index);

        const classNames = [];
        if (className) classNames.push(className);
        if (selectable) classNames.push('selectable-row');
        if (selected) classNames.push('selected-row');

        return (
            <React.Fragment>
                <Row
                    {...props}
                    tabIndex={onClick && tabIndex ? tabIndex : undefined}
                    onKeyPress={selectable ? (e) => {
                        if (e.which === 13 && e.target.click) e.target.click();
                    } : undefined}
                    onClick={selectable ? onClick : undefined}
                    columns={columns}
                    className={classNames.length > 0 ? classNames.join(' ') : undefined}
                    tableProps={tableProps}
                />
                { selected ? (
                    <tr className="inline-details">
                        <td colSpan={columns.length}>
                            <Details
                                {...props}
                                {...tableProps}
                                close={() => close(index)}
                            />
                        </td>
                    </tr>
                ) : null}
            </React.Fragment>
        )
    }

    return RowWithDetals;
}

const efn=()=>{}

export const DetailsContext = React.createContext({
    detailsRenderer: efn,
    close: efn,
    toggle: efn,
    isSelected: efn,
});

/**
 * HoC that injects DetailsContext into a Table.
 * Utilizes SelectionContext.
 * 
 * Injects the context.
 * Overrides row renderer to inject details into the table.
 * 
 * @param {*} TableComponent
 * @param {*} selectionReducer -- a reducer used by SelectionContext. 
 */
export const withInlineDetailsContext = ({
    selectionReducer=singleSelectionReducer,
    tabIndex
}={}) => (tableFactory=table) => ({
    dataRowRenderer,
    ...props
}={}) => {
    const Table = tableFactory({
        dataRowRenderer: detailsRowRenderer(dataRowRenderer),
        ...props
    })

    return (
        selectionContext(selectionReducer, forwardRef(({
            data, detailsRenderer, isSelectable, ...props
        }, ref) => {
                const {remove, clear, toggle, isSelected} = useContext(SelectionContext);

                useEffect(clear, [data]);

                return (
                    <DetailsContext.Provider
                        value={{
                            close: remove, toggle, isSelected, // selection context
                            detailsRenderer, isSelectable, // details context
                            tabIndex,
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
