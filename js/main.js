!(function (e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports
        ? (module.exports = e.document
              ? t(e, !0)
              : function (e) {
                    if (!e.document) throw new Error("jQuery requires a window with a document");
                    return t(e);
                })
        : t(e);
})("undefined" != typeof window ? window : this, function (C, e) {
    "use strict";
    function m(e) {
        return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item;
    }
    function g(e) {
        return null != e && e === e.window;
    }
    var t = [],
        n = Object.getPrototypeOf,
        o = t.slice,
        v = t.flat
            ? function (e) {
                  return t.flat.call(e);
              }
            : function (e) {
                  return t.concat.apply([], e);
              },
        l = t.push,
        s = t.indexOf,
        i = {},
        a = i.toString,
        b = i.hasOwnProperty,
        r = b.toString,
        c = r.call(Object),
        y = {},
        T = C.document,
        d = { type: !0, src: !0, nonce: !0, noModule: !0 };
    function x(e, t, n) {
        var i,
            s,
            a = (n = n || T).createElement("script");
        if (((a.text = e), t)) for (i in d) (s = t[i] || (t.getAttribute && t.getAttribute(i))) && a.setAttribute(i, s);
        n.head.appendChild(a).parentNode.removeChild(a);
    }
    function h(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? i[a.call(e)] || "object" : typeof e;
    }
    var p = "3.6.0",
        S = function (e, t) {
            return new S.fn.init(e, t);
        };
    function u(e) {
        var t = !!e && "length" in e && e.length,
            n = h(e);
        return !m(e) && !g(e) && ("array" === n || 0 === t || ("number" == typeof t && 0 < t && t - 1 in e));
    }
    (S.fn = S.prototype = {
        jquery: p,
        constructor: S,
        length: 0,
        toArray: function () {
            return o.call(this);
        },
        get: function (e) {
            return null == e ? o.call(this) : e < 0 ? this[e + this.length] : this[e];
        },
        pushStack: function (e) {
            e = S.merge(this.constructor(), e);
            return (e.prevObject = this), e;
        },
        each: function (e) {
            return S.each(this, e);
        },
        map: function (n) {
            return this.pushStack(
                S.map(this, function (e, t) {
                    return n.call(e, t, e);
                })
            );
        },
        slice: function () {
            return this.pushStack(o.apply(this, arguments));
        },
        first: function () {
            return this.eq(0);
        },
        last: function () {
            return this.eq(-1);
        },
        even: function () {
            return this.pushStack(
                S.grep(this, function (e, t) {
                    return (t + 1) % 2;
                })
            );
        },
        odd: function () {
            return this.pushStack(
                S.grep(this, function (e, t) {
                    return t % 2;
                })
            );
        },
        eq: function (e) {
            var t = this.length,
                e = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= e && e < t ? [this[e]] : []);
        },
        end: function () {
            return this.prevObject || this.constructor();
        },
        push: l,
        sort: t.sort,
        splice: t.splice,
    }),
        (S.extend = S.fn.extend = function () {
            var e,
                t,
                n,
                i,
                s,
                a = arguments[0] || {},
                r = 1,
                o = arguments.length,
                l = !1;
            for ("boolean" == typeof a && ((l = a), (a = arguments[r] || {}), r++), "object" == typeof a || m(a) || (a = {}), r === o && ((a = this), r--); r < o; r++)
                if (null != (e = arguments[r]))
                    for (t in e)
                        (n = e[t]),
                            "__proto__" !== t &&
                                a !== n &&
                                (l && n && (S.isPlainObject(n) || (i = Array.isArray(n)))
                                    ? ((s = a[t]), (s = i && !Array.isArray(s) ? [] : i || S.isPlainObject(s) ? s : {}), (i = !1), (a[t] = S.extend(l, s, n)))
                                    : void 0 !== n && (a[t] = n));
            return a;
        }),
        S.extend({
            expando: "jQuery" + (p + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function (e) {
                throw new Error(e);
            },
            noop: function () {},
            isPlainObject: function (e) {
                return !(!e || "[object Object]" !== a.call(e)) && (!(e = n(e)) || ("function" == typeof (e = b.call(e, "constructor") && e.constructor) && r.call(e) === c));
            },
            isEmptyObject: function (e) {
                for (var t in e) return !1;
                return !0;
            },
            globalEval: function (e, t, n) {
                x(e, { nonce: t && t.nonce }, n);
            },
            each: function (e, t) {
                var n,
                    i = 0;
                if (u(e)) for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
                else for (i in e) if (!1 === t.call(e[i], i, e[i])) break;
                return e;
            },
            makeArray: function (e, t) {
                t = t || [];
                return null != e && (u(Object(e)) ? S.merge(t, "string" == typeof e ? [e] : e) : l.call(t, e)), t;
            },
            inArray: function (e, t, n) {
                return null == t ? -1 : s.call(t, e, n);
            },
            merge: function (e, t) {
                for (var n = +t.length, i = 0, s = e.length; i < n; i++) e[s++] = t[i];
                return (e.length = s), e;
            },
            grep: function (e, t, n) {
                for (var i = [], s = 0, a = e.length, r = !n; s < a; s++) !t(e[s], s) != r && i.push(e[s]);
                return i;
            },
            map: function (e, t, n) {
                var i,
                    s,
                    a = 0,
                    r = [];
                if (u(e)) for (i = e.length; a < i; a++) null != (s = t(e[a], a, n)) && r.push(s);
                else for (a in e) null != (s = t(e[a], a, n)) && r.push(s);
                return v(r);
            },
            guid: 1,
            support: y,
        }),
        "function" == typeof Symbol && (S.fn[Symbol.iterator] = t[Symbol.iterator]),
        S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
            i["[object " + t + "]"] = t.toLowerCase();
        });
    var f = (function (n) {
        function p(e, t) {
            return (e = "0x" + e.slice(1) - 65536), t || (e < 0 ? String.fromCharCode(65536 + e) : String.fromCharCode((e >> 10) | 55296, (1023 & e) | 56320));
        }
        function u(e, t) {
            return t ? ("\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " ") : "\\" + e;
        }
        function i() {
            C();
        }
        var e,
            f,
            x,
            a,
            s,
            h,
            m,
            g,
            w,
            l,
            c,
            C,
            T,
            r,
            S,
            v,
            o,
            d,
            b,
            E = "sizzle" + +new Date(),
            y = n.document,
            $ = 0,
            k = 0,
            M = le(),
            P = le(),
            I = le(),
            A = le(),
            L = function (e, t) {
                return e === t && (c = !0), 0;
            },
            z = {}.hasOwnProperty,
            t = [],
            O = t.pop,
            D = t.push,
            j = t.push,
            _ = t.slice,
            N = function (e, t) {
                for (var n = 0, i = e.length; n < i; n++) if (e[n] === t) return n;
                return -1;
            },
            q = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            H = "[\\x20\\t\\r\\n\\f]",
            B = "(?:\\\\[\\da-fA-F]{1,6}" + H + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
            F = "\\[" + H + "*(" + B + ")(?:" + H + "*([*^$|!~]?=)" + H + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + B + "))|)" + H + "*\\]",
            R = ":(" + B + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + F + ")*)|.*)\\)|)",
            W = new RegExp(H + "+", "g"),
            X = new RegExp("^" + H + "+|((?:^|[^\\\\])(?:\\\\.)*)" + H + "+$", "g"),
            Y = new RegExp("^" + H + "*," + H + "*"),
            V = new RegExp("^" + H + "*([>+~]|" + H + ")" + H + "*"),
            G = new RegExp(H + "|>"),
            U = new RegExp(R),
            K = new RegExp("^" + B + "$"),
            Z = {
                ID: new RegExp("^#(" + B + ")"),
                CLASS: new RegExp("^\\.(" + B + ")"),
                TAG: new RegExp("^(" + B + "|[*])"),
                ATTR: new RegExp("^" + F),
                PSEUDO: new RegExp("^" + R),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + H + "*(even|odd|(([+-]|)(\\d*)n|)" + H + "*(?:([+-]|)" + H + "*(\\d+)|))" + H + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + q + ")$", "i"),
                needsContext: new RegExp("^" + H + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + H + "*((?:-\\d)?\\d*)" + H + "*\\)|)(?=[^-]|$)", "i"),
            },
            Q = /HTML$/i,
            J = /^(?:input|select|textarea|button)$/i,
            ee = /^h\d$/i,
            te = /^[^{]+\{\s*\[native \w/,
            ne = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ie = /[+~]/,
            se = new RegExp("\\\\[\\da-fA-F]{1,6}" + H + "?|\\\\([^\\r\\n\\f])", "g"),
            ae = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            re = be(
                function (e) {
                    return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
                },
                { dir: "parentNode", next: "legend" }
            );
        try {
            j.apply((t = _.call(y.childNodes)), y.childNodes), t[y.childNodes.length].nodeType;
        } catch (e) {
            j = {
                apply: t.length
                    ? function (e, t) {
                          D.apply(e, _.call(t));
                      }
                    : function (e, t) {
                          for (var n = e.length, i = 0; (e[n++] = t[i++]); );
                          e.length = n - 1;
                      },
            };
        }
        function oe(t, e, n, i) {
            var s,
                a,
                r,
                o,
                l,
                c,
                d = e && e.ownerDocument,
                p = e ? e.nodeType : 9;
            if (((n = n || []), "string" != typeof t || !t || (1 !== p && 9 !== p && 11 !== p))) return n;
            if (!i && (C(e), (e = e || T), S)) {
                if (11 !== p && (o = ne.exec(t)))
                    if ((c = o[1])) {
                        if (9 === p) {
                            if (!(a = e.getElementById(c))) return n;
                            if (a.id === c) return n.push(a), n;
                        } else if (d && (a = d.getElementById(c)) && b(e, a) && a.id === c) return n.push(a), n;
                    } else {
                        if (o[2]) return j.apply(n, e.getElementsByTagName(t)), n;
                        if ((c = o[3]) && f.getElementsByClassName && e.getElementsByClassName) return j.apply(n, e.getElementsByClassName(c)), n;
                    }
                if (f.qsa && !A[t + " "] && (!v || !v.test(t)) && (1 !== p || "object" !== e.nodeName.toLowerCase())) {
                    if (((c = t), (d = e), 1 === p && (G.test(t) || V.test(t)))) {
                        for (((d = (ie.test(t) && me(e.parentNode)) || e) === e && f.scope) || ((r = e.getAttribute("id")) ? (r = r.replace(ae, u)) : e.setAttribute("id", (r = E))), s = (l = h(t)).length; s--; )
                            l[s] = (r ? "#" + r : ":scope") + " " + ve(l[s]);
                        c = l.join(",");
                    }
                    try {
                        return j.apply(n, d.querySelectorAll(c)), n;
                    } catch (e) {
                        A(t, !0);
                    } finally {
                        r === E && e.removeAttribute("id");
                    }
                }
            }
            return g(t.replace(X, "$1"), e, n, i);
        }
        function le() {
            var n = [];
            function i(e, t) {
                return n.push(e + " ") > x.cacheLength && delete i[n.shift()], (i[e + " "] = t);
            }
            return i;
        }
        function ce(e) {
            return (e[E] = !0), e;
        }
        function de(e) {
            var t = T.createElement("fieldset");
            try {
                return !!e(t);
            } catch (e) {
                return !1;
            } finally {
                t.parentNode && t.parentNode.removeChild(t);
            }
        }
        function pe(e, t) {
            for (var n = e.split("|"), i = n.length; i--; ) x.attrHandle[n[i]] = t;
        }
        function ue(e, t) {
            var n = t && e,
                i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (i) return i;
            if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
            return e ? 1 : -1;
        }
        function fe(t) {
            return function (e) {
                return "form" in e
                    ? e.parentNode && !1 === e.disabled
                        ? "label" in e
                            ? "label" in e.parentNode
                                ? e.parentNode.disabled === t
                                : e.disabled === t
                            : e.isDisabled === t || (e.isDisabled !== !t && re(e) === t)
                        : e.disabled === t
                    : "label" in e && e.disabled === t;
            };
        }
        function he(r) {
            return ce(function (a) {
                return (
                    (a = +a),
                    ce(function (e, t) {
                        for (var n, i = r([], e.length, a), s = i.length; s--; ) e[(n = i[s])] && (e[n] = !(t[n] = e[n]));
                    })
                );
            });
        }
        function me(e) {
            return e && void 0 !== e.getElementsByTagName && e;
        }
        for (e in ((f = oe.support = {}),
        (s = oe.isXML = function (e) {
            var t = e && e.namespaceURI,
                e = e && (e.ownerDocument || e).documentElement;
            return !Q.test(t || (e && e.nodeName) || "HTML");
        }),
        (C = oe.setDocument = function (e) {
            var t,
                e = e ? e.ownerDocument || e : y;
            return (
                e != T &&
                    9 === e.nodeType &&
                    e.documentElement &&
                    ((r = (T = e).documentElement),
                    (S = !s(T)),
                    y != T && (t = T.defaultView) && t.top !== t && (t.addEventListener ? t.addEventListener("unload", i, !1) : t.attachEvent && t.attachEvent("onunload", i)),
                    (f.scope = de(function (e) {
                        return r.appendChild(e).appendChild(T.createElement("div")), void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length;
                    })),
                    (f.attributes = de(function (e) {
                        return (e.className = "i"), !e.getAttribute("className");
                    })),
                    (f.getElementsByTagName = de(function (e) {
                        return e.appendChild(T.createComment("")), !e.getElementsByTagName("*").length;
                    })),
                    (f.getElementsByClassName = te.test(T.getElementsByClassName)),
                    (f.getById = de(function (e) {
                        return (r.appendChild(e).id = E), !T.getElementsByName || !T.getElementsByName(E).length;
                    })),
                    f.getById
                        ? ((x.filter.ID = function (e) {
                              var t = e.replace(se, p);
                              return function (e) {
                                  return e.getAttribute("id") === t;
                              };
                          }),
                          (x.find.ID = function (e, t) {
                              if (void 0 !== t.getElementById && S) {
                                  e = t.getElementById(e);
                                  return e ? [e] : [];
                              }
                          }))
                        : ((x.filter.ID = function (e) {
                              var t = e.replace(se, p);
                              return function (e) {
                                  e = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                                  return e && e.value === t;
                              };
                          }),
                          (x.find.ID = function (e, t) {
                              if (void 0 !== t.getElementById && S) {
                                  var n,
                                      i,
                                      s,
                                      a = t.getElementById(e);
                                  if (a) {
                                      if ((n = a.getAttributeNode("id")) && n.value === e) return [a];
                                      for (s = t.getElementsByName(e), i = 0; (a = s[i++]); ) if ((n = a.getAttributeNode("id")) && n.value === e) return [a];
                                  }
                                  return [];
                              }
                          })),
                    (x.find.TAG = f.getElementsByTagName
                        ? function (e, t) {
                              return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : f.qsa ? t.querySelectorAll(e) : void 0;
                          }
                        : function (e, t) {
                              var n,
                                  i = [],
                                  s = 0,
                                  a = t.getElementsByTagName(e);
                              if ("*" !== e) return a;
                              for (; (n = a[s++]); ) 1 === n.nodeType && i.push(n);
                              return i;
                          }),
                    (x.find.CLASS =
                        f.getElementsByClassName &&
                        function (e, t) {
                            if (void 0 !== t.getElementsByClassName && S) return t.getElementsByClassName(e);
                        }),
                    (o = []),
                    (v = []),
                    (f.qsa = te.test(T.querySelectorAll)) &&
                        (de(function (e) {
                            var t;
                            (r.appendChild(e).innerHTML = "<a id='" + E + "'></a><select id='" + E + "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                                e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + H + "*(?:''|\"\")"),
                                e.querySelectorAll("[selected]").length || v.push("\\[" + H + "*(?:value|" + q + ")"),
                                e.querySelectorAll("[id~=" + E + "-]").length || v.push("~="),
                                (t = T.createElement("input")).setAttribute("name", ""),
                                e.appendChild(t),
                                e.querySelectorAll("[name='']").length || v.push("\\[" + H + "*name" + H + "*=" + H + "*(?:''|\"\")"),
                                e.querySelectorAll(":checked").length || v.push(":checked"),
                                e.querySelectorAll("a#" + E + "+*").length || v.push(".#.+[+~]"),
                                e.querySelectorAll("\\\f"),
                                v.push("[\\r\\n\\f]");
                        }),
                        de(function (e) {
                            e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                            var t = T.createElement("input");
                            t.setAttribute("type", "hidden"),
                                e.appendChild(t).setAttribute("name", "D"),
                                e.querySelectorAll("[name=d]").length && v.push("name" + H + "*[*^$|!~]?="),
                                2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"),
                                (r.appendChild(e).disabled = !0),
                                2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"),
                                e.querySelectorAll("*,:x"),
                                v.push(",.*:");
                        })),
                    (f.matchesSelector = te.test((d = r.matches || r.webkitMatchesSelector || r.mozMatchesSelector || r.oMatchesSelector || r.msMatchesSelector))) &&
                        de(function (e) {
                            (f.disconnectedMatch = d.call(e, "*")), d.call(e, "[s!='']:x"), o.push("!=", R);
                        }),
                    (v = v.length && new RegExp(v.join("|"))),
                    (o = o.length && new RegExp(o.join("|"))),
                    (t = te.test(r.compareDocumentPosition)),
                    (b =
                        t || te.test(r.contains)
                            ? function (e, t) {
                                  var n = 9 === e.nodeType ? e.documentElement : e,
                                      t = t && t.parentNode;
                                  return e === t || !(!t || 1 !== t.nodeType || !(n.contains ? n.contains(t) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(t)));
                              }
                            : function (e, t) {
                                  if (t) for (; (t = t.parentNode); ) if (t === e) return !0;
                                  return !1;
                              }),
                    (L = t
                        ? function (e, t) {
                              if (e === t) return (c = !0), 0;
                              var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                              return (
                                  n ||
                                  (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || (!f.sortDetached && t.compareDocumentPosition(e) === n)
                                      ? e == T || (e.ownerDocument == y && b(y, e))
                                          ? -1
                                          : t == T || (t.ownerDocument == y && b(y, t))
                                          ? 1
                                          : l
                                          ? N(l, e) - N(l, t)
                                          : 0
                                      : 4 & n
                                      ? -1
                                      : 1)
                              );
                          }
                        : function (e, t) {
                              if (e === t) return (c = !0), 0;
                              var n,
                                  i = 0,
                                  s = e.parentNode,
                                  a = t.parentNode,
                                  r = [e],
                                  o = [t];
                              if (!s || !a) return e == T ? -1 : t == T ? 1 : s ? -1 : a ? 1 : l ? N(l, e) - N(l, t) : 0;
                              if (s === a) return ue(e, t);
                              for (n = e; (n = n.parentNode); ) r.unshift(n);
                              for (n = t; (n = n.parentNode); ) o.unshift(n);
                              for (; r[i] === o[i]; ) i++;
                              return i ? ue(r[i], o[i]) : r[i] == y ? -1 : o[i] == y ? 1 : 0;
                          })),
                T
            );
        }),
        (oe.matches = function (e, t) {
            return oe(e, null, null, t);
        }),
        (oe.matchesSelector = function (e, t) {
            if ((C(e), f.matchesSelector && S && !A[t + " "] && (!o || !o.test(t)) && (!v || !v.test(t))))
                try {
                    var n = d.call(e, t);
                    if (n || f.disconnectedMatch || (e.document && 11 !== e.document.nodeType)) return n;
                } catch (e) {
                    A(t, !0);
                }
            return 0 < oe(t, T, null, [e]).length;
        }),
        (oe.contains = function (e, t) {
            return (e.ownerDocument || e) != T && C(e), b(e, t);
        }),
        (oe.attr = function (e, t) {
            (e.ownerDocument || e) != T && C(e);
            var n = x.attrHandle[t.toLowerCase()],
                n = n && z.call(x.attrHandle, t.toLowerCase()) ? n(e, t, !S) : void 0;
            return void 0 !== n ? n : f.attributes || !S ? e.getAttribute(t) : (n = e.getAttributeNode(t)) && n.specified ? n.value : null;
        }),
        (oe.escape = function (e) {
            return (e + "").replace(ae, u);
        }),
        (oe.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e);
        }),
        (oe.uniqueSort = function (e) {
            var t,
                n = [],
                i = 0,
                s = 0;
            if (((c = !f.detectDuplicates), (l = !f.sortStable && e.slice(0)), e.sort(L), c)) {
                for (; (t = e[s++]); ) t === e[s] && (i = n.push(s));
                for (; i--; ) e.splice(n[i], 1);
            }
            return (l = null), e;
        }),
        (a = oe.getText = function (e) {
            var t,
                n = "",
                i = 0,
                s = e.nodeType;
            if (s) {
                if (1 === s || 9 === s || 11 === s) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += a(e);
                } else if (3 === s || 4 === s) return e.nodeValue;
            } else for (; (t = e[i++]); ) n += a(t);
            return n;
        }),
        ((x = oe.selectors = {
            cacheLength: 50,
            createPseudo: ce,
            match: Z,
            attrHandle: {},
            find: {},
            relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
            preFilter: {
                ATTR: function (e) {
                    return (e[1] = e[1].replace(se, p)), (e[3] = (e[3] || e[4] || e[5] || "").replace(se, p)), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
                },
                CHILD: function (e) {
                    return (
                        (e[1] = e[1].toLowerCase()),
                        "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]), (e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3]))), (e[5] = +(e[7] + e[8] || "odd" === e[3]))) : e[3] && oe.error(e[0]),
                        e
                    );
                },
                PSEUDO: function (e) {
                    var t,
                        n = !e[6] && e[2];
                    return Z.CHILD.test(e[0])
                        ? null
                        : (e[3] ? (e[2] = e[4] || e[5] || "") : n && U.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))), e.slice(0, 3));
                },
            },
            filter: {
                TAG: function (e) {
                    var t = e.replace(se, p).toLowerCase();
                    return "*" === e
                        ? function () {
                              return !0;
                          }
                        : function (e) {
                              return e.nodeName && e.nodeName.toLowerCase() === t;
                          };
                },
                CLASS: function (e) {
                    var t = M[e + " "];
                    return (
                        t ||
                        ((t = new RegExp("(^|" + H + ")" + e + "(" + H + "|$)")) &&
                            M(e, function (e) {
                                return t.test(("string" == typeof e.className && e.className) || (void 0 !== e.getAttribute && e.getAttribute("class")) || "");
                            }))
                    );
                },
                ATTR: function (t, n, i) {
                    return function (e) {
                        e = oe.attr(e, t);
                        return null == e
                            ? "!=" === n
                            : !n ||
                                  ((e += ""),
                                  "=" === n
                                      ? e === i
                                      : "!=" === n
                                      ? e !== i
                                      : "^=" === n
                                      ? i && 0 === e.indexOf(i)
                                      : "*=" === n
                                      ? i && -1 < e.indexOf(i)
                                      : "$=" === n
                                      ? i && e.slice(-i.length) === i
                                      : "~=" === n
                                      ? -1 < (" " + e.replace(W, " ") + " ").indexOf(i)
                                      : "|=" === n && (e === i || e.slice(0, i.length + 1) === i + "-"));
                    };
                },
                CHILD: function (h, e, t, m, g) {
                    var v = "nth" !== h.slice(0, 3),
                        b = "last" !== h.slice(-4),
                        y = "of-type" === e;
                    return 1 === m && 0 === g
                        ? function (e) {
                              return !!e.parentNode;
                          }
                        : function (e, t, n) {
                              var i,
                                  s,
                                  a,
                                  r,
                                  o,
                                  l,
                                  c = v != b ? "nextSibling" : "previousSibling",
                                  d = e.parentNode,
                                  p = y && e.nodeName.toLowerCase(),
                                  u = !n && !y,
                                  f = !1;
                              if (d) {
                                  if (v) {
                                      for (; c; ) {
                                          for (r = e; (r = r[c]); ) if (y ? r.nodeName.toLowerCase() === p : 1 === r.nodeType) return !1;
                                          l = c = "only" === h && !l && "nextSibling";
                                      }
                                      return !0;
                                  }
                                  if (((l = [b ? d.firstChild : d.lastChild]), b && u)) {
                                      for (
                                          f = (o = (i = (s = (a = (r = d)[E] || (r[E] = {}))[r.uniqueID] || (a[r.uniqueID] = {}))[h] || [])[0] === $ && i[1]) && i[2], r = o && d.childNodes[o];
                                          (r = (++o && r && r[c]) || (f = o = 0) || l.pop());

                                      )
                                          if (1 === r.nodeType && ++f && r === e) {
                                              s[h] = [$, o, f];
                                              break;
                                          }
                                  } else if (!1 === (f = u ? (o = (i = (s = (a = (r = e)[E] || (r[E] = {}))[r.uniqueID] || (a[r.uniqueID] = {}))[h] || [])[0] === $ && i[1]) : f))
                                      for (
                                          ;
                                          (r = (++o && r && r[c]) || (f = o = 0) || l.pop()) &&
                                          ((y ? r.nodeName.toLowerCase() !== p : 1 !== r.nodeType) || !++f || (u && ((s = (a = r[E] || (r[E] = {}))[r.uniqueID] || (a[r.uniqueID] = {}))[h] = [$, f]), r !== e));

                                      );
                                  return (f -= g) === m || (f % m == 0 && 0 <= f / m);
                              }
                          };
                },
                PSEUDO: function (e, a) {
                    var t,
                        r = x.pseudos[e] || x.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);
                    return r[E]
                        ? r(a)
                        : 1 < r.length
                        ? ((t = [e, e, "", a]),
                          x.setFilters.hasOwnProperty(e.toLowerCase())
                              ? ce(function (e, t) {
                                    for (var n, i = r(e, a), s = i.length; s--; ) e[(n = N(e, i[s]))] = !(t[n] = i[s]);
                                })
                              : function (e) {
                                    return r(e, 0, t);
                                })
                        : r;
                },
            },
            pseudos: {
                not: ce(function (e) {
                    var i = [],
                        s = [],
                        o = m(e.replace(X, "$1"));
                    return o[E]
                        ? ce(function (e, t, n, i) {
                              for (var s, a = o(e, null, i, []), r = e.length; r--; ) (s = a[r]) && (e[r] = !(t[r] = s));
                          })
                        : function (e, t, n) {
                              return (i[0] = e), o(i, null, n, s), (i[0] = null), !s.pop();
                          };
                }),
                has: ce(function (t) {
                    return function (e) {
                        return 0 < oe(t, e).length;
                    };
                }),
                contains: ce(function (t) {
                    return (
                        (t = t.replace(se, p)),
                        function (e) {
                            return -1 < (e.textContent || a(e)).indexOf(t);
                        }
                    );
                }),
                lang: ce(function (n) {
                    return (
                        K.test(n || "") || oe.error("unsupported lang: " + n),
                        (n = n.replace(se, p).toLowerCase()),
                        function (e) {
                            var t;
                            do {
                                if ((t = S ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-");
                            } while ((e = e.parentNode) && 1 === e.nodeType);
                            return !1;
                        }
                    );
                }),
                target: function (e) {
                    var t = n.location && n.location.hash;
                    return t && t.slice(1) === e.id;
                },
                root: function (e) {
                    return e === r;
                },
                focus: function (e) {
                    return e === T.activeElement && (!T.hasFocus || T.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
                },
                enabled: fe(!1),
                disabled: fe(!0),
                checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return ("input" === t && !!e.checked) || ("option" === t && !!e.selected);
                },
                selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
                },
                empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                    return !0;
                },
                parent: function (e) {
                    return !x.pseudos.empty(e);
                },
                header: function (e) {
                    return ee.test(e.nodeName);
                },
                input: function (e) {
                    return J.test(e.nodeName);
                },
                button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return ("input" === t && "button" === e.type) || "button" === t;
                },
                text: function (e) {
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (e = e.getAttribute("type")) || "text" === e.toLowerCase());
                },
                first: he(function () {
                    return [0];
                }),
                last: he(function (e, t) {
                    return [t - 1];
                }),
                eq: he(function (e, t, n) {
                    return [n < 0 ? n + t : n];
                }),
                even: he(function (e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e;
                }),
                odd: he(function (e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e;
                }),
                lt: he(function (e, t, n) {
                    for (var i = n < 0 ? n + t : t < n ? t : n; 0 <= --i; ) e.push(i);
                    return e;
                }),
                gt: he(function (e, t, n) {
                    for (var i = n < 0 ? n + t : n; ++i < t; ) e.push(i);
                    return e;
                }),
            },
        }).pseudos.nth = x.pseudos.eq),
        { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
            x.pseudos[e] = (function (t) {
                return function (e) {
                    return "input" === e.nodeName.toLowerCase() && e.type === t;
                };
            })(e);
        for (e in { submit: !0, reset: !0 })
            x.pseudos[e] = (function (n) {
                return function (e) {
                    var t = e.nodeName.toLowerCase();
                    return ("input" === t || "button" === t) && e.type === n;
                };
            })(e);
        function ge() {}
        function ve(e) {
            for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
            return i;
        }
        function be(r, e, t) {
            var o = e.dir,
                l = e.next,
                c = l || o,
                d = t && "parentNode" === c,
                p = k++;
            return e.first
                ? function (e, t, n) {
                      for (; (e = e[o]); ) if (1 === e.nodeType || d) return r(e, t, n);
                      return !1;
                  }
                : function (e, t, n) {
                      var i,
                          s,
                          a = [$, p];
                      if (n) {
                          for (; (e = e[o]); ) if ((1 === e.nodeType || d) && r(e, t, n)) return !0;
                      } else
                          for (; (e = e[o]); )
                              if (1 === e.nodeType || d)
                                  if (((i = (s = e[E] || (e[E] = {}))[e.uniqueID] || (s[e.uniqueID] = {})), l && l === e.nodeName.toLowerCase())) e = e[o] || e;
                                  else {
                                      if ((s = i[c]) && s[0] === $ && s[1] === p) return (a[2] = s[2]);
                                      if (((i[c] = a)[2] = r(e, t, n))) return !0;
                                  }
                      return !1;
                  };
        }
        function ye(s) {
            return 1 < s.length
                ? function (e, t, n) {
                      for (var i = s.length; i--; ) if (!s[i](e, t, n)) return !1;
                      return !0;
                  }
                : s[0];
        }
        function xe(e, t, n, i, s) {
            for (var a, r = [], o = 0, l = e.length, c = null != t; o < l; o++) (a = e[o]) && ((n && !n(a, i, s)) || (r.push(a), c && t.push(o)));
            return r;
        }
        function we(f, h, m, g, v, e) {
            return (
                g && !g[E] && (g = we(g)),
                v && !v[E] && (v = we(v, e)),
                ce(function (e, t, n, i) {
                    var s,
                        a,
                        r,
                        o = [],
                        l = [],
                        c = t.length,
                        d =
                            e ||
                            (function (e, t, n) {
                                for (var i = 0, s = t.length; i < s; i++) oe(e, t[i], n);
                                return n;
                            })(h || "*", n.nodeType ? [n] : n, []),
                        p = !f || (!e && h) ? d : xe(d, o, f, n, i),
                        u = m ? (v || (e ? f : c || g) ? [] : t) : p;
                    if ((m && m(p, u, n, i), g)) for (s = xe(u, l), g(s, [], n, i), a = s.length; a--; ) (r = s[a]) && (u[l[a]] = !(p[l[a]] = r));
                    if (e) {
                        if (v || f) {
                            if (v) {
                                for (s = [], a = u.length; a--; ) (r = u[a]) && s.push((p[a] = r));
                                v(null, (u = []), s, i);
                            }
                            for (a = u.length; a--; ) (r = u[a]) && -1 < (s = v ? N(e, r) : o[a]) && (e[s] = !(t[s] = r));
                        }
                    } else (u = xe(u === t ? u.splice(c, u.length) : u)), v ? v(null, t, u, i) : j.apply(t, u);
                })
            );
        }
        function Ce(g, v) {
            function e(e, t, n, i, s) {
                var a,
                    r,
                    o,
                    l = 0,
                    c = "0",
                    d = e && [],
                    p = [],
                    u = w,
                    f = e || (y && x.find.TAG("*", s)),
                    h = ($ += null == u ? 1 : Math.random() || 0.1),
                    m = f.length;
                for (s && (w = t == T || t || s); c !== m && null != (a = f[c]); c++) {
                    if (y && a) {
                        for (r = 0, t || a.ownerDocument == T || (C(a), (n = !S)); (o = g[r++]); )
                            if (o(a, t || T, n)) {
                                i.push(a);
                                break;
                            }
                        s && ($ = h);
                    }
                    b && ((a = !o && a) && l--, e && d.push(a));
                }
                if (((l += c), b && c !== l)) {
                    for (r = 0; (o = v[r++]); ) o(d, p, t, n);
                    if (e) {
                        if (0 < l) for (; c--; ) d[c] || p[c] || (p[c] = O.call(i));
                        p = xe(p);
                    }
                    j.apply(i, p), s && !e && 0 < p.length && 1 < l + v.length && oe.uniqueSort(i);
                }
                return s && (($ = h), (w = u)), d;
            }
            var b = 0 < v.length,
                y = 0 < g.length;
            return b ? ce(e) : e;
        }
        return (
            (ge.prototype = x.filters = x.pseudos),
            (x.setFilters = new ge()),
            (h = oe.tokenize = function (e, t) {
                var n,
                    i,
                    s,
                    a,
                    r,
                    o,
                    l,
                    c = P[e + " "];
                if (c) return t ? 0 : c.slice(0);
                for (r = e, o = [], l = x.preFilter; r; ) {
                    for (a in ((n && !(i = Y.exec(r))) || (i && (r = r.slice(i[0].length) || r), o.push((s = []))),
                    (n = !1),
                    (i = V.exec(r)) && ((n = i.shift()), s.push({ value: n, type: i[0].replace(X, " ") }), (r = r.slice(n.length))),
                    x.filter))
                        !(i = Z[a].exec(r)) || (l[a] && !(i = l[a](i))) || ((n = i.shift()), s.push({ value: n, type: a, matches: i }), (r = r.slice(n.length)));
                    if (!n) break;
                }
                return t ? r.length : r ? oe.error(e) : P(e, o).slice(0);
            }),
            (m = oe.compile = function (e, t) {
                var n,
                    i = [],
                    s = [],
                    a = I[e + " "];
                if (!a) {
                    for (n = (t = t || h(e)).length; n--; )
                        ((a = (function e(t) {
                            for (
                                var i,
                                    n,
                                    s,
                                    a = t.length,
                                    r = x.relative[t[0].type],
                                    o = r || x.relative[" "],
                                    l = r ? 1 : 0,
                                    c = be(
                                        function (e) {
                                            return e === i;
                                        },
                                        o,
                                        !0
                                    ),
                                    d = be(
                                        function (e) {
                                            return -1 < N(i, e);
                                        },
                                        o,
                                        !0
                                    ),
                                    p = [
                                        function (e, t, n) {
                                            return (n = (!r && (n || t !== w)) || ((i = t).nodeType ? c : d)(e, t, n)), (i = null), n;
                                        },
                                    ];
                                l < a;
                                l++
                            )
                                if ((n = x.relative[t[l].type])) p = [be(ye(p), n)];
                                else {
                                    if ((n = x.filter[t[l].type].apply(null, t[l].matches))[E]) {
                                        for (s = ++l; s < a && !x.relative[t[s].type]; s++);
                                        return we(
                                            1 < l && ye(p),
                                            1 < l && ve(t.slice(0, l - 1).concat({ value: " " === t[l - 2].type ? "*" : "" })).replace(X, "$1"),
                                            n,
                                            l < s && e(t.slice(l, s)),
                                            s < a && e((t = t.slice(s))),
                                            s < a && ve(t)
                                        );
                                    }
                                    p.push(n);
                                }
                            return ye(p);
                        })(t[n]))[E]
                            ? i
                            : s
                        ).push(a);
                    (a = I(e, Ce(s, i))).selector = e;
                }
                return a;
            }),
            (g = oe.select = function (e, t, n, i) {
                var s,
                    a,
                    r,
                    o,
                    l,
                    c = "function" == typeof e && e,
                    d = !i && h((e = c.selector || e));
                if (((n = n || []), 1 === d.length)) {
                    if (2 < (a = d[0] = d[0].slice(0)).length && "ID" === (r = a[0]).type && 9 === t.nodeType && S && x.relative[a[1].type]) {
                        if (!(t = (x.find.ID(r.matches[0].replace(se, p), t) || [])[0])) return n;
                        c && (t = t.parentNode), (e = e.slice(a.shift().value.length));
                    }
                    for (s = Z.needsContext.test(e) ? 0 : a.length; s-- && ((r = a[s]), !x.relative[(o = r.type)]); )
                        if ((l = x.find[o]) && (i = l(r.matches[0].replace(se, p), (ie.test(a[0].type) && me(t.parentNode)) || t))) {
                            if ((a.splice(s, 1), !(e = i.length && ve(a)))) return j.apply(n, i), n;
                            break;
                        }
                }
                return (c || m(e, d))(i, t, !S, n, !t || (ie.test(e) && me(t.parentNode)) || t), n;
            }),
            (f.sortStable = E.split("").sort(L).join("") === E),
            (f.detectDuplicates = !!c),
            C(),
            (f.sortDetached = de(function (e) {
                return 1 & e.compareDocumentPosition(T.createElement("fieldset"));
            })),
            de(function (e) {
                return (e.innerHTML = "<a href='#'></a>"), "#" === e.firstChild.getAttribute("href");
            }) ||
                pe("type|href|height|width", function (e, t, n) {
                    if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
                }),
            (f.attributes &&
                de(function (e) {
                    return (e.innerHTML = "<input/>"), e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
                })) ||
                pe("value", function (e, t, n) {
                    if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
                }),
            de(function (e) {
                return null == e.getAttribute("disabled");
            }) ||
                pe(q, function (e, t, n) {
                    if (!n) return !0 === e[t] ? t.toLowerCase() : (t = e.getAttributeNode(t)) && t.specified ? t.value : null;
                }),
            oe
        );
    })(C);
    (S.find = f), (S.expr = f.selectors), (S.expr[":"] = S.expr.pseudos), (S.uniqueSort = S.unique = f.uniqueSort), (S.text = f.getText), (S.isXMLDoc = f.isXML), (S.contains = f.contains), (S.escapeSelector = f.escape);
    function w(e, t, n) {
        for (var i = [], s = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
            if (1 === e.nodeType) {
                if (s && S(e).is(n)) break;
                i.push(e);
            }
        return i;
    }
    function E(e, t) {
        for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
        return n;
    }
    var $ = S.expr.match.needsContext;
    function k(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
    }
    var M = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function P(e, n, i) {
        return m(n)
            ? S.grep(e, function (e, t) {
                  return !!n.call(e, t, e) !== i;
              })
            : n.nodeType
            ? S.grep(e, function (e) {
                  return (e === n) !== i;
              })
            : "string" != typeof n
            ? S.grep(e, function (e) {
                  return -1 < s.call(n, e) !== i;
              })
            : S.filter(n, e, i);
    }
    (S.filter = function (e, t, n) {
        var i = t[0];
        return (
            n && (e = ":not(" + e + ")"),
            1 === t.length && 1 === i.nodeType
                ? S.find.matchesSelector(i, e)
                    ? [i]
                    : []
                : S.find.matches(
                      e,
                      S.grep(t, function (e) {
                          return 1 === e.nodeType;
                      })
                  )
        );
    }),
        S.fn.extend({
            find: function (e) {
                var t,
                    n,
                    i = this.length,
                    s = this;
                if ("string" != typeof e)
                    return this.pushStack(
                        S(e).filter(function () {
                            for (t = 0; t < i; t++) if (S.contains(s[t], this)) return !0;
                        })
                    );
                for (n = this.pushStack([]), t = 0; t < i; t++) S.find(e, s[t], n);
                return 1 < i ? S.uniqueSort(n) : n;
            },
            filter: function (e) {
                return this.pushStack(P(this, e || [], !1));
            },
            not: function (e) {
                return this.pushStack(P(this, e || [], !0));
            },
            is: function (e) {
                return !!P(this, "string" == typeof e && $.test(e) ? S(e) : e || [], !1).length;
            },
        });
    var I = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (S.fn.init = function (e, t, n) {
        if (!e) return this;
        if (((n = n || A), "string" != typeof e)) return e.nodeType ? ((this[0] = e), (this.length = 1), this) : m(e) ? (void 0 !== n.ready ? n.ready(e) : e(S)) : S.makeArray(e, this);
        if (!(i = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : I.exec(e)) || (!i[1] && t)) return (!t || t.jquery ? t || n : this.constructor(t)).find(e);
        if (i[1]) {
            if (((t = t instanceof S ? t[0] : t), S.merge(this, S.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : T, !0)), M.test(i[1]) && S.isPlainObject(t))) for (var i in t) m(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
            return this;
        }
        return (e = T.getElementById(i[2])) && ((this[0] = e), (this.length = 1)), this;
    }).prototype = S.fn;
    var A = S(T),
        L = /^(?:parents|prev(?:Until|All))/,
        z = { children: !0, contents: !0, next: !0, prev: !0 };
    function O(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType; );
        return e;
    }
    S.fn.extend({
        has: function (e) {
            var t = S(e, this),
                n = t.length;
            return this.filter(function () {
                for (var e = 0; e < n; e++) if (S.contains(this, t[e])) return !0;
            });
        },
        closest: function (e, t) {
            var n,
                i = 0,
                s = this.length,
                a = [],
                r = "string" != typeof e && S(e);
            if (!$.test(e))
                for (; i < s; i++)
                    for (n = this[i]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (r ? -1 < r.index(n) : 1 === n.nodeType && S.find.matchesSelector(n, e))) {
                            a.push(n);
                            break;
                        }
            return this.pushStack(1 < a.length ? S.uniqueSort(a) : a);
        },
        index: function (e) {
            return e ? ("string" == typeof e ? s.call(S(e), this[0]) : s.call(this, e.jquery ? e[0] : e)) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        },
        add: function (e, t) {
            return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))));
        },
        addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
        },
    }),
        S.each(
            {
                parent: function (e) {
                    e = e.parentNode;
                    return e && 11 !== e.nodeType ? e : null;
                },
                parents: function (e) {
                    return w(e, "parentNode");
                },
                parentsUntil: function (e, t, n) {
                    return w(e, "parentNode", n);
                },
                next: function (e) {
                    return O(e, "nextSibling");
                },
                prev: function (e) {
                    return O(e, "previousSibling");
                },
                nextAll: function (e) {
                    return w(e, "nextSibling");
                },
                prevAll: function (e) {
                    return w(e, "previousSibling");
                },
                nextUntil: function (e, t, n) {
                    return w(e, "nextSibling", n);
                },
                prevUntil: function (e, t, n) {
                    return w(e, "previousSibling", n);
                },
                siblings: function (e) {
                    return E((e.parentNode || {}).firstChild, e);
                },
                children: function (e) {
                    return E(e.firstChild);
                },
                contents: function (e) {
                    return null != e.contentDocument && n(e.contentDocument) ? e.contentDocument : (k(e, "template") && (e = e.content || e), S.merge([], e.childNodes));
                },
            },
            function (i, s) {
                S.fn[i] = function (e, t) {
                    var n = S.map(this, s, e);
                    return (t = "Until" !== i.slice(-5) ? e : t) && "string" == typeof t && (n = S.filter(t, n)), 1 < this.length && (z[i] || S.uniqueSort(n), L.test(i) && n.reverse()), this.pushStack(n);
                };
            }
        );
    var D = /[^\x20\t\r\n\f]+/g;
    function j(e) {
        return e;
    }
    function _(e) {
        throw e;
    }
    function N(e, t, n, i) {
        var s;
        try {
            e && m((s = e.promise)) ? s.call(e).done(t).fail(n) : e && m((s = e.then)) ? s.call(e, t, n) : t.apply(void 0, [e].slice(i));
        } catch (e) {
            n.apply(void 0, [e]);
        }
    }
    (S.Callbacks = function (i) {
        var e, n;
        i =
            "string" == typeof i
                ? ((e = i),
                  (n = {}),
                  S.each(e.match(D) || [], function (e, t) {
                      n[t] = !0;
                  }),
                  n)
                : S.extend({}, i);
        function s() {
            for (o = o || i.once, r = a = !0; c.length; d = -1) for (t = c.shift(); ++d < l.length; ) !1 === l[d].apply(t[0], t[1]) && i.stopOnFalse && ((d = l.length), (t = !1));
            i.memory || (t = !1), (a = !1), o && (l = t ? [] : "");
        }
        var a,
            t,
            r,
            o,
            l = [],
            c = [],
            d = -1,
            p = {
                add: function () {
                    return (
                        l &&
                            (t && !a && ((d = l.length - 1), c.push(t)),
                            (function n(e) {
                                S.each(e, function (e, t) {
                                    m(t) ? (i.unique && p.has(t)) || l.push(t) : t && t.length && "string" !== h(t) && n(t);
                                });
                            })(arguments),
                            t && !a && s()),
                        this
                    );
                },
                remove: function () {
                    return (
                        S.each(arguments, function (e, t) {
                            for (var n; -1 < (n = S.inArray(t, l, n)); ) l.splice(n, 1), n <= d && d--;
                        }),
                        this
                    );
                },
                has: function (e) {
                    return e ? -1 < S.inArray(e, l) : 0 < l.length;
                },
                empty: function () {
                    return (l = l && []), this;
                },
                disable: function () {
                    return (o = c = []), (l = t = ""), this;
                },
                disabled: function () {
                    return !l;
                },
                lock: function () {
                    return (o = c = []), t || a || (l = t = ""), this;
                },
                locked: function () {
                    return !!o;
                },
                fireWith: function (e, t) {
                    return o || ((t = [e, (t = t || []).slice ? t.slice() : t]), c.push(t), a || s()), this;
                },
                fire: function () {
                    return p.fireWith(this, arguments), this;
                },
                fired: function () {
                    return !!r;
                },
            };
        return p;
    }),
        S.extend({
            Deferred: function (e) {
                var a = [
                        ["notify", "progress", S.Callbacks("memory"), S.Callbacks("memory"), 2],
                        ["resolve", "done", S.Callbacks("once memory"), S.Callbacks("once memory"), 0, "resolved"],
                        ["reject", "fail", S.Callbacks("once memory"), S.Callbacks("once memory"), 1, "rejected"],
                    ],
                    s = "pending",
                    r = {
                        state: function () {
                            return s;
                        },
                        always: function () {
                            return o.done(arguments).fail(arguments), this;
                        },
                        catch: function (e) {
                            return r.then(null, e);
                        },
                        pipe: function () {
                            var s = arguments;
                            return S.Deferred(function (i) {
                                S.each(a, function (e, t) {
                                    var n = m(s[t[4]]) && s[t[4]];
                                    o[t[1]](function () {
                                        var e = n && n.apply(this, arguments);
                                        e && m(e.promise) ? e.promise().progress(i.notify).done(i.resolve).fail(i.reject) : i[t[0] + "With"](this, n ? [e] : arguments);
                                    });
                                }),
                                    (s = null);
                            }).promise();
                        },
                        then: function (t, n, i) {
                            var l = 0;
                            function c(s, a, r, o) {
                                return function () {
                                    function e() {
                                        var e, t;
                                        if (!(s < l)) {
                                            if ((e = r.apply(n, i)) === a.promise()) throw new TypeError("Thenable self-resolution");
                                            (t = e && ("object" == typeof e || "function" == typeof e) && e.then),
                                                m(t)
                                                    ? o
                                                        ? t.call(e, c(l, a, j, o), c(l, a, _, o))
                                                        : (l++, t.call(e, c(l, a, j, o), c(l, a, _, o), c(l, a, j, a.notifyWith)))
                                                    : (r !== j && ((n = void 0), (i = [e])), (o || a.resolveWith)(n, i));
                                        }
                                    }
                                    var n = this,
                                        i = arguments,
                                        t = o
                                            ? e
                                            : function () {
                                                  try {
                                                      e();
                                                  } catch (e) {
                                                      S.Deferred.exceptionHook && S.Deferred.exceptionHook(e, t.stackTrace), l <= s + 1 && (r !== _ && ((n = void 0), (i = [e])), a.rejectWith(n, i));
                                                  }
                                              };
                                    s ? t() : (S.Deferred.getStackHook && (t.stackTrace = S.Deferred.getStackHook()), C.setTimeout(t));
                                };
                            }
                            return S.Deferred(function (e) {
                                a[0][3].add(c(0, e, m(i) ? i : j, e.notifyWith)), a[1][3].add(c(0, e, m(t) ? t : j)), a[2][3].add(c(0, e, m(n) ? n : _));
                            }).promise();
                        },
                        promise: function (e) {
                            return null != e ? S.extend(e, r) : r;
                        },
                    },
                    o = {};
                return (
                    S.each(a, function (e, t) {
                        var n = t[2],
                            i = t[5];
                        (r[t[1]] = n.add),
                            i &&
                                n.add(
                                    function () {
                                        s = i;
                                    },
                                    a[3 - e][2].disable,
                                    a[3 - e][3].disable,
                                    a[0][2].lock,
                                    a[0][3].lock
                                ),
                            n.add(t[3].fire),
                            (o[t[0]] = function () {
                                return o[t[0] + "With"](this === o ? void 0 : this, arguments), this;
                            }),
                            (o[t[0] + "With"] = n.fireWith);
                    }),
                    r.promise(o),
                    e && e.call(o, o),
                    o
                );
            },
            when: function (e) {
                function t(t) {
                    return function (e) {
                        (s[t] = this), (a[t] = 1 < arguments.length ? o.call(arguments) : e), --n || r.resolveWith(s, a);
                    };
                }
                var n = arguments.length,
                    i = n,
                    s = Array(i),
                    a = o.call(arguments),
                    r = S.Deferred();
                if (n <= 1 && (N(e, r.done(t(i)).resolve, r.reject, !n), "pending" === r.state() || m(a[i] && a[i].then))) return r.then();
                for (; i--; ) N(a[i], t(i), r.reject);
                return r.promise();
            },
        });
    var q = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    (S.Deferred.exceptionHook = function (e, t) {
        C.console && C.console.warn && e && q.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
    }),
        (S.readyException = function (e) {
            C.setTimeout(function () {
                throw e;
            });
        });
    var H = S.Deferred();
    function B() {
        T.removeEventListener("DOMContentLoaded", B), C.removeEventListener("load", B), S.ready();
    }
    (S.fn.ready = function (e) {
        return (
            H.then(e).catch(function (e) {
                S.readyException(e);
            }),
            this
        );
    }),
        S.extend({
            isReady: !1,
            readyWait: 1,
            ready: function (e) {
                (!0 === e ? --S.readyWait : S.isReady) || ((S.isReady = !0) !== e && 0 < --S.readyWait) || H.resolveWith(T, [S]);
            },
        }),
        (S.ready.then = H.then),
        "complete" === T.readyState || ("loading" !== T.readyState && !T.documentElement.doScroll) ? C.setTimeout(S.ready) : (T.addEventListener("DOMContentLoaded", B), C.addEventListener("load", B));
    function F(e, t, n, i, s, a, r) {
        var o = 0,
            l = e.length,
            c = null == n;
        if ("object" === h(n)) for (o in ((s = !0), n)) F(e, t, o, n[o], !0, a, r);
        else if (
            void 0 !== i &&
            ((s = !0),
            m(i) || (r = !0),
            (t = c
                ? r
                    ? (t.call(e, i), null)
                    : ((c = t),
                      function (e, t, n) {
                          return c.call(S(e), n);
                      })
                : t))
        )
            for (; o < l; o++) t(e[o], n, r ? i : i.call(e[o], o, t(e[o], n)));
        return s ? e : c ? t.call(e) : l ? t(e[0], n) : a;
    }
    var R = /^-ms-/,
        W = /-([a-z])/g;
    function X(e, t) {
        return t.toUpperCase();
    }
    function Y(e) {
        return e.replace(R, "ms-").replace(W, X);
    }
    function V(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
    }
    function G() {
        this.expando = S.expando + G.uid++;
    }
    (G.uid = 1),
        (G.prototype = {
            cache: function (e) {
                var t = e[this.expando];
                return t || ((t = {}), V(e) && (e.nodeType ? (e[this.expando] = t) : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t;
            },
            set: function (e, t, n) {
                var i,
                    s = this.cache(e);
                if ("string" == typeof t) s[Y(t)] = n;
                else for (i in t) s[Y(i)] = t[i];
                return s;
            },
            get: function (e, t) {
                return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][Y(t)];
            },
            access: function (e, t, n) {
                return void 0 === t || (t && "string" == typeof t && void 0 === n) ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
            },
            remove: function (e, t) {
                var n,
                    i = e[this.expando];
                if (void 0 !== i) {
                    if (void 0 !== t) {
                        n = (t = Array.isArray(t) ? t.map(Y) : (t = Y(t)) in i ? [t] : t.match(D) || []).length;
                        for (; n--; ) delete i[t[n]];
                    }
                    (void 0 !== t && !S.isEmptyObject(i)) || (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
                }
            },
            hasData: function (e) {
                e = e[this.expando];
                return void 0 !== e && !S.isEmptyObject(e);
            },
        });
    var U = new G(),
        K = new G(),
        Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Q = /[A-Z]/g;
    function J(e, t, n) {
        var i, s;
        if (void 0 === n && 1 === e.nodeType)
            if (((i = "data-" + t.replace(Q, "-$&").toLowerCase()), "string" == typeof (n = e.getAttribute(i)))) {
                try {
                    n = "true" === (s = n) || ("false" !== s && ("null" === s ? null : s === +s + "" ? +s : Z.test(s) ? JSON.parse(s) : s));
                } catch (e) {}
                K.set(e, t, n);
            } else n = void 0;
        return n;
    }
    S.extend({
        hasData: function (e) {
            return K.hasData(e) || U.hasData(e);
        },
        data: function (e, t, n) {
            return K.access(e, t, n);
        },
        removeData: function (e, t) {
            K.remove(e, t);
        },
        _data: function (e, t, n) {
            return U.access(e, t, n);
        },
        _removeData: function (e, t) {
            U.remove(e, t);
        },
    }),
        S.fn.extend({
            data: function (n, e) {
                var t,
                    i,
                    s,
                    a = this[0],
                    r = a && a.attributes;
                if (void 0 !== n)
                    return "object" == typeof n
                        ? this.each(function () {
                              K.set(this, n);
                          })
                        : F(
                              this,
                              function (e) {
                                  var t;
                                  return a && void 0 === e
                                      ? void 0 !== (t = K.get(a, n)) || void 0 !== (t = J(a, n))
                                          ? t
                                          : void 0
                                      : void this.each(function () {
                                            K.set(this, n, e);
                                        });
                              },
                              null,
                              e,
                              1 < arguments.length,
                              null,
                              !0
                          );
                if (this.length && ((s = K.get(a)), 1 === a.nodeType && !U.get(a, "hasDataAttrs"))) {
                    for (t = r.length; t--; ) r[t] && 0 === (i = r[t].name).indexOf("data-") && ((i = Y(i.slice(5))), J(a, i, s[i]));
                    U.set(a, "hasDataAttrs", !0);
                }
                return s;
            },
            removeData: function (e) {
                return this.each(function () {
                    K.remove(this, e);
                });
            },
        }),
        S.extend({
            queue: function (e, t, n) {
                var i;
                if (e) return (i = U.get(e, (t = (t || "fx") + "queue"))), n && (!i || Array.isArray(n) ? (i = U.access(e, t, S.makeArray(n))) : i.push(n)), i || [];
            },
            dequeue: function (e, t) {
                t = t || "fx";
                var n = S.queue(e, t),
                    i = n.length,
                    s = n.shift(),
                    a = S._queueHooks(e, t);
                "inprogress" === s && ((s = n.shift()), i--),
                    s &&
                        ("fx" === t && n.unshift("inprogress"),
                        delete a.stop,
                        s.call(
                            e,
                            function () {
                                S.dequeue(e, t);
                            },
                            a
                        )),
                    !i && a && a.empty.fire();
            },
            _queueHooks: function (e, t) {
                var n = t + "queueHooks";
                return (
                    U.get(e, n) ||
                    U.access(e, n, {
                        empty: S.Callbacks("once memory").add(function () {
                            U.remove(e, [t + "queue", n]);
                        }),
                    })
                );
            },
        }),
        S.fn.extend({
            queue: function (t, n) {
                var e = 2;
                return (
                    "string" != typeof t && ((n = t), (t = "fx"), e--),
                    arguments.length < e
                        ? S.queue(this[0], t)
                        : void 0 === n
                        ? this
                        : this.each(function () {
                              var e = S.queue(this, t, n);
                              S._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && S.dequeue(this, t);
                          })
                );
            },
            dequeue: function (e) {
                return this.each(function () {
                    S.dequeue(this, e);
                });
            },
            clearQueue: function (e) {
                return this.queue(e || "fx", []);
            },
            promise: function (e, t) {
                function n() {
                    --s || a.resolveWith(r, [r]);
                }
                var i,
                    s = 1,
                    a = S.Deferred(),
                    r = this,
                    o = this.length;
                for ("string" != typeof e && ((t = e), (e = void 0)), e = e || "fx"; o--; ) (i = U.get(r[o], e + "queueHooks")) && i.empty && (s++, i.empty.add(n));
                return n(), a.promise(t);
            },
        });
    var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
        ne = ["Top", "Right", "Bottom", "Left"],
        ie = T.documentElement,
        se = function (e) {
            return S.contains(e.ownerDocument, e);
        },
        ae = { composed: !0 };
    ie.getRootNode &&
        (se = function (e) {
            return S.contains(e.ownerDocument, e) || e.getRootNode(ae) === e.ownerDocument;
        });
    function re(e, t) {
        return "none" === (e = t || e).style.display || ("" === e.style.display && se(e) && "none" === S.css(e, "display"));
    }
    function oe(e, t, n, i) {
        var s,
            a,
            r = 20,
            o = i
                ? function () {
                      return i.cur();
                  }
                : function () {
                      return S.css(e, t, "");
                  },
            l = o(),
            c = (n && n[3]) || (S.cssNumber[t] ? "" : "px"),
            d = e.nodeType && (S.cssNumber[t] || ("px" !== c && +l)) && te.exec(S.css(e, t));
        if (d && d[3] !== c) {
            for (c = c || d[3], d = +(l /= 2) || 1; r--; ) S.style(e, t, d + c), (1 - a) * (1 - (a = o() / l || 0.5)) <= 0 && (r = 0), (d /= a);
            S.style(e, t, (d *= 2) + c), (n = n || []);
        }
        return n && ((d = +d || +l || 0), (s = n[1] ? d + (n[1] + 1) * n[2] : +n[2]), i && ((i.unit = c), (i.start = d), (i.end = s))), s;
    }
    var le = {};
    function ce(e, t) {
        for (var n, i, s, a, r, o = [], l = 0, c = e.length; l < c; l++)
            (i = e[l]).style &&
                ((n = i.style.display),
                t
                    ? ("none" === n && ((o[l] = U.get(i, "display") || null), o[l] || (i.style.display = "")),
                      "" === i.style.display &&
                          re(i) &&
                          (o[l] =
                              ((r = a = void 0),
                              (a = (s = i).ownerDocument),
                              (r = s.nodeName),
                              (s = le[r]) || ((a = a.body.appendChild(a.createElement(r))), (s = S.css(a, "display")), a.parentNode.removeChild(a), (le[r] = s = "none" === s ? "block" : s)))))
                    : "none" !== n && ((o[l] = "none"), U.set(i, "display", n)));
        for (l = 0; l < c; l++) null != o[l] && (e[l].style.display = o[l]);
        return e;
    }
    S.fn.extend({
        show: function () {
            return ce(this, !0);
        },
        hide: function () {
            return ce(this);
        },
        toggle: function (e) {
            return "boolean" == typeof e
                ? e
                    ? this.show()
                    : this.hide()
                : this.each(function () {
                      re(this) ? S(this).show() : S(this).hide();
                  });
        },
    });
    var de = /^(?:checkbox|radio)$/i,
        pe = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        ue = /^$|^module$|\/(?:java|ecma)script/i;
    (p = T.createDocumentFragment().appendChild(T.createElement("div"))),
        (f = T.createElement("input")).setAttribute("type", "radio"),
        f.setAttribute("checked", "checked"),
        f.setAttribute("name", "t"),
        p.appendChild(f),
        (y.checkClone = p.cloneNode(!0).cloneNode(!0).lastChild.checked),
        (p.innerHTML = "<textarea>x</textarea>"),
        (y.noCloneChecked = !!p.cloneNode(!0).lastChild.defaultValue),
        (p.innerHTML = "<option></option>"),
        (y.option = !!p.lastChild);
    var fe = { thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };
    function he(e, t) {
        var n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return void 0 === t || (t && k(e, t)) ? S.merge([e], n) : n;
    }
    function me(e, t) {
        for (var n = 0, i = e.length; n < i; n++) U.set(e[n], "globalEval", !t || U.get(t[n], "globalEval"));
    }
    (fe.tbody = fe.tfoot = fe.colgroup = fe.caption = fe.thead), (fe.th = fe.td), y.option || (fe.optgroup = fe.option = [1, "<select multiple='multiple'>", "</select>"]);
    var ge = /<|&#?\w+;/;
    function ve(e, t, n, i, s) {
        for (var a, r, o, l, c, d = t.createDocumentFragment(), p = [], u = 0, f = e.length; u < f; u++)
            if ((a = e[u]) || 0 === a)
                if ("object" === h(a)) S.merge(p, a.nodeType ? [a] : a);
                else if (ge.test(a)) {
                    for (r = r || d.appendChild(t.createElement("div")), o = (pe.exec(a) || ["", ""])[1].toLowerCase(), o = fe[o] || fe._default, r.innerHTML = o[1] + S.htmlPrefilter(a) + o[2], c = o[0]; c--; ) r = r.lastChild;
                    S.merge(p, r.childNodes), ((r = d.firstChild).textContent = "");
                } else p.push(t.createTextNode(a));
        for (d.textContent = "", u = 0; (a = p[u++]); )
            if (i && -1 < S.inArray(a, i)) s && s.push(a);
            else if (((l = se(a)), (r = he(d.appendChild(a), "script")), l && me(r), n)) for (c = 0; (a = r[c++]); ) ue.test(a.type || "") && n.push(a);
        return d;
    }
    var be = /^([^.]*)(?:\.(.+)|)/;
    function ye() {
        return !0;
    }
    function xe() {
        return !1;
    }
    function we(e, t) {
        return (
            (e ===
                (function () {
                    try {
                        return T.activeElement;
                    } catch (e) {}
                })()) ==
            ("focus" === t)
        );
    }
    function Ce(e, t, n, i, s, a) {
        var r, o;
        if ("object" == typeof t) {
            for (o in ("string" != typeof n && ((i = i || n), (n = void 0)), t)) Ce(e, o, n, i, t[o], a);
            return e;
        }
        if ((null == i && null == s ? ((s = n), (i = n = void 0)) : null == s && ("string" == typeof n ? ((s = i), (i = void 0)) : ((s = i), (i = n), (n = void 0))), !1 === s)) s = xe;
        else if (!s) return e;
        return (
            1 === a &&
                ((r = s),
                ((s = function (e) {
                    return S().off(e), r.apply(this, arguments);
                }).guid = r.guid || (r.guid = S.guid++))),
            e.each(function () {
                S.event.add(this, t, s, i, n);
            })
        );
    }
    function Te(e, s, a) {
        a
            ? (U.set(e, s, !1),
              S.event.add(e, s, {
                  namespace: !1,
                  handler: function (e) {
                      var t,
                          n,
                          i = U.get(this, s);
                      if (1 & e.isTrigger && this[s]) {
                          if (i.length) (S.event.special[s] || {}).delegateType && e.stopPropagation();
                          else if (((i = o.call(arguments)), U.set(this, s, i), (t = a(this, s)), this[s](), i !== (n = U.get(this, s)) || t ? U.set(this, s, !1) : (n = {}), i !== n))
                              return e.stopImmediatePropagation(), e.preventDefault(), n && n.value;
                      } else i.length && (U.set(this, s, { value: S.event.trigger(S.extend(i[0], S.Event.prototype), i.slice(1), this) }), e.stopImmediatePropagation());
                  },
              }))
            : void 0 === U.get(e, s) && S.event.add(e, s, ye);
    }
    (S.event = {
        global: {},
        add: function (t, e, n, i, s) {
            var a,
                r,
                o,
                l,
                c,
                d,
                p,
                u,
                f,
                h = U.get(t);
            if (V(t))
                for (
                    n.handler && ((n = (a = n).handler), (s = a.selector)),
                        s && S.find.matchesSelector(ie, s),
                        n.guid || (n.guid = S.guid++),
                        (o = h.events) || (o = h.events = Object.create(null)),
                        (r = h.handle) ||
                            (r = h.handle = function (e) {
                                return void 0 !== S && S.event.triggered !== e.type ? S.event.dispatch.apply(t, arguments) : void 0;
                            }),
                        l = (e = (e || "").match(D) || [""]).length;
                    l--;

                )
                    (p = f = (c = be.exec(e[l]) || [])[1]),
                        (u = (c[2] || "").split(".").sort()),
                        p &&
                            ((d = S.event.special[p] || {}),
                            (p = (s ? d.delegateType : d.bindType) || p),
                            (d = S.event.special[p] || {}),
                            (c = S.extend({ type: p, origType: f, data: i, handler: n, guid: n.guid, selector: s, needsContext: s && S.expr.match.needsContext.test(s), namespace: u.join(".") }, a)),
                            (f = o[p]) || (((f = o[p] = []).delegateCount = 0), (d.setup && !1 !== d.setup.call(t, i, u, r)) || (t.addEventListener && t.addEventListener(p, r))),
                            d.add && (d.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)),
                            s ? f.splice(f.delegateCount++, 0, c) : f.push(c),
                            (S.event.global[p] = !0));
        },
        remove: function (e, t, n, i, s) {
            var a,
                r,
                o,
                l,
                c,
                d,
                p,
                u,
                f,
                h,
                m,
                g = U.hasData(e) && U.get(e);
            if (g && (l = g.events)) {
                for (c = (t = (t || "").match(D) || [""]).length; c--; )
                    if (((f = m = (o = be.exec(t[c]) || [])[1]), (h = (o[2] || "").split(".").sort()), f)) {
                        for (p = S.event.special[f] || {}, u = l[(f = (i ? p.delegateType : p.bindType) || f)] || [], o = o[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), r = a = u.length; a--; )
                            (d = u[a]),
                                (!s && m !== d.origType) ||
                                    (n && n.guid !== d.guid) ||
                                    (o && !o.test(d.namespace)) ||
                                    (i && i !== d.selector && ("**" !== i || !d.selector)) ||
                                    (u.splice(a, 1), d.selector && u.delegateCount--, p.remove && p.remove.call(e, d));
                        r && !u.length && ((p.teardown && !1 !== p.teardown.call(e, h, g.handle)) || S.removeEvent(e, f, g.handle), delete l[f]);
                    } else for (f in l) S.event.remove(e, f + t[c], n, i, !0);
                S.isEmptyObject(l) && U.remove(e, "handle events");
            }
        },
        dispatch: function (e) {
            var t,
                n,
                i,
                s,
                a,
                r = new Array(arguments.length),
                o = S.event.fix(e),
                l = (U.get(this, "events") || Object.create(null))[o.type] || [],
                e = S.event.special[o.type] || {};
            for (r[0] = o, t = 1; t < arguments.length; t++) r[t] = arguments[t];
            if (((o.delegateTarget = this), !e.preDispatch || !1 !== e.preDispatch.call(this, o))) {
                for (a = S.event.handlers.call(this, o, l), t = 0; (i = a[t++]) && !o.isPropagationStopped(); )
                    for (o.currentTarget = i.elem, n = 0; (s = i.handlers[n++]) && !o.isImmediatePropagationStopped(); )
                        (o.rnamespace && !1 !== s.namespace && !o.rnamespace.test(s.namespace)) ||
                            ((o.handleObj = s), (o.data = s.data), void 0 !== (s = ((S.event.special[s.origType] || {}).handle || s.handler).apply(i.elem, r)) && !1 === (o.result = s) && (o.preventDefault(), o.stopPropagation()));
                return e.postDispatch && e.postDispatch.call(this, o), o.result;
            }
        },
        handlers: function (e, t) {
            var n,
                i,
                s,
                a,
                r,
                o = [],
                l = t.delegateCount,
                c = e.target;
            if (l && c.nodeType && !("click" === e.type && 1 <= e.button))
                for (; c !== this; c = c.parentNode || this)
                    if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
                        for (a = [], r = {}, n = 0; n < l; n++) void 0 === r[(s = (i = t[n]).selector + " ")] && (r[s] = i.needsContext ? -1 < S(s, this).index(c) : S.find(s, this, null, [c]).length), r[s] && a.push(i);
                        a.length && o.push({ elem: c, handlers: a });
                    }
            return (c = this), l < t.length && o.push({ elem: c, handlers: t.slice(l) }), o;
        },
        addProp: function (t, e) {
            Object.defineProperty(S.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: m(e)
                    ? function () {
                          if (this.originalEvent) return e(this.originalEvent);
                      }
                    : function () {
                          if (this.originalEvent) return this.originalEvent[t];
                      },
                set: function (e) {
                    Object.defineProperty(this, t, { enumerable: !0, configurable: !0, writable: !0, value: e });
                },
            });
        },
        fix: function (e) {
            return e[S.expando] ? e : new S.Event(e);
        },
        special: {
            load: { noBubble: !0 },
            click: {
                setup: function (e) {
                    e = this || e;
                    return de.test(e.type) && e.click && k(e, "input") && Te(e, "click", ye), !1;
                },
                trigger: function (e) {
                    e = this || e;
                    return de.test(e.type) && e.click && k(e, "input") && Te(e, "click"), !0;
                },
                _default: function (e) {
                    e = e.target;
                    return (de.test(e.type) && e.click && k(e, "input") && U.get(e, "click")) || k(e, "a");
                },
            },
            beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
                },
            },
        },
    }),
        (S.removeEvent = function (e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n);
        }),
        (S.Event = function (e, t) {
            if (!(this instanceof S.Event)) return new S.Event(e, t);
            e && e.type
                ? ((this.originalEvent = e),
                  (this.type = e.type),
                  (this.isDefaultPrevented = e.defaultPrevented || (void 0 === e.defaultPrevented && !1 === e.returnValue) ? ye : xe),
                  (this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target),
                  (this.currentTarget = e.currentTarget),
                  (this.relatedTarget = e.relatedTarget))
                : (this.type = e),
                t && S.extend(this, t),
                (this.timeStamp = (e && e.timeStamp) || Date.now()),
                (this[S.expando] = !0);
        }),
        (S.Event.prototype = {
            constructor: S.Event,
            isDefaultPrevented: xe,
            isPropagationStopped: xe,
            isImmediatePropagationStopped: xe,
            isSimulated: !1,
            preventDefault: function () {
                var e = this.originalEvent;
                (this.isDefaultPrevented = ye), e && !this.isSimulated && e.preventDefault();
            },
            stopPropagation: function () {
                var e = this.originalEvent;
                (this.isPropagationStopped = ye), e && !this.isSimulated && e.stopPropagation();
            },
            stopImmediatePropagation: function () {
                var e = this.originalEvent;
                (this.isImmediatePropagationStopped = ye), e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
            },
        }),
        S.each(
            {
                altKey: !0,
                bubbles: !0,
                cancelable: !0,
                changedTouches: !0,
                ctrlKey: !0,
                detail: !0,
                eventPhase: !0,
                metaKey: !0,
                pageX: !0,
                pageY: !0,
                shiftKey: !0,
                view: !0,
                char: !0,
                code: !0,
                charCode: !0,
                key: !0,
                keyCode: !0,
                button: !0,
                buttons: !0,
                clientX: !0,
                clientY: !0,
                offsetX: !0,
                offsetY: !0,
                pointerId: !0,
                pointerType: !0,
                screenX: !0,
                screenY: !0,
                targetTouches: !0,
                toElement: !0,
                touches: !0,
                which: !0,
            },
            S.event.addProp
        ),
        S.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
            S.event.special[e] = {
                setup: function () {
                    return Te(this, e, we), !1;
                },
                trigger: function () {
                    return Te(this, e), !0;
                },
                _default: function () {
                    return !0;
                },
                delegateType: t,
            };
        }),
        S.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (e, s) {
            S.event.special[e] = {
                delegateType: s,
                bindType: s,
                handle: function (e) {
                    var t,
                        n = e.relatedTarget,
                        i = e.handleObj;
                    return (n && (n === this || S.contains(this, n))) || ((e.type = i.origType), (t = i.handler.apply(this, arguments)), (e.type = s)), t;
                },
            };
        }),
        S.fn.extend({
            on: function (e, t, n, i) {
                return Ce(this, e, t, n, i);
            },
            one: function (e, t, n, i) {
                return Ce(this, e, t, n, i, 1);
            },
            off: function (e, t, n) {
                var i, s;
                if (e && e.preventDefault && e.handleObj) return (i = e.handleObj), S(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                if ("object" != typeof e)
                    return (
                        (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
                        !1 === n && (n = xe),
                        this.each(function () {
                            S.event.remove(this, e, n, t);
                        })
                    );
                for (s in e) this.off(s, t, e[s]);
                return this;
            },
        });
    var Se = /<script|<style|<link/i,
        Ee = /checked\s*(?:[^=]|=\s*.checked.)/i,
        $e = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function ke(e, t) {
        return (k(e, "table") && k(11 !== t.nodeType ? t : t.firstChild, "tr") && S(e).children("tbody")[0]) || e;
    }
    function Me(e) {
        return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
    }
    function Pe(e) {
        return "true/" === (e.type || "").slice(0, 5) ? (e.type = e.type.slice(5)) : e.removeAttribute("type"), e;
    }
    function Ie(e, t) {
        var n, i, s, a;
        if (1 === t.nodeType) {
            if (U.hasData(e) && (a = U.get(e).events)) for (s in (U.remove(t, "handle events"), a)) for (n = 0, i = a[s].length; n < i; n++) S.event.add(t, s, a[s][n]);
            K.hasData(e) && ((e = K.access(e)), (e = S.extend({}, e)), K.set(t, e));
        }
    }
    function Ae(n, i, s, a) {
        i = v(i);
        var e,
            t,
            r,
            o,
            l,
            c,
            d = 0,
            p = n.length,
            u = p - 1,
            f = i[0],
            h = m(f);
        if (h || (1 < p && "string" == typeof f && !y.checkClone && Ee.test(f)))
            return n.each(function (e) {
                var t = n.eq(e);
                h && (i[0] = f.call(this, e, t.html())), Ae(t, i, s, a);
            });
        if (p && ((t = (e = ve(i, n[0].ownerDocument, !1, n, a)).firstChild), 1 === e.childNodes.length && (e = t), t || a)) {
            for (o = (r = S.map(he(e, "script"), Me)).length; d < p; d++) (l = e), d !== u && ((l = S.clone(l, !0, !0)), o && S.merge(r, he(l, "script"))), s.call(n[d], l, d);
            if (o)
                for (c = r[r.length - 1].ownerDocument, S.map(r, Pe), d = 0; d < o; d++)
                    (l = r[d]),
                        ue.test(l.type || "") &&
                            !U.access(l, "globalEval") &&
                            S.contains(c, l) &&
                            (l.src && "module" !== (l.type || "").toLowerCase() ? S._evalUrl && !l.noModule && S._evalUrl(l.src, { nonce: l.nonce || l.getAttribute("nonce") }, c) : x(l.textContent.replace($e, ""), l, c));
        }
        return n;
    }
    function Le(e, t, n) {
        for (var i, s = t ? S.filter(t, e) : e, a = 0; null != (i = s[a]); a++) n || 1 !== i.nodeType || S.cleanData(he(i)), i.parentNode && (n && se(i) && me(he(i, "script")), i.parentNode.removeChild(i));
        return e;
    }
    S.extend({
        htmlPrefilter: function (e) {
            return e;
        },
        clone: function (e, t, n) {
            var i,
                s,
                a,
                r,
                o,
                l,
                c,
                d = e.cloneNode(!0),
                p = se(e);
            if (!(y.noCloneChecked || (1 !== e.nodeType && 11 !== e.nodeType) || S.isXMLDoc(e)))
                for (r = he(d), i = 0, s = (a = he(e)).length; i < s; i++)
                    (o = a[i]), (l = r[i]), (c = void 0), "input" === (c = l.nodeName.toLowerCase()) && de.test(o.type) ? (l.checked = o.checked) : ("input" !== c && "textarea" !== c) || (l.defaultValue = o.defaultValue);
            if (t)
                if (n) for (a = a || he(e), r = r || he(d), i = 0, s = a.length; i < s; i++) Ie(a[i], r[i]);
                else Ie(e, d);
            return 0 < (r = he(d, "script")).length && me(r, !p && he(e, "script")), d;
        },
        cleanData: function (e) {
            for (var t, n, i, s = S.event.special, a = 0; void 0 !== (n = e[a]); a++)
                if (V(n)) {
                    if ((t = n[U.expando])) {
                        if (t.events) for (i in t.events) s[i] ? S.event.remove(n, i) : S.removeEvent(n, i, t.handle);
                        n[U.expando] = void 0;
                    }
                    n[K.expando] && (n[K.expando] = void 0);
                }
        },
    }),
        S.fn.extend({
            detach: function (e) {
                return Le(this, e, !0);
            },
            remove: function (e) {
                return Le(this, e);
            },
            text: function (e) {
                return F(
                    this,
                    function (e) {
                        return void 0 === e
                            ? S.text(this)
                            : this.empty().each(function () {
                                  (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || (this.textContent = e);
                              });
                    },
                    null,
                    e,
                    arguments.length
                );
            },
            append: function () {
                return Ae(this, arguments, function (e) {
                    (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || ke(this, e).appendChild(e);
                });
            },
            prepend: function () {
                return Ae(this, arguments, function (e) {
                    var t;
                    (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || (t = ke(this, e)).insertBefore(e, t.firstChild);
                });
            },
            before: function () {
                return Ae(this, arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this);
                });
            },
            after: function () {
                return Ae(this, arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
                });
            },
            empty: function () {
                for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (S.cleanData(he(e, !1)), (e.textContent = ""));
                return this;
            },
            clone: function (e, t) {
                return (
                    (e = null != e && e),
                    (t = null == t ? e : t),
                    this.map(function () {
                        return S.clone(this, e, t);
                    })
                );
            },
            html: function (e) {
                return F(
                    this,
                    function (e) {
                        var t = this[0] || {},
                            n = 0,
                            i = this.length;
                        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                        if ("string" == typeof e && !Se.test(e) && !fe[(pe.exec(e) || ["", ""])[1].toLowerCase()]) {
                            e = S.htmlPrefilter(e);
                            try {
                                for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (S.cleanData(he(t, !1)), (t.innerHTML = e));
                                t = 0;
                            } catch (e) {}
                        }
                        t && this.empty().append(e);
                    },
                    null,
                    e,
                    arguments.length
                );
            },
            replaceWith: function () {
                var n = [];
                return Ae(
                    this,
                    arguments,
                    function (e) {
                        var t = this.parentNode;
                        S.inArray(this, n) < 0 && (S.cleanData(he(this)), t && t.replaceChild(e, this));
                    },
                    n
                );
            },
        }),
        S.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (e, r) {
            S.fn[e] = function (e) {
                for (var t, n = [], i = S(e), s = i.length - 1, a = 0; a <= s; a++) (t = a === s ? this : this.clone(!0)), S(i[a])[r](t), l.apply(n, t.get());
                return this.pushStack(n);
            };
        });
    function ze(e) {
        var t = e.ownerDocument.defaultView;
        return (t = !t || !t.opener ? C : t).getComputedStyle(e);
    }
    function Oe(e, t, n) {
        var i,
            s = {};
        for (i in t) (s[i] = e.style[i]), (e.style[i] = t[i]);
        for (i in ((n = n.call(e)), t)) e.style[i] = s[i];
        return n;
    }
    var De,
        je,
        _e,
        Ne,
        qe,
        He,
        Be,
        Fe,
        Re = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
        We = new RegExp(ne.join("|"), "i");
    function Xe() {
        var e;
        Fe &&
            ((Be.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
            (Fe.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
            ie.appendChild(Be).appendChild(Fe),
            (e = C.getComputedStyle(Fe)),
            (De = "1%" !== e.top),
            (He = 12 === Ye(e.marginLeft)),
            (Fe.style.right = "60%"),
            (Ne = 36 === Ye(e.right)),
            (je = 36 === Ye(e.width)),
            (Fe.style.position = "absolute"),
            (_e = 12 === Ye(Fe.offsetWidth / 3)),
            ie.removeChild(Be),
            (Fe = null));
    }
    function Ye(e) {
        return Math.round(parseFloat(e));
    }
    function Ve(e, t, n) {
        var i,
            s,
            a = e.style;
        return (
            (n = n || ze(e)) &&
                ("" !== (s = n.getPropertyValue(t) || n[t]) || se(e) || (s = S.style(e, t)),
                !y.pixelBoxStyles() && Re.test(s) && We.test(t) && ((i = a.width), (e = a.minWidth), (t = a.maxWidth), (a.minWidth = a.maxWidth = a.width = s), (s = n.width), (a.width = i), (a.minWidth = e), (a.maxWidth = t))),
            void 0 !== s ? s + "" : s
        );
    }
    function Ge(e, t) {
        return {
            get: function () {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get;
            },
        };
    }
    (Be = T.createElement("div")),
        (Fe = T.createElement("div")).style &&
            ((Fe.style.backgroundClip = "content-box"),
            (Fe.cloneNode(!0).style.backgroundClip = ""),
            (y.clearCloneStyle = "content-box" === Fe.style.backgroundClip),
            S.extend(y, {
                boxSizingReliable: function () {
                    return Xe(), je;
                },
                pixelBoxStyles: function () {
                    return Xe(), Ne;
                },
                pixelPosition: function () {
                    return Xe(), De;
                },
                reliableMarginLeft: function () {
                    return Xe(), He;
                },
                scrollboxSize: function () {
                    return Xe(), _e;
                },
                reliableTrDimensions: function () {
                    var e, t, n;
                    return (
                        null == qe &&
                            ((e = T.createElement("table")),
                            (t = T.createElement("tr")),
                            (n = T.createElement("div")),
                            (e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate"),
                            (t.style.cssText = "border:1px solid"),
                            (t.style.height = "1px"),
                            (n.style.height = "9px"),
                            (n.style.display = "block"),
                            ie.appendChild(e).appendChild(t).appendChild(n),
                            (n = C.getComputedStyle(t)),
                            (qe = parseInt(n.height, 10) + parseInt(n.borderTopWidth, 10) + parseInt(n.borderBottomWidth, 10) === t.offsetHeight),
                            ie.removeChild(e)),
                        qe
                    );
                },
            }));
    var Ue = ["Webkit", "Moz", "ms"],
        Ke = T.createElement("div").style,
        Ze = {};
    function Qe(e) {
        var t = S.cssProps[e] || Ze[e];
        return (
            t ||
            (e in Ke
                ? e
                : (Ze[e] =
                      (function (e) {
                          for (var t = e[0].toUpperCase() + e.slice(1), n = Ue.length; n--; ) if ((e = Ue[n] + t) in Ke) return e;
                      })(e) || e))
        );
    }
    var Je = /^(none|table(?!-c[ea]).+)/,
        et = /^--/,
        tt = { position: "absolute", visibility: "hidden", display: "block" },
        nt = { letterSpacing: "0", fontWeight: "400" };
    function it(e, t, n) {
        var i = te.exec(t);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t;
    }
    function st(e, t, n, i, s, a) {
        var r = "width" === t ? 1 : 0,
            o = 0,
            l = 0;
        if (n === (i ? "border" : "content")) return 0;
        for (; r < 4; r += 2)
            "margin" === n && (l += S.css(e, n + ne[r], !0, s)),
                i
                    ? ("content" === n && (l -= S.css(e, "padding" + ne[r], !0, s)), "margin" !== n && (l -= S.css(e, "border" + ne[r] + "Width", !0, s)))
                    : ((l += S.css(e, "padding" + ne[r], !0, s)), "padding" !== n ? (l += S.css(e, "border" + ne[r] + "Width", !0, s)) : (o += S.css(e, "border" + ne[r] + "Width", !0, s)));
        return !i && 0 <= a && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - a - l - o - 0.5)) || 0), l;
    }
    function at(e, t, n) {
        var i = ze(e),
            s = (!y.boxSizingReliable() || n) && "border-box" === S.css(e, "boxSizing", !1, i),
            a = s,
            r = Ve(e, t, i),
            o = "offset" + t[0].toUpperCase() + t.slice(1);
        if (Re.test(r)) {
            if (!n) return r;
            r = "auto";
        }
        return (
            ((!y.boxSizingReliable() && s) || (!y.reliableTrDimensions() && k(e, "tr")) || "auto" === r || (!parseFloat(r) && "inline" === S.css(e, "display", !1, i))) &&
                e.getClientRects().length &&
                ((s = "border-box" === S.css(e, "boxSizing", !1, i)), (a = o in e) && (r = e[o])),
            (r = parseFloat(r) || 0) + st(e, t, n || (s ? "border" : "content"), a, i, r) + "px"
        );
    }
    function rt(e, t, n, i, s) {
        return new rt.prototype.init(e, t, n, i, s);
    }
    S.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        e = Ve(e, "opacity");
                        return "" === e ? "1" : e;
                    }
                },
            },
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
        },
        cssProps: {},
        style: function (e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var s,
                    a,
                    r,
                    o = Y(t),
                    l = et.test(t),
                    c = e.style;
                if ((l || (t = Qe(o)), (r = S.cssHooks[t] || S.cssHooks[o]), void 0 === n)) return r && "get" in r && void 0 !== (s = r.get(e, !1, i)) ? s : c[t];
                "string" === (a = typeof n) && (s = te.exec(n)) && s[1] && ((n = oe(e, t, s)), (a = "number")),
                    null != n &&
                        n == n &&
                        ("number" !== a || l || (n += (s && s[3]) || (S.cssNumber[o] ? "" : "px")),
                        y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"),
                        (r && "set" in r && void 0 === (n = r.set(e, n, i))) || (l ? c.setProperty(t, n) : (c[t] = n)));
            }
        },
        css: function (e, t, n, i) {
            var s,
                a = Y(t);
            return (
                et.test(t) || (t = Qe(a)),
                "normal" === (s = void 0 === (s = (a = S.cssHooks[t] || S.cssHooks[a]) && "get" in a ? a.get(e, !0, n) : s) ? Ve(e, t, i) : s) && t in nt && (s = nt[t]),
                "" === n || n ? ((t = parseFloat(s)), !0 === n || isFinite(t) ? t || 0 : s) : s
            );
        },
    }),
        S.each(["height", "width"], function (e, o) {
            S.cssHooks[o] = {
                get: function (e, t, n) {
                    if (t)
                        return !Je.test(S.css(e, "display")) || (e.getClientRects().length && e.getBoundingClientRect().width)
                            ? at(e, o, n)
                            : Oe(e, tt, function () {
                                  return at(e, o, n);
                              });
                },
                set: function (e, t, n) {
                    var i,
                        s = ze(e),
                        a = !y.scrollboxSize() && "absolute" === s.position,
                        r = (a || n) && "border-box" === S.css(e, "boxSizing", !1, s),
                        n = n ? st(e, o, n, r, s) : 0;
                    return (
                        r && a && (n -= Math.ceil(e["offset" + o[0].toUpperCase() + o.slice(1)] - parseFloat(s[o]) - st(e, o, "border", !1, s) - 0.5)),
                        n && (i = te.exec(t)) && "px" !== (i[3] || "px") && ((e.style[o] = t), (t = S.css(e, o))),
                        it(0, t, n)
                    );
                },
            };
        }),
        (S.cssHooks.marginLeft = Ge(y.reliableMarginLeft, function (e, t) {
            if (t)
                return (
                    (parseFloat(Ve(e, "marginLeft")) ||
                        e.getBoundingClientRect().left -
                            Oe(e, { marginLeft: 0 }, function () {
                                return e.getBoundingClientRect().left;
                            })) + "px"
                );
        })),
        S.each({ margin: "", padding: "", border: "Width" }, function (s, a) {
            (S.cssHooks[s + a] = {
                expand: function (e) {
                    for (var t = 0, n = {}, i = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[s + ne[t] + a] = i[t] || i[t - 2] || i[0];
                    return n;
                },
            }),
                "margin" !== s && (S.cssHooks[s + a].set = it);
        }),
        S.fn.extend({
            css: function (e, t) {
                return F(
                    this,
                    function (e, t, n) {
                        var i,
                            s,
                            a = {},
                            r = 0;
                        if (Array.isArray(t)) {
                            for (i = ze(e), s = t.length; r < s; r++) a[t[r]] = S.css(e, t[r], !1, i);
                            return a;
                        }
                        return void 0 !== n ? S.style(e, t, n) : S.css(e, t);
                    },
                    e,
                    t,
                    1 < arguments.length
                );
            },
        }),
        (((S.Tween = rt).prototype = {
            constructor: rt,
            init: function (e, t, n, i, s, a) {
                (this.elem = e), (this.prop = n), (this.easing = s || S.easing._default), (this.options = t), (this.start = this.now = this.cur()), (this.end = i), (this.unit = a || (S.cssNumber[n] ? "" : "px"));
            },
            cur: function () {
                var e = rt.propHooks[this.prop];
                return (e && e.get ? e : rt.propHooks._default).get(this);
            },
            run: function (e) {
                var t,
                    n = rt.propHooks[this.prop];
                return (
                    this.options.duration ? (this.pos = t = S.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration)) : (this.pos = t = e),
                    (this.now = (this.end - this.start) * t + this.start),
                    this.options.step && this.options.step.call(this.elem, this.now, this),
                    (n && n.set ? n : rt.propHooks._default).set(this),
                    this
                );
            },
        }).init.prototype = rt.prototype),
        ((rt.propHooks = {
            _default: {
                get: function (e) {
                    return 1 !== e.elem.nodeType || (null != e.elem[e.prop] && null == e.elem.style[e.prop]) ? e.elem[e.prop] : (e = S.css(e.elem, e.prop, "")) && "auto" !== e ? e : 0;
                },
                set: function (e) {
                    S.fx.step[e.prop] ? S.fx.step[e.prop](e) : 1 !== e.elem.nodeType || (!S.cssHooks[e.prop] && null == e.elem.style[Qe(e.prop)]) ? (e.elem[e.prop] = e.now) : S.style(e.elem, e.prop, e.now + e.unit);
                },
            },
        }).scrollTop = rt.propHooks.scrollLeft = {
            set: function (e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
            },
        }),
        (S.easing = {
            linear: function (e) {
                return e;
            },
            swing: function (e) {
                return 0.5 - Math.cos(e * Math.PI) / 2;
            },
            _default: "swing",
        }),
        (S.fx = rt.prototype.init),
        (S.fx.step = {});
    var ot,
        lt,
        ct = /^(?:toggle|show|hide)$/,
        dt = /queueHooks$/;
    function pt() {
        lt && (!1 === T.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(pt) : C.setTimeout(pt, S.fx.interval), S.fx.tick());
    }
    function ut() {
        return (
            C.setTimeout(function () {
                ot = void 0;
            }),
            (ot = Date.now())
        );
    }
    function ft(e, t) {
        var n,
            i = 0,
            s = { height: e };
        for (t = t ? 1 : 0; i < 4; i += 2 - t) s["margin" + (n = ne[i])] = s["padding" + n] = e;
        return t && (s.opacity = s.width = e), s;
    }
    function ht(e, t, n) {
        for (var i, s = (mt.tweeners[t] || []).concat(mt.tweeners["*"]), a = 0, r = s.length; a < r; a++) if ((i = s[a].call(n, t, e))) return i;
    }
    function mt(s, e, t) {
        var n,
            a,
            i = 0,
            r = mt.prefilters.length,
            o = S.Deferred().always(function () {
                delete l.elem;
            }),
            l = function () {
                if (a) return !1;
                for (var e = ot || ut(), e = Math.max(0, c.startTime + c.duration - e), t = 1 - (e / c.duration || 0), n = 0, i = c.tweens.length; n < i; n++) c.tweens[n].run(t);
                return o.notifyWith(s, [c, t, e]), t < 1 && i ? e : (i || o.notifyWith(s, [c, 1, 0]), o.resolveWith(s, [c]), !1);
            },
            c = o.promise({
                elem: s,
                props: S.extend({}, e),
                opts: S.extend(!0, { specialEasing: {}, easing: S.easing._default }, t),
                originalProperties: e,
                originalOptions: t,
                startTime: ot || ut(),
                duration: t.duration,
                tweens: [],
                createTween: function (e, t) {
                    e = S.Tween(s, c.opts, e, t, c.opts.specialEasing[e] || c.opts.easing);
                    return c.tweens.push(e), e;
                },
                stop: function (e) {
                    var t = 0,
                        n = e ? c.tweens.length : 0;
                    if (a) return this;
                    for (a = !0; t < n; t++) c.tweens[t].run(1);
                    return e ? (o.notifyWith(s, [c, 1, 0]), o.resolveWith(s, [c, e])) : o.rejectWith(s, [c, e]), this;
                },
            }),
            d = c.props;
        for (
            !(function (e, t) {
                var n, i, s, a, r;
                for (n in e)
                    if (((s = t[(i = Y(n))]), (a = e[n]), Array.isArray(a) && ((s = a[1]), (a = e[n] = a[0])), n !== i && ((e[i] = a), delete e[n]), (r = S.cssHooks[i]) && ("expand" in r)))
                        for (n in ((a = r.expand(a)), delete e[i], a)) (n in e) || ((e[n] = a[n]), (t[n] = s));
                    else t[i] = s;
            })(d, c.opts.specialEasing);
            i < r;
            i++
        )
            if ((n = mt.prefilters[i].call(c, s, d, c.opts))) return m(n.stop) && (S._queueHooks(c.elem, c.opts.queue).stop = n.stop.bind(n)), n;
        return (
            S.map(d, ht, c),
            m(c.opts.start) && c.opts.start.call(s, c),
            c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always),
            S.fx.timer(S.extend(l, { elem: s, anim: c, queue: c.opts.queue })),
            c
        );
    }
    (S.Animation = S.extend(mt, {
        tweeners: {
            "*": [
                function (e, t) {
                    var n = this.createTween(e, t);
                    return oe(n.elem, e, te.exec(t), n), n;
                },
            ],
        },
        tweener: function (e, t) {
            for (var n, i = 0, s = (e = m(e) ? ((t = e), ["*"]) : e.match(D)).length; i < s; i++) (n = e[i]), (mt.tweeners[n] = mt.tweeners[n] || []), mt.tweeners[n].unshift(t);
        },
        prefilters: [
            function (e, t, n) {
                var i,
                    s,
                    a,
                    r,
                    o,
                    l,
                    c,
                    d = "width" in t || "height" in t,
                    p = this,
                    u = {},
                    f = e.style,
                    h = e.nodeType && re(e),
                    m = U.get(e, "fxshow");
                for (i in (n.queue ||
                    (null == (r = S._queueHooks(e, "fx")).unqueued &&
                        ((r.unqueued = 0),
                        (o = r.empty.fire),
                        (r.empty.fire = function () {
                            r.unqueued || o();
                        })),
                    r.unqueued++,
                    p.always(function () {
                        p.always(function () {
                            r.unqueued--, S.queue(e, "fx").length || r.empty.fire();
                        });
                    })),
                t))
                    if (((s = t[i]), ct.test(s))) {
                        if ((delete t[i], (a = a || "toggle" === s), s === (h ? "hide" : "show"))) {
                            if ("show" !== s || !m || void 0 === m[i]) continue;
                            h = !0;
                        }
                        u[i] = (m && m[i]) || S.style(e, i);
                    }
                if ((l = !S.isEmptyObject(t)) || !S.isEmptyObject(u))
                    for (i in (d &&
                        1 === e.nodeType &&
                        ((n.overflow = [f.overflow, f.overflowX, f.overflowY]),
                        null == (c = m && m.display) && (c = U.get(e, "display")),
                        "none" === (d = S.css(e, "display")) && (c ? (d = c) : (ce([e], !0), (c = e.style.display || c), (d = S.css(e, "display")), ce([e]))),
                        ("inline" === d || ("inline-block" === d && null != c)) &&
                            "none" === S.css(e, "float") &&
                            (l ||
                                (p.done(function () {
                                    f.display = c;
                                }),
                                null == c && ((d = f.display), (c = "none" === d ? "" : d))),
                            (f.display = "inline-block"))),
                    n.overflow &&
                        ((f.overflow = "hidden"),
                        p.always(function () {
                            (f.overflow = n.overflow[0]), (f.overflowX = n.overflow[1]), (f.overflowY = n.overflow[2]);
                        })),
                    (l = !1),
                    u))
                        l ||
                            (m ? "hidden" in m && (h = m.hidden) : (m = U.access(e, "fxshow", { display: c })),
                            a && (m.hidden = !h),
                            h && ce([e], !0),
                            p.done(function () {
                                for (i in (h || ce([e]), U.remove(e, "fxshow"), u)) S.style(e, i, u[i]);
                            })),
                            (l = ht(h ? m[i] : 0, i, p)),
                            i in m || ((m[i] = l.start), h && ((l.end = l.start), (l.start = 0)));
            },
        ],
        prefilter: function (e, t) {
            t ? mt.prefilters.unshift(e) : mt.prefilters.push(e);
        },
    })),
        (S.speed = function (e, t, n) {
            var i = e && "object" == typeof e ? S.extend({}, e) : { complete: n || (!n && t) || (m(e) && e), duration: e, easing: (n && t) || (t && !m(t) && t) };
            return (
                S.fx.off ? (i.duration = 0) : "number" != typeof i.duration && (i.duration in S.fx.speeds ? (i.duration = S.fx.speeds[i.duration]) : (i.duration = S.fx.speeds._default)),
                (null != i.queue && !0 !== i.queue) || (i.queue = "fx"),
                (i.old = i.complete),
                (i.complete = function () {
                    m(i.old) && i.old.call(this), i.queue && S.dequeue(this, i.queue);
                }),
                i
            );
        }),
        S.fn.extend({
            fadeTo: function (e, t, n, i) {
                return this.filter(re).css("opacity", 0).show().end().animate({ opacity: t }, e, n, i);
            },
            animate: function (t, e, n, i) {
                var s = S.isEmptyObject(t),
                    a = S.speed(e, n, i),
                    i = function () {
                        var e = mt(this, S.extend({}, t), a);
                        (s || U.get(this, "finish")) && e.stop(!0);
                    };
                return (i.finish = i), s || !1 === a.queue ? this.each(i) : this.queue(a.queue, i);
            },
            stop: function (s, e, a) {
                function r(e) {
                    var t = e.stop;
                    delete e.stop, t(a);
                }
                return (
                    "string" != typeof s && ((a = e), (e = s), (s = void 0)),
                    e && this.queue(s || "fx", []),
                    this.each(function () {
                        var e = !0,
                            t = null != s && s + "queueHooks",
                            n = S.timers,
                            i = U.get(this);
                        if (t) i[t] && i[t].stop && r(i[t]);
                        else for (t in i) i[t] && i[t].stop && dt.test(t) && r(i[t]);
                        for (t = n.length; t--; ) n[t].elem !== this || (null != s && n[t].queue !== s) || (n[t].anim.stop(a), (e = !1), n.splice(t, 1));
                        (!e && a) || S.dequeue(this, s);
                    })
                );
            },
            finish: function (r) {
                return (
                    !1 !== r && (r = r || "fx"),
                    this.each(function () {
                        var e,
                            t = U.get(this),
                            n = t[r + "queue"],
                            i = t[r + "queueHooks"],
                            s = S.timers,
                            a = n ? n.length : 0;
                        for (t.finish = !0, S.queue(this, r, []), i && i.stop && i.stop.call(this, !0), e = s.length; e--; ) s[e].elem === this && s[e].queue === r && (s[e].anim.stop(!0), s.splice(e, 1));
                        for (e = 0; e < a; e++) n[e] && n[e].finish && n[e].finish.call(this);
                        delete t.finish;
                    })
                );
            },
        }),
        S.each(["toggle", "show", "hide"], function (e, i) {
            var s = S.fn[i];
            S.fn[i] = function (e, t, n) {
                return null == e || "boolean" == typeof e ? s.apply(this, arguments) : this.animate(ft(i, !0), e, t, n);
            };
        }),
        S.each({ slideDown: ft("show"), slideUp: ft("hide"), slideToggle: ft("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (e, i) {
            S.fn[e] = function (e, t, n) {
                return this.animate(i, e, t, n);
            };
        }),
        (S.timers = []),
        (S.fx.tick = function () {
            var e,
                t = 0,
                n = S.timers;
            for (ot = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
            n.length || S.fx.stop(), (ot = void 0);
        }),
        (S.fx.timer = function (e) {
            S.timers.push(e), S.fx.start();
        }),
        (S.fx.interval = 13),
        (S.fx.start = function () {
            lt || ((lt = !0), pt());
        }),
        (S.fx.stop = function () {
            lt = null;
        }),
        (S.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
        (S.fn.delay = function (i, e) {
            return (
                (i = (S.fx && S.fx.speeds[i]) || i),
                this.queue((e = e || "fx"), function (e, t) {
                    var n = C.setTimeout(e, i);
                    t.stop = function () {
                        C.clearTimeout(n);
                    };
                })
            );
        }),
        (p = T.createElement("input")),
        (ee = T.createElement("select").appendChild(T.createElement("option"))),
        (p.type = "checkbox"),
        (y.checkOn = "" !== p.value),
        (y.optSelected = ee.selected),
        ((p = T.createElement("input")).value = "t"),
        (p.type = "radio"),
        (y.radioValue = "t" === p.value);
    var gt,
        vt = S.expr.attrHandle;
    S.fn.extend({
        attr: function (e, t) {
            return F(this, S.attr, e, t, 1 < arguments.length);
        },
        removeAttr: function (e) {
            return this.each(function () {
                S.removeAttr(this, e);
            });
        },
    }),
        S.extend({
            attr: function (e, t, n) {
                var i,
                    s,
                    a = e.nodeType;
                if (3 !== a && 8 !== a && 2 !== a)
                    return void 0 === e.getAttribute
                        ? S.prop(e, t, n)
                        : ((1 === a && S.isXMLDoc(e)) || (s = S.attrHooks[t.toLowerCase()] || (S.expr.match.bool.test(t) ? gt : void 0)),
                          void 0 !== n
                              ? null === n
                                  ? void S.removeAttr(e, t)
                                  : s && "set" in s && void 0 !== (i = s.set(e, n, t))
                                  ? i
                                  : (e.setAttribute(t, n + ""), n)
                              : !(s && "get" in s && null !== (i = s.get(e, t))) && null == (i = S.find.attr(e, t))
                              ? void 0
                              : i);
            },
            attrHooks: {
                type: {
                    set: function (e, t) {
                        if (!y.radioValue && "radio" === t && k(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t;
                        }
                    },
                },
            },
            removeAttr: function (e, t) {
                var n,
                    i = 0,
                    s = t && t.match(D);
                if (s && 1 === e.nodeType) for (; (n = s[i++]); ) e.removeAttribute(n);
            },
        }),
        (gt = {
            set: function (e, t, n) {
                return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n), n;
            },
        }),
        S.each(S.expr.match.bool.source.match(/\w+/g), function (e, t) {
            var r = vt[t] || S.find.attr;
            vt[t] = function (e, t, n) {
                var i,
                    s,
                    a = t.toLowerCase();
                return n || ((s = vt[a]), (vt[a] = i), (i = null != r(e, t, n) ? a : null), (vt[a] = s)), i;
            };
        });
    var bt = /^(?:input|select|textarea|button)$/i,
        yt = /^(?:a|area)$/i;
    function xt(e) {
        return (e.match(D) || []).join(" ");
    }
    function wt(e) {
        return (e.getAttribute && e.getAttribute("class")) || "";
    }
    function Ct(e) {
        return Array.isArray(e) ? e : ("string" == typeof e && e.match(D)) || [];
    }
    S.fn.extend({
        prop: function (e, t) {
            return F(this, S.prop, e, t, 1 < arguments.length);
        },
        removeProp: function (e) {
            return this.each(function () {
                delete this[S.propFix[e] || e];
            });
        },
    }),
        S.extend({
            prop: function (e, t, n) {
                var i,
                    s,
                    a = e.nodeType;
                if (3 !== a && 8 !== a && 2 !== a)
                    return (
                        (1 === a && S.isXMLDoc(e)) || ((t = S.propFix[t] || t), (s = S.propHooks[t])),
                        void 0 !== n ? (s && "set" in s && void 0 !== (i = s.set(e, n, t)) ? i : (e[t] = n)) : s && "get" in s && null !== (i = s.get(e, t)) ? i : e[t]
                    );
            },
            propHooks: {
                tabIndex: {
                    get: function (e) {
                        var t = S.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : bt.test(e.nodeName) || (yt.test(e.nodeName) && e.href) ? 0 : -1;
                    },
                },
            },
            propFix: { for: "htmlFor", class: "className" },
        }),
        y.optSelected ||
            (S.propHooks.selected = {
                get: function (e) {
                    e = e.parentNode;
                    return e && e.parentNode && e.parentNode.selectedIndex, null;
                },
                set: function (e) {
                    e = e.parentNode;
                    e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex);
                },
            }),
        S.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
            S.propFix[this.toLowerCase()] = this;
        }),
        S.fn.extend({
            addClass: function (t) {
                var e,
                    n,
                    i,
                    s,
                    a,
                    r,
                    o = 0;
                if (m(t))
                    return this.each(function (e) {
                        S(this).addClass(t.call(this, e, wt(this)));
                    });
                if ((e = Ct(t)).length)
                    for (; (n = this[o++]); )
                        if (((r = wt(n)), (i = 1 === n.nodeType && " " + xt(r) + " "))) {
                            for (a = 0; (s = e[a++]); ) i.indexOf(" " + s + " ") < 0 && (i += s + " ");
                            r !== (r = xt(i)) && n.setAttribute("class", r);
                        }
                return this;
            },
            removeClass: function (t) {
                var e,
                    n,
                    i,
                    s,
                    a,
                    r,
                    o = 0;
                if (m(t))
                    return this.each(function (e) {
                        S(this).removeClass(t.call(this, e, wt(this)));
                    });
                if (!arguments.length) return this.attr("class", "");
                if ((e = Ct(t)).length)
                    for (; (n = this[o++]); )
                        if (((r = wt(n)), (i = 1 === n.nodeType && " " + xt(r) + " "))) {
                            for (a = 0; (s = e[a++]); ) for (; -1 < i.indexOf(" " + s + " "); ) i = i.replace(" " + s + " ", " ");
                            r !== (r = xt(i)) && n.setAttribute("class", r);
                        }
                return this;
            },
            toggleClass: function (s, t) {
                var a = typeof s,
                    r = "string" == a || Array.isArray(s);
                return "boolean" == typeof t && r
                    ? t
                        ? this.addClass(s)
                        : this.removeClass(s)
                    : m(s)
                    ? this.each(function (e) {
                          S(this).toggleClass(s.call(this, e, wt(this), t), t);
                      })
                    : this.each(function () {
                          var e, t, n, i;
                          if (r) for (t = 0, n = S(this), i = Ct(s); (e = i[t++]); ) n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
                          else (void 0 !== s && "boolean" != a) || ((e = wt(this)) && U.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", (!e && !1 !== s && U.get(this, "__className__")) || ""));
                      });
            },
            hasClass: function (e) {
                for (var t, n = 0, i = " " + e + " "; (t = this[n++]); ) if (1 === t.nodeType && -1 < (" " + xt(wt(t)) + " ").indexOf(i)) return !0;
                return !1;
            },
        });
    var Tt = /\r/g;
    S.fn.extend({
        val: function (t) {
            var n,
                e,
                i,
                s = this[0];
            return arguments.length
                ? ((i = m(t)),
                  this.each(function (e) {
                      1 === this.nodeType &&
                          (null == (e = i ? t.call(this, e, S(this).val()) : t)
                              ? (e = "")
                              : "number" == typeof e
                              ? (e += "")
                              : Array.isArray(e) &&
                                (e = S.map(e, function (e) {
                                    return null == e ? "" : e + "";
                                })),
                          ((n = S.valHooks[this.type] || S.valHooks[this.nodeName.toLowerCase()]) && "set" in n && void 0 !== n.set(this, e, "value")) || (this.value = e));
                  }))
                : s
                ? (n = S.valHooks[s.type] || S.valHooks[s.nodeName.toLowerCase()]) && "get" in n && void 0 !== (e = n.get(s, "value"))
                    ? e
                    : "string" == typeof (e = s.value)
                    ? e.replace(Tt, "")
                    : null == e
                    ? ""
                    : e
                : void 0;
        },
    }),
        S.extend({
            valHooks: {
                option: {
                    get: function (e) {
                        var t = S.find.attr(e, "value");
                        return null != t ? t : xt(S.text(e));
                    },
                },
                select: {
                    get: function (e) {
                        for (var t, n = e.options, i = e.selectedIndex, s = "select-one" === e.type, a = s ? null : [], r = s ? i + 1 : n.length, o = i < 0 ? r : s ? i : 0; o < r; o++)
                            if (((t = n[o]).selected || o === i) && !t.disabled && (!t.parentNode.disabled || !k(t.parentNode, "optgroup"))) {
                                if (((t = S(t).val()), s)) return t;
                                a.push(t);
                            }
                        return a;
                    },
                    set: function (e, t) {
                        for (var n, i, s = e.options, a = S.makeArray(t), r = s.length; r--; ) ((i = s[r]).selected = -1 < S.inArray(S.valHooks.option.get(i), a)) && (n = !0);
                        return n || (e.selectedIndex = -1), a;
                    },
                },
            },
        }),
        S.each(["radio", "checkbox"], function () {
            (S.valHooks[this] = {
                set: function (e, t) {
                    if (Array.isArray(t)) return (e.checked = -1 < S.inArray(S(e).val(), t));
                },
            }),
                y.checkOn ||
                    (S.valHooks[this].get = function (e) {
                        return null === e.getAttribute("value") ? "on" : e.value;
                    });
        }),
        (y.focusin = "onfocusin" in C);
    function St(e) {
        e.stopPropagation();
    }
    var Et = /^(?:focusinfocus|focusoutblur)$/;
    S.extend(S.event, {
        trigger: function (e, t, n, i) {
            var s,
                a,
                r,
                o,
                l,
                c,
                d,
                p = [n || T],
                u = b.call(e, "type") ? e.type : e,
                f = b.call(e, "namespace") ? e.namespace.split(".") : [],
                h = (d = a = n = n || T);
            if (
                3 !== n.nodeType &&
                8 !== n.nodeType &&
                !Et.test(u + S.event.triggered) &&
                (-1 < u.indexOf(".") && ((u = (f = u.split(".")).shift()), f.sort()),
                (o = u.indexOf(":") < 0 && "on" + u),
                ((e = e[S.expando] ? e : new S.Event(u, "object" == typeof e && e)).isTrigger = i ? 2 : 3),
                (e.namespace = f.join(".")),
                (e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null),
                (e.result = void 0),
                e.target || (e.target = n),
                (t = null == t ? [e] : S.makeArray(t, [e])),
                (c = S.event.special[u] || {}),
                i || !c.trigger || !1 !== c.trigger.apply(n, t))
            ) {
                if (!i && !c.noBubble && !g(n)) {
                    for (r = c.delegateType || u, Et.test(r + u) || (h = h.parentNode); h; h = h.parentNode) p.push(h), (a = h);
                    a === (n.ownerDocument || T) && p.push(a.defaultView || a.parentWindow || C);
                }
                for (s = 0; (h = p[s++]) && !e.isPropagationStopped(); )
                    (d = h),
                        (e.type = 1 < s ? r : c.bindType || u),
                        (l = (U.get(h, "events") || Object.create(null))[e.type] && U.get(h, "handle")) && l.apply(h, t),
                        (l = o && h[o]) && l.apply && V(h) && ((e.result = l.apply(h, t)), !1 === e.result && e.preventDefault());
                return (
                    (e.type = u),
                    i ||
                        e.isDefaultPrevented() ||
                        (c._default && !1 !== c._default.apply(p.pop(), t)) ||
                        !V(n) ||
                        (o &&
                            m(n[u]) &&
                            !g(n) &&
                            ((a = n[o]) && (n[o] = null),
                            (S.event.triggered = u),
                            e.isPropagationStopped() && d.addEventListener(u, St),
                            n[u](),
                            e.isPropagationStopped() && d.removeEventListener(u, St),
                            (S.event.triggered = void 0),
                            a && (n[o] = a))),
                    e.result
                );
            }
        },
        simulate: function (e, t, n) {
            e = S.extend(new S.Event(), n, { type: e, isSimulated: !0 });
            S.event.trigger(e, null, t);
        },
    }),
        S.fn.extend({
            trigger: function (e, t) {
                return this.each(function () {
                    S.event.trigger(e, t, this);
                });
            },
            triggerHandler: function (e, t) {
                var n = this[0];
                if (n) return S.event.trigger(e, t, n, !0);
            },
        }),
        y.focusin ||
            S.each({ focus: "focusin", blur: "focusout" }, function (n, i) {
                function s(e) {
                    S.event.simulate(i, e.target, S.event.fix(e));
                }
                S.event.special[i] = {
                    setup: function () {
                        var e = this.ownerDocument || this.document || this,
                            t = U.access(e, i);
                        t || e.addEventListener(n, s, !0), U.access(e, i, (t || 0) + 1);
                    },
                    teardown: function () {
                        var e = this.ownerDocument || this.document || this,
                            t = U.access(e, i) - 1;
                        t ? U.access(e, i, t) : (e.removeEventListener(n, s, !0), U.remove(e, i));
                    },
                };
            });
    var $t = C.location,
        kt = { guid: Date.now() },
        Mt = /\?/;
    S.parseXML = function (e) {
        var t, n;
        if (!e || "string" != typeof e) return null;
        try {
            t = new C.DOMParser().parseFromString(e, "text/xml");
        } catch (e) {}
        return (
            (n = t && t.getElementsByTagName("parsererror")[0]),
            (t && !n) ||
                S.error(
                    "Invalid XML: " +
                        (n
                            ? S.map(n.childNodes, function (e) {
                                  return e.textContent;
                              }).join("\n")
                            : e)
                ),
            t
        );
    };
    var Pt = /\[\]$/,
        It = /\r?\n/g,
        At = /^(?:submit|button|image|reset|file)$/i,
        Lt = /^(?:input|select|textarea|keygen)/i;
    (S.param = function (e, t) {
        function n(e, t) {
            (t = m(t) ? t() : t), (s[s.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == t ? "" : t));
        }
        var i,
            s = [];
        if (null == e) return "";
        if (Array.isArray(e) || (e.jquery && !S.isPlainObject(e)))
            S.each(e, function () {
                n(this.name, this.value);
            });
        else
            for (i in e)
                !(function n(i, e, s, a) {
                    if (Array.isArray(e))
                        S.each(e, function (e, t) {
                            s || Pt.test(i) ? a(i, t) : n(i + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, s, a);
                        });
                    else if (s || "object" !== h(e)) a(i, e);
                    else for (var t in e) n(i + "[" + t + "]", e[t], s, a);
                })(i, e[i], t, n);
        return s.join("&");
    }),
        S.fn.extend({
            serialize: function () {
                return S.param(this.serializeArray());
            },
            serializeArray: function () {
                return this.map(function () {
                    var e = S.prop(this, "elements");
                    return e ? S.makeArray(e) : this;
                })
                    .filter(function () {
                        var e = this.type;
                        return this.name && !S(this).is(":disabled") && Lt.test(this.nodeName) && !At.test(e) && (this.checked || !de.test(e));
                    })
                    .map(function (e, t) {
                        var n = S(this).val();
                        return null == n
                            ? null
                            : Array.isArray(n)
                            ? S.map(n, function (e) {
                                  return { name: t.name, value: e.replace(It, "\r\n") };
                              })
                            : { name: t.name, value: n.replace(It, "\r\n") };
                    })
                    .get();
            },
        });
    var zt = /%20/g,
        Ot = /#.*$/,
        Dt = /([?&])_=[^&]*/,
        jt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        _t = /^(?:GET|HEAD)$/,
        Nt = /^\/\//,
        qt = {},
        Ht = {},
        Bt = "*/".concat("*"),
        Ft = T.createElement("a");
    function Rt(a) {
        return function (e, t) {
            "string" != typeof e && ((t = e), (e = "*"));
            var n,
                i = 0,
                s = e.toLowerCase().match(D) || [];
            if (m(t)) for (; (n = s[i++]); ) "+" === n[0] ? ((n = n.slice(1) || "*"), (a[n] = a[n] || []).unshift(t)) : (a[n] = a[n] || []).push(t);
        };
    }
    function Wt(t, i, s, a) {
        var r = {},
            o = t === Ht;
        function l(e) {
            var n;
            return (
                (r[e] = !0),
                S.each(t[e] || [], function (e, t) {
                    t = t(i, s, a);
                    return "string" != typeof t || o || r[t] ? (o ? !(n = t) : void 0) : (i.dataTypes.unshift(t), l(t), !1);
                }),
                n
            );
        }
        return l(i.dataTypes[0]) || (!r["*"] && l("*"));
    }
    function Xt(e, t) {
        var n,
            i,
            s = S.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((s[n] ? e : (i = i || {}))[n] = t[n]);
        return i && S.extend(!0, e, i), e;
    }
    (Ft.href = $t.href),
        S.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: $t.href,
                type: "GET",
                isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test($t.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: { "*": Bt, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" },
                contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
                responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" },
                converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": S.parseXML },
                flatOptions: { url: !0, context: !0 },
            },
            ajaxSetup: function (e, t) {
                return t ? Xt(Xt(e, S.ajaxSettings), t) : Xt(S.ajaxSettings, e);
            },
            ajaxPrefilter: Rt(qt),
            ajaxTransport: Rt(Ht),
            ajax: function (e, t) {
                "object" == typeof e && ((t = e), (e = void 0));
                var l,
                    c,
                    d,
                    n,
                    p,
                    u,
                    f,
                    i,
                    s,
                    h = S.ajaxSetup({}, (t = t || {})),
                    m = h.context || h,
                    g = h.context && (m.nodeType || m.jquery) ? S(m) : S.event,
                    v = S.Deferred(),
                    b = S.Callbacks("once memory"),
                    y = h.statusCode || {},
                    a = {},
                    r = {},
                    o = "canceled",
                    x = {
                        readyState: 0,
                        getResponseHeader: function (e) {
                            var t;
                            if (u) {
                                if (!n) for (n = {}; (t = jt.exec(d)); ) n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2]);
                                t = n[e.toLowerCase() + " "];
                            }
                            return null == t ? null : t.join(", ");
                        },
                        getAllResponseHeaders: function () {
                            return u ? d : null;
                        },
                        setRequestHeader: function (e, t) {
                            return null == u && ((e = r[e.toLowerCase()] = r[e.toLowerCase()] || e), (a[e] = t)), this;
                        },
                        overrideMimeType: function (e) {
                            return null == u && (h.mimeType = e), this;
                        },
                        statusCode: function (e) {
                            if (e)
                                if (u) x.always(e[x.status]);
                                else for (var t in e) y[t] = [y[t], e[t]];
                            return this;
                        },
                        abort: function (e) {
                            e = e || o;
                            return l && l.abort(e), w(0, e), this;
                        },
                    };
                if (
                    (v.promise(x),
                    (h.url = ((e || h.url || $t.href) + "").replace(Nt, $t.protocol + "//")),
                    (h.type = t.method || t.type || h.method || h.type),
                    (h.dataTypes = (h.dataType || "*").toLowerCase().match(D) || [""]),
                    null == h.crossDomain)
                ) {
                    s = T.createElement("a");
                    try {
                        (s.href = h.url), (s.href = s.href), (h.crossDomain = Ft.protocol + "//" + Ft.host != s.protocol + "//" + s.host);
                    } catch (e) {
                        h.crossDomain = !0;
                    }
                }
                if ((h.data && h.processData && "string" != typeof h.data && (h.data = S.param(h.data, h.traditional)), Wt(qt, h, t, x), u)) return x;
                for (i in ((f = S.event && h.global) && 0 == S.active++ && S.event.trigger("ajaxStart"),
                (h.type = h.type.toUpperCase()),
                (h.hasContent = !_t.test(h.type)),
                (c = h.url.replace(Ot, "")),
                h.hasContent
                    ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(zt, "+"))
                    : ((s = h.url.slice(c.length)),
                      h.data && (h.processData || "string" == typeof h.data) && ((c += (Mt.test(c) ? "&" : "?") + h.data), delete h.data),
                      !1 === h.cache && ((c = c.replace(Dt, "$1")), (s = (Mt.test(c) ? "&" : "?") + "_=" + kt.guid++ + s)),
                      (h.url = c + s)),
                h.ifModified && (S.lastModified[c] && x.setRequestHeader("If-Modified-Since", S.lastModified[c]), S.etag[c] && x.setRequestHeader("If-None-Match", S.etag[c])),
                ((h.data && h.hasContent && !1 !== h.contentType) || t.contentType) && x.setRequestHeader("Content-Type", h.contentType),
                x.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Bt + "; q=0.01" : "") : h.accepts["*"]),
                h.headers))
                    x.setRequestHeader(i, h.headers[i]);
                if (h.beforeSend && (!1 === h.beforeSend.call(m, x, h) || u)) return x.abort();
                if (((o = "abort"), b.add(h.complete), x.done(h.success), x.fail(h.error), (l = Wt(Ht, h, t, x)))) {
                    if (((x.readyState = 1), f && g.trigger("ajaxSend", [x, h]), u)) return x;
                    h.async &&
                        0 < h.timeout &&
                        (p = C.setTimeout(function () {
                            x.abort("timeout");
                        }, h.timeout));
                    try {
                        (u = !1), l.send(a, w);
                    } catch (e) {
                        if (u) throw e;
                        w(-1, e);
                    }
                } else w(-1, "No Transport");
                function w(e, t, n, i) {
                    var s,
                        a,
                        r,
                        o = t;
                    u ||
                        ((u = !0),
                        p && C.clearTimeout(p),
                        (l = void 0),
                        (d = i || ""),
                        (x.readyState = 0 < e ? 4 : 0),
                        (i = (200 <= e && e < 300) || 304 === e),
                        n &&
                            (r = (function (e, t, n) {
                                for (var i, s, a, r, o = e.contents, l = e.dataTypes; "*" === l[0]; ) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
                                if (i)
                                    for (s in o)
                                        if (o[s] && o[s].test(i)) {
                                            l.unshift(s);
                                            break;
                                        }
                                if (l[0] in n) a = l[0];
                                else {
                                    for (s in n) {
                                        if (!l[0] || e.converters[s + " " + l[0]]) {
                                            a = s;
                                            break;
                                        }
                                        r = r || s;
                                    }
                                    a = a || r;
                                }
                                if (a) return a !== l[0] && l.unshift(a), n[a];
                            })(h, x, n)),
                        !i && -1 < S.inArray("script", h.dataTypes) && S.inArray("json", h.dataTypes) < 0 && (h.converters["text script"] = function () {}),
                        (r = (function (e, t, n, i) {
                            var s,
                                a,
                                r,
                                o,
                                l,
                                c = {},
                                d = e.dataTypes.slice();
                            if (d[1]) for (r in e.converters) c[r.toLowerCase()] = e.converters[r];
                            for (a = d.shift(); a; )
                                if ((e.responseFields[a] && (n[e.responseFields[a]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), (l = a), (a = d.shift())))
                                    if ("*" === a) a = l;
                                    else if ("*" !== l && l !== a) {
                                        if (!(r = c[l + " " + a] || c["* " + a]))
                                            for (s in c)
                                                if ((o = s.split(" "))[1] === a && (r = c[l + " " + o[0]] || c["* " + o[0]])) {
                                                    !0 === r ? (r = c[s]) : !0 !== c[s] && ((a = o[0]), d.unshift(o[1]));
                                                    break;
                                                }
                                        if (!0 !== r)
                                            if (r && e.throws) t = r(t);
                                            else
                                                try {
                                                    t = r(t);
                                                } catch (e) {
                                                    return { state: "parsererror", error: r ? e : "No conversion from " + l + " to " + a };
                                                }
                                    }
                            return { state: "success", data: t };
                        })(h, r, x, i)),
                        i
                            ? (h.ifModified && ((n = x.getResponseHeader("Last-Modified")) && (S.lastModified[c] = n), (n = x.getResponseHeader("etag")) && (S.etag[c] = n)),
                              204 === e || "HEAD" === h.type ? (o = "nocontent") : 304 === e ? (o = "notmodified") : ((o = r.state), (s = r.data), (i = !(a = r.error))))
                            : ((a = o), (!e && o) || ((o = "error"), e < 0 && (e = 0))),
                        (x.status = e),
                        (x.statusText = (t || o) + ""),
                        i ? v.resolveWith(m, [s, o, x]) : v.rejectWith(m, [x, o, a]),
                        x.statusCode(y),
                        (y = void 0),
                        f && g.trigger(i ? "ajaxSuccess" : "ajaxError", [x, h, i ? s : a]),
                        b.fireWith(m, [x, o]),
                        f && (g.trigger("ajaxComplete", [x, h]), --S.active || S.event.trigger("ajaxStop")));
                }
                return x;
            },
            getJSON: function (e, t, n) {
                return S.get(e, t, n, "json");
            },
            getScript: function (e, t) {
                return S.get(e, void 0, t, "script");
            },
        }),
        S.each(["get", "post"], function (e, s) {
            S[s] = function (e, t, n, i) {
                return m(t) && ((i = i || n), (n = t), (t = void 0)), S.ajax(S.extend({ url: e, type: s, dataType: i, data: t, success: n }, S.isPlainObject(e) && e));
            };
        }),
        S.ajaxPrefilter(function (e) {
            for (var t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "");
        }),
        (S._evalUrl = function (e, t, n) {
            return S.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                converters: { "text script": function () {} },
                dataFilter: function (e) {
                    S.globalEval(e, t, n);
                },
            });
        }),
        S.fn.extend({
            wrapAll: function (e) {
                return (
                    this[0] &&
                        (m(e) && (e = e.call(this[0])),
                        (e = S(e, this[0].ownerDocument).eq(0).clone(!0)),
                        this[0].parentNode && e.insertBefore(this[0]),
                        e
                            .map(function () {
                                for (var e = this; e.firstElementChild; ) e = e.firstElementChild;
                                return e;
                            })
                            .append(this)),
                    this
                );
            },
            wrapInner: function (n) {
                return m(n)
                    ? this.each(function (e) {
                          S(this).wrapInner(n.call(this, e));
                      })
                    : this.each(function () {
                          var e = S(this),
                              t = e.contents();
                          t.length ? t.wrapAll(n) : e.append(n);
                      });
            },
            wrap: function (t) {
                var n = m(t);
                return this.each(function (e) {
                    S(this).wrapAll(n ? t.call(this, e) : t);
                });
            },
            unwrap: function (e) {
                return (
                    this.parent(e)
                        .not("body")
                        .each(function () {
                            S(this).replaceWith(this.childNodes);
                        }),
                    this
                );
            },
        }),
        (S.expr.pseudos.hidden = function (e) {
            return !S.expr.pseudos.visible(e);
        }),
        (S.expr.pseudos.visible = function (e) {
            return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
        }),
        (S.ajaxSettings.xhr = function () {
            try {
                return new C.XMLHttpRequest();
            } catch (e) {}
        });
    var Yt = { 0: 200, 1223: 204 },
        Vt = S.ajaxSettings.xhr();
    (y.cors = !!Vt && "withCredentials" in Vt),
        (y.ajax = Vt = !!Vt),
        S.ajaxTransport(function (s) {
            var a, r;
            if (y.cors || (Vt && !s.crossDomain))
                return {
                    send: function (e, t) {
                        var n,
                            i = s.xhr();
                        if ((i.open(s.type, s.url, s.async, s.username, s.password), s.xhrFields)) for (n in s.xhrFields) i[n] = s.xhrFields[n];
                        for (n in (s.mimeType && i.overrideMimeType && i.overrideMimeType(s.mimeType), s.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e)) i.setRequestHeader(n, e[n]);
                        (a = function (e) {
                            return function () {
                                a &&
                                    ((a = r = i.onload = i.onerror = i.onabort = i.ontimeout = i.onreadystatechange = null),
                                    "abort" === e
                                        ? i.abort()
                                        : "error" === e
                                        ? "number" != typeof i.status
                                            ? t(0, "error")
                                            : t(i.status, i.statusText)
                                        : t(Yt[i.status] || i.status, i.statusText, "text" !== (i.responseType || "text") || "string" != typeof i.responseText ? { binary: i.response } : { text: i.responseText }, i.getAllResponseHeaders()));
                            };
                        }),
                            (i.onload = a()),
                            (r = i.onerror = i.ontimeout = a("error")),
                            void 0 !== i.onabort
                                ? (i.onabort = r)
                                : (i.onreadystatechange = function () {
                                      4 === i.readyState &&
                                          C.setTimeout(function () {
                                              a && r();
                                          });
                                  }),
                            (a = a("abort"));
                        try {
                            i.send((s.hasContent && s.data) || null);
                        } catch (e) {
                            if (a) throw e;
                        }
                    },
                    abort: function () {
                        a && a();
                    },
                };
        }),
        S.ajaxPrefilter(function (e) {
            e.crossDomain && (e.contents.script = !1);
        }),
        S.ajaxSetup({
            accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" },
            contents: { script: /\b(?:java|ecma)script\b/ },
            converters: {
                "text script": function (e) {
                    return S.globalEval(e), e;
                },
            },
        }),
        S.ajaxPrefilter("script", function (e) {
            void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
        }),
        S.ajaxTransport("script", function (n) {
            var i, s;
            if (n.crossDomain || n.scriptAttrs)
                return {
                    send: function (e, t) {
                        (i = S("<script>")
                            .attr(n.scriptAttrs || {})
                            .prop({ charset: n.scriptCharset, src: n.url })
                            .on(
                                "load error",
                                (s = function (e) {
                                    i.remove(), (s = null), e && t("error" === e.type ? 404 : 200, e.type);
                                })
                            )),
                            T.head.appendChild(i[0]);
                    },
                    abort: function () {
                        s && s();
                    },
                };
        });
    var Gt = [],
        Ut = /(=)\?(?=&|$)|\?\?/;
    S.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var e = Gt.pop() || S.expando + "_" + kt.guid++;
            return (this[e] = !0), e;
        },
    }),
        S.ajaxPrefilter("json jsonp", function (e, t, n) {
            var i,
                s,
                a,
                r = !1 !== e.jsonp && (Ut.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Ut.test(e.data) && "data");
            if (r || "jsonp" === e.dataTypes[0])
                return (
                    (i = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
                    r ? (e[r] = e[r].replace(Ut, "$1" + i)) : !1 !== e.jsonp && (e.url += (Mt.test(e.url) ? "&" : "?") + e.jsonp + "=" + i),
                    (e.converters["script json"] = function () {
                        return a || S.error(i + " was not called"), a[0];
                    }),
                    (e.dataTypes[0] = "json"),
                    (s = C[i]),
                    (C[i] = function () {
                        a = arguments;
                    }),
                    n.always(function () {
                        void 0 === s ? S(C).removeProp(i) : (C[i] = s), e[i] && ((e.jsonpCallback = t.jsonpCallback), Gt.push(i)), a && m(s) && s(a[0]), (a = s = void 0);
                    }),
                    "script"
                );
        }),
        (y.createHTMLDocument = (((p = T.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>"), 2 === p.childNodes.length)),
        (S.parseHTML = function (e, t, n) {
            return "string" != typeof e
                ? []
                : ("boolean" == typeof t && ((n = t), (t = !1)),
                  t || (y.createHTMLDocument ? (((i = (t = T.implementation.createHTMLDocument("")).createElement("base")).href = T.location.href), t.head.appendChild(i)) : (t = T)),
                  (i = !n && []),
                  (n = M.exec(e)) ? [t.createElement(n[1])] : ((n = ve([e], t, i)), i && i.length && S(i).remove(), S.merge([], n.childNodes)));
            var i;
        }),
        (S.fn.load = function (e, t, n) {
            var i,
                s,
                a,
                r = this,
                o = e.indexOf(" ");
            return (
                -1 < o && ((i = xt(e.slice(o))), (e = e.slice(0, o))),
                m(t) ? ((n = t), (t = void 0)) : t && "object" == typeof t && (s = "POST"),
                0 < r.length &&
                    S.ajax({ url: e, type: s || "GET", dataType: "html", data: t })
                        .done(function (e) {
                            (a = arguments), r.html(i ? S("<div>").append(S.parseHTML(e)).find(i) : e);
                        })
                        .always(
                            n &&
                                function (e, t) {
                                    r.each(function () {
                                        n.apply(this, a || [e.responseText, t, e]);
                                    });
                                }
                        ),
                this
            );
        }),
        (S.expr.pseudos.animated = function (t) {
            return S.grep(S.timers, function (e) {
                return t === e.elem;
            }).length;
        }),
        (S.offset = {
            setOffset: function (e, t, n) {
                var i,
                    s,
                    a,
                    r,
                    o = S.css(e, "position"),
                    l = S(e),
                    c = {};
                "static" === o && (e.style.position = "relative"),
                    (a = l.offset()),
                    (i = S.css(e, "top")),
                    (r = S.css(e, "left")),
                    (r = ("absolute" === o || "fixed" === o) && -1 < (i + r).indexOf("auto") ? ((s = (o = l.position()).top), o.left) : ((s = parseFloat(i) || 0), parseFloat(r) || 0)),
                    null != (t = m(t) ? t.call(e, n, S.extend({}, a)) : t).top && (c.top = t.top - a.top + s),
                    null != t.left && (c.left = t.left - a.left + r),
                    "using" in t ? t.using.call(e, c) : l.css(c);
            },
        }),
        S.fn.extend({
            offset: function (t) {
                if (arguments.length)
                    return void 0 === t
                        ? this
                        : this.each(function (e) {
                              S.offset.setOffset(this, t, e);
                          });
                var e,
                    n = this[0];
                return n ? (n.getClientRects().length ? ((e = n.getBoundingClientRect()), (n = n.ownerDocument.defaultView), { top: e.top + n.pageYOffset, left: e.left + n.pageXOffset }) : { top: 0, left: 0 }) : void 0;
            },
            position: function () {
                if (this[0]) {
                    var e,
                        t,
                        n,
                        i = this[0],
                        s = { top: 0, left: 0 };
                    if ("fixed" === S.css(i, "position")) t = i.getBoundingClientRect();
                    else {
                        for (t = this.offset(), n = i.ownerDocument, e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === S.css(e, "position"); ) e = e.parentNode;
                        e && e !== i && 1 === e.nodeType && (((s = S(e).offset()).top += S.css(e, "borderTopWidth", !0)), (s.left += S.css(e, "borderLeftWidth", !0)));
                    }
                    return { top: t.top - s.top - S.css(i, "marginTop", !0), left: t.left - s.left - S.css(i, "marginLeft", !0) };
                }
            },
            offsetParent: function () {
                return this.map(function () {
                    for (var e = this.offsetParent; e && "static" === S.css(e, "position"); ) e = e.offsetParent;
                    return e || ie;
                });
            },
        }),
        S.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (t, s) {
            var a = "pageYOffset" === s;
            S.fn[t] = function (e) {
                return F(
                    this,
                    function (e, t, n) {
                        var i;
                        return g(e) ? (i = e) : 9 === e.nodeType && (i = e.defaultView), void 0 === n ? (i ? i[s] : e[t]) : void (i ? i.scrollTo(a ? i.pageXOffset : n, a ? n : i.pageYOffset) : (e[t] = n));
                    },
                    t,
                    e,
                    arguments.length
                );
            };
        }),
        S.each(["top", "left"], function (e, n) {
            S.cssHooks[n] = Ge(y.pixelPosition, function (e, t) {
                if (t) return (t = Ve(e, n)), Re.test(t) ? S(e).position()[n] + "px" : t;
            });
        }),
        S.each({ Height: "height", Width: "width" }, function (r, o) {
            S.each({ padding: "inner" + r, content: o, "": "outer" + r }, function (i, a) {
                S.fn[a] = function (e, t) {
                    var n = arguments.length && (i || "boolean" != typeof e),
                        s = i || (!0 === e || !0 === t ? "margin" : "border");
                    return F(
                        this,
                        function (e, t, n) {
                            var i;
                            return g(e)
                                ? 0 === a.indexOf("outer")
                                    ? e["inner" + r]
                                    : e.document.documentElement["client" + r]
                                : 9 === e.nodeType
                                ? ((i = e.documentElement), Math.max(e.body["scroll" + r], i["scroll" + r], e.body["offset" + r], i["offset" + r], i["client" + r]))
                                : void 0 === n
                                ? S.css(e, t, s)
                                : S.style(e, t, n, s);
                        },
                        o,
                        n ? e : void 0,
                        n
                    );
                };
            });
        }),
        S.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
            S.fn[t] = function (e) {
                return this.on(t, e);
            };
        }),
        S.fn.extend({
            bind: function (e, t, n) {
                return this.on(e, null, t, n);
            },
            unbind: function (e, t) {
                return this.off(e, null, t);
            },
            delegate: function (e, t, n, i) {
                return this.on(t, e, n, i);
            },
            undelegate: function (e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
            },
            hover: function (e, t) {
                return this.mouseenter(e).mouseleave(t || e);
            },
        }),
        S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, n) {
            S.fn[n] = function (e, t) {
                return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n);
            };
        });
    var Kt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    (S.proxy = function (e, t) {
        var n, i;
        if (("string" == typeof t && ((i = e[t]), (t = e), (e = i)), m(e)))
            return (
                (n = o.call(arguments, 2)),
                ((i = function () {
                    return e.apply(t || this, n.concat(o.call(arguments)));
                }).guid = e.guid = e.guid || S.guid++),
                i
            );
    }),
        (S.holdReady = function (e) {
            e ? S.readyWait++ : S.ready(!0);
        }),
        (S.isArray = Array.isArray),
        (S.parseJSON = JSON.parse),
        (S.nodeName = k),
        (S.isFunction = m),
        (S.isWindow = g),
        (S.camelCase = Y),
        (S.type = h),
        (S.now = Date.now),
        (S.isNumeric = function (e) {
            var t = S.type(e);
            return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
        }),
        (S.trim = function (e) {
            return null == e ? "" : (e + "").replace(Kt, "");
        }),
        "function" == typeof define &&
            define.amd &&
            define("jquery", [], function () {
                return S;
            });
    var Zt = C.jQuery,
        Qt = C.$;
    return (
        (S.noConflict = function (e) {
            return C.$ === S && (C.$ = Qt), e && C.jQuery === S && (C.jQuery = Zt), S;
        }),
        void 0 === e && (C.jQuery = C.$ = S),
        S
    );
}),
    (function (e, t) {
        "object" == typeof exports && "undefined" != typeof module ? (module.exports = t()) : "function" == typeof define && define.amd ? define(t) : ((e = "undefined" != typeof globalThis ? globalThis : e || self).Swiper = t());
    })(this, function () {
        "use strict";
        function i(e) {
            return null !== e && "object" == typeof e && "constructor" in e && e.constructor === Object;
        }
        function s(t = {}, n = {}) {
            Object.keys(n).forEach((e) => {
                void 0 === t[e] ? (t[e] = n[e]) : i(n[e]) && i(t[e]) && 0 < Object.keys(n[e]).length && s(t[e], n[e]);
            });
        }
        const t = {
            body: {},
            addEventListener() {},
            removeEventListener() {},
            activeElement: { blur() {}, nodeName: "" },
            querySelector() {
                return null;
            },
            querySelectorAll() {
                return [];
            },
            getElementById() {
                return null;
            },
            createEvent() {
                return { initEvent() {} };
            },
            createElement() {
                return {
                    children: [],
                    childNodes: [],
                    style: {},
                    setAttribute() {},
                    getElementsByTagName() {
                        return [];
                    },
                };
            },
            createElementNS() {
                return {};
            },
            importNode() {
                return null;
            },
            location: { hash: "", host: "", hostname: "", href: "", origin: "", pathname: "", protocol: "", search: "" },
        };
        function C() {
            var e = "undefined" != typeof document ? document : {};
            return s(e, t), e;
        }
        const n = {
            document: t,
            navigator: { userAgent: "" },
            location: { hash: "", host: "", hostname: "", href: "", origin: "", pathname: "", protocol: "", search: "" },
            history: { replaceState() {}, pushState() {}, go() {}, back() {} },
            CustomEvent: function () {
                return this;
            },
            addEventListener() {},
            removeEventListener() {},
            getComputedStyle() {
                return {
                    getPropertyValue() {
                        return "";
                    },
                };
            },
            Image() {},
            Date() {},
            screen: {},
            setTimeout() {},
            clearTimeout() {},
            matchMedia() {
                return {};
            },
            requestAnimationFrame(e) {
                return "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0);
            },
            cancelAnimationFrame(e) {
                "undefined" != typeof setTimeout && clearTimeout(e);
            },
        };
        function I() {
            var e = "undefined" != typeof window ? window : {};
            return s(e, n), e;
        }
        class o extends Array {
            constructor(e) {
                super(...(e || [])),
                    (function (e) {
                        const t = e.__proto__;
                        Object.defineProperty(e, "__proto__", {
                            get() {
                                return t;
                            },
                            set(e) {
                                t.__proto__ = e;
                            },
                        });
                    })(this);
            }
        }
        function a(e = []) {
            const t = [];
            return (
                e.forEach((e) => {
                    Array.isArray(e) ? t.push(...a(e)) : t.push(e);
                }),
                t
            );
        }
        function r(e, t) {
            return Array.prototype.filter.call(e, t);
        }
        function A(e, t) {
            var n = I();
            const i = C();
            let s = [];
            if (!t && e instanceof o) return e;
            if (!e) return new o(s);
            if ("string" == typeof e) {
                const a = e.trim();
                if (0 <= a.indexOf("<") && 0 <= a.indexOf(">")) {
                    let e = "div";
                    0 === a.indexOf("<li") && (e = "ul"),
                        0 === a.indexOf("<tr") && (e = "tbody"),
                        (0 !== a.indexOf("<td") && 0 !== a.indexOf("<th")) || (e = "tr"),
                        0 === a.indexOf("<tbody") && (e = "table"),
                        0 === a.indexOf("<option") && (e = "select");
                    const r = i.createElement(e);
                    r.innerHTML = a;
                    for (let e = 0; e < r.childNodes.length; e += 1) s.push(r.childNodes[e]);
                } else
                    s = (function (e, t) {
                        if ("string" != typeof e) return [e];
                        const n = [];
                        var i = t.querySelectorAll(e);
                        for (let e = 0; e < i.length; e += 1) n.push(i[e]);
                        return n;
                    })(e.trim(), t || i);
            } else if (e.nodeType || e === n || e === i) s.push(e);
            else if (Array.isArray(e)) {
                if (e instanceof o) return e;
                s = e;
            }
            return new o(
                (function (t) {
                    const n = [];
                    for (let e = 0; e < t.length; e += 1) -1 === n.indexOf(t[e]) && n.push(t[e]);
                    return n;
                })(s)
            );
        }
        A.fn = o.prototype;
        const l = {
            addClass: function (...e) {
                const t = a(e.map((e) => e.split(" ")));
                return (
                    this.forEach((e) => {
                        e.classList.add(...t);
                    }),
                    this
                );
            },
            removeClass: function (...e) {
                const t = a(e.map((e) => e.split(" ")));
                return (
                    this.forEach((e) => {
                        e.classList.remove(...t);
                    }),
                    this
                );
            },
            hasClass: function (...e) {
                const n = a(e.map((e) => e.split(" ")));
                return 0 < r(this, (t) => 0 < n.filter((e) => t.classList.contains(e)).length).length;
            },
            toggleClass: function (...e) {
                const n = a(e.map((e) => e.split(" ")));
                this.forEach((t) => {
                    n.forEach((e) => {
                        t.classList.toggle(e);
                    });
                });
            },
            attr: function (t, n) {
                if (1 === arguments.length && "string" == typeof t) return this[0] ? this[0].getAttribute(t) : void 0;
                for (let e = 0; e < this.length; e += 1)
                    if (2 === arguments.length) this[e].setAttribute(t, n);
                    else for (const i in t) (this[e][i] = t[i]), this[e].setAttribute(i, t[i]);
                return this;
            },
            removeAttr: function (t) {
                for (let e = 0; e < this.length; e += 1) this[e].removeAttribute(t);
                return this;
            },
            transform: function (t) {
                for (let e = 0; e < this.length; e += 1) this[e].style.transform = t;
                return this;
            },
            transition: function (t) {
                for (let e = 0; e < this.length; e += 1) this[e].style.transitionDuration = "string" != typeof t ? `${t}ms` : t;
                return this;
            },
            on: function (...e) {
                let [t, s, a, n] = e;
                function i(e) {
                    var t = e.target;
                    if (t) {
                        const i = e.target.dom7EventData || [];
                        if ((i.indexOf(e) < 0 && i.unshift(e), A(t).is(s))) a.apply(t, i);
                        else {
                            var n = A(t).parents();
                            for (let e = 0; e < n.length; e += 1) A(n[e]).is(s) && a.apply(n[e], i);
                        }
                    }
                }
                function r(e) {
                    const t = (e && e.target && e.target.dom7EventData) || [];
                    t.indexOf(e) < 0 && t.unshift(e), a.apply(this, t);
                }
                "function" == typeof e[1] && (([t, a, n] = e), (s = void 0)), (n = n || !1);
                var o = t.split(" ");
                let l;
                for (let e = 0; e < this.length; e += 1) {
                    const p = this[e];
                    if (s)
                        for (l = 0; l < o.length; l += 1) {
                            var c = o[l];
                            p.dom7LiveListeners || (p.dom7LiveListeners = {}), p.dom7LiveListeners[c] || (p.dom7LiveListeners[c] = []), p.dom7LiveListeners[c].push({ listener: a, proxyListener: i }), p.addEventListener(c, i, n);
                        }
                    else
                        for (l = 0; l < o.length; l += 1) {
                            var d = o[l];
                            p.dom7Listeners || (p.dom7Listeners = {}), p.dom7Listeners[d] || (p.dom7Listeners[d] = []), p.dom7Listeners[d].push({ listener: a, proxyListener: r }), p.addEventListener(d, r, n);
                        }
                }
                return this;
            },
            off: function (...e) {
                let [t, n, i, s] = e;
                "function" == typeof e[1] && (([t, i, s] = e), (n = void 0)), (s = s || !1);
                var a = t.split(" ");
                for (let e = 0; e < a.length; e += 1) {
                    var r = a[e];
                    for (let e = 0; e < this.length; e += 1) {
                        const l = this[e];
                        let t;
                        if ((!n && l.dom7Listeners ? (t = l.dom7Listeners[r]) : n && l.dom7LiveListeners && (t = l.dom7LiveListeners[r]), t && t.length))
                            for (let e = t.length - 1; 0 <= e; --e) {
                                var o = t[e];
                                ((!i || o.listener !== i) && !(i && o.listener && o.listener.dom7proxy && o.listener.dom7proxy === i) && i) || (l.removeEventListener(r, o.proxyListener, s), t.splice(e, 1));
                            }
                    }
                }
                return this;
            },
            trigger: function (...t) {
                const n = I();
                var i = t[0].split(" "),
                    s = t[1];
                for (let e = 0; e < i.length; e += 1) {
                    var a,
                        r = i[e];
                    for (let e = 0; e < this.length; e += 1) {
                        const o = this[e];
                        n.CustomEvent && ((a = new n.CustomEvent(r, { detail: s, bubbles: !0, cancelable: !0 })), (o.dom7EventData = t.filter((e, t) => 0 < t)), o.dispatchEvent(a), (o.dom7EventData = []), delete o.dom7EventData);
                    }
                }
                return this;
            },
            transitionEnd: function (n) {
                const i = this;
                return (
                    n &&
                        i.on("transitionend", function e(t) {
                            t.target === this && (n.call(this, t), i.off("transitionend", e));
                        }),
                    this
                );
            },
            outerWidth: function (e) {
                if (0 < this.length) {
                    if (e) {
                        const t = this.styles();
                        return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"));
                    }
                    return this[0].offsetWidth;
                }
                return null;
            },
            outerHeight: function (e) {
                if (0 < this.length) {
                    if (e) {
                        const t = this.styles();
                        return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"));
                    }
                    return this[0].offsetHeight;
                }
                return null;
            },
            styles: function () {
                const e = I();
                return this[0] ? e.getComputedStyle(this[0], null) : {};
            },
            offset: function () {
                if (0 < this.length) {
                    var e = I(),
                        t = C();
                    const a = this[0];
                    var n = a.getBoundingClientRect(),
                        i = t.body,
                        s = a.clientTop || i.clientTop || 0,
                        t = a.clientLeft || i.clientLeft || 0,
                        i = a === e ? e.scrollY : a.scrollTop,
                        e = a === e ? e.scrollX : a.scrollLeft;
                    return { top: n.top + i - s, left: n.left + e - t };
                }
                return null;
            },
            css: function (e, t) {
                const n = I();
                let i;
                if (1 === arguments.length) {
                    if ("string" != typeof e) {
                        for (i = 0; i < this.length; i += 1) for (const s in e) this[i].style[s] = e[s];
                        return this;
                    }
                    if (this[0]) return n.getComputedStyle(this[0], null).getPropertyValue(e);
                }
                if (2 !== arguments.length || "string" != typeof e) return this;
                for (i = 0; i < this.length; i += 1) this[i].style[e] = t;
                return this;
            },
            each: function (n) {
                return (
                    n &&
                        this.forEach((e, t) => {
                            n.apply(e, [e, t]);
                        }),
                    this
                );
            },
            html: function (t) {
                if (void 0 === t) return this[0] ? this[0].innerHTML : null;
                for (let e = 0; e < this.length; e += 1) this[e].innerHTML = t;
                return this;
            },
            text: function (t) {
                if (void 0 === t) return this[0] ? this[0].textContent.trim() : null;
                for (let e = 0; e < this.length; e += 1) this[e].textContent = t;
                return this;
            },
            is: function (e) {
                var t = I(),
                    n = C();
                const i = this[0];
                let s, a;
                if (!i || void 0 === e) return !1;
                if ("string" == typeof e) {
                    if (i.matches) return i.matches(e);
                    if (i.webkitMatchesSelector) return i.webkitMatchesSelector(e);
                    if (i.msMatchesSelector) return i.msMatchesSelector(e);
                    for (s = A(e), a = 0; a < s.length; a += 1) if (s[a] === i) return !0;
                    return !1;
                }
                if (e === n) return i === n;
                if (e === t) return i === t;
                if (e.nodeType || e instanceof o) {
                    for (s = e.nodeType ? [e] : e, a = 0; a < s.length; a += 1) if (s[a] === i) return !0;
                    return !1;
                }
                return !1;
            },
            index: function () {
                let e = this[0],
                    t;
                if (e) {
                    for (t = 0; null !== (e = e.previousSibling); ) 1 === e.nodeType && (t += 1);
                    return t;
                }
            },
            eq: function (e) {
                if (void 0 === e) return this;
                var t = this.length;
                if (t - 1 < e) return A([]);
                if (e < 0) {
                    t = t + e;
                    return t < 0 ? A([]) : A([this[t]]);
                }
                return A([this[e]]);
            },
            append: function (...t) {
                var n;
                const i = C();
                for (let e = 0; e < t.length; e += 1) {
                    n = t[e];
                    for (let t = 0; t < this.length; t += 1)
                        if ("string" == typeof n) {
                            const s = i.createElement("div");
                            for (s.innerHTML = n; s.firstChild; ) this[t].appendChild(s.firstChild);
                        } else if (n instanceof o) for (let e = 0; e < n.length; e += 1) this[t].appendChild(n[e]);
                        else this[t].appendChild(n);
                }
                return this;
            },
            prepend: function (e) {
                const t = C();
                let n, i;
                for (n = 0; n < this.length; n += 1)
                    if ("string" == typeof e) {
                        const s = t.createElement("div");
                        for (s.innerHTML = e, i = s.childNodes.length - 1; 0 <= i; --i) this[n].insertBefore(s.childNodes[i], this[n].childNodes[0]);
                    } else if (e instanceof o) for (i = 0; i < e.length; i += 1) this[n].insertBefore(e[i], this[n].childNodes[0]);
                    else this[n].insertBefore(e, this[n].childNodes[0]);
                return this;
            },
            next: function (e) {
                return 0 < this.length ? (e ? (this[0].nextElementSibling && A(this[0].nextElementSibling).is(e) ? A([this[0].nextElementSibling]) : A([])) : this[0].nextElementSibling ? A([this[0].nextElementSibling]) : A([])) : A([]);
            },
            nextAll: function (e) {
                const t = [];
                let n = this[0];
                if (!n) return A([]);
                for (; n.nextElementSibling; ) {
                    var i = n.nextElementSibling;
                    (!e || A(i).is(e)) && t.push(i), (n = i);
                }
                return A(t);
            },
            prev: function (e) {
                if (0 < this.length) {
                    var t = this[0];
                    return e ? (t.previousElementSibling && A(t.previousElementSibling).is(e) ? A([t.previousElementSibling]) : A([])) : t.previousElementSibling ? A([t.previousElementSibling]) : A([]);
                }
                return A([]);
            },
            prevAll: function (e) {
                const t = [];
                let n = this[0];
                if (!n) return A([]);
                for (; n.previousElementSibling; ) {
                    var i = n.previousElementSibling;
                    (!e || A(i).is(e)) && t.push(i), (n = i);
                }
                return A(t);
            },
            parent: function (t) {
                const n = [];
                for (let e = 0; e < this.length; e += 1) null === this[e].parentNode || (t && !A(this[e].parentNode).is(t)) || n.push(this[e].parentNode);
                return A(n);
            },
            parents: function (n) {
                const i = [];
                for (let t = 0; t < this.length; t += 1) {
                    let e = this[t].parentNode;
                    for (; e; ) (n && !A(e).is(n)) || i.push(e), (e = e.parentNode);
                }
                return A(i);
            },
            closest: function (e) {
                let t = this;
                return void 0 === e ? A([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
            },
            find: function (t) {
                const n = [];
                for (let e = 0; e < this.length; e += 1) {
                    var i = this[e].querySelectorAll(t);
                    for (let e = 0; e < i.length; e += 1) n.push(i[e]);
                }
                return A(n);
            },
            children: function (t) {
                const n = [];
                for (let e = 0; e < this.length; e += 1) {
                    var i = this[e].children;
                    for (let e = 0; e < i.length; e += 1) (t && !A(i[e]).is(t)) || n.push(i[e]);
                }
                return A(n);
            },
            filter: function (e) {
                return A(r(this, e));
            },
            remove: function () {
                for (let e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
                return this;
            },
        };
        function T(e, t = 0) {
            return setTimeout(e, t);
        }
        function v() {
            return Date.now();
        }
        function L(e, t = "x") {
            const n = I();
            let i, s, a;
            const r = (function (e) {
                const t = I();
                let n;
                return t.getComputedStyle && (n = t.getComputedStyle(e, null)), !n && e.currentStyle && (n = e.currentStyle), (n = n || e.style), n;
            })(e);
            return (
                n.WebKitCSSMatrix
                    ? ((s = r.transform || r.webkitTransform),
                      6 < s.split(",").length &&
                          (s = s
                              .split(", ")
                              .map((e) => e.replace(",", "."))
                              .join(", ")),
                      (a = new n.WebKitCSSMatrix("none" === s ? "" : s)))
                    : ((a = r.MozTransform || r.OTransform || r.MsTransform || r.msTransform || r.transform || r.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")), (i = a.toString().split(","))),
                "x" === t && (s = n.WebKitCSSMatrix ? a.m41 : 16 === i.length ? parseFloat(i[12]) : parseFloat(i[4])),
                "y" === t && (s = n.WebKitCSSMatrix ? a.m42 : 16 === i.length ? parseFloat(i[13]) : parseFloat(i[5])),
                s || 0
            );
        }
        function c(e) {
            return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1);
        }
        function p(...t) {
            const n = Object(t[0]),
                i = ["__proto__", "constructor", "prototype"];
            for (let e = 1; e < t.length; e += 1) {
                var s = t[e];
                if (null != s && ((l = s), !("undefined" != typeof window && void 0 !== window.HTMLElement ? l instanceof HTMLElement : l && (1 === l.nodeType || 11 === l.nodeType)))) {
                    var a = Object.keys(Object(s)).filter((e) => i.indexOf(e) < 0);
                    for (let e = 0, t = a.length; e < t; e += 1) {
                        var r = a[e],
                            o = Object.getOwnPropertyDescriptor(s, r);
                        void 0 !== o && o.enumerable && (c(n[r]) && c(s[r]) ? (s[r].__swiper__ ? (n[r] = s[r]) : p(n[r], s[r])) : !c(n[r]) && c(s[r]) ? ((n[r] = {}), s[r].__swiper__ ? (n[r] = s[r]) : p(n[r], s[r])) : (n[r] = s[r]));
                    }
                }
            }
            var l;
            return n;
        }
        function F(e, t, n) {
            e.style.setProperty(t, n);
        }
        function S({ swiper: n, targetPosition: i, side: s }) {
            const a = I(),
                r = -n.translate;
            let o = null,
                l;
            const c = n.params.speed;
            (n.wrapperEl.style.scrollSnapType = "none"), a.cancelAnimationFrame(n.cssModeFrameID);
            const d = i > r ? "next" : "prev",
                p = (e, t) => ("next" === d && t <= e) || ("prev" === d && e <= t),
                u = () => {
                    (l = new Date().getTime()), null === o && (o = l);
                    var e = Math.max(Math.min((l - o) / c, 1), 0),
                        e = 0.5 - Math.cos(e * Math.PI) / 2;
                    let t = r + e * (i - r);
                    if ((p(t, i) && (t = i), n.wrapperEl.scrollTo({ [s]: t }), p(t, i)))
                        return (
                            (n.wrapperEl.style.overflow = "hidden"),
                            (n.wrapperEl.style.scrollSnapType = ""),
                            setTimeout(() => {
                                (n.wrapperEl.style.overflow = ""), n.wrapperEl.scrollTo({ [s]: t });
                            }),
                            void a.cancelAnimationFrame(n.cssModeFrameID)
                        );
                    n.cssModeFrameID = a.requestAnimationFrame(u);
                };
            u();
        }
        Object.keys(l).forEach((e) => {
            Object.defineProperty(A.fn, e, { value: l[e], writable: !0 });
        });
        let e;
        function u() {
            return (
                (e =
                    e ||
                    (function () {
                        const n = I();
                        var e = C();
                        return {
                            smoothScroll: e.documentElement && "scrollBehavior" in e.documentElement.style,
                            touch: !!("ontouchstart" in n || (n.DocumentTouch && e instanceof n.DocumentTouch)),
                            passiveListener: (function () {
                                let e = !1;
                                try {
                                    var t = Object.defineProperty({}, "passive", {
                                        get() {
                                            e = !0;
                                        },
                                    });
                                    n.addEventListener("testPassiveListener", null, t);
                                } catch (e) {}
                                return e;
                            })(),
                            gestures: "ongesturestart" in n,
                        };
                    })()),
                e
            );
        }
        let d;
        function f(e = {}) {
            return (
                (d =
                    d ||
                    (function ({ userAgent: e } = {}) {
                        var t = u(),
                            n = (d = I()).navigator.platform;
                        const i = e || d.navigator.userAgent,
                            s = { ios: !1, android: !1 };
                        var a = d.screen.width,
                            r = d.screen.height,
                            o = i.match(/(Android);?[\s\/]+([\d.]+)?/);
                        let l = i.match(/(iPad).*OS\s([\d_]+)/);
                        var c = i.match(/(iPod)(.*OS\s([\d_]+))?/),
                            e = !l && i.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                            d = "Win32" === n;
                        let p = "MacIntel" === n;
                        return (
                            !l &&
                                p &&
                                t.touch &&
                                0 <= ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(`${a}x${r}`) &&
                                ((l = i.match(/(Version)\/([\d.]+)/)), (l = l || [0, 1, "13_0_0"]), (p = !1)),
                            o && !d && ((s.os = "android"), (s.android = !0)),
                            (l || e || c) && ((s.os = "ios"), (s.ios = !0)),
                            s
                        );
                    })(e)),
                d
            );
        }
        let h;
        function m() {
            const t = I();
            return {
                isSafari: (function () {
                    const e = t.navigator.userAgent.toLowerCase();
                    return 0 <= e.indexOf("safari") && e.indexOf("chrome") < 0 && e.indexOf("android") < 0;
                })(),
                isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent),
            };
        }
        function g({ swiper: e, runCallbacks: t, direction: n, step: i }) {
            var { activeIndex: s, previousIndex: a } = e;
            let r = n;
            (r = r || (a < s ? "next" : s < a ? "prev" : "reset")),
                e.emit(`transition${i}`),
                t && s !== a && ("reset" !== r ? (e.emit(`slideChangeTransition${i}`), "next" === r ? e.emit(`slideNextTransition${i}`) : e.emit(`slidePrevTransition${i}`)) : e.emit(`slideResetTransition${i}`));
        }
        function b(n, e = this) {
            return (function e(t) {
                return t && t !== C() && t !== I() ? (t = t.assignedSlot || t).closest(n) || e(t.getRootNode().host) : null;
            })(e);
        }
        function y() {
            var e,
                t,
                n = this,
                { params: i, el: s } = n;
            (s && 0 === s.offsetWidth) ||
                (i.breakpoints && n.setBreakpoint(),
                ({ allowSlideNext: e, allowSlidePrev: t, snapGrid: s } = n),
                (n.allowSlideNext = !0),
                (n.allowSlidePrev = !0),
                n.updateSize(),
                n.updateSlides(),
                n.updateSlidesClasses(),
                ("auto" === i.slidesPerView || 1 < i.slidesPerView) && n.isEnd && !n.isBeginning && !n.params.centeredSlides ? n.slideTo(n.slides.length - 1, 0, !1, !0) : n.slideTo(n.activeIndex, 0, !1, !0),
                n.autoplay && n.autoplay.running && n.autoplay.paused && n.autoplay.run(),
                (n.allowSlidePrev = t),
                (n.allowSlideNext = e),
                n.params.watchOverflow && s !== n.snapGrid && n.checkOverflow());
        }
        let x = !1;
        function w() {}
        const E = (e, t) => {
            const n = C(),
                { params: i, touchEvents: s, el: a, wrapperEl: r, device: o, support: l } = e;
            var c = !!i.nested,
                d = "on" === t ? "addEventListener" : "removeEventListener",
                p = t;
            l.touch
                ? ((t = !("touchstart" !== s.start || !l.passiveListener || !i.passiveListeners) && { passive: !0, capture: !1 }),
                  a[d](s.start, e.onTouchStart, t),
                  a[d](s.move, e.onTouchMove, l.passiveListener ? { passive: !1, capture: c } : c),
                  a[d](s.end, e.onTouchEnd, t),
                  s.cancel && a[d](s.cancel, e.onTouchEnd, t))
                : (a[d](s.start, e.onTouchStart, !1), n[d](s.move, e.onTouchMove, c), n[d](s.end, e.onTouchEnd, !1)),
                (i.preventClicks || i.preventClicksPropagation) && a[d]("click", e.onClick, !0),
                i.cssMode && r[d]("scroll", e.onScroll),
                i.updateOnWindowResize ? e[p](o.ios || o.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", y, !0) : e[p]("observerUpdate", y, !0);
        };
        const $ = (e, t) => e.grid && t.grid && 1 < t.grid.rows;
        var k = {
            init: !0,
            direction: "horizontal",
            touchEventsTarget: "wrapper",
            initialSlide: 0,
            speed: 300,
            cssMode: !1,
            updateOnWindowResize: !0,
            resizeObserver: !0,
            nested: !1,
            createElements: !1,
            enabled: !0,
            focusableElements: "input, select, option, textarea, button, video, label",
            width: null,
            height: null,
            preventInteractionOnTransition: !1,
            userAgent: null,
            url: null,
            edgeSwipeDetection: !1,
            edgeSwipeThreshold: 20,
            autoHeight: !1,
            setWrapperSize: !1,
            virtualTranslate: !1,
            effect: "slide",
            breakpoints: void 0,
            breakpointsBase: "window",
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerGroup: 1,
            slidesPerGroupSkip: 0,
            slidesPerGroupAuto: !1,
            centeredSlides: !1,
            centeredSlidesBounds: !1,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            normalizeSlideIndex: !0,
            centerInsufficientSlides: !1,
            watchOverflow: !0,
            roundLengths: !1,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: !0,
            shortSwipes: !0,
            longSwipes: !0,
            longSwipesRatio: 0.5,
            longSwipesMs: 300,
            followFinger: !0,
            allowTouchMove: !0,
            threshold: 0,
            touchMoveStopPropagation: !1,
            touchStartPreventDefault: !0,
            touchStartForcePreventDefault: !1,
            touchReleaseOnEdges: !1,
            uniqueNavElements: !0,
            resistance: !0,
            resistanceRatio: 0.85,
            watchSlidesProgress: !1,
            grabCursor: !1,
            preventClicks: !0,
            preventClicksPropagation: !0,
            slideToClickedSlide: !1,
            preloadImages: !0,
            updateOnImagesReady: !0,
            loop: !1,
            loopAdditionalSlides: 0,
            loopedSlides: null,
            loopFillGroupWithBlank: !1,
            loopPreventsSlide: !0,
            allowSlidePrev: !0,
            allowSlideNext: !0,
            swipeHandler: null,
            noSwiping: !0,
            noSwipingClass: "swiper-no-swiping",
            noSwipingSelector: null,
            passiveListeners: !0,
            containerModifierClass: "swiper-",
            slideClass: "swiper-slide",
            slideBlankClass: "swiper-slide-invisible-blank",
            slideActiveClass: "swiper-slide-active",
            slideDuplicateActiveClass: "swiper-slide-duplicate-active",
            slideVisibleClass: "swiper-slide-visible",
            slideDuplicateClass: "swiper-slide-duplicate",
            slideNextClass: "swiper-slide-next",
            slideDuplicateNextClass: "swiper-slide-duplicate-next",
            slidePrevClass: "swiper-slide-prev",
            slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
            wrapperClass: "swiper-wrapper",
            runCallbacksOnInit: !0,
            _emitClasses: !1,
        };
        const M = {
                eventsEmitter: {
                    on(e, t, n) {
                        const i = this;
                        if ("function" != typeof t) return i;
                        const s = n ? "unshift" : "push";
                        return (
                            e.split(" ").forEach((e) => {
                                i.eventsListeners[e] || (i.eventsListeners[e] = []), i.eventsListeners[e][s](t);
                            }),
                            i
                        );
                    },
                    once(t, n, e) {
                        const i = this;
                        return "function" != typeof n ? i : ((s.__emitterProxy = n), i.on(t, s, e));
                        function s(...e) {
                            i.off(t, s), s.__emitterProxy && delete s.__emitterProxy, n.apply(i, e);
                        }
                    },
                    onAny(e, t) {
                        if ("function" != typeof e) return this;
                        t = t ? "unshift" : "push";
                        return this.eventsAnyListeners.indexOf(e) < 0 && this.eventsAnyListeners[t](e), this;
                    },
                    offAny(e) {
                        var t = this;
                        if (!t.eventsAnyListeners) return t;
                        e = t.eventsAnyListeners.indexOf(e);
                        return 0 <= e && t.eventsAnyListeners.splice(e, 1), t;
                    },
                    off(e, i) {
                        const s = this;
                        return (
                            s.eventsListeners &&
                                e.split(" ").forEach((n) => {
                                    void 0 === i
                                        ? (s.eventsListeners[n] = [])
                                        : s.eventsListeners[n] &&
                                          s.eventsListeners[n].forEach((e, t) => {
                                              (e === i || (e.__emitterProxy && e.__emitterProxy === i)) && s.eventsListeners[n].splice(t, 1);
                                          });
                                }),
                            s
                        );
                    },
                    emit(...e) {
                        const n = this;
                        if (!n.eventsListeners) return n;
                        let t, i, s;
                        (s = "string" == typeof e[0] || Array.isArray(e[0]) ? ((t = e[0]), (i = e.slice(1, e.length)), n) : ((t = e[0].events), (i = e[0].data), e[0].context || n)), i.unshift(s);
                        const a = Array.isArray(t) ? t : t.split(" ");
                        return (
                            a.forEach((t) => {
                                n.eventsAnyListeners &&
                                    n.eventsAnyListeners.length &&
                                    n.eventsAnyListeners.forEach((e) => {
                                        e.apply(s, [t, ...i]);
                                    }),
                                    n.eventsListeners &&
                                        n.eventsListeners[t] &&
                                        n.eventsListeners[t].forEach((e) => {
                                            e.apply(s, i);
                                        });
                            }),
                            n
                        );
                    },
                },
                update: {
                    updateSize: function () {
                        var e = this;
                        let t, n;
                        const i = e.$el;
                        (t = void 0 !== e.params.width && null !== e.params.width ? e.params.width : i[0].clientWidth),
                            (n = void 0 !== e.params.height && null !== e.params.height ? e.params.height : i[0].clientHeight),
                            (0 === t && e.isHorizontal()) ||
                                (0 === n && e.isVertical()) ||
                                ((t = t - parseInt(i.css("padding-left") || 0, 10) - parseInt(i.css("padding-right") || 0, 10)),
                                (n = n - parseInt(i.css("padding-top") || 0, 10) - parseInt(i.css("padding-bottom") || 0, 10)),
                                Number.isNaN(t) && (t = 0),
                                Number.isNaN(n) && (n = 0),
                                Object.assign(e, { width: t, height: n, size: e.isHorizontal() ? t : n }));
                    },
                    updateSlides: function () {
                        const n = this;
                        function i(e) {
                            return n.isHorizontal()
                                ? e
                                : {
                                      width: "height",
                                      "margin-top": "margin-left",
                                      "margin-bottom ": "margin-right",
                                      "margin-left": "margin-top",
                                      "margin-right": "margin-bottom",
                                      "padding-left": "padding-top",
                                      "padding-right": "padding-bottom",
                                      marginRight: "marginBottom",
                                  }[e];
                        }
                        function s(e, t) {
                            return parseFloat(e.getPropertyValue(i(t)) || 0);
                        }
                        const a = n.params,
                            { $wrapperEl: e, size: r, rtlTranslate: o, wrongRTL: l } = n;
                        var c = n.virtual && a.virtual.enabled,
                            d = (c ? n.virtual : n).slides.length;
                        const p = e.children(`.${n.params.slideClass}`);
                        var u = (c ? n.virtual.slides : p).length;
                        let f = [];
                        const h = [],
                            m = [];
                        let g = a.slidesOffsetBefore;
                        "function" == typeof g && (g = a.slidesOffsetBefore.call(n));
                        let v = a.slidesOffsetAfter;
                        "function" == typeof v && (v = a.slidesOffsetAfter.call(n));
                        var b = n.snapGrid.length,
                            y = n.slidesGrid.length;
                        let x = a.spaceBetween,
                            w = -g,
                            C = 0,
                            T = 0;
                        if (void 0 !== r) {
                            "string" == typeof x && 0 <= x.indexOf("%") && (x = (parseFloat(x.replace("%", "")) / 100) * r),
                                (n.virtualSize = -x),
                                o ? p.css({ marginLeft: "", marginBottom: "", marginTop: "" }) : p.css({ marginRight: "", marginBottom: "", marginTop: "" }),
                                a.centeredSlides && a.cssMode && (F(n.wrapperEl, "--swiper-centered-offset-before", ""), F(n.wrapperEl, "--swiper-centered-offset-after", ""));
                            var S = a.grid && 1 < a.grid.rows && n.grid;
                            S && n.grid.initSlides(u);
                            let t;
                            var E = "auto" === a.slidesPerView && a.breakpoints && 0 < Object.keys(a.breakpoints).filter((e) => void 0 !== a.breakpoints[e].slidesPerView).length;
                            for (let e = 0; e < u; e += 1) {
                                t = 0;
                                const D = p.eq(e);
                                if ((S && n.grid.updateSlide(e, D, u, i), "none" !== D.css("display"))) {
                                    if ("auto" === a.slidesPerView) {
                                        E && (p[e].style[i("width")] = "");
                                        const j = getComputedStyle(D[0]);
                                        var $,
                                            k,
                                            M,
                                            P,
                                            I,
                                            A,
                                            L,
                                            z = D[0].style.transform,
                                            O = D[0].style.webkitTransform;
                                        z && (D[0].style.transform = "none"),
                                            O && (D[0].style.webkitTransform = "none"),
                                            (t = a.roundLengths
                                                ? n.isHorizontal()
                                                    ? D.outerWidth(!0)
                                                    : D.outerHeight(!0)
                                                : (($ = s(j, "width")),
                                                  (k = s(j, "padding-left")),
                                                  (M = s(j, "padding-right")),
                                                  (P = s(j, "margin-left")),
                                                  (I = s(j, "margin-right")),
                                                  (L = j.getPropertyValue("box-sizing")) && "border-box" === L ? $ + P + I : (({ clientWidth: A, offsetWidth: L } = D[0]), $ + k + M + P + I + (L - A)))),
                                            z && (D[0].style.transform = z),
                                            O && (D[0].style.webkitTransform = O),
                                            a.roundLengths && (t = Math.floor(t));
                                    } else (t = (r - (a.slidesPerView - 1) * x) / a.slidesPerView), a.roundLengths && (t = Math.floor(t)), p[e] && (p[e].style[i("width")] = `${t}px`);
                                    p[e] && (p[e].swiperSlideSize = t),
                                        m.push(t),
                                        a.centeredSlides
                                            ? ((w = w + t / 2 + C / 2 + x),
                                              0 === C && 0 !== e && (w = w - r / 2 - x),
                                              0 === e && (w = w - r / 2 - x),
                                              Math.abs(w) < 0.001 && (w = 0),
                                              a.roundLengths && (w = Math.floor(w)),
                                              T % a.slidesPerGroup == 0 && f.push(w),
                                              h.push(w))
                                            : (a.roundLengths && (w = Math.floor(w)), (T - Math.min(n.params.slidesPerGroupSkip, T)) % n.params.slidesPerGroup == 0 && f.push(w), h.push(w), (w = w + t + x)),
                                        (n.virtualSize += t + x),
                                        (C = t),
                                        (T += 1);
                                }
                            }
                            if (
                                ((n.virtualSize = Math.max(n.virtualSize, r) + v),
                                o && l && ("slide" === a.effect || "coverflow" === a.effect) && e.css({ width: `${n.virtualSize + a.spaceBetween}px` }),
                                a.setWrapperSize && e.css({ [i("width")]: `${n.virtualSize + a.spaceBetween}px` }),
                                S && n.grid.updateWrapperSize(t, f, i),
                                !a.centeredSlides)
                            ) {
                                const _ = [];
                                for (let t = 0; t < f.length; t += 1) {
                                    let e = f[t];
                                    a.roundLengths && (e = Math.floor(e)), f[t] <= n.virtualSize - r && _.push(e);
                                }
                                (f = _), 1 < Math.floor(n.virtualSize - r) - Math.floor(f[f.length - 1]) && f.push(n.virtualSize - r);
                            }
                            if (
                                (0 === f.length && (f = [0]),
                                0 !== a.spaceBetween && ((c = n.isHorizontal() && o ? "marginLeft" : i("marginRight")), p.filter((e, t) => !a.cssMode || t !== p.length - 1).css({ [c]: `${x}px` })),
                                a.centeredSlides && a.centeredSlidesBounds)
                            ) {
                                let t = 0;
                                m.forEach((e) => {
                                    t += e + (a.spaceBetween || 0);
                                }),
                                    (t -= a.spaceBetween);
                                const N = t - r;
                                f = f.map((e) => (e < 0 ? -g : e > N ? N + v : e));
                            }
                            if (a.centerInsufficientSlides) {
                                let t = 0;
                                if (
                                    (m.forEach((e) => {
                                        t += e + (a.spaceBetween || 0);
                                    }),
                                    (t -= a.spaceBetween),
                                    t < r)
                                ) {
                                    const q = (r - t) / 2;
                                    f.forEach((e, t) => {
                                        f[t] = e - q;
                                    }),
                                        h.forEach((e, t) => {
                                            h[t] = e + q;
                                        });
                                }
                            }
                            if ((Object.assign(n, { slides: p, snapGrid: f, slidesGrid: h, slidesSizesGrid: m }), a.centeredSlides && a.cssMode && !a.centeredSlidesBounds)) {
                                F(n.wrapperEl, "--swiper-centered-offset-before", `${-f[0]}px`), F(n.wrapperEl, "--swiper-centered-offset-after", `${n.size / 2 - m[m.length - 1] / 2}px`);
                                const H = -n.snapGrid[0],
                                    B = -n.slidesGrid[0];
                                (n.snapGrid = n.snapGrid.map((e) => e + H)), (n.slidesGrid = n.slidesGrid.map((e) => e + B));
                            }
                            u !== d && n.emit("slidesLengthChange"),
                                f.length !== b && (n.params.watchOverflow && n.checkOverflow(), n.emit("snapGridLengthChange")),
                                h.length !== y && n.emit("slidesGridLengthChange"),
                                a.watchSlidesProgress && n.updateSlidesOffset();
                        }
                    },
                    updateAutoHeight: function (e) {
                        const n = this,
                            t = [],
                            i = n.virtual && n.params.virtual.enabled;
                        let s = 0,
                            a;
                        "number" == typeof e ? n.setTransition(e) : !0 === e && n.setTransition(n.params.speed);
                        var r,
                            o = (t) => (i ? n.slides.filter((e) => parseInt(e.getAttribute("data-swiper-slide-index"), 10) === t) : n.slides.eq(t))[0];
                        if ("auto" !== n.params.slidesPerView && 1 < n.params.slidesPerView)
                            if (n.params.centeredSlides)
                                n.visibleSlides.each((e) => {
                                    t.push(e);
                                });
                            else
                                for (a = 0; a < Math.ceil(n.params.slidesPerView); a += 1) {
                                    var l = n.activeIndex + a;
                                    if (l > n.slides.length && !i) break;
                                    t.push(o(l));
                                }
                        else t.push(o(n.activeIndex));
                        for (a = 0; a < t.length; a += 1) void 0 !== t[a] && ((r = t[a].offsetHeight), (s = r > s ? r : s));
                        s && n.$wrapperEl.css("height", `${s}px`);
                    },
                    updateSlidesOffset: function () {
                        const t = this.slides;
                        for (let e = 0; e < t.length; e += 1) t[e].swiperSlideOffset = this.isHorizontal() ? t[e].offsetLeft : t[e].offsetTop;
                    },
                    updateSlidesProgress: function (e = (this && this.translate) || 0) {
                        var i = this,
                            s = i.params;
                        const { slides: a, rtlTranslate: r } = i;
                        if (0 !== a.length) {
                            void 0 === a[0].swiperSlideOffset && i.updateSlidesOffset();
                            let n = r ? e : -e;
                            a.removeClass(s.slideVisibleClass), (i.visibleSlidesIndexes = []), (i.visibleSlides = []);
                            for (let t = 0; t < a.length; t += 1) {
                                const d = a[t];
                                let e = d.swiperSlideOffset;
                                s.cssMode && s.centeredSlides && (e -= a[0].swiperSlideOffset);
                                var o = (n + (s.centeredSlides ? i.minTranslate() : 0) - e) / (d.swiperSlideSize + s.spaceBetween),
                                    l = -(n - e),
                                    c = l + i.slidesSizesGrid[t];
                                ((0 <= l && l < i.size - 1) || (1 < c && c <= i.size) || (l <= 0 && c >= i.size)) && (i.visibleSlides.push(d), i.visibleSlidesIndexes.push(t), a.eq(t).addClass(s.slideVisibleClass)),
                                    (d.progress = r ? -o : o);
                            }
                            i.visibleSlides = A(i.visibleSlides);
                        }
                    },
                    updateProgress: function (e) {
                        var t = this;
                        void 0 === e && ((l = t.rtlTranslate ? -1 : 1), (e = (t && t.translate && t.translate * l) || 0));
                        var n = t.params,
                            i = t.maxTranslate() - t.minTranslate();
                        let { progress: s, isBeginning: a, isEnd: r } = t;
                        var o = a,
                            l = r;
                        (r = 0 == i ? ((s = 0), (a = !0)) : ((s = (e - t.minTranslate()) / i), (a = s <= 0), 1 <= s)),
                            Object.assign(t, { progress: s, isBeginning: a, isEnd: r }),
                            (n.watchSlidesProgress || (n.centeredSlides && n.autoHeight)) && t.updateSlidesProgress(e),
                            a && !o && t.emit("reachBeginning toEdge"),
                            r && !l && t.emit("reachEnd toEdge"),
                            ((o && !a) || (l && !r)) && t.emit("fromEdge"),
                            t.emit("progress", s);
                    },
                    updateSlidesClasses: function () {
                        const { slides: e, params: t, $wrapperEl: n, activeIndex: i, realIndex: s } = this;
                        var a = this.virtual && t.virtual.enabled;
                        e.removeClass(`${t.slideActiveClass} ${t.slideNextClass} ${t.slidePrevClass} ${t.slideDuplicateActiveClass} ${t.slideDuplicateNextClass} ${t.slideDuplicatePrevClass}`);
                        let r;
                        (r = a ? this.$wrapperEl.find(`.${t.slideClass}[data-swiper-slide-index="${i}"]`) : e.eq(i)),
                            r.addClass(t.slideActiveClass),
                            t.loop &&
                                (r.hasClass(t.slideDuplicateClass)
                                    ? n.children(`.${t.slideClass}:not(.${t.slideDuplicateClass})[data-swiper-slide-index="${s}"]`)
                                    : n.children(`.${t.slideClass}.${t.slideDuplicateClass}[data-swiper-slide-index="${s}"]`)
                                ).addClass(t.slideDuplicateActiveClass);
                        let o = r.nextAll(`.${t.slideClass}`).eq(0).addClass(t.slideNextClass);
                        t.loop && 0 === o.length && ((o = e.eq(0)), o.addClass(t.slideNextClass));
                        let l = r.prevAll(`.${t.slideClass}`).eq(0).addClass(t.slidePrevClass);
                        t.loop && 0 === l.length && ((l = e.eq(-1)), l.addClass(t.slidePrevClass)),
                            t.loop &&
                                ((o.hasClass(t.slideDuplicateClass)
                                    ? n.children(`.${t.slideClass}:not(.${t.slideDuplicateClass})[data-swiper-slide-index="${o.attr("data-swiper-slide-index")}"]`)
                                    : n.children(`.${t.slideClass}.${t.slideDuplicateClass}[data-swiper-slide-index="${o.attr("data-swiper-slide-index")}"]`)
                                ).addClass(t.slideDuplicateNextClass),
                                (l.hasClass(t.slideDuplicateClass)
                                    ? n.children(`.${t.slideClass}:not(.${t.slideDuplicateClass})[data-swiper-slide-index="${l.attr("data-swiper-slide-index")}"]`)
                                    : n.children(`.${t.slideClass}.${t.slideDuplicateClass}[data-swiper-slide-index="${l.attr("data-swiper-slide-index")}"]`)
                                ).addClass(t.slideDuplicatePrevClass)),
                            this.emitSlidesClasses();
                    },
                    updateActiveIndex: function (e) {
                        var t,
                            n = this,
                            i = n.rtlTranslate ? n.translate : -n.translate;
                        const { slidesGrid: s, snapGrid: a, params: r, activeIndex: o, realIndex: l, snapIndex: c } = n;
                        let d = e,
                            p;
                        if (void 0 === d) {
                            for (let e = 0; e < s.length; e += 1) void 0 !== s[e + 1] ? (i >= s[e] && i < s[e + 1] - (s[e + 1] - s[e]) / 2 ? (d = e) : i >= s[e] && i < s[e + 1] && (d = e + 1)) : i >= s[e] && (d = e);
                            r.normalizeSlideIndex && (d < 0 || void 0 === d) && (d = 0);
                        }
                        (p = 0 <= a.indexOf(i) ? a.indexOf(i) : (t = Math.min(r.slidesPerGroupSkip, d)) + Math.floor((d - t) / r.slidesPerGroup)),
                            p >= a.length && (p = a.length - 1),
                            d !== o
                                ? ((t = parseInt(n.slides.eq(d).attr("data-swiper-slide-index") || d, 10)),
                                  Object.assign(n, { snapIndex: p, realIndex: t, previousIndex: o, activeIndex: d }),
                                  n.emit("activeIndexChange"),
                                  n.emit("snapIndexChange"),
                                  l !== t && n.emit("realIndexChange"),
                                  (n.initialized || n.params.runCallbacksOnInit) && n.emit("slideChange"))
                                : p !== c && ((n.snapIndex = p), n.emit("snapIndexChange"));
                    },
                    updateClickedSlide: function (e) {
                        var t = this,
                            n = t.params,
                            i = A(e.target).closest(`.${n.slideClass}`)[0];
                        let s = !1,
                            a;
                        if (i)
                            for (let e = 0; e < t.slides.length; e += 1)
                                if (t.slides[e] === i) {
                                    (s = !0), (a = e);
                                    break;
                                }
                        if (!i || !s) return (t.clickedSlide = void 0), void (t.clickedIndex = void 0);
                        (t.clickedSlide = i),
                            t.virtual && t.params.virtual.enabled ? (t.clickedIndex = parseInt(A(i).attr("data-swiper-slide-index"), 10)) : (t.clickedIndex = a),
                            n.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide();
                    },
                },
                translate: {
                    getTranslate: function (e = this.isHorizontal() ? "x" : "y") {
                        var { params: t, rtlTranslate: n, translate: i, $wrapperEl: s } = this;
                        if (t.virtualTranslate) return n ? -i : i;
                        if (t.cssMode) return i;
                        let a = L(s[0], e);
                        return n && (a = -a), a || 0;
                    },
                    setTranslate: function (e, t) {
                        var n = this;
                        const { rtlTranslate: i, params: s, $wrapperEl: a, wrapperEl: r, progress: o } = n;
                        let l = 0,
                            c = 0;
                        n.isHorizontal() ? (l = i ? -e : e) : (c = e),
                            s.roundLengths && ((l = Math.floor(l)), (c = Math.floor(c))),
                            s.cssMode ? (r[n.isHorizontal() ? "scrollLeft" : "scrollTop"] = n.isHorizontal() ? -l : -c) : s.virtualTranslate || a.transform(`translate3d(${l}px, ${c}px, 0px)`),
                            (n.previousTranslate = n.translate),
                            (n.translate = n.isHorizontal() ? l : c);
                        let d;
                        var p = n.maxTranslate() - n.minTranslate();
                        (d = 0 == p ? 0 : (e - n.minTranslate()) / p), d !== o && n.updateProgress(e), n.emit("setTranslate", n.translate, t);
                    },
                    minTranslate: function () {
                        return -this.snapGrid[0];
                    },
                    maxTranslate: function () {
                        return -this.snapGrid[this.snapGrid.length - 1];
                    },
                    translateTo: function (e = 0, t = this.params.speed, n = !0, i = !0, s) {
                        const a = this,
                            { params: r, wrapperEl: o } = a;
                        if (a.animating && r.preventInteractionOnTransition) return !1;
                        var l = a.minTranslate(),
                            c = a.maxTranslate();
                        let d;
                        if (((d = i && l < e ? l : i && e < c ? c : e), a.updateProgress(d), r.cssMode)) {
                            e = a.isHorizontal();
                            if (0 === t) o[e ? "scrollLeft" : "scrollTop"] = -d;
                            else {
                                if (!a.support.smoothScroll) return S({ swiper: a, targetPosition: -d, side: e ? "left" : "top" }), !0;
                                o.scrollTo({ [e ? "left" : "top"]: -d, behavior: "smooth" });
                            }
                            return !0;
                        }
                        return (
                            0 === t
                                ? (a.setTransition(0), a.setTranslate(d), n && (a.emit("beforeTransitionStart", t, s), a.emit("transitionEnd")))
                                : (a.setTransition(t),
                                  a.setTranslate(d),
                                  n && (a.emit("beforeTransitionStart", t, s), a.emit("transitionStart")),
                                  a.animating ||
                                      ((a.animating = !0),
                                      a.onTranslateToWrapperTransitionEnd ||
                                          (a.onTranslateToWrapperTransitionEnd = function (e) {
                                              a &&
                                                  !a.destroyed &&
                                                  e.target === this &&
                                                  (a.$wrapperEl[0].removeEventListener("transitionend", a.onTranslateToWrapperTransitionEnd),
                                                  a.$wrapperEl[0].removeEventListener("webkitTransitionEnd", a.onTranslateToWrapperTransitionEnd),
                                                  (a.onTranslateToWrapperTransitionEnd = null),
                                                  delete a.onTranslateToWrapperTransitionEnd,
                                                  n && a.emit("transitionEnd"));
                                          }),
                                      a.$wrapperEl[0].addEventListener("transitionend", a.onTranslateToWrapperTransitionEnd),
                                      a.$wrapperEl[0].addEventListener("webkitTransitionEnd", a.onTranslateToWrapperTransitionEnd))),
                            !0
                        );
                    },
                },
                transition: {
                    setTransition: function (e, t) {
                        this.params.cssMode || this.$wrapperEl.transition(e), this.emit("setTransition", e, t);
                    },
                    transitionStart: function (e = !0, t) {
                        var n = this["params"];
                        n.cssMode || (n.autoHeight && this.updateAutoHeight(), g({ swiper: this, runCallbacks: e, direction: t, step: "Start" }));
                    },
                    transitionEnd: function (e = !0, t) {
                        var n = this["params"];
                        (this.animating = !1), n.cssMode || (this.setTransition(0), g({ swiper: this, runCallbacks: e, direction: t, step: "End" }));
                    },
                },
                slide: {
                    slideTo: function (e = 0, t = this.params.speed, n = !0, i, s) {
                        if ("number" != typeof e && "string" != typeof e) throw new Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`);
                        if ("string" == typeof e) {
                            var a = parseInt(e, 10);
                            if (!isFinite(a)) throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);
                            e = a;
                        }
                        const r = this;
                        let o = e;
                        o < 0 && (o = 0);
                        const { params: l, snapGrid: c, slidesGrid: d, previousIndex: p, activeIndex: u, rtlTranslate: f, wrapperEl: h, enabled: m } = r;
                        if ((r.animating && l.preventInteractionOnTransition) || (!m && !i && !s)) return !1;
                        let g = (a = Math.min(r.params.slidesPerGroupSkip, o)) + Math.floor((o - a) / r.params.slidesPerGroup);
                        g >= c.length && (g = c.length - 1), (u || l.initialSlide || 0) === (p || 0) && n && r.emit("beforeSlideChangeStart");
                        var v = -c[g];
                        if ((r.updateProgress(v), l.normalizeSlideIndex))
                            for (let e = 0; e < d.length; e += 1) {
                                var b = -Math.floor(100 * v),
                                    y = Math.floor(100 * d[e]),
                                    x = Math.floor(100 * d[e + 1]);
                                void 0 !== d[e + 1] ? (y <= b && b < x - (x - y) / 2 ? (o = e) : y <= b && b < x && (o = e + 1)) : y <= b && (o = e);
                            }
                        if (r.initialized && o !== u) {
                            if (!r.allowSlideNext && v < r.translate && v < r.minTranslate()) return !1;
                            if (!r.allowSlidePrev && v > r.translate && v > r.maxTranslate() && (u || 0) !== o) return !1;
                        }
                        let w;
                        if (((w = o > u ? "next" : o < u ? "prev" : "reset"), (f && -v === r.translate) || (!f && v === r.translate)))
                            return r.updateActiveIndex(o), l.autoHeight && r.updateAutoHeight(), r.updateSlidesClasses(), "slide" !== l.effect && r.setTranslate(v), "reset" !== w && (r.transitionStart(n, w), r.transitionEnd(n, w)), !1;
                        if (l.cssMode) {
                            (e = r.isHorizontal()), (s = f ? v : -v);
                            if (0 === t) {
                                a = r.virtual && r.params.virtual.enabled;
                                a && ((r.wrapperEl.style.scrollSnapType = "none"), (r._immediateVirtual = !0)),
                                    (h[e ? "scrollLeft" : "scrollTop"] = s),
                                    a &&
                                        requestAnimationFrame(() => {
                                            (r.wrapperEl.style.scrollSnapType = ""), (r._swiperImmediateVirtual = !1);
                                        });
                            } else {
                                if (!r.support.smoothScroll) return S({ swiper: r, targetPosition: s, side: e ? "left" : "top" }), !0;
                                h.scrollTo({ [e ? "left" : "top"]: s, behavior: "smooth" });
                            }
                            return !0;
                        }
                        return (
                            0 === t
                                ? (r.setTransition(0), r.setTranslate(v), r.updateActiveIndex(o), r.updateSlidesClasses(), r.emit("beforeTransitionStart", t, i), r.transitionStart(n, w), r.transitionEnd(n, w))
                                : (r.setTransition(t),
                                  r.setTranslate(v),
                                  r.updateActiveIndex(o),
                                  r.updateSlidesClasses(),
                                  r.emit("beforeTransitionStart", t, i),
                                  r.transitionStart(n, w),
                                  r.animating ||
                                      ((r.animating = !0),
                                      r.onSlideToWrapperTransitionEnd ||
                                          (r.onSlideToWrapperTransitionEnd = function (e) {
                                              r &&
                                                  !r.destroyed &&
                                                  e.target === this &&
                                                  (r.$wrapperEl[0].removeEventListener("transitionend", r.onSlideToWrapperTransitionEnd),
                                                  r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd),
                                                  (r.onSlideToWrapperTransitionEnd = null),
                                                  delete r.onSlideToWrapperTransitionEnd,
                                                  r.transitionEnd(n, w));
                                          }),
                                      r.$wrapperEl[0].addEventListener("transitionend", r.onSlideToWrapperTransitionEnd),
                                      r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd))),
                            !0
                        );
                    },
                    slideToLoop: function (e = 0, t = this.params.speed, n = !0, i) {
                        let s = e;
                        return this.params.loop && (s += this.loopedSlides), this.slideTo(s, t, n, i);
                    },
                    slideNext: function (e = this.params.speed, t = !0, n) {
                        var i = this,
                            { animating: s, enabled: a, params: r } = i;
                        if (!a) return i;
                        let o = r.slidesPerGroup;
                        if (("auto" === r.slidesPerView && 1 === r.slidesPerGroup && r.slidesPerGroupAuto && (o = Math.max(i.slidesPerViewDynamic("current", !0), 1)), (a = i.activeIndex < r.slidesPerGroupSkip ? 1 : o), r.loop)) {
                            if (s && r.loopPreventsSlide) return !1;
                            i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft);
                        }
                        return i.slideTo(i.activeIndex + a, e, t, n);
                    },
                    slidePrev: function (e = this.params.speed, t = !0, n) {
                        var i = this;
                        const { params: s, animating: a, snapGrid: r, slidesGrid: o, rtlTranslate: l, enabled: c } = i;
                        if (!c) return i;
                        if (s.loop) {
                            if (a && s.loopPreventsSlide) return !1;
                            i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft);
                        }
                        function d(e) {
                            return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
                        }
                        const p = d(l ? i.translate : -i.translate),
                            u = r.map((e) => d(e));
                        let f = r[u.indexOf(p) - 1];
                        if (void 0 === f && s.cssMode) {
                            let n;
                            r.forEach((e, t) => {
                                p >= e && (n = t);
                            }),
                                void 0 !== n && (f = r[0 < n ? n - 1 : n]);
                        }
                        let h = 0;
                        return (
                            void 0 !== f &&
                                ((h = o.indexOf(f)),
                                h < 0 && (h = i.activeIndex - 1),
                                "auto" === s.slidesPerView && 1 === s.slidesPerGroup && s.slidesPerGroupAuto && ((h = h - i.slidesPerViewDynamic("previous", !0) + 1), (h = Math.max(h, 0)))),
                            i.slideTo(h, e, t, n)
                        );
                    },
                    slideReset: function (e = this.params.speed, t = !0, n) {
                        return this.slideTo(this.activeIndex, e, t, n);
                    },
                    slideToClosest: function (e = this.params.speed, t = !0, n, i = 0.5) {
                        var s = this;
                        let a = s.activeIndex;
                        var r = Math.min(s.params.slidesPerGroupSkip, a),
                            o = r + Math.floor((a - r) / s.params.slidesPerGroup),
                            l = s.rtlTranslate ? s.translate : -s.translate;
                        return (
                            l >= s.snapGrid[o] ? ((r = s.snapGrid[o]), (s.snapGrid[o + 1] - r) * i < l - r && (a += s.params.slidesPerGroup)) : l - (l = s.snapGrid[o - 1]) <= (s.snapGrid[o] - l) * i && (a -= s.params.slidesPerGroup),
                            (a = Math.max(a, 0)),
                            (a = Math.min(a, s.slidesGrid.length - 1)),
                            s.slideTo(a, e, t, n)
                        );
                    },
                    slideToClickedSlide: function () {
                        const e = this,
                            { params: t, $wrapperEl: n } = e;
                        var i,
                            s = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
                        let a = e.clickedIndex;
                        t.loop
                            ? e.animating ||
                              ((i = parseInt(A(e.clickedSlide).attr("data-swiper-slide-index"), 10)),
                              t.centeredSlides
                                  ? a < e.loopedSlides - s / 2 || a > e.slides.length - e.loopedSlides + s / 2
                                      ? (e.loopFix(),
                                        (a = n.children(`.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`).eq(0).index()),
                                        T(() => {
                                            e.slideTo(a);
                                        }))
                                      : e.slideTo(a)
                                  : a > e.slides.length - s
                                  ? (e.loopFix(),
                                    (a = n.children(`.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`).eq(0).index()),
                                    T(() => {
                                        e.slideTo(a);
                                    }))
                                  : e.slideTo(a))
                            : e.slideTo(a);
                    },
                },
                loop: {
                    loopCreate: function () {
                        const i = this,
                            t = C(),
                            { params: n, $wrapperEl: s } = i;
                        s.children(`.${n.slideClass}.${n.slideDuplicateClass}`).remove();
                        let a = s.children(`.${n.slideClass}`);
                        if (n.loopFillGroupWithBlank) {
                            var r = n.slidesPerGroup - (a.length % n.slidesPerGroup);
                            if (r !== n.slidesPerGroup) {
                                for (let e = 0; e < r; e += 1) {
                                    var o = A(t.createElement("div")).addClass(`${n.slideClass} ${n.slideBlankClass}`);
                                    s.append(o);
                                }
                                a = s.children(`.${n.slideClass}`);
                            }
                        }
                        "auto" !== n.slidesPerView || n.loopedSlides || (n.loopedSlides = a.length),
                            (i.loopedSlides = Math.ceil(parseFloat(n.loopedSlides || n.slidesPerView, 10))),
                            (i.loopedSlides += n.loopAdditionalSlides),
                            i.loopedSlides > a.length && (i.loopedSlides = a.length);
                        const l = [],
                            c = [];
                        a.each((e, t) => {
                            const n = A(e);
                            t < i.loopedSlides && c.push(e), t < a.length && t >= a.length - i.loopedSlides && l.push(e), n.attr("data-swiper-slide-index", t);
                        });
                        for (let e = 0; e < c.length; e += 1) s.append(A(c[e].cloneNode(!0)).addClass(n.slideDuplicateClass));
                        for (let e = l.length - 1; 0 <= e; --e) s.prepend(A(l[e].cloneNode(!0)).addClass(n.slideDuplicateClass));
                    },
                    loopFix: function () {
                        var e = this;
                        e.emit("beforeLoopFix");
                        var { activeIndex: t, slides: n, loopedSlides: i, allowSlidePrev: s, allowSlideNext: a, snapGrid: r, rtlTranslate: o } = e;
                        let l;
                        (e.allowSlidePrev = !0),
                            (e.allowSlideNext = !0),
                            (r = -r[t] - e.getTranslate()),
                            t < i
                                ? ((l = n.length - 3 * i + t), (l += i), e.slideTo(l, 0, !1, !0) && 0 != r && e.setTranslate((o ? -e.translate : e.translate) - r))
                                : t >= n.length - i && ((l = -n.length + t + i), (l += i), e.slideTo(l, 0, !1, !0) && 0 != r && e.setTranslate((o ? -e.translate : e.translate) - r)),
                            (e.allowSlidePrev = s),
                            (e.allowSlideNext = a),
                            e.emit("loopFix");
                    },
                    loopDestroy: function () {
                        const { $wrapperEl: e, params: t, slides: n } = this;
                        e.children(`.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`).remove(), n.removeAttr("data-swiper-slide-index");
                    },
                },
                grabCursor: {
                    setGrabCursor: function (e) {
                        var t = this;
                        if (!(t.support.touch || !t.params.simulateTouch || (t.params.watchOverflow && t.isLocked) || t.params.cssMode)) {
                            const n = "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
                            (n.style.cursor = "move"), (n.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab"), (n.style.cursor = e ? "-moz-grabbin" : "-moz-grab"), (n.style.cursor = e ? "grabbing" : "grab");
                        }
                    },
                    unsetGrabCursor: function () {
                        var e = this;
                        e.support.touch || (e.params.watchOverflow && e.isLocked) || e.params.cssMode || (e["container" === e.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "");
                    },
                },
                events: {
                    attachEvents: function () {
                        var e = this;
                        const t = C();
                        var { params: n, support: i } = e;
                        (e.onTouchStart = function (e) {
                            var i = this;
                            const s = C();
                            var a = I();
                            const r = i.touchEventsData,
                                { params: o, touches: l, enabled: t } = i;
                            if (t && (!i.animating || !o.preventInteractionOnTransition)) {
                                !i.animating && o.cssMode && o.loop && i.loopFix();
                                let t = e;
                                t.originalEvent && (t = t.originalEvent);
                                let n = A(t.target);
                                if (
                                    ("wrapper" !== o.touchEventsTarget || n.closest(i.wrapperEl).length) &&
                                    ((r.isTouchEvent = "touchstart" === t.type), (r.isTouchEvent || !("which" in t) || 3 !== t.which) && !((!r.isTouchEvent && "button" in t && 0 < t.button) || (r.isTouched && r.isMoved)))
                                ) {
                                    !!o.noSwipingClass && "" !== o.noSwipingClass && t.target && t.target.shadowRoot && e.path && e.path[0] && (n = A(e.path[0]));
                                    var c = o.noSwipingSelector || `.${o.noSwipingClass}`,
                                        d = !(!t.target || !t.target.shadowRoot);
                                    if (o.noSwiping && (d ? b(c, t.target) : n.closest(c)[0])) i.allowClick = !0;
                                    else if (!o.swipeHandler || n.closest(o.swipeHandler)[0]) {
                                        (l.currentX = ("touchstart" === t.type ? t.targetTouches[0] : t).pageX), (l.currentY = ("touchstart" === t.type ? t.targetTouches[0] : t).pageY);
                                        var p = l.currentX,
                                            u = l.currentY,
                                            d = o.edgeSwipeDetection || o.iOSEdgeSwipeDetection,
                                            c = o.edgeSwipeThreshold || o.iOSEdgeSwipeThreshold;
                                        if (d && (p <= c || p >= a.innerWidth - c)) {
                                            if ("prevent" !== d) return;
                                            e.preventDefault();
                                        }
                                        if (
                                            (Object.assign(r, { isTouched: !0, isMoved: !1, allowTouchCallbacks: !0, isScrolling: void 0, startMoving: void 0 }),
                                            (l.startX = p),
                                            (l.startY = u),
                                            (r.touchStartTime = v()),
                                            (i.allowClick = !0),
                                            i.updateSize(),
                                            (i.swipeDirection = void 0),
                                            0 < o.threshold && (r.allowThresholdMove = !1),
                                            "touchstart" !== t.type)
                                        ) {
                                            let e = !0;
                                            n.is(r.focusableElements) && (e = !1), s.activeElement && A(s.activeElement).is(r.focusableElements) && s.activeElement !== n[0] && s.activeElement.blur();
                                            u = e && i.allowTouchMove && o.touchStartPreventDefault;
                                            (!o.touchStartForcePreventDefault && !u) || n[0].isContentEditable || t.preventDefault();
                                        }
                                        i.emit("touchStart", t);
                                    }
                                }
                            }
                        }.bind(e)),
                            (e.onTouchMove = function (s) {
                                var a = C(),
                                    r = this;
                                const o = r.touchEventsData,
                                    { params: l, touches: c, rtlTranslate: d, enabled: e } = r;
                                if (e) {
                                    let i = s;
                                    if ((i.originalEvent && (i = i.originalEvent), o.isTouched)) {
                                        if (!o.isTouchEvent || "touchmove" === i.type) {
                                            var t = "touchmove" === i.type && i.targetTouches && (i.targetTouches[0] || i.changedTouches[0]),
                                                s = ("touchmove" === i.type ? t : i).pageX,
                                                t = ("touchmove" === i.type ? t : i).pageY;
                                            if (i.preventedByNestedSwiper) return (c.startX = s), void (c.startY = t);
                                            if (!r.allowTouchMove) return (r.allowClick = !1), void (o.isTouched && (Object.assign(c, { startX: s, startY: t, currentX: s, currentY: t }), (o.touchStartTime = v())));
                                            if (o.isTouchEvent && l.touchReleaseOnEdges && !l.loop)
                                                if (r.isVertical()) {
                                                    if ((t < c.startY && r.translate <= r.maxTranslate()) || (t > c.startY && r.translate >= r.minTranslate())) return (o.isTouched = !1), void (o.isMoved = !1);
                                                } else if ((s < c.startX && r.translate <= r.maxTranslate()) || (s > c.startX && r.translate >= r.minTranslate())) return;
                                            if (o.isTouchEvent && a.activeElement && i.target === a.activeElement && A(i.target).is(o.focusableElements)) return (o.isMoved = !0), void (r.allowClick = !1);
                                            if ((o.allowTouchCallbacks && r.emit("touchMove", i), !(i.targetTouches && 1 < i.targetTouches.length))) {
                                                (c.currentX = s), (c.currentY = t);
                                                (a = c.currentX - c.startX), (s = c.currentY - c.startY);
                                                if (!(r.params.threshold && Math.sqrt(a ** 2 + s ** 2) < r.params.threshold))
                                                    if (
                                                        (void 0 === o.isScrolling &&
                                                            ((r.isHorizontal() && c.currentY === c.startY) || (r.isVertical() && c.currentX === c.startX)
                                                                ? (o.isScrolling = !1)
                                                                : 25 <= a * a + s * s && ((t = (180 * Math.atan2(Math.abs(s), Math.abs(a))) / Math.PI), (o.isScrolling = r.isHorizontal() ? t > l.touchAngle : 90 - t > l.touchAngle))),
                                                        o.isScrolling && r.emit("touchMoveOpposite", i),
                                                        void 0 === o.startMoving && ((c.currentX === c.startX && c.currentY === c.startY) || (o.startMoving = !0)),
                                                        o.isScrolling)
                                                    )
                                                        o.isTouched = !1;
                                                    else if (o.startMoving) {
                                                        (r.allowClick = !1),
                                                            !l.cssMode && i.cancelable && i.preventDefault(),
                                                            l.touchMoveStopPropagation && !l.nested && i.stopPropagation(),
                                                            o.isMoved ||
                                                                (l.loop && !l.cssMode && r.loopFix(),
                                                                (o.startTranslate = r.getTranslate()),
                                                                r.setTransition(0),
                                                                r.animating && r.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
                                                                (o.allowMomentumBounce = !1),
                                                                !l.grabCursor || (!0 !== r.allowSlideNext && !0 !== r.allowSlidePrev) || r.setGrabCursor(!0),
                                                                r.emit("sliderFirstMove", i)),
                                                            r.emit("sliderMove", i),
                                                            (o.isMoved = !0);
                                                        let e = r.isHorizontal() ? a : s;
                                                        (c.diff = e), (e *= l.touchRatio), d && (e = -e), (r.swipeDirection = 0 < e ? "prev" : "next"), (o.currentTranslate = e + o.startTranslate);
                                                        let t = !0,
                                                            n = l.resistanceRatio;
                                                        if (
                                                            (l.touchReleaseOnEdges && (n = 0),
                                                            0 < e && o.currentTranslate > r.minTranslate()
                                                                ? ((t = !1), l.resistance && (o.currentTranslate = r.minTranslate() - 1 + (-r.minTranslate() + o.startTranslate + e) ** n))
                                                                : e < 0 && o.currentTranslate < r.maxTranslate() && ((t = !1), l.resistance && (o.currentTranslate = r.maxTranslate() + 1 - (r.maxTranslate() - o.startTranslate - e) ** n)),
                                                            t && (i.preventedByNestedSwiper = !0),
                                                            !r.allowSlideNext && "next" === r.swipeDirection && o.currentTranslate < o.startTranslate && (o.currentTranslate = o.startTranslate),
                                                            !r.allowSlidePrev && "prev" === r.swipeDirection && o.currentTranslate > o.startTranslate && (o.currentTranslate = o.startTranslate),
                                                            r.allowSlidePrev || r.allowSlideNext || (o.currentTranslate = o.startTranslate),
                                                            0 < l.threshold)
                                                        ) {
                                                            if (!(Math.abs(e) > l.threshold || o.allowThresholdMove)) return void (o.currentTranslate = o.startTranslate);
                                                            if (!o.allowThresholdMove)
                                                                return (
                                                                    (o.allowThresholdMove = !0),
                                                                    (c.startX = c.currentX),
                                                                    (c.startY = c.currentY),
                                                                    (o.currentTranslate = o.startTranslate),
                                                                    void (c.diff = r.isHorizontal() ? c.currentX - c.startX : c.currentY - c.startY)
                                                                );
                                                        }
                                                        l.followFinger &&
                                                            !l.cssMode &&
                                                            (((l.freeMode && l.freeMode.enabled && r.freeMode) || l.watchSlidesProgress) && (r.updateActiveIndex(), r.updateSlidesClasses()),
                                                            r.params.freeMode && l.freeMode.enabled && r.freeMode && r.freeMode.onTouchMove(),
                                                            r.updateProgress(o.currentTranslate),
                                                            r.setTranslate(o.currentTranslate));
                                                    }
                                            }
                                        }
                                    } else o.startMoving && o.isScrolling && r.emit("touchMoveOpposite", i);
                                }
                            }.bind(e)),
                            (e.onTouchEnd = function (s) {
                                const a = this,
                                    t = a.touchEventsData;
                                var { params: r, touches: n, rtlTranslate: o, slidesGrid: l, enabled: c } = a;
                                if (c) {
                                    let e = s;
                                    if ((e.originalEvent && (e = e.originalEvent), t.allowTouchCallbacks && a.emit("touchEnd", e), (t.allowTouchCallbacks = !1), !t.isTouched))
                                        return t.isMoved && r.grabCursor && a.setGrabCursor(!1), (t.isMoved = !1), void (t.startMoving = !1);
                                    r.grabCursor && t.isMoved && t.isTouched && (!0 === a.allowSlideNext || !0 === a.allowSlidePrev) && a.setGrabCursor(!1);
                                    (c = v()), (s = c - t.touchStartTime);
                                    if (
                                        (a.allowClick && (a.updateClickedSlide(e), a.emit("tap click", e), s < 300 && c - t.lastClickTime < 300 && a.emit("doubleTap doubleClick", e)),
                                        (t.lastClickTime = v()),
                                        T(() => {
                                            a.destroyed || (a.allowClick = !0);
                                        }),
                                        !t.isTouched || !t.isMoved || !a.swipeDirection || 0 === n.diff || t.currentTranslate === t.startTranslate)
                                    )
                                        return (t.isTouched = !1), (t.isMoved = !1), void (t.startMoving = !1);
                                    (t.isTouched = !1), (t.isMoved = !1), (t.startMoving = !1);
                                    let i;
                                    if (((i = r.followFinger ? (o ? a.translate : -a.translate) : -t.currentTranslate), !r.cssMode))
                                        if (a.params.freeMode && r.freeMode.enabled) a.freeMode.onTouchEnd({ currentPos: i });
                                        else {
                                            let t = 0,
                                                n = a.slidesSizesGrid[0];
                                            for (let e = 0; e < l.length; e += e < r.slidesPerGroupSkip ? 1 : r.slidesPerGroup) {
                                                const d = e < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
                                                void 0 !== l[e + d] ? i >= l[e] && i < l[e + d] && ((t = e), (n = l[e + d] - l[e])) : i >= l[e] && ((t = e), (n = l[l.length - 1] - l[l.length - 2]));
                                            }
                                            o = (i - l[t]) / n;
                                            const d = t < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
                                            s > r.longSwipesMs
                                                ? r.longSwipes
                                                    ? ("next" === a.swipeDirection && (o >= r.longSwipesRatio ? a.slideTo(t + d) : a.slideTo(t)), "prev" === a.swipeDirection && (o > 1 - r.longSwipesRatio ? a.slideTo(t + d) : a.slideTo(t)))
                                                    : a.slideTo(a.activeIndex)
                                                : r.shortSwipes
                                                ? a.navigation && (e.target === a.navigation.nextEl || e.target === a.navigation.prevEl)
                                                    ? e.target === a.navigation.nextEl
                                                        ? a.slideTo(t + d)
                                                        : a.slideTo(t)
                                                    : ("next" === a.swipeDirection && a.slideTo(t + d), "prev" === a.swipeDirection && a.slideTo(t))
                                                : a.slideTo(a.activeIndex);
                                        }
                                }
                            }.bind(e)),
                            n.cssMode &&
                                (e.onScroll = function () {
                                    var t = this,
                                        { wrapperEl: n, rtlTranslate: i, enabled: e } = t;
                                    if (e) {
                                        (t.previousTranslate = t.translate),
                                            t.isHorizontal() ? (t.translate = -n.scrollLeft) : (t.translate = -n.scrollTop),
                                            -0 === t.translate && (t.translate = 0),
                                            t.updateActiveIndex(),
                                            t.updateSlidesClasses();
                                        let e;
                                        n = t.maxTranslate() - t.minTranslate();
                                        (e = 0 == n ? 0 : (t.translate - t.minTranslate()) / n), e !== t.progress && t.updateProgress(i ? -t.translate : t.translate), t.emit("setTranslate", t.translate, !1);
                                    }
                                }.bind(e)),
                            (e.onClick = function (e) {
                                var t = this;
                                t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation())));
                            }.bind(e)),
                            i.touch && !x && (t.addEventListener("touchstart", w), (x = !0)),
                            E(e, "on");
                    },
                    detachEvents: function () {
                        E(this, "off");
                    },
                },
                breakpoints: {
                    setBreakpoint: function () {
                        var e = this;
                        const { activeIndex: t, initialized: n, loopedSlides: i = 0, params: s, $el: a } = e;
                        var r,
                            o,
                            l,
                            c,
                            d = s.breakpoints;
                        !d ||
                            0 === Object.keys(d).length ||
                            ((r = e.getBreakpoint(d, e.params.breakpointsBase, e.el)) &&
                                e.currentBreakpoint !== r &&
                                ((o = (r in d ? d[r] : void 0) || e.originalParams),
                                (c = $(e, s)),
                                (l = $(e, o)),
                                (d = s.enabled),
                                c && !l
                                    ? (a.removeClass(`${s.containerModifierClass}grid ${s.containerModifierClass}grid-column`), e.emitContainerClasses())
                                    : !c &&
                                      l &&
                                      (a.addClass(`${s.containerModifierClass}grid`),
                                      ((o.grid.fill && "column" === o.grid.fill) || (!o.grid.fill && "column" === s.grid.fill)) && a.addClass(`${s.containerModifierClass}grid-column`),
                                      e.emitContainerClasses()),
                                (c = o.direction && o.direction !== s.direction),
                                (l = s.loop && (o.slidesPerView !== s.slidesPerView || c)),
                                c && n && e.changeDirection(),
                                p(e.params, o),
                                (c = e.params.enabled),
                                Object.assign(e, { allowTouchMove: e.params.allowTouchMove, allowSlideNext: e.params.allowSlideNext, allowSlidePrev: e.params.allowSlidePrev }),
                                d && !c ? e.disable() : !d && c && e.enable(),
                                (e.currentBreakpoint = r),
                                e.emit("_beforeBreakpoint", o),
                                l && n && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - i + e.loopedSlides, 0, !1)),
                                e.emit("breakpoint", o)));
                    },
                    getBreakpoint: function (e, n = "window", i) {
                        if (e && ("container" !== n || i)) {
                            let t = !1;
                            const r = I(),
                                o = "window" === n ? r.innerHeight : i.clientHeight,
                                l = Object.keys(e).map((e) => {
                                    if ("string" != typeof e || 0 !== e.indexOf("@")) return { value: e, point: e };
                                    var t = parseFloat(e.substr(1));
                                    return { value: o * t, point: e };
                                });
                            l.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
                            for (let e = 0; e < l.length; e += 1) {
                                var { point: s, value: a } = l[e];
                                "window" === n ? r.matchMedia(`(min-width: ${a}px)`).matches && (t = s) : a <= i.clientWidth && (t = s);
                            }
                            return t || "max";
                        }
                    },
                },
                checkOverflow: {
                    checkOverflow: function () {
                        var e,
                            t,
                            n = this,
                            { isLocked: i, params: s } = n;
                        (t = s["slidesOffsetBefore"]) ? ((e = n.slides.length - 1), (t = n.slidesGrid[e] + n.slidesSizesGrid[e] + 2 * t), (n.isLocked = n.size > t)) : (n.isLocked = 1 === n.snapGrid.length),
                            !0 === s.allowSlideNext && (n.allowSlideNext = !n.isLocked),
                            !0 === s.allowSlidePrev && (n.allowSlidePrev = !n.isLocked),
                            i && i !== n.isLocked && (n.isEnd = !1),
                            i !== n.isLocked && n.emit(n.isLocked ? "lock" : "unlock");
                    },
                },
                classes: {
                    addClasses: function () {
                        const { classNames: e, params: t, rtl: n, $el: i, device: s, support: a } = this;
                        var r = (function (e, n) {
                            const i = [];
                            return (
                                e.forEach((t) => {
                                    "object" == typeof t
                                        ? Object.keys(t).forEach((e) => {
                                              t[e] && i.push(n + e);
                                          })
                                        : "string" == typeof t && i.push(n + t);
                                }),
                                i
                            );
                        })(
                            [
                                "initialized",
                                t.direction,
                                { "pointer-events": !a.touch },
                                { "free-mode": this.params.freeMode && t.freeMode.enabled },
                                { autoheight: t.autoHeight },
                                { rtl: n },
                                { grid: t.grid && 1 < t.grid.rows },
                                { "grid-column": t.grid && 1 < t.grid.rows && "column" === t.grid.fill },
                                { android: s.android },
                                { ios: s.ios },
                                { "css-mode": t.cssMode },
                                { centered: t.cssMode && t.centeredSlides },
                            ],
                            t.containerModifierClass
                        );
                        e.push(...r), i.addClass([...e].join(" ")), this.emitContainerClasses();
                    },
                    removeClasses: function () {
                        const { $el: e, classNames: t } = this;
                        e.removeClass(t.join(" ")), this.emitContainerClasses();
                    },
                },
                images: {
                    loadImage: function (e, t, n, i, s, a) {
                        const r = I();
                        let o;
                        function l() {
                            a && a();
                        }
                        !(A(e).parent("picture")[0] || (e.complete && s)) && t ? ((o = new r.Image()), (o.onload = l), (o.onerror = l), i && (o.sizes = i), n && (o.srcset = n), t && (o.src = t)) : l();
                    },
                    preloadImages: function () {
                        const t = this;
                        function n() {
                            void 0 !== t &&
                                null !== t &&
                                t &&
                                !t.destroyed &&
                                (void 0 !== t.imagesLoaded && (t.imagesLoaded += 1), t.imagesLoaded === t.imagesToLoad.length && (t.params.updateOnImagesReady && t.update(), t.emit("imagesReady")));
                        }
                        t.imagesToLoad = t.$el.find("img");
                        for (let e = 0; e < t.imagesToLoad.length; e += 1) {
                            const i = t.imagesToLoad[e];
                            t.loadImage(i, i.currentSrc || i.getAttribute("src"), i.srcset || i.getAttribute("srcset"), i.sizes || i.getAttribute("sizes"), !0, n);
                        }
                    },
                },
            },
            P = {};
        class z {
            constructor(...e) {
                let t, n;
                if ((1 === e.length && e[0].constructor && "Object" === Object.prototype.toString.call(e[0]).slice(8, -1) ? (n = e[0]) : ([t, n] = e), (n = n || {}), (n = p({}, n)), t && !n.el && (n.el = t), n.el && 1 < A(n.el).length)) {
                    const s = [];
                    return (
                        A(n.el).each((e) => {
                            e = p({}, n, { el: e });
                            s.push(new z(e));
                        }),
                        s
                    );
                }
                const a = this;
                (a.__swiper__ = !0),
                    (a.support = u()),
                    (a.device = f({ userAgent: n.userAgent })),
                    (a.browser = ((h = h || m()), h)),
                    (a.eventsListeners = {}),
                    (a.eventsAnyListeners = []),
                    (a.modules = [...a.__modules__]),
                    n.modules && Array.isArray(n.modules) && a.modules.push(...n.modules);
                const r = {};
                a.modules.forEach((e) => {
                    var i, s;
                    e({
                        swiper: a,
                        extendParams:
                            ((i = n),
                            (s = r),
                            function (e = {}) {
                                var t = Object.keys(e)[0],
                                    n = e[t];
                                "object" == typeof n &&
                                    null !== n &&
                                    (0 <= ["navigation", "pagination", "scrollbar"].indexOf(t) && !0 === i[t] && (i[t] = { auto: !0 }),
                                    t in i && "enabled" in n && (!0 === i[t] && (i[t] = { enabled: !0 }), "object" != typeof i[t] || "enabled" in i[t] || (i[t].enabled = !0), i[t] || (i[t] = { enabled: !1 }))),
                                    p(s, e);
                            }),
                        on: a.on.bind(a),
                        once: a.once.bind(a),
                        off: a.off.bind(a),
                        emit: a.emit.bind(a),
                    });
                });
                var i = p({}, k, r);
                return (
                    (a.params = p({}, i, P, n)),
                    (a.originalParams = p({}, a.params)),
                    (a.passedParams = p({}, n)),
                    a.params &&
                        a.params.on &&
                        Object.keys(a.params.on).forEach((e) => {
                            a.on(e, a.params.on[e]);
                        }),
                    a.params && a.params.onAny && a.onAny(a.params.onAny),
                    (a.$ = A),
                    Object.assign(a, {
                        enabled: a.params.enabled,
                        el: t,
                        classNames: [],
                        slides: A(),
                        slidesGrid: [],
                        snapGrid: [],
                        slidesSizesGrid: [],
                        isHorizontal() {
                            return "horizontal" === a.params.direction;
                        },
                        isVertical() {
                            return "vertical" === a.params.direction;
                        },
                        activeIndex: 0,
                        realIndex: 0,
                        isBeginning: !0,
                        isEnd: !1,
                        translate: 0,
                        previousTranslate: 0,
                        progress: 0,
                        velocity: 0,
                        animating: !1,
                        allowSlideNext: a.params.allowSlideNext,
                        allowSlidePrev: a.params.allowSlidePrev,
                        touchEvents:
                            ((e = ["touchstart", "touchmove", "touchend", "touchcancel"]),
                            (i = ["pointerdown", "pointermove", "pointerup"]),
                            (a.touchEventsTouch = { start: e[0], move: e[1], end: e[2], cancel: e[3] }),
                            (a.touchEventsDesktop = { start: i[0], move: i[1], end: i[2] }),
                            a.support.touch || !a.params.simulateTouch ? a.touchEventsTouch : a.touchEventsDesktop),
                        touchEventsData: {
                            isTouched: void 0,
                            isMoved: void 0,
                            allowTouchCallbacks: void 0,
                            touchStartTime: void 0,
                            isScrolling: void 0,
                            currentTranslate: void 0,
                            startTranslate: void 0,
                            allowThresholdMove: void 0,
                            focusableElements: a.params.focusableElements,
                            lastClickTime: v(),
                            clickTimeout: void 0,
                            velocities: [],
                            allowMomentumBounce: void 0,
                            isTouchEvent: void 0,
                            startMoving: void 0,
                        },
                        allowClick: !0,
                        allowTouchMove: a.params.allowTouchMove,
                        touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
                        imagesToLoad: [],
                        imagesLoaded: 0,
                    }),
                    a.emit("_swiper"),
                    a.params.init && a.init(),
                    a
                );
            }
            enable() {
                var e = this;
                e.enabled || ((e.enabled = !0), e.params.grabCursor && e.setGrabCursor(), e.emit("enable"));
            }
            disable() {
                var e = this;
                e.enabled && ((e.enabled = !1), e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable"));
            }
            setProgress(e, t) {
                var n = this;
                e = Math.min(Math.max(e, 0), 1);
                var i = n.minTranslate(),
                    s = n.maxTranslate();
                n.translateTo((s - i) * e + i, void 0 === t ? 0 : t), n.updateActiveIndex(), n.updateSlidesClasses();
            }
            emitContainerClasses() {
                const t = this;
                if (t.params._emitClasses && t.el) {
                    const e = t.el.className.split(" ").filter((e) => 0 === e.indexOf("swiper") || 0 === e.indexOf(t.params.containerModifierClass));
                    t.emit("_containerClasses", e.join(" "));
                }
            }
            getSlideClasses(e) {
                const t = this;
                return e.className
                    .split(" ")
                    .filter((e) => 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass))
                    .join(" ");
            }
            emitSlidesClasses() {
                const n = this;
                if (n.params._emitClasses && n.el) {
                    const i = [];
                    n.slides.each((e) => {
                        var t = n.getSlideClasses(e);
                        i.push({ slideEl: e, classNames: t }), n.emit("_slideClass", e, t);
                    }),
                        n.emit("_slideClasses", i);
                }
            }
            slidesPerViewDynamic(e = "current", t = !1) {
                var { params: n, slides: i, slidesGrid: s, slidesSizesGrid: a, size: r, activeIndex: o } = this;
                let l = 1;
                if (n.centeredSlides) {
                    let t = i[o].swiperSlideSize,
                        n;
                    for (let e = o + 1; e < i.length; e += 1) i[e] && !n && ((t += i[e].swiperSlideSize), (l += 1), t > r && (n = !0));
                    for (let e = o - 1; 0 <= e; --e) i[e] && !n && ((t += i[e].swiperSlideSize), (l += 1), t > r && (n = !0));
                } else if ("current" === e) for (let e = o + 1; e < i.length; e += 1) (t ? s[e] + a[e] - s[o] < r : s[e] - s[o] < r) && (l += 1);
                else for (let e = o - 1; 0 <= e; --e) s[o] - s[e] < r && (l += 1);
                return l;
            }
            update() {
                const t = this;
                if (t && !t.destroyed) {
                    var { snapGrid: n, params: i } = t;
                    i.breakpoints && t.setBreakpoint(), t.updateSize(), t.updateSlides(), t.updateProgress(), t.updateSlidesClasses();
                    let e;
                    function s() {
                        var e = t.rtlTranslate ? -1 * t.translate : t.translate,
                            e = Math.min(Math.max(e, t.maxTranslate()), t.minTranslate());
                        t.setTranslate(e), t.updateActiveIndex(), t.updateSlidesClasses();
                    }
                    t.params.freeMode && t.params.freeMode.enabled
                        ? (s(), t.params.autoHeight && t.updateAutoHeight())
                        : ((e = ("auto" === t.params.slidesPerView || 1 < t.params.slidesPerView) && t.isEnd && !t.params.centeredSlides ? t.slideTo(t.slides.length - 1, 0, !1, !0) : t.slideTo(t.activeIndex, 0, !1, !0)), e || s()),
                        i.watchOverflow && n !== t.snapGrid && t.checkOverflow(),
                        t.emit("update");
                }
            }
            changeDirection(t, e = !0) {
                var n = this,
                    i = n.params.direction;
                return (
                    (t = t || ("horizontal" === i ? "vertical" : "horizontal")) === i ||
                        ("horizontal" !== t && "vertical" !== t) ||
                        (n.$el.removeClass(`${n.params.containerModifierClass}${i}`).addClass(`${n.params.containerModifierClass}${t}`),
                        n.emitContainerClasses(),
                        (n.params.direction = t),
                        n.slides.each((e) => {
                            "vertical" === t ? (e.style.width = "") : (e.style.height = "");
                        }),
                        n.emit("changeDirection"),
                        e && n.update()),
                    n
                );
            }
            mount(t) {
                const e = this;
                if (e.mounted) return !0;
                const n = A(t || e.params.el);
                if (!(t = n[0])) return !1;
                t.swiper = e;
                const i = () => `.${(e.params.wrapperClass || "").trim().split(" ").join(".")}`;
                let s = (() => {
                    if (t && t.shadowRoot && t.shadowRoot.querySelector) {
                        const e = A(t.shadowRoot.querySelector(i()));
                        return (e.children = (e) => n.children(e)), e;
                    }
                    return n.children(i());
                })();
                if (0 === s.length && e.params.createElements) {
                    const a = C(),
                        r = a.createElement("div");
                    (s = A(r)),
                        (r.className = e.params.wrapperClass),
                        n.append(r),
                        n.children(`.${e.params.slideClass}`).each((e) => {
                            s.append(e);
                        });
                }
                return (
                    Object.assign(e, {
                        $el: n,
                        el: t,
                        $wrapperEl: s,
                        wrapperEl: s[0],
                        mounted: !0,
                        rtl: "rtl" === t.dir.toLowerCase() || "rtl" === n.css("direction"),
                        rtlTranslate: "horizontal" === e.params.direction && ("rtl" === t.dir.toLowerCase() || "rtl" === n.css("direction")),
                        wrongRTL: "-webkit-box" === s.css("display"),
                    }),
                    !0
                );
            }
            init(e) {
                var t = this;
                return (
                    t.initialized ||
                        !1 === t.mount(e) ||
                        (t.emit("beforeInit"),
                        t.params.breakpoints && t.setBreakpoint(),
                        t.addClasses(),
                        t.params.loop && t.loopCreate(),
                        t.updateSize(),
                        t.updateSlides(),
                        t.params.watchOverflow && t.checkOverflow(),
                        t.params.grabCursor && t.enabled && t.setGrabCursor(),
                        t.params.preloadImages && t.preloadImages(),
                        t.params.loop ? t.slideTo(t.params.initialSlide + t.loopedSlides, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0),
                        t.attachEvents(),
                        (t.initialized = !0),
                        t.emit("init"),
                        t.emit("afterInit")),
                    t
                );
            }
            destroy(e = !0, t = !0) {
                const n = this,
                    { params: i, $el: s, $wrapperEl: a, slides: r } = n;
                return (
                    void 0 === n.params ||
                        n.destroyed ||
                        (n.emit("beforeDestroy"),
                        (n.initialized = !1),
                        n.detachEvents(),
                        i.loop && n.loopDestroy(),
                        t &&
                            (n.removeClasses(),
                            s.removeAttr("style"),
                            a.removeAttr("style"),
                            r && r.length && r.removeClass([i.slideVisibleClass, i.slideActiveClass, i.slideNextClass, i.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")),
                        n.emit("destroy"),
                        Object.keys(n.eventsListeners).forEach((e) => {
                            n.off(e);
                        }),
                        !1 !== e &&
                            ((n.$el[0].swiper = null),
                            (function (e) {
                                const t = e;
                                Object.keys(t).forEach((e) => {
                                    try {
                                        t[e] = null;
                                    } catch (e) {}
                                    try {
                                        delete t[e];
                                    } catch (e) {}
                                });
                            })(n)),
                        (n.destroyed = !0)),
                    null
                );
            }
            static extendDefaults(e) {
                p(P, e);
            }
            static get extendedDefaults() {
                return P;
            }
            static get defaults() {
                return k;
            }
            static installModule(e) {
                z.prototype.__modules__ || (z.prototype.__modules__ = []);
                const t = z.prototype.__modules__;
                "function" == typeof e && t.indexOf(e) < 0 && t.push(e);
            }
            static use(e) {
                return Array.isArray(e) ? e.forEach((e) => z.installModule(e)) : z.installModule(e), z;
            }
        }
        function O(n, i, s, a) {
            const r = C();
            return (
                n.params.createElements &&
                    Object.keys(a).forEach((t) => {
                        if (!s[t] && !0 === s.auto) {
                            let e = n.$el.children(`.${a[t]}`)[0];
                            e || ((e = r.createElement("div")), (e.className = a[t]), n.$el.append(e)), (s[t] = e), (i[t] = e);
                        }
                    }),
                s
            );
        }
        function D(e = "") {
            return `.${e
                .trim()
                .replace(/([\.:!\/])/g, "\\$1")
                .replace(/ /g, ".")}`;
        }
        function j(e) {
            const { effect: n, swiper: i, on: t, setTranslate: s, setTransition: a, overwriteParams: r, perspective: o } = e;
            t("beforeInit", () => {
                var e;
                i.params.effect === n &&
                    (i.classNames.push(`${i.params.containerModifierClass}${n}`), o && o() && i.classNames.push(`${i.params.containerModifierClass}3d`), (e = r ? r() : {}), Object.assign(i.params, e), Object.assign(i.originalParams, e));
            }),
                t("setTranslate", () => {
                    i.params.effect === n && s();
                }),
                t("setTransition", (e, t) => {
                    i.params.effect === n && a(t);
                });
        }
        function _(e, t) {
            return e.transformEl ? t.find(e.transformEl).css({ "backface-visibility": "hidden", "-webkit-backface-visibility": "hidden" }) : t;
        }
        function N({ swiper: n, duration: e, transformEl: i, allSlides: s }) {
            const { slides: a, activeIndex: r, $wrapperEl: o } = n;
            if (n.params.virtualTranslate && 0 !== e) {
                let e = !1,
                    t;
                (t = s ? (i ? a.find(i) : a) : i ? a.eq(r).find(i) : a.eq(r)),
                    t.transitionEnd(() => {
                        if (!e && n && !n.destroyed) {
                            (e = !0), (n.animating = !1);
                            var t = ["webkitTransitionEnd", "transitionend"];
                            for (let e = 0; e < t.length; e += 1) o.trigger(t[e]);
                        }
                    });
            }
        }
        function q(e, t, n) {
            var i = `swiper-slide-shadow${n ? `-${n}` : ""}`;
            const s = e.transformEl ? t.find(e.transformEl) : t;
            let a = s.children(`.${i}`);
            return a.length || ((a = A(`<div class="swiper-slide-shadow${n ? `-${n}` : ""}"></div>`)), s.append(a)), a;
        }
        Object.keys(M).forEach((t) => {
            Object.keys(M[t]).forEach((e) => {
                z.prototype[e] = M[t][e];
            });
        }),
            z.use([
                function ({ swiper: a, on: e, emit: t }) {
                    const n = I();
                    let i = null;
                    const r = () => {
                            a && !a.destroyed && a.initialized && (t("beforeResize"), t("resize"));
                        },
                        s = () => {
                            a && !a.destroyed && a.initialized && t("orientationchange");
                        };
                    e("init", () => {
                        a.params.resizeObserver && void 0 !== n.ResizeObserver
                            ? a &&
                              !a.destroyed &&
                              a.initialized &&
                              ((i = new ResizeObserver((e) => {
                                  var { width: t, height: n } = a;
                                  let i = t,
                                      s = n;
                                  e.forEach(({ contentBoxSize: e, contentRect: t, target: n }) => {
                                      (n && n !== a.el) || ((i = t ? t.width : (e[0] || e).inlineSize), (s = t ? t.height : (e[0] || e).blockSize));
                                  }),
                                      (i === t && s === n) || r();
                              })),
                              i.observe(a.el))
                            : (n.addEventListener("resize", r), n.addEventListener("orientationchange", s));
                    }),
                        e("destroy", () => {
                            i && i.unobserve && a.el && (i.unobserve(a.el), (i = null)), n.removeEventListener("resize", r), n.removeEventListener("orientationchange", s);
                        });
                },
                function ({ swiper: e, extendParams: t, on: n, emit: s }) {
                    const a = [],
                        r = I(),
                        i = (e, t = {}) => {
                            const n = r.MutationObserver || r.WebkitMutationObserver,
                                i = new n((e) => {
                                    var t;
                                    1 !== e.length
                                        ? ((t = function () {
                                              s("observerUpdate", e[0]);
                                          }),
                                          r.requestAnimationFrame ? r.requestAnimationFrame(t) : r.setTimeout(t, 0))
                                        : s("observerUpdate", e[0]);
                                });
                            i.observe(e, { attributes: void 0 === t.attributes || t.attributes, childList: void 0 === t.childList || t.childList, characterData: void 0 === t.characterData || t.characterData }), a.push(i);
                        };
                    t({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
                        n("init", () => {
                            if (e.params.observer) {
                                if (e.params.observeParents) {
                                    var t = e.$el.parents();
                                    for (let e = 0; e < t.length; e += 1) i(t[e]);
                                }
                                i(e.$el[0], { childList: e.params.observeSlideChildren }), i(e.$wrapperEl[0], { attributes: !1 });
                            }
                        }),
                        n("destroy", () => {
                            a.forEach((e) => {
                                e.disconnect();
                            }),
                                a.splice(0, a.length);
                        });
                },
            ]);
        var H = [
            function ({ swiper: x, extendParams: e, on: t }) {
                e({ virtual: { enabled: !1, slides: [], cache: !0, renderSlide: null, renderExternal: null, renderExternalUpdate: !0, addSlidesBefore: 0, addSlidesAfter: 0 } });
                let n;
                function w(e, t) {
                    const n = x.params.virtual;
                    if (n.cache && x.virtual.cache[t]) return x.virtual.cache[t];
                    const i = n.renderSlide ? A(n.renderSlide.call(x, e, t)) : A(`<div class="${x.params.slideClass}" data-swiper-slide-index="${t}">${e}</div>`);
                    return i.attr("data-swiper-slide-index") || i.attr("data-swiper-slide-index", t), n.cache && (x.virtual.cache[t] = i), i;
                }
                function r(t) {
                    var { slidesPerView: e, slidesPerGroup: n, centeredSlides: i } = x.params,
                        { addSlidesBefore: s, addSlidesAfter: a } = x.params.virtual;
                    const { from: r, to: o, slides: l, slidesGrid: c, offset: d } = x.virtual;
                    x.params.cssMode || x.updateActiveIndex();
                    var p = x.activeIndex || 0;
                    let u;
                    u = x.rtlTranslate ? "right" : x.isHorizontal() ? "left" : "top";
                    let f, h;
                    h = i ? ((f = Math.floor(e / 2) + n + a), Math.floor(e / 2) + n + s) : ((f = e + (n - 1) + a), n + s);
                    const m = Math.max((p || 0) - h, 0),
                        g = Math.min((p || 0) + f, l.length - 1);
                    p = (x.slidesGrid[m] || 0) - (x.slidesGrid[0] || 0);
                    function v() {
                        x.updateSlides(), x.updateProgress(), x.updateSlidesClasses(), x.lazy && x.params.lazy.enabled && x.lazy.load();
                    }
                    if ((Object.assign(x.virtual, { from: m, to: g, offset: p, slidesGrid: x.slidesGrid }), r === m && o === g && !t)) return x.slidesGrid !== c && p !== d && x.slides.css(u, `${p}px`), void x.updateProgress();
                    if (x.params.virtual.renderExternal)
                        return (
                            x.params.virtual.renderExternal.call(x, {
                                offset: p,
                                from: m,
                                to: g,
                                slides: (function () {
                                    const t = [];
                                    for (let e = m; e <= g; e += 1) t.push(l[e]);
                                    return t;
                                })(),
                            }),
                            void (x.params.virtual.renderExternalUpdate && v())
                        );
                    const b = [],
                        y = [];
                    if (t) x.$wrapperEl.find(`.${x.params.slideClass}`).remove();
                    else for (let e = r; e <= o; e += 1) (e < m || e > g) && x.$wrapperEl.find(`.${x.params.slideClass}[data-swiper-slide-index="${e}"]`).remove();
                    for (let e = 0; e < l.length; e += 1) e >= m && e <= g && (void 0 === o || t ? y.push(e) : (e > o && y.push(e), e < r && b.push(e)));
                    y.forEach((e) => {
                        x.$wrapperEl.append(w(l[e], e));
                    }),
                        b
                            .sort((e, t) => t - e)
                            .forEach((e) => {
                                x.$wrapperEl.prepend(w(l[e], e));
                            }),
                        x.$wrapperEl.children(".swiper-slide").css(u, `${p}px`),
                        v();
                }
                (x.virtual = { cache: {}, from: void 0, to: void 0, slides: [], offset: 0, slidesGrid: [] }),
                    t("beforeInit", () => {
                        x.params.virtual.enabled &&
                            ((x.virtual.slides = x.params.virtual.slides),
                            x.classNames.push(`${x.params.containerModifierClass}virtual`),
                            (x.params.watchSlidesProgress = !0),
                            (x.originalParams.watchSlidesProgress = !0),
                            x.params.initialSlide || r());
                    }),
                    t("setTranslate", () => {
                        x.params.virtual.enabled &&
                            (x.params.cssMode && !x._immediateVirtual
                                ? (clearTimeout(n),
                                  (n = setTimeout(() => {
                                      r();
                                  }, 100)))
                                : r());
                    }),
                    t("init update resize", () => {
                        x.params.virtual.enabled && x.params.cssMode && F(x.wrapperEl, "--swiper-virtual-size", `${x.virtualSize}px`);
                    }),
                    Object.assign(x.virtual, {
                        appendSlide: function (t) {
                            if ("object" == typeof t && "length" in t) for (let e = 0; e < t.length; e += 1) t[e] && x.virtual.slides.push(t[e]);
                            else x.virtual.slides.push(t);
                            r(!0);
                        },
                        prependSlide: function (t) {
                            var e = x.activeIndex;
                            let n = e + 1,
                                i = 1;
                            if (Array.isArray(t)) {
                                for (let e = 0; e < t.length; e += 1) t[e] && x.virtual.slides.unshift(t[e]);
                                (n = e + t.length), (i = t.length);
                            } else x.virtual.slides.unshift(t);
                            if (x.params.virtual.cache) {
                                const s = x.virtual.cache,
                                    a = {};
                                Object.keys(s).forEach((e) => {
                                    const t = s[e];
                                    var n = t.attr("data-swiper-slide-index");
                                    n && t.attr("data-swiper-slide-index", parseInt(n, 10) + i), (a[parseInt(e, 10) + i] = t);
                                }),
                                    (x.virtual.cache = a);
                            }
                            r(!0), x.slideTo(n, 0);
                        },
                        removeSlide: function (n) {
                            if (null != n) {
                                let t = x.activeIndex;
                                if (Array.isArray(n)) for (let e = n.length - 1; 0 <= e; --e) x.virtual.slides.splice(n[e], 1), x.params.virtual.cache && delete x.virtual.cache[n[e]], n[e] < t && --t, (t = Math.max(t, 0));
                                else x.virtual.slides.splice(n, 1), x.params.virtual.cache && delete x.virtual.cache[n], n < t && --t, (t = Math.max(t, 0));
                                r(!0), x.slideTo(t, 0);
                            }
                        },
                        removeAllSlides: function () {
                            (x.virtual.slides = []), x.params.virtual.cache && (x.virtual.cache = {}), r(!0), x.slideTo(0, 0);
                        },
                        update: r,
                    });
            },
            function ({ swiper: g, extendParams: e, on: t, emit: v }) {
                const b = C(),
                    y = I();
                function n(n) {
                    if (g.enabled) {
                        var i = g["rtlTranslate"];
                        let e = n;
                        e.originalEvent && (e = e.originalEvent);
                        var t = e.keyCode || e.charCode,
                            s = g.params.keyboard.pageUpDown,
                            a = s && 33 === t,
                            r = s && 34 === t,
                            o = 37 === t,
                            l = 39 === t,
                            c = 38 === t,
                            d = 40 === t;
                        if (!g.allowSlideNext && ((g.isHorizontal() && l) || (g.isVertical() && d) || r)) return !1;
                        if (!g.allowSlidePrev && ((g.isHorizontal() && o) || (g.isVertical() && c) || a)) return !1;
                        if (
                            !(
                                e.shiftKey ||
                                e.altKey ||
                                e.ctrlKey ||
                                e.metaKey ||
                                (b.activeElement && b.activeElement.nodeName && ("input" === b.activeElement.nodeName.toLowerCase() || "textarea" === b.activeElement.nodeName.toLowerCase()))
                            )
                        ) {
                            if (g.params.keyboard.onlyInViewport && (a || r || o || l || c || d)) {
                                let t = !1;
                                if (0 < g.$el.parents(`.${g.params.slideClass}`).length && 0 === g.$el.parents(`.${g.params.slideActiveClass}`).length) return;
                                var n = g.$el,
                                    s = n[0].clientWidth,
                                    n = n[0].clientHeight,
                                    p = y.innerWidth,
                                    u = y.innerHeight;
                                const m = g.$el.offset();
                                i && (m.left -= g.$el[0].scrollLeft);
                                var f = [
                                    [m.left, m.top],
                                    [m.left + s, m.top],
                                    [m.left, m.top + n],
                                    [m.left + s, m.top + n],
                                ];
                                for (let e = 0; e < f.length; e += 1) {
                                    var h = f[e];
                                    0 <= h[0] && h[0] <= p && 0 <= h[1] && h[1] <= u && ((0 === h[0] && 0 === h[1]) || (t = !0));
                                }
                                if (!t) return;
                            }
                            g.isHorizontal()
                                ? ((a || r || o || l) && (e.preventDefault ? e.preventDefault() : (e.returnValue = !1)), (((r || l) && !i) || ((a || o) && i)) && g.slideNext(), (((a || o) && !i) || ((r || l) && i)) && g.slidePrev())
                                : ((a || r || c || d) && (e.preventDefault ? e.preventDefault() : (e.returnValue = !1)), (r || d) && g.slideNext(), (a || c) && g.slidePrev()),
                                v("keyPress", t);
                        }
                    }
                }
                function i() {
                    g.keyboard.enabled || (A(b).on("keydown", n), (g.keyboard.enabled = !0));
                }
                function s() {
                    g.keyboard.enabled && (A(b).off("keydown", n), (g.keyboard.enabled = !1));
                }
                e({ keyboard: { enabled: !(g.keyboard = { enabled: !1 }), onlyInViewport: !0, pageUpDown: !0 } }),
                    t("init", () => {
                        g.params.keyboard.enabled && i();
                    }),
                    t("destroy", () => {
                        g.keyboard.enabled && s();
                    }),
                    Object.assign(g.keyboard, { enable: i, disable: s });
            },
            function ({ swiper: p, extendParams: e, on: t, emit: u }) {
                const n = I();
                e({ mousewheel: { enabled: !1, releaseOnEdges: !1, invert: !1, forceToAxis: !1, sensitivity: 1, eventsTarget: "container", thresholdDelta: null, thresholdTime: null } }), (p.mousewheel = { enabled: !1 });
                let f,
                    i = v(),
                    h;
                const m = [];
                function s() {
                    p.enabled && (p.mouseEntered = !0);
                }
                function a() {
                    p.enabled && (p.mouseEntered = !1);
                }
                function g(e) {
                    if (!((p.params.mousewheel.thresholdDelta && e.delta < p.params.mousewheel.thresholdDelta) || (p.params.mousewheel.thresholdTime && v() - i < p.params.mousewheel.thresholdTime))) {
                        if (6 <= e.delta && v() - i < 60) return 1;
                        e.direction < 0 ? (p.isEnd && !p.params.loop) || p.animating || (p.slideNext(), u("scroll", e.raw)) : (p.isBeginning && !p.params.loop) || p.animating || (p.slidePrev(), u("scroll", e.raw)),
                            (i = new n.Date().getTime());
                    }
                }
                function r(i) {
                    let s = i;
                    if (p.enabled) {
                        var a = p.params.mousewheel;
                        p.params.cssMode && s.preventDefault();
                        let e = p.$el;
                        if (("container" !== p.params.mousewheel.eventsTarget && (e = A(p.params.mousewheel.eventsTarget)), !p.mouseEntered && !e[0].contains(s.target) && !a.releaseOnEdges)) return !0;
                        s.originalEvent && (s = s.originalEvent);
                        let t = 0;
                        var r = p.rtlTranslate ? -1 : 1,
                            o = (function (e) {
                                let t = 0,
                                    n = 0,
                                    i = 0,
                                    s = 0;
                                return (
                                    "detail" in e && (n = e.detail),
                                    "wheelDelta" in e && (n = -e.wheelDelta / 120),
                                    "wheelDeltaY" in e && (n = -e.wheelDeltaY / 120),
                                    "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120),
                                    "axis" in e && e.axis === e.HORIZONTAL_AXIS && ((t = n), (n = 0)),
                                    (i = 10 * t),
                                    (s = 10 * n),
                                    "deltaY" in e && (s = e.deltaY),
                                    "deltaX" in e && (i = e.deltaX),
                                    e.shiftKey && !i && ((i = s), (s = 0)),
                                    (i || s) && e.deltaMode && (1 === e.deltaMode ? ((i *= 40), (s *= 40)) : ((i *= 800), (s *= 800))),
                                    i && !t && (t = i < 1 ? -1 : 1),
                                    s && !n && (n = s < 1 ? -1 : 1),
                                    { spinX: t, spinY: n, pixelX: i, pixelY: s }
                                );
                            })(s);
                        if (a.forceToAxis)
                            if (p.isHorizontal()) {
                                if (!(Math.abs(o.pixelX) > Math.abs(o.pixelY))) return !0;
                                t = -o.pixelX * r;
                            } else {
                                if (!(Math.abs(o.pixelY) > Math.abs(o.pixelX))) return !0;
                                t = -o.pixelY;
                            }
                        else t = Math.abs(o.pixelX) > Math.abs(o.pixelY) ? -o.pixelX * r : -o.pixelY;
                        if (0 === t) return !0;
                        a.invert && (t = -t);
                        let n = p.getTranslate() + t * a.sensitivity;
                        if (
                            (n >= p.minTranslate() && (n = p.minTranslate()),
                            n <= p.maxTranslate() && (n = p.maxTranslate()),
                            (!!p.params.loop || !(n === p.minTranslate() || n === p.maxTranslate())) && p.params.nested && s.stopPropagation(),
                            p.params.freeMode && p.params.freeMode.enabled)
                        ) {
                            const c = { time: v(), delta: Math.abs(t), direction: Math.sign(t) };
                            var l = h && c.time < h.time + 500 && c.delta <= h.delta && c.direction === h.direction;
                            if (!l) {
                                (h = void 0), p.params.loop && p.loopFix();
                                let e = p.getTranslate() + t * a.sensitivity;
                                (o = p.isBeginning), (a = p.isEnd);
                                if (
                                    (e >= p.minTranslate() && (e = p.minTranslate()),
                                    e <= p.maxTranslate() && (e = p.maxTranslate()),
                                    p.setTransition(0),
                                    p.setTranslate(e),
                                    p.updateProgress(),
                                    p.updateActiveIndex(),
                                    p.updateSlidesClasses(),
                                    ((!o && p.isBeginning) || (!a && p.isEnd)) && p.updateSlidesClasses(),
                                    p.params.freeMode.sticky)
                                ) {
                                    clearTimeout(f), (f = void 0), 15 <= m.length && m.shift();
                                    (o = m.length ? m[m.length - 1] : void 0), (a = m[0]);
                                    if ((m.push(c), o && (c.delta > o.delta || c.direction !== o.direction))) m.splice(0);
                                    else if (15 <= m.length && c.time - a.time < 500 && 1 <= a.delta - c.delta && c.delta <= 6) {
                                        const d = 0 < t ? 0.8 : 0.2;
                                        (h = c),
                                            m.splice(0),
                                            (f = T(() => {
                                                p.slideToClosest(p.params.speed, !0, void 0, d);
                                            }, 0));
                                    }
                                    f =
                                        f ||
                                        T(() => {
                                            (h = c), m.splice(0), p.slideToClosest(p.params.speed, !0, void 0, 0.5);
                                        }, 500);
                                }
                                if ((l || u("scroll", s), p.params.autoplay && p.params.autoplayDisableOnInteraction && p.autoplay.stop(), e === p.minTranslate() || e === p.maxTranslate())) return !0;
                            }
                        } else {
                            l = { time: v(), delta: Math.abs(t), direction: Math.sign(t), raw: i };
                            2 <= m.length && m.shift();
                            i = m.length ? m[m.length - 1] : void 0;
                            if (
                                (m.push(l),
                                (!i || l.direction !== i.direction || l.delta > i.delta || l.time > i.time + 150) && g(l),
                                (function (e) {
                                    var t = p.params.mousewheel;
                                    if (e.direction < 0) {
                                        if (p.isEnd && !p.params.loop && t.releaseOnEdges) return 1;
                                    } else if (p.isBeginning && !p.params.loop && t.releaseOnEdges) return 1;
                                })(l))
                            )
                                return !0;
                        }
                        return s.preventDefault ? s.preventDefault() : (s.returnValue = !1), !1;
                    }
                }
                function o(e) {
                    let t = p.$el;
                    "container" !== p.params.mousewheel.eventsTarget && (t = A(p.params.mousewheel.eventsTarget)), t[e]("mouseenter", s), t[e]("mouseleave", a), t[e]("wheel", r);
                }
                function l() {
                    return p.params.cssMode ? (p.wrapperEl.removeEventListener("wheel", r), !0) : !p.mousewheel.enabled && (o("on"), (p.mousewheel.enabled = !0));
                }
                function c() {
                    return p.params.cssMode ? (p.wrapperEl.addEventListener(event, r), !0) : !!p.mousewheel.enabled && (o("off"), !(p.mousewheel.enabled = !1));
                }
                t("init", () => {
                    !p.params.mousewheel.enabled && p.params.cssMode && c(), p.params.mousewheel.enabled && l();
                }),
                    t("destroy", () => {
                        p.params.cssMode && l(), p.mousewheel.enabled && c();
                    }),
                    Object.assign(p.mousewheel, { enable: l, disable: c });
            },
            function ({ swiper: s, extendParams: e, on: t, emit: a }) {
                function i(e) {
                    let t;
                    return e && ((t = A(e)), s.params.uniqueNavElements && "string" == typeof e && 1 < t.length && 1 === s.$el.find(e).length && (t = s.$el.find(e))), t;
                }
                function n(e, t) {
                    var n = s.params.navigation;
                    e &&
                        0 < e.length &&
                        (e[t ? "addClass" : "removeClass"](n.disabledClass), e[0] && "BUTTON" === e[0].tagName && (e[0].disabled = t), s.params.watchOverflow && s.enabled && e[s.isLocked ? "addClass" : "removeClass"](n.lockClass));
                }
                function r() {
                    var e, t;
                    s.params.loop || (({ $nextEl: e, $prevEl: t } = s.navigation), n(t, s.isBeginning), n(e, s.isEnd));
                }
                function o(e) {
                    e.preventDefault(), (s.isBeginning && !s.params.loop) || s.slidePrev();
                }
                function l(e) {
                    e.preventDefault(), (s.isEnd && !s.params.loop) || s.slideNext();
                }
                function c() {
                    var e = s.params.navigation;
                    if (((s.params.navigation = O(s, s.originalParams.navigation, s.params.navigation, { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" })), e.nextEl || e.prevEl)) {
                        const t = i(e.nextEl),
                            n = i(e.prevEl);
                        t && 0 < t.length && t.on("click", l),
                            n && 0 < n.length && n.on("click", o),
                            Object.assign(s.navigation, { $nextEl: t, nextEl: t && t[0], $prevEl: n, prevEl: n && n[0] }),
                            s.enabled || (t && t.addClass(e.lockClass), n && n.addClass(e.lockClass));
                    }
                }
                function d() {
                    const { $nextEl: e, $prevEl: t } = s.navigation;
                    e && e.length && (e.off("click", l), e.removeClass(s.params.navigation.disabledClass)), t && t.length && (t.off("click", o), t.removeClass(s.params.navigation.disabledClass));
                }
                e({ navigation: { nextEl: null, prevEl: null, hideOnClick: !1, disabledClass: "swiper-button-disabled", hiddenClass: "swiper-button-hidden", lockClass: "swiper-button-lock" } }),
                    (s.navigation = { nextEl: null, $nextEl: null, prevEl: null, $prevEl: null }),
                    t("init", () => {
                        c(), r();
                    }),
                    t("toEdge fromEdge lock unlock", () => {
                        r();
                    }),
                    t("destroy", () => {
                        d();
                    }),
                    t("enable disable", () => {
                        const { $nextEl: e, $prevEl: t } = s.navigation;
                        e && e[s.enabled ? "removeClass" : "addClass"](s.params.navigation.lockClass), t && t[s.enabled ? "removeClass" : "addClass"](s.params.navigation.lockClass);
                    }),
                    t("click", (e, t) => {
                        const { $nextEl: n, $prevEl: i } = s.navigation;
                        t = t.target;
                        if (s.params.navigation.hideOnClick && !A(t).is(i) && !A(t).is(n) && (!(s.pagination && s.params.pagination && s.params.pagination.clickable) || (s.pagination.el !== t && !s.pagination.el.contains(t)))) {
                            let e;
                            n ? (e = n.hasClass(s.params.navigation.hiddenClass)) : i && (e = i.hasClass(s.params.navigation.hiddenClass)),
                                !0 === e ? a("navigationShow") : a("navigationHide"),
                                n && n.toggleClass(s.params.navigation.hiddenClass),
                                i && i.toggleClass(s.params.navigation.hiddenClass);
                        }
                    }),
                    Object.assign(s.navigation, { update: r, init: c, destroy: d });
            },
            function ({ swiper: f, extendParams: e, on: t, emit: h }) {
                var n = "swiper-pagination";
                e({
                    pagination: {
                        el: null,
                        bulletElement: "span",
                        clickable: !1,
                        hideOnClick: !1,
                        renderBullet: null,
                        renderProgressbar: null,
                        renderFraction: null,
                        renderCustom: null,
                        progressbarOpposite: !1,
                        type: "bullets",
                        dynamicBullets: !1,
                        dynamicMainBullets: 1,
                        formatFractionCurrent: (e) => e,
                        formatFractionTotal: (e) => e,
                        bulletClass: `${n}-bullet`,
                        bulletActiveClass: `${n}-bullet-active`,
                        modifierClass: `${n}-`,
                        currentClass: `${n}-current`,
                        totalClass: `${n}-total`,
                        hiddenClass: `${n}-hidden`,
                        progressbarFillClass: `${n}-progressbar-fill`,
                        progressbarOppositeClass: `${n}-progressbar-opposite`,
                        clickableClass: `${n}-clickable`,
                        lockClass: `${n}-lock`,
                        horizontalClass: `${n}-horizontal`,
                        verticalClass: `${n}-vertical`,
                    },
                }),
                    (f.pagination = { el: null, $el: null, bullets: [] });
                let m,
                    g = 0;
                function v() {
                    return !f.params.pagination.el || !f.pagination.el || !f.pagination.$el || 0 === f.pagination.$el.length;
                }
                function b(e, t) {
                    var n = f.params.pagination["bulletActiveClass"];
                    e[t]().addClass(`${n}-${t}`)[t]().addClass(`${n}-${t}-${t}`);
                }
                function i() {
                    var t = f.rtl;
                    const a = f.params.pagination;
                    if (!v()) {
                        var r = (f.virtual && f.params.virtual.enabled ? f.virtual : f).slides.length;
                        const d = f.pagination.$el;
                        let s;
                        var i = f.params.loop ? Math.ceil((r - 2 * f.loopedSlides) / f.params.slidesPerGroup) : f.snapGrid.length;
                        if (
                            (f.params.loop
                                ? ((s = Math.ceil((f.activeIndex - f.loopedSlides) / f.params.slidesPerGroup)),
                                  s > r - 1 - 2 * f.loopedSlides && (s -= r - 2 * f.loopedSlides),
                                  s > i - 1 && (s -= i),
                                  s < 0 && "bullets" !== f.params.paginationType && (s = i + s))
                                : (s = void 0 !== f.snapIndex ? f.snapIndex : f.activeIndex || 0),
                            "bullets" === a.type && f.pagination.bullets && 0 < f.pagination.bullets.length)
                        ) {
                            const p = f.pagination.bullets;
                            let n, i, e;
                            if (
                                (a.dynamicBullets &&
                                    ((m = p.eq(0)[f.isHorizontal() ? "outerWidth" : "outerHeight"](!0)),
                                    d.css(f.isHorizontal() ? "width" : "height", `${m * (a.dynamicMainBullets + 4)}px`),
                                    1 < a.dynamicMainBullets && void 0 !== f.previousIndex && ((g += s - f.previousIndex), g > a.dynamicMainBullets - 1 ? (g = a.dynamicMainBullets - 1) : g < 0 && (g = 0)),
                                    (n = s - g),
                                    (i = n + (Math.min(p.length, a.dynamicMainBullets) - 1)),
                                    (e = (i + n) / 2)),
                                p.removeClass(["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map((e) => `${a.bulletActiveClass}${e}`).join(" ")),
                                1 < d.length)
                            )
                                p.each((e) => {
                                    const t = A(e);
                                    e = t.index();
                                    e === s && t.addClass(a.bulletActiveClass), a.dynamicBullets && (e >= n && e <= i && t.addClass(`${a.bulletActiveClass}-main`), e === n && b(t, "prev"), e === i && b(t, "next"));
                                });
                            else {
                                const u = p.eq(s);
                                var o = u.index();
                                if ((u.addClass(a.bulletActiveClass), a.dynamicBullets)) {
                                    var l = p.eq(n),
                                        r = p.eq(i);
                                    for (let e = n; e <= i; e += 1) p.eq(e).addClass(`${a.bulletActiveClass}-main`);
                                    if (f.params.loop)
                                        if (o >= p.length - a.dynamicMainBullets) {
                                            for (let e = a.dynamicMainBullets; 0 <= e; --e) p.eq(p.length - e).addClass(`${a.bulletActiveClass}-main`);
                                            p.eq(p.length - a.dynamicMainBullets - 1).addClass(`${a.bulletActiveClass}-prev`);
                                        } else b(l, "prev"), b(r, "next");
                                    else b(l, "prev"), b(r, "next");
                                }
                            }
                            a.dynamicBullets && ((c = Math.min(p.length, a.dynamicMainBullets + 4)), (c = (m * c - m) / 2 - e * m), (t = t ? "right" : "left"), p.css(f.isHorizontal() ? t : "top", `${c}px`));
                        }
                        if (("fraction" === a.type && (d.find(D(a.currentClass)).text(a.formatFractionCurrent(s + 1)), d.find(D(a.totalClass)).text(a.formatFractionTotal(i))), "progressbar" === a.type)) {
                            let e;
                            e = a.progressbarOpposite ? (f.isHorizontal() ? "vertical" : "horizontal") : f.isHorizontal() ? "horizontal" : "vertical";
                            var c = (s + 1) / i;
                            let t = 1,
                                n = 1;
                            "horizontal" === e ? (t = c) : (n = c), d.find(D(a.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${t}) scaleY(${n})`).transition(f.params.speed);
                        }
                        "custom" === a.type && a.renderCustom ? (d.html(a.renderCustom(f, s + 1, i)), h("paginationRender", d[0])) : h("paginationUpdate", d[0]),
                            f.params.watchOverflow && f.enabled && d[f.isLocked ? "addClass" : "removeClass"](a.lockClass);
                    }
                }
                function s() {
                    const i = f.params.pagination;
                    if (!v()) {
                        var e = (f.virtual && f.params.virtual.enabled ? f.virtual : f).slides.length;
                        const s = f.pagination.$el;
                        let n = "";
                        if ("bullets" === i.type) {
                            let t = f.params.loop ? Math.ceil((e - 2 * f.loopedSlides) / f.params.slidesPerGroup) : f.snapGrid.length;
                            f.params.freeMode && f.params.freeMode.enabled && !f.params.loop && t > e && (t = e);
                            for (let e = 0; e < t; e += 1) i.renderBullet ? (n += i.renderBullet.call(f, e, i.bulletClass)) : (n += `<${i.bulletElement} class="${i.bulletClass}"></${i.bulletElement}>`);
                            s.html(n), (f.pagination.bullets = s.find(D(i.bulletClass)));
                        }
                        "fraction" === i.type && ((n = i.renderFraction ? i.renderFraction.call(f, i.currentClass, i.totalClass) : `<span class="${i.currentClass}"></span>` + " / " + `<span class="${i.totalClass}"></span>`), s.html(n)),
                            "progressbar" === i.type && ((n = i.renderProgressbar ? i.renderProgressbar.call(f, i.progressbarFillClass) : `<span class="${i.progressbarFillClass}"></span>`), s.html(n)),
                            "custom" !== i.type && h("paginationRender", f.pagination.$el[0]);
                    }
                }
                function a() {
                    f.params.pagination = O(f, f.originalParams.pagination, f.params.pagination, { el: "swiper-pagination" });
                    const t = f.params.pagination;
                    if (t.el) {
                        let e = A(t.el);
                        0 !== e.length &&
                            (f.params.uniqueNavElements && "string" == typeof t.el && 1 < e.length && ((e = f.$el.find(t.el)), 1 < e.length && (e = e.filter((e) => A(e).parents(".swiper")[0] === f.el))),
                            "bullets" === t.type && t.clickable && e.addClass(t.clickableClass),
                            e.addClass(t.modifierClass + t.type),
                            e.addClass(t.modifierClass + f.params.direction),
                            "bullets" === t.type && t.dynamicBullets && (e.addClass(`${t.modifierClass}${t.type}-dynamic`), (g = 0), t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)),
                            "progressbar" === t.type && t.progressbarOpposite && e.addClass(t.progressbarOppositeClass),
                            t.clickable &&
                                e.on("click", D(t.bulletClass), function (e) {
                                    e.preventDefault();
                                    let t = A(this).index() * f.params.slidesPerGroup;
                                    f.params.loop && (t += f.loopedSlides), f.slideTo(t);
                                }),
                            Object.assign(f.pagination, { $el: e, el: e[0] }),
                            f.enabled || e.addClass(t.lockClass));
                    }
                }
                function r() {
                    var e = f.params.pagination;
                    if (!v()) {
                        const t = f.pagination.$el;
                        t.removeClass(e.hiddenClass),
                            t.removeClass(e.modifierClass + e.type),
                            t.removeClass(e.modifierClass + f.params.direction),
                            f.pagination.bullets && f.pagination.bullets.removeClass && f.pagination.bullets.removeClass(e.bulletActiveClass),
                            e.clickable && t.off("click", D(e.bulletClass));
                    }
                }
                t("init", () => {
                    a(), s(), i();
                }),
                    t("activeIndexChange", () => {
                        (f.params.loop || void 0 === f.snapIndex) && i();
                    }),
                    t("snapIndexChange", () => {
                        f.params.loop || i();
                    }),
                    t("slidesLengthChange", () => {
                        f.params.loop && (s(), i());
                    }),
                    t("snapGridLengthChange", () => {
                        f.params.loop || (s(), i());
                    }),
                    t("destroy", () => {
                        r();
                    }),
                    t("enable disable", () => {
                        const e = f.pagination["$el"];
                        e && e[f.enabled ? "removeClass" : "addClass"](f.params.pagination.lockClass);
                    }),
                    t("lock unlock", () => {
                        i();
                    }),
                    t("click", (e, t) => {
                        t = t.target;
                        const n = f.pagination["$el"];
                        f.params.pagination.el &&
                            f.params.pagination.hideOnClick &&
                            0 < n.length &&
                            !A(t).hasClass(f.params.pagination.bulletClass) &&
                            ((f.navigation && ((f.navigation.nextEl && t === f.navigation.nextEl) || (f.navigation.prevEl && t === f.navigation.prevEl))) ||
                                ((t = n.hasClass(f.params.pagination.hiddenClass)), h(!0 === t ? "paginationShow" : "paginationHide"), n.toggleClass(f.params.pagination.hiddenClass)));
                    }),
                    Object.assign(f.pagination, { render: s, update: i, init: a, destroy: r });
            },
            function ({ swiper: o, extendParams: e, on: t, emit: r }) {
                const l = C();
                let c = !1,
                    d = null,
                    p = null,
                    u,
                    f,
                    h,
                    i;
                function n() {
                    if (o.params.scrollbar.el && o.scrollbar.el) {
                        var { scrollbar: n, rtlTranslate: i, progress: s } = o;
                        const { $dragEl: a, $el: r } = n;
                        n = o.params.scrollbar;
                        let e = f,
                            t = (h - f) * s;
                        i ? ((t = -t), 0 < t ? ((e = f - t), (t = 0)) : -t + f > h && (e = h + t)) : t < 0 ? ((e = f + t), (t = 0)) : t + f > h && (e = h - t),
                            o.isHorizontal() ? (a.transform(`translate3d(${t}px, 0, 0)`), (a[0].style.width = `${e}px`)) : (a.transform(`translate3d(0px, ${t}px, 0)`), (a[0].style.height = `${e}px`)),
                            n.hide &&
                                (clearTimeout(d),
                                (r[0].style.opacity = 1),
                                (d = setTimeout(() => {
                                    (r[0].style.opacity = 0), r.transition(400);
                                }, 1e3)));
                    }
                }
                function s() {
                    if (o.params.scrollbar.el && o.scrollbar.el) {
                        const e = o["scrollbar"],
                            { $dragEl: t, $el: n } = e;
                        (t[0].style.width = ""),
                            (t[0].style.height = ""),
                            (h = o.isHorizontal() ? n[0].offsetWidth : n[0].offsetHeight),
                            (i = o.size / (o.virtualSize + o.params.slidesOffsetBefore - (o.params.centeredSlides ? o.snapGrid[0] : 0))),
                            (f = "auto" === o.params.scrollbar.dragSize ? h * i : parseInt(o.params.scrollbar.dragSize, 10)),
                            o.isHorizontal() ? (t[0].style.width = `${f}px`) : (t[0].style.height = `${f}px`),
                            1 <= i ? (n[0].style.display = "none") : (n[0].style.display = ""),
                            o.params.scrollbar.hide && (n[0].style.opacity = 0),
                            o.params.watchOverflow && o.enabled && e.$el[o.isLocked ? "addClass" : "removeClass"](o.params.scrollbar.lockClass);
                    }
                }
                function m(e) {
                    return o.isHorizontal() ? ("touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0] : e).clientX : ("touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0] : e).clientY;
                }
                function g(e) {
                    var { scrollbar: t, rtlTranslate: n } = o;
                    const i = t["$el"];
                    let s;
                    (s = (m(e) - i.offset()[o.isHorizontal() ? "left" : "top"] - (null !== u ? u : f / 2)) / (h - f)), (s = Math.max(Math.min(s, 1), 0)), n && (s = 1 - s);
                    n = o.minTranslate() + (o.maxTranslate() - o.minTranslate()) * s;
                    o.updateProgress(n), o.setTranslate(n), o.updateActiveIndex(), o.updateSlidesClasses();
                }
                function v(e) {
                    var t = o.params.scrollbar;
                    const { scrollbar: n, $wrapperEl: i } = o,
                        { $el: s, $dragEl: a } = n;
                    (c = !0),
                        (u = e.target === a[0] || e.target === a ? m(e) - e.target.getBoundingClientRect()[o.isHorizontal() ? "left" : "top"] : null),
                        e.preventDefault(),
                        e.stopPropagation(),
                        i.transition(100),
                        a.transition(100),
                        g(e),
                        clearTimeout(p),
                        s.transition(0),
                        t.hide && s.css("opacity", 1),
                        o.params.cssMode && o.$wrapperEl.css("scroll-snap-type", "none"),
                        r("scrollbarDragStart", e);
                }
                function b(e) {
                    const { scrollbar: t, $wrapperEl: n } = o,
                        { $el: i, $dragEl: s } = t;
                    c && (e.preventDefault ? e.preventDefault() : (e.returnValue = !1), g(e), n.transition(0), i.transition(0), s.transition(0), r("scrollbarDragMove", e));
                }
                function y(e) {
                    var t = o.params.scrollbar;
                    const { scrollbar: n, $wrapperEl: i } = o,
                        s = n["$el"];
                    c &&
                        ((c = !1),
                        o.params.cssMode && (o.$wrapperEl.css("scroll-snap-type", ""), i.transition("")),
                        t.hide &&
                            (clearTimeout(p),
                            (p = T(() => {
                                s.css("opacity", 0), s.transition(400);
                            }, 1e3))),
                        r("scrollbarDragEnd", e),
                        t.snapOnRelease && o.slideToClosest());
                }
                function a(e) {
                    var { scrollbar: t, touchEventsTouch: n, touchEventsDesktop: i, params: s, support: a } = o;
                    const r = t.$el[0];
                    (t = !(!a.passiveListener || !s.passiveListeners) && { passive: !1, capture: !1 }), (s = !(!a.passiveListener || !s.passiveListeners) && { passive: !0, capture: !1 });
                    r && ((e = "on" === e ? "addEventListener" : "removeEventListener"), a.touch ? (r[e](n.start, v, t), r[e](n.move, b, t), r[e](n.end, y, s)) : (r[e](i.start, v, t), l[e](i.move, b, t), l[e](i.end, y, s)));
                }
                function x() {
                    const { scrollbar: n, $el: i } = o;
                    o.params.scrollbar = O(o, o.originalParams.scrollbar, o.params.scrollbar, { el: "swiper-scrollbar" });
                    var s = o.params.scrollbar;
                    if (s.el) {
                        let e = A(s.el);
                        o.params.uniqueNavElements && "string" == typeof s.el && 1 < e.length && 1 === i.find(s.el).length && (e = i.find(s.el));
                        let t = e.find(`.${o.params.scrollbar.dragClass}`);
                        0 === t.length && ((t = A(`<div class="${o.params.scrollbar.dragClass}"></div>`)), e.append(t)),
                            Object.assign(n, { $el: e, el: e[0], $dragEl: t, dragEl: t[0] }),
                            s.draggable && o.params.scrollbar.el && a("on"),
                            e && e[o.enabled ? "removeClass" : "addClass"](o.params.scrollbar.lockClass);
                    }
                }
                function w() {
                    o.params.scrollbar.el && a("off");
                }
                e({ scrollbar: { el: null, dragSize: "auto", hide: !1, draggable: !1, snapOnRelease: !0, lockClass: "swiper-scrollbar-lock", dragClass: "swiper-scrollbar-drag" } }),
                    (o.scrollbar = { el: null, dragEl: null, $el: null, $dragEl: null }),
                    t("init", () => {
                        x(), s(), n();
                    }),
                    t("update resize observerUpdate lock unlock", () => {
                        s();
                    }),
                    t("setTranslate", () => {
                        n();
                    }),
                    t("setTransition", (e, t) => {
                        (t = t), o.params.scrollbar.el && o.scrollbar.el && o.scrollbar.$dragEl.transition(t);
                    }),
                    t("enable disable", () => {
                        const e = o.scrollbar["$el"];
                        e && e[o.enabled ? "removeClass" : "addClass"](o.params.scrollbar.lockClass);
                    }),
                    t("destroy", () => {
                        w();
                    }),
                    Object.assign(o.scrollbar, { updateSize: s, setTranslate: n, init: x, destroy: w });
            },
            function ({ swiper: l, extendParams: e, on: t }) {
                e({ parallax: { enabled: !1 } });
                const a = (e, t) => {
                        var n = l["rtl"];
                        const i = A(e);
                        var s = n ? -1 : 1,
                            a = i.attr("data-swiper-parallax") || "0";
                        let r = i.attr("data-swiper-parallax-x"),
                            o = i.attr("data-swiper-parallax-y");
                        (e = i.attr("data-swiper-parallax-scale")), (n = i.attr("data-swiper-parallax-opacity"));
                        r || o ? ((r = r || "0"), (o = o || "0")) : l.isHorizontal() ? ((r = a), (o = "0")) : ((o = a), (r = "0")),
                            (r = 0 <= r.indexOf("%") ? `${parseInt(r, 10) * t * s}%` : `${r * t * s}px`),
                            (o = 0 <= o.indexOf("%") ? `${parseInt(o, 10) * t}%` : `${o * t}px`),
                            null != n && ((n = n - (n - 1) * (1 - Math.abs(t))), (i[0].style.opacity = n)),
                            null == e ? i.transform(`translate3d(${r}, ${o}, 0px)`) : ((t = e - (e - 1) * (1 - Math.abs(t))), i.transform(`translate3d(${r}, ${o}, 0px) scale(${t})`));
                    },
                    n = () => {
                        const { $el: e, slides: t, progress: i, snapGrid: s } = l;
                        e.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((e) => {
                            a(e, i);
                        }),
                            t.each((e, t) => {
                                let n = e.progress;
                                1 < l.params.slidesPerGroup && "auto" !== l.params.slidesPerView && (n += Math.ceil(t / 2) - i * (s.length - 1)),
                                    (n = Math.min(Math.max(n, -1), 1)),
                                    A(e)
                                        .find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]")
                                        .each((e) => {
                                            a(e, n);
                                        });
                            });
                    };
                t("beforeInit", () => {
                    l.params.parallax.enabled && ((l.params.watchSlidesProgress = !0), (l.originalParams.watchSlidesProgress = !0));
                }),
                    t("init", () => {
                        l.params.parallax.enabled && n();
                    }),
                    t("setTranslate", () => {
                        l.params.parallax.enabled && n();
                    }),
                    t("setTransition", (e, t) => {
                        l.params.parallax.enabled &&
                            ((i = l.params.speed) => {
                                const e = l["$el"];
                                e.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((e) => {
                                    const t = A(e);
                                    let n = parseInt(t.attr("data-swiper-parallax-duration"), 10) || i;
                                    0 === i && (n = 0), t.transition(n);
                                });
                            })(t);
                    });
            },
            function ({ swiper: p, extendParams: e, on: t, emit: i }) {
                const u = I();
                e({ zoom: { enabled: !1, maxRatio: 3, minRatio: 1, toggle: !0, containerClass: "swiper-zoom-container", zoomedSlideClass: "swiper-slide-zoomed" } }), (p.zoom = { enabled: !1 });
                let f = 1,
                    a = !1,
                    n,
                    r,
                    o;
                const h = { $slideEl: void 0, slideWidth: void 0, slideHeight: void 0, $imageEl: void 0, $imageWrapEl: void 0, maxRatio: 3 },
                    m = {
                        isTouched: void 0,
                        isMoved: void 0,
                        currentX: void 0,
                        currentY: void 0,
                        minX: void 0,
                        minY: void 0,
                        maxX: void 0,
                        maxY: void 0,
                        width: void 0,
                        height: void 0,
                        startX: void 0,
                        startY: void 0,
                        touchesStart: {},
                        touchesCurrent: {},
                    },
                    l = { x: void 0, y: void 0, prevPositionX: void 0, prevPositionY: void 0, prevTime: void 0 };
                let s = 1;
                function c(e) {
                    if (e.targetTouches.length < 2) return 1;
                    var t = e.targetTouches[0].pageX,
                        n = e.targetTouches[0].pageY,
                        i = e.targetTouches[1].pageX,
                        e = e.targetTouches[1].pageY;
                    return Math.sqrt((i - t) ** 2 + (e - n) ** 2);
                }
                function d(e) {
                    var t = p.support,
                        n = p.params.zoom;
                    if (((r = !1), (o = !1), !t.gestures)) {
                        if ("touchstart" !== e.type || ("touchstart" === e.type && e.targetTouches.length < 2)) return;
                        (r = !0), (h.scaleStart = c(e));
                    }
                    (h.$slideEl && h.$slideEl.length) ||
                    ((h.$slideEl = A(e.target).closest(`.${p.params.slideClass}`)),
                    0 === h.$slideEl.length && (h.$slideEl = p.slides.eq(p.activeIndex)),
                    (h.$imageEl = h.$slideEl.find(`.${n.containerClass}`).eq(0).find("img, svg, canvas, picture, .swiper-zoom-target")),
                    (h.$imageWrapEl = h.$imageEl.parent(`.${n.containerClass}`)),
                    (h.maxRatio = h.$imageWrapEl.attr("data-swiper-zoom") || n.maxRatio),
                    0 !== h.$imageWrapEl.length)
                        ? (h.$imageEl && h.$imageEl.transition(0), (a = !0))
                        : (h.$imageEl = void 0);
                }
                function g(e) {
                    var t = p.support,
                        n = p.params.zoom;
                    const i = p.zoom;
                    if (!t.gestures) {
                        if ("touchmove" !== e.type || ("touchmove" === e.type && e.targetTouches.length < 2)) return;
                        (o = !0), (h.scaleMove = c(e));
                    }
                    h.$imageEl && 0 !== h.$imageEl.length
                        ? (t.gestures ? (i.scale = e.scale * f) : (i.scale = (h.scaleMove / h.scaleStart) * f),
                          i.scale > h.maxRatio && (i.scale = h.maxRatio - 1 + (i.scale - h.maxRatio + 1) ** 0.5),
                          i.scale < n.minRatio && (i.scale = n.minRatio + 1 - (n.minRatio - i.scale + 1) ** 0.5),
                          h.$imageEl.transform(`translate3d(0,0,0) scale(${i.scale})`))
                        : "gesturechange" === e.type && d(e);
                }
                function v(e) {
                    var t = p.device,
                        n = p.support,
                        i = p.params.zoom;
                    const s = p.zoom;
                    if (!n.gestures) {
                        if (!r || !o) return;
                        if ("touchend" !== e.type || ("touchend" === e.type && e.changedTouches.length < 2 && !t.android)) return;
                        (r = !1), (o = !1);
                    }
                    h.$imageEl &&
                        0 !== h.$imageEl.length &&
                        ((s.scale = Math.max(Math.min(s.scale, h.maxRatio), i.minRatio)),
                        h.$imageEl.transition(p.params.speed).transform(`translate3d(0,0,0) scale(${s.scale})`),
                        (f = s.scale),
                        (a = !1),
                        1 === s.scale && (h.$slideEl = void 0));
                }
                function b(e) {
                    var t = p.zoom;
                    if (h.$imageEl && 0 !== h.$imageEl.length && ((p.allowClick = !1), m.isTouched && h.$slideEl)) {
                        m.isMoved ||
                            ((m.width = h.$imageEl[0].offsetWidth),
                            (m.height = h.$imageEl[0].offsetHeight),
                            (m.startX = L(h.$imageWrapEl[0], "x") || 0),
                            (m.startY = L(h.$imageWrapEl[0], "y") || 0),
                            (h.slideWidth = h.$slideEl[0].offsetWidth),
                            (h.slideHeight = h.$slideEl[0].offsetHeight),
                            h.$imageWrapEl.transition(0));
                        var n = m.width * t.scale,
                            t = m.height * t.scale;
                        if (!(n < h.slideWidth && t < h.slideHeight)) {
                            if (
                                ((m.minX = Math.min(h.slideWidth / 2 - n / 2, 0)),
                                (m.maxX = -m.minX),
                                (m.minY = Math.min(h.slideHeight / 2 - t / 2, 0)),
                                (m.maxY = -m.minY),
                                (m.touchesCurrent.x = ("touchmove" === e.type ? e.targetTouches[0] : e).pageX),
                                (m.touchesCurrent.y = ("touchmove" === e.type ? e.targetTouches[0] : e).pageY),
                                !m.isMoved && !a)
                            ) {
                                if (p.isHorizontal() && ((Math.floor(m.minX) === Math.floor(m.startX) && m.touchesCurrent.x < m.touchesStart.x) || (Math.floor(m.maxX) === Math.floor(m.startX) && m.touchesCurrent.x > m.touchesStart.x)))
                                    return void (m.isTouched = !1);
                                if (!p.isHorizontal() && ((Math.floor(m.minY) === Math.floor(m.startY) && m.touchesCurrent.y < m.touchesStart.y) || (Math.floor(m.maxY) === Math.floor(m.startY) && m.touchesCurrent.y > m.touchesStart.y)))
                                    return void (m.isTouched = !1);
                            }
                            e.cancelable && e.preventDefault(),
                                e.stopPropagation(),
                                (m.isMoved = !0),
                                (m.currentX = m.touchesCurrent.x - m.touchesStart.x + m.startX),
                                (m.currentY = m.touchesCurrent.y - m.touchesStart.y + m.startY),
                                m.currentX < m.minX && (m.currentX = m.minX + 1 - (m.minX - m.currentX + 1) ** 0.8),
                                m.currentX > m.maxX && (m.currentX = m.maxX - 1 + (m.currentX - m.maxX + 1) ** 0.8),
                                m.currentY < m.minY && (m.currentY = m.minY + 1 - (m.minY - m.currentY + 1) ** 0.8),
                                m.currentY > m.maxY && (m.currentY = m.maxY - 1 + (m.currentY - m.maxY + 1) ** 0.8),
                                l.prevPositionX || (l.prevPositionX = m.touchesCurrent.x),
                                l.prevPositionY || (l.prevPositionY = m.touchesCurrent.y),
                                l.prevTime || (l.prevTime = Date.now()),
                                (l.x = (m.touchesCurrent.x - l.prevPositionX) / (Date.now() - l.prevTime) / 2),
                                (l.y = (m.touchesCurrent.y - l.prevPositionY) / (Date.now() - l.prevTime) / 2),
                                Math.abs(m.touchesCurrent.x - l.prevPositionX) < 2 && (l.x = 0),
                                Math.abs(m.touchesCurrent.y - l.prevPositionY) < 2 && (l.y = 0),
                                (l.prevPositionX = m.touchesCurrent.x),
                                (l.prevPositionY = m.touchesCurrent.y),
                                (l.prevTime = Date.now()),
                                h.$imageWrapEl.transform(`translate3d(${m.currentX}px, ${m.currentY}px,0)`);
                        }
                    }
                }
                function y() {
                    const e = p.zoom;
                    h.$slideEl &&
                        p.previousIndex !== p.activeIndex &&
                        (h.$imageEl && h.$imageEl.transform("translate3d(0,0,0) scale(1)"),
                        h.$imageWrapEl && h.$imageWrapEl.transform("translate3d(0,0,0)"),
                        (e.scale = 1),
                        (f = 1),
                        (h.$slideEl = void 0),
                        (h.$imageEl = void 0),
                        (h.$imageWrapEl = void 0));
                }
                function x(s) {
                    const a = p.zoom;
                    var r,
                        o,
                        l,
                        c,
                        d = p.params.zoom;
                    if (
                        (h.$slideEl ||
                            (s && s.target && (h.$slideEl = A(s.target).closest(`.${p.params.slideClass}`)),
                            h.$slideEl || (p.params.virtual && p.params.virtual.enabled && p.virtual ? (h.$slideEl = p.$wrapperEl.children(`.${p.params.slideActiveClass}`)) : (h.$slideEl = p.slides.eq(p.activeIndex))),
                            (h.$imageEl = h.$slideEl.find(`.${d.containerClass}`).eq(0).find("img, svg, canvas, picture, .swiper-zoom-target")),
                            (h.$imageWrapEl = h.$imageEl.parent(`.${d.containerClass}`))),
                        h.$imageEl && 0 !== h.$imageEl.length && h.$imageWrapEl && 0 !== h.$imageWrapEl.length)
                    ) {
                        p.params.cssMode && ((p.wrapperEl.style.overflow = "hidden"), (p.wrapperEl.style.touchAction = "none")), h.$slideEl.addClass(`${d.zoomedSlideClass}`);
                        let e, t;
                        let n, i;
                        (t = void 0 === m.touchesStart.x && s ? ((e = ("touchend" === s.type ? s.changedTouches[0] : s).pageX), ("touchend" === s.type ? s.changedTouches[0] : s).pageY) : ((e = m.touchesStart.x), m.touchesStart.y)),
                            (a.scale = h.$imageWrapEl.attr("data-swiper-zoom") || d.maxRatio),
                            (f = h.$imageWrapEl.attr("data-swiper-zoom") || d.maxRatio),
                            s
                                ? ((l = h.$slideEl[0].offsetWidth),
                                  (c = h.$slideEl[0].offsetHeight),
                                  (r = h.$slideEl.offset().left + u.scrollX),
                                  (o = h.$slideEl.offset().top + u.scrollY),
                                  (d = r + l / 2 - e),
                                  (s = o + c / 2 - t),
                                  (r = h.$imageEl[0].offsetWidth),
                                  (o = h.$imageEl[0].offsetHeight),
                                  (r = r * a.scale),
                                  (o = o * a.scale),
                                  (r = -(l = Math.min(l / 2 - r / 2, 0))),
                                  (o = -(c = Math.min(c / 2 - o / 2, 0))),
                                  (n = d * a.scale),
                                  (i = s * a.scale),
                                  n < l && (n = l),
                                  n > r && (n = r),
                                  i < c && (i = c),
                                  i > o && (i = o))
                                : ((n = 0), (i = 0)),
                            h.$imageWrapEl.transition(300).transform(`translate3d(${n}px, ${i}px,0)`),
                            h.$imageEl.transition(300).transform(`translate3d(0,0,0) scale(${a.scale})`);
                    }
                }
                function w() {
                    const e = p.zoom;
                    var t = p.params.zoom;
                    h.$slideEl ||
                        (p.params.virtual && p.params.virtual.enabled && p.virtual ? (h.$slideEl = p.$wrapperEl.children(`.${p.params.slideActiveClass}`)) : (h.$slideEl = p.slides.eq(p.activeIndex)),
                        (h.$imageEl = h.$slideEl.find(`.${t.containerClass}`).eq(0).find("img, svg, canvas, picture, .swiper-zoom-target")),
                        (h.$imageWrapEl = h.$imageEl.parent(`.${t.containerClass}`))),
                        h.$imageEl &&
                            0 !== h.$imageEl.length &&
                            h.$imageWrapEl &&
                            0 !== h.$imageWrapEl.length &&
                            (p.params.cssMode && ((p.wrapperEl.style.overflow = ""), (p.wrapperEl.style.touchAction = "")),
                            (e.scale = 1),
                            (f = 1),
                            h.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),
                            h.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"),
                            h.$slideEl.removeClass(`${t.zoomedSlideClass}`),
                            (h.$slideEl = void 0));
                }
                function C(e) {
                    var t = p.zoom;
                    t.scale && 1 !== t.scale ? w() : x(e);
                }
                function T() {
                    var e = p.support;
                    return {
                        passiveListener: !("touchstart" !== p.touchEvents.start || !e.passiveListener || !p.params.passiveListeners) && { passive: !0, capture: !1 },
                        activeListenerWithCapture: !e.passiveListener || { passive: !1, capture: !0 },
                    };
                }
                function S() {
                    return `.${p.params.slideClass}`;
                }
                function E(e) {
                    var t = T()["passiveListener"],
                        n = S();
                    p.$wrapperEl[e]("gesturestart", n, d, t), p.$wrapperEl[e]("gesturechange", n, g, t), p.$wrapperEl[e]("gestureend", n, v, t);
                }
                function $() {
                    n || ((n = !0), E("on"));
                }
                function k() {
                    n && ((n = !1), E("off"));
                }
                function M() {
                    const e = p.zoom;
                    var t, n, i, s;
                    e.enabled ||
                        ((e.enabled = !0),
                        (t = p.support),
                        ({ passiveListener: n, activeListenerWithCapture: i } = T()),
                        (s = S()),
                        t.gestures
                            ? (p.$wrapperEl.on(p.touchEvents.start, $, n), p.$wrapperEl.on(p.touchEvents.end, k, n))
                            : "touchstart" === p.touchEvents.start &&
                              (p.$wrapperEl.on(p.touchEvents.start, s, d, n),
                              p.$wrapperEl.on(p.touchEvents.move, s, g, i),
                              p.$wrapperEl.on(p.touchEvents.end, s, v, n),
                              p.touchEvents.cancel && p.$wrapperEl.on(p.touchEvents.cancel, s, v, n)),
                        p.$wrapperEl.on(p.touchEvents.move, `.${p.params.zoom.containerClass}`, b, i));
                }
                function P() {
                    const e = p.zoom;
                    var t, n, i, s;
                    e.enabled &&
                        ((t = p.support),
                        (e.enabled = !1),
                        ({ passiveListener: n, activeListenerWithCapture: i } = T()),
                        (s = S()),
                        t.gestures
                            ? (p.$wrapperEl.off(p.touchEvents.start, $, n), p.$wrapperEl.off(p.touchEvents.end, k, n))
                            : "touchstart" === p.touchEvents.start &&
                              (p.$wrapperEl.off(p.touchEvents.start, s, d, n),
                              p.$wrapperEl.off(p.touchEvents.move, s, g, i),
                              p.$wrapperEl.off(p.touchEvents.end, s, v, n),
                              p.touchEvents.cancel && p.$wrapperEl.off(p.touchEvents.cancel, s, v, n)),
                        p.$wrapperEl.off(p.touchEvents.move, `.${p.params.zoom.containerClass}`, b, i));
                }
                Object.defineProperty(p.zoom, "scale", {
                    get() {
                        return s;
                    },
                    set(e) {
                        var t, n;
                        s !== e && ((t = h.$imageEl ? h.$imageEl[0] : void 0), (n = h.$slideEl ? h.$slideEl[0] : void 0), i("zoomChange", e, t, n)), (s = e);
                    },
                }),
                    t("init", () => {
                        p.params.zoom.enabled && M();
                    }),
                    t("destroy", () => {
                        P();
                    }),
                    t("touchStart", (e, t) => {
                        var n;
                        p.zoom.enabled &&
                            ((n = t),
                            (t = p.device),
                            h.$imageEl &&
                                0 !== h.$imageEl.length &&
                                (m.isTouched ||
                                    (t.android && n.cancelable && n.preventDefault(),
                                    (m.isTouched = !0),
                                    (m.touchesStart.x = ("touchstart" === n.type ? n.targetTouches[0] : n).pageX),
                                    (m.touchesStart.y = ("touchstart" === n.type ? n.targetTouches[0] : n).pageY))));
                    }),
                    t("touchEnd", (e, t) => {
                        p.zoom.enabled &&
                            (function () {
                                var n = p.zoom;
                                if (h.$imageEl && 0 !== h.$imageEl.length) {
                                    if (!m.isTouched || !m.isMoved) return (m.isTouched = !1), (m.isMoved = !1);
                                    (m.isTouched = !1), (m.isMoved = !1);
                                    let e = 300,
                                        t = 300;
                                    var i = l.x * e,
                                        s = m.currentX + i,
                                        a = l.y * t,
                                        i = m.currentY + a;
                                    0 !== l.x && (e = Math.abs((s - m.currentX) / l.x)), 0 !== l.y && (t = Math.abs((i - m.currentY) / l.y));
                                    a = Math.max(e, t);
                                    (m.currentX = s), (m.currentY = i);
                                    (i = m.width * n.scale), (n = m.height * n.scale);
                                    (m.minX = Math.min(h.slideWidth / 2 - i / 2, 0)),
                                        (m.maxX = -m.minX),
                                        (m.minY = Math.min(h.slideHeight / 2 - n / 2, 0)),
                                        (m.maxY = -m.minY),
                                        (m.currentX = Math.max(Math.min(m.currentX, m.maxX), m.minX)),
                                        (m.currentY = Math.max(Math.min(m.currentY, m.maxY), m.minY)),
                                        h.$imageWrapEl.transition(a).transform(`translate3d(${m.currentX}px, ${m.currentY}px,0)`);
                                }
                            })();
                    }),
                    t("doubleTap", (e, t) => {
                        !p.animating && p.params.zoom.enabled && p.zoom.enabled && p.params.zoom.toggle && C(t);
                    }),
                    t("transitionEnd", () => {
                        p.zoom.enabled && p.params.zoom.enabled && y();
                    }),
                    t("slideChange", () => {
                        p.zoom.enabled && p.params.zoom.enabled && p.params.cssMode && y();
                    }),
                    Object.assign(p.zoom, { enable: M, disable: P, in: x, out: w, toggle: C });
            },
            function ({ swiper: u, extendParams: e, on: t, emit: f }) {
                e({
                    lazy: {
                        checkInView: !1,
                        enabled: !1,
                        loadPrevNext: !1,
                        loadPrevNextAmount: 1,
                        loadOnTransitionStart: !1,
                        scrollingElement: "",
                        elementClass: "swiper-lazy",
                        loadingClass: "swiper-lazy-loading",
                        loadedClass: "swiper-lazy-loaded",
                        preloaderClass: "swiper-lazy-preloader",
                    },
                });
                let c = !(u.lazy = {}),
                    p = !1;
                function h(e, c = !0) {
                    const d = u.params.lazy;
                    if (void 0 !== e && 0 !== u.slides.length) {
                        const p = u.virtual && u.params.virtual.enabled ? u.$wrapperEl.children(`.${u.params.slideClass}[data-swiper-slide-index="${e}"]`) : u.slides.eq(e),
                            t = p.find(`.${d.elementClass}:not(.${d.loadedClass}):not(.${d.loadingClass})`);
                        !p.hasClass(d.elementClass) || p.hasClass(d.loadedClass) || p.hasClass(d.loadingClass) || t.push(p[0]),
                            0 !== t.length &&
                                t.each((e) => {
                                    const i = A(e);
                                    i.addClass(d.loadingClass);
                                    const s = i.attr("data-background"),
                                        a = i.attr("data-src"),
                                        r = i.attr("data-srcset"),
                                        o = i.attr("data-sizes"),
                                        l = i.parent("picture");
                                    u.loadImage(i[0], a || s, r, o, !1, () => {
                                        if (null != u && u && (!u || u.params) && !u.destroyed) {
                                            if (
                                                (s
                                                    ? (i.css("background-image", `url("${s}")`), i.removeAttr("data-background"))
                                                    : (r && (i.attr("srcset", r), i.removeAttr("data-srcset")),
                                                      o && (i.attr("sizes", o), i.removeAttr("data-sizes")),
                                                      l.length &&
                                                          l.children("source").each((e) => {
                                                              const t = A(e);
                                                              t.attr("data-srcset") && (t.attr("srcset", t.attr("data-srcset")), t.removeAttr("data-srcset"));
                                                          }),
                                                      a && (i.attr("src", a), i.removeAttr("data-src"))),
                                                i.addClass(d.loadedClass).removeClass(d.loadingClass),
                                                p.find(`.${d.preloaderClass}`).remove(),
                                                u.params.loop && c)
                                            ) {
                                                var e = p.attr("data-swiper-slide-index");
                                                if (p.hasClass(u.params.slideDuplicateClass)) {
                                                    const t = u.$wrapperEl.children(`[data-swiper-slide-index="${e}"]:not(.${u.params.slideDuplicateClass})`);
                                                    h(t.index(), !1);
                                                } else {
                                                    const n = u.$wrapperEl.children(`.${u.params.slideDuplicateClass}[data-swiper-slide-index="${e}"]`);
                                                    h(n.index(), !1);
                                                }
                                            }
                                            f("lazyImageReady", p[0], i[0]), u.params.autoHeight && u.updateAutoHeight();
                                        }
                                    }),
                                        f("lazyImageLoad", p[0], i[0]);
                                });
                    }
                }
                function d() {
                    const { $wrapperEl: t, params: n, slides: i, activeIndex: s } = u,
                        a = u.virtual && n.virtual.enabled;
                    var e = n.lazy;
                    let r = n.slidesPerView;
                    function o(e) {
                        if (a) {
                            if (t.children(`.${n.slideClass}[data-swiper-slide-index="${e}"]`).length) return 1;
                        } else if (i[e]) return 1;
                    }
                    function l(e) {
                        return a ? A(e).attr("data-swiper-slide-index") : A(e).index();
                    }
                    if (("auto" === r && (r = 0), (p = p || !0), u.params.watchSlidesProgress))
                        t.children(`.${n.slideVisibleClass}`).each((e) => {
                            h(a ? A(e).attr("data-swiper-slide-index") : A(e).index());
                        });
                    else if (1 < r) for (let e = s; e < s + r; e += 1) o(e) && h(e);
                    else h(s);
                    if (e.loadPrevNext)
                        if (1 < r || (e.loadPrevNextAmount && 1 < e.loadPrevNextAmount)) {
                            var c = e.loadPrevNextAmount,
                                e = r,
                                d = Math.min(s + e + Math.max(c, e), i.length),
                                c = Math.max(s - Math.max(e, c), 0);
                            for (let e = s + r; e < d; e += 1) o(e) && h(e);
                            for (let e = c; e < s; e += 1) o(e) && h(e);
                        } else {
                            c = t.children(`.${n.slideNextClass}`);
                            0 < c.length && h(l(c));
                            c = t.children(`.${n.slidePrevClass}`);
                            0 < c.length && h(l(c));
                        }
                }
                function m() {
                    var e = I();
                    if (u && !u.destroyed) {
                        const o = u.params.lazy.scrollingElement ? A(u.params.lazy.scrollingElement) : A(e);
                        var n = o[0] === e,
                            i = n ? e.innerWidth : o[0].offsetWidth,
                            s = n ? e.innerHeight : o[0].offsetHeight;
                        const l = u.$el.offset();
                        var e = u["rtlTranslate"];
                        let t = !1;
                        e && (l.left -= u.$el[0].scrollLeft);
                        var a = [
                            [l.left, l.top],
                            [l.left + u.width, l.top],
                            [l.left, l.top + u.height],
                            [l.left + u.width, l.top + u.height],
                        ];
                        for (let e = 0; e < a.length; e += 1) {
                            var r = a[e];
                            0 <= r[0] && r[0] <= i && 0 <= r[1] && r[1] <= s && ((0 === r[0] && 0 === r[1]) || (t = !0));
                        }
                        e = !("touchstart" !== u.touchEvents.start || !u.support.passiveListener || !u.params.passiveListeners) && { passive: !0, capture: !1 };
                        t ? (d(), o.off("scroll", m, e)) : c || ((c = !0), o.on("scroll", m, e));
                    }
                }
                t("beforeInit", () => {
                    u.params.lazy.enabled && u.params.preloadImages && (u.params.preloadImages = !1);
                }),
                    t("init", () => {
                        u.params.lazy.enabled && (u.params.lazy.checkInView ? m : d)();
                    }),
                    t("scroll", () => {
                        u.params.freeMode && u.params.freeMode.enabled && !u.params.freeMode.sticky && d();
                    }),
                    t("scrollbarDragMove resize _freeModeNoMomentumRelease", () => {
                        u.params.lazy.enabled && (u.params.lazy.checkInView ? m : d)();
                    }),
                    t("transitionStart", () => {
                        u.params.lazy.enabled && ((!u.params.lazy.loadOnTransitionStart && (u.params.lazy.loadOnTransitionStart || p)) || (u.params.lazy.checkInView ? m : d)());
                    }),
                    t("transitionEnd", () => {
                        u.params.lazy.enabled && !u.params.lazy.loadOnTransitionStart && (u.params.lazy.checkInView ? m : d)();
                    }),
                    t("slideChange", () => {
                        var { lazy: e, cssMode: t, watchSlidesProgress: n, touchReleaseOnEdges: i, resistanceRatio: s } = u.params;
                        e.enabled && (t || (n && (i || 0 === s))) && d();
                    }),
                    Object.assign(u.lazy, { load: d, loadInSlide: h });
            },
            function ({ swiper: o, extendParams: e, on: t }) {
                function l(e, t) {
                    const n = (function () {
                        let n, i, s;
                        return (e, t) => {
                            for (i = -1, n = e.length; 1 < n - i; ) (s = (n + i) >> 1), e[s] <= t ? (i = s) : (n = s);
                            return n;
                        };
                    })();
                    (this.x = e), (this.y = t), (this.lastIndex = e.length - 1);
                    let i, s;
                    return (
                        (this.interpolate = function (e) {
                            return e ? ((s = n(this.x, e)), (i = s - 1), ((e - this.x[i]) * (this.y[s] - this.y[i])) / (this.x[s] - this.x[i]) + this.y[i]) : 0;
                        }),
                        this
                    );
                }
                function n() {
                    o.controller.control && o.controller.spline && ((o.controller.spline = void 0), delete o.controller.spline);
                }
                e({ controller: { control: void 0, inverse: !1, by: "slide" } }),
                    (o.controller = { control: void 0 }),
                    t("beforeInit", () => {
                        o.controller.control = o.params.controller.control;
                    }),
                    t("update", () => {
                        n();
                    }),
                    t("resize", () => {
                        n();
                    }),
                    t("observerUpdate", () => {
                        n();
                    }),
                    t("setTranslate", (e, t, n) => {
                        o.controller.control && o.controller.setTranslate(t, n);
                    }),
                    t("setTransition", (e, t, n) => {
                        o.controller.control && o.controller.setTransition(t, n);
                    }),
                    Object.assign(o.controller, {
                        setTranslate: function (e, t) {
                            var n = o.controller.control;
                            let i, s;
                            var a = o.constructor;
                            function r(e) {
                                var t,
                                    n = o.rtlTranslate ? -o.translate : o.translate;
                                "slide" === o.params.controller.by &&
                                    ((t = e), o.controller.spline || (o.controller.spline = o.params.loop ? new l(o.slidesGrid, t.slidesGrid) : new l(o.snapGrid, t.snapGrid)), (s = -o.controller.spline.interpolate(-n))),
                                    (s && "container" !== o.params.controller.by) || ((i = (e.maxTranslate() - e.minTranslate()) / (o.maxTranslate() - o.minTranslate())), (s = (n - o.minTranslate()) * i + e.minTranslate())),
                                    o.params.controller.inverse && (s = e.maxTranslate() - s),
                                    e.updateProgress(s),
                                    e.setTranslate(s, o),
                                    e.updateActiveIndex(),
                                    e.updateSlidesClasses();
                            }
                            if (Array.isArray(n)) for (let e = 0; e < n.length; e += 1) n[e] !== t && n[e] instanceof a && r(n[e]);
                            else n instanceof a && t !== n && r(n);
                        },
                        setTransition: function (t, e) {
                            var n = o.constructor;
                            const i = o.controller.control;
                            let s;
                            function a(e) {
                                e.setTransition(t, o),
                                    0 !== t &&
                                        (e.transitionStart(),
                                        e.params.autoHeight &&
                                            T(() => {
                                                e.updateAutoHeight();
                                            }),
                                        e.$wrapperEl.transitionEnd(() => {
                                            i && (e.params.loop && "slide" === o.params.controller.by && e.loopFix(), e.transitionEnd());
                                        }));
                            }
                            if (Array.isArray(i)) for (s = 0; s < i.length; s += 1) i[s] !== e && i[s] instanceof n && a(i[s]);
                            else i instanceof n && e !== i && a(i);
                        },
                    });
            },
            function ({ swiper: o, extendParams: e, on: t }) {
                e({
                    a11y: {
                        enabled: !0,
                        notificationClass: "swiper-notification",
                        prevSlideMessage: "Previous slide",
                        nextSlideMessage: "Next slide",
                        firstSlideMessage: "This is the first slide",
                        lastSlideMessage: "This is the last slide",
                        paginationBulletMessage: "Go to slide {{index}}",
                        slideLabelMessage: "{{index}} / {{slidesLength}}",
                        containerMessage: null,
                        containerRoleDescriptionMessage: null,
                        itemRoleDescriptionMessage: null,
                        slideRole: "group",
                    },
                });
                let l = null;
                function i(e) {
                    const t = l;
                    0 !== t.length && (t.html(""), t.html(e));
                }
                function s(e) {
                    e.attr("tabIndex", "0");
                }
                function n(e) {
                    e.attr("tabIndex", "-1");
                }
                function c(e, t) {
                    e.attr("role", t);
                }
                function d(e, t) {
                    e.attr("aria-roledescription", t);
                }
                function p(e, t) {
                    e.attr("aria-label", t);
                }
                function a(e) {
                    e.attr("aria-disabled", !0);
                }
                function r(e) {
                    e.attr("aria-disabled", !1);
                }
                function u(e) {
                    if (13 === e.keyCode || 32 === e.keyCode) {
                        var t = o.params.a11y;
                        const n = A(e.target);
                        o.navigation && o.navigation.$nextEl && n.is(o.navigation.$nextEl) && ((o.isEnd && !o.params.loop) || o.slideNext(), o.isEnd ? i(t.lastSlideMessage) : i(t.nextSlideMessage)),
                            o.navigation && o.navigation.$prevEl && n.is(o.navigation.$prevEl) && ((o.isBeginning && !o.params.loop) || o.slidePrev(), o.isBeginning ? i(t.firstSlideMessage) : i(t.prevSlideMessage)),
                            o.pagination && n.is(D(o.params.pagination.bulletClass)) && n[0].click();
                    }
                }
                function f() {
                    var e, t;
                    !o.params.loop && o.navigation && (({ $nextEl: e, $prevEl: t } = o.navigation), t && 0 < t.length && (o.isBeginning ? (a(t), n(t)) : (r(t), s(t))), e && 0 < e.length && (o.isEnd ? (a(e), n(e)) : (r(e), s(e))));
                }
                function h() {
                    return o.pagination && o.params.pagination.clickable && o.pagination.bullets && o.pagination.bullets.length;
                }
                const m = (e, t, n) => {
                    s(e), "BUTTON" !== e[0].tagName && (c(e, "button"), e.on("keydown", u)), p(e, n), e.attr("aria-controls", t);
                };
                function g() {
                    const i = o.params.a11y;
                    o.$el.append(l);
                    var e = o.$el;
                    i.containerRoleDescriptionMessage && d(e, i.containerRoleDescriptionMessage), i.containerMessage && p(e, i.containerMessage);
                    const t = o.$wrapperEl;
                    var e = t.attr("id") || `swiper-wrapper-${((n = 16), "x".repeat(n).replace(/x/g, () => Math.round(16 * Math.random()).toString(16)))}`,
                        n = o.params.autoplay && o.params.autoplay.enabled ? "off" : "polite";
                    t.attr("id", e), t.attr("aria-live", n), i.itemRoleDescriptionMessage && d(A(o.slides), i.itemRoleDescriptionMessage), c(A(o.slides), i.slideRole);
                    const s = (o.params.loop ? o.slides.filter((e) => !e.classList.contains(o.params.slideDuplicateClass)) : o.slides).length;
                    o.slides.each((e, t) => {
                        const n = A(e);
                        (t = o.params.loop ? parseInt(n.attr("data-swiper-slide-index"), 10) : t), (t = i.slideLabelMessage.replace(/\{\{index\}\}/, t + 1).replace(/\{\{slidesLength\}\}/, s));
                        p(n, t);
                    });
                    let a, r;
                    o.navigation && o.navigation.$nextEl && (a = o.navigation.$nextEl),
                        o.navigation && o.navigation.$prevEl && (r = o.navigation.$prevEl),
                        a && a.length && m(a, e, i.nextSlideMessage),
                        r && r.length && m(r, e, i.prevSlideMessage),
                        h() && o.pagination.$el.on("keydown", D(o.params.pagination.bulletClass), u);
                }
                t("beforeInit", () => {
                    l = A(`<span class="${o.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`);
                }),
                    t("afterInit", () => {
                        o.params.a11y.enabled && (g(), f());
                    }),
                    t("toEdge", () => {
                        o.params.a11y.enabled && f();
                    }),
                    t("fromEdge", () => {
                        o.params.a11y.enabled && f();
                    }),
                    t("paginationUpdate", () => {
                        o.params.a11y.enabled &&
                            (function () {
                                const n = o.params.a11y;
                                h() &&
                                    o.pagination.bullets.each((e) => {
                                        const t = A(e);
                                        s(t), o.params.pagination.renderBullet || (c(t, "button"), p(t, n.paginationBulletMessage.replace(/\{\{index\}\}/, t.index() + 1)));
                                    });
                            })();
                    }),
                    t("destroy", () => {
                        o.params.a11y.enabled &&
                            (function () {
                                l && 0 < l.length && l.remove();
                                let e, t;
                                o.navigation && o.navigation.$nextEl && (e = o.navigation.$nextEl),
                                    o.navigation && o.navigation.$prevEl && (t = o.navigation.$prevEl),
                                    e && e.off("keydown", u),
                                    t && t.off("keydown", u),
                                    h() && o.pagination.$el.off("keydown", D(o.params.pagination.bulletClass), u);
                            })();
                    });
            },
            function ({ swiper: o, extendParams: e, on: t }) {
                e({ history: { enabled: !1, root: "", replaceState: !1, key: "slides" } });
                let r = !1,
                    n = {};
                const l = (e) =>
                        e
                            .toString()
                            .replace(/\s+/g, "-")
                            .replace(/[^\w-]+/g, "")
                            .replace(/--+/g, "-")
                            .replace(/^-+/, "")
                            .replace(/-+$/, ""),
                    i = (e) => {
                        var t = I();
                        let n;
                        n = e ? new URL(e) : t.location;
                        (e = n.pathname
                            .slice(1)
                            .split("/")
                            .filter((e) => "" !== e)),
                            (t = e.length);
                        return { key: e[t - 2], value: e[t - 1] };
                    },
                    s = (n, i) => {
                        const s = I();
                        if (r && o.params.history.enabled) {
                            let e;
                            e = o.params.url ? new URL(o.params.url) : s.location;
                            const a = o.slides.eq(i);
                            let t = l(a.attr("data-history"));
                            if (0 < o.params.history.root.length) {
                                let e = o.params.history.root;
                                "/" === e[e.length - 1] && (e = e.slice(0, e.length - 1)), (t = `${e}/${n}/${t}`);
                            } else e.pathname.includes(n) || (t = `${n}/${t}`);
                            n = s.history.state;
                            (n && n.value === t) || (o.params.history.replaceState ? s.history.replaceState({ value: t }, null, t) : s.history.pushState({ value: t }, null, t));
                        }
                    },
                    a = (n, i, s) => {
                        if (i)
                            for (let e = 0, t = o.slides.length; e < t; e += 1) {
                                const r = o.slides.eq(e);
                                var a;
                                l(r.attr("data-history")) !== i || r.hasClass(o.params.slideDuplicateClass) || ((a = r.index()), o.slideTo(a, n, s));
                            }
                        else o.slideTo(0, n, s);
                    },
                    c = () => {
                        (n = i(o.params.url)), a(o.params.speed, o.paths.value, !1);
                    };
                t("init", () => {
                    o.params.history.enabled &&
                        (() => {
                            const e = I();
                            if (o.params.history) {
                                if (!e.history || !e.history.pushState) return (o.params.history.enabled = !1), (o.params.hashNavigation.enabled = !0);
                                (r = !0), (n = i(o.params.url)), (n.key || n.value) && (a(0, n.value, o.params.runCallbacksOnInit), o.params.history.replaceState || e.addEventListener("popstate", c));
                            }
                        })();
                }),
                    t("destroy", () => {
                        o.params.history.enabled &&
                            (() => {
                                const e = I();
                                o.params.history.replaceState || e.removeEventListener("popstate", c);
                            })();
                    }),
                    t("transitionEnd _freeModeNoMomentumRelease", () => {
                        r && s(o.params.history.key, o.activeIndex);
                    }),
                    t("slideChange", () => {
                        r && o.params.cssMode && s(o.params.history.key, o.activeIndex);
                    });
            },
            function ({ swiper: a, extendParams: e, emit: n, on: t }) {
                let r = !1;
                const o = C(),
                    l = I();
                e({ hashNavigation: { enabled: !1, replaceState: !1, watchState: !1 } });
                const c = () => {
                        n("hashChange");
                        var e = o.location.hash.replace("#", "");
                        e === a.slides.eq(a.activeIndex).attr("data-hash") || (void 0 !== (e = a.$wrapperEl.children(`.${a.params.slideClass}[data-hash="${e}"]`).index()) && a.slideTo(e));
                    },
                    i = () => {
                        if (r && a.params.hashNavigation.enabled)
                            if (a.params.hashNavigation.replaceState && l.history && l.history.replaceState) l.history.replaceState(null, null, `#${a.slides.eq(a.activeIndex).attr("data-hash")}` || ""), n("hashSet");
                            else {
                                const t = a.slides.eq(a.activeIndex);
                                var e = t.attr("data-hash") || t.attr("data-history");
                                (o.location.hash = e || ""), n("hashSet");
                            }
                    };
                t("init", () => {
                    a.params.hashNavigation.enabled &&
                        (() => {
                            if (!(!a.params.hashNavigation.enabled || (a.params.history && a.params.history.enabled))) {
                                r = !0;
                                var n = o.location.hash.replace("#", "");
                                if (n) {
                                    var i;
                                    for (let e = 0, t = a.slides.length; e < t; e += 1) {
                                        const s = a.slides.eq(e);
                                        (s.attr("data-hash") || s.attr("data-history")) !== n || s.hasClass(a.params.slideDuplicateClass) || ((i = s.index()), a.slideTo(i, 0, a.params.runCallbacksOnInit, !0));
                                    }
                                }
                                a.params.hashNavigation.watchState && A(l).on("hashchange", c);
                            }
                        })();
                }),
                    t("destroy", () => {
                        a.params.hashNavigation.enabled && a.params.hashNavigation.watchState && A(l).off("hashchange", c);
                    }),
                    t("transitionEnd _freeModeNoMomentumRelease", () => {
                        r && i();
                    }),
                    t("slideChange", () => {
                        r && a.params.cssMode && i();
                    });
            },
            function ({ swiper: i, extendParams: e, on: t, emit: n }) {
                let s;
                function a() {
                    const e = i.slides.eq(i.activeIndex);
                    let t = i.params.autoplay.delay;
                    e.attr("data-swiper-autoplay") && (t = e.attr("data-swiper-autoplay") || i.params.autoplay.delay),
                        clearTimeout(s),
                        (s = T(() => {
                            let e;
                            i.params.autoplay.reverseDirection
                                ? i.params.loop
                                    ? (i.loopFix(), (e = i.slidePrev(i.params.speed, !0, !0)), n("autoplay"))
                                    : i.isBeginning
                                    ? i.params.autoplay.stopOnLastSlide
                                        ? o()
                                        : ((e = i.slideTo(i.slides.length - 1, i.params.speed, !0, !0)), n("autoplay"))
                                    : ((e = i.slidePrev(i.params.speed, !0, !0)), n("autoplay"))
                                : i.params.loop
                                ? (i.loopFix(), (e = i.slideNext(i.params.speed, !0, !0)), n("autoplay"))
                                : i.isEnd
                                ? i.params.autoplay.stopOnLastSlide
                                    ? o()
                                    : ((e = i.slideTo(0, i.params.speed, !0, !0)), n("autoplay"))
                                : ((e = i.slideNext(i.params.speed, !0, !0)), n("autoplay")),
                                ((i.params.cssMode && i.autoplay.running) || !1 === e) && a();
                        }, t));
                }
                function r() {
                    return void 0 === s && !i.autoplay.running && ((i.autoplay.running = !0), n("autoplayStart"), a(), !0);
                }
                function o() {
                    return !!i.autoplay.running && void 0 !== s && (s && (clearTimeout(s), (s = void 0)), (i.autoplay.running = !1), n("autoplayStop"), !0);
                }
                function l(e) {
                    i.autoplay.running &&
                        (i.autoplay.paused ||
                            (s && clearTimeout(s),
                            (i.autoplay.paused = !0),
                            0 !== e && i.params.autoplay.waitForTransition
                                ? ["transitionend", "webkitTransitionEnd"].forEach((e) => {
                                      i.$wrapperEl[0].addEventListener(e, d);
                                  })
                                : ((i.autoplay.paused = !1), a())));
                }
                function c() {
                    var e = C();
                    "hidden" === e.visibilityState && i.autoplay.running && l(), "visible" === e.visibilityState && i.autoplay.paused && (a(), (i.autoplay.paused = !1));
                }
                function d(e) {
                    i &&
                        !i.destroyed &&
                        i.$wrapperEl &&
                        e.target === i.$wrapperEl[0] &&
                        (["transitionend", "webkitTransitionEnd"].forEach((e) => {
                            i.$wrapperEl[0].removeEventListener(e, d);
                        }),
                        (i.autoplay.paused = !1),
                        (i.autoplay.running ? a : o)());
                }
                function p() {
                    (i.params.autoplay.disableOnInteraction ? o : l)(),
                        ["transitionend", "webkitTransitionEnd"].forEach((e) => {
                            i.$wrapperEl[0].removeEventListener(e, d);
                        });
                }
                function u() {
                    i.params.autoplay.disableOnInteraction || ((i.autoplay.paused = !1), a());
                }
                e({ autoplay: { enabled: !(i.autoplay = { running: !1, paused: !1 }), delay: 3e3, waitForTransition: !0, disableOnInteraction: !0, stopOnLastSlide: !1, reverseDirection: !1, pauseOnMouseEnter: !1 } }),
                    t("init", () => {
                        if (i.params.autoplay.enabled) {
                            r();
                            const e = C();
                            e.addEventListener("visibilitychange", c), i.params.autoplay.pauseOnMouseEnter && (i.$el.on("mouseenter", p), i.$el.on("mouseleave", u));
                        }
                    }),
                    t("beforeTransitionStart", (e, t, n) => {
                        i.autoplay.running && (n || !i.params.autoplay.disableOnInteraction ? i.autoplay.pause(t) : o());
                    }),
                    t("sliderFirstMove", () => {
                        i.autoplay.running && (i.params.autoplay.disableOnInteraction ? o : l)();
                    }),
                    t("touchEnd", () => {
                        i.params.cssMode && i.autoplay.paused && !i.params.autoplay.disableOnInteraction && a();
                    }),
                    t("destroy", () => {
                        i.$el.off("mouseenter", p), i.$el.off("mouseleave", u), i.autoplay.running && o();
                        const e = C();
                        e.removeEventListener("visibilitychange", c);
                    }),
                    Object.assign(i.autoplay, { pause: l, run: a, start: r, stop: o });
            },
            function ({ swiper: d, extendParams: e, on: t }) {
                e({ thumbs: { swiper: null, multipleActiveThumbs: !0, autoScrollOffset: 0, slideThumbActiveClass: "swiper-slide-thumb-active", thumbsContainerClass: "swiper-thumbs" } });
                let n = !1,
                    i = !1;
                function s() {
                    var n = d.thumbs.swiper;
                    if (n) {
                        var i = n.clickedIndex,
                            e = n.clickedSlide;
                        if (!((e && A(e).hasClass(d.params.thumbs.slideThumbActiveClass)) || null == i)) {
                            let t;
                            if (((t = n.params.loop ? parseInt(A(n.clickedSlide).attr("data-swiper-slide-index"), 10) : i), d.params.loop)) {
                                let e = d.activeIndex;
                                d.slides.eq(e).hasClass(d.params.slideDuplicateClass) && (d.loopFix(), (d._clientLeft = d.$wrapperEl[0].clientLeft), (e = d.activeIndex));
                                (n = d.slides.eq(e).prevAll(`[data-swiper-slide-index="${t}"]`).eq(0).index()), (i = d.slides.eq(e).nextAll(`[data-swiper-slide-index="${t}"]`).eq(0).index());
                                t = void 0 === n || (void 0 !== i && i - e < e - n) ? i : n;
                            }
                            d.slideTo(t);
                        }
                    }
                }
                function a() {
                    var e = d.params["thumbs"];
                    if (n) return !1;
                    n = !0;
                    const t = d.constructor;
                    return (
                        e.swiper instanceof t
                            ? ((d.thumbs.swiper = e.swiper),
                              Object.assign(d.thumbs.swiper.originalParams, { watchSlidesProgress: !0, slideToClickedSlide: !1 }),
                              Object.assign(d.thumbs.swiper.params, { watchSlidesProgress: !0, slideToClickedSlide: !1 }))
                            : c(e.swiper) && ((e = Object.assign({}, e.swiper)), Object.assign(e, { watchSlidesProgress: !0, slideToClickedSlide: !1 }), (d.thumbs.swiper = new t(e)), (i = !0)),
                        d.thumbs.swiper.$el.addClass(d.params.thumbs.thumbsContainerClass),
                        d.thumbs.swiper.on("tap", s),
                        !0
                    );
                }
                function r(i) {
                    const s = d.thumbs.swiper;
                    if (s) {
                        var a,
                            r,
                            o = "auto" === s.params.slidesPerView ? s.slidesPerViewDynamic() : s.params.slidesPerView,
                            l = d.params.thumbs.autoScrollOffset,
                            c = l && !s.params.loop;
                        if (d.realIndex !== s.realIndex || c) {
                            let e = s.activeIndex,
                                t,
                                n;
                            (n = s.params.loop
                                ? (s.slides.eq(e).hasClass(s.params.slideDuplicateClass) && (s.loopFix(), (s._clientLeft = s.$wrapperEl[0].clientLeft), (e = s.activeIndex)),
                                  (a = s.slides.eq(e).prevAll(`[data-swiper-slide-index="${d.realIndex}"]`).eq(0).index()),
                                  (r = s.slides.eq(e).nextAll(`[data-swiper-slide-index="${d.realIndex}"]`).eq(0).index()),
                                  (t = void 0 === a ? r : void 0 === r ? a : r - e == e - a ? (1 < s.params.slidesPerGroup ? r : e) : r - e < e - a ? r : a),
                                  d.activeIndex > d.previousIndex ? "next" : "prev")
                                : ((t = d.realIndex), t > d.previousIndex ? "next" : "prev")),
                                c && (t += "next" === n ? l : -1 * l),
                                s.visibleSlidesIndexes &&
                                    s.visibleSlidesIndexes.indexOf(t) < 0 &&
                                    (s.params.centeredSlides ? (t = t > e ? t - Math.floor(o / 2) + 1 : t + Math.floor(o / 2) - 1) : t > e && s.params.slidesPerGroup, s.slideTo(t, i ? 0 : void 0));
                        }
                        let t = 1;
                        var n = d.params.thumbs.slideThumbActiveClass;
                        if (
                            (1 < d.params.slidesPerView && !d.params.centeredSlides && (t = d.params.slidesPerView),
                            d.params.thumbs.multipleActiveThumbs || (t = 1),
                            (t = Math.floor(t)),
                            s.slides.removeClass(n),
                            s.params.loop || (s.params.virtual && s.params.virtual.enabled))
                        )
                            for (let e = 0; e < t; e += 1) s.$wrapperEl.children(`[data-swiper-slide-index="${d.realIndex + e}"]`).addClass(n);
                        else for (let e = 0; e < t; e += 1) s.slides.eq(d.realIndex + e).addClass(n);
                    }
                }
                (d.thumbs = { swiper: null }),
                    t("beforeInit", () => {
                        var e = d.params["thumbs"];
                        e && e.swiper && (a(), r(!0));
                    }),
                    t("slideChange update resize observerUpdate", () => {
                        d.thumbs.swiper && r();
                    }),
                    t("setTransition", (e, t) => {
                        const n = d.thumbs.swiper;
                        n && n.setTransition(t);
                    }),
                    t("beforeDestroy", () => {
                        const e = d.thumbs.swiper;
                        e && i && e && e.destroy();
                    }),
                    Object.assign(d.thumbs, { init: a, update: r });
            },
            function ({ swiper: f, extendParams: e, emit: h, once: m }) {
                e({ freeMode: { enabled: !1, momentum: !0, momentumRatio: 1, momentumBounce: !0, momentumBounceRatio: 1, momentumVelocityRatio: 1, sticky: !1, minimumVelocity: 0.02 } }),
                    Object.assign(f, {
                        freeMode: {
                            onTouchMove: function () {
                                const { touchEventsData: e, touches: t } = f;
                                0 === e.velocities.length && e.velocities.push({ position: t[f.isHorizontal() ? "startX" : "startY"], time: e.touchStartTime }),
                                    e.velocities.push({ position: t[f.isHorizontal() ? "currentX" : "currentY"], time: v() });
                            },
                            onTouchEnd: function ({ currentPos: a }) {
                                const { params: r, $wrapperEl: o, rtlTranslate: l, snapGrid: c, touchEventsData: d } = f;
                                var e = v() - d.touchStartTime;
                                if (a < -f.minTranslate()) f.slideTo(f.activeIndex);
                                else if (a > -f.maxTranslate()) f.slides.length < c.length ? f.slideTo(c.length - 1) : f.slideTo(f.slides.length - 1);
                                else {
                                    if (r.freeMode.momentum) {
                                        1 < d.velocities.length
                                            ? ((u = d.velocities.pop()),
                                              (p = d.velocities.pop()),
                                              (a = u.position - p.position),
                                              (p = u.time - p.time),
                                              (f.velocity = a / p),
                                              (f.velocity /= 2),
                                              Math.abs(f.velocity) < r.freeMode.minimumVelocity && (f.velocity = 0),
                                              (150 < p || 300 < v() - u.time) && (f.velocity = 0))
                                            : (f.velocity = 0),
                                            (f.velocity *= r.freeMode.momentumVelocityRatio),
                                            (d.velocities.length = 0);
                                        let e = 1e3 * r.freeMode.momentumRatio;
                                        var p = f.velocity * e;
                                        let n = f.translate + p;
                                        l && (n = -n);
                                        let t = !1,
                                            i;
                                        var u = 20 * Math.abs(f.velocity) * r.freeMode.momentumBounceRatio;
                                        let s;
                                        if (n < f.maxTranslate())
                                            r.freeMode.momentumBounce ? (n + f.maxTranslate() < -u && (n = f.maxTranslate() - u), (i = f.maxTranslate()), (t = !0), (d.allowMomentumBounce = !0)) : (n = f.maxTranslate()),
                                                r.loop && r.centeredSlides && (s = !0);
                                        else if (n > f.minTranslate())
                                            r.freeMode.momentumBounce ? (n - f.minTranslate() > u && (n = f.minTranslate() + u), (i = f.minTranslate()), (t = !0), (d.allowMomentumBounce = !0)) : (n = f.minTranslate()),
                                                r.loop && r.centeredSlides && (s = !0);
                                        else if (r.freeMode.sticky) {
                                            let t;
                                            for (let e = 0; e < c.length; e += 1)
                                                if (c[e] > -n) {
                                                    t = e;
                                                    break;
                                                }
                                            (n = Math.abs(c[t] - n) < Math.abs(c[t - 1] - n) || "next" === f.swipeDirection ? c[t] : c[t - 1]), (n = -n);
                                        }
                                        if (
                                            (s &&
                                                m("transitionEnd", () => {
                                                    f.loopFix();
                                                }),
                                            0 !== f.velocity)
                                        )
                                            (e = l ? Math.abs((-n - f.translate) / f.velocity) : Math.abs((n - f.translate) / f.velocity)),
                                                r.freeMode.sticky && ((p = Math.abs((l ? -n : n) - f.translate)), (u = f.slidesSizesGrid[f.activeIndex]), (e = p < u ? r.speed : p < 2 * u ? 1.5 * r.speed : 2.5 * r.speed));
                                        else if (r.freeMode.sticky) return void f.slideToClosest();
                                        r.freeMode.momentumBounce && t
                                            ? (f.updateProgress(i),
                                              f.setTransition(e),
                                              f.setTranslate(n),
                                              f.transitionStart(!0, f.swipeDirection),
                                              (f.animating = !0),
                                              o.transitionEnd(() => {
                                                  f &&
                                                      !f.destroyed &&
                                                      d.allowMomentumBounce &&
                                                      (h("momentumBounce"),
                                                      f.setTransition(r.speed),
                                                      setTimeout(() => {
                                                          f.setTranslate(i),
                                                              o.transitionEnd(() => {
                                                                  f && !f.destroyed && f.transitionEnd();
                                                              });
                                                      }, 0));
                                              }))
                                            : f.velocity
                                            ? (h("_freeModeNoMomentumRelease"),
                                              f.updateProgress(n),
                                              f.setTransition(e),
                                              f.setTranslate(n),
                                              f.transitionStart(!0, f.swipeDirection),
                                              f.animating ||
                                                  ((f.animating = !0),
                                                  o.transitionEnd(() => {
                                                      f && !f.destroyed && f.transitionEnd();
                                                  })))
                                            : f.updateProgress(n),
                                            f.updateActiveIndex(),
                                            f.updateSlidesClasses();
                                    } else {
                                        if (r.freeMode.sticky) return void f.slideToClosest();
                                        r.freeMode && h("_freeModeNoMomentumRelease");
                                    }
                                    (!r.freeMode.momentum || e >= r.longSwipesMs) && (f.updateProgress(), f.updateActiveIndex(), f.updateSlidesClasses());
                                }
                            },
                        },
                    });
            },
            function ({ swiper: u, extendParams: e }) {
                e({ grid: { rows: 1, fill: "column" } });
                let f, h, m;
                u.grid = {
                    initSlides: (e) => {
                        var t = u.params["slidesPerView"],
                            { rows: n, fill: i } = u.params.grid;
                        (h = f / n), (m = Math.floor(e / n)), (f = Math.floor(e / n) === e / n ? e : Math.ceil(e / n) * n), "auto" !== t && "row" === i && (f = Math.max(f, t * n));
                    },
                    updateSlide: (e, t, n, i) => {
                        var s,
                            a,
                            { slidesPerGroup: r, spaceBetween: o } = u.params,
                            { rows: l, fill: c } = u.params.grid;
                        let d, p;
                        "row" === c && 1 < r
                            ? ((a = e - l * r * (s = Math.floor(e / (r * l)))),
                              (n = 0 === s ? r : Math.min(Math.ceil((n - s * l * r) / l), r)),
                              (p = Math.floor(a / n)),
                              (d = a - p * n + s * r),
                              (r = d + (p * f) / l),
                              t.css({ "-webkit-order": r, order: r }))
                            : "column" === c
                            ? ((d = Math.floor(e / l)), (p = e - d * l), (d > m || (d === m && p === l - 1)) && ((p += 1), p >= l && ((p = 0), (d += 1))))
                            : ((p = Math.floor(e / h)), (d = e - p * h)),
                            t.css(i("margin-top"), 0 !== p ? o && `${o}px` : "");
                    },
                    updateWrapperSize: (e, n, t) => {
                        var { spaceBetween: i, centeredSlides: s, roundLengths: a } = u.params,
                            r = u.params.grid["rows"];
                        if (((u.virtualSize = (e + i) * f), (u.virtualSize = Math.ceil(u.virtualSize / r) - i), u.$wrapperEl.css({ [t("width")]: `${u.virtualSize + i}px` }), s)) {
                            n.splice(0, n.length);
                            const o = [];
                            for (let t = 0; t < n.length; t += 1) {
                                let e = n[t];
                                a && (e = Math.floor(e)), n[t] < u.virtualSize + n[0] && o.push(e);
                            }
                            n.push(...o);
                        }
                    },
                };
            },
            function ({ swiper: e }) {
                Object.assign(e, {
                    appendSlide: function (t) {
                        const { $wrapperEl: n, params: e } = this;
                        if ((e.loop && this.loopDestroy(), "object" == typeof t && "length" in t)) for (let e = 0; e < t.length; e += 1) t[e] && n.append(t[e]);
                        else n.append(t);
                        e.loop && this.loopCreate(), e.observer || this.update();
                    }.bind(e),
                    prependSlide: function (t) {
                        const { params: e, $wrapperEl: n, activeIndex: i } = this;
                        e.loop && this.loopDestroy();
                        let s = i + 1;
                        if ("object" == typeof t && "length" in t) {
                            for (let e = 0; e < t.length; e += 1) t[e] && n.prepend(t[e]);
                            s = i + t.length;
                        } else n.prepend(t);
                        e.loop && this.loopCreate(), e.observer || this.update(), this.slideTo(s, 0, !1);
                    }.bind(e),
                    addSlide: function (t, n) {
                        var i = this;
                        const { $wrapperEl: s, params: a, activeIndex: e } = i;
                        let r = e;
                        a.loop && ((r -= i.loopedSlides), i.loopDestroy(), (i.slides = s.children(`.${a.slideClass}`)));
                        var o = i.slides.length;
                        if (t <= 0) i.prependSlide(n);
                        else if (o <= t) i.appendSlide(n);
                        else {
                            let e = r > t ? r + 1 : r;
                            const l = [];
                            for (let e = o - 1; e >= t; --e) {
                                const c = i.slides.eq(e);
                                c.remove(), l.unshift(c);
                            }
                            if ("object" == typeof n && "length" in n) {
                                for (let e = 0; e < n.length; e += 1) n[e] && s.append(n[e]);
                                e = r > t ? r + n.length : r;
                            } else s.append(n);
                            for (let e = 0; e < l.length; e += 1) s.append(l[e]);
                            a.loop && i.loopCreate(), a.observer || i.update(), a.loop ? i.slideTo(e + i.loopedSlides, 0, !1) : i.slideTo(e, 0, !1);
                        }
                    }.bind(e),
                    removeSlide: function (t) {
                        var n = this;
                        const { params: e, $wrapperEl: i, activeIndex: s } = n;
                        let a = s;
                        e.loop && ((a -= n.loopedSlides), n.loopDestroy(), (n.slides = i.children(`.${e.slideClass}`)));
                        let r = a,
                            o;
                        if ("object" == typeof t && "length" in t) {
                            for (let e = 0; e < t.length; e += 1) (o = t[e]), n.slides[o] && n.slides.eq(o).remove(), o < r && --r;
                            r = Math.max(r, 0);
                        } else (o = t), n.slides[o] && n.slides.eq(o).remove(), o < r && --r, (r = Math.max(r, 0));
                        e.loop && n.loopCreate(), e.observer || n.update(), e.loop ? n.slideTo(r + n.loopedSlides, 0, !1) : n.slideTo(r, 0, !1);
                    }.bind(e),
                    removeAllSlides: function () {
                        const t = [];
                        for (let e = 0; e < this.slides.length; e += 1) t.push(e);
                        this.removeSlide(t);
                    }.bind(e),
                });
            },
            function ({ swiper: o, extendParams: e, on: t }) {
                e({ fadeEffect: { crossFade: !1, transformEl: null } }),
                    j({
                        effect: "fade",
                        swiper: o,
                        on: t,
                        setTranslate: () => {
                            var e = o["slides"],
                                i = o.params.fadeEffect;
                            for (let n = 0; n < e.length; n += 1) {
                                var s = o.slides.eq(n);
                                let e = -s[0].swiperSlideOffset;
                                o.params.virtualTranslate || (e -= o.translate);
                                let t = 0;
                                o.isHorizontal() || ((t = e), (e = 0));
                                var a = o.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(s[0].progress), 0) : 1 + Math.min(Math.max(s[0].progress, -1), 0);
                                const r = _(i, s);
                                r.css({ opacity: a }).transform(`translate3d(${e}px, ${t}px, 0px)`);
                            }
                        },
                        setTransition: (e) => {
                            var t = o.params.fadeEffect["transformEl"];
                            const n = t ? o.slides.find(t) : o.slides;
                            n.transition(e), N({ swiper: o, duration: e, transformEl: t, allSlides: !0 });
                        },
                        overwriteParams: () => ({ slidesPerView: 1, slidesPerGroup: 1, watchSlidesProgress: !0, spaceBetween: 0, virtualTranslate: !o.params.cssMode }),
                    });
            },
            function ({ swiper: y, extendParams: e, on: t }) {
                e({ cubeEffect: { slideShadows: !0, shadow: !0, shadowOffset: 20, shadowScale: 0.94 } }),
                    j({
                        effect: "cube",
                        swiper: y,
                        on: t,
                        setTranslate: () => {
                            const { $el: e, $wrapperEl: t, slides: o, width: n, height: i, rtlTranslate: l, size: c, browser: s } = y;
                            var a,
                                r,
                                d = y.params.cubeEffect,
                                p = y.isHorizontal(),
                                u = y.virtual && y.params.virtual.enabled;
                            let f = 0,
                                h;
                            d.shadow &&
                                (p
                                    ? ((h = t.find(".swiper-cube-shadow")), 0 === h.length && ((h = A('<div class="swiper-cube-shadow"></div>')), t.append(h)), h.css({ height: `${n}px` }))
                                    : ((h = e.find(".swiper-cube-shadow")), 0 === h.length && ((h = A('<div class="swiper-cube-shadow"></div>')), e.append(h))));
                            for (let r = 0; r < o.length; r += 1) {
                                const b = o.eq(r);
                                let e = r;
                                u && (e = parseInt(b.attr("data-swiper-slide-index"), 10));
                                let t = 90 * e,
                                    n = Math.floor(t / 360);
                                l && ((t = -t), (n = Math.floor(-t / 360)));
                                var m = Math.max(Math.min(b[0].progress, 1), -1);
                                let i = 0,
                                    s = 0,
                                    a = 0;
                                e % 4 == 0 ? ((i = 4 * -n * c), (a = 0)) : (e - 1) % 4 == 0 ? ((i = 0), (a = 4 * -n * c)) : (e - 2) % 4 == 0 ? ((i = c + 4 * n * c), (a = c)) : (e - 3) % 4 == 0 && ((i = -c), (a = 3 * c + 4 * c * n)),
                                    l && (i = -i),
                                    p || ((s = i), (i = 0));
                                var g = `rotateX(${p ? 0 : -t}deg) rotateY(${p ? t : 0}deg) translate3d(${i}px, ${s}px, ${a}px)`;
                                if ((m <= 1 && -1 < m && ((f = 90 * e + 90 * m), l && (f = 90 * -e - 90 * m)), b.transform(g), d.slideShadows)) {
                                    let e = p ? b.find(".swiper-slide-shadow-left") : b.find(".swiper-slide-shadow-top"),
                                        t = p ? b.find(".swiper-slide-shadow-right") : b.find(".swiper-slide-shadow-bottom");
                                    0 === e.length && ((e = A(`<div class="swiper-slide-shadow-${p ? "left" : "top"}"></div>`)), b.append(e)),
                                        0 === t.length && ((t = A(`<div class="swiper-slide-shadow-${p ? "right" : "bottom"}"></div>`)), b.append(t)),
                                        e.length && (e[0].style.opacity = Math.max(-m, 0)),
                                        t.length && (t[0].style.opacity = Math.max(m, 0));
                                }
                            }
                            t.css({ "-webkit-transform-origin": `50% 50% -${c / 2}px`, "transform-origin": `50% 50% -${c / 2}px` }),
                                d.shadow &&
                                    (p
                                        ? h.transform(`translate3d(0px, ${n / 2 + d.shadowOffset}px, ${-n / 2}px) rotateX(90deg) rotateZ(0deg) scale(${d.shadowScale})`)
                                        : ((v = Math.abs(f) - 90 * Math.floor(Math.abs(f) / 90)),
                                          (r = 1.5 - (Math.sin((2 * v * Math.PI) / 360) / 2 + Math.cos((2 * v * Math.PI) / 360) / 2)),
                                          (a = d.shadowScale),
                                          (v = d.shadowScale / r),
                                          (r = d.shadowOffset),
                                          h.transform(`scale3d(${a}, 1, ${v}) translate3d(0px, ${i / 2 + r}px, ${-i / 2 / v}px) rotateX(-90deg)`)));
                            var v = s.isSafari || s.isWebView ? -c / 2 : 0;
                            t.transform(`translate3d(0px,0,${v}px) rotateX(${y.isHorizontal() ? 0 : f}deg) rotateY(${y.isHorizontal() ? -f : 0}deg)`);
                        },
                        setTransition: (e) => {
                            const { $el: t, slides: n } = y;
                            n.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),
                                y.params.cubeEffect.shadow && !y.isHorizontal() && t.find(".swiper-cube-shadow").transition(e);
                        },
                        perspective: () => !0,
                        overwriteParams: () => ({ slidesPerView: 1, slidesPerGroup: 1, watchSlidesProgress: !0, resistanceRatio: 0, spaceBetween: 0, centeredSlides: !1, virtualTranslate: !0 }),
                    });
            },
            function ({ swiper: u, extendParams: e, on: t }) {
                e({ flipEffect: { slideShadows: !0, limitRotation: !0, transformEl: null } }),
                    j({
                        effect: "flip",
                        swiper: u,
                        on: t,
                        setTranslate: () => {
                            const { slides: r, rtlTranslate: o } = u;
                            var l = u.params.flipEffect;
                            for (let a = 0; a < r.length; a += 1) {
                                const d = r.eq(a);
                                let n = d[0].progress;
                                u.params.flipEffect.limitRotation && (n = Math.max(Math.min(d[0].progress, 1), -1));
                                var c = d[0].swiperSlideOffset;
                                let e = -180 * n,
                                    t = 0,
                                    i = u.params.cssMode ? -c - u.translate : -c,
                                    s = 0;
                                if ((u.isHorizontal() ? o && (e = -e) : ((s = i), (i = 0), (t = -e), (e = 0)), (d[0].style.zIndex = -Math.abs(Math.round(n)) + r.length), l.slideShadows)) {
                                    let e = u.isHorizontal() ? d.find(".swiper-slide-shadow-left") : d.find(".swiper-slide-shadow-top"),
                                        t = u.isHorizontal() ? d.find(".swiper-slide-shadow-right") : d.find(".swiper-slide-shadow-bottom");
                                    0 === e.length && (e = q(l, d, u.isHorizontal() ? "left" : "top")),
                                        0 === t.length && (t = q(l, d, u.isHorizontal() ? "right" : "bottom")),
                                        e.length && (e[0].style.opacity = Math.max(-n, 0)),
                                        t.length && (t[0].style.opacity = Math.max(n, 0));
                                }
                                c = `translate3d(${i}px, ${s}px, 0px) rotateX(${t}deg) rotateY(${e}deg)`;
                                const p = _(l, d);
                                p.transform(c);
                            }
                        },
                        setTransition: (e) => {
                            var t = u.params.flipEffect["transformEl"];
                            const n = t ? u.slides.find(t) : u.slides;
                            n.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), N({ swiper: u, duration: e, transformEl: t });
                        },
                        perspective: () => !0,
                        overwriteParams: () => ({ slidesPerView: 1, slidesPerGroup: 1, watchSlidesProgress: !0, spaceBetween: 0, virtualTranslate: !u.params.cssMode }),
                    });
            },
            function ({ swiper: i, extendParams: e, on: t }) {
                e({ coverflowEffect: { rotate: 50, stretch: 0, depth: 100, scale: 1, modifier: 1, slideShadows: !0, transformEl: null } }),
                    j({
                        effect: "coverflow",
                        swiper: i,
                        on: t,
                        setTranslate: () => {
                            const { width: e, height: t, slides: l, slidesSizesGrid: c } = i;
                            var d = i.params.coverflowEffect,
                                p = i.isHorizontal(),
                                n = i.translate,
                                u = p ? e / 2 - n : t / 2 - n,
                                f = p ? d.rotate : -d.rotate,
                                h = d.depth;
                            for (let o = 0, e = l.length; o < e; o += 1) {
                                const v = l.eq(o);
                                var m = c[o],
                                    g = ((u - v[0].swiperSlideOffset - m / 2) / m) * d.modifier;
                                let e = p ? f * g : 0,
                                    t = p ? 0 : f * g,
                                    n = -h * Math.abs(g),
                                    i = d.stretch;
                                "string" == typeof i && -1 !== i.indexOf("%") && (i = (parseFloat(d.stretch) / 100) * m);
                                let s = p ? 0 : i * g,
                                    a = p ? i * g : 0,
                                    r = 1 - (1 - d.scale) * Math.abs(g);
                                Math.abs(a) < 0.001 && (a = 0), Math.abs(s) < 0.001 && (s = 0), Math.abs(n) < 0.001 && (n = 0), Math.abs(e) < 0.001 && (e = 0), Math.abs(t) < 0.001 && (t = 0), Math.abs(r) < 0.001 && (r = 0);
                                m = `translate3d(${a}px,${s}px,${n}px)  rotateX(${t}deg) rotateY(${e}deg) scale(${r})`;
                                const b = _(d, v);
                                if ((b.transform(m), (v[0].style.zIndex = 1 - Math.abs(Math.round(g))), d.slideShadows)) {
                                    let e = p ? v.find(".swiper-slide-shadow-left") : v.find(".swiper-slide-shadow-top"),
                                        t = p ? v.find(".swiper-slide-shadow-right") : v.find(".swiper-slide-shadow-bottom");
                                    0 === e.length && (e = q(d, v, p ? "left" : "top")),
                                        0 === t.length && (t = q(d, v, p ? "right" : "bottom")),
                                        e.length && (e[0].style.opacity = 0 < g ? g : 0),
                                        t.length && (t[0].style.opacity = 0 < -g ? -g : 0);
                                }
                            }
                        },
                        setTransition: (e) => {
                            var t = i.params.coverflowEffect["transformEl"];
                            const n = t ? i.slides.find(t) : i.slides;
                            n.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e);
                        },
                        perspective: () => !0,
                        overwriteParams: () => ({ watchSlidesProgress: !0 }),
                    });
            },
            function ({ swiper: m, extendParams: e, on: t }) {
                e({
                    creativeEffect: {
                        transformEl: null,
                        limitProgress: 1,
                        shadowPerProgress: !1,
                        progressMultiplier: 1,
                        perspective: !0,
                        prev: { translate: [0, 0, 0], rotate: [0, 0, 0], opacity: 1, scale: 1 },
                        next: { translate: [0, 0, 0], rotate: [0, 0, 0], opacity: 1, scale: 1 },
                    },
                }),
                    j({
                        effect: "creative",
                        swiper: m,
                        on: t,
                        setTranslate: () => {
                            const i = m["slides"];
                            var s = m.params.creativeEffect;
                            const a = s["progressMultiplier"];
                            for (let t = 0; t < i.length; t += 1) {
                                const d = i.eq(t);
                                var r = d[0].progress;
                                const p = Math.min(Math.max(d[0].progress, -s.limitProgress), s.limitProgress);
                                var o = d[0].swiperSlideOffset;
                                const u = [m.params.cssMode ? -o - m.translate : -o, 0, 0],
                                    f = [0, 0, 0];
                                let e = !1;
                                m.isHorizontal() || ((u[1] = u[0]), (u[0] = 0));
                                let n = { translate: [0, 0, 0], rotate: [0, 0, 0], scale: 1, opacity: 1 };
                                p < 0 ? ((n = s.next), (e = !0)) : 0 < p && ((n = s.prev), (e = !0)),
                                    u.forEach((e, t) => {
                                        u[t] = `calc(${e}px + (${((t = n.translate[t]), "string" == typeof t ? t : `${t}px`)} * ${Math.abs(p * a)}))`;
                                    }),
                                    f.forEach((e, t) => {
                                        f[t] = n.rotate[t] * Math.abs(p * a);
                                    }),
                                    (d[0].style.zIndex = -Math.abs(Math.round(r)) + i.length);
                                var l = u.join(", "),
                                    c = `rotateX(${f[0]}deg) rotateY(${f[1]}deg) rotateZ(${f[2]}deg)`,
                                    o = p < 0 ? `scale(${1 + (1 - n.scale) * p * a})` : `scale(${1 - (1 - n.scale) * p * a})`,
                                    r = p < 0 ? 1 + (1 - n.opacity) * p * a : 1 - (1 - n.opacity) * p * a,
                                    c = `translate3d(${l}) ${c} ${o}`;
                                if ((e && n.shadow) || !e) {
                                    let e = d.children(".swiper-slide-shadow");
                                    0 === e.length && n.shadow && (e = q(s, d)), e.length && ((o = s.shadowPerProgress ? p * (1 / s.limitProgress) : p), (e[0].style.opacity = Math.min(Math.max(Math.abs(o), 0), 1)));
                                }
                                const h = _(s, d);
                                h.transform(c).css({ opacity: r }), n.origin && h.css("transform-origin", n.origin);
                            }
                        },
                        setTransition: (e) => {
                            var t = m.params.creativeEffect["transformEl"];
                            const n = t ? m.slides.find(t) : m.slides;
                            n.transition(e).find(".swiper-slide-shadow").transition(e), N({ swiper: m, duration: e, transformEl: t, allSlides: !0 });
                        },
                        perspective: () => m.params.creativeEffect.perspective,
                        overwriteParams: () => ({ watchSlidesProgress: !0, virtualTranslate: !m.params.cssMode }),
                    });
            },
            function ({ swiper: w, extendParams: e, on: t }) {
                e({ cardsEffect: { slideShadows: !0, transformEl: null } }),
                    j({
                        effect: "cards",
                        swiper: w,
                        on: t,
                        setTranslate: () => {
                            const { slides: o, activeIndex: l } = w;
                            var c = w.params.cardsEffect,
                                { startTranslate: d, isTouched: p } = w.touchEventsData,
                                u = w.translate;
                            for (let r = 0; r < o.length; r += 1) {
                                const y = o.eq(r);
                                var f = y[0].progress,
                                    h = Math.min(Math.max(f, -4), 4);
                                let e = y[0].swiperSlideOffset;
                                w.params.centeredSlides && !w.params.cssMode && w.$wrapperEl.transform(`translateX(${w.minTranslate()}px)`), w.params.centeredSlides && w.params.cssMode && (e -= o[0].swiperSlideOffset);
                                let t = w.params.cssMode ? -e - w.translate : -e,
                                    n = 0;
                                var m = -100 * Math.abs(h);
                                let i = 1,
                                    s = -2 * h,
                                    a = 8 - 0.75 * Math.abs(h);
                                var g = (r === l || r === l - 1) && 0 < h && h < 1 && (p || w.params.cssMode) && u < d,
                                    v = (r === l || r === l + 1) && h < 0 && -1 < h && (p || w.params.cssMode) && d < u;
                                (g || v) && ((v = (1 - Math.abs((Math.abs(h) - 0.5) / 0.5)) ** 0.5), (s += -28 * h * v), (i += -0.5 * v), (a += 96 * v), (n = `${-25 * v * Math.abs(h)}%`)),
                                    (t = h < 0 ? `calc(${t}px + (${a * Math.abs(h)}%))` : 0 < h ? `calc(${t}px + (-${a * Math.abs(h)}%))` : `${t}px`),
                                    w.isHorizontal() || ((b = n), (n = t), (t = b));
                                var b = h < 0 ? `${1 + (1 - i) * h}` : `${1 - (1 - i) * h}`,
                                    b = `
        translate3d(${t}, ${n}, ${m}px)
        rotateZ(${s}deg)
        scale(${b})
      `;
                                if (c.slideShadows) {
                                    let e = y.find(".swiper-slide-shadow");
                                    0 === e.length && (e = q(c, y)), e.length && (e[0].style.opacity = Math.min(Math.max((Math.abs(h) - 0.5) / 0.5, 0), 1));
                                }
                                y[0].style.zIndex = -Math.abs(Math.round(f)) + o.length;
                                const x = _(c, y);
                                x.transform(b);
                            }
                        },
                        setTransition: (e) => {
                            var t = w.params.cardsEffect["transformEl"];
                            const n = t ? w.slides.find(t) : w.slides;
                            n.transition(e).find(".swiper-slide-shadow").transition(e), N({ swiper: w, duration: e, transformEl: t });
                        },
                        perspective: () => !0,
                        overwriteParams: () => ({ watchSlidesProgress: !0, virtualTranslate: !w.params.cssMode }),
                    });
            },
        ];
        return z.use(H), z;
    }),
    (function (e) {
        "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? e(require("jquery")) : e(window.jQuery || window.Zepto);
    })(function (c) {
        function e() {}
        function d(e, t) {
            h.ev.on("mfp" + e + n, t);
        }
        function p(e, t, n, i) {
            var s = document.createElement("div");
            return (s.className = "mfp-" + e), n && (s.innerHTML = n), i ? t && t.appendChild(s) : ((s = c(s)), t && s.appendTo(t)), s;
        }
        function u(e, t) {
            h.ev.triggerHandler("mfp" + e, t), h.st.callbacks && ((e = e.charAt(0).toLowerCase() + e.slice(1)), h.st.callbacks[e] && h.st.callbacks[e].apply(h, c.isArray(t) ? t : [t]));
        }
        function f(e) {
            return (e === t && h.currTemplate.closeBtn) || ((h.currTemplate.closeBtn = c(h.st.closeMarkup.replace("%title%", h.st.tClose))), (t = e)), h.currTemplate.closeBtn;
        }
        function a() {
            c.magnificPopup.instance || ((h = new e()).init(), (c.magnificPopup.instance = h));
        }
        var h,
            i,
            m,
            s,
            g,
            t,
            o = "Close",
            l = "BeforeClose",
            v = "MarkupParse",
            n = ".mfp",
            b = "mfp-ready",
            r = "mfp-removing",
            y = "mfp-prevent-close",
            x = !!window.jQuery,
            w = c(window);
        (e.prototype = {
            constructor: e,
            init: function () {
                var e = navigator.appVersion;
                (h.isLowIE = h.isIE8 = document.all && !document.addEventListener),
                    (h.isAndroid = /android/gi.test(e)),
                    (h.isIOS = /iphone|ipad|ipod/gi.test(e)),
                    (h.supportsTransition = (function () {
                        var e = document.createElement("p").style,
                            t = ["ms", "O", "Moz", "Webkit"];
                        if (void 0 !== e.transition) return !0;
                        for (; t.length; ) if (t.pop() + "Transition" in e) return !0;
                        return !1;
                    })()),
                    (h.probablyMobile = h.isAndroid || h.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent)),
                    (m = c(document)),
                    (h.popupsCache = {});
            },
            open: function (e) {
                if (!1 === e.isObj) {
                    (h.items = e.items.toArray()), (h.index = 0);
                    for (var t, n = e.items, i = 0; i < n.length; i++)
                        if ((t = (t = n[i]).parsed ? t.el[0] : t) === e.el[0]) {
                            h.index = i;
                            break;
                        }
                } else (h.items = c.isArray(e.items) ? e.items : [e.items]), (h.index = e.index || 0);
                if (!h.isOpen) {
                    (h.types = []),
                        (g = ""),
                        e.mainEl && e.mainEl.length ? (h.ev = e.mainEl.eq(0)) : (h.ev = m),
                        e.key ? (h.popupsCache[e.key] || (h.popupsCache[e.key] = {}), (h.currTemplate = h.popupsCache[e.key])) : (h.currTemplate = {}),
                        (h.st = c.extend(!0, {}, c.magnificPopup.defaults, e)),
                        (h.fixedContentPos = "auto" === h.st.fixedContentPos ? !h.probablyMobile : h.st.fixedContentPos),
                        h.st.modal && ((h.st.closeOnContentClick = !1), (h.st.closeOnBgClick = !1), (h.st.showCloseBtn = !1), (h.st.enableEscapeKey = !1)),
                        h.bgOverlay ||
                            ((h.bgOverlay = p("bg").on("click.mfp", function () {
                                h.close();
                            })),
                            (h.wrap = p("wrap")
                                .attr("tabindex", -1)
                                .on("click.mfp", function (e) {
                                    h._checkIfClose(e.target) && h.close();
                                })),
                            (h.container = p("container", h.wrap))),
                        (h.contentContainer = p("content")),
                        h.st.preloader && (h.preloader = p("preloader", h.container, h.st.tLoading));
                    var s = c.magnificPopup.modules;
                    for (i = 0; i < s.length; i++) {
                        var a = (a = s[i]).charAt(0).toUpperCase() + a.slice(1);
                        h["init" + a].call(h);
                    }
                    u("BeforeOpen"),
                        h.st.showCloseBtn &&
                            (h.st.closeBtnInside
                                ? (d(v, function (e, t, n, i) {
                                      n.close_replaceWith = f(i.type);
                                  }),
                                  (g += " mfp-close-btn-in"))
                                : h.wrap.append(f())),
                        h.st.alignTop && (g += " mfp-align-top"),
                        h.fixedContentPos ? h.wrap.css({ overflow: h.st.overflowY, overflowX: "hidden", overflowY: h.st.overflowY }) : h.wrap.css({ top: w.scrollTop(), position: "absolute" }),
                        (!1 !== h.st.fixedBgPos && ("auto" !== h.st.fixedBgPos || h.fixedContentPos)) || h.bgOverlay.css({ height: m.height(), position: "absolute" }),
                        h.st.enableEscapeKey &&
                            m.on("keyup.mfp", function (e) {
                                27 === e.keyCode && h.close();
                            }),
                        w.on("resize.mfp", function () {
                            h.updateSize();
                        }),
                        h.st.closeOnContentClick || (g += " mfp-auto-cursor"),
                        g && h.wrap.addClass(g);
                    var r = (h.wH = w.height()),
                        o = {};
                    h.fixedContentPos && (!h._hasScrollBar(r) || ((l = h._getScrollbarSize()) && (o.marginRight = l))), h.fixedContentPos && (h.isIE7 ? c("body, html").css("overflow", "hidden") : (o.overflow = "hidden"));
                    var l = h.st.mainClass;
                    return (
                        h.isIE7 && (l += " mfp-ie7"),
                        l && h._addClassToMFP(l),
                        h.updateItemHTML(),
                        u("BuildControls"),
                        c("html").css(o),
                        h.bgOverlay.add(h.wrap).prependTo(h.st.prependTo || c(document.body)),
                        (h._lastFocusedEl = document.activeElement),
                        setTimeout(function () {
                            h.content ? (h._addClassToMFP(b), h._setFocus()) : h.bgOverlay.addClass(b), m.on("focusin.mfp", h._onFocusIn);
                        }, 16),
                        (h.isOpen = !0),
                        h.updateSize(r),
                        u("Open"),
                        e
                    );
                }
                h.updateItemHTML();
            },
            close: function () {
                h.isOpen &&
                    (u(l),
                    (h.isOpen = !1),
                    h.st.removalDelay && !h.isLowIE && h.supportsTransition
                        ? (h._addClassToMFP(r),
                          setTimeout(function () {
                              h._close();
                          }, h.st.removalDelay))
                        : h._close());
            },
            _close: function () {
                u(o);
                var e = r + " " + b + " ";
                h.bgOverlay.detach(),
                    h.wrap.detach(),
                    h.container.empty(),
                    h.st.mainClass && (e += h.st.mainClass + " "),
                    h._removeClassFromMFP(e),
                    h.fixedContentPos && ((e = { marginRight: "" }), h.isIE7 ? c("body, html").css("overflow", "") : (e.overflow = ""), c("html").css(e)),
                    m.off("keyup.mfp focusin.mfp"),
                    h.ev.off(n),
                    h.wrap.attr("class", "mfp-wrap").removeAttr("style"),
                    h.bgOverlay.attr("class", "mfp-bg"),
                    h.container.attr("class", "mfp-container"),
                    !h.st.showCloseBtn || (h.st.closeBtnInside && !0 !== h.currTemplate[h.currItem.type]) || (h.currTemplate.closeBtn && h.currTemplate.closeBtn.detach()),
                    h.st.autoFocusLast && h._lastFocusedEl && c(h._lastFocusedEl).focus(),
                    (h.currItem = null),
                    (h.content = null),
                    (h.currTemplate = null),
                    (h.prevHeight = 0),
                    u("AfterClose");
            },
            updateSize: function (e) {
                var t;
                h.isIOS ? ((t = document.documentElement.clientWidth / window.innerWidth), (t = window.innerHeight * t), h.wrap.css("height", t), (h.wH = t)) : (h.wH = e || w.height()),
                    h.fixedContentPos || h.wrap.css("height", h.wH),
                    u("Resize");
            },
            updateItemHTML: function () {
                var e = h.items[h.index];
                h.contentContainer.detach(), h.content && h.content.detach();
                var t = (e = !e.parsed ? h.parseEl(h.index) : e).type;
                u("BeforeChange", [h.currItem ? h.currItem.type : "", t]),
                    (h.currItem = e),
                    h.currTemplate[t] || ((n = !!h.st[t] && h.st[t].markup), u("FirstMarkupParse", n), (h.currTemplate[t] = !n || c(n))),
                    s && s !== e.type && h.container.removeClass("mfp-" + s + "-holder");
                var n = h["get" + t.charAt(0).toUpperCase() + t.slice(1)](e, h.currTemplate[t]);
                h.appendContent(n, t), (e.preloaded = !0), u("Change", e), (s = e.type), h.container.prepend(h.contentContainer), u("AfterChange");
            },
            appendContent: function (e, t) {
                (h.content = e) ? (h.st.showCloseBtn && h.st.closeBtnInside && !0 === h.currTemplate[t] ? h.content.find(".mfp-close").length || h.content.append(f()) : (h.content = e)) : (h.content = ""),
                    u("BeforeAppend"),
                    h.container.addClass("mfp-" + t + "-holder"),
                    h.contentContainer.append(h.content);
            },
            parseEl: function (e) {
                var t,
                    n = h.items[e];
                if ((n = n.tagName ? { el: c(n) } : ((t = n.type), { data: n, src: n.src })).el) {
                    for (var i = h.types, s = 0; s < i.length; s++)
                        if (n.el.hasClass("mfp-" + i[s])) {
                            t = i[s];
                            break;
                        }
                    (n.src = n.el.attr("data-mfp-src")), n.src || (n.src = n.el.attr("href"));
                }
                return (n.type = t || h.st.type || "inline"), (n.index = e), (n.parsed = !0), (h.items[e] = n), u("ElementParse", n), h.items[e];
            },
            addGroup: function (t, n) {
                function e(e) {
                    (e.mfpEl = this), h._openClick(e, t, n);
                }
                var i = "click.magnificPopup";
                ((n = n || {}).mainEl = t), n.items ? ((n.isObj = !0), t.off(i).on(i, e)) : ((n.isObj = !1), n.delegate ? t.off(i).on(i, n.delegate, e) : (n.items = t).off(i).on(i, e));
            },
            _openClick: function (e, t, n) {
                if ((void 0 !== n.midClick ? n : c.magnificPopup.defaults).midClick || !(2 === e.which || e.ctrlKey || e.metaKey || e.altKey || e.shiftKey)) {
                    var i = (void 0 !== n.disableOn ? n : c.magnificPopup.defaults).disableOn;
                    if (i)
                        if (c.isFunction(i)) {
                            if (!i.call(h)) return !0;
                        } else if (w.width() < i) return !0;
                    e.type && (e.preventDefault(), h.isOpen && e.stopPropagation()), (n.el = c(e.mfpEl)), n.delegate && (n.items = t.find(n.delegate)), h.open(n);
                }
            },
            updateStatus: function (e, t) {
                var n;
                h.preloader &&
                    (i !== e && h.container.removeClass("mfp-s-" + i),
                    (n = { status: e, text: (t = !t && "loading" === e ? h.st.tLoading : t) }),
                    u("UpdateStatus", n),
                    (e = n.status),
                    h.preloader.html((t = n.text)),
                    h.preloader.find("a").on("click", function (e) {
                        e.stopImmediatePropagation();
                    }),
                    h.container.addClass("mfp-s-" + e),
                    (i = e));
            },
            _checkIfClose: function (e) {
                if (!c(e).hasClass(y)) {
                    var t = h.st.closeOnContentClick,
                        n = h.st.closeOnBgClick;
                    if (t && n) return !0;
                    if (!h.content || c(e).hasClass("mfp-close") || (h.preloader && e === h.preloader[0])) return !0;
                    if (e === h.content[0] || c.contains(h.content[0], e)) {
                        if (t) return !0;
                    } else if (n && c.contains(document, e)) return !0;
                    return !1;
                }
            },
            _addClassToMFP: function (e) {
                h.bgOverlay.addClass(e), h.wrap.addClass(e);
            },
            _removeClassFromMFP: function (e) {
                this.bgOverlay.removeClass(e), h.wrap.removeClass(e);
            },
            _hasScrollBar: function (e) {
                return (h.isIE7 ? m.height() : document.body.scrollHeight) > (e || w.height());
            },
            _setFocus: function () {
                (h.st.focus ? h.content.find(h.st.focus).eq(0) : h.wrap).focus();
            },
            _onFocusIn: function (e) {
                if (e.target !== h.wrap[0] && !c.contains(h.wrap[0], e.target)) return h._setFocus(), !1;
            },
            _parseMarkup: function (s, e, t) {
                var a;
                t.data && (e = c.extend(t.data, e)),
                    u(v, [s, e, t]),
                    c.each(e, function (e, t) {
                        return (
                            void 0 === t ||
                            !1 === t ||
                            void (1 < (a = e.split("_")).length
                                ? 0 < (n = s.find(".mfp-" + a[0])).length &&
                                  ("replaceWith" === (i = a[1])
                                      ? n[0] !== t[0] && n.replaceWith(t)
                                      : "img" === i
                                      ? n.is("img")
                                          ? n.attr("src", t)
                                          : n.replaceWith(c("<img>").attr("src", t).attr("class", n.attr("class")))
                                      : n.attr(a[1], t))
                                : s.find(".mfp-" + e).html(t))
                        );
                        var n, i;
                    });
            },
            _getScrollbarSize: function () {
                var e;
                return (
                    void 0 === h.scrollbarSize &&
                        (((e = document.createElement("div")).style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;"),
                        document.body.appendChild(e),
                        (h.scrollbarSize = e.offsetWidth - e.clientWidth),
                        document.body.removeChild(e)),
                    h.scrollbarSize
                );
            },
        }),
            (c.magnificPopup = {
                instance: null,
                proto: e.prototype,
                modules: [],
                open: function (e, t) {
                    return a(), ((e = e ? c.extend(!0, {}, e) : {}).isObj = !0), (e.index = t || 0), this.instance.open(e);
                },
                close: function () {
                    return c.magnificPopup.instance && c.magnificPopup.instance.close();
                },
                registerModule: function (e, t) {
                    t.options && (c.magnificPopup.defaults[e] = t.options), c.extend(this.proto, t.proto), this.modules.push(e);
                },
                defaults: {
                    disableOn: 0,
                    key: null,
                    midClick: !1,
                    mainClass: "",
                    preloader: !0,
                    focus: "",
                    closeOnContentClick: !1,
                    closeOnBgClick: !0,
                    closeBtnInside: !0,
                    showCloseBtn: !0,
                    enableEscapeKey: !0,
                    modal: !1,
                    alignTop: !1,
                    removalDelay: 0,
                    prependTo: null,
                    fixedContentPos: "auto",
                    fixedBgPos: "auto",
                    overflowY: "auto",
                    closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
                    tClose: "Close (Esc)",
                    tLoading: "Loading...",
                    autoFocusLast: !0,
                },
            }),
            (c.fn.magnificPopup = function (e) {
                a();
                var t,
                    n,
                    i,
                    s = c(this);
                return (
                    "string" == typeof e
                        ? "open" === e
                            ? ((t = x ? s.data("magnificPopup") : s[0].magnificPopup),
                              (n = parseInt(arguments[1], 10) || 0),
                              (i = t.items ? t.items[n] : ((i = s), (i = t.delegate ? i.find(t.delegate) : i).eq(n))),
                              h._openClick({ mfpEl: i }, s, t))
                            : h.isOpen && h[e].apply(h, Array.prototype.slice.call(arguments, 1))
                        : ((e = c.extend(!0, {}, e)), x ? s.data("magnificPopup", e) : (s[0].magnificPopup = e), h.addGroup(s, e)),
                    s
                );
            });
        function C() {
            E && (S.after(E.addClass(T)).detach(), (E = null));
        }
        var T,
            S,
            E,
            $ = "inline";
        c.magnificPopup.registerModule($, {
            options: { hiddenClass: "hide", markup: "", tNotFound: "Content not found" },
            proto: {
                initInline: function () {
                    h.types.push($),
                        d(o + "." + $, function () {
                            C();
                        });
                },
                getInline: function (e, t) {
                    if ((C(), e.src)) {
                        var n,
                            i = h.st.inline,
                            s = c(e.src);
                        return (
                            s.length
                                ? ((n = s[0].parentNode) && n.tagName && (S || ((T = i.hiddenClass), (S = p(T)), (T = "mfp-" + T)), (E = s.after(S).detach().removeClass(T))), h.updateStatus("ready"))
                                : (h.updateStatus("error", i.tNotFound), (s = c("<div>"))),
                            (e.inlineElement = s)
                        );
                    }
                    return h.updateStatus("ready"), h._parseMarkup(t, {}, e), t;
                },
            },
        });
        function k() {
            P && c(document.body).removeClass(P);
        }
        function M() {
            k(), h.req && h.req.abort();
        }
        var P,
            I = "ajax";
        c.magnificPopup.registerModule(I, {
            options: { settings: null, cursor: "mfp-ajax-cur", tError: '<a href="%url%">The content</a> could not be loaded.' },
            proto: {
                initAjax: function () {
                    h.types.push(I), (P = h.st.ajax.cursor), d(o + "." + I, M), d("BeforeChange.ajax", M);
                },
                getAjax: function (i) {
                    P && c(document.body).addClass(P), h.updateStatus("loading");
                    var e = c.extend(
                        {
                            url: i.src,
                            success: function (e, t, n) {
                                n = { data: e, xhr: n };
                                u("ParseAjax", n),
                                    h.appendContent(c(n.data), I),
                                    (i.finished = !0),
                                    k(),
                                    h._setFocus(),
                                    setTimeout(function () {
                                        h.wrap.addClass(b);
                                    }, 16),
                                    h.updateStatus("ready"),
                                    u("AjaxContentAdded");
                            },
                            error: function () {
                                k(), (i.finished = i.loadError = !0), h.updateStatus("error", h.st.ajax.tError.replace("%url%", i.src));
                            },
                        },
                        h.st.ajax.settings
                    );
                    return (h.req = c.ajax(e)), "";
                },
            },
        });
        var A;
        c.magnificPopup.registerModule("image", {
            options: {
                markup:
                    '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
                cursor: "mfp-zoom-out-cur",
                titleSrc: "title",
                verticalFit: !0,
                tError: '<a href="%url%">The image</a> could not be loaded.',
            },
            proto: {
                initImage: function () {
                    var e = h.st.image,
                        t = ".image";
                    h.types.push("image"),
                        d("Open" + t, function () {
                            "image" === h.currItem.type && e.cursor && c(document.body).addClass(e.cursor);
                        }),
                        d(o + t, function () {
                            e.cursor && c(document.body).removeClass(e.cursor), w.off("resize.mfp");
                        }),
                        d("Resize" + t, h.resizeImage),
                        h.isLowIE && d("AfterChange", h.resizeImage);
                },
                resizeImage: function () {
                    var e,
                        t = h.currItem;
                    t && t.img && h.st.image.verticalFit && ((e = 0), h.isLowIE && (e = parseInt(t.img.css("padding-top"), 10) + parseInt(t.img.css("padding-bottom"), 10)), t.img.css("max-height", h.wH - e));
                },
                _onImageHasSize: function (e) {
                    e.img && ((e.hasSize = !0), A && clearInterval(A), (e.isCheckingImgSize = !1), u("ImageHasSize", e), e.imgHidden && (h.content && h.content.removeClass("mfp-loading"), (e.imgHidden = !1)));
                },
                findImageSize: function (t) {
                    function n(e) {
                        A && clearInterval(A),
                            (A = setInterval(function () {
                                0 < s.naturalWidth ? h._onImageHasSize(t) : (200 < i && clearInterval(A), 3 === ++i ? n(10) : 40 === i ? n(50) : 100 === i && n(500));
                            }, e));
                    }
                    var i = 0,
                        s = t.img[0];
                    n(1);
                },
                getImage: function (e, t) {
                    function n() {
                        e &&
                            (e.img[0].complete
                                ? (e.img.off(".mfploader"), e === h.currItem && (h._onImageHasSize(e), h.updateStatus("ready")), (e.hasSize = !0), (e.loaded = !0), u("ImageLoadComplete"))
                                : ++a < 200
                                ? setTimeout(n, 100)
                                : i());
                    }
                    function i() {
                        e && (e.img.off(".mfploader"), e === h.currItem && (h._onImageHasSize(e), h.updateStatus("error", r.tError.replace("%url%", e.src))), (e.hasSize = !0), (e.loaded = !0), (e.loadError = !0));
                    }
                    var s,
                        a = 0,
                        r = h.st.image,
                        o = t.find(".mfp-img");
                    return (
                        o.length &&
                            (((s = document.createElement("img")).className = "mfp-img"),
                            e.el && e.el.find("img").length && (s.alt = e.el.find("img").attr("alt")),
                            (e.img = c(s).on("load.mfploader", n).on("error.mfploader", i)),
                            (s.src = e.src),
                            o.is("img") && (e.img = e.img.clone()),
                            0 < (s = e.img[0]).naturalWidth ? (e.hasSize = !0) : s.width || (e.hasSize = !1)),
                        h._parseMarkup(
                            t,
                            {
                                title: (function (e) {
                                    if (e.data && void 0 !== e.data.title) return e.data.title;
                                    var t = h.st.image.titleSrc;
                                    if (t) {
                                        if (c.isFunction(t)) return t.call(h, e);
                                        if (e.el) return e.el.attr(t) || "";
                                    }
                                    return "";
                                })(e),
                                img_replaceWith: e.img,
                            },
                            e
                        ),
                        h.resizeImage(),
                        e.hasSize
                            ? (A && clearInterval(A), e.loadError ? (t.addClass("mfp-loading"), h.updateStatus("error", r.tError.replace("%url%", e.src))) : (t.removeClass("mfp-loading"), h.updateStatus("ready")))
                            : (h.updateStatus("loading"), (e.loading = !0), e.hasSize || ((e.imgHidden = !0), t.addClass("mfp-loading"), h.findImageSize(e))),
                        t
                    );
                },
            },
        });
        var L;
        c.magnificPopup.registerModule("zoom", {
            options: {
                enabled: !1,
                easing: "ease-in-out",
                duration: 300,
                opener: function (e) {
                    return e.is("img") ? e : e.find("img");
                },
            },
            proto: {
                initZoom: function () {
                    var e,
                        t,
                        n,
                        i,
                        s,
                        a,
                        r = h.st.zoom;
                    r.enabled &&
                        h.supportsTransition &&
                        ((t = r.duration),
                        (n = function (e) {
                            var t = e.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                                n = "all " + r.duration / 1e3 + "s " + r.easing,
                                i = { position: "fixed", zIndex: 9999, left: 0, top: 0, "-webkit-backface-visibility": "hidden" },
                                e = "transition";
                            return (i["-webkit-" + e] = i["-moz-" + e] = i["-o-" + e] = i[e] = n), t.css(i), t;
                        }),
                        (i = function () {
                            h.content.css("visibility", "visible");
                        }),
                        d("BuildControls.zoom", function () {
                            h._allowZoom() &&
                                (clearTimeout(s),
                                h.content.css("visibility", "hidden"),
                                (e = h._getItemToZoom())
                                    ? ((a = n(e)).css(h._getOffset()),
                                      h.wrap.append(a),
                                      (s = setTimeout(function () {
                                          a.css(h._getOffset(!0)),
                                              (s = setTimeout(function () {
                                                  i(),
                                                      setTimeout(function () {
                                                          a.remove(), (e = a = null), u("ZoomAnimationEnded");
                                                      }, 16);
                                              }, t));
                                      }, 16)))
                                    : i());
                        }),
                        d(l + ".zoom", function () {
                            if (h._allowZoom()) {
                                if ((clearTimeout(s), (h.st.removalDelay = t), !e)) {
                                    if (!(e = h._getItemToZoom())) return;
                                    a = n(e);
                                }
                                a.css(h._getOffset(!0)),
                                    h.wrap.append(a),
                                    h.content.css("visibility", "hidden"),
                                    setTimeout(function () {
                                        a.css(h._getOffset());
                                    }, 16);
                            }
                        }),
                        d(o + ".zoom", function () {
                            h._allowZoom() && (i(), a && a.remove(), (e = null));
                        }));
                },
                _allowZoom: function () {
                    return "image" === h.currItem.type;
                },
                _getItemToZoom: function () {
                    return !!h.currItem.hasSize && h.currItem.img;
                },
                _getOffset: function (e) {
                    var t = e ? h.currItem.img : h.st.zoom.opener(h.currItem.el || h.currItem),
                        n = t.offset(),
                        i = parseInt(t.css("padding-top"), 10),
                        e = parseInt(t.css("padding-bottom"), 10);
                    n.top -= c(window).scrollTop() - i;
                    i = { width: t.width(), height: (x ? t.innerHeight() : t[0].offsetHeight) - e - i };
                    return (L = void 0 === L ? void 0 !== document.createElement("p").style.MozTransform : L) ? (i["-moz-transform"] = i.transform = "translate(" + n.left + "px," + n.top + "px)") : ((i.left = n.left), (i.top = n.top)), i;
                },
            },
        });
        function z(e) {
            var t;
            !h.currTemplate[O] || ((t = h.currTemplate[O].find("iframe")).length && (e || (t[0].src = "//about:blank"), h.isIE8 && t.css("display", e ? "block" : "none")));
        }
        var O = "iframe";
        c.magnificPopup.registerModule(O, {
            options: {
                markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
                srcAction: "iframe_src",
                patterns: {
                    youtube: { index: "youtube.com", id: "v=", src: "//www.youtube.com/embed/%id%?autoplay=1" },
                    vimeo: { index: "vimeo.com/", id: "/", src: "//player.vimeo.com/video/%id%?autoplay=1" },
                    gmaps: { index: "//maps.google.", src: "%id%&output=embed" },
                },
            },
            proto: {
                initIframe: function () {
                    h.types.push(O),
                        d("BeforeChange", function (e, t, n) {
                            t !== n && (t === O ? z() : n === O && z(!0));
                        }),
                        d(o + "." + O, function () {
                            z();
                        });
                },
                getIframe: function (e, t) {
                    var n = e.src,
                        i = h.st.iframe;
                    c.each(i.patterns, function () {
                        if (-1 < n.indexOf(this.index)) return this.id && (n = "string" == typeof this.id ? n.substr(n.lastIndexOf(this.id) + this.id.length, n.length) : this.id.call(this, n)), (n = this.src.replace("%id%", n)), !1;
                    });
                    var s = {};
                    return i.srcAction && (s[i.srcAction] = n), h._parseMarkup(t, s, e), h.updateStatus("ready"), t;
                },
            },
        });
        function D(e) {
            var t = h.items.length;
            return t - 1 < e ? e - t : e < 0 ? t + e : e;
        }
        function j(e, t, n) {
            return e.replace(/%curr%/gi, t + 1).replace(/%total%/gi, n);
        }
        c.magnificPopup.registerModule("gallery", {
            options: {
                enabled: !1,
                arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
                preload: [0, 2],
                navigateByImgClick: !0,
                arrows: !0,
                tPrev: "Previous (Left arrow key)",
                tNext: "Next (Right arrow key)",
                tCounter: "%curr% of %total%",
            },
            proto: {
                initGallery: function () {
                    var a = h.st.gallery,
                        e = ".mfp-gallery";
                    if (((h.direction = !0), !a || !a.enabled)) return !1;
                    (g += " mfp-gallery"),
                        d("Open" + e, function () {
                            a.navigateByImgClick &&
                                h.wrap.on("click" + e, ".mfp-img", function () {
                                    if (1 < h.items.length) return h.next(), !1;
                                }),
                                m.on("keydown" + e, function (e) {
                                    37 === e.keyCode ? h.prev() : 39 === e.keyCode && h.next();
                                });
                        }),
                        d("UpdateStatus" + e, function (e, t) {
                            t.text && (t.text = j(t.text, h.currItem.index, h.items.length));
                        }),
                        d(v + e, function (e, t, n, i) {
                            var s = h.items.length;
                            n.counter = 1 < s ? j(a.tCounter, i.index, s) : "";
                        }),
                        d("BuildControls" + e, function () {
                            var e, t;
                            1 < h.items.length &&
                                a.arrows &&
                                !h.arrowLeft &&
                                ((t = a.arrowMarkup),
                                (e = h.arrowLeft = c(t.replace(/%title%/gi, a.tPrev).replace(/%dir%/gi, "left")).addClass(y)),
                                (t = h.arrowRight = c(t.replace(/%title%/gi, a.tNext).replace(/%dir%/gi, "right")).addClass(y)),
                                e.click(function () {
                                    h.prev();
                                }),
                                t.click(function () {
                                    h.next();
                                }),
                                h.container.append(e.add(t)));
                        }),
                        d("Change" + e, function () {
                            h._preloadTimeout && clearTimeout(h._preloadTimeout),
                                (h._preloadTimeout = setTimeout(function () {
                                    h.preloadNearbyImages(), (h._preloadTimeout = null);
                                }, 16));
                        }),
                        d(o + e, function () {
                            m.off(e), h.wrap.off("click" + e), (h.arrowRight = h.arrowLeft = null);
                        });
                },
                next: function () {
                    (h.direction = !0), (h.index = D(h.index + 1)), h.updateItemHTML();
                },
                prev: function () {
                    (h.direction = !1), (h.index = D(h.index - 1)), h.updateItemHTML();
                },
                goTo: function (e) {
                    (h.direction = e >= h.index), (h.index = e), h.updateItemHTML();
                },
                preloadNearbyImages: function () {
                    for (var e = h.st.gallery.preload, t = Math.min(e[0], h.items.length), n = Math.min(e[1], h.items.length), i = 1; i <= (h.direction ? n : t); i++) h._preloadItem(h.index + i);
                    for (i = 1; i <= (h.direction ? t : n); i++) h._preloadItem(h.index - i);
                },
                _preloadItem: function (e) {
                    var t;
                    (e = D(e)),
                        h.items[e].preloaded ||
                            ((t = h.items[e]).parsed || (t = h.parseEl(e)),
                            u("LazyLoad", t),
                            "image" === t.type &&
                                (t.img = c('<img class="mfp-img" />')
                                    .on("load.mfploader", function () {
                                        t.hasSize = !0;
                                    })
                                    .on("error.mfploader", function () {
                                        (t.hasSize = !0), (t.loadError = !0), u("LazyLoadError", t);
                                    })
                                    .attr("src", t.src)),
                            (t.preloaded = !0));
                },
            },
        });
        var _ = "retina";
        c.magnificPopup.registerModule(_, {
            options: {
                replaceSrc: function (e) {
                    return e.src.replace(/\.\w+$/, function (e) {
                        return "@2x" + e;
                    });
                },
                ratio: 1,
            },
            proto: {
                initRetina: function () {
                    var n, i;
                    1 < window.devicePixelRatio &&
                        ((n = h.st.retina),
                        (i = n.ratio),
                        1 < (i = isNaN(i) ? i() : i) &&
                            (d("ImageHasSize." + _, function (e, t) {
                                t.img.css({ "max-width": t.img[0].naturalWidth / i, width: "100%" });
                            }),
                            d("ElementParse." + _, function (e, t) {
                                t.src = n.replaceSrc(t, i);
                            })));
                },
            },
        }),
            a();
    }),
    (function (l, r, h, m) {
        "use strict";
        var s, a, o, d, t, c, u, p, i, e, n, f, g;
        function v(e, t) {
            var n,
                i,
                s,
                a = [],
                r = 0;
            (e && e.isDefaultPrevented()) ||
                (e.preventDefault(),
                (t = t || {}),
                (n = (t = e && e.data ? p(e.data.options, t) : t).$target || h(e.currentTarget).trigger("blur")),
                ((s = h.fancybox.getInstance()) && s.$trigger && s.$trigger.is(n)) ||
                    ((a = t.selector ? h(t.selector) : (i = n.attr("data-fancybox") || "") ? ((a = e.data ? e.data.items : []).length ? a.filter('[data-fancybox="' + i + '"]') : h('[data-fancybox="' + i + '"]')) : [n]),
                    (r = h(a).index(n)),
                    ((s = h.fancybox.open(a, t, (r = r < 0 ? 0 : r))).$trigger = n)));
        }
        (l.console = l.console || { info: function (e) {} }),
            h &&
                (h.fn.fancybox
                    ? console.info("fancyBox already initialized")
                    : ((e = {
                          closeExisting: !1,
                          loop: !1,
                          gutter: 50,
                          keyboard: !0,
                          preventCaptionOverlap: !0,
                          arrows: !0,
                          infobar: !0,
                          smallBtn: "auto",
                          toolbar: "auto",
                          buttons: ["zoom", "slideShow", "thumbs", "close"],
                          idleTime: 3,
                          protect: !1,
                          modal: !1,
                          image: { preload: !1 },
                          ajax: { settings: { data: { fancybox: !0 } } },
                          iframe: {
                              tpl: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" allowfullscreen="allowfullscreen" allow="autoplay; fullscreen" src=""></iframe>',
                              preload: !0,
                              css: {},
                              attr: { scrolling: "auto" },
                          },
                          video: {
                              tpl:
                                  '<video class="fancybox-video" controls controlsList="nodownload" poster="{{poster}}"><source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos, <a href="{{src}}">download</a> and watch with your favorite video player!</video>',
                              format: "",
                              autoStart: !0,
                          },
                          defaultType: "image",
                          animationEffect: "zoom",
                          animationDuration: 366,
                          zoomOpacity: "auto",
                          transitionEffect: "fade",
                          transitionDuration: 366,
                          slideClass: "",
                          baseClass: "",
                          baseTpl:
                              '<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><div class="fancybox-toolbar">{{buttons}}</div><div class="fancybox-navigation">{{arrows}}</div><div class="fancybox-stage"></div><div class="fancybox-caption"><div class="fancybox-caption__body"></div></div></div></div>',
                          spinnerTpl: '<div class="fancybox-loading"></div>',
                          errorTpl: '<div class="fancybox-error"><p>{{ERROR}}</p></div>',
                          btnTpl: {
                              download:
                                  '<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}" href="javascript:;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.62 17.09V19H5.38v-1.91zm-2.97-6.96L17 11.45l-5 4.87-5-4.87 1.36-1.32 2.68 2.64V5h1.92v7.77z"/></svg></a>',
                              zoom:
                                  '<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.7 17.3l-3-3a5.9 5.9 0 0 0-.6-7.6 5.9 5.9 0 0 0-8.4 0 5.9 5.9 0 0 0 0 8.4 5.9 5.9 0 0 0 7.7.7l3 3a1 1 0 0 0 1.3 0c.4-.5.4-1 0-1.5zM8.1 13.8a4 4 0 0 1 0-5.7 4 4 0 0 1 5.7 0 4 4 0 0 1 0 5.7 4 4 0 0 1-5.7 0z"/></svg></button>',
                              close:
                                  '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"/></svg></button>',
                              arrowLeft:
                                  '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.28 15.7l-1.34 1.37L5 12l4.94-5.07 1.34 1.38-2.68 2.72H19v1.94H8.6z"/></svg></div></button>',
                              arrowRight:
                                  '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.4 12.97l-2.68 2.72 1.34 1.38L19 12l-4.94-5.07-1.34 1.38 2.68 2.72H5v1.94z"/></svg></div></button>',
                              smallBtn:
                                  '<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24"><path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"/></svg></button>',
                          },
                          parentEl: "body",
                          hideScrollbar: !0,
                          autoFocus: !0,
                          backFocus: !0,
                          trapFocus: !0,
                          fullScreen: { autoStart: !1 },
                          touch: { vertical: !0, momentum: !0 },
                          hash: null,
                          media: {},
                          slideShow: { autoStart: !1, speed: 3e3 },
                          thumbs: { autoStart: !1, hideOnClose: !0, parentEl: ".fancybox-container", axis: "y" },
                          wheel: "auto",
                          onInit: h.noop,
                          beforeLoad: h.noop,
                          afterLoad: h.noop,
                          beforeShow: h.noop,
                          afterShow: h.noop,
                          beforeClose: h.noop,
                          afterClose: h.noop,
                          onActivate: h.noop,
                          onDeactivate: h.noop,
                          clickContent: function (e, t) {
                              return "image" === e.type && "zoom";
                          },
                          clickSlide: "close",
                          clickOutside: "close",
                          dblclickContent: !1,
                          dblclickSlide: !1,
                          dblclickOutside: !1,
                          mobile: {
                              preventCaptionOverlap: !1,
                              idleTime: !1,
                              clickContent: function (e, t) {
                                  return "image" === e.type && "toggleControls";
                              },
                              clickSlide: function (e, t) {
                                  return "image" === e.type ? "toggleControls" : "close";
                              },
                              dblclickContent: function (e, t) {
                                  return "image" === e.type && "zoom";
                              },
                              dblclickSlide: function (e, t) {
                                  return "image" === e.type && "zoom";
                              },
                          },
                          lang: "en",
                          i18n: {
                              en: {
                                  CLOSE: "Close",
                                  NEXT: "Next",
                                  PREV: "Previous",
                                  ERROR: "The requested content cannot be loaded. <br/> Please try again later.",
                                  PLAY_START: "Start slideshow",
                                  PLAY_STOP: "Pause slideshow",
                                  FULL_SCREEN: "Full screen",
                                  THUMBS: "Thumbnails",
                                  DOWNLOAD: "Download",
                                  SHARE: "Share",
                                  ZOOM: "Zoom",
                              },
                              de: {
                                  CLOSE: "Schlie&szlig;en",
                                  NEXT: "Weiter",
                                  PREV: "Zur&uuml;ck",
                                  ERROR: "Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es sp&auml;ter nochmal.",
                                  PLAY_START: "Diaschau starten",
                                  PLAY_STOP: "Diaschau beenden",
                                  FULL_SCREEN: "Vollbild",
                                  THUMBS: "Vorschaubilder",
                                  DOWNLOAD: "Herunterladen",
                                  SHARE: "Teilen",
                                  ZOOM: "Vergr&ouml;&szlig;ern",
                              },
                          },
                      }),
                      (s = h(l)),
                      (a = h(r)),
                      (o = 0),
                      (d =
                          l.requestAnimationFrame ||
                          l.webkitRequestAnimationFrame ||
                          l.mozRequestAnimationFrame ||
                          l.oRequestAnimationFrame ||
                          function (e) {
                              return l.setTimeout(e, 1e3 / 60);
                          }),
                      (t =
                          l.cancelAnimationFrame ||
                          l.webkitCancelAnimationFrame ||
                          l.mozCancelAnimationFrame ||
                          l.oCancelAnimationFrame ||
                          function (e) {
                              l.clearTimeout(e);
                          }),
                      (c = (function () {
                          var e,
                              t = r.createElement("fakeelement"),
                              n = { transition: "transitionend", OTransition: "oTransitionEnd", MozTransition: "transitionend", WebkitTransition: "webkitTransitionEnd" };
                          for (e in n) if (t.style[e] !== m) return n[e];
                          return "transitionend";
                      })()),
                      (u = function (e) {
                          return e && e.length && e[0].offsetHeight;
                      }),
                      (p = function (e, t) {
                          var n = h.extend(!0, {}, e, t);
                          return (
                              h.each(t, function (e, t) {
                                  h.isArray(t) && (n[e] = t);
                              }),
                              n
                          );
                      }),
                      (i = function (e, t, n) {
                          var i = this;
                          (i.opts = p({ index: n }, h.fancybox.defaults)),
                              h.isPlainObject(t) && (i.opts = p(i.opts, t)),
                              h.fancybox.isMobile && (i.opts = p(i.opts, i.opts.mobile)),
                              (i.id = i.opts.id || ++o),
                              (i.currIndex = parseInt(i.opts.index, 10) || 0),
                              (i.prevIndex = null),
                              (i.prevPos = null),
                              (i.currPos = 0),
                              (i.firstRun = !0),
                              (i.group = []),
                              (i.slides = {}),
                              i.addContent(e),
                              i.group.length && i.init();
                      }),
                      h.extend(i.prototype, {
                          init: function () {
                              var t,
                                  n,
                                  i = this,
                                  s = i.group[i.currIndex].opts;
                              s.closeExisting && h.fancybox.close(!0),
                                  h("body").addClass("fancybox-active"),
                                  !h.fancybox.getInstance() &&
                                      !1 !== s.hideScrollbar &&
                                      !h.fancybox.isMobile &&
                                      r.body.scrollHeight > l.innerHeight &&
                                      (h("head").append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar{margin-right:' + (l.innerWidth - r.documentElement.clientWidth) + "px;}</style>"),
                                      h("body").addClass("compensate-for-scrollbar")),
                                  (n = ""),
                                  h.each(s.buttons, function (e, t) {
                                      n += s.btnTpl[t] || "";
                                  }),
                                  (t = h(i.translate(i, s.baseTpl.replace("{{buttons}}", n).replace("{{arrows}}", s.btnTpl.arrowLeft + s.btnTpl.arrowRight)))
                                      .attr("id", "fancybox-container-" + i.id)
                                      .addClass(s.baseClass)
                                      .data("FancyBox", i)
                                      .appendTo(s.parentEl)),
                                  (i.$refs = { container: t }),
                                  ["bg", "inner", "infobar", "toolbar", "stage", "caption", "navigation"].forEach(function (e) {
                                      i.$refs[e] = t.find(".fancybox-" + e);
                                  }),
                                  i.trigger("onInit"),
                                  i.activate(),
                                  i.jumpTo(i.currIndex);
                          },
                          translate: function (e, t) {
                              var n = e.opts.i18n[e.opts.lang] || e.opts.i18n.en;
                              return t.replace(/\{\{(\w+)\}\}/g, function (e, t) {
                                  return n[t] === m ? e : n[t];
                              });
                          },
                          addContent: function (e) {
                              var o = this,
                                  e = h.makeArray(e);
                              h.each(e, function (e, t) {
                                  var n,
                                      i,
                                      s,
                                      a = {},
                                      r = {};
                                  h.isPlainObject(t)
                                      ? (r = (a = t).opts || t)
                                      : "object" === h.type(t) && h(t).length
                                      ? ((r = (i = h(t)).data() || {}), ((r = h.extend(!0, {}, r, r.options)).$orig = i), (a.src = o.opts.src || r.src || i.attr("href")), a.type || a.src || ((a.type = "inline"), (a.src = t)))
                                      : (a = { type: "html", src: t + "" }),
                                      (a.opts = h.extend(!0, {}, o.opts, r)),
                                      h.isArray(r.buttons) && (a.opts.buttons = r.buttons),
                                      h.fancybox.isMobile && a.opts.mobile && (a.opts = p(a.opts, a.opts.mobile)),
                                      (n = a.type || a.opts.type),
                                      (i = a.src || ""),
                                      !n &&
                                          i &&
                                          ((r = i.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i))
                                              ? ((n = "video"), a.opts.video.format || (a.opts.video.format = "video/" + ("ogv" === r[1] ? "ogg" : r[1])))
                                              : i.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i)
                                              ? (n = "image")
                                              : i.match(/\.(pdf)((\?|#).*)?$/i)
                                              ? (a = h.extend(!0, a, { contentType: "pdf", opts: { iframe: { preload: !(n = "iframe") } } }))
                                              : "#" === i.charAt(0) && (n = "inline")),
                                      n ? (a.type = n) : o.trigger("objectNeedsType", a),
                                      a.contentType || (a.contentType = -1 < h.inArray(a.type, ["html", "inline", "ajax"]) ? "html" : a.type),
                                      (a.index = o.group.length),
                                      "auto" == a.opts.smallBtn && (a.opts.smallBtn = -1 < h.inArray(a.type, ["html", "inline", "ajax"])),
                                      "auto" === a.opts.toolbar && (a.opts.toolbar = !a.opts.smallBtn),
                                      (a.$thumb = a.opts.$thumb || null),
                                      a.opts.$trigger && a.index === o.opts.index && ((a.$thumb = a.opts.$trigger.find("img:first")), a.$thumb.length && (a.opts.$orig = a.opts.$trigger)),
                                      (a.$thumb && a.$thumb.length) || !a.opts.$orig || (a.$thumb = a.opts.$orig.find("img:first")),
                                      a.$thumb && !a.$thumb.length && (a.$thumb = null),
                                      (a.thumb = a.opts.thumb || (a.$thumb ? a.$thumb[0].src : null)),
                                      "function" === h.type(a.opts.caption) && (a.opts.caption = a.opts.caption.apply(t, [o, a])),
                                      "function" === h.type(o.opts.caption) && (a.opts.caption = o.opts.caption.apply(t, [o, a])),
                                      a.opts.caption instanceof h || (a.opts.caption = a.opts.caption === m ? "" : a.opts.caption + ""),
                                      "ajax" === a.type && 1 < (s = i.split(/\s+/, 2)).length && ((a.src = s.shift()), (a.opts.filter = s.shift())),
                                      a.opts.modal &&
                                          (a.opts = h.extend(!0, a.opts, {
                                              trapFocus: !0,
                                              infobar: 0,
                                              toolbar: 0,
                                              smallBtn: 0,
                                              keyboard: 0,
                                              slideShow: 0,
                                              fullScreen: 0,
                                              thumbs: 0,
                                              touch: 0,
                                              clickContent: !1,
                                              clickSlide: !1,
                                              clickOutside: !1,
                                              dblclickContent: !1,
                                              dblclickSlide: !1,
                                              dblclickOutside: !1,
                                          })),
                                      o.group.push(a);
                              }),
                                  Object.keys(o.slides).length && (o.updateControls(), (e = o.Thumbs) && e.isActive && (e.create(), e.focus()));
                          },
                          addEvents: function () {
                              var i = this;
                              i.removeEvents(),
                                  i.$refs.container
                                      .on("click.fb-close", "[data-fancybox-close]", function (e) {
                                          e.stopPropagation(), e.preventDefault(), i.close(e);
                                      })
                                      .on("touchstart.fb-prev click.fb-prev", "[data-fancybox-prev]", function (e) {
                                          e.stopPropagation(), e.preventDefault(), i.previous();
                                      })
                                      .on("touchstart.fb-next click.fb-next", "[data-fancybox-next]", function (e) {
                                          e.stopPropagation(), e.preventDefault(), i.next();
                                      })
                                      .on("click.fb", "[data-fancybox-zoom]", function (e) {
                                          i[i.isScaledDown() ? "scaleToActual" : "scaleToFit"]();
                                      }),
                                  s.on("orientationchange.fb resize.fb", function (e) {
                                      e && e.originalEvent && "resize" === e.originalEvent.type
                                          ? (i.requestId && t(i.requestId),
                                            (i.requestId = d(function () {
                                                i.update(e);
                                            })))
                                          : (i.current && "iframe" === i.current.type && i.$refs.stage.hide(),
                                            setTimeout(
                                                function () {
                                                    i.$refs.stage.show(), i.update(e);
                                                },
                                                h.fancybox.isMobile ? 600 : 250
                                            ));
                                  }),
                                  a.on("keydown.fb", function (e) {
                                      var t = (h.fancybox ? h.fancybox.getInstance() : null).current,
                                          n = e.keyCode || e.which;
                                      if (9 != n) {
                                          if (!(!t.opts.keyboard || e.ctrlKey || e.altKey || e.shiftKey || h(e.target).is("input,textarea,video,audio,select")))
                                              return 8 === n || 27 === n
                                                  ? (e.preventDefault(), void i.close(e))
                                                  : 37 === n || 38 === n
                                                  ? (e.preventDefault(), void i.previous())
                                                  : 39 === n || 40 === n
                                                  ? (e.preventDefault(), void i.next())
                                                  : void i.trigger("afterKeydown", e, n);
                                      } else t.opts.trapFocus && i.focus(e);
                                  }),
                                  i.group[i.currIndex].opts.idleTime &&
                                      ((i.idleSecondsCounter = 0),
                                      a.on("mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle", function (e) {
                                          (i.idleSecondsCounter = 0), i.isIdle && i.showControls(), (i.isIdle = !1);
                                      }),
                                      (i.idleInterval = l.setInterval(function () {
                                          i.idleSecondsCounter++, i.idleSecondsCounter >= i.group[i.currIndex].opts.idleTime && !i.isDragging && ((i.isIdle = !0), (i.idleSecondsCounter = 0), i.hideControls());
                                      }, 1e3)));
                          },
                          removeEvents: function () {
                              s.off("orientationchange.fb resize.fb"),
                                  a.off("keydown.fb .fb-idle"),
                                  this.$refs.container.off(".fb-close .fb-prev .fb-next"),
                                  this.idleInterval && (l.clearInterval(this.idleInterval), (this.idleInterval = null));
                          },
                          previous: function (e) {
                              return this.jumpTo(this.currPos - 1, e);
                          },
                          next: function (e) {
                              return this.jumpTo(this.currPos + 1, e);
                          },
                          jumpTo: function (e, i) {
                              var t,
                                  n,
                                  s,
                                  a,
                                  r,
                                  o,
                                  l,
                                  c,
                                  d = this,
                                  p = d.group.length;
                              if (!(d.isDragging || d.isClosing || (d.isAnimating && d.firstRun)))
                                  return (
                                      (e = parseInt(e, 10)),
                                      !(!(n = (d.current || d).opts.loop) && (e < 0 || p <= e)) &&
                                          ((t = d.firstRun = !Object.keys(d.slides).length),
                                          (a = d.current),
                                          (d.prevIndex = d.currIndex),
                                          (d.prevPos = d.currPos),
                                          (s = d.createSlide(e)),
                                          1 < p && ((n || s.index < p - 1) && d.createSlide(e + 1), (n || 0 < s.index) && d.createSlide(e - 1)),
                                          (d.current = s),
                                          (d.currIndex = s.index),
                                          (d.currPos = s.pos),
                                          d.trigger("beforeShow", t),
                                          d.updateControls(),
                                          (s.forcedDuration = m),
                                          h.isNumeric(i) ? (s.forcedDuration = i) : (i = s.opts[t ? "animationDuration" : "transitionDuration"]),
                                          (i = parseInt(i, 10)),
                                          (e = d.isMoved(s)),
                                          s.$slide.addClass("fancybox-slide--current"),
                                          t
                                              ? (s.opts.animationEffect && i && d.$refs.container.css("transition-duration", i + "ms"), d.$refs.container.addClass("fancybox-is-open").trigger("focus"), d.loadSlide(s))
                                              : ((r = h.fancybox.getTranslate(a.$slide)),
                                                (o = h.fancybox.getTranslate(d.$refs.stage)),
                                                h.each(d.slides, function (e, t) {
                                                    h.fancybox.stop(t.$slide, !0);
                                                }),
                                                a.pos !== s.pos && (a.isComplete = !1),
                                                a.$slide.removeClass("fancybox-slide--complete fancybox-slide--current"),
                                                e
                                                    ? ((c = r.left - (a.pos * r.width + a.pos * a.opts.gutter)),
                                                      h.each(d.slides, function (e, t) {
                                                          t.$slide.removeClass("fancybox-animated").removeClass(function (e, t) {
                                                              return (t.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ");
                                                          });
                                                          var n = t.pos * r.width + t.pos * t.opts.gutter;
                                                          h.fancybox.setTranslate(t.$slide, { top: 0, left: n - o.left + c }),
                                                              t.pos !== s.pos && t.$slide.addClass("fancybox-slide--" + (t.pos > s.pos ? "next" : "previous")),
                                                              u(t.$slide),
                                                              h.fancybox.animate(t.$slide, { top: 0, left: (t.pos - s.pos) * r.width + (t.pos - s.pos) * t.opts.gutter }, i, function () {
                                                                  t.$slide.css({ transform: "", opacity: "" }).removeClass("fancybox-slide--next fancybox-slide--previous"), t.pos === d.currPos && d.complete();
                                                              });
                                                      }))
                                                    : i &&
                                                      s.opts.transitionEffect &&
                                                      ((l = "fancybox-animated fancybox-fx-" + s.opts.transitionEffect),
                                                      a.$slide.addClass("fancybox-slide--" + (a.pos > s.pos ? "next" : "previous")),
                                                      h.fancybox.animate(
                                                          a.$slide,
                                                          l,
                                                          i,
                                                          function () {
                                                              a.$slide.removeClass(l).removeClass("fancybox-slide--next fancybox-slide--previous");
                                                          },
                                                          !1
                                                      )),
                                                s.isLoaded ? d.revealContent(s) : d.loadSlide(s)),
                                          void d.preload("image"))
                                  );
                          },
                          createSlide: function (e) {
                              var t,
                                  n = this,
                                  i = e % n.group.length;
                              return (
                                  (i = i < 0 ? n.group.length + i : i),
                                  !n.slides[e] &&
                                      n.group[i] &&
                                      ((t = h('<div class="fancybox-slide"></div>').appendTo(n.$refs.stage)), (n.slides[e] = h.extend(!0, {}, n.group[i], { pos: e, $slide: t, isLoaded: !1 })), n.updateSlide(n.slides[e])),
                                  n.slides[e]
                              );
                          },
                          scaleToActual: function (e, t, n) {
                              var i,
                                  s,
                                  a,
                                  r,
                                  o = this,
                                  l = o.current,
                                  c = l.$content,
                                  d = h.fancybox.getTranslate(l.$slide).width,
                                  p = h.fancybox.getTranslate(l.$slide).height,
                                  u = l.width,
                                  f = l.height;
                              o.isAnimating ||
                                  o.isMoved() ||
                                  !c ||
                                  "image" != l.type ||
                                  !l.isLoaded ||
                                  l.hasError ||
                                  ((o.isAnimating = !0),
                                  h.fancybox.stop(c),
                                  (e = e === m ? 0.5 * d : e),
                                  (t = t === m ? 0.5 * p : t),
                                  ((i = h.fancybox.getTranslate(c)).top -= h.fancybox.getTranslate(l.$slide).top),
                                  (i.left -= h.fancybox.getTranslate(l.$slide).left),
                                  (a = u / i.width),
                                  (r = f / i.height),
                                  (s = 0.5 * d - 0.5 * u),
                                  (l = 0.5 * p - 0.5 * f),
                                  d < u && (s = 0 < (s = i.left * a - (e * a - e)) ? 0 : s) < d - u && (s = d - u),
                                  p < f && (l = 0 < (l = i.top * r - (t * r - t)) ? 0 : l) < p - f && (l = p - f),
                                  o.updateCursor(u, f),
                                  h.fancybox.animate(c, { top: l, left: s, scaleX: a, scaleY: r }, n || 366, function () {
                                      o.isAnimating = !1;
                                  }),
                                  o.SlideShow && o.SlideShow.isActive && o.SlideShow.stop());
                          },
                          scaleToFit: function (e) {
                              var t = this,
                                  n = t.current,
                                  i = n.$content;
                              t.isAnimating ||
                                  t.isMoved() ||
                                  !i ||
                                  "image" != n.type ||
                                  !n.isLoaded ||
                                  n.hasError ||
                                  ((t.isAnimating = !0),
                                  h.fancybox.stop(i),
                                  (n = t.getFitPos(n)),
                                  t.updateCursor(n.width, n.height),
                                  h.fancybox.animate(i, { top: n.top, left: n.left, scaleX: n.width / i.width(), scaleY: n.height / i.height() }, e || 366, function () {
                                      t.isAnimating = !1;
                                  }));
                          },
                          getFitPos: function (e) {
                              var t,
                                  n,
                                  i = e.$content,
                                  s = e.$slide,
                                  a = e.width || e.opts.width,
                                  r = e.height || e.opts.height,
                                  o = {};
                              return (
                                  !!(e.isLoaded && i && i.length) &&
                                  ((t = h.fancybox.getTranslate(this.$refs.stage).width),
                                  (n = h.fancybox.getTranslate(this.$refs.stage).height),
                                  (t -= parseFloat(s.css("paddingLeft")) + parseFloat(s.css("paddingRight")) + parseFloat(i.css("marginLeft")) + parseFloat(i.css("marginRight"))),
                                  (n -= parseFloat(s.css("paddingTop")) + parseFloat(s.css("paddingBottom")) + parseFloat(i.css("marginTop")) + parseFloat(i.css("marginBottom"))),
                                  (a && r) || ((a = t), (r = n)),
                                  t - 0.5 < (a *= i = Math.min(1, t / a, n / r)) && (a = t),
                                  n - 0.5 < (r *= i) && (r = n),
                                  "image" === e.type
                                      ? ((o.top = Math.floor(0.5 * (n - r)) + parseFloat(s.css("paddingTop"))), (o.left = Math.floor(0.5 * (t - a)) + parseFloat(s.css("paddingLeft"))))
                                      : "video" === e.contentType && (a / (e = e.opts.width && e.opts.height ? a / r : e.opts.ratio || 16 / 9) < r ? (r = a / e) : r * e < a && (a = r * e)),
                                  (o.width = a),
                                  (o.height = r),
                                  o)
                              );
                          },
                          update: function (n) {
                              var i = this;
                              h.each(i.slides, function (e, t) {
                                  i.updateSlide(t, n);
                              });
                          },
                          updateSlide: function (e, t) {
                              var n = this,
                                  i = e && e.$content,
                                  s = e.width || e.opts.width,
                                  a = e.height || e.opts.height,
                                  r = e.$slide;
                              n.adjustCaption(e),
                                  i && (s || a || "video" === e.contentType) && !e.hasError && (h.fancybox.stop(i), h.fancybox.setTranslate(i, n.getFitPos(e)), e.pos === n.currPos && ((n.isAnimating = !1), n.updateCursor())),
                                  n.adjustLayout(e),
                                  r.length &&
                                      (r.trigger("refresh"),
                                      e.pos === n.currPos && n.$refs.toolbar.add(n.$refs.navigation.find(".fancybox-button--arrow_right")).toggleClass("compensate-for-scrollbar", r.get(0).scrollHeight > r.get(0).clientHeight)),
                                  n.trigger("onUpdate", e, t);
                          },
                          centerSlide: function (e) {
                              var t = this,
                                  n = t.current,
                                  i = n.$slide;
                              !t.isClosing &&
                                  n &&
                                  (i.siblings().css({ transform: "", opacity: "" }),
                                  i.parent().children().removeClass("fancybox-slide--previous fancybox-slide--next"),
                                  h.fancybox.animate(
                                      i,
                                      { top: 0, left: 0, opacity: 1 },
                                      e === m ? 0 : e,
                                      function () {
                                          i.css({ transform: "", opacity: "" }), n.isComplete || t.complete();
                                      },
                                      !1
                                  ));
                          },
                          isMoved: function (e) {
                              var t,
                                  n = e || this.current;
                              return (
                                  !!n &&
                                  ((t = h.fancybox.getTranslate(this.$refs.stage)), (e = h.fancybox.getTranslate(n.$slide)), !n.$slide.hasClass("fancybox-animated") && (0.5 < Math.abs(e.top - t.top) || 0.5 < Math.abs(e.left - t.left)))
                              );
                          },
                          updateCursor: function (e, t) {
                              var n = this.current,
                                  i = this.$refs.container;
                              n &&
                                  !this.isClosing &&
                                  this.Guestures &&
                                  (i.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-zoomOut fancybox-can-swipe fancybox-can-pan"),
                                  (t = !!(e = this.canPan(e, t)) || this.isZoomable()),
                                  i.toggleClass("fancybox-is-zoomable", t),
                                  h("[data-fancybox-zoom]").prop("disabled", !t),
                                  e
                                      ? i.addClass("fancybox-can-pan")
                                      : t && ("zoom" === n.opts.clickContent || (h.isFunction(n.opts.clickContent) && "zoom" == n.opts.clickContent(n)))
                                      ? i.addClass("fancybox-can-zoomIn")
                                      : n.opts.touch && (n.opts.touch.vertical || 1 < this.group.length) && "video" !== n.contentType && i.addClass("fancybox-can-swipe"));
                          },
                          isZoomable: function () {
                              var e,
                                  t = this.current;
                              if (t && !this.isClosing && "image" === t.type && !t.hasError) {
                                  if (!t.isLoaded) return !0;
                                  if ((e = this.getFitPos(t)) && (t.width > e.width || t.height > e.height)) return !0;
                              }
                              return !1;
                          },
                          isScaledDown: function (e, t) {
                              var n = !1,
                                  i = this.current,
                                  s = i.$content;
                              return e !== m && t !== m ? (n = e < i.width && t < i.height) : s && (n = (n = h.fancybox.getTranslate(s)).width < i.width && n.height < i.height), n;
                          },
                          canPan: function (e, t) {
                              var n = this.current,
                                  i = null,
                                  s = !1;
                              return (
                                  "image" === n.type &&
                                      (n.isComplete || (e && t)) &&
                                      !n.hasError &&
                                      ((s = this.getFitPos(n)),
                                      e !== m && t !== m ? (i = { width: e, height: t }) : n.isComplete && (i = h.fancybox.getTranslate(n.$content)),
                                      i && s && (s = 1.5 < Math.abs(i.width - s.width) || 1.5 < Math.abs(i.height - s.height))),
                                  s
                              );
                          },
                          loadSlide: function (n) {
                              var e,
                                  t,
                                  i,
                                  s = this;
                              if (!n.isLoading && !n.isLoaded) {
                                  if (!(n.isLoading = !0) === s.trigger("beforeLoad", n)) return (n.isLoading = !1);
                                  switch (((e = n.type), (t = n.$slide).off("refresh").trigger("onReset").addClass(n.opts.slideClass), e)) {
                                      case "image":
                                          s.setImage(n);
                                          break;
                                      case "iframe":
                                          s.setIframe(n);
                                          break;
                                      case "html":
                                          s.setContent(n, n.src || n.content);
                                          break;
                                      case "video":
                                          s.setContent(
                                              n,
                                              n.opts.video.tpl
                                                  .replace(/\{\{src\}\}/gi, n.src)
                                                  .replace("{{format}}", n.opts.videoFormat || n.opts.video.format || "")
                                                  .replace("{{poster}}", n.thumb || "")
                                          );
                                          break;
                                      case "inline":
                                          h(n.src).length ? s.setContent(n, h(n.src)) : s.setError(n);
                                          break;
                                      case "ajax":
                                          s.showLoading(n),
                                              (i = h.ajax(
                                                  h.extend({}, n.opts.ajax.settings, {
                                                      url: n.src,
                                                      success: function (e, t) {
                                                          "success" === t && s.setContent(n, e);
                                                      },
                                                      error: function (e, t) {
                                                          e && "abort" !== t && s.setError(n);
                                                      },
                                                  })
                                              )),
                                              t.one("onReset", function () {
                                                  i.abort();
                                              });
                                          break;
                                      default:
                                          s.setError(n);
                                  }
                                  return !0;
                              }
                          },
                          setImage: function (t) {
                              var e,
                                  n = this;
                              setTimeout(function () {
                                  var e = t.$image;
                                  n.isClosing || !t.isLoading || (e && e.length && e[0].complete) || t.hasError || n.showLoading(t);
                              }, 50),
                                  n.checkSrcset(t),
                                  (t.$content = h('<div class="fancybox-content"></div>').addClass("fancybox-is-hidden").appendTo(t.$slide.addClass("fancybox-slide--image"))),
                                  !1 !== t.opts.preload &&
                                      t.opts.width &&
                                      t.opts.height &&
                                      t.thumb &&
                                      ((t.width = t.opts.width),
                                      (t.height = t.opts.height),
                                      ((e = r.createElement("img")).onerror = function () {
                                          h(this).remove(), (t.$ghost = null);
                                      }),
                                      (e.onload = function () {
                                          n.afterLoad(t);
                                      }),
                                      (t.$ghost = h(e).addClass("fancybox-image").appendTo(t.$content).attr("src", t.thumb))),
                                  n.setBigImage(t);
                          },
                          checkSrcset: function (e) {
                              var t,
                                  n,
                                  i,
                                  s,
                                  a = e.opts.srcset || e.opts.image.srcset;
                              if (a) {
                                  (i = l.devicePixelRatio || 1),
                                      (s = l.innerWidth * i),
                                      (n = a.split(",").map(function (e) {
                                          var i = {};
                                          return (
                                              e
                                                  .trim()
                                                  .split(/\s+/)
                                                  .forEach(function (e, t) {
                                                      var n = parseInt(e.substring(0, e.length - 1), 10);
                                                      if (0 === t) return (i.url = e);
                                                      n && ((i.value = n), (i.postfix = e[e.length - 1]));
                                                  }),
                                              i
                                          );
                                      })).sort(function (e, t) {
                                          return e.value - t.value;
                                      });
                                  for (var r = 0; r < n.length; r++) {
                                      var o = n[r];
                                      if (("w" === o.postfix && o.value >= s) || ("x" === o.postfix && o.value >= i)) {
                                          t = o;
                                          break;
                                      }
                                  }
                                  (t = !t && n.length ? n[n.length - 1] : t) && ((e.src = t.url), e.width && e.height && "w" == t.postfix && ((e.height = (e.width / e.height) * t.value), (e.width = t.value)), (e.opts.srcset = a));
                              }
                          },
                          setBigImage: function (t) {
                              var n = this,
                                  e = r.createElement("img"),
                                  i = h(e);
                              (t.$image = i
                                  .one("error", function () {
                                      n.setError(t);
                                  })
                                  .one("load", function () {
                                      var e;
                                      t.$ghost || (n.resolveImageSlideSize(t, this.naturalWidth, this.naturalHeight), n.afterLoad(t)),
                                          n.isClosing ||
                                              (t.opts.srcset &&
                                                  (((e = t.opts.sizes) && "auto" !== e) || (e = (1 < t.width / t.height && 1 < s.width() / s.height() ? "100" : Math.round((t.width / t.height) * 100)) + "vw"),
                                                  i.attr("sizes", e).attr("srcset", t.opts.srcset)),
                                              t.$ghost &&
                                                  setTimeout(function () {
                                                      t.$ghost && !n.isClosing && t.$ghost.hide();
                                                  }, Math.min(300, Math.max(1e3, t.height / 1600))),
                                              n.hideLoading(t));
                                  })
                                  .addClass("fancybox-image")
                                  .attr("src", t.src)
                                  .appendTo(t.$content)),
                                  (e.complete || "complete" == e.readyState) && i.naturalWidth && i.naturalHeight ? i.trigger("load") : e.error && i.trigger("error");
                          },
                          resolveImageSlideSize: function (e, t, n) {
                              var i = parseInt(e.opts.width, 10),
                                  s = parseInt(e.opts.height, 10);
                              (e.width = t), (e.height = n), 0 < i && ((e.width = i), (e.height = Math.floor((i * n) / t))), 0 < s && ((e.width = Math.floor((s * t) / n)), (e.height = s));
                          },
                          setIframe: function (s) {
                              var a,
                                  t = this,
                                  r = s.opts.iframe,
                                  o = s.$slide;
                              (s.$content = h('<div class="fancybox-content' + (r.preload ? " fancybox-is-hidden" : "") + '"></div>')
                                  .css(r.css)
                                  .appendTo(o)),
                                  o.addClass("fancybox-slide--" + s.contentType),
                                  (s.$iframe = a = h(r.tpl.replace(/\{rnd\}/g, new Date().getTime()))
                                      .attr(r.attr)
                                      .appendTo(s.$content)),
                                  r.preload
                                      ? (t.showLoading(s),
                                        a.on("load.fb error.fb", function (e) {
                                            (this.isReady = 1), s.$slide.trigger("refresh"), t.afterLoad(s);
                                        }),
                                        o.on("refresh.fb", function () {
                                            var e,
                                                t = s.$content,
                                                n = r.css.width,
                                                i = r.css.height;
                                            if (1 === a[0].isReady) {
                                                try {
                                                    e = a.contents().find("body");
                                                } catch (e) {}
                                                e &&
                                                    e.length &&
                                                    e.children().length &&
                                                    (o.css("overflow", "visible"),
                                                    t.css({ width: "100%", "max-width": "100%", height: "9999px" }),
                                                    n === m && (n = Math.ceil(Math.max(e[0].clientWidth, e.outerWidth(!0)))),
                                                    t.css("width", n || "").css("max-width", ""),
                                                    i === m && (i = Math.ceil(Math.max(e[0].clientHeight, e.outerHeight(!0)))),
                                                    t.css("height", i || ""),
                                                    o.css("overflow", "auto")),
                                                    t.removeClass("fancybox-is-hidden");
                                            }
                                        }))
                                      : t.afterLoad(s),
                                  a.attr("src", s.src),
                                  o.one("onReset", function () {
                                      try {
                                          h(this).find("iframe").hide().unbind().attr("src", "//about:blank");
                                      } catch (e) {}
                                      h(this).off("refresh.fb").empty(), (s.isLoaded = !1), (s.isRevealed = !1);
                                  });
                          },
                          setContent: function (e, t) {
                              var n;
                              this.isClosing ||
                                  (this.hideLoading(e),
                                  e.$content && h.fancybox.stop(e.$content),
                                  e.$slide.empty(),
                                  (n = t) && n.hasOwnProperty && n instanceof h && t.parent().length
                                      ? ((t.hasClass("fancybox-content") || t.parent().hasClass("fancybox-content")) && t.parents(".fancybox-slide").trigger("onReset"),
                                        (e.$placeholder = h("<div>").hide().insertAfter(t)),
                                        t.css("display", "inline-block"))
                                      : e.hasError || ("string" === h.type(t) && (t = h("<div>").append(h.trim(t)).contents()), e.opts.filter && (t = h("<div>").html(t).find(e.opts.filter))),
                                  e.$slide.one("onReset", function () {
                                      h(this).find("video,audio").trigger("pause"),
                                          e.$placeholder && (e.$placeholder.after(t.removeClass("fancybox-content").hide()).remove(), (e.$placeholder = null)),
                                          e.$smallBtn && (e.$smallBtn.remove(), (e.$smallBtn = null)),
                                          e.hasError || (h(this).empty(), (e.isLoaded = !1), (e.isRevealed = !1));
                                  }),
                                  h(t).appendTo(e.$slide),
                                  h(t).is("video,audio") &&
                                      (h(t).addClass("fancybox-video"), h(t).wrap("<div></div>"), (e.contentType = "video"), (e.opts.width = e.opts.width || h(t).attr("width")), (e.opts.height = e.opts.height || h(t).attr("height"))),
                                  (e.$content = e.$slide.children().filter("div,form,main,video,audio,article,.fancybox-content").first()),
                                  e.$content.siblings().hide(),
                                  e.$content.length || (e.$content = e.$slide.wrapInner("<div></div>").children().first()),
                                  e.$content.addClass("fancybox-content"),
                                  e.$slide.addClass("fancybox-slide--" + e.contentType),
                                  this.afterLoad(e));
                          },
                          setError: function (e) {
                              (e.hasError = !0),
                                  e.$slide
                                      .trigger("onReset")
                                      .removeClass("fancybox-slide--" + e.contentType)
                                      .addClass("fancybox-slide--error"),
                                  (e.contentType = "html"),
                                  this.setContent(e, this.translate(e, e.opts.errorTpl)),
                                  e.pos === this.currPos && (this.isAnimating = !1);
                          },
                          showLoading: function (e) {
                              (e = e || this.current) && !e.$spinner && (e.$spinner = h(this.translate(this, this.opts.spinnerTpl)).appendTo(e.$slide).hide().fadeIn("fast"));
                          },
                          hideLoading: function (e) {
                              (e = e || this.current) && e.$spinner && (e.$spinner.stop().remove(), delete e.$spinner);
                          },
                          afterLoad: function (e) {
                              this.isClosing ||
                                  ((e.isLoading = !1),
                                  (e.isLoaded = !0),
                                  this.trigger("afterLoad", e),
                                  this.hideLoading(e),
                                  !e.opts.smallBtn || (e.$smallBtn && e.$smallBtn.length) || (e.$smallBtn = h(this.translate(e, e.opts.btnTpl.smallBtn)).appendTo(e.$content)),
                                  e.opts.protect &&
                                      e.$content &&
                                      !e.hasError &&
                                      (e.$content.on("contextmenu.fb", function (e) {
                                          return 2 == e.button && e.preventDefault(), !0;
                                      }),
                                      "image" === e.type && h('<div class="fancybox-spaceball"></div>').appendTo(e.$content)),
                                  this.adjustCaption(e),
                                  this.adjustLayout(e),
                                  e.pos === this.currPos && this.updateCursor(),
                                  this.revealContent(e));
                          },
                          adjustCaption: function (e) {
                              var t = e || this.current,
                                  n = t.opts.caption,
                                  i = t.opts.preventCaptionOverlap,
                                  s = this.$refs.caption,
                                  e = !1;
                              s.toggleClass("fancybox-caption--separate", i),
                                  i &&
                                      n &&
                                      n.length &&
                                      (t.pos !== this.currPos ? ((s = s.clone().appendTo(s.parent())).children().eq(0).empty().html(n), (e = s.outerHeight(!0)), s.empty().remove()) : this.$caption && (e = this.$caption.outerHeight(!0)),
                                      t.$slide.css("padding-bottom", e || ""));
                          },
                          adjustLayout: function (e) {
                              var t,
                                  n,
                                  i,
                                  s = e || this.current;
                              s.isLoaded &&
                                  !0 !== s.opts.disableLayoutFix &&
                                  (s.$content.css("margin-bottom", ""),
                                  s.$content.outerHeight() > s.$slide.height() + 0.5 &&
                                      ((n = s.$slide[0].style["padding-bottom"]),
                                      (i = s.$slide.css("padding-bottom")),
                                      0 < parseFloat(i) && ((e = s.$slide[0].scrollHeight), s.$slide.css("padding-bottom", 0), Math.abs(e - s.$slide[0].scrollHeight) < 1 && (t = i), s.$slide.css("padding-bottom", n))),
                                  s.$content.css("margin-bottom", t));
                          },
                          revealContent: function (e) {
                              var t,
                                  n,
                                  i,
                                  s,
                                  a = this,
                                  r = e.$slide,
                                  o = !1,
                                  l = !1,
                                  c = a.isMoved(e),
                                  d = e.isRevealed;
                              return (
                                  (e.isRevealed = !0),
                                  (t = e.opts[a.firstRun ? "animationEffect" : "transitionEffect"]),
                                  (i = e.opts[a.firstRun ? "animationDuration" : "transitionDuration"]),
                                  (i = parseInt(e.forcedDuration === m ? i : e.forcedDuration, 10)),
                                  "zoom" === (t = c || e.pos !== a.currPos || !i ? !1 : t) && (e.pos === a.currPos && i && "image" === e.type && !e.hasError && (l = a.getThumbPos(e)) ? (o = a.getFitPos(e)) : (t = "fade")),
                                  "zoom" === t
                                      ? ((a.isAnimating = !0),
                                        (o.scaleX = o.width / l.width),
                                        (o.scaleY = o.height / l.height),
                                        (s = "auto" == (s = e.opts.zoomOpacity) ? 0.1 < Math.abs(e.width / e.height - l.width / l.height) : s) && ((l.opacity = 0.1), (o.opacity = 1)),
                                        h.fancybox.setTranslate(e.$content.removeClass("fancybox-is-hidden"), l),
                                        u(e.$content),
                                        void h.fancybox.animate(e.$content, o, i, function () {
                                            (a.isAnimating = !1), a.complete();
                                        }))
                                      : (a.updateSlide(e),
                                        t
                                            ? (h.fancybox.stop(r),
                                              (n = "fancybox-slide--" + (e.pos >= a.prevPos ? "next" : "previous") + " fancybox-animated fancybox-fx-" + t),
                                              r.addClass(n).removeClass("fancybox-slide--current"),
                                              e.$content.removeClass("fancybox-is-hidden"),
                                              u(r),
                                              "image" !== e.type && e.$content.hide().show(0),
                                              void h.fancybox.animate(
                                                  r,
                                                  "fancybox-slide--current",
                                                  i,
                                                  function () {
                                                      r.removeClass(n).css({ transform: "", opacity: "" }), e.pos === a.currPos && a.complete();
                                                  },
                                                  !0
                                              ))
                                            : (e.$content.removeClass("fancybox-is-hidden"), d || !c || "image" !== e.type || e.hasError || e.$content.hide().fadeIn("fast"), void (e.pos === a.currPos && a.complete())))
                              );
                          },
                          getThumbPos: function (e) {
                              var t,
                                  n,
                                  i,
                                  s,
                                  a = e.$thumb;
                              return (
                                  !!(
                                      a &&
                                      (i = a[0]) &&
                                      i.ownerDocument === r &&
                                      (h(".fancybox-container").css("pointer-events", "none"),
                                      (s = { x: i.getBoundingClientRect().left + i.offsetWidth / 2, y: i.getBoundingClientRect().top + i.offsetHeight / 2 }),
                                      (i = r.elementFromPoint(s.x, s.y) === i),
                                      h(".fancybox-container").css("pointer-events", ""),
                                      i)
                                  ) &&
                                  ((n = h.fancybox.getTranslate(a)),
                                  (e = parseFloat(a.css("border-top-width") || 0)),
                                  (s = parseFloat(a.css("border-right-width") || 0)),
                                  (i = parseFloat(a.css("border-bottom-width") || 0)),
                                  (a = parseFloat(a.css("border-left-width") || 0)),
                                  (t = { top: n.top + e, left: n.left + a, width: n.width - s - a, height: n.height - e - i, scaleX: 1, scaleY: 1 }),
                                  0 < n.width && 0 < n.height && t)
                              );
                          },
                          complete: function () {
                              var e,
                                  n = this,
                                  t = n.current,
                                  i = {};
                              !n.isMoved() &&
                                  t.isLoaded &&
                                  (t.isComplete ||
                                      ((t.isComplete = !0),
                                      t.$slide.siblings().trigger("onReset"),
                                      n.preload("inline"),
                                      u(t.$slide),
                                      t.$slide.addClass("fancybox-slide--complete"),
                                      h.each(n.slides, function (e, t) {
                                          t.pos >= n.currPos - 1 && t.pos <= n.currPos + 1 ? (i[t.pos] = t) : t && (h.fancybox.stop(t.$slide), t.$slide.off().remove());
                                      }),
                                      (n.slides = i)),
                                  (n.isAnimating = !1),
                                  n.updateCursor(),
                                  n.trigger("afterShow"),
                                  t.opts.video.autoStart &&
                                      t.$slide
                                          .find("video,audio")
                                          .filter(":visible:first")
                                          .trigger("play")
                                          .one("ended", function () {
                                              Document.exitFullscreen ? Document.exitFullscreen() : this.webkitExitFullscreen && this.webkitExitFullscreen(), n.next();
                                          }),
                                  t.opts.autoFocus && "html" === t.contentType && ((e = t.$content.find("input[autofocus]:enabled:visible:first")).length ? e.trigger("focus") : n.focus(null, !0)),
                                  t.$slide.scrollTop(0).scrollLeft(0));
                          },
                          preload: function (e) {
                              var t, n;
                              this.group.length < 2 || ((n = this.slides[this.currPos + 1]), (t = this.slides[this.currPos - 1]) && t.type === e && this.loadSlide(t), n && n.type === e && this.loadSlide(n));
                          },
                          focus: function (e, t) {
                              var n = [
                                  "a[href]",
                                  "area[href]",
                                  'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',
                                  "select:not([disabled]):not([aria-hidden])",
                                  "textarea:not([disabled]):not([aria-hidden])",
                                  "button:not([disabled]):not([aria-hidden])",
                                  "iframe",
                                  "object",
                                  "embed",
                                  "video",
                                  "audio",
                                  "[contenteditable]",
                                  '[tabindex]:not([tabindex^="-"])',
                              ].join(",");
                              this.isClosing ||
                                  ((t = (t = !e && this.current && this.current.isComplete ? this.current.$slide.find("*:visible" + (t ? ":not(.fancybox-close-small)" : "")) : this.$refs.container.find("*:visible"))
                                      .filter(n)
                                      .filter(function () {
                                          return "hidden" !== h(this).css("visibility") && !h(this).hasClass("disabled");
                                      })).length
                                      ? ((n = t.index(r.activeElement)),
                                        e && e.shiftKey ? (n < 0 || 0 == n) && (e.preventDefault(), t.eq(t.length - 1).trigger("focus")) : (n < 0 || n == t.length - 1) && (e && e.preventDefault(), t.eq(0).trigger("focus")))
                                      : this.$refs.container.trigger("focus"));
                          },
                          activate: function () {
                              var t = this;
                              h(".fancybox-container").each(function () {
                                  var e = h(this).data("FancyBox");
                                  e && e.id !== t.id && !e.isClosing && (e.trigger("onDeactivate"), e.removeEvents(), (e.isVisible = !1));
                              }),
                                  (t.isVisible = !0),
                                  (t.current || t.isIdle) && (t.update(), t.updateControls()),
                                  t.trigger("onActivate"),
                                  t.addEvents();
                          },
                          close: function (e, t) {
                              function n() {
                                  l.cleanUp(e);
                              }
                              var i,
                                  s,
                                  a,
                                  r,
                                  o,
                                  l = this,
                                  c = l.current;
                              return (
                                  !l.isClosing &&
                                  (!(l.isClosing = !0) === l.trigger("beforeClose", e)
                                      ? ((l.isClosing = !1),
                                        d(function () {
                                            l.update();
                                        }),
                                        !1)
                                      : (l.removeEvents(),
                                        (a = c.$content),
                                        (i = c.opts.animationEffect),
                                        (s = h.isNumeric(t) ? t : i ? c.opts.animationDuration : 0),
                                        c.$slide.removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"),
                                        !0 !== e ? h.fancybox.stop(c.$slide) : (i = !1),
                                        c.$slide.siblings().trigger("onReset").remove(),
                                        s &&
                                            l.$refs.container
                                                .removeClass("fancybox-is-open")
                                                .addClass("fancybox-is-closing")
                                                .css("transition-duration", s + "ms"),
                                        l.hideLoading(c),
                                        l.hideControls(!0),
                                        l.updateCursor(),
                                        "zoom" === (i = !("zoom" !== i || (a && s && "image" === c.type && !l.isMoved() && !c.hasError && (o = l.getThumbPos(c)))) ? "fade" : i)
                                            ? (h.fancybox.stop(a),
                                              (t = { top: (r = h.fancybox.getTranslate(a)).top, left: r.left, scaleX: r.width / o.width, scaleY: r.height / o.height, width: o.width, height: o.height }),
                                              (r = "auto" == (r = c.opts.zoomOpacity) ? 0.1 < Math.abs(c.width / c.height - o.width / o.height) : r) && (o.opacity = 0),
                                              h.fancybox.setTranslate(a, t),
                                              u(a),
                                              h.fancybox.animate(a, o, s, n))
                                            : i && s
                                            ? h.fancybox.animate(c.$slide.addClass("fancybox-slide--previous").removeClass("fancybox-slide--current"), "fancybox-animated fancybox-fx-" + i, s, n)
                                            : !0 === e
                                            ? setTimeout(n, s)
                                            : n(),
                                        !0))
                              );
                          },
                          cleanUp: function (e) {
                              var t,
                                  n = this.current.opts.$orig;
                              this.current.$slide.trigger("onReset"),
                                  this.$refs.container.empty().remove(),
                                  this.trigger("afterClose", e),
                                  this.current.opts.backFocus && (n = n && n.length && n.is(":visible") ? n : this.$trigger) && n.length && ((t = l.scrollX), (e = l.scrollY), n.trigger("focus"), h("html, body").scrollTop(e).scrollLeft(t)),
                                  (this.current = null),
                                  (t = h.fancybox.getInstance()) ? t.activate() : (h("body").removeClass("fancybox-active compensate-for-scrollbar"), h("#fancybox-style-noscroll").remove());
                          },
                          trigger: function (e, t) {
                              var n,
                                  i = Array.prototype.slice.call(arguments, 1),
                                  t = t && t.opts ? t : this.current;
                              if ((t ? i.unshift(t) : (t = this), i.unshift(this), !1 === (n = h.isFunction(t.opts[e]) ? t.opts[e].apply(t, i) : n))) return n;
                              ("afterClose" !== e && this.$refs ? this.$refs.container : a).trigger(e + ".fb", i);
                          },
                          updateControls: function () {
                              var e = this,
                                  t = e.current,
                                  n = t.index,
                                  i = e.$refs.container,
                                  s = e.$refs.caption,
                                  a = t.opts.caption;
                              t.$slide.trigger("refresh"),
                                  a && a.length ? (e.$caption = s).children().eq(0).html(a) : (e.$caption = null),
                                  e.hasHiddenControls || e.isIdle || e.showControls(),
                                  i.find("[data-fancybox-count]").html(e.group.length),
                                  i.find("[data-fancybox-index]").html(n + 1),
                                  i.find("[data-fancybox-prev]").prop("disabled", !t.opts.loop && n <= 0),
                                  i.find("[data-fancybox-next]").prop("disabled", !t.opts.loop && n >= e.group.length - 1),
                                  "image" === t.type
                                      ? i
                                            .find("[data-fancybox-zoom]")
                                            .show()
                                            .end()
                                            .find("[data-fancybox-download]")
                                            .attr("href", t.opts.image.src || t.src)
                                            .show()
                                      : t.opts.toolbar && i.find("[data-fancybox-download],[data-fancybox-zoom]").hide(),
                                  h(r.activeElement).is(":hidden,[disabled]") && e.$refs.container.trigger("focus");
                          },
                          hideControls: function (e) {
                              var t = ["infobar", "toolbar", "nav"];
                              (!e && this.current.opts.preventCaptionOverlap) || t.push("caption"),
                                  this.$refs.container.removeClass(
                                      t
                                          .map(function (e) {
                                              return "fancybox-show-" + e;
                                          })
                                          .join(" ")
                                  ),
                                  (this.hasHiddenControls = !0);
                          },
                          showControls: function () {
                              var e = (this.current || this).opts,
                                  t = this.$refs.container;
                              (this.hasHiddenControls = !1),
                                  (this.idleSecondsCounter = 0),
                                  t
                                      .toggleClass("fancybox-show-toolbar", !(!e.toolbar || !e.buttons))
                                      .toggleClass("fancybox-show-infobar", !!(e.infobar && 1 < this.group.length))
                                      .toggleClass("fancybox-show-caption", !!this.$caption)
                                      .toggleClass("fancybox-show-nav", !!(e.arrows && 1 < this.group.length))
                                      .toggleClass("fancybox-is-modal", !!e.modal);
                          },
                          toggleControls: function () {
                              this.hasHiddenControls ? this.showControls() : this.hideControls();
                          },
                      }),
                      (h.fancybox = {
                          version: "3.5.7",
                          defaults: e,
                          getInstance: function (e) {
                              var t = h('.fancybox-container:not(".fancybox-is-closing"):last').data("FancyBox"),
                                  n = Array.prototype.slice.call(arguments, 1);
                              return t instanceof i && ("string" === h.type(e) ? t[e].apply(t, n) : "function" === h.type(e) && e.apply(t, n), t);
                          },
                          open: function (e, t, n) {
                              return new i(e, t, n);
                          },
                          close: function (e) {
                              var t = this.getInstance();
                              t && (t.close(), !0 === e && this.close(e));
                          },
                          destroy: function () {
                              this.close(!0), a.add("body").off("click.fb-start", "**");
                          },
                          isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                          use3d: ((e = r.createElement("div")), l.getComputedStyle && l.getComputedStyle(e) && l.getComputedStyle(e).getPropertyValue("transform") && !(r.documentMode && r.documentMode < 11)),
                          getTranslate: function (e) {
                              var t;
                              return !(!e || !e.length) && { top: (t = e[0].getBoundingClientRect()).top || 0, left: t.left || 0, width: t.width, height: t.height, opacity: parseFloat(e.css("opacity")) };
                          },
                          setTranslate: function (e, t) {
                              var n = "",
                                  i = {};
                              if (e && t)
                                  return (
                                      (t.left === m && t.top === m) ||
                                          ((n = (t.left === m ? e.position() : t).left + "px, " + (t.top === m ? e.position() : t).top + "px"), (n = this.use3d ? "translate3d(" + n + ", 0px)" : "translate(" + n + ")")),
                                      t.scaleX !== m && t.scaleY !== m ? (n += " scale(" + t.scaleX + ", " + t.scaleY + ")") : t.scaleX !== m && (n += " scaleX(" + t.scaleX + ")"),
                                      n.length && (i.transform = n),
                                      t.opacity !== m && (i.opacity = t.opacity),
                                      t.width !== m && (i.width = t.width),
                                      t.height !== m && (i.height = t.height),
                                      e.css(i)
                                  );
                          },
                          animate: function (t, n, i, s, a) {
                              var r,
                                  o = this;
                              h.isFunction(i) && ((s = i), (i = null)),
                                  o.stop(t),
                                  (r = o.getTranslate(t)),
                                  t.on(c, function (e) {
                                      (e && e.originalEvent && (!t.is(e.originalEvent.target) || "z-index" == e.originalEvent.propertyName)) ||
                                          (o.stop(t),
                                          h.isNumeric(i) && t.css("transition-duration", ""),
                                          h.isPlainObject(n)
                                              ? n.scaleX !== m && n.scaleY !== m && o.setTranslate(t, { top: n.top, left: n.left, width: r.width * n.scaleX, height: r.height * n.scaleY, scaleX: 1, scaleY: 1 })
                                              : !0 !== a && t.removeClass(n),
                                          h.isFunction(s) && s(e));
                                  }),
                                  h.isNumeric(i) && t.css("transition-duration", i + "ms"),
                                  h.isPlainObject(n)
                                      ? (n.scaleX !== m && n.scaleY !== m && (delete n.width, delete n.height, t.parent().hasClass("fancybox-slide--image") && t.parent().addClass("fancybox-is-scaling")), h.fancybox.setTranslate(t, n))
                                      : t.addClass(n),
                                  t.data(
                                      "timer",
                                      setTimeout(function () {
                                          t.trigger(c);
                                      }, i + 33)
                                  );
                          },
                          stop: function (e, t) {
                              e && e.length && (clearTimeout(e.data("timer")), t && e.trigger(c), e.off(c).css("transition-duration", ""), e.parent().removeClass("fancybox-is-scaling"));
                          },
                      }),
                      (h.fn.fancybox = function (e) {
                          var t;
                          return (t = (e = e || {}).selector || !1) ? h("body").off("click.fb-start", t).on("click.fb-start", t, { options: e }, v) : this.off("click.fb-start").on("click.fb-start", { items: this, options: e }, v), this;
                      }),
                      a.on("click.fb-start", "[data-fancybox]", v),
                      a.on("click.fb-start", "[data-fancybox-trigger]", function (e) {
                          h('[data-fancybox="' + h(this).attr("data-fancybox-trigger") + '"]')
                              .eq(h(this).attr("data-fancybox-index") || 0)
                              .trigger("click.fb-start", { $trigger: h(this) });
                      }),
                      (n = ".fancybox-button"),
                      (f = "fancybox-focus"),
                      (g = null),
                      a.on("mousedown mouseup focus blur", n, function (e) {
                          switch (e.type) {
                              case "mousedown":
                                  g = h(this);
                                  break;
                              case "mouseup":
                                  g = null;
                                  break;
                              case "focusin":
                                  h(n).removeClass(f), h(this).is(g) || h(this).is("[disabled]") || h(this).addClass(f);
                                  break;
                              case "focusout":
                                  h(n).removeClass(f);
                          }
                      })));
    })(window, document, jQuery),
    (function (f) {
        "use strict";
        function h(n, e, t) {
            if (n)
                return (
                    "object" === f.type((t = t || "")) && (t = f.param(t, !0)),
                    f.each(e, function (e, t) {
                        n = n.replace("$" + e, t || "");
                    }),
                    t.length && (n += (0 < n.indexOf("?") ? "&" : "?") + t),
                    n
                );
        }
        var i = {
            youtube: {
                matcher: /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,
                params: { autoplay: 1, autohide: 1, fs: 1, rel: 0, hd: 1, wmode: "transparent", enablejsapi: 1, html5: 1 },
                paramPlace: 8,
                type: "iframe",
                url: "https://www.youtube-nocookie.com/embed/$4",
                thumb: "https://img.youtube.com/vi/$4/hqdefault.jpg",
            },
            vimeo: { matcher: /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/, params: { autoplay: 1, hd: 1, show_title: 1, show_byline: 1, show_portrait: 0, fullscreen: 1 }, paramPlace: 3, type: "iframe", url: "//player.vimeo.com/video/$2" },
            instagram: { matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i, type: "image", url: "//$1/p/$2/media/?size=l" },
            gmap_place: {
                matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,
                type: "iframe",
                url: function (e) {
                    return (
                        "//maps.google." +
                        e[2] +
                        "/?ll=" +
                        (e[9] ? e[9] + "&z=" + Math.floor(e[10]) + (e[12] ? e[12].replace(/^\//, "&") : "") : e[12] + "").replace(/\?/, "&") +
                        "&output=" +
                        (e[12] && 0 < e[12].indexOf("layer=c") ? "svembed" : "embed")
                    );
                },
            },
            gmap_search: {
                matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,
                type: "iframe",
                url: function (e) {
                    return "//maps.google." + e[2] + "/maps?q=" + e[5].replace("query=", "q=").replace("api=1", "") + "&output=embed";
                },
            },
        };
        f(document).on("objectNeedsType.fb", function (e, t, s) {
            var a,
                r,
                o,
                l,
                c,
                d,
                p = s.src || "",
                u = !1,
                n = f.extend(!0, {}, i, s.opts.media);
            f.each(n, function (e, t) {
                if ((r = p.match(t.matcher))) {
                    if (((u = t.type), (d = e), (c = {}), t.paramPlace && r[t.paramPlace])) {
                        l = (l = "?" == (l = r[t.paramPlace])[0] ? l.substring(1) : l).split("&");
                        for (var n = 0; n < l.length; ++n) {
                            var i = l[n].split("=", 2);
                            2 == i.length && (c[i[0]] = decodeURIComponent(i[1].replace(/\+/g, " ")));
                        }
                    }
                    return (
                        (o = f.extend(!0, {}, t.params, s.opts[e], c)),
                        (p = "function" === f.type(t.url) ? t.url.call(this, r, o, s) : h(t.url, r, o)),
                        (a = "function" === f.type(t.thumb) ? t.thumb.call(this, r, o, s) : h(t.thumb, r)),
                        "youtube" === e
                            ? (p = p.replace(/&t=((\d+)m)?(\d+)s/, function (e, t, n, i) {
                                  return "&start=" + ((n ? 60 * parseInt(n, 10) : 0) + parseInt(i, 10));
                              }))
                            : "vimeo" === e && (p = p.replace("&%23", "#")),
                        !1
                    );
                }
            }),
                u
                    ? (s.opts.thumb || (s.opts.$thumb && s.opts.$thumb.length) || (s.opts.thumb = a),
                      "iframe" === u && (s.opts = f.extend(!0, s.opts, { iframe: { preload: !1, attr: { scrolling: "no" } } })),
                      f.extend(s, { type: u, src: p, origSrc: s.src, contentSource: d, contentType: "image" === u ? "image" : "gmap_place" == d || "gmap_search" == d ? "map" : "video" }))
                    : p && (s.type = s.opts.defaultType);
        });
        var s = {
            youtube: { src: "https://www.youtube.com/iframe_api", class: "YT", loading: !1, loaded: !1 },
            vimeo: { src: "https://player.vimeo.com/api/player.js", class: "Vimeo", loading: !1, loaded: !1 },
            load: function (e) {
                var t,
                    n = this;
                this[e].loaded
                    ? setTimeout(function () {
                          n.done(e);
                      })
                    : this[e].loading ||
                      ((this[e].loading = !0),
                      ((t = document.createElement("script")).type = "text/javascript"),
                      (t.src = this[e].src),
                      "youtube" === e
                          ? (window.onYouTubeIframeAPIReady = function () {
                                (n[e].loaded = !0), n.done(e);
                            })
                          : (t.onload = function () {
                                (n[e].loaded = !0), n.done(e);
                            }),
                      document.body.appendChild(t));
            },
            done: function (e) {
                var t, n;
                "youtube" === e && delete window.onYouTubeIframeAPIReady,
                    (t = f.fancybox.getInstance()) &&
                        ((n = t.current.$content.find("iframe")),
                        "youtube" === e && void 0 !== YT && YT
                            ? new YT.Player(n.attr("id"), {
                                  events: {
                                      onStateChange: function (e) {
                                          0 == e.data && t.next();
                                      },
                                  },
                              })
                            : "vimeo" === e &&
                              void 0 !== Vimeo &&
                              Vimeo &&
                              new Vimeo.Player(n).on("ended", function () {
                                  t.next();
                              }));
            },
        };
        f(document).on({
            "afterShow.fb": function (e, t, n) {
                1 < t.group.length && ("youtube" === n.contentSource || "vimeo" === n.contentSource) && s.load(n.contentSource);
            },
        });
    })(jQuery),
    (function (d, l, p) {
        "use strict";
        function u(e) {
            var t,
                n = [];
            for (t in (e = (e = e.originalEvent || e || d.e).touches && e.touches.length ? e.touches : e.changedTouches && e.changedTouches.length ? e.changedTouches : [e]))
                e[t].pageX ? n.push({ x: e[t].pageX, y: e[t].pageY }) : e[t].clientX && n.push({ x: e[t].clientX, y: e[t].clientY });
            return n;
        }
        function f(e, t, n) {
            return t && e ? ("x" === n ? e.x - t.x : "y" === n ? e.y - t.y : Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2))) : 0;
        }
        function c(e) {
            if (e.is('a,area,button,[role="button"],input,label,select,summary,textarea,video,audio,iframe') || p.isFunction(e.get(0).onclick) || e.data("selectable")) return 1;
            for (var t = 0, n = e[0].attributes, i = n.length; t < i; t++) if ("data-fancybox-" === n[t].nodeName.substr(0, 14)) return 1;
        }
        function h(e) {
            for (var t, n, i, s = !1; ; ) {
                if (
                    ((t = e.get(0)),
                    (n = i = n = void 0),
                    (n = d.getComputedStyle(t)["overflow-y"]),
                    (i = d.getComputedStyle(t)["overflow-x"]),
                    (n = ("scroll" === n || "auto" === n) && t.scrollHeight > t.clientHeight),
                    (t = ("scroll" === i || "auto" === i) && t.scrollWidth > t.clientWidth),
                    (s = n || t))
                )
                    break;
                if (!(e = e.parent()).length || e.hasClass("fancybox-stage") || e.is("body")) break;
            }
            return s;
        }
        function n(e) {
            (this.instance = e), (this.$bg = e.$refs.bg), (this.$stage = e.$refs.stage), (this.$container = e.$refs.container), this.destroy(), this.$container.on("touchstart.fb.touch mousedown.fb.touch", p.proxy(this, "ontouchstart"));
        }
        var m =
                d.requestAnimationFrame ||
                d.webkitRequestAnimationFrame ||
                d.mozRequestAnimationFrame ||
                d.oRequestAnimationFrame ||
                function (e) {
                    return d.setTimeout(e, 1e3 / 60);
                },
            g =
                d.cancelAnimationFrame ||
                d.webkitCancelAnimationFrame ||
                d.mozCancelAnimationFrame ||
                d.oCancelAnimationFrame ||
                function (e) {
                    d.clearTimeout(e);
                };
        (n.prototype.destroy = function () {
            this.$container.off(".fb.touch"), p(l).off(".fb.touch"), this.requestId && (g(this.requestId), (this.requestId = null)), this.tapped && (clearTimeout(this.tapped), (this.tapped = null));
        }),
            (n.prototype.ontouchstart = function (e) {
                var t = this,
                    n = p(e.target),
                    i = t.instance,
                    s = i.current,
                    a = s.$slide,
                    r = s.$content,
                    o = "touchstart" == e.type;
                if (
                    (o && t.$container.off("mousedown.fb.touch"),
                    (!e.originalEvent || 2 != e.originalEvent.button) && a.length && n.length && !c(n) && !c(n.parent()) && (n.is("img") || !(e.originalEvent.clientX > n[0].clientWidth + n.offset().left)))
                ) {
                    if (!s || i.isAnimating || s.$slide.hasClass("fancybox-animated")) return e.stopPropagation(), void e.preventDefault();
                    (t.realPoints = t.startPoints = u(e)),
                        t.startPoints.length &&
                            (s.touch && e.stopPropagation(),
                            (t.startEvent = e),
                            (t.canTap = !0),
                            (t.$target = n),
                            (t.$content = r),
                            (t.opts = s.opts.touch),
                            (t.isPanning = !1),
                            (t.isSwiping = !1),
                            (t.isZooming = !1),
                            (t.isScrolling = !1),
                            (t.canPan = i.canPan()),
                            (t.startTime = new Date().getTime()),
                            (t.distanceX = t.distanceY = t.distance = 0),
                            (t.canvasWidth = Math.round(a[0].clientWidth)),
                            (t.canvasHeight = Math.round(a[0].clientHeight)),
                            (t.contentLastPos = null),
                            (t.contentStartPos = p.fancybox.getTranslate(t.$content) || { top: 0, left: 0 }),
                            (t.sliderStartPos = p.fancybox.getTranslate(a)),
                            (t.stagePos = p.fancybox.getTranslate(i.$refs.stage)),
                            (t.sliderStartPos.top -= t.stagePos.top),
                            (t.sliderStartPos.left -= t.stagePos.left),
                            (t.contentStartPos.top -= t.stagePos.top),
                            (t.contentStartPos.left -= t.stagePos.left),
                            p(l)
                                .off(".fb.touch")
                                .on(o ? "touchend.fb.touch touchcancel.fb.touch" : "mouseup.fb.touch mouseleave.fb.touch", p.proxy(t, "ontouchend"))
                                .on(o ? "touchmove.fb.touch" : "mousemove.fb.touch", p.proxy(t, "ontouchmove")),
                            p.fancybox.isMobile && l.addEventListener("scroll", t.onscroll, !0),
                            (((t.opts || t.canPan) && (n.is(t.$stage) || t.$stage.find(n).length)) || (n.is(".fancybox-image") && e.preventDefault(), p.fancybox.isMobile && n.parents(".fancybox-caption").length)) &&
                                ((t.isScrollable = h(n) || h(n.parent())),
                                (p.fancybox.isMobile && t.isScrollable) || e.preventDefault(),
                                (1 !== t.startPoints.length && !s.hasError) || (t.canPan ? (p.fancybox.stop(t.$content), (t.isPanning = !0)) : (t.isSwiping = !0), t.$container.addClass("fancybox-is-grabbing")),
                                2 === t.startPoints.length &&
                                    "image" === s.type &&
                                    (s.isLoaded || s.$ghost) &&
                                    ((t.canTap = !1),
                                    (t.isSwiping = !1),
                                    (t.isPanning = !1),
                                    (t.isZooming = !0),
                                    p.fancybox.stop(t.$content),
                                    (t.centerPointStartX = 0.5 * (t.startPoints[0].x + t.startPoints[1].x) - p(d).scrollLeft()),
                                    (t.centerPointStartY = 0.5 * (t.startPoints[0].y + t.startPoints[1].y) - p(d).scrollTop()),
                                    (t.percentageOfImageAtPinchPointX = (t.centerPointStartX - t.contentStartPos.left) / t.contentStartPos.width),
                                    (t.percentageOfImageAtPinchPointY = (t.centerPointStartY - t.contentStartPos.top) / t.contentStartPos.height),
                                    (t.startDistanceBetweenFingers = f(t.startPoints[0], t.startPoints[1])))));
                }
            }),
            (n.prototype.onscroll = function (e) {
                (this.isScrolling = !0), l.removeEventListener("scroll", this.onscroll, !0);
            }),
            (n.prototype.ontouchmove = function (e) {
                var t = this;
                void 0 === e.originalEvent.buttons || 0 !== e.originalEvent.buttons
                    ? t.isScrolling
                        ? (t.canTap = !1)
                        : ((t.newPoints = u(e)),
                          (t.opts || t.canPan) &&
                              t.newPoints.length &&
                              t.newPoints.length &&
                              ((t.isSwiping && !0 === t.isSwiping) || e.preventDefault(),
                              (t.distanceX = f(t.newPoints[0], t.startPoints[0], "x")),
                              (t.distanceY = f(t.newPoints[0], t.startPoints[0], "y")),
                              (t.distance = f(t.newPoints[0], t.startPoints[0])),
                              0 < t.distance && (t.isSwiping ? t.onSwipe(e) : t.isPanning ? t.onPan() : t.isZooming && t.onZoom())))
                    : t.ontouchend(e);
            }),
            (n.prototype.onSwipe = function (e) {
                var s = this,
                    a = s.instance,
                    t = s.isSwiping,
                    n = s.sliderStartPos.left || 0;
                if (!0 !== t)
                    "x" == t &&
                        (0 < s.distanceX && (s.instance.group.length < 2 || (0 === s.instance.current.index && !s.instance.current.opts.loop))
                            ? (n += Math.pow(s.distanceX, 0.8))
                            : s.distanceX < 0 && (s.instance.group.length < 2 || (s.instance.current.index === s.instance.group.length - 1 && !s.instance.current.opts.loop))
                            ? (n -= Math.pow(-s.distanceX, 0.8))
                            : (n += s.distanceX)),
                        (s.sliderLastPos = { top: "x" == t ? 0 : s.sliderStartPos.top + s.distanceY, left: n }),
                        s.requestId && (g(s.requestId), (s.requestId = null)),
                        (s.requestId = m(function () {
                            s.sliderLastPos &&
                                (p.each(s.instance.slides, function (e, t) {
                                    var n = t.pos - s.instance.currPos;
                                    p.fancybox.setTranslate(t.$slide, { top: s.sliderLastPos.top, left: s.sliderLastPos.left + n * s.canvasWidth + n * t.opts.gutter });
                                }),
                                s.$container.addClass("fancybox-is-sliding"));
                        }));
                else if (10 < Math.abs(s.distance)) {
                    if (
                        ((s.canTap = !1),
                        a.group.length < 2 && s.opts.vertical
                            ? (s.isSwiping = "y")
                            : a.isDragging || !1 === s.opts.vertical || ("auto" === s.opts.vertical && 800 < p(d).width())
                            ? (s.isSwiping = "x")
                            : ((n = Math.abs((180 * Math.atan2(s.distanceY, s.distanceX)) / Math.PI)), (s.isSwiping = 45 < n && n < 135 ? "y" : "x")),
                        "y" === s.isSwiping && p.fancybox.isMobile && s.isScrollable)
                    )
                        return void (s.isScrolling = !0);
                    (a.isDragging = s.isSwiping),
                        (s.startPoints = s.newPoints),
                        p.each(a.slides, function (e, t) {
                            var n, i;
                            p.fancybox.stop(t.$slide),
                                (n = p.fancybox.getTranslate(t.$slide)),
                                (i = p.fancybox.getTranslate(a.$refs.stage)),
                                t.$slide
                                    .css({ transform: "", opacity: "", "transition-duration": "" })
                                    .removeClass("fancybox-animated")
                                    .removeClass(function (e, t) {
                                        return (t.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ");
                                    }),
                                t.pos === a.current.pos && ((s.sliderStartPos.top = n.top - i.top), (s.sliderStartPos.left = n.left - i.left)),
                                p.fancybox.setTranslate(t.$slide, { top: n.top - i.top, left: n.left - i.left });
                        }),
                        a.SlideShow && a.SlideShow.isActive && a.SlideShow.stop();
                }
            }),
            (n.prototype.onPan = function () {
                var e = this;
                f(e.newPoints[0], e.realPoints[0]) < (p.fancybox.isMobile ? 10 : 5)
                    ? (e.startPoints = e.newPoints)
                    : ((e.canTap = !1),
                      (e.contentLastPos = e.limitMovement()),
                      e.requestId && g(e.requestId),
                      (e.requestId = m(function () {
                          p.fancybox.setTranslate(e.$content, e.contentLastPos);
                      })));
            }),
            (n.prototype.limitMovement = function () {
                var e = this.canvasWidth,
                    t = this.canvasHeight,
                    n = this.distanceX,
                    i = this.distanceY,
                    s = this.contentStartPos,
                    a = s.left,
                    r = s.top,
                    o = s.width,
                    l = s.height,
                    c = e < o ? a + n : a,
                    d = r + i,
                    p = Math.max(0, 0.5 * e - 0.5 * o),
                    s = Math.max(0, 0.5 * t - 0.5 * l),
                    o = Math.min(e - o, 0.5 * e - 0.5 * o),
                    l = Math.min(t - l, 0.5 * t - 0.5 * l);
                return (
                    0 < n && p < c && (c = p - 1 + Math.pow(-p + a + n, 0.8) || 0),
                    n < 0 && c < o && (c = o + 1 - Math.pow(o - a - n, 0.8) || 0),
                    0 < i && s < d && (d = s - 1 + Math.pow(-s + r + i, 0.8) || 0),
                    { top: (d = i < 0 && d < l ? l + 1 - Math.pow(l - r - i, 0.8) || 0 : d), left: c }
                );
            }),
            (n.prototype.limitPosition = function (e, t, n, i) {
                var s = this.canvasWidth,
                    a = this.canvasHeight;
                return (e = s < n ? ((e = 0 < e ? 0 : e) < s - n ? s - n : e) : Math.max(0, s / 2 - n / 2)), { top: (t = a < i ? ((t = 0 < t ? 0 : t) < a - i ? a - i : t) : Math.max(0, a / 2 - i / 2)), left: e };
            }),
            (n.prototype.onZoom = function () {
                var e = this,
                    t = e.contentStartPos,
                    n = t.width,
                    i = t.height,
                    s = t.left,
                    a = t.top,
                    r = f(e.newPoints[0], e.newPoints[1]) / e.startDistanceBetweenFingers,
                    o = Math.floor(n * r),
                    l = Math.floor(i * r),
                    c = (n - o) * e.percentageOfImageAtPinchPointX,
                    t = (i - l) * e.percentageOfImageAtPinchPointY,
                    n = (e.newPoints[0].x + e.newPoints[1].x) / 2 - p(d).scrollLeft(),
                    i = (e.newPoints[0].y + e.newPoints[1].y) / 2 - p(d).scrollTop(),
                    n = n - e.centerPointStartX,
                    r = { top: a + (t + (i - e.centerPointStartY)), left: s + (c + n), scaleX: r, scaleY: r };
                (e.canTap = !1),
                    (e.newWidth = o),
                    (e.newHeight = l),
                    (e.contentLastPos = r),
                    e.requestId && g(e.requestId),
                    (e.requestId = m(function () {
                        p.fancybox.setTranslate(e.$content, e.contentLastPos);
                    }));
            }),
            (n.prototype.ontouchend = function (e) {
                var t = this,
                    n = t.isSwiping,
                    i = t.isPanning,
                    s = t.isZooming,
                    a = t.isScrolling;
                if (
                    ((t.endPoints = u(e)),
                    (t.dMs = Math.max(new Date().getTime() - t.startTime, 1)),
                    t.$container.removeClass("fancybox-is-grabbing"),
                    p(l).off(".fb.touch"),
                    l.removeEventListener("scroll", t.onscroll, !0),
                    t.requestId && (g(t.requestId), (t.requestId = null)),
                    (t.isSwiping = !1),
                    (t.isPanning = !1),
                    (t.isZooming = !1),
                    (t.isScrolling = !1),
                    (t.instance.isDragging = !1),
                    t.canTap)
                )
                    return t.onTap(e);
                (t.speed = 100), (t.velocityX = (t.distanceX / t.dMs) * 0.5), (t.velocityY = (t.distanceY / t.dMs) * 0.5), i ? t.endPanning() : s ? t.endZooming() : t.endSwiping(n, a);
            }),
            (n.prototype.endSwiping = function (e, t) {
                var n = this,
                    i = !1,
                    s = n.instance.group.length,
                    a = Math.abs(n.distanceX),
                    a = "x" == e && 1 < s && ((130 < n.dMs && 10 < a) || 50 < a);
                (n.sliderLastPos = null),
                    "y" == e && !t && 50 < Math.abs(n.distanceY)
                        ? (p.fancybox.animate(n.instance.current.$slide, { top: n.sliderStartPos.top + n.distanceY + 150 * n.velocityY, opacity: 0 }, 200), (i = n.instance.close(!0, 250)))
                        : a && 0 < n.distanceX
                        ? (i = n.instance.previous(300))
                        : a && n.distanceX < 0 && (i = n.instance.next(300)),
                    !1 !== i || ("x" != e && "y" != e) || n.instance.centerSlide(200),
                    n.$container.removeClass("fancybox-is-sliding");
            }),
            (n.prototype.endPanning = function () {
                var e,
                    t,
                    n = this;
                n.contentLastPos &&
                    ((t = !1 === n.opts.momentum || 350 < n.dMs ? ((e = n.contentLastPos.left), n.contentLastPos.top) : ((e = n.contentLastPos.left + 500 * n.velocityX), n.contentLastPos.top + 500 * n.velocityY)),
                    ((t = n.limitPosition(e, t, n.contentStartPos.width, n.contentStartPos.height)).width = n.contentStartPos.width),
                    (t.height = n.contentStartPos.height),
                    p.fancybox.animate(n.$content, t, 366));
            }),
            (n.prototype.endZooming = function () {
                var e,
                    t,
                    n = this,
                    i = n.instance.current,
                    s = n.newWidth,
                    a = n.newHeight;
                n.contentLastPos &&
                    ((e = n.contentLastPos.left),
                    (t = n.contentLastPos.top),
                    p.fancybox.setTranslate(n.$content, { top: t, left: e, width: s, height: a, scaleX: 1, scaleY: 1 }),
                    s < n.canvasWidth && a < n.canvasHeight
                        ? n.instance.scaleToFit(150)
                        : s > i.width || a > i.height
                        ? n.instance.scaleToActual(n.centerPointStartX, n.centerPointStartY, 150)
                        : ((a = n.limitPosition(e, t, s, a)), p.fancybox.animate(n.$content, a, 150)));
            }),
            (n.prototype.onTap = function (t) {
                function e(e) {
                    if (((e = r.opts[e]), (e = p.isFunction(e) ? e.apply(a, [r, t]) : e)))
                        switch (e) {
                            case "close":
                                a.close(i.startEvent);
                                break;
                            case "toggleControls":
                                a.toggleControls();
                                break;
                            case "next":
                                a.next();
                                break;
                            case "nextOrClose":
                                1 < a.group.length ? a.next() : a.close(i.startEvent);
                                break;
                            case "zoom":
                                "image" == r.type && (r.isLoaded || r.$ghost) && (a.canPan() ? a.scaleToFit() : a.isScaledDown() ? a.scaleToActual(l, c) : a.group.length < 2 && a.close(i.startEvent));
                        }
                }
                var n,
                    i = this,
                    s = p(t.target),
                    a = i.instance,
                    r = a.current,
                    o = (t && u(t)) || i.startPoints,
                    l = o[0] ? o[0].x - p(d).scrollLeft() - i.stagePos.left : 0,
                    c = o[0] ? o[0].y - p(d).scrollTop() - i.stagePos.top : 0;
                if ((!t.originalEvent || 2 != t.originalEvent.button) && (s.is("img") || !(l > s[0].clientWidth + s.offset().left))) {
                    if (s.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container")) n = "Outside";
                    else if (s.is(".fancybox-slide")) n = "Slide";
                    else {
                        if (!a.current.$content || !a.current.$content.find(s).addBack().filter(s).length) return;
                        n = "Content";
                    }
                    if (i.tapped) {
                        if ((clearTimeout(i.tapped), (i.tapped = null), 50 < Math.abs(l - i.tapX) || 50 < Math.abs(c - i.tapY))) return this;
                        e("dblclick" + n);
                    } else
                        (i.tapX = l),
                            (i.tapY = c),
                            r.opts["dblclick" + n] && r.opts["dblclick" + n] !== r.opts["click" + n]
                                ? (i.tapped = setTimeout(function () {
                                      (i.tapped = null), a.isAnimating || e("click" + n);
                                  }, 500))
                                : e("click" + n);
                    return this;
                }
            }),
            p(l)
                .on("onActivate.fb", function (e, t) {
                    t && !t.Guestures && (t.Guestures = new n(t));
                })
                .on("beforeClose.fb", function (e, t) {
                    t && t.Guestures && t.Guestures.destroy();
                });
    })(window, document, jQuery),
    (function (a, r) {
        "use strict";
        r.extend(!0, r.fancybox.defaults, {
            btnTpl: {
                slideShow:
                    '<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.5 5.4v13.2l11-6.6z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.33 5.75h2.2v12.5h-2.2V5.75zm5.15 0h2.2v12.5h-2.2V5.75z"/></svg></button>',
            },
            slideShow: { autoStart: !1, speed: 3e3, progress: !0 },
        });
        function n(e) {
            (this.instance = e), this.init();
        }
        r.extend(n.prototype, {
            timer: null,
            isActive: !1,
            $button: null,
            init: function () {
                var e = this,
                    t = e.instance,
                    n = t.group[t.currIndex].opts.slideShow;
                (e.$button = t.$refs.toolbar.find("[data-fancybox-play]").on("click", function () {
                    e.toggle();
                })),
                    t.group.length < 2 || !n ? e.$button.hide() : n.progress && (e.$progress = r('<div class="fancybox-progress"></div>').appendTo(t.$refs.inner));
            },
            set: function (e) {
                var t = this.instance,
                    n = t.current;
                n && (!0 === e || n.opts.loop || t.currIndex < t.group.length - 1)
                    ? this.isActive &&
                      "video" !== n.contentType &&
                      (this.$progress && r.fancybox.animate(this.$progress.show(), { scaleX: 1 }, n.opts.slideShow.speed),
                      (this.timer = setTimeout(function () {
                          t.current.opts.loop || t.current.index != t.group.length - 1 ? t.next() : t.jumpTo(0);
                      }, n.opts.slideShow.speed)))
                    : (this.stop(), (t.idleSecondsCounter = 0), t.showControls());
            },
            clear: function () {
                clearTimeout(this.timer), (this.timer = null), this.$progress && this.$progress.removeAttr("style").hide();
            },
            start: function () {
                var e = this.instance.current;
                e &&
                    (this.$button
                        .attr("title", (e.opts.i18n[e.opts.lang] || e.opts.i18n.en).PLAY_STOP)
                        .removeClass("fancybox-button--play")
                        .addClass("fancybox-button--pause"),
                    (this.isActive = !0),
                    e.isComplete && this.set(!0),
                    this.instance.trigger("onSlideShowChange", !0));
            },
            stop: function () {
                var e = this.instance.current;
                this.clear(),
                    this.$button
                        .attr("title", (e.opts.i18n[e.opts.lang] || e.opts.i18n.en).PLAY_START)
                        .removeClass("fancybox-button--pause")
                        .addClass("fancybox-button--play"),
                    (this.isActive = !1),
                    this.instance.trigger("onSlideShowChange", !1),
                    this.$progress && this.$progress.removeAttr("style").hide();
            },
            toggle: function () {
                this.isActive ? this.stop() : this.start();
            },
        }),
            r(a).on({
                "onInit.fb": function (e, t) {
                    t && !t.SlideShow && (t.SlideShow = new n(t));
                },
                "beforeShow.fb": function (e, t, n, i) {
                    t = t && t.SlideShow;
                    i ? t && n.opts.slideShow.autoStart && t.start() : t && t.isActive && t.clear();
                },
                "afterShow.fb": function (e, t, n) {
                    t = t && t.SlideShow;
                    t && t.isActive && t.set();
                },
                "afterKeydown.fb": function (e, t, n, i, s) {
                    t = t && t.SlideShow;
                    !t || !n.opts.slideShow || (80 !== s && 32 !== s) || r(a.activeElement).is("button,a,input") || (i.preventDefault(), t.toggle());
                },
                "beforeClose.fb onDeactivate.fb": function (e, t) {
                    t = t && t.SlideShow;
                    t && t.stop();
                },
            }),
            r(a).on("visibilitychange", function () {
                var e = r.fancybox.getInstance(),
                    e = e && e.SlideShow;
                e && e.isActive && (a.hidden ? e.clear() : e.set());
            });
    })(document, jQuery),
    (function (a, n) {
        "use strict";
        var i,
            s = (function () {
                for (
                    var e = [
                            ["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"],
                            ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"],
                            ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"],
                            ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"],
                            ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"],
                        ],
                        t = {},
                        n = 0;
                    n < e.length;
                    n++
                ) {
                    var i = e[n];
                    if (i && i[1] in a) {
                        for (var s = 0; s < i.length; s++) t[e[0][s]] = i[s];
                        return t;
                    }
                }
                return !1;
            })();
        s &&
            ((i = {
                request: function (e) {
                    (e = e || a.documentElement)[s.requestFullscreen](e.ALLOW_KEYBOARD_INPUT);
                },
                exit: function () {
                    a[s.exitFullscreen]();
                },
                toggle: function (e) {
                    (e = e || a.documentElement), this.isFullscreen() ? this.exit() : this.request(e);
                },
                isFullscreen: function () {
                    return Boolean(a[s.fullscreenElement]);
                },
                enabled: function () {
                    return Boolean(a[s.fullscreenEnabled]);
                },
            }),
            n.extend(!0, n.fancybox.defaults, {
                btnTpl: {
                    fullScreen:
                        '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fsenter" title="{{FULL_SCREEN}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 16h3v3h2v-5H5zm3-8H5v2h5V5H8zm6 11h2v-3h3v-2h-5zm2-11V5h-2v5h5V8z"/></svg></button>',
                },
                fullScreen: { autoStart: !1 },
            }),
            n(a).on(s.fullscreenchange, function () {
                var e = i.isFullscreen(),
                    t = n.fancybox.getInstance();
                t &&
                    (t.current && "image" === t.current.type && t.isAnimating && ((t.isAnimating = !1), t.update(!0, !0, 0), t.isComplete || t.complete()),
                    t.trigger("onFullscreenChange", e),
                    t.$refs.container.toggleClass("fancybox-is-fullscreen", e),
                    t.$refs.toolbar.find("[data-fancybox-fullscreen]").toggleClass("fancybox-button--fsenter", !e).toggleClass("fancybox-button--fsexit", e));
            })),
            n(a).on({
                "onInit.fb": function (e, t) {
                    s
                        ? t && t.group[t.currIndex].opts.fullScreen
                            ? (t.$refs.container.on("click.fb-fullscreen", "[data-fancybox-fullscreen]", function (e) {
                                  e.stopPropagation(), e.preventDefault(), i.toggle();
                              }),
                              t.opts.fullScreen && !0 === t.opts.fullScreen.autoStart && i.request(),
                              (t.FullScreen = i))
                            : t && t.$refs.toolbar.find("[data-fancybox-fullscreen]").hide()
                        : t.$refs.toolbar.find("[data-fancybox-fullscreen]").remove();
                },
                "afterKeydown.fb": function (e, t, n, i, s) {
                    t && t.FullScreen && 70 === s && (i.preventDefault(), t.FullScreen.toggle());
                },
                "beforeClose.fb": function (e, t) {
                    t && t.FullScreen && t.$refs.container.hasClass("fancybox-is-fullscreen") && i.exit();
                },
            });
    })(document, jQuery),
    (function (e, a) {
        "use strict";
        var r = "fancybox-thumbs",
            o = r + "-active";
        a.fancybox.defaults = a.extend(
            !0,
            {
                btnTpl: {
                    thumbs:
                        '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.59 14.59h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76H5.65V5.65z"/></svg></button>',
                },
                thumbs: { autoStart: !1, hideOnClose: !0, parentEl: ".fancybox-container", axis: "y" },
            },
            a.fancybox.defaults
        );
        function i(e) {
            this.init(e);
        }
        a.extend(i.prototype, {
            $button: null,
            $grid: null,
            $list: null,
            isVisible: !1,
            isActive: !1,
            init: function (e) {
                var t = this,
                    n = e.group,
                    i = 0;
                (t.instance = e), (t.opts = n[e.currIndex].opts.thumbs), ((e.Thumbs = t).$button = e.$refs.toolbar.find("[data-fancybox-thumbs]"));
                for (var s = 0, a = n.length; s < a && (n[s].thumb && i++, !(1 < i)); s++);
                1 < i && t.opts
                    ? (t.$button.removeAttr("style").on("click", function () {
                          t.toggle();
                      }),
                      (t.isActive = !0))
                    : t.$button.hide();
            },
            create: function () {
                var n,
                    e = this,
                    t = e.instance,
                    i = e.opts.parentEl,
                    s = [];
                e.$grid ||
                    ((e.$grid = a('<div class="' + r + " " + r + "-" + e.opts.axis + '"></div>').appendTo(t.$refs.container.find(i).addBack().filter(i))),
                    e.$grid.on("click", "a", function () {
                        t.jumpTo(a(this).attr("data-index"));
                    })),
                    e.$list || (e.$list = a('<div class="' + r + '__list">').appendTo(e.$grid)),
                    a.each(t.group, function (e, t) {
                        (n = t.thumb) || "image" !== t.type || (n = t.src),
                            s.push('<a href="javascript:;" tabindex="0" data-index="' + e + '"' + (n && n.length ? ' style="background-image:url(' + n + ')"' : 'class="fancybox-thumbs-missing"') + "></a>");
                    }),
                    (e.$list[0].innerHTML = s.join("")),
                    "x" === e.opts.axis && e.$list.width(parseInt(e.$grid.css("padding-right"), 10) + t.group.length * e.$list.children().eq(0).outerWidth(!0));
            },
            focus: function (e) {
                var t,
                    n,
                    i = this.$list,
                    s = this.$grid;
                this.instance.current &&
                    ((n = (t = i
                        .children()
                        .removeClass(o)
                        .filter('[data-index="' + this.instance.current.index + '"]')
                        .addClass(o)).position()),
                    "y" === this.opts.axis && (n.top < 0 || n.top > i.height() - t.outerHeight())
                        ? i.stop().animate({ scrollTop: i.scrollTop() + n.top }, e)
                        : "x" === this.opts.axis && (n.left < s.scrollLeft() || n.left > s.scrollLeft() + (s.width() - t.outerWidth())) && i.parent().stop().animate({ scrollLeft: n.left }, e));
            },
            update: function () {
                this.instance.$refs.container.toggleClass("fancybox-show-thumbs", this.isVisible),
                    this.isVisible ? (this.$grid || this.create(), this.instance.trigger("onThumbsShow"), this.focus(0)) : this.$grid && this.instance.trigger("onThumbsHide"),
                    this.instance.update();
            },
            hide: function () {
                (this.isVisible = !1), this.update();
            },
            show: function () {
                (this.isVisible = !0), this.update();
            },
            toggle: function () {
                (this.isVisible = !this.isVisible), this.update();
            },
        }),
            a(e).on({
                "onInit.fb": function (e, t) {
                    var n;
                    t && !t.Thumbs && (n = new i(t)).isActive && !0 === n.opts.autoStart && n.show();
                },
                "beforeShow.fb": function (e, t, n, i) {
                    t = t && t.Thumbs;
                    t && t.isVisible && t.focus(i ? 0 : 250);
                },
                "afterKeydown.fb": function (e, t, n, i, s) {
                    t = t && t.Thumbs;
                    t && t.isActive && 71 === s && (i.preventDefault(), t.toggle());
                },
                "beforeClose.fb": function (e, t) {
                    t = t && t.Thumbs;
                    t && t.isVisible && !1 !== t.opts.hideOnClose && t.$grid.hide();
                },
            });
    })(document, jQuery),
    (function (e, s) {
        "use strict";
        s.extend(!0, s.fancybox.defaults, {
            btnTpl: {
                share:
                    '<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2.55 19c1.4-8.4 9.1-9.8 11.9-9.8V5l7 7-7 6.3v-3.5c-2.8 0-10.5 2.1-11.9 4.2z"/></svg></button>',
            },
            share: {
                url: function (e, t) {
                    return (!e.currentHash && "inline" !== t.type && "html" !== t.type && (t.origSrc || t.src)) || window.location;
                },
                tpl:
                    '<div class="fancybox-share"><h1>{{SHARE}}</h1><p><a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg><span>Facebook</span></a><a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg><span>Twitter</span></a><a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg><span>Pinterest</span></a></p><p><input class="fancybox-share__input" type="text" value="{{url_raw}}" onclick="select()" /></p></div>',
            },
        }),
            s(e).on("click", "[data-fancybox-share]", function () {
                var e,
                    t,
                    n = s.fancybox.getInstance(),
                    i = n.current || null;
                i &&
                    ("function" === s.type(i.opts.share.url) && (e = i.opts.share.url.apply(i, [n, i])),
                    (e = i.opts.share.tpl
                        .replace(/\{\{media\}\}/g, "image" === i.type ? encodeURIComponent(i.src) : "")
                        .replace(/\{\{url\}\}/g, encodeURIComponent(e))
                        .replace(
                            /\{\{url_raw\}\}/g,
                            ((t = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;", "/": "&#x2F;", "`": "&#x60;", "=": "&#x3D;" }),
                            String(e).replace(/[&<>"'`=\/]/g, function (e) {
                                return t[e];
                            }))
                        )
                        .replace(/\{\{descr\}\}/g, n.$caption ? encodeURIComponent(n.$caption.text()) : "")),
                    s.fancybox.open({
                        src: n.translate(n, e),
                        type: "html",
                        opts: {
                            touch: !1,
                            animationEffect: !1,
                            afterLoad: function (e, t) {
                                n.$refs.container.one("beforeClose.fb", function () {
                                    e.close(null, 0);
                                }),
                                    t.$content.find(".fancybox-share__button").click(function () {
                                        return window.open(this.href, "Share", "width=550, height=450"), !1;
                                    });
                            },
                            mobile: { autoFocus: !1 },
                        },
                    }));
            });
    })(document, jQuery),
    (function (a, r, i) {
        "use strict";
        function s() {
            var e = a.location.hash.substr(1),
                t = e.split("-"),
                n = (1 < t.length && /^\+?\d+$/.test(t[t.length - 1]) && parseInt(t.pop(-1), 10)) || 1;
            return { hash: e, index: n < 1 ? 1 : n, gallery: t.join("-") };
        }
        function t(e) {
            "" !== e.gallery &&
                i("[data-fancybox='" + i.escapeSelector(e.gallery) + "']")
                    .eq(e.index - 1)
                    .focus()
                    .trigger("click.fb-start");
        }
        function o(e) {
            return !!e && "" !== (e = (e = (e.current || e).opts).hash || (e.$orig ? e.$orig.data("fancybox") || e.$orig.data("fancybox-trigger") : "")) && e;
        }
        i.escapeSelector ||
            (i.escapeSelector = function (e) {
                return (e + "").replace(/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g, function (e, t) {
                    return t ? ("\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " ") : "\\" + e;
                });
            }),
            i(function () {
                !1 !== i.fancybox.defaults.hash &&
                    (i(r).on({
                        "onInit.fb": function (e, t) {
                            var n, i;
                            !1 !== t.group[t.currIndex].opts.hash && ((n = s()), (i = o(t)) && n.gallery && i == n.gallery && (t.currIndex = n.index - 1));
                        },
                        "beforeShow.fb": function (e, t, n, i) {
                            var s;
                            n &&
                                !1 !== n.opts.hash &&
                                (s = o(t)) &&
                                ((t.currentHash = s + (1 < t.group.length ? "-" + (n.index + 1) : "")),
                                a.location.hash !== "#" + t.currentHash &&
                                    (i && !t.origHash && (t.origHash = a.location.hash),
                                    t.hashTimer && clearTimeout(t.hashTimer),
                                    (t.hashTimer = setTimeout(function () {
                                        "replaceState" in a.history
                                            ? (a.history[i ? "pushState" : "replaceState"]({}, r.title, a.location.pathname + a.location.search + "#" + t.currentHash), i && (t.hasCreatedHistory = !0))
                                            : (a.location.hash = t.currentHash),
                                            (t.hashTimer = null);
                                    }, 300))));
                        },
                        "beforeClose.fb": function (e, t, n) {
                            n &&
                                !1 !== n.opts.hash &&
                                (clearTimeout(t.hashTimer),
                                t.currentHash && t.hasCreatedHistory
                                    ? a.history.back()
                                    : t.currentHash && ("replaceState" in a.history ? a.history.replaceState({}, r.title, a.location.pathname + a.location.search + (t.origHash || "")) : (a.location.hash = t.origHash)),
                                (t.currentHash = null));
                        },
                    }),
                    i(a).on("hashchange.fb", function () {
                        var e = s(),
                            n = null;
                        i.each(i(".fancybox-container").get().reverse(), function (e, t) {
                            t = i(t).data("FancyBox");
                            if (t && t.currentHash) return (n = t), !1;
                        }),
                            n ? n.currentHash === e.gallery + "-" + e.index || (1 === e.index && n.currentHash == e.gallery) || ((n.currentHash = null), n.close()) : "" !== e.gallery && t(e);
                    }),
                    setTimeout(function () {
                        i.fancybox.getInstance() || t(s());
                    }, 50));
            });
    })(window, document, jQuery),
    (function (e, t) {
        "use strict";
        var s = new Date().getTime();
        t(e).on({
            "onInit.fb": function (e, i, t) {
                i.$refs.stage.on("mousewheel DOMMouseScroll wheel MozMousePixelScroll", function (e) {
                    var t = i.current,
                        n = new Date().getTime();
                    i.group.length < 2 ||
                        !1 === t.opts.wheel ||
                        ("auto" === t.opts.wheel && "image" !== t.type) ||
                        (e.preventDefault(),
                        e.stopPropagation(),
                        t.$slide.hasClass("fancybox-animated") || ((e = e.originalEvent || e), n - s < 250 || ((s = n), i[(-e.deltaY || -e.deltaX || e.wheelDelta || -e.detail) < 0 ? "next" : "previous"]())));
                });
            },
        });
    })(document, jQuery),
    (function (e) {
        "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? (module.exports = e($ || require("jquery"))) : e(jQuery);
    })(function (z) {
        "use strict";
        var s = "styler",
            n = {
                idSuffix: "-styler",
                filePlaceholder: "Файл не выбран",
                fileBrowse: "Обзор...",
                fileNumber: "Выбрано файлов: %s",
                selectPlaceholder: "Выберите...",
                selectSearch: !1,
                selectSearchLimit: 10,
                selectSearchNotFound: "Совпадений не найдено",
                selectSearchPlaceholder: "Поиск...",
                selectVisibleOptions: 0,
                selectSmartPositioning: !0,
                locale: "ru",
                locales: {
                    en: { filePlaceholder: "No file selected", fileBrowse: "Browse...", fileNumber: "Selected files: %s", selectPlaceholder: "Select...", selectSearchNotFound: "No matches found", selectSearchPlaceholder: "Search..." },
                },
                onSelectOpened: function () {},
                onSelectClosed: function () {},
                onFormStyled: function () {},
            };
        function a(e, t) {
            (this.element = e), (this.options = z.extend({}, n, t));
            t = this.options.locale;
            void 0 !== this.options.locales[t] && z.extend(this.options, this.options.locales[t]), this.init();
        }
        function O(e) {
            var t, n;
            z(e.target).parents().hasClass("jq-selectbox") ||
                "OPTION" == e.target.nodeName ||
                (z("div.jq-selectbox.opened").length &&
                    ((t = z("div.jq-selectbox.opened")),
                    (n = z("div.jq-selectbox__search input", t)),
                    (e = z("div.jq-selectbox__dropdown", t)),
                    t
                        .find("select")
                        .data("_" + s)
                        .options.onSelectClosed.call(t),
                    n.length && n.val("").keyup(),
                    e.hide().find("li.sel").addClass("selected"),
                    t.removeClass("focused opened dropup dropdown")));
        }
        (a.prototype = {
            init: function () {
                var e,
                    t,
                    n,
                    i,
                    s,
                    P = z(this.element),
                    I = this.options,
                    A = !(!navigator.userAgent.match(/(iPad|iPhone|iPod)/i) || navigator.userAgent.match(/(Windows\sPhone)/i)),
                    a = !(!navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/(Windows\sPhone)/i));
                function L() {
                    void 0 !== P.attr("id") && "" !== P.attr("id") && (this.id = P.attr("id") + I.idSuffix), (this.title = P.attr("title")), (this.classes = P.attr("class")), (this.data = P.data());
                }
                P.is(":checkbox")
                    ? ((e = function () {
                          var e = new L(),
                              t = z('<div class="jq-checkbox"><div class="jq-checkbox__div"></div></div>').attr({ id: e.id, title: e.title }).addClass(e.classes).data(e.data);
                          P.after(t).prependTo(t),
                              P.is(":checked") && t.addClass("checked"),
                              P.is(":disabled") && t.addClass("disabled"),
                              t.click(function (e) {
                                  e.preventDefault(),
                                      P.triggerHandler("click"),
                                      t.is(".disabled") || (P.is(":checked") ? (P.prop("checked", !1), t.removeClass("checked")) : (P.prop("checked", !0), t.addClass("checked")), P.focus().change());
                              }),
                              P.closest("label")
                                  .add('label[for="' + P.attr("id") + '"]')
                                  .on("click.styler", function (e) {
                                      z(e.target).is("a") || z(e.target).closest(t).length || (t.triggerHandler("click"), e.preventDefault());
                                  }),
                              P.on("change.styler", function () {
                                  P.is(":checked") ? t.addClass("checked") : t.removeClass("checked");
                              })
                                  .on("keydown.styler", function (e) {
                                      32 == e.which && t.click();
                                  })
                                  .on("focus.styler", function () {
                                      t.is(".disabled") || t.addClass("focused");
                                  })
                                  .on("blur.styler", function () {
                                      t.removeClass("focused");
                                  });
                      })(),
                      P.on("refresh", function () {
                          P.closest("label")
                              .add('label[for="' + P.attr("id") + '"]')
                              .off(".styler"),
                              P.off(".styler").parent().before(P).remove(),
                              e();
                      }))
                    : P.is(":radio")
                    ? ((t = function () {
                          var e = new L(),
                              t = z('<div class="jq-radio"><div class="jq-radio__div"></div></div>').attr({ id: e.id, title: e.title }).addClass(e.classes).data(e.data);
                          P.after(t).prependTo(t),
                              P.is(":checked") && t.addClass("checked"),
                              P.is(":disabled") && t.addClass("disabled"),
                              (z.fn.commonParents = function () {
                                  var e = this;
                                  return e
                                      .first()
                                      .parents()
                                      .filter(function () {
                                          return z(this).find(e).length === e.length;
                                      });
                              }),
                              (z.fn.commonParent = function () {
                                  return z(this).commonParents().first();
                              }),
                              t.click(function (e) {
                                  e.preventDefault(),
                                      P.triggerHandler("click"),
                                      t.is(".disabled") ||
                                          ((e = z('input[name="' + P.attr("name") + '"]')).commonParent().find(e).prop("checked", !1).parent().removeClass("checked"), P.prop("checked", !0).parent().addClass("checked"), P.focus().change());
                              }),
                              P.closest("label")
                                  .add('label[for="' + P.attr("id") + '"]')
                                  .on("click.styler", function (e) {
                                      z(e.target).is("a") || z(e.target).closest(t).length || (t.triggerHandler("click"), e.preventDefault());
                                  }),
                              P.on("change.styler", function () {
                                  P.parent().addClass("checked");
                              })
                                  .on("focus.styler", function () {
                                      t.is(".disabled") || t.addClass("focused");
                                  })
                                  .on("blur.styler", function () {
                                      t.removeClass("focused");
                                  });
                      })(),
                      P.on("refresh", function () {
                          P.closest("label")
                              .add('label[for="' + P.attr("id") + '"]')
                              .off(".styler"),
                              P.off(".styler").parent().before(P).remove(),
                              t();
                      }))
                    : P.is(":file")
                    ? ((n = function () {
                          var e = new L(),
                              i = P.data("placeholder");
                          void 0 === i && (i = I.filePlaceholder);
                          var t = P.data("browse");
                          (void 0 !== t && "" !== t) || (t = I.fileBrowse);
                          var s = z('<div class="jq-file"><div class="jq-file__name">' + i + '</div><div class="jq-file__browse">' + t + "</div></div>")
                              .attr({ id: e.id, title: e.title })
                              .addClass(e.classes)
                              .data(e.data);
                          P.after(s).appendTo(s), P.is(":disabled") && s.addClass("disabled");
                          var e = P.val(),
                              a = z("div.jq-file__name", s);
                          e && a.text(e.replace(/.+[\\\/]/, "")),
                              P.on("change.styler", function () {
                                  var e,
                                      t,
                                      n = P.val();
                                  P.is("[multiple]") && ((n = ""), 0 < (e = P[0].files.length) && (n = t = (t = void 0 === (t = P.data("number")) ? I.fileNumber : t).replace("%s", e))),
                                      a.text(n.replace(/.+[\\\/]/, "")),
                                      "" === n ? (a.text(i), s.removeClass("changed")) : s.addClass("changed");
                              })
                                  .on("focus.styler", function () {
                                      s.addClass("focused");
                                  })
                                  .on("blur.styler", function () {
                                      s.removeClass("focused");
                                  })
                                  .on("click.styler", function () {
                                      s.removeClass("focused");
                                  });
                      })(),
                      P.on("refresh", function () {
                          P.off(".styler").parent().before(P).remove(), n();
                      }))
                    : P.is('input[type="number"]')
                    ? ((i = function () {
                          var e = new L(),
                              t = z('<div class="jq-number"><div class="jq-number__spin minus"></div><div class="jq-number__spin plus"></div></div>').attr({ id: e.id, title: e.title }).addClass(e.classes).data(e.data);
                          P.after(t).prependTo(t).wrap('<div class="jq-number__field"></div>'), P.is(":disabled") && t.addClass("disabled");
                          var a,
                              r,
                              n = null,
                              i = null;
                          void 0 !== P.attr("min") && (a = P.attr("min")), void 0 !== P.attr("max") && (r = P.attr("max"));
                          function s(e) {
                              var t,
                                  n = P.val();
                              z.isNumeric(n) || ((n = 0), P.val("0")), e.is(".minus") ? (t = Number(n) - o) : e.is(".plus") && (t = Number(n) + o);
                              var i = (o.toString().split(".")[1] || []).length;
                              if (0 < i) {
                                  for (var s = "1"; s.length <= i; ) s += "0";
                                  t = Math.round(t * s) / s;
                              }
                              z.isNumeric(a) && z.isNumeric(r) ? a <= t && t <= r && P.val(t) : z.isNumeric(a) && !z.isNumeric(r) ? a <= t && P.val(t) : (z.isNumeric(a) || !z.isNumeric(r) || t <= r) && P.val(t);
                          }
                          var o = void 0 !== P.attr("step") && z.isNumeric(P.attr("step")) ? Number(P.attr("step")) : Number(1);
                          t.is(".disabled") ||
                              (t
                                  .on("mousedown", "div.jq-number__spin", function () {
                                      var e = z(this);
                                      s(e),
                                          (n = setTimeout(function () {
                                              i = setInterval(function () {
                                                  s(e);
                                              }, 40);
                                          }, 350));
                                  })
                                  .on("mouseup mouseout", "div.jq-number__spin", function () {
                                      clearTimeout(n), clearInterval(i);
                                  })
                                  .on("mouseup", "div.jq-number__spin", function () {
                                      P.change().trigger("input");
                                  }),
                              P.on("focus.styler", function () {
                                  t.addClass("focused");
                              }).on("blur.styler", function () {
                                  t.removeClass("focused");
                              }));
                      })(),
                      P.on("refresh", function () {
                          P.off(".styler").closest(".jq-number").before(P).remove(), i();
                      }))
                    : P.is("select")
                    ? ((s = function () {
                          function E(t) {
                              var n,
                                  i,
                                  s = t.prop("scrollHeight") - t.outerHeight();
                              t.off("mousewheel DOMMouseScroll").on("mousewheel DOMMouseScroll", function (e) {
                                  (n = e.originalEvent.detail < 0 || 0 < e.originalEvent.wheelDelta ? 1 : -1), (i = t.scrollTop()), ((s <= i && n < 0) || (i <= 0 && 0 < n)) && (e.stopPropagation(), e.preventDefault());
                              });
                          }
                          var $ = z("option", P),
                              k = "";
                          function M() {
                              for (var e = 0; e < $.length; e++) {
                                  var t = $.eq(e),
                                      n = "",
                                      i = "",
                                      s = "",
                                      a = "",
                                      r = "",
                                      o = "",
                                      l = "",
                                      c = "",
                                      d = "";
                                  t.prop("selected") && (i = "selected sel"),
                                      t.is(":disabled") && (i = "disabled"),
                                      t.is(":selected:disabled") && (i = "selected sel disabled"),
                                      void 0 !== t.attr("id") && "" !== t.attr("id") && (a = ' id="' + t.attr("id") + I.idSuffix + '"'),
                                      void 0 !== t.attr("title") && "" !== $.attr("title") && (r = ' title="' + t.attr("title") + '"'),
                                      void 0 !== t.attr("class") && ((l = " " + t.attr("class")), (d = ' data-jqfs-class="' + t.attr("class") + '"'));
                                  var p,
                                      u = t.data();
                                  for (p in u) "" !== u[p] && (o += " data-" + p + '="' + u[p] + '"');
                                  (n = "<li" + d + o + (s = i + l !== "" ? ' class="' + i + l + '"' : s) + r + a + ">" + t.html() + "</li>"),
                                      t.parent().is("optgroup") &&
                                          ((n = "<li" + d + o + ' class="' + i + l + " option" + (c = void 0 !== t.parent().attr("class") ? " " + t.parent().attr("class") : c) + '"' + r + a + ">" + t.html() + "</li>"),
                                          t.is(":first-child") && (n = '<li class="optgroup' + c + '">' + t.parent().attr("label") + "</li>" + n)),
                                      (k += n);
                              }
                          }
                          function e() {
                              var e = new L(),
                                  t = "",
                                  n = P.data("placeholder"),
                                  i = P.data("search"),
                                  s = P.data("search-limit"),
                                  a = P.data("search-not-found"),
                                  r = P.data("search-placeholder"),
                                  o = P.data("smart-positioning");
                              void 0 === n && (n = I.selectPlaceholder),
                                  (void 0 !== i && "" !== i) || (i = I.selectSearch),
                                  (void 0 !== s && "" !== s) || (s = I.selectSearchLimit),
                                  (void 0 !== a && "" !== a) || (a = I.selectSearchNotFound),
                                  void 0 === r && (r = I.selectSearchPlaceholder),
                                  (void 0 !== o && "" !== o) || (o = I.selectSmartPositioning);
                              var l = z(
                                  '<div class="jq-selectbox jqselect"><div class="jq-selectbox__select"><div class="jq-selectbox__select-text"></div><div class="jq-selectbox__trigger"><div class="jq-selectbox__trigger-arrow"></div></div></div></div>'
                              )
                                  .attr({ id: e.id, title: e.title })
                                  .addClass(e.classes)
                                  .data(e.data);
                              P.after(l).prependTo(l);
                              var c = 0 < (c = l.css("z-index")) ? c : 1,
                                  d = z("div.jq-selectbox__select", l),
                                  p = z("div.jq-selectbox__select-text", l),
                                  e = $.filter(":selected");
                              M();
                              var u = z(
                                  '<div class="jq-selectbox__dropdown">' +
                                      (t = i ? '<div class="jq-selectbox__search"><input type="search" autocomplete="off" placeholder="' + r + '"></div><div class="jq-selectbox__not-found">' + a + "</div>" : t) +
                                      "<ul>" +
                                      k +
                                      "</ul></div>"
                              );
                              l.append(u);
                              var f = z("ul", u),
                                  h = z("li", u),
                                  m = z("input", u),
                                  g = z("div.jq-selectbox__not-found", u).hide();
                              h.length < s && m.parent().hide(), "" === $.first().text() && $.first().is(":selected") && !1 !== n ? p.text(n).addClass("placeholder") : p.text(e.text());
                              var v = 0,
                                  b = 0;
                              h.css({ display: "inline-block" }),
                                  h.each(function () {
                                      var e = z(this);
                                      e.innerWidth() > v && ((v = e.innerWidth()), (b = e.width()));
                                  }),
                                  h.css({ display: "" }),
                                  p.is(".placeholder") && p.width() > v ? p.width(p.width()) : ((y = (T = l.clone().appendTo("body").width("auto")).outerWidth()), T.remove(), y == l.outerWidth() && p.width(b)),
                                  v > l.width() && u.width(v),
                                  "" === $.first().text() && "" !== P.data("placeholder") && h.first().hide();
                              var y,
                                  x = l.outerHeight(!0),
                                  w = m.parent().outerHeight(!0) || 0,
                                  C = f.css("max-height"),
                                  T = h.filter(".selected");
                              T.length < 1 && h.first().addClass("selected sel"), void 0 === h.data("li-height") && ((y = h.outerHeight()), !1 !== n && (y = h.eq(1).outerHeight()), h.data("li-height", y));
                              var S = u.css("top");
                              "auto" == u.css("left") && u.css({ left: 0 }),
                                  "auto" == u.css("top") && (u.css({ top: x }), (S = x)),
                                  u.hide(),
                                  T.length && ($.first().text() != e.text() && l.addClass("changed"), l.data("jqfs-class", T.data("jqfs-class")), l.addClass(T.data("jqfs-class"))),
                                  P.is(":disabled")
                                      ? l.addClass("disabled")
                                      : (d.click(function () {
                                            var t, n, i, s, e, a, r;
                                            z("div.jq-selectbox").filter(".opened").length && I.onSelectClosed.call(z("div.jq-selectbox").filter(".opened")),
                                                P.focus(),
                                                A ||
                                                    ((t = z(window)),
                                                    (n = h.data("li-height")),
                                                    (i = l.offset().top),
                                                    (s = t.height() - x - (i - t.scrollTop())),
                                                    (void 0 !== (r = P.data("visible-options")) && "" !== r) || (r = I.selectVisibleOptions),
                                                    (e = 5 * n),
                                                    (a = n * r),
                                                    0 < r && r < 6 && (e = a),
                                                    0 === r && (a = "auto"),
                                                    (r = function () {
                                                        u.height("auto").css({ bottom: "auto", top: S });
                                                        function e() {
                                                            f.css("max-height", Math.floor((s - 20 - w) / n) * n);
                                                        }
                                                        e(), f.css("max-height", a), "none" != C && f.css("max-height", C), s < u.outerHeight() + 20 && e();
                                                    }),
                                                    !0 === o || 1 === o
                                                        ? e + w + 20 < s
                                                            ? (r(), l.removeClass("dropup").addClass("dropdown"))
                                                            : ((function () {
                                                                  u.height("auto").css({ top: "auto", bottom: S });
                                                                  function e() {
                                                                      f.css("max-height", Math.floor((i - t.scrollTop() - 20 - w) / n) * n);
                                                                  }
                                                                  e(), f.css("max-height", a), "none" != C && f.css("max-height", C), i - t.scrollTop() - 20 < u.outerHeight() + 20 && e();
                                                              })(),
                                                              l.removeClass("dropdown").addClass("dropup"))
                                                        : !1 === o || 0 === o
                                                        ? e + w + 20 < s && (r(), l.removeClass("dropup").addClass("dropdown"))
                                                        : (u.height("auto").css({ bottom: "auto", top: S }), f.css("max-height", a), "none" != C && f.css("max-height", C)),
                                                    l.offset().left + u.outerWidth() > t.width() && u.css({ left: "auto", right: 0 }),
                                                    z("div.jqselect")
                                                        .css({ zIndex: c - 1 })
                                                        .removeClass("opened"),
                                                    l.css({ zIndex: c }),
                                                    u.is(":hidden")
                                                        ? (z("div.jq-selectbox__dropdown:visible").hide(), u.show(), l.addClass("opened focused"), I.onSelectOpened.call(l))
                                                        : (u.hide(), l.removeClass("opened dropup dropdown"), z("div.jq-selectbox").filter(".opened").length && I.onSelectClosed.call(l)),
                                                    m.length &&
                                                        (m.val("").keyup(),
                                                        g.hide(),
                                                        m.keyup(function () {
                                                            var e = z(this).val();
                                                            h.each(function () {
                                                                z(this)
                                                                    .html()
                                                                    .match(new RegExp(".*?" + e + ".*?", "i"))
                                                                    ? z(this).show()
                                                                    : z(this).hide();
                                                            }),
                                                                "" === $.first().text() && "" !== P.data("placeholder") && h.first().hide(),
                                                                h.filter(":visible").length < 1 ? g.show() : g.hide();
                                                        })),
                                                    h.filter(".selected").length &&
                                                        ("" === P.val() ? f.scrollTop(0) : ((f.innerHeight() / n) % 2 != 0 && (n /= 2), f.scrollTop(f.scrollTop() + h.filter(".selected").position().top - f.innerHeight() / 2 + n))),
                                                    E(f));
                                        }),
                                        h.hover(function () {
                                            z(this).siblings().removeClass("selected");
                                        }),
                                        h.filter(".selected").text(),
                                        h.filter(":not(.disabled):not(.optgroup)").click(function () {
                                            P.focus();
                                            var e,
                                                t = z(this),
                                                n = t.text();
                                            t.is(".selected") ||
                                                ((e = t.index()),
                                                (e -= t.prevAll(".optgroup").length),
                                                t.addClass("selected sel").siblings().removeClass("selected sel"),
                                                $.prop("selected", !1).eq(e).prop("selected", !0),
                                                p.text(n),
                                                l.data("jqfs-class") && l.removeClass(l.data("jqfs-class")),
                                                l.data("jqfs-class", t.data("jqfs-class")),
                                                l.addClass(t.data("jqfs-class")),
                                                P.change()),
                                                u.hide(),
                                                l.removeClass("opened dropup dropdown"),
                                                I.onSelectClosed.call(l);
                                        }),
                                        u.mouseout(function () {
                                            z("li.sel", u).addClass("selected");
                                        }),
                                        P.on("change.styler", function () {
                                            p.text($.filter(":selected").text()).removeClass("placeholder"),
                                                h.removeClass("selected sel").not(".optgroup").eq(P[0].selectedIndex).addClass("selected sel"),
                                                $.first().text() != h.filter(".selected").text() ? l.addClass("changed") : l.removeClass("changed");
                                        })
                                            .on("focus.styler", function () {
                                                l.addClass("focused"), z("div.jqselect").not(".focused").removeClass("opened dropup dropdown").find("div.jq-selectbox__dropdown").hide();
                                            })
                                            .on("blur.styler", function () {
                                                l.removeClass("focused");
                                            })
                                            .on("keydown.styler keyup.styler", function (e) {
                                                var t = h.data("li-height");
                                                "" === P.val() ? p.text(n).addClass("placeholder") : p.text($.filter(":selected").text()),
                                                    h.removeClass("selected sel").not(".optgroup").eq(P[0].selectedIndex).addClass("selected sel"),
                                                    (38 != e.which && 37 != e.which && 33 != e.which && 36 != e.which) || ("" === P.val() ? f.scrollTop(0) : f.scrollTop(f.scrollTop() + h.filter(".selected").position().top)),
                                                    (40 != e.which && 39 != e.which && 34 != e.which && 35 != e.which) || f.scrollTop(f.scrollTop() + h.filter(".selected").position().top - f.innerHeight() + t),
                                                    13 == e.which && (e.preventDefault(), u.hide(), l.removeClass("opened dropup dropdown"), I.onSelectClosed.call(l));
                                            })
                                            .on("keydown.styler", function (e) {
                                                32 == e.which && (e.preventDefault(), d.click());
                                            }),
                                        O.registered || (z(document).on("click", O), (O.registered = !0)));
                          }
                          P.is("[multiple]")
                              ? a ||
                                A ||
                                (function () {
                                    var e = new L(),
                                        t = z('<div class="jq-select-multiple jqselect"></div>').attr({ id: e.id, title: e.title }).addClass(e.classes).data(e.data);
                                    P.after(t), M(), t.append("<ul>" + k + "</ul>");
                                    var n = z("ul", t),
                                        s = z("li", t),
                                        i = P.attr("size"),
                                        e = n.outerHeight(),
                                        a = s.outerHeight();
                                    void 0 !== i && 0 < i ? n.css({ height: a * i }) : n.css({ height: 4 * a }),
                                        e > t.height() && (n.css("overflowY", "scroll"), E(n), s.filter(".selected").length && n.scrollTop(n.scrollTop() + s.filter(".selected").position().top)),
                                        P.prependTo(t),
                                        P.is(":disabled")
                                            ? (t.addClass("disabled"),
                                              $.each(function () {
                                                  z(this).is(":selected") && s.eq(z(this).index()).addClass("selected");
                                              }))
                                            : (s.filter(":not(.disabled):not(.optgroup)").click(function (e) {
                                                  P.focus();
                                                  var t,
                                                      n,
                                                      i = z(this);
                                                  e.ctrlKey || e.metaKey || i.addClass("selected"),
                                                      e.shiftKey || i.addClass("first"),
                                                      e.ctrlKey || e.metaKey || e.shiftKey || i.siblings().removeClass("selected first"),
                                                      (e.ctrlKey || e.metaKey) && (i.is(".selected") ? i.removeClass("selected first") : i.addClass("selected first"), i.siblings().removeClass("first")),
                                                      e.shiftKey &&
                                                          ((n = t = !1),
                                                          i.siblings().removeClass("selected").siblings(".first").addClass("selected"),
                                                          i.prevAll().each(function () {
                                                              z(this).is(".first") && (t = !0);
                                                          }),
                                                          i.nextAll().each(function () {
                                                              z(this).is(".first") && (n = !0);
                                                          }),
                                                          t &&
                                                              i.prevAll().each(function () {
                                                                  return !z(this).is(".selected") && void z(this).not(".disabled, .optgroup").addClass("selected");
                                                              }),
                                                          n &&
                                                              i.nextAll().each(function () {
                                                                  return !z(this).is(".selected") && void z(this).not(".disabled, .optgroup").addClass("selected");
                                                              }),
                                                          1 == s.filter(".selected").length && i.addClass("first")),
                                                      $.prop("selected", !1),
                                                      s.filter(".selected").each(function () {
                                                          var e = z(this),
                                                              t = e.index();
                                                          e.is(".option") && (t -= e.prevAll(".optgroup").length), $.eq(t).prop("selected", !0);
                                                      }),
                                                      P.change();
                                              }),
                                              $.each(function (e) {
                                                  z(this).data("optionIndex", e);
                                              }),
                                              P.on("change.styler", function () {
                                                  s.removeClass("selected");
                                                  var t = [];
                                                  $.filter(":selected").each(function () {
                                                      t.push(z(this).data("optionIndex"));
                                                  }),
                                                      s
                                                          .not(".optgroup")
                                                          .filter(function (e) {
                                                              return -1 < z.inArray(e, t);
                                                          })
                                                          .addClass("selected");
                                              })
                                                  .on("focus.styler", function () {
                                                      t.addClass("focused");
                                                  })
                                                  .on("blur.styler", function () {
                                                      t.removeClass("focused");
                                                  }),
                                              e > t.height() &&
                                                  P.on("keydown.styler", function (e) {
                                                      (38 != e.which && 37 != e.which && 33 != e.which) || n.scrollTop(n.scrollTop() + s.filter(".selected").position().top - a),
                                                          (40 != e.which && 39 != e.which && 34 != e.which) || n.scrollTop(n.scrollTop() + s.filter(".selected:last").position().top - n.innerHeight() + 2 * a);
                                                  }));
                                })()
                              : e();
                      })(),
                      P.on("refresh", function () {
                          P.off(".styler").parent().before(P).remove(), s();
                      }))
                    : P.is(":reset") &&
                      P.on("click", function () {
                          setTimeout(function () {
                              P.closest("form").find("input, select").trigger("refresh");
                          }, 1);
                      });
            },
            destroy: function () {
                var e = z(this.element);
                e.is(":checkbox") || e.is(":radio")
                    ? (e
                          .removeData("_" + s)
                          .off(".styler refresh")
                          .removeAttr("style")
                          .parent()
                          .before(e)
                          .remove(),
                      e
                          .closest("label")
                          .add('label[for="' + e.attr("id") + '"]')
                          .off(".styler"))
                    : e.is('input[type="number"]')
                    ? e
                          .removeData("_" + s)
                          .off(".styler refresh")
                          .closest(".jq-number")
                          .before(e)
                          .remove()
                    : (e.is(":file") || e.is("select")) &&
                      e
                          .removeData("_" + s)
                          .off(".styler refresh")
                          .removeAttr("style")
                          .parent()
                          .before(e)
                          .remove();
            },
        }),
            (z.fn[s] = function (t) {
                var n,
                    i = arguments;
                return void 0 === t || "object" == typeof t
                    ? (this.each(function () {
                          z.data(this, "_" + s) || z.data(this, "_" + s, new a(this, t));
                      })
                          .promise()
                          .done(function () {
                              var e = z(this[0]).data("_" + s);
                              e && e.options.onFormStyled.call();
                          }),
                      this)
                    : "string" == typeof t && "_" !== t[0] && "init" !== t
                    ? (this.each(function () {
                          var e = z.data(this, "_" + s);
                          e instanceof a && "function" == typeof e[t] && (n = e[t].apply(e, Array.prototype.slice.call(i, 1)));
                      }),
                      void 0 !== n ? n : this)
                    : void 0;
            }),
            (O.registered = !1);
    }),
    $(function () {
        $(".menu__list-select").styler(),
            $(".payment__price-input").styler(),
            $(".payment__card").styler({}),
            $(".menu__list-langText").on("click", function () {
                $(".menu__list-lang").toggleClass("active");
            }),
            $(window).on("resize", function () {
                1250 < $(window).width() &&
                    $(".menu__list-lang").on("mouseout", function () {
                        $(".menu__list-lang").toggleClass("active");
                    });
            }),
            $(".header__btn").on("click", function () {
                $(".header__btn").toggleClass("header__btn--active"), $(".header").toggleClass("header--menu");
            }),
            $(".faq__item-title").on("click", function () {
                $(".faq__item").removeClass("faq__item--active"), $(this).parent().addClass("faq__item--active");
            }),
            $(".cabinet-link, .donations-item__link, .project__btn, .entrance__link, .entrance__link, .pop-link").magnificPopup({
                type: "inline",
                preloader: !1,
                focus: "#name",
                callbacks: {
                    beforeOpen: function () {
                        $(window).width() < 700 ? (this.st.focus = !1) : (this.st.focus = "#name");
                    },
                },
            }),
            $(".new-password__item-eye").on("click", function () {
                $(this).toggleClass("new-password__item-eye--active");
            }),
            $(".entrance__item-eye").on("click", function () {
                $(this).toggleClass("entrance__item-eye--active");
            });
        var e = null;
        $(window).on("load resize", function () {
            775 <= $(this).innerWidth()
                ? (e =
                      e ||
                      new Swiper(".swiper-projects", {
                          slidesPerView: 1,
                          slidesPerGroupSkip: 4,
                          spaceBetween: 24,
                          freeMode: !0,
                          pagination: { el: ".swiper-pagination", clickable: !0 },
                          scrollbar: { el: ".swiper-scrollbar", draggable: !0 },
                          navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
                          breakpoints: { 1200: { slidesPerView: 3, spaceBetween: 24 }, 800: { slidesPerView: 2, spaceBetween: 20 } },
                      }))
                : e && (e.destroy(), (e = null));
        });

        if ($(".swiper").length) {
	        var mySwiper = new Swiper(".swiper", {
			    slidesPerView: 1,
			    slidesPerGroupSkip: 1,
			    pagination: { el: ".swiper-pagination", clickable: !0 },
			    scrollbar: { el: ".swiper-scrollbar" },
			    navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
			    breakpoints: { 1200: { slidesPerView: 4, spaceBetween: 30 }, 900: { slidesPerView: 3, spaceBetween: 30 }, 630: { slidesPerView: 2, spaceBetween: 20 } },
			});
			const swiperPrev = document.getElementById("swiperPrev"),
			    swiperNext = document.getElementById("swiperNext");
			swiperPrev.addEventListener("click", () => {
			    mySwiper.slidePrev();
			}),
		    swiperNext.addEventListener("click", () => {
		        mySwiper.slideNext();
		    });
		}
    });
