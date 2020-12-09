<template>
  <div :style="'background: ' + playerColor + '; border: 3px solid ' + borderColor" class="playerDataBoxContainer" @click="$emit('onClick')">
    <div class="titleRow">
      <div class="userName">{{player.name}}</div>
      <div class="trBox">TR: <i>{{ player.tr }}</i></div>
    </div>
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
</template>

<script>
import { UtilFunctions } from "@/utils.js"
export default {
  props: {
    player: {
      type: Object,
      required: true
    }
  },
  computed: {
    playerColor() {
      return  UtilFunctions.getColor(this.player.name);
    },
    borderColor() {
      return this.player.active ? "white" : "black";
    },
  }
};
</script>

<style scoped>
.playerDataBoxContainer {
  display: inline-block;
  width: 450px;
  height: 150px;
  color: white;
  font-size: 20px;
  box-sizing: border-box;
  border: 3px solid black;
}

.titleRow {
  height: 44px;
  width: 100%;
  padding-left: 5px;
}

.userName {
  padding-top: 3px;
  font-size: 30px;
  width: 150px;
  display: inline-block;
}

.trBox {
  display: inline-block;
}

.resourceBox {
  height: 100px;
  width: 74px;
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
</style>