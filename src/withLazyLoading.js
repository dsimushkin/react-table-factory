import React, {
  forwardRef,
  useRef,
  useImperativeHandle,
  useEffect
} from "react";

import { table } from "./table";

/**
 * HoC for adding Loading Component as a last child of a Table
 * if fetching is truthy and calling fetch when the table in scrolled to bottom
 * and fetching is falsy.
 *
 * @param {*} Loading
 */
export const withLazyLoading = ({
  Loading = () => "Loading",
  NoDataComponent,
  threshold = 50
} = {}) => (tableFactory = table) => options => {
  const Table = tableFactory(options);

  return forwardRef(({ fetch, fetching, children, data, ...props }, outerRef) => {
    const tableRef = useRef();
    useImperativeHandle(outerRef, () => tableRef.current);

    const ref = useRef();
    useImperativeHandle(ref, () => tableRef.current.scrollContainer);

    useEffect(() => {
      function listener(e) {
        const { scrollHeight, scrollTop, clientHeight } = e.target;
        if (scrollTop + clientHeight + threshold >= scrollHeight) {
          if (!fetching && fetch) {
            e.target.removeEventListener("scroll", listener);
            fetch();
          }
        }
      };
      
      const node = ref && ref.current;
      if (!fetching && fetch && node && node.addEventListener) {
        node.addEventListener("scroll", listener);
      }
  
      return () => {
        if (node && node.removeEventListener) {
          node.removeEventListener("scroll", listener);
        }
      }
    }, [fetching]);

    let Component = null;
    if (fetching) {
      Component = Loading;
    } else if (NoDataComponent != null && (data == null || data.length === 0)) {
      Component = NoDataComponent;
    }

    return (
      <Table ref={tableRef} data={data} {...props}>
        {children}
        {Component != null ? <Component {...props} /> : null}
      </Table>
    );
  });
};
