!function(e){function t(t){for(var o,l,u=t[0],i=t[1],s=t[2],m=0,p=[];m<u.length;m++)l=u[m],n[l]&&p.push(n[l][0]),n[l]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);for(c&&c(t);p.length;)p.shift()();return a.push.apply(a,s||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],o=!0,u=1;u<r.length;u++){var i=r[u];0!==n[i]&&(o=!1)}o&&(a.splice(t--,1),e=l(l.s=r[0]))}return e}var o={},n={13:0},a=[];function l(t){if(o[t])return o[t].exports;var r=o[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.m=e,l.c=o,l.d=function(e,t,r){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)l.d(r,o,function(t){return e[t]}.bind(null,o));return r},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var u=window.webpackJsonp=window.webpackJsonp||[],i=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var c=i;a.push([561,0]),r()}({561:function(e,t,r){r(70),r(71),e.exports=r(562)},562:function(e,t,r){"use strict";r.r(t),function(e){r(563),r(280);var o=r(180),n=r(334),a=r(106),l=r(72),u=r(54),i=r(23),s=r(132),c=r(185),m=r(184),p=r(55),f=r(30),d=r(42),g=r(27),h=r(49),v={};v.module=angular.module("gmfapp",["gettext",o.a.module.name,n.a.name,a.a.name,l.a.module.name,u.a.name,i.a.module.name,s.a.module.name,c.a.name,m.a.name]),v.module.value("gmfTreeUrl","https://geomapfish-demo.camptocamp.com/2.3/wsgi/themes?version=2&background=background"),v.module.value("gmfTreeUrl","https://geomapfish-demo.camptocamp.com/2.3/wsgi/themes?version=2&background=background"),v.module.value("gmfLayersUrl","https://geomapfish-demo.camptocamp.com/2.3/wsgi/layers/"),v.module.value("gmfExternalOGCServers",[{name:"Swiss Topo WMS",type:"WMS",url:"https://wms.geo.admin.ch/?lang=fr"},{name:"ASIT VD",type:"WMTS",url:"https://ows.asitvd.ch/wmts/1.0.0/WMTSCapabilities.xml"},{name:"Swiss Topo WMTS",type:"WMTS",url:"https://wmts.geo.admin.ch/1.0.0/WMTSCapabilities.xml?lang=fr"}]),v.module.constant("defaultTheme","Filters"),v.module.constant("angularLocaleScript","../build/angular-locale_{{locale}}.js"),v.MainController=function(){function t(t,r,o,n,a){var l=this;this.scope_=t,o.loadThemes(),this.gmfTreeManager=n,this.map=new f.a({layers:[new g.a({source:new h.a})],view:new d.a({projection:p.a,resolutions:[200,100,50,20,10,5,2.5,2,1,.5],center:[537635,152640],zoom:2})}),r.setDatasourceMap(this.map),o.getThemesObject().then(function(e){if(e)for(var t=0,r=e.length;t<r;t++)if(175===e[t].id){l.gmfTreeManager.setFirstLevelGroups(e[t].children);break}}),this.queryActive=!0,e('[data-toggle="tooltip"]').tooltip({container:"body",trigger:"hover"})}return t.$inject=["$scope","gmfDataSourcesManager","gmfThemes","gmfTreeManager","ngeoDataSources"],t}(),v.module.controller("MainController",v.MainController),t.default=v}.call(this,r(28))},563:function(e,t){}});
//# sourceMappingURL=importdatasource.0ed95f.js.map