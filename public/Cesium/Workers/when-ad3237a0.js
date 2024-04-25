/**
 * Cesium - https://github.com/CesiumGS/cesium
 *
 * Copyright 2011-2020 Cesium Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Columbus View (Pat. Pend.)
 *
 * Portions licensed separately.
 * See https://github.com/CesiumGS/cesium/blob/main/LICENSE.md for full licensing details.
 */
define(["exports"],function(n){"use strict";function r(n,r){return null!=n?n:r}var t,e,h;function j(n,r,t,e){return l(n).then(r,t,e)}function l(n){var r,t,n=n instanceof a?n:u(n)?(r=m(),n.then(function(n){r.resolve(n)},function(n){r.reject(n)},function(n){r.progress(n)}),r.promise):(t=n,new a(function(n){try{return l(n?n(t):t)}catch(n){return p(n)}}));return n}function a(n){this.then=n}function p(t){return new a(function(n,r){try{return r?l(r(t)):p(t)}catch(n){return p(n)}})}function m(){var n=new a(u),i=[],c=[],e=function(r,t,e){var u=m(),o="function"==typeof e?function(n){try{u.progress(e(n))}catch(n){u.progress(n)}}:function(n){u.progress(n)};return i.push(function(n){n.then(r,t).then(u.resolve,u.reject,o)}),c.push(o),u.promise},r=function(n){return v(c,n),n},t=function(n){return n=l(n),e=n.then,t=l,r=w,v(i,n),c=i=h,n};return{then:u,resolve:o,reject:f,progress:s,promise:n,resolver:{resolve:o,reject:f,progress:s}};function u(n,r,t){return e(n,r,t)}function o(n){return t(n)}function f(n){return t(p(n))}function s(n){return r(n)}}function u(n){return n&&"function"==typeof n.then}function o(n,p,v,g,y){return f(2,arguments),j(n,function(n){var r,t,e,u,o=n.length>>>0,i=Math.max(0,Math.min(p,o)),c=[],f=o-i+1,s=[],h=m();if(i)for(e=h.progress,t=function(n){s.push(n),--f||(r=t=w,h.reject(s))},r=function(n){c.push(n),--i||(r=t=w,h.resolve(c))},u=0;u<o;++u)u in n&&j(n[u],a,l,e);else h.resolve(c);return h.then(v,g,y);function l(n){t(n)}function a(n){r(n)}})}function i(n,r,t,e){return f(1,arguments),c(n,s).then(r,t,e)}function c(n,c){return j(n,function(n){var r,t,e,u=r=n.length>>>0,o=[],i=m();if(u)for(t=function(n,r){j(n,c).then(function(n){o[r]=n,--u||i.resolve(o)},i.reject)},e=0;e<r;e++)e in n?t(n[e],e):--u;else i.resolve(o);return i.promise})}function v(n,r){for(var t,e=0;t=n[e++];)t(r)}function f(n,r){for(var t,e=r.length;n<e;)if(null!=(t=r[--e])&&"function"!=typeof t)throw new Error("arg "+e+" must be a function")}function w(){}function s(n){return n}r.EMPTY_OBJECT=Object.freeze({}),j.defer=m,j.resolve=l,j.reject=function(n){return j(n,p)},j.join=function(){return c(arguments,s)},j.all=i,j.map=c,j.reduce=function(n,o){var r=e.call(arguments,1);return j(n,function(n){var u=n.length;return r[0]=function(n,t,e){return j(n,function(r){return j(t,function(n){return o(r,n,e,u)})})},t.apply(n,r)})},j.any=function(n,r,t,e){return o(n,1,function(n){return r?r(n[0]):n[0]},t,e)},j.some=o,j.chain=function(n,r,t){var e=2<arguments.length;return j(n,function(n){return r.resolve(n=e?t:n),n},function(n){return r.reject(n),p(n)},r.progress)},j.isPromise=u,a.prototype={always:function(n,r){return this.then(n,n,r)},otherwise:function(n){return this.then(h,n)},yield:function(n){return this.then(function(){return n})},spread:function(r){return this.then(function(n){return i(n,function(n){return r.apply(h,n)})})}},e=[].slice,t=[].reduce||function(n){var r,t=0,e=Object(this),u=e.length>>>0,o=arguments;if(o.length<=1)for(;;){if(t in e){r=e[t++];break}if(++t>=u)throw new TypeError}else r=o[1];for(;t<u;++t)t in e&&(r=n(r,e[t],t,e));return r},n.defaultValue=r,n.defined=function(n){return null!=n},n.when=j});
