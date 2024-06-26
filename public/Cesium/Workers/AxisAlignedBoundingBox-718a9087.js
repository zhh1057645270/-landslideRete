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
define(['exports', './Cartesian2-08065eec', './Check-be2d5acb', './when-ad3237a0', './Transforms-1142ce48'], function (e, f, n, h, t) {
	'use strict';
	function y(e, n, a) {
		(this.minimum = f.Cartesian3.clone(h.defaultValue(e, f.Cartesian3.ZERO))),
			(this.maximum = f.Cartesian3.clone(h.defaultValue(n, f.Cartesian3.ZERO))),
			(a = h.defined(a) ? f.Cartesian3.clone(a) : f.Cartesian3.midpoint(this.minimum, this.maximum, new f.Cartesian3())),
			(this.center = a);
	}
	(y.fromPoints = function (e, n) {
		if ((h.defined(n) || (n = new y()), !h.defined(e) || 0 === e.length))
			return (
				(n.minimum = f.Cartesian3.clone(f.Cartesian3.ZERO, n.minimum)),
				(n.maximum = f.Cartesian3.clone(f.Cartesian3.ZERO, n.maximum)),
				(n.center = f.Cartesian3.clone(f.Cartesian3.ZERO, n.center)),
				n
			);
		for (var a = e[0].x, i = e[0].y, t = e[0].z, m = e[0].x, r = e[0].y, s = e[0].z, u = e.length, c = 1; c < u; c++)
			var o = e[c],
				l = o.x,
				C = o.y,
				o = o.z,
				a = Math.min(l, a),
				m = Math.max(l, m),
				i = Math.min(C, i),
				r = Math.max(C, r),
				t = Math.min(o, t),
				s = Math.max(o, s);
		var d = n.minimum;
		(d.x = a), (d.y = i), (d.z = t);
		var x = n.maximum;
		return (x.x = m), (x.y = r), (x.z = s), (n.center = f.Cartesian3.midpoint(d, x, n.center)), n;
	}),
		(y.clone = function (e, n) {
			if (h.defined(e))
				return h.defined(n)
					? ((n.minimum = f.Cartesian3.clone(e.minimum, n.minimum)),
					  (n.maximum = f.Cartesian3.clone(e.maximum, n.maximum)),
					  (n.center = f.Cartesian3.clone(e.center, n.center)),
					  n)
					: new y(e.minimum, e.maximum, e.center);
		}),
		(y.equals = function (e, n) {
			return (
				e === n ||
				(h.defined(e) &&
					h.defined(n) &&
					f.Cartesian3.equals(e.center, n.center) &&
					f.Cartesian3.equals(e.minimum, n.minimum) &&
					f.Cartesian3.equals(e.maximum, n.maximum))
			);
		});
	var m = new f.Cartesian3();
	(y.intersectPlane = function (e, n) {
		m = f.Cartesian3.subtract(e.maximum, e.minimum, m);
		var a = f.Cartesian3.multiplyByScalar(m, 0.5, m),
			i = n.normal,
			a = a.x * Math.abs(i.x) + a.y * Math.abs(i.y) + a.z * Math.abs(i.z),
			n = f.Cartesian3.dot(e.center, i) + n.distance;
		return 0 < n - a ? t.Intersect.INSIDE : n + a < 0 ? t.Intersect.OUTSIDE : t.Intersect.INTERSECTING;
	}),
		(y.prototype.clone = function (e) {
			return y.clone(this, e);
		}),
		(y.prototype.intersectPlane = function (e) {
			return y.intersectPlane(this, e);
		}),
		(y.prototype.equals = function (e) {
			return y.equals(this, e);
		}),
		(e.AxisAlignedBoundingBox = y);
});
