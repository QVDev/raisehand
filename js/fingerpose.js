!(function (t, e) {
    "object" == typeof exports && "object" == typeof module ? (module.exports = e()) : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? (exports.fp = e()) : (t.fp = e());
})("undefined" != typeof self ? self : this, function () {
    return (function (t) {
        var e = {};
        function n(r) {
            if (e[r]) return e[r].exports;
            var i = (e[r] = { i: r, l: !1, exports: {} });
            return t[r].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
        }
        return (
            (n.m = t),
            (n.c = e),
            (n.d = function (t, e, r) {
                n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r });
            }),
            (n.r = function (t) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 });
            }),
            (n.t = function (t, e) {
                if ((1 & e && (t = n(t)), 8 & e)) return t;
                if (4 & e && "object" == typeof t && t && t.__esModule) return t;
                var r = Object.create(null);
                if ((n.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t))
                    for (var i in t)
                        n.d(
                            r,
                            i,
                            function (e) {
                                return t[e];
                            }.bind(null, i)
                        );
                return r;
            }),
            (n.n = function (t) {
                var e =
                    t && t.__esModule
                        ? function () {
                              return t.default;
                          }
                        : function () {
                              return t;
                          };
                return n.d(e, "a", e), e;
            }),
            (n.o = function (t, e) {
                return Object.prototype.hasOwnProperty.call(t, e);
            }),
            (n.p = ""),
            n((n.s = 0))
        );
    })([
        function (t, e, n) {
            "use strict";
            n.r(e);
            var r = {};
            function i(t) {
                return (i =
                    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                        ? function (t) {
                              return typeof t;
                          }
                        : function (t) {
                              return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                          })(t);
            }
            n.r(r),
                n.d(r, "VictoryGesture", function () {
                    return I;
                }),
                n.d(r, "ThumbsUpGesture", function () {
                    return P;
                }),
                n.d(r, "ThumbsLeftGesture", function () {
                    return k;
                }),
                n.d(r, "ThumbsRightGesture", function () {
                    return F;
                }),
                n.d(r, "ThumbsDownGesture", function () {
                    return $;
                }),
                n.d(r, "PointUpGesture", function () {
                    return X;
                }),
                n.d(r, "PointLeftGesture", function () {
                    return nt;
                }),
                n.d(r, "PointRightGesture", function () {
                    return lt;
                }),
                n.d(r, "PointDownGesture", function () {
                    return st;
                }),
                n.d(r, "WaveGesture", function () {
                    return yt;
                }),
                n.d(r, "FistGesture", function () {
                    return wt;
                });
            var a = {
                    Thumb: 0,
                    Index: 1,
                    Middle: 2,
                    Ring: 3,
                    Pinky: 4,
                    all: [0, 1, 2, 3, 4],
                    nameMapping: { 0: "Thumb", 1: "Index", 2: "Middle", 3: "Ring", 4: "Pinky" },
                    pointsMapping: {
                        0: [
                            [0, 1],
                            [1, 2],
                            [2, 3],
                            [3, 4],
                        ],
                        1: [
                            [0, 5],
                            [5, 6],
                            [6, 7],
                            [7, 8],
                        ],
                        2: [
                            [0, 9],
                            [9, 10],
                            [10, 11],
                            [11, 12],
                        ],
                        3: [
                            [0, 13],
                            [13, 14],
                            [14, 15],
                            [15, 16],
                        ],
                        4: [
                            [0, 17],
                            [17, 18],
                            [18, 19],
                            [19, 20],
                        ],
                    },
                    getName: function (t) {
                        return void 0 !== i(this.nameMapping[t]) && this.nameMapping[t];
                    },
                    getPoints: function (t) {
                        return void 0 !== i(this.pointsMapping[t]) && this.pointsMapping[t];
                    },
                },
                o = {
                    NoCurl: 0,
                    HalfCurl: 1,
                    FullCurl: 2,
                    nameMapping: { 0: "No Curl", 1: "Half Curl", 2: "Full Curl" },
                    getName: function (t) {
                        return void 0 !== i(this.nameMapping[t]) && this.nameMapping[t];
                    },
                },
                l = {
                    VerticalUp: 0,
                    VerticalDown: 1,
                    HorizontalLeft: 2,
                    HorizontalRight: 3,
                    DiagonalUpRight: 4,
                    DiagonalUpLeft: 5,
                    DiagonalDownRight: 6,
                    DiagonalDownLeft: 7,
                    nameMapping: { 0: "Vertical Up", 1: "Vertical Down", 2: "Horizontal Left", 3: "Horizontal Right", 4: "Diagonal Up Right", 5: "Diagonal Up Left", 6: "Diagonal Down Right", 7: "Diagonal Down Left" },
                    getName: function (t) {
                        return void 0 !== i(this.nameMapping[t]) && this.nameMapping[t];
                    },
                };
            function u(t) {
                if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
                    if (
                        Array.isArray(t) ||
                        (t = (function (t, e) {
                            if (!t) return;
                            if ("string" == typeof t) return c(t, e);
                            var n = Object.prototype.toString.call(t).slice(8, -1);
                            "Object" === n && t.constructor && (n = t.constructor.name);
                            if ("Map" === n || "Set" === n) return Array.from(n);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return c(t, e);
                        })(t))
                    ) {
                        var e = 0,
                            n = function () {};
                        return {
                            s: n,
                            n: function () {
                                return e >= t.length ? { done: !0 } : { done: !1, value: t[e++] };
                            },
                            e: function (t) {
                                throw t;
                            },
                            f: n,
                        };
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }
                var r,
                    i,
                    a = !0,
                    o = !1;
                return {
                    s: function () {
                        r = t[Symbol.iterator]();
                    },
                    n: function () {
                        var t = r.next();
                        return (a = t.done), t;
                    },
                    e: function (t) {
                        (o = !0), (i = t);
                    },
                    f: function () {
                        try {
                            a || null == r.return || r.return();
                        } finally {
                            if (o) throw i;
                        }
                    },
                };
            }
            function c(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r;
            }
            function d(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e &&
                        (r = r.filter(function (e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable;
                        })),
                        n.push.apply(n, r);
                }
                return n;
            }
            function f(t, e, n) {
                return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n), t;
            }
            function s(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
                }
            }
            var h = (function () {
                function t(e) {
                    !(function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    })(this, t),
                        (this.options = (function (t) {
                            for (var e = 1; e < arguments.length; e++) {
                                var n = null != arguments[e] ? arguments[e] : {};
                                e % 2
                                    ? d(Object(n), !0).forEach(function (e) {
                                          f(t, e, n[e]);
                                      })
                                    : Object.getOwnPropertyDescriptors
                                    ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                                    : d(Object(n)).forEach(function (e) {
                                          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                                      });
                            }
                            return t;
                        })({}, { HALF_CURL_START_LIMIT: 60, NO_CURL_START_LIMIT: 130, DISTANCE_VOTE_POWER: 1.1, SINGLE_ANGLE_VOTE_POWER: 0.9, TOTAL_ANGLE_VOTE_POWER: 1.6 }, {}, e));
                }
                var e, n, r;
                return (
                    (e = t),
                    (n = [
                        {
                            key: "estimate",
                            value: function (t) {
                                var e,
                                    n = [],
                                    r = [],
                                    i = u(a.all);
                                try {
                                    for (i.s(); !(e = i.n()).done; ) {
                                        var o,
                                            l = e.value,
                                            c = a.getPoints(l),
                                            d = [],
                                            f = [],
                                            s = u(c);
                                        try {
                                            for (s.s(); !(o = s.n()).done; ) {
                                                var h = o.value,
                                                    g = t[h[0]],
                                                    p = t[h[1]],
                                                    v = this.getSlopes(g, p),
                                                    y = v[0],
                                                    m = v[1];
                                                d.push(y), f.push(m);
                                            }
                                        } catch (t) {
                                            s.e(t);
                                        } finally {
                                            s.f();
                                        }
                                        n.push(d), r.push(f);
                                    }
                                } catch (t) {
                                    i.e(t);
                                } finally {
                                    i.f();
                                }
                                var b,
                                    D = [],
                                    C = [],
                                    w = u(a.all);
                                try {
                                    for (w.s(); !(b = w.n()).done; ) {
                                        var T = b.value,
                                            M = T == a.Thumb ? 1 : 0,
                                            R = a.getPoints(T),
                                            I = t[R[M][0]],
                                            O = t[R[M + 1][1]],
                                            x = t[R[3][1]],
                                            L = this.estimateFingerCurl(I, O, x),
                                            S = this.calculateFingerDirection(I, O, x, n[T].slice(M));
                                        (D[T] = L), (C[T] = S);
                                    }
                                } catch (t) {
                                    w.e(t);
                                } finally {
                                    w.f();
                                }
                                return { curls: D, directions: C };
                            },
                        },
                        {
                            key: "getSlopes",
                            value: function (t, e) {
                                var n = this.calculateSlope(t[0], t[1], e[0], e[1]);
                                return 2 == t.length ? n : [n, this.calculateSlope(t[1], t[2], e[1], e[2])];
                            },
                        },
                        {
                            key: "angleOrientationAt",
                            value: function (t) {
                                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
                                    n = 0,
                                    r = 0,
                                    i = 0;
                                return t >= 75 && t <= 105 ? (n = 1 * e) : t >= 25 && t <= 155 ? (r = 1 * e) : (i = 1 * e), [n, r, i];
                            },
                        },
                        {
                            key: "estimateFingerCurl",
                            value: function (t, e, n) {
                                var r = t[0] - e[0],
                                    i = t[0] - n[0],
                                    a = e[0] - n[0],
                                    l = t[1] - e[1],
                                    u = t[1] - n[1],
                                    c = e[1] - n[1],
                                    d = t[2] - e[2],
                                    f = t[2] - n[2],
                                    s = e[2] - n[2],
                                    h = Math.sqrt(r * r + l * l + d * d),
                                    g = Math.sqrt(i * i + u * u + f * f),
                                    p = Math.sqrt(a * a + c * c + s * s),
                                    v = (p * p + h * h - g * g) / (2 * p * h);
                                v > 1 ? (v = 1) : v < -1 && (v = -1);
                                var y = Math.acos(v);
                                return (y = (57.2958 * y) % 180) > this.options.NO_CURL_START_LIMIT ? o.NoCurl : y > this.options.HALF_CURL_START_LIMIT ? o.HalfCurl : o.FullCurl;
                            },
                        },
                        {
                            key: "estimateHorizontalDirection",
                            value: function (t, e, n, r) {
                                return r == Math.abs(t) ? (t > 0 ? l.HorizontalLeft : l.HorizontalRight) : r == Math.abs(e) ? (e > 0 ? l.HorizontalLeft : l.HorizontalRight) : n > 0 ? l.HorizontalLeft : l.HorizontalRight;
                            },
                        },
                        {
                            key: "estimateVerticalDirection",
                            value: function (t, e, n, r) {
                                return r == Math.abs(t) ? (t < 0 ? l.VerticalDown : l.VerticalUp) : r == Math.abs(e) ? (e < 0 ? l.VerticalDown : l.VerticalUp) : n < 0 ? l.VerticalDown : l.VerticalUp;
                            },
                        },
                        {
                            key: "estimateDiagonalDirection",
                            value: function (t, e, n, r, i, a, o, u) {
                                var c = this.estimateVerticalDirection(t, e, n, r),
                                    d = this.estimateHorizontalDirection(i, a, o, u);
                                return c == l.VerticalUp ? (d == l.HorizontalLeft ? l.DiagonalUpLeft : l.DiagonalUpRight) : d == l.HorizontalLeft ? l.DiagonalDownLeft : l.DiagonalDownRight;
                            },
                        },
                        {
                            key: "calculateFingerDirection",
                            value: function (t, e, n, r) {
                                var i = t[0] - e[0],
                                    a = t[0] - n[0],
                                    o = e[0] - n[0],
                                    l = t[1] - e[1],
                                    c = t[1] - n[1],
                                    d = e[1] - n[1],
                                    f = Math.max(Math.abs(i), Math.abs(a), Math.abs(o)),
                                    s = Math.max(Math.abs(l), Math.abs(c), Math.abs(d)),
                                    h = 0,
                                    g = 0,
                                    p = 0,
                                    v = s / (f + 1e-5);
                                v > 1.5 ? (h += this.options.DISTANCE_VOTE_POWER) : v > 0.66 ? (g += this.options.DISTANCE_VOTE_POWER) : (p += this.options.DISTANCE_VOTE_POWER);
                                var y = Math.sqrt(i * i + l * l),
                                    m = Math.sqrt(a * a + c * c),
                                    b = Math.sqrt(o * o + d * d),
                                    D = Math.max(y, m, b),
                                    C = t[0],
                                    w = t[1],
                                    T = n[0],
                                    M = n[1];
                                D == y ? ((T = n[0]), (M = n[1])) : D == b && ((C = e[0]), (w = e[1]));
                                var R = [C, w],
                                    I = [T, M],
                                    O = this.getSlopes(R, I),
                                    x = this.angleOrientationAt(O, this.options.TOTAL_ANGLE_VOTE_POWER);
                                (h += x[0]), (g += x[1]), (p += x[2]);
                                var L,
                                    S = u(r);
                                try {
                                    for (S.s(); !(L = S.n()).done; ) {
                                        var P = L.value,
                                            A = this.angleOrientationAt(P, this.options.SINGLE_ANGLE_VOTE_POWER);
                                        (h += A[0]), (g += A[1]), (p += A[2]);
                                    }
                                } catch (t) {
                                    S.e(t);
                                } finally {
                                    S.f();
                                }
                                return h == Math.max(h, g, p) ? this.estimateVerticalDirection(c, l, d, s) : p == Math.max(g, p) ? this.estimateHorizontalDirection(a, i, o, f) : this.estimateDiagonalDirection(c, l, d, s, a, i, o, f);
                            },
                        },
                        {
                            key: "calculateSlope",
                            value: function (t, e, n, r) {
                                var i = (e - r) / (t - n),
                                    a = (180 * Math.atan(i)) / Math.PI;
                                return a <= 0 ? (a = -a) : a > 0 && (a = 180 - a), a;
                            },
                        },
                    ]) && s(e.prototype, n),
                    r && s(e, r),
                    t
                );
            })();
            function g(t) {
                if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
                    if (
                        Array.isArray(t) ||
                        (t = (function (t, e) {
                            if (!t) return;
                            if ("string" == typeof t) return p(t, e);
                            var n = Object.prototype.toString.call(t).slice(8, -1);
                            "Object" === n && t.constructor && (n = t.constructor.name);
                            if ("Map" === n || "Set" === n) return Array.from(n);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return p(t, e);
                        })(t))
                    ) {
                        var e = 0,
                            n = function () {};
                        return {
                            s: n,
                            n: function () {
                                return e >= t.length ? { done: !0 } : { done: !1, value: t[e++] };
                            },
                            e: function (t) {
                                throw t;
                            },
                            f: n,
                        };
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }
                var r,
                    i,
                    a = !0,
                    o = !1;
                return {
                    s: function () {
                        r = t[Symbol.iterator]();
                    },
                    n: function () {
                        var t = r.next();
                        return (a = t.done), t;
                    },
                    e: function (t) {
                        (o = !0), (i = t);
                    },
                    f: function () {
                        try {
                            a || null == r.return || r.return();
                        } finally {
                            if (o) throw i;
                        }
                    },
                };
            }
            function p(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r;
            }
            function v(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            }
            function y(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
                }
            }
            var m = (function () {
                function t(e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    v(this, t), (this.estimator = new h(n)), (this.gestures = e);
                }
                var e, n, r;
                return (
                    (e = t),
                    (n = [
                        {
                            key: "estimate",
                            value: function (t, e) {
                                var n,
                                    r = [],
                                    i = this.estimator.estimate(t),
                                    u = [],
                                    c = g(a.all);
                                try {
                                    for (c.s(); !(n = c.n()).done; ) {
                                        var d = n.value;
                                        u.push([a.getName(d), o.getName(i.curls[d]), l.getName(i.directions[d])]);
                                    }
                                } catch (t) {
                                    c.e(t);
                                } finally {
                                    c.f();
                                }
                                var f,
                                    s = g(this.gestures);
                                try {
                                    for (s.s(); !(f = s.n()).done; ) {
                                        var h = f.value,
                                            p = h.matchAgainst(i.curls, i.directions);
                                        p >= e && r.push({ name: h.name, confidence: p });
                                    }
                                } catch (t) {
                                    s.e(t);
                                } finally {
                                    s.f();
                                }
                                return { poseData: u, gestures: r };
                            },
                        },
                    ]) && y(e.prototype, n),
                    r && y(e, r),
                    t
                );
            })();
            function b(t, e) {
                return (
                    (function (t) {
                        if (Array.isArray(t)) return t;
                    })(t) ||
                    (function (t, e) {
                        if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(t))) return;
                        var n = [],
                            r = !0,
                            i = !1,
                            a = void 0;
                        try {
                            for (var o, l = t[Symbol.iterator](); !(r = (o = l.next()).done) && (n.push(o.value), !e || n.length !== e); r = !0);
                        } catch (t) {
                            (i = !0), (a = t);
                        } finally {
                            try {
                                r || null == l.return || l.return();
                            } finally {
                                if (i) throw a;
                            }
                        }
                        return n;
                    })(t, e) ||
                    C(t, e) ||
                    (function () {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    })()
                );
            }
            function D(t) {
                if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
                    if (Array.isArray(t) || (t = C(t))) {
                        var e = 0,
                            n = function () {};
                        return {
                            s: n,
                            n: function () {
                                return e >= t.length ? { done: !0 } : { done: !1, value: t[e++] };
                            },
                            e: function (t) {
                                throw t;
                            },
                            f: n,
                        };
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }
                var r,
                    i,
                    a = !0,
                    o = !1;
                return {
                    s: function () {
                        r = t[Symbol.iterator]();
                    },
                    n: function () {
                        var t = r.next();
                        return (a = t.done), t;
                    },
                    e: function (t) {
                        (o = !0), (i = t);
                    },
                    f: function () {
                        try {
                            a || null == r.return || r.return();
                        } finally {
                            if (o) throw i;
                        }
                    },
                };
            }
            function C(t, e) {
                if (t) {
                    if ("string" == typeof t) return w(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? w(t, e) : void 0;
                }
            }
            function w(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r;
            }
            function T(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
                }
            }
            var M = (function () {
                    function t(e) {
                        !(function (t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                        })(this, t),
                            (this.name = e),
                            (this.curls = {}),
                            (this.directions = {}),
                            (this.weights = [1, 1, 1, 1, 1]),
                            (this.weightsRelative = [1, 1, 1, 1, 1]);
                    }
                    var e, n, r;
                    return (
                        (e = t),
                        (n = [
                            {
                                key: "addCurl",
                                value: function (t, e, n) {
                                    void 0 === this.curls[t] && (this.curls[t] = []), this.curls[t].push([e, n]);
                                },
                            },
                            {
                                key: "addDirection",
                                value: function (t, e, n) {
                                    void 0 === this.directions[t] && (this.directions[t] = []), this.directions[t].push([e, n]);
                                },
                            },
                            {
                                key: "setWeight",
                                value: function (t, e) {
                                    this.weights[t] = e;
                                    var n = this.weights.reduce(function (t, e) {
                                        return t + e;
                                    }, 0);
                                    this.weightsRelative = this.weights.map(function (t) {
                                        return (5 * t) / n;
                                    });
                                },
                            },
                            {
                                key: "matchAgainst",
                                value: function (t, e) {
                                    var n = 0;
                                    for (var r in t) {
                                        var i = t[r],
                                            a = this.curls[r];
                                        if (void 0 !== a) {
                                            var o,
                                                l = D(a);
                                            try {
                                                for (l.s(); !(o = l.n()).done; ) {
                                                    var u = b(o.value, 2),
                                                        c = u[0],
                                                        d = u[1];
                                                    if (i == c) {
                                                        n += d * this.weightsRelative[r];
                                                        break;
                                                    }
                                                }
                                            } catch (t) {
                                                l.e(t);
                                            } finally {
                                                l.f();
                                            }
                                        } else n += this.weightsRelative[r];
                                    }
                                    for (var f in e) {
                                        var s = e[f],
                                            h = this.directions[f];
                                        if (void 0 !== h) {
                                            var g,
                                                p = D(h);
                                            try {
                                                for (p.s(); !(g = p.n()).done; ) {
                                                    var v = b(g.value, 2),
                                                        y = v[0],
                                                        m = v[1];
                                                    if (s == y) {
                                                        n += m * this.weightsRelative[f];
                                                        break;
                                                    }
                                                }
                                            } catch (t) {
                                                p.e(t);
                                            } finally {
                                                p.f();
                                            }
                                        } else n += this.weightsRelative[f];
                                    }
                                    return n;
                                },
                            },
                        ]) && T(e.prototype, n),
                        r && T(e, r),
                        t
                    );
                })(),
                R = new M("victory");
            R.addCurl(a.Thumb, o.HalfCurl, 0.5),
                R.addCurl(a.Thumb, o.NoCurl, 0.5),
                R.addDirection(a.Thumb, l.VerticalUp, 1),
                R.addDirection(a.Thumb, l.DiagonalUpLeft, 1),
                R.addCurl(a.Index, o.NoCurl, 1),
                R.addDirection(a.Index, l.VerticalUp, 0.75),
                R.addDirection(a.Index, l.DiagonalUpLeft, 1),
                R.addCurl(a.Middle, o.NoCurl, 1),
                R.addDirection(a.Middle, l.VerticalUp, 1),
                R.addDirection(a.Middle, l.DiagonalUpRight, 0.75),
                R.addCurl(a.Ring, o.FullCurl, 1),
                R.addDirection(a.Ring, l.VerticalUp, 0.2),
                R.addDirection(a.Ring, l.DiagonalUpLeft, 1),
                R.addDirection(a.Ring, l.HorizontalLeft, 0.2),
                R.addCurl(a.Pinky, o.FullCurl, 1),
                R.addDirection(a.Pinky, l.VerticalUp, 0.2),
                R.addDirection(a.Pinky, l.DiagonalUpLeft, 1),
                R.addDirection(a.Pinky, l.HorizontalLeft, 0.2),
                R.setWeight(a.Index, 2),
                R.setWeight(a.Middle, 2);
            var I = R,
                O = new M("thumbs up");
            O.addCurl(a.Thumb, o.NoCurl, 1), O.addDirection(a.Thumb, l.VerticalUp, 1), O.addDirection(a.Thumb, l.DiagonalUpLeft, 0.5), O.addDirection(a.Thumb, l.DiagonalUpRight, 0.5);
            for (var x = 0, L = [a.Index, a.Middle, a.Ring, a.Pinky]; x < L.length; x++) {
                var S = L[x];
                O.addCurl(S, o.FullCurl, 2);
            }
            O.setWeight(a.Thumb, 2);
            var P = O,
                A = new M("thumbs left");
            A.addCurl(a.Thumb, o.NoCurl, 1), A.addCurl(a.Thumb, o.HalfCurl, 0.5), A.addDirection(a.Thumb, l.HorizontalLeft, 1), A.addDirection(a.Thumb, l.DiagonalUpLeft, 0.5), A.addDirection(a.Thumb, l.DiagonalDownLeft, 0.5);
            for (var U = 0, _ = [a.Index, a.Middle, a.Ring, a.Pinky]; U < _.length; U++) {
                var j = _[U];
                A.addCurl(j, o.FullCurl, 2);
            }
            A.setWeight(a.Thumb, 2);
            var k = A,
                E = new M("thumbs right");
            E.addCurl(a.Thumb, o.NoCurl, 1), E.addCurl(a.Thumb, o.HalfCurl, 0.5), E.addDirection(a.Thumb, l.HorizontalRight, 1), E.addDirection(a.Thumb, l.DiagonalUpRight, 0.5), E.addDirection(a.Thumb, l.DiagonalDownRight, 0.5);
            for (var N = 0, V = [a.Index, a.Middle, a.Ring, a.Pinky]; N < V.length; N++) {
                var H = V[N];
                E.addCurl(H, o.FullCurl, 2);
            }
            E.setWeight(a.Thumb, 2);
            var F = E,
                z = new M("thumbs down");
            z.addCurl(a.Thumb, o.NoCurl, 1), z.addDirection(a.Thumb, l.VerticalDown, 1), z.addDirection(a.Thumb, l.DiagonalDownLeft, 0.5), z.addDirection(a.Thumb, l.DiagonalDownRight, 0.5);
            for (var G = 0, W = [a.Index, a.Middle, a.Ring, a.Pinky]; G < W.length; G++) {
                var q = W[G];
                z.addCurl(q, o.FullCurl, 2);
            }
            z.setWeight(a.Thumb, 2);
            var $ = z,
                B = new M("point up");
            B.addCurl(a.Index, o.NoCurl, 1), B.addDirection(a.Index, l.VerticalUp, 1), B.addDirection(a.Index, l.DiagonalUpLeft, 0.5), B.addDirection(a.Index, l.DiagonalUpRight, 0.5);
            for (var J = 0, K = [a.Thumb, a.Middle, a.Ring, a.Pinky]; J < K.length; J++) {
                var Q = K[J];
                B.addCurl(Q, o.FullCurl, 2);
            }
            B.setWeight(a.Index, 2);
            var X = B,
                Y = new M("point left");
            Y.addCurl(a.Index, o.NoCurl, 1), Y.addDirection(a.Index, l.HorizontalLeft, 1), Y.addDirection(a.Index, l.DiagonalUpLeft, 0.5), Y.addDirection(a.Index, l.DiagonalDownLeft, 0.5);
            for (var Z = 0, tt = [a.Thumb, a.Middle, a.Ring, a.Pinky]; Z < tt.length; Z++) {
                var et = tt[Z];
                Y.addCurl(et, o.FullCurl, 2);
            }
            Y.setWeight(a.Index, 2);
            var nt = Y,
                rt = new M("point right");
            rt.addCurl(a.Index, o.NoCurl, 1), rt.addDirection(a.Index, l.HorizontalRight, 1), rt.addDirection(a.Index, l.DiagonalUpRight, 0.5), rt.addDirection(a.Index, l.DiagonalDownRight, 0.5);
            for (var it = 0, at = [a.Thumb, a.Middle, a.Ring, a.Pinky]; it < at.length; it++) {
                var ot = at[it];
                rt.addCurl(ot, o.FullCurl, 2);
            }
            rt.setWeight(a.Index, 2);
            var lt = rt,
                ut = new M("point down");
            ut.addCurl(a.Index, o.NoCurl, 1), ut.addDirection(a.Index, l.VerticalDown, 1), ut.addDirection(a.Index, l.DiagonalDownLeft, 0.5), ut.addDirection(a.Index, l.DiagonalDownRight, 0.5);
            for (var ct = 0, dt = [a.Middle, a.Ring, a.Pinky]; ct < dt.length; ct++) {
                var ft = dt[ct];
                ut.addCurl(ft, o.FullCurl, 1), ut.addCurl(ft, o.HalfCurl, 1), ut.addDirection(ft, l.VerticalDown, 0.5), ut.addDirection(ft, l.DiagonalDownLeft, 0.5), ut.addDirection(ft, l.DiagonalDownRight, 0.5);
            }
            ut.setWeight(a.Index, 2);
            for (var st = ut, ht = new M("wave"), gt = 0, pt = [a.Thumb, a.Index, a.Middle, a.Ring, a.Pinky]; gt < pt.length; gt++) {
                var vt = pt[gt];
                ht.addCurl(vt, o.NoCurl, 1), ht.addCurl(vt, o.HalfCurl, 0.5);
            }
            var yt = ht,
                mt = new M("fist");
            mt.addCurl(a.Thumb, o.NoCurl, -0.5), mt.addCurl(a.Index, o.NoCurl, -0.5);
            for (var bt = 0, Dt = [a.Thumb, a.Index, a.Middle, a.Ring, a.Pinky]; bt < Dt.length; bt++) {
                var Ct = Dt[bt];
                mt.addCurl(Ct, o.FullCurl, 2), mt.addCurl(Ct, o.HalfCurl, 0.5);
            }
            var wt = mt;
            e.default = { GestureEstimator: m, GestureDescription: M, Finger: a, FingerCurl: o, FingerDirection: l, Gestures: r };
        },
    ]).default;
});
