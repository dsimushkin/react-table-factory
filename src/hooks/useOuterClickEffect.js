import { useEffect } from 'react';

/**
 * React hook to execute a callback function on click outside of the container
 * 
 * @param {*} ref - ref to container element. Should be a DOM Node.
 * @param {*} callback - 
 */
export const useOuterClickEffect = (ref, callback) => {
    useEffect(() => {
        const windowClick = (e) => {
            if (!ref.current.contains(e.target)) {
                callback();
            }
        }
        window.addEventListener('click', windowClick, true);

        return () => {
            window.removeEventListener('click', windowClick, true);
        }
    })
}