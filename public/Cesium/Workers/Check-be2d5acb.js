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
define(['exports', './when-ad3237a0'], function (e, n) {
	'use strict';
	function r(e) {
		var t;
		(this.name = 'DeveloperError'), (this.message = e);
		try {
			throw new Error();
		} catch (e) {
			t = e.stack;
		}
		this.stack = t;
	}
	n.defined(Object.create) && ((r.prototype = Object.create(Error.prototype)).constructor = r),
		(r.prototype.toString = function () {
			var e = this.name + ': ' + this.message;
			return n.defined(this.stack) && (e += '\n' + this.stack.toString()), e;
		}),
		(r.throwInstantiationError = function () {
			throw new r('This function defines an interface and should not be called directly.');
		});
	var f = {};
	function o(e, t, n) {
		return 'Expected ' + n + ' to be typeof ' + t + ', actual typeof was ' + e;
	}
	(f.typeOf = {}),
		(f.defined = function (e, t) {
			if (!n.defined(t)) throw new r(e + ' is required, actual value was undefined');
		}),
		(f.typeOf.func = function (e, t) {
			if ('function' != typeof t) throw new r(o(typeof t, 'function', e));
		}),
		(f.typeOf.string = function (e, t) {
			if ('string' != typeof t) throw new r(o(typeof t, 'string', e));
		}),
		(f.typeOf.number = function (e, t) {
			if ('number' != typeof t) throw new r(o(typeof t, 'number', e));
		}),
		(f.typeOf.number.lessThan = function (e, t, n) {
			if ((f.typeOf.number(e, t), n <= t)) throw new r('Expected ' + e + ' to be less than ' + n + ', actual value was ' + t);
		}),
		(f.typeOf.number.lessThanOrEquals = function (e, t, n) {
			if ((f.typeOf.number(e, t), n < t)) throw new r('Expected ' + e + ' to be less than or equal to ' + n + ', actual value was ' + t);
		}),
		(f.typeOf.number.greaterThan = function (e, t, n) {
			if ((f.typeOf.number(e, t), t <= n)) throw new r('Expected ' + e + ' to be greater than ' + n + ', actual value was ' + t);
		}),
		(f.typeOf.number.greaterThanOrEquals = function (e, t, n) {
			if ((f.typeOf.number(e, t), t < n)) throw new r('Expected ' + e + ' to be greater than or equal to ' + n + ', actual value was ' + t);
		}),
		(f.typeOf.object = function (e, t) {
			if ('object' != typeof t) throw new r(o(typeof t, 'object', e));
		}),
		(f.typeOf.bool = function (e, t) {
			if ('boolean' != typeof t) throw new r(o(typeof t, 'boolean', e));
		}),
		(f.typeOf.bigint = function (e, t) {
			if ('bigint' != typeof t) throw new r(o(typeof t, 'bigint', e));
		}),
		(f.typeOf.number.equals = function (e, t, n, o) {
			if ((f.typeOf.number(e, n), f.typeOf.number(t, o), n !== o))
				throw new r(e + ' must be equal to ' + t + ', the actual values are ' + n + ' and ' + o);
		}),
		(e.Check = f),
		(e.DeveloperError = r);
});
