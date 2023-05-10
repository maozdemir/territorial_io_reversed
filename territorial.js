(function () {
        function generateUsername() {
            if (g_isIOSUser)
                return c.username;
            if (12 <= d) {
                var playerUsername = e.loadString(20);
                "" === playerUsername && (playerUsername = "Android User " + Math.floor(1E3 * Math.random()),
                    e.saveString(20, playerUsername))
            } else
                5 <= d ? (playerUsername = e.loadString(0),
                "" === playerUsername && (playerUsername = "Player " + Math.floor(1E3 * Math.random()),
                    e.saveString(0, playerUsername))) : playerUsername = f.g(0);
            return playerUsername
        }

        function h() {
            i = Math.floor(1 + Math.random() * (Math.pow(2, 30) - 1));
            if (g_isIOSUser)
                i = c.id;
            else if (12 <= d) {
                var g = e.loadNumber(20);
                -1 === g ? e.saveNumber(20, i) : i = g
            } else
                5 <= d ? (g = e.loadNumber(2),
                    2 === g ? e.saveNumber(2, i + 3) : i = g - 3) : i = f.g(1)
        }

        function generatePassword() {
            var playerPassword = 0;
            if (g_isIOSUser)
                playerPassword = c.password;
            else if (12 <= d)
                playerPassword = e.loadString(22);
            else {
                if (5 <= d)
                    return playerPassword;
                playerPassword = f.g(9)
            }
            var k = Math.floor(Math.pow(2, 48));
            playerPassword = Math.floor(parseInt(m.n(playerPassword)));
            if (0 < playerPassword && playerPassword < k)
                return playerPassword;
            playerPassword = Math.floor(1 + (k - 1) * Math.random());
            return o(playerPassword) ? playerPassword : 0
        }

        function p() {
            if (g_isIOSUser)
                q = c.zoom || r < s;
            else if (12 <= d) {
                var g = e.loadNumber(21);
                -1 === g ? (q = 100 >= e.getNumber(0) || r < s,
                    e.saveNumber(21, q ? 1 : 0)) : q = 1 === g || r < s
            } else
                5 <= d ? (g = e.loadNumber(1),
                    2 === g ? (q = true,
                        e.saveNumber(1, q ? 1 : 0)) : q = 1 === g) : q = 0 === f.g(4) || r < s
        }

        function u() {
            return g_isIOSUser ? c.emojis : 5 <= d ? e.loadString(1) : f.g(7)
        }

        function v() {
            return g_isIOSUser ? c.colors : 12 <= d ? e.loadString(21) : 5 <= d ? e.loadString(2) : f.g(8)
        }

        function w(g) {
            if (g_isIOSUser)
                window.webkit.messageHandlers.iosCommandA.postMessage("username " + g);
            else if (12 <= d)
                e.saveString(20, g),
                    e.setState(10);
            else if (5 <= d)
                e.saveString(0, g);
            else {
                if (3 > g.length || 0 <= g.indexOf(";"))
                    g = "Player 666";
                f.x(0, g);
                f.y()
            }
        }

        function o(g) {
            g = m.z(g.toString());
            return g_isIOSUser ? (c.password = g,
                window.webkit.messageHandlers.iosCommandA.postMessage("password " + g),
                true) : 12 <= d ? (e.saveString(22, g),
                true) : 5 <= d ? false : 2 === f.a0() ? (f.x(9, g),
                f.y(),
                true) : false
        }

        function a1(g, k) {
            g_isIOSUser ? (window.webkit.messageHandlers.iosCommandA.postMessage("zoom " + (g ? 1 : 0)),
                window.webkit.messageHandlers.iosCommandA.postMessage("sound " + (k ? 1 : 0))) : 12 <= d ? (e.saveNumber(22, k ? 1 : 0),
                e.saveNumber(21, g ? 1 : 0)) : 5 <= d ? (e.saveNumber(1, g ? 1 : 0),
                e.saveNumber(11, k ? 1 : 0)) : (f.x(2, k ? 1 : 0),
                f.x(4, g ? 0 : 1),
                f.y())
        }

        function a3() {
            for (var g = "", k = 0; k < a5.a6; k += 2)
                g += a5.a7[k] || a5.a7[k + 1] ? a5.a7[k] && !a5.a7[k + 1] ? "1" : !a5.a7[k] && a5.a7[k + 1] ? "2" : "3" : "0";
            g_isIOSUser ? window.webkit.messageHandlers.iosCommandA.postMessage("emojis " + g) : 5 <= d ? e.saveString(1, g) : (f.x(7, g),
                f.y())
        }

        function a8(g) {
            if (g_isIOSUser)
                window.webkit.messageHandlers.iosCommandA.postMessage("colors " + g);
            else {
                if (12 <= d)
                    e.saveString(21, g);
                else if (5 <= d) {
                    e.saveString(2, g);
                    return
                }
                f.x(8, g);
                f.y()
            }
        }

        function a9(g) {
            g_isIOSUser || 5 <= d && e.setState(g)
        }

        function aB() {
            g_isIOSUser ? window.webkit.messageHandlers.iosCommandA.postMessage("show ad 1800000") : 12 <= d && e.presentAd(18E5)
        }

        function aC() {
            g_isIOSUser ? location.reload() : 7 <= d ? e.setState(5) : location.reload()
        }

        function aD() {
            14 > d || e.saveString(23, '<!DOCTYPE html>\n<html lang="aG">\n' + document.getElementsByTagName("html")[0].innerHTML + "\n</html>")
        }

        self.aiCommand746 = function (g) {
            0 === g ? aI() : 1 !== g || 14 > d || aJ.aK()
        }
        ;
        var aL, aM, aN, aO, aP, aQ, aR, aS, aT, aU, aV, aW, aX;

        function aY() {
            aQ = 0;
            aR = 2048;
            aS = new Uint32Array(4 * aR);
            aT = 0;
            aU = new Uint32Array(aR);
            aV = new Int32Array(4);
            aV[0] = -4 * aZ;
            aV[1] = 4;
            aV[2] = -aV[0];
            aV[3] = -aV[1];
            aW = new Uint8Array(aZ * aa)
        }

        function ab(g) {
            aM = g;
            aX = false;
            ac();
            ad();
            for (g = ae.af(aM) - 1; 0 <= g; g--)
                0 === ae.ag(aM, g) && (aL = g,
                    ah());
            aX && ai()
        }

        function ai() {
            aj();
            ak()
        }

        function ah() {
            aP = ae.al(aM, aL);
            aN = ae.am(aM, aL);
            an();
            0 === aQ ? ao() : (ap(),
                aq() ? ar() : ao())
        }

        function aq() {
            aO = as(aN, aQ);
            return aO > at
        }

        function ap() {
            var g;
            for (g = aQ - 1; 0 <= g; g--)
                aW[as(aS[g], 4)] = 0
        }

        function ao() {
            1 === ae.af(aM) && au.av(aM);
            if (aM !== g_localPlayerIndex)
                g_playerBalanceArray[aM] += aN,
                    ay.az(aM);
            else {
                var g = g_playerBalanceArray[aM];
                g_playerBalanceArray[aM] += aN;
                ay.az(aM);
                b0.b1[13] -= g_playerBalanceArray[aM] - g
            }
            ae.b2(aM, aL)
        }

        function ac() {
            var g = b4[aM].length;
            g = g > aR ? aR : g;
            aT = 0;
            for (--g; 0 <= g; g--)
                aU[aT++] = b4[aM][g]
        }

        function ad() {
            var g;
            for (g = b4[aM].length - 1; 0 <= g; g--)
                b5.b6(b4[aM][g]) && b5.b7(b4[aM][g], aM);
            b4[aM] = []
        }

        function an() {
            aQ = 0;
            aP === g_unclaimedLandIndex ? b9() : bA()
        }

        function bA() {
            var g, k;
            for (g = 3; 0 <= g; g--)
                for (k = aT - 1; 0 <= k; k--) {
                    var t = aU[k] + aV[g];
                    var l = as(t, 4);
                    0 === aW[l] && b5.bE(t) && b5.bF(t) === aP && (aW[l] = 1,
                        aS[aQ++] = t)
                }
        }

        function b9() {
            var g, k;
            for (g = 3; 0 <= g; g--)
                for (k = aT - 1; 0 <= k; k--) {
                    var t = aU[k] + aV[g];
                    var l = as(t, 4);
                    0 === aW[l] && b5.bG(t) && (aW[l] = 1,
                        aS[aQ++] = t)
                }
        }

        function ar() {
            bH() ? (bI(),
            aP !== g_unclaimedLandIndex && bJ()) : ao()
        }

        function bJ() {
            bK();
            bL(bM[aP]);
            bL(bN[aP]);
            bO(b4[aP]);
            bP(bN[aP]);
            bP(bQ[aP]);
            bR();
            bS()
        }

        function bI() {
            aX = true;
            ae.bT(aM, aL, aN);
            g_playerLandArray[aM] += aQ;
            bV();
            bW()
        }

        function bH() {
            return aP === g_unclaimedLandIndex ? bX() : bY()
        }

        function bY() {
            var g = aQ * at
                , k = bb()
                , t = bd();
            k = g + 2 * k + t;
            var l = aO * aQ;
            if (l > k)
                return aN -= k,
                    bg(k - g, t),
                    true;
            aN -= l;
            bg(l - g, t);
            return false
        }

        function bg(g, k) {
            if (0 < k)
                if (g >= k)
                    ae.bh(aP, aM, 0),
                        g -= k;
                else {
                    ae.bh(aP, aM, k - g);
                    return
                }
            g = as(g, 2);
            g_playerBalanceArray[aP] = g_playerBalanceArray[aP] >= g ? g_playerBalanceArray[aP] - g : 0
        }

        function bd() {
            return ae.bi(aP, aM)
        }

        function bb() {
            return as(aQ * g_playerBalanceArray[aP], 1 + bj() * bk())
        }

        function bj() {
            return Math.floor(2 + bl(as(g_playerLandArray[aP], 100), 8))
        }

        function bk() {
            return bM[aP].length + as(bN[aP].length + bQ[aP].length, 50)
        }

        function bX() {
            aN -= aQ * at;
            return true
        }

        function bW() {
            for (var g = aQ - 1; 0 <= g; g--)
                b4[aM].push(aS[g]),
                    bM[aM].push(aS[g]),
                    b5.b7(aS[g], aM)
        }

        function bm() {
            var g = 1
                , k = [null, null];
            this.bp = function () {
                g = .72 * (q ? .0011 : .001) * bq;
                for (var t = 1; 0 <= t; t--)
                    k[t] && this.br(t, k[t].l)
            }
            ;
            this.br = function (t, l) {
                k[t] = {
                    l: l,
                    font: bt + 10 + bu
                };
                this.bv(t)
            }
            ;
            this.bv = function (t) {
                if (bw.bx() && k[t]) {
                    var l = k[t].l
                        , x = Math.floor(.15 * g * bw.bz(13).height)
                        , n = bt + x + bu
                        , z = c2.measureText(l, n)
                        , y = .8 * g * bw.bz(13).width;
                    z > y && (x = Math.floor(x * y / z),
                        n = bt + x + bu);
                    k[t] = {
                        l: l,
                        font: n
                    };
                    c4.c5 = true
                }
            }
            ;
            this.c6 = function () {
                return Math.floor(g * bw.bz(13).height)
            }
            ;
            this.c7 = function (t, l) {
                return !bw.bx() || t < cA || l < cB - cC.c1 - g * bw.bz(13).height - 2 * cA || l > cB - cC.c1 - 2 * cA ? false : t < cA + g * bw.bz(13).width ? (cD.cE(0),
                    true) : t < 2 * cA + g * bw.bz(13).width ? false : t < 2 * cA + 2 * g * bw.bz(13).width ? (cD.cE(1),
                    true) : false
            }
            ;
            this.cF = function () {
                return Math.floor(cB - cC.c1 - g * bw.bz(13).height - 2 * cA)
            }
            ;
            this.cG = function () {
                if (bw.bx()) {
                    cH.imageSmoothingEnabled = true;
                    cH.setTransform(g, 0, 0, g, cA, this.cF());
                    cH.drawImage(bw.bz(14), 0, 0);
                    cH.setTransform(g, 0, 0, g, 2 * cA + g * bw.bz(13).width, this.cF());
                    cH.drawImage(bw.bz(13), 0, 0);
                    for (var t = 1; 0 <= t; t--)
                        k[t] && (cH.setTransform(1, 0, 0, 1, (1 + t) * cA + t * g * bw.bz(13).width, this.cF()),
                            cH.font = k[t].font,
                            cH.textBaseline = cI,
                            cH.textAlign = cJ,
                            cH.fillStyle = cK,
                            cH.fillText(k[t].l, .5 * g * bw.bz(13).width, .86 * g * bw.bz(13).height));
                    cH.setTransform(1, 0, 0, 1, 0, 0)
                }
            }
        }

        function cL(g, k, t, l) {
            var x = as(3 * g_playerBalanceArray[g], 256);
            l -= l >= as(g_playerBalanceArray[g], 2) ? x : 0;
            cP(t, g);
            ae.cQ(g, l, k);
            g_playerBalanceArray[g] -= l + x;
            au.cR(g, false)
        }

        function cS(g, k) {
            var t, l;
            for (t = bM[g].length - 1; 0 <= t; t--)
                if (b5.cU(bM[g][t]))
                    for (l = 3; 0 <= l; l--)
                        if (b5.bE(bM[g][t] + aV[l]) && b5.bF(bM[g][t] + aV[l]) === k) {
                            b4[g].push(bM[g][t]);
                            break
                        }
        }

        function cP(g, k) {
            for (var t = b4[k].length - 1; t >= g; t--)
                b5.cW(b4[k][t], k)
        }

        function cX(g) {
            for (var k, t = bM[g].length - 1; 0 <= t; t--)
                if (b5.cU(bM[g][t]))
                    for (k = 3; 0 <= k; k--)
                        if (b5.bG(bM[g][t] + aV[k])) {
                            b4[g].push(bM[g][t]);
                            break
                        }
        }

        function cY(g, k) {
            var t, l;
            var x = bM[g].length;
            var n = 256 <= x ? 12 : 32 <= x ? 6 : 1;
            x = x - 1 - ce.cf(n);
            cg = 0;
            a: for (; 0 <= x; x -= n)
                for (l = 3; 0 <= l; l--) {
                    var z = b5.bG(bM[g][x] + aV[l]) ? g_unclaimedLandIndex : b5.bF(bM[g][x] + aV[l]);
                    if (z === g_unclaimedLandIndex || b5.bE(bM[g][x] + aV[l]) && z !== g && (k || ch(g, z))) {
                        for (t = cg - 1; 0 <= t; t--)
                            if (ci[t] === z)
                                continue a;
                        ci[cg] = z;
                        if (++cg >= cj)
                            return true
                    }
                }
            return 0 < cg
        }

        function ck(g, k) {
            var t, l;
            cg = 0;
            for (t = bM[g].length - 1; 0 <= t; t--)
                for (l = 3; 0 <= l; l--) {
                    var x = b5.bG(bM[g][t] + aV[l]) ? g_unclaimedLandIndex : b5.bF(bM[g][t] + aV[l]);
                    if (x === g_unclaimedLandIndex || b5.bE(bM[g][t] + aV[l]) && x !== g && (k || ch(g, x)))
                        return ci[cg++] = x,
                            true
                }
            return false
        }

        function cl() {
            var g;
            for (g = cg - 1; 0 <= g; g--)
                if (ci[g] === g_unclaimedLandIndex) {
                    for (cg--; g < cg; g++)
                        ci[g] = ci[g + 1];
                    return true
                }
            return false
        }

        function cn(g) {
            var k, t;
            for (k = cg - 1; 0 <= k; k--)
                if (ae.co(g, ci[k]))
                    for (cg--,
                             t = k; t < cg; t++)
                        ci[t] = ci[t + 1];
            return 0 === cg
        }

        function cp() {
            var g;
            for (g = cg - 1; 0 <= g; g--)
                if (ci[g] >= g_playerCount)
                    return true;
            return false
        }

        function cr() {
            var g, k;
            for (g = cg - 1; 0 <= g; g--)
                if (ci[g] < g_playerCount)
                    for (cg--,
                             k = g; k < cg; k++)
                        ci[k] = ci[k + 1];
            return 0 < cg
        }

        function cs(g) {
            var k, t = ci[0], l = g_playerBalanceArray[t] + ae.bi(t, g);
            for (k = cg - 1; 1 <= k; k--) {
                var x = g_playerBalanceArray[ci[k]] + ae.bi(ci[k], g);
                x < l && (t = ci[k],
                    l = x)
            }
            return t
        }

        function cv(g) {
            var k = ci[0];
            if (1 === cg)
                return k;
            var t = as(cz[g] + d0[g], 2)
                , l = as(d2[g] + d3[g], 2)
                , x = d5(t - as(cz[k] + d0[k], 2)) + d5(l - as(d2[k] + d3[k], 2));
            for (g = cg - 1; 1 <= g; g--) {
                var n = d5(t - as(cz[ci[g]] + d0[ci[g]], 2)) + d5(l - as(d2[ci[g]] + d3[ci[g]], 2));
                n < x && (x = n,
                    k = ci[g])
            }
            return k
        }

        function d6() {
            return ci[ce.cf(cg)]
        }

        var cj, cg, ci, d7;

        function d8() {
            cj = 8;
            cg = 0;
            ci = new Uint16Array(cj)
        }

        function d9() {
            d7 = dA ? new Uint8Array(g_unclaimedLandIndex) : null
        }

        function dB(g, k) {
            dA && (d7[g] = 0);
            if (ae.dD(g) && !(60 > k))
                if (0 === bM[g].length)
                    dE.dF(g, dG.cN[g - g_playerCount]) || (dG.dH(g - g_playerCount, 200),
                        dI(g, k, dG.cN[g - g_playerCount], ay.dJ(g)));
                else if (!(0 < bN[g].length && ce.random() < ce.value(bN[g].length > bM[g].length ? 7 : 3) && dE.dF(g, dG.cN[g - g_playerCount]))) {
                    var t = ay.dJ(g);
                    g_playerBalanceArray[g] > t && k < g_playerBalanceArray[g] - t && (k = g_playerBalanceArray[g] - t);
                    dA ? dK(g, k, dG.cN[g - g_playerCount], t) : dL(g, k, dG.cN[g - g_playerCount])
                }
        }

        function dK(g, k, t, l) {
            cY(g, false) || ck(g, false) ? (d7[g] = 1,
            cn(g) || (cl() ? (dN(g, k),
                dO(g, g_unclaimedLandIndex, t)) : (ce.dP(dG.dQ[t]) ? l = cs(g) : (cp() && ce.dP(dG.dS[t]) && cr(),
                l = cv(g)),
                dR(g, k, l),
                dO(g, l, t)))) : 0 < bN[g].length && ce.random() < ce.value(60) && dE.dF(g, t) || (dG.dH(g - g_playerCount, 200),
                dI(g, k, t, l))
        }

        function dT(g, k) {
            cY(g, false) || ck(g, false) ? (d7[g] = 1,
                cl() ? dN(g, k) : dR(g, k, d6())) : dI(g, k, 0, 0)
        }

        function dO(g, k, t) {
            3 <= t && 2142 < c4.dU() && (k === g_unclaimedLandIndex || g_playerBalanceArray[k] < as(g_playerBalanceArray[g], 20)) && dG.dH(g - g_playerCount, 25)
        }

        function dI(g, k, t, l) {
            if (0 !== dW.dX[g] && !(5 === t && g_playerBalanceArray[g] < l || 4 === t && g_playerBalanceArray[g] < as(l, 2)))
                for (t = ce.cf(dY),
                         l = 0; l < dY; l++) {
                    var x = dZ[(l + t) % dY];
                    if (dW.dX[x] === dW.dX[g] && 1 === d7[x]) {
                        triggerSupport(g, x, k);
                        x < g_playerCount && ce.random() < ce.value(10) && (d7[x] = 0);
                        break
                    }
                }
        }

        function dL(g, k, t) {
            !cY(g, true) && !ck(g, true) || cn(g) || (cl() ? dN(g, k) : ce.dP(dG.dQ[t]) ? dR(g, k, cs(g)) : (cp() && ce.dP(dG.dS[t]) && cr(),
                dR(g, k, cv(g))))
        }

        function db(g, k) {
            if (cY(g, true) || ck(g, true))
                cl() ? dN(g, k) : dR(g, k, d6())
        }

        function dR(g, k, t) {
            if (as(g_playerBalanceArray[g], 8) > g_playerBalanceArray[t]) {
                var l = as(11 * g_playerBalanceArray[t], 5);
                k = k > l ? k : l
            }
            l = b4[g].length;
            cS(g, t);
            cL(g, t, l, k)
        }

        function dN(g, k) {
            var t = g_unclaimedLandIndex
                , l = b4[g].length;
            cX(g);
            return b4[g].length !== l ? (cL(g, t, l, k),
                true) : false
        }

        var dd = [60, 74, 112, 200, 256, 512];

        function de() {
            var g, k, t, l, x, n;
            this.dl = "Very Easy;Easy;Normal;Hard;Harder;Very Hard".split(";");
            this.dm = [97, 95, 93, 90, 87, 84];
            this.dS = [98, 95, 90, 40, 20, 0];
            this.dn = [85, 70, 65, 30, 7, 3];
            this.dQ = [0, 0, 0, 0, 50, 90];
            this.bp = function () {
                var z;
                g = new Uint8Array(dq);
                k = new Uint16Array(dq);
                t = new Uint16Array(dq);
                l = new Uint8Array(dq);
                this.cN = new Uint8Array(dq);
                x = new Uint16Array(dq);
                n = new Uint16Array(dq);
                if (dr.ds) {
                    if (dr.dt.du)
                        for (z = dq - 1; 0 <= z; z--)
                            this.cN[z] = dr.dt.du[z + 1]
                } else if (9 === dv)
                    this.dw();
                else if (g_isSingleplayer)
                    if (dA)
                        for (z = dq - 1; 0 <= z; z--)
                            this.cN[z] = dy.dz[dW.dX[z + g_playerCount] - 1].bD;
                    else
                        for (z = dq - 1; 0 <= z; z--)
                            this.cN[z] = dy.dz[0].bD;
                else {
                    var y = 8 === dv ? 1 : 0;
                    for (z = dq - 1; 0 <= z; z--)
                        this.cN[z] = y
                }
                for (z = dq - 1; 0 <= z; z--)
                    2 >= this.cN[z] ? (l[z] = 5,
                        x[z] = n[z] = 1040,
                        0 === this.cN[z] ? (k[z] = 1E3,
                            t[z] = 1E3) : 1 === this.cN[z] ? (k[z] = 1E3,
                            t[z] = 920,
                            x[z] = n[z] = 1100) : (k[z] = 1E3,
                            t[z] = 870)) : 4 >= this.cN[z] ? (l[z] = 1 + ce.cf(20),
                        n[z] = 250 + ce.cf(1501),
                        x[z] = 500 + ce.cf(501),
                        3 === this.cN[z] ? (k[z] = 600 + ce.cf(101),
                            t[z] = 300 + ce.cf(401)) : (k[z] = 300 + ce.cf(201),
                            t[z] = 100 + ce.cf(201))) : (x[z] = 1E3,
                        n[z] = 1E3,
                        l[z] = 35 + ce.cf(16),
                        k[z] = 400 + ce.cf(101),
                        t[z] = 50 + ce.cf(101)),
                        g[z] = 1 + as(x[z] * ce.random(), 10 * ce.value(100))
            }
            ;
            this.dw = function () {
                var z, y;
                var A = e2.e3;
                for (z = A - 1; 0 <= z; z--)
                    this.cN[z] = 5;
                for (y = 0; 6 > y; y++)
                    if (0 < e2.e4[y]) {
                        for (z = A + e2.e4[y] - 1; z >= A; z--)
                            this.cN[z] = y;
                        A += e2.e4[y]
                    }
            }
            ;
            this.dH = function (z, y) {
                0 <= z && (g[z] = y)
            }
            ;
            this.dF = function (z) {
                if (0 === --g[z]) {
                    x[z] !== n[z] && (x[z] += x[z] < n[z] ? 3 : -3);
                    k[z] !== t[z] && (k[z] += k[z] < t[z] ? l[z] : -l[z],
                        k[z] = Math.abs(k[z] - t[z]) <= l[z] ? t[z] : k[z]);
                    g[z] = as(x[z], 10);
                    var y = z + g_playerCount;
                    dB(y, as(k[z] * g_playerBalanceArray[y], 1E3))
                }
            }
        }

        function e8() {
            e9.dF();
            eA.dF();
            eB.eC();
            eD.dF()
        }

        function eE() {
            ay.dF();
            eF.dF();
            eG.dF();
            eH.dF();
            eI.dF();
            eJ.dF();
            au.dF();
            eK.dF();
            eL();
            eM.dF();
            e2.dF();
            eA.dF();
            eB.dF();
            eN.dF();
            eO.dF();
            eP.dF();
            e9.dF();
            eQ.dF();
            eR.dF();
            eS.dF();
            b0.dF();
            eT.dF();
            eD.dF()
        }

        function eU() {
            eV.dF();
            eW.dF();
            c2.dF();
            eX.dF();
            eY.eZ()
        }

        function ea() {
            eM.eb(false);
            eP.eb();
            eB.eb(false);
            eO.eb();
            eR.eb();
            eS.eb();
            eA.eb(false);
            eT.bv()
        }

        function ec() {
            eA.eb(true) && (c4.c5 = true);
            eD.dF()
        }

        function ed() {
            function g(A) {
                var B;
                for (B = l - 1; 0 <= B; B--)
                    0 === n[x[B]] && g_playerLandArray[x[B]] >= A && ab(x[B])
            }

            function k(A) {
                n[A] = 10 === n[A] ? t : 1E3 > g_playerLandArray[A] ? 3 : 1E4 > g_playerLandArray[A] ? 2 : 6E4 > g_playerLandArray[A] ? 1 : 0
            }

            var t, l, x, n, z, y;
            this.bp = function () {
                z = y = 0;
                t = 6;
                l = 0;
                x = new Uint16Array(g_unclaimedLandIndex);
                n = new Uint8Array(g_unclaimedLandIndex)
            }
            ;
            this.dF = function () {
                var A;
                z = b0.b1[13];
                y = g_playerBalanceArray[g_localPlayerIndex];
                for (A = l - 1; 0 <= A; A--)
                    10 === n[x[A]] ? k(x[A]) : 0 === n[x[A]]-- && (k(x[A]),
                        ab(x[A]));
                16E4 <= g_playerLandArray[em[0]] && (g(16E4),
                3E5 <= g_playerLandArray[em[0]] && g(3E5));
                g_playerLandArray[g_localPlayerIndex] > b0.b1[7] && (b0.b1[7] = g_playerLandArray[g_localPlayerIndex]);
                b0.b1[14] += y - g_playerBalanceArray[g_localPlayerIndex] + z - b0.b1[13]
            }
            ;
            this.av = function (A) {
                var B;
                for (B = l - 1; 0 <= B; B--)
                    if (A === x[B]) {
                        l--;
                        for (A = B; A < l; A++)
                            x[A] = x[A + 1];
                        break
                    }
            }
            ;
            this.cR = function (A, B) {
                var C;
                for (C = l - 1; 0 <= C; C--)
                    if (A === x[C])
                        return;
                x[l++] = A;
                n[A] = B ? 2 : 10
            }
        }

        function er() {
            function g() {
                l = 3;
                a: {
                    for (var y = 40; 1 <= y; y--) {
                        x = d0[z] + as(ce.random() * (cz[z] - d0[z] + 1), ce.value(100));
                        n = d3[z] + as(ce.random() * (d2[z] - d3[z] + 1), ce.value(100));
                        var A = k(b5.f1(x, n));
                        if (1 !== A)
                            break a
                    }
                    A = 1
                }
                if (0 === A)
                    return false;
                if (2 === A)
                    return true;
                A = t(1, 1);
                return 0 === A ? false : 2 === A ? true : 2 === t(54, 4)
            }

            function k(y) {
                if (b5.b6(y) && (b5.bG(y) || b5.bF(y) !== z && ch(z, b5.bF(y)))) {
                    if (ez.co(z, y))
                        return 2;
                    if (0 === l--)
                        return 0
                }
                return 1
            }

            function t(y, A) {
                for (var B, C, E, F, G, N, I, D = y; D < y + 50 * A; D += A)
                    if (B = d0[z] - D,
                        B = 1 > B ? 1 : B,
                        C = d3[z] - D,
                        C = 1 > C ? 1 : C,
                        E = cz[z] + D,
                        E = E >= aZ - 1 ? aZ - 2 : E,
                        F = d2[z] + D,
                        F = F >= aa - 1 ? aa - 2 : F,
                        I = as(2 * ce.random() * (E - B + F - C), ce.value(100)),
                        G = E - B,
                        N = F - C,
                        I <= G ? (x = B + I,
                            n = C) : I <= G + N ? (x = E,
                            n = C + I - G) : I <= 2 * G + N ? (x = B + I - G - N,
                            n = F) : (x = B,
                            n = C + I - 2 * G - N),
                        B = k(b5.f1(x, n)),
                    1 !== B)
                        return B;
                return 1
            }

            var l, x, n, z;
            this.dF = function (y, A) {
                z = y;
                if (0 === bN[z].length)
                    return false;
                if (g()) {
                    var B = as(dG.dn[A] * g_playerBalanceArray[z], 100);
                    100 > B && 100 <= g_playerBalanceArray[z] && (B = 100);
                    if (100 <= B)
                        return triggerBoat(z, ez.f0(), b5.f1(x, n), B)
                }
                return false
            }
        }

        function fC() {
            var g, k;
            this.bp = function () {
                g = dq;
                k = new Uint16Array(dq);
                for (var t = dq - 1; 0 <= t; t--)
                    k[t] = t
            }
            ;
            this.dF = function () {
                for (var t = g - 1; 0 <= t; t--)
                    if (0 === g_isPlayersAliveArray[k[t] + g_playerCount]) {
                        var l = t;
                        for (g--; l < g; l++)
                            k[l] = k[l + 1]
                    } else
                        dG.dF(k[t])
            }
        }

        function fH() {
            function g(y, A, B, C, E, F) {
                0 < B && 1E3 >= B && (k.push(y),
                    t.push(A),
                    l.push(B),
                    x.push(C),
                    n.push(E),
                    z.push(F))
            }

            var k, t, l, x, n, z;
            this.bp = function () {
                k = [];
                t = [];
                l = [];
                x = [];
                n = [];
                z = []
            }
            ;
            this.dF = function () {
                var y, A = k.length;
                for (y = 0; y < A; y++)
                    if (0 === t[y])
                        triggerAttack(k[y], x[y], l[y]);
                    else if (1 === t[y])
                        this.fM(k[y], l[y], n[y], z[y]);
                    else if (2 === t[y])
                        this.fN(k[y], x[y]);
                    else if (6 === t[y]) {
                        var B = k[y];
                        0 !== g_isPlayersAliveArray[B] && 2 !== fT[k] && eS.fX(B, 1 === x[y])
                    } else
                        7 === t[y] && this.fP(k[y], x[y]);
                0 < A && this.bp()
            }
            ;
            this.fM = function (y, A, B, C) {
                0 !== g_isPlayersAliveArray[y] && 2 !== fT[k] && ez.co(y, b5.f1(B, C)) && triggerBoat(y, ez.f0(), b5.f1(B, C), as(A * g_playerBalanceArray[y], 1E3)) && y === g_localPlayerIndex && (b0.b1[0] += A,
                    b0.b1[1]++,
                    b0.b1[2]++)
            }
            ;
            this.fN = function (attackerIndex, targetIndex) {
                if (0 !== g_isPlayersAliveArray[attackerIndex] && 2 !== fT[k] && ae.co(attackerIndex, targetIndex)) {
                    var B = ae.bi(attackerIndex, targetIndex);
                    ae.bh(attackerIndex, targetIndex, 0);
                    if (attackerIndex !== g_localPlayerIndex)
                        g_playerBalanceArray[attackerIndex] += B,
                            ay.az(attackerIndex);
                    else {
                        var C = g_playerBalanceArray[attackerIndex];
                        g_playerBalanceArray[attackerIndex] += B;
                        ay.az(attackerIndex);
                        b0.b1[13] -= g_playerBalanceArray[attackerIndex] - C
                    }
                }
            }
            ;
            this.fP = function (y, A) {
                if (0 !== g_isPlayersAliveArray[y] && 2 !== fT[k]) {
                    var B = ae.fV(y, A);
                    if (-1 !== B) {
                        var C = ae.am(y, B);
                        ae.bT(y, B, 0);
                        g_playerBalanceArray[y] += C;
                        ay.az(y)
                    }
                }
            }
            ;
            this.fY = function (y, A, B) {
                1 === fZ && g(y, 0, A, B, 0, 0)
            }
            ;
            this.fb = function (y, A, B, C) {
                1 === fZ && (fc ? fd.cQ(y, B, C) : g(y, 1, A, 0, B, C))
            }
            ;
            this.fe = function (y, A) {
                1 === fZ && g(y, 2, 1, A, 0, 0)
            }
            ;
            this.ff = function (y, A) {
                1 === fZ && g(y, 7, 1, A, 0, 0)
            }
            ;
            this.fg = function (y, A) {
                1 === fZ && g(y, 6, 1, A, 0, 0)
            }
            ;
            this.fh = function (y) {
                1 === fZ && 0 !== g_isPlayersAliveArray[y] && 2 !== fT[y] && (8 === dv ? fi.fj(1 - y) : this.fk(y));
                e9.fl(y, 4)
            }
            ;
            this.fk = function (y) {
                fc ? (fm(y),
                    fn()) : eI.fo(y)
            }
            ;
            this.fp = function (y) {
                0 !== g_isPlayersAliveArray[y] && 2 !== fT[y] && fq.fr(y) && (1 === dY ? fi.fj(y) : (e9.fl(y, y === g_localPlayerIndex ? 21 : 22),
                    8 === dv ? fi.fj(1 - y) : g_isSingleplayer ? (fm(y),
                        fn(),
                    fc && fd.dF()) : this.fk(y)))
            }
        }

        function fu() {
            function g(B) {
                for (l--; B < l; B++)
                    x[B] = x[B + 1],
                        n[B] = n[B + 1],
                        z[B] = z[B + 1],
                        y[B] = y[B + 1],
                        A[B] = A[B + 1]
            }

            var k, t, l, x, n, z, y, A;
            this.bp = function () {
                k = 1;
                l = 0;
                t = 2 * g_unclaimedLandIndex;
                x = new Uint16Array(t);
                n = new Uint8Array(t);
                z = new Uint16Array(t);
                y = new Uint32Array(t);
                A = new Uint32Array(t)
            }
            ;
            this.g0 = function (B, C) {
                y[B] = C
            }
            ;
            this.dF = function () {
                for (var B = l - 1; 0 <= B; B--)
                    0 === n[B]-- && (n[B] = 2,
                        g1.dF(B, z[B], x[B], y[B], A[B]))
            }
            ;
            this.av = function (B, C) {
                var E;
                for (E = l - 1; 0 <= E; E--)
                    if (B === x[E] && C === z[E]) {
                        g(E);
                        break
                    }
            }
            ;
            this.g3 = function (B) {
                var C;
                for (C = l - 1; 0 <= C; C--)
                    B === x[C] && (g1.g4(B, y[C]),
                        g(C))
            }
            ;
            this.cR = function (B, C, E) {
                if (l >= t)
                    return 0;
                x[l] = B;
                n[l] = 0;
                z[l] = k;
                y[l] = C;
                A[l] = E;
                B = k;
                k++;
                l++;
                k = k > 2 * t ? 1 : k;
                return B
            }
            ;
            this.cG = function () {
                if (!(40 > g7 || 0 === l)) {
                    var B, C = gC / g7, E = gD / g7, F = (gE + gC) / g7, G = (cB + gD) / g7;
                    cH.textAlign = cJ;
                    cH.textBaseline = cI;
                    for (B = l - 1; 0 <= B; B--) {
                        var N = b5.gF(y[B]);
                        var I = b5.cF(y[B]);
                        var D = x[B];
                        if (N > C - 1 && N < F && I > E - 1 && I < G && 0 !== g_isPlayersAliveArray[D]) {
                            var K = Math.floor(.94 * g7 * eA.gG(D));
                            if (!(6 > K)) {
                                N = Math.floor(gE * (N + .5 - C) / (F - C));
                                I = Math.floor(cB * (I + .48 - E) / (G - E));
                                cH.font = bt + K + bu;
                                cH.fillStyle = gH;
                                cH.fillText(g_playerNameArray[D], N, I);
                                var J = Math.floor(.57 * K);
                                6 > J || (D = ae.am(D, ae.fV(D, z[B])),
                                    cH.font = bt + J + bu,
                                    cH.fillText(eP.gJ(D), N, I + Math.floor(.82 * K)))
                            }
                        }
                    }
                }
            }
        }

        function gK() {
            function g(J) {
                N = c4.gc;
                I = 33;
                n = z = x = 0;
                y = I / J;
                l = 1 / (J / I / 4);
                A = (gE / 2 + gC) / g7;
                B = (cB / 2 + gD) / g7;
                C = g7
            }

            function k(J) {
                .125 > Math.abs(Math.log(G / C)) && (G = J * C)
            }

            function t(J, L, H, M) {
                E = (J + H + 1) / 2;
                F = (L + M + 1) / 2;
                J = gE / (H - J + 1);
                L = cB / (M - L + 1);
                G = .9 * (J < L ? J : L)
            }

            var l, x, n, z, y, A, B, C, E, F, G, N, I, D = false, K = false;
            this.gd = function () {
                return D
            }
            ;
            this.ge = function () {
                g(1);
                this.gf(0, 0, aZ - 1, aa - 1);
                fc || this.gg(g_localPlayerIndex, 3E3, true, .3)
            }
            ;
            this.gg = function (J, L, H, M) {
                if (!(g_uiVisibility || D && !H && K || 0 === g_playerLandArray[J])) {
                    gj.gk = false;
                    K = H;
                    g(L);
                    E = (d0[J] + cz[J] + 1) / 2;
                    F = (d3[J] + d2[J] + 1) / 2;
                    L = cz[J] - d0[J] + 1;
                    J = d2[J] - d3[J] + 1;
                    H = gE / L;
                    var Q = cB / J;
                    G = H < Q ? H : Q;
                    G *= 0 !== M ? M : 20 > L && 20 > J ? .5 : .9;
                    k(.875);
                    D = true;
                    gn.go()
                }
            }
            ;
            this.gp = function (J) {
                gj.gk = false;
                K = true;
                g(J);
                t(0, 0, aZ - 1, aa - 1);
                k(.875);
                D = true;
                gn.go()
            }
            ;
            this.gf = function (J, L, H, M) {
                t(J, L, H, M);
                g7 = G;
                gj.gw(E, gE / 2);
                gj.gx(F, cB / 2);
                gy.gz()
            }
            ;
            this.h0 = function () {
                if (D && K)
                    return false;
                D = false;
                return true
            }
            ;
            this.dF = function () {
                if (D) {
                    .5 > x ? z < y && (z += y * l,
                        n = x) : x > 1 - n && (z -= y * l,
                        z = z < y * l ? y * l : z);
                    N = N >= c4.gc ? c4.gc - 1 : N;
                    var J = c4.gc - N;
                    1E3 < J ? x = 1 : (x += z * J / I,
                        x = 1 < x ? 1 : x);
                    N = c4.gc;
                    var L = g7;
                    J = gC;
                    var H = gD;
                    g7 = C * Math.pow(G / C, x);
                    L = g7 / L;
                    var M = 1 - (C * Math.pow(G / C, 1 - x) - C) / (G - C);
                    gj.gw(A + M * (E - A), gE / 2);
                    gj.gx(B + M * (F - B), cB / 2);
                    eA.zoom(L, (J * L - gC) / (1 - L), (H * L - gD) / (1 - L));
                    gy.gz();
                    1 <= x && (D = false,
                        h8.h9 = true);
                    c4.c5 = true
                }
            }
        }

        function hA() {
            function g() {
                var I;
                a: {
                    for (I = 0; 8 > I; I++)
                        if (n = as(y * ce.random(), ce.value(100)),
                            z = as(A * ce.random(), ce.value(100)),
                            k()) {
                            I = true;
                            break a
                        }
                    I = false
                }
                if (!I)
                    a: {
                        var D, K, J, L;
                        I = as(y * ce.random(), ce.value(100));
                        var H = as(A * ce.random(), ce.value(100));
                        for (D = 40; 1 <= D; D--)
                            for (K = A - D; 0 <= K; K -= 40)
                                for (z = (K + H) % A,
                                         J = 40; 1 <= J; J--)
                                    for (L = y - J; 0 <= L; L -= 40)
                                        if (n = (L + I) % y,
                                            k()) {
                                            I = true;
                                            break a
                                        }
                        I = false
                    }
                return I
            }

            function k() {
                var I, D;
                var K = as(B - F, 2);
                var J = E + z * B + K
                    , L = C + n * B + K;
                for (I = J + F - 1; I >= J; I--)
                    for (D = L + F - 1; D >= L; D--)
                        if (K = b5.f1(D, I),
                        !b5.b6(K) || b5.cU(K))
                            return false;
                return true
            }

            function t() {
                g_isPlayersAliveArray[G] = 0;
                g_playerBalanceArray[G] = 0;
                g_playerLandArray[G] = ha[G] = 0;
                b4[G] = [];
                bM[G] = [];
                bN[G] = [];
                bQ[G] = [];
                d0[G] = d3[G] = cz[G] = d2[G] = 0
            }

            function l(I, D) {
                g_isPlayersAliveArray[G] = 1;
                g_playerBalanceArray[G] = G < g_playerCount ? hb : dd[dG.cN[G - g_playerCount]];
                d0[G] = I + 10;
                d3[G] = D + 10;
                d2[G] = cz[G] = 0;
                var K, J;
                for (K = I; K < I + 4; K++)
                    for (J = D; J < D + 4; J++)
                        if (K > I && K < I + 3 || J > D && J < D + 3) {
                            var L = b5.f1(K, J);
                            b5.b6(L) && (d0[G] = K < d0[G] ? K : d0[G],
                                cz[G] = K > cz[G] ? K : cz[G],
                                d3[G] = J < d3[G] ? J : d3[G],
                                d2[G] = J > d2[G] ? J : d2[G],
                                N[g_playerLandArray[G]] = L,
                                g_playerLandArray[G]++,
                                b5.he(L, G))
                        }
                ha[G] = g_playerLandArray[G];
                for (L = g_playerLandArray[G] - 1; 0 <= L; L--)
                    b5.hf(N[L], G) ? (b5.b7(N[L], G),
                        bM[G].push(N[L])) : b5.hg(N[L]) ? (b5.b7(N[L], G),
                        bN[G].push(N[L])) : b5.hh(N[L]) && (b5.b7(N[L], G),
                        bQ[G].push(N[L]))
            }

            function x(I, D) {
                var K, J;
                for (J = D; J > D - 6; J--)
                    for (K = I; K > I - 6; K--) {
                        var L = b5.f1(K, J);
                        if (b5.cU(L))
                            return false
                    }
                return true
            }

            var n, z, y, A, B, C, E, F, G, N;
            this.bp = function () {
                var I;
                N = Array(12);
                F = 6;
                B = 10;
                y = as(aZ, B);
                A = as(aa, B);
                C = as(aZ - B * y, 2);
                E = as(aa - B * A, 2);
                if (fc)
                    for (I = 0; I < g_playerCount; I++)
                        G = I,
                            t(),
                            g_isPlayersAliveArray[G] = 1;
                if (dr.ds && dr.dt.hH)
                    for (G = 0; G < g_unclaimedLandIndex; G++) {
                        if (1 !== g_isPlayersAliveArray[G]) {
                            if (G < g_maxPlayerCount) {
                                var D = dr.dt.hH[G] + 1;
                                I = dr.dt.hS[G] + 1;
                                3 < D && D < aZ - 5 && 3 < I && I < aa - 5 && b5.b6(b5.f1(D, I)) && x(D + 3, I + 3) ? (D += 1,
                                    I += 1,
                                    t(),
                                    l(D - 2, I - 2),
                                    I = true) : I = false;
                                if (I)
                                    continue;
                                if (g()) {
                                    D = C + n * B + as(B, 2);
                                    I = E + z * B + as(B, 2);
                                    t();
                                    l(D - 2, I - 2);
                                    continue
                                }
                            }
                            t()
                        }
                    }
                else
                    for (G = 0; G < g_unclaimedLandIndex; G++)
                        1 !== g_isPlayersAliveArray[G] && (G < g_maxPlayerCount && g() ? (D = C + n * B + as(B, 2),
                            I = E + z * B + as(B, 2),
                            t(),
                            l(D - 2, I - 2)) : t());
                b0.b1[7] = g_playerLandArray[g_localPlayerIndex];
                b0.b1[8] = g_playerBalanceArray[g_localPlayerIndex]
            }
            ;
            this.hi = function (I, D, K) {
                var J, L;
                G = I;
                for (J = 0; 20 > J; J++)
                    for (I = D + J; I >= D - J; I--)
                        for (L = K + J; L >= K - J; L--)
                            if ((I === D + J || I === D - J || L === K + J || L === K - J) && 3 < I && I < aZ - 5 && 3 < L && L < aa - 5 && b5.b6(b5.f1(I, L)) && x(I + 3, L + 3)) {
                                if (0 < g_playerLandArray[G]) {
                                    for (K = cz[G]; K >= d0[G]; K--)
                                        for (D = d2[G]; D >= d3[G]; D--)
                                            J = 4 * (D * aZ + K),
                                            b5.hm(G, J) && (b5.hn(J),
                                                g_playerLandArray[G]--);
                                    t()
                                }
                                l(I - 1, L - 1);
                                return true
                            }
                return false
            }
            ;
            this.ho = function (I) {
                G = I;
                if (g()) {
                    I = C + n * B + as(B, 2);
                    var D = E + z * B + as(B, 2);
                    t();
                    l(I - 2, D - 2)
                } else
                    t()
            }
        }

        function hp() {
            hq.hr();
            cH.setTransform(g7, 0, 0, g7, 0, 0);
            cH.imageSmoothingEnabled = 3 > g7;
            cH.drawImage(hs, gj.gF(), gj.cF());
            eN.cG();
            cH.drawImage(ht, gj.gF(), gj.cF());
            cH.imageSmoothingEnabled = false;
            hq.cG();
            cH.setTransform(1, 0, 0, 1, 0, 0);
            eA.cG();
            eK.cG();
            g_uiVisibility || (cH.imageSmoothingEnabled = false,
                e9.cG(),
                eM.cG(),
                eR.cG(),
                eS.cG(),
                eB.cG(),
                gj.cG(),
                c2.cG(),
                eT.cG(),
                eO.cG(),
                eP.cG(),
                fq.cG(),
                eW.cG(),
                hu.cG(),
                hv.cG(),
                eX.cG())
        }

        function hw(g, k, t) {
            g.clearRect(0, 0, k, t);
            g.fillStyle = hy;
            g.fillRect(0, 0, k, t)
        }

        function hz(g, k, t, l) {
            g.fillStyle = cK;
            g.fillRect(0, 0, k, l);
            g.fillRect(0, 0, l, t);
            g.fillRect(k - l, 0, l, t);
            g.fillRect(0, t - l, k, l)
        }

        function i1(g, k, t, l, x, n, z) {
            g.fillStyle = cK;
            n = Math.floor(l * n);
            n += (n - x) % 2;
            var y = Math.floor((n - x) / 2);
            l = Math.floor((l - n) / 2);
            g.fillRect(k + l, t + l + y, n, x);
            z && g.fillRect(k + l + y, t + l, x, n)
        }

        function i7() {
            this.i8 = null;
            this.bp = function (g) {
                this.i8 = g;
                e9.i9(this.i8)
            }
            ;
            this.iA = function (g) {
                var k = 8 / (1 + Math.pow(2, (this.i8[g].iC - this.i8[1 - g].iC) / 10 / 32));
                k = Math.floor(10 * k + .5);
                var t = this.iF(this.i8[g].iC + k + 1);
                k = this.iF(this.i8[1 - g].iC - k);
                0 === g ? e9.iH(this.i8, t, k, ["rgba(10,140,10,0.75)", "rgba(140,10,10,0.75)"]) : e9.iH(this.i8, k, t, ["rgba(140,10,10,0.75)", "rgba(10,140,10,0.75)"])
            }
            ;
            this.iF = function (g) {
                g = 0 > g ? 0 : 16E3 < g ? 16E3 : g;
                return 16E3 <= g ? "Unknown" : (g / 10).toFixed(1)
            }
        }

        function iI() {
            function g(x) {
                for (var n = k.length - 1; 0 <= n; n--)
                    if (x >= k[n] && x < t[n])
                        return n;
                return -1
            }

            var k, t, l;
            (function () {
                    k = [32, 65, 191, 913, 931];
                    t = [64, 127, 688, 930, 1155];
                    l = Array(k.length + 1);
                    for (var x = 0; x < l.length; x++) {
                        l[x] = 0;
                        for (var n = x - 1; 0 <= n; n--)
                            l[x] += t[n] - k[n]
                    }
                }
            )();
            this.iN = function (x) {
                x = x.trim();
                if (0 === x.indexOf("Bot ") || 0 === x.indexOf("[Bot] "))
                    x = false;
                else
                    a: {
                        x = x.trim();
                        var n = x.length;
                        if (3 > n || 20 < n)
                            x = false;
                        else {
                            for (var z = 0, y, A = 0; A < n; A++)
                                if (y = x.charCodeAt(A),
                                    z += 65 <= y && 90 >= y || 1040 <= y && 1071 >= y ? 1 : 0,
                                -1 === g(y)) {
                                    x = false;
                                    break a
                                }
                            x = 3 < z && z > Math.floor(n / 2) ? false : true
                        }
                    }
                return x
            }
            ;
            this.iT = function (x) {
                x = x.trim();
                for (var n = x.length, z = [], y, A = 0; A < n; A++) {
                    y = x.charCodeAt(A);
                    var B = g(y);
                    z.push(l[B] + y - k[B])
                }
                return z
            }
            ;
            this.iU = function (x) {
                for (var n = "", z = x.length, y, A = 0; A < z; A++)
                    for (y = 1; y < l.length; y++)
                        if (x[A] < l[y]) {
                            y = k[y - 1] + x[A] - l[y - 1];
                            n += String.fromCharCode(y);
                            break
                        }
                return n
            }
            ;
            this.iV = function (x) {
                x = this.iT(x);
                for (var n = "", z = 0; z < x.length; z++)
                    n += 10 > x[z] ? "00" : 100 > x[z] ? "0" : "",
                        n += x[z].toString(10);
                return n
            }
            ;
            this.iW = function (x) {
                for (var n = Array(Math.floor(x.length / 3)), z = 0; z < x.length; z += 3)
                    n[Math.floor(z / 3)] = parseInt(x.substring(z, z + 3));
                return this.iU(n)
            }
            ;
            this.z = function (x) {
                var n, z = [x.length];
                for (n = 0; n < x.length; n++)
                    z[n] = x.charCodeAt(n) - 48;
                var y = "";
                for (n = 0; n < x.length; n++)
                    if (n === x.length - 1 || 51 < 10 * z[n] + z[n + 1])
                        y += z[n].toString();
                    else {
                        var A = 10 * z[n] + z[n + 1];
                        y += String.fromCharCode(A + (26 > A ? 65 : 71));
                        n++
                    }
                return y
            }
            ;
            this.n = function (x) {
                for (var n = "", z, y = 0; y < x.length; y++)
                    z = x.charCodeAt(y),
                        48 <= z && 58 > z ? n += String.fromCharCode(z) : 65 <= z && 75 > z ? n += "0" + (z - 65).toString() : 75 <= z && 91 > z ? n += (z - 65).toString() : 97 <= z && 123 > z && (n += (z - 71).toString());
                return n
            }
            ;
            this.iX = function (x) {
                var n = x.length, z, y = [];
                for (z = 0; z < n; z++) {
                    var A = x.charCodeAt(z);
                    58 > A ? y.push(x[z]) : (A = 91 > A ? A - 65 : A - 71,
                        y.push(String(as(A, 10))),
                        y.push(String(A - 10 * as(A, 10))))
                }
                n = y.length - 2;
                A = 0;
                x = [];
                for (z = 0; z < n; z += 3)
                    x[A++] = parseInt(y[z] + y[z + 1] + y[z + 2]);
                return x
            }
            ;
            this.iZ = function () {
                var x, n = "";
                for (x = 0; 6 > x; x++) {
                    var z = 48 + ce.random() % 36;
                    z += 58 <= z ? 39 : 0;
                    n += String.fromCharCode(z)
                }
                return n
            }
        }

        function ib() {
            this.fj = function (g) {
                if (2 === fZ)
                    var k = true;
                else
                    eS.iv(),
                        fZ = 2,
                        iw = ix,
                        k = false;
                if (!k) {
                    if (8 === dv) {
                        var t = g = 0 > g ? g_playerLandArray[0] >= g_playerLandArray[1] ? 0 : 1 : g;
                        (k = g === g_localPlayerIndex) ? e9.fl(g, 2) : e9.fl(1 - g_localPlayerIndex, 3);
                        ij.iA(g)
                    } else
                        dA ? (g = eT.ik(),
                            k = dW.dX[g_localPlayerIndex] === g,
                            9 === dv ? t = k ? em[0] : 512 : (g = dW.il(dW.im[g]),
                                t = g[0],
                            512 !== t && e9.io(g[1])),
                            e9.ip(k)) : (t = em[0],
                            k = t === g_localPlayerIndex,
                            e9.iq(t));
                    g_isSingleplayer || ir.is(it(), t);
                    eW.show(k, false);
                    e9.iy(true);
                    eM.eb(true);
                    eB.eb(true);
                    c4.c5 = true;
                    h8.iz();
                    a9(0)
                }
            }
        }

        function j0() {
            this.cQ = function (g, k, t) {
                0 !== g_isPlayersAliveArray[g] && j1.hi(g, k, t) && (c4.c5 = true)
            }
            ;
            this.dF = function () {
                fc = false;
                for (var g = 0; g < g_playerCount; g++)
                    0 !== g_isPlayersAliveArray[g] && 0 === g_playerLandArray[g] && j1.ho(g);
                0 !== g_isPlayersAliveArray[g_localPlayerIndex] ? (b0.b1[7] = g_playerLandArray[g_localPlayerIndex],
                    b0.b1[8] = g_playerBalanceArray[g_localPlayerIndex],
                    eR.cE(),
                    eB.j2(),
                    eV.gf(d0[g_localPlayerIndex] - 5, d3[g_localPlayerIndex] - 5, cz[g_localPlayerIndex] + 5, d2[g_localPlayerIndex] + 5),
                    eX.bp()) : eW.show(false, false);
                e9.j3(18);
                eA.j4();
                eA.eb(true);
                fd = null;
                h8.j5 = true;
                h8.j6();
                g_isSingleplayer && a9(1)
            }
        }

        var g_playerCount, ix, dq, iw, g_unclaimedLandIndex = 512, g_maxPlayerCount = 512, j7 = 150, g_isSingleplayer, j8, fZ = 0, j9, jA, jB, hb = 512, at = 2, g_localPlayerIndex, g_uiVisibility, fc, jC,
            dA, jD, dv, jE, fd, ij, jF;

        function jG(g, k, t, l, x) {
            j8 = g_uiVisibility = false;
            dv = l;
            jE = x;
            dA = 7 > dv || 9 === dv;
            ix = g_playerCount = t.length;
            g_isSingleplayer = 1 === ix;
            dv = 10 === dv && g_isSingleplayer ? 7 : dv;
            dv = 8 === dv && 2 !== g_playerCount ? 7 : dv;
            jD = 9 === dv ? 2 : dv + 2;
            jF = 2 >= g_playerCount ? 30 : 50 >= g_playerCount ? 40 : 50;
            jC = dr.ds && !dr.dt.jL ? fc = false : fc = dA || 100 > g_playerCount;
            fd = fc ? new j0 : null;
            hb = 512;
            g_maxPlayerCount = g_unclaimedLandIndex;
            g_isSingleplayer && (g_maxPlayerCount = dy.jM());
            dq = g_maxPlayerCount - g_playerCount;
            iw = 0;
            g_localPlayerIndex = k;
            ce.jN(g);
            jO(t);
            e2.bp();
            dW.bp(t);
            fZ = 1;
            jA = 15E8;
            jB = 1E9;
            b0.bp();
            jP();
            jQ.jR();
            h8.bp();
            ay.bp();
            d9();
            b5.bp(t);
            hq.bp();
            eT.bp();
            dG.bp();
            jS.jT();
            jS.jU();
            j1.bp();
            jV();
            eN.bp();
            hv.bp();
            jW.putImageData(jX, 0, 0);
            eM.bp();
            gj.bp();
            eR.bp();
            eS.bp();
            eO.bp();
            eB.bp();
            fq.bp();
            c2.bp();
            e9.bp();
            eP.bp();
            hu.bp();
            eW.bp();
            eG.bp();
            eK.bp();
            au.bp();
            eJ.bp();
            aY();
            ae.bp();
            eA.bp();
            eF.bp();
            eI.bp();
            eQ.bp();
            eH.bp();
            8 === dv ? (ij = new i7,
                ij.bp(t)) : ij = null;
            g_isSingleplayer ? c4.jY() : c4.jZ();
            ja();
            eX.bp();
            c4.c5 = true;
            g_isSingleplayer && fc || a9(1)
        }

        function ja() {
            eV.ge();
            0 === g_isPlayersAliveArray[g_localPlayerIndex] && eW.show(false, true);
            eA.eb(true)
        }

        function jb() {
            eD.close(eD.jc, 3246);
            fZ = 0;
            c4.jd();
            je.bp();
            a9(0);
            aB()
        }

        var dG, au, dE, eJ, eG, eK, eV, j1, m, hu, fq, e9, jf, eP, c2, eR, gj, jg, eO, eM, eB, eW, jh, ji, aJ, jj, jk,
            jl, dy, je, bw, b5, f, ae, ay, eA, jS, e2, jQ, jm, jn, gn, ez, ce, g1, hq, jo, jp, eX, ir, jq, eN, jr, js,
            eS, eY, eD, eH, jt, ju, eI, eF, eQ, jv, dr;

        function jw() {
            dG = new de;
            au = new ed;
            dE = new er;
            eJ = new fC;
            eG = new fH;
            eK = new fu;
            eV = new gK;
            j1 = new hA;
            m = new iI;
            hu = new jx;
            fq = new jy;
            e9 = new jz;
            jf = new k0;
            eP = new k1;
            c2 = new k2;
            eR = new k3;
            gj = new k4;
            jg = new k5;
            eO = new k6;
            eM = new k7;
            eB = new k8;
            eW = new k9;
            jh = new kA;
            ji = new kB;
            aJ = new kC;
            jj = new kD;
            jj.jT();
            jk = new kE;
            jl = new kF;
            dy = new kG;
            je = new kH;
            bw = new kI;
            b5 = new kJ;
            f = new kK;
            ae = new kL;
            ay = new kM;
            eA = new kN;
            jS = new kO;
            e2 = new kP;
            jQ = new kQ;
            jm = new kR;
            jn = new kS;
            gn = new kT;
            ez = new kU;
            ce = new kV;
            g1 = new kW;
            hq = new kX;
            jo = new kY;
            jp = new kZ;
            eX = new ka;
            ir = new kb;
            jq = new kc;
            eN = new kd;
            jr = new ke;
            js = new kf;
            eS = new kg;
            eY = new kh;
            eD = new ki;
            eH = new kj;
            jt = new kk;
            ju = new kl;
            eI = new km;
            eF = new kn;
            eQ = new ko;
            jv = new kp;
            dr = new kq
        }

        function jx() {
            function g(L, H, M, Q) {
                for (var R, P = 0; P < L.length; P++) {
                    H.push(document.createElement("canvas"));
                    H[P].width = M;
                    H[P].height = M;
                    R = H[P].getContext("2d", {
                        alpha: true
                    });
                    var U = M
                        , W = R;
                    W.fillStyle = Q;
                    W.beginPath();
                    W.arc(Math.floor(U / 2), Math.floor(U / 2), Math.floor(.47 * U), 0, 2 * Math.PI);
                    W.fill();
                    6 === L[P] ? R.drawImage(bw.bz(19), 0, 0) : 7 === L[P] ? R.drawImage(bw.l9("emojis"), -4 * M, 0) : R.drawImage(bw.bz(3), -L[P] * M, 0)
                }
            }

            function k(L) {
                for (var H = K.length - 1; 0 <= H; H--)
                    if (K[H] === L)
                        return true;
                return false
            }

            function t(L) {
                return -1 === L || 0 === L || 6 === L || !x[5] && (8 === L || !x[4] && 7 === L) || !x[7] && (2 === L || !x[6] && 1 === L) || 3 === L && !x[2] || 5 === L && !x[1] && !x[5] && !x[7] ? false : true
            }

            function l(L, H) {
                return L < z - A - N || L > z + 2 * A + N || H < y - A - N || H > y + 2 * A + N ? -1 : 3 * (H < y - N / 2 ? 0 : H < y + A + N / 2 ? 1 : 2) + (L < z - N / 2 ? 0 : L < z + A + N / 2 ? 1 : 2)
            }

            var x = [], n, z, y, A, B, C, E, F, G, N, I, D, K, J;
            this.l0 = [];
            this.bp = function () {
                K = [];
                x = [];
                n = false;
                B = C = z = y = E = 0;
                this.l1();
                for (var L = this.l2.length - 1; 0 <= L; L--)
                    x.push(false);
                x.push(false)
            }
            ;
            this.l1 = function () {
                this.l2 = [];
                I = [];
                this.l3 = [];
                var L = bw.bz(3).height;
                A = Math.floor((q ? .075 : .0468) * bq);
                D = A / L;
                N = Math.floor(A / 3);
                g([0, 1, 2, 3, 7, 4, 5, 6], this.l2, L, "rgba(0,180,0,0.6)");
                g([0, 4, 5], I, L, "rgba(200,0,0,0.6)");
                g([0, 2, 4], this.l3, L, "rgba(0,0,0,0.6)");
                g([0, 5], this.l0, L, "rgba(200,200,0,0.6)");
                this.l2[6] = this.l0[1]
            }
            ;
            this.lB = function (L, H) {
                if (this.lC()) {
                    var M = this.c7(L, H);
                    c4.c5 = 0 < M;
                    return 2 > M
                }
                return false
            }
            ;
            this.lD = function (L, H) {
                this.lC() || (B = L,
                    C = H,
                    E = (new Date).getTime())
            }
            ;
            this.lE = function (L) {
                return L < g_playerCount && 2 !== fT[L]
            }
            ;
            this.c7 = function (L, H) {
                C = B = -1E3;
                if (2 === fT[g_localPlayerIndex] || 0 === g_isPlayersAliveArray[g_localPlayerIndex] && !fc)
                    return this.lF(),
                        1;
                if (n) {
                    this.lF();
                    if (a5.lG(L, H))
                        a5.lH(L, H, F) && (n = true);
                    else
                        return a5.lI(),
                            2;
                    return 1
                }
                var M = l(L, H);
                if (!t(M) || 0 === M || 6 === M || !x[2] && 3 === M)
                    return this.lF(),
                        2;
                if (1 === M) {
                    if (x[6]) {
                        M = (new Date).getTime();
                        M > J + 4E3 && (K = []);
                        J = M;
                        if (k(F))
                            return this.lF(),
                                1;
                        K.push(F);
                        16 < K.length && K.shift();
                        this.lF();
                        return 1
                    }
                    return 0
                }
                if (2 === M) {
                    if (x[7]) {
                        for (M = K.length - 1; 0 <= M; M--)
                            0 === g_isPlayersAliveArray[K[M]] && K.splice(M, 1);
                        0 < K.length && (eQ.lO(1, K, true) && (e9.lP(K, F),
                            ir.lQ(K, F)),
                            K = []);
                        this.lF();
                        return 1
                    }
                    return 0
                }
                if (3 === M) {
                    this.lF();
                    if (this.lE(F) && 7 > dv && 1071 > c4.dU())
                        return e9.lR(),
                            1;
                    e9.lS();
                    g_isSingleplayer ? triggerSupport(g_localPlayerIndex, F, as(eR.lT() * g_playerBalanceArray[g_localPlayerIndex], 1E3)) : ir.lU(eR.lT(), F === g_unclaimedLandIndex ? g_localPlayerIndex : F);
                    return 1
                }
                if (4 === M)
                    return x[0] ? fc ? (this.lF(),
                        g_isSingleplayer ? (fd.cQ(0, b5.gF(G), b5.cF(G)),
                            fd.dF()) : ir.lW(1E3, b5.gF(G), b5.cF(G))) : (this.lF(),
                        e9.lS(),
                        g_isSingleplayer ? triggerAttack(g_localPlayerIndex, F, eR.lT()) : (!jC || 300 < eB.lV()) && ir.lU(eR.lT(), F === g_unclaimedLandIndex ? g_localPlayerIndex : F)) : x[8] ? (this.lF(),
                        eH.lX(F, eR.lT())) : this.lF(),
                        1;
                if (5 === M)
                    return x[1] ? (this.lF(),
                        e9.lS(),
                        g_isSingleplayer ? eG.fM(g_localPlayerIndex, eR.lT(), b5.gF(G), b5.cF(G)) : ir.lW(eR.lT(), b5.gF(G), b5.cF(G)),
                        1) : 0;
                if (7 === M && x[4])
                    return this.lF(),
                        n = a5.show(L, H),
                        1;
                if (8 === M)
                    return x[5] ? (eQ.lO(0, [F], true) && (e9.lY(F, 0),
                        ir.lZ(F)),
                        this.lF(),
                        1) : 0;
                this.lF();
                return 2
            }
            ;
            this.click = function (L, H) {
                if (this.lC() || 2 === fT[g_localPlayerIndex] || 0 === g_isPlayersAliveArray[g_localPlayerIndex] && !fc)
                    return false;
                var M = (q ? .0288 : .0144) * bq;
                if (Math.abs(L - B) > M || Math.abs(H - C) > M || (new Date).getTime() > E + 425)
                    return false;
                M = Math.floor((L + gC) / g7);
                var Q = Math.floor((H + gD) / g7);
                if (1 > M || 1 > Q || M >= aZ - 1 || Q >= aa - 1)
                    return false;
                var R = Q * aZ * 4 + 4 * M;
                if (!b5.b6(R))
                    return false;
                if (2 === fZ)
                    return 1 <= a5.ld && (F = b5.bF(R),
                        this.lE(F)) ? (F === g_localPlayerIndex && this.lF(),
                        x[4] = true,
                        this.le(L, H)) : false;
                G = b5.f1(M, Q);
                if (fc)
                    return x[0] = true,
                        this.le(L, H);
                x[1] = ez.co(g_localPlayerIndex, G);
                if (b5.bG(R))
                    return F = g_unclaimedLandIndex,
                        lf(g_localPlayerIndex) ? x[0] = true : lg(g_localPlayerIndex, F) && (x[8] = true),
                        this.le(L, H);
                F = b5.bF(R);
                if (F === g_localPlayerIndex) {
                    this.lF();
                    if (0 === a5.ld)
                        return false;
                    x[4] = true;
                    return this.le(L, H)
                }
                M = x;
                Q = F;
                Q = hu.lE(Q) && !k(Q) && eQ.lO(1, [Q], false);
                M[6] = Q;
                x[4] = 1 <= a5.ld && this.lE(F);
                if (ch(F, g_localPlayerIndex)) {
                    x[5] = this.lE(F) && !eA.li(F) && eQ.lO(0, [F], false);
                    M = x;
                    Q = F;
                    if (0 === K.length)
                        Q = false;
                    else if ((new Date).getTime() > J + 4E3)
                        K = [],
                            Q = false;
                    else {
                        if (R = !k(Q)) {
                            b: {
                                if (dA)
                                    for (R = K.length - 1; 0 <= R; R--)
                                        if (!ch(Q, K[R])) {
                                            Q = true;
                                            break b
                                        }
                                Q = false
                            }
                            R = !Q
                        }
                        Q = R
                    }
                    M[7] = Q;
                    lk(g_localPlayerIndex, F) ? x[0] = true : lg(g_localPlayerIndex, F) && (x[8] = true);
                    return this.le(L, H)
                }
                x[2] = dA;
                return this.le(L, H)
            }
            ;
            this.le = function (L, H) {
                z = L - Math.floor(A / 2);
                y = H - Math.floor(A / 2);
                return this.lC()
            }
            ;
            this.lm = function (L, H) {
                if (!this.lC())
                    return false;
                if (n) {
                    if (a5.lG(L, H))
                        return false;
                    a5.lI();
                    n = false;
                    return c4.c5 = true
                }
                return t(l(L, H)) ? false : (this.lF(),
                    c4.c5 = true)
            }
            ;
            this.lF = function () {
                var L;
                for (L = x.length - 1; 0 <= L; L--)
                    x[L] = false;
                n = false
            }
            ;
            this.ln = function () {
                this.lF()
            }
            ;
            this.lC = function () {
                var L;
                for (L = x.length - 1; 0 <= L; L--)
                    if (x[L])
                        return true;
                return n
            }
            ;
            this.cG = function () {
                this.lC() && this.lo()
            }
            ;
            this.lo = function () {
                if (n)
                    a5.cG();
                else {
                    var L = (A + N) / D;
                    cH.imageSmoothingEnabled = true;
                    cH.setTransform(D, 0, 0, D, z, y);
                    x[0] ? fc ? cH.drawImage(this.l2[3], 0, 0) : cH.drawImage(this.l2[0], 0, 0) : x[8] ? cH.drawImage(this.l0[0], 0, 0) : cH.drawImage(I[0], 0, 0);
                    x[1] && cH.drawImage(this.l2[1], L, 0);
                    x[2] && cH.drawImage(this.l2[2], -L, 0);
                    x[4] && cH.drawImage(this.l2[4], 0, L);
                    x[5] && cH.drawImage(this.l2[5], L, L);
                    x[6] && cH.drawImage(this.l2[6], 0, -L);
                    x[7] && cH.drawImage(this.l2[7], L, -L);
                    cH.imageSmoothingEnabled = false;
                    cH.setTransform(1, 0, 0, 1, 0, 0)
                }
            }
        }

        function jy() {
            function g() {
                var B = x.getContext("2d", {
                    alpha: true
                });
                B.clearRect(0, 0, l, l);
                B.fillStyle = lx;
                B.fillRect(0, 0, l, l);
                0 === y && (B.fillStyle = ly,
                    B.fillRect(0, 0, l, l));
                B.fillStyle = cK;
                B.fillRect(0, 0, l, 1);
                B.fillRect(0, 0, 1, l);
                B.fillRect(0, l - 1, l, 1);
                B.fillRect(l - 1, 0, 1, l);
                var C = .9 * l / bw.bz(0).width;
                B.imageSmoothingEnabled = true;
                B.setTransform(C, 0, 0, C, Math.floor((l - C * bw.bz(0).width) / 2), Math.floor((l - C * bw.bz(0).height) / 2));
                B.drawImage(bw.bz(0), 0, 0);
                B.setTransform(1, 0, 0, 1, 0, 0)
            }

            function k(B, C) {
                if (!fq.lu)
                    return B <= l + m5 && C >= eR.fK ? 0 : -1;
                if (B <= 4 * l + m5) {
                    if (C >= eR.fK)
                        return 0;
                    if (C >= eR.fK - l - A * m5)
                        return 2;
                    if (C >= eR.fK - 2 * (l + A * m5))
                        return 3
                } else if (B <= 7 * l + m5 && C >= eR.fK - l - A * m5)
                    return 1;
                return -1
            }

            function t(B, C) {
                cH.setTransform(1, 0, 0, 1, m5, eR.fK - B * A * m5 - B * l);
                cH.fillStyle = lx;
                cH.fillRect(0, 0, 4 * l, l);
                y === B + 1 && C === cK && (cH.fillStyle = ly,
                    cH.fillRect(0, 0, 4 * l, l));
                cH.fillStyle = C;
                cH.fillRect(0, 0, 4 * l, 1);
                cH.fillRect(0, 0, 1, l);
                cH.fillRect(4 * l, 0, 1, l);
                cH.fillRect(0, l - 1, 4 * l, 1);
                cH.fillText(z[B], 2 * l, .54 * l)
            }

            var l, x, n, z = ["Quit Game", "Surrender", "Statistics"], y, A;
            this.bp = function () {
                y = -1;
                this.lu = false;
                A = q ? 1.2 : .6;
                this.lv()
            }
            ;
            this.lv = function () {
                l = eR.cw;
                x = document.createElement("canvas");
                x.width = l;
                x.height = l;
                n = bt + Math.floor((q ? .5 : .45) * l) + bu;
                g()
            }
            ;
            this.m0 = function () {
                (this.lu = !this.lu) ? (g_uiVisibility = false,
                g_isSingleplayer && 1 === fZ && !fc && (eM.eb(true),
                    setTimeout(function () {
                        h8.iz()
                    }, 0),
                    a9(0))) : (y = -1,
                    g(),
                g_isSingleplayer && a9(1));
                c4.c5 = true
            }
            ;
            this.c7 = function (B, C) {
                var E = k(B, C);
                return this.lu ? 0 === E ? (jb(),
                    2) : 1 === E ? (this.m0(),
                    2) : 2 === E ? (this.fr(g_localPlayerIndex) && (g_isSingleplayer ? eG.fp(g_localPlayerIndex) : ir.m3(),
                    this.m0()),
                    2) : 3 === E && 2 <= b0.m4 ? (hv.m0(),
                    c4.c5 = true,
                    2) : hv.lC ? 1 : (this.m0(),
                    2) : 0 === E ? (this.m0(),
                    2) : 0
            }
            ;
            this.lm = function (B, C) {
                var E = k(B, C);
                if (E === y)
                    return -1 !== y;
                y = E;
                this.lu || g();
                c4.c5 = true;
                return -1 !== y
            }
            ;
            this.cG = function () {
                if (this.lu) {
                    var B = Math.floor(5.5 * l);
                    cH.setTransform(1, 0, 0, 1, m5, eR.fK);
                    cH.fillStyle = lx;
                    cH.fillRect(0, 0, B, l);
                    0 === y ? (cH.fillStyle = ly,
                        cH.fillRect(0, 0, 4 * l, l)) : 1 === y && (cH.fillStyle = ly,
                        cH.fillRect(4 * l, 0, Math.floor(1.5 * l), l));
                    cH.fillStyle = cK;
                    cH.fillRect(0, 0, B, 1);
                    cH.fillRect(0, 0, 1, l);
                    cH.fillRect(4 * l, 0, 1, l);
                    cH.fillRect(0, l - 1, B, 1);
                    cH.fillRect(B - 1, 0, 1, l);
                    cH.font = n;
                    cH.textBaseline = cI;
                    cH.textAlign = cJ;
                    cH.fillText(z[0], 2 * l, .54 * l);
                    B = .4 * l;
                    fq.m9(m5 + 4 * l + (1.5 * l - B) / 2, eR.fK + .3 * l, B);
                    t(1, fq.fr(g_localPlayerIndex) ? cK : mB);
                    2 <= b0.m4 && t(2, cK);
                    cH.setTransform(1, 0, 0, 1, 0, 0)
                } else
                    cH.drawImage(x, m5, eR.fK)
            }
            ;
            this.fr = function (B) {
                return 0 !== g_isPlayersAliveArray[B] && 2 !== fZ && hu.lE(B)
            }
            ;
            this.m9 = function (B, C, E) {
                cH.setTransform(1, 0, 0, 1, B, C);
                cH.lineWidth = 2;
                cH.strokeStyle = cK;
                cH.beginPath();
                cH.moveTo(0, 0);
                cH.lineTo(E, E);
                cH.moveTo(0, E);
                cH.lineTo(E, 0);
                cH.stroke()
            }
        }

        function jz() {
            var g, k, t, l, x, n, z;

            function y() {
                return eR.md(e9.ma()) ? eS.lC ? eR.fK - eR.cw - 2 * N : eR.fK - N : eS.lC ? s - eR.cw - (q ? 3 : 2) * N : s - N
            }

            function renderInFeed(H, M, Q, R, P, U, W, X) {
                var V = 1E3 <= Q;
                var ia = Math.floor(c2.measureText(M, e9.c0) + 1.5 * I + (V ? G : 1.5 * I));
                if (ia + N > r && !V && 50 !== Q && 20 < M.length) {
                    var Y = Math.floor(.5 * M.length);
                    renderInFeed(H, M.substring(0, Y), Q, R, P, U, W, X);
                    renderInFeed(H, M.substring(Y), Q, R, P, U, W, X)
                } else {
                    var pa = Q - 1E3;
                    Y = ia + (50 === Q ? D : 0);
                    var na = document.createElement("canvas");
                    na.width = ia;
                    na.height = G;
                    var S = na.getContext("2d", {
                        alpha: true
                    });
                    S.font = e9.c0;
                    S.textBaseline = cI;
                    S.textAlign = mh;
                    S.clearRect(0, 0, ia, G);
                    S.fillStyle = U;
                    S.fillRect(0, 0, ia, G);
                    S.fillStyle = P;
                    S.fillText(M, Math.floor(1.5 * I), Math.floor(G / 2));
                    V && (V = G / a5.c1,
                        S.imageSmoothingEnabled = true,
                        S.setTransform(V, 0, 0, V, ia - G, 0),
                        S.drawImage(a5.l5[pa], 0, 0));
                    F.unshift({
                        gc: H,
                        l: M,
                        id: Q,
                        player: R,
                        lq: na,
                        mU: P,
                        mV: U,
                        c1: ia,
                        mb: Y,
                        mW: W,
                        mX: X
                    })
                }
            }

            function B(H, M) {
                var Q, R = 0, P = F.length;
                for (Q = 0; Q < P; Q++)
                    if (F[Q].id === H && (R++,
                    R >= M)) {
                        F.splice(Q, 1);
                        break
                    }
            }

            function C(H, M, Q) {
                return "rgb(" + H + "," + M + "," + Q + ")"
            }

            function E(H, M) {
                var Q, R = false;
                for (Q = F.length - 1; 0 <= Q; Q--)
                    F[Q].id !== H || M !== g_unclaimedLandIndex && F[Q].player !== M || (F.splice(Q, 1),
                        R = true);
                return R
            }

            var F, G, N, I, D, K, J, L;
            this.bp = function () {
                J = 0;
                K = q ? 7 : 12;
                g = [0, 0, 0];
                k = [0, 0, 0];
                t = [220, 180, 180];
                l = [0, 0, 0];
                x = [0, 0, 0];
                n = [" were conquered.", " left the game.", " surrendered."];
                z = [" was conquered by ", " left the game.", " surrendered."];
                F = [];
                this.lv();
                fc && this.throwGameEvent(0, 18);
                var H = "Map: " + jm.nD() + "   Pixels: " + eP.gJ(jQ.nE) + "   Land: " + eP.gJ(jQ.nF) + " (" + eB.nG(100 * jQ.nF / jQ.nE, 1) + ")"
                    , M = "";
                0 < jQ.nI && (M += "Water: " + eP.gJ(jQ.nI) + " (" + eB.nG(100 * jQ.nI / jQ.nE, 1) + ")");
                0 < jQ.nJ && (M += 0 < jQ.nI ? "   " : "",
                    M += "Mountains: " + eP.gJ(jQ.nJ) + " (" + eB.nG(100 * jQ.nJ / jQ.nE, 1) + ")");
                renderInFeed(340, H, 6, 0, C(215, 245, 255), hy, -1, false);
                0 < M.length && renderInFeed(340, M, 6, 0, C(215, 245, 255), hy, -1, false);
                10 === dv && renderInFeed(120, "Full sending against human players is disabled.", 6, 0, C(235, 255, 120), hy, -1, false);
                this.mP()
            }
            ;
            this.mP = function () {
                var H;
                if (dr.ds) {
                    var M = dr.dt.mQ.length;
                    for (H = 0; H < M; H++)
                        renderInFeed(400, dr.dt.mQ[H], 6, 0, C(255, 255, 255), hy, -1, false)
                }
            }
            ;
            this.lv = function () {
                var H;
                G = Math.floor((q ? .031 : .0249) * bq);
                G = 10 > G ? 10 : G;
                this.by = Math.floor(2 * G / 3);
                this.c0 = bt + this.by + bu;
                N = m5;
                I = Math.floor(G / 5);
                if (0 < F.length) {
                    var M = F;
                    F = [];
                    for (H = M.length - 1; 0 <= H; H--)
                        renderInFeed(M[H].gc, M[H].l, M[H].id, M[H].player, M[H].mU, M[H].mV, M[H].mW, M[H].mX)
                }
                this.mY()
            }
            ;
            this.mY = function () {
                L = document.createElement("canvas");
                D = c2.measureText("Accept", this.c0) + 5 * I;
                L.height = G;
                L.width = D;
                var H = L.getContext("2d", {
                    alpha: true
                });
                H.font = this.c0;
                H.textBaseline = cI;
                H.textAlign = cJ;
                H.clearRect(0, 0, D, G);
                H.fillStyle = mZ;
                H.fillRect(0, 0, D, G);
                H.fillStyle = cK;
                H.fillText("Accept", Math.floor(D / 2), Math.floor(G / 2))
            }
            ;
            this.ma = function () {
                if (eS.lC)
                    return eS.c1;
                var H = F.length;
                return 0 === H ? 0 : 1 === H ? F[0].mb : mc(F[0].mb, F[1].mb)
            }
            ;
            this.c7 = function (H, M) {
                for (var Q = y(), R, P = F.length - 1; 0 <= P; P--)
                    if (R = Q - (P + 1) * G,
                    M >= R && M < R + G) {
                        if (50 === F[P].id) {
                            if (H >= gE - D - N - F[P].c1)
                                return H >= gE - D - N ? (P = F[P].player,
                                    this.lY(P, 0),
                                    ir.lZ(P)) : eV.gg(F[P].player, 800, false, 0),
                                    true;
                            break
                        }
                        if (H >= gE - F[P].c1 - N)
                            return F[P].mX && (eV.gg(F[P].player, 800, false, 0),
                            0 <= F[P].mW && (Q = F[P].mW,
                                F[P].mW = F[P].player,
                                F[P].player = Q)),
                                true;
                        break
                    }
                return false
            }
            ;
            this.j3 = function (H) {
                for (var M = F.length - 1; 0 <= M; M--)
                    F[M].id === H && (F[M].gc = 1)
            }
            ;
            this.throwGameEvent = function (H, eventIndex) {
                0 === eventIndex ? (b0.b1[H < g_playerCount ? 4 : 3]++,
                    c2.cQ(H, 0),
                    renderInFeed(q ? 100 : 160, "You conquered " + g_playerNameArray[H] + ".", 0, H, "rgb(10,220,10)", hy, -1, false)) : 1 === eventIndex ? (E(50, g_unclaimedLandIndex),
                    c2.cQ(H, 1),
                    renderInFeed(360, "You were conquered by " + g_playerNameArray[H] + ".", 0, H, "rgb(255,40,40)", hy, -1, true),
                    eV.gg(H, 2700, true, 0)) : 2 === eventIndex ? (c2.cQ(H, 2),
                    renderInFeed(0, "Congratulations! You won the game.", 0, H, "rgb(10,255,255)", hy, -1, true),
                    eV.gg(H, 2700, true, 0)) : 3 === eventIndex ? (c2.cQ(H, 2),
                    renderInFeed(0, g_playerNameArray[H] + " won the game.", 0, H, cK, hy, -1, true),
                    eV.gg(H, 2700, true, 0)) : 4 === eventIndex ? (ix--,
                    iw--,
                    this.mj(1, H, H)) : 5 === eventIndex ? 2 !== fT[H] && hu.lE(g_localPlayerIndex) && (B(1, 5),
                    eA.ml(H) ? renderInFeed(180, g_playerNameArray[H] + " has broken the non-aggression pact and invades you!", 1, H, C(255, 200, 180), hy, -1, true) : renderInFeed(180, g_playerNameArray[H] + " is attacking you!", 1, H, "rgb(255,70,10)", hy, -1, true)) : 18 === eventIndex ? renderInFeed(255, "Choose your start position!", 18, 0, cK, hy, -1, false) : 21 === eventIndex ? renderInFeed(220, "You surrendered!", eventIndex, 0, "rgb(255,40,40)", hy, -1, false) : 22 === eventIndex && this.mj(2, H, H)
            }
            ;
            this.mm = function (H) {
                renderInFeed(200, "Error [" + H + "]", 94, 0, cK, mo, -1, false)
            }
            ;
            this.iq = function (H) {
                c2.cQ(H, 2);
                100 > g_playerCount ? renderInFeed(0, g_playerNameArray[H] + " won the game.", 3, H, cK, hy, -1, true) : renderInFeed(0, g_playerNameArray[H] + " has been immortalized!", 3, H, cK, hy, -1, true);
                eV.gg(H, 2700, true, 0)
            }
            ;
            this.mp = function (H, M, Q) {
                H === g_localPlayerIndex ? renderInFeed(175, " Message to " + g_playerNameArray[M] + ": ", 1E3 + Q, M, C(200, 255, 210), hy, -1, true) : this.ms(H, Q)
            }
            ;
            this.ms = function (eventPlayerIndex, M) {
                var Q, R = 0;
                renderInFeed(175, g_playerNameArray[eventPlayerIndex] + ": ", 1E3 + M, eventPlayerIndex, cK, "rgba(5,60,25,0.9)", -1, true);
                for (Q = 0; Q < F.length; Q++)
                    if (1E3 <= F[Q].id && F[Q].player === eventPlayerIndex && (R++,
                    3 < R)) {
                        F.splice(Q, 1);
                        break
                    }
            }
            ;
            this.ip = function (H) {
                var M = dW.im[eT.mw()];
                H ? (9 === dv ? (H = "The Resistance defeated the virus.",
                    c2.mx("The Resistance", 2, 1, 12)) : H = "Congratulations! Team " + dW.bo[M] + " has won the game!",
                    renderInFeed(0, H, 40, 0, "rgb(10,220,10)", hy, -1, false)) : (9 === dv ? (H = "Mankind lost the war against the virus.",
                    c2.mx("The Virus", 2, 0, 16)) : H = "Our alliance has been defeated!",
                    renderInFeed(0, H, 41, 0, "rgb(200,80,80)", hy, -1, false));
                9 !== dv && c2.mx("Team " + dW.bo[M], 2, 1, 12);
                eV.gp(2700)
            }
            ;
            this.i9 = function (H) {
                renderInFeed(300, H[0].name + " [" + ij.iF(H[0].iC) + "] vs " + H[1].name + " [" + ij.iF(H[1].iC) + "]", 65, 0, gH, "rgba(100,255,255,0.75)", -1, false)
            }
            ;
            this.my = function (H) {
                renderInFeed(200, H, 0, 0, "rgb(40,255,200)", "rgba(10,60,40,0.9)", -1, false)
            }
            ;
            this.iH = function (H, M, Q, R) {
                1 === eD.n0() && (renderInFeed(0, H[0].name + ": " + ij.iF(H[0].iC) + " -> " + M, 66, 0, cK, R[0], -1, false),
                    renderInFeed(0, H[1].name + ": " + ij.iF(H[1].iC) + " -> " + Q, 66, 1, cK, R[1], -1, false))
            }
            ;
            this.io = function (H) {
                1 === eD.n0() && renderInFeed(0, "[" + H + "] has won " + g_playerCount + (jE ? " x 2" : "") + " points!", 45, 0, "rgb(225,240,255)", hy, -1, false)
            }
            ;
            this.lY = function (H, M) {
                0 === M ? E(50, H) ? (renderInFeed(128, "You signed a non-aggression pact with " + g_playerNameArray[H] + ".", 52, H, C(180, 255, 180), hy, -1, true),
                    eA.n2(H, 2, 255)) : renderInFeed(384, "You asked " + g_playerNameArray[H] + " to sign a non-aggression pact.", 51, H, C(210, 210, 255), hy, -1, true) : E(51, H) ? (renderInFeed(128, g_playerNameArray[H] + " accepted the non-aggression pact.", 52, H, cK, "rgba(60,120,10,0.9)", -1, true),
                    eA.n2(H, 2, 255)) : (renderInFeed(384, g_playerNameArray[H] + " requests a non-aggression pact.", 50, H, cK, "rgba(90,90,90,0.9)", -1, true),
                    eA.n2(H, 2, 96))
            }
            ;
            this.lP = function (H, M) {
                var Q = "You ", R;
                a: {
                    for (R = H.length - 1; 0 <= R; R--)
                        if (2 * g_playerLandArray[H[R]] > g_playerLandArray[g_localPlayerIndex]) {
                            R = false;
                            break a
                        }
                    R = true
                }
                R ? (Q += "ordered ",
                    R = C(255, 235, 210)) : (Q += "asked ",
                    R = C(210, 255, 210));
                1 < H.length ? renderInFeed(230, Q + H.length + " players to attack " + g_playerNameArray[M] + ".", 66, M, R, hy, -1, true) : renderInFeed(230, Q + g_playerNameArray[H[0]] + " to attack " + g_playerNameArray[M] + ".", 66, H[0], R, hy, M, true)
            }
            ;
            this.n5 = function (H, M) {
                g_playerLandArray[H] > 2 * g_playerLandArray[g_localPlayerIndex] ? renderInFeed(230, g_playerNameArray[H] + " orders you to attack " + g_playerNameArray[M] + "!", 66, H, cK, "rgba(90,50,5,0.9)", M, true) : renderInFeed(230, g_playerNameArray[H] + " asks you to attack " + g_playerNameArray[M] + ".", 66, H, cK, "rgba(75,65,5,0.9)", M, true)
            }
            ;
            this.n7 = function (H, M) {
                E(H, M)
            }
            ;
            this.lS = function () {
                100 <= g_playerBalanceArray[g_localPlayerIndex] || renderInFeed(80, "Your balance is too low!", 9, 0, cK, hy, -1, false)
            }
            ;
            this.lR = function () {
                renderInFeed(80, "Boosting is disallowed in the first minute!", 9, 0, cK, hy, -1, false)
            }
            ;
            this.n8 = function (H, M) {
                2 !== fT[g_localPlayerIndex] && renderInFeed(200, "You exported " + eP.gJ(H) + " resource" + (1 === H ? "" : "s") + " to " + g_playerNameArray[M] + ".", 30, M, "rgb(190,255,190)", hy, -1, true)
            }
            ;
            this.nA = function (H, M) {
                if (2 !== fT[g_localPlayerIndex]) {
                    var Q = 2 === fT[M] || M >= g_playerCount;
                    var R = 200 - 20 * F.length;
                    renderInFeed(80 > R ? 80 : R, (Q ? "A bot" : g_playerNameArray[M]) + " supported you with " + eP.gJ(H) + " resource" + (1 === H ? "" : "s") + ".", 31, M, gH, Q ? "rgba(205,205,205,0.9)" : "rgba(205,255,205,0.9)", -1, true);
                    B(31, q ? 4 : 6)
                }
            }
            ;
            this.iy = function (H) {
                var M, Q = c4.dU();
                for (M = 2; 0 <= M; M--)
                    0 < l[M] && (H || x[M] < Q - 220) && this.nL(M)
            }
            ;
            this.nL = function (H) {
                var M = l[H];
                var Q = g[H];
                l[H] = 0;
                1 === M ? (M = g_playerNameArray[Q] + z[H],
                0 === H && (M += g_playerNameArray[k[H]] + "."),
                    renderInFeed(t[H], M, 7, k[H], cK, hy, -1, true)) : 2 <= M && (M = g_playerNameArray[Q] + " and " + (M - 1) + " other player" + (2 === M ? "" : "s") + n[H],
                    renderInFeed(t[H], M, 7, Q, cK, hy, -1, false))
            }
            ;
            this.mj = function (H, M, Q) {
                var R = c4.dU()
                    , P = l[H] + 1;
                l[H]++;
                g[H] = M;
                k[H] = Q;
                1 === P && (x[H] = R);
                1 === P && (32 > ix || 2 === fZ) ? this.nL(H) : 1 < P && (x[H] < R - 140 || 2 === fZ) && this.nL(H)
            }
            ;
            this.dF = function () {
                var H, M = F.length - K;
                M = 1 >= M ? 1 : M * M;
                for (H = F.length - 1; 0 <= H; H--)
                    0 < F[H].gc && (F[H].gc -= M,
                    0 >= F[H].gc && F.splice(H, 1));
                if (128 !== J && (J++,
                    !(128 > J)))
                    for (H = 5,
                             M = dY - 1; 0 <= M; M--)
                        1 === fT[dZ[M]] && 0 < H-- && renderInFeed(240, g_playerNameArray[dZ[M]] + " joined the game.", 1, dZ[M], gH, "rgba(255,255,255,0.75)", -1, true);
                this.iy(false)
            }
            ;
            this.cG = function () {
                for (var H = y(), M, Q = F.length - 1; 0 <= Q; Q--)
                    M = H - (Q + 1) * G,
                        50 === F[Q].id ? (cH.drawImage(F[Q].lq, gE - F[Q].c1 - D - N, M),
                            cH.drawImage(L, gE - D - N, M)) : cH.drawImage(F[Q].lq, gE - F[Q].c1 - N, M)
            }
        }

        function nO() {
            this.by = this.nQ = this.nP = this.i4 = this.cw = this.c1 = 0;
            this.bs = -1;
            this.lr = ["Accept Cookies", "More Information", "Decline"];
            this.colors = ["rgba(0,255,0,0.4)", "rgba(0,0,255,0.4)", "rgba(255,0,0,0.4)"];
            this.lC = false;
            this.bp = function () {
                this.lv();
                this.lC = 5 > d && !g_isIOSUser && 0 === f.a0()
            }
            ;
            this.lv = function () {
                this.c1 = Math.floor(2.8 * Math.floor((q ? .09 : .062) * bq));
                this.cw = Math.floor(1 * this.c1);
                this.i4 = Math.floor(.06 * this.c1);
                this.i5 = this.c1 - 2 * this.i4;
                this.nP = this.i4;
                this.nQ = (this.cw - (this.lr.length + 1) * this.nP) / this.lr.length;
                this.by = Math.floor(.3 * this.nQ)
            }
            ;
            this.c7 = function (g, k) {
                if (!this.lC)
                    return false;
                var t = this.nS(g, k);
                if (-1 === t)
                    return false;
                0 === t ? (f.nT(2),
                    this.lC = false) : 1 === t ? nU.bp(nV, true) : 2 === t && (f.nT(1),
                    this.lC = false);
                return c4.c5 = true
            }
            ;
            this.lm = function (g, k) {
                if (!this.lC)
                    return false;
                var t = this.bs;
                this.bs = this.nS(g, k);
                t !== this.bs && (c4.c5 = true);
                return -1 !== this.bs
            }
            ;
            this.nS = function (g, k) {
                g -= cA;
                k -= Math.floor(cB - this.cw - cA);
                if (0 > g || 0 > k || g >= this.c1 || k >= this.cw)
                    return -1;
                var t = Math.floor((k - .5 * this.nP) / ((this.cw - this.nP) / this.lr.length));
                return 0 > t ? 0 : t >= this.lr.length ? this.lr.length - 1 : t
            }
            ;
            this.cG = function () {
                this.lC && this.nW()
            }
            ;
            this.nW = function () {
                var g = cA
                    , k = Math.floor(cB - this.cw - cA);
                cH.setTransform(1, 0, 0, 1, g, k);
                cH.fillStyle = hy;
                cH.fillRect(0, 0, this.c1, this.cw);
                cH.textBaseline = cI;
                cH.textAlign = cJ;
                cH.strokeStyle = cK;
                cH.font = bt + this.by + bu;
                cH.strokeRect(0, 0, this.c1, this.cw);
                for (var t = this.lr.length - 1; 0 <= t; t--)
                    cH.setTransform(1, 0, 0, 1, g + this.i4, k + this.nP + t * (this.nP + this.nQ)),
                        cH.fillStyle = this.colors[t],
                        cH.fillRect(0, 0, this.i5, this.nQ),
                    this.bs === t && (cH.fillStyle = nX,
                        cH.fillRect(0, 0, this.i5, this.nQ)),
                        cH.fillStyle = cK,
                        cH.fillText(this.lr[t], this.i5 / 2, .54 * this.nQ),
                        cH.strokeRect(0, 0, this.i5, this.nQ);
                cH.setTransform(1, 0, 0, 1, 0, 0)
            }
        }

        function k0() {
            function g(y) {
                return 10 > y ? "0" + y : String(y)
            }

            var k, t, l, x, n, z;
            this.bp = function () {
                void 0 === x && this.lv();
                this.setTime()
            }
            ;
            this.lv = function () {
                x = Math.floor((q ? .53 : .36) * bq);
                n = Math.floor(.065 * x);
                z = bt + Math.floor(.9 * n) + bu;
                l--;
                this.setTime()
            }
            ;
            this.dF = function () {
                this.setTime() && (c4.c5 = true)
            }
            ;
            this.setTime = function () {
                var y = new Date;
                var A = y.getUTCMinutes()
                    , B = y.getUTCSeconds();
                t = 3600 - 60 * A - B;
                t %= 900;
                k = "Next Contest: " + g(Math.floor(t / 60)) + ":" + g(t % 60);
                y = l;
                l = 60 * A + B;
                if (y === l)
                    return false;
                x = c2.measureText(k, z);
                x += Math.floor(.4 * n);
                return true
            }
            ;
            this.cG = function () {
                cH.lineWidth = 1 + Math.floor(n / 15);
                cH.translate(gE - n, Math.floor(.5 * (cB + x)));
                cH.rotate(-Math.PI / 2);
                cH.fillStyle = cK;
                cH.fillRect(0, 0, x, n);
                cH.strokeStyle = gH;
                cH.strokeRect(0, 0, x, n + 10);
                cH.fillStyle = gH;
                cH.font = z;
                cH.textBaseline = cI;
                cH.textAlign = cJ;
                cH.fillText(k, Math.floor(x / 2), Math.floor(.59 * n));
                cH.setTransform(1, 0, 0, 1, 0, 0)
            }
        }

        function ng() {
            this.nh = 10;
            this.nj = this.ni = 50;
            this.nk = 8;
            this.nl = this.ni + this.nj;
            this.a6 = this.ni + this.nj + this.nk;
            this.c1 = 72;
            this.nn = this.nm = 0;
            this.l5 = Array(this.a6);
            this.no = 8;
            this.np = Array(this.ni + this.nj);
            this.nq = Array(this.ni + this.nj);
            this.fA = this.f9 = 0;
            this.zoom = 1;
            this.nr = .2;
            this.ld = 0;
            this.ns = this.a7 = null;
            this.nt = 0;
            this.bp = function () {
                var g;
                this.a7 = Array(this.a6);
                this.ns = Array(this.a6);
                var k = bw.l9("emojis");
                this.nv();
                for (g = this.ld = 0; g < this.ni; g++)
                    this.nw(g, g, k);
                k = bw.l9("flags");
                for (g = 0; g < this.nj; g++)
                    this.nw(g, this.ni + g, k);
                this.ny();
                this.l5[26] = this.nz(25, 2);
                this.o0()
            }
            ;
            this.nw = function (g, k, t) {
                this.a7[k] = false;
                this.ns[k] = 0;
                var l = document.createElement("canvas");
                l.width = this.c1;
                l.height = this.c1;
                var x = l.getContext("2d", {
                    alpha: true
                });
                x.clearRect(0, 0, this.c1, this.c1);
                23 === k ? x.drawImage(hu.l3[2], 0, 0) : 36 === k ? x.drawImage(hu.l3[0], 0, 0) : 49 === k ? x.drawImage(hu.l3[1], 0, 0) : x.drawImage(t, this.c1 * g % (g === k ? this.nh * this.c1 : 4E3), g === k ? as(g, this.nh) * this.c1 : 0, this.c1, this.c1, 0, 0, this.c1, this.c1);
                this.l5[k] = l
            }
            ;
            this.ny = function () {
                this.l5[this.a6 - 5] = this.l5[26];
                this.l5[this.a6 - 4] = this.nz(this.a6 - 5, 2);
                this.l5[this.a6 - 1] = this.nz(this.a6 - 5, 1);
                this.l5[this.a6 - 8] = this.nz(this.a6 - 4, 1);
                this.l5[this.a6 - 3] = this.l5[39];
                this.l5[this.a6 - 2] = this.nz(this.a6 - 3, 1);
                this.l5[this.a6 - 7] = this.nz(this.a6 - 2, 1);
                this.l5[this.a6 - 6] = this.nz(this.a6 - 7, 1)
            }
            ;
            this.nz = function (g, k) {
                var t = document.createElement("canvas");
                t.width = this.c1;
                t.height = this.c1;
                var l = t.getContext("2d", {
                    alpha: true
                });
                l.clearRect(0, 0, this.c1, this.c1);
                l.rotate(k * Math.PI / 2);
                l.drawImage(this.l5[g], 1 === k ? 0 : -this.c1, -this.c1);
                return t
            }
            ;
            this.o0 = function () {
                var g = u().split("");
                if (2 * g.length !== this.a6)
                    this.ld = 0;
                else {
                    for (var k = 0; k < this.a6; k += 2) {
                        var t = parseInt(g[Math.floor(k / 2)]);
                        this.a7[k] = 1 === t % 2;
                        this.a7[k + 1] = 1 < t
                    }
                    this.o3()
                }
            }
            ;
            this.o3 = function () {
                for (var g = this.ld = 0; g < this.a6; g++)
                    this.a7[g] && (this.ns[this.ld++] = g)
            }
            ;
            this.lI = function () {
                8 === this.ld && this.ns[0] === this.nl && this.o3()
            }
            ;
            this.o4 = function () {
                this.ld = this.nk;
                for (var g = 0; g < this.nk; g++)
                    this.ns[g] = this.nl + g
            }
            ;
            this.nv = function () {
                this.nm = Math.floor((q ? .075 : .0468) * bq);
                this.zoom = this.nm / this.c1;
                this.nn = (1 + this.nr) * this.nm
            }
            ;
            this.show = function (g, k) {
                if (1 > this.ld)
                    return false;
                this.nt = c4.gc;
                var t = Math.floor(gE / this.nn);
                t = 3 > t ? 3 : t > this.no ? this.no : t;
                t = this.ld > t ? t : this.ld;
                var l = 1 + as(this.ld - 1, t)
                    , x = Math.floor(t * this.nn)
                    , n = Math.floor(g - x / 2);
                n = n + x > gE ? gE - x : n;
                n = 0 > n ? 0 : n;
                var z = Math.floor(k - this.nn / 2);
                l = Math.floor(l * this.nn);
                z = z + l > cB ? cB - l : z;
                z = 0 > z ? 0 : z;
                this.f9 = n + x;
                this.fA = z + l;
                for (x = 0; x < this.ld; x++)
                    this.np[x] = Math.floor(n + x % t * this.nn),
                        this.nq[x] = Math.floor(z + as(x, t) * this.nn);
                return true
            }
            ;
            this.lG = function (g, k) {
                return !(g < this.np[0] || k < this.nq[0] || g >= this.f9 || k >= this.fA)
            }
            ;
            this.lH = function (g, k, t) {
                if (t === g_localPlayerIndex && this.nt + 190 > c4.gc)
                    return false;
                for (var l = this.ld - 1; 0 <= l; l--)
                    if (g >= this.np[l] && k >= this.nq[l]) {
                        if (39 === this.ns[l])
                            return this.o4(),
                                this.show(g, k),
                                true;
                        g_isSingleplayer ? eA.n2(g_localPlayerIndex, 0, this.ns[l]) : t === g_localPlayerIndex ? ir.o8(this.ns[l]) : ir.o9(this.ns[l], t);
                        this.o3();
                        break
                    }
                return false
            }
            ;
            this.oA = function (g) {
                return 16 > g || 40 <= g && 47 > g
            }
            ;
            this.oB = function (g) {
                return g >= this.ni && g < this.ni + this.nj
            }
            ;
            this.cG = function () {
                cH.imageSmoothingEnabled = true;
                for (var g = this.nr * this.nm / 2, k = this.ld - 1; 0 <= k; k--)
                    cH.setTransform(this.zoom, 0, 0, this.zoom, this.np[k] + g, this.nq[k] + g),
                        cH.drawImage(this.l5[this.ns[k]], 0, 0);
                cH.imageSmoothingEnabled = false;
                cH.setTransform(1, 0, 0, 1, 0, 0)
            }
            ;
            this.oC = function (g, k, t) {
                cH.imageSmoothingEnabled = true;
                cH.setTransform(this.zoom, 0, 0, this.zoom, g, k);
                cH.drawImage(this.l5[t], 0, 0);
                cH.imageSmoothingEnabled = false;
                cH.setTransform(1, 0, 0, 1, 0, 0)
            }
        }

        var gH = "rgb(0,0,0)", oD = "rgba(0,0,0,0.7)", oE = "rgba(0,0,0,0.5)", lx = "rgba(0,0,0,0.5)",
            hy = "rgba(0,0,0,0.75)", oF = "rgba(0,0,0,0.85)", oG = "rgba(0,96,96,0.75)", oH = "rgb(255,255,255)",
            mB = "rgb(128,128,128)", oI = "rgb(30,255,30)", oJ = "rgb(0,200,0)", oK = "rgb(0,255,0)",
            oL = "rgba(0,255,0,0.6)", oM = "rgba(0,255,0,0.5)", oN = "rgba(0,200,0,0.5)", mZ = "rgba(0,100,0,0.75)",
            oO = "rgba(0,40,0,0.8)", oP = "rgb(128,255,128)", oQ = "rgba(255,255,150,0.2)", oR = "rgba(0,255,0,0.3)",
            ly = "rgba(255,255,255,0.3)", oS = "rgba(0,40,90,0.75)", oT = "rgba(220,0,0,0.6)",
            oU = "rgba(255,100,100,0.8)", mo = "rgba(100,0,0,0.85)", oV = "rgba(60,0,0,0.85)", oW = "rgb(255,120,120)",
            oX = "rgb(255,160,160)", oY = "rgb(255,70,70)", oZ = "rgb(230,0,0)", oa = "rgba(0,60,60,0.85)",
            ob = "rgb(160,160,255)", cK = "rgb(255,255,255)", oc = "rgba(255,255,255,0.6)",
            od = "rgba(255,255,255,0.4)", nX = "rgba(255,255,255,0.25)", oe = "rgba(255,255,255,0.85)",
            of = "rgba(255,255,255,0.75)", og = "rgb(255,120,100)", oh = "rgba(255,255,0,0.5)", cI = "middle",
            oi = "bottom", cJ = "center", mh = "left", oj = "right", bt = "bold ", ok = "italic ", ol = "normal ",
            bu = "px Arial", om = [bt, ok + bt, bt],
            on = "https://play.google.com/store/apps/details?id=territorial.io",
            oo = "https://apps.apple.com/app/id1581110913", op = "https://www.youtube.com/watch?v=toZTQ8aRdFc",
            oq = "https://discord.gg/pthqvpTXmh", or = "https://www.instagram.com/davidtschacher/",
            nV = "https://territorial.io/cookie_policy", os = "https://territorial.io/privacy_policy",
            ot = "https://territorial.io/tutorial",
            ou = ["https://territorial.io/players", "https://territorial.io/clans"], m5, ov, cA, ow, ox, oy, oz, cC,
            p0 = ["wss://", "/s50/", "/s51/", "/s52/"];

        function p1() {
            p2();
            ow = 3;
            cC = new p3;
            cC.bp()
        }

        function p4() {
            p5.addEventListener("mousedown", p6);
            p5.addEventListener("mousemove", p7);
            p5.addEventListener("mouseup", p8);
            p5.addEventListener("click", p9);
            p5.addEventListener("mouseleave", pA);
            p5.addEventListener("wheel", pB);
            p5.addEventListener("touchstart", pC);
            p5.addEventListener("touchmove", pD);
            p5.addEventListener("touchend", pE);
            p5.addEventListener("touchcancel", pF);
            p5.addEventListener("dragover", pG);
            p5.addEventListener("drop", pH);
            ox = false
        }

        function p2() {
            cA = Math.floor((q ? .02 : .01152) * bq);
            cA = 2 > cA ? 2 : cA;
            m5 = Math.floor((q ? .0114 : .01296) * bq);
            m5 = 2 > m5 ? 2 : m5;
            ov = Math.floor(.005 * pI);
            ov = 1 > ov ? 1 : ov
        }

        function p6(g) {
            g.preventDefault();
            ox || (eD.pK(eD.jc),
                pL(Math.floor(pM * g.clientX), Math.floor(pM * g.clientY)))
        }

        function pC(g) {
            g.preventDefault();
            eD.pK(eD.jc);
            ox = true;
            0 < g.touches.length && (oy = Math.floor(pM * g.touches[0].clientX),
                oz = Math.floor(pM * g.touches[0].clientY),
            jo.pN(g) || pL(oy, oz))
        }

        function pL(g, k) {
            if (0 === fZ)
                aJ.c7(g, k);
            else if (!(hv.c7(g, k) || hu.lB(g, k) || eW.c7(g, k) || eP.c7(g, k))) {
                var t = fq.c7(g, k);
                2 === t || eM.c7(g, k) || (gj.c7(g, k) ? c4.c5 = true : eR.pP(g, k) ? (gj.gk = false,
                eR.pQ(g, k) && (c4.c5 = true)) : e9.c7(g, k) || eS.c7(g, k) || 0 === t && hu.lD(g, k))
            }
        }

        function p7(g) {
            ox = false;
            g.preventDefault();
            pR(Math.floor(pM * g.clientX), Math.floor(pM * g.clientY))
        }

        function pD(g) {
            g.preventDefault();
            0 < g.touches.length && (oy = Math.floor(pM * g.touches[0].clientX),
                oz = Math.floor(pM * g.touches[0].clientY),
            jo.pS(g) || pR(oy, oz))
        }

        function pR(g, k) {
            0 === fZ ? aJ.lm(g, k) : hv.lm(g, k) || (hu.lC() ? hu.lm(g, k) : fq.lm(g, k) || (eR.pT ? eR.lm(g, k) && (c4.c5 = true) : (eM.lm(g, k),
            gj.gk && gj.lm(g, k) && (c4.c5 = true))))
        }

        function pA(g) {
            g.preventDefault();
            0 === fZ ? (aJ.click(-1024, -1024),
                jg.pU()) : (eM.pV(-1024, -1024),
                fq.lm(-1024, -1024),
                eR.pW(),
            gj.gk && (gj.gk = false))
        }

        function p8(g) {
            g.preventDefault();
            ox || pX(Math.floor(pM * g.clientX), Math.floor(pM * g.clientY))
        }

        function p9(g) {
            2 === aJ.pY() && dy.click(g.clientX, g.clientY)
        }

        function pE(g) {
            g.preventDefault();
            g && g.touches && 0 < g.touches.length && 0 !== fZ ? gj.gk = false : pX(oy, oz)
        }

        function pF(g) {
            g.preventDefault();
            pX(oy, oz)
        }

        function pG(g) {
            jv.pZ(g)
        }

        function pH(g) {
            jv.pa(g)
        }

        function pX(g, k) {
            0 === fZ ? aJ.click(g, k) : (eM.pV(g, k),
                hv.pV(),
                eR.pW(),
                gj.gk = false,
            hu.click(g, k) && (c4.c5 = true))
        }

        function pB(g) {
            g.preventDefault();
            eD.pK(eD.jc);
            var k = Math.floor(pM * g.clientX)
                , t = Math.floor(pM * g.clientY)
                , l = g.deltaY;
            1 === g.deltaMode && (l *= 20);
            0 === fZ ? aJ.pb(k, t, l) : eM.pb(k, t, l) || (eR.pP(k, t) ? eR.pb(l) && (c4.c5 = true) : gj.pb(k, t, 2 * l) && (c4.c5 = true))
        }

        function pc(g, k, t) {
            g.fillStyle = cK;
            g.fillRect(0, 0, k, 1);
            g.fillRect(0, t - 1, k, 1);
            g.fillRect(0, 0, 1, t);
            g.fillRect(k - 1, 0, 1, t)
        }

        function k1() {
            function g(C) {
                var E = n[C].lq.width;
                n[C].hx.clearRect(0, 0, E, A);
                n[C].hx.fillStyle = 0 !== n[C].id ? "rgba(33,33,120,0.83)" : n[C].cM === g_unclaimedLandIndex ? "rgba(88,88,88,0.83)" : n[C].cM < g_playerCount ? "rgba(100,70,33,0.83)" : "rgba(33,100,80,0.83)";
                n[C].hx.fillRect(0, 0, E, A);
                pc(n[C].hx, E, A);
                E > z + 2 * A && (n[C].hx.fillRect(E - z - A, 0, 1, A),
                    n[C].hx.fillText(g_playerNameArray[n[C].cM], Math.floor((E - z) / 2), Math.floor(.57 * A)));
                var F = 0 !== n[C].id ? 0 : A;
                n[C].hx.fillText(eP.gJ(n[C].cN), Math.floor(E - z / 2 - F), Math.floor(.57 * A));
                n[C].hx.fillStyle = oc;
                n[C].hx.fillRect(Math.floor(E - z - F), A - B, Math.floor(z * n[C].cN / n[C].pr), B);
                0 === n[C].id ? (k(C, E),
                    n[C].hx.strokeStyle = oP,
                    n[C].hx.fillRect(A, 0, 1, A),
                    E -= A,
                    n[C].hx.beginPath(),
                    n[C].hx.moveTo(Math.floor(.3 * A + E), Math.floor(A / 2)),
                    n[C].hx.lineTo(Math.floor(A - .3 * A + E), Math.floor(A / 2)),
                    n[C].hx.stroke(),
                    n[C].hx.beginPath(),
                    n[C].hx.moveTo(Math.floor(A / 2 + E), Math.floor(.3 * A)),
                    n[C].hx.lineTo(Math.floor(A / 2 + E), Math.floor(A - .3 * A)),
                    n[C].hx.stroke()) : k(C, 2 * A)
            }

            function k(C, E) {
                n[C].hx.strokeStyle = n[C].ps ? mB : oX;
                n[C].hx.fillStyle = cK;
                n[C].hx.fillRect(E - A, 0, 1, A);
                var F = Math.floor(A / 12);
                n[C].hx.lineWidth = 3 > F ? 3 : F;
                n[C].hx.lineCap = "round";
                E = A + 1;
                n[C].hx.beginPath();
                n[C].hx.moveTo(Math.floor(E - .35 * A), Math.floor(.35 * A));
                n[C].hx.lineTo(Math.floor(E - A + .35 * A), Math.floor(A - .35 * A));
                n[C].hx.stroke();
                n[C].hx.beginPath();
                n[C].hx.moveTo(Math.floor(E - A + .35 * A), Math.floor(.35 * A));
                n[C].hx.lineTo(Math.floor(E - .35 * A), Math.floor(A - .35 * A));
                n[C].hx.stroke()
            }

            function t(C) {
                C.lq = document.createElement("canvas");
                pj.font = y;
                var E = z;
                C.cM < g_unclaimedLandIndex && 0 === C.id && (E += Math.floor(pj.measureText(g_playerNameArray[C.cM] + "000").width));
                E += A;
                0 === C.id && (E += A);
                C.lq.width = E;
                C.lq.height = A;
                C.hx = C.lq.getContext("2d", {
                    alpha: true
                });
                C.hx.font = y;
                C.hx.textBaseline = cI;
                C.hx.textAlign = cJ
            }

            function l(C) {
                return eO.qD() ? gE - n[C].lq.width - m5 : eO.fJ
            }

            function x(C) {
                return Math.floor(2 * m5 + (eO.qD() ? eB.cw + m5 : 0) + eO.cw + 1.3 * C * A)
            }

            var n, z, y, A, B;
            this.bp = function () {
                n = [];
                this.lv()
            }
            ;
            this.lv = function () {
                y = e9.c0;
                A = e9.by + 5;
                A = Math.floor(1.25 * A);
                q && (A = Math.floor(1.25 * A));
                B = Math.floor(.15 * A);
                pj.font = y;
                z = Math.floor(pj.measureText("02 000 000 0000").width);
                for (var C = n.length - 1; 0 <= C; C--)
                    t(n[C]),
                        g(C)
            }
            ;
            this.eb = function () {
                for (var C = n.length - 1; 0 <= C; C--)
                    n[C].pm && (n[C].pm = false,
                        g(C))
            }
            ;
            this.gJ = function (C) {
                if (1E3 > C)
                    return 0 > C ? "-" + this.gJ(Math.abs(C)) : C.toString();
                var E = Math.floor(Math.log(C + .5) / Math.log(10)) + 1
                    , F = Math.floor((E - 1) / 3);
                C = C.toString();
                for (var G = C.substring(E - 3, E), N = 1; N < F; N++)
                    G = C.substring(E - 3 * (N + 1), E - 3 * N) + " " + G;
                return C.substring(0, E - 3 * F) + " " + G
            }
            ;
            this.c7 = function (C, E) {
                if (2 === fZ || 0 === g_isPlayersAliveArray[g_localPlayerIndex] || j8 || !hu.lE(g_localPlayerIndex))
                    return false;
                var F, G = q ? A : 0, N = q ? Math.floor(.15 * A) : 0;
                for (F = n.length - 1; 0 <= F; F--) {
                    var I = l(F);
                    var D = x(F);
                    var K = n[F].lq.width;
                    if (E >= D - N && E <= D + A + N) {
                        if (C >= I - G && C <= I + A + G)
                            return n[F].ps || (n[F].pm = true,
                                n[F].ps = true,
                                0 === n[F].id ? g_isSingleplayer ? eG.fN(g_localPlayerIndex, n[F].cM) : ir.q6(n[F].cM === g_unclaimedLandIndex ? g_localPlayerIndex : n[F].cM) : g_isSingleplayer ? eG.fP(g_localPlayerIndex, n[F].id) : ir.q7(n[F].id)),
                                true;
                        if (0 === n[F].id && C >= I + K - A - G && C <= I + K + G)
                            return g_isSingleplayer ? triggerAttack(g_localPlayerIndex, n[F].cM, eR.lT()) : ir.lU(eR.lT(), n[F].cM === g_unclaimedLandIndex ? g_localPlayerIndex : n[F].cM),
                                true
                    }
                }
                return false
            }
            ;
            this.dF = function () {
                if (2 !== fZ && 0 !== g_isPlayersAliveArray[g_localPlayerIndex] && !j8 && hu.lE(g_localPlayerIndex)) {
                    var C = ae.af(g_localPlayerIndex);
                    b: if (n.length !== C)
                        var E = true;
                    else {
                        for (E = C - 1; 0 <= E; E--)
                            if (n[E].id !== ae.ag(g_localPlayerIndex, E) || n[E].cM !== ae.al(g_localPlayerIndex, E)) {
                                E = true;
                                break b
                            }
                        E = false
                    }
                    if (E) {
                        var F, G = [];
                        E = 0;
                        b: for (; E < C; E++) {
                            var N = ae.ag(g_localPlayerIndex, E);
                            var I = ae.al(g_localPlayerIndex, E);
                            for (F = 0; F < n.length; F++)
                                if (n[F].id === N && n[F].cM === I) {
                                    G.push(n.splice(F, 1)[0]);
                                    continue b
                                }
                            F = ae.am(g_localPlayerIndex, E);
                            N = {
                                cM: I,
                                cN: F,
                                pr: F,
                                id: N,
                                pm: true,
                                ps: false,
                                lq: null,
                                hx: null
                            };
                            t(N);
                            G.push(N)
                        }
                        n = G
                    }
                    for (--C; 0 <= C; C--)
                        E = ae.am(g_localPlayerIndex, C),
                        n[C].cN !== E && (n[C].cN = E,
                            n[C].pr = E > n[C].pr ? E : n[C].pr,
                            n[C].pm = true)
                }
            }
            ;
            this.cG = function () {
                if (0 !== g_isPlayersAliveArray[g_localPlayerIndex] && hu.lE(g_localPlayerIndex) && !j8)
                    for (var C = n.length - 1; 0 <= C; C--)
                        cH.drawImage(n[C].lq, l(C), x(C))
            }
        }

        function k2() {
            function g() {
                cH.drawImage(I, m5 + (dA ? m5 + eT.qR() : 0), qS + 2 * m5)
            }

            function renderAnnouncement() {
                I.width = l[0].width + G;
                I.height = y + G;
                D = I.getContext("2d", {
                    alpha: true
                });
                D.clearRect(0, 0, l[0].width + G, y + G);
                D.translate(Math.floor(G / 2), Math.floor(G / 2));
                D.lineWidth = G;
                D.fillStyle = 1 === l[0].qP ? oe : hy;
                t();
                D.fill();
                D.strokeStyle = 1 === l[0].qP ? gH : cK;
                t();
                D.stroke();
                D.textAlign = cJ;
                D.textBaseline = cI;
                D.fillStyle = 1 === l[0].qP ? gH : cK;
                D.font = A[0];
                D.fillText(gameAnnouncements[l[0].qO], Math.floor(l[0].width / 2), Math.floor(.72 * C[0] * y));
                D.font = A[1];
                D.fillText(l[0].l, Math.floor(l[0].width / 2), Math.floor((C[0] + .48 * C[1]) * y))
            }

            function t() {
                D.beginPath();
                D.moveTo(N, 0);
                D.lineTo(l[0].width - N, 0);
                D.lineTo(l[0].width, N);
                D.lineTo(l[0].width, y - N);
                D.lineTo(l[0].width - N, y);
                D.lineTo(N, y);
                D.lineTo(0, y - N);
                D.lineTo(0, N);
                D.closePath()
            }

            var l, x, n, z, y, A, B, C, gameAnnouncements, F, G, N, I, D, K, J;
            this.bp = function () {
                K = 0;
                x = 4;
                n = z = 0;
                l = [];
                A = Array(2);
                B = Array(2);
                C = Array(2);
                gameAnnouncements = ["YOU CONQUERED", "YOU WERE CONQUERED BY", "THE GAME WAS WON BY", "MAP:"];
                C[0] = .3;
                C[1] = .7;
                F = Array(4);
                I = document.createElement("canvas");
                J = c4.gc + 2E3;
                this.lv()
            }
            ;
            this.lv = function () {
                var L;
                y = Math.floor((q ? .0725 : .058) * bq);
                B[0] = Math.floor(.85 * C[0] * y);
                B[1] = Math.floor(.85 * C[1] * y);
                A[0] = bt + B[0] + bu;
                A[1] = bt + B[1] + bu;
                for (L = F.length - 1; 0 <= L; L--)
                    F[L] = this.measureText(gameAnnouncements[L] + "000", A[0]);
                G = Math.floor(1 + .05 * y);
                N = Math.floor(.2 * y);
                if (0 < l.length) {
                    for (L = l.length - 1; 0 <= L; L--) {
                        var H = this.measureText(l[L].l + "00", A[1]);
                        l[L].width = H < F[L] ? F[L] : H
                    }
                    renderAnnouncement()
                }
            }
            ;
            this.dF = function () {
                if (0 !== x)
                    if (4 === x)
                        c4.gc > J && (x = 0,
                        1 === fZ && c2.mx(jm.nD(), 3, 1, 9));
                    else {
                        if (1 === x)
                            0 === n && (renderAnnouncement(),
                                n = 1E-4),
                                n += .002 * (c4.gc - K),
                            1 <= n && (z = 0,
                                x = 2,
                                n = 1),
                                c4.c5 = true;
                        else if (2 === x) {
                            if (z += (c4.gc - K) / 1E3,
                            z > l[0].gb || 1 < z && 1 < l.length)
                                x = 3
                        } else
                            3 === x && (n -= .002 * (c4.gc - K),
                            0 >= n && (n = 0,
                                l.shift(),
                                x = 0 < l.length ? 1 : 0),
                                c4.c5 = true);
                        K = c4.gc
                    }
            }
            ;
            this.measureText = function (L, H) {
                cH.font = H;
                return Math.floor(cH.measureText(L).width)
            }
            ;
            this.cQ = function (L, H) {
                this.mx(g_playerNameArray[L], H, 1, 0 === H ? 3 : 7)
            }
            ;
            this.mx = function (L, H, M, Q) {
                var R = this.measureText(L + "00", A[1]);
                R = R < F[H] ? F[H] : R;
                l.push({
                    l: L,
                    width: R,
                    qO: H,
                    qP: M,
                    gb: Q
                });
                0 === x && (n = 0,
                    x = 1,
                    K = c4.gc)
            }
            ;
            this.cG = function () {
                0 !== x && 0 !== n && (1 > n ? (cH.globalAlpha = n,
                    g(),
                    cH.globalAlpha = 1) : g())
            }
        }

        function kg() {
            function g() {
                var D = eS.c1;
                E = false;
                hw(n, D, l);
                var K = Math.floor(D / 2);
                1 === y ? (n.fillStyle = oL,
                    n.fillRect(K, 0, K, l)) : -1 === y && (n.fillStyle = oT,
                    n.fillRect(0, 0, K, l));
                hz(n, D, l, 2);
                K = Math.floor(.25 * l);
                K = 2 > K ? 2 : K;
                n.fillStyle = of;
                var J = Math.floor((l - 4) * A[1] / B[1]);
                0 < J && n.fillRect(2, l - 2 - J, K, J);
                J = Math.floor((l - 4) * A[0] / B[0]);
                0 < J && n.fillRect(D - 2 - K, l - 2 - J, K, J);
                K = Math.floor(l / 8);
                K = 2 > K ? 2 : K;
                i1(n, Math.floor(.4 * l), 0, l, K, .5, false);
                i1(n, Math.floor(D - 1.4 * l), 0, l, K, .5, true);
                n.drawImage(z, Math.floor((D - z.width) / 2), 3)
            }

            function k() {
                E = true;
                F = 140;
                y = 0;
                C = [];
                eS.lC = false;
                A[0] = A[1] = 0
            }

            function t() {
                return eR.md(e9.ma()) ? eR.fK - l - m5 : s - l - (q ? 2 : 1) * m5
            }

            var l, x, n, z, y, A, B, C, E, F, G, N, I;
            this.bp = function () {
                N = I = 0;
                E = this.lC = false;
                F = 140;
                y = 0;
                A = [0, 0];
                B = [1, 1];
                C = [];
                G = new Uint32Array(10);
                this.lv()
            }
            ;
            this.lv = function () {
                l = eR.cw;
                this.c1 = 4 * l;
                this.qd();
                x = document.createElement("canvas");
                x.width = this.c1;
                x.height = l;
                n = x.getContext("2d", {
                    alpha: true
                });
                g()
            }
            ;
            this.eb = function () {
                E && g()
            }
            ;
            this.qd = function () {
                var D = l - 6;
                D = 6 > D ? 6 : D;
                if (void 0 === z || z.width !== D) {
                    z = document.createElement("canvas");
                    z.width = D;
                    z.height = D;
                    var K = z.getContext("2d", {
                        alpha: true
                    });
                    K.clearRect(0, 0, D, D);
                    var J = Math.floor(D / 8);
                    J = 1 > J ? 1 : J;
                    K.lineWidth = J;
                    K.strokeStyle = cK;
                    var L = Math.floor(D / 2);
                    D = Math.floor((D - J) / 2);
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
            this.c7 = function (D, K) {
                if (D < r - this.c1 - m5)
                    return false;
                var J = t();
                if (K < J || K > J + l)
                    return false;
                J = D > r - m5 - this.c1 / 2;
                g_isSingleplayer ? this.fX(0, J) : hu.lE(g_localPlayerIndex) && 0 !== g_isPlayersAliveArray[g_localPlayerIndex] && ir.qg(J);
                return true
            }
            ;
            this.dF = function () {
                if (0 < I)
                    I--,
                    0 === I && k();
                else if (this.lC) {
                    F--;
                    var D;
                    if (D = 270 === F && 2 <= N)
                        a: {
                            for (D = dY - 1; 0 <= D; D--)
                                if (hu.lE(dZ[D])) {
                                    D = false;
                                    break a
                                }
                            D = true
                        }
                    D && (E = true,
                        A[0] += B[0]);
                    180 === F && 3 * A[0] < B[0] ? k() : A[0] >= B[0] ? fi.fj(-1) : A[1] >= B[1] ? I = 4 : 0 >= F && k()
                } else {
                    for (D = 9; 0 <= D; D--)
                        12 < Math.abs(G[D] - g_playerLandArray[em[D]]) && (F = 140),
                            G[D] = g_playerLandArray[em[D]];
                    D = 0 >= --F ? true : false;
                    if (D) {
                        this.lC = true;
                        F = 360;
                        var K = 0;
                        for (D = dY - 1; 0 <= D; D--)
                            hu.lE(dZ[D]) && (K += g_playerLandArray[dZ[D]]);
                        B[0] = mc(as(3 * K, 5), 1);
                        dA && 9 !== dv && (B[0] = ql(mc(as(K * (100 - as(100 * eT.qm(), j9)), 100), 1), B[0]));
                        B[1] = mc(K - B[0], 1);
                        N++
                    }
                }
            }
            ;
            this.iv = function () {
                this.lC && A[0] < B[0] && k()
            }
            ;
            this.fX = function (D, K) {
                var J;
                if (this.lC) {
                    for (J = C.length - 1; 0 <= J; J--)
                        if (C[J] === D)
                            return;
                    C.push(D);
                    E = true;
                    J = g_isSingleplayer ? B[0] : g_playerLandArray[D];
                    K ? A[0] += J : A[1] += J;
                    D === g_localPlayerIndex && (y = K ? 1 : -1)
                }
            }
            ;
            this.cG = function () {
                if (this.lC) {
                    var D = t();
                    cH.drawImage(x, r - this.c1 - m5, D)
                }
            }
        }

        function k3() {
            function g() {
                if (C < 1 / 3) {
                    var I = Math.floor(540 * C);
                    return "rgba(" + I + ",180,0,0.75)"
                }
                if (C < 2 / 3)
                    return I = Math.floor(540 * (C - 1 / 3)),
                    "rgba(180," + (180 - I) + ",0,0.75)";
                I = Math.floor(540 * (C - 2 / 3));
                return "rgba(180,0," + I + ",0.75)"
            }

            function k() {
                A.clearRect(0, 0, x, eR.cw);
                var I = Math.floor(C * (x - 2 * z));
                A.fillStyle = hy;
                A.fillRect(0, 0, z, eR.cw);
                A.fillRect(z + I, 0, x - z - I, eR.cw);
                A.fillStyle = g();
                A.fillRect(z, 0, I, eR.cw);
                A.fillStyle = cK;
                A.fillRect(0, 0, x, 1);
                A.fillRect(0, eR.cw - 1, x, 1);
                A.fillRect(0, 0, 1, eR.cw);
                A.fillRect(z, 0, 1, eR.cw);
                A.fillRect(z + I, 0, 1, eR.cw);
                A.fillRect(x - z, 0, 1, eR.cw);
                A.fillRect(x - 1, 0, 1, eR.cw);
                I = 1 + Math.floor(.0625 * eR.cw);
                var D = 1 + Math.floor(.3 * eR.cw);
                A.fillRect(Math.floor(.25 * eR.cw) + D, Math.floor((eR.cw - I) / 2), eR.cw - 2 * D, I);
                A.fillRect(Math.floor(x - 1.25 * eR.cw) + D, Math.floor((eR.cw - I) / 2), eR.cw - 2 * D - D % 2, I);
                A.fillRect(Math.floor(x - 1.25 * eR.cw) + Math.floor((eR.cw - I) / 2), D, I, eR.cw - 2 * D - D % 2);
                E = Math.floor(g_playerBalanceArray[g_localPlayerIndex] * C);
                A.fillText(eP.gJ(E), Math.floor(x / 2), Math.floor(.55 * eR.cw))
            }

            function t(I) {
                if (1 < I && 0 === C)
                    return C = .01,
                        k(),
                        true;
                if (1 < I && 1 === C || 0 === C)
                    return false;
                C *= I;
                C = 1 < C ? 1 : 0 > C ? 0 : C;
                k();
                return true
            }

            function l(I) {
                var D = C;
                C = (I - n - z) / (x - 2 * z);
                C = 0 > C ? 0 : C;
                C = 1 < C ? 1 : C;
                return D !== C ? (k(),
                    true) : false
            }

            var x, n, z, y, A, B, C, E, F, G, N = 11 / 12;
            this.bp = function () {
                B = !fc;
                G = false;
                C = .5;
                E = 0;
                this.pT = false;
                this.lv()
            }
            ;
            this.lv = function () {
                q && r < .8 * s ? (this.cw = Math.floor(.0536 * bq),
                    x = r - 4 * m5 - this.cw) : (x = Math.floor((q ? .65 : .389) * bq),
                    x += 12 - x % 12,
                    this.cw = Math.floor(x / 12));
                z = Math.floor(3 * this.cw / 2);
                F = bt + Math.floor(.5 * this.cw) + bu;
                y = document.createElement("canvas");
                y.width = x;
                y.height = this.cw;
                A = y.getContext("2d", {
                    alpha: true
                });
                A.font = F;
                A.textBaseline = cI;
                A.textAlign = cJ;
                this.qs();
                k()
            }
            ;
            this.qs = function () {
                n = q && r < .8 * s ? this.cw + 3 * m5 : Math.floor((gE - x) / 2);
                this.fK = cB - this.cw - (q ? 2 : 1) * m5
            }
            ;
            this.eb = function () {
                G && (G = false,
                    k())
            }
            ;
            this.lC = function () {
                return !(!B || fq.lu && n < Math.floor(m5 + 5.5 * this.cw))
            }
            ;
            this.md = function (I) {
                return this.lC() ? n + x > r - I - m5 : false
            }
            ;
            this.cE = function () {
                B = true
            }
            ;
            this.qh = function () {
                B = false
            }
            ;
            this.lT = function () {
                var I = Math.floor(1E3 * C);
                return 0 >= I ? 1 : 1E3 < I ? 1E3 : I
            }
            ;
            this.pP = function (I, D) {
                return this.lC() && I > n && I < n + x && D > this.fK
            }
            ;
            this.pQ = function (I, D) {
                if (!this.lC())
                    return false;
                if (I > n && I < n + z && D > eR.fK)
                    return t(N);
                if (I > n + x - z && I < n + x && D > eR.fK)
                    return t(1 / N);
                this.pT = true;
                return l(I)
            }
            ;
            this.r3 = function (I) {
                0 !== fZ && this.lC() && t(I) && (c4.c5 = true)
            }
            ;
            this.pb = function (I) {
                if (0 === I || !this.lC())
                    return false;
                0 < I ? (I = 400 / (400 + I),
                    I = I < N ? N : I) : (I = (400 - I) / 400,
                    I = I > 1 / N ? 1 / N : I);
                return t(I)
            }
            ;
            this.lm = function (I, D) {
                return this.pT ? l(I, D) : false
            }
            ;
            this.pW = function () {
                this.pT = false
            }
            ;
            this.dF = function () {
                this.lC() && Math.floor(g_playerBalanceArray[g_localPlayerIndex] * C) !== E && (G = true)
            }
            ;
            this.cG = function () {
                this.lC() && cH.drawImage(y, n, this.fK)
            }
        }

        var g7, gC, gD;

        function k4() {
            var g, k, t, l, x, n, z;
            this.bp = function () {
                g = Array(2);
                k = Array(2);
                this.gk = false;
                z = n = gD = gC = 0;
                g7 = 1;
                this.lv()
            }
            ;
            this.lv = function () {
                t = Math.floor((q ? .072 : .0502) * bq);
                t = 8 > t ? 8 : t;
                for (var y = 1; 0 <= y; y--)
                    g[y] = document.createElement("canvas"),
                        g[y].width = t,
                        g[y].height = t,
                        k[y] = g[y].getContext("2d", {
                            alpha: true
                        });
                this.qs();
                y = Math.floor(1 + t / 20);
                for (var A = 1; 0 <= A; A--)
                    k[A].clearRect(0, 0, t, t),
                        k[A].fillStyle = oD,
                        k[A].beginPath(),
                        k[A].arc(t / 2, t / 2, t / 2 - y, 0, 2 * Math.PI),
                        k[A].fill(),
                        k[A].lineWidth = y,
                        k[A].fillStyle = oH,
                        k[A].strokeStyle = oH,
                        k[A].beginPath(),
                        k[A].arc(t / 2, t / 2, t / 2 - y, 0, 2 * Math.PI),
                        k[A].stroke(),
                        i1(k[A], 0, 0, t, y, .3, 0 === A)
            }
            ;
            this.gF = function () {
                return -gC / g7
            }
            ;
            this.cF = function () {
                return -gD / g7
            }
            ;
            this.gw = function (y, A) {
                gC = g7 * y - A
            }
            ;
            this.gx = function (y, A) {
                gD = g7 * y - A
            }
            ;
            this.c7 = function (y, A) {
                if ((Math.pow(y - (l + t / 2), 2) + Math.pow(A - (x + t / 2), 2) < t * t / 4 || Math.pow(y - (l + t / 2), 2) + Math.pow(A - (x + 2 * t), 2) < t * t / 4) && !jt.rG.rH)
                    return A < x + 1.25 * t ? this.pb(Math.floor(gE / 2), Math.floor(cB / 2), -200) : this.pb(Math.floor(gE / 2), Math.floor(cB / 2), 200);
                eV.h0() && (this.gk = true,
                    n = y,
                    z = A);
                return false
            }
            ;
            this.lm = function (y, A) {
                if (!eV.h0())
                    return true;
                var B = gC
                    , C = gD
                    , E = n - y
                    , F = z - A;
                gC += E;
                gD += F;
                eA.lm(E, F);
                this.rK();
                n = y;
                z = A;
                return B !== gC || C !== gD
            }
            ;
            this.pb = function (y, A, B) {
                if (!eV.h0())
                    return true;
                if (0 < B)
                    B = 450 / (450 + B),
                        B = .5 > B ? .5 : B;
                else if (0 > B)
                    B = (450 - B) / 450,
                        B = 2 < B ? 2 : B;
                else
                    return false;
                this.rL(y, A, B);
                return true
            }
            ;
            this.rL = function (y, A, B) {
                B = 1024 < B * g7 ? 1024 / g7 : B;
                B = .125 > B * g7 ? .125 / g7 : B;
                eA.zoom(B, y, A);
                g7 *= B;
                gC = (gC + y) * B - y;
                gD = (gD + A) * B - A;
                gj.rK()
            }
            ;
            this.rK = function () {
                var y = r / 16
                    , A = 0
                    , B = s / 16
                    , C = 0;
                gC < -r + y && (A = -r + y - gC);
                gC > g7 * aZ - y && (A = g7 * aZ - y - gC);
                gD < -s + B && (C = -s + B - gD);
                gD > g7 * aa - B && (C = g7 * aa - B - gD);
                gC += A;
                gD += C;
                gy.gz();
                eA.rS(A, C)
            }
            ;
            this.qs = function () {
                l = gE - t - m5;
                x = Math.floor(cB / 2 - 1.25 * t)
            }
            ;
            this.cG = function () {
                jt.rG.rH || (cH.drawImage(g[0], l, x),
                    cH.drawImage(g[1], l, Math.floor(x + 3 * t / 2)))
            }
        }

        function k5() {
            function g() {
                A = Math.floor(.2 * (q ? .07 : .035) * bq);
                A = mc(q ? 3 : 1, A);
                var P = r / (n.length + B);
                A = P > A ? P : A;
                H = Math.floor((1 - B) * A);
                z = 0;
                k()
            }

            function k() {
                z = -20 > z ? -20 : z;
                z = z > (n.length - 15) * A ? (n.length - 15) * A : z;
                E = Math.floor(z / A);
                F = E + Math.floor(gE / A);
                F = F > n.length - 1 ? n.length - 1 : F;
                E = F < E ? F : E;
                E = 0 > E ? 0 : E;
                var P = F;
                C = y / n[P];
                for (var U = F - 1; U >= E; U--)
                    n[U] > n[P] && (P = U,
                        C = y / Math.pow(n[U], L))
            }

            function t(P) {
                P = Math.floor((z + gE - P - B * A) / A);
                P = -1 > P ? -1 : -1 === P ? 0 : P > n.length - 1 ? -1 : P;
                return P !== G ? (G = P,
                -1 === M && 0 === G && J && (M = setInterval(x, 100)),
                    true) : false
            }

            function l(P) {
                var U = Math.floor(C * Math.pow(n[P], L));
                cH.fillRect(z + gE - (P + 1) * A, cB - U, H, U)
            }

            function x() {
                8 === aJ.pY() && (G = -1);
                if (0 !== G)
                    Q = (new Date).getTime(),
                        clearInterval(M),
                        M = -1;
                else {
                    var P = n[1] / 864E3;
                    if (-1 !== Q) {
                        var U = (new Date).getTime();
                        P += (U - Q) * n[1] / 864E5;
                        Q = -1
                    }
                    0 < P && (n[0] += Math.floor(P),
                        c4.c5 = true)
                }
            }

            var n, z, y, A, B, C, E, F, G, N, I, D, K, J, L, H, M, Q, R;
            this.bp = function () {
                Q = M = -1;
                J = false;
                L = 1;
                G = -1;
                this.ri = false;
                K = 0;
                D = new Date;
                z = 0;
                B = .3;
                R = [];
                R.push({
                    mt: "Plateau A",
                    b3: 0,
                    pJ: 57
                });
                R.push({
                    mt: "Max A",
                    b3: 1,
                    pJ: 1
                });
                R.push({
                    mt: "Black Friday",
                    b3: 15,
                    pJ: 15
                });
                R.push({
                    mt: "Max B",
                    b3: 19,
                    pJ: 19
                });
                R.push({
                    mt: "Max C",
                    b3: 44,
                    pJ: 44
                });
                R.push({
                    mt: "First Android Version",
                    b3: 58,
                    pJ: 58
                });
                R.push({
                    mt: "Max D",
                    b3: 67,
                    pJ: 67
                });
                R.push({
                    mt: "The iFrame Explosion",
                    b3: 98,
                    pJ: 99
                });
                R.push({
                    mt: "The 155-Day Uptrend",
                    b3: 58,
                    pJ: 213
                });
                R.push({
                    mt: "Max E",
                    b3: 213,
                    pJ: 213
                });
                R.push({
                    mt: "Plateau B",
                    b3: 214,
                    pJ: 259
                });
                R.push({
                    mt: "Turbulent Times",
                    b3: 260,
                    pJ: 344
                });
                R.push({
                    mt: "Max F",
                    b3: 262,
                    pJ: 262
                });
                R.push({
                    mt: "Max G",
                    b3: 282,
                    pJ: 282
                });
                R.push({
                    mt: "Max H",
                    b3: 333,
                    pJ: 333
                });
                R.push({
                    mt: "The 19-Day Downtrend",
                    b3: 283,
                    pJ: 301
                });
                R.push({
                    mt: "Plateau C",
                    b3: 345,
                    pJ: 385
                });
                R.push({
                    mt: "The Alliance Ascent",
                    b3: 386,
                    pJ: 395
                });
                R.push({
                    mt: "Max I",
                    b3: 395,
                    pJ: 395
                });
                R.push({
                    mt: "First iOS Version",
                    b3: 411,
                    pJ: 411
                });
                R.push({
                    mt: "Plateau D",
                    b3: 396,
                    pJ: 453
                });
                R.push({
                    mt: "The TikTok Revolution",
                    b3: 454,
                    pJ: 470
                });
                R.push({
                    mt: "Max J",
                    b3: 456,
                    pJ: 456
                });
                R.push({
                    mt: "Max K",
                    b3: 472,
                    pJ: 472
                });
                R.push({
                    mt: "Max L",
                    b3: 478,
                    pJ: 478
                });
                R.push({
                    mt: "YT Drew",
                    b3: 471,
                    pJ: 485
                });
                R.push({
                    mt: "Plateau E",
                    b3: 485,
                    pJ: 600
                });
                R.push({
                    mt: "Uptrend A",
                    b3: 600,
                    pJ: 613
                });
                R.push({
                    mt: "Max M",
                    b3: 613,
                    pJ: 613
                });
                R.push({
                    mt: "Downtrend A",
                    b3: 614,
                    pJ: 635
                });
                R.push({
                    mt: "Plateau F",
                    b3: 636,
                    pJ: 737
                });
                R.push({
                    mt: "End of Record",
                    b3: 738,
                    pJ: 738
                });
                n = [208644377, 208644377, 208644377, 206964709, 205156594, 250680803, 249089835, 234476552, 252346209, 263196406, 270821533, 291436400, 294907103, 288866179, 297960890, 310165928, 323215738, 326005712, 312078872, 282668674, 268883231, 261100885, 247870209, 240175828, 231697235, 240614202, 237647174, 230525212, 228239099, 226070733, 215992739, 216961676, 231079584, 235793502, 234032821, 228402462, 216942832, 211862670, 209792418, 220626495, 221020535, 228198633, 226910806, 227687295, 210969547, 197393506, 205629061, 215820135, 213694935, 209455870, 215822584, 215130299, 214034219, 229190414, 230055290, 225313791, 223398523, 231870169, 226224938, 218242706, 235891029, 210498444, 195329116, 187676007, 183432634, 175752106, 170096205, 173369342, 171454357, 185810310, 189616577, 190788861, 179291487, 179513980, 189122353, 188375572, 202060722, 203256609, 197948652, 191950448, 194693217, 196335490, 195911919, 202264283, 199251620, 193699336, 188441210, 183419345, 195919988, 198126823, 199780788, 197440550, 190144884, 179139362, 166469099, 178827877, 183801980, 197952484, 188875861, 185919783, 186237411, 182504952, 183532013, 174109004, 178159701, 161031347, 194622838, 205645645, 200496457, 194773327, 194546481, 207893217, 210920126, 213376144, 173859897, 154326886, 158943729, 166772975, 175066046, 177406405, 179018562, 185986119, 186747583, 200787939, 208959937, 161987576, 185512400, 185788899, 185957487, 194591063, 215634157, 230579314, 237637383, 240518707, 221398239, 225230795, 224891285, 211292916, 216944626, 219436299, 226523918, 232405568, 232166426, 216921782, 244767964, 257278946, 243548100, 237386943, 242802627, 229717622, 168149709, 259971896, 267057767, 257606635, 209857364, 126035568, 129833237, 151312703, 197006695, 73120657, 37551024, 39229432, 29517736, 29382631, 31512045, 42652097, 47363019, 49624906, 46687310, 33767120, 31230439, 34211643, 43094531, 53747053, 55380682, 49779117, 47748833, 21038802, 20406484, 24523793, 26566139, 25284142, 26825553, 23497443, 20291865, 17765022, 21291320, 21106123, 19050128, 18324426, 19044067, 19594721, 19347845, 23365124, 24186529, 19824881, 17952812, 17093838, 17328579, 17607296, 21284737, 22551012, 20471281, 19350848, 19654931, 18725460, 18641926, 23301269, 25178902, 21617041, 21433781, 21078957, 19526047, 18665064, 21394401, 21575049, 19286677, 18018450, 17550775, 17282428, 17055509, 19348704, 20177845, 19766211, 19088037, 18118802, 18269428, 18500614, 19130220, 19351798, 19205188, 19489961, 20233286, 20726811, 23245145, 26158741, 26096642, 24424181, 23690661, 22967492, 21098008, 20325973, 19431907, 17008295, 15583096, 14209752, 14307184, 13541498, 12822679, 13154311, 12161194, 12956543, 11435697, 13428928, 12262514, 12858519, 12405344, 12884309, 14410011, 15556681, 15260178, 14863807, 13861458, 15176144, 14089849, 13063987, 12378716, 13061867, 13118900, 13112653, 13137263, 13062253, 13126875, 14136833, 14711852, 14341250, 11888270, 13137006, 12830841, 12516937, 12783789, 13139393, 12931E3, 12857582, 13677329, 13892963, 13171528, 14135236, 14640750, 15677970, 16758399, 19125177, 17723446, 16469484, 17032884, 19792603, 21426397, 22032534, 20271251, 16190176, 16772813, 17675977, 18764026, 18346209, 19576834, 20989792, 21350839, 14696885, 14653075, 14677999, 14958759, 14210260, 15488352, 15623604, 14473144, 12823062, 14869909, 15142264, 15567014, 17896725, 20081347, 17765006, 12763925, 13523610, 13979983, 15080856, 17116394, 18483238, 18084320, 12100282, 12221529, 12441579, 12058220, 12441689, 12821546, 13401583, 13009895, 12271066, 12210094, 12355642, 13737115, 14257807, 14904897, 14072161, 15640387, 15721803, 16397970, 19254839, 21608906, 20527471, 16596206, 15550563, 14385591, 15547262, 13174302, 12462319, 13000669, 12832541, 12186376, 13150940, 14654379, 14299386, 14158528, 15185971, 12444117, 14253445, 15049053, 14123310, 16892853, 15963931, 11858727, 10012703, 9478191, 9193460, 8851082, 9298848, 9638204, 9442496, 8653593, 9093527, 8530977, 8809114, 9609612, 9906912, 9615756, 9477879, 9713075, 9126583, 8949378, 9577595, 10180186, 9858705, 9534213, 9184660, 8889455, 8311313, 9738346, 9772164, 9157791, 8445413, 8467279, 8756002, 9257951, 10213536, 10620530, 10352296, 9350531, 9118709, 9614237, 9692491, 10801215, 10984804, 9542309, 9609538, 9391430, 9515517, 10064494, 11061684, 10408005, 9794768, 9297643, 9275992, 9394076, 9716084, 10045958, 9715229, 9091248, 10010584, 9845528, 9532588, 8986320, 9037708, 9820996, 8953464, 9074064, 8644692, 8025308, 8832112, 10785788, 10539708, 8908744, 8331216, 8858100, 8626840, 7666284, 8503372, 8855308, 6762540, 6414076, 6786692, 6445532, 6262192, 5918176, 5864376, 5464928, 5384996, 5942760, 5261972, 5404612, 6184860, 6312948, 5815660, 5208552, 4734392, 4538784, 4661404, 5145524, 4819368, 4369224, 4458584, 4289956, 3538288, 3517544, 3871876, 3388048, 3344796, 3089228, 2863676, 2268964, 2160500, 2580004, 2244356, 2018408, 1688912, 1945368, 1796332, 1619260, 2060292, 1597656, 1472788, 1306208, 1171408, 1021096, 1109312, 1241276, 1305092, 1142748, 1157700, 991984, 786992, 786396, 1043956, 1029320, 860500, 834824, 841912, 736464, 690328, 878376, 907232, 794932, 646388, 752600, 672836, 636212, 794108, 746856, 642928, 671328, 493568, 458168, 428776, 464736, 371412, 314568, 225472, 252072, 227604, 251048, 269184, 174136, 825576, 536060, 165952, 153252, 180036, 149616, 138472, 157832, 188152, 180108, 134076, 70960, 89236, 111428, 60520, 74620, 73424, 74720, 71584, 94432, 62572, 66420, 32532, 34452, 41048, 51372, 61916, 43236, 55172, 26776, 47E3, 57424, 93100, 64980, 37288, 44296, 34588, 40700, 29200, 24604, 18184, 42660, 31404, 38096, 18556, 17388, 19568, 17604, 22328, 40300, 39392, 33440, 17960, 7984, 11612, 67700, 14108, 22444, 19756, 9436, 16864, 14400, 17216, 14436, 8612, 15952, 29764, 18748, 16348, 23976, 22080, 20268, 20984, 9480, 30736, 15996, 9484, 9392, 9716, 21540, 57428, 24788, 18728, 8528, 5972, 20560, 18268, 28088, 15364, 15300, 29348, 30992, 20564, 34420, 16716, 14424, 12360, 15124, 51172, 13176];
                this.lv();
                eD.rk(0, 0)
            }
            ;
            this.lv = function () {
                y = Math.floor(.15 * s);
                N = Math.floor((q ? .018 : .0137) * bq);
                N = 10 > N ? 10 : N;
                I = bt + N + bu;
                g()
            }
            ;
            this.rm = function () {
                J || ir.rn()
            }
            ;
            this.ro = function (P) {
                var U;
                J = true;
                for (U = 0; U < P.length; U++)
                    n.unshift(P[U]);
                g();
                c4.c5 = true
            }
            ;
            this.rs = function () {
                k()
            }
            ;
            this.lm = function (P, U) {
                U > cB - .6 * y ? this.ri ? P !== K && (z += P - K,
                    K = P,
                    k(),
                    t(P),
                    this.ri = -1 !== G,
                    c4.c5 = true) : t(P) && (c4.c5 = true) : this.pU()
            }
            ;
            this.pU = function () {
                -1 !== G && (this.ri = false,
                    G = -1,
                    c4.c5 = true)
            }
            ;
            this.pb = function (P, U) {
                -1 !== G && (z += Math.floor(U),
                    k(),
                    t(P),
                    c4.c5 = true)
            }
            ;
            this.c7 = function (P, U) {
                this.lm(P, U);
                -1 !== G && (K = P,
                    this.ri = true)
            }
            ;
            this.pV = function () {
                -1 !== G && (this.ri = false)
            }
            ;
            this.cG = function () {
                cH.fillStyle = od;
                for (var P = F; P >= E; P--)
                    l(P);
                J && 0 === E && (cH.fillStyle = oT,
                    l(0));
                -1 !== G && (cH.fillStyle = oc,
                    l(G));
                if (-1 !== G) {
                    cH.font = I;
                    cH.textBaseline = oi;
                    P = new Date;
                    P.setTime(D.getTime() - 864E5 * G);
                    var U = "month"
                        , W = "day";
                    "undefined" !== typeof Intl && (U = (new Intl.DateTimeFormat("en-US", {
                        month: "long"
                    })).format(P),
                        W = (new Intl.DateTimeFormat("en-US", {
                            weekday: "long"
                        })).format(P));
                    P = W + ", " + P.getUTCDate() + " " + U + " " + P.getFullYear();
                    var X = 1 === n[G] ? " second played" : " seconds played";
                    X = eP.gJ(n[G]) + X;
                    var V = Math.floor(cH.measureText(P).width)
                        , ia = Math.floor(cH.measureText(X).width)
                        , Y = Math.floor(.5 * (V + N));
                    U = z + gE - (G + 1) * A;
                    U = U < Y ? Y : U > gE - Y ? gE - Y : U;
                    W = cB - Math.floor(C * Math.pow(n[G], L));
                    var pa = Math.floor(1.1 * N)
                        , na = W > cB - pa ? cB - pa : W;
                    cH.fillStyle = hy;
                    cH.fillRect(gE - ia - N, na - pa, ia + N, pa);
                    cH.fillRect(U - Y, cB - pa, V + N, pa);
                    cH.fillStyle = cK;
                    cH.textAlign = oj;
                    cH.fillText(X, Math.floor(gE - .5 * N), na);
                    X = na - 2 * pa;
                    V = -1;
                    ia = n.length - G - 1;
                    for (Y = R.length - 1; 0 <= Y; Y--)
                        ia >= R[Y].b3 && ia <= R[Y].pJ && (-1 === V || R[Y].pJ - R[Y].b3 < R[V].pJ - R[V].b3) && (V = Y);
                    -1 !== V && (ia = Math.floor(cH.measureText(R[V].mt).width),
                        cH.fillStyle = hy,
                        cH.fillRect(gE - ia - N, X, ia + N, pa),
                        cH.fillStyle = cK,
                        cH.fillText(R[V].mt, Math.floor(gE - .5 * N), X + pa));
                    cH.textAlign = cJ;
                    cH.fillText(P, U, cB);
                    cH.strokeStyle = nX;
                    cH.lineWidth = 1;
                    cH.beginPath();
                    cH.moveTo(0, W);
                    cH.lineTo(gE, W);
                    cH.closePath();
                    cH.stroke()
                }
            }
        }

        function k6() {
            this.cw = this.fJ = 0;
            var g, k, t, l, x, n, z, y, A, B, C, E, F;
            this.bp = function () {
                x = hb;
                C = "rgba(0,100,0,0.8)";
                E = "rgba(150,0,0,0.8)";
                B = true;
                y = false;
                A = g_playerBalanceArray[g_localPlayerIndex];
                this.lv()
            }
            ;
            this.lv = function () {
                k = Math.floor((q ? .305 : .24) * bq);
                this.cw = Math.floor(.5 + .13 * k);
                k = Math.floor(6 * this.cw);
                g = bt + Math.floor(.8 * this.cw) + bu;
                F = Math.floor(.5 * this.cw);
                pj.font = g;
                t = m5;
                l = Math.floor(1 + .13 * this.cw);
                n = document.createElement("canvas");
                n.width = k;
                n.height = this.cw;
                z = n.getContext("2d", {
                    alpha: true
                });
                z.font = g;
                z.textBaseline = cI;
                z.textAlign = cJ;
                this.sD()
            }
            ;
            this.qD = function () {
                return q && r < 1.2 * s
            }
            ;
            this.qs = function () {
                this.qD() ? this.fJ = gE - k - m5 : this.fJ = Math.floor(eM.sE() + (gE - eM.sE() - eB.c1 - k) / 2 - .5 * m5)
            }
            ;
            this.eb = function () {
                y && (y = false,
                    this.sD())
            }
            ;
            this.sD = function () {
                z.clearRect(0, 0, k, this.cw);
                z.fillStyle = B ? C : E;
                z.fillRect(0, 0, k, this.cw);
                z.fillStyle = oc;
                this.sF();
                this.sG();
                z.fillStyle = g_playerBalanceArray[g_localPlayerIndex] >= ay.dJ(g_localPlayerIndex) ? oX : cK;
                z.fillText(eP.gJ(A), Math.floor(k / 2), F);
                z.fillStyle = cK;
                z.fillRect(0, 0, k, 1);
                z.fillRect(0, 0, 1, this.cw);
                z.fillRect(0, this.cw - 1, k, 1);
                z.fillRect(k - 1, 0, 1, this.cw)
            }
            ;
            this.sF = function () {
                var G = Math.floor((ay.sH() - 1) * this.cw / 9);
                G = ql(G, this.cw - l);
                z.fillRect(0, G, l, this.cw - G);
                z.fillRect(k - l, G, l, this.cw - G)
            }
            ;
            this.sG = function () {
                z.fillRect(l, this.cw - l, Math.floor((k - 2 * l) * g_playerBalanceArray[g_localPlayerIndex] / x), l)
            }
            ;
            this.dF = function () {
                0 !== g_isPlayersAliveArray[g_localPlayerIndex] && 2 !== fT[g_localPlayerIndex] && A !== g_playerBalanceArray[g_localPlayerIndex] && (x = mc(g_playerBalanceArray[g_localPlayerIndex], x),
                    B = g_playerBalanceArray[g_localPlayerIndex] > A && 10 <= g_playerBalanceArray[g_localPlayerIndex],
                    A = g_playerBalanceArray[g_localPlayerIndex],
                    y = true)
            }
            ;
            this.cG = function () {
                0 === g_isPlayersAliveArray[g_localPlayerIndex] || fc || 2 === fT[g_localPlayerIndex] || cH.drawImage(n, this.fJ, t)
            }
        }

        var sI, qS, sJ, sK, sL, em, sM;

        function k7() {
            function g() {
                var S;
                B.clearRect(0, 0, sI, qS);
                B.fillStyle = oS;
                B.fillRect(0, 0, sI, N);
                B.fillStyle = oF;
                B.fillRect(0, N, sI, qS - N);
                sM[g_localPlayerIndex] >= V && t(sM[g_localPlayerIndex] - V, oR);
                0 !== sM[g_localPlayerIndex] && 0 === V && t(0, oQ);
                -1 !== X && t(X, ly);
                B.fillStyle = oH;
                B.fillRect(0, N, sI, 1);
                B.fillRect(0, 0, sI, ov);
                B.fillRect(0, 0, ov, qS);
                B.fillRect(sI - ov, 0, ov, qS);
                B.fillRect(0, qS - ov, sI, ov);
                B.font = sJ;
                B.textBaseline = cI;
                B.textAlign = cJ;
                B.fillText(Q, Math.floor(sI / 2), Math.floor(F + sL / 2));
                var O = sM[g_localPlayerIndex] < V + y - 1 ? 1 : 2;
                B.font = sK;
                B.textAlign = mh;
                for (S = y - O; 0 <= S; S--)
                    k(em[S + V]),
                        l(S, S + V, em[S + V]);
                B.textAlign = oj;
                for (S = y - O; 0 <= S; S--)
                    k(em[S + V]),
                        x(S, em[S + V]);
                2 === O && (k(g_localPlayerIndex),
                    B.textAlign = mh,
                    l(y - 1, sM[g_localPlayerIndex], g_localPlayerIndex),
                    B.textAlign = oj,
                    x(y - 1, g_localPlayerIndex));
                0 === V && (S = .7 * I / bw.bz(4).height,
                    B.setTransform(S, 0, 0, S, Math.floor(D + .58 * I + .5 * S * bw.bz(4).width), Math.floor(F + sL + .4 * I)),
                    B.imageSmoothingEnabled = true,
                    B.drawImage(bw.bz(4), -Math.floor(bw.bz(4).width / 2), -Math.floor(bw.bz(4).height / 2)),
                    B.setTransform(1, 0, 0, 1, 0, 0))
            }

            function k(S) {
                dA && (B.fillStyle = dW.sv[dW.im[dW.dX[S]]])
            }

            function t(S, O) {
                B.fillStyle = O;
                S = S > y - 1 ? y - 1 : S;
                var T = Math.floor((S === y - 1 ? 2 : 0 === S ? 1.15 : 1) * I);
                T = S === y - 2 ? Math.floor(N + 9.15 * I) - Math.floor(N + 8.15 * I) : T;
                B.fillRect(0, Math.floor(N + (S + (0 === S ? 0 : .15)) * I), sI, T)
            }

            function l(S, O, T) {
                B.fillText(R[O], D, Math.floor(F + sL + (S + .5) * I));
                1 === fT[T] && (B.font = ok + sK);
                B.fillText(H[T] === T ? g_playerNameArray[T] : L[H[T] % g_unclaimedLandIndex], K, Math.floor(F + sL + (S + .5) * I));
                0 !== fT[T] && (B.font = sK)
            }

            function x(S, O) {
                B.fillText(g_playerLandArray[O], J, Math.floor(F + sL + (S + .5) * I))
            }

            function n(S) {
                S -= m5 + N;
                if (0 > S)
                    return Math.floor(S / I) - 1;
                if (S < (y - 1) * I)
                    return Math.floor(S / I);
                if (S < qS - N)
                    return y - 1;
                S -= qS - N;
                return y + Math.floor(S / I)
            }

            function z(S, O) {
                return S >= m5 && S < m5 + sI && O >= m5 && O < m5 + qS
            }

            var y, A, B, C, E, F, G, N, I, D, K, J, L, H, M, Q, R, P, U, W, X, V, ia, Y, pa, na;
            this.bp = function () {
                var S, O;
                ia = 0;
                Y = false;
                na = pa = 0;
                Q = "LEADERBOARD";
                X = -1;
                y = q ? 6 : 10;
                V = 0;
                W = false;
                P = new Uint16Array(y + 1);
                U = new Uint32Array(y + 1);
                E = g_unclaimedLandIndex;
                em = new Uint16Array(E);
                sM = new Uint16Array(E);
                for (S = E - 1; 0 <= S; S--)
                    em[S] = S,
                        sM[S] = S;
                this.lv(true);
                L = [];
                H = new Uint16Array(g_unclaimedLandIndex);
                M = new Uint16Array(g_unclaimedLandIndex);
                var T = Math.floor(sI - K - D - C)
                    , Z = 0;
                R = Array(g_unclaimedLandIndex);
                B.font = sK;
                for (S = g_unclaimedLandIndex - 1; 0 <= S; S--)
                    if (R[S] = S + 1 + ".",
                        H[S] = S,
                        M[S] = Math.floor(B.measureText(g_playerNameArray[S]).width),
                    M[S] > T) {
                        var ba = g_playerNameArray[S];
                        for (O = g_playerNameArray[S].length - 1; 1 <= O && !(ba = ba.substring(0, O),
                            M[S] = Math.floor(B.measureText(ba + "...").width),
                        M[S] <= T); O--)
                            ;
                        ba += "...";
                        L.push(ba);
                        H[S] = g_unclaimedLandIndex + Z++
                    }
                g()
            }
            ;
            this.lv = function (S) {
                q ? (sI = Math.floor(.335 * bq),
                    qS = Math.floor(y * sI / 8)) : (sI = Math.floor(.27 * bq),
                    qS = Math.floor(y * sI / 10));
                sI = Math.floor(.97 * sI);
                A = document.createElement("canvas");
                A.width = sI;
                A.height = qS;
                B = A.getContext("2d", {
                    alpha: true
                });
                F = .025 * sI;
                sL = .16 * sI;
                G = 0 * sI;
                N = Math.floor(.45 * F + sL);
                I = (qS - sL - 2 * F - G) / y;
                sJ = bt + Math.floor(.55 * sL) + bu;
                sK = Math.floor(.6 * I) + bu;
                B.font = sK;
                D = Math.floor(B.measureText("555").width);
                K = Math.floor(B.measureText("555600.00").width);
                C = Math.floor(B.measureText("00920600").width);
                B.font = sJ;
                J = sI - D;
                if (!S) {
                    B.font = sK;
                    for (S = g_unclaimedLandIndex - 1; 0 <= S; S--)
                        M[S] = Math.floor(B.measureText(H[S] === S ? g_playerNameArray[S] : L[H[S] % g_unclaimedLandIndex]).width);
                    g()
                }
            }
            ;
            this.sE = function () {
                return sI
            }
            ;
            this.eb = function (S) {
                W && (S || 0 === c4.dU() % jt.so[jt.rG.sp]) && (W = false,
                    g())
            }
            ;
            this.dF = function () {
                for (var S = E - 1; 0 <= S; S--)
                    if (0 === g_isPlayersAliveArray[em[S]]) {
                        var O = S
                            , T = em[O];
                        for (E--; O < E; O++)
                            em[O] = em[O + 1],
                                sM[em[O]] = O;
                        em[E] = T;
                        sM[em[E]] = E
                    }
                T = E - 1;
                for (O = 0; O < T; O++)
                    g_playerLandArray[em[O]] < g_playerLandArray[em[O + 1]] && (S = em[O],
                        em[O] = em[O + 1],
                        em[O + 1] = S,
                        sM[em[O]] = O,
                        sM[em[O + 1]] = O + 1);
                a: {
                    S = W;
                    W = true;
                    for (O = T = sM[g_localPlayerIndex] >= y - 1 ? y - 2 : y - 1; 0 <= O; O--)
                        if (P[O] !== em[O] || U[O] !== g_playerLandArray[em[O]])
                            break a;
                    if (T !== y - 2 || P[y] === sM[g_localPlayerIndex] && U[y] === g_playerLandArray[g_localPlayerIndex])
                        W = S
                }
                for (S = y - 1; 0 <= S; S--)
                    P[S] = em[S],
                        U[S] = g_playerLandArray[em[S]];
                P[y] = sM[g_localPlayerIndex];
                U[y] = g_playerLandArray[g_localPlayerIndex]
            }
            ;
            this.c7 = function (S, O) {
                if (z(S, O)) {
                    ia = c4.gc;
                    Y = true;
                    pa = na = n(O);
                    if (ox) {
                        var T = t8(-1, na, y);
                        T = T === y ? -1 : T;
                        X !== T && (X = T,
                            g(),
                            c4.c5 = true)
                    }
                    return true
                }
                return false
            }
            ;
            this.lm = function (S, O) {
                var T = n(O);
                if (Y) {
                    var Z = V;
                    V += pa - T;
                    V = t8(0, V, g_unclaimedLandIndex - y);
                    V !== Z && (pa = T,
                        T = t8(-1, T, y),
                        X = T = T !== y && z(S, O) ? T : -1,
                        g(),
                        c4.c5 = true);
                    return true
                }
                T = t8(-1, T, y);
                T = T === y || !z(S, O) || ox ? -1 : T;
                return X !== T ? (X = T,
                    g(),
                    c4.c5 = true) : false
            }
            ;
            this.pV = function (S, O) {
                if (!Y)
                    return false;
                Y = false;
                var T = n(O);
                ox && -1 !== X && (X = -1,
                    g(),
                    c4.c5 = true);
                if (350 > c4.gc - ia && na === T && (T = t8(-1, T, y),
                    T = T !== y && z(S, O) ? T : -1,
                -1 !== T)) {
                    var Z = em[T + V];
                    T === y - 1 && sM[g_localPlayerIndex] >= V + y - 1 && (Z = g_localPlayerIndex);
                    0 !== g_isPlayersAliveArray[Z] && eV.gg(Z, 800, false, 0)
                }
                return true
            }
            ;
            this.pb = function (S, O, T) {
                return Y ? false : z(S, O) ? (S = n(O),
                    S = t8(-1, S, y),
                    S = S === y || ox ? -1 : S,
                    0 < T ? V < g_unclaimedLandIndex - y && (V++,
                        X = S,
                        g(),
                        c4.c5 = true) : 0 < V && (V--,
                        X = S,
                        g(),
                        c4.c5 = true),
                    true) : false
            }
            ;
            this.cG = function () {
                cH.drawImage(A, m5, m5)
            }
        }

        function k8() {
            function g() {
                z.clearRect(0, 0, eB.c1, eB.cw);
                z.fillStyle = hy;
                z.fillRect(0, 0, eB.c1, eB.cw);
                z.fillStyle = oL;
                z.fillRect(0, eB.cw - B - 1, Math.floor((0 < H ? H : Math.sqrt(K[4] / K[3])) * eB.c1), B);
                z.fillStyle = cK;
                z.fillRect(0, 0, eB.c1, 1);
                z.fillRect(0, 0, 1, eB.cw);
                z.fillRect(eB.c1 - 1, 0, 1, eB.cw);
                z.fillRect(0, eB.cw - 1, eB.c1, 1);
                z.fillRect(0, eB.cw - B - 1, eB.c1, 1);
                for (var P = 0, U = 0; U < D.length; U++)
                    if (J[U]) {
                        z.textAlign = mh;
                        var W = Math.floor((C - B + 2 * F) * (U - P + 1) / (D.length + 1) - .7 * F);
                        z.fillText(D[U], E, W);
                        z.textAlign = oj;
                        5 === U && 0 !== g_isPlayersAliveArray[g_localPlayerIndex] && g_playerBalanceArray[g_localPlayerIndex] >= ay.dJ(g_localPlayerIndex) ? (z.fillStyle = og,
                            z.fillText(k(U), eB.c1 - E, W),
                            z.fillStyle = cK) : z.fillText(k(U), eB.c1 - E, W)
                    } else
                        P++
            }

            function k(P) {
                return 3 > P ? K[P].toString() : 3 === P ? eB.nG(K[P] / 100, 2) : 4 === P ? eB.nG(K[P] / 100, 2) : 5 === P ? eB.nG(K[P] / 100, 2) : 7 > P ? eP.gJ(K[P]) : eB.sH(K[7])
            }

            function t(P) {
                P = as(1E4 * P, j9);
                8 === dv && (0 === g_isPlayersAliveArray[0] ? fi.fj(1) : 0 === g_isPlayersAliveArray[1] && fi.fj(0));
                P >= K[3] && (fi.fj(-1),
                    K[4] = -1);
                K[4] !== P && (I++,
                    K[4] = P)
            }

            function l() {
                for (var P = dY - 1; 0 <= P; P--)
                    if (0 < b4[dZ[P]].length)
                        return false;
                return true
            }

            function x() {
                g_playerLandArray[g_localPlayerIndex] !== K[6] && (K[6] = g_playerLandArray[g_localPlayerIndex],
                    I++)
            }

            var n, z, y, A, B, C, E, F, G, N, I, D, K, J, L, H, M, Q, R;
            this.bp = function () {
                H = M = 0;
                D = Array(8);
                D[0] = "Humans";
                D[1] = g_isSingleplayer ? "Players" : "Bots";
                D[2] = "Spectators";
                D[3] = "Threshold";
                D[4] = "Occupation";
                D[5] = "Interest";
                D[6] = "Income";
                D[7] = "Time";
                R = j9 - as(j9, 100);
                K = Array(D.length);
                K[0] = g_isSingleplayer ? 0 : g_playerCount;
                K[1] = g_isSingleplayer ? dY : dq;
                K[2] = iw;
                K[3] = 1E4;
                K[4] = as(1E4 * g_playerLandArray[0], j9);
                K[5] = 700;
                K[6] = 0;
                x();
                K[7] = 0;
                L = k(6);
                J = Array(D.length);
                for (var P = D.length - 1; 0 <= P; P--)
                    J[P] = true;
                Q = 0;
                g_isSingleplayer ? (J[0] = false,
                    J[2] = false,
                    J[3] = false,
                    Q = 3) : (J[3] = false,
                    Q = 1);
                I = 0;
                this.lv()
            }
            ;
            this.lv = function () {
                this.c1 = Math.floor((q ? .1646 : .126) * bq);
                this.cw = Math.floor(1.18 * this.c1);
                B = Math.floor(.04 * this.c1);
                E = Math.floor(.05 * this.c1);
                F = .04 * this.c1;
                C = this.cw;
                this.cw -= Math.floor(Q * (this.cw - 2 * B) / D.length);
                N = Math.floor(.55 * (C - B) / D.length);
                G = bt + N + bu;
                n = document.createElement("canvas");
                n.width = this.c1;
                n.height = this.cw;
                z = n.getContext("2d", {
                    alpha: true
                });
                z.font = G;
                z.textBaseline = cI;
                z.lineWidth = 1;
                this.j2();
                this.qs();
                eO.qs();
                g()
            }
            ;
            this.qs = function () {
                y = gE - this.c1 - m5
            }
            ;
            this.tL = function () {
                A = m5
            }
            ;
            this.j2 = function () {
                A = m5 + (eO.qD() && 0 !== g_isPlayersAliveArray[g_localPlayerIndex] && !fc ? eO.cw + m5 : 0)
            }
            ;
            this.eb = function (P) {
                0 < I && (P || 12 > tM && 100 <= I || 12 <= tM) && (I = 0,
                    g())
            }
            ;
            this.lV = function () {
                return K[7]
            }
            ;
            this.sH = function (P) {
                var U = Math.floor(P / 1E3 / 60);
                P = Math.floor((P - 6E4 * U) / 1E3);
                return 10 > P ? U + ":0" + P : U + ":" + P
            }
            ;
            this.nG = function (P, U) {
                return P.toFixed(U) + "%"
            }
            ;
            this.dF = function () {
                J[0] && ix - iw !== K[0] && (K[0] = ix - iw,
                    I++);
                dY - K[0] !== K[1] && (K[1] = dY - K[0],
                    I++);
                this.eC();
                if (dA) {
                    var P = eT.qm();
                    P >= R && l() ? (fi.fj(-1),
                        t(eT.qm())) : t(P)
                } else
                    P = g_playerLandArray[em[0]],
                    P >= R && l() && fi.fj(-1),
                        t(P);
                P = ay.tY(g_localPlayerIndex);
                P !== K[5] && (K[5] = P,
                    I++);
                x();
                K[7] += c4.tZ();
                P = k(7);
                L !== P && (L = P,
                    I += 100)
            }
            ;
            this.eC = function () {
                J[2] && iw !== K[2] && (K[2] = iw,
                    I++)
            }
            ;
            this.ta = function (P) {
                if (P === jF)
                    return H = 0,
                        g(),
                        false;
                if (-1 === P && 0 === M)
                    return false;
                var U = H
                    , W = performance.now();
                if (0 <= P) {
                    var X = W - 392 * P;
                    M = 0 === P || X < M ? X : M
                }
                H = (W - M) / (392 * jF);
                H = 1 < H ? 1 : H;
                g();
                return H !== U
            }
            ;
            this.cG = function () {
                cH.drawImage(n, y, A)
            }
        }

        function k9() {
            var g, k, t, l, x, n, z, y, A, B;
            this.tf = -1;
            this.bp = function () {
                g = false;
                l = 0;
                x = .61;
                n = .07;
                z = .09;
                B = y = 0;
                this.tf = -1
            }
            ;
            this.lv = function () {
                if (g) {
                    t = q ? Math.floor(.69 * bq) : Math.floor(.5 * bq);
                    t = ql(t, mc(r - 2 * m5, 10));
                    t = ql(t, Math.floor(3.57 * mc(s - 2 * m5, 3)));
                    l = Math.floor(.28 * t);
                    A = document.createElement("canvas");
                    A.width = t;
                    A.height = l;
                    var C = A.getContext("2d", {
                        alpha: true
                    })
                        , E = Math.floor(1 + l / 40);
                    C.clearRect(0, 0, t, l);
                    C.fillStyle = hy;
                    C.fillRect(E, E, t - 2 * E, l - 2 * E);
                    C.lineJoin = "bevel";
                    C.lineWidth = 2 * E;
                    C.strokeStyle = cK;
                    C.strokeRect(E, E, t - 2 * E, l - 2 * E);
                    C.imageSmoothingEnabled = true;
                    var F = bw.bz(k)
                        , G = F.height
                        , N = x * l / G;
                    C.setTransform(N, 0, 0, N, Math.floor((t - N * F.width) / 2), Math.floor((l - N * G) / 2));
                    C.drawImage(F, 0, 0);
                    C.setTransform(1, 0, 0, 1, Math.floor(t - z * l - n * l - E), Math.floor(E + n * l));
                    E = Math.floor(z * l);
                    C.lineWidth = Math.floor(1 + l / 80);
                    C.strokeStyle = cK;
                    C.beginPath();
                    C.moveTo(0, 0);
                    C.lineTo(E, E);
                    C.moveTo(0, E);
                    C.lineTo(E, 0);
                    C.stroke();
                    C.setTransform(1, 0, 0, 1, 0, 0)
                }
            }
            ;
            this.show = function (C, E) {
                g || (k = C ? 1 : 2,
                    g = true,
                    this.lv(),
                    hu.ln(),
                    eR.qh(),
                    B = c4.gc,
                -1 === this.tf && (this.tf = c4.dU()),
                    y = E ? 1 : 0)
            }
            ;
            this.dF = function () {
                !g || 1 <= y || (y += 5E-4 * (c4.gc - B),
                    y = 1 < y ? 1 : y,
                    B = c4.gc,
                    c4.c5 = true)
            }
            ;
            this.c7 = function (C, E) {
                if (!g || 0 >= y)
                    return false;
                C -= Math.floor((gE - t) / 2);
                E -= cB - l - 2 * m5;
                if (0 > C || 0 > E || C > t || E > l)
                    return false;
                C > t - l / 3 && E < l / 3 && (g = false,
                    c4.c5 = true);
                return true
            }
            ;
            this.cG = function () {
                !g || 0 >= y || (cH.globalAlpha = y,
                    cH.drawImage(A, Math.floor((gE - t) / 2), cB - l - 2 * m5),
                    cH.globalAlpha = 1)
            }
        }

        function kd() {
            function g(n, z, y, A, B, C, E) {
                0 !== g_isPlayersAliveArray[n] && 0 !== g_playerLandArray[n] && (y = gE * ((d0[n] + cz[n] + 1) / 2 - y) / (B - y) - .5 * z,
                    A = cB * ((d3[n] + d2[n] + 1) / 2 - A) / (C - A) - .5 * z,
                y > gE || A > cB || y < -z || A < -z || (cH.setTransform(g7 * E, 0, 0, g7 * E, y, A),
                    cH.drawImage(t[dA ? dW.dX[n] : n < g_playerCount ? 1 : 0], 0, 0)))
            }

            var k, t, l, x;
            this.bp = function () {
                var n;
                t = [];
                k = false;
                if (fc)
                    if (x = 0,
                        l = 63,
                        k = true,
                        dA)
                        for (n = 0; n <= jD; n++)
                            t.push(this.tm(dW.tn[dW.im[n]], l));
                    else
                        t.push(this.tm(dW.tn[0], l)),
                            t.push(this.tm(dW.tn[4], l))
            }
            ;
            this.dF = function () {
                k && 349 === ++x && (t = [],
                    k = false)
            }
            ;
            this.tm = function (n, z) {
                var y = document.createElement("canvas");
                y.width = z;
                y.height = z;
                var A = y.getContext("2d", {
                    alpha: true
                });
                A.clearRect(0, 0, z, z);
                var B = A.getImageData(0, 0, z, z), C = B.data, E, F, G = Math.floor(z / 2), N = 1 + G * G;
                for (E = z - 1; 0 <= E; E--)
                    for (F = z - 1; 0 <= F; F--) {
                        var I = (E - G) * (E - G) + (F - G) * (F - G);
                        var D = 4 * (F * z + E);
                        C[D] = n[0];
                        C[D + 1] = n[1];
                        C[D + 2] = n[2];
                        I = Math.floor((N - I) * n[3] / N);
                        C[D + 3] = 0 < I ? I : 0
                    }
                A.putImageData(B, 0, 0);
                return y
            }
            ;
            this.cG = function () {
                if (k) {
                    var n;
                    cH.imageSmoothingEnabled = true;
                    cH.globalAlpha = 1 - (160 < x ? (x - 160) / 190 : 0);
                    var z = gC / g7
                        , y = gD / g7
                        , A = (gE + gC) / g7
                        , B = (cB + gD) / g7;
                    var C = .25;
                    var E = l * g7 * C;
                    for (n = g_unclaimedLandIndex - 1; n >= g_playerCount; n--)
                        g(n, E, z, y, A, B, C);
                    C = .5;
                    E = l * g7 * C;
                    for (n = g_playerCount - 1; 0 <= n; n--)
                        g(n, E, z, y, A, B, C);
                    cH.globalAlpha = 1;
                    cH.imageSmoothingEnabled = 3 > g7;
                    cH.setTransform(g7, 0, 0, g7, 0, 0)
                }
            }
        }

        function triggerAttack(attackerIndex, attackTargetIndex, percentageTimes10) {
            if (!(0 === g_isPlayersAliveArray[attackerIndex] || 0 > percentageTimes10 || 1E3 < percentageTimes10 || 2 === fT[attackerIndex])) {
                var spentTroopsOnAttack = as(percentageTimes10 * g_playerBalanceArray[attackerIndex], 1E3);
                10 === dv && attackTargetIndex < g_playerCount && 2 !== fT[attackTargetIndex] && (spentTroopsOnAttack = eF.tu(attackerIndex, spentTroopsOnAttack));
                if (dA && attackTargetIndex < g_unclaimedLandIndex && !ch(attackerIndex, attackTargetIndex))
                    triggerSupport(attackerIndex, attackTargetIndex, spentTroopsOnAttack);
                else {
                    attackTargetIndex < g_unclaimedLandIndex && 0 === g_isPlayersAliveArray[attackTargetIndex] && (attackTargetIndex = g_unclaimedLandIndex);
                    var spendingTroopsTax = as(3 * g_playerBalanceArray[attackerIndex], 256);
                    spentTroopsOnAttack -= 500 <= percentageTimes10 ? spendingTroopsTax : 0;
                    if (!(spentTroopsOnAttack <= at) && ae.dD(attackerIndex)) {
                        var n = b4[attackerIndex].length;
                        attackTargetIndex === g_unclaimedLandIndex ? cX(attackerIndex) : cS(attackerIndex, attackTargetIndex);
                        if (0 !== n || 0 !== b4[attackerIndex].length)
                            dA && (d7[attackerIndex] = 1),
                            attackerIndex === g_localPlayerIndex && (b0.b1[0] += 500 <= percentageTimes10 ? percentageTimes10 - 12 : percentageTimes10,
                                b0.b1[1]++,
                                b0.b1[12] += spendingTroopsTax,
                                b0.b1[13] += spentTroopsOnAttack),
                                cP(n, attackerIndex),
                                ae.cQ(attackerIndex, spentTroopsOnAttack, attackTargetIndex),
                                g_playerBalanceArray[attackerIndex] -= spentTroopsOnAttack + spendingTroopsTax,
                                au.cR(attackerIndex, false)
                    }
                }
            }
        }

        function triggerBoat(senderIndex, k, t, troopsInBoat) {
            10 === dv && senderIndex < g_playerCount && (troopsInBoat = eF.tu(senderIndex, troopsInBoat));
            if (troopsInBoat <= at || !ae.dD(senderIndex))
                return false;
            k = eK.cR(senderIndex, k, t);
            if (0 === k)
                return false;
            t = as(3 * g_playerBalanceArray[senderIndex], 128);
            troopsInBoat >= as(g_playerBalanceArray[senderIndex], 2) && (troopsInBoat -= t);
            senderIndex === g_localPlayerIndex && (b0.b1[12] += t);
            ae.tv(senderIndex, troopsInBoat, k);
            g_playerBalanceArray[senderIndex] -= troopsInBoat + t;
            return true
        }

        function triggerSupport(supporterIndex, supportTargetIndex, supportAmount) {
            if (!(!dA || 0 === g_isPlayersAliveArray[supporterIndex] || 0 === g_isPlayersAliveArray[supportTargetIndex] || 0 > supportAmount || supportAmount > g_playerBalanceArray[supporterIndex] || supporterIndex === supportTargetIndex || ch(supporterIndex, supportTargetIndex) || supporterIndex < g_playerCount && supportTargetIndex < g_playerCount && 7 > dv && 1071 > c4.dU())) {
                var l = as(g_playerBalanceArray[supporterIndex], 16);
                supportAmount -= supportAmount >= as(g_playerBalanceArray[supporterIndex], 2) ? l : 0;
                var x = g_playerLandArray[supportTargetIndex] * j7 - g_playerBalanceArray[supportTargetIndex];
                0 >= x || (supportAmount = supportAmount > x ? x : supportAmount,
                supporterIndex === g_localPlayerIndex && (e9.n8(supportAmount, supportTargetIndex),
                    b0.b1[12] += l,
                    b0.b1[16] += supportAmount),
                supportTargetIndex === g_localPlayerIndex && (e9.nA(supportAmount, supporterIndex),
                    b0.b1[10] += supportAmount),
                    g_playerBalanceArray[supporterIndex] -= supportAmount + l,
                    g_playerBalanceArray[supportTargetIndex] += supportAmount)
            }
        }

        function tw() {
            this.j5 = this.h9 = this.tx = false;
            this.ty = [0, 0, 0, 0];
            this.tz = function () {
                this.j5 = this.j5 || this.h9;
                if (this.h9 || this.tx && this.j5) {
                    var g = gy.u0[0]
                        , k = gy.u0[1]
                        , t = gy.u0[2]
                        , l = gy.u0[3];
                    g = g < this.ty[0] ? this.ty[0] : g;
                    k = k < this.ty[1] ? this.ty[1] : k;
                    t = t > this.ty[2] ? this.ty[2] : t;
                    l = l > this.ty[3] ? this.ty[3] : l;
                    this.tx = this.h9 = false;
                    g === this.ty[0] && k === this.ty[1] && t === this.ty[2] && l === this.ty[3] ? this.j6() : t >= g && l >= k && jW.putImageData(jX, 0, 0, g, k, t - g + 1, l - k + 1)
                }
            }
            ;
            this.j6 = function () {
                this.j5 && this.ty[2] >= this.ty[0] && this.ty[3] >= this.ty[1] && jW.putImageData(jX, 0, 0, this.ty[0], this.ty[1], this.ty[2] - this.ty[0] + 1, this.ty[3] - this.ty[1] + 1);
                this.j5 = false
            }
            ;
            this.iz = function () {
                this.ty[2] >= this.ty[0] && this.ty[3] >= this.ty[1] && jW.putImageData(jX, 0, 0, this.ty[0], this.ty[1], this.ty[2] - this.ty[0] + 1, this.ty[3] - this.ty[1] + 1);
                this.j5 = false
            }
            ;
            this.bp = function () {
                var g;
                this.j5 = this.h9 = this.tx = false;
                this.ty[0] = aZ;
                this.ty[1] = aa;
                this.ty[2] = this.ty[3] = 0;
                var k = 1;
                a: for (; k < aZ - 1; k++)
                    for (g = aa - 2; 1 < g; g--)
                        if (1 === g_pixelOwnerType[b5.f1(k, g) + 2]) {
                            this.ty[0] = k;
                            break a
                        }
                g = 1;
                a: for (; g < aa - 1; g++)
                    for (k = aZ - 2; 1 < k; k--)
                        if (1 === g_pixelOwnerType[b5.f1(k, g) + 2]) {
                            this.ty[1] = g;
                            break a
                        }
                k = aZ - 2;
                a: for (; 0 < k; k--)
                    for (g = aa - 2; 1 < g; g--)
                        if (1 === g_pixelOwnerType[b5.f1(k, g) + 2]) {
                            this.ty[2] = k;
                            break a
                        }
                g = aa - 2;
                a: for (; 0 < g; g--)
                    for (k = aZ - 2; 1 < k; k--)
                        if (1 === g_pixelOwnerType[b5.f1(k, g) + 2]) {
                            this.ty[3] = g;
                            break a
                        }
            }
        }

        function u2() {
            this.lC = false;
            this.mC = null;
            this.u3 = 0;
            this.cw = this.c1 = null;
            this.u4 = .013;
            this.u5 = .022;
            this.u6 = .025;
            this.u8 = 3;
            this.u9 = 1.2;
            this.uA = .2;
            this.uB = .235;
            this.uC = .9;
            this.uD = .08;
            var topListTitles = ["Best Players", "Best Clans", "LEGENDS NEVER DIE", "THE NEVER ENDING WAR"], k, t = [-1E6, -1E6];
            this.position = [0, 0];
            this.uI = [0, 0];
            this.bp = function () {
                this.mC = [null, null];
                this.lC = false;
                this.u3 = 0;
                this.lv()
            }
            ;
            this.cE = function (l) {
                this.u3 = l;
                this.lC = true;
                this.bv();
                je.tl();
                c4.c5 = true
            }
            ;
            this.dF = function () {
                this.lC && this.bv()
            }
            ;
            this.bv = function () {
                c4.gc - 12E4 >= t[this.u3] && (t[this.u3] = c4.gc,
                    this.uI = [0, 0],
                eD.rk(0, 1 + this.u3) && ir.uJ(0, this.u3))
            }
            ;
            this.lv = function () {
                var l;
                this.c1 = this.uK(q ? .85 : .66, .75, r, s);
                this.cw = Math.floor(this.c1 / .75);
                for (l = 1; 0 <= l; l--)
                    this.mC[l] && (this.mC[l][4] = bt + Math.floor(this.mC[l][5] * this.cw / 10) + bu);
                k = bt + Math.floor(.1 * this.cw) + bu
            }
            ;
            this.uK = function (l, x, n, z) {
                return n < x * z ? Math.floor(l * n) : Math.floor(x * l * z)
            }
            ;
            this.uL = function (l, x, n, z, y, A, B) {
                this.position[l] = B;
                var C = x.length
                    , E = bt + Math.floor(y * this.cw / 10) + bu;
                this.uQ(x, E, A * this.c1);
                z = [[], C, -1, z, E, y, 10 * B];
                for (y = 0; y < C; y++)
                    A = {
                        name: x[y].name,
                        value: x[y].iC / n,
                        colorIndex: x[y].colorIndex
                    },
                        z[0].push(A);
                this.mC[l] = z;
                this.uR(l);
                x = this.mC[l][0][0].name;
                1 === l && (x = "[" + x + "]");
                0 === B && uS.br(l, x);
                c4.c5 = true
            }
            ;
            this.uR = function (l) {
                this.mC[l][0].sort(function (x, n) {
                    return n.value - x.value
                })
            }
            ;
            this.uT = function (l, x, n, z) {
                if (this.mC && this.mC[l]) {
                    var y, A = false, B = 383 / 384;
                    if (0 === l) {
                        for (y = 0; y < this.mC[l][0].length; y++)
                            if (x === this.mC[l][0][y].name && n > .99 * this.mC[l][0][y].value && n < 1.01 * this.mC[l][0][y].value) {
                                this.mC[l][0][y].value = z;
                                A = true;
                                break
                            }
                        A || this.mC[l][0].push({
                            name: x,
                            value: z
                        })
                    } else {
                        for (y = 0; y < this.mC[l][0].length; y++)
                            if (x === this.mC[l][0][y].name) {
                                this.mC[l][0][y].value += 32 < this.mC[l][0][y].value ? (64 - this.mC[l][0][y].value) / 256 : .25;
                                this.mC[l][0][y].value *= 1 / B;
                                A = true;
                                break
                            }
                        for (y = 0; y < this.mC[l][0].length; y++)
                            this.mC[l][0][y].value *= B;
                        A || this.mC[l][0].push({
                            name: x,
                            value: .25
                        })
                    }
                    this.uR(l)
                }
            }
            ;
            this.uQ = function (l, x, n) {
                for (var z = l.length - 1; 0 <= z; z--)
                    for (; 3 < l[z].name.length && c2.measureText(l[z].name, x) > n;)
                        l[z].name = l[z].name.substring(0, l[z].name.length - 4) + "..."
            }
            ;
            this.c7 = function (l, x) {
                if (!this.lC)
                    return false;
                l -= (gE - this.c1) / 2;
                x -= (cB - this.cw) / 2;
                if (0 > l || l > this.c1 || 0 > x || x > this.cw)
                    return this.lC = false,
                    0 === aJ.pY() && jk.cE(0, true),
                        c4.c5 = true;
                if (x < .3 * this.cw)
                    var n = 1;
                else
                    x < .85 * this.cw ? (n = (0 === this.u3 ? 14.1 : 3) * (x - .3 * this.cw) / (.55 * this.cw),
                        n = Math.floor(1 + n * n)) : n = 0 === this.u3 ? 200 : 10;
                this.uI[this.u3] = l < this.c1 / 2 ? -n : n;
                if (t[this.u3] + 50 > c4.gc)
                    return true;
                t[this.u3] = c4.gc;
                eD.rk(0, 1 + this.u3) && ir.uJ(0, this.u3);
                return true
            }
            ;
            this.cG = function () {
                if (this.lC) {
                    var l = this.u4 * this.c1
                        , x = this.u8 * l
                        , n = this.u5 * this.c1
                        , z = this.u9 * n
                        , y = this.u6 * this.c1
                        , A = Math.floor(.25 * this.cw);
                    cH.setTransform(1, 0, 0, 1, (gE - this.c1) / 2, (cB - this.cw) / 2);
                    cH.fillStyle = 0 === this.u3 ? oa : oV;
                    cH.fillRect(0, 0, this.c1, A);
                    cH.fillStyle = oF;
                    cH.fillRect(0, A, this.c1, this.cw - A);
                    cH.fillStyle = cK;
                    cH.font = k;
                    cH.textBaseline = cI;
                    cH.textAlign = cJ;
                    cH.fillText(topListTitles[this.u3], Math.floor(this.c1 / 2), Math.floor(.135 * this.cw));
                    cH.font = bt + Math.floor(.025 * this.cw) + bu;
                    cH.fillText(topListTitles[this.u3 + 2], Math.floor(this.c1 / 2), Math.floor(.2125 * this.cw));
                    cH.beginPath();
                    cH.moveTo(this.c1 / 4, 0);
                    cH.lineTo(this.c1 / 2 - l, 0);
                    cH.lineTo(this.c1 / 2, -x);
                    cH.lineTo(this.c1 / 2 + l, 0);
                    cH.lineTo(this.c1 - n, 0);
                    cH.lineTo(this.c1 + z, -z);
                    cH.lineTo(this.c1, n);
                    cH.lineTo(this.c1, this.cw / 2 - l);
                    cH.lineTo(this.c1 + x, this.cw / 2);
                    cH.lineTo(this.c1, this.cw / 2 + l);
                    cH.lineTo(this.c1, this.cw - n);
                    cH.lineTo(this.c1 + z, this.cw + z);
                    cH.lineTo(this.c1 - n, this.cw);
                    cH.lineTo(this.c1 / 2 + l, this.cw);
                    cH.lineTo(this.c1 / 2, this.cw + x);
                    cH.lineTo(this.c1 / 2 - l, this.cw);
                    cH.lineTo(n, this.cw);
                    cH.lineTo(-z, this.cw + z);
                    cH.lineTo(0, this.cw - n);
                    cH.lineTo(0, this.cw / 2 + l);
                    cH.lineTo(-x, this.cw / 2);
                    cH.lineTo(0, this.cw / 2 - l);
                    cH.lineTo(0, n);
                    cH.lineTo(-z, -z);
                    cH.lineTo(n, 0);
                    cH.lineTo(this.c1 / 4, 0);
                    cH.lineTo(this.c1 / 4, y);
                    cH.lineTo(y, y);
                    cH.lineTo(y, this.cw - y);
                    cH.lineTo(this.c1 - y, this.cw - y);
                    cH.lineTo(this.c1 - y, y);
                    cH.lineTo(this.c1 / 4, y);
                    cH.fill();
                    this.mC[this.u3] && this.uZ(A);
                    this.ua(A);
                    cH.setTransform(1, 0, 0, 1, 0, 0)
                }
            }
            ;
            this.ua = function (l) {
                var x = mc(2, Math.floor(.06 * this.c1));
                x -= x % 2;
                var n = mc(2, Math.floor(.01 * this.c1));
                n -= n % 2;
                l = Math.floor(.82 * l);
                cH.fillRect(x, l, x, n);
                cH.fillRect(this.c1 - x - x, l, x, n);
                cH.fillRect(Math.floor(this.c1 - x - x + (x - n) / 2), Math.floor(l - (x - n) / 2), n, x)
            }
            ;
            this.uZ = function (l) {
                cH.font = this.mC[this.u3][4];
                for (var x, n = this.mC[this.u3][1] - 1; 0 <= n; n--)
                    cH.textAlign = oj,
                        x = Math.floor(this.uD * this.cw + l + n * ((1 - 2 * this.uD) * this.cw - l) / 9),
                        cH.fillText(this.mC[this.u3][0][n].value.toFixed(this.mC[this.u3][3]), Math.floor(this.uC * this.c1), x),
                        cH.fillText(n + 1 + this.mC[this.u3][6] + ".", Math.floor(this.uA * this.c1), x),
                        cH.textAlign = mh,
                        cH.fillText(this.mC[this.u3][0][n].name, Math.floor(this.uB * this.c1), x)
            }
        }

        function ub() {
            var g, k, t, l, x, n, z, y, A, B, C, E, F;
            this.lC = false;
            this.bp = function (G, N) {
                if (13 <= d)
                    N ? E = G : E === G && e.saveString(200, G);
                else if (N) {
                    (cC.mC[1].ih.lC || cC.mC[2].ih.lC) && cC.ul();
                    je.tl();
                    E = G;
                    A = Math.floor((q ? r > s ? .6 : .45 : .4) * pI);
                    t = A / bw.bz(17).width;
                    x = Math.floor(t * bw.bz(17).height);
                    n = Math.floor(.4 * x);
                    z = Math.floor(.6 * x);
                    y = Math.floor(2.5 * z);
                    l = x + n + 3 * z;
                    var I = bt + Math.floor(n / pM) + bu;
                    B = Math.floor(pM * c2.measureText(E, I));
                    C = (B > A ? B : A) + 2 * y;
                    g = Math.floor((gE - C) / 2);
                    k = Math.floor((cB - l) / 2);
                    F = document.createElement("a");
                    F.appendChild(document.createTextNode(E));
                    F.title = E;
                    F.target = "blank";
                    F.href = E;
                    F.style.font = I;
                    F.style.textAlign = "center";
                    F.style.color = cK;
                    F.style.position = "absolute";
                    F.style.padding = "0px";
                    F.style.margin = "0px";
                    F.style.top = Math.floor((k + 2 * z + x) / pM) + "px";
                    F.style.left = Math.floor((g + (C - B) / 2) / pM) + "px";
                    document.body.appendChild(F);
                    this.lC = true;
                    c4.c5 = true
                }
            }
            ;
            this.lF = function () {
                if (!this.lC)
                    return false;
                document.body.removeChild(F);
                this.lC = false;
                return true
            }
            ;
            this.c7 = function (G, N) {
                if (!this.lC)
                    return false;
                if (G < g || N < k || G > g + C || N > k + l)
                    c4.c5 = true,
                        this.lC = false,
                        document.body.removeChild(F),
                    0 === aJ.pY() && jk.cE(0, true);
                return true
            }
            ;
            this.cG = function () {
                this.lC && (cH.imageSmoothingEnabled = true,
                    cH.setTransform(1, 0, 0, 1, g, k),
                    cH.fillStyle = hy,
                    cH.fillRect(0, 0, C, l),
                    cH.lineWidth = ow,
                    cH.strokeStyle = cK,
                    cH.strokeRect(0, 0, C, l),
                    cH.setTransform(t, 0, 0, t, g + (C - A) / 2, k + z),
                    cH.drawImage(bw.bz(17), 0, 0),
                    cH.setTransform(1, 0, 0, 1, 0, 0))
            }
        }

        function um() {
            var g = 0
                , k = [0, 0, 0, 0, 0]
                , t = [0, 0, 0, 0, 0]
                , l = [1, 1, 1, 1, 1]
                , x = [true, true, true, true, true];
            this.un = [true, true, true, true, true];
            var n = null, z;
            this.uo = function (y, A) {
                n = y;
                x = A;
                z = [on, oo, op, oq, or];
                this.bp()
            }
            ;
            this.bp = function () {
                if (bw.bx()) {
                    var y = Math.floor((q ? .261 : .195) * bq);
                    var A = Math.floor(.9 * y)
                        , B = Math.floor(.17 * A);
                    g = q ? 2 * m5 : m5;
                    l[0] = y / n[0].width;
                    l[1] = A / n[1].width;
                    l[2] = B / n[2].height;
                    l[3] = B / n[3].height;
                    l[4] = B / n[4].height;
                    l[3] *= 1.07;
                    k[0] = g;
                    k[1] = g;
                    k[2] = g;
                    k[3] = g;
                    k[4] = Math.floor(2 * g + l[3] * n[3].width);
                    t[0] = g;
                    t[1] = t[0] + g + l[0] * n[0].height;
                    t[2] = t[1] + g + l[1] * n[1].height;
                    t[3] = t[2] + g + l[2] * n[2].height;
                    t[4] = t[3];
                    if (!x[0])
                        for (y = 0; 5 > y; y++)
                            t[y] -= l[0] * n[0].height + g;
                    if (!x[1])
                        for (y = 2; 5 > y; y++)
                            t[y] -= l[1] * n[1].height + g
                }
            }
            ;
            this.lC = function () {
                return !(7 === aJ.pY() && q)
            }
            ;
            this.c7 = function (y, A, B) {
                if (!n || !this.lC())
                    return false;
                var C;
                for (C = x.length - 1; 0 <= C; C--)
                    if (x[C] && this.un[C] && y > k[C] && A > t[C] && y < k[C] + l[C] * n[C].width && A < t[C] + l[C] * n[C].height)
                        return nU.bp(z[C], B),
                            true;
                return false
            }
            ;
            this.cG = function () {
                if (n && this.lC()) {
                    cH.imageSmoothingEnabled = true;
                    var y;
                    for (y = 0; 5 > y; y++)
                        x[y] && this.un[y] && (cH.setTransform(l[y], 0, 0, l[y], k[y], t[y]),
                            cH.drawImage(n[y], 0, 0));
                    cH.setTransform(1, 0, 0, 1, 0, 0)
                }
            }
        }

        function kA() {
            function g(x) {
                var n = jh.us[x]
                    , z = n.fJ
                    , y = n.fK
                    , A = n.c1
                    , B = n.cw;
                cH.fillStyle = n.uv;
                cH.fillRect(z, y, A, B);
                x === k && (cH.fillStyle = l,
                    cH.fillRect(z, y, A, B));
                cH.lineWidth = 3;
                cH.strokeStyle = t;
                cH.strokeRect(z, y, A, B);
                x = n.fJ;
                z = n.fK;
                y = n.c1;
                A = n.cw;
                cH.textAlign = cJ;
                cH.textBaseline = cI;
                cH.font = n.font;
                cH.fillStyle = t;
                cH.fillText(n.nY, Math.floor(x + y / 2), Math.floor(z + A / 2 + .1 * n.by))
            }

            var k, t, l;
            this.f6 = this.fK = this.cw = this.c1 = 0;
            this.bp = function () {
                k = -1;
                t = cK;
                l = "rgba(255,255,255,0.16)";
                this.us = Array(7);
                this.cw = Math.floor((q ? .123 : .093) * bq);
                this.c1 = Math.floor((q ? 3.96 : 4.2) * this.cw);
                this.f6 = Math.floor(.025 * this.c1);
                var x = Math.floor(.26 * this.cw)
                    , n = bt + x + bu;
                this.us[0] = {
                    fJ: 0,
                    fK: 0,
                    c1: Math.floor(.6 * this.c1 - this.f6 / 2),
                    cw: this.cw,
                    nY: "Multiplayer",
                    font: n,
                    uv: "rgba(22,88,22,0.8)",
                    by: x
                };
                x = Math.floor(.18 * this.cw);
                n = bt + x + bu;
                this.us[1] = {
                    fJ: 0,
                    fK: 0,
                    c1: this.c1 - this.us[0].c1 - this.f6,
                    cw: this.cw,
                    nY: "Singleplayer",
                    font: n,
                    uv: "rgba(22,88,88,0.8)",
                    by: x
                };
                this.us[2] = {
                    fJ: 0,
                    fK: 0,
                    c1: this.c1,
                    cw: Math.floor(.3 * this.cw),
                    nY: "",
                    font: this.us[1].font,
                    uv: "rgba(100,0,0,0.8)",
                    by: this.us[1].by
                };
                this.us[3] = {
                    fJ: 0,
                    fK: 0,
                    c1: this.c1,
                    cw: this.cw,
                    nY: "Back",
                    font: this.us[0].font,
                    uv: "rgba(0,0,0,0.8)",
                    by: this.us[0].by
                };
                this.us[4] = {
                    fJ: 0,
                    fK: 0,
                    c1: this.c1,
                    cw: Math.floor(.3 * this.cw),
                    nY: "The game was updated!",
                    font: this.us[1].font,
                    uv: "rgba(100,0,0,0.8)",
                    by: this.us[1].by
                };
                this.us[5] = {
                    fJ: 0,
                    fK: 0,
                    c1: this.us[0].c1,
                    cw: Math.floor(.8 * this.cw),
                    nY: "Reload",
                    font: this.us[0].font,
                    uv: "rgba(0,100,0,0.8)",
                    by: this.us[0].by
                };
                this.us[6] = {
                    fJ: 0,
                    fK: 0,
                    c1: this.us[1].c1,
                    cw: this.us[5].cw,
                    nY: "Back",
                    font: this.us[0].font,
                    uv: "rgba(0,0,0,0.8)",
                    by: this.us[0].by
                };
                this.rs()
            }
            ;
            this.rs = function () {
                this.fK = Math.floor(.54 * cB);
                this.us[0].fJ = Math.floor(.5 * gE - .5 * this.c1);
                this.us[1].fJ = this.us[0].fJ + this.us[0].c1 + this.f6;
                this.us[2].fJ = this.us[3].fJ = this.us[0].fJ;
                this.us[4].fJ = this.us[5].fJ = this.us[0].fJ;
                this.us[6].fJ = this.us[1].fJ;
                this.us[0].fK = Math.floor(.54 * cB);
                this.us[1].fK = this.us[0].fK;
                this.us[2].fK = Math.floor((cB - this.us[2].cw - this.us[3].cw - this.f6) / 2);
                this.us[3].fK = this.us[2].fK + this.us[2].cw + this.f6;
                this.us[4].fK = Math.floor((cB - this.us[4].cw - this.us[5].cw - this.f6) / 2);
                this.us[5].fK = this.us[6].fK = this.us[4].fK + this.us[4].cw + this.f6
            }
            ;
            this.uw = function () {
                g(0);
                g(1)
            }
            ;
            this.uy = function () {
                g(2);
                g(3)
            }
            ;
            this.uz = function () {
                g(4);
                g(5);
                g(6)
            }
            ;
            this.lm = function (x, n, z) {
                var y = -1;
                0 === aJ.pY() ? y = this.pP(x, n, 0, 2) : 3 === aJ.pY() ? y = this.pP(x, n, 3, 1) : 5 === aJ.pY() && (y = this.pP(x, n, 5, 2));
                k !== y && (k = y,
                z && (c4.c5 = true));
                return -1 !== y ? (jg.pU(),
                    true) : false
            }
            ;
            this.pP = function (x, n, z, y) {
                for (var A = z; A < z + y; A++)
                    if (x >= this.us[A].fJ && n >= this.us[A].fK && x <= this.us[A].fJ + this.us[A].c1 && n <= this.us[A].fK + this.us[A].cw)
                        return A;
                return -1
            }
        }

        function v2() {
            function g(k) {
                return 0 > k ? 0 : 255 < k ? 255 : Math.floor(k)
            }

            this.cw = this.c1 = 0;
            this.lC = false;
            this.v6 = this.v5 = this.v4 = this.ns = this.f6 = this.v3 = 0;
            this.colors = null;
            this.bp = function () {
                r < 2 * s ? this.c1 = Math.floor((q ? .94 : .4) * r) : (this.cw = Math.floor((q ? .88 : .4) * s),
                    this.c1 = Math.floor(2 * this.cw));
                this.cw = this.c1 / 2;
                this.f6 = this.cw / 16;
                this.lC = true;
                this.v3 = 0;
                this.v4 = (this.cw - 3 * this.f6) / 2;
                this.v5 = this.c1 - 3 * this.f6 - this.v4;
                this.v6 = (this.cw - 4 * this.f6) / 3
            }
            ;
            this.v7 = function () {
                this.colors = [[0, 0, 0], [0, 0, 0]];
                var k = v().split("");
                if (6 > k.length)
                    for (k = 2; 0 <= k; k--)
                        this.colors[0][k] = g(256 * Math.random());
                else
                    for (var t = 2; 0 <= t; t--)
                        this.colors[0][t] = g(4 * (10 * parseInt(k[2 * t]) + parseInt(k[2 * t + 1])));
                this.v9()
            }
            ;
            this.vA = function () {
                return [as(this.colors[0][0], 4), as(this.colors[0][1], 4), as(this.colors[0][2], 4)]
            }
            ;
            this.c7 = function (k, t) {
                this.v3 = 0;
                var l = (cB - this.cw) / 2;
                k -= (gE - this.c1) / 2;
                t -= l;
                if (0 > k || 0 > t || k >= this.c1 - 1 || t >= this.cw - 1)
                    return this.lC = false,
                    0 === aJ.pY() && jk.cE(0, true),
                        c4.c5 = true,
                        false;
                if (k < this.f6 || t < this.f6 || k >= this.c1 - this.f6 || t >= this.cw - this.f6)
                    return true;
                if (k < this.f6 + this.v4)
                    return t < this.f6 + this.v4 && 0 !== this.ns && (this.ns = 0,
                        c4.c5 = true),
                        true;
                if (k < 2 * this.f6 + this.v4)
                    return true;
                k -= 2 * this.f6 + this.v4;
                if (t < this.f6 + this.v6)
                    return this.v3 = 1,
                        this.colors[this.ns][0] = g(256 * k / this.v5),
                        c4.c5 = true;
                if (t < 2 * this.f6 + this.v6)
                    return true;
                if (t < 2 * this.f6 + 2 * this.v6)
                    return this.v3 = 2,
                        this.colors[this.ns][1] = g(256 * k / this.v5),
                        c4.c5 = true;
                t >= 3 * this.f6 + 2 * this.v6 && (this.v3 = 3,
                    this.colors[this.ns][2] = g(256 * k / this.v5),
                    c4.c5 = true);
                return true
            }
            ;
            this.v9 = function () {
                for (var k = 2; 0 <= k; k--)
                    this.colors[0][k] = g(this.colors[0][k])
            }
            ;
            this.vB = function () {
                var k, t = "";
                for (k = 0; 3 > k; k++) {
                    var l = as(this.colors[0][k], 4);
                    10 > l && (t += "0");
                    t += l.toString()
                }
                return t
            }
            ;
            this.lm = function (k) {
                0 !== this.v3 && (k -= 2 * this.f6 + this.v4 + (gE - this.c1) / 2,
                    this.colors[this.ns][this.v3 - 1] = g(256 * k / this.v5),
                    c4.c5 = true)
            }
            ;
            this.vC = function () {
                0 < this.v3 && (this.v3 = 0,
                    this.v9(),
                    jt.vD(),
                    c4.c5 = true)
            }
            ;
            this.cG = function () {
                cH.setTransform(1, 0, 0, 1, (gE - this.c1) / 2, (cB - this.cw) / 2);
                cH.fillStyle = hy;
                cH.fillRect(0, 0, this.c1, this.cw);
                cH.lineWidth = ow;
                cH.strokeStyle = cK;
                cH.strokeRect(-1, -1, this.c1 + 2, this.cw + 2);
                cH.font = bt + Math.floor(.8 * this.v4) + bu;
                cH.textBaseline = cI;
                cH.textAlign = cJ;
                this.vE(0);
                cH.lineWidth = ow;
                this.vF(0);
                this.vF(1);
                this.vF(2);
                cH.setTransform(1, 0, 0, 1, 0, 0)
            }
            ;
            this.vE = function (k) {
                cH.fillStyle = "rgb(" + this.colors[k][0] + "," + this.colors[k][1] + "," + this.colors[k][2] + ")";
                cH.fillRect(this.f6, this.f6, this.v4, 2 * this.v4 + this.f6);
                cH.lineWidth = 2 + ow;
                cH.strokeStyle = cK;
                cH.strokeRect(this.f6, this.f6, this.v4, 2 * this.v4 + this.f6)
            }
            ;
            this.vF = function (k) {
                cH.fillStyle = "rgb(" + (0 === k ? 200 : 2 === k ? 50 : 0) + "," + (1 === k ? 200 : 2 === k ? 50 : 0) + "," + (2 === k ? 255 : 0) + ")";
                cH.fillRect(2 * this.f6 + this.v4, this.f6 + k * (this.f6 + this.v6), Math.floor(this.colors[this.ns][k] * this.v5 / 255), this.v6);
                cH.strokeStyle = cK;
                cH.strokeRect(2 * this.f6 + this.v4, this.f6 + k * (this.f6 + this.v6), this.v5, this.v6)
            }
        }

        function kB() {
            function g() {
                return 0 === D ? 0 : 1 + (D - 1 + K) % (eD.vR - 1)
            }

            function k() {
                D++;
                I = c4.gc;
                eD.rk(g(), 4) && (J = true,
                    ir.vS(g()))
            }

            function t() {
                0 === D ? jj.vX(3249) : (D === eD.vR - 1 && (D = -1),
                    k())
            }

            function l(L, H, M) {
                var Q = Math.floor((gE - y) / 2) + C
                    , R = Q + Math.floor(M * (y - 2 * C));
                cH.lineWidth = H;
                cH.beginPath();
                cH.moveTo(Q, L);
                cH.lineTo(R, L);
                cH.lineTo(Math.floor(Q - C + M * y), L + z);
                cH.lineTo(Q - C, L + z);
                cH.closePath()
            }

            var x, n, z, y, A, B, C, E, F, G, N, I, D, K = 0, J;
            this.bp = function () {
                aJ.setState(6);
                x = 0;
                n = 1;
                E = "rgba(0,220,120,0.4)";
                F = "rgba(0,0,0,0.8)";
                this.lv();
                c4.c5 = true;
                D = 0;
                J = false;
                k()
            }
            ;
            this.lv = function () {
                y = Math.floor((q ? .5 : .25) * bq);
                A = y + 12;
                z = Math.floor(.125 * y);
                C = 3 * z;
                B = Math.floor(.225 * y);
                N = Math.floor(.3 * z);
                G = ol + N + bu
            }
            ;
            this.vP = function (L) {
                K = L
            }
            ;
            this.vT = function (L) {
                L === g() && (J = false,
                    t())
            }
            ;
            this.rm = function (L) {
                6 !== aJ.pY() || J || (I = c4.gc,
                    J = true,
                    ir.vS(L))
            }
            ;
            this.c7 = function (L, H) {
                var M = Math.floor((gE - A) / 2)
                    , Q = Math.floor(.5 * (cB - cA - z - B)) + z + cA;
                return L > M && L < M + A && H > Q && H < Q + B ? (this.vY(),
                    jh.lm(L, H, false),
                    true) : false
            }
            ;
            this.vY = function () {
                eD.vZ(3260);
                je.bp();
                c4.c5 = true
            }
            ;
            this.dF = function () {
                6 === aJ.pY() && (J ? c4.gc > I + 2E4 && jj.vX(3250) : c4.gc > I + 2E4 && t(),
                    x += .07 * n * (16 > x ? 5 + x : 84 < x ? 105 - x : 17),
                    100 < x ? (x = 100,
                        n = -1) : 0 > x && (x = 0,
                        n = 1),
                    E = "rgba(0," + Math.floor(190 - 1.9 * x) + "," + Math.floor(120 - 1.2 * x) + "," + (.4 + .004 * x) + ")",
                    F = "rgba(0," + Math.floor(1.9 * x) + "," + Math.floor(1.2 * x) + "," + (.8 - .004 * x) + ")",
                    c4.c5 = true)
            }
            ;
            this.cG = function () {
                var L = Math.floor((gE - A) / 2)
                    , H = Math.floor(.5 * (cB - cA - z - B))
                    , M = x / 100;
                cH.fillStyle = F;
                l(H, 3, 1);
                cH.fill();
                cH.fillStyle = E;
                l(H, 3, M);
                cH.fill();
                cH.strokeStyle = cK;
                l(H, 3, 1);
                cH.stroke();
                cH.textAlign = cJ;
                cH.textBaseline = cI;
                cH.font = G;
                cH.fillStyle = cK;
                cH.fillText("Loading", Math.floor(.5 * gE), Math.floor(H + .58 * z));
                H = H + z + cA;
                M = A;
                var Q = B;
                cH.fillStyle = oE;
                cH.fillRect(L, H, M, Q);
                cH.lineWidth = 3;
                cH.strokeStyle = cK;
                cH.strokeRect(L, H, M, Q);
                var R = Math.floor(.3 * Q);
                cH.textAlign = cJ;
                cH.textBaseline = cI;
                cH.font = ol + R + bu;
                cH.fillStyle = cK;
                cH.fillText("Back", Math.floor(L + M / 2), Math.floor(H + Q / 2 + .1 * R))
            }
        }

        function kC() {
            var g;
            this.bp = function () {
                jh.bp();
                jk.bp();
                g = 0;
                vh.bp();
                je.bp()
            }
            ;
            this.setState = function (k) {
                g = k
            }
            ;
            this.pY = function () {
                return g
            }
            ;
            this.vj = function () {
                this.setState(8);
                jr.tl();
                cC.ul();
                cD.lC = false;
                nU.c7(-1E3, -1E3)
            }
            ;
            this.ul = function (k) {
                if (!vk)
                    return false;
                if (!(400 > c4.gc)) {
                    if ("Enter" === k.key || "Escape" === k.key) {
                        if (this.vl())
                            return 0 === g && jk.cE(0, true),
                                true;
                        if ("Enter" === k.key) {
                            if (0 === g)
                                return je.vm(),
                                    true;
                            if (7 === g)
                                return true
                        }
                    }
                    return false
                }
            }
            ;
            this.vl = function () {
                return nU.lF() || cC.ul() ? true : cD.lC ? (cD.lC = false,
                    true) : false
            }
            ;
            this.aK = function () {
                c4.c5 = true;
                8 === g ? g_uiVisibility ? g_uiVisibility = !g_uiVisibility : hv.lC ? hv.m0() : fq.m0() : 7 === g ? jr.vn() : 6 === g ? ji.vY() : 3 === g ? jj.vo(0, 0) : 2 === g ? dy.vo() : 0 === g && (this.vl() || a9(11))
            }
            ;
            this.c7 = function (k, t) {
                if (!vh.c7(k, t) && vk && !(nU.c7(k, t) || 6 === g && ji.c7(k, t) || 2 === g && dy.c7(k, t) || jt.c7(k, t) || cD.c7(k, t) || vp.c7(k, t, true) || cC.c7(k, t, true))) {
                    jg.c7(k, t);
                    if (0 === g)
                        je.c7(k, t);
                    else if (3 === g)
                        jj.c7(k, t);
                    else if (5 === g)
                        jl.c7(k, t);
                    else if (7 === g && jr.c7(k, t))
                        return;
                    uS.c7(k, t)
                }
            }
            ;
            this.lm = function (k, t) {
                jt.lm(k, t);
                if (!jg.ri) {
                    if (vh.lm(k, t)) {
                        jg.pU();
                        return
                    }
                    if (2 === g && dy.lm(k, t)) {
                        jg.pU();
                        return
                    }
                    if (0 <= cC.pP(k, t)) {
                        jg.pU();
                        return
                    }
                    if (cC.lm(k, t)) {
                        jg.pU();
                        return
                    }
                    if (jh.lm(k, t, true))
                        return
                }
                jg.lm(k, t)
            }
            ;
            this.click = function (k, t) {
                jg.pV();
                cC.vC() || vp.c7(k, t, false) || cC.c7(k, t, false)
            }
            ;
            this.pb = function (k, t, l) {
                cC.mC[1].ih.lC || 0 === g && jg.pb(k, l)
            }
            ;
            this.vq = function () {
                jh.rs();
                cC.rs();
                0 === g ? (jk.rs(0),
                    jg.rs()) : 7 === g && jr.lv();
                c4.c5 = true
            }
            ;
            this.cG = function () {
                if (8 !== g && 10 !== g) {
                    cH.imageSmoothingEnabled = true;
                    this.hr();
                    jg.cG();
                    jf.cG();
                    var k = Math.floor(.3 * cB)
                        , t = bw.l9("territorial.io")
                        , l = 1.75 * cB / t.width;
                    l = l * t.width < .98 * gE ? .98 * gE / t.width : l;
                    cH.globalAlpha = .15;
                    var x = Math.floor(.5 * (gE - l * t.width));
                    x = Math.floor(x / l);
                    k = Math.floor(k - .5 * t.height * l);
                    k = Math.floor(k / l);
                    cH.setTransform(l, 0, 0, l, x, k);
                    cH.drawImage(t, x, k);
                    cH.setTransform(1, 0, 0, 1, 0, 0);
                    cH.globalAlpha = 1;
                    vp.cG();
                    uS.cG();
                    cC.cG();
                    jt.cG();
                    0 === g ? je.cG() : 2 === g ? dy.cG() : 3 === g ? jj.cG() : 5 === g ? jl.cG() : 6 === g ? ji.cG() : 7 === g && jr.cG();
                    cC.vs();
                    vh.cG();
                    cD.cG();
                    nU.cG()
                }
            }
            ;
            this.hr = function () {
                if (vk) {
                    var k = r / aZ
                        , t = s / aa;
                    k = k > t ? k : t;
                    cH.setTransform(k, 0, 0, k, Math.floor((r - k * aZ) / 2), Math.floor((s - k * aa) / 2));
                    cH.drawImage(hs, 0, 0);
                    cH.setTransform(1, 0, 0, 1, 0, 0);
                    cH.fillStyle = oE
                } else
                    cH.fillStyle = gH;
                cH.fillRect(0, 0, r, s)
            }
        }

        function vv() {
            this.cw = this.c1 = 0;
            this.lC = false;
            this.nh = 10;
            this.bB = .12;
            this.vx = this.vw = this.v3 = false;
            this.bp = function () {
                this.c1 = r < 1 * s ? Math.floor((q ? .94 : .6) * r) : Math.floor((q ? .94 : .6) * s);
                this.c1 -= this.c1 % this.nh;
                this.cw = 1 * this.c1;
                this.lC = true;
                this.v3 = false
            }
            ;
            this.c7 = function (g, k, t) {
                var l = (cB - this.cw) / 2;
                g -= (gE - this.c1) / 2;
                k -= l;
                if (0 > g || 0 > k || g >= this.c1 - 1 || k >= this.cw - 1)
                    return 0 === t && (this.lC = false,
                    0 === aJ.pY() && jk.cE(0, true),
                        c4.c5 = true),
                        false;
                l = Math.floor(this.c1 / this.nh);
                g = as(g, l) + this.nh * as(k, l);
                g = 0 > g ? 0 : g >= a5.nl ? a5.nl - 1 : g;
                if (0 === t || 1 === t && !a5.a7[g] || 2 === t && a5.a7[g])
                    this.vw = !a5.a7[g],
                        this.vx = this.v3 = true,
                        a5.a7[g] = !a5.a7[g],
                        a5.o3(),
                        c4.c5 = true;
                return true
            }
            ;
            this.lm = function (g, k) {
                this.v3 && this.c7(g, k, this.vw ? 1 : 2)
            }
            ;
            this.vC = function () {
                this.vx && (a3(),
                    this.vx = false);
                this.v3 = this.vx = false
            }
            ;
            this.cG = function () {
                cH.imageSmoothingEnabled = true;
                var g = (gE - this.c1) / 2
                    , k = (cB - this.cw) / 2;
                cH.setTransform(1, 0, 0, 1, g, k);
                cH.fillStyle = hy;
                cH.fillRect(0, 0, this.c1, this.cw);
                cH.lineWidth = ow;
                cH.strokeStyle = cK;
                cH.strokeRect(-1, -1, this.c1 + 2, this.cw + 2);
                for (var t = Math.floor(this.c1 / this.nh), l = (t - 2 * this.bB * t) / a5.c1, x = a5.nl - 1; 0 <= x; x--)
                    cH.setTransform(1, 0, 0, 1, Math.floor(g + x % this.nh * t), Math.floor(k + as(x, this.nh) * t)),
                    a5.a7[x] && (cH.fillStyle = oM,
                        cH.fillRect(0, 0, t, t)),
                        cH.setTransform(l, 0, 0, l, Math.floor(g + x % this.nh * t + this.bB * t), Math.floor(k + as(x, this.nh) * t + this.bB * t)),
                        cH.drawImage(a5.l5[x], 0, 0);
                cH.setTransform(1, 0, 0, 1, 0, 0);
                cH.imageSmoothingEnabled = false
            }
        }

        function kD() {
            function g() {
                var n = aJ.pY();
                0 === n ? je.tl() : 6 === n ? eD.vZ(t) : 7 === n ? (jr.tl(),
                    eD.close(eD.w0, 3240)) : 8 === n && (jb(),
                    je.tl());
                aJ.setState(3);
                jh.rs();
                jh.us[2].nY = k(t);
                c4.c5 = true
            }

            function k(n) {
                var z;
                for (z = l.length - 1; 0 <= z; z--)
                    if (n === l[z].code)
                        return l[z].l;
                return x + n
            }

            var t, l, x;
            this.jT = function () {
                l = [];
                l.push({
                    l: "No Server Response",
                    code: 1006
                });
                l.push({
                    l: "Account successfully saved!",
                    code: 3231
                });
                l.push({
                    l: "Account Error",
                    code: 3232
                });
                l.push({
                    l: "No Servers Found",
                    code: 3249
                });
                l.push({
                    l: "Thanks for the vote.",
                    code: 3252
                });
                l.push({
                    l: "Please accept Cookies",
                    code: 3265
                });
                l.push({
                    l: "Invalid Password Format",
                    code: 3266
                });
                l.push({
                    l: "Lobby Timeout",
                    code: 4207
                });
                l.push({
                    l: "Invalid Username",
                    code: 4214
                });
                l.push({
                    l: "User already exists.",
                    code: 4224
                });
                l.push({
                    l: "No Client Response Error",
                    code: 4229
                });
                x = "Error "
            }
            ;
            this.bp = function (n, z) {
                t = z;
                var y = aJ.pY();
                if (6 === y) {
                    if (4211 === z) {
                        jl.bp(0, 0);
                        return
                    }
                    if (4214 !== z) {
                        ji.vT(n);
                        return
                    }
                } else if (7 === y) {
                    if (n !== eD.w0)
                        return
                } else {
                    8 === y && (n !== eD.jc || g_isSingleplayer || e9.mm(k(z)));
                    return
                }
                g()
            }
            ;
            this.vX = function (n) {
                t = n;
                8 === aJ.pY() ? e9.mm(k(n)) : g()
            }
            ;
            this.lv = function () {
                jh.us[2].nY = k(t)
            }
            ;
            this.c7 = function (n, z) {
                3 === jh.pP(n, z, 3, 1) && this.vo(n, z)
            }
            ;
            this.vo = function (n, z) {
                je.bp();
                jh.lm(n, z, false);
                c4.c5 = true
            }
            ;
            this.cG = function () {
                jh.uy()
            }
        }

        function kE() {
            function g() {
                k.push({
                    input: document.createElement("INPUT"),
                    lC: false,
                    color: t
                });
                var x = k.length - 1;
                k[x].input.setAttribute("type", "text");
                k[x].input.value = "";
                k[x].input.style.textAlign = 0 === x ? "center" : "left";
                k[x].input.style.backgroundColor = t;
                k[x].input.style.border = "3px solid " + cK;
                k[x].input.style.color = cK;
                k[x].input.style.position = "absolute";
                k[x].input.readOnly = 3 === x;
                k[x].input.addEventListener("input", function () {
                    0 === x && je.w7()
                })
            }

            var k, t, l;
            this.bp = function () {
                t = "rgba(0,0,0,0.6)";
                l = oT;
                void 0 !== k && this.cE(0, false);
                k = [];
                g();
                this.lv()
            }
            ;
            this.lv = function () {
                var x = Math.floor(.22 * jh.cw / pM);
                k[0].input.style.font = bt + x + bu;
                k[0].input.style.padding = Math.floor(.3 * x) + "px 5px";
                k[0].input.style.width = Math.floor(jh.c1 / pM - 13) + "px"
            }
            ;
            this.bz = function (x) {
                return k[x]
            }
            ;
            this.rs = function (x) {
                k[x].input.style.left = Math.floor((gE / pM - (jh.c1 / pM - 3) - 7) / 2) + "px";
                0 === x && (k[x].input.style.bottom = Math.floor((cB - jh.fK + jh.f6) / pM) + "px")
            }
            ;
            this.cE = function (x, n) {
                k[x].lC !== n && ((k[x].lC = n) ? document.body.appendChild(k[x].input) : document.body.removeChild(k[x].input))
            }
            ;
            this.w8 = function (x, n) {
                n && k[x].color === t || !n && k[x].color === l || (k[x].color = n ? t : l,
                    k[x].input.style.backgroundColor = k[x].color)
            }
        }

        function kh() {
            this.wB = this.wA = 0;
            var g, k, t, l;
            this.bp = function (x) {
                if (7 === aJ.pY()) {
                    g = x;
                    k = 0;
                    t = c4.gc + 4500;
                    l = jp.wG(g) ? 2 : 0;
                    aJ.setState(10);
                    cH.imageSmoothingEnabled = true;
                    aJ.hr();
                    x = bw.l9("loading");
                    var n = (q ? .396 : .25) * bq / x.width;
                    cH.setTransform(n, 0, 0, n, Math.floor((r - n * x.width) / 2), Math.floor((s - n * x.height) / 2));
                    cH.drawImage(x, 0, 0);
                    cH.setTransform(1, 0, 0, 1, 0, 0)
                }
            }
            ;
            this.eZ = function () {
                0 < l && c4.gc > t && (l--,
                    t += 4500,
                0 === c4.wI && 0 === c4.wJ && (0 === l && eD.jc < eD.wK && (eD.jc += eD.wL),
                    eD.rk(eD.jc, 5)))
            }
            ;
            this.wM = function () {
                10 === aJ.pY() && (k++,
                2 <= k && (jp.wN(g),
                    g = null))
            }
        }

        function ke() {
            function g(P, U) {
                var W = E[P].getContext("2d", {
                    alpha: true
                });
                W.clearRect(0, 0, 48, 48);
                var X = 48 / U.width
                    , V = 48 / U.height;
                X = V < X ? V : X;
                W.setTransform(X, 0, 0, X, Math.floor((48 - X * U.width) / 2), Math.floor((48 - X * U.height) / 2));
                W.drawImage(U, 0, 0);
                W.setTransform(1, 0, 0, 1, 0, 0)
            }

            function k(P, U, W, X) {
                X.beginPath();
                X.moveTo(P, P);
                X.lineTo(P + Math.cos(W) * U, P + Math.cos(W + 1.5 * Math.PI) * U);
                X.stroke()
            }

            function t() {
                if (7 === aJ.pY()) {
                    for (var P = -1, U = F.length - 1; 0 <= U; U--)
                        if (null === F[U].lq) {
                            P = U;
                            break
                        }
                    if (-1 !== P) {
                        U = l(F[P].x4, F[P].x5);
                        if (null !== U)
                            F[P].lq = U;
                        else {
                            U = aZ;
                            var W = aa
                                , X = hs
                                , V = pj
                                , ia = xB
                                , Y = xC
                                , pa = x0
                                , na = x1;
                            xD(F[P].x4, F[P].x5);
                            xE.xF();
                            var S = document.createElement("canvas");
                            S.width = 128;
                            S.height = 128;
                            var O = S.getContext("2d", {
                                alpha: false
                            })
                                , T = 128 / aZ
                                , Z = 128 / aa;
                            Z > T && (T = Z);
                            O.imageSmoothingEnabled = true;
                            O.setTransform(T, 0, 0, T, (128 - T * aZ) / 2, (128 - T * aa) / 2);
                            O.drawImage(hs, 0, 0);
                            aZ = U;
                            aa = W;
                            hs = X;
                            pj = V;
                            xB = ia;
                            xC = Y;
                            x0 = pa;
                            x1 = na;
                            F[P].lq = S
                        }
                        c4.c5 = true
                    }
                }
            }

            function l(P, U) {
                for (var W = F.length - 1; 0 <= W; W--)
                    if (null !== F[W].lq && F[W].x4 === P && F[W].x5 === U)
                        return F[W].lq;
                return null
            }

            function x(P, U) {
                var W, X;
                if (0 === F.length)
                    return false;
                var V = 0;
                var ia = B;
                for (X = 0; X < y[1]; X++) {
                    var Y = A;
                    for (W = 0; W < y[0]; W++) {
                        if (P > Y && P < Y + n && U > ia && U < ia + n)
                            return ir.xH(F[V].x2),
                                N = F[V].x2 !== N ? F[V].x2 : -1,
                                c4.c5 = true;
                        V++;
                        if (V >= F.length)
                            return false;
                        Y += n + cA
                    }
                    ia += n + cA
                }
                return false
            }

            var n, z, y, A, B, C, E, F, G, N, I, D, K = ["Joined", "Skipped", "Multiplayer", "Singleplayer"],
                J = [0, 0, 0, 0], L, H, M, Q, R;
            this.bp = function () {
                R = 0;
                N = -1;
                aJ.setState(7);
                F = [];
                this.lv();
                var P;
                E = Array(11);
                for (P = E.length; 0 <= P; P--)
                    E[P] = document.createElement("canvas"),
                        E[P].width = 48,
                        E[P].height = 48;
                for (P = 0; 7 > P; P++) {
                    var U = P + 2
                        , W = E[U - 2].getContext("2d", {
                        alpha: true
                    })
                        , X = 1.5 * Math.PI;
                    W.lineWidth = 2;
                    W.strokeStyle = cK;
                    W.clearRect(0, 0, 48, 48);
                    for (var V = 0; V < U; V++) {
                        var ia = X + 2 * Math.PI / U;
                        var Y = X
                            , pa = ia
                            , na = W;
                        na.fillStyle = dW.ws[V + 1];
                        na.beginPath();
                        na.arc(24, 24, 23, Y, pa);
                        na.lineTo(24, 24);
                        na.fill();
                        0 !== V && k(24, 23, X, W);
                        X = ia
                    }
                    k(24, 23, 1.5 * Math.PI, W);
                    W.beginPath();
                    W.arc(24, 24, 23, 0, 2 * Math.PI);
                    W.stroke()
                }
                g(7, bw.bz(4));
                g(8, a5.l5[27]);
                g(9, a5.l5[46]);
                g(10, a5.l5[36]);
                c4.c5 = true
            }
            ;
            this.vn = function () {
                this.tl();
                eD.vZ(3240);
                je.bp();
                c4.c5 = true
            }
            ;
            this.tl = function () {
                F = [];
                E = []
            }
            ;
            this.lv = function () {
                var P, U;
                y = [0, 0];
                G = [0, 0, 0, 0];
                q ? (I = Math.floor(.8 * .4 * bq),
                    D = Math.floor(.56 * I),
                    G[0] = cA,
                    r < s ? (G[1] = D + 2 * cA,
                        G[2] = r - 3 * G[0],
                        G[3] = uS.cF() - 3 * cA - D,
                        H = Math.floor(.95 * D),
                        M = Math.floor((r - I - cA) / 2),
                        Q = Math.floor(cA + D / 2)) : (G[1] = cA,
                        G[2] = r - 3 * cA - I,
                        G[3] = uS.cF() - 2 * cA,
                        H = Math.floor(.8 * I),
                    G[3] - D < I && (H = Math.floor(.8 * (G[3] - D)),
                        H = mc(D, H)),
                        M = Math.floor(r - I / 2 - cA),
                        Q = Math.floor(cA + D + (G[3] - D) / 2),
                        Q = mc(Q, Math.floor(D + 2 * cA + H / 2)))) : (I = Math.floor(.2016 * bq),
                    D = Math.floor(.56 * I),
                    G[2] = Math.floor(.5 * r),
                    G[3] = Math.floor(.5 * s),
                    G[1] = Math.floor(.45 * (s - G[3])),
                    G[0] = Math.floor((r - G[2]) / 2),
                    H = Math.floor(.75 * D),
                    M = Math.floor(r / 2),
                    Q = Math.floor(G[1] + G[3] + (s - G[3] - G[1]) / 2));
                L = bt + Math.floor(.65 * D / 4) + bu;
                for (P = U = 1; P * U < F.length;)
                    G[2] / (P + 1) > G[3] / (U + 1) ? P++ : U++;
                var W = (G[2] - (P - 1) * cA) / P;
                var X = (G[3] - (U - 1) * cA) / U;
                n = W < X ? W : X;
                z = Math.floor(n);
                C = bt + Math.floor(.5 * n / 5) + bu;
                y[0] = P;
                y[1] = U;
                A = G[0] + Math.floor((G[2] - y[0] * n - (y[0] - 1) * cA) / 2);
                B = G[1] + Math.floor((G[3] - y[1] * n - (y[1] - 1) * cA) / 2)
            }
            ;
            this.uT = function (P, U) {
                var W, X = F.length;
                J = P;
                for (W = 0; W < U.length; W++) {
                    var V = l(U[W].x0, U[W].x1);
                    F.push({
                        x2: U[W].id,
                        jJ: U[W].jJ,
                        jK: U[W].x3,
                        x4: U[W].x0,
                        x5: U[W].x1,
                        joined: U[W].x6,
                        nd: U[W].vd,
                        x7: U[W].x7,
                        lq: V
                    })
                }
                for (W = X - 1; 0 <= W; W--)
                    F.shift();
                if (-1 !== N)
                    for (V = N,
                             N = -1,
                             W = F.length - 1; 0 <= W; W--)
                        if (F[W].x2 === V) {
                            N = V;
                            break
                        }
                if (F.length > R || F.length < R)
                    R = F.length,
                        this.lv();
                this.x8();
                c4.c5 = true
            }
            ;
            this.x8 = function () {
                for (var P = F.length - 1; 0 <= P; P--)
                    null === F[P].lq && setTimeout(t, 0)
            }
            ;
            this.c7 = function (P, U) {
                return 4 * ((P - M) * (P - M) + (U - Q) * (U - Q)) <= H * H ? (this.vn(),
                    jh.lm(P, U, false),
                    true) : x(P, U)
            }
            ;
            this.cG = function () {
                var P = 0
                    , U = B;
                cH.imageSmoothingEnabled = true;
                cH.lineWidth = 3;
                var W = Math.floor(.5 * H);
                cH.fillStyle = oE;
                cH.beginPath();
                cH.arc(M, Q, W, 0, 2 * Math.PI);
                cH.fill();
                cH.strokeStyle = cK;
                cH.beginPath();
                cH.arc(M, Q, W, 0, 2 * Math.PI);
                cH.stroke();
                W = bw.bz(0).height;
                var X = .6 * H / W;
                cH.setTransform(X, 0, 0, X, Math.floor(M - .56 * X * bw.bz(0).width), Math.floor(Q - .5 * X * W));
                cH.drawImage(bw.bz(0), 0, 0);
                cH.setTransform(1, 0, 0, 1, 0, 0);
                cH.fillStyle = oE;
                cH.fillRect(r - I - cA, cA, I, D);
                0 <= N ? (cH.fillStyle = oM,
                    cH.fillRect(r - I - cA, cA, I, Math.floor(.25 * D))) : (cH.fillStyle = oh,
                    cH.fillRect(r - I - cA, cA + Math.floor(.25 * D), I, Math.floor(.25 * D)));
                cH.strokeStyle = cK;
                cH.strokeRect(r - I - cA, cA, I, D);
                cH.fillStyle = cK;
                cH.font = L;
                cH.textBaseline = cI;
                W = Math.floor(.04 * I);
                X = Math.floor(.08 * D);
                for (var V = 3; 0 <= V; V--) {
                    var ia = Math.floor(cA + (V + 1) * (D + 2 * X) / 5 - X);
                    cH.textAlign = mh;
                    cH.fillText(K[V], r - I - cA + W, ia);
                    cH.textAlign = oj;
                    cH.fillText(eP.gJ(J[V]), r - cA - W, ia)
                }
                if (0 !== F.length)
                    for (X = 0; X < y[1]; X++) {
                        ia = A;
                        for (W = 0; W < y[0]; W++) {
                            V = P;
                            var Y = Math.floor(ia)
                                , pa = Math.floor(U);
                            if (null === F[V].lq)
                                cH.fillStyle = oE,
                                    cH.fillRect(Y, pa, z, z);
                            else {
                                var na = z / 128;
                                cH.setTransform(na, 0, 0, na, Y, pa);
                                cH.drawImage(F[V].lq, 0, 0);
                                cH.setTransform(1, 0, 0, 1, 0, 0)
                            }
                            if (N === F[V].x2) {
                                na = Y;
                                var S = pa
                                    , O = Math.floor(.2 * z)
                                    , T = Math.floor(.3 * O);
                                cH.fillStyle = oO;
                                cH.fillRect(na + z - O, S, O, O);
                                cH.fillStyle = gH;
                                cH.fillRect(na + z - O, S, 2, O);
                                cH.fillRect(na + z - O, S + O - 2, O, 2);
                                fq.m9(na + z - O + T, S + T, O - 2 * T);
                                cH.setTransform(1, 0, 0, 1, 0, 0);
                                cH.lineWidth = 3;
                                cH.fillStyle = oO
                            } else
                                cH.fillStyle = oD;
                            S = Math.floor(n / 4);
                            cH.fillRect(Y, Math.floor(pa + .8 * n), z, Math.floor(n / 5));
                            cH.fillRect(Y, pa, S, S);
                            cH.fillStyle = gH;
                            cH.fillRect(Y, Math.floor(pa + .8 * n), z, 2);
                            cH.fillRect(Y + S - 2, pa, 2, S);
                            cH.fillRect(Y, pa + S - 2, S, 2);
                            cH.font = C;
                            cH.textBaseline = cI;
                            cH.textAlign = mh;
                            cH.fillStyle = ob;
                            cH.fillText(F[V].joined.toString(), Math.floor(Y + .07 * n), Math.floor(pa + .9 * n));
                            256 >= F[V].x7 && (cH.textAlign = cJ,
                                cH.fillStyle = oK,
                                cH.fillText(F[V].x7.toString(), Math.floor(Y + .5 * n), Math.floor(pa + .9 * n)));
                            cH.textAlign = oj;
                            cH.fillStyle = oW;
                            cH.fillText(F[V].nd.toString(), Math.floor(Y + .93 * n), Math.floor(pa + .9 * n));
                            cH.strokeStyle = oc;
                            cH.strokeRect(Y, pa, z, z);
                            O = Math.floor(.16 * n);
                            na = O / 48;
                            cH.setTransform(na, 0, 0, na, Math.floor(Y + (S - O) / 2), Math.floor(pa + (S - O) / 2));
                            E.length > F[V].jJ && cH.drawImage(E[F[V].jJ], 0, 0);
                            cH.setTransform(1, 0, 0, 1, 0, 0);
                            F[V].jK && (V = bw.bz(4),
                                na = .5 * n / V.width,
                                cH.setTransform(na, 0, 0, na, Math.floor(Y + (n - na * V.width) / 2), Math.floor(pa + (n - na * V.height) / 2)),
                                cH.globalAlpha = .6,
                                cH.drawImage(V, 0, 0),
                                cH.globalAlpha = 1,
                                cH.setTransform(1, 0, 0, 1, 0, 0));
                            P++;
                            if (P >= F.length)
                                return;
                            ia += n + cA
                        }
                        U += n + cA
                    }
            }
        }

        function kF() {
            this.bp = function (g, k) {
                aJ.setState(5);
                jh.lm(g, k, false);
                c4.c5 = true
            }
            ;
            this.cG = function () {
                jh.uz()
            }
            ;
            this.c7 = function (g, k) {
                var t = jh.pP(g, k, 5, 2);
                5 === t ? aC() : 6 === t && (je.bp(),
                    jh.lm(g, k, false),
                    c4.c5 = true)
            }
        }

        function kG() {
            function g(t, l, x, n, z, y, A, B, C) {
                cH.fillStyle = z;
                cH.fillRect(t, l, x, n);
                0 <= B && (cH.fillStyle = "rgba(" + 22 * B + "," + (110 - 22 * B) + ",0,0.75)",
                    cH.fillRect(t, l, (1 + B) * x / 6, n));
                0 < C && (cH.fillStyle = "rgba(255,255,255,0.3)",
                    cH.fillRect(t, l, C * x / g_unclaimedLandIndex, n));
                cH.strokeStyle = cK;
                cH.strokeRect(t, l, x, n);
                0 !== y && (cH.fillStyle = cK,
                    cH.font = bt + Math.floor(y * n) + bu,
                    cH.fillText(A, Math.floor(t + x / 2), Math.floor(l + .52 * n)))
            }

            var k = [0, 0, 0, 0];
            this.dz = [{
                bD: 0,
                mt: 512
            }];
            this.bp = function () {
                js.lC = false;
                aJ.setState(2);
                this.lv();
                c4.c5 = true
            }
            ;
            this.tl = function () {
            }
            ;
            this.lv = function () {
                k[2] = Math.floor((q ? .49 : .4) * bq);
                k[1] = Math.floor((s - k[2] / 6 - this.dz.length * (cA + k[2] / 10)) / 2);
                k[0] = Math.floor((r - k[2]) / 2);
                js.lC && js.lv()
            }
            ;
            this.xQ = function (t) {
                var l;
                if (6 < t)
                    this.dz = [{
                        bD: 0,
                        mt: 512
                    }];
                else {
                    this.dz = [];
                    for (l = 0; l < t + 2; l++)
                        this.dz.push({
                            bD: 0,
                            mt: 0
                        });
                    this.xR()
                }
            }
            ;
            this.vo = function () {
                c4.c5 = true;
                js.lC ? js.lC = false : (this.tl(),
                    je.bp())
            }
            ;
            this.jM = function () {
                var t;
                if (dr.ds)
                    return dr.dt.xS;
                var l = 0;
                for (t = this.dz.length - 1; 0 <= t; t--)
                    l += this.dz[t].mt;
                return l
            }
            ;
            this.lm = function (t, l) {
                return js.lC && js.lm(t, l) ? true : -1 === this.pP(t, l) ? false : true
            }
            ;
            this.xT = function () {
                eD.jc = 0;
                eD.rk(0, 3) && ir.xU(0);
                aJ.vj();
                if (dr.ds)
                    dr.xV();
                else {
                    var t = this.dz.length - 2;
                    t = 0 > t ? 7 : t;
                    jG(Math.floor(16384 * Math.random()), 0, [{
                        name: je.xW(),
                        xX: cC.mC[2].ih.vA(),
                        xY: 0
                    }], t, false)
                }
            }
            ;
            this.click = function (t, l) {
                return false
            }
            ;
            this.c7 = function (t, l) {
                if (cD.lC || cC.mC[1].ih.lC || cC.mC[2].ih.lC)
                    return false;
                if (js.lC && !dr.ds)
                    return js.c7(t, l);
                var x = this.pP(t, l);
                if (-1 === x)
                    return false;
                if (0 === x)
                    return this.vo(),
                        true;
                if (1 === x)
                    return dr.ds ? (dr.pU(),
                        c4.c5 = true) : js.show(),
                        true;
                if (2 === x)
                    return this.tl(),
                        this.xT(),
                        true;
                if (dr.ds)
                    return false;
                if (27 === x)
                    return 8 > this.dz.length && (this.dz.push({
                        bD: 0,
                        mt: g_unclaimedLandIndex
                    }),
                        this.xR(),
                        this.lv(),
                        c4.c5 = true),
                        true;
                var n = Math.floor((x - 3) / 3);
                if (0 === x % 3)
                    return 1 < this.dz.length && (this.dz.splice(n, 1),
                        this.lv(),
                        c4.c5 = true),
                        true;
                var z = (k[2] - k[2] / 10 - 2 * cA) / 2;
                if (1 === x % 3) {
                    if (0 === n && 1 === this.dz[n].mt)
                        return true;
                    t < k[0] + k[2] - 1.5 * z - cA ? this.dz[n].bD-- : this.dz[n].bD++;
                    0 > this.dz[n].bD ? this.dz[n].bD = 5 : 5 < this.dz[n].bD && (this.dz[n].bD = 0);
                    return c4.c5 = true
                }
                c4.c5 = true;
                var y = (t - (k[0] + k[2] - z)) / z - .5;
                y = Math.floor((0 > y ? -(y * y) : y * y) * g_unclaimedLandIndex);
                y = 0 === y ? 1 : y;
                z = g_unclaimedLandIndex;
                for (x = this.dz.length - 1; 0 <= x; x--)
                    n !== x && (z -= this.dz[x].mt);
                if (0 > y) {
                    if (1 === this.dz[n].mt)
                        return this.dz[n].mt = z,
                            true
                } else if (this.dz[n].mt === z)
                    return this.dz[n].mt = 1,
                        true;
                this.dz[n].mt += y;
                1 > this.dz[n].mt ? this.dz[n].mt = 1 : this.dz[n].mt > z && (this.dz[n].mt = z);
                return true
            }
            ;
            this.xR = function () {
                for (var t = Math.floor(g_unclaimedLandIndex / this.dz.length), l = g_unclaimedLandIndex % this.dz.length, x = this.dz.length - 1; 0 <= x; x--)
                    this.dz[x].mt = t;
                this.dz[0].mt += l
            }
            ;
            this.pP = function (t, l) {
                var x, n = (k[2] - 2 * cA) / 3, z = k[2] / 6;
                if (t < k[0] || l < k[1] || t >= k[0] + k[2])
                    return -1;
                if (l < k[1] + z)
                    return t < k[0] + n ? 0 : t < k[0] + n + cA ? -1 : t < k[0] + 2 * n + cA ? 1 : t < k[0] + 2 * n + 2 * cA ? -1 : 2;
                var y = k[2] / 10;
                n = (k[2] - y - 2 * cA) / 2;
                for (x = 0; x < this.dz.length; x++) {
                    var A = k[1] + z + cA + x * (y + cA);
                    if (l < A)
                        return -1;
                    if (!(l > A + y))
                        return t < k[0] + y ? 3 + 3 * x : t < k[0] + y + cA ? -1 : t < k[0] + k[2] - n - cA ? 4 + 3 * x : t < k[0] + k[2] - n ? -1 : 5 + 3 * x
                }
                return 8 > this.dz.length ? (A = k[1] + z + cA + this.dz.length * (y + cA),
                    l < A || l > A + y || t > k[0] + y ? -1 : 27) : -1
            }
            ;
            this.cG = function () {
                var t;
                cH.lineWidth = 2;
                cH.textAlign = cJ;
                cH.textBaseline = cI;
                var l = (k[2] - 2 * cA) / 3
                    , x = k[2] / 6;
                g(k[0], k[1], l, x, "rgba(128,0,0,0.75)", .4, "Back", -1, -1);
                g(k[0] + l + cA, k[1], l, x, "rgba(" + (dr.ds ? 128 : 0) + ",128,128,0.75)", .4, dr.ds ? "Reset" : "Maps", -1, -1);
                g(k[0] + k[2] - l, k[1], l, x, "rgba(0,128,0,0.75)", .4, "Start", -1, -1);
                if (!dr.ds) {
                    var n = k[2] / 10;
                    l = (k[2] - n - 2 * cA) / 2;
                    for (t = 0; t < this.dz.length; t++) {
                        var z = k[1] + x + cA + t * (n + cA);
                        g(k[0], z, n, n, "rgba(0,128,0,0.75)", 0, null, -1);
                        g(k[0] + n + cA, z, l, n, hy, .4, this.xa(t), this.dz[t].bD, -1);
                        g(k[0] + k[2] - l, z, l, n, hy, .4, this.xb(t), -1, this.dz[t].mt)
                    }
                    if (8 > this.dz.length) {
                        z = k[1] + x + cA + this.dz.length * (n + cA);
                        g(k[0], z, n, n, "rgba(128,128,20,0.75)", 0, null, -1, -1);
                        t = k[0];
                        cH.fillStyle = cK;
                        l = mc(2, Math.floor(.5 * n));
                        l -= l % 2;
                        x = mc(2, Math.floor(.1 * n));
                        x -= x % 2;
                        n = Math.floor((n - l) / 2);
                        var y = Math.floor(n + (l - x) / 2);
                        cH.fillRect(t + n, z + y, l, x);
                        cH.fillRect(t + y, z + n, x, l)
                    }
                    js.lC && js.cG()
                }
            }
            ;
            this.xa = function (t) {
                return 0 === t && 1 === this.dz[t].mt ? "You" : dG.dl[this.dz[t].bD]
            }
            ;
            this.xb = function (t) {
                return 1 === this.dz[t].mt ? "1 Player" : this.dz[t].mt + " Players"
            }
        }

        function p3() {
            this.c1 = this.b3 = 0;
            this.mC = null;
            this.bp = function () {
                this.mC = [];
                this.mC.push({
                    fJ: 0,
                    fK: 0,
                    m1: q,
                    ih: null
                });
                this.mC.push({
                    fJ: 0,
                    fK: 0,
                    m1: false,
                    ih: new vv
                });
                this.mC.push({
                    fJ: 0,
                    fK: 0,
                    m1: false,
                    ih: new v2
                });
                this.mC[2].ih.v7();
                this.b3 = this.mC.length;
                this.c1 = 0
            }
            ;
            this.rs = function () {
                this.c1 = Math.floor((q ? .063 : .04) * bq);
                this.c1 += 4 - this.c1 % 4;
                this.mC[0].fJ = cA;
                this.mC[0].fK = cB - this.c1 - cA;
                for (var g = 1; g < this.b3; g++)
                    this.mC[g].fJ = this.mC[g - 1].fJ + Math.floor(q ? 1.5 * cA : 3.7 * cA) + this.c1,
                        this.mC[g].fK = this.mC[0].fK
            }
            ;
            this.pP = function (g, k) {
                if (!bw.bx())
                    return -1;
                for (var t = this.b3 - 1; 0 <= t; t--)
                    if (g >= this.mC[t].fJ && k >= this.mC[t].fK && g < this.mC[t].fJ + this.c1 && k < this.mC[t].fK + this.c1)
                        return t;
                return -1
            }
            ;
            this.xe = function () {
                for (var g = 2; 1 <= g; g--)
                    if (this.mC[g].ih.lC)
                        return true;
                return false
            }
            ;
            this.ul = function () {
                return this.mC[1].ih.lC ? (this.mC[1].ih.c7(-5E3, -5E3, 0),
                    true) : this.mC[2].ih.lC ? (this.mC[2].ih.c7(-5E3, -5E3),
                    true) : false
            }
            ;
            this.c7 = function (g, k, t) {
                if (t) {
                    if (this.mC[1].ih.lC)
                        return this.mC[1].ih.c7(g, k, 0),
                            true;
                    if (this.mC[2].ih.lC)
                        return this.mC[2].ih.c7(g, k),
                            true
                }
                g = this.pP(g, k);
                if (t) {
                    if (0 === g)
                        return this.mC[g].m1 = !this.mC[g].m1,
                            q = this.mC[g].m1,
                            jq.xf(),
                            a1(this.mC[0].m1, false),
                            true;
                    if (1 <= g && 3 > g)
                        return this.mC[g].ih.bp(),
                            je.tl(),
                            c4.c5 = true
                }
                return false
            }
            ;
            this.lm = function (g, k) {
                return this.mC[1].ih.lC ? (this.mC[1].ih.lm(g, k),
                    true) : this.mC[2].ih.lC ? (this.mC[2].ih.lm(g),
                    true) : false
            }
            ;
            this.vC = function () {
                for (var g = 2; 1 <= g; g--)
                    if (this.mC[g].ih.lC)
                        return this.mC[g].ih.vC(),
                            true;
                return false
            }
            ;
            this.cG = function () {
                if (bw.bx()) {
                    cH.imageSmoothingEnabled = true;
                    for (var g = this.b3 - 1; 0 <= g; g--)
                        cH.fillStyle = this.mC[g].m1 ? mZ : hy,
                            cH.fillRect(this.mC[g].fJ, this.mC[g].fK, this.c1, this.c1),
                            0 === g ? this.xg(g, bw.bz(15)) : 1 === g ? this.xh() : 2 === g && this.xi(),
                            cH.setTransform(1, 0, 0, 1, 0, 0),
                            cH.lineWidth = ow,
                            cH.strokeStyle = cK,
                            cH.strokeRect(this.mC[g].fJ, this.mC[g].fK, this.c1, this.c1);
                    cH.imageSmoothingEnabled = false
                }
            }
            ;
            this.xg = function (g, k) {
                var t = .08 * this.c1
                    , l = (this.c1 - 2 * t) / k.width;
                cH.setTransform(l, 0, 0, l, this.mC[g].fJ + t, this.mC[g].fK + (this.c1 - l * k.height) / 2);
                cH.drawImage(k, 0, 0)
            }
            ;
            this.xh = function () {
                var g = .06 * this.c1
                    , k = (this.c1 - 2 * g) / a5.c1;
                cH.setTransform(k, 0, 0, k, this.mC[1].fJ + g, this.mC[1].fK + g);
                cH.drawImage(a5.l5[4], 0, 0)
            }
            ;
            this.xi = function () {
                cH.setTransform(1, 0, 0, 1, this.mC[2].fJ, this.mC[2].fK);
                for (var g = this.c1 / 4, k = 3; 0 <= k; k--)
                    for (var t = 3; 0 <= t; t--)
                        cH.fillStyle = "rgb(" + Math.floor(367 * (k + 1) * (t + 1) % 256) + "," + Math.floor(687 * (k + 1) * (t + 1) % 256) + "," + Math.floor(651 * (k + 1) * (t + 1) % 256) + ")",
                            cH.fillRect(k * g, t * g, g, g)
            }
            ;
            this.vs = function () {
                for (var g = 2; 1 <= g; g--)
                    if (this.mC[g].ih.lC) {
                        this.mC[g].ih.cG();
                        break
                    }
            }
        }

        function kH() {
            function g() {
                if (0 !== x.indexOf("vote "))
                    return false;
                var n = x.split(" ");
                if (2 !== n.length)
                    return false;
                je.xj = n[1];
                k();
                eD.rk(0, 7) && ir.xu(0);
                jj.vX(3252);
                return true
            }

            function k() {
                x = generateUsername();
                jk.bz(0).input.value = x;
                jk.w8(0, true)
            }

            function t() {
                if (0 !== x.indexOf("account "))
                    return false;
                var n = x.split(" ");
                if (2 !== n.length)
                    return k(),
                        jj.vX(3266),
                        true;
                var z = Math.floor(Math.pow(2, 48));
                n = parseInt(m.n(n[1]));
                if (0 >= n || n >= z)
                    return k(),
                        jj.vX(3266),
                        true;
                if (o(n))
                    return k(),
                        jj.vX(3231),
                        true;
                k();
                5 <= d ? jj.vX(3232) : (jj.vX(3265),
                    vh.lC = true,
                    vh.bs = -1);
                return true
            }

            function l() {
                if (void 0 !== x && m.iN(x))
                    return jk.w8(0, true),
                        true;
                jk.w8(0, false);
                return false
            }

            var x;
            this.xj = "";
            this.xk = -7E3;
            this.bp = function () {
                aJ.setState(0);
                jh.rs();
                jk.cE(0, true);
                jk.rs(0);
                jf.bp();
                cC.rs();
                void 0 === x && (x = generateUsername(),
                    jk.bz(0).input.value = x,
                    l())
            }
            ;
            this.tl = function () {
                jk.cE(0, false)
            }
            ;
            this.xm = function (n) {
                return 0 === n ? jh.c1 : 1 === n ? Math.floor(.3 * jh.cw) : 2 === n ? jk.bz(0).input.style.font : x
            }
            ;
            this.w7 = function () {
                x = jk.bz(0).input.value.trim();
                l();
                if ("password" === x || "account" === x) {
                    var n = m.z(generatePassword().toString());
                    x = "account " + n;
                    jk.bz(0).input.value = x
                }
            }
            ;
            this.c7 = function (n, z) {
                c4.xn();
                1 === jh.pP(n, z, 1, 1) ? t() || g() || (a9(10),
                    l() ? (this.tl(),
                        w(x),
                        dy.bp()) : jj.vX(4214)) : 0 === jh.pP(n, z, 0, 1) && this.vm()
            }
            ;
            this.vm = function () {
                t() || g() || (a9(10),
                    void 0 !== x && m.iN(x) && 40 === x.charCodeAt(0) && 41 === x.charCodeAt(2) ? ji.vP((Math.abs(x.charCodeAt(1)) + 5) % eD.vR) : ji.vP(jt.xs - 1),
                    l() ? bw.bx() ? (this.tl(),
                        w(x),
                        dr.pU(),
                        ji.bp()) : jj.vX(3228) : jj.vX(4214))
            }
            ;
            this.xw = function () {
                return !cC.xe() && !cD.lC && !nU.lC
            }
            ;
            this.cG = function () {
                if (this.xw()) {
                    cH.imageSmoothingEnabled = true;
                    var n = bw.l9("territorial.io")
                        , z = 1.1 * jh.c1 / n.width;
                    cH.setTransform(z, 0, 0, z, Math.floor((gE - z * n.width) / 2), jh.fK - z * n.height - .72 * jh.cw);
                    cH.drawImage(n, 0, 0);
                    cH.setTransform(1, 0, 0, 1, 0, 0);
                    jh.uw()
                }
            }
            ;
            this.xW = function () {
                return x
            }
        }

        function kI() {
            function g(n, z, y, A) {
                l[n] = z;
                t[n] = new Image;
                t[n].onload = function () {
                    if (0 < y) {
                        var B, C, E = document.createElement("canvas"), F = t[n].width, G = t[n].height;
                        E.width = F;
                        E.height = G;
                        var N = E.getContext("2d", {
                            alpha: true
                        });
                        N.drawImage(t[n], 0, 0);
                        var I = N.getImageData(0, 0, F, G)
                            , D = I.data;
                        if (3 > y) {
                            var K = 2 === y ? 160 : 600;
                            for (B = F - 1; 0 <= B; B--)
                                for (C = G - 1; 0 <= C; C--) {
                                    var J = 4 * (B + C * F);
                                    D[J] + D[J + 1] + D[J + 2] < K && (D[J + 3] = Math.floor(255 * (D[J] + D[J + 1] + D[J + 2]) / K))
                                }
                        } else if (3 === y)
                            for (B = F - 1; 0 <= B; B--)
                                for (C = G - 1; 0 <= C; C--)
                                    J = 4 * (B + C * F),
                                    0 === D[J] && 200 < D[J + 1] && 0 === D[J + 2] && (D[J + 3] = 0);
                        else if (4 === y)
                            for (B = F - 1; 0 <= B; B--)
                                for (C = G - 1; 0 <= C; C--)
                                    J = 4 * (B + C * F),
                                    D[J + 1] > D[J] + 20 && D[J + 1] > D[J + 2] + 20 && 40 > D[J] + D[2] && (D[J + 3] = 255 - D[J + 1],
                                        D[J] = D[J + 1] = D[J + 2] = D[J]);
                        else if (5 === y)
                            for (B = F - 1; 0 <= B; B--)
                                for (C = G - 1; 0 <= C; C--)
                                    J = 4 * (B + C * F),
                                        200 < D[J + 1] && D[J + 1] - 20 > D[J] && D[J + 1] - 20 > D[J + 2] ? 40 > D[J] + D[J + 2] ? D[J + 3] = 0 : (D[J + 3] = D[J],
                                            D[J] = 255,
                                            D[J + 1] = 255,
                                            D[J + 2] = 255) : 50 > D[J] && 50 > D[J + 1] && 50 > D[J + 2] && (50 > D[J] + D[J + 1] + D[J + 2] ? (D[J + 1] = D[J + 1],
                                            D[J + 3] = 180) : (D[J + 1] = D[J + 1],
                                            D[J + 3] = 180 + Math.floor(75 * (D[J] + D[J + 1] + D[J + 2] - 50) / 100)));
                        else if (6 === y)
                            for (B = F - 1; 0 <= B; B--)
                                for (C = G - 1; 0 <= C; C--)
                                    J = 4 * (B + C * F),
                                        D[J + 3] = Math.floor(255 * (D[J] + D[J + 1] + D[J + 2]) / 765),
                                        D[J] = D[J + 1] = D[J + 2] = 255;
                        else if (7 === y)
                            for (B = F - 1; 0 <= B; B--)
                                for (C = G - 1; 0 <= C; C--)
                                    J = 4 * (B + C * F),
                                    D[J + 1] > D[J + 2] + 10 && (D[J + 3] = D[J],
                                        D[J + 1] = D[J + 2]);
                        N.putImageData(I, 0, 0);
                        t[n] = E
                    }
                    k--;
                    bw.bx() && (uS.bv(),
                        hu.l1(),
                        a5.bp(),
                        vp.uo([t[8], t[16], t[7], t[9], t[10]], [!g_isIOSUser, 0 === d, true, true, true]),
                        c4.c5 = true,
                        t[7] = x,
                        t[8] = x,
                        t[9] = x,
                        t[10] = x)
                }
                ;
                t[n].src = A
            }

            var k, t, l, x;
            this.bp = function () {
                if (void 0 === t) {
                    k = 20;
                    t = Array(k);
                    l = Array(k);
                    x = document.createElement("canvas");
                    x.width = 1;
                    x.height = 1;
                    for (var n = k - 1; 0 <= n; n--)
                        t[n] = x;
                    g(0, "exit", 6, "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFYAAABGBAMAAACkrn5fAAAAHlBMVEUAAAAiJCI4OjdcXltoameIioejpqPExsPY29j///9xarZIAAAAyUlEQVRIx+3WQQqCQBTG8TdOB5DUI+S6nRcoPIFhu1bBHGGO4Any3TYxAkWTv1DSYr71D4b5mOE9kWmszkeC/ZptT6Ocl+xj5qgtbVR1iZn9VE2wU2uO2Jryhm2h2OaKbdZgu/NKrXVK7f6q1JpaqTWFYpvrUtqhPTTYpst0aBOv2Drltlxh392iu0U1t5I4biX13PZvF7+zvOFWihXWlNy+aqZ/M3LcivXcds1xK9kKK3GYAVtYe+8CZ/c/7Br9blSNcgn75O/tE26TasUvH0ImAAAAAElFTkSuQmCC");
                    g(1, "victory", 6, "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUIAAABBBAMAAABWYLC1AAAAElBMVEUAAAA6PDlbXVqEhoO4urf///8hX3N2AAAEcklEQVRo3s2ZyZKcMAyGWdx3alLcSaW4k8lwZ9LjuwH3+79KlkljLb/czFJp+tYusD8k/ZItF/5y/a0F/dXb+KW472/cQCIbd8b4//+dDFu12/ByZ8Jkq0uHbRvuTFglwomOezx8j5/HxkrgTXEYqSxQyvcWCpVEhOG53p3QQTGfDiMUlppJxPXHEQrVxIT0092fEOaVw9Q8LpV5GysPJGUsWweojyCVCAgPIBQYc8nzwxEIvcYZjyQUmPv8kYQC68dhNoeWmOsD1Tyc/G5L+elvHLzs0tG3l7/PPn6KVJTfGxqpG0+9vXFW2w+ZGaoU0x3YrfwZP3dkrONijUK5ndBOLBAh2Wz8CwybMAESRPX4kDwZuGODMNkkjLoiwtLTyac8IXs2NpbJO2E0YVInhSH/c8LxolY1CVs+tFiEi2TqGW8lZqikTRlhLSYPGcIK2Ao/3gi/ilwiErQz4nIAJnx9xyJsga3w4xN3s6EbTVhowhJNbhCWyFaYcOVUvShpLZ+glfmREurZZ5MQ2wqOx/Q9k3YyeWNgJp0B4YgmNwh7aCv8eJp61U4mwT+xsJwA4Zarv37xm+ENQr89+/BCAwc93qXhRjmZpJeZ/Rs0YU1scU2MU1FkM/tKbT8kwt8+LB+8TtrT9dMCqHsrsyhYmdnfiYkEoaPBXRG/sPd8eunqZqfPmS1MHRGsfGLF5nX2Z4OwZWm6T15ihK3+/D7XBKFFcAErjzKVx3NTGIT8WZe+jRGSl0pdC7RUBqJW5D3P7O/iI9itDzx2Gla5oiAs6YwjKEBSKhOQMiDMnicGNmkUwc6V8sPTmHeyWAGpBELbgJWzx5c3Emqc0nIyya1Lqvax+BhhKfoE4/bdgHDR+6YOn6Zien0FK5fZpiInrITeRpWaL6qr5SwnUzGftJXTytUbCGszIzhjR8HcHKzTVNfqU9SHCGeRdAdjB1vgE4mWyuR1Q0QRLm8gDHsI9SErmg334HVD5EOE8w4vP2tnBrPxsICPeJ9SjDgESnkGpurMxkMEnUOVbT5Xy2cAEnN3U7rd8Kn5EGRscJOz5LqIunNoElbx+0eq3hev17IJRyNDwbpMGjwv3V5CsHOotRFtwhYWSmvn0BB9nfftbUq0txlV3rAJHTry6JVR+yG+f3/oVNDbhKiVYO+xWftkNQhPbLEW7bEr5WabsLClDM4p7Og/7zmnlPic4mVMZQj9xdzgkpUrmmTfctbr4VlvC/9hB2FvCoWtnM7A31SukJ1Qcl5+Audl2pMKOwidKRS2cm81WwHhmO85BOL8dQdhLZsxmNDhRSHhjb5NoF+xg7AwhcJX9nZ5lIRFvvcV6JZl2kHojZonVm7t4tMbG0ujfxio6+YdhD2MLbVyZZd9RVjhYo+6InEH4ck8q/KVezMt9daeA/exWc/h6oocoTP2Q/m7gKXIEZa5u4DAlp1uE5aWUHL3KbHIEvL7FFFsAouE+TYhlcqQIyR3UrG5QZi7kwoFCMT6k648n17v6n7uv9eL5/et9Asv0oTxJYkUxgAAAABJRU5ErkJggg==");
                    g(2, "defeat", 6, "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAABABAMAAADL6o5mAAAAHlBMVEUAAAAlJyU7PTtUVlNsbmuJi4ijpaLCxMHX2db///+Cup+UAAACo0lEQVRo3s3ZsW7bMBAAUNqyZWUzsnT1VECbhy7ZvHTwlqmAN6PoUG0CggzairpIyi1Nk1b629awTPGOpHm0DyE1WYJEPlHk3UkW6w5t7eMXEWczKHvN52QoXfcjHUoUi4PSbdOhtItkKBEekZPSLdOh7NKhtOlQ3nwRnaC8pENp06F0t+lQvsWi/O/4+uPXiJNljcbgvUb5G5ci3mmWeVyKqGLNW5MyGyh1ZMo41hIyKaJRh573u9JY5HDo1LMsjBOfBLq9/oC0Rg4L5UYdeuWi5HqDAZShyT9clAKGBzJlBgMLB0UN9CKMksOEyEFpYOFBpkxBpywU1AmZkrFThpv7HUYZwcjPQEGzj04RsOpnoJRwnGNScFo7h7JS16HqcmbJDIUzW0hrWstQVfQWlMkhXg655BzKkoVyOPn7EMDjUa4Os0SidsIoCxbK5tBWhV7FCZSRJ8RtT1M6mE2PYb/tE1EdQsnoFNCpizLudwqYDCiUqScdhlLyfunkeslCo+TMlKJvPkNvNASKr14JpayPV0mtZKFRfFVcKKU5Cir4rYRAWXtq21CKetY31uVxiiI9FX8gZap+F7BrP2WC3oMupRSqZprBeeunlCiNXkopVesTrWShUDJpLS7sgd9GwYG/cn1B8lFGVWctuc7PQcao1hTK9YdP0hjgCykTo1579lLM7RcHxSg9VZYMoWw5KFfOL58BlHbOQdmYDa+CKeC1/2yKpbqvgyk1B2VsafgplNI6b6smVnH7wJq7h5tO2bFQCvdNkintkoVibX8RRtkJFkoDUmCpRwkqpZ3zUMDsgDObStkKFspUj9tqEr+EUO4EDwUt8Ez/ykKj3AkmSonGWGopn0J5WAkuSoX+KG60ksVL+Xm/8kXuAAoO1RvtOkT5B9F51EylDpRdAAAAAElFTkSuQmCC");
                    g(3, "orders", 6, "data:image/png;base64,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");
                    g(4, "crown", 4, "data:image/png;base64,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");
                    g(5, "arena", 6, "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAABABAMAAAAHc7SNAAAAHlBMVEUAAAAjJSM7PTpUVlNqbWqHiYalp6S/wr7W2NX////RSpP4AAAD9klEQVRo3sWZvW+bQBiHiSGAt6hdki1Dh7Jl9eapkjdPrbxV6lCxeaw3okqpbqNuzMd/2yRw3PvJkQVYYhHgnvfer9/dBQG4WnftgwWuawBwXAIgBQB/lwDIAEC1BEAOAJolAAwAaB/mHz+C4y8RhQkCKOcHuEMAl/kBDgigWTgG2/Z+7vFDPH77fW6AmAAUSxbi1+t5boAdAajnBjgRgHbm8a/o+HNLgiEGfy0UhUMMfrU/zvMCbOy4HxeSBKehBJtlirGze9AlW1GqtM2fH0rp6HroCTWzNcnpTMmxa+f5HZcEORnnyQ9gewkFyJUcS1zsp1wSUID2tx/gKAMYJccy14MSLgkYQOeeUYCLCBBqOZY7LRhxScABzl6A3gcEINFyDIY+lwQcoPEDFBLAWhE8IQQ7MUnAAd58MA5wkQAOiuxOYBM+sGIsABy9AN0QBMAosnsNx7xjkkAAKP0ABQdYabL7IBpWjwD88wNUHCDWZLeBPditkm8wwMuvD1+Mez8VU/qE3IwBUkV2r5AKWTFJkIPymUwHKBhAV2VzJrtjPOmGRiEECKcDVAzg7X9NxmR3ih2TQ0dTgGg6wKsPMED3aspe2+F9iYyWKwjwmQWhDlAQgC66zjGyLmCZ4yakYQCffo6lYUUAKgLQmx4y2U2WQ3FLJMHUQkQBXt5HANb5hkiCa1L9Q1quppZiBlBgABv+OZEEvKCQvSoOUAeTAGoMYHq/bkjsZCpA9b52zADaLQSI7EMpkQS5CtC8T5AAgEt35xECJHbcmEgCowL0TXOqJAMAZfenhgBrO/MhLsaRPn4fhRSgvvED9H7dAYDDkGkGye5kBKCUAJ7uAz9An1qGlfiH4ZmjuDvVCntVGKDZBxMASDYMTa5xpbcUd6ekXQIyA80WAYiluAxu6Wdi2brRGOxLUw+w+obfHAeIvGWjkXenhL2qoRfsUHKMA0Af1NIejC288ShAgQBs0X6cAnBLAE6ydSOFeGiarhsaGBoegIgAKNYJM8Oi0AHshEqoAQCTa3Igg2T3aRSgxQAJZPcBpAggVay7Ek9JDBKmDmAF88AHEKGRMsW6WNyazJGfcjYZytqwRgDuK7XS8vboK6V4fnTGAHfiqwoAWuIYJcc24motRY7J+YQVUwBCcF9seWc0M3vx+KQhqtg4Li/A8PF6+OIRLYUqNDP38gHSFgMc3LLND5C6+2tspbHWXStnJEgSQIDUVTE/QOjuH8Tl5hbMdaWcn5TiyujVfX4A+2YNTEYbo0cgBp6VU8wLBrCFq54EkNr7K2Jlaq3LlR2DDLoGAWyGjjgBILT3Y7zadItsbc8khU0TASTD8xMAetfXrGr2sdf8B96/CJXN/8t1AAAAAElFTkSuQmCC");
                    g(6, "territorial.io", 6, "data:image/png;base64,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");
                    g(7, "youtube", 7, "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKEAAAAkCAMAAADW8qrvAAAANlBMVEX+AgDxYgDjhgD/eXnQpAC7vAD/oaMA/wClzwCH4QAx/zdf/1ty/3Sf/6D/3d2+/77d/93///85QMf8AAACr0lEQVRYw8WYWbaDIAxAsdVqAzzi/jf7GBIGZxxO89GiUbgGEkJEH+Q7DF3bti8rjRPhxTftLavpuuH77X8gwv10BLQrTfsEpHECG4TwEhUy0ItKW1Gh7Zp6AwF0KRP16GSLsApQCLKidt1igE3NZZFjKZWEXR2gaMguaSwPa54jbCoJ2Yjo+lWxpR8jhFpA0dH6jlzbIzhCdOIf8606wm814atPq8+whXDXY+WS+Y4QDtWETdYxHlmGFwm7akLRZwsRaLrVc4TtAsL7vUkIWbxRRBrCngu9xArSinvS/cuccKYhQpletjrXl3ZasRQNP+Pfe9+ZZZhd4EnW5KmYHNxwVFIZ4UwTCP1U0GqhC3+5QjiOn11CPxQGj9EJ0Io8QchM6fMIcZVw/PvsEfpOAxkUMQ9PEObvZh87KtGsEY6rU81bs46zg4SLoNiI1YRaYvGECl2aLcI1Rib0Q2gM42HuN7qeUFOEtV8HZMvwv2ikTzLyZ4PQj2WK5U62NCc8Jd2ImcghwiUzRkI/wWHcOD7nPCcI2ZhxC/BPXiJUaXWrOwjxDOHmLLMXxlhzD6EpCbc9ZdOXadF5172dEJUK83Il2jBXCmE3Eka5ErF5EPMbwgO7Xp5e30+IJBcyh2cJzQ3ZV0GoniM8n8HeTziN2DZH1PrCKaAghCd2PZ/enT9JlYQ9D8dHQFNPqMYskUuEp0+jE0IaVxakCJQt54SswYIQZci+MGVfwZaitihSuHJGSMF7MQstCWea4tpM+tKiHy4sw7zcgMWoNIdOOyWcaRIOnSAAs5T7dGVpRpi61dmOOCqYEs403nQqf1dyXwjnq3NZXU5yMmbsFmA0ZJdGhmeAS3RJA1ET6nyg7c14GtW+L8UVzuEo4zMVzgM1WKoSU5m44TJxw0VirhLDL6rE/6vBvdrCmmWnAAAAAElFTkSuQmCC");
                    g(8, "googleplay", 3, "data:image/png;base64,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");
                    g(9, "discord", 7, "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAyBAMAAADVdiTZAAAAG1BMVEUA/wBI/0lu/26P/5Cl/6O8/73R/9Hn/+j///+iRuwXAAABJUlEQVQ4y83TvW7CMBQF4BsKdKVIpYxIRaJjVLUSI6JDGSNlCCOq1JC1f+CxFIL92D22E+di/ABciZB8seRj35joVZ3VN1FXBSqhRYgPJEIsSQXrAnmjL2uP5Usm81z83Bec5WM+J9T4vS8Yfzz1yFQ0v2ackKsrxr2G7d4ZPjK1O214z3no+Jdz1/EKTy1NI/w6jmcIID6JJirGe8cYdIdGIcQOwx3j/gEpI6X+qoRkGqrnd6OXFR/NRAcdOWFc6hDPera0Xk/Fozo1ck4bHsSVpg0jYJSlervGW9zWSdQXhhXozlbGek1uY9/s2hRWect7ucnsf5ld7DfosX+kcsv+AdwtDfvHdW877x/u0raB6Oa0qG35rKZhbokg41sKclQEmTr/f+SUPtWxuyYAAAAASUVORK5CYII=");
                    g(10, "insta", 3, "data:image/png;base64,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");
                    g(11, "emojis", 4, "data:image/png;base64,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");
                    g(12, "flags", 3, "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAADhAAAABICAMAAACahq7PAAAAwFBMVEUAAABLBAEDIpUAL4YGL3nKAAMAM50AQRsAN6zQCCjcCQD+AAAQQHe2GAbrCx7NFh47PXHdEDqvIC8AUbTKIDPaIxxZS20DaUcNX6/tKTpWW1XKPkCZVSlFcE5fZqkNjEFlc4snkSDiWQoVljYqnmUGsdGlkqW7kXrZh4f7hjrOllKUoL1fsr1xrNyfp5vUoTT8lif0pwDBskQA/wDawCXPwHzkuLn/wQDuxa3/0ADM0tvM1sD+6ADz3d7o6OX///9Mo8dUAAAgAElEQVR42u2dDWOayPe29Umzbc2S5GerTyvUTe1WxjEFYQEVwvD9v9V/zoCKCgg4GtRzNyhvTRSYYS7OW+s/FAqFQqFQKBQKhULdpFp4CFAoFAqFQqFQKBQKgRCFQqFQKBQKhUKhUAiEKBQKhUKhUCgUCoVCIEShUCgUCoVCoVAoFAIhCoVCoVAoFAqFQqEQCFEoFAqFQqFQKBQKhUCIQqFQKBQKhUKhUCgEQhQKhUKhUCgUCoVCIRCiUCgUCoVC3c6IqpbwuKFQKARCFAqFQqEubxyPI3vU7oX0UEMtvJ5RKBQCIQ44sINGoVCod+2fIynC/hmBsBlA+CBFeD2jUAiE7wc8V6tfUtRqGlhe6+e5VoDH73Wb3wsfSF0WEOIN80Kv5ysDQjzvNwoGqNscPzfthtp6lKJW64sUtaR1rLKAsGkDl5kUyWup/2Qr70B8zVar1ZOi5g0Qn6SoeeD0/7KVd96/Z6t530tWv/pZihAIz9WvyroPypKsz1N8/DZ3zEPX896qj3WEQHho3HKXrWWO8vqNlipFrda3labirH+rJwTCc403ZI3DO1IkrR+Tdpz/kiIEQgTCKwNCWdfPtQLhHylCIDwAhI17YodAeJ7rh0nRyYFwhECIQIhA2BggRM+UawHC7+q79KuSgPB6By4IhGcBQmlCIEQgRCBEILx0IPwkRScGsNlsiUCIQIhA2BwgzLg4P6R0qbHHN2ghnFw0EN5LEQLhxQMhK3NY2f5x/v/ZyvsNuR09AiECIQIhAiECYQyEsvr5bPvg25uFQIhAeEVAqCEQIhDWAcLRIfgbWVWAUFWpqiIQyhMC4bFA6Dh1gHAwOIiEbDBAIEQgRCBEIEQgvDwgnM3Ws/O3t8k1AeEe+OUB4e4KBMJrAUKqSQLCqV9BCIQXD4STAzyoEjpSiVoGCFVCFoQuiE4IaR4QDofHAaGiKKbGX2BGETOFQPjivzw/j/3n5+fp9Pm574/hha/i6/vd0kIgPBYI7TcuuzIQGq1BZBQfUyMatAwEwvcBQmlqGBA2Tg0DwsY9aJMEhFer5gLhfJ66sVmPCIQygVD6A6AjgVDaB7oUINSJLCB8n5AZSUB4tToBEPY8Dm5kwifP691nw6CnepRalPL3NBRm9mPfFyNVe5zoj/ekR0njgFDXjwFCZWRqDrUdh3a7puOYtqNRpRgIgQXhZcyB8BmA8DkGwmcEwrMB4U/nTcj5WQ0IWavFjFYhEfLNsBcC4fsA4W8pah4Qyvpekf9FistE04CQ34hCPnnHHuemAeFXEiZdz/TDnqLIi9uPtz0sijVlkafyjfw38OuwLec47zW5Mocjo502Fwjf3nb8RnsIhPKA8E6KDgDhY7jW4wEg/DdbeVfyJFsHxi33ndVc5/79gJB4hqcHuu555PxAKOv+LgsIv0pR81wHpQOhpy4sy1rQuUtN01oQb58HPZXyMeVotByN+DtVvWIgVElP1e6pe98jj6PmAOHdnbAP0vmcDjfLFYFQ0RzNNk3a5RCo8CU+bzumWMg57wn/9eOXviBBDofAheMqDQyB8AggtN/WsisB4QBob8CMXCQ0DDYAZhwgECIQSgVCIwiCVwlAGEXTT1cIhCQkhE/q1QHh1wIkLALCFA7GA7IuAmEZIJzsuomO3paTawDCLPZ7KFx5uUC4+ZjvCoRtQMCO0lbabQWW4b2tdDrJprMCIfECnb8FVFW1YOEhEMoGwtHoMoDw258KQKh6M2tudToc9UajTmc2tyxCtnGQEA6DYm4ZxxLOJutdMvqxXm9CqUZVeIHXXq9UP2ZIUREQjsexx+hyOUwvVwJCzoOUmpqmrN1HOUVTvi7/vO9YBRP3UR+B8HxA+PNtSz/LAyGA3qDl+628QEIWb40GBkMgRCCUCYSB67oygJAxThbXB4RfQzV8ClVyaiCM7Q7nA8IN1GUgYT4QbuFgMiBT2mcBwoyjcyFAOIKx/fKNAyDXquDEiK/oIRAiENYBwi6YB++h4cVA2Gq1+ViRz3XPDoQLVV/AGwdCulCph0AoFwhHHIsuAwhZFSCks85oDpg3B+izJp2RuRMnqCY42LGWSVqZ0UTNB0KwmlGd/4tfbF3rVfZ0OGK8mhs5SB1HWAbHuj5OL1cBQiV2Ft2yBiqm49iOlmshfDGABMf92CrYh6X+GFYZ/ZewtBAI6wOh87YjpywQJg6jQH15BxRYEXxK2TYRIhAeD4SWdeMWQlsKEC5duEyH1waEnhqGfDotEIZEja/XLgnPBITbYLeDhHlAON39X3H7kuE2ehgICblYIEzfFUYbC+F8hkBYDgiNAQJh2lW03b5/6HRWRBjzYKcTrz83EGrwo7ocCF29bChhqzVdKR7yTDeqlFTmBoBwNLoIIBxOoz/lgZCYnPbmlupZI4uQGaDhfMdp1JuBAXE0s/jlCI6jYEj08oBwZOp/qG261KUm1fhEpy900gAg/Ku/XPaFp6j42SxXAULNMSGfjDANbtZ2TZs62bllVjGEsVVwbRpkAIQMYwjPAYQrb1HH5nIO+Y1uH+eVw2hREGEMjLtOowiExwPhcnnbQOi6tgQg5FgZP7n4cl1AGJIw5NMpYwhDkr5kC5FQHhDuw930EBBm/I9V++qeHgjDXi8sAYSy+h+5LqPzFQ6mE8vMMIawHBAazEAL4ZY6gILgLtpttR8e2q0uuI3Cms7ZYwiJRij1KJ80qhO9rMtobtPzK5WduAEgtKyLcBmdTvmpKw+E1JosZrMO7VijiTqbUWqZO0BIKKfB+WQ+55fjfD6aT0YdmucyOjFtW1N6HepyGZQ+9hSV86F5FBAGTAYQJpbB3OUcIFRS6pqm6UBqUWraKQBUqMP/dbPyjQqXUWEQjK2C47S1sDlASLxQuP6QqwPCJJmMo3+I+9kPulOYXGbrOGc4jDIPbAYq8Viq5gQTTqNb1IhAeDwQvr1dIhDOpUi4jMqxEK6v1GNCCRuYVCZUiXpSl1Fv96L1zgKEHwqQMAsIM/det6+j3UYPAiHp9cjFAiFEEIImtQHsfEDY6zULCH/4kSHDZfTl5WqAEMyCfFAMHMhhUEAhPJLpgLHw7EllNJ3ToGZqlAOhpiIQ3mhSGeYz/095l9HZxKTW0pqLaW5ROrJ2XUZVy5ot58kFOV/O5paa4zLKf5dti8Inugjpg6sS1piTI4CQUV0GEH4QP/nLWUCoUNMB2U4i2+Q4qFFnuXQ2YYR8nyWscRxqCgui0E4MYT+2CvbT1sI+Ka1TAmH6dk6uCwhj8+BST3e1+rLASJg+zvsOoyw1RlwjIeMtbi/TKALh0UA4e3ub3TIQGm7gHvrYr6WSyqwv6CECYXkgJPtXLTkPEOYj4T4Q5uy5aV/Huo0WAqFHWAjrQka8o4HQ998BCB9jIHxsOhCO+M9IvDUFCH+wiG2ZC+sCoetekctofDITEIzBMF5zf/4so+ZGCIQnAMKRdQlACL1qeSDsjEbz+RKAD0IELTAB7hck3OBggoQ5WUZHlHL8sx8fe7Mk3aiqPgIQTg4RYeZ5Z1xgIIxLg8cL9YCwYCA0LABCxXTWiplw6ZhgIYRlW1mlmYEF2M5fbHEA+JsdBxWCy+gUMotOVzGE05fkha9qRFIZdeXv43GFUaheDxCuzIPP233tc4GRMH2cjV2H0VBN9w3rA7d2GjUQCCUCISR7uGUgfA3cA0D4ahivxmt5IDwilLCBMYQkDPl0MiAkWZctORMQ5oHeLhDm2hLT7at7OiAMe19VWKd+3XYbrQWEX76U6X8Crn/5v/h99bKe/7fc9vV9cLQTQJjAV7OAEEhw8jjhP4eY8NBxzgPCEuONfR6MtgIIfU6EA6MGEJrm1QBh50EMisEm2I7BMF7q8A3nB0KNkyDVqcn/qQiEsoHQmk/qE+E5Ywh9Nq1Uh3DiLsE2KLS0aVYdQuEtKnYQczl1CO9VKMLAgZD09Efy+PideP97BCC0TZv2KgMhMwydGj5jC3DKM+jAMFg9IBwXVB7M9htdWQjtDRDGs/bSARMg/05LgXyKueQguHRiIEzJXgMhWAWnmxjC6cZa2AQgVFfhMitzYTkivAQgXJUefN7tbJ+d3OQyW8fZ33YYzXMhW2Ua9Su6jLJFyBAICzxGS/iMXgoQmk51C+GrW0h7r4YLXhhuUAEIo2j65VrKTjx5nAa9UwGhl33derntQlbsaFFk4A4QFkQbbrWvr+2TuYweXF0eCKefPk1LAmHAghyxoNz29X1wzmFwtB1C+LgcNQwIe7PHnvU4mz1avcdZrxlAyO92/s4Kw48G1YGwb1n9q8kyyseGGY1NrH4fIIyFQCgdCOdLToPz2fXVIeyo1FoZBUfWborRZP18bRQczTbzO0Covuhmj7o2WRBPDQjxyZhjBnXdnklftF51IBxoPufBUERpMUMb1APCD9RZmjn5Y/qc5+iHfCBU6I6J0AbfUMBePqspXZMv28vYOJjGQbObdhkF8+AzVKUXL30IH3x5gZcqWUb/kqLdG8/3eCzhpT1Iv18FEK5qTezz4IYI9ytQ7GQZHaQcRsP97iFMZRodVMwyykJd0zT9IBDKArlLA8IZnJ/Z+YBQ1vHJoDveYVBqVmJCEUPoGEYBD7oB2BANzoUlvxdLqOF9gVCRIgAw1ePTiYAwzBsRhKduX0W5Q6dpICxKPrMNhEe5jRYDobpaqx4LhOzTcPiJlQTCo7W+D77N+cCkN0/5jIJrglUeCJdSdOD4LBbRPHTdcA5zx/Tz0oAQvGEGe2v8Gi6j+mikX42FUFHuO/ttqMNHkqe2EP69rbGqEkJERXp45e/k7xLCshMlgXC2nM/567w2EMq6X8gah29Stljbcvf/qruzS5Ddb9CxFnKMs4m/YIuQqAbz+GVJXb679qKziv0PM4yBPmDM8I2WwcFwMChhIszkprv5Mjd9zHg5vytKKqNoUHl+K5BwRYYxBa45cLmhQYggTAMhEzGE41UMIVvHEFZJKnMaIPT2eJBD4hUA4c91rYlBVnc7WFeg+FlcmD5aO4Iydb97UNnOTqWBMGA61dJEWB8IGW8cVwiEItJz2SAgZGWc1rOA0JxTi/IfPlMJCG3DfC3gQcOIadMoCjVMfa+Fy+r7jcoDwo4UcSAEFCRPJypMT/JGBOSMQLiPhGkgLCpP8WG3fXVPBIRktZYcC4TDT77/aXhuT5kkuGXL7japEFJ4DiBc8FM8X7hg6XEX8ygKFw0AQt6XbEcQis5lUAMIzU7HvBYgVDqdbAshX39uIPQiYrosJF4UmDQMEQjlWghnnAlH1rLxQPgNyoX8qQKEo+1bbRYQ7tgLs4FwYbvQUwW26vlsOiaqZ/hT36PwC0PXdqsCITMGA52PdSGOi496NQ6ErBYQ9vV8n1G+qX+g7ITKmU+kjAHrIH9fAgXawlF0ueHApWNDDlJTVXazjIJB8HltFVwv8Zf3B8L4uW64f6NTLxsI7XV1KftF1NDZzWSW2qEYCFmuw+iW0yirCoSuy4kQZBwHhP4Qvt7QvzogjM/O4RvG9wOC56PfD+rg8eE0GIZhiQ4owz6oal81/qNWsBEetBAawevq978WJCNNvhd8bFcAofgC1UtQNBAIQ+/J855OYyEM84cE4Ynb14EdvIMJT7MHZKTu58kHQo//Tm+1ln+gVF6ZKkDox1XOPn2Kp00JtPPG0qeqTowmo0ZZCBdu5MZPk8w5n100wEIId600EA4M8VSS7buMHjwVVqdjHT5fGUCYfoad6nhSq88OhN1WN8sd8P6+C/llzgqEJApVjbKIhBHVVMJb63mBUFbd0Q9SJK/f2KSUubeWS6vpQJicNTaUCoReLCg2EX7NA0I3cBnjA137kZDxcPj3wg98gwOhDSMR2FjZQsiJUDOEaZAN6EC817IQJpUH/yq/bSuZELgo2XEcoRsDoLAMLpcbi6HwGjX3607wzmAcWwX7sVWwv7YW8lV9r7ROBITx6CaD/g5FEjYaCH+mStGvokYgGei0f/e8ayLcMRLmNlTWzRwestwL8YDLKAt0LRY7BginU2AUxqbTqwDC0doLISkQNl+vGNUCQsKikDcf9VggZGwRLrgOEWGWhZAmJ1qj8mIIXw3DXe0bGPn7Jd/LXohh5cZKOL14IORDnKeQkdMAIckHQnJ8+2LvAIS9wjKKVYEwVIkXqpwyw9XaMCI9NfRInGqrChCy/WEgO6ofI6TM98rP31Ity+g5XEbd+bqx89ni7yXrfloMhGzfP3TAh2yM/agKhAs+/hwt6gDhwQs6PH8dQlGMfl9K/nE+FRB6EYPKE1EYhZqqwvMaBEKZQDiHHJzLWcOBcPNo7Y9MIFzdjDpqh0/ZQMhcPuLgPMiBsEfGL8bfwdgdfw8JB0Lbjfj6oNp41RgYwIBUb2naQNcHgxZfcdgQIoubdk6gopimCBgUsYIikyjw4NJOeBCqbWTHjvb7zy/PWy9j/vLyAjNVTvwpgLCX4TCaAGEossReJBBurH+c9pgvnkD7PkfCIPD9laVwmdrJLgGEftUkE0VAyDimMk1rp0yE9YDQn7LYZZRN/auwEFpvObJqWQj50JDA+9FACDio83/hoiIQmhafqJA5n1tmhSyjhXUIjde1ubEo90zyvRbuInIdxvvodbGU6YUDYRSpwkR1EiBU84FQrdW+DLj7Jc8zRes38q6fA08GE1QlBx8g7jUVNazV3rMthEnsoLcBQi8dS1jJZXT6acpg4kpmjwHmEIAwPAzMmbc1y3prHBDythu6m57BDRcFNsJzAaG4pnesgVlVCfO/l5vIgebsrJYuHAjb3ZaSFUOotLvtMwNhCD7lKolYFMIbX0IglAeEI46CIgvnqNFAmD5n305hIYS6BF42EAYLDoSMcx+UnRj/PfYN3/VU75Hagb3gpBhU83RgBriMDlqtQUKDwkBosHNxU8ZJpJqtCVtgkkJmKeyCS+EtCiUIs4EQDII+hA8Kq+DL87O/sha+PxDGj1KzsC+MoAaFeoFAmDYPcta7myYl6e8+vPgwEkuQME2NKSNhbkOdbo0Ru32ubkEe+gMWQv45GFgIPV3XjwHCIYsAeH0/YsPrcBmdZPPgpJbL6P8SHgQ0PAoIWbjQTcsyaToxbCkg1My5ZWlad6zrrjs3tQoWwqAgOPDVeN0MEQ9bCHn/C6MJZ7HlbHzZQMg7KOKFX08BhGFRGElYo30ZopGv717s33wglBXrktFYSJ32ng2Eq9jBTVKZrb9RLYbwyyf/05e92Vr9mMdRkAOhd4gIc4BwBGHLTbMQsp2nSCZ7dwuhuHp3M8j4H6sAYeTO9sqbuZduIbxXOg/7QYRt5aGj3J8ZCCHi3VPDiL8RFR62HAuEw2kFXTsQzhJfUWvWZCD8tmU8KAuEi+1ni0UxhPdfwUI4yQTCOIQQgJD3qJphEPeF6V+/CiBknBQLgwizjg+YCA3IJDPQAA3FYh1uGh4Y+GRtzwRCzdGouTIQAhPG1SaWjgnxg46SA4Rr0+BLf8da+PLeLqPJ3TsjhJDlkWLTgdDZBgn3bivJ6NAPgsAYQjXc7f2cQ0A4TLuM9uMP38+zFxQDIe+iWbBwDU0b+MwwfOFCVgsI2RQcYcEAyvjsVQBhkk1mW8uaMYQkCuMZNQxD7wggDBcLCg8Eqb4IKwPhpKt1v/rG2DAqASF4W7zm0eBrsHEZ5UD4+9U9kFQmHk5sP5SrEErYQJdRNWTe02lcRmUDYcyDayAMgvcBwhpuo3lAGOY1yLAGEPp85Ofvzdbqx9QVEKr1LITLtwa6jLJFumtYsKiZQPixGhBGC3O7TZuLK3AZ7XTv94Hwvts5u8sojDIi4nks9PRQBhB+q1Z24upjCI/SeYDwz/Zzt5JAmOMfml6V1D4gvTBk/C0TCHVKGfg3gIVQJYbueS9/93tQh3BhC8cHGlbq5/0YCA0Bg0ayUCeGUNeLxzpZ2zPPu2I6pqkJBHSoQMKV1yh4k2o55UbGUdoqGFsLI7AWRi/vnlQmfoy6R4NefKbCy4sh/LmLEu5OP/tyNw0CNt0DwlUFityG+uV5jwcFEdYAQoO3ocClVGtrbSPyfebWBUJ/CikZ7u4gDUOxz+hBV7TSDyZOn1TGKukuehgIvSihQCIcaI6xEIKB0LJMvaqF0FjMJ5qmffXHZGzMF0YFC6Hr2tlACBXrDXf9q15d47ebU45QfK8FR8t4OAGuWfEXWAhr4fTT5QIhvxFxyvcuAAgFDwZGAoTMMN7JQljDbfQsQBgNN+lFh8WZRg89uCEcCD3+E5KwDhA+Ps6aBoQLd793yPcZPScQsiOBMIrMlHfayLyCGMJ2q91R2p220k6osN0Wix2+4fwWQsa6HuHNgXjCXIhAeGtAuD0k/CYPCNcxhJ2Ol5NlNNT+6KGIJORASJjvTnXDGPa+f6exZ7j2Z+xVchllgIFGixngLer7YmlQ3UI4pPM5LbARZm/PPu9dQYSmYy9pYiYENHS6mmPaWh4Q9qEIYcYLny4aCM9Sf6lCwygGwnSS0Sn4jVYGwi/rRBNk0466dYCQd84vPgsZM9qQNCmuZnByIPyfFJ0ly+ho+8yMeu8OhOFCjy2Ei6oWwrFujTSaAKGljyUA4atrO79/uysToQEGwrldCwi9p8/lhEBYFwgDFvwAt4R/jEAAIQuuAAi9/BbpvScQRiSEEbB4qweEj020EG4xodsUC2H041ggTLmNztzoCoDwofNw3364V+6VJLeMKED20L5/6JzdQhgJIPQQCBEIk65VHhCm7sR5QBjpLo2Tm9vEI1Pf9fXhy1RdEA6EizoWQsMQEBgNRABhBKZCViepzHC5LPQZzdyefd4Vk6OfqfA3RZAg2AqpAvlmtGyPUQBCv0CX7DLaSCDMcBlNlaN/XjuOMlbZZVTYA7fsg1zPdVxGeZPz+dVt+Atz4YchC2rHEFZxGb0gINxyG10eUXZCmssoCxcUYgj1qjGEmq7PvmoQQ8hlzHRdk+Ay6tpu8AqFCN25474afC+3EAjzXEY99fPnywXCS3AZ5exncBCMFRgBv3h+GD8M41/2I7hol1GS1yDrxBBKdBkFFoTg0si7HiBc7MYQLhoChMbRQBgtJnF7nhxK1nUhMYT3CpgI77vrzDLgQqp02nx0eO6kMikLIbqM3iYQTk9lISwDhDBKSYCQk854PNWHY18PPGrbkBi/cgwhWAXhVjoALgQ09PkaozoQjnV9XIRImdtzgJDzoOaALVDjMKjFdQkVDoPmMpsHAQhlnfimJZVpKBDuJZW5e0lAEGo/ro2E20BYJqkMbzV3fUL6d+l2dFcrqQwUwfD911fj1TDGUeDWBsIqSWUuCgjnm3MzPwIIpSWVgSyjkGS0cpZRy/Csidrt9vtj3nvNPWMmIanMqw1RhK+uy1+NgPMgh40c79KCpDIh+fz5goHwIpLKsHQTASthFInZf/kGdnYglJhUJvKe8u2D75hUJoIK3EQNw4Pf61KAUFS7sdIxhIsCN4WzAiE7HgjdglyGFwiESqvdeVA6UJAQbIR86j48dJSHTrulvAcQsrgolR+VB8J1Xpj4ucy0nhAIGxdDKDOpTAmX0WgBWUYht4ytesw3Qg/q0zOPxEAYuItqWUZ9yDJqDJhL4TGr6/oAhnWyjBZVIczdnnfeFUdkFAU0dBQBhGA0tE2q3F8iEB5TdqKpQLhddmJ59/ySpBl9eU45jk6dqmUnshtSvbITAWOvr4vFqwfZRgNWHwgrlJ24KCBM0/oxhemllZ1gTIzDqtchJNrc1LTu83O3q3XnGpFSdsIwfrvGb4gjBH9RsRhULDtRCQcbCYSXUHaCGcFGcVNPyqIGQQ4QXkbZCShFWOCR+n5lJyLmcSxl0dUAYbSbZtRsgMvox6ikifDQ+bJWDdq6CiBM/EYV4D8++LsHQlQ6hcf5dGUnAAJDLwrD0Icb2LgcEMoajyEQNqDsRHpQ+Oc0henNPCAUdQj5r0uA0PceCYFCtRwIheHQrQaEcDP1dWOx8H3+y/xFYLy8GOx83JQDhBrl/xxTobapmFCE0HZMExAxFwhlJfNoWmH65gLhlpFw8LKOINzYB59fqhemz2xHd/UK00MFX183qf7Kx+hnKkx/SUA4KhtCeLbC9PwQ8xsrY4ezWm2D3WS8ACDUOA5yzRdjTUZh+ldOiq984yv/ETO5BSryCtN7nz9fOBBeRGH6gEWsYj92YIdmFKaPHynk/4l3LUwfhmW+1yW5jC7CTc8QLhrgMvoxOUODI4EwmEA2GcgtMwmuAQg77XvxCilkFFGPHtLMgC9pu3PuwvQQREg8HUqweACHBIHwhoAwDhgc7lk0hlKAcLVNofQfqmWXnYjWQEg4BvLpcaR6ZNJLgDA4EAudMQIbMMiAwCArG1+kVB+wOllGZQLh/T1EDjompTaUmrZtm3IeNCFyOA8Iu1J0IiCMH3dnZI9RHy8YCNNGQhtIsB+bCF82uUbtLPNgFhDyq3DjM5rnpL3eqSQQRswNAhaEYbA2FNQEwsgX5YGGh4NrLwkI52kgnB8DhBwJeW/0/fvRQAgdEmMlrsP9LKMAhJraFUBoVCk74YD5L4cIYQIDoStMhcFrMRDG0d0smasSPNhYIHwKvSfPezoNEIYVPUYllnU5ERCSup8nFwj3AglTf6IKEPqxk9mnT/G08VY77XG+GCAE/1DTTPLKuKYJXqS1j88GRSpfhx/3fUYj9uPIpDJxNhnILVM9qUzqNHxPdTyp1ecGwo7SuVe47qHyoIggfFDa8ZpOtqHwtEDoER2Syuge1KBAILwlIPTjiME/bJsHp3+kACGJpf4QYz87GwiTQoSckQhkqoSGyamwZ9uHyxBm1yEE6wnHQTYwmM9nFgHzDx+f7MQxBTllKgLhvaJp1HRszdYUalKb06HZLTjvzQbCJM/ottPo96a4ytQHwpSRcJBmwecPd3dDzoODTPNgFhAardW9LyMm9xvb2aksEEIW+iDwAnfdlFhbyXMAAAzqSURBVOoCYRS7jB4+PpcEhKtsMsuDPqOt1k8pkncd7gKhGwOh0NytAoS24bzmV6Z/hW2xCdEIfh8qTB+lrIMVvUUlA+FMijgQAgqSJ/2fo5R33kk1A6FEUNkax0zXpwycVb0MIFxtYdOdAdB2O9F+1VMhEG4TYfrIVMwyChp+8v3iDKPx8YHMsnxK/9RYviiXUTDumy5nQT5FhZ5WZwPClYlwnwiNHSAsfK5jdSyRZ3TGZ4ofAGUAYUqPm4/5mMldZwLC+5j+hEkwrkAoqtXDuvszA6HwjfF1SCrjMU6H4ZmB0JKizM+T7uhKf54fUnQ5QJgQ4DdxC/ETDhxGciyEq6eT/xQBIaNjbeFy8nMpB0I1tjNNTE6ItquN9bByPyasg4MB1O4eiJr0Zca92XljCqoQjqsCoWKCp6gNqYU1R3NoXvxgAoShFJ0KCL+He0RIrgEINxUonHRl+j6Hwf7L3bOzVWsiFwjhWcSg5W89Y8lw0fZb/CLdNhIeBEIYy6X/R30gLHl8Lq3shLUuSTg6CxD+kaJdIDQHg7nFUVDXta5mzgcDKsVCmIQSunFAYT42/t7qoOPXGjgoEwhl9RtPT6rHJ+M0QBhWMxCeBgh3cZBN00C4vzUXCJ/sXycBwq/p9V+PA0L2aTj8VCImJIle2Q+uFK8hKbf9smIIOQPOOQlyLpxzOmRNAEJjHdiztXrgVwHCiWUlo8+RZU0uHwhjz9CO0um247oTitLuCttg7Et6RiB8gfhqxjw18giEOyAQ3hYQ/tmMV7992xgw2OEYwsiMD/0sOQUZ3Q1zEzlCdna/EapTXYQKBkEAdsKJabsL3pfB/6ZT4tV5sGXECUbhhZU7PvsM9IE6S7OfzUd9c+nQDxViCGHqUk3r2l0RUci/J+0WAqGsE9+Tor0boboaVaxw8FD04KUA4boCxRYRiswyKx50sgZAaWemiNMg0F4OEforbBR7RX5FINxSbkcvC3guCAjnGwocHfAZbToQ0vEYCp3qhqFTC5Z0GTGEiZEwELlG565RDggTl8PP1wGE5ImP7p+8EwHhCrx2lZ9ESpYKcBCGPxsgzN4jCwi1f36dBAhDyG0D+aghTpekk9bUAMIIHEZL9PPCV8lTxStRyY48Um67PCCUdf8quEht/mP/M7ftObzDYvXrWTYQflzf7fxNIOEPI/I/VgBCy8qev1ggXFsBO53YQtjp7G06ERDu+TgwTzdC1fd94jFdZaFX7jr8JkUIhIeAUFboRA7hfcsYr0JO+lwg3G+co901e72Nk9H/pHNWqrZpJkXtILzOtpMF07Rpr1a/ynxDuIwahl8bCP+6my9zC0+Ml/O7shZCZSUNyo0KC6ECWWa6sUvAZQLh4/o+Dsk3wqgcD14EEK78RldE+OFDwoROprfoHhAaLYOB7W/tD+pveY1+81P7DVpsy28UgfAIINxiwHmhz2jTgbCuIMto4Lq/i2UYQVAMjTvtK1Q/f74SIPSgLD0JTwWE2U6jJDoXEGbD3jYQFiBhun1pv36dBghX7Lw/1KwDhNGXL2X6eVkDqQsCwpgJHfFj172eZQPhj82AjA/PBj8GfIy270JafL5GuQsXCoSb5DLtOIaw3e4cSN5zKiD0KDWpSiDVqKqZJi2XVAqB8EqAEKwV2+NVUYRiWB4I91XqfpruHUfmxDRHYnYCPJhQoMlX07r9qi8MhL5f9rxnmQH1fJ9RvqlfFgg1G3LJKOAl6kAeGZtq1FS0rqhLr+UBIZGi0wHhqhphMgxqVOzEkUC4Si6z1NNdrb7MSCaTBYSsJShv4zTKx1upfDKrGyJjvtiN741AKAMIR2+z9OKsyGf0ioHQcINDQHhYW+0rJJ8/Xw0QqqFK+HQyIMwiQhKdCQjzQG8XCHP33LSvpx+/LgQIy9zkbxUIf8Z2QjFT4XreA788INxdcRgI00S4uWX++FgFCCucr8sCQuE3yr+70jmYzfVUQBhqpkpVjwNhqKp8AE4iBMJbAsJvOyaMP35UUIvwNED4yK+7SWwjpK5tu248C5hYv18VWUZZdAQQFlUizNmWed6huIRC75Wldq8tFQUYUDEd5d404/fTJpU5HRByJPRCYSIkDQumPxoI10ZCPSlG+EEvMA/uuowarUE0MKKN0yiYrKfDL1+G043Bmg34VoPvuJVYBoGwPhBOdgBwNLlJIAzy6xBWAsL1leo9fUYgrGBR8cr6i8oGwnxX0H0gzNl73b6OcBc9NxCW6+dvEwhjJvxZ9Xo+JRB+/LEH8P6PjwiEsboxEHbfDQgjQqmpifL0xDSpFiIQ3hQQJlXp/SkMS5LxalZixJMCISdC29YUSFbCidCdgB8plOwzj+pXy5oHo+KyE8Nh8fJBIDQdDXxDAQj5FCMgLAAQOs79BQNhU7OrHQ+EmwoUDtisncxaE7lJZTjkQZrb/SSi0bZjKezF4RGBUI7LaKXruWlA+CRFwkLo2hKAMEjyO3vq58/XBIQhCUM+BacDwhixNubBMDoLEBYli8kCwkwkXLUv7dcvBMLrAMI61/NJgfDjx+3EDszIKjtxo0AIFQihGuH7AWGociAEHmQeNVUvQiC8LSD8sheRzYZfzg2EnAj1P5wA6WTiunQ0MSmdjql5xn61IJ+oXrx8OIbQXAokdDQoTe+YYh1/Ey6jyqmzjCIQ1gPCdXKZVCn6ogHQVgvacxrdf1qRRBkygyEQIhDKBMJAjoVw6R7nLdrUGEI1DPmknxAI4bCp8fXaPRCCIw8Ii3KH5gBhBhLG7es4d1G5QCirLhkCYdnrOYv9HgpXVgXCNBJm4eBNA2FcmP79gJAToUkEEIYaJaWvQ1+KEAjfHwgTG2EZHjwdED4+qsQGH1Fb06Bku2nrWu+xAUA4NJdLc7ixDG6W/6qQVMZcmmAUhCwyprAJKksBhDkhhJeQVOb6gXBdgSKv1kR+HULhNJrONLr30CXJMDrYyYKLQIhAeCQQBq4rx2WUHY2DTQTCr6EaPp3UZTQZVgkd7n9kqQAH84FwDwlF+zrSXRSBEIHwEBBCpQmR5SG3MP3NAuFDt/vwrkDI+wJPBFuxsvZBmeVzEAjfHQi/DNN2DP/bl3cBwsceFSBoTG1BhL1eqX7VkKICC+FwuRymLYPr5dJAqAm3UQW8ROM5AYQihlDLtxAiEL47EG78Rou8RTML0w+STKO5PqNGkmF0ECEQIhDKtRAGwauUpDLHBA82t+xESAif9FMDYdn+RyIQ5uFgERDuICG0L+3Xr7MAYUaEPwLh7QBhoW4ZCMvopEAo0kJAkZUq1yEC4fUAYZJKRqRD/Fa43ymBkCPhZEKpplFzMhmV7VdlKZfxxlzAgVAWbLhZLg2EHPw05Z6ugVBxTLATmteQVObqgXCVXCY3mUweECZOo0V/ei/DKAIhAqEEIJQifj0fFzzY3KQyHgn5ZFwdEObjYDEQbiEhvw5//DoTEGYIgfAmYgibA4Sb4BoEwuOuQwTCawJCSDf658/w26GdTguEcQ2KSaV+9eRAuGcpLFK2hdCklEMgfxPwp4AllDNi1zS7QIZdBMLmAmFiJLQPD4D2cG8QGcV/29jJMIpAeE4glKWmAWHT1DQglOqi2SAgvFYhEN4mEEpSMRAe5K7Nf5clBMIzutBLAMKm6WxAWEpnAMKJ2WskEI51fVwPCDOyzMR5R5MIw2wglCUEwuOA8NcvxynzRHz3Nw8GB2uesMEgQiB8HyD8T5KaBoT/NUxNA0Jp36thA6D/rlQIhLcJhPIvpOOA8F0/xiUAoaSkMqfsn+sAYeP6w1sDwoltm40EwqKqhBWBkEMg1ZRiy7C0CwiB8FggLOcitUd7Zf48O90TKQRCBEIEQgRCBMIYCGXpJoBwT3lAWMJShEB4E0AoqewEAiEC4ZaobdudJgJhKVVwFVYUBMJrBsKan0faeUcgRCC8JiBsGDghEF4WEEr7PAiECIQIhAiECITnAcKeWSWIsHlA2LiBCwIhAuExQChL1wqEsoRAWAiEjfteCITnOc5MihAIEQgRCG8JCK+0X729GMJRr0oMobTjLAkIpX0eBEIEwiYAobTPc6VAKO34IBAiECIQnuw4IxAiECIQ3g4QXm1/eHNAWK1fRSA8lwXjWiULCJtmGb7Sz3O1T/7we93k90IgvDAgRF3m9XxtQIjn/TaBEHWb42e89HHAikKhUDfdPzcMCFGXeiE1BAhxvIFCoRAIUSgUCoXCATTqNoEQhUKhEAhRKBQKhUKhLuPJAh43FAqFQIhCoVAoFAqFQqFQKARCFAqFQqFQKBQKhUIhEKJQKBQKhUKhUCgUCoEQhUKhUCgUCoVCoVAIhCgUCoVCoVAoFAqFQiBEoVAoFAqFQqFQKBQCIQqFQqFQKBQKhUKhEAhRKBQKhUKhUCgUCoVAiEKhUCgUCoVCoVCoYv0fISarP50fnqYAAAAASUVORK5CYII=");
                    g(13, "bestTeam", 5, "data:image/png;base64,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");
                    g(14, "bestPlayer", 5, "data:image/png;base64,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");
                    g(15, "zoom", 6, "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuBAMAAACllzYEAAAAHlBMVEUAAAAhIyA3ODZTVVJrbWqEhoOkpqO8v7vX2tb///8goTJXAAABaElEQVQ4y32Tu1ODQBDGL8QAdlg5dml8dZTa2TijXQpnIh2TwoQOxwehi2PB0flKYP/b7HFv5nALBn5337d7ewshXZyuKX2PST8egUW76OE7EJFa+BhJ9bSsUWFaeTV3GKHbn8EvlB79bjSv4VO8jUr4VdiHNnK938MHPie0Yh+ZLqmGuNsJ7CNURgewI5qPoRE86GwkJyWIBIfcUfJrmMm0sclDyDnPWmLyADacl8jnRbEGKIoiJRP4EmU2LJmIDfLvAf7z/37mv6IUm08pzbV/rx5f1pPA1Fn/iX3eS3nekAslz7gcGw9bg3uqn6Rup5oH+uaTLpO4r0SmZVuUFE2lfTc+z1qr9+BVtGJqzq1RHNfQdAtnrEW75UwuXOFgvj3crpCyDu6UIpP9fPHZU5XkiYVXvsXIPcc+VwspzY2pPorE/NgCfYK+QJ5+QFA6fjQt2A4IWuIWODixe2ELcuIUNJGL+zQle92exY5pfDIaAAAAAElFTkSuQmCC");
                    g(16, "apple", 3, "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAAA8BAMAAAA9AI20AAAAG1BMVEUAAAAjJCJUVlOEhoOanZkA/wC8vrvW2dX7/fq38z8cAAAEbUlEQVRYw+2YzXOiSBTAGzW6x8ZY6pGYFMMxUct4JGbLcMwld9QpliNkLeUqUvT7s+e9BoUITpIpuWxtp0IJdP943/3B3t7eXtnF2xViGZIbf1+8mVcS3YQKmk3o16AKtLhCdAsqad4be3WrQcdX7BUqalesURXaZM2q0DZr/TfQQVVo8fTXb/LgzO9SiQpon/WPg0fjk5j3cuNnH74ZQPcztOBsegz6xnP7i+i99Tk6ZOwoadwH34LnR5jDBB6j9RjR4vkF4pEF6wmho1EQOyP83uwWuisX1uPgPNpmdciho/5efwiWoiZau86T5QX+ZACL+S0MpEKDVW9/PTMAljq0R026P4/WmJFHx30v2E/9+GFj7KzI8IIZ+K6AZdyCAXbowd3ewN9kkA4McYB+Hs078BG9gNgI/12trJ1L6BGEVjRoRwbZOsbrfipaqa1nUXvQOY+eB1kUIXpv+BAZ0VM8DI5od7id4auh7DBK0VOJ/rEtt7WYqXoAmxvlLn0f94Tp7qx3K24LFRL0IrCDOxiIzgZtLbqim6INQosevJSiTZwtr2ccr6lWsaJ2IFaRocM4Re/x0WIwhEV7hD2e1GmCjtUA0fB0Y5Shw9x8bCWPtlu6BIeswD95K7YiTT6xpWQJZG7ic7ovQ9/n0MZFa4jIkeuXLU/hpYXO0H4O7V4WbWfkWvZ6NT4zbp3F6HfQOVNzpXx8RDHalcX0c7SZobM5XpwzjqlMHA0/azf/FL1XeKlLBccKF6G7v4vObL2rm6WzciznC631NXTO1pl97ZZHKtxMl/wOdWiLG+UxQVO+btwFV7AMrDk99bvvbYhvFL2A9op5jnL1Q1KB38lgDxUz/a5gvYM8CsToUsUFr85rMqWnp+hdDt08mtSKGKI413/yOmaVMl8m+aQpE9nBbGzBV17WaHtPuXYipm+0xil6n0Mr7sGkgSAVUBxMqSAkWbVmmmBtqp9k63v8t2uotgs+dgwP9jyi4/xOJHVkqJBNEN2ieLBCikSvlqxWsJcu0YKCCHn0wqb6eojXrPLxIpp8aKJMvE/mnYZknJ1ySEfyCaFJL7SbVycFHMc5uCpDm0Vjmw3HMXGEDG5mkBJSk6Qt0T6IllLihdCaHD09RfvF0id7KglaFNBk9lN0nXZfBYNEhdInmIoNbwoGiZ1EqYJBWuWrJ+20PkX0CZQWeDN1I0LsuizuFAWmlBoSNwKhZXJugwLaP7VH4jGth8EXwELB4OtiPDRlOP3ACwazjY6+J2fXJdrHjlExQmRWfUh0WwY/ysbV6xkWrZDx8cMxZRwNlfDYLYqkk0cJHbGOo9VKljgLpky2K04SJROxfIXxynVOfg+VBcal/O47S9YUe/Sy0ORTQsswM0rQ4iepsnEO96pcaYdqwI31YCINOrtNtV2pqpxl1nNUd0hPo7lcJg0m39rLpEU7F3cX2yb9jz5paRJ8WNF9BV3hRrrC7X+FhxYVHrVUeEBU5bFWhYdxb6+Nf7YXbpv0CLGqg89fkK30UIXyeWIAAAAASUVORK5CYII=");
                    g(17, "open link", 7, "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAAAPBAMAAADpFNeEAAAAGFBMVEUA/wBi/2N//4CX/5i//8DU/9Pq/+r///90hWfkAAAA6klEQVQoz5XSPQ+CMBAG4FME1i6GlUHjSuLA6uaqEyt+JF3VSt+/b99WhRQG7XCB0qdcrycia42rkomxgJ2edsP8AfYEKH8Gc+CYaLQ/g5Szm8mcpkGGZwgurwsDKqfrrgf6kaNKcMihCpwk5+YZOr+2DMCOQBuAtkoKgpTgvsQOd7cCOMSg82DJz/0fHKjewMQAW4KGxRyeAYqBTyNgCFy6gyq517MEYKAjUNsA2nAPc95DyMaHW4Pu0wNoCVIQPJjN96aHoIjBzINqD9X30vu8cKW6JTGQ2pc18x2x0pbdOgTSxCD1YAHzAmJBjxvc7JBGAAAAAElFTkSuQmCC");
                    g(18, "loading", 6, "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZEAAABGBAMAAAD/Q7RHAAAAGFBMVEUAAAAnKSZKTElucG2Fh4SoqqfLzcr///+y5yZlAAAEnUlEQVRo3u3aS3PaMBAAYGNsuHoy0+TKTJv6SjNNfeWSciVNJlydF7qGl/n7JTGSd1e7wgaFaWfMKfFD1qeXV5KD8cb8kuC//rWSVtJKWkkraSWtpJW0klbSSlpJK2klraSV/KuSbw9qe8HsfnCyfHVuZu95Kmb3iUdJ+KAvKf7gM119vDoUb8Bv9gLsu2PD97+n4O/tr1/+OzHXXiqTRjHyJukqkLcndKqnDw94yTYfty7JoyD5jtIYeZJ0FEr2Fp670EcnkgScYiRrXkJLI/EjyUjOhtzduSwpBrJEJ4YloSJJPHqRRDRnK3DSPHIpS8w5TjLnJJlVGIkPydjKWdVsw+pZDokueE5SMJKunULuQcIky5a/S7KQJbtiQZLUTmHlQcIkW13YYyqKkRQOycKWKNcjD5dwyebMYJA7JLscspLCknAJgLHxUEnEJbtkmAuXZC5LysqEEq4V1OkoeySm/bxenf22ujd41NolWTskCyoxxfNydXajrL55qCSDXe4LeaNHdl8wkiLofP2NxwNeUhBJiKKJiBbUwRKFBtIxbrVlha3wCzMGGYzROMxLPhIDkhjn/aOtFa93x0o6uHJ1Cb3Bce1NoZYMJabN5w7JEkv6uLSibQT+w0PcFZGhQyFYmZ18CnVY0q0hKbAks6JrL1F9j4S6Gar50jVK0csLSTR97pC85x9IprW7+CESU0B9psCTHroGS8ZgwJAkSyRRqAF7k/TJyIFkWhCjesOSC5CAJNk+GEjqvwobSVIS9sRwVO3vzoXo2TEXGhZOSQ4knUazq/qSDMXe1QgAbp3rBpFzkl4dyQpIurBnqibhilsyJo2WeU6us7U8WLIZ2JLgkyUhkFSNKoN5x5K4liSvJNEnSaZE0gG5ic1dfThFaSTRQ9vpJbBOqsE3hp20kUS/r9JPl0itKzGjwbrqPXlzia5jdXIJ7I+qCsrhFKVRjyeLD6DHJ54lrlEYVIQC789mkliSDD1LUhIEgTdjJEzXm0nw7Bq840eeJY5opSesBrHv+LUoyQTJ5BgJM113RJCpMNnGknSfJKYSGEH6l3BR/dS+4c2WwBidlaDmxUX1oR+JMNNa8MtHK0vSgUZekhIJnWl5kpDZb7fKGLM2iebuBZqp5bIk3rBTepN1TxJT8gO00jJhO3x5FZSYDYuJLKGdgaxI6P9BwxuZgyt4cI8kYxrOR4770kphJTm7VmhZSZCk+H68ShRcbjxJ4MrdNWxFY2mlMJaanSSJyAClwCN/Pmx8SaJ9zc46wUkWLglISl5NPV4irXCH7B1F0xVuvMXnWOH2IBF2HWLcLUE81mjXgWzRTODI7VvSdfafBZmBjRruBKHXp667jKvt5GiJsDuXkXBfmXbXaHeuPHGOJVzfHAXHS/gdU0W2Naam9BvtmJIdwIn0jnsKPEj4XWy6KlVFio12sXE5aElX2GY8VkJ2xx9hRSV2kByLW8WypEcilHNuI+l4Cf7a45ldLzZ5GVrfN4yC/ZKQhu6/ECTxJQnCKoK/s6cdqDfl5AscuIMjS/S/7Bc4z3SlR5DU+5VfRRWvp/sqKiy/iqr/IdZfF1HJgRmsN+0AAAAASUVORK5CYII=");
                    g(19, "target", 7, "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAMFBMVEXUAADUISLWQkLMTQDZZmXAdwC0lADgiIioqQCWvgCE0QAA/wDnra1i6ADw0tL////afMd+AAAC6klEQVRIx42WTWgTURCApzFNY2lLBKEX0dy8iA0UxB8CKgUv0gaKBS2B3HOJnkUDQrENQi6KEITcgydR0l0CUYReJBZCi3YpaC+9FANS6GXZ5+6+eT+z+1adS/ImX97Mzs4f2ET2916vPV9/61At6Ifeq2UIZWXDSYK+IxLIlY4Z+ga6jL8xQbsFoFQrDtF7QqoThaxSDIKsE4HqYJAyhXZNDJxq6VCvZIQgq0NDSJCGgnqFJCiroB2lHTvjS06dWxJSHl0cjBjztm5JxXUBdaXqro8E4j2UD+gg1BamFpkQ75GgVjkkn/8SU+LVUHmaQx/wmB5pEHNzyh4oa08ZkU+oroZQhR8mKMO8PNdPBpBlvoixA67PBBC6lI4yzJVOgb3Nv1+OQawm3h9gJo19jUPHHLrhQ4UEazIKkzZYHJoRvxwuLAzE95voOWzyO5dQ/zkw/QQPfe65DfhwGO2T8JBCB39zqAM8l1Ij3QBMkSC0YFsP94nIB/4fj3vegLb+175IkCX94io0w8/zXJkX0IwezjLUNciTKZrWoSJCF4hLvlCookHHChppPhaB5+7c36BpvOm/oH+Y0x13VSFTx5vGEEzQOPGInyO5KPOUR3yVvrsDIFWBBVOFoR5hlwYczTfgPUmVj1y9SJKiBdhSMM3c0ItZzMwfWFMifeeYomZHpKb89MVWOCWr++hXpNCzfkmViFO6oEvTPtROaAWM/RRtDOx3QO0pyYveCjZ6HreH1saDhiGaeKxj9GUrBzl70iNj54FiCA3BeFVNtXsfEq2Odh/xrjPYxyuG9nuU00YC6DPqrKTcvD6nAshSNclbk3coR1BGDqCmpFJ3Hg++bN2OTNgQ6uojTh9kfP7g5KwnDcWiNl67CQy/SEzzhKvKZORvGqdwxqHLw47JWCOyYfSexaEHsYUmvj9cM6xG1jJlrjqmJcsiFu875nWt91I+4/yLxMXP3lu753PzK+tO8nYY3LbvS2SDtP8A+ntynBIvYeAAAAAASUVORK5CYII=")
                }
            }
            ;
            this.bz = function (n) {
                return t[n]
            }
            ;
            this.l9 = function (n) {
                for (var z = l.length - 1; 0 <= z; z--)
                    if (l[z] === n)
                        return t[z];
                return x
            }
            ;
            this.bx = function () {
                return 0 === k
            }
        }

        function kJ() {
            function g(D, K) {
                g_pixelOwnerType[D] = 0;
                g_pixelOwnerType[D + 1] = 0;
                g_pixelOwnerType[D + 2] = K;
                g_pixelOwnerType[D + 3] = 0;
                k(D)
            }

            function k(D) {
                if (!h8.h9) {
                    var K = b5.gF(D);
                    D = b5.cF(D);
                    h8.h9 = K >= gy.u0[0] && K <= gy.u0[2] && D >= gy.u0[1] && D <= gy.u0[3]
                }
            }

            var t = [224, 224, 224],
                l = [[172, 172, 172], [144, 0, 0], [0, 128, 0], [0, 0, 144], [128, 128, 0], [128, 0, 128], [0, 128, 128], [196, 196, 196], [0, 0, 0]],
                x = [[4, 4, 4, 20], [4, 0, 0, 27], [0, 4, 0, 31], [0, 0, 4, 27], [4, 4, 0, 31], [4, 0, 4, 31], [0, 4, 4, 31], [4, 4, 4, 14], [4, 4, 4, 13]],
                n, z, y, A, B, C, E, F, G, N, I;
            this.bp = function (D) {
                n = new Uint8Array(g_unclaimedLandIndex);
                z = new Uint8Array(g_unclaimedLandIndex);
                y = new Uint8Array(g_unclaimedLandIndex);
                A = new Uint8Array(g_unclaimedLandIndex);
                B = new Uint8Array(g_unclaimedLandIndex);
                C = new Uint8Array(g_unclaimedLandIndex);
                E = new Uint8Array(g_unclaimedLandIndex);
                F = new Uint8Array(g_unclaimedLandIndex);
                G = new Uint8Array(g_unclaimedLandIndex);
                N = new Uint8Array(g_unclaimedLandIndex);
                this.qv = new Uint8Array(g_unclaimedLandIndex);
                I = new Int32Array(4);
                I[0] = -4 * aZ;
                I[1] = 4;
                I[2] = -I[0];
                I[3] = -I[1];
                if (dA)
                    for (var K, J = g_unclaimedLandIndex - 1; 0 <= J; J--)
                        K = dW.im[dW.dX[J]],
                            D = as((x[K][3] + 1) * ce.random(), ce.value(100)),
                            n[J] = l[K][0] + D * x[K][0],
                            z[J] = l[K][1] + D * x[K][1],
                            y[J] = l[K][2] + D * x[K][2];
                else if (dr.ds && dr.dt.yU)
                    for (D = dr.dt.yU,
                             K = g_maxPlayerCount - 1; 0 <= K; K--)
                        n[K] = 4 * D[K][0],
                            z[K] = 4 * D[K][1],
                            y[K] = 4 * D[K][2];
                else {
                    for (K = g_unclaimedLandIndex - 1; K >= g_playerCount; K--)
                        n[K] = 4 * as(64 * ce.random(), ce.value(100)),
                            z[K] = 4 * as(64 * ce.random(), ce.value(100)),
                            y[K] = 4 * as(64 * ce.random(), ce.value(100));
                    for (K = g_playerCount - 1; 0 <= K; K--)
                        n[K] = 4 * D[K].xX[0],
                            z[K] = 4 * D[K].xX[1],
                            y[K] = 4 * D[K].xX[2]
                }
                for (D = g_unclaimedLandIndex - 1; 0 <= D; D--)
                    K = as(n[D] + z[D] + y[D], 3),
                        n[D] += yd(K - n[D], 2),
                        z[D] += yd(K - z[D], 2),
                        y[D] += yd(K - y[D], 2),
                        n[D] -= n[D] % 4,
                        z[D] -= z[D] % 4,
                        y[D] -= y[D] % 4;
                for (D = g_unclaimedLandIndex - 1; 0 <= D; D--)
                    n[D] += as(D, 128),
                        z[D] += as(D % 128, 32),
                        y[D] += as(D % 32, 8),
                        A[D] = D % 8;
                this.ya();
                for (D = g_unclaimedLandIndex - 1; 0 <= D; D--)
                    B[D] = 32 > n[D] ? n[D] + 32 : n[D] - 32,
                        C[D] = 32 > z[D] ? z[D] + 32 : z[D] - 32,
                        E[D] = 32 > y[D] ? y[D] + 32 : y[D] - 32;
                for (D = g_unclaimedLandIndex - 1; 0 <= D; D--)
                    F[D] = 235 < n[D] ? n[D] - 20 : n[D] + 20,
                        G[D] = 235 < z[D] ? z[D] - 20 : z[D] + 20,
                        N[D] = 235 < y[D] ? y[D] - 20 : y[D] + 20
            }
            ;
            this.ya = function () {
                for (var D = g_unclaimedLandIndex - 1; 0 <= D; D--)
                    this.qv[D] = 280 > n[D] + z[D] + y[D] ? 0 : 1
            }
            ;
            this.gF = function (D) {
                return as(D, 4) % aZ
            }
            ;
            this.cF = function (D) {
                return as(D, 4 * aZ)
            }
            ;
            this.f1 = function (D, K) {
                return Math.floor(4 * (K * aZ + D))
            }
            ;
            this.hh = function (D) {
                return this.ye(D + I[0]) || this.ye(D + I[1]) || this.ye(D + I[2]) || this.ye(D + I[3])
            }
            ;
            this.hf = function (D, K) {
                return this.yf(D + I[0], K) || this.yf(D + I[1], K) || this.yf(D + I[2], K) || this.yf(D + I[3], K)
            }
            ;
            this.bE = function (D) {
                return 208 <= g_pixelOwnerType[D + 3]
            }
            ;
            this.hm = function (D, K) {
                return this.bE(K) && this.yg(D, K)
            }
            ;
            this.yg = function (D, K) {
                return D === this.bF(K)
            }
            ;
            this.yh = function (D) {
                return 208 <= g_pixelOwnerType[D + 3] && 224 > g_pixelOwnerType[D + 3]
            }
            ;
            this.cU = function (D) {
                return 224 <= g_pixelOwnerType[D + 3] && 248 > g_pixelOwnerType[D + 3]
            }
            ;
            this.hg = function (D) {
                for (var K = 3; 0 <= K; K--)
                    if (this.yi(D + I[K]))
                        return true;
                return false
            }
            ;
            this.yj = function (D) {
                return 192 <= g_pixelOwnerType[D + 3] && 208 > g_pixelOwnerType[D + 3]
            }
            ;
            this.yk = function (D, K) {
                return this.yj(D) && K === this.bF(D)
            }
            ;
            this.b6 = function (D) {
                return this.bE(D) || this.bG(D)
            }
            ;
            this.yi = function (D) {
                return 0 === g_pixelOwnerType[D + 3] && 2 === g_pixelOwnerType[D + 2] || this.yj(D)
            }
            ;
            this.bG = function (D) {
                return 0 === g_pixelOwnerType[D + 3] && 1 === g_pixelOwnerType[D + 2]
            }
            ;
            this.ye = function (D) {
                return 0 === g_pixelOwnerType[D + 3] && 3 === g_pixelOwnerType[D + 2]
            }
            ;
            this.yf = function (D, K) {
                return this.bG(D) || this.bE(D) && K !== this.bF(D)
            }
            ;
            this.bF = function (D) {
                return g_pixelOwnerType[D] % 4 * 128 + g_pixelOwnerType[D + 1] % 4 * 32 + g_pixelOwnerType[D + 2] % 4 * 8 + g_pixelOwnerType[D + 3] % 8
            }
            ;
            this.hn = function (D) {
                g(D, 1)
            }
            ;
            this.ym = function (D) {
                g(D, 2)
            }
            ;
            this.he = function (D, K) {
                g_pixelOwnerType[D] = n[K];
                g_pixelOwnerType[D + 1] = z[K];
                g_pixelOwnerType[D + 2] = y[K];
                g_pixelOwnerType[D + 3] = 208 + A[K];
                k(D)
            }
            ;
            this.b7 = function (D, K) {
                g_pixelOwnerType[D] = B[K];
                g_pixelOwnerType[D + 1] = C[K];
                g_pixelOwnerType[D + 2] = E[K];
                g_pixelOwnerType[D + 3] = 224 + A[K];
                k(D)
            }
            ;
            this.cW = function (D, K) {
                g_pixelOwnerType[D] = F[K];
                g_pixelOwnerType[D + 1] = G[K];
                g_pixelOwnerType[D + 2] = N[K];
                g_pixelOwnerType[D + 3] = 248 + A[K];
                k(D)
            }
            ;
            this.yp = function (D, K) {
                g_pixelOwnerType[D] = t[0] + n[K] % 4;
                g_pixelOwnerType[D + 1] = t[1] + z[K] % 4;
                g_pixelOwnerType[D + 2] = t[2] + y[K] % 4;
                g_pixelOwnerType[D + 3] = 192 + A[K];
                k(D)
            }
        }

        function kK() {
            function g() {
                for (var C = 0, E = 1; 5 > E; E++)
                    C += z[E] % 1024;
                return C
            }

            function k() {
                for (var C = 1; C < y - B; C++)
                    z[C] = parseInt(z[C])
            }

            function t() {
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

            function l() {
                for (var C = y - B - 1; 0 <= C; C--)
                    z[C] = m.n(z[C]);
                z[0] = m.iW(z[0])
            }

            function x(C, E, F) {
                var G = new Date;
                G.setTime(G.getTime() + Math.floor(31536E6 * F));
                C = C + "=" + E + ";expires=" + G.toUTCString() + ";SameSite=Strict;Secure;path=/";
                document.cookie = C
            }

            var n, z, y, A, B;
            this.bp = function () {
                if (!(5 <= d || g_isIOSUser)) {
                    B = 4;
                    A = 0;
                    n = [];
                    y = 10;
                    for (var C = 0; C < y; C++)
                        n.push("u" + C);
                    z = Array(y);
                    for (var E, F = document.cookie.split(";"), G = F.length - 1; 0 <= G; G--) {
                        F[G] = F[G].trim();
                        for (C = 2; 0 <= C; C--)
                            F[G] = F[G].replace(" ", "");
                        3 < F[G].length && (C = n.indexOf(F[G].substring(0, 2)),
                            E = F[G].indexOf("="),
                            0 <= C && 2 === E ? z[C] = F[G].substring(E + 1, F[G].length) : 0 < E && x(F[G].substring(0, E), "0", 0))
                    }
                    z[9] || (z[9] = "0");
                    a: {
                        for (C = y - 1; 0 <= C; C--)
                            if (void 0 === z[C]) {
                                C = false;
                                break a
                            }
                        C = true
                    }
                    C ? (A = 2,
                        l(),
                        k(),
                    g() !== z[5] && t()) : t()
                }
            }
            ;
            this.y = function () {
                if (2 === A) {
                    z[1] = 0 === z[1] ? Math.floor(1 + Math.random() * (Math.pow(2, 30) - 1)) : z[1];
                    z[5] = g();
                    for (var C = 1; C < y - B; C++)
                        z[C] = z[C].toString();
                    z[0] = m.iV(z[0]);
                    for (C = y - B - 1; 0 <= C; C--)
                        z[C] = m.z(z[C]);
                    for (C = y - 1; 0 <= C; C--)
                        x(n[C], z[C], 1);
                    l();
                    k()
                }
            }
            ;
            this.a0 = function () {
                return A
            }
            ;
            this.nT = function (C) {
                A = C;
                this.y()
            }
            ;
            this.x = function (C, E) {
                5 <= d || g_isIOSUser || (z[C] = E)
            }
            ;
            this.g = function (C) {
                return 5 <= d || g_isIOSUser ? 0 : z[C]
            }
        }

        function kj() {
            function g(l) {
                for (k -= 2; l < k; l += 2)
                    t[l] = t[l + 2],
                        t[l + 1] = t[l + 3]
            }

            var k = 0
                , t = new Uint16Array(32);
            this.bp = function () {
                k = 0
            }
            ;
            this.dF = function () {
                if (0 !== k)
                    if (0 === g_isPlayersAliveArray[g_localPlayerIndex] || ae.z7(g_localPlayerIndex) === ae.af(g_localPlayerIndex))
                        k = 0;
                    else {
                        var l;
                        for (l = k - 2; 0 <= l; l -= 2) {
                            var x = t[l];
                            if (x < g_unclaimedLandIndex && 0 === g_isPlayersAliveArray[x])
                                g(l);
                            else {
                                var n = t[l + 1];
                                if (x >= g_unclaimedLandIndex && lf(g_localPlayerIndex) || x < g_unclaimedLandIndex && lk(g_localPlayerIndex, x))
                                    g_isSingleplayer ? triggerAttack(g_localPlayerIndex, x, n) : ir.lU(n, x === g_unclaimedLandIndex ? g_localPlayerIndex : x),
                                        g(l)
                            }
                        }
                    }
            }
            ;
            this.lX = function (l, x) {
                var n;
                a: {
                    for (n = 0; n < k; n += 2)
                        if (t[n] === l) {
                            t[n + 1] += x;
                            t[n + 1] = ql(t[n + 1], 1E3);
                            n = true;
                            break a
                        }
                    n = false
                }
                n || 32 === k || (t[k] = l,
                    t[k + 1] = x,
                    k += 2)
            }
        }

        function fm(g) {
            zA(g);
            zB(g);
            zC(g);
            au.av(g);
            eK.g3(g);
            ae.zD(g)
        }

        function zA(g) {
            hu.lE(g) && iw++;
            var k = ae.zF(g);
            0 === k.length ? g === g_localPlayerIndex && zG() : (zH(g, k),
                zI(g, k))
        }

        function zG() {
            b0.b1[17] += g_playerBalanceArray[g_localPlayerIndex] + ae.zJ(g_localPlayerIndex);
            eW.show(false, false);
            eB.tL()
        }

        function zH(g, k) {
            var t;
            for (t = k.length - 1; 0 <= t; t--)
                ae.zK(k[t], g)
        }

        function zL(g) {
            var k, t = 0;
            for (k = g.length - 1; 1 <= k; k--)
                g_playerLandArray[g[k]] > g_playerLandArray[g[t]] && (t = k);
            return t
        }

        function zI(g, k) {
            var t, l = k[zL(k)];
            9 === dv && 1 === dW.dX[g] && ce.dP(8) && e2.zN(l);
            if (g === g_localPlayerIndex)
                e9.fl(l, 1),
                    zG();
            else {
                for (t = k.length - 1; 0 <= t; t--)
                    if (k[t] === g_localPlayerIndex) {
                        e9.fl(g, 0);
                        return
                    }
                g < g_playerCount && e9.mj(0, g, l)
            }
        }

        function zC(g) {
            g_isPlayersAliveArray[g] = g_playerBalanceArray[g] = 0;
            b4[g] = null;
            bM[g] = null;
            bN[g] = null;
            bQ[g] = null;
            eI.fh(g)
        }

        function zB(g) {
            var k, t;
            for (k = cz[g]; k >= d0[g]; k--)
                for (t = d2[g]; t >= d3[g]; t--) {
                    var l = 4 * (t * aZ + k);
                    b5.hm(g, l) && (b5.hn(l),
                        g_playerLandArray[g]--)
                }
        }

        function kp() {
            function g(x) {
                (x = x.target.files) && 0 < x.length && jv.zS(x[0])
            }

            function k(x) {
                var n = new Image;
                n.onload = t;
                n.src = x.target.result
            }

            function t(x) {
                var n = x.target;
                x = n.width;
                var z = n.height;
                4096 < x || 4096 < z || 10 > x || 10 > z ? alert("Image w & h must be between 10 and 4096.") : (x0 = za,
                    x1 = 0,
                    aZ = x,
                    aa = z,
                    hs.width = aZ,
                    hs.height = aa,
                    pj.drawImage(n, 0, 0),
                    xC = pj.getImageData(0, 0, aZ, aa).data)
            }

            var l;
            this.bp = function () {
                l = document.createElement("input");
                l.type = "file";
                l.onchange = g
            }
            ;
            this.zP = function () {
                l.click()
            }
            ;
            this.zQ = function (x) {
                g(x)
            }
            ;
            this.zS = function (x) {
                var n = x.name.split(".");
                var z = n[n.length - 1].toLowerCase();
                if ("json" === z)
                    dr.zW(x);
                else if ("gif" === z || "jpg" === z || "jpeg" === z || "png" === z)
                    dr.zX = n[0],
                        z = new FileReader,
                        z.onload = k,
                        z.readAsDataURL(x)
            }
            ;
            this.pZ = function (x) {
                if (0 === aJ.pY() || 2 === aJ.pY())
                    x.stopPropagation(),
                        x.preventDefault(),
                        x.dataTransfer.dropEffect = "copy"
            }
            ;
            this.pa = function (x) {
                if (0 === aJ.pY() || 2 === aJ.pY())
                    x.stopPropagation(),
                        x.preventDefault(),
                    (x = x.dataTransfer.files) && 0 < x.length && jv.zS(x[0])
            }
        }

        function kn() {
            this.zd = null;
            this.bp = function () {
                this.zd = 10 !== dv ? null : new Uint32Array(g_unclaimedLandIndex)
            }
            ;
            this.dF = function () {
                10 === dv && this.ze()
            }
            ;
            this.ze = function () {
                var g, k = this.zd, t = dZ, l = g_playerBalanceArray;
                for (g = dY - 1; 0 <= g; g--) {
                    var x = t[g];
                    if (!(x >= g_playerCount)) {
                        var n = Math.max(as(l[x], 4), 2048);
                        var z = Math.max(ay.tY(x), 100);
                        k[x] += as(z * n, 1E4);
                        k[x] > n && (k[x] = n)
                    }
                }
            }
            ;
            this.tu = function (g, k) {
                if (k > this.zd[g])
                    return k = this.zd[g],
                        this.zd[g] = 0,
                        k;
                this.zd[g] -= k;
                return k
            }
        }

        function kq() {
            function g(z) {
                dr.ds = true;
                dr.zk(JSON.parse(z.target.result));
                dr.lH()
            }

            function k(z) {
                var y;
                if (22 >= z.length)
                    return false;
                dr.dt.x0 = 0;
                dr.dt.x5 = 0;
                xD(0, 0);
                "data:image/png;base64," !== z.substring(0, 22) && (z = "data:image/png;base64," + z);
                var A = new Image;
                A.onload = function () {
                    aZ = A.width;
                    aa = A.height;
                    4096 < aZ || 4096 < aa || 10 > aZ || 10 > aa ? (xD(0, 0),
                        alert("Image w & h must be between 10 and 4096.")) : (x0 = za,
                        x1 = 0,
                        hs.width = aZ,
                        hs.height = aa,
                        pj.drawImage(A, 0, 0),
                        y = pj.getImageData(0, 0, aZ, aa),
                        xC = y.data)
                }
                ;
                A.src = z;
                dr.dt.zv = "";
                return true
            }

            function t(z, y, A, B) {
                return "string" !== typeof z || z.length < y ? B : z.length > A ? z.substring(0, A) : z
            }

            function l(z, y, A) {
                z = "number" === typeof z ? Math.floor(z) : y;
                return Math.min(Math.max(z, y), A)
            }

            function x(z, y) {
                return "boolean" === typeof z ? z : y
            }

            function n(z, y, A, B) {
                if (!Array.isArray(z) || 1 > z.length)
                    return null;
                var C = 8 === B ? new Uint8Array(y) : new Uint16Array(y);
                var E = z.length;
                for (B = 0; B < y; B++)
                    C[B] = l(z[B % E], 0, A);
                return C
            }

            this.ds = false;
            this.dt = null;
            this.zX = "";
            this.pU = function () {
                this.ds = false;
                this.dt = null
            }
            ;
            this.xV = function () {
                this.dt.yU && this.dt.zf && (this.dt.yU[0] = cC.mC[2].ih.vA());
                jG(this.dt.zg, 0, this.zh(), this.dt.jJ, false)
            }
            ;
            this.zh = function () {
                return [{
                    name: this.dt.zi ? je.xW() : this.dt.zj[0],
                    xX: [0, 0, 0],
                    xY: 0
                }]
            }
            ;
            this.zW = function (z) {
                var y = new FileReader;
                y.onload = g;
                y.readAsText(z)
            }
            ;
            this.zk = function (z) {
                this.dt = {};
                this.dt.xS = l(z.numberPlayers, 1, 512);
                this.dt.zn = l(z.modeID, 0, 1);
                this.dt.x0 = l(z.mapID, 0, za - 1);
                this.dt.x5 = l(z.seedMap, 0, 16383);
                this.dt.zg = l(z.seedSpawn, 0, 16383);
                this.dt.jL = x(z.selectableSpawn, false);
                this.dt.zi = x(z.selectableName, false);
                this.dt.zf = x(z.selectableColor, false);
                this.zX = this.dt.zX = t(z.mapName, 1, 25, "Custom Map");
                var y = this.dt;
                var A = z.description;
                var B;
                if (!Array.isArray(A) || 1 > A.length)
                    A = [];
                else {
                    var C = A.length;
                    for (B = 0; B < C; B++)
                        A[B] = t(A[B], 0, 100, "")
                }
                y.mQ = A;
                this.dt.hH = n(z.playerX, this.dt.xS, 4096, 16);
                this.dt.hS = n(z.playerY, this.dt.xS, 4096, 16);
                this.dt.zs = n(z.playerTeam, this.dt.xS, 8, 8);
                this.dt.du = n(z.playerStrength, this.dt.xS, 5, 8);
                y = this.dt;
                A = z.playerColor;
                B = this.dt.xS;
                if (!Array.isArray(A) || 1 > A.length)
                    A = null;
                else {
                    var E = Array(B);
                    var F = A.length;
                    for (C = 0; C < B; C++)
                        E[C] = n(A[C % F], 3, 63, 8);
                    A = E
                }
                y.yU = A;
                y = this.dt;
                A = z.playerName;
                B = this.dt.xS;
                if (!Array.isArray(A) || 1 > A.length)
                    A = null;
                else {
                    E = Array(B);
                    F = A.length;
                    for (C = 0; C < B; C++)
                        E[C] = t(A[C % F], 3, 26, "Bot");
                    A = E
                }
                y.zj = A;
                this.dt.zv = "string" === typeof z.mapBase64 ? z.mapBase64 : "";
                this.dt.zi = this.dt.zi || !this.dt.zj;
                this.dt.jJ = 0 === this.dt.zn ? 7 : 2 === this.dt.zn ? 9 : 6;
                this.dt.hH = this.dt.hS ? this.dt.hH : null
            }
            ;
            this.lH = function () {
                k(this.dt.zv) || xD(this.dt.x0, this.dt.x5)
            }
            ;
            this.a02 = function () {
                var z, y = 0, A = this.dt.xS;
                for (z = 0; z < A; z++)
                    this.dt.zs[z] > y && (y = this.dt.zs[z]);
                return Math.max(0, y - 1)
            }
        }

        function kL() {
            function g(y) {
                return y < g_playerCount ? k * y : k * g_playerCount + t * (y - g_playerCount)
            }

            var k, t, l, x, n, z;
            this.bp = function () {
                k = 16 > g_playerCount ? 12 : 8;
                t = 4;
                var y = g(g_unclaimedLandIndex);
                l = new Uint8Array(g_unclaimedLandIndex);
                x = new Uint16Array(y);
                n = new Uint32Array(y);
                z = new Uint16Array(y)
            }
            ;
            this.zD = function (y) {
                l[y] = 0
            }
            ;
            this.zK = function (y, A) {
                var B;
                a: {
                    var C = g(y);
                    for (B = l[y] - 1; 0 <= B; B--)
                        if (0 === z[C + B] && x[C + B] === A)
                            break a;
                    B = l[y]
                }
                B !== l[y] && (C = n[g(y) + B],
                    this.b2(y, B),
                    this.cQ(y, C, g_unclaimedLandIndex))
            }
            ;
            this.co = function (y, A) {
                var B, C = g(y);
                for (B = l[y] - 1; 0 <= B; B--)
                    if (0 === z[C + B] && x[C + B] === A)
                        return true;
                return false
            }
            ;
            this.dD = function (y) {
                return y < g_playerCount ? l[y] < k : l[y] < t
            }
            ;
            this.af = function (y) {
                return l[y]
            }
            ;
            this.al = function (y, A) {
                return x[g(y) + A]
            }
            ;
            this.ag = function (y, A) {
                return z[g(y) + A]
            }
            ;
            this.fV = function (y, A) {
                var B, C = g(y);
                for (B = l[y] - 1; 0 <= B; B--)
                    if (z[C + B] === A)
                        return B;
                return -1
            }
            ;
            this.am = function (y, A) {
                return n[g(y) + A]
            }
            ;
            this.bi = function (y, A) {
                var B, C = g(y);
                for (B = l[y] - 1; 0 <= B; B--)
                    if (0 === z[C + B] && x[C + B] === A)
                        return n[C + B];
                return 0
            }
            ;
            this.zJ = function (y) {
                var A = g(y)
                    , B = 0;
                for (y = l[y] - 1; 0 <= y; y--)
                    B += n[A + y];
                return B
            }
            ;
            this.a07 = function (y) {
                var A = g(y)
                    , B = 0;
                for (y = l[y] - 1; 0 <= y; y--)
                    0 === z[A + y] && (B += n[A + y]);
                return B
            }
            ;
            this.z7 = function (y) {
                var A = g(y)
                    , B = 0;
                for (y = l[y] - 1; 0 <= y; y--)
                    0 < z[A + y] && B++;
                return B
            }
            ;
            this.bh = function (y, A, B) {
                var C = g(y);
                for (y = l[y] - 1; 0 <= y; y--)
                    0 === z[C + y] && x[C + y] === A && (n[C + y] = B)
            }
            ;
            this.bT = function (y, A, B) {
                n[g(y) + A] = B
            }
            ;
            this.cQ = function (y, A, B) {
                var C, E = g(y);
                B === g_localPlayerIndex && b0.b1[y < g_playerCount ? 6 : 5]++;
                for (C = l[y] - 1; 0 <= C; C--)
                    if (0 === z[E + C] && x[E + C] === B) {
                        n[E + C] += A;
                        n[E + C] = n[E + C] > jA ? jA : n[E + C];
                        return
                    }
                x[E + l[y]] = B;
                n[E + l[y]] = A;
                z[E + l[y]] = 0;
                l[y]++;
                y < g_playerCount && (B === g_localPlayerIndex ? e9.fl(y, 5) : y === g_localPlayerIndex && eA.ml(B))
            }
            ;
            this.tv = function (y, A, B) {
                var C = g(y);
                g_isPlayersAliveArray[y] = 2;
                x[C + l[y]] = 0;
                n[C + l[y]] = A;
                z[C + l[y]] = B;
                l[y]++
            }
            ;
            this.b2 = function (y, A) {
                var B;
                if (0 !== l[y]) {
                    var C = g(y);
                    l[y]--;
                    for (B = A; B < l[y]; B++)
                        x[C + B] = x[C + B + 1],
                            n[C + B] = n[C + B + 1],
                            z[C + B] = z[C + B + 1]
                }
            }
            ;
            this.zF = function (y) {
                var A, B, C = [];
                for (A = dY - 1; 0 <= A; A--) {
                    var E = g(dZ[A]);
                    for (B = l[dZ[A]] - 1; 0 <= B; B--)
                        if (0 === z[E + B] && x[E + B] === y) {
                            C.push(dZ[A]);
                            break
                        }
                }
                return C
            }
        }

        function kM() {
            var g, k, t, l, x, n;
            this.bp = function () {
                l = t = k = g = 10
            }
            ;
            this.a0E = function () {
                n = 512;
                x = new Uint16Array(n);
                for (var z = 0; z < n; z++)
                    x[z] = 100 + bl(as(25600 * z, n - 4), 9)
            }
            ;
            this.sH = function () {
                return l
            }
            ;
            this.dF = function () {
                if (0 >= --t) {
                    t = g;
                    var z, y = g_playerBalanceArray[g_localPlayerIndex];
                    g_isSingleplayer && !dA && 0 !== g_isPlayersAliveArray[0] && 0 === dy.dz[0].bD && (g_playerBalanceArray[0] += as(g_playerLandArray[0], 6));
                    for (z = dY - 1; 0 <= z; z--) {
                        var A = as(ay.tY(dZ[z]) * g_playerBalanceArray[dZ[z]], 1E4);
                        g_playerBalanceArray[dZ[z]] += 1 > A ? 1 : A;
                        ay.az(dZ[z])
                    }
                    b0.b1[9] += g_playerBalanceArray[g_localPlayerIndex] - y;
                    if (0 >= --l) {
                        l = k;
                        z = g_playerBalanceArray[g_localPlayerIndex];
                        for (A = dY - 1; 0 <= A; A--)
                            g_playerBalanceArray[dZ[A]] += g_playerLandArray[dZ[A]],
                                ay.az(dZ[A]);
                        b0.b1[8] += g_playerBalanceArray[g_localPlayerIndex] - z
                    }
                }
            }
            ;
            this.tY = function (z) {
                var y = x[as((n - 1) * g_playerLandArray[z], j9)];
                if (1920 > c4.dU()) {
                    var A = as(100 * (13440 - 6 * c4.dU()), 1920);
                    y = A > y ? A : y
                }
                A = this.dJ(z);
                g_playerBalanceArray[z] > A && (y -= as(2 * y * (g_playerBalanceArray[z] - A), A));
                return 0 > y ? 0 : 700 < y ? 700 : y
            }
            ;
            this.dJ = function (z) {
                z = 100 * g_playerLandArray[z];
                return z > jB ? jB : z
            }
            ;
            this.az = function (z) {
                var y = g_playerLandArray[z] * j7;
                g_playerBalanceArray[z] = g_playerBalanceArray[z] > jA ? jA : g_playerBalanceArray[z] > y ? y : g_playerBalanceArray[z]
            }
        }

        function kN() {
            function g() {
                X.width = gE;
                X.height = cB;
                V = X.getContext("2d", {
                    alpha: true
                });
                V.textAlign = cJ;
                V.textBaseline = cI;
                V.imageSmoothingEnabled = true
            }

            function k() {
                W = false;
                U = 1;
                R = P = 0;
                V.clearRect(0, 0, gE, cB);
                for (var O = gC / g7, T = gD / g7, Z = (gE + gC) / g7, ba = (cB + gD) / g7, la, ma, fa, ca, qa, ua = 0 !== g_isPlayersAliveArray[g_localPlayerIndex] && hu.lE(g_localPlayerIndex), Aa = dY - 1; 0 <= Aa; Aa--)
                    if (fa = dZ[Aa],
                        ca = Math.floor(Q * g7 * I[fa] * G[fa]),
                    !(ca < M || ca >= K) && E[fa] + G[fa] > O && E[fa] < Z && F[fa] + N[fa] > T && F[fa] < ba) {
                        la = Math.floor(gE * (E[fa] + G[fa] / 2 - O) / (Z - O));
                        ma = Math.floor(cB * (F[fa] + N[fa] / 2 - T) / (ba - T) - .1 * ca);
                        V.font = om[fT[fa]] + ca + bu;
                        qa = V;
                        var ra = fa;
                        ra = ca >= J && ca < K ? dW.a17[b5.qv[ra]] + x(ca).toFixed(3) + ")" : dW.a18[b5.qv[ra]];
                        qa.fillStyle = ra;
                        V.fillText(jt.rG.a0x ? eP.gJ(g_playerBalanceArray[fa]) : g_playerNameArray[fa], la, ma);
                        W = true;
                        if (0 < Y[fa]) {
                            qa = la;
                            ra = ma;
                            var va = ca
                                , sa = fa;
                            if (0 === sM[sa])
                                if (a5.oB(ia[sa])) {
                                    var Ba = qa
                                        , ta = va
                                        , ya = sa;
                                    sa = ia[sa];
                                    var wa = .9 * ta / a5.c1
                                        , Da = Math.floor(ra - .5 * wa * a5.c1 - .05 * ta);
                                    V.globalAlpha = x(ta);
                                    for (var Ca = Math.floor(Ba - .5 * ta / D[ya] - .4 * ta - wa * a5.c1), xa = 0; 2 > xa; xa++)
                                        V.setTransform(wa, 0, 0, wa, Ca, Da),
                                            V.drawImage(a5.l5[sa], 0, 0),
                                            Ca = Math.floor(Ba + .5 * ta / D[ya] + .4 * ta);
                                    V.globalAlpha = 1;
                                    V.setTransform(1, 0, 0, 1, 0, 0);
                                    t(qa, ra, va, 0, 0)
                                } else
                                    a5.oA(ia[sa]) ? (l(qa, ra, va, ia[sa], 0),
                                        t(qa, ra, va, 0, 1)) : (l(qa, ra, va, ia[sa], 1),
                                        t(qa, ra, va, 1, 0));
                            else
                                l(qa, ra, va, ia[sa], 0)
                        } else
                            0 === sM[fa] && t(la, ma, ca, 0, 0);
                        if (ua && (0 < Y[fa + g_unclaimedLandIndex] || 0 < Y[fa + 2 * g_unclaimedLandIndex] || 0 < Y[fa + 3 * g_unclaimedLandIndex] || 0 < Y[fa + 4 * g_unclaimedLandIndex])) {
                            ra = la;
                            va = ma;
                            Ba = ca;
                            ta = fa;
                            ya = -1;
                            for (qa = 4; 1 <= qa; qa--)
                                0 < Y[ta + qa * g_unclaimedLandIndex] && ya++;
                            for (qa = 1; 5 > qa; qa++)
                                0 < Y[ta + qa * g_unclaimedLandIndex] && (sa = Ba,
                                    wa = qa,
                                    Da = ta,
                                    Ca = Y[ta + qa * g_unclaimedLandIndex],
                                    xa = .8 * sa / a5.c1,
                                    V.setTransform(xa, 0, 0, xa, Math.floor(ra - .5 * xa * a5.c1 - .534 * ya * sa), Math.floor(va + 1.4 * xa * a5.c1)),
                                    V.globalAlpha = x(sa),
                                    V.drawImage(1 === wa ? a5.l5[ia[Da + g_unclaimedLandIndex]] : 2 === wa && 255 > Ca ? hu.l3[2] : hu.l2[wa + 3], 0, 0),
                                    V.globalAlpha = 1,
                                    V.setTransform(1, 0, 0, 1, 0, 0),
                                    ya -= 2)
                        }
                        qa = Math.floor(L * ca);
                        qa < M || (V.font = bt + qa + bu,
                            V.fillText(jt.rG.a0x ? g_playerNameArray[fa] : eP.gJ(g_playerBalanceArray[fa]), la, ma + Math.floor(.78 * ca)))
                    }
            }

            function t(O, T, Z, ba, la) {
                var ma = .95 * Z / na;
                V.setTransform(ma, 0, 0, ma, Math.floor(O - .5 * ma * pa + .8 * ba * Z), Math.floor(T - 1.76 * ma * na - .82 * la * Z));
                V.globalAlpha = x(Z);
                V.drawImage(bw.bz(4), 0, 0);
                V.globalAlpha = 1;
                V.setTransform(1, 0, 0, 1, 0, 0)
            }

            function l(O, T, Z, ba, la) {
                var ma = 1.2 * Z / a5.c1;
                V.setTransform(ma, 0, 0, ma, Math.floor(O - .5 * ma * a5.c1 - .8 * la * Z), Math.floor(T - 1.5 * ma * a5.c1));
                V.globalAlpha = x(Z);
                V.drawImage(a5.l5[ba], 0, 0);
                V.globalAlpha = 1;
                V.setTransform(1, 0, 0, 1, 0, 0)
            }

            function x(O) {
                return O >= J && O < K ? 1 - (O - J) / (K - J) : 1
            }

            function n(O) {
                var T, Z = E[O];
                for (T = E[O] - d0[O] - 1; 0 <= T; T--)
                    if (Z--,
                        !y(O, Z, F[O], N[O])) {
                        Z++;
                        break
                    }
                var ba = E[O];
                for (T = cz[O] - E[O] - G[O]; 0 <= T; T--)
                    if (ba++,
                        !y(O, ba + G[O] - 1, F[O], N[O])) {
                        ba--;
                        break
                    }
                Z = Math.floor((Z + ba) / 2);
                ba = F[O];
                for (T = F[O] - d3[O] - 1; 0 <= T; T--)
                    if (ba--,
                        !A(O, Z, ba, G[O])) {
                        ba++;
                        break
                    }
                var la = F[O];
                for (T = d2[O] - F[O] - N[O]; 0 <= T; T--)
                    if (la++,
                        !A(O, Z, la + N[O] - 1, G[O])) {
                        la--;
                        break
                    }
                T = Math.floor((ba + la) / 2);
                z(O, Z, T, G[O], N[O]) && (E[O] = Z,
                    F[O] = T)
            }

            function z(O, T, Z, ba, la) {
                var ma;
                for (ma = T + ba - 1; ma >= T; ma--)
                    if (!y(O, ma, Z, la))
                        return false;
                var fa = Math.floor(.25 * la);
                fa = 1 > fa ? 1 : fa;
                for (ma = Z + la - 1 - fa; ma >= Z + fa; ma--)
                    if (!A(O, T, ma, ba))
                        return false;
                return true
            }

            function y(O, T, Z, ba) {
                return b5.hm(O, 4 * (Z * aZ + T)) && b5.hm(O, 4 * ((Z + ba - 1) * aZ + T))
            }

            function A(O, T, Z, ba) {
                return b5.hm(O, 4 * (Z * aZ + T)) && b5.hm(O, 4 * (Z * aZ + T + ba - 1))
            }

            var B, C, E, F, G, N, I, D, K, J, L, H, M, Q, R, P, U, W, X, V, ia, Y, pa, na, S = 0;
            this.bp = function () {
                W = false;
                Q = .88;
                L = .5;
                H = 1.8;
                K = Math.floor(.5 * pI);
                J = Math.floor(.2 * K);
                M = 4 > jt.rG.a0l ? 1 + jt.rG.a0l : 2 * (jt.rG.a0l - 1);
                C = B = 0;
                E = new Uint16Array(g_unclaimedLandIndex);
                F = new Uint16Array(g_unclaimedLandIndex);
                G = new Uint16Array(g_unclaimedLandIndex);
                N = new Uint16Array(g_unclaimedLandIndex);
                I = new Float32Array(g_unclaimedLandIndex);
                D = new Float32Array(g_unclaimedLandIndex);
                ia = new Uint8Array(2 * g_unclaimedLandIndex);
                Y = new Uint8Array(5 * g_unclaimedLandIndex);
                X = X ? X : document.createElement("canvas");
                g();
                P = R = 0;
                U = 1;
                if (8 === dv) {
                    var O;
                    V.font = bt + 100 + bu;
                    var T = 100 / Math.floor(V.measureText("20 000 000").width);
                    for (O = g_unclaimedLandIndex - 1; 0 <= O; O--)
                        D[O] = I[O] = T
                } else
                    for (V.font = bt + Math.floor(100 * L) + bu,
                             T = 80 / Math.floor(V.measureText(eP.gJ(jA)).width),
                             V.font = bt + 100 + bu,
                             O = g_unclaimedLandIndex - 1; 0 <= O; O--)
                        D[O] = 100 / Math.floor(V.measureText(g_playerNameArray[O]).width),
                            I[O] = T < D[O] ? T : D[O];
                for (O = g_unclaimedLandIndex - 1; 0 <= O; O--)
                    12 > g_playerLandArray[O] ? (E[O] = d0[O] + 1,
                        F[O] = d3[O] + 1,
                        G[O] = 1,
                        N[O] = 1) : (E[O] = d0[O],
                        F[O] = d3[O] + 1,
                        G[O] = 4,
                        N[O] = 2);
                if (fc)
                    for (O = 0; O < g_playerCount; O++)
                        G[O] = 0;
                pa = bw.bz(4).width;
                na = bw.bz(4).height
            }
            ;
            this.lv = function () {
                g();
                k()
            }
            ;
            this.j4 = function () {
                for (var O = 0; O < g_playerCount; O++)
                    3 !== cz[O] - d0[O] || 3 !== d2[O] - d3[O] ? (E[O] = d0[O] + (cz[O] !== d0[O] ? 1 : 0),
                        F[O] = d3[O],
                        G[O] = 1,
                        N[O] = 1) : (E[O] = d0[O],
                        F[O] = d3[O] + 1,
                        G[O] = 4,
                        N[O] = 2)
            }
            ;
            this.n2 = function (O, T, Z) {
                0 === g_isPlayersAliveArray[O] || 4 !== T && 2 === fT[O] || (O += T * g_unclaimedLandIndex,
                    0 === T ? ia[O] === Z && 0 < Y[O] ? Y[O] = 0 : (ia[O] = Z,
                        Y[O] = a5.oB(Z) ? 255 : 64) : 1 === T ? (Y[O] = 64,
                        ia[O] = Z) : Y[O] = Z)
            }
            ;
            this.cG = function () {
                W && (1 !== U ? (cH.imageSmoothingEnabled = true,
                    cH.setTransform(U, 0, 0, U, 0, 0),
                    cH.drawImage(X, -R / U, -P / U),
                    cH.setTransform(1, 0, 0, 1, 0, 0)) : (cH.imageSmoothingEnabled = false,
                    cH.drawImage(X, -R, -P)))
            }
            ;
            this.rS = function (O, T) {
                R += O;
                P += T
            }
            ;
            this.lm = function (O, T) {
                eA.rS(O, T)
            }
            ;
            this.zoom = function (O, T, Z) {
                U *= O;
                R = (R + T) * O - T;
                P = (P + Z) * O - Z
            }
            ;
            this.eb = function (O) {
                return (O ? 0 === ++S % jt.so[jt.rG.a0u] : 0 === c4.dU() % jt.so[jt.rG.a0u]) ? (S = 0,
                    k(),
                    true) : false
            }
            ;
            this.gG = function (O) {
                return I[O]
            }
            ;
            this.dF = function () {
                if (4 <= ++C) {
                    var O, T;
                    C = 0;
                    for (T = 4; 1 <= T; T--)
                        for (O = dY - 1; 0 <= O; O--) {
                            var Z = dZ[O] + T * g_unclaimedLandIndex;
                            0 < Y[Z] && 255 > Y[Z] && Y[Z]--
                        }
                    if (2 !== fZ)
                        for (O = dY - 1; 0 <= O; O--)
                            Z = dZ[O],
                            0 < Y[Z] && 255 > Y[Z] && Y[Z]--
                }
                O = Math.floor(.1 * dY);
                O = 8 > O ? 8 : O;
                O = O > dY ? dY : O;
                for (Z = B + O - 1; Z >= B; Z--)
                    if (T = Z % dY,
                        T = dZ[T],
                    0 < G[T] && z(T, E[T], F[T], G[T], N[T])) {
                        for (var ba, la, ma, fa, ca = T, qa = false, ua = 0; 8 > ua; ua++) {
                            la = G[ca] + 2;
                            ba = N[ca] + 2;
                            if (la > cz[ca] - d0[ca] + 1 || ba > d2[ca] - d3[ca] + 1)
                                break;
                            fa = E[ca] - 1;
                            ma = F[ca] - 1;
                            if (z(ca, fa, ma, la, ba))
                                E[ca] = fa,
                                    F[ca] = ma,
                                    G[ca] = la,
                                    N[ca] = ba,
                                    qa = true;
                            else
                                break
                        }
                        if (ba = !qa) {
                            ca = T;
                            qa = false;
                            ua = G[ca];
                            for (var Aa = 1 + Math.floor(.02 * ua), ra = 1; 5 > ra; ra++) {
                                la = ua + ra * Aa;
                                if (la > cz[ca] - d0[ca] + 1)
                                    break;
                                ba = 1 + Math.floor(H * I[ca] * la);
                                if (ba > d2[ca] - d3[ca] + 1)
                                    break;
                                fa = d0[ca] + Math.floor(Math.random() * (cz[ca] - d0[ca] + 2 - la));
                                ma = d3[ca] + Math.floor(Math.random() * (d2[ca] - d3[ca] + 2 - ba));
                                z(ca, fa, ma, la, ba) && (E[ca] = fa,
                                    F[ca] = ma,
                                    G[ca] = la,
                                    N[ca] = ba,
                                    qa = true)
                            }
                            ba = qa
                        }
                        ba && n(T)
                    } else {
                        a: {
                            la = T;
                            ma = E[la] + 1;
                            fa = F[la] + 1;
                            for (ca = G[la] - 2; ;) {
                                if (1 > ca) {
                                    G[la] = 0;
                                    break
                                }
                                ba = 1 + Math.floor(H * I[la] * ca);
                                if (z(la, ma, fa, ca, ba)) {
                                    E[la] = ma;
                                    F[la] = fa;
                                    G[la] = ca;
                                    N[la] = ba;
                                    ba = true;
                                    break a
                                }
                                ma++;
                                fa++;
                                ca -= 2
                            }
                            ba = false
                        }
                        if (ba)
                            n(T);
                        else
                            for (ba = T,
                                     ma = cz[ba] - d0[ba] + 1,
                                     la = Math.floor(.02 * ma),
                                     la = 1 > la ? 1 : la,
                                     T = -6 * la; ma >= T; ma -= la)
                                if (ca = 0 < ma ? ma : 1,
                                    fa = 1 + Math.floor(H * I[ba] * ca),
                                    ua = d0[ba] + Math.floor(Math.random() * (cz[ba] - d0[ba] + 2 - ca)),
                                    qa = d3[ba] + Math.floor(Math.random() * (d2[ba] - d3[ba] + 2 - fa)),
                                    z(ba, ua, qa, ca, fa)) {
                                    E[ba] = ua;
                                    F[ba] = qa;
                                    G[ba] = ca;
                                    N[ba] = fa;
                                    break
                                }
                    }
                B += O;
                B %= dY
            }
            ;
            this.ml = function (O) {
                var T = O + 2 * g_unclaimedLandIndex
                    , Z = Y[T];
                return 0 < Z ? (e9.n7(50, O),
                    Y[T] = 0,
                255 === Z) : false
            }
            ;
            this.li = function (O) {
                return 255 === Y[O + 2 * g_unclaimedLandIndex]
            }
        }

        function kO() {
            var g, k;
            this.bp = function () {
                var t, l;
                g = "Abbasid Caliphate;Aceh s;Achaemenid Z;Afsharid z;Aghlabid Emirate;Ahom z;Akkadian Z;Aksumite Z;Akwamu;Alaouite z;Almohad Caliphate;Almoravid z;Angevin Z;Aq Qoyunlu;Armenian Z;Assyria;Ashanti Z;Austrian Z;Austria-Hungary;Ayyubid z;Aztec Z;Aulikara Z;Babylonian Z;Balhae;Banten s;S Banjar;Bamana Z;Bengal s;Benin Z;Kadamba z;Bornu Z;E Brazil;Britannic Z;British Z;British Raj;Bruneian Z;Bukhara Z;Burgundian State;Buyid z;Byzantine Z;Caliphate of C\u00f3rdoba;Cao Wei;Carthaginian Z;Cebu Rajahnate;Chagatai Khanate;Chalukya z;Chauhan z;Chav\u00edn Z;Chenla;Chera z;Chola z;Comanche Z;Congo Free State;Crimean Khanate;Dacian Z;Delhi s;Demak s;Durrani Z;Dutch Z;Egyptian Z;Elamite Z;Exarchate of Africa;Abyssinia;Fatimid Caliphate;First French Z;Frankish Z;Funan;Gallic Z;Gaza Z;Republic of Genoa;German Z;Ghana Z;Ghaznavid z;Ghurid z;Goguryeo;Goryeo;Gorkha Z;G\u00f6kt\u00fcrk Khaganate;Golden Horde;S Gowa;Seljuq Z;Gupta Z;Hafsid Y;Han z;Hanseatic League;E Harsha;Hephthalite Z;Hittite Z;Holy Roman Z;Hotak z;Hoysala Z;Hunnic Z;Husainid z;Idrisid z;Ilkhanate;K Israel;K Judah;Inca Z;Italian Z;E Japan;Jin z;Johor Z;Jolof Z;Joseon;Kaabu Z;Kachari Y;Kalmar Union;Kanem Z;Kanva z;Kara-Khanid Khanate;Kazakh Khanate;Khazar Khaganate;Khmer Z;Khilji z;Khwarazmian z;Kievan Rus';Konbaung z;Kong Z;Korean Z;Kushan Z;K Kush;Lakota;Latin Z;Later L\u00ea z;Liao z;Lodi s;Khmer Z;Macedonian Z;Majapahit Z;Mali Z;Malacca Z;Mamluk s;Manchukuo;Maratha Z;Marinid z;Massina Z;Mataram s;Mauretania;Mauryan Z;Median Z;Mlechchha z;Ming z;Mitanni Z;Mongol Z;Mughal Z;Nanda Z;Nguy\u1ec5n z;North Sea Z;E Nicaea;Numidia;Omani Z;Ottoman Z;Oyo Z;Pagan Z;Pahlavi z;Pala Z;Palmyrene Z;Parthian Z;Pontic Z;Portuguese Z;K Prussia;Ptolemaic Z;Qajar z;Qara Qoyunlu;Qin z;Qing z;Ramnad Sethupathis;Rashidun Caliphate;Rashtrakuta z;Roman Z;Rouran Khaganate;Rozwi Z;Rustamid z;Russian Z;Tsardom of Russia;Saadi z;Safavid z;Saffarid z;Sassanid z;Satavahana z;Samanid Z;Soviet Union;Saudeleur z;Duchy of Savoy;Seleucid Z;Serbian Z;Shu Han;Shang z;Siam Z;Sikh Z;Singhasari;Sokoto Caliphate;Song z;Songhai Z;Spanish Z;Srivijaya Z;Sui z;K Mysore;Shunga Z;S Sulu;Sumer;Sur Z;Swedish Z;Tahirid z;Tang z;T\u00e2y S\u01a1n z;S Ternate;E Thessalonica;German Reich;Tibetan Z;Tondo z;S Tidore;Timurid Z;K Tlemcen;E Trebizond;Toltec Z;Toungoo z;Toucouleur Z;Tu'i Tonga Z;Turgesh Khaganate;Umayyad Caliphate;Uyunid Emirate;Uyghur Khaganate;Uzbek Khanate;Vandal Y;Vijayanagara Z;Republic of Venice;Wari Z;Wassoulou Z;Wattasids;Western Roman Z;Eastern Wu;Western Xia z;Xin z;Yuan z;Zand z;Zhou z;Zulu Z;Yugoslavia;Kosovo;Sikkim;Kanem\u2013Bornu Z;Wadai Z;Ethiopian Z;Rozvi Z;Sasanian Z;E Vietnam;Shilluk Y;K Aksum;Gwiriko Y;Toro Y;Malindi Y;K Loango;K Mapungubwe;Ryukyu Y;K Cyprus;K Jerusalem;Garhwal Y;K Nepal;K Cambodia;Champa Y;Hanthawaddy Y;Phayao Y;K Sardinia;K Sicily;K Gwynedd;K Scotland;K Desmond;K Poland;K Hungary;K Croatia;K Bohemia;Albanian Y;K Georgia;K Portugal;Khanate of Sibir;K Romania;Cossack Hetmanate;Duchy of Bouillon;K Ireland;Lordship of Ireland;K Italy;Republic of Pisa;Idrisid z;Almoravid z;Almohad Caliphate;Marinid z;Wattasid z;Saadian z;Republic of Sal\u00e9;Rif Republic;K Kush;Makuria;Alodia;Ayyubid z;Mamluk s;Egypt Eyalet;K Fazughli;S Sennar;S Darfur;Mahdist State;S Egypt;K Egypt;Emirate of Cyrenaica;K Libya;Republic of Egypt;Republic of the Sudan;United Arab Republic;Libyan Arab Republic;Zirid z;Hafsid z;K Kuku;Regency of Algiers;Gurunsi;Liptako;Tenkodogo;Wogodogo;Yatenga;Bilanga;Bilayanga;Bongandini;Con;Macakoali;Piela;Nungu;K Sine;K Saloum;K Baol;K Cayor;K Waalo;Bundu;Bonoman;Gyaaman;Denkyira;Mankessim Y;K Dahomey;Oyo Z;K Nri;Aro Confederacy;Kwararafa;Biafra;Buganda;Bunyoro;Ankole;Busoga;Tanganyika;Kuba Y;K Luba;K Lunda;Yeke Y;K Ndongo;Kasanje Y;K Matamba;Mbunda Y;Chokwe Y;Kazembe Y;K Butua;Ndebele Y;Mthethwa Z;Bophuthatswana;Ciskei;Transkei;Venda;Rhodesia;Kart z;Nogai Horde;Khanate of Bukhara;Khanate of Khiva;Khamag Mongol;Northern Fujiwara;Kamakura Shogunate;Ashikaga Shogunate;Jaxa;Republic of Ezo;Jiangxi Soviet;Hunan Soviet;Guangzhou Commune;Gojoseon;Alaiye;Beylik of Bafra;Kara Koyunlu;Kars Republic;K Iraq;Arab Federation;Kar-Kiya z;Baduspanids;Marashiyan z;Afrasiyab z;Mihrabanid z;Safavid Iran;Sheikhdom of Kuwait;Bani Khalid Emirate;Emirate of Diriyah;Emirate of Najd;Muscat and Oman;Emirate of Riyadh;S Najd;K Hejaz;Fadhli s;Emirate of Beihan;Emirate of Dhala;S Lahej;Republic of Kuwait;K Cochin;Jaffna Y;Laur Y;Pandya z;Jaunpur s;Jaintia Y;Hyderabad State;Travancore;Udaipur State;Manikya z;Lan Xang;K Vientiane;K Champasak;Lao Issara;K Laos;Pyu States;Ava;Mon Ys;Pegu;K Mrauk U;Taungoo z;Shan States;Arakan;Raktamaritika;Singhanavati;Dvaravati;Ngoenyang;Hariphunchai;Tambralinga;Lavo Y;Langkasuka;Sukhothai Y;S Singora;Ayutthaya Y;Thonburi Y;Lan Na;Pattani Y;Jambi s;Palembang s;S Deli;S Langkat;S Serdang;S Cirebon;K Pajang;K Bali;Bima s;K Larantuka;K Banggai;Luwu;S Bone;Caucasian Albania;Kabardia;Circassia;K Abkhazia;Elisu s;Avar Khanate;Caucasian Imamate;K Imereti;K Kartli;K Kakheti;Crown of Aragon;Emirate of Granada;K Majorca;Crown of Castile;K Haiti;Cocoll\u00e1n;Zapotec Civilization;Mosquito Y;Somoza Regime;Iroquois Confederacy;Cherokee Nation;Vermont Republic;State of Muskogee;K Alo;K Sigave;K Fiji;K Nauru;K Chile;Muisca Confederation;El Stronato;K Chimor;Jungle Republic;Liga Federal;Supreme Junta;Weimar Republic;K Bavaria;Bremen;Frankfurt;Hamburg;K Hanover;Holstein;Lippe;Nassau;Oldenburg;Pomerania;Reuss;Saxe-Altenburg;Saxony;Schleswig;Waldeck;W\u00fcrttemberg;Helvetic Republic;Republic of Florence;Duchy of Urbino;Republic of Cospaia;Duchy of Lucca;Duchy of Mantua;Duchy of Milan;Papal States".split(";");
                k = "Antin Mark Artem Viktor Pasha Maxim Rodion Yuri Lev Luka Ivan Igor Nikita Leonid Daniil Alexei Boris Sasha Yulia Luda Yana Kira Alisa Polina Mischa Mila Inessa Alyona Alina Anya Anna Maria Sofia Walda Uta Tyra Tanka Svea Saskia Runa Rigmor Ostara Nanna Lykke Kunna Irma Iduna Helga Gudrun Gisela Gerda Gelsa Freya Frauke Ferun Elke Eila Dagmar Ariald Dagwin Eckwin Edmund Eike Erkmar Erwin Falko Frowin Gerbod Gunnar Halvor Irvin Knut Leif Lando Odin Oswin Ragin Rainer Rango Sarolf Thor Ulf Wolf Sarah Emma Laura Chloe Marie L\u00e9a Emily Keyla Manon Julie Julia Alice Kim Lisa Kora Clara Sara Lucie Anais Grace Eva Zoe Lee Katie Jade Ines Lily Amy Megan Lucy Elisa Kate Mary Elise Nina C\u00e9lia Ma\u00ebva Kayla Elysa Lena Amber Kelly Jenny Lola Mia Abby Ella Diana Fanny Ellie Ana Cindy Elena Rose Erin Molly Park Jane Lina Bella Lou Alex Irene Elsa Leah Holly Maya Linda Carla Anne Paige Annie Jenna Karen Lydia Haley Hanna Wendy Luna Naomi Sonia Fiona Helen Ambre Jess Angel Leila Lara Tina Ann Laur\u00e9 Chen Daisy Paula Iris Ruby Minji Marta Sam Erika Nora Nadia Eve Erica Ava Wang Choi Yujin Jin Yang Hina Beth Lucia Faith Jiwon Ad\u00e8le Alexa Min Flora Nancy Lili Lexi Cloe Hana Lin Kenza Lise Li Mina Angie Lotte Sandy Vicky May Jamie Joy Jeong Tara Sally Merve Diane Maddy Lilly Alix Zhang Gabby Abbie Liz Ellen Rita Olga Dana Elif Maud Sunny Joyce Liu Jieun Rosie Becky Jung Ilona Kylie Ruth Kat Han Nikki Kang Tania Dasha Cathy Aline Jo Ally Lilou Sujin Tanya Amina Yu Aya Katy Becca Rosa Paola Anita Sumin Betty Subin Tessa Heidi Tori Lila Imane Yoon Allie Farah Ciara Gina Yejin Song Susan Niamh April Izzy Aude Liza Salma Ivy Elina Liya Sue Gwen Maia Mimi Mandy Nana Sanne Hope Ariel Eliza Daria Yuna Evie Aimee Avery Agn\u00e8s Stacy Jisu Madi Riley Carly Lia Irina".split(" ");
                var x = "K ; Y;E ; Z; z; s;S ".split(";")
                    , n = "Kingdom of ; Kingdom;Empire of ; Empire; Dynasty; Sultanate;Sultanate of ".split(";");
                for (t = g.length - 1; 0 <= t; t--)
                    for (l = x.length - 1; 0 <= l; l--)
                        g[t] = g[t].replace(x[l], n[l])
            }
            ;
            this.jT = function () {
                if (dr.ds && dr.dt.zj) {
                    var t;
                    for (t = g_playerCount; t < g_unclaimedLandIndex; t++)
                        g_playerNameArray[t] = dr.dt.zj[t % g_maxPlayerCount]
                } else if (9 === dv) {
                    var l = ce.random()
                        , x = k.length
                        , n = g_playerCount + e2.e3;
                    for (t = n - 1; t >= g_playerCount; t--)
                        g_playerNameArray[t] = "[Bot] " + k[(t + l) % x];
                    for (t = n; t < g_unclaimedLandIndex; t++)
                        g_playerNameArray[t] = "[Zombie] " + k[(t + l) % x]
                } else if (g_isSingleplayer)
                    for (l = ce.random(),
                             t = g_playerCount; t < g_unclaimedLandIndex; t++)
                        g_playerNameArray[t] = g[(t + l) % g_unclaimedLandIndex];
                else
                    for (l = k.length,
                             x = ce.random(),
                             t = g_playerCount; t < g_unclaimedLandIndex; t++)
                        g_playerNameArray[t] = "[Bot] " + k[(t + x) % l]
            }
            ;
            this.jU = function () {
                var t;
                if (jt.rG.a1S && !g_isSingleplayer) {
                    a1T = Array(g_playerCount);
                    var l = g_playerCount;
                    var x = k.length;
                    var n = ce.a1U();
                    for (t = 0; t < l; t++)
                        a1T[t] = g_playerNameArray[t],
                            g_playerNameArray[t] = k[(t + n) % x];
                    g_playerNameArray[g_localPlayerIndex] = a1T[g_localPlayerIndex]
                }
            }
        }

        function ko() {
            this.a1Y = [];
            this.a1Z = [];
            this.bp = function () {
                this.a1Y = [];
                this.a1Z = []
            }
            ;
            this.dF = function () {
                0 <= this.a1Y.length && this.a1a(this.a1Y);
                0 <= this.a1Z.length && this.a1a(this.a1Z)
            }
            ;
            this.a1a = function (g) {
                var k, t = -1;
                for (k = g.length - 1; 0 <= k; k--)
                    if (g[k].gc--,
                    0 >= g[k].gc) {
                        t = k;
                        break
                    }
                for (k = t; 0 <= k; k--)
                    g.shift()
            }
            ;
            this.lO = function (g, k, t) {
                return this.a1c(this.a1Y, g, k, t)
            }
            ;
            this.a1d = function (g, k, t) {
                return this.a1c(this.a1Z, g, k, t)
            }
            ;
            this.a1c = function (g, k, t, l) {
                var x;
                a: {
                    var n;
                    for (x = t.length - 1; 0 <= x; x--)
                        for (n = g.length - 1; 0 <= n; n--)
                            if (g[n].player === t[x] && k === g[n].id) {
                                x = true;
                                break a
                            }
                    x = false
                }
                if (x)
                    return false;
                if (l)
                    for (l = t.length - 1; 0 <= l; l--)
                        g.push({
                            player: t[l],
                            id: k,
                            gc: 384
                        });
                return true
            }
        }

        var g_playerNameArray, a1T, g_isPlayersAliveArray, d0, d3, cz, d2, g_playerLandArray, ha, g_playerBalanceArray, b4, bM, bN, bQ, fT;

        function jO(g) {
            var k;
            a1T = g_playerNameArray = Array(g_unclaimedLandIndex);
            g_isPlayersAliveArray = new Uint8Array(g_unclaimedLandIndex);
            d0 = new Uint16Array(g_unclaimedLandIndex);
            d3 = new Uint16Array(g_unclaimedLandIndex);
            cz = new Uint16Array(g_unclaimedLandIndex);
            d2 = new Uint16Array(g_unclaimedLandIndex);
            g_playerLandArray = new Uint32Array(g_unclaimedLandIndex);
            ha = new Uint32Array(g_unclaimedLandIndex);
            g_playerBalanceArray = new Uint32Array(g_unclaimedLandIndex);
            b4 = Array(g_unclaimedLandIndex);
            bM = Array(g_unclaimedLandIndex);
            bN = Array(g_unclaimedLandIndex);
            bQ = Array(g_unclaimedLandIndex);
            fT = new Uint8Array(g_unclaimedLandIndex);
            for (k = g.length - 1; 0 <= k; k--)
                g_playerNameArray[k] = g[k].name,
                    fT[k] = g[k].xY
        }

        function km() {
            this.nZ = 0;
            this.i8 = null;
            this.bp = function () {
                this.nZ = 0;
                this.i8 = []
            }
            ;
            this.fo = function (g) {
                this.i8.push(g);
                iw++;
                fT[g] = 2;
                a1T[g] = "Bot";
                jt.rG.a1S && (g_playerNameArray[g] = "Bot");
                b5.qv[g] = (b5.qv[g] + 2) % 4;
                g === g_localPlayerIndex && (eW.show(false, false),
                    eB.tL());
                eA.ml(g)
            }
            ;
            this.fh = function (g) {
                var k;
                if (2 !== fT[g]) {
                    var t = this.i8;
                    for (k = t.length - 1; 0 <= k; k--)
                        if (t[k] === g) {
                            t.splice(k, 1);
                            break
                        }
                }
            }
            ;
            this.dF = function () {
                g_isSingleplayer || (30 === this.nZ && this.a1g(),
                    this.nZ = (this.nZ + 1) % 60)
            }
            ;
            this.a1g = function () {
                var g, k = this.i8;
                for (g = k.length - 1; 0 <= g; g--) {
                    var t = k[g];
                    if (ae.dD(t)) {
                        var l = Math.max(Math.min(100, g_playerBalanceArray[t]), as(12 * g_playerBalanceArray[t], 100));
                        100 > l || (0 === bM[t].length ? !dE.dF(t, 2) && dA && dI(t, l, 0, 0) : dA ? dT(t, l) : db(t, l))
                    }
                }
            }
        }

        function ki() {
            function g(l) {
                return t[l].a1n && k[l].a1s()
            }

            this.wK = 5;
            this.wL = this.wK - 1;
            this.vR = this.wK + this.wL;
            var k;
            this.a1j = null;
            var t;
            this.w0 = this.jc = 0;
            this.bp = function () {
                var l;
                this.a1j = Array(this.wK);
                this.a1j[0] = "territorial.io";
                var x = ce.a1U(0);
                ce.jN(0);
                for (l = 1; l < this.wK; l++)
                    this.a1j[l] = m.iZ() + ".territorial.io";
                ce.jN(x);
                k = Array(this.vR);
                t = Array(this.vR);
                for (l = this.vR - 1; 0 <= l; l--)
                    t[l] = {
                        a1n: false,
                        gc: 0,
                        a1o: false
                    }
            }
            ;
            this.n0 = function () {
                return this.w0 < this.wK ? this.w0 : this.w0 - this.wL
            }
            ;
            this.dF = function () {
                for (var l = this.vR - 1; 0 <= l; l--)
                    this.vN(l) && c4.gc > t[l].gc + 15E3 && ir.a1p(l, t[l].a1o)
            }
            ;
            this.rk = function (l, x) {
                if (!t[l].a1n)
                    return this.a1r(l, x),
                        false;
                if (k[l].a1s())
                    return k[l].a1t(x),
                        k[l].vN();
                k[l].lF();
                this.a1r(l, x);
                return false
            }
            ;
            this.a1r = function (l, x) {
                t[l].a1n = true;
                t[l].gc = c4.gc;
                t[l].a1o = false;
                k[l] = new a1v;
                k[l].bp(l, x)
            }
            ;
            this.a1t = function (l, x) {
                g(l) && k[l].a1t(x)
            }
            ;
            this.a1w = function (l, x) {
                0 === x ? jg.rm() : 3 > x ? ir.uJ(l, x - 1) : 3 === x ? ir.xU(l) : 4 === x ? ji.rm(l) : 5 === x ? l === this.jc && ir.a1x() : 6 === x ? ir.a1y(l) : 7 === x && ir.xu(l)
            }
            ;
            this.vN = function (l) {
                return t[l].a1n && k[l].vN()
            }
            ;
            this.send = function (l, x) {
                t[l].gc = c4.gc;
                t[l].a1o = false;
                k[l].send(x)
            }
            ;
            this.pK = function (l) {
                t[l].a1o = true
            }
            ;
            this.close = function (l, x) {
                g(l) && k[l].close(x)
            }
            ;
            this.a20 = function (l, x) {
                jj.vX(x);
                g(l) && k[l].close(x)
            }
            ;
            this.vZ = function (l) {
                for (var x = this.vR - 1; 0 <= x; x--)
                    this.close(x, l)
            }
            ;
            this.a21 = function (l, x) {
                for (var n = this.vR - 1; 0 <= n; n--)
                    n !== l && this.close(n, x)
            }
            ;
            this.a22 = function (l, x) {
                k[l].lF();
                jj.bp(l, x.code)
            }
        }

        var dZ, dY;

        function jV() {
            var g;
            dY = 0;
            for (g = g_unclaimedLandIndex - 1; 0 <= g; g--)
                0 !== g_isPlayersAliveArray[g] && dY++;
            dZ = new Uint16Array(dY);
            var k = 0;
            for (g = 0; g < g_unclaimedLandIndex; g++)
                0 !== g_isPlayersAliveArray[g] && (dZ[k++] = g)
        }

        function eL() {
            a23();
            fn()
        }

        function fn() {
            for (var g = dY - 1; 0 <= g; g--)
                0 === g_isPlayersAliveArray[dZ[g]] && a24(g)
        }

        function a24(g) {
            for (dY--; g < dY; g++)
                dZ[g] = dZ[g + 1]
        }

        function a23() {
            for (var g, k = dY - 1; 0 <= k; k--)
                g_playerLandArray[dZ[k]] <= as(ha[dZ[k]], 4) ? 1E3 >= g_playerLandArray[dZ[k]] && (2 !== g_isPlayersAliveArray[dZ[k]] || 0 === g_playerLandArray[dZ[k]]) && fm(dZ[k]) : g_playerLandArray[dZ[k]] >= ha[dZ[k]] ? ha[dZ[k]] = g_playerLandArray[dZ[k]] : (g = as(ha[dZ[k]] - g_playerLandArray[dZ[k]], 1E3),
                    ha[dZ[k]] -= 1 > g ? 1 : g)
        }

        function it() {
            var g, k = 0;
            for (g = dY - 1; 0 <= g; g--)
                k += g_playerBalanceArray[dZ[g]];
            return k % 4096
        }

        var p5, cH, a25, a26, r, s, pI, bq, gE, cB, pM, a27, g_isIOSUser, c, e, d, q, a28 = false, a29, a2A, i, gy, tM, h8,
            a5, b0, hv, vh, c4, dW, eT, cD, fi, vp, nU, uS, a2B, a2C, a2D = 0, a2E = "", a2F = false;

        function a2G() {
            a2C = 2;
            a26 = 4019;
            a25 = "1.83.6   10 May 2023";
            jw();
            d8();
            a2F = true;
            d = (e = "undefined" !== typeof Android ? Android : null) ? e.getVersion() : 0;
            12 <= d && e.prepareAd("6685097465");
            g_isIOSUser = false;
            window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.iosCommandA && (g_isIOSUser = true,
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
            a2B = (new Date).getTime() % 1024;
            a29 = a2H();
            f.bp();
            vp = new um;
            jt.bp();
            jq.bp();
            h();
            p();
            aD();
            document.addEventListener ? document.addEventListener("contextmenu", function (g) {
                g.preventDefault()
            }, false) : document.attachEvent("oncontextmenu", function () {
                window.event.returnValue = false
            });
            a2I();
            document.addEventListener("keyup", a2J);
            document.addEventListener("keydown", a2K);
            document.addEventListener("visibilitychange", a2L);
            window.addEventListener("error", a2M, true);
            tM = 10;
            xE = new a2N;
            gy = new a2O;
            h8 = new tw;
            a5 = new ng;
            b0 = new a2P;
            hv = new a2Q;
            vh = new nO;
            c4 = new a2R;
            c4.jd();
            c4.bp();
            dW = new a2S;
            eT = new a2T;
            uS = new bm;
            uS.bp();
            cD = new u2;
            cD.bp();
            fi = new ib;
            nU = new ub;
            p1();
            ce.bp();
            ay.a0E();
            jm.bp();
            jQ.bp();
            aJ.bp();
            jv.bp();
            eD.bp();
            jg.bp();
            jS.bp();
            p4();
            bw.bp();
            c4.c5 = true;
            setTimeout(function () {
                xD(2, 14071)
            }, 0)
        }

        function aI() {
            a2F || a2G()
        }

        function a2H() {
            try {
                return window.self !== window.top
            } catch (g) {
                return true
            }
        }

        function a2M(g) {
            a28 || (a28 = true,
                g.message ? (a2D = g.lineno,
                    a2E = g.message,
                eD.rk(0, 6) && ir.a1y(0),
                    g = "[A_ERROR " + a2D + "][" + a2E + "]",
                    a2U(g)) : (g = "[B_ERROR " + g.type + "][" + (g.srcElement || g.target) + "]",
                    console.log(g)))
        }

        function a2U(g) {
            e ? e.showToast(g) : alert(g)
        }

        function a2K(g) {
            "ArrowLeft" === g.key ? gn.w8(3) : "ArrowUp" === g.key ? gn.w8(0) : "ArrowRight" === g.key ? gn.w8(1) : "ArrowDown" === g.key ? gn.w8(2) : "a" === g.key ? eR.r3(.96875) : "d" === g.key ? eR.r3(32 / 31) : "s" === g.key ? eR.r3(.875) : "w" === g.key ? eR.r3(8 / 7) : "1" === g.key ? eR.r3(5 / 6) : "2" === g.key ? eR.r3(1.2) : "c" === g.key && 0 !== fZ && hv.a2V()
        }

        function a2L() {
            "hidden" === document.visibilityState ? c4.a2W() : c4.xn()
        }

        function a2J(g) {
            400 > c4.gc || (8 !== aJ.pY() && aJ.ul(g) ? c4.c5 = true : "Escape" === g.key ? aJ.aK() : "ArrowLeft" === g.key ? gn.a2X(3) : "ArrowUp" === g.key ? gn.a2X(0) : "ArrowRight" === g.key ? gn.a2X(1) : "ArrowDown" === g.key ? gn.a2X(2) : "h" === g.key && 1 <= fZ && (g_uiVisibility = !g_uiVisibility,
                c4.c5 = true))
        }

        function a2I() {
            a27 = window.location.hostname;
            a2A = 0 <= a27.toLowerCase().indexOf("territorial.io")
        }

        function kP() {
            var g;
            this.bp = function () {
                g = [];
                9 === dv && this.a2Z()
            }
            ;
            this.a2Z = function () {
                var k = [8, 51, 68, 88, 138, 178, 313];
                var t = [35, 330];
                this.e3 = 0;
                this.e4 = [0, 0, 0, 0, 0, 0];
                g_playerCount <= k[0] ? (this.e3 = t[0] - g_playerCount,
                    this.e4[1] = t[1] - as(t[1] * g_playerCount, k[0]),
                    this.e4[0] = 512 - this.e4[1] - t[0]) : g_playerCount <= k[1] ? (this.e3 = t[0] - k[0] - as((t[0] - k[0]) * (g_playerCount - k[0]), k[1] - k[0]),
                    this.e4[0] = 512 - this.e3 - g_playerCount) : g_playerCount <= k[2] ? (this.e4[0] = 512 - k[1] - as((512 - k[1]) * (g_playerCount - k[1]), k[2] - k[1]),
                    this.e4[1] = 512 - g_playerCount - this.e4[0]) : g_playerCount <= k[3] ? (this.e4[1] = 512 - k[2] - as((512 - k[2]) * (g_playerCount - k[2]), k[3] - k[2]),
                    this.e4[2] = 512 - g_playerCount - this.e4[1]) : g_playerCount <= k[4] ? (this.e4[2] = 512 - k[3] - as((512 - k[3]) * (g_playerCount - k[3]), k[4] - k[3]),
                    this.e4[3] = 512 - g_playerCount - this.e4[2]) : g_playerCount <= k[5] ? (this.e4[3] = 512 - k[4] - as((512 - k[4]) * (g_playerCount - k[4]), k[5] - k[4]),
                    this.e4[4] = 512 - g_playerCount - this.e4[3]) : g_playerCount <= k[6] ? (this.e4[4] = 512 - k[5] - as((512 - k[5]) * (g_playerCount - k[5]), k[6] - k[5]),
                    this.e4[5] = 512 - g_playerCount - this.e4[4]) : this.e4[5] = 512 - g_playerCount;
                t = this.e3;
                for (k = 0; 6 > k; k++)
                    t += this.e4[k];
                if (t > dq) {
                    for (k = this.e3 = 0; 5 > k; k++)
                        this.e4[k] = 0;
                    this.e4[5] = dq
                }
            }
            ;
            this.zN = function (k) {
                g.push({
                    player: k,
                    mt: 14 + ce.cf(20)
                })
            }
            ;
            this.dF = function () {
                if (9 === dv) {
                    var k;
                    for (k = g.length - 1; 0 <= k; k--)
                        0 >= --g[k].mt && (eA.n2(g[k].player, 0, 46),
                            g.splice(k))
                }
            }
        }

        var aZ, aa, hs, pj, xB, xC, x0, x1, vk, za = 16, xE;

        function xD(g, k) {
            g %= za;
            if (g !== x0 || a2g(x0) && k !== x1) {
                var t = performance.now();
                vk = false;
                xE.xF();
                ce.jN(g);
                x0 = g;
                x1 = k;
                a2g(g) && (jm.bz(g).a1m = k);
                if (a2h(x0))
                    a2i(t);
                else {
                    var l = jm.bz(x0);
                    aZ = l.c1;
                    aa = l.cw;
                    ce.jN(l.a1m);
                    jn.jT([aZ, aa, l.gO, l.gL]);
                    a2j();
                    jQ.a2k();
                    jn.a2l();
                    a2m(t)
                }
            }
        }

        function a2m(g) {
            var k = performance.now();
            tM = Math.floor(29 - (k - g) / (33 * jm.bz(x0).per));
            tM = 0 > tM ? 0 : 20 < tM ? 20 : tM
        }

        function a2o() {
            return 10
        }

        function a2h(g) {
            return g >= a2o()
        }

        function a2g(g) {
            return !(1 === g || g >= a2o())
        }

        function a2p(g) {
            return 3 === g || 7 === g || 9 === g || g === za
        }

        function a2q(g) {
            return 2 === g || 7 === g || 9 === g
        }

        function a2N() {
            function g() {
                xE.dF()
            }

            function k(l, x) {
                0 < x && (xC[l] += x,
                    xC[l + 1] += x,
                    xC[l + 2] += x)
            }

            function t(l) {
                return xC[l + 2] > xC[l] && xC[l + 2] > xC[l + 1]
            }

            this.rf = -1;
            this.a2r = this.aA = 0;
            this.a2s = 8;
            this.a2t = 32;
            this.a2u = 8;
            this.a2v = 32;
            this.a2w = [0, 0];
            this.qv = [0, 0, 0, 0];
            this.a2x = null;
            this.a2y = true;
            this.a2z = false;
            this.xF = function () {
                -1 !== this.rf && clearTimeout(this.rf);
                this.rf = -1;
                this.a2x = null;
                jn.a2l()
            }
            ;
            this.bp = function () {
                7 === aJ.pY() || this.a2z || (this.a2y = true,
                    this.aA = 0,
                    this.a2r = 1,
                    this.a2w = [jm.bz(x0).a30[0], jm.bz(x0).a31[0]],
                    this.qv = [jm.bz(x0).a32[3], jm.bz(x0).a32[4], jm.bz(x0).a32[5], jm.bz(x0).a32[6]],
                    this.a2s = jm.bz(x0).a32[7],
                    this.a2t = jm.bz(x0).a32[8],
                    this.a2u = jm.bz(x0).a32[9],
                    this.a2v = jm.bz(x0).a32[10],
                    this.a2y ? this.rf = setTimeout(g, 16) : this.dF())
            }
            ;
            this.dF = function () {
                if (8 === aJ.pY() && eV.gd())
                    this.rf = setTimeout(g, 16);
                else {
                    if (0 === this.aA) {
                        var l = ce.a1U();
                        ce.jN(jm.bz(x0).a32[2]);
                        jn.jT([aZ, aa, jm.bz(x0).a32[0], jm.bz(x0).a32[1]]);
                        ce.jN(l);
                        this.a2x = jn.a34();
                        this.aA++;
                        if (this.a2y) {
                            this.rf = setTimeout(g, 16);
                            return
                        }
                    }
                    l = this.a2y ? 10 : 1E6;
                    l = aa - this.a2r - 1 < l ? aa - this.a2r - 1 : l;
                    l = this.a2r + l;
                    for (var x, n, z = this.a2r; z < l; z++)
                        for (var y = 1; y < aZ - 1; y++)
                            if (n = y + z * aZ,
                                x = 4 * n,
                                t(x))
                                this.a36(x, n, 1);
                            else {
                                this.a36(x, n, 0);
                                n = y;
                                var A = z;
                                (1 < n && t(x - 4) || n < aZ - 2 && t(x + 4) || 1 < A && t(x - 4 * aZ) || A < aa - 2 && t(x + 4 * aZ)) && this.a37(y, z)
                            }
                    this.a2r = l;
                    this.a2r >= aa - 1 ? (pj.putImageData(xB, 0, 0, 1, 1, aZ - 2, aa - 2),
                        c4.c5 = true,
                        this.xF()) : this.a2y && (this.rf = setTimeout(g, 16))
                }
            }
            ;
            this.a36 = function (l, x, n) {
                k(l, Math.floor(this.a2w[n] + this.qv[n] * this.a2x[x] / 1E4) - xC[l])
            }
            ;
            this.a3B = function (l, x, n, z, y) {
                k(l, Math.floor(this.a2w[z] + (1 - x / n) * y) - xC[l])
            }
            ;
            this.a37 = function (l, x) {
                var n = l - this.a2t;
                var z = x - this.a2t;
                var y = l + this.a2t
                    , A = x + this.a2t;
                n = 1 > n ? 1 : n;
                y = y > aZ - 2 ? aZ - 2 : y;
                A = A > aa - 2 ? aa - 2 : A;
                for (var B = 1 > z ? 1 : z; B <= A; B++)
                    for (var C = n; C <= y; C++)
                        if (z = 4 * (C + B * aZ),
                            t(z)) {
                            var E = this.a2s + (this.a2t - this.a2s) * this.a2x[C + aZ * B] / 1E4;
                            if (!(Math.abs(l - C) > E || Math.abs(x - B) > E)) {
                                var F = Math.sqrt((l - C) * (l - C) + (x - B) * (x - B));
                                F >= E || this.a3B(z, F, E, 1, this.qv[3])
                            }
                        } else
                            E = this.a2u + (this.a2v - this.a2u) * this.a2x[C + aZ * B] / 1E4,
                            Math.abs(l - C) > E || Math.abs(x - B) > E || (F = Math.sqrt((l - C) * (l - C) + (x - B) * (x - B)),
                            F >= E || this.a3B(z, F, E, 0, this.qv[2]))
            }
        }

        function a2j() {
            2 === x0 ? a3D([256], [256], [0, 205, 256], [500, 500, 0], [0, 0, 0]) : 7 === x0 ? a3D([512], [512], [0, 380, 512], [500, 500, 0], [0, 0, 0]) : 8 === x0 ? a3D([410], [410], [0, 120, 210], [0, 80, 640], [0, 0, 0]) : 9 === x0 && a3D([512], [512], [0, 70, 180, 200, 290, 420, 512], [500, 500, 0, 0, 500, 500, 0], [0, 0, 0, 0, 0, 0, 0])
        }

        function a3D(g, k, t, l, x) {
            var n, z, y, A = g.length - 1, B = aZ + aa;
            B *= B;
            var C = t.length;
            for (n = C - 1; 0 <= n; n--)
                t[n] *= t[n];
            var E = Array(C)
                , F = Array(C)
                , G = Array(C)
                , N = jn.a34();
            if (void 0 === x)
                for (x = Array(C),
                         n = C - 1; 0 <= n; n--)
                    x[n] = 0;
            for (n = 1; n < C; n++)
                E[n] = t[n] - t[n - 1],
                    F[n] = l[n] - l[n - 1],
                    G[n] = x[n] - x[n - 1];
            for (z = aZ - 1; 0 <= z; z--)
                for (y = aa - 1; 0 <= y; y--) {
                    var I = B;
                    for (n = A; 0 <= n; n--) {
                        var D = (z - g[n]) * (z - g[n]) + (y - k[n]) * (y - k[n]);
                        I = D < I ? D : I
                    }
                    D = l[C - 1];
                    var K = x[C - 1];
                    for (n = 1; n < C; n++)
                        if (I < t[n]) {
                            D = l[n - 1] + yd((I - t[n - 1]) * F[n], E[n]);
                            K = x[n - 1] + yd((I - t[n - 1]) * G[n], E[n]);
                            break
                        }
                    a3R(aZ * y + z, D, K, N)
                }
        }

        function a3R(g, k, t, l) {
            500 > k ? l[g] = as(l[g] * k * 2, 1E3) : 500 < k && (l[g] += as(2 * (1E4 - l[g]) * (k - 500), 1E3));
            l[g] += as(t * (10 * k - l[g]), 1E3)
        }

        function kQ() {
            var g;
            this.nJ = this.nI = this.nF = this.nE = 0;
            this.bp = function () {
                g = Array(a2o());
                g[0] = {
                    c1: [0, 5E3, 8E3, 1E4],
                    fB: [220, 250, 255, 220],
                    n4: [190, 220, 0, 0],
                    cm: [170, 200, 0, 0]
                };
                g[1] = {
                    c1: [0, 4E3, 5E3, 6E3, 1E4],
                    fB: [25, 0, 100, 0, 25],
                    n4: [25, 0, 0, 0, 25],
                    cm: [25, 0, 0, 0, 25]
                };
                g[2] = {
                    c1: [0, 500, 2500, 2999, 3E3, 3200, 4200, 5200, 5700, 8800, 1E4],
                    fB: [15, 15, 70, 40, 40, 40, 252, 40, 40, 20, 30],
                    n4: [80, 80, 190, 90, 40, 40, 248, 180, 180, 90, 140],
                    cm: [120, 120, 220, 110, 40, 40, 217, 10, 10, 10, 10]
                };
                g[3] = {
                    c1: [0, 400, 1800, 2E3, 3200, 4500, 6E3, 7700, 8500, 9500, 1E4],
                    fB: [10, 10, 20, 10, 30, 10, 16, 40, 55, 230, 230],
                    n4: [10, 10, 40, 50, 100, 40, 80, 120, 55, 230, 230],
                    cm: [80, 80, 200, 10, 60, 10, 16, 40, 55, 230, 230]
                };
                g[4] = {
                    c1: [0, 300, 1400, 1700, 3E3, 4E3, 1E4],
                    fB: [10, 10, 20, 10, 10, 170, 212],
                    n4: [20, 20, 60, 100, 100, 110, 170],
                    cm: [70, 70, 160, 30, 30, 60, 120]
                };
                g[5] = {
                    c1: [0, 1E3, 3E3, 3500, 4E3, 4500, 7E3, 7500, 8E3, 1E4],
                    fB: [10, 10, 20, 10, 5, 10, 20, 5, 20, 25],
                    n4: [30, 30, 50, 100, 30, 100, 140, 60, 140, 200],
                    cm: [80, 80, 200, 10, 5, 10, 20, 5, 20, 25]
                };
                g[6] = {
                    c1: [0, 700, 2650, 3200, 5E3, 8E3, 1E4],
                    fB: [10, 10, 60, 255, 255, 200, 200],
                    n4: [10, 10, 60, 255, 255, 200, 200],
                    cm: [80, 80, 255, 255, 255, 200, 200]
                };
                g[7] = {
                    c1: [0, 400, 1999, 2E3, 3200, 4E3, 4700, 5500, 6500, 9500, 1E4],
                    fB: [10, 10, 80, 255, 255, 55, 6, 70, 20, 155, 255],
                    n4: [10, 10, 90, 245, 245, 170, 80, 190, 20, 155, 255],
                    cm: [80, 80, 255, 235, 235, 55, 26, 10, 20, 155, 255]
                };
                g[8] = {
                    c1: [0, 700, 1300, 1900, 1901, 2500, 3400, 6E3, 1E4],
                    fB: [25, 30, 30, 30, 255, 255, 30, 40, 20],
                    n4: [25, 30, 150, 150, 245, 245, 80, 150, 70],
                    cm: [60, 170, 170, 170, 235, 235, 30, 40, 40]
                };
                g[9] = {
                    c1: [0, 400, 2009, 2010, 3300, 4E3, 5200, 6500, 8E3, 9500, 1E4],
                    fB: [10, 10, 80, 255, 255, 55, 23, 36, 20, 155, 255],
                    n4: [10, 10, 90, 245, 245, 170, 60, 160, 20, 155, 255],
                    cm: [80, 80, 255, 235, 235, 55, 9, 72, 20, 155, 255]
                }
            }
            ;
            this.a2k = function () {
                hs = document.createElement("canvas");
                hs.width = aZ;
                hs.height = aa;
                pj = hs.getContext("2d", {
                    alpha: false
                });
                var k = pj.getImageData(0, 0, aZ, aa);
                xC = k.data;
                var t = g[x0].c1, l = g[x0].fB, x = g[x0].n4, n = g[x0].cm, z, y, A = jn.a34(), B = t.length - 2,
                    C = Array(B + 1), E = Array(B + 1), F = Array(B + 1), G = Array(B + 1);
                for (y = B; 0 <= y; y--)
                    C[y] = t[y + 1] - t[y],
                        E[y] = l[y + 1] - l[y],
                        F[y] = x[y + 1] - x[y],
                        G[y] = n[y + 1] - n[y];
                for (z = aZ * aa - 1; 0 <= z; z--)
                    for (y = B; 0 <= y; y--)
                        if (A[z] >= t[y]) {
                            var N = A[z] - t[y];
                            xC[4 * z] = l[y] + yd(E[y] * N, C[y]);
                            xC[4 * z + 1] = x[y] + yd(F[y] * N, C[y]);
                            xC[4 * z + 2] = n[y] + yd(G[y] * N, C[y]);
                            xC[4 * z + 3] = 255;
                            break
                        }
                pj.putImageData(k, 0, 0);
                jm.a3V() && bw.bx() && jm.a3V() && (t = bw.l9("arena"),
                    pj.save(),
                    pj.globalAlpha = 1 === x0 ? .1 : 1,
                    pj.imageSmoothingEnabled = true,
                    k = 2.8,
                    pj.scale(k, k),
                    pj.drawImage(t, Math.floor((aZ / k - t.width) / 2), Math.floor(.5 * aa / k - t.height / 2)),
                    pj.restore(),
                    t = bw.l9("territorial.io"),
                    pj.save(),
                    pj.globalAlpha = 1 === x0 ? .1 : 1,
                    pj.imageSmoothingEnabled = true,
                    k = .87,
                    pj.scale(k, k),
                    pj.drawImage(t, Math.floor(.745 * (aZ / k - t.width)), Math.floor(.422 * aa / k - t.height / 2)),
                    pj.restore());
                vk = true;
                c4.c5 = true
            }
            ;
            this.jR = function () {
                var k, t = 0;
                var l = aa * aZ * 4;
                var x = g_pixelOwnerType
                    , n = xC;
                for (k = aZ - 1; 0 <= k; k--)
                    x[4 * k + 2] = 3,
                        x[l - 4 * k - 2] = 3;
                l = 4 * aZ;
                for (k = aa - 1; 0 <= k; k--)
                    x[k * l + 2] = 3,
                        x[k * l + l - 2] = 3;
                for (k = aZ * aa - 1; 0 <= k; k--)
                    l = 4 * k,
                    3 !== x[l + 2] && (n[l + 2] > n[l + 1] && n[l + 2] > n[l] ? x[l + 2] = 2 : (x[l + 2] = 1,
                        t++));
                this.nE = (aZ - 2) * (aa - 2);
                this.nJ = 0;
                if (a2p(x0)) {
                    n = 0;
                    l = g_pixelOwnerType;
                    var z = xC;
                    for (x = aZ * aa - 1; 0 <= x; x--)
                        k = 4 * x,
                        z[k] === z[k + 1] && z[k] === z[k + 2] && 3 !== l[k + 2] && (n++,
                            l[k + 2] = 3);
                    jQ.nJ = n
                }
                this.nF = j9 = t - this.nJ;
                this.nI = this.nE - this.nF - this.nJ
            }
        }

        function a2i(g) {
            var k;
            x0 === a2o() ? k = "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86fRU8Av6gRK76AeCE66hQ9IAw6iQ7IUu6kQ6IUu6lQy87EQmQofAK6Ak6nQUdA7F9D56nQAKAUQAKBA9F8D56nP9A9BKIBe57DaqQAGBeIBoSAKBAKjDGsQAFB6AySA7BUiDQrSKFCKCA6AyEDUcAKD6rV6AyFAoBCUc6yV6AyOB6C865WkBAEAKZ655X7Aod66M6a69Z967W5967W5967W5967W5867g5867g5867g5767q56675Z6675Z5676Z5676Z5676Z5676Zu77U6AKu678UyFEk78UyID9679UyID768L9yBA8A8DABAu8qEA8C769WEA8Cu95UoICG99T7AKGA9B9699UoKB77AUoLB56dAe69UyMBucAe69QUCBUCC7B6BGbAe7B58BABAeEAyYCAI6ZAe7B57B6AeHCUXAabAe7L57B7AKJCQ5UEHB57C7CQ5UEHB56C8CQ5eDHB57AUBCoV65eEG9QAZB965oEG9QAZB965yDG9QKZAUBAKCBa5yDG9QKZAKGAKEA665yDG9QUmAk5yDHB56AUED8AkxAUEAe7B565oAeCALyA7HV575oA8AyBOKGHf585qA8AKEN9Ay7p585sBVmAy7p595sBVkAo76P95uBLjAo76P9AKCAUB5rA8N6AK78Q55sA6V6Q65tAKQAMCQ756AGT8RF58AKBAz96RP6AFTz7P6oBTz7b59Rl58Rv57R675z7975V7975V7875f8HzSlwSbxSbxSbxSbxSlwSvvS56ZApRSuYA6L7S66WA6L7S656yBFeJL7S656yBFeIL8S656yDE8A9MB8556yEEoNMB8t6yFEAPMV8t6KJD7B8MV8t56BokB6Mz8t5UQD7B6M6S65yAyIAUlB7M6S65yAyuB7M7S75xAovB7M7S65yAeuCLZS75xAUuB6AoBM6S75xAKvB6NL87596BzhS759oPNz8959UPNz89589B8Nz9FsAKrB9Np9PqAUpCLiTV6oClyCD9C9M8Tf6oCloCD8DVaTz6UCloCDomMp9p6oCleBDUqMf9p6yClUBDUrMV9p67AN97AKFEABAfWTj66AKFD8M8TACAZ6yDAUnM8TACAZ66ELeT556ypNB9j67ELeTZ67EVeTP6ytNB9F67EffTF66EpfTZMAyDAUpEzfTZHByoE6NL9jDBKFAUpEfhTjCA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6Ao8i58m7Ae8Y59m7AK8O6O67us67us65u6ui68r6AKau8q6AyEAUau9qUUCE69p9B8AeFB7u8qASAyEB6u6qUSA7AUQu6qyPC5u6qyQC5u5q8BoZuscByZuifBAcA8A5s9rKHDKIA5s8r6AUmAUCtO78ti78AeCs9v7AUDs9wiwwsvwiwwsuw6s5w5s6wsuw6s5w7AyBr8xslx5r5x9rY99rZCq8ysay6q6y6qtJqPMBeGoFgP6BWe5lPKQW65pO7B8W55rOoXV95zN7C7V655VbEMK55pZEWI557MKtU8557MKuUj66LowP6AeFA7DF69LKyPySCZ8VDFL5oWB858pBFVyC8B5588J7FpqAeEC9Bt89Jy68M6EAJ59e9o7BYEUD598Je7pU6sJU76AoOKQsJU96J96sJU96J66vJU96JkyJK97Ja5U89J9B6AK7k5o88J9BKHAeFA9AK5k5y88KAKC6AeDEu58I7KKBEAs658I6OeGAoh659Iz5yf66K86PeFA7B666y8z68Bk6y8z7KH668Iz7eF669IwwI58vIwyISzIS6K7S66G587U59X9AQhF8X8AeqAZ9U5qlAopAj9e5gkAypAj96E9X7A6EAD6BEgmA7D9AkBEWoA6D8AuED8YKHD7AkID5YKHD7AkJDqrA6D6AkKDWsA6D6AkLDCtA7DyD6MC8Y8A6DoD6OC5ZAHDUE6NCqzA8DAE6QCM5eJC8AkTB8ZoKC7AkUB6ZyKC6AuYA9Z8BAZA56ZA7Z9BAaA589KJC6A589UIC6Aw9eJCoE6bAM67A8CoE6bAW67A7CoE6bAg66A9CUF897A8CKE899A9B9AeDAUGAS9AJB7A9AKH889A9B6B8888BKOCI87BKOCI88BKMCI89BKKCS9KLA7Cc9ULA6Cw9Un89Uo89Kq889Em88E5887E688yu886E5887E6887Ew87E5887E5887Ew88E5886E6886E788ov88ow88ov88yv88ow88ew88ey88K5m8Az88Az88AzH" : x0 === a2o() + 1 ? k = "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Fs69FKxJ6556KX78Fs7AxFATAK75558KX78Fi7KuFeSAU7t59KN8AzvKuFyQAU7t6BBmAxvetF7BoDHj6U99mUvvetF8BeEHZ6e98metvUvF9BUEHZ6e98monv7E7GKJAy7Z6o7UBC5mocAKGAUCv7C7IKHA6Hj6o7UCCr86B8BUCwKZIoGA6HZ66HUDCX88B6x7Ce8yFA6AeBG8567HUHB8nAHy6CA8yFA7AUCG8L6AOyHeIB5nUEy9B6I8AeJAUCG7L7AOyHyJBJIBe9ADA8AUDG6L8AOyH79aBK9UCA7AUEGzTAYxH99eAVBAyDG6L9AsvIJ99AAhAKHGpUA5s7IJ99AAoGpVA6sy8T99AAmAoCF9MUGsy8T99AAfAoJF8MeGsy8T99AAdA8A7F7MoFs6Id99AAcAyKF7MyEs6Id99AArF6M6AsuIx99AApFzdAYuI6999AAnFzcAYvI6999AAnFpcAeDAOrI6999AAmFpdAUEAOrI6999AAmFpdAoBAYrI6999AAlFpeAoBAYpI8999AAlFpeA6sU87999AAmFfeA7sU86999AAoFBgA7BACrK85999AAoE9NUJA7AsgIx99AAoEBpBKDA5re8x99AAqCACBpqB9ro8n99AAtB7AeMOeTr6IT99AAuAKDBKDAUBA9OoTr7H9999AA5yGA8A8OoUr8H5999AA59AoKAzuB7sU69999AA78AVwB7se58999AA9ABOyUso57999AChB8s9F8999ACgB6tK58999ACgB6tK59999ACgBs5U59999AA7eCP8Bi5U58999AA7eCB9AVnBO5U59999AA9oCN9BE5e59999AA9oBOAIt6F9999AA9eBOAHt7F9999AChA6t9GJ99AA7eBOUCBeGuAuAeK999AA7eFBKDMoEBAHuKuA6A6999AA7oGAyIMeFAUCAKBAeGuot999AA8yTMeKAeHuyu999AA8oSMeKAoFu8AoBEJ99AA8oSMULA6AO7KDAen999AA8eRMAOv8AKEEJ99AA8eRL8B5v8AeFD8999AA8eQL8Bs8AEAymAyB999AA76BpTBs8KEAeqAeC999AA7oOL9Bs8UDAyqAKE999AA7UOL9Bi8yCAypAeD999AA7UOL8BY87AeEEKDAn99AA7UNL7Bi88AeFET99AA77A9AUBL6Bs89AoEEd99AA76A9AUBLoNxeDAeq999AA77A6L8BtAET99AA79AzQB5yUo999AA8KBL6B6yon999AB9yUyen999AB9USy7ET99AB89B7zKo999AB87B7zon999AB8yRzyo999AB8oRzKCAKBAKn999AB8eSz8D9999AB8ATzyCAUk999AB8KUz6AUCDx99AB8KU5XDd99AB8UT5WDn99AB8KU5UAKCAKBDT99AB8AU5WAKDDT99AB78CFWAoCDT99AB78B85YAoDDJ99AB77B85ZAyCDJ99AB8KM5ZA8AKf999AB8UI5bAKCD8999AB8eD5eAKDD9999AB7yC5tD6999AB7eC5vEJ99AB67AjuEn99AHOEn99AHQET99AHQET99AHUD7999AHRAKDD6999AHLAeDD9999AHMAyCD7999AHNAyBD7999AHSAKCD5999AHTAUBD567UB999AAuD767UC999AAsAKBAyBDQ7UDAUD999AAoAyBDQ7UI999AAoAoDDQ7AF999AAtAKBAUBDa7ABAoC999AArAKCAKCDT99AHXAKDDJ99AHVAUDC8999AHZAKDC8999AHfC5999AHaAKDAKBC5999ABvAP8KCAoW999ABuAP8UDAKY999AHiCx99AHeAKECeyAT99AG76AKHCUsAoBA5999AG8KWEeEAUG999AG8eBAUSEUDAKG999AG76AKGAKEB8EADAUE999AG89CKlAUEAn99AG8oBAUU999AHmB9999AHkAKDBoDAd99AHmBUFA5999AHjBUDA9999AHkA9AeJ999AHhAKCA9AeJ999AHkBAIA6999AHgBKHA7999AHhAyCAoBAKCBT99AHfAUBAUHAUBBn99AHgAKCAUBAKDAKDBVoAn99AF96AKHBVpAn99AF9yBAeROAE999AF9KYOAD999AF9oZN6Ad99AF98CT99AHgAUCBn99AHtBn99AHuAKCAn99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AGIAd99AJ99AJ99AJ99AJ99ACdAd99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AH7oE999AH5eB999AJ99AJ99AFGAKBAT99AJ99AJ99AJ99AJ99AC9KB999AH5UBAoF999AHtAyCAd99AHtAyCAd99AHvAx99AHxA7AUC999AHlAUFA9AUF668Ad99AA6ABAeCAyJAeE668Ax99AA57AeCAKEA7AeBA7AQ67Ax99AA56AyFA6999AHrAKBAKDA7999AHwA88mAdFBHDAVgAxFA97FALfA5898AKHA969KEOAF899AKGA98kAxGBE89A8YeII7AnGBoCAs76B7TUOC8Bo8yF9EA9AKDAeCAKBvyUN6AUyCUVB6G7CxDA9AeCv7C7NUDE8DABAULB7AeED9AyNDw9yJAyCvydNADA7BoDAoEAyBAyDD7A8C7CKFAeEAeHBKr88ACA6BE8KbNAwAKoAKhB7CyKFABAc7UDAUCAKIAUBveCAycM6M9AKoA7F6AKE86yEAKLvoHAUhKoIAguAKE858AeCBO6yDA7Ee9yEAM6m58AoDA9u6AoGFo8g6686UCAoCAUGueGAU7o65bS69A6t7KoubyDAm6UGtVJD9c786yHszND7c886yHA6AOkL6DrABKC8sA7AoCoKFC6L9DhCBKD8cAUNB5n8A6CfUD5eAFAKGAcbA7BUPn7A7CBWDrP8aA9BUOAyCm8BUQMUggABAKCAwRBAFAUCB8AeCm6ByEAUIMUch58MAUCBADCyBAN8eSAUDA8MAZAKBiIMAKDBADCr8UbAKCAVWCXv799AoMBADCr7V58AKDB7jl99AyMBADC5c7AUOAUKAeEA6D7QUTj68RBKDCg8KDAeEBeKAKTCf69CD6ABAcIByDCWaAKLAKYAUOBoIEAHR8AUCBr6wAAeGByDCqjAecC6A5W6AKDBX76AKB78eIBUKAeZWAEA9AoUa7BD85777A8BeMAeaUeDBAFDC69BD8779UTAeZUeGA6AyOAKMbAMm9787AKCCKDCp96AUEA7AyHAKPAKDAq7AOnKDAR78AUBCyDCz9oDAUJA5d9Br9568yCA6AK8yLAUQAoXT7foNn667yIAeDAUBAKEIyGBALAySUXMBX9u79Cy96BeGCp95fUIn669oNG8AoTB6A8Cf9rQAN9969UCAKCByCBeCHAOA9Cf9bR68oDA7A6DACA6Ao8UbSvT68ABAyEBeEC6AUDA6FKGCUiR87S68oBA6CAeA7AUCA6AKUAeQA6AUBB6D7R87P6CA7GAFCU68B9A7AUCA8A6AKBA8D9R77W6DA9BABE6A8De5yRA9AoEA7AUEE9RbL6UA9AoKEAJB9A8Ae6yIB7Ao58RHI6cA8AoPA8AUHAUPBKSQB7KGAk9ulAeGBUJAUHAyRA7CL56R869QRAeLAoRAyZAyHA6A7AUXPp5yDB969aHAeZAKhCKGA6D7O8P6AUR69kEBAFAoKGUEAymOUBAf58AUL6896LKKnOKCAV7Q886FK8AyDBKOA9N8Ru8aMc9RQ8kEd8RQ8aBd8Q9AoD68F97Z6AKrQu9j9KHAM5yHDf587B59eKAM5eJCp6HF6IZeKCB5vJ6OZV777M6AAoMZp7RN577AKEBKQAyFZ6Q57QBKC56yRAeGA9az577VA9BF6KcAq77OvWA9AeDAj6q8AHCVp7Y585cKQA7JeND57YA8AZ6yEC5bzCB9DRa57oHCM5oGB7DeEGeVC97bAUB57UJB6Z9A8BUdA7GeWC87R588BASZ7EeJGoYC77I6AA9Cq5UmA8G7CoeCUF6696MAyiY7AeOB6A7G8CokA8A967a6C58B6Ao7AaE767k7MxFeFDAdE966668MpFyGC8C8F666D68" : x0 === a2o() + 2 ? k = "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" : x0 === a2o() + 3 ? k = "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C9AKsV957oMAolA6Ce7ABDABEqS57oPAenAKaG8AKfAKtV7568AUDI6GyCDUBE5V7568CAEG8GeBDyBEqQ568CAIG6GKBD6AKrV6568CKLGo59AKlAUqV656yBAKWBonAUVF8AKmAKpV656oCAUWB7DoFCA58AKmAKpV656oaCAgAoVF6AKnAKpV656ebCeeAoVFyBEABECP56KfCodAoSF6AU8MP56AhCocAyQFyEIMP559DoZC8AyPFUGIWO56AhC6C9AyPFAHIWO56AfC9C9A7BeJAUmA6IgO56AfC7DUGAeBA9A9AekBA8CO56AdDAfA6AUCA9A9AyiBA8CN56AeDKeBUHA9AyhBK8CN56AFAKYDKeC7AekBA8MN559AyBCygC9GyMICL56KEAUZDecFyBA9BU8WJ56AFAUUAUDDUdFoFA6BU8qG56KFAUUAUDDUdFUaIgG56KEAUTAoCDedE9C9IMI56KEAUSAyCDecE8DK8MF56oDAeREKbE7De8CF56UFAeSEKbEyhIWF56KHAeREUaEejIWF56KFAyQEUbEUjIgF56AFAyQEeaEeiIqE56KEA6B6EebEKiJB9956KDA7B6EebD9Dy9L9856UDA7B6EebD6D7JUHAf8756eCA8B6EUcDymJeIAV8657USEKdDemJyIAV8t7eTEAJAUSDejJ9A8AL8t7eTEAHAyRDUTL6A8AV8t7eSD9A8A6B6DUPMUGAV8t7eRD9A8A9ByfBpeS557USD7A8BKPDAOM9S657eSD7A7BeODALMyBAz8757eRD8A6ByNC9A7AoBMyBAp8857eRD9AyPBedA7AoBMoDAV8857eSEADB6BonAVXAeBS957eREUBB7BooALWTt7eRGKNEKBLoCAoMAV8F7oRGKMEUBLoDAeGAV8657oSGAMEeBLoKAV8757eTGAMEeBLz9857eTGKKEoBLp9957eTGKKEKFLgA57USGUJD7A9LWC57eRGoGDeOLWC57USGoFDeOLCF57UTGeEDeOK9U657eUGeBDyNK9U757eUGeBDeOK8U957UVGeBDUPK5VZ7UWGUBDAQKgQ57KXGKBDAQKgP57UXGABCKCAySKWR57UZF8AKRC7KKNAWF57KaF8AKRC7KAJAUBAgG57KaF8AKQC7KAJA5U957AbF7AKQC6KAJA6U857UaFyDB6CzAA9A6U957UaFoEByZKKHA7VF7UaFoHBUXKUEBCK57eaFeIBKYKKCBWK57oaFeIBKXKKDBWK576Co5eIA8AKBCVDAUKVZ77Co5eFA9C6KeBBMM578Co5UBBUaL5Vj78CozAKMC6LWR579CeyAKMCzNV7579CoyAKLCzFAKHV8578CyyAKKCfIAKEV958AZFABBAXK8Wt8KZE8AeJCBKWj8oYE7BACCBLWj8eZE7DVLWj8eYE8DLOWF86CUwDLQV7587CUwDBRV6588CKxC9L9V5589B9E9C9MCP59ARFAaMWQ59ARFUXMgQ59AQF6B6M7V659AQGKKM8V659AQGyCNWQ59KPT9V759APT9V759KOT9V859ANUMS59AJUqS59KHU5V8R7AiMA5U5WB7yE6WWB7yE6VWV7eG6UWV7eH6TWV7oG6TWV7yG6SWV7oI6SWL7oJ6QWL76A86QWL76A96PWL76BP96AUNWV78A9598AeLWV8KG599A7A6WV8KG6AA9AgVSUG588AKMA8AWWSUF589AKNA6AqVSUF588AUOA6AWWSeD588AePW9SeC588AoPXH7UEB6W877oDB7W777yBB8W777yBCCa77oCB9W677yBB9W777oBCCa77eCA6AKNW777UDAyCBWb77UFAeBBgc77KJBqb77UGB6W877KDB9W877KEB8W877UDB7W976eBA8AeRXH6UBA8AoPXR6KCA8AoQXR59AUKAoOXb59AeKAoNXb58A6A9A6BCg758AeBAoIA6A9XR6yIAUGA8Xb7UKAeBAgh77UKAKCAWjA6Ab6yLAgjAyG76UJAqkAoC768A7AqlAUC769A7AqmAKC769A7Aqp768A7A5X8AUB768A7A5X8AUB769A6A5X8AUCPAB6QA7AqnAKEO8AaPA8AqnAKEO7AkQA7AgnAUEO7AkRA6AgnAeDO7AaSA6AWoAoDO6AQTA7AMoAoDO6AQTA7AMoAyDOyB6TY877gw76KCAeBA7Y776KKAeGAMo769AoBA6AWn77AKAWo77KIAWo77UDA6YR8Cp78Ms777Y5776Y5777Yv78Yv77Yl78Yl79YR8Co78Mn78ql78qk78eBAMk78Wn78Cp778Yl77A8AMk77oFAUDAgi77KEA6AeDX577ADA8AKEX577KBA9AKFX578ABA5X5786X6785X6785X778Mp78Cp779Yb79Yb79Yl78Yl75Y7765Z7769Zb7C5Z69AL98Zj69AV97Zt69AV95Z5569AV95Z5569AV9yDAgx57ABTKFA5ZF69AV9KDA6Y957KBUCy57ACT8Zj68AV97Zt68AV97Z5567AV95Z7568Af9C6F68Af87aZ69Af87aZ7ACS5at7KCSg6557KCSW6657KBSW6675q6775g6875W6975W697zbHyb57ub87qcvkc57jc77ic77ic87hdHgdHedbddlXcKBB77Uc6AeCAeI7Sc8AUP7Pe77NfHKf57Ef97Cf97BgHCgHAgRAga98gk97g769rc69rc69hd69Xd69Xe69Dg689ha88h5686f9AUP68hHAKf68Dp679ik77iu77iyYAaxi6CoD6wi6CyE6ti8CyE6ri9CyE6ri9CyF6pjAaAupjAaAkohUBB9668heBB9667ju6r5766X5966r57658AKFj8657AeCj9657k5657ku57ku56k6655k765r6765r67CKB6gk7CAD6fk7CAD6fk6CKD6dk9CKC6dlAVAablKVAaaleVAQaloVAQZloVAQXl6CUB6Xl56vluvluvluvlkwluvluul6DUB6Ml7DAF6Jl7DAF6Jl7DAI6Fl8DAI6Fl9C9A96El9C9BAEAZ98l8C8BeCAj97l8C8BeBA6595l8C8CP9r79C7CZ9h79C6Cj9X8KYCt9X8UXC559N8eXCt9N8eXC559D8oXC9586meYC9586mUYC9586mKZDF85mKaC9586mAaC9586mAaC8587mKYC9588mAYC9589mAXC9589mKWC9589mKWC959D8KVC959N8AVC959N8AVC959N8AUDF9N79CKf59N78CKgx6Ae9N78CKgxyCEKBFX77CKgu6AKPAeGA6EAGE9l6CUguyBBoFAKND6A8E8l7CKhuoCBeFAKSC9BUul7CefueDBedCoNE6l6CeguUEA7DyWBovlyYDO6KxB9B6E6l6Coes6A8Ao5ePCUsl6Codsy67BeYEr77CUdse7KJC6Er78CUcsU7UIC8Er78CUasU7eFDerl8CKaqeEBU78AUjEh79CAZqUJA7L7EX8AUC5qBjEX8KTC5p9NyEAUlg9AKzB8C6p8A7ApeD7mKTC5p8A7AoFAVXD8mAUCscA6AVYD8mAUAyCB6rADAfYD9mATAyDB6r6MeomATAoDB6r6MonmAUAeDB6rzaD8mKUAUDB6m6AeuM6D8mKUAeEBr86AosM7D9mAUAoEB6mUGEBeD9mKTAoEB8mAJD6NKnmeRAyDB8mAJD7NAnmoQA6AKTj7AUVBAbAUINAmmoPCeCAN57AoUBKbAeIM8D8myOCAFANfAKWBUQAKDA6C7AoDAeEMymm6BySAyBhACBoZBADAUHC8BKFMKnmyTBoFANcAoNFKZN6EN8oUBeEAXcAeKF6B7AKGN6EN8yUBKFAhbAeJF7BoFAzkEX8oUBKFAraAUJF7BoIAfkEX8yTBoCA6goCA7GAGAKEO9Eh8ySChXAUGGoCAUDPAsmyQBABBrXAUDHKBPKsmyQA6AKSggcEr8yRCrXW8AoBD9kUBCUUCXVXADAKpj9AUVCUVgCfAUDED8KXCNTXUCAoomAXCXRXeCAoomAYCXQX8EX79CoWf6X7Ee5yCgKZChOX8EoeAeDAyNAXVCyYfWmE6C7BKBAULAhVCyZfCmE7C7A8AyBBKDe7AeLCyae8YKtCUCAeFCAEeyIA7Cyae5YogAULCeCAUECKDe6A9A7CobegtDKEBKXA6CUDe7BKGCUceWtDKFBAyAhJBKECedd6ZKdA6BAyAhJBUCCodc7AKHZecA6BAyAXLD7DC8UFAg58C8AyKFACfekDC8AHAM59C9AeLE9ArND6Dg77a7C8AeLFADfojDq77a7EX67Dyjb5a7EX67D7D7bW68ED66D9D6a9AKCa9D9k6EAja6AeCbekk7D9Dq66AoBbokk9D7Dg66cAklAlDW65cAlleiDW6M8yklohDW6M86D6loOAURDM6M88Dr76BUCB8DC6M89Dh77BKDB7DM59dKgl8BADB8DM57defl8A9AeUDM5q96DD79A8AUWDMyd9C9mUBAUDAUXDC5W97C9nAXDMzd8C7nUWDWyd9C5neXDqvd9C6nUXD7YrECKnAXzCelYrFCAnAoLAXkCUDAUhYrGB8D9AyKArlCKCAUiYhGB8EAFA9ArmCKBAeiYXHB7EAGjKYDqqe7B7EAGjUXDqqe9ByoA7jUXDgqfABAKLEAJjKYDWpfoKEAJjeWD9XrOA9EKJj6B9EChfeHEoJj7B9ECgfUFE6A9j8B9ECgfeDE7A9j9B8ECgfeBE9A9kARECgkoHkKRECgkyFAKFj6B8ECflKFj7B7EMek8A9j6B7EMelAIjyRECflKHj6B6D9XX7UGC9AhZBylXr7UGC9ANbBylXrDAK69A5j7BylXr7oEj7B6D5X5loEj6B7DqkloEj6B8Dgkt9AM7oTDWkseCBoEbKUDMlsKDByCbUUDgksACdAUDqjv7A5ZAVD6Xi76A5ZAWD6XY77AWzCemXHdConMUDKsmAM9AYEBUAzD7dCopL8A7KbdCyqMKBKldCyrWvcC6EqX7bC8EqW7bC9EoCAMSxo" : x0 === a2o() + 4 ? k = "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okA8BoDWK57x8D8A7FeCC7AoCAKDAUZDeMBAGWK56x8D8A8IeBDogBoIA7WU55x8D8A8L9DAQA6A8We55x7D7BKCAzLC8DCaFi97D8B7LKbDCdD9AUKx7EoPK9CoeXUiA6APFE8B6K6B8DMkC8z7E8B9KoODqoB95WFUPK9AonYoO5XFUQPMyA55aFUPAeEO578K5UWO678A5UWO678A6oJO778A7ADO778CTC6Ab5gSC8AUEAltV8DyE7rV7D7AvqV7D7A67oTUCCemAbrS9AoY78f7UEA9A7C578f7KSC878f7ASDH8V6UFAKTDR8V6UZDR8V6UZDR8V6eYDR8V6eZC978f6eTAeDC978f6eTD578f6UTD678f6eRD778f66AeEA6D878gR78gQ78qQ78qQ78qQ78qR787Vl9CK79MI79qG79qE798UM58APpUC57AjpT8Z7A55pT6Z8A65rTg58A75qTfCAp5UH5pTfDAzyA75qTfDAyMAQ86TLWAQ86TBXAa8z9BXAk8z88MoE68z86MyE686SzZA5686SfaA6688R9M6A869B76M6A769V7pbA669p7fcA569z7VdAvAQ68mQSrP78rP78sP68rP78rP68sP68sPmvPmwPcxPS5yDApm86Vl866Nm68NZ8ABdLc58ABdpZ58ABdzY58ACd9L958ADd8L858UCd8L758eCd9L658eCezK58eDezI58oDeymAe66586AXFDyHAyBAUFFZ86AXIDKKAUKAoCEt88ANNCegEZ89AXNCKhEP9KBfyQD7EJIBonD89KBAqD7B7AS9oIE6DUSAc9yEFAeB9AdyC9B8AnzC6CAD9zBUEA7CeC95eJA6An99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99ACeAT99AT99AT98Ad97Ax96Ax97AT99AABAT99AJ99AJ99AH6AC997Ax9yF99yE996A55lAO57A55lAY56A55lAY56A5bUBaoCt7Aq7UCaUEt7Aq7KDBUBY8A5t6Aq7KKAyFYyEt6Aq7KKAoHYoCt8A5a9BUBA97EAyhAMiClEA6DKCWoBAKf7EA7C9AgYDo5yF6sA6C7AqaDo5eH6qA8C6AqaDy5UH6qA9CyEW6D6FKC6wA8CyEW6D7FAG6sA8CyEWynFAG6rA8CyCW6EKzA56qA7CyDWKv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" : x0 === a2o() + 5 && (k = "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");
            k = m.iX(k);
            var t = jm.bz(x0).a30
                , l = jm.bz(x0).a31;
            aZ = 1E3 * k[0] + k[1];
            aa = 1E3 * k[2] + k[3];
            hs = document.createElement("canvas");
            hs.width = aZ;
            hs.height = aa;
            pj = hs.getContext("2d", {
                alpha: false
            });
            xB = pj.getImageData(0, 0, aZ, aa);
            xC = xB.data;
            for (var x = k.length, n = true, z = 0, y = 4; y < x; y++)
                if (n) {
                    for (; 0 < k[y]--;)
                        xC[z] = l[0],
                            xC[z + 1] = l[1],
                            xC[z + 2] = l[2],
                            xC[z + 3] = 255,
                            z += 4;
                    n = false
                } else {
                    for (; 0 < k[y]--;)
                        xC[z] = t[0],
                            xC[z + 1] = t[1],
                            xC[z + 2] = t[2],
                            xC[z + 3] = 255,
                            z += 4;
                    n = true
                }
            pj.putImageData(xB, 0, 0);
            vk = true;
            a2m(g);
            xE.bp();
            c4.c5 = true
        }

        function kR() {
            var g;
            this.bp = function () {
                g = Array(za);
                g[0] = {
                    name: "White Arena",
                    c1: 230,
                    cw: 230,
                    gO: 1E3,
                    gL: 2E3,
                    a1m: 173,
                    per: 1
                };
                g[1] = {
                    name: "Black Arena",
                    c1: 800,
                    cw: 800,
                    gO: 100,
                    gL: 50,
                    a1m: 43,
                    per: 1
                };
                g[2] = {
                    name: "Island",
                    c1: 512,
                    cw: 512,
                    gO: 128,
                    gL: 32,
                    a1m: 0,
                    per: 1.5
                };
                g[3] = {
                    name: "Mountains",
                    c1: 960,
                    cw: 960,
                    gO: 60,
                    gL: 8,
                    a1m: 0,
                    per: 1.2
                };
                g[4] = {
                    name: "Desert",
                    c1: 900,
                    cw: 900,
                    gO: 100,
                    gL: 5,
                    a1m: 0,
                    per: 1.2
                };
                g[5] = {
                    name: "Swamp",
                    c1: 1E3,
                    cw: 1E3,
                    gO: 100,
                    gL: 40,
                    a1m: 0,
                    per: 1.2
                };
                g[6] = {
                    name: "Snow",
                    c1: 1E3,
                    cw: 1E3,
                    gO: 100,
                    gL: 20,
                    a1m: 0,
                    per: 1.2
                };
                g[7] = {
                    name: "Cliffs",
                    c1: 1024,
                    cw: 1024,
                    gO: 128,
                    gL: 32,
                    a1m: 0,
                    per: 1.5
                };
                g[8] = {
                    name: "Pond",
                    c1: 820,
                    cw: 820,
                    gO: 200,
                    gL: 100,
                    a1m: 0,
                    per: 1.2
                };
                g[9] = {
                    name: "Halo",
                    c1: 1024,
                    cw: 1024,
                    gO: 128,
                    gL: 32,
                    a1m: 0,
                    per: 1.5
                };
                g[10] = {
                    name: "Europe",
                    a30: [140, 130, 120],
                    a31: [12, 12, 76],
                    a32: [240, 120, 4672, 30, 26, 30, 90, 8, 32, 3, 9],
                    per: 1
                };
                g[11] = {
                    name: "World",
                    a30: [165, 145, 125],
                    a31: [15, 15, 69],
                    a32: [250, 100, 8, 25, 15, 25, 90, 8, 32, 3, 9],
                    per: 1
                };
                g[12] = {
                    name: "Caucasia",
                    a30: [140, 130, 120],
                    a31: [20, 20, 84],
                    a32: [240, 120, 100, 30, 25, 30, 90, 8, 32, 3, 9],
                    per: 1
                };
                g[13] = {
                    name: "USA 48",
                    a30: [120, 105, 92],
                    a31: [12, 12, 60],
                    a32: [300, 300, 9827, 26, 18, 36, 36, 8, 32, 3, 9],
                    per: 1
                };
                g[14] = {
                    name: "Middle East",
                    a30: [140, 130, 120],
                    a31: [12, 12, 76],
                    a32: [240, 120, 4672, 30, 26, 30, 90, 8, 32, 3, 9],
                    per: 1
                };
                g[15] = {
                    name: "Scandinavia",
                    a30: [140, 130, 120],
                    a31: [12, 12, 76],
                    a32: [240, 120, 1024, 30, 19, 30, 70, 8, 20, 3, 9],
                    per: 1
                }
            }
            ;
            this.a3V = function () {
                return 1 === x0
            }
            ;
            this.bz = function (k) {
                return g[k]
            }
            ;
            this.nD = function () {
                return x0 === za ? dr.zX : this.bz(x0).name
            }
        }

        var ht, g_pixelOwnerType, jW, jX;

        function jP() {
            void 0 === ht && (ht = document.createElement("canvas"));
            ht.width = aZ;
            ht.height = aa;
            jW = ht.getContext("2d", {
                alpha: true
            });
            jX = jW.getImageData(0, 0, aZ, aa);
            g_pixelOwnerType = jX.data
        }

        function kS() {
            function g(J, L, H) {
                C[0] = J;
                for (J = 1; J < H; J++)
                    C[J] = C[J - 1] + L,
                        1E4 <= C[J] ? (C[J] = 9999,
                            L = -L) : 0 > C[J] ? (C[J] = 0,
                            L = -L) : (L += 16384 <= ce.random() ? B : -B,
                            L = L < -A ? -A : L > A ? A : L)
            }

            function k(J, L, H, M) {
                if (H)
                    for (H = 0; H < M; H++)
                        x[L * n + J + H] = C[H];
                else
                    for (H = 0; H < M; H++)
                        x[L * n + J + H * n] = C[H]
            }

            function t(J, L) {
                var H = J - C[L - 1];
                if (0 !== H) {
                    var M = 1 + as(Math.abs(H), L - 1);
                    M = 0 > H ? -M : M;
                    C[L - 1] = J;
                    var Q = L - 1 - as(Math.abs(H), Math.abs(M));
                    Q = 1 > Q ? 1 : Q > L - 2 ? L - 2 : Q;
                    for (var R = L - 2; R >= Q; R--)
                        C[R] += H - (L - 1 - R) * M;
                    if (0 > H)
                        for (H = L - 2; 1 <= H; H--)
                            0 > C[H] && (C[H] = -C[H] - 1);
                    else
                        for (H = L - 2; 1 <= H; H--)
                            1E4 <= C[H] && (C[H] = 2E4 - C[H] - 1)
                }
            }

            function l(J) {
                for (var L = 0; L < J.length - 1; L++)
                    J[L] = J[L + 1] - J[L];
                J[J.length - 1] = J[J.length - 3]
            }

            var x, n, z, y, A, B, C, E, F, G, N, I, D, K;
            this.jT = function (J) {
                n = J[0];
                z = J[1];
                A = J[2];
                B = J[3];
                x = new Int16Array(n * z);
                y = n > z ? n : z;
                C = new Int16Array(y);
                E = [];
                F = [];
                G = [];
                N = Array(n);
                I = Array(z);
                for (J = n - 1; 0 <= J; J--)
                    N[J] = false;
                for (J = z - 1; 0 <= J; J--)
                    I[J] = false;
                D = new Int16Array(n);
                K = new Int16Array(z);
                J = y;
                var L = ce.random() % 1E4
                    , H = ce.random() % (2 * A + 1) - A;
                g(L, H, J);
                J = K;
                L = C;
                H = z;
                for (var M = 0; M < H; M++)
                    J[M] = L[M];
                k(0, 0, true, n);
                J = x[0];
                L = y;
                H = ce.random() % (2 * A + 1) - A;
                g(J, H, L);
                J = D;
                L = C;
                H = n;
                for (M = 0; M < H; M++)
                    J[M] = L[M];
                k(0, 0, false, z);
                l(D);
                l(K);
                g(x[n - 1], D[n - 1], z);
                k(n - 1, 0, false, z);
                g(x[n * (z - 1)], K[z - 1], n);
                t(x[n * z - 1], n);
                k(0, z - 1, true, n);
                N[n - 1] = N[0] = true;
                I[z - 1] = I[0] = true;
                J = n;
                E.push(0);
                F.push(J);
                G.push(true);
                J = z;
                E.push(0);
                F.push(J);
                G.push(false);
                a: for (; ;) {
                    J = E.length - 1;
                    for (L = J - 1; 0 <= L; L--)
                        F[L] > F[J] && (J = L);
                    if (5 > F[J])
                        break;
                    L = E[J] + as(F[J], 2);
                    if (G[J]) {
                        H = void 0;
                        var Q;
                        M = L;
                        for (var R = 0, P = 0; P < z - 1;) {
                            for (Q = R + 1; Q < z; Q++)
                                if (I[Q]) {
                                    P = Q;
                                    break
                                }
                            Q = P - R + 1;
                            g(x[M + n * R], 0 === R ? D[M] : C[H - 1] - C[H - 2], Q);
                            t(x[P * n + M], Q);
                            k(M, R, false, Q);
                            H = Q;
                            R = P
                        }
                        N[M] = true
                    } else {
                        H = void 0;
                        M = L;
                        for (P = R = 0; P < n - 1;) {
                            for (Q = R + 1; Q < n; Q++)
                                if (N[Q]) {
                                    P = Q;
                                    break
                                }
                            Q = P - R + 1;
                            g(x[M * n + R], 0 === R ? K[M] : C[H - 1] - C[H - 2], Q);
                            t(x[M * n + P], Q);
                            k(R, M, true, Q);
                            H = Q;
                            R = P
                        }
                        I[M] = true
                    }
                    H = E[J] + F[J] - L;
                    M = G[J];
                    E.push(L);
                    F.push(H);
                    G.push(M);
                    F[J] = L - E[J] + 1
                }
                for (J = 0; J < n; J++)
                    if (!N[J])
                        for (L = 0; L < z; L++)
                            I[L] || (H = x[L * n + J - 1] + x[(L - 1) * n + J],
                                M = 2,
                            N[J + 1] && (M++,
                                H += x[L * n + J + 1]),
                            I[L + 1] && (M++,
                                H += x[(L + 1) * n + J]),
                                x[L * n + J] = as(H, M))
            }
            ;
            this.a34 = function () {
                return x
            }
            ;
            this.a2l = function () {
                x = null
            }
        }

        function as(g, k) {
            return Math.floor(g / k + 1 / (2 * k))
        }

        function yd(g, k) {
            return 0 <= g ? as(g, k) : -as(-g, k)
        }

        function d5(g) {
            return g * g
        }

        function mc(g, k) {
            return g > k ? g : k
        }

        function ql(g, k) {
            return g < k ? g : k
        }

        function t8(g, k, t) {
            return k < g ? g : k > t ? t : k
        }

        function a4J(g, k) {
            for (var t = as(g + 1, 2), l = 0; l < k; l++)
                t = as(t + as(g, t), 2);
            return t
        }

        function bl(g, k) {
            return 1 > g ? 0 : a4J(g, k)
        }

        function a4K(g, k, t, l, x, n, z, y) {
            return !(g + t <= x || k + l <= n || g >= x + z || k >= n + y)
        }

        function a4L(g, k, t, l, x, n, z, y) {
            return g <= x && k <= n && g + t >= x + z && k + l >= n + y
        }

        function kk() {
            function g(y, A, B, C) {
                if (0 === C)
                    return y >= B.f7 && (0 === C || A >= B.f8) && A <= B.f8 + B.nP;
                A -= C * (B.nP - 2);
                return y >= B.f9 && (0 === C || A >= B.f8) && A <= B.f8 + B.nP
            }

            function k() {
                var y = Math.floor((q ? .145 : .09) * bq)
                    , A = Math.floor(2 * y)
                    , B = Math.floor(.065 * (q ? .53 : .36) * bq);
                return {
                    f7: r - y - B,
                    f8: cA,
                    i4: y,
                    nP: Math.floor(.35 * y),
                    f9: r - A - B,
                    i5: A
                }
            }

            function t(y, A, B, C, E, F, G, N, I, D) {
                D = Math.floor(D * C);
                cH.font = bt + D + bu;
                N && (E += 80,
                    F += 80,
                    G += 80);
                cH.fillStyle = "rgba(" + E + "," + F + "," + G + ",0.6)";
                cH.fillRect(y, A, B, C);
                cH.fillStyle = cK;
                cH.fillRect(y, A, B, 2);
                cH.fillRect(y, A + C - 2, B, 2);
                cH.fillRect(y, A, 2, C);
                cH.fillRect(y + B - 2, A, 2, C);
                cH.fillText(I, Math.floor(y + B / 2), Math.floor(A + C / 2 + .1 * D))
            }

            this.xs = 1;
            var l = -1
                , x = false
                , n = []
                , z = 0;
            this.rG = null;
            this.so = new Uint8Array(4);
            this.bp = function () {
                this.a4O();
                n = [Array(5), Array(11), Array(5)];
                this.so[0] = 10;
                this.so[1] = 5;
                this.so[2] = 2;
                this.so[3] = 1;
                n[0][0] = {
                    name: "More",
                    id: 0,
                    fB: 140,
                    n4: 120,
                    cm: 0
                };
                n[0][1] = {
                    name: "Lobby 1",
                    id: 1,
                    fB: 0,
                    n4: 0,
                    cm: 0
                };
                n[0][2] = {
                    name: "Settings",
                    id: 2,
                    fB: 0,
                    n4: 0,
                    cm: 0
                };
                n[0][3] = {
                    name: "More Information",
                    id: 3,
                    fB: 0,
                    n4: 0,
                    cm: 0
                };
                n[0][4] = {
                    name: a25,
                    id: 4,
                    fB: 90,
                    n4: 0,
                    cm: 0
                };
                n[1][0] = n[0][0];
                n[1][1] = {
                    name: "Hide Usernames",
                    id: 1,
                    fB: 0,
                    n4: 0,
                    cm: 0
                };
                n[1][2] = {
                    name: "Hide Links",
                    id: 2,
                    fB: 0,
                    n4: 0,
                    cm: 0
                };
                n[1][3] = {
                    name: "Hide Zoom Buttons",
                    id: 3,
                    fB: 0,
                    n4: 0,
                    cm: 0
                };
                n[1][4] = {
                    name: "Reverse Name/Balance",
                    id: 4,
                    fB: 0,
                    n4: 0,
                    cm: 0
                };
                n[1][5] = {
                    name: "Resolution",
                    id: 5,
                    fB: 0,
                    n4: 0,
                    cm: 0
                };
                n[1][6] = {
                    name: "Country Minimum Font Size",
                    id: 6,
                    fB: 0,
                    n4: 0,
                    cm: 0
                };
                n[1][7] = {
                    name: "Leaderboard Refresh Rate",
                    id: 7,
                    fB: 0,
                    n4: 0,
                    cm: 0
                };
                n[1][8] = {
                    name: "Name&Balance Refresh Rate",
                    id: 8,
                    fB: 0,
                    n4: 0,
                    cm: 0
                };
                n[1][9] = {
                    name: "Reset Settings",
                    id: 9,
                    fB: 0,
                    n4: 0,
                    cm: 0
                };
                n[1][10] = {
                    name: "Back",
                    id: 10,
                    fB: 0,
                    n4: 0,
                    cm: 0
                };
                n[2][0] = n[0][0];
                n[2][1] = {
                    name: "Tutorial",
                    id: 1,
                    fB: 0,
                    n4: 0,
                    cm: 0
                };
                n[2][2] = {
                    name: "Player List",
                    id: 2,
                    fB: 0,
                    n4: 0,
                    cm: 0
                };
                n[2][3] = {
                    name: "Clan List",
                    id: 3,
                    fB: 0,
                    n4: 0,
                    cm: 0
                };
                n[2][4] = {
                    name: "Privacy Policy",
                    id: 4,
                    fB: 0,
                    n4: 0,
                    cm: 0
                };
                !g_isIOSUser && 5 > d && n[2].push({
                    name: "Cookie Policy",
                    id: 5,
                    fB: 0,
                    n4: 0,
                    cm: 0
                });
                n[2].push({
                    name: "Back",
                    id: 6,
                    fB: 0,
                    n4: 0,
                    cm: 0
                });
                this.a4P();
                this.a4Q()
            }
            ;
            this.a4O = function () {
                this.rG = {
                    a1S: 0,
                    a4R: 0,
                    rH: 0,
                    a0x: 0,
                    a4S: 2,
                    a0l: 4,
                    sp: 1,
                    a0u: 1
                }
            }
            ;
            this.a4Q = function () {
                vp.un[2] = vp.un[3] = vp.un[4] = !this.rG.a4R;
                n[1][1].n4 = this.rG.a1S ? 130 : 0;
                n[1][2].n4 = this.rG.a4R ? 130 : 0;
                n[1][3].n4 = this.rG.rH ? 130 : 0;
                n[1][4].n4 = this.rG.a0x ? 130 : 0;
                this.a4T(5);
                this.a4T(6);
                this.a4T(7);
                this.a4T(8)
            }
            ;
            this.a4P = function () {
                var y = v().split("");
                14 > y.length ? this.a4O() : (this.rG.a1S = parseInt(y[6]),
                    this.rG.a4R = parseInt(y[7]),
                    this.rG.rH = parseInt(y[8]),
                    this.rG.a0x = parseInt(y[9]),
                    this.rG.a4S = parseInt(y[10]),
                    this.rG.a0l = parseInt(y[11]),
                    this.rG.sp = parseInt(y[12]),
                    this.rG.a0u = parseInt(y[13]))
            }
            ;
            this.vD = function () {
                var y = cC.mC[2].ih.vB();
                y += ~~this.rG.a1S;
                y += ~~this.rG.a4R;
                y += ~~this.rG.rH;
                y += ~~this.rG.a0x;
                y += ~~this.rG.a4S;
                y += ~~this.rG.a0l;
                y += ~~this.rG.sp;
                y += ~~this.rG.a0u;
                a8(y)
            }
            ;
            this.a4T = function (y) {
                5 === y ? n[1][y].name = "Resolution: " + eB.nG(100 * jq.a4U(), 1) : 6 === y ? n[1][y].name = "Country Minimum Font Size: " + (4 > this.rG.a0l ? 1 + this.rG.a0l : 2 * (this.rG.a0l - 1)) : 7 === y ? n[1][y].name = "Leaderboard Refresh Rate: " + eB.nG(100 / this.so[this.rG.sp], 1) : 8 === y && (n[1][y].name = "Name & Balance Refresh Rate: " + eB.nG(100 / this.so[this.rG.a0u], 1))
            }
            ;
            this.c7 = function (y, A) {
                var B;
                if (!(7 <= aJ.pY())) {
                    var C = k();
                    if (x) {
                        for (B = 1; B < n[z].length; B++)
                            if (g(y, A, C, B))
                                return B = n[z][B],
                                    0 === z ? 1 === B.id ? (jt.xs = 1 === jt.xs ? 2 : 2 === jt.xs ? eD.wK : 1,
                                        B.name = "Lobby " + (jt.xs === eD.wK ? "1B" : jt.xs),
                                        c4.c5 = true) : 2 === B.id ? (z = 1,
                                        c4.c5 = true) : 3 === B.id && (z = 2,
                                        c4.c5 = true) : 1 === z ? 1 === B.id ? (jt.rG.a1S = !jt.rG.a1S,
                                        B.n4 = jt.rG.a1S ? 130 : 0,
                                        jt.vD(),
                                        c4.c5 = true) : 2 === B.id ? (jt.rG.a4R = !jt.rG.a4R,
                                        jt.a4Q(),
                                        jt.vD(),
                                        c4.c5 = true) : 3 === B.id ? (jt.rG.rH = !jt.rG.rH,
                                        B.n4 = jt.rG.rH ? 130 : 0,
                                        jt.vD(),
                                        c4.c5 = true) : 4 === B.id ? (jt.rG.a0x = !jt.rG.a0x,
                                        B.n4 = jt.rG.a0x ? 130 : 0,
                                        jt.vD(),
                                        c4.c5 = true) : 5 === B.id ? (jt.rG.a4S++,
                                        jt.rG.a4S %= 8,
                                        jt.a4T(B.id),
                                        jt.vD(),
                                        jq.xf(),
                                        c4.c5 = true) : 6 === B.id ? (jt.rG.a0l++,
                                        jt.rG.a0l %= 10,
                                        jt.a4T(B.id),
                                        jt.vD(),
                                        c4.c5 = true) : 7 === B.id ? (jt.rG.sp++,
                                        jt.rG.sp %= 4,
                                        jt.a4T(B.id),
                                        jt.vD(),
                                        c4.c5 = true) : 8 === B.id ? (jt.rG.a0u++,
                                        jt.rG.a0u %= 4,
                                        jt.a4T(B.id),
                                        jt.vD(),
                                        c4.c5 = true) : 9 === B.id ? (jt.a4O(),
                                        jt.a4Q(),
                                        jt.vD(),
                                        jq.xf(),
                                        c4.c5 = true) : 10 === B.id && (z = 0,
                                        c4.c5 = true) : 1 === B.id ? (nU.bp(ot, true),
                                        nU.bp(ot, false)) : 2 === B.id ? (nU.bp(ou[0], true),
                                        nU.bp(ou[0], false)) : 3 === B.id ? (nU.bp(ou[1], true),
                                        nU.bp(ou[1], false)) : 4 === B.id ? (12 <= d && e.setState(7),
                                        nU.bp(os, true),
                                        nU.bp(os, false)) : 5 === B.id ? (nU.bp(nV, true),
                                        nU.bp(nV, false)) : 6 === B.id && (z = 0,
                                        c4.c5 = true),
                                    true;
                        x = false;
                        c4.c5 = true;
                        return false
                    }
                    return g(y, A, C, 0) ? (z = 0,
                        x = true,
                        c4.c5 = true) : false
                }
            }
            ;
            this.lm = function (y, A) {
                var B;
                if (!(7 <= aJ.pY())) {
                    var C = k();
                    var E = l;
                    var F = x ? 0 === z ? n[z].length - 1 : n[z].length : 1;
                    l = -1;
                    for (B = 0; B < F; B++)
                        if (g(y, A, C, B)) {
                            l = B;
                            break
                        }
                    E !== l && (c4.c5 = true)
                }
            }
            ;
            this.cG = function () {
                var y;
                if (!(7 <= aJ.pY())) {
                    var A = k();
                    cH.textAlign = cJ;
                    cH.textBaseline = cI;
                    t(A.f7, A.f8, A.i4, A.nP, n[z][0].fB, n[z][0].n4, n[z][0].cm, 0 === l, n[z][0].name, .6);
                    if (x) {
                        var B = n[z].length;
                        for (y = 1; y < B; y++) {
                            var C = A.f9
                                , E = A.f8 + y * A.nP - 2 * y
                                , F = A.i5
                                , G = A.nP
                                , N = n[z][y].fB
                                , I = n[z][y].n4
                                , D = n[z][y].cm
                                , K = l === y
                                , J = n[z][y].name;
                            var L = n[z][y];
                            L = 22 >= L.name.length ? .45 : .45 / (1 + (L.name.length - 22) / 22);
                            t(C, E, F, G, N, I, D, K, J, L)
                        }
                    }
                }
            }
        }

        function kT() {
            function g() {
                t = true;
                l = -1;
                x = Array(4);
                for (var y = 3; 0 <= y; y--)
                    x[y] = false;
                y = Math.floor(1 + .02 * pI);
                n = Array(4);
                z = Array(4);
                z[1] = z[3] = n[0] = n[2] = 0;
                z[0] = n[3] = -y;
                n[1] = z[2] = y
            }

            function k() {
                if (-1 !== l)
                    if (0 !== fZ && eV.h0()) {
                        for (var y = false, A = 3; 0 <= A; A--)
                            x[A] && (y = true,
                                gC += n[A],
                                gD += z[A],
                                eA.lm(n[A], z[A]),
                                gj.rK());
                        y ? c4.c5 = true : gn.go()
                    } else
                        gn.go()
            }

            var t = false, l, x, n, z;
            this.w8 = function (y) {
                0 !== fZ && eV.h0() && (t || g(),
                    x[y] = true,
                -1 === l && (l = setInterval(k, 20),
                    k()))
            }
            ;
            this.a2X = function (y) {
                if (0 !== fZ && (t || g(),
                    x[y] = false,
                -1 !== l)) {
                    y = false;
                    for (var A = 3; 0 <= A; A--)
                        y = y || x[A];
                    y || this.go()
                }
            }
            ;
            this.go = function () {
                if (t && -1 !== l) {
                    for (var y = 3; 0 <= y; y--)
                        x[y] = false;
                    clearInterval(l);
                    l = -1
                }
            }
        }

        function kU() {
            var g;
            this.f0 = function () {
                return g
            }
            ;
            this.co = function (k, t) {
                var l;
                if (0 === bN[k].length || !b5.b6(t) || !b5.bG(t) && b5.bF(t) === k)
                    return false;
                for (l = 21; 0 <= l; l--) {
                    if (21 === l) {
                        var x = bN[k]
                            , n = t
                            , z = b5.gF(n);
                        n = b5.cF(n);
                        var y = 0;
                        var A = b5.gF(x[0]);
                        var B = b5.cF(x[0]);
                        A = Math.abs(A - z) + Math.abs(B - n);
                        for (B = x.length - 1; 1 <= B; B--) {
                            var C = b5.gF(x[B]);
                            var E = b5.cF(x[B]);
                            C = Math.abs(C - z) + Math.abs(E - n);
                            C < A && (A = C,
                                y = B)
                        }
                        g = x[y]
                    } else
                        g = bN[k][as(l * bN[k].length, 21)];
                    a: {
                        B = g;
                        y = t;
                        x = b5.gF(B);
                        z = b5.cF(B);
                        n = b5.gF(y);
                        y = b5.cF(y);
                        A = Math.abs(n - x) + Math.abs(y - z);
                        if (!(2 > A))
                            for (C = B,
                                     B = 0; B < A; B++)
                                if (C = Math.abs(n - b5.gF(C)) >= Math.abs(y - b5.cF(C)) ? C + aV[n > x ? 1 : 3] : C + aV[y > z ? 2 : 0],
                                    !b5.yi(C)) {
                                    if (b5.b6(C)) {
                                        if (0 === B || B + 20 < A)
                                            break;
                                        x = true;
                                        break a
                                    }
                                    break
                                }
                        x = false
                    }
                    if (x)
                        return true
                }
                return false
            }
        }

        function a2T() {
            function g() {
                var B, C = 0, E = 0, F = Math.floor(x / 2), G = Math.floor(n / 2), N = 1.5 * Math.PI;
                for (B = jD; 0 <= B; B--)
                    E += A[B],
                    0 === A[B] && C++;
                t = false;
                y.clearRect(0, 0, x, x);
                y.fillStyle = hy;
                y.fillRect(0, 0, x, x);
                y.fillStyle = oH;
                y.fillRect(0, 0, x, 2);
                y.fillRect(0, 0, 2, x);
                y.fillRect(x - 2, 0, 2, x);
                y.fillRect(0, x - 2, x, 2);
                if (0 < E)
                    if (C === jD)
                        for (B = jD; 0 <= B; B--) {
                            if (0 < A[B]) {
                                E = F;
                                N = G;
                                y.fillStyle = dW.ws[dW.im[B]];
                                y.beginPath();
                                y.arc(E, E, N, 0, 2 * Math.PI);
                                y.fill();
                                break
                            }
                        }
                    else {
                        for (B = 0; B <= jD; B++)
                            if (0 < A[B]) {
                                C = N + 2 * Math.PI * A[B] / E;
                                var I = F
                                    , D = G
                                    , K = N
                                    , J = C;
                                y.fillStyle = dW.ws[dW.im[B]];
                                y.beginPath();
                                y.arc(I, I, D, K, J);
                                y.lineTo(I, I);
                                y.fill();
                                0 !== B && k(F, G, N);
                                N = C
                            }
                        k(F, G, 1.5 * Math.PI)
                    }
                y.beginPath();
                y.arc(F, F, G, 0, 2 * Math.PI);
                y.stroke()
            }

            function k(B, C, E) {
                y.beginPath();
                y.moveTo(B, B);
                y.lineTo(B + Math.cos(E) * C, B + Math.cos(E + 1.5 * Math.PI) * C);
                y.stroke()
            }

            var t = false
                , l = 0
                , x = 0
                , n = 0
                , z = null
                , y = null
                , A = null;
            this.bp = function () {
                if (dA) {
                    l = 16;
                    A = new Uint32Array(jD + 1);
                    for (var B = jD; 0 < B; B--)
                        A[B] = 1;
                    this.lv()
                } else
                    A = y = z = null
            }
            ;
            this.qR = function () {
                return x
            }
            ;
            this.lv = function () {
                dA && (x = Math.floor(.18 * pI),
                    x += x % 2,
                    n = Math.floor(7 * x / 8),
                    z = z ? z : document.createElement("canvas"),
                    z.width = x,
                    z.height = x,
                    y = z.getContext("2d", {
                        alpha: true
                    }),
                    y.lineWidth = 2,
                    y.strokeStyle = cK,
                    g())
            }
            ;
            this.qm = function () {
                return A[this.mw()]
            }
            ;
            this.ik = function () {
                l = 31;
                this.dF();
                return this.mw()
            }
            ;
            this.mw = function () {
                for (var B = 0, C = jD; 0 < C; C--)
                    A[C] > A[B] && (B = C);
                return B
            }
            ;
            this.dF = function () {
                if (dA && 32 <= ++l) {
                    l = 0;
                    var B;
                    for (B = jD; 0 <= B; B--)
                        A[B] = 0;
                    for (B = dY - 1; 0 <= B; B--)
                        A[dW.dX[dZ[B]]] += g_playerLandArray[dZ[B]];
                    t = true
                }
            }
            ;
            this.bv = function () {
                dA && t && g()
            }
            ;
            this.cG = function () {
                dA && cH.drawImage(z, m5, qS + 2 * m5)
            }
        }

        function kV() {
            var g, k;
            this.bp = function () {
                k = Array(101);
                for (var t = k.length - 1; 0 <= t; t--)
                    k[t] = as(32768 * t, 100);
                this.jN(0)
            }
            ;
            this.value = function (t) {
                return k[t]
            }
            ;
            this.a1U = function () {
                return as(g - 1, 2)
            }
            ;
            this.jN = function (t) {
                g = 2 * t % 32768 + 1
            }
            ;
            this.random = function () {
                return g = 167 * g % 32768
            }
            ;
            this.cf = function (t) {
                return as(t * this.random(), 32768)
            }
            ;
            this.dP = function (t) {
                return 0 !== t && this.random() < this.value(t)
            }
        }

        function kc() {
            function g() {
                (500 <= z || 5 < n) && k()
            }

            function k() {
                n = 0;
                z += 700 > z ? 200 : 0;
                bw.bx() && (l() || x) && (x = false,
                    p2(),
                    uS.bp(),
                    jh.bp(),
                    jk.lv(),
                    vp.bp(),
                    ji.lv(),
                    jg.lv(),
                    jf.lv(),
                    vh.lv(),
                    cD.lv(),
                    a5.bp(),
                    1 <= fZ ? (eM.lv(false),
                        eO.lv(),
                        eB.lv(),
                        gj.lv(),
                        eR.lv(),
                        e9.lv(),
                        fq.lv(),
                        eS.lv(),
                        eP.lv(),
                        c2.lv(),
                        hu.l1(),
                        hv.lv(),
                        eA.lv(),
                        eW.lv(),
                        eT.lv(),
                        gj.rK()) : (0 === aJ.pY() ? jk.cE(0, true) : 2 === aJ.pY() ? dy.lv() : 3 === aJ.pY() && jj.lv(),
                        aJ.vl(),
                        aJ.vq()),
                    c4.c5 = true)
            }

            function t(y) {
                return y && 128 < y ? Math.floor(y) : 128
            }

            function l() {
                jq.a4U();
                var y = t(document.documentElement.clientWidth);
                var A = t(document.documentElement.clientHeight);
                var B = Math.floor(.5 + pM * y);
                var C = Math.floor(.5 + pM * A);
                if (B === gE && C === cB)
                    return false;
                gE = r = B;
                cB = s = C;
                pI = ql(r, s);
                bq = as(s + r, 2);
                p5.width = B;
                p5.height = C;
                p5.style.width = y + "px";
                p5.style.height = A + "px";
                return true
            }

            var x = false, n, z;
            this.bp = function () {
                n = 1;
                z = 100;
                r = s = pI = gE = cB = bq = 0;
                pM = 1;
                p5 = document.getElementById("canvasA");
                cH = p5.getContext("2d", {
                    alpha: false
                });
                cH.imageSmoothingEnabled = false;
                l();
                window.addEventListener("resize", g)
            }
            ;
            this.dF = function () {
                ju.dF();
                ++n >= z && k()
            }
            ;
            this.xf = function () {
                x = true;
                500 <= z && k()
            }
            ;
            this.a4U = function () {
                var y = jt.rG.a4S
                    , A = window.devicePixelRatio || 1;
                pM = 3 > y ? .5 + .25 * y : (.5 + .125 * (y - 3)) * A;
                return pM / A
            }
        }

        function kW() {
            function g(G) {
                eK.av(t, F);
                ae.b2(t, E);
                G && (g_playerBalanceArray[t] += l)
            }

            function k() {
                b5.yk(x, t) && b5.ym(x)
            }

            var t, l, x, n, z, y, A, B, C, E, F;
            this.dF = function (G, N, I, D, K) {
                C = G;
                F = N;
                t = I;
                z = b5.gF(D);
                y = b5.cF(D);
                A = b5.gF(K);
                B = b5.cF(K);
                n = x = b5.f1(z, y);
                E = ae.fV(t, F);
                -1 === E ? (k(),
                    eK.av(t, F),
                    G = false) : (l = ae.am(t, E),
                    G = true);
                if (G && (k(),
                    G = as(l, 128),
                    G = 1 > G ? 1 : G,
                    l -= G,
                t === g_localPlayerIndex && (b0.b1[15] += G),
                    l <= at ? (t === g_localPlayerIndex && (b0.b1[15] += l),
                        g(false),
                        G = false) : (ae.bT(t, E, l),
                        G = true),
                    G))
                    if (G = b5.f1(z, y),
                        x = Math.abs(A - z) >= Math.abs(B - y) ? G + aV[A > z ? 1 : 3] : G + aV[B > y ? 2 : 0],
                        z = b5.gF(x),
                        y = b5.cF(x),
                        eK.g0(C, x),
                        G = b5.b6(x) ? false : true,
                        G)
                        b5.yi(x) && b5.yp(x, t);
                    else
                        a: {
                            if (b5.bG(x))
                                G = g_unclaimedLandIndex;
                            else {
                                G = b5.bF(x);
                                if (G === t) {
                                    g(true);
                                    break a
                                }
                                if (!ch(t, G)) {
                                    N = g_playerLandArray[G] * j7 - g_playerBalanceArray[G];
                                    0 >= N || (N = l > N ? N : l,
                                        l -= N,
                                    t === g_localPlayerIndex && (e9.n8(N, G),
                                        b0.b1[16] += N),
                                    G === g_localPlayerIndex && (e9.nA(N, t),
                                        b0.b1[10] += N),
                                        g_playerBalanceArray[G] += N);
                                    g(true);
                                    break a
                                }
                            }
                            t === g_localPlayerIndex && (b0.b1[13] += l);
                            eK.av(t, F);
                            ae.b2(t, E);
                            b4[t].push(n);
                            ae.cQ(t, l, G);
                            au.cR(t, true)
                        }
            }
            ;
            this.g4 = function (G, N) {
                t = G;
                x = b5.f1(b5.gF(N), b5.cF(N));
                k()
            }
        }

        function kX() {
            var g, k, t, l;
            this.bp = function () {
                var x, n, z;
                t = true;
                l = "rgb(" + xC[0] + "," + xC[1] + "," + xC[2] + ")";
                var y = a2q(x0) ? true : t = false;
                if (y)
                    k = null;
                else {
                    g = as(96, 4);
                    if (1 === x0) {
                        var A = 0;
                        var B = 160
                    } else
                        A = 128,
                            B = 32;
                    l = "rgb(" + A + "," + A + "," + A + ")";
                    k = Array(4);
                    for (y = 3; 0 <= y; y--) {
                        k[y] = document.createElement("canvas");
                        var C = 0 === y % 2 ? aZ : g;
                        var E = 0 === y % 2 ? g : aa + 2 * g;
                        k[y].width = C;
                        k[y].height = E;
                        var F = k[y].getContext("2d", {
                            alpha: false
                        });
                        var G = F.getImageData(0, 0, C, E);
                        var N = G.data;
                        if (0 === y % 2)
                            for (n = g - 1; 0 <= n; n--) {
                                var I = B + Math.floor((n + 1) * (A - B) / (g + 1));
                                for (x = C - 1; 0 <= x; x--) {
                                    var D = 4 * ((0 === y ? g - n - 1 : n) * C + x);
                                    N[D] = I;
                                    N[D + 1] = I;
                                    N[D + 2] = I;
                                    N[D + 3] = 255
                                }
                            }
                        else {
                            for (x = g - 1; 0 <= x; x--)
                                for (I = B + Math.floor((x + 1) * (A - B) / (g + 1)),
                                         n = E - 1 - g; n >= g; n--)
                                    D = 4 * (n * C + (3 === y ? g - x - 1 : x)),
                                        N[D] = I,
                                        N[D + 1] = I,
                                        N[D + 2] = I,
                                        N[D + 3] = 255;
                            for (z = 1; 0 <= z; z--)
                                for (x = g - 1; 0 <= x; x--)
                                    for (n = g - 1; 0 <= n; n--)
                                        I = (Math.pow(x * x + n * n, .5) + 1) / (g + 1),
                                            I = 1 < I ? 1 : I,
                                            I = B + Math.floor(I * (A - B)),
                                            D = 4 * ((0 === z ? g - n - 1 : n + z * (E - g)) * C + (1 === y ? x : g - x - 1)),
                                            N[D] = I,
                                            N[D + 1] = I,
                                            N[D + 2] = I,
                                            N[D + 3] = 255
                        }
                        F.putImageData(G, 0, 0)
                    }
                    pj.fillStyle = "rgb(" + B + "," + B + "," + B + ")";
                    pj.fillRect(0, 0, aZ, 1);
                    pj.fillRect(0, aa - 1, aZ, 1);
                    pj.fillRect(0, 0, 1, aa);
                    pj.fillRect(aZ - 1, 0, 1, aa)
                }
            }
            ;
            this.hr = function () {
                var x = t ? 0 : -g;
                a4L(x, x, aZ - 2 * x, aa - 2 * x, gy.a5L, gy.a5M, gy.a5N, gy.a5O) || (cH.fillStyle = l,
                    cH.fillRect(0, 0, gE, cB))
            }
            ;
            this.cG = function () {
                t || (a4K(0, -g, aZ, g, gy.a5L, gy.a5M, gy.a5N, gy.a5O) && cH.drawImage(k[0], gy.a5P, gy.a5Q - g),
                a4K(aZ, -g, g, aa + 2 * g, gy.a5L, gy.a5M, gy.a5N, gy.a5O) && cH.drawImage(k[1], gy.a5P + aZ, gy.a5Q - g),
                a4K(0, aa, aZ, g, gy.a5L, gy.a5M, gy.a5N, gy.a5O) && cH.drawImage(k[2], gy.a5P, gy.a5Q + aa),
                a4K(-g, -g, g, aa + 2 * g, gy.a5L, gy.a5M, gy.a5N, gy.a5O) && cH.drawImage(k[3], gy.a5P - g, gy.a5Q - g))
            }
        }

        function a1v() {
            function g() {
            }

            function k() {
                eD.a1w(z, y)
            }

            function t(F) {
                A++;
                1 === A ? C.readAsArrayBuffer(F.data) : B.push(F.data)
            }

            function l() {
                A--;
                jp.a5a(z, new Uint8Array(C.result));
                0 < A && (C.readAsArrayBuffer(B[0]),
                    B.shift())
            }

            function x() {
            }

            function n(F) {
                eD.a22(z, F)
            }

            var z, y, A, B, C, E;
            this.bp = function (F, G) {
                z = F;
                y = G;
                A = 0;
                B = [];
                C = new FileReader;
                C.addEventListener("loadend", l);
                var N = p0[0];
                N = z < eD.wK ? N + (eD.a1j[z] + p0[1 + a2C]) : N + (eD.a1j[0] + "/i" + (1 + a2C) + (z - eD.wL) + "/");
                E = new WebSocket(N);
                E.onopen = k;
                E.onmessage = t;
                E.onclose = n;
                E.onerror = x
            }
            ;
            this.a5V = function () {
                return E.readyState === E.CONNECTING
            }
            ;
            this.vN = function () {
                return E.readyState === E.OPEN
            }
            ;
            this.a1s = function () {
                return this.a5V() || this.vN()
            }
            ;
            this.a1t = function (F) {
                y = F
            }
            ;
            this.send = function (F) {
                this.vN() && E.send(F)
            }
            ;
            this.close = function (F) {
                this.a1s() && (E.close(F),
                    this.lF())
            }
            ;
            this.lF = function () {
                E.onopen = g;
                E.onmessage = g;
                E.onclose = g;
                E.onerror = g;
                C.removeEventListener("loadend", l)
            }
        }

        function a2P() {
            this.cV = 501;
            this.a5b = new Uint32Array(this.cV);
            this.s8 = new Uint32Array(this.cV);
            this.tX = new Uint16Array(this.cV);
            this.m4 = 0;
            this.a5c = 1;
            this.dV = 0;
            this.max = [0, 0, 0];
            this.b1 = 0;
            this.a5d = "Avg. Attack Strength;Number Attacks;Ships sent;Bots conquered;Humans conquered;Attacked by Bots;Attacked by Humans;Territorial Loss;Territorial Income;Interest Income;Received Support;Overall Income;Commanding Costs;Attack Losses;Defense Losses;Shipping Losses;Transmitted Support;Overall Expenses".split(";");
            this.bp = function () {
                this.m4 = 0;
                this.a5c = 1;
                this.dV = 0;
                this.a5e();
                this.a5f()
            }
            ;
            this.dF = function () {
                0 < this.dV-- || this.a5g()
            }
            ;
            this.a5g = function () {
                0 !== g_isPlayersAliveArray[g_localPlayerIndex] && (this.a5b[this.m4] = g_playerLandArray[g_localPlayerIndex],
                    this.s8[this.m4] = g_playerBalanceArray[g_localPlayerIndex],
                    this.tX[this.m4] = ay.tY(g_localPlayerIndex),
                    this.a5h(this.m4),
                    this.m4++,
                this.m4 === this.cV && this.a5i(),
                    this.dV = this.a5c - 1,
                    hv.bv())
            }
            ;
            this.a5i = function () {
                this.a5e();
                this.a5h(0);
                this.m4 = 1 + as(this.cV, 2);
                for (var g = 1; g < this.m4; g++)
                    this.a5b[g] = this.a5b[2 * g],
                        this.s8[g] = this.s8[2 * g],
                        this.tX[g] = this.tX[2 * g],
                        this.a5h(g);
                this.a5c *= 2
            }
            ;
            this.a5e = function () {
                this.max[0] = this.max[1] = this.max[2] = 0
            }
            ;
            this.a5f = function () {
                this.b1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            }
            ;
            this.a5h = function (g) {
                this.max[0] = this.a5b[g] > this.max[0] ? this.a5b[g] : this.max[0];
                this.max[1] = this.s8[g] > this.max[1] ? this.s8[g] : this.max[1];
                this.max[2] = this.tX[g] > this.max[2] ? this.tX[g] : this.max[2]
            }
        }

        function a2Q() {
            this.bs = this.qI = this.a5k = this.a5j = this.xO = this.nQ = this.nP = this.uX = this.uW = this.i5 = this.i4 = this.cw = this.c1 = 0;
            this.lr = ["Territory", "Balance", "Interest", "Numbers"];
            this.lC = false;
            this.a5l = -1;
            this.a5m = false;
            this.a5n = [0, 0];
            this.bp = function () {
                this.lC = false;
                this.a5l = -1;
                this.a5m = false;
                this.lv()
            }
            ;
            this.lv = function () {
                this.c1 = r < 1.618 * s ? r : 1.618 * s;
                this.c1 = Math.floor((q && r < s ? 1 : q ? .8 : r < s ? .65 : .5) * this.c1);
                this.qI = Math.floor(1 + .006 * this.c1);
                this.c1 -= q && r < s ? 2 * m5 + this.qI : 0;
                this.cw = Math.floor(this.c1 / 1.618);
                this.i4 = Math.floor(1 + .02 * this.c1);
                this.nP = this.i5 = Math.floor(1 + .04 * this.c1);
                this.nQ = Math.floor(1 + .075 * this.c1);
                this.a5j = Math.floor(this.c1 * (q ? .028 : .02));
                this.a5j = 6 > this.a5j ? 6 : this.a5j;
                this.a5k = Math.floor(.028 * this.c1);
                this.a5k = 6 > this.a5k ? 6 : this.a5k;
                this.xO = this.cw - 2 * this.nP - this.nQ;
                this.lC && this.a5o()
            }
            ;
            this.c7 = function (g, k) {
                if (!this.lC)
                    return false;
                var t = g
                    , l = k;
                g -= as(gE - this.c1, 2);
                k -= as(cB - this.cw, 2);
                if (0 > g || 0 > k || g >= this.c1 || k >= this.cw) {
                    if (1 < fq.c7(t, l))
                        return true;
                    this.lF();
                    return true
                }
                if (k < this.cw - this.nQ)
                    return this.a5m = true,
                        this.a5l = (g - 2 * this.i4 - this.uW) / this.uX,
                        true;
                t = Math.floor(g / (this.c1 / this.lr.length));
                t = 0 > t ? 0 : t >= this.lr.length ? this.lr.length - 1 : t;
                t !== this.bs && (this.bs = t,
                    this.a5o(),
                    c4.c5 = true);
                return true
            }
            ;
            this.a2V = function () {
                var g = Math.floor((this.a5n[0] + gC) / g7)
                    , k = Math.floor((this.a5n[1] + gD) / g7);
                1 > g || 1 > k || g >= aZ - 1 || k >= aa - 1 || console.log(g + " " + k)
            }
            ;
            this.lm = function (g, k) {
                this.a5n[0] = g;
                this.a5n[1] = k;
                if (this.lC && this.a5m) {
                    g -= as(gE - this.c1, 2);
                    var t = this.a5l;
                    this.a5l = (g - 2 * this.i4 - this.uW) / this.uX;
                    if (0 <= this.a5l && 1 >= this.a5l || 0 <= t && 1 >= t)
                        c4.c5 = true;
                    return true
                }
                return false
            }
            ;
            this.pV = function () {
                this.a5m && (this.a5m = false)
            }
            ;
            this.m0 = function () {
                this.lC ? this.lF() : this.show()
            }
            ;
            this.show = function () {
                2 > b0.m4 || (this.lC = true,
                    this.a5o())
            }
            ;
            this.lF = function () {
                this.lC = false;
                this.a5l = -1
            }
            ;
            this.a5o = function () {
                2 > this.bs ? this.uW = c2.measureText(eP.gJ(b0.max[this.bs]), bt + this.a5j + bu) : 2 === this.bs && (this.uW = c2.measureText(eB.nG(6, 2), bt + this.a5j + bu));
                this.uX = this.c1 - 2 * this.i4 - this.uW - this.i5
            }
            ;
            this.bv = function () {
                this.lC && this.a5o()
            }
            ;
            this.cG = function () {
                this.lC && this.nW()
            }
            ;
            this.nW = function () {
                var g = as(gE - this.c1, 2)
                    , k = as(cB - this.cw, 2);
                cH.setTransform(1, 0, 0, 1, g, k);
                cH.fillStyle = hy;
                cH.fillRect(0, 0, this.c1, this.cw);
                this.a5p();
                cH.strokeRect(0, 0, this.c1, this.cw);
                cH.textAlign = oj;
                cH.font = bt + this.a5j + bu;
                0 === this.bs ? this.a5q(b0.a5b, g, k) : 1 === this.bs ? this.a5q(b0.s8, g, k) : 2 === this.bs ? this.a5r(g, k) : 3 === this.bs && (this.a5s(g, k),
                    this.a5t(g, k));
                cH.setTransform(1, 0, 0, 1, 0, 0)
            }
            ;
            this.a5p = function () {
                cH.lineWidth = this.qI;
                cH.textBaseline = cI;
                cH.textAlign = cJ;
                cH.strokeStyle = cK;
                cH.font = bt + this.a5k + bu;
                var g = this.c1 / this.lr.length;
                cH.fillStyle = oN;
                cH.fillRect(this.bs * g, this.cw - this.nQ, g, this.nQ);
                cH.fillStyle = cK;
                for (var k = this.lr.length - 1; 0 <= k; k--)
                    cH.strokeRect(k * g, this.cw - this.nQ, g, this.nQ),
                        cH.fillText(this.lr[k], (k + .5) * g, this.cw - .46 * this.nQ)
            }
            ;
            this.a5q = function (g, k, t) {
                var l = b0.max[this.bs];
                cH.setTransform(1, 0, 0, 1, k + 2 * this.i4 + this.uW, t + this.nP);
                cH.lineWidth = 2;
                k = this.xO / Math.sqrt(l);
                cH.beginPath();
                cH.moveTo(this.uX, this.xO - k * Math.sqrt(g[b0.m4 - 1]));
                for (t = b0.m4 - 2; 0 <= t; t--)
                    cH.lineTo(t * this.uX / (b0.m4 - 1), this.xO - k * Math.sqrt(g[t]));
                cH.stroke();
                g = this.m9(g, k, .5);
                .95 > g && cH.fillText(eP.gJ(l), -this.i4, 0);
                .05 < Math.abs(g - .5) && cH.fillText(eP.gJ(Math.floor(l / 4)), -this.i4, Math.floor(this.xO / 2));
                .05 < g && cH.fillText("0", -this.i4, this.xO)
            }
            ;
            this.a5r = function (g, k) {
                cH.setTransform(1, 0, 0, 1, g + 2 * this.i4 + this.uW, k + this.nP);
                cH.lineWidth = 2;
                var t = this.xO / b0.max[this.bs];
                cH.beginPath();
                cH.moveTo(this.uX, this.xO - t * b0.tX[b0.m4 - 1]);
                for (var l = b0.m4 - 2; 0 <= l; l--)
                    cH.lineTo(l * this.uX / (b0.m4 - 1), this.xO - t * b0.tX[l]);
                cH.stroke();
                t = this.m9(b0.tX, t, 1);
                l = b0.max[this.bs] / 100;
                .95 > t && cH.fillText(eB.nG(l, 2), -this.i4, 0);
                .05 < Math.abs(t - .5) && cH.fillText(eB.nG(l / 2, 2), -this.i4, Math.floor(this.xO / 2));
                .05 < t && cH.fillText(eB.nG(0, 2), -this.i4, this.xO)
            }
            ;
            this.a5s = function (g, k) {
                var t;
                cH.setTransform(1, 0, 0, 1, g + .34 * this.c1, k + 2 * this.nP);
                cH.textAlign = oj;
                var l = this.cw - 4 * this.nP - this.nQ;
                for (t = 7; 0 <= t; t--)
                    cH.fillText(b0.a5d[t], 0, t * l / 7);
                cH.setTransform(1, 0, 0, 1, g + .39 * this.c1, k + 2 * this.nP);
                cH.textAlign = mh;
                t = b0.b1[1];
                cH.fillText(eB.nG(b0.b1[0] / (10 * (1 > t ? 1 : t)), 1), 0, 0);
                for (t = 6; 1 <= t; t--)
                    cH.fillText(b0.b1[t].toString(), 0, t * l / 7);
                cH.fillText(eB.nG(100 * (1 - g_playerLandArray[g_localPlayerIndex] / b0.b1[7]), 0), 0, l)
            }
            ;
            this.a5t = function (g, k) {
                var t;
                cH.setTransform(1, 0, 0, 1, g + .74 * this.c1, k + 2 * this.nP);
                cH.textAlign = oj;
                var l = this.cw - 4 * this.nP - this.nQ;
                cH.fillStyle = oJ;
                for (t = 2; 0 <= t; t--)
                    cH.fillText(b0.a5d[t + 8], 0, t * l / 9);
                cH.fillStyle = oI;
                cH.fillText(b0.a5d[11], 0, 3 * l / 9);
                cH.fillStyle = oZ;
                for (t = 8; 4 <= t; t--)
                    cH.fillText(b0.a5d[t + 8], 0, t * l / 9);
                cH.fillStyle = oY;
                cH.fillText(b0.a5d[17], 0, 9 * l / 9);
                cH.fillStyle = oJ;
                t = eP.gJ(b0.b1[8] + b0.b1[9] + b0.b1[10] + b0.b1[11]);
                var x = cH.measureText(t).width;
                cH.setTransform(1, 0, 0, 1, g + .79 * this.c1 + x, k + 2 * this.nP);
                cH.fillText(eP.gJ(b0.b1[8]), 0, 0);
                cH.fillText(eP.gJ(b0.b1[9]), 0, 1 * l / 9);
                cH.fillText(eP.gJ(b0.b1[10]), 0, 2 * l / 9);
                cH.fillStyle = oI;
                cH.fillText(t, 0, 3 * l / 9);
                cH.fillStyle = oZ;
                t = b0.b1[13] - ae.a07(g_localPlayerIndex);
                cH.fillText(eP.gJ(b0.b1[12]), 0, 4 * l / 9);
                cH.fillText(eP.gJ(t), 0, 5 * l / 9);
                cH.fillText(eP.gJ(b0.b1[14]), 0, 6 * l / 9);
                cH.fillText(eP.gJ(b0.b1[15]), 0, 7 * l / 9);
                cH.fillText(eP.gJ(b0.b1[16]), 0, 8 * l / 9);
                t = b0.b1[12] + t + b0.b1[14] + b0.b1[15] + b0.b1[16] + b0.b1[17];
                cH.fillStyle = oY;
                cH.fillText(eP.gJ(t), 0, l);
                cH.fillStyle = cK
            }
            ;
            this.m9 = function (g, k, t) {
                if (0 > this.a5l || 1 < this.a5l)
                    return .25;
                var l = this.a5l * (b0.m4 - 1)
                    , x = Math.floor(l)
                    , n = g[x];
                n += (l - x) * (g[x < b0.m4 - 1 ? x + 1 : x] - n);
                cH.strokeStyle = od;
                .04 < this.a5l && this.a5z(0, this.xO - k * Math.pow(n, t), l * this.uX / (b0.m4 - 1), this.xO - k * Math.pow(n, t));
                .04 < n / b0.max[this.bs] && this.a5z(l * this.uX / (b0.m4 - 1), this.xO, l * this.uX / (b0.m4 - 1), this.xO - k * Math.pow(n, t));
                cH.fillStyle = oU;
                cH.beginPath();
                cH.arc(l * this.uX / (b0.m4 - 1), this.xO - k * Math.pow(n, t), 4, 0, 2 * Math.PI);
                cH.fill();
                g = this.a5l * c4.tZ();
                g = 0 === g_isPlayersAliveArray[g_localPlayerIndex] ? Math.floor(g * eW.tf) : Math.floor(g * c4.dU());
                cH.fillStyle = cK;
                cH.fillText(1 === t ? eB.nG(n / 100, 2) : eP.gJ(Math.floor(n)), -this.i4, this.xO - k * Math.pow(n, t));
                cH.textAlign = cJ;
                cH.fillText(eB.sH(g), l * this.uX / (b0.m4 - 1), this.xO + this.a5j - (q ? 2 : 0));
                cH.textAlign = oj;
                return k * Math.pow(n, t) / this.xO
            }
            ;
            this.a5z = function (g, k, t, l) {
                cH.beginPath();
                cH.moveTo(g, k);
                cH.lineTo(t, l);
                cH.stroke()
            }
        }

        function a2S() {
            this.ws = "rgba(130,130,130,0.88) rgba(130,12,12,0.88) rgba(12,130,12,0.88) rgba(12,12,130,0.88) rgba(130,130,12,0.88) rgba(130,12,130,0.88) rgba(12,130,130,0.88) rgba(130,130,130,0.88) rgba(0,0,0,0.88)".split(" ");
            this.sv = [cK, "rgb(255,120,120)", "rgb(0,230,0)", "rgb(150,150,255)", "rgb(240,240,25)", "rgb(240,25,240)", "rgb(25,240,240)", cK, "rgb(170,170,170)"];
            this.a60 = [cK, "rgb(255,0,0)", "rgb(0,255,0)", "rgb(0,0,255)", "rgb(255,255,0)", "rgb(255,0,255)", "rgb(0,255,255)", cK, gH];
            this.a61 = [gH, cK, cK, cK, gH, gH, gH, gH, cK];
            this.a17 = ["rgba(255,255,255,", "rgba(0,0,0,", "rgba(170,170,170,", "rgba(85,85,85,"];
            this.a18 = ["rgb(255,255,255)", "rgb(0,0,0)", "rgb(170,170,170)", "rgb(85,85,85)"];
            this.bo = "White Red Green Blue Yellow Magenta Cyan White Black".split(" ");
            this.tn = [[255, 255, 255, 180], [255, 0, 0, 180], [0, 255, 0, 180], [50, 50, 255, 180], [255, 255, 0, 180], [255, 0, 255, 180], [0, 255, 255, 180], [255, 255, 255, 180], [0, 0, 0, 180]];
            var g = [[255, 255, 255], [255, 0, 0], [0, 255, 0], [0, 0, 255], [255, 255, 0], [255, 0, 255], [0, 255, 255], [255, 255, 255], [0, 0, 0]];
            this.im = [0, 1, 2, 3, 4, 5, 6, 7, 8];
            var k, t;
            this.bp = function (l) {
                this.dX = new Uint8Array(g_unclaimedLandIndex);
                this.a67();
                dA && (dr.ds && dr.dt.zs ? this.yV() : 9 === dv ? this.a68() : this.dF(l))
            }
            ;
            this.yV = function () {
                var l, x = g_maxPlayerCount;
                this.im = [0, 1, 2, 3, 4, 5, 6, 7, 8];
                for (l = 0; l < x; l++)
                    this.dX[l] = dr.dt.zs[l]
            }
            ;
            this.a67 = function () {
                for (var l = this.im.length - 1; 0 <= l; l--)
                    this.im[l] = l;
                k = [];
                t = []
            }
            ;
            this.a68 = function () {
                var l;
                for (l = g_playerCount + e2.e3 - 1; 0 <= l; l--)
                    this.dX[l] = 1;
                for (l = g_playerCount + e2.e3; l < g_unclaimedLandIndex; l++)
                    this.dX[l] = 2;
                this.im[1] = 7;
                this.im[2] = 8
            }
            ;
            this.dF = function (l) {
                var x = new Uint8Array(g_playerCount)
                    , n = new Uint8Array(g_playerCount)
                    , z = new Uint16Array(8)
                    , y = new Uint16Array(this.im.length);
                this.a6C(l, x, n, z);
                this.yT(z);
                g_isSingleplayer || this.a6D(y, x, n);
                this.a6E(x, n, y);
                g_isSingleplayer ? this.a6F() : this.a6G()
            }
            ;
            this.a6C = function (l, x, n, z) {
                var y, A, B = this.im.length - 1, C = new Uint16Array(B);
                for (y = g_playerCount - 1; 0 <= y; y--) {
                    for (A = B; 1 <= A; A--)
                        C[A - 1] = Math.abs(4 * l[y].xX[0] - g[A][0]) + Math.abs(4 * l[y].xX[1] - g[A][1]) + Math.abs(4 * l[y].xX[2] - g[A][2]);
                    var E = 768;
                    for (A = B - 1; 0 <= A; A--) {
                        var F = (A + y) % B;
                        C[F] < E && (E = C[F],
                            x[y] = F)
                    }
                    z[x[y]] += 4;
                    E = 768;
                    for (A = B - 1; 0 <= A; A--)
                        F = (A + y) % B,
                        C[F] < E && F !== x[y] && (E = C[F],
                            n[y] = F);
                    z[n[y]]++
                }
            }
            ;
            this.yT = function (l) {
                var x, n, z = this.im.length - 1;
                for (x = z; 0 <= x; x--)
                    this.im[x] = x;
                for (x = z - 1; 0 <= x; x--)
                    l[x]++;
                for (x = 1; x <= z; x++) {
                    var y = 0;
                    for (n = 1; n < z; n++)
                        l[n] > l[y] && (y = n);
                    l[y] = 0;
                    this.im[x] = y + 1
                }
            }
            ;
            this.a6D = function (l, x, n) {
                var z = this.im.length - 1
                    , y = new Uint16Array(z)
                    , A = [];
                var B = g_playerCount - 1;
                a: for (; 0 <= B; B--) {
                    var C = B;
                    var E = a1T[C].indexOf("[");
                    if (0 > E)
                        E = null;
                    else {
                        var F = a1T[C].indexOf("]");
                        E = 1 < F - E && 8 >= F - E ? a1T[C].substring(E + 1, F).toUpperCase().trim() : null
                    }
                    if (null !== E) {
                        for (F = k.length - 1; 0 <= F; F--)
                            if (E === k[F]) {
                                t[F].push(B);
                                continue a
                            }
                        k.push(E);
                        A.push(false);
                        t.push([]);
                        t[k.length - 1].push(B)
                    }
                }
                for (F = k.length - 1; 0 <= F; F--) {
                    C = -1;
                    for (E = k.length - 1; 0 <= E; E--)
                        !A[E] && (-1 === C || t[E].length > t[C].length) && (C = E);
                    for (E = z - 1; 0 <= E; E--)
                        y[E] = 1;
                    for (E = t[C].length - 1; 0 <= E; E--)
                        y[x[t[C][E]]] += 3,
                            y[n[t[C][E]]]++;
                    for (B = z - 1; 0 <= B; B--) {
                        var G = C % z;
                        for (E = z - 1; 0 <= E; E--)
                            y[E] > y[G] && (G = E);
                        var N = -1;
                        for (E = jD; 0 < E; E--)
                            if (this.im[E] === G + 1) {
                                N = E;
                                break
                            }
                        y[G] = 0;
                        if (-1 !== N) {
                            G = 0;
                            for (E = jD; 0 < E; E--)
                                l[N] > l[E] && G++;
                            if (G !== jD - 1) {
                                for (E = t[C].length - 1; 0 <= E; E--)
                                    l[N]++,
                                        this.dX[t[C][E]] = N;
                                break
                            }
                        }
                    }
                    A[C] = true
                }
            }
            ;
            this.a6E = function (l, x, n) {
                var z;
                var y = this.im.length - 1;
                var A = as(g_playerCount, jD);
                0 < g_playerCount % jD && A++;
                var B = new Uint8Array(y + 1);
                for (z = y; 1 <= z; z--)
                    B[this.im[z]] = z;
                for (y = 0; y < g_playerCount; y++)
                    z = B[l[y] + 1],
                    0 === this.dX[y] && z <= jD && n[z] < A && (n[z]++,
                        this.dX[y] = z);
                for (y = 0; y < g_playerCount; y++)
                    z = B[x[y] + 1],
                    0 === this.dX[y] && z <= jD && n[z] < A && (n[z]++,
                        this.dX[y] = z);
                for (z = jD; 1 <= z; z--)
                    for (y = g_playerCount - 1; 0 <= y && !(n[z] >= A); y--)
                        0 === this.dX[y] && (n[z]++,
                            this.dX[y] = z)
            }
            ;
            this.a6F = function () {
                var l, x = new Uint16Array(jD);
                x[jD - 1] = g_unclaimedLandIndex;
                for (l = jD - 2; 0 <= l; l--)
                    x[l] = dy.dz[l].mt;
                x[0]--;
                var n = 0 === x[0] ? 1 : 0;
                for (l = g_playerCount; l < g_unclaimedLandIndex; l++)
                    this.dX[l] = n + 1,
                        x[n]--,
                    0 >= x[n] && n++
            }
            ;
            this.a6G = function () {
                for (var l = g_playerCount; l < g_unclaimedLandIndex; l++)
                    this.dX[l] = 1 + l % jD
            }
            ;
            this.il = function (l) {
                if (g_isSingleplayer)
                    return [512, ""];
                var x, n, z = -1, y = -1;
                for (n = k.length - 1; 0 <= n; n--)
                    for (x = t[n].length - 1; 0 <= x && this.im[this.dX[t[n][x]]] === l; x--)
                        if (-1 === z || sM[t[n][x]] < sM[z])
                            z = t[n][x],
                                y = n;
                return -1 === z || 0 === g_isPlayersAliveArray[z] ? [512, ""] : [z, k[y]]
            }
        }

        function bV() {
            for (var g, k, t = aQ - 1; 0 <= t; t--)
                g = as(aS[t], 4) % aZ,
                    k = as(aS[t], 4 * aZ),
                    d0[aM] = d0[aM] > g ? g : d0[aM],
                    d3[aM] = d3[aM] > k ? k : d3[aM],
                    cz[aM] = cz[aM] < g ? g : cz[aM],
                    d2[aM] = d2[aM] < k ? k : d2[aM]
        }

        function aj() {
            var g = b4[aM].length, k;
            var t = g - 1;
            a: for (; 0 <= t; t--) {
                for (k = 3; 0 <= k; k--) {
                    var l = b4[aM][t] + aV[k];
                    if (b5.bG(l) || b5.bE(l) && b5.bF(l) !== aM) {
                        b5.cW(b4[aM][t], aM);
                        continue a
                    }
                }
                b4[aM][t] = b4[aM][g - 1];
                b4[aM].pop();
                g--
            }
        }

        function ak() {
            var g = bM[aM].length, k, t, l = g - 1;
            a: for (; 0 <= l; l--) {
                var x = t = false;
                for (k = 3; 0 <= k; k--) {
                    var n = bM[aM][l] + aV[k];
                    if (b5.yf(n, aM))
                        continue a;
                    x = x || b5.yi(n);
                    t = t || b5.ye(n)
                }
                x ? bN[aM].push(bM[aM][l]) : t ? bQ[aM].push(bM[aM][l]) : b5.he(bM[aM][l], aM);
                bM[aM][l] = bM[aM][g - 1];
                bM[aM].pop();
                g--
            }
        }

        function bK() {
            g_playerLandArray[aP] -= aQ
        }

        function bL(g) {
            for (var k = g.length, t = k - 1; 0 <= t; t--)
                b5.hm(aP, g[t]) || (g[t] = g[k - 1],
                    g.pop(),
                    k--)
        }

        function bO(g) {
            for (var k = g.length, t = k - 1; 0 <= t; t--)
                !b5.hm(aP, g[t]) && b5.b6(g[t]) && (g[t] = g[k - 1],
                    g.pop(),
                    k--)
        }

        function bP(g) {
            for (var k = g.length, t, l, x = k - 1; 0 <= x; x--)
                for (t = 3; 0 <= t; t--)
                    if (l = g[x] + aV[t],
                        b5.yf(l, aP)) {
                        bM[aP].push(g[x]);
                        g[x] = g[k - 1];
                        g.pop();
                        k--;
                        break
                    }
        }

        function bR() {
            for (var g, k, t = aQ - 1; 0 <= t; t--)
                for (g = 3; 0 <= g; g--)
                    k = aS[t] + aV[g],
                    b5.yg(aP, k) && b5.yh(k) && (bM[aP].push(k),
                        b5.b7(k, aP))
        }

        function bS() {
            var g;
            a: for (; d3[aP] < d2[aP];) {
                for (g = cz[aP]; g >= d0[aP]; g--)
                    if (b5.hm(aP, 4 * (d3[aP] * aZ + g)))
                        break a;
                d3[aP]++
            }
            a: for (; d3[aP] < d2[aP];) {
                for (g = cz[aP]; g >= d0[aP]; g--)
                    if (b5.hm(aP, 4 * (d2[aP] * aZ + g)))
                        break a;
                d2[aP]--
            }
            a: for (; d0[aP] < cz[aP];) {
                for (g = d2[aP]; g >= d3[aP]; g--)
                    if (b5.hm(aP, 4 * (g * aZ + d0[aP])))
                        break a;
                d0[aP]++
            }
            a: for (; d0[aP] < cz[aP];) {
                for (g = d2[aP]; g >= d3[aP]; g--)
                    if (b5.hm(aP, 4 * (g * aZ + cz[aP])))
                        break a;
                cz[aP]--
            }
        }

        function ch(g, k) {
            return 0 === dW.dX[g] || dW.dX[g] !== dW.dX[k]
        }

        function lg(g, k) {
            var t, l = ae.af(g);
            for (t = 0; t < l; t++)
                if (0 === ae.ag(g, t)) {
                    var x = ae.al(g, t);
                    if (x === g_unclaimedLandIndex) {
                        if (k === g_unclaimedLandIndex)
                            break;
                        if (lf(k))
                            return true
                    } else if (k === g_unclaimedLandIndex) {
                        if (lf(x))
                            return true
                    } else if (lk(k, x))
                        return true
                }
            return false
        }

        function lf(g) {
            var k, t, l = bM[g].length;
            for (k = 3; 0 <= k; k--) {
                var x = aV[k];
                for (t = 0; t < l; t++)
                    if (b5.bG(bM[g][t] + x))
                        return true
            }
            return false
        }

        function lk(g, k) {
            var t;
            var l = bM[g].length;
            var x = bM[k].length;
            x < l && (l = g,
                g = k,
                k = l,
                l = x);
            for (t = 3; 0 <= t; t--) {
                var n = aV[t];
                for (x = 0; x < l; x++) {
                    var z = bM[g][x] + n;
                    if (b5.bE(z) && b5.bF(z) === k)
                        return true
                }
            }
            return false
        }

        function a2R() {
            function g() {
                c4.gc = performance.now();
                c4.a6a();
                window.requestAnimationFrame(g)
            }

            function k() {
                var t = performance.now();
                c4.gc + 1500 < t && (c4.gc = t,
                    c4.a6a())
            }

            this.c5 = false;
            this.a6c = this.a6b = this.a6a = null;
            this.gc = 0;
            this.a6d = -1;
            this.bp = function () {
                window.requestAnimationFrame(g);
                this.gc = performance.now()
            }
            ;
            this.a2W = function () {
                1 !== fZ || !g_isSingleplayer || fq.lu || fc || fq.m0();
                -1 === this.a6d && (this.a6d = setInterval(k, 2E3))
            }
            ;
            this.xn = function () {
                this.c5 = true;
                -1 !== this.a6d && (clearInterval(this.a6d),
                    this.a6d = -1)
            }
            ;
            this.jd = function () {
                this.a6a = this.a6g;
                this.a6b = null;
                this.c5 = true
            }
            ;
            this.jY = function () {
                this.a6b = new a6h;
                this.a6a = this.a6i
            }
            ;
            this.jZ = function () {
                this.a6c = new a6j;
                this.a6c.bp();
                this.a6a = this.a6k
            }
            ;
            this.a6g = function () {
                jf.dF();
                ji.dF();
                jq.dF();
                eD.dF();
                eY.wM();
                cD.dF();
                this.c5 && (this.c5 = false,
                    aJ.cG())
            }
            ;
            this.a6i = function () {
                this.a6b.dF()
            }
            ;
            this.a6k = function () {
                this.a6c.dF()
            }
            ;
            this.dU = function () {
                return g_isSingleplayer ? this.a6b.wJ : this.a6c.wJ
            }
            ;
            this.tZ = function () {
                return 56
            }
        }

        function a6h() {
            this.gc = c4.gc;
            this.a5c = 56;
            this.wJ = this.bs = 0;
            this.a6l = false;
            this.dF = function () {
                jq.dF();
                fc ? ec() : 0 === this.bs ? c4.gc >= this.gc && (this.gc += this.a5c * Math.floor(1 + (c4.gc - this.gc) / this.a5c),
                    2 === fZ || fq.lu ? e8() : (eE(),
                        this.wJ++,
                        h8.tz()),
                    this.bs++) : (fq.lu ? ec() : (c4.c5 = true,
                    ea()),
                    this.bs = 0);
                eU();
                c4.c5 && (c4.c5 = false,
                    hp())
            }
        }

        function a6j() {
            this.gc = c4.gc;
            this.a5c = 56;
            this.wI = this.wJ = this.bs = 0;
            this.a6m = null;
            this.a6n = 7;
            var g;
            this.bp = function () {
                this.wI = 0;
                this.a6m = [];
                g = this.wJ = this.bs = 0
            }
            ;
            this.a6o = function (k) {
                if (fc)
                    this.ta(k);
                else if (this.a6m.push(k),
                2 === fZ) {
                    for (k = 0; k < this.a6m.length; k++)
                        jp.a6p(this.a6m[k], g),
                            g = (g + 1) % 8;
                    this.a6m = []
                }
            }
            ;
            this.ta = function (k) {
                jp.a6p(k, g);
                g = (g + 1) % 8;
                eB.ta(this.wI);
                this.wI === jF ? (fd.dF(),
                    this.wJ = this.bs = this.wI = 0,
                    this.gc = c4.gc) : (this.wI++,
                    eA.j4(),
                    eA.eb(true),
                    h8.tz())
            }
            ;
            this.dF = function () {
                jq.dF();
                fc ? (c4.c5 = eB.ta(-1) || c4.c5,
                    ec()) : 0 === this.bs ? c4.gc >= this.gc && (this.gc += this.a5c * Math.floor(1 + (c4.gc - this.gc) / this.a5c),
                    2 === fZ ? e8() : this.a6q(),
                    this.bs++) : (c4.c5 = true,
                    ea(),
                    this.bs = 0);
                eU();
                c4.c5 && (c4.c5 = false,
                    hp())
            }
            ;
            this.a6q = function () {
                if (this.wJ !== 7 * this.wI)
                    eE(),
                        this.wJ++,
                        h8.tz();
                else {
                    for (var k = false; this.a6s();)
                        if (k = true,
                            eE(),
                            this.wJ++,
                        0 < this.a6m.length)
                            for (var t = this.a6n - 2; 0 <= t; t--)
                                eE(),
                                    this.wJ++;
                        else
                            break;
                    k ? h8.tz() : (e8(),
                        h8.j6())
                }
            }
            ;
            this.a6s = function () {
                return 0 < this.a6m.length ? (this.wI++,
                    jp.a6p(this.a6m[0], g),
                    g = (g + 1) % 8,
                    this.a6m.shift(),
                    true) : false
            }
        }

        function kl() {
            function g(k, t) {
                8 !== aJ.pY() || 0 !== t && t !== dv || g_isSingleplayer || e9.my(k)
            }

            this.gW = 0;
            this.a6t = true;
            this.dF = function () {
                c4.gc > this.gW && (this.gW = c4.gc + 2500,
                    this.a6u())
            }
            ;
            this.a6u = function () {
                var k = new Date;
                var t = k.getUTCSeconds();
                this.a6t ? 55 > t || -1 !== c4.a6d || (this.a6t = false,
                    t = k.getUTCMinutes(),
                    4 === t % 5 ? (k = k.getUTCHours(),
                        59 === t && 15 <= k && 21 >= k ? g("Upcoming Game of the Day", 0) : 14 === t % 30 ? g("Upcoming Alliance Contest", 0) : 29 === t % 30 ? g("Upcoming Battle Royale Contest", 0) : g("Upcoming One-vs-One Game", 8)) : 2 === t % 5 && g("Upcoming Zombie Game", 9)) : 55 > t && (this.a6t = true)
            }
        }

        function kY() {
            function g() {
                return Math.pow(Math.pow(x - t, 2) + Math.pow(n - l, 2), .5)
            }

            function k(z) {
                t = pM * z.touches[0].clientX;
                l = pM * z.touches[0].clientY;
                x = pM * z.touches[1].clientX;
                n = pM * z.touches[1].clientY
            }

            var t, l, x, n;
            this.pN = function (z) {
                return 1 < z.touches.length ? (k(z),
                    hu.lF(),
                    true) : false
            }
            ;
            this.pS = function (z) {
                if (0 === fZ)
                    return false;
                if (1 < z.touches.length) {
                    if (!eV.h0())
                        return true;
                    var y = g();
                    k(z);
                    z = g();
                    gj.rL(Math.floor((t + x) / 2), Math.floor((l + n) / 2), z / y);
                    return c4.c5 = true
                }
                return false
            }
        }

        function kZ() {
            function g(x, n) {
                for (var z = Array(x), y = 0; y < x; y++)
                    z[y] = k(n, 10);
                return m.iU(z)
            }

            function k(x, n) {
                for (var z = 0, y, A, B = l; B < l + n; B++)
                    y = as(B, 8),
                        A = 7 - B % 8,
                        z |= (x[y] >> A & 1) << l + n - B - 1;
                l += n;
                return z
            }

            var t, l;
            this.a5a = function (x, n) {
                l = 0;
                t = n.length;
                if (0 === t)
                    eD.a20(x, 3205);
                else {
                    var z = k(n, 1);
                    if (0 === z)
                        if (z = k(n, 2),
                        0 === z)
                            if (0 === k(n, 1)) {
                                if (0 === x && 8 !== aJ.pY() && !(4 > t)) {
                                    uS.br(0, g(k(n, 5), n));
                                    uS.br(1, "[" + g(k(n, 3), n) + "]");
                                    var y = k(n, 12)
                                        , A = k(n, 6)
                                        , B = Array(y);
                                    for (z = 0; z < y; z++)
                                        B[z] = k(n, A);
                                    jg.ro(B)
                                }
                            } else {
                                if (8 !== aJ.pY())
                                    if (3 > t)
                                        eD.a20(x, 3208);
                                    else {
                                        y = k(n, 1);
                                        A = k(n, 16);
                                        B = k(n, 4);
                                        var C = [];
                                        for (z = 0; z < B; z++) {
                                            var E = k(n, 14);
                                            var F = k(n, 5);
                                            F = g(F, n);
                                            C.push({
                                                name: F,
                                                iC: E
                                            })
                                        }
                                        0 === y ? cD.uL(0, C, 10, 1, .36, .55, A) : cD.uL(1, C, 100, 2, .47, .5, A)
                                    }
                            }
                        else if (1 === z)
                            if (x !== eD.w0)
                                eD.close(x, 3239);
                            else if (6 === aJ.pY() && jr.bp(),
                            7 !== aJ.pY())
                                eD.close(x, 3251);
                            else {
                                y = [0, 0, 0, 0];
                                A = k(n, 6);
                                for (z = 0; 4 > z; z++)
                                    y[z] = k(n, A);
                                B = k(n, 4);
                                C = [];
                                for (z = 0; z < B; z++)
                                    C.push({
                                        id: k(n, 5),
                                        jJ: k(n, 4),
                                        x3: 1 === k(n, 1),
                                        x0: k(n, 6),
                                        x1: k(n, 14),
                                        x6: k(n, A),
                                        x7: k(n, 9) + 1,
                                        vd: k(n, 10)
                                    });
                                jr.uT(y, C)
                            }
                        else
                            2 !== z && 3 !== z || eY.bp(n);
                    else
                        1 === z && (z = aJ.pY(),
                            8 !== z ? 10 === z && eD.a20(x, 3243) : x !== eD.jc ? eD.a20(x, 3244) : 0 === k(n, 1) ? c4.a6c.a6o(n) : (z = k(n, 2),
                                0 === z ? 3 !== t ? eD.a20(eD.jc, 3230) : (z = k(n, 9),
                                    y = k(n, 7),
                                0 !== g_isPlayersAliveArray[z] && 0 !== g_isPlayersAliveArray[g_localPlayerIndex] && (y %= a5.a6,
                                    e9.mp(z, g_localPlayerIndex, y),
                                    eA.n2(z, 1, y))) : 1 === z ? 2 !== t ? eD.a20(eD.jc, 3235) : (z = k(n, 9),
                                0 !== g_isPlayersAliveArray[z] && 0 !== g_isPlayersAliveArray[g_localPlayerIndex] && eQ.a1d(0, [z], true) && e9.lY(z, 1)) : 3 !== t ? eD.a20(eD.jc, 3236) : (z = k(n, 9),
                                    y = k(n, 9),
                                0 !== g_isPlayersAliveArray[z] && 0 !== g_isPlayersAliveArray[y] && 0 !== g_isPlayersAliveArray[g_localPlayerIndex] && eQ.a1d(1, [z], true) && (eA.n2(z, 3, 96),
                                    eA.n2(y, 4, 96),
                                    e9.n5(z, y)))))
                }
            }
            ;
            this.wN = function (x) {
                l = 1;
                t = x.length;
                if (2 === k(x, 2)) {
                    l += 20;
                    for (var n = k(x, 9), z = k(x, 14), y = k(x, 4), A = 1 === k(x, 1), B = k(x, 6), C = k(x, 14), E = k(x, 9) + 1, F = [], G, N, I, D = 0; D < E; D++)
                        G = k(x, 1),
                            N = [k(x, 6), k(x, 6), k(x, 6)],
                            I = g(k(x, 5), x),
                            F.push({
                                name: I,
                                xX: N,
                                xY: G
                            });
                    aJ.vj();
                    xD(B, C);
                    1 === F.length && dy.xQ(y);
                    jG(z, n, F, y, A)
                } else {
                    l += 20;
                    n = k(x, 1);
                    z = k(x, 14);
                    y = k(x, 4);
                    A = 1 === k(x, 1);
                    B = k(x, 6);
                    C = k(x, 14);
                    E = [];
                    for (D = 0; 2 > D; D++)
                        F = k(x, 1),
                            G = [k(x, 6), k(x, 6), k(x, 6)],
                            N = k(x, 14),
                            I = g(k(x, 5), x),
                            E.push({
                                name: I,
                                xX: G,
                                iC: N,
                                xY: F
                            });
                    aJ.vj();
                    xD(B, C);
                    jG(z, n, E, y, A)
                }
            }
            ;
            this.wG = function (x) {
                l = 1;
                t = x.length;
                var n = k(x, 2)
                    , z = k(x, 10);
                eD.w0 > eD.wL && (z += eD.wL);
                if (eD.w0 === z)
                    return eD.jc = z,
                        false;
                eD.close(eD.w0, 3247);
                eD.jc = z;
                eY.wA = k(x, 10);
                eY.wB = k(x, 2 === n ? 9 : 1);
                eD.rk(z, 5) && ir.a1x();
                return true
            }
            ;
            this.a6p = function (x, n) {
                l = 2;
                var z = 8 * x.length;
                if (k(x, 3) !== n)
                    eD.a20(eD.jc, 3248);
                else
                    for (; l + 8 <= z;) {
                        var y = k(x, 3);
                        var A = k(x, 9);
                        if (0 === y) {
                            y = k(x, 10);
                            var B = k(x, 9);
                            B = B === A ? g_unclaimedLandIndex : B;
                            eG.fY(A, y, B)
                        } else if (1 === y) {
                            y = k(x, 10);
                            B = k(x, 11);
                            var C = k(x, 11);
                            eG.fb(A, y, B, C)
                        } else
                            2 === y ? (B = k(x, 9),
                                B = B === A ? g_unclaimedLandIndex : B,
                                eG.fe(A, B)) : 3 === y ? eG.fh(A) : 4 === y ? (y = k(x, 7),
                                eA.n2(A, 0, y)) : 5 === y ? eG.fp(A) : 6 === y ? eG.fg(A, k(x, 1)) : 7 === y && eG.ff(A, 1 + k(x, 11))
                    }
            }
        }

        function a2O() {
            this.a5O = this.a5N = this.a5M = this.a5L = this.a5Q = this.a5P = 0;
            this.u0 = [0, 0, 0, 0];
            this.gz = function () {
                this.a5P = gj.gF();
                this.a5Q = gj.cF();
                this.a5L = -this.a5P;
                this.a5M = -this.a5Q;
                this.a5N = gE / g7;
                this.a5O = cB / g7;
                this.u0[0] = Math.floor(this.a5L);
                this.u0[1] = Math.floor(this.a5M);
                this.u0[2] = Math.floor(this.u0[0] + this.a5N + 1);
                this.u0[3] = Math.floor(this.u0[1] + this.a5O + 1);
                h8.tx = true
            }
        }

        function ka() {
            var g, k;
            this.bp = function () {
                g = 1;
                k = 0
            }
            ;
            this.dF = function () {
                0 < g && (k = 0 === k ? c4.gc + 16 : k,
                    g -= .001 * (c4.gc - k),
                    g = 0 > g ? 0 : g,
                    k = c4.gc,
                    c4.c5 = true)
            }
            ;
            this.cG = function () {
                0 < g && (cH.fillStyle = "rgba(0,0,0," + g + ")",
                    cH.fillRect(0, 0, gE, cB))
            }
        }

        function kf() {
            function g(k, t, l, x, n) {
                k >= za || (x0 === k && (cH.fillStyle = oG,
                    cH.fillRect(t, l, x, n),
                    cH.fillStyle = cK),
                    cH.strokeRect(t, l, x, n),
                    cH.fillText(jm.bz(k).name, Math.floor(t + .5 * x), Math.floor(l + .55 * n)))
            }

            this.lC = false;
            this.xP = [0, 0, 0, 0];
            this.show = function () {
                this.lC = true;
                this.lv();
                c4.c5 = true
            }
            ;
            this.lv = function () {
                var k = as(za + za % 2, 2);
                k = s - k * cA;
                this.xP[2] = q ? Math.floor(.75 * pI) : Math.floor(.5 * pI);
                this.xP[3] = Math.floor(1.2 * this.xP[2]);
                this.xP[3] > k && (this.xP[3] = k,
                    this.xP[2] = Math.floor(k / 1.2));
                this.xP[0] = Math.floor((r - this.xP[2]) / 2);
                this.xP[1] = Math.floor((s - this.xP[3]) / 2)
            }
            ;
            this.lm = function (k, t) {
                return k < this.xP[0] || t < this.xP[1] || k > this.xP[0] + this.xP[2] || t > this.xP[1] + this.xP[3] ? false : true
            }
            ;
            this.c7 = function (k, t) {
                var l = as(za + za % 2, 2);
                c4.c5 = true;
                if (k < this.xP[0] || t < this.xP[1] || k > this.xP[0] + this.xP[2] || t > this.xP[1] + this.xP[3])
                    return this.lC = false,
                        true;
                var x = Math.floor(.13 * this.xP[3]);
                if (t < this.xP[1] + x)
                    return k > this.xP[0] + this.xP[2] - 1.2 * x && (this.lC = false),
                        true;
                x = Math.floor(l * (t - this.xP[1] - x) / (this.xP[3] - x));
                x = 0 > x ? 0 : x > l - 1 ? l - 1 : x;
                k > this.xP[0] + this.xP[2] / 2 && (x += l);
                if (x >= za)
                    return true;
                xD(x, Math.floor(16384 * Math.random()));
                return true
            }
            ;
            this.cG = function () {
                var k, t = Math.floor(.13 * this.xP[3]), l = as(za + za % 2, 2),
                    x = (this.xP[3] - t - (l + 1) * cA) / l, n = Math.floor((this.xP[2] - 3 * cA) / 2);
                cH.lineWidth = 2;
                cH.textAlign = cJ;
                cH.textBaseline = cI;
                cH.font = bt + Math.floor(.48 * x) + bu;
                cH.fillStyle = hy;
                cH.fillRect(this.xP[0], this.xP[1], this.xP[2], this.xP[3]);
                cH.fillStyle = oG;
                cH.fillRect(this.xP[0], this.xP[1], this.xP[2], t);
                cH.strokeStyle = cK;
                cH.strokeRect(this.xP[0], this.xP[1], this.xP[2], this.xP[3]);
                cH.fillStyle = cK;
                for (k = l - 1; 0 <= k; k--) {
                    var z = Math.floor(this.xP[1] + t + cA + k * (x + cA));
                    g(k, this.xP[0] + cA, z, n, x);
                    g(k + l, this.xP[0] + n + 2 * cA, z, n, x)
                }
                fq.m9(Math.floor(this.xP[0] + this.xP[2] - .8 * t), Math.floor(this.xP[1] + .25 * t), Math.floor(.5 * t));
                cH.setTransform(1, 0, 0, 1, 0, 0)
            }
        }

        function kb() {
            function g(n) {
                var z = generatePassword()
                    , y = Math.floor(z / 16777216);
                l(n, 24, y);
                l(n, 24, z - 16777216 * y)
            }

            function k(n) {
                l(n, 14, a26);
                l(n, 4, g_isIOSUser ? 2 : 12 <= d ? 1 : 0 < d ? 3 : 0);
                l(n, 1, a2A ? 1 : 0);
                l(n, 1, a29 ? 1 : 0);
                l(n, 5, (new Date).getHours() % 24)
            }

            function t(n) {
                return as(n, 8) + (0 < n % 8 ? 1 : 0)
            }

            function l(n, z, y) {
                for (var A, B, C = x; C < x + z; C++)
                    A = as(C, 8),
                        B = 7 - C % 8,
                        n[A] |= (y >> z - (C - x + 1) & 1) << B;
                x += z
            }

            var x;
            this.rn = function () {
                var n = new Uint8Array(3);
                x = 0;
                l(n, 1, 0);
                l(n, 3, 0);
                l(n, 14, a26);
                eD.send(0, n)
            }
            ;
            this.vS = function (n) {
                var z = m.iT(je.xW())
                    , y = z.length
                    , A = new Uint8Array(t(105 + 10 * y));
                x = 0;
                l(A, 1, 0);
                l(A, 3, 1);
                l(A, 10, a2B);
                var B = cC.mC[2].ih.vA();
                l(A, 6, B[0]);
                l(A, 6, B[1]);
                l(A, 6, B[2]);
                g(A);
                k(A);
                for (B = 0; B < y; B++)
                    l(A, 10, z[B]);
                eD.w0 = n;
                eD.send(n, A)
            }
            ;
            this.uJ = function (n, z) {
                var y = new Uint8Array(5);
                x = 0;
                l(y, 1, 0);
                l(y, 3, 7);
                l(y, 3, 0);
                l(y, 14, a26);
                l(y, 1, z);
                l(y, 16, Math.abs(4096 + cD.position[z] + cD.uI[z]) % 65536);
                eD.send(n, y)
            }
            ;
            this.a1y = function (n) {
                var z, y = new Uint8Array(100);
                x = 0;
                l(y, 1, 0);
                l(y, 3, 7);
                l(y, 3, 1);
                l(y, 14, a2D);
                var A = m.iT(a2E)
                    , B = ql(A.length, 77);
                l(y, 7, B);
                for (z = 0; z < B; z++)
                    l(y, 10, A[z]);
                eD.send(n, y)
            }
            ;
            this.xu = function (n) {
                var z;
                if (!(je.xk + 7E3 > c4.gc)) {
                    je.xk = c4.gc;
                    var y = new Uint8Array(17);
                    x = 0;
                    l(y, 1, 0);
                    l(y, 3, 7);
                    l(y, 3, 2);
                    g(y);
                    var A = mc(je.xj.length - 20, 0);
                    for (z = je.xj.length - 1; z >= A; z--)
                        l(y, 4, Math.abs(je.xj.charCodeAt(z) - 48) % 10);
                    eD.send(n, y)
                }
            }
            ;
            this.a1p = function (n, z) {
                var y = new Uint8Array(1);
                x = 0;
                l(y, 1, 0);
                l(y, 3, 5);
                l(y, 1, z ? 1 : 0);
                eD.send(n, y)
            }
            ;
            this.xH = function (n) {
                var z = new Uint8Array(1);
                x = 0;
                l(z, 1, 0);
                l(z, 3, 2);
                l(z, 4, n);
                eD.send(eD.w0, z)
            }
            ;
            this.a1x = function () {
                var n = new Uint8Array(7);
                x = 0;
                l(n, 1, 0);
                l(n, 3, 6);
                l(n, 8, eD.n0());
                l(n, 10, eY.wA);
                l(n, 9, eY.wB);
                l(n, 10, a2B);
                l(n, 14, a26);
                eD.send(eD.jc, n)
            }
            ;
            this.lU = function (n, z) {
                var y = new Uint8Array(3);
                x = 0;
                l(y, 1, 1);
                l(y, 3, 0);
                l(y, 10, n);
                l(y, 9, z);
                eD.send(eD.jc, y)
            }
            ;
            this.lW = function (n, z, y) {
                var A = new Uint8Array(5);
                x = 0;
                l(A, 1, 1);
                l(A, 3, 1);
                l(A, 10, n);
                l(A, 11, z);
                l(A, 11, y);
                eD.send(eD.jc, A)
            }
            ;
            this.q6 = function (n) {
                var z = new Uint8Array(2);
                x = 0;
                l(z, 1, 1);
                l(z, 3, 2);
                l(z, 1, 0);
                l(z, 9, n);
                eD.send(eD.jc, z)
            }
            ;
            this.q7 = function (n) {
                var z = new Uint8Array(2);
                x = 0;
                l(z, 1, 1);
                l(z, 3, 2);
                l(z, 1, 1);
                l(z, 11, n - 1);
                eD.send(eD.jc, z)
            }
            ;
            this.is = function (n, z) {
                var y = new Uint8Array(4);
                x = 0;
                l(y, 1, 1);
                l(y, 3, 3);
                l(y, 12, n);
                l(y, 10, z);
                eD.send(eD.jc, y)
            }
            ;
            this.m3 = function () {
                var n = new Uint8Array(1);
                x = 0;
                l(n, 1, 1);
                l(n, 3, 4);
                eD.send(eD.jc, n)
            }
            ;
            this.o8 = function (n) {
                var z = new Uint8Array(2);
                x = 0;
                l(z, 1, 1);
                l(z, 3, 5);
                l(z, 7, n);
                eD.send(eD.jc, z)
            }
            ;
            this.o9 = function (n, z) {
                e9.mp(g_localPlayerIndex, z, n);
                var y = new Uint8Array(3);
                x = 0;
                l(y, 1, 1);
                l(y, 3, 6);
                l(y, 2, 0);
                l(y, 9, z);
                l(y, 7, n);
                eD.send(eD.jc, y)
            }
            ;
            this.lZ = function (n) {
                var z = new Uint8Array(2);
                x = 0;
                l(z, 1, 1);
                l(z, 3, 6);
                l(z, 2, 1);
                l(z, 9, n);
                eD.send(eD.jc, z)
            }
            ;
            this.lQ = function (n, z) {
                var y, A = n.length, B = new Uint8Array(t(15 + 9 * A));
                x = 0;
                l(B, 1, 1);
                l(B, 3, 6);
                l(B, 2, 2);
                l(B, 9, z);
                for (y = 0; y < A; y++)
                    l(B, 9, n[y]);
                eD.send(eD.jc, B)
            }
            ;
            this.qg = function (n) {
                var z = new Uint8Array(1);
                x = 0;
                l(z, 1, 1);
                l(z, 3, 7);
                l(z, 1, n ? 1 : 0);
                eD.send(eD.jc, z)
            }
            ;
            this.xU = function (n) {
                var z = new Uint8Array(4);
                x = 0;
                l(z, 1, 0);
                l(z, 3, 3);
                k(z);
                eD.send(n, z)
            }
        }

        setTimeout(aI, 1E4);
    }
)();
