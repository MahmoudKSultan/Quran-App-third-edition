(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[15],{204:function(e,t,n){"use strict";n.r(t);var r=n(28),u=n(63),a=(n(98),n(70)),o=n.n(a),c=n(71),i=n(60),s=n(0),l=n(69),f=function(e){var t=e,n=Object(s.useState)(""),r=Object(i.a)(n,2),u=r[0],a=r[1],o=3==t.length?+t+1:2==t.length?"0"+(+t+1):"00"+(+t+1),c="http://server12.mp3quran.net/hm/ar_7esn_AlMoslem_by_Doors_".concat(o,".mp3"),f=Object(l.a)("http://www.mp3quran.net/api/husn/ar/".concat(t,".json")),d=f.data;return{data:d,loading:f.loading,error:f.error,url:c,dataArray:d&&d[Object.keys(d)[0]],setPlayingAudio:a,playingAudio:u}},d=n(1);t.default=function(e){var t=e.match.params,n=t.name,a=t.id,i=n,s=f(a),l=s.loading,p=(s.error,s.url),b=s.dataArray,v=s.setPlayingAudio,y=s.playingAudio;return Object(d.jsxs)("div",{className:"single-thker",children:[Object(d.jsxs)("div",{className:"header",children:[Object(d.jsx)(u.a,{title:i}),Object(d.jsx)(o.a,{className:"icon",fontSize:"large",onClick:function(){return v(p)}})]}),l?Object(d.jsx)(r.default,{}):Object(d.jsx)("div",{className:"athkarBox",children:b.map((function(e){return Object(d.jsx)("h4",{children:e.Text},e.ID)}))}),y&&Object(d.jsx)(c.a,{playingItem:p})]})}},46:function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.default=e.exports,e.exports.__esModule=!0},47:function(e,t,n){var r=n(65).default;function u(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(u=function(e){return e?n:t})(e)}e.exports=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!==typeof e)return{default:e};var n=u(t);if(n&&n.has(e))return n.get(e);var a={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in e)if("default"!==c&&Object.prototype.hasOwnProperty.call(e,c)){var i=o?Object.getOwnPropertyDescriptor(e,c):null;i&&(i.get||i.set)?Object.defineProperty(a,c,i):a[c]=e[c]}return a.default=e,n&&n.set(e,a),a},e.exports.default=e.exports,e.exports.__esModule=!0},48:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.createSvgIcon}});var r=n(66)},53:function(e,t,n){"use strict";function r(e){return function(){return null}}n.d(t,"a",(function(){return r}))},54:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var r=n(0),u=n(18),a=!0,o=!1,c=null,i={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function s(e){e.metaKey||e.altKey||e.ctrlKey||(a=!0)}function l(){a=!1}function f(){"hidden"===this.visibilityState&&o&&(a=!0)}function d(e){var t=e.target;try{return t.matches(":focus-visible")}catch(n){}return a||function(e){var t=e.type,n=e.tagName;return!("INPUT"!==n||!i[t]||e.readOnly)||"TEXTAREA"===n&&!e.readOnly||!!e.isContentEditable}(t)}function p(){o=!0,window.clearTimeout(c),c=window.setTimeout((function(){o=!1}),100)}function b(){return{isFocusVisible:d,onBlurVisible:p,ref:r.useCallback((function(e){var t,n=u.findDOMNode(e);null!=n&&((t=n.ownerDocument).addEventListener("keydown",s,!0),t.addEventListener("mousedown",l,!0),t.addEventListener("pointerdown",l,!0),t.addEventListener("touchstart",l,!0),t.addEventListener("visibilitychange",f,!0))}),[])}}},63:function(e,t,n){"use strict";n(0);var r=n(1);t.a=function(e){var t=e.title;return Object(r.jsx)("h2",{className:"title",children:t})}},65:function(e,t){function n(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?(e.exports=n=function(e){return typeof e},e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=n=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.default=e.exports,e.exports.__esModule=!0),n(t)}e.exports=n,e.exports.default=e.exports,e.exports.__esModule=!0},66:function(e,t,n){"use strict";n.r(t),n.d(t,"capitalize",(function(){return r.a})),n.d(t,"createChainedFunction",(function(){return u.a})),n.d(t,"createSvgIcon",(function(){return a.a})),n.d(t,"debounce",(function(){return o.a})),n.d(t,"deprecatedPropType",(function(){return c})),n.d(t,"isMuiElement",(function(){return i.a})),n.d(t,"ownerDocument",(function(){return s.a})),n.d(t,"ownerWindow",(function(){return l.a})),n.d(t,"requirePropFactory",(function(){return f.a})),n.d(t,"setRef",(function(){return d.a})),n.d(t,"unsupportedProp",(function(){return p})),n.d(t,"useControlled",(function(){return b.a})),n.d(t,"useEventCallback",(function(){return v.a})),n.d(t,"useForkRef",(function(){return y.a})),n.d(t,"unstable_useId",(function(){return j})),n.d(t,"useIsFocusVisible",(function(){return h.a}));var r=n(45),u=n(57),a=n(62),o=n(58);function c(e,t){return function(){return null}}var i=n(56),s=n(49),l=n(59),f=n(53),d=n(52);function p(e,t,n,r,u){return null}var b=n(61),v=n(55),y=n(51),m=n(0);function j(e){var t=m.useState(e),n=t[0],r=t[1],u=e||n;return m.useEffect((function(){null==n&&r("mui-".concat(Math.round(1e5*Math.random())))}),[n]),u}var h=n(54)},69:function(e,t,n){"use strict";var r=n(83),u=n.n(r),a=n(84),o=n(60),c=n(0);t.a=function(e){var t=Object(c.useState)(null),n=Object(o.a)(t,2),r=n[0],i=n[1],s=Object(c.useState)(!0),l=Object(o.a)(s,2),f=l[0],d=l[1],p=Object(c.useState)(null),b=Object(o.a)(p,2),v=b[0],y=b[1];return Object(c.useEffect)(Object(a.a)(u.a.mark((function t(){var n,a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,r){t.next=9;break}return t.next=4,fetch(e);case 4:return n=t.sent,t.next=7,n.json();case 7:a=t.sent,i(a);case 9:t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),y(t.t0);case 14:return t.prev=14,d(!1),t.finish(14);case 17:case"end":return t.stop()}}),t,null,[[0,11,14,17]])}))),[e]),{data:r,loading:f,error:v}}},70:function(e,t,n){"use strict";var r=n(46),u=n(47);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=u(n(0)),o=(0,r(n(48)).default)(a.createElement("path",{d:"M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"}),"PlayCircleOutline");t.default=o},71:function(e,t,n){"use strict";n(0),n(72);var r=n(1);t.a=function(e){var t=e.playingItem;return Object(r.jsx)("div",{className:"audio ",children:Object(r.jsx)("audio",{controls:!0,src:t,autoPlay:!0,type:"audio/mpeg"})})}},72:function(e,t,n){},98:function(e,t,n){}}]);
//# sourceMappingURL=15.c62d85c0.chunk.js.map