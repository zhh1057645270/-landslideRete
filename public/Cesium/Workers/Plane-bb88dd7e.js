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
define(["exports","./Cartesian2-08065eec","./Transforms-1142ce48","./Check-be2d5acb","./when-ad3237a0","./Math-5ca9b250"],function(n,r,i,e,s,a){"use strict";function o(n,e){this.normal=r.Cartesian3.clone(n),this.distance=e}o.fromPointNormal=function(n,e,a){n=-r.Cartesian3.dot(e,n);return s.defined(a)?(r.Cartesian3.clone(e,a.normal),a.distance=n,a):new o(e,n)};var t=new r.Cartesian3;o.fromCartesian4=function(n,e){var a=r.Cartesian3.fromCartesian4(n,t),n=n.w;return s.defined(e)?(r.Cartesian3.clone(a,e.normal),e.distance=n,e):new o(a,n)},o.getPointDistance=function(n,e){return r.Cartesian3.dot(n.normal,e)+n.distance};var c=new r.Cartesian3;o.projectPointOntoPlane=function(n,e,a){s.defined(a)||(a=new r.Cartesian3);var t=o.getPointDistance(n,e),t=r.Cartesian3.multiplyByScalar(n.normal,t,c);return r.Cartesian3.subtract(e,t,a)};var l=new i.Matrix4,C=new i.Cartesian4,d=new r.Cartesian3;o.transform=function(n,e,a){var t=n.normal,n=n.distance,e=i.Matrix4.inverseTranspose(e,l),n=i.Cartesian4.fromElements(t.x,t.y,t.z,n,C),n=i.Matrix4.multiplyByVector(e,n,n),e=r.Cartesian3.fromCartesian4(n,d);return n=i.Cartesian4.divideByScalar(n,r.Cartesian3.magnitude(e),n),o.fromCartesian4(n,a)},o.clone=function(n,e){return s.defined(e)?(r.Cartesian3.clone(n.normal,e.normal),e.distance=n.distance,e):new o(n.normal,n.distance)},o.equals=function(n,e){return n.distance===e.distance&&r.Cartesian3.equals(n.normal,e.normal)},o.ORIGIN_XY_PLANE=Object.freeze(new o(r.Cartesian3.UNIT_Z,0)),o.ORIGIN_YZ_PLANE=Object.freeze(new o(r.Cartesian3.UNIT_X,0)),o.ORIGIN_ZX_PLANE=Object.freeze(new o(r.Cartesian3.UNIT_Y,0)),n.Plane=o});
