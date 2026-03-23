function FindProxyForURL(url, host) {
    // Блок рекламы
    // Список доменов рекламных сетей и трекеров
    var adDomains = [
        "doubleclick.net",
        "googleadservices.com",
        "googlesyndication.com",
        "google-analytics.com",
        "adservice.google.com",
        "pagead2.googlesyndication.com",
        "adsystem.com",
        "adnxs.com",
        "amazon-adsystem.com",
        "criteo.com",
        "facebook.com/tr",
        "adserver.com",
        "adtech.com",
        "adzerk.net",
        "scorecardresearch.com",
        "outbrain.com",
        "taboola.com",
        "exelator.com",
        "adsrvr.org",
        "casalemedia.com",
        "mathtag.com",
        "rubiconproject.com",
        "pubmatic.com",
        "openx.net",
        "indexww.com",
        "adsafeprotected.com"
    ];
    
    // Проверяем, является ли хост рекламным
    for (var i = 0; i < adDomains.length; i++) {
        if (shExpMatch(host, "*" + adDomains[i]) || 
            shExpMatch(host, adDomains[i])) {
            return "DIRECT";
        }
    }
    
    // Блокировка рекламы по ключевым словам в URL
    var adKeywords = [
        "/banner/",
        "/ads/",
        "/ad/",
        "/advert",
        "/doubleclick",
        "/pagead/",
        "google_ads",
        "adframe"
    ];
    
    for (var i = 0; i < adKeywords.length; i++) {
        if (url.indexOf(adKeywords[i]) !== -1) {
            return "DIRECT";
        }
    }
    
    // Локальные адреса и внутренние сети
    if (isPlainHostName(host) ||
        shExpMatch(host, "*.local") ||
        shExpMatch(host, "192.168.*") ||
        shExpMatch(host, "10.*") ||
        shExpMatch(host, "172.16.*") ||
        shExpMatch(host, "127.*") ||
        host === "localhost") {
        return "DIRECT";
    }
    
    // Основной прокси
    return "PROXY 91.108.82.25:3128; PROXY 85.1.75.2:3128; DIRECT";
}
