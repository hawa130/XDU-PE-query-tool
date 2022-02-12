const NodeRSA = require('node-rsa');

const appID = "3685bc028aaf4e64ad6b5d2349d24ba8";
const appKey = "e8167ef026cbc5e456ab837d9d6d9254";
const publicKey = "-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAq4laolA7zAk7jzsqDb3Oa5pS/uCPlZfASK8Soh/NzEmry77QDZ2koyr96M5Wx+A9cxwewQMHzi8RoOfb3UcQO4UDQlMUImLuzUnfbk3TTppijSLH+PU88XQxcgYm2JTa546c7JdZSI6dBeXOJH20quuxWyzgLk9jAlt3ytYygPQ7C6o6ZSmjcMgE3xgLaHGvixEVpOjL/pdVLzXhrMqWVAnB/snMjpCqesDVTDe5c6OOmj2q5J8n+tzIXtnvrkxQSDaUp8DWF8meMwyTErmYklMXzKic2rjdYZpHh4x98Fg0Q28sp6i2ZoWiGrJDKW29mntVQQiDNhKDawb4B45zUwIDAQAB\n-----END PUBLIC KEY-----";

function calcSign(body) {
    return process(body, appID, appKey);
}

function rsa(t) {
    var e = new NodeRSA(publicKey);
    e.setOptions({ encryptionScheme: 'pkcs1' });
    var n = e.encrypt(t, "base64");
    return n
}

module.exports = {
    calcSign,
    rsa,
};

function process(t, e, n) {
    if ("string" == typeof t)
        return s(t, e, n);
    if ("object" == typeof t) {
        var i = [];
        for (var o in t)
            i.push(o + "=" + t[o]);
        return s(i.join("&"), e, n)
    }
}

function s(t, e, n) {
    var i = t + "&appId=" + e + "&appSecret=" + n,
        r = i.split("&").sort().join("&");
    return a(r)
}

function a(t) {
    var e = function (t) {
        var e, n, r, o, s, a, g, v, m,
            b = Array(),
            y = 7,
            w = 12,
            S = 17,
            T = 22,
            E = 5,
            D = 9,
            x = 14,
            B = 20,
            O = 4,
            R = 11,
            A = 16,
            V = 23,
            I = 6,
            N = 10,
            M = 15,
            P = 21;
        for (t = d(t), b = l(t), a = 1732584193, g = 4023233417, v = 2562383102, m = 271733878, e = 0; e < b.length; e += 16)
            n = a,
            r = g,
            o = v,
            s = m,
            a = h(a, g, v, m, b[e + 0], y, 3614090360),
            m = h(m, a, g, v, b[e + 1], w, 3905402710),
            v = h(v, m, a, g, b[e + 2], S, 606105819),
            g = h(g, v, m, a, b[e + 3], T, 3250441966),
            a = h(a, g, v, m, b[e + 4], y, 4118548399),
            m = h(m, a, g, v, b[e + 5], w, 1200080426),
            v = h(v, m, a, g, b[e + 6], S, 2821735955),
            g = h(g, v, m, a, b[e + 7], T, 4249261313),
            a = h(a, g, v, m, b[e + 8], y, 1770035416),
            m = h(m, a, g, v, b[e + 9], w, 2336552879),
            v = h(v, m, a, g, b[e + 10], S, 4294925233),
            g = h(g, v, m, a, b[e + 11], T, 2304563134),
            a = h(a, g, v, m, b[e + 12], y, 1804603682),
            m = h(m, a, g, v, b[e + 13], w, 4254626195),
            v = h(v, m, a, g, b[e + 14], S, 2792965006),
            g = h(g, v, m, a, b[e + 15], T, 1236535329),
            a = u(a, g, v, m, b[e + 1], E, 4129170786),
            m = u(m, a, g, v, b[e + 6], D, 3225465664),
            v = u(v, m, a, g, b[e + 11], x, 643717713),
            g = u(g, v, m, a, b[e + 0], B, 3921069994),
            a = u(a, g, v, m, b[e + 5], E, 3593408605),
            m = u(m, a, g, v, b[e + 10], D, 38016083),
            v = u(v, m, a, g, b[e + 15], x, 3634488961),
            g = u(g, v, m, a, b[e + 4], B, 3889429448),
            a = u(a, g, v, m, b[e + 9], E, 568446438),
            m = u(m, a, g, v, b[e + 14], D, 3275163606),
            v = u(v, m, a, g, b[e + 3], x, 4107603335),
            g = u(g, v, m, a, b[e + 8], B, 1163531501),
            a = u(a, g, v, m, b[e + 13], E, 2850285829),
            m = u(m, a, g, v, b[e + 2], D, 4243563512),
            v = u(v, m, a, g, b[e + 7], x, 1735328473),
            g = u(g, v, m, a, b[e + 12], B, 2368359562),
            a = c(a, g, v, m, b[e + 5], O, 4294588738),
            m = c(m, a, g, v, b[e + 8], R, 2272392833),
            v = c(v, m, a, g, b[e + 11], A, 1839030562),
            g = c(g, v, m, a, b[e + 14], V, 4259657740),
            a = c(a, g, v, m, b[e + 1], O, 2763975236),
            m = c(m, a, g, v, b[e + 4], R, 1272893353),
            v = c(v, m, a, g, b[e + 7], A, 4139469664),
            g = c(g, v, m, a, b[e + 10], V, 3200236656),
            a = c(a, g, v, m, b[e + 13], O, 681279174),
            m = c(m, a, g, v, b[e + 0], R, 3936430074),
            v = c(v, m, a, g, b[e + 3], A, 3572445317),
            g = c(g, v, m, a, b[e + 6], V, 76029189),
            a = c(a, g, v, m, b[e + 9], O, 3654602809),
            m = c(m, a, g, v, b[e + 12], R, 3873151461),
            v = c(v, m, a, g, b[e + 15], A, 530742520),
            g = c(g, v, m, a, b[e + 2], V, 3299628645),
            a = f(a, g, v, m, b[e + 0], I, 4096336452),
            m = f(m, a, g, v, b[e + 7], N, 1126891415),
            v = f(v, m, a, g, b[e + 14], M, 2878612391),
            g = f(g, v, m, a, b[e + 5], P, 4237533241),
            a = f(a, g, v, m, b[e + 12], I, 1700485571),
            m = f(m, a, g, v, b[e + 3], N, 2399980690),
            v = f(v, m, a, g, b[e + 10], M, 4293915773),
            g = f(g, v, m, a, b[e + 1], P, 2240044497),
            a = f(a, g, v, m, b[e + 8], I, 1873313359),
            m = f(m, a, g, v, b[e + 15], N, 4264355552),
            v = f(v, m, a, g, b[e + 6], M, 2734768916),
            g = f(g, v, m, a, b[e + 13], P, 1309151649),
            a = f(a, g, v, m, b[e + 4], I, 4149444226),
            m = f(m, a, g, v, b[e + 11], N, 3174756917),
            v = f(v, m, a, g, b[e + 2], M, 718787259),
            g = f(g, v, m, a, b[e + 9], P, 3951481745),
            a = i(a, n),
            g = i(g, r),
            v = i(v, o),
            m = i(m, s);
        var C = p(a) + p(g) + p(v) + p(m);
        return C.toLowerCase()
    },
        n = function (t, e) {
            return t << e | t >>> 32 - e
        },
        i = function (t, e) {
            var n, i, r, o, s;
            return (
                r = 2147483648 & t,
                o = 2147483648 & e,
                n = 1073741824 & t,
                i = 1073741824 & e,
                s = (1073741823 & t) + (1073741823 & e),
                n & i
                    ? 2147483648 ^ s ^ r ^ o
                    : n | i
                        ? 1073741824 & s
                            ? 3221225472 ^ s ^ r ^ o
                            : 1073741824 ^ s ^ r ^ o
                        : s ^ r ^ o
            )
        },
        r = function (t, e, n) {
            return t & e | ~t & n
        },
        o = function (t, e, n) {
            return t & n | e & ~n
        },
        s = function (t, e, n) {
            return t ^ e ^ n
        },
        a = function (t, e, n) {
            return e ^ (t | ~n)
        },
        h = function (t, e, o, s, a, h, u) {
            return t = i(t, i(i(r(e, o, s), a), u)), i(n(t, h), e)
        },
        u = function (t, e, r, s, a, h, u) {
            return t = i(t, i(i(o(e, r, s), a), u)), i(n(t, h), e)
        },
        c = function (t, e, r, o, a, h, u) {
            return t = i(t, i(i(s(e, r, o), a), u)), i(n(t, h), e)
        },
        f = function (t, e, r, o, s, h, u) {
            return t = i(t, i(i(a(e, r, o), s), u)), i(n(t, h), e)
        },
        l = function (t) {
            var e,
                n = t.length,
                i = n + 8,
                r = (i - i % 64) / 64,
                o = 16 * (r + 1),
                s = Array(o - 1),
                a = 0,
                h = 0;
            while (h < n)
                e = (h - h % 4) / 4,
                    a = h % 4 * 8,
                    s[e] = s[e] | t.charCodeAt(h) << a,
                    h++;
            return (
                e = (h - h % 4) / 4,
                a = h % 4 * 8,
                s[e] = s[e] | 128 << a,
                s[o - 2] = n << 3,
                s[o - 1] = n >>> 29,
                s
            )
        },
        p = function (t) {
            var e, n, i = "", r = "";
            for (n = 0; n <= 3; n++)
                e = t >>> 8 * n & 255,
                    r = "0" + e.toString(16),
                    i += r.substr(r.length - 2, 2);
            return i
        },
        d = function (t) {
            t = t.toString().replace(/\x0d\x0a/g, "\n");
            for (var e = "", n = 0; n < t.length; n++) {
                var i = t.charCodeAt(n);
                i < 128
                    ? e += String.fromCharCode(i)
                    : i > 127 && i < 2048
                        ? (e += String.fromCharCode(i >> 6 | 192), e += String.fromCharCode(63 & i | 128))
                        : (e += String.fromCharCode(i >> 12 | 224), e += String.fromCharCode(i >> 6 & 63 | 128), e += String.fromCharCode(63 & i | 128))
            }
            return e
        };
    return e(t)
}