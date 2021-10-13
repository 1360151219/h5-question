<template>
  <v-container>
    <audio id="music" autoplay muted>
      <source
        src="https://static2.pivotstudio.cn/2021-h5-questions/music/Calm.mp3"
        type="audio/mpeg"
      />
    </audio>
    <div id="app">
      <div class="title" v-show="$route.fullPath !== '/res'">
        震惊!你的华中大形象竟是...
      </div>
      <v-img
        src="./assets/black_music.svg"
        contain
        height="6vh"
        width="6vh"
        class="music"
        style="top: 7vh; z-index: 100"
        @click="musicToggle"
        v-if="$route.fullPath !== '/res' && isPlay === false"
      ></v-img>
      <v-img
        src="./assets/black_music_close.png"
        contain
        height="5vh"
        width="5vh"
        class="music"
        style="top: 7vh; z-index: 100"
        @click="musicToggle"
        v-if="$route.fullPath !== '/res' && isPlay === true"
      ></v-img>
      <transition name="fade">
        <router-view
          :clickToNext="clickToNext"
          :num="num"
          :isNew="isNew"
          :isMale="isMale"
          :c="characters"
          :p="places"
          :leave1="leave1"
          :leave2="leave2"
          @music:change="musicToggle"
          @newOrOld="newOrOld"
          @genderChoose="genderChoose"
        />
      </transition>
    </div>
  </v-container>
</template>
<script lang="ts" type="module">
import Vue from "vue";
import Component from "vue-class-component";
import { Watch } from "vue-property-decorator";
import { recordRemainTime } from "@/utils";
@Component
export default class App extends Vue {
  isShow = false;
  timer = -1;
  clickToNext(c: number, p: number, url: string, point: number) {
    if (this.timer !== -1) clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.characters[c] += point;
      this.places[p] += point;
      this.$router.push(url);
      this.timer = -1;
    }, 600);
  }

  isPlay = false;
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
  /* 数据啊啊啊 */
  isNew = false;
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
  // colors = [
  //   "#DCAC6D",
  //   "#ACC2D2",
  //   "#CF948E",
  //   "#9AB7A4",
  //   "#D6C8D3",
  //   "#A7A4A1",
  //   "#AE9E8E",
  //   "#ACB484",
  //   "#5EC0B8",
  //   "#ECB7C0",
  //   "#5A8AC8",
  //   "#3E8C75",
  //   "#60B3E5",
  //   "#6EAF89",
  // ];
  get randomNum() {
    return Math.ceil(Math.random() * 14);
  }
  num = -1;
  @Watch("$route")
  routeChange() {
    this.num = this.randomNum;
    if (this.$route.fullPath === "/res")
      document.body.style.backgroundColor = "#ffffff";
    else {
      document.body.style.backgroundColor = "rgb(75, 153, 117)";
    }
  }
  leave1 = "";
  leave2 = "";
  enterTime = 0;
  leaveTime = 0;
  created() {
    /* 是否二维码进入 */
    const isQr = "qr" in this.$route.query;
    if (isQr) {
      recordRemainTime({
        id: 99,
        time: 0,
        rqtype: 1,
      });
    } else {
      recordRemainTime({
        id: 99,
        time: 0,
        rqtype: 0,
      });
    }

    /* 调用访问量的接口 */
    /* 停留时间 */
    this.enterTime = new Date().getTime();
    /* ............................... */
    const loading = document.getElementById("load_wrap");
    var newImg = new Image();
    newImg.src = `https://static2.pivotstudio.cn/2021-h5-questions/hust_img/leaves1.svg`;
    newImg.onload = () => {
      // 图片加载成功后把地址给原来的img
      this.leave1 = newImg.src;
    };
    var newImg2 = new Image();
    newImg2.src = `https://static2.pivotstudio.cn/2021-h5-questions/hust_img/leaves2.svg`;
    newImg2.onload = () => {
      // 图片加载成功后把地址给原来的img
      this.leave2 = newImg2.src;
    };
    setTimeout(() => {
      if (loading) loading.remove();
      const music = document.getElementById("music") as HTMLVideoElement;
      if (music.paused) {
        this.musicToggle();
      }
    }, 5000);

    window.addEventListener("beforeunload", this.leaveHandler);
  }
  leaveHandler() {
    this.leaveTime = new Date().getTime();
    const remain = (this.leaveTime - this.enterTime) / 1000;
    recordRemainTime({
      id: 8,
      time: remain,
    });
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
  animation: blur 4000ms ease-out reverse;
}
.fade-leave-active {
  will-change: transform;
  animation: blur 400ms ease;
}
@keyframes blur {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
