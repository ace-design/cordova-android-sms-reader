parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"LI4l":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;class e{exec(e){return new Promise((r,t)=>{cordova.exec(r,t,"AndroidSMSReader",this.action,[e])})}}exports.default=e;
},{}],"o0BC":[function(require,module,exports) {
"use strict";var e;Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0,function(e){e.REQUEST="REQUEST",e.CHECK="CHECK"}(e||(e={}));var t=e;exports.default=t;
},{}],"nQvr":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=n(require("./Action")),t=n(require("./model/PermissionAction"));function n(e){return e&&e.__esModule?e:{default:e}}var r=function(e,t,n,r){return new(n||(n=Promise))(function(i,o){function u(e){try{c(r.next(e))}catch(t){o(t)}}function s(e){try{c(r.throw(e))}catch(t){o(t)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(u,s)}c((r=r.apply(e,t||[])).next())})};class i extends e.default{constructor(){super(...arguments),this.action="permission"}exec(e){return super.exec(e)}requestPermission(){return r(this,void 0,void 0,function*(){return this.exec(t.default.REQUEST)})}assertPermission(){return r(this,void 0,void 0,function*(){return this.exec(t.default.CHECK)})}}exports.default=i;
},{"./Action":"LI4l","./model/PermissionAction":"o0BC"}],"ZGky":[function(require,module,exports) {
"use strict";var e;Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0,function(e){e.ALL="",e.INBOX="inbox",e.SENT="sent"}(e||(e={}));var t=e;exports.default=t;
},{}],"w0UH":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;class e{constructor(e,t=[]){this.allSMS=e,this.callbackFilters=t}filter(t){return new e(this.allSMS,this.callbackFilters.concat(t))}withPhoneNumbers(...e){return this.filter(t=>e.indexOf(t.address)>=0)}bodiesInclude(e,t=!1){if(t)return this.filter(t=>t.body.includes(e));const r=e.toLowerCase();return this.filter(e=>e.body.toLowerCase().includes(r))}since(e){const t=new Date(e);return this.filter(e=>new Date(e.date).getTime()>=t.getTime())}read(){return this.filter(e=>e.read)}get all(){return this.allSMS.filter(e=>{let t=!0;for(let r=0;r<this.callbackFilters.length&&t;r++)t=this.callbackFilters[r](e);return t})}}exports.default=e;
},{}],"L8Fp":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=r(require("./Action")),t=r(require("./model/SMSSource")),n=r(require("./lib/SMSResult"));function r(e){return e&&e.__esModule?e:{default:e}}var u=function(e,t,n,r){return new(n||(n=Promise))(function(u,c){function o(e){try{a(r.next(e))}catch(t){c(t)}}function i(e){try{a(r.throw(e))}catch(t){c(t)}}function a(e){var t;e.done?u(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(o,i)}a((r=r.apply(e,t||[])).next())})};class c extends e.default{constructor(){super(...arguments),this.action="read"}read(e=t.default.ALL){const r=Object.create(null,{exec:{get:()=>super.exec}});return u(this,void 0,void 0,function*(){return new n.default(yield r.exec.call(this,e))})}}exports.default=c;
},{"./Action":"LI4l","./model/SMSSource":"ZGky","./lib/SMSResult":"w0UH"}],"VYI8":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.smsreader=exports.permission=void 0;var e=s(require("./Permission")),r=s(require("./SMSReader"));function s(e){return e&&e.__esModule?e:{default:e}}const t=new e.default;exports.permission=t;const o=new r.default;exports.smsreader=o;var i={permission:t,smsreader:o};exports.default=i;
},{"./Permission":"nQvr","./SMSReader":"L8Fp"}]},{},["VYI8"], null)
//# sourceMappingURL=/reader.js.map