!function(o){function n(n){for(var r,l,c=n[0],p=n[1],u=n[2],a=0,d=[];a<c.length;a++)l=c[a],t[l]&&d.push(t[l][0]),t[l]=0;for(r in p)Object.prototype.hasOwnProperty.call(p,r)&&(o[r]=p[r]);for(s&&s(n);d.length;)d.shift()();return i.push.apply(i,u||[]),e()}function e(){for(var o,n=0;n<i.length;n++){for(var e=i[n],r=!0,c=1;c<e.length;c++){var p=e[c];0!==t[p]&&(r=!1)}r&&(i.splice(n--,1),o=l(l.s=e[0]))}return o}var r={},t={33:0},i=[];function l(n){if(r[n])return r[n].exports;var e=r[n]={i:n,l:!1,exports:{}};return o[n].call(e.exports,e,e.exports,l),e.l=!0,e.exports}l.m=o,l.c=r,l.d=function(o,n,e){l.o(o,n)||Object.defineProperty(o,n,{enumerable:!0,get:e})},l.r=function(o){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})},l.t=function(o,n){if(1&n&&(o=l(o)),8&n)return o;if(4&n&&"object"==typeof o&&o&&o.__esModule)return o;var e=Object.create(null);if(l.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:o}),2&n&&"string"!=typeof o)for(var r in o)l.d(e,r,function(n){return o[n]}.bind(null,r));return e},l.n=function(o){var n=o&&o.__esModule?function(){return o.default}:function(){return o};return l.d(n,"a",n),n},l.o=function(o,n){return Object.prototype.hasOwnProperty.call(o,n)},l.p="";var c=window.webpackJsonp=window.webpackJsonp||[],p=c.push.bind(c);c.push=n,c=c.slice();for(var u=0;u<c.length;u++)n(c[u]);var s=p;i.push([490,0]),e()}({325:function(o,n,e){"use strict";(function(o){e(240),e(493);var r=angular.module("ngeoPopover",[]);r.component_=function(){return{restrict:"A",scope:!0,controller:"NgeoPopoverController as popoverCtrl",link:function(n,e,r,t){t.anchorElm.on("hidden.bs.popover",function(){t.anchorElm.data("bs.popover").inState.click=!1}),t.anchorElm.on("inserted.bs.popover",function(){t.bodyElm.show(),t.shown=!0}),t.anchorElm.popover({container:"body",html:!0,content:t.bodyElm,placement:r.ngeoPopoverPlacement||"right"}),r.ngeoPopoverDismiss&&o(r.ngeoPopoverDismiss).on("scroll",function(){t.dismissPopover()}),n.$on("$destroy",function(){t.anchorElm.popover("destroy"),t.anchorElm.unbind("inserted.bs.popover"),t.anchorElm.unbind("hidden.bs.popover")})}}},r.anchorComponent=function(){return{restrict:"A",require:"^^ngeoPopover",link:function(o,n,e,r){r.anchorElm=n}}},r.contentComponent=function(){return{restrict:"A",require:"^^ngeoPopover",link:function(o,n,e,r){r.bodyElm=n,n.hide()}}},r.PopoverController_=function(o){function n(o){this.anchorElm[0]!==o.target&&this.bodyElm.parent()[0]!==o.target&0===this.bodyElm.parent().find(o.target).length&&this.shown&&this.dismissPopover()}this.shown=!1,this.anchorElm=void 0,this.bodyElm=void 0,angular.element("body").on("mousedown",n.bind(this)),o.$on("$destroy",function(){angular.element("body").off("mousedown",n)})},r.PopoverController_.$inject=["$scope"],r.PopoverController_.prototype.dismissPopover=function(){this.shown=!1,this.anchorElm.popover("hide")},r.controller("NgeoPopoverController",r.PopoverController_),r.directive("ngeoPopover",r.component_),r.directive("ngeoPopoverAnchor",r.anchorComponent),r.directive("ngeoPopoverContent",r.contentComponent),n.a=r}).call(this,e(37))},490:function(o,n,e){e(53),e(54),o.exports=e(491)},491:function(o,n,e){"use strict";e.r(n);e(492);var r=e(325),t={};t.module=angular.module("app",["gettext",r.a.name]),n.default=t},492:function(o,n){}});
//# sourceMappingURL=popover.aa63d7.js.map