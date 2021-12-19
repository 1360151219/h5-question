<template>
  <div>
    <audio id="music" autoplay muted>
      <source
        src="https://static2.pivotstudio.cn/2021-h5-questions/music/Calm.mp3"
        type="audio/mpeg"
      />
    </audio>
    <div
      class="loading_music_shift"
      @click="musicToggle"
      :class="isPlay ? 'rotate' : ''"
    ></div>
    <div id="app">
      <transition name="fade">
        <router-view
          :clickToNext="clickToNext"
          :goback="goback"
          :num="num"
          :isNew="isNew"
          :isMale="isMale"
          :c="characters"
          :p="places"
          :isQr="isQr"
          @music:change="musicToggle"
          @newOrOld="newOrOld"
          @genderChoose="genderChoose"
        />
      </transition>
    </div>
  </div>
</template>
<script lang="ts" type="module">
import Vue from "vue";
import Component from "vue-class-component";
import { recordAccessType, recordRemainTime, ParseQuery, uuid } from "@/utils";
@Component
export default class App extends Vue {
  isShow = false;
  timer = -1;
  clickToNext(c: number, p: number, url: string, point: number, ...args: any) {
    if (this.timer !== -1) clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      if (args) {
        for (let i = 0; i < args.length; i++) {
          if (i & 1 && args[i]) {
            this.characters[args[i]] += point;
          } else if ((i & 1) === 0 && args[i]) {
            this.places[args[i]] += point;
          }
        }
      }
      this.characters[c] += point;
      this.places[p] += point;
      this.$router.push(url);
      this.timer = -1;
    }, 500);
  }

  gobackTimer = -1;
  goback() {
    if (this.gobackTimer !== -1) clearTimeout(this.gobackTimer);
    this.gobackTimer = setTimeout(() => {
      this.$router.go(-1);
      this.gobackTimer = -1;
    }, 500);
  }
  isPlay = true;
  firstplay = true;
  musicToggle() {
    const music = document.getElementById("music") as HTMLVideoElement;
    if (music) {
      if (this.isPlay) {
        music.pause();
      } else {
        music.play();
      }
      this.isPlay = !this.isPlay;
    }
  }
  /* 数据 */
  isNew = true;
  isMale = false;
  characters = [0, 0, 0, 0, 0, 0];
  places = [0, 0, 0, 0, 0, 0];
  //幼儿园园长 吃货 刷夜人 宝藏男孩 小甜甜 大橘
  // 韵酒 喻家山 东九  梧桐语  集贸  科技楼
  newOrOld(b: boolean) {
    this.isNew = b;
  }
  genderChoose(b: boolean) {
    this.isMale = b;
  }
  get randomNum() {
    return Math.ceil(Math.random() * 14);
  }
  num = -1;
  enterTime = 0;
  leaveTime = 0;
  isQr = false;

  created() {
    /* 是否二维码进入 */
    this.isQr = "qr" in this.$route.query;
    setTimeout(() => {
      recordAccessType({
        request_id: uuid,
        access_type: this.isQr ? 1 : 0,
      });
    }, 0);
    /* 停留时间 */
    this.enterTime = new Date().getTime();
    window.addEventListener("beforeunload", this.leaveHandler);

    window.addEventListener("click", () => {
      const music = document.getElementById("music") as HTMLVideoElement;
      if (music.paused && this.firstplay) {
        music.play();
        this.firstplay = false;
        this.isPlay = true;
      }
    });
  }
  leaveHandler() {
    this.leaveTime = new Date().getTime();
    const remain = this.leaveTime - this.enterTime;
    const data = {
      page_id: "page_8",
      time: remain,
      access_type: this.isQr ? 1 : 0,
      request_id: uuid,
    };
    window.navigator.sendBeacon("/api/stay" + data);
  }
  destroyed() {
    window.removeEventListener("beforeunload", this.leaveHandler);
  }
}
</script>
<style lang="scss">
.title {
  padding: 2vw;
  margin-bottom: 2vw;
  font-size: 18px;
  color: #fff;
  font-family: fangsong;
  text-align: center;
  white-space: nowrap;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  position: relative;
}
.fade-enter-active {
  will-change: transform;
  animation: blur 2000ms ease-out reverse;
}
.fade-leave-active {
  will-change: transform;
  animation: blur 500ms ease;
}
@keyframes blur {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@keyframes rotate {
  0% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(360deg);
  }
}

.loading_music_shift {
  position: absolute;
  height: 35px;
  width: 35px;
  top: 24px;
  right: 14px;
  z-index: 10;
  background-image: url(./assets/loading/loading_music_shift.svg);
}
.rotate {
  animation: rotate linear 4s infinite;
}
</style>
