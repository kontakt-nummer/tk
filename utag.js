//tealium universal tag - utag.loader ut4.0.202402081109, Copyright 2024 Tealium.com Inc. All Rights Reserved.
var utag_condload = false;
window.__tealium_twc_switch = false;
try {
    try {
        window.utag_cfg_ovrd = window.utag_cfg_ovrd || {};
        window.utag_cfg_ovrd.noview = true;
    } catch (e) { console.log(e) }
} catch (e) { console.log(e); }
if (!utag_condload) {
    try {
        try {
            window.utag_cfg_ovrd = window.utag_cfg_ovrd || {};
            window.utag_cfg_ovrd.domain = location.hostname;
            window.utag_cfg_ovrd.consentPeriod = 365 * 5;
        } catch (e) { console.log(e) }
    } catch (e) { console.log(e); }
}
if (typeof utag == "undefined" && !utag_condload) {
    var utag = {
        id: "techniker-krankenkasse.tk.de",
        o: {},
        sender: {},
        send: {},
        rpt: { ts: { a: new Date() } },
        dbi: [],
        db_log: [],
        loader: {
            q: [],
            lc: 0,
            f: {},
            p: 0,
            ol: 0,
            wq: [],
            lq: [],
            bq: {},
            bk: {},
            rf: 0,
            ri: 0,
            rp: 0,
            rq: [],
            ready_q: [],
            sendq: { "pending": 0 },
            run_ready_q: function() { for (var i = 0; i < utag.loader.ready_q.length; i++) { utag.DB("READY_Q:" + i); try { utag.loader.ready_q[i]() } catch (e) { utag.DB(e) }; } },
            lh: function(a, b, c) {
                a = "" + location.hostname;
                b = a.split(".");
                c = (/\.co\.|\.com\.|\.org\.|\.edu\.|\.net\.|\.asn\.|\...\.jp$/.test(a)) ? 3 : 2;
                return b.splice(b.length - c, c).join(".");
            },
            WQ: function(a, b, c, d, g) {
                utag.DB('WQ:' + utag.loader.wq.length);
                try {
                    if (utag.udoname && utag.udoname.indexOf(".") < 0) { utag.ut.merge(utag.data, window[utag.udoname], 0); }
                    if (utag.cfg.load_rules_at_wait) { utag.handler.LR(utag.data); }
                } catch (e) { utag.DB(e) };
                d = 0;
                g = [];
                for (a = 0; a < utag.loader.wq.length; a++) {
                    b = utag.loader.wq[a];
                    b.load = utag.loader.cfg[b.id].load;
                    if (b.load == 4) {
                        this.f[b.id] = 0;
                        utag.loader.LOAD(b.id)
                    } else if (b.load > 0) {
                        g.push(b);
                        d++;
                    } else { this.f[b.id] = 1; }
                }
                for (a = 0; a < g.length; a++) { utag.loader.AS(g[a]); }
                if (d == 0) { utag.loader.END(); }
            },
            AS: function(a, b, c, d) {
                utag.send[a.id] = a;
                if (typeof a.src == 'undefined') { a.src = utag.cfg.path + ((typeof a.name != 'undefined') ? a.name : 'ut' + 'ag.' + a.id + '.js') }
                a.src += (a.src.indexOf('?') > 0 ? '&' : '?') + 'utv=' + (a.v ? utag.cfg.template + a.v : utag.cfg.v);
                utag.rpt['l_' + a.id] = a.src;
                b = document;
                this.f[a.id] = 0;
                if (a.load == 2) {
                    utag.DB("Attach sync: " + a.src);
                    a.uid = a.id;
                    b.write('<script id="utag_' + a.id + '" src="' + a.src + '"></scr' + 'ipt>')
                    if (typeof a.cb != 'undefined') a.cb();
                } else if (a.load == 1 || a.load == 3) {
                    if (b.createElement) {
                        c = 'utag_techniker-krankenkasse.tk.de_' + a.id;
                        if (!b.getElementById(c)) {
                            d = { src: a.src, id: c, uid: a.id, loc: a.loc }
                            if (a.load == 3) { d.type = "iframe" };
                            if (typeof a.cb != 'undefined') d.cb = a.cb;
                            utag.ut.loader(d);
                        }
                    }
                }
            },
            GV: function(a, b, c) {
                b = {};
                for (c in a) { if (a.hasOwnProperty(c) && typeof a[c] != "function") b[c] = a[c]; }
                return b
            },
            OU: function(tid, tcat, a, b, c, d, f, g) {
                g = {};
                utag.loader.RDcp(g);
                try {
                    if (typeof g['cp.OPTOUTMULTI'] != 'undefined') {
                        c = utag.loader.cfg;
                        a = utag.ut.decode(g['cp.OPTOUTMULTI']).split('|');
                        for (d = 0; d < a.length; d++) {
                            b = a[d].split(':');
                            if (b[1] * 1 !== 0) {
                                if (b[0].indexOf('c') == 0) {
                                    for (f in utag.loader.GV(c)) { if (c[f].tcat == b[0].substring(1)) c[f].load = 0; if (c[f].tid == tid && c[f].tcat == b[0].substring(1)) return true; }
                                    if (tcat == b[0].substring(1)) return true;
                                } else if (b[0] * 1 == 0) { utag.cfg.nocookie = true } else {
                                    for (f in utag.loader.GV(c)) { if (c[f].tid == b[0]) c[f].load = 0 }
                                    if (tid == b[0]) return true;
                                }
                            }
                        }
                    }
                } catch (e) { utag.DB(e) }
                return false;
            },
            RDdom: function(o) {
                var d = document || {},
                    l = location || {};
                o["dom.referrer"] = d.referrer;
                o["dom.title"] = "" + d.title;
                o["dom.domain"] = "" + l.hostname;
                o["dom.query_string"] = ("" + l.search).substring(1);
                o["dom.hash"] = ("" + l.hash).substring(1);
                o["dom.url"] = "" + d.URL;
                o["dom.pathname"] = "" + l.pathname;
                o["dom.viewport_height"] = window.innerHeight || (d.documentElement ? d.documentElement.clientHeight : 960);
                o["dom.viewport_width"] = window.innerWidth || (d.documentElement ? d.documentElement.clientWidth : 960);
            },
            RDcp: function(o, b, c, d) {
                b = utag.loader.RC();
                for (d in b) { if (d.match(/utag_(.*)/)) { for (c in utag.loader.GV(b[d])) { o["cp.utag_" + RegExp.$1 + "_" + c] = b[d][c]; } } }
                for (c in utag.loader.GV((utag.cl && !utag.cl['_all_']) ? utag.cl : b)) { if (c.indexOf("utag_") < 0 && typeof b[c] != "undefined") o["cp." + c] = b[c]; }
            },
            RDqp: function(o, a, b, c) { a = location.search + (location.hash + '').replace("#", "&"); if (utag.cfg.lowerqp) { a = a.toLowerCase() }; if (a.length > 1) { b = a.substring(1).split('&'); for (a = 0; a < b.length; a++) { c = b[a].split("="); if (c.length > 1) { o["qp." + c[0]] = utag.ut.decode(c[1]) } } } },
            RDmeta: function(o, a, b, h) {
                a = document.getElementsByTagName("meta");
                for (b = 0; b < a.length; b++) {
                    try { h = a[b].name || a[b].getAttribute("property") || ""; } catch (e) {
                        h = "";
                        utag.DB(e)
                    };
                    if (utag.cfg.lowermeta) { h = h.toLowerCase() };
                    if (h != "") { o["meta." + h] = a[b].content }
                }
            },
            RDva: function(o) {
                var readAttr = function(o, l) {
                    var a = "",
                        b;
                    a = localStorage.getItem(l);
                    if (!a || a == "{}") return;
                    b = utag.ut.flatten({ va: JSON.parse(a) });
                    utag.ut.merge(o, b, 1);
                }
                try {
                    readAttr(o, "tealium_va");
                    readAttr(o, "tealium_va_" + o["ut.account"] + "_" + o["ut.profile"]);
                } catch (e) { utag.DB(e) }
            },
            RDut: function(o, a) {
                var t = {};
                var d = new Date();
                var m = (utag.ut.typeOf(d.toISOString) == "function");
                o["ut.domain"] = utag.cfg.domain;
                o["ut.version"] = utag.cfg.v;
                t["tealium_event"] = o["ut.event"] = a || "view";
                t["tealium_visitor_id"] = o["ut.visitor_id"] = o["cp.utag_main_v_id"];
                t["tealium_session_id"] = o["ut.session_id"] = o["cp.utag_main_ses_id"];
                t["tealium_session_number"] = o["cp.utag_main__sn"];
                t["tealium_session_event_number"] = o["cp.utag_main__se"];
                try {
                    t["tealium_datasource"] = utag.cfg.datasource;
                    t["tealium_account"] = o["ut.account"] = utag.cfg.utid.split("/")[0];
                    t["tealium_profile"] = o["ut.profile"] = utag.cfg.utid.split("/")[1];
                    t["tealium_environment"] = o["ut.env"] = utag.cfg.path.split("/")[6];
                } catch (e) { utag.DB(e) }
                t["tealium_random"] = Math.random().toFixed(16).substring(2);
                t["tealium_library_name"] = "ut" + "ag.js";
                t["tealium_library_version"] = (utag.cfg.template + "0").substring(2);
                t["tealium_timestamp_epoch"] = Math.floor(d.getTime() / 1000);
                t["tealium_timestamp_utc"] = (m ? d.toISOString() : "");
                d.setHours(d.getHours() - (d.getTimezoneOffset() / 60));
                t["tealium_timestamp_local"] = (m ? d.toISOString().replace("Z", "") : "");
                utag.ut.merge(o, t, 0);
            },
            RDses: function(o, a, c) {
                a = (new Date()).getTime();
                c = (a + parseInt(utag.cfg.session_timeout)) + "";
                if (!o["cp.utag_main_ses_id"]) {
                    o["cp.utag_main_ses_id"] = a + "";
                    o["cp.utag_main__ss"] = "1";
                    o["cp.utag_main__se"] = "1";
                    o["cp.utag_main__sn"] = (1 + parseInt(o["cp.utag_main__sn"] || 0)) + "";
                } else {
                    o["cp.utag_main__ss"] = "0";
                    o["cp.utag_main__se"] = (1 + parseInt(o["cp.utag_main__se"] || 0)) + "";
                }
                o["cp.utag_main__pn"] = o["cp.utag_main__pn"] || "1";
                o["cp.utag_main__st"] = c;
                utag.loader.SC("utag_main", { "_sn": (o["cp.utag_main__sn"] || 1), "_se": o["cp.utag_main__se"], "_ss": o["cp.utag_main__ss"], "_st": c, "ses_id": (o["cp.utag_main_ses_id"] || a) + ";exp-session", "_pn": o["cp.utag_main__pn"] + ";exp-session" });
            },
            RDpv: function(o) {
                if (typeof utag.pagevars == "function") {
                    utag.DB("Read page variables");
                    utag.pagevars(o);
                }
            },
            RD: function(o, a) {
                utag.DB("utag.loader.RD");
                utag.DB(o);
                utag.loader.RDcp(o);
                if (!utag.loader.rd_flag) {
                    utag.loader.rd_flag = 1;
                    o["cp.utag_main_v_id"] = o["cp.utag_main_v_id"] || utag.ut.vi((new Date()).getTime());
                    o["cp.utag_main__pn"] = (1 + parseInt(o["cp.utag_main__pn"] || 0)) + "";
                    utag.loader.SC("utag_main", { "v_id": o["cp.utag_main_v_id"] });
                    utag.loader.RDses(o);
                }
                if (a && !utag.cfg.noview) utag.loader.RDses(o);
                utag.loader.RDqp(o);
                utag.loader.RDmeta(o);
                utag.loader.RDdom(o);
                utag.loader.RDut(o, a || "view");
                utag.loader.RDpv(o);
                utag.loader.RDva(o);
            },
            RC: function(a, x, b, c, d, e, f, g, h, i, j, k, l, m, n, o, v, ck, cv, r, s, t) {
                o = {};
                b = ("" + document.cookie != "") ? (document.cookie).split("; ") : [];
                r = /^(.*?)=(.*)$/;
                s = /^(.*);exp-(.*)$/;
                t = (new Date()).getTime();
                for (c = 0; c < b.length; c++) {
                    if (b[c].match(r)) {
                        ck = RegExp.$1;
                        cv = RegExp.$2;
                    }
                    e = utag.ut.decode(cv);
                    if (typeof ck != "undefined") {
                        if (ck.indexOf("ulog") == 0 || ck.indexOf("utag_") == 0) {
                            e = cv.split("$");
                            g = [];
                            j = {};
                            for (f = 0; f < e.length; f++) {
                                try {
                                    g = e[f].split(":");
                                    if (g.length > 2) { g[1] = g.slice(1).join(":"); }
                                    v = "";
                                    if (("" + g[1]).indexOf("~") == 0) {
                                        h = g[1].substring(1).split("|");
                                        for (i = 0; i < h.length; i++) h[i] = utag.ut.decode(h[i]);
                                        v = h
                                    } else v = utag.ut.decode(g[1]);
                                    j[g[0]] = v;
                                } catch (er) { utag.DB(er) };
                            }
                            o[ck] = {};
                            for (f in utag.loader.GV(j)) {
                                if (j[f] instanceof Array) {
                                    n = [];
                                    for (m = 0; m < j[f].length; m++) { if (j[f][m].match(s)) { k = (RegExp.$2 == "session") ? (typeof j._st != "undefined" ? j._st : t - 1) : parseInt(RegExp.$2); if (k > t) n[m] = (x == 0) ? j[f][m] : RegExp.$1; } }
                                    j[f] = n.join("|");
                                } else {
                                    j[f] = "" + j[f];
                                    if (j[f].match(s)) {
                                        k = (RegExp.$2 == "session") ? (typeof j._st != "undefined" ? j._st : t - 1) : parseInt(RegExp.$2);
                                        j[f] = (k < t) ? null : (x == 0 ? j[f] : RegExp.$1);
                                    }
                                }
                                if (j[f]) o[ck][f] = j[f];
                            }
                        } else if (utag.cl[ck] || utag.cl['_all_']) { o[ck] = e }
                    }
                }
                return (a) ? (o[a] ? o[a] : {}) : o;
            },
            SC: function(a, b, c, d, e, f, g, h, i, j, k, x, v) {
                if (!a) return 0;
                if (a == "utag_main" && utag.cfg.nocookie) return 0;
                v = "";
                var date = new Date();
                var exp = new Date();
                exp.setTime(date.getTime() + (365 * 24 * 60 * 60 * 1000));
                x = exp.toGMTString();
                if (c && c == "da") { x = "Thu, 31 Dec 2009 00:00:00 GMT"; } else if (a.indexOf("utag_") != 0 && a.indexOf("ulog") != 0) { if (typeof b != "object") { v = b } } else {
                    d = utag.loader.RC(a, 0);
                    for (e in utag.loader.GV(b)) {
                        f = "" + b[e];
                        if (f.match(/^(.*);exp-(\d+)(\w)$/)) {
                            g = date.getTime() + parseInt(RegExp.$2) * ((RegExp.$3 == "h") ? 3600000 : 86400000);
                            if (RegExp.$3 == "u") g = parseInt(RegExp.$2);
                            f = RegExp.$1 + ";exp-" + g;
                        }
                        if (c == "i") { if (d[e] == null) d[e] = f; } else if (c == "d") delete d[e];
                        else if (c == "a") d[e] = (d[e] != null) ? (f - 0) + (d[e] - 0) : f;
                        else if (c == "ap" || c == "au") {
                            if (d[e] == null) d[e] = f;
                            else {
                                if (d[e].indexOf("|") > 0) { d[e] = d[e].split("|") }
                                g = (d[e] instanceof Array) ? d[e] : [d[e]];
                                g.push(f);
                                if (c == "au") {
                                    h = {};
                                    k = {};
                                    for (i = 0; i < g.length; i++) {
                                        if (g[i].match(/^(.*);exp-(.*)$/)) { j = RegExp.$1; }
                                        if (typeof k[j] == "undefined") {
                                            k[j] = 1;
                                            h[g[i]] = 1;
                                        }
                                    }
                                    g = [];
                                    for (i in utag.loader.GV(h)) { g.push(i); }
                                }
                                d[e] = g
                            }
                        } else d[e] = f;
                    }
                    h = new Array();
                    for (g in utag.loader.GV(d)) {
                        if (d[g] instanceof Array) {
                            for (c = 0; c < d[g].length; c++) { d[g][c] = encodeURIComponent(d[g][c]) }
                            h.push(g + ":~" + d[g].join("|"))
                        } else h.push((g + ":").replace(/[\,\$\;\?]/g, "") + encodeURIComponent(d[g]))
                    }
                    if (h.length == 0) {
                        h.push("");
                        x = ""
                    }
                    v = (h.join("$"));
                }
                document.cookie = a + "=" + v + ";path=/;domain=" + utag.cfg.domain + ";expires=" + x;
                return 1
            },
            LOAD: function(a, b, c, d) {
                if (!utag.loader.cfg) { return }
                if (this.ol == 0) {
                    if (utag.loader.cfg[a].block && utag.loader.cfg[a].cbf) {
                        this.f[a] = 1;
                        delete utag.loader.bq[a];
                    }
                    for (b in utag.loader.GV(utag.loader.bq)) {
                        if (utag.loader.cfg[a].load == 4 && utag.loader.cfg[a].wait == 0) {
                            utag.loader.bk[a] = 1;
                            utag.DB("blocked: " + a);
                        }
                        utag.DB("blocking: " + b);
                        return;
                    }
                    utag.loader.INIT();
                    return;
                }
                utag.DB('utag.loader.LOAD:' + a);
                if (this.f[a] == 0) {
                    this.f[a] = 1;
                    if (utag.cfg.noview != true) {
                        if (utag.loader.cfg[a].send) {
                            utag.DB("SENDING: " + a);
                            try {
                                if (utag.loader.sendq.pending > 0 && utag.loader.sendq[a]) {
                                    utag.DB("utag.loader.LOAD:sendq: " + a);
                                    while (d = utag.loader.sendq[a].shift()) {
                                        utag.DB(d);
                                        utag.sender[a].send(d.event, utag.handler.C(d.data));
                                        utag.loader.sendq.pending--;
                                    }
                                } else { utag.sender[a].send('view', utag.handler.C(utag.data)); }
                                utag.rpt['s_' + a] = 0;
                            } catch (e) {
                                utag.DB(e);
                                utag.rpt['s_' + a] = 1;
                            }
                        }
                    }
                    if (utag.loader.rf == 0) return;
                    for (b in utag.loader.GV(this.f)) { if (this.f[b] == 0 || this.f[b] == 2) return }
                    utag.loader.END();
                }
            },
            EV: function(a, b, c, d) {
                if (b == "ready") {
                    if (!utag.data) {
                        try {
                            utag.cl = { '_all_': 1 };
                            utag.loader.initdata();
                            utag.loader.RD(utag.data);
                        } catch (e) { utag.DB(e) };
                    }
                    if ((document.attachEvent || utag.cfg.dom_complete) ? document.readyState === "complete" : document.readyState !== "loading") setTimeout(c, 1);
                    else {
                        utag.loader.ready_q.push(c);
                        var RH;
                        if (utag.loader.ready_q.length <= 1) {
                            if (document.addEventListener) {
                                RH = function() {
                                    document.removeEventListener("DOMContentLoaded", RH, false);
                                    utag.loader.run_ready_q()
                                };
                                if (!utag.cfg.dom_complete) document.addEventListener("DOMContentLoaded", RH, false);
                                window.addEventListener("load", utag.loader.run_ready_q, false);
                            } else if (document.attachEvent) {
                                RH = function() {
                                    if (document.readyState === "complete") {
                                        document.detachEvent("onreadystatechange", RH);
                                        utag.loader.run_ready_q()
                                    }
                                };
                                document.attachEvent("onreadystatechange", RH);
                                window.attachEvent("onload", utag.loader.run_ready_q);
                            }
                        }
                    }
                } else { if (a.addEventListener) { a.addEventListener(b, c, false) } else if (a.attachEvent) { a.attachEvent(((d == 1) ? "" : "on") + b, c) } }
            },
            END: function(b, c, d, e, v, w) {
                if (this.ended) { return };
                this.ended = 1;
                utag.DB("loader.END");
                b = utag.data;
                if (utag.handler.base && utag.handler.base != '*') { e = utag.handler.base.split(","); for (d = 0; d < e.length; d++) { if (typeof b[e[d]] != "undefined") utag.handler.df[e[d]] = b[e[d]] } } else if (utag.handler.base == '*') { utag.ut.merge(utag.handler.df, b, 1); }
                utag.rpt['r_0'] = "t";
                for (var r in utag.loader.GV(utag.cond)) { utag.rpt['r_' + r] = (utag.cond[r]) ? "t" : "f"; }
                utag.rpt.ts['s'] = new Date();
                v = utag.cfg.path;
                w = v.indexOf(".tiqcdn.");
                if (w > 0 && b["cp.utag_main__ss"] == 1 && !utag.cfg.no_session_count) utag.ut.loader({ src: v.substring(0, v.indexOf("/ut" + "ag/") + 6) + "tiqapp/ut" + "ag.v.js?a=" + utag.cfg.utid + (utag.cfg.nocookie ? "&nocookie=1" : "&cb=" + (new Date).getTime()), id: "tiqapp" })
                if (utag.cfg.noview != true) utag.handler.RE('view', b, "end");
                utag.handler.INIT();
            }
        },
        DB: function(a, b) {
            if (utag.cfg.utagdb === false) { return; } else if (typeof utag.cfg.utagdb == "undefined") {
                b = document.cookie + '';
                utag.cfg.utagdb = ((b.indexOf('utagdb=true') >= 0) ? true : false);
            }
            if (utag.cfg.utagdb === true) {
                var t;
                if (utag.ut.typeOf(a) == "object") { t = utag.handler.C(a) } else { t = a }
                utag.db_log.push(t);
                try { if (!utag.cfg.noconsole) console.log(t) } catch (e) {}
            }
        },
        RP: function(a, b, c) {
            if (typeof a != 'undefined' && typeof a.src != 'undefined' && a.src != '') {
                b = [];
                for (c in utag.loader.GV(a)) { if (c != 'src') b.push(c + '=' + escape(a[c])) }
                this.dbi.push((new Image()).src = a.src + '?utv=' + utag.cfg.v + '&utid=' + utag.cfg.utid + '&' + (b.join('&')))
            }
        },
        view: function(a, c, d) { return this.track({ event: 'view', data: a || {}, cfg: { cb: c, uids: d } }) },
        link: function(a, c, d) { return this.track({ event: 'link', data: a || {}, cfg: { cb: c, uids: d } }) },
        track: function(a, b, c, d, e) {
            a = a || {};
            if (typeof a == "string") { a = { event: a, data: b || {}, cfg: { cb: c, uids: d } } }
            for (e in utag.loader.GV(utag.o)) { utag.o[e].handler.trigger(a.event || "view", a.data || a, a.cfg || { cb: b, uids: c }) }
            a.cfg = a.cfg || { cb: b };
            if (typeof a.cfg.cb == "function") a.cfg.cb();
            return true
        },
        handler: {
            base: "",
            df: {},
            o: {},
            send: {},
            iflag: 0,
            INIT: function(a, b, c) {
                utag.DB('utag.handler.INIT');
                if (utag.initcatch) { utag.initcatch = 0; return }
                this.iflag = 1;
                a = utag.loader.q.length;
                if (a > 0) {
                    utag.DB("Loader queue");
                    for (b = 0; b < a; b++) {
                        c = utag.loader.q[b];
                        utag.handler.trigger(c.a, c.b, c.c)
                    }
                }
            },
            test: function() { return 1 },
            LR: function(b) {
                utag.DB("Load Rules");
                for (var d in utag.loader.GV(utag.cond)) { utag.cond[d] = false; }
                utag.DB(b);
                utag.loader.loadrules(b);
                utag.DB(utag.cond);
                utag.loader.initcfg();
                utag.loader.OU();
                for (var r in utag.loader.GV(utag.cond)) { utag.rpt['r_' + r] = (utag.cond[r]) ? "t" : "f"; }
            },
            RE: function(a, b, c, d, e, f, g) {
                if (c != "alr" && !this.cfg_extend) { return 0; }
                utag.DB("RE: " + c);
                if (c == "alr") utag.DB("All Tags EXTENSIONS");
                utag.DB(b);
                if (typeof this.extend != "undefined") {
                    g = 0;
                    for (d = 0; d < this.extend.length; d++) {
                        try {
                            e = 0;
                            if (typeof this.cfg_extend != "undefined") {
                                f = this.cfg_extend[d];
                                if (typeof f.count == "undefined") f.count = 0;
                                if (f[a] == 0 || (f.once == 1 && f.count > 0) || f[c] == 0) { e = 1 } else {
                                    if (f[c] == 1) { g = 1 };
                                    f.count++
                                }
                            }
                            if (e != 1) {
                                this.extend[d](a, b);
                                utag.rpt['ex_' + d] = 0
                            }
                        } catch (er) {
                            utag.DB(er);
                            utag.rpt['ex_' + d] = 1;
                            utag.ut.error({ e: er.message, s: utag.cfg.path + 'utag.js', l: d, t: 'ge' });
                        }
                    }
                    utag.DB(b);
                    return g;
                }
            },
            trigger: function(a, b, c, d, e, f) {
                utag.DB('trigger:' + a + (c && c.uids ? ":" + c.uids.join(",") : ""));
                b = b || {};
                utag.DB(b);
                if (!this.iflag) {
                    utag.DB("trigger:called before tags loaded");
                    for (d in utag.loader.f) { if (!(utag.loader.f[d] === 1)) utag.DB('Tag ' + d + ' did not LOAD') }
                    utag.loader.q.push({ a: a, b: utag.handler.C(b), c: c });
                    return;
                }
                utag.ut.merge(b, this.df, 0);
                utag.loader.RD(b, a);
                utag.cfg.noview = false;

                function sendTag(a, b, d) {
                    try {
                        if (typeof utag.sender[d] != "undefined") {
                            utag.DB("SENDING: " + d);
                            utag.sender[d].send(a, utag.handler.C(b));
                            utag.rpt['s_' + d] = 0;
                        } else if (utag.loader.cfg[d].load != 2) {
                            utag.loader.sendq[d] = utag.loader.sendq[d] || [];
                            utag.loader.sendq[d].push({ "event": a, "data": utag.handler.C(b) });
                            utag.loader.sendq.pending++;
                            utag.loader.AS({ id: d, load: 1 });
                        }
                    } catch (e) { utag.DB(e) }
                }
                if (c && c.uids) { this.RE(a, b, "alr"); for (f = 0; f < c.uids.length; f++) { d = c.uids[f]; if (!utag.loader.OU(utag.loader.cfg[d].tid)) { sendTag(a, b, d); } } } else if (utag.cfg.load_rules_ajax) {
                    this.RE(a, b, "blr");
                    this.LR(b);
                    this.RE(a, b, "alr");
                    for (f = 0; f < utag.loader.cfgsort.length; f++) { d = utag.loader.cfgsort[f]; if (utag.loader.cfg[d].load && utag.loader.cfg[d].send) { sendTag(a, b, d); } }
                } else { this.RE(a, b, "alr"); for (d in utag.loader.GV(utag.sender)) { sendTag(a, b, d); } }
                this.RE(a, b, "end");
            },
            C: function(a, b, c) {
                b = {};
                for (c in utag.loader.GV(a)) { if (a[c] instanceof Array) { b[c] = a[c].slice(0) } else { b[c] = a[c] } }
                return b
            }
        },
        ut: {
            pad: function(a, b, c, d) {
                a = "" + ((a - 0).toString(16));
                d = '';
                if (b > a.length) { for (c = 0; c < (b - a.length); c++) { d += '0' } }
                return "" + d + a
            },
            vi: function(t, a, b) {
                if (!utag.v_id) {
                    a = this.pad(t, 12);
                    b = "" + Math.random();
                    a += this.pad(b.substring(2, b.length), 16);
                    try {
                        a += this.pad((navigator.plugins.length ? navigator.plugins.length : 0), 2);
                        a += this.pad(navigator.userAgent.length, 3);
                        a += this.pad(document.URL.length, 4);
                        a += this.pad(navigator.appVersion.length, 3);
                        a += this.pad(screen.width + screen.height + parseInt((screen.colorDepth) ? screen.colorDepth : screen.pixelDepth), 5)
                    } catch (e) {
                        utag.DB(e);
                        a += "12345"
                    };
                    utag.v_id = a;
                }
                return utag.v_id
            },
            hasOwn: function(o, a) { return o != null && Object.prototype.hasOwnProperty.call(o, a) },
            isEmptyObject: function(o, a) {
                for (a in o) { if (utag.ut.hasOwn(o, a)) return false }
                return true
            },
            isEmpty: function(o) { var t = utag.ut.typeOf(o); if (t == "number") { return isNaN(o) } else if (t == "boolean") { return false } else if (t == "string") { return o.length === 0 } else return utag.ut.isEmptyObject(o) },
            typeOf: function(e) { return ({}).toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase(); },
            flatten: function(o) {
                var a = {};

                function r(c, p) { if (Object(c) !== c || c instanceof Array) { a[p] = c; } else { if (utag.ut.isEmptyObject(c)) {} else { for (var d in c) { r(c[d], p ? p + "." + d : d); } } } }
                r(o, "");
                return a;
            },
            merge: function(a, b, c, d) { if (c) { for (d in utag.loader.GV(b)) { a[d] = b[d] } } else { for (d in utag.loader.GV(b)) { if (typeof a[d] == "undefined") a[d] = b[d] } } },
            decode: function(a, b) { b = ""; try { b = decodeURIComponent(a) } catch (e) { utag.DB(e) }; if (b == "") { b = unescape(a) }; return b },
            encode: function(a, b) { b = ""; try { b = encodeURIComponent(a) } catch (e) { utag.DB(e) }; if (b == "") { b = escape(a) }; return b },
            error: function(a, b, c) { if (typeof utag_err != "undefined") { utag_err.push(a) } },
            loader: function(o, a, b, c, l, m) {
                utag.DB(o);
                a = document;
                if (o.type == "iframe") {
                    m = a.getElementById(o.id);
                    if (m && m.tagName == "IFRAME") { m.parentNode.removeChild(m); }
                    b = a.createElement("iframe");
                    o.attrs = o.attrs || {};
                    utag.ut.merge(o.attrs, { "height": "1", "width": "1", "style": "display:none" }, 0);
                } else if (o.type == "img") {
                    utag.DB("Attach img: " + o.src);
                    b = new Image();
                } else {
                    b = a.createElement("script");
                    b.language = "javascript";
                    b.type = "text/javascript";
                    b.async = 1;
                    b.charset = "utf-8";
                }
                if (o.id) { b.id = o.id };
                for (l in utag.loader.GV(o.attrs)) { b.setAttribute(l, o.attrs[l]) }
                b.setAttribute("src", o.src);
                if (typeof o.cb == "function") {
                    if (b.addEventListener) { b.addEventListener("load", function() { o.cb() }, false); } else {
                        b.onreadystatechange = function() {
                            if (this.readyState == 'complete' || this.readyState == 'loaded') {
                                this.onreadystatechange = null;
                                o.cb()
                            }
                        };
                    }
                }
                if (typeof o.error == "function") { utag.loader.EV(b, "error", o.error); }
                if (o.type != "img") {
                    l = o.loc || "head";
                    c = a.getElementsByTagName(l)[0];
                    if (c) { utag.DB("Attach to " + l + ": " + o.src); if (l == "script") { c.parentNode.insertBefore(b, c); } else { c.appendChild(b) } }
                }
            }
        }
    };
    utag.o['techniker-krankenkasse.tk.de'] = utag;
    utag.cfg = { template: "ut4.46.", load_rules_ajax: true, load_rules_at_wait: false, lowerqp: false, noconsole: false, session_timeout: 1800000, readywait: 0, noload: 0, domain: utag.loader.lh(), datasource: "##UTDATASOURCE##".replace("##" + "UTDATASOURCE##", ""), path: "/tk-tag-manager/delivery/tealium/", utid: "techniker-krankenkasse/tk.de/202402071447" };
    utag.cfg.v = utag.cfg.template + "202402081109";
    utag.cond = {};
    utag.pagevars = function(ud) { ud = ud || utag.data; try { ud['js_page.tk'] = tk } catch (e) { utag.DB(e) }; try { ud['js_page.webtrekkUnloadObjects[0].eid'] = webtrekkUnloadObjects[0].eid } catch (e) { utag.DB(e) }; try { ud['js_page.document.referrer'] = document.referrer } catch (e) { utag.DB(e) }; try { ud['js_page.webtrekkConfig.trackId'] = webtrekkConfig.trackId } catch (e) { utag.DB(e) }; try { ud['js_page.utag.cfg.path'] = utag.cfg.path } catch (e) { utag.DB(e) }; try { ud['js_page.tk.webAnalytics'] = tk.webAnalytics } catch (e) { utag.DB(e) }; };
    utag.loader.initdata = function() {
        try {
            utag.data = (typeof utag_data != 'undefined') ? utag_data : {};
            utag.udoname = 'utag_data';
        } catch (e) {
            utag.data = {};
            utag.DB('idf:' + e);
        }
    };
    utag.loader.loadrules = function(_pd, _pc) { var d = _pd || utag.data; var c = _pc || utag.cond; for (var l in utag.loader.GV(c)) { switch (l) {} } };
    utag.pre = function() {
        utag.loader.initdata();
        utag.pagevars();
        try { utag.loader.RD(utag.data) } catch (e) { utag.DB(e) };
        utag.loader.loadrules();
    };
    utag.loader.GET = function() {
        utag.cl = { '_all_': 1 };
        utag.pre();
        utag.handler.extend = [function(a, b) {
            try {
                if (1) {
                    "use strict";
                    var _extends = Object.assign || function(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
                    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) { return typeof obj; } : function(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
                    var utagParams = [];

                    function checkName(name) { return name.replace(/^\_/, "") || name; }

                    function mapValue(name, value) {
                        var old_name = name || '';
                        if ((typeof value === "undefined" ? "undefined" : _typeof(value)) == "object" && !Array.isArray(value)) {
                            for (var i in value) {
                                var paramsuffix = i;
                                var paramname = checkName(name);
                                paramname += "." + paramsuffix;
                                mapValue(paramname, value[i]);
                            }
                        } else if (typeof value == "string" || typeof value == "boolean" || Array.isArray(value)) {
                            name = checkName(name);
                            utagParams[name] = value;
                            _extends(b, utagParams);
                            delete b[old_name];
                        }
                    }
                    mapValue("tk", b.tk);
                }
            } catch (e) { utag.DB(e) }
        }, function(a, b) {
            try {
                if (1) {
                    try {
                        if (utag && utag.gdpr) {
                            b['consent_nutzergerechte_gestaltung'] = utag.gdpr.getSelectedCategories().includes("analytics");
                            b['consent_wirtschaftlicher_werbeeinsatz'] = utag.gdpr.getSelectedCategories().includes("display_ads");
                            b['consent_dienste_von_drittanbietern'] = utag.gdpr.getSelectedCategories().includes("misc");
                        }
                    } catch (e) {}
                }
            } catch (e) { utag.DB(e) }
        }, function(a, b, c, d, e, f, g) {
            if (1) {
                d = b['tk.seite.contentId'];
                if (typeof d == 'undefined') return;
                c = [{ '2000000': 'ja' }, { '2000630': 'ja' }, { '2000636': 'ja' }, { '2000642': 'ja' }, { '2000666': 'ja' }, { '2000784': 'ja' }, { '2002134': 'ja' }, { '2003672': 'ja' }, { '2003708': 'ja' }, { '2004106': 'ja' }, { '2004990': 'ja' }, { '2007396': 'ja' }, { '2007400': 'ja' }, { '2007402': 'ja' }, { '2008112': 'ja' }, { '2009532': 'ja' }, { '2009652': 'ja' }, { '2010362': 'ja' }, { '2012450': 'ja' }, { '2012458': 'ja' }, { '2013346': 'ja' }, { '2016744': 'ja' }, { '2017078': 'ja' }, { '2017126': 'ja' }, { '2017202': 'ja' }, { '2017228': 'ja' }, { '2018558': 'ja' }, { '2018582': 'ja' }, { '2018584': 'ja' }, { '2018586': 'ja' }, { '2018596': 'ja' }, { '2018806': 'ja' }, { '2027282': 'ja' }, { '2027308': 'ja' }, { '2027396': 'ja' }, { '2027870': 'ja' }, { '2032530': 'ja' }, { '2032546': 'ja' }, { '2032548': 'ja' }, { '2005806': 'ja' }, { '2005808': 'ja' }, { '2016618': 'ja' }, { '2016952': 'ja' }, { '2017102': 'ja' }, { '2017116': 'ja' }, { '2016938': 'ja' }, { '2017154': 'ja' }, { '2017032': 'ja' }, { '2017166': 'ja' }, { '2004008': 'ja' }, { '2009668': 'ja' }, { '2017138': 'ja' }, { '2011440': 'ja' }, { '2010674': 'ja' }, { '2002868': 'ja' }, { '2008436': 'ja' }, { '2000760': 'ja' }, { '2032536': 'ja' }, { '2032526': 'ja' }, { '2032542': 'ja' }, { '2024340': 'ja' }, { '2019004': 'ja' }, { '2019006': 'ja' }, { '2019008': 'ja' }, { '2019010': 'ja' }, { '2024334': 'ja' }, { '2028134': 'ja' }, { '2027772': 'ja' }, { '2031608': 'ja' }, { '2024342': 'ja' }, { '2019002': 'ja' }, { '2019016': 'ja' }, { '2019012': 'ja' }, { '2028148': 'ja' }, { '2027778': 'ja' }, { '2056682': 'ja' }, { '2016838': 'ja' }, { '2016832': 'ja' }, { '2016822': 'ja' }, { '2016834': 'ja' }, { '2066630': 'ja' }, { '2066628': 'ja' }, { '2066616': 'ja' }, { '2066618': 'ja' }, { '2066620': 'ja' }, { '2066596': 'ja' }, { '2066626': 'ja' }, { '2066622': 'ja' }, { '2066170': 'ja' }, { '2066176': 'ja' }, { '2066396': 'ja' }, { '2066404': 'ja' }, { '2066410': 'ja' }, { '2066416': 'ja' }, { '2066422': 'ja' }, { '2066430': 'ja' }, { '2066444': 'ja' }, { '2066450': 'ja' }, { '2066470': 'ja' }, { '2066478': 'ja' }, { '2066484': 'ja' }, { '2066490': 'ja' }];
                var m = false;
                for (e = 0; e < c.length; e++) {
                    for (f in utag.loader.GV(c[e])) {
                        if (d.toString().indexOf(f) > -1) {
                            b['IsAdformLandingpage'] = c[e][f];
                            m = true
                        };
                    };
                    if (m) break
                };
                if (!m) b['IsAdformLandingpage'] = 'nein';
            }
        }, function(a, b) { try { if (1) { if (document.referrer && !document.referrer.includes(location.hostname)) { b['encoded_referrer'] = encodeURIComponent(document.referrer); } } } catch (e) { utag.DB(e) } }, function(a, b) {
            try {
                if ((b['consent_nutzergerechte_gestaltung'].toString().indexOf('false') > -1 && typeof b['encoded_referrer'] != 'undefined' && b['encoded_referrer'] != '')) {
                    if (typeof b['cp.wt_ref'] == 'undefined') {
                        document.cookie = "wt_ref=" + b['encoded_referrer'] + ";path=/;domain=" + utag.cfg.domain + ";expires=";
                        b['cp.wt_ref'] = b['encoded_referrer'];
                    }
                }
            } catch (e) { utag.DB(e); }
        }, function(a, b) { try { if (1) { window.webtrekkApplicationEverId = b['qp.eid']; if (window.history && window.history.replaceState) { window.history.replaceState(window.history.state || {}, "", window.location.href.replace(/eid=[a-zA-Z0-9]+/, "")); } } } catch (e) { utag.DB(e) } }, function(a, b, c, d) {
            b._ccity = '';
            b._ccountry = '';
            b._ccurrency = '';
            b._ccustid = '';
            b._corder = (typeof b['tk.bestellung.bestellnummer'] != 'undefined') ? b['tk.bestellung.bestellnummer'] : '';
            b._cpromo = '';
            b._cship = '';
            b._cstate = '';
            b._cstore = '';
            b._csubtotal = '';
            b._ctax = '';
            b._ctotal = (typeof b['tk.bestellung.bestellwert'] != 'undefined') ? b['tk.bestellung.bestellwert'] : '';
            b._ctype = (typeof b['tk.bestellung.status'] != 'undefined') ? b['tk.bestellung.status'] : '';
            b._czip = '';
            b._cprod = [];
            b._cprodname = (typeof b['tk.bestellung.produkte'] != 'undefined' && b['tk.bestellung.produkte'].length > 0) ? b['tk.bestellung.produkte'] : [];
            b._cbrand = [];
            b._ccat = (typeof b['tk.bestellung.produktKategorien'] != 'undefined' && b['tk.bestellung.produktKategorien'].length > 0) ? b['tk.bestellung.produktKategorien'] : [];
            b._ccat2 = (typeof b[''] != 'undefined' && b[''].length > 0) ? b[''] : [];
            b._cquan = (typeof b['tk.bestellung.bestellmenge'] != 'undefined' && b['tk.bestellung.bestellmenge'].length > 0) ? b['tk.bestellung.bestellmenge'] : [];
            b._cprice = (typeof b['tk.bestellung.produktKosten'] != 'undefined' && b['tk.bestellung.produktKosten'].length > 0) ? b['tk.bestellung.produktKosten'] : [];
            b._csku = [];
            b._cpdisc = [];
            if (b._cprod.length == 0) { b._cprod = b._csku.slice() };
            if (b._cprodname.length == 0) { b._cprodname = b._csku.slice() };

            function tf(a) { if (a == '' || isNaN(parseFloat(a))) { return a } else { return (parseFloat(a)).toFixed(2) } };
            b._ctotal = tf(b._ctotal);
            b._csubtotal = tf(b._csubtotal);
            b._ctax = tf(b._ctax);
            b._cship = tf(b._cship);
            for (c = 0; c < b._cprice.length; c++) { b._cprice[c] = tf(b._cprice[c]) };
            for (c = 0; c < b._cpdisc.length; c++) { b._cpdisc[c] = tf(b._cpdisc[c]) };
        }, function(a, b) { try { if (1) { try { b['wt_trackdomain'] = window.document.domain + "/tk-tag-manager/proxy/webtrekk" } catch (e) {} } } catch (e) { utag.DB(e); } }, function(a, b, c, d) {
            try {
                if ((typeof b['tk.seite.seitenVariante'] != 'undefined' && b['tk.seite.seitenVariante'] != '' && typeof b['tk.seite.seitenVariante'] != 'undefined')) {
                    c = [b['tk.seite.seitenname'], b['tk.seite.seitenVariante']];
                    b['tk.seite.seitenname'] = c.join('.')
                }
            } catch (e) { utag.DB(e); }
        }, function(a, b, c, d) {
            try {
                if ((typeof b['tk.app.abschnitt'] != 'undefined' && b['tk.app.abschnitt'] != '' && typeof b['tk.app.abschnitt'] != 'undefined')) {
                    c = [b['tk.seite.seitenname'], b['tk.app.abschnitt']];
                    b['tk.seite.seitenname'] = c.join('.')
                }
            } catch (e) { utag.DB(e); }
        }, function(a, b, c, d) {
            try {
                if ((typeof b['tk.form.abschnitt'] != 'undefined' && b['tk.form.abschnitt'] != '' && typeof b['tk.form.abschnitt'] != 'undefined')) {
                    c = [b['tk.seite.seitenname'], b['tk.form.abschnitt']];
                    b['tk.seite.seitenname'] = c.join('.')
                }
            } catch (e) { utag.DB(e); }
        }, function(a, b) { try { if ((b['tk.seite.cmsDocType'].toString().indexOf('TkFrontendApp') > -1 && typeof b['tk.app.abschnitt'] != 'undefined' && b['tk.app.abschnitt'] == '')) { b['tk.app.abschnitt'] = b['tk.seite.seitenVariante'] } } catch (e) { utag.DB(e); } }, function(a, b) {
            try {
                if (1) {
                    j = 1;
                    for (i = 0; i < b['tk.seite.navigationsPfad'].length; i++) {
                        b['WTebene' + j] = b['tk.seite.navigationsPfad'][i];
                        j++;
                    }
                }
            } catch (e) { utag.DB(e) }
        }, function(a, b) { try { if (1) { try { b['tk.seite.seitenEigenschaften'] = b["tk.seite.seitenEigenschaften"].toString(); } catch (e) {} } } catch (e) { utag.DB(e); } }, function(a, b) { try { if (b['tk.seite.seitenname'] == 'tkde.techniker.tksearch') { b['tk.seite.seitenEigenschaften'] = b['qp.q'] } } catch (e) { utag.DB(e); } }];
        utag.handler.cfg_extend = [{ "bwq": 0, "blr": 1, "end": 0, "id": "56", "alr": 0 }, { "alr": 0, "id": "97", "end": 0, "blr": 1, "bwq": 0 }, { "bwq": 0, "blr": 1, "end": 0, "id": "29", "alr": 0 }, { "bwq": 0, "blr": 1, "end": 0, "id": "101", "alr": 0 }, { "end": 0, "id": "98", "alr": 0, "bwq": 0, "blr": 1 }, { "blr": 1, "bwq": 0, "alr": 0, "id": "87", "end": 0 }, { "end": 0, "id": "24", "alr": 1, "bwq": 0, "blr": 0 }, { "bwq": 0, "blr": 0, "end": 0, "id": "77", "alr": 1 }, { "blr": 0, "bwq": 0, "alr": 1, "id": "67", "end": 0 }, { "end": 0, "id": "66", "alr": 1, "bwq": 0, "blr": 0 }, { "blr": 0, "bwq": 0, "alr": 1, "id": "5", "end": 0 }, { "blr": 0, "bwq": 0, "alr": 1, "id": "102", "end": 0 }, { "blr": 0, "bwq": 0, "alr": 1, "id": "27", "end": 0 }, { "blr": 0, "bwq": 0, "alr": 1, "id": "54", "end": 0 }, { "blr": 0, "bwq": 0, "alr": 1, "id": "105", "end": 0 }];
        utag.loader.initcfg = function() {
            utag.loader.cfg = { "19": { load: 1, tcat: 1, send: 1, v: 202402081108, wait: 1, tid: 20010 }, "20": { load: 1, tcat: 1, send: 1, v: 201908131415, wait: 1, tid: 20010 }, "4": { load: 1, tcat: 1, send: 1, v: 202206161256, wait: 1, tid: 23012 } };
            utag.loader.cfgsort = ["19", "20", "4"];
        }
        utag.loader.initcfg();
        try { utag.gdpr.applyConsentState(); } catch (e) { utag.DB(e) }
    }
    utag.gdpr = {
        consent_prompt: { noShow: false, isEnabled: true, content: {} },
        preferences_prompt: { single_cookie: false, noShow: false, isEnabled: true, defaultState: false, content: {}, categories: { analytics: { id: 1, enabled: true }, affiliates: { id: 2, enabled: true }, display_ads: { id: 3, enabled: true }, search: { id: 4, enabled: true }, email: { id: 5, enabled: true }, personalization: { id: 6, enabled: true }, social: { id: 7, enabled: true }, big_data: { id: 8, enabled: true }, misc: { id: 9, enabled: true }, cookiematch: { id: 10, enabled: true }, cdp: { id: 11, enabled: true }, mobile: { id: 12, enabled: true }, engagement: { id: 13, enabled: true }, monitoring: { id: 14, enabled: true }, crm: { id: 15, enabled: true } } },
        getCategories: function() {
            if (!(utag.gdpr.preferences_prompt && utag.gdpr.preferences_prompt.categories)) { return []; }
            var cats = [],
                gdpr_cats = utag.gdpr.preferences_prompt.categories;
            for (var cat in gdpr_cats) {
                if (!gdpr_cats.hasOwnProperty(cat)) { continue; }
                cats.push(cat);
            }
            return cats;
        },
        getSelectedCategories: function() {
            var sc = [],
                gc = utag.gdpr.getCategories(),
                cs = utag.gdpr.getConsentState(),
                i;
            try { if (typeof cs === "number") { if (parseInt(cs) === 1) { return gc; } else { return sc; } } else { for (i in utag.loader.GV(cs)) { if ("1" === cs[i].ct) { sc.push(gc[i]); } } } } catch (e) { utag.DB(e) }
            return sc;
        },
        getCategoryLanguage: function(category) {
            if (!(utag.gdpr.preferences_prompt && utag.gdpr.preferences_prompt.categories)) { return []; }
            var language = utag.gdpr.getLanguage(utag.gdpr.preferences_prompt);
            return utag.gdpr.preferences_prompt.languages[language].categories[category];
        },
        getConsentState: function() {
            var re = /^c\d+/,
                cd = utag.gdpr.getCookieValues(),
                np = 1,
                gc = utag.gdpr.getCategories(),
                pc = (function(gc) {
                    var pc = [];
                    for (var i = 0; i < gc.length; i++) { pc.push({ ct: null, name: gc[i] }); }
                    return pc;
                }(gc)),
                filteredCD = (function(cd) {
                    var d = {};
                    for (var prop in cd) {
                        if (!cd.hasOwnProperty(prop)) { continue; }
                        if (re.test(prop)) { d[prop] = cd[prop]; }
                    }
                    return d;
                }(cd));
            filteredCD = utag.gdpr.sortedObject(filteredCD, function(val1, val2) {
                var idx1 = parseInt((val1 || "").substring(1), 10),
                    idx2 = parseInt((val2 || "").substring(1), 10);
                if (isNaN(idx1) || isNaN(idx2)) { return 0; }
                return idx1 > idx2 ? 1 : -1;
            });
            for (var cn in utag.loader.GV(filteredCD)) {
                if (cn.match(re)) {
                    var idx = parseInt(cn.substring(1), 10) - 1,
                        ct = gc[idx];
                    pc[idx].ct = cd[cn];
                    if (cd[cn] * 1 !== 0) { np = 0; }
                }
            }
            if (cd["consent"]) { if (cd["consent"] === true || cd["consent"] === "true") { if (np) { return np; } else { return pc; } } else { return -1; } } else if (np === 0) { return pc; } else { return 0; }
        },
        getCookieValues: function() {
            var values = {},
                rcd = (function() { var value = "; " + document.cookie; var parts = value.split("; CONSENTMGR="); if (parts.length == 2) return utag.ut.decode(parts.pop().split(";").shift()); }()),
                cd = utag.gdpr.typeOf(rcd) === "string" ? rcd : "";
            if (utag.data) { utag.data["cp.CONSENTMGR"] = cd; }
            if (cd) {
                var i, optOut, optOutData = decodeURI(cd).split("|");
                for (i = 0; i < optOutData.length; i++) {
                    optOut = optOutData[i].split(":");
                    values[optOut[0]] = optOut[1];
                }
            }
            utag.gdpr.values = values;
            return values;
        },
        getDeTokenizedContent: function(data, _lang) {
            var reg = /{{(.*?)}}/gm,
                token_match = /[{}]/g,
                two_part = /display_ads|big_data/;
            var lang = utag.gdpr.getLanguage(data, _lang),
                langData = data.languages[lang];
            for (var t in langData.common_tokens) {
                if (!langData.common_tokens.hasOwnProperty(t)) { continue; }
                var replacements = langData.common_tokens[t].match(reg);
                if (replacements) {
                    for (var i = 0; i < replacements.length; i++) {
                        var token = replacements[i].replace(token_match, "");
                        langData.common_tokens[t] = langData.common_tokens[t].replace(replacements[i], langData.custom_tokens[token]);
                    }
                }
            }

            function tokenReplace(str) {
                var replacements = str.match(reg);
                if (replacements) {
                    for (var i = 0; i < replacements.length; i++) {
                        var token = replacements[i].replace(/[{}]/g, "") || "";
                        if (langData.common_tokens[token]) { str = str.replace(replacements[i], langData.common_tokens[token]); } else if (langData.custom_tokens[token]) { str = str.replace(replacements[i], langData.custom_tokens[token]); } else if (langData.categories && token.indexOf("category_") > -1) {
                            var split_token = token.split("_");
                            if (token.match(two_part)) {
                                split_token[1] = split_token[1] + '_' + split_token[2];
                                split_token.splice(2, 1);
                            }
                            var category = langData.categories[split_token[1]],
                                key = { "title": "name", "description": "notes" }[split_token[2]];
                            if (category[key]) { str = str.replace(replacements[i], category[key]); }
                        }
                    }
                }
                return str;
            }
            return { js: tokenReplace(data.content.js), html: tokenReplace(data.content.html), css: tokenReplace(data.content.css) };
        },
        getLanguage: function(promptData, preferredLang) {
            var lang = preferredLang || utag.data[window.utag.cfg.gdprDLRef] || (navigator.languages && navigator.languages[0] || navigator.language || navigator.userLanguage);
            lang = (lang || "").split("-")[0];
            if (!promptData) { return lang; }
            return promptData.languages[lang] ? lang : promptData.defaultLang;
        },
        getTokenLanguage: function(promptData, token, lang) {
            lang = lang || utag.gdpr.getLanguage(promptData);
            var langData = promptData.languages[lang];
            if (langData.common_tokens[token]) { return langData.common_tokens[token]; } else if (langData.custom_tokens[token]) { return langData.custom_tokens[token] } else if (langData.categories && token.indexOf("category_") > -1) {
                var split_token = token.split("_"),
                    category = langData.categories[split_token[1]];
                if (category[split_token[2]]) { return category[split_token[2]]; }
            }
            return null;
        },
        refreshCookie: function() { try { utag.gdpr.setCookie(utag.gdpr.getCookieValues()); } catch (e) {} },
        setCookie: function(cookieData) {
            if (utag.gdpr.keys(cookieData).length === 0) { return; }
            var cp = utag.cfg.consentPeriod || 90;
            utag.gdpr.values = cookieData;
            var mo2Val = [];
            for (var i in utag.loader.GV(cookieData)) { mo2Val.push(i + ":" + cookieData[i]); }
            var cD = new Date();
            cD.setDate(cD.getDate() + cp);
            document.cookie = "CONSENTMGR=" + encodeURI(mo2Val.join("|")) + ";domain=" + utag.cfg.domain + ";path=/; expires=" + cD.toGMTString() + ";";
            utag.data["cp.CONSENTMGR"] = mo2Val.join("|");
        },
        setCookieValue: function(key, value) {
            var cookieData = utag.gdpr.getCookieValues();
            cookieData[key] = value;
            utag.gdpr.setCookie(cookieData);
        },
        setConsentValue: function(response) {
            if (response === "") { throw new Error("No response supplied"); }
            response = (response === true || response === "true" || response == 1);
            utag.gdpr.setCookieValue("ts", new Date().getTime());
            utag.gdpr.setCookieValue("consent", response);
        },
        setPreferencesValues: function(categories, noCollect) {
            var cookie_data = utag.gdpr.getCookieValues(),
                lookup = {},
                i, rgx = /\D/,
                names = utag.gdpr.getCategories(),
                chosen_list = [],
                consent_seen = false,
                decline_seen = false,
                crgx = /c\d/,
                fld;
            try {
                for (i = 0; i < names.length; i++) { lookup[names[i]] = 'c' + (i + 1); }
                for (var cat in categories) {
                    if (!categories.hasOwnProperty(cat)) { continue; }
                    if (cat.match(rgx)) { cookie_data[lookup[cat]] = categories[cat]; if (categories[cat] != 0) { chosen_list.push(cat); } } else { cookie_data["c" + cat] = categories[cat]; if (categories[cat] != 0) { chosen_list.push(names[cat - 1]); } }
                }
                for (fld in utag.loader.GV(cookie_data)) { if (fld.match(crgx)) { if (cookie_data[fld] != 0) { consent_seen = true; } else { decline_seen = true; } } }
                cookie_data["ts"] = new Date().getTime();
                cookie_data["consent"] = consent_seen;
                utag.gdpr.setCookie(cookie_data);
            } catch (e) { utag.DB(e) }
            if (noCollect) { return; }
        },
        setAllCategories: function(state, noCollect) {
            var allCats = utag.gdpr.getCategories(),
                prefs = {};
            for (var i = 0; i < allCats.length; i++) { prefs["" + (i + 1)] = state ? "1" : "0"; }
            utag.gdpr.setPreferencesValues(prefs, noCollect);
        },
        setPreferencesFromList: function(list) {
            var prefs = {},
                allCats = utag.gdpr.getCategories();
            for (var i = 0; i < list.length; i++) { prefs[list[i]] = "1"; }
            for (var j = 0; j < allCats.length; j++) { if (!prefs[allCats[j]]) { prefs[allCats[j]] = "0"; } }
            utag.gdpr.setPreferencesValues(prefs);
        },
        typeOf: function(e) { return ({}).toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase(); },
        applyConsentState: function() {
            try {
                var i, lc = utag.loader.cfg,
                    cs = utag.gdpr.getConsentState(),
                    ot = {};
                if (typeof cs === "number") { if ((utag.gdpr.consent_prompt.isEnabled && parseInt(cs) !== 1) || ((!utag.gdpr.consent_prompt.isEnabled && utag.gdpr.preferences_prompt.isEnabled) && parseInt(cs) === -1)) { for (i in utag.loader.GV(lc)) { if (typeof ot[i] === "undefined") { lc[i].load = 0; } } } } else { for (i in utag.loader.GV(lc)) { if (typeof ot[i] === "undefined") { if (lc[i].tcat > 0 && cs[lc[i].tcat - 1].ct == 0) { lc[i].load = 0; } } } }
            } catch (e) { utag.DB(e); }
        },
        updateConsentCookie: function(consent_categories) {
            var list, listType = utag.gdpr.typeOf(consent_categories);
            if (listType === "string") { list = consent_categories.split(/\s*,\s*/); } else if (listType !== "array") { list = []; } else { list = consent_categories.slice(); }
            if (list.length === 0) {
                utag.gdpr.setConsentValue(false);
                utag.gdpr.setAllCategories(false);
                return;
            } else { utag.gdpr.setConsentValue(true); }
            utag.gdpr.setPreferencesFromList(list);
        },
        keys: function(obj) {
            var array = [];
            for (var prop in obj) {
                if (!obj.hasOwnProperty(prop)) { continue; }
                array.push(prop);
            }
            return array;
        },
        sortedObject: function(obj, func) {
            var _obj = {};
            if (obj !== undefined) { var _k1 = utag.gdpr.keys(obj).sort(func); for (var z = 0; z < _k1.length; z++) { _obj[_k1[z]] = obj[_k1[z]]; } }
            return _obj;
        }
    };
    utag.gdpr.consent_prompt.languages = { "en": { "isDefault": "true", "custom_tokens": { "opt_in": "", "privacy_policy_url": "", "opt_out": "", "privacy_policy_text": "", "company_logo_url": "" }, "common_tokens": { "confirmation_button": "", "message": "", "title": "" } } };
    utag.gdpr.consent_prompt.content.css = "";
    utag.gdpr.consent_prompt.content.html = "<div></div>";
    utag.gdpr.consent_prompt.content.js = "";
    utag.gdpr.consent_prompt.defaultLang = "en";
    utag.gdpr.showExplicitConsent = function(_lang) {
        var cn = document.getElementById("__tealiumGDPRecStyle");
        if (cn) { cn.parentNode.removeChild(cn); }
        var hn = document.getElementById("__tealiumGDPRecModal");
        if (hn) { hn.parentNode.removeChild(hn); }
        var sn = document.getElementById("__tealiumGDPRecScript");
        if (sn) { sn.parentNode.removeChild(sn); }
        var dtc = utag.gdpr.getDeTokenizedContent(utag.gdpr.consent_prompt, _lang);
        var head = document.head || document.getElementsByTagName("head")[0],
            style = document.createElement("style"),
            mDiv = document.createElement("div"),
            scr = document.createElement("script"),
            body = document.body || document.getElementsByTagName("body")[0];
        style.type = "text/css";
        style.id = "__tealiumGDPRecStyle";
        if (style.styleSheet) { style.styleSheet.cssText = dtc.css; } else { style.appendChild(document.createTextNode(dtc.css)); }
        head.appendChild(style);
        mDiv.innerHTML = dtc.html;
        mDiv.id = "__tealiumGDPRecModal";
        body.appendChild(mDiv);
        scr.language = "javascript";
        scr.type = "text/javascript";
        scr.text = "try{" + dtc.js + "} catch(e){utag.DB(e)}";
        scr.id = "__tealiumGDPRecScript";
        head.appendChild(scr);
    };
    utag.gdpr.preferences_prompt.languages = { "en": { "common_tokens": { "title": "", "yes": "", "message": "", "category": "", "no": "", "status": "", "description": "", "confirmation_button": "" }, "categories": { "cdp": { "name": "", "notes": "" }, "crm": { "name": "", "notes": "" }, "misc": { "notes": "", "name": "" }, "personalization": { "name": "", "notes": "" }, "analytics": { "name": "", "notes": "" }, "display_ads": { "notes": "", "name": "" }, "email": { "notes": "", "name": "" }, "search": { "notes": "", "name": "" }, "mobile": { "name": "", "notes": "" }, "social": { "name": "", "notes": "" }, "big_data": { "name": "", "notes": "" }, "monitoring": { "name": "", "notes": "" }, "affiliates": { "notes": "", "name": "" }, "engagement": { "notes": "", "name": "" }, "cookiematch": { "name": "", "notes": "" } }, "isDefault": "false" }, "de": { "categories": { "mobile": { "name": "", "notes": "" }, "display_ads": { "name": "", "notes": "" }, "search": { "notes": "", "name": "" }, "email": { "name": "", "notes": "" }, "misc": { "name": "", "notes": "" }, "cdp": { "name": "", "notes": "" }, "crm": { "name": "", "notes": "" }, "personalization": { "name": "", "notes": "" }, "analytics": { "name": "", "notes": "" }, "cookiematch": { "name": "", "notes": "" }, "monitoring": { "name": "", "notes": "" }, "affiliates": { "notes": "", "name": "" }, "engagement": { "notes": "", "name": "" }, "social": { "notes": "", "name": "" }, "big_data": { "notes": "", "name": "" } }, "common_tokens": { "yes": "", "message": "", "category": "", "title": "", "confirmation_button": "", "description": "", "no": "", "status": "" }, "isDefault": "true" } };
    utag.gdpr.preferences_prompt.content.css = "";
    utag.gdpr.preferences_prompt.content.html = "<div></div>";
    utag.gdpr.preferences_prompt.content.js = "";
    utag.gdpr.preferences_prompt.defaultLang = "de";
    utag.gdpr.showConsentPreferences = function(_lang) {
        try {
            if (utag.gdpr.preferences_prompt.noShow) { return; }
            var cn = document.getElementById("__tealiumGDPRcpStyle");
            if (cn) { cn.parentNode.removeChild(cn); }
            var hn = document.getElementById("__tealiumGDPRcpPrefs");
            if (hn) { hn.parentNode.removeChild(hn); }
            var sn = document.getElementById("__tealiumGDPRcpPrefsScript");
            if (sn) { sn.parentNode.removeChild(sn); }
            var dtc = utag.gdpr.getDeTokenizedContent(utag.gdpr.preferences_prompt, _lang);
            var head = document.head || document.getElementsByTagName("head")[0],
                style = document.createElement("style"),
                mDiv = document.createElement("div"),
                scr = document.createElement("script"),
                body = document.body || document.getElementsByTagName("body")[0];
            style.type = "text/css";
            style.id = "__tealiumGDPRcpStyle";
            if (style.styleSheet) { style.styleSheet.cssText = dtc.css; } else { style.appendChild(document.createTextNode(dtc.css)); }
            head.appendChild(style);
            mDiv.innerHTML = dtc.html;
            mDiv.id = "__tealiumGDPRcpPrefs";
            body.appendChild(mDiv);
            scr.language = "javascript";
            scr.type = "text/javascript";
            scr.text = "try{" + dtc.js + "} catch(e){utag.DB(e)}";
            scr.id = "__tealiumGDPRcpPrefsScript";
            head.appendChild(scr);
        } catch (e) { utag.DB(e); }
    };
    utag.track_old = utag.track;
    utag.track = function(a, b, c, d) { if (typeof a == "string") a = { event: a, data: b, cfg: { cb: c, uids: d } }; if (a.event === "update_consent_cookie" && b.consent_categories) { utag.gdpr.updateConsentCookie(b.consent_categories); } else { utag.gdpr.refreshCookie(); return utag.track_old.apply(this, arguments); } };
    utag.loader.OU_old = utag.loader.OU;
    utag.loader.OU = function() {
        utag.loader.OU_old();
        utag.gdpr.applyConsentState();
    };
    if (utag.gdpr.preferences_prompt.single_cookie) {
        window.utag_cfg_ovrd = window.utag_cfg_ovrd || {};
        window.utag_cfg_ovrd.nocookie = true;
    }
    if (!utag.gdpr.consent_prompt.isEnabled && utag.gdpr.getConsentState() == 0) { utag.gdpr.setAllCategories(utag.gdpr.preferences_prompt.defaultState, !0); }
    if (typeof utag_cfg_ovrd != 'undefined') { for (utag._i in utag.loader.GV(utag_cfg_ovrd)) utag.cfg[utag._i] = utag_cfg_ovrd[utag._i] };
    utag.loader.PINIT = function(a, b, c) {
        utag.DB("Pre-INIT");
        if (utag.cfg.noload) { return; }
        try { this.GET(); if (utag.handler.RE('view', utag.data, "blr")) { utag.handler.LR(utag.data); } } catch (e) { utag.DB(e) };
        a = this.cfg;
        c = 0;
        for (b in this.GV(a)) {
            if (a[b].block == 1 || (a[b].load > 0 && (typeof a[b].src != 'undefined' && a[b].src != ''))) {
                a[b].block = 1;
                c = 1;
                this.bq[b] = 1;
            }
        }
        if (c == 1) {
            for (b in this.GV(a)) {
                if (a[b].block) {
                    a[b].id = b;
                    if (a[b].load == 4) a[b].load = 1;
                    a[b].cb = function() {
                        var d = this.uid;
                        utag.loader.cfg[d].cbf = 1;
                        utag.loader.LOAD(d)
                    };
                    this.AS(a[b]);
                }
            }
        }
        if (c == 0) this.INIT();
    };
    utag.loader.INIT = function(a, b, c, d, e) {
        utag.DB('utag.loader.INIT');
        if (this.ol == 1) return -1;
        else this.ol = 1;
        if (utag.cfg.noview != true) utag.handler.RE('view', utag.data, "alr");
        utag.rpt.ts['i'] = new Date();
        d = this.cfgsort;
        for (a = 0; a < d.length; a++) {
            e = d[a];
            b = this.cfg[e];
            b.id = e;
            if (b.block != 1) {
                if (utag.loader.bk[b.id] || ((utag.cfg.readywait || utag.cfg.noview) && b.load == 4)) {
                    this.f[b.id] = 0;
                    utag.loader.LOAD(b.id)
                } else if (b.wait == 1 && utag.loader.rf == 0) {
                    utag.DB('utag.loader.INIT: waiting ' + b.id);
                    this.wq.push(b)
                    this.f[b.id] = 2;
                } else if (b.load > 0) {
                    utag.DB('utag.loader.INIT: loading ' + b.id);
                    this.lq.push(b);
                    this.AS(b);
                }
            }
        }
        if (this.wq.length > 0) utag.loader.EV('', 'ready', function(a) {
            if (utag.loader.rf == 0) {
                utag.DB('READY:utag.loader.wq');
                utag.loader.rf = 1;
                utag.loader.WQ();
            }
        });
        else if (this.lq.length > 0) utag.loader.rf = 1;
        else if (this.lq.length == 0) utag.loader.END();
        return 1
    };
    utag.loader.EV('', 'ready', function(a) {
        if (utag.loader.efr != 1) {
            utag.loader.efr = 1;
            try {
                if (!utag.gdpr.consent_prompt.noShow) {
                    if (!utag.gdpr.getConsentState()) {
                        if (1) { utag.gdpr.showExplicitConsent(); } else {
                            utag.gdpr.consent_prompt.isEnabled = false;
                            utag.view(utag.data);
                        }
                    }
                }
            } catch (e) { utag.DB(e); }
        }
    })
    if (utag.cfg.readywait || utag.cfg.waittimer) {
        utag.loader.EV('', 'ready', function(a) {
            if (utag.loader.rf == 0) {
                utag.loader.rf = 1;
                utag.cfg.readywait = 1;
                utag.DB('READY:utag.cfg.readywait');
                setTimeout(function() { utag.loader.PINIT() }, utag.cfg.waittimer || 1);
            }
        })
    } else { utag.loader.PINIT() }
}