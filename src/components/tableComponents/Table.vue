<template>
  <div class="marsContainer">
    <img src="@/assets/basicImages/bb.png" class="marsBoard" />
    <Oxygen/>
    <Temperature/>
    <Venus/>
    <Milestones/>
    <Awards/>
    <Colonies/>
  </div>
</template>

<script>
import Oxygen from "./Oxygen"
import Temperature from "./Temperature"
import Venus from "./Venus"
import Milestones from "./Milestones"
import Awards from "./Awards"
import Colonies from "./Colonies"
export default {
  components: {
    Oxygen,
    Temperature,
    Venus,
    Milestones,
    Awards,
    Colonies
  }
}
</script>

<style scoped>
.marsContainer {
  color: white;
}

.marsBoard {
  width: 3840px;
}
</style>