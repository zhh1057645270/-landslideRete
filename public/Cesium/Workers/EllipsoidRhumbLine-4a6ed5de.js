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
define(["exports","./Cartesian2-08065eec","./Check-be2d5acb","./when-ad3237a0","./Math-5ca9b250"],function(t,M,i,c,g){"use strict";function l(t,i,a){if(0===t)return i*a;var e=t*t,n=e*e,s=n*e,h=s*e,u=h*e,t=u*e,a=a;return i*((1-e/4-3*n/64-5*s/256-175*h/16384-441*u/65536-4851*t/1048576)*a-(3*e/8+3*n/32+45*s/1024+105*h/4096+2205*u/131072+6237*t/524288)*Math.sin(2*a)+(15*n/256+45*s/1024+525*h/16384+1575*u/65536+155925*t/8388608)*Math.sin(4*a)-(35*s/3072+175*h/12288+3675*u/262144+13475*t/1048576)*Math.sin(6*a)+(315*h/131072+2205*u/524288+43659*t/8388608)*Math.sin(8*a)-(693*u/1310720+6237*t/5242880)*Math.sin(10*a)+1001*t/8388608*Math.sin(12*a))}function d(t,i){if(0===t)return Math.log(Math.tan(.5*(g.CesiumMath.PI_OVER_TWO+i)));var a=t*Math.sin(i);return Math.log(Math.tan(.5*(g.CesiumMath.PI_OVER_TWO+i)))-t/2*Math.log((1+a)/(1-a))}var r=new M.Cartesian3,m=new M.Cartesian3;function e(t,i,a,e){M.Cartesian3.normalize(e.cartographicToCartesian(i,m),r),M.Cartesian3.normalize(e.cartographicToCartesian(a,m),m);var n,s,h=e.maximumRadius,u=e.minimumRadius,o=h*h;t._ellipticitySquared=(o-u*u)/o,t._ellipticity=Math.sqrt(t._ellipticitySquared),t._start=M.Cartographic.clone(i,t._start),t._start.height=0,t._end=M.Cartographic.clone(a,t._end),t._end.height=0,t._heading=(n=t,s=i.longitude,h=i.latitude,u=a.longitude,o=a.latitude,h=d(n._ellipticity,h),o=d(n._ellipticity,o),Math.atan2(g.CesiumMath.negativePiToPi(u-s),o-h)),t._distance=(u=t,s=e.maximumRadius,o=e.minimumRadius,h=i.longitude,t=i.latitude,e=a.longitude,i=a.latitude,a=u._heading,e-=h,h=0,h=g.CesiumMath.equalsEpsilon(Math.abs(a),g.CesiumMath.PI_OVER_TWO,g.CesiumMath.EPSILON8)?s===o?s*Math.cos(t)*g.CesiumMath.negativePiToPi(e):(o=Math.sin(t),s*Math.cos(t)*g.CesiumMath.negativePiToPi(e)/Math.sqrt(1-u._ellipticitySquared*o*o)):(t=l(u._ellipticity,s,t),(l(u._ellipticity,s,i)-t)/Math.cos(a)),Math.abs(h))}function o(t,i,a,e,n,s){if(0===a)return M.Cartographic.clone(t,s);var h,u,o,r=n*n;return o=Math.abs(g.CesiumMath.PI_OVER_TWO-Math.abs(i))>g.CesiumMath.EPSILON8?(h=function(t,i,a){var e=t/a;if(0===i)return e;var n=e*e,s=n*e,h=s*e,u=i*i,o=u*u,r=o*u,l=r*u,d=l*u,M=d*u,c=Math.sin(2*e),g=Math.cos(2*e),m=Math.sin(4*e),_=Math.cos(4*e),p=Math.sin(6*e),C=Math.cos(6*e),t=Math.sin(8*e),a=Math.cos(8*e),i=Math.sin(10*e);return e+e*u/4+7*e*o/64+15*e*r/256+579*e*l/16384+1515*e*d/65536+16837*e*M/1048576+(3*e*o/16+45*e*r/256-e*(32*n-561)*l/4096-e*(232*n-1677)*d/16384+e*(399985-90560*n+512*h)*M/5242880)*g+(21*e*r/256+483*e*l/4096-e*(224*n-1969)*d/16384-e*(33152*n-112599)*M/1048576)*_+(151*e*l/4096+4681*e*d/65536+1479*e*M/16384-453*s*M/32768)*C+(1097*e*d/65536+42783*e*M/1048576)*a+8011*e*M/1048576*Math.cos(10*e)+(3*u/8+3*o/16+213*r/2048-3*n*r/64+255*l/4096-33*n*l/512+20861*d/524288-33*n*d/512+h*d/1024+28273*M/1048576-471*n*M/8192+9*h*M/4096)*c+(21*o/256+21*r/256+533*l/8192-21*n*l/512+197*d/4096-315*n*d/4096+584039*M/16777216-12517*n*M/131072+7*h*M/2048)*m+(151*r/6144+151*l/4096+5019*d/131072-453*n*d/16384+26965*M/786432-8607*n*M/131072)*p+(1097*l/131072+1097*d/65536+225797*M/10485760-1097*n*M/65536)*t+(8011*d/2621440+8011*M/1048576)*i+293393*M/251658240*Math.sin(12*e)}(l(n,e,t.latitude)+a*Math.cos(i),n,e),o=d(n,t.latitude),u=d(n,h),o=Math.tan(i)*(u-o),g.CesiumMath.negativePiToPi(t.longitude+o)):(h=t.latitude,o=a/(0===n?e*Math.cos(t.latitude):(n=Math.sin(t.latitude),e*Math.cos(t.latitude)/Math.sqrt(1-r*n*n))),0<i?g.CesiumMath.negativePiToPi(t.longitude+o):g.CesiumMath.negativePiToPi(t.longitude-o)),c.defined(s)?(s.longitude=o,s.latitude=h,s.height=0,s):new M.Cartographic(o,h,0)}function _(t,i,a){a=c.defaultValue(a,M.Ellipsoid.WGS84);this._ellipsoid=a,this._start=new M.Cartographic,this._end=new M.Cartographic,this._heading=void 0,this._distance=void 0,this._ellipticity=void 0,this._ellipticitySquared=void 0,c.defined(t)&&c.defined(i)&&e(this,t,i,a)}Object.defineProperties(_.prototype,{ellipsoid:{get:function(){return this._ellipsoid}},surfaceDistance:{get:function(){return this._distance}},start:{get:function(){return this._start}},end:{get:function(){return this._end}},heading:{get:function(){return this._heading}}}),_.fromStartHeadingDistance=function(t,i,a,e,n){var s=c.defaultValue(e,M.Ellipsoid.WGS84),h=s.maximumRadius,u=s.minimumRadius,h=h*h,h=Math.sqrt((h-u*u)/h),h=o(t,i=g.CesiumMath.negativePiToPi(i),a,s.maximumRadius,h);return!c.defined(n)||c.defined(e)&&!e.equals(n.ellipsoid)?new _(t,h,s):(n.setEndPoints(t,h),n)},_.prototype.setEndPoints=function(t,i){e(this,t,i,this._ellipsoid)},_.prototype.interpolateUsingFraction=function(t,i){return this.interpolateUsingSurfaceDistance(t*this._distance,i)},_.prototype.interpolateUsingSurfaceDistance=function(t,i){return o(this._start,this._heading,t,this._ellipsoid.maximumRadius,this._ellipticity,i)},_.prototype.findIntersectionWithLongitude=function(t,i){var a=this._ellipticity,e=this._heading,n=Math.abs(e),s=this._start;if(t=g.CesiumMath.negativePiToPi(t),g.CesiumMath.equalsEpsilon(Math.abs(t),Math.PI,g.CesiumMath.EPSILON14)&&(t=g.CesiumMath.sign(s.longitude)*Math.PI),c.defined(i)||(i=new M.Cartographic),Math.abs(g.CesiumMath.PI_OVER_TWO-n)<=g.CesiumMath.EPSILON8)return i.longitude=t,i.latitude=s.latitude,i.height=0,i;if(g.CesiumMath.equalsEpsilon(Math.abs(g.CesiumMath.PI_OVER_TWO-n),g.CesiumMath.PI_OVER_TWO,g.CesiumMath.EPSILON8))return g.CesiumMath.equalsEpsilon(t,s.longitude,g.CesiumMath.EPSILON12)?void 0:(i.longitude=t,i.latitude=g.CesiumMath.PI_OVER_TWO*g.CesiumMath.sign(g.CesiumMath.PI_OVER_TWO-e),i.height=0,i);var h=s.latitude,n=a*Math.sin(h),u=Math.tan(.5*(g.CesiumMath.PI_OVER_TWO+h))*Math.exp((t-s.longitude)/Math.tan(e)),o=(1+n)/(1-n),r=s.latitude;do{var l=r,d=a*Math.sin(l),r=2*Math.atan(u*Math.pow((1+d)/(1-d)/o,a/2))-g.CesiumMath.PI_OVER_TWO}while(!g.CesiumMath.equalsEpsilon(r,l,g.CesiumMath.EPSILON12));return i.longitude=t,i.latitude=r,i.height=0,i},_.prototype.findIntersectionWithLatitude=function(t,i){var a=this._ellipticity,e=this._heading,n=this._start;if(!g.CesiumMath.equalsEpsilon(Math.abs(e),g.CesiumMath.PI_OVER_TWO,g.CesiumMath.EPSILON8)){var s=d(a,n.latitude),a=d(a,t),s=Math.tan(e)*(a-s),s=g.CesiumMath.negativePiToPi(n.longitude+s);return c.defined(i)?(i.longitude=s,i.latitude=t,i.height=0,i):new M.Cartographic(s,t,0)}},t.EllipsoidRhumbLine=_});
