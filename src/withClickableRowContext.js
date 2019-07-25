import React from "react";
import { table, DefaultDataRowRenderer } from "./table";

const ClickableRowContext = React.createContext({
  onClick: () => {},
  isClickable: (index) => true
})

/**
 * Table dataRowRenderer decorator HoC.
 * 
 * @param {*} DataRow - dataRowRenderer
 */
const clickableRow = (
  DataRow = DefaultDataRowRenderer
) => (
  React.forwardRef((
    {
      onClick: onClickDefault,
      tabIndex: tabIndexDefault,
      style,
      className,
      ...props
    },
    ref
  ) => {
    const { onClick, isClickable, tabIndex } = React.useContext(ClickableRowContext);
    const clickable = React.useMemo(
      () => onClick && isClickable(props.index),
      [props.data, props.index, isClickable, onClick]
    );

    const classNames = [];
    if (className) classNames.push(className);
    if (clickable) classNames.push('clickable-row');

    return (
      <DataRow
        {...props}
        ref={ref}
        tabIndex={tabIndex != null ? tabIndex : tabIndexDefault}
        onClick={clickable ? (e) => {
          onClick(props.index, e);
        } : undefined}
        style={!clickable ? style : {...(style || {}), cursor: 'pointer'}}
        className={classNames.length > 0 ? classNames.join(' ') : undefined}
      />
    )
  })
)

/**
 * HoC that injects ClickableRowContext into a Table.
 * 
 * Injects the context.
 * Overrides data row renderer to inject onClick into the table data row.
 * Adds tabIndex from config.
 * Overrides onClick from table onRowClick attribute.
 * 
 * @param {*} isClickable - fn to check if row is clickable
 * @param {*} tabIndex - data row tabIndex if necessary
 */
export const withClickableRowContext = ({
  tabIndex,
  isClickable = (index) => true,
}={}) => (
  tableFactory=table,
) => ({
  dataRowRenderer,
  ...options
}={}) => {
  const Table = tableFactory({
    dataRowRenderer: clickableRow(dataRowRenderer),
    ...options
  });

  const ClickableRowTable = React.forwardRef((
    {
      onRowClick,
      ...props
    },
    ref) => (
      <ClickableRowContext.Provider
        value={{
          onClick: onRowClick,
          tabIndex,
          isClickable
        }}
      >
        <Table
          ref={ref}
          {...props}
        />
      </ClickableRowContext.Provider>
    ));

    return ClickableRowTable;
}