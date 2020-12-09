<template>
  <div class="choseCardsContainer">
    <div v-if="firstCards">
      <div v-for="i in firstTen" :key="i+'card'" class="cardContainer">
        {{i}}
        <img :src="require('@/assets/cards/' + i + '.png')" class="lobbyCard">
      </div>
    </div>
    <div v-else>
      <div v-for="i in secondTen" :key="i+'card'" class="cardContainer">
        {{i}}
        <img :src="require('@/assets/cards/' + i + '.png')" class="lobbyCard">
      </div>
    </div>
    <div class="buttonsPanel">
      <Button v-if="!player.ready" @onClick="firstCards = !firstCards" buttonText="MÁSIK 10" width="170px" :confirm="false"/>
      <Button v-if="!player.ready" @onClick="acceptCards()" buttonText="KIVÁLASZT" width="170px"/>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Button from "@/components/utils/Button";
import axios from "axios";
export default {
  components: {
    Button
  },
  data() {
    return {
      firstCards: true,
    }
  },
  computed: {
    ...mapGetters({
      player: "players/getPlayerData",
    }),
    firstTen() {
      var cards = [];
      for(var i=0; i<10; i++) {
        cards.push(this.player.drawnCards[i])
      }
      return cards
    },
    secondTen() {
      var cards = [];
      for(var i=10; i<20; i++) {
        cards.push(this.player.drawnCards[i])
      }
      return cards
    }
  },
  methods: {
    acceptCards() {
      for(var j=0; j<20; j++) {
        if(this.firstCards && j<10) {
          this.player.cardsToBuy.push(this.player.drawnCards[j])
        } else if(!this.firstCards && j>9) {
          this.player.cardsToBuy.push(this.player.drawnCards[j])
        }
      }
      this.player.ready = true;
      axios.put(this.$store.state.SERVER_URL + "/api/choseFirstTenCards" , JSON.parse(JSON.stringify(this.player)), {
          headers: {
              'content-type': 'application/json'
          }
      })
    }
  }
};
</script>

<style scoped>
.cardContainer {
  display: inline-block;
}

.lobbyCard {
  height: 200px;
  display: block;
}

.choseCardsContainer {
  width: 750px;
  display: inline-block;
  margin-top: 70px;
  padding-left: 20px;
}

.buttonsPanel {
  margin-top: 20px;
}
</style>