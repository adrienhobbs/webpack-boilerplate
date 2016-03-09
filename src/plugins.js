function s_doPlugins(a) {
    a.campaign = a.Util.getQueryParam("camp")
}

function s_getLoadTime() {
    if (!window.s_loadT) {
        var a = (new Date).getTime(),
            b = window.performance ? performance.timing : 0,
            c = b ? b.requestStart : window.inHeadTS || 0;
        s_loadT = c ? Math.round((a - c) / 100) : ""
    }
    return s_loadT
}

function AppMeasurement() {
    var a = this;
    a.version = "1.4.3";
    var b = window;
    b.s_c_in || (b.s_c_il = [], b.s_c_in = 0), a._il = b.s_c_il, a._in = b.s_c_in, a._il[a._in] = a, b.s_c_in++, a._c = "s_c";
    var c = b.yb;
    c || (c = null);
    var d, e, f = b;
    try {
        for (d = f.parent, e = f.location; d && d.location && e && "" + d.location != "" + e && f.location && "" + d.location != "" + f.location && d.location.host == e.host;) f = d, d = f.parent
    } catch (g) {}
    a.nb = function(a) {
        try {
            console.log(a)
        } catch (b) {}
    }, a.za = function(a) {
        return "" + parseInt(a) == "" + a
    }, a.replace = function(a, b, c) {
        return !a || 0 > a.indexOf(b) ? a : a.split(b).join(c)
    }, a.escape = function(b) {
        var c, d;
        if (!b) return b;
        for (b = encodeURIComponent(b), c = 0; 7 > c; c++) d = "+~!*()'".substring(c, c + 1), 0 <= b.indexOf(d) && (b = a.replace(b, d, "%" + d.charCodeAt(0).toString(16).toUpperCase()));
        return b
    }, a.unescape = function(b) {
        if (!b) return b;
        b = 0 <= b.indexOf("+") ? a.replace(b, "+", " ") : b;
        try {
            return decodeURIComponent(b)
        } catch (c) {}
        return unescape(b)
    }, a.eb = function() {
        var c, d = b.location.hostname,
            e = a.fpCookieDomainPeriods;
        if (e || (e = a.cookieDomainPeriods), d && !a.cookieDomain && !/^[0-9.]+$/.test(d) && (e = e ? parseInt(e) : 2, e = e > 2 ? e : 2, c = d.lastIndexOf("."), c >= 0)) {
            for (; c >= 0 && e > 1;) c = d.lastIndexOf(".", c - 1), e--;
            a.cookieDomain = c > 0 ? d.substring(c) : d
        }
        return a.cookieDomain
    }, a.c_r = a.cookieRead = function(b) {
        b = a.escape(b);
        var c = " " + a.d.cookie,
            d = c.indexOf(" " + b + "="),
            e = 0 > d ? d : c.indexOf(";", d);
        return b = 0 > d ? "" : a.unescape(c.substring(d + 2 + b.length, 0 > e ? c.length : e)), "[[B]]" != b ? b : ""
    }, a.c_w = a.cookieWrite = function(b, c, d) {
        var e, f = a.eb(),
            g = a.cookieLifetime;
        return c = "" + c, g = g ? ("" + g).toUpperCase() : "", d && "SESSION" != g && "NONE" != g && ((e = "" != c ? parseInt(g ? g : 0) : -60) ? (d = new Date, d.setTime(d.getTime() + 1e3 * e)) : 1 == d && (d = new Date, e = d.getYear(), d.setYear(e + 5 + (1900 > e ? 1900 : 0)))), b && "NONE" != g ? (a.d.cookie = b + "=" + a.escape("" != c ? c : "[[B]]") + "; path=/;" + (d && "SESSION" != g ? " expires=" + d.toGMTString() + ";" : "") + (f ? " domain=" + f + ";" : ""), a.cookieRead(b) == c) : 0
    }, a.F = [], a.ba = function(b, c, d) {
        if (a.ta) return 0;
        a.maxDelay || (a.maxDelay = 250);
        var e = 0,
            f = (new Date).getTime() + a.maxDelay,
            g = a.d.visibilityState,
            h = ["webkitvisibilitychange", "visibilitychange"];
        if (g || (g = a.d.webkitVisibilityState), g && "prerender" == g) {
            if (!a.ca)
                for (a.ca = 1, d = 0; d < h.length; d++) a.d.addEventListener(h[d], function() {
                    var b = a.d.visibilityState;
                    b || (b = a.d.webkitVisibilityState), "visible" == b && (a.ca = 0, a.delayReady())
                });
            e = 1, f = 0
        } else d || a.l("_d") && (e = 1);
        return e && (a.F.push({
            m: b,
            a: c,
            t: f
        }), a.ca || setTimeout(a.delayReady, a.maxDelay)), e
    }, a.delayReady = function() {
        var b, c = (new Date).getTime(),
            d = 0;
        for (a.l("_d") ? d = 1 : a.na(); 0 < a.F.length;) {
            if (b = a.F.shift(), d && !b.t && b.t > c) {
                a.F.unshift(b), setTimeout(a.delayReady, parseInt(a.maxDelay / 2));
                break
            }
            a.ta = 1, a[b.m].apply(a, b.a), a.ta = 0
        }
    }, a.setAccount = a.sa = function(b) {
        var c, d;
        if (!a.ba("setAccount", arguments))
            if (a.account = b, a.allAccounts)
                for (c = a.allAccounts.concat(b.split(",")), a.allAccounts = [], c.sort(), d = 0; d < c.length; d++) 0 != d && c[d - 1] == c[d] || a.allAccounts.push(c[d]);
            else a.allAccounts = b.split(",")
    }, a.foreachVar = function(b, c) {
        var d, e, f, g, h = "";
        for (f = e = "", a.lightProfileID ? (d = a.J, (h = a.lightTrackVars) && (h = "," + h + "," + a.ga.join(",") + ",")) : (d = a.c, (a.pe || a.linkType) && (h = a.linkTrackVars, e = a.linkTrackEvents, a.pe && (f = a.pe.substring(0, 1).toUpperCase() + a.pe.substring(1), a[f] && (h = a[f].xb, e = a[f].wb))), h && (h = "," + h + "," + a.A.join(",") + ","), e && h && (h += ",events,")), c && (c = "," + c + ","), e = 0; e < d.length; e++) f = d[e], (g = a[f]) && (!h || 0 <= h.indexOf("," + f + ",")) && (!c || 0 <= c.indexOf("," + f + ",")) && b(f, g)
    }, a.L = function(b, c, d, e, f) {
        var g, h, i, j, k = "",
            l = 0;
        if ("contextData" == b && (b = "c"), c) {
            for (g in c)
                if (!(Object.prototype[g] || f && g.substring(0, f.length) != f) && c[g] && (!d || 0 <= d.indexOf("," + (e ? e + "." : "") + g + ","))) {
                    if (i = !1, l)
                        for (h = 0; h < l.length; h++) g.substring(0, l[h].length) == l[h] && (i = !0);
                    if (!i && ("" == k && (k += "&" + b + "."), h = c[g], f && (g = g.substring(f.length)), 0 < g.length))
                        if (i = g.indexOf("."), i > 0) h = g.substring(0, i), i = (f ? f : "") + h + ".", l || (l = []), l.push(i), k += a.L(h, c, d, e, i);
                        else if ("boolean" == typeof h && (h = h ? "true" : "false"), h) {
                        if ("retrieveLightData" == e && 0 > f.indexOf(".contextData.")) switch (i = g.substring(0, 4), j = g.substring(4), g) {
                            case "transactionID":
                                g = "xact";
                                break;
                            case "channel":
                                g = "ch";
                                break;
                            case "campaign":
                                g = "v0";
                                break;
                            default:
                                a.za(j) && ("prop" == i ? g = "c" + j : "eVar" == i ? g = "v" + j : "list" == i ? g = "l" + j : "hier" == i && (g = "h" + j, h = h.substring(0, 255)))
                        }
                        k += "&" + a.escape(g) + "=" + a.escape(h)
                    }
                }
                "" != k && (k += "&." + b)
        }
        return k
    }, a.gb = function() {
        var b, c, d, e, f, g, h, i, j = "",
            k = "",
            l = "",
            m = c = "";
        for (a.lightProfileID ? (b = a.J, (k = a.lightTrackVars) && (k = "," + k + "," + a.ga.join(",") + ",")) : (b = a.c, (a.pe || a.linkType) && (k = a.linkTrackVars, l = a.linkTrackEvents, a.pe && (c = a.pe.substring(0, 1).toUpperCase() + a.pe.substring(1), a[c] && (k = a[c].xb, l = a[c].wb))), k && (k = "," + k + "," + a.A.join(",") + ","), l && (l = "," + l + ",", k && (k += ",events,")), a.events2 && (m += ("" != m ? "," : "") + a.events2)), a.AudienceManagement && a.AudienceManagement.isReady() && (j += a.L("d", a.AudienceManagement.getEventCallConfigParams())), c = 0; c < b.length; c++) {
            if (e = b[c], f = a[e], d = e.substring(0, 4), g = e.substring(4), !f && "events" == e && m && (f = m, m = ""), f && (!k || 0 <= k.indexOf("," + e + ","))) {
                switch (e) {
                    case "supplementalDataID":
                        e = "sdid";
                        break;
                    case "timestamp":
                        e = "ts";
                        break;
                    case "dynamicVariablePrefix":
                        e = "D";
                        break;
                    case "visitorID":
                        e = "vid";
                        break;
                    case "marketingCloudVisitorID":
                        e = "mid";
                        break;
                    case "analyticsVisitorID":
                        e = "aid";
                        break;
                    case "audienceManagerLocationHint":
                        e = "aamlh";
                        break;
                    case "audienceManagerBlob":
                        e = "aamb";
                        break;
                    case "authState":
                        e = "as";
                        break;
                    case "pageURL":
                        e = "g", 255 < f.length && (a.pageURLRest = f.substring(255), f = f.substring(0, 255));
                        break;
                    case "pageURLRest":
                        e = "-g";
                        break;
                    case "referrer":
                        e = "r";
                        break;
                    case "vmk":
                    case "visitorMigrationKey":
                        e = "vmt";
                        break;
                    case "visitorMigrationServer":
                        e = "vmf", a.ssl && a.visitorMigrationServerSecure && (f = "");
                        break;
                    case "visitorMigrationServerSecure":
                        e = "vmf", !a.ssl && a.visitorMigrationServer && (f = "");
                        break;
                    case "charSet":
                        e = "ce";
                        break;
                    case "visitorNamespace":
                        e = "ns";
                        break;
                    case "cookieDomainPeriods":
                        e = "cdp";
                        break;
                    case "cookieLifetime":
                        e = "cl";
                        break;
                    case "variableProvider":
                        e = "vvp";
                        break;
                    case "currencyCode":
                        e = "cc";
                        break;
                    case "channel":
                        e = "ch";
                        break;
                    case "transactionID":
                        e = "xact";
                        break;
                    case "campaign":
                        e = "v0";
                        break;
                    case "latitude":
                        e = "lat";
                        break;
                    case "longitude":
                        e = "lon";
                        break;
                    case "resolution":
                        e = "s";
                        break;
                    case "colorDepth":
                        e = "c";
                        break;
                    case "javascriptVersion":
                        e = "j";
                        break;
                    case "javaEnabled":
                        e = "v";
                        break;
                    case "cookiesEnabled":
                        e = "k";
                        break;
                    case "browserWidth":
                        e = "bw";
                        break;
                    case "browserHeight":
                        e = "bh";
                        break;
                    case "connectionType":
                        e = "ct";
                        break;
                    case "homepage":
                        e = "hp";
                        break;
                    case "events":
                        if (m && (f += ("" != f ? "," : "") + m), l)
                            for (g = f.split(","), f = "", d = 0; d < g.length; d++) h = g[d], i = h.indexOf("="), i >= 0 && (h = h.substring(0, i)), i = h.indexOf(":"), i >= 0 && (h = h.substring(0, i)), 0 <= l.indexOf("," + h + ",") && (f += (f ? "," : "") + g[d]);
                        break;
                    case "events2":
                        f = "";
                        break;
                    case "contextData":
                        j += a.L("c", a[e], k, e), f = "";
                        break;
                    case "lightProfileID":
                        e = "mtp";
                        break;
                    case "lightStoreForSeconds":
                        e = "mtss", a.lightProfileID || (f = "");
                        break;
                    case "lightIncrementBy":
                        e = "mti", a.lightProfileID || (f = "");
                        break;
                    case "retrieveLightProfiles":
                        e = "mtsr";
                        break;
                    case "deleteLightProfiles":
                        e = "mtsd";
                        break;
                    case "retrieveLightData":
                        a.retrieveLightProfiles && (j += a.L("mts", a[e], k, e)), f = "";
                        break;
                    default:
                        a.za(g) && ("prop" == d ? e = "c" + g : "eVar" == d ? e = "v" + g : "list" == d ? e = "l" + g : "hier" == d && (e = "h" + g, f = f.substring(0, 255)))
                }
                f && (j += "&" + e + "=" + ("pev" != e.substring(0, 3) ? a.escape(f) : f))
            }
            "pev3" == e && a.e && (j += a.e)
        }
        return j
    }, a.u = function(a) {
        var b = a.tagName;
        return "undefined" != "" + a.Bb || "undefined" != "" + a.rb && "HTML" != ("" + a.rb).toUpperCase() ? "" : (b = b && b.toUpperCase ? b.toUpperCase() : "", "SHAPE" == b && (b = ""), b && (("INPUT" == b || "BUTTON" == b) && a.type && a.type.toUpperCase ? b = a.type.toUpperCase() : !b && a.href && (b = "A")), b)
    }, a.va = function(a) {
        var b, c, d, e = a.href ? a.href : "";
        return b = e.indexOf(":"), c = e.indexOf("?"), d = e.indexOf("/"), e && (0 > b || c >= 0 && b > c || d >= 0 && b > d) && (c = a.protocol && 1 < a.protocol.length ? a.protocol : l.protocol ? l.protocol : "", b = l.pathname.lastIndexOf("/"), e = (c ? c + "//" : "") + (a.host ? a.host : l.host ? l.host : "") + ("/" != h.substring(0, 1) ? l.pathname.substring(0, 0 > b ? 0 : b) + "/" : "") + e), e
    }, a.G = function(b) {
        var c, d, e = a.u(b),
            f = "",
            g = 0;
        return e && (c = b.protocol, d = b.onclick, !b.href || "A" != e && "AREA" != e || d && c && !(0 > c.toLowerCase().indexOf("javascript")) ? d ? (f = a.replace(a.replace(a.replace(a.replace("" + d, "\r", ""), "\n", ""), "     ", ""), " ", ""), g = 2) : "INPUT" == e || "SUBMIT" == e ? (b.value ? f = b.value : b.innerText ? f = b.innerText : b.textContent && (f = b.textContent), g = 3) : b.src && "IMAGE" == e && (f = b.src) : f = a.va(b), f) ? {
            id: f.substring(0, 100),
            type: g
        } : 0
    }, a.zb = function(b) {
        for (var c = a.u(b), d = a.G(b); b && !d && "BODY" != c;)(b = b.parentElement ? b.parentElement : b.parentNode) && (c = a.u(b), d = a.G(b));
        return d && "BODY" != c || (b = 0), b && (c = b.onclick ? "" + b.onclick : "", 0 <= c.indexOf(".tl(") || 0 <= c.indexOf(".trackLink(")) && (b = 0), b
    }, a.qb = function() {
        var c, d, e, f, g = a.linkObject,
            h = a.linkType,
            i = a.linkURL;
        if (a.ha = 1, g || (a.ha = 0, g = a.clickObject), g) {
            for (c = a.u(g), d = a.G(g); g && !d && "BODY" != c;)(g = g.parentElement ? g.parentElement : g.parentNode) && (c = a.u(g), d = a.G(g));
            if (d && "BODY" != c || (g = 0), g) {
                var j = g.onclick ? "" + g.onclick : "";
                (0 <= j.indexOf(".tl(") || 0 <= j.indexOf(".trackLink(")) && (g = 0)
            }
        } else a.ha = 1;
        if (!i && g && (i = a.va(g)), i && !a.linkLeaveQueryString && (e = i.indexOf("?"), e >= 0 && (i = i.substring(0, e))), !h && i) {
            var k, l = 0,
                m = 0;
            if (a.trackDownloadLinks && a.linkDownloadFileTypes)
                for (j = i.toLowerCase(), e = j.indexOf("?"), f = j.indexOf("#"), e >= 0 ? f >= 0 && e > f && (e = f) : e = f, e >= 0 && (j = j.substring(0, e)), e = a.linkDownloadFileTypes.toLowerCase().split(","), f = 0; f < e.length; f++)(k = e[f]) && j.substring(j.length - (k.length + 1)) == "." + k && (h = "d");
            if (a.trackExternalLinks && !h && (j = i.toLowerCase(), a.ya(j) && (a.linkInternalFilters || (a.linkInternalFilters = b.location.hostname), e = 0, a.linkExternalFilters ? (e = a.linkExternalFilters.toLowerCase().split(","), l = 1) : a.linkInternalFilters && (e = a.linkInternalFilters.toLowerCase().split(",")), e))) {
                for (f = 0; f < e.length; f++) k = e[f], 0 <= j.indexOf(k) && (m = 1);
                m ? l && (h = "e") : l || (h = "e")
            }
        }
        a.linkObject = g, a.linkURL = i, a.linkType = h, (a.trackClickMap || a.trackInlineStats) && (a.e = "", g && (h = a.pageName, i = 1, g = g.sourceIndex, h || (h = a.pageURL, i = 0), b.s_objectID && (d.id = b.s_objectID, g = d.type = 1), h && d && d.id && c && (a.e = "&pid=" + a.escape(h.substring(0, 255)) + (i ? "&pidt=" + i : "") + "&oid=" + a.escape(d.id.substring(0, 100)) + (d.type ? "&oidt=" + d.type : "") + "&ot=" + c + (g ? "&oi=" + g : ""))))
    }, a.hb = function() {
        var b = a.ha,
            c = a.linkType,
            d = a.linkURL,
            e = a.linkName;
        if (c && (d || e) && (c = c.toLowerCase(), "d" != c && "e" != c && (c = "o"), a.pe = "lnk_" + c, a.pev1 = d ? a.escape(d) : "", a.pev2 = e ? a.escape(e) : "", b = 1), a.abort && (b = 0), a.trackClickMap || a.trackInlineStats) {
            var f, g, h, c = {},
                d = 0,
                i = a.cookieRead("s_sq"),
                j = i ? i.split("&") : 0,
                i = 0;
            if (j)
                for (f = 0; f < j.length; f++) g = j[f].split("="), e = a.unescape(g[0]).split(","), g = a.unescape(g[1]), c[g] = e;
            if (e = a.account.split(","), b || a.e) {
                b && !a.e && (i = 1);
                for (g in c)
                    if (!Object.prototype[g])
                        for (f = 0; f < e.length; f++)
                            for (i && (h = c[g].join(","), h == a.account && (a.e += ("&" != g.charAt(0) ? "&" : "") + g, c[g] = [], d = 1)), j = 0; j < c[g].length; j++) h = c[g][j], h == e[f] && (i && (a.e += "&u=" + a.escape(h) + ("&" != g.charAt(0) ? "&" : "") + g + "&u=0"), c[g].splice(j, 1), d = 1);
                if (b || (d = 1), d) {
                    i = "", f = 2, !b && a.e && (i = a.escape(e.join(",")) + "=" + a.escape(a.e), f = 1);
                    for (g in c) !Object.prototype[g] && f > 0 && 0 < c[g].length && (i += (i ? "&" : "") + a.escape(c[g].join(",")) + "=" + a.escape(g), f--);
                    a.cookieWrite("s_sq", i)
                }
            }
        }
        return b
    }, a.ib = function() {
        if (!a.vb) {
            var b, c, d = new Date,
                e = f.location,
                g = c = b = "",
                h = "",
                i = "",
                j = "1.2",
                k = a.cookieWrite("s_cc", "true", 0) ? "Y" : "N",
                l = "",
                m = "";
            if (d.setUTCDate && (j = "1.3", 0..toPrecision && (j = "1.5", d = [], d.forEach))) {
                j = "1.6", c = 0, b = {};
                try {
                    c = new Iterator(b), c.next && (j = "1.7", d.reduce && (j = "1.8", j.trim && (j = "1.8.1", Date.parse && (j = "1.8.2", Object.create && (j = "1.8.5")))))
                } catch (n) {}
            }
            b = screen.width + "x" + screen.height, g = navigator.javaEnabled() ? "Y" : "N", c = screen.pixelDepth ? screen.pixelDepth : screen.colorDepth, h = a.w.innerWidth ? a.w.innerWidth : a.d.documentElement.offsetWidth, i = a.w.innerHeight ? a.w.innerHeight : a.d.documentElement.offsetHeight;
            try {
                a.b.addBehavior("#default#homePage"), l = a.b.Ab(e) ? "Y" : "N"
            } catch (o) {}
            try {
                a.b.addBehavior("#default#clientCaps"), m = a.b.connectionType
            } catch (p) {}
            a.resolution = b, a.colorDepth = c, a.javascriptVersion = j, a.javaEnabled = g, a.cookiesEnabled = k, a.browserWidth = h, a.browserHeight = i, a.connectionType = m, a.homepage = l, a.vb = 1
        }
    }, a.K = {}, a.loadModule = function(c, d) {
        var e = a.K[c];
        if (!e) {
            e = b["AppMeasurement_Module_" + c] ? new b["AppMeasurement_Module_" + c](a) : {}, a.K[c] = a[c] = e, e.Na = function() {
                return e.Ra
            }, e.Sa = function(b) {
                (e.Ra = b) && (a[c + "_onLoad"] = b, a.ba(c + "_onLoad", [a, e], 1) || b(a, e))
            };
            try {
                Object.defineProperty ? Object.defineProperty(e, "onLoad", {
                    get: e.Na,
                    set: e.Sa
                }) : e._olc = 1
            } catch (f) {
                e._olc = 1
            }
        }
        d && (a[c + "_onLoad"] = d, a.ba(c + "_onLoad", [a, e], 1) || d(a, e))
    }, a.l = function(b) {
        var c, d;
        for (c in a.K)
            if (!Object.prototype[c] && (d = a.K[c]) && (d._olc && d.onLoad && (d._olc = 0, d.onLoad(a, d)), d[b] && d[b]())) return 1;
        return 0
    }, a.lb = function() {
        var b = Math.floor(1e13 * Math.random()),
            c = a.visitorSampling,
            d = a.visitorSamplingGroup,
            d = "s_vsn_" + (a.visitorNamespace ? a.visitorNamespace : a.account) + (d ? "_" + d : ""),
            e = a.cookieRead(d);
        if (c) {
            if (e && (e = parseInt(e)), !e) {
                if (!a.cookieWrite(d, b)) return 0;
                e = b
            }
            if (e % 1e4 > v) return 0
        }
        return 1
    }, a.M = function(b, c) {
        var d, e, f, g, h, i;
        for (d = 0; 2 > d; d++)
            for (e = d > 0 ? a.oa : a.c, f = 0; f < e.length; f++)
                if (g = e[f], (h = b[g]) || b["!" + g]) {
                    if (!c && ("contextData" == g || "retrieveLightData" == g) && a[g])
                        for (i in a[g]) h[i] || (h[i] = a[g][i]);
                    a[g] = h
                }
    }, a.Ga = function(b, c) {
        var d, e, f, g;
        for (d = 0; 2 > d; d++)
            for (e = d > 0 ? a.oa : a.c, f = 0; f < e.length; f++) g = e[f], b[g] = a[g], c || b[g] || (b["!" + g] = 1)
    }, a.cb = function(a) {
        var b, c, d, e, f, g, h = 0,
            i = "",
            j = "";
        if (a && 255 < a.length && (b = "" + a, c = b.indexOf("?"), c > 0 && (g = b.substring(c + 1), b = b.substring(0, c), e = b.toLowerCase(), d = 0, "http://" == e.substring(0, 7) ? d += 7 : "https://" == e.substring(0, 8) && (d += 8), c = e.indexOf("/", d), c > 0 && (e = e.substring(d, c), f = b.substring(c), b = b.substring(0, c), 0 <= e.indexOf("google") ? h = ",q,ie,start,search_key,word,kw,cd," : 0 <= e.indexOf("yahoo.co") && (h = ",p,ei,"), h && g)))) {
            if ((a = g.split("&")) && 1 < a.length) {
                for (d = 0; d < a.length; d++) e = a[d], c = e.indexOf("="), c > 0 && 0 <= h.indexOf("," + e.substring(0, c) + ",") ? i += (i ? "&" : "") + e : j += (j ? "&" : "") + e;
                i && j ? g = i + "&" + j : j = ""
            }
            c = 253 - (g.length - j.length) - b.length, a = b + (c > 0 ? f.substring(0, c) : "") + "?" + g
        }
        return a
    }, a.Ma = function(b) {
        var c = a.d.visibilityState,
            d = ["webkitvisibilitychange", "visibilitychange"];
        if (c || (c = a.d.webkitVisibilityState), c && "prerender" == c) {
            if (b)
                for (c = 0; c < d.length; c++) a.d.addEventListener(d[c], function() {
                    var c = a.d.visibilityState;
                    c || (c = a.d.webkitVisibilityState), "visible" == c && b()
                });
            return !1
        }
        return !0
    }, a.Y = !1, a.C = !1, a.Ta = function() {
        a.C = !0, a.i()
    }, a.W = !1, a.Q = !1, a.Qa = function(b) {
        a.marketingCloudVisitorID = b, a.Q = !0, a.i()
    }, a.T = !1, a.N = !1, a.Ia = function(b) {
        a.analyticsVisitorID = b, a.N = !0, a.i()
    }, a.V = !1, a.P = !1, a.Ka = function(b) {
        a.audienceManagerLocationHint = b, a.P = !0, a.i()
    }, a.U = !1, a.O = !1, a.Ja = function(b) {
        a.audienceManagerBlob = b, a.O = !0, a.i()
    }, a.La = function(b) {
        return a.maxDelay || (a.maxDelay = 250), a.l("_d") ? (b && setTimeout(function() {
            b()
        }, a.maxDelay), !1) : !0
    }, a.X = !1, a.B = !1, a.na = function() {
        a.B = !0, a.i()
    }, a.isReadyToTrack = function() {
        var b = !0,
            c = a.visitor;
        return a.Y || a.C || (a.Ma(a.Ta) ? a.C = !0 : a.Y = !0), a.Y && !a.C ? !1 : (c && c.isAllowed() && (a.W || a.marketingCloudVisitorID || !c.getMarketingCloudVisitorID || (a.W = !0, a.marketingCloudVisitorID = c.getMarketingCloudVisitorID([a, a.Qa]), a.marketingCloudVisitorID && (a.Q = !0)), a.T || a.analyticsVisitorID || !c.getAnalyticsVisitorID || (a.T = !0, a.analyticsVisitorID = c.getAnalyticsVisitorID([a, a.Ia]), a.analyticsVisitorID && (a.N = !0)), a.V || a.audienceManagerLocationHint || !c.getAudienceManagerLocationHint || (a.V = !0, a.audienceManagerLocationHint = c.getAudienceManagerLocationHint([a, a.Ka]), a.audienceManagerLocationHint && (a.P = !0)), a.U || a.audienceManagerBlob || !c.getAudienceManagerBlob || (a.U = !0, a.audienceManagerBlob = c.getAudienceManagerBlob([a, a.Ja]), a.audienceManagerBlob && (a.O = !0)), a.W && !a.Q && !a.marketingCloudVisitorID || a.T && !a.N && !a.analyticsVisitorID || a.V && !a.P && !a.audienceManagerLocationHint || a.U && !a.O && !a.audienceManagerBlob) && (b = !1), a.X || a.B || (a.La(a.na) ? a.B = !0 : a.X = !0), a.X && !a.B && (b = !1), b)
    }, a.k = c, a.o = 0, a.callbackWhenReadyToTrack = function(b, d, e) {
        var f;
        f = {}, f.Xa = b, f.Wa = d, f.Ua = e, a.k == c && (a.k = []), a.k.push(f), 0 == a.o && (a.o = setInterval(a.i, 100))
    }, a.i = function() {
        var b;
        if (a.isReadyToTrack() && (a.o && (clearInterval(a.o), a.o = 0), a.k != c))
            for (; 0 < a.k.length;) b = a.k.shift(), b.Wa.apply(b.Xa, b.Ua)
    }, a.Oa = function(b) {
        var d, e, f = c,
            g = c;
        if (!a.isReadyToTrack()) {
            if (d = [], b != c)
                for (e in f = {}, b) f[e] = b[e];
            return g = {}, a.Ga(g, !0), d.push(f), d.push(g), a.callbackWhenReadyToTrack(a, a.track, d), !0
        }
        return !1
    }, a.fb = function() {
        var b, c = a.cookieRead("s_fid"),
            d = "",
            e = "";
        b = 8;
        var f = 4;
        if (!c || 0 > c.indexOf("-")) {
            for (c = 0; 16 > c; c++) b = Math.floor(Math.random() * b), d += "0123456789ABCDEF".substring(b, b + 1), b = Math.floor(Math.random() * f), e += "0123456789ABCDEF".substring(b, b + 1), b = f = 16;
            c = d + "-" + e
        }
        return a.cookieWrite("s_fid", c, 1) || (c = 0), c
    }, a.t = a.track = function(c, d) {
        var e, g = new Date,
            h = "s" + Math.floor(g.getTime() / 108e5) % 10 + Math.floor(1e13 * Math.random()),
            i = g.getYear(),
            i = "t=" + a.escape(g.getDate() + "/" + g.getMonth() + "/" + (1900 > i ? i + 1900 : i) + " " + g.getHours() + ":" + g.getMinutes() + ":" + g.getSeconds() + " " + g.getDay() + " " + g.getTimezoneOffset());
        a.visitor && (a.visitor.getAuthState && (a.authState = a.visitor.getAuthState()), !a.supplementalDataID && a.visitor.getSupplementalDataID && (a.supplementalDataID = a.visitor.getSupplementalDataID("AppMeasurement:" + a._in, a.expectSupplementalData ? !1 : !0))), a.l("_s"), a.Oa(c) || (d && a.M(d), c && (e = {}, a.Ga(e, 0), a.M(c)), a.lb() && (a.analyticsVisitorID || a.marketingCloudVisitorID || (a.fid = a.fb()), a.qb(), a.usePlugins && a.doPlugins && a.doPlugins(a), a.account && (a.abort || (a.trackOffline && !a.timestamp && (a.timestamp = Math.floor(g.getTime() / 1e3)), g = b.location, a.pageURL || (a.pageURL = g.href ? g.href : g), a.referrer || a.Ha || (a.referrer = f.document.referrer), a.Ha = 1, a.referrer = a.cb(a.referrer), a.l("_g")), a.hb() && !a.abort && (a.ib(), i += a.gb(), a.pb(h, i), a.l("_t"), a.referrer = ""))), c && a.M(e, 1)), a.abort = a.supplementalDataID = a.timestamp = a.pageURLRest = a.linkObject = a.clickObject = a.linkURL = a.linkName = a.linkType = b.s_objectID = a.pe = a.pev1 = a.pev2 = a.pev3 = a.e = 0
    }, a.tl = a.trackLink = function(b, c, d, e, f) {
        return a.linkObject = b, a.linkType = c, a.linkName = d, f && (a.j = b, a.q = f), a.track(e)
    }, a.trackLight = function(b, c, d, e) {
        return a.lightProfileID = b, a.lightStoreForSeconds = c, a.lightIncrementBy = d, a.track(e)
    }, a.clearVars = function() {
        var b, c;
        for (b = 0; b < a.c.length; b++) c = a.c[b], ("prop" == c.substring(0, 4) || "eVar" == c.substring(0, 4) || "hier" == c.substring(0, 4) || "list" == c.substring(0, 4) || "channel" == c || "events" == c || "eventList" == c || "products" == c || "productList" == c || "purchaseID" == c || "transactionID" == c || "state" == c || "zip" == c || "campaign" == c) && (a[c] = void 0)
    }, a.tagContainerMarker = "", a.pb = function(b, c) {
        var d, e = a.trackingServer;
        d = "";
        var f = a.dc,
            g = "sc.",
            h = a.visitorNamespace;
        e ? a.trackingServerSecure && a.ssl && (e = a.trackingServerSecure) : (h || (h = a.account, e = h.indexOf(","), e >= 0 && (h = h.substring(0, e)), h = h.replace(/[^A-Za-z0-9]/g, "")), d || (d = "2o7.net"), f = f ? ("" + f).toLowerCase() : "d1", "2o7.net" == d && ("d1" == f ? f = "112" : "d2" == f && (f = "122"), g = ""), e = h + "." + f + "." + g + d), d = a.ssl ? "https://" : "http://", f = a.AudienceManagement && a.AudienceManagement.isReady(), d += e + "/b/ss/" + a.account + "/" + (a.mobile ? "5." : "") + (f ? "10" : "1") + "/JS-" + a.version + (a.ub ? "T" : "") + (a.tagContainerMarker ? "-" + a.tagContainerMarker : "") + "/" + b + "?AQB=1&ndh=1&pf=1&" + (f ? "callback=s_c_il[" + a._in + "].AudienceManagement.passData&" : "") + c + "&AQE=1", a.ab(d), a.da()
    }, a.ab = function(b) {
        a.g || a.jb(), a.g.push(b), a.fa = a.r(), a.Fa()
    }, a.jb = function() {
        a.g = a.mb(), a.g || (a.g = [])
    }, a.mb = function() {
        var c, d;
        if (a.ka()) {
            try {
                (d = b.localStorage.getItem(a.ia())) && (c = b.JSON.parse(d))
            } catch (e) {}
            return c
        }
    }, a.ka = function() {
        var c = !0;
        return a.trackOffline && a.offlineFilename && b.localStorage && b.JSON || (c = !1), c
    }, a.wa = function() {
        var b = 0;
        return a.g && (b = a.g.length), a.v && b++, b
    }, a.da = function() {
        if (!a.v)
            if (a.xa = c, a.ja) a.fa > a.I && a.Da(a.g), a.ma(500);
            else {
                var b = a.Va();
                b > 0 ? a.ma(b) : (b = a.ua()) && (a.v = 1, a.ob(b), a.sb(b))
            }
    }, a.ma = function(b) {
        a.xa || (b || (b = 0), a.xa = setTimeout(a.da, b))
    }, a.Va = function() {
        var b;
        return !a.trackOffline || 0 >= a.offlineThrottleDelay ? 0 : (b = a.r() - a.Ca, a.offlineThrottleDelay < b ? 0 : a.offlineThrottleDelay - b)
    }, a.ua = function() {
        return 0 < a.g.length ? a.g.shift() : void 0
    }, a.ob = function(b) {
        if (a.debugTracking) {
            var c = "AppMeasurement Debug: " + b;
            b = b.split("&");
            var d;
            for (d = 0; d < b.length; d++) c += "\n     " + a.unescape(b[d]);
            a.nb(c)
        }
    }, a.Pa = function() {
        return a.marketingCloudVisitorID || a.analyticsVisitorID
    }, a.S = !1;
    var i;
    try {
        i = JSON.parse('{"x":"y"}')
    } catch (j) {
        i = null
    }
    i && "y" == i.x ? (a.S = !0, a.R = function(a) {
        return JSON.parse(a)
    }) : b.$ && b.$.parseJSON ? (a.R = function(a) {
        return b.$.parseJSON(a)
    }, a.S = !0) : a.R = function() {
        return null
    }, a.sb = function(c) {
        var d, e, f;
        if (a.Pa() && 2047 < c.length && ("undefined" != typeof XMLHttpRequest && (d = new XMLHttpRequest, "withCredentials" in d ? e = 1 : d = 0), d || "undefined" == typeof XDomainRequest || (d = new XDomainRequest, e = 2), d && a.AudienceManagement && a.AudienceManagement.isReady() && (a.S ? d.pa = !0 : d = 0)), !d && a.kb && (c = c.substring(0, 2047)), !d && a.d.createElement && a.AudienceManagement && a.AudienceManagement.isReady() && (d = a.d.createElement("SCRIPT")) && "async" in d && ((f = (f = a.d.getElementsByTagName("HEAD")) && f[0] ? f[0] : a.d.body) ? (d.type = "text/javascript", d.setAttribute("async", "async"), e = 3) : d = 0), d || (d = new Image, d.alt = ""), d.ra = function() {
                try {
                    a.la && (clearTimeout(a.la), a.la = 0), d.timeout && (clearTimeout(d.timeout), d.timeout = 0)
                } catch (b) {}
            }, d.onload = d.tb = function() {
                if (d.ra(), a.$a(), a.Z(), a.v = 0, a.da(), d.pa) {
                    d.pa = !1;
                    try {
                        var b = a.R(d.responseText);
                        AudienceManagement.passData(b)
                    } catch (c) {}
                }
            }, d.onabort = d.onerror = d.bb = function() {
                d.ra(), (a.trackOffline || a.ja) && a.v && a.g.unshift(a.Za), a.v = 0, a.fa > a.I && a.Da(a.g), a.Z(), a.ma(500)
            }, d.onreadystatechange = function() {
                4 == d.readyState && (200 == d.status ? d.tb() : d.bb())
            }, a.Ca = a.r(), 1 == e || 2 == e) {
            var g = c.indexOf("?");
            f = c.substring(0, g), g = c.substring(g + 1), g = g.replace(/&callback=[a-zA-Z0-9_.\[\]]+/, ""), 1 == e ? (d.open("POST", f, !0), d.send(g)) : 2 == e && (d.open("POST", f), d.send(g))
        } else if (d.src = c, 3 == e) {
            if (a.Aa) try {
                f.removeChild(a.Aa)
            } catch (h) {}
            f.firstChild ? f.insertBefore(d, f.firstChild) : f.appendChild(d), a.Aa = a.Ya
        }
        d.abort && (a.la = setTimeout(d.abort, 5e3)), a.Za = c, a.Ya = b["s_i_" + a.replace(a.account, ",", "_")] = d, (a.useForcedLinkTracking && a.D || a.q) && (a.forcedLinkTrackingTimeout || (a.forcedLinkTrackingTimeout = 250), a.aa = setTimeout(a.Z, a.forcedLinkTrackingTimeout))
    }, a.$a = function() {
        if (a.ka() && !(a.Ba > a.I)) try {
            b.localStorage.removeItem(a.ia()), a.Ba = a.r()
        } catch (c) {}
    }, a.Da = function(c) {
        if (a.ka()) {
            a.Fa();
            try {
                b.localStorage.setItem(a.ia(), b.JSON.stringify(c)), a.I = a.r()
            } catch (d) {}
        }
    }, a.Fa = function() {
        if (a.trackOffline)
            for ((!a.offlineLimit || 0 >= a.offlineLimit) && (a.offlineLimit = 10); a.g.length > a.offlineLimit;) a.ua()
    }, a.forceOffline = function() {
        a.ja = !0
    }, a.forceOnline = function() {
        a.ja = !1
    }, a.ia = function() {
        return a.offlineFilename + "-" + a.visitorNamespace + a.account
    }, a.r = function() {
        return (new Date).getTime()
    }, a.ya = function(a) {
        return a = a.toLowerCase(), 0 != a.indexOf("#") && 0 != a.indexOf("about:") && 0 != a.indexOf("opera:") && 0 != a.indexOf("javascript:") ? !0 : !1
    }, a.setTagContainer = function(b) {
        var c, d, e;
        for (a.ub = b, c = 0; c < a._il.length; c++)
            if ((d = a._il[c]) && "s_l" == d._c && d.tagContainerName == b) {
                if (a.M(d), d.lmq)
                    for (c = 0; c < d.lmq.length; c++) e = d.lmq[c], a.loadModule(e.n);
                if (d.ml)
                    for (e in d.ml)
                        if (a[e])
                            for (c in b = a[e], e = d.ml[e]) !Object.prototype[c] && ("function" != typeof e[c] || 0 > ("" + e[c]).indexOf("s_c_il")) && (b[c] = e[c]);
                if (d.mmq)
                    for (c = 0; c < d.mmq.length; c++) e = d.mmq[c], a[e.m] && (b = a[e.m], b[e.f] && "function" == typeof b[e.f] && (e.a ? b[e.f].apply(b, e.a) : b[e.f].apply(b)));
                if (d.tq)
                    for (c = 0; c < d.tq.length; c++) a.track(d.tq[c]);
                d.s = a;
                break
            }
    }, a.Util = {
        urlEncode: a.escape,
        urlDecode: a.unescape,
        cookieRead: a.cookieRead,
        cookieWrite: a.cookieWrite,
        getQueryParam: function(c, d, e) {
            var f;
            return d || (d = a.pageURL ? a.pageURL : b.location), e || (e = "&"), c && d && (d = "" + d, f = d.indexOf("?"), f >= 0 && (d = e + d.substring(f + 1) + e, f = d.indexOf(e + c + "="), f >= 0 && (d = d.substring(f + e.length + c.length + 1), f = d.indexOf(e), f >= 0 && (d = d.substring(0, f)), 0 < d.length))) ? a.unescape(d) : ""
        }
    }, a.A = "supplementalDataID timestamp dynamicVariablePrefix visitorID marketingCloudVisitorID analyticsVisitorID audienceManagerLocationHint authState fid vmk visitorMigrationKey visitorMigrationServer visitorMigrationServerSecure charSet visitorNamespace cookieDomainPeriods fpCookieDomainPeriods cookieLifetime pageName pageURL referrer contextData currencyCode lightProfileID lightStoreForSeconds lightIncrementBy retrieveLightProfiles deleteLightProfiles retrieveLightData pe pev1 pev2 pev3 pageURLRest".split(" "), a.c = a.A.concat("purchaseID variableProvider channel server pageType transactionID campaign state zip events events2 products audienceManagerBlob tnt".split(" ")), a.ga = "timestamp charSet visitorNamespace cookieDomainPeriods cookieLifetime contextData lightProfileID lightStoreForSeconds lightIncrementBy".split(" "), a.J = a.ga.slice(0), a.oa = "account allAccounts debugTracking visitor trackOffline offlineLimit offlineThrottleDelay offlineFilename usePlugins doPlugins configURL visitorSampling visitorSamplingGroup linkObject clickObject linkURL linkName linkType trackDownloadLinks trackExternalLinks trackClickMap trackInlineStats linkLeaveQueryString linkTrackVars linkTrackEvents linkDownloadFileTypes linkExternalFilters linkInternalFilters useForcedLinkTracking forcedLinkTrackingTimeout trackingServer trackingServerSecure ssl abort mobile dc lightTrackVars maxDelay expectSupplementalData AudienceManagement".split(" ");
    for (d = 0; 250 >= d; d++) 76 > d && (a.c.push("prop" + d), a.J.push("prop" + d)), a.c.push("eVar" + d), a.J.push("eVar" + d), 6 > d && a.c.push("hier" + d), 4 > d && a.c.push("list" + d);
    d = "latitude longitude resolution colorDepth javascriptVersion javaEnabled cookiesEnabled browserWidth browserHeight connectionType homepage".split(" "), a.c = a.c.concat(d), a.A = a.A.concat(d), a.ssl = 0 <= b.location.protocol.toLowerCase().indexOf("https"), a.charSet = "UTF-8", a.contextData = {}, a.offlineThrottleDelay = 0, a.offlineFilename = "AppMeasurement.offline", a.Ca = 0, a.fa = 0, a.I = 0, a.Ba = 0, a.linkDownloadFileTypes = "exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx", a.w = b, a.d = b.document;
    try {
        a.kb = "Microsoft Internet Explorer" == navigator.appName
    } catch (k) {}
    a.Z = function() {
        a.aa && (b.clearTimeout(a.aa), a.aa = c), a.j && a.D && a.j.dispatchEvent(a.D), a.q && ("function" == typeof a.q ? a.q() : a.j && a.j.href && (a.d.location = a.j.href)), a.j = a.D = a.q = 0
    }, a.Ea = function() {
        a.b = a.d.body, a.b ? (a.p = function(c) {
            var d, e, f, g, h;
            if (!(a.d && a.d.getElementById("cppXYctnr") || c && c["s_fe_" + a._in])) {
                if (a.qa) {
                    if (!a.useForcedLinkTracking) return a.b.removeEventListener("click", a.p, !0), void(a.qa = a.useForcedLinkTracking = 0);
                    a.b.removeEventListener("click", a.p, !1)
                } else a.useForcedLinkTracking = 0;
                a.clickObject = c.srcElement ? c.srcElement : c.target;
                try {
                    if (!a.clickObject || a.H && a.H == a.clickObject || !(a.clickObject.tagName || a.clickObject.parentElement || a.clickObject.parentNode)) a.clickObject = 0;
                    else {
                        var i = a.H = a.clickObject;
                        if (a.ea && (clearTimeout(a.ea), a.ea = 0), a.ea = setTimeout(function() {
                                a.H == i && (a.H = 0)
                            }, 1e4), f = a.wa(), a.track(), f < a.wa() && a.useForcedLinkTracking && c.target) {
                            for (g = c.target; g && g != a.b && "A" != g.tagName.toUpperCase() && "AREA" != g.tagName.toUpperCase();) g = g.parentNode;
                            if (g && (h = g.href, a.ya(h) || (h = 0), e = g.target, c.target.dispatchEvent && h && (!e || "_self" == e || "_top" == e || "_parent" == e || b.name && e == b.name))) {
                                try {
                                    d = a.d.createEvent("MouseEvents")
                                } catch (j) {
                                    d = new b.MouseEvent
                                }
                                if (d) {
                                    try {
                                        d.initMouseEvent("click", c.bubbles, c.cancelable, c.view, c.detail, c.screenX, c.screenY, c.clientX, c.clientY, c.ctrlKey, c.altKey, c.shiftKey, c.metaKey, c.button, c.relatedTarget)
                                    } catch (k) {
                                        d = 0
                                    }
                                    d && (d["s_fe_" + a._in] = d.s_fe = 1, c.stopPropagation(), c.stopImmediatePropagation && c.stopImmediatePropagation(), c.preventDefault(), a.j = c.target, a.D = d)
                                }
                            }
                        }
                    }
                } catch (l) {
                    a.clickObject = 0
                }
            }
        }, a.b && a.b.attachEvent ? a.b.attachEvent("onclick", a.p) : a.b && a.b.addEventListener && (navigator && (0 <= navigator.userAgent.indexOf("WebKit") && a.d.createEvent || 0 <= navigator.userAgent.indexOf("Firefox/2") && b.MouseEvent) && (a.qa = 1, a.useForcedLinkTracking = 1, a.b.addEventListener("click", a.p, !0)), a.b.addEventListener("click", a.p, !1))) : setTimeout(a.Ea, 30)
    }, a.Ea()
}

function s_gi(a) {
    var b, c, d, e, f, g = window.s_c_il,
        h = a.split(","),
        i = 0;
    if (g)
        for (c = 0; !i && c < g.length;) {
            if (b = g[c], "s_c" == b._c && (b.account || b.oun))
                if (b.account && b.account == a) i = 1;
                else
                    for (d = b.account ? b.account : b.oun, d = b.allAccounts ? b.allAccounts : d.split(","), e = 0; e < h.length; e++)
                        for (f = 0; f < d.length; f++) h[e] == d[f] && (i = 1);
            c++
        }
    return i || (b = new AppMeasurement), b.setAccount ? b.setAccount(a) : b.sa && b.sa(a), b
}

function s_pgicq() {
    var a, b, c, d = window,
        e = d.s_giq;
    if (e)
        for (a = 0; a < e.length; a++) b = e[a], c = s_gi(b.oun), c.setAccount(b.un), c.setTagContainer(b.tagContainerName);
    d.s_giq = 0
}! function(a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
        if (!a.document) throw new Error("jQuery requires a window with a document");
        return b(a)
    } : b(a)
}("undefined" != typeof window ? window : this, function(a, b) {
    function c(a) {
        var b = a.length,
            c = _.type(a);
        return "function" === c || _.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }

    function d(a, b, c) {
        if (_.isFunction(b)) return _.grep(a, function(a, d) {
            return !!b.call(a, d, a) !== c
        });
        if (b.nodeType) return _.grep(a, function(a) {
            return a === b !== c
        });
        if ("string" == typeof b) {
            if (ha.test(b)) return _.filter(b, a, c);
            b = _.filter(b, a)
        }
        return _.grep(a, function(a) {
            return U.call(b, a) >= 0 !== c
        })
    }

    function e(a, b) {
        for (;
            (a = a[b]) && 1 !== a.nodeType;);
        return a
    }

    function f(a) {
        var b = oa[a] = {};
        return _.each(a.match(na) || [], function(a, c) {
            b[c] = !0
        }), b
    }

    function g() {
        Z.removeEventListener("DOMContentLoaded", g, !1), a.removeEventListener("load", g, !1), _.ready()
    }

    function h() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function() {
                return {}
            }
        }), this.expando = _.expando + h.uid++
    }

    function i(a, b, c) {
        var d;
        if (void 0 === c && 1 === a.nodeType)
            if (d = "data-" + b.replace(ua, "-$1").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
                try {
                    c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : ta.test(c) ? _.parseJSON(c) : c
                } catch (e) {}
                sa.set(a, b, c)
            } else c = void 0;
        return c
    }

    function j() {
        return !0
    }

    function k() {
        return !1
    }

    function l() {
        try {
            return Z.activeElement
        } catch (a) {}
    }

    function m(a, b) {
        return _.nodeName(a, "table") && _.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function n(a) {
        return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a
    }

    function o(a) {
        var b = Ka.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }

    function p(a, b) {
        for (var c = 0, d = a.length; d > c; c++) ra.set(a[c], "globalEval", !b || ra.get(b[c], "globalEval"))
    }

    function q(a, b) {
        var c, d, e, f, g, h, i, j;
        if (1 === b.nodeType) {
            if (ra.hasData(a) && (f = ra.access(a), g = ra.set(b, f), j = f.events)) {
                delete g.handle, g.events = {};
                for (e in j)
                    for (c = 0, d = j[e].length; d > c; c++) _.event.add(b, e, j[e][c])
            }
            sa.hasData(a) && (h = sa.access(a), i = _.extend({}, h), sa.set(b, i))
        }
    }

    function r(a, b) {
        var c = a.getElementsByTagName ? a.getElementsByTagName(b || "*") : a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
        return void 0 === b || b && _.nodeName(a, b) ? _.merge([a], c) : c
    }

    function s(a, b) {
        var c = b.nodeName.toLowerCase();
        "input" === c && ya.test(a.type) ? b.checked = a.checked : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
    }

    function t(b, c) {
        var d, e = _(c.createElement(b)).appendTo(c.body),
            f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : _.css(e[0], "display");
        return e.detach(), f
    }

    function u(a) {
        var b = Z,
            c = Oa[a];
        return c || (c = t(a, b), "none" !== c && c || (Na = (Na || _("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = Na[0].contentDocument, b.write(), b.close(), c = t(a, b), Na.detach()), Oa[a] = c), c
    }

    function v(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ra(a), c && (g = c.getPropertyValue(b) || c[b]), c && ("" !== g || _.contains(a.ownerDocument, a) || (g = _.style(a, b)), Qa.test(g) && Pa.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g
    }

    function w(a, b) {
        return {
            get: function() {
                return a() ? void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    }

    function x(a, b) {
        if (b in a) return b;
        for (var c = b[0].toUpperCase() + b.slice(1), d = b, e = Xa.length; e--;)
            if (b = Xa[e] + c, b in a) return b;
        return d
    }

    function y(a, b, c) {
        var d = Ta.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }

    function z(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += _.css(a, c + wa[f], !0, e)), d ? ("content" === c && (g -= _.css(a, "padding" + wa[f], !0, e)), "margin" !== c && (g -= _.css(a, "border" + wa[f] + "Width", !0, e))) : (g += _.css(a, "padding" + wa[f], !0, e), "padding" !== c && (g += _.css(a, "border" + wa[f] + "Width", !0, e)));
        return g
    }

    function A(a, b, c) {
        var d = !0,
            e = "width" === b ? a.offsetWidth : a.offsetHeight,
            f = Ra(a),
            g = "border-box" === _.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = v(a, b, f), (0 > e || null == e) && (e = a.style[b]), Qa.test(e)) return e;
            d = g && (Y.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
        }
        return e + z(a, b, c || (g ? "border" : "content"), d, f) + "px"
    }

    function B(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = ra.get(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && xa(d) && (f[g] = ra.access(d, "olddisplay", u(d.nodeName)))) : (e = xa(d), "none" === c && e || ra.set(d, "olddisplay", e ? c : _.css(d, "display"))));
        for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a
    }

    function C(a, b, c, d, e) {
        return new C.prototype.init(a, b, c, d, e)
    }

    function D() {
        return setTimeout(function() {
            Ya = void 0
        }), Ya = _.now()
    }

    function E(a, b) {
        var c, d = 0,
            e = {
                height: a
            };
        for (b = b ? 1 : 0; 4 > d; d += 2 - b) c = wa[d], e["margin" + c] = e["padding" + c] = a;
        return b && (e.opacity = e.width = a), e
    }

    function F(a, b, c) {
        for (var d, e = (cb[b] || []).concat(cb["*"]), f = 0, g = e.length; g > f; f++)
            if (d = e[f].call(c, b, a)) return d
    }

    function G(a, b, c) {
        var d, e, f, g, h, i, j, k, l = this,
            m = {},
            n = a.style,
            o = a.nodeType && xa(a),
            p = ra.get(a, "fxshow");
        c.queue || (h = _._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function() {
            h.unqueued || i()
        }), h.unqueued++, l.always(function() {
            l.always(function() {
                h.unqueued--, _.queue(a, "fx").length || h.empty.fire()
            })
        })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [n.overflow, n.overflowX, n.overflowY], j = _.css(a, "display"), k = "none" === j ? ra.get(a, "olddisplay") || u(a.nodeName) : j, "inline" === k && "none" === _.css(a, "float") && (n.display = "inline-block")), c.overflow && (n.overflow = "hidden", l.always(function() {
            n.overflow = c.overflow[0], n.overflowX = c.overflow[1], n.overflowY = c.overflow[2]
        }));
        for (d in b)
            if (e = b[d], $a.exec(e)) {
                if (delete b[d], f = f || "toggle" === e, e === (o ? "hide" : "show")) {
                    if ("show" !== e || !p || void 0 === p[d]) continue;
                    o = !0
                }
                m[d] = p && p[d] || _.style(a, d)
            } else j = void 0;
        if (_.isEmptyObject(m)) "inline" === ("none" === j ? u(a.nodeName) : j) && (n.display = j);
        else {
            p ? "hidden" in p && (o = p.hidden) : p = ra.access(a, "fxshow", {}), f && (p.hidden = !o), o ? _(a).show() : l.done(function() {
                _(a).hide()
            }), l.done(function() {
                var b;
                ra.remove(a, "fxshow");
                for (b in m) _.style(a, b, m[b])
            });
            for (d in m) g = F(o ? p[d] : 0, d, l), d in p || (p[d] = g.start, o && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
        }
    }

    function H(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (d = _.camelCase(c), e = b[d], f = a[c], _.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = _.cssHooks[d], g && "expand" in g) {
                f = g.expand(f), delete a[d];
                for (c in f) c in a || (a[c] = f[c], b[c] = e)
            } else b[d] = e
    }

    function I(a, b, c) {
        var d, e, f = 0,
            g = bb.length,
            h = _.Deferred().always(function() {
                delete i.elem
            }),
            i = function() {
                if (e) return !1;
                for (var b = Ya || D(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
                return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
            },
            j = h.promise({
                elem: a,
                props: _.extend({}, b),
                opts: _.extend(!0, {
                    specialEasing: {}
                }, c),
                originalProperties: b,
                originalOptions: c,
                startTime: Ya || D(),
                duration: c.duration,
                tweens: [],
                createTween: function(b, c) {
                    var d = _.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                    return j.tweens.push(d), d
                },
                stop: function(b) {
                    var c = 0,
                        d = b ? j.tweens.length : 0;
                    if (e) return this;
                    for (e = !0; d > c; c++) j.tweens[c].run(1);
                    return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
                }
            }),
            k = j.props;
        for (H(k, j.opts.specialEasing); g > f; f++)
            if (d = bb[f].call(j, a, k, j.opts)) return d;
        return _.map(k, F, j), _.isFunction(j.opts.start) && j.opts.start.call(a, j), _.fx.timer(_.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }

    function J(a) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0,
                f = b.toLowerCase().match(na) || [];
            if (_.isFunction(c))
                for (; d = f[e++];) "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }

    function K(a, b, c, d) {
        function e(h) {
            var i;
            return f[h] = !0, _.each(a[h] || [], function(a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || g || f[j] ? g ? !(i = j) : void 0 : (b.dataTypes.unshift(j), e(j), !1)
            }), i
        }
        var f = {},
            g = a === tb;
        return e(b.dataTypes[0]) || !f["*"] && e("*")
    }

    function L(a, b) {
        var c, d, e = _.ajaxSettings.flatOptions || {};
        for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
        return d && _.extend(!0, a, d), a
    }

    function M(a, b, c) {
        for (var d, e, f, g, h = a.contents, i = a.dataTypes;
            "*" === i[0];) i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
        if (d)
            for (e in h)
                if (h[e] && h[e].test(d)) {
                    i.unshift(e);
                    break
                }
        if (i[0] in c) f = i[0];
        else {
            for (e in c) {
                if (!i[0] || a.converters[e + " " + i[0]]) {
                    f = e;
                    break
                }
                g || (g = e)
            }
            f = f || g
        }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
    }

    function N(a, b, c, d) {
        var e, f, g, h, i, j = {},
            k = a.dataTypes.slice();
        if (k[1])
            for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        for (f = k.shift(); f;)
            if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
                if ("*" === f) f = i;
                else if ("*" !== i && i !== f) {
            if (g = j[i + " " + f] || j["* " + f], !g)
                for (e in j)
                    if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                        g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                        break
                    }
            if (g !== !0)
                if (g && a["throws"]) b = g(b);
                else try {
                    b = g(b)
                } catch (l) {
                    return {
                        state: "parsererror",
                        error: g ? l : "No conversion from " + i + " to " + f
                    }
                }
        }
        return {
            state: "success",
            data: b
        }
    }

    function O(a, b, c, d) {
        var e;
        if (_.isArray(b)) _.each(b, function(b, e) {
            c || yb.test(a) ? d(a, e) : O(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
        });
        else if (c || "object" !== _.type(b)) d(a, b);
        else
            for (e in b) O(a + "[" + e + "]", b[e], c, d)
    }

    function P(a) {
        return _.isWindow(a) ? a : 9 === a.nodeType && a.defaultView
    }
    var Q = [],
        R = Q.slice,
        S = Q.concat,
        T = Q.push,
        U = Q.indexOf,
        V = {},
        W = V.toString,
        X = V.hasOwnProperty,
        Y = {},
        Z = a.document,
        $ = "2.1.3",
        _ = function(a, b) {
            return new _.fn.init(a, b)
        },
        aa = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        ba = /^-ms-/,
        ca = /-([\da-z])/gi,
        da = function(a, b) {
            return b.toUpperCase()
        };
    _.fn = _.prototype = {
        jquery: $,
        constructor: _,
        selector: "",
        length: 0,
        toArray: function() {
            return R.call(this)
        },
        get: function(a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : R.call(this)
        },
        pushStack: function(a) {
            var b = _.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b
        },
        each: function(a, b) {
            return _.each(this, a, b)
        },
        map: function(a) {
            return this.pushStack(_.map(this, function(b, c) {
                return a.call(b, c, b)
            }))
        },
        slice: function() {
            return this.pushStack(R.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(a) {
            var b = this.length,
                c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: T,
        sort: Q.sort,
        splice: Q.splice
    }, _.extend = _.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {},
            h = 1,
            i = arguments.length,
            j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || _.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
            if (null != (a = arguments[h]))
                for (b in a) c = g[b], d = a[b], g !== d && (j && d && (_.isPlainObject(d) || (e = _.isArray(d))) ? (e ? (e = !1, f = c && _.isArray(c) ? c : []) : f = c && _.isPlainObject(c) ? c : {}, g[b] = _.extend(j, f, d)) : void 0 !== d && (g[b] = d));
        return g
    }, _.extend({
        expando: "jQuery" + ($ + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw new Error(a)
        },
        noop: function() {},
        isFunction: function(a) {
            return "function" === _.type(a)
        },
        isArray: Array.isArray,
        isWindow: function(a) {
            return null != a && a === a.window
        },
        isNumeric: function(a) {
            return !_.isArray(a) && a - parseFloat(a) + 1 >= 0
        },
        isPlainObject: function(a) {
            return "object" !== _.type(a) || a.nodeType || _.isWindow(a) ? !1 : a.constructor && !X.call(a.constructor.prototype, "isPrototypeOf") ? !1 : !0
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a) return !1;
            return !0
        },
        type: function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? V[W.call(a)] || "object" : typeof a
        },
        globalEval: function(a) {
            var b, c = eval;
            a = _.trim(a), a && (1 === a.indexOf("use strict") ? (b = Z.createElement("script"), b.text = a, Z.head.appendChild(b).parentNode.removeChild(b)) : c(a))
        },
        camelCase: function(a) {
            return a.replace(ba, "ms-").replace(ca, da)
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function(a, b, d) {
            var e, f = 0,
                g = a.length,
                h = c(a);
            if (d) {
                if (h)
                    for (; g > f && (e = b.apply(a[f], d), e !== !1); f++);
                else
                    for (f in a)
                        if (e = b.apply(a[f], d), e === !1) break
            } else if (h)
                for (; g > f && (e = b.call(a[f], f, a[f]), e !== !1); f++);
            else
                for (f in a)
                    if (e = b.call(a[f], f, a[f]), e === !1) break; return a
        },
        trim: function(a) {
            return null == a ? "" : (a + "").replace(aa, "")
        },
        makeArray: function(a, b) {
            var d = b || [];
            return null != a && (c(Object(a)) ? _.merge(d, "string" == typeof a ? [a] : a) : T.call(d, a)), d
        },
        inArray: function(a, b, c) {
            return null == b ? -1 : U.call(b, a, c)
        },
        merge: function(a, b) {
            for (var c = +b.length, d = 0, e = a.length; c > d; d++) a[e++] = b[d];
            return a.length = e, a
        },
        grep: function(a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
            return e
        },
        map: function(a, b, d) {
            var e, f = 0,
                g = a.length,
                h = c(a),
                i = [];
            if (h)
                for (; g > f; f++) e = b(a[f], f, d), null != e && i.push(e);
            else
                for (f in a) e = b(a[f], f, d), null != e && i.push(e);
            return S.apply([], i)
        },
        guid: 1,
        proxy: function(a, b) {
            var c, d, e;
            return "string" == typeof b && (c = a[b], b = a, a = c), _.isFunction(a) ? (d = R.call(arguments, 2), e = function() {
                return a.apply(b || this, d.concat(R.call(arguments)))
            }, e.guid = a.guid = a.guid || _.guid++, e) : void 0
        },
        now: Date.now,
        support: Y
    }), _.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
        V["[object " + b + "]"] = b.toLowerCase()
    });
    var ea = function(a) {
        function b(a, b, c, d) {
            var e, f, g, h, i, j, l, n, o, p;
            if ((b ? b.ownerDocument || b : O) !== G && F(b), b = b || G, c = c || [], h = b.nodeType, "string" != typeof a || !a || 1 !== h && 9 !== h && 11 !== h) return c;
            if (!d && I) {
                if (11 !== h && (e = sa.exec(a)))
                    if (g = e[1]) {
                        if (9 === h) {
                            if (f = b.getElementById(g), !f || !f.parentNode) return c;
                            if (f.id === g) return c.push(f), c
                        } else if (b.ownerDocument && (f = b.ownerDocument.getElementById(g)) && M(b, f) && f.id === g) return c.push(f), c
                    } else {
                        if (e[2]) return $.apply(c, b.getElementsByTagName(a)), c;
                        if ((g = e[3]) && v.getElementsByClassName) return $.apply(c, b.getElementsByClassName(g)), c
                    }
                if (v.qsa && (!J || !J.test(a))) {
                    if (n = l = N, o = b, p = 1 !== h && a, 1 === h && "object" !== b.nodeName.toLowerCase()) {
                        for (j = z(a), (l = b.getAttribute("id")) ? n = l.replace(ua, "\\$&") : b.setAttribute("id", n), n = "[id='" + n + "'] ", i = j.length; i--;) j[i] = n + m(j[i]);
                        o = ta.test(a) && k(b.parentNode) || b, p = j.join(",")
                    }
                    if (p) try {
                        return $.apply(c, o.querySelectorAll(p)), c
                    } catch (q) {} finally {
                        l || b.removeAttribute("id")
                    }
                }
            }
            return B(a.replace(ia, "$1"), b, c, d)
        }

        function c() {
            function a(c, d) {
                return b.push(c + " ") > w.cacheLength && delete a[b.shift()], a[c + " "] = d
            }
            var b = [];
            return a
        }

        function d(a) {
            return a[N] = !0, a
        }

        function e(a) {
            var b = G.createElement("div");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null
            }
        }

        function f(a, b) {
            for (var c = a.split("|"), d = a.length; d--;) w.attrHandle[c[d]] = b
        }

        function g(a, b) {
            var c = b && a,
                d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || V) - (~a.sourceIndex || V);
            if (d) return d;
            if (c)
                for (; c = c.nextSibling;)
                    if (c === b) return -1;
            return a ? 1 : -1
        }

        function h(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }

        function i(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }

        function j(a) {
            return d(function(b) {
                return b = +b, d(function(c, d) {
                    for (var e, f = a([], c.length, b), g = f.length; g--;) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }

        function k(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a
        }

        function l() {}

        function m(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
            return d
        }

        function n(a, b, c) {
            var d = b.dir,
                e = c && "parentNode" === d,
                f = Q++;
            return b.first ? function(b, c, f) {
                for (; b = b[d];)
                    if (1 === b.nodeType || e) return a(b, c, f)
            } : function(b, c, g) {
                var h, i, j = [P, f];
                if (g) {
                    for (; b = b[d];)
                        if ((1 === b.nodeType || e) && a(b, c, g)) return !0
                } else
                    for (; b = b[d];)
                        if (1 === b.nodeType || e) {
                            if (i = b[N] || (b[N] = {}), (h = i[d]) && h[0] === P && h[1] === f) return j[2] = h[2];
                            if (i[d] = j, j[2] = a(b, c, g)) return !0
                        }
            }
        }

        function o(a) {
            return a.length > 1 ? function(b, c, d) {
                for (var e = a.length; e--;)
                    if (!a[e](b, c, d)) return !1;
                return !0
            } : a[0]
        }

        function p(a, c, d) {
            for (var e = 0, f = c.length; f > e; e++) b(a, c[e], d);
            return d
        }

        function q(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
            return g
        }

        function r(a, b, c, e, f, g) {
            return e && !e[N] && (e = r(e)), f && !f[N] && (f = r(f, g)), d(function(d, g, h, i) {
                var j, k, l, m = [],
                    n = [],
                    o = g.length,
                    r = d || p(b || "*", h.nodeType ? [h] : h, []),
                    s = !a || !d && b ? r : q(r, m, a, h, i),
                    t = c ? f || (d ? a : o || e) ? [] : g : s;
                if (c && c(s, t, h, i), e)
                    for (j = q(t, n), e(j, [], h, i), k = j.length; k--;)(l = j[k]) && (t[n[k]] = !(s[n[k]] = l));
                if (d) {
                    if (f || a) {
                        if (f) {
                            for (j = [], k = t.length; k--;)(l = t[k]) && j.push(s[k] = l);
                            f(null, t = [], j, i)
                        }
                        for (k = t.length; k--;)(l = t[k]) && (j = f ? aa(d, l) : m[k]) > -1 && (d[j] = !(g[j] = l))
                    }
                } else t = q(t === g ? t.splice(o, t.length) : t), f ? f(null, g, t, i) : $.apply(g, t)
            })
        }

        function s(a) {
            for (var b, c, d, e = a.length, f = w.relative[a[0].type], g = f || w.relative[" "], h = f ? 1 : 0, i = n(function(a) {
                    return a === b
                }, g, !0), j = n(function(a) {
                    return aa(b, a) > -1
                }, g, !0), k = [function(a, c, d) {
                    var e = !f && (d || c !== C) || ((b = c).nodeType ? i(a, c, d) : j(a, c, d));
                    return b = null, e
                }]; e > h; h++)
                if (c = w.relative[a[h].type]) k = [n(o(k), c)];
                else {
                    if (c = w.filter[a[h].type].apply(null, a[h].matches), c[N]) {
                        for (d = ++h; e > d && !w.relative[a[d].type]; d++);
                        return r(h > 1 && o(k), h > 1 && m(a.slice(0, h - 1).concat({
                            value: " " === a[h - 2].type ? "*" : ""
                        })).replace(ia, "$1"), c, d > h && s(a.slice(h, d)), e > d && s(a = a.slice(d)), e > d && m(a))
                    }
                    k.push(c)
                }
            return o(k)
        }

        function t(a, c) {
            var e = c.length > 0,
                f = a.length > 0,
                g = function(d, g, h, i, j) {
                    var k, l, m, n = 0,
                        o = "0",
                        p = d && [],
                        r = [],
                        s = C,
                        t = d || f && w.find.TAG("*", j),
                        u = P += null == s ? 1 : Math.random() || .1,
                        v = t.length;
                    for (j && (C = g !== G && g); o !== v && null != (k = t[o]); o++) {
                        if (f && k) {
                            for (l = 0; m = a[l++];)
                                if (m(k, g, h)) {
                                    i.push(k);
                                    break
                                }
                            j && (P = u)
                        }
                        e && ((k = !m && k) && n--, d && p.push(k))
                    }
                    if (n += o, e && o !== n) {
                        for (l = 0; m = c[l++];) m(p, r, g, h);
                        if (d) {
                            if (n > 0)
                                for (; o--;) p[o] || r[o] || (r[o] = Y.call(i));
                            r = q(r)
                        }
                        $.apply(i, r), j && !d && r.length > 0 && n + c.length > 1 && b.uniqueSort(i)
                    }
                    return j && (P = u, C = s), p
                };
            return e ? d(g) : g
        }
        var u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N = "sizzle" + 1 * new Date,
            O = a.document,
            P = 0,
            Q = 0,
            R = c(),
            S = c(),
            T = c(),
            U = function(a, b) {
                return a === b && (E = !0), 0
            },
            V = 1 << 31,
            W = {}.hasOwnProperty,
            X = [],
            Y = X.pop,
            Z = X.push,
            $ = X.push,
            _ = X.slice,
            aa = function(a, b) {
                for (var c = 0, d = a.length; d > c; c++)
                    if (a[c] === b) return c;
                return -1
            },
            ba = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ca = "[\\x20\\t\\r\\n\\f]",
            da = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            ea = da.replace("w", "w#"),
            fa = "\\[" + ca + "*(" + da + ")(?:" + ca + "*([*^$|!~]?=)" + ca + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ea + "))|)" + ca + "*\\]",
            ga = ":(" + da + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + fa + ")*)|.*)\\)|)",
            ha = new RegExp(ca + "+", "g"),
            ia = new RegExp("^" + ca + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ca + "+$", "g"),
            ja = new RegExp("^" + ca + "*," + ca + "*"),
            ka = new RegExp("^" + ca + "*([>+~]|" + ca + ")" + ca + "*"),
            la = new RegExp("=" + ca + "*([^\\]'\"]*?)" + ca + "*\\]", "g"),
            ma = new RegExp(ga),
            na = new RegExp("^" + ea + "$"),
            oa = {
                ID: new RegExp("^#(" + da + ")"),
                CLASS: new RegExp("^\\.(" + da + ")"),
                TAG: new RegExp("^(" + da.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + fa),
                PSEUDO: new RegExp("^" + ga),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ca + "*(even|odd|(([+-]|)(\\d*)n|)" + ca + "*(?:([+-]|)" + ca + "*(\\d+)|))" + ca + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + ba + ")$", "i"),
                needsContext: new RegExp("^" + ca + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ca + "*((?:-\\d)?\\d*)" + ca + "*\\)|)(?=[^-]|$)", "i")
            },
            pa = /^(?:input|select|textarea|button)$/i,
            qa = /^h\d$/i,
            ra = /^[^{]+\{\s*\[native \w/,
            sa = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ta = /[+~]/,
            ua = /'|\\/g,
            va = new RegExp("\\\\([\\da-f]{1,6}" + ca + "?|(" + ca + ")|.)", "ig"),
            wa = function(a, b, c) {
                var d = "0x" + b - 65536;
                return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
            },
            xa = function() {
                F()
            };
        try {
            $.apply(X = _.call(O.childNodes), O.childNodes), X[O.childNodes.length].nodeType
        } catch (ya) {
            $ = {
                apply: X.length ? function(a, b) {
                    Z.apply(a, _.call(b))
                } : function(a, b) {
                    for (var c = a.length, d = 0; a[c++] = b[d++];);
                    a.length = c - 1
                }
            }
        }
        v = b.support = {}, y = b.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1
        }, F = b.setDocument = function(a) {
            var b, c, d = a ? a.ownerDocument || a : O;
            return d !== G && 9 === d.nodeType && d.documentElement ? (G = d, H = d.documentElement, c = d.defaultView, c && c !== c.top && (c.addEventListener ? c.addEventListener("unload", xa, !1) : c.attachEvent && c.attachEvent("onunload", xa)), I = !y(d), v.attributes = e(function(a) {
                return a.className = "i", !a.getAttribute("className")
            }), v.getElementsByTagName = e(function(a) {
                return a.appendChild(d.createComment("")), !a.getElementsByTagName("*").length
            }), v.getElementsByClassName = ra.test(d.getElementsByClassName), v.getById = e(function(a) {
                return H.appendChild(a).id = N, !d.getElementsByName || !d.getElementsByName(N).length
            }), v.getById ? (w.find.ID = function(a, b) {
                if ("undefined" != typeof b.getElementById && I) {
                    var c = b.getElementById(a);
                    return c && c.parentNode ? [c] : []
                }
            }, w.filter.ID = function(a) {
                var b = a.replace(va, wa);
                return function(a) {
                    return a.getAttribute("id") === b
                }
            }) : (delete w.find.ID, w.filter.ID = function(a) {
                var b = a.replace(va, wa);
                return function(a) {
                    var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }), w.find.TAG = v.getElementsByTagName ? function(a, b) {
                return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : v.qsa ? b.querySelectorAll(a) : void 0
            } : function(a, b) {
                var c, d = [],
                    e = 0,
                    f = b.getElementsByTagName(a);
                if ("*" === a) {
                    for (; c = f[e++];) 1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            }, w.find.CLASS = v.getElementsByClassName && function(a, b) {
                return I ? b.getElementsByClassName(a) : void 0
            }, K = [], J = [], (v.qsa = ra.test(d.querySelectorAll)) && (e(function(a) {
                H.appendChild(a).innerHTML = "<a id='" + N + "'></a><select id='" + N + "-\f]' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && J.push("[*^$]=" + ca + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || J.push("\\[" + ca + "*(?:value|" + ba + ")"), a.querySelectorAll("[id~=" + N + "-]").length || J.push("~="), a.querySelectorAll(":checked").length || J.push(":checked"), a.querySelectorAll("a#" + N + "+*").length || J.push(".#.+[+~]")
            }), e(function(a) {
                var b = d.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && J.push("name" + ca + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || J.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), J.push(",.*:")
            })), (v.matchesSelector = ra.test(L = H.matches || H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && e(function(a) {
                v.disconnectedMatch = L.call(a, "div"), L.call(a, "[s!='']:x"), K.push("!=", ga)
            }), J = J.length && new RegExp(J.join("|")), K = K.length && new RegExp(K.join("|")), b = ra.test(H.compareDocumentPosition), M = b || ra.test(H.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a,
                    d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function(a, b) {
                if (b)
                    for (; b = b.parentNode;)
                        if (b === a) return !0;
                return !1
            }, U = b ? function(a, b) {
                if (a === b) return E = !0, 0;
                var c = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return c ? c : (c = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & c || !v.sortDetached && b.compareDocumentPosition(a) === c ? a === d || a.ownerDocument === O && M(O, a) ? -1 : b === d || b.ownerDocument === O && M(O, b) ? 1 : D ? aa(D, a) - aa(D, b) : 0 : 4 & c ? -1 : 1)
            } : function(a, b) {
                if (a === b) return E = !0, 0;
                var c, e = 0,
                    f = a.parentNode,
                    h = b.parentNode,
                    i = [a],
                    j = [b];
                if (!f || !h) return a === d ? -1 : b === d ? 1 : f ? -1 : h ? 1 : D ? aa(D, a) - aa(D, b) : 0;
                if (f === h) return g(a, b);
                for (c = a; c = c.parentNode;) i.unshift(c);
                for (c = b; c = c.parentNode;) j.unshift(c);
                for (; i[e] === j[e];) e++;
                return e ? g(i[e], j[e]) : i[e] === O ? -1 : j[e] === O ? 1 : 0
            }, d) : G
        }, b.matches = function(a, c) {
            return b(a, null, null, c)
        }, b.matchesSelector = function(a, c) {
            if ((a.ownerDocument || a) !== G && F(a), c = c.replace(la, "='$1']"), !(!v.matchesSelector || !I || K && K.test(c) || J && J.test(c))) try {
                var d = L.call(a, c);
                if (d || v.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
            } catch (e) {}
            return b(c, G, null, [a]).length > 0
        }, b.contains = function(a, b) {
            return (a.ownerDocument || a) !== G && F(a), M(a, b)
        }, b.attr = function(a, b) {
            (a.ownerDocument || a) !== G && F(a);
            var c = w.attrHandle[b.toLowerCase()],
                d = c && W.call(w.attrHandle, b.toLowerCase()) ? c(a, b, !I) : void 0;
            return void 0 !== d ? d : v.attributes || !I ? a.getAttribute(b) : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }, b.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }, b.uniqueSort = function(a) {
            var b, c = [],
                d = 0,
                e = 0;
            if (E = !v.detectDuplicates, D = !v.sortStable && a.slice(0), a.sort(U), E) {
                for (; b = a[e++];) b === a[e] && (d = c.push(e));
                for (; d--;) a.splice(c[d], 1)
            }
            return D = null, a
        }, x = b.getText = function(a) {
            var b, c = "",
                d = 0,
                e = a.nodeType;
            if (e) {
                if (1 === e || 9 === e || 11 === e) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling) c += x(a)
                } else if (3 === e || 4 === e) return a.nodeValue
            } else
                for (; b = a[d++];) c += x(b);
            return c
        }, w = b.selectors = {
            cacheLength: 50,
            createPseudo: d,
            match: oa,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    return a[1] = a[1].replace(va, wa), a[3] = (a[3] || a[4] || a[5] || "").replace(va, wa), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || b.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && b.error(a[0]), a
                },
                PSEUDO: function(a) {
                    var b, c = !a[6] && a[2];
                    return oa.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && ma.test(c) && (b = z(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(va, wa).toLowerCase();
                    return "*" === a ? function() {
                        return !0
                    } : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },
                CLASS: function(a) {
                    var b = R[a + " "];
                    return b || (b = new RegExp("(^|" + ca + ")" + a + "(" + ca + "|$)")) && R(a, function(a) {
                        return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                    })
                },
                ATTR: function(a, c, d) {
                    return function(e) {
                        var f = b.attr(e, a);
                        return null == f ? "!=" === c : c ? (f += "", "=" === c ? f === d : "!=" === c ? f !== d : "^=" === c ? d && 0 === f.indexOf(d) : "*=" === c ? d && f.indexOf(d) > -1 : "$=" === c ? d && f.slice(-d.length) === d : "~=" === c ? (" " + f.replace(ha, " ") + " ").indexOf(d) > -1 : "|=" === c ? f === d || f.slice(0, d.length + 1) === d + "-" : !1) : !0
                    }
                },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3),
                        g = "last" !== a.slice(-4),
                        h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) {
                        return !!a.parentNode
                    } : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                            q = b.parentNode,
                            r = h && b.nodeName.toLowerCase(),
                            s = !i && !h;
                        if (q) {
                            if (f) {
                                for (; p;) {
                                    for (l = b; l = l[p];)
                                        if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                for (k = q[N] || (q[N] = {}), j = k[a] || [], n = j[0] === P && j[1], m = j[0] === P && j[2], l = n && q.childNodes[n]; l = ++n && l && l[p] || (m = n = 0) || o.pop();)
                                    if (1 === l.nodeType && ++m && l === b) {
                                        k[a] = [P, n, m];
                                        break
                                    }
                            } else if (s && (j = (b[N] || (b[N] = {}))[a]) && j[0] === P) m = j[1];
                            else
                                for (;
                                    (l = ++n && l && l[p] || (m = n = 0) || o.pop()) && ((h ? l.nodeName.toLowerCase() !== r : 1 !== l.nodeType) || !++m || (s && ((l[N] || (l[N] = {}))[a] = [P, m]), l !== b)););
                            return m -= e, m === d || m % d === 0 && m / d >= 0
                        }
                    }
                },
                PSEUDO: function(a, c) {
                    var e, f = w.pseudos[a] || w.setFilters[a.toLowerCase()] || b.error("unsupported pseudo: " + a);
                    return f[N] ? f(c) : f.length > 1 ? (e = [a, a, "", c], w.setFilters.hasOwnProperty(a.toLowerCase()) ? d(function(a, b) {
                        for (var d, e = f(a, c), g = e.length; g--;) d = aa(a, e[g]), a[d] = !(b[d] = e[g])
                    }) : function(a) {
                        return f(a, 0, e)
                    }) : f
                }
            },
            pseudos: {
                not: d(function(a) {
                    var b = [],
                        c = [],
                        e = A(a.replace(ia, "$1"));
                    return e[N] ? d(function(a, b, c, d) {
                        for (var f, g = e(a, null, d, []), h = a.length; h--;)(f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function(a, d, f) {
                        return b[0] = a, e(b, null, f, c), b[0] = null, !c.pop()
                    }
                }),
                has: d(function(a) {
                    return function(c) {
                        return b(a, c).length > 0
                    }
                }),
                contains: d(function(a) {
                    return a = a.replace(va, wa),
                        function(b) {
                            return (b.textContent || b.innerText || x(b)).indexOf(a) > -1
                        }
                }),
                lang: d(function(a) {
                    return na.test(a || "") || b.error("unsupported lang: " + a), a = a.replace(va, wa).toLowerCase(),
                        function(b) {
                            var c;
                            do
                                if (c = I ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
                            while ((b = b.parentNode) && 1 === b.nodeType);
                            return !1
                        }
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                },
                root: function(a) {
                    return a === H
                },
                focus: function(a) {
                    return a === G.activeElement && (!G.hasFocus || G.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                },
                enabled: function(a) {
                    return a.disabled === !1
                },
                disabled: function(a) {
                    return a.disabled === !0
                },
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (a.nodeType < 6) return !1;
                    return !0
                },
                parent: function(a) {
                    return !w.pseudos.empty(a)
                },
                header: function(a) {
                    return qa.test(a.nodeName)
                },
                input: function(a) {
                    return pa.test(a.nodeName)
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                },
                first: j(function() {
                    return [0]
                }),
                last: j(function(a, b) {
                    return [b - 1]
                }),
                eq: j(function(a, b, c) {
                    return [0 > c ? c + b : c]
                }),
                even: j(function(a, b) {
                    for (var c = 0; b > c; c += 2) a.push(c);
                    return a
                }),
                odd: j(function(a, b) {
                    for (var c = 1; b > c; c += 2) a.push(c);
                    return a
                }),
                lt: j(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
                    return a
                }),
                gt: j(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);
                    return a
                })
            }
        }, w.pseudos.nth = w.pseudos.eq;
        for (u in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) w.pseudos[u] = h(u);
        for (u in {
                submit: !0,
                reset: !0
            }) w.pseudos[u] = i(u);
        return l.prototype = w.filters = w.pseudos, w.setFilters = new l, z = b.tokenize = function(a, c) {
            var d, e, f, g, h, i, j, k = S[a + " "];
            if (k) return c ? 0 : k.slice(0);
            for (h = a, i = [], j = w.preFilter; h;) {
                (!d || (e = ja.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), d = !1, (e = ka.exec(h)) && (d = e.shift(), f.push({
                    value: d,
                    type: e[0].replace(ia, " ")
                }), h = h.slice(d.length));
                for (g in w.filter) !(e = oa[g].exec(h)) || j[g] && !(e = j[g](e)) || (d = e.shift(), f.push({
                    value: d,
                    type: g,
                    matches: e
                }), h = h.slice(d.length));
                if (!d) break
            }
            return c ? h.length : h ? b.error(a) : S(a, i).slice(0)
        }, A = b.compile = function(a, b) {
            var c, d = [],
                e = [],
                f = T[a + " "];
            if (!f) {
                for (b || (b = z(a)), c = b.length; c--;) f = s(b[c]), f[N] ? d.push(f) : e.push(f);
                f = T(a, t(e, d)), f.selector = a
            }
            return f
        }, B = b.select = function(a, b, c, d) {
            var e, f, g, h, i, j = "function" == typeof a && a,
                l = !d && z(a = j.selector || a);
            if (c = c || [], 1 === l.length) {
                if (f = l[0] = l[0].slice(0), f.length > 2 && "ID" === (g = f[0]).type && v.getById && 9 === b.nodeType && I && w.relative[f[1].type]) {
                    if (b = (w.find.ID(g.matches[0].replace(va, wa), b) || [])[0], !b) return c;
                    j && (b = b.parentNode), a = a.slice(f.shift().value.length)
                }
                for (e = oa.needsContext.test(a) ? 0 : f.length; e-- && (g = f[e], !w.relative[h = g.type]);)
                    if ((i = w.find[h]) && (d = i(g.matches[0].replace(va, wa), ta.test(f[0].type) && k(b.parentNode) || b))) {
                        if (f.splice(e, 1), a = d.length && m(f), !a) return $.apply(c, d), c;
                        break
                    }
            }
            return (j || A(a, l))(d, b, !I, c, ta.test(a) && k(b.parentNode) || b), c
        }, v.sortStable = N.split("").sort(U).join("") === N, v.detectDuplicates = !!E, F(), v.sortDetached = e(function(a) {
            return 1 & a.compareDocumentPosition(G.createElement("div"))
        }), e(function(a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
        }) || f("type|href|height|width", function(a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }), v.attributes && e(function(a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
        }) || f("value", function(a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
        }), e(function(a) {
            return null == a.getAttribute("disabled")
        }) || f(ba, function(a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }), b
    }(a);
    _.find = ea, _.expr = ea.selectors, _.expr[":"] = _.expr.pseudos, _.unique = ea.uniqueSort, _.text = ea.getText, _.isXMLDoc = ea.isXML, _.contains = ea.contains;
    var fa = _.expr.match.needsContext,
        ga = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        ha = /^.[^:#\[\.,]*$/;
    _.filter = function(a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? _.find.matchesSelector(d, a) ? [d] : [] : _.find.matches(a, _.grep(b, function(a) {
            return 1 === a.nodeType
        }))
    }, _.fn.extend({
        find: function(a) {
            var b, c = this.length,
                d = [],
                e = this;
            if ("string" != typeof a) return this.pushStack(_(a).filter(function() {
                for (b = 0; c > b; b++)
                    if (_.contains(e[b], this)) return !0
            }));
            for (b = 0; c > b; b++) _.find(a, e[b], d);
            return d = this.pushStack(c > 1 ? _.unique(d) : d), d.selector = this.selector ? this.selector + " " + a : a, d
        },
        filter: function(a) {
            return this.pushStack(d(this, a || [], !1))
        },
        not: function(a) {
            return this.pushStack(d(this, a || [], !0))
        },
        is: function(a) {
            return !!d(this, "string" == typeof a && fa.test(a) ? _(a) : a || [], !1).length
        }
    });
    var ia, ja = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        ka = _.fn.init = function(a, b) {
            var c, d;
            if (!a) return this;
            if ("string" == typeof a) {
                if (c = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : ja.exec(a), !c || !c[1] && b) return !b || b.jquery ? (b || ia).find(a) : this.constructor(b).find(a);
                if (c[1]) {
                    if (b = b instanceof _ ? b[0] : b, _.merge(this, _.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : Z, !0)), ga.test(c[1]) && _.isPlainObject(b))
                        for (c in b) _.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
                    return this
                }
                return d = Z.getElementById(c[2]), d && d.parentNode && (this.length = 1, this[0] = d), this.context = Z, this.selector = a, this
            }
            return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : _.isFunction(a) ? "undefined" != typeof ia.ready ? ia.ready(a) : a(_) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), _.makeArray(a, this))
        };
    ka.prototype = _.fn, ia = _(Z);
    var la = /^(?:parents|prev(?:Until|All))/,
        ma = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    _.extend({
        dir: function(a, b, c) {
            for (var d = [], e = void 0 !== c;
                (a = a[b]) && 9 !== a.nodeType;)
                if (1 === a.nodeType) {
                    if (e && _(a).is(c)) break;
                    d.push(a)
                }
            return d
        },
        sibling: function(a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c
        }
    }), _.fn.extend({
        has: function(a) {
            var b = _(a, this),
                c = b.length;
            return this.filter(function() {
                for (var a = 0; c > a; a++)
                    if (_.contains(this, b[a])) return !0
            })
        },
        closest: function(a, b) {
            for (var c, d = 0, e = this.length, f = [], g = fa.test(a) || "string" != typeof a ? _(a, b || this.context) : 0; e > d; d++)
                for (c = this[d]; c && c !== b; c = c.parentNode)
                    if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && _.find.matchesSelector(c, a))) {
                        f.push(c);
                        break
                    }
            return this.pushStack(f.length > 1 ? _.unique(f) : f)
        },
        index: function(a) {
            return a ? "string" == typeof a ? U.call(_(a), this[0]) : U.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(a, b) {
            return this.pushStack(_.unique(_.merge(this.get(), _(a, b))))
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    }), _.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        },
        parents: function(a) {
            return _.dir(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return _.dir(a, "parentNode", c)
        },
        next: function(a) {
            return e(a, "nextSibling")
        },
        prev: function(a) {
            return e(a, "previousSibling")
        },
        nextAll: function(a) {
            return _.dir(a, "nextSibling")
        },
        prevAll: function(a) {
            return _.dir(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return _.dir(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return _.dir(a, "previousSibling", c)
        },
        siblings: function(a) {
            return _.sibling((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return _.sibling(a.firstChild)
        },
        contents: function(a) {
            return a.contentDocument || _.merge([], a.childNodes)
        }
    }, function(a, b) {
        _.fn[a] = function(c, d) {
            var e = _.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = _.filter(d, e)), this.length > 1 && (ma[a] || _.unique(e), la.test(a) && e.reverse()), this.pushStack(e)
        }
    });
    var na = /\S+/g,
        oa = {};
    _.Callbacks = function(a) {
        a = "string" == typeof a ? oa[a] || f(a) : _.extend({}, a);
        var b, c, d, e, g, h, i = [],
            j = !a.once && [],
            k = function(f) {
                for (b = a.memory && f, c = !0, h = e || 0, e = 0, g = i.length, d = !0; i && g > h; h++)
                    if (i[h].apply(f[0], f[1]) === !1 && a.stopOnFalse) {
                        b = !1;
                        break
                    }
                d = !1, i && (j ? j.length && k(j.shift()) : b ? i = [] : l.disable())
            },
            l = {
                add: function() {
                    if (i) {
                        var c = i.length;
                        ! function f(b) {
                            _.each(b, function(b, c) {
                                var d = _.type(c);
                                "function" === d ? a.unique && l.has(c) || i.push(c) : c && c.length && "string" !== d && f(c)
                            })
                        }(arguments), d ? g = i.length : b && (e = c, k(b))
                    }
                    return this
                },
                remove: function() {
                    return i && _.each(arguments, function(a, b) {
                        for (var c;
                            (c = _.inArray(b, i, c)) > -1;) i.splice(c, 1), d && (g >= c && g--, h >= c && h--)
                    }), this
                },
                has: function(a) {
                    return a ? _.inArray(a, i) > -1 : !(!i || !i.length)
                },
                empty: function() {
                    return i = [], g = 0, this
                },
                disable: function() {
                    return i = j = b = void 0, this
                },
                disabled: function() {
                    return !i
                },
                lock: function() {
                    return j = void 0, b || l.disable(), this
                },
                locked: function() {
                    return !j
                },
                fireWith: function(a, b) {
                    return !i || c && !j || (b = b || [], b = [a, b.slice ? b.slice() : b], d ? j.push(b) : k(b)), this
                },
                fire: function() {
                    return l.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!c
                }
            };
        return l
    }, _.extend({
        Deferred: function(a) {
            var b = [
                    ["resolve", "done", _.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", _.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", _.Callbacks("memory")]
                ],
                c = "pending",
                d = {
                    state: function() {
                        return c
                    },
                    always: function() {
                        return e.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var a = arguments;
                        return _.Deferred(function(c) {
                            _.each(b, function(b, f) {
                                var g = _.isFunction(a[b]) && a[b];
                                e[f[1]](function() {
                                    var a = g && g.apply(this, arguments);
                                    a && _.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                                })
                            }), a = null
                        }).promise()
                    },
                    promise: function(a) {
                        return null != a ? _.extend(a, d) : d
                    }
                },
                e = {};
            return d.pipe = d.then, _.each(b, function(a, f) {
                var g = f[2],
                    h = f[3];
                d[f[1]] = g.add, h && g.add(function() {
                    c = h
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this
                }, e[f[0] + "With"] = g.fireWith
            }), d.promise(e), a && a.call(e, e), e
        },
        when: function(a) {
            var b, c, d, e = 0,
                f = R.call(arguments),
                g = f.length,
                h = 1 !== g || a && _.isFunction(a.promise) ? g : 0,
                i = 1 === h ? a : _.Deferred(),
                j = function(a, c, d) {
                    return function(e) {
                        c[a] = this, d[a] = arguments.length > 1 ? R.call(arguments) : e, d === b ? i.notifyWith(c, d) : --h || i.resolveWith(c, d)
                    }
                };
            if (g > 1)
                for (b = new Array(g), c = new Array(g), d = new Array(g); g > e; e++) f[e] && _.isFunction(f[e].promise) ? f[e].promise().done(j(e, d, f)).fail(i.reject).progress(j(e, c, b)) : --h;
            return h || i.resolveWith(d, f), i.promise()
        }
    });
    var pa;
    _.fn.ready = function(a) {
        return _.ready.promise().done(a), this
    }, _.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? _.readyWait++ : _.ready(!0)
        },
        ready: function(a) {
            (a === !0 ? --_.readyWait : _.isReady) || (_.isReady = !0, a !== !0 && --_.readyWait > 0 || (pa.resolveWith(Z, [_]), _.fn.triggerHandler && (_(Z).triggerHandler("ready"), _(Z).off("ready"))))
        }
    }), _.ready.promise = function(b) {
        return pa || (pa = _.Deferred(), "complete" === Z.readyState ? setTimeout(_.ready) : (Z.addEventListener("DOMContentLoaded", g, !1), a.addEventListener("load", g, !1))), pa.promise(b)
    }, _.ready.promise();
    var qa = _.access = function(a, b, c, d, e, f, g) {
        var h = 0,
            i = a.length,
            j = null == c;
        if ("object" === _.type(c)) {
            e = !0;
            for (h in c) _.access(a, b, h, c[h], !0, f, g)
        } else if (void 0 !== d && (e = !0, _.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) {
                return j.call(_(a), c)
            })), b))
            for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
        return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
    };
    _.acceptData = function(a) {
        return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
    }, h.uid = 1, h.accepts = _.acceptData, h.prototype = {
        key: function(a) {
            if (!h.accepts(a)) return 0;
            var b = {},
                c = a[this.expando];
            if (!c) {
                c = h.uid++;
                try {
                    b[this.expando] = {
                        value: c
                    }, Object.defineProperties(a, b)
                } catch (d) {
                    b[this.expando] = c, _.extend(a, b)
                }
            }
            return this.cache[c] || (this.cache[c] = {}), c
        },
        set: function(a, b, c) {
            var d, e = this.key(a),
                f = this.cache[e];
            if ("string" == typeof b) f[b] = c;
            else if (_.isEmptyObject(f)) _.extend(this.cache[e], b);
            else
                for (d in b) f[d] = b[d];
            return f
        },
        get: function(a, b) {
            var c = this.cache[this.key(a)];
            return void 0 === b ? c : c[b]
        },
        access: function(a, b, c) {
            var d;
            return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b), void 0 !== d ? d : this.get(a, _.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b)
        },
        remove: function(a, b) {
            var c, d, e, f = this.key(a),
                g = this.cache[f];
            if (void 0 === b) this.cache[f] = {};
            else {
                _.isArray(b) ? d = b.concat(b.map(_.camelCase)) : (e = _.camelCase(b), b in g ? d = [b, e] : (d = e, d = d in g ? [d] : d.match(na) || [])), c = d.length;
                for (; c--;) delete g[d[c]]
            }
        },
        hasData: function(a) {
            return !_.isEmptyObject(this.cache[a[this.expando]] || {})
        },
        discard: function(a) {
            a[this.expando] && delete this.cache[a[this.expando]]
        }
    };
    var ra = new h,
        sa = new h,
        ta = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        ua = /([A-Z])/g;
    _.extend({
        hasData: function(a) {
            return sa.hasData(a) || ra.hasData(a)
        },
        data: function(a, b, c) {
            return sa.access(a, b, c)
        },
        removeData: function(a, b) {
            sa.remove(a, b)
        },
        _data: function(a, b, c) {
            return ra.access(a, b, c)
        },
        _removeData: function(a, b) {
            ra.remove(a, b)
        }
    }), _.fn.extend({
        data: function(a, b) {
            var c, d, e, f = this[0],
                g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = sa.get(f), 1 === f.nodeType && !ra.get(f, "hasDataAttrs"))) {
                    for (c = g.length; c--;) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = _.camelCase(d.slice(5)), i(f, d, e[d])));
                    ra.set(f, "hasDataAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function() {
                sa.set(this, a)
            }) : qa(this, function(b) {
                var c, d = _.camelCase(a);
                if (f && void 0 === b) {
                    if (c = sa.get(f, a), void 0 !== c) return c;
                    if (c = sa.get(f, d), void 0 !== c) return c;
                    if (c = i(f, d, void 0), void 0 !== c) return c
                } else this.each(function() {
                    var c = sa.get(this, d);
                    sa.set(this, d, b), -1 !== a.indexOf("-") && void 0 !== c && sa.set(this, a, b)
                })
            }, null, b, arguments.length > 1, null, !0)
        },
        removeData: function(a) {
            return this.each(function() {
                sa.remove(this, a)
            })
        }
    }), _.extend({
        queue: function(a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue", d = ra.get(a, b), c && (!d || _.isArray(c) ? d = ra.access(a, b, _.makeArray(c)) : d.push(c)), d || []) : void 0
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = _.queue(a, b),
                d = c.length,
                e = c.shift(),
                f = _._queueHooks(a, b),
                g = function() {
                    _.dequeue(a, b)
                };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return ra.get(a, c) || ra.access(a, c, {
                empty: _.Callbacks("once memory").add(function() {
                    ra.remove(a, [b + "queue", c])
                })
            })
        }
    }), _.fn.extend({
        queue: function(a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? _.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                var c = _.queue(this, a, b);
                _._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && _.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                _.dequeue(this, a)
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(a, b) {
            var c, d = 1,
                e = _.Deferred(),
                f = this,
                g = this.length,
                h = function() {
                    --d || e.resolveWith(f, [f])
                };
            for ("string" != typeof a && (b = a, a = void 0), a = a || "fx"; g--;) c = ra.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
            return h(), e.promise(b)
        }
    });
    var va = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        wa = ["Top", "Right", "Bottom", "Left"],
        xa = function(a, b) {
            return a = b || a, "none" === _.css(a, "display") || !_.contains(a.ownerDocument, a)
        },
        ya = /^(?:checkbox|radio)$/i;
    ! function() {
        var a = Z.createDocumentFragment(),
            b = a.appendChild(Z.createElement("div")),
            c = Z.createElement("input");
        c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), Y.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", Y.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue
    }();
    var za = "undefined";
    Y.focusinBubbles = "onfocusin" in a;
    var Aa = /^key/,
        Ba = /^(?:mouse|pointer|contextmenu)|click/,
        Ca = /^(?:focusinfocus|focusoutblur)$/,
        Da = /^([^.]*)(?:\.(.+)|)$/;
    _.event = {
        global: {},
        add: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = ra.get(a);
            if (q)
                for (c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = _.guid++), (i = q.events) || (i = q.events = {}), (g = q.handle) || (g = q.handle = function(b) {
                        return typeof _ !== za && _.event.triggered !== b.type ? _.event.dispatch.apply(a, arguments) : void 0
                    }), b = (b || "").match(na) || [""], j = b.length; j--;) h = Da.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n && (l = _.event.special[n] || {}, n = (e ? l.delegateType : l.bindType) || n, l = _.event.special[n] || {}, k = _.extend({
                    type: n,
                    origType: p,
                    data: d,
                    handler: c,
                    guid: c.guid,
                    selector: e,
                    needsContext: e && _.expr.match.needsContext.test(e),
                    namespace: o.join(".")
                }, f), (m = i[n]) || (m = i[n] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, o, g) !== !1 || a.addEventListener && a.addEventListener(n, g, !1)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), _.event.global[n] = !0)
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = ra.hasData(a) && ra.get(a);
            if (q && (i = q.events)) {
                for (b = (b || "").match(na) || [""], j = b.length; j--;)
                    if (h = Da.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
                        for (l = _.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = i[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length; f--;) k = m[f], !e && p !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                        g && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || _.removeEvent(a, n, q.handle), delete i[n])
                    } else
                        for (n in i) _.event.remove(a, n + b[j], c, d, !0);
                _.isEmptyObject(i) && (delete q.handle, ra.remove(a, "events"))
            }
        },
        trigger: function(b, c, d, e) {
            var f, g, h, i, j, k, l, m = [d || Z],
                n = X.call(b, "type") ? b.type : b,
                o = X.call(b, "namespace") ? b.namespace.split(".") : [];
            if (g = h = d = d || Z, 3 !== d.nodeType && 8 !== d.nodeType && !Ca.test(n + _.event.triggered) && (n.indexOf(".") >= 0 && (o = n.split("."), n = o.shift(), o.sort()), j = n.indexOf(":") < 0 && "on" + n, b = b[_.expando] ? b : new _.Event(n, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = o.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : _.makeArray(c, [b]), l = _.event.special[n] || {}, e || !l.trigger || l.trigger.apply(d, c) !== !1)) {
                if (!e && !l.noBubble && !_.isWindow(d)) {
                    for (i = l.delegateType || n, Ca.test(i + n) || (g = g.parentNode); g; g = g.parentNode) m.push(g), h = g;
                    h === (d.ownerDocument || Z) && m.push(h.defaultView || h.parentWindow || a)
                }
                for (f = 0;
                    (g = m[f++]) && !b.isPropagationStopped();) b.type = f > 1 ? i : l.bindType || n, k = (ra.get(g, "events") || {})[b.type] && ra.get(g, "handle"), k && k.apply(g, c), k = j && g[j], k && k.apply && _.acceptData(g) && (b.result = k.apply(g, c), b.result === !1 && b.preventDefault());
                return b.type = n, e || b.isDefaultPrevented() || l._default && l._default.apply(m.pop(), c) !== !1 || !_.acceptData(d) || j && _.isFunction(d[n]) && !_.isWindow(d) && (h = d[j], h && (d[j] = null), _.event.triggered = n, d[n](), _.event.triggered = void 0, h && (d[j] = h)), b.result
            }
        },
        dispatch: function(a) {
            a = _.event.fix(a);
            var b, c, d, e, f, g = [],
                h = R.call(arguments),
                i = (ra.get(this, "events") || {})[a.type] || [],
                j = _.event.special[a.type] || {};
            if (h[0] = a, a.delegateTarget = this, !j.preDispatch || j.preDispatch.call(this, a) !== !1) {
                for (g = _.event.handlers.call(this, a, i), b = 0;
                    (e = g[b++]) && !a.isPropagationStopped();)
                    for (a.currentTarget = e.elem, c = 0;
                        (f = e.handlers[c++]) && !a.isImmediatePropagationStopped();)(!a.namespace_re || a.namespace_re.test(f.namespace)) && (a.handleObj = f, a.data = f.data, d = ((_.event.special[f.origType] || {}).handle || f.handler).apply(e.elem, h), void 0 !== d && (a.result = d) === !1 && (a.preventDefault(), a.stopPropagation()));
                return j.postDispatch && j.postDispatch.call(this, a), a.result
            }
        },
        handlers: function(a, b) {
            var c, d, e, f, g = [],
                h = b.delegateCount,
                i = a.target;
            if (h && i.nodeType && (!a.button || "click" !== a.type))
                for (; i !== this; i = i.parentNode || this)
                    if (i.disabled !== !0 || "click" !== a.type) {
                        for (d = [], c = 0; h > c; c++) f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? _(e, this).index(i) >= 0 : _.find(e, this, null, [i]).length), d[e] && d.push(f);
                        d.length && g.push({
                            elem: i,
                            handlers: d
                        })
                    }
            return h < b.length && g.push({
                elem: this,
                handlers: b.slice(h)
            }), g
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, b) {
                var c, d, e, f = b.button;
                return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || Z, d = c.documentElement, e = c.body, a.pageX = b.clientX + (d && d.scrollLeft || e && e.scrollLeft || 0) - (d && d.clientLeft || e && e.clientLeft || 0), a.pageY = b.clientY + (d && d.scrollTop || e && e.scrollTop || 0) - (d && d.clientTop || e && e.clientTop || 0)), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a
            }
        },
        fix: function(a) {
            if (a[_.expando]) return a;
            var b, c, d, e = a.type,
                f = a,
                g = this.fixHooks[e];
            for (g || (this.fixHooks[e] = g = Ba.test(e) ? this.mouseHooks : Aa.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new _.Event(f), b = d.length; b--;) c = d[b], a[c] = f[c];
            return a.target || (a.target = Z), 3 === a.target.nodeType && (a.target = a.target.parentNode), g.filter ? g.filter(a, f) : a
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== l() && this.focus ? (this.focus(), !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === l() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && _.nodeName(this, "input") ? (this.click(), !1) : void 0
                },
                _default: function(a) {
                    return _.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function(a, b, c, d) {
            var e = _.extend(new _.Event, c, {
                type: a,
                isSimulated: !0,
                originalEvent: {}
            });
            d ? _.event.trigger(e, null, b) : _.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
        }
    }, _.removeEvent = function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    }, _.Event = function(a, b) {
        return this instanceof _.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? j : k) : this.type = a, b && _.extend(this, b), this.timeStamp = a && a.timeStamp || _.now(), void(this[_.expando] = !0)) : new _.Event(a, b)
    }, _.Event.prototype = {
        isDefaultPrevented: k,
        isPropagationStopped: k,
        isImmediatePropagationStopped: k,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = j, a && a.preventDefault && a.preventDefault()
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = j, a && a.stopPropagation && a.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = j, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation()
        }
    }, _.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(a, b) {
        _.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this,
                    e = a.relatedTarget,
                    f = a.handleObj;
                return (!e || e !== d && !_.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }
        }
    }), Y.focusinBubbles || _.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = function(a) {
            _.event.simulate(b, a.target, _.event.fix(a), !0)
        };
        _.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this,
                    e = ra.access(d, b);
                e || d.addEventListener(a, c, !0), ra.access(d, b, (e || 0) + 1)
            },
            teardown: function() {
                var d = this.ownerDocument || this,
                    e = ra.access(d, b) - 1;
                e ? ra.access(d, b, e) : (d.removeEventListener(a, c, !0), ra.remove(d, b))
            }
        }
    }), _.fn.extend({
        on: function(a, b, c, d, e) {
            var f, g;
            if ("object" == typeof a) {
                "string" != typeof b && (c = c || b, b = void 0);
                for (g in a) this.on(g, b, c, a[g], e);
                return this
            }
            if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1) d = k;
            else if (!d) return this;
            return 1 === e && (f = d, d = function(a) {
                return _().off(a), f.apply(this, arguments)
            }, d.guid = f.guid || (f.guid = _.guid++)), this.each(function() {
                _.event.add(this, a, d, c, b)
            })
        },
        one: function(a, b, c, d) {
            return this.on(a, b, c, d, 1)
        },
        off: function(a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj) return d = a.handleObj, _(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
            if ("object" == typeof a) {
                for (e in a) this.off(e, b, a[e]);
                return this
            }
            return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = k), this.each(function() {
                _.event.remove(this, a, c, b)
            })
        },
        trigger: function(a, b) {
            return this.each(function() {
                _.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            return c ? _.event.trigger(a, b, c, !0) : void 0
        }
    });
    var Ea = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Fa = /<([\w:]+)/,
        Ga = /<|&#?\w+;/,
        Ha = /<(?:script|style|link)/i,
        Ia = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ja = /^$|\/(?:java|ecma)script/i,
        Ka = /^true\/(.*)/,
        La = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Ma = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    Ma.optgroup = Ma.option, Ma.tbody = Ma.tfoot = Ma.colgroup = Ma.caption = Ma.thead, Ma.th = Ma.td, _.extend({
        clone: function(a, b, c) {
            var d, e, f, g, h = a.cloneNode(!0),
                i = _.contains(a.ownerDocument, a);
            if (!(Y.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || _.isXMLDoc(a)))
                for (g = r(h), f = r(a), d = 0, e = f.length; e > d; d++) s(f[d], g[d]);
            if (b)
                if (c)
                    for (f = f || r(a), g = g || r(h), d = 0, e = f.length; e > d; d++) q(f[d], g[d]);
                else q(a, h);
            return g = r(h, "script"), g.length > 0 && p(g, !i && r(a, "script")), h
        },
        buildFragment: function(a, b, c, d) {
            for (var e, f, g, h, i, j, k = b.createDocumentFragment(), l = [], m = 0, n = a.length; n > m; m++)
                if (e = a[m], e || 0 === e)
                    if ("object" === _.type(e)) _.merge(l, e.nodeType ? [e] : e);
                    else if (Ga.test(e)) {
                for (f = f || k.appendChild(b.createElement("div")), g = (Fa.exec(e) || ["", ""])[1].toLowerCase(), h = Ma[g] || Ma._default, f.innerHTML = h[1] + e.replace(Ea, "<$1></$2>") + h[2], j = h[0]; j--;) f = f.lastChild;
                _.merge(l, f.childNodes), f = k.firstChild, f.textContent = ""
            } else l.push(b.createTextNode(e));
            for (k.textContent = "", m = 0; e = l[m++];)
                if ((!d || -1 === _.inArray(e, d)) && (i = _.contains(e.ownerDocument, e), f = r(k.appendChild(e), "script"), i && p(f), c))
                    for (j = 0; e = f[j++];) Ja.test(e.type || "") && c.push(e);
            return k
        },
        cleanData: function(a) {
            for (var b, c, d, e, f = _.event.special, g = 0; void 0 !== (c = a[g]); g++) {
                if (_.acceptData(c) && (e = c[ra.expando], e && (b = ra.cache[e]))) {
                    if (b.events)
                        for (d in b.events) f[d] ? _.event.remove(c, d) : _.removeEvent(c, d, b.handle);
                    ra.cache[e] && delete ra.cache[e]
                }
                delete sa.cache[c[sa.expando]]
            }
        }
    }), _.fn.extend({
        text: function(a) {
            return qa(this, function(a) {
                return void 0 === a ? _.text(this) : this.empty().each(function() {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = a)
                })
            }, null, a, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = m(this, a);
                    b.appendChild(a)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = m(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        remove: function(a, b) {
            for (var c, d = a ? _.filter(a, this) : this, e = 0; null != (c = d[e]); e++) b || 1 !== c.nodeType || _.cleanData(r(c)), c.parentNode && (b && _.contains(c.ownerDocument, c) && p(r(c, "script")), c.parentNode.removeChild(c));
            return this
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (_.cleanData(r(a, !1)), a.textContent = "");
            return this
        },
        clone: function(a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
                return _.clone(this, a, b)
            })
        },
        html: function(a) {
            return qa(this, function(a) {
                var b = this[0] || {},
                    c = 0,
                    d = this.length;
                if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
                if ("string" == typeof a && !Ha.test(a) && !Ma[(Fa.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = a.replace(Ea, "<$1></$2>");
                    try {
                        for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (_.cleanData(r(b, !1)), b.innerHTML = a);
                        b = 0
                    } catch (e) {}
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function() {
            var a = arguments[0];
            return this.domManip(arguments, function(b) {
                a = this.parentNode, _.cleanData(r(this)), a && a.replaceChild(b, this)
            }), a && (a.length || a.nodeType) ? this : this.remove()
        },
        detach: function(a) {
            return this.remove(a, !0)
        },
        domManip: function(a, b) {
            a = S.apply([], a);
            var c, d, e, f, g, h, i = 0,
                j = this.length,
                k = this,
                l = j - 1,
                m = a[0],
                p = _.isFunction(m);
            if (p || j > 1 && "string" == typeof m && !Y.checkClone && Ia.test(m)) return this.each(function(c) {
                var d = k.eq(c);
                p && (a[0] = m.call(this, c, d.html())), d.domManip(a, b)
            });
            if (j && (c = _.buildFragment(a, this[0].ownerDocument, !1, this), d = c.firstChild, 1 === c.childNodes.length && (c = d), d)) {
                for (e = _.map(r(c, "script"), n), f = e.length; j > i; i++) g = c, i !== l && (g = _.clone(g, !0, !0), f && _.merge(e, r(g, "script"))), b.call(this[i], g, i);
                if (f)
                    for (h = e[e.length - 1].ownerDocument, _.map(e, o), i = 0; f > i; i++) g = e[i], Ja.test(g.type || "") && !ra.access(g, "globalEval") && _.contains(h, g) && (g.src ? _._evalUrl && _._evalUrl(g.src) : _.globalEval(g.textContent.replace(La, "")))
            }
            return this
        }
    }), _.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        _.fn[a] = function(a) {
            for (var c, d = [], e = _(a), f = e.length - 1, g = 0; f >= g; g++) c = g === f ? this : this.clone(!0), _(e[g])[b](c), T.apply(d, c.get());
            return this.pushStack(d)
        }
    });
    var Na, Oa = {},
        Pa = /^margin/,
        Qa = new RegExp("^(" + va + ")(?!px)[a-z%]+$", "i"),
        Ra = function(b) {
            return b.ownerDocument.defaultView.opener ? b.ownerDocument.defaultView.getComputedStyle(b, null) : a.getComputedStyle(b, null)
        };
    ! function() {
        function b() {
            g.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", g.innerHTML = "", e.appendChild(f);
            var b = a.getComputedStyle(g, null);
            c = "1%" !== b.top, d = "4px" === b.width, e.removeChild(f)
        }
        var c, d, e = Z.documentElement,
            f = Z.createElement("div"),
            g = Z.createElement("div");
        g.style && (g.style.backgroundClip = "content-box", g.cloneNode(!0).style.backgroundClip = "", Y.clearCloneStyle = "content-box" === g.style.backgroundClip, f.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", f.appendChild(g), a.getComputedStyle && _.extend(Y, {
            pixelPosition: function() {
                return b(), c
            },
            boxSizingReliable: function() {
                return null == d && b(), d
            },
            reliableMarginRight: function() {
                var b, c = g.appendChild(Z.createElement("div"));
                return c.style.cssText = g.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", c.style.marginRight = c.style.width = "0", g.style.width = "1px", e.appendChild(f), b = !parseFloat(a.getComputedStyle(c, null).marginRight), e.removeChild(f), g.removeChild(c), b
            }
        }))
    }(), _.swap = function(a, b, c, d) {
        var e, f, g = {};
        for (f in b) g[f] = a.style[f], a.style[f] = b[f];
        e = c.apply(a, d || []);
        for (f in b) a.style[f] = g[f];
        return e
    };
    var Sa = /^(none|table(?!-c[ea]).+)/,
        Ta = new RegExp("^(" + va + ")(.*)$", "i"),
        Ua = new RegExp("^([+-])=(" + va + ")", "i"),
        Va = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Wa = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Xa = ["Webkit", "O", "Moz", "ms"];
    _.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = v(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = _.camelCase(b),
                    i = a.style;
                return b = _.cssProps[h] || (_.cssProps[h] = x(i, h)), g = _.cssHooks[b] || _.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, "string" === f && (e = Ua.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(_.css(a, b)), f = "number"), void(null != c && c === c && ("number" !== f || _.cssNumber[h] || (c += "px"), Y.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c))))
            }
        },
        css: function(a, b, c, d) {
            var e, f, g, h = _.camelCase(b);
            return b = _.cssProps[h] || (_.cssProps[h] = x(a.style, h)), g = _.cssHooks[b] || _.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = v(a, b, d)), "normal" === e && b in Wa && (e = Wa[b]), "" === c || c ? (f = parseFloat(e), c === !0 || _.isNumeric(f) ? f || 0 : e) : e
        }
    }), _.each(["height", "width"], function(a, b) {
        _.cssHooks[b] = {
            get: function(a, c, d) {
                return c ? Sa.test(_.css(a, "display")) && 0 === a.offsetWidth ? _.swap(a, Va, function() {
                    return A(a, b, d)
                }) : A(a, b, d) : void 0
            },
            set: function(a, c, d) {
                var e = d && Ra(a);
                return y(a, c, d ? z(a, b, d, "border-box" === _.css(a, "boxSizing", !1, e), e) : 0)
            }
        }
    }), _.cssHooks.marginRight = w(Y.reliableMarginRight, function(a, b) {
        return b ? _.swap(a, {
            display: "inline-block"
        }, v, [a, "marginRight"]) : void 0
    }), _.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        _.cssHooks[a + b] = {
            expand: function(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + wa[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        }, Pa.test(a) || (_.cssHooks[a + b].set = y)
    }), _.fn.extend({
        css: function(a, b) {
            return qa(this, function(a, b, c) {
                var d, e, f = {},
                    g = 0;
                if (_.isArray(b)) {
                    for (d = Ra(a), e = b.length; e > g; g++) f[b[g]] = _.css(a, b[g], !1, d);
                    return f
                }
                return void 0 !== c ? _.style(a, b, c) : _.css(a, b)
            }, a, b, arguments.length > 1)
        },
        show: function() {
            return B(this, !0)
        },
        hide: function() {
            return B(this)
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                xa(this) ? _(this).show() : _(this).hide()
            })
        }
    }), _.Tween = C, C.prototype = {
        constructor: C,
        init: function(a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (_.cssNumber[c] ? "" : "px")
        },
        cur: function() {
            var a = C.propHooks[this.prop];
            return a && a.get ? a.get(this) : C.propHooks._default.get(this)
        },
        run: function(a) {
            var b, c = C.propHooks[this.prop];
            return this.pos = b = this.options.duration ? _.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : C.propHooks._default.set(this), this
        }
    }, C.prototype.init.prototype = C.prototype, C.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = _.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
            },
            set: function(a) {
                _.fx.step[a.prop] ? _.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[_.cssProps[a.prop]] || _.cssHooks[a.prop]) ? _.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
            }
        }
    }, C.propHooks.scrollTop = C.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    }, _.easing = {
        linear: function(a) {
            return a
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2
        }
    }, _.fx = C.prototype.init, _.fx.step = {};
    var Ya, Za, $a = /^(?:toggle|show|hide)$/,
        _a = new RegExp("^(?:([+-])=|)(" + va + ")([a-z%]*)$", "i"),
        ab = /queueHooks$/,
        bb = [G],
        cb = {
            "*": [function(a, b) {
                var c = this.createTween(a, b),
                    d = c.cur(),
                    e = _a.exec(b),
                    f = e && e[3] || (_.cssNumber[a] ? "" : "px"),
                    g = (_.cssNumber[a] || "px" !== f && +d) && _a.exec(_.css(c.elem, a)),
                    h = 1,
                    i = 20;
                if (g && g[3] !== f) {
                    f = f || g[3], e = e || [], g = +d || 1;
                    do h = h || ".5", g /= h, _.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i)
                }
                return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c
            }]
        };
    _.Animation = _.extend(I, {
            tweener: function(a, b) {
                _.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
                for (var c, d = 0, e = a.length; e > d; d++) c = a[d], cb[c] = cb[c] || [], cb[c].unshift(b)
            },
            prefilter: function(a, b) {
                b ? bb.unshift(a) : bb.push(a)
            }
        }), _.speed = function(a, b, c) {
            var d = a && "object" == typeof a ? _.extend({}, a) : {
                complete: c || !c && b || _.isFunction(a) && a,
                duration: a,
                easing: c && b || b && !_.isFunction(b) && b
            };
            return d.duration = _.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in _.fx.speeds ? _.fx.speeds[d.duration] : _.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function() {
                _.isFunction(d.old) && d.old.call(this), d.queue && _.dequeue(this, d.queue)
            }, d
        }, _.fn.extend({
            fadeTo: function(a, b, c, d) {
                return this.filter(xa).css("opacity", 0).show().end().animate({
                    opacity: b
                }, a, c, d)
            },
            animate: function(a, b, c, d) {
                var e = _.isEmptyObject(a),
                    f = _.speed(b, c, d),
                    g = function() {
                        var b = I(this, _.extend({}, a), f);
                        (e || ra.get(this, "finish")) && b.stop(!0)
                    };
                return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
            },
            stop: function(a, b, c) {
                var d = function(a) {
                    var b = a.stop;
                    delete a.stop, b(c)
                };
                return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function() {
                    var b = !0,
                        e = null != a && a + "queueHooks",
                        f = _.timers,
                        g = ra.get(this);
                    if (e) g[e] && g[e].stop && d(g[e]);
                    else
                        for (e in g) g[e] && g[e].stop && ab.test(e) && d(g[e]);
                    for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                    (b || !c) && _.dequeue(this, a)
                })
            },
            finish: function(a) {
                return a !== !1 && (a = a || "fx"), this.each(function() {
                    var b, c = ra.get(this),
                        d = c[a + "queue"],
                        e = c[a + "queueHooks"],
                        f = _.timers,
                        g = d ? d.length : 0;
                    for (c.finish = !0, _.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                    for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                    delete c.finish
                })
            }
        }), _.each(["toggle", "show", "hide"], function(a, b) {
            var c = _.fn[b];
            _.fn[b] = function(a, d, e) {
                return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(E(b, !0), a, d, e)
            }
        }), _.each({
            slideDown: E("show"),
            slideUp: E("hide"),
            slideToggle: E("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(a, b) {
            _.fn[a] = function(a, c, d) {
                return this.animate(b, a, c, d)
            }
        }), _.timers = [], _.fx.tick = function() {
            var a, b = 0,
                c = _.timers;
            for (Ya = _.now(); b < c.length; b++) a = c[b], a() || c[b] !== a || c.splice(b--, 1);
            c.length || _.fx.stop(), Ya = void 0
        }, _.fx.timer = function(a) {
            _.timers.push(a), a() ? _.fx.start() : _.timers.pop()
        }, _.fx.interval = 13, _.fx.start = function() {
            Za || (Za = setInterval(_.fx.tick, _.fx.interval))
        }, _.fx.stop = function() {
            clearInterval(Za), Za = null
        }, _.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, _.fn.delay = function(a, b) {
            return a = _.fx ? _.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) {
                var d = setTimeout(b, a);
                c.stop = function() {
                    clearTimeout(d)
                }
            })
        },
        function() {
            var a = Z.createElement("input"),
                b = Z.createElement("select"),
                c = b.appendChild(Z.createElement("option"));
            a.type = "checkbox", Y.checkOn = "" !== a.value, Y.optSelected = c.selected, b.disabled = !0, Y.optDisabled = !c.disabled, a = Z.createElement("input"), a.value = "t", a.type = "radio", Y.radioValue = "t" === a.value
        }();
    var db, eb, fb = _.expr.attrHandle;
    _.fn.extend({
        attr: function(a, b) {
            return qa(this, _.attr, a, b, arguments.length > 1)
        },
        removeAttr: function(a) {
            return this.each(function() {
                _.removeAttr(this, a)
            })
        }
    }), _.extend({
        attr: function(a, b, c) {
            var d, e, f = a.nodeType;
            return a && 3 !== f && 8 !== f && 2 !== f ? typeof a.getAttribute === za ? _.prop(a, b, c) : (1 === f && _.isXMLDoc(a) || (b = b.toLowerCase(), d = _.attrHooks[b] || (_.expr.match.bool.test(b) ? eb : db)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = _.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void _.removeAttr(a, b)) : void 0
        },
        removeAttr: function(a, b) {
            var c, d, e = 0,
                f = b && b.match(na);
            if (f && 1 === a.nodeType)
                for (; c = f[e++];) d = _.propFix[c] || c, _.expr.match.bool.test(c) && (a[d] = !1), a.removeAttribute(c)
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!Y.radioValue && "radio" === b && _.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            }
        }
    }), eb = {
        set: function(a, b, c) {
            return b === !1 ? _.removeAttr(a, c) : a.setAttribute(c, c), c
        }
    }, _.each(_.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = fb[b] || _.find.attr;
        fb[b] = function(a, b, d) {
            var e, f;
            return d || (f = fb[b], fb[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, fb[b] = f), e
        }
    });
    var gb = /^(?:input|select|textarea|button)$/i;
    _.fn.extend({
        prop: function(a, b) {
            return qa(this, _.prop, a, b, arguments.length > 1)
        },
        removeProp: function(a) {
            return this.each(function() {
                delete this[_.propFix[a] || a]
            })
        }
    }), _.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(a, b, c) {
            var d, e, f, g = a.nodeType;
            return a && 3 !== g && 8 !== g && 2 !== g ? (f = 1 !== g || !_.isXMLDoc(a), f && (b = _.propFix[b] || b, e = _.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]) : void 0
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    return a.hasAttribute("tabindex") || gb.test(a.nodeName) || a.href ? a.tabIndex : -1
                }
            }
        }
    }), Y.optSelected || (_.propHooks.selected = {
        get: function(a) {
            var b = a.parentNode;
            return b && b.parentNode && b.parentNode.selectedIndex, null
        }
    }), _.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        _.propFix[this.toLowerCase()] = this
    });
    var hb = /[\t\r\n\f]/g;
    _.fn.extend({
        addClass: function(a) {
            var b, c, d, e, f, g, h = "string" == typeof a && a,
                i = 0,
                j = this.length;
            if (_.isFunction(a)) return this.each(function(b) {
                _(this).addClass(a.call(this, b, this.className))
            });
            if (h)
                for (b = (a || "").match(na) || []; j > i; i++)
                    if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(hb, " ") : " ")) {
                        for (f = 0; e = b[f++];) d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                        g = _.trim(d), c.className !== g && (c.className = g)
                    }
            return this
        },
        removeClass: function(a) {
            var b, c, d, e, f, g, h = 0 === arguments.length || "string" == typeof a && a,
                i = 0,
                j = this.length;
            if (_.isFunction(a)) return this.each(function(b) {
                _(this).removeClass(a.call(this, b, this.className))
            });
            if (h)
                for (b = (a || "").match(na) || []; j > i; i++)
                    if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(hb, " ") : "")) {
                        for (f = 0; e = b[f++];)
                            for (; d.indexOf(" " + e + " ") >= 0;) d = d.replace(" " + e + " ", " ");
                        g = a ? _.trim(d) : "", c.className !== g && (c.className = g)
                    }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(_.isFunction(a) ? function(c) {
                _(this).toggleClass(a.call(this, c, this.className, b), b)
            } : function() {
                if ("string" === c)
                    for (var b, d = 0, e = _(this), f = a.match(na) || []; b = f[d++];) e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
                else(c === za || "boolean" === c) && (this.className && ra.set(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : ra.get(this, "__className__") || "")
            })
        },
        hasClass: function(a) {
            for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
                if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(hb, " ").indexOf(b) >= 0) return !0;
            return !1
        }
    });
    var ib = /\r/g;
    _.fn.extend({
        val: function(a) {
            var b, c, d, e = this[0];
            return arguments.length ? (d = _.isFunction(a), this.each(function(c) {
                var e;
                1 === this.nodeType && (e = d ? a.call(this, c, _(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : _.isArray(e) && (e = _.map(e, function(a) {
                    return null == a ? "" : a + ""
                })), b = _.valHooks[this.type] || _.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
            })) : e ? (b = _.valHooks[e.type] || _.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(ib, "") : null == c ? "" : c)) : void 0
        }
    }), _.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = _.find.attr(a, "value");
                    return null != b ? b : _.trim(_.text(a))
                }
            },
            select: {
                get: function(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                        if (c = d[i], !(!c.selected && i !== e || (Y.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && _.nodeName(c.parentNode, "optgroup"))) {
                            if (b = _(c).val(), f) return b;
                            g.push(b)
                        }
                    return g
                },
                set: function(a, b) {
                    for (var c, d, e = a.options, f = _.makeArray(b), g = e.length; g--;) d = e[g], (d.selected = _.inArray(d.value, f) >= 0) && (c = !0);
                    return c || (a.selectedIndex = -1), f
                }
            }
        }
    }), _.each(["radio", "checkbox"], function() {
        _.valHooks[this] = {
            set: function(a, b) {
                return _.isArray(b) ? a.checked = _.inArray(_(a).val(), b) >= 0 : void 0
            }
        }, Y.checkOn || (_.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    }), _.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        _.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }), _.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        },
        bind: function(a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function(a, b) {
            return this.off(a, null, b)
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    });
    var jb = _.now(),
        kb = /\?/;
    _.parseJSON = function(a) {
        return JSON.parse(a + "")
    }, _.parseXML = function(a) {
        var b, c;
        if (!a || "string" != typeof a) return null;
        try {
            c = new DOMParser, b = c.parseFromString(a, "text/xml")
        } catch (d) {
            b = void 0
        }
        return (!b || b.getElementsByTagName("parsererror").length) && _.error("Invalid XML: " + a), b
    };
    var lb = /#.*$/,
        mb = /([?&])_=[^&]*/,
        nb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        ob = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        pb = /^(?:GET|HEAD)$/,
        qb = /^\/\//,
        rb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        sb = {},
        tb = {},
        ub = "*/".concat("*"),
        vb = a.location.href,
        wb = rb.exec(vb.toLowerCase()) || [];
    _.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: vb,
            type: "GET",
            isLocal: ob.test(wb[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": ub,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": _.parseJSON,
                "text xml": _.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? L(L(a, _.ajaxSettings), b) : L(_.ajaxSettings, a)
        },
        ajaxPrefilter: J(sb),
        ajaxTransport: J(tb),
        ajax: function(a, b) {
            function c(a, b, c, g) {
                var i, k, r, s, u, w = b;
                2 !== t && (t = 2, h && clearTimeout(h), d = void 0, f = g || "", v.readyState = a > 0 ? 4 : 0, i = a >= 200 && 300 > a || 304 === a, c && (s = M(l, v, c)), s = N(l, s, v, i), i ? (l.ifModified && (u = v.getResponseHeader("Last-Modified"), u && (_.lastModified[e] = u), u = v.getResponseHeader("etag"), u && (_.etag[e] = u)), 204 === a || "HEAD" === l.type ? w = "nocontent" : 304 === a ? w = "notmodified" : (w = s.state, k = s.data, r = s.error, i = !r)) : (r = w, (a || !w) && (w = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || w) + "", i ? o.resolveWith(m, [k, w, v]) : o.rejectWith(m, [v, w, r]), v.statusCode(q), q = void 0, j && n.trigger(i ? "ajaxSuccess" : "ajaxError", [v, l, i ? k : r]), p.fireWith(m, [v, w]), j && (n.trigger("ajaxComplete", [v, l]), --_.active || _.event.trigger("ajaxStop")))
            }
            "object" == typeof a && (b = a, a = void 0), b = b || {};
            var d, e, f, g, h, i, j, k, l = _.ajaxSetup({}, b),
                m = l.context || l,
                n = l.context && (m.nodeType || m.jquery) ? _(m) : _.event,
                o = _.Deferred(),
                p = _.Callbacks("once memory"),
                q = l.statusCode || {},
                r = {},
                s = {},
                t = 0,
                u = "canceled",
                v = {
                    readyState: 0,
                    getResponseHeader: function(a) {
                        var b;
                        if (2 === t) {
                            if (!g)
                                for (g = {}; b = nb.exec(f);) g[b[1].toLowerCase()] = b[2];
                            b = g[a.toLowerCase()]
                        }
                        return null == b ? null : b
                    },
                    getAllResponseHeaders: function() {
                        return 2 === t ? f : null
                    },
                    setRequestHeader: function(a, b) {
                        var c = a.toLowerCase();
                        return t || (a = s[c] = s[c] || a, r[a] = b), this
                    },
                    overrideMimeType: function(a) {
                        return t || (l.mimeType = a), this
                    },
                    statusCode: function(a) {
                        var b;
                        if (a)
                            if (2 > t)
                                for (b in a) q[b] = [q[b], a[b]];
                            else v.always(a[v.status]);
                        return this
                    },
                    abort: function(a) {
                        var b = a || u;
                        return d && d.abort(b), c(0, b), this
                    }
                };
            if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, l.url = ((a || l.url || vb) + "").replace(lb, "").replace(qb, wb[1] + "//"), l.type = b.method || b.type || l.method || l.type, l.dataTypes = _.trim(l.dataType || "*").toLowerCase().match(na) || [""], null == l.crossDomain && (i = rb.exec(l.url.toLowerCase()), l.crossDomain = !(!i || i[1] === wb[1] && i[2] === wb[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (wb[3] || ("http:" === wb[1] ? "80" : "443")))), l.data && l.processData && "string" != typeof l.data && (l.data = _.param(l.data, l.traditional)), K(sb, l, b, v), 2 === t) return v;
            j = _.event && l.global, j && 0 === _.active++ && _.event.trigger("ajaxStart"), l.type = l.type.toUpperCase(), l.hasContent = !pb.test(l.type), e = l.url, l.hasContent || (l.data && (e = l.url += (kb.test(e) ? "&" : "?") + l.data, delete l.data), l.cache === !1 && (l.url = mb.test(e) ? e.replace(mb, "$1_=" + jb++) : e + (kb.test(e) ? "&" : "?") + "_=" + jb++)), l.ifModified && (_.lastModified[e] && v.setRequestHeader("If-Modified-Since", _.lastModified[e]), _.etag[e] && v.setRequestHeader("If-None-Match", _.etag[e])), (l.data && l.hasContent && l.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", l.contentType), v.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + ("*" !== l.dataTypes[0] ? ", " + ub + "; q=0.01" : "") : l.accepts["*"]);
            for (k in l.headers) v.setRequestHeader(k, l.headers[k]);
            if (l.beforeSend && (l.beforeSend.call(m, v, l) === !1 || 2 === t)) return v.abort();
            u = "abort";
            for (k in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) v[k](l[k]);
            if (d = K(tb, l, b, v)) {
                v.readyState = 1, j && n.trigger("ajaxSend", [v, l]), l.async && l.timeout > 0 && (h = setTimeout(function() {
                    v.abort("timeout")
                }, l.timeout));
                try {
                    t = 1, d.send(r, c)
                } catch (w) {
                    if (!(2 > t)) throw w;
                    c(-1, w)
                }
            } else c(-1, "No Transport");
            return v
        },
        getJSON: function(a, b, c) {
            return _.get(a, b, c, "json")
        },
        getScript: function(a, b) {
            return _.get(a, void 0, b, "script")
        }
    }), _.each(["get", "post"], function(a, b) {
        _[b] = function(a, c, d, e) {
            return _.isFunction(c) && (e = e || d, d = c, c = void 0), _.ajax({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            })
        }
    }), _._evalUrl = function(a) {
        return _.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, _.fn.extend({
        wrapAll: function(a) {
            var b;
            return _.isFunction(a) ? this.each(function(b) {
                _(this).wrapAll(a.call(this, b))
            }) : (this[0] && (b = _(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                for (var a = this; a.firstElementChild;) a = a.firstElementChild;
                return a
            }).append(this)), this)
        },
        wrapInner: function(a) {
            return this.each(_.isFunction(a) ? function(b) {
                _(this).wrapInner(a.call(this, b))
            } : function() {
                var b = _(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) {
            var b = _.isFunction(a);
            return this.each(function(c) {
                _(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                _.nodeName(this, "body") || _(this).replaceWith(this.childNodes)
            }).end()
        }
    }), _.expr.filters.hidden = function(a) {
        return a.offsetWidth <= 0 && a.offsetHeight <= 0
    }, _.expr.filters.visible = function(a) {
        return !_.expr.filters.hidden(a)
    };
    var xb = /%20/g,
        yb = /\[\]$/,
        zb = /\r?\n/g,
        Ab = /^(?:submit|button|image|reset|file)$/i,
        Bb = /^(?:input|select|textarea|keygen)/i;
    _.param = function(a, b) {
        var c, d = [],
            e = function(a, b) {
                b = _.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
            };
        if (void 0 === b && (b = _.ajaxSettings && _.ajaxSettings.traditional), _.isArray(a) || a.jquery && !_.isPlainObject(a)) _.each(a, function() {
            e(this.name, this.value)
        });
        else
            for (c in a) O(c, a[c], b, e);
        return d.join("&").replace(xb, "+")
    }, _.fn.extend({
        serialize: function() {
            return _.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var a = _.prop(this, "elements");
                return a ? _.makeArray(a) : this
            }).filter(function() {
                var a = this.type;
                return this.name && !_(this).is(":disabled") && Bb.test(this.nodeName) && !Ab.test(a) && (this.checked || !ya.test(a))
            }).map(function(a, b) {
                var c = _(this).val();
                return null == c ? null : _.isArray(c) ? _.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(zb, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(zb, "\r\n")
                }
            }).get()
        }
    }), _.ajaxSettings.xhr = function() {
        try {
            return new XMLHttpRequest
        } catch (a) {}
    };
    var Cb = 0,
        Db = {},
        Eb = {
            0: 200,
            1223: 204
        },
        Fb = _.ajaxSettings.xhr();
    a.attachEvent && a.attachEvent("onunload", function() {
        for (var a in Db) Db[a]()
    }), Y.cors = !!Fb && "withCredentials" in Fb, Y.ajax = Fb = !!Fb, _.ajaxTransport(function(a) {
        var b;
        return Y.cors || Fb && !a.crossDomain ? {
            send: function(c, d) {
                var e, f = a.xhr(),
                    g = ++Cb;
                if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)
                    for (e in a.xhrFields) f[e] = a.xhrFields[e];
                a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                for (e in c) f.setRequestHeader(e, c[e]);
                b = function(a) {
                    return function() {
                        b && (delete Db[g], b = f.onload = f.onerror = null, "abort" === a ? f.abort() : "error" === a ? d(f.status, f.statusText) : d(Eb[f.status] || f.status, f.statusText, "string" == typeof f.responseText ? {
                            text: f.responseText
                        } : void 0, f.getAllResponseHeaders()))
                    }
                }, f.onload = b(), f.onerror = b("error"), b = Db[g] = b("abort");
                try {
                    f.send(a.hasContent && a.data || null)
                } catch (h) {
                    if (b) throw h
                }
            },
            abort: function() {
                b && b()
            }
        } : void 0
    }), _.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(a) {
                return _.globalEval(a), a
            }
        }
    }), _.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET")
    }), _.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c;
            return {
                send: function(d, e) {
                    b = _("<script>").prop({
                        async: !0,
                        charset: a.scriptCharset,
                        src: a.url
                    }).on("load error", c = function(a) {
                        b.remove(), c = null, a && e("error" === a.type ? 404 : 200, a.type)
                    }), Z.head.appendChild(b[0])
                },
                abort: function() {
                    c && c()
                }
            }
        }
    });
    var Gb = [],
        Hb = /(=)\?(?=&|$)|\?\?/;
    _.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = Gb.pop() || _.expando + "_" + jb++;
            return this[a] = !0, a
        }
    }), _.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (Hb.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && Hb.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = _.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Hb, "$1" + e) : b.jsonp !== !1 && (b.url += (kb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() {
            return g || _.error(e + " was not called"), g[0]
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
            g = arguments
        }, d.always(function() {
            a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Gb.push(e)), g && _.isFunction(f) && f(g[0]), g = f = void 0
        }), "script") : void 0
    }), _.parseHTML = function(a, b, c) {
        if (!a || "string" != typeof a) return null;
        "boolean" == typeof b && (c = b, b = !1), b = b || Z;
        var d = ga.exec(a),
            e = !c && [];
        return d ? [b.createElement(d[1])] : (d = _.buildFragment([a], b, e), e && e.length && _(e).remove(), _.merge([], d.childNodes))
    };
    var Ib = _.fn.load;
    _.fn.load = function(a, b, c) {
        if ("string" != typeof a && Ib) return Ib.apply(this, arguments);
        var d, e, f, g = this,
            h = a.indexOf(" ");
        return h >= 0 && (d = _.trim(a.slice(h)), a = a.slice(0, h)), _.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && _.ajax({
            url: a,
            type: e,
            dataType: "html",
            data: b
        }).done(function(a) {
            f = arguments, g.html(d ? _("<div>").append(_.parseHTML(a)).find(d) : a)
        }).complete(c && function(a, b) {
            g.each(c, f || [a.responseText, b, a])
        }), this
    }, _.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
        _.fn[b] = function(a) {
            return this.on(b, a)
        }
    }), _.expr.filters.animated = function(a) {
        return _.grep(_.timers, function(b) {
            return a === b.elem
        }).length
    };
    var Jb = a.document.documentElement;
    _.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = _.css(a, "position"),
                l = _(a),
                m = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = _.css(a, "top"), i = _.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), _.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
        }
    }, _.fn.extend({
        offset: function(a) {
            if (arguments.length) return void 0 === a ? this : this.each(function(b) {
                _.offset.setOffset(this, a, b)
            });
            var b, c, d = this[0],
                e = {
                    top: 0,
                    left: 0
                },
                f = d && d.ownerDocument;
            return f ? (b = f.documentElement, _.contains(b, d) ? (typeof d.getBoundingClientRect !== za && (e = d.getBoundingClientRect()), c = P(f), {
                top: e.top + c.pageYOffset - b.clientTop,
                left: e.left + c.pageXOffset - b.clientLeft
            }) : e) : void 0
        },
        position: function() {
            if (this[0]) {
                var a, b, c = this[0],
                    d = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === _.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), _.nodeName(a[0], "html") || (d = a.offset()), d.top += _.css(a[0], "borderTopWidth", !0), d.left += _.css(a[0], "borderLeftWidth", !0)), {
                    top: b.top - d.top - _.css(c, "marginTop", !0),
                    left: b.left - d.left - _.css(c, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var a = this.offsetParent || Jb; a && !_.nodeName(a, "html") && "static" === _.css(a, "position");) a = a.offsetParent;
                return a || Jb
            })
        }
    }), _.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(b, c) {
        var d = "pageYOffset" === c;
        _.fn[b] = function(e) {
            return qa(this, function(b, e, f) {
                var g = P(b);
                return void 0 === f ? g ? g[c] : b[e] : void(g ? g.scrollTo(d ? a.pageXOffset : f, d ? f : a.pageYOffset) : b[e] = f)
            }, b, e, arguments.length, null)
        }
    }), _.each(["top", "left"], function(a, b) {
        _.cssHooks[b] = w(Y.pixelPosition, function(a, c) {
            return c ? (c = v(a, b), Qa.test(c) ? _(a).position()[b] + "px" : c) : void 0
        })
    }), _.each({
        Height: "height",
        Width: "width"
    }, function(a, b) {
        _.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function(c, d) {
            _.fn[d] = function(d, e) {
                var f = arguments.length && (c || "boolean" != typeof d),
                    g = c || (d === !0 || e === !0 ? "margin" : "border");
                return qa(this, function(b, c, d) {
                    var e;
                    return _.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? _.css(b, c, g) : _.style(b, c, d, g)
                }, b, f ? d : void 0, f, null)
            }
        })
    }), _.fn.size = function() {
        return this.length
    }, _.fn.andSelf = _.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return _
    });
    var Kb = a.jQuery,
        Lb = a.$;
    return _.noConflict = function(b) {
        return a.$ === _ && (a.$ = Lb), b && a.jQuery === _ && (a.jQuery = Kb), _
    }, typeof b === za && (a.jQuery = a.$ = _), _
}),
function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof exports ? module.exports = a(require("jquery")) : a(jQuery)
}(function(a) {
    if (!a.support.cors && a.ajaxTransport && window.XDomainRequest) {
        var b = /^https?:\/\//i,
            c = /^get|post$/i,
            d = new RegExp("^" + location.protocol, "i");
        a.ajaxTransport("* text html xml json", function(e, f) {
            if (e.crossDomain && e.async && c.test(e.type) && b.test(e.url) && d.test(e.url)) {
                var g = null;
                return {
                    send: function(b, c) {
                        var d = "",
                            h = (f.dataType || "").toLowerCase();
                        g = new XDomainRequest, /^\d+$/.test(f.timeout) && (g.timeout = f.timeout), g.ontimeout = function() {
                            c(500, "timeout")
                        }, g.onload = function() {
                            var b = "Content-Length: " + g.responseText.length + "\r\nContent-Type: " + g.contentType,
                                d = {
                                    code: 200,
                                    message: "success"
                                },
                                e = {
                                    text: g.responseText
                                };
                            try {
                                if ("html" === h || /text\/html/i.test(g.contentType)) e.html = g.responseText;
                                else if ("json" === h || "text" !== h && /\/json/i.test(g.contentType)) try {
                                    e.json = a.parseJSON(g.responseText)
                                } catch (f) {
                                    d.code = 500, d.message = "parseerror"
                                } else if ("xml" === h || "text" !== h && /\/xml/i.test(g.contentType)) {
                                    var i = new ActiveXObject("Microsoft.XMLDOM");
                                    i.async = !1;
                                    try {
                                        i.loadXML(g.responseText)
                                    } catch (f) {
                                        i = void 0
                                    }
                                    if (!i || !i.documentElement || i.getElementsByTagName("parsererror").length) throw d.code = 500, d.message = "parseerror", "Invalid XML: " + g.responseText;
                                    e.xml = i
                                }
                            } catch (j) {
                                throw j
                            } finally {
                                c(d.code, d.message, e, b)
                            }
                        }, g.onprogress = function() {}, g.onerror = function() {
                            c(500, "error", {
                                text: g.responseText
                            })
                        }, f.data && (d = "string" === a.type(f.data) ? f.data : a.param(f.data)), g.open(e.type, e.url), g.send(d)
                    },
                    abort: function() {
                        g && g.abort()
                    }
                }
            }
        })
    }
}), ! function(a, b) {
    "function" == typeof define && define.amd ? define([], b) : "object" == typeof exports ? module.exports = b() : a.Handlebars = b()
}(this, function() {
    var a = function() {
            "use strict";

            function a(a) {
                return i[a]
            }

            function b(a) {
                for (var b = 1; b < arguments.length; b++)
                    for (var c in arguments[b]) Object.prototype.hasOwnProperty.call(arguments[b], c) && (a[c] = arguments[b][c]);
                return a
            }

            function c(a, b) {
                for (var c = 0, d = a.length; d > c; c++)
                    if (a[c] === b) return c;
                return -1
            }

            function d(b) {
                return b && b.toHTML ? b.toHTML() : null == b ? "" : b ? (b = "" + b, k.test(b) ? b.replace(j, a) : b) : b + ""
            }

            function e(a) {
                return a || 0 === a ? n(a) && 0 === a.length ? !0 : !1 : !0
            }

            function f(a, b) {
                return a.path = b, a
            }

            function g(a, b) {
                return (a ? a + "." : "") + b
            }
            var h = {},
                i = {
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#x27;",
                    "`": "&#x60;"
                },
                j = /[&<>"'`]/g,
                k = /[&<>"'`]/;
            h.extend = b;
            var l = Object.prototype.toString;
            h.toString = l;
            var m = function(a) {
                return "function" == typeof a
            };
            m(/x/) && (m = function(a) {
                return "function" == typeof a && "[object Function]" === l.call(a)
            });
            var m;
            h.isFunction = m;
            var n = Array.isArray || function(a) {
                return a && "object" == typeof a ? "[object Array]" === l.call(a) : !1
            };
            return h.isArray = n, h.indexOf = c, h.escapeExpression = d, h.isEmpty = e, h.blockParams = f, h.appendContextPath = g, h
        }(),
        b = function() {
            "use strict";

            function a(a, b) {
                var d, e, f = b && b.loc;
                f && (d = f.start.line, e = f.start.column, a += " - " + d + ":" + e);
                for (var g = Error.prototype.constructor.call(this, a), h = 0; h < c.length; h++) this[c[h]] = g[c[h]];
                f && (this.lineNumber = d, this.column = e)
            }
            var b, c = ["description", "fileName", "lineNumber", "message", "name", "number", "stack"];
            return a.prototype = new Error, b = a
        }(),
        c = function(a, b) {
            "use strict";

            function c(a, b) {
                this.helpers = a || {}, this.partials = b || {}, d(this)
            }

            function d(a) {
                a.registerHelper("helperMissing", function() {
                    if (1 === arguments.length) return void 0;
                    throw new g("Missing helper: '" + arguments[arguments.length - 1].name + "'")
                }), a.registerHelper("blockHelperMissing", function(b, c) {
                    var d = c.inverse,
                        e = c.fn;
                    if (b === !0) return e(this);
                    if (b === !1 || null == b) return d(this);
                    if (k(b)) return b.length > 0 ? (c.ids && (c.ids = [c.name]), a.helpers.each(b, c)) : d(this);
                    if (c.data && c.ids) {
                        var g = q(c.data);
                        g.contextPath = f.appendContextPath(c.data.contextPath, c.name), c = {
                            data: g
                        }
                    }
                    return e(b, c)
                }), a.registerHelper("each", function(a, b) {
                    function c(b, c, g) {
                        d && (d.key = b, d.index = c, d.first = 0 === c, d.last = !!g, e && (d.contextPath = e + b)), m += h(a[b], {
                            data: d,
                            blockParams: f.blockParams([a[b], b], [e + b, null])
                        })
                    }
                    if (!b) throw new g("Must pass iterator to #each");
                    var d, e, h = b.fn,
                        i = b.inverse,
                        j = 0,
                        m = "";
                    if (b.data && b.ids && (e = f.appendContextPath(b.data.contextPath, b.ids[0]) + "."), l(a) && (a = a.call(this)), b.data && (d = q(b.data)), a && "object" == typeof a)
                        if (k(a))
                            for (var n = a.length; n > j; j++) c(j, j, j === a.length - 1);
                        else {
                            var o;
                            for (var p in a) a.hasOwnProperty(p) && (o && c(o, j - 1), o = p, j++);
                            o && c(o, j - 1, !0)
                        }
                    return 0 === j && (m = i(this)), m
                }), a.registerHelper("if", function(a, b) {
                    return l(a) && (a = a.call(this)), !b.hash.includeZero && !a || f.isEmpty(a) ? b.inverse(this) : b.fn(this)
                }), a.registerHelper("unless", function(b, c) {
                    return a.helpers["if"].call(this, b, {
                        fn: c.inverse,
                        inverse: c.fn,
                        hash: c.hash
                    })
                }), a.registerHelper("with", function(a, b) {
                    l(a) && (a = a.call(this));
                    var c = b.fn;
                    if (f.isEmpty(a)) return b.inverse(this);
                    if (b.data && b.ids) {
                        var d = q(b.data);
                        d.contextPath = f.appendContextPath(b.data.contextPath, b.ids[0]), b = {
                            data: d
                        }
                    }
                    return c(a, b)
                }), a.registerHelper("log", function(b, c) {
                    var d = c.data && null != c.data.level ? parseInt(c.data.level, 10) : 1;
                    a.log(d, b)
                }), a.registerHelper("lookup", function(a, b) {
                    return a && a[b]
                })
            }
            var e = {},
                f = a,
                g = b,
                h = "3.0.0";
            e.VERSION = h;
            var i = 6;
            e.COMPILER_REVISION = i;
            var j = {
                1: "<= 1.0.rc.2",
                2: "== 1.0.0-rc.3",
                3: "== 1.0.0-rc.4",
                4: "== 1.x.x",
                5: "== 2.0.0-alpha.x",
                6: ">= 2.0.0-beta.1"
            };
            e.REVISION_CHANGES = j;
            var k = f.isArray,
                l = f.isFunction,
                m = f.toString,
                n = "[object Object]";
            e.HandlebarsEnvironment = c, c.prototype = {
                constructor: c,
                logger: o,
                log: p,
                registerHelper: function(a, b) {
                    if (m.call(a) === n) {
                        if (b) throw new g("Arg not supported with multiple helpers");
                        f.extend(this.helpers, a)
                    } else this.helpers[a] = b
                },
                unregisterHelper: function(a) {
                    delete this.helpers[a]
                },
                registerPartial: function(a, b) {
                    if (m.call(a) === n) f.extend(this.partials, a);
                    else {
                        if ("undefined" == typeof b) throw new g("Attempting to register a partial as undefined");
                        this.partials[a] = b
                    }
                },
                unregisterPartial: function(a) {
                    delete this.partials[a]
                }
            };
            var o = {
                methodMap: {
                    0: "debug",
                    1: "info",
                    2: "warn",
                    3: "error"
                },
                DEBUG: 0,
                INFO: 1,
                WARN: 2,
                ERROR: 3,
                level: 1,
                log: function(a, b) {
                    if ("undefined" != typeof console && o.level <= a) {
                        var c = o.methodMap[a];
                        (console[c] || console.log).call(console, b)
                    }
                }
            };
            e.logger = o;
            var p = o.log;
            e.log = p;
            var q = function(a) {
                var b = f.extend({}, a);
                return b._parent = a, b
            };
            return e.createFrame = q, e
        }(a, b),
        d = function() {
            "use strict";

            function a(a) {
                this.string = a
            }
            var b;
            return a.prototype.toString = a.prototype.toHTML = function() {
                return "" + this.string
            }, b = a
        }(),
        e = function(a, b, c) {
            "use strict";

            function d(a) {
                var b = a && a[0] || 1,
                    c = n;
                if (b !== c) {
                    if (c > b) {
                        var d = o[c],
                            e = o[b];
                        throw new m("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + d + ") or downgrade your runtime to an older version (" + e + ").")
                    }
                    throw new m("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" + a[1] + ").")
                }
            }

            function e(a, b) {
                if (!b) throw new m("No environment passed to template");
                if (!a || !a.main) throw new m("Unknown template object: " + typeof a);
                b.VM.checkRevision(a.compiler);
                var c = function(c, d, e) {
                        e.hash && (d = l.extend({}, d, e.hash)), c = b.VM.resolvePartial.call(this, c, d, e);
                        var f = b.VM.invokePartial.call(this, c, d, e);
                        if (null == f && b.compile && (e.partials[e.name] = b.compile(c, a.compilerOptions, b), f = e.partials[e.name](d, e)), null != f) {
                            if (e.indent) {
                                for (var g = f.split("\n"), h = 0, i = g.length; i > h && (g[h] || h + 1 !== i); h++) g[h] = e.indent + g[h];
                                f = g.join("\n")
                            }
                            return f
                        }
                        throw new m("The partial " + e.name + " could not be compiled when running in runtime-only mode")
                    },
                    d = {
                        strict: function(a, b) {
                            if (!(b in a)) throw new m('"' + b + '" not defined in ' + a);
                            return a[b]
                        },
                        lookup: function(a, b) {
                            for (var c = a.length, d = 0; c > d; d++)
                                if (a[d] && null != a[d][b]) return a[d][b]
                        },
                        lambda: function(a, b) {
                            return "function" == typeof a ? a.call(b) : a
                        },
                        escapeExpression: l.escapeExpression,
                        invokePartial: c,
                        fn: function(b) {
                            return a[b]
                        },
                        programs: [],
                        program: function(a, b, c, d, e) {
                            var g = this.programs[a],
                                h = this.fn(a);
                            return b || e || d || c ? g = f(this, a, h, b, c, d, e) : g || (g = this.programs[a] = f(this, a, h)), g
                        },
                        data: function(a, b) {
                            for (; a && b--;) a = a._parent;
                            return a
                        },
                        merge: function(a, b) {
                            var c = a || b;
                            return a && b && a !== b && (c = l.extend({}, b, a)), c
                        },
                        noop: b.VM.noop,
                        compilerInfo: a.compiler
                    },
                    e = function(b, c) {
                        c = c || {};
                        var f = c.data;
                        e._setup(c), !c.partial && a.useData && (f = j(b, f));
                        var g, h = a.useBlockParams ? [] : void 0;
                        return a.useDepths && (g = c.depths ? [b].concat(c.depths) : [b]), a.main.call(d, b, d.helpers, d.partials, f, h, g)
                    };
                return e.isTop = !0, e._setup = function(c) {
                    c.partial ? (d.helpers = c.helpers, d.partials = c.partials) : (d.helpers = d.merge(c.helpers, b.helpers), a.usePartial && (d.partials = d.merge(c.partials, b.partials)))
                }, e._child = function(b, c, e, g) {
                    if (a.useBlockParams && !e) throw new m("must pass block params");
                    if (a.useDepths && !g) throw new m("must pass parent depths");
                    return f(d, b, a[b], c, 0, e, g)
                }, e
            }

            function f(a, b, c, d, e, f, g) {
                var h = function(b, e) {
                    return e = e || {}, c.call(a, b, a.helpers, a.partials, e.data || d, f && [e.blockParams].concat(f), g && [b].concat(g))
                };
                return h.program = b, h.depth = g ? g.length : 0, h.blockParams = e || 0, h
            }

            function g(a, b, c) {
                return a ? a.call || c.name || (c.name = a, a = c.partials[a]) : a = c.partials[c.name], a
            }

            function h(a, b, c) {
                if (c.partial = !0, void 0 === a) throw new m("The partial " + c.name + " could not be found");
                return a instanceof Function ? a(b, c) : void 0
            }

            function i() {
                return ""
            }

            function j(a, b) {
                return b && "root" in b || (b = b ? p(b) : {}, b.root = a), b
            }
            var k = {},
                l = a,
                m = b,
                n = c.COMPILER_REVISION,
                o = c.REVISION_CHANGES,
                p = c.createFrame;
            return k.checkRevision = d, k.template = e, k.program = f, k.resolvePartial = g, k.invokePartial = h, k.noop = i, k
        }(a, b, c),
        f = function(a, b, c, d, e) {
            "use strict";
            var f, g = a,
                h = b,
                i = c,
                j = d,
                k = e,
                l = function() {
                    var a = new g.HandlebarsEnvironment;
                    return j.extend(a, g), a.SafeString = h, a.Exception = i, a.Utils = j, a.escapeExpression = j.escapeExpression, a.VM = k, a.template = function(b) {
                        return k.template(b, a)
                    }, a
                },
                m = l();
            m.create = l;
            var n = "undefined" != typeof global ? global : window,
                o = n.Handlebars;
            return m.noConflict = function() {
                n.Handlebars === m && (n.Handlebars = o)
            }, m["default"] = m, f = m
        }(c, d, b, a, e);
    return f
}), ! function(a) {
    a.fn.scrollbox = function(b) {
        var c = {
            linear: !1,
            startDelay: 2,
            delay: 3,
            step: 5,
            speed: 32,
            switchItems: 1,
            direction: "vertical",
            distance: "auto",
            autoPlay: !0,
            onMouseOverPause: !0,
            paused: !1,
            queue: null,
            listElement: "ul",
            listItemElement: "li",
            infiniteLoop: !0,
            switchAmount: 0,
            afterForward: null,
            afterBackward: null
        };
        return b = a.extend(c, b), b.scrollOffset = "vertical" === b.direction ? "scrollTop" : "scrollLeft", b.queue && (b.queue = a("#" + b.queue)), this.each(function() {
            var c, d, e, f, g, h, i, j, k = a(this),
                l = null,
                m = null,
                n = !1,
                o = 0;
            b.onMouseOverPause && (k.bind("mouseover", function() {
                n = !0
            }), k.bind("mouseout", function() {
                n = !1
            })), c = k.children(b.listElement + ":first-child"), b.infiniteLoop === !1 && 0 === b.switchAmount && (b.switchAmount = c.children().length), g = function() {
                if (!n) {
                    var d, f, g, h, i;
                    if (d = c.children(b.listItemElement + ":first-child"), h = "auto" !== b.distance ? b.distance : "vertical" === b.direction ? d.outerHeight(!0) : d.outerWidth(!0), b.linear ? g = Math.min(k[0][b.scrollOffset] + b.step, h) : (i = Math.max(3, parseInt(.3 * (h - k[0][b.scrollOffset]), 10)), g = Math.min(k[0][b.scrollOffset] + i, h)), k[0][b.scrollOffset] = g, g >= h) {
                        for (f = 0; f < b.switchItems; f++) b.queue && b.queue.find(b.listItemElement).length > 0 ? (c.append(b.queue.find(b.listItemElement)[0]), c.children(b.listItemElement + ":first-child").remove()) : c.append(c.children(b.listItemElement + ":first-child")), ++o;
                        if (k[0][b.scrollOffset] = 0, clearInterval(l), a.isFunction(b.afterForward) && b.afterForward.call(k, {
                                switchCount: o,
                                currentFirstChild: c.children(b.listItemElement + ":first-child")
                            }), b.infiniteLoop === !1 && o >= b.switchAmount) return;
                        b.autoPlay && (m = setTimeout(e, 1e3 * b.delay))
                    }
                }
            }, h = function() {
                if (!n) {
                    var d, f, g, h, i;
                    if (0 === k[0][b.scrollOffset]) {
                        for (f = 0; f < b.switchItems; f++) c.children(b.listItemElement + ":last-child").insertBefore(c.children(b.listItemElement + ":first-child"));
                        d = c.children(b.listItemElement + ":first-child"), h = "auto" !== b.distance ? b.distance : "vertical" === b.direction ? d.height() : d.width(), k[0][b.scrollOffset] = h
                    }
                    b.linear ? g = Math.max(k[0][b.scrollOffset] - b.step, 0) : (i = Math.max(3, parseInt(.3 * k[0][b.scrollOffset], 10)), g = Math.max(k[0][b.scrollOffset] - i, 0)), k[0][b.scrollOffset] = g, 0 === g && (--o, clearInterval(l), a.isFunction(b.afterBackward) && b.afterBackward.call(k, {
                        switchCount: o,
                        currentFirstChild: c.children(b.listItemElement + ":first-child")
                    }), b.autoPlay && (m = setTimeout(e, 1e3 * b.delay)))
                }
            }, e = function() {
                clearInterval(l), l = setInterval(g, b.speed)
            }, i = function() {
                b.autoPlay = !0, n = !1, clearInterval(l), l = setInterval(g, b.speed)
            }, j = function() {
                n = !0
            }, d = function() {
                clearInterval(l), l = setInterval(h, b.speed)
            }, f = function(a) {
                b.delay = a || b.delay, clearTimeout(m), b.autoPlay && (m = setTimeout(e, 1e3 * b.delay))
            }, b.autoPlay && (m = setTimeout(e, 1e3 * b.startDelay)), k.bind("resetClock", function(a) {
                f(a)
            }), k.bind("forward", function() {
                clearTimeout(m), e()
            }), k.bind("pauseHover", function() {
                j()
            }), k.bind("forwardHover", function() {
                i()
            }), k.bind("backward", function() {
                clearTimeout(m), d()
            }), k.bind("speedUp", function(a) {
                "undefined" === a && (a = Math.max(1, parseInt(b.speed / 2, 10))), b.speed = a
            }), k.bind("speedDown", function(a) {
                "undefined" === a && (a = 2 * b.speed), b.speed = a
            }), k.bind("updateConfig", function(c) {
                b = a.extend(b, c)
            })
        })
    }
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        b && 3 === b.which || (a(e).remove(), a(f).each(function() {
            var d = c(a(this)),
                e = {
                    relatedTarget: this
                };
            d.hasClass("open") && (d.trigger(b = a.Event("hide.bs.dropdown", e)), b.isDefaultPrevented() || d.removeClass("open").trigger("hidden.bs.dropdown", e))
        }))
    }

    function c(b) {
        var c = b.attr("data-target");
        c || (c = b.attr("href"), c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, ""));
        var d = c && a(c);
        return d && d.length ? d : b.parent()
    }

    function d(b) {
        return this.each(function() {
            var c = a(this),
                d = c.data("bs.dropdown");
            d || c.data("bs.dropdown", d = new g(this)), "string" == typeof b && d[b].call(c)
        })
    }
    var e = ".dropdown-backdrop",
        f = '[data-toggle="dropdown"]',
        g = function(b) {
            a(b).on("click.bs.dropdown", this.toggle)
        };
    g.VERSION = "3.2.0", g.prototype.toggle = function(d) {
        var e = a(this);
        if (!e.is(".disabled, :disabled")) {
            var f = c(e),
                g = f.hasClass("open");
            if (b(), !g) {
                "ontouchstart" in document.documentElement && !f.closest(".navbar-nav").length && a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click", b);
                var h = {
                    relatedTarget: this
                };
                if (f.trigger(d = a.Event("show.bs.dropdown", h)), d.isDefaultPrevented()) return;
                e.trigger("focus"), f.toggleClass("open").trigger("shown.bs.dropdown", h)
            }
            return !1
        }
    }, g.prototype.keydown = function(b) {
        if (/(38|40|27)/.test(b.keyCode)) {
            var d = a(this);
            if (b.preventDefault(), b.stopPropagation(), !d.is(".disabled, :disabled")) {
                var e = c(d),
                    g = e.hasClass("open");
                if (!g || g && 27 == b.keyCode) return 27 == b.which && e.find(f).trigger("focus"), d.trigger("click");
                var h = " li:not(.divider):visible a",
                    i = e.find('[role="menu"]' + h + ', [role="listbox"]' + h);
                if (i.length) {
                    var j = i.index(i.filter(":focus"));
                    38 == b.keyCode && j > 0 && j--, 40 == b.keyCode && j < i.length - 1 && j++, ~j || (j = 0), i.eq(j).trigger("focus")
                }
            }
        }
    };
    var h = a.fn.dropdown;
    a.fn.dropdown = d, a.fn.dropdown.Constructor = g, a.fn.dropdown.noConflict = function() {
        return a.fn.dropdown = h, this
    }, a(document).on("click.bs.dropdown.data-api", b).on("click.bs.dropdown.data-api", ".dropdown form", function(a) {
        a.stopPropagation()
    }).on("click.bs.dropdown.data-api", f, g.prototype.toggle).on("keydown.bs.dropdown.data-api", f + ', [role="menu"], [role="listbox"]', g.prototype.keydown)
}(jQuery),
function() {
    "use strict";

    function a(a) {
        return a = String(a), a.charAt(0).toUpperCase() + a.slice(1)
    }

    function b(a, b, c) {
        var e = {
            6.4: "10",
            6.3: "8.1",
            6.2: "8",
            6.1: "Server 2008 R2 / 7",
            "6.0": "Server 2008 / Vista",
            5.2: "Server 2003 / XP 64-bit",
            5.1: "XP",
            5.01: "2000 SP1",
            "5.0": "2000",
            "4.0": "NT",
            "4.90": "ME"
        };
        return b && c && /^Win/i.test(a) && (e = e[/[\d.]+$/.exec(a)]) && (a = "Windows " + e), a = String(a), b && c && (a = a.replace(RegExp(b, "i"), c)), a = d(a.replace(/ ce$/i, " CE").replace(/\bhpw/i, "web").replace(/\bMacintosh\b/, "Mac OS").replace(/_PowerPC\b/i, " OS").replace(/\b(OS X) [^ \d]+/i, "$1").replace(/\bMac (OS X)\b/, "$1").replace(/\/(\d)/, " $1").replace(/_/g, ".").replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, "").replace(/\bx86\.64\b/gi, "x86_64").replace(/\b(Windows Phone) OS\b/, "$1").split(" on ")[0])
    }

    function c(a, b) {
        var c = -1,
            d = a ? a.length : 0;

        if ("number" == typeof d && d > -1 && r >= d)
            for (; ++c < d;) b(a[c], c, a);
        else e(a, b)
    }

    function d(b) {
        return b = j(b), /^(?:webOS|i(?:OS|P))/.test(b) ? b : a(b)
    }

    function e(a, b) {
        for (var c in a) v.call(a, c) && b(a[c], c, a)
    }

    function f(b) {
        return null == b ? a(b) : w.call(b).slice(8, -1)
    }

    function g(a, b) {
        var c = null != a ? typeof a[b] : "number";
        return !/^(?:boolean|number|string|undefined)$/.test(c) && ("object" == c ? !!a[b] : !0)
    }

    function h(a) {
        return String(a).replace(/([ -])(?!$)/g, "$1?")
    }

    function i(a, b) {
        var d = null;
        return c(a, function(c, e) {
            d = b(d, c, e, a)
        }), d
    }

    function j(a) {
        return String(a).replace(/^ +| +$/g, "")
    }

    function k(a) {
        function c(b) {
            return i(b, function(b, c) {
                return b || RegExp("\\b" + (c.pattern || h(c)) + "\\b", "i").exec(a) && (c.label || c)
            })
        }

        function l(b) {
            return i(b, function(b, c, d) {
                return b || (c[X] || c[/^[a-z]+(?: +[a-z]+\b)*/i.exec(X)] || RegExp("\\b" + h(d) + "(?:\\b|\\w*\\d)", "i").exec(a)) && d
            })
        }

        function o(b) {
            return i(b, function(b, c) {
                return b || RegExp("\\b" + (c.pattern || h(c)) + "\\b", "i").exec(a) && (c.label || c)
            })
        }

        function p(c) {
            return i(c, function(c, d) {
                var e = d.pattern || h(d);
                return !c && (c = RegExp("\\b" + e + "(?:/[\\d.]+|[ \\w.]*)", "i").exec(a)) && (c = b(c, e, d.label || d)), c
            })
        }

        function q(b) {
            return i(b, function(b, c) {
                var e = c.pattern || h(c);
                return !b && (b = RegExp("\\b" + e + " *\\d+[.\\w_]*", "i").exec(a) || RegExp("\\b" + e + "(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)", "i").exec(a)) && ((b = String(c.label && !RegExp(e, "i").test(c.label) ? c.label : b).split("/"))[1] && !/[\d.]+/.test(b[0]) && (b[0] += " " + b[1]), c = c.label || c, b = d(b[0].replace(RegExp(e, "i"), c).replace(RegExp("; *(?:" + c + "[_-])?", "i"), " ").replace(RegExp("(" + c + ")[-_.]?(\\w)", "i"), "$1 $2"))), b
            })
        }

        function r(b) {
            return i(b, function(b, c) {
                return b || (RegExp(c + "(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)", "i").exec(a) || 0)[1] || null
            })
        }

        function u() {
            return this.description || ""
        }
        var v = m,
            x = a && "object" == typeof a && "String" != f(a);
        x && (v = a, a = null);
        var y = v.navigator || {},
            z = y.userAgent || "";
        a || (a = z);
        var A, B, C = x || t == n,
            D = x ? !!y.likeChrome : /\bChrome\b/.test(a) && !/internal|\n/i.test(w.toString()),
            E = "Object",
            F = x ? E : "ScriptBridgingProxyObject",
            G = x ? E : "Environment",
            H = x && v.java ? "JavaPackage" : f(v.java),
            I = x ? E : "RuntimeObject",
            J = /\bJava/.test(H) && v.java,
            K = J && f(v.environment) == G,
            L = J ? "a" : "α",
            M = J ? "b" : "β",
            N = v.document || {},
            O = v.operamini || v.opera,
            P = s.test(P = x && O ? O["[[Class]]"] : f(O)) ? P : O = null,
            Q = a,
            R = [],
            S = null,
            T = a == z,
            U = T && O && "function" == typeof O.version && O.version(),
            V = c(["Trident", {
                label: "WebKit",
                pattern: "AppleWebKit"
            }, "iCab", "Presto", "NetFront", "Tasman", "KHTML", "Gecko"]),
            W = o(["Adobe AIR", "Arora", "Avant Browser", "Breach", "Camino", "Epiphany", "Fennec", "Flock", "Galeon", "GreenBrowser", "iCab", "Iceweasel", {
                label: "SRWare Iron",
                pattern: "Iron"
            }, "K-Meleon", "Konqueror", "Lunascape", "Maxthon", "Midori", "Nook Browser", "PhantomJS", "Raven", "Rekonq", "RockMelt", "SeaMonkey", {
                label: "Silk",
                pattern: "(?:Cloud9|Silk-Accelerated)"
            }, "Sleipnir", "SlimBrowser", "Sunrise", "Swiftfox", "WebPositive", "Opera Mini", {
                label: "Opera Mini",
                pattern: "OPiOS"
            }, "Opera", {
                label: "Opera",
                pattern: "OPR"
            }, "Chrome", {
                label: "Chrome Mobile",
                pattern: "(?:CriOS|CrMo)"
            }, {
                label: "Firefox",
                pattern: "(?:Firefox|Minefield)"
            }, {
                label: "IE",
                pattern: "IEMobile"
            }, {
                label: "IE",
                pattern: "MSIE"
            }, "Safari"]),
            X = q([{
                label: "BlackBerry",
                pattern: "BB10"
            }, "BlackBerry", {
                label: "Galaxy S",
                pattern: "GT-I9000"
            }, {
                label: "Galaxy S2",
                pattern: "GT-I9100"
            }, {
                label: "Galaxy S3",
                pattern: "GT-I9300"
            }, {
                label: "Galaxy S4",
                pattern: "GT-I9500"
            }, "Google TV", "Lumia", "iPad", "iPod", "iPhone", "Kindle", {
                label: "Kindle Fire",
                pattern: "(?:Cloud9|Silk-Accelerated)"
            }, "Nook", "PlayBook", "PlayStation 4", "PlayStation 3", "PlayStation Vita", "TouchPad", "Transformer", {
                label: "Wii U",
                pattern: "WiiU"
            }, "Wii", "Xbox One", {
                label: "Xbox 360",
                pattern: "Xbox"
            }, "Xoom"]),
            Y = l({
                Apple: {
                    iPad: 1,
                    iPhone: 1,
                    iPod: 1
                },
                Amazon: {
                    Kindle: 1,
                    "Kindle Fire": 1
                },
                Asus: {
                    Transformer: 1
                },
                "Barnes & Noble": {
                    Nook: 1
                },
                BlackBerry: {
                    PlayBook: 1
                },
                Google: {
                    "Google TV": 1
                },
                HP: {
                    TouchPad: 1
                },
                HTC: {},
                LG: {},
                Microsoft: {
                    Xbox: 1,
                    "Xbox One": 1
                },
                Motorola: {
                    Xoom: 1
                },
                Nintendo: {
                    "Wii U": 1,
                    Wii: 1
                },
                Nokia: {
                    Lumia: 1
                },
                Samsung: {
                    "Galaxy S": 1,
                    "Galaxy S2": 1,
                    "Galaxy S3": 1,
                    "Galaxy S4": 1
                },
                Sony: {
                    "PlayStation 4": 1,
                    "PlayStation 3": 1,
                    "PlayStation Vita": 1
                }
            }),
            Z = p(["Windows Phone ", "Android", "CentOS", "Debian", "Fedora", "FreeBSD", "Gentoo", "Haiku", "Kubuntu", "Linux Mint", "Red Hat", "SuSE", "Ubuntu", "Xubuntu", "Cygwin", "Symbian OS", "hpwOS", "webOS ", "webOS", "Tablet OS", "Linux", "Mac OS X", "Macintosh", "Mac", "Windows 98;", "Windows "]);
        if (V && (V = [V]), Y && !X && (X = q([Y])), (A = /\bGoogle TV\b/.exec(X)) && (X = A[0]), /\bSimulator\b/i.test(a) && (X = (X ? X + " " : "") + "Simulator"), "Opera Mini" == W && /\bOPiOS\b/.test(a) && R.push("running in Turbo/Uncompressed mode"), /^iP/.test(X) ? (W || (W = "Safari"), Z = "iOS" + ((A = / OS ([\d_]+)/i.exec(a)) ? " " + A[1].replace(/_/g, ".") : "")) : "Konqueror" != W || /buntu/i.test(Z) ? Y && "Google" != Y && (/Chrome/.test(W) && !/\bMobile Safari\b/i.test(a) || /\bVita\b/.test(X)) ? (W = "Android Browser", Z = /\bAndroid\b/.test(Z) ? Z : "Android") : (!W || (A = !/\bMinefield\b|\(Android;/i.test(a) && /\b(?:Firefox|Safari)\b/.exec(W))) && (W && !X && /[\/,]|^[^(]+?\)/.test(a.slice(a.indexOf(A + "/") + 8)) && (W = null), (A = X || Y || Z) && (X || Y || /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(Z)) && (W = /[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(Z) ? Z : A) + " Browser")) : Z = "Kubuntu", (A = /\((Mobile|Tablet).*?Firefox\b/i.exec(a)) && A[1] && (Z = "Firefox OS", X || (X = A[1])), U || (U = r(["(?:Cloud9|CriOS|CrMo|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|Silk(?!/[\\d.]+$))", "Version", h(W), "(?:Firefox|Minefield|NetFront)"])), "iCab" == V && parseFloat(U) > 3 ? V = ["WebKit"] : "Trident" != V && (A = /\bOpera\b/.test(W) && (/\bOPR\b/.test(a) ? "Blink" : "Presto") || /\b(?:Midori|Nook|Safari)\b/i.test(a) && "WebKit" || !V && /\bMSIE\b/i.test(a) && ("Mac OS" == Z ? "Tasman" : "Trident")) ? V = [A] : /\bPlayStation\b(?! Vita\b)/i.test(W) && "WebKit" == V && (V = ["NetFront"]), "IE" == W && (A = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(a) || 0)[1]) ? (W += " Mobile", Z = "Windows Phone " + (/\+$/.test(A) ? A : A + ".x"), R.unshift("desktop mode")) : /\bWPDesktop\b/i.test(a) ? (W = "IE Mobile", Z = "Windows Phone 8+", R.unshift("desktop mode"), U || (U = (/\brv:([\d.]+)/.exec(a) || 0)[1])) : "IE" != W && "Trident" == V && (A = /\brv:([\d.]+)/.exec(a)) ? (/\bWPDesktop\b/i.test(a) || (W && R.push("identifying as " + W + (U ? " " + U : "")), W = "IE"), U = A[1]) : "Chrome" != W && "IE" == W || !(A = /\bEdge\/([\d.]+)/.exec(a)) || (W = "IE", U = A[1], V = ["Trident"], R.unshift("platform preview")), T) {
            if (g(v, "global"))
                if (J && (A = J.lang.System, Q = A.getProperty("os.arch"), Z = Z || A.getProperty("os.name") + " " + A.getProperty("os.version")), C && g(v, "system") && (A = [v.system])[0]) {
                    Z || (Z = A[0].os || null);
                    try {
                        A[1] = v.require("ringo/engine").version, U = A[1].join("."), W = "RingoJS"
                    } catch ($) {
                        A[0].global.system == v.system && (W = "Narwhal")
                    }
                } else "object" == typeof v.process && (A = v.process) ? (W = "Node.js", Q = A.arch, Z = A.platform, U = /[\d.]+/.exec(A.version)[0]) : K && (W = "Rhino");
            else f(A = v.runtime) == F ? (W = "Adobe AIR", Z = A.flash.system.Capabilities.os) : f(A = v.phantom) == I ? (W = "PhantomJS", U = (A = A.version || null) && A.major + "." + A.minor + "." + A.patch) : "number" == typeof N.documentMode && (A = /\bTrident\/(\d+)/i.exec(a)) && (U = [U, N.documentMode], (A = +A[1] + 4) != U[1] && (R.push("IE " + U[1] + " mode"), V && (V[1] = ""), U[1] = A), U = "IE" == W ? String(U[1].toFixed(1)) : U[0]);
            Z = Z && d(Z)
        }
        U && (A = /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(U) || /(?:alpha|beta)(?: ?\d)?/i.exec(a + ";" + (T && y.appMinorVersion)) || /\bMinefield\b/i.test(a) && "a") && (S = /b/i.test(A) ? "beta" : "alpha", U = U.replace(RegExp(A + "\\+?$"), "") + ("beta" == S ? M : L) + (/\d+\+?/.exec(A) || "")), "Fennec" == W || "Firefox" == W && /\b(?:Android|Firefox OS)\b/.test(Z) ? W = "Firefox Mobile" : "Maxthon" == W && U ? U = U.replace(/\.[\d.]+/, ".x") : "Silk" == W ? (/\bMobi/i.test(a) || (Z = "Android", R.unshift("desktop mode")), /Accelerated *= *true/i.test(a) && R.unshift("accelerated")) : /\bXbox\b/i.test(X) ? (Z = null, "Xbox 360" == X && /\bIEMobile\b/.test(a) && R.unshift("mobile mode")) : !/^(?:Chrome|IE|Opera)$/.test(W) && (!W || X || /Browser|Mobi/.test(W)) || "Windows CE" != Z && !/Mobi/i.test(a) ? "IE" == W && T && null === v.external ? R.unshift("platform preview") : (/\bBlackBerry\b/.test(X) || /\bBB10\b/.test(a)) && (A = (RegExp(X.replace(/ +/g, " *") + "/([.\\d]+)", "i").exec(a) || 0)[1] || U) ? (A = [A, /BB10/.test(a)], Z = (A[1] ? (X = null, Y = "BlackBerry") : "Device Software") + " " + A[0], U = null) : this != e && "Wii" != X && (T && O || /Opera/.test(W) && /\b(?:MSIE|Firefox)\b/i.test(a) || "Firefox" == W && /\bOS X (?:\d+\.){2,}/.test(Z) || "IE" == W && (Z && !/^Win/.test(Z) && U > 5.5 || /\bWindows XP\b/.test(Z) && U > 8 || 8 == U && !/\bTrident\b/.test(a))) && !s.test(A = k.call(e, a.replace(s, "") + ";")) && A.name && (A = "ing as " + A.name + ((A = A.version) ? " " + A : ""), s.test(W) ? (/\bIE\b/.test(A) && "Mac OS" == Z && (Z = null), A = "identify" + A) : (A = "mask" + A, W = P ? d(P.replace(/([a-z])([A-Z])/g, "$1 $2")) : "Opera", /\bIE\b/.test(A) && (Z = null), T || (U = null)), V = ["Presto"], R.push(A)) : W += " Mobile", (A = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(a) || 0)[1]) && (A = [parseFloat(A.replace(/\.(\d)$/, ".0$1")), A], "Safari" == W && "+" == A[1].slice(-1) ? (W = "WebKit Nightly", S = "alpha", U = A[1].slice(0, -1)) : (U == A[1] || U == (A[2] = (/\bSafari\/([\d.]+\+?)/i.exec(a) || 0)[1])) && (U = null), A[1] = (/\bChrome\/([\d.]+)/i.exec(a) || 0)[1], 537.36 == A[0] && 537.36 == A[2] && parseFloat(A[1]) >= 28 && "IE" != W && (V = ["Blink"]), T && (D || A[1]) ? (V && (V[1] = "like Chrome"), A = A[1] || (A = A[0], 530 > A ? 1 : 532 > A ? 2 : 532.05 > A ? 3 : 533 > A ? 4 : 534.03 > A ? 5 : 534.07 > A ? 6 : 534.1 > A ? 7 : 534.13 > A ? 8 : 534.16 > A ? 9 : 534.24 > A ? 10 : 534.3 > A ? 11 : 535.01 > A ? 12 : 535.02 > A ? "13+" : 535.07 > A ? 15 : 535.11 > A ? 16 : 535.19 > A ? 17 : 536.05 > A ? 18 : 536.1 > A ? 19 : 537.01 > A ? 20 : 537.11 > A ? "21+" : 537.13 > A ? 23 : 537.18 > A ? 24 : 537.24 > A ? 25 : 537.36 > A ? 26 : "Blink" != V ? "27" : "28")) : (V && (V[1] = "like Safari"), A = A[0], A = 400 > A ? 1 : 500 > A ? 2 : 526 > A ? 3 : 533 > A ? 4 : 534 > A ? "4+" : 535 > A ? 5 : 537 > A ? 6 : 538 > A ? 7 : 601 > A ? 8 : "8"), V && (V[1] += " " + (A += "number" == typeof A ? ".x" : /[.+]/.test(A) ? "" : "+")), "Safari" == W && (!U || parseInt(U) > 45) && (U = A)), "Opera" == W && (A = /\bzbov|zvav$/.exec(Z)) ? (W += " ", R.unshift("desktop mode"), "zvav" == A ? (W += "Mini", U = null) : W += "Mobile", Z = Z.replace(RegExp(" *" + A + "$"), "")) : "Safari" == W && /\bChrome\b/.exec(V && V[1]) && (R.unshift("desktop mode"), W = "Chrome Mobile", U = null, /\bOS X\b/.test(Z) ? (Y = "Apple", Z = "iOS 4.3+") : Z = null), U && 0 == U.indexOf(A = /[\d.]+$/.exec(Z)) && a.indexOf("/" + A + "-") > -1 && (Z = j(Z.replace(A, ""))), V && !/\b(?:Avant|Nook)\b/.test(W) && (/Browser|Lunascape|Maxthon/.test(W) || /^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Sleipnir|Web)/.test(W) && V[1]) && (A = V[V.length - 1]) && R.push(A), R.length && (R = ["(" + R.join("; ") + ")"]), Y && X && X.indexOf(Y) < 0 && R.push("on " + Y), X && R.push((/^on /.test(R[R.length - 1]) ? "" : "on ") + X), Z && (A = / ([\d.+]+)$/.exec(Z), B = A && "/" == Z.charAt(Z.length - A[0].length - 1), Z = {
            architecture: 32,
            family: A && !B ? Z.replace(A[0], "") : Z,
            version: A ? A[1] : null,
            toString: function() {
                var a = this.version;
                return this.family + (a && !B ? " " + a : "") + (64 == this.architecture ? " 64-bit" : "")
            }
        }), (A = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(Q)) && !/\bi686\b/i.test(Q) && (Z && (Z.architecture = 64, Z.family = Z.family.replace(RegExp(" *" + A), "")), W && (/\bWOW64\b/i.test(a) || T && /\w(?:86|32)$/.test(y.cpuClass || y.platform) && !/\bWin64; x64\b/i.test(a)) && R.unshift("32-bit")), a || (a = null);
        var _ = {};
        return _.description = a, _.layout = V && V[0], _.manufacturer = Y, _.name = W, _.prerelease = S, _.product = X, _.ua = a, _.version = W && U, _.os = Z || {
            architecture: null,
            family: null,
            version: null,
            toString: function() {
                return "null"
            }
        }, _.parse = k, _.toString = u, _.version && R.unshift(U), _.name && R.unshift(W), Z && W && (Z != String(Z).split(" ")[0] || Z != W.split(" ")[0] && !X) && R.push(X ? "(" + Z + ")" : "on " + Z), R.length && (_.description = R.join(" ")), _
    }
    var l = {
            "function": !0,
            object: !0
        },
        m = l[typeof window] && window || this,
        n = m,
        o = l[typeof exports] && exports,
        p = l[typeof module] && module && !module.nodeType && module,
        q = o && p && "object" == typeof global && global;
    !q || q.global !== q && q.window !== q && q.self !== q || (m = q);
    var r = Math.pow(2, 53) - 1,
        s = /\bOpera/,
        t = this,
        u = Object.prototype,
        v = u.hasOwnProperty,
        w = u.toString;
    "function" == typeof define && "object" == typeof define.amd && define.amd ? define(function() {
        return k()
    }) : o && p ? e(k(), function(a, b) {
        o[b] = a
    }) : m.platform = k()
}.call(this),
    function(a) {
        var b = "-",
            c = "";
        screen.width && (width = screen.width ? screen.width : "", height = screen.height ? screen.height : "", c += "" + width + " x " + height);
        var d, e, f, g = navigator.appVersion,
            h = navigator.userAgent,
            i = navigator.appName,
            j = "" + parseFloat(navigator.appVersion),
            k = parseInt(navigator.appVersion, 10); - 1 != (e = h.indexOf("Opera")) ? (i = "Opera", j = h.substring(e + 6), -1 != (e = h.indexOf("Version")) && (j = h.substring(e + 8))) : -1 != (e = h.indexOf("MSIE")) ? (i = "Microsoft Internet Explorer", j = h.substring(e + 5)) : -1 != (e = h.indexOf("Chrome")) ? (i = "Chrome", j = h.substring(e + 7)) : -1 != (e = h.indexOf("Safari")) ? (i = "Safari", j = h.substring(e + 7), -1 != (e = h.indexOf("Version")) && (j = h.substring(e + 8))) : -1 != (e = h.indexOf("Firefox")) ? (i = "Firefox", j = h.substring(e + 8)) : -1 != h.indexOf("Trident/") ? (i = "Microsoft Internet Explorer", j = h.substring(h.indexOf("rv:") + 3)) : (d = h.lastIndexOf(" ") + 1) < (e = h.lastIndexOf("/")) && (i = h.substring(d, e), j = h.substring(e + 1), i.toLowerCase() == i.toUpperCase() && (i = navigator.appName)), -1 != (f = j.indexOf(";")) && (j = j.substring(0, f)), -1 != (f = j.indexOf(" ")) && (j = j.substring(0, f)), -1 != (f = j.indexOf(")")) && (j = j.substring(0, f)), k = parseInt("" + j, 10), isNaN(k) && (j = "" + parseFloat(navigator.appVersion), k = parseInt(navigator.appVersion, 10));
        var l = /Mobile|mini|Fennec|Android|iP(ad|od|hone)/.test(g),
            m = navigator.cookieEnabled ? !0 : !1;
        "undefined" != typeof navigator.cookieEnabled || m || (document.cookie = "testcookie", m = -1 != document.cookie.indexOf("testcookie") ? !0 : !1);
        var n = b,
            o = [{
                s: "Windows 3.11",
                r: /Win16/
            }, {
                s: "Windows 95",
                r: /(Windows 95|Win95|Windows_95)/
            }, {
                s: "Windows ME",
                r: /(Win 9x 4.90|Windows ME)/
            }, {
                s: "Windows 98",
                r: /(Windows 98|Win98)/
            }, {
                s: "Windows CE",
                r: /Windows CE/
            }, {
                s: "Windows 2000",
                r: /(Windows NT 5.0|Windows 2000)/
            }, {
                s: "Windows XP",
                r: /(Windows NT 5.1|Windows XP)/
            }, {
                s: "Windows Server 2003",
                r: /Windows NT 5.2/
            }, {
                s: "Windows Vista",
                r: /Windows NT 6.0/
            }, {
                s: "Windows 7",
                r: /(Windows 7|Windows NT 6.1)/
            }, {
                s: "Windows 8.1",
                r: /(Windows 8.1|Windows NT 6.3)/
            }, {
                s: "Windows 8",
                r: /(Windows 8|Windows NT 6.2)/
            }, {
                s: "Windows NT 4.0",
                r: /(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/
            }, {
                s: "Windows ME",
                r: /Windows ME/
            }, {
                s: "Android",
                r: /Android/
            }, {
                s: "Open BSD",
                r: /OpenBSD/
            }, {
                s: "Sun OS",
                r: /SunOS/
            }, {
                s: "Linux",
                r: /(Linux|X11)/
            }, {
                s: "iOS",
                r: /(iPhone|iPad|iPod)/
            }, {
                s: "Mac OS X",
                r: /Mac OS X/
            }, {
                s: "Mac OS",
                r: /(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/
            }, {
                s: "QNX",
                r: /QNX/
            }, {
                s: "UNIX",
                r: /UNIX/
            }, {
                s: "BeOS",
                r: /BeOS/
            }, {
                s: "OS/2",
                r: /OS\/2/
            }, {
                s: "Search Bot",
                r: /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/
            }];
        for (var p in o) {
            var q = o[p];
            if (q.r.test(h)) {
                n = q.s;
                break
            }
        }
        var r = b;
        switch (/Windows/.test(n) && (r = /Windows (.*)/.exec(n)[1], n = "Windows"), n) {
            case "Mac OS X":
                r = /Mac OS X (10[\.\_\d]+)/.exec(h)[1];
                break;
            case "Android":
                r = /Android ([\.\_\d]+)/.exec(h)[1];
                break;
            case "iOS":
                r = /OS (\d+)_(\d+)_?(\d+)?/.exec(g), r = r[1] + "." + r[2] + "." + (0 | r[3])
        }
        var s = "no check";
        if ("undefined" != typeof swfobject) {
            var t = swfobject.getFlashPlayerVersion();
            s = t.major > 0 ? t.major + "." + t.minor + " r" + t.release : b
        }
        var u = "desktop",
            v = "";
        l && (u = "mobile", v = r), a.jscd = {
            screen: c,
            browser: i,
            browserVersion: j,
            platform: u,
            mobile: l,
            os: n,
            osVersion: v,
            cookies: m,
            flashVersion: s
        }
    }(this);
var deviceName = function() {
        var a = /ipad/i.test(navigator.userAgent.toLowerCase());
        if (a) return "iPad";
        var b = /iphone/i.test(navigator.userAgent.toLowerCase());
        if (b) return "iPhone";
        var c = /android/i.test(navigator.userAgent.toLowerCase());
        return c ? "Android" : "desktop"
    },
    isMobile = function() {
        return "desktop" == deviceName() ? "no" : "yes"
    },
    s_account = "hbobhbonowother,hbobhbonowglobalprod",
    loc = window.location.hostname;
(-1 != loc.indexOf("localhost") || -1 != loc.indexOf("dev")) && (s_account = "hbobhbonowotherdev");
var s = s_gi(s_account);
s.visitorNamespace = "hbobroadband", s.trackDownloadLinks = !0, s.trackExternalLinks = !0, s.trackInlineStats = !0, s.linkDownloadFileTypes = "exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx", s.linkInternalFilters = "javascript:,hbonow.com", s.linkLeaveQueryString = !1, s.linkTrackVars = "hier1,events,eVar2,eVar7,eVar8,eVar10,eVar11,eVar12,eVar15,eVar20,eVar29,eVar30,eVar36,eVar39,eVar42,eVar45,eVar48,eVar49,eVar50,eVar52,eVar65,eVar67,eVar69,eVar70,prop2,prop7,prop8,prop10,prop11,prop13,prop20,prop29,prop30,prop36,prop39,prop42,prop45,prop48,prop49,prop50,prop65,prop69", s.linkTrackEvents = "events,event43,event44,event50,event51,event62,event63,event64,event13,event79,event82,event83", s.usePlugins = !0, s.doPlugins = s_doPlugins, s.trackingServer = "matrix.hbo.com", s.trackingServerSecure = "smatrix.hbo.com", s.getValOnce = new Function("v", "c", "e", "t", "var s=this,a=new Date,v=v?v:'',c=c?c:'s_gvo',e=e?e:0,i=t=='m'?60000:86400000,k=s.c_r(c);if(v){a.setTime(a.getTime()+e*i);s.c_w(c,v,e==0?0:a);}return v==k?'':v"), s.getNewRepeat = new Function("d", "cn", "var s=this,e=new Date(),cval,sval,ct=e.getTime();d=d?d:30;cn=cn?cn:'s_nr';e.setTime(ct+d*24*60*60*1000);cval=s.c_r(cn);if(cval.length==0){s.c_w(cn,ct+'-New',e);return'New';}sval=s.split(cval,'-');if(ct-sval[0]<30*60*1000&&sval[1]=='New'){s.c_w(cn,ct+'-New',e);return'New';}else{s.c_w(cn,ct+'-Repeat',e);return'Repeat';}"), s.split = new Function("l", "d", "var i,x=0,a=new Array;while(l){i=l.indexOf(d);i=i>-1?i:l.length;a[x++]=l.substring(0,i);l=l.substring(i+d.length);}return a"), s.getDaysSinceLastVisit = new Function("c", "var s=this,e=new Date(),es=new Date(),cval,cval_s,cval_ss,ct=e.getTime(),day=24*60*60*1000,f1,f2,f3,f4,f5;e.setTime(ct+3*365*day);es.setTime(ct+30*60*1000);f0='Cookies Not Supported';f1='First Visit';f2='More than 30 days';f3='More than 7 days';f4='Less than 7 days';f5='Less than 1 day';cval=s.c_r(c);if(cval.length==0){s.c_w(c,ct,e);s.c_w(c+'_s',f1,es);}else{var d=ct-cval;if(d>30*60*1000){if(d>30*day){s.c_w(c,ct,e);s.c_w(c+'_s',f2,es);}else if(d<30*day+1 && d>7*day){s.c_w(c,ct,e);s.c_w(c+'_s',f3,es);}else if(d<7*day+1 && d>day){s.c_w(c,ct,e);s.c_w(c+'_s',f4,es);}else if(d<day+1){s.c_w(c,ct,e);s.c_w(c+'_s',f5,es);}}else{s.c_w(c,ct,e);cval_ss=s.c_r(c+'_s');s.c_w(c+'_s',cval_ss,es);}}cval_s=s.c_r(c+'_s');if(cval_s.length==0) return f0;else if(cval_s!=f1&&cval_s!=f2&&cval_s!=f3&&cval_s!=f4&&cval_s!=f5) return '';else return cval_s;"), s_getLoadTime(), AppMeasurement.getInstance = s_gi, window.s_objectID || (window.s_objectID = 0), s_pgicq();
