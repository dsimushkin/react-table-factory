import React, { forwardRef, useContext } from 'react';

import { table, DefaultHeaderCellContentRenderer, DefaultHeaderCellRenderer } from './table';

/**
 * Wrapper
 * 
 * @param {*} param
 */
export const HeaderCellOverflowWrapper = ({children}) => (
    <div className="header-wrapper">
        <div className="header-positioner">
            <div>
                { children }
            </div>
        </div>
    </div>
)

const OverflowContext = React.createContext({
    removeOverflowWrapper: false
})

/**
 * Table headerCellRenderer decorator HoC.
 * Removes removeOverflowWrapper property and stores it on context.
 * 
 * @param {*} Cell 
 */
const decorageHeaderCellRenderer = (Cell=DefaultHeaderCellRenderer) => (
    forwardRef(({
        removeOverflowWrapper,
        ...props
    }, ref) => (
        <OverflowContext.Provider value={{removeOverflowWrapper}}>
            <Cell
                ref={ref}
                {...props}
            />
        </OverflowContext.Provider>
    ))
)

/**
 * Table headerCellContentRenderer decorator HoC.
 * 
 * @param {*} Cell 
 */
const decorateHeaderCellContentRenderer = (Cell=DefaultHeaderCellContentRenderer) => (
    forwardRef((props, ref) => {
        const { removeOverflowWrapper } = useContext(OverflowContext);

        return (
            removeOverflowWrapper ? (
                <Cell
                    ref={ref}
                    {...props}
                />
            ) : (
                <HeaderCellOverflowWrapper>
                    <Cell
                        ref={ref}
                        {...props}
                    />
                </HeaderCellOverflowWrapper>
            )
        )
    })
)

export const withHeaderCellOverflow = (
    tableFactory=table
) => ({
    headerCellContentRenderer,
    headerCellRenderer,
    ...props
}={}) => {
    return tableFactory({
        headerCellContentRenderer: decorateHeaderCellContentRenderer(headerCellContentRenderer),
        headerCellRenderer: decorageHeaderCellRenderer(headerCellRenderer),
        ...props
    });
}