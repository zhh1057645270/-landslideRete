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
define(["./when-ad3237a0","./Transforms-1142ce48","./Cartesian2-08065eec","./Check-be2d5acb","./ComponentDatatype-a867ddaa","./FrustumGeometry-ad891132","./GeometryAttribute-da891979","./GeometryAttributes-27dc652d","./Math-5ca9b250","./combine-1510933d","./RuntimeError-767bd866","./WebGLConstants-1c8239cc","./Plane-bb88dd7e","./VertexFormat-fc4fc84a"],function(o,m,c,e,d,h,f,g,t,r,n,a,i,u){"use strict";function s(e){var t,r,n=e.frustum,a=e.orientation,i=e.origin,e=o.defaultValue(e._drawNearPlane,!0);n instanceof h.PerspectiveFrustum?(t=0,r=h.PerspectiveFrustum.packedLength):n instanceof h.OrthographicFrustum&&(t=1,r=h.OrthographicFrustum.packedLength),this._frustumType=t,this._frustum=n.clone(),this._origin=c.Cartesian3.clone(i),this._orientation=m.Quaternion.clone(a),this._drawNearPlane=e,this._workerName="createFrustumOutlineGeometry",this.packedLength=2+r+c.Cartesian3.packedLength+m.Quaternion.packedLength}s.pack=function(e,t,r){r=o.defaultValue(r,0);var n=e._frustumType,a=e._frustum;return 0===(t[r++]=n)?(h.PerspectiveFrustum.pack(a,t,r),r+=h.PerspectiveFrustum.packedLength):(h.OrthographicFrustum.pack(a,t,r),r+=h.OrthographicFrustum.packedLength),c.Cartesian3.pack(e._origin,t,r),r+=c.Cartesian3.packedLength,m.Quaternion.pack(e._orientation,t,r),t[r+=m.Quaternion.packedLength]=e._drawNearPlane?1:0,t};var p=new h.PerspectiveFrustum,_=new h.OrthographicFrustum,k=new m.Quaternion,l=new c.Cartesian3;return s.unpack=function(e,t,r){t=o.defaultValue(t,0);var n,a=e[t++];0===a?(n=h.PerspectiveFrustum.unpack(e,t,p),t+=h.PerspectiveFrustum.packedLength):(n=h.OrthographicFrustum.unpack(e,t,_),t+=h.OrthographicFrustum.packedLength);var i=c.Cartesian3.unpack(e,t,l);t+=c.Cartesian3.packedLength;var u=m.Quaternion.unpack(e,t,k),e=1===e[t+=m.Quaternion.packedLength];if(!o.defined(r))return new s({frustum:n,origin:i,orientation:u,_drawNearPlane:e});t=a===r._frustumType?r._frustum:void 0;return r._frustum=n.clone(t),r._frustumType=a,r._origin=c.Cartesian3.clone(i,r._origin),r._orientation=m.Quaternion.clone(u,r._orientation),r._drawNearPlane=e,r},s.createGeometry=function(e){var t=e._frustumType,r=e._frustum,n=e._origin,a=e._orientation,i=e._drawNearPlane,e=new Float64Array(24);h.FrustumGeometry._computeNearFarPlanes(n,a,t,r,e);for(var u,o,r=new g.GeometryAttributes({position:new f.GeometryAttribute({componentDatatype:d.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:e})}),c=i?2:1,s=new Uint16Array(8*(1+c)),p=i?0:1;p<2;++p)s[u=i?8*p:0]=o=4*p,s[u+1]=o+1,s[u+2]=o+1,s[u+3]=o+2,s[u+4]=o+2,s[u+5]=o+3,s[u+6]=o+3,s[u+7]=o;for(p=0;p<2;++p)s[u=8*(c+p)]=o=4*p,s[u+1]=o+4,s[u+2]=o+1,s[u+3]=o+5,s[u+4]=o+2,s[u+5]=o+6,s[u+6]=o+3,s[u+7]=o+7;return new f.Geometry({attributes:r,indices:s,primitiveType:f.PrimitiveType.LINES,boundingSphere:m.BoundingSphere.fromVertices(e)})},function(e,t){return o.defined(t)&&(e=s.unpack(e,t)),s.createGeometry(e)}});
