(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["memberothers"],{3169:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-container",{staticClass:"mt-5",attrs:{id:"memberothers",fluid:""}},[a("b-row",[a("b-col",{attrs:{cols:"3"}},[a("div",{staticClass:"mx-3 py-3 px-3 aino-rounded bg-white"},[a("b-nav",{attrs:{pills:"",justified:"",vertical:""}},[a("b-nav-item",{staticClass:"gen",attrs:{to:"/memberothers/"+this.id,exact:"","exact-active-class":"active"}},[t._v("創作者首頁")]),a("b-nav-item",{staticClass:"gen",attrs:{to:"/memberothers/"+this.id+"/memberothersnovels",exact:"","exact-active-class":"active"}},[t._v("作品頁面")])],1)],1)]),a("b-col",{staticClass:"mb-5",attrs:{cols:"9"}},[a("div",{staticClass:"mx-3 pt-3 h-100 aino-rounded bg-white"},[a("router-view")],1)])],1)],1)},s=[],i=a("1da1"),n=(a("96cf"),{data:function(){return{avatarimg:"",nickname:"",account:"",emailswitch:"",email:"",birthdayMon:"",birthdayDate:"",sex:"",id:""}},created:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.api.get("/users/"+t.$route.params.id);case 3:a=e.sent,r=a.data,t.avatarimg=r.result.image,t.nickname=r.result.nickname,t.account=r.result.account,t.emailswitch=r.result.emailswitch,t.email=r.result.email,t.birthdayMon=r.result.birthdayMon,t.birthdayDate=r.result.birthdayDate,t.sex=r.result.sex,t.id=r.result._id,document.title="Mono‘s Archive | ".concat(t.nickname," 創作者首頁"),e.next=21;break;case 17:e.prev=17,e.t0=e["catch"](0),console.log(e.t0),t.$router.push("/");case 21:case"end":return e.stop()}}),e,null,[[0,17]])})))()}}),c=n,o=a("2877"),l=Object(o["a"])(c,r,s,!1,null,null,null);e["default"]=l.exports}}]);
//# sourceMappingURL=memberothers.82202653.js.map