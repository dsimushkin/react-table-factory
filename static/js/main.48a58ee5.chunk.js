(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n,a=t(0),o=(n=a)&&"object"===typeof n&&"default"in n?n.default:n;function l(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(){return(c=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.forEach(function(r){l(e,r,t[r])})}return e}function u(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}function d(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=[],n=!0,a=!1,o=void 0;try{for(var l,c=e[Symbol.iterator]();!(n=(l=c.next()).done)&&(t.push(l.value),!r||t.length!==r);n=!0);}catch(i){a=!0,o=i}finally{try{n||null==c.return||c.return()}finally{if(a)throw o}}return t}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function f(e){return function(e){if(Array.isArray(e)){for(var r=0,t=new Array(e.length);r<e.length;r++)t[r]=e[r];return t}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var s=function(e){e.header,e.cell,e.name;return null},m=a.forwardRef(function(e,r){return o.createElement("tr",c({},e,{ref:r}))}),v=a.forwardRef(function(e,r){e.columns,e.index;var t=u(e,["columns","index"]);return o.createElement("td",c({},t,{ref:r}))}),h=a.forwardRef(function(e,r){e.header;var t=e.name,n=e.cell,a=e.data,l=u(e,["header","name","cell","data"]);return n?o.createElement(n,c({data:a,ref:r},l)):o.createElement("span",{ref:r},a[t])}),p=function(e){var r=e.header,t=e.name,n=e.cell,a=e.tableProps,l=e.children;return o.createElement(o.Fragment,null,r?o.createElement(r,c({},a,{name:t,cell:n})):t||null,l)},g=a.forwardRef(function(e,r){var t=e.headerCellContentRenderer,n=void 0===t?p:t,a=e.header,l=e.name,i=e.cell,d=e.tableProps,f=u(e,["headerCellContentRenderer","header","name","cell","tableProps"]);return o.createElement("th",c({ref:r},f),o.createElement(n,{tableProps:d,name:l,cell:i,header:a}))}),y=a.forwardRef(function(e,r){var t=e.columns,n=e.headerCellContentRenderer,a=e.headerCellRenderer,l=void 0===a?g:a,i=e.tableProps,d=e.rowRenderer,f=void 0===d?m:d,s=u(e,["columns","headerCellContentRenderer","headerCellRenderer","tableProps","rowRenderer"]);return o.createElement("thead",c({ref:r},s),o.createElement(f,null,t.map(function(e,r){return o.createElement(l,c({key:r,tableProps:i,headerCellContentRenderer:n,index:r},e))})))}),w=a.forwardRef(function(e,r){var t=e.data,n=e.columns,a=(e.index,e.cellRenderer),l=void 0===a?v:a,i=e.dataCellRenderer,d=void 0===i?h:i,f=e.tableProps,s=e.rowRenderer,p=void 0===s?m:s,g=u(e,["data","columns","index","cellRenderer","dataCellRenderer","tableProps","rowRenderer"]);return o.createElement(p,c({},g,{ref:r}),n.map(function(e,r){return o.createElement(l,{key:r,columns:n,index:r},o.createElement(d,c({},e,{data:t},f)))}))}),R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.rowRenderer,t=e.cellRenderer,n=e.dataRowRenderer,l=void 0===n?w:n,c=e.dataCellRenderer,i=void 0===c?h:c,d=e.headerCellRenderer,f=e.headerCellContentRenderer,m=e.headerRenderer,v=void 0===m?y:m;return a.forwardRef(function(e,n){var c=e.children,m=e.data,h=void 0===m?[]:m,p=e.style,g=void 0===p?{}:p,y=e.className,w=u(e,["children","data","style","className"]),R=a.useRef(),C=a.useRef();a.useImperativeHandle(n,function(){return{table:R,head:C}});var E=o.Children.toArray(c).filter(function(e){return e.type===s}).map(function(e){return e.props});return o.createElement("table",{ref:R,style:g,className:y,cellSpacing:0,cellPadding:0},o.createElement("colgroup",null,E.map(function(e,r){return o.createElement("col",{key:r})})),o.createElement(v,{ref:C,columns:E,headerCellRenderer:d,headerCellContentRenderer:f,tableProps:w,rowRenderer:r}),o.createElement("tbody",null,h.map(function(e,n){return o.createElement(l,{data:e,key:n,columns:E,index:n,cellRenderer:t,dataCellRenderer:i,tableProps:w,rowRenderer:r})})))})},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,r=arguments.length>1?arguments[1]:void 0;return a.forwardRef(function(t,n){var a=t.header,l=t.name,i=u(t,["header","name"]);return o.createElement(o.Fragment,null,o.createElement(r,c({header:a,name:l},i)),o.createElement(e,c({header:a,name:l,ref:n},i)))})},E=function e(r,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"cssText",o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"*",l=arguments.length>5&&void 0!==arguments[5]?arguments[5]:function(e,r){};if(r.matches(o)&&(t.style[a]=getComputedStyle(r)[a],l(t,r)),n){var c=r.getElementsByTagName(o);if(c.length)for(var i=t.getElementsByTagName(o),u=0,d=c.length;u<d;u++)e(c[u],i[u],!0,a,o,l)}},b=function(e){return function(){return e(),window.addEventListener("resize",e,!0),function(){window.removeEventListener("resize",e,!0)}}},O=function(e){var r=e.children;return o.createElement("div",{className:"header-wrapper"},o.createElement("div",{className:"header-positioner"},o.createElement("div",null,r)))},S=o.createContext({removeOverflowWrapper:!1}),x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g;return a.forwardRef(function(r,t){var n=r.removeOverflowWrapper,a=u(r,["removeOverflowWrapper"]);return o.createElement(S.Provider,{value:{removeOverflowWrapper:n}},o.createElement(e,c({ref:t},a)))})},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p;return a.forwardRef(function(r,t){return a.useContext(S).removeOverflowWrapper?o.createElement(e,c({ref:t},r)):o.createElement(O,null,o.createElement(e,c({ref:t},r)))})},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v;return a.forwardRef(function(r,t){var n=r.colSpan,a=u(r,["colSpan"]),l=a.columns,i=a.index;return l[i].control?null:o.createElement(e,c({ref:t,colSpan:i+1<l.length&&l[i+1].control?(n||1)+1:n},a))})},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g;return a.forwardRef(function(r,t){r.control;var n=u(r,["control"]);return o.createElement(e,c({ref:t},n))})},j=function(){},A={remove:j,add:j,toggle:j,isSelected:j},F=o.createContext(A),k=function(e){return function(r,t){switch(t.type){case"clear":return[];case"add":return e(r,t.value);case"remove":return r.filter(function(e){return e!==t.value});case"toggle":return r.indexOf(t.value)>=0?r.filter(function(e){return e!==t.value}):e(r,t.value);default:return r}}},H=k(function(e,r){return null!=r?e.concat(r):e}),M=k(function(e,r){return null!=r?[r]:e}),L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,r=arguments.length>1?arguments[1]:void 0;return a.forwardRef(function(t,n){var l=t.onSelection,i=void 0===l?j:l,f=u(t,["onSelection"]),s=d(a.useReducer(e,[]),2),m=s[0],v=s[1],h=a.useRef();a.useEffect(function(){h.current?i(m):h.current=!0},[m]);return o.createElement(F.Provider,{value:{remove:function(e){return v({type:"remove",value:e})},toggle:function(e){return v({type:"toggle",value:e})},isSelected:function(e){return m.indexOf(e)>=0},add:function(e){return v({type:"add",value:e})},clear:function(){return v({type:"clear"})}}},o.createElement(r,c({},f,{ref:n})))})},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w;return function(r){var t=r.columns,n=r.className,l=r.tableProps,d=u(r,["columns","className","tableProps"]),f=a.useContext(T),s=f.close,m=f.toggle,v=f.isSelected,h=f.detailsRenderer;if(null==h)return o.createElement(e,i({columns:t,className:n},d));var p=d.index,g=function(){return m(p)},y=v(p),w=[];return n&&w.push(n),y&&w.push("selected-row"),o.createElement(o.Fragment,null,o.createElement(e,c({tabIndex:g?0:void 0,onKeyPress:function(e){13===e.which&&e.target.click&&e.target.click()},onClick:g,columns:t,className:w.join(" "),tableProps:l},d)),y?o.createElement("tr",{className:"inline-details"},o.createElement("td",{colSpan:t.length},o.createElement(h,c({},d,l,{close:function(){return s(p)}})))):null)}},W=function(){},T=o.createContext({detailsRenderer:W,close:W,toggle:W,isSelected:W}),B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.parameter,t=e.direction,n=e.defaultDirection,a=void 0===n?"asc":n;return function(e){return{parameter:e,direction:e!==r?a:"asc"===t.toLowerCase()?"desc":"asc"}}},z=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).parameter;return function(){for(var r=arguments.length,t=new Array(r),n=0;n<r;n++)t[n]=arguments[n];return t.indexOf(e)>=0?e:t[0]}},q=o.createContext({sortOrder:{},data:[],sortedData:[],sort:function(){}}),J=function(e,r){return function(t,n){var a="asc"===r?1:-1;return(("string"===typeof t[e]?(t[e]||"").toUpperCase()>=(n[e]||"").toUpperCase():t[e]>=n[e])?1:-1)*a}},U=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=r.sortFactory,n=void 0===t?J:t,l=r.defaultDirection,i=void 0===l?"asc":l,d=r.inMemory,f=void 0===d||d;return a.forwardRef(function(r,t){var l=r.data,d=void 0===l?[]:l,s=r.onSort,m=r.sortDirection,v=void 0===m?"asc":m,h=r.sortParameter,p=u(r,["data","onSort","sortDirection","sortParameter"]),g=f?a.useMemo(function(){return(null==h?d:d.sort(n(h,v))).slice()},[d,h,v]):d,y=a.useMemo(function(){return{parameter:h,direction:v,defaultDirection:i}},[h,v]);return o.createElement(q.Provider,{value:{sortOrder:y,data:d,sortedData:g,sort:function(e){var r=B(y)(e),t=r.parameter,n=r.direction;"function"===typeof s&&s({parameter:t,direction:n})}}},o.createElement(e,c({},p,{data:g,ref:t})))})},_=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=r.sortFactory,n=void 0===t?J:t,l=r.defaultDirection,i=void 0===l?"asc":l,f=r.inMemory,s=U(e,{sortFactory:n,defaultDirection:i,inMemory:void 0===f||f});return a.forwardRef(function(e,r){var t=e.onSort,n=e.defaultSortParameter,l=e.defaultSortDirection,i=void 0===l?"asc":l,f=u(e,["onSort","defaultSortParameter","defaultSortDirection"]),m=d(a.useState({parameter:n,direction:i}),2),v=m[0],h=m[1];return o.createElement(s,c({ref:r,sortParameter:v.parameter,sortDirection:v.direction,onSort:function(e){var r=e.parameter,n=e.direction;h({parameter:r,direction:n}),"function"===typeof t&&t({parameter:r,direction:n})}},f))})},K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g;return a.forwardRef(function(r,t){var n=r.className,l=r.sortable,i=r.name,d=u(r,["className","sortable","name"]),f=a.useContext(q),s=f.sortOrder,m=f.sort,v=s.parameter,h=s.direction,p=[];return n&&p.push(n),l&&null!=i&&p.push("sortable-column"),null!=i&&i===v&&p.push("sorted-".concat(h.toLowerCase())),o.createElement(e,c({ref:t,className:p.join(" "),onClick:l?function(){return m(i)}:void 0,name:i},d))})},V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p;return a.forwardRef(function(r,t){var n=r.children,a=u(r,["children"]);return o.createElement(e,c({ref:t},a),n,o.createElement("div",{className:"sort-image"}))})},$=function(e){var r=e.defaultDirection,t=e.sortFactory,n=e.inMemory,l=void 0!==n&&n,d=e.sortableContextHoc,m=void 0===d?U:d;return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R;return function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},d=n.headerCellRenderer,v=void 0===d?g:d,h=n.headerCellContentRenderer,y=void 0===h?p:h,w=u(n,["headerCellRenderer","headerCellContentRenderer"]),R=e(i({headerCellRenderer:K(v),headerCellContentRenderer:V(y)},w));return m(a.forwardRef(function(e,r){var t=e.children,n=u(e,["children"]),l=a.useContext(q).sortOrder,i=o.Children.toArray(t).filter(function(e){return e.type===s}).map(function(e){return e.props});return o.createElement(R,c({ref:r},n),i.map(function(e,r){var t=e.name,n=u(e,["name"]);return o.createElement(s,c({key:r,name:Array.isArray(t)?z(l).apply(void 0,f(t)):t},n))}),o.Children.toArray(t).filter(function(e){return e.type!==s}))}),{defaultDirection:r,sortFactory:t,inMemory:l})}}};r.Column=s,r.DefaultRowRenderer=m,r.DefaultCellRenderer=v,r.DefaultDataCellRenderer=h,r.DefaultHeaderCellContentRenderer=p,r.DefaultHeaderCellRenderer=g,r.DefaultHeaderRenderer=y,r.DefaultDataRowRenderer=w,r.table=R,r.composeDecorators=function(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R;return r.reverse().reduce(function(e,r){return r(e)},e)()}},r.withAdaptiveColname=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(e){var r=e.header,t=e.name,n=(e.onClick,u(e,["header","name","onClick"]));return o.createElement("span",{className:"adaptive-col-name"},r?o.createElement(r,c({},n,{name:t,disabled:!0})):t||null)};return function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R;return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.dataCellRenderer,a=u(t,["dataCellRenderer"]);return r(i({dataCellRenderer:C(n,e)},a))}}},r.rafMonitorFactory=function(e){return function(){var r;return function t(){e(),r=requestAnimationFrame(t)}(),function(){cancelAnimationFrame(r)}}},r.windowMonitorFactory=b,r.withFixedHeader=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).monitorFactory,r=void 0===e?b:e;return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R;return function(){var t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},l=n.headerRenderer,d=void 0===l?y:l,f=u(n,["headerRenderer"]),s=e(i({headerRenderer:(t=d,a.forwardRef(function(e,r){var n=e.style,a=void 0===n?{}:n,l=u(e,["style"]);return o.createElement(t,c({ref:r,style:i({},a,{visibility:"hidden",border:"0"})},l))}))},f)),m=e(i({headerRenderer:d},f));return a.forwardRef(function(e,t){var n,l=e.children,d=e.data,f=e.style,v=void 0===f?{}:f,h=e.className,p=e.onScroll,g=u(e,["children","data","style","className","onScroll"]),y=a.useRef(),w=a.useRef(),R=a.useRef();return a.useImperativeHandle(t,function(){return{table:y.current.table,scrollContainer:R.current,head:y.current.head}}),a.useLayoutEffect(r(function(){cancelAnimationFrame(n),n=requestAnimationFrame(function(){E(y.current.table.current,w.current.table.current,!1,"width");var e=y.current.head.current.clientHeight;y.current.table.current.style.marginTop="-".concat(e,"px"),R.current.style.top="".concat(e,"px"),E(y.current.head.current,w.current.head.current,!0,"width","th")})})),o.createElement("div",{style:i({},v,{position:"relative"}),className:h},o.createElement("div",{className:"scrollable-table-content",ref:R,onScroll:p},o.createElement("div",{className:"scrollable-table-wrapper"},o.createElement("div",{className:"table-wrapper"},o.createElement(s,c({data:d,ref:y},g),l),l))),o.createElement("div",{className:"scrollable-table-wrapper",style:{position:"relative"}},o.createElement(m,c({ref:w},g),l)))})}}},r.HeaderCellOverflowWrapper=O,r.withHeaderCellOverflow=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R;return function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=r.headerCellContentRenderer,n=r.headerCellRenderer,a=u(r,["headerCellContentRenderer","headerCellRenderer"]);return e(i({headerCellContentRenderer:D(t),headerCellRenderer:x(n)},a))}},r.Controll=function(){return null},r.withHeaderControl=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R;return function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=r.cellRenderer,n=r.headerCellRenderer,a=u(r,["cellRenderer","headerCellRenderer"]);return e(i({cellRenderer:P(t),headerCellRenderer:N(n)},a))}},r.DetailsContext=T,r.withInlineDetailsContext=function(e){return function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R;return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.dataRowRenderer,l=u(t,["dataRowRenderer"]),d=r(i({dataRowRenderer:I(n)},l));return L(e,a.forwardRef(function(e,r){var t=e.data,n=e.detailsRenderer,l=u(e,["data","detailsRenderer"]),i=a.useContext(F),f=i.remove,s=i.clear,m=i.toggle,v=i.isSelected;return a.useEffect(s,[t]),o.createElement(T.Provider,{value:{close:f,toggle:m,isSelected:v,detailsRenderer:n}},o.createElement(d,c({ref:r,data:t},l)))}))}}},r.withLazyLoading=function(e){var r=e.Loading,t=void 0===r?function(){return"Loading"}:r,n=e.threshold,l=void 0===n?5:n;return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R;return function(r){var n=e(r);return a.forwardRef(function(e,r){var i=e.fetch,d=e.fetching,f=e.children,s=u(e,["fetch","fetching","children"]),m=a.useRef();a.useImperativeHandle(r,function(){return m.current});var v=a.useRef();return a.useImperativeHandle(v,function(){return m.current.scrollContainer}),function(e,r){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:5;a.useLayoutEffect(function(){var n=function(e){(function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5,t=e.scrollHeight;return e.scrollTop+e.clientHeight+r>=t})(e.target,t)&&r(e)},a=!1;return e&&e.current&&e.current.addEventListener&&(e.current.addEventListener("scroll",n,!0),a=!0),function(){e&&a&&e.current&&e.current.removeEventListener&&e.current.removeEventListener("scroll",n,!0)}})}(v,function(){!d&&i&&i()},l),o.createElement(n,c({ref:m},s),f,d?o.createElement(t,null):null)})}}},r.withInMemorySortingContext=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=(e.inMemory,e.sortableContextHoc,u(e,["inMemory","sortableContextHoc"]));return $(i({inMemory:!0,sortableContextHoc:_},r))},r.withSortingContext=$,r.Sorter=function(e){var r=e.name,t=e.disabled,n=void 0!==t&&t,l=e.Component,i=void 0===l?"span":l,d=e.className,f=u(e,["name","disabled","Component","className"]),s=a.useContext(q),m=s.sortOrder,v=s.sort,h=[];if(d&&h.push(d),!n){h.push("sorter");var p=m.parameter;r===p&&h.push("sorted")}return o.createElement(i,c({className:h.join(" "),onClick:n?void 0:function(){return v(r)}},f))},r.sortOrderFactory=B,r.sortParameterFactory=z,r.SortableContext=q,r.controlledSortableContext=U,r.sortableContext=_,r.defaultState=A,r.SelectionContext=F,r.selectionReducerFactory=k,r.multiSelectionReducer=H,r.singeSelectionReducer=M,r.selectionContext=L},,,,,,function(e,r,t){e.exports=t(19)},,,,,,function(e,r,t){},function(e,r,t){},function(e,r,t){},function(e,r,t){},function(e,r,t){},function(e,r,t){},function(e,r,t){"use strict";t.r(r);var n=t(0),a=t.n(n),o=t(4),l=t.n(o),c=(t(13),t(6)),i=t(2),u=t(5),d=(t(14),t(15),t(16),t(17),t(18),t(1)),f=Object(d.composeDecorators)(d.withHeaderCellOverflow,Object(d.withAdaptiveColname)(),Object(d.withInMemorySortingContext)({defaultDirection:"desc"}),Object(d.withInlineDetailsContext)(),Object(d.withFixedHeader)())(),s=[{name:"data1",style:{width:"30%"},sortable:!0},{name:"data2",header:function(){return a.a.createElement("span",null,"Data 2 with custom header")},style:{width:"30%"},sortable:!0},{sortable:!0,name:"data3",header:function(){return a.a.createElement("span",{style:{whiteSpace:"nowrap"}},"Very long name for displaying data 3")},cell:function(e){var r=e.data;return a.a.createElement(a.a.Fragment,null,a.a.createElement("span",null,"some text and ",r.data3))},style:{width:"10%"}},{name:"data4",style:{width:"12%"},header:function(){return a.a.createElement("span",null,"Data 4 Not sortable and without overflow wrapper")},sortable:!1,removeOverflowWrapper:!0},{name:["data5","data6"],header:function(e){var r=e.disabled;return a.a.createElement(a.a.Fragment,null,a.a.createElement("span",null,"With multisort"),a.a.createElement(d.Sorter,{name:"data5",disabled:r,Component:"div"},"Data 5"),a.a.createElement(d.Sorter,{name:"data6",disabled:r,Component:"div"},"Data 6"))},cell:function(e){var r=e.data;return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",null,r.data5),a.a.createElement("div",null,r.data6))},style:{width:"30%"}}],m=function(e){var r=e.data;return a.a.createElement("div",null,Object.keys(r).map(function(e,t){return a.a.createElement("p",{key:t},a.a.createElement("label",null,e," : "),a.a.createElement("span",null,r[e]))}))},v=function(){var e=Object(n.useState)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:20;return Array(e).fill(void 0).map(function(e,r){return Array(6).fill(void 0).reduce(function(e,t,n){return Object(u.a)({},e,Object(i.a)({},"data".concat(n+1),"".concat(Math.ceil(20*Math.random())," in data[").concat(r,", ").concat(n+1,"]")))},{})})}(100)),r=Object(c.a)(e,1)[0];return a.a.createElement("div",{className:"App"},a.a.createElement("header",{className:"App-header"},a.a.createElement("p",null,"Table example")),a.a.createElement("main",null,a.a.createElement(f,{data:r,className:"scrollable-table",defaultSortParameter:"data1",defaultSortDirection:"asc",style:{width:"100%",height:500},detailsRenderer:m},s.map(function(e,r){return a.a.createElement(d.Column,Object.assign({key:r},e))}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(a.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[7,1,2]]]);
//# sourceMappingURL=main.48a58ee5.chunk.js.map