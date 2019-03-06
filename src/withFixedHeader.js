import React, { forwardRef, useRef, useLayoutEffect, useImperativeHandle } from 'react';

import { DefaultHeaderRenderer, table } from './table';

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
        const nodeChildren = node.getElementsByTagName(selector);
        if (nodeChildren.length) {
            const destChildren = dest.getElementsByTagName(selector);
            for (let i = 0, length = nodeChildren.length; i < length; i++) {
                cloneStyles(nodeChildren[i], destChildren[i], true, prop, selector, callback);
            }
        }
    }
}

/**
 * injects additional styles into header component
 */
const hideHeaderRenderer = (HeaderRenderer) => (
    forwardRef(({style={}, ...props}, ref) => (
        <HeaderRenderer
            ref={ref}
            style={{...style, visibility: 'hidden', border: '0'}}
            {...props}
        />
    ))
)

/**
 * Continuous monitor based on requestAnimationFrame
 * 
 * @param {*} callback 
 */
export const rafMonitorFactory = (callback) => () => {
    let raf;
    const loop = () => {
        callback();
        raf = requestAnimationFrame(loop);
    }

    loop();

    return () => {
        cancelAnimationFrame(raf);
    }
}

/**
 * Window resize based monitor.
 * If some inner component is rendered on it's own
 * call window.dispatchEvent(new Event('resize'))
 * after component render.
 * 
 * @param {*} callback 
 */
export const windowMonitorFactory = (callback) => () => {
    callback();
    window.addEventListener('resize', callback, true);

    return () => {
        window.removeEventListener('resize', callback, true)
    }
}

/**
 * HoC factory to generate a table with fixed header.
 * 
 * Wraps the Table with multiple wrappers to make header fixed.
 * Utilizes useLayoutEffect and the monitorFactory to sync headers styles.
 * 
 * Adds scrollable container to the table generated ref.
 * 
 * If some of children are not of type Column,
 * they will be rendered immediately after the table.
 * 
 * !IMPORTANT!
 * Since this decorator is creating multiple tables it
 * should be before any other wrappers that use context provider.
 * 
 * @param {*} TableComponent 
 * @param {*} monitorFactory 
 */
export const withFixedHeader = ({
    monitorFactory=windowMonitorFactory
}={}) => (tableFactory=table) => ({
    headerRenderer: Header=DefaultHeaderRenderer,
    ...options
}={}) => {
    const Table = tableFactory({
        headerRenderer: hideHeaderRenderer(Header),
        ...options
    });

    const FakeTable = tableFactory({
        headerRenderer: Header,
        ...options
    })

    return forwardRef(({
        children, data, // arbitrary
        style={}, className,
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
        useLayoutEffect(monitorFactory(() => {
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
                
                cloneStyles(
                    tableRef.current.head.current,
                    clone.current.head.current,
                    true,
                    'width',
                    'th',
                );
            });
        }))
    
        return (
            <div style={{...style, position: 'relative'}} className={className}>
                <div className="scrollable-table-content" ref={scrollContainer} onScroll={onScroll}>
                    <div className="scrollable-table-wrapper">
                        <div className="table-wrapper">
                            <Table
                                data={data}
                                ref={tableRef}
                                {...props}
                            >
                            { children }
                            </Table>
                            { children }
                        </div>
                    </div>
                </div>
                <div className="scrollable-table-wrapper" style={{position: 'relative'}}>
                    <FakeTable
                        ref={clone}
                        {...props}
                    >
                        {children}
                    </FakeTable>
                </div>
            </div>
        )
    })
}
