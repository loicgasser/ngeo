!function(e){function t(t){for(var r,i,l=t[0],u=t[1],p=t[2],s=0,f=[];s<l.length;s++)i=l[s],n[i]&&f.push(n[i][0]),n[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);for(c&&c(t);f.length;)f.shift()();return a.push.apply(a,p||[]),o()}function o(){for(var e,t=0;t<a.length;t++){for(var o=a[t],r=!0,l=1;l<o.length;l++){var u=o[l];0!==n[u]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=o[0]))}return e}var r={},n={7:0},a=[];function i(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=e,i.c=r,i.d=function(e,t,o){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(o,r,function(t){return e[t]}.bind(null,r));return o},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var l=window.webpackJsonp=window.webpackJsonp||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var p=0;p<l.length;p++)t(l[p]);var c=u;a.push([542,0]),o()}({542:function(e,t,o){o(71),o(72),e.exports=o(543)},543:function(e,t,o){"use strict";o.r(t),function(e){o(544),o(281);var r=o(55),n=o(368),a=o(1),i=o(12),l=o(121),u=o(63),p=o(59),c=o(91),s=o(33),f=o(43),v=o(29),m=o(50),d={};d.module=angular.module("gmfapp",["gettext",n.a.name,r.a.name,l.a.name,u.a.module.name,c.a.module.name]),d.module.value("ngeoExportFeatureFormats",[u.a.FormatType.KML,u.a.FormatType.GPX]),d.module.constant("defaultTheme","Demo"),d.module.constant("angularLocaleScript","../build/angular-locale_{{locale}}.js"),d.MainController=function(t,o,r,n,i){var l=this;this.scope_=t;var u=new f.a({center:[0,0],zoom:3});o.setProjection(a.a.assert(u.getProjection())),i.getFeatureOverlay().setFeatures(r),this.map=new s.a({layers:[new v.a({source:new m.a})],view:u}),this.drawFeatureActive=!0;var c=new p.a(this,"drawFeatureActive");n.registerTool("mapTools",c,!0),this.pointerMoveActive=!1;var d=new p.a(this,"pointerMoveActive");n.registerTool("mapTools",d,!1),t.$watch(function(){return l.pointerMoveActive},function(t){t?l.map.on("pointermove",l.handleMapPointerMove_,l):(l.map.un("pointermove",l.handleMapPointerMove_,l),e("#pointermove-feature").html(""))}),e('[data-toggle="tooltip"]').tooltip({container:"body",trigger:"hover"})},d.MainController.$inject=["$scope","ngeoFeatureHelper","ngeoFeatures","ngeoToolActivateMgr","ngeoFeatureOverlayMgr"],d.MainController.prototype.handleMapPointerMove_=function(t){var o=t.pixel,r=this.map.forEachFeatureAtPixel(o,function(e){return e});e("#pointermove-feature").html(r?r.get(i.a.NAME):"None"),this.scope_.$apply()},d.module.controller("MainController",d.MainController),t.default=d}.call(this,o(25))},544:function(e,t){}});
//# sourceMappingURL=drawfeature.0f905e.js.map