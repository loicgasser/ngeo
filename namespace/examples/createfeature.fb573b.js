!function(e){function t(t){for(var n,i,l=t[0],u=t[1],c=t[2],p=0,f=[];p<l.length;p++)i=l[p],o[i]&&f.push(o[i][0]),o[i]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);for(s&&s(t);f.length;)f.shift()();return a.push.apply(a,c||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,l=1;l<r.length;l++){var u=r[l];0!==o[u]&&(n=!1)}n&&(a.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},o={9:0},a=[];function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var l=window.webpackJsonp=window.webpackJsonp||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var s=u;a.push([422,0]),r()}({422:function(e,t,r){r(51),r(52),e.exports=r(423)},423:function(e,t,r){"use strict";r.r(t);r(424);var n=r(275),o=r(26),a=r(115),i=r(75),l=r(128),u=r(32),c=r(10),s=r(12),p=r(9),f=r(42),v=r(31),h=r(38),m=r(11),d={};d.module=angular.module("app",["gettext",m.a.name,a.a.name,l.a.module.name,n.a.name]),d.MainController=function(e){this.features=new u.a,this.pointGeomType=o.a.POINT,this.lineStringGeomType=o.a.LINE_STRING,this.polygonGeomType=o.a.POLYGON;var t=new f.a({source:new h.a({wrapX:!1,features:this.features})});this.map=new c.a({layers:[new p.a({source:new v.b}),t],view:new s.a({center:[0,0],zoom:3})}),this.createPointActive=!1;var r=new i.a(this,"createPointActive");e.registerTool("mapTools",r,!1),this.createLineStringActive=!1;var n=new i.a(this,"createLineStringActive");e.registerTool("mapTools",n,!1),this.createPolygonActive=!1;var a=new i.a(this,"createPolygonActive");e.registerTool("mapTools",a,!1),this.dummyActive=!0;var l=new i.a(this,"dummyActive");e.registerTool("mapTools",l,!0)},d.MainController.$inject=["ngeoToolActivateMgr"],d.module.controller("MainController",d.MainController),t.default=d},424:function(e,t){}});
//# sourceMappingURL=createfeature.fb573b.js.map