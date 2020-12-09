<template>
    <div>
        <img class="standinCube" src="@/assets/playerImages/standingCube.png" :style="'left: ' + temperature.x + 'px; top: ' + temperature.y + 'px'"/>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    computed: {
        ...mapGetters({
            gameData: "gameData/getGameData"
        }),
        temperature() {
            let result = {x: 1075, y: 1219}
            switch (this.gameData.temperature) {
                case -30:
                    break;
                case -29:
                    result.x = 1117;
                    result.y = 1270;
                    break;
                case -28:
                    result.x = 1161;
                    result.y = 1310;
                    break;
                case -27:
                    result.x = 1212;
                    result.y = 1346;
                    break;
                case -26:
                    result.x = 1261;
                    result.y = 1375;
                    break;
                case -25:
                    result.x = 1309;
                    result.y = 1401;
                    break;
                case -24:
                    result.x = 1359;
                    result.y = 1424;
                    break;
                case -23:
                    result.x = 1405;
                    result.y = 1444;
                    break;
                case -22:
                    result.x = 1450;
                    result.y = 1460;
                    break;
                case -21:
                    result.x = 1494;
                    result.y = 1475;
                    break;
                case -20:
                    result.x = 1540;
                    result.y = 1486;
                    break;
                case -19:
                    result.x = 1579;
                    result.y = 1496;
                    break;
                case -18:
                    result.x = 1621;
                    result.y = 1505;
                    break;
                case -17:
                    result.x = 1660;
                    result.y = 1512;
                    break;
                case -16:
                    result.x = 1700;
                    result.y = 1517;
                    break;
                case -15:
                    result.x = 1739;
                    result.y = 1522;
                    break;
                case -14:
                    result.x = 1776;
                    result.y = 1527;
                    break;
                case -13:
                    result.x = 1812;
                    result.y = 1529;
                    break;
                case -12:
                    result.x = 1848;
                    result.y = 1531;
                    break;
                case -11:
                    result.x = 1884;
                    result.y = 1533;
                    break;
                case -10:
                    result.x = 1918;
                    result.y = 1532;
                    break;
                case -9:
                    result.x = 1955;
                    result.y = 1531;
                    break;
                case -8:
                    result.x = 1990;
                    result.y = 1529;
                    break;
                case -7:
                    result.x = 2028;
                    result.y = 1527;
                    break;
                case -6:
                    result.x = 2069;
                    result.y = 1524;
                    break;
                case -5:
                    result.x = 2106;
                    result.y = 1521;
                    break;
                case -4:
                    result.x = 2146;
                    result.y = 1515;
                    break;
                case -3:
                    result.x = 2189;
                    result.y = 1509;
                    break;
                case -2:
                    result.x = 2227;
                    result.y = 1501;
                    break;
                case -1:
                    result.x = 2267;
                    result.y = 1490;
                    break;
                case 0:
                    result.x = 2311;
                    result.y = 1480;
                    break;
                case 1:
                    result.x = 2355;
                    result.y = 1466;
                    break;
                case 2:
                    result.x = 2403;
                    result.y = 1448;
                    break;
                case 3:
                    result.x = 2453;
                    result.y = 1429;
                    break;
                case 4:
                    result.x = 2499;
                    result.y = 1406;
                    break;
                case 5:
                    result.x = 2548;
                    result.y = 1380;
                    break;
                case 6:
                    result.x = 2598;
                    result.y = 1349;
                    break;
                case 7:
                    result.x = 2647;
                    result.y = 1313;
                    break;
                case 8:
                    result.x = 2694;
                    result.y = 1269;
                    break;
                case 9:
                    result.x = 2737;
                    result.y = 1218;
                    break;
            }
            return result;
        }
    }
}
</script>

<style scoped>
.standinCube {
  position: absolute;
  width: 45px;
}
</style>