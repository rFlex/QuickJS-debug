!function(g) {
    "use strict";
    var r, e, t, i;
    r = {
        1: [ function(t, i) {
            i.exports = function(t, i) {
                var n = Array(arguments.length - 1), s = 0, r = 2, u = !0;
                for (;r < arguments.length; ) n[s++] = arguments[r++];
                return new Promise(function(r, e) {
                    n[s] = function(t) {
                        if (u) if (u = !1, t) e(t); else {
                            for (var i = Array(arguments.length - 1), n = 0; n < i.length; ) i[n++] = arguments[n];
                            r.apply(null, i);
                        }
                    };
                    try {
                        t.apply(i || null, n);
                    } catch (t) {
                        u && (u = !1, e(t));
                    }
                });
            };
        }, {} ],
        2: [ function(t, i, n) {
            var r = n;
            r.length = function(t) {
                var i = t.length;
                if (!i) return 0;
                for (var n = 0; 1 < --i % 4 && "=" === t.charAt(i); ) ++n;
                return Math.ceil(3 * t.length) / 4 - n;
            };
            for (var h = Array(64), f = Array(123), e = 0; e < 64; ) f[h[e] = e < 26 ? e + 65 : e < 52 ? e + 71 : e < 62 ? e - 4 : e - 59 | 43] = e++;
            r.encode = function(t, i, n) {
                for (var r, e = null, s = [], u = 0, o = 0; i < n; ) {
                    var f = t[i++];
                    switch (o) {
                      case 0:
                        s[u++] = h[f >> 2], r = (3 & f) << 4, o = 1;
                        break;

                      case 1:
                        s[u++] = h[r | f >> 4], r = (15 & f) << 2, o = 2;
                        break;

                      case 2:
                        s[u++] = h[r | f >> 6], s[u++] = h[63 & f], o = 0;
                    }
                    8191 < u && ((e || (e = [])).push(String.fromCharCode.apply(String, s)), u = 0);
                }
                return o && (s[u++] = h[r], s[u++] = 61, 1 === o && (s[u++] = 61)), e ? (u && e.push(String.fromCharCode.apply(String, s.slice(0, u))),
                e.join("")) : String.fromCharCode.apply(String, s.slice(0, u));
            };
            var c = "invalid encoding";
            r.decode = function(t, i, n) {
                for (var r, e = n, s = 0, u = 0; u < t.length; ) {
                    var o = t.charCodeAt(u++);
                    if (61 === o && 1 < s) break;
                    if ((o = f[o]) === g) throw Error(c);
                    switch (s) {
                      case 0:
                        r = o, s = 1;
                        break;

                      case 1:
                        i[n++] = r << 2 | (48 & o) >> 4, r = o, s = 2;
                        break;

                      case 2:
                        i[n++] = (15 & r) << 4 | (60 & o) >> 2, r = o, s = 3;
                        break;

                      case 3:
                        i[n++] = (3 & r) << 6 | o, s = 0;
                    }
                }
                if (1 === s) throw Error(c);
                return n - e;
            }, r.test = function(t) {
                return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(t);
            };
        }, {} ],
        3: [ function(t, i) {
            function a(i, n) {
                "string" == typeof i && (n = i, i = g);
                var f = [];
                function h(t) {
                    if ("string" != typeof t) {
                        var i = c();
                        if (a.verbose && console.log("codegen: " + i), i = "return " + i, t) {
                            for (var n = Object.keys(t), r = Array(n.length + 1), e = Array(n.length), s = 0; s < n.length; ) r[s] = n[s],
                            e[s] = t[n[s++]];
                            return r[s] = i, Function.apply(null, r).apply(null, e);
                        }
                        return Function(i)();
                    }
                    for (var u = Array(arguments.length - 1), o = 0; o < u.length; ) u[o] = arguments[++o];
                    if (o = 0, t = t.replace(/%([%dfijs])/g, function(t, i) {
                        var n = u[o++];
                        switch (i) {
                          case "d":
                          case "f":
                            return +n + "";

                          case "i":
                            return Math.floor(n) + "";

                          case "j":
                            return JSON.stringify(n);

                          case "s":
                            return n + "";
                        }
                        return "%";
                    }), o !== u.length) throw Error("parameter count mismatch");
                    return f.push(t), h;
                }
                function c(t) {
                    return "function " + (t || n || "") + "(" + (i && i.join(",") || "") + "){\n  " + f.join("\n  ") + "\n}";
                }
                return h.toString = c, h;
            }
            (i.exports = a).verbose = !1;
        }, {} ],
        4: [ function(t, i) {
            function n() {
                this.t = {};
            }
            (i.exports = n).prototype.on = function(t, i, n) {
                return (this.t[t] || (this.t[t] = [])).push({
                    fn: i,
                    ctx: n || this
                }), this;
            }, n.prototype.off = function(t, i) {
                if (t === g) this.t = {}; else if (i === g) this.t[t] = []; else for (var n = this.t[t], r = 0; r < n.length; ) n[r].fn === i ? n.splice(r, 1) : ++r;
                return this;
            }, n.prototype.emit = function(t) {
                var i = this.t[t];
                if (i) {
                    for (var n = [], r = 1; r < arguments.length; ) n.push(arguments[r++]);
                    for (r = 0; r < i.length; ) i[r].fn.apply(i[r++].ctx, n);
                }
                return this;
            };
        }, {} ],
        5: [ function(t, i) {
            i.exports = o;
            var s = t(1), u = t(7)("fs");
            function o(n, r, e) {
                return "function" == typeof r ? (e = r, r = {}) : r || (r = {}), e ? !r.xhr && u && u.readFile ? u.readFile(n, function(t, i) {
                    return t && "undefined" != typeof XMLHttpRequest ? o.xhr(n, r, e) : t ? e(t) : e(null, r.binary ? i : i.toString("utf8"));
                }) : o.xhr(n, r, e) : s(o, this, n, r);
            }
            o.xhr = function(t, n, r) {
                var e = new XMLHttpRequest();
                e.onreadystatechange = function() {
                    if (4 !== e.readyState) return g;
                    if (0 !== e.status && 200 !== e.status) return r(Error("status " + e.status));
                    if (n.binary) {
                        var t = e.response;
                        if (!t) {
                            t = [];
                            for (var i = 0; i < e.responseText.length; ++i) t.push(255 & e.responseText.charCodeAt(i));
                        }
                        return r(null, "undefined" != typeof Uint8Array ? new Uint8Array(t) : t);
                    }
                    return r(null, e.responseText);
                }, n.binary && ("overrideMimeType" in e && e.overrideMimeType("text/plain; charset=x-user-defined"),
                e.responseType = "arraybuffer"), e.open("GET", t), e.send();
            };
        }, {
            1: 1,
            7: 7
        } ],
        6: [ function(t, i) {
            function n(o) {
                return "undefined" != typeof Float32Array ? function() {
                    var r = new Float32Array([ -0 ]), e = new Uint8Array(r.buffer), t = 128 === e[3];
                    function i(t, i, n) {
                        r[0] = t, i[n] = e[0], i[n + 1] = e[1], i[n + 2] = e[2], i[n + 3] = e[3];
                    }
                    function n(t, i, n) {
                        r[0] = t, i[n] = e[3], i[n + 1] = e[2], i[n + 2] = e[1], i[n + 3] = e[0];
                    }
                    function s(t, i) {
                        return e[0] = t[i], e[1] = t[i + 1], e[2] = t[i + 2], e[3] = t[i + 3], r[0];
                    }
                    function u(t, i) {
                        return e[3] = t[i], e[2] = t[i + 1], e[1] = t[i + 2], e[0] = t[i + 3], r[0];
                    }
                    o.writeFloatLE = t ? i : n, o.writeFloatBE = t ? n : i, o.readFloatLE = t ? s : u,
                    o.readFloatBE = t ? u : s;
                }() : function() {
                    function t(t, i, n, r) {
                        var e = i < 0 ? 1 : 0;
                        if (e && (i = -i), 0 === i) t(0 < 1 / i ? 0 : 2147483648, n, r); else if (isNaN(i)) t(2143289344, n, r); else if (34028234663852886e22 < i) t((e << 31 | 2139095040) >>> 0, n, r); else if (i < 11754943508222875e-54) t((e << 31 | Math.round(i / 1401298464324817e-60)) >>> 0, n, r); else {
                            var s = Math.floor(Math.log(i) / Math.LN2);
                            t((e << 31 | s + 127 << 23 | 8388607 & Math.round(i * Math.pow(2, -s) * 8388608)) >>> 0, n, r);
                        }
                    }
                    function i(t, i, n) {
                        var r = t(i, n), e = 2 * (r >> 31) + 1, s = r >>> 23 & 255, u = 8388607 & r;
                        return 255 === s ? u ? NaN : e * (1 / 0) : 0 === s ? 1401298464324817e-60 * e * u : e * Math.pow(2, s - 150) * (u + 8388608);
                    }
                    o.writeFloatLE = t.bind(null, r), o.writeFloatBE = t.bind(null, e), o.readFloatLE = i.bind(null, s),
                    o.readFloatBE = i.bind(null, u);
                }(), "undefined" != typeof Float64Array ? function() {
                    var r = new Float64Array([ -0 ]), e = new Uint8Array(r.buffer), t = 128 === e[7];
                    function i(t, i, n) {
                        r[0] = t, i[n] = e[0], i[n + 1] = e[1], i[n + 2] = e[2], i[n + 3] = e[3], i[n + 4] = e[4],
                        i[n + 5] = e[5], i[n + 6] = e[6], i[n + 7] = e[7];
                    }
                    function n(t, i, n) {
                        r[0] = t, i[n] = e[7], i[n + 1] = e[6], i[n + 2] = e[5], i[n + 3] = e[4], i[n + 4] = e[3],
                        i[n + 5] = e[2], i[n + 6] = e[1], i[n + 7] = e[0];
                    }
                    function s(t, i) {
                        return e[0] = t[i], e[1] = t[i + 1], e[2] = t[i + 2], e[3] = t[i + 3], e[4] = t[i + 4],
                        e[5] = t[i + 5], e[6] = t[i + 6], e[7] = t[i + 7], r[0];
                    }
                    function u(t, i) {
                        return e[7] = t[i], e[6] = t[i + 1], e[5] = t[i + 2], e[4] = t[i + 3], e[3] = t[i + 4],
                        e[2] = t[i + 5], e[1] = t[i + 6], e[0] = t[i + 7], r[0];
                    }
                    o.writeDoubleLE = t ? i : n, o.writeDoubleBE = t ? n : i, o.readDoubleLE = t ? s : u,
                    o.readDoubleBE = t ? u : s;
                }() : function() {
                    function t(t, i, n, r, e, s) {
                        var u = r < 0 ? 1 : 0;
                        if (u && (r = -r), 0 === r) t(0, e, s + i), t(0 < 1 / r ? 0 : 2147483648, e, s + n); else if (isNaN(r)) t(0, e, s + i),
                        t(2146959360, e, s + n); else if (17976931348623157e292 < r) t(0, e, s + i), t((u << 31 | 2146435072) >>> 0, e, s + n); else {
                            var o;
                            if (r < 22250738585072014e-324) t((o = r / 5e-324) >>> 0, e, s + i), t((u << 31 | o / 4294967296) >>> 0, e, s + n); else {
                                var f = Math.floor(Math.log(r) / Math.LN2);
                                1024 === f && (f = 1023), t(4503599627370496 * (o = r * Math.pow(2, -f)) >>> 0, e, s + i),
                                t((u << 31 | f + 1023 << 20 | 1048576 * o & 1048575) >>> 0, e, s + n);
                            }
                        }
                    }
                    function i(t, i, n, r, e) {
                        var s = t(r, e + i), u = t(r, e + n), o = 2 * (u >> 31) + 1, f = u >>> 20 & 2047, h = 4294967296 * (1048575 & u) + s;
                        return 2047 === f ? h ? NaN : o * (1 / 0) : 0 === f ? 5e-324 * o * h : o * Math.pow(2, f - 1075) * (h + 4503599627370496);
                    }
                    o.writeDoubleLE = t.bind(null, r, 0, 4), o.writeDoubleBE = t.bind(null, e, 4, 0),
                    o.readDoubleLE = i.bind(null, s, 0, 4), o.readDoubleBE = i.bind(null, u, 4, 0);
                }(), o;
            }
            function r(t, i, n) {
                i[n] = 255 & t, i[n + 1] = t >>> 8 & 255, i[n + 2] = t >>> 16 & 255, i[n + 3] = t >>> 24;
            }
            function e(t, i, n) {
                i[n] = t >>> 24, i[n + 1] = t >>> 16 & 255, i[n + 2] = t >>> 8 & 255, i[n + 3] = 255 & t;
            }
            function s(t, i) {
                return (t[i] | t[i + 1] << 8 | t[i + 2] << 16 | t[i + 3] << 24) >>> 0;
            }
            function u(t, i) {
                return (t[i] << 24 | t[i + 1] << 16 | t[i + 2] << 8 | t[i + 3]) >>> 0;
            }
            i.exports = n(n);
        }, {} ],
        7: [ function(t, i, n) {
            function r(t) {
                return null;
            }
            i.exports = r;
        }, {} ],
        8: [ function(t, i, n) {
            var r = n, s = r.isAbsolute = function(t) {
                return /^(?:\/|\w+:)/.test(t);
            }, e = r.normalize = function(t) {
                var i = (t = t.replace(/\\/g, "/").replace(/\/{2,}/g, "/")).split("/"), n = s(t), r = "";
                n && (r = i.shift() + "/");
                for (var e = 0; e < i.length; ) ".." === i[e] ? 0 < e && ".." !== i[e - 1] ? i.splice(--e, 2) : n ? i.splice(e, 1) : ++e : "." === i[e] ? i.splice(e, 1) : ++e;
                return r + i.join("/");
            };
            r.resolve = function(t, i, n) {
                return n || (i = e(i)), s(i) ? i : (n || (t = e(t)), (t = t.replace(/(?:\/|^)[^/]+$/, "")).length ? e(t + "/" + i) : i);
            };
        }, {} ],
        9: [ function(t, i) {
            i.exports = function(n, r, t) {
                var e = t || 8192, s = e >>> 1, u = null, o = e;
                return function(t) {
                    if (t < 1 || s < t) return n(t);
                    e < o + t && (u = n(e), o = 0);
                    var i = r.call(u, o, o += t);
                    return 7 & o && (o = 1 + (7 | o)), i;
                };
            };
        }, {} ],
        10: [ function(t, i, n) {
            var r = n;
            r.length = function(t) {
                for (var i = 0, n = 0, r = 0; r < t.length; ++r) (n = t.charCodeAt(r)) < 128 ? i += 1 : n < 2048 ? i += 2 : 55296 == (64512 & n) && 56320 == (64512 & t.charCodeAt(r + 1)) ? (++r,
                i += 4) : i += 3;
                return i;
            }, r.read = function(t, i, n) {
                if (n - i < 1) return "";
                for (var r, e = null, s = [], u = 0; i < n; ) (r = t[i++]) < 128 ? s[u++] = r : 191 < r && r < 224 ? s[u++] = (31 & r) << 6 | 63 & t[i++] : 239 < r && r < 365 ? (r = ((7 & r) << 18 | (63 & t[i++]) << 12 | (63 & t[i++]) << 6 | 63 & t[i++]) - 65536,
                s[u++] = 55296 + (r >> 10), s[u++] = 56320 + (1023 & r)) : s[u++] = (15 & r) << 12 | (63 & t[i++]) << 6 | 63 & t[i++],
                8191 < u && ((e || (e = [])).push(String.fromCharCode.apply(String, s)), u = 0);
                return e ? (u && e.push(String.fromCharCode.apply(String, s.slice(0, u))), e.join("")) : String.fromCharCode.apply(String, s.slice(0, u));
            }, r.write = function(t, i, n) {
                for (var r, e, s = n, u = 0; u < t.length; ++u) (r = t.charCodeAt(u)) < 128 ? i[n++] = r : (r < 2048 ? i[n++] = r >> 6 | 192 : (55296 == (64512 & r) && 56320 == (64512 & (e = t.charCodeAt(u + 1))) ? (r = 65536 + ((1023 & r) << 10) + (1023 & e),
                ++u, i[n++] = r >> 18 | 240, i[n++] = r >> 12 & 63 | 128) : i[n++] = r >> 12 | 224,
                i[n++] = r >> 6 & 63 | 128), i[n++] = 63 & r | 128);
                return n - s;
            };
        }, {} ],
        11: [ function(t, i, n) {
            var r = n, l = t(14), v = t(33);
            function u(t, i, n, r) {
                if (i.resolvedType) if (i.resolvedType instanceof l) {
                    t("switch(d%s){", r);
                    for (var e = i.resolvedType.values, s = Object.keys(e), u = 0; u < s.length; ++u) i.repeated && e[s[u]] === i.typeDefault && t("default:"),
                    t("case%j:", s[u])("case %i:", e[s[u]])("m%s=%j", r, e[s[u]])("break");
                    t("}");
                } else t('if(typeof d%s!=="object")', r)("throw TypeError(%j)", i.fullName + ": object expected")("m%s=types[%i].fromObject(d%s)", r, n, r); else {
                    var o = !1;
                    switch (i.type) {
                      case "double":
                      case "float":
                        t("m%s=Number(d%s)", r, r);
                        break;

                      case "uint32":
                      case "fixed32":
                        t("m%s=d%s>>>0", r, r);
                        break;

                      case "int32":
                      case "sint32":
                      case "sfixed32":
                        t("m%s=d%s|0", r, r);
                        break;

                      case "uint64":
                        o = !0;

                      case "int64":
                      case "sint64":
                      case "fixed64":
                      case "sfixed64":
                        t("if(util.Long)")("(m%s=util.Long.fromValue(d%s)).unsigned=%j", r, r, o)('else if(typeof d%s==="string")', r)("m%s=parseInt(d%s,10)", r, r)('else if(typeof d%s==="number")', r)("m%s=d%s", r, r)('else if(typeof d%s==="object")', r)("m%s=new util.LongBits(d%s.low>>>0,d%s.high>>>0).toNumber(%s)", r, r, r, o ? "true" : "");
                        break;

                      case "bytes":
                        t('if(typeof d%s==="string")', r)("util.base64.decode(d%s,m%s=util.newBuffer(util.base64.length(d%s)),0)", r, r, r)("else if(d%s.length)", r)("m%s=d%s", r, r);
                        break;

                      case "string":
                        t("m%s=String(d%s)", r, r);
                        break;

                      case "bool":
                        t("m%s=Boolean(d%s)", r, r);
                    }
                }
                return t;
            }
            function d(t, i, n, r) {
                if (i.resolvedType) i.resolvedType instanceof l ? t("d%s=o.enums===String?types[%i].values[m%s]:m%s", r, n, r, r) : t("d%s=types[%i].toObject(m%s,o)", r, n, r); else {
                    var e = !1;
                    switch (i.type) {
                      case "double":
                      case "float":
                        t("d%s=o.json&&!isFinite(m%s)?String(m%s):m%s", r, r, r, r);
                        break;

                      case "uint64":
                        e = !0;

                      case "int64":
                      case "sint64":
                      case "fixed64":
                      case "sfixed64":
                        t('if(typeof m%s==="number")', r)("d%s=o.longs===String?String(m%s):m%s", r, r, r)("else")("d%s=o.longs===String?util.Long.prototype.toString.call(m%s):o.longs===Number?new util.LongBits(m%s.low>>>0,m%s.high>>>0).toNumber(%s):m%s", r, r, r, r, e ? "true" : "", r);
                        break;

                      case "bytes":
                        t("d%s=o.bytes===String?util.base64.encode(m%s,0,m%s.length):o.bytes===Array?Array.prototype.slice.call(m%s):m%s", r, r, r, r, r);
                        break;

                      default:
                        t("d%s=m%s", r, r);
                    }
                }
                return t;
            }
            r.fromObject = function(t) {
                var i = t.fieldsArray, n = v.codegen([ "d" ], t.name + "$fromObject")("if(d instanceof this.ctor)")("return d");
                if (!i.length) return n("return new this.ctor");
                n("var m=new this.ctor");
                for (var r = 0; r < i.length; ++r) {
                    var e = i[r].resolve(), s = v.safeProp(e.name);
                    e.map ? (n("if(d%s){", s)('if(typeof d%s!=="object")', s)("throw TypeError(%j)", e.fullName + ": object expected")("m%s={}", s)("for(var ks=Object.keys(d%s),i=0;i<ks.length;++i){", s),
                    u(n, e, r, s + "[ks[i]]")("}")("}")) : e.repeated ? (n("if(d%s){", s)("if(!Array.isArray(d%s))", s)("throw TypeError(%j)", e.fullName + ": array expected")("m%s=[]", s)("for(var i=0;i<d%s.length;++i){", s),
                    u(n, e, r, s + "[i]")("}")("}")) : (e.resolvedType instanceof l || n("if(d%s!=null){", s),
                    u(n, e, r, s), e.resolvedType instanceof l || n("}"));
                }
                return n("return m");
            }, r.toObject = function(t) {
                var i = t.fieldsArray.slice().sort(v.compareFieldsById);
                if (!i.length) return v.codegen()("return {}");
                for (var n = v.codegen([ "m", "o" ], t.name + "$toObject")("if(!o)")("o={}")("var d={}"), r = [], e = [], s = [], u = 0; u < i.length; ++u) i[u].partOf || (i[u].resolve().repeated ? r : i[u].map ? e : s).push(i[u]);
                if (r.length) {
                    for (n("if(o.arrays||o.defaults){"), u = 0; u < r.length; ++u) n("d%s=[]", v.safeProp(r[u].name));
                    n("}");
                }
                if (e.length) {
                    for (n("if(o.objects||o.defaults){"), u = 0; u < e.length; ++u) n("d%s={}", v.safeProp(e[u].name));
                    n("}");
                }
                if (s.length) {
                    for (n("if(o.defaults){"), u = 0; u < s.length; ++u) {
                        var o = s[u], f = v.safeProp(o.name);
                        if (o.resolvedType instanceof l) n("d%s=o.enums===String?%j:%j", f, o.resolvedType.valuesById[o.typeDefault], o.typeDefault); else if (o.long) n("if(util.Long){")("var n=new util.Long(%i,%i,%j)", o.typeDefault.low, o.typeDefault.high, o.typeDefault.unsigned)("d%s=o.longs===String?n.toString():o.longs===Number?n.toNumber():n", f)("}else")("d%s=o.longs===String?%j:%i", f, o.typeDefault.toString(), o.typeDefault.toNumber()); else if (o.bytes) {
                            var h = "[" + Array.prototype.slice.call(o.typeDefault).join(",") + "]";
                            n("if(o.bytes===String)d%s=%j", f, String.fromCharCode.apply(String, o.typeDefault))("else{")("d%s=%s", f, h)("if(o.bytes!==Array)d%s=util.newBuffer(d%s)", f, f)("}");
                        } else n("d%s=%j", f, o.typeDefault);
                    }
                    n("}");
                }
                var c = !1;
                for (u = 0; u < i.length; ++u) {
                    o = i[u];
                    var a = t.i.indexOf(o);
                    f = v.safeProp(o.name);
                    o.map ? (c || (c = !0, n("var ks2")), n("if(m%s&&(ks2=Object.keys(m%s)).length){", f, f)("d%s={}", f)("for(var j=0;j<ks2.length;++j){"),
                    d(n, o, a, f + "[ks2[j]]")("}")) : o.repeated ? (n("if(m%s&&m%s.length){", f, f)("d%s=[]", f)("for(var j=0;j<m%s.length;++j){", f),
                    d(n, o, a, f + "[j]")("}")) : (n("if(m%s!=null&&m.hasOwnProperty(%j)){", f, o.name),
                    d(n, o, a, f), o.partOf && n("if(o.oneofs)")("d%s=%j", v.safeProp(o.partOf.name), o.name)),
                    n("}");
                }
                return n("return d");
            };
        }, {
            14: 14,
            33: 33
        } ],
        12: [ function(t, i) {
            i.exports = function(t) {
                var i = h.codegen([ "r", "l" ], t.name + "$decode")("if(!(r instanceof Reader))")("r=Reader.create(r)")("var c=l===undefined?r.len:r.pos+l,m=new this.ctor" + (t.fieldsArray.filter(function(t) {
                    return t.map;
                }).length ? ",k" : ""))("while(r.pos<c){")("var t=r.uint32()");
                t.group && i("if((t&7)===4)")("break");
                i("switch(t>>>3){");
                for (var n = 0; n < t.fieldsArray.length; ++n) {
                    var r = t.i[n].resolve(), e = r.resolvedType instanceof o ? "int32" : r.type, s = "m" + h.safeProp(r.name);
                    i("case %i:", r.id), r.map ? (i("r.skip().pos++")("if(%s===util.emptyObject)", s)("%s={}", s)("k=r.%s()", r.keyType)("r.pos++"),
                    f.long[r.keyType] !== g ? f.basic[e] === g ? i('%s[typeof k==="object"?util.longToHash(k):k]=types[%i].decode(r,r.uint32())', s, n) : i('%s[typeof k==="object"?util.longToHash(k):k]=r.%s()', s, e) : f.basic[e] === g ? i("%s[k]=types[%i].decode(r,r.uint32())", s, n) : i("%s[k]=r.%s()", s, e)) : r.repeated ? (i("if(!(%s&&%s.length))", s, s)("%s=[]", s),
                    f.packed[e] !== g && i("if((t&7)===2){")("var c2=r.uint32()+r.pos")("while(r.pos<c2)")("%s.push(r.%s())", s, e)("}else"),
                    f.basic[e] === g ? i(r.resolvedType.group ? "%s.push(types[%i].decode(r))" : "%s.push(types[%i].decode(r,r.uint32()))", s, n) : i("%s.push(r.%s())", s, e)) : f.basic[e] === g ? i(r.resolvedType.group ? "%s=types[%i].decode(r)" : "%s=types[%i].decode(r,r.uint32())", s, n) : i("%s=r.%s()", s, e),
                    i("break");
                }
                for (i("default:")("r.skipType(t&7)")("break")("}")("}"), n = 0; n < t.i.length; ++n) {
                    var u = t.i[n];
                    u.required && i("if(!m.hasOwnProperty(%j))", u.name)("throw util.ProtocolError(%j,{instance:m})", "missing required '" + u.name + "'");
                }
                return i("return m");
            };
            var o = t(14), f = t(32), h = t(33);
        }, {
            14: 14,
            32: 32,
            33: 33
        } ],
        13: [ function(t, i) {
            i.exports = function(t) {
                for (var i, n = a.codegen([ "m", "w" ], t.name + "$encode")("if(!w)")("w=Writer.create()"), r = t.fieldsArray.slice().sort(a.compareFieldsById), e = 0; e < r.length; ++e) {
                    var s = r[e].resolve(), u = t.i.indexOf(s), o = s.resolvedType instanceof h ? "int32" : s.type, f = c.basic[o];
                    i = "m" + a.safeProp(s.name), s.map ? (n("if(%s!=null&&m.hasOwnProperty(%j)){", i, s.name)("for(var ks=Object.keys(%s),i=0;i<ks.length;++i){", i)("w.uint32(%i).fork().uint32(%i).%s(ks[i])", (s.id << 3 | 2) >>> 0, 8 | c.mapKey[s.keyType], s.keyType),
                    f === g ? n("types[%i].encode(%s[ks[i]],w.uint32(18).fork()).ldelim().ldelim()", u, i) : n(".uint32(%i).%s(%s[ks[i]]).ldelim()", 16 | f, o, i),
                    n("}")("}")) : s.repeated ? (n("if(%s!=null&&%s.length){", i, i), s.packed && c.packed[o] !== g ? n("w.uint32(%i).fork()", (s.id << 3 | 2) >>> 0)("for(var i=0;i<%s.length;++i)", i)("w.%s(%s[i])", o, i)("w.ldelim()") : (n("for(var i=0;i<%s.length;++i)", i),
                    f === g ? l(n, s, u, i + "[i]") : n("w.uint32(%i).%s(%s[i])", (s.id << 3 | f) >>> 0, o, i)),
                    n("}")) : (s.optional && n("if(%s!=null&&m.hasOwnProperty(%j))", i, s.name), f === g ? l(n, s, u, i) : n("w.uint32(%i).%s(%s)", (s.id << 3 | f) >>> 0, o, i));
                }
                return n("return w");
            };
            var h = t(14), c = t(32), a = t(33);
            function l(t, i, n, r) {
                return i.resolvedType.group ? t("types[%i].encode(%s,w.uint32(%i)).uint32(%i)", n, r, (i.id << 3 | 3) >>> 0, (i.id << 3 | 4) >>> 0) : t("types[%i].encode(%s,w.uint32(%i).fork()).ldelim()", n, r, (i.id << 3 | 2) >>> 0);
            }
        }, {
            14: 14,
            32: 32,
            33: 33
        } ],
        14: [ function(t, i) {
            i.exports = e;
            var o = t(22);
            ((e.prototype = Object.create(o.prototype)).constructor = e).className = "Enum";
            var n = t(21), r = t(33);
            function e(t, i, n, r, e) {
                if (o.call(this, t, n), i && "object" != typeof i) throw TypeError("values must be an object");
                if (this.valuesById = {}, this.values = Object.create(this.valuesById), this.comment = r,
                this.comments = e || {}, this.reserved = g, i) for (var s = Object.keys(i), u = 0; u < s.length; ++u) "number" == typeof i[s[u]] && (this.valuesById[this.values[s[u]] = i[s[u]]] = s[u]);
            }
            e.fromJSON = function(t, i) {
                var n = new e(t, i.values, i.options, i.comment, i.comments);
                return n.reserved = i.reserved, n;
            }, e.prototype.toJSON = function(t) {
                var i = !!t && !!t.keepComments;
                return r.toObject([ "options", this.options, "values", this.values, "reserved", this.reserved && this.reserved.length ? this.reserved : g, "comment", i ? this.comment : g, "comments", i ? this.comments : g ]);
            }, e.prototype.add = function(t, i, n) {
                if (!r.isString(t)) throw TypeError("name must be a string");
                if (!r.isInteger(i)) throw TypeError("id must be an integer");
                if (this.values[t] !== g) throw Error("duplicate name '" + t + "' in " + this);
                if (this.isReservedId(i)) throw Error("id " + i + " is reserved in " + this);
                if (this.isReservedName(t)) throw Error("name '" + t + "' is reserved in " + this);
                if (this.valuesById[i] !== g) {
                    if (!this.options || !this.options.allow_alias) throw Error("duplicate id " + i + " in " + this);
                    this.values[t] = i;
                } else this.valuesById[this.values[t] = i] = t;
                return this.comments[t] = n || null, this;
            }, e.prototype.remove = function(t) {
                if (!r.isString(t)) throw TypeError("name must be a string");
                var i = this.values[t];
                if (null == i) throw Error("name '" + t + "' does not exist in " + this);
                return delete this.valuesById[i], delete this.values[t], delete this.comments[t],
                this;
            }, e.prototype.isReservedId = function(t) {
                return n.isReservedId(this.reserved, t);
            }, e.prototype.isReservedName = function(t) {
                return n.isReservedName(this.reserved, t);
            };
        }, {
            21: 21,
            22: 22,
            33: 33
        } ],
        15: [ function(t, i) {
            i.exports = u;
            var o = t(22);
            ((u.prototype = Object.create(o.prototype)).constructor = u).className = "Field";
            var n, r = t(14), f = t(32), h = t(33), c = /^required|optional|repeated$/;
            function u(t, i, n, r, e, s, u) {
                if (h.isObject(r) ? (u = e, s = r, r = e = g) : h.isObject(e) && (u = s, s = e,
                e = g), o.call(this, t, s), !h.isInteger(i) || i < 0) throw TypeError("id must be a non-negative integer");
                if (!h.isString(n)) throw TypeError("type must be a string");
                if (r !== g && !c.test(r = r.toString().toLowerCase())) throw TypeError("rule must be a string rule");
                if (e !== g && !h.isString(e)) throw TypeError("extend must be a string");
                this.rule = r && "optional" !== r ? r : g, this.type = n, this.id = i, this.extend = e || g,
                this.required = "required" === r, this.optional = !this.required, this.repeated = "repeated" === r,
                this.map = !1, this.message = null, this.partOf = null, this.typeDefault = null,
                this.defaultValue = null, this.long = !!h.Long && f.long[n] !== g, this.bytes = "bytes" === n,
                this.resolvedType = null, this.extensionField = null, this.declaringField = null,
                this.n = null, this.comment = u;
            }
            u.fromJSON = function(t, i) {
                return new u(t, i.id, i.type, i.rule, i.extend, i.options, i.comment);
            }, Object.defineProperty(u.prototype, "packed", {
                get: function() {
                    return null === this.n && (this.n = !1 !== this.getOption("packed")), this.n;
                }
            }), u.prototype.setOption = function(t, i, n) {
                return "packed" === t && (this.n = null), o.prototype.setOption.call(this, t, i, n);
            }, u.prototype.toJSON = function(t) {
                var i = !!t && !!t.keepComments;
                return h.toObject([ "rule", "optional" !== this.rule && this.rule || g, "type", this.type, "id", this.id, "extend", this.extend, "options", this.options, "comment", i ? this.comment : g ]);
            }, u.prototype.resolve = function() {
                if (this.resolved) return this;
                if ((this.typeDefault = f.defaults[this.type]) === g && (this.resolvedType = (this.declaringField ? this.declaringField.parent : this.parent).lookupTypeOrEnum(this.type),
                this.resolvedType instanceof n ? this.typeDefault = null : this.typeDefault = this.resolvedType.values[Object.keys(this.resolvedType.values)[0]]),
                this.options && null != this.options.default && (this.typeDefault = this.options.default,
                this.resolvedType instanceof r && "string" == typeof this.typeDefault && (this.typeDefault = this.resolvedType.values[this.typeDefault])),
                this.options && (!0 !== this.options.packed && (this.options.packed === g || !this.resolvedType || this.resolvedType instanceof r) || delete this.options.packed,
                Object.keys(this.options).length || (this.options = g)), this.long) this.typeDefault = h.Long.fromNumber(this.typeDefault, "u" === this.type.charAt(0)),
                Object.freeze && Object.freeze(this.typeDefault); else if (this.bytes && "string" == typeof this.typeDefault) {
                    var t;
                    h.base64.test(this.typeDefault) ? h.base64.decode(this.typeDefault, t = h.newBuffer(h.base64.length(this.typeDefault)), 0) : h.utf8.write(this.typeDefault, t = h.newBuffer(h.utf8.length(this.typeDefault)), 0),
                    this.typeDefault = t;
                }
                return this.map ? this.defaultValue = h.emptyObject : this.repeated ? this.defaultValue = h.emptyArray : this.defaultValue = this.typeDefault,
                this.parent instanceof n && (this.parent.ctor.prototype[this.name] = this.defaultValue),
                o.prototype.resolve.call(this);
            }, u.d = function(n, r, e, s) {
                return "function" == typeof r ? r = h.decorateType(r).name : r && "object" == typeof r && (r = h.decorateEnum(r).name),
                function(t, i) {
                    h.decorateType(t.constructor).add(new u(i, n, r, e, {
                        default: s
                    }));
                };
            }, u.r = function(t) {
                n = t;
            };
        }, {
            14: 14,
            22: 22,
            32: 32,
            33: 33
        } ],
        16: [ function(t, i) {
            var r = i.exports = t(17);
            r.build = "light", r.load = function(t, i, n) {
                return "function" == typeof i ? (n = i, i = new r.Root()) : i || (i = new r.Root()),
                i.load(t, n);
            }, r.loadSync = function(t, i) {
                return i || (i = new r.Root()), i.loadSync(t);
            }, r.encoder = t(13), r.decoder = t(12), r.verifier = t(36), r.converter = t(11),
            r.ReflectionObject = t(22), r.Namespace = t(21), r.Root = t(26), r.Enum = t(14),
            r.Type = t(31), r.Field = t(15), r.OneOf = t(23), r.MapField = t(18), r.Service = t(30),
            r.Method = t(20), r.Message = t(19), r.wrappers = t(37), r.types = t(32), r.util = t(33),
            r.ReflectionObject.r(r.Root), r.Namespace.r(r.Type, r.Service, r.Enum), r.Root.r(r.Type),
            r.Field.r(r.Type);
        }, {
            11: 11,
            12: 12,
            13: 13,
            14: 14,
            15: 15,
            17: 17,
            18: 18,
            19: 19,
            20: 20,
            21: 21,
            22: 22,
            23: 23,
            26: 26,
            30: 30,
            31: 31,
            32: 32,
            33: 33,
            36: 36,
            37: 37
        } ],
        17: [ function(t, i, n) {
            var r = n;
            function e() {
                r.util.Long = require('Long');
                r.Reader.r(r.BufferReader), r.util.r();
            }
            r.build = "minimal", r.Writer = t(38), r.BufferWriter = t(39), r.Reader = t(24),
            r.BufferReader = t(25), r.util = t(35), r.rpc = t(28), r.roots = t(27), r.configure = e,
            r.Writer.r(r.BufferWriter), e();
        }, {
            24: 24,
            25: 25,
            27: 27,
            28: 28,
            35: 35,
            38: 38,
            39: 39
        } ],
        18: [ function(t, i) {
            i.exports = s;
            var u = t(15);
            ((s.prototype = Object.create(u.prototype)).constructor = s).className = "MapField";
            var n = t(32), o = t(33);
            function s(t, i, n, r, e, s) {
                if (u.call(this, t, i, r, g, g, e, s), !o.isString(n)) throw TypeError("keyType must be a string");
                this.keyType = n, this.resolvedKeyType = null, this.map = !0;
            }
            s.fromJSON = function(t, i) {
                return new s(t, i.id, i.keyType, i.type, i.options, i.comment);
            }, s.prototype.toJSON = function(t) {
                var i = !!t && !!t.keepComments;
                return o.toObject([ "keyType", this.keyType, "type", this.type, "id", this.id, "extend", this.extend, "options", this.options, "comment", i ? this.comment : g ]);
            }, s.prototype.resolve = function() {
                if (this.resolved) return this;
                if (n.mapKey[this.keyType] === g) throw Error("invalid key type: " + this.keyType);
                return u.prototype.resolve.call(this);
            }, s.d = function(n, r, e) {
                return "function" == typeof e ? e = o.decorateType(e).name : e && "object" == typeof e && (e = o.decorateEnum(e).name),
                function(t, i) {
                    o.decorateType(t.constructor).add(new s(i, n, r, e));
                };
            };
        }, {
            15: 15,
            32: 32,
            33: 33
        } ],
        19: [ function(t, i) {
            i.exports = r;
            var n = t(35);
            function r(t) {
                if (t) for (var i = Object.keys(t), n = 0; n < i.length; ++n) this[i[n]] = t[i[n]];
            }
            r.create = function(t) {
                return this.$type.create(t);
            }, r.encode = function(t, i) {
                return this.$type.encode(t, i);
            }, r.encodeDelimited = function(t, i) {
                return this.$type.encodeDelimited(t, i);
            }, r.decode = function(t) {
                return this.$type.decode(t);
            }, r.decodeDelimited = function(t) {
                return this.$type.decodeDelimited(t);
            }, r.verify = function(t) {
                return this.$type.verify(t);
            }, r.fromObject = function(t) {
                return this.$type.fromObject(t);
            }, r.toObject = function(t, i) {
                return this.$type.toObject(t, i);
            }, r.prototype.toJSON = function() {
                return this.$type.toObject(this, n.toJSONOptions);
            };
        }, {
            35: 35
        } ],
        20: [ function(t, i) {
            i.exports = n;
            var f = t(22);
            ((n.prototype = Object.create(f.prototype)).constructor = n).className = "Method";
            var h = t(33);
            function n(t, i, n, r, e, s, u, o) {
                if (h.isObject(e) ? (u = e, e = s = g) : h.isObject(s) && (u = s, s = g), i !== g && !h.isString(i)) throw TypeError("type must be a string");
                if (!h.isString(n)) throw TypeError("requestType must be a string");
                if (!h.isString(r)) throw TypeError("responseType must be a string");
                f.call(this, t, u), this.type = i || "rpc", this.requestType = n, this.requestStream = !!e || g,
                this.responseType = r, this.responseStream = !!s || g, this.resolvedRequestType = null,
                this.resolvedResponseType = null, this.comment = o;
            }
            n.fromJSON = function(t, i) {
                return new n(t, i.type, i.requestType, i.responseType, i.requestStream, i.responseStream, i.options, i.comment);
            }, n.prototype.toJSON = function(t) {
                var i = !!t && !!t.keepComments;
                return h.toObject([ "type", "rpc" !== this.type && this.type || g, "requestType", this.requestType, "requestStream", this.requestStream, "responseType", this.responseType, "responseStream", this.responseStream, "options", this.options, "comment", i ? this.comment : g ]);
            }, n.prototype.resolve = function() {
                return this.resolved ? this : (this.resolvedRequestType = this.parent.lookupType(this.requestType),
                this.resolvedResponseType = this.parent.lookupType(this.responseType), f.prototype.resolve.call(this));
            };
        }, {
            22: 22,
            33: 33
        } ],
        21: [ function(t, i) {
            i.exports = h;
            var n = t(22);
            ((h.prototype = Object.create(n.prototype)).constructor = h).className = "Namespace";
            var e, s, u, o = t(15), f = t(33);
            function r(t, i) {
                if (!t || !t.length) return g;
                for (var n = {}, r = 0; r < t.length; ++r) n[t[r].name] = t[r].toJSON(i);
                return n;
            }
            function h(t, i) {
                n.call(this, t, i), this.nested = g, this.e = null;
            }
            function c(t) {
                return t.e = null, t;
            }
            h.fromJSON = function(t, i) {
                return new h(t, i.options).addJSON(i.nested);
            }, h.arrayToJSON = r, h.isReservedId = function(t, i) {
                if (t) for (var n = 0; n < t.length; ++n) if ("string" != typeof t[n] && t[n][0] <= i && t[n][1] >= i) return !0;
                return !1;
            }, h.isReservedName = function(t, i) {
                if (t) for (var n = 0; n < t.length; ++n) if (t[n] === i) return !0;
                return !1;
            }, Object.defineProperty(h.prototype, "nestedArray", {
                get: function() {
                    return this.e || (this.e = f.toArray(this.nested));
                }
            }), h.prototype.toJSON = function(t) {
                return f.toObject([ "options", this.options, "nested", r(this.nestedArray, t) ]);
            }, h.prototype.addJSON = function(t) {
                if (t) for (var i, n = Object.keys(t), r = 0; r < n.length; ++r) i = t[n[r]], this.add((i.fields !== g ? e.fromJSON : i.values !== g ? u.fromJSON : i.methods !== g ? s.fromJSON : i.id !== g ? o.fromJSON : h.fromJSON)(n[r], i));
                return this;
            }, h.prototype.get = function(t) {
                return this.nested && this.nested[t] || null;
            }, h.prototype.getEnum = function(t) {
                if (this.nested && this.nested[t] instanceof u) return this.nested[t].values;
                throw Error("no such enum: " + t);
            }, h.prototype.add = function(t) {
                if (!(t instanceof o && t.extend !== g || t instanceof e || t instanceof u || t instanceof s || t instanceof h)) throw TypeError("object must be a valid nested object");
                if (this.nested) {
                    var i = this.get(t.name);
                    if (i) {
                        if (!(i instanceof h && t instanceof h) || i instanceof e || i instanceof s) throw Error("duplicate name '" + t.name + "' in " + this);
                        for (var n = i.nestedArray, r = 0; r < n.length; ++r) t.add(n[r]);
                        this.remove(i), this.nested || (this.nested = {}), t.setOptions(i.options, !0);
                    }
                } else this.nested = {};
                return (this.nested[t.name] = t).onAdd(this), c(this);
            }, h.prototype.remove = function(t) {
                if (!(t instanceof n)) throw TypeError("object must be a ReflectionObject");
                if (t.parent !== this) throw Error(t + " is not a member of " + this);
                return delete this.nested[t.name], Object.keys(this.nested).length || (this.nested = g),
                t.onRemove(this), c(this);
            }, h.prototype.define = function(t, i) {
                if (f.isString(t)) t = t.split("."); else if (!Array.isArray(t)) throw TypeError("illegal path");
                if (t && t.length && "" === t[0]) throw Error("path must be relative");
                for (var n = this; 0 < t.length; ) {
                    var r = t.shift();
                    if (n.nested && n.nested[r]) {
                        if (!((n = n.nested[r]) instanceof h)) throw Error("path conflicts with non-namespace objects");
                    } else n.add(n = new h(r));
                }
                return i && n.addJSON(i), n;
            }, h.prototype.resolveAll = function() {
                for (var t = this.nestedArray, i = 0; i < t.length; ) t[i] instanceof h ? t[i++].resolveAll() : t[i++].resolve();
                return this.resolve();
            }, h.prototype.lookup = function(t, i, n) {
                if ("boolean" == typeof i ? (n = i, i = g) : i && !Array.isArray(i) && (i = [ i ]),
                f.isString(t) && t.length) {
                    if ("." === t) return this.root;
                    t = t.split(".");
                } else if (!t.length) return this;
                if ("" === t[0]) return this.root.lookup(t.slice(1), i);
                var r = this.get(t[0]);
                if (r) {
                    if (1 === t.length) {
                        if (!i || -1 < i.indexOf(r.constructor)) return r;
                    } else if (r instanceof h && (r = r.lookup(t.slice(1), i, !0))) return r;
                } else for (var e = 0; e < this.nestedArray.length; ++e) if (this.e[e] instanceof h && (r = this.e[e].lookup(t, i, !0))) return r;
                return null === this.parent || n ? null : this.parent.lookup(t, i);
            }, h.prototype.lookupType = function(t) {
                var i = this.lookup(t, [ e ]);
                if (!i) throw Error("no such type: " + t);
                return i;
            }, h.prototype.lookupEnum = function(t) {
                var i = this.lookup(t, [ u ]);
                if (!i) throw Error("no such Enum '" + t + "' in " + this);
                return i;
            }, h.prototype.lookupTypeOrEnum = function(t) {
                var i = this.lookup(t, [ e, u ]);
                if (!i) throw Error("no such Type or Enum '" + t + "' in " + this);
                return i;
            }, h.prototype.lookupService = function(t) {
                var i = this.lookup(t, [ s ]);
                if (!i) throw Error("no such Service '" + t + "' in " + this);
                return i;
            }, h.r = function(t, i, n) {
                e = t, s = i, u = n;
            };
        }, {
            15: 15,
            22: 22,
            33: 33
        } ],
        22: [ function(t, i) {
            (i.exports = e).className = "ReflectionObject";
            var n, r = t(33);
            function e(t, i) {
                if (!r.isString(t)) throw TypeError("name must be a string");
                if (i && !r.isObject(i)) throw TypeError("options must be an object");
                this.options = i, this.name = t, this.parent = null, this.resolved = !1, this.comment = null,
                this.filename = null;
            }
            Object.defineProperties(e.prototype, {
                root: {
                    get: function() {
                        for (var t = this; null !== t.parent; ) t = t.parent;
                        return t;
                    }
                },
                fullName: {
                    get: function() {
                        for (var t = [ this.name ], i = this.parent; i; ) t.unshift(i.name), i = i.parent;
                        return t.join(".");
                    }
                }
            }), e.prototype.toJSON = function() {
                throw Error();
            }, e.prototype.onAdd = function(t) {
                this.parent && this.parent !== t && this.parent.remove(this), this.parent = t, this.resolved = !1;
                var i = t.root;
                i instanceof n && i.u(this);
            }, e.prototype.onRemove = function(t) {
                var i = t.root;
                i instanceof n && i.o(this), this.parent = null, this.resolved = !1;
            }, e.prototype.resolve = function() {
                return this.resolved || this.root instanceof n && (this.resolved = !0), this;
            }, e.prototype.getOption = function(t) {
                return this.options ? this.options[t] : g;
            }, e.prototype.setOption = function(t, i, n) {
                return n && this.options && this.options[t] !== g || ((this.options || (this.options = {}))[t] = i),
                this;
            }, e.prototype.setOptions = function(t, i) {
                if (t) for (var n = Object.keys(t), r = 0; r < n.length; ++r) this.setOption(n[r], t[n[r]], i);
                return this;
            }, e.prototype.toString = function() {
                var t = this.constructor.className, i = this.fullName;
                return i.length ? t + " " + i : t;
            }, e.r = function(t) {
                n = t;
            };
        }, {
            33: 33
        } ],
        23: [ function(t, i) {
            i.exports = s;
            var e = t(22);
            ((s.prototype = Object.create(e.prototype)).constructor = s).className = "OneOf";
            var n = t(15), r = t(33);
            function s(t, i, n, r) {
                if (Array.isArray(i) || (n = i, i = g), e.call(this, t, n), i !== g && !Array.isArray(i)) throw TypeError("fieldNames must be an Array");
                this.oneof = i || [], this.fieldsArray = [], this.comment = r;
            }
            function u(t) {
                if (t.parent) for (var i = 0; i < t.fieldsArray.length; ++i) t.fieldsArray[i].parent || t.parent.add(t.fieldsArray[i]);
            }
            s.fromJSON = function(t, i) {
                return new s(t, i.oneof, i.options, i.comment);
            }, s.prototype.toJSON = function(t) {
                var i = !!t && !!t.keepComments;
                return r.toObject([ "options", this.options, "oneof", this.oneof, "comment", i ? this.comment : g ]);
            }, s.prototype.add = function(t) {
                if (!(t instanceof n)) throw TypeError("field must be a Field");
                return t.parent && t.parent !== this.parent && t.parent.remove(t), this.oneof.push(t.name),
                this.fieldsArray.push(t), u(t.partOf = this), this;
            }, s.prototype.remove = function(t) {
                if (!(t instanceof n)) throw TypeError("field must be a Field");
                var i = this.fieldsArray.indexOf(t);
                if (i < 0) throw Error(t + " is not a member of " + this);
                return this.fieldsArray.splice(i, 1), -1 < (i = this.oneof.indexOf(t.name)) && this.oneof.splice(i, 1),
                t.partOf = null, this;
            }, s.prototype.onAdd = function(t) {
                e.prototype.onAdd.call(this, t);
                for (var i = 0; i < this.oneof.length; ++i) {
                    var n = t.get(this.oneof[i]);
                    n && !n.partOf && (n.partOf = this).fieldsArray.push(n);
                }
                u(this);
            }, s.prototype.onRemove = function(t) {
                for (var i, n = 0; n < this.fieldsArray.length; ++n) (i = this.fieldsArray[n]).parent && i.parent.remove(i);
                e.prototype.onRemove.call(this, t);
            }, s.d = function() {
                for (var n = Array(arguments.length), t = 0; t < arguments.length; ) n[t] = arguments[t++];
                return function(t, i) {
                    r.decorateType(t.constructor).add(new s(i, n)), Object.defineProperty(t, i, {
                        get: r.oneOfGetter(n),
                        set: r.oneOfSetter(n)
                    });
                };
            };
        }, {
            15: 15,
            22: 22,
            33: 33
        } ],
        24: [ function(t, i) {
            i.exports = o;
            var n, r = t(35), e = r.LongBits, s = r.utf8;
            function u(t, i) {
                return RangeError("index out of range: " + t.pos + " + " + (i || 1) + " > " + t.len);
            }
            function o(t) {
                this.buf = t, this.pos = 0, this.len = t.length;
            }
            var f, h = "undefined" != typeof Uint8Array ? function(t) {
                if (t instanceof Uint8Array || Array.isArray(t)) return new o(t);
                throw Error("illegal buffer");
            } : function(t) {
                if (Array.isArray(t)) return new o(t);
                throw Error("illegal buffer");
            };
            function c() {
                var t = new e(0, 0), i = 0;
                if (!(4 < this.len - this.pos)) {
                    for (;i < 3; ++i) {
                        if (this.pos >= this.len) throw u(this);
                        if (t.lo = (t.lo | (127 & this.buf[this.pos]) << 7 * i) >>> 0, this.buf[this.pos++] < 128) return t;
                    }
                    return t.lo = (t.lo | (127 & this.buf[this.pos++]) << 7 * i) >>> 0, t;
                }
                for (;i < 4; ++i) if (t.lo = (t.lo | (127 & this.buf[this.pos]) << 7 * i) >>> 0,
                this.buf[this.pos++] < 128) return t;
                if (t.lo = (t.lo | (127 & this.buf[this.pos]) << 28) >>> 0, t.hi = (t.hi | (127 & this.buf[this.pos]) >> 4) >>> 0,
                this.buf[this.pos++] < 128) return t;
                if (i = 0, 4 < this.len - this.pos) {
                    for (;i < 5; ++i) if (t.hi = (t.hi | (127 & this.buf[this.pos]) << 7 * i + 3) >>> 0,
                    this.buf[this.pos++] < 128) return t;
                } else for (;i < 5; ++i) {
                    if (this.pos >= this.len) throw u(this);
                    if (t.hi = (t.hi | (127 & this.buf[this.pos]) << 7 * i + 3) >>> 0, this.buf[this.pos++] < 128) return t;
                }
                throw Error("invalid varint encoding");
            }
            function a(t, i) {
                return (t[i - 4] | t[i - 3] << 8 | t[i - 2] << 16 | t[i - 1] << 24) >>> 0;
            }
            function l() {
                if (this.pos + 8 > this.len) throw u(this, 8);
                return new e(a(this.buf, this.pos += 4), a(this.buf, this.pos += 4));
            }
            o.create = r.Buffer ? function(t) {
                return (o.create = function(t) {
                    return r.Buffer.isBuffer(t) ? new n(t) : h(t);
                })(t);
            } : h, o.prototype.f = r.Array.prototype.subarray || r.Array.prototype.slice, o.prototype.uint32 = (f = 4294967295,
            function() {
                if (f = (127 & this.buf[this.pos]) >>> 0, this.buf[this.pos++] < 128) return f;
                if (f = (f | (127 & this.buf[this.pos]) << 7) >>> 0, this.buf[this.pos++] < 128) return f;
                if (f = (f | (127 & this.buf[this.pos]) << 14) >>> 0, this.buf[this.pos++] < 128) return f;
                if (f = (f | (127 & this.buf[this.pos]) << 21) >>> 0, this.buf[this.pos++] < 128) return f;
                if (f = (f | (15 & this.buf[this.pos]) << 28) >>> 0, this.buf[this.pos++] < 128) return f;
                if ((this.pos += 5) > this.len) throw this.pos = this.len, u(this, 10);
                return f;
            }), o.prototype.int32 = function() {
                return 0 | this.uint32();
            }, o.prototype.sint32 = function() {
                var t = this.uint32();
                return t >>> 1 ^ -(1 & t) | 0;
            }, o.prototype.bool = function() {
                return 0 !== this.uint32();
            }, o.prototype.fixed32 = function() {
                if (this.pos + 4 > this.len) throw u(this, 4);
                return a(this.buf, this.pos += 4);
            }, o.prototype.sfixed32 = function() {
                if (this.pos + 4 > this.len) throw u(this, 4);
                return 0 | a(this.buf, this.pos += 4);
            }, o.prototype.float = function() {
                if (this.pos + 4 > this.len) throw u(this, 4);
                var t = r.float.readFloatLE(this.buf, this.pos);
                return this.pos += 4, t;
            }, o.prototype.double = function() {
                if (this.pos + 8 > this.len) throw u(this, 4);
                var t = r.float.readDoubleLE(this.buf, this.pos);
                return this.pos += 8, t;
            }, o.prototype.bytes = function() {
                var t = this.uint32(), i = this.pos, n = this.pos + t;
                if (n > this.len) throw u(this, t);
                return this.pos += t, Array.isArray(this.buf) ? this.buf.slice(i, n) : i === n ? new this.buf.constructor(0) : this.f.call(this.buf, i, n);
            }, o.prototype.string = function() {
                var t = this.bytes();
                return s.read(t, 0, t.length);
            }, o.prototype.skip = function(t) {
                if ("number" == typeof t) {
                    if (this.pos + t > this.len) throw u(this, t);
                    this.pos += t;
                } else do {
                    if (this.pos >= this.len) throw u(this);
                } while (128 & this.buf[this.pos++]);
                return this;
            }, o.prototype.skipType = function(t) {
                switch (t) {
                  case 0:
                    this.skip();
                    break;

                  case 1:
                    this.skip(8);
                    break;

                  case 2:
                    this.skip(this.uint32());
                    break;

                  case 3:
                    for (;4 != (t = 7 & this.uint32()); ) this.skipType(t);
                    break;

                  case 5:
                    this.skip(4);
                    break;

                  default:
                    throw Error("invalid wire type " + t + " at offset " + this.pos);
                }
                return this;
            }, o.r = function(t) {
                n = t;
                var i = r.Long ? "toLong" : "toNumber";
                r.merge(o.prototype, {
                    int64: function() {
                        return c.call(this)[i](!1);
                    },
                    uint64: function() {
                        return c.call(this)[i](!0);
                    },
                    sint64: function() {
                        return c.call(this).zzDecode()[i](!1);
                    },
                    fixed64: function() {
                        return l.call(this)[i](!0);
                    },
                    sfixed64: function() {
                        return l.call(this)[i](!1);
                    }
                });
            };
        }, {
            35: 35
        } ],
        25: [ function(t, i) {
            i.exports = e;
            var n = t(24);
            (e.prototype = Object.create(n.prototype)).constructor = e;
            var r = t(35);
            function e(t) {
                n.call(this, t);
            }
            r.Buffer && (e.prototype.f = r.Buffer.prototype.slice), e.prototype.string = function() {
                var t = this.uint32();
                return this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + t, this.len));
            };
        }, {
            24: 24,
            35: 35
        } ],
        26: [ function(t, i) {
            i.exports = n;
            var r = t(21);
            ((n.prototype = Object.create(r.prototype)).constructor = n).className = "Root";
            var e, v, d, s = t(15), u = t(14), o = t(23), b = t(33);
            function n(t) {
                r.call(this, "", t), this.deferred = [], this.files = [];
            }
            function y() {}
            n.fromJSON = function(t, i) {
                return i || (i = new n()), t.options && i.setOptions(t.options), i.addJSON(t.nested);
            }, n.prototype.resolvePath = b.path.resolve, n.prototype.load = function t(i, s, u) {
                "function" == typeof s && (u = s, s = g);
                var o = this;
                if (!u) return b.asPromise(t, o, i, s);
                var f = u === y;
                function h(t, i) {
                    if (u) {
                        var n = u;
                        if (u = null, f) throw t;
                        n(t, i);
                    }
                }
                function c(t, i) {
                    try {
                        if (b.isString(i) && "{" === i.charAt(0) && (i = JSON.parse(i)), b.isString(i)) {
                            v.filename = t;
                            var n, r = v(i, o, s), e = 0;
                            if (r.imports) for (;e < r.imports.length; ++e) (n = o.resolvePath(t, r.imports[e])) && a(n);
                            if (r.weakImports) for (e = 0; e < r.weakImports.length; ++e) (n = o.resolvePath(t, r.weakImports[e])) && a(n, !0);
                        } else o.setOptions(i.options).addJSON(i.nested);
                    } catch (t) {
                        h(t);
                    }
                    f || l || h(null, o);
                }
                function a(n, r) {
                    var t = n.lastIndexOf("google/protobuf/");
                    if (-1 < t) {
                        var i = n.substring(t);
                        i in d && (n = i);
                    }
                    if (!(-1 < o.files.indexOf(n))) if (o.files.push(n), n in d) f ? c(n, d[n]) : (++l,
                    setTimeout(function() {
                        --l, c(n, d[n]);
                    })); else if (f) {
                        var e;
                        try {
                            e = b.fs.readFileSync(n).toString("utf8");
                        } catch (t) {
                            return void (r || h(t));
                        }
                        c(n, e);
                    } else ++l, b.fetch(n, function(t, i) {
                        --l, u && (t ? r ? l || h(null, o) : h(t) : c(n, i));
                    });
                }
                var l = 0;
                b.isString(i) && (i = [ i ]);
                for (var n, r = 0; r < i.length; ++r) (n = o.resolvePath("", i[r])) && a(n);
                return f ? o : (l || h(null, o), g);
            }, n.prototype.loadSync = function(t, i) {
                if (!b.isNode) throw Error("not supported");
                return this.load(t, i, y);
            }, n.prototype.resolveAll = function() {
                if (this.deferred.length) throw Error("unresolvable extensions: " + this.deferred.map(function(t) {
                    return "'extend " + t.extend + "' in " + t.parent.fullName;
                }).join(", "));
                return r.prototype.resolveAll.call(this);
            };
            var f = /^[A-Z]/;
            function h(t, i) {
                var n = i.parent.lookup(i.extend);
                if (n) {
                    var r = new s(i.fullName, i.id, i.type, i.rule, g, i.options);
                    return (r.declaringField = i).extensionField = r, n.add(r), !0;
                }
                return !1;
            }
            n.prototype.u = function(t) {
                if (t instanceof s) t.extend === g || t.extensionField || h(0, t) || this.deferred.push(t); else if (t instanceof u) f.test(t.name) && (t.parent[t.name] = t.values); else if (!(t instanceof o)) {
                    if (t instanceof e) for (var i = 0; i < this.deferred.length; ) h(0, this.deferred[i]) ? this.deferred.splice(i, 1) : ++i;
                    for (var n = 0; n < t.nestedArray.length; ++n) this.u(t.e[n]);
                    f.test(t.name) && (t.parent[t.name] = t);
                }
            }, n.prototype.o = function(t) {
                if (t instanceof s) {
                    if (t.extend !== g) if (t.extensionField) t.extensionField.parent.remove(t.extensionField),
                    t.extensionField = null; else {
                        var i = this.deferred.indexOf(t);
                        -1 < i && this.deferred.splice(i, 1);
                    }
                } else if (t instanceof u) f.test(t.name) && delete t.parent[t.name]; else if (t instanceof r) {
                    for (var n = 0; n < t.nestedArray.length; ++n) this.o(t.e[n]);
                    f.test(t.name) && delete t.parent[t.name];
                }
            }, n.r = function(t, i, n) {
                e = t, v = i, d = n;
            };
        }, {
            14: 14,
            15: 15,
            21: 21,
            23: 23,
            33: 33
        } ],
        27: [ function(t, i) {
            i.exports = {};
        }, {} ],
        28: [ function(t, i, n) {
            n.Service = t(29);
        }, {
            29: 29
        } ],
        29: [ function(t, i) {
            i.exports = n;
            var o = t(35);
            function n(t, i, n) {
                if ("function" != typeof t) throw TypeError("rpcImpl must be a function");
                o.EventEmitter.call(this), this.rpcImpl = t, this.requestDelimited = !!i, this.responseDelimited = !!n;
            }
            ((n.prototype = Object.create(o.EventEmitter.prototype)).constructor = n).prototype.rpcCall = function t(n, i, r, e, s) {
                if (!e) throw TypeError("request must be specified");
                var u = this;
                if (!s) return o.asPromise(t, u, n, i, r, e);
                if (!u.rpcImpl) return setTimeout(function() {
                    s(Error("already ended"));
                }, 0), g;
                try {
                    return u.rpcImpl(n, i[u.requestDelimited ? "encodeDelimited" : "encode"](e).finish(), function(t, i) {
                        if (t) return u.emit("error", t, n), s(t);
                        if (null === i) return u.end(!0), g;
                        if (!(i instanceof r)) try {
                            i = r[u.responseDelimited ? "decodeDelimited" : "decode"](i);
                        } catch (t) {
                            return u.emit("error", t, n), s(t);
                        }
                        return u.emit("data", i, n), s(null, i);
                    });
                } catch (t) {
                    return u.emit("error", t, n), setTimeout(function() {
                        s(t);
                    }, 0), g;
                }
            }, n.prototype.end = function(t) {
                return this.rpcImpl && (t || this.rpcImpl(null, null, null), this.rpcImpl = null,
                this.emit("end").off()), this;
            };
        }, {
            35: 35
        } ],
        30: [ function(t, i) {
            i.exports = u;
            var r = t(21);
            ((u.prototype = Object.create(r.prototype)).constructor = u).className = "Service";
            var s = t(20), o = t(33), f = t(28);
            function u(t, i) {
                r.call(this, t, i), this.methods = {}, this.h = null;
            }
            function n(t) {
                return t.h = null, t;
            }
            u.fromJSON = function(t, i) {
                var n = new u(t, i.options);
                if (i.methods) for (var r = Object.keys(i.methods), e = 0; e < r.length; ++e) n.add(s.fromJSON(r[e], i.methods[r[e]]));
                return i.nested && n.addJSON(i.nested), n.comment = i.comment, n;
            }, u.prototype.toJSON = function(t) {
                var i = r.prototype.toJSON.call(this, t), n = !!t && !!t.keepComments;
                return o.toObject([ "options", i && i.options || g, "methods", r.arrayToJSON(this.methodsArray, t) || {}, "nested", i && i.nested || g, "comment", n ? this.comment : g ]);
            }, Object.defineProperty(u.prototype, "methodsArray", {
                get: function() {
                    return this.h || (this.h = o.toArray(this.methods));
                }
            }), u.prototype.get = function(t) {
                return this.methods[t] || r.prototype.get.call(this, t);
            }, u.prototype.resolveAll = function() {
                for (var t = this.methodsArray, i = 0; i < t.length; ++i) t[i].resolve();
                return r.prototype.resolve.call(this);
            }, u.prototype.add = function(t) {
                if (this.get(t.name)) throw Error("duplicate name '" + t.name + "' in " + this);
                return t instanceof s ? n((this.methods[t.name] = t).parent = this) : r.prototype.add.call(this, t);
            }, u.prototype.remove = function(t) {
                if (t instanceof s) {
                    if (this.methods[t.name] !== t) throw Error(t + " is not a member of " + this);
                    return delete this.methods[t.name], t.parent = null, n(this);
                }
                return r.prototype.remove.call(this, t);
            }, u.prototype.create = function(t, i, n) {
                for (var r, e = new f.Service(t, i, n), s = 0; s < this.methodsArray.length; ++s) {
                    var u = o.lcFirst((r = this.h[s]).resolve().name).replace(/[^$\w_]/g, "");
                    e[u] = o.codegen([ "r", "c" ], o.isReserved(u) ? u + "_" : u)("return this.rpcCall(m,q,s,r,c)")({
                        m: r,
                        q: r.resolvedRequestType.ctor,
                        s: r.resolvedResponseType.ctor
                    });
                }
                return e;
            };
        }, {
            20: 20,
            21: 21,
            28: 28,
            33: 33
        } ],
        31: [ function(t, i) {
            i.exports = w;
            var u = t(21);
            ((w.prototype = Object.create(u.prototype)).constructor = w).className = "Type";
            var o = t(14), f = t(23), h = t(15), c = t(18), a = t(30), e = t(19), s = t(24), l = t(38), v = t(33), d = t(13), b = t(12), y = t(36), p = t(11), m = t(37);
            function w(t, i) {
                u.call(this, t, i), this.fields = {}, this.oneofs = g, this.extensions = g, this.reserved = g,
                this.group = g, this.c = null, this.i = null, this.a = null, this.l = null;
            }
            function n(t) {
                return t.c = t.i = t.a = null, delete t.encode, delete t.decode, delete t.verify,
                t;
            }
            Object.defineProperties(w.prototype, {
                fieldsById: {
                    get: function() {
                        if (this.c) return this.c;
                        this.c = {};
                        for (var t = Object.keys(this.fields), i = 0; i < t.length; ++i) {
                            var n = this.fields[t[i]], r = n.id;
                            if (this.c[r]) throw Error("duplicate id " + r + " in " + this);
                            this.c[r] = n;
                        }
                        return this.c;
                    }
                },
                fieldsArray: {
                    get: function() {
                        return this.i || (this.i = v.toArray(this.fields));
                    }
                },
                oneofsArray: {
                    get: function() {
                        return this.a || (this.a = v.toArray(this.oneofs));
                    }
                },
                ctor: {
                    get: function() {
                        return this.l || (this.ctor = w.generateConstructor(this)());
                    },
                    set: function(t) {
                        var i = t.prototype;
                        i instanceof e || ((t.prototype = new e()).constructor = t, v.merge(t.prototype, i)),
                        t.$type = t.prototype.$type = this, v.merge(t, e, !0), this.l = t;
                        for (var n = 0; n < this.fieldsArray.length; ++n) this.i[n].resolve();
                        var r = {};
                        for (n = 0; n < this.oneofsArray.length; ++n) r[this.a[n].resolve().name] = {
                            get: v.oneOfGetter(this.a[n].oneof),
                            set: v.oneOfSetter(this.a[n].oneof)
                        };
                        n && Object.defineProperties(t.prototype, r);
                    }
                }
            }), w.generateConstructor = function(t) {
                for (var i, n = v.codegen([ "p" ], t.name), r = 0; r < t.fieldsArray.length; ++r) (i = t.i[r]).map ? n("this%s={}", v.safeProp(i.name)) : i.repeated && n("this%s=[]", v.safeProp(i.name));
                return n("if(p)for(var ks=Object.keys(p),i=0;i<ks.length;++i)if(p[ks[i]]!=null)")("this[ks[i]]=p[ks[i]]");
            }, w.fromJSON = function(t, i) {
                var n = new w(t, i.options);
                n.extensions = i.extensions, n.reserved = i.reserved;
                for (var r = Object.keys(i.fields), e = 0; e < r.length; ++e) n.add((void 0 !== i.fields[r[e]].keyType ? c.fromJSON : h.fromJSON)(r[e], i.fields[r[e]]));
                if (i.oneofs) for (r = Object.keys(i.oneofs), e = 0; e < r.length; ++e) n.add(f.fromJSON(r[e], i.oneofs[r[e]]));
                if (i.nested) for (r = Object.keys(i.nested), e = 0; e < r.length; ++e) {
                    var s = i.nested[r[e]];
                    n.add((s.id !== g ? h.fromJSON : s.fields !== g ? w.fromJSON : s.values !== g ? o.fromJSON : s.methods !== g ? a.fromJSON : u.fromJSON)(r[e], s));
                }
                return i.extensions && i.extensions.length && (n.extensions = i.extensions), i.reserved && i.reserved.length && (n.reserved = i.reserved),
                i.group && (n.group = !0), i.comment && (n.comment = i.comment), n;
            }, w.prototype.toJSON = function(t) {
                var i = u.prototype.toJSON.call(this, t), n = !!t && !!t.keepComments;
                return v.toObject([ "options", i && i.options || g, "oneofs", u.arrayToJSON(this.oneofsArray, t), "fields", u.arrayToJSON(this.fieldsArray.filter(function(t) {
                    return !t.declaringField;
                }), t) || {}, "extensions", this.extensions && this.extensions.length ? this.extensions : g, "reserved", this.reserved && this.reserved.length ? this.reserved : g, "group", this.group || g, "nested", i && i.nested || g, "comment", n ? this.comment : g ]);
            }, w.prototype.resolveAll = function() {
                for (var t = this.fieldsArray, i = 0; i < t.length; ) t[i++].resolve();
                var n = this.oneofsArray;
                for (i = 0; i < n.length; ) n[i++].resolve();
                return u.prototype.resolveAll.call(this);
            }, w.prototype.get = function(t) {
                return this.fields[t] || this.oneofs && this.oneofs[t] || this.nested && this.nested[t] || null;
            }, w.prototype.add = function(t) {
                if (this.get(t.name)) throw Error("duplicate name '" + t.name + "' in " + this);
                if (t instanceof h && t.extend === g) {
                    if (this.c ? this.c[t.id] : this.fieldsById[t.id]) throw Error("duplicate id " + t.id + " in " + this);
                    if (this.isReservedId(t.id)) throw Error("id " + t.id + " is reserved in " + this);
                    if (this.isReservedName(t.name)) throw Error("name '" + t.name + "' is reserved in " + this);
                    return t.parent && t.parent.remove(t), (this.fields[t.name] = t).message = this,
                    t.onAdd(this), n(this);
                }
                return t instanceof f ? (this.oneofs || (this.oneofs = {}), (this.oneofs[t.name] = t).onAdd(this),
                n(this)) : u.prototype.add.call(this, t);
            }, w.prototype.remove = function(t) {
                if (t instanceof h && t.extend === g) {
                    if (!this.fields || this.fields[t.name] !== t) throw Error(t + " is not a member of " + this);
                    return delete this.fields[t.name], t.parent = null, t.onRemove(this), n(this);
                }
                if (t instanceof f) {
                    if (!this.oneofs || this.oneofs[t.name] !== t) throw Error(t + " is not a member of " + this);
                    return delete this.oneofs[t.name], t.parent = null, t.onRemove(this), n(this);
                }
                return u.prototype.remove.call(this, t);
            }, w.prototype.isReservedId = function(t) {
                return u.isReservedId(this.reserved, t);
            }, w.prototype.isReservedName = function(t) {
                return u.isReservedName(this.reserved, t);
            }, w.prototype.create = function(t) {
                return new this.ctor(t);
            }, w.prototype.setup = function() {
                for (var t = this.fullName, i = [], n = 0; n < this.fieldsArray.length; ++n) i.push(this.i[n].resolve().resolvedType);
                this.encode = d(this)({
                    Writer: l,
                    types: i,
                    util: v
                }), this.decode = b(this)({
                    Reader: s,
                    types: i,
                    util: v
                }), this.verify = y(this)({
                    types: i,
                    util: v
                }), this.fromObject = p.fromObject(this)({
                    types: i,
                    util: v
                }), this.toObject = p.toObject(this)({
                    types: i,
                    util: v
                });
                var r = m[t];
                if (r) {
                    var e = Object.create(this);
                    e.fromObject = this.fromObject, this.fromObject = r.fromObject.bind(e), e.toObject = this.toObject,
                    this.toObject = r.toObject.bind(e);
                }
                return this;
            }, w.prototype.encode = function(t, i) {
                return this.setup().encode(t, i);
            }, w.prototype.encodeDelimited = function(t, i) {
                return this.encode(t, i && i.len ? i.fork() : i).ldelim();
            }, w.prototype.decode = function(t, i) {
                return this.setup().decode(t, i);
            }, w.prototype.decodeDelimited = function(t) {
                return t instanceof s || (t = s.create(t)), this.decode(t, t.uint32());
            }, w.prototype.verify = function(t) {
                return this.setup().verify(t);
            }, w.prototype.fromObject = function(t) {
                return this.setup().fromObject(t);
            }, w.prototype.toObject = function(t, i) {
                return this.setup().toObject(t, i);
            }, w.d = function(i) {
                return function(t) {
                    v.decorateType(t, i);
                };
            };
        }, {
            11: 11,
            12: 12,
            13: 13,
            14: 14,
            15: 15,
            18: 18,
            19: 19,
            21: 21,
            23: 23,
            24: 24,
            30: 30,
            33: 33,
            36: 36,
            37: 37,
            38: 38
        } ],
        32: [ function(t, i, n) {
            var r = n, e = t(33), s = [ "double", "float", "int32", "uint32", "sint32", "fixed32", "sfixed32", "int64", "uint64", "sint64", "fixed64", "sfixed64", "bool", "string", "bytes" ];
            function u(t, i) {
                var n = 0, r = {};
                for (i |= 0; n < t.length; ) r[s[n + i]] = t[n++];
                return r;
            }
            r.basic = u([ 1, 5, 0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0, 2, 2 ]), r.defaults = u([ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, !1, "", e.emptyArray, null ]),
            r.long = u([ 0, 0, 0, 1, 1 ], 7), r.mapKey = u([ 0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0, 2 ], 2),
            r.packed = u([ 1, 5, 0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0 ]);
        }, {
            33: 33
        } ],
        33: [ function(r, t) {
            var e, n, s = t.exports = r(35), i = r(27);
            s.codegen = r(3), s.fetch = r(5), s.path = r(8), s.fs = s.inquire("fs"), s.toArray = function(t) {
                if (t) {
                    for (var i = Object.keys(t), n = Array(i.length), r = 0; r < i.length; ) n[r] = t[i[r++]];
                    return n;
                }
                return [];
            }, s.toObject = function(t) {
                for (var i = {}, n = 0; n < t.length; ) {
                    var r = t[n++], e = t[n++];
                    e !== g && (i[r] = e);
                }
                return i;
            };
            var u = /\\/g, o = /"/g;
            s.isReserved = function(t) {
                return /^(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$/.test(t);
            }, s.safeProp = function(t) {
                return !/^[$\w_]+$/.test(t) || s.isReserved(t) ? '["' + t.replace(u, "\\\\").replace(o, '\\"') + '"]' : "." + t;
            }, s.ucFirst = function(t) {
                return t.charAt(0).toUpperCase() + t.substring(1);
            };
            var f = /_([a-z])/g;
            s.camelCase = function(t) {
                return t.substring(0, 1) + t.substring(1).replace(f, function(t, i) {
                    return i.toUpperCase();
                });
            }, s.compareFieldsById = function(t, i) {
                return t.id - i.id;
            }, s.decorateType = function(t, i) {
                if (t.$type) return i && t.$type.name !== i && (s.decorateRoot.remove(t.$type),
                t.$type.name = i, s.decorateRoot.add(t.$type)), t.$type;
                e || (e = r(31));
                var n = new e(i || t.name);
                return s.decorateRoot.add(n), n.ctor = t, Object.defineProperty(t, "$type", {
                    value: n,
                    enumerable: !1
                }), Object.defineProperty(t.prototype, "$type", {
                    value: n,
                    enumerable: !1
                }), n;
            };
            var h = 0;
            s.decorateEnum = function(t) {
                if (t.$type) return t.$type;
                n || (n = r(14));
                var i = new n("Enum" + h++, t);
                return s.decorateRoot.add(i), Object.defineProperty(t, "$type", {
                    value: i,
                    enumerable: !1
                }), i;
            }, Object.defineProperty(s, "decorateRoot", {
                get: function() {
                    return i.decorated || (i.decorated = new (r(26))());
                }
            });
        }, {
            14: 14,
            26: 26,
            27: 27,
            3: 3,
            31: 31,
            35: 35,
            5: 5,
            8: 8
        } ],
        34: [ function(t, i) {
            i.exports = e;
            var n = t(35);
            function e(t, i) {
                this.lo = t >>> 0, this.hi = i >>> 0;
            }
            var s = e.zero = new e(0, 0);
            s.toNumber = function() {
                return 0;
            }, s.zzEncode = s.zzDecode = function() {
                return this;
            }, s.length = function() {
                return 1;
            };
            var r = e.zeroHash = "\0\0\0\0\0\0\0\0";
            e.fromNumber = function(t) {
                if (0 === t) return s;
                var i = t < 0;
                i && (t = -t);
                var n = t >>> 0, r = (t - n) / 4294967296 >>> 0;
                return i && (r = ~r >>> 0, n = ~n >>> 0, 4294967295 < ++n && (n = 0, 4294967295 < ++r && (r = 0))),
                new e(n, r);
            }, e.from = function(t) {
                if ("number" == typeof t) return e.fromNumber(t);
                if (n.isString(t)) {
                    if (!n.Long) return e.fromNumber(parseInt(t, 10));
                    t = n.Long.fromString(t);
                }
                return t.low || t.high ? new e(t.low >>> 0, t.high >>> 0) : s;
            }, e.prototype.toNumber = function(t) {
                if (!t && this.hi >>> 31) {
                    var i = 1 + ~this.lo >>> 0, n = ~this.hi >>> 0;
                    return i || (n = n + 1 >>> 0), -(i + 4294967296 * n);
                }
                return this.lo + 4294967296 * this.hi;
            }, e.prototype.toLong = function(t) {
                return n.Long ? new n.Long(0 | this.lo, 0 | this.hi, !!t) : {
                    low: 0 | this.lo,
                    high: 0 | this.hi,
                    unsigned: !!t
                };
            };
            var u = String.prototype.charCodeAt;
            e.fromHash = function(t) {
                return t === r ? s : new e((u.call(t, 0) | u.call(t, 1) << 8 | u.call(t, 2) << 16 | u.call(t, 3) << 24) >>> 0, (u.call(t, 4) | u.call(t, 5) << 8 | u.call(t, 6) << 16 | u.call(t, 7) << 24) >>> 0);
            }, e.prototype.toHash = function() {
                return String.fromCharCode(255 & this.lo, this.lo >>> 8 & 255, this.lo >>> 16 & 255, this.lo >>> 24, 255 & this.hi, this.hi >>> 8 & 255, this.hi >>> 16 & 255, this.hi >>> 24);
            }, e.prototype.zzEncode = function() {
                var t = this.hi >> 31;
                return this.hi = ((this.hi << 1 | this.lo >>> 31) ^ t) >>> 0, this.lo = (this.lo << 1 ^ t) >>> 0,
                this;
            }, e.prototype.zzDecode = function() {
                var t = -(1 & this.lo);
                return this.lo = ((this.lo >>> 1 | this.hi << 31) ^ t) >>> 0, this.hi = (this.hi >>> 1 ^ t) >>> 0,
                this;
            }, e.prototype.length = function() {
                var t = this.lo, i = (this.lo >>> 28 | this.hi << 4) >>> 0, n = this.hi >>> 24;
                return 0 === n ? 0 === i ? t < 16384 ? t < 128 ? 1 : 2 : t < 2097152 ? 3 : 4 : i < 16384 ? i < 128 ? 5 : 6 : i < 2097152 ? 7 : 8 : n < 128 ? 9 : 10;
            };
        }, {
            35: 35
        } ],
        35: [ function(t, i, n) {
            var r = n;
            function e(t, i, n) {
                for (var r = Object.keys(i), e = 0; e < r.length; ++e) t[r[e]] !== g && n || (t[r[e]] = i[r[e]]);
                return t;
            }
            function s(t) {
                function n(t, i) {
                    if (!(this instanceof n)) return new n(t, i);
                    Object.defineProperty(this, "message", {
                        get: function() {
                            return t;
                        }
                    }), Error.captureStackTrace ? Error.captureStackTrace(this, n) : Object.defineProperty(this, "stack", {
                        value: Error().stack || ""
                    }), i && e(this, i);
                }
                return (n.prototype = Object.create(Error.prototype)).constructor = n, Object.defineProperty(n.prototype, "name", {
                    get: function() {
                        return t;
                    }
                }), n.prototype.toString = function() {
                    return this.name + ": " + this.message;
                }, n;
            }
            r.asPromise = t(1), r.base64 = t(2), r.EventEmitter = t(4), r.float = t(6), r.inquire = t(7),
            r.utf8 = t(10), r.pool = t(9), r.LongBits = t(34), r.global = "undefined" != typeof window && window || "undefined" != typeof global && global || "undefined" != typeof self && self || this,
            r.emptyArray = Object.freeze ? Object.freeze([]) : [], r.emptyObject = Object.freeze ? Object.freeze({}) : {},
            r.isNode = !!(r.global.process && r.global.process.versions && r.global.process.versions.node),
            r.isInteger = Number.isInteger || function(t) {
                return "number" == typeof t && isFinite(t) && Math.floor(t) === t;
            }, r.isString = function(t) {
                return "string" == typeof t || t instanceof String;
            }, r.isObject = function(t) {
                return t && "object" == typeof t;
            }, r.isset = r.isSet = function(t, i) {
                var n = t[i];
                return !(null == n || !t.hasOwnProperty(i)) && ("object" != typeof n || 0 < (Array.isArray(n) ? n.length : Object.keys(n).length));
            }, r.Buffer = function() {
                try {
                    var t = r.inquire("buffer").Buffer;
                    return t.prototype.utf8Write ? t : null;
                } catch (t) {
                    return null;
                }
            }(), r.v = null, r.b = null, r.newBuffer = function(t) {
                return "number" == typeof t ? r.Buffer ? r.b(t) : new r.Array(t) : r.Buffer ? r.v(t) : "undefined" == typeof Uint8Array ? t : new Uint8Array(t);
            }, r.Array = "undefined" != typeof Uint8Array ? Uint8Array : Array, r.Long = r.global.dcodeIO && r.global.dcodeIO.Long || r.global.Long || r.inquire("long"),
            r.key2Re = /^true|false|0|1$/, r.key32Re = /^-?(?:0|[1-9][0-9]*)$/, r.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/,
            r.longToHash = function(t) {
                return t ? r.LongBits.from(t).toHash() : r.LongBits.zeroHash;
            }, r.longFromHash = function(t, i) {
                var n = r.LongBits.fromHash(t);
                return r.Long ? r.Long.fromBits(n.lo, n.hi, i) : n.toNumber(!!i);
            }, r.merge = e, r.lcFirst = function(t) {
                return t.charAt(0).toLowerCase() + t.substring(1);
            }, r.newError = s, r.ProtocolError = s("ProtocolError"), r.oneOfGetter = function(t) {
                for (var n = {}, i = 0; i < t.length; ++i) n[t[i]] = 1;
                return function() {
                    for (var t = Object.keys(this), i = t.length - 1; -1 < i; --i) if (1 === n[t[i]] && this[t[i]] !== g && null !== this[t[i]]) return t[i];
                };
            }, r.oneOfSetter = function(n) {
                return function(t) {
                    for (var i = 0; i < n.length; ++i) n[i] !== t && delete this[n[i]];
                };
            }, r.toJSONOptions = {
                longs: String,
                enums: String,
                bytes: String,
                json: !0
            }, r.r = function() {
                var n = r.Buffer;
                n ? (r.v = n.from !== Uint8Array.from && n.from || function(t, i) {
                    return new n(t, i);
                }, r.b = n.allocUnsafe || function(t) {
                    return new n(t);
                }) : r.v = r.b = null;
            };
        }, {
            1: 1,
            10: 10,
            2: 2,
            34: 34,
            4: 4,
            6: 6,
            7: 7,
            9: 9
        } ],
        36: [ function(t, i) {
            i.exports = function(t) {
                var i = f.codegen([ "m" ], t.name + "$verify")('if(typeof m!=="object"||m===null)')("return%j", "object expected"), n = t.oneofsArray, r = {};
                n.length && i("var p={}");
                for (var e = 0; e < t.fieldsArray.length; ++e) {
                    var s = t.i[e].resolve(), u = "m" + f.safeProp(s.name);
                    if (s.optional && i("if(%s!=null&&m.hasOwnProperty(%j)){", u, s.name), s.map) i("if(!util.isObject(%s))", u)("return%j", h(s, "object"))("var k=Object.keys(%s)", u)("for(var i=0;i<k.length;++i){"),
                    a(i, s, "k[i]"), c(i, s, e, u + "[k[i]]")("}"); else if (s.repeated) i("if(!Array.isArray(%s))", u)("return%j", h(s, "array"))("for(var i=0;i<%s.length;++i){", u),
                    c(i, s, e, u + "[i]")("}"); else {
                        if (s.partOf) {
                            var o = f.safeProp(s.partOf.name);
                            1 === r[s.partOf.name] && i("if(p%s===1)", o)("return%j", s.partOf.name + ": multiple values"),
                            r[s.partOf.name] = 1, i("p%s=1", o);
                        }
                        c(i, s, e, u);
                    }
                    s.optional && i("}");
                }
                return i("return null");
            };
            var u = t(14), f = t(33);
            function h(t, i) {
                return t.name + ": " + i + (t.repeated && "array" !== i ? "[]" : t.map && "object" !== i ? "{k:" + t.keyType + "}" : "") + " expected";
            }
            function c(t, i, n, r) {
                if (i.resolvedType) if (i.resolvedType instanceof u) {
                    t("switch(%s){", r)("default:")("return%j", h(i, "enum value"));
                    for (var e = Object.keys(i.resolvedType.values), s = 0; s < e.length; ++s) t("case %i:", i.resolvedType.values[e[s]]);
                    t("break")("}");
                } else t("{")("var e=types[%i].verify(%s);", n, r)("if(e)")("return%j+e", i.name + ".")("}"); else switch (i.type) {
                  case "int32":
                  case "uint32":
                  case "sint32":
                  case "fixed32":
                  case "sfixed32":
                    t("if(!util.isInteger(%s))", r)("return%j", h(i, "integer"));
                    break;

                  case "int64":
                  case "uint64":
                  case "sint64":
                  case "fixed64":
                  case "sfixed64":
                    t("if(!util.isInteger(%s)&&!(%s&&util.isInteger(%s.low)&&util.isInteger(%s.high)))", r, r, r, r)("return%j", h(i, "integer|Long"));
                    break;

                  case "float":
                  case "double":
                    t('if(typeof %s!=="number")', r)("return%j", h(i, "number"));
                    break;

                  case "bool":
                    t('if(typeof %s!=="boolean")', r)("return%j", h(i, "boolean"));
                    break;

                  case "string":
                    t("if(!util.isString(%s))", r)("return%j", h(i, "string"));
                    break;

                  case "bytes":
                    t('if(!(%s&&typeof %s.length==="number"||util.isString(%s)))', r, r, r)("return%j", h(i, "buffer"));
                }
                return t;
            }
            function a(t, i, n) {
                switch (i.keyType) {
                  case "int32":
                  case "uint32":
                  case "sint32":
                  case "fixed32":
                  case "sfixed32":
                    t("if(!util.key32Re.test(%s))", n)("return%j", h(i, "integer key"));
                    break;

                  case "int64":
                  case "uint64":
                  case "sint64":
                  case "fixed64":
                  case "sfixed64":
                    t("if(!util.key64Re.test(%s))", n)("return%j", h(i, "integer|Long key"));
                    break;

                  case "bool":
                    t("if(!util.key2Re.test(%s))", n)("return%j", h(i, "boolean key"));
                }
                return t;
            }
        }, {
            14: 14,
            33: 33
        } ],
        37: [ function(t, i, n) {
            var r = n, s = t(19);
            r[".google.protobuf.Any"] = {
                fromObject: function(t) {
                    if (t && t["@type"]) {
                        var i = this.lookup(t["@type"]);
                        if (i) {
                            var n = "." === t["@type"].charAt(0) ? t["@type"].substr(1) : t["@type"];
                            return this.create({
                                type_url: "/" + n,
                                value: i.encode(i.fromObject(t)).finish()
                            });
                        }
                    }
                    return this.fromObject(t);
                },
                toObject: function(t, i) {
                    if (i && i.json && t.type_url && t.value) {
                        var n = t.type_url.substring(t.type_url.lastIndexOf("/") + 1), r = this.lookup(n);
                        r && (t = r.decode(t.value));
                    }
                    if (!(t instanceof this.ctor) && t instanceof s) {
                        var e = t.$type.toObject(t, i);
                        return e["@type"] = t.$type.fullName, e;
                    }
                    return this.toObject(t, i);
                }
            };
        }, {
            19: 19
        } ],
        38: [ function(t, i) {
            i.exports = c;
            var n, r = t(35), e = r.LongBits, s = r.base64, u = r.utf8;
            function o(t, i, n) {
                this.fn = t, this.len = i, this.next = g, this.val = n;
            }
            function f() {}
            function h(t) {
                this.head = t.head, this.tail = t.tail, this.len = t.len, this.next = t.states;
            }
            function c() {
                this.len = 0, this.head = new o(f, 0, 0), this.tail = this.head, this.states = null;
            }
            function a(t, i, n) {
                i[n] = 255 & t;
            }
            function l(t, i) {
                this.len = t, this.next = g, this.val = i;
            }
            function v(t, i, n) {
                for (;t.hi; ) i[n++] = 127 & t.lo | 128, t.lo = (t.lo >>> 7 | t.hi << 25) >>> 0,
                t.hi >>>= 7;
                for (;127 < t.lo; ) i[n++] = 127 & t.lo | 128, t.lo = t.lo >>> 7;
                i[n++] = t.lo;
            }
            function d(t, i, n) {
                i[n] = 255 & t, i[n + 1] = t >>> 8 & 255, i[n + 2] = t >>> 16 & 255, i[n + 3] = t >>> 24;
            }
            c.create = r.Buffer ? function() {
                return (c.create = function() {
                    return new n();
                })();
            } : function() {
                return new c();
            }, c.alloc = function(t) {
                return new r.Array(t);
            }, r.Array !== Array && (c.alloc = r.pool(c.alloc, r.Array.prototype.subarray)),
            c.prototype.y = function(t, i, n) {
                return this.tail = this.tail.next = new o(t, i, n), this.len += i, this;
            }, (l.prototype = Object.create(o.prototype)).fn = function(t, i, n) {
                for (;127 < t; ) i[n++] = 127 & t | 128, t >>>= 7;
                i[n] = t;
            }, c.prototype.uint32 = function(t) {
                return this.len += (this.tail = this.tail.next = new l((t >>>= 0) < 128 ? 1 : t < 16384 ? 2 : t < 2097152 ? 3 : t < 268435456 ? 4 : 5, t)).len,
                this;
            }, c.prototype.int32 = function(t) {
                return t < 0 ? this.y(v, 10, e.fromNumber(t)) : this.uint32(t);
            }, c.prototype.sint32 = function(t) {
                return this.uint32((t << 1 ^ t >> 31) >>> 0);
            }, c.prototype.int64 = c.prototype.uint64 = function(t) {
                var i = e.from(t);
                return this.y(v, i.length(), i);
            }, c.prototype.sint64 = function(t) {
                var i = e.from(t).zzEncode();
                return this.y(v, i.length(), i);
            }, c.prototype.bool = function(t) {
                return this.y(a, 1, t ? 1 : 0);
            }, c.prototype.sfixed32 = c.prototype.fixed32 = function(t) {
                return this.y(d, 4, t >>> 0);
            }, c.prototype.sfixed64 = c.prototype.fixed64 = function(t) {
                var i = e.from(t);
                return this.y(d, 4, i.lo).y(d, 4, i.hi);
            }, c.prototype.float = function(t) {
                return this.y(r.float.writeFloatLE, 4, t);
            }, c.prototype.double = function(t) {
                return this.y(r.float.writeDoubleLE, 8, t);
            };
            var b = r.Array.prototype.set ? function(t, i, n) {
                i.set(t, n);
            } : function(t, i, n) {
                for (var r = 0; r < t.length; ++r) i[n + r] = t[r];
            };
            c.prototype.bytes = function(t) {
                var i = t.length >>> 0;
                if (!i) return this.y(a, 1, 0);
                if (r.isString(t)) {
                    var n = c.alloc(i = s.length(t));
                    s.decode(t, n, 0), t = n;
                }
                return this.uint32(i).y(b, i, t);
            }, c.prototype.string = function(t) {
                var i = u.length(t);
                return i ? this.uint32(i).y(u.write, i, t) : this.y(a, 1, 0);
            }, c.prototype.fork = function() {
                return this.states = new h(this), this.head = this.tail = new o(f, 0, 0), this.len = 0,
                this;
            }, c.prototype.reset = function() {
                return this.states ? (this.head = this.states.head, this.tail = this.states.tail,
                this.len = this.states.len, this.states = this.states.next) : (this.head = this.tail = new o(f, 0, 0),
                this.len = 0), this;
            }, c.prototype.ldelim = function() {
                var t = this.head, i = this.tail, n = this.len;
                return this.reset().uint32(n), n && (this.tail.next = t.next, this.tail = i, this.len += n),
                this;
            }, c.prototype.finish = function() {
                for (var t = this.head.next, i = this.constructor.alloc(this.len), n = 0; t; ) t.fn(t.val, i, n),
                n += t.len, t = t.next;
                return i;
            }, c.r = function(t) {
                n = t;
            };
        }, {
            35: 35
        } ],
        39: [ function(t, i) {
            i.exports = s;
            var n = t(38);
            (s.prototype = Object.create(n.prototype)).constructor = s;
            var r = t(35), e = r.Buffer;
            function s() {
                n.call(this);
            }
            s.alloc = function(t) {
                return (s.alloc = r.b)(t);
            };
            var u = e && e.prototype instanceof Uint8Array && "set" === e.prototype.set.name ? function(t, i, n) {
                i.set(t, n);
            } : function(t, i, n) {
                if (t.copy) t.copy(i, n, 0, t.length); else for (var r = 0; r < t.length; ) i[n++] = t[r++];
            };
            function o(t, i, n) {
                t.length < 40 ? r.utf8.write(t, i, n) : i.utf8Write(t, n);
            }
            s.prototype.bytes = function(t) {
                r.isString(t) && (t = r.v(t, "base64"));
                var i = t.length >>> 0;
                return this.uint32(i), i && this.y(u, i, t), this;
            }, s.prototype.string = function(t) {
                var i = e.byteLength(t);
                return this.uint32(i), i && this.y(o, i, t), this;
            };
        }, {
            35: 35,
            38: 38
        } ]
    }, e = {}, t = [ 16 ], i = function t(i) {
        var n = e[i];
        return n || r[i][0].call(n = e[i] = {
            exports: {}
        }, t, n, n.exports), n.exports;
    }(t[0]), i.util.global.protobuf = i, "function" == typeof define && define.amd && define([ "long" ], function(t) {
        return t && t.isLong && (i.util.Long = t, i.configure()), i;
    }), "object" == typeof module && module && module.exports && (module.exports = i);
}();
