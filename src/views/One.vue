<template>
  <div>
    <div class="bg">
      <!--  -->
      <audio id="music" autoplay>
        <source src="http://strk2.cn/music/nimanwoman.mp3" type="audio/mpeg" />
      </audio>
      <v-img
        src="../assets/black_music.svg"
        contain
        height="6vh"
        width="6vh"
        class="music"
        @click="musicToggle"
      ></v-img>
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
        src="../assets/boy_standing.svg"
        lazy-src="../assets/boy_standing.svg"
        class="boy"
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
              ? 'http://www.strk2.cn:3000/problems/NEW1A.svg'
              : 'http://www.strk2.cn:3000/problems/1A.svg'
          "
          :lazy-src="
            isNew
              ? 'http://www.strk2.cn:3000/problems/NEW1A.svg'
              : 'http://www.strk2.cn:3000/problems/1A.svg'
          "
          class="options option_1"
          @click="clickToNext(1, 4, '/two')"
          max-width="30vh"
          max-height="30vh"
          contain
        ></v-img>
        <v-img
          :src="
            isNew
              ? 'http://www.strk2.cn:3000/problems/NEW1B.svg'
              : 'http://www.strk2.cn:3000/problems/1B.svg'
          "
          :lazy-src="
            isNew
              ? 'http://www.strk2.cn:3000/problems/NEW1B.svg'
              : 'http://www.strk2.cn:3000/problems/1B.svg'
          "
          class="options option_2"
          @click="clickToNext(2, 5, '/two')"
          max-width="23vh"
          max-height="23vh"
          contain
        ></v-img>
        <v-img
          :src="
            isNew
              ? 'http://www.strk2.cn:3000/problems/NEW1C.svg'
              : 'http://www.strk2.cn:3000/problems/1C.svg'
          "
          :lazy-src="
            isNew
              ? 'http://www.strk2.cn:3000/problems/NEW1C.svg'
              : 'http://www.strk2.cn:3000/problems/1C.svg'
          "
          class="options option_3"
          @click="clickToNext(3, 2, '/two')"
          max-width="23vh"
          max-height="23vh"
          contain
        ></v-img>
        <v-img
          :src="
            isNew
              ? 'http://www.strk2.cn:3000/problems/NEW1D.svg'
              : 'http://www.strk2.cn:3000/problems/1D.svg'
          "
          :lazy-src="
            isNew
              ? 'http://www.strk2.cn:3000/problems/NEW1D.svg'
              : 'http://www.strk2.cn:3000/problems/1D.svg'
          "
          class="options option_4"
          @click="clickToNext(1, 2, '/two')"
          max-width="35vh"
          max-height="35vh"
          contain
        ></v-img>
      </template>
    </div>
    <Stairs />
    <Problem :num="1" :problem="pro" />
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
export default class One extends Vue {
  @Prop()
  clickToNext!: (c: number, p: number, url: string) => void;
  pro = "";
  isNew!: boolean;
  isPlay = false;
  musicToggle() {
    const music = document.getElementById("music");
    if (music) {
      if (this.isPlay) {
        (music as HTMLAudioElement).pause();
      } else {
        (music as HTMLAudioElement).play();
      }
      this.isPlay = !this.isPlay;
    }
  }
  created() {
    this.isNew = this.$store.state.isNew;
    this.pro = this.isNew
      ? "初到华中大，你最想打卡哪里"
      : "刚开学课程不是很多，在一个无所事事的晚上，你最想做什么呢？";
  }
}
</script>
<style lang="scss" scoped>
.bg {
  background-image: url(../assets/bg/boy.svg);
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
  animation: small 1.4s 500ms;
}
.boy {
  left: -10vw !important;
  bottom: -58vw !important;
  top: auto !important;
  transform: scale(0.6);
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
.music {
  z-index: 100;
}
</style>
