<template>
    <div class="playerDataContainer">
        <div v-if="player">
            <div class="playerDataHeader" :style="'background: ' + playerColor">
                <Button buttonText="TÁBLA" width="120px" :confirm="false" @onClick="$router.push('/table')"/>
                <div class="headerBox">
                    TR<br>{{player.tr}}
                </div>
                <div class="headerBox">
                    {{player.corporation == null ? 'Cégbirodalom' : corporationName}}
                </div>
                <div class="headerBox">
                    <div class="resourceBox">
                        <img src="@/assets/icons/production.png" class="prodImg" />
                        <div class="prodNum">{{ player.resources.CREDIT_PROD }}</div>
                        <img src="@/assets/icons/resources/credit.png" class="resourceIcon" />
                        <div class="resNum">{{ player.resources.CREDIT }}</div>
                    </div>
                    <div class="resourceBox">
                        <img src="@/assets/icons/production.png" class="prodImg" />
                        <div class="prodNum">{{ player.resources.STEEL_PROD }}</div>
                        <img src="@/assets/icons/resources/steel.png" class="resourceIcon" />
                        <div class="resNum">{{ player.resources.STEEL }}</div>
                    </div>
                    <div class="resourceBox">
                        <img src="@/assets/icons/production.png" class="prodImg" />
                        <div class="prodNum">{{ player.resources.TITAN_PROD }}</div>
                        <img src="@/assets/icons/resources/titan.png" class="resourceIcon" />
                        <div class="resNum">{{ player.resources.TITAN }}</div>
                    </div>
                    <div class="resourceBox">
                        <img src="@/assets/icons/production.png" class="prodImg" />
                        <div class="prodNum">{{ player.resources.PLANT_PROD }}</div>
                        <img src="@/assets/icons/resources/plant.png" class="resourceIcon" />
                        <div class="resNum">{{ player.resources.PLANT }}</div>
                    </div>
                    <div class="resourceBox">
                        <img src="@/assets/icons/production.png" class="prodImg" />
                        <div class="prodNum">{{ player.resources.ENERGY_PROD }}</div>
                        <img src="@/assets/icons/resources/energy.png" class="resourceIcon" />
                        <div class="resNum">{{ player.resources.ENERGY }}</div>
                    </div>
                    <div class="resourceBox">
                        <img src="@/assets/icons/production.png" class="prodImg" />
                        <div class="prodNum">{{ player.resources.HEAT_PROD }}</div>
                        <img src="@/assets/icons/resources/heat.png" class="resourceIcon" />
                        <div class="resNum">{{ player.resources.HEAT }}</div>
                    </div>
                </div>
                {{player.tags[0] == null ? "Ikonon" : ""}}
                <div v-for="tag in tags" :key="tag.name">
                    <div v-if="tag.num" >
                        <img :src="require('@/assets/icons/tags/' + tag.name + '.png')" class="resourceIcon" />
                        {{tag.num}}
                    </div>
                </div> 
            </div>
            <div class="buttonPanel">
                {{player.cardsInHand.length}}<br>
                <Button buttonText="KÁRTYÁK" width="150px" :confirm="false" :active="guestPlayer && player.cardsInHand != 0" @onClick="content = 'cards', contentTitle = 'KÁRTYÁK KÉZBEN'"/>
            </div>
            <div class="buttonPanel">
                {{player.playedCards.length}}<br>
                <Button buttonText="KIJÁTSZVA" width="150px" :confirm="false" :active="player.playedCards != 0" @onClick="content = 'played', contentTitle = 'KIJÁTSZOTT KÁRTYÁK'"/>
            </div>
            <div class="buttonPanel">
                {{Object.keys(player.actions).length}}/{{usedActionNumber}}<br>
                <Button buttonText="AKCIÓK" width="150px" :confirm="false" :active="Object.keys(player.actions).length != 0" @onClick="content = 'actions', contentTitle = 'AKCIÓK'"/>
            </div>
            <div class="buttonPanel">
                {{Object.keys(player.effects).length}}<br>
                <Button buttonText="HATÁSOK" width="150px" :confirm="false" :active="Object.keys(player.effects).length != 0" @onClick="content = 'effects', contentTitle = 'HATÁSOK'"/>
            </div>
            <div class="buttonPanel">
                {{Object.keys(player.collections).length}}<br>
                <Button buttonText="HALMOZOTT" width="150px" :confirm="false" :active="Object.keys(player.collections).length != 0" @onClick="content = 'collections', contentTitle = 'KÁRTYÁN HALMOZOTT'"/>
            </div>
            <div class="playerDataContent">
                <ChoseCards v-if="phase == 'CHOSE_CARDS'"/>
                <ChoseCorporation v-if="phase == 'CHOSE_CORP'"/>
                <Research v-if="phase == 'FIRST_RESEARCH'"/>
                <Content :content="content" :title="contentTitle"/>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import { UtilFunctions } from "@/utils.js"
import Button from "@/components/utils/Button"
import ChoseCards from "@/components/playerData/ChoseCards"
import ChoseCorporation from "@/components/playerData/ChoseCorporation"
import Research from "@/components/playerData/Research"
import Content from "@/components/playerData/Content"
export default {
    components: {
        Button,
        ChoseCards,
        ChoseCorporation,
        Research,
        Content
    },
    data() {
        return {
            playerData: "",
            content: "",
            contentTitle: "",
        }
    },
    computed: {
        ...mapGetters({
            player: "players/getPlayerData",
            phase: "gameData/getPhase"
        }),
        playerColor() {
            return UtilFunctions.getColor(localStorage.getItem("playerData"))
        },
        guestPlayer() {
            return this.player.name == localStorage.getItem("playerName");
        },
        corporationName() {
            return UtilFunctions.getCorporationName(this.player.corporation);
        },
        usedActionNumber() {
            var i = 0;
            for(const action in this.player.actions) {
                if(!action.done) {
                    i++;
                }
            }
            return i;
        },
        tags() {
            let building = {"name": "building", "num": 0}
            let space = {"name": "space", "num": 0}
            let science = {"name": "science", "num": 0}
            let plant = {"name": "plant", "num": 0}
            let microbe = {"name": "microbe", "num": 0}
            let animal = {"name": "animal", "num": 0}
            let energy = {"name": "energy", "num": 0}
            let jovian = {"name": "jovian", "num": 0}
            let earth = {"name": "earth", "num": 0}
            let city = {"name": "city", "num": 0}
            let event = {"name": "event", "num": 0}
            let venus = {"name": "venus", "num": 0}
            let wild = {"name": "wild", "num": 0}
            for(var i = 0; i < this.player.tags.length; i++) {
                switch(this.player.tags[i]) {
                    case "BUILDING":
                        building.num++
                        break;
                    case "SPACE":
                        space.num++
                        break;
                    case "SCIENCE":
                        science.num++
                        break;
                    case "PLANT":
                        plant.num++
                        break;
                    case "MICROBE":
                        microbe.num++
                        break;
                    case "ANIMAL":
                        animal.num++
                        break;
                    case "ENERGY":
                        energy.num++
                        break;
                    case "JOVIAN":
                        jovian.num++
                        break;
                    case "EARTH":
                        earth.num++
                        break;
                    case "CITY":
                        city.num++
                        break;
                    case "EVENT":
                        event.num++
                        break;
                    case "VENUS":
                        venus.num++
                        break;
                    case "WILD":
                        wild.num++
                        break;
                }
            }
            let result = [building, space, science, plant, microbe, animal, energy, jovian, earth, city, event, venus, wild];
            return result;
        },
    },
}
</script>

<style scoped>
.playerDataContainer {
    color: white;
}

.playerDataHeader {
    display: flex;
    box-sizing: border-box;
    height: 100px;
    width: 100%;
    align-items: center;
    justify-content: center;
}

.playerDataContent {
    margin-bottom: 20px;
}

.headerBox {
    display: flex;
    padding: 0 20px;
    height: 100%;
    align-items: center;
}

.resourceBox {
    text-align: left;
    height: 100px;
    width: 75px;
    box-sizing: border-box;
    border: 3px solid rgba(63, 63, 63, 0.7);
    display: inline-block;
    padding: 3px;
    position: relative;
}

.prodImg {
    width: 100%;
    height: 30px;
}

.resourceIcon {
    height: 35px;
    margin-top: 12px;
}

.prodNum {
    position: absolute;
    top: 6px;
    left: 17px;
    width: 35px;
    text-align: center;
}

.resNum {
    position: absolute;
    top: 55px;
    width: 35px;
    right: 0px;
    text-align: center;
}

.buttonPanel {
    padding-top: 20px;
    display: inline-block;
}
</style>