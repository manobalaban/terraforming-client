<template>
    <div style="width: 750px; display: inline-block">
        {{title}}
        <div v-if="content != ''">
            <div v-for="card in toDisplay" :key="card+'card'" class="cardContainer">
                {{card}}
                <img :src="require('@/assets/' + (card.charAt(0) == 'c' ? 'corporations' : 'cards') + '/' + card + '.png')" class="verticalCard">
            </div>
        </div>
    </div>  
</template>

<script>
import { mapGetters } from "vuex";
export default {
    props: {
        content: String,
        title: {
            required: true,
            type: String
        }
    },
    computed: {
        ...mapGetters({
            player: "players/getPlayerData",
            phase: "gameData/getPhase"
        }),
        toDisplay() {
            let result;
            switch (this.content) {
                case "cards":
                    result =  this.player.cardsInHand;
                    break;
                case "played":
                    result = this.player.playedCards;
                    break;
                case "actions":
                    result = Object.keys(this.player.actions);
                    break;
                case "effects":
                    result = Object.keys(this.player.effects);
                    break;
                case "collections":
                    result = Object.keys(this.player.collections);
                    break;
            }
            return result;
        }
    }
}
</script>

<style scoped>
.cardContainer {
   display: inline-block;
}

.verticalCard {
  height: 200px;
  display: block;
}
</style>