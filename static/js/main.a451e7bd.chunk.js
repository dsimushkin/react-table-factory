(this["webpackJsonpreact-table-factory-demo"]=this["webpackJsonpreact-table-factory-demo"]||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n(15)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(5),c=n.n(l),o=(n(12),n(6)),i=n(3),u=n(2),d=(n(13),n(14),n(1));function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(n,!0).forEach((function(t){Object(u.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var f=Object(d.d)(d.i,d.h,Object(d.f)({isEmpty:function(e){return e.data.isEmpty},Component:function(){return r.a.createElement("div",{style:{textAlign:"center"}},"Empty row")}}),Object(d.e)({width:940}),Object(d.j)({defaultDirection:"desc"}),Object(d.l)({threshold:500,Loading:function(){return r.a.createElement("div",{style:{textAlign:"center",padding:20}},"Loading")}}),Object(d.k)({isSelectable:function(e,t){return t%3===0||t%3===1},keyFactory:function(e,t){return t},clearOnDataChange:!1}),d.g)(),p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:20;return Array(e).fill(void 0).map((function(e,t){return Array(6).fill(void 0).reduce((function(e,n,a){return m({},e,Object(u.a)({},"data".concat(a+1),"".concat(Math.ceil(20*Math.random())," in data[").concat(t,", ").concat(a+1,"]")))}),{})})).concat({isEmpty:!0})},h=[{name:"data1",style:{width:"30%"},sortable:!0},{name:"Description",header:function(){return r.a.createElement("span",null,"Description")},cell:function(e){var t=e.data;return r.a.createElement(r.a.Fragment,null,r.a.createElement("span",null,"A very long description cell hidden in full size and with no col name in adaptive: ",t.data2))},style:{width:"30%"},sortable:!0,removeAdaptiveColname:!0,hideFullSize:!0},{sortable:!0,name:"data3",header:function(){return r.a.createElement("span",{style:{whiteSpace:"nowrap"}},"Very long name for displaying data 3")},cell:function(e){var t=e.data;return r.a.createElement(r.a.Fragment,null,r.a.createElement("span",null,"some text and ",t.data3))},style:{width:"10%"}},{name:"data4",style:{width:"12%"},header:function(){return r.a.createElement("span",null,"Data 4 Not sortable and without overflow wrapper")},sortable:!1,removeOverflowWrapper:!0},{name:["data5","data6"],header:function(e){var t=e.disabled;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,"With multisort (hidden in adaptive)"),r.a.createElement(d.c,{name:"data5",disabled:t,Component:"span"},"Data 5"),",",r.a.createElement(d.c,{name:"data6",disabled:t,Component:"span"},"Data 6"))},cell:function(e){var t=e.data;return r.a.createElement("div",{className:"multi-line"},r.a.createElement("div",null,t.data5),r.a.createElement("div",null,t.data6))},sortable:!0,style:{width:"500px"},hideAdaptive:!0},{header:function(){return r.a.createElement("span",null,"Cell indexies")},cell:function(e){var t=e.index,n=e.rowIndex,l=Object(a.useContext)(d.a),c=l.isSelectable,o=l.isSelected;return r.a.createElement(r.a.Fragment,null,r.a.createElement("span",null,"[".concat(n,",").concat(t,"]")),r.a.createElement("span",{style:{marginLeft:10}},o(n)?"selected":c(n)?"selectable":"not selectable"))},style:{minWidth:"80px"},removeOverflowWrapper:!0},{header:function(){return r.a.createElement("span",null,"Hello")},control:!0,style:{minWidth:100}}],b=function(e){var t=e.data,n=e.index;return r.a.createElement("div",null,r.a.createElement("p",null,"Details of row ",n),Object.keys(t).map((function(e,n){return r.a.createElement("p",{key:n},r.a.createElement("label",null,e," : "),r.a.createElement("span",null,t[e]))})))},v=function(){var e=Object(a.useContext)(d.a),t=Object(a.useContext)(d.b);return Object(a.useEffect)((function(){e.selected.length&&e.clear()}),[t.sortOrder]),null},y=function(e,t){switch(t.type){case"@fetch":return m({},e,{fetching:!0});case"@add":return m({},e,{data:[].concat(Object(i.a)(e.data),Object(i.a)(t.value)),fetching:!1});default:return e}},E=function(){var e,t=Object(a.useReducer)(y,{data:p(20),fetching:!1}),n=Object(o.a)(t,2),l=n[0],c=l.data,i=l.fetching,u=n[1];return Object(a.useEffect)((function(){return function(){clearTimeout(e)}}),[]),r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("p",null,"Table example")),r.a.createElement("main",null,r.a.createElement(f,{data:c,fetching:i,fetch:function(){clearTimeout(e),e=setTimeout((function(){u({type:"@add",value:p(20)})}),500),u({type:"@fetch"})},className:"default-theme",detailsRenderer:b,columns:h},r.a.createElement(v,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[7,1,2]]]);
//# sourceMappingURL=main.a451e7bd.chunk.js.map