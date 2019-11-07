import React, {
  forwardRef,
  useRef,
  useImperativeHandle,
  useEffect
} from "react";

import { table } from "./table";
import { is } from "./utils/helpers";

/**
 * HoC for adding Loading Component as a last child of a Table
 * if fetching is truthy and calling fetch when the table in scrolled to bottom
 * and fetching is falsy.
 *
 * @param {*} Loading
 */
export const withLazyLoading = ({
  Loading = ({ fetching }) => (fetching ? "Loading" : null),
  NoDataComponent,
  threshold = 50
} = {}) => (tableFactory = table) => options => {
  const Table = tableFactory(options);

  return forwardRef(
    ({ fetch, fetching, fetchable, children, data, ...props }, outerRef) => {
      const tableRef = useRef();
      useImperativeHandle(outerRef, () => tableRef.current);

      const ref = useRef();
      useImperativeHandle(ref, () => tableRef.current.scrollContainer);

      useEffect(() => {
        const shouldFetch = !fetching && fetchable && is.fn(fetch);
        function listener(e) {
          const { scrollHeight, scrollTop, clientHeight } = e.target;

          if (scrollTop + clientHeight + threshold >= scrollHeight) {
            if (shouldFetch) {
              e.target.removeEventListener("scroll", listener);
              fetch();
            }
          }
        }

        const node = ref && ref.current;
        if (shouldFetch && node && node.addEventListener) {
          node.addEventListener("scroll", listener);
        }

        return () => {
          if (node && node.removeEventListener) {
            node.removeEventListener("scroll", listener);
          }
        };
      });

      let Component = Loading;
      if (
        !fetching &&
        !fetchable &&
        (data == null || data.length === 0) &&
        NoDataComponent != null
      ) {
        Component = NoDataComponent;
      }

      return (
        <Table ref={tableRef} data={data} {...props}>
          {children}
          {Component != null ? <Component fetching={fetching} /> : null}
        </Table>
      );
    }
  );
};
