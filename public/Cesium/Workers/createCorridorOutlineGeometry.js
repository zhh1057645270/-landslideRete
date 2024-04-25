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
define(["./GeometryOffsetAttribute-03006e80","./arrayRemoveDuplicates-707c233c","./Transforms-1142ce48","./Cartesian2-08065eec","./Check-be2d5acb","./ComponentDatatype-a867ddaa","./PolylineVolumeGeometryLibrary-0e3fa363","./CorridorGeometryLibrary-0fba23cb","./when-ad3237a0","./GeometryAttribute-da891979","./GeometryAttributes-27dc652d","./IndexDatatype-9504f550","./Math-5ca9b250","./PolygonPipeline-ac773b7c","./combine-1510933d","./RuntimeError-767bd866","./WebGLConstants-1c8239cc","./EllipsoidTangentPlane-f8b1fc8b","./AxisAlignedBoundingBox-718a9087","./IntersectionTests-75083888","./Plane-bb88dd7e","./PolylinePipeline-05927ee2","./EllipsoidGeodesic-dc284f08","./EllipsoidRhumbLine-4a6ed5de"],function(A,u,p,B,e,M,R,U,F,Y,q,W,h,v,t,i,r,o,a,n,s,l,d,f){"use strict";var J=new B.Cartesian3,j=new B.Cartesian3,z=new B.Cartesian3;function _(e,t){var i,r=[],o=e.positions,a=e.corners,n=e.endPositions,s=new q.GeometryAttributes,l=0,d=0,u=0;for(L=0;L<o.length;L+=2)l+=i=o[L].length-3,u+=i/3*4,d+=o[L+1].length-3;for(l+=3,d+=3,L=0;L<a.length;L++){var p=a[L],h=a[L].leftPositions;F.defined(h)?l+=i=h.length:d+=i=a[L].rightPositions.length,u+=i/3*2}var f,y=F.defined(n);y&&(l+=f=n[0].length-3,d+=f,u+=4*(f/=3));var c,g,b,m,e=l+d,A=new Float64Array(e),v=0,_=e-1,E=f/2,C=W.IndexDatatype.createTypedArray(e/3,u+4),G=0;if(C[G++]=v/3,C[G++]=(_-2)/3,y){r.push(v/3);for(var T=J,P=j,w=n[0],L=0;L<E;L++)T=B.Cartesian3.fromArray(w,3*(E-1-L),T),P=B.Cartesian3.fromArray(w,3*(E+L),P),U.CorridorGeometryLibrary.addAttribute(A,P,v),U.CorridorGeometryLibrary.addAttribute(A,T,void 0,_),m=(g=v/3)+1,b=(c=(_-2)/3)-1,C[G++]=c,C[G++]=b,C[G++]=g,C[G++]=m,v+=3,_-=3}var D=0,k=o[D++],x=o[D++];for(A.set(k,v),A.set(x,_-x.length+1),i=x.length-3,r.push(v/3,(_-2)/3),L=0;L<i;L+=3)m=(g=v/3)+1,b=(c=(_-2)/3)-1,C[G++]=c,C[G++]=b,C[G++]=g,C[G++]=m,v+=3,_-=3;for(L=0;L<a.length;L++){var N,O,V=(p=a[L]).leftPositions,H=p.rightPositions,I=z;if(F.defined(V)){for(_-=3,O=b,r.push(m),N=0;N<V.length/3;N++)I=B.Cartesian3.fromArray(V,3*N,I),C[G++]=O-N-1,C[G++]=O-N,U.CorridorGeometryLibrary.addAttribute(A,I,void 0,_),_-=3;r.push(O-Math.floor(V.length/6)),t===R.CornerType.BEVELED&&r.push((_-2)/3+1),v+=3}else{for(v+=3,O=m,r.push(b),N=0;N<H.length/3;N++)I=B.Cartesian3.fromArray(H,3*N,I),C[G++]=O+N,C[G++]=O+N+1,U.CorridorGeometryLibrary.addAttribute(A,I,v),v+=3;r.push(O+Math.floor(H.length/6)),t===R.CornerType.BEVELED&&r.push(v/3-1),_-=3}for(k=o[D++],x=o[D++],k.splice(0,3),x.splice(x.length-3,3),A.set(k,v),A.set(x,_-x.length+1),i=x.length-3,N=0;N<x.length;N+=3)g=(m=v/3)-1,C[G++]=c=(b=(_-2)/3)+1,C[G++]=b,C[G++]=g,C[G++]=m,v+=3,_-=3;v-=3,_+=3,r.push(v/3,(_-2)/3)}if(y){v+=3,_-=3,T=J,P=j;var S=n[1];for(L=0;L<E;L++)T=B.Cartesian3.fromArray(S,3*(f-L-1),T),P=B.Cartesian3.fromArray(S,3*L,P),U.CorridorGeometryLibrary.addAttribute(A,T,void 0,_),U.CorridorGeometryLibrary.addAttribute(A,P,v),g=(m=v/3)-1,C[G++]=c=(b=(_-2)/3)+1,C[G++]=b,C[G++]=g,C[G++]=m,v+=3,_-=3;r.push(v/3)}else r.push(v/3,(_-2)/3);return C[G++]=v/3,C[G++]=(_-2)/3,s.position=new Y.GeometryAttribute({componentDatatype:M.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:A}),{attributes:s,indices:C,wallIndices:r}}function y(e){var t=(e=F.defaultValue(e,F.defaultValue.EMPTY_OBJECT)).positions,i=e.width,r=F.defaultValue(e.height,0),o=F.defaultValue(e.extrudedHeight,r);this._positions=t,this._ellipsoid=B.Ellipsoid.clone(F.defaultValue(e.ellipsoid,B.Ellipsoid.WGS84)),this._width=i,this._height=Math.max(r,o),this._extrudedHeight=Math.min(r,o),this._cornerType=F.defaultValue(e.cornerType,R.CornerType.ROUNDED),this._granularity=F.defaultValue(e.granularity,h.CesiumMath.RADIANS_PER_DEGREE),this._offsetAttribute=e.offsetAttribute,this._workerName="createCorridorOutlineGeometry",this.packedLength=1+t.length*B.Cartesian3.packedLength+B.Ellipsoid.packedLength+6}y.pack=function(e,t,i){i=F.defaultValue(i,0);var r=e._positions,o=r.length;t[i++]=o;for(var a=0;a<o;++a,i+=B.Cartesian3.packedLength)B.Cartesian3.pack(r[a],t,i);return B.Ellipsoid.pack(e._ellipsoid,t,i),i+=B.Ellipsoid.packedLength,t[i++]=e._width,t[i++]=e._height,t[i++]=e._extrudedHeight,t[i++]=e._cornerType,t[i++]=e._granularity,t[i]=F.defaultValue(e._offsetAttribute,-1),t};var c=B.Ellipsoid.clone(B.Ellipsoid.UNIT_SPHERE),g={positions:void 0,ellipsoid:c,width:void 0,height:void 0,extrudedHeight:void 0,cornerType:void 0,granularity:void 0,offsetAttribute:void 0};return y.unpack=function(e,t,i){t=F.defaultValue(t,0);for(var r=e[t++],o=new Array(r),a=0;a<r;++a,t+=B.Cartesian3.packedLength)o[a]=B.Cartesian3.unpack(e,t);var n=B.Ellipsoid.unpack(e,t,c);t+=B.Ellipsoid.packedLength;var s=e[t++],l=e[t++],d=e[t++],u=e[t++],p=e[t++],h=e[t];return F.defined(i)?(i._positions=o,i._ellipsoid=B.Ellipsoid.clone(n,i._ellipsoid),i._width=s,i._height=l,i._extrudedHeight=d,i._cornerType=u,i._granularity=p,i._offsetAttribute=-1===h?void 0:h,i):(g.positions=o,g.width=s,g.height=l,g.extrudedHeight=d,g.cornerType=u,g.granularity=p,g.offsetAttribute=-1===h?void 0:h,new y(g))},y.createGeometry=function(e){var t=e._positions,i=e._width,r=e._ellipsoid,t=function(e,t){for(var i=0;i<e.length;i++)e[i]=t.scaleToGeodeticSurface(e[i],e[i]);return e}(t,r),o=u.arrayRemoveDuplicates(t,B.Cartesian3.equalsEpsilon);if(!(o.length<2||i<=0)){var a,n=e._height,s=e._extrudedHeight,t=!h.CesiumMath.equalsEpsilon(n,s,0,h.CesiumMath.EPSILON2),i={ellipsoid:r,positions:o,width:i,cornerType:e._cornerType,granularity:e._granularity,saveAttributes:!1};t?(i.height=n,i.extrudedHeight=s,i.offsetAttribute=e._offsetAttribute,a=function(e){var t=e.ellipsoid,i=(l=_(U.CorridorGeometryLibrary.computePositions(e),e.cornerType)).wallIndices,r=e.height,o=e.extrudedHeight,a=l.attributes,n=l.indices,s=(d=a.position.values).length;(u=new Float64Array(s)).set(d);var l=new Float64Array(2*s),d=v.PolygonPipeline.scaleToGeodeticHeight(d,r,t),u=v.PolygonPipeline.scaleToGeodeticHeight(u,o,t);l.set(d),l.set(u,s),a.position.values=l,s/=3,F.defined(e.offsetAttribute)&&(u=new Uint8Array(2*s),u=e.offsetAttribute===A.GeometryOffsetAttribute.TOP?A.arrayFill(u,1,0,s):(e=e.offsetAttribute===A.GeometryOffsetAttribute.NONE?0:1,A.arrayFill(u,e)),a.applyOffset=new Y.GeometryAttribute({componentDatatype:M.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:u}));var p=n.length,h=W.IndexDatatype.createTypedArray(l.length/3,2*(p+i.length));h.set(n);for(var f,y,c=p,g=0;g<p;g+=2){var b=n[g],m=n[g+1];h[c++]=b+s,h[c++]=m+s}for(g=0;g<i.length;g++)y=(f=i[g])+s,h[c++]=f,h[c++]=y;return{attributes:a,indices:h}}(i)):((a=_(U.CorridorGeometryLibrary.computePositions(i),i.cornerType)).attributes.position.values=v.PolygonPipeline.scaleToGeodeticHeight(a.attributes.position.values,n,r),F.defined(e._offsetAttribute)&&(l=a.attributes.position.values.length,d=new Uint8Array(l/3),l=e._offsetAttribute===A.GeometryOffsetAttribute.NONE?0:1,A.arrayFill(d,l),a.attributes.applyOffset=new Y.GeometryAttribute({componentDatatype:M.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:d})));var l=a.attributes,d=p.BoundingSphere.fromVertices(l.position.values,void 0,3);return new Y.Geometry({attributes:l,indices:a.indices,primitiveType:Y.PrimitiveType.LINES,boundingSphere:d,offsetAttribute:e._offsetAttribute})}},function(e,t){return(e=F.defined(t)?y.unpack(e,t):e)._ellipsoid=B.Ellipsoid.clone(e._ellipsoid),y.createGeometry(e)}});
