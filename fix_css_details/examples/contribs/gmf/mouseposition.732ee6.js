!function(e){function n(n){for(var t,a,u=n[0],i=n[1],c=n[2],p=0,s=[];p<u.length;p++)a=u[p],o[a]&&s.push(o[a][0]),o[a]=0;for(t in i)Object.prototype.hasOwnProperty.call(i,t)&&(e[t]=i[t]);for(f&&f(n);s.length;)s.shift()();return l.push.apply(l,c||[]),r()}function r(){for(var e,n=0;n<l.length;n++){for(var r=l[n],t=!0,u=1;u<r.length;u++){var i=r[u];0!==o[i]&&(t=!1)}t&&(l.splice(n--,1),e=a(a.s=r[0]))}return e}var t={},o={18:0},l=[];function a(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=t,a.d=function(e,n,r){a.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,n){if(1&n&&(e=a(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var t in e)a.d(r,t,function(n){return e[n]}.bind(null,t));return r},a.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(n,"a",n),n},a.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},a.p="";var u=window.webpackJsonp=window.webpackJsonp||[],i=u.push.bind(u);u.push=n,u=u.slice();for(var c=0;c<u.length;c++)n(u[c]);var f=i;l.push([570,0]),r()}({570:function(e,n,r){r(70),r(71),e.exports=r(571)},571:function(e,n,r){"use strict";r.r(n);r(572);var t=r(212),o=r(354),l=r(55),a=r(33),u=r(42),i=r(29),c=r(49),f={};f.module=angular.module("gmfapp",["gettext",t.a.name]),f.module.constant("defaultTheme","Demo"),f.module.constant("angularLocaleScript","../build/angular-locale_{{locale}}.js"),f.MainController=function(){this.projections=[{code:o.a,label:"CH1903+ / LV95",filter:"ngeoNumberCoordinates:0:Coordinates (m)&#58; {x}, {y}"},{code:l.a,label:"CH1903 / LV03",filter:"ngeoNumberCoordinates:2:[{x} E; {y} N]"},{code:"EPSG:4326",label:"WGS84",filter:"ngeoDMSCoordinates:2"}],this.map=new a.a({layers:[new i.a({source:new c.a})],view:new u.a({center:[828042,5933739],zoom:8})})},f.module.controller("MainController",f.MainController),n.default=f},572:function(e,n){}});
//# sourceMappingURL=mouseposition.732ee6.js.map