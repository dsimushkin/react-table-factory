import * as React from "react";
import { DefaultHeaderCellRenderer, ITableConfig, ITableProps, table } from "./table";

const cloneStyles = (
    node: HTMLElement,
    dest: HTMLElement,
    recursively = false,
    prop = "cssText",
    selector = "*",
    callback = (destination: HTMLElement, target: HTMLElement) => {}, // called for each dest node
) => {
    if (node.matches(selector)) {
        (dest as HTMLElement).style[prop] = getComputedStyle(node)[prop];
        callback(dest, node);
    }

    if (recursively) {
        const nodeChildren: NodeListOf<HTMLElement> = node.querySelectorAll(selector);
        if (nodeChildren.length) {
            const destChildren: NodeListOf<HTMLElement> = dest.querySelectorAll(selector);
            for (let i = 0, length = nodeChildren.length; i < length; i++) {
                cloneStyles(
                    nodeChildren[i],
                    destChildren[i],
                    true,
                    prop,
                    selector,
                    callback);
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
export const ResizeTrigger = ({
    onResize,
}: {
    onResize: (e: UIEvent) => any,
}) => {
    const ref = React.useRef<any>();
    React.useLayoutEffect(
        () => {
            ref.current.contentWindow.addEventListener("resize", onResize);

            return () => {
                ref.current.contentWindow.removeEventListener("resize", onResize);
            }
        },
    )

    return (
        <iframe
            width="100%"
            height="100%"
            style={{position: "absolute", top: 0, left: 0}}
            ref={ref}
        />
    )
}

const addResizeTrigger = (
    Cell = DefaultHeaderCellRenderer,
) => (
    React.forwardRef<any, any>((props, ref) => {
        const { layout } = React.useContext(Context);
        return (
            <Cell
                {...props}
                ref={ref}
            >
                <ResizeTrigger onResize={layout}/>
            </Cell>
        )
    })
)

const Context = React.createContext({
    layout: () => {},
})

export interface IWithFixedHeaderProps extends ITableProps {
    onScroll: () => {},
}

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
 */
export const withFixedHeader = (
    tableFactory = table,
) => ({
    headerCellRenderer = DefaultHeaderCellRenderer,
    ...options
}: ITableConfig = {}) => {
    const Table = tableFactory({
        headerCellRenderer: addResizeTrigger(headerCellRenderer),
        ...options,
    });

    const FakeTable = tableFactory({
        headerCellRenderer,
        ...options,
    })

    return React.forwardRef<any, IWithFixedHeaderProps>((
        {
            children,
            data,
            onScroll,
            ...props
        },
        ref,
    ) => {
        const tableRef = React.useRef<any>();
        const clone = React.useRef<any>();
        const scrollContainer = React.useRef<any>();

        React.useImperativeHandle(ref, () => ({
            head: tableRef.current.head,
            scrollContainer: scrollContainer.current,
            table: tableRef.current.table,
        }));

        let t: ReturnType<typeof requestAnimationFrame>;
        const layout = () => {
            cancelAnimationFrame(t);
            t = requestAnimationFrame(() => {
                cloneStyles(
                    tableRef.current.table.current,
                    clone.current.table.current,
                    false,
                    "width",
                );

                const headHeight = tableRef.current.head.current.clientHeight;
                tableRef.current.table.current.style.marginTop = `-${headHeight}px`;
                scrollContainer.current.style.top = `${headHeight}px`;
                scrollContainer.current.style.height = `calc(100% - ${headHeight}px)`;

                cloneStyles(
                    tableRef.current.head.current,
                    clone.current.head.current,
                    true,
                    "width",
                    "th",
                );
            });
        }

        React.useLayoutEffect(
            () => {
                layout();

                return () => {
                    cancelAnimationFrame(t);
                }
            },
            [],
        )

        return (
            <Context.Provider value={{layout}}>
                <div
                    style={{position: "relative"}}
                    className={`scrollable-table ${props.className || ""}`}
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
                    <div className="scrollable-table-wrapper" style={{position: "absolute", top: 0}}>
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
