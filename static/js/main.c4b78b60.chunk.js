(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n,a=t(0),o=(n=a)&&"object"===typeof n&&"default"in n?n.default:n;function l(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(){return(c=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.forEach(function(r){l(e,r,t[r])})}return e}function u(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}function d(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=[],n=!0,a=!1,o=void 0;try{for(var l,c=e[Symbol.iterator]();!(n=(l=c.next()).done)&&(t.push(l.value),!r||t.length!==r);n=!0);}catch(i){a=!0,o=i}finally{try{n||null==c.return||c.return()}finally{if(a)throw o}}return t}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function f(e){return function(e){if(Array.isArray(e)){for(var r=0,t=new Array(e.length);r<e.length;r++)t[r]=e[r];return t}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var s=function(e){e.header,e.cell,e.name;return null},m=a.forwardRef(function(e,r){return o.createElement("tr",c({},e,{ref:r}))}),v=a.forwardRef(function(e,r){e.columns,e.index;var t=u(e,["columns","index"]);return o.createElement("td",c({},t,{ref:r}))}),h=a.forwardRef(function(e,r){e.header;var t=e.name,n=e.cell,a=e.data,l=u(e,["header","name","cell","data"]);return n?o.createElement(n,c({data:a,ref:r},l)):o.createElement("span",{ref:r},a[t])}),p=function(e){var r=e.header,t=e.name,n=e.cell,a=e.tableProps,l=e.children;return o.createElement(o.Fragment,null,r?o.createElement(r,c({},a,{name:t,cell:n})):t||null,l)},g=a.forwardRef(function(e,r){var t=e.headerCellContentRenderer,n=void 0===t?p:t,a=e.header,l=e.name,i=e.cell,d=e.tableProps,f=e.children,s=u(e,["headerCellContentRenderer","header","name","cell","tableProps","children"]);return o.createElement("th",c({ref:r},s),o.createElement(n,{tableProps:d,name:l,cell:i,header:a}),f)}),y=a.forwardRef(function(e,r){var t=e.columns,n=e.headerCellContentRenderer,a=e.headerCellRenderer,l=void 0===a?g:a,i=e.tableProps,d=e.rowRenderer,f=void 0===d?m:d,s=u(e,["columns","headerCellContentRenderer","headerCellRenderer","tableProps","rowRenderer"]);return o.createElement("thead",c({ref:r},s),o.createElement(f,null,t.map(function(e,r){return o.createElement(l,c({key:r,tableProps:i,headerCellContentRenderer:n,index:r},e))})))}),R=a.forwardRef(function(e,r){var t=e.data,n=e.columns,a=(e.index,e.cellRenderer),l=void 0===a?v:a,i=e.dataCellRenderer,d=void 0===i?h:i,f=e.tableProps,s=e.rowRenderer,p=void 0===s?m:s,g=u(e,["data","columns","index","cellRenderer","dataCellRenderer","tableProps","rowRenderer"]);return o.createElement(p,c({},g,{ref:r}),n.map(function(e,r){return o.createElement(l,{key:r,columns:n,index:r},o.createElement(d,c({},e,{data:t},f)))}))}),w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.rowRenderer,t=void 0===r?m:r,n=e.cellRenderer,l=void 0===n?v:n,c=e.dataRowRenderer,i=void 0===c?R:c,d=e.dataCellRenderer,f=void 0===d?h:d,w=e.headerCellRenderer,C=void 0===w?g:w,E=e.headerCellContentRenderer,b=void 0===E?p:E,S=e.headerRenderer,x=void 0===S?y:S;return a.forwardRef(function(e,r){var n=e.children,c=e.data,d=void 0===c?[]:c,m=e.style,v=void 0===m?{}:m,h=e.className,p=u(e,["children","data","style","className"]),g=a.useRef(),y=a.useRef();a.useImperativeHandle(r,function(){return{table:g,head:y}});var R=o.Children.toArray(n).filter(function(e){return e.type===s}).map(function(e){return e.props});return o.createElement("table",{ref:g,style:v,className:h,cellSpacing:0,cellPadding:0},o.createElement("colgroup",null,R.map(function(e,r){return o.createElement("col",{key:r})})),o.createElement(x,{ref:y,columns:R,headerCellRenderer:C,headerCellContentRenderer:b,tableProps:p,rowRenderer:t}),o.createElement("tbody",null,d.map(function(e,r){return o.createElement(i,{data:e,key:r,columns:R,index:r,cellRenderer:l,dataCellRenderer:f,tableProps:p,rowRenderer:t})})))})},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,r=arguments.length>1?arguments[1]:void 0;return a.forwardRef(function(t,n){var a=t.header,l=t.name,i=u(t,["header","name"]);return o.createElement(o.Fragment,null,o.createElement(r,c({header:a,name:l},i)),o.createElement(e,c({header:a,name:l,ref:n},i)))})},E=function(e){var r=e.header,t=e.name,n=(e.onClick,u(e,["header","name","onClick"]));return o.createElement("span",{className:"adaptive-col-name"},r?o.createElement(r,c({},n,{name:t,disabled:!0})):t||null)},b=function e(r,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"cssText",o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"*",l=arguments.length>5&&void 0!==arguments[5]?arguments[5]:function(e,r){};if(r.matches(o)&&(t.style[a]=getComputedStyle(r)[a],l(t,r)),n){var c=r.querySelectorAll(o);if(c.length)for(var i=t.querySelectorAll(o),u=0,d=c.length;u<d;u++)e(c[u],i[u],!0,a,o,l)}},S=function(e){var r=e.onResize,t=a.useRef();return a.useLayoutEffect(function(){return t.current.contentWindow.addEventListener("resize",r),function(){t.current.contentWindow.removeEventListener("resize",r)}}),o.createElement("iframe",{width:"100%",height:"100%",style:{position:"absolute",top:0,left:0},ref:t})},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g;return a.forwardRef(function(r,t){var n=r.children,l=u(r,["children"]),i=a.useContext(O).layout;return o.createElement(e,c({},l,{children:n,ref:t}),o.createElement(S,{onResize:i}))})},O=o.createContext({layout:function(){}}),D=function(e){var r=e.children;return o.createElement("div",{className:"header-wrapper"},o.createElement("div",{className:"header-positioner"},o.createElement("div",null,r)))},P=o.createContext({removeOverflowWrapper:!1}),N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g;return a.forwardRef(function(r,t){var n=r.removeOverflowWrapper,a=u(r,["removeOverflowWrapper"]);return o.createElement(P.Provider,{value:{removeOverflowWrapper:n}},o.createElement(e,c({ref:t},a)))})},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p;return a.forwardRef(function(r,t){return a.useContext(P).removeOverflowWrapper?o.createElement(e,c({ref:t},r)):o.createElement(D,null,o.createElement(e,c({ref:t},r)))})},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v;return a.forwardRef(function(r,t){var n=r.colSpan,a=u(r,["colSpan"]),l=a.columns,i=a.index;return l[i].control?null:o.createElement(e,c({ref:t,colSpan:i+1<l.length&&l[i+1].control?(n||1)+1:n},a))})},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g;return a.forwardRef(function(r,t){r.control;var n=u(r,["control"]);return o.createElement(e,c({ref:t},n))})},H=function(){},F={remove:H,add:H,toggle:H,isSelected:H},M=o.createContext(F),L=function(e){return function(r,t){switch(t.type){case"clear":return[];case"add":return e(r,t.value);case"remove":return r.filter(function(e){return e!==t.value});case"toggle":return r.indexOf(t.value)>=0?r.filter(function(e){return e!==t.value}):e(r,t.value);default:return r}}},I=L(function(e,r){return null!=r?e.concat(r):e}),W=L(function(e,r){return null!=r?[r]:e}),T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:singeSelectionReducer,r=arguments.length>1?arguments[1]:void 0;return a.forwardRef(function(t,n){var l=t.onSelection,i=void 0===l?H:l,f=u(t,["onSelection"]),s=d(a.useReducer(e,[]),2),m=s[0],v=s[1],h=a.useRef();a.useEffect(function(){h.current?i(m):h.current=!0},[m]);return o.createElement(M.Provider,{value:{remove:function(e){return v({type:"remove",value:e})},toggle:function(e){return v({type:"toggle",value:e})},isSelected:function(e){return m.indexOf(e)>=0},add:function(e){return v({type:"add",value:e})},clear:function(){return v({type:"clear"})}}},o.createElement(r,c({},f,{ref:n})))})},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R;return function(r){var t=r.columns,n=r.className,l=r.tableProps,d=u(r,["columns","className","tableProps"]),f=a.useContext(B),s=f.close,m=f.toggle,v=f.isSelected,h=f.detailsRenderer;if(null==h)return o.createElement(e,i({columns:t,className:n},d));var p=d.index,g=function(){return m(p)},y=v(p),R=[];return n&&R.push(n),y&&R.push("selected-row"),o.createElement(o.Fragment,null,o.createElement(e,c({tabIndex:g?0:void 0,onKeyPress:function(e){13===e.which&&e.target.click&&e.target.click()},onClick:g,columns:t,className:R.join(" "),tableProps:l},d)),y?o.createElement("tr",{className:"inline-details"},o.createElement("td",{colSpan:t.length},o.createElement(h,c({},d,l,{close:function(){return s(p)}})))):null)}},q=function(){},B=o.createContext({detailsRenderer:q,close:q,toggle:q,isSelected:q}),J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.parameter,t=e.direction,n=e.defaultDirection,a=void 0===n?"asc":n;return function(e){return{parameter:e,direction:e!==r?a:"asc"===t.toLowerCase()?"desc":"asc"}}},U=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).parameter;return function(){for(var r=arguments.length,t=new Array(r),n=0;n<r;n++)t[n]=arguments[n];return t.indexOf(e)>=0?e:t[0]}},_=o.createContext({sortOrder:{},data:[],sortedData:[],sort:function(){}}),K=function(e,r){return function(t,n){var a="asc"===r?1:-1;return(("string"===typeof t[e]?(t[e]||"").toUpperCase()>=(n[e]||"").toUpperCase():t[e]>=n[e])?1:-1)*a}},V=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=r.sortFactory,n=void 0===t?K:t,l=r.defaultDirection,i=void 0===l?"asc":l,d=r.inMemory,f=void 0===d||d;return a.forwardRef(function(r,t){var l=r.data,d=void 0===l?[]:l,s=r.onSort,m=r.sortDirection,v=void 0===m?"asc":m,h=r.sortParameter,p=u(r,["data","onSort","sortDirection","sortParameter"]),g=f?a.useMemo(function(){return(null==h?d:d.sort(n(h,v))).slice()},[d,h,v]):d,y=a.useMemo(function(){return{parameter:h,direction:v,defaultDirection:i}},[h,v]);return o.createElement(_.Provider,{value:{sortOrder:y,data:d,sortedData:g,sort:function(e){var r=J(y)(e),t=r.parameter,n=r.direction;"function"===typeof s&&s({parameter:t,direction:n})}}},o.createElement(e,c({},p,{data:g,ref:t})))})},$=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=r.sortFactory,n=void 0===t?K:t,l=r.defaultDirection,i=void 0===l?"asc":l,f=r.inMemory,s=V(e,{sortFactory:n,defaultDirection:i,inMemory:void 0===f||f});return a.forwardRef(function(e,r){var t=e.onSort,n=e.defaultSortParameter,l=e.defaultSortDirection,i=void 0===l?"asc":l,f=u(e,["onSort","defaultSortParameter","defaultSortDirection"]),m=d(a.useState({parameter:n,direction:i}),2),v=m[0],h=m[1];return o.createElement(s,c({ref:r,sortParameter:v.parameter,sortDirection:v.direction,onSort:function(e){var r=e.parameter,n=e.direction;h({parameter:r,direction:n}),"function"===typeof t&&t({parameter:r,direction:n})}},f))})},G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g;return a.forwardRef(function(r,t){var n=r.className,l=r.sortable,i=r.name,d=u(r,["className","sortable","name"]),f=a.useContext(_),s=f.sortOrder,m=f.sort,v=s.parameter,h=s.direction,p=[];return n&&p.push(n),l&&null!=i&&p.push("sortable-column"),null!=i&&i===v&&p.push("sorted-".concat(h.toLowerCase())),o.createElement(e,c({ref:t,className:p.join(" "),onClick:l?function(){return m(i)}:void 0,name:i},d))})},Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p;return a.forwardRef(function(r,t){var n=r.children,a=u(r,["children"]);return o.createElement(e,c({ref:t},a),n,o.createElement("div",{className:"sort-image"}))})},X=function(e){var r=e.defaultDirection,t=e.sortFactory,n=e.inMemory,l=void 0!==n&&n,d=e.sortableContextHoc,m=void 0===d?V:d;return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w;return function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},d=n.headerCellRenderer,v=void 0===d?g:d,h=n.headerCellContentRenderer,y=void 0===h?p:h,R=u(n,["headerCellRenderer","headerCellContentRenderer"]),w=e(i({headerCellRenderer:G(v),headerCellContentRenderer:Q(y)},R));return m(a.forwardRef(function(e,r){var t=e.children,n=u(e,["children"]),l=a.useContext(_).sortOrder,i=o.Children.toArray(t).filter(function(e){return e.type===s}).map(function(e){return e.props});return o.createElement(w,c({ref:r},n),i.map(function(e,r){var t=e.name,n=u(e,["name"]);return o.createElement(s,c({key:r,name:Array.isArray(t)?U(l).apply(void 0,f(t)):t},n))}),o.Children.toArray(t).filter(function(e){return e.type!==s}))}),{defaultDirection:r,sortFactory:t,inMemory:l})}}};r.Column=s,r.DefaultRowRenderer=m,r.DefaultCellRenderer=v,r.DefaultDataCellRenderer=h,r.DefaultHeaderCellContentRenderer=p,r.DefaultHeaderCellRenderer=g,r.DefaultHeaderRenderer=y,r.DefaultDataRowRenderer=R,r.table=w,r.composeDecorators=function(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w;return r.reverse().reduce(function(e,r){return r(e)},e)()}},r.DefaultAdaptiveComponent=E,r.withAdaptive=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E;return function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w;return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.dataCellRenderer,a=u(t,["dataCellRenderer"]);return r(i({dataCellRenderer:C(n,e)},a))}}},r.ResizeTrigger=S,r.withFixedHeader=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w;return function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=r.headerCellRenderer,n=void 0===t?g:t,l=u(r,["headerCellRenderer"]),d=e(i({headerCellRenderer:x(n)},l)),f=e(i({headerCellRenderer:n},l));return a.forwardRef(function(e,r){var t,n=e.children,l=e.data,s=e.style,m=void 0===s?{}:s,v=e.className,h=void 0===v?"":v,p=e.onScroll,g=u(e,["children","data","style","className","onScroll"]),y=a.useRef(),R=a.useRef(),w=a.useRef();return a.useImperativeHandle(r,function(){return{table:y.current.table,scrollContainer:w.current,head:y.current.head}}),o.createElement(O.Provider,{value:{layout:function(){cancelAnimationFrame(t),t=requestAnimationFrame(function(){b(y.current.table.current,R.current.table.current,!1,"width");var e=y.current.head.current.clientHeight;y.current.table.current.style.marginTop="-".concat(e,"px"),w.current.style.top="".concat(e,"px"),w.current.style.height="calc(100% - ".concat(e,"px)"),b(y.current.head.current,R.current.head.current,!0,"width","th")})}}},o.createElement("div",{style:i({},m,{position:"relative"}),className:"scrollable-table ".concat(h)},o.createElement("div",{className:"scrollable-table-content",ref:w,onScroll:p},o.createElement("div",{className:"scrollable-table-wrapper"},o.createElement("div",{className:"table-wrapper"},o.createElement(d,c({data:l,ref:y},g),n),n))),o.createElement("div",{className:"scrollable-table-wrapper",style:{position:"absolute",top:0}},o.createElement(f,c({ref:R},g),n))))})}},r.HeaderCellOverflowWrapper=D,r.withHeaderCellOverflow=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w;return function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=r.headerCellContentRenderer,n=r.headerCellRenderer,a=u(r,["headerCellContentRenderer","headerCellRenderer"]);return e(i({headerCellContentRenderer:j(t),headerCellRenderer:N(n)},a))}},r.Controll=function(){return null},r.withHeaderControl=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w;return function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=r.cellRenderer,n=r.headerCellRenderer,a=u(r,["cellRenderer","headerCellRenderer"]);return e(i({cellRenderer:A(t),headerCellRenderer:k(n)},a))}},r.DetailsContext=B,r.withInlineDetailsContext=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W;return function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w;return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.dataRowRenderer,l=u(t,["dataRowRenderer"]),d=r(i({dataRowRenderer:z(n)},l));return T(e,a.forwardRef(function(e,r){var t=e.data,n=e.detailsRenderer,l=u(e,["data","detailsRenderer"]),i=a.useContext(M),f=i.remove,s=i.clear,m=i.toggle,v=i.isSelected;return a.useEffect(s,[t]),o.createElement(B.Provider,{value:{close:f,toggle:m,isSelected:v,detailsRenderer:n}},o.createElement(d,c({ref:r,data:t},l)))}))}}},r.withLazyLoading=function(e){var r=e.Loading,t=void 0===r?function(){return"Loading"}:r,n=e.threshold,l=void 0===n?50:n;return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w;return function(r){var n=e(r);return a.forwardRef(function(e,r){var i=e.fetch,d=e.fetching,f=e.children,s=u(e,["fetch","fetching","children"]),m=a.useRef();a.useImperativeHandle(r,function(){return m.current});var v=a.useRef();return a.useImperativeHandle(v,function(){return m.current.scrollContainer}),function(e,r){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:5;a.useLayoutEffect(function(){var n=function(e){(function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5,t=e.scrollHeight;return e.scrollTop+e.clientHeight+r>=t})(e.target,t)&&r(e)},a=!1;return e&&e.current&&e.current.addEventListener&&(e.current.addEventListener("scroll",n,!0),a=!0),function(){e&&a&&e.current&&e.current.removeEventListener&&e.current.removeEventListener("scroll",n,!0)}})}(v,function(){!d&&i&&i()},l),o.createElement(n,c({ref:m},s),f,d?o.createElement(t,null):null)})}}},r.withInMemorySortingContext=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=(e.inMemory,e.sortableContextHoc,u(e,["inMemory","sortableContextHoc"]));return X(i({inMemory:!0,sortableContextHoc:$},r))},r.withSortingContext=X,r.Sorter=function(e){var r=e.name,t=e.disabled,n=void 0!==t&&t,l=e.Component,i=void 0===l?"span":l,d=e.className,f=u(e,["name","disabled","Component","className"]),s=a.useContext(_),m=s.sortOrder,v=s.sort,h=[];if(d&&h.push(d),!n){h.push("sorter");var p=m.parameter;r===p&&h.push("sorted")}return o.createElement(i,c({className:h.join(" "),onClick:n?void 0:function(){return v(r)}},f))},r.sortOrderFactory=J,r.sortParameterFactory=U,r.SortableContext=_,r.controlledSortableContext=V,r.sortableContext=$,r.defaultState=F,r.SelectionContext=M,r.selectionReducerFactory=L,r.multiSelectionReducer=I,r.singleSelectionReducer=W,r.selectionContext=T},,,,,,function(e,r,t){e.exports=t(16)},,,,,,function(e,r,t){},function(e,r,t){},function(e,r,t){},function(e,r,t){"use strict";t.r(r);var n=t(0),a=t.n(n),o=t(4),l=t.n(o),c=(t(13),t(6)),i=t(2),u=t(5),d=(t(14),t(15),t(1)),f=Object(d.composeDecorators)(d.withHeaderCellOverflow,Object(d.withAdaptive)(),Object(d.withInMemorySortingContext)({defaultDirection:"desc"}),Object(d.withInlineDetailsContext)(),d.withFixedHeader)(),s=[{name:"data1",style:{width:"30%"},sortable:!0},{name:"data2",header:function(){return a.a.createElement("span",null,"Data 2 with custom header")},style:{width:"30%"},sortable:!0},{sortable:!0,name:"data3",header:function(){return a.a.createElement("span",{style:{whiteSpace:"nowrap"}},"Very long name for displaying data 3")},cell:function(e){var r=e.data;return a.a.createElement(a.a.Fragment,null,a.a.createElement("span",null,"some text and ",r.data3))},style:{width:"10%"}},{name:"data4",style:{width:"12%"},header:function(){return a.a.createElement("span",null,"Data 4 Not sortable and without overflow wrapper")},sortable:!1,removeOverflowWrapper:!0},{name:["data5","data6"],header:function(e){var r=e.disabled;return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",null,"With multisort"),a.a.createElement(d.Sorter,{name:"data5",disabled:r,Component:"span"},"Data 5"),",",a.a.createElement(d.Sorter,{name:"data6",disabled:r,Component:"span"},"Data 6"))},cell:function(e){var r=e.data;return a.a.createElement("div",{className:"multi-line"},a.a.createElement("div",null,r.data5),a.a.createElement("div",null,r.data6))},style:{width:"30%"}}],m=function(e){var r=e.data;return a.a.createElement("div",null,Object.keys(r).map(function(e,t){return a.a.createElement("p",{key:t},a.a.createElement("label",null,e," : "),a.a.createElement("span",null,r[e]))}))},v=function(){var e=Object(n.useState)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:20;return Array(e).fill(void 0).map(function(e,r){return Array(6).fill(void 0).reduce(function(e,t,n){return Object(u.a)({},e,Object(i.a)({},"data".concat(n+1),"".concat(Math.ceil(20*Math.random())," in data[").concat(r,", ").concat(n+1,"]")))},{})})}(100)),r=Object(c.a)(e,1)[0];return a.a.createElement("div",{className:"App"},a.a.createElement("header",{className:"App-header"},a.a.createElement("p",null,"Table example")),a.a.createElement("main",null,a.a.createElement(f,{data:r,className:"default-theme",defaultSortParameter:"data1",defaultSortDirection:"asc",detailsRenderer:m},s.map(function(e,r){return a.a.createElement(d.Column,Object.assign({key:r},e))}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(a.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[7,1,2]]]);
//# sourceMappingURL=main.c4b78b60.chunk.js.map