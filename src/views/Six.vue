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
        class="leaves"
      ></v-img>
      <v-img
        src="../assets/back_flower.svg"
        lazy-src="../assets/back_flower.svg"
        class="back_sunflower"
        contain
      ></v-img>
      <v-img
        src="../assets/front_flower.svg"
        lazy-src="../assets/front_flower.svg"
        class="boy"
        contain
      ></v-img>
      <v-img
        src="../assets/light2.svg"
        lazy-src="../assets/light2.svg"
        class="zindex-100 light_2"
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
      ></v-img>
      <!-- 题目 -->
      <template
        ><v-img
          :src="
            isNew
              ? 'http://www.strk2.cn:3000/problems/NEW6A.svg'
              : 'http://www.strk2.cn:3000/problems/6A.svg'
          "
          :lazy-src="
            isNew
              ? 'http://www.strk2.cn:3000/problems/NEW6A.svg'
              : 'http://www.strk2.cn:3000/problems/6A.svg'
          "
          class="options option_1"
          @click="clickToNext(4, 5, '/res')"
          max-width="30vh"
          max-height="30vh"
          contain
        ></v-img>
        <v-img
          :src="
            isNew
              ? 'http://www.strk2.cn:3000/problems/NEW6B.svg'
              : 'http://www.strk2.cn:3000/problems/6B.svg'
          "
          :lazy-src="
            isNew
              ? 'http://www.strk2.cn:3000/problems/NEW6B.svg'
              : 'http://www.strk2.cn:3000/problems/6B.svg'
          "
          class="options option_2"
          @click="clickToNext(0, 2, '/res')"
          max-width="23vh"
          max-height="23vh"
          contain
        ></v-img>
        <v-img
          :src="
            isNew
              ? 'http://www.strk2.cn:3000/problems/NEW6C.svg'
              : 'http://www.strk2.cn:3000/problems/6C.svg'
          "
          :lazy-src="
            isNew
              ? 'http://www.strk2.cn:3000/problems/NEW6C.svg'
              : 'http://www.strk2.cn:3000/problems/6C.svg'
          "
          class="options option_3"
          @click="clickToNext(2, 0, '/res')"
          max-width="23vh"
          max-height="23vh"
          contain
        ></v-img>
        <v-img
          :src="
            isNew
              ? 'http://www.strk2.cn:3000/problems/NEW6D.svg'
              : 'http://www.strk2.cn:3000/problems/6D.svg'
          "
          :lazy-src="
            isNew
              ? 'http://www.strk2.cn:3000/problems/NEW6D.svg'
              : 'http://www.strk2.cn:3000/problems/6D.svg'
          "
          class="options option_4"
          @click="clickToNext(5, 1, '/res')"
          max-width="35vh"
          max-height="35vh"
          contain
        ></v-img>
      </template>
    </div>
    <Stairs />
    <Problem :num="6" :problem="pro" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";
import Stairs from "../components/stairs.vue";
import Problem from "../components/problems.vue";
@Component({
  components: {
    Stairs,
    Problem,
  },
})
export default class Six extends Vue {
  @Prop()
  clickToNext!: (c: number, p: number, url: string) => void;
  pro = "";
  isNew!: boolean;
  created() {
    this.isNew = this.$store.state.isNew;
    this.pro = this.isNew
      ? "开学要竞选班干部了，你最感兴趣的是哪个职位呢？ "
      : "在成为HUSTer的这段日子里，以下哪个瞬间让你最幸福呢？";
  }
}
</script>
<style lang="scss" scoped>
.bg {
  background-image: url(../assets/bg/flower.svg);
  background-position-y: -6vh;
  background-size: cover;
  position: relative;
  width: 100%;
  height: 70vh;
  box-shadow: inset 2px 2px 5px #333, inset -2px -2px 5px #333;
  overflow: hidden;
}
.back_sunflower {
  transform: scale(0.85);
  left: -9vw !important;
  bottom: -29vw !important;
  top: auto !important;
}
.v-image {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}
.leaves {
  height: 100% !important;
  animation: small 1.4s 500ms;
  pointer-events: none;
  transform: scale(1.1);
}
.birds {
  top: 43vh;
  left: 43vw;
}
.owl {
  top: 16vh;
  left: 79vw;
}
.boy {
  transform: scale(0.22);
  left: 20vw !important;
  bottom: -52vw !important;
  top: auto !important;
  z-index: 10;
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
  animation: flash 1000ms infinite alternate;
}
.light_3_reverse {
  z-index: 100;
  top: -18vh !important;
  left: -4vw !important;
  transform: scale(1.5);
  pointer-events: none;
  animation: flash 1000ms infinite alternate-reverse;
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
@keyframes upanddown_2 {
  0% {
    transform: translateY(-60px);
  }
  50% {
    transform: translateY(0px);
  }
  100% {
    transform: translateY(-60px);
  }
}
@keyframes upanddown_3 {
  0% {
    transform: scale(1.3) translateY(-60px);
  }
  50% {
    transform: scale(1.3) translateY(0px);
  }
  100% {
    transform: scale(1.3) translateY(-60px);
  }
}
@keyframes upanddown_4 {
  0% {
    transform: translateY(-60px);
  }
  50% {
    transform: translateY(0px);
  }
  100% {
    transform: translateY(-60px);
  }
}
.option_1 {
  position: absolute;
  top: 7vh;
  left: 32vw;
  animation: upanddown_1 5000ms infinite alternate;
}
.option_2 {
  position: absolute;
  top: 8vh;
  left: -5vw;
  animation: upanddown_2 3000ms infinite alternate;
}
.option_3 {
  position: absolute;
  top: 40vh;
  left: 50vw;
  animation: upanddown_3 4000ms 200ms infinite alternate;
}
.option_4 {
  position: absolute;
  top: 30vh;
  left: -10vw;
  animation: upanddown_4 8000ms infinite alternate;
}
</style>
