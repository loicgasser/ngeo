!function(e){function r(r){for(var n,a,u=r[0],i=r[1],s=r[2],p=0,m=[];p<u.length;p++)a=u[p],o[a]&&m.push(o[a][0]),o[a]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);for(c&&c(r);m.length;)m.shift()();return l.push.apply(l,s||[]),t()}function t(){for(var e,r=0;r<l.length;r++){for(var t=l[r],n=!0,u=1;u<t.length;u++){var i=t[u];0!==o[i]&&(n=!1)}n&&(l.splice(r--,1),e=a(a.s=t[0]))}return e}var n={},o={6:0},l=[];function a(r){if(n[r])return n[r].exports;var t=n[r]={i:r,l:!1,exports:{}};return e[r].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.m=e,a.c=n,a.d=function(e,r,t){a.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,r){if(1&r&&(e=a(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var n in e)a.d(t,n,function(r){return e[r]}.bind(null,n));return t},a.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(r,"a",r),r},a.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},a.p="";var u=window.webpackJsonp=window.webpackJsonp||[],i=u.push.bind(u);u.push=r,u=u.slice();for(var s=0;s<u.length;s++)r(u[s]);var c=i;l.push([531,0]),t()}({531:function(e,r,t){t(70),t(71),e.exports=t(532)},532:function(e,r,t){"use strict";t.r(r);t(533);var n=t(180),o=t(106),l=t(54),a=t(376),u=t(23),i=t(120),s=t(55),c=t(185),p=t(184),m=t(30),f=t(42),d=t(27),h=t(49),g=t(65),y=t(32),v=t(29),b=t(10),w=t(121),j={};j.module=angular.module("gmfapp",["gettext",n.a.module.name,o.a.name,l.a.name,a.a.name,u.a.module.name,w.a.name,i.a.name,c.a.name,p.a.name]),j.module.value("ngeoQueryOptions",{limit:20}),j.module.value("gmfTreeUrl","https://geomapfish-demo.camptocamp.com/2.3/wsgi/themes?version=2&background=background"),j.module.constant("defaultTheme","Demo"),j.module.constant("angularLocaleScript","../build/angular-locale_{{locale}}.js"),j.queryresultComponent={controller:"AppQueryresultController",template:t(395)},j.module.component("appQueryresult",j.queryresultComponent),j.QueryresultController=function(e){this.result=e},j.QueryresultController.$inject=["ngeoQueryResult"],j.module.controller("AppQueryresultController",j.QueryresultController),j.MainController=function(e,r,t){var n=this;e.loadThemes();var o=new y.a({color:[255,170,0,.6]}),l=new v.a({color:[255,170,0,1],width:2});this.featureStyle=new b.c({fill:o,image:new g.a({fill:o,radius:5,stroke:l}),stroke:l}),this.map=new m.a({layers:[new d.a({source:new h.a})],view:new f.a({projection:s.a,resolutions:[200,100,50,20,10,5,2.5,2,1,.5],center:[537635,152640],zoom:3})}),r.setDatasourceMap(this.map),this.themes=void 0,this.treeSource=void 0,this.queryActive=!0,e.getThemesObject().then(function(e){e&&(n.themes=e,n.treeSource=e[3])}),t.init(this.map)},j.MainController.$inject=["gmfThemes","gmfDataSourcesManager","ngeoFeatureOverlayMgr"],j.module.controller("MainController",j.MainController),r.default=j},533:function(e,r){}});
//# sourceMappingURL=displayquerywindow.0e2332.js.map