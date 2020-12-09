<template>
  <div class="buttonContainer" :style="'width: ' + width">
    <img
      :src="
        require('../../assets/basicImages/' +
          setActiveImg +
          'active_button.png')
      "
      class="buttonImage"
      @click="onClick()"
    />
    <div class="buttonText" @click="onClick()">{{ buttonText }}</div>
    <div v-if="sure" id="sureBox">
      <div class="sureMessage">
        {{ confirmText }}
        <br />
        <div
          class="buttonContainer"
          style="margin-top: 40px; margin-right: 40px;"
        >
          <img
            src="../../assets/basicImages/active_button.png"
            class="buttonImage"
            @click="onClick()"
          />
          <div class="buttonText" @click="onClick()">BIZTOS</div>
        </div>
        <div class="buttonContainer">
          <img
            src="../../assets/basicImages/active_button.png"
            class="buttonImage"
            @click="setSure()"
          />
          <div class="buttonText" @click="setSure()">NEM</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sure: false
    };
  },
  props: {
    buttonText: String,
    width: String,
    active: {
      type: Boolean,
      default: true
    },
    confirm: {
      type: Boolean,
      default: true
    },
    confirmText: {
      type: String,
      default: "BIZTOS?"
    }
  },
  methods: {
    onClick() {
      if ((this.active && !this.confirm) || this.sure == true) {
        this.$emit("onClick");
        this.sure = false;
      } else if (this.active && this.confirm && this.sure == false) {
        this.sure = true;
      }
    },
    setSure() {
      this.sure = false;
    }
  },
  computed: {
    setActiveImg() {
      return this.active ? "" : "in";
    }
  }
};
</script>

<style scoped>
.buttonContainer {
  display: inline-block;
  width: 80px;
  height: 40px;
  position: relative;
  margin: 0 10px;
}

.buttonImage {
  width: inherit;
  height: inherit;
  cursor: pointer;
}

.buttonText {
  position: absolute;
  top: 49%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: rgb(14, 95, 61);
  cursor: pointer;
  pointer-events: none;
  font-size: 16px;
}

.buttonImage:active,
.buttonImage:active ~ .buttonText {
  opacity: 50%;
}

#sureBox {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 10000;
}

.sureMessage {
  text-align: center;
  position: fixed;
  height: 120px;
  width: 300px;
  background: rgba(255, 255, 255, 0.5);
  top: calc(50% - 80px);
  left: calc(50% - 170px);
  padding: 20px;
  border-radius: 30px;
}
</style>