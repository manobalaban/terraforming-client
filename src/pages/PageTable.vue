<template>
  <div id="boardContainer" style="color: white">
    <Header/>
    <Table/>
  </div>
</template>

<script>
import Header from "@/components/tableComponents/Header"
import Table from "@/components/tableComponents/Table"
import { mapGetters } from "vuex";
export default {
  components: {
    Header,
    Table
  },
  computed: {
    ...mapGetters({
      phase: "gameData/getPhase"
    }),
  }
};
</script>

<style scoped>

</style>