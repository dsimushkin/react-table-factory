(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n,a=t(0),o=(n=a)&&"object"===typeof n&&"default"in n?n.default:n;function l(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(){return(c=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.forEach(function(r){l(e,r,t[r])})}return e}function u(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}function d(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=[],n=!0,a=!1,o=void 0;try{for(var l,c=e[Symbol.iterator]();!(n=(l=c.next()).done)&&(t.push(l.value),!r||t.length!==r);n=!0);}catch(i){a=!0,o=i}finally{try{n||null==c.return||c.return()}finally{if(a)throw o}}return t}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function s(e){return function(e){if(Array.isArray(e)){for(var r=0,t=new Array(e.length);r<e.length;r++)t[r]=e[r];return t}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var f=a.forwardRef(function(e,r){return o.createElement("tr",c({},e,{ref:r}))}),m=a.forwardRef(function(e,r){e.columns,e.index,e.rowIndex;var t=u(e,["columns","index","rowIndex"]);return o.createElement("td",c({},t,{ref:r}))}),v=a.forwardRef(function(e,r){e.header;var t=e.name,n=e.cell,a=e.data,l=u(e,["header","name","cell","data"]);return n?o.createElement(n,c({data:a,ref:r},l)):o.createElement("span",{ref:r},a[t])}),h=function(e){var r=e.header,t=e.name,n=e.cell,a=e.tableProps,l=e.children;return o.createElement(o.Fragment,null,r?o.createElement(r,c({},a,{name:t,cell:n})):t||null,l)},p=a.forwardRef(function(e,r){var t=e.headerCellContentRenderer,n=void 0===t?h:t,a=e.header,l=e.name,i=e.cell,d=e.tableProps,s=e.children,f=u(e,["headerCellContentRenderer","header","name","cell","tableProps","children"]);return o.createElement("th",c({ref:r},f),o.createElement(n,{tableProps:d,name:l,cell:i,header:a}),s)}),g=a.forwardRef(function(e,r){var t=e.columns,n=e.headerCellContentRenderer,a=e.headerCellRenderer,l=void 0===a?p:a,i=e.tableProps,d=e.rowRenderer,s=void 0===d?f:d,m=u(e,["columns","headerCellContentRenderer","headerCellRenderer","tableProps","rowRenderer"]);return o.createElement("thead",c({ref:r},m),o.createElement(s,null,t.map(function(e,r){return o.createElement(l,c({key:r,tableProps:i,headerCellContentRenderer:n,index:r},e))})))}),y=a.forwardRef(function(e,r){var t=e.data,n=e.columns,a=e.index,l=e.cellRenderer,i=void 0===l?m:l,d=e.dataCellRenderer,s=void 0===d?v:d,h=e.tableProps,p=e.rowRenderer,g=void 0===p?f:p,y=u(e,["data","columns","index","cellRenderer","dataCellRenderer","tableProps","rowRenderer"]);return o.createElement(g,c({},y,{ref:r}),n.map(function(e,r){return o.createElement(i,{key:r,columns:n,index:r,rowIndex:a},o.createElement(s,c({},e,{data:t,index:r,rowIndex:a},h)))}))}),w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.rowRenderer,t=void 0===r?f:r,n=e.cellRenderer,l=void 0===n?m:n,c=e.dataRowRenderer,i=void 0===c?y:c,d=e.dataCellRenderer,s=void 0===d?v:d,w=e.headerCellRenderer,R=void 0===w?p:w,C=e.headerCellContentRenderer,b=void 0===C?h:C,E=e.headerRenderer,x=void 0===E?g:E;return a.forwardRef(function(e,r){var n=e.children,c=e.data,d=void 0===c?[]:c,f=e.columns,m=void 0===f?[]:f,v=e.style,h=void 0===v?{}:v,p=e.className,g=u(e,["children","data","columns","style","className"]),y=a.useRef(),w=a.useRef();return a.useImperativeHandle(r,function(){return{table:y,head:w}}),o.createElement("table",{ref:y,style:h,className:p,cellSpacing:0,cellPadding:0},o.createElement("colgroup",null,m.map(function(e,r){return o.createElement("col",{key:r})})),o.createElement(x,{ref:w,columns:m,headerCellRenderer:R,headerCellContentRenderer:b,tableProps:g,rowRenderer:t}),o.createElement("tbody",null,d.map(function(e,r){return o.createElement(i,{data:e,key:r,columns:m,index:r,cellRenderer:l,dataCellRenderer:s,tableProps:g,rowRenderer:t})})),o.createElement("tfoot",null,n?o.createElement(t,{className:"additional-row"},o.createElement(l,{colSpan:m.length},n)):null))})},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,r=arguments.length>1?arguments[1]:void 0;return a.forwardRef(function(t,n){var a=t.header,l=t.name,i=t.removeAdaptiveColname,d=void 0!==i&&i,s=u(t,["header","name","removeAdaptiveColname"]);return o.createElement(o.Fragment,null,d?null:o.createElement(r,c({header:a,name:l},s)),o.createElement(e,c({header:a,name:l,ref:n},s)))})},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p;return a.forwardRef(function(r,t){r.removeAdaptiveColname;var n=u(r,["removeAdaptiveColname"]);return o.createElement(e,c({ref:t},n))})},b=function(e){var r=e.header,t=e.name,n=(e.onClick,u(e,["header","name","onClick"]));return o.createElement("span",{className:"adaptive-col-name"},r?o.createElement(r,c({},n,{name:t,disabled:!0})):t||null)},E=function e(r,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"cssText",o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"*",l=arguments.length>5&&void 0!==arguments[5]?arguments[5]:function(e,r){};if(r.matches(o)&&(t.style[a]=getComputedStyle(r)[a],l(t,r)),n){var c=r.querySelectorAll(o);if(c.length)for(var i=t.querySelectorAll(o),u=0,d=c.length;u<d;u++)e(c[u],i[u],!0,a,o,l)}},x=function(e){var r=e.onResize,t=a.useRef();return a.useLayoutEffect(function(){return t.current.contentWindow.addEventListener("resize",r),function(){t.current.contentWindow.removeEventListener("resize",r)}}),o.createElement("iframe",{width:"100%",height:"100%",style:{position:"absolute",top:0,left:0},ref:t})},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p;return a.forwardRef(function(r,t){var n=r.children,l=u(r,["children"]),i=a.useContext(S).layout;return o.createElement(e,c({},l,{children:n,ref:t}),o.createElement(x,{onResize:i}))})},S=o.createContext({layout:function(){}}),D=function(e){var r=e.children;return o.createElement("div",{className:"header-wrapper"},o.createElement("div",{className:"header-positioner"},o.createElement("div",null,r)))},j=o.createContext({removeOverflowWrapper:!1}),P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p;return a.forwardRef(function(r,t){var n=r.removeOverflowWrapper,a=u(r,["removeOverflowWrapper"]);return o.createElement(j.Provider,{value:{removeOverflowWrapper:n}},o.createElement(e,c({ref:t},a)))})},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h;return a.forwardRef(function(r,t){return a.useContext(j).removeOverflowWrapper?o.createElement(e,c({ref:t},r)):o.createElement(D,null,o.createElement(e,c({ref:t},r)))})},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m;return a.forwardRef(function(r,t){var n=r.colSpan,a=u(r,["colSpan"]),l=a.columns,i=a.index;return null==l||null==i||null==l[i]||l[i].control?null:o.createElement(e,c({ref:t,colSpan:i+1<l.length&&l[i+1].control?(n||1)+1:n},a))})},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p;return a.forwardRef(function(r,t){r.control;var n=u(r,["control"]);return o.createElement(e,c({ref:t},n))})},k=function(){},H={remove:k,add:k,toggle:k,isSelected:k},I=o.createContext(H),L=function(e){return function(r,t){switch(t.type){case"clear":return[];case"add":return e(r,t.value);case"remove":return r.filter(function(e){return e!==t.value});case"toggle":return r.indexOf(t.value)>=0?r.filter(function(e){return e!==t.value}):e(r,t.value);default:return r}}},M=L(function(e,r){return null!=r?e.concat(r):e}),W=L(function(e,r){return null!=r?[r]:e}),T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:singeSelectionReducer,r=arguments.length>1?arguments[1]:void 0;return a.forwardRef(function(t,n){var l=t.onSelection,i=void 0===l?k:l,s=u(t,["onSelection"]),f=d(a.useReducer(e,[]),2),m=f[0],v=f[1],h=a.useRef();a.useEffect(function(){h.current?i(m):h.current=!0},[m]);return o.createElement(I.Provider,{value:{remove:function(e){return v({type:"remove",value:e})},toggle:function(e){return v({type:"toggle",value:e})},isSelected:function(e){return m.indexOf(e)>=0},add:function(e){return v({type:"add",value:e})},clear:function(){return v({type:"clear"})},selected:m}},o.createElement(r,c({},s,{ref:n})))})},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:f;return function(t){var n=t.columns,l=t.className,d=t.tableProps,s=u(t,["columns","className","tableProps"]),f=a.useContext(q),m=f.close,v=f.toggle,h=f.isSelected,p=f.detailsRenderer,g=f.tabIndex,y=f.isSelectable,w=void 0===y?function(e){return!0}:y;if(null==p)return o.createElement(r,i({columns:n,className:l},s));var R=s.index,C=function(){return v(R)},b=h(R),E=w(R),x=[];return l&&x.push(l),E&&x.push("selectable-row"),b&&x.push("selected-row"),o.createElement(o.Fragment,null,o.createElement(e,c({},s,{tabIndex:C&&g?g:void 0,onKeyPress:E?function(e){13===e.which&&e.target.click&&e.target.click()}:void 0,onClick:E?C:void 0,columns:n,className:x.length>0?x.join(" "):void 0,tableProps:d})),b?o.createElement(r,{className:"inline-details"},o.createElement("td",{colSpan:n.length},o.createElement(p,c({},s,d,{close:function(){return m(R)}})))):null)}},q=o.createContext({detailsRenderer:function(){return null},close:function(e){},toggle:function(e){},isSelected:function(e){return!0},clear:function(){},isSelectable:function(e){return!0},selected:[],tabIndex:void 0,keyFactory:function(e){return!0}}),B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.parameter,t=e.direction,n=e.defaultDirection,a=void 0===n?"asc":n;return function(e){return{parameter:e,direction:e!==r?a:"asc"===t.toLowerCase()?"desc":"asc"}}},J=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).parameter;return function(){for(var r=arguments.length,t=new Array(r),n=0;n<r;n++)t[n]=arguments[n];return t.indexOf(e)>=0?e:t[0]}},U=o.createContext({sortOrder:{},data:[],sortedData:[],sort:function(){}}),_=function(e,r){return function(t,n){var a="asc"===r?1:-1;return(("string"===typeof t[e]?(t[e]||"").toUpperCase()>=(n[e]||"").toUpperCase():t[e]>=n[e])?1:-1)*a}},K=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=r.sortFactory,n=void 0===t?_:t,l=r.defaultDirection,i=void 0===l?"asc":l,d=r.inMemory,s=void 0===d||d;return a.forwardRef(function(r,t){var l=r.data,d=void 0===l?[]:l,f=r.onSort,m=r.sortDirection,v=void 0===m?"asc":m,h=r.sortParameter,p=u(r,["data","onSort","sortDirection","sortParameter"]),g=s?a.useMemo(function(){return(null==h?d:d.sort(n(h,v))).slice()},[d,h,v]):d,y=a.useMemo(function(){return{parameter:h,direction:v,defaultDirection:i}},[h,v]);return o.createElement(U.Provider,{value:{sortOrder:y,data:d,sortedData:g,sort:function(e){var r=B(y)(e),t=r.parameter,n=r.direction;"function"===typeof f&&f({parameter:t,direction:n})}}},o.createElement(e,c({},p,{data:g,ref:t})))})},V=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=r.sortFactory,n=void 0===t?_:t,l=r.defaultDirection,i=void 0===l?"asc":l,s=r.inMemory,f=K(e,{sortFactory:n,defaultDirection:i,inMemory:void 0===s||s});return a.forwardRef(function(e,r){var t=e.onSort,n=e.defaultSortParameter,l=e.defaultSortDirection,i=void 0===l?"asc":l,s=u(e,["onSort","defaultSortParameter","defaultSortDirection"]),m=d(a.useState({parameter:n,direction:i}),2),v=m[0],h=m[1];return o.createElement(f,c({ref:r,sortParameter:v.parameter,sortDirection:v.direction,onSort:function(e){var r=e.parameter,n=e.direction;h({parameter:r,direction:n}),"function"===typeof t&&t({parameter:r,direction:n})}},s))})},$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p;return a.forwardRef(function(r,t){var n=r.className,l=r.sortable,i=r.name,d=u(r,["className","sortable","name"]),s=a.useContext(U),f=s.sortOrder,m=s.sort,v=f.parameter,h=f.direction,p=[];return n&&p.push(n),l&&null!=i&&p.push("sortable-column"),null!=i&&i===v&&p.push("sorted-".concat(h.toLowerCase())),o.createElement(e,c({ref:t,className:p.length>0?p.join(" "):void 0,onClick:l?function(){return m(i)}:void 0,name:i},d))})},G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h;return a.forwardRef(function(r,t){var n=r.children,a=u(r,["children"]);return o.createElement(e,c({ref:t},a),n,o.createElement("div",{className:"sort-image"}))})},Q=function(e){var r=e.defaultDirection,t=e.sortFactory,n=e.inMemory,l=void 0!==n&&n,d=e.sortableContextHoc,f=void 0===d?K:d;return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w;return function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},d=n.headerCellRenderer,m=void 0===d?p:d,v=n.headerCellContentRenderer,g=void 0===v?h:v,y=u(n,["headerCellRenderer","headerCellContentRenderer"]),w=e(i({headerCellRenderer:$(m),headerCellContentRenderer:G(g)},y));return f(a.forwardRef(function(e,r){var t=e.columns,n=void 0===t?[]:t,l=u(e,["columns"]),d=a.useContext(U).sortOrder;return o.createElement(w,c({ref:r,columns:n.map(function(e){var r=e.name,t=u(e,["name"]);return i({name:Array.isArray(r)?J(d).apply(void 0,s(r)):r},t)})},l))}),{defaultDirection:r,sortFactory:t,inMemory:l})}}};r.DefaultRowRenderer=f,r.DefaultCellRenderer=m,r.DefaultDataCellRenderer=v,r.DefaultHeaderCellContentRenderer=h,r.DefaultHeaderCellRenderer=p,r.DefaultHeaderRenderer=g,r.DefaultDataRowRenderer=y,r.table=w,r.composeDecorators=function(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w;return r.reverse().reduce(function(e,r){return r(e)},e)()}},r.DefaultAdaptiveComponent=b,r.withAdaptive=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).Component,r=void 0===e?b:e;return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w;return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.dataCellRenderer,a=t.headerCellRenderer,o=u(t,["dataCellRenderer","headerCellRenderer"]);return e(i({dataCellRenderer:R(n,r),headerCellRenderer:C(a)},o))}}},r.ResizeTrigger=x,r.withFixedHeader=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w;return function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=r.headerCellRenderer,n=void 0===t?p:t,l=u(r,["headerCellRenderer"]),d=e(i({headerCellRenderer:O(n)},l)),s=e(i({headerCellRenderer:n},l));return a.forwardRef(function(e,r){var t,n=e.children,l=e.data,f=e.style,m=void 0===f?{}:f,v=e.className,h=void 0===v?"":v,p=e.onScroll,g=u(e,["children","data","style","className","onScroll"]),y=a.useRef(),w=a.useRef(),R=a.useRef();a.useImperativeHandle(r,function(){return{table:y.current.table,scrollContainer:R.current,head:y.current.head}});var C=function(){cancelAnimationFrame(t),t=requestAnimationFrame(function(){E(y.current.table.current,w.current.table.current,!1,"width");var e=y.current.head.current.clientHeight;y.current.table.current.style.marginTop="-".concat(e,"px"),R.current.style.top="".concat(e,"px"),R.current.style.height="calc(100% - ".concat(e,"px)"),E(y.current.head.current,w.current.head.current,!0,"width","th")})};return a.useLayoutEffect(function(){return C(),function(){cancelAnimationFrame(t)}},[]),o.createElement(S.Provider,{value:{layout:C}},o.createElement("div",{style:i({},m,{position:"relative"}),className:"scrollable-table ".concat(h)},o.createElement("div",{className:"scrollable-table-content",ref:R,onScroll:p},o.createElement("div",{className:"scrollable-table-wrapper"},o.createElement("div",{className:"table-wrapper"},o.createElement(d,c({data:l,ref:y},g),n)))),o.createElement("div",{className:"scrollable-table-wrapper",style:{position:"absolute",top:0}},o.createElement(s,c({ref:w},g)))))})}},r.HeaderCellOverflowWrapper=D,r.withHeaderCellOverflow=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w;return function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=r.headerCellContentRenderer,n=r.headerCellRenderer,a=u(r,["headerCellContentRenderer","headerCellRenderer"]);return e(i({headerCellContentRenderer:N(t),headerCellRenderer:P(n)},a))}},r.Controll=function(){return null},r.withHeaderControl=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w;return function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=r.cellRenderer,n=r.headerCellRenderer,a=u(r,["cellRenderer","headerCellRenderer"]);return e(i({cellRenderer:A(t),headerCellRenderer:F(n)},a))}},r.DetailsContext=q,r.withInlineDetailsContext=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.selectionReducer,t=void 0===r?W:r,n=e.tabIndex,l=e.clearOnDataChange,d=void 0===l||l,s=e.isSelectable,f=void 0===s?function(e,r){return!0}:s,m=e.keyFactory,v=void 0===m?function(e,r){return r}:m;return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w;return function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},l=r.dataRowRenderer,s=r.rowRenderer,m=u(r,["dataRowRenderer","rowRenderer"]),h=e(i({dataRowRenderer:z(l,s),rowRenderer:s},m));return T(t,a.forwardRef(function(e,r){var t=e.data,l=e.detailsRenderer,i=u(e,["data","detailsRenderer"]),s=a.useContext(I),m=a.useRef();return a.useEffect(function(){m.current?d&&s.clear():m.current=!0},[t]),o.createElement(q.Provider,{value:{close:function(e){s.remove(v(t,e))},toggle:function(e){s.toggle(v(t,e))},isSelected:function(e){return s.isSelected(v(t,e))},clear:s.clear,detailsRenderer:l,isSelectable:function(e){return f(t,e)},tabIndex:n,keyFactory:v,selected:s.selected}},o.createElement(h,c({ref:r,data:t},i)))}))}}},r.withLazyLoading=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.Loading,t=void 0===r?function(){return"Loading"}:r,n=e.threshold,l=void 0===n?50:n;return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w;return function(r){var n=e(r);return a.forwardRef(function(e,r){var i,d=e.fetch,s=e.fetching,f=e.children,m=u(e,["fetch","fetching","children"]),v=a.useRef();a.useImperativeHandle(r,function(){return v.current}),a.useEffect(function(){return function(){return clearTimeout(i)}},[]);var h=a.useRef();return a.useImperativeHandle(h,function(){return v.current.scrollContainer}),function(e,r){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:5;a.useLayoutEffect(function(){var n=function(e){(function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5,t=e.scrollHeight;return e.scrollTop+e.clientHeight+r>=t})(e.target,t)&&r(e)},a=!1;return e&&e.current&&e.current.addEventListener&&(e.current.addEventListener("scroll",n,!0),a=!0),function(){e&&a&&e.current&&e.current.removeEventListener&&e.current.removeEventListener("scroll",n,!0)}})}(h,function(){null==i&&(i=setTimeout(function(){!s&&d&&d()},0))},l),o.createElement(n,c({ref:v},m),f,s?o.createElement(t,null):null)})}}},r.withInMemorySortingContext=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=(e.inMemory,e.sortableContextHoc,u(e,["inMemory","sortableContextHoc"]));return Q(i({inMemory:!0,sortableContextHoc:V},r))},r.withSortingContext=Q,r.Sorter=function(e){var r=e.name,t=e.disabled,n=void 0!==t&&t,l=e.Component,i=void 0===l?"span":l,d=e.className,s=u(e,["name","disabled","Component","className"]),f=a.useContext(U),m=f.sortOrder,v=f.sort,h=[];if(d&&h.push(d),!n){h.push("sorter");var p=m.parameter;r===p&&h.push("sorted")}return o.createElement(i,c({className:h.length>0?h.join(" "):void 0,onClick:n?void 0:function(){return v(r)}},s))},r.sortOrderFactory=B,r.sortParameterFactory=J,r.SortableContext=U,r.controlledSortableContext=K,r.sortableContext=V,r.defaultState=H,r.SelectionContext=I,r.selectionReducerFactory=L,r.multiSelectionReducer=M,r.singleSelectionReducer=W,r.selectionContext=T},,,,,,,function(e,r,t){e.exports=t(17)},,,,,,function(e,r,t){},function(e,r,t){},function(e,r,t){},function(e,r,t){"use strict";t.r(r);var n=t(0),a=t.n(n),o=t(6),l=t.n(o),c=(t(14),t(7)),i=t(4),u=t(2),d=t(3),s=(t(15),t(16),t(1)),f=Object(s.composeDecorators)(s.withHeaderControl,s.withHeaderCellOverflow,Object(s.withAdaptive)(),Object(s.withInMemorySortingContext)({defaultDirection:"desc"}),Object(s.withInlineDetailsContext)({isSelectable:function(e,r){return r%3===0||r%3===1},keyFactory:function(e,r){return r},clearOnDataChange:!1}),s.withFixedHeader)(),m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:20;return Array(e).fill(void 0).map(function(e,r){return Array(6).fill(void 0).reduce(function(e,t,n){return Object(d.a)({},e,Object(u.a)({},"data".concat(n+1),"".concat(Math.ceil(20*Math.random())," in data[").concat(r,", ").concat(n+1,"]")))},{})})},v=[{name:"data1",style:{width:"30%"},sortable:!0},{name:"Description",header:function(){return a.a.createElement("span",null,"Description")},cell:function(e){var r=e.data;return a.a.createElement(a.a.Fragment,null,a.a.createElement("span",null,"A very very very very very long description cell with some data: ",r.data2),a.a.createElement("span",{className:"adaptive-col-name"},"Adaptive only"))},style:{width:"30%"},sortable:!0,removeAdaptiveColname:!0},{sortable:!0,name:"data3",header:function(){return a.a.createElement("span",{style:{whiteSpace:"nowrap"}},"Very long name for displaying data 3")},cell:function(e){var r=e.data;return a.a.createElement(a.a.Fragment,null,a.a.createElement("span",null,"some text and ",r.data3))},style:{width:"10%"}},{name:"data4",style:{width:"12%"},header:function(){return a.a.createElement("span",null,"Data 4 Not sortable and without overflow wrapper")},sortable:!1,removeOverflowWrapper:!0},{name:["data5","data6"],header:function(e){var r=e.disabled;return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",null,"With multisort"),a.a.createElement(s.Sorter,{name:"data5",disabled:r,Component:"span"},"Data 5"),",",a.a.createElement(s.Sorter,{name:"data6",disabled:r,Component:"span"},"Data 6"))},cell:function(e){var r=e.data;return a.a.createElement("div",{className:"multi-line"},a.a.createElement("div",null,r.data5),a.a.createElement("div",null,r.data6))},style:{width:"30%"}},{header:function(){return a.a.createElement("span",null,"Cell indexies")},cell:function(e){var r=e.index,t=e.rowIndex,o=Object(n.useContext)(s.DetailsContext),l=o.isSelectable,c=o.isSelected;return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",null,"[".concat(t,",").concat(r,"]")),a.a.createElement("div",null,c(t)?"selected":l(t)?"selectable":"not selectable"))},style:{minWidth:"150px"},removeOverflowWrapper:!0},{header:function(){return a.a.createElement("span",null,"Hello")},control:!0,style:{minWidth:100}}],h=function(e){var r=e.data,t=e.index;return a.a.createElement("div",null,a.a.createElement("p",null,"Details of row ",t),Object.keys(r).map(function(e,t){return a.a.createElement("p",{key:t},a.a.createElement("label",null,e," : "),a.a.createElement("span",null,r[e]))}))},p=function(){var e=Object(n.useContext)(s.DetailsContext),r=Object(n.useContext)(s.SortableContext);return Object(n.useEffect)(function(){e.selected.length&&e.clear()},[r.sortOrder]),null},g=function(e,r){switch(r.type){case"@fetch":return Object(d.a)({},e,{fetching:!0});case"@add":return Object(d.a)({},e,{data:[].concat(Object(i.a)(e.data),Object(i.a)(r.value)),fetching:!1});default:return e}},y=function(){var e=Object(n.useReducer)(g,{data:m(20),fetching:!1}),r=Object(c.a)(e,1)[0].data;return a.a.createElement("div",{className:"App"},a.a.createElement("header",{className:"App-header"},a.a.createElement("p",null,"Table example")),a.a.createElement("main",null,a.a.createElement(f,{data:r,className:"default-theme",defaultSortParameter:"data1",defaultSortDirection:"asc",detailsRenderer:h,columns:v},a.a.createElement(p,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(a.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[8,1,2]]]);
//# sourceMappingURL=main.3b7d0502.chunk.js.map