<template>
    <div class="adminContainer">
        <button v-for="player in players" :key="player.name" @click="chosePlayer(player.name)">{{player.name}}</button>
        <div>
            <button @click="accept()">MENTÉS</button>
        </div>
        <div v-if="player && player.name != 'admin'">
            name: {{player.name}}<br>
            chosed: <input type="checkbox" :checked="player.chosed" @input="inputValue('chosed', $event, 'checkbox')"/><br>
            ready: <input type="checkbox" :checked="player.ready" @input="inputValue('ready', $event, 'checkbox')"/><br>
            order: <input type="number" :value="player.order" @input="inputValue('order', $event, 'number')"/><br>
            active: <input type="checkbox" :checked="player.active" @input="inputValue('active', $event, 'checkbox')"/><br>
            firstActionDone: <input type="checkbox" :checked="player.firstActionDone" @input="inputValue('firstActionDone', $event, 'checkbox')"/><br>
            tr: <input type="number" :value="player.tr" @input="inputValue('tr', $event, 'number')"/><br>
            CREDIT: <input type="number" :value="player.resources['CREDIT']" @input="inputValue('CREDIT', $event, 'res')"/><br>
            CREDIT_PROD: <input type="number" :value="player.resources['CREDIT_PROD']" @input="inputValue('CREDIT_PROD', $event, 'res')"/><br>
            STEEL: <input type="number" :value="player.resources['STEEL']" @input="inputValue('STEEL', $event, 'res')"/><br>
            STEEL_PROD: <input type="number" :value="player.resources['STEEL_PROD']" @input="inputValue('STEEL_PROD', $event, 'res')"/><br>
            TITAN: <input type="number" :value="player.resources['TITAN']" @input="inputValue('TITAN', $event, 'res')"/><br>
            TITAN_PROD: <input type="number" :value="player.resources['TITAN_PROD']" @input="inputValue('TITAN_PROD', $event, 'res')"/><br>
            PLANT: <input type="number" :value="player.resources['PLANT']" @input="inputValue('PLANT', $event, 'res')"/><br>
            PLANT_PROD: <input type="number" :value="player.resources['PLANT_PROD']" @input="inputValue('PLANT_PROD', $event, 'res')"/><br>
            ENERGY: <input type="number" :value="player.resources['ENERGY']" @input="inputValue('ENERGY', $event, 'res')"/><br>
            ENERGY_PROD: <input type="number" :value="player.resources['ENERGY_PROD']" @input="inputValue('ENERGY_PROD', $event, 'res')"/><br>
            HEAT: <input type="number" :value="player.resources['HEAT']" @input="inputValue('HEAT', $event, 'res')"/><br>
            HEAT_PROD: <input type="number" :value="player.resources['HEAT_PROD']" @input="inputValue('HEAT_PROD', $event, 'res')"/><br>
        </div>
        <div v-else>
            actualPhase: <input type="text" :value="gameData.actualPhase" @input="inputGameData('actualPhase', $event, 'text')"/>
            <div>ENTER, CHOSE_CARDS, CHOSE_CORP, FIRST_RESEARCH, ACTION, PRODUCTION, TURMOIL, RESEARCH, END</div>
            oceans: <input type="number" :value="gameData.oceans" @input="inputValue('oceans', $event, 'number')"/><br>
            temperature: <input type="number" :value="gameData.temperature" @input="inputValue('temperature', $event, 'number')"/><br>
            oxygen: <input type="number" :value="gameData.oxygen" @input="inputValue('oxygen', $event, 'number')"/><br>
            venus: <input type="number" :value="gameData.venus" @input="inputValue('venus', $event, 'number')"/><br>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import axios from "axios"
export default {
    data() {
        return {
            playerName: ""
        }
    },
    computed: {
        ...mapGetters({
            players: "players/getPlayers",
            gameData: "gameData/getGameData"
        }),
        player() {
            return (this.players.filter(player => player.name == this.playerName)[0])
        }
    },
    methods: {
        chosePlayer(name) {
            this.playerName = name;
        },
        inputValue(field, event, type) {
            if(type == "text") {
                this.player[field] = event.target.value;
            }
            if(type == "checkbox") {
                this.player[field] = event.target.checked;
            }
            if(type == "number") {
                this.player[field] = parseInt(event.target.value)
            }
            if(type == "res") {
                this.player.resources[field] = parseInt(event.target.value)
            }
        },
        inputGameData(field, event, type) {
            if(type == "text") {
                this.gameData[field] = event.target.value;
            }
            if(type == "checkbox") {
                this.gameData[field] = event.target.checked;
            }
            if(type == "number") {
                this.gameData[field] = parseInt(event.target.value)
            }
        },
        accept() {
            axios.put(this.$store.state.SERVER_URL + "/api/updatePlayer", JSON.parse(JSON.stringify(this.player)), {
                headers: {
                    'content-type': 'application/json'
                }
            })
        }
    }
}
</script>

<style scoped>
.adminContainer {
    color: white;
}
* {
    margin: 10px;
}
</style>