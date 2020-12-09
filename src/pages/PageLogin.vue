<template>
  <div class="loginPage">
    <div class="loginContainer">
      <div class="buttonsPanel">
        <div class="enterBox">
          <div>{{ playerName }}</div>
          <input type="password" v-model="password" class="adminPassword" v-if="playerName != '' && playerName == 'admin'"/>
          <br />
          <Button v-if="playerName != ''" @onClick="checkAdmin()" buttonText="BELÉPÉS" width="120px" :confirm="false"/>
        </div>
      </div>
      <div class="playersPanel">
        <div v-for="player in players" :key="player.name" class="playerBox">
          {{ player.name }}
          <img :src="getPlayerIcon(player.name)" class="playerImage" @click="chooseColor(player.name)"/>
          {{ player.chosed ? 'kész' : ''}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Button from "@/components/utils/Button";
import axios from "axios"
import { UtilFunctions } from "@/utils.js"
export default {
  components: {
    Button,
  },
  data() {
    return {
      playerName: "",
      password: "",
    };
  },
  methods: {
    getPlayerIcon(playerName) {
      return UtilFunctions.getPlayerIcon(playerName)
    },
    chooseColor(name) {
      this.playerName = name;
    },
    checkAdmin() {
      if (this.playerName != "admin" || (this.playerName == "admin" && this.password == "balaban")) {
        localStorage.setItem("playerName", this.playerName)
        localStorage.setItem("playerData", this.playerName)
        axios(this.$store.state.SERVER_URL + "/api/players?name=" + this.playerName,  {
          headers: {
            'content-type': 'application/json'
          }
        });
        if(this.playerName == "admin") {
          this.$router.push('/table')
        } else {
          this.$router.push('/playerData')
        }
      }
    },
  },
  computed: {
    ...mapState({
      players: state => state.players.items,
      phase: state => state.gameData.items.actualPhase
    }),
  }
};
</script>

<style scoped>
.loginPage {
  display: inline-block;
  width: 1000px;
  height: 1000px;
  background-image: url(../assets/basicImages/mars.png);
}

.loginContainer {
  height: 100%;
  display: flex;
  align-items: center;
}

.buttonsPanel {
  display: inline-block;
  width: 500px;
  text-align: right;
}

.adminPassword {
  margin-bottom: 20px;
  font-size: 20px;
  background: rgba(255, 255, 255, 0.5);
  border: none;
  outline: none;
}

.playersPanel {
  display: inline-block;
  width: 500px;
  text-align: left;
  padding-left: 100px;
}

.enterBox {
  display: inline-block;
  text-align: center;
  padding-right: 10px;
  font-size: 30px;
}

.playerBox {
  font-size: 24px;
  margin: 20px;
  padding: 10px;
}

.playerImage {
  height: 50px;
  margin-bottom: -18px;
}

</style>