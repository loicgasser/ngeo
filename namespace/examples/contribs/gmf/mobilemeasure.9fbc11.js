!function(t){function e(e){for(var i,o,s=e[0],l=e[1],c=e[2],u=0,p=[];u<s.length;u++)o=s[u],a[o]&&p.push(a[o][0]),a[o]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);for(h&&h(e);p.length;)p.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],i=!0,s=1;s<n.length;s++){var l=n[s];0!==a[l]&&(i=!1)}i&&(r.splice(e--,1),t=o(o.s=n[0]))}return t}var i={},a={17:0},r=[];function o(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=i,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(n,i,function(e){return t[e]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var s=window.webpackJsonp=window.webpackJsonp||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var h=l;r.push([574,0]),n()}({574:function(t,e,n){n(71),n(72),t.exports=n(617)},575:function(t,e){},576:function(module,exports){module.exports=function(obj){obj||(obj={});var __t,__p="";with(obj)__p+='<a class="btn btn-default"\n   ng-if="ctrl.drawing && (!ctrl.valid)"\n   ng-click="ctrl.addPoint()">\n     <span class="fa fa-check"></span>\n     {{\'Set as starting point\' | translate}}\n</a>\n<a class="btn btn-default"\n   ng-if="ctrl.dirty"\n   ng-click="ctrl.addPoint()">\n     <span class="fa fa-plus"></span>\n     {{\'Add new point\' | translate}}\n</a>\n<a class="btn btn-default"\n   ng-if="ctrl.drawing && ctrl.valid && !ctrl.dirty"\n   ng-click="ctrl.finish()">\n     <span class="fa fa-check"></span>\n     {{\'Terminate\' | translate}}\n</a>\n<a class="btn btn-default"\n   ng-if="ctrl.valid"\n   ng-click="ctrl.clear()">\n     <span class="fa fa-repeat"></span>\n     {{\'Clear\' | translate}}\n</a>\n<a class="btn btn-default"\n   ng-if="ctrl.active"\n   ng-click="ctrl.deactivate()">\n     <span class="fa fa-times"></span>\n     {{\'Close\' | translate}}\n</a>\n';return __p}},577:function(module,exports){module.exports=function(obj){obj||(obj={});var __t,__p="";with(obj)__p+='<a class="btn btn-default"\n   ng-if="ctrl.active"\n   ng-click="ctrl.deactivate()">\n     <span class="fa fa-times"></span>\n     {{\'Close\' | translate}}\n</a>\n';return __p}},617:function(t,e,n){"use strict";n.r(e);n(575);var i=n(55),a=n(212),r=n(118),o=n(223),s=n(1),l=n(179),c=n(77),h=n(26),u=n(2),p=n(13),g=n(20),f=n(36),d=n(21),m=n(80),_=n(48),y=n(65),v=n(60),w=function(t){_.a.call(this,{handleEvent:g.b}),this.changeEventKey_=null,this.type_=t.type,this.minPoints_=t.minPoints?t.minPoints:"Polygon"===this.type_?3:2,this.sketchFeature_=null,this.sketchPoints_=[],this.sketchPoint_=null,this.overlay_=new y.a({source:new v.b({useSpatialIndex:!1,wrapX:!!t.wrapX&&t.wrapX}),style:t.style||l.a.getDefaultDrawStyleFunction(),updateWhileAnimating:!0,updateWhileInteracting:!0}),u.a(this,"change:active",this.updateState_,this),this.set("dirty",!1),this.set("drawing",!1),this.set("valid",!1)};h.c(w,_.a),w.prototype.setMap=function(t){this.getMap()&&this.changeEventKey_&&u.e(this.changeEventKey_),_.a.prototype.setMap.call(this,t),t&&(this.changeEventKey_=u.a(t.getView(),"change:center",this.handleViewCenterChange_,this)),this.updateState_()},w.prototype.getDirty=function(){return this.get("dirty")},w.prototype.getDrawing=function(){return this.get("drawing")},w.prototype.getValid=function(){return this.get("valid")},w.prototype.getFeature=function(){return this.sketchFeature_},w.prototype.addToDrawing=function(){var t=this.getActive(),e=this.getDrawing();if(t&&e){var n=void 0,i=this.getSketchPointGeometry_().getCoordinates(),a=void 0;if("Point"===this.type_){if(!this.sketchFeature_){this.sketchFeature_=new p.a(new d.a(i));var r=new c.a("drawstart",{feature:this.sketchFeature_});this.dispatchEvent(r)}return n=this.sketchFeature_.getGeometry(),s.a.assertInstanceof(n,m.a),void n.setCoordinates(i)}if("LineString"===this.type_)if(this.sketchPoints_.push(this.sketchPoint_),this.sketchFeature_)n=this.sketchFeature_.getGeometry(),s.a.assertInstanceof(n,m.a),(a=n.getCoordinates()).push(i.slice()),n.setCoordinates(a);else{a=[i.slice(),i.slice()],this.sketchFeature_=new p.a(new f.a(a));var o=new c.a("drawstart",{feature:this.sketchFeature_});this.dispatchEvent(o)}this.getDirty()&&this.set("dirty",!1);var l=this.getValid();"LineString"===this.type_&&(a.length>=this.minPoints_?l||this.set("valid",!0):l&&this.set("valid",!1)),this.sketchPoint_=null,this.updateSketchFeatures_()}},w.prototype.clearDrawing=function(){this.setActive(!1),this.setActive(!0)},w.prototype.finishDrawing=function(){var t=this.getActive(),e=this.getDrawing();if(t&&e){this.sketchPoint_&&this.addToDrawing(),this.set("drawing",!1);var n=new c.a("drawend",{feature:this.sketchFeature_});this.dispatchEvent(n)}},w.prototype.startDrawing_=function(){this.set("drawing",!0),this.createOrUpdateSketchPoint_(),this.updateSketchFeatures_(),"Point"===this.type_&&this.addToDrawing()},w.prototype.modifyDrawing_=function(){if(this.sketchFeature_){var t=this.getCenter_();if("LineString"===this.type_){var e=this.sketchFeature_.getGeometry();s.a.assertInstanceof(e,m.a);var n=e.getCoordinates();n.pop(),n.push(t),e.setCoordinates(n)}this.getDirty()||this.set("dirty",!0)}},w.prototype.abortDrawing_=function(){var t=this.sketchFeature_;return(t||this.sketchPoints_.length>0)&&(this.sketchFeature_=null,this.sketchPoint_=null,this.overlay_.getSource().clear(!0)),this.sketchPoints_=[],this.set("dirty",!1),this.set("drawing",!1),this.set("valid",!1),t},w.prototype.updateState_=function(){var t=this.getMap(),e=this.getActive();t&&e?this.startDrawing_():this.abortDrawing_(),this.overlay_.setMap(e?t:null)},w.prototype.handleViewCenterChange_=function(t){var e=this.getActive(),n=this.getDrawing();e&&n&&(this.createOrUpdateSketchPoint_(),"Point"===this.type_?this.addToDrawing():(this.modifyDrawing_(),this.updateSketchFeatures_()))},w.prototype.createOrUpdateSketchPoint_=function(){var t=this.getCenter_();this.sketchPoint_?this.getSketchPointGeometry_().setCoordinates(t):this.sketchPoint_=new p.a(new d.a(t))},w.prototype.updateSketchFeatures_=function(){var t=[];this.sketchFeature_&&t.push(this.sketchFeature_),this.sketchPoint_&&t.push(this.sketchPoint_);var e=this.overlay_.getSource();e.clear(!0),e.addFeatures(t),e.addFeatures(this.sketchPoints_)},w.prototype.getSketchPointGeometry_=function(){s.a.assert(this.sketchPoint_,"sketch point should be thruty");var t=this.sketchPoint_.getGeometry();return s.a.assertInstanceof(t,d.a),t},w.prototype.getCenter_=function(){var t=this.getMap().getView().getCenter();return s.a.assertArray(t),t};var b=w,C=n(7),k=function(t,e,n){var i=void 0!==n?n:{};C.a(i,{displayHelpTooltip:!1}),o.a.call(this,t,e,i)};h.c(k,o.a),k.prototype.createDrawInteraction=function(t,e){return new b({type:"LineString",style:t,source:e})};var M=k,P=n(100),S=n(31),D=n(107),F=n(30),A=n(10),j=angular.module("gmfMobileMeasureLength",[r.a.name]);j.value("gmfMobileMeasureLengthTemplateUrl",function(t,e){var n=e.gmfMobileMeasureLengthTemplateurl;return void 0!==n?n:"gmf/measure/lengthComponent"}),j.run(["$templateCache",function(t){t.put("gmf/measure/lengthComponent",n(576))}]),j.component_=function(t){return{restrict:"A",scope:{active:"=gmfMobileMeasurelengthActive",precision:"<?gmfMobileMeasurelengthPrecision",map:"=gmfMobileMeasurelengthMap",sketchStyle:"=?gmfMobileMeasurelengthSketchstyle"},controller:"GmfMobileMeasureLengthController as ctrl",bindToController:!0,templateUrl:t,link:function(t,e,n,i){i.init()}}},j.component_.$inject=["gmfMobileMeasureLengthTemplateUrl"],j.directive("gmfMobileMeasurelength",j.component_),j.Controller_=function(t,e,n){var i=this;this.scope_=t,this.filter_=e,this.gettextCatalog_=n,this.map,this.active,this.scope_.$watch(function(){return i.active},function(t){i.measure.setActive(t)}),this.precision,this.sketchStyle=new A.c({fill:new S.a({color:"rgba(255, 255, 255, 0.2)"}),stroke:new F.a({color:"rgba(0, 0, 0, 0.5)",lineDash:[10,10],width:2}),image:new D.a({stroke:new F.a({color:"rgba(0, 0, 0, 0.7)",width:2}),points:4,radius:8,radius2:0,angle:0})}),this.measure,this.drawInteraction,this.dirty=!1,this.drawing=!1,this.valid=!1},j.Controller_.$inject=["$scope","$filter","gettextCatalog"],j.Controller_.prototype.init=function(){this.measure=new M(this.filter_("ngeoUnitPrefix"),this.gettextCatalog_,{precision:this.precision,sketchStyle:this.sketchStyle}),this.measure.setActive(this.active),P.a.interaction(this.measure),this.drawInteraction=this.measure.getDrawInteraction();var t=this.drawInteraction;P.a.interaction(t),Object.defineProperty(this,"hasPoints",{get:function(){return null!==this.drawInteraction.getFeature()}}),u.a(t,"change:dirty",function(){this.dirty=t.getDirty(),this.dirty&&this.scope_.$apply()},this),u.a(t,"change:drawing",function(){this.drawing=t.getDrawing()},this),u.a(t,"change:valid",function(){this.valid=t.getValid()},this),this.map.addInteraction(this.measure)},j.Controller_.prototype.addPoint=function(){this.drawInteraction.addToDrawing()},j.Controller_.prototype.clear=function(){this.drawInteraction.clearDrawing()},j.Controller_.prototype.finish=function(){this.drawInteraction.finishDrawing()},j.Controller_.prototype.deactivate=function(){this.active=!1},j.controller("GmfMobileMeasureLengthController",j.Controller_);var I=j,x=n(205),T=n(103),L=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};C.a(n,{displayHelpTooltip:!1}),T.a.call(this,n),this.format_=t,this.coordFormat_=e};h.c(L,T.a),L.prototype.createDrawInteraction=function(t,e){return new b({type:"Point",style:t,source:e})},L.prototype.handleMeasure=function(t){var e=s.a.assertInstanceof(this.sketchFeature.getGeometry(),d.a),n=this.decimals;t(T.a.getFormattedPoint(e,n,this.format_,this.coordFormat_),e.getLastCoordinate())};var E=L,$=n(159),V=angular.module("gmfMobileMeasurePoint",[x.a.module.name,$.a.name]);V.value("gmfMobileMeasurePointTemplateUrl",function(t,e){var n=e.gmfMobileMeasurePointTemplateurl;return void 0!==n?n:"gmf/measure/pointComponent"}),V.run(["$templateCache",function(t){t.put("gmf/measure/pointComponent",n(577))}]),V.component_=function(t){return{restrict:"A",scope:{active:"=gmfMobileMeasurepointActive",getCoordinateDecimalsFn:"&?gmfMobileMeasurepointCoordinatedecimals",getLayersConfigFn:"&gmfMobileMeasurepointLayersconfig",map:"=gmfMobileMeasurepointMap",sketchStyle:"=?gmfMobileMeasurepointSketchstyle",format:"<gmfMobileMeasurepointFormat"},controller:"GmfMobileMeasurePointController as ctrl",bindToController:!0,templateUrl:t,link:function(t,e,n,i){i.init()}}},V.component_.$inject=["gmfMobileMeasurePointTemplateUrl"],V.directive("gmfMobileMeasurepoint",V.component_),V.Controller_=function(t,e,n,i,a){var r=this;this.gmfRaster_=i,this.ngeoDebounce_=a,this.gettextCatalog_=t,this.$filter_=n,this.map,this.active,e.$watch(function(){return r.active},function(t){r.measure.setActive(t),r.handleMeasureActiveChange_()});var o=this.getCoordinateDecimalsFn;this.coordinateDecimals=o?o():0,this.layersConfig,this.sketchStyle,void 0===this.sketchStyle&&(this.sketchStyle=new A.c({fill:new S.a({color:"rgba(255, 255, 255, 0.2)"}),stroke:new F.a({color:"rgba(0, 0, 0, 0.5)",lineDash:[10,10],width:2}),image:new D.a({stroke:new F.a({color:"rgba(0, 0, 0, 0.7)",width:2}),points:4,radius:8,radius2:0,angle:0})})),this.format,this.measure,this.drawInteraction,this.mapViewPropertyChangeEventKey_=null},V.Controller_.$inject=["gettextCatalog","$scope","$filter","gmfRaster","ngeoDebounce"],V.Controller_.prototype.init=function(){this.measure=new E(this.$filter_("ngeoNumberCoordinates"),this.format||"{x}, {y}",{decimals:this.coordinateDecimals,sketchStyle:this.sketchStyle}),this.measure.setActive(this.active),P.a.interaction(this.measure),this.drawInteraction=this.measure.getDrawInteraction(),P.a.interaction(this.drawInteraction);var t=this.getLayersConfigFn();s.a.assert(Array.isArray(t)),this.layersConfig=t,this.map.addInteraction(this.measure)},V.Controller_.prototype.deactivate=function(){this.active=!1},V.Controller_.prototype.translate=function(t){return this.gettextCatalog_.getString(t)},V.Controller_.prototype.handleMeasureActiveChange_=function(){if(this.measure.getActive()){var t=this.map.getView();this.mapViewPropertyChangeEventKey_=u.a(t,"propertychange",this.ngeoDebounce_(this.getMeasure_.bind(this),300,!0),this),this.getMeasure_()}else this.mapViewPropertyChangeEventKey_&&(u.e(this.mapViewPropertyChangeEventKey_),this.mapViewPropertyChangeEventKey_=null)},V.Controller_.prototype.getMeasure_=function(){var t=this,e=this.map.getView().getCenter();s.a.assertArray(e);var n={layers:this.layersConfig.map(function(t){return t.name}).join(",")};this.gmfRaster_.getRaster(e,n).then(function(e){var n=t.measure.getTooltipElement(),i=document.createElement("div");i.className="gmf-mobile-measure-point";var a=t.layersConfig,r=Array.isArray(a),o=0;for(a=r?a:a[Symbol.iterator]();;){var s;if(r){if(o>=a.length)break;s=a[o++]}else{if((o=a.next()).done)break;s=o.value}var l=s,c=l.name;if(c in e){var h=e[c],u=document.createElement("div");u.className="gmf-mobile-measure-point-"+c;var p=l.unit||"",g=l.decimals&&l.decimals>0||0;h=t.$filter_("number")(h,g),u.innerHTML=[t.translate(c),": ",h," ",p].join(""),i.appendChild(u)}}var f=n.getElementsByClassName("gmf-mobile-measure-point");f[0]&&f[0].remove(),n.appendChild(i)})},V.controller("GmfMobileMeasurePointController",V.Controller_),V.LayerConfig;var O=V,G=n(120),U=n(56),K=n(33),R=n(43),N=n(408),H=n(29),X=n(50),J={};J.module=angular.module("gmfapp",["gettext",i.a.name,a.a.module.name,I.name,O.name,G.a.name]),J.module.value("gmfRasterUrl","https://geomapfish-demo.camptocamp.com/2.3/wsgi/raster"),J.module.constant("defaultTheme","Demo"),J.module.constant("angularLocaleScript","../build/angular-locale_{{locale}}.js"),J.MainController=function(t){var e=t.getMapCenter()||[537635,152640],n=t.getMapZoom()||3;this.map=new K.a({layers:[new H.a({source:new X.a})],view:new R.a({projection:U.a,resolutions:[200,100,50,20,10,5,2.5,2,1,.5],center:e,zoom:n})}),this.map.addControl(new N.a),this.measureLengthActive=!1,this.measurePointLayersConfig=[{name:"aster",unit:"m",decimals:2},{name:"srtm",unit:"m"}],this.measurePointActive=!1},J.MainController.$inject=["gmfPermalink"],J.module.controller("MainController",J.MainController);e.default=J}});
//# sourceMappingURL=mobilemeasure.9fbc11.js.map