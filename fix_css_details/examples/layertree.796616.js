!function(e){function t(t){for(var n,a,i=t[0],p=t[1],u=t[2],c=0,y=[];c<i.length;c++)a=i[c],o[a]&&y.push(o[a][0]),o[a]=0;for(n in p)Object.prototype.hasOwnProperty.call(p,n)&&(e[n]=p[n]);for(s&&s(t);y.length;)y.shift()();return l.push.apply(l,u||[]),r()}function r(){for(var e,t=0;t<l.length;t++){for(var r=l[t],n=!0,i=1;i<r.length;i++){var p=r[i];0!==o[p]&&(n=!1)}n&&(l.splice(t--,1),e=a(a.s=r[0]))}return e}var n={},o={22:0},l=[];function a(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=n,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var i=window.webpackJsonp=window.webpackJsonp||[],p=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var s=p;l.push([457,0]),r()}({457:function(e,t,r){r(53),r(54),e.exports=r(458)},458:function(e,t,r){"use strict";r.r(t);r(459);var n=r(18),o=r(25),l=r(17),a=r(31),i=r(297),p=r(284),u=r(22),s=r(199),c={};c.module=angular.module("app",["gettext",p.a.name,u.a.name,s.a.module.name]),c.layertreeComponent={bindings:{map:"=appLayertreeMap"},controller:"AppLayertreeController",template:'<div ngeo-layertree="::$ctrl.tree" ngeo-layertree-templateurl="examples/layertree" ngeo-layertree-map="$ctrl.map" ngeo-layertree-nodelayer="$ctrl.getLayer(node)"></div>'},c.module.run(["$templateCache",function(e){e.put("examples/layertree",r(460))}]),c.module.component("appLayertree",c.layertreeComponent),c.LayertreeController=function(e,t,r,n){var o=this;this.tree=void 0,e.get("data/tree.json").then(function(e){o.tree=e.data}),this.http_=e,this.sce_=t,this.getLayer_=r,this.infoPopup_=n(),this.promises_={}},c.LayertreeController.$inject=["$http","$sce","appGetLayer","ngeoCreatePopup"],c.LayertreeController.prototype.getLayer=function(e){return this.getLayer_(e)},c.LayertreeController.prototype.onButtonClick=function(e,t){var r=this,n=e.layerType;n in this.promises_||(this.promises_[n]=this.http_.get("data/metadata.html").then(function(e){return r.sce_.trustAsHtml(e.data)}));var o=this.infoPopup_;this.promises_[n].then(function(t){o.setTitle(e.name),o.setContent(t),o.setOpen(!0)})},c.module.controller("AppLayertreeController",c.LayertreeController),c.getLayer=function(){var e={};return function(t){if(!("layerType"in t))return null;var r=t.layerType;if(r in e)return e[r];var n=void 0;n="stamenWatercolor"==r?new i.a({layer:"watercolor"}):"stamenTerrain-labels"==r?new i.a({layer:"terrain-labels"}):"osmHumanitarian"==r?new a.b({url:"https://tile-{a-c}.openstreetmap.fr/hot/{z}/{x}/{y}.png"}):"osmCycle"==r?new a.b({url:"https://{a-c}.tile.thunderforest.com/cycle/{z}/{x}/{y}.png"}):"osmTransport"==r?new a.b({url:"https://{a-c}.tile.thunderforest.com/transport/{z}/{x}/{y}.png"}):new a.b;var o=new l.a({source:n});return o.set("type",r),e[r]=o,o}}(),c.module.value("appGetLayer",c.getLayer),c.MainController=function(){this.map=new n.a({layers:[new l.a({source:new a.b})],view:new o.a({center:[-10983710.59086991,4686507.078220731],zoom:4})})},c.module.controller("MainController",c.MainController),t.default=c},459:function(e,t){},460:function(module,exports){module.exports=function(obj){obj||(obj={});var __t,__p="";with(obj)__p+='<span ng-if="::!layertreeCtrl.isRoot">{{::layertreeCtrl.node.name}}</span>\n<input type="checkbox" ng-if="::layertreeCtrl.node && !layertreeCtrl.node.children"\n    ng-model="layertreeCtrl.getSetActive" ng-model-options="{getterSetter: true}"/>\n<button ng-if="::layertreeCtrl.node && !layertreeCtrl.node.children"\n        ng-click="ctrl.onButtonClick(layertreeCtrl.node, layertreeCtrl.layer)">i</button>\n<ul ng-if="::layertreeCtrl.node.children">\n  <li ng-repeat="node in ::layertreeCtrl.node.children"\n      ngeo-layertree="::node"\n      ngeo-layertree-templateurl="partials/layertree.html"\n      ngeo-layertree-notroot\n      ngeo-layertree-map="layertreeCtrl.map"\n      ngeo-layertree-nodelayerexpr="layertreeCtrl.nodelayerExpr">\n  </li>\n</ul>\n';return __p}}});
//# sourceMappingURL=layertree.796616.js.map