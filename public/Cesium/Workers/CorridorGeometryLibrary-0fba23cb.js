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
define([
	'exports',
	'./Cartesian2-08065eec',
	'./PolylineVolumeGeometryLibrary-0e3fa363',
	'./when-ad3237a0',
	'./Math-5ca9b250',
	'./Transforms-1142ce48',
	'./PolylinePipeline-05927ee2',
], function (a, O, R, s, V, u, Q) {
	'use strict';
	var e = {},
		U = new O.Cartesian3(),
		d = new O.Cartesian3(),
		p = new O.Cartesian3(),
		m = new O.Cartesian3(),
		G = [new O.Cartesian3(), new O.Cartesian3()],
		I = new O.Cartesian3(),
		q = new O.Cartesian3(),
		j = new O.Cartesian3(),
		k = new O.Cartesian3(),
		F = new O.Cartesian3(),
		H = new O.Cartesian3(),
		J = new O.Cartesian3(),
		K = new O.Cartesian3(),
		W = new O.Cartesian3(),
		X = new O.Cartesian3(),
		c = new u.Quaternion(),
		g = new u.Matrix3();
	function Y(a, e, r, n, t) {
		var i = O.Cartesian3.angleBetween(O.Cartesian3.subtract(e, a, U), O.Cartesian3.subtract(r, a, d)),
			s = n === R.CornerType.BEVELED ? 1 : Math.ceil(i / V.CesiumMath.toRadians(5)) + 1,
			n = 3 * s,
			o = new Array(n);
		(o[n - 3] = r.x), (o[n - 2] = r.y), (o[n - 1] = r.z);
		var C = t
				? u.Matrix3.fromQuaternion(u.Quaternion.fromAxisAngle(O.Cartesian3.negate(a, U), i / s, c), g)
				: u.Matrix3.fromQuaternion(u.Quaternion.fromAxisAngle(a, i / s, c), g),
			l = 0;
		e = O.Cartesian3.clone(e, U);
		for (var y = 0; y < s; y++) (e = u.Matrix3.multiplyByVector(C, e, e)), (o[l++] = e.x), (o[l++] = e.y), (o[l++] = e.z);
		return o;
	}
	function Z(a, e, r, n) {
		var t = U;
		return [(t = (n || (e = O.Cartesian3.negate(e, e)), O.Cartesian3.add(a, e, t))).x, t.y, t.z, r.x, r.y, r.z];
	}
	function $(a, e, r, n) {
		for (
			var t = new Array(a.length),
				i = new Array(a.length),
				s = O.Cartesian3.multiplyByScalar(e, r, U),
				o = O.Cartesian3.negate(s, d),
				C = 0,
				l = a.length - 1,
				y = 0;
			y < a.length;
			y += 3
		) {
			var u = O.Cartesian3.fromArray(a, y, p),
				c = O.Cartesian3.add(u, o, m);
			(t[C++] = c.x), (t[C++] = c.y), (t[C++] = c.z);
			u = O.Cartesian3.add(u, s, m);
			(i[l--] = u.z), (i[l--] = u.y), (i[l--] = u.x);
		}
		return n.push(t, i), n;
	}
	e.addAttribute = function (a, e, r, n) {
		var t = e.x,
			i = e.y,
			e = e.z;
		s.defined(r) && ((a[r] = t), (a[r + 1] = i), (a[r + 2] = e)), s.defined(n) && ((a[n] = e), (a[n - 1] = i), (a[n - 2] = t));
	};
	var _ = new O.Cartesian3(),
		aa = new O.Cartesian3();
	(e.computePositions = function (a) {
		var e = a.granularity,
			r = a.positions,
			n = a.ellipsoid,
			t = a.width / 2,
			i = a.cornerType,
			s = a.saveAttributes,
			o = I,
			C = q,
			l = j,
			y = k,
			u = F,
			c = H,
			d = J,
			p = K,
			m = W,
			g = X,
			h = [],
			f = s ? [] : void 0,
			w = s ? [] : void 0,
			z = r[0],
			x = r[1],
			C = O.Cartesian3.normalize(O.Cartesian3.subtract(x, z, C), C),
			o = n.geodeticSurfaceNormal(z, o),
			y = O.Cartesian3.normalize(O.Cartesian3.cross(o, C, y), y);
		s && (f.push(y.x, y.y, y.z), w.push(o.x, o.y, o.z));
		for (var P, A, B, v, E, S, b, d = O.Cartesian3.clone(z, d), z = x, l = O.Cartesian3.negate(C, l), D = [], M = r.length, T = 1; T < M - 1; T++) {
			(o = n.geodeticSurfaceNormal(z, o)),
				(x = r[T + 1]),
				(C = O.Cartesian3.normalize(O.Cartesian3.subtract(x, z, C), C)),
				(u = O.Cartesian3.normalize(O.Cartesian3.add(C, l, u), u));
			var N = O.Cartesian3.multiplyByScalar(o, O.Cartesian3.dot(C, o), _);
			O.Cartesian3.subtract(C, N, N), O.Cartesian3.normalize(N, N);
			var L = O.Cartesian3.multiplyByScalar(o, O.Cartesian3.dot(l, o), aa);
			O.Cartesian3.subtract(l, L, L),
				O.Cartesian3.normalize(L, L),
				V.CesiumMath.equalsEpsilon(Math.abs(O.Cartesian3.dot(N, L)), 1, V.CesiumMath.EPSILON7) ||
					((u = O.Cartesian3.cross(u, o, u)),
					(u = O.Cartesian3.cross(o, u, u)),
					(u = O.Cartesian3.normalize(u, u)),
					(N = t / Math.max(0.25, O.Cartesian3.magnitude(O.Cartesian3.cross(u, l, U)))),
					(L = R.PolylineVolumeGeometryLibrary.angleIsGreaterThanPi(C, l, z, n)),
					(u = O.Cartesian3.multiplyByScalar(u, N, u)),
					L
						? ((p = O.Cartesian3.add(z, u, p)),
						  (g = O.Cartesian3.add(p, O.Cartesian3.multiplyByScalar(y, t, g), g)),
						  (m = O.Cartesian3.add(p, O.Cartesian3.multiplyByScalar(y, 2 * t, m), m)),
						  (G[0] = O.Cartesian3.clone(d, G[0])),
						  (G[1] = O.Cartesian3.clone(g, G[1])),
						  (h = $(Q.PolylinePipeline.generateArc({ positions: G, granularity: e, ellipsoid: n }), y, t, h)),
						  s && (f.push(y.x, y.y, y.z), w.push(o.x, o.y, o.z)),
						  (c = O.Cartesian3.clone(m, c)),
						  (y = O.Cartesian3.normalize(O.Cartesian3.cross(o, C, y), y)),
						  (m = O.Cartesian3.add(p, O.Cartesian3.multiplyByScalar(y, 2 * t, m), m)),
						  (d = O.Cartesian3.add(p, O.Cartesian3.multiplyByScalar(y, t, d), d)),
						  i === R.CornerType.ROUNDED || i === R.CornerType.BEVELED
								? D.push({ leftPositions: Y(p, c, m, i, L) })
								: D.push({ leftPositions: Z(z, O.Cartesian3.negate(u, u), m, L) }))
						: ((m = O.Cartesian3.add(z, u, m)),
						  (g = O.Cartesian3.add(m, O.Cartesian3.negate(O.Cartesian3.multiplyByScalar(y, t, g), g), g)),
						  (p = O.Cartesian3.add(m, O.Cartesian3.negate(O.Cartesian3.multiplyByScalar(y, 2 * t, p), p), p)),
						  (G[0] = O.Cartesian3.clone(d, G[0])),
						  (G[1] = O.Cartesian3.clone(g, G[1])),
						  (h = $(Q.PolylinePipeline.generateArc({ positions: G, granularity: e, ellipsoid: n }), y, t, h)),
						  s && (f.push(y.x, y.y, y.z), w.push(o.x, o.y, o.z)),
						  (c = O.Cartesian3.clone(p, c)),
						  (y = O.Cartesian3.normalize(O.Cartesian3.cross(o, C, y), y)),
						  (p = O.Cartesian3.add(m, O.Cartesian3.negate(O.Cartesian3.multiplyByScalar(y, 2 * t, p), p), p)),
						  (d = O.Cartesian3.add(m, O.Cartesian3.negate(O.Cartesian3.multiplyByScalar(y, t, d), d), d)),
						  i === R.CornerType.ROUNDED || i === R.CornerType.BEVELED
								? D.push({ rightPositions: Y(m, c, p, i, L) })
								: D.push({ rightPositions: Z(z, u, p, L) })),
					(l = O.Cartesian3.negate(C, l))),
				(z = x);
		}
		return (
			(o = n.geodeticSurfaceNormal(z, o)),
			(G[0] = O.Cartesian3.clone(d, G[0])),
			(G[1] = O.Cartesian3.clone(z, G[1])),
			(h = $(Q.PolylinePipeline.generateArc({ positions: G, granularity: e, ellipsoid: n }), y, t, h)),
			s && (f.push(y.x, y.y, y.z), w.push(o.x, o.y, o.z)),
			i === R.CornerType.ROUNDED &&
				((A = I),
				(B = j),
				(v = (P = h)[1]),
				(E = O.Cartesian3.fromArray(P[1], v.length - 3, q)),
				(B = O.Cartesian3.fromArray(P[0], 0, B)),
				(S = Y((A = O.Cartesian3.midpoint(E, B, A)), E, B, R.CornerType.ROUNDED, !1)),
				(b = P.length - 1),
				(a = P[b - 1]),
				(v = P[b]),
				(E = O.Cartesian3.fromArray(a, a.length - 3, E)),
				(B = O.Cartesian3.fromArray(v, 0, B)),
				(B = [S, Y((A = O.Cartesian3.midpoint(E, B, A)), E, B, R.CornerType.ROUNDED, !1)])),
			{ positions: h, corners: D, lefts: f, normals: w, endPositions: B }
		);
	}),
		(a.CorridorGeometryLibrary = e);
});
