import React, { forwardRef, useRef, useImperativeHandle } from 'react';

import { table } from './index';
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
    threshold=5
}) => (tableFactory=table) => (options) => {
    const Table = tableFactory(options);

    return forwardRef(({fetch, fetching, children, ...props}, ref) => {
        const tableRef = useRef();
        useImperativeHandle(ref, () => tableRef.current);

        const fetchIfNeeded = () => {
            if (!fetching && fetch) {
                fetch();
            }
        }

        const anotherRef = useRef();
        useImperativeHandle(anotherRef, () => tableRef.current.scrollContainer)

        useTotalScroll(anotherRef, fetchIfNeeded, threshold);

        return (
            <Table
                ref={tableRef}
                {...props}
            >
                { children }
                { fetching ? <Loading /> : null}
            </Table>
        )
    })
}