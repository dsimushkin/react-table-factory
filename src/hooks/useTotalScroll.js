import { useLayoutEffect } from 'react';

const isScrolledTillThreshold = (node, threshold=5) => {
    const { scrollHeight, scrollTop, clientHeight } = node;
    return scrollTop + clientHeight + threshold >= scrollHeight;
}

/**
 * React hook to execute a callback function on total scroll of a container
 * 
 * @param {*} ref - ref to container element. Should be a DOM Node.
 * @param {*} callback - 
 */
export const useTotalScroll = (ref, callback, threshold=5) => {
    useLayoutEffect(() => {
        const listener = (e) => {
            if (isScrolledTillThreshold(e.target, threshold)) {
                callback(e);
            }
        }

        let listenerAdded = false
        if (ref && ref.current && ref.current.addEventListener) {
            ref.current.addEventListener('scroll', listener);
            listenerAdded = true;
        }

        return () => {
            if (ref && listenerAdded && ref.current && ref.current.removeEventListener) {
                ref.current.removeEventListener('scroll', listener);
            }
        }
    })
}