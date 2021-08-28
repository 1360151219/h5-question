<template>
  <div>
    <div class="bg">
      <v-img
        src="../assets/leaves1.svg"
        lazy-src="../assets/leaves1.svg"
        class="zindex-10"
      ></v-img>
      <v-img
        src="../assets/leaves2.svg"
        lazy-src="../assets/leaves2.svg"
        class="leaves zindex-10"
      ></v-img>
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
        <div v-show="!isChoose">
          <v-img
            src="http://strk2.cn:3000/img/start.8ee8bdba.svg"
            lazy-src="../assets/start.svg"
            contain
            class="zindex-10 start"
          ></v-img>
          <v-img
            src="../assets/start_btn.svg"
            lazy-src="../assets/start_btn.svg"
            contain
            max-width="23vh"
            class="start_btn"
            @click="isChoose = true"
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
    <div
      style="font-size: 36px; margin-top: 10px; color: #fff;font-family='Dotted';"
      v-show="!isChoose"
    >
      进入
    </div>
    <div
      style="font-size: 36px; margin-top: 10px; color: #fff;font-family='Dotted';"
      v-show="isChoose"
    >
      是否新生
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import Stairs from "../components/stairs.vue";
import Problem from "../components/problems.vue";
@Component({
  components: {
    Stairs,
    Problem,
  },
})
export default class Home extends Vue {
  isChoose = false;
  handleClick(b: boolean) {
    this.$store.commit("newOrOld", b);
    this.$router.push("/one");
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
@keyframes a {
  0% {
    transform: scale(1.4);
  }
  100% {
    transform: scale(1);
  }
}
.leaves {
  top: -2vh !important;
  height: 110% !important;
  pointer-events: none;
  animation: a 1.4s 2s;
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
  animation: slide-left-in 3s 2s;
  pointer-events: none;
  top: 12vh;
}
.leaves_left_front {
  animation: slide-left-in 3s 2s;
  pointer-events: none;
  top: 31vh;
}
.leaves_right_back {
  animation: slide-right-in 3s 2s;
  pointer-events: none;
  top: 6vh;
  left: 7vh;
}
.leaves_right_front {
  animation: slide-right-in 3s 2s;
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
