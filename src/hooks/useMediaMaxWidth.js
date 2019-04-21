import { useLayoutEffect } from 'react';

const matchesMaxWidth = (width) => window.matchMedia(`(max-width: ${width}px)`).matches;

/**
 * React hook to execute a callback function on window match size
 * 
 * @param {*} callback - 
 */
export const useMediaMaxWidth = (callback, maxWidth=5) => {
    useLayoutEffect(() => {
        const listener = () => {
            callback(matchesMaxWidth(maxWidth));
        }

        window.addEventListener('resize', listener);

        return () => {
            window.removeEventListener('resize', listener);
        }
    })

    return matchesMaxWidth(maxWidth);
}