<template>
  <div class="headerContainer">
    <PlayerDataBox v-for="player in players" :key="player.name" :player="player" @onClick="toPlayer(player)"/>
  </div>
</template>

<script>
import { mapState } from "vuex";
import PlayerDataBox from "@/components/tableComponents/PlayerDataBox";
export default {
  components: {
    PlayerDataBox
  },
  computed: {
    ...mapState({
      players: state => {
        return state.players.items.filter(player => (player.chosed == true && player.name != "admin"));
      }
    })
  },
  methods: {
    toPlayer(player) {
      localStorage.setItem("playerData", player.name)
      this.$router.push('/playerData')
    }
  }
};
</script>

<style scoped>
.headerContainer {
  text-align: left;
  width: 3840px;
  height: 150px;
}
</style>