(function() {
    if (typeof DISPLAY2S == 'undefined' || !DISPLAY2S) {
        var DISPLAY2S = {};
    }
    DISPLAY2S.DEFAULT_SETTINGS = {
        linkspothost : 'https://tw.linkspot.search.yahoo.com/sales/ysmlist.php',
        search_result_page : 'https://tw.search.yahoo.com/search',
        apihost : 'https://s.yimg.com/bf/homerun/hotspot/FPL.json',
        imghost : 'https://s.yimg.com/bf/homerun/hotspot/kg/'
    }
    DISPLAY2S.PREFIX = '';
    DISPLAY2S.PROTO = {
        createJS : function(sUrl) {
            var head = document.getElementsByTagName('head')[0],
                script = document.createElement('script');
            script.src = sUrl;
            head.appendChild(script);
            script = null;
        },
        genHTML : function(aKeywords, sCat) {
            var sHTML = '', i;
            for (i = 0 , j = iCount; i < j; i++) {
                //sHTML = sHTML + '<li class="' + DISPLAY2S.PREFIX + '"><a href="' + DISPLAY2S.DEFAULT_SETTINGS.linkspothost + '?p=' + encodeURIComponent(aKeywords.shift()) + '&Partner=' + sPartner + '" target="_blank"><img src="' + DISPLAY2S.DEFAULT_SETTINGS.imghost + 'l_' + sCat + '_0' + (i+1) + '.jpg">' + '<span>' + aKeywords.shift() + '</span></a>';
                //change to ://https://tw.search.yahoo.com/search?p=關鍵字&fr=yahoo_tw_ruby_homepage_l_park_ginsu
                sHTML = sHTML + '<li class="' + DISPLAY2S.PREFIX + '"><a href="' + DISPLAY2S.DEFAULT_SETTINGS.search_result_page + '?p=' + encodeURIComponent(aKeywords.shift()) + '&fr=yahoo_tw_ruby_homepage_l_park_ginsu" target="_blank"><img src="' + DISPLAY2S.DEFAULT_SETTINGS.imghost + 'l_' + sCat + '_0' + (i+1) + '.jpg">' + '<span>' + aKeywords.shift() + '</span></a>';
            }
            var dUl = document.getElementsByTagName('ul')[0];
            dUl.innerHTML = sHTML;
        },
        shuffle : function(o){
            for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
            return o;
        },
        getYahooHotWords : function(data) {
            var aCat = [],
                aKeywords = [];
            if (!data) {
                return;
            }
            for (var i in data) {
                var a = i.toString();
                aCat.push(a);
            }
            var iIndex = Math.floor(Math.random()*aCat.length),
                sCat = aCat[iIndex],
				aKeywords = data[sCat];
            DISPLAY2S.PROTO.genHTML(aKeywords, sCat);
        },
        init : function() {
            DISPLAY2S.PROTO.createJS(DISPLAY2S.DEFAULT_SETTINGS.apihost);
        }
    }
    window.DISPLAY2S = DISPLAY2S;
    DISPLAY2S.PROTO.init();
}());
