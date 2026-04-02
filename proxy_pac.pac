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
    return "HTTPS 85.1.75.2:3128;" +
           "HTTPS 185.153.92.1:3128;" +
           "HTTPS root:1234@193.148.59.164:3128;" +
           "HTTPS 91.108.82.25:3128;" +
           "SOCKS5 root:admin@178.17.50.121:1080;" +
           "SOCKS5 root:admin@185.180.199.90:1080;" +
           "SOCKS5 user:admin@193.17.95.125:443;" +
           "SOCKS5 user:admin@45.140.19.123:443;" +
           "HTTPS 45.128.75.63:80;" +
           "SOCKS5 guest:1234@45.152.22.31:1081;" +
           "HTTPS user:password@45.147.251.92:3128;" +
           "HTTPS user:password@45.147.251.108:3128;" +
           "HTTPS proxy:proxy@45.128.54.72:3128;" +
           "SOCKS5 admin:123456@185.200.64.7:1080;" +
           "SOCKS5 user:letmein@45.136.149.64:1081;" +
           "SOCKS5 proxy:proxy@45.149.114.56:1081;" +
           "SOCKS5 proxy:1234@5.180.30.15:1081;" +
           "SOCKS5 proxy:1234@5.180.30.239:1081;" +
           "SOCKS5 admin:123456@185.201.252.213:1080;" +
           "SOCKS5 proxy:1234@77.222.37.13:1080;" +
           "SOCKS5 proxy:1234@93.183.104.139:443;" +
           "DIRECT";
}
