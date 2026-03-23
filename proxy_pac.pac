function FindProxyForURL(url, host) 
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
    return "PROXY 91.108.82.25:3128; PROXY 85.1.75.2:3128; PROXY 193.148.59.164:3128; DIRECT";
}
