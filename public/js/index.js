!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);class o{constructor(e,t){t.get("phones/phones.json").then(t=>{e.phones=t.data}).catch(e=>{console.log("EXCEPTION: ",e)})}}class r{constructor(e,t,n){let o=n.phoneID;t.get(`phones/${o}.json`).then(t=>{e.phone=t.data,e.thumbnail=e.phone.images[0]}).catch(e=>{console.log("EXCEPTION: ",e)}),e.setThumbnail=this._setThumbnail.bind(this,e)}_setThumbnail(e,t){e.thumbnail=t}}let l=angular.module("MyPhoneApplication",["ngRoute"]);l.config(["$routeProvider","$locationProvider",(e,t)=>{console.log("config!"),t.html5Mode(!0),e.when("/",{templateUrl:"templates/cataloge.html",controller:["$scope","$http",o]}),e.when("/single-phone/:phoneID",{controller:["$scope","$http","$routeParams",r],templateUrl:"templates/single-phone.html"})}]),l.run()}]);
//# sourceMappingURL=index.js.map