<template>
  <v-container>
    <audio id="music" autoplay muted>
      <source src="http://strk2.cn/music/Calm.mp3" type="audio/mpeg" />
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
        v-if="$route.fullPath !== '/res'"
      ></v-img>
      <transition name="fade">
        <keep-alive>
          <router-view
            :clickToNext="clickToNext"
            :num="num"
            @music:change="musicToggle"
          />
        </keep-alive>
      </transition>
    </div>
  </v-container>
</template>
<script lang="ts" type="module">
import Vue from "vue";
import Component from "vue-class-component";
import { Watch } from "vue-property-decorator";
@Component
export default class App extends Vue {
  isShow = false;
  clickToNext(c: number, p: number, url: string) {
    this.$store.commit("handleC", c);
    this.$store.commit("handleP", p);
    this.$router.push(url);
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
  colors = [
    "#DCAC6D",
    "#ACC2D2",
    "#CF948E",
    "#9AB7A4",
    "#D6C8D3",
    "#A7A4A1",
    "#AE9E8E",
    "#ACB484",
    "#5EC0B8",
    "#ECB7C0",
    "#5A8AC8",
    "#3E8C75",
    "#60B3E5",
    "#6EAF89",
  ];
  get randomNum() {
    return Math.ceil(Math.random() * 14);
  }
  num = -1;
  @Watch("$route")
  routeChange() {
    this.num = this.randomNum;
    if (this.$route.fullPath === "/res")
      document.body.style.backgroundColor = this.colors[this.num - 1];
  }
  mounted() {
    const loading = document.getElementById("load_wrap");
   
    setTimeout(() => {
       if (loading) loading.remove();
      const music = document.getElementById("music") as HTMLVideoElement;
      if (music.paused) {
        this.musicToggle();
      }
    }, 10000);
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
  animation: blur 2000ms ease reverse;
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
