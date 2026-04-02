function FindProxyForURL(url, host) {
    // Локальные адреса идут напрямую
    if (isPlainHostName(host) ||
        shExpMatch(host, "*.local") ||
        shExpMatch(host, "192.168.*") ||
        shExpMatch(host, "10.*") ||
        shExpMatch(host, "172.16.*") ||
        shExpMatch(host, "127.*") ||
        host === "localhost") {
        return "DIRECT";
    }
    return "PROXY 85.1.75.2:3128;" +
           "PROXY 185.153.92.1:3128;" +
           "PROXY 193.148.59.164:3128;" +
           "PROXY 91.108.82.25:3128;" +
           "PROXY 45.128.75.63:80;" +
           "PROXY 45.147.251.92:3128;" +
           "PROXY 45.147.251.108:3128;" +
           "PROXY 45.128.54.72:3128;" +
           // Затем SOCKS5
           "SOCKS5 178.17.50.121:1080;" +
           "SOCKS5 185.180.199.90:1080;" +
           "SOCKS5 193.17.95.125:443;" +
           "SOCKS5 45.140.19.123:443;" +
           "SOCKS5 45.152.22.31:1081;" +
           "SOCKS5 185.200.64.7:1080;" +
           "SOCKS5 45.136.149.64:1081;" +
           "SOCKS5 45.149.114.56:1081;" +
           "SOCKS5 5.180.30.15:1081;" +
           "SOCKS5 5.180.30.239:1081;" +
           "SOCKS5 185.201.252.213:1080;" +
           "SOCKS5 77.222.37.13:1080;" +
           "SOCKS5 93.183.104.139:443;" +
           "DIRECT";
}
