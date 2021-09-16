<template>
  <div>
    <div class="bg">
      <v-img :src="leave1" :lazy-src="leave1" class="zindex-10"></v-img>
      <v-img :src="leave2" :lazy-src="leave2" class="leaves"></v-img>
      <v-img
        src="../assets/boar.svg"
        lazy-src="../assets/boar.svg"
        class="boy"
        contain
      ></v-img>
      <v-img
        src="../assets/light2.svg"
        lazy-src="../assets/light2.svg"
        class="zindex-100 light_2"
      ></v-img>
      <v-img
        src="../assets/owl.svg"
        lazy-src="../assets/owl.svg"
        class="owl"
        max-height="66"
        max-width="66"
        contain
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
              ? 'http://www.strk2.cn:3000/problems/NEW4A.png'
              : 'http://www.strk2.cn:3000/problems/4A.png'
          "
          :lazy-src="
            isNew
              ? 'http://www.strk2.cn:3000/problems/NEW4A.png'
              : 'http://www.strk2.cn:3000/problems/4A.png'
          "
          class="options option_1"
          @click="clickToNext(0, 1, '/five', 1.523)"
          max-width="30vh"
          max-height="30vh"
          contain
        ></v-img>
        <v-img
          :src="
            isNew
              ? 'http://www.strk2.cn:3000/problems/NEW4B.png'
              : 'http://www.strk2.cn:3000/problems/4B.png'
          "
          :lazy-src="
            isNew
              ? 'http://www.strk2.cn:3000/problems/NEW4B.png'
              : 'http://www.strk2.cn:3000/problems/4B.png'
          "
          class="options option_2"
          @click="clickToNext(3, 3, '/five', 1.523)"
          max-width="23vh"
          max-height="23vh"
          contain
        ></v-img>
        <v-img
          :src="
            isNew
              ? 'http://www.strk2.cn:3000/problems/NEW4C.png'
              : 'http://www.strk2.cn:3000/problems/4C.png'
          "
          :lazy-src="
            isNew
              ? 'http://www.strk2.cn:3000/problems/NEW4C.png'
              : 'http://www.strk2.cn:3000/problems/4C.png'
          "
          class="options option_3"
          @click="clickToNext(2, 2, '/five', 1.523)"
          max-width="23vh"
          max-height="23vh"
          contain
        ></v-img>
        <v-img
          :src="
            isNew
              ? 'http://www.strk2.cn:3000/problems/NEW4D.png'
              : 'http://www.strk2.cn:3000/problems/4D.png'
          "
          :lazy-src="
            isNew
              ? 'http://www.strk2.cn:3000/problems/NEW4D.png'
              : 'http://www.strk2.cn:3000/problems/4D.png'
          "
          class="options option_4"
          @click="clickToNext(5, 5, '/five', 1.523)"
          max-width="35vh"
          max-height="35vh"
          contain
        ></v-img>
      </template>
    </div>
    <Stairs />
    <Problem :num="4" :problem="pro" />
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
export default class Four extends Vue {
  @Prop()
  clickToNext!: (c: number, p: number, url: string, point: number) => void;
  pro = "";
  @Prop()
  isNew!: boolean;
  @Prop()
  leave1!: string;
  @Prop()
  leave2!: string;
  created() {
    this.pro = this.isNew
      ? "http://strk2.cn/problems/new/new-four.png"
      : "http://strk2.cn/problems/old/old-four.png";
  }
}
</script>
<style lang="scss" scoped>
.bg {
  background-image: url(../assets/bg/boar.svg);
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
.owl {
  top: 16vh;
  left: 79vw;
}
.boy {
  transform: scale(0.68);
  left: -9vw !important;
  bottom: -52vw !important;
  top: auto !important;
  z-index: 2;
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
  animation: upanddown_2 9000ms infinite alternate;
}
.option_3 {
  position: absolute;
  top: 37vh;
  left: 50vw;
  animation: upanddown_3 6000ms 200ms infinite alternate;
}
.option_4 {
  position: absolute;
  top: 25vh;
  left: -10vw;
  animation: upanddown_4 12000ms infinite alternate;
}
</style>
