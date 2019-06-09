import React, { forwardRef, useRef, useImperativeHandle, useEffect } from 'react';

import { table } from './table';
import { useTotalScroll } from './hooks/useTotalScroll';

/**
 * HoC for adding Loading Component as a last child of a Table
 * if fetching is truthy and calling fetch when the table in scrolled to bottom
 * and fetching is falsy.
 * 
 * @param {*} Loading 
 */
export const withLazyLoading = ({
    Loading=() => 'Loading',
    NoDataComponent,
    threshold=50
}={}) => (tableFactory=table) => (options) => {
    const Table = tableFactory(options);

    return forwardRef(({
        fetch,
        fetching,
        fetched,
        children,
        data,
        ...props
    }, ref) => {
        const tableRef = useRef();
        useImperativeHandle(ref, () => tableRef.current);

        // execute only first fetch request
        let timeout;
        const fetchIfNeeded = () => {
            if (timeout == null) {
                timeout = setTimeout(() => {
                    if (!fetching && fetch) {
                        fetch();
                    }
                }, 0);
            }
        }

        // clear any existing timeouts on unmount
        useEffect(() => () => clearTimeout(timeout), []);

        const anotherRef = useRef();
        useImperativeHandle(anotherRef, () => tableRef.current.scrollContainer)

        useTotalScroll(anotherRef, fetchIfNeeded, threshold);

        let Component = null;
        if (fetching) Component = Loading;
        if (fetched && NoDataComponent != null && (data == null || data .length === 0))
        {
            Component = NoDataComponent;
        }

        return (
            <Table
                ref={tableRef}
                data={data}
                {...props}
            >
                { children }
                { Component != null ? <Component {...props}/> : null}
            </Table>
        )
    })
}