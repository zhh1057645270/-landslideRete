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
define(["./Cartesian2-08065eec","./Check-be2d5acb","./when-ad3237a0","./EllipseGeometry-fd2389dd","./VertexFormat-fc4fc84a","./Math-5ca9b250","./GeometryOffsetAttribute-03006e80","./Transforms-1142ce48","./combine-1510933d","./RuntimeError-767bd866","./ComponentDatatype-a867ddaa","./WebGLConstants-1c8239cc","./EllipseGeometryLibrary-002b2f96","./GeometryAttribute-da891979","./GeometryAttributes-27dc652d","./GeometryInstance-42129c83","./GeometryPipeline-3334f964","./AttributeCompression-9fbb8447","./EncodedCartesian3-a785c24c","./IndexDatatype-9504f550","./IntersectionTests-75083888","./Plane-bb88dd7e"],function(r,e,o,n,a,t,i,s,l,d,m,c,u,p,y,_,h,G,x,f,g,E){"use strict";function v(e){var t=(e=o.defaultValue(e,o.defaultValue.EMPTY_OBJECT)).radius,e={center:e.center,semiMajorAxis:t,semiMinorAxis:t,ellipsoid:e.ellipsoid,height:e.height,extrudedHeight:e.extrudedHeight,granularity:e.granularity,vertexFormat:e.vertexFormat,stRotation:e.stRotation,shadowVolume:e.shadowVolume};this._ellipseGeometry=new n.EllipseGeometry(e),this._workerName="createCircleGeometry"}v.packedLength=n.EllipseGeometry.packedLength,v.pack=function(e,t,i){return n.EllipseGeometry.pack(e._ellipseGeometry,t,i)};var b=new n.EllipseGeometry({center:new r.Cartesian3,semiMajorAxis:1,semiMinorAxis:1}),w={center:new r.Cartesian3,radius:void 0,ellipsoid:r.Ellipsoid.clone(r.Ellipsoid.UNIT_SPHERE),height:void 0,extrudedHeight:void 0,granularity:void 0,vertexFormat:new a.VertexFormat,stRotation:void 0,semiMajorAxis:void 0,semiMinorAxis:void 0,shadowVolume:void 0};return v.unpack=function(e,t,i){t=n.EllipseGeometry.unpack(e,t,b);return w.center=r.Cartesian3.clone(t._center,w.center),w.ellipsoid=r.Ellipsoid.clone(t._ellipsoid,w.ellipsoid),w.height=t._height,w.extrudedHeight=t._extrudedHeight,w.granularity=t._granularity,w.vertexFormat=a.VertexFormat.clone(t._vertexFormat,w.vertexFormat),w.stRotation=t._stRotation,w.shadowVolume=t._shadowVolume,o.defined(i)?(w.semiMajorAxis=t._semiMajorAxis,w.semiMinorAxis=t._semiMinorAxis,i._ellipseGeometry=new n.EllipseGeometry(w),i):(w.radius=t._semiMajorAxis,new v(w))},v.createGeometry=function(e){return n.EllipseGeometry.createGeometry(e._ellipseGeometry)},v.createShadowVolume=function(e,t,i){var r=e._ellipseGeometry._granularity,o=e._ellipseGeometry._ellipsoid,t=t(r,o),i=i(r,o);return new v({center:e._ellipseGeometry._center,radius:e._ellipseGeometry._semiMajorAxis,ellipsoid:o,stRotation:e._ellipseGeometry._stRotation,granularity:r,extrudedHeight:t,height:i,vertexFormat:a.VertexFormat.POSITION_ONLY,shadowVolume:!0})},Object.defineProperties(v.prototype,{rectangle:{get:function(){return this._ellipseGeometry.rectangle}},textureCoordinateRotationPoints:{get:function(){return this._ellipseGeometry.textureCoordinateRotationPoints}}}),function(e,t){return(e=o.defined(t)?v.unpack(e,t):e)._ellipseGeometry._center=r.Cartesian3.clone(e._ellipseGeometry._center),e._ellipseGeometry._ellipsoid=r.Ellipsoid.clone(e._ellipseGeometry._ellipsoid),v.createGeometry(e)}});
