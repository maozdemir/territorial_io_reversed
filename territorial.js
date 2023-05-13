(function() {
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
        self.aiCommand746 = function(g) {
            0 === g ? aI() : 1 !== g || 14 > d || aJ.aK()
        }
        ;
        var aL, g_attackerIndex, aN, aO, g_defenderIndex, aQ, aR, aS, aT, aU, aV, aW, aX;
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
            g_attackerIndex = g;
            aX = false;
            ac();
            ad();
            for (g = ae.af(g_attackerIndex) - 1; 0 <= g; g--)
                0 === ae.ag(g_attackerIndex, g) && (aL = g,
                    ah());
            aX && ai()
        }
        function ai() {
            aj();
            ak()
        }
        function ah() {
            g_defenderIndex = ae.al(g_attackerIndex, aL);
            aN = ae.am(g_attackerIndex, aL);
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
            1 === ae.af(g_attackerIndex) && au.av(g_attackerIndex);
            if (g_attackerIndex !== g_localPlayerIndex)
                g_playerBalanceArray[g_attackerIndex] += aN,
                    ay.az(g_attackerIndex);
            else {
                var g = g_playerBalanceArray[g_attackerIndex];
                g_playerBalanceArray[g_attackerIndex] += aN;
                ay.az(g_attackerIndex);
                b0.b1[13] -= g_playerBalanceArray[g_attackerIndex] - g
            }
            ae.b2(g_attackerIndex, aL)
        }
        function ac() {
            var g = b4[g_attackerIndex].length;
            g = g > aR ? aR : g;
            aT = 0;
            for (--g; 0 <= g; g--)
                aU[aT++] = b4[g_attackerIndex][g]
        }
        function ad() {
            var g;
            for (g = b4[g_attackerIndex].length - 1; 0 <= g; g--)
                b5.b6(b4[g_attackerIndex][g]) && b5.b7(b4[g_attackerIndex][g], g_attackerIndex);
            b4[g_attackerIndex] = []
        }
        function an() {
            aQ = 0;
            g_defenderIndex === g_unclaimedLandIndex ? b9() : bA()
        }
        function bA() {
            var g, k;
            for (g = 3; 0 <= g; g--)
                for (k = aT - 1; 0 <= k; k--) {
                    var t = aU[k] + aV[g];
                    var l = as(t, 4);
                    0 === aW[l] && b5.bE(t) && b5.bF(t) === g_defenderIndex && (aW[l] = 1,
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
            g_defenderIndex !== g_unclaimedLandIndex && bJ()) : ao()
        }
        function bJ() {
            bK();
            bL(bM[g_defenderIndex]);
            bL(bN[g_defenderIndex]);
            bO(b4[g_defenderIndex]);
            bP(bN[g_defenderIndex]);
            bP(bQ[g_defenderIndex]);
            bR();
            bS()
        }
        function bI() {
            aX = true;
            ae.bT(g_attackerIndex, aL, aN);
            g_playerLandArray[g_attackerIndex] += aQ;
            bV();
            bW()
        }
        function bH() {
            return g_defenderIndex === g_unclaimedLandIndex ? bX() : bY()
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
                    ae.bh(g_defenderIndex, g_attackerIndex, 0),
                        g -= k;
                else {
                    ae.bh(g_defenderIndex, g_attackerIndex, k - g);
                    return
                }
            g = as(g, 2);
            g_playerBalanceArray[g_defenderIndex] = g_playerBalanceArray[g_defenderIndex] >= g ? g_playerBalanceArray[g_defenderIndex] - g : 0
        }
        function bd() {
            return ae.bi(g_defenderIndex, g_attackerIndex)
        }
        function bb() {
            return as(aQ * g_playerBalanceArray[g_defenderIndex], 1 + bj() * bk())
        }
        function bj() {
            return Math.floor(2 + bl(as(g_playerLandArray[g_defenderIndex], 100), 8))
        }
        function bk() {
            return bM[g_defenderIndex].length + as(bN[g_defenderIndex].length + bQ[g_defenderIndex].length, 50)
        }
        function bX() {
            aN -= aQ * at;
            return true
        }
        function bW() {
            for (var g = aQ - 1; 0 <= g; g--)
                b4[g_attackerIndex].push(aS[g]),
                    bM[g_attackerIndex].push(aS[g]),
                    b5.b7(aS[g], g_attackerIndex)
        }
        function bm() {
            var g = 1
                , k = [null, null];
            this.bp = function() {
                g = .72 * (q ? .0011 : .001) * bq;
                for (var t = 1; 0 <= t; t--)
                    k[t] && this.br(t, k[t].l)
            }
            ;
            this.br = function(t, l) {
                k[t] = {
                    l: l,
                    font: bt + 10 + bu
                };
                this.bv(t)
            }
            ;
            this.bv = function(t) {
                if (bw.bx() && k[t]) {
                    var l = k[t].l
                        , y = Math.floor(.15 * g * bw.bz(13).height)
                        , n = bt + y + bu
                        , z = c2.measureText(l, n)
                        , x = .8 * g * bw.bz(13).width;
                    z > x && (y = Math.floor(y * x / z),
                        n = bt + y + bu);
                    k[t] = {
                        l: l,
                        font: n
                    };
                    c4.c5 = true
                }
            }
            ;
            this.c6 = function() {
                return Math.floor(g * bw.bz(13).height)
            }
            ;
            this.actionWheelOnClick = function(t, l) {
                return !bw.bx() || t < cA || l < cB - cC.c1 - g * bw.bz(13).height - 2 * cA || l > cB - cC.c1 - 2 * cA ? false : t < cA + g * bw.bz(13).width ? (cD.cE(0),
                    true) : t < 2 * cA + g * bw.bz(13).width ? false : t < 2 * cA + 2 * g * bw.bz(13).width ? (cD.cE(1),
                    true) : false
            }
            ;
            this.cF = function() {
                return Math.floor(cB - cC.c1 - g * bw.bz(13).height - 2 * cA)
            }
            ;
            this.cG = function() {
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
        function cL(attackerIndex, targetID, t, attackingTroopNumber) {
            var y = as(3 * g_playerBalanceArray[attackerIndex], 256);
            attackingTroopNumber -= attackingTroopNumber >= as(g_playerBalanceArray[attackerIndex], 2) ? y : 0;
            cP(t, attackerIndex);
            ae.cQ(attackerIndex, attackingTroopNumber, targetID);
            g_playerBalanceArray[attackerIndex] -= attackingTroopNumber + y;
            au.cR(attackerIndex, false)
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
            var y = bM[g].length;
            var n = 256 <= y ? 12 : 32 <= y ? 6 : 1;
            y = y - 1 - ce.cf(n);
            cg = 0;
            a: for (; 0 <= y; y -= n)
                for (l = 3; 0 <= l; l--) {
                    var z = b5.bG(bM[g][y] + aV[l]) ? g_unclaimedLandIndex : b5.bF(bM[g][y] + aV[l]);
                    if (z === g_unclaimedLandIndex || b5.bE(bM[g][y] + aV[l]) && z !== g && (k || ch(g, z))) {
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
                    var y = b5.bG(bM[g][t] + aV[l]) ? g_unclaimedLandIndex : b5.bF(bM[g][t] + aV[l]);
                    if (y === g_unclaimedLandIndex || b5.bE(bM[g][t] + aV[l]) && y !== g && (k || ch(g, y)))
                        return ci[cg++] = y,
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
                var y = g_playerBalanceArray[ci[k]] + ae.bi(ci[k], g);
                y < l && (t = ci[k],
                    l = y)
            }
            return t
        }
        function cv(g) {
            var k = ci[0];
            if (1 === cg)
                return k;
            var t = as(cz[g] + d0[g], 2)
                , l = as(d2[g] + d3[g], 2)
                , y = d5(t - as(cz[k] + d0[k], 2)) + d5(l - as(d2[k] + d3[k], 2));
            for (g = cg - 1; 1 <= g; g--) {
                var n = d5(t - as(cz[ci[g]] + d0[ci[g]], 2)) + d5(l - as(d2[ci[g]] + d3[ci[g]], 2));
                n < y && (y = n,
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
            3 <= t && 2142 < c4.getTimeSinceGameStarted() && (k === g_unclaimedLandIndex || g_playerBalanceArray[k] < as(g_playerBalanceArray[g], 20)) && dG.dH(g - g_playerCount, 25)
        }
        function dI(g, k, t, l) {
            if (0 !== dW.dX[g] && !(5 === t && g_playerBalanceArray[g] < l || 4 === t && g_playerBalanceArray[g] < as(l, 2)))
                for (t = ce.cf(sp_Bots),
                         l = 0; l < sp_Bots; l++) {
                    var y = dZ[(l + t) % sp_Bots];
                    if (dW.dX[y] === dW.dX[g] && 1 === d7[y]) {
                        triggerSupport(g, y, k);
                        y < g_playerCount && ce.random() < ce.value(10) && (d7[y] = 0);
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
            var g, k, t, l, y, n;
            this.dl = "Very Easy;Easy;Normal;Hard;Harder;Very Hard".split(";");
            this.dm = [97, 95, 93, 90, 87, 84];
            this.dS = [98, 95, 90, 40, 20, 0];
            this.dn = [85, 70, 65, 30, 7, 3];
            this.dQ = [0, 0, 0, 0, 50, 90];
            this.bp = function() {
                var z;
                g = new Uint8Array(dq);
                k = new Uint16Array(dq);
                t = new Uint16Array(dq);
                l = new Uint8Array(dq);
                this.cN = new Uint8Array(dq);
                y = new Uint16Array(dq);
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
                    var x = 8 === dv ? 1 : 0;
                    for (z = dq - 1; 0 <= z; z--)
                        this.cN[z] = x
                }
                for (z = dq - 1; 0 <= z; z--)
                    2 >= this.cN[z] ? (l[z] = 5,
                        y[z] = n[z] = 1040,
                        0 === this.cN[z] ? (k[z] = 1E3,
                            t[z] = 1E3) : 1 === this.cN[z] ? (k[z] = 1E3,
                            t[z] = 920,
                            y[z] = n[z] = 1100) : (k[z] = 1E3,
                            t[z] = 870)) : 4 >= this.cN[z] ? (l[z] = 1 + ce.cf(20),
                        n[z] = 250 + ce.cf(1501),
                        y[z] = 500 + ce.cf(501),
                        3 === this.cN[z] ? (k[z] = 600 + ce.cf(101),
                            t[z] = 300 + ce.cf(401)) : (k[z] = 300 + ce.cf(201),
                            t[z] = 100 + ce.cf(201))) : (y[z] = 1E3,
                        n[z] = 1E3,
                        l[z] = 35 + ce.cf(16),
                        k[z] = 400 + ce.cf(101),
                        t[z] = 50 + ce.cf(101)),
                        g[z] = 1 + as(y[z] * ce.random(), 10 * ce.value(100))
            }
            ;
            this.dw = function() {
                var z, x;
                var A = e2.e3;
                for (z = A - 1; 0 <= z; z--)
                    this.cN[z] = 5;
                for (x = 0; 6 > x; x++)
                    if (0 < e2.e4[x]) {
                        for (z = A + e2.e4[x] - 1; z >= A; z--)
                            this.cN[z] = x;
                        A += e2.e4[x]
                    }
            }
            ;
            this.dH = function(z, x) {
                0 <= z && (g[z] = x)
            }
            ;
            this.dF = function(z) {
                if (0 === --g[z]) {
                    y[z] !== n[z] && (y[z] += y[z] < n[z] ? 3 : -3);
                    k[z] !== t[z] && (k[z] += k[z] < t[z] ? l[z] : -l[z],
                        k[z] = Math.abs(k[z] - t[z]) <= l[z] ? t[z] : k[z]);
                    g[z] = as(y[z], 10);
                    var x = z + g_playerCount;
                    dB(x, as(k[z] * g_playerBalanceArray[x], 1E3))
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
            eA.eb(2 === ec);
            eT.bv()
        }
        function ed() {
            eA.eb(true) && (c4.c5 = true);
            eD.dF()
        }
        function ee() {
            function g(A) {
                var B;
                for (B = l - 1; 0 <= B; B--)
                    0 === n[y[B]] && g_playerLandArray[y[B]] >= A && ab(y[B])
            }
            function k(A) {
                n[A] = 10 === n[A] ? t : 1E3 > g_playerLandArray[A] ? 3 : 1E4 > g_playerLandArray[A] ? 2 : 6E4 > g_playerLandArray[A] ? 1 : 0
            }
            var t, l, y, n, z, x;
            this.bp = function() {
                z = x = 0;
                t = 6;
                l = 0;
                y = new Uint16Array(g_unclaimedLandIndex);
                n = new Uint8Array(g_unclaimedLandIndex)
            }
            ;
            this.dF = function() {
                var A;
                z = b0.b1[13];
                x = g_playerBalanceArray[g_localPlayerIndex];
                for (A = l - 1; 0 <= A; A--)
                    10 === n[y[A]] ? k(y[A]) : 0 === n[y[A]]-- && (k(y[A]),
                        ab(y[A]));
                16E4 <= g_playerLandArray[en[0]] && (g(16E4),
                3E5 <= g_playerLandArray[en[0]] && g(3E5));
                g_playerLandArray[g_localPlayerIndex] > b0.b1[7] && (b0.b1[7] = g_playerLandArray[g_localPlayerIndex]);
                b0.b1[14] += x - g_playerBalanceArray[g_localPlayerIndex] + z - b0.b1[13]
            }
            ;
            this.av = function(A) {
                var B;
                for (B = l - 1; 0 <= B; B--)
                    if (A === y[B]) {
                        l--;
                        for (A = B; A < l; A++)
                            y[A] = y[A + 1];
                        break
                    }
            }
            ;
            this.cR = function(A, B) {
                var C;
                for (C = l - 1; 0 <= C; C--)
                    if (A === y[C])
                        return;
                y[l++] = A;
                n[A] = B ? 2 : 10
            }
        }
        function es() {
            function g() {
                l = 3;
                a: {
                    for (var x = 40; 1 <= x; x--) {
                        y = d0[z] + as(ce.random() * (cz[z] - d0[z] + 1), ce.value(100));
                        n = d3[z] + as(ce.random() * (d2[z] - d3[z] + 1), ce.value(100));
                        var A = k(b5.f2(y, n));
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
            function k(x) {
                if (b5.b6(x) && (b5.bG(x) || b5.bF(x) !== z && ch(z, b5.bF(x)))) {
                    if (f0.co(z, x))
                        return 2;
                    if (0 === l--)
                        return 0
                }
                return 1
            }
            function t(x, A) {
                for (var B, C, E, G, F, M, H, D = x; D < x + 50 * A; D += A)
                    if (B = d0[z] - D,
                        B = 1 > B ? 1 : B,
                        C = d3[z] - D,
                        C = 1 > C ? 1 : C,
                        E = cz[z] + D,
                        E = E >= aZ - 1 ? aZ - 2 : E,
                        G = d2[z] + D,
                        G = G >= aa - 1 ? aa - 2 : G,
                        H = as(2 * ce.random() * (E - B + G - C), ce.value(100)),
                        F = E - B,
                        M = G - C,
                        H <= F ? (y = B + H,
                            n = C) : H <= F + M ? (y = E,
                            n = C + H - F) : H <= 2 * F + M ? (y = B + H - F - M,
                            n = G) : (y = B,
                            n = C + H - 2 * F - M),
                        B = k(b5.f2(y, n)),
                    1 !== B)
                        return B;
                return 1
            }
            var l, y, n, z;
            this.dF = function(x, A) {
                z = x;
                if (0 === bN[z].length)
                    return false;
                if (g()) {
                    var B = as(dG.dn[A] * g_playerBalanceArray[z], 100);
                    100 > B && 100 <= g_playerBalanceArray[z] && (B = 100);
                    if (100 <= B)
                        return triggerBoat(z, f0.f1(), b5.f2(y, n), B)
                }
                return false
            }
        }
        function fD() {
            var g, k;
            this.bp = function() {
                g = dq;
                k = new Uint16Array(dq);
                for (var t = dq - 1; 0 <= t; t--)
                    k[t] = t
            }
            ;
            this.dF = function() {
                for (var t = g - 1; 0 <= t; t--)
                    if (0 === g_isPlayersAliveArray[k[t] + g_playerCount]) {
                        var l = t;
                        for (g--; l < g; l++)
                            k[l] = k[l + 1]
                    } else
                        dG.dF(k[t])
            }
        }
        function fI() {
            function g(x, A, B, C, E, G) {
                0 < B && 1E3 >= B && (k.push(x),
                    t.push(A),
                    l.push(B),
                    y.push(C),
                    n.push(E),
                    z.push(G))
            }
            var k, t, l, y, n, z;
            this.bp = function() {
                k = [];
                t = [];
                l = [];
                y = [];
                n = [];
                z = []
            }
            ;
            this.dF = function() {
                var x, A = k.length;
                for (x = 0; x < A; x++)
                    if (0 === t[x])
                        triggerAttack(k[x], y[x], l[x]);
                    else if (1 === t[x])
                        this.fN(k[x], l[x], n[x], z[x]);
                    else if (2 === t[x])
                        this.fO(k[x], y[x]);
                    else if (6 === t[x]) {
                        var B = k[x];
                        0 !== g_isPlayersAliveArray[B] && 2 !== fU[k] && eS.fY(B, 1 === y[x])
                    } else
                        7 === t[x] && this.fQ(k[x], y[x]);
                0 < A && this.bp()
            }
            ;
            this.fN = function(x, A, B, C) {
                0 !== g_isPlayersAliveArray[x] && 2 !== fU[k] && f0.co(x, b5.f2(B, C)) && triggerBoat(x, f0.f1(), b5.f2(B, C), as(A * g_playerBalanceArray[x], 1E3)) && x === g_localPlayerIndex && (b0.b1[0] += A,
                    b0.b1[1]++,
                    b0.b1[2]++)
            }
            ;
            this.fO = function(attackerIndex, targetIndex) {
                if (0 !== g_isPlayersAliveArray[attackerIndex] && 2 !== fU[k] && ae.co(attackerIndex, targetIndex)) {
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
            this.fQ = function(x, A) {
                if (0 !== g_isPlayersAliveArray[x] && 2 !== fU[k]) {
                    var B = ae.fW(x, A);
                    if (-1 !== B) {
                        var C = ae.am(x, B);
                        ae.bT(x, B, 0);
                        g_playerBalanceArray[x] += C;
                        ay.az(x)
                    }
                }
            }
            ;
            this.fZ = function(x, A, B) {
                1 === ec && g(x, 0, A, B, 0, 0)
            }
            ;
            this.fb = function(x, A, B, C) {
                1 === ec && (fc ? fd.cQ(x, B, C) : g(x, 1, A, 0, B, C))
            }
            ;
            this.fe = function(x, A) {
                1 === ec && g(x, 2, 1, A, 0, 0)
            }
            ;
            this.ff = function(x, A) {
                1 === ec && g(x, 7, 1, A, 0, 0)
            }
            ;
            this.fg = function(x, A) {
                1 === ec && g(x, 6, 1, A, 0, 0)
            }
            ;
            this.fh = function(x) {
                1 === ec && 0 !== g_isPlayersAliveArray[x] && 2 !== fU[x] && (8 === dv ? fi.fj(1 - x) : this.fk(x));
                e9.fl(x, 4)
            }
            ;
            this.fk = function(x) {
                fc ? (fm(x),
                    fn()) : eI.fo(x)
            }
            ;
            this.fp = function(x) {
                0 !== g_isPlayersAliveArray[x] && 2 !== fU[x] && fq.fr(x) && (1 === sp_Bots ? fi.fj(x) : (e9.fl(x, x === g_localPlayerIndex ? 21 : 22),
                    8 === dv ? fi.fj(1 - x) : g_isSingleplayer ? (fm(x),
                        fn(),
                    fc && fd.dF()) : this.fk(x)))
            }
        }
        function fu() {
            function g(B) {
                for (l--; B < l; B++)
                    y[B] = y[B + 1],
                        n[B] = n[B + 1],
                        z[B] = z[B + 1],
                        x[B] = x[B + 1],
                        A[B] = A[B + 1]
            }
            var k, t, l, y, n, z, x, A;
            this.bp = function() {
                k = 1;
                l = 0;
                t = 2 * g_unclaimedLandIndex;
                y = new Uint16Array(t);
                n = new Uint8Array(t);
                z = new Uint16Array(t);
                x = new Uint32Array(t);
                A = new Uint32Array(t)
            }
            ;
            this.g0 = function(B, C) {
                x[B] = C
            }
            ;
            this.dF = function() {
                for (var B = l - 1; 0 <= B; B--)
                    0 === n[B]-- && (n[B] = 2,
                        g1.dF(B, z[B], y[B], x[B], A[B]))
            }
            ;
            this.av = function(B, C) {
                var E;
                for (E = l - 1; 0 <= E; E--)
                    if (B === y[E] && C === z[E]) {
                        g(E);
                        break
                    }
            }
            ;
            this.g3 = function(B) {
                var C;
                for (C = l - 1; 0 <= C; C--)
                    B === y[C] && (g1.g4(B, x[C]),
                        g(C))
            }
            ;
            this.cR = function(B, C, E) {
                if (l >= t)
                    return 0;
                y[l] = B;
                n[l] = 0;
                z[l] = k;
                x[l] = C;
                A[l] = E;
                B = k;
                k++;
                l++;
                k = k > 2 * t ? 1 : k;
                return B
            }
            ;
            this.cG = function() {
                if (!(40 > g7 || 0 === l)) {
                    var B, C = gC / g7, E = gD / g7, G = (gE + gC) / g7, F = (cB + gD) / g7;
                    cH.textAlign = cJ;
                    cH.textBaseline = cI;
                    for (B = l - 1; 0 <= B; B--) {
                        var M = b5.gF(x[B]);
                        var H = b5.cF(x[B]);
                        var D = y[B];
                        if (M > C - 1 && M < G && H > E - 1 && H < F && 0 !== g_isPlayersAliveArray[D]) {
                            var K = Math.floor(.94 * g7 * eA.gG(D));
                            if (!(6 > K)) {
                                M = Math.floor(gE * (M + .5 - C) / (G - C));
                                H = Math.floor(cB * (H + .48 - E) / (F - E));
                                cH.font = bt + K + bu;
                                cH.fillStyle = gH;
                                var J = ae.am(D, ae.fW(D, z[B]));
                                cH.fillText(gI.gJ.gK ? eP.gL(J) : g_playerNameArray[D], M, H);
                                var L = Math.floor(.5 * K);
                                6 > L || (cH.font = bt + L + bu,
                                    cH.fillText(gI.gJ.gK ? g_playerNameArray[D] : eP.gL(J), M, H + Math.floor(.82 * K)))
                            }
                        }
                    }
                }
            }
        }
        function gN() {
            function g(J) {
                M = c4.gf;
                H = 33;
                n = z = y = 0;
                x = H / J;
                l = 1 / (J / H / 4);
                A = (gE / 2 + gC) / g7;
                B = (cB / 2 + gD) / g7;
                C = g7
            }
            function k(J) {
                .125 > Math.abs(Math.log(F / C)) && (F = J * C)
            }
            function t(J, L, P, I) {
                E = (J + P + 1) / 2;
                G = (L + I + 1) / 2;
                J = gE / (P - J + 1);
                L = cB / (I - L + 1);
                F = .9 * (J < L ? J : L)
            }
            var l, y, n, z, x, A, B, C, E, G, F, M, H, D = false, K = false;
            this.gg = function() {
                return D
            }
            ;
            this.gh = function() {
                g(1);
                this.gi(0, 0, aZ - 1, aa - 1);
                fc || this.gj(g_localPlayerIndex, 3E3, true, .3)
            }
            ;
            this.gj = function(J, L, P, I) {
                if (!(g_uiVisibility || D && !P && K || 0 === g_playerLandArray[J])) {
                    gm.gn = false;
                    K = P;
                    g(L);
                    E = (d0[J] + cz[J] + 1) / 2;
                    G = (d3[J] + d2[J] + 1) / 2;
                    L = cz[J] - d0[J] + 1;
                    J = d2[J] - d3[J] + 1;
                    P = gE / L;
                    var O = cB / J;
                    F = P < O ? P : O;
                    F *= 0 !== I ? I : 20 > L && 20 > J ? .5 : .9;
                    k(.875);
                    D = true;
                    gq.gr()
                }
            }
            ;
            this.gs = function(J) {
                gm.gn = false;
                K = true;
                g(J);
                t(0, 0, aZ - 1, aa - 1);
                k(.875);
                D = true;
                gq.gr()
            }
            ;
            this.gi = function(J, L, P, I) {
                t(J, L, P, I);
                g7 = F;
                gm.gz(E, gE / 2);
                gm.h0(G, cB / 2);
                h1.h2()
            }
            ;
            this.h3 = function() {
                if (D && K)
                    return false;
                D = false;
                return true
            }
            ;
            this.dF = function() {
                if (D) {
                    .5 > y ? z < x && (z += x * l,
                        n = y) : y > 1 - n && (z -= x * l,
                        z = z < x * l ? x * l : z);
                    M = M >= c4.gf ? c4.gf - 1 : M;
                    var J = c4.gf - M;
                    1E3 < J ? y = 1 : (y += z * J / H,
                        y = 1 < y ? 1 : y);
                    M = c4.gf;
                    var L = g7;
                    J = gC;
                    var P = gD;
                    g7 = C * Math.pow(F / C, y);
                    L = g7 / L;
                    var I = 1 - (C * Math.pow(F / C, 1 - y) - C) / (F - C);
                    gm.gz(A + I * (E - A), gE / 2);
                    gm.h0(B + I * (G - B), cB / 2);
                    eA.zoom(L, (J * L - gC) / (1 - L), (P * L - gD) / (1 - L));
                    h1.h2();
                    1 <= y && (D = false,
                        hB.hC = true);
                    c4.c5 = true
                }
            }
        }
        function hD() {
            function g() {
                var H;
                a: {
                    for (H = 0; 8 > H; H++)
                        if (n = as(x * ce.random(), ce.value(100)),
                            z = as(A * ce.random(), ce.value(100)),
                            k()) {
                            H = true;
                            break a
                        }
                    H = false
                }
                if (!H)
                    a: {
                        var D, K, J, L;
                        H = as(x * ce.random(), ce.value(100));
                        var P = as(A * ce.random(), ce.value(100));
                        for (D = 40; 1 <= D; D--)
                            for (K = A - D; 0 <= K; K -= 40)
                                for (z = (K + P) % A,
                                         J = 40; 1 <= J; J--)
                                    for (L = x - J; 0 <= L; L -= 40)
                                        if (n = (L + H) % x,
                                            k()) {
                                            H = true;
                                            break a
                                        }
                        H = false
                    }
                return H
            }
            function k() {
                var H, D;
                var K = as(B - G, 2);
                var J = E + z * B + K
                    , L = C + n * B + K;
                for (H = J + G - 1; H >= J; H--)
                    for (D = L + G - 1; D >= L; D--)
                        if (K = b5.f2(D, H),
                        !b5.b6(K) || b5.cU(K))
                            return false;
                return true
            }
            function t() {
                g_isPlayersAliveArray[F] = 0;
                g_playerBalanceArray[F] = 0;
                g_playerLandArray[F] = hd[F] = 0;
                b4[F] = [];
                bM[F] = [];
                bN[F] = [];
                bQ[F] = [];
                d0[F] = d3[F] = cz[F] = d2[F] = 0
            }
            function l(H, D) {
                g_isPlayersAliveArray[F] = 1;
                g_playerBalanceArray[F] = F < g_playerCount ? he : dd[dG.cN[F - g_playerCount]];
                d0[F] = H + 10;
                d3[F] = D + 10;
                d2[F] = cz[F] = 0;
                var K, J;
                for (K = H; K < H + 4; K++)
                    for (J = D; J < D + 4; J++)
                        if (K > H && K < H + 3 || J > D && J < D + 3) {
                            var L = b5.f2(K, J);
                            b5.b6(L) && (d0[F] = K < d0[F] ? K : d0[F],
                                cz[F] = K > cz[F] ? K : cz[F],
                                d3[F] = J < d3[F] ? J : d3[F],
                                d2[F] = J > d2[F] ? J : d2[F],
                                M[g_playerLandArray[F]] = L,
                                g_playerLandArray[F]++,
                                b5.hh(L, F))
                        }
                hd[F] = g_playerLandArray[F];
                for (L = g_playerLandArray[F] - 1; 0 <= L; L--)
                    b5.hi(M[L], F) ? (b5.b7(M[L], F),
                        bM[F].push(M[L])) : b5.hj(M[L]) ? (b5.b7(M[L], F),
                        bN[F].push(M[L])) : b5.hk(M[L]) && (b5.b7(M[L], F),
                        bQ[F].push(M[L]))
            }
            function y(H, D) {
                var K, J;
                for (J = D; J > D - 6; J--)
                    for (K = H; K > H - 6; K--) {
                        var L = b5.f2(K, J);
                        if (b5.cU(L))
                            return false
                    }
                return true
            }
            var n, z, x, A, B, C, E, G, F, M;
            this.bp = function() {
                var H;
                M = Array(12);
                G = 6;
                B = 10;
                x = as(aZ, B);
                A = as(aa, B);
                C = as(aZ - B * x, 2);
                E = as(aa - B * A, 2);
                if (fc)
                    for (H = 0; H < g_playerCount; H++)
                        F = H,
                            t(),
                            g_isPlayersAliveArray[F] = 1;
                if (dr.ds && dr.dt.hK)
                    for (F = 0; F < g_unclaimedLandIndex; F++) {
                        if (1 !== g_isPlayersAliveArray[F]) {
                            if (F < g_maxPlayerCount) {
                                var D = dr.dt.hK[F] + 1;
                                H = dr.dt.hV[F] + 1;
                                3 < D && D < aZ - 5 && 3 < H && H < aa - 5 && b5.b6(b5.f2(D, H)) && y(D + 3, H + 3) ? (D += 1,
                                    H += 1,
                                    t(),
                                    l(D - 2, H - 2),
                                    H = true) : H = false;
                                if (H)
                                    continue;
                                if (g()) {
                                    D = C + n * B + as(B, 2);
                                    H = E + z * B + as(B, 2);
                                    t();
                                    l(D - 2, H - 2);
                                    continue
                                }
                            }
                            t()
                        }
                    }
                else
                    for (F = 0; F < g_unclaimedLandIndex; F++)
                        1 !== g_isPlayersAliveArray[F] && (F < g_maxPlayerCount && g() ? (D = C + n * B + as(B, 2),
                            H = E + z * B + as(B, 2),
                            t(),
                            l(D - 2, H - 2)) : t());
                b0.b1[7] = g_playerLandArray[g_localPlayerIndex];
                b0.b1[8] = g_playerBalanceArray[g_localPlayerIndex]
            }
            ;
            this.hl = function(H, D, K) {
                var J, L;
                F = H;
                for (J = 0; 20 > J; J++)
                    for (H = D + J; H >= D - J; H--)
                        for (L = K + J; L >= K - J; L--)
                            if ((H === D + J || H === D - J || L === K + J || L === K - J) && 3 < H && H < aZ - 5 && 3 < L && L < aa - 5 && b5.b6(b5.f2(H, L)) && y(H + 3, L + 3)) {
                                if (0 < g_playerLandArray[F]) {
                                    for (K = cz[F]; K >= d0[F]; K--)
                                        for (D = d2[F]; D >= d3[F]; D--)
                                            J = 4 * (D * aZ + K),
                                            b5.hp(F, J) && (b5.hq(J),
                                                g_playerLandArray[F]--);
                                    t()
                                }
                                l(H - 1, L - 1);
                                return true
                            }
                return false
            }
            ;
            this.hr = function(H) {
                F = H;
                if (g()) {
                    H = C + n * B + as(B, 2);
                    var D = E + z * B + as(B, 2);
                    t();
                    l(H - 2, D - 2)
                } else
                    t()
            }
        }
        function hs() {
            ht.hu();
            cH.setTransform(g7, 0, 0, g7, 0, 0);
            cH.imageSmoothingEnabled = 3 > g7;
            cH.drawImage(hv, gm.gF(), gm.cF());
            eN.cG();
            cH.drawImage(hw, gm.gF(), gm.cF());
            cH.imageSmoothingEnabled = false;
            ht.cG();
            cH.setTransform(1, 0, 0, 1, 0, 0);
            eA.cG();
            eK.cG();
            g_uiVisibility || (cH.imageSmoothingEnabled = false,
                e9.cG(),
                eM.cG(),
                eR.cG(),
                eS.cG(),
                eB.cG(),
                gm.cG(),
                c2.cG(),
                eT.cG(),
                eO.cG(),
                eP.cG(),
                fq.cG(),
                eW.cG(),
                hx.cG(),
                hy.cG(),
                eX.cG())
        }
        function hz(g, k, t) {
            g.clearRect(0, 0, k, t);
            g.fillStyle = i1;
            g.fillRect(0, 0, k, t)
        }
        function i2(g, k, t, l) {
            g.fillStyle = cK;
            g.fillRect(0, 0, k, l);
            g.fillRect(0, 0, l, t);
            g.fillRect(k - l, 0, l, t);
            g.fillRect(0, t - l, k, l)
        }
        function i4(g, k, t, l, y, n, z) {
            g.fillStyle = cK;
            n = Math.floor(l * n);
            n += (n - y) % 2;
            var x = Math.floor((n - y) / 2);
            l = Math.floor((l - n) / 2);
            g.fillRect(k + l, t + l + x, n, y);
            z && g.fillRect(k + l + x, t + l, y, n)
        }
        function iA() {
            this.iB = null;
            this.bp = function(g) {
                this.iB = g;
                e9.iC(this.iB)
            }
            ;
            this.iD = function(g) {
                var k = 8 / (1 + Math.pow(2, (this.iB[g].iF - this.iB[1 - g].iF) / 10 / 32));
                k = Math.floor(10 * k + .5);
                var t = this.iI(this.iB[g].iF + k + 1);
                k = this.iI(this.iB[1 - g].iF - k);
                0 === g ? e9.iK(this.iB, t, k, ["rgba(10,140,10,0.75)", "rgba(140,10,10,0.75)"]) : e9.iK(this.iB, k, t, ["rgba(140,10,10,0.75)", "rgba(10,140,10,0.75)"])
            }
            ;
            this.iI = function(g) {
                g = 0 > g ? 0 : 16E3 < g ? 16E3 : g;
                return 16E3 <= g ? "Unknown" : (g / 10).toFixed(1)
            }
        }
        function iL() {
            function g(y) {
                for (var n = k.length - 1; 0 <= n; n--)
                    if (y >= k[n] && y < t[n])
                        return n;
                return -1
            }
            var k, t, l;
            (function() {
                    k = [32, 65, 191, 913, 931];
                    t = [64, 127, 688, 930, 1155];
                    l = Array(k.length + 1);
                    for (var y = 0; y < l.length; y++) {
                        l[y] = 0;
                        for (var n = y - 1; 0 <= n; n--)
                            l[y] += t[n] - k[n]
                    }
                }
            )();
            this.iQ = function(y) {
                y = y.trim();
                if (0 === y.indexOf("Bot ") || 0 === y.indexOf("[Bot] "))
                    y = false;
                else
                    a: {
                        y = y.trim();
                        var n = y.length;
                        if (3 > n || 20 < n)
                            y = false;
                        else {
                            for (var z = 0, x, A = 0; A < n; A++)
                                if (x = y.charCodeAt(A),
                                    z += 65 <= x && 90 >= x || 1040 <= x && 1071 >= x ? 1 : 0,
                                -1 === g(x)) {
                                    y = false;
                                    break a
                                }
                            y = 3 < z && z > Math.floor(n / 2) ? false : true
                        }
                    }
                return y
            }
            ;
            this.iW = function(y) {
                y = y.trim();
                for (var n = y.length, z = [], x, A = 0; A < n; A++) {
                    x = y.charCodeAt(A);
                    var B = g(x);
                    z.push(l[B] + x - k[B])
                }
                return z
            }
            ;
            this.iX = function(y) {
                for (var n = "", z = y.length, x, A = 0; A < z; A++)
                    for (x = 1; x < l.length; x++)
                        if (y[A] < l[x]) {
                            x = k[x - 1] + y[A] - l[x - 1];
                            n += String.fromCharCode(x);
                            break
                        }
                return n
            }
            ;
            this.iY = function(y) {
                y = this.iW(y);
                for (var n = "", z = 0; z < y.length; z++)
                    n += 10 > y[z] ? "00" : 100 > y[z] ? "0" : "",
                        n += y[z].toString(10);
                return n
            }
            ;
            this.iZ = function(y) {
                for (var n = Array(Math.floor(y.length / 3)), z = 0; z < y.length; z += 3)
                    n[Math.floor(z / 3)] = parseInt(y.substring(z, z + 3));
                return this.iX(n)
            }
            ;
            this.z = function(y) {
                var n, z = [y.length];
                for (n = 0; n < y.length; n++)
                    z[n] = y.charCodeAt(n) - 48;
                var x = "";
                for (n = 0; n < y.length; n++)
                    if (n === y.length - 1 || 51 < 10 * z[n] + z[n + 1])
                        x += z[n].toString();
                    else {
                        var A = 10 * z[n] + z[n + 1];
                        x += String.fromCharCode(A + (26 > A ? 65 : 71));
                        n++
                    }
                return x
            }
            ;
            this.n = function(y) {
                for (var n = "", z, x = 0; x < y.length; x++)
                    z = y.charCodeAt(x),
                        48 <= z && 58 > z ? n += String.fromCharCode(z) : 65 <= z && 75 > z ? n += "0" + (z - 65).toString() : 75 <= z && 91 > z ? n += (z - 65).toString() : 97 <= z && 123 > z && (n += (z - 71).toString());
                return n
            }
            ;
            this.ia = function(y) {
                var n = y.length, z, x = [];
                for (z = 0; z < n; z++) {
                    var A = y.charCodeAt(z);
                    58 > A ? x.push(y[z]) : (A = 91 > A ? A - 65 : A - 71,
                        x.push(String(as(A, 10))),
                        x.push(String(A - 10 * as(A, 10))))
                }
                n = x.length - 2;
                A = 0;
                y = [];
                for (z = 0; z < n; z += 3)
                    y[A++] = parseInt(x[z] + x[z + 1] + x[z + 2]);
                return y
            }
            ;
            this.ic = function() {
                var y, n = "";
                for (y = 0; 6 > y; y++) {
                    var z = 48 + ce.random() % 36;
                    z += 58 <= z ? 39 : 0;
                    n += String.fromCharCode(z)
                }
                return n
            }
        }
        function ie() {
            this.fj = function(g) {
                if (2 === ec)
                    var k = true;
                else
                    eS.iy(),
                        ec = 2,
                        g_spectatorCount = j0,
                        k = false;
                if (!k) {
                    if (8 === dv) {
                        var t = g = 0 > g ? g_playerLandArray[0] >= g_playerLandArray[1] ? 0 : 1 : g;
                        (k = g === g_localPlayerIndex) ? e9.fl(g, 2) : e9.fl(1 - g_localPlayerIndex, 3);
                        im.iD(g)
                    } else
                        dA ? (g = eT.io(),
                            k = dW.dX[g_localPlayerIndex] === g,
                            9 === dv ? t = k ? en[0] : 512 : (g = dW.ip(dW.iq[g]),
                                t = g[0],
                            512 !== t && e9.ir(g[1])),
                            e9.is(k)) : (t = en[0],
                            k = t === g_localPlayerIndex,
                            e9.it(t));
                    g_isSingleplayer || iu.iv(iw(), t);
                    eW.show(k, false);
                    e9.j1(true);
                    eM.eb(true);
                    eB.eb(true);
                    c4.c5 = true;
                    hB.j2();
                    a9(0)
                }
            }
        }
        function j3() {
            this.cQ = function(g, k, t) {
                0 !== g_isPlayersAliveArray[g] && j4.hl(g, k, t) && (c4.c5 = true)
            }
            ;
            this.dF = function() {
                fc = false;
                for (var g = 0; g < g_playerCount; g++)
                    0 !== g_isPlayersAliveArray[g] && 0 === g_playerLandArray[g] && j4.hr(g);
                0 !== g_isPlayersAliveArray[g_localPlayerIndex] ? (b0.b1[7] = g_playerLandArray[g_localPlayerIndex],
                    b0.b1[8] = g_playerBalanceArray[g_localPlayerIndex],
                    eR.cE(),
                    eB.j5(),
                    eV.gi(d0[g_localPlayerIndex] - 5, d3[g_localPlayerIndex] - 5, cz[g_localPlayerIndex] + 5, d2[g_localPlayerIndex] + 5),
                    eX.bp()) : eW.show(false, false);
                e9.j6(18);
                eA.j7();
                eA.eb(true);
                fd = null;
                hB.j8 = true;
                hB.j9();
                g_isSingleplayer && a9(1)
            }
        }
        var g_playerCount, j0, dq, g_spectatorCount, g_unclaimedLandIndex = 512, g_maxPlayerCount = 512, jA = 150, g_isSingleplayer, jB, ec = 0, jC, jD, jE, he = 512, at = 2, g_localPlayerIndex, g_uiVisibility, fc, jF, dA, jG, dv, jH, fd, im, jI;
        function jJ(g, k, t, l, y) {
            jB = g_uiVisibility = false;
            dv = l;
            jH = y;
            dA = 7 > dv || 9 === dv;
            j0 = g_playerCount = t.length;
            g_isSingleplayer = 1 === j0;
            dv = 10 === dv && g_isSingleplayer ? 7 : dv;
            dv = 8 === dv && 2 !== g_playerCount ? 7 : dv;
            jG = 9 === dv ? 2 : dv + 2;
            jI = 2 >= g_playerCount ? 30 : 50 >= g_playerCount ? 40 : 50;
            jF = dr.ds && !dr.dt.jO ? fc = false : fc = dA || 100 > g_playerCount;
            fd = fc ? new j3 : null;
            he = 512;
            g_maxPlayerCount = g_unclaimedLandIndex;
            g_isSingleplayer && (g_maxPlayerCount = dy.jP());
            dq = g_maxPlayerCount - g_playerCount;
            g_spectatorCount = 0;
            g_localPlayerIndex = k;
            ce.jQ(g);
            jR(t);
            e2.bp();
            dW.bp(t);
            ec = 1;
            jD = 15E8;
            jE = 1E9;
            b0.bp();
            jS();
            jT.jU();
            hB.bp();
            ay.bp();
            d9();
            b5.bp(t);
            ht.bp();
            eT.bp();
            dG.bp();
            jV.jW();
            jV.jX();
            j4.bp();
            jY();
            eN.bp();
            hy.bp();
            jZ.putImageData(ja, 0, 0);
            eM.bp();
            gm.bp();
            eR.bp();
            eS.bp();
            eO.bp();
            eB.bp();
            fq.bp();
            c2.bp();
            e9.bp();
            eP.bp();
            hx.bp();
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
            8 === dv ? (im = new iA,
                im.bp(t)) : im = null;
            g_isSingleplayer ? c4.jb() : c4.jc();
            jd();
            eX.bp();
            c4.c5 = true;
            g_isSingleplayer && fc || a9(1)
        }
        function jd() {
            eV.gh();
            0 === g_isPlayersAliveArray[g_localPlayerIndex] && eW.show(false, true);
            eA.eb(true)
        }
        function je() {
            eD.close(eD.jf, 3246);
            ec = 0;
            c4.jg();
            jh.bp();
            a9(0);
            aB()
        }
        var dG, au, dE, eJ, eG, eK, eV, j4, m, hx, fq, e9, ji, eP, c2, eR, gm, jj, eO, eM, eB, eW, jk, jl, aJ, jm, jn, jo, dy, jh, bw, b5, f, ae, ay, eA, jV, e2, jT, jp, jq, gq, f0, ce, g1, ht, jr, js, eX, iu, jt, eN, ju, jv, eS, eY, eD, eH, gI, jw, eI, eF, eQ, jx, dr;
        function jy() {
            dG = new de;
            au = new ee;
            dE = new es;
            eJ = new fD;
            eG = new fI;
            eK = new fu;
            eV = new gN;
            j4 = new hD;
            m = new iL;
            hx = new jz;
            fq = new k0;
            e9 = new k1;
            ji = new k2;
            eP = new k3;
            c2 = new k4;
            eR = new k5;
            gm = new k6;
            jj = new k7;
            eO = new k8;
            eM = new k9;
            eB = new kA;
            eW = new kB;
            jk = new kC;
            jl = new kD;
            aJ = new kE;
            jm = new kF;
            jm.jW();
            jn = new kG;
            jo = new kH;
            dy = new kI;
            jh = new kJ;
            bw = new kK;
            b5 = new kL;
            f = new kM;
            ae = new kN;
            ay = new kO;
            eA = new kP;
            jV = new kQ;
            e2 = new kR;
            jT = new kS;
            jp = new kT;
            jq = new kU;
            gq = new kV;
            f0 = new kW;
            ce = new kX;
            g1 = new kY;
            ht = new kZ;
            jr = new ka;
            js = new kb;
            eX = new kc;
            iu = new kd;
            jt = new ke;
            eN = new kf;
            ju = new kg;
            jv = new kh;
            eS = new ki;
            eY = new kj;
            eD = new kk;
            eH = new kl;
            gI = new km;
            jw = new kn;
            eI = new ko;
            eF = new kp;
            eQ = new kq;
            jx = new kr;
            dr = new ks
        }
        function jz() {
            function g(L, P, I, O) {
                for (var R, N = 0; N < L.length; N++) {
                    P.push(document.createElement("canvas"));
                    P[N].width = I;
                    P[N].height = I;
                    R = P[N].getContext("2d", {
                        alpha: true
                    });
                    var T = I
                        , U = R;
                    U.fillStyle = O;
                    U.beginPath();
                    U.arc(Math.floor(T / 2), Math.floor(T / 2), Math.floor(.47 * T), 0, 2 * Math.PI);
                    U.fill();
                    6 === L[N] ? R.drawImage(bw.bz(19), 0, 0) : 7 === L[N] ? R.drawImage(bw.lB("emojis"), -4 * I, 0) : R.drawImage(bw.bz(3), -L[N] * I, 0)
                }
            }
            function k(targetPlayerForAction) {
                for (var P = K.length - 1; 0 <= P; P--)
                    if (K[P] === targetPlayerForAction)
                        return true;
                return false
            }
            function t(L) {
                return -1 === L || 0 === L || 6 === L || !y[5] && (8 === L || !y[4] && 7 === L) || !y[7] && (2 === L || !y[6] && 1 === L) || 3 === L && !y[2] || 5 === L && !y[1] && !y[5] && !y[7] ? false : true
            }
            function getSelectedAction(L, P) {
                return L < z - A - M || L > z + 2 * A + M || P < x - A - M || P > x + 2 * A + M ? -1 : 3 * (P < x - M / 2 ? 0 : P < x + A + M / 2 ? 1 : 2) + (L < z - M / 2 ? 0 : L < z + A + M / 2 ? 1 : 2)
            }
            var y = [], n, z, x, A, B, C, E, targetPlayerForAction, F, M, H, D, K, J;
            this.l2 = [];
            this.bp = function() {
                K = [];
                y = [];
                n = false;
                B = C = z = x = E = 0;
                this.l3();
                for (var L = this.l4.length - 1; 0 <= L; L--)
                    y.push(false);
                y.push(false)
            }
            ;
            this.l3 = function() {
                this.l4 = [];
                H = [];
                this.l5 = [];
                var L = bw.bz(3).height;
                A = Math.floor((q ? .075 : .0468) * bq);
                D = A / L;
                M = Math.floor(A / 3);
                g([0, 1, 2, 3, 7, 4, 5, 6], this.l4, L, "rgba(0,180,0,0.6)");
                g([0, 4, 5], H, L, "rgba(200,0,0,0.6)");
                g([0, 2, 4], this.l5, L, "rgba(0,0,0,0.6)");
                g([0, 5], this.l2, L, "rgba(200,200,0,0.6)");
                this.l4[6] = this.l2[1]
            }
            ;
            this.lD = function(L, P) {
                if (this.lE()) {
                    var I = this.actionWheelOnClick(L, P);
                    c4.c5 = 0 < I;
                    return 2 > I
                }
                return false
            }
            ;
            this.lF = function(L, P) {
                this.lE() || (B = L,
                    C = P,
                    E = (new Date).getTime())
            }
            ;
            this.lG = function(L) {
                return L < g_playerCount && 2 !== fU[L]
            }
            ;
            this.actionWheelOnClick = function(action_mouseXOnCanvas, action_mouseYOnCanvas) {
                C = B = -1E3;
                if (2 === fU[g_localPlayerIndex] || 0 === g_isPlayersAliveArray[g_localPlayerIndex] && !fc)
                    return this.lH(),
                        1;
                if (n) {
                    this.lH();
                    if (a5.lI(action_mouseXOnCanvas, action_mouseYOnCanvas))
                        a5.lJ(action_mouseXOnCanvas, action_mouseYOnCanvas, targetPlayerForAction) && (n = true);
                    else
                        return a5.lK(),
                            2;
                    return 1
                }
                var selectedActionType = getSelectedAction(action_mouseXOnCanvas, action_mouseYOnCanvas);
                if (!t(selectedActionType) || 0 === selectedActionType || 6 === selectedActionType || !y[2] && 3 === selectedActionType)
                    return this.lH(),
                        2;
                if (1 === selectedActionType) {
                    if (y[6]) {
                        selectedActionType = (new Date).getTime();
                        selectedActionType > J + 4E3 && (K = []);
                        J = selectedActionType;
                        if (k(targetPlayerForAction))
                            return this.lH(),
                                1;
                        K.push(targetPlayerForAction);
                        16 < K.length && K.shift();
                        this.lH();
                        return 1
                    }
                    return 0
                }
                if (2 === selectedActionType) {
                    if (y[7]) {
                        for (selectedActionType = K.length - 1; 0 <= selectedActionType; selectedActionType--)
                            0 === g_isPlayersAliveArray[K[selectedActionType]] && K.splice(selectedActionType, 1);
                        0 < K.length && (eQ.lQ(1, K, true) && (e9.lR(K, targetPlayerForAction),
                            iu.lS(K, targetPlayerForAction)),
                            K = []);
                        this.lH();
                        return 1
                    }
                    return 0
                }
                if (3 === selectedActionType) {
                    this.lH();
                    if (this.lG(targetPlayerForAction) && 7 > dv && 1071 > c4.getTimeSinceGameStarted())
                        return e9.renderEarlySupportError(),
                            1;
                    e9.renderLowBalanceError();
                    g_isSingleplayer ? triggerSupport(g_localPlayerIndex, targetPlayerForAction, as(eR.getSelectedPercentageOnBar() * g_playerBalanceArray[g_localPlayerIndex], 1E3)) : iu.lW(eR.getSelectedPercentageOnBar(), targetPlayerForAction === g_unclaimedLandIndex ? g_localPlayerIndex : targetPlayerForAction);
                    return 1
                }
                if (4 === selectedActionType)
                    return y[0] ? fc ? (this.lH(),
                        g_isSingleplayer ? (fd.cQ(0, b5.gF(F), b5.cF(F)),
                            fd.dF()) : iu.lY(1E3, b5.gF(F), b5.cF(F))) : (this.lH(),
                        e9.renderLowBalanceError(),
                        g_isSingleplayer ? triggerAttack(g_localPlayerIndex, targetPlayerForAction, eR.getSelectedPercentageOnBar()) : (!jF || 300 < eB.lX()) && iu.lW(eR.getSelectedPercentageOnBar(), targetPlayerForAction === g_unclaimedLandIndex ? g_localPlayerIndex : targetPlayerForAction)) : y[8] ? (this.lH(),
                        eH.lZ(targetPlayerForAction, eR.getSelectedPercentageOnBar())) : this.lH(),
                        1;
                if (5 === selectedActionType)
                    return y[1] ? (this.lH(),
                        e9.renderLowBalanceError(),
                        g_isSingleplayer ? eG.fN(g_localPlayerIndex, eR.getSelectedPercentageOnBar(), b5.gF(F), b5.cF(F)) : iu.lY(eR.getSelectedPercentageOnBar(), b5.gF(F), b5.cF(F)),
                        1) : 0;
                if (7 === selectedActionType && y[4])
                    return this.lH(),
                        n = a5.show(action_mouseXOnCanvas, action_mouseYOnCanvas),
                        1;
                if (8 === selectedActionType)
                    return y[5] ? (eQ.lQ(0, [targetPlayerForAction], true) && (e9.la(targetPlayerForAction, 0),
                        iu.lb(targetPlayerForAction)),
                        this.lH(),
                        1) : 0;
                this.lH();
                return 2
            }
            ;
            this.click = function(L, P) {
                if (this.lE() || 2 === fU[g_localPlayerIndex] || 0 === g_isPlayersAliveArray[g_localPlayerIndex] && !fc)
                    return false;
                var I = (q ? .0288 : .0144) * bq;
                if (Math.abs(L - B) > I || Math.abs(P - C) > I || (new Date).getTime() > E + 425)
                    return false;
                I = Math.floor((L + gC) / g7);
                var O = Math.floor((P + gD) / g7);
                if (1 > I || 1 > O || I >= aZ - 1 || O >= aa - 1)
                    return false;
                var R = O * aZ * 4 + 4 * I;
                if (!b5.b6(R))
                    return false;
                if (2 === ec)
                    return 1 <= a5.lf && (targetPlayerForAction = b5.bF(R),
                        this.lG(targetPlayerForAction)) ? (targetPlayerForAction === g_localPlayerIndex && this.lH(),
                        y[4] = true,
                        this.lg(L, P)) : false;
                F = b5.f2(I, O);
                if (fc)
                    return y[0] = true,
                        this.lg(L, P);
                y[1] = f0.co(g_localPlayerIndex, F);
                if (b5.bG(R))
                    return targetPlayerForAction = g_unclaimedLandIndex,
                        lh(g_localPlayerIndex) ? y[0] = true : li(g_localPlayerIndex, targetPlayerForAction) && (y[8] = true),
                        this.lg(L, P);
                targetPlayerForAction = b5.bF(R);
                if (targetPlayerForAction === g_localPlayerIndex) {
                    this.lH();
                    if (0 === a5.lf)
                        return false;
                    y[4] = true;
                    return this.lg(L, P)
                }
                I = y;
                O = targetPlayerForAction;
                O = hx.lG(O) && !k(O) && eQ.lQ(1, [O], false);
                I[6] = O;
                y[4] = 1 <= a5.lf && this.lG(targetPlayerForAction);
                if (ch(targetPlayerForAction, g_localPlayerIndex)) {
                    y[5] = this.lG(targetPlayerForAction) && !eA.lk(targetPlayerForAction) && eQ.lQ(0, [targetPlayerForAction], false);
                    I = y;
                    O = targetPlayerForAction;
                    if (0 === K.length)
                        O = false;
                    else if ((new Date).getTime() > J + 4E3)
                        K = [],
                            O = false;
                    else {
                        if (R = !k(O)) {
                            b: {
                                if (dA)
                                    for (R = K.length - 1; 0 <= R; R--)
                                        if (!ch(O, K[R])) {
                                            O = true;
                                            break b
                                        }
                                O = false
                            }
                            R = !O
                        }
                        O = R
                    }
                    I[7] = O;
                    lm(g_localPlayerIndex, targetPlayerForAction) ? y[0] = true : li(g_localPlayerIndex, targetPlayerForAction) && (y[8] = true);
                    return this.lg(L, P)
                }
                y[2] = dA;
                return this.lg(L, P)
            }
            ;
            this.lg = function(L, P) {
                z = L - Math.floor(A / 2);
                x = P - Math.floor(A / 2);
                return this.lE()
            }
            ;
            this.lo = function(L, P) {
                if (!this.lE())
                    return false;
                if (n) {
                    if (a5.lI(L, P))
                        return false;
                    a5.lK();
                    n = false;
                    return c4.c5 = true
                }
                return t(getSelectedAction(L, P)) ? false : (this.lH(),
                    c4.c5 = true)
            }
            ;
            this.lH = function() {
                var L;
                for (L = y.length - 1; 0 <= L; L--)
                    y[L] = false;
                n = false
            }
            ;
            this.lp = function() {
                this.lH()
            }
            ;
            this.lE = function() {
                var L;
                for (L = y.length - 1; 0 <= L; L--)
                    if (y[L])
                        return true;
                return n
            }
            ;
            this.cG = function() {
                this.lE() && this.lq()
            }
            ;
            this.lq = function() {
                if (n)
                    a5.cG();
                else {
                    var L = (A + M) / D;
                    cH.imageSmoothingEnabled = true;
                    cH.setTransform(D, 0, 0, D, z, x);
                    y[0] ? fc ? cH.drawImage(this.l4[3], 0, 0) : cH.drawImage(this.l4[0], 0, 0) : y[8] ? cH.drawImage(this.l2[0], 0, 0) : cH.drawImage(H[0], 0, 0);
                    y[1] && cH.drawImage(this.l4[1], L, 0);
                    y[2] && cH.drawImage(this.l4[2], -L, 0);
                    y[4] && cH.drawImage(this.l4[4], 0, L);
                    y[5] && cH.drawImage(this.l4[5], L, L);
                    y[6] && cH.drawImage(this.l4[6], 0, -L);
                    y[7] && cH.drawImage(this.l4[7], L, -L);
                    cH.imageSmoothingEnabled = false;
                    cH.setTransform(1, 0, 0, 1, 0, 0)
                }
            }
        }
        function k0() {
            function g() {
                var B = y.getContext("2d", {
                    alpha: true
                });
                B.clearRect(0, 0, l, l);
                B.fillStyle = lz;
                B.fillRect(0, 0, l, l);
                0 === x && (B.fillStyle = m0,
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
                if (!fq.lw)
                    return B <= l + m7 && C >= eR.fL ? 0 : -1;
                if (B <= 4 * l + m7) {
                    if (C >= eR.fL)
                        return 0;
                    if (C >= eR.fL - l - A * m7)
                        return 2;
                    if (C >= eR.fL - 2 * (l + A * m7))
                        return 3
                } else if (B <= 7 * l + m7 && C >= eR.fL - l - A * m7)
                    return 1;
                return -1
            }
            function t(B, C) {
                cH.setTransform(1, 0, 0, 1, m7, eR.fL - B * A * m7 - B * l);
                cH.fillStyle = lz;
                cH.fillRect(0, 0, 4 * l, l);
                x === B + 1 && C === cK && (cH.fillStyle = m0,
                    cH.fillRect(0, 0, 4 * l, l));
                cH.fillStyle = C;
                cH.fillRect(0, 0, 4 * l, 1);
                cH.fillRect(0, 0, 1, l);
                cH.fillRect(4 * l, 0, 1, l);
                cH.fillRect(0, l - 1, 4 * l, 1);
                cH.fillText(z[B], 2 * l, .54 * l)
            }
            var l, y, n, z = ["Quit Game", "Surrender", "Statistics"], x, A;
            this.bp = function() {
                x = -1;
                this.lw = false;
                A = q ? 1.2 : .6;
                this.lx()
            }
            ;
            this.lx = function() {
                l = eR.cw;
                y = document.createElement("canvas");
                y.width = l;
                y.height = l;
                n = bt + Math.floor((q ? .5 : .45) * l) + bu;
                g()
            }
            ;
            this.m2 = function() {
                (this.lw = !this.lw) ? (g_uiVisibility = false,
                g_isSingleplayer && 1 === ec && !fc && (eM.eb(true),
                    setTimeout(function() {
                        hB.j2()
                    }, 0),
                    a9(0))) : (x = -1,
                    g(),
                g_isSingleplayer && a9(1));
                c4.c5 = true
            }
            ;
            this.actionWheelOnClick = function(B, C) {
                var E = k(B, C);
                return this.lw ? 0 === E ? (je(),
                    2) : 1 === E ? (this.m2(),
                    2) : 2 === E ? (this.fr(g_localPlayerIndex) && (g_isSingleplayer ? eG.fp(g_localPlayerIndex) : iu.m5(),
                    this.m2()),
                    2) : 3 === E && 2 <= b0.m6 ? (hy.m2(),
                    c4.c5 = true,
                    2) : hy.lE ? 1 : (this.m2(),
                    2) : 0 === E ? (this.m2(),
                    2) : 0
            }
            ;
            this.lo = function(B, C) {
                var E = k(B, C);
                if (E === x)
                    return -1 !== x;
                x = E;
                this.lw || g();
                c4.c5 = true;
                return -1 !== x
            }
            ;
            this.cG = function() {
                if (this.lw) {
                    var B = Math.floor(5.5 * l);
                    cH.setTransform(1, 0, 0, 1, m7, eR.fL);
                    cH.fillStyle = lz;
                    cH.fillRect(0, 0, B, l);
                    0 === x ? (cH.fillStyle = m0,
                        cH.fillRect(0, 0, 4 * l, l)) : 1 === x && (cH.fillStyle = m0,
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
                    fq.mB(m7 + 4 * l + (1.5 * l - B) / 2, eR.fL + .3 * l, B);
                    t(1, fq.fr(g_localPlayerIndex) ? cK : mD);
                    2 <= b0.m6 && t(2, cK);
                    cH.setTransform(1, 0, 0, 1, 0, 0)
                } else
                    cH.drawImage(y, m7, eR.fL)
            }
            ;
            this.fr = function(B) {
                return 0 !== g_isPlayersAliveArray[B] && 2 !== ec && hx.lG(B)
            }
            ;
            this.mB = function(B, C, E) {
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
        function k1() {
            var g, k, t, l, y, n, z;
            function x() {
                return eR.mf(e9.mc()) ? eS.lE ? eR.fL - eR.cw - 2 * H : eR.fL - H : eS.lE ? s - eR.cw - (q ? 3 : 2) * H : s - H
            }
            function renderInFeed(I, O, R, N, T, U, Z, Y) {
                var qa = 1E3 <= R;
                var W = Math.floor(c2.measureText(O, e9.c0) + 1.5 * D + (qa ? M : 1.5 * D));
                if (W + H > r && !qa && 50 !== R && 20 < O.length) {
                    var la = Math.floor(.5 * O.length);
                    renderInFeed(I, O.substring(0, la), R, N, T, U, Z, Y);
                    renderInFeed(I, O.substring(la), R, N, T, U, Z, Y)
                } else {
                    var ca = R - 1E3;
                    la = W + (50 === R ? K : 0);
                    var S = document.createElement("canvas");
                    S.width = W;
                    S.height = M;
                    var V = S.getContext("2d", {
                        alpha: true
                    });
                    V.font = e9.c0;
                    V.textBaseline = cI;
                    V.textAlign = mj;
                    V.clearRect(0, 0, W, M);
                    V.fillStyle = U;
                    V.fillRect(0, 0, W, M);
                    V.fillStyle = T;
                    V.fillText(O, Math.floor(1.5 * D), Math.floor(M / 2));
                    qa && (qa = M / a5.c1,
                        V.imageSmoothingEnabled = true,
                        V.setTransform(qa, 0, 0, qa, W - M, 0),
                        V.drawImage(a5.l7[ca], 0, 0));
                    F.unshift({
                        gf: I,
                        l: O,
                        id: R,
                        player: N,
                        ls: S,
                        mW: T,
                        mX: U,
                        c1: W,
                        md: la,
                        mY: Z,
                        mZ: Y
                    })
                }
            }
            function B(I, O) {
                var R, N = 0, T = F.length;
                for (R = 0; R < T; R++)
                    if (F[R].id === I && (N++,
                    N >= O)) {
                        F.splice(R, 1);
                        break
                    }
            }
            function C(I, O, R) {
                return "rgb(" + I + "," + O + "," + R + ")"
            }
            function E(I, O) {
                var R, N = false;
                for (R = F.length - 1; 0 <= R; R--)
                    F[R].id !== I || O !== g_unclaimedLandIndex && F[R].player !== O || (F.splice(R, 1),
                        N = true);
                return N
            }
            function G(I, O) {
                return g_isSingleplayer || I >= g_playerCount || O || gI.gJ.nQ ? g_playerNameArray[I] : nR[I]
            }
            var F, M, H, D, K, J, L, P;
            this.bp = function() {
                L = 0;
                J = q ? 7 : 12;
                g = [0, 0, 0];
                k = [0, 0, 0];
                t = [220, 180, 180];
                l = [0, 0, 0];
                y = [0, 0, 0];
                n = [" were conquered.", " left the game.", " surrendered."];
                z = [" was conquered by ", " left the game.", " surrendered."];
                F = [];
                this.lx();
                fc && this.fl(0, 18);
                var I = "Map: " + jp.nF() + "   Pixels: " + eP.gL(jT.nG) + "   Land: " + eP.gL(jT.nH) + " (" + eB.nI(100 * jT.nH / jT.nG, 1) + ")"
                    , O = "";
                0 < jT.nK && (O += "Water: " + eP.gL(jT.nK) + " (" + eB.nI(100 * jT.nK / jT.nG, 1) + ")");
                0 < jT.nL && (O += 0 < jT.nK ? "   " : "",
                    O += "Mountains: " + eP.gL(jT.nL) + " (" + eB.nI(100 * jT.nL / jT.nG, 1) + ")");
                renderInFeed(340, I, 6, 0, C(215, 245, 255), i1, -1, false);
                0 < O.length && renderInFeed(340, O, 6, 0, C(215, 245, 255), i1, -1, false);
                10 === dv && renderInFeed(120, "Full sending against human players is disabled.", 6, 0, C(235, 255, 120), i1, -1, false);
                this.mR()
            }
            ;
            this.mR = function() {
                var I;
                if (dr.ds) {
                    var O = dr.dt.mS.length;
                    for (I = 0; I < O; I++)
                        renderInFeed(400, dr.dt.mS[I], 6, 0, C(255, 255, 255), i1, -1, false)
                }
            }
            ;
            this.lx = function() {
                var I;
                M = Math.floor((q ? .031 : .0249) * bq);
                M = 10 > M ? 10 : M;
                this.by = Math.floor(2 * M / 3);
                this.c0 = bt + this.by + bu;
                H = m7;
                D = Math.floor(M / 5);
                if (0 < F.length) {
                    var O = F;
                    F = [];
                    for (I = O.length - 1; 0 <= I; I--)
                        renderInFeed(O[I].gf, O[I].l, O[I].id, O[I].player, O[I].mW, O[I].mX, O[I].mY, O[I].mZ)
                }
                this.ma()
            }
            ;
            this.ma = function() {
                P = document.createElement("canvas");
                K = c2.measureText("Accept", this.c0) + 5 * D;
                P.height = M;
                P.width = K;
                var I = P.getContext("2d", {
                    alpha: true
                });
                I.font = this.c0;
                I.textBaseline = cI;
                I.textAlign = cJ;
                I.clearRect(0, 0, K, M);
                I.fillStyle = mb;
                I.fillRect(0, 0, K, M);
                I.fillStyle = cK;
                I.fillText("Accept", Math.floor(K / 2), Math.floor(M / 2))
            }
            ;
            this.mc = function() {
                if (eS.lE)
                    return eS.c1;
                var I = F.length;
                return 0 === I ? 0 : 1 === I ? F[0].md : me(F[0].md, F[1].md)
            }
            ;
            this.actionWheelOnClick = function(I, O) {
                for (var R = x(), N, T = F.length - 1; 0 <= T; T--)
                    if (N = R - (T + 1) * M,
                    O >= N && O < N + M) {
                        if (50 === F[T].id) {
                            if (I >= gE - K - H - F[T].c1)
                                return I >= gE - K - H ? (T = F[T].player,
                                    this.la(T, 0),
                                    iu.lb(T)) : eV.gj(F[T].player, 800, false, 0),
                                    true;
                            break
                        }
                        if (I >= gE - F[T].c1 - H)
                            return F[T].mZ && (eV.gj(F[T].player, 800, false, 0),
                            0 <= F[T].mY && (R = F[T].mY,
                                F[T].mY = F[T].player,
                                F[T].player = R)),
                                true;
                        break
                    }
                return false
            }
            ;
            this.j6 = function(I) {
                for (var O = F.length - 1; 0 <= O; O--)
                    F[O].id === I && (F[O].gf = 1)
            }
            ;
            this.fl = function(I, eventIndex) {
                0 === eventIndex ? (b0.b1[I < g_playerCount ? 4 : 3]++,
                    c2.cQ(I, 0),
                    renderInFeed(q ? 100 : 160, "You conquered " + g_playerNameArray[I] + ".", 0, I, "rgb(10,220,10)", i1, -1, false)) : 1 === eventIndex ? (E(50, g_unclaimedLandIndex),
                    c2.cQ(I, 1),
                    renderInFeed(360, "You were conquered by " + g_playerNameArray[I] + ".", 0, I, "rgb(255,40,40)", i1, -1, true),
                    eV.gj(I, 2700, true, 0)) : 2 === eventIndex ? (c2.cQ(I, 2),
                    renderInFeed(0, "Congratulations! You won the game.", 0, I, "rgb(10,255,255)", i1, -1, true),
                    eV.gj(I, 2700, true, 0)) : 3 === eventIndex ? (c2.cQ(I, 2),
                    renderInFeed(0, g_playerNameArray[I] + " won the game.", 0, I, cK, i1, -1, true),
                    eV.gj(I, 2700, true, 0)) : 4 === eventIndex ? (j0--,
                    g_spectatorCount--,
                    this.ml(1, I, I)) : 5 === eventIndex ? 2 !== fU[I] && hx.lG(g_localPlayerIndex) && (B(1, 5),
                    eA.mn(I) ? renderInFeed(180, g_playerNameArray[I] + " has broken the non-aggression pact and invades you!", 1, I, C(255, 200, 180), i1, -1, true) : renderInFeed(180, g_playerNameArray[I] + " is attacking you!", 1, I, "rgb(255,70,10)", i1, -1, true)) : 18 === eventIndex ? renderInFeed(255, "Choose your start position!", 18, 0, cK, i1, -1, false) : 21 === eventIndex ? renderInFeed(220, "You surrendered!", eventIndex, 0, "rgb(255,40,40)", i1, -1, false) : 22 === eventIndex && this.ml(2, I, I)
            }
            ;
            this.mo = function(I) {
                renderInFeed(200, "Error [" + I + "]", 94, 0, cK, mq, -1, false)
            }
            ;
            this.it = function(I) {
                c2.cQ(I, 2);
                100 > g_playerCount ? renderInFeed(0, g_playerNameArray[I] + " won the game.", 3, I, cK, i1, -1, true) : renderInFeed(0, g_playerNameArray[I] + " has been immortalized!", 3, I, cK, i1, -1, true);
                eV.gj(I, 2700, true, 0)
            }
            ;
            this.mr = function(I, O, R) {
                I === g_localPlayerIndex ? renderInFeed(175, " Message to " + g_playerNameArray[O] + ": ", 1E3 + R, O, C(200, 255, 210), i1, -1, true) : this.mu(I, R)
            }
            ;
            this.mu = function(eventPlayerIndex, O) {
                var R, N = 0;
                renderInFeed(175, g_playerNameArray[eventPlayerIndex] + ": ", 1E3 + O, eventPlayerIndex, cK, "rgba(5,60,25,0.9)", -1, true);
                for (R = 0; R < F.length; R++)
                    if (1E3 <= F[R].id && F[R].player === eventPlayerIndex && (N++,
                    3 < N)) {
                        F.splice(R, 1);
                        break
                    }
            }
            ;
            this.is = function(I) {
                var O = dW.iq[eT.my()];
                I ? (9 === dv ? (I = "The Resistance defeated the virus.",
                    c2.mz("The Resistance", 2, 1, 12)) : I = "Congratulations! Team " + dW.bo[O] + " has won the game!",
                    renderInFeed(0, I, 40, 0, "rgb(10,220,10)", i1, -1, false)) : (9 === dv ? (I = "Mankind lost the war against the virus.",
                    c2.mz("The Virus", 2, 0, 16)) : I = "Our alliance has been defeated!",
                    renderInFeed(0, I, 41, 0, "rgb(200,80,80)", i1, -1, false));
                9 !== dv && c2.mz("Team " + dW.bo[O], 2, 1, 12);
                eV.gs(2700)
            }
            ;
            this.iC = function(I) {
                renderInFeed(300, I[0].name + " [" + im.iI(I[0].iF) + "] vs " + I[1].name + " [" + im.iI(I[1].iF) + "]", 65, 0, gH, "rgba(100,255,255,0.75)", -1, false)
            }
            ;
            this.n0 = function(I) {
                renderInFeed(200, I, 0, 0, "rgb(40,255,200)", "rgba(10,60,40,0.9)", -1, false)
            }
            ;
            this.iK = function(I, O, R, N) {
                1 === eD.n2() && (renderInFeed(0, I[0].name + ": " + im.iI(I[0].iF) + " -> " + O, 66, 0, cK, N[0], -1, false),
                    renderInFeed(0, I[1].name + ": " + im.iI(I[1].iF) + " -> " + R, 66, 1, cK, N[1], -1, false))
            }
            ;
            this.ir = function(I) {
                1 === eD.n2() && renderInFeed(0, "[" + I + "] has won " + g_playerCount + (jH ? " x 2" : "") + " points!", 45, 0, "rgb(225,240,255)", i1, -1, false)
            }
            ;
            this.la = function(I, O) {
                0 === O ? E(50, I) ? (renderInFeed(128, "You signed a non-aggression pact with " + g_playerNameArray[I] + ".", 52, I, C(180, 255, 180), i1, -1, true),
                    eA.n4(I, 2, 255)) : renderInFeed(384, "You asked " + g_playerNameArray[I] + " to sign a non-aggression pact.", 51, I, C(210, 210, 255), i1, -1, true) : E(51, I) ? (renderInFeed(128, g_playerNameArray[I] + " accepted the non-aggression pact.", 52, I, cK, "rgba(60,120,10,0.9)", -1, true),
                    eA.n4(I, 2, 255)) : (renderInFeed(384, g_playerNameArray[I] + " requests a non-aggression pact.", 50, I, cK, "rgba(90,90,90,0.9)", -1, true),
                    eA.n4(I, 2, 96))
            }
            ;
            this.lR = function(I, O) {
                var R = "You ", N;
                a: {
                    for (N = I.length - 1; 0 <= N; N--)
                        if (2 * g_playerLandArray[I[N]] > g_playerLandArray[g_localPlayerIndex]) {
                            N = false;
                            break a
                        }
                    N = true
                }
                N ? (R += "ordered ",
                    N = C(255, 235, 210)) : (R += "asked ",
                    N = C(210, 255, 210));
                1 < I.length ? renderInFeed(230, R + I.length + " players to attack " + g_playerNameArray[O] + ".", 66, O, N, i1, -1, true) : renderInFeed(230, R + g_playerNameArray[I[0]] + " to attack " + g_playerNameArray[O] + ".", 66, I[0], N, i1, O, true)
            }
            ;
            this.n7 = function(I, O) {
                g_playerLandArray[I] > 2 * g_playerLandArray[g_localPlayerIndex] ? renderInFeed(230, g_playerNameArray[I] + " orders you to attack " + g_playerNameArray[O] + "!", 66, I, cK, "rgba(90,50,5,0.9)", O, true) : renderInFeed(230, g_playerNameArray[I] + " asks you to attack " + g_playerNameArray[O] + ".", 66, I, cK, "rgba(75,65,5,0.9)", O, true)
            }
            ;
            this.n9 = function(I, O) {
                E(I, O)
            }
            ;
            this.renderLowBalanceError = function() {
                100 <= g_playerBalanceArray[g_localPlayerIndex] || renderInFeed(80, "Your balance is too low!", 9, 0, cK, i1, -1, false)
            }
            ;
            this.renderEarlySupportError = function() {
                renderInFeed(80, "Boosting is disallowed in the first minute!", 9, 0, cK, i1, -1, false)
            }
            ;
            this.nA = function(I, O) {
                2 !== fU[g_localPlayerIndex] && renderInFeed(200, "You exported " + eP.gL(I) + " resource" + (1 === I ? "" : "s") + " to " + g_playerNameArray[O] + ".", 30, O, "rgb(190,255,190)", i1, -1, true)
            }
            ;
            this.nC = function(I, O) {
                if (2 !== fU[g_localPlayerIndex]) {
                    var R = 2 === fU[O] || O >= g_playerCount;
                    var N = 200 - 20 * F.length;
                    renderInFeed(80 > N ? 80 : N, (R ? "A bot" : g_playerNameArray[O]) + " supported you with " + eP.gL(I) + " resource" + (1 === I ? "" : "s") + ".", 31, O, gH, R ? "rgba(205,205,205,0.9)" : "rgba(205,255,205,0.9)", -1, true);
                    B(31, q ? 4 : 6)
                }
            }
            ;
            this.j1 = function(I) {
                var O, R = c4.getTimeSinceGameStarted();
                for (O = 2; 0 <= O; O--)
                    0 < l[O] && (I || y[O] < R - 220) && this.nN(O)
            }
            ;
            this.nN = function(I) {
                var O = l[I];
                var R = g[I];
                l[I] = 0;
                1 === O ? (O = G(R, 0 === I) + z[I],
                0 === I && (O += G(k[I], true) + "."),
                    renderInFeed(t[I], O, 7, k[I], cK, i1, -1, true)) : 2 <= O && (O = G(R, 0 === I) + " and " + (O - 1) + " other player" + (2 === O ? "" : "s") + n[I],
                    renderInFeed(t[I], O, 7, R, cK, i1, -1, false))
            }
            ;
            this.ml = function(I, O, R) {
                var N = c4.getTimeSinceGameStarted()
                    , T = l[I] + 1;
                l[I]++;
                g[I] = O;
                k[I] = R;
                1 === T && (y[I] = N);
                1 === T && (32 > j0 || 2 === ec) ? this.nN(I) : 1 < T && (y[I] < N - 140 || 2 === ec) && this.nN(I)
            }
            ;
            this.dF = function() {
                var I, O = F.length - J;
                O = 1 >= O ? 1 : O * O;
                for (I = F.length - 1; 0 <= I; I--)
                    0 < F[I].gf && (F[I].gf -= O,
                    0 >= F[I].gf && F.splice(I, 1));
                if (128 !== L && (L++,
                    !(128 > L)))
                    for (I = 5,
                             O = sp_Bots - 1; 0 <= O; O--)
                        1 === fU[dZ[O]] && 0 < I-- && renderInFeed(240, g_playerNameArray[dZ[O]] + " joined the game.", 1, dZ[O], gH, "rgba(255,255,255,0.75)", -1, true);
                this.j1(false)
            }
            ;
            this.cG = function() {
                for (var I = x(), O, R = F.length - 1; 0 <= R; R--)
                    O = I - (R + 1) * M,
                        50 === F[R].id ? (cH.drawImage(F[R].ls, gE - F[R].c1 - K - H, O),
                            cH.drawImage(P, gE - K - H, O)) : cH.drawImage(F[R].ls, gE - F[R].c1 - H, O)
            }
        }
        function nU() {
            this.by = this.nW = this.nV = this.i7 = this.cw = this.c1 = 0;
            this.bs = -1;
            this.lt = ["Accept Cookies", "More Information", "Decline"];
            this.colors = ["rgba(0,255,0,0.4)", "rgba(0,0,255,0.4)", "rgba(255,0,0,0.4)"];
            this.lE = false;
            this.bp = function() {
                this.lx();
                this.lE = 5 > d && !g_isIOSUser && 0 === f.a0()
            }
            ;
            this.lx = function() {
                this.c1 = Math.floor(2.8 * Math.floor((q ? .09 : .062) * bq));
                this.cw = Math.floor(1 * this.c1);
                this.i7 = Math.floor(.06 * this.c1);
                this.i8 = this.c1 - 2 * this.i7;
                this.nV = this.i7;
                this.nW = (this.cw - (this.lt.length + 1) * this.nV) / this.lt.length;
                this.by = Math.floor(.3 * this.nW)
            }
            ;
            this.actionWheelOnClick = function(g, k) {
                if (!this.lE)
                    return false;
                var t = this.nY(g, k);
                if (-1 === t)
                    return false;
                0 === t ? (f.nZ(2),
                    this.lE = false) : 1 === t ? na.bp(nb, true) : 2 === t && (f.nZ(1),
                    this.lE = false);
                return c4.c5 = true
            }
            ;
            this.lo = function(g, k) {
                if (!this.lE)
                    return false;
                var t = this.bs;
                this.bs = this.nY(g, k);
                t !== this.bs && (c4.c5 = true);
                return -1 !== this.bs
            }
            ;
            this.nY = function(g, k) {
                g -= cA;
                k -= Math.floor(cB - this.cw - cA);
                if (0 > g || 0 > k || g >= this.c1 || k >= this.cw)
                    return -1;
                var t = Math.floor((k - .5 * this.nV) / ((this.cw - this.nV) / this.lt.length));
                return 0 > t ? 0 : t >= this.lt.length ? this.lt.length - 1 : t
            }
            ;
            this.cG = function() {
                this.lE && this.nc()
            }
            ;
            this.nc = function() {
                var g = cA
                    , k = Math.floor(cB - this.cw - cA);
                cH.setTransform(1, 0, 0, 1, g, k);
                cH.fillStyle = i1;
                cH.fillRect(0, 0, this.c1, this.cw);
                cH.textBaseline = cI;
                cH.textAlign = cJ;
                cH.strokeStyle = cK;
                cH.font = bt + this.by + bu;
                cH.strokeRect(0, 0, this.c1, this.cw);
                for (var t = this.lt.length - 1; 0 <= t; t--)
                    cH.setTransform(1, 0, 0, 1, g + this.i7, k + this.nV + t * (this.nV + this.nW)),
                        cH.fillStyle = this.colors[t],
                        cH.fillRect(0, 0, this.i8, this.nW),
                    this.bs === t && (cH.fillStyle = nd,
                        cH.fillRect(0, 0, this.i8, this.nW)),
                        cH.fillStyle = cK,
                        cH.fillText(this.lt[t], this.i8 / 2, .54 * this.nW),
                        cH.strokeRect(0, 0, this.i8, this.nW);
                cH.setTransform(1, 0, 0, 1, 0, 0)
            }
        }
        function k2() {
            function g(x) {
                return 10 > x ? "0" + x : String(x)
            }
            var k, t, l, y, n, z;
            this.bp = function() {
                void 0 === y && this.lx();
                this.setTime()
            }
            ;
            this.lx = function() {
                y = Math.floor((q ? .53 : .36) * bq);
                n = Math.floor(.065 * y);
                z = bt + Math.floor(.9 * n) + bu;
                l--;
                this.setTime()
            }
            ;
            this.dF = function() {
                this.setTime() && (c4.c5 = true)
            }
            ;
            this.setTime = function() {
                var x = new Date;
                var A = x.getUTCMinutes()
                    , B = x.getUTCSeconds();
                t = 3600 - 60 * A - B;
                t %= 900;
                k = "Next Contest: " + g(Math.floor(t / 60)) + ":" + g(t % 60);
                x = l;
                l = 60 * A + B;
                if (x === l)
                    return false;
                y = c2.measureText(k, z);
                y += Math.floor(.4 * n);
                return true
            }
            ;
            this.cG = function() {
                cH.lineWidth = 1 + Math.floor(n / 15);
                cH.translate(gE - n, Math.floor(.5 * (cB + y)));
                cH.rotate(-Math.PI / 2);
                cH.fillStyle = cK;
                cH.fillRect(0, 0, y, n);
                cH.strokeStyle = gH;
                cH.strokeRect(0, 0, y, n + 10);
                cH.fillStyle = gH;
                cH.font = z;
                cH.textBaseline = cI;
                cH.textAlign = cJ;
                cH.fillText(k, Math.floor(y / 2), Math.floor(.59 * n));
                cH.setTransform(1, 0, 0, 1, 0, 0)
            }
        }
        function nm() {
            this.nn = 10;
            this.np = this.no = 50;
            this.nq = 8;
            this.nr = this.no + this.np;
            this.a6 = this.no + this.np + this.nq;
            this.c1 = 72;
            this.nt = this.ns = 0;
            this.l7 = Array(this.a6);
            this.nu = 8;
            this.nv = Array(this.no + this.np);
            this.nw = Array(this.no + this.np);
            this.fB = this.fA = 0;
            this.zoom = 1;
            this.nx = .2;
            this.lf = 0;
            this.ny = this.a7 = null;
            this.nz = 0;
            this.bp = function() {
                var g;
                this.a7 = Array(this.a6);
                this.ny = Array(this.a6);
                var k = bw.lB("emojis");
                this.o1();
                for (g = this.lf = 0; g < this.no; g++)
                    this.o2(g, g, k);
                k = bw.lB("flags");
                for (g = 0; g < this.np; g++)
                    this.o2(g, this.no + g, k);
                this.o4();
                this.l7[26] = this.o5(25, 2);
                this.o6()
            }
            ;
            this.o2 = function(g, k, t) {
                this.a7[k] = false;
                this.ny[k] = 0;
                var l = document.createElement("canvas");
                l.width = this.c1;
                l.height = this.c1;
                var y = l.getContext("2d", {
                    alpha: true
                });
                y.clearRect(0, 0, this.c1, this.c1);
                23 === k ? y.drawImage(hx.l5[2], 0, 0) : 36 === k ? y.drawImage(hx.l5[0], 0, 0) : 49 === k ? y.drawImage(hx.l5[1], 0, 0) : y.drawImage(t, this.c1 * g % (g === k ? this.nn * this.c1 : 4E3), g === k ? as(g, this.nn) * this.c1 : 0, this.c1, this.c1, 0, 0, this.c1, this.c1);
                this.l7[k] = l
            }
            ;
            this.o4 = function() {
                this.l7[this.a6 - 5] = this.l7[26];
                this.l7[this.a6 - 4] = this.o5(this.a6 - 5, 2);
                this.l7[this.a6 - 1] = this.o5(this.a6 - 5, 1);
                this.l7[this.a6 - 8] = this.o5(this.a6 - 4, 1);
                this.l7[this.a6 - 3] = this.l7[39];
                this.l7[this.a6 - 2] = this.o5(this.a6 - 3, 1);
                this.l7[this.a6 - 7] = this.o5(this.a6 - 2, 1);
                this.l7[this.a6 - 6] = this.o5(this.a6 - 7, 1)
            }
            ;
            this.o5 = function(g, k) {
                var t = document.createElement("canvas");
                t.width = this.c1;
                t.height = this.c1;
                var l = t.getContext("2d", {
                    alpha: true
                });
                l.clearRect(0, 0, this.c1, this.c1);
                l.rotate(k * Math.PI / 2);
                l.drawImage(this.l7[g], 1 === k ? 0 : -this.c1, -this.c1);
                return t
            }
            ;
            this.o6 = function() {
                var g = u().split("");
                if (2 * g.length !== this.a6)
                    this.lf = 0;
                else {
                    for (var k = 0; k < this.a6; k += 2) {
                        var t = parseInt(g[Math.floor(k / 2)]);
                        this.a7[k] = 1 === t % 2;
                        this.a7[k + 1] = 1 < t
                    }
                    this.o9()
                }
            }
            ;
            this.o9 = function() {
                for (var g = this.lf = 0; g < this.a6; g++)
                    this.a7[g] && (this.ny[this.lf++] = g)
            }
            ;
            this.lK = function() {
                8 === this.lf && this.ny[0] === this.nr && this.o9()
            }
            ;
            this.oA = function() {
                this.lf = this.nq;
                for (var g = 0; g < this.nq; g++)
                    this.ny[g] = this.nr + g
            }
            ;
            this.o1 = function() {
                this.ns = Math.floor((q ? .075 : .0468) * bq);
                this.zoom = this.ns / this.c1;
                this.nt = (1 + this.nx) * this.ns
            }
            ;
            this.show = function(g, k) {
                if (1 > this.lf)
                    return false;
                this.nz = c4.gf;
                var t = Math.floor(gE / this.nt);
                t = 3 > t ? 3 : t > this.nu ? this.nu : t;
                t = this.lf > t ? t : this.lf;
                var l = 1 + as(this.lf - 1, t)
                    , y = Math.floor(t * this.nt)
                    , n = Math.floor(g - y / 2);
                n = n + y > gE ? gE - y : n;
                n = 0 > n ? 0 : n;
                var z = Math.floor(k - this.nt / 2);
                l = Math.floor(l * this.nt);
                z = z + l > cB ? cB - l : z;
                z = 0 > z ? 0 : z;
                this.fA = n + y;
                this.fB = z + l;
                for (y = 0; y < this.lf; y++)
                    this.nv[y] = Math.floor(n + y % t * this.nt),
                        this.nw[y] = Math.floor(z + as(y, t) * this.nt);
                return true
            }
            ;
            this.lI = function(action_mouseXOnCanvas, action_mouseYOnCanvas) {
                return !(action_mouseXOnCanvas < this.nv[0] || action_mouseYOnCanvas < this.nw[0] || action_mouseXOnCanvas >= this.fA || action_mouseYOnCanvas >= this.fB)
            }
            ;
            this.lJ = function(g, k, t) {
                if (t === g_localPlayerIndex && this.nz + 190 > c4.gf)
                    return false;
                for (var l = this.lf - 1; 0 <= l; l--)
                    if (g >= this.nv[l] && k >= this.nw[l]) {
                        if (39 === this.ny[l])
                            return this.oA(),
                                this.show(g, k),
                                true;
                        g_isSingleplayer ? eA.n4(g_localPlayerIndex, 0, this.ny[l]) : t === g_localPlayerIndex ? iu.oE(this.ny[l]) : iu.oF(this.ny[l], t);
                        this.o9();
                        break
                    }
                return false
            }
            ;
            this.oG = function(g) {
                return 16 > g || 40 <= g && 47 > g
            }
            ;
            this.oH = function(g) {
                return g >= this.no && g < this.no + this.np
            }
            ;
            this.cG = function() {
                cH.imageSmoothingEnabled = true;
                for (var g = this.nx * this.ns / 2, k = this.lf - 1; 0 <= k; k--)
                    cH.setTransform(this.zoom, 0, 0, this.zoom, this.nv[k] + g, this.nw[k] + g),
                        cH.drawImage(this.l7[this.ny[k]], 0, 0);
                cH.imageSmoothingEnabled = false;
                cH.setTransform(1, 0, 0, 1, 0, 0)
            }
            ;
            this.oI = function(g, k, t) {
                cH.imageSmoothingEnabled = true;
                cH.setTransform(this.zoom, 0, 0, this.zoom, g, k);
                cH.drawImage(this.l7[t], 0, 0);
                cH.imageSmoothingEnabled = false;
                cH.setTransform(1, 0, 0, 1, 0, 0)
            }
        }
        var gH = "rgb(0,0,0)", oJ = "rgba(0,0,0,0.7)", oK = "rgba(0,0,0,0.5)", lz = "rgba(0,0,0,0.5)", i1 = "rgba(0,0,0,0.75)", oL = "rgba(0,0,0,0.85)", oM = "rgba(0,96,96,0.75)", oN = "rgb(255,255,255)", mD = "rgb(128,128,128)", oO = "rgb(30,255,30)", oP = "rgb(0,200,0)", oQ = "rgb(0,255,0)", oR = "rgba(0,255,0,0.6)", oS = "rgba(0,255,0,0.5)", oT = "rgba(0,200,0,0.5)", mb = "rgba(0,100,0,0.75)", oU = "rgba(0,40,0,0.8)", oV = "rgb(128,255,128)", oW = "rgba(255,255,150,0.2)", oX = "rgba(0,255,0,0.3)", m0 = "rgba(255,255,255,0.3)", oY = "rgba(0,40,90,0.75)", oZ = "rgba(220,0,0,0.6)", oa = "rgba(255,100,100,0.8)", mq = "rgba(100,0,0,0.85)", ob = "rgba(60,0,0,0.85)", oc = "rgb(255,120,120)", od = "rgb(255,160,160)", oe = "rgb(255,70,70)", of = "rgb(230,0,0)", og = "rgba(0,60,60,0.85)", oh = "rgb(160,160,255)", cK = "rgb(255,255,255)", oi = "rgba(255,255,255,0.6)", oj = "rgba(255,255,255,0.4)", nd = "rgba(255,255,255,0.25)", ok = "rgba(255,255,255,0.85)", ol = "rgba(255,255,255,0.75)", om = "rgb(255,120,100)", on = "rgba(255,255,0,0.5)", cI = "middle", oo = "bottom", cJ = "center", mj = "left", op = "right", bt = "bold ", oq = "italic ", or = "normal ", bu = "px Arial", os = [bt, oq + bt, bt], ot = "https://play.google.com/store/apps/details?id=territorial.io", ou = "https://apps.apple.com/app/id1581110913", ov = "https://www.youtube.com/watch?v=toZTQ8aRdFc", ow = "https://discord.gg/pthqvpTXmh", ox = "https://www.instagram.com/davidtschacher/", nb = "https://territorial.io/cookie_policy", oy = "https://territorial.io/privacy_policy", oz = "https://territorial.io/tutorial", p0 = ["https://territorial.io/players", "https://territorial.io/clans"], m7, p1, cA, p2, p3, p4, p5, cC, p6 = ["wss://", "/s50/", "/s51/", "/s52/"];
        function p7() {
            p8();
            p2 = 3;
            cC = new p9;
            cC.bp()
        }
        function pA() {
            pB.addEventListener("mousedown", mouseDownListener);
            pB.addEventListener("mousemove", mouseMoveListener);
            pB.addEventListener("mouseup", mouseUpListener);
            pB.addEventListener("click", clickListener);
            pB.addEventListener("mouseleave", pG);
            pB.addEventListener("wheel", pH);
            pB.addEventListener("touchstart", pI);
            pB.addEventListener("touchmove", pJ);
            pB.addEventListener("touchend", pK);
            pB.addEventListener("touchcancel", pL);
            pB.addEventListener("dragover", pM);
            pB.addEventListener("drop", pN);
            p3 = false
        }
        function p8() {
            cA = Math.floor((q ? .02 : .01152) * bq);
            cA = 2 > cA ? 2 : cA;
            m7 = Math.floor((q ? .0114 : .01296) * bq);
            m7 = 2 > m7 ? 2 : m7;
            p1 = Math.floor(.005 * pO);
            p1 = 1 > p1 ? 1 : p1
        }
        function mouseDownListener(g) {
            g.preventDefault();
            p3 || (eD.pQ(eD.jf),
                pR(Math.floor(pS * g.clientX), Math.floor(pS * g.clientY)))
        }
        function pI(g) {
            g.preventDefault();
            eD.pQ(eD.jf);
            p3 = true;
            0 < g.touches.length && (p4 = Math.floor(pS * g.touches[0].clientX),
                p5 = Math.floor(pS * g.touches[0].clientY),
            jr.pT(g) || pR(p4, p5))
        }
        function pR(g, k) {
            if (0 === ec)
                aJ.actionWheelOnClick(g, k);
            else if (!(hy.actionWheelOnClick(g, k) || hx.lD(g, k) || eW.actionWheelOnClick(g, k) || eP.actionWheelOnClick(g, k))) {
                var t = fq.actionWheelOnClick(g, k);
                2 === t || eM.actionWheelOnClick(g, k) || (gm.actionWheelOnClick(g, k) ? c4.c5 = true : eR.pV(g, k) ? (gm.gn = false,
                eR.pW(g, k) && (c4.c5 = true)) : e9.actionWheelOnClick(g, k) || eS.actionWheelOnClick(g, k) || 0 === t && hx.lF(g, k))
            }
        }
        function mouseMoveListener(g) {
            p3 = false;
            g.preventDefault();
            pX(Math.floor(pS * g.clientX), Math.floor(pS * g.clientY))
        }
        function pJ(g) {
            g.preventDefault();
            0 < g.touches.length && (p4 = Math.floor(pS * g.touches[0].clientX),
                p5 = Math.floor(pS * g.touches[0].clientY),
            jr.pY(g) || pX(p4, p5))
        }
        function pX(g, k) {
            0 === ec ? aJ.lo(g, k) : hy.lo(g, k) || (hx.lE() ? hx.lo(g, k) : fq.lo(g, k) || (eR.pZ ? eR.lo(g, k) && (c4.c5 = true) : (eM.lo(g, k),
            gm.gn && gm.lo(g, k) && (c4.c5 = true))))
        }
        function pG(g) {
            g.preventDefault();
            0 === ec ? (aJ.click(-1024, -1024),
                jj.pa()) : (eM.pb(-1024, -1024),
                fq.lo(-1024, -1024),
                eR.pc(),
            gm.gn && (gm.gn = false))
        }
        function mouseUpListener(g) {
            g.preventDefault();
            p3 || pd(Math.floor(pS * g.clientX), Math.floor(pS * g.clientY))
        }
        function clickListener(g) {
            2 === aJ.pe() && dy.click(g.clientX, g.clientY)
        }
        function pK(g) {
            g.preventDefault();
            g && g.touches && 0 < g.touches.length && 0 !== ec ? gm.gn = false : pd(p4, p5)
        }
        function pL(g) {
            g.preventDefault();
            pd(p4, p5)
        }
        function pM(g) {
            jx.pf(g)
        }
        function pN(g) {
            jx.pg(g)
        }
        function pd(g, k) {
            0 === ec ? aJ.click(g, k) : (eM.pb(g, k),
                hy.pb(),
                eR.pc(),
                gm.gn = false,
            hx.click(g, k) && (c4.c5 = true))
        }
        function pH(g) {
            g.preventDefault();
            eD.pQ(eD.jf);
            var k = Math.floor(pS * g.clientX)
                , t = Math.floor(pS * g.clientY)
                , l = g.deltaY;
            1 === g.deltaMode && (l *= 20);
            0 === ec ? aJ.ph(k, t, l) : eM.ph(k, t, l) || (eR.pV(k, t) ? eR.ph(l) && (c4.c5 = true) : gm.ph(k, t, 2 * l) && (c4.c5 = true))
        }
        function pi(g, k, t) {
            g.fillStyle = cK;
            g.fillRect(0, 0, k, 1);
            g.fillRect(0, t - 1, k, 1);
            g.fillRect(0, 0, 1, t);
            g.fillRect(k - 1, 0, 1, t)
        }
        function k3() {
            function g(C) {
                var E = n[C].ls.width;
                n[C].i0.clearRect(0, 0, E, A);
                n[C].i0.fillStyle = 0 !== n[C].id ? "rgba(33,33,120,0.83)" : n[C].cM === g_unclaimedLandIndex ? "rgba(88,88,88,0.83)" : n[C].cM < g_playerCount ? "rgba(100,70,33,0.83)" : "rgba(33,100,80,0.83)";
                n[C].i0.fillRect(0, 0, E, A);
                pi(n[C].i0, E, A);
                E > z + 2 * A && (n[C].i0.fillRect(E - z - A, 0, 1, A),
                    n[C].i0.fillText(g_playerNameArray[n[C].cM], Math.floor((E - z) / 2), Math.floor(.57 * A)));
                var G = 0 !== n[C].id ? 0 : A;
                n[C].i0.fillText(eP.gL(n[C].cN), Math.floor(E - z / 2 - G), Math.floor(.57 * A));
                n[C].i0.fillStyle = oi;
                n[C].i0.fillRect(Math.floor(E - z - G), A - B, Math.floor(z * n[C].cN / n[C].px), B);
                0 === n[C].id ? (k(C, E),
                    n[C].i0.strokeStyle = oV,
                    n[C].i0.fillRect(A, 0, 1, A),
                    E -= A,
                    n[C].i0.beginPath(),
                    n[C].i0.moveTo(Math.floor(.3 * A + E), Math.floor(A / 2)),
                    n[C].i0.lineTo(Math.floor(A - .3 * A + E), Math.floor(A / 2)),
                    n[C].i0.stroke(),
                    n[C].i0.beginPath(),
                    n[C].i0.moveTo(Math.floor(A / 2 + E), Math.floor(.3 * A)),
                    n[C].i0.lineTo(Math.floor(A / 2 + E), Math.floor(A - .3 * A)),
                    n[C].i0.stroke()) : k(C, 2 * A)
            }
            function k(C, E) {
                n[C].i0.strokeStyle = n[C].py ? mD : od;
                n[C].i0.fillStyle = cK;
                n[C].i0.fillRect(E - A, 0, 1, A);
                var G = Math.floor(A / 12);
                n[C].i0.lineWidth = 3 > G ? 3 : G;
                n[C].i0.lineCap = "round";
                E = A + 1;
                n[C].i0.beginPath();
                n[C].i0.moveTo(Math.floor(E - .35 * A), Math.floor(.35 * A));
                n[C].i0.lineTo(Math.floor(E - A + .35 * A), Math.floor(A - .35 * A));
                n[C].i0.stroke();
                n[C].i0.beginPath();
                n[C].i0.moveTo(Math.floor(E - A + .35 * A), Math.floor(.35 * A));
                n[C].i0.lineTo(Math.floor(E - .35 * A), Math.floor(A - .35 * A));
                n[C].i0.stroke()
            }
            function t(C) {
                C.ls = document.createElement("canvas");
                pp.font = x;
                var E = z;
                C.cM < g_unclaimedLandIndex && 0 === C.id && (E += Math.floor(pp.measureText(g_playerNameArray[C.cM] + "000").width));
                E += A;
                0 === C.id && (E += A);
                C.ls.width = E;
                C.ls.height = A;
                C.i0 = C.ls.getContext("2d", {
                    alpha: true
                });
                C.i0.font = x;
                C.i0.textBaseline = cI;
                C.i0.textAlign = cJ
            }
            function l(C) {
                return eO.qJ() ? gE - n[C].ls.width - m7 : eO.fK
            }
            function y(C) {
                return Math.floor(2 * m7 + (eO.qJ() ? eB.cw + m7 : 0) + eO.cw + 1.3 * C * A)
            }
            var n, z, x, A, B;
            this.bp = function() {
                n = [];
                this.lx()
            }
            ;
            this.lx = function() {
                x = e9.c0;
                A = e9.by + 5;
                A = Math.floor(1.25 * A);
                q && (A = Math.floor(1.25 * A));
                B = Math.floor(.15 * A);
                pp.font = x;
                z = Math.floor(pp.measureText("02 000 000 0000").width);
                for (var C = n.length - 1; 0 <= C; C--)
                    t(n[C]),
                        g(C)
            }
            ;
            this.eb = function() {
                for (var C = n.length - 1; 0 <= C; C--)
                    n[C].ps && (n[C].ps = false,
                        g(C))
            }
            ;
            this.gL = function(C) {
                if (1E3 > C)
                    return 0 > C ? "-" + this.gL(Math.abs(C)) : C.toString();
                var E = Math.floor(Math.log(C + .5) / Math.log(10)) + 1
                    , G = Math.floor((E - 1) / 3);
                C = C.toString();
                for (var F = C.substring(E - 3, E), M = 1; M < G; M++)
                    F = C.substring(E - 3 * (M + 1), E - 3 * M) + " " + F;
                return C.substring(0, E - 3 * G) + " " + F
            }
            ;
            this.actionWheelOnClick = function(C, E) {
                if (2 === ec || 0 === g_isPlayersAliveArray[g_localPlayerIndex] || jB || !hx.lG(g_localPlayerIndex))
                    return false;
                var G, F = q ? A : 0, M = q ? Math.floor(.15 * A) : 0;
                for (G = n.length - 1; 0 <= G; G--) {
                    var H = l(G);
                    var D = y(G);
                    var K = n[G].ls.width;
                    if (E >= D - M && E <= D + A + M) {
                        if (C >= H - F && C <= H + A + F)
                            return n[G].py || (n[G].ps = true,
                                n[G].py = true,
                                0 === n[G].id ? g_isSingleplayer ? eG.fO(g_localPlayerIndex, n[G].cM) : iu.qC(n[G].cM === g_unclaimedLandIndex ? g_localPlayerIndex : n[G].cM) : g_isSingleplayer ? eG.fQ(g_localPlayerIndex, n[G].id) : iu.qD(n[G].id)),
                                true;
                        if (0 === n[G].id && C >= H + K - A - F && C <= H + K + F)
                            return g_isSingleplayer ? triggerAttack(g_localPlayerIndex, n[G].cM, eR.getSelectedPercentageOnBar()) : iu.lW(eR.getSelectedPercentageOnBar(), n[G].cM === g_unclaimedLandIndex ? g_localPlayerIndex : n[G].cM),
                                true
                    }
                }
                return false
            }
            ;
            this.dF = function() {
                if (2 !== ec && 0 !== g_isPlayersAliveArray[g_localPlayerIndex] && !jB && hx.lG(g_localPlayerIndex)) {
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
                        var G, F = [];
                        E = 0;
                        b: for (; E < C; E++) {
                            var M = ae.ag(g_localPlayerIndex, E);
                            var H = ae.al(g_localPlayerIndex, E);
                            for (G = 0; G < n.length; G++)
                                if (n[G].id === M && n[G].cM === H) {
                                    F.push(n.splice(G, 1)[0]);
                                    continue b
                                }
                            G = ae.am(g_localPlayerIndex, E);
                            M = {
                                cM: H,
                                cN: G,
                                px: G,
                                id: M,
                                ps: true,
                                py: false,
                                ls: null,
                                i0: null
                            };
                            t(M);
                            F.push(M)
                        }
                        n = F
                    }
                    for (--C; 0 <= C; C--)
                        E = ae.am(g_localPlayerIndex, C),
                        n[C].cN !== E && (n[C].cN = E,
                            n[C].px = E > n[C].px ? E : n[C].px,
                            n[C].ps = true)
                }
            }
            ;
            this.cG = function() {
                if (0 !== g_isPlayersAliveArray[g_localPlayerIndex] && hx.lG(g_localPlayerIndex) && !jB)
                    for (var C = n.length - 1; 0 <= C; C--)
                        cH.drawImage(n[C].ls, l(C), y(C))
            }
        }
        function k4() {
            function g() {
                cH.drawImage(H, m7 + (dA ? m7 + eT.qX() : 0), qY + 2 * m7)
            }
            function renderAnnouncement() {
                H.width = l[0].width + F;
                H.height = x + F;
                D = H.getContext("2d", {
                    alpha: true
                });
                D.clearRect(0, 0, l[0].width + F, x + F);
                D.translate(Math.floor(F / 2), Math.floor(F / 2));
                D.lineWidth = F;
                D.fillStyle = 1 === l[0].qV ? ok : i1;
                t();
                D.fill();
                D.strokeStyle = 1 === l[0].qV ? gH : cK;
                t();
                D.stroke();
                D.textAlign = cJ;
                D.textBaseline = cI;
                D.fillStyle = 1 === l[0].qV ? gH : cK;
                D.font = A[0];
                D.fillText(gameAnnouncements[l[0].qU], Math.floor(l[0].width / 2), Math.floor(.72 * C[0] * x));
                D.font = A[1];
                D.fillText(l[0].l, Math.floor(l[0].width / 2), Math.floor((C[0] + .48 * C[1]) * x))
            }
            function t() {
                D.beginPath();
                D.moveTo(M, 0);
                D.lineTo(l[0].width - M, 0);
                D.lineTo(l[0].width, M);
                D.lineTo(l[0].width, x - M);
                D.lineTo(l[0].width - M, x);
                D.lineTo(M, x);
                D.lineTo(0, x - M);
                D.lineTo(0, M);
                D.closePath()
            }
            var l, y, n, z, x, A, B, C, gameAnnouncements, G, F, M, H, D, K, J;
            this.bp = function() {
                K = 0;
                y = 4;
                n = z = 0;
                l = [];
                A = Array(2);
                B = Array(2);
                C = Array(2);
                gameAnnouncements = ["YOU CONQUERED", "YOU WERE CONQUERED BY", "THE GAME WAS WON BY", "MAP:"];
                C[0] = .3;
                C[1] = .7;
                G = Array(4);
                H = document.createElement("canvas");
                J = c4.gf + 2E3;
                this.lx()
            }
            ;
            this.lx = function() {
                var L;
                x = Math.floor((q ? .0725 : .058) * bq);
                B[0] = Math.floor(.85 * C[0] * x);
                B[1] = Math.floor(.85 * C[1] * x);
                A[0] = bt + B[0] + bu;
                A[1] = bt + B[1] + bu;
                for (L = G.length - 1; 0 <= L; L--)
                    G[L] = this.measureText(gameAnnouncements[L] + "000", A[0]);
                F = Math.floor(1 + .05 * x);
                M = Math.floor(.2 * x);
                if (0 < l.length) {
                    for (L = l.length - 1; 0 <= L; L--) {
                        var P = this.measureText(l[L].l + "00", A[1]);
                        l[L].width = P < G[L] ? G[L] : P
                    }
                    renderAnnouncement()
                }
            }
            ;
            this.dF = function() {
                if (0 !== y)
                    if (4 === y)
                        c4.gf > J && (y = 0,
                        1 === ec && c2.mz(jp.nF(), 3, 1, 9));
                    else {
                        if (1 === y)
                            0 === n && (renderAnnouncement(),
                                n = 1E-4),
                                n += .002 * (c4.gf - K),
                            1 <= n && (z = 0,
                                y = 2,
                                n = 1),
                                c4.c5 = true;
                        else if (2 === y) {
                            if (z += (c4.gf - K) / 1E3,
                            z > l[0].ge || 1 < z && 1 < l.length)
                                y = 3
                        } else
                            3 === y && (n -= .002 * (c4.gf - K),
                            0 >= n && (n = 0,
                                l.shift(),
                                y = 0 < l.length ? 1 : 0),
                                c4.c5 = true);
                        K = c4.gf
                    }
            }
            ;
            this.measureText = function(L, P) {
                cH.font = P;
                return Math.floor(cH.measureText(L).width)
            }
            ;
            this.cQ = function(L, P) {
                this.mz(g_playerNameArray[L], P, 1, 0 === P ? 3 : 7)
            }
            ;
            this.mz = function(L, P, I, O) {
                var R = this.measureText(L + "00", A[1]);
                R = R < G[P] ? G[P] : R;
                l.push({
                    l: L,
                    width: R,
                    qU: P,
                    qV: I,
                    ge: O
                });
                0 === y && (n = 0,
                    y = 1,
                    K = c4.gf)
            }
            ;
            this.cG = function() {
                0 !== y && 0 !== n && (1 > n ? (cH.globalAlpha = n,
                    g(),
                    cH.globalAlpha = 1) : g())
            }
        }
        function ki() {
            function g() {
                var D = eS.c1;
                E = false;
                hz(n, D, l);
                var K = Math.floor(D / 2);
                1 === x ? (n.fillStyle = oR,
                    n.fillRect(K, 0, K, l)) : -1 === x && (n.fillStyle = oZ,
                    n.fillRect(0, 0, K, l));
                i2(n, D, l, 2);
                K = Math.floor(.25 * l);
                K = 2 > K ? 2 : K;
                n.fillStyle = ol;
                var J = Math.floor((l - 4) * A[1] / B[1]);
                0 < J && n.fillRect(2, l - 2 - J, K, J);
                J = Math.floor((l - 4) * A[0] / B[0]);
                0 < J && n.fillRect(D - 2 - K, l - 2 - J, K, J);
                K = Math.floor(l / 8);
                K = 2 > K ? 2 : K;
                i4(n, Math.floor(.4 * l), 0, l, K, .5, false);
                i4(n, Math.floor(D - 1.4 * l), 0, l, K, .5, true);
                n.drawImage(z, Math.floor((D - z.width) / 2), 3)
            }
            function k() {
                E = true;
                G = 140;
                x = 0;
                C = [];
                eS.lE = false;
                A[0] = A[1] = 0
            }
            function t() {
                return eR.mf(e9.mc()) ? eR.fL - l - m7 : s - l - (q ? 2 : 1) * m7
            }
            var l, y, n, z, x, A, B, C, E, G, F, M, H;
            this.bp = function() {
                M = H = 0;
                E = this.lE = false;
                G = 140;
                x = 0;
                A = [0, 0];
                B = [1, 1];
                C = [];
                F = new Uint32Array(10);
                this.lx()
            }
            ;
            this.lx = function() {
                l = eR.cw;
                this.c1 = 4 * l;
                this.qj();
                y = document.createElement("canvas");
                y.width = this.c1;
                y.height = l;
                n = y.getContext("2d", {
                    alpha: true
                });
                g()
            }
            ;
            this.eb = function() {
                E && g()
            }
            ;
            this.qj = function() {
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
            this.actionWheelOnClick = function(D, K) {
                if (D < r - this.c1 - m7)
                    return false;
                var J = t();
                if (K < J || K > J + l)
                    return false;
                J = D > r - m7 - this.c1 / 2;
                g_isSingleplayer ? this.fY(0, J) : hx.lG(g_localPlayerIndex) && 0 !== g_isPlayersAliveArray[g_localPlayerIndex] && iu.qm(J);
                return true
            }
            ;
            this.dF = function() {
                if (0 < H)
                    H--,
                    0 === H && k();
                else if (this.lE) {
                    G--;
                    var D;
                    if (D = 270 === G && 2 <= M)
                        a: {
                            for (D = sp_Bots - 1; 0 <= D; D--)
                                if (hx.lG(dZ[D])) {
                                    D = false;
                                    break a
                                }
                            D = true
                        }
                    D && (E = true,
                        A[0] += B[0]);
                    180 === G && 3 * A[0] < B[0] ? k() : A[0] >= B[0] ? fi.fj(-1) : A[1] >= B[1] ? H = 4 : 0 >= G && k()
                } else {
                    for (D = 9; 0 <= D; D--)
                        12 < Math.abs(F[D] - g_playerLandArray[en[D]]) && (G = 140),
                            F[D] = g_playerLandArray[en[D]];
                    D = 0 >= --G ? true : false;
                    if (D) {
                        this.lE = true;
                        G = 360;
                        var K = 0;
                        for (D = sp_Bots - 1; 0 <= D; D--)
                            hx.lG(dZ[D]) && (K += g_playerLandArray[dZ[D]]);
                        B[0] = me(as(3 * K, 5), 1);
                        dA && 9 !== dv && (B[0] = qr(me(as(K * (100 - as(100 * eT.qs(), jC)), 100), 1), B[0]));
                        B[1] = me(K - B[0], 1);
                        M++
                    }
                }
            }
            ;
            this.iy = function() {
                this.lE && A[0] < B[0] && k()
            }
            ;
            this.fY = function(D, K) {
                var J;
                if (this.lE) {
                    for (J = C.length - 1; 0 <= J; J--)
                        if (C[J] === D)
                            return;
                    C.push(D);
                    E = true;
                    J = g_isSingleplayer ? B[0] : g_playerLandArray[D];
                    K ? A[0] += J : A[1] += J;
                    D === g_localPlayerIndex && (x = K ? 1 : -1)
                }
            }
            ;
            this.cG = function() {
                if (this.lE) {
                    var D = t();
                    cH.drawImage(y, r - this.c1 - m7, D)
                }
            }
        }
        function k5() {
            function g() {
                if (selectedPercentage_1isMax < 1 / 3) {
                    var H = Math.floor(540 * selectedPercentage_1isMax);
                    return "rgba(" + H + ",180,0,0.75)"
                }
                if (selectedPercentage_1isMax < 2 / 3)
                    return H = Math.floor(540 * (selectedPercentage_1isMax - 1 / 3)),
                    "rgba(180," + (180 - H) + ",0,0.75)";
                H = Math.floor(540 * (selectedPercentage_1isMax - 2 / 3));
                return "rgba(180,0," + H + ",0.75)"
            }
            function k() {
                A.clearRect(0, 0, y, eR.cw);
                var H = Math.floor(selectedPercentage_1isMax * (y - 2 * z));
                A.fillStyle = i1;
                A.fillRect(0, 0, z, eR.cw);
                A.fillRect(z + H, 0, y - z - H, eR.cw);
                A.fillStyle = g();
                A.fillRect(z, 0, H, eR.cw);
                A.fillStyle = cK;
                A.fillRect(0, 0, y, 1);
                A.fillRect(0, eR.cw - 1, y, 1);
                A.fillRect(0, 0, 1, eR.cw);
                A.fillRect(z, 0, 1, eR.cw);
                A.fillRect(z + H, 0, 1, eR.cw);
                A.fillRect(y - z, 0, 1, eR.cw);
                A.fillRect(y - 1, 0, 1, eR.cw);
                H = 1 + Math.floor(.0625 * eR.cw);
                var D = 1 + Math.floor(.3 * eR.cw);
                A.fillRect(Math.floor(.25 * eR.cw) + D, Math.floor((eR.cw - H) / 2), eR.cw - 2 * D, H);
                A.fillRect(Math.floor(y - 1.25 * eR.cw) + D, Math.floor((eR.cw - H) / 2), eR.cw - 2 * D - D % 2, H);
                A.fillRect(Math.floor(y - 1.25 * eR.cw) + Math.floor((eR.cw - H) / 2), D, H, eR.cw - 2 * D - D % 2);
                E = Math.floor(g_playerBalanceArray[g_localPlayerIndex] * selectedPercentage_1isMax);
                A.fillText(eP.gL(E), Math.floor(y / 2), Math.floor(.55 * eR.cw))
            }
            function t(H) {
                if (1 < H && 0 === selectedPercentage_1isMax)
                    return selectedPercentage_1isMax = .01,
                        k(),
                        true;
                if (1 < H && 1 === selectedPercentage_1isMax || 0 === selectedPercentage_1isMax)
                    return false;
                selectedPercentage_1isMax *= H;
                selectedPercentage_1isMax = 1 < selectedPercentage_1isMax ? 1 : 0 > selectedPercentage_1isMax ? 0 : selectedPercentage_1isMax;
                k();
                return true
            }
            function l(H) {
                var D = selectedPercentage_1isMax;
                selectedPercentage_1isMax = (H - n - z) / (y - 2 * z);
                selectedPercentage_1isMax = 0 > selectedPercentage_1isMax ? 0 : selectedPercentage_1isMax;
                selectedPercentage_1isMax = 1 < selectedPercentage_1isMax ? 1 : selectedPercentage_1isMax;
                return D !== selectedPercentage_1isMax ? (k(),
                    true) : false
            }
            var y, n, z, x, A, B, selectedPercentage_1isMax, E, G, F, M = 11 / 12;
            this.bp = function() {
                B = !fc;
                F = false;
                selectedPercentage_1isMax = .5;
                E = 0;
                this.pZ = false;
                this.lx()
            }
            ;
            this.lx = function() {
                q && r < .8 * s ? (this.cw = Math.floor(.0536 * bq),
                    y = r - 4 * m7 - this.cw) : (y = Math.floor((q ? .65 : .389) * bq),
                    y += 12 - y % 12,
                    this.cw = Math.floor(y / 12));
                z = Math.floor(3 * this.cw / 2);
                G = bt + Math.floor(.5 * this.cw) + bu;
                x = document.createElement("canvas");
                x.width = y;
                x.height = this.cw;
                A = x.getContext("2d", {
                    alpha: true
                });
                A.font = G;
                A.textBaseline = cI;
                A.textAlign = cJ;
                this.qy();
                k()
            }
            ;
            this.qy = function() {
                n = q && r < .8 * s ? this.cw + 3 * m7 : Math.floor((gE - y) / 2);
                this.fL = cB - this.cw - (q ? 2 : 1) * m7
            }
            ;
            this.eb = function() {
                F && (F = false,
                    k())
            }
            ;
            this.lE = function() {
                return !(!B || fq.lw && n < Math.floor(m7 + 5.5 * this.cw))
            }
            ;
            this.mf = function(H) {
                return this.lE() ? n + y > r - H - m7 : false
            }
            ;
            this.cE = function() {
                B = true
            }
            ;
            this.qn = function() {
                B = false
            }
            ;
            this.getSelectedPercentageOnBar = function() {
                var selectedPercentage = Math.floor(1E3 * selectedPercentage_1isMax);
                return 0 >= selectedPercentage ? 1 : 1E3 < selectedPercentage ? 1E3 : selectedPercentage
            }
            ;
            this.pV = function(H, D) {
                return this.lE() && H > n && H < n + y && D > this.fL
            }
            ;
            this.pW = function(H, D) {
                if (!this.lE())
                    return false;
                if (H > n && H < n + z && D > eR.fL)
                    return t(M);
                if (H > n + y - z && H < n + y && D > eR.fL)
                    return t(1 / M);
                this.pZ = true;
                return l(H)
            }
            ;
            this.r9 = function(H) {
                0 !== ec && this.lE() && t(H) && (c4.c5 = true)
            }
            ;
            this.ph = function(H) {
                if (0 === H || !this.lE())
                    return false;
                0 < H ? (H = 400 / (400 + H),
                    H = H < M ? M : H) : (H = (400 - H) / 400,
                    H = H > 1 / M ? 1 / M : H);
                return t(H)
            }
            ;
            this.lo = function(H, D) {
                return this.pZ ? l(H, D) : false
            }
            ;
            this.pc = function() {
                this.pZ = false
            }
            ;
            this.dF = function() {
                this.lE() && Math.floor(g_playerBalanceArray[g_localPlayerIndex] * selectedPercentage_1isMax) !== E && (F = true)
            }
            ;
            this.cG = function() {
                this.lE() && cH.drawImage(x, n, this.fL)
            }
        }
        var g7, gC, gD;
        function k6() {
            var g, k, t, l, y, n, z;
            this.bp = function() {
                g = Array(2);
                k = Array(2);
                this.gn = false;
                z = n = gD = gC = 0;
                g7 = 1;
                this.lx()
            }
            ;
            this.lx = function() {
                t = Math.floor((q ? .072 : .0502) * bq);
                t = 8 > t ? 8 : t;
                for (var x = 1; 0 <= x; x--)
                    g[x] = document.createElement("canvas"),
                        g[x].width = t,
                        g[x].height = t,
                        k[x] = g[x].getContext("2d", {
                            alpha: true
                        });
                this.qy();
                x = Math.floor(1 + t / 20);
                for (var A = 1; 0 <= A; A--)
                    k[A].clearRect(0, 0, t, t),
                        k[A].fillStyle = oJ,
                        k[A].beginPath(),
                        k[A].arc(t / 2, t / 2, t / 2 - x, 0, 2 * Math.PI),
                        k[A].fill(),
                        k[A].lineWidth = x,
                        k[A].fillStyle = oN,
                        k[A].strokeStyle = oN,
                        k[A].beginPath(),
                        k[A].arc(t / 2, t / 2, t / 2 - x, 0, 2 * Math.PI),
                        k[A].stroke(),
                        i4(k[A], 0, 0, t, x, .3, 0 === A)
            }
            ;
            this.gF = function() {
                return -gC / g7
            }
            ;
            this.cF = function() {
                return -gD / g7
            }
            ;
            this.gz = function(x, A) {
                gC = g7 * x - A
            }
            ;
            this.h0 = function(x, A) {
                gD = g7 * x - A
            }
            ;
            this.actionWheelOnClick = function(x, A) {
                if ((Math.pow(x - (l + t / 2), 2) + Math.pow(A - (y + t / 2), 2) < t * t / 4 || Math.pow(x - (l + t / 2), 2) + Math.pow(A - (y + 2 * t), 2) < t * t / 4) && !gI.gJ.rM)
                    return A < y + 1.25 * t ? this.ph(Math.floor(gE / 2), Math.floor(cB / 2), -200) : this.ph(Math.floor(gE / 2), Math.floor(cB / 2), 200);
                eV.h3() && (this.gn = true,
                    n = x,
                    z = A);
                return false
            }
            ;
            this.lo = function(x, A) {
                if (!eV.h3())
                    return true;
                var B = gC
                    , C = gD
                    , E = n - x
                    , G = z - A;
                gC += E;
                gD += G;
                eA.lo(E, G);
                this.rP();
                n = x;
                z = A;
                return B !== gC || C !== gD
            }
            ;
            this.ph = function(x, A, B) {
                if (!eV.h3())
                    return true;
                if (0 < B)
                    B = 450 / (450 + B),
                        B = .5 > B ? .5 : B;
                else if (0 > B)
                    B = (450 - B) / 450,
                        B = 2 < B ? 2 : B;
                else
                    return false;
                this.rQ(x, A, B);
                return true
            }
            ;
            this.rQ = function(x, A, B) {
                B = 1024 < B * g7 ? 1024 / g7 : B;
                B = .125 > B * g7 ? .125 / g7 : B;
                eA.zoom(B, x, A);
                g7 *= B;
                gC = (gC + x) * B - x;
                gD = (gD + A) * B - A;
                gm.rP()
            }
            ;
            this.rP = function() {
                var x = r / 16
                    , A = 0
                    , B = s / 16
                    , C = 0;
                gC < -r + x && (A = -r + x - gC);
                gC > g7 * aZ - x && (A = g7 * aZ - x - gC);
                gD < -s + B && (C = -s + B - gD);
                gD > g7 * aa - B && (C = g7 * aa - B - gD);
                gC += A;
                gD += C;
                h1.h2();
                eA.rX(A, C)
            }
            ;
            this.qy = function() {
                l = gE - t - m7;
                y = Math.floor(cB / 2 - 1.25 * t)
            }
            ;
            this.cG = function() {
                gI.gJ.rM || (cH.drawImage(g[0], l, y),
                    cH.drawImage(g[1], l, Math.floor(y + 3 * t / 2)))
            }
        }
        function k7() {
            function g() {
                A = Math.floor(.2 * (q ? .07 : .035) * bq);
                A = me(q ? 3 : 1, A);
                var N = r / (n.length + B);
                A = N > A ? N : A;
                P = Math.floor((1 - B) * A);
                z = 0;
                k()
            }
            function k() {
                z = -20 > z ? -20 : z;
                z = z > (n.length - 15) * A ? (n.length - 15) * A : z;
                E = Math.floor(z / A);
                G = E + Math.floor(gE / A);
                G = G > n.length - 1 ? n.length - 1 : G;
                E = G < E ? G : E;
                E = 0 > E ? 0 : E;
                var N = G;
                C = x / n[N];
                for (var T = G - 1; T >= E; T--)
                    n[T] > n[N] && (N = T,
                        C = x / Math.pow(n[T], L))
            }
            function t(N) {
                N = Math.floor((z + gE - N - B * A) / A);
                N = -1 > N ? -1 : -1 === N ? 0 : N > n.length - 1 ? -1 : N;
                return N !== F ? (F = N,
                -1 === I && 0 === F && J && (I = setInterval(y, 100)),
                    true) : false
            }
            function l(N) {
                var T = Math.floor(C * Math.pow(n[N], L));
                cH.fillRect(z + gE - (N + 1) * A, cB - T, P, T)
            }
            function y() {
                8 === aJ.pe() && (F = -1);
                if (0 !== F)
                    O = (new Date).getTime(),
                        clearInterval(I),
                        I = -1;
                else {
                    var N = n[1] / 864E3;
                    if (-1 !== O) {
                        var T = (new Date).getTime();
                        N += (T - O) * n[1] / 864E5;
                        O = -1
                    }
                    0 < N && (n[0] += Math.floor(N),
                        c4.c5 = true)
                }
            }
            var n, z, x, A, B, C, E, G, F, M, H, D, K, J, L, P, I, O, R;
            this.bp = function() {
                O = I = -1;
                J = false;
                L = 1;
                F = -1;
                this.rn = false;
                K = 0;
                D = new Date;
                z = 0;
                B = .3;
                R = [];
                R.push({
                    mv: "Plateau A",
                    b3: 0,
                    pP: 57
                });
                R.push({
                    mv: "Max A",
                    b3: 1,
                    pP: 1
                });
                R.push({
                    mv: "Black Friday",
                    b3: 15,
                    pP: 15
                });
                R.push({
                    mv: "Max B",
                    b3: 19,
                    pP: 19
                });
                R.push({
                    mv: "Max C",
                    b3: 44,
                    pP: 44
                });
                R.push({
                    mv: "First Android Version",
                    b3: 58,
                    pP: 58
                });
                R.push({
                    mv: "Max D",
                    b3: 67,
                    pP: 67
                });
                R.push({
                    mv: "The iFrame Explosion",
                    b3: 98,
                    pP: 99
                });
                R.push({
                    mv: "The 155-Day Uptrend",
                    b3: 58,
                    pP: 213
                });
                R.push({
                    mv: "Max E",
                    b3: 213,
                    pP: 213
                });
                R.push({
                    mv: "Plateau B",
                    b3: 214,
                    pP: 259
                });
                R.push({
                    mv: "Turbulent Times",
                    b3: 260,
                    pP: 344
                });
                R.push({
                    mv: "Max F",
                    b3: 262,
                    pP: 262
                });
                R.push({
                    mv: "Max G",
                    b3: 282,
                    pP: 282
                });
                R.push({
                    mv: "Max H",
                    b3: 333,
                    pP: 333
                });
                R.push({
                    mv: "The 19-Day Downtrend",
                    b3: 283,
                    pP: 301
                });
                R.push({
                    mv: "Plateau C",
                    b3: 345,
                    pP: 385
                });
                R.push({
                    mv: "The Alliance Ascent",
                    b3: 386,
                    pP: 395
                });
                R.push({
                    mv: "Max I",
                    b3: 395,
                    pP: 395
                });
                R.push({
                    mv: "First iOS Version",
                    b3: 411,
                    pP: 411
                });
                R.push({
                    mv: "Plateau D",
                    b3: 396,
                    pP: 453
                });
                R.push({
                    mv: "The TikTok Revolution",
                    b3: 454,
                    pP: 470
                });
                R.push({
                    mv: "Max J",
                    b3: 456,
                    pP: 456
                });
                R.push({
                    mv: "Max K",
                    b3: 472,
                    pP: 472
                });
                R.push({
                    mv: "Max L",
                    b3: 478,
                    pP: 478
                });
                R.push({
                    mv: "YT Drew",
                    b3: 471,
                    pP: 485
                });
                R.push({
                    mv: "Plateau E",
                    b3: 485,
                    pP: 600
                });
                R.push({
                    mv: "Uptrend A",
                    b3: 600,
                    pP: 613
                });
                R.push({
                    mv: "Max M",
                    b3: 613,
                    pP: 613
                });
                R.push({
                    mv: "Downtrend A",
                    b3: 614,
                    pP: 635
                });
                R.push({
                    mv: "Plateau F",
                    b3: 636,
                    pP: 737
                });
                R.push({
                    mv: "End of Record",
                    b3: 738,
                    pP: 738
                });
                n = [208644377, 208644377, 208644377, 206964709, 205156594, 250680803, 249089835, 234476552, 252346209, 263196406, 270821533, 291436400, 294907103, 288866179, 297960890, 310165928, 323215738, 326005712, 312078872, 282668674, 268883231, 261100885, 247870209, 240175828, 231697235, 240614202, 237647174, 230525212, 228239099, 226070733, 215992739, 216961676, 231079584, 235793502, 234032821, 228402462, 216942832, 211862670, 209792418, 220626495, 221020535, 228198633, 226910806, 227687295, 210969547, 197393506, 205629061, 215820135, 213694935, 209455870, 215822584, 215130299, 214034219, 229190414, 230055290, 225313791, 223398523, 231870169, 226224938, 218242706, 235891029, 210498444, 195329116, 187676007, 183432634, 175752106, 170096205, 173369342, 171454357, 185810310, 189616577, 190788861, 179291487, 179513980, 189122353, 188375572, 202060722, 203256609, 197948652, 191950448, 194693217, 196335490, 195911919, 202264283, 199251620, 193699336, 188441210, 183419345, 195919988, 198126823, 199780788, 197440550, 190144884, 179139362, 166469099, 178827877, 183801980, 197952484, 188875861, 185919783, 186237411, 182504952, 183532013, 174109004, 178159701, 161031347, 194622838, 205645645, 200496457, 194773327, 194546481, 207893217, 210920126, 213376144, 173859897, 154326886, 158943729, 166772975, 175066046, 177406405, 179018562, 185986119, 186747583, 200787939, 208959937, 161987576, 185512400, 185788899, 185957487, 194591063, 215634157, 230579314, 237637383, 240518707, 221398239, 225230795, 224891285, 211292916, 216944626, 219436299, 226523918, 232405568, 232166426, 216921782, 244767964, 257278946, 243548100, 237386943, 242802627, 229717622, 168149709, 259971896, 267057767, 257606635, 209857364, 126035568, 129833237, 151312703, 197006695, 73120657, 37551024, 39229432, 29517736, 29382631, 31512045, 42652097, 47363019, 49624906, 46687310, 33767120, 31230439, 34211643, 43094531, 53747053, 55380682, 49779117, 47748833, 21038802, 20406484, 24523793, 26566139, 25284142, 26825553, 23497443, 20291865, 17765022, 21291320, 21106123, 19050128, 18324426, 19044067, 19594721, 19347845, 23365124, 24186529, 19824881, 17952812, 17093838, 17328579, 17607296, 21284737, 22551012, 20471281, 19350848, 19654931, 18725460, 18641926, 23301269, 25178902, 21617041, 21433781, 21078957, 19526047, 18665064, 21394401, 21575049, 19286677, 18018450, 17550775, 17282428, 17055509, 19348704, 20177845, 19766211, 19088037, 18118802, 18269428, 18500614, 19130220, 19351798, 19205188, 19489961, 20233286, 20726811, 23245145, 26158741, 26096642, 24424181, 23690661, 22967492, 21098008, 20325973, 19431907, 17008295, 15583096, 14209752, 14307184, 13541498, 12822679, 13154311, 12161194, 12956543, 11435697, 13428928, 12262514, 12858519, 12405344, 12884309, 14410011, 15556681, 15260178, 14863807, 13861458, 15176144, 14089849, 13063987, 12378716, 13061867, 13118900, 13112653, 13137263, 13062253, 13126875, 14136833, 14711852, 14341250, 11888270, 13137006, 12830841, 12516937, 12783789, 13139393, 12931E3, 12857582, 13677329, 13892963, 13171528, 14135236, 14640750, 15677970, 16758399, 19125177, 17723446, 16469484, 17032884, 19792603, 21426397, 22032534, 20271251, 16190176, 16772813, 17675977, 18764026, 18346209, 19576834, 20989792, 21350839, 14696885, 14653075, 14677999, 14958759, 14210260, 15488352, 15623604, 14473144, 12823062, 14869909, 15142264, 15567014, 17896725, 20081347, 17765006, 12763925, 13523610, 13979983, 15080856, 17116394, 18483238, 18084320, 12100282, 12221529, 12441579, 12058220, 12441689, 12821546, 13401583, 13009895, 12271066, 12210094, 12355642, 13737115, 14257807, 14904897, 14072161, 15640387, 15721803, 16397970, 19254839, 21608906, 20527471, 16596206, 15550563, 14385591, 15547262, 13174302, 12462319, 13000669, 12832541, 12186376, 13150940, 14654379, 14299386, 14158528, 15185971, 12444117, 14253445, 15049053, 14123310, 16892853, 15963931, 11858727, 10012703, 9478191, 9193460, 8851082, 9298848, 9638204, 9442496, 8653593, 9093527, 8530977, 8809114, 9609612, 9906912, 9615756, 9477879, 9713075, 9126583, 8949378, 9577595, 10180186, 9858705, 9534213, 9184660, 8889455, 8311313, 9738346, 9772164, 9157791, 8445413, 8467279, 8756002, 9257951, 10213536, 10620530, 10352296, 9350531, 9118709, 9614237, 9692491, 10801215, 10984804, 9542309, 9609538, 9391430, 9515517, 10064494, 11061684, 10408005, 9794768, 9297643, 9275992, 9394076, 9716084, 10045958, 9715229, 9091248, 10010584, 9845528, 9532588, 8986320, 9037708, 9820996, 8953464, 9074064, 8644692, 8025308, 8832112, 10785788, 10539708, 8908744, 8331216, 8858100, 8626840, 7666284, 8503372, 8855308, 6762540, 6414076, 6786692, 6445532, 6262192, 5918176, 5864376, 5464928, 5384996, 5942760, 5261972, 5404612, 6184860, 6312948, 5815660, 5208552, 4734392, 4538784, 4661404, 5145524, 4819368, 4369224, 4458584, 4289956, 3538288, 3517544, 3871876, 3388048, 3344796, 3089228, 2863676, 2268964, 2160500, 2580004, 2244356, 2018408, 1688912, 1945368, 1796332, 1619260, 2060292, 1597656, 1472788, 1306208, 1171408, 1021096, 1109312, 1241276, 1305092, 1142748, 1157700, 991984, 786992, 786396, 1043956, 1029320, 860500, 834824, 841912, 736464, 690328, 878376, 907232, 794932, 646388, 752600, 672836, 636212, 794108, 746856, 642928, 671328, 493568, 458168, 428776, 464736, 371412, 314568, 225472, 252072, 227604, 251048, 269184, 174136, 825576, 536060, 165952, 153252, 180036, 149616, 138472, 157832, 188152, 180108, 134076, 70960, 89236, 111428, 60520, 74620, 73424, 74720, 71584, 94432, 62572, 66420, 32532, 34452, 41048, 51372, 61916, 43236, 55172, 26776, 47E3, 57424, 93100, 64980, 37288, 44296, 34588, 40700, 29200, 24604, 18184, 42660, 31404, 38096, 18556, 17388, 19568, 17604, 22328, 40300, 39392, 33440, 17960, 7984, 11612, 67700, 14108, 22444, 19756, 9436, 16864, 14400, 17216, 14436, 8612, 15952, 29764, 18748, 16348, 23976, 22080, 20268, 20984, 9480, 30736, 15996, 9484, 9392, 9716, 21540, 57428, 24788, 18728, 8528, 5972, 20560, 18268, 28088, 15364, 15300, 29348, 30992, 20564, 34420, 16716, 14424, 12360, 15124, 51172, 13176];
                this.lx();
                eD.rp(0, 0)
            }
            ;
            this.lx = function() {
                x = Math.floor(.15 * s);
                M = Math.floor((q ? .018 : .0137) * bq);
                M = 10 > M ? 10 : M;
                H = bt + M + bu;
                g()
            }
            ;
            this.rr = function() {
                J || iu.rs()
            }
            ;
            this.rt = function(N) {
                var T;
                J = true;
                for (T = 0; T < N.length; T++)
                    n.unshift(N[T]);
                g();
                c4.c5 = true
            }
            ;
            this.rx = function() {
                k()
            }
            ;
            this.lo = function(N, T) {
                T > cB - .6 * x ? this.rn ? N !== K && (z += N - K,
                    K = N,
                    k(),
                    t(N),
                    this.rn = -1 !== F,
                    c4.c5 = true) : t(N) && (c4.c5 = true) : this.pa()
            }
            ;
            this.pa = function() {
                -1 !== F && (this.rn = false,
                    F = -1,
                    c4.c5 = true)
            }
            ;
            this.ph = function(N, T) {
                -1 !== F && (z += Math.floor(T),
                    k(),
                    t(N),
                    c4.c5 = true)
            }
            ;
            this.actionWheelOnClick = function(N, T) {
                this.lo(N, T);
                -1 !== F && (K = N,
                    this.rn = true)
            }
            ;
            this.pb = function() {
                -1 !== F && (this.rn = false)
            }
            ;
            this.cG = function() {
                cH.fillStyle = oj;
                for (var N = G; N >= E; N--)
                    l(N);
                J && 0 === E && (cH.fillStyle = oZ,
                    l(0));
                -1 !== F && (cH.fillStyle = oi,
                    l(F));
                if (-1 !== F) {
                    cH.font = H;
                    cH.textBaseline = oo;
                    N = new Date;
                    N.setTime(D.getTime() - 864E5 * F);
                    var T = "month"
                        , U = "day";
                    "undefined" !== typeof Intl && (T = (new Intl.DateTimeFormat("en-US",{
                        month: "long"
                    })).format(N),
                        U = (new Intl.DateTimeFormat("en-US",{
                            weekday: "long"
                        })).format(N));
                    N = U + ", " + N.getUTCDate() + " " + T + " " + N.getFullYear();
                    var Z = 1 === n[F] ? " second played" : " seconds played";
                    Z = eP.gL(n[F]) + Z;
                    var Y = Math.floor(cH.measureText(N).width)
                        , qa = Math.floor(cH.measureText(Z).width)
                        , W = Math.floor(.5 * (Y + M));
                    T = z + gE - (F + 1) * A;
                    T = T < W ? W : T > gE - W ? gE - W : T;
                    U = cB - Math.floor(C * Math.pow(n[F], L));
                    var la = Math.floor(1.1 * M)
                        , ca = U > cB - la ? cB - la : U;
                    cH.fillStyle = i1;
                    cH.fillRect(gE - qa - M, ca - la, qa + M, la);
                    cH.fillRect(T - W, cB - la, Y + M, la);
                    cH.fillStyle = cK;
                    cH.textAlign = op;
                    cH.fillText(Z, Math.floor(gE - .5 * M), ca);
                    Z = ca - 2 * la;
                    Y = -1;
                    qa = n.length - F - 1;
                    for (W = R.length - 1; 0 <= W; W--)
                        qa >= R[W].b3 && qa <= R[W].pP && (-1 === Y || R[W].pP - R[W].b3 < R[Y].pP - R[Y].b3) && (Y = W);
                    -1 !== Y && (qa = Math.floor(cH.measureText(R[Y].mv).width),
                        cH.fillStyle = i1,
                        cH.fillRect(gE - qa - M, Z, qa + M, la),
                        cH.fillStyle = cK,
                        cH.fillText(R[Y].mv, Math.floor(gE - .5 * M), Z + la));
                    cH.textAlign = cJ;
                    cH.fillText(N, T, cB);
                    cH.strokeStyle = nd;
                    cH.lineWidth = 1;
                    cH.beginPath();
                    cH.moveTo(0, U);
                    cH.lineTo(gE, U);
                    cH.closePath();
                    cH.stroke()
                }
            }
        }
        function k8() {
            this.cw = this.fK = 0;
            var g, k, t, l, y, n, z, x, A, B, C, E, G;
            this.bp = function() {
                y = he;
                C = "rgba(0,100,0,0.8)";
                E = "rgba(150,0,0,0.8)";
                B = true;
                x = false;
                A = g_playerBalanceArray[g_localPlayerIndex];
                this.lx()
            }
            ;
            this.lx = function() {
                k = Math.floor((q ? .305 : .24) * bq);
                this.cw = Math.floor(.5 + .13 * k);
                k = Math.floor(6 * this.cw);
                g = bt + Math.floor(.8 * this.cw) + bu;
                G = Math.floor(.5 * this.cw);
                pp.font = g;
                t = m7;
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
                this.sI()
            }
            ;
            this.qJ = function() {
                return q && r < 1.2 * s
            }
            ;
            this.qy = function() {
                this.qJ() ? this.fK = gE - k - m7 : this.fK = Math.floor(eM.sJ() + (gE - eM.sJ() - eB.c1 - k) / 2 - .5 * m7)
            }
            ;
            this.eb = function() {
                x && (x = false,
                    this.sI())
            }
            ;
            this.sI = function() {
                z.clearRect(0, 0, k, this.cw);
                z.fillStyle = B ? C : E;
                z.fillRect(0, 0, k, this.cw);
                z.fillStyle = oi;
                this.sK();
                this.sL();
                z.fillStyle = g_playerBalanceArray[g_localPlayerIndex] >= ay.dJ(g_localPlayerIndex) ? od : cK;
                z.fillText(eP.gL(A), Math.floor(k / 2), G);
                z.fillStyle = cK;
                z.fillRect(0, 0, k, 1);
                z.fillRect(0, 0, 1, this.cw);
                z.fillRect(0, this.cw - 1, k, 1);
                z.fillRect(k - 1, 0, 1, this.cw)
            }
            ;
            this.sK = function() {
                var F = Math.floor((ay.sM() - 1) * this.cw / 9);
                F = qr(F, this.cw - l);
                z.fillRect(0, F, l, this.cw - F);
                z.fillRect(k - l, F, l, this.cw - F)
            }
            ;
            this.sL = function() {
                z.fillRect(l, this.cw - l, Math.floor((k - 2 * l) * g_playerBalanceArray[g_localPlayerIndex] / y), l)
            }
            ;
            this.dF = function() {
                0 !== g_isPlayersAliveArray[g_localPlayerIndex] && 2 !== fU[g_localPlayerIndex] && A !== g_playerBalanceArray[g_localPlayerIndex] && (y = me(g_playerBalanceArray[g_localPlayerIndex], y),
                    B = g_playerBalanceArray[g_localPlayerIndex] > A && 10 <= g_playerBalanceArray[g_localPlayerIndex],
                    A = g_playerBalanceArray[g_localPlayerIndex],
                    x = true)
            }
            ;
            this.cG = function() {
                0 === g_isPlayersAliveArray[g_localPlayerIndex] || fc || 2 === fU[g_localPlayerIndex] || cH.drawImage(n, this.fK, t)
            }
        }
        var sN, qY, sO, sP, sQ, en, g_playerLeaderboardRankArray;
        function k9() {
            function g() {
                var S;
                B.clearRect(0, 0, sN, qY);
                B.fillStyle = oY;
                B.fillRect(0, 0, sN, M);
                B.fillStyle = oL;
                B.fillRect(0, M, sN, qY - M);
                g_playerLeaderboardRankArray[g_localPlayerIndex] >= Y && t(g_playerLeaderboardRankArray[g_localPlayerIndex] - Y, oX);
                0 !== g_playerLeaderboardRankArray[g_localPlayerIndex] && 0 === Y && t(0, oW);
                -1 !== Z && t(Z, m0);
                B.fillStyle = oN;
                B.fillRect(0, M, sN, 1);
                B.fillRect(0, 0, sN, p1);
                B.fillRect(0, 0, p1, qY);
                B.fillRect(sN - p1, 0, p1, qY);
                B.fillRect(0, qY - p1, sN, p1);
                B.font = sO;
                B.textBaseline = cI;
                B.textAlign = cJ;
                B.fillText(O, Math.floor(sN / 2), Math.floor(G + sQ / 2));
                var V = g_playerLeaderboardRankArray[g_localPlayerIndex] < Y + x - 1 ? 1 : 2;
                B.font = sP;
                B.textAlign = mj;
                for (S = x - V; 0 <= S; S--)
                    k(en[S + Y]),
                        l(S, S + Y, en[S + Y]);
                B.textAlign = op;
                for (S = x - V; 0 <= S; S--)
                    k(en[S + Y]),
                        y(S, en[S + Y]);
                2 === V && (k(g_localPlayerIndex),
                    B.textAlign = mj,
                    l(x - 1, g_playerLeaderboardRankArray[g_localPlayerIndex], g_localPlayerIndex),
                    B.textAlign = op,
                    y(x - 1, g_localPlayerIndex));
                0 === Y && (S = .7 * H / bw.bz(4).height,
                    B.setTransform(S, 0, 0, S, Math.floor(D + .58 * H + .5 * S * bw.bz(4).width), Math.floor(G + sQ + .4 * H)),
                    B.imageSmoothingEnabled = true,
                    B.drawImage(bw.bz(4), -Math.floor(bw.bz(4).width / 2), -Math.floor(bw.bz(4).height / 2)),
                    B.setTransform(1, 0, 0, 1, 0, 0))
            }
            function k(S) {
                dA && (B.fillStyle = dW.t1[dW.iq[dW.dX[S]]])
            }
            function t(S, V) {
                B.fillStyle = V;
                S = S > x - 1 ? x - 1 : S;
                var ba = Math.floor((S === x - 1 ? 2 : 0 === S ? 1.15 : 1) * H);
                ba = S === x - 2 ? Math.floor(M + 9.15 * H) - Math.floor(M + 8.15 * H) : ba;
                B.fillRect(0, Math.floor(M + (S + (0 === S ? 0 : .15)) * H), sN, ba)
            }
            function l(S, V, ba) {
                B.fillText(R[V], D, Math.floor(G + sQ + (S + .5) * H));
                1 === fU[ba] && (B.font = oq + sP);
                B.fillText(P[ba] === ba ? g_playerNameArray[ba] : L[P[ba] % g_unclaimedLandIndex], K, Math.floor(G + sQ + (S + .5) * H));
                0 !== fU[ba] && (B.font = sP)
            }
            function y(S, V) {
                B.fillText(g_playerLandArray[V], J, Math.floor(G + sQ + (S + .5) * H))
            }
            function n(S) {
                S -= m7 + M;
                if (0 > S)
                    return Math.floor(S / H) - 1;
                if (S < (x - 1) * H)
                    return Math.floor(S / H);
                if (S < qY - M)
                    return x - 1;
                S -= qY - M;
                return x + Math.floor(S / H)
            }
            function z(S, V) {
                return S >= m7 && S < m7 + sN && V >= m7 && V < m7 + qY
            }
            var x, A, B, C, E, G, F, M, H, D, K, J, L, P, I, O, R, N, T, U, Z, Y, qa, W, la, ca;
            this.bp = function() {
                var S, V;
                qa = 0;
                W = false;
                ca = la = 0;
                O = "LEADERBOARD";
                Z = -1;
                x = q ? 6 : 10;
                Y = 0;
                U = false;
                N = new Uint16Array(x + 1);
                T = new Uint32Array(x + 1);
                E = g_unclaimedLandIndex;
                en = new Uint16Array(E);
                g_playerLeaderboardRankArray = new Uint16Array(E);
                for (S = E - 1; 0 <= S; S--)
                    en[S] = S,
                        g_playerLeaderboardRankArray[S] = S;
                this.lx(true);
                L = [];
                P = new Uint16Array(g_unclaimedLandIndex);
                I = new Uint16Array(g_unclaimedLandIndex);
                var ba = Math.floor(sN - K - D - C)
                    , ta = 0;
                R = Array(g_unclaimedLandIndex);
                B.font = sP;
                for (S = g_unclaimedLandIndex - 1; 0 <= S; S--)
                    if (R[S] = S + 1 + ".",
                        P[S] = S,
                        I[S] = Math.floor(B.measureText(g_playerNameArray[S]).width),
                    I[S] > ba) {
                        var Q = g_playerNameArray[S];
                        for (V = g_playerNameArray[S].length - 1; 1 <= V && !(Q = Q.substring(0, V),
                            I[S] = Math.floor(B.measureText(Q + "...").width),
                        I[S] <= ba); V--)
                            ;
                        Q += "...";
                        L.push(Q);
                        P[S] = g_unclaimedLandIndex + ta++
                    }
                g()
            }
            ;
            this.st = function(S) {
                var V, ba = Math.floor(sN - K - D - C);
                g_playerNameArray[S] = "Bot [" + g_playerNameArray[S] + "]";
                B.font = sP;
                I[S] = Math.floor(B.measureText(g_playerNameArray[S]).width);
                if (I[S] <= ba)
                    return g_playerNameArray[S];
                var ta = g_playerNameArray[S];
                for (V = g_playerNameArray[S].length - 2; 1 <= V && !(ta = ta.substring(0, V),
                    I[S] = Math.floor(B.measureText(ta + "...]").width),
                I[S] <= ba); V--)
                    ;
                ta += "...]";
                P[S] === S ? (P[S] = g_unclaimedLandIndex + L.length,
                    L.push(ta)) : L[P[S] % g_unclaimedLandIndex] = ta;
                return ta
            }
            ;
            this.lx = function(S) {
                q ? (sN = Math.floor(.335 * bq),
                    qY = Math.floor(x * sN / 8)) : (sN = Math.floor(.27 * bq),
                    qY = Math.floor(x * sN / 10));
                sN = Math.floor(.97 * sN);
                A = document.createElement("canvas");
                A.width = sN;
                A.height = qY;
                B = A.getContext("2d", {
                    alpha: true
                });
                G = .025 * sN;
                sQ = .16 * sN;
                F = 0 * sN;
                M = Math.floor(.45 * G + sQ);
                H = (qY - sQ - 2 * G - F) / x;
                sO = bt + Math.floor(.55 * sQ) + bu;
                sP = Math.floor((q ? .67 : .72) * H) + bu;
                B.font = sP;
                D = Math.floor(.04 * sN);
                K = Math.floor((q ? .195 : .18) * sN);
                C = Math.floor(B.measureText("00920600").width);
                B.font = sO;
                J = sN - D;
                if (!S) {
                    B.font = sP;
                    for (S = g_unclaimedLandIndex - 1; 0 <= S; S--)
                        I[S] = Math.floor(B.measureText(P[S] === S ? g_playerNameArray[S] : L[P[S] % g_unclaimedLandIndex]).width);
                    g()
                }
            }
            ;
            this.sJ = function() {
                return sN
            }
            ;
            this.eb = function(S) {
                U && (S || 0 === c4.getTimeSinceGameStarted() % gI.su[gI.gJ.sv]) && (U = false,
                    g())
            }
            ;
            this.dF = function() {
                for (var S = E - 1; 0 <= S; S--)
                    if (0 === g_isPlayersAliveArray[en[S]]) {
                        var V = S
                            , ba = en[V];
                        for (E--; V < E; V++)
                            en[V] = en[V + 1],
                                g_playerLeaderboardRankArray[en[V]] = V;
                        en[E] = ba;
                        g_playerLeaderboardRankArray[en[E]] = E
                    }
                ba = E - 1;
                for (V = 0; V < ba; V++)
                    g_playerLandArray[en[V]] < g_playerLandArray[en[V + 1]] && (S = en[V],
                        en[V] = en[V + 1],
                        en[V + 1] = S,
                        g_playerLeaderboardRankArray[en[V]] = V,
                        g_playerLeaderboardRankArray[en[V + 1]] = V + 1);
                a: {
                    S = U;
                    U = true;
                    for (V = ba = g_playerLeaderboardRankArray[g_localPlayerIndex] >= x - 1 ? x - 2 : x - 1; 0 <= V; V--)
                        if (N[V] !== en[V] || T[V] !== g_playerLandArray[en[V]])
                            break a;
                    if (ba !== x - 2 || N[x] === g_playerLeaderboardRankArray[g_localPlayerIndex] && T[x] === g_playerLandArray[g_localPlayerIndex])
                        U = S
                }
                for (S = x - 1; 0 <= S; S--)
                    N[S] = en[S],
                        T[S] = g_playerLandArray[en[S]];
                N[x] = g_playerLeaderboardRankArray[g_localPlayerIndex];
                T[x] = g_playerLandArray[g_localPlayerIndex]
            }
            ;
            this.actionWheelOnClick = function(S, V) {
                if (z(S, V)) {
                    qa = c4.gf;
                    W = true;
                    la = ca = n(V);
                    if (p3) {
                        var ba = tE(-1, ca, x);
                        ba = ba === x ? -1 : ba;
                        Z !== ba && (Z = ba,
                            g(),
                            c4.c5 = true)
                    }
                    return true
                }
                return false
            }
            ;
            this.lo = function(S, V) {
                var ba = n(V);
                if (W) {
                    var ta = Y;
                    Y += la - ba;
                    Y = tE(0, Y, g_unclaimedLandIndex - x);
                    Y !== ta && (la = ba,
                        ba = tE(-1, ba, x),
                        Z = ba = ba !== x && z(S, V) ? ba : -1,
                        g(),
                        c4.c5 = true);
                    return true
                }
                ba = tE(-1, ba, x);
                ba = ba === x || !z(S, V) || p3 ? -1 : ba;
                return Z !== ba ? (Z = ba,
                    g(),
                    c4.c5 = true) : false
            }
            ;
            this.pb = function(S, V) {
                if (!W)
                    return false;
                W = false;
                var ba = n(V);
                p3 && -1 !== Z && (Z = -1,
                    g(),
                    c4.c5 = true);
                if (350 > c4.gf - qa && ca === ba && (ba = tE(-1, ba, x),
                    ba = ba !== x && z(S, V) ? ba : -1,
                -1 !== ba)) {
                    var ta = en[ba + Y];
                    ba === x - 1 && g_playerLeaderboardRankArray[g_localPlayerIndex] >= Y + x - 1 && (ta = g_localPlayerIndex);
                    0 !== g_isPlayersAliveArray[ta] && eV.gj(ta, 800, false, 0)
                }
                return true
            }
            ;
            this.ph = function(S, V, ba) {
                return W ? false : z(S, V) ? (S = n(V),
                    S = tE(-1, S, x),
                    S = S === x || p3 ? -1 : S,
                    0 < ba ? Y < g_unclaimedLandIndex - x && (Y++,
                        Z = S,
                        g(),
                        c4.c5 = true) : 0 < Y && (Y--,
                        Z = S,
                        g(),
                        c4.c5 = true),
                    true) : false
            }
            ;
            this.cG = function() {
                cH.drawImage(A, m7, m7)
            }
        }
        function kA() {
            function g() {
                z.clearRect(0, 0, eB.c1, eB.cw);
                z.fillStyle = i1;
                z.fillRect(0, 0, eB.c1, eB.cw);
                z.fillStyle = oR;
                z.fillRect(0, eB.cw - B - 1, Math.floor((0 < P ? P : Math.sqrt(K[4] / K[3])) * eB.c1), B);
                z.fillStyle = cK;
                z.fillRect(0, 0, eB.c1, 1);
                z.fillRect(0, 0, 1, eB.cw);
                z.fillRect(eB.c1 - 1, 0, 1, eB.cw);
                z.fillRect(0, eB.cw - 1, eB.c1, 1);
                z.fillRect(0, eB.cw - B - 1, eB.c1, 1);
                for (var N = 0, T = 0; T < D.length; T++)
                    if (J[T]) {
                        z.textAlign = mj;
                        var U = Math.floor((C - B + 2 * G) * (T - N + 1) / (D.length + 1) - .7 * G);
                        z.fillText(D[T], E, U);
                        z.textAlign = op;
                        5 === T && 0 !== g_isPlayersAliveArray[g_localPlayerIndex] && g_playerBalanceArray[g_localPlayerIndex] >= ay.dJ(g_localPlayerIndex) ? (z.fillStyle = om,
                            z.fillText(k(T), eB.c1 - E, U),
                            z.fillStyle = cK) : z.fillText(k(T), eB.c1 - E, U)
                    } else
                        N++
            }
            function k(N) {
                return 3 > N ? K[N].toString() : 3 === N ? eB.nI(K[N] / 100, 2) : 4 === N ? eB.nI(K[N] / 100, 2) : 5 === N ? eB.nI(K[N] / 100, 2) : 7 > N ? eP.gL(K[N]) : eB.sM(K[7])
            }
            function t(N) {
                N = as(1E4 * N, jC);
                8 === dv && (0 === g_isPlayersAliveArray[0] ? fi.fj(1) : 0 === g_isPlayersAliveArray[1] && fi.fj(0));
                N >= K[3] && (fi.fj(-1),
                    K[4] = -1);
                K[4] !== N && (H++,
                    K[4] = N)
            }
            function l() {
                for (var N = sp_Bots - 1; 0 <= N; N--)
                    if (0 < b4[dZ[N]].length)
                        return false;
                return true
            }
            function y() {
                g_playerLandArray[g_localPlayerIndex] !== K[6] && (K[6] = g_playerLandArray[g_localPlayerIndex],
                    H++)
            }
            var n, z, x, A, B, C, E, G, F, M, H, D, K, J, L, P, I, O, R;
            this.bp = function() {
                P = I = 0;
                D = Array(8);
                D[0] = "Humans";
                D[1] = g_isSingleplayer ? "Players" : "Bots";
                D[2] = "Spectators";
                D[3] = "Threshold";
                D[4] = "Occupation";
                D[5] = "Interest";
                D[6] = "Income";
                D[7] = "Time";
                R = jC - as(jC, 100);
                K = Array(D.length);
                K[0] = g_isSingleplayer ? 0 : g_playerCount;
                K[1] = g_isSingleplayer ? sp_Bots : dq;
                K[2] = g_spectatorCount;
                K[3] = 1E4;
                K[4] = as(1E4 * g_playerLandArray[0], jC);
                K[5] = 700;
                K[6] = 0;
                y();
                K[7] = 0;
                L = k(6);
                J = Array(D.length);
                for (var N = D.length - 1; 0 <= N; N--)
                    J[N] = true;
                O = 0;
                g_isSingleplayer ? (J[0] = false,
                    J[2] = false,
                    J[3] = false,
                    O = 3) : (J[3] = false,
                    O = 1);
                H = 0;
                this.lx()
            }
            ;
            this.lx = function() {
                this.c1 = Math.floor((q ? .1646 : .126) * bq);
                this.cw = Math.floor(1.18 * this.c1);
                B = Math.floor(.04 * this.c1);
                E = Math.floor(.05 * this.c1);
                G = .04 * this.c1;
                C = this.cw;
                this.cw -= Math.floor(O * (this.cw - 2 * B) / D.length);
                M = Math.floor(.55 * (C - B) / D.length);
                F = bt + M + bu;
                n = document.createElement("canvas");
                n.width = this.c1;
                n.height = this.cw;
                z = n.getContext("2d", {
                    alpha: true
                });
                z.font = F;
                z.textBaseline = cI;
                z.lineWidth = 1;
                this.j5();
                this.qy();
                eO.qy();
                g()
            }
            ;
            this.qy = function() {
                x = gE - this.c1 - m7
            }
            ;
            this.tR = function() {
                A = m7
            }
            ;
            this.j5 = function() {
                A = m7 + (eO.qJ() && 0 !== g_isPlayersAliveArray[g_localPlayerIndex] && !fc ? eO.cw + m7 : 0)
            }
            ;
            this.eb = function(N) {
                0 < H && (N || 12 > tS && 100 <= H || 12 <= tS) && (H = 0,
                    g())
            }
            ;
            this.lX = function() {
                return K[7]
            }
            ;
            this.sM = function(N) {
                var T = Math.floor(N / 1E3 / 60);
                N = Math.floor((N - 6E4 * T) / 1E3);
                return 10 > N ? T + ":0" + N : T + ":" + N
            }
            ;
            this.nI = function(N, T) {
                return N.toFixed(T) + "%"
            }
            ;
            this.dF = function() {
                J[0] && j0 - g_spectatorCount !== K[0] && (K[0] = j0 - g_spectatorCount,
                    H++);
                sp_Bots - K[0] !== K[1] && (K[1] = sp_Bots - K[0],
                    H++);
                this.eC();
                if (dA) {
                    var N = eT.qs();
                    N >= R && l() ? (fi.fj(-1),
                        t(eT.qs())) : t(N)
                } else
                    N = g_playerLandArray[en[0]],
                    N >= R && l() && fi.fj(-1),
                        t(N);
                N = ay.te(g_localPlayerIndex);
                N !== K[5] && (K[5] = N,
                    H++);
                y();
                K[7] += c4.tf();
                N = k(7);
                L !== N && (L = N,
                    H += 100)
            }
            ;
            this.eC = function() {
                J[2] && g_spectatorCount !== K[2] && (K[2] = g_spectatorCount,
                    H++)
            }
            ;
            this.tg = function(N) {
                if (N === jI)
                    return P = 0,
                        g(),
                        false;
                if (-1 === N && 0 === I)
                    return false;
                var T = P
                    , U = performance.now();
                if (0 <= N) {
                    var Z = U - 392 * N;
                    I = 0 === N || Z < I ? Z : I
                }
                P = (U - I) / (392 * jI);
                P = 1 < P ? 1 : P;
                g();
                return P !== T
            }
            ;
            this.cG = function() {
                cH.drawImage(n, x, A)
            }
        }
        function kB() {
            var g, k, t, l, y, n, z, x, A, B;
            this.tl = -1;
            this.bp = function() {
                g = false;
                l = 0;
                y = .61;
                n = .07;
                z = .09;
                B = x = 0;
                this.tl = -1
            }
            ;
            this.lx = function() {
                if (g) {
                    t = q ? Math.floor(.69 * bq) : Math.floor(.5 * bq);
                    t = qr(t, me(r - 2 * m7, 10));
                    t = qr(t, Math.floor(3.57 * me(s - 2 * m7, 3)));
                    l = Math.floor(.28 * t);
                    A = document.createElement("canvas");
                    A.width = t;
                    A.height = l;
                    var C = A.getContext("2d", {
                        alpha: true
                    })
                        , E = Math.floor(1 + l / 40);
                    C.clearRect(0, 0, t, l);
                    C.fillStyle = i1;
                    C.fillRect(E, E, t - 2 * E, l - 2 * E);
                    C.lineJoin = "bevel";
                    C.lineWidth = 2 * E;
                    C.strokeStyle = cK;
                    C.strokeRect(E, E, t - 2 * E, l - 2 * E);
                    C.imageSmoothingEnabled = true;
                    var G = bw.bz(k)
                        , F = G.height
                        , M = y * l / F;
                    C.setTransform(M, 0, 0, M, Math.floor((t - M * G.width) / 2), Math.floor((l - M * F) / 2));
                    C.drawImage(G, 0, 0);
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
            this.show = function(C, E) {
                g || (k = C ? 1 : 2,
                    g = true,
                    this.lx(),
                    hx.lp(),
                    eR.qn(),
                    B = c4.gf,
                -1 === this.tl && (this.tl = c4.getTimeSinceGameStarted()),
                    x = E ? 1 : 0)
            }
            ;
            this.dF = function() {
                !g || 1 <= x || (x += 5E-4 * (c4.gf - B),
                    x = 1 < x ? 1 : x,
                    B = c4.gf,
                    c4.c5 = true)
            }
            ;
            this.actionWheelOnClick = function(C, E) {
                if (!g || 0 >= x)
                    return false;
                C -= Math.floor((gE - t) / 2);
                E -= cB - l - 2 * m7;
                if (0 > C || 0 > E || C > t || E > l)
                    return false;
                C > t - l / 3 && E < l / 3 && (g = false,
                    c4.c5 = true);
                return true
            }
            ;
            this.cG = function() {
                !g || 0 >= x || (cH.globalAlpha = x,
                    cH.drawImage(A, Math.floor((gE - t) / 2), cB - l - 2 * m7),
                    cH.globalAlpha = 1)
            }
        }
        function kf() {
            function g(n, z, x, A, B, C, E) {
                0 !== g_isPlayersAliveArray[n] && 0 !== g_playerLandArray[n] && (x = gE * ((d0[n] + cz[n] + 1) / 2 - x) / (B - x) - .5 * z,
                    A = cB * ((d3[n] + d2[n] + 1) / 2 - A) / (C - A) - .5 * z,
                x > gE || A > cB || x < -z || A < -z || (cH.setTransform(g7 * E, 0, 0, g7 * E, x, A),
                    cH.drawImage(t[dA ? dW.dX[n] : n < g_playerCount ? 1 : 0], 0, 0)))
            }
            var k, t, l, y;
            this.bp = function() {
                var n;
                t = [];
                k = false;
                if (fc)
                    if (y = 0,
                        l = 63,
                        k = true,
                        dA)
                        for (n = 0; n <= jG; n++)
                            t.push(this.ts(dW.tt[dW.iq[n]], l));
                    else
                        t.push(this.ts(dW.tt[0], l)),
                            t.push(this.ts(dW.tt[4], l))
            }
            ;
            this.dF = function() {
                k && 349 === ++y && (t = [],
                    k = false)
            }
            ;
            this.ts = function(n, z) {
                var x = document.createElement("canvas");
                x.width = z;
                x.height = z;
                var A = x.getContext("2d", {
                    alpha: true
                });
                A.clearRect(0, 0, z, z);
                var B = A.getImageData(0, 0, z, z), C = B.data, E, G, F = Math.floor(z / 2), M = 1 + F * F;
                for (E = z - 1; 0 <= E; E--)
                    for (G = z - 1; 0 <= G; G--) {
                        var H = (E - F) * (E - F) + (G - F) * (G - F);
                        var D = 4 * (G * z + E);
                        C[D] = n[0];
                        C[D + 1] = n[1];
                        C[D + 2] = n[2];
                        H = Math.floor((M - H) * n[3] / M);
                        C[D + 3] = 0 < H ? H : 0
                    }
                A.putImageData(B, 0, 0);
                return x
            }
            ;
            this.cG = function() {
                if (k) {
                    var n;
                    cH.imageSmoothingEnabled = true;
                    cH.globalAlpha = 1 - (160 < y ? (y - 160) / 190 : 0);
                    var z = gC / g7
                        , x = gD / g7
                        , A = (gE + gC) / g7
                        , B = (cB + gD) / g7;
                    var C = .25;
                    var E = l * g7 * C;
                    for (n = g_unclaimedLandIndex - 1; n >= g_playerCount; n--)
                        g(n, E, z, x, A, B, C);
                    C = .5;
                    E = l * g7 * C;
                    for (n = g_playerCount - 1; 0 <= n; n--)
                        g(n, E, z, x, A, B, C);
                    cH.globalAlpha = 1;
                    cH.imageSmoothingEnabled = 3 > g7;
                    cH.setTransform(g7, 0, 0, g7, 0, 0)
                }
            }
        }
        function triggerAttack(attackerIndex, attackTargetIndex, percentageTimes10) {
            if (!(0 === g_isPlayersAliveArray[attackerIndex] || 0 > percentageTimes10 || 1E3 < percentageTimes10 || 2 === fU[attackerIndex])) {
                var spentTroopsOnAttack = as(percentageTimes10 * g_playerBalanceArray[attackerIndex], 1E3);
                10 === dv && attackTargetIndex < g_playerCount && 2 !== fU[attackTargetIndex] && (spentTroopsOnAttack = eF.u0(attackerIndex, spentTroopsOnAttack));
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
            10 === dv && senderIndex < g_playerCount && (troopsInBoat = eF.u0(senderIndex, troopsInBoat));
            if (troopsInBoat <= at || !ae.dD(senderIndex))
                return false;
            k = eK.cR(senderIndex, k, t);
            if (0 === k)
                return false;
            t = as(3 * g_playerBalanceArray[senderIndex], 128);
            troopsInBoat >= as(g_playerBalanceArray[senderIndex], 2) && (troopsInBoat -= t);
            senderIndex === g_localPlayerIndex && (b0.b1[12] += t);
            ae.u1(senderIndex, troopsInBoat, k);
            g_playerBalanceArray[senderIndex] -= troopsInBoat + t;
            return true
        }
        function triggerSupport(supporterIndex, supportTargetIndex, supportAmount) {
            if (!(!dA || 0 === g_isPlayersAliveArray[supporterIndex] || 0 === g_isPlayersAliveArray[supportTargetIndex] || 0 > supportAmount || supportAmount > g_playerBalanceArray[supporterIndex] || supporterIndex === supportTargetIndex || ch(supporterIndex, supportTargetIndex) || supporterIndex < g_playerCount && supportTargetIndex < g_playerCount && 7 > dv && 1071 > c4.getTimeSinceGameStarted())) {
                var l = as(g_playerBalanceArray[supporterIndex], 16);
                supportAmount -= supportAmount >= as(g_playerBalanceArray[supporterIndex], 2) ? l : 0;
                var y = g_playerLandArray[supportTargetIndex] * jA - g_playerBalanceArray[supportTargetIndex];
                0 >= y || (supportAmount = supportAmount > y ? y : supportAmount,
                supporterIndex === g_localPlayerIndex && (e9.nA(supportAmount, supportTargetIndex),
                    b0.b1[12] += l,
                    b0.b1[16] += supportAmount),
                supportTargetIndex === g_localPlayerIndex && (e9.nC(supportAmount, supporterIndex),
                    b0.b1[10] += supportAmount),
                    g_playerBalanceArray[supporterIndex] -= supportAmount + l,
                    g_playerBalanceArray[supportTargetIndex] += supportAmount)
            }
        }
        function u2() {
            this.j8 = this.hC = this.u3 = false;
            this.u4 = [0, 0, 0, 0];
            this.u5 = function() {
                this.j8 = this.j8 || this.hC;
                if (this.hC || this.u3 && this.j8) {
                    var g = h1.u6[0]
                        , k = h1.u6[1]
                        , t = h1.u6[2]
                        , l = h1.u6[3];
                    g = g < this.u4[0] ? this.u4[0] : g;
                    k = k < this.u4[1] ? this.u4[1] : k;
                    t = t > this.u4[2] ? this.u4[2] : t;
                    l = l > this.u4[3] ? this.u4[3] : l;
                    this.u3 = this.hC = false;
                    g === this.u4[0] && k === this.u4[1] && t === this.u4[2] && l === this.u4[3] ? this.j9() : t >= g && l >= k && jZ.putImageData(ja, 0, 0, g, k, t - g + 1, l - k + 1)
                }
            }
            ;
            this.j9 = function() {
                this.j8 && this.u4[2] >= this.u4[0] && this.u4[3] >= this.u4[1] && jZ.putImageData(ja, 0, 0, this.u4[0], this.u4[1], this.u4[2] - this.u4[0] + 1, this.u4[3] - this.u4[1] + 1);
                this.j8 = false
            }
            ;
            this.j2 = function() {
                this.u4[2] >= this.u4[0] && this.u4[3] >= this.u4[1] && jZ.putImageData(ja, 0, 0, this.u4[0], this.u4[1], this.u4[2] - this.u4[0] + 1, this.u4[3] - this.u4[1] + 1);
                this.j8 = false
            }
            ;
            this.bp = function() {
                var g;
                this.j8 = this.hC = this.u3 = false;
                this.u4[0] = aZ;
                this.u4[1] = aa;
                this.u4[2] = this.u4[3] = 0;
                var k = 1;
                a: for (; k < aZ - 1; k++)
                    for (g = aa - 2; 1 < g; g--)
                        if (1 === g_pixelOwnerType[b5.f2(k, g) + 2]) {
                            this.u4[0] = k;
                            break a
                        }
                g = 1;
                a: for (; g < aa - 1; g++)
                    for (k = aZ - 2; 1 < k; k--)
                        if (1 === g_pixelOwnerType[b5.f2(k, g) + 2]) {
                            this.u4[1] = g;
                            break a
                        }
                k = aZ - 2;
                a: for (; 0 < k; k--)
                    for (g = aa - 2; 1 < g; g--)
                        if (1 === g_pixelOwnerType[b5.f2(k, g) + 2]) {
                            this.u4[2] = k;
                            break a
                        }
                g = aa - 2;
                a: for (; 0 < g; g--)
                    for (k = aZ - 2; 1 < k; k--)
                        if (1 === g_pixelOwnerType[b5.f2(k, g) + 2]) {
                            this.u4[3] = g;
                            break a
                        }
            }
        }
        function u8() {
            this.lE = false;
            this.mE = null;
            this.u9 = 0;
            this.cw = this.c1 = null;
            this.uA = .013;
            this.uB = .022;
            this.uC = .025;
            this.uE = 3;
            this.uF = 1.2;
            this.uG = .2;
            this.uH = .235;
            this.uI = .9;
            this.uJ = .08;
            var topListTitles = ["Best Players", "Best Clans", "LEGENDS NEVER DIE", "THE NEVER ENDING WAR"], k, t = [-1E6, -1E6];
            this.position = [0, 0];
            this.uO = [0, 0];
            this.bp = function() {
                this.mE = [null, null];
                this.lE = false;
                this.u9 = 0;
                this.lx()
            }
            ;
            this.cE = function(l) {
                this.u9 = l;
                this.lE = true;
                this.bv();
                jh.tr();
                c4.c5 = true
            }
            ;
            this.dF = function() {
                this.lE && this.bv()
            }
            ;
            this.bv = function() {
                c4.gf - 12E4 >= t[this.u9] && (t[this.u9] = c4.gf,
                    this.uO = [0, 0],
                eD.rp(0, 1 + this.u9) && iu.uP(0, this.u9))
            }
            ;
            this.lx = function() {
                var l;
                this.c1 = this.uQ(q ? .85 : .66, .75, r, s);
                this.cw = Math.floor(this.c1 / .75);
                for (l = 1; 0 <= l; l--)
                    this.mE[l] && (this.mE[l][4] = bt + Math.floor(this.mE[l][5] * this.cw / 10) + bu);
                k = bt + Math.floor(.1 * this.cw) + bu
            }
            ;
            this.uQ = function(l, y, n, z) {
                return n < y * z ? Math.floor(l * n) : Math.floor(y * l * z)
            }
            ;
            this.uR = function(l, y, n, z, x, A, B) {
                this.position[l] = B;
                var C = y.length
                    , E = bt + Math.floor(x * this.cw / 10) + bu;
                this.uW(y, E, A * this.c1);
                z = [[], C, -1, z, E, x, 10 * B];
                for (x = 0; x < C; x++)
                    A = {
                        name: y[x].name,
                        value: y[x].iF / n,
                        colorIndex: y[x].colorIndex
                    },
                        z[0].push(A);
                this.mE[l] = z;
                this.uX(l);
                y = this.mE[l][0][0].name;
                1 === l && (y = "[" + y + "]");
                0 === B && uY.br(l, y);
                c4.c5 = true
            }
            ;
            this.uX = function(l) {
                this.mE[l][0].sort(function(y, n) {
                    return n.value - y.value
                })
            }
            ;
            this.uZ = function(l, y, n, z) {
                if (this.mE && this.mE[l]) {
                    var x, A = false, B = 383 / 384;
                    if (0 === l) {
                        for (x = 0; x < this.mE[l][0].length; x++)
                            if (y === this.mE[l][0][x].name && n > .99 * this.mE[l][0][x].value && n < 1.01 * this.mE[l][0][x].value) {
                                this.mE[l][0][x].value = z;
                                A = true;
                                break
                            }
                        A || this.mE[l][0].push({
                            name: y,
                            value: z
                        })
                    } else {
                        for (x = 0; x < this.mE[l][0].length; x++)
                            if (y === this.mE[l][0][x].name) {
                                this.mE[l][0][x].value += 32 < this.mE[l][0][x].value ? (64 - this.mE[l][0][x].value) / 256 : .25;
                                this.mE[l][0][x].value *= 1 / B;
                                A = true;
                                break
                            }
                        for (x = 0; x < this.mE[l][0].length; x++)
                            this.mE[l][0][x].value *= B;
                        A || this.mE[l][0].push({
                            name: y,
                            value: .25
                        })
                    }
                    this.uX(l)
                }
            }
            ;
            this.uW = function(l, y, n) {
                for (var z = l.length - 1; 0 <= z; z--)
                    for (; 3 < l[z].name.length && c2.measureText(l[z].name, y) > n; )
                        l[z].name = l[z].name.substring(0, l[z].name.length - 4) + "..."
            }
            ;
            this.actionWheelOnClick = function(l, y) {
                if (!this.lE)
                    return false;
                l -= (gE - this.c1) / 2;
                y -= (cB - this.cw) / 2;
                if (0 > l || l > this.c1 || 0 > y || y > this.cw)
                    return this.lE = false,
                    0 === aJ.pe() && jn.cE(0, true),
                        c4.c5 = true;
                if (y < .3 * this.cw)
                    var n = 1;
                else
                    y < .85 * this.cw ? (n = (0 === this.u9 ? 14.1 : 3) * (y - .3 * this.cw) / (.55 * this.cw),
                        n = Math.floor(1 + n * n)) : n = 0 === this.u9 ? 200 : 10;
                this.uO[this.u9] = l < this.c1 / 2 ? -n : n;
                if (t[this.u9] + 50 > c4.gf)
                    return true;
                t[this.u9] = c4.gf;
                eD.rp(0, 1 + this.u9) && iu.uP(0, this.u9);
                return true
            }
            ;
            this.cG = function() {
                if (this.lE) {
                    var l = this.uA * this.c1
                        , y = this.uE * l
                        , n = this.uB * this.c1
                        , z = this.uF * n
                        , x = this.uC * this.c1
                        , A = Math.floor(.25 * this.cw);
                    cH.setTransform(1, 0, 0, 1, (gE - this.c1) / 2, (cB - this.cw) / 2);
                    cH.fillStyle = 0 === this.u9 ? og : ob;
                    cH.fillRect(0, 0, this.c1, A);
                    cH.fillStyle = oL;
                    cH.fillRect(0, A, this.c1, this.cw - A);
                    cH.fillStyle = cK;
                    cH.font = k;
                    cH.textBaseline = cI;
                    cH.textAlign = cJ;
                    cH.fillText(topListTitles[this.u9], Math.floor(this.c1 / 2), Math.floor(.135 * this.cw));
                    cH.font = bt + Math.floor(.025 * this.cw) + bu;
                    cH.fillText(topListTitles[this.u9 + 2], Math.floor(this.c1 / 2), Math.floor(.2125 * this.cw));
                    cH.beginPath();
                    cH.moveTo(this.c1 / 4, 0);
                    cH.lineTo(this.c1 / 2 - l, 0);
                    cH.lineTo(this.c1 / 2, -y);
                    cH.lineTo(this.c1 / 2 + l, 0);
                    cH.lineTo(this.c1 - n, 0);
                    cH.lineTo(this.c1 + z, -z);
                    cH.lineTo(this.c1, n);
                    cH.lineTo(this.c1, this.cw / 2 - l);
                    cH.lineTo(this.c1 + y, this.cw / 2);
                    cH.lineTo(this.c1, this.cw / 2 + l);
                    cH.lineTo(this.c1, this.cw - n);
                    cH.lineTo(this.c1 + z, this.cw + z);
                    cH.lineTo(this.c1 - n, this.cw);
                    cH.lineTo(this.c1 / 2 + l, this.cw);
                    cH.lineTo(this.c1 / 2, this.cw + y);
                    cH.lineTo(this.c1 / 2 - l, this.cw);
                    cH.lineTo(n, this.cw);
                    cH.lineTo(-z, this.cw + z);
                    cH.lineTo(0, this.cw - n);
                    cH.lineTo(0, this.cw / 2 + l);
                    cH.lineTo(-y, this.cw / 2);
                    cH.lineTo(0, this.cw / 2 - l);
                    cH.lineTo(0, n);
                    cH.lineTo(-z, -z);
                    cH.lineTo(n, 0);
                    cH.lineTo(this.c1 / 4, 0);
                    cH.lineTo(this.c1 / 4, x);
                    cH.lineTo(x, x);
                    cH.lineTo(x, this.cw - x);
                    cH.lineTo(this.c1 - x, this.cw - x);
                    cH.lineTo(this.c1 - x, x);
                    cH.lineTo(this.c1 / 4, x);
                    cH.fill();
                    this.mE[this.u9] && this.uf(A);
                    this.ug(A);
                    cH.setTransform(1, 0, 0, 1, 0, 0)
                }
            }
            ;
            this.ug = function(l) {
                var y = me(2, Math.floor(.06 * this.c1));
                y -= y % 2;
                var n = me(2, Math.floor(.01 * this.c1));
                n -= n % 2;
                l = Math.floor(.82 * l);
                cH.fillRect(y, l, y, n);
                cH.fillRect(this.c1 - y - y, l, y, n);
                cH.fillRect(Math.floor(this.c1 - y - y + (y - n) / 2), Math.floor(l - (y - n) / 2), n, y)
            }
            ;
            this.uf = function(l) {
                cH.font = this.mE[this.u9][4];
                for (var y, n = this.mE[this.u9][1] - 1; 0 <= n; n--)
                    cH.textAlign = op,
                        y = Math.floor(this.uJ * this.cw + l + n * ((1 - 2 * this.uJ) * this.cw - l) / 9),
                        cH.fillText(this.mE[this.u9][0][n].value.toFixed(this.mE[this.u9][3]), Math.floor(this.uI * this.c1), y),
                        cH.fillText(n + 1 + this.mE[this.u9][6] + ".", Math.floor(this.uG * this.c1), y),
                        cH.textAlign = mj,
                        cH.fillText(this.mE[this.u9][0][n].name, Math.floor(this.uH * this.c1), y)
            }
        }
        function uh() {
            var g, k, t, l, y, n, z, x, A, B, C, E, G;
            this.lE = false;
            this.bp = function(F, M) {
                if (13 <= d)
                    M ? E = F : E === F && e.saveString(200, F);
                else if (M) {
                    (cC.mE[1].ik.lE || cC.mE[2].ik.lE) && cC.ur();
                    jh.tr();
                    E = F;
                    A = Math.floor((q ? r > s ? .6 : .45 : .4) * pO);
                    t = A / bw.bz(17).width;
                    y = Math.floor(t * bw.bz(17).height);
                    n = Math.floor(.4 * y);
                    z = Math.floor(.6 * y);
                    x = Math.floor(2.5 * z);
                    l = y + n + 3 * z;
                    var H = bt + Math.floor(n / pS) + bu;
                    B = Math.floor(pS * c2.measureText(E, H));
                    C = (B > A ? B : A) + 2 * x;
                    g = Math.floor((gE - C) / 2);
                    k = Math.floor((cB - l) / 2);
                    G = document.createElement("a");
                    G.appendChild(document.createTextNode(E));
                    G.title = E;
                    G.target = "blank";
                    G.href = E;
                    G.style.font = H;
                    G.style.textAlign = "center";
                    G.style.color = cK;
                    G.style.position = "absolute";
                    G.style.padding = "0px";
                    G.style.margin = "0px";
                    G.style.top = Math.floor((k + 2 * z + y) / pS) + "px";
                    G.style.left = Math.floor((g + (C - B) / 2) / pS) + "px";
                    document.body.appendChild(G);
                    this.lE = true;
                    c4.c5 = true
                }
            }
            ;
            this.lH = function() {
                if (!this.lE)
                    return false;
                document.body.removeChild(G);
                this.lE = false;
                return true
            }
            ;
            this.actionWheelOnClick = function(F, M) {
                if (!this.lE)
                    return false;
                if (F < g || M < k || F > g + C || M > k + l)
                    c4.c5 = true,
                        this.lE = false,
                        document.body.removeChild(G),
                    0 === aJ.pe() && jn.cE(0, true);
                return true
            }
            ;
            this.cG = function() {
                this.lE && (cH.imageSmoothingEnabled = true,
                    cH.setTransform(1, 0, 0, 1, g, k),
                    cH.fillStyle = i1,
                    cH.fillRect(0, 0, C, l),
                    cH.lineWidth = p2,
                    cH.strokeStyle = cK,
                    cH.strokeRect(0, 0, C, l),
                    cH.setTransform(t, 0, 0, t, g + (C - A) / 2, k + z),
                    cH.drawImage(bw.bz(17), 0, 0),
                    cH.setTransform(1, 0, 0, 1, 0, 0))
            }
        }
        function us() {
            var g = 0
                , k = [0, 0, 0, 0, 0]
                , t = [0, 0, 0, 0, 0]
                , l = [1, 1, 1, 1, 1]
                , y = [true, true, true, true, true];
            this.ut = [true, true, true, true, true];
            var n = null, z;
            this.uu = function(x, A) {
                n = x;
                y = A;
                z = [ot, ou, ov, ow, ox];
                this.bp()
            }
            ;
            this.bp = function() {
                if (bw.bx()) {
                    var x = Math.floor((q ? .261 : .195) * bq);
                    var A = Math.floor(.9 * x)
                        , B = Math.floor(.17 * A);
                    g = q ? 2 * m7 : m7;
                    l[0] = x / n[0].width;
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
                    if (!y[0])
                        for (x = 0; 5 > x; x++)
                            t[x] -= l[0] * n[0].height + g;
                    if (!y[1])
                        for (x = 2; 5 > x; x++)
                            t[x] -= l[1] * n[1].height + g
                }
            }
            ;
            this.lE = function() {
                return !(7 === aJ.pe() && q)
            }
            ;
            this.actionWheelOnClick = function(x, A, B) {
                if (!n || !this.lE())
                    return false;
                var C;
                for (C = y.length - 1; 0 <= C; C--)
                    if (y[C] && this.ut[C] && x > k[C] && A > t[C] && x < k[C] + l[C] * n[C].width && A < t[C] + l[C] * n[C].height)
                        return na.bp(z[C], B),
                            true;
                return false
            }
            ;
            this.cG = function() {
                if (n && this.lE()) {
                    cH.imageSmoothingEnabled = true;
                    var x;
                    for (x = 0; 5 > x; x++)
                        y[x] && this.ut[x] && (cH.setTransform(l[x], 0, 0, l[x], k[x], t[x]),
                            cH.drawImage(n[x], 0, 0));
                    cH.setTransform(1, 0, 0, 1, 0, 0)
                }
            }
        }
        function kC() {
            function g(y) {
                var n = jk.uy[y]
                    , z = n.fK
                    , x = n.fL
                    , A = n.c1
                    , B = n.cw;
                cH.fillStyle = n.v1;
                cH.fillRect(z, x, A, B);
                y === k && (cH.fillStyle = l,
                    cH.fillRect(z, x, A, B));
                cH.lineWidth = 3;
                cH.strokeStyle = t;
                cH.strokeRect(z, x, A, B);
                y = n.fK;
                z = n.fL;
                x = n.c1;
                A = n.cw;
                cH.textAlign = cJ;
                cH.textBaseline = cI;
                cH.font = n.font;
                cH.fillStyle = t;
                cH.fillText(n.ne, Math.floor(y + x / 2), Math.floor(z + A / 2 + .1 * n.by))
            }
            var k, t, l;
            this.f7 = this.fL = this.cw = this.c1 = 0;
            this.bp = function() {
                k = -1;
                t = cK;
                l = "rgba(255,255,255,0.16)";
                this.uy = Array(7);
                this.cw = Math.floor((q ? .123 : .093) * bq);
                this.c1 = Math.floor((q ? 3.96 : 4.2) * this.cw);
                this.f7 = Math.floor(.025 * this.c1);
                var y = Math.floor(.26 * this.cw)
                    , n = bt + y + bu;
                this.uy[0] = {
                    fK: 0,
                    fL: 0,
                    c1: Math.floor(.6 * this.c1 - this.f7 / 2),
                    cw: this.cw,
                    ne: "Multiplayer",
                    font: n,
                    v1: "rgba(22,88,22,0.8)",
                    by: y
                };
                y = Math.floor(.18 * this.cw);
                n = bt + y + bu;
                this.uy[1] = {
                    fK: 0,
                    fL: 0,
                    c1: this.c1 - this.uy[0].c1 - this.f7,
                    cw: this.cw,
                    ne: "Singleplayer",
                    font: n,
                    v1: "rgba(22,88,88,0.8)",
                    by: y
                };
                this.uy[2] = {
                    fK: 0,
                    fL: 0,
                    c1: this.c1,
                    cw: Math.floor(.3 * this.cw),
                    ne: "",
                    font: this.uy[1].font,
                    v1: "rgba(100,0,0,0.8)",
                    by: this.uy[1].by
                };
                this.uy[3] = {
                    fK: 0,
                    fL: 0,
                    c1: this.c1,
                    cw: this.cw,
                    ne: "Back",
                    font: this.uy[0].font,
                    v1: "rgba(0,0,0,0.8)",
                    by: this.uy[0].by
                };
                this.uy[4] = {
                    fK: 0,
                    fL: 0,
                    c1: this.c1,
                    cw: Math.floor(.3 * this.cw),
                    ne: "The game was updated!",
                    font: this.uy[1].font,
                    v1: "rgba(100,0,0,0.8)",
                    by: this.uy[1].by
                };
                this.uy[5] = {
                    fK: 0,
                    fL: 0,
                    c1: this.uy[0].c1,
                    cw: Math.floor(.8 * this.cw),
                    ne: "Reload",
                    font: this.uy[0].font,
                    v1: "rgba(0,100,0,0.8)",
                    by: this.uy[0].by
                };
                this.uy[6] = {
                    fK: 0,
                    fL: 0,
                    c1: this.uy[1].c1,
                    cw: this.uy[5].cw,
                    ne: "Back",
                    font: this.uy[0].font,
                    v1: "rgba(0,0,0,0.8)",
                    by: this.uy[0].by
                };
                this.rx()
            }
            ;
            this.rx = function() {
                this.fL = Math.floor(.54 * cB);
                this.uy[0].fK = Math.floor(.5 * gE - .5 * this.c1);
                this.uy[1].fK = this.uy[0].fK + this.uy[0].c1 + this.f7;
                this.uy[2].fK = this.uy[3].fK = this.uy[0].fK;
                this.uy[4].fK = this.uy[5].fK = this.uy[0].fK;
                this.uy[6].fK = this.uy[1].fK;
                this.uy[0].fL = Math.floor(.54 * cB);
                this.uy[1].fL = this.uy[0].fL;
                this.uy[2].fL = Math.floor((cB - this.uy[2].cw - this.uy[3].cw - this.f7) / 2);
                this.uy[3].fL = this.uy[2].fL + this.uy[2].cw + this.f7;
                this.uy[4].fL = Math.floor((cB - this.uy[4].cw - this.uy[5].cw - this.f7) / 2);
                this.uy[5].fL = this.uy[6].fL = this.uy[4].fL + this.uy[4].cw + this.f7
            }
            ;
            this.v2 = function() {
                g(0);
                g(1)
            }
            ;
            this.v4 = function() {
                g(2);
                g(3)
            }
            ;
            this.v5 = function() {
                g(4);
                g(5);
                g(6)
            }
            ;
            this.lo = function(y, n, z) {
                var x = -1;
                0 === aJ.pe() ? x = this.pV(y, n, 0, 2) : 3 === aJ.pe() ? x = this.pV(y, n, 3, 1) : 5 === aJ.pe() && (x = this.pV(y, n, 5, 2));
                k !== x && (k = x,
                z && (c4.c5 = true));
                return -1 !== x ? (jj.pa(),
                    true) : false
            }
            ;
            this.pV = function(y, n, z, x) {
                for (var A = z; A < z + x; A++)
                    if (y >= this.uy[A].fK && n >= this.uy[A].fL && y <= this.uy[A].fK + this.uy[A].c1 && n <= this.uy[A].fL + this.uy[A].cw)
                        return A;
                return -1
            }
        }
        function v8() {
            function g(k) {
                return 0 > k ? 0 : 255 < k ? 255 : Math.floor(k)
            }
            this.cw = this.c1 = 0;
            this.lE = false;
            this.vC = this.vB = this.vA = this.ny = this.f7 = this.v9 = 0;
            this.colors = null;
            this.bp = function() {
                r < 2 * s ? this.c1 = Math.floor((q ? .94 : .4) * r) : (this.cw = Math.floor((q ? .88 : .4) * s),
                    this.c1 = Math.floor(2 * this.cw));
                this.cw = this.c1 / 2;
                this.f7 = this.cw / 16;
                this.lE = true;
                this.v9 = 0;
                this.vA = (this.cw - 3 * this.f7) / 2;
                this.vB = this.c1 - 3 * this.f7 - this.vA;
                this.vC = (this.cw - 4 * this.f7) / 3
            }
            ;
            this.vD = function() {
                this.colors = [[0, 0, 0], [0, 0, 0]];
                var k = v().split("");
                if (6 > k.length)
                    for (k = 2; 0 <= k; k--)
                        this.colors[0][k] = g(256 * Math.random());
                else
                    for (var t = 2; 0 <= t; t--)
                        this.colors[0][t] = g(4 * (10 * parseInt(k[2 * t]) + parseInt(k[2 * t + 1])));
                this.vF()
            }
            ;
            this.vG = function() {
                return [as(this.colors[0][0], 4), as(this.colors[0][1], 4), as(this.colors[0][2], 4)]
            }
            ;
            this.actionWheelOnClick = function(k, t) {
                this.v9 = 0;
                var l = (cB - this.cw) / 2;
                k -= (gE - this.c1) / 2;
                t -= l;
                if (0 > k || 0 > t || k >= this.c1 - 1 || t >= this.cw - 1)
                    return this.lE = false,
                    0 === aJ.pe() && jn.cE(0, true),
                        c4.c5 = true,
                        false;
                if (k < this.f7 || t < this.f7 || k >= this.c1 - this.f7 || t >= this.cw - this.f7)
                    return true;
                if (k < this.f7 + this.vA)
                    return t < this.f7 + this.vA && 0 !== this.ny && (this.ny = 0,
                        c4.c5 = true),
                        true;
                if (k < 2 * this.f7 + this.vA)
                    return true;
                k -= 2 * this.f7 + this.vA;
                if (t < this.f7 + this.vC)
                    return this.v9 = 1,
                        this.colors[this.ny][0] = g(256 * k / this.vB),
                        c4.c5 = true;
                if (t < 2 * this.f7 + this.vC)
                    return true;
                if (t < 2 * this.f7 + 2 * this.vC)
                    return this.v9 = 2,
                        this.colors[this.ny][1] = g(256 * k / this.vB),
                        c4.c5 = true;
                t >= 3 * this.f7 + 2 * this.vC && (this.v9 = 3,
                    this.colors[this.ny][2] = g(256 * k / this.vB),
                    c4.c5 = true);
                return true
            }
            ;
            this.vF = function() {
                for (var k = 2; 0 <= k; k--)
                    this.colors[0][k] = g(this.colors[0][k])
            }
            ;
            this.vH = function() {
                var k, t = "";
                for (k = 0; 3 > k; k++) {
                    var l = as(this.colors[0][k], 4);
                    10 > l && (t += "0");
                    t += l.toString()
                }
                return t
            }
            ;
            this.lo = function(k) {
                0 !== this.v9 && (k -= 2 * this.f7 + this.vA + (gE - this.c1) / 2,
                    this.colors[this.ny][this.v9 - 1] = g(256 * k / this.vB),
                    c4.c5 = true)
            }
            ;
            this.vI = function() {
                0 < this.v9 && (this.v9 = 0,
                    this.vF(),
                    gI.vJ(),
                    c4.c5 = true)
            }
            ;
            this.cG = function() {
                cH.setTransform(1, 0, 0, 1, (gE - this.c1) / 2, (cB - this.cw) / 2);
                cH.fillStyle = i1;
                cH.fillRect(0, 0, this.c1, this.cw);
                cH.lineWidth = p2;
                cH.strokeStyle = cK;
                cH.strokeRect(-1, -1, this.c1 + 2, this.cw + 2);
                cH.font = bt + Math.floor(.8 * this.vA) + bu;
                cH.textBaseline = cI;
                cH.textAlign = cJ;
                this.vK(0);
                cH.lineWidth = p2;
                this.vL(0);
                this.vL(1);
                this.vL(2);
                cH.setTransform(1, 0, 0, 1, 0, 0)
            }
            ;
            this.vK = function(k) {
                cH.fillStyle = "rgb(" + this.colors[k][0] + "," + this.colors[k][1] + "," + this.colors[k][2] + ")";
                cH.fillRect(this.f7, this.f7, this.vA, 2 * this.vA + this.f7);
                cH.lineWidth = 2 + p2;
                cH.strokeStyle = cK;
                cH.strokeRect(this.f7, this.f7, this.vA, 2 * this.vA + this.f7)
            }
            ;
            this.vL = function(k) {
                cH.fillStyle = "rgb(" + (0 === k ? 200 : 2 === k ? 50 : 0) + "," + (1 === k ? 200 : 2 === k ? 50 : 0) + "," + (2 === k ? 255 : 0) + ")";
                cH.fillRect(2 * this.f7 + this.vA, this.f7 + k * (this.f7 + this.vC), Math.floor(this.colors[this.ny][k] * this.vB / 255), this.vC);
                cH.strokeStyle = cK;
                cH.strokeRect(2 * this.f7 + this.vA, this.f7 + k * (this.f7 + this.vC), this.vB, this.vC)
            }
        }
        function kD() {
            function g() {
                return 0 === D ? 0 : 1 + (D - 1 + K) % (eD.vX - 1)
            }
            function k() {
                D++;
                H = c4.gf;
                eD.rp(g(), 4) && (J = true,
                    iu.vY(g()))
            }
            function t() {
                0 === D ? jm.vd(3249) : (D === eD.vX - 1 && (D = -1),
                    k())
            }
            function l(L, P, I) {
                var O = Math.floor((gE - x) / 2) + C
                    , R = O + Math.floor(I * (x - 2 * C));
                cH.lineWidth = P;
                cH.beginPath();
                cH.moveTo(O, L);
                cH.lineTo(R, L);
                cH.lineTo(Math.floor(O - C + I * x), L + z);
                cH.lineTo(O - C, L + z);
                cH.closePath()
            }
            var y, n, z, x, A, B, C, E, G, F, M, H, D, K = 0, J;
            this.bp = function() {
                aJ.setState(6);
                y = 0;
                n = 1;
                E = "rgba(0,220,120,0.4)";
                G = "rgba(0,0,0,0.8)";
                this.lx();
                c4.c5 = true;
                D = 0;
                J = false;
                k()
            }
            ;
            this.lx = function() {
                x = Math.floor((q ? .5 : .25) * bq);
                A = x + 12;
                z = Math.floor(.125 * x);
                C = 3 * z;
                B = Math.floor(.225 * x);
                M = Math.floor(.3 * z);
                F = or + M + bu
            }
            ;
            this.vV = function(L) {
                K = L
            }
            ;
            this.vZ = function(L) {
                L === g() && (J = false,
                    t())
            }
            ;
            this.rr = function(L) {
                6 !== aJ.pe() || J || (H = c4.gf,
                    J = true,
                    iu.vY(L))
            }
            ;
            this.actionWheelOnClick = function(L, P) {
                var I = Math.floor((gE - A) / 2)
                    , O = Math.floor(.5 * (cB - cA - z - B)) + z + cA;
                return L > I && L < I + A && P > O && P < O + B ? (this.ve(),
                    jk.lo(L, P, false),
                    true) : false
            }
            ;
            this.ve = function() {
                eD.vf(3260);
                jh.bp();
                c4.c5 = true
            }
            ;
            this.dF = function() {
                6 === aJ.pe() && (J ? c4.gf > H + 2E4 && jm.vd(3250) : c4.gf > H + 2E4 && t(),
                    y += .07 * n * (16 > y ? 5 + y : 84 < y ? 105 - y : 17),
                    100 < y ? (y = 100,
                        n = -1) : 0 > y && (y = 0,
                        n = 1),
                    E = "rgba(0," + Math.floor(190 - 1.9 * y) + "," + Math.floor(120 - 1.2 * y) + "," + (.4 + .004 * y) + ")",
                    G = "rgba(0," + Math.floor(1.9 * y) + "," + Math.floor(1.2 * y) + "," + (.8 - .004 * y) + ")",
                    c4.c5 = true)
            }
            ;
            this.cG = function() {
                var L = Math.floor((gE - A) / 2)
                    , P = Math.floor(.5 * (cB - cA - z - B))
                    , I = y / 100;
                cH.fillStyle = G;
                l(P, 3, 1);
                cH.fill();
                cH.fillStyle = E;
                l(P, 3, I);
                cH.fill();
                cH.strokeStyle = cK;
                l(P, 3, 1);
                cH.stroke();
                cH.textAlign = cJ;
                cH.textBaseline = cI;
                cH.font = F;
                cH.fillStyle = cK;
                cH.fillText("Loading", Math.floor(.5 * gE), Math.floor(P + .58 * z));
                P = P + z + cA;
                I = A;
                var O = B;
                cH.fillStyle = oK;
                cH.fillRect(L, P, I, O);
                cH.lineWidth = 3;
                cH.strokeStyle = cK;
                cH.strokeRect(L, P, I, O);
                var R = Math.floor(.3 * O);
                cH.textAlign = cJ;
                cH.textBaseline = cI;
                cH.font = or + R + bu;
                cH.fillStyle = cK;
                cH.fillText("Back", Math.floor(L + I / 2), Math.floor(P + O / 2 + .1 * R))
            }
        }
        function kE() {
            var g;
            this.bp = function() {
                jk.bp();
                jn.bp();
                g = 0;
                vn.bp();
                jh.bp()
            }
            ;
            this.setState = function(k) {
                g = k
            }
            ;
            this.pe = function() {
                return g
            }
            ;
            this.vp = function() {
                this.setState(8);
                ju.tr();
                cC.ur();
                cD.lE = false;
                na.actionWheelOnClick(-1E3, -1E3)
            }
            ;
            this.ur = function(k) {
                if (!vq)
                    return false;
                if (!(400 > c4.gf)) {
                    if ("Enter" === k.key || "Escape" === k.key) {
                        if (this.vr())
                            return 0 === g && jn.cE(0, true),
                                true;
                        if ("Enter" === k.key) {
                            if (0 === g)
                                return jh.vs(),
                                    true;
                            if (7 === g)
                                return true
                        }
                    }
                    return false
                }
            }
            ;
            this.vr = function() {
                return na.lH() || cC.ur() ? true : cD.lE ? (cD.lE = false,
                    true) : false
            }
            ;
            this.aK = function() {
                c4.c5 = true;
                8 === g ? g_uiVisibility ? g_uiVisibility = !g_uiVisibility : hy.lE ? hy.m2() : fq.m2() : 7 === g ? ju.vt() : 6 === g ? jl.ve() : 3 === g ? jm.vu(0, 0) : 2 === g ? dy.vu() : 0 === g && (this.vr() || a9(11))
            }
            ;
            this.actionWheelOnClick = function(k, t) {
                if (!vn.actionWheelOnClick(k, t) && vq && !(na.actionWheelOnClick(k, t) || 6 === g && jl.actionWheelOnClick(k, t) || 2 === g && dy.actionWheelOnClick(k, t) || gI.actionWheelOnClick(k, t) || cD.actionWheelOnClick(k, t) || vv.actionWheelOnClick(k, t, true) || cC.actionWheelOnClick(k, t, true))) {
                    jj.actionWheelOnClick(k, t);
                    if (0 === g)
                        jh.actionWheelOnClick(k, t);
                    else if (3 === g)
                        jm.actionWheelOnClick(k, t);
                    else if (5 === g)
                        jo.actionWheelOnClick(k, t);
                    else if (7 === g && ju.actionWheelOnClick(k, t))
                        return;
                    uY.actionWheelOnClick(k, t)
                }
            }
            ;
            this.lo = function(k, t) {
                gI.lo(k, t);
                if (!jj.rn) {
                    if (vn.lo(k, t)) {
                        jj.pa();
                        return
                    }
                    if (2 === g && dy.lo(k, t)) {
                        jj.pa();
                        return
                    }
                    if (0 <= cC.pV(k, t)) {
                        jj.pa();
                        return
                    }
                    if (cC.lo(k, t)) {
                        jj.pa();
                        return
                    }
                    if (jk.lo(k, t, true))
                        return
                }
                jj.lo(k, t)
            }
            ;
            this.click = function(k, t) {
                jj.pb();
                cC.vI() || vv.actionWheelOnClick(k, t, false) || cC.actionWheelOnClick(k, t, false)
            }
            ;
            this.ph = function(k, t, l) {
                cC.mE[1].ik.lE || 0 === g && jj.ph(k, l)
            }
            ;
            this.vw = function() {
                jk.rx();
                cC.rx();
                0 === g ? (jn.rx(0),
                    jj.rx()) : 7 === g && ju.lx();
                c4.c5 = true
            }
            ;
            this.cG = function() {
                if (8 !== g && 10 !== g) {
                    cH.imageSmoothingEnabled = true;
                    this.hu();
                    jj.cG();
                    ji.cG();
                    var k = Math.floor(.3 * cB)
                        , t = bw.lB("territorial.io")
                        , l = 1.75 * cB / t.width;
                    l = l * t.width < .98 * gE ? .98 * gE / t.width : l;
                    cH.globalAlpha = .15;
                    var y = Math.floor(.5 * (gE - l * t.width));
                    y = Math.floor(y / l);
                    k = Math.floor(k - .5 * t.height * l);
                    k = Math.floor(k / l);
                    cH.setTransform(l, 0, 0, l, y, k);
                    cH.drawImage(t, y, k);
                    cH.setTransform(1, 0, 0, 1, 0, 0);
                    cH.globalAlpha = 1;
                    vv.cG();
                    uY.cG();
                    cC.cG();
                    gI.cG();
                    0 === g ? jh.cG() : 2 === g ? dy.cG() : 3 === g ? jm.cG() : 5 === g ? jo.cG() : 6 === g ? jl.cG() : 7 === g && ju.cG();
                    cC.vy();
                    vn.cG();
                    cD.cG();
                    na.cG()
                }
            }
            ;
            this.hu = function() {
                if (vq) {
                    var k = r / aZ
                        , t = s / aa;
                    k = k > t ? k : t;
                    cH.setTransform(k, 0, 0, k, Math.floor((r - k * aZ) / 2), Math.floor((s - k * aa) / 2));
                    cH.drawImage(hv, 0, 0);
                    cH.setTransform(1, 0, 0, 1, 0, 0);
                    cH.fillStyle = oK
                } else
                    cH.fillStyle = gH;
                cH.fillRect(0, 0, r, s)
            }
        }
        function w1() {
            this.cw = this.c1 = 0;
            this.lE = false;
            this.nn = 10;
            this.bB = .12;
            this.w3 = this.w2 = this.v9 = false;
            this.bp = function() {
                this.c1 = r < 1 * s ? Math.floor((q ? .94 : .6) * r) : Math.floor((q ? .94 : .6) * s);
                this.c1 -= this.c1 % this.nn;
                this.cw = 1 * this.c1;
                this.lE = true;
                this.v9 = false
            }
            ;
            this.actionWheelOnClick = function(g, k, t) {
                var l = (cB - this.cw) / 2;
                g -= (gE - this.c1) / 2;
                k -= l;
                if (0 > g || 0 > k || g >= this.c1 - 1 || k >= this.cw - 1)
                    return 0 === t && (this.lE = false,
                    0 === aJ.pe() && jn.cE(0, true),
                        c4.c5 = true),
                        false;
                l = Math.floor(this.c1 / this.nn);
                g = as(g, l) + this.nn * as(k, l);
                g = 0 > g ? 0 : g >= a5.nr ? a5.nr - 1 : g;
                if (0 === t || 1 === t && !a5.a7[g] || 2 === t && a5.a7[g])
                    this.w2 = !a5.a7[g],
                        this.w3 = this.v9 = true,
                        a5.a7[g] = !a5.a7[g],
                        a5.o9(),
                        c4.c5 = true;
                return true
            }
            ;
            this.lo = function(g, k) {
                this.v9 && this.actionWheelOnClick(g, k, this.w2 ? 1 : 2)
            }
            ;
            this.vI = function() {
                this.w3 && (a3(),
                    this.w3 = false);
                this.v9 = this.w3 = false
            }
            ;
            this.cG = function() {
                cH.imageSmoothingEnabled = true;
                var g = (gE - this.c1) / 2
                    , k = (cB - this.cw) / 2;
                cH.setTransform(1, 0, 0, 1, g, k);
                cH.fillStyle = i1;
                cH.fillRect(0, 0, this.c1, this.cw);
                cH.lineWidth = p2;
                cH.strokeStyle = cK;
                cH.strokeRect(-1, -1, this.c1 + 2, this.cw + 2);
                for (var t = Math.floor(this.c1 / this.nn), l = (t - 2 * this.bB * t) / a5.c1, y = a5.nr - 1; 0 <= y; y--)
                    cH.setTransform(1, 0, 0, 1, Math.floor(g + y % this.nn * t), Math.floor(k + as(y, this.nn) * t)),
                    a5.a7[y] && (cH.fillStyle = oS,
                        cH.fillRect(0, 0, t, t)),
                        cH.setTransform(l, 0, 0, l, Math.floor(g + y % this.nn * t + this.bB * t), Math.floor(k + as(y, this.nn) * t + this.bB * t)),
                        cH.drawImage(a5.l7[y], 0, 0);
                cH.setTransform(1, 0, 0, 1, 0, 0);
                cH.imageSmoothingEnabled = false
            }
        }
        function kF() {
            function g() {
                var n = aJ.pe();
                0 === n ? jh.tr() : 6 === n ? eD.vf(t) : 7 === n ? (ju.tr(),
                    eD.close(eD.w6, 3240)) : 8 === n && (je(),
                    jh.tr());
                aJ.setState(3);
                jk.rx();
                jk.uy[2].ne = k(t);
                c4.c5 = true
            }
            function k(n) {
                var z;
                for (z = l.length - 1; 0 <= z; z--)
                    if (n === l[z].code)
                        return l[z].l;
                return y + n
            }
            var t, l, y;
            this.jW = function() {
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
                y = "Error "
            }
            ;
            this.bp = function(n, z) {
                t = z;
                var x = aJ.pe();
                if (6 === x) {
                    if (4211 === z) {
                        jo.bp(0, 0);
                        return
                    }
                    if (4214 !== z) {
                        jl.vZ(n);
                        return
                    }
                } else if (7 === x) {
                    if (n !== eD.w6)
                        return
                } else {
                    8 === x && (n !== eD.jf || g_isSingleplayer || e9.mo(k(z)));
                    return
                }
                g()
            }
            ;
            this.vd = function(n) {
                t = n;
                8 === aJ.pe() ? e9.mo(k(n)) : g()
            }
            ;
            this.lx = function() {
                jk.uy[2].ne = k(t)
            }
            ;
            this.actionWheelOnClick = function(n, z) {
                3 === jk.pV(n, z, 3, 1) && this.vu(n, z)
            }
            ;
            this.vu = function(n, z) {
                jh.bp();
                jk.lo(n, z, false);
                c4.c5 = true
            }
            ;
            this.cG = function() {
                jk.v4()
            }
        }
        function kG() {
            function g() {
                k.push({
                    input: document.createElement("INPUT"),
                    lE: false,
                    color: t
                });
                var y = k.length - 1;
                k[y].input.setAttribute("type", "text");
                k[y].input.value = "";
                k[y].input.style.textAlign = 0 === y ? "center" : "left";
                k[y].input.style.backgroundColor = t;
                k[y].input.style.border = "3px solid " + cK;
                k[y].input.style.color = cK;
                k[y].input.style.position = "absolute";
                k[y].input.readOnly = 3 === y;
                k[y].input.addEventListener("input", function() {
                    0 === y && jh.wD()
                })
            }
            var k, t, l;
            this.bp = function() {
                t = "rgba(0,0,0,0.6)";
                l = oZ;
                void 0 !== k && this.cE(0, false);
                k = [];
                g();
                this.lx()
            }
            ;
            this.lx = function() {
                var y = Math.floor(.22 * jk.cw / pS);
                k[0].input.style.font = bt + y + bu;
                k[0].input.style.padding = Math.floor(.3 * y) + "px 5px";
                k[0].input.style.width = Math.floor(jk.c1 / pS - 13) + "px"
            }
            ;
            this.bz = function(y) {
                return k[y]
            }
            ;
            this.rx = function(y) {
                k[y].input.style.left = Math.floor((gE / pS - (jk.c1 / pS - 3) - 7) / 2) + "px";
                0 === y && (k[y].input.style.bottom = Math.floor((cB - jk.fL + jk.f7) / pS) + "px")
            }
            ;
            this.cE = function(y, n) {
                k[y].lE !== n && ((k[y].lE = n) ? document.body.appendChild(k[y].input) : document.body.removeChild(k[y].input))
            }
            ;
            this.wE = function(y, n) {
                n && k[y].color === t || !n && k[y].color === l || (k[y].color = n ? t : l,
                    k[y].input.style.backgroundColor = k[y].color)
            }
        }
        function kj() {
            this.wH = this.wG = 0;
            var g, k, t, l;
            this.bp = function(y) {
                if (7 === aJ.pe()) {
                    g = y;
                    k = 0;
                    t = c4.gf + 4500;
                    l = js.wM(g) ? 2 : 0;
                    aJ.setState(10);
                    cH.imageSmoothingEnabled = true;
                    aJ.hu();
                    y = bw.lB("loading");
                    var n = (q ? .396 : .25) * bq / y.width;
                    cH.setTransform(n, 0, 0, n, Math.floor((r - n * y.width) / 2), Math.floor((s - n * y.height) / 2));
                    cH.drawImage(y, 0, 0);
                    cH.setTransform(1, 0, 0, 1, 0, 0)
                }
            }
            ;
            this.eZ = function() {
                0 < l && c4.gf > t && (l--,
                    t += 4500,
                0 === c4.wO && 0 === c4.timeSinceGameStarted_idkthetype && (0 === l && eD.jf < eD.wQ && (eD.jf += eD.wR),
                    eD.rp(eD.jf, 5)))
            }
            ;
            this.wS = function() {
                10 === aJ.pe() && (k++,
                2 <= k && (js.wT(g),
                    g = null))
            }
        }
        function kg() {
            function g(N, T) {
                var U = E[N].getContext("2d", {
                    alpha: true
                });
                U.clearRect(0, 0, 48, 48);
                var Z = 48 / T.width
                    , Y = 48 / T.height;
                Z = Y < Z ? Y : Z;
                U.setTransform(Z, 0, 0, Z, Math.floor((48 - Z * T.width) / 2), Math.floor((48 - Z * T.height) / 2));
                U.drawImage(T, 0, 0);
                U.setTransform(1, 0, 0, 1, 0, 0)
            }
            function k(N, T, U, Z) {
                Z.beginPath();
                Z.moveTo(N, N);
                Z.lineTo(N + Math.cos(U) * T, N + Math.cos(U + 1.5 * Math.PI) * T);
                Z.stroke()
            }
            function t() {
                if (7 === aJ.pe()) {
                    for (var N = -1, T = G.length - 1; 0 <= T; T--)
                        if (null === G[T].ls) {
                            N = T;
                            break
                        }
                    if (-1 !== N) {
                        T = l(G[N].xA, G[N].xB);
                        if (null !== T)
                            G[N].ls = T;
                        else {
                            T = aZ;
                            var U = aa
                                , Z = hv
                                , Y = pp
                                , qa = xH
                                , W = xI
                                , la = x6
                                , ca = x7;
                            xJ(G[N].xA, G[N].xB);
                            xK.xL();
                            var S = document.createElement("canvas");
                            S.width = 128;
                            S.height = 128;
                            var V = S.getContext("2d", {
                                alpha: false
                            })
                                , ba = 128 / aZ
                                , ta = 128 / aa;
                            ta > ba && (ba = ta);
                            V.imageSmoothingEnabled = true;
                            V.setTransform(ba, 0, 0, ba, (128 - ba * aZ) / 2, (128 - ba * aa) / 2);
                            V.drawImage(hv, 0, 0);
                            aZ = T;
                            aa = U;
                            hv = Z;
                            pp = Y;
                            xH = qa;
                            xI = W;
                            x6 = la;
                            x7 = ca;
                            G[N].ls = S
                        }
                        c4.c5 = true
                    }
                }
            }
            function l(N, T) {
                for (var U = G.length - 1; 0 <= U; U--)
                    if (null !== G[U].ls && G[U].xA === N && G[U].xB === T)
                        return G[U].ls;
                return null
            }
            function y(N, T) {
                var U, Z;
                if (0 === G.length)
                    return false;
                var Y = 0;
                var qa = B;
                for (Z = 0; Z < x[1]; Z++) {
                    var W = A;
                    for (U = 0; U < x[0]; U++) {
                        if (N > W && N < W + n && T > qa && T < qa + n)
                            return iu.xN(G[Y].x8),
                                M = G[Y].x8 !== M ? G[Y].x8 : -1,
                                c4.c5 = true;
                        Y++;
                        if (Y >= G.length)
                            return false;
                        W += n + cA
                    }
                    qa += n + cA
                }
                return false
            }
            var n, z, x, A, B, C, E, G, F, M, H, D, K = ["Joined", "Skipped", "Multiplayer", "Singleplayer"], J = [0, 0, 0, 0], L, P, I, O, R;
            this.bp = function() {
                R = 0;
                M = -1;
                aJ.setState(7);
                G = [];
                this.lx();
                var N;
                E = Array(11);
                for (N = E.length; 0 <= N; N--)
                    E[N] = document.createElement("canvas"),
                        E[N].width = 48,
                        E[N].height = 48;
                for (N = 0; 7 > N; N++) {
                    var T = N + 2
                        , U = E[T - 2].getContext("2d", {
                        alpha: true
                    })
                        , Z = 1.5 * Math.PI;
                    U.lineWidth = 2;
                    U.strokeStyle = cK;
                    U.clearRect(0, 0, 48, 48);
                    for (var Y = 0; Y < T; Y++) {
                        var qa = Z + 2 * Math.PI / T;
                        var W = Z
                            , la = qa
                            , ca = U;
                        ca.fillStyle = dW.wy[Y + 1];
                        ca.beginPath();
                        ca.arc(24, 24, 23, W, la);
                        ca.lineTo(24, 24);
                        ca.fill();
                        0 !== Y && k(24, 23, Z, U);
                        Z = qa
                    }
                    k(24, 23, 1.5 * Math.PI, U);
                    U.beginPath();
                    U.arc(24, 24, 23, 0, 2 * Math.PI);
                    U.stroke()
                }
                g(7, bw.bz(4));
                g(8, a5.l7[27]);
                g(9, a5.l7[46]);
                g(10, a5.l7[36]);
                c4.c5 = true
            }
            ;
            this.vt = function() {
                this.tr();
                eD.vf(3240);
                jh.bp();
                c4.c5 = true
            }
            ;
            this.tr = function() {
                G = [];
                E = []
            }
            ;
            this.lx = function() {
                var N, T;
                x = [0, 0];
                F = [0, 0, 0, 0];
                q ? (H = Math.floor(.8 * .4 * bq),
                    D = Math.floor(.56 * H),
                    F[0] = cA,
                    r < s ? (F[1] = D + 2 * cA,
                        F[2] = r - 3 * F[0],
                        F[3] = uY.cF() - 3 * cA - D,
                        P = Math.floor(.95 * D),
                        I = Math.floor((r - H - cA) / 2),
                        O = Math.floor(cA + D / 2)) : (F[1] = cA,
                        F[2] = r - 3 * cA - H,
                        F[3] = uY.cF() - 2 * cA,
                        P = Math.floor(.8 * H),
                    F[3] - D < H && (P = Math.floor(.8 * (F[3] - D)),
                        P = me(D, P)),
                        I = Math.floor(r - H / 2 - cA),
                        O = Math.floor(cA + D + (F[3] - D) / 2),
                        O = me(O, Math.floor(D + 2 * cA + P / 2)))) : (H = Math.floor(.2016 * bq),
                    D = Math.floor(.56 * H),
                    F[2] = Math.floor(.5 * r),
                    F[3] = Math.floor(.5 * s),
                    F[1] = Math.floor(.45 * (s - F[3])),
                    F[0] = Math.floor((r - F[2]) / 2),
                    P = Math.floor(.75 * D),
                    I = Math.floor(r / 2),
                    O = Math.floor(F[1] + F[3] + (s - F[3] - F[1]) / 2));
                L = bt + Math.floor(.65 * D / 4) + bu;
                for (N = T = 1; N * T < G.length; )
                    F[2] / (N + 1) > F[3] / (T + 1) ? N++ : T++;
                var U = (F[2] - (N - 1) * cA) / N;
                var Z = (F[3] - (T - 1) * cA) / T;
                n = U < Z ? U : Z;
                z = Math.floor(n);
                C = bt + Math.floor(.5 * n / 5) + bu;
                x[0] = N;
                x[1] = T;
                A = F[0] + Math.floor((F[2] - x[0] * n - (x[0] - 1) * cA) / 2);
                B = F[1] + Math.floor((F[3] - x[1] * n - (x[1] - 1) * cA) / 2)
            }
            ;
            this.uZ = function(N, T) {
                var U, Z = G.length;
                J = N;
                for (U = 0; U < T.length; U++) {
                    var Y = l(T[U].x6, T[U].x7);
                    G.push({
                        x8: T[U].id,
                        jM: T[U].jM,
                        jN: T[U].x9,
                        xA: T[U].x6,
                        xB: T[U].x7,
                        joined: T[U].xC,
                        nj: T[U].vj,
                        xD: T[U].xD,
                        ls: Y
                    })
                }
                for (U = Z - 1; 0 <= U; U--)
                    G.shift();
                if (-1 !== M)
                    for (Y = M,
                             M = -1,
                             U = G.length - 1; 0 <= U; U--)
                        if (G[U].x8 === Y) {
                            M = Y;
                            break
                        }
                if (G.length > R || G.length < R)
                    R = G.length,
                        this.lx();
                this.xE();
                c4.c5 = true
            }
            ;
            this.xE = function() {
                for (var N = G.length - 1; 0 <= N; N--)
                    null === G[N].ls && setTimeout(t, 0)
            }
            ;
            this.actionWheelOnClick = function(N, T) {
                return 4 * ((N - I) * (N - I) + (T - O) * (T - O)) <= P * P ? (this.vt(),
                    jk.lo(N, T, false),
                    true) : y(N, T)
            }
            ;
            this.cG = function() {
                var N = 0
                    , T = B;
                cH.imageSmoothingEnabled = true;
                cH.lineWidth = 3;
                var U = Math.floor(.5 * P);
                cH.fillStyle = oK;
                cH.beginPath();
                cH.arc(I, O, U, 0, 2 * Math.PI);
                cH.fill();
                cH.strokeStyle = cK;
                cH.beginPath();
                cH.arc(I, O, U, 0, 2 * Math.PI);
                cH.stroke();
                U = bw.bz(0).height;
                var Z = .6 * P / U;
                cH.setTransform(Z, 0, 0, Z, Math.floor(I - .56 * Z * bw.bz(0).width), Math.floor(O - .5 * Z * U));
                cH.drawImage(bw.bz(0), 0, 0);
                cH.setTransform(1, 0, 0, 1, 0, 0);
                cH.fillStyle = oK;
                cH.fillRect(r - H - cA, cA, H, D);
                0 <= M ? (cH.fillStyle = oS,
                    cH.fillRect(r - H - cA, cA, H, Math.floor(.25 * D))) : (cH.fillStyle = on,
                    cH.fillRect(r - H - cA, cA + Math.floor(.25 * D), H, Math.floor(.25 * D)));
                cH.strokeStyle = cK;
                cH.strokeRect(r - H - cA, cA, H, D);
                cH.fillStyle = cK;
                cH.font = L;
                cH.textBaseline = cI;
                U = Math.floor(.04 * H);
                Z = Math.floor(.08 * D);
                for (var Y = 3; 0 <= Y; Y--) {
                    var qa = Math.floor(cA + (Y + 1) * (D + 2 * Z) / 5 - Z);
                    cH.textAlign = mj;
                    cH.fillText(K[Y], r - H - cA + U, qa);
                    cH.textAlign = op;
                    cH.fillText(eP.gL(J[Y]), r - cA - U, qa)
                }
                if (0 !== G.length)
                    for (Z = 0; Z < x[1]; Z++) {
                        qa = A;
                        for (U = 0; U < x[0]; U++) {
                            Y = N;
                            var W = Math.floor(qa)
                                , la = Math.floor(T);
                            if (null === G[Y].ls)
                                cH.fillStyle = oK,
                                    cH.fillRect(W, la, z, z);
                            else {
                                var ca = z / 128;
                                cH.setTransform(ca, 0, 0, ca, W, la);
                                cH.drawImage(G[Y].ls, 0, 0);
                                cH.setTransform(1, 0, 0, 1, 0, 0)
                            }
                            if (M === G[Y].x8) {
                                ca = W;
                                var S = la
                                    , V = Math.floor(.2 * z)
                                    , ba = Math.floor(.3 * V);
                                cH.fillStyle = oU;
                                cH.fillRect(ca + z - V, S, V, V);
                                cH.fillStyle = gH;
                                cH.fillRect(ca + z - V, S, 2, V);
                                cH.fillRect(ca + z - V, S + V - 2, V, 2);
                                fq.mB(ca + z - V + ba, S + ba, V - 2 * ba);
                                cH.setTransform(1, 0, 0, 1, 0, 0);
                                cH.lineWidth = 3;
                                cH.fillStyle = oU
                            } else
                                cH.fillStyle = oJ;
                            S = Math.floor(n / 4);
                            cH.fillRect(W, Math.floor(la + .8 * n), z, Math.floor(n / 5));
                            cH.fillRect(W, la, S, S);
                            cH.fillStyle = gH;
                            cH.fillRect(W, Math.floor(la + .8 * n), z, 2);
                            cH.fillRect(W + S - 2, la, 2, S);
                            cH.fillRect(W, la + S - 2, S, 2);
                            cH.font = C;
                            cH.textBaseline = cI;
                            cH.textAlign = mj;
                            cH.fillStyle = oh;
                            cH.fillText(G[Y].joined.toString(), Math.floor(W + .07 * n), Math.floor(la + .9 * n));
                            256 >= G[Y].xD && (cH.textAlign = cJ,
                                cH.fillStyle = oQ,
                                cH.fillText(G[Y].xD.toString(), Math.floor(W + .5 * n), Math.floor(la + .9 * n)));
                            cH.textAlign = op;
                            cH.fillStyle = oc;
                            cH.fillText(G[Y].nj.toString(), Math.floor(W + .93 * n), Math.floor(la + .9 * n));
                            cH.strokeStyle = oi;
                            cH.strokeRect(W, la, z, z);
                            V = Math.floor(.16 * n);
                            ca = V / 48;
                            cH.setTransform(ca, 0, 0, ca, Math.floor(W + (S - V) / 2), Math.floor(la + (S - V) / 2));
                            E.length > G[Y].jM && cH.drawImage(E[G[Y].jM], 0, 0);
                            cH.setTransform(1, 0, 0, 1, 0, 0);
                            G[Y].jN && (Y = bw.bz(4),
                                ca = .5 * n / Y.width,
                                cH.setTransform(ca, 0, 0, ca, Math.floor(W + (n - ca * Y.width) / 2), Math.floor(la + (n - ca * Y.height) / 2)),
                                cH.globalAlpha = .6,
                                cH.drawImage(Y, 0, 0),
                                cH.globalAlpha = 1,
                                cH.setTransform(1, 0, 0, 1, 0, 0));
                            N++;
                            if (N >= G.length)
                                return;
                            qa += n + cA
                        }
                        T += n + cA
                    }
            }
        }
        function kH() {
            this.bp = function(g, k) {
                aJ.setState(5);
                jk.lo(g, k, false);
                c4.c5 = true
            }
            ;
            this.cG = function() {
                jk.v5()
            }
            ;
            this.actionWheelOnClick = function(g, k) {
                var t = jk.pV(g, k, 5, 2);
                5 === t ? aC() : 6 === t && (jh.bp(),
                    jk.lo(g, k, false),
                    c4.c5 = true)
            }
        }
        function kI() {
            function g(t, l, y, n, z, x, A, B, C) {
                cH.fillStyle = z;
                cH.fillRect(t, l, y, n);
                0 <= B && (cH.fillStyle = "rgba(" + 22 * B + "," + (110 - 22 * B) + ",0,0.75)",
                    cH.fillRect(t, l, (1 + B) * y / 6, n));
                0 < C && (cH.fillStyle = "rgba(255,255,255,0.3)",
                    cH.fillRect(t, l, C * y / g_unclaimedLandIndex, n));
                cH.strokeStyle = cK;
                cH.strokeRect(t, l, y, n);
                0 !== x && (cH.fillStyle = cK,
                    cH.font = bt + Math.floor(x * n) + bu,
                    cH.fillText(A, Math.floor(t + y / 2), Math.floor(l + .52 * n)))
            }
            var k = [0, 0, 0, 0];
            this.dz = [{
                bD: 0,
                mv: 512
            }];
            this.bp = function() {
                jv.lE = false;
                aJ.setState(2);
                this.lx();
                c4.c5 = true
            }
            ;
            this.tr = function() {}
            ;
            this.lx = function() {
                k[2] = Math.floor((q ? .49 : .4) * bq);
                k[1] = Math.floor((s - k[2] / 6 - this.dz.length * (cA + k[2] / 10)) / 2);
                k[0] = Math.floor((r - k[2]) / 2);
                jv.lE && jv.lx()
            }
            ;
            this.xW = function(t) {
                var l;
                if (6 < t)
                    this.dz = [{
                        bD: 0,
                        mv: 512
                    }];
                else {
                    this.dz = [];
                    for (l = 0; l < t + 2; l++)
                        this.dz.push({
                            bD: 0,
                            mv: 0
                        });
                    this.xX()
                }
            }
            ;
            this.vu = function() {
                c4.c5 = true;
                jv.lE ? jv.lE = false : (this.tr(),
                    jh.bp())
            }
            ;
            this.jP = function() {
                var t;
                if (dr.ds)
                    return dr.dt.xY;
                var l = 0;
                for (t = this.dz.length - 1; 0 <= t; t--)
                    l += this.dz[t].mv;
                return l
            }
            ;
            this.lo = function(t, l) {
                return jv.lE && jv.lo(t, l) ? true : -1 === this.pV(t, l) ? false : true
            }
            ;
            this.xZ = function() {
                eD.jf = 0;
                eD.rp(0, 3) && iu.xa(0);
                aJ.vp();
                if (dr.ds)
                    dr.xb();
                else {
                    var t = this.dz.length - 2;
                    t = 0 > t ? 7 : t;
                    jJ(Math.floor(16384 * Math.random()), 0, [{
                        name: jh.xc(),
                        xd: cC.mE[2].ik.vG(),
                        xe: 0
                    }], t, false)
                }
            }
            ;
            this.click = function(t, l) {
                return false
            }
            ;
            this.actionWheelOnClick = function(t, l) {
                if (cD.lE || cC.mE[1].ik.lE || cC.mE[2].ik.lE)
                    return false;
                if (jv.lE && !dr.ds)
                    return jv.actionWheelOnClick(t, l);
                var y = this.pV(t, l);
                if (-1 === y)
                    return false;
                if (0 === y)
                    return this.vu(),
                        true;
                if (1 === y)
                    return dr.ds ? (dr.pa(),
                        c4.c5 = true) : jv.show(),
                        true;
                if (2 === y)
                    return this.tr(),
                        this.xZ(),
                        true;
                if (dr.ds)
                    return false;
                if (27 === y)
                    return 8 > this.dz.length && (this.dz.push({
                        bD: 0,
                        mv: g_unclaimedLandIndex
                    }),
                        this.xX(),
                        this.lx(),
                        c4.c5 = true),
                        true;
                var n = Math.floor((y - 3) / 3);
                if (0 === y % 3)
                    return 1 < this.dz.length && (this.dz.splice(n, 1),
                        this.lx(),
                        c4.c5 = true),
                        true;
                var z = (k[2] - k[2] / 10 - 2 * cA) / 2;
                if (1 === y % 3) {
                    if (0 === n && 1 === this.dz[n].mv)
                        return true;
                    t < k[0] + k[2] - 1.5 * z - cA ? this.dz[n].bD-- : this.dz[n].bD++;
                    0 > this.dz[n].bD ? this.dz[n].bD = 5 : 5 < this.dz[n].bD && (this.dz[n].bD = 0);
                    return c4.c5 = true
                }
                c4.c5 = true;
                var x = (t - (k[0] + k[2] - z)) / z - .5;
                x = Math.floor((0 > x ? -(x * x) : x * x) * g_unclaimedLandIndex);
                x = 0 === x ? 1 : x;
                z = g_unclaimedLandIndex;
                for (y = this.dz.length - 1; 0 <= y; y--)
                    n !== y && (z -= this.dz[y].mv);
                if (0 > x) {
                    if (1 === this.dz[n].mv)
                        return this.dz[n].mv = z,
                            true
                } else if (this.dz[n].mv === z)
                    return this.dz[n].mv = 1,
                        true;
                this.dz[n].mv += x;
                1 > this.dz[n].mv ? this.dz[n].mv = 1 : this.dz[n].mv > z && (this.dz[n].mv = z);
                return true
            }
            ;
            this.xX = function() {
                for (var t = Math.floor(g_unclaimedLandIndex / this.dz.length), l = g_unclaimedLandIndex % this.dz.length, y = this.dz.length - 1; 0 <= y; y--)
                    this.dz[y].mv = t;
                this.dz[0].mv += l
            }
            ;
            this.pV = function(t, l) {
                var y, n = (k[2] - 2 * cA) / 3, z = k[2] / 6;
                if (t < k[0] || l < k[1] || t >= k[0] + k[2])
                    return -1;
                if (l < k[1] + z)
                    return t < k[0] + n ? 0 : t < k[0] + n + cA ? -1 : t < k[0] + 2 * n + cA ? 1 : t < k[0] + 2 * n + 2 * cA ? -1 : 2;
                var x = k[2] / 10;
                n = (k[2] - x - 2 * cA) / 2;
                for (y = 0; y < this.dz.length; y++) {
                    var A = k[1] + z + cA + y * (x + cA);
                    if (l < A)
                        return -1;
                    if (!(l > A + x))
                        return t < k[0] + x ? 3 + 3 * y : t < k[0] + x + cA ? -1 : t < k[0] + k[2] - n - cA ? 4 + 3 * y : t < k[0] + k[2] - n ? -1 : 5 + 3 * y
                }
                return 8 > this.dz.length ? (A = k[1] + z + cA + this.dz.length * (x + cA),
                    l < A || l > A + x || t > k[0] + x ? -1 : 27) : -1
            }
            ;
            this.cG = function() {
                var t;
                cH.lineWidth = 2;
                cH.textAlign = cJ;
                cH.textBaseline = cI;
                var l = (k[2] - 2 * cA) / 3
                    , y = k[2] / 6;
                g(k[0], k[1], l, y, "rgba(128,0,0,0.75)", .4, "Back", -1, -1);
                g(k[0] + l + cA, k[1], l, y, "rgba(" + (dr.ds ? 128 : 0) + ",128,128,0.75)", .4, dr.ds ? "Reset" : "Maps", -1, -1);
                g(k[0] + k[2] - l, k[1], l, y, "rgba(0,128,0,0.75)", .4, "Start", -1, -1);
                if (!dr.ds) {
                    var n = k[2] / 10;
                    l = (k[2] - n - 2 * cA) / 2;
                    for (t = 0; t < this.dz.length; t++) {
                        var z = k[1] + y + cA + t * (n + cA);
                        g(k[0], z, n, n, "rgba(0,128,0,0.75)", 0, null, -1);
                        g(k[0] + n + cA, z, l, n, i1, .4, this.xg(t), this.dz[t].bD, -1);
                        g(k[0] + k[2] - l, z, l, n, i1, .4, this.xh(t), -1, this.dz[t].mv)
                    }
                    if (8 > this.dz.length) {
                        z = k[1] + y + cA + this.dz.length * (n + cA);
                        g(k[0], z, n, n, "rgba(128,128,20,0.75)", 0, null, -1, -1);
                        t = k[0];
                        cH.fillStyle = cK;
                        l = me(2, Math.floor(.5 * n));
                        l -= l % 2;
                        y = me(2, Math.floor(.1 * n));
                        y -= y % 2;
                        n = Math.floor((n - l) / 2);
                        var x = Math.floor(n + (l - y) / 2);
                        cH.fillRect(t + n, z + x, l, y);
                        cH.fillRect(t + x, z + n, y, l)
                    }
                    jv.lE && jv.cG()
                }
            }
            ;
            this.xg = function(t) {
                return 0 === t && 1 === this.dz[t].mv ? "You" : dG.dl[this.dz[t].bD]
            }
            ;
            this.xh = function(t) {
                return 1 === this.dz[t].mv ? "1 Player" : this.dz[t].mv + " Players"
            }
        }
        function p9() {
            this.c1 = this.b3 = 0;
            this.mE = null;
            this.bp = function() {
                this.mE = [];
                this.mE.push({
                    fK: 0,
                    fL: 0,
                    m3: q,
                    ik: null
                });
                this.mE.push({
                    fK: 0,
                    fL: 0,
                    m3: false,
                    ik: new w1
                });
                this.mE.push({
                    fK: 0,
                    fL: 0,
                    m3: false,
                    ik: new v8
                });
                this.mE[2].ik.vD();
                this.b3 = this.mE.length;
                this.c1 = 0
            }
            ;
            this.rx = function() {
                this.c1 = Math.floor((q ? .063 : .04) * bq);
                this.c1 += 4 - this.c1 % 4;
                this.mE[0].fK = cA;
                this.mE[0].fL = cB - this.c1 - cA;
                for (var g = 1; g < this.b3; g++)
                    this.mE[g].fK = this.mE[g - 1].fK + Math.floor(q ? 1.5 * cA : 3.7 * cA) + this.c1,
                        this.mE[g].fL = this.mE[0].fL
            }
            ;
            this.pV = function(g, k) {
                if (!bw.bx())
                    return -1;
                for (var t = this.b3 - 1; 0 <= t; t--)
                    if (g >= this.mE[t].fK && k >= this.mE[t].fL && g < this.mE[t].fK + this.c1 && k < this.mE[t].fL + this.c1)
                        return t;
                return -1
            }
            ;
            this.xk = function() {
                for (var g = 2; 1 <= g; g--)
                    if (this.mE[g].ik.lE)
                        return true;
                return false
            }
            ;
            this.ur = function() {
                return this.mE[1].ik.lE ? (this.mE[1].ik.actionWheelOnClick(-5E3, -5E3, 0),
                    true) : this.mE[2].ik.lE ? (this.mE[2].ik.actionWheelOnClick(-5E3, -5E3),
                    true) : false
            }
            ;
            this.actionWheelOnClick = function(g, k, t) {
                if (t) {
                    if (this.mE[1].ik.lE)
                        return this.mE[1].ik.actionWheelOnClick(g, k, 0),
                            true;
                    if (this.mE[2].ik.lE)
                        return this.mE[2].ik.actionWheelOnClick(g, k),
                            true
                }
                g = this.pV(g, k);
                if (t) {
                    if (0 === g)
                        return this.mE[g].m3 = !this.mE[g].m3,
                            q = this.mE[g].m3,
                            jt.xl(),
                            a1(this.mE[0].m3, false),
                            true;
                    if (1 <= g && 3 > g)
                        return this.mE[g].ik.bp(),
                            jh.tr(),
                            c4.c5 = true
                }
                return false
            }
            ;
            this.lo = function(g, k) {
                return this.mE[1].ik.lE ? (this.mE[1].ik.lo(g, k),
                    true) : this.mE[2].ik.lE ? (this.mE[2].ik.lo(g),
                    true) : false
            }
            ;
            this.vI = function() {
                for (var g = 2; 1 <= g; g--)
                    if (this.mE[g].ik.lE)
                        return this.mE[g].ik.vI(),
                            true;
                return false
            }
            ;
            this.cG = function() {
                if (bw.bx()) {
                    cH.imageSmoothingEnabled = true;
                    for (var g = this.b3 - 1; 0 <= g; g--)
                        cH.fillStyle = this.mE[g].m3 ? mb : i1,
                            cH.fillRect(this.mE[g].fK, this.mE[g].fL, this.c1, this.c1),
                            0 === g ? this.xm(g, bw.bz(15)) : 1 === g ? this.xn() : 2 === g && this.xo(),
                            cH.setTransform(1, 0, 0, 1, 0, 0),
                            cH.lineWidth = p2,
                            cH.strokeStyle = cK,
                            cH.strokeRect(this.mE[g].fK, this.mE[g].fL, this.c1, this.c1);
                    cH.imageSmoothingEnabled = false
                }
            }
            ;
            this.xm = function(g, k) {
                var t = .08 * this.c1
                    , l = (this.c1 - 2 * t) / k.width;
                cH.setTransform(l, 0, 0, l, this.mE[g].fK + t, this.mE[g].fL + (this.c1 - l * k.height) / 2);
                cH.drawImage(k, 0, 0)
            }
            ;
            this.xn = function() {
                var g = .06 * this.c1
                    , k = (this.c1 - 2 * g) / a5.c1;
                cH.setTransform(k, 0, 0, k, this.mE[1].fK + g, this.mE[1].fL + g);
                cH.drawImage(a5.l7[4], 0, 0)
            }
            ;
            this.xo = function() {
                cH.setTransform(1, 0, 0, 1, this.mE[2].fK, this.mE[2].fL);
                for (var g = this.c1 / 4, k = 3; 0 <= k; k--)
                    for (var t = 3; 0 <= t; t--)
                        cH.fillStyle = "rgb(" + Math.floor(367 * (k + 1) * (t + 1) % 256) + "," + Math.floor(687 * (k + 1) * (t + 1) % 256) + "," + Math.floor(651 * (k + 1) * (t + 1) % 256) + ")",
                            cH.fillRect(k * g, t * g, g, g)
            }
            ;
            this.vy = function() {
                for (var g = 2; 1 <= g; g--)
                    if (this.mE[g].ik.lE) {
                        this.mE[g].ik.cG();
                        break
                    }
            }
        }
        function kJ() {
            function g() {
                if (0 !== y.indexOf("vote "))
                    return false;
                var n = y.split(" ");
                if (2 !== n.length)
                    return false;
                jh.xp = n[1];
                k();
                eD.rp(0, 7) && iu.y0(0);
                jm.vd(3252);
                return true
            }
            function k() {
                y = generateUsername();
                jn.bz(0).input.value = y;
                jn.wE(0, true)
            }
            function t() {
                if (0 !== y.indexOf("account "))
                    return false;
                var n = y.split(" ");
                if (2 !== n.length)
                    return k(),
                        jm.vd(3266),
                        true;
                var z = Math.floor(Math.pow(2, 48));
                n = parseInt(m.n(n[1]));
                if (0 >= n || n >= z)
                    return k(),
                        jm.vd(3266),
                        true;
                if (o(n))
                    return k(),
                        jm.vd(3231),
                        true;
                k();
                5 <= d ? jm.vd(3232) : (jm.vd(3265),
                    vn.lE = true,
                    vn.bs = -1);
                return true
            }
            function l() {
                if (void 0 !== y && m.iQ(y))
                    return jn.wE(0, true),
                        true;
                jn.wE(0, false);
                return false
            }
            var y;
            this.xp = "";
            this.xq = -7E3;
            this.bp = function() {
                aJ.setState(0);
                jk.rx();
                jn.cE(0, true);
                jn.rx(0);
                ji.bp();
                cC.rx();
                void 0 === y && (y = generateUsername(),
                    jn.bz(0).input.value = y,
                    l())
            }
            ;
            this.tr = function() {
                jn.cE(0, false)
            }
            ;
            this.xs = function(n) {
                return 0 === n ? jk.c1 : 1 === n ? Math.floor(.3 * jk.cw) : 2 === n ? jn.bz(0).input.style.font : y
            }
            ;
            this.wD = function() {
                y = jn.bz(0).input.value.trim();
                l();
                if ("password" === y || "account" === y) {
                    var n = m.z(generatePassword().toString());
                    y = "account " + n;
                    jn.bz(0).input.value = y
                }
            }
            ;
            this.actionWheelOnClick = function(n, z) {
                c4.xt();
                1 === jk.pV(n, z, 1, 1) ? t() || g() || (a9(10),
                    l() ? (this.tr(),
                        w(y),
                        dy.bp()) : jm.vd(4214)) : 0 === jk.pV(n, z, 0, 1) && this.vs()
            }
            ;
            this.vs = function() {
                t() || g() || (a9(10),
                    void 0 !== y && m.iQ(y) && 40 === y.charCodeAt(0) && 41 === y.charCodeAt(2) ? jl.vV((Math.abs(y.charCodeAt(1)) + 5) % eD.vX) : jl.vV(gI.xy - 1),
                    l() ? bw.bx() ? (this.tr(),
                        w(y),
                        dr.pa(),
                        jl.bp()) : jm.vd(3228) : jm.vd(4214))
            }
            ;
            this.y2 = function() {
                return !cC.xk() && !cD.lE && !na.lE
            }
            ;
            this.cG = function() {
                if (this.y2()) {
                    cH.imageSmoothingEnabled = true;
                    var n = bw.lB("territorial.io")
                        , z = 1.1 * jk.c1 / n.width;
                    cH.setTransform(z, 0, 0, z, Math.floor((gE - z * n.width) / 2), jk.fL - z * n.height - .72 * jk.cw);
                    cH.drawImage(n, 0, 0);
                    cH.setTransform(1, 0, 0, 1, 0, 0);
                    jk.v2()
                }
            }
            ;
            this.xc = function() {
                return y
            }
        }
        function kK() {
            function g(n, z, x, A) {
                l[n] = z;
                t[n] = new Image;
                t[n].onload = function() {
                    if (0 < x) {
                        var B, C, E = document.createElement("canvas"), G = t[n].width, F = t[n].height;
                        E.width = G;
                        E.height = F;
                        var M = E.getContext("2d", {
                            alpha: true
                        });
                        M.drawImage(t[n], 0, 0);
                        var H = M.getImageData(0, 0, G, F)
                            , D = H.data;
                        if (3 > x) {
                            var K = 2 === x ? 160 : 600;
                            for (B = G - 1; 0 <= B; B--)
                                for (C = F - 1; 0 <= C; C--) {
                                    var J = 4 * (B + C * G);
                                    D[J] + D[J + 1] + D[J + 2] < K && (D[J + 3] = Math.floor(255 * (D[J] + D[J + 1] + D[J + 2]) / K))
                                }
                        } else if (3 === x)
                            for (B = G - 1; 0 <= B; B--)
                                for (C = F - 1; 0 <= C; C--)
                                    J = 4 * (B + C * G),
                                    0 === D[J] && 200 < D[J + 1] && 0 === D[J + 2] && (D[J + 3] = 0);
                        else if (4 === x)
                            for (B = G - 1; 0 <= B; B--)
                                for (C = F - 1; 0 <= C; C--)
                                    J = 4 * (B + C * G),
                                    D[J + 1] > D[J] + 20 && D[J + 1] > D[J + 2] + 20 && 40 > D[J] + D[2] && (D[J + 3] = 255 - D[J + 1],
                                        D[J] = D[J + 1] = D[J + 2] = D[J]);
                        else if (5 === x)
                            for (B = G - 1; 0 <= B; B--)
                                for (C = F - 1; 0 <= C; C--)
                                    J = 4 * (B + C * G),
                                        200 < D[J + 1] && D[J + 1] - 20 > D[J] && D[J + 1] - 20 > D[J + 2] ? 40 > D[J] + D[J + 2] ? D[J + 3] = 0 : (D[J + 3] = D[J],
                                            D[J] = 255,
                                            D[J + 1] = 255,
                                            D[J + 2] = 255) : 50 > D[J] && 50 > D[J + 1] && 50 > D[J + 2] && (50 > D[J] + D[J + 1] + D[J + 2] ? (D[J + 1] = D[J + 1],
                                            D[J + 3] = 180) : (D[J + 1] = D[J + 1],
                                            D[J + 3] = 180 + Math.floor(75 * (D[J] + D[J + 1] + D[J + 2] - 50) / 100)));
                        else if (6 === x)
                            for (B = G - 1; 0 <= B; B--)
                                for (C = F - 1; 0 <= C; C--)
                                    J = 4 * (B + C * G),
                                        D[J + 3] = Math.floor(255 * (D[J] + D[J + 1] + D[J + 2]) / 765),
                                        D[J] = D[J + 1] = D[J + 2] = 255;
                        else if (7 === x)
                            for (B = G - 1; 0 <= B; B--)
                                for (C = F - 1; 0 <= C; C--)
                                    J = 4 * (B + C * G),
                                    D[J + 1] > D[J + 2] + 10 && (D[J + 3] = D[J],
                                        D[J + 1] = D[J + 2]);
                        M.putImageData(H, 0, 0);
                        t[n] = E
                    }
                    k--;
                    bw.bx() && (uY.bv(),
                        hx.l3(),
                        a5.bp(),
                        vv.uu([t[8], t[16], t[7], t[9], t[10]], [!g_isIOSUser, 0 === d, true, true, true]),
                        c4.c5 = true,
                        t[7] = y,
                        t[8] = y,
                        t[9] = y,
                        t[10] = y)
                }
                ;
                t[n].src = A
            }
            var k, t, l, y;
            this.bp = function() {
                if (void 0 === t) {
                    k = 20;
                    t = Array(k);
                    l = Array(k);
                    y = document.createElement("canvas");
                    y.width = 1;
                    y.height = 1;
                    for (var n = k - 1; 0 <= n; n--)
                        t[n] = y;
                    g(0, "exit", 6, "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFYAAABGBAMAAACkrn5fAAAAHlBMVEUAAAAiJCI4OjdcXltoameIioejpqPExsPY29j///9xarZIAAAAyUlEQVRIx+3WQQqCQBTG8TdOB5DUI+S6nRcoPIFhu1bBHGGO4Any3TYxAkWTv1DSYr71D4b5mOE9kWmszkeC/ZptT6Ocl+xj5qgtbVR1iZn9VE2wU2uO2Jryhm2h2OaKbdZgu/NKrXVK7f6q1JpaqTWFYpvrUtqhPTTYpst0aBOv2Drltlxh392iu0U1t5I4biX13PZvF7+zvOFWihXWlNy+aqZ/M3LcivXcds1xK9kKK3GYAVtYe+8CZ/c/7Br9blSNcgn75O/tE26TasUvH0ImAAAAAElFTkSuQmCC");
                    g(1, "victory", 6, "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUIAAABBBAMAAABWYLC1AAAAElBMVEUAAAA6PDlbXVqEhoO4urf///8hX3N2AAAEcklEQVRo3s2ZyZKcMAyGWdx3alLcSaW4k8lwZ9LjuwH3+79KlkljLb/czFJp+tYusD8k/ZItF/5y/a0F/dXb+KW472/cQCIbd8b4//+dDFu12/ByZ8Jkq0uHbRvuTFglwomOezx8j5/HxkrgTXEYqSxQyvcWCpVEhOG53p3QQTGfDiMUlppJxPXHEQrVxIT0092fEOaVw9Q8LpV5GysPJGUsWweojyCVCAgPIBQYc8nzwxEIvcYZjyQUmPv8kYQC68dhNoeWmOsD1Tyc/G5L+elvHLzs0tG3l7/PPn6KVJTfGxqpG0+9vXFW2w+ZGaoU0x3YrfwZP3dkrONijUK5ndBOLBAh2Wz8CwybMAESRPX4kDwZuGODMNkkjLoiwtLTyac8IXs2NpbJO2E0YVInhSH/c8LxolY1CVs+tFiEi2TqGW8lZqikTRlhLSYPGcIK2Ao/3gi/ilwiErQz4nIAJnx9xyJsga3w4xN3s6EbTVhowhJNbhCWyFaYcOVUvShpLZ+glfmREurZZ5MQ2wqOx/Q9k3YyeWNgJp0B4YgmNwh7aCv8eJp61U4mwT+xsJwA4Zarv37xm+ENQr89+/BCAwc93qXhRjmZpJeZ/Rs0YU1scU2MU1FkM/tKbT8kwt8+LB+8TtrT9dMCqHsrsyhYmdnfiYkEoaPBXRG/sPd8eunqZqfPmS1MHRGsfGLF5nX2Z4OwZWm6T15ihK3+/D7XBKFFcAErjzKVx3NTGIT8WZe+jRGSl0pdC7RUBqJW5D3P7O/iI9itDzx2Gla5oiAs6YwjKEBSKhOQMiDMnicGNmkUwc6V8sPTmHeyWAGpBELbgJWzx5c3Emqc0nIyya1Lqvax+BhhKfoE4/bdgHDR+6YOn6Zien0FK5fZpiInrITeRpWaL6qr5SwnUzGftJXTytUbCGszIzhjR8HcHKzTVNfqU9SHCGeRdAdjB1vgE4mWyuR1Q0QRLm8gDHsI9SErmg334HVD5EOE8w4vP2tnBrPxsICPeJ9SjDgESnkGpurMxkMEnUOVbT5Xy2cAEnN3U7rd8Kn5EGRscJOz5LqIunNoElbx+0eq3hev17IJRyNDwbpMGjwv3V5CsHOotRFtwhYWSmvn0BB9nfftbUq0txlV3rAJHTry6JVR+yG+f3/oVNDbhKiVYO+xWftkNQhPbLEW7bEr5WabsLClDM4p7Og/7zmnlPic4mVMZQj9xdzgkpUrmmTfctbr4VlvC/9hB2FvCoWtnM7A31SukJ1Qcl5+Audl2pMKOwidKRS2cm81WwHhmO85BOL8dQdhLZsxmNDhRSHhjb5NoF+xg7AwhcJX9nZ5lIRFvvcV6JZl2kHojZonVm7t4tMbG0ujfxio6+YdhD2MLbVyZZd9RVjhYo+6InEH4ck8q/KVezMt9daeA/exWc/h6oocoTP2Q/m7gKXIEZa5u4DAlp1uE5aWUHL3KbHIEvL7FFFsAouE+TYhlcqQIyR3UrG5QZi7kwoFCMT6k648n17v6n7uv9eL5/et9Asv0oTxJYkUxgAAAABJRU5ErkJggg==");
                    g(2, "defeat", 6, "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAABABAMAAADL6o5mAAAAHlBMVEUAAAAlJyU7PTtUVlNsbmuJi4ijpaLCxMHX2db///+Cup+UAAACo0lEQVRo3s3ZsW7bMBAAUNqyZWUzsnT1VECbhy7ZvHTwlqmAN6PoUG0CggzairpIyi1Nk1b629awTPGOpHm0DyE1WYJEPlHk3UkW6w5t7eMXEWczKHvN52QoXfcjHUoUi4PSbdOhtItkKBEekZPSLdOh7NKhtOlQ3nwRnaC8pENp06F0t+lQvsWi/O/4+uPXiJNljcbgvUb5G5ci3mmWeVyKqGLNW5MyGyh1ZMo41hIyKaJRh573u9JY5HDo1LMsjBOfBLq9/oC0Rg4L5UYdeuWi5HqDAZShyT9clAKGBzJlBgMLB0UN9CKMksOEyEFpYOFBpkxBpywU1AmZkrFThpv7HUYZwcjPQEGzj04RsOpnoJRwnGNScFo7h7JS16HqcmbJDIUzW0hrWstQVfQWlMkhXg655BzKkoVyOPn7EMDjUa4Os0SidsIoCxbK5tBWhV7FCZSRJ8RtT1M6mE2PYb/tE1EdQsnoFNCpizLudwqYDCiUqScdhlLyfunkeslCo+TMlKJvPkNvNASKr14JpayPV0mtZKFRfFVcKKU5Cir4rYRAWXtq21CKetY31uVxiiI9FX8gZap+F7BrP2WC3oMupRSqZprBeeunlCiNXkopVesTrWShUDJpLS7sgd9GwYG/cn1B8lFGVWctuc7PQcao1hTK9YdP0hjgCykTo1579lLM7RcHxSg9VZYMoWw5KFfOL58BlHbOQdmYDa+CKeC1/2yKpbqvgyk1B2VsafgplNI6b6smVnH7wJq7h5tO2bFQCvdNkintkoVibX8RRtkJFkoDUmCpRwkqpZ3zUMDsgDObStkKFspUj9tqEr+EUO4EDwUt8Ez/ykKj3AkmSonGWGopn0J5WAkuSoX+KG60ksVL+Xm/8kXuAAoO1RvtOkT5B9F51EylDpRdAAAAAElFTkSuQmCC");
                    g(3, "orders", 6, "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAbAAAABIBAMAAABl1r3ZAAAAGFBMVEUAAAAqLCpGSEVkZmOHiYanqabJzMj///+NZwUtAAALoUlEQVRo3t1bS3Pbug6WLMlnq7SNs3VvW3ur9jbR1m6daOu8rK3tONb21A/x7x/wDVCU3JPp9PaGM5mJ5U8gPxIAAZAOAtw+XG8ZtO3Dl6C1/T9iriumWv3wijBvFgy15/evBRNVckHTUC5unb0OTA8w9feh+vCVfxq+BkxY0JXka3xIWzFnP4EJ/gRMcMXYhjwLbxh7asV8O4mJH35Gzi/AfFxsH9JWzDvg6qxiD+Zj2oKJ1ycxJZuflvMzfZ3AjLjXOKYtmLD02B1Y5jH1Y652pzAR9BoE70/ICbLTfXWPJ5b+cOPHBOeM3Yaudoqn3k9htTuFScCQ05vtsFNO0Juf7Kt7PMBOtokXA18/Bcmh4VGuEH2BUS1mu07Mmy8feIcL3V+bnCBenuyrezyJ3sIOPgzQhEUdseOwufi3BKNajoh5MGYaGcs65QT9/cm+useTg31NezfIz2MMDAScQeyoJ28j80hizPax68JEhlfdKSe8qernYXdfJ8ZTCXrc78+bGNAswReYbYaNHXBCMNp+dl2Yngnf9l1yuHOGCc86++oeT6y6iNGILAbWU2r0x4o9N7R6TzHyf0zMgzGquO6SM6IOzd9X93j6eqVKa2QWE1bKFIJ3lbMrglbVKcXIBdl1Ysaa2LxDjlnXSUdfDSujGJibVPGsGxhYx6N+9qmxc5eyX4ThHpUQa2KMr5p0yBk1HJqnr0ajmJHmM0LENAbmd2WeXTLHbgeSA8YUgljcgTHeY9ghx+hrnbb31WgUk+s56GNiChOQlYc1u7f728e7SL6BMCJV2AXJBK89xYQVdYo+TM+mUXMP5t7H6qsrxxAbePqKkN1xZpVhFi2qNaxPRjEDJonZLaiJKRrEGpjEEls1MZFv1QZcA4gcvypKDMCJ8oWwZncifLgUfY54FxhTKGJ1irYXBzNqEnMxfUvs0MT0sX2aXYktHTkDHQIUxC4FBtRVioin1s6A2eVWaokIn8a2G6GJnBiKyVyMXo4jGRbFjC2xYxNTOP5JvbF35CRquUH3925fQammvqgnhtleuD5h/WF1tBgz05yY1TwXo105DmQdTFKhWsWyganswwD1XDtyIjUrfUZUV2CC6qhVrP6sl/JW+axaELcYGb0oYiieoxjO7KZi2yl11ATTx0WYv11MYj3q18ftdvug3c3EkVMK7XpbOZrLMSZS7y1Yrac4ja2SwLKjaF55ck4M2RTFgCw1C4/ToAWTbFFbupgLmNMolWGenOHn2XUGLH44ckb8K16Bq2emfZOqmphF7EHmNrVRk471BmxuMdotCGI2ZqYYmMEn/tXZjRXoYsIz1BpygMKuz5ONHK/rhZhpLCe8Yp72xDEwUrOIfM2mJNz5ISxxbTE6IxHE7JsEI/zL82wmC2JTP8bfFIYr3Rx62oR4vEepoFjODfM2WNI1zIk1Fb5mE7NXqa0zYnuLUSqqiO2tgiJMr8SdGEskmMGWtGeK4QbIOe2JJbJU+Bkk59zPi+0BA84QpQic2eeAJty96mAxI0LMPCYYRz10QYxgxhRTUzmggAcuf17wwrXxn/zjHskJqxZi9ZvqIBwIYrbga5aQBLg6WkxJiFl/jjB6UQ9aym0TIyaIm7z6O1I53NkD9bonAkktEMxOTIGRk4gy8MxtMMYM3GZ1dItcSx0RqfC0rA3G9iGJ2cDcYtTLz9+ia2UbaQPDjfjwEcwcCK5zVDITGN7LpJJElvF2qGeojoQSGTlls0an+E6AenVwktTFMKIhQVEbzJVDzBiQxeB6WEz2aSSHL8oBkGueKebICwlMX3FYwhwNIfkfalvKKr7naTkR82fasM6Tog5s+p6SMNeOKGcoJaXEzFZmMTlORUZ4yXLkbdqICUwhF4tlAEjE+2pCuX4ejZyE+UsjIHeSs8Dsdee6SGWGr8x+bOI2o4mGmFYzg1EbxYrkJhNHTjsxjgnVYsHYNtKoD0q/hdmmWs4Fw/nWf0wDedkYXv5h1ExVjPTC69jxgmlM3iCmcymDSWjqXKKajpXTToxjxHYlNO+99sJrNV+c81zLIRH9ud07uIZeADEdqL0tVSmnMBu4bH/pYM5Wnyyxg4NRL6dBeB9nVDH/QkFhGzGOGau9GAZgNuC5VBa+a++0HBLR52SHATmWGA8YePlNuw5jmGZAKDc0xBRKY5Qacyd9SPYfvpZoAX+WWCmjJ7ozDYWZcVJHJSciJlZg9FwQ+4ELrZvUeL5brB7urBhiCqYxMUPE6orkyEQVrx/ve4+P0/jxcfLp8XGI+xpxd+3uuQeh1TWfDCUnQUUwSuzI5QQ4KH9b1UOtb/YETRsr0kRE7EgwA7sBfkMLvG84j5YmMEXda0YTKzFnfHdSckYis3nzafv8WSZd2sYehlxOQFPPjXYdKNnS7hVHZjsnOsnt4E15CuWSNcb0/uttnw0mvA88wVI24t9dploOLyX2RKB9FKUQMmk5czboVAdNqLyoN8TCT2yNMSXOiT9ahRoiTNISuWI5Y1Y1lVGVphSG+47SaLpDDDZoJ6SKaRiEQqGo8hMTLk+HORWpz9hjlwnCDDqIaUw0gbHN9Ou1UJZlssbjUbu3UgiHGIRUNjDtTayDwNUKFXSS8SBiAqswNn+6Q5Uftd3p4JUHWs8wGr7hLCCMreTfmgTK0V28tIXXbIDctMTAd3OR1dTCHBxiQN2mEgP4TzmIAznhkGlC0UZsbzERSmNTrL4rnLZAbpQ67r6Uw7aYMWhvNdGvy6Bqj8eTiHyS1ffvR3zeKDHA2EQTtqAntdOTYzeV2FFHhYkBWid/katafUvMJojtxCym4uvBty3s7Z1kNAtu+BlKxERCQs9J9rY0wA1C7R9rT7r+iRBbYxdwZ9L1GBt7fGsdxQqXBtqJGUzEI3ScQYugCo8HFbWbxGIxwBWq+DQ8hymekOrLWYo/p6bAglfskKAkcYWLMO3EDCYSWeZSRgtHPt3zqKrxeGxRO24SG+hKL7X0ibNn0tKaf1+VGBOOPXy/gFA8Mw9WWE47MYRZwVfD78IAduJqURZnuK+xDoH5CbRrY6JSbP19Ts9X24qhvlMrhelZ++Ih1dCs2BzLaSeG+yo5Yi5sY87n/ED7GssVO7usxDZJiZV1gMvOUdNz4JLyWUtzStPaq36P76zzmOPSdCsxXL7mLiFnf+dySImpi2jMiDsPcTFMfEWIyRK3PSiQvn7t5qP6EOBy6233GFM6Z3m5ibvQYUIrMXzgAFTOIIw/r2Rwf67HpTHw5kbeLRU7KSEm1dke7QyangMf27RU8W4xJqdneegEEB3/tBLDR0Q94RN5xUyEg8EbZzwxLfAV9IbGCh/8yQVzajvooK3nLePV5DBuwEhIdm5TAIOJZhWrZ/DsGv7A8Dewyrx2OJvSQ73LDFLkaDussiusRwZj4i1x940QK/RemOEazsQ9pjeYkY/YmmBihtNv42dXCJO3VDnZwT3Ordjygi2LA3f6u8Z4VCxx/15x2blj1gfVekGeWg+zI99wMooxYe/zXWTvIWcI007MPVwveb3t74JtYErnzfGU9k4TJaYP183VAl4ORIbfvH5QeEbjYM7RBm3+3WDM21lLm7rXIZJNrA4nvOMJZ9d+Yvo6hLwMIuxclBZWrRdGPJnU3MGERZMYmOELLqfoWw4VNg+Kib3EzAUWeX1nJA0GzGLVesUnbJQiuAgHoy+M1wtUxnvBdSLtt99t0YpRjJ+YwcgLV7nycCNy+uJcyhp5XIeLCb9uCfWH7GUXwERbZF0YLzF0SUxckesrn9r71nGNLnLtIvNdxzt7e71Q514PX85efGXvNCbyEUPX+sSlRl+J/2WXI38jpmgSwxh5DdUzTS+7zvrbMGvQxQYxcnVWXBHuXQ9/9rLzH4Kpp8GNS8x5899eT//zMIqYez39F1/y/x9gJLEG5lf/LOP3Y262d17MH/djm3+L4fmu90c7r/ZnVq/3h3Gv96eMwav98Wnwqn4u/A/xnpi6RePJDQAAAABJRU5ErkJggg==");
                    g(4, "crown", 4, "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJsAAABqBAMAAABZgT4DAAAAJ1BMVEUgIi0xOi5GUTMadCZ3bkARrRyhk1AA1g/AqzAA/wDVxWXy2D/25XVxgVVAAAAGjElEQVRo3s2az2vcRhTHn+SV14l9UEJ+NEkPGygBEx/UhhJ8W0owJclBLZSwtw2YUGoflJhg9uaWUgq5rC2E6M0pJYdmD40xZsn0EAfjw0Z/VOfNSJr35LUjKTr0HcxiTT4785033/c0DvxRJp7fufOozLghlBm1ATLuNoWLXcRZg4ZwAahoN4OTk2uNXnXBbgYXArwW4gCg1wgugPNCRh+uNYLz4Tbi3pQQrxxuDXEH4DSC81C6/y0uXex+Q7gAbjS5FdvQQlwXFhvBRQAPhDgCGDRzZj2wVlYBZhqygGfaApabMigPaSUmdwpus6BS1JG0wu82S+M2wB4UNxfOFSd8uSQugouuU8zkQg4H1s1pWk7DBXNi7PLpycVa3FHXxM9OOZwnz9QWS9kYwGXmGcnEHkM5HOCJanM/bvXZmQjn8JgMyuBiSw7daxf8+B07sdvzpXFTZufBwyOWd2p2nUFp7frLXLpRwo6s0s4qubOz0ioHXLok6bLEcB+cvrPPv7S+pl8NFs8yKV2S7DLxnsIFvtVfKQTiIjyRl3lLMuBJvJQkXLy4w3oWPIV4DCVOH3C2lBBOSJdMuHjcmn2FuIq4UNsP/e6h5bBDZyUyOnR1T602N1jdFEmcB/Zr8Zi1DMG3tF3ahlnEMfG8FYeJa62LvwAWhxAr65aVgAz217rLdCWfI+492Z/IGtvsSC+prsMZQqQLyx7dTO/FG4cOXkfcMXGBp3OCmEQM1gdViO0hbANmuHhL+i15zMZmtal0SUJcQGZ6t0ekm0WEcCGAtIrKzwYn52tWG2rpksS0UJE81lvLJBHUjKRgiFP9keiYPIjk0z3H6LygcYe5HtIRxT+mPduBeaFbNj/HkdntzKObDcz517jjXA881cRzQljIZzfU6H/B4AL8gswEdBKryJIpslF4h+Bm0wUGkH7eJ3nsY+Zkq1XnX0fmArhWMZ4hW2Hr3bQwUVS/RZPUeyHMatX515FZqKc6KqCnEH9zCDPyVHRwegf00Lpa2EUuXe4Caq3MjH1ofRBvXWhLnHxruHTPJW8hsR6uV0uky1wg0JnV79He3pYI6ElcVHwJibSwOu+JdJl4nRfqMUm8uKMQjvI71dGQuh/qpBRbV7l0qQuELf2YlhP10ib3Xbnx98CKfLoYsT+jpFsyOCWenz12WHEC61FWKzZ96k/BA5Gutsek0+LFrl4rzRQUzBmY0rND7dNLx4uttpTOThImXpgqK4TF3PgaqWQRfV91s/EHNpcOxXO829ljU2fDrDikuJi8r6Z5olLrrmuyTosHVv40zxS1sQNaZ12zG1G+GrFnMemU55mneaaowsPKtmdez3fm8n8gbWaW0eRqIVM2z5QNU7kyXAC35Dp6NE+UXfO1qtV+lj1NMyWSK1tNl5bhhrDwMu1//TWjTubrJjpgZdPT1QfL9PXMHDIcOnhXyRcDndz1Iu4Q4AbbWimcLTVYZjhZz5JjF3uLqGU2trgRmMmumR62qN9J3dblTHoMJzNFCQOX/fmM9suUySXJS6PenhMj7T5u+IA3ZB5O5CXu0ZX0y/fl3oxO4uT0IFV3DJgQ1/HwWYX+zld7+Fi1Gl/8Lsf+Kv/ZUjIlMJV/RNhv36hvV0XJKeAC3Tk81uYnuzcZs8nUwDHWhXTgFd1vtAu47fRw/gl5tEbTcZgCWdxKk/tcARdlc3nVSUdeOo1m1mD/lPUHywVcbJxo9aYcefF+cka8UkNWTG73iq02zbHJ36PkI8GG5I2pwXm67aoTx7n3Gpw/PS3KxFFeaQwub5Sqx2FeVQ0uPC3NPh67+eufwUW0PleLbl4GDS4+6W1lw817QfJO1oFRPdrE9OAE5xeNvHqeUFxqAtXjvWmXCG6bV+jy8c5cihBc7Uzpm05zSFtS+1PzhL1tY7moE+TNlOJqmsCEvH5RXM1MOSKtJsXVNIFD0lZTXFgvU3bJ5TnF1TSBPumDKa6mCZBXTX4t49YxgQl5N+Q4v06mHNM7DoYL6pQLeuPAccM6W8tu4hiulgn06Y0Qw0V1TKBL73MYLq5jAi69muL3dx6sPCkT68kEf07wA/t7F8f5UC7Oq773/JH64JyKC6B1r0w8TCb4cyI/HLKbN47bqZ4pu+z2nONqmADLkwKuhgl02L1m4Wa2ugnAWbjK5eKY/1WkgKtsAjxPTuIWPsEATuBCaD2pFIU/nhVwEVSO3hm4uDpucNYVvleVNnPmXwSiHyoG/98Hw/8AAslhvSUnOcMAAAAASUVORK5CYII=");
                    g(5, "arena", 6, "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAABABAMAAAAHc7SNAAAAHlBMVEUAAAAjJSM7PTpUVlNqbWqHiYalp6S/wr7W2NX////RSpP4AAAD9klEQVRo3sWZvW+bQBiHiSGAt6hdki1Dh7Jl9eapkjdPrbxV6lCxeaw3okqpbqNuzMd/2yRw3PvJkQVYYhHgnvfer9/dBQG4WnftgwWuawBwXAIgBQB/lwDIAEC1BEAOAJolAAwAaB/mHz+C4y8RhQkCKOcHuEMAl/kBDgigWTgG2/Z+7vFDPH77fW6AmAAUSxbi1+t5boAdAajnBjgRgHbm8a/o+HNLgiEGfy0UhUMMfrU/zvMCbOy4HxeSBKehBJtlirGze9AlW1GqtM2fH0rp6HroCTWzNcnpTMmxa+f5HZcEORnnyQ9gewkFyJUcS1zsp1wSUID2tx/gKAMYJccy14MSLgkYQOeeUYCLCBBqOZY7LRhxScABzl6A3gcEINFyDIY+lwQcoPEDFBLAWhE8IQQ7MUnAAd58MA5wkQAOiuxOYBM+sGIsABy9AN0QBMAosnsNx7xjkkAAKP0ABQdYabL7IBpWjwD88wNUHCDWZLeBPditkm8wwMuvD1+Mez8VU/qE3IwBUkV2r5AKWTFJkIPymUwHKBhAV2VzJrtjPOmGRiEECKcDVAzg7X9NxmR3ih2TQ0dTgGg6wKsPMED3aspe2+F9iYyWKwjwmQWhDlAQgC66zjGyLmCZ4yakYQCffo6lYUUAKgLQmx4y2U2WQ3FLJMHUQkQBXt5HANb5hkiCa1L9Q1quppZiBlBgABv+OZEEvKCQvSoOUAeTAGoMYHq/bkjsZCpA9b52zADaLQSI7EMpkQS5CtC8T5AAgEt35xECJHbcmEgCowL0TXOqJAMAZfenhgBrO/MhLsaRPn4fhRSgvvED9H7dAYDDkGkGye5kBKCUAJ7uAz9An1qGlfiH4ZmjuDvVCntVGKDZBxMASDYMTa5xpbcUd6ekXQIyA80WAYiluAxu6Wdi2brRGOxLUw+w+obfHAeIvGWjkXenhL2qoRfsUHKMA0Af1NIejC288ShAgQBs0X6cAnBLAE6ydSOFeGiarhsaGBoegIgAKNYJM8Oi0AHshEqoAQCTa3Igg2T3aRSgxQAJZPcBpAggVay7Ek9JDBKmDmAF88AHEKGRMsW6WNyazJGfcjYZytqwRgDuK7XS8vboK6V4fnTGAHfiqwoAWuIYJcc24motRY7J+YQVUwBCcF9seWc0M3vx+KQhqtg4Li/A8PF6+OIRLYUqNDP38gHSFgMc3LLND5C6+2tspbHWXStnJEgSQIDUVTE/QOjuH8Tl5hbMdaWcn5TiyujVfX4A+2YNTEYbo0cgBp6VU8wLBrCFq54EkNr7K2Jlaq3LlR2DDLoGAWyGjjgBILT3Y7zadItsbc8khU0TASTD8xMAetfXrGr2sdf8B96/CJXN/8t1AAAAAElFTkSuQmCC");
                    g(6, "territorial.io", 6, "data:image/png;base64,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");
                    g(7, "youtube", 7, "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKEAAAAkCAMAAADW8qrvAAAANlBMVEX+AgDxYgDjhgD/eXnQpAC7vAD/oaMA/wClzwCH4QAx/zdf/1ty/3Sf/6D/3d2+/77d/93///85QMf8AAACr0lEQVRYw8WYWbaDIAxAsdVqAzzi/jf7GBIGZxxO89GiUbgGEkJEH+Q7DF3bti8rjRPhxTftLavpuuH77X8gwv10BLQrTfsEpHECG4TwEhUy0ItKW1Gh7Zp6AwF0KRP16GSLsApQCLKidt1igE3NZZFjKZWEXR2gaMguaSwPa54jbCoJ2Yjo+lWxpR8jhFpA0dH6jlzbIzhCdOIf8606wm814atPq8+whXDXY+WS+Y4QDtWETdYxHlmGFwm7akLRZwsRaLrVc4TtAsL7vUkIWbxRRBrCngu9xArSinvS/cuccKYhQpletjrXl3ZasRQNP+Pfe9+ZZZhd4EnW5KmYHNxwVFIZ4UwTCP1U0GqhC3+5QjiOn11CPxQGj9EJ0Io8QchM6fMIcZVw/PvsEfpOAxkUMQ9PEObvZh87KtGsEY6rU81bs46zg4SLoNiI1YRaYvGECl2aLcI1Rib0Q2gM42HuN7qeUFOEtV8HZMvwv2ikTzLyZ4PQj2WK5U62NCc8Jd2ImcghwiUzRkI/wWHcOD7nPCcI2ZhxC/BPXiJUaXWrOwjxDOHmLLMXxlhzD6EpCbc9ZdOXadF5172dEJUK83Il2jBXCmE3Eka5ErF5EPMbwgO7Xp5e30+IJBcyh2cJzQ3ZV0GoniM8n8HeTziN2DZH1PrCKaAghCd2PZ/enT9JlYQ9D8dHQFNPqMYskUuEp0+jE0IaVxakCJQt54SswYIQZci+MGVfwZaitihSuHJGSMF7MQstCWea4tpM+tKiHy4sw7zcgMWoNIdOOyWcaRIOnSAAs5T7dGVpRpi61dmOOCqYEs403nQqf1dyXwjnq3NZXU5yMmbsFmA0ZJdGhmeAS3RJA1ET6nyg7c14GtW+L8UVzuEo4zMVzgM1WKoSU5m44TJxw0VirhLDL6rE/6vBvdrCmmWnAAAAAElFTkSuQmCC");
                    g(8, "googleplay", 3, "data:image/png;base64,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");
                    g(9, "discord", 7, "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAyBAMAAADVdiTZAAAAG1BMVEUA/wBI/0lu/26P/5Cl/6O8/73R/9Hn/+j///+iRuwXAAABJUlEQVQ4y83TvW7CMBQF4BsKdKVIpYxIRaJjVLUSI6JDGSNlCCOq1JC1f+CxFIL92D22E+di/ABciZB8seRj35joVZ3VN1FXBSqhRYgPJEIsSQXrAnmjL2uP5Usm81z83Bec5WM+J9T4vS8Yfzz1yFQ0v2ackKsrxr2G7d4ZPjK1O214z3no+Jdz1/EKTy1NI/w6jmcIID6JJirGe8cYdIdGIcQOwx3j/gEpI6X+qoRkGqrnd6OXFR/NRAcdOWFc6hDPera0Xk/Fozo1ck4bHsSVpg0jYJSlervGW9zWSdQXhhXozlbGek1uY9/s2hRWect7ucnsf5ld7DfosX+kcsv+AdwtDfvHdW877x/u0raB6Oa0qG35rKZhbokg41sKclQEmTr/f+SUPtWxuyYAAAAASUVORK5CYII=");
                    g(10, "insta", 3, "data:image/png;base64,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");
                    g(11, "emojis", 4, "data:image/png;base64,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");
                    g(12, "flags", 3, "data:image/png;base64,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");
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
            this.bz = function(n) {
                return t[n]
            }
            ;
            this.lB = function(n) {
                for (var z = l.length - 1; 0 <= z; z--)
                    if (l[z] === n)
                        return t[z];
                return y
            }
            ;
            this.bx = function() {
                return 0 === k
            }
        }
        function kL() {
            function g(D, K) {
                g_pixelOwnerType[D] = 0;
                g_pixelOwnerType[D + 1] = 0;
                g_pixelOwnerType[D + 2] = K;
                g_pixelOwnerType[D + 3] = 0;
                k(D)
            }
            function k(D) {
                if (!hB.hC) {
                    var K = b5.gF(D);
                    D = b5.cF(D);
                    hB.hC = K >= h1.u6[0] && K <= h1.u6[2] && D >= h1.u6[1] && D <= h1.u6[3]
                }
            }
            var t = [224, 224, 224], l = [[172, 172, 172], [144, 0, 0], [0, 128, 0], [0, 0, 144], [128, 128, 0], [128, 0, 128], [0, 128, 128], [196, 196, 196], [0, 0, 0]], y = [[4, 4, 4, 20], [4, 0, 0, 27], [0, 4, 0, 31], [0, 0, 4, 27], [4, 4, 0, 31], [4, 0, 4, 31], [0, 4, 4, 31], [4, 4, 4, 14], [4, 4, 4, 13]], n, z, x, A, B, C, E, G, F, M, H;
            this.bp = function(D) {
                n = new Uint8Array(g_unclaimedLandIndex);
                z = new Uint8Array(g_unclaimedLandIndex);
                x = new Uint8Array(g_unclaimedLandIndex);
                A = new Uint8Array(g_unclaimedLandIndex);
                B = new Uint8Array(g_unclaimedLandIndex);
                C = new Uint8Array(g_unclaimedLandIndex);
                E = new Uint8Array(g_unclaimedLandIndex);
                G = new Uint8Array(g_unclaimedLandIndex);
                F = new Uint8Array(g_unclaimedLandIndex);
                M = new Uint8Array(g_unclaimedLandIndex);
                this.r1 = new Uint8Array(g_unclaimedLandIndex);
                H = new Int32Array(4);
                H[0] = -4 * aZ;
                H[1] = 4;
                H[2] = -H[0];
                H[3] = -H[1];
                if (dA)
                    for (var K, J = g_unclaimedLandIndex - 1; 0 <= J; J--)
                        K = dW.iq[dW.dX[J]],
                            D = as((y[K][3] + 1) * ce.random(), ce.value(100)),
                            n[J] = l[K][0] + D * y[K][0],
                            z[J] = l[K][1] + D * y[K][1],
                            x[J] = l[K][2] + D * y[K][2];
                else if (dr.ds && dr.dt.ya)
                    for (D = dr.dt.ya,
                             K = g_maxPlayerCount - 1; 0 <= K; K--)
                        n[K] = 4 * D[K][0],
                            z[K] = 4 * D[K][1],
                            x[K] = 4 * D[K][2];
                else {
                    for (K = g_unclaimedLandIndex - 1; K >= g_playerCount; K--)
                        n[K] = 4 * as(64 * ce.random(), ce.value(100)),
                            z[K] = 4 * as(64 * ce.random(), ce.value(100)),
                            x[K] = 4 * as(64 * ce.random(), ce.value(100));
                    for (K = g_playerCount - 1; 0 <= K; K--)
                        n[K] = 4 * D[K].xd[0],
                            z[K] = 4 * D[K].xd[1],
                            x[K] = 4 * D[K].xd[2]
                }
                for (D = g_unclaimedLandIndex - 1; 0 <= D; D--)
                    K = as(n[D] + z[D] + x[D], 3),
                        n[D] += yj(K - n[D], 2),
                        z[D] += yj(K - z[D], 2),
                        x[D] += yj(K - x[D], 2),
                        n[D] -= n[D] % 4,
                        z[D] -= z[D] % 4,
                        x[D] -= x[D] % 4;
                for (D = g_unclaimedLandIndex - 1; 0 <= D; D--)
                    n[D] += as(D, 128),
                        z[D] += as(D % 128, 32),
                        x[D] += as(D % 32, 8),
                        A[D] = D % 8;
                this.yg();
                for (D = g_unclaimedLandIndex - 1; 0 <= D; D--)
                    B[D] = 32 > n[D] ? n[D] + 32 : n[D] - 32,
                        C[D] = 32 > z[D] ? z[D] + 32 : z[D] - 32,
                        E[D] = 32 > x[D] ? x[D] + 32 : x[D] - 32;
                for (D = g_unclaimedLandIndex - 1; 0 <= D; D--)
                    G[D] = 235 < n[D] ? n[D] - 20 : n[D] + 20,
                        F[D] = 235 < z[D] ? z[D] - 20 : z[D] + 20,
                        M[D] = 235 < x[D] ? x[D] - 20 : x[D] + 20
            }
            ;
            this.yg = function() {
                for (var D = g_unclaimedLandIndex - 1; 0 <= D; D--)
                    this.r1[D] = 280 > n[D] + z[D] + x[D] ? 0 : 1
            }
            ;
            this.gF = function(D) {
                return as(D, 4) % aZ
            }
            ;
            this.cF = function(D) {
                return as(D, 4 * aZ)
            }
            ;
            this.f2 = function(D, K) {
                return Math.floor(4 * (K * aZ + D))
            }
            ;
            this.hk = function(D) {
                return this.yk(D + H[0]) || this.yk(D + H[1]) || this.yk(D + H[2]) || this.yk(D + H[3])
            }
            ;
            this.hi = function(D, K) {
                return this.yl(D + H[0], K) || this.yl(D + H[1], K) || this.yl(D + H[2], K) || this.yl(D + H[3], K)
            }
            ;
            this.bE = function(D) {
                return 208 <= g_pixelOwnerType[D + 3]
            }
            ;
            this.hp = function(D, K) {
                return this.bE(K) && this.ym(D, K)
            }
            ;
            this.ym = function(D, K) {
                return D === this.bF(K)
            }
            ;
            this.yn = function(D) {
                return 208 <= g_pixelOwnerType[D + 3] && 224 > g_pixelOwnerType[D + 3]
            }
            ;
            this.cU = function(D) {
                return 224 <= g_pixelOwnerType[D + 3] && 248 > g_pixelOwnerType[D + 3]
            }
            ;
            this.hj = function(D) {
                for (var K = 3; 0 <= K; K--)
                    if (this.yo(D + H[K]))
                        return true;
                return false
            }
            ;
            this.yp = function(D) {
                return 192 <= g_pixelOwnerType[D + 3] && 208 > g_pixelOwnerType[D + 3]
            }
            ;
            this.yq = function(D, K) {
                return this.yp(D) && K === this.bF(D)
            }
            ;
            this.b6 = function(D) {
                return this.bE(D) || this.bG(D)
            }
            ;
            this.yo = function(D) {
                return 0 === g_pixelOwnerType[D + 3] && 2 === g_pixelOwnerType[D + 2] || this.yp(D)
            }
            ;
            this.bG = function(D) {
                return 0 === g_pixelOwnerType[D + 3] && 1 === g_pixelOwnerType[D + 2]
            }
            ;
            this.yk = function(D) {
                return 0 === g_pixelOwnerType[D + 3] && 3 === g_pixelOwnerType[D + 2]
            }
            ;
            this.yl = function(D, K) {
                return this.bG(D) || this.bE(D) && K !== this.bF(D)
            }
            ;
            this.bF = function(D) {
                return g_pixelOwnerType[D] % 4 * 128 + g_pixelOwnerType[D + 1] % 4 * 32 + g_pixelOwnerType[D + 2] % 4 * 8 + g_pixelOwnerType[D + 3] % 8
            }
            ;
            this.hq = function(D) {
                g(D, 1)
            }
            ;
            this.ys = function(D) {
                g(D, 2)
            }
            ;
            this.hh = function(D, K) {
                g_pixelOwnerType[D] = n[K];
                g_pixelOwnerType[D + 1] = z[K];
                g_pixelOwnerType[D + 2] = x[K];
                g_pixelOwnerType[D + 3] = 208 + A[K];
                k(D)
            }
            ;
            this.b7 = function(D, K) {
                g_pixelOwnerType[D] = B[K];
                g_pixelOwnerType[D + 1] = C[K];
                g_pixelOwnerType[D + 2] = E[K];
                g_pixelOwnerType[D + 3] = 224 + A[K];
                k(D)
            }
            ;
            this.cW = function(D, K) {
                g_pixelOwnerType[D] = G[K];
                g_pixelOwnerType[D + 1] = F[K];
                g_pixelOwnerType[D + 2] = M[K];
                g_pixelOwnerType[D + 3] = 248 + A[K];
                k(D)
            }
            ;
            this.yv = function(D, K) {
                g_pixelOwnerType[D] = t[0] + n[K] % 4;
                g_pixelOwnerType[D + 1] = t[1] + z[K] % 4;
                g_pixelOwnerType[D + 2] = t[2] + x[K] % 4;
                g_pixelOwnerType[D + 3] = 192 + A[K];
                k(D)
            }
        }
        function kM() {
            function g() {
                for (var C = 0, E = 1; 5 > E; E++)
                    C += z[E] % 1024;
                return C
            }
            function k() {
                for (var C = 1; C < x - B; C++)
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
                for (var C = x - B - 1; 0 <= C; C--)
                    z[C] = m.n(z[C]);
                z[0] = m.iZ(z[0])
            }
            function cookieSetter(C, E, G) {
                var F = new Date;
                F.setTime(F.getTime() + Math.floor(31536E6 * G));
                C = C + "=" + E + ";expires=" + F.toUTCString() + ";SameSite=Strict;Secure;path=/";
                document.cookie = C
            }
            var n, z, x, A, B;
            this.bp = function() {
                if (!(5 <= d || g_isIOSUser)) {
                    B = 4;
                    A = 0;
                    n = [];
                    x = 10;
                    for (var C = 0; C < x; C++)
                        n.push("u" + C);
                    z = Array(x);
                    for (var E, G = document.cookie.split(";"), F = G.length - 1; 0 <= F; F--) {
                        G[F] = G[F].trim();
                        for (C = 2; 0 <= C; C--)
                            G[F] = G[F].replace(" ", "");
                        3 < G[F].length && (C = n.indexOf(G[F].substring(0, 2)),
                            E = G[F].indexOf("="),
                            0 <= C && 2 === E ? z[C] = G[F].substring(E + 1, G[F].length) : 0 < E && cookieSetter(G[F].substring(0, E), "0", 0))
                    }
                    z[9] || (z[9] = "0");
                    a: {
                        for (C = x - 1; 0 <= C; C--)
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
            this.y = function() {
                if (2 === A) {
                    z[1] = 0 === z[1] ? Math.floor(1 + Math.random() * (Math.pow(2, 30) - 1)) : z[1];
                    z[5] = g();
                    for (var C = 1; C < x - B; C++)
                        z[C] = z[C].toString();
                    z[0] = m.iY(z[0]);
                    for (C = x - B - 1; 0 <= C; C--)
                        z[C] = m.z(z[C]);
                    for (C = x - 1; 0 <= C; C--)
                        cookieSetter(n[C], z[C], 1);
                    l();
                    k()
                }
            }
            ;
            this.a0 = function() {
                return A
            }
            ;
            this.nZ = function(C) {
                A = C;
                this.y()
            }
            ;
            this.x = function(C, E) {
                5 <= d || g_isIOSUser || (z[C] = E)
            }
            ;
            this.g = function(C) {
                return 5 <= d || g_isIOSUser ? 0 : z[C]
            }
        }
        function kl() {
            function g(l) {
                for (k -= 2; l < k; l += 2)
                    t[l] = t[l + 2],
                        t[l + 1] = t[l + 3]
            }
            var k = 0
                , t = new Uint16Array(32);
            this.bp = function() {
                k = 0
            }
            ;
            this.dF = function() {
                if (0 !== k)
                    if (0 === g_isPlayersAliveArray[g_localPlayerIndex] || ae.zD(g_localPlayerIndex) === ae.af(g_localPlayerIndex))
                        k = 0;
                    else {
                        var l;
                        for (l = k - 2; 0 <= l; l -= 2) {
                            var y = t[l];
                            if (y < g_unclaimedLandIndex && 0 === g_isPlayersAliveArray[y])
                                g(l);
                            else {
                                var n = t[l + 1];
                                if (y >= g_unclaimedLandIndex && lh(g_localPlayerIndex) || y < g_unclaimedLandIndex && lm(g_localPlayerIndex, y))
                                    g_isSingleplayer ? triggerAttack(g_localPlayerIndex, y, n) : iu.lW(n, y === g_unclaimedLandIndex ? g_localPlayerIndex : y),
                                        g(l)
                            }
                        }
                    }
            }
            ;
            this.lZ = function(targetPlayerForAction, y) {
                var n;
                a: {
                    for (n = 0; n < k; n += 2)
                        if (t[n] === targetPlayerForAction) {
                            t[n + 1] += y;
                            t[n + 1] = qr(t[n + 1], 1E3);
                            n = true;
                            break a
                        }
                    n = false
                }
                n || 32 === k || (t[k] = targetPlayerForAction,
                    t[k + 1] = y,
                    k += 2)
            }
        }
        function fm(g) {
            zG(g);
            zH(g);
            setPlayerDead_maybe(g);
            au.av(g);
            eK.g3(g);
            ae.zJ(g)
        }
        function zG(g) {
            hx.lG(g) && g_spectatorCount++;
            var k = ae.zL(g);
            0 === k.length ? g === g_localPlayerIndex && zM() : (zN(g, k),
                zO(g, k))
        }
        function zM() {
            b0.b1[17] += g_playerBalanceArray[g_localPlayerIndex] + ae.zP(g_localPlayerIndex);
            eW.show(false, false);
            eB.tR()
        }
        function zN(g, k) {
            var t;
            for (t = k.length - 1; 0 <= t; t--)
                ae.zQ(k[t], g)
        }
        function zR(g) {
            var k, t = 0;
            for (k = g.length - 1; 1 <= k; k--)
                g_playerLandArray[g[k]] > g_playerLandArray[g[t]] && (t = k);
            return t
        }
        function zO(g, k) {
            var t, l = k[zR(k)];
            9 === dv && 1 === dW.dX[g] && ce.dP(8) && e2.zT(l);
            if (g === g_localPlayerIndex)
                e9.fl(l, 1),
                    zM();
            else {
                for (t = k.length - 1; 0 <= t; t--)
                    if (k[t] === g_localPlayerIndex) {
                        e9.fl(g, 0);
                        return
                    }
                g < g_playerCount && 2 !== fU[g] && e9.ml(0, g, l)
            }
        }
        function setPlayerDead_maybe(g) {
            g_isPlayersAliveArray[g] = g_playerBalanceArray[g] = 0;
            b4[g] = null;
            bM[g] = null;
            bN[g] = null;
            bQ[g] = null;
            eI.fh(g)
        }
        function zH(g) {
            var k, t;
            for (k = cz[g]; k >= d0[g]; k--)
                for (t = d2[g]; t >= d3[g]; t--) {
                    var l = 4 * (t * aZ + k);
                    b5.hp(g, l) && (b5.hq(l),
                        g_playerLandArray[g]--)
                }
        }
        function kr() {
            function g(y) {
                (y = y.target.files) && 0 < y.length && jx.zY(y[0])
            }
            function k(y) {
                var n = new Image;
                n.onload = t;
                n.src = y.target.result
            }
            function t(y) {
                var n = y.target;
                y = n.width;
                var z = n.height;
                4096 < y || 4096 < z || 10 > y || 10 > z ? alert("Image w & h must be between 10 and 4096.") : (x6 = zg,
                    x7 = 0,
                    aZ = y,
                    aa = z,
                    hv.width = aZ,
                    hv.height = aa,
                    pp.drawImage(n, 0, 0),
                    xI = pp.getImageData(0, 0, aZ, aa).data)
            }
            var l;
            this.bp = function() {
                l = document.createElement("input");
                l.type = "file";
                l.onchange = g
            }
            ;
            this.zV = function() {
                l.click()
            }
            ;
            this.zW = function(y) {
                g(y)
            }
            ;
            this.zY = function(y) {
                var n = y.name.split(".");
                var z = n[n.length - 1].toLowerCase();
                if ("json" === z)
                    dr.zc(y);
                else if ("gif" === z || "jpg" === z || "jpeg" === z || "png" === z)
                    dr.zd = n[0],
                        z = new FileReader,
                        z.onload = k,
                        z.readAsDataURL(y)
            }
            ;
            this.pf = function(y) {
                if (0 === aJ.pe() || 2 === aJ.pe())
                    y.stopPropagation(),
                        y.preventDefault(),
                        y.dataTransfer.dropEffect = "copy"
            }
            ;
            this.pg = function(y) {
                if (0 === aJ.pe() || 2 === aJ.pe())
                    y.stopPropagation(),
                        y.preventDefault(),
                    (y = y.dataTransfer.files) && 0 < y.length && jx.zY(y[0])
            }
        }
        function kp() {
            this.zj = null;
            this.bp = function() {
                this.zj = 10 !== dv ? null : new Uint32Array(g_unclaimedLandIndex)
            }
            ;
            this.dF = function() {
                10 === dv && this.zk()
            }
            ;
            this.zk = function() {
                var g, k = this.zj, t = dZ, l = g_playerBalanceArray;
                for (g = sp_Bots - 1; 0 <= g; g--) {
                    var y = t[g];
                    if (!(y >= g_playerCount)) {
                        var n = Math.max(as(l[y], 4), 2048);
                        var z = Math.max(ay.te(y), 100);
                        k[y] += as(z * n, 1E4);
                        k[y] > n && (k[y] = n)
                    }
                }
            }
            ;
            this.u0 = function(g, k) {
                if (k > this.zj[g])
                    return k = this.zj[g],
                        this.zj[g] = 0,
                        k;
                this.zj[g] -= k;
                return k
            }
        }
        function ks() {
            function g(z) {
                dr.ds = true;
                dr.zq(JSON.parse(z.target.result));
                dr.lJ()
            }
            function k(z) {
                var x;
                if (22 >= z.length)
                    return false;
                dr.dt.x6 = 0;
                dr.dt.xB = 0;
                xJ(0, 0);
                "data:image/png;base64," !== z.substring(0, 22) && (z = "data:image/png;base64," + z);
                var A = new Image;
                A.onload = function() {
                    aZ = A.width;
                    aa = A.height;
                    4096 < aZ || 4096 < aa || 10 > aZ || 10 > aa ? (xJ(0, 0),
                        alert("Image w & h must be between 10 and 4096.")) : (x6 = zg,
                        x7 = 0,
                        hv.width = aZ,
                        hv.height = aa,
                        pp.drawImage(A, 0, 0),
                        x = pp.getImageData(0, 0, aZ, aa),
                        xI = x.data)
                }
                ;
                A.src = z;
                dr.dt.a01 = "";
                return true
            }
            function t(z, x, A, B) {
                return "string" !== typeof z || z.length < x ? B : z.length > A ? z.substring(0, A) : z
            }
            function l(z, x, A) {
                z = "number" === typeof z ? Math.floor(z) : x;
                return Math.min(Math.max(z, x), A)
            }
            function y(z, x) {
                return "boolean" === typeof z ? z : x
            }
            function n(z, x, A, B) {
                if (!Array.isArray(z) || 1 > z.length)
                    return null;
                var C = 8 === B ? new Uint8Array(x) : new Uint16Array(x);
                var E = z.length;
                for (B = 0; B < x; B++)
                    C[B] = l(z[B % E], 0, A);
                return C
            }
            this.ds = false;
            this.dt = null;
            this.zd = "";
            this.pa = function() {
                this.ds = false;
                this.dt = null
            }
            ;
            this.xb = function() {
                this.dt.ya && this.dt.zl && (this.dt.ya[0] = cC.mE[2].ik.vG());
                jJ(this.dt.zm, 0, this.zn(), this.dt.jM, false)
            }
            ;
            this.zn = function() {
                return [{
                    name: this.dt.zo ? jh.xc() : this.dt.zp[0],
                    xd: [0, 0, 0],
                    xe: 0
                }]
            }
            ;
            this.zc = function(z) {
                var x = new FileReader;
                x.onload = g;
                x.readAsText(z)
            }
            ;
            this.zq = function(z) {
                this.dt = {};
                this.dt.xY = l(z.numberPlayers, 1, 512);
                this.dt.zt = l(z.modeID, 0, 1);
                this.dt.x6 = l(z.mapID, 0, zg - 1);
                this.dt.xB = l(z.seedMap, 0, 16383);
                this.dt.zm = l(z.seedSpawn, 0, 16383);
                this.dt.jO = y(z.selectableSpawn, false);
                this.dt.zo = y(z.selectableName, false);
                this.dt.zl = y(z.selectableColor, false);
                this.zd = this.dt.zd = t(z.mapName, 1, 25, "Custom Map");
                var x = this.dt;
                var A = z.description;
                var B;
                if (!Array.isArray(A) || 1 > A.length)
                    A = [];
                else {
                    var C = A.length;
                    for (B = 0; B < C; B++)
                        A[B] = t(A[B], 0, 100, "")
                }
                x.mS = A;
                this.dt.hK = n(z.playerX, this.dt.xY, 4096, 16);
                this.dt.hV = n(z.playerY, this.dt.xY, 4096, 16);
                this.dt.zy = n(z.playerTeam, this.dt.xY, 8, 8);
                this.dt.du = n(z.playerStrength, this.dt.xY, 5, 8);
                x = this.dt;
                A = z.playerColor;
                B = this.dt.xY;
                if (!Array.isArray(A) || 1 > A.length)
                    A = null;
                else {
                    var E = Array(B);
                    var G = A.length;
                    for (C = 0; C < B; C++)
                        E[C] = n(A[C % G], 3, 63, 8);
                    A = E
                }
                x.ya = A;
                x = this.dt;
                A = z.playerName;
                B = this.dt.xY;
                if (!Array.isArray(A) || 1 > A.length)
                    A = null;
                else {
                    E = Array(B);
                    G = A.length;
                    for (C = 0; C < B; C++)
                        E[C] = t(A[C % G], 3, 26, "Bot");
                    A = E
                }
                x.zp = A;
                this.dt.a01 = "string" === typeof z.mapBase64 ? z.mapBase64 : "";
                this.dt.zo = this.dt.zo || !this.dt.zp;
                this.dt.jM = 0 === this.dt.zt ? 7 : 2 === this.dt.zt ? 9 : 6;
                this.dt.hK = this.dt.hV ? this.dt.hK : null
            }
            ;
            this.lJ = function() {
                k(this.dt.a01) || xJ(this.dt.x6, this.dt.xB)
            }
            ;
            this.a08 = function() {
                var z, x = 0, A = this.dt.xY;
                for (z = 0; z < A; z++)
                    this.dt.zy[z] > x && (x = this.dt.zy[z]);
                return Math.max(0, x - 1)
            }
        }
        function kN() {
            function g(x) {
                return x < g_playerCount ? k * x : k * g_playerCount + t * (x - g_playerCount)
            }
            var k, t, l, y, n, z;
            this.bp = function() {
                k = 16 > g_playerCount ? 12 : 8;
                t = 4;
                var x = g(g_unclaimedLandIndex);
                l = new Uint8Array(g_unclaimedLandIndex);
                y = new Uint16Array(x);
                n = new Uint32Array(x);
                z = new Uint16Array(x)
            }
            ;
            this.zJ = function(x) {
                l[x] = 0
            }
            ;
            this.zQ = function(x, A) {
                var B;
                a: {
                    var C = g(x);
                    for (B = l[x] - 1; 0 <= B; B--)
                        if (0 === z[C + B] && y[C + B] === A)
                            break a;
                    B = l[x]
                }
                B !== l[x] && (C = n[g(x) + B],
                    this.b2(x, B),
                    this.cQ(x, C, g_unclaimedLandIndex))
            }
            ;
            this.co = function(x, A) {
                var B, C = g(x);
                for (B = l[x] - 1; 0 <= B; B--)
                    if (0 === z[C + B] && y[C + B] === A)
                        return true;
                return false
            }
            ;
            this.dD = function(x) {
                return x < g_playerCount ? l[x] < k : l[x] < t
            }
            ;
            this.af = function(x) {
                return l[x]
            }
            ;
            this.al = function(x, A) {
                return y[g(x) + A]
            }
            ;
            this.ag = function(x, A) {
                return z[g(x) + A]
            }
            ;
            this.fW = function(x, A) {
                var B, C = g(x);
                for (B = l[x] - 1; 0 <= B; B--)
                    if (z[C + B] === A)
                        return B;
                return -1
            }
            ;
            this.am = function(x, A) {
                return n[g(x) + A]
            }
            ;
            this.bi = function(x, A) {
                var B, C = g(x);
                for (B = l[x] - 1; 0 <= B; B--)
                    if (0 === z[C + B] && y[C + B] === A)
                        return n[C + B];
                return 0
            }
            ;
            this.zP = function(x) {
                var A = g(x)
                    , B = 0;
                for (x = l[x] - 1; 0 <= x; x--)
                    B += n[A + x];
                return B
            }
            ;
            this.a0D = function(x) {
                var A = g(x)
                    , B = 0;
                for (x = l[x] - 1; 0 <= x; x--)
                    0 === z[A + x] && (B += n[A + x]);
                return B
            }
            ;
            this.zD = function(x) {
                var A = g(x)
                    , B = 0;
                for (x = l[x] - 1; 0 <= x; x--)
                    0 < z[A + x] && B++;
                return B
            }
            ;
            this.bh = function(x, A, B) {
                var C = g(x);
                for (x = l[x] - 1; 0 <= x; x--)
                    0 === z[C + x] && y[C + x] === A && (n[C + x] = B)
            }
            ;
            this.bT = function(x, A, B) {
                n[g(x) + A] = B
            }
            ;
            this.cQ = function(x, A, B) {
                var C, E = g(x);
                B === g_localPlayerIndex && b0.b1[x < g_playerCount ? 6 : 5]++;
                for (C = l[x] - 1; 0 <= C; C--)
                    if (0 === z[E + C] && y[E + C] === B) {
                        n[E + C] += A;
                        n[E + C] = n[E + C] > jD ? jD : n[E + C];
                        return
                    }
                y[E + l[x]] = B;
                n[E + l[x]] = A;
                z[E + l[x]] = 0;
                l[x]++;
                x < g_playerCount && (B === g_localPlayerIndex ? e9.fl(x, 5) : x === g_localPlayerIndex && eA.mn(B))
            }
            ;
            this.u1 = function(x, A, B) {
                var C = g(x);
                g_isPlayersAliveArray[x] = 2;
                y[C + l[x]] = 0;
                n[C + l[x]] = A;
                z[C + l[x]] = B;
                l[x]++
            }
            ;
            this.b2 = function(x, A) {
                var B;
                if (0 !== l[x]) {
                    var C = g(x);
                    l[x]--;
                    for (B = A; B < l[x]; B++)
                        y[C + B] = y[C + B + 1],
                            n[C + B] = n[C + B + 1],
                            z[C + B] = z[C + B + 1]
                }
            }
            ;
            this.zL = function(x) {
                var A, B, C = [];
                for (A = sp_Bots - 1; 0 <= A; A--) {
                    var E = g(dZ[A]);
                    for (B = l[dZ[A]] - 1; 0 <= B; B--)
                        if (0 === z[E + B] && y[E + B] === x) {
                            C.push(dZ[A]);
                            break
                        }
                }
                return C
            }
        }
        function kO() {
            var g, k, t, l, y, n;
            this.bp = function() {
                l = t = k = g = 10
            }
            ;
            this.a0K = function() {
                n = 512;
                y = new Uint16Array(n);
                for (var z = 0; z < n; z++)
                    y[z] = 100 + bl(as(25600 * z, n - 4), 9)
            }
            ;
            this.sM = function() {
                return l
            }
            ;
            this.dF = function () { // Gives interest bonus.
                if (0 >= --t) {
                    t = g;
                    var z, x = g_playerBalanceArray[g_localPlayerIndex];
                    g_isSingleplayer && !dA && 0 !== g_isPlayersAliveArray[0] && 0 === dy.dz[0].bD && (g_playerBalanceArray[0] += as(g_playerLandArray[0], 6));
                    for (z = sp_Bots - 1; 0 <= z; z--) {
                        var A = as(ay.te(dZ[z]) * g_playerBalanceArray[dZ[z]], 1E4);
                        g_playerBalanceArray[dZ[z]] += 1 > A ? 1 : A;
                        ay.az(dZ[z])
                    }
                    b0.b1[9] += g_playerBalanceArray[g_localPlayerIndex] - x;
                    if (0 >= --l) {
                        l = k;
                        z = g_playerBalanceArray[g_localPlayerIndex];
                        for (A = sp_Bots - 1; 0 <= A; A--)
                            g_playerBalanceArray[dZ[A]] += g_playerLandArray[dZ[A]],
                                ay.az(dZ[A]);
                        b0.b1[8] += g_playerBalanceArray[g_localPlayerIndex] - z
                    }
                }
            }
            ;
            this.te = function(z) {
                var x = y[as((n - 1) * g_playerLandArray[z], jC)];
                if (1920 > c4.getTimeSinceGameStarted()) {
                    var A = as(100 * (13440 - 6 * c4.getTimeSinceGameStarted()), 1920);
                    x = A > x ? A : x
                }
                A = this.dJ(z);
                g_playerBalanceArray[z] > A && (x -= as(2 * x * (g_playerBalanceArray[z] - A), A));
                return 0 > x ? 0 : 700 < x ? 700 : x
            }
            ;
            this.dJ = function(z) {
                z = 100 * g_playerLandArray[z];
                return z > jE ? jE : z
            }
            ;
            this.az = function(z) {
                var x = g_playerLandArray[z] * jA;
                g_playerBalanceArray[z] = g_playerBalanceArray[z] > jD ? jD : g_playerBalanceArray[z] > x ? x : g_playerBalanceArray[z]
            }
        }
        function kP() {
            function g() {
                qa.width = gE;
                qa.height = cB;
                W = qa.getContext("2d", {
                    alpha: true
                });
                W.textAlign = cJ;
                W.textBaseline = cI;
                W.imageSmoothingEnabled = true
            }
            function k() {
                var Q;
                W.font = bt + Math.floor(100 * I) + bu;
                var X = 80 / Math.floor(W.measureText(eP.gL(jD)).width);
                W.font = bt + 100 + bu;
                for (Q = g_unclaimedLandIndex - 1; 0 <= Q; Q--)
                    J[Q] = 100 / Math.floor(W.measureText(g_playerNameArray[Q]).width),
                        K[Q] = Math.min(X, J[Q])
            }
            function t(Q) {
                return !gI.gJ.gK || 1E6 > g_playerBalanceArray[Q] ? 1 : 1E7 > g_playerBalanceArray[Q] ? ta[0] : ta[Math.min(Math.floor(Math.log10(g_playerBalanceArray[Q])) - 6, 3)]
            }
            function l() {
                Y = false;
                Z = 1;
                T = U = 0;
                W.clearRect(0, 0, gE, cB);
                for (var Q = gC / g7, X = gD / g7, fa = (gE + gC) / g7, ra = (cB + gD) / g7, ha, ia, ma, sa, pa, ua = 0 !== g_isPlayersAliveArray[g_localPlayerIndex] && hx.lG(g_localPlayerIndex), ya = sp_Bots - 1; 0 <= ya; ya--)
                    if (ma = dZ[ya],
                        sa = Math.floor(N * g7 * t(ma) * K[ma] * H[ma]),
                    !(sa < R || sa >= L) && F[ma] + H[ma] > Q && F[ma] < fa && M[ma] + D[ma] > X && M[ma] < ra) {
                        ha = Math.floor(gE * (F[ma] + H[ma] / 2 - Q) / (fa - Q));
                        ia = Math.floor(cB * (M[ma] + D[ma] / 2 - X) / (ra - X) - .1 * sa);
                        W.font = os[fU[ma]] + sa + bu;
                        pa = W;
                        var va = ma;
                        va = sa >= P && sa < L ? dW.a1F[b5.r1[va]] + z(sa).toFixed(3) + ")" : dW.a1G[b5.r1[va]];
                        pa.fillStyle = va;
                        W.fillText(gI.gJ.gK ? eP.gL(g_playerBalanceArray[ma]) : g_playerNameArray[ma], ha, ia);
                        Y = true;
                        if (0 < ca[ma]) {
                            pa = ha;
                            va = ia;
                            var xa = sa
                                , wa = ma;
                            if (0 === g_playerLeaderboardRankArray[wa])
                                if (a5.oH(la[wa])) {
                                    var Ea = pa
                                        , za = xa
                                        , Ba = wa;
                                    wa = la[wa];
                                    var Aa = .9 * za / a5.c1
                                        , Da = Math.floor(va - .5 * Aa * a5.c1 - .05 * za);
                                    W.globalAlpha = z(za);
                                    Ba = t(Ba) * J[Ba];
                                    for (var Fa = Math.floor(Ea - .5 * za / Ba - .4 * za - Aa * a5.c1), Ca = 0; 2 > Ca; Ca++)
                                        W.setTransform(Aa, 0, 0, Aa, Fa, Da),
                                            W.drawImage(a5.l7[wa], 0, 0),
                                            Fa = Math.floor(Ea + .5 * za / Ba + .4 * za);
                                    W.globalAlpha = 1;
                                    W.setTransform(1, 0, 0, 1, 0, 0);
                                    y(pa, va, xa, 0, 0)
                                } else
                                    a5.oG(la[wa]) ? (n(pa, va, xa, la[wa], 0),
                                        y(pa, va, xa, 0, 1)) : (n(pa, va, xa, la[wa], 1),
                                        y(pa, va, xa, 1, 0));
                            else
                                n(pa, va, xa, la[wa], 0)
                        } else
                            0 === g_playerLeaderboardRankArray[ma] && y(ha, ia, sa, 0, 0);
                        if (ua && (0 < ca[ma + g_unclaimedLandIndex] || 0 < ca[ma + 2 * g_unclaimedLandIndex] || 0 < ca[ma + 3 * g_unclaimedLandIndex] || 0 < ca[ma + 4 * g_unclaimedLandIndex])) {
                            va = ha;
                            xa = ia;
                            Ea = sa;
                            za = ma;
                            wa = -1;
                            for (pa = 4; 1 <= pa; pa--)
                                0 < ca[za + pa * g_unclaimedLandIndex] && wa++;
                            for (pa = 1; 5 > pa; pa++)
                                0 < ca[za + pa * g_unclaimedLandIndex] && (Aa = Ea,
                                    Da = pa,
                                    Ba = za,
                                    Fa = ca[za + pa * g_unclaimedLandIndex],
                                    Ca = .8 * Aa / a5.c1,
                                    W.setTransform(Ca, 0, 0, Ca, Math.floor(va - .5 * Ca * a5.c1 - .534 * wa * Aa), Math.floor(xa + 1.4 * Ca * a5.c1)),
                                    W.globalAlpha = z(Aa),
                                    W.drawImage(1 === Da ? a5.l7[la[Ba + g_unclaimedLandIndex]] : 2 === Da && 255 > Fa ? hx.l5[2] : hx.l4[Da + 3], 0, 0),
                                    W.globalAlpha = 1,
                                    W.setTransform(1, 0, 0, 1, 0, 0),
                                    wa -= 2)
                        }
                        pa = Math.floor(I * sa);
                        pa < R || (W.font = bt + pa + bu,
                            W.fillText(gI.gJ.gK ? g_playerNameArray[ma] : eP.gL(g_playerBalanceArray[ma]), ha, ia + Math.floor(.78 * sa)))
                    }
            }
            function y(Q, X, fa, ra, ha) {
                var ia = .95 * fa / V;
                W.setTransform(ia, 0, 0, ia, Math.floor(Q - .5 * ia * S + .8 * ra * fa), Math.floor(X - 1.76 * ia * V - .82 * ha * fa));
                W.globalAlpha = z(fa);
                W.drawImage(bw.bz(4), 0, 0);
                W.globalAlpha = 1;
                W.setTransform(1, 0, 0, 1, 0, 0)
            }
            function n(Q, X, fa, ra, ha) {
                var ia = 1.2 * fa / a5.c1;
                W.setTransform(ia, 0, 0, ia, Math.floor(Q - .5 * ia * a5.c1 - .8 * ha * fa), Math.floor(X - 1.5 * ia * a5.c1));
                W.globalAlpha = z(fa);
                W.drawImage(a5.l7[ra], 0, 0);
                W.globalAlpha = 1;
                W.setTransform(1, 0, 0, 1, 0, 0)
            }
            function z(Q) {
                return Q >= P && Q < L ? 1 - (Q - P) / (L - P) : 1
            }
            function x(Q) {
                var X, fa = F[Q];
                for (X = F[Q] - d0[Q] - 1; 0 <= X; X--)
                    if (fa--,
                        !B(Q, fa, M[Q], D[Q])) {
                        fa++;
                        break
                    }
                var ra = F[Q];
                for (X = cz[Q] - F[Q] - H[Q]; 0 <= X; X--)
                    if (ra++,
                        !B(Q, ra + H[Q] - 1, M[Q], D[Q])) {
                        ra--;
                        break
                    }
                fa = Math.floor((fa + ra) / 2);
                ra = M[Q];
                for (X = M[Q] - d3[Q] - 1; 0 <= X; X--)
                    if (ra--,
                        !C(Q, fa, ra, H[Q])) {
                        ra++;
                        break
                    }
                var ha = M[Q];
                for (X = d2[Q] - M[Q] - D[Q]; 0 <= X; X--)
                    if (ha++,
                        !C(Q, fa, ha + D[Q] - 1, H[Q])) {
                        ha--;
                        break
                    }
                X = Math.floor((ra + ha) / 2);
                A(Q, fa, X, H[Q], D[Q]) && (F[Q] = fa,
                    M[Q] = X)
            }
            function A(Q, X, fa, ra, ha) {
                var ia;
                for (ia = X + ra - 1; ia >= X; ia--)
                    if (!B(Q, ia, fa, ha))
                        return false;
                var ma = Math.floor(.25 * ha);
                ma = 1 > ma ? 1 : ma;
                for (ia = fa + ha - 1 - ma; ia >= fa + ma; ia--)
                    if (!C(Q, X, ia, ra))
                        return false;
                return true
            }
            function B(Q, X, fa, ra) {
                return b5.hp(Q, 4 * (fa * aZ + X)) && b5.hp(Q, 4 * ((fa + ra - 1) * aZ + X))
            }
            function C(Q, X, fa, ra) {
                return b5.hp(Q, 4 * (fa * aZ + X)) && b5.hp(Q, 4 * (fa * aZ + X + ra - 1))
            }
            var E, G, F, M, H, D, K, J, L, P, I, O, R, N, T, U, Z, Y, qa, W, la, ca, S, V, ba = 0, ta = new Float32Array(4);
            this.bp = function() {
                Y = false;
                N = .88;
                I = .5;
                O = 1.8;
                L = Math.floor(.5 * pO);
                P = Math.floor(.2 * L);
                R = 4 > gI.gJ.a0s ? 1 + gI.gJ.a0s : 2 * (gI.gJ.a0s - 1);
                G = E = 0;
                F = new Uint16Array(g_unclaimedLandIndex);
                M = new Uint16Array(g_unclaimedLandIndex);
                H = new Uint16Array(g_unclaimedLandIndex);
                D = new Uint16Array(g_unclaimedLandIndex);
                K = new Float32Array(g_unclaimedLandIndex);
                J = new Float32Array(g_unclaimedLandIndex);
                la = new Uint8Array(2 * g_unclaimedLandIndex);
                ca = new Uint8Array(5 * g_unclaimedLandIndex);
                qa = qa ? qa : document.createElement("canvas");
                g();
                U = T = 0;
                Z = 1;
                if (gI.gJ.gK) {
                    k();
                    var Q;
                    W.font = bt + 100 + bu;
                    var X = 100 / Math.floor(W.measureText("900 000").width);
                    for (Q = g_unclaimedLandIndex - 1; 0 <= Q; Q--)
                        K[Q] = Math.min(X, 2 * J[Q]),
                            J[Q] = X;
                    ta[0] = 100 / (X * Math.floor(W.measureText("5 000 000").width));
                    ta[1] = 100 / (X * Math.floor(W.measureText("50 000 000").width));
                    ta[2] = 100 / (X * Math.floor(W.measureText("500 000 000").width));
                    ta[3] = 100 / (X * Math.floor(W.measureText("1 000 000 000").width))
                } else
                    k();
                for (Q = g_unclaimedLandIndex - 1; 0 <= Q; Q--)
                    12 > g_playerLandArray[Q] ? (F[Q] = d0[Q] + 1,
                        M[Q] = d3[Q] + 1,
                        H[Q] = 1,
                        D[Q] = 1) : (F[Q] = d0[Q],
                        M[Q] = d3[Q] + 1,
                        H[Q] = 4,
                        D[Q] = 2);
                if (fc)
                    for (Q = 0; Q < g_playerCount; Q++)
                        H[Q] = 0;
                S = bw.bz(4).width;
                V = bw.bz(4).height
            }
            ;
            this.lx = function() {
                g();
                l()
            }
            ;
            this.a0z = function(Q) {
                W.font = bt + Math.floor(100 * I) + bu;
                var X = 80 / Math.floor(W.measureText(eP.gL(jD)).width);
                W.font = bt + 100 + bu;
                J[Q] = 100 / Math.floor(W.measureText(g_playerNameArray[Q]).width);
                K[Q] = Math.min(X, J[Q]);
                gI.gJ.gK && (W.font = bt + 100 + bu,
                    X = 100 / Math.floor(W.measureText("900 000").width),
                    K[Q] = Math.min(X, 2 * J[Q]),
                    J[Q] = X)
            }
            ;
            this.j7 = function() {
                for (var Q = 0; Q < g_playerCount; Q++)
                    3 !== cz[Q] - d0[Q] || 3 !== d2[Q] - d3[Q] ? (F[Q] = d0[Q] + (cz[Q] !== d0[Q] ? 1 : 0),
                        M[Q] = d3[Q],
                        H[Q] = 1,
                        D[Q] = 1) : (F[Q] = d0[Q],
                        M[Q] = d3[Q] + 1,
                        H[Q] = 4,
                        D[Q] = 2)
            }
            ;
            this.n4 = function(Q, X, fa) {
                0 === g_isPlayersAliveArray[Q] || 4 !== X && 2 === fU[Q] || (Q += X * g_unclaimedLandIndex,
                    0 === X ? la[Q] === fa && 0 < ca[Q] ? ca[Q] = 0 : (la[Q] = fa,
                        ca[Q] = a5.oH(fa) ? 255 : 64) : 1 === X ? (ca[Q] = 64,
                        la[Q] = fa) : ca[Q] = fa)
            }
            ;
            this.cG = function() {
                Y && (1 !== Z ? (cH.imageSmoothingEnabled = true,
                    cH.setTransform(Z, 0, 0, Z, 0, 0),
                    cH.drawImage(qa, -T / Z, -U / Z),
                    cH.setTransform(1, 0, 0, 1, 0, 0)) : (cH.imageSmoothingEnabled = false,
                    cH.drawImage(qa, -T, -U)))
            }
            ;
            this.rX = function(Q, X) {
                T += Q;
                U += X
            }
            ;
            this.lo = function(Q, X) {
                eA.rX(Q, X)
            }
            ;
            this.zoom = function(Q, X, fa) {
                Z *= Q;
                T = (T + X) * Q - X;
                U = (U + fa) * Q - fa
            }
            ;
            this.eb = function(Q) {
                return (Q ? 0 === ++ba % gI.su[gI.gJ.a13] : 0 === c4.getTimeSinceGameStarted() % gI.su[gI.gJ.a13]) ? (ba = 0,
                    l(),
                    true) : false
            }
            ;
            this.gG = function(Q) {
                return t(Q) * K[Q]
            }
            ;
            this.dF = function() {
                if (4 <= ++G) {
                    var Q, X;
                    G = 0;
                    for (X = 4; 1 <= X; X--)
                        for (Q = sp_Bots - 1; 0 <= Q; Q--) {
                            var fa = dZ[Q] + X * g_unclaimedLandIndex;
                            0 < ca[fa] && 255 > ca[fa] && ca[fa]--
                        }
                    if (2 !== ec)
                        for (Q = sp_Bots - 1; 0 <= Q; Q--)
                            fa = dZ[Q],
                            0 < ca[fa] && 255 > ca[fa] && ca[fa]--
                }
                Q = Math.floor(.1 * sp_Bots);
                Q = 8 > Q ? 8 : Q;
                Q = Q > sp_Bots ? sp_Bots : Q;
                for (fa = E + Q - 1; fa >= E; fa--) {
                    X = fa % sp_Bots;
                    X = dZ[X];
                    var ra = t(X) * K[X];
                    if (0 < H[X] && A(X, F[X], M[X], H[X], D[X])) {
                        for (var ha, ia, ma, sa, pa = X, ua = false, ya = 0; 8 > ya; ya++) {
                            ia = H[pa] + 2;
                            ha = D[pa] + 2;
                            if (ia > cz[pa] - d0[pa] + 1 || ha > d2[pa] - d3[pa] + 1)
                                break;
                            sa = F[pa] - 1;
                            ma = M[pa] - 1;
                            if (A(pa, sa, ma, ia, ha))
                                F[pa] = sa,
                                    M[pa] = ma,
                                    H[pa] = ia,
                                    D[pa] = ha,
                                    ua = true;
                            else
                                break
                        }
                        if (ha = !ua) {
                            ha = X;
                            pa = ra;
                            ua = false;
                            ya = H[ha];
                            for (var va = 1 + Math.floor(.02 * ya), xa = 1; 5 > xa; xa++) {
                                ia = ya + xa * va;
                                if (ia > cz[ha] - d0[ha] + 1)
                                    break;
                                ra = 1 + Math.floor(O * pa * ia);
                                if (ra > d2[ha] - d3[ha] + 1)
                                    break;
                                sa = d0[ha] + Math.floor(Math.random() * (cz[ha] - d0[ha] + 2 - ia));
                                ma = d3[ha] + Math.floor(Math.random() * (d2[ha] - d3[ha] + 2 - ra));
                                A(ha, sa, ma, ia, ra) && (F[ha] = sa,
                                    M[ha] = ma,
                                    H[ha] = ia,
                                    D[ha] = ra,
                                    ua = true)
                            }
                            ha = ua
                        }
                        ha && x(X)
                    } else {
                        a: {
                            ia = X;
                            ma = ra;
                            sa = F[ia] + 1;
                            pa = M[ia] + 1;
                            for (ua = H[ia] - 2; ; ) {
                                if (1 > ua) {
                                    H[ia] = 0;
                                    break
                                }
                                ha = 1 + Math.floor(O * ma * ua);
                                if (A(ia, sa, pa, ua, ha)) {
                                    F[ia] = sa;
                                    M[ia] = pa;
                                    H[ia] = ua;
                                    D[ia] = ha;
                                    ha = true;
                                    break a
                                }
                                sa++;
                                pa++;
                                ua -= 2
                            }
                            ha = false
                        }
                        if (ha)
                            x(X);
                        else
                            for (ha = ra,
                                     ma = cz[X] - d0[X] + 1,
                                     ia = Math.floor(.02 * ma),
                                     ia = 1 > ia ? 1 : ia,
                                     ra = -6 * ia; ma >= ra; ma -= ia)
                                if (pa = 0 < ma ? ma : 1,
                                    sa = 1 + Math.floor(O * ha * pa),
                                    ya = d0[X] + Math.floor(Math.random() * (cz[X] - d0[X] + 2 - pa)),
                                    ua = d3[X] + Math.floor(Math.random() * (d2[X] - d3[X] + 2 - sa)),
                                    A(X, ya, ua, pa, sa)) {
                                    F[X] = ya;
                                    M[X] = ua;
                                    H[X] = pa;
                                    D[X] = sa;
                                    break
                                }
                    }
                }
                E += Q;
                E %= sp_Bots
            }
            ;
            this.mn = function(Q) {
                var X = Q + 2 * g_unclaimedLandIndex
                    , fa = ca[X];
                return 0 < fa ? (e9.n9(50, Q),
                    ca[X] = 0,
                255 === fa) : false
            }
            ;
            this.lk = function(Q) {
                return 255 === ca[Q + 2 * g_unclaimedLandIndex]
            }
        }
        function kQ() {
            var sp_botNamesArray, k;
            this.bp = function() {
                var t, l;
                sp_botNamesArray = "Abbasid Caliphate;Aceh s;Achaemenid Z;Afsharid z;Aghlabid Emirate;Ahom z;Akkadian Z;Aksumite Z;Akwamu;Alaouite z;Almohad Caliphate;Almoravid z;Angevin Z;Aq Qoyunlu;Armenian Z;Assyria;Ashanti Z;Austrian Z;Austria-Hungary;Ayyubid z;Aztec Z;Aulikara Z;Babylonian Z;Balhae;Banten s;S Banjar;Bamana Z;Bengal s;Benin Z;Kadamba z;Bornu Z;E Brazil;Britannic Z;British Z;British Raj;Bruneian Z;Bukhara Z;Burgundian State;Buyid z;Byzantine Z;Caliphate of C\u00f3rdoba;Cao Wei;Carthaginian Z;Cebu Rajahnate;Chagatai Khanate;Chalukya z;Chauhan z;Chav\u00edn Z;Chenla;Chera z;Chola z;Comanche Z;Congo Free State;Crimean Khanate;Dacian Z;Delhi s;Demak s;Durrani Z;Dutch Z;Egyptian Z;Elamite Z;Exarchate of Africa;Abyssinia;Fatimid Caliphate;First French Z;Frankish Z;Funan;Gallic Z;Gaza Z;Republic of Genoa;German Z;Ghana Z;Ghaznavid z;Ghurid z;Goguryeo;Goryeo;Gorkha Z;G\u00f6kt\u00fcrk Khaganate;Golden Horde;S Gowa;Seljuq Z;Gupta Z;Hafsid Y;Han z;Hanseatic League;E Harsha;Hephthalite Z;Hittite Z;Holy Roman Z;Hotak z;Hoysala Z;Hunnic Z;Husainid z;Idrisid z;Ilkhanate;K Israel;K Judah;Inca Z;Italian Z;E Japan;Jin z;Johor Z;Jolof Z;Joseon;Kaabu Z;Kachari Y;Kalmar Union;Kanem Z;Kanva z;Kara-Khanid Khanate;Kazakh Khanate;Khazar Khaganate;Khmer Z;Khilji z;Khwarazmian z;Kievan Rus';Konbaung z;Kong Z;Korean Z;Kushan Z;K Kush;Lakota;Latin Z;Later L\u00ea z;Liao z;Lodi s;Khmer Z;Macedonian Z;Majapahit Z;Mali Z;Malacca Z;Mamluk s;Manchukuo;Maratha Z;Marinid z;Massina Z;Mataram s;Mauretania;Mauryan Z;Median Z;Mlechchha z;Ming z;Mitanni Z;Mongol Z;Mughal Z;Nanda Z;Nguy\u1ec5n z;North Sea Z;E Nicaea;Numidia;Omani Z;Ottoman Z;Oyo Z;Pagan Z;Pahlavi z;Pala Z;Palmyrene Z;Parthian Z;Pontic Z;Portuguese Z;K Prussia;Ptolemaic Z;Qajar z;Qara Qoyunlu;Qin z;Qing z;Ramnad Sethupathis;Rashidun Caliphate;Rashtrakuta z;Roman Z;Rouran Khaganate;Rozwi Z;Rustamid z;Russian Z;Tsardom of Russia;Saadi z;Safavid z;Saffarid z;Sassanid z;Satavahana z;Samanid Z;Soviet Union;Saudeleur z;Duchy of Savoy;Seleucid Z;Serbian Z;Shu Han;Shang z;Siam Z;Sikh Z;Singhasari;Sokoto Caliphate;Song z;Songhai Z;Spanish Z;Srivijaya Z;Sui z;K Mysore;Shunga Z;S Sulu;Sumer;Sur Z;Swedish Z;Tahirid z;Tang z;T\u00e2y S\u01a1n z;S Ternate;E Thessalonica;German Reich;Tibetan Z;Tondo z;S Tidore;Timurid Z;K Tlemcen;E Trebizond;Toltec Z;Toungoo z;Toucouleur Z;Tu'i Tonga Z;Turgesh Khaganate;Umayyad Caliphate;Uyunid Emirate;Uyghur Khaganate;Uzbek Khanate;Vandal Y;Vijayanagara Z;Republic of Venice;Wari Z;Wassoulou Z;Wattasids;Western Roman Z;Eastern Wu;Western Xia z;Xin z;Yuan z;Zand z;Zhou z;Zulu Z;Yugoslavia;Kosovo;Sikkim;Kanem\u2013Bornu Z;Wadai Z;Ethiopian Z;Rozvi Z;Sasanian Z;E Vietnam;Shilluk Y;K Aksum;Gwiriko Y;Toro Y;Malindi Y;K Loango;K Mapungubwe;Ryukyu Y;K Cyprus;K Jerusalem;Garhwal Y;K Nepal;K Cambodia;Champa Y;Hanthawaddy Y;Phayao Y;K Sardinia;K Sicily;K Gwynedd;K Scotland;K Desmond;K Poland;K Hungary;K Croatia;K Bohemia;Albanian Y;K Georgia;K Portugal;Khanate of Sibir;K Romania;Cossack Hetmanate;Duchy of Bouillon;K Ireland;Lordship of Ireland;K Italy;Republic of Pisa;Idrisid z;Almoravid z;Almohad Caliphate;Marinid z;Wattasid z;Saadian z;Republic of Sal\u00e9;Rif Republic;K Kush;Makuria;Alodia;Ayyubid z;Mamluk s;Egypt Eyalet;K Fazughli;S Sennar;S Darfur;Mahdist State;S Egypt;K Egypt;Emirate of Cyrenaica;K Libya;Republic of Egypt;Republic of the Sudan;United Arab Republic;Libyan Arab Republic;Zirid z;Hafsid z;K Kuku;Regency of Algiers;Gurunsi;Liptako;Tenkodogo;Wogodogo;Yatenga;Bilanga;Bilayanga;Bongandini;Con;Macakoali;Piela;Nungu;K Sine;K Saloum;K Baol;K Cayor;K Waalo;Bundu;Bonoman;Gyaaman;Denkyira;Mankessim Y;K Dahomey;Oyo Z;K Nri;Aro Confederacy;Kwararafa;Biafra;Buganda;Bunyoro;Ankole;Busoga;Tanganyika;Kuba Y;K Luba;K Lunda;Yeke Y;K Ndongo;Kasanje Y;K Matamba;Mbunda Y;Chokwe Y;Kazembe Y;K Butua;Ndebele Y;Mthethwa Z;Bophuthatswana;Ciskei;Transkei;Venda;Rhodesia;Kart z;Nogai Horde;Khanate of Bukhara;Khanate of Khiva;Khamag Mongol;Northern Fujiwara;Kamakura Shogunate;Ashikaga Shogunate;Jaxa;Republic of Ezo;Jiangxi Soviet;Hunan Soviet;Guangzhou Commune;Gojoseon;Alaiye;Beylik of Bafra;Kara Koyunlu;Kars Republic;K Iraq;Arab Federation;Kar-Kiya z;Baduspanids;Marashiyan z;Afrasiyab z;Mihrabanid z;Safavid Iran;Sheikhdom of Kuwait;Bani Khalid Emirate;Emirate of Diriyah;Emirate of Najd;Muscat and Oman;Emirate of Riyadh;S Najd;K Hejaz;Fadhli s;Emirate of Beihan;Emirate of Dhala;S Lahej;Republic of Kuwait;K Cochin;Jaffna Y;Laur Y;Pandya z;Jaunpur s;Jaintia Y;Hyderabad State;Travancore;Udaipur State;Manikya z;Lan Xang;K Vientiane;K Champasak;Lao Issara;K Laos;Pyu States;Ava;Mon Ys;Pegu;K Mrauk U;Taungoo z;Shan States;Arakan;Raktamaritika;Singhanavati;Dvaravati;Ngoenyang;Hariphunchai;Tambralinga;Lavo Y;Langkasuka;Sukhothai Y;S Singora;Ayutthaya Y;Thonburi Y;Lan Na;Pattani Y;Jambi s;Palembang s;S Deli;S Langkat;S Serdang;S Cirebon;K Pajang;K Bali;Bima s;K Larantuka;K Banggai;Luwu;S Bone;Caucasian Albania;Kabardia;Circassia;K Abkhazia;Elisu s;Avar Khanate;Caucasian Imamate;K Imereti;K Kartli;K Kakheti;Crown of Aragon;Emirate of Granada;K Majorca;Crown of Castile;K Haiti;Cocoll\u00e1n;Zapotec Civilization;Mosquito Y;Somoza Regime;Iroquois Confederacy;Cherokee Nation;Vermont Republic;State of Muskogee;K Alo;K Sigave;K Fiji;K Nauru;K Chile;Muisca Confederation;El Stronato;K Chimor;Jungle Republic;Liga Federal;Supreme Junta;Weimar Republic;K Bavaria;Bremen;Frankfurt;Hamburg;K Hanover;Holstein;Lippe;Nassau;Oldenburg;Pomerania;Reuss;Saxe-Altenburg;Saxony;Schleswig;Waldeck;W\u00fcrttemberg;Helvetic Republic;Republic of Florence;Duchy of Urbino;Republic of Cospaia;Duchy of Lucca;Duchy of Mantua;Duchy of Milan;Papal States".split(";");
                k = "Antin Mark Artem Viktor Pasha Maxim Rodion Yuri Lev Luka Ivan Igor Nikita Leonid Daniil Alexei Boris Sasha Yulia Luda Yana Kira Alisa Polina Mischa Mila Inessa Alyona Alina Anya Anna Maria Sofia Walda Uta Tyra Tanka Svea Saskia Runa Rigmor Ostara Nanna Lykke Kunna Irma Iduna Helga Gudrun Gisela Gerda Gelsa Freya Frauke Ferun Elke Eila Dagmar Ariald Dagwin Eckwin Edmund Eike Erkmar Erwin Falko Frowin Gerbod Gunnar Halvor Irvin Knut Leif Lando Odin Oswin Ragin Rainer Rango Sarolf Thor Ulf Wolf Sarah Emma Laura Chloe Marie L\u00e9a Emily Keyla Manon Julie Julia Alice Kim Lisa Kora Clara Sara Lucie Anais Grace Eva Zoe Lee Katie Jade Ines Lily Amy Megan Lucy Elisa Kate Mary Elise Nina C\u00e9lia Ma\u00ebva Kayla Elysa Lena Amber Kelly Jenny Lola Mia Abby Ella Diana Fanny Ellie Ana Cindy Elena Rose Erin Molly Park Jane Lina Bella Lou Alex Irene Elsa Leah Holly Maya Linda Carla Anne Paige Annie Jenna Karen Lydia Haley Hanna Wendy Luna Naomi Sonia Fiona Helen Ambre Jess Angel Leila Lara Tina Ann Laur\u00e9 Chen Daisy Paula Iris Ruby Minji Marta Sam Erika Nora Nadia Eve Erica Ava Wang Choi Yujin Jin Yang Hina Beth Lucia Faith Jiwon Ad\u00e8le Alexa Min Flora Nancy Lili Lexi Cloe Hana Lin Kenza Lise Li Mina Angie Lotte Sandy Vicky May Jamie Joy Jeong Tara Sally Merve Diane Maddy Lilly Alix Zhang Gabby Abbie Liz Ellen Rita Olga Dana Elif Maud Sunny Joyce Liu Jieun Rosie Becky Jung Ilona Kylie Ruth Kat Han Nikki Kang Tania Dasha Cathy Aline Jo Ally Lilou Sujin Tanya Amina Yu Aya Katy Becca Rosa Paola Anita Sumin Betty Subin Tessa Heidi Tori Lila Imane Yoon Allie Farah Ciara Gina Yejin Song Susan Niamh April Izzy Aude Liza Salma Ivy Elina Liya Sue Gwen Maia Mimi Mandy Nana Sanne Hope Ariel Eliza Daria Yuna Evie Aimee Avery Agn\u00e8s Stacy Jisu Madi Riley Carly Lia Irina".split(" ");
                var y = "K ; Y;E ; Z; z; s;S ".split(";")
                    , n = "Kingdom of ; Kingdom;Empire of ; Empire; Dynasty; Sultanate;Sultanate of ".split(";");
                for (t = sp_botNamesArray.length - 1; 0 <= t; t--)
                    for (l = y.length - 1; 0 <= l; l--)
                        sp_botNamesArray[t] = sp_botNamesArray[t].replace(y[l], n[l])
            }
            ;
            this.jW = function() {
                if (dr.ds && dr.dt.zp) {
                    var t;
                    for (t = g_playerCount; t < g_unclaimedLandIndex; t++)
                        g_playerNameArray[t] = dr.dt.zp[t % g_maxPlayerCount]
                } else if (9 === dv) {
                    var l = ce.random()
                        , y = k.length
                        , n = g_playerCount + e2.e3;
                    for (t = n - 1; t >= g_playerCount; t--)
                        g_playerNameArray[t] = "[Bot] " + k[(t + l) % y];
                    for (t = n; t < g_unclaimedLandIndex; t++)
                        g_playerNameArray[t] = "[Zombie] " + k[(t + l) % y]
                } else if (g_isSingleplayer)
                    for (l = ce.random(),
                             t = g_playerCount; t < g_unclaimedLandIndex; t++)
                        g_playerNameArray[t] = sp_botNamesArray[(t + l) % g_unclaimedLandIndex];
                else
                    for (l = k.length,
                             y = ce.random(),
                             t = g_playerCount; t < g_unclaimedLandIndex; t++)
                        g_playerNameArray[t] = "[Bot] " + k[(t + y) % l]
            }
            ;
            this.jX = function() {
                var t;
                if (!g_isSingleplayer) {
                    nR = Array(g_playerCount);
                    var l = g_playerCount;
                    for (t = 0; t < l; t++)
                        nR[t] = g_playerNameArray[t];
                    if (gI.gJ.nQ) {
                        var y = k.length;
                        var n = ce.a1a();
                        for (t = 0; t < l; t++)
                            g_playerNameArray[t] = k[(t + n) % y];
                        g_playerNameArray[g_localPlayerIndex] = nR[g_localPlayerIndex]
                    }
                }
            }
        }
        function kq() {
            this.a1e = [];
            this.a1f = [];
            this.bp = function() {
                this.a1e = [];
                this.a1f = []
            }
            ;
            this.dF = function() {
                0 <= this.a1e.length && this.a1g(this.a1e);
                0 <= this.a1f.length && this.a1g(this.a1f)
            }
            ;
            this.a1g = function(g) {
                var k, t = -1;
                for (k = g.length - 1; 0 <= k; k--)
                    if (g[k].gf--,
                    0 >= g[k].gf) {
                        t = k;
                        break
                    }
                for (k = t; 0 <= k; k--)
                    g.shift()
            }
            ;
            this.lQ = function(g, k, t) {
                return this.a1i(this.a1e, g, k, t)
            }
            ;
            this.a1j = function(g, k, t) {
                return this.a1i(this.a1f, g, k, t)
            }
            ;
            this.a1i = function(g, k, t, l) {
                var y;
                a: {
                    var n;
                    for (y = t.length - 1; 0 <= y; y--)
                        for (n = g.length - 1; 0 <= n; n--)
                            if (g[n].player === t[y] && k === g[n].id) {
                                y = true;
                                break a
                            }
                    y = false
                }
                if (y)
                    return false;
                if (l)
                    for (l = t.length - 1; 0 <= l; l--)
                        g.push({
                            player: t[l],
                            id: k,
                            gf: 384
                        });
                return true
            }
        }
        var g_playerNameArray, nR, g_isPlayersAliveArray, d0, d3, cz, d2, g_playerLandArray, hd, g_playerBalanceArray, b4, bM, bN, bQ, fU;
        function jR(g) {
            var k;
            nR = g_playerNameArray = Array(g_unclaimedLandIndex);
            g_isPlayersAliveArray = new Uint8Array(g_unclaimedLandIndex);
            d0 = new Uint16Array(g_unclaimedLandIndex);
            d3 = new Uint16Array(g_unclaimedLandIndex);
            cz = new Uint16Array(g_unclaimedLandIndex);
            d2 = new Uint16Array(g_unclaimedLandIndex);
            g_playerLandArray = new Uint32Array(g_unclaimedLandIndex);
            hd = new Uint32Array(g_unclaimedLandIndex);
            g_playerBalanceArray = new Uint32Array(g_unclaimedLandIndex);
            b4 = Array(g_unclaimedLandIndex);
            bM = Array(g_unclaimedLandIndex);
            bN = Array(g_unclaimedLandIndex);
            bQ = Array(g_unclaimedLandIndex);
            fU = new Uint8Array(g_unclaimedLandIndex);
            for (k = g.length - 1; 0 <= k; k--)
                g_playerNameArray[k] = g[k].name,
                    fU[k] = g[k].xe
        }
        function ko() {
            this.nf = 0;
            this.iB = null;
            this.bp = function() {
                this.nf = 0;
                this.iB = []
            }
            ;
            this.fo = function(g) {
                this.iB.push(g);
                g_spectatorCount++;
                fU[g] = 2;
                g_playerNameArray[g] = eM.st(g);
                eA.a0z(g);
                b5.r1[g] = (b5.r1[g] + 2) % 4;
                g === g_localPlayerIndex && (eW.show(false, false),
                    eB.tR());
                eA.mn(g)
            }
            ;
            this.fh = function(g) {
                var k;
                if (2 !== fU[g]) {
                    var t = this.iB;
                    for (k = t.length - 1; 0 <= k; k--)
                        if (t[k] === g) {
                            t.splice(k, 1);
                            break
                        }
                }
            }
            ;
            this.dF = function() {
                g_isSingleplayer || (30 === this.nf && 2140 <= c4.getTimeSinceGameStarted() && this.a1m(),
                    this.nf = (this.nf + 1) % 60)
            }
            ;
            this.a1m = function() {
                var g, k = this.iB;
                for (g = k.length - 1; 0 <= g; g--) {
                    var t = k[g];
                    if (ae.dD(t)) {
                        var l = Math.max(Math.min(100, g_playerBalanceArray[t]), as(12 * g_playerBalanceArray[t], 100));
                        100 > l || (0 === bM[t].length ? !dE.dF(t, 2) && dA && dI(t, l, 0, 0) : dA ? dT(t, l) : db(t, l))
                    }
                }
            }
        }
        function kk() {
            function g(l) {
                return t[l].a1t && k[l].a1y()
            }
            this.wQ = 5;
            this.wR = this.wQ - 1;
            this.vX = this.wQ + this.wR;
            var k;
            this.a1p = null;
            var t;
            this.w6 = this.jf = 0;
            this.bp = function() {
                var l;
                this.a1p = Array(this.wQ);
                this.a1p[0] = "territorial.io";
                var y = ce.a1a(0);
                ce.jQ(0);
                for (l = 1; l < this.wQ; l++)
                    this.a1p[l] = m.ic() + ".territorial.io";
                ce.jQ(y);
                k = Array(this.vX);
                t = Array(this.vX);
                for (l = this.vX - 1; 0 <= l; l--)
                    t[l] = {
                        a1t: false,
                        gf: 0,
                        a1u: false
                    }
            }
            ;
            this.n2 = function() {
                return this.w6 < this.wQ ? this.w6 : this.w6 - this.wR
            }
            ;
            this.dF = function() {
                for (var l = this.vX - 1; 0 <= l; l--)
                    this.vT(l) && c4.gf > t[l].gf + 15E3 && iu.a1v(l, t[l].a1u)
            }
            ;
            this.rp = function(l, y) {
                if (!t[l].a1t)
                    return this.a1x(l, y),
                        false;
                if (k[l].a1y())
                    return k[l].a1z(y),
                        k[l].vT();
                k[l].lH();
                this.a1x(l, y);
                return false
            }
            ;
            this.a1x = function(l, y) {
                t[l].a1t = true;
                t[l].gf = c4.gf;
                t[l].a1u = false;
                k[l] = new a21;
                k[l].bp(l, y)
            }
            ;
            this.a1z = function(l, y) {
                g(l) && k[l].a1z(y)
            }
            ;
            this.a22 = function(l, y) {
                0 === y ? jj.rr() : 3 > y ? iu.uP(l, y - 1) : 3 === y ? iu.xa(l) : 4 === y ? jl.rr(l) : 5 === y ? l === this.jf && iu.a23() : 6 === y ? iu.a24(l) : 7 === y && iu.y0(l)
            }
            ;
            this.vT = function(l) {
                return t[l].a1t && k[l].vT()
            }
            ;
            this.send = function(l, y) {
                t[l].gf = c4.gf;
                t[l].a1u = false;
                k[l].send(y)
            }
            ;
            this.pQ = function(l) {
                t[l].a1u = true
            }
            ;
            this.close = function(l, y) {
                g(l) && k[l].close(y)
            }
            ;
            this.a26 = function(l, y) {
                jm.vd(y);
                g(l) && k[l].close(y)
            }
            ;
            this.vf = function(l) {
                for (var y = this.vX - 1; 0 <= y; y--)
                    this.close(y, l)
            }
            ;
            this.a27 = function(l, y) {
                for (var n = this.vX - 1; 0 <= n; n--)
                    n !== l && this.close(n, y)
            }
            ;
            this.a28 = function(l, y) {
                k[l].lH();
                jm.bp(l, y.code)
            }
        }
        var dZ, sp_Bots;
        function jY() {
            var g;
            sp_Bots = 0;
            for (g = g_unclaimedLandIndex - 1; 0 <= g; g--)
                0 !== g_isPlayersAliveArray[g] && sp_Bots++;
            dZ = new Uint16Array(sp_Bots);
            var k = 0;
            for (g = 0; g < g_unclaimedLandIndex; g++)
                0 !== g_isPlayersAliveArray[g] && (dZ[k++] = g)
        }
        function eL() {
            a29();
            fn()
        }
        function fn() {
            for (var g = sp_Bots - 1; 0 <= g; g--)
                0 === g_isPlayersAliveArray[dZ[g]] && a2A(g)
        }
        function a2A(g) {
            for (sp_Bots--; g < sp_Bots; g++)
                dZ[g] = dZ[g + 1]
        }
        function a29() {
            for (var g, k = sp_Bots - 1; 0 <= k; k--)
                g_playerLandArray[dZ[k]] <= as(hd[dZ[k]], 4) ? 1E3 >= g_playerLandArray[dZ[k]] && (2 !== g_isPlayersAliveArray[dZ[k]] || 0 === g_playerLandArray[dZ[k]]) && fm(dZ[k]) : g_playerLandArray[dZ[k]] >= hd[dZ[k]] ? hd[dZ[k]] = g_playerLandArray[dZ[k]] : (g = as(hd[dZ[k]] - g_playerLandArray[dZ[k]], 1E3),
                    hd[dZ[k]] -= 1 > g ? 1 : g)
        }
        function iw() {
            var g, k = 0;
            for (g = sp_Bots - 1; 0 <= g; g--)
                k += g_playerBalanceArray[dZ[g]];
            return k % 4096
        }
        var pB, cH, a2B, a2C, r, s, pO, bq, gE, cB, pS, a2D, g_isIOSUser, c, e, d, q, a2E = false, a2F, a2G, i, h1, tS, hB, a5, b0, hy, vn, c4, dW, eT, cD, fi, vv, na, uY, a2H, a2I, a2J = 0, a2K = "", a2L = false;
        function a2M() {
            a2I = 2;
            a2C = 4029;
            a2B = "1.83.9   11 May 2023";
            jy();
            d8();
            a2L = true;
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
            a2H = (new Date).getTime() % 1024;
            a2F = a2N();
            f.bp();
            vv = new us;
            gI.bp();
            jt.bp();
            h();
            p();
            aD();
            document.addEventListener ? document.addEventListener("contextmenu", function(g) {
                g.preventDefault()
            }, false) : document.attachEvent("oncontextmenu", function() {
                window.event.returnValue = false
            });
            a2O();
            document.addEventListener("keyup", a2P);
            document.addEventListener("keydown", a2Q);
            document.addEventListener("visibilitychange", a2R);
            window.addEventListener("error", a2S, true);
            tS = 10;
            xK = new a2T;
            h1 = new a2U;
            hB = new u2;
            a5 = new nm;
            b0 = new a2V;
            hy = new a2W;
            vn = new nU;
            c4 = new a2X;
            c4.jg();
            c4.bp();
            dW = new a2Y;
            eT = new a2Z;
            uY = new bm;
            uY.bp();
            cD = new u8;
            cD.bp();
            fi = new ie;
            na = new uh;
            p7();
            ce.bp();
            ay.a0K();
            jp.bp();
            jT.bp();
            aJ.bp();
            jx.bp();
            eD.bp();
            jj.bp();
            jV.bp();
            pA();
            bw.bp();
            c4.c5 = true;
            setTimeout(function() {
                xJ(2, 14071)
            }, 0)
        }
        function aI() {
            a2L || a2M()
        }
        function a2N() {
            try {
                return window.self !== window.top
            } catch (g) {
                return true
            }
        }
        function a2S(g) {
            a2E || (a2E = true,
                g.message ? (a2J = g.lineno,
                    a2K = g.message,
                eD.rp(0, 6) && iu.a24(0),
                    g = "[A_ERROR " + a2J + "][" + a2K + "]",
                    a2a(g)) : (g = "[B_ERROR " + g.type + "][" + (g.srcElement || g.target) + "]",
                    console.log(g)))
        }
        function a2a(g) {
            e ? e.showToast(g) : alert(g)
        }
        function a2Q(g) {
            "ArrowLeft" === g.key ? gq.wE(3) : "ArrowUp" === g.key ? gq.wE(0) : "ArrowRight" === g.key ? gq.wE(1) : "ArrowDown" === g.key ? gq.wE(2) : "a" === g.key ? eR.r9(.96875) : "d" === g.key ? eR.r9(32 / 31) : "s" === g.key ? eR.r9(.875) : "w" === g.key ? eR.r9(8 / 7) : "1" === g.key ? eR.r9(5 / 6) : "2" === g.key ? eR.r9(1.2) : "c" === g.key && 0 !== ec && hy.a2b()
        }
        function a2R() {
            "hidden" === document.visibilityState ? c4.a2c() : c4.xt()
        }
        function a2P(g) {
            400 > c4.gf || (8 !== aJ.pe() && aJ.ur(g) ? c4.c5 = true : "Escape" === g.key ? aJ.aK() : "ArrowLeft" === g.key ? gq.a2d(3) : "ArrowUp" === g.key ? gq.a2d(0) : "ArrowRight" === g.key ? gq.a2d(1) : "ArrowDown" === g.key ? gq.a2d(2) : "h" === g.key && 1 <= ec && (g_uiVisibility = !g_uiVisibility,
                c4.c5 = true))
        }
        function a2O() {
            a2D = window.location.hostname;
            a2G = 0 <= a2D.toLowerCase().indexOf("territorial.io")
        }
        function kR() {
            var g;
            this.bp = function() {
                g = [];
                9 === dv && this.a2f()
            }
            ;
            this.a2f = function() {
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
            this.zT = function(k) {
                g.push({
                    player: k,
                    mv: 14 + ce.cf(20)
                })
            }
            ;
            this.dF = function() {
                if (9 === dv) {
                    var k;
                    for (k = g.length - 1; 0 <= k; k--)
                        0 >= --g[k].mv && (eA.n4(g[k].player, 0, 46),
                            g.splice(k))
                }
            }
        }
        var aZ, aa, hv, pp, xH, xI, x6, x7, vq, zg = 16, xK;
        function xJ(g, k) {
            g %= zg;
            if (g !== x6 || a2m(x6) && k !== x7) {
                var t = performance.now();
                vq = false;
                xK.xL();
                ce.jQ(g);
                x6 = g;
                x7 = k;
                a2m(g) && (jp.bz(g).a1s = k);
                if (a2n(x6))
                    a2o(t);
                else {
                    var l = jp.bz(x6);
                    aZ = l.c1;
                    aa = l.cw;
                    ce.jQ(l.a1s);
                    jq.jW([aZ, aa, l.gR, l.gO]);
                    a2p();
                    jT.a2q();
                    jq.a2r();
                    a2s(t)
                }
            }
        }
        function a2s(g) {
            var k = performance.now();
            tS = Math.floor(29 - (k - g) / (33 * jp.bz(x6).per));
            tS = 0 > tS ? 0 : 20 < tS ? 20 : tS
        }
        function a2u() {
            return 10
        }
        function a2n(g) {
            return g >= a2u()
        }
        function a2m(g) {
            return !(1 === g || g >= a2u())
        }
        function a2v(g) {
            return 3 === g || 7 === g || 9 === g || g === zg
        }
        function a2w(g) {
            return 2 === g || 7 === g || 9 === g
        }
        function a2T() {
            function g() {
                xK.dF()
            }
            function k(l, y) {
                0 < y && (xI[l] += y,
                    xI[l + 1] += y,
                    xI[l + 2] += y)
            }
            function t(l) {
                return xI[l + 2] > xI[l] && xI[l + 2] > xI[l + 1]
            }
            this.rk = -1;
            this.a2x = this.aA = 0;
            this.a2y = 8;
            this.a2z = 32;
            this.a30 = 8;
            this.a31 = 32;
            this.a32 = [0, 0];
            this.r1 = [0, 0, 0, 0];
            this.a33 = null;
            this.a34 = true;
            this.a35 = false;
            this.xL = function() {
                -1 !== this.rk && clearTimeout(this.rk);
                this.rk = -1;
                this.a33 = null;
                jq.a2r()
            }
            ;
            this.bp = function() {
                7 === aJ.pe() || this.a35 || (this.a34 = true,
                    this.aA = 0,
                    this.a2x = 1,
                    this.a32 = [jp.bz(x6).a36[0], jp.bz(x6).a37[0]],
                    this.r1 = [jp.bz(x6).a38[3], jp.bz(x6).a38[4], jp.bz(x6).a38[5], jp.bz(x6).a38[6]],
                    this.a2y = jp.bz(x6).a38[7],
                    this.a2z = jp.bz(x6).a38[8],
                    this.a30 = jp.bz(x6).a38[9],
                    this.a31 = jp.bz(x6).a38[10],
                    this.a34 ? this.rk = setTimeout(g, 16) : this.dF())
            }
            ;
            this.dF = function() {
                if (8 === aJ.pe() && eV.gg())
                    this.rk = setTimeout(g, 16);
                else {
                    if (0 === this.aA) {
                        var l = ce.a1a();
                        ce.jQ(jp.bz(x6).a38[2]);
                        jq.jW([aZ, aa, jp.bz(x6).a38[0], jp.bz(x6).a38[1]]);
                        ce.jQ(l);
                        this.a33 = jq.a3A();
                        this.aA++;
                        if (this.a34) {
                            this.rk = setTimeout(g, 16);
                            return
                        }
                    }
                    l = this.a34 ? 10 : 1E6;
                    l = aa - this.a2x - 1 < l ? aa - this.a2x - 1 : l;
                    l = this.a2x + l;
                    for (var y, n, z = this.a2x; z < l; z++)
                        for (var x = 1; x < aZ - 1; x++)
                            if (n = x + z * aZ,
                                y = 4 * n,
                                t(y))
                                this.a3C(y, n, 1);
                            else {
                                this.a3C(y, n, 0);
                                n = x;
                                var A = z;
                                (1 < n && t(y - 4) || n < aZ - 2 && t(y + 4) || 1 < A && t(y - 4 * aZ) || A < aa - 2 && t(y + 4 * aZ)) && this.a3D(x, z)
                            }
                    this.a2x = l;
                    this.a2x >= aa - 1 ? (pp.putImageData(xH, 0, 0, 1, 1, aZ - 2, aa - 2),
                        c4.c5 = true,
                        this.xL()) : this.a34 && (this.rk = setTimeout(g, 16))
                }
            }
            ;
            this.a3C = function(l, y, n) {
                k(l, Math.floor(this.a32[n] + this.r1[n] * this.a33[y] / 1E4) - xI[l])
            }
            ;
            this.a3H = function(l, y, n, z, x) {
                k(l, Math.floor(this.a32[z] + (1 - y / n) * x) - xI[l])
            }
            ;
            this.a3D = function(l, y) {
                var n = l - this.a2z;
                var z = y - this.a2z;
                var x = l + this.a2z
                    , A = y + this.a2z;
                n = 1 > n ? 1 : n;
                x = x > aZ - 2 ? aZ - 2 : x;
                A = A > aa - 2 ? aa - 2 : A;
                for (var B = 1 > z ? 1 : z; B <= A; B++)
                    for (var C = n; C <= x; C++)
                        if (z = 4 * (C + B * aZ),
                            t(z)) {
                            var E = this.a2y + (this.a2z - this.a2y) * this.a33[C + aZ * B] / 1E4;
                            if (!(Math.abs(l - C) > E || Math.abs(y - B) > E)) {
                                var G = Math.sqrt((l - C) * (l - C) + (y - B) * (y - B));
                                G >= E || this.a3H(z, G, E, 1, this.r1[3])
                            }
                        } else
                            E = this.a30 + (this.a31 - this.a30) * this.a33[C + aZ * B] / 1E4,
                            Math.abs(l - C) > E || Math.abs(y - B) > E || (G = Math.sqrt((l - C) * (l - C) + (y - B) * (y - B)),
                            G >= E || this.a3H(z, G, E, 0, this.r1[2]))
            }
        }
        function a2p() {
            2 === x6 ? a3J([256], [256], [0, 205, 256], [500, 500, 0], [0, 0, 0]) : 7 === x6 ? a3J([512], [512], [0, 380, 512], [500, 500, 0], [0, 0, 0]) : 8 === x6 ? a3J([410], [410], [0, 120, 210], [0, 80, 640], [0, 0, 0]) : 9 === x6 && a3J([512], [512], [0, 70, 180, 200, 290, 420, 512], [500, 500, 0, 0, 500, 500, 0], [0, 0, 0, 0, 0, 0, 0])
        }
        function a3J(g, k, t, l, y) {
            var n, z, x, A = g.length - 1, B = aZ + aa;
            B *= B;
            var C = t.length;
            for (n = C - 1; 0 <= n; n--)
                t[n] *= t[n];
            var E = Array(C)
                , G = Array(C)
                , F = Array(C)
                , M = jq.a3A();
            if (void 0 === y)
                for (y = Array(C),
                         n = C - 1; 0 <= n; n--)
                    y[n] = 0;
            for (n = 1; n < C; n++)
                E[n] = t[n] - t[n - 1],
                    G[n] = l[n] - l[n - 1],
                    F[n] = y[n] - y[n - 1];
            for (z = aZ - 1; 0 <= z; z--)
                for (x = aa - 1; 0 <= x; x--) {
                    var H = B;
                    for (n = A; 0 <= n; n--) {
                        var D = (z - g[n]) * (z - g[n]) + (x - k[n]) * (x - k[n]);
                        H = D < H ? D : H
                    }
                    D = l[C - 1];
                    var K = y[C - 1];
                    for (n = 1; n < C; n++)
                        if (H < t[n]) {
                            D = l[n - 1] + yj((H - t[n - 1]) * G[n], E[n]);
                            K = y[n - 1] + yj((H - t[n - 1]) * F[n], E[n]);
                            break
                        }
                    a3X(aZ * x + z, D, K, M)
                }
        }
        function a3X(g, k, t, l) {
            500 > k ? l[g] = as(l[g] * k * 2, 1E3) : 500 < k && (l[g] += as(2 * (1E4 - l[g]) * (k - 500), 1E3));
            l[g] += as(t * (10 * k - l[g]), 1E3)
        }
        function kS() {
            var g;
            this.nL = this.nK = this.nH = this.nG = 0;
            this.bp = function() {
                g = Array(a2u());
                g[0] = {
                    c1: [0, 5E3, 8E3, 1E4],
                    fC: [220, 250, 255, 220],
                    n6: [190, 220, 0, 0],
                    cm: [170, 200, 0, 0]
                };
                g[1] = {
                    c1: [0, 4E3, 5E3, 6E3, 1E4],
                    fC: [25, 0, 100, 0, 25],
                    n6: [25, 0, 0, 0, 25],
                    cm: [25, 0, 0, 0, 25]
                };
                g[2] = {
                    c1: [0, 500, 2500, 2999, 3E3, 3200, 4200, 5200, 5700, 8800, 1E4],
                    fC: [15, 15, 70, 40, 40, 40, 252, 40, 40, 20, 30],
                    n6: [80, 80, 190, 90, 40, 40, 248, 180, 180, 90, 140],
                    cm: [120, 120, 220, 110, 40, 40, 217, 10, 10, 10, 10]
                };
                g[3] = {
                    c1: [0, 400, 1800, 2E3, 3200, 4500, 6E3, 7700, 8500, 9500, 1E4],
                    fC: [10, 10, 20, 10, 30, 10, 16, 40, 55, 230, 230],
                    n6: [10, 10, 40, 50, 100, 40, 80, 120, 55, 230, 230],
                    cm: [80, 80, 200, 10, 60, 10, 16, 40, 55, 230, 230]
                };
                g[4] = {
                    c1: [0, 300, 1400, 1700, 3E3, 4E3, 1E4],
                    fC: [10, 10, 20, 10, 10, 170, 212],
                    n6: [20, 20, 60, 100, 100, 110, 170],
                    cm: [70, 70, 160, 30, 30, 60, 120]
                };
                g[5] = {
                    c1: [0, 1E3, 3E3, 3500, 4E3, 4500, 7E3, 7500, 8E3, 1E4],
                    fC: [10, 10, 20, 10, 5, 10, 20, 5, 20, 25],
                    n6: [30, 30, 50, 100, 30, 100, 140, 60, 140, 200],
                    cm: [80, 80, 200, 10, 5, 10, 20, 5, 20, 25]
                };
                g[6] = {
                    c1: [0, 700, 2650, 3200, 5E3, 8E3, 1E4],
                    fC: [10, 10, 60, 255, 255, 200, 200],
                    n6: [10, 10, 60, 255, 255, 200, 200],
                    cm: [80, 80, 255, 255, 255, 200, 200]
                };
                g[7] = {
                    c1: [0, 400, 1999, 2E3, 3200, 4E3, 4700, 5500, 6500, 9500, 1E4],
                    fC: [10, 10, 80, 255, 255, 55, 6, 70, 20, 155, 255],
                    n6: [10, 10, 90, 245, 245, 170, 80, 190, 20, 155, 255],
                    cm: [80, 80, 255, 235, 235, 55, 26, 10, 20, 155, 255]
                };
                g[8] = {
                    c1: [0, 700, 1300, 1900, 1901, 2500, 3400, 6E3, 1E4],
                    fC: [25, 30, 30, 30, 255, 255, 30, 40, 20],
                    n6: [25, 30, 150, 150, 245, 245, 80, 150, 70],
                    cm: [60, 170, 170, 170, 235, 235, 30, 40, 40]
                };
                g[9] = {
                    c1: [0, 400, 2009, 2010, 3300, 4E3, 5200, 6500, 8E3, 9500, 1E4],
                    fC: [10, 10, 80, 255, 255, 55, 23, 36, 20, 155, 255],
                    n6: [10, 10, 90, 245, 245, 170, 60, 160, 20, 155, 255],
                    cm: [80, 80, 255, 235, 235, 55, 9, 72, 20, 155, 255]
                }
            }
            ;
            this.a2q = function() {
                hv = document.createElement("canvas");
                hv.width = aZ;
                hv.height = aa;
                pp = hv.getContext("2d", {
                    alpha: false
                });
                var k = pp.getImageData(0, 0, aZ, aa);
                xI = k.data;
                var t = g[x6].c1, l = g[x6].fC, y = g[x6].n6, n = g[x6].cm, z, x, A = jq.a3A(), B = t.length - 2, C = Array(B + 1), E = Array(B + 1), G = Array(B + 1), F = Array(B + 1);
                for (x = B; 0 <= x; x--)
                    C[x] = t[x + 1] - t[x],
                        E[x] = l[x + 1] - l[x],
                        G[x] = y[x + 1] - y[x],
                        F[x] = n[x + 1] - n[x];
                for (z = aZ * aa - 1; 0 <= z; z--)
                    for (x = B; 0 <= x; x--)
                        if (A[z] >= t[x]) {
                            var M = A[z] - t[x];
                            xI[4 * z] = l[x] + yj(E[x] * M, C[x]);
                            xI[4 * z + 1] = y[x] + yj(G[x] * M, C[x]);
                            xI[4 * z + 2] = n[x] + yj(F[x] * M, C[x]);
                            xI[4 * z + 3] = 255;
                            break
                        }
                pp.putImageData(k, 0, 0);
                jp.a3b() && bw.bx() && jp.a3b() && (t = bw.lB("arena"),
                    pp.save(),
                    pp.globalAlpha = 1 === x6 ? .1 : 1,
                    pp.imageSmoothingEnabled = true,
                    k = 2.8,
                    pp.scale(k, k),
                    pp.drawImage(t, Math.floor((aZ / k - t.width) / 2), Math.floor(.5 * aa / k - t.height / 2)),
                    pp.restore(),
                    t = bw.lB("territorial.io"),
                    pp.save(),
                    pp.globalAlpha = 1 === x6 ? .1 : 1,
                    pp.imageSmoothingEnabled = true,
                    k = .87,
                    pp.scale(k, k),
                    pp.drawImage(t, Math.floor(.745 * (aZ / k - t.width)), Math.floor(.422 * aa / k - t.height / 2)),
                    pp.restore());
                vq = true;
                c4.c5 = true
            }
            ;
            this.jU = function() {
                var k, t = 0;
                var l = aa * aZ * 4;
                var local_PixelOwnerType = g_pixelOwnerType
                    , n = xI;
                for (k = aZ - 1; 0 <= k; k--)
                    local_PixelOwnerType[4 * k + 2] = 3,
                        local_PixelOwnerType[l - 4 * k - 2] = 3;
                l = 4 * aZ;
                for (k = aa - 1; 0 <= k; k--)
                    local_PixelOwnerType[k * l + 2] = 3,
                        local_PixelOwnerType[k * l + l - 2] = 3;
                for (k = aZ * aa - 1; 0 <= k; k--)
                    l = 4 * k,
                    3 !== local_PixelOwnerType[l + 2] && (n[l + 2] > n[l + 1] && n[l + 2] > n[l] ? local_PixelOwnerType[l + 2] = 2 : (local_PixelOwnerType[l + 2] = 1,
                        t++));
                this.nG = (aZ - 2) * (aa - 2);
                this.nL = 0;
                if (a2v(x6)) {
                    n = 0;
                    l = g_pixelOwnerType;
                    var z = xI;
                    for (local_PixelOwnerType = aZ * aa - 1; 0 <= local_PixelOwnerType; local_PixelOwnerType--)
                        k = 4 * local_PixelOwnerType,
                        z[k] === z[k + 1] && z[k] === z[k + 2] && 3 !== l[k + 2] && (n++,
                            l[k + 2] = 3);
                    jT.nL = n
                }
                this.nH = jC = t - this.nL;
                this.nK = this.nG - this.nH - this.nL
            }
        }
        function a2o(g) {
            var k;
            x6 === a2u() ? k = "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86fRU8Av6gRK76AeCE66hQ9IAw6iQ7IUu6kQ6IUu6lQy87EQmQofAK6Ak6nQUdA7F9D56nQAKAUQAKBA9F8D56nP9A9BKIBe57DaqQAGBeIBoSAKBAKjDGsQAFB6AySA7BUiDQrSKFCKCA6AyEDUcAKD6rV6AyFAoBCUc6yV6AyOB6C865WkBAEAKZ655X7Aod66M6a69Z967W5967W5967W5967W5867g5867g5867g5767q56675Z6675Z5676Z5676Z5676Z5676Zu77U6AKu678UyFEk78UyID9679UyID768L9yBA8A8DABAu8qEA8C769WEA8Cu95UoICG99T7AKGA9B9699UoKB77AUoLB56dAe69UyMBucAe69QUCBUCC7B6BGbAe7B58BABAeEAyYCAI6ZAe7B57B6AeHCUXAabAe7L57B7AKJCQ5UEHB57C7CQ5UEHB56C8CQ5eDHB57AUBCoV65eEG9QAZB965oEG9QAZB965yDG9QKZAUBAKCBa5yDG9QKZAKGAKEA665yDG9QUmAk5yDHB56AUED8AkxAUEAe7B565oAeCALyA7HV575oA8AyBOKGHf585qA8AKEN9Ay7p585sBVmAy7p595sBVkAo76P95uBLjAo76P9AKCAUB5rA8N6AK78Q55sA6V6Q65tAKQAMCQ756AGT8RF58AKBAz96RP6AFTz7P6oBTz7b59Rl58Rv57R675z7975V7975V7875f8HzSlwSbxSbxSbxSbxSlwSvvS56ZApRSuYA6L7S66WA6L7S656yBFeJL7S656yBFeIL8S656yDE8A9MB8556yEEoNMB8t6yFEAPMV8t6KJD7B8MV8t56BokB6Mz8t5UQD7B6M6S65yAyIAUlB7M6S65yAyuB7M7S75xAovB7M7S65yAeuCLZS75xAUuB6AoBM6S75xAKvB6NL87596BzhS759oPNz8959UPNz89589B8Nz9FsAKrB9Np9PqAUpCLiTV6oClyCD9C9M8Tf6oCloCD8DVaTz6UCloCDomMp9p6oCleBDUqMf9p6yClUBDUrMV9p67AN97AKFEABAfWTj66AKFD8M8TACAZ6yDAUnM8TACAZ66ELeT556ypNB9j67ELeTZ67EVeTP6ytNB9F67EffTF66EpfTZMAyDAUpEzfTZHByoE6NL9jDBKFAUpEfhTjCA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6Ao8i58m7Ae8Y59m7AK8O6O67us67us65u6ui68r6AKau8q6AyEAUau9qUUCE69p9B8AeFB7u8qASAyEB6u6qUSA7AUQu6qyPC5u6qyQC5u5q8BoZuscByZuifBAcA8A5s9rKHDKIA5s8r6AUmAUCtO78ti78AeCs9v7AUDs9wiwwsvwiwwsuw6s5w5s6wsuw6s5w7AyBr8xslx5r5x9rY99rZCq8ysay6q6y6qtJqPMBeGoFgP6BWe5lPKQW65pO7B8W55rOoXV95zN7C7V655VbEMK55pZEWI557MKtU8557MKuUj66LowP6AeFA7DF69LKyPySCZ8VDFL5oWB858pBFVyC8B5588J7FpqAeEC9Bt89Jy68M6EAJ59e9o7BYEUD598Je7pU6sJU76AoOKQsJU96J96sJU96J66vJU96JkyJK97Ja5U89J9B6AK7k5o88J9BKHAeFA9AK5k5y88KAKC6AeDEu58I7KKBEAs658I6OeGAoh659Iz5yf66K86PeFA7B666y8z68Bk6y8z7KH668Iz7eF669IwwI58vIwyISzIS6K7S66G587U59X9AQhF8X8AeqAZ9U5qlAopAj9e5gkAypAj96E9X7A6EAD6BEgmA7D9AkBEWoA6D8AuED8YKHD7AkID5YKHD7AkJDqrA6D6AkKDWsA6D6AkLDCtA7DyD6MC8Y8A6DoD6OC5ZAHDUE6NCqzA8DAE6QCM5eJC8AkTB8ZoKC7AkUB6ZyKC6AuYA9Z8BAZA56ZA7Z9BAaA589KJC6A589UIC6Aw9eJCoE6bAM67A8CoE6bAW67A7CoE6bAg66A9CUF897A8CKE899A9B9AeDAUGAS9AJB7A9AKH889A9B6B8888BKOCI87BKOCI88BKMCI89BKKCS9KLA7Cc9ULA6Cw9Un89Uo89Kq889Em88E5887E688yu886E5887E6887Ew87E5887E5887Ew88E5886E6886E788ov88ow88ov88yv88ow88ew88ey88K5m8Az88Az88AzH" : x6 === a2u() + 1 ? k = "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Fs69FKxJ6556KX78Fs7AxFATAK75558KX78Fi7KuFeSAU7t59KN8AzvKuFyQAU7t6BBmAxvetF7BoDHj6U99mUvvetF8BeEHZ6e98metvUvF9BUEHZ6e98monv7E7GKJAy7Z6o7UBC5mocAKGAUCv7C7IKHA6Hj6o7UCCr86B8BUCwKZIoGA6HZ66HUDCX88B6x7Ce8yFA6AeBG8567HUHB8nAHy6CA8yFA7AUCG8L6AOyHeIB5nUEy9B6I8AeJAUCG7L7AOyHyJBJIBe9ADA8AUDG6L8AOyH79aBK9UCA7AUEGzTAYxH99eAVBAyDG6L9AsvIJ99AAhAKHGpUA5s7IJ99AAoGpVA6sy8T99AAmAoCF9MUGsy8T99AAfAoJF8MeGsy8T99AAdA8A7F7MoFs6Id99AAcAyKF7MyEs6Id99AArF6M6AsuIx99AApFzdAYuI6999AAnFzcAYvI6999AAnFpcAeDAOrI6999AAmFpdAUEAOrI6999AAmFpdAoBAYrI6999AAlFpeAoBAYpI8999AAlFpeA6sU87999AAmFfeA7sU86999AAoFBgA7BACrK85999AAoE9NUJA7AsgIx99AAoEBpBKDA5re8x99AAqCACBpqB9ro8n99AAtB7AeMOeTr6IT99AAuAKDBKDAUBA9OoTr7H9999AA5yGA8A8OoUr8H5999AA59AoKAzuB7sU69999AA78AVwB7se58999AA9ABOyUso57999AChB8s9F8999ACgB6tK58999ACgB6tK59999ACgBs5U59999AA7eCP8Bi5U58999AA7eCB9AVnBO5U59999AA9oCN9BE5e59999AA9oBOAIt6F9999AA9eBOAHt7F9999AChA6t9GJ99AA7eBOUCBeGuAuAeK999AA7eFBKDMoEBAHuKuA6A6999AA7oGAyIMeFAUCAKBAeGuot999AA8yTMeKAeHuyu999AA8oSMeKAoFu8AoBEJ99AA8oSMULA6AO7KDAen999AA8eRMAOv8AKEEJ99AA8eRL8B5v8AeFD8999AA8eQL8Bs8AEAymAyB999AA76BpTBs8KEAeqAeC999AA7oOL9Bs8UDAyqAKE999AA7UOL9Bi8yCAypAeD999AA7UOL8BY87AeEEKDAn99AA7UNL7Bi88AeFET99AA77A9AUBL6Bs89AoEEd99AA76A9AUBLoNxeDAeq999AA77A6L8BtAET99AA79AzQB5yUo999AA8KBL6B6yon999AB9yUyen999AB9USy7ET99AB89B7zKo999AB87B7zon999AB8yRzyo999AB8oRzKCAKBAKn999AB8eSz8D9999AB8ATzyCAUk999AB8KUz6AUCDx99AB8KU5XDd99AB8UT5WDn99AB8KU5UAKCAKBDT99AB8AU5WAKDDT99AB78CFWAoCDT99AB78B85YAoDDJ99AB77B85ZAyCDJ99AB8KM5ZA8AKf999AB8UI5bAKCD8999AB8eD5eAKDD9999AB7yC5tD6999AB7eC5vEJ99AB67AjuEn99AHOEn99AHQET99AHQET99AHUD7999AHRAKDD6999AHLAeDD9999AHMAyCD7999AHNAyBD7999AHSAKCD5999AHTAUBD567UB999AAuD767UC999AAsAKBAyBDQ7UDAUD999AAoAyBDQ7UI999AAoAoDDQ7AF999AAtAKBAUBDa7ABAoC999AArAKCAKCDT99AHXAKDDJ99AHVAUDC8999AHZAKDC8999AHfC5999AHaAKDAKBC5999ABvAP8KCAoW999ABuAP8UDAKY999AHiCx99AHeAKECeyAT99AG76AKHCUsAoBA5999AG8KWEeEAUG999AG8eBAUSEUDAKG999AG76AKGAKEB8EADAUE999AG89CKlAUEAn99AG8oBAUU999AHmB9999AHkAKDBoDAd99AHmBUFA5999AHjBUDA9999AHkA9AeJ999AHhAKCA9AeJ999AHkBAIA6999AHgBKHA7999AHhAyCAoBAKCBT99AHfAUBAUHAUBBn99AHgAKCAUBAKDAKDBVoAn99AF96AKHBVpAn99AF9yBAeROAE999AF9KYOAD999AF9oZN6Ad99AF98CT99AHgAUCBn99AHtBn99AHuAKCAn99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AGIAd99AJ99AJ99AJ99AJ99ACdAd99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AH7oE999AH5eB999AJ99AJ99AFGAKBAT99AJ99AJ99AJ99AJ99AC9KB999AH5UBAoF999AHtAyCAd99AHtAyCAd99AHvAx99AHxA7AUC999AHlAUFA9AUF668Ad99AA6ABAeCAyJAeE668Ax99AA57AeCAKEA7AeBA7AQ67Ax99AA56AyFA6999AHrAKBAKDA7999AHwA88mAdFBHDAVgAxFA97FALfA5898AKHA969KEOAF899AKGA98kAxGBE89A8YeII7AnGBoCAs76B7TUOC8Bo8yF9EA9AKDAeCAKBvyUN6AUyCUVB6G7CxDA9AeCv7C7NUDE8DABAULB7AeED9AyNDw9yJAyCvydNADA7BoDAoEAyBAyDD7A8C7CKFAeEAeHBKr88ACA6BE8KbNAwAKoAKhB7CyKFABAc7UDAUCAKIAUBveCAycM6M9AKoA7F6AKE86yEAKLvoHAUhKoIAguAKE858AeCBO6yDA7Ee9yEAM6m58AoDA9u6AoGFo8g6686UCAoCAUGueGAU7o65bS69A6t7KoubyDAm6UGtVJD9c786yHszND7c886yHA6AOkL6DrABKC8sA7AoCoKFC6L9DhCBKD8cAUNB5n8A6CfUD5eAFAKGAcbA7BUPn7A7CBWDrP8aA9BUOAyCm8BUQMUggABAKCAwRBAFAUCB8AeCm6ByEAUIMUch58MAUCBADCyBAN8eSAUDA8MAZAKBiIMAKDBADCr8UbAKCAVWCXv799AoMBADCr7V58AKDB7jl99AyMBADC5c7AUOAUKAeEA6D7QUTj68RBKDCg8KDAeEBeKAKTCf69CD6ABAcIByDCWaAKLAKYAUOBoIEAHR8AUCBr6wAAeGByDCqjAecC6A5W6AKDBX76AKB78eIBUKAeZWAEA9AoUa7BD85777A8BeMAeaUeDBAFDC69BD8779UTAeZUeGA6AyOAKMbAMm9787AKCCKDCp96AUEA7AyHAKPAKDAq7AOnKDAR78AUBCyDCz9oDAUJA5d9Br9568yCA6AK8yLAUQAoXT7foNn667yIAeDAUBAKEIyGBALAySUXMBX9u79Cy96BeGCp95fUIn669oNG8AoTB6A8Cf9rQAN9969UCAKCByCBeCHAOA9Cf9bR68oDA7A6DACA6Ao8UbSvT68ABAyEBeEC6AUDA6FKGCUiR87S68oBA6CAeA7AUCA6AKUAeQA6AUBB6D7R87P6CA7GAFCU68B9A7AUCA8A6AKBA8D9R77W6DA9BABE6A8De5yRA9AoEA7AUEE9RbL6UA9AoKEAJB9A8Ae6yIB7Ao58RHI6cA8AoPA8AUHAUPBKSQB7KGAk9ulAeGBUJAUHAyRA7CL56R869QRAeLAoRAyZAyHA6A7AUXPp5yDB969aHAeZAKhCKGA6D7O8P6AUR69kEBAFAoKGUEAymOUBAf58AUL6896LKKnOKCAV7Q886FK8AyDBKOA9N8Ru8aMc9RQ8kEd8RQ8aBd8Q9AoD68F97Z6AKrQu9j9KHAM5yHDf587B59eKAM5eJCp6HF6IZeKCB5vJ6OZV777M6AAoMZp7RN577AKEBKQAyFZ6Q57QBKC56yRAeGA9az577VA9BF6KcAq77OvWA9AeDAj6q8AHCVp7Y585cKQA7JeND57YA8AZ6yEC5bzCB9DRa57oHCM5oGB7DeEGeVC97bAUB57UJB6Z9A8BUdA7GeWC87R588BASZ7EeJGoYC77I6AA9Cq5UmA8G7CoeCUF6696MAyiY7AeOB6A7G8CokA8A967a6C58B6Ao7AaE767k7MxFeFDAdE966668MpFyGC8C8F666D68" : x6 === a2u() + 2 ? k = "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" : x6 === a2u() + 3 ? k = "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C9AKsV957oMAolA6Ce7ABDABEqS57oPAenAKaG8AKfAKtV7568AUDI6GyCDUBE5V7568CAEG8GeBDyBEqQ568CAIG6GKBD6AKrV6568CKLGo59AKlAUqV656yBAKWBonAUVF8AKmAKpV656oCAUWB7DoFCA58AKmAKpV656oaCAgAoVF6AKnAKpV656ebCeeAoVFyBEABECP56KfCodAoSF6AU8MP56AhCocAyQFyEIMP559DoZC8AyPFUGIWO56AhC6C9AyPFAHIWO56AfC9C9A7BeJAUmA6IgO56AfC7DUGAeBA9A9AekBA8CO56AdDAfA6AUCA9A9AyiBA8CN56AeDKeBUHA9AyhBK8CN56AFAKYDKeC7AekBA8MN559AyBCygC9GyMICL56KEAUZDecFyBA9BU8WJ56AFAUUAUDDUdFoFA6BU8qG56KFAUUAUDDUdFUaIgG56KEAUTAoCDedE9C9IMI56KEAUSAyCDecE8DK8MF56oDAeREKbE7De8CF56UFAeSEKbEyhIWF56KHAeREUaEejIWF56KFAyQEUbEUjIgF56AFAyQEeaEeiIqE56KEA6B6EebEKiJB9956KDA7B6EebD9Dy9L9856UDA7B6EebD6D7JUHAf8756eCA8B6EUcDymJeIAV8657USEKdDemJyIAV8t7eTEAJAUSDejJ9A8AL8t7eTEAHAyRDUTL6A8AV8t7eSD9A8A6B6DUPMUGAV8t7eRD9A8A9ByfBpeS557USD7A8BKPDAOM9S657eSD7A7BeODALMyBAz8757eRD8A6ByNC9A7AoBMyBAp8857eRD9AyPBedA7AoBMoDAV8857eSEADB6BonAVXAeBS957eREUBB7BooALWTt7eRGKNEKBLoCAoMAV8F7oRGKMEUBLoDAeGAV8657oSGAMEeBLoKAV8757eTGAMEeBLz9857eTGKKEoBLp9957eTGKKEKFLgA57USGUJD7A9LWC57eRGoGDeOLWC57USGoFDeOLCF57UTGeEDeOK9U657eUGeBDyNK9U757eUGeBDeOK8U957UVGeBDUPK5VZ7UWGUBDAQKgQ57KXGKBDAQKgP57UXGABCKCAySKWR57UZF8AKRC7KKNAWF57KaF8AKRC7KAJAUBAgG57KaF8AKQC7KAJA5U957AbF7AKQC6KAJA6U857UaFyDB6CzAA9A6U957UaFoEByZKKHA7VF7UaFoHBUXKUEBCK57eaFeIBKYKKCBWK57oaFeIBKXKKDBWK576Co5eIA8AKBCVDAUKVZ77Co5eFA9C6KeBBMM578Co5UBBUaL5Vj78CozAKMC6LWR579CeyAKMCzNV7579CoyAKLCzFAKHV8578CyyAKKCfIAKEV958AZFABBAXK8Wt8KZE8AeJCBKWj8oYE7BACCBLWj8eZE7DVLWj8eYE8DLOWF86CUwDLQV7587CUwDBRV6588CKxC9L9V5589B9E9C9MCP59ARFAaMWQ59ARFUXMgQ59AQF6B6M7V659AQGKKM8V659AQGyCNWQ59KPT9V759APT9V759KOT9V859ANUMS59AJUqS59KHU5V8R7AiMA5U5WB7yE6WWB7yE6VWV7eG6UWV7eH6TWV7oG6TWV7yG6SWV7oI6SWL7oJ6QWL76A86QWL76A96PWL76BP96AUNWV78A9598AeLWV8KG599A7A6WV8KG6AA9AgVSUG588AKMA8AWWSUF589AKNA6AqVSUF588AUOA6AWWSeD588AePW9SeC588AoPXH7UEB6W877oDB7W777yBB8W777yBCCa77oCB9W677yBB9W777oBCCa77eCA6AKNW777UDAyCBWb77UFAeBBgc77KJBqb77UGB6W877KDB9W877KEB8W877UDB7W976eBA8AeRXH6UBA8AoPXR6KCA8AoQXR59AUKAoOXb59AeKAoNXb58A6A9A6BCg758AeBAoIA6A9XR6yIAUGA8Xb7UKAeBAgh77UKAKCAWjA6Ab6yLAgjAyG76UJAqkAoC768A7AqlAUC769A7AqmAKC769A7Aqp768A7A5X8AUB768A7A5X8AUB769A6A5X8AUCPAB6QA7AqnAKEO8AaPA8AqnAKEO7AkQA7AgnAUEO7AkRA6AgnAeDO7AaSA6AWoAoDO6AQTA7AMoAoDO6AQTA7AMoAyDOyB6TY877gw76KCAeBA7Y776KKAeGAMo769AoBA6AWn77AKAWo77KIAWo77UDA6YR8Cp78Ms777Y5776Y5777Yv78Yv77Yl78Yl79YR8Co78Mn78ql78qk78eBAMk78Wn78Cp778Yl77A8AMk77oFAUDAgi77KEA6AeDX577ADA8AKEX577KBA9AKFX578ABA5X5786X6785X6785X778Mp78Cp779Yb79Yb79Yl78Yl75Y7765Z7769Zb7C5Z69AL98Zj69AV97Zt69AV95Z5569AV95Z5569AV9yDAgx57ABTKFA5ZF69AV9KDA6Y957KBUCy57ACT8Zj68AV97Zt68AV97Z5567AV95Z7568Af9C6F68Af87aZ69Af87aZ7ACS5at7KCSg6557KCSW6657KBSW6675q6775g6875W6975W697zbHyb57ub87qcvkc57jc77ic77ic87hdHgdHedbddlXcKBB77Uc6AeCAeI7Sc8AUP7Pe77NfHKf57Ef97Cf97BgHCgHAgRAga98gk97g769rc69rc69hd69Xd69Xe69Dg689ha88h5686f9AUP68hHAKf68Dp679ik77iu77iyYAaxi6CoD6wi6CyE6ti8CyE6ri9CyE6ri9CyF6pjAaAupjAaAkohUBB9668heBB9667ju6r5766X5966r57658AKFj8657AeCj9657k5657ku57ku56k6655k765r6765r67CKB6gk7CAD6fk7CAD6fk6CKD6dk9CKC6dlAVAablKVAaaleVAQaloVAQZloVAQXl6CUB6Xl56vluvluvluvlkwluvluul6DUB6Ml7DAF6Jl7DAF6Jl7DAI6Fl8DAI6Fl9C9A96El9C9BAEAZ98l8C8BeCAj97l8C8BeBA6595l8C8CP9r79C7CZ9h79C6Cj9X8KYCt9X8UXC559N8eXCt9N8eXC559D8oXC9586meYC9586mUYC9586mKZDF85mKaC9586mAaC9586mAaC8587mKYC9588mAYC9589mAXC9589mKWC9589mKWC959D8KVC959N8AVC959N8AVC959N8AUDF9N79CKf59N78CKgx6Ae9N78CKgxyCEKBFX77CKgu6AKPAeGA6EAGE9l6CUguyBBoFAKND6A8E8l7CKhuoCBeFAKSC9BUul7CefueDBedCoNE6l6CeguUEA7DyWBovlyYDO6KxB9B6E6l6Coes6A8Ao5ePCUsl6Codsy67BeYEr77CUdse7KJC6Er78CUcsU7UIC8Er78CUasU7eFDerl8CKaqeEBU78AUjEh79CAZqUJA7L7EX8AUC5qBjEX8KTC5p9NyEAUlg9AKzB8C6p8A7ApeD7mKTC5p8A7AoFAVXD8mAUCscA6AVYD8mAUAyCB6rADAfYD9mATAyDB6r6MeomATAoDB6r6MonmAUAeDB6rzaD8mKUAUDB6m6AeuM6D8mKUAeEBr86AosM7D9mAUAoEB6mUGEBeD9mKTAoEB8mAJD6NKnmeRAyDB8mAJD7NAnmoQA6AKTj7AUVBAbAUINAmmoPCeCAN57AoUBKbAeIM8D8myOCAFANfAKWBUQAKDA6C7AoDAeEMymm6BySAyBhACBoZBADAUHC8BKFMKnmyTBoFANcAoNFKZN6EN8oUBeEAXcAeKF6B7AKGN6EN8yUBKFAhbAeJF7BoFAzkEX8oUBKFAraAUJF7BoIAfkEX8yTBoCA6goCA7GAGAKEO9Eh8ySChXAUGGoCAUDPAsmyQBABBrXAUDHKBPKsmyQA6AKSggcEr8yRCrXW8AoBD9kUBCUUCXVXADAKpj9AUVCUVgCfAUDED8KXCNTXUCAoomAXCXRXeCAoomAYCXQX8EX79CoWf6X7Ee5yCgKZChOX8EoeAeDAyNAXVCyYfWmE6C7BKBAULAhVCyZfCmE7C7A8AyBBKDe7AeLCyae8YKtCUCAeFCAEeyIA7Cyae5YogAULCeCAUECKDe6A9A7CobegtDKEBKXA6CUDe7BKGCUceWtDKFBAyAhJBKECedd6ZKdA6BAyAhJBUCCodc7AKHZecA6BAyAXLD7DC8UFAg58C8AyKFACfekDC8AHAM59C9AeLE9ArND6Dg77a7C8AeLFADfojDq77a7EX67Dyjb5a7EX67D7D7bW68ED66D9D6a9AKCa9D9k6EAja6AeCbekk7D9Dq66AoBbokk9D7Dg66cAklAlDW65cAlleiDW6M8yklohDW6M86D6loOAURDM6M88Dr76BUCB8DC6M89Dh77BKDB7DM59dKgl8BADB8DM57defl8A9AeUDM5q96DD79A8AUWDMyd9C9mUBAUDAUXDC5W97C9nAXDMzd8C7nUWDWyd9C5neXDqvd9C6nUXD7YrECKnAXzCelYrFCAnAoLAXkCUDAUhYrGB8D9AyKArlCKCAUiYhGB8EAFA9ArmCKBAeiYXHB7EAGjKYDqqe7B7EAGjUXDqqe9ByoA7jUXDgqfABAKLEAJjKYDWpfoKEAJjeWD9XrOA9EKJj6B9EChfeHEoJj7B9ECgfUFE6A9j8B9ECgfeDE7A9j9B8ECgfeBE9A9kARECgkoHkKRECgkyFAKFj6B8ECflKFj7B7EMek8A9j6B7EMelAIjyRECflKHj6B6D9XX7UGC9AhZBylXr7UGC9ANbBylXrDAK69A5j7BylXr7oEj7B6D5X5loEj6B7DqkloEj6B8Dgkt9AM7oTDWkseCBoEbKUDMlsKDByCbUUDgksACdAUDqjv7A5ZAVD6Xi76A5ZAWD6XY77AWzCemXHdConMUDKsmAM9AYEBUAzD7dCopL8A7KbdCyqMKBKldCyrWvcC6EqX7bC8EqW7bC9EoCAMSxo" : x6 === a2u() + 4 ? k = "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okA8BoDWK57x8D8A7FeCC7AoCAKDAUZDeMBAGWK56x8D8A8IeBDogBoIA7WU55x8D8A8L9DAQA6A8We55x7D7BKCAzLC8DCaFi97D8B7LKbDCdD9AUKx7EoPK9CoeXUiA6APFE8B6K6B8DMkC8z7E8B9KoODqoB95WFUPK9AonYoO5XFUQPMyA55aFUPAeEO578K5UWO678A5UWO678A6oJO778A7ADO778CTC6Ab5gSC8AUEAltV8DyE7rV7D7AvqV7D7A67oTUCCemAbrS9AoY78f7UEA9A7C578f7KSC878f7ASDH8V6UFAKTDR8V6UZDR8V6UZDR8V6eYDR8V6eZC978f6eTAeDC978f6eTD578f6UTD678f6eRD778f66AeEA6D878gR78gQ78qQ78qQ78qQ78qR787Vl9CK79MI79qG79qE798UM58APpUC57AjpT8Z7A55pT6Z8A65rTg58A75qTfCAp5UH5pTfDAzyA75qTfDAyMAQ86TLWAQ86TBXAa8z9BXAk8z88MoE68z86MyE686SzZA5686SfaA6688R9M6A869B76M6A769V7pbA669p7fcA569z7VdAvAQ68mQSrP78rP78sP68rP78rP68sP68sPmvPmwPcxPS5yDApm86Vl866Nm68NZ8ABdLc58ABdpZ58ABdzY58ACd9L958ADd8L858UCd8L758eCd9L658eCezK58eDezI58oDeymAe66586AXFDyHAyBAUFFZ86AXIDKKAUKAoCEt88ANNCegEZ89AXNCKhEP9KBfyQD7EJIBonD89KBAqD7B7AS9oIE6DUSAc9yEFAeB9AdyC9B8AnzC6CAD9zBUEA7CeC95eJA6An99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99ACeAT99AT99AT98Ad97Ax96Ax97AT99AABAT99AJ99AJ99AH6AC997Ax9yF99yE996A55lAO57A55lAY56A55lAY56A5bUBaoCt7Aq7UCaUEt7Aq7KDBUBY8A5t6Aq7KKAyFYyEt6Aq7KKAoHYoCt8A5a9BUBA97EAyhAMiClEA6DKCWoBAKf7EA7C9AgYDo5yF6sA6C7AqaDo5eH6qA8C6AqaDy5UH6qA9CyEW6D6FKC6wA8CyEW6D7FAG6sA8CyEWynFAG6rA8CyCW6EKzA56qA7CyDWKv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" : x6 === a2u() + 5 && (k = "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");
            k = m.ia(k);
            var t = jp.bz(x6).a36
                , l = jp.bz(x6).a37;
            aZ = 1E3 * k[0] + k[1];
            aa = 1E3 * k[2] + k[3];
            hv = document.createElement("canvas");
            hv.width = aZ;
            hv.height = aa;
            pp = hv.getContext("2d", {
                alpha: false
            });
            xH = pp.getImageData(0, 0, aZ, aa);
            xI = xH.data;
            for (var y = k.length, n = true, z = 0, x = 4; x < y; x++)
                if (n) {
                    for (; 0 < k[x]--; )
                        xI[z] = l[0],
                            xI[z + 1] = l[1],
                            xI[z + 2] = l[2],
                            xI[z + 3] = 255,
                            z += 4;
                    n = false
                } else {
                    for (; 0 < k[x]--; )
                        xI[z] = t[0],
                            xI[z + 1] = t[1],
                            xI[z + 2] = t[2],
                            xI[z + 3] = 255,
                            z += 4;
                    n = true
                }
            pp.putImageData(xH, 0, 0);
            vq = true;
            a2s(g);
            xK.bp();
            c4.c5 = true
        }
        function kT() {
            var mapsArray;
            this.bp = function() {
                mapsArray = Array(zg);
                mapsArray[0] = {
                    name: "White Arena",
                    c1: 230,
                    cw: 230,
                    gR: 1E3,
                    gO: 2E3,
                    a1s: 173,
                    per: 1
                };
                mapsArray[1] = {
                    name: "Black Arena",
                    c1: 800,
                    cw: 800,
                    gR: 100,
                    gO: 50,
                    a1s: 43,
                    per: 1
                };
                mapsArray[2] = {
                    name: "Island",
                    c1: 512,
                    cw: 512,
                    gR: 128,
                    gO: 32,
                    a1s: 0,
                    per: 1.5
                };
                mapsArray[3] = {
                    name: "Mountains",
                    c1: 960,
                    cw: 960,
                    gR: 60,
                    gO: 8,
                    a1s: 0,
                    per: 1.2
                };
                mapsArray[4] = {
                    name: "Desert",
                    c1: 900,
                    cw: 900,
                    gR: 100,
                    gO: 5,
                    a1s: 0,
                    per: 1.2
                };
                mapsArray[5] = {
                    name: "Swamp",
                    c1: 1E3,
                    cw: 1E3,
                    gR: 100,
                    gO: 40,
                    a1s: 0,
                    per: 1.2
                };
                mapsArray[6] = {
                    name: "Snow",
                    c1: 1E3,
                    cw: 1E3,
                    gR: 100,
                    gO: 20,
                    a1s: 0,
                    per: 1.2
                };
                mapsArray[7] = {
                    name: "Cliffs",
                    c1: 1024,
                    cw: 1024,
                    gR: 128,
                    gO: 32,
                    a1s: 0,
                    per: 1.5
                };
                mapsArray[8] = {
                    name: "Pond",
                    c1: 820,
                    cw: 820,
                    gR: 200,
                    gO: 100,
                    a1s: 0,
                    per: 1.2
                };
                mapsArray[9] = {
                    name: "Halo",
                    c1: 1024,
                    cw: 1024,
                    gR: 128,
                    gO: 32,
                    a1s: 0,
                    per: 1.5
                };
                mapsArray[10] = {
                    name: "Europe",
                    a36: [140, 130, 120],
                    a37: [12, 12, 76],
                    a38: [240, 120, 4672, 30, 26, 30, 90, 8, 32, 3, 9],
                    per: 1
                };
                mapsArray[11] = {
                    name: "World",
                    a36: [165, 145, 125],
                    a37: [15, 15, 69],
                    a38: [250, 100, 8, 25, 15, 25, 90, 8, 32, 3, 9],
                    per: 1
                };
                mapsArray[12] = {
                    name: "Caucasia",
                    a36: [140, 130, 120],
                    a37: [20, 20, 84],
                    a38: [240, 120, 100, 30, 25, 30, 90, 8, 32, 3, 9],
                    per: 1
                };
                mapsArray[13] = {
                    name: "USA 48",
                    a36: [120, 105, 92],
                    a37: [12, 12, 60],
                    a38: [300, 300, 9827, 26, 18, 36, 36, 8, 32, 3, 9],
                    per: 1
                };
                mapsArray[14] = {
                    name: "Middle East",
                    a36: [140, 130, 120],
                    a37: [12, 12, 76],
                    a38: [240, 120, 4672, 30, 26, 30, 90, 8, 32, 3, 9],
                    per: 1
                };
                mapsArray[15] = {
                    name: "Scandinavia",
                    a36: [140, 130, 120],
                    a37: [12, 12, 76],
                    a38: [240, 120, 1024, 30, 19, 30, 70, 8, 20, 3, 9],
                    per: 1
                }
            }
            ;
            this.a3b = function() {
                return 1 === x6
            }
            ;
            this.bz = function(k) {
                return mapsArray[k]
            }
            ;
            this.nF = function() {
                return x6 === zg ? dr.zd : this.bz(x6).name
            }
        }
        var hw, g_pixelOwnerType, jZ, ja;
        function jS() {
            void 0 === hw && (hw = document.createElement("canvas"));
            hw.width = aZ;
            hw.height = aa;
            jZ = hw.getContext("2d", {
                alpha: true
            });
            ja = jZ.getImageData(0, 0, aZ, aa);
            g_pixelOwnerType = ja.data
        }
        function kU() {
            function g(J, L, P) {
                C[0] = J;
                for (J = 1; J < P; J++)
                    C[J] = C[J - 1] + L,
                        1E4 <= C[J] ? (C[J] = 9999,
                            L = -L) : 0 > C[J] ? (C[J] = 0,
                            L = -L) : (L += 16384 <= ce.random() ? B : -B,
                            L = L < -A ? -A : L > A ? A : L)
            }
            function k(J, L, P, I) {
                if (P)
                    for (P = 0; P < I; P++)
                        y[L * n + J + P] = C[P];
                else
                    for (P = 0; P < I; P++)
                        y[L * n + J + P * n] = C[P]
            }
            function t(J, L) {
                var P = J - C[L - 1];
                if (0 !== P) {
                    var I = 1 + as(Math.abs(P), L - 1);
                    I = 0 > P ? -I : I;
                    C[L - 1] = J;
                    var O = L - 1 - as(Math.abs(P), Math.abs(I));
                    O = 1 > O ? 1 : O > L - 2 ? L - 2 : O;
                    for (var R = L - 2; R >= O; R--)
                        C[R] += P - (L - 1 - R) * I;
                    if (0 > P)
                        for (P = L - 2; 1 <= P; P--)
                            0 > C[P] && (C[P] = -C[P] - 1);
                    else
                        for (P = L - 2; 1 <= P; P--)
                            1E4 <= C[P] && (C[P] = 2E4 - C[P] - 1)
                }
            }
            function l(J) {
                for (var L = 0; L < J.length - 1; L++)
                    J[L] = J[L + 1] - J[L];
                J[J.length - 1] = J[J.length - 3]
            }
            var y, n, z, x, A, B, C, E, G, F, M, H, D, K;
            this.jW = function(J) {
                n = J[0];
                z = J[1];
                A = J[2];
                B = J[3];
                y = new Int16Array(n * z);
                x = n > z ? n : z;
                C = new Int16Array(x);
                E = [];
                G = [];
                F = [];
                M = Array(n);
                H = Array(z);
                for (J = n - 1; 0 <= J; J--)
                    M[J] = false;
                for (J = z - 1; 0 <= J; J--)
                    H[J] = false;
                D = new Int16Array(n);
                K = new Int16Array(z);
                J = x;
                var L = ce.random() % 1E4
                    , P = ce.random() % (2 * A + 1) - A;
                g(L, P, J);
                J = K;
                L = C;
                P = z;
                for (var I = 0; I < P; I++)
                    J[I] = L[I];
                k(0, 0, true, n);
                J = y[0];
                L = x;
                P = ce.random() % (2 * A + 1) - A;
                g(J, P, L);
                J = D;
                L = C;
                P = n;
                for (I = 0; I < P; I++)
                    J[I] = L[I];
                k(0, 0, false, z);
                l(D);
                l(K);
                g(y[n - 1], D[n - 1], z);
                k(n - 1, 0, false, z);
                g(y[n * (z - 1)], K[z - 1], n);
                t(y[n * z - 1], n);
                k(0, z - 1, true, n);
                M[n - 1] = M[0] = true;
                H[z - 1] = H[0] = true;
                J = n;
                E.push(0);
                G.push(J);
                F.push(true);
                J = z;
                E.push(0);
                G.push(J);
                F.push(false);
                a: for (; ; ) {
                    J = E.length - 1;
                    for (L = J - 1; 0 <= L; L--)
                        G[L] > G[J] && (J = L);
                    if (5 > G[J])
                        break a;
                    L = E[J] + as(G[J], 2);
                    if (F[J]) {
                        P = void 0;
                        var O;
                        I = L;
                        for (var R = 0, N = 0; N < z - 1; ) {
                            for (O = R + 1; O < z; O++)
                                if (H[O]) {
                                    N = O;
                                    break
                                }
                            O = N - R + 1;
                            g(y[I + n * R], 0 === R ? D[I] : C[P - 1] - C[P - 2], O);
                            t(y[N * n + I], O);
                            k(I, R, false, O);
                            P = O;
                            R = N
                        }
                        M[I] = true
                    } else {
                        P = void 0;
                        I = L;
                        for (N = R = 0; N < n - 1; ) {
                            for (O = R + 1; O < n; O++)
                                if (M[O]) {
                                    N = O;
                                    break
                                }
                            O = N - R + 1;
                            g(y[I * n + R], 0 === R ? K[I] : C[P - 1] - C[P - 2], O);
                            t(y[I * n + N], O);
                            k(R, I, true, O);
                            P = O;
                            R = N
                        }
                        H[I] = true
                    }
                    P = E[J] + G[J] - L;
                    I = F[J];
                    E.push(L);
                    G.push(P);
                    F.push(I);
                    G[J] = L - E[J] + 1
                }
                for (J = 0; J < n; J++)
                    if (!M[J])
                        for (L = 0; L < z; L++)
                            H[L] || (P = y[L * n + J - 1] + y[(L - 1) * n + J],
                                I = 2,
                            M[J + 1] && (I++,
                                P += y[L * n + J + 1]),
                            H[L + 1] && (I++,
                                P += y[(L + 1) * n + J]),
                                y[L * n + J] = as(P, I))
            }
            ;
            this.a3A = function() {
                return y
            }
            ;
            this.a2r = function() {
                y = null
            }
        }
        function as(g, k) {
            return Math.floor(g / k + 1 / (2 * k))
        }
        function yj(g, k) {
            return 0 <= g ? as(g, k) : -as(-g, k)
        }
        function d5(g) {
            return g * g
        }
        function me(g, k) {
            return g > k ? g : k
        }
        function qr(g, k) {
            return g < k ? g : k
        }
        function tE(g, k, t) {
            return k < g ? g : k > t ? t : k
        }
        function a4P(g, k) {
            for (var t = as(g + 1, 2), l = 0; l < k; l++)
                t = as(t + as(g, t), 2);
            return t
        }
        function bl(g, k) {
            return 1 > g ? 0 : a4P(g, k)
        }
        function a4Q(g, k, t, l, y, n, z, x) {
            return !(g + t <= y || k + l <= n || g >= y + z || k >= n + x)
        }
        function a4R(g, k, t, l, y, n, z, x) {
            return g <= y && k <= n && g + t >= y + z && k + l >= n + x
        }
        function km() {
            function g(x, A, B, C) {
                if (0 === C)
                    return x >= B.f8 && (0 === C || A >= B.f9) && A <= B.f9 + B.nV;
                A -= C * (B.nV - 2);
                return x >= B.fA && (0 === C || A >= B.f9) && A <= B.f9 + B.nV
            }
            function k() {
                var x = Math.floor((q ? .145 : .09) * bq)
                    , A = Math.floor(2 * x)
                    , B = Math.floor(.065 * (q ? .53 : .36) * bq);
                return {
                    f8: r - x - B,
                    f9: cA,
                    i7: x,
                    nV: Math.floor(.35 * x),
                    fA: r - A - B,
                    i8: A
                }
            }
            function t(x, A, B, C, E, G, F, M, H, D) {
                D = Math.floor(D * C);
                cH.font = bt + D + bu;
                M && (E += 80,
                    G += 80,
                    F += 80);
                cH.fillStyle = "rgba(" + E + "," + G + "," + F + ",0.6)";
                cH.fillRect(x, A, B, C);
                cH.fillStyle = cK;
                cH.fillRect(x, A, B, 2);
                cH.fillRect(x, A + C - 2, B, 2);
                cH.fillRect(x, A, 2, C);
                cH.fillRect(x + B - 2, A, 2, C);
                cH.fillText(H, Math.floor(x + B / 2), Math.floor(A + C / 2 + .1 * D))
            }
            this.xy = 1;
            var l = -1
                , y = false
                , n = []
                , z = 0;
            this.gJ = null;
            this.su = new Uint8Array(4);
            this.bp = function() {
                this.a4U();
                n = [Array(5), Array(11), Array(5)];
                this.su[0] = 10;
                this.su[1] = 5;
                this.su[2] = 2;
                this.su[3] = 1;
                n[0][0] = {
                    name: "More",
                    id: 0,
                    fC: 140,
                    n6: 120,
                    cm: 0
                };
                n[0][1] = {
                    name: "Lobby 1",
                    id: 1,
                    fC: 0,
                    n6: 0,
                    cm: 0
                };
                n[0][2] = {
                    name: "Settings",
                    id: 2,
                    fC: 0,
                    n6: 0,
                    cm: 0
                };
                n[0][3] = {
                    name: "More Information",
                    id: 3,
                    fC: 0,
                    n6: 0,
                    cm: 0
                };
                n[0][4] = {
                    name: a2B,
                    id: 4,
                    fC: 90,
                    n6: 0,
                    cm: 0
                };
                n[1][0] = n[0][0];
                n[1][1] = {
                    name: "Hide Usernames",
                    id: 1,
                    fC: 0,
                    n6: 0,
                    cm: 0
                };
                n[1][2] = {
                    name: "Hide Links",
                    id: 2,
                    fC: 0,
                    n6: 0,
                    cm: 0
                };
                n[1][3] = {
                    name: "Hide Zoom Buttons",
                    id: 3,
                    fC: 0,
                    n6: 0,
                    cm: 0
                };
                n[1][4] = {
                    name: "Reverse Name/Balance",
                    id: 4,
                    fC: 0,
                    n6: 0,
                    cm: 0
                };
                n[1][5] = {
                    name: "Resolution",
                    id: 5,
                    fC: 0,
                    n6: 0,
                    cm: 0
                };
                n[1][6] = {
                    name: "Country Minimum Font Size",
                    id: 6,
                    fC: 0,
                    n6: 0,
                    cm: 0
                };
                n[1][7] = {
                    name: "Leaderboard Refresh Rate",
                    id: 7,
                    fC: 0,
                    n6: 0,
                    cm: 0
                };
                n[1][8] = {
                    name: "Name&Balance Refresh Rate",
                    id: 8,
                    fC: 0,
                    n6: 0,
                    cm: 0
                };
                n[1][9] = {
                    name: "Reset Settings",
                    id: 9,
                    fC: 0,
                    n6: 0,
                    cm: 0
                };
                n[1][10] = {
                    name: "Back",
                    id: 10,
                    fC: 0,
                    n6: 0,
                    cm: 0
                };
                n[2][0] = n[0][0];
                n[2][1] = {
                    name: "Tutorial",
                    id: 1,
                    fC: 0,
                    n6: 0,
                    cm: 0
                };
                n[2][2] = {
                    name: "Player List",
                    id: 2,
                    fC: 0,
                    n6: 0,
                    cm: 0
                };
                n[2][3] = {
                    name: "Clan List",
                    id: 3,
                    fC: 0,
                    n6: 0,
                    cm: 0
                };
                n[2][4] = {
                    name: "Privacy Policy",
                    id: 4,
                    fC: 0,
                    n6: 0,
                    cm: 0
                };
                !g_isIOSUser && 5 > d && n[2].push({
                    name: "Cookie Policy",
                    id: 5,
                    fC: 0,
                    n6: 0,
                    cm: 0
                });
                n[2].push({
                    name: "Back",
                    id: 6,
                    fC: 0,
                    n6: 0,
                    cm: 0
                });
                this.a4V();
                this.a4W()
            }
            ;
            this.a4U = function() {
                this.gJ = {
                    nQ: 0,
                    a4X: 0,
                    rM: 0,
                    gK: 0,
                    a4Y: 2,
                    a0s: 4,
                    sv: 1,
                    a13: 1
                }
            }
            ;
            this.a4W = function() {
                vv.ut[2] = vv.ut[3] = vv.ut[4] = !this.gJ.a4X;
                n[1][1].n6 = this.gJ.nQ ? 130 : 0;
                n[1][2].n6 = this.gJ.a4X ? 130 : 0;
                n[1][3].n6 = this.gJ.rM ? 130 : 0;
                n[1][4].n6 = this.gJ.gK ? 130 : 0;
                this.a4Z(5);
                this.a4Z(6);
                this.a4Z(7);
                this.a4Z(8)
            }
            ;
            this.a4V = function() {
                var x = v().split("");
                14 > x.length ? this.a4U() : (this.gJ.nQ = parseInt(x[6]),
                    this.gJ.a4X = parseInt(x[7]),
                    this.gJ.rM = parseInt(x[8]),
                    this.gJ.gK = parseInt(x[9]),
                    this.gJ.a4Y = parseInt(x[10]),
                    this.gJ.a0s = parseInt(x[11]),
                    this.gJ.sv = parseInt(x[12]),
                    this.gJ.a13 = parseInt(x[13]))
            }
            ;
            this.vJ = function() {
                var x = cC.mE[2].ik.vH();
                x += ~~this.gJ.nQ;
                x += ~~this.gJ.a4X;
                x += ~~this.gJ.rM;
                x += ~~this.gJ.gK;
                x += ~~this.gJ.a4Y;
                x += ~~this.gJ.a0s;
                x += ~~this.gJ.sv;
                x += ~~this.gJ.a13;
                a8(x)
            }
            ;
            this.a4Z = function(x) {
                5 === x ? n[1][x].name = "Resolution: " + eB.nI(100 * jt.a4a(), 1) : 6 === x ? n[1][x].name = "Country Minimum Font Size: " + (4 > this.gJ.a0s ? 1 + this.gJ.a0s : 2 * (this.gJ.a0s - 1)) : 7 === x ? n[1][x].name = "Leaderboard Refresh Rate: " + eB.nI(100 / this.su[this.gJ.sv], 1) : 8 === x && (n[1][x].name = "Country Title Refresh Rate: " + eB.nI(100 / this.su[this.gJ.a13], 1))
            }
            ;
            this.actionWheelOnClick = function(x, A) {
                var B;
                if (!(7 <= aJ.pe())) {
                    var C = k();
                    if (y) {
                        for (B = 1; B < n[z].length; B++)
                            if (g(x, A, C, B))
                                return B = n[z][B],
                                    0 === z ? 1 === B.id ? (gI.xy = 1 === gI.xy ? 2 : 2 === gI.xy ? eD.wQ : 1,
                                        B.name = "Lobby " + (gI.xy === eD.wQ ? "1B" : gI.xy),
                                        c4.c5 = true) : 2 === B.id ? (z = 1,
                                        c4.c5 = true) : 3 === B.id && (z = 2,
                                        c4.c5 = true) : 1 === z ? 1 === B.id ? (gI.gJ.nQ = !gI.gJ.nQ,
                                        B.n6 = gI.gJ.nQ ? 130 : 0,
                                        gI.vJ(),
                                        c4.c5 = true) : 2 === B.id ? (gI.gJ.a4X = !gI.gJ.a4X,
                                        gI.a4W(),
                                        gI.vJ(),
                                        c4.c5 = true) : 3 === B.id ? (gI.gJ.rM = !gI.gJ.rM,
                                        B.n6 = gI.gJ.rM ? 130 : 0,
                                        gI.vJ(),
                                        c4.c5 = true) : 4 === B.id ? (gI.gJ.gK = !gI.gJ.gK,
                                        B.n6 = gI.gJ.gK ? 130 : 0,
                                        gI.vJ(),
                                        c4.c5 = true) : 5 === B.id ? (gI.gJ.a4Y++,
                                        gI.gJ.a4Y %= 8,
                                        gI.a4Z(B.id),
                                        gI.vJ(),
                                        jt.xl(),
                                        c4.c5 = true) : 6 === B.id ? (gI.gJ.a0s++,
                                        gI.gJ.a0s %= 10,
                                        gI.a4Z(B.id),
                                        gI.vJ(),
                                        c4.c5 = true) : 7 === B.id ? (gI.gJ.sv++,
                                        gI.gJ.sv %= 4,
                                        gI.a4Z(B.id),
                                        gI.vJ(),
                                        c4.c5 = true) : 8 === B.id ? (gI.gJ.a13++,
                                        gI.gJ.a13 %= 4,
                                        gI.a4Z(B.id),
                                        gI.vJ(),
                                        c4.c5 = true) : 9 === B.id ? (gI.a4U(),
                                        gI.a4W(),
                                        gI.vJ(),
                                        jt.xl(),
                                        c4.c5 = true) : 10 === B.id && (z = 0,
                                        c4.c5 = true) : 1 === B.id ? (na.bp(oz, true),
                                        na.bp(oz, false)) : 2 === B.id ? (na.bp(p0[0], true),
                                        na.bp(p0[0], false)) : 3 === B.id ? (na.bp(p0[1], true),
                                        na.bp(p0[1], false)) : 4 === B.id ? (12 <= d && e.setState(7),
                                        na.bp(oy, true),
                                        na.bp(oy, false)) : 5 === B.id ? (na.bp(nb, true),
                                        na.bp(nb, false)) : 6 === B.id && (z = 0,
                                        c4.c5 = true),
                                    true;
                        y = false;
                        c4.c5 = true;
                        return false
                    }
                    return g(x, A, C, 0) ? (z = 0,
                        y = true,
                        c4.c5 = true) : false
                }
            }
            ;
            this.lo = function(x, A) {
                var B;
                if (!(7 <= aJ.pe())) {
                    var C = k();
                    var E = l;
                    var G = y ? 0 === z ? n[z].length - 1 : n[z].length : 1;
                    l = -1;
                    for (B = 0; B < G; B++)
                        if (g(x, A, C, B)) {
                            l = B;
                            break
                        }
                    E !== l && (c4.c5 = true)
                }
            }
            ;
            this.cG = function() {
                var x;
                if (!(7 <= aJ.pe())) {
                    var A = k();
                    cH.textAlign = cJ;
                    cH.textBaseline = cI;
                    t(A.f8, A.f9, A.i7, A.nV, n[z][0].fC, n[z][0].n6, n[z][0].cm, 0 === l, n[z][0].name, .6);
                    if (y) {
                        var B = n[z].length;
                        for (x = 1; x < B; x++) {
                            var C = A.fA
                                , E = A.f9 + x * A.nV - 2 * x
                                , G = A.i8
                                , F = A.nV
                                , M = n[z][x].fC
                                , H = n[z][x].n6
                                , D = n[z][x].cm
                                , K = l === x
                                , J = n[z][x].name;
                            var L = n[z][x];
                            L = 22 >= L.name.length ? .45 : .45 / (1 + (L.name.length - 22) / 22);
                            t(C, E, G, F, M, H, D, K, J, L)
                        }
                    }
                }
            }
        }
        function kV() {
            function g() {
                t = true;
                l = -1;
                y = Array(4);
                for (var x = 3; 0 <= x; x--)
                    y[x] = false;
                x = Math.floor(1 + .02 * pO);
                n = Array(4);
                z = Array(4);
                z[1] = z[3] = n[0] = n[2] = 0;
                z[0] = n[3] = -x;
                n[1] = z[2] = x
            }
            function k() {
                if (-1 !== l)
                    if (0 !== ec && eV.h3()) {
                        for (var x = false, A = 3; 0 <= A; A--)
                            y[A] && (x = true,
                                gC += n[A],
                                gD += z[A],
                                eA.lo(n[A], z[A]),
                                gm.rP());
                        x ? c4.c5 = true : gq.gr()
                    } else
                        gq.gr()
            }
            var t = false, l, y, n, z;
            this.wE = function(x) {
                0 !== ec && eV.h3() && (t || g(),
                    y[x] = true,
                -1 === l && (l = setInterval(k, 20),
                    k()))
            }
            ;
            this.a2d = function(x) {
                if (0 !== ec && (t || g(),
                    y[x] = false,
                -1 !== l)) {
                    x = false;
                    for (var A = 3; 0 <= A; A--)
                        x = x || y[A];
                    x || this.gr()
                }
            }
            ;
            this.gr = function() {
                if (t && -1 !== l) {
                    for (var x = 3; 0 <= x; x--)
                        y[x] = false;
                    clearInterval(l);
                    l = -1
                }
            }
        }
        function kW() {
            var g;
            this.f1 = function() {
                return g
            }
            ;
            this.co = function(k, t) {
                var l;
                if (0 === bN[k].length || !b5.b6(t) || !b5.bG(t) && b5.bF(t) === k)
                    return false;
                for (l = 21; 0 <= l; l--) {
                    if (21 === l) {
                        var y = bN[k]
                            , n = t
                            , z = b5.gF(n);
                        n = b5.cF(n);
                        var x = 0;
                        var A = b5.gF(y[0]);
                        var B = b5.cF(y[0]);
                        A = Math.abs(A - z) + Math.abs(B - n);
                        for (B = y.length - 1; 1 <= B; B--) {
                            var C = b5.gF(y[B]);
                            var E = b5.cF(y[B]);
                            C = Math.abs(C - z) + Math.abs(E - n);
                            C < A && (A = C,
                                x = B)
                        }
                        g = y[x]
                    } else
                        g = bN[k][as(l * bN[k].length, 21)];
                    a: {
                        B = g;
                        x = t;
                        y = b5.gF(B);
                        z = b5.cF(B);
                        n = b5.gF(x);
                        x = b5.cF(x);
                        A = Math.abs(n - y) + Math.abs(x - z);
                        if (!(2 > A))
                            for (C = B,
                                     B = 0; B < A; B++)
                                if (C = Math.abs(n - b5.gF(C)) >= Math.abs(x - b5.cF(C)) ? C + aV[n > y ? 1 : 3] : C + aV[x > z ? 2 : 0],
                                    !b5.yo(C)) {
                                    if (b5.b6(C)) {
                                        if (0 === B || B + 20 < A)
                                            break;
                                        y = true;
                                        break a
                                    }
                                    break
                                }
                        y = false
                    }
                    if (y)
                        return true
                }
                return false
            }
        }
        function a2Z() {
            function g() {
                var B, C = 0, E = 0, G = Math.floor(y / 2), F = Math.floor(n / 2), M = 1.5 * Math.PI;
                for (B = jG; 0 <= B; B--)
                    E += A[B],
                    0 === A[B] && C++;
                t = false;
                x.clearRect(0, 0, y, y);
                x.fillStyle = i1;
                x.fillRect(0, 0, y, y);
                x.fillStyle = oN;
                x.fillRect(0, 0, y, 2);
                x.fillRect(0, 0, 2, y);
                x.fillRect(y - 2, 0, 2, y);
                x.fillRect(0, y - 2, y, 2);
                if (0 < E)
                    if (C === jG)
                        for (B = jG; 0 <= B; B--) {
                            if (0 < A[B]) {
                                E = G;
                                M = F;
                                x.fillStyle = dW.wy[dW.iq[B]];
                                x.beginPath();
                                x.arc(E, E, M, 0, 2 * Math.PI);
                                x.fill();
                                break
                            }
                        }
                    else {
                        for (B = 0; B <= jG; B++)
                            if (0 < A[B]) {
                                C = M + 2 * Math.PI * A[B] / E;
                                var H = G
                                    , D = F
                                    , K = M
                                    , J = C;
                                x.fillStyle = dW.wy[dW.iq[B]];
                                x.beginPath();
                                x.arc(H, H, D, K, J);
                                x.lineTo(H, H);
                                x.fill();
                                0 !== B && k(G, F, M);
                                M = C
                            }
                        k(G, F, 1.5 * Math.PI)
                    }
                x.beginPath();
                x.arc(G, G, F, 0, 2 * Math.PI);
                x.stroke()
            }
            function k(B, C, E) {
                x.beginPath();
                x.moveTo(B, B);
                x.lineTo(B + Math.cos(E) * C, B + Math.cos(E + 1.5 * Math.PI) * C);
                x.stroke()
            }
            var t = false
                , l = 0
                , y = 0
                , n = 0
                , z = null
                , x = null
                , A = null;
            this.bp = function() {
                if (dA) {
                    l = 16;
                    A = new Uint32Array(jG + 1);
                    for (var B = jG; 0 < B; B--)
                        A[B] = 1;
                    this.lx()
                } else
                    A = x = z = null
            }
            ;
            this.qX = function() {
                return y
            }
            ;
            this.lx = function() {
                dA && (y = Math.floor(.18 * pO),
                    y += y % 2,
                    n = Math.floor(7 * y / 8),
                    z = z ? z : document.createElement("canvas"),
                    z.width = y,
                    z.height = y,
                    x = z.getContext("2d", {
                        alpha: true
                    }),
                    x.lineWidth = 2,
                    x.strokeStyle = cK,
                    g())
            }
            ;
            this.qs = function() {
                return A[this.my()]
            }
            ;
            this.io = function() {
                l = 31;
                this.dF();
                return this.my()
            }
            ;
            this.my = function() {
                for (var B = 0, C = jG; 0 < C; C--)
                    A[C] > A[B] && (B = C);
                return B
            }
            ;
            this.dF = function() {
                if (dA && 32 <= ++l) {
                    l = 0;
                    var B;
                    for (B = jG; 0 <= B; B--)
                        A[B] = 0;
                    for (B = sp_Bots - 1; 0 <= B; B--)
                        A[dW.dX[dZ[B]]] += g_playerLandArray[dZ[B]];
                    t = true
                }
            }
            ;
            this.bv = function() {
                dA && t && g()
            }
            ;
            this.cG = function() {
                dA && cH.drawImage(z, m7, qY + 2 * m7)
            }
        }
        function kX() {
            var g, k;
            this.bp = function() {
                k = Array(101);
                for (var t = k.length - 1; 0 <= t; t--)
                    k[t] = as(32768 * t, 100);
                this.jQ(0)
            }
            ;
            this.value = function(t) {
                return k[t]
            }
            ;
            this.a1a = function() {
                return as(g - 1, 2)
            }
            ;
            this.jQ = function(t) {
                g = 2 * t % 32768 + 1
            }
            ;
            this.random = function() {
                return g = 167 * g % 32768
            }
            ;
            this.cf = function(t) {
                return as(t * this.random(), 32768)
            }
            ;
            this.dP = function(t) {
                return 0 !== t && this.random() < this.value(t)
            }
        }
        function ke() {
            function g() {
                (500 <= z || 5 < n) && k()
            }
            function k() {
                n = 0;
                z += 700 > z ? 200 : 0;
                bw.bx() && (l() || y) && (y = false,
                    p8(),
                    uY.bp(),
                    jk.bp(),
                    jn.lx(),
                    vv.bp(),
                    jl.lx(),
                    jj.lx(),
                    ji.lx(),
                    vn.lx(),
                    cD.lx(),
                    a5.bp(),
                    1 <= ec ? (eM.lx(false),
                        eO.lx(),
                        eB.lx(),
                        gm.lx(),
                        eR.lx(),
                        e9.lx(),
                        fq.lx(),
                        eS.lx(),
                        eP.lx(),
                        c2.lx(),
                        hx.l3(),
                        hy.lx(),
                        eA.lx(),
                        eW.lx(),
                        eT.lx(),
                        gm.rP()) : (0 === aJ.pe() ? jn.cE(0, true) : 2 === aJ.pe() ? dy.lx() : 3 === aJ.pe() && jm.lx(),
                        aJ.vr(),
                        aJ.vw()),
                    c4.c5 = true)
            }
            function t(x) {
                return x && 128 < x ? Math.floor(x) : 128
            }
            function l() {
                if (5 <= d) {
                    var x = t(document.documentElement.clientWidth);
                    var A = t(document.documentElement.clientHeight);
                    pS = 1;
                    if (x !== gE || A !== cB) {
                        gE = x;
                        cB = A;
                        r = gE;
                        s = cB;
                        pO = qr(r, s);
                        bq = as(s + r, 2);
                        var B = e.loadNumber(23);
                        var C = e.loadNumber(24);
                        x > B && (B = x,
                            e.saveNumber(23, B));
                        A > C && (C = A,
                            e.saveNumber(24, C));
                        x = pB.width;
                        A = pB.height;
                        B > x && (x = B,
                            pB.width = B);
                        C > A && (A = C,
                            pB.height = C);
                        pB.style.width = x + "px";
                        pB.style.height = A + "px";
                        B = true
                    } else
                        B = false;
                    return B
                }
                jt.a4a();
                B = t(document.documentElement.clientWidth);
                C = t(document.documentElement.clientHeight);
                x = Math.floor(.5 + pS * B);
                A = Math.floor(.5 + pS * C);
                if (x === gE && A === cB)
                    return false;
                gE = r = x;
                cB = s = A;
                pO = qr(r, s);
                bq = as(s + r, 2);
                pB.width = x;
                pB.height = A;
                pB.style.width = B + "px";
                pB.style.height = C + "px";
                return true
            }
            var y = false, n, z;
            this.bp = function() {
                n = 1;
                z = 100;
                r = s = pO = gE = cB = bq = 0;
                pS = 1;
                pB = document.getElementById("canvasA");
                cH = pB.getContext("2d", {
                    alpha: false
                });
                cH.imageSmoothingEnabled = false;
                l();
                window.addEventListener("resize", g)
            }
            ;
            this.dF = function() {
                jw.dF();
                ++n >= z && k()
            }
            ;
            this.xl = function() {
                y = true;
                500 <= z && k()
            }
            ;
            this.a4a = function() {
                var x = window.devicePixelRatio || 1;
                if (5 <= d)
                    return 1 / x;
                var A = gI.gJ.a4Y;
                pS = 3 > A ? .5 + .25 * A : (.5 + .125 * (A - 3)) * x;
                return pS / x
            }
        }
        function kY() {
            function g(F) {
                eK.av(t, G);
                ae.b2(t, E);
                F && (g_playerBalanceArray[t] += l)
            }
            function k() {
                b5.yq(y, t) && b5.ys(y)
            }
            var t, l, y, n, z, x, A, B, C, E, G;
            this.dF = function(F, M, H, D, K) {
                C = F;
                G = M;
                t = H;
                z = b5.gF(D);
                x = b5.cF(D);
                A = b5.gF(K);
                B = b5.cF(K);
                n = y = b5.f2(z, x);
                E = ae.fW(t, G);
                -1 === E ? (k(),
                    eK.av(t, G),
                    F = false) : (l = ae.am(t, E),
                    F = true);
                if (F && (k(),
                    F = as(l, 128),
                    F = 1 > F ? 1 : F,
                    l -= F,
                t === g_localPlayerIndex && (b0.b1[15] += F),
                    l <= at ? (t === g_localPlayerIndex && (b0.b1[15] += l),
                        g(false),
                        F = false) : (ae.bT(t, E, l),
                        F = true),
                    F))
                    if (F = b5.f2(z, x),
                        y = Math.abs(A - z) >= Math.abs(B - x) ? F + aV[A > z ? 1 : 3] : F + aV[B > x ? 2 : 0],
                        z = b5.gF(y),
                        x = b5.cF(y),
                        eK.g0(C, y),
                        F = b5.b6(y) ? false : true,
                        F)
                        b5.yo(y) && b5.yv(y, t);
                    else
                        a: {
                            if (b5.bG(y))
                                F = g_unclaimedLandIndex;
                            else {
                                F = b5.bF(y);
                                if (F === t) {
                                    g(true);
                                    break a
                                }
                                if (!ch(t, F)) {
                                    M = g_playerLandArray[F] * jA - g_playerBalanceArray[F];
                                    0 >= M || (M = l > M ? M : l,
                                        l -= M,
                                    t === g_localPlayerIndex && (e9.nA(M, F),
                                        b0.b1[16] += M),
                                    F === g_localPlayerIndex && (e9.nC(M, t),
                                        b0.b1[10] += M),
                                        g_playerBalanceArray[F] += M);
                                    g(true);
                                    break a
                                }
                            }
                            t === g_localPlayerIndex && (b0.b1[13] += l);
                            eK.av(t, G);
                            ae.b2(t, E);
                            b4[t].push(n);
                            ae.cQ(t, l, F);
                            au.cR(t, true)
                        }
            }
            ;
            this.g4 = function(F, M) {
                t = F;
                y = b5.f2(b5.gF(M), b5.cF(M));
                k()
            }
        }
        function kZ() {
            var g, k, t, l;
            this.bp = function() {
                var y, n, z;
                t = true;
                l = "rgb(" + xI[0] + "," + xI[1] + "," + xI[2] + ")";
                var x = a2w(x6) ? true : t = false;
                if (x)
                    k = null;
                else {
                    g = as(96, 4);
                    if (1 === x6) {
                        var A = 0;
                        var B = 160
                    } else
                        A = 128,
                            B = 32;
                    l = "rgb(" + A + "," + A + "," + A + ")";
                    k = Array(4);
                    for (x = 3; 0 <= x; x--) {
                        k[x] = document.createElement("canvas");
                        var C = 0 === x % 2 ? aZ : g;
                        var E = 0 === x % 2 ? g : aa + 2 * g;
                        k[x].width = C;
                        k[x].height = E;
                        var G = k[x].getContext("2d", {
                            alpha: false
                        });
                        var F = G.getImageData(0, 0, C, E);
                        var M = F.data;
                        if (0 === x % 2)
                            for (n = g - 1; 0 <= n; n--) {
                                var H = B + Math.floor((n + 1) * (A - B) / (g + 1));
                                for (y = C - 1; 0 <= y; y--) {
                                    var D = 4 * ((0 === x ? g - n - 1 : n) * C + y);
                                    M[D] = H;
                                    M[D + 1] = H;
                                    M[D + 2] = H;
                                    M[D + 3] = 255
                                }
                            }
                        else {
                            for (y = g - 1; 0 <= y; y--)
                                for (H = B + Math.floor((y + 1) * (A - B) / (g + 1)),
                                         n = E - 1 - g; n >= g; n--)
                                    D = 4 * (n * C + (3 === x ? g - y - 1 : y)),
                                        M[D] = H,
                                        M[D + 1] = H,
                                        M[D + 2] = H,
                                        M[D + 3] = 255;
                            for (z = 1; 0 <= z; z--)
                                for (y = g - 1; 0 <= y; y--)
                                    for (n = g - 1; 0 <= n; n--)
                                        H = (Math.pow(y * y + n * n, .5) + 1) / (g + 1),
                                            H = 1 < H ? 1 : H,
                                            H = B + Math.floor(H * (A - B)),
                                            D = 4 * ((0 === z ? g - n - 1 : n + z * (E - g)) * C + (1 === x ? y : g - y - 1)),
                                            M[D] = H,
                                            M[D + 1] = H,
                                            M[D + 2] = H,
                                            M[D + 3] = 255
                        }
                        G.putImageData(F, 0, 0)
                    }
                    pp.fillStyle = "rgb(" + B + "," + B + "," + B + ")";
                    pp.fillRect(0, 0, aZ, 1);
                    pp.fillRect(0, aa - 1, aZ, 1);
                    pp.fillRect(0, 0, 1, aa);
                    pp.fillRect(aZ - 1, 0, 1, aa)
                }
            }
            ;
            this.hu = function() {
                var y = t ? 0 : -g;
                a4R(y, y, aZ - 2 * y, aa - 2 * y, h1.a5S, h1.a5T, h1.a5U, h1.a5V) || (cH.fillStyle = l,
                    cH.fillRect(0, 0, gE, cB))
            }
            ;
            this.cG = function() {
                t || (a4Q(0, -g, aZ, g, h1.a5S, h1.a5T, h1.a5U, h1.a5V) && cH.drawImage(k[0], h1.a5W, h1.a5X - g),
                a4Q(aZ, -g, g, aa + 2 * g, h1.a5S, h1.a5T, h1.a5U, h1.a5V) && cH.drawImage(k[1], h1.a5W + aZ, h1.a5X - g),
                a4Q(0, aa, aZ, g, h1.a5S, h1.a5T, h1.a5U, h1.a5V) && cH.drawImage(k[2], h1.a5W, h1.a5X + aa),
                a4Q(-g, -g, g, aa + 2 * g, h1.a5S, h1.a5T, h1.a5U, h1.a5V) && cH.drawImage(k[3], h1.a5W - g, h1.a5X - g))
            }
        }
        function a21() {
            function g() {}
            function k() {
                eD.a22(z, x)
            }
            function t(G) {
                A++;
                1 === A ? C.readAsArrayBuffer(G.data) : B.push(G.data)
            }
            function l() {
                A--;
                js.a5h(z, new Uint8Array(C.result));
                0 < A && (C.readAsArrayBuffer(B[0]),
                    B.shift())
            }
            function y() {}
            function n(G) {
                eD.a28(z, G)
            }
            var z, x, A, B, C, E;
            this.bp = function(G, F) {
                z = G;
                x = F;
                A = 0;
                B = [];
                C = new FileReader;
                C.addEventListener("loadend", l);
                var M = p6[0];
                M = z < eD.wQ ? M + (eD.a1p[z] + p6[1 + a2I]) : M + (eD.a1p[0] + "/i" + (1 + a2I) + (z - eD.wR) + "/");
                E = new WebSocket(M);
                E.onopen = k;
                E.onmessage = t;
                E.onclose = n;
                E.onerror = y
            }
            ;
            this.a5c = function() {
                return E.readyState === E.CONNECTING
            }
            ;
            this.vT = function() {
                return E.readyState === E.OPEN
            }
            ;
            this.a1y = function() {
                return this.a5c() || this.vT()
            }
            ;
            this.a1z = function(G) {
                x = G
            }
            ;
            this.send = function(G) {
                this.vT() && E.send(G)
            }
            ;
            this.close = function(G) {
                this.a1y() && (E.close(G),
                    this.lH())
            }
            ;
            this.lH = function() {
                E.onopen = g;
                E.onmessage = g;
                E.onclose = g;
                E.onerror = g;
                C.removeEventListener("loadend", l)
            }
        }
        function a2V() {
            this.cV = 501;
            this.a5i = new Uint32Array(this.cV);
            this.sD = new Uint32Array(this.cV);
            this.td = new Uint16Array(this.cV);
            this.m6 = 0;
            this.a5j = 1;
            this.dV = 0;
            this.max = [0, 0, 0];
            this.b1 = 0;
            this.statsViewItems = "Avg. Attack Strength;Number Attacks;Ships sent;Bots conquered;Humans conquered;Attacked by Bots;Attacked by Humans;Territorial Loss;Territorial Income;Interest Income;Received Support;Overall Income;Commanding Costs;Attack Losses;Defense Losses;Shipping Losses;Transmitted Support;Overall Expenses".split(";");
            this.bp = function() {
                this.m6 = 0;
                this.a5j = 1;
                this.dV = 0;
                this.a5l();
                this.a5m()
            }
            ;
            this.dF = function() {
                0 < this.dV-- || this.a5n()
            }
            ;
            this.a5n = function() {
                0 !== g_isPlayersAliveArray[g_localPlayerIndex] && (this.a5i[this.m6] = g_playerLandArray[g_localPlayerIndex],
                    this.sD[this.m6] = g_playerBalanceArray[g_localPlayerIndex],
                    this.td[this.m6] = ay.te(g_localPlayerIndex),
                    this.a5o(this.m6),
                    this.m6++,
                this.m6 === this.cV && this.a5p(),
                    this.dV = this.a5j - 1,
                    hy.bv())
            }
            ;
            this.a5p = function() {
                this.a5l();
                this.a5o(0);
                this.m6 = 1 + as(this.cV, 2);
                for (var g = 1; g < this.m6; g++)
                    this.a5i[g] = this.a5i[2 * g],
                        this.sD[g] = this.sD[2 * g],
                        this.td[g] = this.td[2 * g],
                        this.a5o(g);
                this.a5j *= 2
            }
            ;
            this.a5l = function() {
                this.max[0] = this.max[1] = this.max[2] = 0
            }
            ;
            this.a5m = function() {
                this.b1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            }
            ;
            this.a5o = function(g) {
                this.max[0] = this.a5i[g] > this.max[0] ? this.a5i[g] : this.max[0];
                this.max[1] = this.sD[g] > this.max[1] ? this.sD[g] : this.max[1];
                this.max[2] = this.td[g] > this.max[2] ? this.td[g] : this.max[2]
            }
        }
        function a2W() {
            this.bs = this.qO = this.a5r = this.a5q = this.xU = this.nW = this.nV = this.ud = this.uc = this.i8 = this.i7 = this.cw = this.c1 = 0;
            this.lt = ["Territory", "Balance", "Interest", "Numbers"];
            this.lE = false;
            this.a5s = -1;
            this.a5t = false;
            this.a5u = [0, 0];
            this.bp = function() {
                this.lE = false;
                this.a5s = -1;
                this.a5t = false;
                this.lx()
            }
            ;
            this.lx = function() {
                this.c1 = r < 1.618 * s ? r : 1.618 * s;
                this.c1 = Math.floor((q && r < s ? 1 : q ? .8 : r < s ? .65 : .5) * this.c1);
                this.qO = Math.floor(1 + .006 * this.c1);
                this.c1 -= q && r < s ? 2 * m7 + this.qO : 0;
                this.cw = Math.floor(this.c1 / 1.618);
                this.i7 = Math.floor(1 + .02 * this.c1);
                this.nV = this.i8 = Math.floor(1 + .04 * this.c1);
                this.nW = Math.floor(1 + .075 * this.c1);
                this.a5q = Math.floor(this.c1 * (q ? .028 : .02));
                this.a5q = 6 > this.a5q ? 6 : this.a5q;
                this.a5r = Math.floor(.028 * this.c1);
                this.a5r = 6 > this.a5r ? 6 : this.a5r;
                this.xU = this.cw - 2 * this.nV - this.nW;
                this.lE && this.a5v()
            }
            ;
            this.actionWheelOnClick = function(g, k) {
                if (!this.lE)
                    return false;
                var t = g
                    , l = k;
                g -= as(gE - this.c1, 2);
                k -= as(cB - this.cw, 2);
                if (0 > g || 0 > k || g >= this.c1 || k >= this.cw) {
                    if (1 < fq.actionWheelOnClick(t, l))
                        return true;
                    this.lH();
                    return true
                }
                if (k < this.cw - this.nW)
                    return this.a5t = true,
                        this.a5s = (g - 2 * this.i7 - this.uc) / this.ud,
                        true;
                t = Math.floor(g / (this.c1 / this.lt.length));
                t = 0 > t ? 0 : t >= this.lt.length ? this.lt.length - 1 : t;
                t !== this.bs && (this.bs = t,
                    this.a5v(),
                    c4.c5 = true);
                return true
            }
            ;
            this.a2b = function() {
                var g = Math.floor((this.a5u[0] + gC) / g7)
                    , k = Math.floor((this.a5u[1] + gD) / g7);
                1 > g || 1 > k || g >= aZ - 1 || k >= aa - 1 || console.log(g + " " + k)
            }
            ;
            this.lo = function(g, k) {
                this.a5u[0] = g;
                this.a5u[1] = k;
                if (this.lE && this.a5t) {
                    g -= as(gE - this.c1, 2);
                    var t = this.a5s;
                    this.a5s = (g - 2 * this.i7 - this.uc) / this.ud;
                    if (0 <= this.a5s && 1 >= this.a5s || 0 <= t && 1 >= t)
                        c4.c5 = true;
                    return true
                }
                return false
            }
            ;
            this.pb = function() {
                this.a5t && (this.a5t = false)
            }
            ;
            this.m2 = function() {
                this.lE ? this.lH() : this.show()
            }
            ;
            this.show = function() {
                2 > b0.m6 || (this.lE = true,
                    this.a5v())
            }
            ;
            this.lH = function() {
                this.lE = false;
                this.a5s = -1
            }
            ;
            this.a5v = function() {
                2 > this.bs ? this.uc = c2.measureText(eP.gL(b0.max[this.bs]), bt + this.a5q + bu) : 2 === this.bs && (this.uc = c2.measureText(eB.nI(6, 2), bt + this.a5q + bu));
                this.ud = this.c1 - 2 * this.i7 - this.uc - this.i8
            }
            ;
            this.bv = function() {
                this.lE && this.a5v()
            }
            ;
            this.cG = function() {
                this.lE && this.nc()
            }
            ;
            this.nc = function() {
                var g = as(gE - this.c1, 2)
                    , k = as(cB - this.cw, 2);
                cH.setTransform(1, 0, 0, 1, g, k);
                cH.fillStyle = i1;
                cH.fillRect(0, 0, this.c1, this.cw);
                this.a5w();
                cH.strokeRect(0, 0, this.c1, this.cw);
                cH.textAlign = op;
                cH.font = bt + this.a5q + bu;
                0 === this.bs ? this.a5x(b0.a5i, g, k) : 1 === this.bs ? this.a5x(b0.sD, g, k) : 2 === this.bs ? this.a5y(g, k) : 3 === this.bs && (this.a5z(g, k),
                    this.a60(g, k));
                cH.setTransform(1, 0, 0, 1, 0, 0)
            }
            ;
            this.a5w = function() {
                cH.lineWidth = this.qO;
                cH.textBaseline = cI;
                cH.textAlign = cJ;
                cH.strokeStyle = cK;
                cH.font = bt + this.a5r + bu;
                var g = this.c1 / this.lt.length;
                cH.fillStyle = oT;
                cH.fillRect(this.bs * g, this.cw - this.nW, g, this.nW);
                cH.fillStyle = cK;
                for (var k = this.lt.length - 1; 0 <= k; k--)
                    cH.strokeRect(k * g, this.cw - this.nW, g, this.nW),
                        cH.fillText(this.lt[k], (k + .5) * g, this.cw - .46 * this.nW)
            }
            ;
            this.a5x = function(g, k, t) {
                var l = b0.max[this.bs];
                cH.setTransform(1, 0, 0, 1, k + 2 * this.i7 + this.uc, t + this.nV);
                cH.lineWidth = 2;
                k = this.xU / Math.sqrt(l);
                cH.beginPath();
                cH.moveTo(this.ud, this.xU - k * Math.sqrt(g[b0.m6 - 1]));
                for (t = b0.m6 - 2; 0 <= t; t--)
                    cH.lineTo(t * this.ud / (b0.m6 - 1), this.xU - k * Math.sqrt(g[t]));
                cH.stroke();
                g = this.mB(g, k, .5);
                .95 > g && cH.fillText(eP.gL(l), -this.i7, 0);
                .05 < Math.abs(g - .5) && cH.fillText(eP.gL(Math.floor(l / 4)), -this.i7, Math.floor(this.xU / 2));
                .05 < g && cH.fillText("0", -this.i7, this.xU)
            }
            ;
            this.a5y = function(g, k) {
                cH.setTransform(1, 0, 0, 1, g + 2 * this.i7 + this.uc, k + this.nV);
                cH.lineWidth = 2;
                var t = this.xU / b0.max[this.bs];
                cH.beginPath();
                cH.moveTo(this.ud, this.xU - t * b0.td[b0.m6 - 1]);
                for (var l = b0.m6 - 2; 0 <= l; l--)
                    cH.lineTo(l * this.ud / (b0.m6 - 1), this.xU - t * b0.td[l]);
                cH.stroke();
                t = this.mB(b0.td, t, 1);
                l = b0.max[this.bs] / 100;
                .95 > t && cH.fillText(eB.nI(l, 2), -this.i7, 0);
                .05 < Math.abs(t - .5) && cH.fillText(eB.nI(l / 2, 2), -this.i7, Math.floor(this.xU / 2));
                .05 < t && cH.fillText(eB.nI(0, 2), -this.i7, this.xU)
            }
            ;
            this.a5z = function(g, k) {
                var t;
                cH.setTransform(1, 0, 0, 1, g + .34 * this.c1, k + 2 * this.nV);
                cH.textAlign = op;
                var l = this.cw - 4 * this.nV - this.nW;
                for (t = 7; 0 <= t; t--)
                    cH.fillText(b0.statsViewItems[t], 0, t * l / 7);
                cH.setTransform(1, 0, 0, 1, g + .39 * this.c1, k + 2 * this.nV);
                cH.textAlign = mj;
                t = b0.b1[1];
                cH.fillText(eB.nI(b0.b1[0] / (10 * (1 > t ? 1 : t)), 1), 0, 0);
                for (t = 6; 1 <= t; t--)
                    cH.fillText(b0.b1[t].toString(), 0, t * l / 7);
                cH.fillText(eB.nI(100 * (1 - g_playerLandArray[g_localPlayerIndex] / b0.b1[7]), 0), 0, l)
            }
            ;
            this.a60 = function(g, k) {
                var t;
                cH.setTransform(1, 0, 0, 1, g + .74 * this.c1, k + 2 * this.nV);
                cH.textAlign = op;
                var l = this.cw - 4 * this.nV - this.nW;
                cH.fillStyle = oP;
                for (t = 2; 0 <= t; t--)
                    cH.fillText(b0.statsViewItems[t + 8], 0, t * l / 9);
                cH.fillStyle = oO;
                cH.fillText(b0.statsViewItems[11], 0, 3 * l / 9);
                cH.fillStyle = of;
                for (t = 8; 4 <= t; t--)
                    cH.fillText(b0.statsViewItems[t + 8], 0, t * l / 9);
                cH.fillStyle = oe;
                cH.fillText(b0.statsViewItems[17], 0, 9 * l / 9);
                cH.fillStyle = oP;
                t = eP.gL(b0.b1[8] + b0.b1[9] + b0.b1[10] + b0.b1[11]);
                var y = cH.measureText(t).width;
                cH.setTransform(1, 0, 0, 1, g + .79 * this.c1 + y, k + 2 * this.nV);
                cH.fillText(eP.gL(b0.b1[8]), 0, 0);
                cH.fillText(eP.gL(b0.b1[9]), 0, 1 * l / 9);
                cH.fillText(eP.gL(b0.b1[10]), 0, 2 * l / 9);
                cH.fillStyle = oO;
                cH.fillText(t, 0, 3 * l / 9);
                cH.fillStyle = of;
                t = b0.b1[13] - ae.a0D(g_localPlayerIndex);
                cH.fillText(eP.gL(b0.b1[12]), 0, 4 * l / 9);
                cH.fillText(eP.gL(t), 0, 5 * l / 9);
                cH.fillText(eP.gL(b0.b1[14]), 0, 6 * l / 9);
                cH.fillText(eP.gL(b0.b1[15]), 0, 7 * l / 9);
                cH.fillText(eP.gL(b0.b1[16]), 0, 8 * l / 9);
                t = b0.b1[12] + t + b0.b1[14] + b0.b1[15] + b0.b1[16] + b0.b1[17];
                cH.fillStyle = oe;
                cH.fillText(eP.gL(t), 0, l);
                cH.fillStyle = cK
            }
            ;
            this.mB = function(g, k, t) {
                if (0 > this.a5s || 1 < this.a5s)
                    return .25;
                var l = this.a5s * (b0.m6 - 1)
                    , y = Math.floor(l)
                    , n = g[y];
                n += (l - y) * (g[y < b0.m6 - 1 ? y + 1 : y] - n);
                cH.strokeStyle = oj;
                .04 < this.a5s && this.a66(0, this.xU - k * Math.pow(n, t), l * this.ud / (b0.m6 - 1), this.xU - k * Math.pow(n, t));
                .04 < n / b0.max[this.bs] && this.a66(l * this.ud / (b0.m6 - 1), this.xU, l * this.ud / (b0.m6 - 1), this.xU - k * Math.pow(n, t));
                cH.fillStyle = oa;
                cH.beginPath();
                cH.arc(l * this.ud / (b0.m6 - 1), this.xU - k * Math.pow(n, t), 4, 0, 2 * Math.PI);
                cH.fill();
                g = this.a5s * c4.tf();
                g = 0 === g_isPlayersAliveArray[g_localPlayerIndex] ? Math.floor(g * eW.tl) : Math.floor(g * c4.getTimeSinceGameStarted());
                cH.fillStyle = cK;
                cH.fillText(1 === t ? eB.nI(n / 100, 2) : eP.gL(Math.floor(n)), -this.i7, this.xU - k * Math.pow(n, t));
                cH.textAlign = cJ;
                cH.fillText(eB.sM(g), l * this.ud / (b0.m6 - 1), this.xU + this.a5q - (q ? 2 : 0));
                cH.textAlign = op;
                return k * Math.pow(n, t) / this.xU
            }
            ;
            this.a66 = function(g, k, t, l) {
                cH.beginPath();
                cH.moveTo(g, k);
                cH.lineTo(t, l);
                cH.stroke()
            }
        }
        function a2Y() {
            this.wy = "rgba(130,130,130,0.88) rgba(130,12,12,0.88) rgba(12,130,12,0.88) rgba(12,12,130,0.88) rgba(130,130,12,0.88) rgba(130,12,130,0.88) rgba(12,130,130,0.88) rgba(130,130,130,0.88) rgba(0,0,0,0.88)".split(" ");
            this.t1 = [cK, "rgb(255,120,120)", "rgb(0,230,0)", "rgb(150,150,255)", "rgb(240,240,25)", "rgb(240,25,240)", "rgb(25,240,240)", cK, "rgb(170,170,170)"];
            this.a67 = [cK, "rgb(255,0,0)", "rgb(0,255,0)", "rgb(0,0,255)", "rgb(255,255,0)", "rgb(255,0,255)", "rgb(0,255,255)", cK, gH];
            this.a68 = [gH, cK, cK, cK, gH, gH, gH, gH, cK];
            this.a1F = ["rgba(255,255,255,", "rgba(0,0,0,", "rgba(170,170,170,", "rgba(85,85,85,"];
            this.a1G = ["rgb(255,255,255)", "rgb(0,0,0)", "rgb(170,170,170)", "rgb(85,85,85)"];
            this.bo = "White Red Green Blue Yellow Magenta Cyan White Black".split(" ");
            this.tt = [[255, 255, 255, 180], [255, 0, 0, 180], [0, 255, 0, 180], [50, 50, 255, 180], [255, 255, 0, 180], [255, 0, 255, 180], [0, 255, 255, 180], [255, 255, 255, 180], [0, 0, 0, 180]];
            var g = [[255, 255, 255], [255, 0, 0], [0, 255, 0], [0, 0, 255], [255, 255, 0], [255, 0, 255], [0, 255, 255], [255, 255, 255], [0, 0, 0]];
            this.iq = [0, 1, 2, 3, 4, 5, 6, 7, 8];
            var k, t;
            this.bp = function(l) {
                this.dX = new Uint8Array(g_unclaimedLandIndex);
                this.a6E();
                dA && (dr.ds && dr.dt.zy ? this.yb() : 9 === dv ? this.a6F() : this.dF(l))
            }
            ;
            this.yb = function() {
                var l, y = g_maxPlayerCount;
                this.iq = [0, 1, 2, 3, 4, 5, 6, 7, 8];
                for (l = 0; l < y; l++)
                    this.dX[l] = dr.dt.zy[l]
            }
            ;
            this.a6E = function() {
                for (var l = this.iq.length - 1; 0 <= l; l--)
                    this.iq[l] = l;
                k = [];
                t = []
            }
            ;
            this.a6F = function() {
                var l;
                for (l = g_playerCount + e2.e3 - 1; 0 <= l; l--)
                    this.dX[l] = 1;
                for (l = g_playerCount + e2.e3; l < g_unclaimedLandIndex; l++)
                    this.dX[l] = 2;
                this.iq[1] = 7;
                this.iq[2] = 8
            }
            ;
            this.dF = function(l) {
                var y = new Uint8Array(g_playerCount)
                    , n = new Uint8Array(g_playerCount)
                    , z = new Uint16Array(8)
                    , x = new Uint16Array(this.iq.length);
                this.a6J(l, y, n, z);
                this.yZ(z);
                g_isSingleplayer || this.a6K(x, y, n);
                this.a6L(y, n, x);
                g_isSingleplayer ? this.a6M() : this.a6N()
            }
            ;
            this.a6J = function(l, y, n, z) {
                var x, A, B = this.iq.length - 1, C = new Uint16Array(B);
                for (x = g_playerCount - 1; 0 <= x; x--) {
                    for (A = B; 1 <= A; A--)
                        C[A - 1] = Math.abs(4 * l[x].xd[0] - g[A][0]) + Math.abs(4 * l[x].xd[1] - g[A][1]) + Math.abs(4 * l[x].xd[2] - g[A][2]);
                    var E = 768;
                    for (A = B - 1; 0 <= A; A--) {
                        var G = (A + x) % B;
                        C[G] < E && (E = C[G],
                            y[x] = G)
                    }
                    z[y[x]] += 4;
                    E = 768;
                    for (A = B - 1; 0 <= A; A--)
                        G = (A + x) % B,
                        C[G] < E && G !== y[x] && (E = C[G],
                            n[x] = G);
                    z[n[x]]++
                }
            }
            ;
            this.yZ = function(l) {
                var y, n, z = this.iq.length - 1;
                for (y = z; 0 <= y; y--)
                    this.iq[y] = y;
                for (y = z - 1; 0 <= y; y--)
                    l[y]++;
                for (y = 1; y <= z; y++) {
                    var x = 0;
                    for (n = 1; n < z; n++)
                        l[n] > l[x] && (x = n);
                    l[x] = 0;
                    this.iq[y] = x + 1
                }
            }
            ;
            this.a6K = function(l, y, n) {
                var z = this.iq.length - 1
                    , x = new Uint16Array(z)
                    , A = [];
                var B = g_playerCount - 1;
                a: for (; 0 <= B; B--) {
                    var C = B;
                    var E = nR[C].indexOf("[");
                    if (0 > E)
                        E = null;
                    else {
                        var G = nR[C].indexOf("]");
                        E = 1 < G - E && 8 >= G - E ? nR[C].substring(E + 1, G).toUpperCase().trim() : null
                    }
                    if (null !== E) {
                        for (G = k.length - 1; 0 <= G; G--)
                            if (E === k[G]) {
                                t[G].push(B);
                                continue a
                            }
                        k.push(E);
                        A.push(false);
                        t.push([]);
                        t[k.length - 1].push(B)
                    }
                }
                for (G = k.length - 1; 0 <= G; G--) {
                    C = -1;
                    for (E = k.length - 1; 0 <= E; E--)
                        !A[E] && (-1 === C || t[E].length > t[C].length) && (C = E);
                    for (E = z - 1; 0 <= E; E--)
                        x[E] = 1;
                    for (E = t[C].length - 1; 0 <= E; E--)
                        x[y[t[C][E]]] += 3,
                            x[n[t[C][E]]]++;
                    for (B = z - 1; 0 <= B; B--) {
                        var F = C % z;
                        for (E = z - 1; 0 <= E; E--)
                            x[E] > x[F] && (F = E);
                        var M = -1;
                        for (E = jG; 0 < E; E--)
                            if (this.iq[E] === F + 1) {
                                M = E;
                                break
                            }
                        x[F] = 0;
                        if (-1 !== M) {
                            F = 0;
                            for (E = jG; 0 < E; E--)
                                l[M] > l[E] && F++;
                            if (F !== jG - 1) {
                                for (E = t[C].length - 1; 0 <= E; E--)
                                    l[M]++,
                                        this.dX[t[C][E]] = M;
                                break
                            }
                        }
                    }
                    A[C] = true
                }
            }
            ;
            this.a6L = function(l, y, n) {
                var z;
                var x = this.iq.length - 1;
                var A = as(g_playerCount, jG);
                0 < g_playerCount % jG && A++;
                var B = new Uint8Array(x + 1);
                for (z = x; 1 <= z; z--)
                    B[this.iq[z]] = z;
                for (x = 0; x < g_playerCount; x++)
                    z = B[l[x] + 1],
                    0 === this.dX[x] && z <= jG && n[z] < A && (n[z]++,
                        this.dX[x] = z);
                for (x = 0; x < g_playerCount; x++)
                    z = B[y[x] + 1],
                    0 === this.dX[x] && z <= jG && n[z] < A && (n[z]++,
                        this.dX[x] = z);
                for (z = jG; 1 <= z; z--)
                    for (x = g_playerCount - 1; 0 <= x && !(n[z] >= A); x--)
                        0 === this.dX[x] && (n[z]++,
                            this.dX[x] = z)
            }
            ;
            this.a6M = function() {
                var l, y = new Uint16Array(jG);
                y[jG - 1] = g_unclaimedLandIndex;
                for (l = jG - 2; 0 <= l; l--)
                    y[l] = dy.dz[l].mv;
                y[0]--;
                var n = 0 === y[0] ? 1 : 0;
                for (l = g_playerCount; l < g_unclaimedLandIndex; l++)
                    this.dX[l] = n + 1,
                        y[n]--,
                    0 >= y[n] && n++
            }
            ;
            this.a6N = function() {
                for (var l = g_playerCount; l < g_unclaimedLandIndex; l++)
                    this.dX[l] = 1 + l % jG
            }
            ;
            this.ip = function(l) {
                if (g_isSingleplayer)
                    return [512, ""];
                var y, n, z = -1, x = -1;
                for (n = k.length - 1; 0 <= n; n--)
                    for (y = t[n].length - 1; 0 <= y && this.iq[this.dX[t[n][y]]] === l; y--)
                        if (-1 === z || g_playerLeaderboardRankArray[t[n][y]] < g_playerLeaderboardRankArray[z])
                            z = t[n][y],
                                x = n;
                return -1 === z || 0 === g_isPlayersAliveArray[z] ? [512, ""] : [z, k[x]]
            }
        }
        function bV() {
            for (var g, k, t = aQ - 1; 0 <= t; t--)
                g = as(aS[t], 4) % aZ,
                    k = as(aS[t], 4 * aZ),
                    d0[g_attackerIndex] = d0[g_attackerIndex] > g ? g : d0[g_attackerIndex],
                    d3[g_attackerIndex] = d3[g_attackerIndex] > k ? k : d3[g_attackerIndex],
                    cz[g_attackerIndex] = cz[g_attackerIndex] < g ? g : cz[g_attackerIndex],
                    d2[g_attackerIndex] = d2[g_attackerIndex] < k ? k : d2[g_attackerIndex]
        }
        function aj() {
            var g = b4[g_attackerIndex].length, k;
            var t = g - 1;
            a: for (; 0 <= t; t--) {
                for (k = 3; 0 <= k; k--) {
                    var l = b4[g_attackerIndex][t] + aV[k];
                    if (b5.bG(l) || b5.bE(l) && b5.bF(l) !== g_attackerIndex) {
                        b5.cW(b4[g_attackerIndex][t], g_attackerIndex);
                        continue a
                    }
                }
                b4[g_attackerIndex][t] = b4[g_attackerIndex][g - 1];
                b4[g_attackerIndex].pop();
                g--
            }
        }
        function ak() {
            var g = bM[g_attackerIndex].length, k, t, l = g - 1;
            a: for (; 0 <= l; l--) {
                var y = t = false;
                for (k = 3; 0 <= k; k--) {
                    var n = bM[g_attackerIndex][l] + aV[k];
                    if (b5.yl(n, g_attackerIndex))
                        continue a;
                    y = y || b5.yo(n);
                    t = t || b5.yk(n)
                }
                y ? bN[g_attackerIndex].push(bM[g_attackerIndex][l]) : t ? bQ[g_attackerIndex].push(bM[g_attackerIndex][l]) : b5.hh(bM[g_attackerIndex][l], g_attackerIndex);
                bM[g_attackerIndex][l] = bM[g_attackerIndex][g - 1];
                bM[g_attackerIndex].pop();
                g--
            }
        }
        function bK() {
            g_playerLandArray[g_defenderIndex] -= aQ
        }
        function bL(g) {
            for (var k = g.length, t = k - 1; 0 <= t; t--)
                b5.hp(g_defenderIndex, g[t]) || (g[t] = g[k - 1],
                    g.pop(),
                    k--)
        }
        function bO(g) {
            for (var k = g.length, t = k - 1; 0 <= t; t--)
                !b5.hp(g_defenderIndex, g[t]) && b5.b6(g[t]) && (g[t] = g[k - 1],
                    g.pop(),
                    k--)
        }
        function bP(g) {
            for (var k = g.length, t, l, y = k - 1; 0 <= y; y--)
                for (t = 3; 0 <= t; t--)
                    if (l = g[y] + aV[t],
                        b5.yl(l, g_defenderIndex)) {
                        bM[g_defenderIndex].push(g[y]);
                        g[y] = g[k - 1];
                        g.pop();
                        k--;
                        break
                    }
        }
        function bR() {
            for (var g, k, t = aQ - 1; 0 <= t; t--)
                for (g = 3; 0 <= g; g--)
                    k = aS[t] + aV[g],
                    b5.ym(g_defenderIndex, k) && b5.yn(k) && (bM[g_defenderIndex].push(k),
                        b5.b7(k, g_defenderIndex))
        }
        function bS() {
            var g;
            a: for (; d3[g_defenderIndex] < d2[g_defenderIndex]; ) {
                for (g = cz[g_defenderIndex]; g >= d0[g_defenderIndex]; g--)
                    if (b5.hp(g_defenderIndex, 4 * (d3[g_defenderIndex] * aZ + g)))
                        break a;
                d3[g_defenderIndex]++
            }
            a: for (; d3[g_defenderIndex] < d2[g_defenderIndex]; ) {
                for (g = cz[g_defenderIndex]; g >= d0[g_defenderIndex]; g--)
                    if (b5.hp(g_defenderIndex, 4 * (d2[g_defenderIndex] * aZ + g)))
                        break a;
                d2[g_defenderIndex]--
            }
            a: for (; d0[g_defenderIndex] < cz[g_defenderIndex]; ) {
                for (g = d2[g_defenderIndex]; g >= d3[g_defenderIndex]; g--)
                    if (b5.hp(g_defenderIndex, 4 * (g * aZ + d0[g_defenderIndex])))
                        break a;
                d0[g_defenderIndex]++
            }
            a: for (; d0[g_defenderIndex] < cz[g_defenderIndex]; ) {
                for (g = d2[g_defenderIndex]; g >= d3[g_defenderIndex]; g--)
                    if (b5.hp(g_defenderIndex, 4 * (g * aZ + cz[g_defenderIndex])))
                        break a;
                cz[g_defenderIndex]--
            }
        }
        function ch(g, k) {
            return 0 === dW.dX[g] || dW.dX[g] !== dW.dX[k]
        }
        function li(g, k) {
            var t, l = ae.af(g);
            for (t = 0; t < l; t++)
                if (0 === ae.ag(g, t)) {
                    var y = ae.al(g, t);
                    if (y === g_unclaimedLandIndex) {
                        if (k === g_unclaimedLandIndex)
                            break;
                        if (lh(k))
                            return true
                    } else if (k === g_unclaimedLandIndex) {
                        if (lh(y))
                            return true
                    } else if (lm(k, y))
                        return true
                }
            return false
        }
        function lh(g) {
            var k, t, l = bM[g].length;
            for (k = 3; 0 <= k; k--) {
                var y = aV[k];
                for (t = 0; t < l; t++)
                    if (b5.bG(bM[g][t] + y))
                        return true
            }
            return false
        }
        function lm(g, k) {
            var t;
            var l = bM[g].length;
            var y = bM[k].length;
            y < l && (l = g,
                g = k,
                k = l,
                l = y);
            for (t = 3; 0 <= t; t--) {
                var n = aV[t];
                for (y = 0; y < l; y++) {
                    var z = bM[g][y] + n;
                    if (b5.bE(z) && b5.bF(z) === k)
                        return true
                }
            }
            return false
        }
        function a2X() {
            function g() {
                c4.gf = performance.now();
                c4.a6h();
                window.requestAnimationFrame(g)
            }
            function k() {
                var t = performance.now();
                c4.gf + 1500 < t && (c4.gf = t,
                    c4.a6h())
            }
            this.c5 = false;
            this.a6j = this.a6i = this.a6h = null;
            this.gf = 0;
            this.a6k = -1;
            this.bp = function() {
                window.requestAnimationFrame(g);
                this.gf = performance.now()
            }
            ;
            this.a2c = function() {
                1 !== ec || !g_isSingleplayer || fq.lw || fc || fq.m2();
                -1 === this.a6k && (this.a6k = setInterval(k, 2E3))
            }
            ;
            this.xt = function() {
                this.c5 = true;
                -1 !== this.a6k && (clearInterval(this.a6k),
                    this.a6k = -1)
            }
            ;
            this.jg = function() {
                this.a6h = this.a6n;
                this.a6i = null;
                this.c5 = true
            }
            ;
            this.jb = function() {
                this.a6i = new a6o;
                this.a6h = this.a6p
            }
            ;
            this.jc = function() {
                this.a6j = new a6q;
                this.a6j.bp();
                this.a6h = this.a6r
            }
            ;
            this.a6n = function() {
                ji.dF();
                jl.dF();
                jt.dF();
                eD.dF();
                eY.wS();
                cD.dF();
                this.c5 && (this.c5 = false,
                    aJ.cG())
            }
            ;
            this.a6p = function() {
                this.a6i.dF()
            }
            ;
            this.a6r = function() {
                this.a6j.dF()
            }
            ;
            this.getTimeSinceGameStarted = function() {
                return g_isSingleplayer ? this.a6i.timeSinceGameStarted_idkthetype : this.a6j.timeSinceGameStarted_idkthetype
            }
            ;
            this.tf = function() {
                return 56
            }
        }
        function a6o() {
            this.gf = c4.gf;
            this.a5j = 56;
            this.timeSinceGameStarted_idkthetype = this.bs = 0;
            this.a6s = false;
            this.dF = function() {
                jt.dF();
                fc ? ed() : 0 === this.bs ? c4.gf >= this.gf && (this.gf += this.a5j * Math.floor(1 + (c4.gf - this.gf) / this.a5j),
                    2 === ec || fq.lw ? e8() : (eE(),
                        this.timeSinceGameStarted_idkthetype++,
                        hB.u5()),
                    this.bs++) : (fq.lw ? ed() : (c4.c5 = true,
                    ea()),
                    this.bs = 0);
                eU();
                c4.c5 && (c4.c5 = false,
                    hs())
            }
        }
        function a6q() {
            this.gf = c4.gf;
            this.a5j = 56;
            this.wO = this.timeSinceGameStarted_idkthetype = this.bs = 0;
            this.a6t = null;
            this.a6u = 7;
            var g;
            this.bp = function() {
                this.wO = 0;
                this.a6t = [];
                g = this.timeSinceGameStarted_idkthetype = this.bs = 0
            }
            ;
            this.a6v = function(k) {
                if (fc)
                    this.tg(k);
                else if (this.a6t.push(k),
                2 === ec) {
                    for (k = 0; k < this.a6t.length; k++)
                        js.a6w(this.a6t[k], g),
                            g = (g + 1) % 8;
                    this.a6t = []
                }
            }
            ;
            this.tg = function(k) {
                js.a6w(k, g);
                g = (g + 1) % 8;
                eB.tg(this.wO);
                this.wO === jI ? (fd.dF(),
                    this.timeSinceGameStarted_idkthetype = this.bs = this.wO = 0,
                    this.gf = c4.gf) : (this.wO++,
                    eA.j7(),
                    eA.eb(true),
                    hB.u5())
            }
            ;
            this.dF = function() {
                jt.dF();
                fc ? (c4.c5 = eB.tg(-1) || c4.c5,
                    ed()) : 0 === this.bs ? c4.gf >= this.gf && (this.gf += this.a5j * Math.floor(1 + (c4.gf - this.gf) / this.a5j),
                    2 === ec ? e8() : this.a6x(),
                    this.bs++) : (c4.c5 = true,
                    ea(),
                    this.bs = 0);
                eU();
                c4.c5 && (c4.c5 = false,
                    hs())
            }
            ;
            this.a6x = function() {
                if (this.timeSinceGameStarted_idkthetype !== 7 * this.wO)
                    eE(),
                        this.timeSinceGameStarted_idkthetype++,
                        hB.u5();
                else {
                    for (var k = false; this.a6z(); )
                        if (k = true,
                            eE(),
                            this.timeSinceGameStarted_idkthetype++,
                        0 < this.a6t.length)
                            for (var t = this.a6u - 2; 0 <= t; t--)
                                eE(),
                                    this.timeSinceGameStarted_idkthetype++;
                        else
                            break;
                    k ? hB.u5() : (e8(),
                        hB.j9())
                }
            }
            ;
            this.a6z = function() {
                return 0 < this.a6t.length ? (this.wO++,
                    js.a6w(this.a6t[0], g),
                    g = (g + 1) % 8,
                    this.a6t.shift(),
                    true) : false
            }
        }
        function kn() {
            function g(k, t) {
                8 !== aJ.pe() || 0 !== t && t !== dv || g_isSingleplayer || e9.n0(k)
            }
            this.gZ = 0;
            this.a70 = true;
            this.dF = function() {
                c4.gf > this.gZ && (this.gZ = c4.gf + 2500,
                    this.a71())
            }
            ;
            this.a71 = function() {
                var k = new Date;
                var t = k.getUTCSeconds();
                this.a70 ? 55 > t || -1 !== c4.a6k || (this.a70 = false,
                    t = k.getUTCMinutes(),
                    4 === t % 5 ? (k = k.getUTCHours(),
                        59 === t && 15 <= k && 21 >= k ? g("Upcoming Game of the Day", 0) : 14 === t % 30 ? g("Upcoming Alliance Contest", 0) : 29 === t % 30 ? g("Upcoming Battle Royale Contest", 0) : g("Upcoming One-vs-One Game", 8)) : 2 === t % 5 && g("Upcoming Zombie Game", 9)) : 55 > t && (this.a70 = true)
            }
        }
        function ka() {
            function g() {
                return Math.pow(Math.pow(y - t, 2) + Math.pow(n - l, 2), .5)
            }
            function k(z) {
                t = pS * z.touches[0].clientX;
                l = pS * z.touches[0].clientY;
                y = pS * z.touches[1].clientX;
                n = pS * z.touches[1].clientY
            }
            var t, l, y, n;
            this.pT = function(z) {
                return 1 < z.touches.length ? (k(z),
                    hx.lH(),
                    true) : false
            }
            ;
            this.pY = function(z) {
                if (0 === ec)
                    return false;
                if (1 < z.touches.length) {
                    if (!eV.h3())
                        return true;
                    var x = g();
                    k(z);
                    z = g();
                    gm.rQ(Math.floor((t + y) / 2), Math.floor((l + n) / 2), z / x);
                    return c4.c5 = true
                }
                return false
            }
        }
        function kb() {
            function g(y, n) {
                for (var z = Array(y), x = 0; x < y; x++)
                    z[x] = k(n, 10);
                return m.iX(z)
            }
            function k(y, n) {
                for (var z = 0, x, A, B = l; B < l + n; B++)
                    x = as(B, 8),
                        A = 7 - B % 8,
                        z |= (y[x] >> A & 1) << l + n - B - 1;
                l += n;
                return z
            }
            var t, l;
            this.a5h = function(y, n) {
                l = 0;
                t = n.length;
                if (0 === t)
                    eD.a26(y, 3205);
                else {
                    var z = k(n, 1);
                    if (0 === z)
                        if (z = k(n, 2),
                        0 === z)
                            if (0 === k(n, 1)) {
                                if (0 === y && 8 !== aJ.pe() && !(4 > t)) {
                                    uY.br(0, g(k(n, 5), n));
                                    uY.br(1, "[" + g(k(n, 3), n) + "]");
                                    var x = k(n, 12)
                                        , A = k(n, 6)
                                        , B = Array(x);
                                    for (z = 0; z < x; z++)
                                        B[z] = k(n, A);
                                    jj.rt(B)
                                }
                            } else {
                                if (8 !== aJ.pe())
                                    if (3 > t)
                                        eD.a26(y, 3208);
                                    else {
                                        x = k(n, 1);
                                        A = k(n, 16);
                                        B = k(n, 4);
                                        var C = [];
                                        for (z = 0; z < B; z++) {
                                            var E = k(n, 14);
                                            var G = k(n, 5);
                                            G = g(G, n);
                                            C.push({
                                                name: G,
                                                iF: E
                                            })
                                        }
                                        0 === x ? cD.uR(0, C, 10, 1, .36, .55, A) : cD.uR(1, C, 100, 2, .47, .5, A)
                                    }
                            }
                        else if (1 === z)
                            if (y !== eD.w6)
                                eD.close(y, 3239);
                            else if (6 === aJ.pe() && ju.bp(),
                            7 !== aJ.pe())
                                eD.close(y, 3251);
                            else {
                                x = [0, 0, 0, 0];
                                A = k(n, 6);
                                for (z = 0; 4 > z; z++)
                                    x[z] = k(n, A);
                                B = k(n, 4);
                                C = [];
                                for (z = 0; z < B; z++)
                                    C.push({
                                        id: k(n, 5),
                                        jM: k(n, 4),
                                        x9: 1 === k(n, 1),
                                        x6: k(n, 6),
                                        x7: k(n, 14),
                                        xC: k(n, A),
                                        xD: k(n, 9) + 1,
                                        vj: k(n, 10)
                                    });
                                ju.uZ(x, C)
                            }
                        else
                            2 !== z && 3 !== z || eY.bp(n);
                    else
                        1 === z && (z = aJ.pe(),
                            8 !== z ? 10 === z && eD.a26(y, 3243) : y !== eD.jf ? eD.a26(y, 3244) : 0 === k(n, 1) ? c4.a6j.a6v(n) : (z = k(n, 2),
                                0 === z ? 3 !== t ? eD.a26(eD.jf, 3230) : (z = k(n, 9),
                                    x = k(n, 7),
                                0 !== g_isPlayersAliveArray[z] && 0 !== g_isPlayersAliveArray[g_localPlayerIndex] && (x %= a5.a6,
                                    e9.mr(z, g_localPlayerIndex, x),
                                    eA.n4(z, 1, x))) : 1 === z ? 2 !== t ? eD.a26(eD.jf, 3235) : (z = k(n, 9),
                                0 !== g_isPlayersAliveArray[z] && 0 !== g_isPlayersAliveArray[g_localPlayerIndex] && eQ.a1j(0, [z], true) && e9.la(z, 1)) : 3 !== t ? eD.a26(eD.jf, 3236) : (z = k(n, 9),
                                    x = k(n, 9),
                                0 !== g_isPlayersAliveArray[z] && 0 !== g_isPlayersAliveArray[x] && 0 !== g_isPlayersAliveArray[g_localPlayerIndex] && eQ.a1j(1, [z], true) && (eA.n4(z, 3, 96),
                                    eA.n4(x, 4, 96),
                                    e9.n7(z, x)))))
                }
            }
            ;
            this.wT = function(y) {
                l = 1;
                t = y.length;
                if (2 === k(y, 2)) {
                    l += 20;
                    for (var n = k(y, 9), z = k(y, 14), x = k(y, 4), A = 1 === k(y, 1), B = k(y, 6), C = k(y, 14), E = k(y, 9) + 1, G = [], F, M, H, D = 0; D < E; D++)
                        F = k(y, 1),
                            M = [k(y, 6), k(y, 6), k(y, 6)],
                            H = g(k(y, 5), y),
                            G.push({
                                name: H,
                                xd: M,
                                xe: F
                            });
                    aJ.vp();
                    xJ(B, C);
                    1 === G.length && dy.xW(x);
                    jJ(z, n, G, x, A)
                } else {
                    l += 20;
                    n = k(y, 1);
                    z = k(y, 14);
                    x = k(y, 4);
                    A = 1 === k(y, 1);
                    B = k(y, 6);
                    C = k(y, 14);
                    E = [];
                    for (D = 0; 2 > D; D++)
                        G = k(y, 1),
                            F = [k(y, 6), k(y, 6), k(y, 6)],
                            M = k(y, 14),
                            H = g(k(y, 5), y),
                            E.push({
                                name: H,
                                xd: F,
                                iF: M,
                                xe: G
                            });
                    aJ.vp();
                    xJ(B, C);
                    jJ(z, n, E, x, A)
                }
            }
            ;
            this.wM = function(y) {
                l = 1;
                t = y.length;
                var n = k(y, 2)
                    , z = k(y, 10);
                eD.w6 > eD.wR && (z += eD.wR);
                if (eD.w6 === z)
                    return eD.jf = z,
                        false;
                eD.close(eD.w6, 3247);
                eD.jf = z;
                eY.wG = k(y, 10);
                eY.wH = k(y, 2 === n ? 9 : 1);
                eD.rp(z, 5) && iu.a23();
                return true
            }
            ;
            this.a6w = function(y, n) {
                l = 2;
                var z = 8 * y.length;
                if (k(y, 3) !== n)
                    eD.a26(eD.jf, 3248);
                else
                    for (; l + 8 <= z; ) {
                        var x = k(y, 3);
                        var A = k(y, 9);
                        if (0 === x) {
                            x = k(y, 10);
                            var B = k(y, 9);
                            B = B === A ? g_unclaimedLandIndex : B;
                            eG.fZ(A, x, B)
                        } else if (1 === x) {
                            x = k(y, 10);
                            B = k(y, 11);
                            var C = k(y, 11);
                            eG.fb(A, x, B, C)
                        } else
                            2 === x ? (B = k(y, 9),
                                B = B === A ? g_unclaimedLandIndex : B,
                                eG.fe(A, B)) : 3 === x ? eG.fh(A) : 4 === x ? (x = k(y, 7),
                                eA.n4(A, 0, x)) : 5 === x ? eG.fp(A) : 6 === x ? eG.fg(A, k(y, 1)) : 7 === x && eG.ff(A, 1 + k(y, 11))
                    }
            }
        }
        function a2U() {
            this.a5V = this.a5U = this.a5T = this.a5S = this.a5X = this.a5W = 0;
            this.u6 = [0, 0, 0, 0];
            this.h2 = function() {
                this.a5W = gm.gF();
                this.a5X = gm.cF();
                this.a5S = -this.a5W;
                this.a5T = -this.a5X;
                this.a5U = gE / g7;
                this.a5V = cB / g7;
                this.u6[0] = Math.floor(this.a5S);
                this.u6[1] = Math.floor(this.a5T);
                this.u6[2] = Math.floor(this.u6[0] + this.a5U + 1);
                this.u6[3] = Math.floor(this.u6[1] + this.a5V + 1);
                hB.u3 = true
            }
        }
        function kc() {
            var g, k;
            this.bp = function() {
                g = 1;
                k = 0
            }
            ;
            this.dF = function() {
                0 < g && (k = 0 === k ? c4.gf + 16 : k,
                    g -= .001 * (c4.gf - k),
                    g = 0 > g ? 0 : g,
                    k = c4.gf,
                    c4.c5 = true)
            }
            ;
            this.cG = function() {
                0 < g && (cH.fillStyle = "rgba(0,0,0," + g + ")",
                    cH.fillRect(0, 0, gE, cB))
            }
        }
        function kh() {
            function g(k, t, l, y, n) {
                k >= zg || (x6 === k && (cH.fillStyle = oM,
                    cH.fillRect(t, l, y, n),
                    cH.fillStyle = cK),
                    cH.strokeRect(t, l, y, n),
                    cH.fillText(jp.bz(k).name, Math.floor(t + .5 * y), Math.floor(l + .55 * n)))
            }
            this.lE = false;
            this.xV = [0, 0, 0, 0];
            this.show = function() {
                this.lE = true;
                this.lx();
                c4.c5 = true
            }
            ;
            this.lx = function() {
                var k = as(zg + zg % 2, 2);
                k = s - k * cA;
                this.xV[2] = q ? Math.floor(.75 * pO) : Math.floor(.5 * pO);
                this.xV[3] = Math.floor(1.2 * this.xV[2]);
                this.xV[3] > k && (this.xV[3] = k,
                    this.xV[2] = Math.floor(k / 1.2));
                this.xV[0] = Math.floor((r - this.xV[2]) / 2);
                this.xV[1] = Math.floor((s - this.xV[3]) / 2)
            }
            ;
            this.lo = function(k, t) {
                return k < this.xV[0] || t < this.xV[1] || k > this.xV[0] + this.xV[2] || t > this.xV[1] + this.xV[3] ? false : true
            }
            ;
            this.actionWheelOnClick = function(k, t) {
                var l = as(zg + zg % 2, 2);
                c4.c5 = true;
                if (k < this.xV[0] || t < this.xV[1] || k > this.xV[0] + this.xV[2] || t > this.xV[1] + this.xV[3])
                    return this.lE = false,
                        true;
                var y = Math.floor(.13 * this.xV[3]);
                if (t < this.xV[1] + y)
                    return k > this.xV[0] + this.xV[2] - 1.2 * y && (this.lE = false),
                        true;
                y = Math.floor(l * (t - this.xV[1] - y) / (this.xV[3] - y));
                y = 0 > y ? 0 : y > l - 1 ? l - 1 : y;
                k > this.xV[0] + this.xV[2] / 2 && (y += l);
                if (y >= zg)
                    return true;
                xJ(y, Math.floor(16384 * Math.random()));
                return true
            }
            ;
            this.cG = function() {
                var k, t = Math.floor(.13 * this.xV[3]), l = as(zg + zg % 2, 2), y = (this.xV[3] - t - (l + 1) * cA) / l, n = Math.floor((this.xV[2] - 3 * cA) / 2);
                cH.lineWidth = 2;
                cH.textAlign = cJ;
                cH.textBaseline = cI;
                cH.font = bt + Math.floor(.48 * y) + bu;
                cH.fillStyle = i1;
                cH.fillRect(this.xV[0], this.xV[1], this.xV[2], this.xV[3]);
                cH.fillStyle = oM;
                cH.fillRect(this.xV[0], this.xV[1], this.xV[2], t);
                cH.strokeStyle = cK;
                cH.strokeRect(this.xV[0], this.xV[1], this.xV[2], this.xV[3]);
                cH.fillStyle = cK;
                for (k = l - 1; 0 <= k; k--) {
                    var z = Math.floor(this.xV[1] + t + cA + k * (y + cA));
                    g(k, this.xV[0] + cA, z, n, y);
                    g(k + l, this.xV[0] + n + 2 * cA, z, n, y)
                }
                fq.mB(Math.floor(this.xV[0] + this.xV[2] - .8 * t), Math.floor(this.xV[1] + .25 * t), Math.floor(.5 * t));
                cH.setTransform(1, 0, 0, 1, 0, 0)
            }
        }
        function kd() {
            function g(n) {
                var z = generatePassword()
                    , x = Math.floor(z / 16777216);
                l(n, 24, x);
                l(n, 24, z - 16777216 * x)
            }
            function k(n) {
                l(n, 14, a2C);
                l(n, 4, g_isIOSUser ? 2 : 12 <= d ? 1 : 0 < d ? 3 : 0);
                l(n, 1, a2G ? 1 : 0);
                l(n, 1, a2F ? 1 : 0);
                l(n, 5, (new Date).getHours() % 24)
            }
            function bitToBytes(n) {
                return as(n, 8) + (0 < n % 8 ? 1 : 0)
            }
            function l(n, z, x) {
                for (var A, B, C = y; C < y + z; C++)
                    A = as(C, 8),
                        B = 7 - C % 8,
                        n[A] |= (x >> z - (C - y + 1) & 1) << B;
                y += z
            }
            var y;
            this.rs = function() {
                var n = new Uint8Array(3);
                y = 0;
                l(n, 1, 0);
                l(n, 3, 0);
                l(n, 14, a2C);
                eD.send(0, n)
            }
            ;
            this.vY = function(n) {
                var z = m.iW(jh.xc())
                    , x = z.length
                    , A = new Uint8Array(bitToBytes(105 + 10 * x));
                y = 0;
                l(A, 1, 0);
                l(A, 3, 1);
                l(A, 10, a2H);
                var B = cC.mE[2].ik.vG();
                l(A, 6, B[0]);
                l(A, 6, B[1]);
                l(A, 6, B[2]);
                g(A);
                k(A);
                for (B = 0; B < x; B++)
                    l(A, 10, z[B]);
                eD.w6 = n;
                eD.send(n, A)
            }
            ;
            this.uP = function(n, z) {
                var x = new Uint8Array(5);
                y = 0;
                l(x, 1, 0);
                l(x, 3, 7);
                l(x, 3, 0);
                l(x, 14, a2C);
                l(x, 1, z);
                l(x, 16, Math.abs(4096 + cD.position[z] + cD.uO[z]) % 65536);
                eD.send(n, x)
            }
            ;
            this.a24 = function(n) {
                var z, x = new Uint8Array(100);
                y = 0;
                l(x, 1, 0);
                l(x, 3, 7);
                l(x, 3, 1);
                l(x, 14, a2J);
                var A = m.iW(a2K)
                    , B = qr(A.length, 77);
                l(x, 7, B);
                for (z = 0; z < B; z++)
                    l(x, 10, A[z]);
                eD.send(n, x)
            }
            ;
            this.y0 = function(n) {
                var z;
                if (!(jh.xq + 7E3 > c4.gf)) {
                    jh.xq = c4.gf;
                    var x = new Uint8Array(17);
                    y = 0;
                    l(x, 1, 0);
                    l(x, 3, 7);
                    l(x, 3, 2);
                    g(x);
                    var A = me(jh.xp.length - 20, 0);
                    for (z = jh.xp.length - 1; z >= A; z--)
                        l(x, 4, Math.abs(jh.xp.charCodeAt(z) - 48) % 10);
                    eD.send(n, x)
                }
            }
            ;
            this.a1v = function(n, z) {
                var x = new Uint8Array(1);
                y = 0;
                l(x, 1, 0);
                l(x, 3, 5);
                l(x, 1, z ? 1 : 0);
                eD.send(n, x)
            }
            ;
            this.xN = function(n) {
                var z = new Uint8Array(1);
                y = 0;
                l(z, 1, 0);
                l(z, 3, 2);
                l(z, 4, n);
                eD.send(eD.w6, z)
            }
            ;
            this.a23 = function() {
                var n = new Uint8Array(7);
                y = 0;
                l(n, 1, 0);
                l(n, 3, 6);
                l(n, 8, eD.n2());
                l(n, 10, eY.wG);
                l(n, 9, eY.wH);
                l(n, 10, a2H);
                l(n, 14, a2C);
                eD.send(eD.jf, n)
            }
            ;
            this.lW = function(selectedPercentage, z) {
                var x = new Uint8Array(3);
                y = 0;
                l(x, 1, 1);
                l(x, 3, 0);
                l(x, 10, selectedPercentage);
                l(x, 9, z);
                eD.send(eD.jf, x)
            }
            ;
            this.lY = function(n, z, x) {
                var A = new Uint8Array(5);
                y = 0;
                l(A, 1, 1);
                l(A, 3, 1);
                l(A, 10, n);
                l(A, 11, z);
                l(A, 11, x);
                eD.send(eD.jf, A)
            }
            ;
            this.qC = function(n) {
                var z = new Uint8Array(2);
                y = 0;
                l(z, 1, 1);
                l(z, 3, 2);
                l(z, 1, 0);
                l(z, 9, n);
                eD.send(eD.jf, z)
            }
            ;
            this.qD = function(n) {
                var z = new Uint8Array(2);
                y = 0;
                l(z, 1, 1);
                l(z, 3, 2);
                l(z, 1, 1);
                l(z, 11, n - 1);
                eD.send(eD.jf, z)
            }
            ;
            this.iv = function(n, z) {
                var x = new Uint8Array(4);
                y = 0;
                l(x, 1, 1);
                l(x, 3, 3);
                l(x, 12, n);
                l(x, 10, z);
                eD.send(eD.jf, x)
            }
            ;
            this.m5 = function() {
                var n = new Uint8Array(1);
                y = 0;
                l(n, 1, 1);
                l(n, 3, 4);
                eD.send(eD.jf, n)
            }
            ;
            this.oE = function(n) {
                var z = new Uint8Array(2);
                y = 0;
                l(z, 1, 1);
                l(z, 3, 5);
                l(z, 7, n);
                eD.send(eD.jf, z)
            }
            ;
            this.oF = function(n, z) {
                e9.mr(g_localPlayerIndex, z, n);
                var x = new Uint8Array(3);
                y = 0;
                l(x, 1, 1);
                l(x, 3, 6);
                l(x, 2, 0);
                l(x, 9, z);
                l(x, 7, n);
                eD.send(eD.jf, x)
            }
            ;
            this.lb = function(n) {
                var z = new Uint8Array(2);
                y = 0;
                l(z, 1, 1);
                l(z, 3, 6);
                l(z, 2, 1);
                l(z, 9, n);
                eD.send(eD.jf, z)
            }
            ;
            this.lS = function(n, z) {
                var x, A = n.length, B = new Uint8Array(bitToBytes(15 + 9 * A));
                y = 0;
                l(B, 1, 1);
                l(B, 3, 6);
                l(B, 2, 2);
                l(B, 9, z);
                for (x = 0; x < A; x++)
                    l(B, 9, n[x]);
                eD.send(eD.jf, B)
            }
            ;
            this.qm = function(n) {
                var z = new Uint8Array(1);
                y = 0;
                l(z, 1, 1);
                l(z, 3, 7);
                l(z, 1, n ? 1 : 0);
                eD.send(eD.jf, z)
            }
            ;
            this.xa = function(n) {
                var z = new Uint8Array(4);
                y = 0;
                l(z, 1, 0);
                l(z, 3, 3);
                k(z);
                eD.send(n, z)
            }
        }
        setTimeout(aI, 1E4);
    }
)();