var D2S = D2S || {};
D2S.DEFAULT_SETTINGS = D2S.DEFAULT_SETTINGS || {
    statichost: "https://s.yimg.com/bf/homerun/hotspot/",
    total: 0
};
(function() {

    D2S.DEFAULT_SETTINGS.total = D2S.DEFAULT_SETTINGS.total ? D2S.DEFAULT_SETTINGS.total : 0;
    D2S.DEFAULT_SETTINGS.total++;
    D2S.PREFIX = "ysm-";
    D2S.MODULE_TEMPLATE = function(c, a) {
        var b = c || "1",
            d = "4";
        switch (b) {
            case "fpl":
                d = "4";
                break;
            case "fpr":
                d = "4";
                break;
            case "fpr0705":
                d = "4";
                break;
            case "fpt":
                d = "3";
                break;
            default:
                d = "4"
        }
        return ['<!DOCTYPE html>\n<html>\n<head>\n<meta charset="utf-8">', '<link rel="stylesheet" type="text/css" href="' + D2S.DEFAULT_SETTINGS.statichost
         + 'fpl/ysmHotspot_' + 'fpl' + '.css">', "</head>\n<body>", '<div class="ysm-' + 'fpl' + '">', '<span style="display: none;" class="adlabel">\u8d0a\u52a9\u5ee3\u544a</span>', '<ul class="img">', "</ul>\n</div>\n</body>\n<script>", "var iCount = " + d + ",", 'sPartner = "' + a + '";', '\x3c/script>\n<script src="' + D2S.DEFAULT_SETTINGS.statichost + 'fpl/ysmHotspot_fpl.js">\x3c/script>\n<html>'].join("\n")
    };
    D2S.util = D2S.util || {};
    var e = D2S.util;
    D2S.util.Dom = D2S.util.Dom || {
        _reClassNameCache: {},
        _getClassRegEx: function(c) {
            var a = e.Dom._reClassNameCache[c];
            a || (a = new RegExp("(?:^|\\s+)" + c + "(?:\\s+|$)"), e.Dom._reClassNameCache[c] = a);
            return a
        },
        getElementsByClassName: function(c,
            a, b, d) {
            b = b || document;
            var f = [];
            a = b.getElementsByTagName(a || "*");
            c = e.Dom._getClassRegEx(c);
            b = 0;
            for (var g = a.length; b < g; b++)
                c.test(a[b].className) && (f[f.length] = a[b], d && d.call(a[b], a[b]));
            return f
        }
    };
    D2S.PROTO = {
        getSelf: function() {
            var c = document.getElementsByTagName("script");
            return c[c.length - 1]
        },
        getUrlArgument: function(c, a) {
            c = c.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
            var b = new RegExp("[\\?&]" + c + "=([^&#]*)");
            return b.exec(a) ? b.exec(a)[1] : ""
        },
        getSlot: function() {
            return D2S.PROTO.getUrlArgument("adSlot", D2S.PROTO.getSelf().src.toString())
        },
        getPartnerId: function() {
            return D2S.PROTO.getUrlArgument("partner", D2S.PROTO.getSelf().src.toString())
        },
        template: function(c, a) {
            c.className = c.className || D2S.PREFIX;
            document.write('<iframe allowtransparency="true" frameborder="no" frameBorder="no" marginWidth="0" marginHeight="0" border="0" scrolling="no" width="' + c.width + '" height="' + c.height + '" src="about:blank" class="' + c.className + '"></iframe>');
            var b = D2S.util.Dom.getElementsByClassName(c.className, "iframe")[0],
                d = b.contentWindow;
            a && (d.document.open(), d.document.write(a), d.document.close());
            return b
        },
        init: function() {
            var c = D2S.PROTO.getPartnerId(),
                a = "300",
                b = "210",
                d = D2S.PROTO.getSlot();
            switch (d) {
                case "fpr":
                    a = "100%";
                    b = "210";
                    break;
                case "fpr0705":
                    a = "100%";
                    b = "226";
                    break;
                case "fpl":
                    a = "100%";
                    b = "100";
                    break;
                case "fpt":
                    a = "100%";
                    b = "110";
                    break;
                default:
                    a = "100%",
                    b = "100"
            }
            D2S.PROTO.template({
                className: D2S.PREFIX + "iframe-" + D2S.DEFAULT_SETTINGS.total,
                height: b,
                width: a
            }, D2S.MODULE_TEMPLATE(d, c))
        }
    }
})();
D2S.PROTO.init();
