(function () {
    function a() {
        if (b)
            return c.username;
        if (12 <= d) {
            var playerUsername = htmlLoader.loadString(20);
            "" === playerUsername && (playerUsername = "Android User " + Math.floor(1E3 * Math.random()),
                htmlLoader.saveString(20, playerUsername))
        } else
            5 <= d ? (playerUsername = htmlLoader.loadString(0),
                "" === playerUsername && (playerUsername = "Player " + Math.floor(1E3 * Math.random()),
                    htmlLoader.saveString(0, playerUsername))) : playerUsername = f.g(0);
        return playerUsername
    }
    function h() {
        i = Math.floor(1 + Math.random() * (Math.pow(2, 30) - 1));
        if (b)
            i = c.id;
        else if (12 <= d) {
            var g = htmlLoader.loadNumber(20);
            -1 === g ? htmlLoader.saveNumber(20, i) : i = g
        } else
            5 <= d ? (g = htmlLoader.loadNumber(2),
                2 === g ? htmlLoader.saveNumber(2, i + 3) : i = g - 3) : i = f.g(1)
    }
    function j() {
        var g = 0;
        if (b)
            g = c.password;
        else if (12 <= d)
            g = htmlLoader.loadString(22);
        else {
            if (5 <= d)
                return g;
            g = f.g(9)
        }
        var k = Math.floor(Math.pow(2, 48));
        g = Math.floor(parseInt(m.n(g)));
        if (0 < g && g < k)
            return g;
        g = Math.floor(1 + (k - 1) * Math.random());
        return o(g) ? g : 0
    }
    function p() {
        if (b)
            b_IsUISmall = c.zoom || r < s;
        else if (12 <= d) {
            var g = htmlLoader.loadNumber(21);
            -1 === g ? (b_IsUISmall = 100 >= htmlLoader.getNumber(0) || r < s,
                htmlLoader.saveNumber(21, b_IsUISmall ? 1 : 0)) : b_IsUISmall = 1 === g || r < s
        } else
            5 <= d ? (g = htmlLoader.loadNumber(1),
                2 === g ? (b_IsUISmall = true,
                    htmlLoader.saveNumber(1, b_IsUISmall ? 1 : 0)) : b_IsUISmall = 1 === g) : b_IsUISmall = 0 === f.g(4) || r < s
    }
    function u() {
        return b ? c.emojis : 5 <= d ? htmlLoader.loadString(1) : f.g(7)
    }
    function v() {
        return b ? c.colors : 12 <= d ? htmlLoader.loadString(21) : 5 <= d ? htmlLoader.loadString(2) : f.g(8)
    }
    function w(g) {
        if (b)
            window.webkit.messageHandlers.iosCommandA.postMessage("username " + g);
        else if (12 <= d)
            htmlLoader.saveString(20, g),
                htmlLoader.setState(10);
        else if (5 <= d)
            htmlLoader.saveString(0, g);
        else {
            if (3 > g.length || 0 <= g.indexOf(";"))
                g = "Player 666";
            f.x(0, g);
            f.y()
        }
    }
    function o(g) {
        g = m.z(g.toString());
        return b ? (c.password = g,
            window.webkit.messageHandlers.iosCommandA.postMessage("password " + g),
            true) : 12 <= d ? (htmlLoader.saveString(22, g),
                true) : 5 <= d ? false : 2 === f.a0() ? (f.x(9, g),
                    f.y(),
                    true) : false
    }
    function a1(g, k) {
        b ? (window.webkit.messageHandlers.iosCommandA.postMessage("zoom " + (g ? 1 : 0)),
            window.webkit.messageHandlers.iosCommandA.postMessage("sound " + (k ? 1 : 0))) : 12 <= d ? (htmlLoader.saveNumber(22, k ? 1 : 0),
                htmlLoader.saveNumber(21, g ? 1 : 0)) : 5 <= d ? (htmlLoader.saveNumber(1, g ? 1 : 0),
                    htmlLoader.saveNumber(11, k ? 1 : 0)) : (f.x(2, k ? 1 : 0),
                        f.x(4, g ? 0 : 1),
                        f.y())
    }
    function a3() {
        for (g = "", k = 0, void 0; k < a5.a6; k += 2) {
            var g;
            var k;
            g += a5.a7[k] || a5.a7[k + 1] ? a5.a7[k] && !a5.a7[k + 1] ? "1" : !a5.a7[k] && a5.a7[k + 1] ? "2" : "3" : "0";
        }
        b ? window.webkit.messageHandlers.iosCommandA.postMessage("emojis " + g) : 5 <= d ? htmlLoader.saveString(1, g) : (f.x(7, g),
            f.y())
    }
    function a8(g) {
        if (b)
            window.webkit.messageHandlers.iosCommandA.postMessage("colors " + g);
        else {
            if (12 <= d)
                htmlLoader.saveString(21, g);
            else if (5 <= d) {
                htmlLoader.saveString(2, g);
                return
            }
            f.x(8, g);
            f.y()
        }
    }
    function a9(g) {
        b || 5 <= d && htmlLoader.setState(g)
    }
    function aB() {
        b ? window.webkit.messageHandlers.iosCommandA.postMessage("show ad 1800000") : 12 <= d && htmlLoader.presentAd(18E5)
    }
    function aC() {
        b ? location.reload() : 7 <= d ? htmlLoader.setState(5) : location.reload()
    }
    var aD;
    var aE;
    var aF;
    var aG;
    var aH;
    var aI;
    var aJ;
    var aK;
    var aL;
    var aM;
    var aN;
    var aO;
    var aP;
    function aQ() {
        aI = 0;
        aJ = 2048;
        aK = new Uint32Array(4 * aJ);
        aL = 0;
        aM = new Uint32Array(aJ);
        aN = new Int32Array(4);
        aN[0] = -4 * aR;
        aN[1] = 4;
        aN[2] = -aN[0];
        aN[3] = -aN[1];
        aO = new Uint8Array(aR * aS)
    }
    function aT(g) {
        aE = g;
        aP = false;
        aU();
        aV();
        for (g = aW.aX(aE) - 1; 0 <= g; g--)
            0 === aW.aY(aE, g) && (aD = g,
                aZ());
        aP && aa()
    }
    function aa() {
        ab();
        ac()
    }
    function aZ() {
        aH = aW.ad(aE, aD);
        aF = aW.ae(aE, aD);
        af();
        0 === aI ? ag() : (ah(),
            ai() ? aj() : ag())
    }
    function ai() {
        aG = ak(aF, aI);
        return aG > al
    }
    function ah() {
        var g;
        for (g = aI - 1; 0 <= g; g--)
            aO[ak(aK[g], 4)] = 0
    }
    function ag() {
        1 === aW.aX(aE) && am.an(aE);
        if (aE !== localPlayerID)
            TroopBalance[aE] += aF,
                aq.ar(aE);
        else {
            var g = TroopBalance[aE];
            TroopBalance[aE] += aF;
            aq.ar(aE);
            as.at[13] -= TroopBalance[aE] - g
        }
        aW.au(aE, aD)
    }
    function aU() {
        var g = aw[aE].length;
        g = g > aJ ? aJ : g;
        aL = 0;
        for (--g; 0 <= g; g--)
            aM[aL++] = aw[aE][g]
    }
    function aV() {
        var g;
        for (g = aw[aE].length - 1; 0 <= g; g--)
            ax.ay(aw[aE][g]) && ax.az(aw[aE][g], aE);
        aw[aE] = []
    }
    function af() {
        aI = 0;
        aH === b0 ? b1() : b2()
    }
    function b2() {
        var g;
        var k;
        for (g = 3; 0 <= g; g--)
            for (k = aL - 1; 0 <= k; k--) {
                var x = aM[k] + aN[g];
                var t = ak(x, 4);
                0 === aO[t] && ax.b6(x) && ax.b7(x) === aH && (aO[t] = 1,
                    aK[aI++] = x)
            }
    }
    function b1() {
        var g;
        var k;
        for (g = 3; 0 <= g; g--)
            for (k = aL - 1; 0 <= k; k--) {
                var x = aM[k] + aN[g];
                var t = ak(x, 4);
                0 === aO[t] && ax.b8(x) && (aO[t] = 1,
                    aK[aI++] = x)
            }
    }
    function aj() {
        b9() ? (bA(),
            aH !== b0 && bB()) : ag()
    }
    function bB() {
        bC();
        bD(bE[aH]);
        bD(bF[aH]);
        bG(aw[aH]);
        bH(bF[aH]);
        bH(bI[aH]);
        bJ();
        bK()
    }
    function bA() {
        aP = true;
        aW.bL(aE, aD, aF);
        landSizeArray[aE] += aI;
        bN();
        bO()
    }
    function b9() {
        return aH === b0 ? bP() : bQ()
    }
    function bQ() {
        var g = aI * al;
        var k = bT();
        var x = bV();
        k = g + 2 * k + x;
        var t = aG * aI;
        if (t > k)
            return aF -= k,
                bY(k - g, x),
                true;
        aF -= t;
        bY(t - g, x);
        return false
    }
    function bY(g, k) {
        if (0 < k)
            if (g >= k)
                aW.bZ(aH, aE, 0),
                    g -= k;
            else {
                aW.bZ(aH, aE, k - g);
                return
            }
        g = ak(g, 2);
        TroopBalance[aH] = TroopBalance[aH] >= g ? TroopBalance[aH] - g : 0
    }
    function bV() {
        return aW.ba(aH, aE)
    }
    function bT() {
        return ak(aI * TroopBalance[aH], 1 + bb() * bc())
    }
    function bb() {
        return Math.floor(2 + bd(ak(landSizeArray[aH], 100), 8))
    }
    function bc() {
        return bE[aH].length + ak(bF[aH].length + bI[aH].length, 50)
    }
    function bP() {
        aF -= aI * al;
        return true
    }
    function bO() {
        for (var g = aI - 1; 0 <= g; g--)
            aw[aE].push(aK[g]),
                bE[aE].push(aK[g]),
                ax.az(aK[g], aE)
    }
    function be() {
        var g = 1;
        var k = [null, null];
        this.bh = function () {
            g = .72 * (b_IsUISmall ? .0011 : .001) * bi;
            for (var x = 1; 0 <= x; x--)
                k[x] && this.bj(x, k[x].l)
        }
            ;
        this.bj = function (x, t) {
            k[x] = {
                l: t,
                font: bl + 10 + bm
            };
            this.bn(x)
        }
            ;
        this.bn = function (x) {
            if (bo.bp() && k[x]) {
                var t = k[x].l;
                var n = Math.floor(.15 * g * bo.br(13).height);
                var l = bl + n + bm;
                var z = bu.measureText(t, l);
                var y = .8 * g * bo.br(13).width;
                z > y && (n = Math.floor(n * y / z),
                    l = bl + n + bm);
                k[x] = {
                    l: t,
                    font: l
                };
                bw.bx = true
            }
        }
            ;
        this.by = function () {
            return Math.floor(g * bo.br(13).height)
        }
            ;
        this.bz = function (x, t) {
            return !bo.bp() || x < c2 || t < c3 - c4.bt - g * bo.br(13).height - 2 * c2 || t > c3 - c4.bt - 2 * c2 ? false : x < c2 + g * bo.br(13).width ? (c5.c6(0),
                true) : x < 2 * c2 + g * bo.br(13).width ? false : x < 2 * c2 + 2 * g * bo.br(13).width ? (c5.c6(1),
                    true) : false
        }
            ;
        this.c7 = function () {
            return Math.floor(c3 - c4.bt - g * bo.br(13).height - 2 * c2)
        }
            ;
        this.c8 = function () {
            if (bo.bp()) {
                c9.imageSmoothingEnabled = true;
                c9.setTransform(g, 0, 0, g, c2, this.c7());
                c9.drawImage(bo.br(14), 0, 0);
                c9.setTransform(g, 0, 0, g, 2 * c2 + g * bo.br(13).width, this.c7());
                c9.drawImage(bo.br(13), 0, 0);
                for (var x = 1; 0 <= x; x--)
                    k[x] && (c9.setTransform(1, 0, 0, 1, (1 + x) * c2 + x * g * bo.br(13).width, this.c7()),
                        c9.font = k[x].font,
                        c9.textBaseline = cA,
                        c9.textAlign = cB,
                        c9.fillStyle = colorWhite,
                        c9.fillText(k[x].l, .5 * g * bo.br(13).width, .86 * g * bo.br(13).height));
                c9.setTransform(1, 0, 0, 1, 0, 0)
            }
        }
    }
    function cD(g, k, x, t) {
        var n = ak(3 * TroopBalance[g], 256);
        t -= t >= ak(TroopBalance[g], 2) ? n : 0;
        cH(x, g);
        aW.cI(g, t, k);
        TroopBalance[g] -= t + n;
        am.cJ(g, false)
    }
    function cK(g, k) {
        var x;
        var t;
        for (x = bE[g].length - 1; 0 <= x; x--)
            if (ax.cM(bE[g][x]))
                for (t = 3; 0 <= t; t--)
                    if (ax.b6(bE[g][x] + aN[t]) && ax.b7(bE[g][x] + aN[t]) === k) {
                        aw[g].push(bE[g][x]);
                        break
                    }
    }
    function cH(g, k) {
        for (var x = aw[k].length - 1; x >= g; x--)
            ax.cO(aw[k][x], k)
    }
    function cP(g) {
        for (x = bE[g].length - 1, void 0; 0 <= x; x--) {
            var k;
            var x;
            if (ax.cM(bE[g][x]))
                for (k = 3; 0 <= k; k--)
                    if (ax.b8(bE[g][x] + aN[k])) {
                        aw[g].push(bE[g][x]);
                        break
                    }
        }
    }
    function cQ(g, k) {
        var x;
        var t;
        var n = bE[g].length;
        var l = 256 <= n ? 12 : 32 <= n ? 6 : 1;
        n = n - 1 - cW.cX(l);
        cY = 0;
        a: for (; 0 <= n; n -= l)
            for (t = 3; 0 <= t; t--) {
                var z = ax.b8(bE[g][n] + aN[t]) ? b0 : ax.b7(bE[g][n] + aN[t]);
                if (z === b0 || ax.b6(bE[g][n] + aN[t]) && z !== g && (k || cZ(g, z))) {
                    for (x = cY - 1; 0 <= x; x--)
                        if (ca[x] === z)
                            continue a;
                    ca[cY] = z;
                    if (++cY >= cb)
                        return true
                }
            }
        return 0 < cY
    }
    function cc(g, k) {
        var x;
        var t;
        cY = 0;
        for (x = bE[g].length - 1; 0 <= x; x--)
            for (t = 3; 0 <= t; t--) {
                var n = ax.b8(bE[g][x] + aN[t]) ? b0 : ax.b7(bE[g][x] + aN[t]);
                if (n === b0 || ax.b6(bE[g][x] + aN[t]) && n !== g && (k || cZ(g, n))) {
                    ca[cY++] = n;
                    return
                }
            }
    }
    function cd() {
        var g;
        for (g = cY - 1; 0 <= g; g--)
            if (ca[g] === b0) {
                for (cY--; g < cY; g++)
                    ca[g] = ca[g + 1];
                return true
            }
        return false
    }
    function cf(g) {
        var k;
        var x;
        for (k = cY - 1; 0 <= k; k--)
            if (aW.cg(g, ca[k]))
                for (cY--,
                    x = k; x < cY; x++)
                    ca[x] = ca[x + 1];
        return 0 === cY
    }
    function ch() {
        var g;
        for (g = cY - 1; 0 <= g; g--)
            if (ca[g] >= ci)
                return true;
        return false
    }
    function cj() {
        var g;
        var k;
        for (g = cY - 1; 0 <= g; g--)
            if (ca[g] < ci)
                for (cY--,
                    k = g; k < cY; k++)
                    ca[k] = ca[k + 1];
        return 0 < cY
    }
    function ck(g) {
        var k;
        var x = ca[0];
        var t = TroopBalance[x] + aW.ba(x, g);
        for (k = cY - 1; 1 <= k; k--) {
            var n = TroopBalance[ca[k]] + aW.ba(ca[k], g);
            n < t && (x = ca[k],
                t = n)
        }
        return x
    }
    function cn(g) {
        var k = ca[0];
        if (1 === cY)
            return k;
        var x = ak(cr[g] + cs[g], 2);
        var t = ak(cu[g] + cv[g], 2);
        var n = Square(x - ak(cr[k] + cs[k], 2)) + Square(t - ak(cu[k] + cv[k], 2));
        for (g = cY - 1; 1 <= g; g--) {
            var l = Square(x - ak(cr[ca[g]] + cs[ca[g]], 2)) + Square(t - ak(cu[ca[g]] + cv[ca[g]], 2));
            l < n && (n = l,
                k = ca[g])
        }
        return k
    }
    var cb;
    var cY;
    var ca;
    var cy;
    function cz() {
        cb = 8;
        cY = 0;
        ca = new Uint16Array(cb)
    }
    function d0() {
        cy = d1 ? new Uint8Array(b0) : null
    }
    function d2(g, k) {
        d1 && (cy[g] = 0);
        if (aW.d4(g) && !(60 > k))
            if (0 === bE[g].length)
                d5.d6(g, d7.cF[g - ci]) || (d7.d8(g - ci, 200),
                    d9(g, k, d7.cF[g - ci], aq.dA(g)));
            else if (!(0 < bF[g].length && cW.random() < cW.value(bF[g].length > bE[g].length ? 7 : 3) && d5.d6(g, d7.cF[g - ci]))) {
                var x = aq.dA(g);
                TroopBalance[g] > x && k < TroopBalance[g] - x && (k = TroopBalance[g] - x);
                d1 ? dB(g, k, d7.cF[g - ci], x) : dC(g, k, d7.cF[g - ci])
            }
    }
    function dB(g, k, x, t) {
        cQ(g, false) || cc(g, false) ? (cy[g] = 1,
            cf(g) || (cd() ? (dE(g, k),
                dF(g, b0, x)) : (cW.dG(d7.dH[x]) ? t = ck(g) : (ch() && cW.dG(d7.dJ[x]) && cj(),
                    t = cn(g)),
                    dI(g, k, t),
                    dF(g, t, x)))) : 0 < bF[g].length && cW.random() < cW.value(60) && d5.d6(g, x) || (d7.d8(g - ci, 200),
                        d9(g, k, x, t))
    }
    function dK(g, k) {
        if (cQ(g, false) || cc(g, false))
            if (cy[g] = 1,
                cd())
                dE(g, k);
            else {
                var x = cn(g);
                dI(g, k, x)
            }
        else
            d9(g, k, 0, 0)
    }
    function dF(g, k, x) {
        3 <= x && 2142 < bw.dL() && (k === b0 || TroopBalance[k] < ak(TroopBalance[g], 20)) && d7.d8(g - ci, 25)
    }
    function d9(g, k, x, t) {
        if (0 !== dN.dO[g] && !(5 === x && TroopBalance[g] < t || 4 === x && TroopBalance[g] < ak(t, 2)))
            for (x = cW.cX(dP),
                t = 0; t < dP; t++) {
                var n = dQ[(t + x) % dP];
                if (dN.dO[n] === dN.dO[g] && 1 === cy[n]) {
                    dR(g, n, k);
                    n < ci && cW.random() < cW.value(10) && (cy[n] = 0);
                    break
                }
            }
    }
    function dC(g, k, x) {
        !cQ(g, true) && !cc(g, true) || cf(g) || (cd() ? dE(g, k) : cW.dG(d7.dH[x]) ? dI(g, k, ck(g)) : (ch() && cW.dG(d7.dJ[x]) && cj(),
            dI(g, k, cn(g))))
    }
    function dS(g, k) {
        if (cQ(g, true) || cc(g, true))
            cd() ? dE(g, k) : dI(g, k, cn(g))
    }
    function dI(g, k, x) {
        if (ak(TroopBalance[g], 8) > TroopBalance[x]) {
            var t = ak(11 * TroopBalance[x], 5);
            k = k > t ? k : t
        }
        t = aw[g].length;
        cK(g, x);
        cD(g, x, t, k)
    }
    function dE(g, k) {
        var x = b0;
        var t = aw[g].length;
        cP(g);
        return aw[g].length !== t ? (cD(g, x, t, k),
            true) : false
    }
    var dU = [60, 74, 112, 200, 256, 512];
    function dV() {
        var g;
        var k;
        var x;
        var t;
        var n;
        var l;
        this.BotDifficultiesString = "Very Easy;Easy;Normal;Hard;Harder;Very Hard".split(";");
        this.dd = [97, 95, 93, 90, 87, 84];
        this.dJ = [98, 95, 90, 40, 20, 0];
        this.de = [85, 70, 65, 30, 7, 3];
        this.dH = [0, 0, 0, 0, 50, 90];
        this.bh = function () {
            var z;
            g = new Uint8Array(dg);
            k = new Uint16Array(dg);
            x = new Uint16Array(dg);
            t = new Uint8Array(dg);
            this.cF = new Uint8Array(dg);
            n = new Uint16Array(dg);
            l = new Uint16Array(dg);
            if (9 === gameMode)
                this.di();
            else if (isSingleplayer)
                if (d1)
                    for (z = dg - 1; 0 <= z; z--)
                        this.cF[z] = dk.dl[dN.dO[z + ci] - 1].b5;
                else
                    for (z = dg - 1; 0 <= z; z--)
                        this.cF[z] = dk.dl[0].b5;
            else {
                var y = 8 === gameMode ? 1 : 0;
                for (z = dg - 1; 0 <= z; z--)
                    this.cF[z] = y
            }
            for (z = dg - 1; 0 <= z; z--)
                2 >= this.cF[z] ? (t[z] = 5,
                    n[z] = l[z] = 1040,
                    0 === this.cF[z] ? (k[z] = 1E3,
                        x[z] = 1E3) : 1 === this.cF[z] ? (k[z] = 1E3,
                            x[z] = 920,
                            n[z] = l[z] = 1100) : (k[z] = 1E3,
                                x[z] = 870)) : 4 >= this.cF[z] ? (t[z] = 1 + cW.cX(20),
                                    l[z] = 250 + cW.cX(1501),
                                    n[z] = 500 + cW.cX(501),
                                    3 === this.cF[z] ? (k[z] = 600 + cW.cX(101),
                                        x[z] = 300 + cW.cX(401)) : (k[z] = 300 + cW.cX(201),
                                            x[z] = 100 + cW.cX(201))) : (n[z] = 1E3,
                                                l[z] = 1E3,
                                                t[z] = 35 + cW.cX(16),
                                                k[z] = 400 + cW.cX(101),
                                                x[z] = 50 + cW.cX(101)),
                    g[z] = 1 + ak(n[z] * cW.random(), 10 * cW.value(100))
        }
            ;
        this.di = function () {
            var z;
            var y;
            var A = dp.dq;
            for (z = A - 1; 0 <= z; z--)
                this.cF[z] = 5;
            for (y = 0; 6 > y; y++)
                if (0 < dp.dr[y]) {
                    for (z = A + dp.dr[y] - 1; z >= A; z--)
                        this.cF[z] = y;
                    A += dp.dr[y]
                }
        }
            ;
        this.d8 = function (z, y) {
            0 <= z && (g[z] = y)
        }
            ;
        this.d6 = function (z) {
            if (0 === --g[z]) {
                n[z] !== l[z] && (n[z] += n[z] < l[z] ? 3 : -3);
                k[z] !== x[z] && (k[z] += k[z] < x[z] ? t[z] : -t[z],
                    k[z] = Math.abs(k[z] - x[z]) <= t[z] ? x[z] : k[z]);
                g[z] = ak(n[z], 10);
                var y = z + ci;
                d2(y, ak(k[z] * TroopBalance[y], 1E3))
            }
        }
    }
    function dv() {
        dw.d6();
        dx.d6();
        dy.dz();
        low_level_websocket.d6()
    }
    function e1() {
        aq.d6();
        e2.d6();
        e3.d6();
        e4.d6();
        e5.d6();
        e6.d6();
        am.d6();
        e7.d6();
        e8();
        e9.d6();
        dp.d6();
        dx.d6();
        dy.d6();
        eA.d6();
        eB.d6();
        eC.d6();
        dw.d6();
        eD.d6();
        eE.d6();
        as.d6();
        eF.d6();
        low_level_websocket.d6()
    }
    function eG() {
        eH.d6();
        eI.d6();
        bu.d6();
        eJ.d6();
        eK.eL()
    }
    function eM() {
        e9.eN(false);
        eC.eN();
        dy.eN(false);
        eB.eN();
        eD.eN();
        eE.eN();
        dx.eN();
        eF.bn()
    }
    function eO() {
        dx.eN() && (bw.bx = true);
        low_level_websocket.d6()
    }
    function eP() {
        function g(A) {
            var C;
            for (C = t - 1; 0 <= C; C--)
                0 === l[n[C]] && landSizeArray[n[C]] >= A && aT(n[C])
        }
        function k(A) {
            l[A] = 10 === l[A] ? x : 1E3 > landSizeArray[A] ? 3 : 1E4 > landSizeArray[A] ? 2 : 6E4 > landSizeArray[A] ? 1 : 0
        }
        var x;
        var t;
        var n;
        var l;
        var z;
        var y;
        this.bh = function () {
            z = y = 0;
            x = 6;
            t = 0;
            n = new Uint16Array(b0);
            l = new Uint8Array(b0)
        }
            ;
        this.d6 = function () {
            var A;
            z = as.at[13];
            y = TroopBalance[localPlayerID];
            for (A = t - 1; 0 <= A; A--)
                10 === l[n[A]] ? k(n[A]) : 0 === l[n[A]]-- && (k(n[A]),
                    aT(n[A]));
            16E4 <= landSizeArray[eY[0]] && (g(16E4),
                3E5 <= landSizeArray[eY[0]] && g(3E5));
            landSizeArray[localPlayerID] > as.at[7] && (as.at[7] = landSizeArray[localPlayerID]);
            as.at[14] += y - TroopBalance[localPlayerID] + z - as.at[13]
        }
            ;
        this.an = function (A) {
            var C;
            for (C = t - 1; 0 <= C; C--)
                if (A === n[C]) {
                    t--;
                    for (A = C; A < t; A++)
                        n[A] = n[A + 1];
                    break
                }
        }
            ;
        this.cJ = function (A, C) {
            var B;
            for (B = t - 1; 0 <= B; B--)
                if (A === n[B])
                    return;
            n[t++] = A;
            l[A] = C ? 2 : 10
        }
    }
    function ed() {
        function g() {
            t = 3;
            a: {
                for (var y = 40; 1 <= y; y--) {
                    n = cs[z] + ak(cW.random() * (cr[z] - cs[z] + 1), cW.value(100));
                    l = cv[z] + ak(cW.random() * (cu[z] - cv[z] + 1), cW.value(100));
                    var A = k(ax.en(n, l));
                    if (1 !== A)
                        break a
                }
                A = 1
            }
            if (0 === A)
                return false;
            if (2 === A)
                return true;
            A = x(1, 1);
            return 0 === A ? false : 2 === A ? true : 2 === x(54, 4)
        }
        function k(y) {
            if (ax.ay(y) && (ax.b8(y) || ax.b7(y) !== z && cZ(z, ax.b7(y)))) {
                if (el.cg(z, y))
                    return 2;
                if (0 === t--)
                    return 0
            }
            return 1
        }
        function x(y, A) {
            for (D = y, void 0; D < y + 50 * A; D += A) {
                var C;
                var B;
                var F;
                var E;
                var J;
                var G;
                var H;
                var D;
                if (C = cs[z] - D,
                    C = 1 > C ? 1 : C,
                    B = cv[z] - D,
                    B = 1 > B ? 1 : B,
                    F = cr[z] + D,
                    F = F >= aR - 1 ? aR - 2 : F,
                    E = cu[z] + D,
                    E = E >= aS - 1 ? aS - 2 : E,
                    H = ak(2 * cW.random() * (F - C + E - B), cW.value(100)),
                    J = F - C,
                    G = E - B,
                    H <= J ? (n = C + H,
                        l = B) : H <= J + G ? (n = F,
                            l = B + H - J) : H <= 2 * J + G ? (n = C + H - J - G,
                                l = E) : (n = C,
                                    l = B + H - 2 * J - G),
                    C = k(ax.en(n, l)),
                    1 !== C)
                    return C;
            }
            return 1
        }
        var t;
        var n;
        var l;
        var z;
        this.d6 = function (y, A) {
            z = y;
            if (0 === bF[z].length)
                return false;
            if (g()) {
                var C = ak(d7.de[A] * TroopBalance[z], 100);
                100 > C && 100 <= TroopBalance[z] && (C = 100);
                if (100 <= C)
                    return ek(z, el.em(), ax.en(n, l), C)
            }
            return false
        }
    }
    function ey() {
        var g;
        var k;
        this.bh = function () {
            g = dg;
            k = new Uint16Array(dg);
            for (var x = dg - 1; 0 <= x; x--)
                k[x] = x
        }
            ;
        this.d6 = function () {
            for (var x = g - 1; 0 <= x; x--)
                if (0 === f1[k[x] + ci]) {
                    var t = x;
                    for (g--; t < g; t++)
                        k[t] = k[t + 1]
                } else
                    d7.d6(k[x])
        }
    }
    function f3() {
        function g(y, A, C, B, F, E) {
            0 < C && 1E3 >= C && (k.push(y),
                x.push(A),
                t.push(C),
                n.push(B),
                l.push(F),
                z.push(E))
        }
        var k;
        var x;
        var t;
        var n;
        var l;
        var z;
        this.bh = function () {
            k = [];
            x = [];
            t = [];
            n = [];
            l = [];
            z = []
        }
            ;
        this.d6 = function () {
            var y;
            var A = k.length;
            for (y = 0; y < A; y++)
                if (0 === x[y])
                    f7(k[y], n[y], t[y]);
                else if (1 === x[y])
                    this.f8(k[y], t[y], l[y], z[y]);
                else if (2 === x[y])
                    this.f9(k[y], n[y]);
                else if (6 === x[y]) {
                    var C = k[y];
                    0 !== f1[C] && eE.fI(C, 1 === n[y])
                } else
                    7 === x[y] && this.fB(k[y], n[y]);
            0 < A && this.bh()
        }
            ;
        this.f8 = function (y, A, C, B) {
            0 !== f1[y] && el.cg(y, ax.en(C, B)) && ek(y, el.em(), ax.en(C, B), ak(A * TroopBalance[y], 1E3)) && y === localPlayerID && (as.at[0] += A,
                as.at[1]++,
                as.at[2]++)
        }
            ;
        this.f9 = function (y, A) {
            if (aW.cg(y, A)) {
                var C = aW.ba(y, A);
                aW.bZ(y, A, 0);
                if (y !== localPlayerID)
                    TroopBalance[y] += C,
                        aq.ar(y);
                else {
                    var B = TroopBalance[y];
                    TroopBalance[y] += C;
                    aq.ar(y);
                    as.at[13] -= TroopBalance[y] - B
                }
            }
        }
            ;
        this.fB = function (y, A) {
            var C = aW.fG(y, A);
            if (-1 !== C) {
                var B = aW.ae(y, C);
                aW.bL(y, C, 0);
                TroopBalance[y] += B;
                aq.ar(y)
            }
        }
            ;
        this.fJ = function (y, A, C) {
            1 === fK && g(y, 0, A, C, 0, 0)
        }
            ;
        this.fM = function (y, A, C, B) {
            1 === fK && (fN ? fO.cI(y, C, B) : g(y, 1, A, 0, C, B))
        }
            ;
        this.fP = function (y, A) {
            1 === fK && g(y, 2, 1, A, 0, 0)
        }
            ;
        this.fQ = function (y, A) {
            1 === fK && g(y, 7, 1, A, 0, 0)
        }
            ;
        this.fR = function (y, A) {
            1 === fK && g(y, 6, 1, A, 0, 0)
        }
            ;
        this.fS = function (y) {
            1 === fK && 0 !== f1[y] && (0 < fT ? fU.fV(1 - y) : fW(y));
            dw.fX(y, 4)
        }
            ;
        this.fY = function (y) {
            fZ.fa(y) && (1 === dP ? fU.fV(1 - y) : (dw.fX(y, y === localPlayerID ? 21 : 22),
                0 < fT ? fU.fV(1 - y) : (fW(y),
                    isSingleplayer && fN && fO.d6())))
        }
    }
    function fd() {
        function g(C) {
            for (t--; C < t; C++)
                n[C] = n[C + 1],
                    l[C] = l[C + 1],
                    z[C] = z[C + 1],
                    y[C] = y[C + 1],
                    A[C] = A[C + 1]
        }
        var k;
        var x;
        var t;
        var n;
        var l;
        var z;
        var y;
        var A;
        this.bh = function () {
            k = 1;
            t = 0;
            x = 2 * b0;
            n = new Uint16Array(x);
            l = new Uint8Array(x);
            z = new Uint16Array(x);
            y = new Uint32Array(x);
            A = new Uint32Array(x)
        }
            ;
        this.fj = function (C, B) {
            y[C] = B
        }
            ;
        this.d6 = function () {
            for (var C = t - 1; 0 <= C; C--)
                0 === l[C]-- && (l[C] = 2,
                    fk.d6(C, z[C], n[C], y[C], A[C]))
        }
            ;
        this.an = function (C, B) {
            var F;
            for (F = t - 1; 0 <= F; F--)
                if (C === n[F] && B === z[F]) {
                    g(F);
                    break
                }
        }
            ;
        this.fm = function (C) {
            var B;
            for (B = t - 1; 0 <= B; B--)
                C === n[B] && (fk.fn(C, y[B]),
                    g(B))
        }
            ;
        this.cJ = function (C, B, F) {
            if (t >= x)
                return 0;
            n[t] = C;
            l[t] = 0;
            z[t] = k;
            y[t] = B;
            A[t] = F;
            C = k;
            k++;
            t++;
            k = k > 2 * x ? 1 : k;
            return C
        }
            ;
        this.c8 = function () {
            if (!(40 > fq || 0 === t)) {
                var C;
                var B = fv / fq;
                var F = fw / fq;
                var E = (fx + fv) / fq;
                var J = (c3 + fw) / fq;
                c9.textAlign = cB;
                c9.textBaseline = cA;
                for (C = t - 1; 0 <= C; C--) {
                    var G = ax.fy(y[C]);
                    var H = ax.c7(y[C]);
                    var D = n[C];
                    if (G > B - 1 && G < E && H > F - 1 && H < J && 0 !== f1[D]) {
                        var K = Math.floor(.94 * fq * dx.fz(D));
                        if (!(6 > K)) {
                            G = Math.floor(fx * (G + .5 - B) / (E - B));
                            H = Math.floor(c3 * (H + .48 - F) / (J - F));
                            c9.font = bl + K + bm;
                            c9.fillStyle = colorBlack;
                            c9.fillText(mpPlayerArray[D], G, H);
                            var I = Math.floor(.57 * K);
                            6 > I || (D = aW.ae(D, aW.fG(D, z[C])),
                                c9.font = bl + I + bm,
                                c9.fillText(eC.g2(D), G, H + Math.floor(.82 * K)))
                        }
                    }
                }
            }
        }
    }
    function g3() {
        function g(I) {
            G = bw.gL;
            H = 33;
            l = z = n = 0;
            y = H / I;
            t = 1 / (I / H / 4);
            A = (fx / 2 + fv) / fq;
            C = (c3 / 2 + fw) / fq;
            B = fq
        }
        function k(I) {
            .125 > Math.abs(Math.log(J / B)) && (J = I * B)
        }
        function x(I, L, O, P) {
            F = (I + O + 1) / 2;
            E = (L + P + 1) / 2;
            I = fx / (O - I + 1);
            L = c3 / (P - L + 1);
            J = .9 * (I < L ? I : L)
        }
        var t;
        var n;
        var l;
        var z;
        var y;
        var A;
        var C;
        var B;
        var F;
        var E;
        var J;
        var G;
        var H;
        var D = false;
        var K = false;
        this.gM = function () {
            g(1);
            this.gN(0, 0, aR - 1, aS - 1);
            fN || this.gO(localPlayerID, 3E3, true, .3)
        }
            ;
        this.gO = function (I, L, O, P) {
            if (!(gQ || D && !O && K || 0 === landSizeArray[I])) {
                gR.gS = false;
                K = O;
                g(L);
                F = (cs[I] + cr[I] + 1) / 2;
                E = (cv[I] + cu[I] + 1) / 2;
                L = cr[I] - cs[I] + 1;
                I = cu[I] - cv[I] + 1;
                O = fx / L;
                var W = c3 / I;
                J = O < W ? O : W;
                J *= 0 !== P ? P : 20 > L && 20 > I ? .5 : .9;
                k(.875);
                D = true;
                gV.gW()
            }
        }
            ;
        this.gX = function (I) {
            gR.gS = false;
            K = true;
            g(I);
            x(0, 0, aR - 1, aS - 1);
            k(.875);
            D = true;
            gV.gW()
        }
            ;
        this.gN = function (I, L, O, P) {
            x(I, L, O, P);
            fq = J;
            gR.ge(F, fx / 2);
            gR.gf(E, c3 / 2);
            gg.gh()
        }
            ;
        this.gi = function () {
            if (D && K)
                return false;
            D = false;
            return true
        }
            ;
        this.d6 = function () {
            if (D) {
                .5 > n ? z < y && (z += y * t,
                    l = n) : n > 1 - l && (z -= y * t,
                        z = z < y * t ? y * t : z);
                G = G >= bw.gL ? bw.gL - 1 : G;
                var I = bw.gL - G;
                1E3 < I ? n = 1 : (n += z * I / H,
                    n = 1 < n ? 1 : n);
                G = bw.gL;
                var L = fq;
                I = fv;
                var O = fw;
                fq = B * Math.pow(J / B, n);
                L = fq / L;
                var P = 1 - (B * Math.pow(J / B, 1 - n) - B) / (J - B);
                gR.ge(A + P * (F - A), fx / 2);
                gR.gf(C + P * (E - C), c3 / 2);
                dx.zoom(L, (I * L - fv) / (1 - L), (O * L - fw) / (1 - L));
                gg.gh();
                1 <= n && (D = false,
                    gq.gr = true);
                bw.bx = true
            }
        }
    }
    function gs() {
        function g() {
            var G;
            a: {
                for (G = 0; 8 > G; G++)
                    if (n = ak(z * cW.random(), cW.value(100)),
                        l = ak(y * cW.random(), cW.value(100)),
                        k()) {
                        G = true;
                        break a
                    }
                G = false
            }
            if (!G)
                a: {
                    G = ak(z * cW.random(), cW.value(100));
                    for (H = ak(y * cW.random(), cW.value(100)), D = 40, void 0; 1 <= D; D--) {
                        var H;
                        var D;
                        for (var K = y - D; 0 <= K; K -= 40) {
                            l = (K + H) % y;
                            for (var I = 40; 1 <= I; I--)
                                for (var L = z - I; 0 <= L; L -= 40)
                                    if (n = (L + G) % z,
                                        k()) {
                                        G = true;
                                        break a
                                    }
                        }
                    }
                    G = false
                }
            return G
        }
        function k() {
            var G = ak(A - F, 2);
            var H = B + l * A + G;
            G = C + n * A + G;
            for (K = H + F - 1, void 0; K >= H; K--) {
                var D;
                var K;
                for (var I = G + F - 1; I >= G; I--)
                    if (D = ax.en(I, K),
                        !ax.ay(D) || ax.cM(D))
                        return false;
            }
            return true
        }
        function _EMPTIES_STUFF() {
            f1[E] = 0;
            TroopBalance[E] = 0;
            landSizeArray[E] = hD[E] = 0;
            aw[E] = [];
            bE[E] = [];
            bF[E] = [];
            bI[E] = [];
            cs[E] = cv[E] = cr[E] = cu[E] = 0
        }
        function t(G, H) {
            f1[E] = 1;
            TroopBalance[E] = E < ci ? hE : dU[d7.cF[E - ci]];
            cs[E] = G + 10;
            cv[E] = H + 10;
            cu[E] = cr[E] = 0;
            var D;
            var K;
            for (D = G; D < G + 4; D++)
                for (K = H; K < H + 4; K++)
                    if (D > G && D < G + 3 || K > H && K < H + 3) {
                        var I = ax.en(D, K);
                        ax.ay(I) && (cs[E] = D < cs[E] ? D : cs[E],
                            cr[E] = D > cr[E] ? D : cr[E],
                            cv[E] = K < cv[E] ? K : cv[E],
                            cu[E] = K > cu[E] ? K : cu[E],
                            J[landSizeArray[E]] = I,
                            landSizeArray[E]++,
                            ax.hH(I, E))
                    }
            hD[E] = landSizeArray[E];
            for (I = landSizeArray[E] - 1; 0 <= I; I--)
                ax.hI(J[I], E) ? (ax.az(J[I], E),
                    bE[E].push(J[I])) : ax.hJ(J[I]) ? (ax.az(J[I], E),
                        bF[E].push(J[I])) : ax.hK(J[I]) && (ax.az(J[I], E),
                            bI[E].push(J[I]))
        }
        var n;
        var l;
        var z;
        var y;
        var A;
        var C;
        var B;
        var F;
        var E;
        var J;
        this.bh = function () {
            J = Array(12);
            F = 6;
            A = 10;
            z = ak(aR, A);
            y = ak(aS, A);
            C = ak(aR - A * z, 2);
            B = ak(aS - A * y, 2);
            if (fN)
                for (var G = 0; G < ci; G++)
                    E = G,
                        _EMPTIES_STUFF(),
                        f1[E] = 1;
            for (E = 0; E < b0; E++)
                if (1 !== f1[E])
                    if (E < h0 && g()) {
                        var H = C + n * A + ak(A, 2);
                        G = B + l * A + ak(A, 2);
                        _EMPTIES_STUFF();
                        t(H - 2, G - 2)
                    } else
                        _EMPTIES_STUFF();
            as.at[7] = landSizeArray[localPlayerID];
            as.at[8] = TroopBalance[localPlayerID]
        }
            ;
        this.hL = function (G, H, D) {
            var K;
            var I;
            E = G;
            for (K = 0; 20 > K; K++)
                for (G = H + K; G >= H - K; G--)
                    for (I = D + K; I >= D - K; I--)
                        if ((G === H + K || G === H - K || I === D + K || I === D - K) && 3 < G && G < aR - 5 && 3 < I && I < aS - 5) {
                            var L;
                            if (L = ax.ay(ax.en(G, I)))
                                a: {
                                    var O;
                                    var P = G + 3;
                                    var W = I + 3;
                                    for (L = W; L > W - 6; L--)
                                        for (O = P; O > P - 6; O--) {
                                            var V = ax.en(O, L);
                                            if (ax.cM(V)) {
                                                L = false;
                                                break a
                                            }
                                        }
                                    L = true
                                }
                            if (L) {
                                if (0 < landSizeArray[E]) {
                                    for (D = cr[E]; D >= cs[E]; D--)
                                        for (H = cu[E]; H >= cv[E]; H--)
                                            K = 4 * (H * aR + D),
                                                ax.hQ(E, K) && (ax.hR(K),
                                                    landSizeArray[E]--);
                                    _EMPTIES_STUFF()
                                }
                                t(G - 1, I - 1);
                                return true
                            }
                        }
            return false
        }
            ;
        this.hS = function (G) {
            E = G;
            if (g()) {
                G = C + n * A + ak(A, 2);
                var H = B + l * A + ak(A, 2);
                _EMPTIES_STUFF();
                t(G - 2, H - 2)
            } else
                _EMPTIES_STUFF()
        }
    }
    function hT() {
        hU.hV();
        c9.setTransform(fq, 0, 0, fq, 0, 0);
        c9.imageSmoothingEnabled = 3 > fq;
        c9.drawImage(hW, gR.fy(), gR.c7());
        eA.c8();
        c9.drawImage(hX, gR.fy(), gR.c7());
        c9.imageSmoothingEnabled = false;
        hU.c8();
        c9.setTransform(1, 0, 0, 1, 0, 0);
        dx.c8();
        e7.c8();
        gQ || (c9.imageSmoothingEnabled = false,
            dw.c8(),
            e9.c8(),
            eD.c8(),
            eE.c8(),
            dy.c8(),
            gR.c8(),
            bu.c8(),
            eF.c8(),
            eB.c8(),
            eC.c8(),
            fZ.c8(),
            eI.c8(),
            hY.c8(),
            hZ.c8(),
            eJ.c8())
    }
    function ha(g, k, x) {
        g.clearRect(0, 0, k, x);
        g.fillStyle = colorBlack75opaque;
        g.fillRect(0, 0, k, x)
    }
    function hd(g, k, x, t) {
        g.fillStyle = colorWhite;
        g.fillRect(0, 0, k, t);
        g.fillRect(0, 0, t, x);
        g.fillRect(k - t, 0, t, x);
        g.fillRect(0, x - t, k, t)
    }
    function hf(g, k, x, t, n, l, z) {
        g.fillStyle = colorWhite;
        l = Math.floor(t * l);
        l += (l - n) % 2;
        var y = Math.floor((l - n) / 2);
        t = Math.floor((t - l) / 2);
        g.fillRect(k + t, x + t + y, l, n);
        z && g.fillRect(k + t + y, x + t, n, l)
    }
    function hl() {
        this.hm = null;
        this.bh = function (g) {
            this.hm = g;
            dw.hn(this.hm)
        }
            ;
        this.ho = function (g) {
            var k = 8 / (1 + Math.pow(2, (this.hm[g].hq - this.hm[1 - g].hq) / 10 / 32));
            k = Math.floor(10 * k + .5);
            var x = this.ht(this.hm[g].hq + k);
            k = this.ht(this.hm[1 - g].hq - k);
            0 === g ? dw.hv(this.hm, x, k, ["rgba(10,140,10,0.75)", "rgba(140,10,10,0.75)"]) : dw.hv(this.hm, k, x, ["rgba(140,10,10,0.75)", "rgba(10,140,10,0.75)"])
        }
            ;
        this.ht = function (g) {
            g = 0 > g ? 0 : 16E3 < g ? 16E3 : g;
            return 16E3 <= g ? "Unknown" : (g / 10).toFixed(1)
        }
    }
    function hw() {
        function g(n) {
            for (var l = k.length - 1; 0 <= l; l--)
                if (n >= k[l] && n < x[l])
                    return l;
            return -1
        }
        var k;
        var x;
        var t;
        (function () {
            k = [32, 65, 191, 913, 931];
            x = [64, 127, 688, 930, 1155];
            t = Array(k.length + 1);
            for (var n = 0; n < t.length; n++) {
                t[n] = 0;
                for (var l = n - 1; 0 <= l; l--)
                    t[n] += x[l] - k[l]
            }
        }
        )();
        this.i1 = function (n) {
            n = n.trim();
            if (0 === n.indexOf("Bot ") || 0 === n.indexOf("[Bot] "))
                n = false;
            else
                a: {
                    n = n.trim();
                    var l = n.length;
                    if (3 > l || 20 < l)
                        n = false;
                    else {
                        for (z = 0, A = 0, void 0; A < l; A++) {
                            var z;
                            var y;
                            var A;
                            if (y = n.charCodeAt(A),
                                z += 65 <= y && 90 >= y || 1040 <= y && 1071 >= y ? 1 : 0,
                                -1 === g(y)) {
                                n = false;
                                break a
                            }
                        }
                        n = 3 < z && z > Math.floor(l / 2) ? false : true
                    }
                }
            return n
        }
            ;
        this.encode_string = function (string) {
            string = string.trim();
            for (l = string.length, z = [], A = 0, void 0; A < l; A++) {
                var l;
                var z;
                var y;
                var A;
                y = string.charCodeAt(A);
                var C = g(y);
                z.push(t[C] + y - k[C])
            }
            return z
        }
            ;
        this.i8 = function (n) {
            for (l = "", z = n.length, A = 0, void 0; A < z; A++) {
                var l;
                var z;
                var y;
                var A;
                for (y = 1; y < t.length; y++)
                    if (n[A] < t[y]) {
                        y = k[y - 1] + n[A] - t[y - 1];
                        l += String.fromCharCode(y);
                        break
                    }
            }
            return l
        }
            ;
        this.i9 = function (n) {
            n = this.encode_string(n);
            for (l = "", z = 0, void 0; z < n.length; z++) {
                var l;
                var z;
                l += 10 > n[z] ? "00" : 100 > n[z] ? "0" : "",
                    l += n[z].toString(10);
            }
            return l
        }
            ;
        this.iA = function (n) {
            for (l = Array(Math.floor(n.length / 3)), z = 0, void 0; z < n.length; z += 3) {
                var l;
                var z;
                l[Math.floor(z / 3)] = parseInt(n.substring(z, z + 3));
            }
            return this.i8(l)
        }
            ;
        this.z = function (n) {
            var l;
            var z = [n.length];
            for (l = 0; l < n.length; l++)
                z[l] = n.charCodeAt(l) - 48;
            var y = "";
            for (l = 0; l < n.length; l++)
                if (l === n.length - 1 || 51 < 10 * z[l] + z[l + 1])
                    y += z[l].toString();
                else {
                    var A = 10 * z[l] + z[l + 1];
                    y += String.fromCharCode(A + (26 > A ? 65 : 71));
                    l++
                }
            return y
        }
            ;
        this.n = function (n) {
            for (l = "", y = 0, void 0; y < n.length; y++) {
                var l;
                var z;
                var y;
                z = n.charCodeAt(y),
                    48 <= z && 58 > z ? l += String.fromCharCode(z) : 65 <= z && 75 > z ? l += "0" + (z - 65).toString() : 75 <= z && 91 > z ? l += (z - 65).toString() : 97 <= z && 123 > z && (l += (z - 71).toString());
            }
            return l
        }
            ;
        this.iC = function (n) {
            var l = n.length;
            var z;
            var y = [];
            for (z = 0; z < l; z++) {
                var A = n.charCodeAt(z);
                58 > A ? y.push(n[z]) : (A = 91 > A ? A - 65 : A - 71,
                    y.push(String(ak(A, 10))),
                    y.push(String(A - 10 * ak(A, 10))))
            }
            l = y.length - 2;
            A = 0;
            n = [];
            for (z = 0; z < l; z += 3)
                n[A++] = parseInt(y[z] + y[z + 1] + y[z + 2]);
            return n
        }
            ;
        this.iE = function () {
            var n;
            var l = "";
            for (n = 0; 6 > n; n++) {
                var z = 48 + cW.random() % 36;
                z += 58 <= z ? 39 : 0;
                l += String.fromCharCode(z)
            }
            return l
        }
    }
    function iG() {
        this.fV = function (g) {
            if (2 === fK)
                var k = true;
            else
                eE.iY(),
                    fK = 2,
                    iZ = ia,
                    k = false;
            if (!k) {
                if (2 === fT) {
                    var x = g = -1 === g ? landSizeArray[0] >= landSizeArray[1] ? 0 : 1 : g;
                    (k = g === localPlayerID) ? dw.fX(g, 2) : dw.fX(1 - localPlayerID, 3);
                    iN.ho(g)
                } else
                    d1 ? (g = eF.iO(),
                        k = dN.dO[localPlayerID] === g,
                        9 === gameMode ? x = k ? eY[0] : 512 : (g = dN.iP(dN.iQ[g]),
                            x = g[0],
                            512 !== x && dw.iR(g[1])),
                        dw.iS(k)) : (x = eY[0],
                            k = x === localPlayerID,
                            dw.iT(x));
                isSingleplayer || iU.iV(iW(), x);
                eI.show(k, false);
                e9.eN(true);
                dy.eN(true);
                bw.bx = true;
                gq.ib();
                a9(0)
            }
        }
    }
    function ic() {
        this.cI = function (g, k, x) {
            0 !== f1[g] && id.hL(g, k, x) && (bw.bx = true)
        }
            ;
        this.d6 = function () {
            fN = false;
            for (var g = 0; g < ci; g++)
                0 !== f1[g] && 0 === landSizeArray[g] && id.hS(g);
            0 !== f1[localPlayerID] ? (as.at[7] = landSizeArray[localPlayerID],
                as.at[8] = TroopBalance[localPlayerID],
                eD.c6(),
                dy.ie(),
                eH.gN(cs[localPlayerID] - 5, cv[localPlayerID] - 5, cr[localPlayerID] + 5, cu[localPlayerID] + 5),
                eJ.bh()) : eI.show(false, false);
            dw.ig(18);
            dx.ih();
            dx.eN();
            fO = null;
            gq.ii = true;
            gq.ib();
            isSingleplayer && a9(1)
        }
    }
    var ci;
    var ia;
    var dg;
    var iZ;
    var b0 = 512;
    var h0 = 512;
    var ij = 150;
    var isSingleplayer;
    var ik;
    var fK = 0;
    var il;
    var im;
    var io;
    var hE = 512;
    var al = 2;
    var localPlayerID;
    var gQ;
    var fN;
    var ip;
    var d1;
    var iq;
    var fT;
    var gameMode;
    var ir;
    var fO;
    var iN;
    var is;
    function it(g, k, x, t, n) {
        ik = gQ = false;
        gameMode = t;
        ir = n;
        d1 = 7 > t || 9 === t;
        ia = ci = x.length;
        isSingleplayer = 1 === ia;
        gameMode = 10 === gameMode && isSingleplayer ? 7 : gameMode;
        fT = 2 === ia && 8 === t ? 2 : 0;
        iq = 9 === t ? 2 : t + 2;
        is = 2 >= ci ? 30 : 50 >= ci ? 40 : 50;
        fO = (ip = fN = d1 || 100 > ci) ? new ic : null;
        hE = 512;
        h0 = b0;
        isSingleplayer && (h0 = dk.iy());
        dg = h0 - ci;
        iZ = 0;
        localPlayerID = k;
        cW.iz(g);
        j0(x);
        dp.bh();
        dN.bh(x);
        fK = 1;
        im = 2E9;
        io = ak(im, 2);
        as.bh();
        j1();
        j2.j3();
        gq.bh();
        aq.bh();
        d0();
        ax.bh(x);
        hU.bh();
        eF.bh();
        d7.bh();
        j4.j5();
        j4.j6();
        id.bh();
        j7();
        eA.bh();
        hZ.bh();
        j8.putImageData(j9, 0, 0);
        e9.bh();
        gR.bh();
        eD.bh();
        eE.bh();
        eB.bh();
        dy.bh();
        fZ.bh();
        bu.bh();
        dw.bh();
        eC.bh();
        hY.bh();
        eI.bh();
        e3.bh();
        e7.bh();
        am.bh();
        e6.bh();
        aQ();
        aW.bh();
        dx.bh();
        e2.bh();
        e5.bh();
        e4.bh();
        2 === fT ? (iN = new hl,
            iN.bh(x)) : iN = null;
        jA();
        eJ.bh();
        isSingleplayer ? bw.jB() : bw.jC();
        bw.bx = true;
        isSingleplayer && fN || a9(1)
    }
    function jA() {
        eH.gM();
        0 === f1[localPlayerID] && eI.show(false, true);
        dx.eN()
    }
    function jD() {
        low_level_websocket.close(low_level_websocket.jE, 3246);
        fK = 0;
        bw.jF();
        jG.bh();
        a9(0)
    }
    var d7;
    var am;
    var d5;
    var e6;
    var e3;
    var e7;
    var eH;
    var id;
    var m;
    var hY;
    var fZ;
    var dw;
    var jH;
    var eC;
    var bu;
    var eD;
    var gR;
    var jI;
    var eB;
    var e9;
    var dy;
    var eI;
    var jJ;
    var jK;
    var jL;
    var jM;
    var jN;
    var jO;
    var dk;
    var jG;
    var bo;
    var ax;
    var f;
    var aW;
    var aq;
    var dx;
    var j4;
    var dp;
    var j2;
    var jP;
    var jQ;
    var gV;
    var el;
    var cW;
    var fk;
    var hU;
    var jR;
    var jS;
    var eJ;
    var iU;
    var jT;
    var eA;
    var jU;
    var jV;
    var eE;
    var eK;
    var low_level_websocket;
    var e4;
    var jW;
    var jX;
    var e5;
    var e2;
    function jY() {
        d7 = new dV;
        am = new eP;
        d5 = new ed;
        e6 = new ey;
        e3 = new f3;
        e7 = new fd;
        eH = new g3;
        id = new gs;
        m = new hw;
        hY = new jZ;
        fZ = new ja;
        dw = new jb;
        jH = new jc;
        eC = new jd;
        bu = new je;
        eD = new jf;
        gR = new jg;
        jI = new jh;
        eB = new ji;
        e9 = new jj;
        dy = new jk;
        eI = new jl;
        jJ = new jm;
        jK = new jn;
        jL = new jo;
        jM = new jp;
        jM.PopulateErrors();
        jN = new jq;
        jO = new jr;
        dk = new js;
        jG = new jt;
        bo = new ju;
        ax = new jv;
        f = new jw;
        aW = new jx;
        aq = new jy;
        dx = new jz;
        j4 = new k0;
        dp = new k1;
        j2 = new k2;
        jP = new k3;
        jQ = new k4;
        gV = new k5;
        el = new k6;
        cW = new k7;
        fk = new k8;
        hU = new k9;
        jR = new kA;
        jS = new kB;
        eJ = new kC;
        iU = new WebSocketAPI;
        jT = new kE;
        eA = new kF;
        jU = new kG;
        jV = new kH;
        eE = new kI;
        eK = new kJ;
        low_level_websocket = new LowLevelWebsocket;
        e4 = new kL;
        jW = new kM;
        jX = new kN;
        e5 = new kO;
        e2 = new kP
    }
    function jZ() {
        function g(L, O, P, W) {
            for (N = 0, void 0; N < L.length; N++) {
                var V;
                var N;
                O.push(document.createElement("canvas"));
                O[N].width = P;
                O[N].height = P;
                V = O[N].getContext("2d", {
                    alpha: true
                });
                var S = P;
                var U = V;
                U.fillStyle = W;
                U.beginPath();
                U.arc(Math.floor(S / 2), Math.floor(S / 2), Math.floor(.47 * S), 0, 2 * Math.PI);
                U.fill();
                6 === L[N] ? V.drawImage(bo.br(19), 0, 0) : 7 === L[N] ? V.drawImage(bo.ki("emojis"), -4 * P, 0) : V.drawImage(bo.br(3), -L[N] * P, 0)
            }
        }
        function k(L) {
            for (var O = K.length - 1; 0 <= O; O--)
                if (K[O] === L)
                    return true;
            return false
        }
        function x(L) {
            return -1 === L || 0 === L || 6 === L || !n[5] && (8 === L || !n[4] && 7 === L) || !n[7] && (2 === L || !n[6] && 1 === L) || 3 === L && !n[2] || 5 === L && !n[1] && !n[5] && !n[7] ? false : true
        }
        function t(L, O) {
            return L < z - A - G || L > z + 2 * A + G || O < y - A - G || O > y + 2 * A + G ? -1 : 3 * (O < y - G / 2 ? 0 : O < y + A + G / 2 ? 1 : 2) + (L < z - G / 2 ? 0 : L < z + A + G / 2 ? 1 : 2)
        }
        var n = [];
        var l;
        var z;
        var y;
        var A;
        var C;
        var B;
        var F;
        var E;
        var J;
        var G;
        var H;
        var D;
        var K;
        var I;
        this.kZ = [];
        this.bh = function () {
            K = [];
            n = [];
            l = false;
            C = B = z = y = F = 0;
            this.ka();
            for (var L = this.kb.length - 1; 0 <= L; L--)
                n.push(false);
            n.push(false)
        }
            ;
        this.ka = function () {
            this.kb = [];
            H = [];
            this.kc = [];
            var L = bo.br(3).height;
            A = Math.floor((b_IsUISmall ? .075 : .0468) * bi);
            D = A / L;
            G = Math.floor(A / 3);
            g([0, 1, 2, 3, 7, 4, 5, 6], this.kb, L, "rgba(0,180,0,0.6)");
            g([0, 4, 5], H, L, "rgba(200,0,0,0.6)");
            g([0, 2, 4], this.kc, L, "rgba(0,0,0,0.6)");
            g([0], this.kZ, L, "rgba(200,200,0,0.6)")
        }
            ;
        this.kk = function (L, O) {
            if (this.kl()) {
                var P = this.bz(L, O);
                bw.bx = 0 < P;
                return 2 > P
            }
            return false
        }
            ;
        this.km = function (L, O) {
            this.kl() || (C = L,
                B = O,
                F = (new Date).getTime())
        }
            ;
        this.bz = function (L, O) {
            B = C = -1E3;
            if (2 === kn[localPlayerID] || 0 === f1[localPlayerID] && !fN)
                return this.ko(),
                    1;
            if (l) {
                this.ko();
                if (a5.kp(L, O))
                    a5.kq(L, O, E) && (l = true);
                else
                    return a5.kr(),
                        2;
                return 1
            }
            var P = t(L, O);
            if (!x(P) || 0 === P || 6 === P || !n[2] && 3 === P)
                return this.ko(),
                    2;
            if (1 === P) {
                if (n[6]) {
                    P = (new Date).getTime();
                    P > I + 4E3 && (K = []);
                    I = P;
                    if (k(E))
                        return this.ko(),
                            1;
                    K.push(E);
                    16 < K.length && K.shift();
                    this.ko();
                    return 1
                }
                return 0
            }
            if (2 === P) {
                if (n[7]) {
                    for (P = K.length - 1; 0 <= P; P--)
                        0 === f1[K[P]] && K.splice(P, 1);
                    0 < K.length && (dw.kx(K, E),
                        iU.ky(K, E),
                        K = []);
                    this.ko();
                    return 1
                }
                return 0
            }
            if (3 === P) {
                this.ko();
                if (E < ci && 7 > gameMode && 1071 > bw.dL())
                    return dw.kz(),
                        1;
                dw.l0();
                isSingleplayer ? dR(localPlayerID, E, ak(eD.l1() * TroopBalance[localPlayerID], 1E3)) : iU.l2(eD.l1(), E === b0 ? localPlayerID : E);
                return 1
            }
            if (4 === P)
                return n[0] ? fN ? (this.ko(),
                    isSingleplayer ? (fO.cI(0, ax.fy(J), ax.c7(J)),
                        fO.d6()) : iU.l4(1E3, ax.fy(J), ax.c7(J))) : (this.ko(),
                            dw.l0(),
                            isSingleplayer ? f7(localPlayerID, E, eD.l1()) : (!ip || 300 < dy.l3()) && iU.l2(eD.l1(), E === b0 ? localPlayerID : E)) : n[8] ? (this.ko(),
                                e4.l5(E, eD.l1())) : this.ko(),
                    1;
            if (5 === P)
                return n[1] ? (this.ko(),
                    dw.l0(),
                    isSingleplayer ? e3.f8(localPlayerID, eD.l1(), ax.fy(J), ax.c7(J)) : iU.l4(eD.l1(), ax.fy(J), ax.c7(J)),
                    1) : 0;
            if (7 === P && n[4])
                return this.ko(),
                    l = a5.show(L, O),
                    1;
            if (8 === P)
                return n[5] ? (dw.l6(51, E) || dw.l6(52, E) || (dw.l7(E, 0),
                    iU.l8(E)),
                    this.ko(),
                    1) : 0;
            this.ko();
            return 2
        }
            ;
        this.l9 = function (L, O) {
            if (this.kl() || 2 === kn[localPlayerID] || 0 === f1[localPlayerID] && !fN)
                return false;
            var P = (b_IsUISmall ? .0288 : .0144) * bi;
            if (Math.abs(L - C) > P || Math.abs(O - B) > P || (new Date).getTime() > F + 425)
                return false;
            P = Math.floor((L + fv) / fq);
            var W = Math.floor((O + fw) / fq);
            if (1 > P || 1 > W || P >= aR - 1 || W >= aS - 1)
                return false;
            var V = W * aR * 4 + 4 * P;
            if (!ax.ay(V))
                return false;
            if (2 === fK)
                return 1 <= a5.lD && (E = ax.b7(V),
                    E < ci) ? (E === localPlayerID && this.ko(),
                        n[4] = true,
                        this.lE(L, O)) : false;
            J = ax.en(P, W);
            if (fN)
                return n[0] = true,
                    this.lE(L, O);
            n[1] = el.cg(localPlayerID, J);
            if (ax.b8(V))
                return E = b0,
                    lF(localPlayerID) ? n[0] = true : lG(localPlayerID, E) && (n[8] = true),
                    this.lE(L, O);
            E = ax.b7(V);
            if (E === localPlayerID) {
                this.ko();
                if (0 === a5.lD)
                    return false;
                n[4] = true;
                return this.lE(L, O)
            }
            n[6] = E < ci && !k(E);
            n[4] = 1 <= a5.lD && E < ci;
            if (cZ(E, localPlayerID))
                return n[5] = E < ci,
                    P = n,
                    W = E,
                    0 === K.length ? W = false : (new Date).getTime() > I + 4E3 ? (K = [],
                        W = false) : W = !k(W),
                    P[7] = W,
                    lJ(localPlayerID, E) ? n[0] = true : lG(localPlayerID, E) && (n[8] = true),
                    this.lE(L, O);
            n[2] = d1;
            return this.lE(L, O)
        }
            ;
        this.lE = function (L, O) {
            z = L - Math.floor(A / 2);
            y = O - Math.floor(A / 2);
            return this.kl()
        }
            ;
        this.lK = function (L, O) {
            if (!this.kl())
                return false;
            if (l) {
                if (a5.kp(L, O))
                    return false;
                a5.kr();
                l = false;
                return bw.bx = true
            }
            return x(t(L, O)) ? false : (this.ko(),
                bw.bx = true)
        }
            ;
        this.ko = function () {
            var L;
            for (L = n.length - 1; 0 <= L; L--)
                n[L] = false;
            l = false
        }
            ;
        this.lL = function () {
            this.ko()
        }
            ;
        this.kl = function () {
            var L;
            for (L = n.length - 1; 0 <= L; L--)
                if (n[L])
                    return true;
            return l
        }
            ;
        this.c8 = function () {
            this.kl() && this.lM()
        }
            ;
        this.lM = function () {
            if (l)
                a5.c8();
            else {
                var L = (A + G) / D;
                c9.imageSmoothingEnabled = true;
                c9.setTransform(D, 0, 0, D, z, y);
                n[0] ? fN ? c9.drawImage(this.kb[3], 0, 0) : c9.drawImage(this.kb[0], 0, 0) : n[8] ? c9.drawImage(this.kZ[0], 0, 0) : c9.drawImage(H[0], 0, 0);
                n[1] && c9.drawImage(this.kb[1], L, 0);
                n[2] && c9.drawImage(this.kb[2], -L, 0);
                n[4] && c9.drawImage(this.kb[4], 0, L);
                n[5] && c9.drawImage(this.kb[5], L, L);
                n[6] && c9.drawImage(this.kb[6], 0, -L);
                n[7] && c9.drawImage(this.kb[7], L, -L);
                c9.imageSmoothingEnabled = false;
                c9.setTransform(1, 0, 0, 1, 0, 0)
            }
        }
    }
    function ja() {
        function g() {
            var C = n.getContext("2d", {
                alpha: true
            });
            C.clearRect(0, 0, t, t);
            C.fillStyle = lV;
            C.fillRect(0, 0, t, t);
            0 === y && (C.fillStyle = lW,
                C.fillRect(0, 0, t, t));
            C.fillStyle = colorWhite;
            C.fillRect(0, 0, t, 1);
            C.fillRect(0, 0, 1, t);
            C.fillRect(0, t - 1, t, 1);
            C.fillRect(t - 1, 0, 1, t);
            var B = .9 * t / bo.br(0).width;
            C.imageSmoothingEnabled = true;
            C.setTransform(B, 0, 0, B, Math.floor((t - B * bo.br(0).width) / 2), Math.floor((t - B * bo.br(0).height) / 2));
            C.drawImage(bo.br(0), 0, 0);
            C.setTransform(1, 0, 0, 1, 0, 0)
        }
        function k(C, B) {
            if (!fZ.lS)
                return C <= t + ld && B >= eD.f6 ? 0 : -1;
            if (C <= 4 * t + ld) {
                if (B >= eD.f6)
                    return 0;
                if (B >= eD.f6 - t - A * ld)
                    return 2;
                if (B >= eD.f6 - 2 * (t + A * ld))
                    return 3
            } else if (C <= 7 * t + ld && B >= eD.f6 - t - A * ld)
                return 1;
            return -1
        }
        function x(C, B) {
            c9.setTransform(1, 0, 0, 1, ld, eD.f6 - C * A * ld - C * t);
            c9.fillStyle = lV;
            c9.fillRect(0, 0, 4 * t, t);
            y === C + 1 && B === colorWhite && (c9.fillStyle = lW,
                c9.fillRect(0, 0, 4 * t, t));
            c9.fillStyle = B;
            c9.fillRect(0, 0, 4 * t, 1);
            c9.fillRect(0, 0, 1, t);
            c9.fillRect(4 * t, 0, 1, t);
            c9.fillRect(0, t - 1, 4 * t, 1);
            c9.fillText(InGameMenuItems[C], 2 * t, .54 * t)
        }
        var t;
        var n;
        var l;
        var InGameMenuItems = ["Quit Game", "Surrender", "Statistics"];
        var y;
        var A;
        this.bh = function () {
            y = -1;
            this.lS = false;
            A = b_IsUISmall ? 1.2 : .6;
            this.lT()
        }
            ;
        this.lT = function () {
            t = eD.co;
            n = document.createElement("canvas");
            n.width = t;
            n.height = t;
            l = bl + Math.floor((b_IsUISmall ? .5 : .45) * t) + bm;
            g()
        }
            ;
        this.lY = function () {
            (this.lS = !this.lS) ? (gQ = false,
                isSingleplayer && (setTimeout(function () {
                    gq.ib()
                }, 0),
                    a9(0))) : (y = -1,
                        g(),
                        isSingleplayer && a9(1));
            bw.bx = true
        }
            ;
        this.bz = function (C, B) {
            var F = k(C, B);
            return this.lS ? 0 === F ? (jD(),
                aB(),
                2) : 1 === F ? (this.lY(),
                    2) : 2 === F ? (this.fa(localPlayerID) && (isSingleplayer ? e3.fY(localPlayerID) : iU.lb(),
                        this.lY()),
                        2) : 3 === F && 2 <= as.lc ? (hZ.lY(),
                            bw.bx = true,
                            2) : hZ.kl || isSingleplayer && !fN ? 1 : (this.lY(),
                                2) : 0 === F ? (this.lY(),
                                    2) : 0
        }
            ;
        this.lK = function (C, B) {
            var F = k(C, B);
            if (F === y)
                return -1 !== y;
            y = F;
            this.lS || g();
            bw.bx = true;
            return -1 !== y
        }
            ;
        this.c8 = function () {
            if (this.lS) {
                var C = Math.floor(5.5 * t);
                c9.setTransform(1, 0, 0, 1, ld, eD.f6);
                c9.fillStyle = lV;
                c9.fillRect(0, 0, C, t);
                0 === y ? (c9.fillStyle = lW,
                    c9.fillRect(0, 0, 4 * t, t)) : 1 === y && (c9.fillStyle = lW,
                        c9.fillRect(4 * t, 0, Math.floor(1.5 * t), t));
                c9.fillStyle = colorWhite;
                c9.fillRect(0, 0, C, 1);
                c9.fillRect(0, 0, 1, t);
                c9.fillRect(4 * t, 0, 1, t);
                c9.fillRect(0, t - 1, C, 1);
                c9.fillRect(C - 1, 0, 1, t);
                c9.font = l;
                c9.textBaseline = cA;
                c9.textAlign = cB;
                c9.fillText(InGameMenuItems[0], 2 * t, .54 * t);
                C = .4 * t;
                fZ.lh(ld + 4 * t + (1.5 * t - C) / 2, eD.f6 + .3 * t, C);
                x(1, fZ.fa(localPlayerID) ? colorWhite : lj);
                2 <= as.lc && x(2, colorWhite);
                c9.setTransform(1, 0, 0, 1, 0, 0)
            } else
                c9.drawImage(n, ld, eD.f6)
        }
            ;
        this.fa = function (C) {
            return 0 !== f1[C] && 2 !== fK && (isSingleplayer || 2 === ci)
        }
            ;
        this.lh = function (C, B, F) {
            c9.setTransform(1, 0, 0, 1, C, B);
            c9.lineWidth = 2;
            c9.strokeStyle = colorWhite;
            c9.beginPath();
            c9.moveTo(0, 0);
            c9.lineTo(F, F);
            c9.moveTo(0, F);
            c9.lineTo(F, 0);
            c9.stroke()
        }
    }
    function jb() {
        function g() {
            return eD.m4(dw.m2()) ? eE.kl ? eD.f6 - eD.co - 2 * z : eD.f6 - z : eE.kl ? s - eD.co - (b_IsUISmall ? 3 : 2) * z : s - z
        }
        function PrintTextIntoChat(Size, ChatMessage, D, TextColor, BackgroundColor, L, O, P) {
            var W = 1E3 <= D;
            var V = D - 1E3;
            var N = Math.floor(bu.measureText(ChatMessage, dw.bs) + 1.5 * y + (W ? l : 1.5 * y));
            var chatCanvas = document.createElement("canvas");
            chatCanvas.width = N;
            chatCanvas.height = l;
            var chatCanvasContext = chatCanvas.getContext("2d", {
                alpha: true
            });
            chatCanvasContext.font = dw.bs;
            chatCanvasContext.textBaseline = cA;
            chatCanvasContext.textAlign = m8;
            chatCanvasContext.clearRect(0, 0, N, l);
            chatCanvasContext.fillStyle = L;
            chatCanvasContext.fillRect(0, 0, N, l);
            chatCanvasContext.fillStyle = BackgroundColor;
            chatCanvasContext.fillText(ChatMessage, Math.floor(1.5 * y), Math.floor(l / 2));
            W && (W = l / a5.bt,
                chatCanvasContext.imageSmoothingEnabled = true,
                chatCanvasContext.setTransform(W, 0, 0, W, N - l, 0),
                chatCanvasContext.drawImage(a5.ke[V], 0, 0));
            n.unshift({
                gL: Size,
                l: ChatMessage,
                id: D,
                player: TextColor,
                lO: chatCanvas,
                lw: BackgroundColor,
                lx: L,
                bt: N,
                ly: O,
                lz: P
            })
        }
        function x(G, H) {
            var D;
            var K = 0;
            var I = n.length;
            for (D = 0; D < I; D++)
                if (n[D].id === G && (K++,
                    K >= H)) {
                    n.splice(D, 1);
                    break
                }
        }
        function t(G, H) {
            var D;
            var K = false;
            for (D = n.length - 1; 0 <= D; D--)
                n[D].id !== G || H !== b0 && n[D].player !== H || (n.splice(D, 1),
                    K = true);
            return K
        }
        var n;
        var l;
        var z;
        var y;
        var A;
        var conqueeredPlayers;
        var RecentlyLeft;
        var F;
        var E;
        var J;
        this.InitializeMap = function () {
            E = 0;
            F = b_IsUISmall ? 7 : 12;
            conqueeredPlayers = [];
            RecentlyLeft = [];
            n = [];
            this.lT();
            fN && this.fX(0, 18);
            var AnnounceMapText = "Map: " + jP.br(mc).mP;
            PrintTextIntoChat(300, AnnounceMapText, 6, 0, colorWhite, colorBlack75opaque, -1, false)
        }
            ;
        this.lT = function () {
            l = Math.floor((b_IsUISmall ? .031 : .0249) * bi);
            l = 10 > l ? 10 : l;
            this.bq = Math.floor(2 * l / 3);
            this.bs = bl + this.bq + bm;
            z = ld;
            y = Math.floor(l / 5);
            if (0 < n.length) {
                var G = n;
                n = [];
                for (var H = G.length - 1; 0 <= H; H--)
                    PrintTextIntoChat(G[H].gL, G[H].l, G[H].id, G[H].player, G[H].lw, G[H].lx, G[H].ly, G[H].lz)
            }
            this.m0()
        }
            ;
        this.m0 = function () {
            J = document.createElement("canvas");
            A = bu.measureText("Accept", this.bs) + 5 * y;
            J.height = l;
            J.width = A;
            var G = J.getContext("2d", {
                alpha: true
            });
            G.font = this.bs;
            G.textBaseline = cA;
            G.textAlign = cB;
            G.clearRect(0, 0, A, l);
            G.fillStyle = m1;
            G.fillRect(0, 0, A, l);
            G.fillStyle = colorWhite;
            G.fillText("Accept", Math.floor(A / 2), Math.floor(l / 2))
        }
            ;
        this.m2 = function () {
            if (eE.kl)
                return eE.bt;
            var G = n.length;
            return 0 === G ? 0 : 1 === G ? n[0].bt : FindMax(n[0].bt, n[1].bt)
        }
            ;
        this.bz = function (G, H) {
            for (D = g(), I = n.length - 1, void 0; 0 <= I; I--) {
                var D;
                var K;
                var I;
                if (K = D - (I + 1) * l,
                    H >= K && H < K + l) {
                    if (50 === n[I].id) {
                        if (G >= fx - A - z - n[I].bt)
                            return G >= fx - A - z ? (I = n[I].player,
                                this.PrintEventNonAggressionPact(I, 0),
                                iU.l8(I)) : eH.gO(n[I].player, 800, false, 0),
                                true;
                        break
                    }
                    if (G >= fx - n[I].bt - z)
                        return n[I].lz && (eH.gO(n[I].player, 800, false, 0),
                            0 <= n[I].ly && (D = n[I].ly,
                                n[I].ly = n[I].player,
                                n[I].player = D)),
                            true;
                    break
                }
            }
            return false
        }
            ;
        this.ig = function (G) {
            for (var H = n.length - 1; 0 <= H; H--)
                n[H].id === G && (n[H].gL = 1)
        }
            ;
        this.fX = function (eventPlayerID, eventID) {
            if (0 === eventID)
                as.at[eventPlayerID < ci ? 4 : 3]++,
                    bu.cI(eventPlayerID, 0),
                    PrintTextIntoChat(b_IsUISmall ? 100 : 160, "You conquered " + mpPlayerArray[eventPlayerID] + ".", 0, eventPlayerID, "rgb(10,220,10)", colorBlack75opaque, -1, false);
            else if (1 === eventID)
                t(50, b0),
                    bu.cI(eventPlayerID, 1),
                    PrintTextIntoChat(360, "You were conquered by " + mpPlayerArray[eventPlayerID] + ".", 0, eventPlayerID, "rgb(255,40,40)", colorBlack75opaque, -1, true),
                    eH.gO(eventPlayerID, 2700, true, 0);
            else if (2 === eventID)
                bu.cI(eventPlayerID, 2),
                    PrintTextIntoChat(0, "Congratulations! You won the game.", 0, eventPlayerID, "rgb(10,255,255)", colorBlack75opaque, -1, true),
                    eH.gO(eventPlayerID, 2700, true, 0);
            else if (3 === eventID)
                bu.cI(eventPlayerID, 2),
                    PrintTextIntoChat(0, mpPlayerArray[eventPlayerID] + " won the game.", 0, eventPlayerID, colorWhite, colorBlack75opaque, -1, true),
                    eH.gO(eventPlayerID, 2700, true, 0);
            else if (4 === eventID) {
                ia--;
                iZ--;
                var CountRecentlyLeft = RecentlyLeft.length;
                if (32 <= ia || 0 < CountRecentlyLeft) {
                    var K = bw.dL();
                    RecentlyLeft.push(K);
                    RecentlyLeft.push(eventPlayerID);
                    2 < CountRecentlyLeft && (RecentlyLeft[0] < K - 140 || 2 === fK) && (PrintTextIntoChat(180, mpPlayerArray[eventPlayerID] + " and " + Math.floor(CountRecentlyLeft / 2) + " other players left the game.", 4, eventPlayerID, colorWhite, colorBlack75opaque, -1, false),
                        RecentlyLeft = [])
                } else
                    PrintTextIntoChat(180, mpPlayerArray[eventPlayerID] + " left the game.", 4, eventPlayerID, colorWhite, colorBlack75opaque, -1, true)
            } else
                5 === eventID ? (x(1, 5),
                    dx.mC(eventPlayerID) ? PrintTextIntoChat(180, mpPlayerArray[eventPlayerID] + " has broken the non-aggression pact and invades you!", 1, eventPlayerID, "rgb(255,200,180)", colorBlack75opaque, -1, true) : PrintTextIntoChat(180, mpPlayerArray[eventPlayerID] + " is attacking you!", 1, eventPlayerID, "rgb(255,70,10)", colorBlack75opaque, -1, true)) : 18 === eventID ? PrintTextIntoChat(255, "Choose your start position!", 18, 0, colorWhite, colorBlack75opaque, -1, false) : 21 === eventID ? PrintTextIntoChat(220, "You surrendered!", eventID, 0, "rgb(255,40,40)", colorBlack75opaque, -1, false) : 22 === eventID && PrintTextIntoChat(5 < ci ? 80 : 220, mpPlayerArray[eventPlayerID] + " surrendered!", eventID, eventPlayerID, "rgb(10,220,10)", colorBlack75opaque, -1, true)
        }
            ;
        this.PrintErrorIntoChat = function (errorText) {
            PrintTextIntoChat(200, "Error [" + errorText + "]", 94, 0, colorWhite, mF, -1, false)
        }
            ;
        this.iT = function (G) {
            bu.cI(G, 2);
            512 > ci ? PrintTextIntoChat(0, mpPlayerArray[G] + " won the game.", 3, G, colorWhite, colorBlack75opaque, -1, true) : PrintTextIntoChat(0, mpPlayerArray[G] + " has been immortalized!", 3, G, colorWhite, colorBlack75opaque, -1, true);
            eH.gO(G, 2700, true, 0)
        }
            ;
        this.MessageEventHandler = function (messageSenderID, messageTargetID, message) {
            messageSenderID === localPlayerID ? PrintTextIntoChat(175, " Message to " + mpPlayerArray[messageTargetID] + ": ", 1E3 + message, messageTargetID, colorWhite, colorBlack75opaque, -1, true) : this.PrintReceivedMessage(messageSenderID, message)
        }
            ;
        this.PrintReceivedMessage = function (messageSenderID, message) {
            var D;
            var K = 0;
            PrintTextIntoChat(175, mpPlayerArray[messageSenderID] + ": ", 1E3 + message, messageSenderID, colorWhite, "rgba(5,60,25,0.9)", -1, true);
            for (D = 0; D < n.length; D++)
                if (1E3 <= n[D].id && n[D].player === messageSenderID && (K++,
                    3 < K)) {
                    n.splice(D, 1);
                    break
                }
        }
            ;
        this.PrintInfectionEnding = function (eventChatMessage) {
            var H = dN.iQ[eF.mN()];
            eventChatMessage ? (9 === gameMode ? (eventChatMessage = "The Resistance defeated the virus.",
                bu.mO("The Resistance", 2, 1, 12)) : eventChatMessage = "Congratulations! Team " + dN.bg[H] + " has won the game!",
                PrintTextIntoChat(0, eventChatMessage, 40, 0, "rgb(10,220,10)", colorBlack75opaque, -1, false)) : (9 === gameMode ? (eventChatMessage = "Mankind lost the war against the virus.",
                    bu.mO("The Virus", 2, 0, 16)) : eventChatMessage = "Our alliance has been defeated!",
                    PrintTextIntoChat(0, eventChatMessage, 41, 0, "rgb(200,80,80)", colorBlack75opaque, -1, false));
            9 !== gameMode && bu.mO("Team " + dN.bg[H], 2, 1, 12);
            eH.gX(2700)
        }
            ;
        this.PrintVersusModeBeginning = function (versusPlayerArray) {
            PrintTextIntoChat(300, versusPlayerArray[0].mP + " [" + iN.ht(versusPlayerArray[0].hq) + "] vs " + versusPlayerArray[1].mP + " [" + iN.ht(versusPlayerArray[1].hq) + "]", 65, 0, colorBlack, "rgba(100,255,255,0.75)", -1, false)
        }
            ;
        this.mQ = function (G) {
            PrintTextIntoChat(200, G, 0, 0, "rgb(40,255,200)", "rgba(10,60,40,0.9)", -1, false)
        }
            ;
        this.hv = function (G, H, D, K) {
            1 === low_level_websocket.mS && (PrintTextIntoChat(0, G[0].mP + ": " + iN.ht(G[0].hq) + " -> " + H, 66, 0, colorWhite, K[0], -1, false),
                PrintTextIntoChat(0, G[1].mP + ": " + iN.ht(G[1].hq) + " -> " + D, 66, 1, colorWhite, K[1], -1, false))
        }
            ;
        this.PrintVersusModeEnding = function (WinnerName) {
            1 === low_level_websocket.mS && PrintTextIntoChat(0, "[" + WinnerName + "] has won " + ci + (ir ? " x 2" : "") + " points!", 45, 0, "rgb(225,240,255)", colorBlack75opaque, -1, false)
        }
            ;
        this.PrintEventNonAggressionPact = function (eventPlayerID, H) {
            0 === H ? t(50, eventPlayerID) ? (PrintTextIntoChat(128, "You signed a non-aggression pact with " + mpPlayerArray[eventPlayerID] + ".", 52, eventPlayerID, colorWhite, colorBlack75opaque, -1, true),
                dx.mU(eventPlayerID, 2, 255)) : PrintTextIntoChat(384, "You asked " + mpPlayerArray[eventPlayerID] + " to sign a non-aggression pact.", 51, eventPlayerID, colorWhite, colorBlack75opaque, -1, true) : t(51, eventPlayerID) ? (PrintTextIntoChat(128, mpPlayerArray[eventPlayerID] + " accepted the non-aggression pact.", 52, eventPlayerID, colorWhite, "rgba(60,120,10,0.9)", -1, true),
                    dx.mU(eventPlayerID, 2, 255)) : (PrintTextIntoChat(384, mpPlayerArray[eventPlayerID] + " requests a non-aggression pact.", 50, eventPlayerID, colorWhite, "rgba(90,90,90,0.9)", -1, true),
                        dx.mU(eventPlayerID, 2, 96))
        }
            ;
        this.PrintAskAttack = function (askedTargetsArray, targetPlayerID) {
            1 < askedTargetsArray.length ? PrintTextIntoChat(230, "You asked " + askedTargetsArray.length + " players to attack " + mpPlayerArray[targetPlayerID] + ".", 66, targetPlayerID, colorWhite, colorBlack75opaque, -1, true) : PrintTextIntoChat(230, "You asked " + mpPlayerArray[askedTargetsArray[0]] + " to attack " + mpPlayerArray[targetPlayerID] + ".", 66, askedTargetsArray[0], colorWhite, colorBlack75opaque, targetPlayerID, true)
        }
            ;
        this.PrintSomeoneAsksYouAttack = function (eventPlayerID, targetPlayerID) {
            2 * landSizeArray[eventPlayerID] > 3 * landSizeArray[localPlayerID] ? PrintTextIntoChat(230, mpPlayerArray[eventPlayerID] + " orders you to attack " + mpPlayerArray[targetPlayerID] + "!", 66, eventPlayerID, colorWhite, "rgba(80,40,5,0.9)", targetPlayerID, true) : PrintTextIntoChat(230, mpPlayerArray[eventPlayerID] + " asks you to attack " + mpPlayerArray[targetPlayerID] + ".", 66, eventPlayerID, colorWhite, "rgba(80,70,5,0.9)", targetPlayerID, true)
        }
            ;
        this.l6 = function (G, H) {
            var D;
            for (D = n.length - 1; 0 <= D; D--)
                if (n[D].id === G && n[D].player === H)
                    return true;
            return false
        }
            ;
        this.mW = function (G, H, D) {
            var K;
            for (K = n.length - 1; 0 <= K; K--)
                if (n[K].id === G && (n[K].player === H && n[K].ly === D || n[K].player === D && n[K].ly === H))
                    return true;
            return false
        }
            ;
        this.l0 = function () {
            100 <= TroopBalance[localPlayerID] || PrintTextIntoChat(80, "Your balance is too low!", 9, 0, colorWhite, colorBlack75opaque, -1, false)
        }
            ;
        this.PrintBoostError = function () {
            PrintTextIntoChat(80, "Boosting is disallowed in the first minute!", 9, 0, colorWhite, colorBlack75opaque, -1, false)
        }
            ;
        this.PrintExportEvent = function (G, H) {
            PrintTextIntoChat(200, "You exported " + eC.g2(G) + " resource" + (1 === G ? "" : "s") + " to " + mpPlayerArray[H] + ".", 30, H, "rgb(190,255,190)", colorBlack75opaque, -1, true)
        }
            ;
        this.PrintReceiveExportEvent = function (G, senderPlayerID) {
            var D = 200 - 20 * n.length;
            PrintTextIntoChat(80 > D ? 80 : D, mpPlayerArray[senderPlayerID] + " supported you with " + eC.g2(G) + " resource" + (1 === G ? "" : "s") + ".", 31, senderPlayerID, colorBlack, "rgba(205,255,205,0.9)", -1, true);
            x(31, b_IsUISmall ? 4 : 6)
        }
            ;
        this.PrintConqueerEvent = function (G, H) {
            var numConqueeredPlayers = conqueeredPlayers.length;
            if (32 <= ia - iZ || 0 < numConqueeredPlayers) {
                var K = bw.dL();
                conqueeredPlayers.push(K);
                conqueeredPlayers.push(G);
                2 < numConqueeredPlayers && (conqueeredPlayers[0] < K - 140 || 2 === fK) && (PrintTextIntoChat(260, mpPlayerArray[G] + " and " + Math.floor(numConqueeredPlayers / 2) + " other players were conquered.", 7, G, colorWhite, colorBlack75opaque, -1, false),
                    conqueeredPlayers = [])
            } else
                PrintTextIntoChat(260, mpPlayerArray[G] + " was conquered by " + mpPlayerArray[H] + ".", 7, H, colorWhite, colorBlack75opaque, -1, true)
        }
            ;
        this.d6 = function () {
            var G;
            var H = n.length - F;
            H = 1 >= H ? 1 : H * H;
            for (G = n.length - 1; 0 <= G; G--)
                0 < n[G].gL && (n[G].gL -= H,
                    0 >= n[G].gL && n.splice(G, 1));
            if (128 !== E && (E++,
                !(128 > E)))
                for (G = 5,
                    H = dP - 1; 0 <= H; H--)
                    1 === kn[dQ[H]] && 0 < G-- && PrintTextIntoChat(240, mpPlayerArray[dQ[H]] + " joined the game.", 1, dQ[H], colorBlack, "rgba(255,255,255,0.75)", -1, true)
        }
            ;
        this.c8 = function () {
            for (G = g(), D = n.length - 1, void 0; 0 <= D; D--) {
                var G;
                var H;
                var D;
                H = G - (D + 1) * l,
                    50 === n[D].id ? (c9.drawImage(n[D].lO, fx - n[D].bt - A - z, H),
                        c9.drawImage(J, fx - A - z, H)) : c9.drawImage(n[D].lO, fx - n[D].bt - z, H)
            }
        }
    }
    function mf() {
        this.bq = this.mh = this.mg = this.hi = this.co = this.bt = 0;
        this.bk = -1;
        this.cookiesDialogRowsStrings = ["Accept Cookies", "More Information", "Decline"];
        this.colors = ["rgba(0,255,0,0.4)", "rgba(0,0,255,0.4)", "rgba(255,0,0,0.4)"];
        this.kl = false;
        this.bh = function () {
            this.lT();
            this.kl = 5 > d && !b && 0 === f.a0()
        }
            ;
        this.lT = function () {
            this.bt = Math.floor(2.8 * Math.floor((b_IsUISmall ? .09 : .062) * bi));
            this.co = Math.floor(1 * this.bt);
            this.hi = Math.floor(.06 * this.bt);
            this.hj = this.bt - 2 * this.hi;
            this.mg = this.hi;
            this.mh = (this.co - (this.lP.length + 1) * this.mg) / this.lP.length;
            this.bq = Math.floor(.3 * this.mh)
        }
            ;
        this.bz = function (g, k) {
            if (!this.kl)
                return false;
            var x = this.mj(g, k);
            if (-1 === x)
                return false;
            0 === x ? (f.mk(2),
                this.kl = false) : 1 === x ? ml.bh(mm, true) : 2 === x && (f.mk(1),
                    this.kl = false);
            return bw.bx = true
        }
            ;
        this.lK = function (g, k) {
            if (!this.kl)
                return false;
            var x = this.bk;
            this.bk = this.mj(g, k);
            x !== this.bk && (bw.bx = true);
            return -1 !== this.bk
        }
            ;
        this.mj = function (g, k) {
            g -= c2;
            k -= Math.floor(c3 - this.co - c2);
            if (0 > g || 0 > k || g >= this.bt || k >= this.co)
                return -1;
            var x = Math.floor((k - .5 * this.mg) / ((this.co - this.mg) / this.cookiesDialogRowsStrings.length));
            return 0 > x ? 0 : x >= this.cookiesDialogRowsStrings.length ? this.cookiesDialogRowsStrings.length - 1 : x
        }
            ;
        this.c8 = function () {
            this.kl && this.DrawCookiesDialog()
        }
            ;
        this.DrawCookiesDialog = function () {
            var g = c2;
            var k = Math.floor(c3 - this.co - c2);
            c9.setTransform(1, 0, 0, 1, g, k);
            c9.fillStyle = colorBlack75opaque;
            c9.fillRect(0, 0, this.bt, this.co);
            c9.textBaseline = cA;
            c9.textAlign = cB;
            c9.strokeStyle = colorWhite;
            c9.font = bl + this.bq + bm;
            c9.strokeRect(0, 0, this.bt, this.co);
            for (var x = this.cookiesDialogRowsStrings.length - 1; 0 <= x; x--)
                c9.setTransform(1, 0, 0, 1, g + this.hi, k + this.mg + x * (this.mg + this.mh)),
                    c9.fillStyle = this.colors[x],
                    c9.fillRect(0, 0, this.hj, this.mh),
                    this.bk === x && (c9.fillStyle = mo,
                        c9.fillRect(0, 0, this.hj, this.mh)),
                    c9.fillStyle = colorWhite,
                    c9.fillText(this.cookiesDialogRowsStrings[x], this.hj / 2, .54 * this.mh),
                    c9.strokeRect(0, 0, this.hj, this.mh);
            c9.setTransform(1, 0, 0, 1, 0, 0)
        }
    }
    function jc() {
        function g(y) {
            return 10 > y ? "0" + y : String(y)
        }
        var textConquestCounter;
        var secondsLeft;
        var t;
        var n;
        var l;
        var z;
        this.bh = function () {
            void 0 === n && this.lT();
            this.setTime()
        }
            ;
        this.lT = function () {
            n = Math.floor((b_IsUISmall ? .53 : .36) * bi);
            l = Math.floor(.065 * n);
            z = bl + Math.floor(.9 * l) + bm;
            t--;
            this.setTime()
        }
            ;
        this.d6 = function () {
            this.setTime() && (bw.bx = true)
        }
            ;
        this.setTime = function () {
            var date = new Date;
            var minsNow = date.getUTCMinutes();
            var secsNow = date.getUTCSeconds();
            secondsLeft = 3600 - 60 * minsNow - secsNow;
            secondsLeft %= 900;
            textConquestCounter = "Next Contest: " + g(Math.floor(secondsLeft / 60)) + ":" + g(secondsLeft % 60);
            date = t;
            t = 60 * minsNow + secsNow;
            if (date === t)
                return false;
            n = bu.measureText(textConquestCounter, z);
            n += Math.floor(.4 * l);
            return true
        }
            ;
        this.DrawConquestCounter = function () {
            c9.lineWidth = 1 + Math.floor(l / 15);
            c9.translate(fx - l, Math.floor(.5 * (c3 + n)));
            c9.rotate(-Math.PI / 2);
            c9.fillStyle = colorWhite;
            c9.fillRect(0, 0, n, l);
            c9.strokeStyle = colorBlack;
            c9.strokeRect(0, 0, n, l + 10);
            c9.fillStyle = colorBlack;
            c9.font = z;
            c9.textBaseline = cA;
            c9.textAlign = cB;
            c9.fillText(textConquestCounter, Math.floor(n / 2), Math.floor(.59 * l));
            c9.setTransform(1, 0, 0, 1, 0, 0)
        }
    }
    function mx() {
        this.my = 10;
        this.n0 = this.mz = 50;
        this.n1 = 8;
        this.n2 = this.mz + this.n0;
        this.a6 = this.mz + this.n0 + this.n1;
        this.bt = 72;
        this.n4 = this.n3 = 0;
        this.ke = Array(this.a6);
        this.n5 = 8;
        this.n6 = Array(this.mz + this.n0);
        this.n7 = Array(this.mz + this.n0);
        this.ew = this.ev = 0;
        this.zoom = 1;
        this.n8 = .2;
        this.lD = 0;
        this.n9 = this.a7 = null;
        this.nA = 0;
        this.bh = function () {
            var g;
            this.a7 = Array(this.a6);
            this.n9 = Array(this.a6);
            var k = bo.ki("emojis");
            this.nC();
            for (g = this.lD = 0; g < this.mz; g++)
                this.nD(g, g, k);
            k = bo.ki("flags");
            for (g = 0; g < this.n0; g++)
                this.nD(g, this.mz + g, k);
            this.nF();
            this.ke[26] = this.nG(25, 2);
            this.nH()
        }
            ;
        this.nD = function (g, k, x) {
            this.a7[k] = false;
            this.n9[k] = 0;
            var t = document.createElement("canvas");
            t.width = this.bt;
            t.height = this.bt;
            var n = t.getContext("2d", {
                alpha: true
            });
            n.clearRect(0, 0, this.bt, this.bt);
            23 === k ? n.drawImage(hY.kc[2], 0, 0) : 36 === k ? n.drawImage(hY.kc[0], 0, 0) : 49 === k ? n.drawImage(hY.kc[1], 0, 0) : n.drawImage(x, this.bt * g % (g === k ? this.my * this.bt : 4E3), g === k ? ak(g, this.my) * this.bt : 0, this.bt, this.bt, 0, 0, this.bt, this.bt);
            this.ke[k] = t
        }
            ;
        this.nF = function () {
            this.ke[this.a6 - 5] = this.ke[26];
            this.ke[this.a6 - 4] = this.nG(this.a6 - 5, 2);
            this.ke[this.a6 - 1] = this.nG(this.a6 - 5, 1);
            this.ke[this.a6 - 8] = this.nG(this.a6 - 4, 1);
            this.ke[this.a6 - 3] = this.ke[39];
            this.ke[this.a6 - 2] = this.nG(this.a6 - 3, 1);
            this.ke[this.a6 - 7] = this.nG(this.a6 - 2, 1);
            this.ke[this.a6 - 6] = this.nG(this.a6 - 7, 1)
        }
            ;
        this.nG = function (g, k) {
            var x = document.createElement("canvas");
            x.width = this.bt;
            x.height = this.bt;
            var t = x.getContext("2d", {
                alpha: true
            });
            t.clearRect(0, 0, this.bt, this.bt);
            t.rotate(k * Math.PI / 2);
            t.drawImage(this.ke[g], 1 === k ? 0 : -this.bt, -this.bt);
            return x
        }
            ;
        this.nH = function () {
            var g = u().split("");
            if (2 * g.length !== this.a6)
                this.lD = 0;
            else {
                for (var k = 0; k < this.a6; k += 2) {
                    var x = parseInt(g[Math.floor(k / 2)]);
                    this.a7[k] = 1 === x % 2;
                    this.a7[k + 1] = 1 < x
                }
                this.nK()
            }
        }
            ;
        this.nK = function () {
            for (var g = this.lD = 0; g < this.a6; g++)
                this.a7[g] && (this.n9[this.lD++] = g)
        }
            ;
        this.kr = function () {
            8 === this.lD && this.n9[0] === this.n2 && this.nK()
        }
            ;
        this.nL = function () {
            this.lD = this.n1;
            for (var g = 0; g < this.n1; g++)
                this.n9[g] = this.n2 + g
        }
            ;
        this.nC = function () {
            this.n3 = Math.floor((b_IsUISmall ? .075 : .0468) * bi);
            this.zoom = this.n3 / this.bt;
            this.n4 = (1 + this.n8) * this.n3
        }
            ;
        this.show = function (g, k) {
            if (1 > this.lD)
                return false;
            this.nA = bw.gL;
            var x = Math.floor(fx / this.n4);
            x = 3 > x ? 3 : x > this.n5 ? this.n5 : x;
            x = this.lD > x ? x : this.lD;
            var t = 1 + ak(this.lD - 1, x);
            var n = Math.floor(x * this.n4);
            var l = Math.floor(g - n / 2);
            l = l + n > fx ? fx - n : l;
            l = 0 > l ? 0 : l;
            var z = Math.floor(k - this.n4 / 2);
            t = Math.floor(t * this.n4);
            z = z + t > c3 ? c3 - t : z;
            z = 0 > z ? 0 : z;
            this.ev = l + n;
            this.ew = z + t;
            for (n = 0; n < this.lD; n++)
                this.n6[n] = Math.floor(l + n % x * this.n4),
                    this.n7[n] = Math.floor(z + ak(n, x) * this.n4);
            return true
        }
            ;
        this.kp = function (g, k) {
            return !(g < this.n6[0] || k < this.n7[0] || g >= this.ev || k >= this.ew)
        }
            ;
        this.kq = function (g, k, x) {
            if (x === localPlayerID && this.nA + 190 > bw.gL)
                return false;
            for (var t = this.lD - 1; 0 <= t; t--)
                if (g >= this.n6[t] && k >= this.n7[t]) {
                    if (39 === this.n9[t])
                        return this.nL(),
                            this.show(g, k),
                            true;
                    isSingleplayer ? dx.mU(localPlayerID, 0, this.n9[t]) : x === localPlayerID ? iU.nP(this.n9[t]) : iU.nQ(this.n9[t], x);
                    this.nK();
                    break
                }
            return false
        }
            ;
        this.nR = function (g) {
            return 16 > g || 40 <= g && 47 > g
        }
            ;
        this.nS = function (g) {
            return g >= this.mz && g < this.mz + this.n0
        }
            ;
        this.c8 = function () {
            c9.imageSmoothingEnabled = true;
            for (g = this.n8 * this.n3 / 2, k = this.lD - 1, void 0; 0 <= k; k--) {
                var g;
                var k;
                c9.setTransform(this.zoom, 0, 0, this.zoom, this.n6[k] + g, this.n7[k] + g),
                    c9.drawImage(this.ke[this.n9[k]], 0, 0);
            }
            c9.imageSmoothingEnabled = false;
            c9.setTransform(1, 0, 0, 1, 0, 0)
        }
            ;
        this.nT = function (g, k, x) {
            c9.imageSmoothingEnabled = true;
            c9.setTransform(this.zoom, 0, 0, this.zoom, g, k);
            c9.drawImage(this.ke[x], 0, 0);
            c9.imageSmoothingEnabled = false;
            c9.setTransform(1, 0, 0, 1, 0, 0)
        }
    }
    var colorBlack = "rgb(0,0,0)";
    var nU = "rgba(0,0,0,0.7)";
    var nV = "rgba(0,0,0,0.5)";
    var lV = "rgba(0,0,0,0.5)";
    var colorBlack75opaque = "rgba(0,0,0,0.75)";
    var nW = "rgba(0,0,0,0.85)";
    var nX = "rgba(0,96,96,0.75)";
    var nY = "rgb(255,255,255)";
    var lj = "rgb(128,128,128)";
    var nZ = "rgb(30,255,30)";
    var na = "rgb(0,200,0)";
    var nb = "rgb(0,255,0)";
    var nc = "rgba(0,255,0,0.6)";
    var nd = "rgba(0,255,0,0.5)";
    var ne = "rgba(0,200,0,0.5)";
    var m1 = "rgba(0,100,0,0.75)";
    var nf = "rgba(0,40,0,0.8)";
    var ng = "rgb(128,255,128)";
    var nh = "rgba(255,255,150,0.2)";
    var ni = "rgba(0,255,0,0.3)";
    var lW = "rgba(255,255,255,0.3)";
    var nj = "rgba(0,40,90,0.75)";
    var nk = "rgba(220,0,0,0.6)";
    var nl = "rgba(255,100,100,0.8)";
    var mF = "rgba(100,0,0,0.85)";
    var nm = "rgba(60,0,0,0.85)";
    var nn = "rgb(255,120,120)";
    var no = "rgb(255,160,160)";
    var np = "rgb(255,70,70)";
    var nq = "rgb(230,0,0)";
    var nr = "rgba(0,60,60,0.85)";
    var ns = "rgb(160,160,255)";
    var colorWhite = "rgb(255,255,255)";
    var nt = "rgba(255,255,255,0.6)";
    var nu = "rgba(255,255,255,0.4)";
    var mo = "rgba(255,255,255,0.25)";
    var nv = "rgba(255,255,255,0.85)";
    var nw = "rgba(255,255,255,0.75)";
    var nx = "rgb(255,120,100)";
    var ny = "rgba(255,255,0,0.5)";
    var cA = "middle";
    var nz = "bottom";
    var cB = "center";
    var m8 = "left";
    var o0 = "right";
    var bl = "bold ";
    var o1 = "lighter ";
    var o2 = "italic ";
    var o3 = "normal ";
    var bm = "px Arial";
    var o4 = [bl, o2 + bl, o1];
    var o5 = "https://play.google.com/store/apps/details?id=territorial.io";
    var o6 = "https://apps.apple.com/app/id1581110913";
    var o7 = "https://www.youtube.com/watch?v=toZTQ8aRdFc";
    var o8 = "https://discord.gg/pa5TH6hZrv";
    var o9 = "https://www.instagram.com/davidtschacher/";
    var mm = "https://territorial.io/cookie_policy";
    var oA = "https://territorial.io/privacy_policy";
    var oB = "https://territorial.io/tutorial";
    var oC = ["https://territorial.io/players", "https://territorial.io/clans"];
    var ld;
    var oD;
    var c2;
    var oE;
    var oF;
    var oG;
    var oH;
    var c4;
    var oI = ["wss://", "/s50/", "/s51/", "/s52/"];
    function oJ() {
        oK();
        oE = 3;
        c4 = new oL;
        c4.bh()
    }
    function oM() {
        mainCanvas.addEventListener("mousedown", MouseDownListener);
        mainCanvas.addEventListener("mousemove", MouseMoveListener);
        mainCanvas.addEventListener("mouseup", MouseUpListener);
        mainCanvas.addEventListener("mouseleave", MouseLeaveListener);
        mainCanvas.addEventListener("wheel", MouseWheelListener);
        mainCanvas.addEventListener("touchstart", TouchStartListener);
        mainCanvas.addEventListener("touchmove", TouchMoveListener);
        mainCanvas.addEventListener("touchend", TouchEndListener);
        mainCanvas.addEventListener("touchcancel", TouchCancelListener);
        oF = false
    }
    function oK() {
        c2 = Math.floor((b_IsUISmall ? .02 : .01152) * bi);
        c2 = 2 > c2 ? 2 : c2;
        ld = Math.floor((b_IsUISmall ? .0114 : .01296) * bi);
        ld = 2 > ld ? 2 : ld;
        oD = Math.floor(.005 * oX);
        oD = 1 > oD ? 1 : oD
    }
    function MouseDownListener(event) {
        event.preventDefault();
        oF || (low_level_websocket.oZ(low_level_websocket.jE),
            oa(Math.floor(event.clientX), Math.floor(event.clientY)))
    }
    function TouchStartListener(event) {
        event.preventDefault();
        low_level_websocket.oZ(low_level_websocket.jE);
        oF = true;
        0 < event.touches.length && (oG = Math.floor(event.touches[0].clientX),
            oH = Math.floor(event.touches[0].clientY),
            jR.ob(event) || oa(oG, oH))
    }
    function oa(g, k) {
        if (0 === fK)
            jL.bz(g, k);
        else if (!(hZ.bz(g, k) || hY.kk(g, k) || eI.bz(g, k) || eC.bz(g, k))) {
            var x = fZ.bz(g, k);
            2 === x || e9.bz(g, k) || (gR.bz(g, k) ? bw.bx = true : eD.od(g, k) ? (gR.gS = false,
                eD.oe(g, k) && (bw.bx = true)) : dw.bz(g, k) || eE.bz(g, k) || 0 === x && hY.km(g, k))
        }
    }
    function MouseMoveListener(event) {
        oF = false;
        event.preventDefault();
        of(Math.floor(event.clientX), Math.floor(event.clientY))
    }
    function TouchMoveListener(event) {
        event.preventDefault();
        0 < event.touches.length && (oG = Math.floor(event.touches[0].clientX),
            oH = Math.floor(g.touches[0].clientY),
            jR.og(event) || of(oG, oH))
    }
    function of(g, k) {
        0 === fK ? jL.lK(g, k) : hZ.lK(g) || (hY.kl() ? hY.lK(g, k) : fZ.lK(g, k) || (eD.oh ? eD.lK(g, k) && (bw.bx = true) : (e9.lK(g, k),
            gR.gS && gR.lK(g, k) && (bw.bx = true))))
    }
    function MouseLeaveListener(event) {
        event.preventDefault();
        0 === fK ? (jL.l9(-1024, -1024),
            jI.oi()) : (e9.oj(-1024, -1024),
                fZ.lK(-1024, -1024),
                eD.ok(),
                gR.gS && (gR.gS = false))
    }
    function MouseUpListener(event) {
        event.preventDefault();
        oF || ol(Math.floor(event.clientX), Math.floor(event.clientY))
    }
    function TouchEndListener(event) {
        event.preventDefault();
        event && event.touches && 0 < event.touches.length && 0 !== fK ? gR.gS = false : ol(oG, oH)
    }
    function TouchCancelListener(event) {
        event.preventDefault();
        ol(oG, oH)
    }
    function ol(g, k) {
        0 === fK ? jL.l9(g, k) : (e9.oj(g, k),
            hZ.oj(),
            eD.ok(),
            gR.gS = false,
            hY.l9(g, k) && (bw.bx = true))
    }
    function MouseWheelListener(event) {
        event.preventDefault();
        low_level_websocket.oZ(low_level_websocket.jE);
        var k = Math.floor(event.clientX);
        var x = Math.floor(event.clientY);
        var t = event.deltaY;
        1 === event.deltaMode && (t *= 20);
        0 === fK ? jL.om(k, x, t) : e9.om(k, x, t) || (eD.od(k, x) ? eD.om(t) && (bw.bx = true) : gR.om(k, x, 2 * t) && (bw.bx = true))
    }
    function on(g, k, x) {
        g.fillStyle = colorWhite;
        g.fillRect(0, 0, k, 1);
        g.fillRect(0, x - 1, k, 1);
        g.fillRect(0, 0, 1, x);
        g.fillRect(k - 1, 0, 1, x)
    }
    function jd() {
        function g(B) {
            var F = l[B].lO.width;
            l[B].hb.clearRect(0, 0, F, A);
            l[B].hb.fillStyle = 0 !== l[B].id ? "rgba(33,33,120,0.83)" : l[B].cE === b0 ? "rgba(88,88,88,0.83)" : l[B].cE < ci ? "rgba(100,70,33,0.83)" : "rgba(33,100,80,0.83)";
            l[B].hb.fillRect(0, 0, F, A);
            on(l[B].hb, F, A);
            F > z + 2 * A && (l[B].hb.fillRect(F - z - A, 0, 1, A),
                l[B].hb.fillText(mpPlayerArray[l[B].cE], Math.floor((F - z) / 2), Math.floor(.57 * A)));
            var E = 0 !== l[B].id ? 0 : A;
            l[B].hb.fillText(eC.g2(l[B].cF), Math.floor(F - z / 2 - E), Math.floor(.57 * A));
            l[B].hb.fillStyle = nt;
            l[B].hb.fillRect(Math.floor(F - z - E), A - C, Math.floor(z * l[B].cF / l[B].p2), C);
            0 === l[B].id ? (k(B, F),
                l[B].hb.strokeStyle = ng,
                l[B].hb.fillRect(A, 0, 1, A),
                F -= A,
                l[B].hb.beginPath(),
                l[B].hb.moveTo(Math.floor(.3 * A + F), Math.floor(A / 2)),
                l[B].hb.lineTo(Math.floor(A - .3 * A + F), Math.floor(A / 2)),
                l[B].hb.stroke(),
                l[B].hb.beginPath(),
                l[B].hb.moveTo(Math.floor(A / 2 + F), Math.floor(.3 * A)),
                l[B].hb.lineTo(Math.floor(A / 2 + F), Math.floor(A - .3 * A)),
                l[B].hb.stroke()) : k(B, 2 * A)
        }
        function k(B, F) {
            l[B].hb.strokeStyle = l[B].p3 ? lj : no;
            l[B].hb.fillStyle = colorWhite;
            l[B].hb.fillRect(F - A, 0, 1, A);
            var E = Math.floor(A / 12);
            l[B].hb.lineWidth = 3 > E ? 3 : E;
            l[B].hb.lineCap = "round";
            F = A + 1;
            l[B].hb.beginPath();
            l[B].hb.moveTo(Math.floor(F - .35 * A), Math.floor(.35 * A));
            l[B].hb.lineTo(Math.floor(F - A + .35 * A), Math.floor(A - .35 * A));
            l[B].hb.stroke();
            l[B].hb.beginPath();
            l[B].hb.moveTo(Math.floor(F - A + .35 * A), Math.floor(.35 * A));
            l[B].hb.lineTo(Math.floor(F - .35 * A), Math.floor(A - .35 * A));
            l[B].hb.stroke()
        }
        function x(B) {
            B.lO = document.createElement("canvas");
            ou.font = y;
            var F = z;
            B.cE < b0 && 0 === B.id && (F += Math.floor(ou.measureText(mpPlayerArray[B.cE] + "000").width));
            F += A;
            0 === B.id && (F += A);
            B.lO.width = F;
            B.lO.height = A;
            B.hb = B.lO.getContext("2d", {
                alpha: true
            });
            B.hb.font = y;
            B.hb.textBaseline = cA;
            B.hb.textAlign = cB
        }
        function t(B) {
            return eB.pO() ? fx - l[B].lO.width - ld : eB.f5
        }
        function n(B) {
            return Math.floor(2 * ld + (eB.pO() ? dy.co + ld : 0) + eB.co + 1.3 * B * A)
        }
        var l;
        var z;
        var y;
        var A;
        var C;
        this.bh = function () {
            l = [];
            this.lT()
        }
            ;
        this.lT = function () {
            y = dw.bs;
            A = dw.bq + 5;
            A = Math.floor(1.25 * A);
            b_IsUISmall && (A = Math.floor(1.25 * A));
            C = Math.floor(.15 * A);
            ou.font = y;
            z = Math.floor(ou.measureText("02 000 000 0000").width);
            for (var B = l.length - 1; 0 <= B; B--)
                x(l[B]),
                    g(B)
        }
            ;
        this.eN = function () {
            for (var B = l.length - 1; 0 <= B; B--)
                l[B].ox && (l[B].ox = false,
                    g(B))
        }
            ;
        this.g2 = function (B) {
            if (1E3 > B)
                return 0 > B ? "-" + this.g2(Math.abs(B)) : B.toString();
            var F = Math.floor(Math.log(B + .5) / Math.log(10)) + 1;
            var E = Math.floor((F - 1) / 3);
            B = B.toString();
            for (J = B.substring(F - 3, F), G = 1, void 0; G < E; G++) {
                var J;
                var G;
                J = B.substring(F - 3 * (G + 1), F - 3 * G) + " " + J;
            }
            return B.substring(0, F - 3 * E) + " " + J
        }
            ;
        this.bz = function (B, F) {
            if (2 === fK || 0 === f1[localPlayerID] || ik)
                return false;
            var E;
            var J = b_IsUISmall ? A : 0;
            var G = b_IsUISmall ? Math.floor(.15 * A) : 0;
            for (E = l.length - 1; 0 <= E; E--) {
                var H = t(E);
                var D = n(E);
                var K = l[E].lO.width;
                if (F >= D - G && F <= D + A + G) {
                    if (B >= H - J && B <= H + A + J)
                        return l[E].p3 || (l[E].ox = true,
                            l[E].p3 = true,
                            0 === l[E].id ? isSingleplayer ? e3.f9(localPlayerID, l[E].cE) : iU.pH(l[E].cE === b0 ? localPlayerID : l[E].cE) : isSingleplayer ? e3.fB(localPlayerID, l[E].id) : iU.pI(l[E].id)),
                            true;
                    if (0 === l[E].id && B >= H + K - A - J && B <= H + K + J)
                        return isSingleplayer ? f7(localPlayerID, l[E].cE, eD.l1()) : iU.l2(eD.l1(), l[E].cE === b0 ? localPlayerID : l[E].cE),
                            true
                }
            }
            return false
        }
            ;
        this.d6 = function () {
            if (2 !== fK && 0 !== f1[localPlayerID] && !ik) {
                var B = aW.aX(localPlayerID);
                b: if (l.length !== B)
                    var F = true;
                else {
                    for (F = B - 1; 0 <= F; F--)
                        if (l[F].id !== aW.aY(localPlayerID, F) || l[F].cE !== aW.ad(localPlayerID, F)) {
                            F = true;
                            break b
                        }
                    F = false
                }
                if (F) {
                    var E;
                    var J = [];
                    F = 0;
                    b: for (; F < B; F++) {
                        var G = aW.aY(localPlayerID, F);
                        var H = aW.ad(localPlayerID, F);
                        for (E = 0; E < l.length; E++)
                            if (l[E].id === G && l[E].cE === H) {
                                J.push(l.splice(E, 1)[0]);
                                continue b
                            }
                        E = aW.ae(localPlayerID, F);
                        G = {
                            cE: H,
                            cF: E,
                            p2: E,
                            id: G,
                            ox: true,
                            p3: false,
                            lO: null,
                            hb: null
                        };
                        x(G);
                        J.push(G)
                    }
                    l = J
                }
                for (--B; 0 <= B; B--)
                    F = aW.ae(localPlayerID, B),
                        l[B].cF !== F && (l[B].cF = F,
                            l[B].p2 = F > l[B].p2 ? F : l[B].p2,
                            l[B].ox = true)
            }
        }
            ;
        this.c8 = function () {
            if (0 !== f1[localPlayerID] && !ik)
                for (var B = l.length - 1; 0 <= B; B--)
                    c9.drawImage(l[B].lO, t(B), n(B))
        }
    }
    function je() {
        function g() {
            c9.drawImage(H, ld + (d1 ? ld + eF.pc() : 0), pd + 2 * ld)
        }
        function k() {
            H.width = t[0].width + J;
            H.height = y + J;
            D = H.getContext("2d", {
                alpha: true
            });
            D.clearRect(0, 0, t[0].width + J, y + J);
            D.translate(Math.floor(J / 2), Math.floor(J / 2));
            D.lineWidth = J;
            D.fillStyle = 1 === t[0].pa ? nv : colorBlack75opaque;
            x();
            D.fill();
            D.strokeStyle = 1 === t[0].pa ? colorBlack : colorWhite;
            x();
            D.stroke();
            D.textAlign = cB;
            D.textBaseline = cA;
            D.fillStyle = 1 === t[0].pa ? colorBlack : colorWhite;
            D.font = A[0];
            D.fillText(InGameSideAnnouncements[t[0].pZ], Math.floor(t[0].width / 2), Math.floor(.72 * B[0] * y));
            D.font = A[1];
            D.fillText(t[0].l, Math.floor(t[0].width / 2), Math.floor((B[0] + .48 * B[1]) * y))
        }
        function x() {
            D.beginPath();
            D.moveTo(G, 0);
            D.lineTo(t[0].width - G, 0);
            D.lineTo(t[0].width, G);
            D.lineTo(t[0].width, y - G);
            D.lineTo(t[0].width - G, y);
            D.lineTo(G, y);
            D.lineTo(0, y - G);
            D.lineTo(0, G);
            D.closePath()
        }
        var t;
        var n;
        var l;
        var z;
        var y;
        var A;
        var C;
        var B;
        var InGameSideAnnouncements;
        var E;
        var J;
        var G;
        var H;
        var D;
        var K;
        var I;
        this.bh = function () {
            K = 0;
            n = 4;
            l = z = 0;
            t = [];
            A = Array(2);
            C = Array(2);
            B = Array(2);
            InGameSideAnnouncements = ["YOU CONQUERED", "YOU WERE CONQUERED BY", "THE GAME WAS WON BY", "MAP:"];
            B[0] = .3;
            B[1] = .7;
            E = Array(4);
            H = document.createElement("canvas");
            I = bw.gL + 2E3;
            this.lT()
        }
            ;
        this.lT = function () {
            var L;
            y = Math.floor((b_IsUISmall ? .0725 : .058) * bi);
            C[0] = Math.floor(.85 * B[0] * y);
            C[1] = Math.floor(.85 * B[1] * y);
            A[0] = bl + C[0] + bm;
            A[1] = bl + C[1] + bm;
            for (L = E.length - 1; 0 <= L; L--)
                E[L] = this.measureText(InGameSideAnnouncements[L] + "000", A[0]);
            J = Math.floor(1 + .05 * y);
            G = Math.floor(.2 * y);
            if (0 < t.length) {
                for (L = t.length - 1; 0 <= L; L--) {
                    var O = this.measureText(t[L].l + "00", A[1]);
                    t[L].width = O < E[L] ? E[L] : O
                }
                k()
            }
        }
            ;
        this.d6 = function () {
            if (0 !== n)
                if (4 === n)
                    bw.gL > I && (n = 0,
                        1 === fK && bu.mO(jP.br(mc).mP, 3, 1, 9));
                else {
                    if (1 === n)
                        0 === l && (k(),
                            l = 1E-4),
                            l += .002 * (bw.gL - K),
                            1 <= l && (z = 0,
                                n = 2,
                                l = 1),
                            bw.bx = true;
                    else if (2 === n) {
                        if (z += (bw.gL - K) / 1E3,
                            z > t[0].gK || 1 < z && 1 < t.length)
                            n = 3
                    } else
                        3 === n && (l -= .002 * (bw.gL - K),
                            0 >= l && (l = 0,
                                t.shift(),
                                n = 0 < t.length ? 1 : 0),
                            bw.bx = true);
                    K = bw.gL
                }
        }
            ;
        this.measureText = function (L, O) {
            c9.font = O;
            return Math.floor(c9.measureText(L).width)
        }
            ;
        this.cI = function (L, O) {
            this.mO(mpPlayerArray[L], O, 1, 0 === O ? 3 : 7)
        }
            ;
        this.mO = function (L, O, P, W) {
            var V = this.measureText(L + "00", A[1]);
            V = V < E[O] ? E[O] : V;
            t.push({
                l: L,
                width: V,
                pZ: O,
                pa: P,
                gK: W
            });
            0 === n && (l = 0,
                n = 1,
                K = bw.gL)
        }
            ;
        this.c8 = function () {
            0 !== n && 0 !== l && (1 > l ? (c9.globalAlpha = l,
                g(),
                c9.globalAlpha = 1) : g())
        }
    }
    function kI() {
        function g() {
            var D = eE.bt;
            F = false;
            ha(l, D, t);
            var K = Math.floor(D / 2);
            1 === y ? (l.fillStyle = nc,
                l.fillRect(K, 0, K, t)) : -1 === y && (l.fillStyle = nk,
                    l.fillRect(0, 0, K, t));
            hd(l, D, t, 2);
            K = Math.floor(.25 * t);
            K = 2 > K ? 2 : K;
            l.fillStyle = nw;
            var I = Math.floor((t - 4) * A[1] / C[1]);
            0 < I && l.fillRect(2, t - 2 - I, K, I);
            I = Math.floor((t - 4) * A[0] / C[0]);
            0 < I && l.fillRect(D - 2 - K, t - 2 - I, K, I);
            K = Math.floor(t / 8);
            K = 2 > K ? 2 : K;
            hf(l, Math.floor(.4 * t), 0, t, K, .5, false);
            hf(l, Math.floor(D - 1.4 * t), 0, t, K, .5, true);
            l.drawImage(z, Math.floor((D - z.width) / 2), 3)
        }
        function k() {
            F = true;
            E = 140;
            y = 0;
            B = [];
            eE.kl = false;
            A[0] = A[1] = 0
        }
        function x() {
            return eD.m4(dw.m2()) ? eD.f6 - t - ld : s - t - (b_IsUISmall ? 2 : 1) * ld
        }
        var t;
        var n;
        var l;
        var z;
        var y;
        var A;
        var C;
        var B;
        var F;
        var E;
        var J;
        var G;
        var H;
        this.bh = function () {
            G = H = 0;
            F = this.kl = false;
            E = 140;
            y = 0;
            A = [0, 0];
            C = [1, 1];
            B = [];
            J = new Uint32Array(10);
            this.lT()
        }
            ;
        this.lT = function () {
            t = eD.co;
            this.bt = 4 * t;
            this.po();
            n = document.createElement("canvas");
            n.width = this.bt;
            n.height = t;
            l = n.getContext("2d", {
                alpha: true
            });
            g()
        }
            ;
        this.eN = function () {
            F && g()
        }
            ;
        this.po = function () {
            var D = t - 6;
            D = 6 > D ? 6 : D;
            if (void 0 === z || z.width !== D) {
                z = document.createElement("canvas");
                z.width = D;
                z.height = D;
                var K = z.getContext("2d", {
                    alpha: true
                });
                K.clearRect(0, 0, D, D);
                var I = Math.floor(D / 8);
                I = 1 > I ? 1 : I;
                K.lineWidth = I;
                K.strokeStyle = colorWhite;
                var L = Math.floor(D / 2);
                D = Math.floor((D - I) / 2);
                K.beginPath();
                K.arc(L, L, D, 0, 2 * Math.PI);
                K.moveTo(L, L - D);
                K.lineTo(L, L + D);
                K.moveTo(L + Math.cos(.78 * Math.PI) * D, L + Math.cos(.28 * Math.PI) * D);
                K.lineTo(L, L);
                K.lineTo(L + Math.cos(.22 * Math.PI) * D, L + Math.cos(1.72 * Math.PI) * D);
                K.stroke()
            }
        }
            ;
        this.bz = function (D, K) {
            if (D < r - this.bt - ld)
                return false;
            var I = x();
            if (K < I || K > I + t)
                return false;
            I = D > r - ld - this.bt / 2;
            isSingleplayer ? this.fI(0, I) : iU.ps(I);
            return true
        }
            ;
        this.d6 = function () {
            if (0 < H)
                H--,
                    0 === H && k();
            else if (this.kl) {
                E--;
                var D;
                if (D = 270 === E && 2 <= G)
                    a: {
                        for (D = dP - 1; 0 <= D; D--)
                            if (dQ[D] < ci) {
                                D = false;
                                break a
                            }
                        D = true
                    }
                D && (F = true,
                    A[0] += C[0]);
                180 === E && 3 * A[0] < C[0] ? k() : A[0] >= C[0] ? fU.fV(-1) : A[1] >= C[1] ? H = 4 : 0 >= E && k()
            } else {
                for (D = 9; 0 <= D; D--)
                    12 < Math.abs(J[D] - landSizeArray[eY[D]]) && (E = 140),
                        J[D] = landSizeArray[eY[D]];
                D = 0 >= --E ? true : false;
                if (D) {
                    this.kl = true;
                    E = 360;
                    var K = 0;
                    for (D = dP - 1; 0 <= D; D--)
                        dQ[D] < ci && (K += landSizeArray[dQ[D]]);
                    C[0] = FindMax(ak(3 * K, 5), 1);
                    d1 && 9 !== gameMode && (C[0] = FindMin(FindMax(ak(K * (100 - ak(100 * eF.py(), il)), 100), 1), C[0]));
                    C[1] = FindMax(K - C[0], 1);
                    G++
                }
            }
        }
            ;
        this.iY = function () {
            this.kl && A[0] < C[0] && k()
        }
            ;
        this.fI = function (D, K) {
            var I;
            if (this.kl) {
                for (I = B.length - 1; 0 <= I; I--)
                    if (B[I] === D)
                        return;
                B.push(D);
                F = true;
                I = isSingleplayer ? C[0] : landSizeArray[D];
                K ? A[0] += I : A[1] += I;
                D === localPlayerID && (y = K ? 1 : -1)
            }
        }
            ;
        this.c8 = function () {
            if (this.kl) {
                var D = x();
                c9.drawImage(n, r - this.bt - ld, D)
            }
        }
    }
    function jf() {
        function g() {
            if (B < 1 / 3) {
                var H = Math.floor(540 * B);
                return "rgba(" + H + ",180,0,0.75)"
            }
            if (B < 2 / 3)
                return H = Math.floor(540 * (B - 1 / 3)),
                    "rgba(180," + (180 - H) + ",0,0.75)";
            H = Math.floor(540 * (B - 2 / 3));
            return "rgba(180,0," + H + ",0.75)"
        }
        function k() {
            A.clearRect(0, 0, n, eD.co);
            var H = Math.floor(B * (n - 2 * z));
            A.fillStyle = colorBlack75opaque;
            A.fillRect(0, 0, z, eD.co);
            A.fillRect(z + H, 0, n - z - H, eD.co);
            A.fillStyle = g();
            A.fillRect(z, 0, H, eD.co);
            A.fillStyle = colorWhite;
            A.fillRect(0, 0, n, 1);
            A.fillRect(0, eD.co - 1, n, 1);
            A.fillRect(0, 0, 1, eD.co);
            A.fillRect(z, 0, 1, eD.co);
            A.fillRect(z + H, 0, 1, eD.co);
            A.fillRect(n - z, 0, 1, eD.co);
            A.fillRect(n - 1, 0, 1, eD.co);
            H = 1 + Math.floor(.0625 * eD.co);
            var D = 1 + Math.floor(.3 * eD.co);
            A.fillRect(Math.floor(.25 * eD.co) + D, Math.floor((eD.co - H) / 2), eD.co - 2 * D, H);
            A.fillRect(Math.floor(n - 1.25 * eD.co) + D, Math.floor((eD.co - H) / 2), eD.co - 2 * D - D % 2, H);
            A.fillRect(Math.floor(n - 1.25 * eD.co) + Math.floor((eD.co - H) / 2), D, H, eD.co - 2 * D - D % 2);
            F = Math.floor(TroopBalance[localPlayerID] * B);
            A.fillText(eC.g2(F), Math.floor(n / 2), Math.floor(.55 * eD.co))
        }
        function x(H) {
            if (1 < H && 0 === B)
                return B = .01,
                    k(),
                    true;
            if (1 < H && 1 === B || 0 === B)
                return false;
            B *= H;
            B = 1 < B ? 1 : 0 > B ? 0 : B;
            k();
            return true
        }
        function t(H) {
            var D = B;
            B = (H - l - z) / (n - 2 * z);
            B = 0 > B ? 0 : B;
            B = 1 < B ? 1 : B;
            return D !== B ? (k(),
                true) : false
        }
        var n;
        var l;
        var z;
        var y;
        var A;
        var C;
        var B;
        var F;
        var E;
        var J;
        var G = 11 / 12;
        this.bh = function () {
            C = !fN;
            J = false;
            B = .5;
            F = 0;
            this.oh = false;
            this.lT()
        }
            ;
        this.lT = function () {
            b_IsUISmall && r < .8 * s ? (this.co = Math.floor(.0536 * bi),
                n = r - 4 * ld - this.co) : (n = Math.floor((b_IsUISmall ? .65 : .389) * bi),
                    n += 12 - n % 12,
                    this.co = Math.floor(n / 12));
            z = Math.floor(3 * this.co / 2);
            E = bl + Math.floor(.5 * this.co) + bm;
            y = document.createElement("canvas");
            y.width = n;
            y.height = this.co;
            A = y.getContext("2d", {
                alpha: true
            });
            A.font = E;
            A.textBaseline = cA;
            A.textAlign = cB;
            this.q4();
            k()
        }
            ;
        this.q4 = function () {
            l = b_IsUISmall && r < .8 * s ? this.co + 3 * ld : Math.floor((fx - n) / 2);
            this.f6 = c3 - this.co - (b_IsUISmall ? 2 : 1) * ld
        }
            ;
        this.eN = function () {
            J && (J = false,
                k())
        }
            ;
        this.kl = function () {
            return !(!C || fZ.lS && l < Math.floor(ld + 5.5 * this.co))
        }
            ;
        this.m4 = function (H) {
            return this.kl() ? l + n > r - H - ld : false
        }
            ;
        this.c6 = function () {
            C = true
        }
            ;
        this.pt = function () {
            C = false
        }
            ;
        this.l1 = function () {
            var H = Math.floor(1E3 * B);
            return 0 >= H ? 1 : 1E3 < H ? 1E3 : H
        }
            ;
        this.od = function (H, D) {
            return this.kl() && H > l && H < l + n && D > this.f6
        }
            ;
        this.oe = function (H, D) {
            if (!this.kl())
                return false;
            if (H > l && H < l + z && D > eD.f6)
                return x(G);
            if (H > l + n - z && H < l + n && D > eD.f6)
                return x(1 / G);
            this.oh = true;
            return t(H)
        }
            ;
        this.qF = function (H) {
            0 !== fK && this.kl() && x(H) && (bw.bx = true)
        }
            ;
        this.om = function (H) {
            if (0 === H || !this.kl())
                return false;
            0 < H ? (H = 400 / (400 + H),
                H = H < G ? G : H) : (H = (400 - H) / 400,
                    H = H > 1 / G ? 1 / G : H);
            return x(H)
        }
            ;
        this.lK = function (H, D) {
            return this.oh ? t(H, D) : false
        }
            ;
        this.ok = function () {
            this.oh = false
        }
            ;
        this.d6 = function () {
            this.kl() && Math.floor(TroopBalance[localPlayerID] * B) !== F && (J = true)
        }
            ;
        this.c8 = function () {
            this.kl() && c9.drawImage(y, l, this.f6)
        }
    }
    var fq;
    var fv;
    var fw;
    function jg() {
        var g;
        var k;
        var x;
        var t;
        var n;
        var l;
        var z;
        this.bh = function () {
            g = Array(2);
            k = Array(2);
            this.gS = false;
            z = l = fw = fv = 0;
            fq = 1;
            this.lT()
        }
            ;
        this.lT = function () {
            x = Math.floor((b_IsUISmall ? .072 : .0502) * bi);
            x = 8 > x ? 8 : x;
            for (var y = 1; 0 <= y; y--)
                g[y] = document.createElement("canvas"),
                    g[y].width = x,
                    g[y].height = x,
                    k[y] = g[y].getContext("2d", {
                        alpha: true
                    });
            this.q4();
            y = Math.floor(1 + x / 20);
            for (var A = 1; 0 <= A; A--)
                k[A].clearRect(0, 0, x, x),
                    k[A].fillStyle = nU,
                    k[A].beginPath(),
                    k[A].arc(x / 2, x / 2, x / 2 - y, 0, 2 * Math.PI),
                    k[A].fill(),
                    k[A].lineWidth = y,
                    k[A].fillStyle = nY,
                    k[A].strokeStyle = nY,
                    k[A].beginPath(),
                    k[A].arc(x / 2, x / 2, x / 2 - y, 0, 2 * Math.PI),
                    k[A].stroke(),
                    hf(k[A], 0, 0, x, y, .3, 0 === A)
        }
            ;
        this.fy = function () {
            return -fv / fq
        }
            ;
        this.c7 = function () {
            return -fw / fq
        }
            ;
        this.ge = function (y, A) {
            fv = fq * y - A
        }
            ;
        this.gf = function (y, A) {
            fw = fq * y - A
        }
            ;
        this.bz = function (y, A) {
            if (Math.pow(y - (t + x / 2), 2) + Math.pow(A - (n + x / 2), 2) < x * x / 4 || Math.pow(y - (t + x / 2), 2) + Math.pow(A - (n + 2 * x), 2) < x * x / 4)
                return A < n + 1.25 * x ? this.om(Math.floor(fx / 2), Math.floor(c3 / 2), -200) : this.om(Math.floor(fx / 2), Math.floor(c3 / 2), 200);
            eH.gi() && (this.gS = true,
                l = y,
                z = A);
            return false
        }
            ;
        this.lK = function (y, A) {
            if (!eH.gi())
                return true;
            var C = fv;
            var B = fw;
            var F = l - y;
            var E = z - A;
            fv += F;
            fw += E;
            dx.lK(F, E);
            this.qU();
            l = y;
            z = A;
            return C !== fv || B !== fw
        }
            ;
        this.om = function (y, A, C) {
            if (!eH.gi())
                return true;
            if (0 < C)
                C = 450 / (450 + C),
                    C = .5 > C ? .5 : C;
            else if (0 > C)
                C = (450 - C) / 450,
                    C = 2 < C ? 2 : C;
            else
                return false;
            this.qV(y, A, C);
            return true
        }
            ;
        this.qV = function (y, A, C) {
            C = 1024 < C * fq ? 1024 / fq : C;
            C = .125 > C * fq ? .125 / fq : C;
            dx.zoom(C, y, A);
            fq *= C;
            fv = (fv + y) * C - y;
            fw = (fw + A) * C - A;
            gR.qU()
        }
            ;
        this.qU = function () {
            var y = r / 16;
            var A = 0;
            var C = s / 16;
            var B = 0;
            fv < -r + y && (A = -r + y - fv);
            fv > fq * aR - y && (A = fq * aR - y - fv);
            fw < -s + C && (B = -s + C - fw);
            fw > fq * aS - C && (B = fq * aS - C - fw);
            fv += A;
            fw += B;
            gg.gh();
            dx.qc(A, B)
        }
            ;
        this.q4 = function () {
            t = fx - x - ld;
            n = Math.floor(c3 / 2 - 1.25 * x)
        }
            ;
        this.c8 = function () {
            c9.drawImage(g[0], t, n);
            c9.drawImage(g[1], t, Math.floor(n + 3 * x / 2))
        }
    }
    function jh() {
        function g() {
            A = Math.floor(.2 * (b_IsUISmall ? .07 : .035) * bi);
            A = FindMax(b_IsUISmall ? 3 : 1, A);
            var N = r / (l.length + C);
            A = N > A ? N : A;
            O = Math.floor((1 - C) * A);
            z = 0;
            k()
        }
        function k() {
            z = -20 > z ? -20 : z;
            z = z > (l.length - 15) * A ? (l.length - 15) * A : z;
            F = Math.floor(z / A);
            E = F + Math.floor(fx / A);
            E = E > l.length - 1 ? l.length - 1 : E;
            F = E < F ? E : F;
            F = 0 > F ? 0 : F;
            var N = E;
            B = y / l[N];
            for (var S = E - 1; S >= F; S--)
                l[S] > l[N] && (N = S,
                    B = y / Math.pow(l[S], L))
        }
        function x(N) {
            N = Math.floor((z + fx - N - C * A) / A);
            N = -1 > N ? -1 : -1 === N ? 0 : N > l.length - 1 ? -1 : N;
            return N !== J ? (J = N,
                -1 === P && 0 === J && I && (P = setInterval(n, 100)),
                true) : false
        }
        function t(N) {
            var S = Math.floor(B * Math.pow(l[N], L));
            c9.fillRect(z + fx - (N + 1) * A, c3 - S, O, S)
        }
        function n() {
            8 === jL.rG() && (J = -1);
            if (0 !== J)
                W = (new Date).getTime(),
                    clearInterval(P),
                    P = -1;
            else {
                var N = l[1] / 864E3;
                if (-1 !== W) {
                    var S = (new Date).getTime();
                    N += (S - W) * l[1] / 864E5;
                    W = -1
                }
                0 < N && (l[0] += Math.floor(N),
                    bw.bx = true)
            }
        }
        var l;
        var z;
        var y;
        var A;
        var C;
        var B;
        var F;
        var E;
        var J;
        var G;
        var H;
        var D;
        var K;
        var I;
        var L;
        var O;
        var P;
        var W;
        var TimetableEventNames;
        this.bh = function () {
            W = P = -1;
            I = false;
            L = 1;
            J = -1;
            this.qs = false;
            K = 0;
            D = new Date;
            z = 0;
            C = .3;
            TimetableEventNames = [];
            TimetableEventNames.push({
                mK: "Plateau A",
                av: 0,
                oY: 57
            });
            TimetableEventNames.push({
                mK: "Max A",
                av: 1,
                oY: 1
            });
            TimetableEventNames.push({
                mK: "Black Friday",
                av: 15,
                oY: 15
            });
            TimetableEventNames.push({
                mK: "Max B",
                av: 19,
                oY: 19
            });
            TimetableEventNames.push({
                mK: "Max C",
                av: 44,
                oY: 44
            });
            TimetableEventNames.push({
                mK: "First Android Version",
                av: 58,
                oY: 58
            });
            TimetableEventNames.push({
                mK: "Max D",
                av: 67,
                oY: 67
            });
            TimetableEventNames.push({
                mK: "The iFrame Explosion",
                av: 98,
                oY: 99
            });
            TimetableEventNames.push({
                mK: "The 155-Day Uptrend",
                av: 58,
                oY: 213
            });
            TimetableEventNames.push({
                mK: "Max E",
                av: 213,
                oY: 213
            });
            TimetableEventNames.push({
                mK: "Plateau B",
                av: 214,
                oY: 259
            });
            TimetableEventNames.push({
                mK: "Turbulent Times",
                av: 260,
                oY: 344
            });
            TimetableEventNames.push({
                mK: "Max F",
                av: 262,
                oY: 262
            });
            TimetableEventNames.push({
                mK: "Max G",
                av: 282,
                oY: 282
            });
            TimetableEventNames.push({
                mK: "Max H",
                av: 333,
                oY: 333
            });
            TimetableEventNames.push({
                mK: "The 19-Day Downtrend",
                av: 283,
                oY: 301
            });
            TimetableEventNames.push({
                mK: "Plateau C",
                av: 345,
                oY: 385
            });
            TimetableEventNames.push({
                mK: "The Alliance Ascent",
                av: 386,
                oY: 395
            });
            TimetableEventNames.push({
                mK: "Max I",
                av: 395,
                oY: 395
            });
            TimetableEventNames.push({
                mK: "First iOS Version",
                av: 411,
                oY: 411
            });
            TimetableEventNames.push({
                mK: "Plateau D",
                av: 396,
                oY: 453
            });
            TimetableEventNames.push({
                mK: "The TikTok Revolution",
                av: 454,
                oY: 470
            });
            TimetableEventNames.push({
                mK: "Max J",
                av: 456,
                oY: 456
            });
            TimetableEventNames.push({
                mK: "Max K",
                av: 472,
                oY: 472
            });
            TimetableEventNames.push({
                mK: "Max L",
                av: 478,
                oY: 478
            });
            TimetableEventNames.push({
                mK: "YT Drew",
                av: 471,
                oY: 485
            });
            TimetableEventNames.push({
                mK: "Plateau E",
                av: 485,
                oY: 600
            });
            TimetableEventNames.push({
                mK: "Uptrend A",
                av: 600,
                oY: 613
            });
            TimetableEventNames.push({
                mK: "Max M",
                av: 613,
                oY: 613
            });
            TimetableEventNames.push({
                mK: "Downtrend A",
                av: 614,
                oY: 635
            });
            TimetableEventNames.push({
                mK: "Plateau F",
                av: 636,
                oY: 737
            });
            TimetableEventNames.push({
                mK: "End of Record",
                av: 738,
                oY: 738
            });
            l = [208644377, 208644377, 208644377, 206964709, 205156594, 250680803, 249089835, 234476552, 252346209, 263196406, 270821533, 291436400, 294907103, 288866179, 297960890, 310165928, 323215738, 326005712, 312078872, 282668674, 268883231, 261100885, 247870209, 240175828, 231697235, 240614202, 237647174, 230525212, 228239099, 226070733, 215992739, 216961676, 231079584, 235793502, 234032821, 228402462, 216942832, 211862670, 209792418, 220626495, 221020535, 228198633, 226910806, 227687295, 210969547, 197393506, 205629061, 215820135, 213694935, 209455870, 215822584, 215130299, 214034219, 229190414, 230055290, 225313791, 223398523, 231870169, 226224938, 218242706, 235891029, 210498444, 195329116, 187676007, 183432634, 175752106, 170096205, 173369342, 171454357, 185810310, 189616577, 190788861, 179291487, 179513980, 189122353, 188375572, 202060722, 203256609, 197948652, 191950448, 194693217, 196335490, 195911919, 202264283, 199251620, 193699336, 188441210, 183419345, 195919988, 198126823, 199780788, 197440550, 190144884, 179139362, 166469099, 178827877, 183801980, 197952484, 188875861, 185919783, 186237411, 182504952, 183532013, 174109004, 178159701, 161031347, 194622838, 205645645, 200496457, 194773327, 194546481, 207893217, 210920126, 213376144, 173859897, 154326886, 158943729, 166772975, 175066046, 177406405, 179018562, 185986119, 186747583, 200787939, 208959937, 161987576, 185512400, 185788899, 185957487, 194591063, 215634157, 230579314, 237637383, 240518707, 221398239, 225230795, 224891285, 211292916, 216944626, 219436299, 226523918, 232405568, 232166426, 216921782, 244767964, 257278946, 243548100, 237386943, 242802627, 229717622, 168149709, 259971896, 267057767, 257606635, 209857364, 126035568, 129833237, 151312703, 197006695, 73120657, 37551024, 39229432, 29517736, 29382631, 31512045, 42652097, 47363019, 49624906, 46687310, 33767120, 31230439, 34211643, 43094531, 53747053, 55380682, 49779117, 47748833, 21038802, 20406484, 24523793, 26566139, 25284142, 26825553, 23497443, 20291865, 17765022, 21291320, 21106123, 19050128, 18324426, 19044067, 19594721, 19347845, 23365124, 24186529, 19824881, 17952812, 17093838, 17328579, 17607296, 21284737, 22551012, 20471281, 19350848, 19654931, 18725460, 18641926, 23301269, 25178902, 21617041, 21433781, 21078957, 19526047, 18665064, 21394401, 21575049, 19286677, 18018450, 17550775, 17282428, 17055509, 19348704, 20177845, 19766211, 19088037, 18118802, 18269428, 18500614, 19130220, 19351798, 19205188, 19489961, 20233286, 20726811, 23245145, 26158741, 26096642, 24424181, 23690661, 22967492, 21098008, 20325973, 19431907, 17008295, 15583096, 14209752, 14307184, 13541498, 12822679, 13154311, 12161194, 12956543, 11435697, 13428928, 12262514, 12858519, 12405344, 12884309, 14410011, 15556681, 15260178, 14863807, 13861458, 15176144, 14089849, 13063987, 12378716, 13061867, 13118900, 13112653, 13137263, 13062253, 13126875, 14136833, 14711852, 14341250, 11888270, 13137006, 12830841, 12516937, 12783789, 13139393, 12931E3, 12857582, 13677329, 13892963, 13171528, 14135236, 14640750, 15677970, 16758399, 19125177, 17723446, 16469484, 17032884, 19792603, 21426397, 22032534, 20271251, 16190176, 16772813, 17675977, 18764026, 18346209, 19576834, 20989792, 21350839, 14696885, 14653075, 14677999, 14958759, 14210260, 15488352, 15623604, 14473144, 12823062, 14869909, 15142264, 15567014, 17896725, 20081347, 17765006, 12763925, 13523610, 13979983, 15080856, 17116394, 18483238, 18084320, 12100282, 12221529, 12441579, 12058220, 12441689, 12821546, 13401583, 13009895, 12271066, 12210094, 12355642, 13737115, 14257807, 14904897, 14072161, 15640387, 15721803, 16397970, 19254839, 21608906, 20527471, 16596206, 15550563, 14385591, 15547262, 13174302, 12462319, 13000669, 12832541, 12186376, 13150940, 14654379, 14299386, 14158528, 15185971, 12444117, 14253445, 15049053, 14123310, 16892853, 15963931, 11858727, 10012703, 9478191, 9193460, 8851082, 9298848, 9638204, 9442496, 8653593, 9093527, 8530977, 8809114, 9609612, 9906912, 9615756, 9477879, 9713075, 9126583, 8949378, 9577595, 10180186, 9858705, 9534213, 9184660, 8889455, 8311313, 9738346, 9772164, 9157791, 8445413, 8467279, 8756002, 9257951, 10213536, 10620530, 10352296, 9350531, 9118709, 9614237, 9692491, 10801215, 10984804, 9542309, 9609538, 9391430, 9515517, 10064494, 11061684, 10408005, 9794768, 9297643, 9275992, 9394076, 9716084, 10045958, 9715229, 9091248, 10010584, 9845528, 9532588, 8986320, 9037708, 9820996, 8953464, 9074064, 8644692, 8025308, 8832112, 10785788, 10539708, 8908744, 8331216, 8858100, 8626840, 7666284, 8503372, 8855308, 6762540, 6414076, 6786692, 6445532, 6262192, 5918176, 5864376, 5464928, 5384996, 5942760, 5261972, 5404612, 6184860, 6312948, 5815660, 5208552, 4734392, 4538784, 4661404, 5145524, 4819368, 4369224, 4458584, 4289956, 3538288, 3517544, 3871876, 3388048, 3344796, 3089228, 2863676, 2268964, 2160500, 2580004, 2244356, 2018408, 1688912, 1945368, 1796332, 1619260, 2060292, 1597656, 1472788, 1306208, 1171408, 1021096, 1109312, 1241276, 1305092, 1142748, 1157700, 991984, 786992, 786396, 1043956, 1029320, 860500, 834824, 841912, 736464, 690328, 878376, 907232, 794932, 646388, 752600, 672836, 636212, 794108, 746856, 642928, 671328, 493568, 458168, 428776, 464736, 371412, 314568, 225472, 252072, 227604, 251048, 269184, 174136, 825576, 536060, 165952, 153252, 180036, 149616, 138472, 157832, 188152, 180108, 134076, 70960, 89236, 111428, 60520, 74620, 73424, 74720, 71584, 94432, 62572, 66420, 32532, 34452, 41048, 51372, 61916, 43236, 55172, 26776, 47E3, 57424, 93100, 64980, 37288, 44296, 34588, 40700, 29200, 24604, 18184, 42660, 31404, 38096, 18556, 17388, 19568, 17604, 22328, 40300, 39392, 33440, 17960, 7984, 11612, 67700, 14108, 22444, 19756, 9436, 16864, 14400, 17216, 14436, 8612, 15952, 29764, 18748, 16348, 23976, 22080, 20268, 20984, 9480, 30736, 15996, 9484, 9392, 9716, 21540, 57428, 24788, 18728, 8528, 5972, 20560, 18268, 28088, 15364, 15300, 29348, 30992, 20564, 34420, 16716, 14424, 12360, 15124, 51172, 13176];
            this.lT();
            low_level_websocket.qu(0, 0)
        }
            ;
        this.lT = function () {
            y = Math.floor(.15 * s);
            G = Math.floor((b_IsUISmall ? .018 : .0137) * bi);
            G = 10 > G ? 10 : G;
            H = bl + G + bm;
            g()
        }
            ;
        this.qw = function () {
            I || iU.menu_socket_welcome()
        }
            ;
        this.qy = function (N) {
            var S;
            I = true;
            for (S = 0; S < N.length; S++)
                l.unshift(N[S]);
            g();
            bw.bx = true
        }
            ;
        this.r2 = function () {
            k()
        }
            ;
        this.lK = function (N, S) {
            S > c3 - .6 * y ? this.qs ? N !== K && (z += N - K,
                K = N,
                k(),
                x(N),
                this.qs = -1 !== J,
                bw.bx = true) : x(N) && (bw.bx = true) : this.oi()
        }
            ;
        this.oi = function () {
            -1 !== J && (this.qs = false,
                J = -1,
                bw.bx = true)
        }
            ;
        this.om = function (N, S) {
            -1 !== J && (z += Math.floor(S),
                k(),
                x(N),
                bw.bx = true)
        }
            ;
        this.bz = function (N, S) {
            this.lK(N, S);
            -1 !== J && (K = N,
                this.qs = true)
        }
            ;
        this.oj = function () {
            -1 !== J && (this.qs = false)
        }
            ;
        this.DrawTimebarsBottom_MainMenu = function () {
            c9.fillStyle = nu;
            for (var N = E; N >= F; N--)
                t(N);
            I && 0 === F && (c9.fillStyle = nk,
                t(0));
            -1 !== J && (c9.fillStyle = nt,
                t(J));
            if (-1 !== J) {
                c9.font = H;
                c9.textBaseline = nz;
                N = new Date;
                N.setTime(D.getTime() - 864E5 * J);
                var S = "month";
                var U = "day";
                "undefined" !== typeof Intl && (S = (new Intl.DateTimeFormat("en-US", {
                    month: "long"
                })).format(N),
                    U = (new Intl.DateTimeFormat("en-US", {
                        weekday: "long"
                    })).format(N));
                N = U + ", " + N.getUTCDate() + " " + S + " " + N.getFullYear();
                var secondsPlayedThatDay = 1 === l[J] ? " second played" : " seconds played";
                secondsPlayedThatDay = eC.g2(l[J]) + secondsPlayedThatDay;
                var T = Math.floor(c9.measureText(N).width);
                var pa = Math.floor(c9.measureText(secondsPlayedThatDay).width);
                var ea = Math.floor(.5 * (T + G));
                S = z + fx - (J + 1) * A;
                S = S < ea ? ea : S > fx - ea ? fx - ea : S;
                U = c3 - Math.floor(B * Math.pow(l[J], L));
                var ba = Math.floor(1.1 * G);
                var ma = U > c3 - ba ? c3 - ba : U;
                c9.fillStyle = colorBlack75opaque;
                c9.fillRect(fx - pa - G, ma - ba, pa + G, ba);
                c9.fillRect(S - ea, c3 - ba, T + G, ba);
                c9.fillStyle = colorWhite;
                c9.textAlign = o0;
                c9.fillText(secondsPlayedThatDay, Math.floor(fx - .5 * G), ma);
                secondsPlayedThatDay = ma - 2 * ba;
                T = -1;
                pa = l.length - J - 1;
                for (ea = TimetableEventNames.length - 1; 0 <= ea; ea--)
                    pa >= TimetableEventNames[ea].av && pa <= TimetableEventNames[ea].oY && (-1 === T || TimetableEventNames[ea].oY - TimetableEventNames[ea].av < TimetableEventNames[T].oY - TimetableEventNames[T].av) && (T = ea);
                -1 !== T && (pa = Math.floor(c9.measureText(TimetableEventNames[T].mK).width),
                    c9.fillStyle = colorBlack75opaque,
                    c9.fillRect(fx - pa - G, secondsPlayedThatDay, pa + G, ba),
                    c9.fillStyle = colorWhite,
                    c9.fillText(TimetableEventNames[T].mK, Math.floor(fx - .5 * G), secondsPlayedThatDay + ba));
                c9.textAlign = cB;
                c9.fillText(N, S, c3);
                c9.strokeStyle = mo;
                c9.lineWidth = 1;
                c9.beginPath();
                c9.moveTo(0, U);
                c9.lineTo(fx, U);
                c9.closePath();
                c9.stroke()
            }
        }
    }
    function ji() {
        this.co = this.f5 = 0;
        var g;
        var k;
        var x;
        var t;
        var n;
        var l;
        var z;
        var y;
        var playerBalance;
        var C;
        var B;
        var F;
        var E;
        this.bh = function () {
            n = hE;
            B = "rgba(0,100,0,0.8)";
            F = "rgba(150,0,0,0.8)";
            C = true;
            y = false;
            playerBalance = TroopBalance[localPlayerID];
            this.lT()
        }
            ;
        this.lT = function () {
            k = Math.floor((b_IsUISmall ? .305 : .24) * bi);
            this.co = Math.floor(.5 + .13 * k);
            k = Math.floor(6 * this.co);
            g = bl + Math.floor(.8 * this.co) + bm;
            E = Math.floor(.5 * this.co);
            ou.font = g;
            x = ld;
            t = Math.floor(1 + .13 * this.co);
            l = document.createElement("canvas");
            l.width = k;
            l.height = this.co;
            z = l.getContext("2d", {
                alpha: true
            });
            z.font = g;
            z.textBaseline = cA;
            z.textAlign = cB;
            this.rO()
        }
            ;
        this.pO = function () {
            return b_IsUISmall && r < 1.2 * s
        }
            ;
        this.q4 = function () {
            this.pO() ? this.f5 = fx - k - ld : this.f5 = Math.floor(e9.rP() + (fx - e9.rP() - dy.bt - k) / 2 - .5 * ld)
        }
            ;
        this.eN = function () {
            y && (y = false,
                this.rO())
        }
            ;
        this.rO = function () {
            z.clearRect(0, 0, k, this.co);
            z.fillStyle = C ? B : F;
            z.fillRect(0, 0, k, this.co);
            z.fillStyle = nt;
            this.rQ();
            this.rR();
            z.fillStyle = TroopBalance[localPlayerID] >= aq.dA(localPlayerID) ? no : colorWhite;
            z.fillText(eC.g2(playerBalance), Math.floor(k / 2), E);
            z.fillStyle = colorWhite;
            z.fillRect(0, 0, k, 1);
            z.fillRect(0, 0, 1, this.co);
            z.fillRect(0, this.co - 1, k, 1);
            z.fillRect(k - 1, 0, 1, this.co)
        }
            ;
        this.rQ = function () {
            var J = Math.floor((aq.rS() - 1) * this.co / 9);
            J = FindMin(J, this.co - t);
            z.fillRect(0, J, t, this.co - J);
            z.fillRect(k - t, J, t, this.co - J)
        }
            ;
        this.rR = function () {
            z.fillRect(t, this.co - t, Math.floor((k - 2 * t) * TroopBalance[localPlayerID] / n), t)
        }
            ;
        this.d6 = function () {
            playerBalance !== TroopBalance[localPlayerID] && (n = FindMax(TroopBalance[localPlayerID], n),
                C = TroopBalance[localPlayerID] > playerBalance && 10 <= TroopBalance[localPlayerID],
                playerBalance = TroopBalance[localPlayerID],
                y = true)
        }
            ;
        this.c8 = function () {
            0 === f1[localPlayerID] || fN || c9.drawImage(l, this.f5, x)
        }
    }
    var rT;
    var pd;
    var rU;
    var rV;
    var rW;
    var eY;
    var rX;
    function jj() {
        function g() {
            var Q;
            C.clearRect(0, 0, rT, pd);
            C.fillStyle = nj;
            C.fillRect(0, 0, rT, G);
            C.fillStyle = nW;
            C.fillRect(0, G, rT, pd - G);
            rX[localPlayerID] >= T && x(rX[localPlayerID] - T, ni);
            0 !== rX[localPlayerID] && 0 === T && x(0, nh);
            -1 !== X && x(X, lW);
            C.fillStyle = nY;
            C.fillRect(0, G, rT, 1);
            C.fillRect(0, 0, rT, oD);
            C.fillRect(0, 0, oD, pd);
            C.fillRect(rT - oD, 0, oD, pd);
            C.fillRect(0, pd - oD, rT, oD);
            C.font = rU;
            C.textBaseline = cA;
            C.textAlign = cB;
            C.fillText(W, Math.floor(rT / 2), Math.floor(E + rW / 2));
            var M = rX[localPlayerID] < T + y - 1 ? 1 : 2;
            C.font = rV;
            C.textAlign = m8;
            for (Q = y - M; 0 <= Q; Q--)
                k(eY[Q + T]),
                    t(Q, Q + T, eY[Q + T]);
            C.textAlign = o0;
            for (Q = y - M; 0 <= Q; Q--)
                k(eY[Q + T]),
                    n(Q, eY[Q + T]);
            2 === M && (k(localPlayerID),
                C.textAlign = m8,
                t(y - 1, rX[localPlayerID], localPlayerID),
                C.textAlign = o0,
                n(y - 1, localPlayerID));
            0 === T && (Q = .7 * H / bo.br(4).height,
                C.setTransform(Q, 0, 0, Q, Math.floor(D + .58 * H + .5 * Q * bo.br(4).width), Math.floor(E + rW + .4 * H)),
                C.imageSmoothingEnabled = true,
                C.drawImage(bo.br(4), -Math.floor(bo.br(4).width / 2), -Math.floor(bo.br(4).height / 2)),
                C.setTransform(1, 0, 0, 1, 0, 0))
        }
        function k(Q) {
            d1 && (C.fillStyle = dN.s6[dN.iQ[dN.dO[Q]]])
        }
        function x(Q, M) {
            C.fillStyle = M;
            Q = Q > y - 1 ? y - 1 : Q;
            var R = Math.floor((Q === y - 1 ? 2 : 0 === Q ? 1.15 : 1) * H);
            R = Q === y - 2 ? Math.floor(G + 9.15 * H) - Math.floor(G + 8.15 * H) : R;
            C.fillRect(0, Math.floor(G + (Q + (0 === Q ? 0 : .15)) * H), rT, R)
        }
        function t(Q, M, R) {
            C.fillText(V[M], D, Math.floor(E + rW + (Q + .5) * H));
            1 === kn[R] ? C.font = o2 + rV : 2 === kn[R] && (C.font = o1 + rV);
            C.fillText(O[R] === R ? mpPlayerArray[R] : L[O[R] % b0], K, Math.floor(E + rW + (Q + .5) * H));
            0 !== kn[R] && (C.font = rV)
        }
        function n(Q, M) {
            C.fillText(landSizeArray[M], I, Math.floor(E + rW + (Q + .5) * H))
        }
        function l(Q) {
            Q -= ld + G;
            if (0 > Q)
                return Math.floor(Q / H) - 1;
            if (Q < (y - 1) * H)
                return Math.floor(Q / H);
            if (Q < pd - G)
                return y - 1;
            Q -= pd - G;
            return y + Math.floor(Q / H)
        }
        function z(Q, M) {
            return Q >= ld && Q < ld + rT && M >= ld && M < ld + pd
        }
        var y;
        var A;
        var C;
        var B;
        var F;
        var E;
        var J;
        var G;
        var H;
        var D;
        var K;
        var I;
        var L;
        var O;
        var P;
        var W;
        var V;
        var N;
        var S;
        var U;
        var X;
        var T;
        var pa;
        var ea;
        var ba;
        var ma;
        this.bh = function () {
            var Q;
            var M;
            pa = 0;
            ea = false;
            ma = ba = 0;
            W = "LEADERBOARD";
            X = -1;
            y = b_IsUISmall ? 6 : 10;
            T = 0;
            U = false;
            N = new Uint16Array(y + 1);
            S = new Uint32Array(y + 1);
            F = b0;
            eY = new Uint16Array(F);
            rX = new Uint16Array(F);
            for (Q = F - 1; 0 <= Q; Q--)
                eY[Q] = Q,
                    rX[Q] = Q;
            this.lT(true);
            L = [];
            O = new Uint16Array(b0);
            P = new Uint16Array(b0);
            var R = Math.floor(rT - K - D - B);
            var Y = 0;
            V = Array(b0);
            C.font = rV;
            for (Q = b0 - 1; 0 <= Q; Q--)
                if (V[Q] = Q + 1 + ".",
                    O[Q] = Q,
                    P[Q] = Math.floor(C.measureText(mpPlayerArray[Q]).width),
                    P[Q] > R) {
                    var Z = mpPlayerArray[Q];
                    for (M = mpPlayerArray[Q].length - 1; 1 <= M && !(Z = Z.substring(0, M),
                        P[Q] = Math.floor(C.measureText(Z + "...").width),
                        P[Q] <= R); M--)
                        ;
                    Z += "...";
                    L.push(Z);
                    O[Q] = b0 + Y++
                }
            g()
        }
            ;
        this.lT = function (Q) {
            b_IsUISmall ? (rT = Math.floor(.335 * bi),
                pd = Math.floor(y * rT / 8)) : (rT = Math.floor(.27 * bi),
                    pd = Math.floor(y * rT / 10));
            rT = Math.floor(.97 * rT);
            A = document.createElement("canvas");
            A.width = rT;
            A.height = pd;
            C = A.getContext("2d", {
                alpha: true
            });
            E = .025 * rT;
            rW = .16 * rT;
            J = 0 * rT;
            G = Math.floor(.45 * E + rW);
            H = (pd - rW - 2 * E - J) / y;
            rU = bl + Math.floor(.55 * rW) + bm;
            rV = Math.floor(.6 * H) + bm;
            C.font = rV;
            D = Math.floor(C.measureText("555").width);
            K = Math.floor(C.measureText("555600.00").width);
            B = Math.floor(C.measureText("00920600").width);
            C.font = rU;
            I = rT - D;
            if (!Q) {
                C.font = rV;
                for (Q = b0 - 1; 0 <= Q; Q--)
                    P[Q] = Math.floor(C.measureText(O[Q] === Q ? mpPlayerArray[Q] : L[O[Q] % b0]).width);
                g()
            }
        }
            ;
        this.rP = function () {
            return rT
        }
            ;
        this.eN = function (Q) {
            U && (Q || 14 >= s0 && 0 === bw.dL() % 6 || 14 < s0) && (U = false,
                g())
        }
            ;
        this.d6 = function () {
            for (var Q = F - 1; 0 <= Q; Q--)
                if (0 === f1[eY[Q]]) {
                    var M = Q;
                    var R = eY[M];
                    for (F--; M < F; M++)
                        eY[M] = eY[M + 1],
                            rX[eY[M]] = M;
                    eY[F] = R;
                    rX[eY[F]] = F
                }
            R = F - 1;
            for (M = 0; M < R; M++)
                landSizeArray[eY[M]] < landSizeArray[eY[M + 1]] && (Q = eY[M],
                    eY[M] = eY[M + 1],
                    eY[M + 1] = Q,
                    rX[eY[M]] = M,
                    rX[eY[M + 1]] = M + 1);
            a: {
                Q = U;
                U = true;
                for (M = R = rX[localPlayerID] >= y - 1 ? y - 2 : y - 1; 0 <= M; M--)
                    if (N[M] !== eY[M] || S[M] !== landSizeArray[eY[M]])
                        break a;
                if (R !== y - 2 || N[y] === rX[localPlayerID] && S[y] === landSizeArray[localPlayerID])
                    U = Q
            }
            for (Q = y - 1; 0 <= Q; Q--)
                N[Q] = eY[Q],
                    S[Q] = landSizeArray[eY[Q]];
            N[y] = rX[localPlayerID];
            S[y] = landSizeArray[localPlayerID]
        }
            ;
        this.bz = function (Q, M) {
            if (z(Q, M)) {
                pa = bw.gL;
                ea = true;
                ba = ma = l(M);
                if (oF) {
                    var R = sJ(-1, ma, y);
                    R = R === y ? -1 : R;
                    X !== R && (X = R,
                        g(),
                        bw.bx = true)
                }
                return true
            }
            return false
        }
            ;
        this.lK = function (Q, M) {
            var R = l(M);
            if (ea) {
                var Y = T;
                T += ba - R;
                T = sJ(0, T, b0 - y);
                T !== Y && (ba = R,
                    R = sJ(-1, R, y),
                    X = R = R !== y && z(Q, M) ? R : -1,
                    g(),
                    bw.bx = true);
                return true
            }
            R = sJ(-1, R, y);
            R = R === y || !z(Q, M) || oF ? -1 : R;
            return X !== R ? (X = R,
                g(),
                bw.bx = true) : false
        }
            ;
        this.oj = function (Q, M) {
            if (!ea)
                return false;
            ea = false;
            var R = l(M);
            oF && -1 !== X && (X = -1,
                g(),
                bw.bx = true);
            if (350 > bw.gL - pa && ma === R && (R = sJ(-1, R, y),
                R = R !== y && z(Q, M) ? R : -1,
                -1 !== R)) {
                var Y = eY[R + T];
                R === y - 1 && rX[localPlayerID] >= T + y - 1 && (Y = localPlayerID);
                0 !== f1[Y] && eH.gO(Y, 800, false, 0)
            }
            return true
        }
            ;
        this.om = function (Q, M, R) {
            return ea ? false : z(Q, M) ? (Q = l(M),
                Q = sJ(-1, Q, y),
                Q = Q === y || oF ? -1 : Q,
                0 < R ? T < b0 - y && (T++,
                    X = Q,
                    g(),
                    bw.bx = true) : 0 < T && (T--,
                        X = Q,
                        g(),
                        bw.bx = true),
                true) : false
        }
            ;
        this.c8 = function () {
            c9.drawImage(A, ld, ld)
        }
    }
    function jk() {
        function g() {
            z.clearRect(0, 0, dy.bt, dy.co);
            z.fillStyle = colorBlack75opaque;
            z.fillRect(0, 0, dy.bt, dy.co);
            z.fillStyle = nc;
            z.fillRect(0, dy.co - C - 1, Math.floor((0 < O ? O : Math.sqrt(K[4] / K[3])) * dy.bt), C);
            z.fillStyle = colorWhite;
            z.fillRect(0, 0, dy.bt, 1);
            z.fillRect(0, 0, 1, dy.co);
            z.fillRect(dy.bt - 1, 0, 1, dy.co);
            z.fillRect(0, dy.co - 1, dy.bt, 1);
            z.fillRect(0, dy.co - C - 1, dy.bt, 1);
            for (N = 0, S = 0, void 0; S < InGameTopRightPanelText.length; S++) {
                var N;
                var S;
                if (bInGameTopRightPanelDisplay[S]) {
                    z.textAlign = m8;
                    var U = Math.floor((B - C + 2 * E) * (S - N + 1) / (InGameTopRightPanelText.length + 1) - .7 * E);
                    z.fillText(InGameTopRightPanelText[S], F, U);
                    z.textAlign = o0;
                    5 === S && 0 !== f1[localPlayerID] && TroopBalance[localPlayerID] >= aq.dA(localPlayerID) ? (z.fillStyle = nx,
                        z.fillText(k(S), dy.bt - F, U),
                        z.fillStyle = colorWhite) : z.fillText(k(S), dy.bt - F, U)
                } else
                    N++
            }
        }
        function k(N) {
            return 3 > N ? K[N].toString() : 3 === N ? dy.sY(K[N] / 100, 2) : 4 === N ? dy.sY(K[N] / 100, 2) : 5 === N ? dy.sY(K[N] / 100, 2) : 7 > N ? eC.g2(K[N]) : dy.rS(K[7])
        }
        function x(N) {
            N = ak(1E4 * N, il);
            0 < fT && (0 === f1[0] ? fU.fV(1) : 0 === f1[1] && fU.fV(0));
            N >= K[3] && (fU.fV(-1),
                K[4] = -1);
            K[4] !== N && (H++,
                K[4] = N)
        }
        function t() {
            for (var N = dP - 1; 0 <= N; N--)
                if (0 < aw[dQ[N]].length)
                    return false;
            return true
        }
        function n() {
            landSizeArray[localPlayerID] !== K[6] && (K[6] = landSizeArray[localPlayerID],
                H++)
        }
        var l;
        var z;
        var y;
        var A;
        var C;
        var B;
        var F;
        var E;
        var J;
        var G;
        var H;
        var InGameTopRightPanelText;
        var K;
        var bInGameTopRightPanelDisplay;
        var L;
        var O;
        var P;
        var W;
        var V;
        this.bh = function () {
            O = P = 0;
            InGameTopRightPanelText = Array(8);
            InGameTopRightPanelText[0] = "Humans";
            InGameTopRightPanelText[1] = isSingleplayer ? "Players" : "Bots";
            InGameTopRightPanelText[2] = "Spectators";
            InGameTopRightPanelText[3] = "Threshold";
            InGameTopRightPanelText[4] = "Occupation";
            InGameTopRightPanelText[5] = "Interest";
            InGameTopRightPanelText[6] = "Income";
            InGameTopRightPanelText[7] = "Time";
            V = il - ak(il, 100);
            K = Array(InGameTopRightPanelText.length);
            K[0] = isSingleplayer ? 0 : ci;
            K[1] = isSingleplayer ? dP : dg;
            K[2] = iZ;
            K[3] = 1E4;
            K[4] = ak(1E4 * landSizeArray[0], il);
            K[5] = 700;
            K[6] = 0;
            n();
            K[7] = 0;
            L = k(6);
            bInGameTopRightPanelDisplay = Array(InGameTopRightPanelText.length);
            for (var N = InGameTopRightPanelText.length - 1; 0 <= N; N--)
                bInGameTopRightPanelDisplay[N] = true;
            W = 0;
            isSingleplayer ? (bInGameTopRightPanelDisplay[0] = false,
                bInGameTopRightPanelDisplay[2] = false,
                bInGameTopRightPanelDisplay[3] = false,
                W = 3) : (bInGameTopRightPanelDisplay[3] = false,
                    W = 1);
            H = 0;
            this.DrawInGameTopRightPanel()
        }
            ;
        this.DrawInGameTopRightPanel = function () {
            this.bt = Math.floor((b_IsUISmall ? .1646 : .126) * bi);
            this.co = Math.floor(1.18 * this.bt);
            C = Math.floor(.04 * this.bt);
            F = Math.floor(.05 * this.bt);
            E = .04 * this.bt;
            B = this.co;
            this.co -= Math.floor(W * (this.co - 2 * C) / InGameTopRightPanelText.length);
            G = Math.floor(.55 * (B - C) / InGameTopRightPanelText.length);
            J = bl + G + bm;
            l = document.createElement("canvas");
            l.width = this.bt;
            l.height = this.co;
            z = l.getContext("2d", {
                alpha: true
            });
            z.font = J;
            z.textBaseline = cA;
            z.lineWidth = 1;
            this.ie();
            this.q4();
            eB.q4();
            g()
        }
            ;
        this.q4 = function () {
            y = fx - this.bt - ld
        }
            ;
        this.sW = function () {
            A = ld
        }
            ;
        this.ie = function () {
            A = ld + (eB.pO() && 0 !== f1[localPlayerID] && !fN ? eB.co + ld : 0)
        }
            ;
        this.eN = function (N) {
            0 < H && (N || 12 > s0 && 100 <= H || 12 <= s0) && (H = 0,
                g())
        }
            ;
        this.l3 = function () {
            return K[7]
        }
            ;
        this.rS = function (N) {
            var S = Math.floor(N / 1E3 / 60);
            N = Math.floor((N - 6E4 * S) / 1E3);
            return 10 > N ? S + ":0" + N : S + ":" + N
        }
            ;
        this.CalculateOccupationPercentage = function (occupationPercentage, decimals) {
            return occupationPercentage.toFixed(decimals) + "%"
        }
            ;
        this.d6 = function () {
            bInGameTopRightPanelDisplay[0] && ia - iZ !== K[0] && (K[0] = ia - iZ,
                H++);
            dP - K[0] !== K[1] && (K[1] = dP - K[0],
                H++);
            this.dz();
            if (d1) {
                var N = eF.py();
                N >= V && t() ? (fU.fV(-1),
                    x(eF.py())) : x(N)
            } else
                N = landSizeArray[eY[0]],
                    N >= V && t() && fU.fV(-1),
                    x(N);
            N = aq.sj(localPlayerID);
            N !== K[5] && (K[5] = N,
                H++);
            n();
            K[7] += bw.sk();
            N = k(7);
            L !== N && (L = N,
                H += 100)
        }
            ;
        this.dz = function () {
            bInGameTopRightPanelDisplay[2] && iZ !== K[2] && (K[2] = iZ,
                H++)
        }
            ;
        this.sl = function (N) {
            if (N === is)
                return O = 0,
                    g(),
                    false;
            if (-1 === N && 0 === P)
                return false;
            var S = O;
            var U = performance.now();
            if (0 <= N) {
                var X = U - 392 * N;
                P = 0 === N || X < P ? X : P
            }
            O = (U - P) / (392 * is);
            O = 1 < O ? 1 : O;
            g();
            return O !== S
        }
            ;
        this.c8 = function () {
            c9.drawImage(l, y, A)
        }
    }
    function jl() {
        var g;
        var k;
        var x;
        var t;
        var n;
        var l;
        var z;
        var y;
        var A;
        var C;
        this.sr = -1;
        this.bh = function () {
            g = false;
            t = 0;
            n = .61;
            l = .07;
            z = .09;
            C = y = 0;
            this.sr = -1
        }
            ;
        this.lT = function () {
            if (g) {
                x = b_IsUISmall ? Math.floor(.69 * bi) : Math.floor(.5 * bi);
                x = FindMin(x, FindMax(r - 2 * ld, 10));
                x = FindMin(x, Math.floor(3.57 * FindMax(s - 2 * ld, 3)));
                t = Math.floor(.28 * x);
                A = document.createElement("canvas");
                A.width = x;
                A.height = t;

                var B = A.getContext("2d", {
                    alpha: true
                });

                var F = Math.floor(1 + t / 40);
                B.clearRect(0, 0, x, t);
                B.fillStyle = colorBlack75opaque;
                B.fillRect(F, F, x - 2 * F, t - 2 * F);
                B.lineJoin = "bevel";
                B.lineWidth = 2 * F;
                B.strokeStyle = colorWhite;
                B.strokeRect(F, F, x - 2 * F, t - 2 * F);
                B.imageSmoothingEnabled = true;
                var E = bo.br(k);
                var J = E.height;
                var G = n * t / J;
                B.setTransform(G, 0, 0, G, Math.floor((x - G * E.width) / 2), Math.floor((t - G * J) / 2));
                B.drawImage(E, 0, 0);
                B.setTransform(1, 0, 0, 1, Math.floor(x - z * t - l * t - F), Math.floor(F + l * t));
                F = Math.floor(z * t);
                B.lineWidth = Math.floor(1 + t / 80);
                B.strokeStyle = colorWhite;
                B.beginPath();
                B.moveTo(0, 0);
                B.lineTo(F, F);
                B.moveTo(0, F);
                B.lineTo(F, 0);
                B.stroke();
                B.setTransform(1, 0, 0, 1, 0, 0)
            }
        }
            ;
        this.show = function (B, F) {
            g || (k = B ? 1 : 2,
                g = true,
                this.lT(),
                hY.lL(),
                eD.pt(),
                C = bw.gL,
                -1 === this.sr && (this.sr = bw.dL()),
                y = F ? 1 : 0)
        }
            ;
        this.d6 = function () {
            !g || 1 <= y || (y += 5E-4 * (bw.gL - C),
                y = 1 < y ? 1 : y,
                C = bw.gL,
                bw.bx = true)
        }
            ;
        this.bz = function (B, F) {
            if (!g || 0 >= y)
                return false;
            B -= Math.floor((fx - x) / 2);
            F -= c3 - t - 2 * ld;
            if (0 > B || 0 > F || B > x || F > t)
                return false;
            B > x - t / 3 && F < t / 3 && (g = false,
                bw.bx = true);
            return true
        }
            ;
        this.c8 = function () {
            !g || 0 >= y || (c9.globalAlpha = y,
                c9.drawImage(A, Math.floor((fx - x) / 2), c3 - t - 2 * ld),
                c9.globalAlpha = 1)
        }
    }
    function kF() {
        function g(l, z, y, A, C, B, F) {
            0 !== f1[l] && 0 !== landSizeArray[l] && (y = fx * ((cs[l] + cr[l] + 1) / 2 - y) / (C - y) - .5 * z,
                A = c3 * ((cv[l] + cu[l] + 1) / 2 - A) / (B - A) - .5 * z,
                y > fx || A > c3 || y < -z || A < -z || (c9.setTransform(fq * F, 0, 0, fq * F, y, A),
                    c9.drawImage(x[d1 ? dN.dO[l] : l < ci ? 1 : 0], 0, 0)))
        }
        var k;
        var x;
        var t;
        var n;
        this.bh = function () {
            var l;
            x = [];
            k = false;
            if (fN)
                if (n = 0,
                    t = 63,
                    k = true,
                    d1)
                    for (l = 0; l <= iq; l++)
                        x.push(this.sy(dN.sz[dN.iQ[l]], t));
                else
                    x.push(this.sy(dN.sz[0], t)),
                        x.push(this.sy(dN.sz[4], t))
        }
            ;
        this.d6 = function () {
            k && 349 === ++n && (x = [],
                k = false)
        }
            ;
        this.sy = function (l, z) {
            var y = document.createElement("canvas");
            y.width = z;
            y.height = z;
            var A = y.getContext("2d", {
                alpha: true
            });
            A.clearRect(0, 0, z, z);
            var C = A.getImageData(0, 0, z, z);
            var B = C.data;
            var F;
            var E;
            var J = Math.floor(z / 2);
            var G = 1 + J * J;
            for (F = z - 1; 0 <= F; F--)
                for (E = z - 1; 0 <= E; E--) {
                    var H = (F - J) * (F - J) + (E - J) * (E - J);
                    var D = 4 * (E * z + F);
                    B[D] = l[0];
                    B[D + 1] = l[1];
                    B[D + 2] = l[2];
                    H = Math.floor((G - H) * l[3] / G);
                    B[D + 3] = 0 < H ? H : 0
                }
            A.putImageData(C, 0, 0);
            return y
        }
            ;
        this.c8 = function () {
            if (k) {
                var l;
                c9.imageSmoothingEnabled = true;
                c9.globalAlpha = 1 - (160 < n ? (n - 160) / 190 : 0);
                var z = fv / fq;
                var y = fw / fq;
                var A = (fx + fv) / fq;
                var C = (c3 + fw) / fq;
                var B = .25;
                var F = t * fq * B;
                for (l = b0 - 1; l >= ci; l--)
                    g(l, F, z, y, A, C, B);
                B = .5;
                F = t * fq * B;
                for (l = ci - 1; 0 <= l; l--)
                    g(l, F, z, y, A, C, B);
                c9.globalAlpha = 1;
                c9.imageSmoothingEnabled = 3 > fq;
                c9.setTransform(fq, 0, 0, fq, 0, 0)
            }
        }
    }
    function f7(g, k, x) {
        if (!(0 === f1[g] || 0 > x || 1E3 < x)) {
            var t = ak(x * TroopBalance[g], 1E3);
            10 === gameMode && g < ci && k < ci && (t = e2.t6(g, t));
            if (d1 && k < b0 && !cZ(g, k))
                dR(g, k, t);
            else {
                k < b0 && 0 === f1[k] && (k = b0);
                var n = ak(3 * TroopBalance[g], 256);
                t -= 500 <= x ? n : 0;
                if (!(t <= al) && aW.d4(g)) {
                    var l = aw[g].length;
                    k === b0 ? cP(g) : cK(g, k);
                    if (0 !== l || 0 !== aw[g].length)
                        d1 && (cy[g] = 1),
                            g === localPlayerID && (as.at[0] += 500 <= x ? x - 12 : x,
                                as.at[1]++,
                                as.at[12] += n,
                                as.at[13] += t),
                            cH(l, g),
                            aW.cI(g, t, k),
                            TroopBalance[g] -= t + n,
                            am.cJ(g, false)
                }
            }
        }
    }
    function ek(g, k, x, t) {
        10 === gameMode && g < ci && (t = e2.t6(g, t));
        if (t <= al || !aW.d4(g))
            return false;
        k = e7.cJ(g, k, x);
        if (0 === k)
            return false;
        x = ak(3 * TroopBalance[g], 128);
        t >= ak(TroopBalance[g], 2) && (t -= x);
        g === localPlayerID && (as.at[12] += x);
        aW.t7(g, t, k);
        TroopBalance[g] -= t + x;
        return true
    }
    function dR(g, k, x) {
        if (!(!d1 || 0 === f1[g] || 0 === f1[k] || 0 > x || x > TroopBalance[g] || g === k || cZ(g, k) || g < ci && k < ci && 7 > gameMode && 1071 > bw.dL())) {
            var t = ak(TroopBalance[g], 16);
            x -= x >= ak(TroopBalance[g], 2) ? t : 0;
            var n = landSizeArray[k] * ij - TroopBalance[k];
            0 >= n || (x = x > n ? n : x,
                g === localPlayerID && (dw.mZ(x, k),
                    as.at[12] += t,
                    as.at[16] += x),
                k === localPlayerID && (dw.mb(x, g),
                    as.at[10] += x),
                TroopBalance[g] -= x + t,
                TroopBalance[k] += x)
        }
    }
    function t8() {
        this.ii = this.gr = this.t9 = false;
        this.tA = [0, 0, 0, 0];
        this.tB = function () {
            this.ii = this.ii || this.gr;
            if (this.gr || this.t9 && this.ii) {
                var g = gg.tC[0];
                var k = gg.tC[1];
                var x = gg.tC[2];
                var t = gg.tC[3];
                g = g < this.tA[0] ? this.tA[0] : g;
                k = k < this.tA[1] ? this.tA[1] : k;
                x = x > this.tA[2] ? this.tA[2] : x;
                t = t > this.tA[3] ? this.tA[3] : t;
                this.t9 = this.gr = false;
                g === this.tA[0] && k === this.tA[1] && x === this.tA[2] && t === this.tA[3] ? this.ib() : x >= g && t >= k && j8.putImageData(j9, 0, 0, g, k, x - g + 1, t - k + 1)
            }
        }
            ;
        this.ib = function () {
            this.ii && this.tA[2] >= this.tA[0] && this.tA[3] >= this.tA[1] && j8.putImageData(j9, 0, 0, this.tA[0], this.tA[1], this.tA[2] - this.tA[0] + 1, this.tA[3] - this.tA[1] + 1);
            this.ii = false
        }
            ;
        this.bh = function () {
            var g;
            this.ii = this.gr = this.t9 = false;
            this.tA[0] = aR;
            this.tA[1] = aS;
            this.tA[2] = this.tA[3] = 0;
            var k = 1;
            a: for (; k < aR - 1; k++)
                for (g = aS - 2; 1 < g; g--)
                    if (1 === tD[ax.en(k, g) + 2]) {
                        this.tA[0] = k;
                        break a
                    }
            g = 1;
            a: for (; g < aS - 1; g++)
                for (k = aR - 2; 1 < k; k--)
                    if (1 === tD[ax.en(k, g) + 2]) {
                        this.tA[1] = g;
                        break a
                    }
            k = aR - 2;
            a: for (; 0 < k; k--)
                for (g = aS - 2; 1 < g; g--)
                    if (1 === tD[ax.en(k, g) + 2]) {
                        this.tA[2] = k;
                        break a
                    }
            g = aS - 2;
            a: for (; 0 < g; g--)
                for (k = aR - 2; 1 < k; k--)
                    if (1 === tD[ax.en(k, g) + 2]) {
                        this.tA[3] = g;
                        break a
                    }
        }
    }
    function tE() {
        this.kl = false;
        this.lk = null;
        this.tF = 0;
        this.co = this.bt = null;
        this.tG = .013;
        this.tH = .022;
        this.tI = .025;
        this.tK = 3;
        this.tL = 1.2;
        this.tM = .2;
        this.tN = .235;
        this.tO = .9;
        this.tP = .08;
        var HallOfFameTexts = ["Best Players", "Best Clans", "LEGENDS NEVER DIE", "THE NEVER ENDING WAR"];
        var k;
        var x = [-1E6, -1E6];
        this.position = [0, 0];
        this.tU = [0, 0];
        this.bh = function () {
            this.lk = [null, null];
            this.kl = false;
            this.tF = 0;
            this.lT()
        }
            ;
        this.c6 = function (t) {
            this.tF = t;
            this.kl = true;
            this.bn();
            jG.sx();
            bw.bx = true
        }
            ;
        this.d6 = function () {
            this.kl && this.bn()
        }
            ;
        this.bn = function () {
            bw.gL - 12E4 >= x[this.tF] && (x[this.tF] = bw.gL,
                this.tU = [0, 0],
                low_level_websocket.qu(0, 1 + this.tF) && iU.get_top(0, this.tF))
        }
            ;
        this.lT = function () {
            var t;
            this.bt = this.tW(b_IsUISmall ? .85 : .66, .75, r, s);
            this.co = Math.floor(this.bt / .75);
            for (t = 1; 0 <= t; t--)
                this.lk[t] && (this.lk[t][4] = bl + Math.floor(this.lk[t][5] * this.co / 10) + bm);
            k = bl + Math.floor(.1 * this.co) + bm
        }
            ;
        this.tW = function (t, n, l, z) {
            return l < n * z ? Math.floor(t * l) : Math.floor(n * t * z)
        }
            ;
        this.tX = function (t, n, l, z, y, A, C) {
            this.position[t] = C;
            var B = n.length;
            var F = bl + Math.floor(y * this.co / 10) + bm;
            this.tc(n, F, A * this.bt);
            z = [[], B, -1, z, F, y, 10 * C];
            for (y = 0; y < B; y++)
                A = {
                    mP: n[y].mP,
                    value: n[y].hq / l,
                    colorIndex: n[y].colorIndex
                },
                    z[0].push(A);
            this.lk[t] = z;
            this.td(t);
            n = this.lk[t][0][0].mP;
            1 === t && (n = "[" + n + "]");
            0 === C && te.bj(t, n);
            bw.bx = true
        }
            ;
        this.td = function (t) {
            this.lk[t][0].sort(function (n, l) {
                return l.value - n.value
            })
        }
            ;
        this.tf = function (t, n, l, z) {
            if (this.lk && this.lk[t]) {
                var y;
                var A = false;
                var C = 383 / 384;
                if (0 === t) {
                    for (y = 0; y < this.lk[t][0].length; y++)
                        if (n === this.lk[t][0][y].mP && l > .99 * this.lk[t][0][y].value && l < 1.01 * this.lk[t][0][y].value) {
                            this.lk[t][0][y].value = z;
                            A = true;
                            break
                        }
                    A || this.lk[t][0].push({
                        mP: n,
                        value: z
                    })
                } else {
                    for (y = 0; y < this.lk[t][0].length; y++)
                        if (n === this.lk[t][0][y].mP) {
                            this.lk[t][0][y].value += 32 < this.lk[t][0][y].value ? (64 - this.lk[t][0][y].value) / 256 : .25;
                            this.lk[t][0][y].value *= 1 / C;
                            A = true;
                            break
                        }
                    for (y = 0; y < this.lk[t][0].length; y++)
                        this.lk[t][0][y].value *= C;
                    A || this.lk[t][0].push({
                        mP: n,
                        value: .25
                    })
                }
                this.td(t)
            }
        }
            ;
        this.tc = function (t, n, l) {
            for (var z = t.length - 1; 0 <= z; z--)
                for (; 3 < t[z].mP.length && bu.measureText(t[z].mP, n) > l;)
                    t[z].mP = t[z].mP.substring(0, t[z].mP.length - 4) + "..."
        }
            ;
        this.bz = function (t, n) {
            if (!this.kl)
                return false;
            t -= (fx - this.bt) / 2;
            n -= (c3 - this.co) / 2;
            if (0 > t || t > this.bt || 0 > n || n > this.co)
                return this.kl = false,
                    0 === jL.rG() && jN.c6(0, true),
                    bw.bx = true;
            if (n < .3 * this.co)
                var l = 1;
            else
                n < .85 * this.co ? (l = (0 === this.tF ? 14.1 : 3) * (n - .3 * this.co) / (.55 * this.co),
                    l = Math.floor(1 + l * l)) : l = 0 === this.tF ? 200 : 10;
            this.tU[this.tF] = t < this.bt / 2 ? -l : l;
            if (x[this.tF] + 50 > bw.gL)
                return true;
            x[this.tF] = bw.gL;
            low_level_websocket.qu(0, 1 + this.tF) && iU.get_top(0, this.tF);
            return true
        }
            ;
        this.DrawHallOfFame = function () {
            if (this.kl) {
                var t = this.tG * this.bt;
                var n = this.tK * t;
                var l = this.tH * this.bt;
                var z = this.tL * l;
                var y = this.tI * this.bt;
                var A = Math.floor(.25 * this.co);
                c9.setTransform(1, 0, 0, 1, (fx - this.bt) / 2, (c3 - this.co) / 2);
                c9.fillStyle = 0 === this.tF ? nr : nm;
                c9.fillRect(0, 0, this.bt, A);
                c9.fillStyle = nW;
                c9.fillRect(0, A, this.bt, this.co - A);
                c9.fillStyle = colorWhite;
                c9.font = k;
                c9.textBaseline = cA;
                c9.textAlign = cB;
                c9.fillText(HallOfFameTexts[this.tF], Math.floor(this.bt / 2), Math.floor(.135 * this.co));
                c9.font = bl + Math.floor(.025 * this.co) + bm;
                c9.fillText(HallOfFameTexts[this.tF + 2], Math.floor(this.bt / 2), Math.floor(.2125 * this.co));
                c9.beginPath();
                c9.moveTo(this.bt / 4, 0);
                c9.lineTo(this.bt / 2 - t, 0);
                c9.lineTo(this.bt / 2, -n);
                c9.lineTo(this.bt / 2 + t, 0);
                c9.lineTo(this.bt - l, 0);
                c9.lineTo(this.bt + z, -z);
                c9.lineTo(this.bt, l);
                c9.lineTo(this.bt, this.co / 2 - t);
                c9.lineTo(this.bt + n, this.co / 2);
                c9.lineTo(this.bt, this.co / 2 + t);
                c9.lineTo(this.bt, this.co - l);
                c9.lineTo(this.bt + z, this.co + z);
                c9.lineTo(this.bt - l, this.co);
                c9.lineTo(this.bt / 2 + t, this.co);
                c9.lineTo(this.bt / 2, this.co + n);
                c9.lineTo(this.bt / 2 - t, this.co);
                c9.lineTo(l, this.co);
                c9.lineTo(-z, this.co + z);
                c9.lineTo(0, this.co - l);
                c9.lineTo(0, this.co / 2 + t);
                c9.lineTo(-n, this.co / 2);
                c9.lineTo(0, this.co / 2 - t);
                c9.lineTo(0, l);
                c9.lineTo(-z, -z);
                c9.lineTo(l, 0);
                c9.lineTo(this.bt / 4, 0);
                c9.lineTo(this.bt / 4, y);
                c9.lineTo(y, y);
                c9.lineTo(y, this.co - y);
                c9.lineTo(this.bt - y, this.co - y);
                c9.lineTo(this.bt - y, y);
                c9.lineTo(this.bt / 4, y);
                c9.fill();
                this.lk[this.tF] && this.tl(A);
                this.tm(A);
                c9.setTransform(1, 0, 0, 1, 0, 0)
            }
        }
            ;
        this.tm = function (t) {
            var n = FindMax(2, Math.floor(.06 * this.bt));
            n -= n % 2;
            var l = FindMax(2, Math.floor(.01 * this.bt));
            l -= l % 2;
            t = Math.floor(.82 * t);
            c9.fillRect(n, t, n, l);
            c9.fillRect(this.bt - n - n, t, n, l);
            c9.fillRect(Math.floor(this.bt - n - n + (n - l) / 2), Math.floor(t - (n - l) / 2), l, n)
        }
            ;
        this.tl = function (t) {
            c9.font = this.lk[this.tF][4];
            for (l = this.lk[this.tF][1] - 1, void 0; 0 <= l; l--) {
                var n;
                var l;
                c9.textAlign = o0,
                    n = Math.floor(this.tP * this.co + t + l * ((1 - 2 * this.tP) * this.co - t) / 9),
                    c9.fillText(this.lk[this.tF][0][l].value.toFixed(this.lk[this.tF][3]), Math.floor(this.tO * this.bt), n),
                    c9.fillText(l + 1 + this.lk[this.tF][6] + ".", Math.floor(this.tM * this.bt), n),
                    c9.textAlign = m8,
                    c9.fillText(this.lk[this.tF][0][l].mP, Math.floor(this.tN * this.bt), n)
            }
        }
    }
    function tn() {
        var g;
        var k;
        var x;
        var t;
        var n;
        var l;
        var z;
        var y;
        var A;
        var C;
        var B;
        var F;
        var E;
        this.kl = false;
        this.bh = function (J, G) {
            if (13 <= d)
                G ? F = J : F === J && htmlLoader.saveString(200, J);
            else if (G) {
                (c4.lk[1].iL.kl || c4.lk[2].iL.kl) && c4.tx();
                jG.sx();
                F = J;
                A = Math.floor((b_IsUISmall ? r > s ? .6 : .45 : .4) * oX);
                x = A / bo.br(17).width;
                n = Math.floor(x * bo.br(17).height);
                l = Math.floor(.4 * n);
                z = Math.floor(.6 * n);
                y = Math.floor(2.5 * z);
                t = n + l + 3 * z;
                var H = bl + l + bm;
                C = bu.measureText(F, H);
                B = (C > A ? C : A) + 2 * y;
                g = Math.floor((fx - B) / 2);
                k = Math.floor((c3 - t) / 2);
                E = document.createElement("a");
                E.appendChild(document.createTextNode(F));
                E.title = F;
                E.target = "blank";
                E.href = F;
                E.style.font = H;
                E.style.textAlign = "center";
                E.style.color = colorWhite;
                E.style.position = "absolute";
                E.style.padding = "0px";
                E.style.margin = "0px";
                E.style.top = Math.floor(k + 2 * z + n) + "px";
                E.style.left = Math.floor(g + (B - C) / 2) + "px";
                document.body.appendChild(E);
                this.kl = true;
                bw.bx = true
            }
        }
            ;
        this.ko = function () {
            if (!this.kl)
                return false;
            document.body.removeChild(E);
            this.kl = false;
            return true
        }
            ;
        this.bz = function (J, G) {
            if (!this.kl)
                return false;
            if (J < g || G < k || J > g + B || G > k + t)
                bw.bx = true,
                    this.kl = false,
                    document.body.removeChild(E),
                    0 === jL.rG() && jN.c6(0, true);
            return true
        }
            ;
        this.c8 = function () {
            this.kl && (c9.imageSmoothingEnabled = true,
                c9.setTransform(1, 0, 0, 1, g, k),
                c9.fillStyle = colorBlack75opaque,
                c9.fillRect(0, 0, B, t),
                c9.lineWidth = oE,
                c9.strokeStyle = colorWhite,
                c9.strokeRect(0, 0, B, t),
                c9.setTransform(x, 0, 0, x, g + (B - A) / 2, k + z),
                c9.drawImage(bo.br(17), 0, 0),
                c9.setTransform(1, 0, 0, 1, 0, 0))
        }
    }
    function ty() {
        var g = 0;
        var k = [0, 0, 0, 0, 0];
        var x = [0, 0, 0, 0, 0];
        var t = [1, 1, 1, 1, 1];
        var n = [true, true, true, true, true];
        this.tz = [true, true, true, true, true];
        var l = null;
        var z;
        this.u0 = function (y, A) {
            l = y;
            n = A;
            z = [o5, o6, o7, o8, o9];
            this.bh()
        }
            ;
        this.u2 = function (y) {
            n = y
        }
            ;
        this.bh = function () {
            if (bo.bp()) {
                var y = Math.floor((b_IsUISmall ? .261 : .195) * bi);
                var A = Math.floor(.9 * y);
                var C = Math.floor(.17 * A);
                g = b_IsUISmall ? 2 * ld : ld;
                t[0] = y / l[0].width;
                t[1] = A / l[1].width;
                t[2] = C / l[2].height;
                t[3] = C / l[3].height;
                t[4] = C / l[4].height;
                t[3] *= 1.07;
                k[0] = g;
                k[1] = g;
                k[2] = g;
                k[3] = g;
                k[4] = Math.floor(2 * g + t[3] * l[3].width);
                x[0] = g;
                x[1] = x[0] + g + t[0] * l[0].height;
                x[2] = x[1] + g + t[1] * l[1].height;
                x[3] = x[2] + g + t[2] * l[2].height;
                x[4] = x[3];
                if (!n[0])
                    for (y = 0; 5 > y; y++)
                        x[y] -= t[0] * l[0].height + g;
                if (!n[1])
                    for (y = 2; 5 > y; y++)
                        x[y] -= t[1] * l[1].height + g
            }
        }
            ;
        this.kl = function () {
            return !(7 === jL.rG() && b_IsUISmall)
        }
            ;
        this.bz = function (y, A, C) {
            if (!l || !this.kl())
                return false;
            var B;
            for (B = n.length - 1; 0 <= B; B--)
                if (n[B] && this.tz[B] && y > k[B] && A > x[B] && y < k[B] + t[B] * l[B].width && A < x[B] + t[B] * l[B].height)
                    return ml.bh(z[B], C),
                        true;
            return false
        }
            ;
        this.c8 = function () {
            if (l && this.kl()) {
                c9.imageSmoothingEnabled = true;
                var y;
                for (y = 0; 5 > y; y++)
                    n[y] && this.tz[y] && (c9.setTransform(t[y], 0, 0, t[y], k[y], x[y]),
                        c9.drawImage(l[y], 0, 0));
                c9.setTransform(1, 0, 0, 1, 0, 0)
            }
        }
    }
    function jm() {
        function g(n) {
            var l = jJ.u5[n];
            var z = l.f5;
            var y = l.f6;
            var A = l.bt;
            var C = l.co;
            c9.fillStyle = l.u8;
            c9.fillRect(z, y, A, C);
            n === k && (c9.fillStyle = t,
                c9.fillRect(z, y, A, C));
            c9.lineWidth = 3;
            c9.strokeStyle = x;
            c9.strokeRect(z, y, A, C);
            n = l.f5;
            z = l.f6;
            y = l.bt;
            A = l.co;
            c9.textAlign = cB;
            c9.textBaseline = cA;
            c9.font = l.font;
            c9.fillStyle = x;
            c9.fillText(l.mp, Math.floor(n + y / 2), Math.floor(z + A / 2 + .1 * l.bq))
        }
        var k;
        var x;
        var t;
        this.es = this.f6 = this.co = this.bt = 0;
        this.bh = function () {
            k = -1;
            x = colorWhite;
            t = "rgba(255,255,255,0.16)";
            this.u5 = Array(7);
            this.co = Math.floor((b_IsUISmall ? .123 : .093) * bi);
            this.bt = Math.floor((b_IsUISmall ? 3.96 : 4.2) * this.co);
            this.es = Math.floor(.025 * this.bt);
            var n = Math.floor(.26 * this.co);
            var l = bl + n + bm;
            this.u5[0] = {
                f5: 0,
                f6: 0,
                bt: Math.floor(.6 * this.bt - this.es / 2),
                co: this.co,
                mp: "Multiplayer",
                font: l,
                u8: "rgba(22,88,22,0.8)",
                bq: n
            };
            n = Math.floor(.18 * this.co);
            l = bl + n + bm;
            this.u5[1] = {
                f5: 0,
                f6: 0,
                bt: this.bt - this.u5[0].bt - this.es,
                co: this.co,
                mp: "Singleplayer",
                font: l,
                u8: "rgba(22,88,88,0.8)",
                bq: n
            };
            this.u5[2] = {
                f5: 0,
                f6: 0,
                bt: this.bt,
                co: Math.floor(.3 * this.co),
                mp: "",
                font: this.u5[1].font,
                u8: "rgba(100,0,0,0.8)",
                bq: this.u5[1].bq
            };
            this.u5[3] = {
                f5: 0,
                f6: 0,
                bt: this.bt,
                co: this.co,
                mp: "Back",
                font: this.u5[0].font,
                u8: "rgba(0,0,0,0.8)",
                bq: this.u5[0].bq
            };
            this.u5[4] = {
                f5: 0,
                f6: 0,
                bt: this.bt,
                co: Math.floor(.3 * this.co),
                mp: "The game was updated!",
                font: this.u5[1].font,
                u8: "rgba(100,0,0,0.8)",
                bq: this.u5[1].bq
            };
            this.u5[5] = {
                f5: 0,
                f6: 0,
                bt: this.u5[0].bt,
                co: Math.floor(.8 * this.co),
                mp: "Reload",
                font: this.u5[0].font,
                u8: "rgba(0,100,0,0.8)",
                bq: this.u5[0].bq
            };
            this.u5[6] = {
                f5: 0,
                f6: 0,
                bt: this.u5[1].bt,
                co: this.u5[5].co,
                mp: "Back",
                font: this.u5[0].font,
                u8: "rgba(0,0,0,0.8)",
                bq: this.u5[0].bq
            };
            this.r2()
        }
            ;
        this.r2 = function () {
            this.f6 = Math.floor(.54 * c3);
            this.u5[0].f5 = Math.floor(.5 * fx - .5 * this.bt);
            this.u5[1].f5 = this.u5[0].f5 + this.u5[0].bt + this.es;
            this.u5[2].f5 = this.u5[3].f5 = this.u5[0].f5;
            this.u5[4].f5 = this.u5[5].f5 = this.u5[0].f5;
            this.u5[6].f5 = this.u5[1].f5;
            this.u5[0].f6 = Math.floor(.54 * c3);
            this.u5[1].f6 = this.u5[0].f6;
            this.u5[2].f6 = Math.floor((c3 - this.u5[2].co - this.u5[3].co - this.es) / 2);
            this.u5[3].f6 = this.u5[2].f6 + this.u5[2].co + this.es;
            this.u5[4].f6 = Math.floor((c3 - this.u5[4].co - this.u5[5].co - this.es) / 2);
            this.u5[5].f6 = this.u5[6].f6 = this.u5[4].f6 + this.u5[4].co + this.es
        }
            ;
        this.u9 = function () {
            g(0);
            g(1)
        }
            ;
        this.uB = function () {
            g(2);
            g(3)
        }
            ;
        this.uC = function () {
            g(4);
            g(5);
            g(6)
        }
            ;
        this.lK = function (n, l, z) {
            var y = -1;
            0 === jL.rG() ? y = this.od(n, l, 0, 2) : 3 === jL.rG() ? y = this.od(n, l, 3, 1) : 5 === jL.rG() && (y = this.od(n, l, 5, 2));
            k !== y && (k = y,
                z && (bw.bx = true));
            return -1 !== y ? (jI.oi(),
                true) : false
        }
            ;
        this.od = function (n, l, z, y) {
            for (var A = z; A < z + y; A++)
                if (n >= this.u5[A].f5 && l >= this.u5[A].f6 && n <= this.u5[A].f5 + this.u5[A].bt && l <= this.u5[A].f6 + this.u5[A].co)
                    return A;
            return -1
        }
    }
    function uF() {
        function g(k) {
            return 0 > k ? 0 : 255 < k ? 255 : Math.floor(k)
        }
        this.co = this.bt = 0;
        this.kl = false;
        this.uJ = this.uI = this.uH = this.n9 = this.es = this.uG = 0;
        this.colors = null;
        this.bh = function () {
            r < 2 * s ? this.bt = Math.floor((b_IsUISmall ? .94 : .4) * r) : (this.co = Math.floor((b_IsUISmall ? .88 : .4) * s),
                this.bt = Math.floor(2 * this.co));
            this.co = this.bt / 2;
            this.es = this.co / 16;
            this.kl = true;
            this.uG = 0;
            this.uH = (this.co - 3 * this.es) / 2;
            this.uI = this.bt - 3 * this.es - this.uH;
            this.uJ = (this.co - 4 * this.es) / 3
        }
            ;
        this.uK = function () {
            this.colors = [[0, 0, 0], [0, 0, 0]];
            var k = v().split("");
            if (6 !== k.length)
                for (k = 2; 0 <= k; k--)
                    this.colors[0][k] = g(256 * Math.random());
            else
                for (var x = 2; 0 <= x; x--)
                    this.colors[0][x] = g(4 * (10 * parseInt(k[2 * x]) + parseInt(k[2 * x + 1])));
            this.uM()
        }
            ;
        this.color = function () {
            return [ak(this.colors[0][0], 4), ak(this.colors[0][1], 4), ak(this.colors[0][2], 4)]
        }
            ;
        this.bz = function (k, x) {
            this.uG = 0;
            var t = (c3 - this.co) / 2;
            k -= (fx - this.bt) / 2;
            x -= t;
            if (0 > k || 0 > x || k >= this.bt - 1 || x >= this.co - 1)
                return this.kl = false,
                    0 === jL.rG() && jN.c6(0, true),
                    bw.bx = true,
                    false;
            if (k < this.es || x < this.es || k >= this.bt - this.es || x >= this.co - this.es)
                return true;
            if (k < this.es + this.uH)
                return x < this.es + this.uH && 0 !== this.n9 && (this.n9 = 0,
                    bw.bx = true),
                    true;
            if (k < 2 * this.es + this.uH)
                return true;
            k -= 2 * this.es + this.uH;
            if (x < this.es + this.uJ)
                return this.uG = 1,
                    this.colors[this.n9][0] = g(256 * k / this.uI),
                    bw.bx = true;
            if (x < 2 * this.es + this.uJ)
                return true;
            if (x < 2 * this.es + 2 * this.uJ)
                return this.uG = 2,
                    this.colors[this.n9][1] = g(256 * k / this.uI),
                    bw.bx = true;
            x >= 3 * this.es + 2 * this.uJ && (this.uG = 3,
                this.colors[this.n9][2] = g(256 * k / this.uI),
                bw.bx = true);
            return true
        }
            ;
        this.uM = function () {
            for (var k = 2; 0 <= k; k--)
                this.colors[0][k] = g(this.colors[0][k])
        }
            ;
        this.uO = function () {
            for (k = "", t = 0, void 0; 3 > t; t++) {
                var k;
                var x;
                var t;
                x = ak(this.colors[0][t], 4),
                    10 > x && (k += "0"),
                    k += x.toString();
            }
            a8(k)
        }
            ;
        this.lK = function (k) {
            0 !== this.uG && (k -= 2 * this.es + this.uH + (fx - this.bt) / 2,
                this.colors[this.n9][this.uG - 1] = g(256 * k / this.uI),
                bw.bx = true)
        }
            ;
        this.uP = function () {
            0 < this.uG && (this.uG = 0,
                this.uM(),
                this.uO(),
                bw.bx = true)
        }
            ;
        this.c8 = function () {
            c9.setTransform(1, 0, 0, 1, (fx - this.bt) / 2, (c3 - this.co) / 2);
            c9.fillStyle = colorBlack75opaque;
            c9.fillRect(0, 0, this.bt, this.co);
            c9.lineWidth = oE;
            c9.strokeStyle = colorWhite;
            c9.strokeRect(-1, -1, this.bt + 2, this.co + 2);
            c9.font = bl + Math.floor(.8 * this.uH) + bm;
            c9.textBaseline = cA;
            c9.textAlign = cB;
            this.uQ(0);
            c9.lineWidth = oE;
            this.uR(0);
            this.uR(1);
            this.uR(2);
            c9.setTransform(1, 0, 0, 1, 0, 0)
        }
            ;
        this.uQ = function (k) {
            c9.fillStyle = "rgb(" + this.colors[k][0] + "," + this.colors[k][1] + "," + this.colors[k][2] + ")";
            c9.fillRect(this.es, this.es, this.uH, 2 * this.uH + this.es);
            c9.lineWidth = 2 + oE;
            c9.strokeStyle = colorWhite;
            c9.strokeRect(this.es, this.es, this.uH, 2 * this.uH + this.es)
        }
            ;
        this.uR = function (k) {
            c9.fillStyle = "rgb(" + (0 === k ? 200 : 2 === k ? 50 : 0) + "," + (1 === k ? 200 : 2 === k ? 50 : 0) + "," + (2 === k ? 255 : 0) + ")";
            c9.fillRect(2 * this.es + this.uH, this.es + k * (this.es + this.uJ), Math.floor(this.colors[this.n9][k] * this.uI / 255), this.uJ);
            c9.strokeStyle = colorWhite;
            c9.strokeRect(2 * this.es + this.uH, this.es + k * (this.es + this.uJ), this.uI, this.uJ)
        }
    }
    function jn() {
        function g() {
            H++;
            G = bw.gL;
            low_level_websocket.qu((H + D) % low_level_websocket.ud, 4) && (K = true,
                iU.join_lobby((H + D) % low_level_websocket.ud))
        }
        function k() {
            if (H >= low_level_websocket.ud - 1)
                H = -1;
            else if (0 === H) {
                jM.uk(3249);
                return
            }
            g()
        }
        function x(I, L, O) {
            var P = Math.floor((fx - z) / 2) + C;
            var W = P + Math.floor(O * (z - 2 * C));
            c9.lineWidth = L;
            c9.beginPath();
            c9.moveTo(P, I);
            c9.lineTo(W, I);
            c9.lineTo(Math.floor(P - C + O * z), I + l);
            c9.lineTo(P - C, I + l);
            c9.closePath()
        }
        var t;
        var n;
        var l;
        var z;
        var y;
        var A;
        var C;
        var B;
        var F;
        var E;
        var J;
        var G;
        var H;
        var D = 0;
        var K;
        this.bh = function () {
            jL.setState(6);
            t = 0;
            n = 1;
            B = "rgba(0,220,120,0.4)";
            F = "rgba(0,0,0,0.8)";
            this.lT();
            bw.bx = true;
            H = 0;
            K = false;
            g()
        }
            ;
        this.lT = function () {
            z = Math.floor((b_IsUISmall ? .5 : .25) * bi);
            y = z + 12;
            l = Math.floor(.125 * z);
            C = 3 * l;
            A = Math.floor(.225 * z);
            J = Math.floor(.3 * l);
            E = o3 + J + bm
        }
            ;
        this.ub = function (I) {
            D = I
        }
            ;
        this.uf = function (I) {
            I === (H + D) % low_level_websocket.ud && (K = false,
                k())
        }
            ;
        this.bz = function (I, L) {
            var O = Math.floor((fx - y) / 2);
            var P = Math.floor(.5 * (c3 - c2 - l - A)) + l + c2;
            return I > O && I < O + y && L > P && L < P + A ? (jG.bh(),
                jJ.lK(I, L, false),
                bw.bx = true) : false
        }
            ;
        this.qw = function (I) {
            6 !== jL.rG() || K || (G = bw.gL,
                K = true,
                iU.join_lobby(I))
        }
            ;
        this.d6 = function () {
            6 === jL.rG() && (K ? bw.gL > G + 2E4 && jM.uk(3250) : bw.gL > G + 2E4 && k(),
                t += .07 * n * (16 > t ? 5 + t : 84 < t ? 105 - t : 17),
                100 < t ? (t = 100,
                    n = -1) : 0 > t && (t = 0,
                        n = 1),
                B = "rgba(0," + Math.floor(190 - 1.9 * t) + "," + Math.floor(120 - 1.2 * t) + "," + (.4 + .004 * t) + ")",
                F = "rgba(0," + Math.floor(1.9 * t) + "," + Math.floor(1.2 * t) + "," + (.8 - .004 * t) + ")",
                bw.bx = true)
        }
            ;
        this.c8 = function () {
            var I = Math.floor((fx - y) / 2);
            var L = Math.floor(.5 * (c3 - c2 - l - A));
            var O = t / 100;
            c9.fillStyle = F;
            x(L, 3, 1);
            c9.fill();
            c9.fillStyle = B;
            x(L, 3, O);
            c9.fill();
            c9.strokeStyle = colorWhite;
            x(L, 3, 1);
            c9.stroke();
            c9.textAlign = cB;
            c9.textBaseline = cA;
            c9.font = E;
            c9.fillStyle = colorWhite;
            c9.fillText("Loading", Math.floor(.5 * fx), Math.floor(L + .58 * l));
            L = L + l + c2;
            O = y;
            var P = A;
            c9.fillStyle = nV;
            c9.fillRect(I, L, O, P);
            c9.lineWidth = 3;
            c9.strokeStyle = colorWhite;
            c9.strokeRect(I, L, O, P);
            var W = Math.floor(.3 * P);
            c9.textAlign = cB;
            c9.textBaseline = cA;
            c9.font = o3 + W + bm;
            c9.fillStyle = colorWhite;
            c9.fillText("Back", Math.floor(I + O / 2), Math.floor(L + P / 2 + .1 * W))
        }
    }
    function jo() {
        var g;
        this.bh = function () {
            jJ.bh();
            jN.bh();
            g = 0;
            ur.bh();
            jG.bh()
        }
            ;
        this.setState = function (k) {
            g = k
        }
            ;
        this.rG = function () {
            return g
        }
            ;
        this.ut = function () {
            this.setState(8);
            jU.sx();
            c4.tx();
            c5.kl = false;
            ml.bz(-1E3, -1E3)
        }
            ;
        this.tx = function (k) {
            if (!uu)
                return false;
            if (!(400 > bw.gL)) {
                if ("Enter" === k.key || "Escape" === k.key) {
                    if (this.uv())
                        return 0 === g && jN.c6(0, true),
                            true;
                    if ("Enter" === k.key) {
                        if (0 === g)
                            return jG.uw(),
                                true;
                        if (7 === g)
                            return true
                    }
                }
                return false
            }
        }
            ;
        this.uv = function () {
            return ml.ko() || c4.tx() ? true : c5.kl ? (c5.kl = false,
                true) : false
        }
            ;
        this.bz = function (k, x) {
            if (!ur.bz(k, x) && uu && !(ml.bz(k, x) || 6 === g && jK.bz(k, x) || 2 === g && dk.bz(k, x) || jW.bz(k, x) || c5.bz(k, x) || ux.bz(k, x, true) || c4.bz(k, x, true))) {
                jI.bz(k, x);
                if (0 === g)
                    jG.bz(k, x);
                else if (3 === g)
                    jM.bz(k, x);
                else if (5 === g)
                    jO.bz(k, x);
                else if (7 === g && jU.bz(k, x))
                    return;
                te.bz(k, x)
            }
        }
            ;
        this.lK = function (k, x) {
            jW.lK(k, x);
            if (!jI.qs) {
                if (ur.lK(k, x)) {
                    jI.oi();
                    return
                }
                if (2 === g && dk.lK(k, x)) {
                    jI.oi();
                    return
                }
                if (0 <= c4.od(k, x)) {
                    jI.oi();
                    return
                }
                if (c4.lK(k, x)) {
                    jI.oi();
                    return
                }
                if (jJ.lK(k, x, true))
                    return
            }
            jI.lK(k, x)
        }
            ;
        this.l9 = function (k, x) {
            jI.oj();
            c4.uP() || ux.bz(k, x, false) || c4.bz(k, x, false)
        }
            ;
        this.om = function (k, x, t) {
            c4.lk[1].iL.kl || 0 === g && jI.om(k, t)
        }
            ;
        this.uy = function () {
            jJ.r2();
            c4.r2();
            0 === g ? (jN.r2(0),
                jI.r2()) : 7 === g && jU.lT();
            bw.bx = true
        }
            ;
        this.c8 = function () {
            if (8 !== g && 10 !== g) {
                c9.imageSmoothingEnabled = true;
                this.hV();
                jI.c8();
                jH.c8();
                var k = Math.floor(.3 * c3);
                var x = bo.ki("territorial.io");
                var t = Math.floor(1.75 * c3) / x.width;
                t = t * x.width < .98 * fx ? .98 * fx / x.width : t;
                c9.globalAlpha = .15;
                var n = Math.floor(.5 * (fx - t * x.width));
                n = Math.floor(n / t);
                k = Math.floor(k - .5 * x.height * t);
                k = Math.floor(k / t);
                c9.setTransform(t, 0, 0, t, n, k);
                c9.drawImage(x, n, k);
                c9.setTransform(1, 0, 0, 1, 0, 0);
                c9.globalAlpha = 1;
                ux.c8();
                te.c8();
                c4.c8();
                jW.c8();
                0 === g ? jG.c8() : 2 === g ? dk.c8() : 3 === g ? jM.c8() : 5 === g ? jO.c8() : 6 === g ? jK.c8() : 7 === g && jU.c8();
                c4.v0();
                ur.c8();
                c5.c8();
                ml.c8()
            }
        }
            ;
        this.hV = function () {
            if (uu) {
                var k = r / aR;
                var x = s / aS;
                k = k > x ? k : x;
                c9.setTransform(k, 0, 0, k, Math.floor((r - k * aR) / 2), Math.floor((s - k * aS) / 2));
                c9.drawImage(hW, 0, 0);
                c9.setTransform(1, 0, 0, 1, 0, 0);
                c9.fillStyle = nV
            } else
                c9.fillStyle = colorBlack;
            c9.fillRect(0, 0, r, s)
        }
    }
    function v3() {
        this.co = this.bt = 0;
        this.kl = false;
        this.my = 10;
        this.b3 = .12;
        this.v5 = this.v4 = this.uG = false;
        this.bh = function () {
            this.bt = r < 1 * s ? Math.floor((b_IsUISmall ? .94 : .6) * r) : Math.floor((b_IsUISmall ? .94 : .6) * s);
            this.bt -= this.bt % this.my;
            this.co = 1 * this.bt;
            this.kl = true;
            this.uG = false
        }
            ;
        this.bz = function (g, k, x) {
            var t = (c3 - this.co) / 2;
            g -= (fx - this.bt) / 2;
            k -= t;
            if (0 > g || 0 > k || g >= this.bt - 1 || k >= this.co - 1)
                return 0 === x && (this.kl = false,
                    0 === jL.rG() && jN.c6(0, true),
                    bw.bx = true),
                    false;
            t = Math.floor(this.bt / this.my);
            g = ak(g, t) + this.my * ak(k, t);
            g = 0 > g ? 0 : g >= a5.n2 ? a5.n2 - 1 : g;
            if (0 === x || 1 === x && !a5.a7[g] || 2 === x && a5.a7[g])
                this.v4 = !a5.a7[g],
                    this.v5 = this.uG = true,
                    a5.a7[g] = !a5.a7[g],
                    a5.nK(),
                    bw.bx = true;
            return true
        }
            ;
        this.lK = function (g, k) {
            this.uG && this.bz(g, k, this.v4 ? 1 : 2)
        }
            ;
        this.uP = function () {
            this.v5 && (a3(),
                this.v5 = false);
            this.uG = this.v5 = false
        }
            ;
        this.c8 = function () {
            c9.imageSmoothingEnabled = true;
            var g = (fx - this.bt) / 2;
            var k = (c3 - this.co) / 2;
            c9.setTransform(1, 0, 0, 1, g, k);
            c9.fillStyle = colorBlack75opaque;
            c9.fillRect(0, 0, this.bt, this.co);
            c9.lineWidth = oE;
            c9.strokeStyle = colorWhite;
            c9.strokeRect(-1, -1, this.bt + 2, this.co + 2);
            for (x = Math.floor(this.bt / this.my), t = (x - 2 * this.b3 * x) / a5.bt, n = a5.n2 - 1, void 0; 0 <= n; n--) {
                var x;
                var t;
                var n;
                c9.setTransform(1, 0, 0, 1, Math.floor(g + n % this.my * x), Math.floor(k + ak(n, this.my) * x)),
                    a5.a7[n] && (c9.fillStyle = nd,
                        c9.fillRect(0, 0, x, x)),
                    c9.setTransform(t, 0, 0, t, Math.floor(g + n % this.my * x + this.b3 * x), Math.floor(k + ak(n, this.my) * x + this.b3 * x)),
                    c9.drawImage(a5.ke[n], 0, 0);
            }
            c9.setTransform(1, 0, 0, 1, 0, 0);
            c9.imageSmoothingEnabled = false
        }
    }
    function jp() {
        function g() {
            var l = jL.rG();
            0 === l ? jG.sx() : 6 === l ? low_level_websocket.vB(errorCode) : 7 === l ? (jU.sx(),
                low_level_websocket.close(low_level_websocket.mS, 3240)) : 8 === l && (jD(),
                    jG.sx());
            jL.setState(3);
            jJ.r2();
            jJ.u5[2].mp = ThrowError(errorCode);
            bw.bx = true
        }
        function ThrowError(errorCode) {
            var z;
            for (z = errorList.length - 1; 0 <= z; z--)
                if (errorCode === errorList[z].code)
                    return errorList[z].l;
            return errorStringGeneric + errorCode
        }
        var errorCode;
        var errorList;
        var errorStringGeneric;
        this.PopulateErrors = function () {
            errorList = [];
            errorList.push({
                l: "No Server Response",
                code: 1006
            });
            errorList.push({
                l: "Account successfully saved!",
                code: 3231
            });
            errorList.push({
                l: "Account Error",
                code: 3232
            });
            errorList.push({
                l: "No Servers Found",
                code: 3249
            });
            errorList.push({
                l: "Thanks for the vote.",
                code: 3252
            });
            errorList.push({
                l: "Please accept Cookies",
                code: 3265
            });
            errorList.push({
                l: "Invalid Password Format",
                code: 3266
            });
            errorList.push({
                l: "Lobby Timeout",
                code: 4207
            });
            errorList.push({
                l: "Invalid Username",
                code: 4214
            });
            errorList.push({
                l: "User already exists.",
                code: 4224
            });
            errorList.push({
                l: "No Client Response Error",
                code: 4229
            });
            errorStringGeneric = "Error "
        }
            ;
        this.bh = function (l, z) {
            errorCode = z;
            var y = jL.rG();
            if (6 === y) {
                if (4211 === z) {
                    jO.bh(0, 0);
                    return
                }
                if (4214 !== z) {
                    jK.uf(l);
                    return
                }
            } else if (7 === y) {
                if (l !== low_level_websocket.mS)
                    return
            } else {
                8 === y && (l !== low_level_websocket.jE || isSingleplayer || dw.mD(ThrowError(z)));
                return
            }
            g()
        }
            ;
        this.uk = function (l) {
            errorCode = l;
            8 === jL.rG() ? dw.mD(ThrowError(l)) : g()
        }
            ;
        this.lT = function () {
            jJ.u5[2].mp = ThrowError(errorCode)
        }
            ;
        this.bz = function (l, z) {
            3 === jJ.od(l, z, 3, 1) && this.vC(l, z)
        }
            ;
        this.vC = function (l, z) {
            jG.bh();
            jJ.lK(l, z, false);
            bw.bx = true
        }
            ;
        this.c8 = function () {
            jJ.uB()
        }
    }
    function jq() {
        function g() {
            k.push({
                input: document.createElement("INPUT"),
                kl: false,
                color: x
            });
            var n = k.length - 1;
            k[n].input.setAttribute("type", "text");
            k[n].input.value = "";
            k[n].input.style.textAlign = 0 === n ? "center" : "left";
            k[n].input.style.backgroundColor = x;
            k[n].input.style.border = "3px solid " + colorWhite;
            k[n].input.style.color = colorWhite;
            k[n].input.style.position = "absolute";
            k[n].input.readOnly = 3 === n;
            k[n].input.addEventListener("input", function () {
                0 === n && jG.vG()
            })
        }
        var k;
        var x;
        var t;
        this.bh = function () {
            x = "rgba(0,0,0,0.6)";
            t = nk;
            void 0 !== k && this.c6(0, false);
            k = [];
            g();
            this.lT()
        }
            ;
        this.lT = function () {
            var n = Math.floor(.22 * jJ.co);
            k[0].input.style.font = bl + n + bm;
            k[0].input.style.padding = Math.floor(.3 * n) + "px 5px";
            k[0].input.style.width = jJ.bt - 13 + "px"
        }
            ;
        this.br = function (n) {
            return k[n]
        }
            ;
        this.r2 = function (n) {
            k[n].input.style.left = Math.floor((fx - (jJ.bt - 3) - 7) / 2) + "px";
            0 === n && (k[n].input.style.bottom = Math.floor(c3 - jJ.f6 + jJ.es) + "px")
        }
            ;
        this.c6 = function (n, l) {
            k[n].kl !== l && ((k[n].kl = l) ? document.body.appendChild(k[n].input) : document.body.removeChild(k[n].input))
        }
            ;
        this.vH = function (n, l) {
            l && k[n].color === x || !l && k[n].color === t || (k[n].color = l ? x : t,
                k[n].input.style.backgroundColor = k[n].color)
        }
    }
    function kJ() {
        this.vL = this.vK = this.vJ = 0;
        var g;
        var k;
        var x;
        var t;
        this.bh = function (n) {
            if (7 === jL.rG()) {
                g = n;
                k = 0;
                x = bw.gL + 4500;
                t = jS.vQ(g) ? 2 : 0;
                jL.setState(10);
                c9.imageSmoothingEnabled = true;
                jL.hV();
                n = bo.ki("loading");
                var l = (b_IsUISmall ? .396 : .25) * bi / n.width;
                c9.setTransform(l, 0, 0, l, Math.floor((r - l * n.width) / 2), Math.floor((s - l * n.height) / 2));
                c9.drawImage(n, 0, 0);
                c9.setTransform(1, 0, 0, 1, 0, 0)
            }
        }
            ;
        this.eL = function () {
            0 < t && bw.gL > x && (t--,
                x += 4500,
                0 === bw.vS && 0 === bw.vT && low_level_websocket.qu(low_level_websocket.jE, 5))
        }
            ;
        this.vU = function () {
            10 === jL.rG() && (k++,
                2 <= k && (jS.vV(g),
                    g = null))
        }
    }
    function kG() {
        function g(N, S) {
            var U = F[N].getContext("2d", {
                alpha: true
            });
            U.clearRect(0, 0, 48, 48);
            var X = 48 / S.width;
            var T = 48 / S.height;
            X = T < X ? T : X;
            U.setTransform(X, 0, 0, X, Math.floor((48 - X * S.width) / 2), Math.floor((48 - X * S.height) / 2));
            U.drawImage(S, 0, 0);
            U.setTransform(1, 0, 0, 1, 0, 0)
        }
        function k(N, S, U, X) {
            X.beginPath();
            X.moveTo(N, N);
            X.lineTo(N + Math.cos(U) * S, N + Math.cos(U + 1.5 * Math.PI) * S);
            X.stroke()
        }
        function x() {
            if (7 === jL.rG()) {
                for (N = -1, S = E.length - 1, void 0; 0 <= S; S--) {
                    var N;
                    var S;
                    if (null === E[S].lO) {
                        N = S;
                        break
                    }
                }
                if (-1 !== N) {
                    S = t(E[N].wB, E[N].wC);
                    if (null !== S)
                        E[N].lO = S;
                    else {
                        S = aR;
                        var U = aS;
                        var X = hW;
                        var T = ou;
                        var pa = wI;
                        var ea = wJ;
                        var ba = mc;
                        var ma = w8;
                        wK(E[N].wB, E[N].wC);
                        wL.wM();
                        var Q = document.createElement("canvas");
                        Q.width = 128;
                        Q.height = 128;

                        var M = Q.getContext("2d", {
                            alpha: false
                        });

                        var R = 128 / aR;
                        var Y = 128 / aS;
                        Y > R && (R = Y);
                        M.imageSmoothingEnabled = true;
                        M.setTransform(R, 0, 0, R, (128 - R * aR) / 2, (128 - R * aS) / 2);
                        M.drawImage(hW, 0, 0);
                        aR = S;
                        aS = U;
                        hW = X;
                        ou = T;
                        wI = pa;
                        wJ = ea;
                        mc = ba;
                        w8 = ma;
                        E[N].lO = Q
                    }
                    bw.bx = true
                }
            }
        }
        function t(N, S) {
            for (var U = E.length - 1; 0 <= U; U--)
                if (null !== E[U].lO && E[U].wB === N && E[U].wC === S)
                    return E[U].lO;
            return null
        }
        function n(N, S) {
            var U;
            var X;
            if (0 === E.length)
                return false;
            var T = 0;
            var pa = C;
            for (X = 0; X < y[1]; X++) {
                var ea = A;
                for (U = 0; U < y[0]; U++) {
                    if (N > ea && N < ea + l && S > pa && S < pa + l)
                        return iU.join_game(E[T].w9),
                            G = E[T].w9 !== G ? E[T].w9 : -1,
                            bw.bx = true;
                    T++;
                    if (T >= E.length)
                        return false;
                    ea += l + c2
                }
                pa += l + c2
            }
            return false
        }
        var l;
        var z;
        var y;
        var A;
        var C;
        var B;
        var F;
        var E;
        var J;
        var G;
        var H;
        var D;
        var lobbyMenuTopRightTexts = ["Joined", "Skipped", "Multiplayer", "Singleplayer"];
        var I = [0, 0, 0, 0];
        var L;
        var O;
        var P;
        var W;
        var V;
        this.bh = function () {
            V = 0;
            G = -1;
            jL.setState(7);
            E = [];
            this.lT();
            var N;
            F = Array(11);
            for (N = F.length; 0 <= N; N--)
                F[N] = document.createElement("canvas"),
                    F[N].width = 48,
                    F[N].height = 48;
            for (N = 0; 7 > N; N++) {
                var S = N + 2;

                var U = F[S - 2].getContext("2d", {
                    alpha: true
                });

                var X = 1.5 * Math.PI;
                U.lineWidth = 2;
                U.strokeStyle = colorWhite;
                U.clearRect(0, 0, 48, 48);
                for (var T = 0; T < S; T++) {
                    var pa = X + 2 * Math.PI / S;
                    var ea = X;
                    var ba = pa;
                    var ma = U;
                    ma.fillStyle = dN.w0[T + 1];
                    ma.beginPath();
                    ma.arc(24, 24, 23, ea, ba);
                    ma.lineTo(24, 24);
                    ma.fill();
                    0 !== T && k(24, 23, X, U);
                    X = pa
                }
                k(24, 23, 1.5 * Math.PI, U);
                U.beginPath();
                U.arc(24, 24, 23, 0, 2 * Math.PI);
                U.stroke()
            }
            g(7, bo.br(4));
            g(8, a5.ke[27]);
            g(9, a5.ke[46]);
            g(10, a5.ke[19]);
            bw.bx = true
        }
            ;
        this.sx = function () {
            E = [];
            F = []
        }
            ;
        this.lT = function () {
            var N;
            var S;
            y = [0, 0];
            J = [0, 0, 0, 0];
            b_IsUISmall ? (H = Math.floor(.8 * .4 * bi),
                D = Math.floor(.56 * H),
                J[0] = c2,
                r < s ? (J[1] = D + 2 * c2,
                    J[2] = r - 3 * J[0],
                    J[3] = te.c7() - 3 * c2 - D,
                    O = Math.floor(.95 * D),
                    P = Math.floor((r - H - c2) / 2),
                    W = Math.floor(c2 + D / 2)) : (J[1] = c2,
                        J[2] = r - 3 * c2 - H,
                        J[3] = te.c7() - 2 * c2,
                        O = Math.floor(.8 * H),
                        J[3] - D < H && (O = Math.floor(.8 * (J[3] - D)),
                            O = FindMax(D, O)),
                        P = Math.floor(r - H / 2 - c2),
                        W = Math.floor(c2 + D + (J[3] - D) / 2),
                        W = FindMax(W, Math.floor(D + 2 * c2 + O / 2)))) : (H = Math.floor(.2016 * bi),
                            D = Math.floor(.56 * H),
                            J[2] = Math.floor(.5 * r),
                            J[3] = Math.floor(.5 * s),
                            J[1] = Math.floor(.45 * (s - J[3])),
                            J[0] = Math.floor((r - J[2]) / 2),
                            O = Math.floor(.75 * D),
                            P = Math.floor(r / 2),
                            W = Math.floor(J[1] + J[3] + (s - J[3] - J[1]) / 2));
            L = bl + Math.floor(.65 * D / 4) + bm;
            for (N = S = 1; N * S < E.length;)
                J[2] / (N + 1) > J[3] / (S + 1) ? N++ : S++;
            var U = (J[2] - (N - 1) * c2) / N;
            var X = (J[3] - (S - 1) * c2) / S;
            l = U < X ? U : X;
            z = Math.floor(l);
            B = bl + Math.floor(.5 * l / 5) + bm;
            y[0] = N;
            y[1] = S;
            A = J[0] + Math.floor((J[2] - y[0] * l - (y[0] - 1) * c2) / 2);
            C = J[1] + Math.floor((J[3] - y[1] * l - (y[1] - 1) * c2) / 2)
        }
            ;
        this.tf = function (N, S) {
            var U;
            var X = E.length;
            I = N;
            for (U = 0; U < S.length; U++) {
                var T = t(S[U].mc, S[U].w8);
                E.push({
                    w9: S[U].id,
                    iw: S[U].iw,
                    ix: S[U].wA,
                    wB: S[U].mc,
                    wC: S[U].w8,
                    joined: S[U].wD,
                    mu: S[U].un,
                    wE: S[U].wE,
                    lO: T
                })
            }
            for (U = X - 1; 0 <= U; U--)
                E.shift();
            if (-1 !== G)
                for (T = G,
                    G = -1,
                    U = E.length - 1; 0 <= U; U--)
                    if (E[U].w9 === T) {
                        G = T;
                        break
                    }
            if (E.length > V || E.length < V)
                V = E.length,
                    this.lT();
            this.wF();
            bw.bx = true
        }
            ;
        this.wF = function () {
            for (var N = E.length - 1; 0 <= N; N--)
                null === E[N].lO && setTimeout(x, 0)
        }
            ;
        this.bz = function (N, S) {
            return 4 * ((N - P) * (N - P) + (S - W) * (S - W)) <= O * O ? (this.sx(),
                low_level_websocket.vB(3240),
                jG.bh(),
                jJ.lK(N, S, false),
                bw.bx = true) : n(N, S)
        }
            ;
        this.vC = function (N, S) { }
            ;
        this.c8 = function () {
            var N = 0;
            var S = C;
            c9.imageSmoothingEnabled = true;
            c9.lineWidth = 3;
            var U = Math.floor(.5 * O);
            c9.fillStyle = nV;
            c9.beginPath();
            c9.arc(P, W, U, 0, 2 * Math.PI);
            c9.fill();
            c9.strokeStyle = colorWhite;
            c9.beginPath();
            c9.arc(P, W, U, 0, 2 * Math.PI);
            c9.stroke();
            U = bo.br(0).height;
            var X = .6 * O / U;
            c9.setTransform(X, 0, 0, X, Math.floor(P - .56 * X * bo.br(0).width), Math.floor(W - .5 * X * U));
            c9.drawImage(bo.br(0), 0, 0);
            c9.setTransform(1, 0, 0, 1, 0, 0);
            c9.fillStyle = nV;
            c9.fillRect(r - H - c2, c2, H, D);
            0 <= G ? (c9.fillStyle = nd,
                c9.fillRect(r - H - c2, c2, H, Math.floor(.25 * D))) : (c9.fillStyle = ny,
                    c9.fillRect(r - H - c2, c2 + Math.floor(.25 * D), H, Math.floor(.25 * D)));
            c9.strokeStyle = colorWhite;
            c9.strokeRect(r - H - c2, c2, H, D);
            c9.fillStyle = colorWhite;
            c9.font = L;
            c9.textBaseline = cA;
            U = Math.floor(.04 * H);
            X = Math.floor(.08 * D);
            for (var T = 3; 0 <= T; T--) {
                var pa = Math.floor(c2 + (T + 1) * (D + 2 * X) / 5 - X);
                c9.textAlign = m8;
                c9.fillText(lobbyMenuTopRightTexts[T], r - H - c2 + U, pa);
                c9.textAlign = o0;
                c9.fillText(eC.g2(I[T]), r - c2 - U, pa)
            }
            if (0 !== E.length)
                for (X = 0; X < y[1]; X++) {
                    pa = A;
                    for (U = 0; U < y[0]; U++) {
                        T = N;
                        var ea = Math.floor(pa);
                        var ba = Math.floor(S);
                        if (null === E[T].lO)
                            c9.fillStyle = nV,
                                c9.fillRect(ea, ba, z, z);
                        else {
                            var ma = z / 128;
                            c9.setTransform(ma, 0, 0, ma, ea, ba);
                            c9.drawImage(E[T].lO, 0, 0);
                            c9.setTransform(1, 0, 0, 1, 0, 0)
                        }
                        if (G === E[T].w9) {
                            ma = ea;
                            var Q = ba;
                            var M = Math.floor(.2 * z);
                            var R = Math.floor(.3 * M);
                            c9.fillStyle = nf;
                            c9.fillRect(ma + z - M, Q, M, M);
                            c9.fillStyle = colorBlack;
                            c9.fillRect(ma + z - M, Q, 2, M);
                            c9.fillRect(ma + z - M, Q + M - 2, M, 2);
                            fZ.lh(ma + z - M + R, Q + R, M - 2 * R);
                            c9.setTransform(1, 0, 0, 1, 0, 0);
                            c9.lineWidth = 3;
                            c9.fillStyle = nf
                        } else
                            c9.fillStyle = nU;
                        Q = Math.floor(l / 4);
                        c9.fillRect(ea, Math.floor(ba + .8 * l), z, Math.floor(l / 5));
                        c9.fillRect(ea, ba, Q, Q);
                        c9.fillStyle = colorBlack;
                        c9.fillRect(ea, Math.floor(ba + .8 * l), z, 2);
                        c9.fillRect(ea + Q - 2, ba, 2, Q);
                        c9.fillRect(ea, ba + Q - 2, Q, 2);
                        c9.font = B;
                        c9.textBaseline = cA;
                        c9.textAlign = m8;
                        c9.fillStyle = ns;
                        c9.fillText(E[T].joined.toString(), Math.floor(ea + .07 * l), Math.floor(ba + .9 * l));
                        256 >= E[T].wE && (c9.textAlign = cB,
                            c9.fillStyle = nb,
                            c9.fillText(E[T].wE.toString(), Math.floor(ea + .5 * l), Math.floor(ba + .9 * l)));
                        c9.textAlign = o0;
                        c9.fillStyle = nn;
                        c9.fillText(E[T].mu.toString(), Math.floor(ea + .93 * l), Math.floor(ba + .9 * l));
                        c9.strokeStyle = nt;
                        c9.strokeRect(ea, ba, z, z);
                        M = Math.floor(.16 * l);
                        ma = M / 48;
                        c9.setTransform(ma, 0, 0, ma, Math.floor(ea + (Q - M) / 2), Math.floor(ba + (Q - M) / 2));
                        F.length > E[T].iw && c9.drawImage(F[E[T].iw], 0, 0);
                        c9.setTransform(1, 0, 0, 1, 0, 0);
                        E[T].ix && (T = bo.br(4),
                            ma = .5 * l / T.width,
                            c9.setTransform(ma, 0, 0, ma, Math.floor(ea + (l - ma * T.width) / 2), Math.floor(ba + (l - ma * T.height) / 2)),
                            c9.globalAlpha = .6,
                            c9.drawImage(T, 0, 0),
                            c9.globalAlpha = 1,
                            c9.setTransform(1, 0, 0, 1, 0, 0));
                        N++;
                        if (N >= E.length)
                            return;
                        pa += l + c2
                    }
                    S += l + c2
                }
        }
    }
    function jr() {
        this.bh = function (g, k) {
            jL.setState(5);
            jJ.lK(g, k, false);
            bw.bx = true
        }
            ;
        this.c8 = function () {
            jJ.uC()
        }
            ;
        this.bz = function (g, k) {
            var x = jJ.od(g, k, 5, 2);
            5 === x ? aC() : 6 === x && (jG.bh(),
                jJ.lK(g, k, false),
                bw.bx = true)
        }
    }
    function js() {
        function g(x, t, n, l, z, y, A, C, B) {
            c9.fillStyle = z;
            c9.fillRect(x, t, n, l);
            0 <= C && (c9.fillStyle = "rgba(" + 22 * C + "," + (110 - 22 * C) + ",0,0.75)",
                c9.fillRect(x, t, (1 + C) * n / 6, l));
            0 < B && (c9.fillStyle = "rgba(255,255,255,0.3)",
                c9.fillRect(x, t, B * n / b0, l));
            c9.strokeStyle = colorWhite;
            c9.strokeRect(x, t, n, l);
            0 !== y && (c9.fillStyle = colorWhite,
                c9.font = bl + Math.floor(y * l) + bm,
                c9.fillText(A, Math.floor(x + n / 2), Math.floor(t + .52 * l)))
        }
        var k = [0, 0, 0, 0];
        this.BOT_DATA_SP = [{
            BotDifficulty: 0,
            PlayerCount: 512
        }];
        this.bh = function () {
            jL.setState(2);
            this.lT();
            bw.bx = true
        }
            ;
        this.lT = function () {
            k[2] = Math.floor((b_IsUISmall ? .49 : .4) * bi);
            k[1] = Math.floor((s - k[2] / 6 - this.BOT_DATA_SP.length * (c2 + k[2] / 10)) / 2);
            k[0] = Math.floor((r - k[2]) / 2);
            jV.kl && jV.lT()
        }
            ;
        this.wX = function (x) {
            if (6 < x)
                this.BOT_DATA_SP = [{
                    BotDifficulty: 0,
                    PlayerCount: 512
                }];
            else {
                this.BOT_DATA_SP = [];
                for (var t = 0; t < x + 2; t++)
                    this.BOT_DATA_SP.push({
                        BotDifficulty: 0,
                        PlayerCount: 0
                    });
                this.wY()
            }
        }
            ;
        this.vC = function () {
            jG.bh();
            bw.bx = true
        }
            ;
        this.iy = function () {
            for (x = 0, t = this.BOT_DATA_SP.length - 1, void 0; 0 <= t; t--) {
                var x;
                var t;
                x += this.BOT_DATA_SP[t].PlayerCount;
            }
            return x
        }
            ;
        this.lK = function (x, t) {
            return jV.kl && jV.lK(x, t) ? true : -1 === this.od(x, t) ? false : true
        }
            ;
        this.wZ = function () {
            low_level_websocket.jE = 0;
            low_level_websocket.qu(0, 3) && iU.wa(0);
            jL.ut();
            var x = this.BOT_DATA_SP.length - 2;
            x = 0 > x ? 7 : x;
            it(Math.floor(16384 * Math.random()), 0, [{
                mP: jG.nickname(),
                id: 0,
                wc: c4.lk[2].iL.color(),
                wd: 0
            }], x, false)
        }
            ;
        this.bz = function (x, t) {
            if (c5.kl || c4.lk[1].iL.kl || c4.lk[2].iL.kl)
                return false;
            if (jV.kl)
                return jV.bz(x, t);
            var n = this.od(x, t);
            if (-1 === n)
                return false;
            if (0 === n)
                return this.vC(),
                    true;
            if (1 === n)
                return jV.show(),
                    true;
            if (2 === n)
                return this.wZ(),
                    true;
            if (27 === n)
                return 8 > this.BOT_DATA_SP.length && (this.BOT_DATA_SP.push({
                    BotDifficulty: 0,
                    PlayerCount: b0
                }),
                    this.wY(),
                    this.lT(),
                    bw.bx = true),
                    true;
            var l = Math.floor((n - 3) / 3);
            if (0 === n % 3)
                return 1 < this.BOT_DATA_SP.length && (this.BOT_DATA_SP.splice(l, 1),
                    this.lT(),
                    bw.bx = true),
                    true;
            var z = (k[2] - k[2] / 10 - 2 * c2) / 2;
            if (1 === n % 3) {
                if (0 === l && 1 === this.BOT_DATA_SP[l].PlayerCount)
                    return true;
                x < k[0] + k[2] - 1.5 * z - c2 ? this.BOT_DATA_SP[l].BotDifficulty-- : this.BOT_DATA_SP[l].BotDifficulty++;
                0 > this.BOT_DATA_SP[l].BotDifficulty ? this.BOT_DATA_SP[l].BotDifficulty = 5 : 5 < this.BOT_DATA_SP[l].BotDifficulty && (this.BOT_DATA_SP[l].BotDifficulty = 0);
                return bw.bx = true
            }
            bw.bx = true;
            var y = (x - (k[0] + k[2] - z)) / z - .5;
            y = Math.floor((0 > y ? -(y * y) : y * y) * b0);
            y = 0 === y ? 1 : y;
            z = b0;
            for (n = this.BOT_DATA_SP.length - 1; 0 <= n; n--)
                l !== n && (z -= this.BOT_DATA_SP[n].PlayerCount);
            if (0 > y) {
                if (1 === this.BOT_DATA_SP[l].PlayerCount)
                    return this.BOT_DATA_SP[l].PlayerCount = z,
                        true
            } else if (this.BOT_DATA_SP[l].PlayerCount === z)
                return this.BOT_DATA_SP[l].PlayerCount = 1,
                    true;
            this.BOT_DATA_SP[l].PlayerCount += y;
            1 > this.BOT_DATA_SP[l].PlayerCount ? this.BOT_DATA_SP[l].PlayerCount = 1 : this.BOT_DATA_SP[l].PlayerCount > z && (this.BOT_DATA_SP[l].PlayerCount = z);
            return true
        }
            ;
        this.wY = function () {
            for (x = Math.floor(b0 / this.BOT_DATA_SP.length), t = b0 % this.BOT_DATA_SP.length, n = this.BOT_DATA_SP.length - 1, void 0; 0 <= n; n--) {
                var x;
                var t;
                var n;
                this.BOT_DATA_SP[n].PlayerCount = x;
            }
            this.BOT_DATA_SP[0].PlayerCount += t
        }
            ;
        this.od = function (x, t) {
            var n;
            var l = (k[2] - 2 * c2) / 3;
            var z = k[2] / 6;
            if (x < k[0] || t < k[1] || x >= k[0] + k[2])
                return -1;
            if (t < k[1] + z)
                return x < k[0] + l ? 0 : x < k[0] + l + c2 ? -1 : x < k[0] + 2 * l + c2 ? 1 : x < k[0] + 2 * l + 2 * c2 ? -1 : 2;
            var y = k[2] / 10;
            l = (k[2] - y - 2 * c2) / 2;
            for (n = 0; n < this.BOT_DATA_SP.length; n++) {
                var A = k[1] + z + c2 + n * (y + c2);
                if (t < A)
                    return -1;
                if (!(t > A + y))
                    return x < k[0] + y ? 3 + 3 * n : x < k[0] + y + c2 ? -1 : x < k[0] + k[2] - l - c2 ? 4 + 3 * n : x < k[0] + k[2] - l ? -1 : 5 + 3 * n
            }
            return 8 > this.BOT_DATA_SP.length ? (A = k[1] + z + c2 + this.BOT_DATA_SP.length * (y + c2),
                t < A || t > A + y || x > k[0] + y ? -1 : 27) : -1
        }
            ;
        this.c8 = function () {
            var x;
            c9.lineWidth = 2;
            c9.textAlign = cB;
            c9.textBaseline = cA;
            var t = (k[2] - 2 * c2) / 3;
            var n = k[2] / 6;
            g(k[0], k[1], t, n, "rgba(128,0,0,0.75)", .4, "Back", -1, -1);
            g(k[0] + t + c2, k[1], t, n, "rgba(0,128,128,0.75)", .4, "Maps", -1, -1);
            g(k[0] + k[2] - t, k[1], t, n, "rgba(0,128,0,0.75)", .4, "Start", -1, -1);
            var l = k[2] / 10;
            t = (k[2] - l - 2 * c2) / 2;
            for (x = 0; x < this.BOT_DATA_SP.length; x++) {
                var z = k[1] + n + c2 + x * (l + c2);
                g(k[0], z, l, l, "rgba(0,128,0,0.75)", 0, null, -1);
                g(k[0] + l + c2, z, t, l, colorBlack75opaque, .4, this.wf(x), this.BOT_DATA_SP[x].BotDifficulty, -1);
                g(k[0] + k[2] - t, z, t, l, colorBlack75opaque, .4, this.wg(x), -1, this.BOT_DATA_SP[x].PlayerCount)
            }
            if (8 > this.BOT_DATA_SP.length) {
                z = k[1] + n + c2 + this.BOT_DATA_SP.length * (l + c2);
                g(k[0], z, l, l, "rgba(128,128,20,0.75)", 0, null, -1, -1);
                x = k[0];
                c9.fillStyle = colorWhite;
                t = FindMax(2, Math.floor(.5 * l));
                t -= t % 2;
                n = FindMax(2, Math.floor(.1 * l));
                n -= n % 2;
                l = Math.floor((l - t) / 2);
                var y = Math.floor(l + (t - n) / 2);
                c9.fillRect(x + l, z + y, t, n);
                c9.fillRect(x + y, z + l, n, t)
            }
            jV.kl && jV.c8()
        }
            ;
        this.wf = function (x) {
            return 0 === x && 1 === this.BOT_DATA_SP[x].PlayerCount ? "You" : d7.dc[this.BOT_DATA_SP[x].BotDifficulty]
        }
            ;
        this.wg = function (x) {
            return 1 === this.BOT_DATA_SP[x].PlayerCount ? "1 Player" : this.BOT_DATA_SP[x].PlayerCount + " Players"
        }
    }
    function oL() {
        this.bt = this.av = 0;
        this.lk = null;
        this.bh = function () {
            this.lk = [];
            this.lk.push({
                f5: 0,
                f6: 0,
                lZ: b_IsUISmall,
                iL: null
            });
            this.lk.push({
                f5: 0,
                f6: 0,
                lZ: false,
                iL: new v3
            });
            this.lk.push({
                f5: 0,
                f6: 0,
                lZ: false,
                iL: new uF
            });
            this.lk[2].iL.uK();
            this.av = this.lk.length;
            this.bt = 0
        }
            ;
        this.r2 = function () {
            this.bt = Math.floor((b_IsUISmall ? .063 : .04) * bi);
            this.bt += 4 - this.bt % 4;
            this.lk[0].f5 = c2;
            this.lk[0].f6 = c3 - this.bt - c2;
            for (var g = 1; g < this.av; g++)
                this.lk[g].f5 = this.lk[g - 1].f5 + Math.floor(b_IsUISmall ? 1.5 * c2 : 3.7 * c2) + this.bt,
                    this.lk[g].f6 = this.lk[0].f6
        }
            ;
        this.od = function (g, k) {
            if (!bo.bp())
                return -1;
            for (var x = this.av - 1; 0 <= x; x--)
                if (g >= this.lk[x].f5 && k >= this.lk[x].f6 && g < this.lk[x].f5 + this.bt && k < this.lk[x].f6 + this.bt)
                    return x;
            return -1
        }
            ;
        this.wj = function () {
            for (var g = 2; 1 <= g; g--)
                if (this.lk[g].iL.kl)
                    return true;
            return false
        }
            ;
        this.tx = function () {
            return this.lk[1].iL.kl ? (this.lk[1].iL.bz(-5E3, -5E3, 0),
                true) : this.lk[2].iL.kl ? (this.lk[2].iL.bz(-5E3, -5E3),
                    true) : false
        }
            ;
        this.bz = function (g, k, x) {
            if (x) {
                if (this.lk[1].iL.kl)
                    return this.lk[1].iL.bz(g, k, 0),
                        true;
                if (this.lk[2].iL.kl)
                    return this.lk[2].iL.bz(g, k),
                        true
            }
            g = this.od(g, k);
            if (x) {
                if (0 === g)
                    return this.lk[g].lZ = !this.lk[g].lZ,
                        b_IsUISmall = this.lk[g].lZ,
                        jT.wk(),
                        a1(this.lk[0].lZ, false),
                        true;
                if (1 <= g && 3 > g)
                    return this.lk[g].iL.bh(),
                        jG.sx(),
                        bw.bx = true
            }
            return false
        }
            ;
        this.lK = function (g, k) {
            return this.lk[1].iL.kl ? (this.lk[1].iL.lK(g, k),
                true) : this.lk[2].iL.kl ? (this.lk[2].iL.lK(g),
                    true) : false
        }
            ;
        this.uP = function () {
            for (var g = 2; 1 <= g; g--)
                if (this.lk[g].iL.kl)
                    return this.lk[g].iL.uP(),
                        true;
            return false
        }
            ;
        this.c8 = function () {
            if (bo.bp()) {
                c9.imageSmoothingEnabled = true;
                for (var g = this.av - 1; 0 <= g; g--)
                    c9.fillStyle = this.lk[g].lZ ? m1 : colorBlack75opaque,
                        c9.fillRect(this.lk[g].f5, this.lk[g].f6, this.bt, this.bt),
                        0 === g ? this.wl(g, bo.br(15)) : 1 === g ? this.wm() : 2 === g && this.wn(),
                        c9.setTransform(1, 0, 0, 1, 0, 0),
                        c9.lineWidth = oE,
                        c9.strokeStyle = colorWhite,
                        c9.strokeRect(this.lk[g].f5, this.lk[g].f6, this.bt, this.bt);
                c9.imageSmoothingEnabled = false
            }
        }
            ;
        this.wl = function (g, k) {
            var x = .08 * this.bt;
            var t = (this.bt - 2 * x) / k.width;
            c9.setTransform(t, 0, 0, t, this.lk[g].f5 + x, this.lk[g].f6 + (this.bt - t * k.height) / 2);
            c9.drawImage(k, 0, 0)
        }
            ;
        this.wm = function () {
            var g = .06 * this.bt;
            var k = (this.bt - 2 * g) / a5.bt;
            c9.setTransform(k, 0, 0, k, this.lk[1].f5 + g, this.lk[1].f6 + g);
            c9.drawImage(a5.ke[4], 0, 0)
        }
            ;
        this.wn = function () {
            c9.setTransform(1, 0, 0, 1, this.lk[2].f5, this.lk[2].f6);
            for (g = this.bt / 4, k = 3, void 0; 0 <= k; k--) {
                var g;
                var k;
                for (var x = 3; 0 <= x; x--)
                    c9.fillStyle = "rgb(" + Math.floor(367 * (k + 1) * (x + 1) % 256) + "," + Math.floor(687 * (k + 1) * (x + 1) % 256) + "," + Math.floor(651 * (k + 1) * (x + 1) % 256) + ")",
                        c9.fillRect(k * g, x * g, g, g)
            }
        }
            ;
        this.v0 = function () {
            for (var g = 2; 1 <= g; g--)
                if (this.lk[g].iL.kl) {
                    this.lk[g].iL.c8();
                    break
                }
        }
    }
    function jt() {
        function g() {
            if (0 !== n.indexOf("vote "))
                return false;
            var l = n.split(" ");
            if (2 !== l.length)
                return false;
            jG.wo = l[1];
            k();
            low_level_websocket.qu(0, 7) && iU.wz(0);
            jM.uk(3252);
            return true
        }
        function k() {
            n = a();
            jN.br(0).input.value = n;
            jN.vH(0, true)
        }
        function x() {
            if (0 !== n.indexOf("account "))
                return false;
            var l = n.split(" ");
            if (2 !== l.length)
                return k(),
                    jM.uk(3266),
                    true;
            var z = Math.floor(Math.pow(2, 48));
            l = parseInt(m.n(l[1]));
            if (0 >= l || l >= z)
                return k(),
                    jM.uk(3266),
                    true;
            if (o(l))
                return k(),
                    jM.uk(3231),
                    true;
            k();
            5 <= d ? jM.uk(3232) : (jM.uk(3265),
                ur.kl = true,
                ur.bk = -1);
            return true
        }
        function t() {
            if (void 0 !== n && m.i1(n))
                return jN.vH(0, true),
                    true;
            jN.vH(0, false);
            return false
        }
        var n;
        this.wo = "";
        this.wp = -7E3;
        this.bh = function () {
            jL.setState(0);
            jJ.r2();
            jN.c6(0, true);
            jN.r2(0);
            jH.bh();
            c4.r2();
            void 0 === n && (n = a(),
                jN.br(0).input.value = n,
                t())
        }
            ;
        this.sx = function () {
            jN.c6(0, false)
        }
            ;
        this.wr = function (l) {
            return 0 === l ? jJ.bt : 1 === l ? Math.floor(.3 * jJ.co) : 2 === l ? jN.br(0).input.style.font : n
        }
            ;
        this.vG = function () {
            n = jN.br(0).input.value.trim();
            t();
            if ("password" === n || "account" === n) {
                var l = m.z(j().toString());
                n = "account " + l;
                jN.br(0).input.value = n
            }
        }
            ;
        this.bz = function (l, z) {
            bw.ws();
            1 === jJ.od(l, z, 1, 1) ? x() || g() || (a9(10),
                t() ? (this.sx(),
                    w(n),
                    dk.bh()) : jM.uk(4214)) : 0 === jJ.od(l, z, 0, 1) && this.uw()
        }
            ;
        this.uw = function () {
            x() || g() || (a9(10),
                void 0 !== n && m.i1(n) && 40 === n.charCodeAt(0) && 41 === n.charCodeAt(2) ? jK.ub((n.charCodeAt(1) + 1) % low_level_websocket.ud) : jK.ub(jW.wx - 1),
                t() ? bo.bp() ? (this.sx(),
                    w(n),
                    jK.bh()) : jM.uk(3228) : jM.uk(4214))
        }
            ;
        this.x1 = function () {
            return !c4.wj() && !c5.kl && !ml.kl
        }
            ;
        this.c8 = function () {
            if (this.x1()) {
                c9.imageSmoothingEnabled = true;
                var l = bo.ki("territorial.io");
                var z = 1.1 * jJ.bt / l.width;
                c9.setTransform(z, 0, 0, z, Math.floor((fx - z * l.width) / 2), jJ.f6 - z * l.height - .72 * jJ.co);
                c9.drawImage(l, 0, 0);
                c9.setTransform(1, 0, 0, 1, 0, 0);
                jJ.u9()
            }
        }
            ;
        this.wb = function () {
            return n
        }
    }
    function ju() {
        function g(l, z, y, A) {
            t[l] = z;
            x[l] = new Image;
            x[l].onload = function () {
                if (0 < y) {
                    var C;
                    var B;
                    var F = document.createElement("canvas");
                    var E = x[l].width;
                    var J = x[l].height;
                    F.width = E;
                    F.height = J;
                    var G = F.getContext("2d", {
                        alpha: true
                    });
                    G.drawImage(x[l], 0, 0);
                    var H = G.getImageData(0, 0, E, J);
                    var D = H.data;
                    if (3 > y) {
                        var K = 2 === y ? 160 : 600;
                        for (C = E - 1; 0 <= C; C--)
                            for (B = J - 1; 0 <= B; B--) {
                                var I = 4 * (C + B * E);
                                D[I] + D[I + 1] + D[I + 2] < K && (D[I + 3] = Math.floor(255 * (D[I] + D[I + 1] + D[I + 2]) / K))
                            }
                    } else if (3 === y)
                        for (C = E - 1; 0 <= C; C--)
                            for (B = J - 1; 0 <= B; B--)
                                I = 4 * (C + B * E),
                                    0 === D[I] && 200 < D[I + 1] && 0 === D[I + 2] && (D[I + 3] = 0);
                    else if (4 === y)
                        for (C = E - 1; 0 <= C; C--)
                            for (B = J - 1; 0 <= B; B--)
                                I = 4 * (C + B * E),
                                    D[I + 1] > D[I] + 20 && D[I + 1] > D[I + 2] + 20 && 40 > D[I] + D[2] && (D[I + 3] = 255 - D[I + 1],
                                        D[I] = D[I + 1] = D[I + 2] = D[I]);
                    else if (5 === y)
                        for (C = E - 1; 0 <= C; C--)
                            for (B = J - 1; 0 <= B; B--)
                                I = 4 * (C + B * E),
                                    200 < D[I + 1] && D[I + 1] - 20 > D[I] && D[I + 1] - 20 > D[I + 2] ? 40 > D[I] + D[I + 2] ? D[I + 3] = 0 : (D[I + 3] = D[I],
                                        D[I] = 255,
                                        D[I + 1] = 255,
                                        D[I + 2] = 255) : 50 > D[I] && 50 > D[I + 1] && 50 > D[I + 2] && (50 > D[I] + D[I + 1] + D[I + 2] ? (D[I + 1] = D[I + 1],
                                            D[I + 3] = 180) : (D[I + 1] = D[I + 1],
                                                D[I + 3] = 180 + Math.floor(75 * (D[I] + D[I + 1] + D[I + 2] - 50) / 100)));
                    else if (6 === y)
                        for (C = E - 1; 0 <= C; C--)
                            for (B = J - 1; 0 <= B; B--)
                                I = 4 * (C + B * E),
                                    D[I + 3] = Math.floor(255 * (D[I] + D[I + 1] + D[I + 2]) / 765),
                                    D[I] = D[I + 1] = D[I + 2] = 255;
                    else if (7 === y)
                        for (C = E - 1; 0 <= C; C--)
                            for (B = J - 1; 0 <= B; B--)
                                I = 4 * (C + B * E),
                                    D[I + 1] > D[I + 2] + 10 && (D[I + 3] = D[I],
                                        D[I + 1] = D[I + 2]);
                    G.putImageData(H, 0, 0);
                    x[l] = F
                }
                k--;
                bo.bp() && (te.bn(),
                    hY.ka(),
                    a5.bh(),
                    ux.u0([x[8], x[16], x[7], x[9], x[10]], [!b, 0 === d, true, true, true]),
                    bw.bx = true,
                    x[7] = n,
                    x[8] = n,
                    x[9] = n,
                    x[10] = n)
            }
                ;
            x[l].src = A
        }
        var k;
        var x;
        var t;
        var n;
        this.bh = function () {
            if (void 0 === x) {
                k = 20;
                x = Array(k);
                t = Array(k);
                n = document.createElement("canvas");
                n.width = 1;
                n.height = 1;
                for (var l = k - 1; 0 <= l; l--)
                    x[l] = n;
                g(0, "exit", 6, "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFYAAABGBAMAAACkrn5fAAAAHlBMVEUAAAAiJCI4OjdcXltoameIioejpqPExsPY29j///9xarZIAAAAyUlEQVRIx+3WQQqCQBTG8TdOB5DUI+S6nRcoPIFhu1bBHGGO4Any3TYxAkWTv1DSYr71D4b5mOE9kWmszkeC/ZptT6Ocl+xj5qgtbVR1iZn9VE2wU2uO2Jryhm2h2OaKbdZgu/NKrXVK7f6q1JpaqTWFYpvrUtqhPTTYpst0aBOv2Drltlxh392iu0U1t5I4biX13PZvF7+zvOFWihXWlNy+aqZ/M3LcivXcds1xK9kKK3GYAVtYe+8CZ/c/7Br9blSNcgn75O/tE26TasUvH0ImAAAAAElFTkSuQmCC");
                g(1, "victory", 6, "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUIAAABBBAMAAABWYLC1AAAAElBMVEUAAAA6PDlbXVqEhoO4urf///8hX3N2AAAEcklEQVRo3s2ZyZKcMAyGWdx3alLcSaW4k8lwZ9LjuwH3+79KlkljLb/czFJp+tYusD8k/ZItF/5y/a0F/dXb+KW472/cQCIbd8b4//+dDFu12/ByZ8Jkq0uHbRvuTFglwomOezx8j5/HxkrgTXEYqSxQyvcWCpVEhOG53p3QQTGfDiMUlppJxPXHEQrVxIT0092fEOaVw9Q8LpV5GysPJGUsWweojyCVCAgPIBQYc8nzwxEIvcYZjyQUmPv8kYQC68dhNoeWmOsD1Tyc/G5L+elvHLzs0tG3l7/PPn6KVJTfGxqpG0+9vXFW2w+ZGaoU0x3YrfwZP3dkrONijUK5ndBOLBAh2Wz8CwybMAESRPX4kDwZuGODMNkkjLoiwtLTyac8IXs2NpbJO2E0YVInhSH/c8LxolY1CVs+tFiEi2TqGW8lZqikTRlhLSYPGcIK2Ao/3gi/ilwiErQz4nIAJnx9xyJsga3w4xN3s6EbTVhowhJNbhCWyFaYcOVUvShpLZ+glfmREurZZ5MQ2wqOx/Q9k3YyeWNgJp0B4YgmNwh7aCv8eJp61U4mwT+xsJwA4Zarv37xm+ENQr89+/BCAwc93qXhRjmZpJeZ/Rs0YU1scU2MU1FkM/tKbT8kwt8+LB+8TtrT9dMCqHsrsyhYmdnfiYkEoaPBXRG/sPd8eunqZqfPmS1MHRGsfGLF5nX2Z4OwZWm6T15ihK3+/D7XBKFFcAErjzKVx3NTGIT8WZe+jRGSl0pdC7RUBqJW5D3P7O/iI9itDzx2Gla5oiAs6YwjKEBSKhOQMiDMnicGNmkUwc6V8sPTmHeyWAGpBELbgJWzx5c3Emqc0nIyya1Lqvax+BhhKfoE4/bdgHDR+6YOn6Zien0FK5fZpiInrITeRpWaL6qr5SwnUzGftJXTytUbCGszIzhjR8HcHKzTVNfqU9SHCGeRdAdjB1vgE4mWyuR1Q0QRLm8gDHsI9SErmg334HVD5EOE8w4vP2tnBrPxsICPeJ9SjDgESnkGpurMxkMEnUOVbT5Xy2cAEnN3U7rd8Kn5EGRscJOz5LqIunNoElbx+0eq3hev17IJRyNDwbpMGjwv3V5CsHOotRFtwhYWSmvn0BB9nfftbUq0txlV3rAJHTry6JVR+yG+f3/oVNDbhKiVYO+xWftkNQhPbLEW7bEr5WabsLClDM4p7Og/7zmnlPic4mVMZQj9xdzgkpUrmmTfctbr4VlvC/9hB2FvCoWtnM7A31SukJ1Qcl5+Audl2pMKOwidKRS2cm81WwHhmO85BOL8dQdhLZsxmNDhRSHhjb5NoF+xg7AwhcJX9nZ5lIRFvvcV6JZl2kHojZonVm7t4tMbG0ujfxio6+YdhD2MLbVyZZd9RVjhYo+6InEH4ck8q/KVezMt9daeA/exWc/h6oocoTP2Q/m7gKXIEZa5u4DAlp1uE5aWUHL3KbHIEvL7FFFsAouE+TYhlcqQIyR3UrG5QZi7kwoFCMT6k648n17v6n7uv9eL5/et9Asv0oTxJYkUxgAAAABJRU5ErkJggg==");
                g(2, "defeat", 6, "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAABABAMAAADL6o5mAAAAHlBMVEUAAAAlJyU7PTtUVlNsbmuJi4ijpaLCxMHX2db///+Cup+UAAACo0lEQVRo3s3ZsW7bMBAAUNqyZWUzsnT1VECbhy7ZvHTwlqmAN6PoUG0CggzairpIyi1Nk1b629awTPGOpHm0DyE1WYJEPlHk3UkW6w5t7eMXEWczKHvN52QoXfcjHUoUi4PSbdOhtItkKBEekZPSLdOh7NKhtOlQ3nwRnaC8pENp06F0t+lQvsWi/O/4+uPXiJNljcbgvUb5G5ci3mmWeVyKqGLNW5MyGyh1ZMo41hIyKaJRh573u9JY5HDo1LMsjBOfBLq9/oC0Rg4L5UYdeuWi5HqDAZShyT9clAKGBzJlBgMLB0UN9CKMksOEyEFpYOFBpkxBpywU1AmZkrFThpv7HUYZwcjPQEGzj04RsOpnoJRwnGNScFo7h7JS16HqcmbJDIUzW0hrWstQVfQWlMkhXg655BzKkoVyOPn7EMDjUa4Os0SidsIoCxbK5tBWhV7FCZSRJ8RtT1M6mE2PYb/tE1EdQsnoFNCpizLudwqYDCiUqScdhlLyfunkeslCo+TMlKJvPkNvNASKr14JpayPV0mtZKFRfFVcKKU5Cir4rYRAWXtq21CKetY31uVxiiI9FX8gZap+F7BrP2WC3oMupRSqZprBeeunlCiNXkopVesTrWShUDJpLS7sgd9GwYG/cn1B8lFGVWctuc7PQcao1hTK9YdP0hjgCykTo1579lLM7RcHxSg9VZYMoWw5KFfOL58BlHbOQdmYDa+CKeC1/2yKpbqvgyk1B2VsafgplNI6b6smVnH7wJq7h5tO2bFQCvdNkintkoVibX8RRtkJFkoDUmCpRwkqpZ3zUMDsgDObStkKFspUj9tqEr+EUO4EDwUt8Ez/ykKj3AkmSonGWGopn0J5WAkuSoX+KG60ksVL+Xm/8kXuAAoO1RvtOkT5B9F51EylDpRdAAAAAElFTkSuQmCC");
                g(3, "orders", 6, "data:image/png;base64,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");
                g(4, "crown", 4, "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJsAAABqBAMAAABZgT4DAAAAJ1BMVEUgIi0xOi5GUTMadCZ3bkARrRyhk1AA1g/AqzAA/wDVxWXy2D/25XVxgVVAAAAGjElEQVRo3s2az2vcRhTHn+SV14l9UEJ+NEkPGygBEx/UhhJ8W0owJclBLZSwtw2YUGoflJhg9uaWUgq5rC2E6M0pJYdmD40xZsn0EAfjw0Z/VOfNSJr35LUjKTr0HcxiTT4785033/c0DvxRJp7fufOozLghlBm1ATLuNoWLXcRZg4ZwAahoN4OTk2uNXnXBbgYXArwW4gCg1wgugPNCRh+uNYLz4Tbi3pQQrxxuDXEH4DSC81C6/y0uXex+Q7gAbjS5FdvQQlwXFhvBRQAPhDgCGDRzZj2wVlYBZhqygGfaApabMigPaSUmdwpus6BS1JG0wu82S+M2wB4UNxfOFSd8uSQugouuU8zkQg4H1s1pWk7DBXNi7PLpycVa3FHXxM9OOZwnz9QWS9kYwGXmGcnEHkM5HOCJanM/bvXZmQjn8JgMyuBiSw7daxf8+B07sdvzpXFTZufBwyOWd2p2nUFp7frLXLpRwo6s0s4qubOz0ioHXLok6bLEcB+cvrPPv7S+pl8NFs8yKV2S7DLxnsIFvtVfKQTiIjyRl3lLMuBJvJQkXLy4w3oWPIV4DCVOH3C2lBBOSJdMuHjcmn2FuIq4UNsP/e6h5bBDZyUyOnR1T602N1jdFEmcB/Zr8Zi1DMG3tF3ahlnEMfG8FYeJa62LvwAWhxAr65aVgAz217rLdCWfI+492Z/IGtvsSC+prsMZQqQLyx7dTO/FG4cOXkfcMXGBp3OCmEQM1gdViO0hbANmuHhL+i15zMZmtal0SUJcQGZ6t0ekm0WEcCGAtIrKzwYn52tWG2rpksS0UJE81lvLJBHUjKRgiFP9keiYPIjk0z3H6LygcYe5HtIRxT+mPduBeaFbNj/HkdntzKObDcz517jjXA881cRzQljIZzfU6H/B4AL8gswEdBKryJIpslF4h+Bm0wUGkH7eJ3nsY+Zkq1XnX0fmArhWMZ4hW2Hr3bQwUVS/RZPUeyHMatX515FZqKc6KqCnEH9zCDPyVHRwegf00Lpa2EUuXe4Caq3MjH1ofRBvXWhLnHxruHTPJW8hsR6uV0uky1wg0JnV79He3pYI6ElcVHwJibSwOu+JdJl4nRfqMUm8uKMQjvI71dGQuh/qpBRbV7l0qQuELf2YlhP10ib3Xbnx98CKfLoYsT+jpFsyOCWenz12WHEC61FWKzZ96k/BA5Gutsek0+LFrl4rzRQUzBmY0rND7dNLx4uttpTOThImXpgqK4TF3PgaqWQRfV91s/EHNpcOxXO829ljU2fDrDikuJi8r6Z5olLrrmuyTosHVv40zxS1sQNaZ12zG1G+GrFnMemU55mneaaowsPKtmdez3fm8n8gbWaW0eRqIVM2z5QNU7kyXAC35Dp6NE+UXfO1qtV+lj1NMyWSK1tNl5bhhrDwMu1//TWjTubrJjpgZdPT1QfL9PXMHDIcOnhXyRcDndz1Iu4Q4AbbWimcLTVYZjhZz5JjF3uLqGU2trgRmMmumR62qN9J3dblTHoMJzNFCQOX/fmM9suUySXJS6PenhMj7T5u+IA3ZB5O5CXu0ZX0y/fl3oxO4uT0IFV3DJgQ1/HwWYX+zld7+Fi1Gl/8Lsf+Kv/ZUjIlMJV/RNhv36hvV0XJKeAC3Tk81uYnuzcZs8nUwDHWhXTgFd1vtAu47fRw/gl5tEbTcZgCWdxKk/tcARdlc3nVSUdeOo1m1mD/lPUHywVcbJxo9aYcefF+cka8UkNWTG73iq02zbHJ36PkI8GG5I2pwXm67aoTx7n3Gpw/PS3KxFFeaQwub5Sqx2FeVQ0uPC3NPh67+eufwUW0PleLbl4GDS4+6W1lw817QfJO1oFRPdrE9OAE5xeNvHqeUFxqAtXjvWmXCG6bV+jy8c5cihBc7Uzpm05zSFtS+1PzhL1tY7moE+TNlOJqmsCEvH5RXM1MOSKtJsXVNIFD0lZTXFgvU3bJ5TnF1TSBPumDKa6mCZBXTX4t49YxgQl5N+Q4v06mHNM7DoYL6pQLeuPAccM6W8tu4hiulgn06Y0Qw0V1TKBL73MYLq5jAi69muL3dx6sPCkT68kEf07wA/t7F8f5UC7Oq773/JH64JyKC6B1r0w8TCb4cyI/HLKbN47bqZ4pu+z2nONqmADLkwKuhgl02L1m4Wa2ugnAWbjK5eKY/1WkgKtsAjxPTuIWPsEATuBCaD2pFIU/nhVwEVSO3hm4uDpucNYVvleVNnPmXwSiHyoG/98Hw/8AAslhvSUnOcMAAAAASUVORK5CYII=");
                g(5, "arena", 6, "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAABABAMAAAAHc7SNAAAAHlBMVEUAAAAjJSM7PTpUVlNqbWqHiYalp6S/wr7W2NX////RSpP4AAAD9klEQVRo3sWZvW+bQBiHiSGAt6hdki1Dh7Jl9eapkjdPrbxV6lCxeaw3okqpbqNuzMd/2yRw3PvJkQVYYhHgnvfer9/dBQG4WnftgwWuawBwXAIgBQB/lwDIAEC1BEAOAJolAAwAaB/mHz+C4y8RhQkCKOcHuEMAl/kBDgigWTgG2/Z+7vFDPH77fW6AmAAUSxbi1+t5boAdAajnBjgRgHbm8a/o+HNLgiEGfy0UhUMMfrU/zvMCbOy4HxeSBKehBJtlirGze9AlW1GqtM2fH0rp6HroCTWzNcnpTMmxa+f5HZcEORnnyQ9gewkFyJUcS1zsp1wSUID2tx/gKAMYJccy14MSLgkYQOeeUYCLCBBqOZY7LRhxScABzl6A3gcEINFyDIY+lwQcoPEDFBLAWhE8IQQ7MUnAAd58MA5wkQAOiuxOYBM+sGIsABy9AN0QBMAosnsNx7xjkkAAKP0ABQdYabL7IBpWjwD88wNUHCDWZLeBPditkm8wwMuvD1+Mez8VU/qE3IwBUkV2r5AKWTFJkIPymUwHKBhAV2VzJrtjPOmGRiEECKcDVAzg7X9NxmR3ih2TQ0dTgGg6wKsPMED3aspe2+F9iYyWKwjwmQWhDlAQgC66zjGyLmCZ4yakYQCffo6lYUUAKgLQmx4y2U2WQ3FLJMHUQkQBXt5HANb5hkiCa1L9Q1quppZiBlBgABv+OZEEvKCQvSoOUAeTAGoMYHq/bkjsZCpA9b52zADaLQSI7EMpkQS5CtC8T5AAgEt35xECJHbcmEgCowL0TXOqJAMAZfenhgBrO/MhLsaRPn4fhRSgvvED9H7dAYDDkGkGye5kBKCUAJ7uAz9An1qGlfiH4ZmjuDvVCntVGKDZBxMASDYMTa5xpbcUd6ekXQIyA80WAYiluAxu6Wdi2brRGOxLUw+w+obfHAeIvGWjkXenhL2qoRfsUHKMA0Af1NIejC288ShAgQBs0X6cAnBLAE6ydSOFeGiarhsaGBoegIgAKNYJM8Oi0AHshEqoAQCTa3Igg2T3aRSgxQAJZPcBpAggVay7Ek9JDBKmDmAF88AHEKGRMsW6WNyazJGfcjYZytqwRgDuK7XS8vboK6V4fnTGAHfiqwoAWuIYJcc24motRY7J+YQVUwBCcF9seWc0M3vx+KQhqtg4Li/A8PF6+OIRLYUqNDP38gHSFgMc3LLND5C6+2tspbHWXStnJEgSQIDUVTE/QOjuH8Tl5hbMdaWcn5TiyujVfX4A+2YNTEYbo0cgBp6VU8wLBrCFq54EkNr7K2Jlaq3LlR2DDLoGAWyGjjgBILT3Y7zadItsbc8khU0TASTD8xMAetfXrGr2sdf8B96/CJXN/8t1AAAAAElFTkSuQmCC");
                g(6, "territorial.io", 6, "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAjIAAABBBAMAAAA5y1MsAAAAHlBMVEUAAAAjJCI7PTpRU1BucG2Eh4Smqaa+wb3U1tP///+BtYscAAAFd0lEQVR42u3av2/bRhQHcFqUJXoz0KHtZhQoUG0aAiTcNAXV5q3QFrQFUm5OWwTQ5rppGm5KbFnkfxvFIu/ee/ee+I68BAZymgzJ5Jf8kLwf75jURz9Xydf7iTJRJspEmSgTZaJMlIkyUSbKRJkoE2WizOf6lMbjMmJEmSgTZaLMVyaTvny3T3/3ev7IwgWZzOnKN/tvC/hF9f9vzT9P0D/amNzsuGTGBteHf3ra/lb9ZdKFnPTwxdb83wgcGzrua8GB7oALHy6z/7zlZPYxL/Qyz8A3b1gZm+OcWBu87SnDhgeRqf9lZepqrpXBm74SZJqcVHCoq34yfHgYmXrBytR3Spm05ESlHEcmb3++6CMjhAeS+cDLHA61WyZnRaUcR2bd/vyij4wQHkimEmSuVTKp8+VckKlYGdqae8lI4YFkHm5zRuZOJfOd8+WNIPOQQ2VOza+3PWSk8FAyV7zMTiWz5reTcqhMRjbzk5HCQ8lseJlaIzNmvr1M5BwqM8NxfjJieCiZW0FmrpAxne7vPzwvYYsh5FCZwj0nvYwYrpMhCYW5QN+0e9tamb3dyZM/wN5ysuOU9AHL5tgWoM3YHsmhMqUzoPaQEcMHyiTJlJOxj69GZg0bvmegExJyiMzhebi3vbqXjBg+WCYVZHK1zAnqLNvn/lzOITIHs5uDj6+MHD5YZizILNUyzT18j++gSzmHyJwd/r+EV1stI4cPlvnJaYEfZEYl1wKzMlM8Fslt9yzkEJnVYbRdwFGaWkYO9+2b7rHMk5dur73/M32+ZnttViYTG08hh8g0N0sOz0ktk3W23H1k/Ed6rMwZvk7TzhEllhk1x5XBEo1aRg4PJaObHbAyM/xz8+S/184OJk2nNIFfqmXk8EAyO2FGeaWQWYICg21qb+UcLJM1BinscNUycnggGWUVgpVZ4Rnu2P6qqkIs2/pDCUo0ahk5PJCMsnJ1TObCPWxV5Wrdbl2AEo2vzIVUIR4qo612HpM5x+XurbbaaR6iHGD4yjDhQWR257zMq6T/PXMn5yCZU3NYGdjrwHsm1NP09oJdO6h+TVQyS2070+Ygmcw0mVNQXPFtgT9PO1NdsjX4+r/ES2aBO85bOQfJzAzBGIyY+/ZNp759Ez87MIe84Neb3uhkyJBiIo702hwkU7Blp77jmYnvSI+XGf1SM2OuevPjGu9q6BiY5iCZki3Kf7ExsDSjXKI5vAEf44L18HkTzjlerPzwRedNkkxbBPuH3IpNi1+da2SmNSo6zZi5Ns6BMtOabQl959pM+MAqRAmr7VYmQ2/6+dVnCq4+g3KgzBm/JNW3PlMEq88smTHwxt7jqjEwLquN2JreUhoDr/hJZ8+a3ihcTW/KLNtvbG2s0si02TewQlUdyYEyJT+L5Y67MHcHswM3fKBMCnsNIJPDnfmsHYxLdu0A5YATG9X8khQ3DuNlxHDv9aYdrkIW7ro2XJS71sh0rTfRHLcojz5bL5mB602yzPdgKyBzAq9xl0zXGiXNSY8INHp6mXBrlEQG3hxwAAmvcZdM17o2zXEH905RSC8Tbl2byLQb3hOZDLzR0inT8S4EzQEntkanMjOZHjLB3oWgMivb0UGZdmz2XiOT8hUqKQecGG4xbX/hISOFD5YBNweajoFr3CnjPBR37roWyLEnRgraE7O1h4wUPlhmbKcr3Brlp4e+W4a8KlfPxbXQTzn2xMigIjWH6CMjhA+WaVuwHZGZ2nFXt0zyLcr4k1kLBTn2xGbk9byy3cBHRggfLpMbaiST2vm2Qib5manrSDn2xApylc2ytJcMHz5cxt4cuOxjr7FGJnlqEv5m189Bjj2xkgzmV/RlJZ0MG/54PodX/6vXi8cQ/hE58kDL2qB0vQAAAABJRU5ErkJggg==");
                g(7, "youtube", 7, "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKEAAAAkCAMAAADW8qrvAAAANlBMVEX+AgDxYgDjhgD/eXnQpAC7vAD/oaMA/wClzwCH4QAx/zdf/1ty/3Sf/6D/3d2+/77d/93///85QMf8AAACr0lEQVRYw8WYWbaDIAxAsdVqAzzi/jf7GBIGZxxO89GiUbgGEkJEH+Q7DF3bti8rjRPhxTftLavpuuH77X8gwv10BLQrTfsEpHECG4TwEhUy0ItKW1Gh7Zp6AwF0KRP16GSLsApQCLKidt1igE3NZZFjKZWEXR2gaMguaSwPa54jbCoJ2Yjo+lWxpR8jhFpA0dH6jlzbIzhCdOIf8606wm814atPq8+whXDXY+WS+Y4QDtWETdYxHlmGFwm7akLRZwsRaLrVc4TtAsL7vUkIWbxRRBrCngu9xArSinvS/cuccKYhQpletjrXl3ZasRQNP+Pfe9+ZZZhd4EnW5KmYHNxwVFIZ4UwTCP1U0GqhC3+5QjiOn11CPxQGj9EJ0Io8QchM6fMIcZVw/PvsEfpOAxkUMQ9PEObvZh87KtGsEY6rU81bs46zg4SLoNiI1YRaYvGECl2aLcI1Rib0Q2gM42HuN7qeUFOEtV8HZMvwv2ikTzLyZ4PQj2WK5U62NCc8Jd2ImcghwiUzRkI/wWHcOD7nPCcI2ZhxC/BPXiJUaXWrOwjxDOHmLLMXxlhzD6EpCbc9ZdOXadF5172dEJUK83Il2jBXCmE3Eka5ErF5EPMbwgO7Xp5e30+IJBcyh2cJzQ3ZV0GoniM8n8HeTziN2DZH1PrCKaAghCd2PZ/enT9JlYQ9D8dHQFNPqMYskUuEp0+jE0IaVxakCJQt54SswYIQZci+MGVfwZaitihSuHJGSMF7MQstCWea4tpM+tKiHy4sw7zcgMWoNIdOOyWcaRIOnSAAs5T7dGVpRpi61dmOOCqYEs403nQqf1dyXwjnq3NZXU5yMmbsFmA0ZJdGhmeAS3RJA1ET6nyg7c14GtW+L8UVzuEo4zMVzgM1WKoSU5m44TJxw0VirhLDL6rE/6vBvdrCmmWnAAAAAElFTkSuQmCC");
                g(8, "googleplay", 3, "data:image/png;base64,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");
                g(9, "discord", 7, "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAyBAMAAADVdiTZAAAAG1BMVEUA/wBI/0lu/26P/5Cl/6O8/73R/9Hn/+j///+iRuwXAAABJUlEQVQ4y83TvW7CMBQF4BsKdKVIpYxIRaJjVLUSI6JDGSNlCCOq1JC1f+CxFIL92D22E+di/ABciZB8seRj35joVZ3VN1FXBSqhRYgPJEIsSQXrAnmjL2uP5Usm81z83Bec5WM+J9T4vS8Yfzz1yFQ0v2ackKsrxr2G7d4ZPjK1O214z3no+Jdz1/EKTy1NI/w6jmcIID6JJirGe8cYdIdGIcQOwx3j/gEpI6X+qoRkGqrnd6OXFR/NRAcdOWFc6hDPera0Xk/Fozo1ck4bHsSVpg0jYJSlervGW9zWSdQXhhXozlbGek1uY9/s2hRWect7ucnsf5ld7DfosX+kcsv+AdwtDfvHdW877x/u0raB6Oa0qG35rKZhbokg41sKclQEmTr/f+SUPtWxuyYAAAAASUVORK5CYII=");
                g(10, "insta", 3, "data:image/png;base64,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");
                g(11, "emojis", 4, "data:image/png;base64,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");
                g(12, "flags", 3, "data:image/png;base64,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");
                g(13, "bestTeam", 5, "data:image/png;base64,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");
                g(14, "bestPlayer", 5, "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIoAAACvCAMAAAAVOLbTAAAAtFBMVEUTBQUZBQgbBwMhCQcqCwkvCgsbGAgWEntaAzY5FRBgDCdlDRU0HDAlIG9TFkk4JUwvLxUzLC29IAk7QIlbO11ISjlOTSUAZjpMTWQiYEBsTEZAWJuHR4ZOXI66RiQAiByAWXdeZ31IbnxrbDdxaGC0WysAmiSxbTl5dsIhnkVyhcCKhWiKiEepf0OAiIh9iqtlk66rgoOnpFaMtZKvsq4A/wa+wr7X2tfk5uSm/6Tc+9////8kff4VAAAXaklEQVR42u2ca1ujyNPGIXHwRAQ2AXNiNhFGR5NFE/MQRr//93rqruqG5qTOf3fGfbF97RrHEPqXuw5d3Q1Y/9duP368vP7K9vLy40dHt1aL49diVDw/3kH58fob2483UEyQ4vhrWlH0wVgdpinyLLUH3Gz+b9jbTk7KX8pfVRv0tSA95EWHmayWJHkW2Hbj08P328lJkwaf6yCxLWpBlreEsRokeWrb/wtJN8qgh4dg7FTBvDRRhKTIwFGh0PmG77G4cRx73Sj4eGWqymbcycDOihqLZZIcQ9uWw0w1BsM3UeIHal4HSsNrKiZ8Ve4lyE0WyyDJgy6S4ZskJ/Fi8bCIY/cdlIYn66g4GP4iKPyHg5DY9s94iLdYLJ7A8gaK/i5d4WSwMMqLaMKqlap8hGTojcejx6cn4vEMlD6irngSFo3C5jkG4q/sUB8EGQ7H49P4idp4YZjoJ0gomHLtLpYyTxEqy0hSe8dVK1FOx09PNzdPccXyjve2M95RmchSomTaS37GU4hkdCMNLG+j9GbfVMliiShHy7YrDPttFN2hOz49XSuUm/FIuUsXy0kTZdhylx+EwqKkZRQP30qxJybJcDw6jQliTY1+jsYL9w2SoZG7645rBwXLYnH4QBTFwk7S5yonZhuNTsfAmFIjGGKJayzGUGkMBDoRmynmoFAqT7FrKfY9FG90OlIgzLKOR+NxRWJoc9KVaUxdQraQBfsUgZnbPuAlcJTR6WkMkgkaYLLxaFy6S1U1dHpxHcU6lijHCsT+EMqXky8lydXV2dXV1QTCjAwWLU9/CjZMxBay4CqH2sDQy9AgIUchSa7OXNc9AwvZiEzkmiAnw5P3UWwVz4yS2rYJ8467fqEmjsIk4fX1dXh2xizT03F80mrvJl87YBT8CNTI3RfHLRI4CokAkvn1NbOILpR9vZ9GscVZgFLY79RsTRLtKERycS3tQulC7uJ++QhJDcXONUpdk/dF8ZSjEMlMocwuRJfsdAR3IW9qopy8QVKiHAf2Wy5roHwR85yKoxBJeK1bSCwU1Nn0dOTRMXL8ufb2tvsOjPJScj+j2L161ENYNTYPSNhRZmj0Or8QE3kVy/lbTtOqoEQVPfr0zHNKEtf1vCsi8SR4yDyzWYJGMLMLYZlScFHzPM9130AZdKPolN/rsUDA+U+5jSqS69nzZrvd1lgAw4eNqXkm0kdQBn2lGxi8sWbA+fF1p0ISgiTPN3/99dcWLOGF+Ms69cpPME+J9D5KV+wAgQrX6pxxTPGBprL9xZxJXl6OfwnL9ez8QuIIiRctjuVbjABE9W8sU6YOmDZKyUJTisVY6xyv43W21k0kObu4nAnJy8umZLm85PwyqWiECEgj0NCkaVpN2CqifhSaUkDVRYwzPWYVBQ/EkOTiMrye3WRAeS3+uquxQBkZrTWQKjpjTN/irpiuUBrFCkR5OmRPqKClSlMQwCBFSJLLiEhunp4OSNnHu7s78ZfZ/PICMDxYTwwgnAhTg4fFg/sWSqtWiRfjQwWiMK4EgxSpSJ6eeH0iVywQZn6paJjnStMoFrJRc7b2tttOF6P4ICSih6IABnGcR/T9GeTp8RE5u7grWQgmvATNhSFPyfJINh++o0o9gIJ4dJoxigJRFBfn8zBEbyUJGR8m2n1jFgWDFByG8/m54HBQTXG2jNwv6BqL6onfnGcPabSPMxFlwhznQOBeONMLCJM8Csq3b8LCMLNylKQmxQzLQrOldS3T9Qaz4/vOQMkiUxwicc/OqkGPB5wbDSIkcJbdV2a5k7BOBKfkOTtzJywLJYagRBk4jqMHxBoKveX7UaRZUARljHJVkjCF5lAkbJ7X4+6rYmEY1iZJIg0T8IBwk8WjxbTM//jivtOhCr8VRQmxlLJolJkCMTA0yANPvo/5tz++1mG0OLrGY5RTFuVEJovoLtIsDRQ/SvyKRWRZlyiVXQwQcZRi9/UPaszCMJpGs5wLihJFVHHQF7FYTRT9nr+l/9lEwRrewihcvs5uDA4FIiSvxbc//hAWhhGaO2GZaVEoz53y9HFYkiROomWpoVj8phVtEy1LfDrioU+qxjJoSo6H7w/ssq8iigmjDbXdzKTWRKkZn1aeAhNsfb8LhX2I39WynJysR6jqIct5iVJxPHz//l1WgosKBSxfDZbN80yVmiLK0BBli+8dKc818wqih1AiLQvhT2OzhFUoJkkPSukzRPI8K0UZt0Sxton2XGM4ZHdOEiJ1tuy5+BB5yzTTU4w6ynduD8xyrEgMFqDkQNE1L1U8ZbHt+OjKR5CBZWgaCChOQqUhvYKFPzQVbxFZJMM+miQky2sTpWSBfXKIckmJvxKFYxluuXUs9Beh48GwjpKQn2z39EJmElngLShVyXFRUFcomuT7Y1G3T8nCKJuGKGW1DVFIDSLZOhS2Ts1AlnKjfRJt/VKWwPSWLpTvPP780YOSP2fX4SWjkCjjqZ6lcaz6W3+/3/oO/ebUK37xo4jeJF5TFo9MdCXlY8lSoeQtA+mIvtvkL88zKuuYhNwu1tOiIfdFfrLfR5b01QhmkoWE20fkLwkHdF2WeSfKI0dQG+Xubkel5vMsUqKMyFPOqWlRomjvkzdYkjsaIzOjknm2RNOQhVEuZ10o34taitvtdmyf3e5QvLyQ154zSjqlzH2uUIacZ+kLkzOIX1IaK1HKpEMMib9XsmBCSOl/lLLjXtI424FiyvJ1V+TF7u4bvRavLArKbjjtiDzFEIV8YI843qqEaqhSZR2CdUg4H3mOp6bTMc8FCeX8esZ1ch0FjqtiaCcDUpHzcEAkpavQNJpE+cIoMvigj2gfaVHqqoi3kN86kZLFwVQ9mI48rhSActOB8l3H81dzf7IAyf21QhmN4uBcGQiB7KMbqF8Ovg1VRJY9hRmxEotzgg9PMTF9C4VnH1Sv7F5rKM/39xXKeF2RiKewMKUoNRQpnLbg2FCTwgWauiOFctmD8igm2kGdYw7rFNDk3kDxqDoQFvZZkn8TJvjOCQ+HDV9hkgSBvN2k6SZ1YCLIMiK/fRPlgS3E1jk+U8NWMlnn9lZQxG0plL98UaJEAXrgrmQIGrRQCJaE8zdpEOx2gchCopx6G0K5uJx3u63IIpvkz89//nkv7ZZRrimYaeqxni5iF54ngZzuVkG6gQG2HSgDjAVI/FufDrRWO5FliBWmVNJt1MorD5UsSpM/qd3Sf9IIxdd5fzHFQhSLEhJJsNvI6Os0U5ykFSS//TbY7AJ3tQtZFpczfzvFcTF5JNfIZfKB9nz/p0YRGLaQoMQsixSK6rtGaghqZtuhxfHjIBvj0AmZCEd5VMll7cRP/Rd8cYFxhUHBmjRQIAsslI3j+MuJA5+d0+lJlIC+tSNDUHN2yGmFMz88BdgU0D4miZLhalVC0bzooiBHue9CMWURn93tXBEF4YMYskwUS1BQRNAARG41twKWZTo+rY+GT1LoF9x5wT9ImILKtZLERCGW6EKVTvFU+6ycXJJ71KhtsSLolCnOCXYr151DlpjmQnqpWERBY+9A7+QqCN+cFFEgJgpnFlOWkEVZsSjsClwwtspsrvhhImKxVqvJhDw3CMZqgRaiAIX6Ph5VCqHe75nA4ODgYROpmL4uC37IkiQD0oNPLWk9aVX87LWRlPzkLJvVajlZBrt0PKrWz2e8xFSlkHv02GoSxX/eahSR5Yqrp0W8IZ+dTyaT1QpOi8GlVfGXaV+l291y6S4n8x1EWatVaxZFLrY5Yqi7v73tI9HWaciyiKfuLnXp1KudTrY63dbLbN9BtqVxarMJVkuSxY3Ho0oUoBxfXrkOYZDbBsutSXJrWIh3IqbkLXGc7gKcebnabCLubRs5dRRWhbItgZIJg11oua67XKpI5tmhQgHH833ZX58mNRRDllU4WXpXS9fZpFzvU1XUqPhlNo1s66P2pWB2J8TOokzVAroYCENurccekBqKWkng3LJcWq5NEQ1nSXzLkZnOsDYGSVpJIslxc5DoTZ/z636UW5XTekjuzT00yLKkxmllj9kYkUjxZI5BmoWsFyEjTlwWpb6+8swoDZbbtiT3NRBqrqCQt5CruMjkW8zI/GSr1nNqixpluqV4t2icmEgkA0Uvf91kSGjPqgbobXUKvQLmYYWFUK5AYmGao0lqpdPAZCEjUu5fQRReoDxza2uCWF97C6ZJIaoICmTxlqs0IMOYJDVVcE2LpH4Osk26WozHjOLqtbh664HpBIGvYOfm5oa8hSI5DbekvaNJhvVFDRkPuaaEETeryQKLpYLyRdSIwjCkY+bzKJoxTBcJaRfNL3WTghZ5xZNF5Dh+QFZBGDOJ37HqxOZBw2C53czH44UsZrvulVrJxpK6btGsi0Xy/GW1rn6hl/o9hbKOH6bufCMkvNDTGpkxUUXqp0bahZt0MV6rdXXXU+v7eo1fiDpYuCa4rO82cGMQXll/ih/iiapreaMv4iKuOX2nIkaGom0UrhcLvcRPMLLroXc+AARhmixStDGIHDzRbapJbp4e4wfK+jQu76XGjhqlE5yW7QMaiBYsFo+McjPVrTwvbz7IPkyNRWlyYe5MVU3tTqH2ekwtrpsty+LpltXpKyAlK+4zEkW2g0yaEophGizKT3jzcDKtbdjJzlSW6dW8EEVAxLkjiTp8Rco4tTy2XjwISma0NM02Gc1bXYG5qPsLgti/VNuY8I11mtK0Zb1OQTWNeQ9xzYutPPzAEWAGWc5ubDc4ylPokJhkfHysNgypeWO9yzyazGVLFbJolqp2nKSp55H4nrElLNuhCzQ6M/WfbBVIxxq/TrcoE/b77AE7quPTVsO+9zimWbCwSH7RiX4uZewmBYg3Ntoi5o1d+YZpwk5bzgx7UKQlIc8x8GE6xcJosbSpJ7qcX2uW67Kgnk5HltqRrtrjjl82ZGak2r2K5F4UchYfzXGsae1Eyk4xxQV20b1YX7xyGSoWrko0CXkTlV4cz0v6D9XpckVF5IajApHjWI7jcOXYs0umDKSoycfpaD8I09XEohO7KDWWBOO6MaOVJlIDDcrpKS6P8EDiMQQqJde1JivyYRbc92UJvyprywsGGxt27Lf7vSQgXwyWoo5a4sSeLTBejMDQVwOoYftSrRXHhDLxrvAZ90o+N5nMU18SScJn3+sM14FiV7rwGGV8aJswigvbuHL6ZfwoVZVxWY8UsFMiGU0nVEpfeculjQoZak7mSe0Liig6fuwOVQaV50amkMTiWh7r7brg8ogllc3W85m+wOhMXXhF9mEFr6DIhKxDJJIk2Oy+ZbGfkCRO7cI48/oV/OSaRfwFgjhYcd8m5C4iuHxLz/WQddhd1CZnWJpnFHvUOyZSV/yhiQuSxOE0r4nYOlZ1iVFNFYWjcy6DwHPwmhALNXJBDgfqYfL9UV8qKHtoyjzYcVx6SyGeWBw6q/mGT4Nlrb0KCTOn1FDMy78ckQVC+sqiqC02FALzAEDkNHDGRzYRCoiLcBaq679YFAahYpqahchJN1utdaRezZRSd1vzhga152qVBYODST2sFKS7XTpfTRBGtrt6LHU505v92XoMEhuC0MSYDk+pTNpi2HOsSMVDbRjsRNE48Ccjpkkbn3dEgERT2ICnSNTTcs0o0IWrIzZPPB7TzN+CGVc7O9xsNli82DpceWx1CLHbmCh2N4rOc+wkKF+wRwQSnJOgNhBmgpzF4yWxeKpOW2dTEiWFCUmSdOPz/hJNAHnZ2kd+6HOVNorNNRTHM7zEcXzxNyy7RDxxQQlOqs/naRpqFl7vnipR0kC9vcHcjmZVvOGyjdht8cW2jUTbQLFMWXjVBzt6vI4LG6mT8WYEVqXoVNSRlcBEVWF1A09Z0583qWwobLGahp8JVlIkJB1H9tz9un0MlJJFGcnRKRGLHA7P6TGtFCAf32yP7b1Hg4WqrHgck1XwLjb/9nsstREODOtjE4NjiIt8xwTpRdEeI2Zi18ckIMJkjtTGPid2ULC+uN0wy43U0Nl6MU55L5S9A4dCmYT3CPk0bdOULAaK1UBhYXhFkQsuOjO/8o6fr5WJ9lQgxqoCzshT1ltsTiYOm8XfSnkawcu28HiZgzVJ+JqvNsqgumxwIOME+9mWV4F4dYy+qb+XoYk6C0kWxZLFi/EmAQG5+FY8xJd1Jey5cIJq2kbd19FAURfy68tdh+W+DDfeLZcNc/CQ5DAAWYNkkWkFwidG7vDZVRH/ie/AJnJxQZIkUcM2uscWitbFuABLOQw2w5EfsQmgtgiwGZrwEr1iIZ+NxyH7qrwRsU2SRC50kLVIiGJeHm60OoplGSzGNUAwE49FuNIG2vi8e4LO6A0yEe7KeSSSKRYH1LsW7JlI5KqrQ8RN2iRWH4qyUHWFlsR1Wb5EfOkPgFj1yJ9SDQ+URRyKLQWXPqKm5z7/Il4ybIrCt0ZR1x0o5e1B1eVijlTfjlRVDCT/S0/B+vGBJhXxYiqwghuVFZh8rry0rKkKbvyzWyjmDUJD87pPh7+QWItFEokkZw6nPONbxLaypgynYhCOXL7Sy6pfSVqhSN9ttx1UNx2at+npfyEQkXB4KsDd8JVIuOYI19GqbOTzTzpWmWSo78QZDmo3e7CjDAZtFNuq3ek3rN272L51b+BoxYcuEp26inYo3Q+c1iXNXfdBEorVgVIm3OYNix+4lSsI3j2kmWEl31vdKHaV5ep3WA3/ida+y09Esax+VcxbWrlV/tbdiZzP7gN4g8TqQ7FNUQaDrJB2PASVhTt4UnVcnnaA9N9dZ/hJL4qWJSu3KA+1O+Oat3um5XFp/52yg25VrG4UuwOl4M25Iui8T2ZQochxeceFzr3tAyjljVxAOVi4cacIhim3cDAI6WWg/pmmGiW3cL9eMVR/GuKXYIB/DYK0bAN5CezKQj0ohrMgzoByPOCyqnwQaEvxzYr5UO0gHhsoVqlMoQ7O+IccXljyepT72d9AgS464+K40lfoowFuzc/zjF4P9KH0kB9xke2hNBBvwudWoVD4b0FwfC1SfBM6mD59AAouL8zKMfkdFOG1rcpt6aS4OT/LgpCFylLuLBNnKd22SEuUwyupmcrNauRphIQFTguvhxLFegvF0ij4lX0lDA98z7UOkYPcls63xGUSUNIfBXM4KFEKGCWXZS06TAxzqAxktWRpoZhHKLfN+KZrmCPPwyBIcTdDXqKo+25zzoSMAqnoM2RBkoM8CEsDRzEvVCnkdlg2gdWPoqJI/Z6VPsCqHAIaaOhvaVB0oEhQAAWHqacOZPgDFkyARQ0oISxmlVZ4G0Uf0fAVuSUdccIQfSiMQH84HAjLFhRbRRDcGH1mVru1USxDlSrx24H8erDTnP4ABkr3GoXfEJSjHFYUKflJQV//WOTkfbmcKMjpX3Sq44dQ7I6jDKPxUyhUt5ZtDJsD2xhBbXYc/LTl46ZBunroqm07j2rOG9XccmA38nh3cjdyiN2D0alKD4lRVdVfKgpVFtuNqXCdxfqbKDVtyi7bKIOGcE0U+x9DMStfrtOrm30lRbyJ8u7ZP4piG8lYaaNQeILAgadRKh/6CZCfVMVAUU6o5irIRBwuDef+IEQdpfjoB8xxTEtgtyOtvEv5F6J0Bnkt/wxsA+nXo9jdKJbMamzrZ3zk76oyqCb7xhcf6B+/E6U1IJQoA83yTnL9h1F6xxNda/xOlPci7d+AYv2LUH66/YfyH8p/KH+n5f8+lNfg01GO5VNpPh2l0CiHzyaRZ/X8+HBx+4sD6EU91+lf4Co/1NOuPpckkKddqWeAfbp9Xssno32qKPrJaGyh/DNRMv28OPUUvc8jCYvyKXrq2YKfmvTVswXVExedz/TZl9pzKA+f6Cj8TEyrek7op7Ckjadzfh5LZjw/tfYk1zz4DD+pP8lVuQu2DH5nFOddz7fVLK+H3xbUQeNJu+1nIRf5b1EmOBSN5w93PiH6eMh+rdPw/knrcdV9z83GXdL/UDvUWp4fi+5Hiluf8lTzzmebf9oz1tsPWbd+/4PnGaPj0fP/D40/WlJBCl2UAAAAAElFTkSuQmCC");
                g(15, "zoom", 6, "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuBAMAAACllzYEAAAAHlBMVEUAAAAhIyA3ODZTVVJrbWqEhoOkpqO8v7vX2tb///8goTJXAAABaElEQVQ4y32Tu1ODQBDGL8QAdlg5dml8dZTa2TijXQpnIh2TwoQOxwehi2PB0flKYP/b7HFv5nALBn5337d7ewshXZyuKX2PST8egUW76OE7EJFa+BhJ9bSsUWFaeTV3GKHbn8EvlB79bjSv4VO8jUr4VdiHNnK938MHPie0Yh+ZLqmGuNsJ7CNURgewI5qPoRE86GwkJyWIBIfcUfJrmMm0sclDyDnPWmLyADacl8jnRbEGKIoiJRP4EmU2LJmIDfLvAf7z/37mv6IUm08pzbV/rx5f1pPA1Fn/iX3eS3nekAslz7gcGw9bg3uqn6Rup5oH+uaTLpO4r0SmZVuUFE2lfTc+z1qr9+BVtGJqzq1RHNfQdAtnrEW75UwuXOFgvj3crpCyDu6UIpP9fPHZU5XkiYVXvsXIPcc+VwspzY2pPorE/NgCfYK+QJ5+QFA6fjQt2A4IWuIWODixe2ELcuIUNJGL+zQle92exY5pfDIaAAAAAElFTkSuQmCC");
                g(16, "apple", 3, "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAAA8BAMAAAA9AI20AAAAG1BMVEUAAAAjJCJUVlOEhoOanZkA/wC8vrvW2dX7/fq38z8cAAAEbUlEQVRYw+2YzXOiSBTAGzW6x8ZY6pGYFMMxUct4JGbLcMwld9QpliNkLeUqUvT7s+e9BoUITpIpuWxtp0IJdP943/3B3t7eXtnF2xViGZIbf1+8mVcS3YQKmk3o16AKtLhCdAsqad4be3WrQcdX7BUqalesURXaZM2q0DZr/TfQQVVo8fTXb/LgzO9SiQpon/WPg0fjk5j3cuNnH74ZQPcztOBsegz6xnP7i+i99Tk6ZOwoadwH34LnR5jDBB6j9RjR4vkF4pEF6wmho1EQOyP83uwWuisX1uPgPNpmdciho/5efwiWoiZau86T5QX+ZACL+S0MpEKDVW9/PTMAljq0R026P4/WmJFHx30v2E/9+GFj7KzI8IIZ+K6AZdyCAXbowd3ewN9kkA4McYB+Hs078BG9gNgI/12trJ1L6BGEVjRoRwbZOsbrfipaqa1nUXvQOY+eB1kUIXpv+BAZ0VM8DI5od7id4auh7DBK0VOJ/rEtt7WYqXoAmxvlLn0f94Tp7qx3K24LFRL0IrCDOxiIzgZtLbqim6INQosevJSiTZwtr2ccr6lWsaJ2IFaRocM4Re/x0WIwhEV7hD2e1GmCjtUA0fB0Y5Shw9x8bCWPtlu6BIeswD95K7YiTT6xpWQJZG7ic7ovQ9/n0MZFa4jIkeuXLU/hpYXO0H4O7V4WbWfkWvZ6NT4zbp3F6HfQOVNzpXx8RDHalcX0c7SZobM5XpwzjqlMHA0/azf/FL1XeKlLBccKF6G7v4vObL2rm6WzciznC631NXTO1pl97ZZHKtxMl/wOdWiLG+UxQVO+btwFV7AMrDk99bvvbYhvFL2A9op5jnL1Q1KB38lgDxUz/a5gvYM8CsToUsUFr85rMqWnp+hdDt08mtSKGKI413/yOmaVMl8m+aQpE9nBbGzBV17WaHtPuXYipm+0xil6n0Mr7sGkgSAVUBxMqSAkWbVmmmBtqp9k63v8t2uotgs+dgwP9jyi4/xOJHVkqJBNEN2ieLBCikSvlqxWsJcu0YKCCHn0wqb6eojXrPLxIpp8aKJMvE/mnYZknJ1ySEfyCaFJL7SbVycFHMc5uCpDm0Vjmw3HMXGEDG5mkBJSk6Qt0T6IllLihdCaHD09RfvF0id7KglaFNBk9lN0nXZfBYNEhdInmIoNbwoGiZ1EqYJBWuWrJ+20PkX0CZQWeDN1I0LsuizuFAWmlBoSNwKhZXJugwLaP7VH4jGth8EXwELB4OtiPDRlOP3ACwazjY6+J2fXJdrHjlExQmRWfUh0WwY/ysbV6xkWrZDx8cMxZRwNlfDYLYqkk0cJHbGOo9VKljgLpky2K04SJROxfIXxynVOfg+VBcal/O47S9YUe/Sy0ORTQsswM0rQ4iepsnEO96pcaYdqwI31YCINOrtNtV2pqpxl1nNUd0hPo7lcJg0m39rLpEU7F3cX2yb9jz5paRJ8WNF9BV3hRrrC7X+FhxYVHrVUeEBU5bFWhYdxb6+Nf7YXbpv0CLGqg89fkK30UIXyeWIAAAAASUVORK5CYII=");
                g(17, "open link", 7, "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAAAPBAMAAADpFNeEAAAAGFBMVEUA/wBi/2N//4CX/5i//8DU/9Pq/+r///90hWfkAAAA6klEQVQoz5XSPQ+CMBAG4FME1i6GlUHjSuLA6uaqEyt+JF3VSt+/b99WhRQG7XCB0qdcrycia42rkomxgJ2edsP8AfYEKH8Gc+CYaLQ/g5Szm8mcpkGGZwgurwsDKqfrrgf6kaNKcMihCpwk5+YZOr+2DMCOQBuAtkoKgpTgvsQOd7cCOMSg82DJz/0fHKjewMQAW4KGxRyeAYqBTyNgCFy6gyq517MEYKAjUNsA2nAPc95DyMaHW4Pu0wNoCVIQPJjN96aHoIjBzINqD9X30vu8cKW6JTGQ2pc18x2x0pbdOgTSxCD1YAHzAmJBjxvc7JBGAAAAAElFTkSuQmCC");
                g(18, "loading", 6, "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZEAAABGBAMAAAD/Q7RHAAAAGFBMVEUAAAAnKSZKTElucG2Fh4SoqqfLzcr///+y5yZlAAAEnUlEQVRo3u3aS3PaMBAAYGNsuHoy0+TKTJv6SjNNfeWSciVNJlydF7qGl/n7JTGSd1e7wgaFaWfMKfFD1qeXV5KD8cb8kuC//rWSVtJKWkkraSWtpJW0klbSSlpJK2klraSV/KuSbw9qe8HsfnCyfHVuZu95Kmb3iUdJ+KAvKf7gM119vDoUb8Bv9gLsu2PD97+n4O/tr1/+OzHXXiqTRjHyJukqkLcndKqnDw94yTYfty7JoyD5jtIYeZJ0FEr2Fp670EcnkgScYiRrXkJLI/EjyUjOhtzduSwpBrJEJ4YloSJJPHqRRDRnK3DSPHIpS8w5TjLnJJlVGIkPydjKWdVsw+pZDokueE5SMJKunULuQcIky5a/S7KQJbtiQZLUTmHlQcIkW13YYyqKkRQOycKWKNcjD5dwyebMYJA7JLscspLCknAJgLHxUEnEJbtkmAuXZC5LysqEEq4V1OkoeySm/bxenf22ujd41NolWTskCyoxxfNydXajrL55qCSDXe4LeaNHdl8wkiLofP2NxwNeUhBJiKKJiBbUwRKFBtIxbrVlha3wCzMGGYzROMxLPhIDkhjn/aOtFa93x0o6uHJ1Cb3Bce1NoZYMJabN5w7JEkv6uLSibQT+w0PcFZGhQyFYmZ18CnVY0q0hKbAks6JrL1F9j4S6Gar50jVK0csLSTR97pC85x9IprW7+CESU0B9psCTHroGS8ZgwJAkSyRRqAF7k/TJyIFkWhCjesOSC5CAJNk+GEjqvwobSVIS9sRwVO3vzoXo2TEXGhZOSQ4knUazq/qSDMXe1QgAbp3rBpFzkl4dyQpIurBnqibhilsyJo2WeU6us7U8WLIZ2JLgkyUhkFSNKoN5x5K4liSvJNEnSaZE0gG5ic1dfThFaSTRQ9vpJbBOqsE3hp20kUS/r9JPl0itKzGjwbrqPXlzia5jdXIJ7I+qCsrhFKVRjyeLD6DHJ54lrlEYVIQC789mkliSDD1LUhIEgTdjJEzXm0nw7Bq840eeJY5opSesBrHv+LUoyQTJ5BgJM113RJCpMNnGknSfJKYSGEH6l3BR/dS+4c2WwBidlaDmxUX1oR+JMNNa8MtHK0vSgUZekhIJnWl5kpDZb7fKGLM2iebuBZqp5bIk3rBTepN1TxJT8gO00jJhO3x5FZSYDYuJLKGdgaxI6P9BwxuZgyt4cI8kYxrOR4770kphJTm7VmhZSZCk+H68ShRcbjxJ4MrdNWxFY2mlMJaanSSJyAClwCN/Pmx8SaJ9zc46wUkWLglISl5NPV4irXCH7B1F0xVuvMXnWOH2IBF2HWLcLUE81mjXgWzRTODI7VvSdfafBZmBjRruBKHXp667jKvt5GiJsDuXkXBfmXbXaHeuPHGOJVzfHAXHS/gdU0W2Naam9BvtmJIdwIn0jnsKPEj4XWy6KlVFio12sXE5aElX2GY8VkJ2xx9hRSV2kByLW8WypEcilHNuI+l4Cf7a45ldLzZ5GVrfN4yC/ZKQhu6/ECTxJQnCKoK/s6cdqDfl5AscuIMjS/S/7Bc4z3SlR5DU+5VfRRWvp/sqKiy/iqr/IdZfF1HJgRmsN+0AAAAASUVORK5CYII=");
                g(19, "target", 7, "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAMFBMVEXUAADUISLWQkLMTQDZZmXAdwC0lADgiIioqQCWvgCE0QAA/wDnra1i6ADw0tL////afMd+AAAC6klEQVRIx42WTWgTURCApzFNY2lLBKEX0dy8iA0UxB8CKgUv0gaKBS2B3HOJnkUDQrENQi6KEITcgydR0l0CUYReJBZCi3YpaC+9FANS6GXZ5+6+eT+z+1adS/ImX97Mzs4f2ET2916vPV9/61At6Ifeq2UIZWXDSYK+IxLIlY4Z+ga6jL8xQbsFoFQrDtF7QqoThaxSDIKsE4HqYJAyhXZNDJxq6VCvZIQgq0NDSJCGgnqFJCiroB2lHTvjS06dWxJSHl0cjBjztm5JxXUBdaXqro8E4j2UD+gg1BamFpkQ75GgVjkkn/8SU+LVUHmaQx/wmB5pEHNzyh4oa08ZkU+oroZQhR8mKMO8PNdPBpBlvoixA67PBBC6lI4yzJVOgb3Nv1+OQawm3h9gJo19jUPHHLrhQ4UEazIKkzZYHJoRvxwuLAzE95voOWzyO5dQ/zkw/QQPfe65DfhwGO2T8JBCB39zqAM8l1Ij3QBMkSC0YFsP94nIB/4fj3vegLb+175IkCX94io0w8/zXJkX0IwezjLUNciTKZrWoSJCF4hLvlCookHHChppPhaB5+7c36BpvOm/oH+Y0x13VSFTx5vGEEzQOPGInyO5KPOUR3yVvrsDIFWBBVOFoR5hlwYczTfgPUmVj1y9SJKiBdhSMM3c0ItZzMwfWFMifeeYomZHpKb89MVWOCWr++hXpNCzfkmViFO6oEvTPtROaAWM/RRtDOx3QO0pyYveCjZ6HreH1saDhiGaeKxj9GUrBzl70iNj54FiCA3BeFVNtXsfEq2Odh/xrjPYxyuG9nuU00YC6DPqrKTcvD6nAshSNclbk3coR1BGDqCmpFJ3Hg++bN2OTNgQ6uojTh9kfP7g5KwnDcWiNl67CQy/SEzzhKvKZORvGqdwxqHLw47JWCOyYfSexaEHsYUmvj9cM6xG1jJlrjqmJcsiFu875nWt91I+4/yLxMXP3lu753PzK+tO8nYY3LbvS2SDtP8A+ntynBIvYeAAAAAASUVORK5CYII=")
            }
        }
            ;
        this.br = function (l) {
            return x[l]
        }
            ;
        this.ki = function (l) {
            for (var z = t.length - 1; 0 <= z; z--)
                if (t[z] === l)
                    return x[z];
            return n
        }
            ;
        this.bp = function () {
            return 0 === k
        }
    }
    function jv() {
        function g(D, K) {
            tD[D] = 0;
            tD[D + 1] = 0;
            tD[D + 2] = K;
            tD[D + 3] = 0;
            k(D)
        }
        function k(D) {
            if (!gq.gr) {
                var K = ax.fy(D);
                D = ax.c7(D);
                gq.gr = K >= gg.tC[0] && K <= gg.tC[2] && D >= gg.tC[1] && D <= gg.tC[3]
            }
        }
        var x = [224, 224, 224];
        var t = [[172, 172, 172], [144, 0, 0], [0, 128, 0], [0, 0, 144], [128, 128, 0], [128, 0, 128], [0, 128, 128], [196, 196, 196], [0, 0, 0]];
        var n = [[4, 4, 4, 20], [4, 0, 0, 27], [0, 4, 0, 31], [0, 0, 4, 27], [4, 4, 0, 31], [4, 0, 4, 31], [0, 4, 4, 31], [4, 4, 4, 14], [4, 4, 4, 13]];
        var l;
        var z;
        var y;
        var A;
        var C;
        var B;
        var F;
        var E;
        var J;
        var G;
        var H;
        this.bh = function (D) {
            l = new Uint8Array(b0);
            z = new Uint8Array(b0);
            y = new Uint8Array(b0);
            A = new Uint8Array(b0);
            C = new Uint8Array(b0);
            B = new Uint8Array(b0);
            F = new Uint8Array(b0);
            E = new Uint8Array(b0);
            J = new Uint8Array(b0);
            G = new Uint8Array(b0);
            this.q7 = new Uint8Array(b0);
            H = new Int32Array(4);
            H[0] = -4 * aR;
            H[1] = 4;
            H[2] = -H[0];
            H[3] = -H[1];
            if (d1)
                for (I = b0 - 1, void 0; 0 <= I; I--) {
                    var K;
                    var I;
                    K = dN.iQ[dN.dO[I]],
                        D = ak((n[K][3] + 1) * cW.random(), cW.value(100)),
                        l[I] = t[K][0] + D * n[K][0],
                        z[I] = t[K][1] + D * n[K][1],
                        y[I] = t[K][2] + D * n[K][2];
                }
            else {
                for (K = b0 - 1; K >= ci; K--)
                    l[K] = 4 * ak(64 * cW.random(), cW.value(100)),
                        z[K] = 4 * ak(64 * cW.random(), cW.value(100)),
                        y[K] = 4 * ak(64 * cW.random(), cW.value(100));
                for (K = ci - 1; 0 <= K; K--)
                    l[K] = 4 * D[K].wc[0],
                        z[K] = 4 * D[K].wc[1],
                        y[K] = 4 * D[K].wc[2]
            }
            for (D = b0 - 1; 0 <= D; D--)
                K = ak(l[D] + z[D] + y[D], 3),
                    l[D] += xg(K - l[D], 2),
                    z[D] += xg(K - z[D], 2),
                    y[D] += xg(K - y[D], 2),
                    l[D] -= l[D] % 4,
                    z[D] -= z[D] % 4,
                    y[D] -= y[D] % 4;
            for (D = b0 - 1; 0 <= D; D--)
                l[D] += ak(D, 128),
                    z[D] += ak(D % 128, 32),
                    y[D] += ak(D % 32, 8),
                    A[D] = D % 8;
            this.xd();
            for (D = b0 - 1; 0 <= D; D--)
                C[D] = 32 > l[D] ? l[D] + 32 : l[D] - 32,
                    B[D] = 32 > z[D] ? z[D] + 32 : z[D] - 32,
                    F[D] = 32 > y[D] ? y[D] + 32 : y[D] - 32;
            for (D = b0 - 1; 0 <= D; D--)
                E[D] = 235 < l[D] ? l[D] - 20 : l[D] + 20,
                    J[D] = 235 < z[D] ? z[D] - 20 : z[D] + 20,
                    G[D] = 235 < y[D] ? y[D] - 20 : y[D] + 20
        }
            ;
        this.xd = function () {
            for (var D = b0 - 1; 0 <= D; D--)
                this.q7[D] = 280 > l[D] + z[D] + y[D] ? 0 : 1
        }
            ;
        this.fy = function (D) {
            return ak(D, 4) % aR
        }
            ;
        this.c7 = function (D) {
            return ak(D, 4 * aR)
        }
            ;
        this.en = function (D, K) {
            return Math.floor(4 * (K * aR + D))
        }
            ;
        this.hK = function (D) {
            return this.xh(D + H[0]) || this.xh(D + H[1]) || this.xh(D + H[2]) || this.xh(D + H[3])
        }
            ;
        this.hI = function (D, K) {
            return this.xi(D + H[0], K) || this.xi(D + H[1], K) || this.xi(D + H[2], K) || this.xi(D + H[3], K)
        }
            ;
        this.b6 = function (D) {
            return 208 <= tD[D + 3]
        }
            ;
        this.hQ = function (D, K) {
            return this.b6(K) && this.xj(D, K)
        }
            ;
        this.xj = function (D, K) {
            return D === this.b7(K)
        }
            ;
        this.xk = function (D) {
            return 208 <= tD[D + 3] && 224 > tD[D + 3]
        }
            ;
        this.cM = function (D) {
            return 224 <= tD[D + 3] && 248 > tD[D + 3]
        }
            ;
        this.hJ = function (D) {
            for (var K = 3; 0 <= K; K--)
                if (this.xl(D + H[K]))
                    return true;
            return false
        }
            ;
        this.xm = function (D) {
            return 192 <= tD[D + 3] && 208 > tD[D + 3]
        }
            ;
        this.xn = function (D, K) {
            return this.xm(D) && K === this.b7(D)
        }
            ;
        this.ay = function (D) {
            return this.b6(D) || this.b8(D)
        }
            ;
        this.xl = function (D) {
            return 0 === tD[D + 3] && 2 === tD[D + 2] || this.xm(D)
        }
            ;
        this.b8 = function (D) {
            return 0 === tD[D + 3] && 1 === tD[D + 2]
        }
            ;
        this.xh = function (D) {
            return 0 === tD[D + 3] && 3 === tD[D + 2]
        }
            ;
        this.xi = function (D, K) {
            return this.b8(D) || this.b6(D) && K !== this.b7(D)
        }
            ;
        this.b7 = function (D) {
            return tD[D] % 4 * 128 + tD[D + 1] % 4 * 32 + tD[D + 2] % 4 * 8 + tD[D + 3] % 8
        }
            ;
        this.hR = function (D) {
            g(D, 1)
        }
            ;
        this.xp = function (D) {
            g(D, 2)
        }
            ;
        this.hH = function (D, K) {
            tD[D] = l[K];
            tD[D + 1] = z[K];
            tD[D + 2] = y[K];
            tD[D + 3] = 208 + A[K];
            k(D)
        }
            ;
        this.az = function (D, K) {
            tD[D] = C[K];
            tD[D + 1] = B[K];
            tD[D + 2] = F[K];
            tD[D + 3] = 224 + A[K];
            k(D)
        }
            ;
        this.cO = function (D, K) {
            tD[D] = E[K];
            tD[D + 1] = J[K];
            tD[D + 2] = G[K];
            tD[D + 3] = 248 + A[K];
            k(D)
        }
            ;
        this.xs = function (D, K) {
            tD[D] = x[0] + l[K] % 4;
            tD[D + 1] = x[1] + z[K] % 4;
            tD[D + 2] = x[2] + y[K] % 4;
            tD[D + 3] = 192 + A[K];
            k(D)
        }
    }
    function jw() {
        function g() {
            for (B = 0, F = 1, void 0; 5 > F; F++) {
                var B;
                var F;
                B += z[F] % 1024;
            }
            return B
        }
        function k() {
            for (var B = 1; B < y - C; B++)
                z[B] = parseInt(z[B])
        }
        function x() {
            z[0] = "Player " + Math.floor(1E3 * Math.random());
            z[1] = r < s ? Math.floor(1 + Math.random() * (Math.pow(2, 30) - 1)) : 0;
            z[2] = 1;
            z[3] = 1;
            z[4] = r < s ? 0 : 1;
            z[5] = 0;
            z[6] = "000";
            z[7] = "0";
            z[8] = "0";
            z[9] = "0";
            f.y()
        }
        function t() {
            for (var B = y - C - 1; 0 <= B; B--)
                z[B] = m.n(z[B]);
            z[0] = m.iA(z[0])
        }
        function CreateCookie(Cookie, F, E) {
            var date = new Date;
            date.setTime(date.getTime() + Math.floor(31536E6 * E));
            Cookie = Cookie + "=" + F + ";expires=" + date.toUTCString() + ";SameSite=Strict;Secure;path=/";
            document.cookie = Cookie
        }
        var l;
        var z;
        var y;
        var A;
        var C;
        this.bh = function () {
            if (!(5 <= d || b)) {
                C = 4;
                A = 0;
                l = [];
                y = 10;
                for (var B = 0; B < y; B++)
                    l.push("u" + B);
                z = Array(y);
                for (cookieArray = document.cookie.split(";"), J = cookieArray.length - 1, void 0; 0 <= J; J--) {
                    var F;
                    var cookieArray;
                    var J;
                    cookieArray[J] = cookieArray[J].trim();
                    for (B = 2; 0 <= B; B--)
                        cookieArray[J] = cookieArray[J].replace(" ", "");
                    3 < cookieArray[J].length && (B = l.indexOf(cookieArray[J].substring(0, 2)),
                        F = cookieArray[J].indexOf("="),
                        0 <= B && 2 === F ? z[B] = cookieArray[J].substring(F + 1, cookieArray[J].length) : 0 < F && CreateCookie(cookieArray[J].substring(0, F), "0", 0))
                }
                z[9] || (z[9] = "0");
                a: {
                    for (B = y - 1; 0 <= B; B--)
                        if (void 0 === z[B]) {
                            B = false;
                            break a
                        }
                    B = true
                }
                B ? (A = 2,
                    t(),
                    k(),
                    g() !== z[5] && x()) : x()
            }
        }
            ;
        this.y = function () {
            if (2 === A) {
                z[1] = 0 === z[1] ? Math.floor(1 + Math.random() * (Math.pow(2, 30) - 1)) : z[1];
                z[5] = g();
                for (var B = 1; B < y - C; B++)
                    z[B] = z[B].toString();
                z[0] = m.i9(z[0]);
                for (B = y - C - 1; 0 <= B; B--)
                    z[B] = m.z(z[B]);
                for (B = y - 1; 0 <= B; B--)
                    CreateCookie(l[B], z[B], 1);
                t();
                k()
            }
        }
            ;
        this.a0 = function () {
            return A
        }
            ;
        this.mk = function (B) {
            A = B;
            this.y()
        }
            ;
        this.x = function (B, F) {
            5 <= d || b || (z[B] = F)
        }
            ;
        this.g = function (B) {
            return 5 <= d || b ? 0 : z[B]
        }
    }
    function kL() {
        function g(t) {
            for (k -= 2; t < k; t += 2)
                x[t] = x[t + 2],
                    x[t + 1] = x[t + 3]
        }
        var k = 0;
        var x = new Uint16Array(32);
        this.bh = function () {
            k = 0
        }
            ;
        this.d6 = function () {
            if (0 !== k)
                if (0 === f1[localPlayerID] || aW.yA(localPlayerID) === aW.aX(localPlayerID))
                    k = 0;
                else {
                    var t;
                    for (t = k - 2; 0 <= t; t -= 2) {
                        var n = x[t];
                        if (n < b0 && 0 === f1[n])
                            g(t);
                        else {
                            var l = x[t + 1];
                            if (n >= b0 && lF(localPlayerID) || n < b0 && lJ(localPlayerID, n))
                                isSingleplayer ? f7(localPlayerID, n, l) : iU.l2(l, n === b0 ? localPlayerID : n),
                                    g(t)
                        }
                    }
                }
        }
            ;
        this.l5 = function (t, n) {
            var l;
            a: {
                for (l = 0; l < k; l += 2)
                    if (x[l] === t) {
                        x[l + 1] += n;
                        x[l + 1] = FindMin(x[l + 1], 1E3);
                        l = true;
                        break a
                    }
                l = false
            }
            l || 32 === k || (x[k] = t,
                x[k + 1] = n,
                k += 2)
        }
    }
    function fW(g) {
        fN || isSingleplayer || 8 === gameMode ? (yE(g),
            yF()) : (e5.yD(g),
                g === localPlayerID && (eI.show(false, false),
                    dy.sW()))
    }
    function yE(g) {
        yG(g);
        yH(g);
        yI(g);
        am.an(g);
        e7.fm(g);
        aW.yJ(g)
    }
    function yG(g) {
        g < ci && 2 !== kn[g] && iZ++;
        var k = aW.yL(g);
        0 === k.length ? g === localPlayerID && yM() : (yN(g, k),
            yO(g, k))
    }
    function yM() {
        as.at[17] += TroopBalance[localPlayerID] + aW.yP(localPlayerID);
        eI.show(false, false);
        dy.sW()
    }
    function yN(g, k) {
        var x;
        for (x = k.length - 1; 0 <= x; x--)
            aW.yQ(k[x], g)
    }
    function yR(g) {
        var k;
        var x = 0;
        for (k = g.length - 1; 1 <= k; k--)
            landSizeArray[g[k]] > landSizeArray[g[x]] && (x = k);
        return x
    }
    function yO(g, k) {
        var x;
        var t = k[yR(k)];
        9 === gameMode && 1 === dN.dO[g] && cW.dG(8) && dp.yT(t);
        if (g === localPlayerID)
            dw.fX(t, 1),
                yM();
        else {
            for (x = k.length - 1; 0 <= x; x--)
                if (k[x] === localPlayerID) {
                    dw.fX(g, 0);
                    return
                }
            g < ci && dw.md(g, t)
        }
    }
    function yI(g) {
        f1[g] = TroopBalance[g] = 0;
        aw[g] = null;
        bE[g] = null;
        bF[g] = null;
        bI[g] = null;
        e5.fS(g)
    }
    function yH(g) {
        var k;
        var x;
        for (k = cr[g]; k >= cs[g]; k--)
            for (x = cu[g]; x >= cv[g]; x--) {
                var t = 4 * (x * aR + k);
                ax.hQ(g, t) && (ax.hR(t),
                    landSizeArray[g]--)
            }
    }
    function kP() {
        this.yU = null;
        this.bh = function () {
            this.yU = 10 !== gameMode ? null : new Uint32Array(b0)
        }
            ;
        this.d6 = function () {
            10 === gameMode && this.yV()
        }
            ;
        this.yV = function () {
            var g;
            var k = this.yU;
            var x = dQ;
            var t = TroopBalance;
            for (g = dP - 1; 0 <= g; g--) {
                var n = x[g];
                if (!(n >= ci)) {
                    var l = Math.max(ak(t[n], 4), 2048);
                    var z = Math.max(aq.sj(n), 100);
                    k[n] += ak(z * l, 1E4);
                    k[n] > l && (k[n] = l)
                }
            }
        }
            ;
        this.t6 = function (g, k) {
            if (k > this.yU[g])
                return k = this.yU[g],
                    this.yU[g] = 0,
                    k;
            this.yU[g] -= k;
            return k
        }
    }
    function jx() {
        function g(y) {
            return y < ci ? k * y : k * ci + x * (y - ci)
        }
        var k;
        var x;
        var t;
        var n;
        var l;
        var z;
        this.bh = function () {
            k = 16 > ci ? 12 : 8;
            x = 4;
            var y = g(b0);
            t = new Uint8Array(b0);
            n = new Uint16Array(y);
            l = new Uint32Array(y);
            z = new Uint16Array(y)
        }
            ;
        this.yJ = function (y) {
            t[y] = 0
        }
            ;
        this.yQ = function (y, A) {
            var C;
            a: {
                var B = g(y);
                for (C = t[y] - 1; 0 <= C; C--)
                    if (0 === z[B + C] && n[B + C] === A)
                        break a;
                C = t[y]
            }
            C !== t[y] && (B = l[g(y) + C],
                this.au(y, C),
                this.cI(y, B, b0))
        }
            ;
        this.cg = function (y, A) {
            var C;
            var B = g(y);
            for (C = t[y] - 1; 0 <= C; C--)
                if (0 === z[B + C] && n[B + C] === A)
                    return true;
            return false
        }
            ;
        this.d4 = function (y) {
            return y < ci ? t[y] < k : t[y] < x
        }
            ;
        this.aX = function (y) {
            return t[y]
        }
            ;
        this.ad = function (y, A) {
            return n[g(y) + A]
        }
            ;
        this.aY = function (y, A) {
            return z[g(y) + A]
        }
            ;
        this.fG = function (y, A) {
            var C;
            var B = g(y);
            for (C = t[y] - 1; 0 <= C; C--)
                if (z[B + C] === A)
                    return C;
            return -1
        }
            ;
        this.ae = function (y, A) {
            return l[g(y) + A]
        }
            ;
        this.ba = function (y, A) {
            var C;
            var B = g(y);
            for (C = t[y] - 1; 0 <= C; C--)
                if (0 === z[B + C] && n[B + C] === A)
                    return l[B + C];
            return 0
        }
            ;
        this.yP = function (y) {
            var A = g(y);
            var C = 0;
            for (y = t[y] - 1; 0 <= y; y--)
                C += l[A + y];
            return C
        }
            ;
        this.ya = function (y) {
            var A = g(y);
            var C = 0;
            for (y = t[y] - 1; 0 <= y; y--)
                0 === z[A + y] && (C += l[A + y]);
            return C
        }
            ;
        this.yA = function (y) {
            var A = g(y);
            var C = 0;
            for (y = t[y] - 1; 0 <= y; y--)
                0 < z[A + y] && C++;
            return C
        }
            ;
        this.bZ = function (y, A, C) {
            var B = g(y);
            for (y = t[y] - 1; 0 <= y; y--)
                0 === z[B + y] && n[B + y] === A && (l[B + y] = C)
        }
            ;
        this.bL = function (y, A, C) {
            l[g(y) + A] = C
        }
            ;
        this.cI = function (y, A, C) {
            var B;
            var F = g(y);
            C === localPlayerID && as.at[y < ci ? 6 : 5]++;
            for (B = t[y] - 1; 0 <= B; B--)
                if (0 === z[F + B] && n[F + B] === C) {
                    l[F + B] += A;
                    l[F + B] = l[F + B] > im ? im : l[F + B];
                    return
                }
            n[F + t[y]] = C;
            l[F + t[y]] = A;
            z[F + t[y]] = 0;
            t[y]++;
            y < ci && (C === localPlayerID ? dw.fX(y, 5) : y === localPlayerID && dx.mC(C))
        }
            ;
        this.t7 = function (y, A, C) {
            var B = g(y);
            f1[y] = 2;
            n[B + t[y]] = 0;
            l[B + t[y]] = A;
            z[B + t[y]] = C;
            t[y]++
        }
            ;
        this.au = function (y, A) {
            var C;
            if (0 !== t[y]) {
                var B = g(y);
                t[y]--;
                for (C = A; C < t[y]; C++)
                    n[B + C] = n[B + C + 1],
                        l[B + C] = l[B + C + 1],
                        z[B + C] = z[B + C + 1]
            }
        }
            ;
        this.yL = function (y) {
            var A;
            var C;
            var B = [];
            for (A = dP - 1; 0 <= A; A--) {
                var F = g(dQ[A]);
                for (C = t[dQ[A]] - 1; 0 <= C; C--)
                    if (0 === z[F + C] && n[F + C] === y) {
                        B.push(dQ[A]);
                        break
                    }
            }
            return B
        }
    }
    function jy() {
        var g;
        var k;
        var x;
        var t;
        var n;
        var l;
        this.bh = function () {
            t = x = k = g = 10
        }
            ;
        this.yh = function () {
            l = 512;
            n = new Uint16Array(l);
            for (var z = 0; z < l; z++)
                n[z] = 100 + bd(ak(25600 * z, l - 4), 9)
        }
            ;
        this.rS = function () {
            return t
        }
            ;
        this.d6 = function () {
            if (0 >= --x) {
                x = g;
                var z;
                var y = TroopBalance[localPlayerID];
                isSingleplayer && !d1 && 0 !== f1[0] && 0 === dk.dl[0].b5 && (TroopBalance[0] += ak(landSizeArray[0], 6));
                for (z = dP - 1; 0 <= z; z--) {
                    var A = ak(aq.sj(dQ[z]) * TroopBalance[dQ[z]], 1E4);
                    TroopBalance[dQ[z]] += 1 > A ? 1 : A;
                    aq.ar(dQ[z])
                }
                as.at[9] += TroopBalance[localPlayerID] - y;
                if (0 >= --t) {
                    t = k;
                    z = TroopBalance[localPlayerID];
                    for (A = dP - 1; 0 <= A; A--)
                        TroopBalance[dQ[A]] += landSizeArray[dQ[A]],
                            aq.ar(dQ[A]);
                    as.at[8] += TroopBalance[localPlayerID] - z
                }
            }
        }
            ;
        this.sj = function (z) {
            var y = n[ak((l - 1) * landSizeArray[z], il)];
            if (1920 > bw.dL()) {
                var A = ak(100 * (13440 - 6 * bw.dL()), 1920);
                y = A > y ? A : y
            }
            A = this.dA(z);
            TroopBalance[z] > A && (y -= ak(2 * y * (TroopBalance[z] - A), A));
            return 0 > y ? 0 : 700 < y ? 700 : y
        }
            ;
        this.dA = function (z) {
            z = 100 * landSizeArray[z];
            return z > io ? io : z
        }
            ;
        this.ar = function (z) {
            var y = landSizeArray[z] * ij;
            TroopBalance[z] = TroopBalance[z] > im ? im : TroopBalance[z] > y ? y : TroopBalance[z]
        }
    }
    function jz() {
        function g() {
            X.width = fx;
            X.height = c3;
            T = X.getContext("2d", {
                alpha: true
            });
            T.textAlign = cB;
            T.textBaseline = cA;
            T.imageSmoothingEnabled = true
        }
        function k() {
            U = false;
            S = 1;
            V = N = 0;
            T.clearRect(0, 0, fx, c3);
            for (M = fv / fq, R = fw / fq, Y = (fx + fv) / fq, Z = (c3 + fw) / fq, ua = dP - 1, void 0; 0 <= ua; ua--) {
                var M;
                var R;
                var Y;
                var Z;
                var ka;
                var la;
                var fa;
                var da;
                var qa;
                var ua;
                if (fa = dQ[ua],
                    da = Math.floor(W * fq * H[fa] * J[fa]),
                    !(da < P || da >= K) && F[fa] + J[fa] > M && F[fa] < Y && E[fa] + G[fa] > R && E[fa] < Z) {
                    ka = Math.floor(fx * (F[fa] + J[fa] / 2 - M) / (Y - M));
                    la = Math.floor(c3 * (E[fa] + G[fa] / 2 - R) / (Z - R) - .1 * da);
                    T.font = o4[kn[fa]] + da + bm;
                    qa = T;
                    var ra = fa;
                    ra = da >= I && da < K ? dN.zW[ax.q7[ra]] + n(da).toFixed(3) + ")" : dN.zX[ax.q7[ra]];
                    qa.fillStyle = ra;
                    T.fillText(8 === gameMode ? eC.g2(TroopBalance[fa]) : mpPlayerArray[fa], ka, la);
                    U = true;
                    if (0 < ba[fa]) {
                        qa = ka;
                        ra = la;
                        var ta = da;
                        var sa = fa;
                        if (0 === rX[sa])
                            if (a5.nS(ea[sa])) {
                                var za = qa;
                                var va = ta;
                                var ya = sa;
                                sa = ea[sa];
                                var wa = .9 * va / a5.bt;
                                var Ba = Math.floor(ra - .5 * wa * a5.bt - .05 * va);
                                T.globalAlpha = n(va);
                                for (Aa = Math.floor(za - .5 * va / D[ya] - .4 * va - wa * a5.bt), xa = 0, void 0; 2 > xa; xa++) {
                                    var Aa;
                                    var xa;
                                    T.setTransform(wa, 0, 0, wa, Aa, Ba),
                                        T.drawImage(a5.ke[sa], 0, 0),
                                        Aa = Math.floor(za + .5 * va / D[ya] + .4 * va);
                                }
                                T.globalAlpha = 1;
                                T.setTransform(1, 0, 0, 1, 0, 0);
                                x(qa, ra, ta, 0, 0)
                            } else
                                a5.nR(ea[sa]) ? (t(qa, ra, ta, ea[sa], 0),
                                    x(qa, ra, ta, 0, 1)) : (t(qa, ra, ta, ea[sa], 1),
                                        x(qa, ra, ta, 1, 0));
                        else
                            t(qa, ra, ta, ea[sa], 0)
                    } else
                        0 === rX[fa] && x(ka, la, da, 0, 0);
                    if (0 < ba[fa + b0] || 0 < ba[fa + 2 * b0] || 0 < ba[fa + 3 * b0] || 0 < ba[fa + 4 * b0]) {
                        ra = ka;
                        ta = la;
                        za = da;
                        va = fa;
                        ya = -1;
                        for (qa = 4; 1 <= qa; qa--)
                            0 < ba[va + qa * b0] && ya++;
                        for (qa = 1; 5 > qa; qa++)
                            0 < ba[va + qa * b0] && (sa = za,
                                wa = qa,
                                Ba = va,
                                Aa = ba[va + qa * b0],
                                xa = .8 * sa / a5.bt,
                                T.setTransform(xa, 0, 0, xa, Math.floor(ra - .5 * xa * a5.bt - .534 * ya * sa), Math.floor(ta + 1.4 * xa * a5.bt)),
                                T.globalAlpha = n(sa),
                                T.drawImage(1 === wa ? a5.ke[ea[Ba + b0]] : 2 === wa && 255 > Aa ? hY.kc[2] : hY.kb[wa + 3], 0, 0),
                                T.globalAlpha = 1,
                                T.setTransform(1, 0, 0, 1, 0, 0),
                                ya -= 2)
                    }
                    qa = Math.floor(L * da);
                    qa < P || (T.font = bl + qa + bm,
                        T.fillText(8 === gameMode ? mpPlayerArray[fa] : eC.g2(TroopBalance[fa]), ka, la + Math.floor(.78 * da)))
                }
            }
        }
        function x(M, R, Y, Z, ka) {
            var la = .95 * Y / Q;
            T.setTransform(la, 0, 0, la, Math.floor(M - .5 * la * ma + .8 * Z * Y), Math.floor(R - 1.76 * la * Q - .82 * ka * Y));
            T.globalAlpha = n(Y);
            T.drawImage(bo.br(4), 0, 0);
            T.globalAlpha = 1;
            T.setTransform(1, 0, 0, 1, 0, 0)
        }
        function t(M, R, Y, Z, ka) {
            var la = 1.2 * Y / a5.bt;
            T.setTransform(la, 0, 0, la, Math.floor(M - .5 * la * a5.bt - .8 * ka * Y), Math.floor(R - 1.5 * la * a5.bt));
            T.globalAlpha = n(Y);
            T.drawImage(a5.ke[Z], 0, 0);
            T.globalAlpha = 1;
            T.setTransform(1, 0, 0, 1, 0, 0)
        }
        function n(M) {
            return M >= I && M < K ? 1 - (M - I) / (K - I) : 1
        }
        function l(M) {
            var R;
            var Y = F[M];
            for (R = F[M] - cs[M] - 1; 0 <= R; R--)
                if (Y--,
                    !y(M, Y, E[M], G[M])) {
                    Y++;
                    break
                }
            var Z = F[M];
            for (R = cr[M] - F[M] - J[M]; 0 <= R; R--)
                if (Z++,
                    !y(M, Z + J[M] - 1, E[M], G[M])) {
                    Z--;
                    break
                }
            Y = Math.floor((Y + Z) / 2);
            Z = E[M];
            for (R = E[M] - cv[M] - 1; 0 <= R; R--)
                if (Z--,
                    !A(M, Y, Z, J[M])) {
                    Z++;
                    break
                }
            var ka = E[M];
            for (R = cu[M] - E[M] - G[M]; 0 <= R; R--)
                if (ka++,
                    !A(M, Y, ka + G[M] - 1, J[M])) {
                    ka--;
                    break
                }
            R = Math.floor((Z + ka) / 2);
            z(M, Y, R, J[M], G[M]) && (F[M] = Y,
                E[M] = R)
        }
        function z(M, R, Y, Z, ka) {
            var la;
            for (la = R + Z - 1; la >= R; la--)
                if (!y(M, la, Y, ka))
                    return false;
            var fa = Math.floor(.25 * ka);
            fa = 1 > fa ? 1 : fa;
            for (la = Y + ka - 1 - fa; la >= Y + fa; la--)
                if (!A(M, R, la, Z))
                    return false;
            return true
        }
        function y(M, R, Y, Z) {
            return ax.hQ(M, 4 * (Y * aR + R)) && ax.hQ(M, 4 * ((Y + Z - 1) * aR + R))
        }
        function A(M, R, Y, Z) {
            return ax.hQ(M, 4 * (Y * aR + R)) && ax.hQ(M, 4 * (Y * aR + R + Z - 1))
        }
        var C;
        var B;
        var F;
        var E;
        var J;
        var G;
        var H;
        var D;
        var K;
        var I;
        var L;
        var O;
        var P;
        var W;
        var V;
        var N;
        var S;
        var U;
        var X;
        var T;
        var pa;
        var ea;
        var ba;
        var ma;
        var Q;
        this.bh = function () {
            U = false;
            W = .88;
            L = .5;
            O = 1.8;
            K = Math.floor(.5 * oX);
            I = Math.floor(.2 * K);
            P = 8 === gameMode ? 4 : 4 >= s0 ? 9 : 7 >= s0 ? 8 : 7;
            B = C = 0;
            F = new Uint16Array(b0);
            E = new Uint16Array(b0);
            J = new Uint16Array(b0);
            G = new Uint16Array(b0);
            H = new Float32Array(b0);
            D = new Float32Array(b0);
            ea = new Uint8Array(2 * b0);
            ba = new Uint8Array(5 * b0);
            X = document.createElement("canvas");
            g();
            N = V = 0;
            S = 1;
            pa = 0;
            if (8 === gameMode) {
                var M;
                T.font = bl + 100 + bm;
                var R = 100 / Math.floor(T.measureText("20 000 000").width);
                for (M = b0 - 1; 0 <= M; M--)
                    D[M] = H[M] = R
            } else
                for (T.font = bl + Math.floor(100 * L) + bm,
                    R = 80 / Math.floor(T.measureText(eC.g2(im)).width),
                    T.font = bl + 100 + bm,
                    M = b0 - 1; 0 <= M; M--)
                    D[M] = 100 / Math.floor(T.measureText(mpPlayerArray[M]).width),
                        H[M] = R < D[M] ? R : D[M];
            for (M = b0 - 1; 0 <= M; M--)
                12 > landSizeArray[M] ? (F[M] = cs[M] + 1,
                    E[M] = cv[M] + 1,
                    J[M] = 1,
                    G[M] = 1) : (F[M] = cs[M],
                        E[M] = cv[M] + 1,
                        J[M] = 4,
                        G[M] = 2);
            if (fN)
                for (M = 0; M < ci; M++)
                    J[M] = 0;
            ma = bo.br(4).width;
            Q = bo.br(4).height
        }
            ;
        this.lT = function () {
            g();
            k()
        }
            ;
        this.ih = function () {
            for (var M = pa = 0; M < ci; M++)
                3 !== cr[M] - cs[M] || 3 !== cu[M] - cv[M] ? (F[M] = cs[M] + (cr[M] !== cs[M] ? 1 : 0),
                    E[M] = cv[M],
                    J[M] = 1,
                    G[M] = 1) : (F[M] = cs[M],
                        E[M] = cv[M] + 1,
                        J[M] = 4,
                        G[M] = 2)
        }
            ;
        this.mU = function (M, R, Y) {
            0 !== f1[M] && (M += R * b0,
                0 === R ? ea[M] === Y && 0 < ba[M] ? ba[M] = 0 : (ea[M] = Y,
                    ba[M] = a5.nS(Y) ? 255 : 64) : 1 === R ? (ba[M] = 64,
                        ea[M] = Y) : ba[M] = Y)
        }
            ;
        this.c8 = function () {
            U && (1 !== S ? (c9.imageSmoothingEnabled = true,
                c9.setTransform(S, 0, 0, S, 0, 0),
                c9.drawImage(X, -V / S, -N / S),
                c9.setTransform(1, 0, 0, 1, 0, 0)) : (c9.imageSmoothingEnabled = false,
                    c9.drawImage(X, -V, -N)))
        }
            ;
        this.qc = function (M, R) {
            V += M;
            N += R
        }
            ;
        this.lK = function (M, R) {
            dx.qc(M, R)
        }
            ;
        this.zoom = function (M, R, Y) {
            S *= M;
            V = (V + R) * M - R;
            N = (N + Y) * M - Y
        }
            ;
        this.eN = function () {
            return 0 >= --pa ? (pa = 4 >= s0 ? 10 : 12 > s0 ? 5 : 2,
                k(),
                true) : false
        }
            ;
        this.fz = function (M) {
            return H[M]
        }
            ;
        this.d6 = function () {
            if (4 <= ++B) {
                var M;
                var R;
                B = 0;
                for (R = 4; 1 <= R; R--)
                    for (M = dP - 1; 0 <= M; M--) {
                        var Y = dQ[M] + R * b0;
                        0 < ba[Y] && 255 > ba[Y] && ba[Y]--
                    }
                if (2 !== fK)
                    for (M = dP - 1; 0 <= M; M--)
                        Y = dQ[M],
                            0 < ba[Y] && 255 > ba[Y] && ba[Y]--
            }
            M = Math.floor(.1 * dP);
            M = 8 > M ? 8 : M;
            M = M > dP ? dP : M;
            for (Y = C + M - 1; Y >= C; Y--)
                if (R = Y % dP,
                    R = dQ[R],
                    0 < J[R] && z(R, F[R], E[R], J[R], G[R])) {
                    for (da = R, qa = false, ua = 0, void 0; 8 > ua; ua++) {
                        var Z;
                        var ka;
                        var la;
                        var fa;
                        var da;
                        var qa;
                        var ua;
                        ka = J[da] + 2;
                        Z = G[da] + 2;
                        if (ka > cr[da] - cs[da] + 1 || Z > cu[da] - cv[da] + 1)
                            break;
                        fa = F[da] - 1;
                        la = E[da] - 1;
                        if (z(da, fa, la, ka, Z))
                            F[da] = fa,
                                E[da] = la,
                                J[da] = ka,
                                G[da] = Z,
                                qa = true;
                        else
                            break
                    }
                    if (Z = !qa) {
                        da = R;
                        qa = false;
                        ua = J[da];
                        for (ra = 1 + Math.floor(.02 * ua), ta = 1, void 0; 5 > ta; ta++) {
                            var ra;
                            var ta;
                            ka = ua + ta * ra;
                            if (ka > cr[da] - cs[da] + 1)
                                break;
                            Z = 1 + Math.floor(O * H[da] * ka);
                            if (Z > cu[da] - cv[da] + 1)
                                break;
                            fa = cs[da] + Math.floor(Math.random() * (cr[da] - cs[da] + 2 - ka));
                            la = cv[da] + Math.floor(Math.random() * (cu[da] - cv[da] + 2 - Z));
                            z(da, fa, la, ka, Z) && (F[da] = fa,
                                E[da] = la,
                                J[da] = ka,
                                G[da] = Z,
                                qa = true)
                        }
                        Z = qa
                    }
                    Z && l(R)
                } else {
                    a: {
                        ka = R;
                        la = F[ka] + 1;
                        fa = E[ka] + 1;
                        for (da = J[ka] - 2; ;) {
                            if (1 > da) {
                                J[ka] = 0;
                                break
                            }
                            Z = 1 + Math.floor(O * H[ka] * da);
                            if (z(ka, la, fa, da, Z)) {
                                F[ka] = la;
                                E[ka] = fa;
                                J[ka] = da;
                                G[ka] = Z;
                                Z = true;
                                break a
                            }
                            la++;
                            fa++;
                            da -= 2
                        }
                        Z = false
                    }
                    if (Z)
                        l(R);
                    else
                        for (Z = R,
                            la = cr[Z] - cs[Z] + 1,
                            ka = Math.floor(.02 * la),
                            ka = 1 > ka ? 1 : ka,
                            R = -6 * ka; la >= R; la -= ka)
                            if (da = 0 < la ? la : 1,
                                fa = 1 + Math.floor(O * H[Z] * da),
                                ua = cs[Z] + Math.floor(Math.random() * (cr[Z] - cs[Z] + 2 - da)),
                                qa = cv[Z] + Math.floor(Math.random() * (cu[Z] - cv[Z] + 2 - fa)),
                                z(Z, ua, qa, da, fa)) {
                                F[Z] = ua;
                                E[Z] = qa;
                                J[Z] = da;
                                G[Z] = fa;
                                break
                            }
                }
            C += M;
            C %= dP
        }
            ;
        this.mC = function (M) {
            M += 2 * b0;
            return 255 === ba[M] ? (ba[M] = 0,
                true) : false
        }
    }
    function k0() {
        var CountryBotNames;
        var PersonBotNames;
        this.bh = function () {
            var x;
            var t;
            CountryBotNames = "Abbasid Caliphate;Aceh s;Achaemenid Z;Afsharid z;Aghlabid Emirate;Ahom z;Akkadian Z;Aksumite Z;Akwamu;Alaouite z;Almohad Caliphate;Almoravid z;Angevin Z;Aq Qoyunlu;Armenian Z;Assyria;Ashanti Z;Austrian Z;Austria-Hungary;Ayyubid z;Aztec Z;Aulikara Z;Babylonian Z;Balhae;Banten s;S Banjar;Bamana Z;Bengal s;Benin Z;Kadamba z;Bornu Z;E Brazil;Britannic Z;British Z;British Raj;Bruneian Z;Bukhara Z;Burgundian State;Buyid z;Byzantine Z;Caliphate of C\u00f3rdoba;Cao Wei;Carthaginian Z;Cebu Rajahnate;Chagatai Khanate;Chalukya z;Chauhan z;Chav\u00edn Z;Chenla;Chera z;Chola z;Comanche Z;Congo Free State;Crimean Khanate;Dacian Z;Delhi s;Demak s;Durrani Z;Dutch Z;Egyptian Z;Elamite Z;Exarchate of Africa;Abyssinia;Fatimid Caliphate;First French Z;Frankish Z;Funan;Gallic Z;Gaza Z;Republic of Genoa;German Z;Ghana Z;Ghaznavid z;Ghurid z;Goguryeo;Goryeo;Gorkha Z;G\u00f6kt\u00fcrk Khaganate;Golden Horde;S Gowa;Seljuq Z;Gupta Z;Hafsid Y;Han z;Hanseatic League;E Harsha;Hephthalite Z;Hittite Z;Holy Roman Z;Hotak z;Hoysala Z;Hunnic Z;Husainid z;Idrisid z;Ilkhanate;K Israel;K Judah;Inca Z;Italian Z;E Japan;Jin z;Johor Z;Jolof Z;Joseon;Kaabu Z;Kachari Y;Kalmar Union;Kanem Z;Kanva z;Kara-Khanid Khanate;Kazakh Khanate;Khazar Khaganate;Khmer Z;Khilji z;Khwarazmian z;Kievan Rus';Konbaung z;Kong Z;Korean Z;Kushan Z;K Kush;Lakota;Latin Z;Later L\u00ea z;Liao z;Lodi s;Khmer Z;Macedonian Z;Majapahit Z;Mali Z;Malacca Z;Mamluk s;Manchukuo;Maratha Z;Marinid z;Massina Z;Mataram s;Mauretania;Mauryan Z;Median Z;Mlechchha z;Ming z;Mitanni Z;Mongol Z;Mughal Z;Nanda Z;Nguy\u1ec5n z;North Sea Z;E Nicaea;Numidia;Omani Z;Ottoman Z;Oyo Z;Pagan Z;Pahlavi z;Pala Z;Palmyrene Z;Parthian Z;Pontic Z;Portuguese Z;K Prussia;Ptolemaic Z;Qajar z;Qara Qoyunlu;Qin z;Qing z;Ramnad Sethupathis;Rashidun Caliphate;Rashtrakuta z;Roman Z;Rouran Khaganate;Rozwi Z;Rustamid z;Russian Z;Tsardom of Russia;Saadi z;Safavid z;Saffarid z;Sassanid z;Satavahana z;Samanid Z;Soviet Union;Saudeleur z;Duchy of Savoy;Seleucid Z;Serbian Z;Shu Han;Shang z;Siam Z;Sikh Z;Singhasari;Sokoto Caliphate;Song z;Songhai Z;Spanish Z;Srivijaya Z;Sui z;K Mysore;Shunga Z;S Sulu;Sumer;Sur Z;Swedish Z;Tahirid z;Tang z;T\u00e2y S\u01a1n z;S Ternate;E Thessalonica;German Reich;Tibetan Z;Tondo z;S Tidore;Timurid Z;K Tlemcen;E Trebizond;Toltec Z;Toungoo z;Toucouleur Z;Tu'i Tonga Z;Turgesh Khaganate;Umayyad Caliphate;Uyunid Emirate;Uyghur Khaganate;Uzbek Khanate;Vandal Y;Vijayanagara Z;Republic of Venice;Wari Z;Wassoulou Z;Wattasids;Western Roman Z;Eastern Wu;Western Xia z;Xin z;Yuan z;Zand z;Zhou z;Zulu Z;Yugoslavia;Kosovo;Sikkim;Kanem\u2013Bornu Z;Wadai Z;Ethiopian Z;Rozvi Z;Sasanian Z;E Vietnam;Shilluk Y;K Aksum;Gwiriko Y;Toro Y;Malindi Y;K Loango;K Mapungubwe;Ryukyu Y;K Cyprus;K Jerusalem;Garhwal Y;K Nepal;K Cambodia;Champa Y;Hanthawaddy Y;Phayao Y;K Sardinia;K Sicily;K Gwynedd;K Scotland;K Desmond;K Poland;K Hungary;K Croatia;K Bohemia;Albanian Y;K Georgia;K Portugal;Khanate of Sibir;K Romania;Cossack Hetmanate;Duchy of Bouillon;K Ireland;Lordship of Ireland;K Italy;Republic of Pisa;Idrisid z;Almoravid z;Almohad Caliphate;Marinid z;Wattasid z;Saadian z;Republic of Sal\u00e9;Rif Republic;K Kush;Makuria;Alodia;Ayyubid z;Mamluk s;Egypt Eyalet;K Fazughli;S Sennar;S Darfur;Mahdist State;S Egypt;K Egypt;Emirate of Cyrenaica;K Libya;Republic of Egypt;Republic of the Sudan;United Arab Republic;Libyan Arab Republic;Zirid z;Hafsid z;K Kuku;Regency of Algiers;Gurunsi;Liptako;Tenkodogo;Wogodogo;Yatenga;Bilanga;Bilayanga;Bongandini;Con;Macakoali;Piela;Nungu;K Sine;K Saloum;K Baol;K Cayor;K Waalo;Bundu;Bonoman;Gyaaman;Denkyira;Mankessim Y;K Dahomey;Oyo Z;K Nri;Aro Confederacy;Kwararafa;Biafra;Buganda;Bunyoro;Ankole;Busoga;Tanganyika;Kuba Y;K Luba;K Lunda;Yeke Y;K Ndongo;Kasanje Y;K Matamba;Mbunda Y;Chokwe Y;Kazembe Y;K Butua;Ndebele Y;Mthethwa Z;Bophuthatswana;Ciskei;Transkei;Venda;Rhodesia;Kart z;Nogai Horde;Khanate of Bukhara;Khanate of Khiva;Khamag Mongol;Northern Fujiwara;Kamakura Shogunate;Ashikaga Shogunate;Jaxa;Republic of Ezo;Jiangxi Soviet;Hunan Soviet;Guangzhou Commune;Gojoseon;Alaiye;Beylik of Bafra;Kara Koyunlu;Kars Republic;K Iraq;Arab Federation;Kar-Kiya z;Baduspanids;Marashiyan z;Afrasiyab z;Mihrabanid z;Safavid Iran;Sheikhdom of Kuwait;Bani Khalid Emirate;Emirate of Diriyah;Emirate of Najd;Muscat and Oman;Emirate of Riyadh;S Najd;K Hejaz;Fadhli s;Emirate of Beihan;Emirate of Dhala;S Lahej;Republic of Kuwait;K Cochin;Jaffna Y;Laur Y;Pandya z;Jaunpur s;Jaintia Y;Hyderabad State;Travancore;Udaipur State;Manikya z;Lan Xang;K Vientiane;K Champasak;Lao Issara;K Laos;Pyu States;Ava;Mon Ys;Pegu;K Mrauk U;Taungoo z;Shan States;Arakan;Raktamaritika;Singhanavati;Dvaravati;Ngoenyang;Hariphunchai;Tambralinga;Lavo Y;Langkasuka;Sukhothai Y;S Singora;Ayutthaya Y;Thonburi Y;Lan Na;Pattani Y;Jambi s;Palembang s;S Deli;S Langkat;S Serdang;S Cirebon;K Pajang;K Bali;Bima s;K Larantuka;K Banggai;Luwu;S Bone;Caucasian Albania;Kabardia;Circassia;K Abkhazia;Elisu s;Avar Khanate;Caucasian Imamate;K Imereti;K Kartli;K Kakheti;Crown of Aragon;Emirate of Granada;K Majorca;Crown of Castile;K Haiti;Cocoll\u00e1n;Zapotec Civilization;Mosquito Y;Somoza Regime;Iroquois Confederacy;Cherokee Nation;Vermont Republic;State of Muskogee;K Alo;K Sigave;K Fiji;K Nauru;K Chile;Muisca Confederation;El Stronato;K Chimor;Jungle Republic;Liga Federal;Supreme Junta;Weimar Republic;K Bavaria;Bremen;Frankfurt;Hamburg;K Hanover;Holstein;Lippe;Nassau;Oldenburg;Pomerania;Reuss;Saxe-Altenburg;Saxony;Schleswig;Waldeck;W\u00fcrttemberg;Helvetic Republic;Republic of Florence;Duchy of Urbino;Republic of Cospaia;Duchy of Lucca;Duchy of Mantua;Duchy of Milan;Papal States".split(";");
            PersonBotNames = "Antin Mark Artem Viktor Pasha Maxim Rodion Yuri Lev Luka Ivan Igor Nikita Leonid Daniil Alexei Boris Sasha Yulia Luda Yana Kira Alisa Polina Mischa Mila Inessa Alyona Alina Anya Anna Maria Sofia Walda Uta Tyra Tanka Svea Saskia Runa Rigmor Ostara Nanna Lykke Kunna Irma Iduna Helga Gudrun Gisela Gerda Gelsa Freya Frauke Ferun Elke Eila Dagmar Ariald Dagwin Eckwin Edmund Eike Erkmar Erwin Falko Frowin Gerbod Gunnar Halvor Irvin Knut Leif Lando Odin Oswin Ragin Rainer Rango Sarolf Thor Ulf Wolf Sarah Emma Laura Chloe Marie L\u00e9a Emily Keyla Manon Julie Julia Alice Kim Lisa Kora Clara Sara Lucie Anais Grace Eva Zoe Lee Katie Jade Ines Lily Amy Megan Lucy Elisa Kate Mary Elise Nina C\u00e9lia Ma\u00ebva Kayla Elysa Lena Amber Kelly Jenny Lola Mia Abby Ella Diana Fanny Ellie Ana Cindy Elena Rose Erin Molly Park Jane Lina Bella Lou Alex Irene Elsa Leah Holly Maya Linda Carla Anne Paige Annie Jenna Karen Lydia Haley Hanna Wendy Luna Naomi Sonia Fiona Helen Ambre Jess Angel Leila Lara Tina Ann Laur\u00e9 Chen Daisy Paula Iris Ruby Minji Marta Sam Erika Nora Nadia Eve Erica Ava Wang Choi Yujin Jin Yang Hina Beth Lucia Faith Jiwon Ad\u00e8le Alexa Min Flora Nancy Lili Lexi Cloe Hana Lin Kenza Lise Li Mina Angie Lotte Sandy Vicky May Jamie Joy Jeong Tara Sally Merve Diane Maddy Lilly Alix Zhang Gabby Abbie Liz Ellen Rita Olga Dana Elif Maud Sunny Joyce Liu Jieun Rosie Becky Jung Ilona Kylie Ruth Kat Han Nikki Kang Tania Dasha Cathy Aline Jo Ally Lilou Sujin Tanya Amina Yu Aya Katy Becca Rosa Paola Anita Sumin Betty Subin Tessa Heidi Tori Lila Imane Yoon Allie Farah Ciara Gina Yejin Song Susan Niamh April Izzy Aude Liza Salma Ivy Elina Liya Sue Gwen Maia Mimi Mandy Nana Sanne Hope Ariel Eliza Daria Yuna Evie Aimee Avery Agn\u00e8s Stacy Jisu Madi Riley Carly Lia Irina".split(" ");
            var n = "K ; Y;E ; Z; z; s;S ".split(";");
            var CountryBotTitles = "Kingdom of ; Kingdom;Empire of ; Empire; Dynasty; Sultanate;Sultanate of ".split(";");
            for (x = CountryBotNames.length - 1; 0 <= x; x--)
                for (t = n.length - 1; 0 <= t; t--)
                    CountryBotNames[x] = CountryBotNames[x].replace(n[t], CountryBotTitles[t])
        }
            ;
        this.j5 = function () {
            if (9 === gameMode) {
                var x;
                var t = cW.random();
                var n = PersonBotNames.length;
                var l = ci + dp.dq;
                for (x = l - 1; x >= ci; x--)
                    mpPlayerArray[x] = "[Bot] " + PersonBotNames[(x + t) % n];
                for (x = l; x < b0; x++)
                    mpPlayerArray[x] = "[Zombie] " + PersonBotNames[(x + t) % n]
            } else if (isSingleplayer)
                for (t = cW.random(),
                    x = ci; x < b0; x++)
                    mpPlayerArray[x] = CountryBotNames[(x + t) % b0];
            else
                for (t = PersonBotNames.length,
                    n = cW.random(),
                    x = ci; x < b0; x++)
                    mpPlayerArray[x] = "[Bot] " + PersonBotNames[(x + n) % t]
        }
            ;
        this.j6 = function () {
            var x;
            if (jW.zs && !isSingleplayer) {
                zt = Array(ci);
                var t = ci;
                var n = PersonBotNames.length;
                var l = cW.zu();
                for (x = 0; x < t; x++)
                    zt[x] = mpPlayerArray[x],
                        mpPlayerArray[x] = PersonBotNames[(x + l) % n];
                mpPlayerArray[localPlayerID] = zt[localPlayerID]
            }
        }
    }
    var mpPlayerArray;
    var zt;
    var f1;
    var cs;
    var cv;
    var cr;
    var cu;
    var landSizeArray;
    var hD;
    var TroopBalance;
    var aw;
    var bE;
    var bF;
    var bI;
    var kn;
    function j0(g) {
        zt = mpPlayerArray = Array(b0);
        f1 = new Uint8Array(b0);
        cs = new Uint16Array(b0);
        cv = new Uint16Array(b0);
        cr = new Uint16Array(b0);
        cu = new Uint16Array(b0);
        landSizeArray = new Uint32Array(b0);
        hD = new Uint32Array(b0);
        TroopBalance = new Uint32Array(b0);
        aw = Array(b0);
        bE = Array(b0);
        bF = Array(b0);
        bI = Array(b0);
        kn = new Uint8Array(b0);
        for (var k = g.length - 1; 0 <= k; k--)
            mpPlayerArray[k] = g[k].mP,
                kn[k] = g[k].wd
    }
    function kO() {
        this.mq = 0;
        this.hm = null;
        this.bh = function () {
            this.mq = 0;
            this.hm = []
        }
            ;
        this.yD = function (g) {
            this.hm.push(g);
            iZ++;
            kn[g] = 2;
            ax.q7[g] = (ax.q7[g] + 2) % 4
        }
            ;
        this.fS = function (g) {
            var k;
            if (2 !== kn[g]) {
                var x = this.hm;
                for (k = x.length - 1; 0 <= k; k--)
                    if (x[k] === g) {
                        x.splice(k, 1);
                        break
                    }
            }
        }
            ;
        this.d6 = function () {
            isSingleplayer || (80 === this.mq && this.zy(),
                this.mq = (this.mq + 1) % 100)
        }
            ;
        this.zy = function () {
            var g;
            var k = this.hm;
            for (g = k.length - 1; 0 <= g; g--) {
                var x = k[g];
                if (aW.d4(x)) {
                    var t = ak(TroopBalance[x], 2);
                    60 > t || (0 === bE[x].length ? !d5.d6(x, 2) && d1 && d9(x, t, 0, 0) : d1 ? dK(x, t) : dS(x, t))
                }
            }
        }
    }
    function LowLevelWebsocket() {
        function g(n) {
            return t[n].a05 && k[n].a0A()
        }
        this.ud = 5;
        var k;
        var x;
        var t;
        this.mS = this.jE = 0;
        this.bh = function () {
            var n;
            x = Array(this.ud);
            x[0] = "territorial.io";
            x[this.ud - 1] = "vampirr.io";
            var l = cW.zu(0);
            cW.iz(0);
            for (n = 1; n < this.ud - 1; n++)
                x[n] = m.iE() + ".com";
            cW.iz(l);
            k = Array(this.ud);
            t = Array(this.ud);
            for (n = this.ud - 1; 0 <= n; n--)
                t[n] = {
                    a05: false,
                    gL: 0,
                    a06: false
                }
        }
            ;
        this.d6 = function () {
            for (var n = this.ud - 1; 0 <= n; n--)
                this.uZ(n) && bw.gL > t[n].gL + 15E3 && iU.a07(n, t[n].a06)
        }
            ;
        this.qu = function (n, l) {
            if (!t[n].a05)
                return this.a09(n, l),
                    false;
            if (k[n].a0A())
                return k[n].a0B(l),
                    k[n].uZ();
            k[n].ko();
            this.a09(n, l);
            return false
        }
            ;
        this.a09 = function (n, l) {
            t[n].a05 = true;
            t[n].gL = bw.gL;
            t[n].a06 = false;
            k[n] = new a0D;
            k[n].bh(n, l, x[n])
        }
            ;
        this.a0B = function (n, l) {
            g(n) && k[n].a0B(l)
        }
            ;
        this.a0E = function (n, l) {
            0 === l ? jI.qw() : 3 > l ? iU.get_top(n, l - 1) : 3 === l ? iU.wa(n) : 4 === l ? jK.qw(n) : 5 === l ? n === this.jE && iU.a0F() : 6 === l ? iU.a0G(n) : 7 === l && iU.wz(n)
        }
            ;
        this.uZ = function (n) {
            return t[n].a05 && k[n].uZ()
        }
            ;
        this.send = function (n, l) {
            t[n].gL = bw.gL;
            t[n].a06 = false;
            k[n].send(l)
        }
            ;
        this.oZ = function (n) {
            t[n].a06 = true
        }
            ;
        this.close = function (n, l) {
            g(n) && k[n].close(l)
        }
            ;
        this.a0I = function (n, l) {
            jM.uk(l);
            g(n) && k[n].close(l)
        }
            ;
        this.vB = function (n) {
            for (var l = this.ud - 1; 0 <= l; l--)
                this.close(l, n)
        }
            ;
        this.a0J = function (n, l) {
            for (var z = this.ud - 1; 0 <= z; z--)
                z !== n && this.close(z, l)
        }
            ;
        this.a0K = function (n, l) {
            k[n].ko();
            jM.bh(n, l.code)
        }
    }
    var dQ;
    var dP;
    function j7() {
        var g;
        dP = 0;
        for (g = b0 - 1; 0 <= g; g--)
            0 !== f1[g] && dP++;
        dQ = new Uint16Array(dP);
        var k = 0;
        for (g = 0; g < b0; g++)
            0 !== f1[g] && (dQ[k++] = g)
    }
    function e8() {
        a0L();
        yF()
    }
    function yF() {
        for (var g = dP - 1; 0 <= g; g--)
            0 === f1[dQ[g]] && a0M(g)
    }
    function a0M(g) {
        for (dP--; g < dP; g++)
            dQ[g] = dQ[g + 1]
    }
    function a0L() {
        for (k = dP - 1, void 0; 0 <= k; k--) {
            var g;
            var k;
            landSizeArray[dQ[k]] <= ak(hD[dQ[k]], 4) ? 1E3 >= landSizeArray[dQ[k]] && (2 !== f1[dQ[k]] || 0 === landSizeArray[dQ[k]]) && yE(dQ[k]) : landSizeArray[dQ[k]] >= hD[dQ[k]] ? hD[dQ[k]] = landSizeArray[dQ[k]] : (g = ak(hD[dQ[k]] - landSizeArray[dQ[k]], 1E3),
                hD[dQ[k]] -= 1 > g ? 1 : g)
        }
    }
    function iW() {
        var g;
        var k = 0;
        for (g = dP - 1; 0 <= g; g--)
            k += TroopBalance[dQ[g]];
        return k % 4096
    }
    var mainCanvas;
    var c9;
    var patchVersion;
    var version;
    var r;
    var s;
    var oX;
    var bi;
    var fx;
    var c3;
    var currentOpenURL;
    var b;
    var c;
    var htmlLoader;
    var d;
    var b_IsUISmall;
    var a0Q = false;
    var a0R;
    var isURLTerritorialIo;
    var i;
    var gg;
    var s0;
    var gq;
    var a5;
    var as;
    var hZ;
    var ur;
    var bw;
    var dN;
    var eF;
    var c5;
    var fU;
    var ux;
    var ml;
    var te;
    var a0T;
    var a0U;
    var a0V = 0;
    var a0W = "";
    function a0X() {
        a0U = 2;
        version = 3427;
        patchVersion = "1.81.2   14 October 2022";
        jY();
        cz();
        d = (htmlLoader = "undefined" !== typeof Android ? Android : null) ? htmlLoader.getVersion() : 0;
        12 <= d && htmlLoader.prepareAd("6685097465");
        b = false;
        window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.iosCommandA && (b = true,
            window.webkit.messageHandlers.iosCommandA.postMessage("prepare ad 5907904081"),
            c = "undefined" !== typeof mwIOSdataX ? mwIOSdataX : {
                username: "iOS User " + Math.floor(1E3 * Math.random()),
                id: Math.floor(1 + Math.random() * (Math.pow(2, 30) - 1)),
                zoom: true,
                sound: true,
                emojis: "0",
                colors: "0",
                password: "0",
                freeSpawn: false,
                unlimitedTime: false,
                alliances: false
            });
        a0T = (new Date).getTime() % 1024;
        a0R = a0Y();
        jT.bh();
        f.bh();
        h();
        p();
        document.addEventListener ? document.addEventListener("contextmenu", function (g) {
            g.preventDefault()
        }, false) : document.attachEvent("oncontextmenu", function () {
            window.event.returnValue = false
        });
        CheckIfHostnameValid();
        document.addEventListener("keyup", a0a);
        document.addEventListener("keydown", a0b);
        document.addEventListener("visibilitychange", a0c);
        window.addEventListener("error", a0d, true);
        s0 = 20;
        wL = new a0e;
        gg = new a0f;
        gq = new t8;
        a5 = new mx;
        as = new a0g;
        hZ = new a0h;
        ur = new mf;
        bw = new a0i;
        bw.jF();
        bw.bh();
        dN = new a0j;
        eF = new a0k;
        te = new be;
        te.bh();
        c5 = new tE;
        c5.bh();
        fU = new iG;
        ux = new ty;
        ml = new tn;
        oJ();
        cW.bh();
        aq.yh();
        jP.bh();
        j2.bh();
        jL.bh();
        jW.bh();
        low_level_websocket.bh();
        jI.bh();
        j4.bh();
        oM();
        bo.bh();
        bw.bx = true;
        setTimeout(function () {
            wK(2, 14071)
        }, 0)
    }
    function a0Y() {
        try {
            return window.self !== window.top
        } catch (g) {
            return true
        }
    }
    function a0d(g) {
        a0Q || (a0Q = true,
            g.message ? (a0V = g.lineno,
                a0W = g.message,
                low_level_websocket.qu(0, 6) && iU.a0G(0),
                g = "[A_ERROR " + a0V + "][" + a0W + "]",
                a0l(g)) : (g = "[B_ERROR " + g.type + "][" + (g.srcElement || g.target) + "]",
                    console.log(g)))
    }
    function a0l(g) {
        htmlLoader ? htmlLoader.showToast(g) : alert(g)
    }
    function a0b(g) {
        "ArrowLeft" === g.key ? gV.vH(3) : "ArrowUp" === g.key ? gV.vH(0) : "ArrowRight" === g.key ? gV.vH(1) : "ArrowDown" === g.key ? gV.vH(2) : "a" === g.key ? eD.qF(.96875) : "d" === g.key ? eD.qF(32 / 31) : "s" === g.key ? eD.qF(.875) : "w" === g.key ? eD.qF(8 / 7) : "1" === g.key ? eD.qF(5 / 6) : "2" === g.key && eD.qF(1.2)
    }
    function a0c() {
        "hidden" === document.visibilityState ? bw.a0m() : bw.ws()
    }
    function a0a(g) {
        400 > bw.gL || (8 !== jL.rG() && jL.tx(g) ? bw.bx = true : "Escape" === g.key ? 1 <= fK ? gQ ? (gQ = !gQ,
            bw.bx = true) : hZ.kl ? hZ.ko() : fZ.lY() : 7 === jL.rG() ? (jU.sx(),
                low_level_websocket.vB(3240),
                jG.bh(),
                bw.bx = true) : 2 === jL.rG() ? dk.vC() : 3 === jL.rG() && jM.vC(0, 0) : "ArrowLeft" === g.key ? gV.a0n(3) : "ArrowUp" === g.key ? gV.a0n(0) : "ArrowRight" === g.key ? gV.a0n(1) : "ArrowDown" === g.key ? gV.a0n(2) : "h" === g.key && 1 <= fK && (gQ = !gQ,
                    bw.bx = true))
    }
    function CheckIfHostnameValid() {
        currentOpenURL = window.location.hostname;
        isURLTerritorialIo = 0 <= currentOpenURL.toLowerCase().indexOf("territorial.io") // a0S
    }
    function k1() {
        var g;
        this.bh = function () {
            g = [];
            9 === gameMode && this.a0p()
        }
            ;
        this.a0p = function () {
            var k = [8, 51, 68, 88, 138, 178, 313];
            var x = [35, 330];
            this.dq = 0;
            this.dr = [0, 0, 0, 0, 0, 0];
            ci <= k[0] ? (this.dq = x[0] - ci,
                this.dr[1] = x[1] - ak(x[1] * ci, k[0]),
                this.dr[0] = 512 - this.dr[1] - x[0]) : ci <= k[1] ? (this.dq = x[0] - k[0] - ak((x[0] - k[0]) * (ci - k[0]), k[1] - k[0]),
                    this.dr[0] = 512 - this.dq - ci) : ci <= k[2] ? (this.dr[0] = 512 - k[1] - ak((512 - k[1]) * (ci - k[1]), k[2] - k[1]),
                        this.dr[1] = 512 - ci - this.dr[0]) : ci <= k[3] ? (this.dr[1] = 512 - k[2] - ak((512 - k[2]) * (ci - k[2]), k[3] - k[2]),
                            this.dr[2] = 512 - ci - this.dr[1]) : ci <= k[4] ? (this.dr[2] = 512 - k[3] - ak((512 - k[3]) * (ci - k[3]), k[4] - k[3]),
                                this.dr[3] = 512 - ci - this.dr[2]) : ci <= k[5] ? (this.dr[3] = 512 - k[4] - ak((512 - k[4]) * (ci - k[4]), k[5] - k[4]),
                                    this.dr[4] = 512 - ci - this.dr[3]) : ci <= k[6] ? (this.dr[4] = 512 - k[5] - ak((512 - k[5]) * (ci - k[5]), k[6] - k[5]),
                                        this.dr[5] = 512 - ci - this.dr[4]) : this.dr[5] = 512 - ci;
            x = this.dq;
            for (k = 0; 6 > k; k++)
                x += this.dr[k];
            if (x > dg) {
                for (k = this.dq = 0; 5 > k; k++)
                    this.dr[k] = 0;
                this.dr[5] = dg
            }
        }
            ;
        this.yT = function (k) {
            g.push({
                player: k,
                mK: 14 + cW.cX(20)
            })
        }
            ;
        this.d6 = function () {
            if (9 === gameMode) {
                var k;
                for (k = g.length - 1; 0 <= k; k--)
                    0 >= --g[k].mK && (dx.mU(g[k].player, 0, 46),
                        g.splice(k))
            }
        }
    }
    var aR;
    var aS;
    var hW;
    var ou;
    var wI;
    var wJ;
    var mc;
    var w8;
    var uu;
    var a0u = 14;
    var wL;
    function wK(g, k) {
        g %= a0u;
        if (g !== mc || a0x(mc) && k !== w8) {
            var x = performance.now();
            uu = false;
            wL.wM();
            cW.iz(g);
            mc = g;
            w8 = k;
            a0x(g) && (jP.br(g).a04 = k);
            if (a0y(mc))
                a0z(x);
            else {
                var t = jP.br(mc);
                aR = t.bt;
                aS = t.co;
                cW.iz(t.a04);
                jQ.j5([aR, aS, t.g7, t.g4]);
                a10();
                j2.a11();
                jQ.a12();
                a13(x)
            }
        }
    }
    function a13(g) {
        var k = performance.now();
        s0 = Math.floor(29 - (k - g) / (33 * jP.br(mc).per));
        s0 = 0 > s0 ? 0 : 20 < s0 ? 20 : s0
    }
    function a15() {
        return a0u - 4
    }
    function a0y(g) {
        return g >= a15()
    }
    function a0x(g) {
        return !(1 === g || g >= a15())
    }
    function a16(g) {
        return 3 === g || 7 === g || 9 === g
    }
    function a17(g) {
        return 2 === g || 7 === g || 9 === g
    }
    function a0e() {
        function g() {
            wL.d6()
        }
        function k(t, n) {
            0 < n && (wJ[t] += n,
                wJ[t + 1] += n,
                wJ[t + 2] += n)
        }
        function x(t) {
            return wJ[t + 2] > wJ[t] && wJ[t + 2] > wJ[t + 1]
        }
        this.qp = -1;
        this.a18 = this.aA = 0;
        this.a19 = 8;
        this.a1A = 32;
        this.a1B = 8;
        this.a1C = 32;
        this.a1D = [0, 0];
        this.q7 = [0, 0, 0, 0];
        this.a1E = null;
        this.a1F = true;
        this.wM = function () {
            -1 !== this.qp && clearTimeout(this.qp);
            this.qp = -1;
            this.a1E = null;
            jQ.a12()
        }
            ;
        this.bh = function () {
            7 !== jL.rG() && (this.a1F = true,
                this.aA = 0,
                this.a18 = 1,
                this.a1D = [jP.br(mc).a1G[0], jP.br(mc).a1H[0]],
                this.q7 = [jP.br(mc).a1I[3], jP.br(mc).a1I[4], jP.br(mc).a1I[5], jP.br(mc).a1I[6]],
                this.a19 = jP.br(mc).a1I[7],
                this.a1A = jP.br(mc).a1I[8],
                this.a1B = jP.br(mc).a1I[9],
                this.a1C = jP.br(mc).a1I[10],
                this.a1F ? this.qp = setTimeout(g, 0) : this.d6())
        }
            ;
        this.d6 = function () {
            if (0 === this.aA) {
                var t = cW.zu();
                cW.iz(jP.br(mc).a1I[2]);
                jQ.j5([aR, aS, jP.br(mc).a1I[0], jP.br(mc).a1I[1]]);
                cW.iz(t);
                this.a1E = jQ.a1K();
                this.aA++;
                if (this.a1F)
                    return this.qp = setTimeout(g, 0),
                        false
            }
            t = this.a1F ? 8 === jL.rG() ? 20 : 40 : 1E6;
            t = aS - this.a18 - 1 < t ? aS - this.a18 - 1 : t;
            t = this.a18 + t;
            for (z = this.a18, void 0; z < t; z++) {
                var n;
                var l;
                var z;
                for (var y = 1; y < aR - 1; y++)
                    if (l = y + z * aR,
                        n = 4 * l,
                        x(n))
                        this.a1M(n, l, 1);
                    else {
                        this.a1M(n, l, 0);
                        l = y;
                        var A = z;
                        (1 < l && x(n - 4) || l < aR - 2 && x(n + 4) || 1 < A && x(n - 4 * aR) || A < aS - 2 && x(n + 4 * aR)) && this.a1N(y, z)
                    }
            }
            z = this.a18 - this.a1A;
            z = 1 > z ? 1 : z;
            ou.putImageData(wI, 0, 0, 1, z, aR - 2, t - z);
            8 !== jL.rG() && (bw.bx = true);
            this.a18 = t;
            if (this.a18 >= aS - 1)
                return this.wM(),
                    false;
            this.a1F && (this.qp = setTimeout(g, 8 === jL.rG() ? 100 : 0));
            return true
        }
            ;
        this.a1M = function (t, n, l) {
            k(t, Math.floor(this.a1D[l] + this.q7[l] * this.a1E[n] / 1E4) - wJ[t])
        }
            ;
        this.a1R = function (t, n, l, z, y) {
            k(t, Math.floor(this.a1D[z] + (1 - n / l) * y) - wJ[t])
        }
            ;
        this.a1N = function (t, n) {
            var l = t - this.a1A;
            var z = n - this.a1A;
            var y = t + this.a1A;
            var A = n + this.a1A;
            l = 1 > l ? 1 : l;
            y = y > aR - 2 ? aR - 2 : y;
            A = A > aS - 2 ? aS - 2 : A;
            for (var C = 1 > z ? 1 : z; C <= A; C++)
                for (var B = l; B <= y; B++)
                    if (z = 4 * (B + C * aR),
                        x(z)) {
                        var F = this.a19 + (this.a1A - this.a19) * this.a1E[B + aR * C] / 1E4;
                        if (!(Math.abs(t - B) > F || Math.abs(n - C) > F)) {
                            var E = Math.sqrt((t - B) * (t - B) + (n - C) * (n - C));
                            E >= F || this.a1R(z, E, F, 1, this.q7[3])
                        }
                    } else
                        F = this.a1B + (this.a1C - this.a1B) * this.a1E[B + aR * C] / 1E4,
                            Math.abs(t - B) > F || Math.abs(n - C) > F || (E = Math.sqrt((t - B) * (t - B) + (n - C) * (n - C)),
                                E >= F || this.a1R(z, E, F, 0, this.q7[2]))
        }
    }
    function a10() {
        2 === mc ? a1T([256], [256], [0, 205, 256], [500, 500, 0], [0, 0, 0]) : 7 === mc ? a1T([512], [512], [0, 380, 512], [500, 500, 0], [0, 0, 0]) : 8 === mc ? a1T([410], [410], [0, 120, 210], [0, 80, 640], [0, 0, 0]) : 9 === mc && a1T([512], [512], [0, 70, 180, 200, 290, 420, 512], [500, 500, 0, 0, 500, 500, 0], [0, 0, 0, 0, 0, 0, 0])
    }
    function a1T(g, k, x, t, n) {
        var l;
        var z;
        var y;
        var A = g.length - 1;
        var C = aR + aS;
        C *= C;
        var B = x.length;
        for (l = B - 1; 0 <= l; l--)
            x[l] *= x[l];
        var F = Array(B);
        var E = Array(B);
        var J = Array(B);
        var G = jQ.a1K();
        if (void 0 === n)
            for (n = Array(B),
                l = B - 1; 0 <= l; l--)
                n[l] = 0;
        for (l = 1; l < B; l++)
            F[l] = x[l] - x[l - 1],
                E[l] = t[l] - t[l - 1],
                J[l] = n[l] - n[l - 1];
        for (z = aR - 1; 0 <= z; z--)
            for (y = aS - 1; 0 <= y; y--) {
                var H = C;
                for (l = A; 0 <= l; l--) {
                    var D = (z - g[l]) * (z - g[l]) + (y - k[l]) * (y - k[l]);
                    H = D < H ? D : H
                }
                D = t[B - 1];
                var K = n[B - 1];
                for (l = 1; l < B; l++)
                    if (H < x[l]) {
                        D = t[l - 1] + xg((H - x[l - 1]) * E[l], F[l]);
                        K = n[l - 1] + xg((H - x[l - 1]) * J[l], F[l]);
                        break
                    }
                a1h(aR * y + z, D, K, G)
            }
    }
    function a1h(g, k, x, t) {
        500 > k ? t[g] = ak(t[g] * k * 2, 1E3) : 500 < k && (t[g] += ak(2 * (1E4 - t[g]) * (k - 500), 1E3));
        t[g] += ak(x * (10 * k - t[g]), 1E3)
    }
    function k2() {
        var g;
        this.bh = function () {
            g = Array(a15());
            g[0] = {
                bt: [0, 5E3, 8E3, 1E4],
                ex: [220, 250, 255, 220],
                sn: [190, 220, 0, 0],
                ce: [170, 200, 0, 0]
            };
            g[1] = {
                bt: [0, 4E3, 5E3, 6E3, 1E4],
                ex: [25, 0, 100, 0, 25],
                sn: [25, 0, 0, 0, 25],
                ce: [25, 0, 0, 0, 25]
            };
            g[2] = {
                bt: [0, 500, 2500, 2999, 3E3, 3200, 4200, 5200, 5700, 8800, 1E4],
                ex: [15, 15, 70, 40, 40, 40, 252, 40, 40, 20, 30],
                sn: [80, 80, 190, 90, 40, 40, 248, 180, 180, 90, 140],
                ce: [120, 120, 220, 110, 40, 40, 217, 10, 10, 10, 10]
            };
            g[3] = {
                bt: [0, 400, 1800, 2E3, 3200, 4500, 6E3, 7700, 8500, 9500, 1E4],
                ex: [10, 10, 20, 10, 30, 10, 16, 40, 55, 230, 230],
                sn: [10, 10, 40, 50, 100, 40, 80, 120, 55, 230, 230],
                ce: [80, 80, 200, 10, 60, 10, 16, 40, 55, 230, 230]
            };
            g[4] = {
                bt: [0, 300, 1400, 1700, 3E3, 4E3, 1E4],
                ex: [10, 10, 20, 10, 10, 170, 212],
                sn: [20, 20, 60, 100, 100, 110, 170],
                ce: [70, 70, 160, 30, 30, 60, 120]
            };
            g[5] = {
                bt: [0, 1E3, 3E3, 3500, 4E3, 4500, 7E3, 7500, 8E3, 1E4],
                ex: [10, 10, 20, 10, 5, 10, 20, 5, 20, 25],
                sn: [30, 30, 50, 100, 30, 100, 140, 60, 140, 200],
                ce: [80, 80, 200, 10, 5, 10, 20, 5, 20, 25]
            };
            g[6] = {
                bt: [0, 700, 2650, 3200, 5E3, 8E3, 1E4],
                ex: [10, 10, 60, 255, 255, 200, 200],
                sn: [10, 10, 60, 255, 255, 200, 200],
                ce: [80, 80, 255, 255, 255, 200, 200]
            };
            g[7] = {
                bt: [0, 400, 1999, 2E3, 3200, 4E3, 4700, 5500, 6500, 9500, 1E4],
                ex: [10, 10, 80, 255, 255, 55, 6, 70, 20, 155, 255],
                sn: [10, 10, 90, 245, 245, 170, 80, 190, 20, 155, 255],
                ce: [80, 80, 255, 235, 235, 55, 26, 10, 20, 155, 255]
            };
            g[8] = {
                bt: [0, 700, 1300, 1900, 1901, 2500, 3400, 6E3, 1E4],
                ex: [25, 30, 30, 30, 255, 255, 30, 40, 20],
                sn: [25, 30, 150, 150, 245, 245, 80, 150, 70],
                ce: [60, 170, 170, 170, 235, 235, 30, 40, 40]
            };
            g[9] = {
                bt: [0, 400, 2009, 2010, 3300, 4E3, 5200, 6500, 8E3, 9500, 1E4],
                ex: [10, 10, 80, 255, 255, 55, 23, 36, 20, 155, 255],
                sn: [10, 10, 90, 245, 245, 170, 60, 160, 20, 155, 255],
                ce: [80, 80, 255, 235, 235, 55, 9, 72, 20, 155, 255]
            }
        }
            ;
        this.a11 = function () {
            hW = document.createElement("canvas");
            hW.width = aR;
            hW.height = aS;
            ou = hW.getContext("2d", {
                alpha: false
            });
            var k = ou.getImageData(0, 0, aR, aS);
            wJ = k.data;
            var x = g[mc].bt;
            var t = g[mc].ex;
            var n = g[mc].sn;
            var l = g[mc].ce;
            var z;
            var y;
            var A = jQ.a1K();
            var C = x.length - 2;
            var B = Array(C + 1);
            var F = Array(C + 1);
            var E = Array(C + 1);
            var J = Array(C + 1);
            for (y = C; 0 <= y; y--)
                B[y] = x[y + 1] - x[y],
                    F[y] = t[y + 1] - t[y],
                    E[y] = n[y + 1] - n[y],
                    J[y] = l[y + 1] - l[y];
            for (z = aR * aS - 1; 0 <= z; z--)
                for (y = C; 0 <= y; y--)
                    if (A[z] >= x[y]) {
                        var G = A[z] - x[y];
                        wJ[4 * z] = t[y] + xg(F[y] * G, B[y]);
                        wJ[4 * z + 1] = n[y] + xg(E[y] * G, B[y]);
                        wJ[4 * z + 2] = l[y] + xg(J[y] * G, B[y]);
                        wJ[4 * z + 3] = 255;
                        break
                    }
            ou.putImageData(k, 0, 0);
            jP.a1l() && bo.bp() && jP.a1l() && (x = bo.ki("arena"),
                ou.save(),
                ou.globalAlpha = 1 === mc ? .1 : 1,
                ou.imageSmoothingEnabled = true,
                k = 2.8,
                ou.scale(k, k),
                ou.drawImage(x, Math.floor((aR / k - x.width) / 2), Math.floor(.5 * aS / k - x.height / 2)),
                ou.restore(),
                x = bo.ki("territorial.io"),
                ou.save(),
                ou.globalAlpha = 1 === mc ? .1 : 1,
                ou.imageSmoothingEnabled = true,
                k = .87,
                ou.scale(k, k),
                ou.drawImage(x, Math.floor(.745 * (aR / k - x.width)), Math.floor(.422 * aS / k - x.height / 2)),
                ou.restore());
            uu = true;
            bw.bx = true
        }
            ;
        this.j3 = function () {
            var k;
            il = 0;
            for (k = aR - 1; 0 <= k; k--)
                tD[4 * k + 2] = 3,
                    tD[aS * aR * 4 - 4 * k - 2] = 3;
            for (k = aS - 1; 0 <= k; k--)
                tD[k * aR * 4 + 2] = 3,
                    tD[k * aR * 4 + 4 * aR - 2] = 3;
            for (k = aR * aS - 1; 0 <= k; k--) {
                var x = 4 * k;
                3 !== tD[x + 2] && (wJ[x + 2] > wJ[x + 1] && wJ[x + 2] > wJ[x] ? tD[x + 2] = 2 : (tD[x + 2] = 1,
                    il++))
            }
            if (a16(mc))
                for (x = aR * aS - 1; 0 <= x; x--)
                    k = 4 * x,
                        wJ[k] === wJ[k + 1] && wJ[k] === wJ[k + 2] && 3 !== tD[k + 2] && (tD[k + 2] = 3,
                            il--)
        }
    }
    function a0z(g) {
        var k;
        mc === a15() ? k = "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86fRU8Av6gRK76AeCE66hQ9IAw6iQ7IUu6kQ6IUu6lQy87EQmQofAK6Ak6nQUdA7F9D56nQAKAUQAKBA9F8D56nP9A9BKIBe57DaqQAGBeIBoSAKBAKjDGsQAFB6AySA7BUiDQrSKFCKCA6AyEDUcAKD6rV6AyFAoBCUc6yV6AyOB6C865WkBAEAKZ655X7Aod66M6a69Z967W5967W5967W5967W5867g5867g5867g5767q56675Z6675Z5676Z5676Z5676Z5676Zu77U6AKu678UyFEk78UyID9679UyID768L9yBA8A8DABAu8qEA8C769WEA8Cu95UoICG99T7AKGA9B9699UoKB77AUoLB56dAe69UyMBucAe69QUCBUCC7B6BGbAe7B58BABAeEAyYCAI6ZAe7B57B6AeHCUXAabAe7L57B7AKJCQ5UEHB57C7CQ5UEHB56C8CQ5eDHB57AUBCoV65eEG9QAZB965oEG9QAZB965yDG9QKZAUBAKCBa5yDG9QKZAKGAKEA665yDG9QUmAk5yDHB56AUED8AkxAUEAe7B565oAeCALyA7HV575oA8AyBOKGHf585qA8AKEN9Ay7p585sBVmAy7p595sBVkAo76P95uBLjAo76P9AKCAUB5rA8N6AK78Q55sA6V6Q65tAKQAMCQ756AGT8RF58AKBAz96RP6AFTz7P6oBTz7b59Rl58Rv57R675z7975V7975V7875f8HzSlwSbxSbxSbxSbxSlwSvvS56ZApRSuYA6L7S66WA6L7S656yBFeJL7S656yBFeIL8S656yDE8A9MB8556yEEoNMB8t6yFEAPMV8t6KJD7B8MV8t56BokB6Mz8t5UQD7B6M6S65yAyIAUlB7M6S65yAyuB7M7S75xAovB7M7S65yAeuCLZS75xAUuB6AoBM6S75xAKvB6NL87596BzhS759oPNz8959UPNz89589B8Nz9FsAKrB9Np9PqAUpCLiTV6oClyCD9C9M8Tf6oCloCD8DVaTz6UCloCDomMp9p6oCleBDUqMf9p6yClUBDUrMV9p67AN97AKFEABAfWTj66AKFD8M8TACAZ6yDAUnM8TACAZ66ELeT556ypNB9j67ELeTZ67EVeTP6ytNB9F67EffTF66EpfTZMAyDAUpEzfTZHByoE6NL9jDBKFAUpEfhTjCA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6Ao8i58m7Ae8Y59m7AK8O6O67us67us65u6ui68r6AKau8q6AyEAUau9qUUCE69p9B8AeFB7u8qASAyEB6u6qUSA7AUQu6qyPC5u6qyQC5u5q8BoZuscByZuifBAcA8A5s9rKHDKIA5s8r6AUmAUCtO78ti78AeCs9v7AUDs9wiwwsvwiwwsuw6s5w5s6wsuw6s5w7AyBr8xslx5r5x9rY99rZCq8ysay6q6y6qtJqPMBeGoFgP6BWe5lPKQW65pO7B8W55rOoXV95zN7C7V655VbEMK55pZEWI557MKtU8557MKuUj66LowP6AeFA7DF69LKyPySCZ8VDFL5oWB858pBFVyC8B5588J7FpqAeEC9Bt89Jy68M6EAJ59e9o7BYEUD598Je7pU6sJU76AoOKQsJU96J96sJU96J66vJU96JkyJK97Ja5U89J9B6AK7k5o88J9BKHAeFA9AK5k5y88KAKC6AeDEu58I7KKBEAs658I6OeGAoh659Iz5yf66K86PeFA7B666y8z68Bk6y8z7KH668Iz7eF669IwwI58vIwyISzIS6K7S66G587U59X9AQhF8X8AeqAZ9U5qlAopAj9e5gkAypAj96E9X7A6EAD6BEgmA7D9AkBEWoA6D8AuED8YKHD7AkID5YKHD7AkJDqrA6D6AkKDWsA6D6AkLDCtA7DyD6MC8Y8A6DoD6OC5ZAHDUE6NCqzA8DAE6QCM5eJC8AkTB8ZoKC7AkUB6ZyKC6AuYA9Z8BAZA56ZA7Z9BAaA589KJC6A589UIC6Aw9eJCoE6bAM67A8CoE6bAW67A7CoE6bAg66A9CUF897A8CKE899A9B9AeDAUGAS9AJB7A9AKH889A9B6B8888BKOCI87BKOCI88BKMCI89BKKCS9KLA7Cc9ULA6Cw9Un89Uo89Kq889Em88E5887E688yu886E5887E6887Ew87E5887E5887Ew88E5886E6886E788ov88ow88ov88yv88ow88ew88ey88K5m8Az88Az88AzH" : mc === a15() + 1 ? k = "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Fs69FKxJ6556KX78Fs7AxFATAK75558KX78Fi7KuFeSAU7t59KN8AzvKuFyQAU7t6BBmAxvetF7BoDHj6U99mUvvetF8BeEHZ6e98metvUvF9BUEHZ6e98monv7E7GKJAy7Z6o7UBC5mocAKGAUCv7C7IKHA6Hj6o7UCCr86B8BUCwKZIoGA6HZ66HUDCX88B6x7Ce8yFA6AeBG8567HUHB8nAHy6CA8yFA7AUCG8L6AOyHeIB5nUEy9B6I8AeJAUCG7L7AOyHyJBJIBe9ADA8AUDG6L8AOyH79aBK9UCA7AUEGzTAYxH99eAVBAyDG6L9AsvIJ99AAhAKHGpUA5s7IJ99AAoGpVA6sy8T99AAmAoCF9MUGsy8T99AAfAoJF8MeGsy8T99AAdA8A7F7MoFs6Id99AAcAyKF7MyEs6Id99AArF6M6AsuIx99AApFzdAYuI6999AAnFzcAYvI6999AAnFpcAeDAOrI6999AAmFpdAUEAOrI6999AAmFpdAoBAYrI6999AAlFpeAoBAYpI8999AAlFpeA6sU87999AAmFfeA7sU86999AAoFBgA7BACrK85999AAoE9NUJA7AsgIx99AAoEBpBKDA5re8x99AAqCACBpqB9ro8n99AAtB7AeMOeTr6IT99AAuAKDBKDAUBA9OoTr7H9999AA5yGA8A8OoUr8H5999AA59AoKAzuB7sU69999AA78AVwB7se58999AA9ABOyUso57999AChB8s9F8999ACgB6tK58999ACgB6tK59999ACgBs5U59999AA7eCP8Bi5U58999AA7eCB9AVnBO5U59999AA9oCN9BE5e59999AA9oBOAIt6F9999AA9eBOAHt7F9999AChA6t9GJ99AA7eBOUCBeGuAuAeK999AA7eFBKDMoEBAHuKuA6A6999AA7oGAyIMeFAUCAKBAeGuot999AA8yTMeKAeHuyu999AA8oSMeKAoFu8AoBEJ99AA8oSMULA6AO7KDAen999AA8eRMAOv8AKEEJ99AA8eRL8B5v8AeFD8999AA8eQL8Bs8AEAymAyB999AA76BpTBs8KEAeqAeC999AA7oOL9Bs8UDAyqAKE999AA7UOL9Bi8yCAypAeD999AA7UOL8BY87AeEEKDAn99AA7UNL7Bi88AeFET99AA77A9AUBL6Bs89AoEEd99AA76A9AUBLoNxeDAeq999AA77A6L8BtAET99AA79AzQB5yUo999AA8KBL6B6yon999AB9yUyen999AB9USy7ET99AB89B7zKo999AB87B7zon999AB8yRzyo999AB8oRzKCAKBAKn999AB8eSz8D9999AB8ATzyCAUk999AB8KUz6AUCDx99AB8KU5XDd99AB8UT5WDn99AB8KU5UAKCAKBDT99AB8AU5WAKDDT99AB78CFWAoCDT99AB78B85YAoDDJ99AB77B85ZAyCDJ99AB8KM5ZA8AKf999AB8UI5bAKCD8999AB8eD5eAKDD9999AB7yC5tD6999AB7eC5vEJ99AB67AjuEn99AHOEn99AHQET99AHQET99AHUD7999AHRAKDD6999AHLAeDD9999AHMAyCD7999AHNAyBD7999AHSAKCD5999AHTAUBD567UB999AAuD767UC999AAsAKBAyBDQ7UDAUD999AAoAyBDQ7UI999AAoAoDDQ7AF999AAtAKBAUBDa7ABAoC999AArAKCAKCDT99AHXAKDDJ99AHVAUDC8999AHZAKDC8999AHfC5999AHaAKDAKBC5999ABvAP8KCAoW999ABuAP8UDAKY999AHiCx99AHeAKECeyAT99AG76AKHCUsAoBA5999AG8KWEeEAUG999AG8eBAUSEUDAKG999AG76AKGAKEB8EADAUE999AG89CKlAUEAn99AG8oBAUU999AHmB9999AHkAKDBoDAd99AHmBUFA5999AHjBUDA9999AHkA9AeJ999AHhAKCA9AeJ999AHkBAIA6999AHgBKHA7999AHhAyCAoBAKCBT99AHfAUBAUHAUBBn99AHgAKCAUBAKDAKDBVoAn99AF96AKHBVpAn99AF9yBAeROAE999AF9KYOAD999AF9oZN6Ad99AF98CT99AHgAUCBn99AHtBn99AHuAKCAn99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AGIAd99AJ99AJ99AJ99AJ99ACdAd99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AH7oE999AH5eB999AJ99AJ99AFGAKBAT99AJ99AJ99AJ99AJ99AC9KB999AH5UBAoF999AHtAyCAd99AHtAyCAd99AHvAx99AHxA7AUC999AHlAUFA9AUF668Ad99AA6ABAeCAyJAeE668Ax99AA57AeCAKEA7AeBA7AQ67Ax99AA56AyFA6999AHrAKBAKDA7999AHwA88mAdFBHDAVgAxFA97FALfA5898AKHA969KEOAF899AKGA98kAxGBE89A8YeII7AnGBoCAs76B7TUOC8Bo8yF9EA9AKDAeCAKBvyUN6AUyCUVB6G7CxDA9AeCv7C7NUDE8DABAULB7AeED9AyNDw9yJAyCvydNADA7BoDAoEAyBAyDD7A8C7CKFAeEAeHBKr88ACA6BE8KbNAwAKoAKhB7CyKFABAc7UDAUCAKIAUBveCAycM6M9AKoA7F6AKE86yEAKLvoHAUhKoIAguAKE858AeCBO6yDA7Ee9yEAM6m58AoDA9u6AoGFo8g6686UCAoCAUGueGAU7o65bS69A6t7KoubyDAm6UGtVJD9c786yHszND7c886yHA6AOkL6DrABKC8sA7AoCoKFC6L9DhCBKD8cAUNB5n8A6CfUD5eAFAKGAcbA7BUPn7A7CBWDrP8aA9BUOAyCm8BUQMUggABAKCAwRBAFAUCB8AeCm6ByEAUIMUch58MAUCBADCyBAN8eSAUDA8MAZAKBiIMAKDBADCr8UbAKCAVWCXv799AoMBADCr7V58AKDB7jl99AyMBADC5c7AUOAUKAeEA6D7QUTj68RBKDCg8KDAeEBeKAKTCf69CD6ABAcIByDCWaAKLAKYAUOBoIEAHR8AUCBr6wAAeGByDCqjAecC6A5W6AKDBX76AKB78eIBUKAeZWAEA9AoUa7BD85777A8BeMAeaUeDBAFDC69BD8779UTAeZUeGA6AyOAKMbAMm9787AKCCKDCp96AUEA7AyHAKPAKDAq7AOnKDAR78AUBCyDCz9oDAUJA5d9Br9568yCA6AK8yLAUQAoXT7foNn667yIAeDAUBAKEIyGBALAySUXMBX9u79Cy96BeGCp95fUIn669oNG8AoTB6A8Cf9rQAN9969UCAKCByCBeCHAOA9Cf9bR68oDA7A6DACA6Ao8UbSvT68ABAyEBeEC6AUDA6FKGCUiR87S68oBA6CAeA7AUCA6AKUAeQA6AUBB6D7R87P6CA7GAFCU68B9A7AUCA8A6AKBA8D9R77W6DA9BABE6A8De5yRA9AoEA7AUEE9RbL6UA9AoKEAJB9A8Ae6yIB7Ao58RHI6cA8AoPA8AUHAUPBKSQB7KGAk9ulAeGBUJAUHAyRA7CL56R869QRAeLAoRAyZAyHA6A7AUXPp5yDB969aHAeZAKhCKGA6D7O8P6AUR69kEBAFAoKGUEAymOUBAf58AUL6896LKKnOKCAV7Q886FK8AyDBKOA9N8Ru8aMc9RQ8kEd8RQ8aBd8Q9AoD68F97Z6AKrQu9j9KHAM5yHDf587B59eKAM5eJCp6HF6IZeKCB5vJ6OZV777M6AAoMZp7RN577AKEBKQAyFZ6Q57QBKC56yRAeGA9az577VA9BF6KcAq77OvWA9AeDAj6q8AHCVp7Y585cKQA7JeND57YA8AZ6yEC5bzCB9DRa57oHCM5oGB7DeEGeVC97bAUB57UJB6Z9A8BUdA7GeWC87R588BASZ7EeJGoYC77I6AA9Cq5UmA8G7CoeCUF6696MAyiY7AeOB6A7G8CokA8A967a6C58B6Ao7AaE767k7MxFeFDAdE966668MpFyGC8C8F666D68" : mc === a15() + 2 ? k = "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" : mc === a15() + 3 && (k = "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C9AKsV957oMAolA6Ce7ABDABEqS57oPAenAKaG8AKfAKtV7568AUDI6GyCDUBE5V7568CAEG8GeBDyBEqQ568CAIG6GKBD6AKrV6568CKLGo59AKlAUqV656yBAKWBonAUVF8AKmAKpV656oCAUWB7DoFCA58AKmAKpV656oaCAgAoVF6AKnAKpV656ebCeeAoVFyBEABECP56KfCodAoSF6AU8MP56AhCocAyQFyEIMP559DoZC8AyPFUGIWO56AhC6C9AyPFAHIWO56AfC9C9A7BeJAUmA6IgO56AfC7DUGAeBA9A9AekBA8CO56AdDAfA6AUCA9A9AyiBA8CN56AeDKeBUHA9AyhBK8CN56AFAKYDKeC7AekBA8MN559AyBCygC9GyMICL56KEAUZDecFyBA9BU8WJ56AFAUUAUDDUdFoFA6BU8qG56KFAUUAUDDUdFUaIgG56KEAUTAoCDedE9C9IMI56KEAUSAyCDecE8DK8MF56oDAeREKbE7De8CF56UFAeSEKbEyhIWF56KHAeREUaEejIWF56KFAyQEUbEUjIgF56AFAyQEeaEeiIqE56KEA6B6EebEKiJB9956KDA7B6EebD9Dy9L9856UDA7B6EebD6D7JUHAf8756eCA8B6EUcDymJeIAV8657USEKdDemJyIAV8t7eTEAJAUSDejJ9A8AL8t7eTEAHAyRDUTL6A8AV8t7eSD9A8A6B6DUPMUGAV8t7eRD9A8A9ByfBpeS557USD7A8BKPDAOM9S657eSD7A7BeODALMyBAz8757eRD8A6ByNC9A7AoBMyBAp8857eRD9AyPBedA7AoBMoDAV8857eSEADB6BonAVXAeBS957eREUBB7BooALWTt7eRGKNEKBLoCAoMAV8F7oRGKMEUBLoDAeGAV8657oSGAMEeBLoKAV8757eTGAMEeBLz9857eTGKKEoBLp9957eTGKKEKFLgA57USGUJD7A9LWC57eRGoGDeOLWC57USGoFDeOLCF57UTGeEDeOK9U657eUGeBDyNK9U757eUGeBDeOK8U957UVGeBDUPK5VZ7UWGUBDAQKgQ57KXGKBDAQKgP57UXGABCKCAySKWR57UZF8AKRC7KKNAWF57KaF8AKRC7KAJAUBAgG57KaF8AKQC7KAJA5U957AbF7AKQC6KAJA6U857UaFyDB6CzAA9A6U957UaFoEByZKKHA7VF7UaFoHBUXKUEBCK57eaFeIBKYKKCBWK57oaFeIBKXKKDBWK576Co5eIA8AKBCVDAUKVZ77Co5eFA9C6KeBBMM578Co5UBBUaL5Vj78CozAKMC6LWR579CeyAKMCzNV7579CoyAKLCzFAKHV8578CyyAKKCfIAKEV958AZFABBAXK8Wt8KZE8AeJCBKWj8oYE7BACCBLWj8eZE7DVLWj8eYE8DLOWF86CUwDLQV7587CUwDBRV6588CKxC9L9V5589B9E9C9MCP59ARFAaMWQ59ARFUXMgQ59AQF6B6M7V659AQGKKM8V659AQGyCNWQ59KPT9V759APT9V759KOT9V859ANUMS59AJUqS59KHU5V8R7AiMA5U5WB7yE6WWB7yE6VWV7eG6UWV7eH6TWV7oG6TWV7yG6SWV7oI6SWL7oJ6QWL76A86QWL76A96PWL76BP96AUNWV78A9598AeLWV8KG599A7A6WV8KG6AA9AgVSUG588AKMA8AWWSUF589AKNA6AqVSUF588AUOA6AWWSeD588AePW9SeC588AoPXH7UEB6W877oDB7W777yBB8W777yBCCa77oCB9W677yBB9W777oBCCa77eCA6AKNW777UDAyCBWb77UFAeBBgc77KJBqb77UGB6W877KDB9W877KEB8W877UDB7W976eBA8AeRXH6UBA8AoPXR6KCA8AoQXR59AUKAoOXb59AeKAoNXb58A6A9A6BCg758AeBAoIA6A9XR6yIAUGA8Xb7UKAeBAgh77UKAKCAWjA6Ab6yLAgjAyG76UJAqkAoC768A7AqlAUC769A7AqmAKC769A7Aqp768A7A5X8AUB768A7A5X8AUB769A6A5X8AUCPAB6QA7AqnAKEO8AaPA8AqnAKEO7AkQA7AgnAUEO7AkRA6AgnAeDO7AaSA6AWoAoDO6AQTA7AMoAoDO6AQTA7AMoAyDOyB6TY877gw76KCAeBA7Y776KKAeGAMo769AoBA6AWn77AKAWo77KIAWo77UDA6YR8Cp78Ms777Y5776Y5777Yv78Yv77Yl78Yl79YR8Co78Mn78ql78qk78eBAMk78Wn78Cp778Yl77A8AMk77oFAUDAgi77KEA6AeDX577ADA8AKEX577KBA9AKFX578ABA5X5786X6785X6785X778Mp78Cp779Yb79Yb79Yl78Yl75Y7765Z7769Zb7C5Z69AL98Zj69AV97Zt69AV95Z5569AV95Z5569AV9yDAgx57ABTKFA5ZF69AV9KDA6Y957KBUCy57ACT8Zj68AV97Zt68AV97Z5567AV95Z7568Af9C6F68Af87aZ69Af87aZ7ACS5at7KCSg6557KCSW6657KBSW6675q6775g6875W6975W697zbHyb57ub87qcvkc57jc77ic77ic87hdHgdHedbddlXcKBB77Uc6AeCAeI7Sc8AUP7Pe77NfHKf57Ef97Cf97BgHCgHAgRAga98gk97g769rc69rc69hd69Xd69Xe69Dg689ha88h5686f9AUP68hHAKf68Dp679ik77iu77iyYAaxi6CoD6wi6CyE6ti8CyE6ri9CyE6ri9CyF6pjAaAupjAaAkohUBB9668heBB9667ju6r5766X5966r57658AKFj8657AeCj9657k5657ku57ku56k6655k765r6765r67CKB6gk7CAD6fk7CAD6fk6CKD6dk9CKC6dlAVAablKVAaaleVAQaloVAQZloVAQXl6CUB6Xl56vluvluvluvlkwluvluul6DUB6Ml7DAF6Jl7DAF6Jl7DAI6Fl8DAI6Fl9C9A96El9C9BAEAZ98l8C8BeCAj97l8C8BeBA6595l8C8CP9r79C7CZ9h79C6Cj9X8KYCt9X8UXC559N8eXCt9N8eXC559D8oXC9586meYC9586mUYC9586mKZDF85mKaC9586mAaC9586mAaC8587mKYC9588mAYC9589mAXC9589mKWC9589mKWC959D8KVC959N8AVC959N8AVC959N8AUDF9N79CKf59N78CKgx6Ae9N78CKgxyCEKBFX77CKgu6AKPAeGA6EAGE9l6CUguyBBoFAKND6A8E8l7CKhuoCBeFAKSC9BUul7CefueDBedCoNE6l6CeguUEA7DyWBovlyYDO6KxB9B6E6l6Coes6A8Ao5ePCUsl6Codsy67BeYEr77CUdse7KJC6Er78CUcsU7UIC8Er78CUasU7eFDerl8CKaqeEBU78AUjEh79CAZqUJA7L7EX8AUC5qBjEX8KTC5p9NyEAUlg9AKzB8C6p8A7ApeD7mKTC5p8A7AoFAVXD8mAUCscA6AVYD8mAUAyCB6rADAfYD9mATAyDB6r6MeomATAoDB6r6MonmAUAeDB6rzaD8mKUAUDB6m6AeuM6D8mKUAeEBr86AosM7D9mAUAoEB6mUGEBeD9mKTAoEB8mAJD6NKnmeRAyDB8mAJD7NAnmoQA6AKTj7AUVBAbAUINAmmoPCeCAN57AoUBKbAeIM8D8myOCAFANfAKWBUQAKDA6C7AoDAeEMymm6BySAyBhACBoZBADAUHC8BKFMKnmyTBoFANcAoNFKZN6EN8oUBeEAXcAeKF6B7AKGN6EN8yUBKFAhbAeJF7BoFAzkEX8oUBKFAraAUJF7BoIAfkEX8yTBoCA6goCA7GAGAKEO9Eh8ySChXAUGGoCAUDPAsmyQBABBrXAUDHKBPKsmyQA6AKSggcEr8yRCrXW8AoBD9kUBCUUCXVXADAKpj9AUVCUVgCfAUDED8KXCNTXUCAoomAXCXRXeCAoomAYCXQX8EX79CoWf6X7Ee5yCgKZChOX8EoeAeDAyNAXVCyYfWmE6C7BKBAULAhVCyZfCmE7C7A8AyBBKDe7AeLCyae8YKtCUCAeFCAEeyIA7Cyae5YogAULCeCAUECKDe6A9A7CobegtDKEBKXA6CUDe7BKGCUceWtDKFBAyAhJBKECedd6ZKdA6BAyAhJBUCCodc7AKHZecA6BAyAXLD7DC8UFAg58C8AyKFACfekDC8AHAM59C9AeLE9ArND6Dg77a7C8AeLFADfojDq77a7EX67Dyjb5a7EX67D7D7bW68ED66D9D6a9AKCa9D9k6EAja6AeCbekk7D9Dq66AoBbokk9D7Dg66cAklAlDW65cAlleiDW6M8yklohDW6M86D6loOAURDM6M88Dr76BUCB8DC6M89Dh77BKDB7DM59dKgl8BADB8DM57defl8A9AeUDM5q96DD79A8AUWDMyd9C9mUBAUDAUXDC5W97C9nAXDMzd8C7nUWDWyd9C5neXDqvd9C6nUXD7YrECKnAXzCelYrFCAnAoLAXkCUDAUhYrGB8D9AyKArlCKCAUiYhGB8EAFA9ArmCKBAeiYXHB7EAGjKYDqqe7B7EAGjUXDqqe9ByoA7jUXDgqfABAKLEAJjKYDWpfoKEAJjeWD9XrOA9EKJj6B9EChfeHEoJj7B9ECgfUFE6A9j8B9ECgfeDE7A9j9B8ECgfeBE9A9kARECgkoHkKRECgkyFAKFj6B8ECflKFj7B7EMek8A9j6B7EMelAIjyRECflKHj6B6D9XX7UGC9AhZBylXr7UGC9ANbBylXrDAK69A5j7BylXr7oEj7B6D5X5loEj6B7DqkloEj6B8Dgkt9AM7oTDWkseCBoEbKUDMlsKDByCbUUDgksACdAUDqjv7A5ZAVD6Xi76A5ZAWD6XY77AWzCemXHdConMUDKsmAM9AYEBUAzD7dCopL8A7KbdCyqMKBKldCyrWvcC6EqX7bC8EqW7bC9EoCAMSxo");
        k = m.iC(k);
        var x = jP.br(mc).a1G;
        var t = jP.br(mc).a1H;
        aR = 1E3 * k[0] + k[1];
        aS = 1E3 * k[2] + k[3];
        hW = document.createElement("canvas");
        hW.width = aR;
        hW.height = aS;
        ou = hW.getContext("2d", {
            alpha: false
        });
        wI = ou.getImageData(0, 0, aR, aS);
        wJ = wI.data;
        for (n = k.length, l = true, z = 0, y = 4, void 0; y < n; y++) {
            var n;
            var l;
            var z;
            var y;
            if (l) {
                for (; 0 < k[y]--;)
                    wJ[z] = t[0],
                        wJ[z + 1] = t[1],
                        wJ[z + 2] = t[2],
                        wJ[z + 3] = 255,
                        z += 4;
                l = false
            } else {
                for (; 0 < k[y]--;)
                    wJ[z] = x[0],
                        wJ[z + 1] = x[1],
                        wJ[z + 2] = x[2],
                        wJ[z + 3] = 255,
                        z += 4;
                l = true
            }
        }
        ou.putImageData(wI, 0, 0);
        uu = true;
        a13(g);
        wL.bh();
        bw.bx = true
    }
    function k3() {
        var MapDataArray;
        this.bh = function () {
            MapDataArray = Array(a0u);
            MapDataArray[0] = {
                mP: "White Arena",
                bt: 230,
                co: 230,
                g7: 1E3,
                g4: 2E3,
                a04: 173,
                per: 1
            };
            MapDataArray[1] = {
                mP: "Black Arena",
                bt: 800,
                co: 800,
                g7: 100,
                g4: 50,
                a04: 43,
                per: 1
            };
            MapDataArray[2] = {
                mP: "Island",
                bt: 512,
                co: 512,
                g7: 128,
                g4: 32,
                a04: 0,
                per: 1.5
            };
            MapDataArray[3] = {
                mP: "Mountains",
                bt: 960,
                co: 960,
                g7: 60,
                g4: 8,
                a04: 0,
                per: 1.2
            };
            MapDataArray[4] = {
                mP: "Desert",
                bt: 900,
                co: 900,
                g7: 100,
                g4: 5,
                a04: 0,
                per: 1.2
            };
            MapDataArray[5] = {
                mP: "Swamp",
                bt: 1E3,
                co: 1E3,
                g7: 100,
                g4: 40,
                a04: 0,
                per: 1.2
            };
            MapDataArray[6] = {
                mP: "Snow",
                bt: 1E3,
                co: 1E3,
                g7: 100,
                g4: 20,
                a04: 0,
                per: 1.2
            };
            MapDataArray[7] = {
                mP: "Cliffs",
                bt: 1024,
                co: 1024,
                g7: 128,
                g4: 32,
                a04: 0,
                per: 1.5
            };
            MapDataArray[8] = {
                mP: "Pond",
                bt: 820,
                co: 820,
                g7: 200,
                g4: 100,
                a04: 0,
                per: 1.2
            };
            MapDataArray[9] = {
                mP: "Halo",
                bt: 1024,
                co: 1024,
                g7: 128,
                g4: 32,
                a04: 0,
                per: 1.5
            };
            MapDataArray[10] = {
                mP: "Europe",
                a1G: [140, 130, 120],
                a1H: [12, 12, 76],
                a1I: [240, 120, 4672, 30, 26, 30, 90, 8, 32, 3, 9],
                per: 1
            };
            MapDataArray[11] = {
                mP: "World",
                a1G: [165, 145, 125],
                a1H: [15, 15, 69],
                a1I: [250, 100, 8, 25, 15, 25, 90, 8, 32, 3, 9],
                per: 1
            };
            MapDataArray[12] = {
                mP: "Caucasia",
                a1G: [140, 130, 120],
                a1H: [20, 20, 84],
                a1I: [240, 120, 100, 30, 25, 30, 90, 8, 32, 3, 9],
                per: 1
            };
            MapDataArray[13] = {
                mP: "USA 48",
                a1G: [120, 105, 92],
                a1H: [12, 12, 60],
                a1I: [300, 300, 9827, 26, 18, 36, 36, 8, 32, 3, 9],
                per: 1
            }
        }
            ;
        this.a1l = function () {
            return 1 === mc
        }
            ;
        this.GetMapData = function (mapIndex) {
            return MapDataArray[mapIndex]
        }
    }
    var hX;
    var tD;
    var j8;
    var j9;
    function j1() {
        void 0 === hX && (hX = document.createElement("canvas"));
        hX.width = aR;
        hX.height = aS;
        j8 = hX.getContext("2d", {
            alpha: true
        });
        j9 = j8.getImageData(0, 0, aR, aS);
        tD = j9.data
    }
    function k4() {
        function g(I, L, O) {
            B[0] = I;
            for (I = 1; I < O; I++)
                B[I] = B[I - 1] + L,
                    1E4 <= B[I] ? (B[I] = 9999,
                        L = -L) : 0 > B[I] ? (B[I] = 0,
                            L = -L) : (L += 16384 <= cW.random() ? C : -C,
                                L = L < -A ? -A : L > A ? A : L)
        }
        function k(I, L, O, P) {
            if (O)
                for (O = 0; O < P; O++)
                    n[L * l + I + O] = B[O];
            else
                for (O = 0; O < P; O++)
                    n[L * l + I + O * l] = B[O]
        }
        function x(I, L) {
            var O = I - B[L - 1];
            if (0 !== O) {
                var P = 1 + ak(Math.abs(O), L - 1);
                P = 0 > O ? -P : P;
                B[L - 1] = I;
                var W = L - 1 - ak(Math.abs(O), Math.abs(P));
                W = 1 > W ? 1 : W > L - 2 ? L - 2 : W;
                for (var V = L - 2; V >= W; V--)
                    B[V] += O - (L - 1 - V) * P;
                if (0 > O)
                    for (O = L - 2; 1 <= O; O--)
                        0 > B[O] && (B[O] = -B[O] - 1);
                else
                    for (O = L - 2; 1 <= O; O--)
                        1E4 <= B[O] && (B[O] = 2E4 - B[O] - 1)
            }
        }
        function t(I) {
            for (var L = 0; L < I.length - 1; L++)
                I[L] = I[L + 1] - I[L];
            I[I.length - 1] = I[I.length - 3]
        }
        var n;
        var l;
        var z;
        var y;
        var A;
        var C;
        var B;
        var F;
        var E;
        var J;
        var G;
        var H;
        var D;
        var K;
        this.j5 = function (I) {
            l = I[0];
            z = I[1];
            A = I[2];
            C = I[3];
            n = new Int16Array(l * z);
            y = l > z ? l : z;
            B = new Int16Array(y);
            F = [];
            E = [];
            J = [];
            G = Array(l);
            H = Array(z);
            for (I = l - 1; 0 <= I; I--)
                G[I] = false;
            for (I = z - 1; 0 <= I; I--)
                H[I] = false;
            D = new Int16Array(l);
            K = new Int16Array(z);
            I = y;
            var L = cW.random() % 1E4;
            var O = cW.random() % (2 * A + 1) - A;
            g(L, O, I);
            I = K;
            L = B;
            O = z;
            for (var P = 0; P < O; P++)
                I[P] = L[P];
            k(0, 0, true, l);
            I = n[0];
            L = y;
            O = cW.random() % (2 * A + 1) - A;
            g(I, O, L);
            I = D;
            L = B;
            O = l;
            for (P = 0; P < O; P++)
                I[P] = L[P];
            k(0, 0, false, z);
            t(D);
            t(K);
            g(n[l - 1], D[l - 1], z);
            k(l - 1, 0, false, z);
            g(n[l * (z - 1)], K[z - 1], l);
            x(n[l * z - 1], l);
            k(0, z - 1, true, l);
            G[l - 1] = G[0] = true;
            H[z - 1] = H[0] = true;
            I = l;
            F.push(0);
            E.push(I);
            J.push(true);
            I = z;
            F.push(0);
            E.push(I);
            J.push(false);
            a: for (; ;) {
                I = F.length - 1;
                for (L = I - 1; 0 <= L; L--)
                    E[L] > E[I] && (I = L);
                if (5 > E[I])
                    break a;
                L = F[I] + ak(E[I], 2);
                if (J[I]) {
                    O = void 0;
                    var W;
                    P = L;
                    for (V = 0, N = 0, void 0; N < z - 1;) {
                        var V;
                        var N;
                        for (W = V + 1; W < z; W++)
                            if (H[W]) {
                                N = W;
                                break
                            }
                        W = N - V + 1;
                        g(n[P + l * V], 0 === V ? D[P] : B[O - 1] - B[O - 2], W);
                        x(n[N * l + P], W);
                        k(P, V, false, W);
                        O = W;
                        V = N
                    }
                    G[P] = true
                } else {
                    O = void 0;
                    P = L;
                    for (N = V = 0; N < l - 1;) {
                        for (W = V + 1; W < l; W++)
                            if (G[W]) {
                                N = W;
                                break
                            }
                        W = N - V + 1;
                        g(n[P * l + V], 0 === V ? K[P] : B[O - 1] - B[O - 2], W);
                        x(n[P * l + N], W);
                        k(V, P, true, W);
                        O = W;
                        V = N
                    }
                    H[P] = true
                }
                O = F[I] + E[I] - L;
                P = J[I];
                F.push(L);
                E.push(O);
                J.push(P);
                E[I] = L - F[I] + 1
            }
            for (I = 0; I < l; I++)
                if (!G[I])
                    for (L = 0; L < z; L++)
                        H[L] || (O = n[L * l + I - 1] + n[(L - 1) * l + I],
                            P = 2,
                            G[I + 1] && (P++,
                                O += n[L * l + I + 1]),
                            H[L + 1] && (P++,
                                O += n[(L + 1) * l + I]),
                            n[L * l + I] = ak(O, P))
        }
            ;
        this.a1K = function () {
            return n
        }
            ;
        this.a12 = function () {
            n = null
        }
    }
    function ak(g, k) {
        return Math.floor(g / k + 1 / (2 * k))
    }
    function xg(g, k) {
        return 0 <= g ? ak(g, k) : -ak(-g, k)
    }
    function Square(g) {
        return g * g
    }
    function FindMax(g, k) {
        return g > k ? g : k
    }
    function FindMin(g, k) {
        return g < k ? g : k
    }
    function sJ(g, k, x) {
        return k < g ? g : k > x ? x : k
    }
    function a2X(g, k) {
        for (x = ak(g + 1, 2), t = 0, void 0; t < k; t++) {
            var x;
            var t;
            x = ak(x + ak(g, x), 2);
        }
        return x
    }
    function bd(g, k) {
        return 1 > g ? 0 : a2X(g, k)
    }
    function a2Y(g, k, x, t, n, l, z, y) {
        return !(g + x <= n || k + t <= l || g >= n + z || k >= l + y)
    }
    function a2Z(g, k, x, t, n, l, z, y) {
        return g <= n && k <= l && g + x >= n + z && k + t >= l + y
    }
    function kM() {
        function g() {
            ux.tz[2] = ux.tz[3] = ux.tz[4] = !jW.a2a;
            var B = jW.zs ? 1 : 0;
            var F = jW.a2a ? 1 : 0;
            b ? (window.webkit.messageHandlers.iosCommandA.postMessage("freeSpawn " + B),
                window.webkit.messageHandlers.iosCommandA.postMessage("unlimitedTime " + F)) : 5 <= d ? (htmlLoader.saveNumber(25, B),
                    htmlLoader.saveNumber(26, F)) : (f.x(6, B && F ? 3 : !B && F ? 2 : B && !F ? 1 : 0),
                        f.y())
        }
        function k(B, F, E, J) {
            if (0 === J)
                return B >= E.et && (0 === J || F >= E.eu) && F <= E.eu + E.mg;
            F -= J * (E.mg - 2);
            return B >= E.ev && (0 === J || F >= E.eu) && F <= E.eu + E.mg
        }
        function x() {
            var B = Math.floor((b_IsUISmall ? .145 : .09) * bi);
            var F = Math.floor(1.5 * B);
            var E = Math.floor(.065 * (b_IsUISmall ? .53 : .36) * bi);
            return {
                et: r - B - E,
                eu: c2,
                hi: B,
                mg: Math.floor(.35 * B),
                ev: r - F - E,
                hj: F
            }
        }
        function t(B, F, E, J, G, H, D, K, I, L) {
            L = Math.floor(L * J);
            c9.font = bl + L + bm;
            K && (G += 80,
                H += 80,
                D += 80);
            c9.fillStyle = "rgba(" + G + "," + H + "," + D + ",0.6)";
            c9.fillRect(B, F, E, J);
            c9.fillStyle = colorWhite;
            c9.fillRect(B, F, E, 2);
            c9.fillRect(B, F + J - 2, E, 2);
            c9.fillRect(B, F, 2, J);
            c9.fillRect(B + E - 2, F, 2, J);
            c9.fillText(I, Math.floor(B + E / 2), Math.floor(F + J / 2 + .1 * L))
        }
        this.wx = 1;
        this.a2a = this.zs = false;
        var n = -1;
        var l = false;
        var moreMenuRowsArray = ["More", "Lobby 1", "Hide Usernames", "Hide Links", "Tutorial", "Player List", "Clan List", "Privacy Policy", "Cookie Policy", patchVersion];
        var y = [140, 0, 0, 0, 0, 0, 0, 0, 0, 90];
        var A = [120, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        var C = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.bh = function () {
            b ? (this.zs = c.freeSpawn,
                this.a2a = c.unlimitedTime) : 5 <= d ? (this.zs = 1 === htmlLoader.loadNumber(25),
                    this.a2a = 1 === htmlLoader.loadNumber(26)) : (this.zs = 1 === f.g(6) % 2,
                        this.a2a = 1 < f.g(6));
            A[2] = this.zs ? 130 : 0;
            A[3] = this.a2a ? 130 : 0;
            this.a2a && (ux.tz[2] = ux.tz[3] = ux.tz[4] = false)
        }
            ;
        this.bz = function (B, F) {
            var E;
            if (!(7 <= jL.rG())) {
                var J = x();
                if (l) {
                    for (E = 1; E < y.length; E++)
                        if (k(B, F, J, E))
                            return 1 === E ? (jW.wx = 1 === jW.wx ? 2 : 1,
                                moreMenuRowsArray[1] = "Lobby " + jW.wx,
                                bw.bx = true) : 2 === E ? (jW.zs = !jW.zs,
                                    A[E] = jW.zs ? 130 : 0,
                                    g(),
                                    bw.bx = true) : 3 === E ? (jW.a2a = !jW.a2a,
                                        A[E] = jW.a2a ? 130 : 0,
                                        g(),
                                        bw.bx = true) : 4 === E ? ml.bh(oB, true) : 5 === E ? ml.bh(oC[0], true) : 6 === E ? ml.bh(oC[1], true) : 7 === E ? ml.bh(oA, true) : 8 === E && ml.bh(mm, true),
                                true;
                    l = false;
                    bw.bx = true;
                    return false
                }
                return k(B, F, J, 0) ? (l = true,
                    bw.bx = true) : false
            }
        }
            ;
        this.lK = function (B, F) {
            var E;
            if (!(7 <= jL.rG())) {
                var J = x();
                var G = n;
                var H = l ? y.length - 1 : 1;
                n = -1;
                for (E = 0; E < H; E++)
                    if (k(B, F, J, E)) {
                        n = E;
                        break
                    }
                G !== n && (bw.bx = true)
            }
        }
            ;
        this.c8 = function () {
            var B;
            if (!(7 <= jL.rG())) {
                var F = x();
                c9.textAlign = cB;
                c9.textBaseline = cA;
                t(F.et, F.eu, F.hi, F.mg, y[0], A[0], C[0], 0 === n, moreMenuRowsArray[0], .6);
                if (l) {
                    var E = y.length;
                    for (B = 1; B < E; B++)
                        t(F.ev, F.eu + B * F.mg - 2 * B, F.hj, F.mg, y[B], A[B], C[B], n === B, moreMenuRowsArray[B], B === E - 1 ? .32 : .45)
                }
            }
        }
    }
    function k5() {
        function g() {
            x = true;
            t = -1;
            n = Array(4);
            for (var y = 3; 0 <= y; y--)
                n[y] = false;
            y = Math.floor(1 + .02 * oX);
            l = Array(4);
            z = Array(4);
            z[1] = z[3] = l[0] = l[2] = 0;
            z[0] = l[3] = -y;
            l[1] = z[2] = y
        }
        function k() {
            if (-1 !== t)
                if (0 !== fK && eH.gi()) {
                    for (y = false, A = 3, void 0; 0 <= A; A--) {
                        var y;
                        var A;
                        n[A] && (y = true,
                            fv += l[A],
                            fw += z[A],
                            dx.lK(l[A], z[A]),
                            gR.qU());
                    }
                    y ? bw.bx = true : gV.gW()
                } else
                    gV.gW()
        }
        var x = false;
        var t;
        var n;
        var l;
        var z;
        this.vH = function (y) {
            0 !== fK && eH.gi() && (x || g(),
                n[y] = true,
                -1 === t && (t = setInterval(k, 20),
                    k()))
        }
            ;
        this.a0n = function (y) {
            if (0 !== fK && (x || g(),
                n[y] = false,
                -1 !== t)) {
                y = false;
                for (var A = 3; 0 <= A; A--)
                    y = y || n[A];
                y || this.gW()
            }
        }
            ;
        this.gW = function () {
            if (x && -1 !== t) {
                for (var y = 3; 0 <= y; y--)
                    n[y] = false;
                clearInterval(t);
                t = -1
            }
        }
    }
    function k6() {
        var g;
        this.em = function () {
            return g
        }
            ;
        this.cg = function (k, x) {
            if (0 === bF[k].length || !ax.ay(x) || !ax.b8(x) && ax.b7(x) === k)
                return false;
            for (var t = 21; 0 <= t; t--) {
                if (21 === t) {
                    var n = bF[k];
                    var l = x;
                    var z = ax.fy(l);
                    l = ax.c7(l);
                    var y = 0;
                    var A = ax.fy(n[0]);
                    var C = ax.c7(n[0]);
                    A = Math.abs(A - z) + Math.abs(C - l);
                    for (C = n.length - 1; 1 <= C; C--) {
                        var B = ax.fy(n[C]);
                        var F = ax.c7(n[C]);
                        B = Math.abs(B - z) + Math.abs(F - l);
                        B < A && (A = B,
                            y = C)
                    }
                    g = n[y]
                } else
                    g = bF[k][ak(t * bF[k].length, 21)];
                a: {
                    C = g;
                    y = x;
                    n = ax.fy(C);
                    z = ax.c7(C);
                    l = ax.fy(y);
                    y = ax.c7(y);
                    A = Math.abs(l - n) + Math.abs(y - z);
                    if (!(2 > A))
                        for (B = 0; B < A; B++)
                            if (C = Math.abs(l - ax.fy(C)) >= Math.abs(y - ax.c7(C)) ? C + aN[l > n ? 1 : 3] : C + aN[y > z ? 2 : 0],
                                ax.ay(C)) {
                                if (0 === B || B + 20 < A)
                                    break;
                                n = true;
                                break a
                            }
                    n = false
                }
                if (n)
                    return true
            }
            return false
        }
    }
    function a0k() {
        function g() {
            var C;
            var B = 0;
            var F = 0;
            var E = Math.floor(n / 2);
            var J = Math.floor(l / 2);
            var G = 1.5 * Math.PI;
            for (C = iq; 0 <= C; C--)
                F += A[C],
                    0 === A[C] && B++;
            x = false;
            y.clearRect(0, 0, n, n);
            y.fillStyle = colorBlack75opaque;
            y.fillRect(0, 0, n, n);
            y.fillStyle = nY;
            y.fillRect(0, 0, n, 2);
            y.fillRect(0, 0, 2, n);
            y.fillRect(n - 2, 0, 2, n);
            y.fillRect(0, n - 2, n, 2);
            if (0 < F)
                if (B === iq)
                    for (C = iq; 0 <= C; C--) {
                        if (0 < A[C]) {
                            F = E;
                            G = J;
                            y.fillStyle = dN.w0[dN.iQ[C]];
                            y.beginPath();
                            y.arc(F, F, G, 0, 2 * Math.PI);
                            y.fill();
                            break
                        }
                    }
                else {
                    for (C = 0; C <= iq; C++)
                        if (0 < A[C]) {
                            B = G + 2 * Math.PI * A[C] / F;
                            var H = E;
                            var D = J;
                            var K = G;
                            var I = B;
                            y.fillStyle = dN.w0[dN.iQ[C]];
                            y.beginPath();
                            y.arc(H, H, D, K, I);
                            y.lineTo(H, H);
                            y.fill();
                            0 !== C && k(E, J, G);
                            G = B
                        }
                    k(E, J, 1.5 * Math.PI)
                }
            y.beginPath();
            y.arc(E, E, J, 0, 2 * Math.PI);
            y.stroke()
        }
        function k(C, B, F) {
            y.beginPath();
            y.moveTo(C, C);
            y.lineTo(C + Math.cos(F) * B, C + Math.cos(F + 1.5 * Math.PI) * B);
            y.stroke()
        }
        var x = false;
        var t = 0;
        var n = 0;
        var l = 0;
        var z = null;
        var y = null;
        var A = null;
        this.bh = function () {
            if (d1) {
                t = 16;
                A = new Uint32Array(iq + 1);
                for (var C = iq; 0 < C; C--)
                    A[C] = 1;
                this.lT()
            } else
                A = y = z = null
        }
            ;
        this.pc = function () {
            return n
        }
            ;
        this.lT = function () {
            d1 && (n = Math.floor(.18 * oX),
                n += n % 2,
                l = Math.floor(7 * n / 8),
                z = document.createElement("canvas"),
                z.width = n,
                z.height = n,
                y = z.getContext("2d", {
                    alpha: true
                }),
                y.lineWidth = 2,
                y.strokeStyle = colorWhite,
                g())
        }
            ;
        this.py = function () {
            return A[this.mN()]
        }
            ;
        this.iO = function () {
            t = 31;
            this.d6();
            return this.mN()
        }
            ;
        this.mN = function () {
            for (C = 0, B = iq, void 0; 0 < B; B--) {
                var C;
                var B;
                A[B] > A[C] && (C = B);
            }
            return C
        }
            ;
        this.d6 = function () {
            if (d1 && 32 <= ++t) {
                t = 0;
                var C;
                for (C = iq; 0 <= C; C--)
                    A[C] = 0;
                for (C = dP - 1; 0 <= C; C--)
                    A[dN.dO[dQ[C]]] += landSizeArray[dQ[C]];
                x = true
            }
        }
            ;
        this.bn = function () {
            d1 && x && g()
        }
            ;
        this.c8 = function () {
            d1 && c9.drawImage(z, ld, pd + 2 * ld)
        }
    }
    function k7() {
        var g;
        var k;
        this.bh = function () {
            k = Array(101);
            for (var x = k.length - 1; 0 <= x; x--)
                k[x] = ak(32768 * x, 100);
            this.iz(0)
        }
            ;
        this.value = function (x) {
            return k[x]
        }
            ;
        this.zu = function () {
            return ak(g - 1, 2)
        }
            ;
        this.iz = function (x) {
            g = 2 * x % 32768 + 1
        }
            ;
        this.random = function () {
            return g = 167 * g % 32768
        }
            ;
        this.cX = function (x) {
            return ak(x * this.random(), 32768)
        }
            ;
        this.dG = function (x) {
            return 0 !== x && this.random() < this.value(x)
        }
    }
    function kE() {
        function g() {
            (500 <= z || 5 < l) && k()
        }
        function k() {
            l = 0;
            z += 700 > z ? 200 : 0;
            bo.bp() && (t() || n) && (n = false,
                oK(),
                te.bh(),
                jJ.bh(),
                jN.lT(),
                ux.bh(),
                jK.lT(),
                jI.lT(),
                jH.lT(),
                ur.lT(),
                c5.lT(),
                a5.bh(),
                1 <= fK ? (e9.lT(false),
                    eB.lT(),
                    dy.lT(),
                    gR.lT(),
                    eD.lT(),
                    dw.lT(),
                    fZ.lT(),
                    eE.lT(),
                    eC.lT(),
                    bu.lT(),
                    hY.ka(),
                    hZ.lT(),
                    dx.lT(),
                    eI.lT(),
                    eF.lT(),
                    gR.qU()) : (0 === jL.rG() ? jN.c6(0, true) : 2 === jL.rG() ? dk.lT() : 3 === jL.rG() && jM.lT(),
                        jL.uv(),
                        jL.uy()),
                bw.bx = true)
        }
        function x(y) {
            return y && 128 < y ? Math.floor(y) : 128
        }
        function t() {
            var y = x(document.documentElement.clientWidth);
            var A = x(document.documentElement.clientHeight);
            if (y !== fx || A !== c3) {
                fx = y;
                c3 = A;
                r = fx;
                s = c3;
                oX = FindMin(r, s);
                bi = ak(s + r, 2);
                if (5 <= d) {
                    var C = htmlLoader.loadNumber(23);
                    var B = htmlLoader.loadNumber(24);
                    y > C && (C = y,
                        htmlLoader.saveNumber(23, C));
                    A > B && (B = A,
                        htmlLoader.saveNumber(24, B))
                } else
                    C = y,
                        B = A;
                y = mainCanvas.width;
                A = mainCanvas.height;
                C > y && (y = C,
                    mainCanvas.width = C);
                B > A && (A = B,
                    mainCanvas.height = B);
                mainCanvas.style.width = y + "px";
                mainCanvas.style.height = A + "px";
                return true
            }
            return false
        }
        var n = false;
        var l;
        var z;
        this.bh = function () {
            l = 1;
            z = 100;
            r = s = oX = fx = c3 = bi = 0;
            mainCanvas = document.getElementById("canvasA");
            c9 = mainCanvas.getContext("2d", {
                alpha: false
            });
            c9.imageSmoothingEnabled = false;
            t();
            window.addEventListener("resize", g)
        }
            ;
        this.d6 = function () {
            jX.d6();
            ++l >= z && k()
        }
            ;
        this.wk = function () {
            n = true;
            500 <= z && k()
        }
    }
    function k8() {
        function g(J) {
            e7.an(x, E);
            aW.au(x, F);
            J && (TroopBalance[x] += t)
        }
        function k() {
            ax.xn(n, x) && ax.xp(n)
        }
        var x;
        var t;
        var n;
        var l;
        var z;
        var y;
        var A;
        var C;
        var B;
        var F;
        var E;
        this.d6 = function (J, G, H, D, K) {
            B = J;
            E = G;
            x = H;
            z = ax.fy(D);
            y = ax.c7(D);
            A = ax.fy(K);
            C = ax.c7(K);
            l = n = ax.en(z, y);
            F = aW.fG(x, E);
            -1 === F ? (k(),
                e7.an(x, E),
                J = false) : (t = aW.ae(x, F),
                    J = true);
            if (J && (k(),
                J = ak(t, 128),
                J = 1 > J ? 1 : J,
                t -= J,
                x === localPlayerID && (as.at[15] += J),
                t <= al ? (x === localPlayerID && (as.at[15] += t),
                    g(false),
                    J = false) : (aW.bL(x, F, t),
                        J = true),
                J))
                if (J = ax.en(z, y),
                    n = Math.abs(A - z) >= Math.abs(C - y) ? J + aN[A > z ? 1 : 3] : J + aN[C > y ? 2 : 0],
                    z = ax.fy(n),
                    y = ax.c7(n),
                    e7.fj(B, n),
                    J = ax.ay(n) ? false : true,
                    J)
                    ax.xl(n) && ax.xs(n, x);
                else
                    a: {
                        if (ax.b8(n))
                            J = b0;
                        else {
                            J = ax.b7(n);
                            if (J === x) {
                                g(true);
                                break a
                            }
                            if (!cZ(x, J)) {
                                G = landSizeArray[J] * ij - TroopBalance[J];
                                0 >= G || (G = t > G ? G : t,
                                    t -= G,
                                    x === localPlayerID && (dw.mZ(G, J),
                                        as.at[16] += G),
                                    J === localPlayerID && (dw.mb(G, x),
                                        as.at[10] += G),
                                    TroopBalance[J] += G);
                                g(true);
                                break a
                            }
                        }
                        x === localPlayerID && (as.at[13] += t);
                        e7.an(x, E);
                        aW.au(x, F);
                        aw[x].push(l);
                        aW.cI(x, t, J);
                        am.cJ(x, true)
                    }
        }
            ;
        this.fn = function (J, G) {
            x = J;
            n = ax.en(ax.fy(G), ax.c7(G));
            k()
        }
    }
    function k9() {
        var g;
        var k;
        var x;
        var t;
        this.bh = function () {
            var n;
            var l;
            var z;
            x = true;
            t = "rgb(" + wJ[0] + "," + wJ[1] + "," + wJ[2] + ")";
            var y = a17(mc) ? true : x = false;
            if (y)
                k = null;
            else {
                g = ak(96, 4);
                if (1 === mc) {
                    var A = 0;
                    var C = 160
                } else
                    A = 128,
                        C = 32;
                t = "rgb(" + A + "," + A + "," + A + ")";
                k = Array(4);
                for (y = 3; 0 <= y; y--) {
                    k[y] = document.createElement("canvas");
                    var B = 0 === y % 2 ? aR : g;
                    var F = 0 === y % 2 ? g : aS + 2 * g;
                    k[y].width = B;
                    k[y].height = F;
                    var E = k[y].getContext("2d", {
                        alpha: false
                    });
                    var J = E.getImageData(0, 0, B, F);
                    var G = J.data;
                    if (0 === y % 2)
                        for (l = g - 1; 0 <= l; l--) {
                            var H = C + Math.floor((l + 1) * (A - C) / (g + 1));
                            for (n = B - 1; 0 <= n; n--) {
                                var D = 4 * ((0 === y ? g - l - 1 : l) * B + n);
                                G[D] = H;
                                G[D + 1] = H;
                                G[D + 2] = H;
                                G[D + 3] = 255
                            }
                        }
                    else {
                        for (n = g - 1; 0 <= n; n--)
                            for (H = C + Math.floor((n + 1) * (A - C) / (g + 1)),
                                l = F - 1 - g; l >= g; l--)
                                D = 4 * (l * B + (3 === y ? g - n - 1 : n)),
                                    G[D] = H,
                                    G[D + 1] = H,
                                    G[D + 2] = H,
                                    G[D + 3] = 255;
                        for (z = 1; 0 <= z; z--)
                            for (n = g - 1; 0 <= n; n--)
                                for (l = g - 1; 0 <= l; l--)
                                    H = (Math.pow(n * n + l * l, .5) + 1) / (g + 1),
                                        H = 1 < H ? 1 : H,
                                        H = C + Math.floor(H * (A - C)),
                                        D = 4 * ((0 === z ? g - l - 1 : l + z * (F - g)) * B + (1 === y ? n : g - n - 1)),
                                        G[D] = H,
                                        G[D + 1] = H,
                                        G[D + 2] = H,
                                        G[D + 3] = 255
                    }
                    E.putImageData(J, 0, 0)
                }
                ou.fillStyle = "rgb(" + C + "," + C + "," + C + ")";
                ou.fillRect(0, 0, aR, 1);
                ou.fillRect(0, aS - 1, aR, 1);
                ou.fillRect(0, 0, 1, aS);
                ou.fillRect(aR - 1, 0, 1, aS)
            }
        }
            ;
        this.hV = function () {
            var n = x ? 0 : -g;
            a2Z(n, n, aR - 2 * n, aS - 2 * n, gg.a3U, gg.a3V, gg.a3W, gg.a3X) || (c9.fillStyle = t,
                c9.fillRect(0, 0, fx, c3))
        }
            ;
        this.c8 = function () {
            x || (a2Y(0, -g, aR, g, gg.a3U, gg.a3V, gg.a3W, gg.a3X) && c9.drawImage(k[0], gg.a3Y, gg.a3Z - g),
                a2Y(aR, -g, g, aS + 2 * g, gg.a3U, gg.a3V, gg.a3W, gg.a3X) && c9.drawImage(k[1], gg.a3Y + aR, gg.a3Z - g),
                a2Y(0, aS, aR, g, gg.a3U, gg.a3V, gg.a3W, gg.a3X) && c9.drawImage(k[2], gg.a3Y, gg.a3Z + aS),
                a2Y(-g, -g, g, aS + 2 * g, gg.a3U, gg.a3V, gg.a3W, gg.a3X) && c9.drawImage(k[3], gg.a3Y - g, gg.a3Z - g))
        }
    }
    function a0D() {
        function g() { }
        function wsOnOpenListener() {
            low_level_websocket.a0E(websocket_state, y)
        }
        function wsOnMessageListener(E) {
            A++;
            A === 1 ? fileReader.readAsArrayBuffer(E.data) : processing_queue.push(E.data)
        }
        function loadEndListener() {
            A--;
            jS.a3l(websocket_state, new Uint8Array(fileReader.result));
            if (A > 0){fileReader.readAsArrayBuffer(processing_queue[0]),
                processing_queue.shift()}
        }
        function wsOnErrorListener() { }
        function wsOnCloseListener(E) {
            low_level_websocket.a0K(websocket_state, E)
        }
        var websocket_state;
        var y;
        var A;
        var processing_queue;
        var fileReader;
        var webSocket;
        this.bh = function (E, J, G) {
            websocket_state = E;
            // Note that websocket_state is different from game_state
            y = J;
            A = 0;
            processing_queue = [];
            fileReader = new FileReader;
            fileReader.addEventListener("loadend", loadEndListener);
            webSocket = new WebSocket(oI[0] + G + oI[1 + a0U]);
            webSocket.onopen = wsOnOpenListener;
            webSocket.onmessage = wsOnMessageListener;
            webSocket.onclose = wsOnCloseListener;
            webSocket.onerror = wsOnErrorListener
        }
            ;
        this.IsConnecting = function () {
            return webSocket.readyState === webSocket.CONNECTING
        }
            ;
        this.IsOpen = function () {
            return webSocket.readyState === webSocket.OPEN
        }
            ;
        this.IsWSRunning = function () {
            return this.IsConnecting() || this.IsOpen()
        }
            ;
        this.a0B = function (E) {
            y = E
        }
            ;
        this.send = function (E) {
            this.IsOpen() && webSocket.send(E)
        }
            ;
        this.close = function (E) {
            this.IsWSRunning() && (webSocket.close(E),
                this.ko())
        }
            ;
        this.ko = function () {
            webSocket.onopen = g;
            webSocket.onmessage = g;
            webSocket.onclose = g;
            webSocket.onerror = g;
            fileReader.removeEventListener("loadend", loadEndListener)
        }
    }
    function a0g() {
        this.cN = 501;
        this.a3m = new Uint32Array(this.cN);
        this.rJ = new Uint32Array(this.cN);
        this.si = new Uint16Array(this.cN);
        this.lc = 0;
        this.a3n = 1;
        this.dM = 0;
        this.max = [0, 0, 0];
        this.at = 0;
        this.InGameStatsTexts = "Avg. Attack Strength;Number Attacks;Ships sent;Bots conquered;Humans conquered;Attacked by Bots;Attacked by Humans;Territorial Loss;Territorial Income;Interest Income;Received Support;Overall Income;Commanding Costs;Attack Losses;Defense Losses;Shipping Losses;Transmitted Support;Overall Expenses".split(";");
        this.bh = function () {
            this.lc = 0;
            this.a3n = 1;
            this.dM = 0;
            this.a3p();
            this.a3q()
        }
            ;
        this.d6 = function () {
            0 < this.dM-- || this.a3r()
        }
            ;
        this.a3r = function () {
            0 !== f1[localPlayerID] && (this.a3m[this.lc] = landSizeArray[localPlayerID],
                this.rJ[this.lc] = TroopBalance[localPlayerID],
                this.si[this.lc] = aq.sj(localPlayerID),
                this.a3s(this.lc),
                this.lc++,
                this.lc === this.cN && this.a3t(),
                this.dM = this.a3n - 1,
                hZ.bn())
        }
            ;
        this.a3t = function () {
            this.a3p();
            this.a3s(0);
            this.lc = 1 + ak(this.cN, 2);
            for (var g = 1; g < this.lc; g++)
                this.a3m[g] = this.a3m[2 * g],
                    this.rJ[g] = this.rJ[2 * g],
                    this.si[g] = this.si[2 * g],
                    this.a3s(g);
            this.a3n *= 2
        }
            ;
        this.a3p = function () {
            this.max[0] = this.max[1] = this.max[2] = 0
        }
            ;
        this.a3q = function () {
            this.at = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        }
            ;
        this.a3s = function (g) {
            this.max[0] = this.a3m[g] > this.max[0] ? this.a3m[g] : this.max[0];
            this.max[1] = this.rJ[g] > this.max[1] ? this.rJ[g] : this.max[1];
            this.max[2] = this.si[g] > this.max[2] ? this.si[g] : this.max[2]
        }
    }
    function a0h() {
        this.bk = this.pT = this.a3v = this.a3u = this.wV = this.mh = this.mg = this.tj = this.ti = this.hj = this.hi = this.co = this.bt = 0;
        this.lP = ["Territory", "Balance", "Interest", "Numbers"];
        this.kl = false;
        this.a3w = -1;
        this.a3x = false;
        this.bh = function () {
            this.kl = false;
            this.a3w = -1;
            this.a3x = false;
            this.lT()
        }
            ;
        this.lT = function () {
            this.bt = r < 1.618 * s ? r : 1.618 * s;
            this.bt = Math.floor((b_IsUISmall && r < s ? 1 : b_IsUISmall ? .8 : r < s ? .65 : .5) * this.bt);
            this.pT = Math.floor(1 + .006 * this.bt);
            this.bt -= b_IsUISmall && r < s ? 2 * ld + this.pT : 0;
            this.co = Math.floor(this.bt / 1.618);
            this.hi = Math.floor(1 + .02 * this.bt);
            this.mg = this.hj = Math.floor(1 + .04 * this.bt);
            this.mh = Math.floor(1 + .075 * this.bt);
            this.a3u = Math.floor(this.bt * (b_IsUISmall ? .028 : .02));
            this.a3u = 6 > this.a3u ? 6 : this.a3u;
            this.a3v = Math.floor(.028 * this.bt);
            this.a3v = 6 > this.a3v ? 6 : this.a3v;
            this.wV = this.co - 2 * this.mg - this.mh;
            this.kl && this.a3y()
        }
            ;
        this.bz = function (g, k) {
            if (!this.kl)
                return false;
            var x = g;
            var t = k;
            g -= ak(fx - this.bt, 2);
            k -= ak(c3 - this.co, 2);
            if (0 > g || 0 > k || g >= this.bt || k >= this.co) {
                if (1 < fZ.bz(x, t))
                    return true;
                this.ko();
                return true
            }
            if (k < this.co - this.mh)
                return this.a3x = true,
                    this.a3w = (g - 2 * this.hi - this.ti) / this.tj,
                    true;
            x = Math.floor(g / (this.bt / this.lP.length));
            x = 0 > x ? 0 : x >= this.lP.length ? this.lP.length - 1 : x;
            x !== this.bk && (this.bk = x,
                this.a3y(),
                bw.bx = true);
            return true
        }
            ;
        this.lK = function (g) {
            if (this.kl && this.a3x) {
                g -= ak(fx - this.bt, 2);
                var k = this.a3w;
                this.a3w = (g - 2 * this.hi - this.ti) / this.tj;
                if (0 <= this.a3w && 1 >= this.a3w || 0 <= k && 1 >= k)
                    bw.bx = true;
                return true
            }
            return false
        }
            ;
        this.oj = function () {
            this.a3x && (this.a3x = false)
        }
            ;
        this.lY = function () {
            this.kl ? this.ko() : this.show()
        }
            ;
        this.show = function () {
            2 > as.lc || (this.kl = true,
                this.a3y())
        }
            ;
        this.ko = function () {
            this.kl = false;
            this.a3w = -1
        }
            ;
        this.a3y = function () {
            2 > this.bk ? this.ti = bu.measureText(eC.g2(as.max[this.bk]), bl + this.a3u + bm) : 2 === this.bk && (this.ti = bu.measureText(dy.sY(6, 2), bl + this.a3u + bm));
            this.tj = this.bt - 2 * this.hi - this.ti - this.hj
        }
            ;
        this.bn = function () {
            this.kl && this.a3y()
        }
            ;
        this.c8 = function () {
            this.kl && this.mn()
        }
            ;
        this.mn = function () {
            var g = ak(fx - this.bt, 2);
            var k = ak(c3 - this.co, 2);
            c9.setTransform(1, 0, 0, 1, g, k);
            c9.fillStyle = colorBlack75opaque;
            c9.fillRect(0, 0, this.bt, this.co);
            this.a3z();
            c9.strokeRect(0, 0, this.bt, this.co);
            c9.textAlign = o0;
            c9.font = bl + this.a3u + bm;
            0 === this.bk ? this.a40(as.a3m, g, k) : 1 === this.bk ? this.a40(as.rJ, g, k) : 2 === this.bk ? this.a41(g, k) : 3 === this.bk && (this.a42(g, k),
                this.a43(g, k));
            c9.setTransform(1, 0, 0, 1, 0, 0)
        }
            ;
        this.a3z = function () {
            c9.lineWidth = this.pT;
            c9.textBaseline = cA;
            c9.textAlign = cB;
            c9.strokeStyle = colorWhite;
            c9.font = bl + this.a3v + bm;
            var g = this.bt / this.lP.length;
            c9.fillStyle = ne;
            c9.fillRect(this.bk * g, this.co - this.mh, g, this.mh);
            c9.fillStyle = colorWhite;
            for (var k = this.lP.length - 1; 0 <= k; k--)
                c9.strokeRect(k * g, this.co - this.mh, g, this.mh),
                    c9.fillText(this.lP[k], (k + .5) * g, this.co - .46 * this.mh)
        }
            ;
        this.a40 = function (g, k, x) {
            var t = as.max[this.bk];
            c9.setTransform(1, 0, 0, 1, k + 2 * this.hi + this.ti, x + this.mg);
            c9.lineWidth = 2;
            k = this.wV / Math.sqrt(t);
            c9.beginPath();
            c9.moveTo(this.tj, this.wV - k * Math.sqrt(g[as.lc - 1]));
            for (x = as.lc - 2; 0 <= x; x--)
                c9.lineTo(x * this.tj / (as.lc - 1), this.wV - k * Math.sqrt(g[x]));
            c9.stroke();
            g = this.lh(g, k, .5);
            .95 > g && c9.fillText(eC.g2(t), -this.hi, 0);
            .05 < Math.abs(g - .5) && c9.fillText(eC.g2(Math.floor(t / 4)), -this.hi, Math.floor(this.wV / 2));
            .05 < g && c9.fillText("0", -this.hi, this.wV)
        }
            ;
        this.a41 = function (g, k) {
            c9.setTransform(1, 0, 0, 1, g + 2 * this.hi + this.ti, k + this.mg);
            c9.lineWidth = 2;
            var x = this.wV / as.max[this.bk];
            c9.beginPath();
            c9.moveTo(this.tj, this.wV - x * as.si[as.lc - 1]);
            for (var t = as.lc - 2; 0 <= t; t--)
                c9.lineTo(t * this.tj / (as.lc - 1), this.wV - x * as.si[t]);
            c9.stroke();
            x = this.lh(as.si, x, 1);
            t = as.max[this.bk] / 100;
            .95 > x && c9.fillText(dy.sY(t, 2), -this.hi, 0);
            .05 < Math.abs(x - .5) && c9.fillText(dy.sY(t / 2, 2), -this.hi, Math.floor(this.wV / 2));
            .05 < x && c9.fillText(dy.sY(0, 2), -this.hi, this.wV)
        }
            ;
        this.a42 = function (g, k) {
            var x;
            c9.setTransform(1, 0, 0, 1, g + .34 * this.bt, k + 2 * this.mg);
            c9.textAlign = o0;
            var t = this.co - 4 * this.mg - this.mh;
            for (x = 7; 0 <= x; x--)
                c9.fillText(as.a3o[x], 0, x * t / 7);
            c9.setTransform(1, 0, 0, 1, g + .39 * this.bt, k + 2 * this.mg);
            c9.textAlign = m8;
            x = as.at[1];
            c9.fillText(dy.sY(as.at[0] / (10 * (1 > x ? 1 : x)), 1), 0, 0);
            for (x = 6; 1 <= x; x--)
                c9.fillText(as.at[x].toString(), 0, x * t / 7);
            c9.fillText(dy.sY(100 * (1 - landSizeArray[localPlayerID] / as.at[7]), 0), 0, t)
        }
            ;
        this.a43 = function (g, k) {
            var x;
            c9.setTransform(1, 0, 0, 1, g + .74 * this.bt, k + 2 * this.mg);
            c9.textAlign = o0;
            var t = this.co - 4 * this.mg - this.mh;
            c9.fillStyle = na;
            for (x = 2; 0 <= x; x--)
                c9.fillText(as.a3o[x + 8], 0, x * t / 9);
            c9.fillStyle = nZ;
            c9.fillText(as.a3o[11], 0, 3 * t / 9);
            c9.fillStyle = nq;
            for (x = 8; 4 <= x; x--)
                c9.fillText(as.a3o[x + 8], 0, x * t / 9);
            c9.fillStyle = np;
            c9.fillText(as.a3o[17], 0, 9 * t / 9);
            c9.fillStyle = na;
            x = eC.g2(as.at[8] + as.at[9] + as.at[10] + as.at[11]);
            var n = c9.measureText(x).width;
            c9.setTransform(1, 0, 0, 1, g + .79 * this.bt + n, k + 2 * this.mg);
            c9.fillText(eC.g2(as.at[8]), 0, 0);
            c9.fillText(eC.g2(as.at[9]), 0, 1 * t / 9);
            c9.fillText(eC.g2(as.at[10]), 0, 2 * t / 9);
            c9.fillStyle = nZ;
            c9.fillText(x, 0, 3 * t / 9);
            c9.fillStyle = nq;
            x = as.at[13] - aW.ya(localPlayerID);
            c9.fillText(eC.g2(as.at[12]), 0, 4 * t / 9);
            c9.fillText(eC.g2(x), 0, 5 * t / 9);
            c9.fillText(eC.g2(as.at[14]), 0, 6 * t / 9);
            c9.fillText(eC.g2(as.at[15]), 0, 7 * t / 9);
            c9.fillText(eC.g2(as.at[16]), 0, 8 * t / 9);
            x = as.at[12] + x + as.at[14] + as.at[15] + as.at[16] + as.at[17];
            c9.fillStyle = np;
            c9.fillText(eC.g2(x), 0, t);
            c9.fillStyle = colorWhite
        }
            ;
        this.lh = function (g, k, x) {
            if (0 > this.a3w || 1 < this.a3w)
                return .25;
            var t = this.a3w * (as.lc - 1);
            var n = Math.floor(t);
            var l = g[n];
            l += (t - n) * (g[n < as.lc - 1 ? n + 1 : n] - l);
            c9.strokeStyle = nu;
            .04 < this.a3w && this.a49(0, this.wV - k * Math.pow(l, x), t * this.tj / (as.lc - 1), this.wV - k * Math.pow(l, x));
            .04 < l / as.max[this.bk] && this.a49(t * this.tj / (as.lc - 1), this.wV, t * this.tj / (as.lc - 1), this.wV - k * Math.pow(l, x));
            c9.fillStyle = nl;
            c9.beginPath();
            c9.arc(t * this.tj / (as.lc - 1), this.wV - k * Math.pow(l, x), 4, 0, 2 * Math.PI);
            c9.fill();
            g = this.a3w * bw.sk();
            g = 0 === f1[localPlayerID] ? Math.floor(g * eI.sr) : Math.floor(g * bw.dL());
            c9.fillStyle = colorWhite;
            c9.fillText(1 === x ? dy.sY(l / 100, 2) : eC.g2(Math.floor(l)), -this.hi, this.wV - k * Math.pow(l, x));
            c9.textAlign = cB;
            c9.fillText(dy.rS(g), t * this.tj / (as.lc - 1), this.wV + this.a3u - (b_IsUISmall ? 2 : 0));
            c9.textAlign = o0;
            return k * Math.pow(l, x) / this.wV
        }
            ;
        this.a49 = function (g, k, x, t) {
            c9.beginPath();
            c9.moveTo(g, k);
            c9.lineTo(x, t);
            c9.stroke()
        }
    }
    function a0j() {
        this.w0 = "rgba(130,130,130,0.88) rgba(130,12,12,0.88) rgba(12,130,12,0.88) rgba(12,12,130,0.88) rgba(130,130,12,0.88) rgba(130,12,130,0.88) rgba(12,130,130,0.88) rgba(130,130,130,0.88) rgba(0,0,0,0.88)".split(" ");
        this.s6 = [colorWhite, "rgb(255,120,120)", "rgb(0,230,0)", "rgb(150,150,255)", "rgb(240,240,25)", "rgb(240,25,240)", "rgb(25,240,240)", colorWhite, "rgb(170,170,170)"];
        this.a4A = [colorWhite, "rgb(255,0,0)", "rgb(0,255,0)", "rgb(0,0,255)", "rgb(255,255,0)", "rgb(255,0,255)", "rgb(0,255,255)", colorWhite, colorBlack];
        this.a4B = [colorBlack, colorWhite, colorWhite, colorWhite, colorBlack, colorBlack, colorBlack, colorBlack, colorWhite];
        this.zW = ["rgba(255,255,255,", "rgba(0,0,0,", "rgba(210,210,210,", "rgba(45,45,45,"];
        this.zX = ["rgb(255,255,255)", "rgb(0,0,0)", "rgb(210,210,210)", "rgb(45,45,45)"];
        this.bg = "White Red Green Blue Yellow Magenta Cyan White Black".split(" ");
        this.sz = [[255, 255, 255, 180], [255, 0, 0, 180], [0, 255, 0, 180], [50, 50, 255, 180], [255, 255, 0, 180], [255, 0, 255, 180], [0, 255, 255, 180], [255, 255, 255, 180], [0, 0, 0, 180]];
        var g = [[255, 255, 255], [255, 0, 0], [0, 255, 0], [0, 0, 255], [255, 255, 0], [255, 0, 255], [0, 255, 255], [255, 255, 255], [0, 0, 0]];
        this.iQ = [0, 1, 2, 3, 4, 5, 6, 7, 8];
        var k;
        var x;
        this.bh = function (t) {
            this.dO = new Uint8Array(b0);
            this.a4H();
            d1 && (9 === gameMode ? this.a4I() : this.d6(t))
        }
            ;
        this.a4H = function () {
            for (var t = this.iQ.length - 1; 0 <= t; t--)
                this.iQ[t] = t;
            k = [];
            x = []
        }
            ;
        this.a4I = function () {
            var t;
            for (t = ci + dp.dq - 1; 0 <= t; t--)
                this.dO[t] = 1;
            for (t = ci + dp.dq; t < b0; t++)
                this.dO[t] = 2;
            this.iQ[1] = 7;
            this.iQ[2] = 8
        }
            ;
        this.d6 = function (t) {
            var n = new Uint8Array(ci);
            var l = new Uint8Array(ci);
            var z = new Uint16Array(8);
            var y = new Uint16Array(this.iQ.length);
            this.a4L(t, n, l, z);
            this.xY(z);
            isSingleplayer || this.a4M(y, n, l);
            this.a4N(n, l, y);
            isSingleplayer ? this.a4O() : this.a4P()
        }
            ;
        this.a4L = function (t, n, l, z) {
            var y;
            var A;
            var C = this.iQ.length - 1;
            var B = new Uint16Array(C);
            for (y = ci - 1; 0 <= y; y--) {
                for (A = C; 1 <= A; A--)
                    B[A - 1] = Math.abs(4 * t[y].wc[0] - g[A][0]) + Math.abs(4 * t[y].wc[1] - g[A][1]) + Math.abs(4 * t[y].wc[2] - g[A][2]);
                var F = 768;
                for (A = C - 1; 0 <= A; A--) {
                    var E = (A + y) % C;
                    B[E] < F && (F = B[E],
                        n[y] = E)
                }
                z[n[y]] += 4;
                F = 768;
                for (A = C - 1; 0 <= A; A--)
                    E = (A + y) % C,
                        B[E] < F && E !== n[y] && (F = B[E],
                            l[y] = E);
                z[l[y]]++
            }
        }
            ;
        this.xY = function (t) {
            var n;
            var l;
            var z = this.iQ.length - 1;
            for (n = z; 0 <= n; n--)
                this.iQ[n] = n;
            for (n = z - 1; 0 <= n; n--)
                t[n]++;
            for (n = 1; n <= z; n++) {
                var y = 0;
                for (l = 1; l < z; l++)
                    t[l] > t[y] && (y = l);
                t[y] = 0;
                this.iQ[n] = y + 1
            }
        }
            ;
        this.a4M = function (t, n, l) {
            var z = this.iQ.length - 1;
            var y = new Uint16Array(z);
            var A = [];
            var C = ci - 1;
            a: for (; 0 <= C; C--) {
                var B = C;
                var F = zt[B].indexOf("[");
                if (0 > F)
                    F = null;
                else {
                    var E = zt[B].indexOf("]");
                    F = 1 < E - F && 8 >= E - F ? zt[B].substring(F + 1, E).toUpperCase().trim() : null
                }
                if (null !== F) {
                    for (E = k.length - 1; 0 <= E; E--)
                        if (F === k[E]) {
                            x[E].push(C);
                            continue a
                        }
                    k.push(F);
                    A.push(false);
                    x.push([]);
                    x[k.length - 1].push(C)
                }
            }
            for (E = k.length - 1; 0 <= E; E--) {
                B = -1;
                for (F = k.length - 1; 0 <= F; F--)
                    !A[F] && (-1 === B || x[F].length > x[B].length) && (B = F);
                for (F = z - 1; 0 <= F; F--)
                    y[F] = 1;
                for (F = x[B].length - 1; 0 <= F; F--)
                    y[n[x[B][F]]] += 3,
                        y[l[x[B][F]]]++;
                for (C = z - 1; 0 <= C; C--) {
                    var J = B % z;
                    for (F = z - 1; 0 <= F; F--)
                        y[F] > y[J] && (J = F);
                    var G = -1;
                    for (F = iq; 0 < F; F--)
                        if (this.iQ[F] === J + 1) {
                            G = F;
                            break
                        }
                    y[J] = 0;
                    if (-1 !== G) {
                        J = 0;
                        for (F = iq; 0 < F; F--)
                            t[G] > t[F] && J++;
                        if (J !== iq - 1) {
                            for (F = x[B].length - 1; 0 <= F; F--)
                                t[G]++,
                                    this.dO[x[B][F]] = G;
                            break
                        }
                    }
                }
                A[B] = true
            }
        }
            ;
        this.a4N = function (t, n, l) {
            var z;
            var y = this.iQ.length - 1;
            var A = ak(ci, iq);
            0 < ci % iq && A++;
            var C = new Uint8Array(y + 1);
            for (z = y; 1 <= z; z--)
                C[this.iQ[z]] = z;
            for (y = 0; y < ci; y++)
                z = C[t[y] + 1],
                    0 === this.dO[y] && z <= iq && l[z] < A && (l[z]++,
                        this.dO[y] = z);
            for (y = 0; y < ci; y++)
                z = C[n[y] + 1],
                    0 === this.dO[y] && z <= iq && l[z] < A && (l[z]++,
                        this.dO[y] = z);
            for (z = iq; 1 <= z; z--)
                for (y = ci - 1; 0 <= y && !(l[z] >= A); y--)
                    0 === this.dO[y] && (l[z]++,
                        this.dO[y] = z)
        }
            ;
        this.a4O = function () {
            var t;
            var n = new Uint16Array(iq);
            n[iq - 1] = b0;
            for (t = iq - 2; 0 <= t; t--)
                n[t] = dk.dl[t].mK;
            n[0]--;
            var l = 0 === n[0] ? 1 : 0;
            for (t = ci; t < b0; t++)
                this.dO[t] = l + 1,
                    n[l]--,
                    0 >= n[l] && l++
        }
            ;
        this.a4P = function () {
            for (var t = ci; t < b0; t++)
                this.dO[t] = 1 + t % iq
        }
            ;
        this.iP = function (t) {
            if (isSingleplayer)
                return [512, ""];
            var n;
            var l;
            var z = -1;
            var y = -1;
            for (l = k.length - 1; 0 <= l; l--)
                for (n = x[l].length - 1; 0 <= n && this.iQ[this.dO[x[l][n]]] === t; n--)
                    if (-1 === z || rX[x[l][n]] < rX[z])
                        z = x[l][n],
                            y = l;
            return -1 === z || 0 === f1[z] ? [512, ""] : [z, k[y]]
        }
    }
    function bN() {
        for (x = aI - 1, void 0; 0 <= x; x--) {
            var g;
            var k;
            var x;
            g = ak(aK[x], 4) % aR,
                k = ak(aK[x], 4 * aR),
                cs[aE] = cs[aE] > g ? g : cs[aE],
                cv[aE] = cv[aE] > k ? k : cv[aE],
                cr[aE] = cr[aE] < g ? g : cr[aE],
                cu[aE] = cu[aE] < k ? k : cu[aE]
        }
    }
    function ab() {
        var g = aw[aE].length;
        var k;
        var x = g - 1;
        a: for (; 0 <= x; x--) {
            for (k = 3; 0 <= k; k--) {
                var t = aw[aE][x] + aN[k];
                if (ax.b8(t) || ax.b6(t) && ax.b7(t) !== aE) {
                    ax.cO(aw[aE][x], aE);
                    continue a
                }
            }
            aw[aE][x] = aw[aE][g - 1];
            aw[aE].pop();
            g--
        }
    }
    function ac() {
        var g = bE[aE].length;
        var k;
        var x;
        var t = g - 1;
        a: for (; 0 <= t; t--) {
            var n = x = false;
            for (k = 3; 0 <= k; k--) {
                var l = bE[aE][t] + aN[k];
                if (ax.xi(l, aE))
                    continue a;
                n = n || ax.xl(l);
                x = x || ax.xh(l)
            }
            n ? bF[aE].push(bE[aE][t]) : x ? bI[aE].push(bE[aE][t]) : ax.hH(bE[aE][t], aE);
            bE[aE][t] = bE[aE][g - 1];
            bE[aE].pop();
            g--
        }
    }
    function bC() {
        landSizeArray[aH] -= aI
    }
    function bD(g) {
        for (k = g.length, x = k - 1, void 0; 0 <= x; x--) {
            var k;
            var x;
            ax.hQ(aH, g[x]) || (g[x] = g[k - 1],
                g.pop(),
                k--)
        }
    }
    function bG(g) {
        for (k = g.length, x = k - 1, void 0; 0 <= x; x--) {
            var k;
            var x;
            !ax.hQ(aH, g[x]) && ax.ay(g[x]) && (g[x] = g[k - 1],
                g.pop(),
                k--)
        }
    }
    function bH(g) {
        for (k = g.length, n = k - 1, void 0; 0 <= n; n--) {
            var k;
            var x;
            var t;
            var n;
            for (x = 3; 0 <= x; x--)
                if (t = g[n] + aN[x],
                    ax.xi(t, aH)) {
                    bE[aH].push(g[n]);
                    g[n] = g[k - 1];
                    g.pop();
                    k--;
                    break
                }
        }
    }
    function bJ() {
        for (x = aI - 1, void 0; 0 <= x; x--) {
            var g;
            var k;
            var x;
            for (g = 3; 0 <= g; g--)
                k = aK[x] + aN[g],
                    ax.xj(aH, k) && ax.xk(k) && (bE[aH].push(k),
                        ax.az(k, aH))
        }
    }
    function bK() {
        var g;
        a: for (; cv[aH] < cu[aH];) {
            for (g = cr[aH]; g >= cs[aH]; g--)
                if (ax.hQ(aH, 4 * (cv[aH] * aR + g)))
                    break a;
            cv[aH]++
        }
        a: for (; cv[aH] < cu[aH];) {
            for (g = cr[aH]; g >= cs[aH]; g--)
                if (ax.hQ(aH, 4 * (cu[aH] * aR + g)))
                    break a;
            cu[aH]--
        }
        a: for (; cs[aH] < cr[aH];) {
            for (g = cu[aH]; g >= cv[aH]; g--)
                if (ax.hQ(aH, 4 * (g * aR + cs[aH])))
                    break a;
            cs[aH]++
        }
        a: for (; cs[aH] < cr[aH];) {
            for (g = cu[aH]; g >= cv[aH]; g--)
                if (ax.hQ(aH, 4 * (g * aR + cr[aH])))
                    break a;
            cr[aH]--
        }
    }
    function cZ(g, k) {
        return 0 === dN.dO[g] || dN.dO[g] !== dN.dO[k]
    }
    function lG(g, k) {
        var x;
        var t = aW.aX(g);
        for (x = 0; x < t; x++)
            if (0 === aW.aY(g, x)) {
                var n = aW.ad(g, x);
                if (n === b0) {
                    if (k === b0)
                        break;
                    if (lF(k))
                        return true
                } else if (k === b0) {
                    if (lF(n))
                        return true
                } else if (lJ(k, n))
                    return true
            }
        return false
    }
    function lF(g) {
        var k;
        var x;
        var t = bE[g].length;
        for (k = 3; 0 <= k; k--) {
            var n = aN[k];
            for (x = 0; x < t; x++)
                if (ax.b8(bE[g][x] + n))
                    return true
        }
        return false
    }
    function lJ(g, k) {
        var x;
        var t = bE[g].length;
        var n = bE[k].length;
        n < t && (t = g,
            g = k,
            k = t,
            t = n);
        for (x = 3; 0 <= x; x--) {
            var l = aN[x];
            for (n = 0; n < t; n++) {
                var z = bE[g][n] + l;
                if (ax.b6(z) && ax.b7(z) === k)
                    return true
            }
        }
        return false
    }
    function a0i() {
        function g() {
            bw.gL = performance.now();
            bw.a4j();
            window.requestAnimationFrame(g)
        }
        function k() {
            var x = performance.now();
            bw.gL + 1500 < x && (bw.gL = x,
                bw.a4j())
        }
        this.bx = false;
        this.a4l = this.a4k = this.a4j = null;
        this.gL = 0;
        this.a4m = -1;
        this.bh = function () {
            window.requestAnimationFrame(g);
            this.gL = performance.now()
        }
            ;
        this.a0m = function () {
            1 !== fK || !isSingleplayer || fZ.lS || fN || fZ.lY();
            -1 === this.a4m && (this.a4m = setInterval(k, 2E3))
        }
            ;
        this.ws = function () {
            -1 !== this.a4m && (clearInterval(this.a4m),
                this.a4m = -1)
        }
            ;
        this.jF = function () {
            this.a4j = this.a4p;
            this.a4k = null;
            this.bx = true
        }
            ;
        this.jB = function () {
            this.a4k = new a4q;
            this.a4j = this.a4r
        }
            ;
        this.jC = function () {
            this.a4l = new a4s;
            this.a4l.bh();
            this.a4j = this.a4t
        }
            ;
        this.a4p = function () {
            jH.d6();
            jK.d6();
            jT.d6();
            low_level_websocket.d6();
            eK.vU();
            c5.d6();
            this.bx && (this.bx = false,
                jL.c8())
        }
            ;
        this.a4r = function () {
            this.a4k.d6()
        }
            ;
        this.a4t = function () {
            this.a4l.d6()
        }
            ;
        this.dL = function () {
            return isSingleplayer ? this.a4k.vT : this.a4l.vT
        }
            ;
        this.sk = function () {
            return 56
        }
    }
    function a4q() {
        this.gL = bw.gL;
        this.a3n = 56;
        this.vT = this.bk = 0;
        this.a4u = false;
        this.d6 = function () {
            jT.d6();
            fN ? eO() : 0 === this.bk ? bw.gL >= this.gL && (this.gL += this.a3n * Math.floor(1 + (bw.gL - this.gL) / this.a3n),
                2 === fK || fZ.lS ? dv() : (e1(),
                    this.vT++,
                    gq.tB()),
                this.bk++) : (fZ.lS ? eO() : (bw.bx = true,
                    eM()),
                    this.bk = 0);
            eG();
            bw.bx && (bw.bx = false,
                hT())
        }
    }
    function a4s() {
        this.gL = bw.gL;
        this.a3n = 56;
        this.vS = this.vT = this.bk = 0;
        this.a4v = null;
        this.z8 = 7;
        var g;
        this.bh = function () {
            this.vS = 0;
            this.a4v = [];
            g = this.vT = this.bk = 0
        }
            ;
        this.a4w = function (k) {
            if (fN)
                this.sl(k);
            else if (this.a4v.push(k),
                2 === fK) {
                for (k = 0; k < this.a4v.length; k++)
                    jS.a4x(this.a4v[k], g),
                        g = (g + 1) % 8;
                this.a4v = []
            }
        }
            ;
        this.sl = function (k) {
            jS.a4x(k, g);
            g = (g + 1) % 8;
            dy.sl(this.vS);
            this.vS === is ? (fO.d6(),
                this.vT = this.bk = this.vS = 0,
                this.gL = bw.gL) : (this.vS++,
                    dx.ih(),
                    dx.eN(),
                    gq.tB())
        }
            ;
        this.d6 = function () {
            jT.d6();
            fN ? (bw.bx = dy.sl(-1) || bw.bx,
                eO()) : 0 === this.bk ? bw.gL >= this.gL && (this.gL += this.a3n * Math.floor(1 + (bw.gL - this.gL) / this.a3n),
                    2 === fK ? dv() : this.a4y(),
                    this.bk++) : (bw.bx = true,
                        eM(),
                        this.bk = 0);
            eG();
            bw.bx && (bw.bx = false,
                hT())
        }
            ;
        this.a4y = function () {
            if (this.vT !== 7 * this.vS)
                e1(),
                    this.vT++,
                    gq.tB();
            else {
                for (var k = false; this.a50();)
                    if (k = true,
                        e1(),
                        this.vT++,
                        0 < this.a4v.length)
                        for (var x = this.z8 - 2; 0 <= x; x--)
                            e1(),
                                this.vT++;
                    else
                        break;
                k ? gq.tB() : (dv(),
                    gq.ib())
            }
        }
            ;
        this.a50 = function () {
            return 0 < this.a4v.length ? (this.vS++,
                jS.a4x(this.a4v[0], g),
                g = (g + 1) % 8,
                this.a4v.shift(),
                true) : false
        }
    }
    function kN() {
        function SetWindowTitle(gameModeWinTitle, x) {
            8 !== jL.rG() || 0 !== x && x !== gameMode || isSingleplayer && fN || (dw.mQ(gameModeWinTitle),
                gameModeWinTitle += " - Territorial.io");
            0 === x && (document.title = gameModeWinTitle)
        }
        this.gF = 0;
        this.a51 = true;
        this.d6 = function () {
            bw.gL > this.gF && (this.gF = bw.gL + 1E3,
                this.a52())
        }
            ;
        this.a52 = function () {
            var k = new Date;
            var x = k.getUTCSeconds();
            this.a51 ? 55 > x || -1 !== bw.a4m || (k = k.getUTCMinutes(),
                4 === k % 5 ? (this.a51 = false,
                    14 === k % 30 ? SetWindowTitle("Upcoming Alliance Contest", 0) : 29 === k % 30 ? SetWindowTitle("Upcoming Battle Royale Contest", 0) : SetWindowTitle("Upcoming One-vs-One Game", 8)) : 2 === k % 5 && (this.a51 = false,
                        SetWindowTitle("Upcoming Zombie Game", 9))) : 55 > x && (this.a51 = true,
                            document.title = "Territorial.io")
        }
    }
    function kA() {
        function _DistBetweenTwoPts_nxlt() {
            return Math.pow(Math.pow(n - x, 2) + Math.pow(l - t, 2), .5)
        }
        function k(z) {
            x = z.touches[0].clientX;
            t = z.touches[0].clientY;
            n = z.touches[1].clientX;
            l = z.touches[1].clientY
        }
        var x;
        var t;
        var n;
        var l;
        this.ob = function (z) {
            return 1 < z.touches.length ? (k(z),
                hY.ko(),
                true) : false
        }
            ;
        this.og = function (z) {
            if (0 === fK)
                return false;
            if (1 < z.touches.length) {
                if (!eH.gi())
                    return true;
                var y = _DistBetweenTwoPts_nxlt();
                k(z);
                z = _DistBetweenTwoPts_nxlt();
                gR.qV(Math.floor((x + n) / 2), Math.floor((t + l) / 2), z / y);
                return bw.bx = true
            }
            return false
        }
    }
    function kB() {
        function g(n, l) {
            for (z = Array(n), y = 0, void 0; y < n; y++) {
                var z;
                var y;
                z[y] = k(l, 10);
            }
            return m.i8(z)
        }
        function k(n, l) {
            for (z = 0, C = t, void 0; C < t + l; C++) {
                var z;
                var y;
                var A;
                var C;
                y = ak(C, 8),
                    A = 7 - C % 8,
                    z |= (n[y] >> A & 1) << t + l - C - 1;
            }
            t += l;
            return z
        }
        var x;
        var t;
        this.on_message = function (websocket_state, content) {
            t = 0;
            content_length = content.length;
            if (content_length === 0)
                low_level_websocket.a0I(websocket_state, 3205);
            else {
                var z = k(content, 1);
                if (0 === z)
                    if (z = k(content, 2),
                        0 === z)
                        if (0 === k(content, 1)) {
                            if (0 === websocket_state && 8 !== jL.rG() && !(4 > content_length)) {
                                te.bj(0, g(k(content, 5), content));
                                te.bj(1, "[" + g(k(content, 3), content) + "]");
                                var y = k(content, 12);
                                var A = k(content, 6);
                                var C = Array(y);
                                for (z = 0; z < y; z++)
                                    C[z] = k(content, A);
                                jI.qy(C)
                            }
                        } else {
                            if (8 !== jL.rG())
                                if (3 > content_length)
                                    low_level_websocket.a0I(websocket_state, 3208);
                                else {
                                    y = k(content, 1);
                                    A = k(content, 16);
                                    C = k(content, 4);
                                    var B = [];
                                    for (z = 0; z < C; z++) {
                                        var F = k(content, 14);
                                        var E = k(content, 5);
                                        E = g(E, content);
                                        B.push({
                                            mP: E,
                                            hq: F
                                        })
                                    }
                                    0 === y ? c5.tX(0, B, 10, 1, .36, .55, A) : c5.tX(1, B, 100, 2, .47, .5, A)
                                }
                        }
                    else if (1 === z)
                        if (websocket_state !== low_level_websocket.mS)
                            low_level_websocket.close(websocket_state, 3239);
                        else if (6 === jL.rG() && jU.bh(),
                            7 !== jL.rG())
                            low_level_websocket.close(websocket_state, 3251);
                        else {
                            y = [0, 0, 0, 0];
                            A = k(content, 6);
                            for (z = 0; 4 > z; z++)
                                y[z] = k(content, A);
                            C = k(content, 4);
                            B = [];
                            for (z = 0; z < C; z++)
                                B.push({
                                    id: k(content, 5),
                                    iw: k(content, 4),
                                    wA: 1 === k(content, 1),
                                    mc: k(content, 6),
                                    w8: k(content, 14),
                                    wD: k(content, A),
                                    wE: k(content, 9) + 1,
                                    un: k(content, 10)
                                });
                            jU.tf(y, B)
                        }
                    else
                        2 !== z && 3 !== z || eK.bh(content);
                else
                    1 === z && (z = jL.rG(),
                        8 !== z ? 10 === z && low_level_websocket.a0I(websocket_state, 3243) : websocket_state !== low_level_websocket.jE ? low_level_websocket.a0I(websocket_state, 3244) : 0 === k(content, 1) ? bw.a4l.a4w(content) : (z = k(content, 2),
                            0 === z ? 3 !== content_length ? low_level_websocket.a0I(low_level_websocket.jE, 3230) : (z = k(content, 9),
                                y = k(content, 7),
                                0 !== f1[z] && 0 !== f1[localPlayerID] && (y %= a5.a6,
                                    dw.mG(z, localPlayerID, y),
                                    dx.mU(z, 1, y))) : 1 === z ? 2 !== content_length ? low_level_websocket.a0I(low_level_websocket.jE, 3235) : (z = k(content, 9),
                                        0 !== f1[z] && 0 !== f1[localPlayerID] && (dw.l6(50, z) || dw.l6(52, z) || dw.l7(z, 1))) : 3 !== content_length ? low_level_websocket.a0I(low_level_websocket.jE, 3236) : (z = k(content, 9),
                                            y = k(content, 9),
                                            0 === f1[z] || 0 === f1[y] || 0 === f1[localPlayerID] || dw.mW(50, z, y) || (dx.mU(z, 3, 96),
                                                dx.mU(y, 4, 96),
                                                dw.mV(z, y)))))
            }
        }
            ;
        this.vV = function (n) {
            t = 1;
            x = n.length;
            if (2 === k(n, 2)) {
                t += 20;
                for (l = k(n, 9), z = k(n, 14), y = k(n, 4), A = 1 === k(n, 1), C = k(n, 6), B = k(n, 14), F = k(n, 9) + 1, E = [], D = 0, void 0; D < F; D++) {
                    var l;
                    var z;
                    var y;
                    var A;
                    var C;
                    var B;
                    var F;
                    var E;
                    var J;
                    var G;
                    var H;
                    var D;
                    J = k(n, 1),
                        G = [k(n, 6), k(n, 6), k(n, 6)],
                        H = g(k(n, 5), n),
                        E.push({
                            mP: H,
                            wc: G,
                            wd: J
                        });
                }
                jL.ut();
                wK(C, B);
                1 === E.length && dk.wX(y);
                it(z, l, E, y, A)
            } else {
                t += 20;
                l = k(n, 1);
                z = k(n, 14);
                y = k(n, 4);
                A = 1 === k(n, 1);
                C = k(n, 6);
                B = k(n, 14);
                F = [];
                for (D = 0; 2 > D; D++)
                    E = k(n, 1),
                        J = [k(n, 6), k(n, 6), k(n, 6)],
                        G = k(n, 14),
                        H = g(k(n, 5), n),
                        F.push({
                            mP: H,
                            wc: J,
                            hq: G,
                            wd: E
                        });
                jL.ut();
                wK(C, B);
                it(z, l, F, y, A)
            }
        }
            ;
        this.vQ = function (n) {
            t = 1;
            x = n.length;
            var l = k(n, 2);
            var z = k(n, 10);
            eK.vJ = low_level_websocket.mS;
            if (low_level_websocket.mS === z)
                return low_level_websocket.jE = z,
                    false;
            low_level_websocket.close(low_level_websocket.mS, 3247);
            low_level_websocket.jE = z;
            eK.vK = k(n, 10);
            eK.vL = k(n, 2 === l ? 9 : 1);
            low_level_websocket.qu(z, 5) && iU.a0F();
            return true
        }
            ;
        this.a4x = function (n, l) {
            t = 2;
            var z = 8 * n.length;
            if (k(n, 3) !== l)
                low_level_websocket.a0I(low_level_websocket.jE, 3248);
            else
                for (; t + 8 <= z;) {
                    var y = k(n, 3);
                    var A = k(n, 9);
                    if (0 === y) {
                        y = k(n, 10);
                        var C = k(n, 9);
                        C = C === A ? b0 : C;
                        e3.fJ(A, y, C)
                    } else if (1 === y) {
                        y = k(n, 10);
                        C = k(n, 11);
                        var B = k(n, 11);
                        e3.fM(A, y, C, B)
                    } else
                        2 === y ? (C = k(n, 9),
                            C = C === A ? b0 : C,
                            e3.fP(A, C)) : 3 === y ? e3.fS(A) : 4 === y ? (y = k(n, 7),
                                dx.mU(A, 0, y)) : 5 === y ? e3.fY(A) : 6 === y ? e3.fR(A, k(n, 1)) : 7 === y && e3.fQ(A, 1 + k(n, 11))
                }
        }
    }
    function a0f() {
        this.a3X = this.a3W = this.a3V = this.a3U = this.a3Z = this.a3Y = 0;
        this.tC = [0, 0, 0, 0];
        this.gh = function () {
            this.a3Y = gR.fy();
            this.a3Z = gR.c7();
            this.a3U = -this.a3Y;
            this.a3V = -this.a3Z;
            this.a3W = fx / fq;
            this.a3X = c3 / fq;
            this.tC[0] = Math.floor(this.a3U);
            this.tC[1] = Math.floor(this.a3V);
            this.tC[2] = Math.floor(this.tC[0] + this.a3W + 1);
            this.tC[3] = Math.floor(this.tC[1] + this.a3X + 1);
            gq.t9 = true
        }
    }
    function kC() {
        var g;
        var k;
        this.bh = function () {
            g = 1;
            k = 0
        }
            ;
        this.d6 = function () {
            0 < g && (k = 0 === k ? bw.gL + 16 : k,
                g -= .001 * (bw.gL - k),
                g = 0 > g ? 0 : g,
                k = bw.gL,
                bw.bx = true)
        }
            ;
        this.c8 = function () {
            0 < g && (c9.fillStyle = "rgba(0,0,0," + g + ")",
                c9.fillRect(0, 0, fx, c3))
        }
    }
    function kH() {
        this.kl = false;
        this.wW = [0, 0, 0, 0];
        this.show = function () {
            this.kl = true;
            this.lT();
            bw.bx = true
        }
            ;
        this.lT = function () {
            this.wW[2] = b_IsUISmall ? Math.floor(.75 * oX) : Math.floor(.5 * oX);
            this.wW[3] = Math.floor(1.2 * this.wW[2]);
            this.wW[0] = Math.floor((r - this.wW[2]) / 2);
            this.wW[1] = Math.floor((s - this.wW[3]) / 2)
        }
            ;
        this.lK = function (g, k) {
            return g < this.wW[0] || k < this.wW[1] || g > this.wW[0] + this.wW[2] || k > this.wW[1] + this.wW[3] ? false : true
        }
            ;
        this.bz = function (g, k) {
            bw.bx = true;
            if (g < this.wW[0] || k < this.wW[1] || g > this.wW[0] + this.wW[2] || k > this.wW[1] + this.wW[3])
                return this.kl = false,
                    true;
            var x = Math.floor(.13 * this.wW[3]);
            if (k < this.wW[1] + x)
                return g > this.wW[0] + this.wW[2] - 1.2 * x && (this.kl = false),
                    true;
            x = Math.floor(7 * (k - this.wW[1] - x) / (this.wW[3] - x));
            x = 0 > x ? 0 : 6 < x ? 6 : x;
            g > this.wW[0] + this.wW[2] / 2 && (x += 7);
            wK(x, Math.floor(16384 * Math.random()));
            return true
        }
            ;
        this.c8 = function () {
            var g;
            var k = Math.floor(.13 * this.wW[3]);
            var x = (this.wW[3] - k - 8 * c2) / 7;
            var t = Math.floor((this.wW[2] - 3 * c2) / 2);
            c9.lineWidth = 2;
            c9.textAlign = cB;
            c9.textBaseline = cA;
            c9.font = bl + Math.floor(.48 * x) + bm;
            c9.fillStyle = colorBlack75opaque;
            c9.fillRect(this.wW[0], this.wW[1], this.wW[2], this.wW[3]);
            c9.fillStyle = nX;
            c9.fillRect(this.wW[0], this.wW[1], this.wW[2], k);
            c9.strokeStyle = colorWhite;
            c9.strokeRect(this.wW[0], this.wW[1], this.wW[2], this.wW[3]);
            c9.fillStyle = colorWhite;
            for (g = 6; 0 <= g; g--) {
                var n = Math.floor(this.wW[1] + k + c2 + g * (x + c2));
                mc === g ? (c9.fillStyle = nX,
                    c9.fillRect(this.wW[0] + c2, n, t, x),
                    c9.fillStyle = colorWhite) : mc === g + 7 && (c9.fillStyle = nX,
                        c9.fillRect(this.wW[0] + t + 2 * c2, n, t, x),
                        c9.fillStyle = colorWhite);
                c9.strokeRect(this.wW[0] + c2, n, t, x);
                c9.strokeRect(this.wW[0] + t + 2 * c2, n, t, x);
                c9.fillText(jP.br(g).mP, Math.floor(this.wW[0] + c2 + t / 2), Math.floor(n + .5 * x));
                c9.fillText(jP.br(g + 7).mP, Math.floor(this.wW[0] + this.wW[2] - c2 - t / 2), Math.floor(n + .5 * x))
            }
            fZ.lh(Math.floor(this.wW[0] + this.wW[2] - .8 * k), Math.floor(this.wW[1] + .25 * k), Math.floor(.5 * k));
            c9.setTransform(1, 0, 0, 1, 0, 0)
        }
    }
    function WebSocketAPI() {
        function g(l) {
            var z = j();
            var y = Math.floor(z / 16777216);
            write_bits(l, 24, y);
            write_bits(l, 24, z - 16777216 * y)
        }
        function k(l) {
            write_bits(l, 14, version);
            write_bits(l, 4, b ? 2 : 12 <= d ? 1 : 0 < d ? 3 : 0);
            write_bits(l, 1, isURLTerritorialIo ? 1 : 0);
            write_bits(l, 1, a0R ? 1 : 0);
            write_bits(l, 5, (new Date).getHours() % 24)
        }
        function bit_to_bytes(l) { // This is just a ceiling division
            return ak(l, 8) + (0 < l % 8 ? 1 : 0)
        }
        function write_bits(array, length, bits) {
            for (B = n, void 0; B < n + length; B++) {
                var A;
                var C;
                var B;
                A = ak(B, 8),
                    C = 7 - B % 8,
                    array[A] |= (bits >> length - (B - n + 1) & 1) << C;
            }
            n += length
        }
        var n;
        this.menu_socket_welcome = function () { // WebSocket opens when the page is loaded
            var packet = new Uint8Array(3);
            n = 0;
            write_bits(packet, 1, 0); // Game state (lobby / menu, 0)
            write_bits(packet, 3, 0); // Packet id
            write_bits(packet, 14, version);
            low_level_websocket.send(0, packet)
        }
            ;
        this.join_lobby = function (l) {
            var nickname = m.encode_string(jG.nickname());
            var nickname_length = nickname.length;
            var packet = new Uint8Array(bit_to_bytes(105 + 10 * nickname_length)); // 105 bits for fields, 10 bits for each character in the nickname
            n = 0; // Set array iterator to 0
            write_bits(packet, 1, 0); // Game state (lobby)
            write_bits(packet, 3, 1); // Packet id
            write_bits(packet, 10, a0T);
            var color = c4.lk[2].iL.color();
            write_bits(packet, 6, color[0]); // R, G, B, 18-bit color
            write_bits(packet, 6, color[1]);
            write_bits(packet, 6, color[2]);
            g(packet);
            k(packet);
            for (C = 0; C < nickname_length; C++)
                write_bits(packet, 10, nickname[C]);
            low_level_websocket.mS = l;
            low_level_websocket.send(l, packet)
        }
            ;
        this.get_top = function (l, type) {
            // Type: 0 -> players, 1 -> clans
            var packet = new Uint8Array(5);
            n = 0;
            write_bits(packet, 1, 0); // Game state, lobby
            write_bits(packet, 3, 7); // Packet id, 7
            write_bits(packet, 3, 0);
            write_bits(packet, 14, version);
            write_bits(packet, 1, type);
            write_bits(packet, 16, Math.abs(4096 + c5.position[type] + c5.tU[type]) % 65536);
            low_level_websocket.send(l, packet)
        }
            ;
        this.a0G = function (l) {
            var z;
            var y = new Uint8Array(100);
            n = 0;
            write_bits(y, 1, 0);
            write_bits(y, 3, 7);
            write_bits(y, 3, 1);
            write_bits(y, 14, a0V);
            var A = m.encode_string(a0W);
            var C = FindMin(A.length, 77);
            write_bits(y, 7, C);
            for (z = 0; z < C; z++)
                write_bits(y, 10, A[z]);
            low_level_websocket.send(l, y)
        }
            ;
        this.wz = function (l) {
            var z;
            if (!(jG.wp + 7E3 > bw.gL)) {
                jG.wp = bw.gL;
                var y = new Uint8Array(17);
                n = 0;
                write_bits(y, 1, 0);
                write_bits(y, 3, 7);
                write_bits(y, 3, 2);
                g(y);
                var A = FindMax(jG.wo.length - 20, 0);
                for (z = jG.wo.length - 1; z >= A; z--)
                    write_bits(y, 4, Math.abs(jG.wo.charCodeAt(z) - 48) % 10);
                low_level_websocket.send(l, y)
            }
        }
            ;
        this.a07 = function (l, z) {
            var y = new Uint8Array(1);
            n = 0;
            write_bits(y, 1, 0);
            write_bits(y, 3, 5);
            write_bits(y, 1, z ? 1 : 0);
            low_level_websocket.send(l, y)
        }
            ;
        this.join_game = function (game_id) { // game_id is a half-byte number (0-15); every new game id is 1 more than previous (0, 1, 2, ..., 14, 15 --> 0, 1...)
            // First call to this method adds client to (game_id) queue, second call removes client from it if the game_id is the same as in first call, otherwise
            // reassings client to (game_id) queue
            var packet = new Uint8Array(1);
            n = 0; // Set array iterator to 0
            write_bits(packet, 1, 0); // Game state (lobby)
            write_bits(packet, 3, 2); // Packet id
            write_bits(packet, 4, game_id); // 4-bit (as written before) number
            low_level_websocket.send(low_level_websocket.mS, packet)
        }
            ;
        this.a0F = function () {
            var l = new Uint8Array(7);
            n = 0;
            write_bits(l, 1, 0);
            write_bits(l, 3, 6);
            write_bits(l, 8, eK.vJ);
            write_bits(l, 10, eK.vK);
            write_bits(l, 9, eK.vL);
            write_bits(l, 10, a0T);
            write_bits(l, 14, version);
            low_level_websocket.send(low_level_websocket.jE, l)
        }
            ;
        this.l2 = function (l, z) {
            var y = new Uint8Array(3);
            n = 0;
            write_bits(y, 1, 1);
            write_bits(y, 3, 0);
            write_bits(y, 10, l);
            write_bits(y, 9, z);
            low_level_websocket.send(low_level_websocket.jE, y)
        }
            ;
        this.l4 = function (l, z, y) {
            var A = new Uint8Array(5);
            n = 0;
            write_bits(A, 1, 1);
            write_bits(A, 3, 1);
            write_bits(A, 10, l);
            write_bits(A, 11, z);
            write_bits(A, 11, y);
            low_level_websocket.send(low_level_websocket.jE, A)
        }
            ;
        this.pH = function (l) {
            var z = new Uint8Array(2);
            n = 0;
            write_bits(z, 1, 1);
            write_bits(z, 3, 2);
            write_bits(z, 1, 0);
            write_bits(z, 9, l);
            low_level_websocket.send(low_level_websocket.jE, z)
        }
            ;
        this.pI = function (l) {
            var z = new Uint8Array(2);
            n = 0;
            write_bits(z, 1, 1);
            write_bits(z, 3, 2);
            write_bits(z, 1, 1);
            write_bits(z, 11, l - 1);
            low_level_websocket.send(low_level_websocket.jE, z)
        }
            ;
        this.iV = function (l, z) {
            var y = new Uint8Array(4);
            n = 0;
            write_bits(y, 1, 1);
            write_bits(y, 3, 3);
            write_bits(y, 12, l);
            write_bits(y, 10, z);
            low_level_websocket.send(low_level_websocket.jE, y)
        }
            ;
        this.lb = function () {
            var l = new Uint8Array(1);
            n = 0;
            write_bits(l, 1, 1);
            write_bits(l, 3, 4);
            low_level_websocket.send(low_level_websocket.jE, l)
        }
            ;
        this.nP = function (l) {
            var z = new Uint8Array(2);
            n = 0;
            write_bits(z, 1, 1);
            write_bits(z, 3, 5);
            write_bits(z, 7, l);
            low_level_websocket.send(low_level_websocket.jE, z)
        }
            ;
        this.nQ = function (l, z) {
            dw.mG(localPlayerID, z, l);
            var y = new Uint8Array(3);
            n = 0;
            write_bits(y, 1, 1);
            write_bits(y, 3, 6);
            write_bits(y, 2, 0);
            write_bits(y, 9, z);
            write_bits(y, 7, l);
            low_level_websocket.send(low_level_websocket.jE, y)
        }
            ;
        this.l8 = function (l) {
            var z = new Uint8Array(2);
            n = 0;
            write_bits(z, 1, 1);
            write_bits(z, 3, 6);
            write_bits(z, 2, 1);
            write_bits(z, 9, l);
            low_level_websocket.send(low_level_websocket.jE, z)
        }
            ;
        this.ky = function (l, z) {
            var y;
            var A = l.length;
            var C = new Uint8Array(bit_to_bytes(15 + 9 * A));
            n = 0;
            write_bits(C, 1, 1);
            write_bits(C, 3, 6);
            write_bits(C, 2, 2);
            write_bits(C, 9, z);
            for (y = 0; y < A; y++)
                write_bits(C, 9, l[y]);
            low_level_websocket.send(low_level_websocket.jE, C)
        }
            ;
        this.ps = function (l) {
            var z = new Uint8Array(1);
            n = 0;
            write_bits(z, 1, 1);
            write_bits(z, 3, 7);
            write_bits(z, 1, l ? 1 : 0);
            low_level_websocket.send(low_level_websocket.jE, z)
        }
            ;
        this.wa = function (l) {
            var z = new Uint8Array(4);
            n = 0;
            write_bits(z, 1, 0);
            write_bits(z, 3, 3);
            k(z);
            low_level_websocket.send(l, z)
        }
    }
    a0X();
}
)();
