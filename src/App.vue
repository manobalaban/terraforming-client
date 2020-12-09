<template>
  <div id="app">
   <router-view />
  </div>
</template>

<script>
  export default {
    created() {
      this.$store.dispatch("players/fetchPlayers");
      this.$store.dispatch("gameData/fetchGameData");
      let urlEndPoint = this.$store.state.SERVER_URL;
      let playerEventSource = new EventSource(urlEndPoint + "/api/subscribePlayers");
      playerEventSource.addEventListener("updateAllPlayer", () => {
        this.$store.dispatch("players/fetchPlayers");
      });
      playerEventSource.addEventListener("updateGameData", () => {
        this.$store.dispatch("gameData/fetchGameData");
      });
    }
  }
</script>

<style>
body {
  margin: 0;
  background-image: url(assets/basicImages/background_space.jpg);
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-color: #464646;
}

#app {
  text-align: center;
}

@font-face {
  font-family: "orbitron-black";
  src: local("orbitron-black"), 
    url(./fonts/Orbitron-Black.ttf) format("truetype");
}
@font-face {
  font-family: "orbitron-bold";
  src: local("orbitron-bold"), 
    url(./fonts/Orbitron-Bold.ttf) format("truetype");
}/* medium */
@font-face {
  font-family: "orbitron-extraBold";
  src: local("orbitron-extraBold"), 
    url(./fonts/Orbitron-ExtraBold.ttf) format("truetype");
}/* bold */
@font-face {
  font-family: "orbitron-medium";
  src: local("orbitron-medium"), 
    url(./fonts/Orbitron-Medium.ttf) format("truetype");
}
@font-face {
  font-family: "orbitron-regular";
  src: local("orbitron-regular"), 
    url(./fonts/Orbitron-Regular.ttf) format("truetype");
} /* regular */
@font-face {
  font-family: "orbitron-semiBold";
  src: local("orbitron-semiBold"), 
    url(./fonts/Orbitron-SemiBold.ttf) format("truetype");
}
* {
  font-family: orbitron-bold;
}
</style>