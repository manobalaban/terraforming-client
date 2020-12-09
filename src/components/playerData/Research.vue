<template>
    <div class="corpContainer">
        <Button @onClick="chose()" v-if="!player.ready" buttonText="VÁLASZT" width="120px" :active="player.active && !player.ready" :confirm="false"/>
        <div style="width: 750px; display: inline-block">
            <div v-for="card in player.drawnCards" :key="card+'card'" class="cardContainer">
                {{card}}
                <img :src="require('@/assets/cards/' + card + '.png')" class="verticalCard" :style="'border: 5px solid ' + (chosedCards.includes(card) ? 'orange' : 'grey')" @click="choseCard(card)">
            </div>
        </div>
        <Modal v-if="paying" :payOption="payOption" @onAccept="accept()" @onCancel="paying = false"/>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import axios from "axios"
import Button from "@/components/utils/Button";
import Modal from "@/components/utils/Modal";
export default {
    data() {
        return {
            chosedCards: [],
            paying: false,
            payOption: {},
        }
    },
    components: {
        Button,
        Modal
    },
    computed: {
        ...mapGetters({
            player: "players/getPlayerData",
        }),
    },
    methods: {
        choseCard(name) {
            if(this.chosedCards.includes(name)) {
                let cardIndex
                for(var i = 0; i < this.chosedCards.length; i++) {
                    if(this.chosedCards[i] == name) {
                        cardIndex = i;
                    }
                }
                this.chosedCards.splice(cardIndex, 1)
            } else {
                this.chosedCards.push(name)
            }
        },
        chose() {
            this.player.cardsToBuy = this.chosedCards
            this.paying = true;
            axios.put(this.$store.state.SERVER_URL + "/api/research" , JSON.parse(JSON.stringify(this.player)), {
                headers: {
                    'content-type': 'application/json'
                }
            }).then((res) => {
                this.payOption = res.data;
            })
        },
        accept() {
            axios.put(this.$store.state.SERVER_URL + "/api/research" , JSON.parse(JSON.stringify(this.player)), {
                headers: {
                    'content-type': 'application/json'
                }
            })
            this.paying = false;
        }
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

.verticalCard {
  height: 200px;
  display: block;
}
</style>