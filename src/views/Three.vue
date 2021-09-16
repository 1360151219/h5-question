<template>
  <div>
    <div class="bg">
      <v-img :src="leave1" :lazy-src="leave1" class="zindex-10"></v-img>
      <v-img :src="leave2" :lazy-src="leave2" class="leaves"></v-img>
      <v-img
        src="../assets/boy_laying.svg"
        lazy-src="../assets/boy_laying.svg"
        class="boy"
        contain
      ></v-img>
      <v-img
        src="../assets/light2.svg"
        lazy-src="../assets/light2.svg"
        class="zindex-100 light_2"
      ></v-img>
      <v-img
        src="../assets/birds.svg"
        lazy-src="../assets/birds.svg"
        class="zindex-100 birds"
        max-height="56"
        max-width="56"
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
      ></v-img>
      <!-- 题目 -->
      <template
        ><v-img
          :src="
            isNew
              ? 'https://static2.pivotstudio.cn/2021-h5-questions/problems/NEW3A.png'
              : 'https://static2.pivotstudio.cn/2021-h5-questions/problems/3A.png'
          "
          :lazy-src="
            isNew
              ? 'https://static2.pivotstudio.cn/2021-h5-questions/problems/NEW3A.png'
              : 'https://static2.pivotstudio.cn/2021-h5-questions/problems/3A.png'
          "
          class="options option_1"
          @click="clickToNext(1, 1, '/four', 1.42)"
          max-width="30vh"
          max-height="30vh"
          contain
        ></v-img>
        <v-img
          :src="
            isNew
              ? 'https://static2.pivotstudio.cn/2021-h5-questions/problems/NEW3B.png'
              : 'https://static2.pivotstudio.cn/2021-h5-questions/problems/3B.png'
          "
          :lazy-src="
            isNew
              ? 'https://static2.pivotstudio.cn/2021-h5-questions/problems/NEW3B.png'
              : 'https://static2.pivotstudio.cn/2021-h5-questions/problems/3B.png'
          "
          class="options option_2"
          @click="clickToNext(2, 5, '/four', 1.42)"
          max-width="23vh"
          max-height="23vh"
          contain
        ></v-img>
        <v-img
          :src="
            isNew
              ? 'https://static2.pivotstudio.cn/2021-h5-questions/problems/NEW3C.png'
              : 'https://static2.pivotstudio.cn/2021-h5-questions/problems/3C.png'
          "
          :lazy-src="
            isNew
              ? 'https://static2.pivotstudio.cn/2021-h5-questions/problems/NEW3C.png'
              : 'https://static2.pivotstudio.cn/2021-h5-questions/problems/3C.png'
          "
          class="options option_3"
          @click="clickToNext(0, 1, '/four', 1.42)"
          max-width="23vh"
          max-height="23vh"
          contain
        ></v-img>
        <v-img
          :src="
            isNew
              ? 'https://static2.pivotstudio.cn/2021-h5-questions/problems/NEW3D.png'
              : 'https://static2.pivotstudio.cn/2021-h5-questions/problems/3D.png'
          "
          :lazy-src="
            isNew
              ? 'https://static2.pivotstudio.cn/2021-h5-questions/problems/NEW3D.png'
              : 'https://static2.pivotstudio.cn/2021-h5-questions/problems/3D.png'
          "
          class="options option_4"
          @click="clickToNext(3, 4, '/four', 1.42)"
          max-width="35vh"
          max-height="35vh"
          contain
        ></v-img>
      </template>
    </div>
    <Stairs />
    <Problem :num="3" :problem="pro" />
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
export default class Three extends Vue {
  @Prop()
  clickToNext!: (c: number, p: number, url: string, point: number) => void;
  @Prop()
  isNew!: boolean;
  @Prop()
  leave1!: string;
  @Prop()
  leave2!: string;
  pro = "";
  created() {
    this.pro = this.isNew
      ? "https://static2.pivotstudio.cn/2021-h5-questions/problems/new/new-three.png"
      : "https://static2.pivotstudio.cn/2021-h5-questions/problems/old/old-three.png";
  }
}
</script>
<style lang="scss" scoped>
.bg {
  background-image: url(../assets/bg/star.jpg);
  background-position-y: -6vh;
  background-size: cover;
  position: relative;
  width: 100%;
  height: 70vh;
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
.leaves {
  height: 100% !important;
  pointer-events: none;
  transform: scale(1.1);
}
.birds {
  top: 43vh;
  left: 43vw;
}
.boy {
  transform: scale(0.54);
  left: 8vw !important;
  bottom: -44vw !important;
  top: auto !important;
  z-index: 1;
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
  animation: upanddown_1 8000ms infinite alternate;
}
.option_2 {
  position: absolute;
  top: 8vh;
  left: -5vw;
  animation: upanddown_2 6000ms infinite alternate;
}
.option_3 {
  position: absolute;
  top: 37vh;
  left: 50vw;
  animation: upanddown_3 9000ms 200ms infinite alternate;
}
.option_4 {
  position: absolute;
  top: 25vh;
  left: -10vw;
  animation: upanddown_4 12000ms infinite alternate;
}
</style>
