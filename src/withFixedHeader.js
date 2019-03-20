import React, { forwardRef, useRef, useLayoutEffect, useImperativeHandle, useContext } from 'react';

import { table, DefaultHeaderRenderer, DefaultHeaderCellRenderer } from './table';

const cloneStyles = (
    node,
    dest,
    recursively=false,
    prop='cssText',
    selector="*",
    callback=(dest, node) => {} // called for each dest node
) => {
    if (node.matches(selector)) {
        dest.style[prop] = getComputedStyle(node)[prop];
        callback(dest, node);
    }
    
    if (recursively) {
        const nodeChildren = node.querySelectorAll(selector);
        if (nodeChildren.length) {
            const destChildren = dest.querySelectorAll(selector);
            for (let i = 0, length = nodeChildren.length; i < length; i++) {
                cloneStyles(nodeChildren[i], destChildren[i], true, prop, selector, callback);
            }
        }
    }
}

/**
 * An iframe watcher of for element resize
 * Parent element should have position: relative
 * 
 * @param {*} - {onResize}
 */
export const ResizeTrigger = ({onResize}) => {
    const ref = useRef();
    useLayoutEffect(
        () => {
            ref.current.contentWindow.addEventListener('resize', onResize);

            return () => {
                ref.current.contentWindow.removeEventListener('resize', onResize);
            }
        }
    )

    return (
        <iframe
            width="100%"
            height="100%"
            style={{position: 'absolute', top: 0, left: 0}}
            ref={ref}
        />
    )
}

const addResizeTrigger = (Cell=DefaultHeaderCellRenderer) => (
    forwardRef(({children, ...props}, ref) => {
        const { layout } = useContext(Context);
        return (
            <Cell
                {...props}
                children={children}
                ref={ref}
            >
                <ResizeTrigger onResize={layout}/>
            </Cell>
        )
    })
)

const Context = React.createContext({
    layout: () => {}
})

/**
 * HoC factory to generate a table with fixed header.
 * 
 * Wraps the Table with multiple wrappers to make header fixed.
 * Utilizes useLayoutEffect and the monitorFactory to sync headers styles.
 * 
 * Adds scrollable container to the table generated ref.
 * 
 * !IMPORTANT!
 * Since this decorator is creating multiple tables it
 * should be before any other wrappers that use context provider.
 * 
 * @param {*} TableComponent 
 * @param {*} monitorFactory 
 */
export const withFixedHeader = (tableFactory=table) => ({
    headerCellRenderer=DefaultHeaderCellRenderer,
    ...options
}={}) => {
    const Table = tableFactory({
        headerCellRenderer: addResizeTrigger(headerCellRenderer),
        ...options
    });

    const FakeTable = tableFactory({
        headerCellRenderer,
        ...options
    })

    return forwardRef(({
        children, data, // arbitrary
        onScroll,
        ...props
    }, ref) => {
        const tableRef = useRef();
        const clone = useRef();
        const scrollContainer = useRef();
    
        useImperativeHandle(ref, () => ({
            table: tableRef.current.table,
            scrollContainer: scrollContainer.current,
            head: tableRef.current.head
        }));

        let t;
        const layout = () => {
            cancelAnimationFrame(t);
            t = requestAnimationFrame(() => {
                cloneStyles(
                    tableRef.current.table.current,
                    clone.current.table.current,
                    false,
                    'width',
                );

                const headHeight = tableRef.current.head.current.clientHeight;
                tableRef.current.table.current.style.marginTop = `-${headHeight}px`;
                scrollContainer.current.style.top = `${headHeight}px`;
                scrollContainer.current.style.height = `calc(100% - ${headHeight}px)`;
                
                cloneStyles(
                    tableRef.current.head.current,
                    clone.current.head.current,
                    true,
                    'width',
                    'th',
                );
            });
        }

        useLayoutEffect(
            () => {
                layout();

                return () => {
                    cancelAnimationFrame(t);
                }
            }, []
        )
    
        return (
            <Context.Provider value={{layout}}>
                <div
                    style={{position: 'relative'}}
                    className={`scrollable-table ${props.className || ''}`}
                >
                    <div
                        className="scrollable-table-content"
                        ref={scrollContainer}
                        onScroll={onScroll}
                    >
                        <div className="scrollable-table-wrapper">
                            <div className="table-wrapper">
                                <Table
                                    data={data}
                                    ref={tableRef}
                                    {...props}
                                >
                                    { children }
                                </Table>
                            </div>
                        </div>
                    </div>
                    <div className="scrollable-table-wrapper" style={{position: 'absolute', top: 0}}>
                        <FakeTable
                            ref={clone}
                            {...props}
                        />
                    </div>
                </div>
            </Context.Provider>
        )
    })
}
