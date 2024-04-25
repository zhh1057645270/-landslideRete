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
define(["./when-ad3237a0","./Transforms-1142ce48","./Cartesian2-08065eec","./Check-be2d5acb","./ComponentDatatype-a867ddaa","./GeometryAttribute-da891979","./GeometryAttributes-27dc652d","./VertexFormat-fc4fc84a","./Math-5ca9b250","./combine-1510933d","./RuntimeError-767bd866","./WebGLConstants-1c8239cc"],function(a,o,m,e,i,u,c,n,t,r,p,y){"use strict";function s(e){e=a.defaultValue(e,a.defaultValue.EMPTY_OBJECT);e=a.defaultValue(e.vertexFormat,n.VertexFormat.DEFAULT);this._vertexFormat=e,this._workerName="createPlaneGeometry"}s.packedLength=n.VertexFormat.packedLength,s.pack=function(e,t,r){return r=a.defaultValue(r,0),n.VertexFormat.pack(e._vertexFormat,t,r),t};var A=new n.VertexFormat,d={vertexFormat:A};s.unpack=function(e,t,r){t=a.defaultValue(t,0);t=n.VertexFormat.unpack(e,t,A);return a.defined(r)?(r._vertexFormat=n.VertexFormat.clone(t,r._vertexFormat),r):new s(d)};var l=new m.Cartesian3(-.5,-.5,0),F=new m.Cartesian3(.5,.5,0);return s.createGeometry=function(e){var t,r,a=e._vertexFormat,n=new c.GeometryAttributes;return a.position&&((e=new Float64Array(12))[0]=l.x,e[1]=l.y,e[2]=0,e[3]=F.x,e[4]=l.y,e[5]=0,e[6]=F.x,e[7]=F.y,e[8]=0,e[9]=l.x,e[10]=F.y,e[11]=0,n.position=new u.GeometryAttribute({componentDatatype:i.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:e}),a.normal&&((e=new Float32Array(12))[0]=0,e[1]=0,e[2]=1,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=1,e[9]=0,e[10]=0,e[11]=1,n.normal=new u.GeometryAttribute({componentDatatype:i.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:e})),a.st&&((t=new Float32Array(8))[0]=0,t[1]=0,t[2]=1,t[3]=0,t[4]=1,t[5]=1,t[6]=0,t[7]=1,n.st=new u.GeometryAttribute({componentDatatype:i.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:t})),a.tangent&&((t=new Float32Array(12))[0]=1,t[1]=0,t[2]=0,t[3]=1,t[4]=0,t[5]=0,t[6]=1,t[7]=0,t[8]=0,t[9]=1,t[10]=0,t[11]=0,n.tangent=new u.GeometryAttribute({componentDatatype:i.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:t})),a.bitangent&&((r=new Float32Array(12))[0]=0,r[1]=1,r[2]=0,r[3]=0,r[4]=1,r[5]=0,r[6]=0,r[7]=1,r[8]=0,r[9]=0,r[10]=1,r[11]=0,n.bitangent=new u.GeometryAttribute({componentDatatype:i.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:r})),(r=new Uint16Array(6))[0]=0,r[1]=1,r[2]=2,r[3]=0,r[4]=2,r[5]=3),new u.Geometry({attributes:n,indices:r,primitiveType:u.PrimitiveType.TRIANGLES,boundingSphere:new o.BoundingSphere(m.Cartesian3.ZERO,Math.sqrt(2))})},function(e,t){return a.defined(t)&&(e=s.unpack(e,t)),s.createGeometry(e)}});
