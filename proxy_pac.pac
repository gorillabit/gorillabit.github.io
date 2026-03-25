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
    return "PROXY 85.1.75.2:3128; DIRECT";
}
