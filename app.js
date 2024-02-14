! function(t) {
    function e(e) {
        for (var o, a, s = e[0], l = e[1], c = e[2], f = 0, h = []; f < s.length; f++) a = s[f], i[a] && h.push(i[a][0]), i[a] = 0;
        for (o in l) Object.prototype.hasOwnProperty.call(l, o) && (t[o] = l[o]);
        for (u && u(e); h.length;) h.shift()();
        return r.push.apply(r, c || []), n()
    }

    function n() {
        for (var t, e = 0; e < r.length; e++) {
            for (var n = r[e], o = !0, s = 1; s < n.length; s++) {
                var l = n[s];
                0 !== i[l] && (o = !1)
            }
            o && (r.splice(e--, 1), t = a(a.s = n[0]))
        }
        return t
    }
    var o = {},
        i = {
            1: 0
        },
        r = [];

    function a(e) {
        if (o[e]) return o[e].exports;
        var n = o[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(n.exports, n, n.exports, a), n.l = !0, n.exports
    }
    a.m = t, a.c = o, a.d = function(t, e, n) {
        a.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: n
        })
    }, a.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, a.t = function(t, e) {
        if (1 & e && (t = a(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if (a.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var o in t) a.d(n, o, function(e) {
                return t[e]
            }.bind(null, o));
        return n
    }, a.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return a.d(e, "a", e), e
    }, a.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, a.p = "/blueprint/static/js/";
    var s = window["tkde-webpack-jsonp"] = window["tkde-webpack-jsonp"] || [],
        l = s.push.bind(s);
    s.push = e, s = s.slice();
    for (var c = 0; c < s.length; c++) e(s[c]);
    var u = l;
    r.push([110, 0]), n()
}([, , , , , , , , , , , function(t, e, n) {
    "use strict";
    n(4), n(5), n(6), n(59), n(16), n(42), n(0), n(8), n(1), n(40), n(9), n(26), n(2), n(3), n(60), n(7), Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.Component = void 0;
    var o = n(41),
        i = n(13),
        r = n(22),
        a = l(n(14)),
        s = n(46);

    function l(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function c(t) {
        return (c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function u(t, e) {
        for (var n = 0; n < e.length; n++) {
            var o = e[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
        }
    }

    function f(t, e, n) {
        return e && u(t.prototype, e), n && u(t, n), t
    }

    function h(t, e) {
        return (h = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    function d(t) {
        var e = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
            } catch (t) {
                return !1
            }
        }();
        return function() {
            var n, o = g(t);
            if (e) {
                var i = g(this).constructor;
                n = Reflect.construct(o, arguments, i)
            } else n = o.apply(this, arguments);
            return p(this, n)
        }
    }

    function p(t, e) {
        return !e || "object" !== c(e) && "function" != typeof e ? y(t) : e
    }

    function y(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }

    function g(t) {
        return (g = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }
    var m = (0, l(n(137)).default)("global/Component"),
        b = function(t) {
            ! function(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && h(t, e)
            }(o, t);
            var e = d(o);

            function o(t, n) {
                var i;
                return function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, o), (i = e.call(this)).application = t, i.$root = (0, a.default)(n), i.$elements = {
                    root: (0, a.default)(n)
                }, i.elements = {
                    root: y(i)
                }, i.bindings = [], i.selectors = {}, i.components = {}, i.signals.stateChanged = new s.Signal, i._state = o.LOADING, i.useTouchAsClick = !1, i.lastTouchTarget = null, i.lastTouchType = null, i
            }
            return f(o, null, [{
                key: "LOADING",
                get: function() {
                    return "LOADING"
                }
            }, {
                key: "LOADED",
                get: function() {
                    return "LOADED"
                }
            }, {
                key: "ACTIVATED",
                get: function() {
                    return "ACTIVATED"
                }
            }, {
                key: "DEACTIVATED",
                get: function() {
                    return "DEACTIVATED"
                }
            }]), f(o, [{
                key: "updateBindings",
                value: function(t) {
                    for (var e in this.log("updateBindings: remove=", t), this.bindings) {
                        var n = this.bindings[e].split(":"),
                            o = n.length > 1 ? n[0] : "click",
                            i = 1 === n.length ? n[0] : n[1],
                            r = 3 === n.length ? n[2] : null,
                            s = void 0;
                        (s = "$" === i.charAt(0) ? this.$elements[i.substring(1)] : (0, a.default)(i)) && (!0 === t ? s.off(o) : r ? (s.on(o, r, this[e].bind(this)), this.hasTouchClick(o) && s.on("touchstart touchend touchmove", r, this.touchHandler.bind(this, e))) : (s.on(o, this[e].bind(this)), this.hasTouchClick(o) && s.on("touchstart touchend touchmove", this.touchHandler.bind(this, e))))
                    }
                }
            }, {
                key: "hasTouchClick",
                value: function(t) {
                    return !0 === this.useTouchAsClick && "click" === t
                }
            }, {
                key: "touchHandler",
                value: function(t, e) {
                    "touchmove" === e.type ? this.ignoreTouchend = !0 : e.target === this.lastTouchTarget ? ("touchend" === e.type && !0 !== this.ignoreTouchend && (this.log("touchstart is handled as a click for (type" + e.type + ") " + t), this[t](e)), this.lastTouchTarget = null, this.lastTouchType = null, this.ignoreTouchend = !1) : (this.lastTouchTarget = e.target, this.lastTouchType = e.type)
                }
            }, {
                key: "getInstances",
                value: function() {
                    var t = this;
                    this.log("getInstances");
                    var e = [],
                        n = function(n) {
                            e.push(function() {
                                t.log("Root", t.$root);
                                var e = t.components[n],
                                    i = t.$root.find(e);
                                return i.length ? o.getInstance(t.application, i).then((function(t) {
                                    this.log("getInstances - adding instance " + n), this.elements[n] = t
                                })).catch(r.errorHandler.bind(t, t.className + "::initialize")) : (t.log("getInstances - no elements found for " + e), Promise.resolve(!1))
                            }())
                        };
                    for (var i in this.components) n(i);
                    return Promise.all(e).catch(r.errorHandler.bind(this, this.className + "::initialize"))
                }
            }, {
                key: "prepare",
                value: function() {
                    return this.log("prepare"), Promise.resolve(!0)
                }
            }, {
                key: "trackAction",
                value: function(t) {
                    this.application.analytics ? (this.application.analytics.trackAction(t), this.log("trackAction / ".concat(t))) : this.log('trackAction / unable to track action "'.concat(t, '" - this.application.analytics not found'))
                }
            }, {
                key: "activate",
                value: function() {
                    return this.log("activate"), this.state.toString() === o.LOADING || this.state.toString() === o.ACTIVATED ? Promise.resolve(!1) : (this.updateBindings(), this.state = o.ACTIVATED, this.$root.removeClass(i.State.INACTIVE).addClass(i.State.ACTIVE), Promise.resolve(!0))
                }
            }, {
                key: "deactivate",
                value: function() {
                    return this.log("deactivate"), this.state.toString() === o.DEACTIVATED ? Promise.resolve(!1) : (this.updateBindings(!0), this.state = o.DEACTIVATED, Promise.resolve(!0))
                }
            }, {
                key: "initialize",
                value: function() {
                    var t = this;
                    return this.state.toString() !== o.LOADING ? (this.log("initialize skipped because state is not LOADING"), Promise.resolve(!1)) : new Promise((function(e) {
                        for (var n in t.log("initialize", t.$root), t.selectors) n && "$" === n.substring(0, 1) && (t.$elements[n.substring(1)] = t.$root.find(t.selectors[n]));
                        t.getInstances().then(t.prepare.bind(t)).then((function() {
                            t.state = o.LOADED
                        })).then(t.activate.bind(t)).then(e.bind(t, t)).catch(r.errorHandler.bind(t, t.className + "::initialize"))
                    }))
                }
            }, {
                key: "state",
                get: function() {
                    return this._state
                },
                set: function(t) {
                    if (this._state !== t) {
                        switch (this._state = t, this._state) {
                            case o.LOADING:
                                this.$root.removeClass(i.State.LOADED).addClass(i.State.LOADING);
                                break;
                            case o.LOADED:
                                this.$root.removeClass(i.State.LOADING).addClass(i.State.LOADED);
                                break;
                            case o.ACTIVATED:
                                this.$root.removeClass(i.State.INACTIVE).addClass(i.State.ACTIVE);
                                break;
                            case o.DEACTIVATED:
                                this.$root.removeClass(i.State.ACTIVE).addClass(i.State.INACTIVE)
                        }
                        this.signals.stateChanged && (this.log("Dispatch stateChanged", this._state), this.signals.stateChanged.dispatch(this, this._state))
                    }
                }
            }], [{
                key: "getInstance",
                value: function(t, e) {
                    if (m("getInstance", e), e.get(0).__component__) return Promise.resolve(e.get(0).__component__);
                    var o = e.data("entity"),
                        i = "base";
                    if (!o) return Promise.resolve(!1);
                    if (-1 !== o.indexOf("/")) {
                        var r = o.split("/");
                        i = r[0], o = r[1]
                    }
                    var a = o.split(/-/g),
                        s = a[0] + "-" + a[1],
                        l = "global";
                    switch (a[0].toLowerCase()) {
                        case "e":
                            l = "elements";
                            break;
                        case "m":
                            l = "modules";
                            break;
                        case "g":
                            l = "module-groups";
                            break;
                        case "c":
                            l = "coremedia"
                    }
                    return n(341)("./".concat(i, "/").concat(l, "/").concat(s, "/js/").concat(o).concat(".js")).then((function(n) {
                        if (!e || !e.get(0)) return Promise.resolve(!1);
                        if (e.get(0).__component__) return Promise.resolve(e.get(0).__component__);
                        var o = new n.Component(t, e);
                        return e.data("component", o), e.get(0).__component__ = o, e.get(0).__component__.initialize()
                    }))
                }
            }]), o
        }(o.Base);
    e.Component = b
}, , function(t, e, n) {
    "use strict";

    function o(t, e) {
        for (var n = 0; n < e.length; n++) {
            var o = e[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.State = void 0;
    var i = function() {
        function t() {
            ! function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, t)
        }
        var e, n, i;
        return e = t, i = [{
            key: "VISIBLE",
            get: function() {
                return "is-visible"
            }
        }, {
            key: "ACTIVE",
            get: function() {
                return "is-active"
            }
        }, {
            key: "STICKY",
            get: function() {
                return "is-sticky"
            }
        }, {
            key: "STICKY_END",
            get: function() {
                return "is-stickyend"
            }
        }, {
            key: "INACTIVE",
            get: function() {
                return "is-inactive"
            }
        }, {
            key: "LOADING",
            get: function() {
                return "is-loading"
            }
        }, {
            key: "LOADED",
            get: function() {
                return "is-loaded"
            }
        }, {
            key: "TOP",
            get: function() {
                return "is-top"
            }
        }, {
            key: "BOTTOM",
            get: function() {
                return "is-bottom"
            }
        }, {
            key: "SCROLLUP",
            get: function() {
                return "is-scrollup"
            }
        }, {
            key: "SCROLLDOWN",
            get: function() {
                return "is-scrolldown"
            }
        }, {
            key: "SCROLLING",
            get: function() {
                return "is-scrolling"
            }
        }, {
            key: "OPENED",
            get: function() {
                return "is-opened"
            }
        }, {
            key: "OPENED_INITIAL",
            get: function() {
                return "is-opened-initial"
            }
        }, {
            key: "CLOSED",
            get: function() {
                return "is-closed"
            }
        }, {
            key: "LOGGEDIN",
            get: function() {
                return "is-loggedin"
            }
        }, {
            key: "HIDDEN",
            get: function() {
                return "is-hidden"
            }
        }, {
            key: "HIDDEN_FOCUS",
            get: function() {
                return "has-hidden-focus"
            }
        }, {
            key: "HIDDEN_ACCESSIBLE",
            get: function() {
                return "is-hidden-accessible"
            }
        }, {
            key: "SELECTED",
            get: function() {
                return "is-selected"
            }
        }, {
            key: "CHILDREN",
            get: function() {
                return "has-children"
            }
        }, {
            key: "KINETIC_SCROLL",
            get: function() {
                return "has-kineticscroll"
            }
        }, {
            key: "IOS",
            get: function() {
                return "is-ios"
            }
        }, {
            key: "IOS_NAV_UP",
            get: function() {
                return "is-iosnavup"
            }
        }, {
            key: "IOS_NAV_DOWN",
            get: function() {
                return "is-iosnavdown"
            }
        }, {
            key: "FIXED",
            get: function() {
                return "is-fixed"
            }
        }, {
            key: "NOT_FIXED_IOS",
            get: function() {
                return "is-not-fixed-on-ios"
            }
        }, {
            key: "COLLAPSED",
            get: function() {
                return "is-collapsed"
            }
        }, {
            key: "EXPANDED",
            get: function() {
                return "is-expanded"
            }
        }, {
            key: "NOT_EMPTY",
            get: function() {
                return "is-notempty"
            }
        }, {
            key: "EMPTY",
            get: function() {
                return "is-empty"
            }
        }, {
            key: "DISABLED",
            get: function() {
                return "is-disabled"
            }
        }, {
            key: "KEYBOARD_FOCUS",
            get: function() {
                return "has-keyboardfocus"
            }
        }, {
            key: "SCROLLABLE",
            get: function() {
                return "is-scrollable"
            }
        }, {
            key: "TOUCH",
            get: function() {
                return "has-touch"
            }
        }, {
            key: "NO_TOUCH",
            get: function() {
                return "has-no-touch"
            }
        }, {
            key: "PREFACE",
            get: function() {
                return "has-preface"
            }
        }], (n = null) && o(e.prototype, n), i && o(e, i), t
    }();
    e.State = i
}, , , , , , , , , function(t, e, n) {
    "use strict";
    n(4), n(5), n(6), n(59), n(51), n(147), n(42), n(0), n(339), n(83), n(84), n(1), n(26), n(2), n(3), n(148), n(60), n(55), n(7), Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.debounce = function(t, e, n) {
        var o;
        return function() {
            var i = this,
                r = arguments,
                a = function() {
                    o = null, n || t.apply(i, r)
                },
                s = n && !o;
            clearTimeout(o), o = setTimeout(a, e), s && t.apply(i, r)
        }
    }, e.errorHandler = function(t, e) {
        console.log(t + " Error"), console.dir(e)
    }, e.isMobileSafari = r, e.getMobileSafariMajorVersion = function() {
        if (r()) return parseInt((navigator.userAgent || "").match(/Version\/(\d{1,2})/)[1]);
        return
    }, e.isMobile = function(t) {
        var e = t.viewport.breakpoint;
        return !(e === o.Breakpoints.APPLICATION || e === o.Breakpoints.DESKTOP)
    }, e.isKeyboardInitiatedClick = function(t) {
        return 0 == t.screenX && 0 == t.screenY
    }, e.isMotionReduced = function() {
        return window.matchMedia("(prefers-reduced-motion: reduce)").matches
    }, e.onScreenLog = function(t, e) {
        var n = $("body"),
            o = $(".logger .text");
        if (0 === o.length) {
            var i = $("\n            <div class='logger' style='position:fixed;font-size:8px;opacity:0.7;color:black;z-index:10000;top:0;left:0;pointer-events:none'>\n                <div class='reset' style='background-color:red;width:40px;height:40px;pointer-events:all' onclick=\"document.getElementsByClassName('text')[0].innerHTML=''\">RESET</div>\n                <div class='text' style='background-color:white;' ></div>\n            </div>\n        ");
            n.append(i), o = $(".logger .text")
        }
        o.append(t + "\n<br/>")
    }, e.forceRedraw = function(t) {
        var e = t.style.transform;
        t.style.transform = "translateZ(0)";
        t.offsetHeight;
        t.style.transform = e
    }, e.getCookie = function(t) {
        for (var e = t + "=", n = decodeURIComponent(document.cookie).split(";"), o = 0; o < n.length; o++) {
            for (var i = n[o];
                " " === i.charAt(0);) i = i.substring(1);
            if (0 === i.indexOf(e)) return i.substring(e.length, i.length)
        }
        return ""
    }, e.setCookie = function(t, e, n) {
        var o = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
            i = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
            r = ";expires=";
        if (void 0 !== n) {
            var s = new Date;
            s.setTime(s.getTime() + 24 * n * 60 * 60 * 1e3), r = ";expires=" + s.toUTCString()
        }
        var l = "";
        i && (l = ";domain=" + ("localhost" === a() ? "localhost" : "." + a()));
        var c = ";path=/",
            u = o ? ";secure" : "",
            f = ";SameSite=Lax",
            h = t + "=" + e + l + c + r + u + f;
        document.cookie = h
    }, e.expireCookie = function(t) {
        var e = new Date(0).toUTCString();
        (null !== (n = null === (o = document) || void 0 === o ? void 0 : o.domain.split(".").reverse().reduce((function(t, e, n) {
            return 0 === n ? [e] : 1 === n ? [".".concat(e, ".").concat(t[n - 1])] : [].concat(function(t) {
                if (Array.isArray(t)) return i(t)
            }(o = t) || function(t) {
                if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t)
            }(o) || function(t, e) {
                if (t) {
                    if ("string" == typeof t) return i(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? i(t, e) : void 0
                }
            }(o) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }(), [".".concat(e).concat(t[n - 2])]);
            var o
        }), [])) && void 0 !== n ? n : []).forEach((function(n) {
            document.cookie = "".concat(t, "=;domain=").concat(n, ";path=/;expires=").concat(e, ";secure=true;SameSite=Lax")
        }));
        var n, o
    }, e.addToLocalStorage = function(t, e) {
        null != e && window.localStorage.setItem(t, JSON.stringify(e))
    }, e.getFromLocalStorage = function(t) {
        var e = window.localStorage[t];
        if (null != e) return JSON.parse(e);
        return ""
    }, e.removeFromLocalStorage = function(t) {
        window.localStorage.removeItem(t)
    }, e.inViewport = function(t) {
        var e = t.offset().top,
            n = $(window),
            o = n.scrollTop(),
            i = o + n.height();
        return e >= o && e <= i
    }, e.removeUrlHash = function() {
        window.history.pushState("", window.document.title, window.location.href.split("#")[0])
    };
    var o = n(31);

    function i(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, o = new Array(e); n < e; n++) o[n] = t[n];
        return o
    }

    function r() {
        return "undefined" != typeof navigator && (/iPad|iPhone|iPod/.test(navigator.userAgent || "") || "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1)
    }

    function a() {
        var t = document.domain,
            e = t.split(".").reverse();
        return null != e && e.length > 1 ? e[1] + "." + e[0] : t
    }
}, , , , , , , , , function(t, e, n) {
    "use strict";

    function o(t) {
        return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function i(t, e) {
        for (var n = 0; n < e.length; n++) {
            var o = e[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
        }
    }

    function r(t, e, n) {
        return e && i(t.prototype, e), n && i(t, n), t
    }

    function a(t, e) {
        return (a = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    function s(t) {
        var e = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
            } catch (t) {
                return !1
            }
        }();
        return function() {
            var n, o = c(t);
            if (e) {
                var i = c(this).constructor;
                n = Reflect.construct(o, arguments, i)
            } else n = o.apply(this, arguments);
            return l(this, n)
        }
    }

    function l(t, e) {
        return !e || "object" !== o(e) && "function" != typeof e ? function(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function c(t) {
        return (c = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }
    n(4), n(5), n(6), n(0), n(84), n(8), n(1), n(40), n(9), n(2), n(3), n(7), Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.Breakpoints = void 0;
    var u = function(t) {
        ! function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && a(t, e)
        }(n, t);
        var e = s(n);

        function n() {
            var t;
            return function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, n), (t = e.call(this)).current = n.DESKTOP, t.breakpoints = [], t.breakpoints.push({
                name: "application",
                mediaQuery: "(min-width: 1280px)"
            }), t.breakpoints.push({
                name: "desktop",
                mediaQuery: "(min-width: 1025px) and (max-width: 1279px)"
            }), t.breakpoints.push({
                name: "tablet",
                mediaQuery: "(min-width: 1024px) and (max-width: 1024px)"
            }), t.breakpoints.push({
                name: "mini-tablet",
                mediaQuery: "(min-width: 768px) and (max-width: 1023px)"
            }), t.breakpoints.push({
                name: "phablet",
                mediaQuery: "(min-width: 376px) and (max-width: 767px)"
            }), t.breakpoints.push({
                name: "mobile",
                mediaQuery: "(max-width: 375px)"
            }), t
        }
        return r(n, null, [{
            key: "APPLICATION",
            get: function() {
                return "application"
            }
        }, {
            key: "DESKTOP",
            get: function() {
                return "desktop"
            }
        }, {
            key: "TABLET",
            get: function() {
                return "tablet"
            }
        }, {
            key: "MINITABLET",
            get: function() {
                return "mini-tablet"
            }
        }, {
            key: "PHABLET",
            get: function() {
                return "phablet"
            }
        }, {
            key: "MOBILE",
            get: function() {
                return "mobile"
            }
        }]), r(n, [{
            key: "determine",
            value: function() {
                var t = n.DESKTOP;
                $(this.breakpoints).each((function() {
                    window.matchMedia(this.mediaQuery).matches && (t = this.name)
                }));
                var e = this.current !== t;
                return this.current = t, Promise.resolve(e)
            }
        }]), n
    }(n(41).Base);
    e.Breakpoints = u
}, , , , , , , , , , function(t, e, n) {
    "use strict";
    n(59), n(12), n(1), n(40), Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.Base = void 0, n(144);
    var o, i = (o = n(137)) && o.__esModule ? o : {
        default: o
    };

    function r() {
        return (r = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
            }
            return t
        }).apply(this, arguments)
    }

    function a(t, e, n, o, i, r, a) {
        try {
            var s = t[r](a),
                l = s.value
        } catch (t) {
            return void n(t)
        }
        s.done ? e(l) : Promise.resolve(l).then(o, i)
    }

    function s(t) {
        return function() {
            var e = this,
                n = arguments;
            return new Promise((function(o, i) {
                var r = t.apply(e, n);

                function s(t) {
                    a(r, o, i, s, l, "next", t)
                }

                function l(t) {
                    a(r, o, i, s, l, "throw", t)
                }
                s(void 0)
            }))
        }
    }

    function l(t, e) {
        for (var n = 0; n < e.length; n++) {
            var o = e[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
        }
    }
    var c = function() {
        function t() {
            ! function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, t), t.instanceId || (t.instanceId = 1), this.instanceId = "instance-" + t.instanceId++, this.log = (0, i.default)(this.className + "[" + this.instanceId + "]"), this.signals = {}
        }
        var e, n, o, a, c, u, f, h;
        return e = t, n = [{
            key: "logDebug",
            value: (h = s(regeneratorRuntime.mark((function t() {
                var e, n = arguments;
                return regeneratorRuntime.wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return e = n.length > 0 && void 0 !== n[0] ? n[0] : {
                                msg: "",
                                stacktrace: ""
                            }, t.abrupt("return", this.logToBackend(r(e, {
                                severity: "DEBUG"
                            })));
                        case 2:
                        case "end":
                            return t.stop()
                    }
                }), t, this)
            }))), function() {
                return h.apply(this, arguments)
            })
        }, {
            key: "logInfo",
            value: (f = s(regeneratorRuntime.mark((function t() {
                var e, n = arguments;
                return regeneratorRuntime.wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return e = n.length > 0 && void 0 !== n[0] ? n[0] : {
                                msg: "",
                                stacktrace: ""
                            }, t.abrupt("return", this.logToBackend(r(e, {
                                severity: "INFO"
                            })));
                        case 2:
                        case "end":
                            return t.stop()
                    }
                }), t, this)
            }))), function() {
                return f.apply(this, arguments)
            })
        }, {
            key: "logWarn",
            value: (u = s(regeneratorRuntime.mark((function t() {
                var e, n = arguments;
                return regeneratorRuntime.wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return e = n.length > 0 && void 0 !== n[0] ? n[0] : {
                                msg: "",
                                stacktrace: ""
                            }, t.abrupt("return", this.logToBackend(r(e, {
                                severity: "WARN"
                            })));
                        case 2:
                        case "end":
                            return t.stop()
                    }
                }), t, this)
            }))), function() {
                return u.apply(this, arguments)
            })
        }, {
            key: "logError",
            value: (c = s(regeneratorRuntime.mark((function t() {
                var e, n = arguments;
                return regeneratorRuntime.wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return e = n.length > 0 && void 0 !== n[0] ? n[0] : {
                                msg: "",
                                stacktrace: ""
                            }, t.abrupt("return", this.logToBackend(r(e, {
                                severity: "ERROR"
                            })));
                        case 2:
                        case "end":
                            return t.stop()
                    }
                }), t, this)
            }))), function() {
                return c.apply(this, arguments)
            })
        }, {
            key: "logToBackend",
            value: (a = s(regeneratorRuntime.mark((function t() {
                var e, n, o, i = arguments;
                return regeneratorRuntime.wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return e = i.length > 0 && void 0 !== i[0] ? i[0] : {
                                msg: "",
                                severity: "INFO",
                                stacktrace: ""
                            }, this.log("logToBackend:", e.msg, e.severity, e.stacktrace), n = {
                                severity: e.severity,
                                msg: "".concat(this.className, " ").concat(e.msg),
                                componentStack: e.stacktrace
                            }, t.prev = 3, t.next = 6, fetch(this.BACKEND_URL_LOGSERVICE, {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json",
                                    Accept: "application/json"
                                },
                                body: JSON.stringify(n)
                            });
                        case 6:
                            if ((o = t.sent).ok) {
                                t.next = 9;
                                break
                            }
                            throw new Error(o);
                        case 9:
                            this.log("Submitting to GrayLog SUCCESSFUL", o), t.next = 16;
                            break;
                        case 12:
                            return t.prev = 12, t.t0 = t.catch(3), this.log("Submitting to GrayLog FAILED", t.t0), t.abrupt("return");
                        case 16:
                        case "end":
                            return t.stop()
                    }
                }), t, this, [
                    [3, 12]
                ])
            }))), function() {
                return a.apply(this, arguments)
            })
        }, {
            key: "BACKEND_URL_LOGSERVICE",
            get: function() {
                return "/service/rest/errorhandler/logerror/"
            }
        }, {
            key: "className",
            get: function() {
                return this.constructor.className
            }
        }], o = [{
            key: "className",
            get: function() {
                return "base.global/Base"
            }
        }], n && l(e.prototype, n), o && l(e, o), t
    }();
    e.Base = c
}, , function(t, e, n) {
    "use strict";

    function o(t, e) {
        for (var n = 0; n < e.length; n++) {
            var o = e[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.KeyCode = void 0;
    var i = function() {
        function t() {
            ! function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, t)
        }
        var e, n, i;
        return e = t, i = [{
            key: "ENTER",
            get: function() {
                return 13
            }
        }, {
            key: "LEFT",
            get: function() {
                return 37
            }
        }, {
            key: "RIGHT",
            get: function() {
                return 39
            }
        }, {
            key: "UP",
            get: function() {
                return 38
            }
        }, {
            key: "DOWN",
            get: function() {
                return 40
            }
        }, {
            key: "TAB",
            get: function() {
                return 9
            }
        }, {
            key: "BACKSPACE",
            get: function() {
                return 8
            }
        }, {
            key: "ESC",
            get: function() {
                return 27
            }
        }, {
            key: "SPACE",
            get: function() {
                return 32
            }
        }], (n = null) && o(e.prototype, n), i && o(e, i), t
    }();
    e.KeyCode = i
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(t, e, n) {
    "use strict";

    function o(t, e) {
        for (var n = 0; n < e.length; n++) {
            var o = e[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.Aria = void 0;
    var i = function() {
        function t() {
            ! function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, t)
        }
        var e, n, i;
        return e = t, i = [{
            key: "HIDDEN",
            get: function() {
                return "aria-hidden"
            }
        }, {
            key: "EXPANDED",
            get: function() {
                return "aria-expanded"
            }
        }, {
            key: "SELECTED",
            get: function() {
                return "aria-selected"
            }
        }, {
            key: "CONTROLS",
            get: function() {
                return "aria-controls"
            }
        }], (n = null) && o(e.prototype, n), i && o(e, i), t
    }();
    e.Aria = i
}, function(t, e, n) {
    "use strict";
    n(23), n(16), n(51), n(42), n(151), n(108), n(83), n(152), n(1), n(26), n(2), n(148), n(44), n(153), n(60), n(72), n(55),
        function(t, e, n, o) {
            if (t.console = t.console || {
                    info: function(t) {}
                }, n)
                if (n.fn.fancybox) console.info("fancyBox already initialized");
                else {
                    var i, r, a = {
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
                            image: {
                                preload: !1
                            },
                            ajax: {
                                settings: {
                                    data: {
                                        fancybox: !0
                                    }
                                }
                            },
                            iframe: {
                                tpl: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" allowfullscreen="allowfullscreen" allow="autoplay; fullscreen" src=""></iframe>',
                                preload: !0,
                                css: {},
                                attr: {
                                    scrolling: "auto"
                                }
                            },
                            video: {
                                tpl: '<video class="fancybox-video" controls controlsList="nodownload" poster="{{poster}}"><source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos, <a href="{{src}}">download</a> and watch with your favorite video player!</video>',
                                format: "",
                                autoStart: !0
                            },
                            defaultType: "image",
                            animationEffect: "zoom",
                            animationDuration: 366,
                            zoomOpacity: "auto",
                            transitionEffect: "fade",
                            transitionDuration: 366,
                            slideClass: "",
                            baseClass: "",
                            baseTpl: '<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><div class="fancybox-toolbar">{{buttons}}</div><div class="fancybox-navigation">{{arrows}}</div><div class="fancybox-stage"></div><div class="fancybox-caption"><div class="fancybox-caption__body"></div></div></div></div>',
                            spinnerTpl: '<div class="fancybox-loading"></div>',
                            errorTpl: '<div class="fancybox-error"><p>{{ERROR}}</p></div>',
                            btnTpl: {
                                download: '<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}" href="javascript:;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.62 17.09V19H5.38v-1.91zm-2.97-6.96L17 11.45l-5 4.87-5-4.87 1.36-1.32 2.68 2.64V5h1.92v7.77z"/></svg></a>',
                                zoom: '<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.7 17.3l-3-3a5.9 5.9 0 0 0-.6-7.6 5.9 5.9 0 0 0-8.4 0 5.9 5.9 0 0 0 0 8.4 5.9 5.9 0 0 0 7.7.7l3 3a1 1 0 0 0 1.3 0c.4-.5.4-1 0-1.5zM8.1 13.8a4 4 0 0 1 0-5.7 4 4 0 0 1 5.7 0 4 4 0 0 1 0 5.7 4 4 0 0 1-5.7 0z"/></svg></button>',
                                close: '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"/></svg></button>',
                                arrowLeft: '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.28 15.7l-1.34 1.37L5 12l4.94-5.07 1.34 1.38-2.68 2.72H19v1.94H8.6z"/></svg></div></button>',
                                arrowRight: '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.4 12.97l-2.68 2.72 1.34 1.38L19 12l-4.94-5.07-1.34 1.38 2.68 2.72H5v1.94z"/></svg></div></button>',
                                smallBtn: '<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24"><path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"/></svg></button>'
                            },
                            parentEl: "body",
                            hideScrollbar: !0,
                            autoFocus: !0,
                            backFocus: !0,
                            trapFocus: !0,
                            fullScreen: {
                                autoStart: !1
                            },
                            touch: {
                                vertical: !0,
                                momentum: !0
                            },
                            hash: null,
                            media: {},
                            slideShow: {
                                autoStart: !1,
                                speed: 3e3
                            },
                            thumbs: {
                                autoStart: !1,
                                hideOnClose: !0,
                                parentEl: ".fancybox-container",
                                axis: "y"
                            },
                            wheel: "auto",
                            onInit: n.noop,
                            beforeLoad: n.noop,
                            afterLoad: n.noop,
                            beforeShow: n.noop,
                            afterShow: n.noop,
                            beforeClose: n.noop,
                            afterClose: n.noop,
                            onActivate: n.noop,
                            onDeactivate: n.noop,
                            clickContent: function(t, e) {
                                return "image" === t.type && "zoom"
                            },
                            clickSlide: "close",
                            clickOutside: "close",
                            dblclickContent: !1,
                            dblclickSlide: !1,
                            dblclickOutside: !1,
                            mobile: {
                                preventCaptionOverlap: !1,
                                idleTime: !1,
                                clickContent: function(t, e) {
                                    return "image" === t.type && "toggleControls"
                                },
                                clickSlide: function(t, e) {
                                    return "image" === t.type ? "toggleControls" : "close"
                                },
                                dblclickContent: function(t, e) {
                                    return "image" === t.type && "zoom"
                                },
                                dblclickSlide: function(t, e) {
                                    return "image" === t.type && "zoom"
                                }
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
                                    ZOOM: "Zoom"
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
                                    ZOOM: "Vergr&ouml;&szlig;ern"
                                }
                            }
                        },
                        s = n(t),
                        l = n(e),
                        c = 0,
                        u = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || function(e) {
                            return t.setTimeout(e, 1e3 / 60)
                        },
                        f = t.cancelAnimationFrame || t.webkitCancelAnimationFrame || t.mozCancelAnimationFrame || t.oCancelAnimationFrame || function(e) {
                            t.clearTimeout(e)
                        },
                        h = function() {
                            var t, n = e.createElement("fakeelement"),
                                o = {
                                    transition: "transitionend",
                                    OTransition: "oTransitionEnd",
                                    MozTransition: "transitionend",
                                    WebkitTransition: "webkitTransitionEnd"
                                };
                            for (t in o)
                                if (void 0 !== n.style[t]) return o[t];
                            return "transitionend"
                        }(),
                        d = function(t) {
                            return t && t.length && t[0].offsetHeight
                        },
                        p = function(t, e) {
                            var o = n.extend(!0, {}, t, e);
                            return n.each(e, (function(t, e) {
                                n.isArray(e) && (o[t] = e)
                            })), o
                        },
                        y = function(t, e, o) {
                            this.opts = p({
                                index: o
                            }, n.fancybox.defaults), n.isPlainObject(e) && (this.opts = p(this.opts, e)), n.fancybox.isMobile && (this.opts = p(this.opts, this.opts.mobile)), this.id = this.opts.id || ++c, this.currIndex = parseInt(this.opts.index, 10) || 0, this.prevIndex = null, this.prevPos = null, this.currPos = 0, this.firstRun = !0, this.group = [], this.slides = {}, this.addContent(t), this.group.length && this.init()
                        };
                    n.extend(y.prototype, {
                        init: function() {
                            var o, i, r = this,
                                a = r.group[r.currIndex].opts;
                            a.closeExisting && n.fancybox.close(!0), n("body").addClass("fancybox-active"), !n.fancybox.getInstance() && !1 !== a.hideScrollbar && !n.fancybox.isMobile && e.body.scrollHeight > t.innerHeight && (n("head").append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar{margin-right:' + (t.innerWidth - e.documentElement.clientWidth) + "px;}</style>"), n("body").addClass("compensate-for-scrollbar")), i = "", n.each(a.buttons, (function(t, e) {
                                i += a.btnTpl[e] || ""
                            })), o = n(r.translate(r, a.baseTpl.replace("{{buttons}}", i).replace("{{arrows}}", a.btnTpl.arrowLeft + a.btnTpl.arrowRight))).attr("id", "fancybox-container-" + r.id).addClass(a.baseClass).data("FancyBox", r).appendTo(a.parentEl), r.$refs = {
                                container: o
                            }, ["bg", "inner", "infobar", "toolbar", "stage", "caption", "navigation"].forEach((function(t) {
                                r.$refs[t] = o.find(".fancybox-" + t)
                            })), r.trigger("onInit"), r.activate(), r.jumpTo(r.currIndex)
                        },
                        translate: function(t, e) {
                            var n = t.opts.i18n[t.opts.lang] || t.opts.i18n.en;
                            return e.replace(/\{\{(\w+)\}\}/g, (function(t, e) {
                                return void 0 === n[e] ? t : n[e]
                            }))
                        },
                        addContent: function(t) {
                            var e, o = this,
                                i = n.makeArray(t);
                            n.each(i, (function(t, e) {
                                var i, r, a, s, l, c = {},
                                    u = {};
                                n.isPlainObject(e) ? (c = e, u = e.opts || e) : "object" === n.type(e) && n(e).length ? (u = (i = n(e)).data() || {}, (u = n.extend(!0, {}, u, u.options)).$orig = i, c.src = o.opts.src || u.src || i.attr("href"), c.type || c.src || (c.type = "inline", c.src = e)) : c = {
                                    type: "html",
                                    src: e + ""
                                }, c.opts = n.extend(!0, {}, o.opts, u), n.isArray(u.buttons) && (c.opts.buttons = u.buttons), n.fancybox.isMobile && c.opts.mobile && (c.opts = p(c.opts, c.opts.mobile)), r = c.type || c.opts.type, s = c.src || "", !r && s && ((a = s.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i)) ? (r = "video", c.opts.video.format || (c.opts.video.format = "video/" + ("ogv" === a[1] ? "ogg" : a[1]))) : s.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i) ? r = "image" : s.match(/\.(pdf)((\?|#).*)?$/i) ? (r = "iframe", c = n.extend(!0, c, {
                                    contentType: "pdf",
                                    opts: {
                                        iframe: {
                                            preload: !1
                                        }
                                    }
                                })) : "#" === s.charAt(0) && (r = "inline")), r ? c.type = r : o.trigger("objectNeedsType", c), c.contentType || (c.contentType = n.inArray(c.type, ["html", "inline", "ajax"]) > -1 ? "html" : c.type), c.index = o.group.length, "auto" == c.opts.smallBtn && (c.opts.smallBtn = n.inArray(c.type, ["html", "inline", "ajax"]) > -1), "auto" === c.opts.toolbar && (c.opts.toolbar = !c.opts.smallBtn), c.$thumb = c.opts.$thumb || null, c.opts.$trigger && c.index === o.opts.index && (c.$thumb = c.opts.$trigger.find("img:first"), c.$thumb.length && (c.opts.$orig = c.opts.$trigger)), c.$thumb && c.$thumb.length || !c.opts.$orig || (c.$thumb = c.opts.$orig.find("img:first")), c.$thumb && !c.$thumb.length && (c.$thumb = null), c.thumb = c.opts.thumb || (c.$thumb ? c.$thumb[0].src : null), "function" === n.type(c.opts.caption) && (c.opts.caption = c.opts.caption.apply(e, [o, c])), "function" === n.type(o.opts.caption) && (c.opts.caption = o.opts.caption.apply(e, [o, c])), c.opts.caption instanceof n || (c.opts.caption = void 0 === c.opts.caption ? "" : c.opts.caption + ""), "ajax" === c.type && (l = s.split(/\s+/, 2)).length > 1 && (c.src = l.shift(), c.opts.filter = l.shift()), c.opts.modal && (c.opts = n.extend(!0, c.opts, {
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
                                    dblclickOutside: !1
                                })), o.group.push(c)
                            })), Object.keys(o.slides).length && (o.updateControls(), (e = o.Thumbs) && e.isActive && (e.create(), e.focus()))
                        },
                        addEvents: function() {
                            var e = this;
                            e.removeEvents(), e.$refs.container.on("click.fb-close", "[data-fancybox-close]", (function(t) {
                                t.stopPropagation(), t.preventDefault(), e.close(t)
                            })).on("touchstart.fb-prev click.fb-prev", "[data-fancybox-prev]", (function(t) {
                                t.stopPropagation(), t.preventDefault(), e.previous()
                            })).on("touchstart.fb-next click.fb-next", "[data-fancybox-next]", (function(t) {
                                t.stopPropagation(), t.preventDefault(), e.next()
                            })).on("click.fb", "[data-fancybox-zoom]", (function(t) {
                                e[e.isScaledDown() ? "scaleToActual" : "scaleToFit"]()
                            })), s.on("orientationchange.fb resize.fb", (function(t) {
                                t && t.originalEvent && "resize" === t.originalEvent.type ? (e.requestId && f(e.requestId), e.requestId = u((function() {
                                    e.update(t)
                                }))) : (e.current && "iframe" === e.current.type && e.$refs.stage.hide(), setTimeout((function() {
                                    e.$refs.stage.show(), e.update(t)
                                }), n.fancybox.isMobile ? 600 : 250))
                            })), l.on("keydown.fb", (function(t) {
                                var o = (n.fancybox ? n.fancybox.getInstance() : null).current,
                                    i = t.keyCode || t.which;
                                if (9 != i) {
                                    if (!(!o.opts.keyboard || t.ctrlKey || t.altKey || t.shiftKey || n(t.target).is("input,textarea,video,audio,select"))) return 8 === i || 27 === i ? (t.preventDefault(), void e.close(t)) : 37 === i || 38 === i ? (t.preventDefault(), void e.previous()) : 39 === i || 40 === i ? (t.preventDefault(), void e.next()) : void e.trigger("afterKeydown", t, i)
                                } else o.opts.trapFocus && e.focus(t)
                            })), e.group[e.currIndex].opts.idleTime && (e.idleSecondsCounter = 0, l.on("mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle", (function(t) {
                                e.idleSecondsCounter = 0, e.isIdle && e.showControls(), e.isIdle = !1
                            })), e.idleInterval = t.setInterval((function() {
                                e.idleSecondsCounter++, e.idleSecondsCounter >= e.group[e.currIndex].opts.idleTime && !e.isDragging && (e.isIdle = !0, e.idleSecondsCounter = 0, e.hideControls())
                            }), 1e3))
                        },
                        removeEvents: function() {
                            s.off("orientationchange.fb resize.fb"), l.off("keydown.fb .fb-idle"), this.$refs.container.off(".fb-close .fb-prev .fb-next"), this.idleInterval && (t.clearInterval(this.idleInterval), this.idleInterval = null)
                        },
                        previous: function(t) {
                            return this.jumpTo(this.currPos - 1, t)
                        },
                        next: function(t) {
                            return this.jumpTo(this.currPos + 1, t)
                        },
                        jumpTo: function(t, e) {
                            var o, i, r, a, s, l, c, u, f, h = this,
                                p = h.group.length;
                            if (!(h.isDragging || h.isClosing || h.isAnimating && h.firstRun)) {
                                if (t = parseInt(t, 10), !(r = h.current ? h.current.opts.loop : h.opts.loop) && (t < 0 || t >= p)) return !1;
                                if (o = h.firstRun = !Object.keys(h.slides).length, s = h.current, h.prevIndex = h.currIndex, h.prevPos = h.currPos, a = h.createSlide(t), p > 1 && ((r || a.index < p - 1) && h.createSlide(t + 1), (r || a.index > 0) && h.createSlide(t - 1)), h.current = a, h.currIndex = a.index, h.currPos = a.pos, h.trigger("beforeShow", o), h.updateControls(), a.forcedDuration = void 0, n.isNumeric(e) ? a.forcedDuration = e : e = a.opts[o ? "animationDuration" : "transitionDuration"], e = parseInt(e, 10), i = h.isMoved(a), a.$slide.addClass("fancybox-slide--current"), o) return a.opts.animationEffect && e && h.$refs.container.css("transition-duration", e + "ms"), h.$refs.container.addClass("fancybox-is-open").trigger("focus"), h.loadSlide(a), void h.preload("image");
                                l = n.fancybox.getTranslate(s.$slide), c = n.fancybox.getTranslate(h.$refs.stage), n.each(h.slides, (function(t, e) {
                                    n.fancybox.stop(e.$slide, !0)
                                })), s.pos !== a.pos && (s.isComplete = !1), s.$slide.removeClass("fancybox-slide--complete fancybox-slide--current"), i ? (f = l.left - (s.pos * l.width + s.pos * s.opts.gutter), n.each(h.slides, (function(t, o) {
                                    o.$slide.removeClass("fancybox-animated").removeClass((function(t, e) {
                                        return (e.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ")
                                    }));
                                    var i = o.pos * l.width + o.pos * o.opts.gutter;
                                    n.fancybox.setTranslate(o.$slide, {
                                        top: 0,
                                        left: i - c.left + f
                                    }), o.pos !== a.pos && o.$slide.addClass("fancybox-slide--" + (o.pos > a.pos ? "next" : "previous")), d(o.$slide), n.fancybox.animate(o.$slide, {
                                        top: 0,
                                        left: (o.pos - a.pos) * l.width + (o.pos - a.pos) * o.opts.gutter
                                    }, e, (function() {
                                        o.$slide.css({
                                            transform: "",
                                            opacity: ""
                                        }).removeClass("fancybox-slide--next fancybox-slide--previous"), o.pos === h.currPos && h.complete()
                                    }))
                                }))) : e && a.opts.transitionEffect && (u = "fancybox-animated fancybox-fx-" + a.opts.transitionEffect, s.$slide.addClass("fancybox-slide--" + (s.pos > a.pos ? "next" : "previous")), n.fancybox.animate(s.$slide, u, e, (function() {
                                    s.$slide.removeClass(u).removeClass("fancybox-slide--next fancybox-slide--previous")
                                }), !1)), a.isLoaded ? h.revealContent(a) : h.loadSlide(a), h.preload("image")
                            }
                        },
                        createSlide: function(t) {
                            var e, o;
                            return o = (o = t % this.group.length) < 0 ? this.group.length + o : o, !this.slides[t] && this.group[o] && (e = n('<div class="fancybox-slide"></div>').appendTo(this.$refs.stage), this.slides[t] = n.extend(!0, {}, this.group[o], {
                                pos: t,
                                $slide: e,
                                isLoaded: !1
                            }), this.updateSlide(this.slides[t])), this.slides[t]
                        },
                        scaleToActual: function(t, e, o) {
                            var i, r, a, s, l, c = this,
                                u = c.current,
                                f = u.$content,
                                h = n.fancybox.getTranslate(u.$slide).width,
                                d = n.fancybox.getTranslate(u.$slide).height,
                                p = u.width,
                                y = u.height;
                            c.isAnimating || c.isMoved() || !f || "image" != u.type || !u.isLoaded || u.hasError || (c.isAnimating = !0, n.fancybox.stop(f), t = void 0 === t ? .5 * h : t, e = void 0 === e ? .5 * d : e, (i = n.fancybox.getTranslate(f)).top -= n.fancybox.getTranslate(u.$slide).top, i.left -= n.fancybox.getTranslate(u.$slide).left, s = p / i.width, l = y / i.height, r = .5 * h - .5 * p, a = .5 * d - .5 * y, p > h && ((r = i.left * s - (t * s - t)) > 0 && (r = 0), r < h - p && (r = h - p)), y > d && ((a = i.top * l - (e * l - e)) > 0 && (a = 0), a < d - y && (a = d - y)), c.updateCursor(p, y), n.fancybox.animate(f, {
                                top: a,
                                left: r,
                                scaleX: s,
                                scaleY: l
                            }, o || 366, (function() {
                                c.isAnimating = !1
                            })), c.SlideShow && c.SlideShow.isActive && c.SlideShow.stop())
                        },
                        scaleToFit: function(t) {
                            var e, o = this,
                                i = o.current,
                                r = i.$content;
                            o.isAnimating || o.isMoved() || !r || "image" != i.type || !i.isLoaded || i.hasError || (o.isAnimating = !0, n.fancybox.stop(r), e = o.getFitPos(i), o.updateCursor(e.width, e.height), n.fancybox.animate(r, {
                                top: e.top,
                                left: e.left,
                                scaleX: e.width / r.width(),
                                scaleY: e.height / r.height()
                            }, t || 366, (function() {
                                o.isAnimating = !1
                            })))
                        },
                        getFitPos: function(t) {
                            var e, o, i, r, a = t.$content,
                                s = t.$slide,
                                l = t.width || t.opts.width,
                                c = t.height || t.opts.height,
                                u = {};
                            return !!(t.isLoaded && a && a.length) && (e = n.fancybox.getTranslate(this.$refs.stage).width, o = n.fancybox.getTranslate(this.$refs.stage).height, e -= parseFloat(s.css("paddingLeft")) + parseFloat(s.css("paddingRight")) + parseFloat(a.css("marginLeft")) + parseFloat(a.css("marginRight")), o -= parseFloat(s.css("paddingTop")) + parseFloat(s.css("paddingBottom")) + parseFloat(a.css("marginTop")) + parseFloat(a.css("marginBottom")), l && c || (l = e, c = o), (l *= i = Math.min(1, e / l, o / c)) > e - .5 && (l = e), (c *= i) > o - .5 && (c = o), "image" === t.type ? (u.top = Math.floor(.5 * (o - c)) + parseFloat(s.css("paddingTop")), u.left = Math.floor(.5 * (e - l)) + parseFloat(s.css("paddingLeft"))) : "video" === t.contentType && (c > l / (r = t.opts.width && t.opts.height ? l / c : t.opts.ratio || 16 / 9) ? c = l / r : l > c * r && (l = c * r)), u.width = l, u.height = c, u)
                        },
                        update: function(t) {
                            var e = this;
                            n.each(e.slides, (function(n, o) {
                                e.updateSlide(o, t)
                            }))
                        },
                        updateSlide: function(t, e) {
                            var o = t && t.$content,
                                i = t.width || t.opts.width,
                                r = t.height || t.opts.height,
                                a = t.$slide;
                            this.adjustCaption(t), o && (i || r || "video" === t.contentType) && !t.hasError && (n.fancybox.stop(o), n.fancybox.setTranslate(o, this.getFitPos(t)), t.pos === this.currPos && (this.isAnimating = !1, this.updateCursor())), this.adjustLayout(t), a.length && (a.trigger("refresh"), t.pos === this.currPos && this.$refs.toolbar.add(this.$refs.navigation.find(".fancybox-button--arrow_right")).toggleClass("compensate-for-scrollbar", a.get(0).scrollHeight > a.get(0).clientHeight)), this.trigger("onUpdate", t, e)
                        },
                        centerSlide: function(t) {
                            var e = this,
                                o = e.current,
                                i = o.$slide;
                            !e.isClosing && o && (i.siblings().css({
                                transform: "",
                                opacity: ""
                            }), i.parent().children().removeClass("fancybox-slide--previous fancybox-slide--next"), n.fancybox.animate(i, {
                                top: 0,
                                left: 0,
                                opacity: 1
                            }, void 0 === t ? 0 : t, (function() {
                                i.css({
                                    transform: "",
                                    opacity: ""
                                }), o.isComplete || e.complete()
                            }), !1))
                        },
                        isMoved: function(t) {
                            var e, o, i = t || this.current;
                            return !!i && (o = n.fancybox.getTranslate(this.$refs.stage), e = n.fancybox.getTranslate(i.$slide), !i.$slide.hasClass("fancybox-animated") && (Math.abs(e.top - o.top) > .5 || Math.abs(e.left - o.left) > .5))
                        },
                        updateCursor: function(t, e) {
                            var o, i, r = this.current,
                                a = this.$refs.container;
                            r && !this.isClosing && this.Guestures && (a.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-zoomOut fancybox-can-swipe fancybox-can-pan"), i = !!(o = this.canPan(t, e)) || this.isZoomable(), a.toggleClass("fancybox-is-zoomable", i), n("[data-fancybox-zoom]").prop("disabled", !i), o ? a.addClass("fancybox-can-pan") : i && ("zoom" === r.opts.clickContent || n.isFunction(r.opts.clickContent) && "zoom" == r.opts.clickContent(r)) ? a.addClass("fancybox-can-zoomIn") : r.opts.touch && (r.opts.touch.vertical || this.group.length > 1) && "video" !== r.contentType && a.addClass("fancybox-can-swipe"))
                        },
                        isZoomable: function() {
                            var t, e = this.current;
                            if (e && !this.isClosing && "image" === e.type && !e.hasError) {
                                if (!e.isLoaded) return !0;
                                if ((t = this.getFitPos(e)) && (e.width > t.width || e.height > t.height)) return !0
                            }
                            return !1
                        },
                        isScaledDown: function(t, e) {
                            var o = !1,
                                i = this.current,
                                r = i.$content;
                            return void 0 !== t && void 0 !== e ? o = t < i.width && e < i.height : r && (o = (o = n.fancybox.getTranslate(r)).width < i.width && o.height < i.height), o
                        },
                        canPan: function(t, e) {
                            var o = this.current,
                                i = null,
                                r = !1;
                            return "image" === o.type && (o.isComplete || t && e) && !o.hasError && (r = this.getFitPos(o), void 0 !== t && void 0 !== e ? i = {
                                width: t,
                                height: e
                            } : o.isComplete && (i = n.fancybox.getTranslate(o.$content)), i && r && (r = Math.abs(i.width - r.width) > 1.5 || Math.abs(i.height - r.height) > 1.5)), r
                        },
                        loadSlide: function(t) {
                            var e, o, i, r = this;
                            if (!t.isLoading && !t.isLoaded) {
                                if (t.isLoading = !0, !1 === r.trigger("beforeLoad", t)) return t.isLoading = !1, !1;
                                switch (e = t.type, (o = t.$slide).off("refresh").trigger("onReset").addClass(t.opts.slideClass), e) {
                                    case "image":
                                        r.setImage(t);
                                        break;
                                    case "iframe":
                                        r.setIframe(t);
                                        break;
                                    case "html":
                                        r.setContent(t, t.src || t.content);
                                        break;
                                    case "video":
                                        r.setContent(t, t.opts.video.tpl.replace(/\{\{src\}\}/gi, t.src).replace("{{format}}", t.opts.videoFormat || t.opts.video.format || "").replace("{{poster}}", t.thumb || ""));
                                        break;
                                    case "inline":
                                        n(t.src).length ? r.setContent(t, n(t.src)) : r.setError(t);
                                        break;
                                    case "ajax":
                                        r.showLoading(t), i = n.ajax(n.extend({}, t.opts.ajax.settings, {
                                            url: t.src,
                                            success: function(e, n) {
                                                "success" === n && r.setContent(t, e)
                                            },
                                            error: function(e, n) {
                                                e && "abort" !== n && r.setError(t)
                                            }
                                        })), o.one("onReset", (function() {
                                            i.abort()
                                        }));
                                        break;
                                    default:
                                        r.setError(t)
                                }
                                return !0
                            }
                        },
                        setImage: function(t) {
                            var o, i = this;
                            setTimeout((function() {
                                var e = t.$image;
                                i.isClosing || !t.isLoading || e && e.length && e[0].complete || t.hasError || i.showLoading(t)
                            }), 50), i.checkSrcset(t), t.$content = n('<div class="fancybox-content"></div>').addClass("fancybox-is-hidden").appendTo(t.$slide.addClass("fancybox-slide--image")), !1 !== t.opts.preload && t.opts.width && t.opts.height && t.thumb && (t.width = t.opts.width, t.height = t.opts.height, (o = e.createElement("img")).onerror = function() {
                                n(this).remove(), t.$ghost = null
                            }, o.onload = function() {
                                i.afterLoad(t)
                            }, t.$ghost = n(o).addClass("fancybox-image").appendTo(t.$content).attr("src", t.thumb)), i.setBigImage(t)
                        },
                        checkSrcset: function(e) {
                            var n, o, i, r, a = e.opts.srcset || e.opts.image.srcset;
                            if (a) {
                                i = t.devicePixelRatio || 1, r = t.innerWidth * i, (o = a.split(",").map((function(t) {
                                    var e = {};
                                    return t.trim().split(/\s+/).forEach((function(t, n) {
                                        var o = parseInt(t.substring(0, t.length - 1), 10);
                                        if (0 === n) return e.url = t;
                                        o && (e.value = o, e.postfix = t[t.length - 1])
                                    })), e
                                }))).sort((function(t, e) {
                                    return t.value - e.value
                                }));
                                for (var s = 0; s < o.length; s++) {
                                    var l = o[s];
                                    if ("w" === l.postfix && l.value >= r || "x" === l.postfix && l.value >= i) {
                                        n = l;
                                        break
                                    }
                                }!n && o.length && (n = o[o.length - 1]), n && (e.src = n.url, e.width && e.height && "w" == n.postfix && (e.height = e.width / e.height * n.value, e.width = n.value), e.opts.srcset = a)
                            }
                        },
                        setBigImage: function(t) {
                            var o = this,
                                i = e.createElement("img"),
                                r = n(i);
                            t.$image = r.one("error", (function() {
                                o.setError(t)
                            })).one("load", (function() {
                                var e;
                                t.$ghost || (o.resolveImageSlideSize(t, this.naturalWidth, this.naturalHeight), o.afterLoad(t)), o.isClosing || (t.opts.srcset && ((e = t.opts.sizes) && "auto" !== e || (e = (t.width / t.height > 1 && s.width() / s.height() > 1 ? "100" : Math.round(t.width / t.height * 100)) + "vw"), r.attr("sizes", e).attr("srcset", t.opts.srcset)), t.$ghost && setTimeout((function() {
                                    t.$ghost && !o.isClosing && t.$ghost.hide()
                                }), Math.min(300, Math.max(1e3, t.height / 1600))), o.hideLoading(t))
                            })).addClass("fancybox-image").attr("src", t.src).appendTo(t.$content), (i.complete || "complete" == i.readyState) && r.naturalWidth && r.naturalHeight ? r.trigger("load") : i.error && r.trigger("error")
                        },
                        resolveImageSlideSize: function(t, e, n) {
                            var o = parseInt(t.opts.width, 10),
                                i = parseInt(t.opts.height, 10);
                            t.width = e, t.height = n, o > 0 && (t.width = o, t.height = Math.floor(o * n / e)), i > 0 && (t.width = Math.floor(i * e / n), t.height = i)
                        },
                        setIframe: function(t) {
                            var e, o = this,
                                i = t.opts.iframe,
                                r = t.$slide;
                            t.$content = n('<div class="fancybox-content' + (i.preload ? " fancybox-is-hidden" : "") + '"></div>').css(i.css).appendTo(r), r.addClass("fancybox-slide--" + t.contentType), t.$iframe = e = n(i.tpl.replace(/\{rnd\}/g, (new Date).getTime())).attr(i.attr).appendTo(t.$content), i.preload ? (o.showLoading(t), e.on("load.fb error.fb", (function(e) {
                                this.isReady = 1, t.$slide.trigger("refresh"), o.afterLoad(t)
                            })), r.on("refresh.fb", (function() {
                                var n, o = t.$content,
                                    a = i.css.width,
                                    s = i.css.height;
                                if (1 === e[0].isReady) {
                                    try {
                                        n = e.contents().find("body")
                                    } catch (t) {}
                                    n && n.length && n.children().length && (r.css("overflow", "visible"), o.css({
                                        width: "100%",
                                        "max-width": "100%",
                                        height: "9999px"
                                    }), void 0 === a && (a = Math.ceil(Math.max(n[0].clientWidth, n.outerWidth(!0)))), o.css("width", a || "").css("max-width", ""), void 0 === s && (s = Math.ceil(Math.max(n[0].clientHeight, n.outerHeight(!0)))), o.css("height", s || ""), r.css("overflow", "auto")), o.removeClass("fancybox-is-hidden")
                                }
                            }))) : o.afterLoad(t), e.attr("src", t.src), r.one("onReset", (function() {
                                try {
                                    n(this).find("iframe").hide().unbind().attr("src", "//about:blank")
                                } catch (t) {}
                                n(this).off("refresh.fb").empty(), t.isLoaded = !1, t.isRevealed = !1
                            }))
                        },
                        setContent: function(t, e) {
                            var o;
                            this.isClosing || (this.hideLoading(t), t.$content && n.fancybox.stop(t.$content), t.$slide.empty(), (o = e) && o.hasOwnProperty && o instanceof n && e.parent().length ? ((e.hasClass("fancybox-content") || e.parent().hasClass("fancybox-content")) && e.parents(".fancybox-slide").trigger("onReset"), t.$placeholder = n("<div>").hide().insertAfter(e), e.css("display", "inline-block")) : t.hasError || ("string" === n.type(e) && (e = n("<div>").append(n.trim(e)).contents()), t.opts.filter && (e = n("<div>").html(e).find(t.opts.filter))), t.$slide.one("onReset", (function() {
                                n(this).find("video,audio").trigger("pause"), t.$placeholder && (t.$placeholder.after(e.removeClass("fancybox-content").hide()).remove(), t.$placeholder = null), t.$smallBtn && (t.$smallBtn.remove(), t.$smallBtn = null), t.hasError || (n(this).empty(), t.isLoaded = !1, t.isRevealed = !1)
                            })), n(e).appendTo(t.$slide), n(e).is("video,audio") && (n(e).addClass("fancybox-video"), n(e).wrap("<div></div>"), t.contentType = "video", t.opts.width = t.opts.width || n(e).attr("width"), t.opts.height = t.opts.height || n(e).attr("height")), t.$content = t.$slide.children().filter("div,form,main,video,audio,article,.fancybox-content").first(), t.$content.siblings().hide(), t.$content.length || (t.$content = t.$slide.wrapInner("<div></div>").children().first()), t.$content.addClass("fancybox-content"), t.$slide.addClass("fancybox-slide--" + t.contentType), this.afterLoad(t))
                        },
                        setError: function(t) {
                            t.hasError = !0, t.$slide.trigger("onReset").removeClass("fancybox-slide--" + t.contentType).addClass("fancybox-slide--error"), t.contentType = "html", this.setContent(t, this.translate(t, t.opts.errorTpl)), t.pos === this.currPos && (this.isAnimating = !1)
                        },
                        showLoading: function(t) {
                            (t = t || this.current) && !t.$spinner && (t.$spinner = n(this.translate(this, this.opts.spinnerTpl)).appendTo(t.$slide).hide().fadeIn("fast"))
                        },
                        hideLoading: function(t) {
                            (t = t || this.current) && t.$spinner && (t.$spinner.stop().remove(), delete t.$spinner)
                        },
                        afterLoad: function(t) {
                            this.isClosing || (t.isLoading = !1, t.isLoaded = !0, this.trigger("afterLoad", t), this.hideLoading(t), !t.opts.smallBtn || t.$smallBtn && t.$smallBtn.length || (t.$smallBtn = n(this.translate(t, t.opts.btnTpl.smallBtn)).appendTo(t.$content)), t.opts.protect && t.$content && !t.hasError && (t.$content.on("contextmenu.fb", (function(t) {
                                return 2 == t.button && t.preventDefault(), !0
                            })), "image" === t.type && n('<div class="fancybox-spaceball"></div>').appendTo(t.$content)), this.adjustCaption(t), this.adjustLayout(t), t.pos === this.currPos && this.updateCursor(), this.revealContent(t))
                        },
                        adjustCaption: function(t) {
                            var e, n = t || this.current,
                                o = n.opts.caption,
                                i = n.opts.preventCaptionOverlap,
                                r = this.$refs.caption,
                                a = !1;
                            r.toggleClass("fancybox-caption--separate", i), i && o && o.length && (n.pos !== this.currPos ? ((e = r.clone().appendTo(r.parent())).children().eq(0).empty().html(o), a = e.outerHeight(!0), e.empty().remove()) : this.$caption && (a = this.$caption.outerHeight(!0)), n.$slide.css("padding-bottom", a || ""))
                        },
                        adjustLayout: function(t) {
                            var e, n, o, i, r = t || this.current;
                            r.isLoaded && !0 !== r.opts.disableLayoutFix && (r.$content.css("margin-bottom", ""), r.$content.outerHeight() > r.$slide.height() + .5 && (o = r.$slide[0].style["padding-bottom"], i = r.$slide.css("padding-bottom"), parseFloat(i) > 0 && (e = r.$slide[0].scrollHeight, r.$slide.css("padding-bottom", 0), Math.abs(e - r.$slide[0].scrollHeight) < 1 && (n = i), r.$slide.css("padding-bottom", o))), r.$content.css("margin-bottom", n))
                        },
                        revealContent: function(t) {
                            var e, o, i, r, a = this,
                                s = t.$slide,
                                l = !1,
                                c = !1,
                                u = a.isMoved(t),
                                f = t.isRevealed;
                            return t.isRevealed = !0, e = t.opts[a.firstRun ? "animationEffect" : "transitionEffect"], i = t.opts[a.firstRun ? "animationDuration" : "transitionDuration"], i = parseInt(void 0 === t.forcedDuration ? i : t.forcedDuration, 10), !u && t.pos === a.currPos && i || (e = !1), "zoom" === e && (t.pos === a.currPos && i && "image" === t.type && !t.hasError && (c = a.getThumbPos(t)) ? l = a.getFitPos(t) : e = "fade"), "zoom" === e ? (a.isAnimating = !0, l.scaleX = l.width / c.width, l.scaleY = l.height / c.height, "auto" == (r = t.opts.zoomOpacity) && (r = Math.abs(t.width / t.height - c.width / c.height) > .1), r && (c.opacity = .1, l.opacity = 1), n.fancybox.setTranslate(t.$content.removeClass("fancybox-is-hidden"), c), d(t.$content), void n.fancybox.animate(t.$content, l, i, (function() {
                                a.isAnimating = !1, a.complete()
                            }))) : (a.updateSlide(t), e ? (n.fancybox.stop(s), o = "fancybox-slide--" + (t.pos >= a.prevPos ? "next" : "previous") + " fancybox-animated fancybox-fx-" + e, s.addClass(o).removeClass("fancybox-slide--current"), t.$content.removeClass("fancybox-is-hidden"), d(s), "image" !== t.type && t.$content.hide().show(0), void n.fancybox.animate(s, "fancybox-slide--current", i, (function() {
                                s.removeClass(o).css({
                                    transform: "",
                                    opacity: ""
                                }), t.pos === a.currPos && a.complete()
                            }), !0)) : (t.$content.removeClass("fancybox-is-hidden"), f || !u || "image" !== t.type || t.hasError || t.$content.hide().fadeIn("fast"), void(t.pos === a.currPos && a.complete())))
                        },
                        getThumbPos: function(t) {
                            var o, i, r, a, s, l, c = t.$thumb;
                            return !(!c || ! function(t) {
                                var o, i;
                                return !(!t || t.ownerDocument !== e) && (n(".fancybox-container").css("pointer-events", "none"), o = {
                                    x: t.getBoundingClientRect().left + t.offsetWidth / 2,
                                    y: t.getBoundingClientRect().top + t.offsetHeight / 2
                                }, i = e.elementFromPoint(o.x, o.y) === t, n(".fancybox-container").css("pointer-events", ""), i)
                            }(c[0])) && (i = n.fancybox.getTranslate(c), r = parseFloat(c.css("border-top-width") || 0), a = parseFloat(c.css("border-right-width") || 0), s = parseFloat(c.css("border-bottom-width") || 0), l = parseFloat(c.css("border-left-width") || 0), o = {
                                top: i.top + r,
                                left: i.left + l,
                                width: i.width - a - l,
                                height: i.height - r - s,
                                scaleX: 1,
                                scaleY: 1
                            }, i.width > 0 && i.height > 0 && o)
                        },
                        complete: function() {
                            var t, e = this,
                                o = e.current,
                                i = {};
                            !e.isMoved() && o.isLoaded && (o.isComplete || (o.isComplete = !0, o.$slide.siblings().trigger("onReset"), e.preload("inline"), d(o.$slide), o.$slide.addClass("fancybox-slide--complete"), n.each(e.slides, (function(t, o) {
                                o.pos >= e.currPos - 1 && o.pos <= e.currPos + 1 ? i[o.pos] = o : o && (n.fancybox.stop(o.$slide), o.$slide.off().remove())
                            })), e.slides = i), e.isAnimating = !1, e.updateCursor(), e.trigger("afterShow"), o.opts.video.autoStart && o.$slide.find("video,audio").filter(":visible:first").trigger("play").one("ended", (function() {
                                Document.exitFullscreen ? Document.exitFullscreen() : this.webkitExitFullscreen && this.webkitExitFullscreen(), e.next()
                            })), o.opts.autoFocus && "html" === o.contentType && ((t = o.$content.find("input[autofocus]:enabled:visible:first")).length ? t.trigger("focus") : e.focus(null, !0)), o.$slide.scrollTop(0).scrollLeft(0))
                        },
                        preload: function(t) {
                            var e, n;
                            this.group.length < 2 || (n = this.slides[this.currPos + 1], (e = this.slides[this.currPos - 1]) && e.type === t && this.loadSlide(e), n && n.type === t && this.loadSlide(n))
                        },
                        focus: function(t, o) {
                            var i, r, a = ["a[href]", "area[href]", 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', "select:not([disabled]):not([aria-hidden])", "textarea:not([disabled]):not([aria-hidden])", "button:not([disabled]):not([aria-hidden])", "iframe", "object", "embed", "video", "audio", "[contenteditable]", '[tabindex]:not([tabindex^="-"])'].join(",");
                            this.isClosing || ((i = (i = !t && this.current && this.current.isComplete ? this.current.$slide.find("*:visible" + (o ? ":not(.fancybox-close-small)" : "")) : this.$refs.container.find("*:visible")).filter(a).filter((function() {
                                return "hidden" !== n(this).css("visibility") && !n(this).hasClass("disabled")
                            }))).length ? (r = i.index(e.activeElement), t && t.shiftKey ? (r < 0 || 0 == r) && (t.preventDefault(), i.eq(i.length - 1).trigger("focus")) : (r < 0 || r == i.length - 1) && (t && t.preventDefault(), i.eq(0).trigger("focus"))) : this.$refs.container.trigger("focus"))
                        },
                        activate: function() {
                            var t = this;
                            n(".fancybox-container").each((function() {
                                var e = n(this).data("FancyBox");
                                e && e.id !== t.id && !e.isClosing && (e.trigger("onDeactivate"), e.removeEvents(), e.isVisible = !1)
                            })), t.isVisible = !0, (t.current || t.isIdle) && (t.update(), t.updateControls()), t.trigger("onActivate"), t.addEvents()
                        },
                        close: function(t, e) {
                            var o, i, r, a, s, l, c, f = this,
                                h = f.current,
                                p = function() {
                                    f.cleanUp(t)
                                };
                            return !f.isClosing && (f.isClosing = !0, !1 === f.trigger("beforeClose", t) ? (f.isClosing = !1, u((function() {
                                f.update()
                            })), !1) : (f.removeEvents(), r = h.$content, o = h.opts.animationEffect, i = n.isNumeric(e) ? e : o ? h.opts.animationDuration : 0, h.$slide.removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"), !0 !== t ? n.fancybox.stop(h.$slide) : o = !1, h.$slide.siblings().trigger("onReset").remove(), i && f.$refs.container.removeClass("fancybox-is-open").addClass("fancybox-is-closing").css("transition-duration", i + "ms"), f.hideLoading(h), f.hideControls(!0), f.updateCursor(), "zoom" !== o || r && i && "image" === h.type && !f.isMoved() && !h.hasError && (c = f.getThumbPos(h)) || (o = "fade"), "zoom" === o ? (n.fancybox.stop(r), l = {
                                top: (a = n.fancybox.getTranslate(r)).top,
                                left: a.left,
                                scaleX: a.width / c.width,
                                scaleY: a.height / c.height,
                                width: c.width,
                                height: c.height
                            }, "auto" == (s = h.opts.zoomOpacity) && (s = Math.abs(h.width / h.height - c.width / c.height) > .1), s && (c.opacity = 0), n.fancybox.setTranslate(r, l), d(r), n.fancybox.animate(r, c, i, p), !0) : (o && i ? n.fancybox.animate(h.$slide.addClass("fancybox-slide--previous").removeClass("fancybox-slide--current"), "fancybox-animated fancybox-fx-" + o, i, p) : !0 === t ? setTimeout(p, i) : p(), !0)))
                        },
                        cleanUp: function(e) {
                            var o, i, r, a = this.current.opts.$orig;
                            this.current.$slide.trigger("onReset"), this.$refs.container.empty().remove(), this.trigger("afterClose", e), this.current.opts.backFocus && (a && a.length && a.is(":visible") || (a = this.$trigger), a && a.length && (i = t.scrollX, r = t.scrollY, a.trigger("focus"), n("html, body").scrollTop(r).scrollLeft(i))), this.current = null, (o = n.fancybox.getInstance()) ? o.activate() : (n("body").removeClass("fancybox-active compensate-for-scrollbar"), n("#fancybox-style-noscroll").remove())
                        },
                        trigger: function(t, e) {
                            var o, i = Array.prototype.slice.call(arguments, 1),
                                r = this,
                                a = e && e.opts ? e : r.current;
                            if (a ? i.unshift(a) : a = r, i.unshift(r), n.isFunction(a.opts[t]) && (o = a.opts[t].apply(a, i)), !1 === o) return o;
                            "afterClose" !== t && r.$refs ? r.$refs.container.trigger(t + ".fb", i) : l.trigger(t + ".fb", i)
                        },
                        updateControls: function() {
                            var t = this.current,
                                o = t.index,
                                i = this.$refs.container,
                                r = this.$refs.caption,
                                a = t.opts.caption;
                            t.$slide.trigger("refresh"), a && a.length ? (this.$caption = r, r.children().eq(0).html(a)) : this.$caption = null, this.hasHiddenControls || this.isIdle || this.showControls(), i.find("[data-fancybox-count]").html(this.group.length), i.find("[data-fancybox-index]").html(o + 1), i.find("[data-fancybox-prev]").prop("disabled", !t.opts.loop && o <= 0), i.find("[data-fancybox-next]").prop("disabled", !t.opts.loop && o >= this.group.length - 1), "image" === t.type ? i.find("[data-fancybox-zoom]").show().end().find("[data-fancybox-download]").attr("href", t.opts.image.src || t.src).show() : t.opts.toolbar && i.find("[data-fancybox-download],[data-fancybox-zoom]").hide(), n(e.activeElement).is(":hidden,[disabled]") && this.$refs.container.trigger("focus")
                        },
                        hideControls: function(t) {
                            var e = ["infobar", "toolbar", "nav"];
                            !t && this.current.opts.preventCaptionOverlap || e.push("caption"), this.$refs.container.removeClass(e.map((function(t) {
                                return "fancybox-show-" + t
                            })).join(" ")), this.hasHiddenControls = !0
                        },
                        showControls: function() {
                            var t = this.current ? this.current.opts : this.opts,
                                e = this.$refs.container;
                            this.hasHiddenControls = !1, this.idleSecondsCounter = 0, e.toggleClass("fancybox-show-toolbar", !(!t.toolbar || !t.buttons)).toggleClass("fancybox-show-infobar", !!(t.infobar && this.group.length > 1)).toggleClass("fancybox-show-caption", !!this.$caption).toggleClass("fancybox-show-nav", !!(t.arrows && this.group.length > 1)).toggleClass("fancybox-is-modal", !!t.modal)
                        },
                        toggleControls: function() {
                            this.hasHiddenControls ? this.showControls() : this.hideControls()
                        }
                    }), n.fancybox = {
                        version: "3.5.7",
                        defaults: a,
                        getInstance: function(t) {
                            var e = n('.fancybox-container:not(".fancybox-is-closing"):last').data("FancyBox"),
                                o = Array.prototype.slice.call(arguments, 1);
                            return e instanceof y && ("string" === n.type(t) ? e[t].apply(e, o) : "function" === n.type(t) && t.apply(e, o), e)
                        },
                        open: function(t, e, n) {
                            return new y(t, e, n)
                        },
                        close: function(t) {
                            var e = this.getInstance();
                            e && (e.close(), !0 === t && this.close(t))
                        },
                        destroy: function() {
                            this.close(!0), l.add("body").off("click.fb-start", "**")
                        },
                        isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                        use3d: (i = e.createElement("div"), t.getComputedStyle && t.getComputedStyle(i) && t.getComputedStyle(i).getPropertyValue("transform") && !(e.documentMode && e.documentMode < 11)),
                        getTranslate: function(t) {
                            var e;
                            return !(!t || !t.length) && {
                                top: (e = t[0].getBoundingClientRect()).top || 0,
                                left: e.left || 0,
                                width: e.width,
                                height: e.height,
                                opacity: parseFloat(t.css("opacity"))
                            }
                        },
                        setTranslate: function(t, e) {
                            var n = "",
                                o = {};
                            if (t && e) return void 0 === e.left && void 0 === e.top || (n = (void 0 === e.left ? t.position().left : e.left) + "px, " + (void 0 === e.top ? t.position().top : e.top) + "px", n = this.use3d ? "translate3d(" + n + ", 0px)" : "translate(" + n + ")"), void 0 !== e.scaleX && void 0 !== e.scaleY ? n += " scale(" + e.scaleX + ", " + e.scaleY + ")" : void 0 !== e.scaleX && (n += " scaleX(" + e.scaleX + ")"), n.length && (o.transform = n), void 0 !== e.opacity && (o.opacity = e.opacity), void 0 !== e.width && (o.width = e.width), void 0 !== e.height && (o.height = e.height), t.css(o)
                        },
                        animate: function(t, e, o, i, r) {
                            var a, s = this;
                            n.isFunction(o) && (i = o, o = null), s.stop(t), a = s.getTranslate(t), t.on(h, (function(l) {
                                (!l || !l.originalEvent || t.is(l.originalEvent.target) && "z-index" != l.originalEvent.propertyName) && (s.stop(t), n.isNumeric(o) && t.css("transition-duration", ""), n.isPlainObject(e) ? void 0 !== e.scaleX && void 0 !== e.scaleY && s.setTranslate(t, {
                                    top: e.top,
                                    left: e.left,
                                    width: a.width * e.scaleX,
                                    height: a.height * e.scaleY,
                                    scaleX: 1,
                                    scaleY: 1
                                }) : !0 !== r && t.removeClass(e), n.isFunction(i) && i(l))
                            })), n.isNumeric(o) && t.css("transition-duration", o + "ms"), n.isPlainObject(e) ? (void 0 !== e.scaleX && void 0 !== e.scaleY && (delete e.width, delete e.height, t.parent().hasClass("fancybox-slide--image") && t.parent().addClass("fancybox-is-scaling")), n.fancybox.setTranslate(t, e)) : t.addClass(e), t.data("timer", setTimeout((function() {
                                t.trigger(h)
                            }), o + 33))
                        },
                        stop: function(t, e) {
                            t && t.length && (clearTimeout(t.data("timer")), e && t.trigger(h), t.off(h).css("transition-duration", ""), t.parent().removeClass("fancybox-is-scaling"))
                        }
                    }, n.fn.fancybox = function(t) {
                        var e;
                        return (e = (t = t || {}).selector || !1) ? n("body").off("click.fb-start", e).on("click.fb-start", e, {
                            options: t
                        }, g) : this.off("click.fb-start").on("click.fb-start", {
                            items: this,
                            options: t
                        }, g), this
                    }, l.on("click.fb-start", "[data-fancybox]", g), l.on("click.fb-start", "[data-fancybox-trigger]", (function(t) {
                        n('[data-fancybox="' + n(this).attr("data-fancybox-trigger") + '"]').eq(n(this).attr("data-fancybox-index") || 0).trigger("click.fb-start", {
                            $trigger: n(this)
                        })
                    })), r = null, l.on("mousedown mouseup focus blur", ".fancybox-button", (function(t) {
                        switch (t.type) {
                            case "mousedown":
                                r = n(this);
                                break;
                            case "mouseup":
                                r = null;
                                break;
                            case "focusin":
                                n(".fancybox-button").removeClass("fancybox-focus"), n(this).is(r) || n(this).is("[disabled]") || n(this).addClass("fancybox-focus");
                                break;
                            case "focusout":
                                n(".fancybox-button").removeClass("fancybox-focus")
                        }
                    }))
                }

            function g(t, e) {
                var o, i, r, a = [],
                    s = 0;
                t && t.isDefaultPrevented() || (t.preventDefault(), e = e || {}, t && t.data && (e = p(t.data.options, e)), o = e.$target || n(t.currentTarget).trigger("blur"), (r = n.fancybox.getInstance()) && r.$trigger && r.$trigger.is(o) || (a = e.selector ? n(e.selector) : (i = o.attr("data-fancybox") || "") ? (a = t.data ? t.data.items : []).length ? a.filter('[data-fancybox="' + i + '"]') : n('[data-fancybox="' + i + '"]') : [o], (s = n(a).index(o)) < 0 && (s = 0), (r = n.fancybox.open(a, e, s)).$trigger = o))
            }
        }(window, document, jQuery),
        function(t) {
            var e = {
                    youtube: {
                        matcher: /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,
                        params: {
                            autoplay: 1,
                            autohide: 1,
                            fs: 1,
                            rel: 0,
                            hd: 1,
                            wmode: "transparent",
                            enablejsapi: 1,
                            html5: 1
                        },
                        paramPlace: 8,
                        type: "iframe",
                        url: "https://www.youtube-nocookie.com/embed/$4",
                        thumb: "https://img.youtube.com/vi/$4/hqdefault.jpg"
                    },
                    vimeo: {
                        matcher: /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,
                        params: {
                            autoplay: 1,
                            hd: 1,
                            show_title: 1,
                            show_byline: 1,
                            show_portrait: 0,
                            fullscreen: 1
                        },
                        paramPlace: 3,
                        type: "iframe",
                        url: "//player.vimeo.com/video/$2"
                    },
                    instagram: {
                        matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
                        type: "image",
                        url: "//$1/p/$2/media/?size=l"
                    },
                    gmap_place: {
                        matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,
                        type: "iframe",
                        url: function(t) {
                            return "//maps.google." + t[2] + "/?ll=" + (t[9] ? t[9] + "&z=" + Math.floor(t[10]) + (t[12] ? t[12].replace(/^\//, "&") : "") : t[12] + "").replace(/\?/, "&") + "&output=" + (t[12] && t[12].indexOf("layer=c") > 0 ? "svembed" : "embed")
                        }
                    },
                    gmap_search: {
                        matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,
                        type: "iframe",
                        url: function(t) {
                            return "//maps.google." + t[2] + "/maps?q=" + t[5].replace("query=", "q=").replace("api=1", "") + "&output=embed"
                        }
                    }
                },
                n = function(e, n, o) {
                    if (e) return o = o || "", "object" === t.type(o) && (o = t.param(o, !0)), t.each(n, (function(t, n) {
                        e = e.replace("$" + t, n || "")
                    })), o.length && (e += (e.indexOf("?") > 0 ? "&" : "?") + o), e
                };
            t(document).on("objectNeedsType.fb", (function(o, i, r) {
                var a, s, l, c, u, f, h, d = r.src || "",
                    p = !1;
                a = t.extend(!0, {}, e, r.opts.media), t.each(a, (function(e, o) {
                    if (l = d.match(o.matcher)) {
                        if (p = o.type, h = e, f = {}, o.paramPlace && l[o.paramPlace]) {
                            "?" == (u = l[o.paramPlace])[0] && (u = u.substring(1)), u = u.split("&");
                            for (var i = 0; i < u.length; ++i) {
                                var a = u[i].split("=", 2);
                                2 == a.length && (f[a[0]] = decodeURIComponent(a[1].replace(/\+/g, " ")))
                            }
                        }
                        return c = t.extend(!0, {}, o.params, r.opts[e], f), d = "function" === t.type(o.url) ? o.url.call(this, l, c, r) : n(o.url, l, c), s = "function" === t.type(o.thumb) ? o.thumb.call(this, l, c, r) : n(o.thumb, l), "youtube" === e ? d = d.replace(/&t=((\d+)m)?(\d+)s/, (function(t, e, n, o) {
                            return "&start=" + ((n ? 60 * parseInt(n, 10) : 0) + parseInt(o, 10))
                        })) : "vimeo" === e && (d = d.replace("&%23", "#")), !1
                    }
                })), p ? (r.opts.thumb || r.opts.$thumb && r.opts.$thumb.length || (r.opts.thumb = s), "iframe" === p && (r.opts = t.extend(!0, r.opts, {
                    iframe: {
                        preload: !1,
                        attr: {
                            scrolling: "no"
                        }
                    }
                })), t.extend(r, {
                    type: p,
                    src: d,
                    origSrc: r.src,
                    contentSource: h,
                    contentType: "image" === p ? "image" : "gmap_place" == h || "gmap_search" == h ? "map" : "video"
                })) : d && (r.type = r.opts.defaultType)
            }));
            var o = {
                youtube: {
                    src: "https://www.youtube.com/iframe_api",
                    class: "YT",
                    loading: !1,
                    loaded: !1
                },
                vimeo: {
                    src: "https://player.vimeo.com/api/player.js",
                    class: "Vimeo",
                    loading: !1,
                    loaded: !1
                },
                load: function(t) {
                    var e, n = this;
                    this[t].loaded ? setTimeout((function() {
                        n.done(t)
                    })) : this[t].loading || (this[t].loading = !0, (e = document.createElement("script")).type = "text/javascript", e.src = this[t].src, "youtube" === t ? window.onYouTubeIframeAPIReady = function() {
                        n[t].loaded = !0, n.done(t)
                    } : e.onload = function() {
                        n[t].loaded = !0, n.done(t)
                    }, document.body.appendChild(e))
                },
                done: function(e) {
                    var n, o;
                    "youtube" === e && delete window.onYouTubeIframeAPIReady, (n = t.fancybox.getInstance()) && (o = n.current.$content.find("iframe"), "youtube" === e && void 0 !== YT && YT ? new YT.Player(o.attr("id"), {
                        events: {
                            onStateChange: function(t) {
                                0 == t.data && n.next()
                            }
                        }
                    }) : "vimeo" === e && void 0 !== Vimeo && Vimeo && new Vimeo.Player(o).on("ended", (function() {
                        n.next()
                    })))
                }
            };
            t(document).on({
                "afterShow.fb": function(t, e, n) {
                    e.group.length > 1 && ("youtube" === n.contentSource || "vimeo" === n.contentSource) && o.load(n.contentSource)
                }
            })
        }(jQuery),
        function(t, e, n) {
            var o = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || function(e) {
                    return t.setTimeout(e, 1e3 / 60)
                },
                i = t.cancelAnimationFrame || t.webkitCancelAnimationFrame || t.mozCancelAnimationFrame || t.oCancelAnimationFrame || function(e) {
                    t.clearTimeout(e)
                },
                r = function(e) {
                    var n = [];
                    for (var o in e = (e = e.originalEvent || e || t.e).touches && e.touches.length ? e.touches : e.changedTouches && e.changedTouches.length ? e.changedTouches : [e]) e[o].pageX ? n.push({
                        x: e[o].pageX,
                        y: e[o].pageY
                    }) : e[o].clientX && n.push({
                        x: e[o].clientX,
                        y: e[o].clientY
                    });
                    return n
                },
                a = function(t, e, n) {
                    return e && t ? "x" === n ? t.x - e.x : "y" === n ? t.y - e.y : Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2)) : 0
                },
                s = function(t) {
                    if (t.is('a,area,button,[role="button"],input,label,select,summary,textarea,video,audio,iframe') || n.isFunction(t.get(0).onclick) || t.data("selectable")) return !0;
                    for (var e = 0, o = t[0].attributes, i = o.length; e < i; e++)
                        if ("data-fancybox-" === o[e].nodeName.substr(0, 14)) return !0;
                    return !1
                },
                l = function(e) {
                    for (var n, o, i, r, a, s = !1; n = e.get(0), o = void 0, i = void 0, r = void 0, a = void 0, o = t.getComputedStyle(n)["overflow-y"], i = t.getComputedStyle(n)["overflow-x"], r = ("scroll" === o || "auto" === o) && n.scrollHeight > n.clientHeight, a = ("scroll" === i || "auto" === i) && n.scrollWidth > n.clientWidth, !(s = r || a) && (e = e.parent()).length && !e.hasClass("fancybox-stage") && !e.is("body"););
                    return s
                },
                c = function(t) {
                    this.instance = t, this.$bg = t.$refs.bg, this.$stage = t.$refs.stage, this.$container = t.$refs.container, this.destroy(), this.$container.on("touchstart.fb.touch mousedown.fb.touch", n.proxy(this, "ontouchstart"))
                };
            c.prototype.destroy = function() {
                this.$container.off(".fb.touch"), n(e).off(".fb.touch"), this.requestId && (i(this.requestId), this.requestId = null), this.tapped && (clearTimeout(this.tapped), this.tapped = null)
            }, c.prototype.ontouchstart = function(o) {
                var i = n(o.target),
                    c = this.instance,
                    u = c.current,
                    f = u.$slide,
                    h = u.$content,
                    d = "touchstart" == o.type;
                if (d && this.$container.off("mousedown.fb.touch"), (!o.originalEvent || 2 != o.originalEvent.button) && f.length && i.length && !s(i) && !s(i.parent()) && (i.is("img") || !(o.originalEvent.clientX > i[0].clientWidth + i.offset().left))) {
                    if (!u || c.isAnimating || u.$slide.hasClass("fancybox-animated")) return o.stopPropagation(), void o.preventDefault();
                    this.realPoints = this.startPoints = r(o), this.startPoints.length && (u.touch && o.stopPropagation(), this.startEvent = o, this.canTap = !0, this.$target = i, this.$content = h, this.opts = u.opts.touch, this.isPanning = !1, this.isSwiping = !1, this.isZooming = !1, this.isScrolling = !1, this.canPan = c.canPan(), this.startTime = (new Date).getTime(), this.distanceX = this.distanceY = this.distance = 0, this.canvasWidth = Math.round(f[0].clientWidth), this.canvasHeight = Math.round(f[0].clientHeight), this.contentLastPos = null, this.contentStartPos = n.fancybox.getTranslate(this.$content) || {
                        top: 0,
                        left: 0
                    }, this.sliderStartPos = n.fancybox.getTranslate(f), this.stagePos = n.fancybox.getTranslate(c.$refs.stage), this.sliderStartPos.top -= this.stagePos.top, this.sliderStartPos.left -= this.stagePos.left, this.contentStartPos.top -= this.stagePos.top, this.contentStartPos.left -= this.stagePos.left, n(e).off(".fb.touch").on(d ? "touchend.fb.touch touchcancel.fb.touch" : "mouseup.fb.touch mouseleave.fb.touch", n.proxy(this, "ontouchend")).on(d ? "touchmove.fb.touch" : "mousemove.fb.touch", n.proxy(this, "ontouchmove")), n.fancybox.isMobile && e.addEventListener("scroll", this.onscroll, !0), ((this.opts || this.canPan) && (i.is(this.$stage) || this.$stage.find(i).length) || (i.is(".fancybox-image") && o.preventDefault(), n.fancybox.isMobile && i.parents(".fancybox-caption").length)) && (this.isScrollable = l(i) || l(i.parent()), n.fancybox.isMobile && this.isScrollable || o.preventDefault(), (1 === this.startPoints.length || u.hasError) && (this.canPan ? (n.fancybox.stop(this.$content), this.isPanning = !0) : this.isSwiping = !0, this.$container.addClass("fancybox-is-grabbing")), 2 === this.startPoints.length && "image" === u.type && (u.isLoaded || u.$ghost) && (this.canTap = !1, this.isSwiping = !1, this.isPanning = !1, this.isZooming = !0, n.fancybox.stop(this.$content), this.centerPointStartX = .5 * (this.startPoints[0].x + this.startPoints[1].x) - n(t).scrollLeft(), this.centerPointStartY = .5 * (this.startPoints[0].y + this.startPoints[1].y) - n(t).scrollTop(), this.percentageOfImageAtPinchPointX = (this.centerPointStartX - this.contentStartPos.left) / this.contentStartPos.width, this.percentageOfImageAtPinchPointY = (this.centerPointStartY - this.contentStartPos.top) / this.contentStartPos.height, this.startDistanceBetweenFingers = a(this.startPoints[0], this.startPoints[1]))))
                }
            }, c.prototype.onscroll = function(t) {
                this.isScrolling = !0, e.removeEventListener("scroll", this.onscroll, !0)
            }, c.prototype.ontouchmove = function(t) {
                void 0 === t.originalEvent.buttons || 0 !== t.originalEvent.buttons ? this.isScrolling ? this.canTap = !1 : (this.newPoints = r(t), (this.opts || this.canPan) && this.newPoints.length && this.newPoints.length && (this.isSwiping && !0 === this.isSwiping || t.preventDefault(), this.distanceX = a(this.newPoints[0], this.startPoints[0], "x"), this.distanceY = a(this.newPoints[0], this.startPoints[0], "y"), this.distance = a(this.newPoints[0], this.startPoints[0]), this.distance > 0 && (this.isSwiping ? this.onSwipe(t) : this.isPanning ? this.onPan() : this.isZooming && this.onZoom()))) : this.ontouchend(t)
            }, c.prototype.onSwipe = function(e) {
                var r, a = this,
                    s = a.instance,
                    l = a.isSwiping,
                    c = a.sliderStartPos.left || 0;
                if (!0 !== l) "x" == l && (a.distanceX > 0 && (a.instance.group.length < 2 || 0 === a.instance.current.index && !a.instance.current.opts.loop) ? c += Math.pow(a.distanceX, .8) : a.distanceX < 0 && (a.instance.group.length < 2 || a.instance.current.index === a.instance.group.length - 1 && !a.instance.current.opts.loop) ? c -= Math.pow(-a.distanceX, .8) : c += a.distanceX), a.sliderLastPos = {
                    top: "x" == l ? 0 : a.sliderStartPos.top + a.distanceY,
                    left: c
                }, a.requestId && (i(a.requestId), a.requestId = null), a.requestId = o((function() {
                    a.sliderLastPos && (n.each(a.instance.slides, (function(t, e) {
                        var o = e.pos - a.instance.currPos;
                        n.fancybox.setTranslate(e.$slide, {
                            top: a.sliderLastPos.top,
                            left: a.sliderLastPos.left + o * a.canvasWidth + o * e.opts.gutter
                        })
                    })), a.$container.addClass("fancybox-is-sliding"))
                }));
                else if (Math.abs(a.distance) > 10) {
                    if (a.canTap = !1, s.group.length < 2 && a.opts.vertical ? a.isSwiping = "y" : s.isDragging || !1 === a.opts.vertical || "auto" === a.opts.vertical && n(t).width() > 800 ? a.isSwiping = "x" : (r = Math.abs(180 * Math.atan2(a.distanceY, a.distanceX) / Math.PI), a.isSwiping = r > 45 && r < 135 ? "y" : "x"), "y" === a.isSwiping && n.fancybox.isMobile && a.isScrollable) return void(a.isScrolling = !0);
                    s.isDragging = a.isSwiping, a.startPoints = a.newPoints, n.each(s.slides, (function(t, e) {
                        var o, i;
                        n.fancybox.stop(e.$slide), o = n.fancybox.getTranslate(e.$slide), i = n.fancybox.getTranslate(s.$refs.stage), e.$slide.css({
                            transform: "",
                            opacity: "",
                            "transition-duration": ""
                        }).removeClass("fancybox-animated").removeClass((function(t, e) {
                            return (e.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ")
                        })), e.pos === s.current.pos && (a.sliderStartPos.top = o.top - i.top, a.sliderStartPos.left = o.left - i.left), n.fancybox.setTranslate(e.$slide, {
                            top: o.top - i.top,
                            left: o.left - i.left
                        })
                    })), s.SlideShow && s.SlideShow.isActive && s.SlideShow.stop()
                }
            }, c.prototype.onPan = function() {
                var t = this;
                a(t.newPoints[0], t.realPoints[0]) < (n.fancybox.isMobile ? 10 : 5) ? t.startPoints = t.newPoints : (t.canTap = !1, t.contentLastPos = t.limitMovement(), t.requestId && i(t.requestId), t.requestId = o((function() {
                    n.fancybox.setTranslate(t.$content, t.contentLastPos)
                })))
            }, c.prototype.limitMovement = function() {
                var t, e, n, o, i, r, a = this.canvasWidth,
                    s = this.canvasHeight,
                    l = this.distanceX,
                    c = this.distanceY,
                    u = this.contentStartPos,
                    f = u.left,
                    h = u.top,
                    d = u.width,
                    p = u.height;
                return i = d > a ? f + l : f, r = h + c, t = Math.max(0, .5 * a - .5 * d), e = Math.max(0, .5 * s - .5 * p), n = Math.min(a - d, .5 * a - .5 * d), o = Math.min(s - p, .5 * s - .5 * p), l > 0 && i > t && (i = t - 1 + Math.pow(-t + f + l, .8) || 0), l < 0 && i < n && (i = n + 1 - Math.pow(n - f - l, .8) || 0), c > 0 && r > e && (r = e - 1 + Math.pow(-e + h + c, .8) || 0), c < 0 && r < o && (r = o + 1 - Math.pow(o - h - c, .8) || 0), {
                    top: r,
                    left: i
                }
            }, c.prototype.limitPosition = function(t, e, n, o) {
                var i = this.canvasWidth,
                    r = this.canvasHeight;
                return t = n > i ? (t = t > 0 ? 0 : t) < i - n ? i - n : t : Math.max(0, i / 2 - n / 2), {
                    top: e = o > r ? (e = e > 0 ? 0 : e) < r - o ? r - o : e : Math.max(0, r / 2 - o / 2),
                    left: t
                }
            }, c.prototype.onZoom = function() {
                var e = this,
                    r = e.contentStartPos,
                    s = r.width,
                    l = r.height,
                    c = r.left,
                    u = r.top,
                    f = a(e.newPoints[0], e.newPoints[1]) / e.startDistanceBetweenFingers,
                    h = Math.floor(s * f),
                    d = Math.floor(l * f),
                    p = (s - h) * e.percentageOfImageAtPinchPointX,
                    y = (l - d) * e.percentageOfImageAtPinchPointY,
                    g = (e.newPoints[0].x + e.newPoints[1].x) / 2 - n(t).scrollLeft(),
                    m = (e.newPoints[0].y + e.newPoints[1].y) / 2 - n(t).scrollTop(),
                    b = g - e.centerPointStartX,
                    v = {
                        top: u + (y + (m - e.centerPointStartY)),
                        left: c + (p + b),
                        scaleX: f,
                        scaleY: f
                    };
                e.canTap = !1, e.newWidth = h, e.newHeight = d, e.contentLastPos = v, e.requestId && i(e.requestId), e.requestId = o((function() {
                    n.fancybox.setTranslate(e.$content, e.contentLastPos)
                }))
            }, c.prototype.ontouchend = function(t) {
                var o = this.isSwiping,
                    a = this.isPanning,
                    s = this.isZooming,
                    l = this.isScrolling;
                if (this.endPoints = r(t), this.dMs = Math.max((new Date).getTime() - this.startTime, 1), this.$container.removeClass("fancybox-is-grabbing"), n(e).off(".fb.touch"), e.removeEventListener("scroll", this.onscroll, !0), this.requestId && (i(this.requestId), this.requestId = null), this.isSwiping = !1, this.isPanning = !1, this.isZooming = !1, this.isScrolling = !1, this.instance.isDragging = !1, this.canTap) return this.onTap(t);
                this.speed = 100, this.velocityX = this.distanceX / this.dMs * .5, this.velocityY = this.distanceY / this.dMs * .5, a ? this.endPanning() : s ? this.endZooming() : this.endSwiping(o, l)
            }, c.prototype.endSwiping = function(t, e) {
                var o = !1,
                    i = this.instance.group.length,
                    r = Math.abs(this.distanceX),
                    a = "x" == t && i > 1 && (this.dMs > 130 && r > 10 || r > 50);
                this.sliderLastPos = null, "y" == t && !e && Math.abs(this.distanceY) > 50 ? (n.fancybox.animate(this.instance.current.$slide, {
                    top: this.sliderStartPos.top + this.distanceY + 150 * this.velocityY,
                    opacity: 0
                }, 200), o = this.instance.close(!0, 250)) : a && this.distanceX > 0 ? o = this.instance.previous(300) : a && this.distanceX < 0 && (o = this.instance.next(300)), !1 !== o || "x" != t && "y" != t || this.instance.centerSlide(200), this.$container.removeClass("fancybox-is-sliding")
            }, c.prototype.endPanning = function() {
                var t, e, o;
                this.contentLastPos && (!1 === this.opts.momentum || this.dMs > 350 ? (t = this.contentLastPos.left, e = this.contentLastPos.top) : (t = this.contentLastPos.left + 500 * this.velocityX, e = this.contentLastPos.top + 500 * this.velocityY), (o = this.limitPosition(t, e, this.contentStartPos.width, this.contentStartPos.height)).width = this.contentStartPos.width, o.height = this.contentStartPos.height, n.fancybox.animate(this.$content, o, 366))
            }, c.prototype.endZooming = function() {
                var t, e, o, i, r = this.instance.current,
                    a = this.newWidth,
                    s = this.newHeight;
                this.contentLastPos && (t = this.contentLastPos.left, i = {
                    top: e = this.contentLastPos.top,
                    left: t,
                    width: a,
                    height: s,
                    scaleX: 1,
                    scaleY: 1
                }, n.fancybox.setTranslate(this.$content, i), a < this.canvasWidth && s < this.canvasHeight ? this.instance.scaleToFit(150) : a > r.width || s > r.height ? this.instance.scaleToActual(this.centerPointStartX, this.centerPointStartY, 150) : (o = this.limitPosition(t, e, a, s), n.fancybox.animate(this.$content, o, 150)))
            }, c.prototype.onTap = function(e) {
                var o, i = this,
                    a = n(e.target),
                    s = i.instance,
                    l = s.current,
                    c = e && r(e) || i.startPoints,
                    u = c[0] ? c[0].x - n(t).scrollLeft() - i.stagePos.left : 0,
                    f = c[0] ? c[0].y - n(t).scrollTop() - i.stagePos.top : 0,
                    h = function(t) {
                        var o = l.opts[t];
                        if (n.isFunction(o) && (o = o.apply(s, [l, e])), o) switch (o) {
                            case "close":
                                s.close(i.startEvent);
                                break;
                            case "toggleControls":
                                s.toggleControls();
                                break;
                            case "next":
                                s.next();
                                break;
                            case "nextOrClose":
                                s.group.length > 1 ? s.next() : s.close(i.startEvent);
                                break;
                            case "zoom":
                                "image" == l.type && (l.isLoaded || l.$ghost) && (s.canPan() ? s.scaleToFit() : s.isScaledDown() ? s.scaleToActual(u, f) : s.group.length < 2 && s.close(i.startEvent))
                        }
                    };
                if ((!e.originalEvent || 2 != e.originalEvent.button) && (a.is("img") || !(u > a[0].clientWidth + a.offset().left))) {
                    if (a.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container")) o = "Outside";
                    else if (a.is(".fancybox-slide")) o = "Slide";
                    else {
                        if (!s.current.$content || !s.current.$content.find(a).addBack().filter(a).length) return;
                        o = "Content"
                    }
                    if (i.tapped) {
                        if (clearTimeout(i.tapped), i.tapped = null, Math.abs(u - i.tapX) > 50 || Math.abs(f - i.tapY) > 50) return this;
                        h("dblclick" + o)
                    } else i.tapX = u, i.tapY = f, l.opts["dblclick" + o] && l.opts["dblclick" + o] !== l.opts["click" + o] ? i.tapped = setTimeout((function() {
                        i.tapped = null, s.isAnimating || h("click" + o)
                    }), 500) : h("click" + o);
                    return this
                }
            }, n(e).on("onActivate.fb", (function(t, e) {
                e && !e.Guestures && (e.Guestures = new c(e))
            })).on("beforeClose.fb", (function(t, e) {
                e && e.Guestures && e.Guestures.destroy()
            }))
        }(window, document, jQuery),
        function(t, e) {
            e.extend(!0, e.fancybox.defaults, {
                btnTpl: {
                    slideShow: '<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.5 5.4v13.2l11-6.6z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.33 5.75h2.2v12.5h-2.2V5.75zm5.15 0h2.2v12.5h-2.2V5.75z"/></svg></button>'
                },
                slideShow: {
                    autoStart: !1,
                    speed: 3e3,
                    progress: !0
                }
            });
            var n = function(t) {
                this.instance = t, this.init()
            };
            e.extend(n.prototype, {
                timer: null,
                isActive: !1,
                $button: null,
                init: function() {
                    var t = this,
                        n = t.instance,
                        o = n.group[n.currIndex].opts.slideShow;
                    t.$button = n.$refs.toolbar.find("[data-fancybox-play]").on("click", (function() {
                        t.toggle()
                    })), n.group.length < 2 || !o ? t.$button.hide() : o.progress && (t.$progress = e('<div class="fancybox-progress"></div>').appendTo(n.$refs.inner))
                },
                set: function(t) {
                    var n = this.instance,
                        o = n.current;
                    o && (!0 === t || o.opts.loop || n.currIndex < n.group.length - 1) ? this.isActive && "video" !== o.contentType && (this.$progress && e.fancybox.animate(this.$progress.show(), {
                        scaleX: 1
                    }, o.opts.slideShow.speed), this.timer = setTimeout((function() {
                        n.current.opts.loop || n.current.index != n.group.length - 1 ? n.next() : n.jumpTo(0)
                    }), o.opts.slideShow.speed)) : (this.stop(), n.idleSecondsCounter = 0, n.showControls())
                },
                clear: function() {
                    clearTimeout(this.timer), this.timer = null, this.$progress && this.$progress.removeAttr("style").hide()
                },
                start: function() {
                    var t = this.instance.current;
                    t && (this.$button.attr("title", (t.opts.i18n[t.opts.lang] || t.opts.i18n.en).PLAY_STOP).removeClass("fancybox-button--play").addClass("fancybox-button--pause"), this.isActive = !0, t.isComplete && this.set(!0), this.instance.trigger("onSlideShowChange", !0))
                },
                stop: function() {
                    var t = this.instance.current;
                    this.clear(), this.$button.attr("title", (t.opts.i18n[t.opts.lang] || t.opts.i18n.en).PLAY_START).removeClass("fancybox-button--pause").addClass("fancybox-button--play"), this.isActive = !1, this.instance.trigger("onSlideShowChange", !1), this.$progress && this.$progress.removeAttr("style").hide()
                },
                toggle: function() {
                    this.isActive ? this.stop() : this.start()
                }
            }), e(t).on({
                "onInit.fb": function(t, e) {
                    e && !e.SlideShow && (e.SlideShow = new n(e))
                },
                "beforeShow.fb": function(t, e, n, o) {
                    var i = e && e.SlideShow;
                    o ? i && n.opts.slideShow.autoStart && i.start() : i && i.isActive && i.clear()
                },
                "afterShow.fb": function(t, e, n) {
                    var o = e && e.SlideShow;
                    o && o.isActive && o.set()
                },
                "afterKeydown.fb": function(n, o, i, r, a) {
                    var s = o && o.SlideShow;
                    !s || !i.opts.slideShow || 80 !== a && 32 !== a || e(t.activeElement).is("button,a,input") || (r.preventDefault(), s.toggle())
                },
                "beforeClose.fb onDeactivate.fb": function(t, e) {
                    var n = e && e.SlideShow;
                    n && n.stop()
                }
            }), e(t).on("visibilitychange", (function() {
                var n = e.fancybox.getInstance(),
                    o = n && n.SlideShow;
                o && o.isActive && (t.hidden ? o.clear() : o.set())
            }))
        }(document, jQuery),
        function(t, e) {
            var n = function() {
                for (var e = [
                        ["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"],
                        ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"],
                        ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"],
                        ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"],
                        ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]
                    ], n = {}, o = 0; o < e.length; o++) {
                    var i = e[o];
                    if (i && i[1] in t) {
                        for (var r = 0; r < i.length; r++) n[e[0][r]] = i[r];
                        return n
                    }
                }
                return !1
            }();
            if (n) {
                var o = {
                    request: function(e) {
                        (e = e || t.documentElement)[n.requestFullscreen](e.ALLOW_KEYBOARD_INPUT)
                    },
                    exit: function() {
                        t[n.exitFullscreen]()
                    },
                    toggle: function(e) {
                        e = e || t.documentElement, this.isFullscreen() ? this.exit() : this.request(e)
                    },
                    isFullscreen: function() {
                        return Boolean(t[n.fullscreenElement])
                    },
                    enabled: function() {
                        return Boolean(t[n.fullscreenEnabled])
                    }
                };
                e.extend(!0, e.fancybox.defaults, {
                    btnTpl: {
                        fullScreen: '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fsenter" title="{{FULL_SCREEN}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 16h3v3h2v-5H5zm3-8H5v2h5V5H8zm6 11h2v-3h3v-2h-5zm2-11V5h-2v5h5V8z"/></svg></button>'
                    },
                    fullScreen: {
                        autoStart: !1
                    }
                }), e(t).on(n.fullscreenchange, (function() {
                    var t = o.isFullscreen(),
                        n = e.fancybox.getInstance();
                    n && (n.current && "image" === n.current.type && n.isAnimating && (n.isAnimating = !1, n.update(!0, !0, 0), n.isComplete || n.complete()), n.trigger("onFullscreenChange", t), n.$refs.container.toggleClass("fancybox-is-fullscreen", t), n.$refs.toolbar.find("[data-fancybox-fullscreen]").toggleClass("fancybox-button--fsenter", !t).toggleClass("fancybox-button--fsexit", t))
                }))
            }
            e(t).on({
                "onInit.fb": function(t, e) {
                    n ? e && e.group[e.currIndex].opts.fullScreen ? (e.$refs.container.on("click.fb-fullscreen", "[data-fancybox-fullscreen]", (function(t) {
                        t.stopPropagation(), t.preventDefault(), o.toggle()
                    })), e.opts.fullScreen && !0 === e.opts.fullScreen.autoStart && o.request(), e.FullScreen = o) : e && e.$refs.toolbar.find("[data-fancybox-fullscreen]").hide() : e.$refs.toolbar.find("[data-fancybox-fullscreen]").remove()
                },
                "afterKeydown.fb": function(t, e, n, o, i) {
                    e && e.FullScreen && 70 === i && (o.preventDefault(), e.FullScreen.toggle())
                },
                "beforeClose.fb": function(t, e) {
                    e && e.FullScreen && e.$refs.container.hasClass("fancybox-is-fullscreen") && o.exit()
                }
            })
        }(document, jQuery),
        function(t, e) {
            var n = "fancybox-thumbs";
            e.fancybox.defaults = e.extend(!0, {
                btnTpl: {
                    thumbs: '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.59 14.59h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76H5.65V5.65z"/></svg></button>'
                },
                thumbs: {
                    autoStart: !1,
                    hideOnClose: !0,
                    parentEl: ".fancybox-container",
                    axis: "y"
                }
            }, e.fancybox.defaults);
            var o = function(t) {
                this.init(t)
            };
            e.extend(o.prototype, {
                $button: null,
                $grid: null,
                $list: null,
                isVisible: !1,
                isActive: !1,
                init: function(t) {
                    var e = this,
                        n = t.group,
                        o = 0;
                    e.instance = t, e.opts = n[t.currIndex].opts.thumbs, t.Thumbs = e, e.$button = t.$refs.toolbar.find("[data-fancybox-thumbs]");
                    for (var i = 0, r = n.length; i < r && (n[i].thumb && o++, !(o > 1)); i++);
                    o > 1 && e.opts ? (e.$button.removeAttr("style").on("click", (function() {
                        e.toggle()
                    })), e.isActive = !0) : e.$button.hide()
                },
                create: function() {
                    var t, o = this.instance,
                        i = this.opts.parentEl,
                        r = [];
                    this.$grid || (this.$grid = e('<div class="' + n + " " + n + "-" + this.opts.axis + '"></div>').appendTo(o.$refs.container.find(i).addBack().filter(i)), this.$grid.on("click", "a", (function() {
                        o.jumpTo(e(this).attr("data-index"))
                    }))), this.$list || (this.$list = e('<div class="' + n + '__list">').appendTo(this.$grid)), e.each(o.group, (function(e, n) {
                        (t = n.thumb) || "image" !== n.type || (t = n.src), r.push('<a href="javascript:;" tabindex="0" data-index="' + e + '"' + (t && t.length ? ' style="background-image:url(' + t + ')"' : 'class="fancybox-thumbs-missing"') + "></a>")
                    })), this.$list[0].innerHTML = r.join(""), "x" === this.opts.axis && this.$list.width(parseInt(this.$grid.css("padding-right"), 10) + o.group.length * this.$list.children().eq(0).outerWidth(!0))
                },
                focus: function(t) {
                    var e, n, o = this.$list,
                        i = this.$grid;
                    this.instance.current && (n = (e = o.children().removeClass("fancybox-thumbs-active").filter('[data-index="' + this.instance.current.index + '"]').addClass("fancybox-thumbs-active")).position(), "y" === this.opts.axis && (n.top < 0 || n.top > o.height() - e.outerHeight()) ? o.stop().animate({
                        scrollTop: o.scrollTop() + n.top
                    }, t) : "x" === this.opts.axis && (n.left < i.scrollLeft() || n.left > i.scrollLeft() + (i.width() - e.outerWidth())) && o.parent().stop().animate({
                        scrollLeft: n.left
                    }, t))
                },
                update: function() {
                    this.instance.$refs.container.toggleClass("fancybox-show-thumbs", this.isVisible), this.isVisible ? (this.$grid || this.create(), this.instance.trigger("onThumbsShow"), this.focus(0)) : this.$grid && this.instance.trigger("onThumbsHide"), this.instance.update()
                },
                hide: function() {
                    this.isVisible = !1, this.update()
                },
                show: function() {
                    this.isVisible = !0, this.update()
                },
                toggle: function() {
                    this.isVisible = !this.isVisible, this.update()
                }
            }), e(t).on({
                "onInit.fb": function(t, e) {
                    var n;
                    e && !e.Thumbs && (n = new o(e)).isActive && !0 === n.opts.autoStart && n.show()
                },
                "beforeShow.fb": function(t, e, n, o) {
                    var i = e && e.Thumbs;
                    i && i.isVisible && i.focus(o ? 0 : 250)
                },
                "afterKeydown.fb": function(t, e, n, o, i) {
                    var r = e && e.Thumbs;
                    r && r.isActive && 71 === i && (o.preventDefault(), r.toggle())
                },
                "beforeClose.fb": function(t, e) {
                    var n = e && e.Thumbs;
                    n && n.isVisible && !1 !== n.opts.hideOnClose && n.$grid.hide()
                }
            })
        }(document, jQuery),
        function(t, e) {
            e.extend(!0, e.fancybox.defaults, {
                btnTpl: {
                    share: '<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2.55 19c1.4-8.4 9.1-9.8 11.9-9.8V5l7 7-7 6.3v-3.5c-2.8 0-10.5 2.1-11.9 4.2z"/></svg></button>'
                },
                share: {
                    url: function(t, e) {
                        return !t.currentHash && "inline" !== e.type && "html" !== e.type && (e.origSrc || e.src) || window.location
                    },
                    tpl: '<div class="fancybox-share"><h1>{{SHARE}}</h1><p><a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg><span>Facebook</span></a><a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg><span>Twitter</span></a><a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg><span>Pinterest</span></a></p><p><input class="fancybox-share__input" type="text" value="{{url_raw}}" onclick="select()" /></p></div>'
                }
            }), e(t).on("click", "[data-fancybox-share]", (function() {
                var t, n, o, i, r = e.fancybox.getInstance(),
                    a = r.current || null;
                a && ("function" === e.type(a.opts.share.url) && (t = a.opts.share.url.apply(a, [r, a])), n = a.opts.share.tpl.replace(/\{\{media\}\}/g, "image" === a.type ? encodeURIComponent(a.src) : "").replace(/\{\{url\}\}/g, encodeURIComponent(t)).replace(/\{\{url_raw\}\}/g, (o = t, i = {
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#39;",
                    "/": "&#x2F;",
                    "`": "&#x60;",
                    "=": "&#x3D;"
                }, String(o).replace(/[&<>"'`=\/]/g, (function(t) {
                    return i[t]
                })))).replace(/\{\{descr\}\}/g, r.$caption ? encodeURIComponent(r.$caption.text()) : ""), e.fancybox.open({
                    src: r.translate(r, n),
                    type: "html",
                    opts: {
                        touch: !1,
                        animationEffect: !1,
                        afterLoad: function(t, e) {
                            r.$refs.container.one("beforeClose.fb", (function() {
                                t.close(null, 0)
                            })), e.$content.find(".fancybox-share__button").click((function() {
                                return window.open(this.href, "Share", "width=550, height=450"), !1
                            }))
                        },
                        mobile: {
                            autoFocus: !1
                        }
                    }
                }))
            }))
        }(document, jQuery),
        function(t, e, n) {
            function o() {
                var e = t.location.hash.substr(1),
                    n = e.split("-"),
                    o = n.length > 1 && /^\+?\d+$/.test(n[n.length - 1]) && parseInt(n.pop(-1), 10) || 1;
                return {
                    hash: e,
                    index: o < 1 ? 1 : o,
                    gallery: n.join("-")
                }
            }

            function i(t) {
                "" !== t.gallery && n("[data-fancybox='" + n.escapeSelector(t.gallery) + "']").eq(t.index - 1).focus().trigger("click.fb-start")
            }

            function r(t) {
                var e, n;
                return !!t && ("" !== (n = (e = t.current ? t.current.opts : t.opts).hash || (e.$orig ? e.$orig.data("fancybox") || e.$orig.data("fancybox-trigger") : "")) && n)
            }
            n.escapeSelector || (n.escapeSelector = function(t) {
                return (t + "").replace(/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g, (function(t, e) {
                    return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
                }))
            }), n((function() {
                !1 !== n.fancybox.defaults.hash && (n(e).on({
                    "onInit.fb": function(t, e) {
                        var n, i;
                        !1 !== e.group[e.currIndex].opts.hash && (n = o(), (i = r(e)) && n.gallery && i == n.gallery && (e.currIndex = n.index - 1))
                    },
                    "beforeShow.fb": function(n, o, i, a) {
                        var s;
                        i && !1 !== i.opts.hash && (s = r(o)) && (o.currentHash = s + (o.group.length > 1 ? "-" + (i.index + 1) : ""), t.location.hash !== "#" + o.currentHash && (a && !o.origHash && (o.origHash = t.location.hash), o.hashTimer && clearTimeout(o.hashTimer), o.hashTimer = setTimeout((function() {
                            "replaceState" in t.history ? (t.history[a ? "pushState" : "replaceState"]({}, e.title, t.location.pathname + t.location.search + "#" + o.currentHash), a && (o.hasCreatedHistory = !0)) : t.location.hash = o.currentHash, o.hashTimer = null
                        }), 300)))
                    },
                    "beforeClose.fb": function(n, o, i) {
                        i && !1 !== i.opts.hash && (clearTimeout(o.hashTimer), o.currentHash && o.hasCreatedHistory ? t.history.back() : o.currentHash && ("replaceState" in t.history ? t.history.replaceState({}, e.title, t.location.pathname + t.location.search + (o.origHash || "")) : t.location.hash = o.origHash), o.currentHash = null)
                    }
                }), n(t).on("hashchange.fb", (function() {
                    var t = o(),
                        e = null;
                    n.each(n(".fancybox-container").get().reverse(), (function(t, o) {
                        var i = n(o).data("FancyBox");
                        if (i && i.currentHash) return e = i, !1
                    })), e ? e.currentHash === t.gallery + "-" + t.index || 1 === t.index && e.currentHash == t.gallery || (e.currentHash = null, e.close()) : "" !== t.gallery && i(t)
                })), setTimeout((function() {
                    n.fancybox.getInstance() || i(o())
                }), 50))
            }))
        }(window, document, jQuery),
        function(t, e) {
            var n = (new Date).getTime();
            e(t).on({
                "onInit.fb": function(t, e, o) {
                    e.$refs.stage.on("mousewheel DOMMouseScroll wheel MozMousePixelScroll", (function(t) {
                        var o = e.current,
                            i = (new Date).getTime();
                        e.group.length < 2 || !1 === o.opts.wheel || "auto" === o.opts.wheel && "image" !== o.type || (t.preventDefault(), t.stopPropagation(), o.$slide.hasClass("fancybox-animated") || (t = t.originalEvent || t, i - n < 250 || (n = i, e[(-t.deltaY || -t.deltaX || t.wheelDelta || -t.detail) < 0 ? "next" : "previous"]())))
                    }))
                }
            })
        }(document, jQuery)
}, , , , , , , , , , , , , , , , , , , , , , , function(t, e, n) {
    "use strict";
    n(4), n(5), n(6), n(42), n(0), n(8), n(1), n(40), n(9), n(26), n(2), n(3), n(44), n(7), Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.Viewport = void 0;
    var o = n(41),
        i = n(13),
        r = n(46),
        a = n(22),
        s = n(31),
        l = f(n(14)),
        c = n(43),
        u = f(n(233));

    function f(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function h(t) {
        return (h = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function d(t, e) {
        for (var n = 0; n < e.length; n++) {
            var o = e[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
        }
    }

    function p(t, e) {
        return (p = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    function y(t) {
        var e = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
            } catch (t) {
                return !1
            }
        }();
        return function() {
            var n, o = m(t);
            if (e) {
                var i = m(this).constructor;
                n = Reflect.construct(o, arguments, i)
            } else n = o.apply(this, arguments);
            return g(this, n)
        }
    }

    function g(t, e) {
        return !e || "object" !== h(e) && "function" != typeof e ? function(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function m(t) {
        return (m = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }
    n(61);
    var b = function(t) {
        ! function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && p(t, e)
        }(h, t);
        var e, n, o, f = y(h);

        function h() {
            var t;
            return function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, h), (t = f.call(this)).waypoint = window.Waypoint, t.$body = (0, l.default)(document.body), t.$bodyHtml = (0, l.default)("body,html"), t.$window = (0, l.default)(window), t.lastScrollYBeforeBodyFix = 0, t.bodyHeight = 0, t.lastViewportHeight = null, t.scrollY = 0, t.isScrolling = !1, t.keyboardFocus = !1, t.breakpoints = new s.Breakpoints, t.isScrollDown = !1, t.isScrollUp = !1, t.expoTweenT1Time = 500, t.expoTweenT1 = [.191, 1, .22, 1], t.signals.changed = new r.Signal, t.signals.breakpointChanged = new r.Signal, t.signals.contentHeightChanged = new r.Signal, t
        }
        return e = h, (n = [{
            key: "handleResize",
            value: function() {
                var t = this;
                this.breakpoints.determine().then((function(e) {
                    t.log("Dispatching viewportChanged"), t.signals.changed.dispatch(), e && (t.log("Dispatching breakpointChanged", t.breakpoint), t.signals.breakpointChanged.dispatch(t.breakpoint)), t.handleIOSNavigation()
                }))
            }
        }, {
            key: "handleFocusTrigger",
            value: function(t) {
                var e = [c.KeyCode.TAB, c.KeyCode.LEFT, c.KeyCode.RIGHT, c.KeyCode.UP, c.KeyCode.DOWN, c.KeyCode.BACKSPACE];
                this.keyboardFocus = "keydown" === t.type && e.indexOf(t.keyCode) >= 0
            }
        }, {
            key: "handleElementFocusIn",
            value: function(t) {
                this.keyboardFocus && (0, l.default)(t.target).addClass(i.State.KEYBOARD_FOCUS)
            }
        }, {
            key: "handleElementFocusOut",
            value: function(t) {
                (0, l.default)(t.target).removeClass(i.State.KEYBOARD_FOCUS)
            }
        }, {
            key: "handleIOSNavigation",
            value: function() {
                (0, a.isMobileSafari)() && (this.$body.removeClass(i.State.IOS_NAV_DOWN).removeClass(i.State.IOS_NAV_UP), null !== this.lastViewportHeight && window.innerHeight > this.lastViewportHeight ? this.$body.addClass(i.State.IOS_NAV_DOWN) : window.innerHeight < this.lastViewportHeight && this.$body.addClass(i.State.IOS_NAV_UP)), this.lastViewportHeight = window.innerHeight
            }
        }, {
            key: "checkForIosViewport",
            value: function() {
                (0, a.isMobileSafari)() && this.$body.addClass(i.State.IOS)
            }
        }, {
            key: "setup",
            value: function() {
                return this.$window.scroll(this.handleScroll.bind(this)), this.$window.on("resize", (0, a.debounce)(this.handleResize.bind(this), 100)), this.$body.on("keydown", this.handleFocusTrigger.bind(this)), this.$body.on("mousedown", this.handleFocusTrigger.bind(this)), this.$body.on("focusin", this.handleElementFocusIn.bind(this)), this.$body.on("focusout", this.handleElementFocusOut.bind(this)), this.setupDeviceClasses(), this.checkForIosViewport(), this.handleResize(), this.onBeforePrint(), Promise.resolve()
            }
        }, {
            key: "stopScrolling",
            value: function() {
                var t = function(t) {
                    (t = t || window.event).preventDefault && t.preventDefault(), t.returnValue = !1
                };
                window.addEventListener && window.addEventListener("DOMMouseScroll", t, !1), window.onwheel = t, window.onmousewheel = document.onmousewheel = t, window.ontouchmove = t, document.onkeydown = function(e) {
                    if ({
                            37: 1,
                            38: 1,
                            39: 1,
                            40: 1
                        }[e.keyCode]) return t(e), !1
                }
            }
        }, {
            key: "enableScrolling",
            value: function() {
                this.$body.hasClass(i.State.FIXED) && (this.$body.removeClass(i.State.FIXED + " " + i.State.NOT_FIXED_IOS), this.$body.css("marginTop", ""), this.$window.scrollTop(this.lastScrollYBeforeBodyFix))
            }
        }, {
            key: "disableScrolling",
            value: function() {
                this.lastScrollYBeforeBodyFix = this.$window.scrollTop(), this.$body.addClass(i.State.FIXED), this.$body.css("marginTop", -this.lastScrollYBeforeBodyFix)
            }
        }, {
            key: "handleScroll",
            value: function(t) {
                if (this.isScrolling && t.preventDefault(), !this.$body.hasClass(i.State.FIXED)) {
                    var e = window.pageYOffset > 0 ? window.pageYOffset : 0,
                        n = this.$window.scrollTop() > 0 ? this.$window.scrollTop() : 0;
                    if (e != this.scrollY) {
                        Math.abs(e - this.scrollY) > 2 && (e > this.scrollY ? (this.$body.removeClass(i.State.SCROLLUP).addClass(i.State.SCROLLDOWN), this.isScrollDown = !0, this.isScrollUp = !1) : (this.$body.addClass(i.State.SCROLLUP).removeClass(i.State.SCROLLDOWN), this.isScrollDown = !1, this.isScrollUp = !0), this.checkContentHeight());
                        var o = n + this.$window.height() >= (0, l.default)(document).height(),
                            r = n <= 0;
                        r || o ? this.$body.addClass(r ? i.State.TOP : i.State.BOTTOM) : this.$body.removeClass(i.State.TOP + " " + i.State.BOTTOM), this.scrollY = e
                    }
                }
            }
        }, {
            key: "checkContentHeight",
            value: function() {
                var t = this.$body.height();
                t != this.bodyHeight && (this.bodyHeight = t, this.signals.contentHeightChanged.dispatch())
            }
        }, {
            key: "scrollTo",
            value: function(t, e, n, o) {
                if (!1 === this.isScrolling && t && t.length) {
                    this.isScrolling = !0;
                    var i = this;
                    e = void 0 === e ? "slow" : e;
                    var r = t.offset().top - this.getTopOffset();
                    "number" == typeof n && (r += n), this.$bodyHtml.animate({
                        scrollTop: r
                    }, e).promise().done((function() {
                        i.isScrolling = !1, "function" == typeof o && o()
                    }))
                }
            }
        }, {
            key: "onBeforePrint",
            value: function() {
                window.onbeforeprint = function() {
                    (0, l.default)(".do-lazyload").each((function(t, e) {
                        u.default.loader.unveil(e)
                    }))
                }
            }
        }, {
            key: "getTopOffset",
            value: function() {
                var t = (0, l.default)(".u-viewport").css("margin-top");
                return void 0 === t ? 0 : parseFloat(t.replace("px", ""))
            }
        }, {
            key: "setupDeviceClasses",
            value: function() {
                var t = this.isTouch ? i.State.TOUCH : i.State.NO_TOUCH;
                (0, l.default)("html").removeClass(i.State.TOUCH + " " + i.State.NO_TOUCH).addClass(t)
            }
        }, {
            key: "breakpoint",
            get: function() {
                return this.breakpoints.current
            }
        }, {
            key: "isTouch",
            get: function() {
                return l.default.isTouchCapable()
            }
        }, {
            key: "contentHeight",
            get: function() {
                return (0, l.default)(window).height() - this.getTopOffset()
            }
        }]) && d(e.prototype, n), o && d(e, o), h
    }(o.Base);
    e.Viewport = b
}, function(t, e, n) {
    "use strict";
    n(51), n(55);
    var o = l(n(14)),
        i = l(n(137)),
        r = n(138),
        a = (l(n(233)), l(n(357)), l(n(358))),
        s = (l(n(359)), l(n(360)));

    function l(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    window.lazySizesConfig = window.lazySizesConfig || {}, window.lazySizesConfig.lazyClass = "do-lazyload", window.lazySizesConfig.loadingClass = "is-lazyloading", window.lazySizesConfig.loadedClass = "is-lazyloaded";
    var c = (0, i.default)("global/application");
    (0, s.default)(), (0, a.default)(o.default), o.default.noConflict(), c("Loaded jQuery", o.default.fn.jquery), window.$ || (window.$ = o.default), c("Public jQuery", window.$.fn.jquery), c("Starting app"), window.tkdeApp = r.Application.instance, "function" == typeof window.tkOnLoad ? r.Application.instance.signals.setupCompleted.addOnce(tkOnLoad) : window.tkOnLoad && window.tkOnLoad.constructor === Array && window.tkOnLoad.forEach((function(t) {
        r.Application.instance.signals.setupCompleted.addOnce(t)
    })), c("Globalized Application", window.tkdeApp), r.Application.instance.start()
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , function(t, e, n) {
    "use strict";
    n(4), n(5), n(6), n(0), n(8), n(1), n(40), n(9), n(2), n(3), n(7), Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.Application = void 0;
    var o, i = n(41),
        r = n(11),
        a = n(109),
        s = n(46),
        l = (o = n(14)) && o.__esModule ? o : {
            default: o
        },
        c = n(149),
        u = n(155),
        f = n(157),
        h = n(154);

    function d(t) {
        return (d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function p(t, e) {
        for (var n = 0; n < e.length; n++) {
            var o = e[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
        }
    }

    function y(t, e) {
        return (y = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    function g(t) {
        var e = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
            } catch (t) {
                return !1
            }
        }();
        return function() {
            var n, o = v(t);
            if (e) {
                var i = v(this).constructor;
                n = Reflect.construct(o, arguments, i)
            } else n = o.apply(this, arguments);
            return m(this, n)
        }
    }

    function m(t, e) {
        return !e || "object" !== d(e) && "function" != typeof e ? b(t) : e
    }

    function b(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }

    function v(t) {
        return (v = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }
    var k = function(t) {
        ! function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && y(t, e)
        }(d, t);
        var e, n, o, i = g(d);

        function d(t) {
            var e;
            return function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, d), (e = i.call(this)).signals.setup = new s.Signal, e.signals.setup.memorize = !0, e.signals.setupCompleted = new s.Signal, e.signals.setupCompleted.memorize = !0, e.signals.requestFlyoutClose = new s.Signal, e.signals.requestFlyoutOpen = new s.Signal, e.signals.requestNavigationOpenHighlight = new s.Signal, e.signals.requestHeaderShim = new s.Signal, e.signals.requestFilterSearchResults = new s.Signal, e.signals.searchResultsLoaded = new s.Signal, e.signals.hideLogo = new s.Signal, e.signals.showLogo = new s.Signal, e.signals.showLogoFlyout = new s.Signal, e.signals.hideLogoFlyout = new s.Signal, e.signals.closeDropdowns = new s.Signal, e.signals.requestLightboxOpen = new s.Signal, e.signals.mediaInitialized = new s.Signal, e.viewport = new a.Viewport, e.analytics = new f.WebAnalytics(b(e)), e.history = new c.History, e.sessionTimeout = new u.SessionTimeout(b(e)), e.mediaPlayer = new h.Mediaplayer(b(e)), e
        }
        return e = d, o = [{
            key: "className",
            get: function() {
                return "base.global/Application"
            }
        }, {
            key: "instance",
            get: function() {
                return d.__instance__ || (d.__instance__ = new d), d.__instance__
            }
        }], (n = [{
            key: "setup",
            value: function() {
                var t = this;
                this.signals.setup.dispatch();
                var e = this,
                    n = [];
                (0, l.default)("[data-entity]").each((function() {
                    n.push(r.Component.getInstance(e, (0, l.default)(this)))
                })), Promise.all(n).then((function() {
                    t.log("dispatching setupCompleted"), t.signals.setupCompleted.dispatch()
                }))
            }
        }, {
            key: "start",
            value: function() {
                var t = this;
                return this.viewport.setup().then(this.setup.bind(this)).catch((function(e) {
                    t.log("Error", e.stack ? e.stack : e)
                }))
            }
        }]) && p(e.prototype, n), o && p(e, o), d
    }(i.Base);
    e.Application = k
}, , , , , , , , , , , function(t, e, n) {
    "use strict";

    function o(t) {
        return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function i(t, e) {
        for (var n = 0; n < e.length; n++) {
            var o = e[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
        }
    }

    function r(t, e) {
        return (r = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    function a(t) {
        var e = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
            } catch (t) {
                return !1
            }
        }();
        return function() {
            var n, o = l(t);
            if (e) {
                var i = l(this).constructor;
                n = Reflect.construct(o, arguments, i)
            } else n = o.apply(this, arguments);
            return s(this, n)
        }
    }

    function s(t, e) {
        return !e || "object" !== o(e) && "function" != typeof e ? function(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function l(t) {
        return (l = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }
    n(4), n(5), n(6), n(0), n(8), n(1), n(9), n(2), n(3), n(7), Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.History = void 0;
    var c = function(t) {
        ! function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && r(t, e)
        }(l, t);
        var e, n, o, s = a(l);

        function l() {
            var t;
            return function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, l), (t = s.call(this)).api = window.history || {
                pushState: function(e, n, o) {
                    return t.log("window.history is not available")
                },
                replaceState: function(e, n, o) {
                    return t.log("window.history is not available")
                }
            }, t
        }
        return e = l, o = [{
            key: "className",
            get: function() {
                return "base.global/History"
            }
        }], (n = [{
            key: "push",
            value: function(t) {
                this.api.pushState(window.history.state || {}, "", t)
            }
        }, {
            key: "replace",
            value: function(t) {
                this.api.replaceState(window.history.state || {}, "", t)
            }
        }]) && i(e.prototype, n), o && i(e, o), l
    }(n(41).Base);
    e.History = c
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.HorizontalScroll = void 0;
    var o, i = (o = n(14)) && o.__esModule ? o : {
            default: o
        },
        r = n(13);

    function a(t, e) {
        for (var n = 0; n < e.length; n++) {
            var o = e[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
        }
    }
    var s = function() {
        function t(e, n, o) {
            ! function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, t), this.application = e, this.$element = n, this.$container = o, this.scrollStartPos = 0, this.position = 0, this.inBounce = !1, this.snapRange = 0, this.animationSlowTime = 300, this.animationFastTime = 200, this.isDragging = !1, this.setup()
        }
        var e, n, o;
        return e = t, (n = [{
            key: "setup",
            value: function() {
                this.application.viewport.isTouch && (this.$container.on("tapstart", this.handleTouchStart.bind(this)), this.$container.on("tapmove", this.handleTouchMove.bind(this))), this.application.viewport.signals.changed.add(this.handleResize.bind(this)), this.handleResize()
            }
        }, {
            key: "handleTouchStart",
            value: function(t) {
                this.scrollStartPos = t.position.x, this.scrollDist = 0, this.scrollWidth = -this.$element[0].scrollWidth, this.position = parseFloat(this.$element.css("left")), this.snapRange = this.$element.width(), this.snapMinPosition = 0, this.snapMaxPosition = this.scrollWidth + this.snapRange, this.maxPosition = this.scrollWidth - this.snapRange, this.minPosition = this.snapRange, this.isDragging = !0, (0, i.default)("body").one("tapend.kinect mouseleave", this.handleTouchEnd.bind(this))
            }
        }, {
            key: "handleTouchMove",
            value: function(t, e) {
                this.isDragging && (this.scrollDist = e.position.x - this.scrollStartPos, this.newPosition = this.position + this.scrollDist, this.newPosition < this.maxPosition ? this.newPosition = this.maxPosition : this.newPosition > this.minPosition && (this.newPosition = this.minPosition), this.$element.css("left", this.newPosition))
            }
        }, {
            key: "handleTouchEnd",
            value: function(t) {
                t.preventDefault(), this.isDragging = !1, (0, i.default)("body").off("tapend.kinect"), this.scrollDist && this.touchBounce(!(this.scrollDist < 0))
            }
        }, {
            key: "handleResize",
            value: function() {
                this.$element.css("left", 0), this.isScrollable() ? this.$container.addClass(r.State.SCROLLABLE) : this.$container.removeClass(r.State.SCROLLABLE)
            }
        }, {
            key: "touchBounce",
            value: function(t) {
                if ((this.newPosition < this.snapMaxPosition || this.newPosition > this.snapMinPosition) && !1 === this.inBounce) {
                    var e, n;
                    this.inBounce = !0, n = t ? (e = this.snapMinPosition) + this.newPosition : (e = this.snapMaxPosition) - this.newPosition;
                    var o = this,
                        i = this.getAnimationTime(n);
                    this.$element.stop().animate({
                        left: e
                    }, i, (function() {
                        o.inBounce = !1
                    }))
                }
            }
        }, {
            key: "isScrollable",
            value: function() {
                return this.$element[0].scrollWidth !== Math.round(this.$element.innerWidth())
            }
        }, {
            key: "getAnimationTime",
            value: function(t) {
                var e = (this.animationSlowTime - this.animationFastTime) * (100 * t / this.snapRange / 100);
                return this.animationSlowTime - e
            }
        }]) && a(e.prototype, n), o && a(e, o), t
    }();
    e.HorizontalScroll = s
}, , , , function(t, e, n) {
    "use strict";
    n(4), n(5), n(6), n(0), n(8), n(1), n(9), n(2), n(3), n(7), Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.Mediaplayer = void 0;
    var o = n(41),
        i = n(22);

    function r(t) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function a(t, e) {
        for (var n = 0; n < e.length; n++) {
            var o = e[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
        }
    }

    function s(t, e) {
        return (s = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    function l(t) {
        var e = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
            } catch (t) {
                return !1
            }
        }();
        return function() {
            var n, o = u(t);
            if (e) {
                var i = u(this).constructor;
                n = Reflect.construct(o, arguments, i)
            } else n = o.apply(this, arguments);
            return c(this, n)
        }
    }

    function c(t, e) {
        return !e || "object" !== r(e) && "function" != typeof e ? function(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function u(t) {
        return (u = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }
    var f = function(t) {
        ! function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && s(t, e)
        }(c, t);
        var e, n, o, r = l(c);

        function c(t) {
            var e;
            return function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, c), (e = r.call(this)).log("constructor"), e.application = t, e.mediaConfig = {
                enabled: !0,
                attrName: "data-tk-media-id",
                attrPreloadVideo: "data-tk-media-preload",
                attrMediatype: "data-tk-media-type",
                attrIsVisible: "data-tk-is-visible",
                debounceMutationObserverInMilliSeconds: 1e3
            }, window.AcPlayer ? e.initMediaContainers(document.body) : window.acplayerloaded = function() {
                e.initMediaContainers(document.body)
            }, e.setupMediaMutationObserver(), e
        }
        return e = c, o = [{
            key: "className",
            get: function() {
                return "base.global/Mediaplayer"
            }
        }], (n = [{
            key: "init",
            value: function(t) {
                this.log("configure"), this.opts = t || {}, this.mediaConfig.enabled = void 0 === this.opts.enabled || this.opts.enabled
            }
        }, {
            key: "setupMediaMutationObserver",
            value: function() {
                var t = this,
                    e = document.querySelector("#tkde-maincontent"),
                    n = (0, i.debounce)((function(n) {
                        t.log("media mutation observer detected a mutation"), t.initMediaContainers(e)
                    }), t.mediaConfig.debounceMutationObserverInMilliSeconds);
                t.log("re-init mediaContainers by the mutation observer"), e && new MutationObserver(n).observe(e, {
                    childList: !0,
                    subtree: !0
                })
            }
        }, {
            key: "initMediaContainers",
            value: function(t) {
                if (this.log("initMediaContainers"), !0 === this.mediaConfig.enabled && window.AcPlayer) {
                    this.log("Init all Medias under root node ", t);
                    for (var e = document.querySelectorAll("[" + this.mediaConfig.attrName + "]:not([" + this.mediaConfig.attrIsVisible + '="true"])'), n = 0; n < e.length; n++) {
                        var o = e[n];
                        if (o.offsetWidth > 0 && o.offsetHeight > 0) {
                            o.setAttribute(this.mediaConfig.attrIsVisible, "true");
                            var i = o.getAttribute(this.mediaConfig.attrName),
                                r = o.getAttribute(this.mediaConfig.attrMediatype),
                                a = o.getAttribute(this.mediaConfig.attrPreloadVideo),
                                s = void 0 !== r && "audio" === r;
                            i ? (o.mediaPlayer = new AcPlayer({
                                hosts: {
                                    apiStatistics: "/tk-tag-manager/proxy/admiralcloud",
                                    env: "live",
                                    api: "https://api.admiralcloud.com",
                                    apiImages: "https://images.admiralcloud.com",
                                    apiLogin: "https://login.admiralcloud.com",
                                    authorizeUrl: "https://auth.admiralcloud.com/v4/authorize",
                                    loginUrl: "https://auth.admiralcloud.com/v4/login",
                                    renewUrl: "https://auth.admiralcloud.com/v4/renewToken"
                                },
                                container: o,
                                link: i,
                                podcast: s,
                                preload: a
                            }), this.application.signals.mediaInitialized.dispatch(o), this.doOnPlay(o)) : this.log("Media marked but no ID present", o)
                        } else o.setAttribute(this.mediaConfig.attrIsVisible, "false")
                    }
                } else this.log("initMediaContainers called but Videos are not enabled or ACPlayer does not exist", window.AcPlayer)
            }
        }, {
            key: "doOnPlay",
            value: function(t) {
                var e = this,
                    n = t.mediaPlayer.api();
                n.ready((function() {
                    n.onPlay((function() {
                        for (var n = document.querySelectorAll("[" + e.mediaConfig.attrName + "]"), o = 0; o < n.length; o++) {
                            var i = n[o];
                            if (t !== i) {
                                var r = i.mediaPlayer.api();
                                r && r.pause()
                            }
                        }
                    }))
                }))
            }
        }]) && a(e.prototype, n), o && a(e, o), c
    }(o.Base);
    e.Mediaplayer = f
}, function(t, e, n) {
    "use strict";
    n(4), n(5), n(6), n(16), n(42), n(0), n(8), n(1), n(40), n(9), n(26), n(2), n(3), n(44), n(7), Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.SessionTimeout = void 0;
    var o, i = n(11),
        r = n(22),
        a = (o = n(14)) && o.__esModule ? o : {
            default: o
        };

    function s(t) {
        return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function l(t, e) {
        for (var n = 0; n < e.length; n++) {
            var o = e[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
        }
    }

    function c(t, e) {
        return (c = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    function u(t) {
        var e = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
            } catch (t) {
                return !1
            }
        }();
        return function() {
            var n, o = h(t);
            if (e) {
                var i = h(this).constructor;
                n = Reflect.construct(o, arguments, i)
            } else n = o.apply(this, arguments);
            return f(this, n)
        }
    }

    function f(t, e) {
        return !e || "object" !== s(e) && "function" != typeof e ? function(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function h(t) {
        return (h = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }
    var d = function(t) {
        ! function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && c(t, e)
        }(h, t);
        var e, n, o, f = u(h);

        function h(t, e) {
            var n;
            return function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, h), (n = f.call(this, t, e)).options = {
                autoReloadOnSessionTimeout: !0,
                showOverlay: !0,
                timeoutSeconds: 900,
                timeoutShowSeconds: 300,
                sessionLightboxTitleText: "Ihre Eingaben werden zurückgesetzt in ",
                sessionLightboxLoggedInTitleText: "Sie werden ausgeloggt in ",
                sessionLightboxTitleMinutes: " Minuten",
                sessionLightboxContentTextLoggedIn: "Sie haben länger keine Aktion auf der Website durchgeführt. Zu ihrer Sicherheit werden Sie in Kürze automatisch ausgeloggt.",
                sessionLightboxContentTextLoggedOut: "Sie haben länger keine Aktion durchgeführt. Zu Ihrer Sicherheit werden die von Ihnen eingegebenen Daten in Kürze gelöscht.",
                sessionLightboxButton_Logout: "Logout",
                sessionLightboxButton_KeepMeLoggedIn: "Eingeloggt bleiben",
                sessionLightboxButton_DeleteData: "Meine Eingaben löschen",
                sessionLightboxButton_RenewSession: "Eingabe fortsetzen"
            }, n.debug = !1, n.cookiesEnabled = !0, n.timeoutTimestamp = null, n.sessionAlertLightbox = null, n.interval = null, n.runTicks = !0, n.buffer = 4e3, n.intervalDuration = 5e3, n.isloggedIn = n.isUserLoggedIn(), n.tickTimeout = null, n
        }
        return e = h, (n = [{
            key: "initialize",
            value: function(t) {
                this.initOptions(t), this.initSessionAlertLightbox(), this.resetTimeoutTimestamp(), this.tickTimeout = window.setTimeout(a.default.proxy(this, "executeTick"), this.intervalDuration)
            }
        }, {
            key: "initOptions",
            value: function(t) {
                var e = t || {};
                a.default.extend(this.options, e)
            }
        }, {
            key: "isSessionRenewed",
            value: function() {
                var t = this.getSyncedTimeoutTimestamp();
                return this.log("cookieTimestamp", t, s(t)), this.log("Current Instance Timestamp", this.timeoutTimestamp), this.log("Difference", t - this.timeoutTimestamp), this.log("Session renewed?", t > this.timeoutTimestamp + this.buffer), t > this.timeoutTimestamp + this.buffer
            }
        }, {
            key: "isUserLoggedIn",
            value: function() {
                return document.getElementsByClassName("is-loggedin").length > 0
            }
        }, {
            key: "updateInstanceTimestamp",
            value: function() {
                this.log("updateInstanceTimestamp");
                var t = this.getSyncedTimeoutTimestamp();
                this.log("Updating Instance Timestamp with Cookie Timestamp", this.timeoutTimestamp, t), this.timeoutTimestamp = t
            }
        }, {
            key: "getSyncedTimeoutTimestamp",
            value: function() {
                return this.log("getSyncedTimeoutTimestamp"), this.cookiesEnabled && (0, r.getCookie)("sessionTimeoutTimestamp") || this.timeoutTimestamp
            }
        }, {
            key: "getSyncedLoginStatus",
            value: function() {
                this.log("getSyncedLoginStatus");
                var t = (0, r.getCookie)("sessionTimeoutStatus");
                return this.log("Login Status im Cookie", t), t
            }
        }, {
            key: "_getPageLoggedInState",
            value: function() {
                return this.isUserLoggedIn() ? "1" : "0"
            }
        }, {
            key: "isLoginStatusChanged",
            value: function() {
                if (this.log("isLoginStatusChanged"), !(0, r.getCookie)("sessionTimeoutStatus")) return (0, r.setCookie)("sessionTimeoutStatus", this._getPageLoggedInState() + "|" + this.timeoutTimestamp), !1;
                var t = this._getPageLoggedInState(),
                    e = this.getSyncedLoginStatus();
                if (-1 === e.indexOf("|")) return !1;
                var n = e.substr(0, e.indexOf("|")),
                    o = parseInt(e.substr(e.indexOf("|") + 1));
                return this.log("Login Instance", t, s(t)), this.log("Login Sync Status", n, s(n)), !(t === n || !isNaN(o) && o <= this.timeoutTimestamp)
            }
        }, {
            key: "isTimeout",
            value: function() {
                return this.log("isTimeout"), 0 >= this.getRemainingSeconds()
            }
        }, {
            key: "getRemainingSeconds",
            value: function() {
                return this.getSeconds(this.timeoutTimestamp)
            }
        }, {
            key: "performReload",
            value: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    e = this;
                this.options.showOverlay = !1, this.runTicks = !1;
                var n = window.location.href;
                n.indexOf("#") > 0 && (n = n.substr(0, n.indexOf("#"))), n = (n = n.replace(/(?:print|light)style=true/gi, "")).replace(/cid=[0-9]+/gi, ""), t && window.sessionStorage.setItem("sessionTimedOut", Date.now());
                var o = new Promise((function(t, n) {
                    if ("1" === e._getPageLoggedInState()) {
                        var o = document.getElementsByName("SecretToken"),
                            i = void 0 === o || 0 === o.length ? "" : o[0].defaultValue;
                        a.default.post({
                            url: "/service/logout",
                            cache: !1,
                            data: {
                                SecretToken: i
                            },
                            complete: function(e, n) {
                                t()
                            }
                        })
                    } else t()
                }));
                o.then((function() {
                    window.location.href = n
                }))
            }
        }, {
            key: "executeTick",
            value: function() {
                var t = this.options.showOverlay,
                    e = this.options.autoReloadOnSessionTimeout;
                if (null !== this.sessionAlertLightbox) {
                    if ("function" == typeof window.JSFExtendConversationRemoteCommand || this.isloggedIn)
                        if (t && this.getRemainingSeconds() <= this.options.timeoutShowSeconds && (this.intervalDuration = 1e3), this.cookiesEnabled) {
                            if (this.isLoginStatusChanged() && (this.runTicks = !1, this.performReload()), this.isSessionRenewed() && (this.resetTimeoutTimestamp(), "function" == typeof window.JSFExtendConversationRemoteCommand && (this.log("execute JSFExtendConversationRemoteCommand"), window.JSFExtendConversationRemoteCommand())), this.isTimeout() && (this.runTicks = !1, this.log("Session abgelaufen", this.getRemainingSeconds(), this._getPageLoggedInState()), this.application && this.application.analytics && this.application.analytics.trackAction("session abgelaufen"), e && this.performReload("1" === this._getPageLoggedInState())), t && !this.sessionAlertLightbox.statusOpen && this.getRemainingSeconds() <= this.options.timeoutShowSeconds ? (this.application && this.application.analytics && this.application.analytics.trackAction("session timeout-layer"), this.sessionAlertLightbox.statusOpen = !0, this.sessionAlertLightbox.open()) : this.sessionAlertLightbox.statusOpen && this.getRemainingSeconds() > this.options.timeoutShowSeconds && (this.sessionAlertLightbox.statusOpen = !1, this.sessionAlertLightbox.close()), this.sessionAlertLightbox.statusOpen) {
                                var n = this.sessionAlertLightbox.lightbox.getInstance().$refs;
                                void 0 !== n && void 0 !== n.container && n.container.find("span.countdown time").html(this.formatSeconds(this.getRemainingSeconds()) + this.options.sessionLightboxTitleMinutes)
                            }
                        } else this.isTimeout() && this.performReload();
                    this.runTicks && (this.tickTimeout = window.setTimeout(a.default.proxy(this, "executeTick"), this.intervalDuration))
                }
            }
        }, {
            key: "resetTimeoutTimestamp",
            value: function() {
                this.timeoutTimestamp = Date.now() + 1e3 * (this.options.timeoutSeconds + 1), this.intervalDuration = 5e3, this.runTicks = !0, this.cookiesEnabled && ((0, r.setCookie)("sessionTimeoutTimestamp", this.timeoutTimestamp), (0, r.setCookie)("sessionTimeoutStatus", this._getPageLoggedInState() + "|" + this.timeoutTimestamp)), this.log("timeoutTimestamp", this.timeoutTimestamp), this.log("sessionTimeoutStatus", this._getPageLoggedInState())
            }
        }, {
            key: "initSessionAlertLightbox",
            value: function() {
                var t = this,
                    e = '<span class="countdown"><time>' + this.formatSeconds(this.getRemainingSeconds()) + this.options.sessionLightboxTitleMinutes + "</time></span>",
                    n = this.options.sessionLightboxContentTextLoggedOut,
                    o = this.options.sessionLightboxButton_DeleteData,
                    r = this.options.sessionLightboxButton_RenewSession,
                    s = this.options.sessionLightboxTitleText;
                this.isloggedIn && (n = this.options.sessionLightboxContentTextLoggedIn, o = this.options.sessionLightboxButton_Logout, r = this.options.sessionLightboxButton_KeepMeLoggedIn, s = this.options.sessionLightboxLoggedInTitleText), this.application.signals.requestLightboxOpen.dispatch({
                    self: this,
                    showHeader: !1,
                    borderless: !1,
                    infobar: !1,
                    toolbar: !1,
                    smallBtn: !1,
                    confirm: !0,
                    baseTpl: '<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-stage"></div><div class="fancybox-caption"><div class="fancybox-caption__body"></div></div></div></div>',
                    confirmCancelBtnTxt: o,
                    confirmOKBtnTxt: r,
                    confirmCallback: function(e) {
                        e ? (t.application && t.application.analytics && t.application.analytics.trackAction("session verlaengert"), t.cookiesEnabled && "function" == typeof window.JSFExtendConversationRemoteCommand ? window.JSFExtendConversationRemoteCommand() : a.default.ajax({
                            cache: !1,
                            method: "HEAD"
                        })) : t.performReload(), t.sessionAlertLightbox.statusOpen && (t.sessionAlertLightbox.statusOpen = !1, t.sessionAlertLightbox.close()), t.resetTimeoutTimestamp()
                    },
                    type: "inline",
                    src: '<div class="html-wrapper"><h2 class="e-headline e-headline--h1">' + s + e + "</h2><p>" + n + "</p></div>"
                });
                var l = (0, a.default)(".g-footer__lightbox");
                l.length > 0 && i.Component.getInstance(this.application, l).then((function(e) {
                    t.sessionAlertLightbox = e
                }))
            }
        }, {
            key: "getSeconds",
            value: function(t) {
                return parseInt((t - Date.now()) / 1e3)
            }
        }, {
            key: "formatSeconds",
            value: function(t) {
                var e = parseInt(t / 60);
                return e < 0 && (e = 0), (t %= 60) < 0 && (t = 0), t <= 9 && (t = "0" + t), e + ":" + t
            }
        }, {
            key: "destroy",
            value: function() {
                window.clearTimeout(this.tickTimeout)
            }
        }]) && l(e.prototype, n), o && l(e, o), h
    }(i.Component);
    e.SessionTimeout = d
}, , function(t, e, n) {
    "use strict";
    n(4), n(5), n(6), n(59), n(23), n(348), n(51), n(158), n(0), n(151), n(108), n(350), n(8), n(152), n(1), n(9), n(234), n(26), n(2), n(159), n(3), n(44), n(72), n(156), n(55), n(7), Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.WebAnalytics = void 0;
    var o, i = (o = n(14)) && o.__esModule ? o : {
            default: o
        },
        r = n(41),
        a = n(22);

    function s(t) {
        return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function l(t, e) {
        for (var n = 0; n < e.length; n++) {
            var o = e[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
        }
    }

    function c(t, e) {
        return (c = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    function u(t) {
        var e = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
            } catch (t) {
                return !1
            }
        }();
        return function() {
            var n, o = h(t);
            if (e) {
                var i = h(this).constructor;
                n = Reflect.construct(o, arguments, i)
            } else n = o.apply(this, arguments);
            return f(this, n)
        }
    }

    function f(t, e) {
        return !e || "object" !== s(e) && "function" != typeof e ? function(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function h(t) {
        return (h = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }
    var d = function(t) {
        ! function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && c(t, e)
        }(f, t);
        var e, n, o, r = u(f);

        function f(t) {
            var e;
            return function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, f), (e = r.call(this)).log("constructor"), e.enabled = !0, e.application = t, e.tagManagementConfig = {
                enabled: !0,
                providerObjectName: "utag",
                dataLayerObjectName: "data"
            }, e.TKactionTracking = {
                enabled: !0,
                attrName: "data-tk-trackaction"
            }, e.TKteaserTracking = {
                enabled: !1,
                viewTrackingEnabled: !1,
                attrName: "data-tk-teaser",
                attrViewTracking: "data-tk-teaser-viewtracking",
                attrContent: "data-tk-teaser-content",
                attrPersonalized: "data-tk-teaser-pers",
                attrRules: "data-tk-teaser-rules",
                attrContext: "data-tk-teaser-context",
                variantPathSeparator: " ",
                noTitleOrContentFallbackString: "kein title-Attribut und kein Inhalt gepflegt",
                notDefinedFallbackString: "nicht definiert",
                debounceMutationObserverInMilliSeconds: 1e3
            }, e.TKerrorTracking = {
                enabled: !0,
                attrName: "data-tk-errorcode"
            }, e.TKdataAttrParsing = {
                enabled: !1,
                attrName: "data-tk-analytic"
            }, e.TKmediaTracking = {
                enabled: !0,
                maxInitRetries: 10,
                attrName: "mi24-video-player"
            }, e.TKcontentScrollDepthTracking = {
                enabled: !1,
                forDocTypes: ["CMVideo", "CMArticle", "TkFaqArticle"]
            }, e.data = {
                seite: {
                    anzeigevariante: "",
                    cmsDocType: "",
                    cmsInhaltstyp: "",
                    cockpitInformationstraeger: "",
                    cockpitTransportmittel: "",
                    contentId: "",
                    contentName: "",
                    crmThema: "",
                    endgeraeteversion: "",
                    fehler: [],
                    filter: [],
                    httpStatus: "",
                    inhaltsName: "",
                    inhaltsTyp: "",
                    lArt: "",
                    lStatus: "",
                    mobil: !1,
                    navigationsPfad: [],
                    portal: "",
                    redirectUrlPath: "",
                    region: "",
                    seitenEigenschaften: [],
                    seitenId: "",
                    seitenname: "",
                    seitenVariante: "",
                    sicherheitsebene: "",
                    stellenreferenzcode: "",
                    suchbegriff: "",
                    suchbegriffRedirect: "",
                    suchergebnis: "",
                    suchergebnisRedirect: "",
                    testkampagne: "",
                    urlPath: "",
                    webcode: ""
                },
                form: {
                    abschluss: !1,
                    abschnitt: "",
                    fehler: [],
                    name: "",
                    start: !1
                },
                app: {
                    abschluss: !1,
                    abschnitt: "",
                    start: !1
                },
                bestellung: {
                    bestellmenge: [],
                    bestellnummer: "",
                    bestellwert: "",
                    produkte: [],
                    produktKategorien: [],
                    produktKosten: [],
                    status: ""
                },
                kampagne: {
                    aktion: "",
                    clickid: "",
                    id: "",
                    referrerKeyword: ""
                },
                webseitenziel: {
                    ereceinstieg: "",
                    erecregistrierung: "",
                    erecbewerbung: "",
                    interessent: "",
                    meinetk: "",
                    vermittlung: ""
                },
                medien: {
                    aktion: "",
                    dauer: "",
                    id: "",
                    position: ""
                },
                session: {
                    cId: "",
                    mTKt: "",
                    mTKd: []
                }
            }, e.contexts = [], e
        }
        return e = f, o = [{
            key: "className",
            get: function() {
                return "base.global/WebAnalytics"
            }
        }], (n = [{
            key: "init",
            value: function(t) {
                this.log("configure"), this.opts = t || {}, this.enabled = void 0 === this.opts.enabled || this.opts.enabled, this.tagManagementConfig.enabled = void 0 === this.opts.tagManagementEnabled || this.opts.tagManagementEnabled, this.opts.trackingModules = this.opts.trackingModules || {}, this.opts.trackingModules.TKactionTracking && void 0 !== this.opts.trackingModules.TKactionTracking.enabled && (this.TKactionTracking.enabled = this.opts.trackingModules.TKactionTracking.enabled), this.opts.trackingModules.TKteaserTracking && void 0 !== this.opts.trackingModules.TKteaserTracking.enabled && (this.TKteaserTracking.enabled = this.opts.trackingModules.TKteaserTracking.enabled, this.TKteaserTracking.viewTrackingEnabled = this.opts.trackingModules.TKteaserTracking.viewTrackingEnabled || !1), this.opts.trackingModules.TKdataAttrParsing && void 0 !== this.opts.trackingModules.TKdataAttrParsing.enabled && (this.TKdataAttrParsing.enabled = this.opts.trackingModules.TKdataAttrParsing.enabled), this.opts.trackingModules.TKerrorTracking && void 0 !== this.opts.trackingModules.TKerrorTracking.enabled && (this.TKerrorTracking.enabled = this.opts.trackingModules.TKerrorTracking.enabled), this.opts.trackingModules.TKmediaTracking && void 0 !== this.opts.trackingModules.TKmediaTracking.enabled && (this.TKmediaTracking.enabled = this.opts.trackingModules.TKmediaTracking.enabled), this.opts.trackingModules.TKcontentScrollDepthTracking && void 0 !== this.opts.trackingModules.TKcontentScrollDepthTracking.enabled && (this.TKcontentScrollDepthTracking.enabled = this.opts.trackingModules.TKcontentScrollDepthTracking.enabled), this._setupOptOutListener(), !1 === this.enabled ? this.log("Webanalytics deaktiviert. Es erfolgt kein Tracking.") : (this._setupBodyEventListeners(), !0 === this.TKactionTracking.enabled && this.enableActionTracking((0, i.default)("body")), !0 === this.TKdataAttrParsing.enabled && this.parseMarkupForAnalyticAttibutes((0, i.default)("body")), !0 === this.TKerrorTracking.enabled && this.enableErrorCodeTracking((0, i.default)("body")), !0 === this.TKmediaTracking.enabled && this.application.signals.mediaInitialized.add(this._enableMediaTrackingOnMedia.bind(this)), !0 === this.TKteaserTracking.enabled && (this.initTeaserTracking(), this.setupTeaserTrackingMutationObserver()), this._processOverrideValueObject(), !0 === this.tagManagementConfig.enabled && this._setupTagManagement())
            }
        }, {
            key: "isTrackingEnabled",
            value: function() {
                return this.log("isTrackingEnabled"), this.enabled
            }
        }, {
            key: "isTagManagementEnabled",
            value: function() {
                return this.log("isTagManagementEnabled"), !0 === this.tagManagementConfig.enabled && window[this.tagManagementConfig.providerObjectName] ? (this.tagManagementProvider = window[this.tagManagementConfig.providerObjectName], !0) : (this.tagManagementProvider = null, !1)
            }
        }, {
            key: "_setupTagManagement",
            value: function() {
                var t = this;
                this.log("_setupTagManagement"), this.isTagManagementEnabled() ? (this.tagManagementDataLayer = this.tagManagementProvider[this.tagManagementConfig.dataLayerObjectName], this.tagManagementDataLayer ? this._syncDataLayerWithTagMngmt() : (this.log("TagManagementDataLayer konnte nicht initialisiert werden.", this.tagManagementConfig), this.tagManagementConfig.enabled = !1)) : (this.log("TagManagementProvider konnte nicht initialisiert werden. Setze Callback fuer TagManagementProvider zum re-initialisieren", this.tagManagementConfig), window.tkTagManagementProviderInitCallback = function() {
                    t._setupTagManagement()
                })
            }
        }, {
            key: "_syncDataLayerWithTagMngmt",
            value: function() {
                this.tagManagementDataLayer ? this.tagManagementDataLayer.tk = this.tagManagementDataLayer.tk || this.data : this.log("TagManagementDataLayer nicht gefunden!")
            }
        }, {
            key: "_setupBodyEventListeners",
            value: function() {
                this.log("_setupBodyEventListeners"), (0, i.default)("body").on({
                    trackAction: function(t, e) {
                        this.trackAction(e)
                    },
                    trackPageView: function(t) {
                        this.trackPageView()
                    },
                    setAnalyticValue: function(t, e, n, o) {
                        this.set(e, n, o)
                    },
                    webAnalyticOptOut: function(t) {
                        this.optOut()
                    }
                })
            }
        }, {
            key: "_setupOptOutListener",
            value: function() {
                var t = this;
                this.log("_setupOptOutListener"), window.addEventListener("hashchange", (function(e) {
                    var n = /optout=([a-zA-Z]+)/gi.exec(location.hash),
                        o = !!/displaySuccess/gi.exec(location.hash);
                    n && n[1] ? (e.preventDefault(), t._processOptOutByHash(n[1], o)) : t.log("Did not find any OptOut provider. Here is the regex result:", n)
                }))
            }
        }, {
            key: "_processOptOutByHash",
            value: function(t, e) {
                switch (this.log("_processOptOut"), this.log("Opting out for ", t), t) {
                    case "webtrekk":
                        this.optOut();
                        break;
                    case "tkp":
                        this.optOutTkP13N();
                        break;
                    case "ps":
                        this.optOutProfilstatus()
                }
                if (e) {
                    var n = document.querySelector("[href*='optout=" + t + "']");
                    n && (n.textContent = "Sie haben der Datenspeicherung widersprochen.")
                }
            }
        }, {
            key: "enableActionTracking",
            value: function(t) {
                var e = this;
                e.log("enableActionTracking"), this.log("Setze Event Listener für Action Tracking auf ", t), t && (0, i.default)(t).on("mousedown", "*[" + this.TKactionTracking.attrName + "]", (function(t) {
                    var n = (0, i.default)(this).attr(e.TKactionTracking.attrName).replace(new RegExp("[\n\r\t]", "g"), "").trim();
                    e.log("Action Tracking Klick erkannt", t.target, n), e.trackAction(n)
                }))
            }
        }, {
            key: "initTeaserTracking",
            value: function() {
                var t = this;
                !0 === this.TKteaserTracking.enabled ? (t.log("initializing TeaserTracking"), (0, i.default)("[" + t.TKteaserTracking.attrName + '=""]').each((function(e, n) {
                    t.initTeaserTrackingOnElement((0, i.default)(n))
                }))) : t.log("initTeaserTracking called but TeaserTracking is not enabled")
            }
        }, {
            key: "setupTeaserTrackingMutationObserver",
            value: function() {
                var t = this,
                    e = (0, a.debounce)((function(e) {
                        t.log("teaser tracking mutation observer detected a mutation"), t.rescanTeaser()
                    }), t.TKteaserTracking.debounceMutationObserverInMilliSeconds);
                t.log("setting up teaser tracking mutation observer");
                var n = document.querySelector("#tkde-maincontent");
                n && new MutationObserver(e).observe(n, {
                    childList: !0,
                    subtree: !0
                })
            }
        }, {
            key: "initTeaserTrackingOnElement",
            value: function(t) {
                var e, n, o = this;
                if (t.length > 0 && !0 === this.TKteaserTracking.enabled) {
                    window.wt_ttv2 = window.wt_ttv2 || [];
                    var r = t[0],
                        a = function(t) {
                            var e = t.attr("data-tk-teaser-name");
                            return e && e.trim().length > 0 || (e = t.attr("title")) && e.trim().length > 0 ? e.trim() : (e = t[0].textContent.replace(/[\s]{2,}/g, " ").trim()).length > 0 ? e : o.TKteaserTracking.noTitleOrContentFallbackString
                        }(t),
                        s = (n = (e = t).parents("[data-tk-teaser-entity]").map((function() {
                            return (0, i.default)(this).attr("data-tk-teaser-entity")
                        })).get().reverse(), !!e.attr("data-tk-teaser-entity") && n.push(e.attr("data-tk-teaser-entity")), n.join(o.TKteaserTracking.variantPathSeparator)),
                        l = function(t) {
                            var e = t.closest("[data-tk-teaser-rank]");
                            return e.length > 0 ? e.attr("data-tk-teaser-rank") : "rank not found"
                        }(t),
                        c = function(t) {
                            var e = t.attr(o.TKteaserTracking.attrContent);
                            return e && e.trim().length > 0 ? e.trim() : o.TKteaserTracking.notDefinedFallbackString
                        }(t),
                        u = function(t) {
                            var e = t.closest("[" + o.TKteaserTracking.attrPersonalized + "]");
                            return e.length > 0 ? e.attr(o.TKteaserTracking.attrPersonalized) : ""
                        }(t),
                        f = function(t) {
                            var e = t.closest("[" + o.TKteaserTracking.attrRules + "]");
                            return e.length > 0 ? e.attr(o.TKteaserTracking.attrRules) : ""
                        }(t),
                        h = function(t) {
                            var e = t.closest("[" + o.TKteaserTracking.attrContext + "]");
                            return e.length > 0 ? e.attr(o.TKteaserTracking.attrContext) : ""
                        }(t),
                        d = this.TKteaserTracking.viewTrackingEnabled && function(t) {
                            return "data-tk-teaser-viewtracking" in t[0].attributes && ("parent" === t.attr("data-tk-teaser-viewtracking") ? "true" === t.parents("[data-tk-teaser-viewtracking]").first().attr("data-tk-teaser-viewtracking") : "self" === t.attr("data-tk-teaser-viewtracking"))
                        }(t),
                        p = {
                            selector: r,
                            data: {
                                name: a,
                                variant: s,
                                rank: l,
                                content: c,
                                type: u,
                                rule: f,
                                context: h,
                                seen: !d
                            },
                            conversion: {
                                type: "click",
                                goal: "both"
                            }
                        };
                    window.wt_ttv2.push(p), r.removeAttribute(o.TKteaserTracking.attrName), this.log("Pushed teaser to Webtrekk: %o with view-tracking enabled: %s", p, d)
                } else o.log("initTeaserTrackingOnElement called but TeaserTracking is not enabled")
            }
        }, {
            key: "rescanTeaser",
            value: function() {
                this.log("rescanTeaser"), this.initTeaserTracking()
            }
        }, {
            key: "initContentScrollDepthTracking",
            value: function() {
                var t = this;
                try {
                    var e = this.get("seite", "cmsDocType");
                    if (this.log("initContentScrollDepthTracking for cmsDocType?", e), this.TKcontentScrollDepthTracking.forDocTypes.includes(e))
                        if (window.IntersectionObserver) {
                            this.log("initContentScrollDepthTracking / initialize IntersectionObserver for currentCmsDocType ", e);
                            var n = document.querySelectorAll("[data-tk-content-scroll-depth-tracking=".concat(e, "]")),
                                o = new IntersectionObserver((function(e, n) {
                                    e.forEach((function(e) {
                                        if (e.isIntersecting) {
                                            t.log("initContentScrollDepthTracking: content scroll depth reached for element ", e.target);
                                            var o = e.target.getAttribute("data-tk-content-scroll-depth-tracking");
                                            n.unobserve(e.target), tk.webAnalytics.trackAction("content view complete: " + o)
                                        }
                                    }))
                                }), {
                                    threshold: 1
                                });
                            n.forEach((function(t) {
                                return o.observe(t)
                            }))
                        } else this.log("initContentScrollDepthTracking / IntersectionObserver not supported by client")
                } catch (t) {
                    this.log("initContentScrollDepthTracking / caught exception: ", t)
                }
            }
        }, {
            key: "parseMarkupForAnalyticAttibutes",
            value: function(t) {
                var e = this;
                e.log("parseMarkupForAnalyticAttibutes"), this.log("Suche nach Webanalytic Elementen unter DOM Node", t), (0, i.default)("*[" + this.TKdataAttrParsing.attrName + "]", t).each((function(t, n) {
                    var o = (0, i.default)(n).attr(e.TKdataAttrParsing.attrName);
                    e.log("Webtrekk Informationen im DOM erkannt:", o, n)
                }))
            }
        }, {
            key: "enableErrorCodeTracking",
            value: function(t) {
                var e = this;
                e.log("enableErrorCodeTracking"), this.log("Suche nach Fehler Meldungen unter DOM Node", t);
                var n = [];
                (0, i.default)("*[" + this.TKerrorTracking.attrName + "]", t).each((function(t, o) {
                    var r = (0, i.default)(o).attr(e.TKerrorTracking.attrName);
                    e.log("Error Code im DOM erkannt:", r, o), n[t] = r
                })), n.length > 0 && (this.set("seite", "fehler", n), this.set("form", "fehler", n))
            }
        }, {
            key: "_enableMediaTrackingOnMedia",
            value: function(t) {
                var e = this;
                if (e.log("_enableMediaTrackingOnMedia"), e.log("Media Container", t), e.isTrackingEnabled() && t) {
                    var n = t.mediaPlayer,
                        o = t.mediaPlayer.api();
                    e.log("Video/Audio API", o), o.ready((function() {
                        var i = n.data.link;
                        try {
                            i = o.acPlayer.data.metadata[0].content
                        } catch (t) {}
                        e.log("Media Title:", i);
                        var r, a = t.getAttribute("data-tk-media-type"),
                            s = "mg1=" + a;
                        e.log("Media Type:", a), o.onPlay((function() {
                            var t = Math.round(o.duration()),
                                a = Math.round(o.currentTime());
                            e.log("Play Event", n, a, t, s), void 0 !== window.wt_sendinfo_media && wt_sendinfo_media(i, "play", a, t, s),
                                function t() {
                                    var a = Math.round(o.duration()),
                                        l = Math.round(o.currentTime()),
                                        c = 1e3 * Math.round(o.duration()) / 10;
                                    l > 0 && l < a && (e.log("Pos Event", n, l, a, s), void 0 !== window.wt_sendinfo_media && wt_sendinfo_media(i, "pos", l, a, s)), l < a && (r = setTimeout(t, c))
                                }()
                        })), o.onPause((function() {
                            var t = Math.round(o.duration()),
                                a = Math.round(o.currentTime());
                            e.log("Pause Event", n, a, t, s), clearTimeout(r), void 0 !== window.wt_sendinfo_media && (t != a ? wt_sendinfo_media(i, "pause", a, t, s) : wt_sendinfo_media(i, "eof", a, t, s))
                        }))
                    }))
                }
            }
        }, {
            key: "get",
            value: function(t, e) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "default";
                if ("default" != n)
                    if (this.contexts[n]) {
                        if (this.contexts[n][t] && void 0 !== this.contexts[n][t][e]) return this.contexts[n][t][e]
                    } else this.log("get(type,key,context) called for unknown context", n);
                if (this.data[t] && void 0 !== this.data[t][e]) return this.data[t][e]
            }
        }, {
            key: "set",
            value: function(t, e, n) {
                var o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "default";
                if (this.log("set", "Context: " + o), this.data[t] && void 0 !== this.data[t][e])
                    if (s(n) === s(this.data[t][e])) {
                        var i = this.data;
                        "default" != o && (void 0 === this.contexts[o] && (this.contexts[o] = {}), void 0 === (i = this.contexts[o])[t] && (i[t] = {})), i[t][e] != n && (this.log("SET:", t, e, i[t][e], "To", n, " for context ", o), i[t][e] = n, this.isTagManagementEnabled() && "default" == o && this.tagManagementDataLayer && (void 0 === this.tagManagementDataLayer.tk && this._syncDataLayerWithTagMngmt(), this.tagManagementDataLayer.tk[t][e] = n))
                    } else this.log("Datentyp passt nicht", t, e, "Erwarteter Datentyp: " + s(this.data[t][e]), "Übergebener Datentyp: " + s(n));
                else this.log("Dataset nicht gefunden", t, e)
            }
        }, {
            key: "unset",
            value: function(t, e) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "default";
                this.log("unset", t, e, n);
                var o = this.data;
                if ("default" != n) {
                    if (!this.contexts[n]) return void this.log("Context nicht gefunden", n);
                    o = this.contexts[n]
                }
                o[t] && void 0 !== o[t][e] ? "default" === n ? "string" == typeof o[t][e] ? (o[t][e] = "", this.isTagManagementEnabled() && this.tagManagementDataLayer && this.tagManagementDataLayer.tk && (this.tagManagementDataLayer.tk[t][e] = "")) : "object" === s(o[t][e]) && (o[t][e] = [], this.isTagManagementEnabled() && this.tagManagementDataLayer && this.tagManagementDataLayer.tk && (this.tagManagementDataLayer.tk[t][e] = [])) : delete o[t][e] : this.log("Dataset nicht gefunden", t, e, " in context ", n)
            }
        }, {
            key: "optOut",
            value: function() {
                this.log("optOut"), this._callProviderOptOut()
            }
        }, {
            key: "optOutTkP13N",
            value: function() {
                this.log("optOut TK-P13N"), (0, a.setCookie)("tkpOptOut", 1, 15552e4)
            }
        }, {
            key: "optOutProfilstatus",
            value: function() {
                this.log("optOut Profilstatus"), (0, a.setCookie)("tkOptOutPs", 1, 15552e4)
            }
        }, {
            key: "_processOverrideValueObject",
            value: function() {
                if (this.log("_processOverrideValueObject"), "undefined" != typeof tk) {
                    if (this.log("tk.setWebAnalyticValues", tk.setWebAnalyticValues), void 0 !== tk.setWebAnalyticValues && tk.setWebAnalyticValues.length > 0)
                        for (var t = 0; t < tk.setWebAnalyticValues.length; t++) this.log("Override", tk.setWebAnalyticValues[t].type, tk.setWebAnalyticValues[t].key, tk.setWebAnalyticValues[t].value), this.set(tk.setWebAnalyticValues[t].type, tk.setWebAnalyticValues[t].key, tk.setWebAnalyticValues[t].value);
                    if (tk.setWebAnalyticValues = [], this.log("tk.unsetWebAnalyticValues", tk.unsetWebAnalyticValues), void 0 !== tk.unsetWebAnalyticValues && tk.unsetWebAnalyticValues.length > 0)
                        for (var e = 0; e < tk.unsetWebAnalyticValues.length; e++) this.unset(tk.unsetWebAnalyticValues[e].type, tk.unsetWebAnalyticValues[e].key);
                    tk.unsetWebAnalyticValues = []
                }
            }
        }, {
            key: "_arrayToAnalyticString",
            value: function(t) {
                return t.join(";")
            }
        }, {
            key: "trackPageView",
            value: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "default";
                this.log("trackPageView with context ", t), this.isTagManagementEnabled() && (this._processOverrideValueObject(), this._callTagManagementProviderPageview(t))
            }
        }, {
            key: "trackAction",
            value: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "default";
                this.log("trackAction", t, "for context", e), this.isTrackingEnabled() && this._callProviderAction(t, e)
            }
        }, {
            key: "trackError",
            value: function(t) {
                this.log("trackError", t), this.isTrackingEnabled() && this._callProviderAction("fehler")
            }
        }, {
            key: "_callProviderOptOut",
            value: function() {
                window.wt && window.wt.setCookie("webtrekkOptOut", 1, 15552e4)
            }
        }, {
            key: "_callProviderPageview",
            value: function() {
                this.isTagManagementEnabled() && this._callTagManagementProviderPageview()
            }
        }, {
            key: "_callProviderAction",
            value: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "default";
                if (this.isTagManagementEnabled()) {
                    var n = this._collectActionTrackingParams(e, t);
                    this._isErrorActionTracking(t) ? this._executeErrorTracking(n) : this.tagManagementProvider.link(n)
                }
            }
        }, {
            key: "_collectActionTrackingParams",
            value: function(t, e) {
                return {
                    contentId: this.get("seite", "seitenname", t),
                    linkId: e
                }
            }
        }, {
            key: "_isErrorActionTracking",
            value: function(t) {
                return "fehler" === t
            }
        }, {
            key: "_executeErrorTracking",
            value: function(t) {
                var e = this._collectErrors();
                e.length > 0 ? (t.customClickParameter4 = this._arrayToAnalyticString(e), this.log("Tracking ausfuehren mit Parameter: ", t), this.tagManagementProvider.link(t)) : this.log("Fehlertracking ausgeloest, aber keine Fehler vorhanden. Nichts reporten.")
            }
        }, {
            key: "_collectErrors",
            value: function() {
                return [].concat(this.get("seite", "fehler"), this.get("form", "fehler"), this._collectErrorsFromContexts()).filter((function(t) {
                    return void 0 !== t
                }))
            }
        }, {
            key: "_transformErrorAttributeToString",
            value: function(t) {
                return t && Array.isArray(t) ? t.join(",") : t
            }
        }, {
            key: "_collectErrorsFromContexts",
            value: function() {
                if (Array.isArray(this.contexts)) {
                    var t = this.contexts,
                        e = this;
                    return Object.keys(t).map((function(n) {
                        return [t[n].seite ? "[" + n + "] " + e._transformErrorAttributeToString(t[n].seite.fehler) : void 0, t[n].form ? "[" + n + "] " + e._transformErrorAttributeToString(t[n].form.fehler) : void 0]
                    })).flat()
                }
                return []
            }
        }, {
            key: "_callTagManagementProviderPageview",
            value: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "default";
                if ("default" != t && this.contexts[t]) {
                    var e = {};
                    i.default.extend(!0, e, this.tagManagementDataLayer, {
                        tk: this.contexts[t]
                    }), this.tagManagementProvider.view(e)
                } else this.tagManagementProvider.view(this.tagManagementDataLayer)
            }
        }]) && l(e.prototype, n), o && l(e, o), f
    }(r.Base);
    e.WebAnalytics = d
}, , , function(t, e, n) {
    "use strict";
    n(4), n(5), n(6), n(59), n(0), n(8), n(1), n(9), n(26), n(2), n(3), n(148), n(44), n(7), Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var o = n(41);

    function i(t) {
        return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function r(t, e) {
        for (var n = 0; n < e.length; n++) {
            var o = e[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
        }
    }

    function a(t, e) {
        return (a = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    function s(t) {
        var e = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
            } catch (t) {
                return !1
            }
        }();
        return function() {
            var n, o = u(t);
            if (e) {
                var i = u(this).constructor;
                n = Reflect.construct(o, arguments, i)
            } else n = o.apply(this, arguments);
            return l(this, n)
        }
    }

    function l(t, e) {
        return !e || "object" !== i(e) && "function" != typeof e ? c(t) : e
    }

    function c(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }

    function u(t) {
        return (u = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }
    var f = {
            "tkde.modul.navigation.postfach.a11y.without_unread_messages": "Keine ungelesenen Nachrichten.",
            "tkde.modul.navigation.postfach.a11y.with_unread_messages": "{0} ungelesene Nachricht(en)."
        },
        h = /{([\d]+)}/g,
        d = function(t) {
            return (t.match(h) || []).length
        },
        p = function(t) {
            for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), o = 1; o < e; o++) n[o - 1] = arguments[o];
            return t.replace(h, (function(t, e) {
                return n[e]
            }))
        },
        y = function(t) {
            ! function(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && a(t, e)
            }(l, t);
            var e, n, o, i = s(l);

            function l() {
                var t;
                return function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, l), (t = i.call(this)).getMessage = t.getMessage.bind(c(t)), t.getFormattedMessage = t.getFormattedMessage.bind(c(t)), t
            }
            return e = l, (n = [{
                key: "getMessage",
                value: function(t) {
                    var e = f[t] || "";
                    return e || this.logWarn({
                        msg: "Could not lookup message for key ".concat(t),
                        stacktrace: ""
                    }), e
                }
            }, {
                key: "getFormattedMessage",
                value: function(t) {
                    var e = f[t];
                    if (!e) return this.logWarn({
                        msg: "Could not lookup message for key ".concat(t),
                        stacktrace: ""
                    }), "";
                    for (var n = d(e), o = arguments.length, i = new Array(o > 1 ? o - 1 : 0), r = 1; r < o; r++) i[r - 1] = arguments[r];
                    return n > i.length ? (this.logWarn({
                        msg: "Message for key ".concat(t, " required ").concat(n, " for interpolation. Only ").concat(i.length, " were given."),
                        stacktrace: ""
                    }), "") : (n < i.length && this.logWarn({
                        msg: "Too many (".concat(i.length, ") Variables given for message with key ").concat(t, ". \n        Only ").concat(n, " are required."),
                        stacktrace: ""
                    }), p(e, i))
                }
            }]) && r(e.prototype, n), o && r(e, o), l
        }(o.Base);
    e.default = y
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(t, e, n) {
    "use strict";
    n(4), n(5), n(6), n(23), n(16), n(42), n(0), n(12), n(8), n(1), n(9), n(2), n(3), n(7), Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.Component = void 0;
    var o, i = n(11),
        r = n(13),
        a = n(43),
        s = n(31),
        l = (o = n(14)) && o.__esModule ? o : {
            default: o
        };

    function c(t) {
        return (c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function u() {
        return (u = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
            }
            return t
        }).apply(this, arguments)
    }

    function f(t, e) {
        for (var n = 0; n < e.length; n++) {
            var o = e[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
        }
    }

    function h(t, e) {
        return (h = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    function d(t) {
        var e = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
            } catch (t) {
                return !1
            }
        }();
        return function() {
            var n, o = y(t);
            if (e) {
                var i = y(this).constructor;
                n = Reflect.construct(o, arguments, i)
            } else n = o.apply(this, arguments);
            return p(this, n)
        }
    }

    function p(t, e) {
        return !e || "object" !== c(e) && "function" != typeof e ? function(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function y(t) {
        return (y = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }
    var g = function(t) {
        ! function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && h(t, e)
        }(c, t);
        var e, n, o, i = d(c);

        function c(t, e) {
            var n;
            return function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, c), (n = i.call(this, t, e)).classes = {
                optionsText: ".e-link__title"
            }, n.animationDuration = 300, u(n.selectors, {
                $button: ".js-e-dropdown__button",
                $combobox: ".e-dropdown__combobox",
                $buttonText: ".js-e-dropdown__button .e-cta__text",
                $options: ".e-dropdown__list .m-verteilerliste__link",
                $optionsLink: ".e-link",
                $optionsText: ".e-link__title",
                $close: ".js-e-dropdown__close",
                $modal: ".e-dropdown__select",
                $overlay: ".e-dropdown__overlay"
            }), u(n.bindings, {
                handleButtonClick: "click:$button",
                handleKeyUp: "keyup:$root",
                handleKeyDown: "keydown:$root",
                handleFocusInModule: "focusin:$root",
                handleCloseClick: "click:$close",
                handleModalClick: "click:$modal",
                handleOverlayClick: "click:$overlay"
            }), n
        }
        return e = c, o = [{
            key: "className",
            get: function() {
                return "base.elements.e-dropdown/Component"
            }
        }], (n = [{
            key: "prepare",
            value: function() {
                this.application.signals.closeDropdowns.add(this.closeDropdowns.bind(this)), this.application.viewport.signals.breakpointChanged.add(this.handleBreakpointChange.bind(this))
            }
        }, {
            key: "handleBreakpointChange",
            value: function() {
                !1 === this.isExpandedBreakpoint() && this.$elements.modal.css("display", "")
            }
        }, {
            key: "handleButtonClick",
            value: function(t) {
                this.toggleDropdown(t)
            }
        }, {
            key: "toggleDropdown",
            value: function(t) {
                var e = this;
                this.isOpen() ? (this.handleClose(t), this.$elements.button.hasClass(r.State.KEYBOARD_FOCUS) && setTimeout((function() {
                    return e.focusOption(e.$elements.options.first())
                }), this.animationDuration)) : (this.application.signals.closeDropdowns.dispatch(), this.handleOpen(t))
            }
        }, {
            key: "handleOpen",
            value: function(t) {
                this.isOpen() || (t.stopImmediatePropagation(), this.$root.addClass(r.State.OPENED), this.$elements.combobox.attr("aria-expanded", !0), (0, l.default)("body").on("click", this.handleClose.bind(this)), this.isExpandedBreakpoint() && l.default.Velocity.animate(this.$elements.modal, "slideDown", {
                    duration: this.application.viewport.expoTweenT1Time
                }), this.isExpandedBreakpoint() || this.application.viewport.disableScrolling(), this.scrollTo())
            }
        }, {
            key: "handleClose",
            value: function(t) {
                this.isOpen() && (this.$root.removeClass(r.State.OPENED), this.$elements.combobox.attr("aria-expanded", !0), (0, l.default)("body").unbind("click"), this.isExpandedBreakpoint() && l.default.Velocity.animate(this.$elements.modal, "slideUp", {
                    duration: this.application.viewport.expoTweenT1Time
                }), this.isExpandedBreakpoint() || this.application.viewport.enableScrolling())
            }
        }, {
            key: "handleFocusInModule",
            value: function(t) {
                (0, l.default)("body").off("focusin." + this.EVENT_NAMESPACE).on("focusin." + this.EVENT_NAMESPACE, this.handleFocusOutside.bind(this))
            }
        }, {
            key: "handleFocusOutside",
            value: function(t) {
                l.default.contains(this.$root.get(0), t.target) || ((0, l.default)("body").off("focusin." + this.EVENT_NAMESPACE), this.handleClose())
            }
        }, {
            key: "handleKeyUp",
            value: function(t) {
                var e = this.$elements.options,
                    n = e.filter("." + r.State.SELECTED);
                if ([a.KeyCode.ENTER, a.KeyCode.SPACE].indexOf(t.keyCode) > -1 && (this.isOpen() ? n.length > 0 && (t.preventDefault(), this.selectOption(n)) : this.handleOpen()), [a.KeyCode.DOWN, a.KeyCode.UP].indexOf(t.keyCode) > -1) {
                    this.isOpen() || this.handleOpen();
                    var o, i = n.next(".m-verteilerliste__link"),
                        s = n.prev(".m-verteilerliste__link");
                    e.removeClass(r.State.SELECTED), t.keyCode === a.KeyCode.UP && (o = 0 === n.length ? e.filter(":last") : s), t.keyCode === a.KeyCode.DOWN && (o = 0 === n.length ? e.filter(":first") : i), 0 !== o.length && this.focusOption(o)
                }
                t.keyCode === a.KeyCode.ESC && this.handleClose()
            }
        }, {
            key: "handleKeyDown",
            value: function(t) {
                [a.KeyCode.DOWN, a.KeyCode.UP].indexOf(t.keyCode) > -1 && t.preventDefault()
            }
        }, {
            key: "handleCloseClick",
            value: function(t) {
                this.handleClose()
            }
        }, {
            key: "handleModalClick",
            value: function(t) {
                (0, l.default)(t.target).hasClass("e-dropdown__select") && this.handleClose()
            }
        }, {
            key: "handleOverlayClick",
            value: function(t) {
                this.handleClose()
            }
        }, {
            key: "isOpen",
            value: function() {
                return this.$root.hasClass(r.State.OPENED)
            }
        }, {
            key: "focusOption",
            value: function(t) {
                t.addClass(r.State.SELECTED);
                var e = t.children(this.selectors.optionsLink);
                e.length > 0 && e.first().focus()
            }
        }, {
            key: "selectOption",
            value: function(t) {
                var e = t.find(this.classes.optionsText).text();
                e && "" !== e && (this.$elements.buttonText.text(e), this.handleClose())
            }
        }, {
            key: "isExpandedBreakpoint",
            value: function() {
                var t = this.application.viewport.breakpoint;
                return t === s.Breakpoints.APPLICATION || t === s.Breakpoints.DESKTOP || t === s.Breakpoints.TABLET || t === s.Breakpoints.MINITABLET
            }
        }, {
            key: "closeDropdowns",
            value: function() {
                this.handleClose()
            }
        }, {
            key: "scrollTo",
            value: function() {
                if (this.isExpandedBreakpoint()) {
                    var t = this.$root.height() + this.$elements.modal.height(),
                        e = (0, l.default)(document).scrollTop() + window.innerHeight,
                        n = this.$root.offset().top - window.innerHeight + t + 50;
                    e < this.$root.offset().top + t && (0, l.default)("html, body").animate({
                        scrollTop: n
                    }, 500)
                }
            }
        }]) && f(e.prototype, n), o && f(e, o), c
    }(i.Component);
    e.Component = g
}, function(t, e, n) {
    "use strict";

    function o(t) {
        return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function i(t, e) {
        for (var n = 0; n < e.length; n++) {
            var o = e[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
        }
    }

    function r(t, e) {
        return (r = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    function a(t) {
        var e = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
            } catch (t) {
                return !1
            }
        }();
        return function() {
            var n, o = l(t);
            if (e) {
                var i = l(this).constructor;
                n = Reflect.construct(o, arguments, i)
            } else n = o.apply(this, arguments);
            return s(this, n)
        }
    }

    function s(t, e) {
        return !e || "object" !== o(e) && "function" != typeof e ? function(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function l(t) {
        return (l = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }
    n(4), n(5), n(6), n(23), n(0), n(8), n(1), n(9), n(26), n(2), n(3), n(60), n(7), Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.Component = void 0;
    var c = function(t) {
        ! function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && r(t, e)
        }(l, t);
        var e, n, o, s = a(l);

        function l(t, e) {
            return function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, l), s.call(this, t, e)
        }
        return e = l, o = [{
            key: "className",
            get: function() {
                return "base.elements.e-icon/Component"
            }
        }], (n = [{
            key: "prepare",
            value: function() {
                window.MSInputMethodContext && document.documentMode && (this.application.viewport.signals.breakpointChanged.add(this.handleBreakpointChange.bind(this)), this.handleBreakpointChange())
            }
        }, {
            key: "handleBreakpointChange",
            value: function() {
                var t = this.$elements.root.filter(".e-icon--iefix");
                if (t && t.length) {
                    var e = t.attr("viewBox").split(" "),
                        n = parseFloat(e[2]) / parseFloat(e[3]),
                        o = this.$elements.root.height() * n;
                    this.$elements.root.css("width", o)
                }
            }
        }]) && i(e.prototype, n), o && i(e, o), l
    }(n(11).Component);
    e.Component = c
}, function(t, e, n) {
    "use strict";
    n(4), n(5), n(6), n(16), n(42), n(0), n(342), n(12), n(8), n(1), n(9), n(2), n(3), n(7), Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.Component = void 0;
    var o, i = n(11),
        r = n(22),
        a = n(46),
        s = n(13),
        l = (o = n(14)) && o.__esModule ? o : {
            default: o
        };

    function c(t) {
        return (c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function u() {
        return (u = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
            }
            return t
        }).apply(this, arguments)
    }

    function f(t, e) {
        for (var n = 0; n < e.length; n++) {
            var o = e[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
        }
    }

    function h(t, e) {
        return (h = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    function d(t) {
        var e = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
            } catch (t) {
                return !1
            }
        }();
        return function() {
            var n, o = y(t);
            if (e) {
                var i = y(this).constructor;
                n = Reflect.construct(o, arguments, i)
            } else n = o.apply(this, arguments);
            return p(this, n)
        }
    }

    function p(t, e) {
        return !e || "object" !== c(e) && "function" != typeof e ? function(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function y(t) {
        return (y = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }
    var g = function(t) {
        ! function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && h(t, e)
        }(c, t);
        var e, n, o, i = d(c);

        function c(t, e) {
            var n;
            return function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, c), u((n = i.call(this, t, e)).selectors, {
                $iconContainer: ".js-e-like__icon",
                $countContainer: ".e-like__count",
                $counter: ".e-like__counter"
            }), u(n.bindings, {
                handleIconClick: "click:$iconContainer"
            }), window.tk = window.tk || {}, window.tk.signals = window.tk.signals || {}, window.tk.signals.like = window.tk.signals.like || new a.Signal, n.localStorageKey = "tkr", n.likeClass = "is-liked", n.showCounterClass = s.State.VISIBLE, n
        }
        return e = c, o = [{
            key: "className",
            get: function() {
                return "base.element.e-like/Component"
            }
        }], (n = [{
            key: "prepare",
            value: function() {
                this.handleLikeAnimation(this.getContentId(), this.getLikes(this.localStorageKey)), window.tk.signals.like.add(this.handleLikeAnimation.bind(this))
            }
        }, {
            key: "handleIconClick",
            value: function() {
                var t = this.getContentId();
                if ("" !== t) {
                    var e = this.$elements.iconContainer;
                    if (!e.hasClass(s.State.DISABLED)) {
                        e.addClass(s.State.DISABLED);
                        var n = this.getLikes(this.localStorageKey);
                        "" != n ? -1 != n.indexOf(t) ? (n.splice(n.indexOf(t), 1), this.persist("remove")) : (n.push(t), this.persist("add")) : ((n = [])[0] = t, this.persist("add")), (0, r.addToLocalStorage)(this.localStorageKey, n), window.tk.signals.like.dispatch(t, n, !0)
                    }
                }
            }
        }, {
            key: "handleLikeAnimation",
            value: function(t, e) {
                var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    o = this.$elements.counter[0],
                    i = this.$elements.countContainer,
                    r = this.$elements.iconContainer,
                    a = parseInt(o.innerText);
                isNaN(a) && (a = 0), "" != t && -1 != e.indexOf(t) ? (this.$root.addClass(this.likeClass), i.hasClass(this.showCounterClass) || i.addClass(this.showCounterClass), r.removeAttr("data-tk-trackaction"), n && (this.$root.addClass(s.State.SELECTED), setTimeout((function() {
                    r.removeClass(s.State.DISABLED), o.innerText++
                }), 2300))) : this.$root.hasClass(this.likeClass) && (this.$root.removeClass(this.likeClass + " " + s.State.SELECTED), a > 0 && a--, a < 1 && i.removeClass(this.showCounterClass), r.removeClass(s.State.DISABLED)), o.innerText = a
            }
        }, {
            key: "getContentId",
            value: function() {
                return this.$root.attr("data-tk-content-id")
            }
        }, {
            key: "getLikes",
            value: function(t) {
                return (0, r.getFromLocalStorage)(t)
            }
        }, {
            key: "persist",
            value: function(t) {
                var e = this.$elements.iconContainer.attr("data-href");
                l.default.ajax({
                    url: e + "/" + t,
                    cache: !1,
                    method: "POST",
                    async: !0,
                    data: {
                        _CSRFToken: this.$elements.iconContainer.find('[name="_CSRFToken"]').val()
                    }
                })
            }
        }]) && f(e.prototype, n), o && f(e, o), c
    }(i.Component);
    e.Component = g
}, function(t, e, n) {
    "use strict";

    function o(t) {
        return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function i(t, e) {
        for (var n = 0; n < e.length; n++) {
            var o = e[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
        }
    }

    function r(t, e) {
        return (r = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    function a(t) {
        var e = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
            } catch (t) {
                return !1
            }
        }();
        return function() {
            var n, o = c(t);
            if (e) {
                var i = c(this).constructor;
                n = Reflect.construct(o, arguments, i)
            } else n = o.apply(this, arguments);
            return s(this, n)
        }
    }

    function s(t, e) {
        return !e || "object" !== o(e) && "function" != typeof e ? l(t) : e
    }

    function l(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }

    function c(t) {
        return (c = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }
    n(4), n(5), n(6), n(0), n(8), n(1), n(9), n(2), n(3), n(7), Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.Component = void 0;
    var u = function(t) {
        ! function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && r(t, e)
        }(c, t);
        var e, n, o, s = a(c);

        function c(t, e) {
            var n;
            return function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, c), n = s.call(this, t, e), t.signals.setupCompleted.add(n.addLibrary.bind(l(n))), n
        }
        return e = c, o = [{
            key: "className",
            get: function() {
                return "base.elements.e-media/Component"
            }
        }], (n = [{
            key: "addLibrary",
            value: function() {}
        }]) && i(e.prototype, n), o && i(e, o), c
    }(n(11).Component);
    e.Component = u
}, function(t, e, n) {}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.ExcludeAnimation = void 0;
    var o, i = (o = n(14)) && o.__esModule ? o : {
        default: o
    };

    function r(t, e) {
        for (var n = 0; n < e.length; n++) {
            var o = e[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
        }
    }
    var a = function() {
        function t() {
            ! function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, t), this.selectors = {
                $automate: ".js-automate"
            }, this.prepare()
        }
        var e, n, o;
        return e = t, (n = [{
            key: "prepare",
            value: function() {
                this.bindListeners()
            }
        }, {
            key: "bindListeners",
            value: function() {
                (0, i.default)(this.selectors.$automate).each((function(t, e) {}))
            }
        }]) && r(e.prototype, n), o && r(e, o), t
    }();
    e.ExcludeAnimation = a, new a
}, function(t, e, n) {
    "use strict";
    document.addEventListener("DOMContentLoaded", (function(t) {
        window.onkeyup = function(t) {
            t.ctrlKey && 71 == t.keyCode && document.getElementsByClassName("u-grid-helper")[0].classList.toggle("is-hidden")
        }
    }))
}, , function(t, e, n) {
    "use strict";

    function o(t) {
        return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function i() {
        return (i = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
            }
            return t
        }).apply(this, arguments)
    }

    function r(t, e) {
        for (var n = 0; n < e.length; n++) {
            var o = e[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
        }
    }

    function a(t, e) {
        return (a = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    function s(t) {
        var e = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
            } catch (t) {
                return !1
            }
        }();
        return function() {
            var n, o = c(t);
            if (e) {
                var i = c(this).constructor;
                n = Reflect.construct(o, arguments, i)
            } else n = o.apply(this, arguments);
            return l(this, n)
        }
    }

    function l(t, e) {
        return !e || "object" !== o(e) && "function" != typeof e ? function(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function c(t) {
        return (c = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }
    n(4), n(5), n(6), n(0), n(12), n(8), n(1), n(9), n(2), n(3), n(7), Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.Component = void 0;
    var u = function(t) {
        ! function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && a(t, e)
        }(c, t);
        var e, n, o, l = s(c);

        function c(t, e) {
            var n;
            return function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, c), i((n = l.call(this, t, e)).selectors, {
                $selector: ".js-selection"
            }), i(n.bindings, {
                handleClick: "click:$selector"
            }), n
        }
        return e = c, o = [{
            key: "className",
            get: function() {
                return "base.REPLACE_WITH_TYPE.REPLACE_WITH_PATTERN_NAME/Component"
            }
        }], (n = [{
            key: "prepare",
            value: function() {}
        }, {
            key: "handleClick",
            value: function(t) {}
        }]) && r(e.prototype, n), o && r(e, o), c
    }(n(11).Component);
    e.Component = u
}, function(t, e, n) {
    "use strict";
    n(156);
    ! function(t, e) {
        window.utag = window.utag || {
            gdpr: {
                getCategories: t,
                setPreferencesValues: e
            },
            link: function() {
                return null
            },
            view: function() {
                return null
            }
        }, window.utag.gdpr = window.utag.gdpr || {
            getCategories: t,
            setPreferencesValues: e
        }, window.utag.link = window.utag.link || function() {
            return null
        }, window.utag.view = window.utag.view || function() {
            return null
        }, window.utag.gdpr.getCategories = window.utag.gdpr.getCategories || t, window.utag.gdpr.setPreferencesValues = window.utag.gdpr.setPreferencesValues || e
    }((function() {
        return ["analytics", "affiliates", "display_ads", "search", "email", "personalization", "social", "big_data", "misc", "cookiematch", "cdp", "mobile", "engagement", "monitoring", "crm"]
    }), (function(t) {
        console.log("setPreferencesValuesFn: ", t)
    }))
}, , , , , function(t, e, n) {
    "use strict";
    n(4), n(5), n(6), n(0), n(12), n(8), n(1), n(9), n(2), n(3), n(7), Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.Component = void 0;
    var o, i = n(11),
        r = (o = n(14)) && o.__esModule ? o : {
            default: o
        },
        a = n(13);

    function s(t) {
        return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function l() {
        return (l = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
            }
            return t
        }).apply(this, arguments)
    }

    function c(t, e) {
        for (var n = 0; n < e.length; n++) {
            var o = e[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
        }
    }

    function u(t, e) {
        return (u = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    function f(t) {
        var e = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
            } catch (t) {
                return !1
            }
        }();
        return function() {
            var n, o = d(t);
            if (e) {
                var i = d(this).constructor;
                n = Reflect.construct(o, arguments, i)
            } else n = o.apply(this, arguments);
            return h(this, n)
        }
    }

    function h(t, e) {
        return !e || "object" !== s(e) && "function" != typeof e ? function(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function d(t) {
        return (d = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }
    n(61);
    var p = function(t) {
        ! function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && u(t, e)
        }(s, t);
        var e, n, o, i = f(s);

        function s(t, e) {
            var n;
            return function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, s), (n = i.call(this, t, e)).SIDE_ELEMENT_SELECTOR = "blockquote", n.waypoint = window.Waypoint, l(n.selectors, {
                $sideElements: n.SIDE_ELEMENT_SELECTOR
            }), n
        }
        return e = s, o = [{
            key: "className",
            get: function() {
                return "base.module-groups.g-artikel/Component"
            }
        }], (n = [{
            key: "activate",
            value: function() {
                this.setWaypoints()
            }
        }, {
            key: "prepare",
            value: function() {
                this.application.viewport.signals.contentHeightChanged.add(this.handleHeight.bind(this))
            }
        }, {
            key: "handleHeight",
            value: function() {
                this.waypoint.refreshAll()
            }
        }, {
            key: "setWaypoints",
            value: function() {
                var t = this;
                this.$elements.sideElements.each((function(e, n) {
                    new t.waypoint({
                        element: n,
                        handler: function(t) {
                            "down" === t && (0, r.default)(this.element).addClass(a.State.VISIBLE)
                        },
                        offset: "100%"
                    })
                }))
            }
        }]) && c(e.prototype, n), o && c(e, o), s
    }(i.Component);
    e.Component = p
}, function(t, e, n) {
    "use strict";
    n(4), n(5), n(6), n(59), n(23), n(16), n(51), n(147), n(158), n(42), n(0), n(151), n(108), n(83), n(352), n(84), n(12), n(8), n(152), n(1), n(9), n(26), n(2), n(159), n(3), n(44), n(153), n(60), n(353), n(72), n(55), n(7), n(239), Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.Component = void 0;
    var o = n(11),
        i = n(22);

    function r(t) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function a(t) {
        return function(t) {
            if (Array.isArray(t)) return s(t)
        }(t) || function(t) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t)
        }(t) || function(t, e) {
            if (!t) return;
            if ("string" == typeof t) return s(t, e);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === n && t.constructor && (n = t.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(t);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return s(t, e)
        }(t) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function s(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, o = new Array(e); n < e; n++) o[n] = t[n];
        return o
    }

    function l() {
        return (l = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
            }
            return t
        }).apply(this, arguments)
    }

    function c(t, e) {
        for (var n = 0; n < e.length; n++) {
            var o = e[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
        }
    }

    function u(t, e, n) {
        return e && c(t.prototype, e), n && c(t, n), t
    }

    function f(t, e) {
        return (f = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    function h(t) {
        var e = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
            } catch (t) {
                return !1
            }
        }();
        return function() {
            var n, o = y(t);
            if (e) {
                var i = y(this).constructor;
                n = Reflect.construct(o, arguments, i)
            } else n = o.apply(this, arguments);
            return d(this, n)
        }
    }

    function d(t, e) {
        return !e || "object" !== r(e) && "function" != typeof e ? p(t) : e
    }

    function p(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }

    function y(t) {
        return (y = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }
    var g = function(t) {
        ! function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && f(t, e)
        }(n, t);
        var e = h(n);

        function n(t, o) {
            var i;
            return function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, n), l((i = e.call(this, t, o)).selectors, {
                $consentSettingCheckboxes: '.e-checkbox__input[data-optional="true"]',
                $btnConfirmSelection: ".g-consentmanager__confirm-selection",
                $btnConfirmAll: ".g-consentmanager__confirm-all",
                $btnClose: ".g-consentmanager__close",
                $toggleDetails: ".g-consentmanager__toggle-details",
                $settingItems: ".g-consentmanager__setting",
                $categoryDescriptionWrappers: ".g-consentmanager__setting-description-wrapper",
                $content: ".g-consentmanager__content"
            }), l(i.bindings, {
                handleClickConfirmSelection: "click:$btnConfirmSelection",
                handleClickConfirmAll: "click:$btnConfirmAll",
                handleClickClose: "click:$btnClose",
                handleClickToggleDetails: "click:$toggleDetails"
            }), i.handleKeyDownAndTrapTabbing = i.handleKeyDownAndTrapTabbing.bind(p(i)), i
        }
        return u(n, null, [{
            key: "CLASSES",
            get: function() {
                return {
                    BODYDISPLAYCONSENTMANAGER: "is-display-consentmanager",
                    ROOTSHOWDETAILS: "g-consentmanager--show-details",
                    SETTING: "g-consentmanager__setting",
                    SETTINGHIGHLIGHT: "g-consentmanager__setting--highlight",
                    COMPONENTHASHIGHLIGHT: "g-consentmanager--has-highlighted-elements"
                }
            }
        }, {
            key: "OPENTRIGGERHASH",
            get: function() {
                return "openconsentmanager"
            }
        }, {
            key: "URLPARAM_KEY",
            get: function() {
                return "tkcm"
            }
        }, {
            key: "URLPARAM_VALUE_CONFIRM_SELECTION",
            get: function() {
                return "ab"
            }
        }, {
            key: "URLPARAM_VALUE_CONFIRM_ALL",
            get: function() {
                return "aaus"
            }
        }, {
            key: "ROOTCLASSDISPLAYCONSENTMANAGER",
            get: function() {
                return "is-display-consentmanager"
            }
        }, {
            key: "TABBABLE_ELEMENT_SELECTORS",
            get: function() {
                return "a[href]:not([aria-hidden=true]), area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, [contenteditable]"
            }
        }, {
            key: "FOCUSABLE_ELEMENT_SELECTORS",
            get: function() {
                return "".concat(this.TABBABLE_ELEMENT_SELECTORS, ', [tabindex="-1"]')
            }
        }, {
            key: "COOKIEVALIDITY_IN_DAYS",
            get: function() {
                return 1825
            }
        }, {
            key: "ACTIONTRACKING_PREFIX",
            get: function() {
                return "consentmanager_"
            }
        }, {
            key: "DELAY",
            get: function() {
                return {
                    INITIAL: 50,
                    ITEM: 200,
                    FINAL: 100
                }
            }
        }]), u(n, [{
            key: "prepare",
            value: function() {
                var t = this;
                if (this.application.viewport.signals.changed.add(this.handleResize.bind(this)), this.onConsentManagerConfirmedCookieName = this.$root.data("consentsettingssavedcookiename"), this.consentManagerConfirmedCookieValue = this.$root.data("consentsettingssavedcookievalue"), (0, i.getCookie)(this.onConsentManagerConfirmedCookieName) || (this.focusFirstElement(), this.enableTabTrapping()), this.log("prepare / tk.consentManager: ", tk.consentManager), window.utag && window.utag.gdpr) {
                    this.categoryMap = {};
                    var e = {},
                        n = window.utag.gdpr.getCategories();
                    this.log("prepare / read tealium categories:", n), this.delayedSelectionEnabled = !!this.$root.data("delayedselectionenabled"), this.log("prepare / delayedselectionenabled:", this.delayedSelectionEnabled), this.$elements.consentSettingCheckboxes.each((function(o, i) {
                        var r = i.getAttribute("data-tealiumcategoryname"),
                            a = n.indexOf(r),
                            s = i.getAttribute("data-consentcookiename");
                        if (tk.consentManager.hasOwnProperty("setConsent")) {
                            var l = i.getAttribute("data-tkcategoryenumvalue");
                            e[r] = tk.consentManager.setConsent.split(",").includes(l)
                        }
                        t.categoryMap[r] = {
                            tealiumCategoryIndex: a,
                            consentCookieName: s
                        }
                    })), this.log("prepare / categoryMap:", this.categoryMap), this.setGlobalOpenHandler(), this.registerUrlHashChangeListener(), this.isUrlHashPresent() ? this.openConsentManager() : tk.consentManager.hasOwnProperty("setConsent") && (this.persistSelection(e), this.createConsentManagerConfirmedCookie())
                } else this.logInfo({
                    msg: "prepare / error: utag.gdpr not found (probably caused by adblockers) / ".concat(window.location),
                    stacktrace: ""
                }), this.closeConsentManager()
            }
        }, {
            key: "handleClickConfirmSelection",
            value: function(t) {
                t && t.preventDefault(), this.log("handleClickConfirmSelection clicked"), this.processClickConfirmation(n.URLPARAM_VALUE_CONFIRM_SELECTION)
            }
        }, {
            key: "handleClickConfirmAll",
            value: function(t) {
                var e = this;
                t.preventDefault();
                var o = this.$elements.consentSettingCheckboxes.filter(":not(:checked)"),
                    i = 0;
                this.log("handleClickConfirmAll / unselected checkboxes:", o), o.each((function(t, o) {
                    var r = t * n.DELAY.ITEM + (0 === t ? n.DELAY.INITIAL : 0);
                    i += r, setTimeout((function() {
                        o.checked = !0, e.log("handleClickConfirmAll / setting checkbox to true", o)
                    }), e.delayedSelectionEnabled ? r : 0)
                })), setTimeout((function() {
                    e.processClickConfirmation(n.URLPARAM_VALUE_CONFIRM_ALL)
                }), this.delayedSelectionEnabled ? i + n.DELAY.FINAL : 0)
            }
        }, {
            key: "handleClickClose",
            value: function(t) {
                t.preventDefault(), this.log("handleClickClose"), this.closeConsentManager()
            }
        }, {
            key: "handleClickToggleDetails",
            value: function(t) {
                var e = this;
                t.preventDefault();
                var o = this.$root.hasClass(n.CLASSES.ROOTSHOWDETAILS);
                this.log("handleClickToggleDetails / currentState:", o), this.$root.toggleClass(n.CLASSES.ROOTSHOWDETAILS), requestAnimationFrame((function() {
                    e.$elements.categoryDescriptionWrappers.each((function(t, o) {
                        var i = $(o).find(".g-consentmanager__setting-description").outerHeight(!0);
                        e.$elements.root.hasClass(n.CLASSES.ROOTSHOWDETAILS) ? $(o).height(i) : $(o).css("height", "")
                    }))
                }))
            }
        }, {
            key: "handleResize",
            value: function() {
                var t = this;
                this.log("handleResize"), this.$elements.root.hasClass(n.CLASSES.ROOTSHOWDETAILS) && requestAnimationFrame((function() {
                    t.$elements.categoryDescriptionWrappers.each((function(t, e) {
                        var n = $(e).find(".g-consentmanager__setting-description").outerHeight(!0);
                        $(e).height(n)
                    }))
                }))
            }
        }, {
            key: "handleKeyDownAndTrapTabbing",
            value: function(t) {
                if (this.log("handleKeyDownAndTrapTabbing"), 9 === t.keyCode) {
                    var e = this.$root.find(n.TABBABLE_ELEMENT_SELECTORS),
                        o = e[0],
                        i = e[e.length - 1],
                        r = this.$root.find(n.FOCUSABLE_ELEMENT_SELECTORS).first()[0];
                    this.log("handleKeyDownAndTrapTabbing / activeElement:", document.activeElement), this.log("handleKeyDownAndTrapTabbing / firstFocusableElementWithinDialog:", r), this.log("handleKeyDownAndTrapTabbing / lastTabbableElementWithinDialog:", i), this.log("handleKeyDownAndTrapTabbing / tabbableElementsWithinDialog:", e), t.shiftKey && document.activeElement === o || t.shiftKey && document.activeElement === r ? (t.preventDefault(), i.focus(), this.log("enableTabTrapping: set focus to lastFocusableElementWithinDialog")) : t.shiftKey || document.activeElement !== i || (t.preventDefault(), o.focus(), this.log("enableTabTrapping: set focus to firstFocusableElementWithinDialog"))
                }
            }
        }, {
            key: "processClickConfirmation",
            value: function(t) {
                this.persistSelection(this.getSelectionMap()), this.createConsentManagerConfirmedCookie(), this.createWebAnalyticsCookie(), this.considerAnalyticsCookieExpiration(), this.closeConsentManager(), this.addUrlParam(n.URLPARAM_KEY, t), this.reloadPage()
            }
        }, {
            key: "setCookie",
            value: function(t, e) {
                this.log("setCookie / name: ".concat(t, ", value: ").concat(e)), (0, i.setCookie)(t, e, n.COOKIEVALIDITY_IN_DAYS, !0, !1)
            }
        }, {
            key: "focusFirstElement",
            value: function() {
                var t = this.$root.find(n.FOCUSABLE_ELEMENT_SELECTORS).first();
                this.log("focusFirstElement", t), t.focus()
            }
        }, {
            key: "createConsentManagerConfirmedCookie",
            value: function() {
                this.log("createConsentManagerConfirmedCookie", this.consentManagerConfirmedCookieValue), this.setCookie(this.onConsentManagerConfirmedCookieName, this.consentManagerConfirmedCookieValue)
            }
        }, {
            key: "createWebAnalyticsCookie",
            value: function() {
                this.log("createWebAnalyticsCookie", "1"), (0, i.setCookie)("_WebAnalyticsCMfinished_", "1", void 0, !0, !1)
            }
        }, {
            key: "considerAnalyticsCookieExpiration",
            value: function() {
                var t = this.getSelectionMap(),
                    e = "analytics" in t && !0 === t.analytics;
                this.log("considerDeletionOfAnalyticsCookies: will".concat(e ? " not(!)" : "", " be expired")), e || document.cookie.split(";").map((function(t) {
                    var e;
                    return null === (e = t.split("=")[0]) || void 0 === e ? void 0 : e.trim()
                })).filter((function(t) {
                    return n.ANALYTICS_COOKIES_PATTERNS.some((function(e) {
                        return t.startsWith(e)
                    }))
                })).forEach(i.expireCookie)
            }
        }, {
            key: "getSelectionMap",
            value: function() {
                var t = {};
                return this.$elements.consentSettingCheckboxes.each((function(e, n) {
                    t[n.getAttribute("data-tealiumcategoryname")] = n.checked
                })), this.log("getSelectionMap", t), t
            }
        }, {
            key: "persistSelection",
            value: function(t) {
                var e = this,
                    n = {};
                Object.keys(t).forEach((function(o) {
                    var i = e.categoryMap[o] || null;
                    if (i && i.tealiumCategoryIndex >= 0) {
                        var r = i.tealiumCategoryIndex + 1,
                            a = t[o] ? 1 : 0;
                        n[r] = a, e.setCookie(i.consentCookieName, a), e.log("persistSelection / wrote cookie '".concat(i.consentCookieName, "' and tealium index '").concat(r, "' with value '").concat(a, "'"))
                    } else e.handleError('persistSelection / error: there was no matching category "'.concat(o, '" within the available tealium categories '), utag.gdpr.getCategories())
                })), this.log("persistSelection / tealiumSettings: ", n), window.utag.gdpr.setPreferencesValues(n)
            }
        }, {
            key: "reloadPage",
            value: function() {
                location.reload()
            }
        }, {
            key: "openConsentManager",
            value: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                    requestCategories: []
                };
                this.log("openConsentManager / params: ", t), this.handleAdditionalFeatureAndCategoryRequests(t), this.enableTabTrapping(), this.$elements.consentSettingCheckboxes.each((function(t, e) {
                    var n = e.getAttribute("data-consentcookiename"),
                        o = (0, i.getCookie)(n);
                    e.checked = 1 === parseInt(o)
                })), document.querySelector("body").classList.add(n.CLASSES.BODYDISPLAYCONSENTMANAGER), this.focusFirstElement()
            }
        }, {
            key: "closeConsentManager",
            value: function() {
                this.log("closeConsentManager"), window.location.hash.substr(1).toLowerCase() === n.OPENTRIGGERHASH.toLowerCase() && (this.log("closeConsentManager / removing hash that triggered opening"), (0, i.removeUrlHash)()), window.location.search.indexOf("tkConsent") > -1 && this.application.history.replace(window.location.href.replace(/tkConsent=[a-zA-Z0-9,_]+/, "")), document.querySelector("body").classList.remove(n.CLASSES.BODYDISPLAYCONSENTMANAGER), this.disableTabTrapping(), this.disableHighlighting(), this.disableCloseButton()
            }
        }, {
            key: "handleAdditionalFeatureAndCategoryRequests",
            value: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                    requestCategories: []
                };
                this.log("highlightRequestedElements / params: ", t);
                var e = [],
                    o = [];
                t.requestCategories && t.requestCategories.length > 0 && (e = t.requestCategories.map((function(t) {
                    return "[data-tkcategoryenumvalue=".concat(t.toUpperCase(), "]")
                })));
                var i = [].concat(a(e), o).join(", "),
                    r = this.$root.find(i);
                r.length > 0 ? (this.log("highlightRequestedElements / elementsToBeHighlighted: ", r), r.each((function(t, e) {
                    $(e).closest(".".concat(n.CLASSES.SETTING)).addClass(n.CLASSES.SETTINGHIGHLIGHT)
                })), this.enableHighlighting(), this.enableCloseButton()) : this.log("highlightRequestedElements / no elements found to be highlighted")
            }
        }, {
            key: "registerUrlHashChangeListener",
            value: function() {
                var t = this;
                this.log("registerUrlHashChangeListener"), window.addEventListener("hashchange", (function(e) {
                    t.isUrlHashPresent() && (e.preventDefault(), t.openConsentManager())
                }))
            }
        }, {
            key: "isUrlHashPresent",
            value: function() {
                var t = window.location.hash.substr(1).toLowerCase() === n.OPENTRIGGERHASH.toLowerCase();
                return this.log("isUrlHashPresent: ", t), t
            }
        }, {
            key: "setGlobalOpenHandler",
            value: function() {
                var t = this;
                this.log("setGlobalOpenHandler"), window.tk = window.tk || {}, tk.consentManager = tk.consentManager || {}, tk.consentManager.openConsentManager = function(e) {
                    t.openConsentManager(e)
                }
            }
        }, {
            key: "enableTabTrapping",
            value: function() {
                this.log("enableTabTrapping"), document.addEventListener("keydown", this.handleKeyDownAndTrapTabbing)
            }
        }, {
            key: "disableTabTrapping",
            value: function() {
                this.log("disableTabTrapping"), document.removeEventListener("keydown", this.handleKeyDownAndTrapTabbing)
            }
        }, {
            key: "enableHighlighting",
            value: function() {
                this.log("enableHighlighting"), this.$root.addClass(n.CLASSES.COMPONENTHASHIGHLIGHT)
            }
        }, {
            key: "disableHighlighting",
            value: function() {
                this.log("disableHighlighting"), this.$elements.settingItems.removeClass(n.CLASSES.SETTINGHIGHLIGHT), this.$root.removeClass(n.CLASSES.COMPONENTHASHIGHLIGHT)
            }
        }, {
            key: "enableCloseButton",
            value: function() {
                this.log("enableCloseButton"), this.$elements.btnClose.attr("aria-hidden", !1)
            }
        }, {
            key: "disableCloseButton",
            value: function() {
                this.log("disableCloseButton"), this.$elements.btnClose.attr("aria-hidden", !0)
            }
        }, {
            key: "addUrlParam",
            value: function(t, e) {
                var n = window.location.origin + window.location.pathname,
                    o = new URLSearchParams(window.location.search);
                o.set(t, e), this.application.history.replace(n + "?" + o.toString() + window.location.hash)
            }
        }], [{
            key: "className",
            get: function() {
                return "base.module-groups.g-consentmanager/Component"
            }
        }, {
            key: "ANALYTICS_COOKIES_PATTERNS",
            get: function() {
                return ["wt3_eid", "wt3_sid", "wt_rla", "wt_ttv2_"]
            }
        }]), n
    }(o.Component);
    e.Component = g
}, , , function(t, e, n) {
    "use strict";
    n(4), n(5), n(6), n(16), n(0), n(12), n(8), n(1), n(9), n(2), n(3), n(7), Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.Component = void 0;
    var o, i = n(11),
        r = n(13),
        a = (o = n(14)) && o.__esModule ? o : {
            default: o
        },
        s = n(22);

    function l(t) {
        return (l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function c() {
        return (c = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
            }
            return t
        }).apply(this, arguments)
    }

    function u(t, e) {
        for (var n = 0; n < e.length; n++) {
            var o = e[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
        }
    }

    function f(t, e) {
        return (f = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    function h(t) {
        var e = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
            } catch (t) {
                return !1
            }
        }();
        return function() {
            var n, o = p(t);
            if (e) {
                var i = p(this).constructor;
                n = Reflect.construct(o, arguments, i)
            } else n = o.apply(this, arguments);
            return d(this, n)
        }
    }

    function d(t, e) {
        return !e || "object" !== l(e) && "function" != typeof e ? function(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function p(t) {
        return (p = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }
    var y = function(t) {
        ! function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && f(t, e)
        }(l, t);
        var e, n, o, i = h(l);

        function l(t, e) {
            var n;
            return function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, l), (n = i.call(this, t, e)).SERVICE_URL_DATA_ATTRIBUTE = "serviceurl", n.NEXT_PAGE_DATA_ATTRIBUTE = "nextpage", n.waypoint = n.application.viewport.waypoint, n.teaserSelector = ".g-contentstream__teaserlist .m-magazinteaser", n.teaserInAnimation = !1, n.animationStepSize = 50, c(n.selectors, {
                $loadMoreButton: ".js-g-contentstream__loadmore",
                $filterModul: ".m-magazinfilter",
                $filterModulContents: ".m-magazinfilter > *",
                $teaserList: ".js-g-contentstream__teaserlist",
                $stream: ".js-g-contentstream__stream"
            }), c(n.bindings, {
                handleLoadMoreClick: "click:$loadMoreButton"
            }), n
        }
        return e = l, o = [{
            key: "className",
            get: function() {
                return "base.module-groups.g-contentstream/Component"
            }
        }], (n = [{
            key: "prepare",
            value: function() {
                this.$elements.filterModul.length > 0 && l.getInstance(this.application, this.$elements.filterModul).then(function(t) {
                    t.signals.requestFilter.add(this.loadTeasers.bind(this)), t.signals.focusFirstItem.add(this.setFocusToFirstResult.bind(this))
                }.bind(this)), this.setWaypoints()
            }
        }, {
            key: "loadTeasers",
            value: function(t) {
                var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                this.log("loadTeasers: " + t), a.default.get(t).done(this.handleFilterResultsDone.bind(this, e)).fail(this.handleResultsFail.bind(this))
            }
        }, {
            key: "handleFilterResultsDone",
            value: function(t, e) {
                var n = (0, a.default)(e);
                t && this.$elements.stream.empty();
                var o = n.find(this.selectors.$teaserList);
                this.$elements.stream.append(o), this.setWaypoints(), this.setupLoadMoreButton(n);
                var i = n.find(this.selectors.$filterModulContents);
                l.getInstance(this.application, this.$elements.filterModul).then(function(t) {
                    t.updateFilter(i)
                }.bind(this)), this.setFocusToNewResultSet(), this.hideLoader()
            }
        }, {
            key: "handleResultsFail",
            value: function(t, e) {
                this.log(e + ": HTTP Status: " + t.status + ", responseText: " + t.responseText), this.hideLoader()
            }
        }, {
            key: "handleLoadMoreClick",
            value: function(t) {
                t.preventDefault(), this.showLoader();
                var e = (0, a.default)(t.currentTarget),
                    n = e.data(this.SERVICE_URL_DATA_ATTRIBUTE),
                    o = e.attr("href");
                this.application.history.push(o), this.loadTeasers(n, !1), (0, s.isKeyboardInitiatedClick)(t) && (this.application.viewport.keyboardFocus = !0)
            }
        }, {
            key: "setupLoadMoreButton",
            value: function(t) {
                var e = t.find(this.selectors.$loadMoreButton),
                    n = e.length > 0 && "" !== e.data(this.NEXT_PAGE_DATA_ATTRIBUTE),
                    o = this.$root.find(this.selectors.$loadMoreButton);
                if (n) {
                    var i = e.data(this.SERVICE_URL_DATA_ATTRIBUTE),
                        a = e.data(this.NEXT_PAGE_DATA_ATTRIBUTE),
                        s = e.attr("href");
                    this.log("newServiceUrl", i), this.log("nextPage", a), this.log("newBtnHref", s), o.data(this.SERVICE_URL_DATA_ATTRIBUTE, i), o.data(this.NEXT_PAGE_DATA_ATTRIBUTE, a), o.attr("href", s), o.removeClass(r.State.HIDDEN)
                } else o.addClass(r.State.HIDDEN)
            }
        }, {
            key: "setFocusToNewResultSet",
            value: function() {
                if (!this.application.viewport.keyboardFocus) return !1;
                var t = this.$root.find(this.selectors.$teaserList);
                t.length > 1 && t.last().find("a:first").focus()
            }
        }, {
            key: "setFocusToFirstResult",
            value: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    e = this.$root.find(this.selectors.$teaserList);
                e.length && (this.application.viewport.keyboardFocus = t, e.first().find("a:first").focus())
            }
        }, {
            key: "showLoader",
            value: function() {
                this.$elements.loadMoreButton.addClass(r.State.DISABLED)
            }
        }, {
            key: "hideLoader",
            value: function() {
                this.$elements.loadMoreButton.removeClass(r.State.DISABLED)
            }
        }, {
            key: "setWaypoints",
            value: function() {
                var t = this;
                this.$root.find(this.teaserSelector).not("." + r.State.LOADED).each((function(e, n) {
                    t.setWaypoint(e, n)
                }))
            }
        }, {
            key: "setWaypoint",
            value: function(t, e) {
                var n = this,
                    o = (t + 1) % 3;
                0 === o && (o = 3);
                var i = this.animationStepSize * o,
                    r = (0, a.default)(e);
                new n.waypoint({
                    element: e,
                    handler: function(t) {
                        "down" === t && (!1 === n.teaserInAnimation ? n.executeWaypoint(r, i) : n.delayWaypoint(r, i))
                    },
                    offset: "98%"
                })
            }
        }, {
            key: "delayWaypoint",
            value: function(t, e) {
                var n = this;
                setTimeout((function() {
                    !1 === n.teaserInAnimation ? n.executeWaypoint(t, e) : n.delayWaypoint(t, e)
                }), this.animationStepSize)
            }
        }, {
            key: "executeWaypoint",
            value: function(t, e) {
                var n = this;
                this.teaserInAnimation = !0, setTimeout((function() {
                    t.addClass(r.State.LOADED), n.teaserInAnimation = !1
                }), e)
            }
        }]) && u(e.prototype, n), o && u(e, o), l
    }(i.Component);
    e.Component = y
}, function(t, e, n) {
    "use strict";

    function o(t) {
        return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function i() {
        return (i = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
            }
            return t
        }).apply(this, arguments)
    }

    function r(t, e) {
        for (var n = 0; n < e.length; n++) {
            var o = e[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
        }
    }

    function a(t, e) {
        return (a = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    function s(t) {
        var e = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
            } catch (t) {
                return !1
            }
        }();
        return function() {
            var n, o = c(t);
            if (e) {
                var i = c(this).constructor;
                n = Reflect.construct(o, arguments, i)
            } else n = o.apply(this, arguments);
            return l(this, n)
        }
    }

    function l(t, e) {
        return !e || "object" !== o(e) && "function" != typeof e ? function(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function c(t) {
        return (c = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }
    n(4), n(5), n(6), n(0), n(12), n(8), n(1), n(9), n(2), n(3), n(7), Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.Component = void 0;
    var u = function(t) {
        ! function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && a(t, e)
        }(c, t);
        var e, n, o, l = s(c);

        function c(t, e) {
            var n;
            return function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, c), i((n = l.call(this, t, e)).selectors, {
                $backLink: ".js-g-faqhintergrund__backcta"
            }), i(n.bindings, {
                handleBackLinkClick: "click:$backLink"
            }), n
        }
        return e = c, o = [{
            key: "className",
            get: function() {
                return "base.module-groups.g-faqhintergrund/Component"
            }
        }], (n = [{
            key: "handleBackLinkClick",
            value: function() {
                window.history.back()
            }
        }]) && r(e.prototype, n), o && r(e, o), c
    }(n(11).Component);
    e.Component = u
}, function(t, e, n) {
    "use strict";
    n(4), n(5), n(6), n(0), n(12), n(8), n(1), n(9), n(2), n(3), n(7), Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.Component = void 0;
    var o = n(11),
        i = n(13);

    function r(t) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function a() {
        return (a = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
            }
            return t
        }).apply(this, arguments)
    }

    function s(t, e) {
        for (var n = 0; n < e.length; n++) {
            var o = e[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
        }
    }

    function l(t, e) {
        return (l = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    function c(t) {
        var e = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
            } catch (t) {
                return !1
            }
        }();
        return function() {
            var n, o = f(t);
            if (e) {
                var i = f(this).constructor;
                n = Reflect.construct(o, arguments, i)
            } else n = o.apply(this, arguments);
            return u(this, n)
        }
    }

    function u(t, e) {
        return !e || "object" !== r(e) && "function" != typeof e ? function(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function f(t) {
        return (f = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }
    var h = function(t) {
        ! function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && l(t, e)
        }(u, t);
        var e, n, o, r = c(u);

        function u(t, e) {
            var n;
            return function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, u), a((n = r.call(this, t, e)).selectors, {
                $shim: ".js-g-header__shim",
                $logo: ".g-header__logo"
            }), a(n.bindings, {
                handleShimClick: "click:$shim"
            }), n
        }
        return e = u, o = [{
            key: "className",
            get: function() {
                return "base.module-groups.g-header/Component"
            }
        }], (n = [{
            key: "prepare",
            value: function() {
                this.application.signals.requestHeaderShim.add(this.handleHeaderShimRequest.bind(this)), this.application.signals.hideLogo.add(this.hideLogo.bind(this)), this.application.signals.showLogo.add(this.showLogo.bind(this)), this.application.signals.showLogoFlyout.add(this.showLogoFlyout.bind(this)), this.application.signals.hideLogoFlyout.add(this.hideLogoFlyout.bind(this))
            }
        }, {
            key: "handleHeaderShimRequest",
            value: function(t) {
                t ? this.$root.addClass(i.State.OPENED) : this.$root.removeClass(i.State.OPENED)
            }
        }, {
            key: "handleShimClick",
            value: function() {
                this.application.signals.requestFlyoutClose.dispatch()
            }
        }, {
            key: "hideLogo",
            value: function() {
                this.$elements.logo.addClass(i.State.HIDDEN)
            }
        }, {
            key: "showLogo",
            value: function() {
                this.$elements.logo.removeClass(i.State.HIDDEN)
            }
        }, {
            key: "showLogoFlyout",
            value: function() {
                this.$elements.logo.addClass(i.State.VISIBLE)
            }
        }, {
            key: "hideLogoFlyout",
            value: function() {
                this.$elements.logo.removeClass(i.State.VISIBLE)
            }
        }]) && s(e.prototype, n), o && s(e, o), u
    }(o.Component);
    e.Component = h
}, function(t, e, n) {
    "use strict";
    n(4), n(5), n(6), n(16), n(0), n(12), n(8), n(1), n(9), n(2), n(3), n(7), Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.Component = void 0;
    var o = n(11);
    ! function(t) {
        if (t && t.__esModule) return t;
        if (null === t || "object" !== r(t) && "function" != typeof t) return {
            default: t
        };
        var e = i();
        if (e && e.has(t)) return e.get(t);
        var n = {},
            o = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var a in t)
            if (Object.prototype.hasOwnProperty.call(t, a)) {
                var s = o ? Object.getOwnPropertyDescriptor(t, a) : null;
                s && (s.get || s.set) ? Object.defineProperty(n, a, s) : n[a] = t[a]
            }
        n.default = t, e && e.set(t, n)
    }(n(86));

    function i() {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap;
        return i = function() {
            return t
        }, t
    }

    function r(t) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function a() {
        return (a = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
            }
            return t
        }).apply(this, arguments)
    }

    function s(t, e) {
        for (var n = 0; n < e.length; n++) {
            var o = e[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
        }
    }

    function l(t, e) {
        return (l = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    function c(t) {
        var e = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
            } catch (t) {
                return !1
            }
        }();
        return function() {
            var n, o = f(t);
            if (e) {
                var i = f(this).constructor;
                n = Reflect.construct(o, arguments, i)
            } else n = o.apply(this, arguments);
            return u(this, n)
        }
    }

    function u(t, e) {
        return !e || "object" !== r(e) && "function" != typeof e ? function(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function f(t) {
        return (f = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }
    var h = function(t) {
        ! function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && l(t, e)
        }(r, t);
        var e, n, o, i = c(r);

        function r(t, e) {
            var n;
            return function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, r), (n = i.call(this, t, e)).lightboxOptions = {}, n.options = {
                borderless: !1,
                confirm: !1,
                confirmCallback: !1,
                confirmBtnWrapper: '<div class="lightbox-confirmbutton--wrapper">',
                showHeader: !0,
                fancyBoxUrl: ""
            }, n.fancyboxOptions = {
                toolbar: !1,
                buttons: ["close"],
                smallBtn: !0,
                modal: !1,
                hideScrollbar: !0,
                slideClass: "",
                baseClass: "",
                iframe: {
                    tpl: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen allowtransparency="true" src=""></iframe>',
                    css: {
                        width: "94vw",
                        height: "80vh"
                    },
                    preload: !1,
                    attr: {
                        scrolling: "auto"
                    }
                },
                errorTpl: '<div class="fancybox-error"><p>{{ERROR}}<p></div>',
                btnTpl: {
                    smallBtn: '<button data-fancybox-close class="fancybox-close-small" title="Schließen">Schließen</button>'
                },
                lang: "de",
                i18n: {
                    de: {
                        CLOSE: "Schließen"
                    }
                }
            }, n.isBorderless() && (n.options.iframe.tpl = '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen allowtransparency="true" src=""></iframe>', n.options.smallBtn = !0), a(n.selectors, {
                $container: ".g-lightbox__container",
                $body: ".g-lightbox__body",
                $confirm: ".g-lightbox__confirm",
                $cancel: ".g-lightbox__cancel"
            }), a(n.bindings, {}), n
        }
        return e = r, o = [{
            key: "className",
            get: function() {
                return "base.module-groups.g-lightbox/Component"
            }
        }], (n = [{
            key: "prepare",
            value: function() {
                this.application.signals.requestLightboxOpen.add(this.handleOpenRequest.bind(this))
            }
        }, {
            key: "handleOpenRequest",
            value: function(t) {
                this.setupOptions(t)
            }
        }, {
            key: "setupOptions",
            value: function(t) {
                a(this.options, this.fancyboxOptions, t), this.callback = this.options.confirmCallback, this.options.confirm && (this.options.baseClass = "is-confirmbox", this.options.modal = !0);
                var e = this;
                e.lightboxOptions = {}, e.callBackOptions = {
                    afterLoad: function(t, n) {
                        e.prepareContent(t, n)
                    },
                    afterClose: function(t, n) {
                        e.isConfirm() && (e.confirmResp ? e.callback.call(this, !0) : e.callback.call(this, !1))
                    }
                }, jQuery.fancybox && (jQuery.extend(!0, e.lightboxOptions, jQuery.fancybox.defaults, e.callBackOptions, e.options), e.lightbox = jQuery.fancybox)
            }
        }, {
            key: "open",
            value: function() {
                this.lightbox.open(this.lightboxOptions)
            }
        }, {
            key: "close",
            value: function() {
                this.lightbox.close()
            }
        }, {
            key: "isBorderless",
            value: function() {
                return !0 === this.options.borderless
            }
        }, {
            key: "isConfirm",
            value: function() {
                return !0 === this.options.confirm
            }
        }, {
            key: "prepareContent",
            value: function(t, e) {
                var n = this,
                    o = this.$elements.container.clone(),
                    i = this.$elements.body.clone(),
                    r = $('<div class="lightbox-content--footer"></div>'),
                    a = $(n.options.btnTpl.smallBtn),
                    s = $('<div class="lightbox-content--header"><div class="lightbox-logo--wrapper"><div class="lightbox-logo"></div></div></div>');
                if (this.options.modal || (s.append(a), a.on("click", (function(t) {
                        t.preventDefault(), n.close()
                    }))), this.options.showHeader || (s = ""), "image" !== e.type && ("iframe" !== e.type ? (e.$content.wrap(o).wrap(i), e.$content.parent(this.selectors.$body).after(r)) : (e.$content.append(r), n.isBorderless() || e.$content.prepend(s)), this.isBorderless() || e.$content.parent(this.selectors.$body).before(s), this.isConfirm())) {
                    var l = $(this.options.confirmBtnWrapper),
                        c = $(this.$elements.confirm.html()),
                        u = $(this.$elements.cancel.html());
                    void 0 !== this.options.confirmOKBtnTxt && c.find(".e-cta__text").text(this.options.confirmOKBtnTxt), void 0 !== this.options.confirmCancelBtnTxt && u.attr("title", this.options.confirmCancelBtnTxt).find(".e-link__title").text(this.options.confirmCancelBtnTxt), r.append(l.append(c).append(u)), c.on("click", (function(t) {
                        t.preventDefault(), n.confirmResp = !0, n.close()
                    })), u.on("click", (function(t) {
                        t.preventDefault(), n.confirmResp = !1, n.close()
                    }))
                }
            }
        }]) && s(e.prototype, n), o && s(e, o), r
    }(o.Component);
    e.Component = h
}, function(t, e, n) {
    "use strict";
    n(4), n(5), n(6), n(51), n(0), n(83), n(12), n(8), n(1), n(9), n(2), n(3), n(55), n(7), Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.Component = void 0;
    var o, i = n(11),
        r = (o = n(14)) && o.__esModule ? o : {
            default: o
        },
        a = n(43);
    n(86);

    function s(t) {
        return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function l() {
        return (l = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
            }
            return t
        }).apply(this, arguments)
    }

    function c(t, e) {
        for (var n = 0; n < e.length; n++) {
            var o = e[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
        }
    }

    function u(t, e) {
        return (u = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    function f(t) {
        var e = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
            } catch (t) {
                return !1
            }
        }();
        return function() {
            var n, o = d(t);
            if (e) {
                var i = d(this).constructor;
                n = Reflect.construct(o, arguments, i)
            } else n = o.apply(this, arguments);
            return h(this, n)
        }
    }

    function h(t, e) {
        return !e || "object" !== s(e) && "function" != typeof e ? function(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function d(t) {
        return (d = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }
    var p = function(t) {
        ! function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && u(t, e)
        }(s, t);
        var e, n, o, i = f(s);

        function s(t, e) {
            var n;
            return function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, s), (n = i.call(this, t, e)).application = t, l(n.selectors, {
                $image: ".js-g-mediengalerie__thumbnail-image",
                $anchorLink: ".js-g-mediengalerie__nutzungsbedingungenlink",
                $tabBtn: ".js-g-mediengalerie__radiobutton"
            }), n.imageList = [], n.createImageList(), l(n.bindings, {
                handleImageClick: "click:$image",
                handleAnchorClick: "click:$anchorLink",
                handleTabClick: "click:$tabBtn",
                handleKeyUp: "keyup:$image"
            }), n
        }
        return e = s, o = [{
            key: "className",
            get: function() {
                return "base.module-groups.g-mediengalerie/Component"
            }
        }], (n = [{
            key: "createImageList",
            value: function() {
                var t = [].slice.call(document.querySelectorAll(this.selectors.$image));
                Array.prototype.forEach.call(t, (function(t, e) {
                    t.dataset.fancyboxindex = "" + e;
                    var n = t.dataset.zoom,
                        o = t.dataset.headline,
                        i = t.dataset.caption,
                        r = t.dataset.copyright,
                        a = t.dataset.cid,
                        s = t.dataset.filename;
                    "" !== o && (o = '<span class="g-mediengalerie__fancyboxcaptionheadline">' + o + "</span>"), "" !== i && (i = '<span class="g-mediengalerie__fancyboxcaptiontext">' + i + "</span>"), "" !== r && (r = '<span class="g-mediengalerie__fancyboxcopyright">' + r + "</span>"), this.imageList.push({
                        src: n,
                        caption: o + "" + i + r,
                        contentId: a,
                        fileName: s
                    })
                }), this)
            }
        }, {
            key: "handleTabClick",
            value: function(t) {
                setTimeout((function() {
                    t.target && t.target.dataset.showvideos && window.AcPlayer && tkdeApp.mediaPlayer.initMediaContainers(document.body), document.querySelectorAll(".g-mediengalerie__contentcontainer [data-tk-media-id]").forEach((function(t) {
                        var e = t.mediaPlayer.api();
                        e.ready((function() {
                            e.pause()
                        }))
                    }))
                }), 500)
            }
        }, {
            key: "handleKeyUp",
            value: function(t) {
                t.keyCode === a.KeyCode.ENTER && (t.preventDefault(), this.handleImageClick(t))
            }
        }, {
            key: "handleImageClick",
            value: function(t) {
                r.default.fancybox.open(this.imageList, {
                    onActivate: function(e) {
                        e.jumpTo(t.currentTarget.dataset.fancyboxindex)
                    },
                    afterShow: function(t, e) {
                        (0, r.default)("#gallery-download").attr("href", e.src + "?tkImageDownload=true").attr("data-tk-trackaction", "download: " + e.fileName + " " + e.contentId), tk.webAnalytics && tk.webAnalytics.trackAction("lightbox zeigt: " + e.fileName + " " + e.contentId)
                    },
                    baseClass: "g-mediengalerie__fancybox",
                    buttons: ["download", "close"],
                    idleTime: 10,
                    hideScrollbar: !0,
                    toolbar: !0,
                    infobar: !0,
                    lang: "de",
                    i18n: {
                        de: {
                            CLOSE: "Schliessen",
                            NEXT: "Weiter",
                            PREV: "Zurück",
                            ERROR: "Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es später nochmal.",
                            FULL_SCREEN: "Vollbild",
                            DOWNLOAD: "Herunterladen",
                            ZOOM: "Maßstab"
                        }
                    },
                    btnTpl: {
                        download: '<a data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}" id="gallery-download"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 28 20" class="fancybox-button--download--icon"><path fill="#fff" d="M17.84125,8.89l-3.58,3.59a0.50748,0.50748,0,0,1-.7,0l-3.41-3.41a0.51343,0.51343,0,0,1,0-.71,0.49509,0.49509,0,0,1,.71,0l2.54,2.55V2.51a0.50805,0.50805,0,0,1,.5-0.5,0.50146,0.50146,0,0,1,.5.5v8.42l2.74-2.75a0.50108,0.50108,0,0,1,.7,0A0.49506,0.49506,0,0,1,17.84125,8.89Z"/><path fill="#fff" d="M25.5,18.0293H2.5a0.49971,0.49971,0,0,1-.5-0.5v-7.457a0.5,0.5,0,0,1,1,0v6.957H25v-6.957a0.5,0.5,0,0,1,1,0v7.457A0.49971,0.49971,0,0,1,25.5,18.0293Z"/></svg></a>'
                    },
                    type: "image",
                    animationEffect: "fade",
                    transitionEffect: "fade",
                    loop: !1,
                    image: {
                        preload: !0
                    }
                })
            }
        }, {
            key: "handleAnchorClick",
            value: function(t) {
                t.preventDefault();
                var e = (0, r.default)("#js-g-mediengalerie__nutzungsbedingungen");
                if (e.length > 0) {
                    var n = this.$root.data("offset");
                    this.application.viewport.scrollTo(e, void 0, n)
                }
            }
        }]) && c(e.prototype, n), o && c(e, o), s
    }(i.Component);
    e.Component = p
}, function(t, e, n) {
    "use strict";
    n(4), n(5), n(6), n(23), n(16), n(0), n(12), n(8), n(1), n(9), n(26), n(2), n(3), n(153), n(72), n(7), n(239), Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.Component = void 0;
    var o, i = n(11),
        r = (o = n(14)) && o.__esModule ? o : {
            default: o
        },
        a = n(13),
        s = n(22);

    function l(t) {
        return (l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function c() {
        return (c = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
            }
            return t
        }).apply(this, arguments)
    }

    function u(t, e) {
        for (var n = 0; n < e.length; n++) {
            var o = e[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
        }
    }

    function f(t, e) {
        return (f = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    function h(t) {
        var e = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
            } catch (t) {
                return !1
            }
        }();
        return function() {
            var n, o = p(t);
            if (e) {
                var i = p(this).constructor;
                n = Reflect.construct(o, arguments, i)
            } else n = o.apply(this, arguments);
            return d(this, n)
        }
    }

    function d(t, e) {
        return !e || "object" !== l(e) && "function" != typeof e ? function(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function p(t) {
        return (p = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }
    var y = function(t) {
        ! function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && f(t, e)
        }(l, t);
        var e, n, o, i = h(l);

        function l(t, e) {
            var n;
            return function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, l), (n = i.call(this, t, e)).SERVICE_URL_DATA_ATTRIBUTE = "serviceurl", n.SEARCH_MODULE_CLASS = "js-g-suche", c(n.selectors, {
                $loader: ".".concat(n.SEARCH_MODULE_CLASS, "__loader"),
                $content: ".".concat(n.SEARCH_MODULE_CLASS, "__content"),
                $results: ".".concat(n.SEARCH_MODULE_CLASS, "__results"),
                $resultSets: ".".concat(n.SEARCH_MODULE_CLASS, "__resultset"),
                loadMoreButton: ".".concat(n.SEARCH_MODULE_CLASS, "__loadmore"),
                $startNewSearchCta: ".".concat(n.SEARCH_MODULE_CLASS, "__e-cta--new-search"),
                $filter: ".js-m-suchfilter",
                $resultLink: ".js-g-suchtreffer__sls",
                $searchField: ".m-suchfeld",
                $navSearchForm: ".m-navigation__searchform",
                $searchInput: ".js-m-suchfeld__search-input",
                $navSearchBtn: ".m-navigation__searchbtn"
            }), c(n.bindings, {
                handleLoadMoreClick: "click:$root:" + n.selectors.loadMoreButton,
                handleStartNewSearchClick: "click:$startNewSearchCta"
            }), n.handleQueryParams(), n
        }
        return e = l, o = [{
            key: "className",
            get: function() {
                return "base.module-groups.g-suche/Component"
            }
        }], (n = [{
            key: "handleQueryParams",
            value: function() {
                var t = new URLSearchParams(window.location.search).get("q");
                null != t && t.trim() || this.handleStartNewSearchClick(null)
            }
        }, {
            key: "prepare",
            value: function() {
                this.$elements.filter.length && l.getInstance(this.application, this.$elements.filter).then(function(t) {
                    t.signals.filterChanged.add(this.handleFilterChanged.bind(this))
                }.bind(this))
            }
        }, {
            key: "handleResultsDone",
            value: function(t) {
                var e = (0, r.default)("<div>" + t + "</div>"),
                    n = e.find(this.selectors.$resultSets);
                this.$root.find(this.selectors.$results).append(n), this.setupLoadMoreButton(e), this.bootstrapLoadedModules(), this.enableLoadMore(), this.application.signals.searchResultsLoaded.dispatch(), this.hideLoader(), this.setFocusToNewResultSet()
            }
        }, {
            key: "handleResultsFail",
            value: function(t, e) {
                this.log(e + ": HTTP Status: " + t.status + ", responseText: " + t.responseText), this.hideLoader(), this.enableLoadMore()
            }
        }, {
            key: "handleFilterChanged",
            value: function(t) {
                this.$root.find(this.selectors.$results).empty(), this.$root.find(this.selectors.loadMoreButton).addClass(a.State.HIDDEN), this.showLoader(), this.loadSearchResults(t)
            }
        }, {
            key: "handleLoadMoreClick",
            value: function(t) {
                t.preventDefault();
                var e = (0, r.default)(t.currentTarget),
                    n = e.data(this.SERVICE_URL_DATA_ATTRIBUTE);
                e.blur(), this.loadSearchResults(n), this.application.history.push(e.attr("href")), (0, s.isKeyboardInitiatedClick)(t) && (this.application.viewport.keyboardFocus = !0)
            }
        }, {
            key: "handleStartNewSearchClick",
            value: function(t) {
                if (t && t.preventDefault(), this.resetSearchFieldValue(), (0, s.isMobile)(this.application)) {
                    var e = (0, r.default)(this.selectors.$navSearchBtn);
                    1 === e.length && e.click()
                } else 1 === (0, r.default)(this.selectors.$navSearchForm).length && (0, r.default)(this.selectors.$searchInput).focus().select()
            }
        }, {
            key: "resetSearchFieldValue",
            value: function() {
                (0, r.default)(this.selectors.$searchInput).val(""), (0, r.default)(this.selectors.$searchField).removeClass(a.State.NOT_EMPTY)
            }
        }, {
            key: "loadSearchResults",
            value: function(t) {
                this.log("loadSearchResults: " + t), this.disableLoadMore(), r.default.get(t).done(this.handleResultsDone.bind(this)).fail(this.handleResultsFail.bind(this))
            }
        }, {
            key: "bootstrapLoadedModules",
            value: function() {
                var t = this;
                this.$root.find(this.selectors.$resultSets + " [data-entity]").each((function() {
                    l.getInstance(t.application, (0, r.default)(this))
                }))
            }
        }, {
            key: "setupLoadMoreButton",
            value: function(t) {
                var e = t.find(this.selectors.loadMoreButton),
                    n = !e.hasClass(a.State.HIDDEN),
                    o = this.$root.find(this.selectors.loadMoreButton);
                if (n) {
                    var i = e.data(this.SERVICE_URL_DATA_ATTRIBUTE);
                    o.attr("href", e.attr("href")), o.data(this.SERVICE_URL_DATA_ATTRIBUTE, i), o.removeClass(a.State.HIDDEN)
                } else o.addClass(a.State.HIDDEN)
            }
        }, {
            key: "disableLoadMore",
            value: function() {
                this.$root.find(this.selectors.loadMoreButton).addClass(a.State.DISABLED)
            }
        }, {
            key: "enableLoadMore",
            value: function() {
                this.$root.find(this.selectors.loadMoreButton).removeClass(a.State.DISABLED)
            }
        }, {
            key: "setFocusToNewResultSet",
            value: function() {
                var t = this.$root.find(this.selectors.$resultSets);
                t.length > 1 && t.last().find("a:first").focus()
            }
        }, {
            key: "showLoader",
            value: function() {
                this.$elements.loader.removeClass(a.State.HIDDEN)
            }
        }, {
            key: "hideLoader",
            value: function() {
                this.$elements.loader.addClass(a.State.HIDDEN)
            }
        }]) && u(e.prototype, n), o && u(e, o), l
    }(i.Component);
    e.Component = y
}, function(t, e, n) {
    "use strict";
    n(4), n(5), n(6), n(23), n(16), n(0), n(12), n(8), n(1), n(9), n(2), n(3), n(7), Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.Component = void 0;
    var o = n(11),
        i = n(13);

    function r(t) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function a() {
        return (a = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
            }
            return t
        }).apply(this, arguments)
    }

    function s(t, e) {
        for (var n = 0; n < e.length; n++) {
            var o = e[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
        }
    }

    function l(t, e) {
        return (l = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    function c(t) {
        var e = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
            } catch (t) {
                return !1
            }
        }();
        return function() {
            var n, o = f(t);
            if (e) {
                var i = f(this).constructor;
                n = Reflect.construct(o, arguments, i)
            } else n = o.apply(this, arguments);
            return u(this, n)
        }
    }

    function u(t, e) {
        return !e || "object" !== r(e) && "function" != typeof e ? function(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function f(t) {
        return (f = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }
    var h = function(t) {
        ! function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && l(t, e)
        }(u, t);
        var e, n, o, r = c(u);

        function u(t, e) {
            var n;
            return function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, u), a((n = r.call(this, t, e)).selectors, {
                $overviewLink: ".js-g-vernetzung__overview-link",
                $hiddenItems: ".g-vernetzung__navigationlist-item.is-hidden",
                $images: ".e-image"
            }), a(n.bindings, {
                handleClick: "click:$overviewLink"
            }), n
        }
        return e = u, o = [{
            key: "className",
            get: function() {
                return "base.module group.g-vernetzung/Component"
            }
        }], (n = [{
            key: "handleClick",
            value: function(t) {
                t.preventDefault();
                var e = this.$elements.hiddenItems,
                    n = e.find(this.selectors.$images),
                    o = function() {};
                this.$elements.overviewLink.hasClass(i.State.KEYBOARD_FOCUS) && (o = function() {
                    e.filter(":first").find("a").focus().addClass(i.State.KEYBOARD_FOCUS)
                }), this.$elements.overviewLink.attr("aria-hidden", !0).addClass(i.State.HIDDEN), $.Velocity.animate(e, "slideDown", {
                    duration: 500,
                    display: "",
                    complete: function() {
                        e.css("opacity", 1), e.removeClass(i.State.HIDDEN), e.attr("aria-hidden", !1), n.attr("aria-hidden", !0), o()
                    }
                })
            }
        }]) && s(e.prototype, n), o && s(e, o), u
    }(o.Component);
    e.Component = h
}, function(t, e, n) {
    "use strict";
    n(4), n(5), n(6), n(0), n(12), n(8), n(1), n(9), n(2), n(3), n(7), Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.Component = void 0;
    var o = n(11),
        i = n(13);
    n(22);

    function r(t) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function a() {
        return (a = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
            }
            return t
        }).apply(this, arguments)
    }

    function s(t, e) {
        for (var n = 0; n < e.length; n++) {
            var o = e[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
        }
    }

    function l(t, e) {
        return (l = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    function c(t) {
        var e = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
            } catch (t) {
                return !1
            }
        }();
        return function() {
            var n, o = f(t);
            if (e) {
                var i = f(this).constructor;
                n = Reflect.construct(o, arguments, i)
            } else n = o.apply(this, arguments);
            return u(this, n)
        }
    }

    function u(t, e) {
        return !e || "object" !== r(e) && "function" != typeof e ? function(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function f(t) {
        return (f = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }
    var h = function(t) {
        ! function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && l(t, e)
        }(u, t);
        var e, n, o, r = c(u);

        function u(t, e) {
            var n;
            return function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, u), a((n = r.call(this, t, e)).selectors, {
                $header: ".js-m-akkordeon__header",
                $content: ".js-m-akkordeon__content",
                $innerContent: ".js-m-akkordeon__innercontent"
            }), a(n.bindings, {
                handleHeaderClick: "click:$header"
            }), n
        }
        return e = u, o = [{
            key: "className",
            get: function() {
                return "base.modules.m-akkordeon/Component"
            }
        }], (n = [{
            key: "prepare",
            value: function() {
                this.application.viewport.signals.changed.add(this.handleResize.bind(this))
            }
        }, {
            key: "handleHeaderClick",
            value: function(t, e) {
                var n = this,
                    o = !e || e && e.scrollToOnOpen,
                    r = !this.$elements.root.hasClass(i.State.OPENED);
                t.preventDefault(), this.$elements.root.toggleClass(i.State.OPENED);
                var a = this.$elements.innerContent.outerHeight();
                this.$elements.root.hasClass(i.State.OPENED) ? (this.$elements.content.height(a), this.handleMediaFiles(), this.$elements.header.attr("aria-expanded", !0), this.$elements.content.attr("aria-hidden", !1)) : (this.$elements.content.css("height", ""), this.$elements.header.attr("aria-expanded", !1), this.$elements.content.attr("aria-hidden", !0)), o && r && setTimeout((function() {
                    n.scrollTo()
                }), 500)
            }
        }, {
            key: "handleMediaFiles",
            value: function() {
                window.AcPlayer && tkdeApp.mediaPlayer.initMediaContainers(this.$elements)
            }
        }, {
            key: "handleResize",
            value: function() {
                if (this.$elements.root.hasClass(i.State.OPENED)) {
                    var t = this.$elements.innerContent.outerHeight();
                    this.$elements.content.height(t)
                }
            }
        }, {
            key: "scrollTo",
            value: function() {
                var t = this.$root.height(),
                    e = $(document).scrollTop(),
                    n = this.$root.offset().top - 75;
                e > n || e + window.innerHeight < this.$root.offset().top + t ? $("html, body").animate({
                    scrollTop: n
                }, 500) : $("html, body").animate({
                    scrollTop: e + 1
                }, 1)
            }
        }]) && s(e.prototype, n), o && s(e, o), u
    }(o.Component);
    e.Component = h
}, function(t, e, n) {
    "use strict";
    n(4), n(5), n(6), n(23), n(16), n(0), n(12), n(8), n(1), n(9), n(2), n(3), n(7), Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.Component = void 0;
    var o, i = n(11),
        r = n(13),
        a = (o = n(14)) && o.__esModule ? o : {
            default: o
        };

    function s(t) {
        return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function l() {
        return (l = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
            }
            return t
        }).apply(this, arguments)
    }

    function c(t, e) {
        for (var n = 0; n < e.length; n++) {
            var o = e[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
        }
    }

    function u(t, e) {
        return (u = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    function f(t) {
        var e = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
            } catch (t) {
                return !1
            }
        }();
        return function() {
            var n, o = d(t);
            if (e) {
                var i = d(this).constructor;
                n = Reflect.construct(o, arguments, i)
            } else n = o.apply(this, arguments);
            return h(this, n)
        }
    }

    function h(t, e) {
        return !e || "object" !== s(e) && "function" != typeof e ? function(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function d(t) {
        return (d = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }
    var p = function(t) {
        ! function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && u(t, e)
        }(s, t);
        var e, n, o, i = f(s);

        function s(t, e) {
            var n;
            return function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, s), l((n = i.call(this, t, e)).selectors, {
                $openAllLink: ".js-m-akkordeonheader__openall",
                accordions: e.data("akkordeonselector"),
                accordionHeader: ".js-m-akkordeon__header"
            }), l(n.bindings, {
                handleOpenAllClick: "click:$openAllLink"
            }), n.$accordions = (0, a.default)(n.selectors.accordions), n
        }
        return e = s, o = [{
            key: "className",
            get: function() {
                return "base.module.m-akkordeonheader/Component"
            }
        }], (n = [{
            key: "prepare",
            value: function() {
                this.$accordions.on("click", this.handleAccordionsChange.bind(this))
            }
        }, {
            key: "handleOpenAllClick",
            value: function(t) {
                this.$elements.openAllLink.toggleClass(r.State.OPENED), this.$elements.openAllLink.hasClass(r.State.OPENED) ? this.$accordions.not("." + r.State.OPENED).find(this.selectors.accordionHeader).trigger("click", {
                    scrollToOnOpen: !1
                }) : this.$accordions.filter("." + r.State.OPENED).find(this.selectors.accordionHeader).trigger("click", {
                    scrollToOnOpen: !1
                })
            }
        }, {
            key: "handleAccordionsChange",
            value: function() {
                var t = this.$accordions.filter("." + r.State.OPENED).length,
                    e = this.$accordions.length;
                0 === t ? this.$elements.openAllLink.removeClass(r.State.OPENED) : t === e && this.$elements.openAllLink.addClass(r.State.OPENED)
            }
        }]) && c(e.prototype, n), o && c(e, o), s
    }(i.Component);
    e.Component = p
}, function(t, e, n) {
    "use strict";
    n(4), n(5), n(6), n(0), n(12), n(8), n(1), n(9), n(2), n(3), n(7), Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.Component = void 0;
    var o = n(11),
        i = n(13),
        r = n(85);

    function a(t) {
        return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function s() {
        return (s = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
            }
            return t
        }).apply(this, arguments)
    }

    function l(t, e) {
        for (var n = 0; n < e.length; n++) {
            var o = e[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
        }
    }

    function c(t, e) {
        return (c = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    function u(t) {
        var e = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
            } catch (t) {
                return !1
            }
        }();
        return function() {
            var n, o = h(t);
            if (e) {
                var i = h(this).constructor;
                n = Reflect.construct(o, arguments, i)
            } else n = o.apply(this, arguments);
            return f(this, n)
        }
    }

    function f(t, e) {
        return !e || "object" !== a(e) && "function" != typeof e ? function(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function h(t) {
        return (h = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }
    var d = function(t) {
        ! function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && c(t, e)
        }(f, t);
        var e, n, o, a = u(f);

        function f(t, e) {
            var n;
            return function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, f), s((n = a.call(this, t, e)).selectors, {
                $sourcesContainer: ".js-m-artikelautordatum__sources-container",
                $toggle: ".m-artikelautordatum__sources-toggle",
                $content: ".m-artikelautordatum__sources-content"
            }), s(n.bindings, {
                handleToggleLinkClick: "click:$toggle"
            }), n
        }
        return e = f, o = [{
            key: "className",
            get: function() {
                return "base.modules.m-artikelautordatum/Component"
            }
        }], (n = [{
            key: "prepare",
            value: function() {
                this.application.viewport.signals.changed.add(this.handleResize.bind(this))
            }
        }, {
            key: "handleToggleLinkClick",
            value: function(t) {
                this.$root.toggleClass(i.State.OPENED), this.$root.hasClass(i.State.OPENED) ? (this.expandContent(), this.$elements.sourcesContainer.attr(r.Aria.HIDDEN, "false"), this.$elements.toggle.attr(r.Aria.EXPANDED, "true")) : (this.$elements.sourcesContainer.css("height", ""), this.$elements.sourcesContainer.attr(r.Aria.HIDDEN, "true"), this.$elements.toggle.attr(r.Aria.EXPANDED, "false"))
            }
        }, {
            key: "handleResize",
            value: function() {
                this.$root.hasClass(i.State.OPENED) && this.expandContent()
            }
        }, {
            key: "expandContent",
            value: function() {
                this.$elements.sourcesContainer.height(this.$elements.content.outerHeight())
            }
        }]) && l(e.prototype, n), o && l(e, o), f
    }(o.Component);
    e.Component = d
}, function(t, e, n) {
    "use strict";
    n(4), n(5), n(6), n(0), n(12), n(8), n(1), n(9), n(2), n(3), n(7), Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.Component = void 0;
    var o, i = n(11),
        r = (o = n(14)) && o.__esModule ? o : {
            default: o
        };
    n(86);

    function a(t) {
        return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function s() {
        return (s = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
            }
            return t
        }).apply(this, arguments)
    }

    function l(t, e) {
        for (var n = 0; n < e.length; n++) {
            var o = e[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
        }
    }

    function c(t, e) {
        return (c = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    function u(t) {
        var e = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
            } catch (t) {
                return !1
            }
        }();
        return function() {
            var n, o = h(t);
            if (e) {
                var i = h(this).constructor;
                n = Reflect.construct(o, arguments, i)
            } else n = o.apply(this, arguments);
            return f(this, n)
        }
    }

    function f(t, e) {
        return !e || "object" !== a(e) && "function" != typeof e ? function(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function h(t) {
        return (h = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }
    var d = function(t) {
        ! function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && c(t, e)
        }(a, t);
        var e, n, o, i = u(a);

        function a(t, e) {
            var n;
            return function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, a), (n = i.call(this, t, e)).$gallery = [], n.$images = null, n.isDragging = !1, s(n.selectors, {
                $image: ".js-m-artikelbild__image-wrapper"
            }), s(n.bindings, {
                handleImageClick: "click:$image",
                handleDragStart: "tapstart:$root",
                handleDragMove: "tapmove:$root"
            }), n
        }
        return e = a, o = [{
            key: "className",
            get: function() {
                return "base.modules.m-artikelbild/Component"
            }
        }], (n = [{
            key: "prepare",
            value: function() {}
        }, {
            key: "handleDragStart",
            value: function(t, e) {
                this.log("handleDragStart", e), this.isDragging = !1
            }
        }, {
            key: "handleDragMove",
            value: function(t, e) {
                this.log("handleDragMove", e), this.isDragging = !0
            }
        }, {
            key: "handleImageClick",
            value: function(t) {
                var e = (0, r.default)(t.currentTarget)[0].dataset.zoom,
                    n = (0, r.default)(this.selectors.$image),
                    o = [],
                    i = 0;
                n.each((function(t) {
                    var n = (0, r.default)(this)[0].dataset.zoom,
                        a = (0, r.default)(this)[0].dataset.headline,
                        s = (0, r.default)(this)[0].dataset.caption,
                        l = (0, r.default)(this)[0].dataset.copyright,
                        c = (0, r.default)(this)[0].dataset.cid,
                        u = (0, r.default)(this)[0].dataset.filename;
                    "" !== a && (a = '<span class="m-artikelbild__fancyboxcaptionheadline">' + a + "</span>"), "" !== s && (s = '<span class="m-artikelbild__fancyboxcaptiontext">' + s + "</span>"), "" !== l && (l = '<span class="m-artikelbild__fancyboxcopyright">' + l + "</span>"), o.push({
                        src: n,
                        caption: a + "" + s + l,
                        contentId: c,
                        fileName: u
                    }), n === e && (i = t)
                })), !1 === this.isDragging && r.default.fancybox.open(o, {
                    onActivate: function(t) {
                        t.jumpTo(i)
                    },
                    afterShow: function(t, e) {
                        tk.webAnalytics && tk.webAnalytics.trackAction("lightbox zeigt: " + e.fileName + " " + e.contentId)
                    },
                    baseClass: "m-artikelbild__fancybox",
                    buttons: ["close"],
                    idleTime: 10,
                    hideScrollbar: !0,
                    toolbar: !0,
                    infobar: !1,
                    lang: "de",
                    i18n: {
                        de: {
                            CLOSE: "Schliessen",
                            NEXT: "Weiter",
                            PREV: "Zurück",
                            ERROR: "Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es später nochmal.",
                            FULL_SCREEN: "Vollbild",
                            DOWNLOAD: "Herunterladen",
                            ZOOM: "Maßstab"
                        }
                    },
                    touch: {
                        vertical: !0,
                        momentum: !1
                    },
                    type: "image",
                    animationEffect: "fade",
                    transitionEffect: "fade",
                    loop: !1,
                    image: {
                        preload: !0
                    }
                })
            }
        }]) && l(e.prototype, n), o && l(e, o), a
    }(i.Component);
    e.Component = d
}, function(t, e, n) {
    "use strict";
    n(4), n(5), n(6), n(0), n(12), n(8), n(1), n(9), n(2), n(3), n(7), Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.Component = void 0;
    var o, i = n(11),
        r = (o = n(14)) && o.__esModule ? o : {
            default: o
        },
        a = n(13);

    function s(t) {
        return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function l() {
        return (l = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
            }
            return t
        }).apply(this, arguments)
    }

    function c(t, e) {
        for (var n = 0; n < e.length; n++) {
            var o = e[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
        }
    }

    function u(t, e) {
        return (u = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    function f(t) {
        var e = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
            } catch (t) {
                return !1
            }
        }();
        return function() {
            var n, o = d(t);
            if (e) {
                var i = d(this).constructor;
                n = Reflect.construct(o, arguments, i)
            } else n = o.apply(this, arguments);
            return h(this, n)
        }
    }

    function h(t, e) {
        return !e || "object" !== s(e) && "function" != typeof e ? function(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function d(t) {
        return (d = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }
    n(61);
    var p = function(t) {
        ! function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && u(t, e)
        }(s, t);
        var e, n, o, i = f(s);

        function s(t, e) {
            var n;
            return function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, s), (n = i.call(this, t, e)).waypoint = window.Waypoint, l(n.selectors, {
                $navigation: ".m-artikelserie__navigation"
            }), l(n.bindings, {}), n
        }
        return e = s, o = [{
            key: "className",
            get: function() {
                return "base.modules.m-artikelserie/Component"
            }
        }], (n = [{
            key: "activate",
            value: function() {
                this.setWaypoints()
            }
        }, {
            key: "handleHeight",
            value: function() {
                this.waypoint.refreshAll()
            }
        }, {
            key: "setWaypoints",
            value: function() {
                var t = this;
                new this.waypoint({
                    element: document.querySelector(".g-artikel__content, .g-fachartikel__content"),
                    handler: function(e) {
                        "down" === e ? (0, r.default)(t.$elements.navigation).addClass(a.State.VISIBLE) : (0, r.default)(t.$elements.navigation).removeClass(a.State.VISIBLE)
                    },
                    offset: "25%"
                }), new this.waypoint({
                    element: document.querySelector(".g-artikel__content, .g-fachartikel__content"),
                    handler: function(e) {
                        "down" === e ? (0, r.default)(t.$elements.navigation).removeClass(a.State.VISIBLE) : (0, r.default)(t.$elements.navigation).addClass(a.State.VISIBLE)
                    },
                    offset: function() {
                        return -this.element.clientHeight
                    }
                })
            }
        }]) && c(e.prototype, n), o && c(e, o), s
    }(i.Component);
    e.Component = p
}, function(t, e, n) {
    "use strict";
    n(4), n(5), n(6), n(0), n(12), n(8), n(1), n(9), n(2), n(3), n(7), Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.Component = void 0;
    var o = n(11),
        i = n(13);

    function r(t) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function a() {
        return (a = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
            }
            return t
        }).apply(this, arguments)
    }

    function s(t, e) {
        for (var n = 0; n < e.length; n++) {
            var o = e[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
        }
    }

    function l(t, e) {
        return (l = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    function c(t) {
        var e = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
            } catch (t) {
                return !1
            }
        }();
        return function() {
            var n, o = f(t);
            if (e) {
                var i = f(this).constructor;
                n = Reflect.construct(o, arguments, i)
            } else n = o.apply(this, arguments);
            return u(this, n)
        }
    }

    function u(t, e) {
        return !e || "object" !== r(e) && "function" != typeof e ? function(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function f(t) {
        return (f = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }
    var h = function(t) {
        ! function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && l(t, e)
        }(u, t);
        var e, n, o, r = c(u);

        function u(t, e) {
            var n;
            return function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, u), a((n = r.call(this, t, e)).selectors, {
                $links: ".m-breadcrumb__link",
                $expander: ".m-breadcrumb__expander"
            }), a(n.bindings, {
                handleExpanderClick: "click:$expander",
                handleExpanderFocus: "focusin:$expander"
            }), n
        }
        return e = u, o = [{
            key: "className",
            get: function() {
                return "base.modules.m-breadcrumb/Component"
            }
        }], (n = [{
            key: "handleExpanderClick",
            value: function(t) {
                this.$elements.root.addClass(i.State.OPENED), this.$elements.links[1].focus()
            }
        }, {
            key: "handleExpanderFocus",
            value: function(t) {
                this.application.viewport.keyboardFocus && this.handleExpanderClick()
            }
        }]) && s(e.prototype, n), o && s(e, o), u
    }(o.Component);
    e.Component = h
}, function(t, e, n) {
    "use strict";
    n(4), n(5), n(6), n(0), n(8), n(1), n(9), n(2), n(3), n(7), Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.Component = void 0;
    var o, i = n(11),
        r = (o = n(14)) && o.__esModule ? o : {
            default: o
        },
        a = n(22);

    function s(t) {
        return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function l(t, e) {
        for (var n = 0; n < e.length; n++) {
            var o = e[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
        }
    }

    function c(t, e) {
        return (c = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    function u(t) {
        var e = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
            } catch (t) {
                return !1
            }
        }();
        return function() {
            var n, o = h(t);
            if (e) {
                var i = h(this).constructor;
                n = Reflect.construct(o, arguments, i)
            } else n = o.apply(this, arguments);
            return f(this, n)
        }
    }

    function f(t, e) {
        return !e || "object" !== s(e) && "function" != typeof e ? function(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function h(t) {
        return (h = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }
    var d = function(t) {
        ! function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && c(t, e)
        }(f, t);
        var e, n, o, i = u(f);

        function f(t, e) {
            var n;
            return function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, f), (n = i.call(this, t, e)).$window = (0, r.default)(window), n.$fabButton = (0, r.default)(document.querySelector(".js-m-contactfab .e-fab")), n
        }
        return e = f, o = [{
            key: "className",
            get: function() {
                return "base.modules.m-contactfab/Component"
            }
        }], (n = [{
            key: "triggerButtonCollapse",
            value: function() {
                this.$fabButton.addClass("is-collapsed")
            }
        }, {
            key: "triggerButtonExpansion",
            value: function() {
                this.$fabButton.removeClass("is-collapsed")
            }
        }, {
            key: "prepare",
            value: function() {
                this.collapseMode = this.$root.data("collapse-mode"), this.scrollStartOffset = this.$root.data("scroll-start-offset"), this.scrollEndOffset = this.$root.data("scroll-end-offset"), this.minScrollDistanceCollapsed = this.$root.data("min-scroll-distance-collapsed"), this.$window.scroll(this.handleScroll.bind(this)), "object" === s(this.$fabButton) && null !== this.$fabButton && "addEventListener" in this.$fabButton && this.$fabButton.addEventListener("touchstart", (function() {}), !1)
            }
        }, {
            key: "handleScroll",
            value: function() {
                if ("mobile" === this.collapseMode && (0, a.isMobile)(this.application) || "desktop" === this.collapseMode && !(0, a.isMobile)(this.application) || "always" === this.collapseMode) {
                    var t = this.$window.scrollTop() > 0 ? this.$window.scrollTop() : 0,
                        e = t <= this.scrollStartOffset,
                        n = t + this.scrollEndOffset + this.$window.height() >= (0, r.default)(document).height(),
                        o = (0, r.default)(document).height() - this.$window.height() - this.scrollStartOffset - this.scrollEndOffset >= this.minScrollDistanceCollapsed;
                    e || n || !o ? this.triggerButtonExpansion() : this.triggerButtonCollapse()
                }
            }
        }]) && l(e.prototype, n), o && l(e, o), f
    }(i.Component);
    e.Component = d
}, function(t, e, n) {
    "use strict";
    n(4), n(5), n(6), n(16), n(42), n(0), n(84), n(12), n(8), n(1), n(9), n(2), n(3), n(7), Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.Component = void 0;
    var o, i = n(11),
        r = n(13),
        a = (o = n(14)) && o.__esModule ? o : {
            default: o
        };

    function s(t) {
        return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function l() {
        return (l = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
            }
            return t
        }).apply(this, arguments)
    }

    function c(t, e) {
        for (var n = 0; n < e.length; n++) {
            var o = e[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
        }
    }

    function u(t, e) {
        return (u = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    function f(t) {
        var e = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
            } catch (t) {
                return !1
            }
        }();
        return function() {
            var n, o = d(t);
            if (e) {
                var i = d(this).constructor;
                n = Reflect.construct(o, arguments, i)
            } else n = o.apply(this, arguments);
            return h(this, n)
        }
    }

    function h(t, e) {
        return !e || "object" !== s(e) && "function" != typeof e ? function(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function d(t) {
        return (d = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }
    var p = function(t) {
        ! function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && u(t, e)
        }(s, t);
        var e, n, o, i = f(s);

        function s(t, e) {
            var n;
            return function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, s), (n = i.call(this, t, e)).yesTriggered = !1, n.noTriggered = !1, n.submitClicked = !1, l(n.selectors, {
                $formOptions: ".m-feedback__form-options",
                $options: ".m-feedback__options",
                $btnPositive: ".m-feedback__button-yes",
                $btnNegative: ".m-feedback__button-no",
                $headline: ".m-feedback__headline",
                $yes: ".js-m-feedback__option-yes",
                $no: ".js-m-feedback__option-no",
                $formElement: ".m-feedback__rate",
                $form: ".m-feedback__form",
                $formContent: ".m-feedback__form-content",
                $textarea: ".m-feedback__form-comment",
                $commentChars: ".m-feedback__form-commentchars",
                $replySubmit: ".m-feedback__reply-submit",
                $done: ".m-feedback__done",
                $errorLiveRegion: ".m-feedback__errorregion",
                $errorLiveRegionContent: ".m-feedback__errorregioncontent",
                $errorRadioButtons: ".m-feedback--error",
                $errorHttp: ".m-feedback__httperror"
            }), l(n.bindings, {
                handleClickPositive: "click:$btnPositive",
                handleClickNegative: "click:$btnNegative",
                handleTextarea: "keyup change:$textarea",
                handleReplySubmit: "click:$replySubmit",
                preventKeydown: "keydown:$no"
            }), n
        }
        return e = s, o = [{
            key: "className",
            get: function() {
                return "base.module.m-feedback/Component"
            }
        }], (n = [{
            key: "prepare",
            value: function() {
                this.keepMinHeight()
            }
        }, {
            key: "handleClickPositive",
            value: function() {
                var t = this;
                t.yesTriggered || (t.yesTriggered = !0, t.disableFurtherTrackactionCalls(), t.submitService({
                    helpful: "ja"
                }, (function() {
                    t.closeNegativeFeedbackFormAnimated()
                })))
            }
        }, {
            key: "handleClickNegative",
            value: function() {
                this.noTriggered || (this.noTriggered = !0, this.disableFurtherTrackactionCalls(), this.openNegativeFeedbackFormAnimated())
            }
        }, {
            key: "disableFurtherTrackactionCalls",
            value: function() {
                this.$elements.btnPositive.removeAttr("data-tk-trackaction"), this.$elements.btnNegative.removeAttr("data-tk-trackaction")
            }
        }, {
            key: "handleTextarea",
            value: function() {
                var t = this.getCharsLeft();
                this.$elements.commentChars.find("span").text(t), t <= 0 && this.setLiveRegion(this.$root.data("errormessagetextarea"))
            }
        }, {
            key: "handleReplySubmit",
            value: function(t) {
                t.preventDefault();
                var e = this;
                if (!e.submitClicked) {
                    e.submitClicked = !0;
                    var n = {};
                    a.default.each(this.$elements.formElement.serializeArray(), (function(t, e) {
                        n[e.name] = e.value
                    })), e.noTriggered && (n.helpful = "nein"), this.submitService(n, (function() {
                        e.closeNegativeFeedbackFormAnimated()
                    }))
                }
            }
        }, {
            key: "preventKeydown",
            value: function(t) {
                if (["Up", "Down", "Left", "Right"].indexOf(t.key) > -1) return t.preventDefault(), !1
            }
        }, {
            key: "keepMinHeight",
            value: function() {
                this.$root.css("min-height", this.$root.css("height"))
            }
        }, {
            key: "getCharsLeft",
            value: function() {
                return parseInt(this.$elements.commentChars.data("maxchars")) - this.$elements.textarea.val().length
            }
        }, {
            key: "setLiveRegion",
            value: function(t) {
                var e = this.$elements.errorLiveRegion,
                    n = this.$elements.errorLiveRegionContent;
                e.css("clip", "auto"), n.html().indexOf(t) >= 0 ? n.html(n.html() + "&nbsp;") : n.html(t), n.css("visibility", "hidden"), n.css("visibility", "visible")
            }
        }, {
            key: "clearLiveRegion",
            value: function() {
                this.$elements.errorLiveRegionContent.html("")
            }
        }, {
            key: "closeNegativeFeedbackFormAnimated",
            value: function() {
                var t = this;
                a.default.Velocity.animate(t.$elements.headline, "slideUp", {
                    duration: 500
                }), a.default.Velocity.animate(t.$elements.options, "slideUp", {
                    duration: 300
                });
                var e = this.yesTriggered ? this.$elements.no : this.$elements.no.find(".m-feedback__form");
                a.default.Velocity.animate(e, "slideUp", {
                    duration: 500,
                    complete: function() {
                        t.$elements.yes.addClass(r.State.CLOSED), a.default.Velocity.animate(t.$elements.yes, {
                            width: "100%",
                            marginLeft: 0
                        }, {
                            duration: 100
                        })
                    }
                }), a.default.Velocity.animate(this.$elements.btnPositive, {
                    opacity: 0
                }, {
                    duration: 300,
                    delay: 0,
                    complete: function() {
                        var e = t.$elements.yes.find(".m-feedback__headline"),
                            n = t.yesTriggered ? e : t.$elements.done;
                        a.default.Velocity.animate(n, "slideDown", {
                            duration: 300,
                            delay: 100,
                            complete: function() {
                                a.default.Velocity.animate(n, "fadeIn", {
                                    duration: 300
                                })
                            }
                        }), a.default.Velocity.animate(t.$elements.btnPositive, "fadeOut", {
                            duration: 100
                        })
                    }
                })
            }
        }, {
            key: "openNegativeFeedbackFormAnimated",
            value: function() {
                var t = this,
                    e = [.72, .23, .24, .76];
                this.$elements.errorHttp.html(""), a.default.Velocity.animate(this.$elements.headline, "slideUp", {
                    duration: 200,
                    delay: 0
                }), a.default.Velocity.animate(t.$elements.options, "slideUp", {
                    duration: 500
                }), a.default.Velocity.animate(t.$elements.no, {
                    width: "100%"
                }, {
                    duration: 600,
                    complete: function() {
                        t.$elements.no.addClass(r.State.CLOSED)
                    }
                }), a.default.Velocity.animate(this.$elements.btnNegative, {
                    opacity: 0
                }, {
                    duration: 300,
                    delay: 250,
                    complete: function() {
                        a.default.Velocity.animate(t.$elements.btnNegative, "slideUp", {
                            duration: 100
                        }), a.default.Velocity.animate(t.$elements.form, "slideDown", {
                            duration: 300,
                            easing: e
                        }), a.default.Velocity.animate(t.$elements.formContent, "fadeIn", {
                            duration: 100,
                            delay: 250,
                            easing: e,
                            complete: function() {
                                t.$elements.textarea.focus()
                            }
                        })
                    }
                })
            }
        }, {
            key: "submitService",
            value: function(t, e) {
                var n = this.$root.data("service"),
                    o = {
                        contentId: this.$elements.formElement.find('[name="contentId"]').val()
                    },
                    i = {
                        _CSRFToken: this.$elements.formElement.find('[name="_CSRFToken"]').val()
                    };
                "" !== n && void 0 !== t && (this.serviceRequest = a.default.ajax({
                    url: n,
                    method: "POST",
                    data: a.default.extend(o, i, t)
                }).done(this.handleAjaxResultsDone.bind(this, e)).fail(this.handleAjaxResultsFail.bind(this)))
            }
        }, {
            key: "handleAjaxResultsDone",
            value: function(t) {
                this.$elements.errorHttp.html(""), "function" == typeof t && t()
            }
        }, {
            key: "handleAjaxResultsFail",
            value: function(t, e) {
                this.log(e + ": HTTP Status: " + t.status + ", responseText: " + t.responseText), this.$elements.errorHttp.html(this.$root.data("errorhttp")).wrapInner('<div class="m-feedback__httperrorcontent"></div>'), this.setLiveRegion(this.$root.data("errorhttp"))
            }
        }]) && c(e.prototype, n), o && c(e, o), s
    }(i.Component);
    e.Component = p
}, function(t, e, n) {
    "use strict";
    n(4), n(5), n(6), n(0), n(12), n(8), n(1), n(9), n(2), n(3), n(7), Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.Component = void 0;
    var o, i = n(11),
        r = (o = n(14)) && o.__esModule ? o : {
            default: o
        },
        a = n(13);

    function s(t) {
        return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function l() {
        return (l = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
            }
            return t
        }).apply(this, arguments)
    }

    function c(t, e) {
        for (var n = 0; n < e.length; n++) {
            var o = e[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
        }
    }

    function u(t, e) {
        return (u = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    function f(t) {
        var e = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
            } catch (t) {
                return !1
            }
        }();
        return function() {
            var n, o = d(t);
            if (e) {
                var i = d(this).constructor;
                n = Reflect.construct(o, arguments, i)
            } else n = o.apply(this, arguments);
            return h(this, n)
        }
    }

    function h(t, e) {
        return !e || "object" !== s(e) && "function" != typeof e ? function(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function d(t) {
        return (d = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }
    n(61);
    var p = function(t) {
        ! function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && u(t, e)
        }(s, t);
        var e, n, o, i = f(s);

        function s(t, e) {
            var n;
            return function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, s), (n = i.call(this, t, e)).waypoint = window.Waypoint, l(n.selectors, {}), l(n.bindings, {
                handleClick: "click:$root"
            }), n
        }
        return e = s, o = [{
            key: "className",
            get: function() {
                return "base.modules.m-floatingbutton/Component"
            }
        }], (n = [{
            key: "prepare",
            value: function() {
                this.setWaypoints()
            }
        }, {
            key: "handleClick",
            value: function() {
                this.isArrow() && this.handleArrow()
            }
        }, {
            key: "handleArrow",
            value: function() {
                var t = (0, r.default)(".js-m-floatingbutton__jump");
                if (t.length > 0) {
                    var e = this.$root.data("offset");
                    this.application.viewport.scrollTo(t, void 0, e)
                }
            }
        }, {
            key: "isArrow",
            value: function() {
                return this.$root.hasClass("m-floatingbutton--arrow")
            }
        }, {
            key: "setWaypoints",
            value: function() {
                var t = (0, r.default)(".js-m-floatingbutton__entry .js-fab-start"),
                    e = (0, r.default)(".g-footer"),
                    n = this;
                t.length > 0 && new n.waypoint({
                    element: t[0],
                    handler: function(t) {
                        "down" === t ? n.$elements.root.addClass(a.State.VISIBLE) : n.$elements.root.removeClass(a.State.VISIBLE)
                    },
                    offset: n.getFadeInOffset()
                }), e.length > 0 && new n.waypoint({
                    element: e[0],
                    handler: function(t) {
                        "down" === t ? n.$elements.root.removeClass(a.State.VISIBLE) : n.$elements.root.addClass(a.State.VISIBLE)
                    },
                    offset: "100%"
                })
            }
        }, {
            key: "getFadeInOffset",
            value: function() {
                return this.application.viewport.getTopOffset() + 10
            }
        }]) && c(e.prototype, n), o && c(e, o), s
    }(i.Component);
    e.Component = p
}, function(t, e, n) {
    "use strict";
    n(4), n(5), n(6), n(23), n(16), n(0), n(12), n(258), n(8), n(1), n(40), n(9), n(259), n(2), n(3), n(7), Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.Component = void 0;
    var o, i = n(11),
        r = n(13),
        a = n(85),
        s = n(43),
        l = n(46),
        c = n(109),
        u = (o = n(14)) && o.__esModule ? o : {
            default: o
        };

    function f(t) {
        return (f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function h() {
        return (h = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
            }
            return t
        }).apply(this, arguments)
    }

    function d(t, e) {
        for (var n = 0; n < e.length; n++) {
            var o = e[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
        }
    }

    function p(t, e, n) {
        return (p = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, e, n) {
            var o = function(t, e) {
                for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = b(t)););
                return t
            }(t, e);
            if (o) {
                var i = Object.getOwnPropertyDescriptor(o, e);
                return i.get ? i.get.call(n) : i.value
            }
        })(t, e, n || t)
    }

    function y(t, e) {
        return (y = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    function g(t) {
        var e = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
            } catch (t) {
                return !1
            }
        }();
        return function() {
            var n, o = b(t);
            if (e) {
                var i = b(this).constructor;
                n = Reflect.construct(o, arguments, i)
            } else n = o.apply(this, arguments);
            return m(this, n)
        }
    }

    function m(t, e) {
        return !e || "object" !== f(e) && "function" != typeof e ? function(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function b(t) {
        return (b = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }
    var v = function(t) {
        ! function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && y(t, e)
        }(f, t);
        var e, n, o, i = g(f);

        function f(t, e) {
            var n;
            return function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, f), (n = i.call(this, t, e)).signals.slideChanged = new l.Signal, n.viewport = new c.Viewport, n.slides = [], n.pageCount = 0, n.pageIndex = 0, n.itemsPerPage = 1, n.dragPercentThreshold = .2, n.dragPixelThreshold = 30, n.isTapping = !1, n.isDragging = !1, n.dragWidth = 0, n.dragPosition = 0, n.dragDirection = !1, n.dragDamping = .4, n.dragDistance = 0, h(n.selectors, {
                $stage: ".js-m-gallery__stage",
                $slides: ".js-m-gallery__slides",
                $allSlides: ".js-m-gallery__slides>*",
                $firstSlide: ".js-m-gallery__slides>*:eq(0)",
                $next: ".js-m-gallery__next",
                $prev: ".js-m-gallery__prev",
                $current: ".js-m-gallery__currentslide",
                $total: ".js-m-gallery__totalslides"
            }), h(n.bindings, {
                handlePrev: "click:$prev",
                handleNext: "click:$next",
                handleDragStart: "tapstart:$root",
                handleDragMove: "tapmove:$root",
                handleLeaveBody: "mouseleave:body",
                handleKeyboard: "keyup:$root",
                handleFocusInSlide: "focusin:$allSlides"
            }), n
        }
        return e = f, o = [{
            key: "className",
            get: function() {
                return "base.modules.m-gallery/Component"
            }
        }], (n = [{
            key: "prepare",
            value: function() {
                var t = this;
                return p(b(f.prototype), "prepare", this).call(this).then((function() {
                    t.$elements.root.find("img").on("dragstart", (function(t) {
                        return !1
                    })), t.$elements.root.on("dragstart", (function(t) {
                        return !1
                    })), t.application.viewport.signals.breakpointChanged.add(t.handleBreakpointChange.bind(t)), t.slides = [], t.$elements.slides.children().each((function(e, n) {
                        var o = (0, u.default)(n);
                        o.data("slide-index", e), t.slides.push(o)
                    })), "true" == t.$root.attr(a.Aria.HIDDEN) && t.$elements.slides.find("a").attr("tabindex", "-1")
                })).then(this.update.bind(this)).catch((function(e) {
                    t.log(e.stack ? e.stack : e)
                }))
            }
        }, {
            key: "handleFocusInSlide",
            value: function(t) {
                this.$elements.stage.get(0).scrollLeft = 0;
                var e = (0, u.default)(t.currentTarget).closest(this.selectors.$allSlides),
                    n = this.getPageByItemIndex(e.index());
                n !== this.pageIndex && this.goto(n, !0).then(function() {
                    this.$elements.stage.get(0).scrollLeft = 0
                }.bind(this))
            }
        }, {
            key: "handlePrev",
            value: function(t) {
                this.log("handlePrev"), this.goto("prev", !0)
            }
        }, {
            key: "handleNext",
            value: function(t) {
                this.log("handleNext"), this.goto("next", !0)
            }
        }, {
            key: "handleDragStart",
            value: function(t, e) {
                this.log("handleDragStart", e), (0, u.default)("body").one("tapend.m-gallery", this.handleDragEnd.bind(this)), this.isTapping = !0, this.isDragging = !1, this.dragPosition = e.position.x, this.dragWidth = this.$elements.stage.width(), this.$elements.slides.find(">*").removeClass(r.State.HIDDEN)
            }
        }, {
            key: "handleDragMove",
            value: function(t, e) {
                if (!this.isTapping) return !0;
                if (this.dragDistance = e.position.x - this.dragPosition, !this.isDragging && Math.abs(this.dragDistance) > this.dragPixelThreshold && (this.isDragging = !0), this.isDragging) {
                    this.dragDirection = this.dragDistance > 0 ? "prev" : "next";
                    var n = Math.abs(this.dragDistance) / this.dragWidth * 100;
                    n -= n * this.dragDamping, "next" == this.dragDirection && (n *= -1), this.animate(0, n)
                }
            }
        }, {
            key: "handleDragEnd",
            value: function(t, e) {
                this.isDragging && (Math.abs(this.dragDistance) / this.dragWidth > this.dragPercentThreshold ? this.goto(this.dragDirection, !0) : this.goto("current", !0)), this.isTapping = !1, this.isDragging = !1, (0, u.default)("body").off("tapend.m-gallery")
            }
        }, {
            key: "handleLeaveBody",
            value: function() {
                this.handleDragEnd()
            }
        }, {
            key: "handleKeyboard",
            value: function(t) {
                var e = (0, u.default)(t.target).data("direction");
                t.keyCode === s.KeyCode.LEFT && (this.$elements.prev.focus(), this.goto("prev", !0)), t.keyCode === s.KeyCode.RIGHT && (this.$elements.next.focus(), this.goto("next", !0)), t.keyCode === s.KeyCode.ENTER && ("prev" === e ? this.goto("prev", !0) : "next" === e && this.goto("next", !0))
            }
        }, {
            key: "handleBreakpointChange",
            value: function() {
                this.itemsPerPage !== this.getItemsPerPage() && this.goto("first", !1)
            }
        }, {
            key: "animate",
            value: function(t, e) {
                var n = this;
                return new Promise((function(o, i) {
                    var r = -100 * n.pageIndex + (e || 0) + "%";
                    u.default.Velocity(n.$elements.slides, "stop"), u.default.Velocity.animate(n.$elements.slides, {
                        translateX: r
                    }, {
                        duration: 1e3 * t,
                        easing: n.viewport.expoTweenT1,
                        complete: o,
                        queue: !1
                    })
                }))
            }
        }, {
            key: "update",
            value: function(t) {
                this.itemsPerPage = this.getItemsPerPage(), this.pageCount = Math.ceil(this.slides.length / this.itemsPerPage), this.pageIndex = Math.min(this.pageCount - 1, Math.max(0, this.pageIndex)), this.getItemsPerPage(), this.$elements.current.text(this.pageIndex + 1), this.$elements.total.text(this.pageCount), this.pageIndex < this.pageCount - 1 ? this.$elements.next.removeClass(r.State.HIDDEN).addClass(r.State.VISIBLE) : (this.$elements.next.is(":focus") && this.$elements.prev.focus(), this.$elements.next.removeClass(r.State.VISIBLE).addClass(r.State.HIDDEN)), this.pageIndex > 0 ? this.$elements.prev.removeClass(r.State.HIDDEN).addClass(r.State.VISIBLE) : (this.$elements.prev.is(":focus") && this.$elements.next.focus(), this.$elements.prev.removeClass(r.State.VISIBLE).addClass(r.State.HIDDEN)), this.$elements.slides.find(">*").removeClass(r.State.HIDDEN);
                var e = t ? 1 / (window.devicePixelRatio || 1) : 0;
                return this.animate(e).then(function() {
                    var t = this.$elements.slides.find(">*"),
                        e = this.getItemsPerPage(),
                        n = this.pageIndex * e,
                        o = n + e - 1,
                        i = function(t) {
                            return t < n || t > o
                        }.bind(this);
                    return t.filter(i).addClass(r.State.HIDDEN), Promise.resolve()
                }.bind(this))
            }
        }, {
            key: "getItemsPerPage",
            value: function() {
                var t = this.$elements.firstSlide.outerWidth(),
                    e = parseFloat(this.$elements.firstSlide.css("margin-right"));
                return Math.round(this.$elements.stage.outerWidth() / (t + e))
            }
        }, {
            key: "getPageByItemIndex",
            value: function(t) {
                return Math.floor(t / this.getItemsPerPage())
            }
        }, {
            key: "goto",
            value: function(t, e) {
                return this.log("goto", t), "current" === t || ("next" === t ? this.pageIndex++ : "prev" === t ? this.pageIndex-- : this.pageIndex = "first" === t ? 0 : "last" === t ? this.pageCount - 1 : parseInt(t, 10)), this.update(e)
            }
        }]) && d(e.prototype, n), o && d(e, o), f
    }(i.Component);
    e.Component = v
}, , , function(t, e, n) {
    "use strict";
    n(4), n(5), n(6), n(16), n(0), n(12), n(8), n(1), n(9), n(2), n(3), n(7), Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.Component = void 0;
    var o = n(11),
        i = n(31);

    function r(t) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function a() {
        return (a = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
            }
            return t
        }).apply(this, arguments)
    }

    function s(t, e) {
        for (var n = 0; n < e.length; n++) {
            var o = e[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
        }
    }

    function l(t, e) {
        return (l = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    function c(t) {
        var e = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
            } catch (t) {
                return !1
            }
        }();
        return function() {
            var n, o = f(t);
            if (e) {
                var i = f(this).constructor;
                n = Reflect.construct(o, arguments, i)
            } else n = o.apply(this, arguments);
            return u(this, n)
        }
    }

    function u(t, e) {
        return !e || "object" !== r(e) && "function" != typeof e ? function(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function f(t) {
        return (f = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }
    var h = function(t) {
        ! function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && l(t, e)
        }(u, t);
        var e, n, o, r = c(u);

        function u(t, e) {
            var n;
            return function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, u), (n = r.call(this, t, e)).$window = $(window), n.frameWaypoint = null, n.logoWaypoint = null, n.highlightClass = "m-kampagnenteaser--highlight", n.durationFactor = 1.4, a(n.selectors, {
                $logoContainer: ".m-kampagnenteaser__logo",
                $logo: ".m-kampagnenteaser__logoimg",
                $cmpFrame: ".m-kampagnenteaser__cmp-frame",
                $arrow: ".m-floatingbutton"
            }), a(n.bindings, {
                handleArrow: "click:$arrow"
            }), n
        }
        return e = u, o = [{
            key: "className",
            get: function() {
                return "base.modules.m-kampagnenteaser/Component"
            }
        }], (n = [{
            key: "prepare",
            value: function() {
                var t = this.$root.find(this.selectors.$logoContainer);
                this.isParallaxBreakpoint() && this.application.viewport.$window.scroll(this.handleScroll.bind(this)), t.length > 0 && (this.isHighlight() && this.setWaypoints(), this.application.viewport.signals.changed.add(this.handleStickyLogo.bind(this)), this.application.viewport.signals.changed.add(this.handleResize.bind(this)), this.$window.scroll(this.handleStickyLogo.bind(this)), this.handleStickyLogo())
            }
        }, {
            key: "setWaypoints",
            value: function() {
                var t = this,
                    e = this.application.viewport.waypoint;
                this.logoWaypoint = new e({
                    element: this.$elements.logo[0],
                    handler: function(e) {
                        "down" === e ? t.application.signals.showLogo.dispatch() : t.application.signals.hideLogo.dispatch()
                    },
                    offset: this.getLogoOffset()
                })
            }
        }, {
            key: "handleArrow",
            value: function(t) {
                t.stopImmediatePropagation();
                var e = this.$root,
                    n = parseInt(this.$root.css("height")) + 5;
                this.application.viewport.scrollTo(e, "slow", n)
            }
        }, {
            key: "handleStickyLogo",
            value: function() {
                void 0 === this.logoOffset && (this.logoOffset = this.$elements.logo[0].getBoundingClientRect().top + this.$elements.logo.height()), this.$window.height() < this.logoOffset - this.$window.scrollTop() ? this.setLogoSticky() : this.setLogoUnsticky()
            }
        }, {
            key: "handleResize",
            value: function() {
                this.setWaypoints(), delete this.logoOffset, this.setLogoUnsticky(), this.handleStickyLogo()
            }
        }, {
            key: "getLogoOffset",
            value: function() {
                return this.isExpandedBreakpoint() ? -parseInt(this.$elements.logo.css("height")) + this.application.viewport.getTopOffset() : -parseInt(this.$elements.logo.css("height"))
            }
        }, {
            key: "getScrollOffset",
            value: function() {
                return parseInt(this.$window.scrollTop())
            }
        }, {
            key: "handleScroll",
            value: function(t) {
                var e = .5 * this.getScrollOffset() * -1;
                (e > 0 || !this.isExpandedBreakpoint()) && (e = 0), this.$elements.cmpFrame.css("top", e + "px");
                var n = this.$elements.logo,
                    o = this.$elements.cmpFrame,
                    i = o.position().top,
                    r = o.outerHeight() - n.height(),
                    a = this.application.viewport.scrollY - i;
                a > r && (a = r)
            }
        }, {
            key: "isExpandedBreakpoint",
            value: function() {
                var t = this.application.viewport.breakpoint;
                return t === i.Breakpoints.APPLICATION || t === i.Breakpoints.DESKTOP || t === i.Breakpoints.TABLET || t === i.Breakpoints.MINITABLET
            }
        }, {
            key: "isParallaxBreakpoint",
            value: function() {
                var t = this.application.viewport.breakpoint;
                return t === i.Breakpoints.APPLICATION || t === i.Breakpoints.DESKTOP
            }
        }, {
            key: "isHighlight",
            value: function() {
                return this.$root.hasClass(this.highlightClass)
            }
        }, {
            key: "setLogoSticky",
            value: function() {
                this.$elements.logoContainer.addClass("is-sticky")
            }
        }, {
            key: "setLogoUnsticky",
            value: function() {
                this.$elements.logoContainer.removeClass("is-sticky")
            }
        }]) && s(e.prototype, n), o && s(e, o), u
    }(o.Component);
    e.Component = h
}, function(t, e, n) {
    "use strict";

    function o(t) {
        return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function i() {
        return (i = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
            }
            return t
        }).apply(this, arguments)
    }

    function r(t, e) {
        for (var n = 0; n < e.length; n++) {
            var o = e[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
        }
    }

    function a(t, e) {
        return (a = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    function s(t) {
        var e = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
            } catch (t) {
                return !1
            }
        }();
        return function() {
            var n, o = c(t);
            if (e) {
                var i = c(this).constructor;
                n = Reflect.construct(o, arguments, i)
            } else n = o.apply(this, arguments);
            return l(this, n)
        }
    }

    function l(t, e) {
        return !e || "object" !== o(e) && "function" != typeof e ? function(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function c(t) {
        return (c = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }
    n(4), n(5), n(6), n(0), n(12), n(8), n(1), n(9), n(2), n(3), n(7), Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.Component = void 0;
    var u = function(t) {
        ! function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && a(t, e)
        }(c, t);
        var e, n, o, l = s(c);

        function c(t, e) {
            var n;
            return function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, c), i((n = l.call(this, t, e)).selectors, {
                $dropdownSelect: ".js-e-dropdown__select"
            }), i(n.bindings, {
                handleDropdownChange: "change:$dropdownSelect"
            }), n
        }
        return e = c, o = [{
            key: "className",
            get: function() {
                return "base.module.m-landingpagehero/Component"
            }
        }], (n = [{
            key: "handleDropdownChange",
            value: function(t) {
                var e = $(t.currentTarget).val();
                this.log(e), window.location.href = e
            }
        }]) && r(e.prototype, n), o && r(e, o), c
    }(n(11).Component);
    e.Component = u
}, function(t, e, n) {
    "use strict";
    n(4), n(5), n(6), n(0), n(12), n(8), n(1), n(9), n(26), n(2), n(3), n(44), n(7), Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.Component = void 0;
    var o, i = n(11),
        r = n(13),
        a = (o = n(14)) && o.__esModule ? o : {
            default: o
        };

    function s(t) {
        return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function l() {
        return (l = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
            }
            return t
        }).apply(this, arguments)
    }

    function c(t, e) {
        for (var n = 0; n < e.length; n++) {
            var o = e[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
        }
    }

    function u(t, e) {
        return (u = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    function f(t) {
        var e = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
            } catch (t) {
                return !1
            }
        }();
        return function() {
            var n, o = d(t);
            if (e) {
                var i = d(this).constructor;
                n = Reflect.construct(o, arguments, i)
            } else n = o.apply(this, arguments);
            return h(this, n)
        }
    }

    function h(t, e) {
        return !e || "object" !== s(e) && "function" != typeof e ? function(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function d(t) {
        return (d = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }
    var p = function(t) {
        ! function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && u(t, e)
        }(s, t);
        var e, n, o, i = f(s);

        function s(t, e) {
            var n;
            return function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, s), (n = i.call(this, t, e)).contentSelector = ".js-m_lesefortschritt__content", n.aboveContent = !1, l(n.selectors, {}), l(n.bindings, {}), n
        }
        return e = s, o = [{
            key: "className",
            get: function() {
                return "base.module.m-lesefortschritt/Component"
            }
        }], (n = [{
            key: "prepare",
            value: function() {
                this.$content = (0, a.default)(this.contentSelector), this.$content.length > 0 && (this.application.viewport.$window.scroll(this.handleScroll.bind(this)), this.setWaypoints())
            }
        }, {
            key: "setWaypoints",
            value: function() {
                var t = this.application.viewport.waypoint,
                    e = this;
                new t({
                    element: e.$content[0],
                    handler: function(t) {
                        "down" === t ? (e.setReadingValue(), e.aboveContent = !0) : (e.setReadingValue(0), e.aboveContent = !1)
                    },
                    offset: e.application.viewport.getTopOffset()
                }), new t({
                    element: e.$content[0],
                    handler: function(t) {
                        var n = e.$root;
                        "down" === t ? (e.aboveContent = !1, n.addClass(r.State.HIDDEN)) : (e.aboveContent = !0, n.removeClass(r.State.HIDDEN))
                    },
                    offset: e.application.viewport.getTopOffset() - e.getContentHeight()
                })
            }
        }, {
            key: "setReadingValue",
            value: function(t) {
                void 0 === t && (t = this.getScrollPercent()), t > 100 && (t = 100), this.$root.css("width", t + "%")
            }
        }, {
            key: "getScrollPercent",
            value: function() {
                var t = this.$content.offset().top,
                    e = this.getContentHeight();
                return 100 * (this.application.viewport.scrollY + this.application.viewport.getTopOffset() - t) / e
            }
        }, {
            key: "handleScroll",
            value: function() {
                this.aboveContent && this.setReadingValue()
            }
        }, {
            key: "getContentHeight",
            value: function() {
                return parseFloat(this.$content.css("height").replace("px", ""))
            }
        }]) && c(e.prototype, n), o && c(e, o), s
    }(i.Component);
    e.Component = p
}, function(t, e, n) {
    "use strict";
    n(4), n(5), n(6), n(16), n(0), n(12), n(8), n(1), n(9), n(2), n(3), n(7), Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.Component = void 0;
    var o = n(11),
        i = n(13),
        r = n(31),
        a = n(46);

    function s(t) {
        return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function l() {
        return (l = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
            }
            return t
        }).apply(this, arguments)
    }

    function c(t, e) {
        for (var n = 0; n < e.length; n++) {
            var o = e[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
        }
    }

    function u(t, e) {
        return (u = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    function f(t) {
        var e = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
            } catch (t) {
                return !1
            }
        }();
        return function() {
            var n, o = d(t);
            if (e) {
                var i = d(this).constructor;
                n = Reflect.construct(o, arguments, i)
            } else n = o.apply(this, arguments);
            return h(this, n)
        }
    }

    function h(t, e) {
        return !e || "object" !== s(e) && "function" != typeof e ? function(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function d(t) {
        return (d = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }
    var p = function(t) {
        ! function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && u(t, e)
        }(h, t);
        var e, n, o, s = f(h);

        function h(t, e) {
            var n;
            return function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, h), (n = s.call(this, t, e)).SERVICE_URL_DATA_ATTRIBUTE = "serviceurl", n.lastFocusedItemId = void 0, n.lastItemKeyboardFocused = !1, l(n.selectors, {
                level1Container: ".m-magazinfilter__level1",
                toggle: ".m-magazinfilter__toggle",
                options: ".m-magazinfilter__options",
                expander: ".m-magazinfilter__expander",
                filterItem: ".js-m-magazinfilter__item",
                filterItemLevel2: ".js-m-magazinfilter__level2 .js-m-magazinfilter__item",
                skipFilterLink: ".js-m-magazinfilter__skipfilter"
            }), l(n.bindings, {
                handleToggleClick: "click:$root:" + n.selectors.toggle,
                handleFilterItemClick: "click:$root:" + n.selectors.filterItemLevel2,
                handleSkipFilterLinkClick: "click:$root:" + n.selectors.skipFilterLink,
                handleLevel1FocusIn: "focusin:$root:" + n.selectors.expander + " " + n.selectors.filterItem
            }), n.signals.requestFilter = new a.Signal, n.signals.focusFirstItem = new a.Signal, n
        }
        return e = h, o = [{
            key: "className",
            get: function() {
                return "base.modules.m-magazinfilter/Component"
            }
        }], (n = [{
            key: "prepare",
            value: function() {
                this.application.viewport.signals.changed.add(this.handleResize.bind(this)), this.checkInitialOpened()
            }
        }, {
            key: "handleToggleClick",
            value: function(t) {
                this.$root.find(this.selectors.level1Container).hasClass(i.State.OPENED) ? this.closeLevel1Expander() : this.openLevel1Expander()
            }
        }, {
            key: "handleLevel1FocusIn",
            value: function(t) {
                this.openLevel1Expander()
            }
        }, {
            key: "handleFilterItemClick",
            value: function(t) {
                t.preventDefault();
                var e = $(t.currentTarget),
                    n = e.data(this.SERVICE_URL_DATA_ATTRIBUTE),
                    o = e.attr("href");
                this.application.history.push(o), this.signals.requestFilter.dispatch(n)
            }
        }, {
            key: "handleSkipFilterLinkClick",
            value: function(t) {
                t.preventDefault();
                var e = $(t.currentTarget).hasClass(i.State.KEYBOARD_FOCUS);
                this.signals.focusFirstItem.dispatch(e)
            }
        }, {
            key: "handleResize",
            value: function() {
                this.$root.find(this.selectors.level1Container).hasClass(i.State.OPENED) && (this.closeLevel1Expander(), this.openLevel1Expander())
            }
        }, {
            key: "updateFilter",
            value: function(t) {
                this.storeFocusBeforeUpdate(), this.$root.empty(), this.$root.html(t), this.restoreFocusAfterUpdate(), this.checkInitialOpened()
            }
        }, {
            key: "storeFocusBeforeUpdate",
            value: function() {
                var t = this.$root.find(":focus");
                this.lastFocusedItemId = t.data("contentid"), this.lastItemKeyboardFocused = t.hasClass(i.State.KEYBOARD_FOCUS)
            }
        }, {
            key: "restoreFocusAfterUpdate",
            value: function() {
                if (this.isOpenedInitialBreakpoint()) {
                    this.lastItemKeyboardFocused && (this.application.viewport.keyboardFocus = this.lastItemKeyboardFocused);
                    var t = this.$root.find('[data-contentid="'.concat(this.lastFocusedItemId, '"]')),
                        e = this.$root.find(this.selectors.level1Container);
                    $.contains(e.get(0), t.get(0)) && e.addClass(i.State.OPENED_INITIAL), t.focus(), this.lastItemKeyboardFocused = !1, this.lastFocusedItemId = void 0
                }
            }
        }, {
            key: "checkInitialOpened",
            value: function() {
                var t = this.$root.find(this.selectors.level1Container);
                t.hasClass(i.State.OPENED_INITIAL) && this.isOpenedInitialBreakpoint() && (t.addClass(i.State.OPENED), this.openLevel1Expander()), t.removeClass(i.State.OPENED_INITIAL)
            }
        }, {
            key: "openLevel1Expander",
            value: function() {
                var t = this.$root.find(this.selectors.level1Container),
                    e = this.$root.find(this.selectors.options).outerHeight(),
                    n = this.$root.find(this.selectors.expander);
                t.addClass(i.State.OPENED), n.height(e)
            }
        }, {
            key: "closeLevel1Expander",
            value: function() {
                var t = this.$root.find(this.selectors.level1Container),
                    e = this.$root.find(this.selectors.expander);
                t.removeClass(i.State.OPENED), e.css("height", "")
            }
        }, {
            key: "isOpenedInitialBreakpoint",
            value: function() {
                var t = this.application.viewport.breakpoint;
                return t === r.Breakpoints.APPLICATION || t === r.Breakpoints.DESKTOP || t === r.Breakpoints.TABLET
            }
        }]) && c(e.prototype, n), o && c(e, o), h
    }(o.Component);
    e.Component = p
}, function(t, e, n) {
    "use strict";
    n(4), n(5), n(6), n(0), n(12), n(8), n(1), n(9), n(2), n(3), n(7), Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.Component = void 0;
    var o = n(11),
        i = n(13);

    function r(t) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function a() {
        return (a = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
            }
            return t
        }).apply(this, arguments)
    }

    function s(t, e) {
        for (var n = 0; n < e.length; n++) {
            var o = e[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
        }
    }

    function l(t, e) {
        return (l = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    function c(t) {
        var e = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
            } catch (t) {
                return !1
            }
        }();
        return function() {
            var n, o = f(t);
            if (e) {
                var i = f(this).constructor;
                n = Reflect.construct(o, arguments, i)
            } else n = o.apply(this, arguments);
            return u(this, n)
        }
    }

    function u(t, e) {
        return !e || "object" !== r(e) && "function" != typeof e ? function(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function f(t) {
        return (f = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }
    var h = function(t) {
        ! function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && l(t, e)
        }(u, t);
        var e, n, o, r = c(u);

        function u(t, e) {
            var n;
            return function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, u), (n = r.call(this, t, e)).imageDelay = 1450, n.waypoint = n.application.viewport.waypoint, a(n.selectors, {}), a(n.bindings, {}), n
        }
        return e = u, o = [{
            key: "className",
            get: function() {
                return "base.m-magazinhero/Component"
            }
        }], (n = [{
            key: "prepare",
            value: function() {
                this.setWaypoint()
            }
        }, {
            key: "setWaypoint",
            value: function() {
                var t = this;
                new t.waypoint({
                    element: t.$root[0],
                    handler: function(e) {
                        "down" === e && (t.$root.addClass(i.State.VISIBLE), setTimeout((function() {
                            t.$root.addClass(i.State.TOP)
                        }), t.imageDelay))
                    },
                    offset: "70%"
                })
            }
        }]) && s(e.prototype, n), o && s(e, o), u
    }(o.Component);
    e.Component = h
}, function(t, e, n) {
    "use strict";
    n(4), n(5), n(6), n(23), n(0), n(12), n(8), n(1), n(9), n(2), n(3), n(7), Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.Component = void 0;
    var o, i = n(11),
        r = n(13),
        a = (o = n(14)) && o.__esModule ? o : {
            default: o
        },
        s = n(31),
        l = n(43);

    function c(t) {
        return (c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function u() {
        return (u = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
            }
            return t
        }).apply(this, arguments)
    }

    function f(t, e) {
        for (var n = 0; n < e.length; n++) {
            var o = e[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
        }
    }

    function h(t, e) {
        return (h = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    function d(t) {
        var e = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
            } catch (t) {
                return !1
            }
        }();
        return function() {
            var n, o = y(t);
            if (e) {
                var i = y(this).constructor;
                n = Reflect.construct(o, arguments, i)
            } else n = o.apply(this, arguments);
            return p(this, n)
        }
    }

    function p(t, e) {
        return !e || "object" !== c(e) && "function" != typeof e ? function(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function y(t) {
        return (y = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }
    var g = function(t) {
        ! function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && h(t, e)
        }(c, t);
        var e, n, o, i = d(c);

        function c(t, e) {
            var n;
            return function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, c), (n = i.call(this, t, e)).maxLayoutRecursion = 10, n.searchLinkClass = "m-suchfeld__autocomplete-link", n.isSearchExpanded = !1, n.lastPageWidth = (0, a.default)(document).width(), u(n.selectors, {
                $navLink: ".js-m-navigation__navlink",
                $navListItem: ".m-navigation__navitem",
                $navListItemStd: ".js-m-navigation__navitem--dynamic",
                $navItemList: ".js-m-navigation__list",
                $menuBtn: ".m-navigation__menu",
                $navItemSearch: ".js-m-navigation__search",
                $searchForm: ".m-navigation__searchform .m-suchfeld__form",
                $navSearchForm: ".m-navigation__searchform",
                $searchInput: ".m-suchfeld__search-input",
                $items: ".m-navigation__items"
            }), u(n.bindings, {
                handleNavLinkClick: "click:$navLink",
                handleNavLinkFocusIn: "focusin:$navLink",
                handleNavLinkFocusOut: "focusout:$navLink",
                handleInputFocusIn: "focusin:$searchInput",
                handleInputFocusOut: "focusout:$searchInput",
                handleKeyUp: "keyup:$searchInput"
            }), n
        }
        return e = c, o = [{
            key: "className",
            get: function() {
                return "base.modules.m-navigation/Component"
            }
        }], (n = [{
            key: "prepare",
            value: function() {
                this.application.viewport.signals.changed.add(this.handleResize.bind(this)), this.application.signals.requestNavigationOpenHighlight.add(this.handleOpenHighlightRequest.bind(this)), this.handleRenderingLatency()
            }
        }, {
            key: "handleNavLinkClick",
            value: function(t) {
                if (t) {
                    var e = (0, a.default)(t.currentTarget),
                        n = e.closest(this.selectors.$navListItem).data("flyoutid");
                    n && (t.preventDefault(), e.closest(this.selectors.$navListItem).hasClass(r.State.OPENED) ? this.application.signals.requestFlyoutClose.dispatch() : this.application.signals.requestFlyoutOpen.dispatch(n, !0))
                }
            }
        }, {
            key: "handleKeyUp",
            value: function(t) {
                t.keyCode === l.KeyCode.ESC && this.$elements.searchInput.blur()
            }
        }, {
            key: "handleNavLinkFocusIn",
            value: function(t) {
                var e = (0, a.default)(t.currentTarget).closest(this.selectors.$navListItem);
                e.hasClass(r.State.HIDDEN_ACCESSIBLE) && e.addClass(r.State.HIDDEN_FOCUS)
            }
        }, {
            key: "handleNavLinkFocusOut",
            value: function(t) {
                (0, a.default)(t.currentTarget).closest(this.selectors.$navListItem).removeClass(r.State.HIDDEN_FOCUS)
            }
        }, {
            key: "handleInputFocusIn",
            value: function() {
                this.expandSearch()
            }
        }, {
            key: "handleInputFocusOut",
            value: function(t) {
                var e = (0, a.default)(t.relatedTarget);
                !0 !== (null == e ? void 0 : e.hasClass(this.searchLinkClass)) && this.collapseSearch()
            }
        }, {
            key: "handleRenderingLatency",
            value: function() {
                var t = this;
                /(iPhone|iPod|iPad)/i.test(navigator.userAgent) ? setTimeout((function() {
                    t.fitNavigationToWidth()
                }), 250) : this.fitNavigationToWidth()
            }
        }, {
            key: "collapseSearch",
            value: function() {
                if (!0 === this.isSearchExpanded) {
                    var t, e = this.$elements,
                        n = e.items,
                        o = e.navSearchForm,
                        i = e.navItemSearch;
                    o.velocity("stop"), o.css({
                        width: "",
                        left: ""
                    }), i.width(null !== (t = this.preExpandWidth) && void 0 !== t ? t : ""), n.removeClass(r.State.EXPANDED), this.isSearchExpanded = !1
                }
            }
        }, {
            key: "expandSearch",
            value: function() {
                if (this.isExpandedSearch() && !1 === this.isSearchExpanded) {
                    var t = this.$elements.navSearchForm,
                        e = this.$elements.navItemSearch,
                        n = e.width(),
                        o = parseInt(e.css("padding-left")),
                        i = t.width(),
                        s = this.$elements.navItemList.width(),
                        l = s + i;
                    this.$elements.items.addClass(r.State.EXPANDED), this.preExpandWidth = n, e.width(n), t.css({
                        width: i
                    }), a.default.Velocity.animate(t, {
                        left: -s + o,
                        width: l
                    }, {
                        duration: 300,
                        delay: 100
                    }), this.isSearchExpanded = !0
                }
            }
        }, {
            key: "handleOpenHighlightRequest",
            value: function(t) {
                this.$elements.navListItem.removeClass(r.State.OPENED), null != t && this.$elements.navListItem.filter("[data-flyoutid=" + t + "]").addClass(r.State.OPENED)
            }
        }, {
            key: "handleResize",
            value: function() {
                this.lastPageWidth !== (0, a.default)(document).width() && (this.lastPageWidth = (0, a.default)(document).width(), this.fitNavigationToWidth(), this.resizeExpandedSearch())
            }
        }, {
            key: "resizeExpandedSearch",
            value: function() {
                if (!0 === this.isSearchExpanded)
                    if (this.isCollapsed()) this.collapseSearch();
                    else {
                        var t = (0, a.default)(".g-header__logoimg").outerWidth() + 80;
                        this.$elements.navSearchForm.offset().left < t && this.collapseSearch()
                    }
            }
        }, {
            key: "fitNavigationToWidth",
            value: function() {
                this.$elements.menuBtn.addClass(r.State.HIDDEN), this.$elements.navItemSearch.show().removeClass(r.State.COLLAPSED), this.maxLayoutRecursion = this.$elements.navListItemStd.removeClass(r.State.HIDDEN_ACCESSIBLE).length, this.checkNavigationWidth(0)
            }
        }, {
            key: "isCollapsed",
            value: function() {
                return !!this.$elements.navItemSearch.hasClass(r.State.COLLAPSED)
            }
        }, {
            key: "isExpandedSearch",
            value: function() {
                var t = this.application.viewport.breakpoint;
                return !this.isCollapsed() && (t === s.Breakpoints.APPLICATION || t === s.Breakpoints.DESKTOP || t === s.Breakpoints.TABLET)
            }
        }, {
            key: "checkNavigationWidth",
            value: function(t) {
                var e = this.$elements.navItemList.get(0);
                e.scrollWidth > e.offsetWidth && t < this.maxLayoutRecursion && (this.isCollapsed() ? (this.$elements.menuBtn.removeClass(r.State.HIDDEN), this.$elements.navListItemStd.filter(":not(." + r.State.HIDDEN_ACCESSIBLE + "):last()").addClass(r.State.HIDDEN_ACCESSIBLE), this.checkNavigationWidth(++t)) : (this.$elements.navItemSearch.addClass(r.State.COLLAPSED), this.checkNavigationWidth(t)))
            }
        }]) && f(e.prototype, n), o && f(e, o), c
    }(i.Component);
    e.Component = g
}, function(t, e, n) {
    "use strict";
    n(4), n(5), n(6), n(23), n(16), n(0), n(12), n(8), n(1), n(9), n(2), n(3), n(7), Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.Component = void 0;
    var o, i = n(11),
        r = n(13),
        a = (o = n(14)) && o.__esModule ? o : {
            default: o
        },
        s = n(22),
        l = n(43),
        c = n(31);

    function u(t) {
        return (u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function f() {
        return (f = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
            }
            return t
        }).apply(this, arguments)
    }

    function h(t, e) {
        for (var n = 0; n < e.length; n++) {
            var o = e[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
        }
    }

    function d(t, e) {
        return (d = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    function p(t) {
        var e = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
            } catch (t) {
                return !1
            }
        }();
        return function() {
            var n, o = g(t);
            if (e) {
                var i = g(this).constructor;
                n = Reflect.construct(o, arguments, i)
            } else n = o.apply(this, arguments);
            return y(this, n)
        }
    }

    function y(t, e) {
        return !e || "object" !== u(e) && "function" != typeof e ? function(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function g(t) {
        return (g = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }
    var m = function(t) {
        ! function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && d(t, e)
        }(u, t);
        var e, n, o, i = p(u);

        function u(t, e) {
            var n;
            return function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, u), (n = i.call(this, t, e)).FLYOUT_OPEN_HISTORY_STATE = "flyout-open", n.VISIBLE_SUBLEVELMENU_CLASS = "has-visible-sublevel-menu", n.FLYOUT_OPEN_CLASS = "has-open-flyout", n.MODULE_CLASS_JS = "js-m-navigation-flyout", n.SUBLEVEL_MENU_SELECTOR = (0, a.default)(".m-navigation-flyout__content:not(.is-hidden)"), n.$body = (0, a.default)("body"), n.currentContentId = !1, n.initialLevel = 0, n.lastPageWidth = (0, a.default)(document).width(), f(n.selectors, {
                $content: ".".concat(n.MODULE_CLASS_JS, "__content"),
                $contentLevel0: ".".concat(n.MODULE_CLASS_JS, "__content[data-level=0]"),
                $contentHolder: ".".concat(n.MODULE_CLASS_JS, "__contentholder"),
                $flyoutLink: ".".concat(n.MODULE_CLASS_JS, "__flyoutlink"),
                $closeBtn: ".".concat(n.MODULE_CLASS_JS, "__close"),
                $back: ".".concat(n.MODULE_CLASS_JS, "__back"),
                $backLink: ".".concat(n.MODULE_CLASS_JS, "__backlink"),
                $scrollContainer: ".".concat(n.MODULE_CLASS_JS, "__scrollcontainer")
            }), f(n.bindings, {
                handleFlyoutLinkClick: "click:$flyoutLink",
                handleCloseBtnClick: "click:$closeBtn",
                handleBackLinkClick: "click:$backLink",
                handleKeyUp: "keyup:$root"
            }), n
        }
        return e = u, o = [{
            key: "className",
            get: function() {
                return "base.modules.m-navigation-flyout/Component"
            }
        }], (n = [{
            key: "prepare",
            value: function() {
                this.application.signals.requestFlyoutOpen.add(this.handleOpenRequest.bind(this)), this.application.signals.requestFlyoutClose.add(this.handleCloseRequest.bind(this)), this.application.viewport.signals.changed.add(this.handleResize.bind(this)), window.addEventListener("popstate", this.handleCloseRequest.bind(this), !1)
            }
        }, {
            key: "handleOpenRequest",
            value: function(t, e) {
                if (t !== this.currentContentId) {
                    this.currentContentId = t, "navigation-search" === t && this.$body.addClass(r.State.NOT_FIXED_IOS), this.application.viewport.disableScrolling(), this.$root.addClass(r.State.OPENED), this.$body.addClass(this.FLYOUT_OPEN_CLASS), this.application.signals.requestHeaderShim.dispatch(!0), this.$elements.scrollContainer.scrollTop(0), this.$elements.content.addClass(r.State.HIDDEN), this.$elements.content.removeClass(r.State.VISIBLE);
                    var n = this.$elements.content.filter('[data-id="' + t + '"]'),
                        o = n.parents(this.selectors.$content);
                    n.removeClass(r.State.HIDDEN), n.addClass(r.State.VISIBLE), o.removeClass(r.State.HIDDEN), o.addClass(r.State.VISIBLE), this.handleVisibleSublevelMenu(o), (0, s.isMobileSafari)() && (0, s.forceRedraw)(document.getElementsByTagName("header")[0]);
                    var i = n.data("level");
                    e && (this.hideFlyoutContent(), this.initialLevel = i, 0 === i && this.$elements.content.removeClass(this.VISIBLE_SUBLEVELMENU_CLASS)), this.handleBackLink(i > this.initialLevel), this.isNavigationPositionBottom() ? (this.$elements.contentHolder.css("opacity", ""), window.history.pushState({
                        view: this.FLYOUT_OPEN_HISTORY_STATE
                    }, "", window.location.href), this.onFlyoutOpened()) : (this.onFlyoutOpened(300), this.showFlyoutContent(300));
                    var a = n.closest(this.selectors.$content + "[data-level=1]").data("id");
                    a = void 0 === a ? this.$root.data("root-id") : a, this.application.signals.requestNavigationOpenHighlight.dispatch(a), this.application.signals.showLogoFlyout.dispatch();
                    var l = n.find(".m-navigation-flyout__linklist")[0];
                    l && (l.setAttribute("tabindex", "0"), l.focus());
                    var c = n.find(".js-m-suchfeld__search-input")[0];
                    "navigation-search" === t && c.focus()
                } else this.log("handleOpenRequest - already open")
            }
        }, {
            key: "handleCloseRequest",
            value: function() {
                if (this.$root.hasClass(r.State.OPENED)) {
                    this.currentContentId = !1, this.initialLevel = 0, this.$elements.scrollContainer.removeClass(r.State.KINETIC_SCROLL), this.$root.removeClass(r.State.OPENED), this.$body.removeClass(this.FLYOUT_OPEN_CLASS), this.application.signals.requestHeaderShim.dispatch(!1), this.application.viewport.enableScrolling(), this.$elements.content.removeClass(this.VISIBLE_SUBLEVELMENU_CLASS), this.$elements.closeBtn.addClass(r.State.HIDDEN), this.application.signals.requestNavigationOpenHighlight.dispatch(null);
                    var t = (0, a.default)(".js-m-suchfeld__search-input");
                    t.length > 0 && t.blur(), this.handleBackLink(!1), this.application.signals.hideLogoFlyout.dispatch(), window.history.state && window.history.state.view === this.FLYOUT_OPEN_HISTORY_STATE && window.history.back()
                }
            }
        }, {
            key: "handleKeyUp",
            value: function(t) {
                t.keyCode === l.KeyCode.ESC && this.handleCloseBtnClick()
            }
        }, {
            key: "handleFlyoutLinkClick",
            value: function(t) {
                var e = (0, a.default)(t.currentTarget);
                if (e.hasClass(r.State.CHILDREN)) {
                    t.preventDefault();
                    var n = e.siblings(this.selectors.$content).data("id");
                    this.application.signals.requestFlyoutOpen.dispatch(n, !1)
                }
            }
        }, {
            key: "handleBackLinkClick",
            value: function() {
                var t = this.getParentId(this.currentContentId);
                this.$elements.content.removeClass(this.VISIBLE_SUBLEVELMENU_CLASS), void 0 !== t && this.application.signals.requestFlyoutOpen.dispatch(t, !1)
            }
        }, {
            key: "handleCloseBtnClick",
            value: function() {
                this.application.signals.requestFlyoutClose.dispatch()
            }
        }, {
            key: "handleResize",
            value: function() {
                this.lastPageWidth !== (0, a.default)(document).width() && (this.lastPageWidth = (0, a.default)(document).width(), this.application.signals.requestFlyoutClose.dispatch())
            }
        }, {
            key: "handleVisibleSublevelMenu",
            value: function(t) {
                t.has(this.SUBLEVEL_MENU_SELECTOR) && t.addClass(this.VISIBLE_SUBLEVELMENU_CLASS)
            }
        }, {
            key: "onFlyoutOpened",
            value: function() {
                this.$elements.scrollContainer.addClass(r.State.KINETIC_SCROLL), this.isNavigationPositionBottom() || this.$elements.closeBtn.removeClass(r.State.HIDDEN)
            }
        }, {
            key: "showFlyoutContent",
            value: function(t) {
                this.$elements.contentHolder.velocity({
                    opacity: 1
                }, {
                    duration: 700,
                    delay: t,
                    easing: "easeOutSine"
                })
            }
        }, {
            key: "getParentId",
            value: function(t) {
                return this.$elements.content.filter('[data-id="' + t + '"]').parent().closest(this.selectors.$content).data("id")
            }
        }, {
            key: "hideFlyoutContent",
            value: function() {
                this.$elements.contentHolder.css("opacity", "0")
            }
        }, {
            key: "handleBackLink",
            value: function(t) {
                t ? this.$elements.back.removeClass(r.State.HIDDEN) : this.$elements.back.addClass(r.State.HIDDEN)
            }
        }, {
            key: "isFullWidthFlyout",
            value: function() {
                return "navigation-welcome" === this.currentContentId
            }
        }, {
            key: "isNavigationPositionBottom",
            value: function() {
                var t = this.application.viewport.breakpoint;
                return !(t === c.Breakpoints.APPLICATION || t === c.Breakpoints.DESKTOP || t === c.Breakpoints.TABLET || t === c.Breakpoints.MINITABLET)
            }
        }]) && h(e.prototype, n), o && h(e, o), u
    }(i.Component);
    e.Component = m
}, function(t, e, n) {
    "use strict";
    n(4), n(5), n(6), n(0), n(12), n(258), n(8), n(1), n(9), n(259), n(2), n(3), n(7), Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.Component = void 0;
    var o, i = n(11),
        r = (o = n(14)) && o.__esModule ? o : {
            default: o
        },
        a = n(13);

    function s(t) {
        return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function l() {
        return (l = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
            }
            return t
        }).apply(this, arguments)
    }

    function c(t, e) {
        for (var n = 0; n < e.length; n++) {
            var o = e[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
        }
    }

    function u(t, e, n) {
        return (u = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, e, n) {
            var o = function(t, e) {
                for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = p(t)););
                return t
            }(t, e);
            if (o) {
                var i = Object.getOwnPropertyDescriptor(o, e);
                return i.get ? i.get.call(n) : i.value
            }
        })(t, e, n || t)
    }

    function f(t, e) {
        return (f = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    function h(t) {
        var e = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
            } catch (t) {
                return !1
            }
        }();
        return function() {
            var n, o = p(t);
            if (e) {
                var i = p(this).constructor;
                n = Reflect.construct(o, arguments, i)
            } else n = o.apply(this, arguments);
            return d(this, n)
        }
    }

    function d(t, e) {
        return !e || "object" !== s(e) && "function" != typeof e ? function(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function p(t) {
        return (p = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }
    n(61);
    var y = function(t) {
        ! function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && f(t, e)
        }(s, t);
        var e, n, o, i = h(s);

        function s(t, e) {
            var n;
            return function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, s), (n = i.call(this, t, e)).waypoint = window.Waypoint, n.rootExpanded = !1, n.inAnimation = !1, n.contentQueued = !1, l(n.selectors, {
                $dropdownSelect: ".js-e-dropdown__select",
                $content: ".m-ousp__content",
                $frame: ".m-ousp__frame",
                $dialog: ".js-m-ousp__dialog"
            }), l(n.bindings, {
                handleDropdownChange: "change:$dropdownSelect",
                handleMouseOver: "mouseover:$frame",
                handleFocus: "focus:$dialog"
            }), n
        }
        return e = s, o = [{
            key: "className",
            get: function() {
                return "base.module.m-ousp/Component"
            }
        }], (n = [{
            key: "prepare",
            value: function() {
                this.application.viewport.signals.contentHeightChanged.add(this.handleHeight.bind(this))
            }
        }, {
            key: "activate",
            value: function() {
                u(p(s.prototype), "activate", this).call(this), this.setWaypoints()
            }
        }, {
            key: "handleFocus",
            value: function() {
                this.expandContent()
            }
        }, {
            key: "handleDropdownChange",
            value: function(t) {
                var e = (0, r.default)(t.currentTarget).val();
                window.location.href = e
            }
        }, {
            key: "handleMouseOver",
            value: function() {
                this.expandContent()
            }
        }, {
            key: "handleHeight",
            value: function() {
                this.waypoint.refreshAll()
            }
        }, {
            key: "setWaypoints",
            value: function() {
                var t = this;
                new t.waypoint({
                    element: t.$root[0],
                    handler: function(e) {
                        "down" === e && t.expandRoot()
                    },
                    offset: "85%"
                }), new t.waypoint({
                    element: t.$root[0],
                    handler: function(e) {
                        "down" === e && t.expandContent()
                    },
                    offset: "40%"
                })
            }
        }, {
            key: "expandContent",
            value: function() {
                var t = this.$elements.content;
                !1 === t.hasClass(a.State.VISIBLE) && (!1 === this.inAnimation ? (t.addClass(a.State.VISIBLE), r.default.Velocity.animate(t, "slideDown", {
                    duration: 500
                })) : this.contentQueued = !0)
            }
        }, {
            key: "expandRoot",
            value: function() {
                var t = this.$elements.frame;
                if (!1 === this.rootExpanded) {
                    this.rootExpanded = !0, this.inAnimation = !0;
                    var e = t.outerWidth(),
                        n = t.outerHeight(),
                        o = this;
                    r.default.Velocity.animate(t, {
                        opacity: [1, 0],
                        width: [e, 0],
                        height: n
                    }, {
                        duration: 500,
                        complete: function() {
                            t.addClass(a.State.VISIBLE).css({
                                width: "",
                                height: ""
                            }), o.inAnimation = !1, !0 === o.contentQueued && o.expandContent()
                        }
                    })
                }
            }
        }]) && c(e.prototype, n), o && c(e, o), s
    }(i.Component);
    e.Component = y
}, function(t, e, n) {
    "use strict";

    function o(t) {
        return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function i() {
        return (i = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
            }
            return t
        }).apply(this, arguments)
    }

    function r(t, e) {
        for (var n = 0; n < e.length; n++) {
            var o = e[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
        }
    }

    function a(t, e) {
        return (a = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    function s(t) {
        var e = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
            } catch (t) {
                return !1
            }
        }();
        return function() {
            var n, o = c(t);
            if (e) {
                var i = c(this).constructor;
                n = Reflect.construct(o, arguments, i)
            } else n = o.apply(this, arguments);
            return l(this, n)
        }
    }

    function l(t, e) {
        return !e || "object" !== o(e) && "function" != typeof e ? function(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function c(t) {
        return (c = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }
    n(4), n(5), n(6), n(0), n(12), n(8), n(1), n(9), n(2), n(3), n(7), Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.Component = void 0;
    var u = function(t) {
        ! function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && a(t, e)
        }(c, t);
        var e, n, o, l = s(c);

        function c(t, e) {
            var n;
            return function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, c), i((n = l.call(this, t, e)).selectors, {
                $dropdownSelect: ".js-e-dropdown__select"
            }), i(n.bindings, {
                handleDropdownChange: "change:$dropdownSelect"
            }), n
        }
        return e = c, o = [{
            key: "className",
            get: function() {
                return "base.module.m-prozessschritte/Component"
            }
        }], (n = [{
            key: "handleDropdownChange",
            value: function(t) {
                var e = $(t.currentTarget).val();
                this.log(e), window.location.href = e
            }
        }]) && r(e.prototype, n), o && r(e, o), c
    }(n(11).Component);
    e.Component = u
}, function(t, e, n) {
    "use strict";
    n(4), n(5), n(6), n(16), n(0), n(12), n(8), n(1), n(9), n(26), n(2), n(3), n(44), n(7), Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.Component = void 0;
    var o = n(11),
        i = n(13),
        r = n(22);

    function a(t) {
        return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function s() {
        return (s = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
            }
            return t
        }).apply(this, arguments)
    }

    function l(t, e) {
        for (var n = 0; n < e.length; n++) {
            var o = e[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
        }
    }

    function c(t, e) {
        return (c = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    function u(t) {
        var e = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
            } catch (t) {
                return !1
            }
        }();
        return function() {
            var n, o = h(t);
            if (e) {
                var i = h(this).constructor;
                n = Reflect.construct(o, arguments, i)
            } else n = o.apply(this, arguments);
            return f(this, n)
        }
    }

    function f(t, e) {
        return !e || "object" !== a(e) && "function" != typeof e ? function(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function h(t) {
        return (h = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }
    var d = function(t) {
        ! function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && c(t, e)
        }(f, t);
        var e, n, o, a = u(f);

        function f(t, e) {
            var n;
            return function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, f), (n = a.call(this, t, e)).$tables = null, n.animationThreshold = 1e3, n.scrollIconsSize = 60, n.waypoint = n.application.viewport.waypoint, n.waypointArray = [], n.waypointOffset = "40%", n.horizontalScrollThreshold = 40, s(n.selectors, {
                $tableContainer: ".js-e-table",
                $table: ".js-e-table .e-table__table"
            }), n
        }
        return e = f, o = [{
            key: "className",
            get: function() {
                return "base.modules.m-richtext/Component"
            }
        }], (n = [{
            key: "prepare",
            value: function() {
                this.$tables = $(this.selectors.$table, this.$root), this.$tables.length > 0 && ($(window).on("resize", (0, r.debounce)(this.handleResize.bind(this), 100)), this.handleResize(), this.handleTableScroll())
            }
        }, {
            key: "handleResize",
            value: function() {
                var t = this;
                $.each(this.$tables, (function(e, n) {
                    var o = $(n).parent(t.selectors.$tableContainer),
                        r = Math.ceil(-1 * parseFloat(o.css("margin-left")));
                    $(n).width() > $(t.$root).width() + r ? o.addClass(i.State.SCROLLABLE) : o.removeClass(i.State.SCROLLABLE)
                })), this.destroyWaypoints(), $("html").hasClass(i.State.TOUCH) && this.setWaypoints()
            }
        }, {
            key: "handleTableScroll",
            value: function() {
                $.each(this.$tables, (function(t, e) {
                    $(e).parent().on("scroll", (0, r.debounce)((function() {
                        $(this).removeClass(i.State.ACTIVE)
                    }), 100))
                }))
            }
        }, {
            key: "setWaypoints",
            value: function() {
                var t = this;
                $.each(this.$tables, (function(e, n) {
                    $(n).parent().hasClass(i.State.SCROLLABLE) && (t.waypointArray[e] = new t.waypoint({
                        element: n,
                        handler: function(e) {
                            var o, i = function() {
                                $(window).unbind("scroll"), t.removeActive(), t.setActive(n)
                            };
                            $(window).bind("scroll", (function() {
                                clearTimeout(o), o = setTimeout(i, 150)
                            }))
                        },
                        offset: t.waypointOffset
                    }))
                }))
            }
        }, {
            key: "destroyWaypoints",
            value: function() {
                $.each(this.waypointArray, (function(t, e) {
                    void 0 !== e && e.destroy()
                }))
            }
        }, {
            key: "setActive",
            value: function(t) {
                var e = this;
                setTimeout((function() {
                    var n = $(t)[0].getBoundingClientRect().top,
                        o = $(t)[0].getBoundingClientRect().height,
                        r = 0,
                        a = $(t).parent(e.selectors.$tableContainer),
                        s = 0;
                    if (a.find("caption").length > 0) {
                        var l = a.find("caption")[0];
                        s = $(l).outerHeight(!0) + 20
                    }(r = n < 0 ? 10 * Math.ceil((-1 * n + s) / o * 100 / 10) : 10 * Math.ceil(s / o * 100 / 10)) * o / 100 < e.scrollIconsSize / 2 && (r = 10 * Math.ceil((s + e.scrollIconsSize / 2) / o * 100 / 10)), o - e.scrollIconsSize / 2 - r * o / 100 < e.scrollIconsSize / 2 && (r = 10 * Math.floor((o - e.scrollIconsSize / 2) / o * 100 / 10)), a[0].scrollLeft <= e.horizontalScrollThreshold && a.addClass(i.State.ACTIVE + " is-scrolled--" + r)
                }), e.animationThreshold)
            }
        }, {
            key: "removeActive",
            value: function() {
                var t = this;
                $.each(this.$tables, (function(e, n) {
                    var o = $(n).parent(t.selectors.$tableContainer);
                    o.removeClass(i.State.ACTIVE), o[0].className = o[0].className.replace(/\bis-scrolled--...*?\b/g, "")
                }))
            }
        }]) && l(e.prototype, n), o && l(e, o), f
    }(o.Component);
    e.Component = d
}, function(t, e, n) {
    "use strict";
    n(4), n(5), n(6), n(23), n(16), n(0), n(12), n(8), n(1), n(9), n(26), n(2), n(3), n(44), n(72), n(7), Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.Component = void 0;
    var o, i = n(11),
        r = n(13),
        a = n(43),
        s = n(31),
        l = n(22),
        c = (o = n(14)) && o.__esModule ? o : {
            default: o
        };

    function u(t) {
        return (u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function f() {
        return (f = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
            }
            return t
        }).apply(this, arguments)
    }

    function h(t, e) {
        for (var n = 0; n < e.length; n++) {
            var o = e[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
        }
    }

    function d(t, e) {
        return (d = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    function p(t) {
        var e = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
            } catch (t) {
                return !1
            }
        }();
        return function() {
            var n, o = g(t);
            if (e) {
                var i = g(this).constructor;
                n = Reflect.construct(o, arguments, i)
            } else n = o.apply(this, arguments);
            return y(this, n)
        }
    }

    function y(t, e) {
        return !e || "object" !== u(e) && "function" != typeof e ? function(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function g(t) {
        return (g = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }
    var m = function(t) {
        ! function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && d(t, e)
        }(u, t);
        var e, n, o, i = p(u);

        function u(t, e) {
            var n;
            return function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, u), (n = i.call(this, t, e)).headlinesMinimum = 4, n.headlineSelector = ".u-viewport .m-verteilerliste__headline, .u-viewport .m-teaserliste__headline", n.headlineExcluder = ".g-footer .m-verteilerliste__headline, .g-footer .m-teaserliste__headline", n.headlines = null, n.waypoint = n.application.viewport.waypoint, n.waypointContext = null, n.headlineLinks = {}, n.scrollToOffset = -30, n.isScrolling = !1, n.expandWaypoint = null, n.inactiveWaypoint = null, n.minifyWaypoint = null, n.expandedActionButtonOnce = !1, n.expandedActionButtonThreshold = 1e3, n.scrollAnimationTriggered = !1, n.scrollAnimationTimeout = null, n.scrollAnimationDelay = !1, n.scrollAnimationLastDiff = 0, n.scrollAnimationCount = 0, n.scrollY = 0, f(n.selectors, {
                $list: ".js-m-sprungmarke__list",
                $entry: ".js-m-sprungmarke__entry",
                $link: ".js-m-sprungmarke__link",
                $linkText: ".js-m-sprungmarke__link-text",
                $entries: ".js-m-sprungmarke__entries",
                $overlay: ".js-m-sprungmarke__overlay",
                $content: ".js-m-sprungmarke__content",
                $inlineContent: "> .js-m-sprungmarke__content",
                $overlayContent: ".js-m-sprungmarke__overlay .js-m-sprungmarke__content",
                $overlayHeader: ".js-m-sprungmarke__overlay .m-sprungmarke__header",
                $fab: ".js-m-sprungmarke__fab",
                $shim: ".js-m-sprungmarke__shim",
                $close: ".js-m-sprungmarke__close",
                $headline: ".js-m-sprungmarke__headline"
            }), f(n.bindings, {
                handleShimClick: "click:$shim",
                handleKeyUp: "keyup:$root"
            }), n
        }
        return e = u, o = [{
            key: "className",
            get: function() {
                return "base.module.m-sprungmarke/Component"
            }
        }], (n = [{
            key: "prepare",
            value: function() {
                this.checkHeadlineCount() && (this.showModule(), this.getHeadlines(), this.setContentBackLinks(), this.renderHeadlines(), this.cloneContent(), this.setWaypoints(), this.expandEntries(this.$elements.inlineContent), this.waypointContext = this.$root.parent(), this.bindListeners())
            }
        }, {
            key: "handleClose",
            value: function() {
                this.handleActionButtonClick()
            }
        }, {
            key: "handleShimClick",
            value: function() {
                this.hideOverlay()
            }
        }, {
            key: "handleKeyUp",
            value: function(t) {
                t.keyCode === a.KeyCode.ESC && this.hideOverlay()
            }
        }, {
            key: "handleActionButtonClick",
            value: function(t) {
                !1 !== this.$root.hasClass(r.State.OPENED) ? this.hideOverlay() : ((0, c.default)(t.currentTarget).blur(), this.showOverlay(), this.expandedActionButtonOnce || (this.minifyActionButton(), this.expandedActionButtonOnce = !0))
            }
        }, {
            key: "handleClick",
            value: function(t) {
                this.scrollToHeadline((0, c.default)(t.currentTarget))
            }
        }, {
            key: "handleBreakpointChange",
            value: function() {
                null !== this.expandWaypoint && (this.expandWaypoint.destroy(), this.setWaypointsActionButton())
            }
        }, {
            key: "handleScroll",
            value: function() {
                if (!0 === this.expandedActionButtonOnce)
                    if (0 === this.scrollAnimationCount) {
                        var t = this;
                        clearTimeout(this.scrollAnimationTimeout), this.scrollAnimationTimeout = setTimeout((function() {
                            t.scrollAnimationCount++
                        }), 500)
                    } else this.$elements.fab.hasClass(r.State.VISIBLE) && (!1 === this.scrollAnimationTriggered && (this.scrollAnimationTriggered = !0, this.scrollAnimationDelay = !0, this.moveActionButton()), this.resetScrollAnimation());
                this.scrollY = this.getScrollY()
            }
        }, {
            key: "getScrollY",
            value: function() {
                var t = this.application.viewport.$window[0];
                return t.pageYOffset > 0 ? t.pageYOffset : 0
            }
        }, {
            key: "moveActionButton",
            value: function() {
                var t = this,
                    e = "-";
                this.scrollY > this.getScrollY() && (e = ""), this.$elements.fab.addClass(r.State.SCROLLING), c.default.Velocity.animate(this.$elements.fab, {
                    translateY: e + "20px"
                }, {
                    duration: 500,
                    complete: function() {
                        t.animateActionButton()
                    }
                })
            }
        }, {
            key: "animateActionButton",
            value: function() {
                if (!0 === this.scrollAnimationDelay) {
                    this.scrollAnimationDelay = !1;
                    var t = this,
                        e = (0, l.isMotionReduced)() ? 1 : 400;
                    this.$elements.fab.velocity({
                        translateY: 0
                    }, {
                        duration: e,
                        easing: [.6, -.28, .735, .045],
                        complete: function() {
                            t.$elements.fab.css("transform", "").removeClass(r.State.SCROLLING)
                        }
                    })
                }
            }
        }, {
            key: "resetScrollAnimation",
            value: function() {
                var t = this;
                clearTimeout(this.scrollAnimationTimeout), this.scrollAnimationTimeout = setTimeout((function() {
                    t.scrollAnimationTriggered = !1
                }), 500)
            }
        }, {
            key: "bindListeners",
            value: function() {
                this.$root.on("click", this.selectors.$fab, this.handleActionButtonClick.bind(this)), this.$root.on("click", this.selectors.$link, this.handleClick.bind(this)), this.$root.on("click", this.selectors.$close, this.handleClose.bind(this)), this.application.viewport.signals.breakpointChanged.add(this.handleBreakpointChange.bind(this)), this.application.viewport.$window.on("scroll", this.handleScroll.bind(this))
            }
        }, {
            key: "checkHeadlineCount",
            value: function() {
                return this.headlines = (0, c.default)(this.headlineSelector).not(this.headlineExcluder), this.headlines.length >= this.headlinesMinimum
            }
        }, {
            key: "getHeadlines",
            value: function() {
                var t = this;
                c.default.each(this.headlines, (function(e, n) {
                    var o = (0, c.default)(n);
                    t.headlineLinks[o.text()] = o
                }))
            }
        }, {
            key: "setContentBackLinks",
            value: function() {
                var t = this,
                    e = (0, c.default)(t.selectors.$headline).parent().data("backlinktext");
                c.default.each(this.headlines, (function(n, o) {
                    var i = (0, c.default)(o).parents(this.headlineSelector).first();
                    if (0 == i.find(".m-sprungmarke__backlink").length) {
                        var r = (0, c.default)('<a href="javascript:;" class="js-m-sprungmarke__backlink m-sprungmarke__backlink is-hidden-accessible">' + e + "</a>");
                        i.append(r), r.on("click", (function(e) {
                            e.preventDefault(), t.scrollBackToNavi()
                        }))
                    }
                }))
            }
        }, {
            key: "getHeadlineByText",
            value: function(t) {
                return this.headlineLinks[t]
            }
        }, {
            key: "showModule",
            value: function() {
                this.$root.removeClass(r.State.HIDDEN), this.$root.removeAttr("aria-hidden")
            }
        }, {
            key: "renderHeadlines",
            value: function() {
                var t = this.$elements.entry,
                    e = t.clone(),
                    n = this;
                t.remove(), (0, c.default)(this.headlines).each((function(t, o) {
                    var i = e.clone(),
                        r = (0, c.default)(o);
                    i.find(n.selectors.$link).attr("data-tk-trackaction", "Sprungmarke:" + r.text().replace(/\u00AD/g, "").trim()), i.find(n.selectors.$linkText).text(r.text()), n.$elements.list.append(i)
                }))
            }
        }, {
            key: "collapseOverlayEntries",
            value: function(t) {
                this.hideOverlay(), this.collapseEntries(this.$root.find(this.selectors.$overlayContent), t)
            }
        }, {
            key: "expandEntries",
            value: function(t) {
                var e = this;
                if (!1 === t.hasClass(r.State.OPENED)) {
                    t.addClass(r.State.OPENED);
                    var n = t.find(e.selectors.$entries);
                    n.velocity("stop"), c.default.Velocity.animate(n, "slideDown", {
                        duration: 300,
                        complete: function() {
                            0 === t.parents(".js-m-sprungmarke__overlay").length && e.setWaypointsActionButton()
                        }
                    })
                }
            }
        }, {
            key: "collapseEntries",
            value: function(t, e) {
                var n = this,
                    o = function() {
                        "function" == typeof e && e()
                    };
                if (!1 !== t.hasClass(r.State.OPENED)) {
                    var i = t.find(n.selectors.$entries);
                    i.velocity("stop"), c.default.Velocity.animate(i, "slideUp", {
                        duration: 300,
                        complete: function() {
                            t.removeClass(r.State.OPENED), setTimeout((function() {
                                i.parents(n.selectors.$overlay).removeClass(r.State.EXPANDED), o()
                            }), 100)
                        }
                    })
                } else o()
            }
        }, {
            key: "showActionButton",
            value: function() {
                this.$elements.fab.addClass(r.State.VISIBLE), this.expandedActionButtonOnce || this.$elements.fab.addClass(r.State.EXPANDED)
            }
        }, {
            key: "hideActionButton",
            value: function() {
                this.collapseOverlayEntries(), this.$elements.fab.removeClass(r.State.VISIBLE + " " + r.State.EXPANDED), this.$root.find(this.selectors.$overlayHeader).removeClass(r.State.ACTIVE)
            }
        }, {
            key: "minifyActionButton",
            value: function() {
                this.$elements.fab.removeClass(r.State.EXPANDED)
            }
        }, {
            key: "setWaypoints",
            value: function() {
                var t = this;
                c.default.each(this.headlines, (function(e, n) {
                    new t.waypoint({
                        element: n,
                        handler: function(n) {
                            if (!1 === t.application.viewport.isScrolling && !1 === t.isScrolling) {
                                var o = void 0;
                                o = "down" === n ? t.getHeadlineByIndex(e) : t.getHeadlineByIndex(e - 1), t.setActive(o)
                            }
                        },
                        offset: t.getWaypointOffset()
                    })
                }))
            }
        }, {
            key: "setWaypointsActionButton",
            value: function() {
                var t = this;
                this.expandWaypoint = new this.waypoint({
                    element: t.$root[0],
                    handler: function(e) {
                        "down" === e ? t.showActionButton() : t.hideActionButton()
                    },
                    offset: -t.$root[0].clientHeight
                }), this.inactiveWaypoint = new this.waypoint({
                    element: t.$root[0],
                    handler: function(e) {
                        "up" === e && t.$root.find(t.selectors.$link).removeClass(r.State.ACTIVE).blur()
                    }
                }), t.expandedActionButtonOnce || (this.minifyWaypoint = new this.waypoint({
                    element: t.$root[0],
                    handler: function(e) {
                        t.expandedActionButtonOnce || "down" !== e || (t.minifyActionButton(), t.expandedActionButtonOnce = !0, this.destroy())
                    },
                    offset: -t.$root[0].clientHeight - t.expandedActionButtonThreshold
                }))
            }
        }, {
            key: "getHeadlineByIndex",
            value: function(t) {
                var e = void 0 !== this.headlines[t] ? (0, c.default)(this.headlines[t]).text() : "";
                return this.getHeadlineByText(e)
            }
        }, {
            key: "setActive",
            value: function(t) {
                if (void 0 !== t) {
                    var e = (0, c.default)(t);
                    if (e.length > 0) {
                        var n = e.text(),
                            o = this.$root.find(this.selectors.$link),
                            i = o.filter(':contains("' + n + '")');
                        o.removeClass(r.State.ACTIVE).blur(), i.addClass(r.State.ACTIVE), this.setOverlayActive(e)
                    }
                }
            }
        }, {
            key: "setOverlayActive",
            value: function(t) {
                t.length > 0 && this.$root.find(this.selectors.$overlayHeader).addClass(r.State.ACTIVE)
            }
        }, {
            key: "cloneContent",
            value: function() {
                var t = this.$elements.content.clone();
                t.find(this.selectors.$headline).attr("id", ""), this.$elements.overlay.append(t)
            }
        }, {
            key: "focusHeadline",
            value: function(t) {
                t.attr("tabindex", "0"), t.focus(), t.removeAttr("tabindex")
            }
        }, {
            key: "scrollToHeadline",
            value: function(t) {
                var e = t.find(this.selectors.$linkText).text(),
                    n = this.getHeadlineByText(e);
                this.scrollToElement(n)
            }
        }, {
            key: "scrollBackToNavi",
            value: function() {
                var t = (0, c.default)(this.selectors.$headline);
                this.scrollToElement(t)
            }
        }, {
            key: "scrollToElement",
            value: function(t) {
                var e = (0, l.isMotionReduced)() ? 1 : 500,
                    n = this;
                void 0 !== t && t.length > 0 && (this.isScrolling = !0, this.collapseOverlayEntries((function() {
                    n.application.viewport.scrollTo(t, e, n.getScrollToOffset(), (function() {
                        setTimeout((function() {
                            n.isScrolling = !1
                        }), 200), n.focusHeadline(t)
                    }))
                })))
            }
        }, {
            key: "getScrollToOffset",
            value: function() {
                var t = this.scrollToOffset;
                return parseFloat(t)
            }
        }, {
            key: "getWaypointOffset",
            value: function() {
                return this.application.viewport.getTopOffset() - this.scrollToOffset
            }
        }, {
            key: "showOverlay",
            value: function() {
                !1 === this.$root.hasClass(r.State.OPENED) && this.$root.addClass(r.State.OPENED)
            }
        }, {
            key: "hideOverlay",
            value: function() {
                !1 !== this.$root.hasClass(r.State.OPENED) && this.$root.removeClass(r.State.OPENED)
            }
        }, {
            key: "isExpandedBreakpoint",
            value: function() {
                var t = this.application.viewport.breakpoint;
                return t === s.Breakpoints.APPLICATION || t === s.Breakpoints.DESKTOP || t === s.Breakpoints.TABLET || t === s.Breakpoints.MINITABLET
            }
        }]) && h(e.prototype, n), o && h(e, o), u
    }(i.Component);
    e.Component = m
}, function(t, e, n) {
    "use strict";

    function o(t) {
        return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function i(t, e) {
        for (var n = 0; n < e.length; n++) {
            var o = e[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
        }
    }

    function r(t, e) {
        return (r = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    function a(t) {
        var e = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
            } catch (t) {
                return !1
            }
        }();
        return function() {
            var n, o = l(t);
            if (e) {
                var i = l(this).constructor;
                n = Reflect.construct(o, arguments, i)
            } else n = o.apply(this, arguments);
            return s(this, n)
        }
    }

    function s(t, e) {
        return !e || "object" !== o(e) && "function" != typeof e ? function(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function l(t) {
        return (l = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }
    n(4), n(5), n(6), n(0), n(8), n(1), n(9), n(2), n(3), n(7), Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.Component = void 0;
    var c = function(t) {
        ! function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && r(t, e)
        }(l, t);
        var e, n, o, s = a(l);

        function l(t, e) {
            return function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, l), s.call(this, t, e)
        }
        return e = l, o = [{
            key: "className",
            get: function() {
                return "base.modules.m-steps/Component"
            }
        }], (n = null) && i(e.prototype, n), o && i(e, o), l
    }(n(11).Component);
    e.Component = c
}, function(t, e, n) {
    "use strict";
    n(4), n(5), n(6), n(0), n(12), n(8), n(1), n(9), n(26), n(2), n(3), n(60), n(7), Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.Component = void 0;
    var o = n(11),
        i = n(22);

    function r(t) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function a() {
        return (a = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
            }
            return t
        }).apply(this, arguments)
    }

    function s(t, e) {
        for (var n = 0; n < e.length; n++) {
            var o = e[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
        }
    }

    function l(t, e, n) {
        return e && s(t.prototype, e), n && s(t, n), t
    }

    function c(t, e) {
        return (c = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    function u(t) {
        var e = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
            } catch (t) {
                return !1
            }
        }();
        return function() {
            var n, o = h(t);
            if (e) {
                var i = h(this).constructor;
                n = Reflect.construct(o, arguments, i)
            } else n = o.apply(this, arguments);
            return f(this, n)
        }
    }

    function f(t, e) {
        return !e || "object" !== r(e) && "function" != typeof e ? function(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function h(t) {
        return (h = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }
    var d = function(t) {
        ! function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && c(t, e)
        }(n, t);
        var e = u(n);

        function n(t, o) {
            var i;
            return function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, n), (i = e.call(this, t, o)).moduleName = o.attr("data-unique-cookie-name").toLowerCase(), i.cookieName = o.attr("data-unique-cookie-name"), i.cookieValue = o.attr("data-cookie-value"), i.cookieValidityDays = o.attr("data-cookie-validity-days") || void 0, i.getCookieValueByName(i.cookieName) !== i.cookieValue && (document.querySelector("body").classList.add(n.BODYCLASSDISPLAYCONFIRM + "-" + i.moduleName), o.removeClass("m-stickydiscardable__wrapper--hidden")), a(i.selectors, {
                $acceptButton: ".m-stickydiscardable__button"
            }), a(i.bindings, {
                handleClickAccept: "click:$acceptButton"
            }), i
        }
        return l(n, null, [{
            key: "BODYCLASSDISPLAYCONFIRM",
            get: function() {
                return "is-show-stickydiscardable"
            }
        }]), l(n, [{
            key: "handleClickAccept",
            value: function() {
                this.createCookie(), this.removeStickyDiscardable()
            }
        }, {
            key: "getCookieValueByName",
            value: function(t) {
                var e = "; ".concat(document.cookie).split("; ".concat(t, "="));
                if (2 === e.length) return e.pop().split(";").shift()
            }
        }, {
            key: "createCookie",
            value: function() {
                (0, i.setCookie)(this.cookieName, this.cookieValue, this.cookieValidityDays)
            }
        }, {
            key: "removeStickyDiscardable",
            value: function() {
                this.$root.remove(), document.querySelector("body").classList.remove(n.BODYCLASSDISPLAYCONFIRM + "-" + this.moduleName)
            }
        }], [{
            key: "className",
            get: function() {
                return "base.modules.m-stickydiscardable/Component"
            }
        }]), n
    }(o.Component);
    e.Component = d
}, function(t, e, n) {
    "use strict";
    n(4), n(5), n(6), n(59), n(23), n(16), n(51), n(147), n(158), n(42), n(0), n(108), n(83), n(84), n(12), n(8), n(1), n(40), n(9), n(234), n(26), n(2), n(159), n(3), n(44), n(60), n(72), n(156), n(55), n(7), Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.Component = void 0, n(144);
    var o, i = n(11),
        r = n(13),
        a = (o = n(14)) && o.__esModule ? o : {
            default: o
        },
        s = n(22),
        l = n(43),
        c = n(46),
        u = n(31);

    function f(t) {
        return (f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function h(t) {
        return function(t) {
            if (Array.isArray(t)) return d(t)
        }(t) || function(t) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t)
        }(t) || function(t, e) {
            if (!t) return;
            if ("string" == typeof t) return d(t, e);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === n && t.constructor && (n = t.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(t);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return d(t, e)
        }(t) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function d(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, o = new Array(e); n < e; n++) o[n] = t[n];
        return o
    }

    function p(t, e, n, o, i, r, a) {
        try {
            var s = t[r](a),
                l = s.value
        } catch (t) {
            return void n(t)
        }
        s.done ? e(l) : Promise.resolve(l).then(o, i)
    }

    function y(t) {
        return function() {
            var e = this,
                n = arguments;
            return new Promise((function(o, i) {
                var r = t.apply(e, n);

                function a(t) {
                    p(r, o, i, a, s, "next", t)
                }

                function s(t) {
                    p(r, o, i, a, s, "throw", t)
                }
                a(void 0)
            }))
        }
    }

    function g() {
        return (g = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
            }
            return t
        }).apply(this, arguments)
    }

    function m(t, e) {
        for (var n = 0; n < e.length; n++) {
            var o = e[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
        }
    }

    function b(t, e, n) {
        return e && m(t.prototype, e), n && m(t, n), t
    }

    function v(t, e) {
        return (v = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    function k(t) {
        var e = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
            } catch (t) {
                return !1
            }
        }();
        return function() {
            var n, o = S(t);
            if (e) {
                var i = S(this).constructor;
                n = Reflect.construct(o, arguments, i)
            } else n = o.apply(this, arguments);
            return w(this, n)
        }
    }

    function w(t, e) {
        return !e || "object" !== f(e) && "function" != typeof e ? function(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function S(t) {
        return (S = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }
    var C = function(t) {
        ! function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && v(t, e)
        }(i, t);
        var e, n, o = k(i);

        function i(t, e) {
            var n;
            return function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, i), (n = o.call(this, t, e)).DEBOUNCE_LOCAL = 100, n.DEBOUNCE_AJAX = 300, n.NAVIGATION_SEARCH = ".js-m-navigation__search", n.SEARCHFIELD_MODULE_CLASS = "m-suchfeld", n.AUTOCOMPLETE_GROUP_CLASS = "".concat(n.SEARCHFIELD_MODULE_CLASS, "__autocomplete-group-divider"), n.AUTOCOMPLETE_LINK_CLASS = "".concat(n.SEARCHFIELD_MODULE_CLASS, "__autocomplete-link"), n.AUTOCOMPLETE_MIN_CHARS = 1, n.AUTOCOMPLETE_MAX_RESULTS = 5, n.EVENT_NAMESPACE = "msuchfeld", n.$root.data("autocompletesource") ? n.AUTOCOMPLETE_SOURCE = n.$root.data("autocompletesource") : n.AUTOCOMPLETE_SOURCE = "data", n.autoCompleteFirstLink = "", n.autoCompleteRequest = null, n.currentSearchTerm = "", n.preInputSuggestions = null, n.waypoint = n.application.viewport.waypoint, g(n.selectors, {
                $input: ".".concat(n.SEARCHFIELD_MODULE_CLASS, "__search-input"),
                $form: ".".concat(n.SEARCHFIELD_MODULE_CLASS, "__form"),
                $submitButton: ".".concat(n.SEARCHFIELD_MODULE_CLASS, "__submit"),
                $close: ".".concat(n.SEARCHFIELD_MODULE_CLASS, "__close"),
                $autoComplete: ".".concat(n.SEARCHFIELD_MODULE_CLASS, "__autocomplete"),
                $shim: ".".concat(n.SEARCHFIELD_MODULE_CLASS, "__shim"),
                $ariaSuggestHelper: ".js-".concat(n.SEARCHFIELD_MODULE_CLASS, "__ariasuggesthelper"),
                autoCompleteLink: ".".concat(n.AUTOCOMPLETE_LINK_CLASS)
            }), g(n.bindings, {
                handleSubmit: "submit:$form",
                handleClickClose: "click:$close",
                handleShimClick: "click:$shim",
                handleKeyUp: "keyup:$root",
                handleKeyDown: "keydown:$root",
                handleFocusInModule: "focusin:$root",
                handleFocusOut: "focusout:$input"
            }), n.signals.localSearchRequest = new c.Signal, n
        }
        return b(i, null, [{
            key: "AUTOCOMPLETE_NONE",
            get: function() {
                return "none"
            }
        }, {
            key: "AUTOCOMPLETE_LOCAL",
            get: function() {
                return "local"
            }
        }, {
            key: "AUTOCOMPLETE_AJAX",
            get: function() {
                return "ajax"
            }
        }]), b(i, [{
            key: "prepare",
            value: function() {
                var t = (0, s.debounce)(this.onInteraction.bind(this), this.getDebounceTime());
                this.$elements.input.on("input", t), this.$elements.input.on("focus", t), this.$elements.input.on("input", this.setValueState.bind(this)), this.setWaypoint(), this.preparePreface()
            }
        }, {
            key: "handleFocusOut",
            value: function(t) {
                var e = t.relatedTarget;
                [this.AUTOCOMPLETE_GROUP_CLASS, this.AUTOCOMPLETE_LINK_CLASS].includes(null == e ? void 0 : e.className) || this.hideAutoComplete()
            }
        }, {
            key: "handleSubmit",
            value: function(t) {
                var e = this.selectors.autoCompleteLink,
                    n = this.$elements.autoComplete.find(e).filter("." + r.State.SELECTED);
                this.isEmptySearchInput() && (t.preventDefault(), this.$elements.input.attr("placeholder", this.$root.data("empty-placeholder")), this.$elements.input.focus()), this.getAutoCompleteType() === i.AUTOCOMPLETE_LOCAL && "" !== this.autoCompleteFirstLink && (t.preventDefault(), document.location.href = this.autoCompleteFirstLink), n.length > 0 && "javascript:;" !== n.attr("href") && (t.preventDefault(), document.location.href = n.attr("href"))
            }
        }, {
            key: "handleKeyDown",
            value: function(t) {
                "keyCode" in t && [l.KeyCode.DOWN, l.KeyCode.UP].indexOf(t.keyCode) > -1 && t.preventDefault()
            }
        }, {
            key: "handleFocusInModule",
            value: function() {
                if ((0, s.isMobile)(this.application))
                    if (this.isNavigationPositionBottom()) {
                        var t = (0, a.default)(this.NAVIGATION_SEARCH).data("flyoutid");
                        this.application.signals.requestFlyoutOpen.dispatch(t, !0)
                    } else this.scrollTo(!1);
                    (0, a.default)("body").off("focusin." + this.EVENT_NAMESPACE).on("focusin." + this.EVENT_NAMESPACE, this.handleFocusOutside.bind(this))
            }
        }, {
            key: "handleFocusOutside",
            value: function(t) {
                a.default.contains(this.$root.get(0), t.target) || ((0, a.default)("body").off("focusin." + this.EVENT_NAMESPACE), this.handleClose())
            }
        }, {
            key: "handleKeyUp",
            value: function(t) {
                var e, n, o = t.keyCode;
                if (o !== l.KeyCode.ESC) {
                    if (-1 !== [l.KeyCode.DOWN, l.KeyCode.UP].indexOf(o)) {
                        var i = this.selectors.autoCompleteLink,
                            s = this.$elements.autoComplete.find(i),
                            c = s.filter("." + r.State.SELECTED);
                        s.removeClass(r.State.SELECTED);
                        var u = o === l.KeyCode.UP;
                        if (c.length > 0) {
                            var f, h, d = s.index(c),
                                p = u && d >= 1,
                                y = !u && -1 !== d && d < s.length - 1;
                            p ? h = (0, a.default)(s[d - 1]) : y && (h = (0, a.default)(s[d + 1])), null === (f = h) || void 0 === f || f.addClass(r.State.SELECTED)
                        } else s.filter(u ? ":last" : ":first").addClass(r.State.SELECTED);
                        var g = null === (e = s.filter("." + r.State.SELECTED)) || void 0 === e || null === (n = e.text()) || void 0 === n ? void 0 : n.trim();
                        g && "" !== g ? (this.$elements.input.val(g), this.$elements.ariaSuggestHelper.text(g)) : (this.$elements.input.val(this.currentSearchTerm), this.$elements.ariaSuggestHelper.text(this.currentSearchTerm))
                    }
                } else this.handleClose()
            }
        }, {
            key: "handleShimClick",
            value: function() {
                this.handleClose()
            }
        }, {
            key: "handleClickClose",
            value: function() {
                this.handleClose(), this.$elements.input.focus()
            }
        }, {
            key: "handleClickOutside",
            value: function(t) {
                a.default.contains(this.$root.get(0), t.target) || this.handleClose()
            }
        }, {
            key: "onInteraction",
            value: function() {
                if (this.currentSearchTerm = this.handleFormatSearchTerm(this.$elements.input.val()), this.$elements.input.val(this.currentSearchTerm), this.hasAutoComplete() && this.currentSearchTerm.length >= this.AUTOCOMPLETE_MIN_CHARS)
                    if (this.getAutoCompleteType() === i.AUTOCOMPLETE_LOCAL) {
                        var t = this.getLocalResultsByTerm(this.currentSearchTerm);
                        t.length > 0 ? this.setAutoComplete(t, this.currentSearchTerm, this.handleAutoCompleteClickLocal.bind(this)) : this.requestAutoCompleteAjax(this.currentSearchTerm, this.AUTOCOMPLETE_MAX_RESULTS)
                    } else this.getAutoCompleteType() === i.AUTOCOMPLETE_AJAX && this.requestAutoCompleteAjax(this.currentSearchTerm, this.AUTOCOMPLETE_MAX_RESULTS);
                else this.currentSearchTerm.length < this.AUTOCOMPLETE_MIN_CHARS ? this.setPreInputSuggestion() : this.hideAutoComplete()
            }
        }, {
            key: "handleFormatSearchTerm",
            value: function(t) {
                return t = (t = encodeURI(t)).replace(/C2%AD/gi, ""), t = decodeURI(t)
            }
        }, {
            key: "handleAjaxResultsDone",
            value: function(t, e) {
                this.setAutoComplete(e.searchSuggestions, t, this.handleAutoCompleteClick.bind(this))
            }
        }, {
            key: "handleAutoCompleteClickLocal",
            value: function(t) {
                var e;
                e = "data" === this.AUTOCOMPLETE_SOURCE ? (0, a.default)(t.currentTarget).data("search") : (0, a.default)(t.currentTarget).text().trim(), this.signals.localSearchRequest.dispatch(e), this.hideAutoComplete()
            }
        }, {
            key: "handleAutoCompleteClick",
            value: function(t) {
                var e;
                e = "data" === this.AUTOCOMPLETE_SOURCE ? (0, a.default)(t.currentTarget).data("search") : (0, a.default)(t.currentTarget).text().trim(), this.hideAutoComplete(), this.$elements.input.val(e), this.$elements.submitButton.trigger("click")
            }
        }, {
            key: "handleAjaxResultsFail",
            value: function(t, e) {
                this.log(e + ": HTTP Status: " + t.status + ", responseText: " + t.responseText)
            }
        }, {
            key: "handleClose",
            value: function() {
                this.$elements.input.val(""), this.setValueState(), this.hasAutoComplete() && this.hideAutoComplete()
            }
        }, {
            key: "preparePreface",
            value: function() {
                !1 === (0, s.inViewport)(this.$root) && this.$root.removeClass(r.State.VISIBLE)
            }
        }, {
            key: "filterElementsBySearchData",
            value: function(t, e) {
                var n = e.toLowerCase().trim(),
                    o = n.split(" "),
                    i = this;
                return t.filter((function() {
                    if ("data" === this.AUTOCOMPLETE_SOURCE) return -1 !== (0, a.default)(this).data("search").toLowerCase().indexOf(e.toLowerCase());
                    var t = (0, a.default)(this).text().trim().replace(/(shy;|­|&#173;)/gi, "").toLowerCase(),
                        r = !1;
                    if (t = i.removeChars(t), o.length > 1) {
                        var s = t.indexOf(n);
                        return -1 !== s && (0 === s || " " === t[s - 1]) && (r = !0), r
                    }
                    var l = t.split(" ").filter((function(t) {
                            return -1 !== o.indexOf(t)
                        })).length > 0,
                        c = o.filter((function(e) {
                            return t.split(" ").filter((function(t) {
                                return 0 === t.indexOf(e)
                            })).length > 0
                        })).length > 0;
                    return l || c
                }))
            }
        }, {
            key: "requestAutoCompleteAjax",
            value: function(t, e) {
                this.autoCompleteRequest && this.autoCompleteRequest.abort();
                var n = {
                    q: t
                };
                this.autoCompleteRequest = a.default.ajax({
                    url: this.$root.data("autocompleteurl"),
                    data: n,
                    dataType: "json"
                }).done(this.handleAjaxResultsDone.bind(this, this.currentSearchTerm)).fail(this.handleAjaxResultsFail.bind(this))
            }
        }, {
            key: "setValueState",
            value: function() {
                this.isEmptySearchInput() ? this.$elements.root.removeClass(r.State.NOT_EMPTY) : this.$elements.root.addClass(r.State.NOT_EMPTY)
            }
        }, {
            key: "isEmptySearchInput",
            value: function() {
                return void 0 !== this.$elements.input.val() && 0 === this.$elements.input.val().trim().length
            }
        }, {
            key: "hasAutoComplete",
            value: function() {
                var t = this.$root.data("autocomplete");
                return void 0 !== t && t !== i.AUTOCOMPLETE_NONE
            }
        }, {
            key: "getAutoCompleteType",
            value: function() {
                var t = this.$root.data("autocomplete");
                return void 0 === t ? "none" : t
            }
        }, {
            key: "getDebounceTime",
            value: function() {
                var t = 0;
                switch (this.getAutoCompleteType()) {
                    case i.AUTOCOMPLETE_AJAX:
                        t = this.DEBOUNCE_AJAX;
                        break;
                    case i.AUTOCOMPLETE_LOCAL:
                        t = this.DEBOUNCE_LOCAL
                }
                return t
            }
        }, {
            key: "getAutoCompleteSelector",
            value: function() {
                return this.$root.data("autocompleteselector") || ""
            }
        }, {
            key: "getLocalResultsByTerm",
            value: function(t) {
                var e = [];
                return this.filterElementsBySearchData((0, a.default)(this.getAutoCompleteSelector()), t).each((function(t, n) {
                    var o, i;
                    "data" === this.AUTOCOMPLETE_SOURCE ? (o = (0, a.default)(n).data("search"), e.push({
                        value: o
                    })) : (o = (0, a.default)(n).text().trim().replace(/(shy;|­|&#173;)/gi, ""), i = (0, a.default)(n).closest("a").attr("href"), e.push({
                        value: o,
                        link: i
                    }))
                })), e
            }
        }, {
            key: "showAutoComplete",
            value: function() {
                (0, a.default)("html").on("click.handleclickoutside", this.handleClickOutside.bind(this)), this.$elements.input.attr("aria-expanded", "true"), this.$elements.autoComplete.removeClass(r.State.HIDDEN), this.$root.addClass(r.State.OPENED), this.scrollTo()
            }
        }, {
            key: "hideAutoComplete",
            value: function() {
                (0, a.default)("html").off("click.handleclickoutside"), this.$elements.input.attr("aria-expanded", "false"), this.$elements.autoComplete.addClass(r.State.HIDDEN), this.$root.removeClass(r.State.OPENED)
            }
        }, {
            key: "setAutoComplete",
            value: function(t, e, n) {
                var o = this,
                    i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.AUTOCOMPLETE_MAX_RESULTS;
                this.autoCompleteFirstLink = "";
                var r = this.$elements.autoComplete,
                    a = this.$elements.form.find(".".concat(this.SEARCHFIELD_MODULE_CLASS, "__autocomplete-link-icon"));
                r.find(">*").off(), r.empty();
                var s = function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "javascript:;",
                        i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e,
                        s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e,
                        l = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
                        c = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : a;
                    return o.addAutoCompleteToDropdown(r, c, t, i, s, n, l)
                };
                (null == t ? void 0 : t.length) > 0 ? t.slice(0, i).forEach((function(n, i) {
                    var l, c, u = null !== (l = n.icon) && void 0 !== l ? l : a,
                        f = n.link && (null !== (c = n.ignoreAutoCompleteSource) && void 0 !== c && c || "data" !== o.AUTOCOMPLETE_SOURCE) ? n.link : "javascript:;",
                        h = n.group,
                        d = n.value,
                        p = h ? d : o.getHighlightTerm(e, n.value),
                        y = "data" === o.AUTOCOMPLETE_SOURCE || !n.link;
                    0 === i && 1 === t.length && "data" !== o.AUTOCOMPLETE_SOURCE && n.link && (o.autoCompleteFirstLink = f), !h || 0 !== i && h === t[i - 1].group || o.addGroupNameToDropdown(r, h), s(f, p, d, y, u)
                })) : s(), this.showAutoComplete()
            }
        }, {
            key: "addAutoCompleteToDropdown",
            value: function(t, e, n, o, i, r, s) {
                var l = (0, a.default)(e).html(),
                    c = (0, a.default)(this.createAutoCompleteElement(n, o, i, l));
                c.data("search", i), t.append(c), r && s && c.on("click", r)
            }
        }, {
            key: "addGroupNameToDropdown",
            value: function(t, e) {
                var n = (0, a.default)("<div class='".concat(this.AUTOCOMPLETE_GROUP_CLASS, "'><span class='").concat(this.AUTOCOMPLETE_GROUP_CLASS, "-text'>").concat(e, "</span></div>"));
                t.append(n), n.on("mousedown touchstart", (function(t) {
                    return t.preventDefault()
                }))
            }
        }, {
            key: "createAutoCompleteElement",
            value: function(t, e, n, o) {
                return "<a href='".concat(t, "' tabindex='-1' aria-hidden='true' aria-label='").concat(n, "' title='").concat(n, "' class='").concat(this.AUTOCOMPLETE_LINK_CLASS, "'>").concat(o, "<span class='").concat(this.AUTOCOMPLETE_LINK_CLASS, "-text'>").concat(e, "</span></a>")
            }
        }, {
            key: "getHighlightTerm",
            value: function(t, e) {
                t = t.trim();
                var n, o = e + "",
                    i = "<strong>" + (n = e.substr(0, t.length).toUpperCase() === t.toUpperCase() ? o.replace(new RegExp(t, "i"), "") : e) + "</strong>";
                return e.substr(0, t.length) + e.substr(t.length).replace(n, i)
            }
        }, {
            key: "removeChars",
            value: function(t) {
                return t.replace(/[\])}[{(]/g, "")
            }
        }, {
            key: "scrollTo",
            value: function() {
                var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                    e = 75,
                    n = (0, a.default)(document).scrollTop(),
                    o = this.$root.offset().top - e;
                t ? n > o && (0, a.default)("html, body").stop().animate({
                    scrollTop: o
                }, 300) : (0, a.default)("html, body").stop().animate({
                    scrollTop: o
                }, 300)
            }
        }, {
            key: "setWaypoint",
            value: function() {
                if (this.$root.hasClass(r.State.PREFACE)) {
                    var t = this;
                    new t.waypoint({
                        element: t.$root[0],
                        handler: function(e) {
                            "down" === e && t.$root.addClass(r.State.VISIBLE)
                        },
                        offset: "80%"
                    })
                }
            }
        }, {
            key: "isNavigationPositionBottom",
            value: function() {
                var t = this.application.viewport.breakpoint;
                return !(t === u.Breakpoints.APPLICATION || t === u.Breakpoints.DESKTOP || t === u.Breakpoints.TABLET || t === u.Breakpoints.MINITABLET)
            }
        }, {
            key: "fetchPreInputSuggestions",
            value: (n = y(regeneratorRuntime.mark((function t() {
                var e, n;
                return regeneratorRuntime.wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return e = this.$root.data("preinputsuggesturl"), t.next = 3, fetch(e);
                        case 3:
                            return n = t.sent, t.abrupt("return", n.json());
                        case 5:
                        case "end":
                            return t.stop()
                    }
                }), t, this)
            }))), function() {
                return n.apply(this, arguments)
            })
        }, {
            key: "setPreInputSuggestion",
            value: (e = y(regeneratorRuntime.mark((function t() {
                var e, n, o, i, r, a, s, l = this;
                return regeneratorRuntime.wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            if (!(this.currentSearchTerm.length >= this.AUTOCOMPLETE_MIN_CHARS)) {
                                t.next = 2;
                                break
                            }
                            return t.abrupt("return");
                        case 2:
                            if (t.prev = 2, null !== this.preInputSuggestions) {
                                t.next = 9;
                                break
                            }
                            return t.next = 6, this.fetchPreInputSuggestions();
                        case 6:
                            i = t.sent, a = (r = null != i ? i : {}).currentTopQueries, s = r.currentFAQs, this.preInputSuggestions = [].concat(h((null !== (n = null == a ? void 0 : a.entries) && void 0 !== n ? n : []).map((function(t) {
                                return {
                                    value: t.label,
                                    group: null == a ? void 0 : a.label
                                }
                            }))), h((null !== (o = null == s ? void 0 : s.entries) && void 0 !== o ? o : []).map((function(t) {
                                return {
                                    value: t.label,
                                    link: t.link,
                                    ignoreAutoCompleteSource: !0,
                                    group: null == s ? void 0 : s.label,
                                    icon: l.$elements.form.find(".".concat(l.SEARCHFIELD_MODULE_CLASS, "__autocomplete-faq-icon"))
                                }
                            }))));
                        case 9:
                            (null === (e = this.preInputSuggestions) || void 0 === e ? void 0 : e.length) > 0 ? this.setAutoComplete(this.preInputSuggestions, this.currentSearchTerm, this.handleAutoCompleteClick.bind(this), this.preInputSuggestions.length) : this.hideAutoComplete(), t.next = 16;
                            break;
                        case 12:
                            t.prev = 12, t.t0 = t.catch(2), console.error("Cannot fetch pre-input-suggestion", t.t0), this.hideAutoComplete();
                        case 16:
                        case "end":
                            return t.stop()
                    }
                }), t, this, [
                    [2, 12]
                ])
            }))), function() {
                return e.apply(this, arguments)
            })
        }], [{
            key: "className",
            get: function() {
                return "base.modules.m-suchfeld/Component"
            }
        }]), i
    }(i.Component);
    e.Component = C
}, function(t, e, n) {
    "use strict";
    n(4), n(5), n(6), n(23), n(0), n(12), n(8), n(1), n(9), n(2), n(3), n(7), Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.Component = void 0;
    var o, i = n(11),
        r = n(13),
        a = n(150),
        s = (o = n(14)) && o.__esModule ? o : {
            default: o
        },
        l = n(46);

    function c(t) {
        return (c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function u() {
        return (u = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
            }
            return t
        }).apply(this, arguments)
    }

    function f(t, e) {
        for (var n = 0; n < e.length; n++) {
            var o = e[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
        }
    }

    function h(t, e) {
        return (h = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    function d(t) {
        var e = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
            } catch (t) {
                return !1
            }
        }();
        return function() {
            var n, o = y(t);
            if (e) {
                var i = y(this).constructor;
                n = Reflect.construct(o, arguments, i)
            } else n = o.apply(this, arguments);
            return p(this, n)
        }
    }

    function p(t, e) {
        return !e || "object" !== c(e) && "function" != typeof e ? function(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function y(t) {
        return (y = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }
    var g = function(t) {
        ! function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && h(t, e)
        }(c, t);
        var e, n, o, i = d(c);

        function c(t, e) {
            var n;
            return function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, c), (n = i.call(this, t, e)).useTouchAsClick = !0, n.signals.filterChanged = new l.Signal, u(n.selectors, {
                $items: ".m-suchfilter__items",
                $filter: ".js-m-suchfilter__item"
            }), u(n.bindings, {
                handleFilterClick: "click:$filter",
                handleFilterMouseDown: "mousedown:$filter"
            }), n.filterClickX = 0, n
        }
        return e = c, o = [{
            key: "className",
            get: function() {
                return "base.modules.m-suchfilter/Component"
            }
        }], (n = [{
            key: "prepare",
            value: function() {
                new a.HorizontalScroll(this.application, this.$elements.items, this.$root)
            }
        }, {
            key: "handleFilterMouseDown",
            value: function(t) {
                this.filterClickX = t.screenX
            }
        }, {
            key: "handleFilterClick",
            value: function(t) {
                if (t.preventDefault(), s.default.isTouchCapable() || t.screenX === this.filterClickX) {
                    var e = (0, s.default)(t.currentTarget),
                        n = e.data("ajaxfilter");
                    this.$elements.filter.removeClass(r.State.ACTIVE), this.$elements.filter.attr("aria-selected", "false"), e.addClass(r.State.ACTIVE), e.attr("aria-selected", "true"), this.application.history.push(e.attr("href")), this.signals.filterChanged.dispatch(n)
                }
            }
        }]) && f(e.prototype, n), o && f(e, o), c
    }(i.Component);
    e.Component = g
}, function(t, e, n) {
    "use strict";
    n(4), n(5), n(6), n(23), n(16), n(0), n(12), n(8), n(1), n(9), n(2), n(3), n(7), Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.Component = void 0;
    var o = n(11),
        i = n(13);

    function r(t) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function a() {
        return (a = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
            }
            return t
        }).apply(this, arguments)
    }

    function s(t, e) {
        for (var n = 0; n < e.length; n++) {
            var o = e[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
        }
    }

    function l(t, e) {
        return (l = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    function c(t) {
        var e = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
            } catch (t) {
                return !1
            }
        }();
        return function() {
            var n, o = f(t);
            if (e) {
                var i = f(this).constructor;
                n = Reflect.construct(o, arguments, i)
            } else n = o.apply(this, arguments);
            return u(this, n)
        }
    }

    function u(t, e) {
        return !e || "object" !== r(e) && "function" != typeof e ? function(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function f(t) {
        return (f = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }
    var h = function(t) {
        ! function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && l(t, e)
        }(u, t);
        var e, n, o, r = c(u);

        function u(t, e) {
            var n;
            return function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, u), a((n = r.call(this, t, e)).selectors, {
                $overviewLink: ".js-m-teaserliste__overview-link",
                $hiddenItems: ".m-teaserliste__listitem.is-hidden",
                $pageLink: ".js-m-teaserliste__page-link",
                $images: ".e-image"
            }), a(n.bindings, {
                handleClick: "click:$overviewLink"
            }), n
        }
        return e = u, o = [{
            key: "className",
            get: function() {
                return "base.modules.m-teaserliste/Component"
            }
        }], (n = [{
            key: "handleClick",
            value: function(t) {
                t.preventDefault();
                var e = this.$elements.hiddenItems,
                    n = e.find(this.selectors.$images),
                    o = function() {};
                this.$elements.overviewLink.hasClass(i.State.KEYBOARD_FOCUS) && (o = function() {
                    e.filter(":first").find("a").focus().addClass(i.State.KEYBOARD_FOCUS)
                }), this.$elements.overviewLink.attr("aria-hidden", !0).addClass(i.State.HIDDEN), $.Velocity.animate(e, "slideDown", {
                    duration: 500,
                    complete: function() {
                        e.css("opacity", 1), e.attr("aria-hidden", !1), n.attr("aria-hidden", !0), o()
                    }
                })
            }
        }]) && s(e.prototype, n), o && s(e, o), u
    }(o.Component);
    e.Component = h
}, function(t, e, n) {
    "use strict";

    function o(t) {
        return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function i() {
        return (i = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
            }
            return t
        }).apply(this, arguments)
    }

    function r(t, e) {
        for (var n = 0; n < e.length; n++) {
            var o = e[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
        }
    }

    function a(t, e) {
        return (a = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    function s(t) {
        var e = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
            } catch (t) {
                return !1
            }
        }();
        return function() {
            var n, o = c(t);
            if (e) {
                var i = c(this).constructor;
                n = Reflect.construct(o, arguments, i)
            } else n = o.apply(this, arguments);
            return l(this, n)
        }
    }

    function l(t, e) {
        return !e || "object" !== o(e) && "function" != typeof e ? function(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function c(t) {
        return (c = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }
    n(4), n(5), n(6), n(0), n(12), n(8), n(1), n(9), n(2), n(3), n(7), Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.Component = void 0;
    var u = function(t) {
        ! function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && a(t, e)
        }(c, t);
        var e, n, o, l = s(c);

        function c(t, e) {
            var n;
            return function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, c), i((n = l.call(this, t, e)).selectors, {
                $linkElement: ".m-togglebutton__link",
                $linkText: ".e-link__title"
            }), i(n.bindings, {
                handleClick: "click:$linkElement"
            }), n
        }
        return e = c, o = [{
            key: "className",
            get: function() {
                return "base.modules.m-togglebutton/Component"
            }
        }], (n = [{
            key: "prepare",
            value: function() {
                this.log("prepare"), this.isActive = this.$root.data("is-active"), this.activeText = this.$root.data("text-active"), this.inactiveText = this.$root.data("text-inactive")
            }
        }, {
            key: "handleClick",
            value: function(t) {
                t.preventDefault(), this.isActive = !this.isActive, this.log("handleClick / new active state: ", this.isActive, this.$root.attr("id")), this.$elements.linkText.text(this.isActive ? this.activeText : this.inactiveText), this.$elements.linkElement.attr("aria-checked", this.isActive), this.$root.attr("data-is-active", this.isActive)
            }
        }]) && r(e.prototype, n), o && r(e, o), c
    }(n(11).Component);
    e.Component = u
}, function(t, e, n) {
    "use strict";
    n(4), n(5), n(6), n(23), n(16), n(0), n(12), n(8), n(1), n(9), n(2), n(3), n(7), Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.Component = void 0;
    var o = n(11),
        i = n(13);

    function r(t) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function a() {
        return (a = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
            }
            return t
        }).apply(this, arguments)
    }

    function s(t, e) {
        for (var n = 0; n < e.length; n++) {
            var o = e[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
        }
    }

    function l(t, e) {
        return (l = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    function c(t) {
        var e = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
            } catch (t) {
                return !1
            }
        }();
        return function() {
            var n, o = f(t);
            if (e) {
                var i = f(this).constructor;
                n = Reflect.construct(o, arguments, i)
            } else n = o.apply(this, arguments);
            return u(this, n)
        }
    }

    function u(t, e) {
        return !e || "object" !== r(e) && "function" != typeof e ? function(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function f(t) {
        return (f = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }
    var h = function(t) {
        ! function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && l(t, e)
        }(u, t);
        var e, n, o, r = c(u);

        function u(t, e) {
            var n;
            return function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, u), a((n = r.call(this, t, e)).selectors, {
                $overviewLink: ".js-m-verteilerliste__overview-link",
                $hiddenItems: ".m-verteilerliste__link.is-hidden",
                $images: ".e-image"
            }), a(n.bindings, {
                handleClick: "click:$overviewLink"
            }), n
        }
        return e = u, o = [{
            key: "className",
            get: function() {
                return "base.modules.m-verteilerliste/Component"
            }
        }], (n = [{
            key: "handleClick",
            value: function(t) {
                t.preventDefault();
                var e = this.$elements.hiddenItems,
                    n = e.find(this.selectors.$images),
                    o = function() {};
                this.$elements.overviewLink.hasClass(i.State.KEYBOARD_FOCUS) && (o = function() {
                    e.filter(":first").find("a").focus().addClass(i.State.KEYBOARD_FOCUS)
                }), this.$elements.overviewLink.attr("aria-hidden", !0).addClass(i.State.HIDDEN), $.Velocity.animate(e, "slideDown", {
                    duration: 500,
                    display: "block",
                    complete: function() {
                        e.removeClass("is-hidden"), e.attr("aria-hidden", !1), n.attr("aria-hidden", !0), o()
                    }
                })
            }
        }]) && s(e.prototype, n), o && s(e, o), u
    }(o.Component);
    e.Component = h
}, function(t, e, n) {
    "use strict";
    n(4), n(5), n(6), n(23), n(16), n(0), n(12), n(8), n(1), n(9), n(2), n(3), n(7), Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.Component = void 0;
    var o = n(11),
        i = n(13);

    function r(t) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function a() {
        return (a = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
            }
            return t
        }).apply(this, arguments)
    }

    function s(t, e) {
        for (var n = 0; n < e.length; n++) {
            var o = e[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
        }
    }

    function l(t, e) {
        return (l = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    function c(t) {
        var e = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
            } catch (t) {
                return !1
            }
        }();
        return function() {
            var n, o = f(t);
            if (e) {
                var i = f(this).constructor;
                n = Reflect.construct(o, arguments, i)
            } else n = o.apply(this, arguments);
            return u(this, n)
        }
    }

    function u(t, e) {
        return !e || "object" !== r(e) && "function" != typeof e ? function(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function f(t) {
        return (f = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }
    var h = function(t) {
        ! function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && l(t, e)
        }(u, t);
        var e, n, o, r = c(u);

        function u(t, e) {
            var n;
            return function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, u), a((n = r.call(this, t, e)).selectors, {
                $overviewLink: ".js-m-verwandtefragen__overview-link",
                $hiddenItems: ".m-verwandtefragen__thema--initially-hidden"
            }), a(n.bindings, {
                handleClick: "click:$overviewLink"
            }), n
        }
        return e = u, o = [{
            key: "className",
            get: function() {
                return "base.modules.m-verwandtefragen/Component"
            }
        }], (n = [{
            key: "handleClick",
            value: function(t) {
                this.log("handleClick"), t.preventDefault();
                var e = this.$elements.hiddenItems,
                    n = function() {};
                this.$elements.overviewLink.hasClass(i.State.KEYBOARD_FOCUS) && (n = function() {
                    e.filter(":first").find("a").focus().addClass(i.State.KEYBOARD_FOCUS)
                }), this.$elements.overviewLink.attr("aria-hidden", !0).addClass(i.State.HIDDEN), $.Velocity.animate(e, "slideDown", {
                    duration: 500,
                    display: "block",
                    complete: function() {
                        e.removeClass("m-verwandtefragen__thema--initially-hidden"), e.attr("aria-hidden", !1), n()
                    }
                })
            }
        }]) && s(e.prototype, n), o && s(e, o), u
    }(o.Component);
    e.Component = h
}, function(t, e, n) {
    "use strict";
    n(4), n(5), n(6), n(23), n(16), n(0), n(12), n(8), n(1), n(40), n(9), n(2), n(3), n(7), Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.Component = void 0;
    var o = n(11),
        i = n(13),
        r = n(85),
        a = n(31);

    function s(t) {
        return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function l() {
        return (l = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
            }
            return t
        }).apply(this, arguments)
    }

    function c(t, e) {
        for (var n = 0; n < e.length; n++) {
            var o = e[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
        }
    }

    function u(t, e) {
        return (u = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    function f(t) {
        var e = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
            } catch (t) {
                return !1
            }
        }();
        return function() {
            var n, o = d(t);
            if (e) {
                var i = d(this).constructor;
                n = Reflect.construct(o, arguments, i)
            } else n = o.apply(this, arguments);
            return h(this, n)
        }
    }

    function h(t, e) {
        return !e || "object" !== s(e) && "function" != typeof e ? function(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function d(t) {
        return (d = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }
    var p = function(t) {
        ! function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && u(t, e)
        }(h, t);
        var e, n, o, s = f(h);

        function h(t, e) {
            var n;
            return function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, h), (n = s.call(this, t, e)).ANIMATION_SLIDE_DURATION_MS = 900, n.currentLevel = 0, n.isMobileState = n.isMobileQuery(), n.KEY_CODE_HELPER = 13, l(n.selectors, {
                $tabHelper: ".js-m-vorteilemitglied__tabhelper",
                $radioContainer: ".js-m-vorteilemitglied__radiocontainer",
                $radioButton: ".js-m-vorteilemitglied__radiobutton",
                $tabPanels: ".js-m-vorteilemitglied__tabpanel",
                $tabContents: ".js-m-vorteilemitglied__tabcontents",
                $back: ".js-m-vorteilemitglied__back",
                $accordionInnerContent: ".js-m-vorteilemitglied__accordioninner",
                $accordionContent: ".js-m-vorteilemitglied__accordioncontent",
                $accordionHead: ".js-m-vorteilemitglied__accordionhead",
                $mobilePosHelper: ".js-m-vorteilemitglied__tabcontainer",
                $accordions: ".js-m-vorteilemitglied__accordion"
            }), l(n.bindings, {
                handleTabClick: "click:$radioButton",
                handleBackClick: "click:$back",
                handleAccordionHeadClick: "click:$accordionHead",
                handleKeyUp: "keyup:$tabHelper"
            }), n
        }
        return e = h, o = [{
            key: "className",
            get: function() {
                return "base.module.m-vorteilemitglied/Component"
            }
        }], (n = [{
            key: "prepare",
            value: function() {
                this.application.viewport.signals.changed.add(this.handleResize.bind(this)), this.application.viewport.signals.breakpointChanged.add(this.handleBreakpointChange.bind(this))
            }
        }, {
            key: "handleKeyUp",
            value: function(t) {
                t.keyCode == this.KEY_CODE_HELPER && this.nextTab()
            }
        }, {
            key: "handleTabClick",
            value: function(t) {
                var e = $(t.currentTarget),
                    n = e.attr(r.Aria.CONTROLS);
                this.$elements.tabPanels.removeClass(i.State.SELECTED), this.$elements.tabPanels.filter("#" + n).addClass(i.State.SELECTED), this.$elements.radioButton.attr(r.Aria.SELECTED, "false"), this.$elements.radioContainer.removeClass(i.State.SELECTED), e.attr(r.Aria.SELECTED, "true"), e.parents(this.selectors.$radioContainer).addClass(i.State.SELECTED), this.isMobileQuery() && (this.application.viewport.disableScrolling(), this.$elements.mobilePosHelper.addClass(i.State.FIXED), this.currentLevel = 1, this.moveToLevel(this.currentLevel))
            }
        }, {
            key: "handleBackClick",
            value: function(t) {
                var e = this,
                    n = $(t.currentTarget).closest(this.selectors.$tabPanels);
                this.currentLevel > 0 && (this.currentLevel--, this.moveToLevel(this.currentLevel).then((function(t) {
                    e.currentLevel <= 0 ? (e.application.viewport.enableScrolling(), e.$elements.tabPanels.removeClass(i.State.SELECTED), e.$elements.mobilePosHelper.removeClass(i.State.FIXED), e.$elements.radioButton.attr(r.Aria.SELECTED, "false")) : e.closeAllAccordions(n)
                })))
            }
        }, {
            key: "handleAccordionHeadClick",
            value: function(t) {
                var e = $(t.currentTarget),
                    n = $(t.currentTarget).parent(),
                    o = n.find(this.selectors.$accordionContent);
                n.toggleClass(i.State.OPENED), n.removeClass(i.State.OPENED_INITIAL);
                var a = n.find(this.selectors.$accordionInnerContent).outerHeight();
                o.height(a), n.hasClass(i.State.OPENED) ? (o.attr(r.Aria.HIDDEN, "false"), e.attr(r.Aria.EXPANDED, "true")) : (o.css("height", "").attr(r.Aria.HIDDEN, "true"), e.attr(r.Aria.EXPANDED, "false")), this.isMobileQuery() && (this.currentLevel = 2, this.moveToLevel(this.currentLevel))
            }
        }, {
            key: "moveToLevel",
            value: function() {
                var t = this,
                    e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                    n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                    o = n ? this.ANIMATION_SLIDE_DURATION_MS : 0,
                    i = new Promise((function(n) {
                        $.Velocity(t.$elements.tabContents, "stop"), $.Velocity.animate(t.$elements.tabContents, {
                            translateX: 100 * -e + "%"
                        }, {
                            duration: o,
                            complete: n,
                            queue: !1
                        })
                    }));
                return i
            }
        }, {
            key: "handleResize",
            value: function() {
                var t = this;
                this.isMobileQuery() || this.$elements.accordions.filter("." + i.State.OPENED).each((function(e, n) {
                    var o = $(n),
                        i = o.find(t.selectors.$accordionInnerContent).outerHeight();
                    o.find(t.selectors.$accordionContent).height(i)
                }))
            }
        }, {
            key: "handleBreakpointChange",
            value: function() {
                var t = 0 == this.$elements.radioButton.filter("[" + r.Aria.SELECTED + '="true"]').length;
                !this.isMobileQuery() && t && this.$elements.radioButton.first().click(), this.isMobileState != this.isMobileQuery() && this.reset(), this.isMobileState = this.isMobileQuery()
            }
        }, {
            key: "reset",
            value: function() {
                this.application.viewport.enableScrolling(), this.$elements.mobilePosHelper.removeClass(i.State.FIXED), this.currentLevel = 0, this.moveToLevel(0, !1), this.closeAllAccordions(), this.isMobileQuery() && (this.$elements.radioButton.attr(r.Aria.SELECTED, "false"), this.$elements.tabPanels.removeClass(i.State.SELECTED))
            }
        }, {
            key: "nextTab",
            value: function() {
                var t = this.$root.find(this.selectors.$radioContainer).filter("." + i.State.SELECTED).next().find(this.selectors.$radioButton);
                t.click().focus()
            }
        }, {
            key: "closeAllAccordions",
            value: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                    e = t || this.$root;
                e.find(this.selectors.$accordions).removeClass(i.State.OPENED), e.find(this.selectors.$accordionHead).attr(r.Aria.EXPANDED, "false"), e.find(this.selectors.$accordionContent).css("height", "").attr(r.Aria.HIDDEN, "true")
            }
        }, {
            key: "isMobileQuery",
            value: function() {
                var t = this.application.viewport.breakpoint;
                return t === a.Breakpoints.MOBILE || t === a.Breakpoints.PHABLET
            }
        }]) && c(e.prototype, n), o && c(e, o), h
    }(o.Component);
    e.Component = p
}, function(t, e, n) {
    "use strict";

    function o(t) {
        return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function i() {
        return (i = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
            }
            return t
        }).apply(this, arguments)
    }

    function r(t, e) {
        for (var n = 0; n < e.length; n++) {
            var o = e[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
        }
    }

    function a(t, e) {
        return (a = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    function s(t) {
        var e = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
            } catch (t) {
                return !1
            }
        }();
        return function() {
            var n, o = c(t);
            if (e) {
                var i = c(this).constructor;
                n = Reflect.construct(o, arguments, i)
            } else n = o.apply(this, arguments);
            return l(this, n)
        }
    }

    function l(t, e) {
        return !e || "object" !== o(e) && "function" != typeof e ? function(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function c(t) {
        return (c = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }
    n(4), n(5), n(6), n(0), n(12), n(8), n(1), n(9), n(2), n(3), n(7), Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.Component = void 0;
    var u = function(t) {
        ! function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && a(t, e)
        }(c, t);
        var e, n, o, l = s(c);

        function c(t, e) {
            var n;
            return function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, c), i((n = l.call(this, t, e)).selectors, {
                $dropdownSelect: ".js-e-dropdown__select"
            }), i(n.bindings, {
                handleDropdownChange: "change:$dropdownSelect"
            }), n
        }
        return e = c, o = [{
            key: "className",
            get: function() {
                return "base.module.m-vorteilskommunikation/Component"
            }
        }], (n = [{
            key: "handleDropdownChange",
            value: function(t) {
                var e = $(t.currentTarget).val();
                this.log(e), window.location.href = e
            }
        }]) && r(e.prototype, n), o && r(e, o), c
    }(n(11).Component);
    e.Component = u
}, function(t, e, n) {
    "use strict";
    n(4), n(5), n(6), n(0), n(12), n(8), n(1), n(9), n(2), n(3), n(7), Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.Component = void 0;
    var o, i = n(11),
        r = (o = n(14)) && o.__esModule ? o : {
            default: o
        },
        a = n(13);

    function s(t) {
        return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function l() {
        return (l = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
            }
            return t
        }).apply(this, arguments)
    }

    function c(t, e) {
        for (var n = 0; n < e.length; n++) {
            var o = e[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
        }
    }

    function u(t, e) {
        return (u = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    function f(t) {
        var e = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
            } catch (t) {
                return !1
            }
        }();
        return function() {
            var n, o = d(t);
            if (e) {
                var i = d(this).constructor;
                n = Reflect.construct(o, arguments, i)
            } else n = o.apply(this, arguments);
            return h(this, n)
        }
    }

    function h(t, e) {
        return !e || "object" !== s(e) && "function" != typeof e ? function(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function d(t) {
        return (d = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }
    n(61);
    var p = function(t) {
        ! function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && u(t, e)
        }(s, t);
        var e, n, o, i = f(s);

        function s(t, e) {
            var n;
            return function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, s), (n = i.call(this, t, e)).waypoint = "function" == typeof Waypoints ? Waypoints : Waypoints.Waypoint, l(n.selectors, {
                $floatingContainer: ".g-stellenanzeige__floating-wrapper"
            }), l(n.bindings, {}), n
        }
        return e = s, o = [{
            key: "className",
            get: function() {
                return "karriere.modules.g-stellenanzeige/Component"
            }
        }], (n = [{
            key: "activate",
            value: function() {
                this.setWaypoints()
            }
        }, {
            key: "handleHeight",
            value: function() {
                this.waypoint.refreshAll()
            }
        }, {
            key: "setWaypoints",
            value: function() {
                var t = this;
                new t.waypoint({
                    element: document.querySelector(".g-stellenanzeige__content"),
                    handler: function(e) {
                        "down" === e ? (0, r.default)(t.$elements.floatingContainer).addClass(a.State.VISIBLE) : (0, r.default)(t.$elements.floatingContainer).removeClass(a.State.VISIBLE)
                    },
                    offset: 80
                }), new t.waypoint({
                    element: document.querySelector(".g-footer"),
                    handler: function(e) {
                        "down" === e ? (0, r.default)(t.$elements.floatingContainer).removeClass(a.State.VISIBLE) : (0, r.default)(t.$elements.floatingContainer).addClass(a.State.VISIBLE)
                    },
                    offset: function() {
                        return 80 + (0, r.default)(t.$elements.floatingContainer).outerHeight()
                    }
                })
            }
        }]) && c(e.prototype, n), o && c(e, o), s
    }(i.Component);
    e.Component = p
}, function(t, e, n) {
    "use strict";
    n(4), n(5), n(6), n(23), n(16), n(0), n(12), n(8), n(1), n(9), n(2), n(3), n(7), Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.Component = void 0;
    var o = n(11),
        i = n(13);

    function r(t) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function a() {
        return (a = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
            }
            return t
        }).apply(this, arguments)
    }

    function s(t, e) {
        for (var n = 0; n < e.length; n++) {
            var o = e[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
        }
    }

    function l(t, e) {
        return (l = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    function c(t) {
        var e = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
            } catch (t) {
                return !1
            }
        }();
        return function() {
            var n, o = f(t);
            if (e) {
                var i = f(this).constructor;
                n = Reflect.construct(o, arguments, i)
            } else n = o.apply(this, arguments);
            return u(this, n)
        }
    }

    function u(t, e) {
        return !e || "object" !== r(e) && "function" != typeof e ? function(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function f(t) {
        return (f = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }
    var h = function(t) {
        ! function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && l(t, e)
        }(u, t);
        var e, n, o, r = c(u);

        function u(t, e) {
            var n;
            return function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, u), a((n = r.call(this, t, e)).selectors, {
                $overviewLink: ".js-g-newsfeed__overview-link",
                $hiddenItems: ".g-newsfeed__listitem.is-hidden",
                $images: ".e-image"
            }), a(n.bindings, {
                handleClick: "click:$overviewLink"
            }), n
        }
        return e = u, o = [{
            key: "className",
            get: function() {
                return "presse.module-groups.g-newsfeed/Component"
            }
        }], (n = [{
            key: "handleClick",
            value: function(t) {
                t.preventDefault();
                var e = this.$elements.hiddenItems,
                    n = e.find(this.selectors.$images),
                    o = function() {};
                this.$elements.overviewLink.hasClass(i.State.KEYBOARD_FOCUS) && (o = function() {
                    e.filter(":first").find("a").focus().addClass(i.State.KEYBOARD_FOCUS)
                }), this.$elements.overviewLink.attr("aria-hidden", !0).addClass(i.State.HIDDEN), $.Velocity.animate(e, "slideDown", {
                    duration: 500,
                    display: "",
                    complete: function() {
                        e.css("opacity", 1), e.removeClass(i.State.HIDDEN), e.attr("aria-hidden", !1), n.attr("aria-hidden", !0), o()
                    }
                })
            }
        }]) && s(e.prototype, n), o && s(e, o), u
    }(o.Component);
    e.Component = h
}, function(t, e, n) {
    "use strict";
    n(4), n(5), n(6), n(0), n(12), n(8), n(1), n(9), n(2), n(3), n(7), Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.Component = void 0;
    var o, i = n(11),
        r = (o = n(14)) && o.__esModule ? o : {
            default: o
        },
        a = n(13);

    function s(t) {
        return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function l() {
        return (l = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
            }
            return t
        }).apply(this, arguments)
    }

    function c(t, e) {
        for (var n = 0; n < e.length; n++) {
            var o = e[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
        }
    }

    function u(t, e) {
        return (u = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    function f(t) {
        var e = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
            } catch (t) {
                return !1
            }
        }();
        return function() {
            var n, o = d(t);
            if (e) {
                var i = d(this).constructor;
                n = Reflect.construct(o, arguments, i)
            } else n = o.apply(this, arguments);
            return h(this, n)
        }
    }

    function h(t, e) {
        return !e || "object" !== s(e) && "function" != typeof e ? function(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function d(t) {
        return (d = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }
    n(61);
    var p = function(t) {
        ! function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && u(t, e)
        }(s, t);
        var e, n, o, i = f(s);

        function s(t, e) {
            var n;
            return function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, s), (n = i.call(this, t, e)).SIDE_ELEMENT_SELECTOR = "blockquote", n.waypoint = window.Waypoint, l(n.selectors, {
                $sideElements: n.SIDE_ELEMENT_SELECTOR
            }), n
        }
        return e = s, o = [{
            key: "className",
            get: function() {
                return "base.module-groups.g-pressemitteilung/Component"
            }
        }], (n = [{
            key: "activate",
            value: function() {
                this.setWaypoints()
            }
        }, {
            key: "prepare",
            value: function() {
                this.application.viewport.signals.contentHeightChanged.add(this.handleHeight.bind(this))
            }
        }, {
            key: "handleHeight",
            value: function() {
                this.waypoint.refreshAll()
            }
        }, {
            key: "setWaypoints",
            value: function() {
                var t = this;
                this.$elements.sideElements.each((function(e, n) {
                    new t.waypoint({
                        element: n,
                        handler: function(t) {
                            "down" === t && (0, r.default)(this.element).addClass(a.State.VISIBLE)
                        },
                        offset: "100%"
                    })
                }))
            }
        }]) && c(e.prototype, n), o && c(e, o), s
    }(i.Component);
    e.Component = p
}, function(t, e, n) {
    "use strict";
    n(4), n(5), n(6), n(16), n(0), n(12), n(8), n(1), n(9), n(2), n(3), n(7), Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.Component = void 0;
    var o, i = n(11),
        r = n(13),
        a = (o = n(14)) && o.__esModule ? o : {
            default: o
        },
        s = n(22);

    function l(t) {
        return (l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function c() {
        return (c = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
            }
            return t
        }).apply(this, arguments)
    }

    function u(t, e) {
        for (var n = 0; n < e.length; n++) {
            var o = e[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
        }
    }

    function f(t, e) {
        return (f = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    function h(t) {
        var e = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
            } catch (t) {
                return !1
            }
        }();
        return function() {
            var n, o = p(t);
            if (e) {
                var i = p(this).constructor;
                n = Reflect.construct(o, arguments, i)
            } else n = o.apply(this, arguments);
            return d(this, n)
        }
    }

    function d(t, e) {
        return !e || "object" !== l(e) && "function" != typeof e ? function(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function p(t) {
        return (p = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }
    var y = function(t) {
        ! function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && f(t, e)
        }(l, t);
        var e, n, o, i = h(l);

        function l(t, e) {
            var n;
            return function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, l), (n = i.call(this, t, e)).SERVICE_URL_DATA_ATTRIBUTE = "serviceurl", n.NEXT_PAGE_DATA_ATTRIBUTE = "nextpage", n.waypoint = n.application.viewport.waypoint, n.teaserSelector = ".g-pressestream__teaserlist .g-pressestream__teaser,  .g-pressestream__teaserlist .m-magazinteaser", n.teaserInAnimation = !1, n.animationStepSize = 50, c(n.selectors, {
                $loadMoreButton: ".js-g-pressestream__loadmore",
                $filterModul: ".m-pressefilter",
                $dropdown: ".m-pressefilter__region .e-dropdown--filter",
                $filterModulContents: ".m-pressefilter > *",
                $teaserList: ".js-g-pressestream__teaserlist",
                $stream: ".js-g-pressestream__stream"
            }), c(n.bindings, {
                handleLoadMoreClick: "click:$loadMoreButton"
            }), n
        }
        return e = l, o = [{
            key: "className",
            get: function() {
                return "presse.module-groups.g-pressestream/Component"
            }
        }], (n = [{
            key: "prepare",
            value: function() {
                this.$elements.filterModul.length > 0 && l.getInstance(this.application, this.$elements.filterModul).then(function(t) {
                    t.signals.requestFilter.add(this.loadTeasers.bind(this)), t.signals.focusFirstItem.add(this.setFocusToFirstResult.bind(this))
                }.bind(this)), this.setWaypoints()
            }
        }, {
            key: "loadTeasers",
            value: function(t) {
                var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                this.log("loadTeasers: " + t), a.default.get(t).done(this.handleFilterResultsDone.bind(this, e)).fail(this.handleResultsFail.bind(this))
            }
        }, {
            key: "handleFilterResultsDone",
            value: function(t, e) {
                var n = (0, a.default)(e);
                t && this.$elements.stream.empty();
                var o = n.find(this.selectors.$teaserList);
                this.$elements.stream.append(o), this.setWaypoints(), this.setupLoadMoreButton(n);
                var i = n.find(this.selectors.$filterModulContents),
                    r = n.find(this.selectors.$dropdown),
                    s = l.getInstance(this.application, r),
                    c = this;
                s.then((function() {
                    return l.getInstance(c.application, c.$elements.filterModul)
                })).then(function(t) {
                    t.updateFilter(i)
                }.bind(this)), this.setFocusToNewResultSet(), this.hideLoader()
            }
        }, {
            key: "handleResultsFail",
            value: function(t, e) {
                this.log(e + ": HTTP Status: " + t.status + ", responseText: " + t.responseText), this.hideLoader()
            }
        }, {
            key: "handleLoadMoreClick",
            value: function(t) {
                t.preventDefault(), this.showLoader();
                var e = (0, a.default)(t.currentTarget),
                    n = e.data(this.SERVICE_URL_DATA_ATTRIBUTE),
                    o = e.attr("href");
                this.application.history.push(o), this.loadTeasers(n, !1), (0, s.isKeyboardInitiatedClick)(t) && (this.application.viewport.keyboardFocus = !0)
            }
        }, {
            key: "setupLoadMoreButton",
            value: function(t) {
                var e = t.find(this.selectors.$loadMoreButton),
                    n = e.length > 0 && "" !== e.data(this.NEXT_PAGE_DATA_ATTRIBUTE),
                    o = this.$root.find(this.selectors.$loadMoreButton);
                if (n) {
                    var i = e.data(this.SERVICE_URL_DATA_ATTRIBUTE),
                        a = e.data(this.NEXT_PAGE_DATA_ATTRIBUTE),
                        s = e.attr("href");
                    this.log("newServiceUrl", i), this.log("nextPage", a), this.log("newBtnHref", s), o.data(this.SERVICE_URL_DATA_ATTRIBUTE, i), o.data(this.NEXT_PAGE_DATA_ATTRIBUTE, a), o.attr("href", s), o.removeClass(r.State.HIDDEN)
                } else o.addClass(r.State.HIDDEN)
            }
        }, {
            key: "setFocusToNewResultSet",
            value: function() {
                if (!this.application.viewport.keyboardFocus) return !1;
                var t = this.$root.find(this.selectors.$teaserList);
                t.length > 1 && t.last().find("a:first").focus()
            }
        }, {
            key: "setFocusToFirstResult",
            value: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    e = this.$root.find(this.selectors.$teaserList);
                e.length && (this.application.viewport.keyboardFocus = t, e.first().find("a:first").focus())
            }
        }, {
            key: "showLoader",
            value: function() {
                this.$elements.loadMoreButton.addClass(r.State.DISABLED)
            }
        }, {
            key: "hideLoader",
            value: function() {
                this.$elements.loadMoreButton.removeClass(r.State.DISABLED)
            }
        }, {
            key: "setWaypoints",
            value: function() {
                var t = this;
                this.$root.find(this.teaserSelector).not("." + r.State.LOADED).each((function(e, n) {
                    t.setWaypoint(e, n)
                }))
            }
        }, {
            key: "setWaypoint",
            value: function(t, e) {
                var n = this,
                    o = (t + 1) % 3;
                0 === o && (o = 3);
                var i = this.animationStepSize * o,
                    r = (0, a.default)(e);
                new n.waypoint({
                    element: e,
                    handler: function(t) {
                        "down" === t && (!1 === n.teaserInAnimation ? n.executeWaypoint(r, i) : n.delayWaypoint(r, i))
                    },
                    offset: "98%"
                })
            }
        }, {
            key: "delayWaypoint",
            value: function(t, e) {
                var n = this;
                setTimeout((function() {
                    !1 === n.teaserInAnimation ? n.executeWaypoint(t, e) : n.delayWaypoint(t, e)
                }), this.animationStepSize)
            }
        }, {
            key: "executeWaypoint",
            value: function(t, e) {
                var n = this;
                this.teaserInAnimation = !0, setTimeout((function() {
                    t.addClass(r.State.LOADED), n.teaserInAnimation = !1
                }), e)
            }
        }]) && u(e.prototype, n), o && u(e, o), l
    }(i.Component);
    e.Component = y
}, function(t, e, n) {
    "use strict";
    n(4), n(5), n(6), n(16), n(0), n(12), n(8), n(1), n(9), n(2), n(3), n(7), Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.Component = void 0;
    var o, i = n(11),
        r = n(13),
        a = n(31),
        s = n(46),
        l = (o = n(14)) && o.__esModule ? o : {
            default: o
        };

    function c(t) {
        return (c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function u() {
        return (u = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
            }
            return t
        }).apply(this, arguments)
    }

    function f(t, e) {
        for (var n = 0; n < e.length; n++) {
            var o = e[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
        }
    }

    function h(t, e) {
        return (h = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    function d(t) {
        var e = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
            } catch (t) {
                return !1
            }
        }();
        return function() {
            var n, o = y(t);
            if (e) {
                var i = y(this).constructor;
                n = Reflect.construct(o, arguments, i)
            } else n = o.apply(this, arguments);
            return p(this, n)
        }
    }

    function p(t, e) {
        return !e || "object" !== c(e) && "function" != typeof e ? function(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function y(t) {
        return (y = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }
    var g = function(t) {
        ! function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && h(t, e)
        }(c, t);
        var e, n, o, i = d(c);

        function c(t, e) {
            var n;
            return function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, c), (n = i.call(this, t, e)).SERVICE_URL_DATA_ATTRIBUTE = "serviceurl", n.lastFocusedItemId = void 0, n.lastItemKeyboardFocused = !1, u(n.selectors, {
                level1Container: ".m-pressefilter__level1",
                toggle: ".m-pressefilter__toggle",
                options: ".m-pressefilter__options",
                expander: ".m-pressefilter__expander",
                filterItem: ".js-m-pressefilter__item",
                filterItemLevel2: ".js-m-pressefilter__level2 .js-m-pressefilter__item",
                skipFilterLink: ".js-m-pressefilter__skipfilter",
                $dropdownSelect: ".js-e-dropdown__button + .e-dropdown__select .e-link"
            }), u(n.bindings, {
                handleToggleClick: "click:$root:" + n.selectors.toggle,
                handleFilterItemClick: "click:$root:" + n.selectors.filterItemLevel2,
                handleSkipFilterLinkClick: "click:$root:" + n.selectors.skipFilterLink,
                handleLevel1FocusIn: "focusin:$root:" + n.selectors.expander + " " + n.selectors.filterItem,
                handleDropdownChange: "click:$dropdownSelect"
            }), n.signals.requestFilter = new s.Signal, n.signals.focusFirstItem = new s.Signal, n
        }
        return e = c, o = [{
            key: "className",
            get: function() {
                return "base.modules.mpressefilter/Component"
            }
        }], (n = [{
            key: "prepare",
            value: function() {
                this.application.viewport.signals.changed.add(this.handleResize.bind(this)), this.checkInitialOpened()
            }
        }, {
            key: "handleDropdownChange",
            value: function(t) {
                t.preventDefault();
                var e = (0, l.default)(t.currentTarget);
                window.location.href = e.attr("href")
            }
        }, {
            key: "handleToggleClick",
            value: function(t) {
                this.$root.find(this.selectors.level1Container).hasClass(r.State.OPENED) ? this.closeLevel1Expander() : this.openLevel1Expander()
            }
        }, {
            key: "handleLevel1FocusIn",
            value: function(t) {
                this.openLevel1Expander()
            }
        }, {
            key: "handleFilterItemClick",
            value: function(t) {
                t.preventDefault();
                var e = (0, l.default)(t.currentTarget),
                    n = e.data(this.SERVICE_URL_DATA_ATTRIBUTE),
                    o = e.attr("href");
                this.application.history.push(o), this.signals.requestFilter.dispatch(n)
            }
        }, {
            key: "handleSkipFilterLinkClick",
            value: function(t) {
                t.preventDefault();
                var e = (0, l.default)(t.currentTarget).hasClass(r.State.KEYBOARD_FOCUS);
                this.signals.focusFirstItem.dispatch(e)
            }
        }, {
            key: "handleResize",
            value: function() {
                this.$root.find(this.selectors.level1Container).hasClass(r.State.OPENED) && (this.closeLevel1Expander(), this.openLevel1Expander())
            }
        }, {
            key: "updateFilter",
            value: function(t) {
                this.storeFocusBeforeUpdate(), this.$root.empty(), this.$root.html(t), this.restoreFocusAfterUpdate(), this.checkInitialOpened()
            }
        }, {
            key: "storeFocusBeforeUpdate",
            value: function() {
                var t = this.$root.find(":focus");
                this.lastFocusedItemId = t.data("contentid"), this.lastItemKeyboardFocused = t.hasClass(r.State.KEYBOARD_FOCUS)
            }
        }, {
            key: "restoreFocusAfterUpdate",
            value: function() {
                if (this.isOpenedInitialBreakpoint()) {
                    this.lastItemKeyboardFocused && (this.application.viewport.keyboardFocus = this.lastItemKeyboardFocused);
                    var t = this.$root.find('[data-contentid="'.concat(this.lastFocusedItemId, '"]')),
                        e = this.$root.find(this.selectors.level1Container);
                    l.default.contains(e.get(0), t.get(0)) && e.addClass(r.State.OPENED_INITIAL), t.focus(), this.lastItemKeyboardFocused = !1, this.lastFocusedItemId = void 0
                }
            }
        }, {
            key: "checkInitialOpened",
            value: function() {
                var t = this.$root.find(this.selectors.level1Container);
                t.hasClass(r.State.OPENED_INITIAL) && this.isOpenedInitialBreakpoint() && (t.addClass(r.State.OPENED), this.openLevel1Expander()), t.removeClass(r.State.OPENED_INITIAL)
            }
        }, {
            key: "openLevel1Expander",
            value: function() {
                var t = this.$root.find(this.selectors.level1Container),
                    e = this.$root.find(this.selectors.options).outerHeight(),
                    n = this.$root.find(this.selectors.expander);
                t.addClass(r.State.OPENED), n.height(e)
            }
        }, {
            key: "closeLevel1Expander",
            value: function() {
                var t = this.$root.find(this.selectors.level1Container),
                    e = this.$root.find(this.selectors.expander);
                t.removeClass(r.State.OPENED), e.css("height", "")
            }
        }, {
            key: "isOpenedInitialBreakpoint",
            value: function() {
                var t = this.application.viewport.breakpoint;
                return t === a.Breakpoints.APPLICATION || t === a.Breakpoints.DESKTOP || t === a.Breakpoints.TABLET
            }
        }]) && f(e.prototype, n), o && f(e, o), c
    }(i.Component);
    e.Component = g
}, function(t, e, n) {
    "use strict";
    n(4), n(5), n(6), n(0), n(12), n(8), n(1), n(40), n(9), n(2), n(3), n(7), Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.Component = void 0, n(144);
    var o, i = n(11),
        r = (o = n(160)) && o.__esModule ? o : {
            default: o
        };

    function a(t) {
        return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function s(t, e, n, o, i, r, a) {
        try {
            var s = t[r](a),
                l = s.value
        } catch (t) {
            return void n(t)
        }
        s.done ? e(l) : Promise.resolve(l).then(o, i)
    }

    function l(t) {
        return function() {
            var e = this,
                n = arguments;
            return new Promise((function(o, i) {
                var r = t.apply(e, n);

                function a(t) {
                    s(r, o, i, a, l, "next", t)
                }

                function l(t) {
                    s(r, o, i, a, l, "throw", t)
                }
                a(void 0)
            }))
        }
    }

    function c() {
        return (c = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
            }
            return t
        }).apply(this, arguments)
    }

    function u(t, e) {
        for (var n = 0; n < e.length; n++) {
            var o = e[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
        }
    }

    function f(t, e) {
        return (f = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    function h(t) {
        var e = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
            } catch (t) {
                return !1
            }
        }();
        return function() {
            var n, o = y(t);
            if (e) {
                var i = y(this).constructor;
                n = Reflect.construct(o, arguments, i)
            } else n = o.apply(this, arguments);
            return d(this, n)
        }
    }

    function d(t, e) {
        return !e || "object" !== a(e) && "function" != typeof e ? p(t) : e
    }

    function p(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }

    function y(t) {
        return (y = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }
    var g = function(t) {
        ! function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && f(t, e)
        }(d, t);
        var e, n, o, i, a, s = h(d);

        function d(t, e) {
            var n;
            return function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, d), c((n = s.call(this, t, e)).selectors, {
                $postfachNotification: ".js-postfach-notification",
                $postfachNotificationA11y: ".js-postfach-notification-a11y"
            }), n.UNREAD_MESSAGES_ENDPOINT = "/service/rest/api/public/rest/mtk/postfach/entries", n.MSG_NO_UNREAD_KEY = "tkde.modul.navigation.postfach.a11y.without_unread_messages", n.MSG_UNREAD_KEY = "tkde.modul.navigation.postfach.a11y.with_unread_messages", n.CLS_HAS_MESSAGES = "has-messages", n.messages = new r.default, n.elementsExist = n.elementsExist.bind(p(n)), n.loadData = n.loadData.bind(p(n)), n.renderData = n.renderData.bind(p(n)), n.updateBadge = n.updateBadge.bind(p(n)), n.updateA11y = n.updateA11y.bind(p(n)), n.updateUnreadMessages = n.updateUnreadMessages.bind(p(n)), n.registerCustomEvents = n.registerCustomEvents.bind(p(n)), n.fetchUnreadMessagesCount = n.fetchUnreadMessagesCount.bind(p(n)), n.handleError = n.handleError.bind(p(n)), n.reset = n.reset.bind(p(n)), n.reset(), n
        }
        return e = d, n = [{
            key: "prepare",
            value: function() {
                this.loadData().then(this.renderData), this.registerCustomEvents()
            }
        }, {
            key: "elementsExist",
            value: function() {
                return this.$elements.postfachNotification && this.$elements.postfachNotification.length > 0 && this.$elements.postfachNotificationA11y && this.$elements.postfachNotificationA11y.length > 0
            }
        }, {
            key: "loadData",
            value: (a = l(regeneratorRuntime.mark((function t() {
                return regeneratorRuntime.wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.prev = 0, t.next = 3, this.fetchUnreadMessagesCount();
                        case 3:
                            this.unreadMessages = t.sent, t.next = 9;
                            break;
                        case 6:
                            t.prev = 6, t.t0 = t.catch(0), this.handleError(t.t0);
                        case 9:
                        case "end":
                            return t.stop()
                    }
                }), t, this, [
                    [0, 6]
                ])
            }))), function() {
                return a.apply(this, arguments)
            })
        }, {
            key: "renderData",
            value: function() {
                this.updateBadge(), this.updateA11y()
            }
        }, {
            key: "updateBadge",
            value: function() {
                this.$elements.postfachNotification.text(this.unreadMessages), this.unreadMessages ? this.$elements.postfachNotification.addClass(this.CLS_HAS_MESSAGES) : this.$elements.postfachNotification.removeClass(this.CLS_HAS_MESSAGES)
            }
        }, {
            key: "updateA11y",
            value: function() {
                var t = this.unreadMessages ? this.messages.getFormattedMessage(this.MSG_UNREAD_KEY, this.unreadMessages) : this.messages.getMessage(this.MSG_NO_UNREAD_KEY);
                this.$elements.postfachNotificationA11y.text(t)
            }
        }, {
            key: "registerCustomEvents",
            value: function() {
                var t = this;
                this.log("register '%s' Event", "tkUpdatePostfachUnreadMessages"), document.body.addEventListener("tkUpdatePostfachUnreadMessages", (function(e) {
                    return t.updateUnreadMessages(e)
                }), !1)
            }
        }, {
            key: "updateUnreadMessages",
            value: function(t) {
                this.log("Triggered unread messages update, event:", t), t.detail && void 0 !== t.detail.unreadMessages && t.detail.unreadMessages >= 0 && (this.log("set unread messages from %s to %s", this.unreadMessages, t.detail.unreadMessages), this.unreadMessages = t.detail.unreadMessages, this.renderData())
            }
        }, {
            key: "fetchUnreadMessagesCount",
            value: (i = l(regeneratorRuntime.mark((function t() {
                return regeneratorRuntime.wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", fetch(this.UNREAD_MESSAGES_ENDPOINT, {
                                credentials: "same-origin"
                            }).then((function(t) {
                                if (!t.ok) throw new Error("Response status code ".concat(t.status));
                                return t.json()
                            })).then((function(t) {
                                return t.entries
                            })));
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }), t, this)
            }))), function() {
                return i.apply(this, arguments)
            })
        }, {
            key: "handleError",
            value: function(t) {
                this.logError({
                    msg: "Error updating postfach notifications: ".concat(t),
                    stacktrace: t.stack ? t.stack : ""
                }), this.reset()
            }
        }, {
            key: "reset",
            value: function() {
                this.unreadMessages = 0, this.elementsExist() && this.$elements.postfachNotification.removeClass(this.CLS_HAS_MESSAGES)
            }
        }], o = [{
            key: "className",
            get: function() {
                return "privatkunden.modules.m-meinetknavibox-complex/Component"
            }
        }], n && u(e.prototype, n), o && u(e, o), d
    }(i.Component);
    e.Component = g
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(t, e, n) {
    var o = {
        "./base/elements/e-dropdown/js/e-dropdown": 223,
        "./base/elements/e-dropdown/js/e-dropdown.js": 223,
        "./base/elements/e-icon/js/e-icon": 224,
        "./base/elements/e-icon/js/e-icon.js": 224,
        "./base/elements/e-like/js/e-like": 225,
        "./base/elements/e-like/js/e-like.js": 225,
        "./base/elements/e-media/js/e-media": 226,
        "./base/elements/e-media/js/e-media.js": 226,
        "./base/empty_for_jenkins": 227,
        "./base/empty_for_jenkins.js": 227,
        "./base/global/js/application": 138,
        "./base/global/js/application.js": 138,
        "./base/global/js/aria": 85,
        "./base/global/js/aria.js": 85,
        "./base/global/js/base": 41,
        "./base/global/js/base.js": 41,
        "./base/global/js/bootstrap": 110,
        "./base/global/js/bootstrap.js": 110,
        "./base/global/js/breakpoints": 31,
        "./base/global/js/breakpoints.js": 31,
        "./base/global/js/component": 11,
        "./base/global/js/component.js": 11,
        "./base/global/js/css": 13,
        "./base/global/js/css.js": 13,
        "./base/global/js/exclude.animation": 228,
        "./base/global/js/exclude.animation.js": 228,
        "./base/global/js/gridhelper": 229,
        "./base/global/js/gridhelper.js": 229,
        "./base/global/js/history": 149,
        "./base/global/js/history.js": 149,
        "./base/global/js/horizontal-scroll": 150,
        "./base/global/js/horizontal-scroll.js": 150,
        "./base/global/js/jquery.fancybox": 86,
        "./base/global/js/jquery.fancybox.js": 86,
        "./base/global/js/keycode": 43,
        "./base/global/js/keycode.js": 43,
        "./base/global/js/mediaplayer": 154,
        "./base/global/js/mediaplayer.js": 154,
        "./base/global/js/pattern-scaffold": 231,
        "./base/global/js/pattern-scaffold.js": 231,
        "./base/global/js/session_timeout": 155,
        "./base/global/js/session_timeout.js": 155,
        "./base/global/js/utag_injector": 232,
        "./base/global/js/utag_injector.js": 232,
        "./base/global/js/utils": 22,
        "./base/global/js/utils.js": 22,
        "./base/global/js/viewport": 109,
        "./base/global/js/viewport.js": 109,
        "./base/global/js/webAnalytics": 157,
        "./base/global/js/webAnalytics.js": 157,
        "./base/module-groups/g-artikel/js/g-artikel": 237,
        "./base/module-groups/g-artikel/js/g-artikel.js": 237,
        "./base/module-groups/g-consentmanager/js/g-consentmanager": 238,
        "./base/module-groups/g-consentmanager/js/g-consentmanager.js": 238,
        "./base/module-groups/g-contentstream/js/g-contentstream": 241,
        "./base/module-groups/g-contentstream/js/g-contentstream.js": 241,
        "./base/module-groups/g-faqhintergrund/js/g-faqhintergrund": 242,
        "./base/module-groups/g-faqhintergrund/js/g-faqhintergrund.js": 242,
        "./base/module-groups/g-header/js/g-header": 243,
        "./base/module-groups/g-header/js/g-header.js": 243,
        "./base/module-groups/g-lightbox/js/g-lightbox": 244,
        "./base/module-groups/g-lightbox/js/g-lightbox.js": 244,
        "./base/module-groups/g-mediengalerie/js/g-mediengalerie": 245,
        "./base/module-groups/g-mediengalerie/js/g-mediengalerie.js": 245,
        "./base/module-groups/g-suche/js/g-suche": 246,
        "./base/module-groups/g-suche/js/g-suche.js": 246,
        "./base/module-groups/g-vernetzung/js/g-vernetzung": 247,
        "./base/module-groups/g-vernetzung/js/g-vernetzung.js": 247,
        "./base/modules/m-akkordeon/js/m-akkordeon": 248,
        "./base/modules/m-akkordeon/js/m-akkordeon.js": 248,
        "./base/modules/m-akkordeonheader/js/m-akkordeonheader": 249,
        "./base/modules/m-akkordeonheader/js/m-akkordeonheader.js": 249,
        "./base/modules/m-artikelautordatum/js/m-artikelautordatum": 250,
        "./base/modules/m-artikelautordatum/js/m-artikelautordatum.js": 250,
        "./base/modules/m-artikelbild/js/m-artikelbild": 251,
        "./base/modules/m-artikelbild/js/m-artikelbild.js": 251,
        "./base/modules/m-artikelserie/js/m-artikelserie": 252,
        "./base/modules/m-artikelserie/js/m-artikelserie.js": 252,
        "./base/modules/m-breadcrumb/js/m-breadcrumb": 253,
        "./base/modules/m-breadcrumb/js/m-breadcrumb.js": 253,
        "./base/modules/m-contactfab/js/m-contactfab": 254,
        "./base/modules/m-contactfab/js/m-contactfab.js": 254,
        "./base/modules/m-feedback/js/m-feedback": 255,
        "./base/modules/m-feedback/js/m-feedback.js": 255,
        "./base/modules/m-floatingbutton/js/m-floatingbutton": 256,
        "./base/modules/m-floatingbutton/js/m-floatingbutton.js": 256,
        "./base/modules/m-gallery/js/m-gallery": 257,
        "./base/modules/m-gallery/js/m-gallery.js": 257,
        "./base/modules/m-kampagnenteaser/js/m-kampagnenteaser": 260,
        "./base/modules/m-kampagnenteaser/js/m-kampagnenteaser.js": 260,
        "./base/modules/m-landingpagehero/js/m-landingpagehero": 261,
        "./base/modules/m-landingpagehero/js/m-landingpagehero.js": 261,
        "./base/modules/m-lesefortschritt/js/m-lesefortschritt": 262,
        "./base/modules/m-lesefortschritt/js/m-lesefortschritt.js": 262,
        "./base/modules/m-magazinfilter/js/m-magazinfilter": 263,
        "./base/modules/m-magazinfilter/js/m-magazinfilter.js": 263,
        "./base/modules/m-magazinhero/js/m-magazinhero": 264,
        "./base/modules/m-magazinhero/js/m-magazinhero.js": 264,
        "./base/modules/m-navigation/js/m-navigation": 265,
        "./base/modules/m-navigation/js/m-navigation-flyout": 266,
        "./base/modules/m-navigation/js/m-navigation-flyout.js": 266,
        "./base/modules/m-navigation/js/m-navigation.js": 265,
        "./base/modules/m-ousp/js/m-ousp": 267,
        "./base/modules/m-ousp/js/m-ousp.js": 267,
        "./base/modules/m-prozessschritte/js/m-prozessschritte": 268,
        "./base/modules/m-prozessschritte/js/m-prozessschritte.js": 268,
        "./base/modules/m-richtext/js/m-richtext": 269,
        "./base/modules/m-richtext/js/m-richtext.js": 269,
        "./base/modules/m-sprungmarke/js/m-sprungmarke": 270,
        "./base/modules/m-sprungmarke/js/m-sprungmarke.js": 270,
        "./base/modules/m-steps/js/m-steps": 271,
        "./base/modules/m-steps/js/m-steps.js": 271,
        "./base/modules/m-stickydiscardable/js/m-stickydiscardable": 272,
        "./base/modules/m-stickydiscardable/js/m-stickydiscardable.js": 272,
        "./base/modules/m-suchfeld/js/m-suchfeld": 273,
        "./base/modules/m-suchfeld/js/m-suchfeld.js": 273,
        "./base/modules/m-suchfilter/js/m-suchfilter": 274,
        "./base/modules/m-suchfilter/js/m-suchfilter.js": 274,
        "./base/modules/m-teaserliste/js/m-teaserliste": 275,
        "./base/modules/m-teaserliste/js/m-teaserliste.js": 275,
        "./base/modules/m-togglebutton/js/m-togglebutton": 276,
        "./base/modules/m-togglebutton/js/m-togglebutton.js": 276,
        "./base/modules/m-verteilerliste/js/m-verteilerliste": 277,
        "./base/modules/m-verteilerliste/js/m-verteilerliste.js": 277,
        "./base/modules/m-verwandtefragen/js/m-verwandtefragen": 278,
        "./base/modules/m-verwandtefragen/js/m-verwandtefragen.js": 278,
        "./base/modules/m-vorteilemitglied/js/m-vorteilemitglied": 279,
        "./base/modules/m-vorteilemitglied/js/m-vorteilemitglied.js": 279,
        "./base/modules/m-vorteilskommunikation/js/m-vorteilskommunikation": 280,
        "./base/modules/m-vorteilskommunikation/js/m-vorteilskommunikation.js": 280,
        "./karriere/module-groups/g-stellenanzeige/js/g-stellenanzeige": 281,
        "./karriere/module-groups/g-stellenanzeige/js/g-stellenanzeige.js": 281,
        "./presse/module-groups/g-newsfeed/js/g-newsfeed": 282,
        "./presse/module-groups/g-newsfeed/js/g-newsfeed.js": 282,
        "./presse/module-groups/g-pressemitteilung/js/g-pressemitteilung": 283,
        "./presse/module-groups/g-pressemitteilung/js/g-pressemitteilung.js": 283,
        "./presse/module-groups/g-pressestream/js/g-pressestream": 284,
        "./presse/module-groups/g-pressestream/js/g-pressestream.js": 284,
        "./presse/modules/m-pressefilter/js/m-pressefilter": 285,
        "./presse/modules/m-pressefilter/js/m-pressefilter.js": 285,
        "./privatkunden/modules/m-meinetknavibox/js/m-meinetknavibox-complex": 286,
        "./privatkunden/modules/m-meinetknavibox/js/m-meinetknavibox-complex.js": 286,
        "./privatkunden/modules/m-meinetknavibox/js/msg": 160,
        "./privatkunden/modules/m-meinetknavibox/js/msg.js": 160
    };

    function i(t) {
        return r(t).then((function(t) {
            return n.t(t, 7)
        }))
    }

    function r(t) {
        return Promise.resolve().then((function() {
            var e = o[t];
            if (!(e + 1)) {
                var n = new Error("Cannot find module '" + t + "'");
                throw n.code = "MODULE_NOT_FOUND", n
            }
            return e
        }))
    }
    i.keys = function() {
        return Object.keys(o)
    }, i.resolve = r, i.id = 341, t.exports = i
}]);
//# sourceMappingURL=app.js.map