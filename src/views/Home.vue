<template>
  <div>
    <div class="bg">
      <v-img :src="leave1" :lazy-src="leave1" class="zindex-10"></v-img>
      <v-img :src="leave2" :lazy-src="leave2" class="leaves"></v-img>
      <v-img
        src="../assets/light2.svg"
        lazy-src="../assets/light2.svg"
        class="zindex-100 light_2"
      ></v-img>
      <!-- 需要过渡的叶子  左边-->
      <v-img
        src="../assets/cover/left_back.svg"
        lazy-src="../assets/cover/left_back.svg"
        class="leaves_left_back zindex-1"
        max-width="34vh"
        contain
        key="back"
      ></v-img>

      <v-img
        src="../assets/cover/left_front.svg"
        lazy-src="../assets/cover/left_front.svg"
        class="leaves_left_front zindex-10"
        max-width="44vh"
        contain
        key="front"
      ></v-img>

      <!-- 右边 -->
      <v-img
        src="../assets/cover/right_back.svg"
        lazy-src="../assets/cover/right_back.svg"
        class="leaves_right_back"
        max-width="46vh"
        contain
      ></v-img>
      <v-img
        src="../assets/cover/right_front.svg"
        lazy-src="../assets/cover/right_front.svg"
        class="leaves_right_front zindex-10"
        max-width="44vh"
        contain
      ></v-img>

      <v-img
        src="../assets/flsorescence.svg"
        lazy-src="../assets/flsorescence.svg"
        class="zindex-100 light_3"
      ></v-img>
      <v-img
        src="../assets/flsorescence_change.svg"
        lazy-src="../assets/flsorescence_change.svg"
        class="zindex-100 light_3_reverse"
        contain
      >
      </v-img>
      <!-- 开始 -->
      <transition name="opacity">
        <div v-show="!isChoose && !isGender">
          <v-img
            src="../assets/start.svg"
            lazy-src="../assets/start.svg"
            contain
            class="zindex-10 start"
          ></v-img>
          <v-img
            src="../assets/start_btn.svg"
            lazy-src="../assets/start_btn.svg"
            contain
            max-width="16vh"
            class="start_btn"
            @click="isChoose = true"
          ></v-img></div
      ></transition>
      <!-- 选择性别 -->
      <transition name="opacity">
        <div v-show="isGender">
          <v-img
            src="../assets/female.png"
            class="options option_1"
            max-width="30vh"
            max-height="30vh"
            @click="chooseGender(false)"
            contain
          ></v-img>
          <v-img
            src="../assets/male.png"
            class="options option_2"
            max-width="30vh"
            max-height="30vh"
            @click="chooseGender(true)"
            contain
          ></v-img></div
      ></transition>
      <!-- 选择新老生 -->
      <transition name="opacity">
        <div v-show="isChoose">
          <v-img
            src="../assets/no.svg"
            lazy-src="../assets/no.svg"
            class="options option_1"
            max-width="30vh"
            max-height="30vh"
            @click="handleClick(false)"
            contain
          ></v-img>
          <v-img
            src="../assets/yes.svg"
            lazy-src="../assets/yes.svg"
            class="options option_2"
            max-width="30vh"
            max-height="30vh"
            @click="handleClick(true)"
            contain
          ></v-img></div
      ></transition>
    </div>
    <transition name="opacity">
      <div v-show="isChoose">
        <v-img
          src="https://static2.pivotstudio.cn/2021-h5-questions/problems/isFreshman.png"
          style="height: 5vh; top: auto; bottom: -6vh"
        ></v-img>
      </div>
    </transition>
    <transition name="opacity">
      <div v-show="isGender">
        <v-img
          src="https://static2.pivotstudio.cn/2021-h5-questions/problems/genderChoose.png"
          style="height: 5vh; top: auto; bottom: -6vh"
        ></v-img>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import Stairs from "../components/stairs.vue";
import Problem from "../components/problems.vue";
import { Prop } from "vue-property-decorator";
import { recordRemainTime, ParseQuery } from "@/utils";
@Component({
  components: {
    Stairs,
    Problem,
  },
})
export default class Home extends Vue {
  @Prop()
  leave1!: string;
  @Prop()
  leave2!: string;
  isChoose = false;
  handleClick(b: boolean) {
    this.$emit("newOrOld", b);
    this.isGender = true;
    this.isChoose = false;
  }
  isGender = false;
  chooseGender(b: boolean) {
    this.$emit("genderChoose", b);
    this.$router.push("/one");
  }
  enterTime = 0;
  leaveTime = 0;
  created() {
    this.enterTime = new Date().getTime();
    window.addEventListener("beforeunload", this.leaveHandler);
  }
  beforeDestroy() {
    /* 停留时间 */
    this.leaveTime = new Date().getTime();
    const remain = (this.leaveTime - this.enterTime) / 1000;
    recordRemainTime({
      id: 0,
      time: remain,
    });
  }

  async leaveHandler() {
    this.leaveTime = new Date().getTime();
    const remain = (this.leaveTime - this.enterTime) / 1000;
    const data = { id: 0, time: remain };
    window.navigator.sendBeacon("/api" + ParseQuery(data));
  }
  destroyed() {
    window.removeEventListener("beforeunload", this.leaveHandler);
  }
}
</script>
<style lang="scss" scoped>
.bg {
  background-image: url(../assets/cover/bg.svg);
  background-position-y: -10vh;
  background-size: cover;
  position: relative;
  width: 100%;
  height: 82vh;
  box-shadow: inset 2px 2px 5px #333, inset -2px -2px 5px #333;
  overflow: hidden;
}
.v-image {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}
@keyframes slide-Y {
  0% {
    transform: translateY(0px) translateX(-50%) scale(1.4);
  }
  100% {
    transform: translateY(20px) translateX(-50%) scale(1.4);
  }
}
.start {
  top: 2vh;
  left: 50%;
  pointer-events: none;
  animation: slide-Y 1s infinite alternate;
}
.start_btn {
  top: 25vh;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
}
.leaves {
  top: -2vh !important;
  height: 110% !important;
  pointer-events: none;
}
.light_1 {
  z-index: 100;
  top: -8vh !important;
  left: -8vw !important;
  transform: scale(0.4);
  pointer-events: none;
}
.light_2 {
  z-index: 100;
  top: 16vh !important;
  left: 3vw !important;
  transform: scale(1);
  pointer-events: none;
}
@keyframes flash {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
.light_3 {
  z-index: 100;
  top: 0vh !important;
  left: -4vw !important;
  transform: scale(1);
  pointer-events: none;
  animation: flash 1000ms 2s infinite alternate;
}
.light_3_reverse {
  z-index: 100;
  top: -18vh !important;
  left: -4vw !important;
  transform: scale(1.5);
  pointer-events: none;
  animation: flash 1000ms 2s infinite alternate-reverse;
}
/* 叶子过渡 */
@keyframes slide-left-in {
  0% {
    transform: translateX(-300px);
  }
  100% {
    transform: translateX(0px);
  }
}
@keyframes slide-right-in {
  0% {
    transform: translateX(300px);
  }
  100% {
    transform: translateX(0px);
  }
}
.leaves_left_back {
  animation: slide-left-in 3s 4s;
  pointer-events: none;
  top: 12vh;
}
.leaves_left_front {
  animation: slide-left-in 3s 4s;
  pointer-events: none;
  top: 31vh;
}
.leaves_right_back {
  animation: slide-right-in 3s 4s;
  pointer-events: none;
  top: 6vh;
  left: 7vh;
}
.leaves_right_front {
  animation: slide-right-in 3s 4s;
  pointer-events: none;
  top: 33vh;
  left: auto;
  right: -2vh;
}
.opacity-leave-active {
  opacity: 0;
}
.opacity-enter-active {
  opacity: 0;
}
.option_1 {
  z-index: 100;
  top: 10%;
  position: absolute;
  left: 0vw;
  animation: upanddown_1 5000ms infinite alternate;
}
.option_2 {
  z-index: 100;
  top: 50%;
  position: absolute;
  left: 40vw;
  animation: upanddown_1 5000ms infinite alternate;
}
@keyframes upanddown_1 {
  0% {
    transform: scale(0.9) translateY(-60px);
  }
  50% {
    transform: scale(0.9) translateY(0px);
  }
  100% {
    transform: scale(0.9) translateY(-60px);
  }
}
</style>
