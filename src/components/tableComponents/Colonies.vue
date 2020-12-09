<template>
    <div>
        <div v-if="colonies">
            <div v-for="colony in colonies" :key="colony.name" :style="'left: ' + colony.x + 'px; top: ' + colony.y + 'px'" class="colony">
                <img :src="require('@/assets/colonies/' + colony.name + '.png')" class="colony" @click="activateColony(colony.name)"/>
                <img v-for="playerCube in getOnColony(colony)" :key="playerCube.name" :src="getPlayerIcon(playerCube.name)" :style="'left: ' + playerCube.x + 'px; top: ' + playerCube.y + 'px;'" class="playerImage"/>
            </div>
        </div>
        <div v-if="colonyAction" class="colonyModalBackground">
            <div v-if="!paying" class="colonyActionBox">
                <Button @onClick="trade()" buttonText="KERSKEDÉS" width="150px" :confirm="false"/>
                <Button buttonText="GYARMAT" width="150px" :confirm="false"/>
                <Button @onClick="colonyAction = false" buttonText="MÉGSE" width="150px" :confirm="false"/>
            </div>
            <div v-for="(option, index) in payOption" :key="'option' + index" class="colonyModal">
                <Modal :payOption="option" @onAccept="accept()" @onCancel="paying = false, colonyAction = false, payOption = []" :title="'Gyarmat: ' + chosedColony"/>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex"
import { UtilFunctions } from "@/utils.js";
import Modal from "@/components/utils/Modal";
import Button from "@/components/utils/Button";
import axios from "axios"
export default {
    components: {
        Modal,
        Button
    },
    data() {
        return {
            colonyAction: false,
            paying: false,
            chosedColony: "",
            payOption: [],
        }
    },
    computed: {
        ...mapGetters({
            gameData: "gameData/getGameData",
            player: "players/getPlayer"
        }),
        colonies() {
            if(Object.keys(this.gameData).length != 0) {
                let result = []
                for(var i = 0; i < Object.keys(this.gameData.colonies).length; i++) {
                    let colony = {name: Object.keys(this.gameData.colonies)[i], x: "", y: ""}
                    switch (i) {
                        case 0:
                            colony.x = "622";
                            colony.y = "454";
                            break;
                        case 1:
                            colony.x = "392";
                            colony.y = "593";
                            break;
                        case 2:
                            colony.x = "665";
                            colony.y = "621";
                            break;
                        case 3:
                            colony.x = "671";
                            colony.y = "1275";
                            break;
                        case 4:
                            colony.x = "399";
                            colony.y = "1306";
                            break;
                        case 5:
                            colony.x = "625";
                            colony.y = "1441";
                            break;
                        case 6:
                            colony.x = "2969";
                            colony.y = "454";
                            break;
                        case 7:
                            colony.x = "3195";
                            colony.y = "593";
                            break;
                        case 8:
                            colony.x = "2921";
                            colony.y = "621";
                            break;
                        case 9:
                            colony.x = "3185";
                            colony.y = "1302";
                            break;
                    }
                    result.push(colony)
                }
                return result
            } else {
                return null
            }
        },
    },
    methods: {
        activateColony(colonyName) {
            if(this.player.active) {
                this.colonyAction = true;
                this.chosedColony = colonyName;
            }
        },
        trade() {
            this.paying = true;
            axios.put(this.$store.state.SERVER_URL + "/api/action/trade/" + this.chosedColony, JSON.parse(JSON.stringify(this.player)), {
                headers: {
                    'content-type': 'application/json'
                }
            }).then((res) => {
                this.payOption = res.data;
            })
        },
        getOnColony(colonyData) {
            let colony = this.gameData.colonies[colonyData.name];
            let result = [];
            let cube = {name: "neutral", x: "", y: ""};
            if(colony.colonyLevel == 0) {
                cube.x = "200";
                cube.y = "40";
            } else {
                cube.x = this.getIconDimension(colony.colonyLevel);
                cube.y = "90";
            }
            result.push(cube);
            for(let playerName in colony.playersOnColony) {
                cube = {name: UtilFunctions.getPlayerIcon(playerName), x: this.getIconDimension(colony.colonyLevel), y: "90"};
                result.push(cube);
            }
            return result;
        },
        getPlayerIcon(name) {
            return UtilFunctions.getPlayerIcon(name);
        },
        getIconDimension(level) {
            let result = ""
            switch (level) {
                case 1:
                    result = "33";
                    break;
                case 2:
                    result = "57";
                    break;
                case 3:
                    result = "82";
                    break;
                case 4:
                    result = "107";
                    break;
                case 5:
                    result = "133";
                    break;
                case 6:
                    result = "158";
                    break;
                case 7:
                    result = "183";
                    break;
            }
            return result
        }
    },
}
</script>

<style scoped>
.colony {
    position: absolute;
    width: 250px;
    text-align: left;
}

.first {
  left: 622px;
  top: 304px;
}

.playerImage {
    position: absolute;
    height: 33px;
}

.colonyModalBackground {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 10000;
}

.colonyModal {
    position: relative;
    width: 500px;
    height: 250px;
    top: calc(50% - 375px);
    left: calc(50% - 350px);
}

.lockedBackground {
    position: absolute;
    background-color: transparent;
    z-index: 10000;
}

.payingBox {
    position: absolute;
    width: 300px;
    background: rgba(255, 255, 255, 0.5);
}

.colonyActionBox {
    text-align: center;
    position: fixed;
    width: 300px;
    background: rgba(255, 255, 255, 0.5);
    top: calc(50% - 80px);
    left: calc(50% - 170px);
    padding: 20px;
    border-radius: 30px;
}

.colonyActionBox > div {
    margin-top: 20px;
    margin-bottom: 10px;
}
</style>