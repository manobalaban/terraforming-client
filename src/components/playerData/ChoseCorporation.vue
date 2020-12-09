<template>
    <div>
        <div class="corpContainer">
            <Button @onClick="accept()" buttonText="VÁLASZT" width="120px" :active="player.active && !player.ready"/>
            <div v-for="corp in player.corporationsToChose" :key="corp+'corp'" class="cardContainer">
                {{corp}}
                <img :src="require('@/assets/corporations/' + corp + '.png')" :style="'border: 5px solid ' + (corp == chosedCorp ? 'orange' : 'grey')" class="horizontalCard" @click="chosedCorp = corp">
            </div>
        </div>
        <div style="width: 750px; display: inline-block">
            <div v-for="card in player.drawnCards" :key="card+'card'" class="cardContainer">
                {{card}}
                <img :src="require('@/assets/cards/' + card + '.png')" class="verticalCard">
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import axios from "axios";
import Button from "@/components/utils/Button"
export default {
    components: {
        Button,
    },
    data() {
        return {
            chosedCorp: 0
        }
    },
    computed: {
        ...mapGetters({
            player: "players/getPlayerData",
        }),
    },
    methods: {
        accept() {
            this.player.ready = true
            this.player.corporation = this.chosedCorp
            axios.put(this.$store.state.SERVER_URL + "/api/choseCorporation" , JSON.parse(JSON.stringify(this.player)), {
                headers: {
                    'content-type': 'application/json'
                }
            })
        }
    },
    created() {
        this.chosedCorp = this.player.corporationsToChose[0]
    }
}
</script>

<style scoped>
.corpContainer {
    display: flex;
    justify-content: center;
    align-items: center;
}

.cardContainer {
   display: inline-block;
}

.horizontalCard {
    width: 200px;
    display: block;
}

.verticalCard {
  height: 200px;
  display: block;
}

</style>