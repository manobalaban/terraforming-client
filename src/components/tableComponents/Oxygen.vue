<template>
    <div>
        <img class="standinCube" src="@/assets/playerImages/standingCube.png" :style="'left: ' + oxygen.x + 'px; top: ' + oxygen.y + 'px'"/>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    computed: {
        ...mapGetters({
            gameData: "gameData/getGameData"
        }),
        oxygen() {
            let result = {x: 1100, y: 740}
            switch (this.gameData.oxygen) {
                case 0:
                    break;
                case 0.5:
                    result.x = 1150;
                    result.y = 680;
                    break;
                case 1:
                    result.x = 1220;
                    result.y = 630;
                    break;
                case 1.5:
                    result.x = 1290;
                    result.y = 590;
                    break;
                case 2:
                    result.x = 1350;
                    result.y = 560;
                    break;
                case 2.5:
                    result.x = 1420;
                    result.y = 530;
                    break;
                case 3:
                    result.x = 1480;
                    result.y = 510;
                    break;
                case 3.5:
                    result.x = 1530;
                    result.y = 495;
                    break;
                case 4:
                    result.x = 1585;
                    result.y = 482;
                    break;
                case 4.5:
                    result.x = 1636;
                    result.y = 473;
                    break;
                case 5:
                    result.x = 1683;
                    result.y = 465;
                    break;
                case 5.5:
                    result.x = 1728;
                    result.y = 459;
                    break;
                case 6:
                    result.x = 1771;
                    result.y = 456;
                    break;
                case 6.5:
                    result.x = 1814;
                    result.y = 451;
                    break;
                case 7:
                    result.x = 1856;
                    result.y = 450;
                    break;
                case 7.5:
                    result.x = 1897;
                    result.y = 449;
                    break;
                case 8:
                    result.x = 1938;
                    result.y = 450;
                    break;
                case 8.5:
                    result.x = 1979;
                    result.y = 451;
                    break;
                case 9:
                    result.x = 2022;
                    result.y = 455;
                    break;
                case 9.5:
                    result.x = 2065;
                    result.y = 460;
                    break;
                case 10:
                    result.x = 2111;
                    result.y = 465;
                    break;
                case 10.5:
                    result.x = 2158;
                    result.y = 472;
                    break;
                case 11:
                    result.x = 2209;
                    result.y = 482;
                    break;
                case 11.5:
                    result.x = 2262;
                    result.y = 495;
                    break;
                case 12:
                    result.x = 2318;
                    result.y = 513;
                    break;
                case 12.5:
                    result.x = 2379;
                    result.y = 532;
                    break;
                case 13:
                    result.x = 2442;
                    result.y = 559;
                    break;
                case 13.5:
                    result.x = 2508;
                    result.y = 591;
                    break;
                case 14:
                    result.x = 2575;
                    result.y = 633;
                    break;
                case 14.5:
                    result.x = 2642;
                    result.y = 685;
                    break;
                case 15:
                    result.x = 2703;
                    result.y = 746;
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