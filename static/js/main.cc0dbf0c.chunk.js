(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[6],{19:function(e,t,a){"use strict";a.d(t,"b",(function(){return h})),a.d(t,"a",(function(){return f}));var n=a(9),r=a(14),c=a(10),i=a(23),s=a(24),o=a(27),l=a(26),u=a(0),b=a.n(u),j=a(1),d=b.a.createContext(),f=d.Consumer,h=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(i.a)(this,a);for(var s=arguments.length,o=new Array(s),l=0;l<s;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).state={favoriteReaders:[],favoriteSuras:[],favoriteIzaas:[],playingSura:"",lastPlayedSura:{},sidebarStatus:1},e.componentDidMount=function(){e.setState({favoriteReaders:JSON.parse(localStorage.getItem("favoriteReaders"))||[],favoriteSuras:JSON.parse(localStorage.getItem("favoriteSuras"))||[],favoriteIzaas:JSON.parse(localStorage.getItem("favoriteIzaas"))||[]})},e.deleteFromFavorite=function(t,a,n){var r=e.state[n].filter((function(e){return e[t]!==a}));e.setState(Object(c.a)({},n,r)),localStorage.setItem(n,JSON.stringify(r))},e.resetPlayingSura=function(){return e.setState({playingSura:""})},e.playSura=function(t){return e.setState({playingSura:t})},e.addItemToFavorites=function(t,a){var n=e.state[a];n.find((function(e){return e.name===t.name}))||(n=[].concat(Object(r.a)(n),[t]),e.setState(Object(c.a)({},a,n)),localStorage.setItem(a,JSON.stringify(n)))},e.addSuraToFavorites=function(t,a){var c=e.state.favoriteSuras,i=Object(n.a)(Object(n.a)({},t),a);c.find((function(e){return e.readerName===t.readerName&&e.id===a.id}))||(c=[].concat(Object(r.a)(c),[i]),e.setState({favoriteSuras:c}),localStorage.setItem("favoriteSuras",JSON.stringify(c)))},e}return Object(s.a)(a,[{key:"render",value:function(){return console.log("context"),Object(j.jsx)(d.Provider,{value:Object(n.a)(Object(n.a)({},this.state),{},{playSura:this.playSura,resetPlayingSura:this.resetPlayingSura,deleteFromFavorite:this.deleteFromFavorite,addItemToFavorites:this.addItemToFavorites,addSuraToFavorites:this.addSuraToFavorites}),children:this.props.children})}}]),a}(b.a.Component)},28:function(e,t,a){"use strict";a.r(t);a(0),a(35);var n=a(1);t.default=function(){return Object(n.jsx)("div",{className:"loading",children:Object(n.jsx)("img",{src:"loading.svg",alt:"loading"})})}},33:function(e,t,a){},35:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(18),i=a.n(c),s=(a(33),a(2)),o=a(19),l=(a(28),a(1));var u=function(){var e=Object(n.useRef)(null),t=Object(n.lazy)((function(){return Promise.all([a.e(0),a.e(4),a.e(10)]).then(a.bind(null,198))})),r=Object(n.lazy)((function(){return Promise.all([a.e(0),a.e(12)]).then(a.bind(null,184))})),c=Object(n.lazy)((function(){return a.e(26).then(a.t.bind(null,185,7))})),i=Object(n.lazy)((function(){return Promise.all([a.e(0),a.e(1),a.e(2),a.e(11)]).then(a.bind(null,199))})),u=Object(n.lazy)((function(){return Promise.all([a.e(0),a.e(1),a.e(2),a.e(14)]).then(a.bind(null,200))})),b=Object(n.lazy)((function(){return Promise.all([a.e(0),a.e(13),a.e(23)]).then(a.bind(null,203))})),j=Object(n.lazy)((function(){return Promise.all([a.e(0),a.e(3),a.e(20)]).then(a.bind(null,187))})),d=Object(n.lazy)((function(){return Promise.all([a.e(0),a.e(3),a.e(17)]).then(a.bind(null,188))})),f=Object(n.lazy)((function(){return Promise.all([a.e(0),a.e(1),a.e(2),a.e(9)]).then(a.bind(null,201))})),h=Object(n.lazy)((function(){return Promise.all([a.e(0),a.e(18)]).then(a.bind(null,196))})),O=Object(n.lazy)((function(){return Promise.all([a.e(0),a.e(1),a.e(2),a.e(19)]).then(a.bind(null,202))})),m=Object(n.lazy)((function(){return Promise.all([a.e(0),a.e(1),a.e(15)]).then(a.bind(null,204))})),p=Object(n.lazy)((function(){return Promise.all([a.e(0),a.e(3),a.e(16)]).then(a.bind(null,191))}));return Object(l.jsx)(o.b,{children:Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(n.Suspense,{fallback:Object(l.jsx)("small",{children:"loading.."}),children:Object(l.jsx)(r,{menuClick:function(){"right"===e.current.className?e.current.className="right hide-on-xs":e.current.className="right"}})}),Object(l.jsxs)("div",{className:"wrapper",children:[Object(l.jsx)("div",{className:"right hide-on-xs",ref:e,children:Object(l.jsx)(n.Suspense,{fallback:Object(l.jsx)("h1",{children:"loading"}),children:Object(l.jsx)(t,{})})}),Object(l.jsx)("div",{className:"left",children:Object(l.jsx)(s.d,{children:Object(l.jsxs)(n.Suspense,{fallback:Object(l.jsx)("small",{children:"loading.."}),children:[Object(l.jsx)(s.b,{path:"/quran",component:c}),Object(l.jsx)(s.b,{path:"/readers",component:i,exact:!0}),Object(l.jsx)(s.b,{path:"/readers/:id",component:u}),Object(l.jsx)(s.b,{path:"/favorites",component:b,exact:!0}),Object(l.jsx)(s.b,{path:"/favorites/readers",component:j}),Object(l.jsx)(s.b,{path:"/favorites/suras",component:d}),Object(l.jsx)(s.b,{path:"/favorites/izaas",component:p}),Object(l.jsx)(s.b,{path:"/izaa",component:f,exact:!0}),Object(l.jsx)(s.b,{path:"/athan",component:h}),Object(l.jsx)(s.b,{path:"/hesn",component:O,exact:!0}),Object(l.jsx)(s.b,{path:"/hesn/:id/:name",component:m}),Object(l.jsx)(s.a,{from:"/",to:"/readers"})]})})})]})]})})},b=a(12);i.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(b.a,{children:Object(l.jsx)(u,{})})}),document.getElementById("root"))}},[[41,7,8]]]);
//# sourceMappingURL=main.cc0dbf0c.chunk.js.map