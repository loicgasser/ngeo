!function(e){function t(t){for(var r,i,u=t[0],l=t[1],c=t[2],s=0,p=[];s<u.length;s++)i=u[s],o[i]&&p.push(o[i][0]),o[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);for(f&&f(t);p.length;)p.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,u=1;u<n.length;u++){var l=n[u];0!==o[l]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={36:0},a=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var u=window.webpackJsonp=window.webpackJsonp||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var c=0;c<u.length;c++)t(u[c]);var f=l;a.push([510,0]),n()}({510:function(e,t,n){n(51),n(52),e.exports=n(511)},511:function(e,t,n){"use strict";n.r(t);n(512);var r=n(278),o=n(32),a=n(8),i=n(10),u=n(12),l=n(9),c=n(42),f=n(31),s=n(38),p=n(118),w=n(35),d=n(20),h=n(34),v=n(73),y=n(28),g=n(11),m={};m.module=angular.module("app",["gettext",g.a.name]);var b=angular.module("app",["ngeo"]);m.MainController=function(){var e=this;this.map=new i.a({layers:[new l.a({source:new f.b})],view:new u.a({center:[-10997148,4569099],zoom:4})});var t=this.map,n=new y.b([[[-9e6,4e6],[-11e6,4e6],[-11e6,6e6],[-9e6,6e6]]]);this.features=new o.a,this.features.push(new a.a({geometry:n}));var g=new s.a({features:this.features}),m=new c.a({source:g});m.setMap(t);var b=function(){var e={};return e.Polygon=[new d.c({fill:new h.a({color:[255,255,255,.5]})}),new d.c({stroke:new w.a({color:[255,255,255,1],width:5})}),new d.c({stroke:new w.a({color:[0,153,255,1],width:3})})],e.Point=new d.c({image:new v.a,text:new p.a({text:"",font:"normal 18px FontAwesome",fill:new h.a({color:"#ffffff"})})}),e.GeometryCollection=e.Polygon.concat(e.Point),function(t,n){return e[t.getGeometry().getType()]}}();this.interaction=new r.a({features:this.features,layers:[m],style:b});var x=this.interaction;x.setActive(!1),t.addInteraction(x),t.on("singleclick",function(t){e.map.forEachFeatureAtPixel(t.pixel,function(e){return e})&&e.interaction.setActive(!0)})},b.controller("MainController",m.MainController),t.default=m},512:function(e,t){}});
//# sourceMappingURL=rotate.63e34b.js.map