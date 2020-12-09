<template>
    <div>
        <img class="standinCube" src="@/assets/playerImages/standingCube.png" :style="'left: ' + venus.x + 'px; top: ' + venus.y + 'px'"/>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    computed: {
        ...mapGetters({
            gameData: "gameData/getGameData"
        }),
        venus() {
            let result = {x: 2832, y: 1288}
            switch (this.gameData.venus) {
                case 0:
                    break;
                case 1:
                    result.x = 2850;
                    result.y = 1266;
                    break;
                case 2:
                    result.x = 2863;
                    result.y = 1248;
                    break;
                case 3:
                    result.x = 2874;
                    result.y = 1231;
                    break;
                case 4:
                    result.x = 2884;
                    result.y = 1215;
                    break;
                case 5:
                    result.x = 2893;
                    result.y = 1196;
                    break;
                case 6:
                    result.x = 2904;
                    result.y = 1177;
                    break;
                case 7:
                    result.x = 2912;
                    result.y = 1159;
                    break;
                case 8:
                    result.x = 2920;
                    result.y = 1139;
                    break;
                case 9:
                    result.x = 2928;
                    result.y = 1120;
                    break;
                case 10:
                    result.x = 2933;
                    result.y = 1100;
                    break;
                case 11:
                    result.x = 2939;
                    result.y = 1080;
                    break;
                case 12:
                    result.x = 2942;
                    result.y = 1060;
                    break;
                case 13:
                    result.x = 2946;
                    result.y = 1040;
                    break;
                case 14:
                    result.x = 2947;
                    result.y = 1019;
                    break;
                case 15:
                    result.x = 2947;
                    result.y = 998;
                    break;
                case 16:
                    result.x = 2946;
                    result.y = 977;
                    break;
                case 17:
                    result.x = 2944;
                    result.y = 957;
                    break;
                case 18:
                    result.x = 2941;
                    result.y = 937;
                    break;
                case 19:
                    result.x = 2936;
                    result.y = 917;
                    break;
                case 20:
                    result.x = 2930;
                    result.y = 896;
                    break;
                case 21:
                    result.x = 2924;
                    result.y = 877;
                    break;
                case 22:
                    result.x = 2916;
                    result.y = 858;
                    break;
                case 23:
                    result.x = 2908;
                    result.y = 839;
                    break;
                case 24:
                    result.x = 2898;
                    result.y = 820;
                    break;
                case 25:
                    result.x = 2888;
                    result.y = 801;
                    break;
                case 26:
                    result.x = 2878;
                    result.y = 784;
                    break;
                case 27:
                    result.x = 2867;
                    result.y = 766;
                    break;
                case 28:
                    result.x = 2856;
                    result.y = 749;
                    break;
                case 29:
                    result.x = 2844;
                    result.y = 732;
                    break;
                case 30:
                    result.x = 2834;
                    result.y = 716;
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
  width: 30px;
}
</style>