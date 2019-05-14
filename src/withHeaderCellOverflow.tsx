import * as React from "react";
import {
    DefaultHeaderCellContentRenderer,
    DefaultHeaderCellRenderer,
    IColumnProps,
    ITableConfig,
    ITableProps,
    table,
} from "./table";

export const HeaderCellOverflowWrapper = ({
    children,
}: {children: any}) => (
    <div className="header-wrapper">
        <div className="header-positioner">
            <div>
                { children }
            </div>
        </div>
    </div>
)

const OverflowContext = React.createContext<{
    removeOverflowWrapper?: boolean,
}>({
    removeOverflowWrapper: false,
})

/**
 * Table headerCellRenderer decorator HoC.
 * Removes removeOverflowWrapper property and stores it on context.
 */
const decorateHeaderCellRenderer = (
    Cell = DefaultHeaderCellRenderer,
) => (
    React.forwardRef<any, {
        removeOverflowWrapper?: boolean,
        style?: React.CSSProperties,
    }>((
        {
            removeOverflowWrapper,
            style = {},
            ...props
        },
        ref,
    ) => (
        <OverflowContext.Provider value={{removeOverflowWrapper}}>
            <Cell
                ref={ref}
                style={{...style, position: "relative"}}
                {...props}
            />
        </OverflowContext.Provider>
    ))
)

/**
 * Table headerCellContentRenderer decorator HoC.
 */
const decorateHeaderCellContentRenderer = (
    Cell = DefaultHeaderCellContentRenderer,
) => (
    props: any,
) => {
    const { removeOverflowWrapper } = React.useContext(OverflowContext);

    return (
        removeOverflowWrapper ? (
            <Cell {...props}/>
        ) : (
            <HeaderCellOverflowWrapper>
                <Cell {...props}/>
            </HeaderCellOverflowWrapper>
        )
    )
}

export interface IWithHeaderCellOverflowColumn extends IColumnProps {
    removeOverflowWrapper?: boolean
}

export interface IWithHeaderCellOverflowProps extends ITableProps {
    columns?: IWithHeaderCellOverflowColumn[]
}

export const withHeaderCellOverflow = (
    tableFactory = table,
) => ({
    headerCellContentRenderer,
    headerCellRenderer,
    ...props
}: ITableConfig = {}) => {
    return tableFactory({
        headerCellContentRenderer: decorateHeaderCellContentRenderer(headerCellContentRenderer),
        headerCellRenderer: decorateHeaderCellRenderer(headerCellRenderer),
        ...props,
    });
}
