(function(e){function t(t){for(var r,o,s=t[0],c=t[1],l=t[2],u=0,m=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&m.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);d&&d(t);while(m.length)m.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var s=n[o];0!==a[s]&&(r=!1)}r&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={app:0},a={app:0},i=[];function s(e){return c.p+"js/"+({admin:"admin",login:"login",mabout:"mabout",member:"member",memberothers:"memberothers",mnovels:"mnovels","mreport~register":"mreport~register",mreport:"mreport",register:"register",mrules:"mrules",novelpage:"novelpage"}[e]||e)+"."+{admin:"fa9b9af9",login:"b2380cb5",mabout:"8acee671",member:"49b4ade7",memberothers:"82202653",mnovels:"9603f002","mreport~register":"c51faf51",mreport:"f8757d19",register:"a3d8a0a7",mrules:"3ab1c24d",novelpage:"c6593411"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={admin:1,login:1,mabout:1,member:1,mnovels:1,mreport:1,register:1,mrules:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({admin:"admin",login:"login",mabout:"mabout",member:"member",memberothers:"memberothers",mnovels:"mnovels","mreport~register":"mreport~register",mreport:"mreport",register:"register",mrules:"mrules",novelpage:"novelpage"}[e]||e)+"."+{admin:"1a1c85ee",login:"b05262ec",mabout:"b59e1d64",member:"cf4bc164",memberothers:"31d6cfe0",mnovels:"a345d21b","mreport~register":"31d6cfe0",mreport:"2b4ea448",register:"28246f9c",mrules:"a22800b1",novelpage:"31d6cfe0"}[e]+".css",a=c.p+r,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var l=i[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===r||u===a))return t()}var m=document.getElementsByTagName("style");for(s=0;s<m.length;s++){l=m[s],u=l.getAttribute("data-href");if(u===r||u===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete o[e],d.parentNode.removeChild(d),n(i)},d.href=a;var h=document.getElementsByTagName("head")[0];h.appendChild(d)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=i);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=s(e);var m=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(d);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;m.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",m.name="ChunkLoadError",m.type=r,m.request=o,n[1](m)}a[e]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var m=0;m<l.length;m++)t(l[m]);var d=u;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"033f":function(e,t,n){},"21bb":function(e,t,n){"use strict";n("2dad")},"2dad":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"login",(function(){return $})),n.d(r,"logout",(function(){return z})),n.d(r,"getInfo",(function(){return F})),n.d(r,"updateTheme",(function(){return q}));var o={};n.r(o),n.d(o,"user",(function(){return U}));var a={};n.r(a),n.d(a,"login",(function(){return W})),n.d(a,"logout",(function(){return K})),n.d(a,"getInfo",(function(){return G})),n.d(a,"updateInfo",(function(){return Q})),n.d(a,"updateTheme",(function(){return V}));n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("e792"),n("0cdd");var i=n("2b0e"),s=n("5f5b"),c=n("b1e0");n("ab8b"),n("2dd8");i["default"].use(s["a"]),i["default"].use(c["a"]);n("d3b7"),n("caad"),n("2532");var l=n("bc3a"),u=n.n(l),m=n("130e"),d=n("3d20"),h=n.n(d),b=n("2f62"),f=function(){return{token:"",account:"",nickname:"",role:0,email:"",emailswitch:1,image:null,sex:"",birthdayMon:"",birthdayDate:"",block:"",themeSwitcher:!1}},p=n("1da1"),v=(n("96cf"),n("3ca3"),n("ddb0"),n("8c4f")),g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-container",{staticClass:"px-0 h-100",attrs:{id:"home",fluid:""}},[n("HomePageCarousel"),n("b-container",{staticClass:"w-100"},[n("b-row",[n("b-col",{staticClass:"my-5 aino-osusume",attrs:{cols:"12"}},[e._v("每週推薦")])],1),n("b-row",{staticClass:"mt-0 mb-5"},[n("NovelsCardTest")],1)],1)],1)},w=[],x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-container",{staticClass:"px-0",attrs:{fluid:""}},e._l(e.novels,(function(t){return n("b-row",{key:t._id,staticClass:"w-100"},[n("b-card",{staticClass:"w-100 card-novels card-filter mb-4",attrs:{Ncard:t.image,"img-left":"","img-src":t.image,"img-width":"400"}},[n("b-card-body",{staticClass:"card-text-board pt-0"},[n("b-card-title",{attrs:{Ncard:t.title}},[e._v(e._s(t.title))]),n("b-card-sub-title",{staticClass:"mb-2",attrs:{Ncard:t.novelType}},[e._v("文作分類:"+e._s(t.novelType))]),n("b-card-text",{staticClass:"summary-height",attrs:{Ncard:t.summary}},[e._v(e._s(t.summary))]),n("b-btn",{staticClass:"aino-btn-third",attrs:{to:"/novelpage/"+t._id}},[e._v("欣賞此作品")])],1)],1)],1)})),1)},y=[],k=(n("a434"),{data:function(){return{novels:[]}},created:function(){var e=this;return Object(p["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.api.get("/novels");case 3:n=t.sent,r=n.data,e.novels=r.result,e.novels.reverse(),e.novels.splice(5),t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](0),e({icon:"error",title:"錯誤",text:"文作取得失敗"});case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))()}}),M=k,A=(n("7204"),n("2877")),C=Object(A["a"])(M,x,y,!1,null,null,null),_=C.exports,S=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-carousel",{staticStyle:{"text-shadow":"0px 0px 2px #000"},attrs:{id:"carousel-fade",indicators:"",controls:"",fade:"",interval:5e3,background:"#ababab"}},e._l(e.carousel,(function(e){return n("b-carousel-slide",{key:e._id,staticClass:"imgstyle",attrs:{"img-src":e.carouselImage}})})),1)},O=[],j={name:"carousel",data:function(){return{slide:0,sliding:null,carousel:[]}},methods:{onSlideStart:function(e){this.sliding=!0},onSlideEnd:function(e){this.sliding=!1}},created:function(){var e=this;return Object(p["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.api.get("/pages");case 3:n=t.sent,r=n.data,e.carousel=r.result,t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),console.log(t.t0.response.data.message);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()}},N=j,T=(n("c2c3"),Object(A["a"])(N,S,O,!1,null,null,null)),R=T.exports,E={components:{NovelsCardTest:_,HomePageCarousel:R}},P=E,L=(n("21bb"),Object(A["a"])(P,g,w,!1,null,null,null)),B=L.exports;i["default"].use(v["a"]);var D=[{path:"/",name:"Home",component:B,meta:{title:"Mono‘s Archive"}},{path:"/register",name:"Register",component:function(){return Promise.all([n.e("mreport~register"),n.e("register")]).then(n.bind(null,"73cf"))},meta:{title:"Mono‘s Archive | Register"}},{path:"/login",name:"Login",component:function(){return n.e("login").then(n.bind(null,"a55b"))},meta:{title:"Mono‘s Archive | Login"}},{path:"/MNovels",name:"mnovels",component:function(){return n.e("mnovels").then(n.bind(null,"3ecb"))},meta:{title:"Mono‘s Archive | MNovels"}},{path:"/MAbout",name:"mabout",component:function(){return n.e("mabout").then(n.bind(null,"6fbd"))},meta:{title:"Mono‘s Archive | MAbout"}},{path:"/MRules",name:"mrules",component:function(){return n.e("mrules").then(n.bind(null,"9085"))},meta:{title:"Mono‘s Archive | MRules"}},{path:"/MReport",name:"mreport",component:function(){return Promise.all([n.e("mreport~register"),n.e("mreport")]).then(n.bind(null,"2635c"))},meta:{title:"Mono‘s Archive | MReport"}},{path:"/admin",name:"Admin",component:function(){return n.e("admin").then(n.bind(null,"459d"))},children:[{path:"",name:"AdminHome",component:function(){return n.e("admin").then(n.bind(null,"6966"))},meta:{login:!0,admin:!0,title:"Mono‘s Archive | AdminHome"}},{path:"admincarousel",name:"AdminCarousel",component:function(){return n.e("admin").then(n.bind(null,"f810"))},meta:{login:!0,admin:!0,title:"Mono‘s Archive | Carousel Manager"}},{path:"adminnovels",name:"AdminNovels",component:function(){return n.e("admin").then(n.bind(null,"b4f3"))},meta:{login:!0,admin:!0,title:"Mono‘s Archive | Novels Manager"}},{path:"adminmembers",name:"AdminMembers",component:function(){return n.e("admin").then(n.bind(null,"19a7"))},meta:{login:!0,admin:!0,title:"Mono‘s Archive | Members Manager"}},{path:"adminreports",name:"AdminReports",component:function(){return n.e("admin").then(n.bind(null,"0f02"))},meta:{login:!0,admin:!0,title:"Mono‘s Archive | Reports Manager"}}]},{path:"/member",name:"Member",component:function(){return n.e("member").then(n.bind(null,"7319"))},children:[{path:"",name:"MemberHome",component:function(){return n.e("member").then(n.bind(null,"23a4"))},meta:{login:!0,title:"Mono‘s Archive | 創作者首頁"}},{path:"memberinfo",name:"MemberInfo",component:function(){return n.e("member").then(n.bind(null,"fead"))},meta:{login:!0,title:"Mono‘s Archive | 創作者資訊"}},{path:"membernovels",name:"MemberNovels",component:function(){return n.e("member").then(n.bind(null,"910e"))},meta:{login:!0,title:"Mono‘s Archive | 作品頁面"},children:[{path:"membernovelsList",name:"MemberNovelsList",component:function(){return n.e("member").then(n.bind(null,"9fc2"))},meta:{login:!0,title:"Mono‘s Archive | 作品頁面 | 列表"}},{path:"membernovelsWrite",name:"MemberNovelsWrite",component:function(){return n.e("member").then(n.bind(null,"236a"))},meta:{login:!0,title:"Mono‘s Archive | 作品頁面 | 創作"}}]},{path:"memberfriends",name:"MemberFriends",component:function(){return n.e("member").then(n.bind(null,"f9fc"))},meta:{login:!0,title:"Mono‘s Archive | 好友列表"}},{path:"membertegami",name:"MemberTegami",component:function(){return n.e("member").then(n.bind(null,"202e"))},meta:{login:!0,title:"Mono‘s Archive | 創作者手紙"}},{path:"memberfavorite",name:"MemberFavorite",component:function(){return n.e("member").then(n.bind(null,"09bb"))},meta:{login:!0,title:"Mono‘s Archive | 喜愛作品"}}]},{path:"/novelpage/:id",name:"NovelPage",component:function(){return n.e("novelpage").then(n.bind(null,"1ed9"))},meta:{title:"Mono‘s Archive | NovelPage"}},{path:"/memberothers/:id",name:"MemberOthers",component:function(){return n.e("memberothers").then(n.bind(null,"3169"))},children:[{path:"",name:"MemberOthersHome",component:function(){return n.e("member").then(n.bind(null,"ef29"))},meta:{title:"Mono‘s Archive | 創作者首頁"}},{path:"memberothersnovels",name:"MemberOthersNovels",component:function(){return n.e("member").then(n.bind(null,"29f0"))},meta:{title:"Mono‘s Archive | 創作者首頁"}}]}],I=new v["a"]({routes:D});I.beforeEach((function(e,t,n){var r=Z.getters["user/user"];e.meta.login&&!r.isLogin?n("/login"):e.meta.admin&&!r.isAdmin?n("/"):n()})),I.afterEach((function(e,t){document.title=e.meta.title}));var H=I,$=function(){var e=Object(p["a"])(regeneratorRuntime.mark((function e(t,n){var r,o,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,e.prev=1,e.next=4,ee.post("/users/login",n);case 4:o=e.sent,a=o.data,r("login",a.result),!0===a.result.block?(r("logout"),H.push("/"),h.a.fire({icon:"error",title:"登入失敗",text:"此帳號暫時被停用"})):1===a.result.role?(H.push("/"),h.a.fire({icon:"success",title:"登入成功",text:"您已進入管理員模式"})):(H.push("/"),h.a.fire({icon:"success",title:"登入成功",text:"歡迎使用Mono‘s Archive"})),e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](1),h.a.fire({icon:"error",title:"錯誤",text:e.t0.response.data.message});case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t,n){return e.apply(this,arguments)}}(),z=function(){var e=Object(p["a"])(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,r=t.state,e.prev=1,e.next=4,ee.delete("users/logout",{headers:{authorization:"Bearer "+r.token}});case 4:n("logout"),H.push("/"),h.a.fire({icon:"success",title:"登出成功"}),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](1),h.a.fire({icon:"error",title:"錯誤",text:e.t0.response.data.message});case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),F=function(){var e=Object(p["a"])(regeneratorRuntime.mark((function e(t){var n,r,o,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=t.commit,r=t.state,0!==r.token.length){e.next=3;break}return e.abrupt("return");case 3:return e.prev=3,e.next=6,ee.get("/users/me",{headers:{authorization:"Bearer "+r.token}});case 6:o=e.sent,a=o.data,n("getInfo",a.result),e.next=14;break;case 11:e.prev=11,e.t0=e["catch"](3),n("logout");case 14:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(t){return e.apply(this,arguments)}}(),q=function(){var e=Object(p["a"])(regeneratorRuntime.mark((function e(t,n){var r,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,o=t.state,e.prev=1,e.next=4,ee.patch("/users/themeswitch",{themeSwitcher:n},{headers:{authorization:"Bearer "+o.token}});case 4:console.log(n),e.next=11;break;case 7:e.prev=7,e.t0=e["catch"](1),h.a.fire({icon:"error",title:"錯誤",text:"none"}),console.log(e.t0);case 11:r("updateTheme",n);case 12:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t,n){return e.apply(this,arguments)}}(),J=n("5530"),U=function(e){return Object(J["a"])({isLogin:e.token.length>0,isAdmin:1===e.role,isBlock:!0===e.block},e)},W=function(e,t){e.token=t.token,e._id=t._id,e.account=t.account,e.nickname=t.nickname,e.image=t.image,e.role=t.role,e.email=t.email,e.novel=t.novel,e.emailswitch=t.emailswitch,e.sex=t.sex,e.birthdayMon=t.birthdayMon,e.birthdayDate=t.birthdayDate,e.block=t.block,e.themeSwitcher=t.themeSwitcher},K=function(e,t){e.token="",e._id="",e.account="",e.nickname="",e.image="",e.role=0,e.email="",e.emailswitch="",e.sex="",e.birthdayMon="",e.birthdayDate="",e.block="",e.themeSwitcher=!1},G=function(e,t){e._id=t._id,e.account=t.account,e.nickname=t.nickname,e.image=t.image,e.role=t.role,e.email=t.email,e.novel=t.novel,e.emailswitch=t.emailswitch,e.sex=t.sex,e.birthdayMon=t.birthdayMon,e.birthdayDate=t.birthdayDate,e.block=t.block,e.themeSwitcher=t.themeSwitcher},Q=function(e,t){e.nickname=t.nickname,e.image=t.image,e.novel=t.novel,e.emailswitch=t.emailswitch,e.sex=t.sex,e.birthdayMon=t.birthdayMon,e.birthdayDate=t.birthdayDate,e.block=t.block,e.themeSwitcher=t.themeSwitcher},V=function(e,t){e.themeSwitcher=t},X={namespaced:!0,state:f,actions:r,getters:o,mutations:a},Y=n("0e44");i["default"].use(b["a"]);var Z=new b["a"].Store({state:{},mutations:{},actions:{},modules:{user:X},plugins:[Object(Y["a"])({key:"novel",paths:["user.token"]})]}),ee=u.a.create({baseURL:""});ee.interceptors.response.use((function(e){return e}),(function(e){if(e.response){if(401===e.response.status&&"/users/extend"!==e.config.url){var t=e.config;return ee.post("/users/extend",{},{headers:{authorization:"Bearer "+Z.state.user.token}}).then((function(e){var n=e.data;return Z.commit("user/extend",n.result.token),t.headers.authorization="Bearer "+Z.state.user.token,u()(t)})).catch((function(e){return Z.commit("user/logout"),H.push("/login"),Promise.reject(e)}))}}else"ECONNABORTED "===e.code&&e.message.includes("timeout")?h.a.fire({icon:"error",title:"錯誤",text:"請求逾時"}):h.a.fire({icon:"error",title:"錯誤",text:"網路不穩定"});return Promise.reject(e)})),i["default"].use(m["a"],{axios:u.a,api:ee});var te=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:{dark:e.themeSwitcher,light:!e.themeSwitcher},attrs:{id:"app"}},[n("b-navbar",{staticClass:"aino-bg-primary",class:{navdark:e.themeSwitcher,light:!e.themeSwitcher},attrs:{toggleable:"lg",type:"dark"}},[n("b-container",{attrs:{fluid:""}},[n("b-navbar-brand",{staticClass:"logoBorder",attrs:{to:"/"}},[n("div",{staticClass:"logoBorderInner"},[e._v("Mono‘s Archive")])]),n("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),n("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[n("b-navbar-nav",{staticClass:"h5 w-100 d-flex justify-content-between"},[n("div",{staticClass:"d-flex flex-column flex-md-row"},[n("b-nav-item",{staticClass:"ml-md-3 aino-b-btn",attrs:{to:"/MNovels"}},[e._v("文作列表")]),n("b-nav-item",{staticClass:"ml-md-3 aino-b-btn",attrs:{to:"/MAbout"}},[e._v("關於Monoaka")]),n("b-nav-item",{staticClass:"ml-md-3 aino-b-btn",attrs:{to:"/MRules"}},[e._v("Monoaka規範")]),e.user.isAdmin?e._e():n("b-nav-item",{staticClass:"ml-md-3 aino-b-btn",attrs:{to:"/MReport"}},[e._v("問題回報")])],1),n("div",{staticClass:"d-flex flex-column flex-md-row ml-md-5"},[n("b-nav-text",{staticClass:"ml-md-5"},[n("b-form-checkbox",{attrs:{switch:""},model:{value:e.themeSwitcher,callback:function(t){e.themeSwitcher=t},expression:"themeSwitcher"}},[e._v("黑暗模式")])],1),e.user.isLogin?e._e():n("b-nav-item",{staticClass:"ml-md-5 registerType",attrs:{to:"/register"}},[n("div",{staticClass:"registerBox"}),n("b-icon-book"),n("div",{staticClass:"registerTypeText"},[e._v("成為創作者")])],1),e.user.isLogin?e._e():n("b-nav-item",{staticClass:"ml-md-5 aino-a-btn bg-thirdAndHover",attrs:{to:"/login"}},[e._v("登入")]),e.user.isLogin&&e.user.isAdmin?n("b-nav-item",{staticClass:"ml-md-5 adminType",attrs:{to:"/admin"}},[n("b-icon-gear"),n("div",{staticClass:"adminTypeText"},[e._v("管理者頁面")])],1):e._e(),e.user.isLogin&&!e.user.isAdmin?n("b-nav-item",{staticClass:"ml-md-5 authorType",attrs:{to:"/member"}},[n("b-icon-person"),n("div",{staticClass:"authorTypeText"},[e._v("創作者頁面")])],1):e._e(),e.user.isLogin?n("b-nav-item",{staticClass:"ml-md-5 aino-a-btn bg-dangerAndHover",on:{click:e.logout}},[e._v("登出")]):e._e()],1)])],1)],1)],1),n("router-view",{staticClass:"mh-100"}),n("footer",[n("b-container",{staticClass:"copyright",attrs:{id:"copyright",fluid:""}},[n("div",{staticClass:"h-100 d-flex justify-content-center align-items-center"},[n("b-row",{staticClass:"m-0"},[n("b-col",{staticClass:"font-white h3",attrs:{cols:"12"}},[e._v("Copyright © 2022 Aino Studio. All rights reserved.")])],1)],1)])],1)],1)},ne=[],re={data:function(){return{footerSwitch:!0}},methods:{logout:function(){this.$store.dispatch("user/logout")}},created:function(){var e=this;return Object(p["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.$store.dispatch("user/getInfo");case 1:case"end":return t.stop()}}),t)})))()},computed:{themeSwitcher:{get:function(){return this.user.themeSwitcher},set:function(e){this.$store.dispatch("user/updateTheme",e)}}}},oe=re,ae=(n("5c0b"),Object(A["a"])(oe,te,ne,!1,null,null,null)),ie=ae.exports,se=n("9483");Object(se["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var ce=n("f9d5"),le=n.n(ce),ue=(n("4413"),{computed:{user:function(){return this.$store.getters["user/user"]}}}),me=n("657c");n("2bd9");i["default"].component("ImgInputer",me["a"]),i["default"].use(le.a),i["default"].mixin(ue),i["default"].config.productionTip=!1,new i["default"]({router:H,store:Z,render:function(e){return e(ie)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";n("9c0c")},"6c34":function(e,t,n){},7204:function(e,t,n){"use strict";n("033f")},"9c0c":function(e,t,n){},c2c3:function(e,t,n){"use strict";n("6c34")}});
//# sourceMappingURL=app.9e24544c.js.map