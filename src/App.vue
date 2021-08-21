<template>
  <v-container>
    <div id="app">
      <div class="title">震惊!你的华中大形象竟是...</div>
      <transition name="fade">
        <keep-alive>
          <router-view />
        </keep-alive>
      </transition>
    </div>
  </v-container>
</template>
<script lang="ts" type="module">
import Vue from "vue";
import Component from "vue-class-component";

@Component({})
export default class App extends Vue {
  isShow = false;
  // preload = function () {
  //   let imgs = [
  //     "../static/back_flower.svg",
  //     "../static/birds.svg",
  //     "../static/boar.svg",
  //     "../static/boy_laying.svg",
  //     "../static/boy_standing.svg",
  //     "../static/flsorescence_change.svg",
  //     "../static/flsorescence.svg",
  //     "../static/front_flower.svg",
  //     "../static/girl.svg",
  //     "../static/goback.svg",
  //     "../static/leaves1.svg",
  //     "../static/leaves2.svg",
  //     "../static/NEW1A.svg",
  //     "../static/NEW1B.svg",
  //     "../static/NEW1C.svg",
  //     "../static/NEW1D.svg",
  //     "../static/NEW2A.svg",
  //     "../static/NEW2B.svg",
  //     "../static/NEW2C.svg",
  //     "../static/NEW2D.svg",
  //     "../static/NEW3A.svg",
  //     "../static/NEW3B.svg",
  //     "../static/NEW3C.svg",
  //     "../static/NEW3D.svg",
  //     "../static/NEW4A.svg",
  //     "../static/NEW4B.svg",
  //     "../static/NEW4C.svg",
  //     "../static/NEW4D.svg",
  //     "../static/NEW5A.svg",
  //     "../static/NEW5B.svg",
  //     "../static/NEW5C.svg",
  //     "../static/NEW5D.svg",
  //     "../static/NEW6A.svg",
  //     "../static/NEW6B.svg",
  //     "../static/NEW6C.svg",
  //     "../static/NEW6D.svg",
  //     "../static/start_btn.svg",
  //     "../static/start.svg",
  //     "../static/studying.svg",
  //     "../static/bg/boar.svg",
  //     "../static/bg/boy.svg",
  //     "../static/bg/flower.svg",
  //     "../static/bg/girl-1.svg",
  //     "../static/bg/snack-2.svg",
  //     "../static/bg/star.svg",
  //     "../static/bg/study-2.svg",
  //     "../static/cover/left_back.svg",
  //     "../static/cover/left_front.svg",
  //     "../static/cover/right_back.svg",
  //     "../static/cover/right_back.svg",
  //     "../static/cover/bg.svg",
  //   ];

  //   for (let img of imgs) {
  //     let image = new Image();
  //     image.src = img;
  //     image.onload = () => {
  //       console.log("loading");
  //     };
  //   }
  // };
  // created() {
  //   this.preload();
  // }
  mounted() {
    const loading = document.getElementById("load_wrap");
    setInterval(() => {
      if (loading) loading.remove();
    }, 2000);
  }
}
</script>
<style lang="scss">
.title {
  padding: 2vw;
  margin-bottom: 3vw;
  font-size: 22px;
  color: #fff;
  font-family: fangsong;
  text-align: left;
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
