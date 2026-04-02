function FindProxyForURL(url, host) {
    if (isPlainHostName(host) ||
        shExpMatch(host, "*.local") ||
        shExpMatch(host, "192.168.*") ||
        shExpMatch(host, "10.*") ||
        shExpMatch(host, "172.16.*") ||
        shExpMatch(host, "127.*") ||
        host === "localhost") {
        return "DIRECT";
    }
    var proxies = [
        "PROXY 85.1.75.2:3128",
        "PROXY 185.153.92.1:3128",
        "PROXY 193.148.59.164:3128",
        "SOCKS5 178.17.50.121:1080",
        "SOCKS5 185.180.199.90:1080"
    ];
    for (var i = proxies.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = proxies[i];
        proxies[i] = proxies[j];
        proxies[j] = temp;
    }
    
    return proxies.join("; ") + "; DIRECT";
}
