<template>
  <div class="poster_container" data-app="true">
    <img src="../assets/mask.png" class="home_page" v-show="loading" />
    <transition-group name="fadeChange">
      <div id="load_wrap" v-show="loading" key="1">
        <div class="loading_music">
          <div class="loading_music_pole"></div>
          <div class="loading_music_cd"></div>
        </div>
        <div class="loading_process">正在生成你的形象</div>
      </div>
      <div key="2" v-show="!loading">
        <img
          :src="url"
          class="poster"
          @touchstart="touchStart"
          @touchmove="touchMove"
          @touchend="touchEnd"
        />
        <div class="btn" @click="$router.push('/')"></div>
      </div>
    </transition-group>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";
import { uuid, recordPosterSaved } from "@/utils";
@Component
export default class Res extends Vue {
  @Prop()
  c!: number[];
  @Prop()
  p!: number[];
  @Prop()
  isMale!: boolean;
  @Prop()
  isQr!: boolean;
  getMax(arr: Array<number>): number {
    let max = 0;
    let index = 0;
    for (let i = 0; i < arr.length; i++) {
      if (max < arr[i]) {
        max = arr[i];
        index = i;
      }
    }
    return index;
  }
  url = "";
  loading = true;
  enterTime = 0;
  leaveTime = 0;
  timer = 0;
  touchStart() {
    this.timer = setTimeout(this.longpress, 500);
    return false;
  }
  touchEnd() {
    clearTimeout(this.timer);
    return false;
  }
  touchMove() {
    clearTimeout(this.timer);
    return false;
  }
  longpress() {
    this.timer = 0;
    recordPosterSaved({
      request_id: uuid,
      is_poster_saved: true,
    });
  }
  created() {
    this.enterTime = new Date().getTime();
    let cMax = this.getMax(this.c);
    let pMax = this.getMax(this.p);
    let gender = this.isMale ? "0" : "1";
    if (cMax === 5) {
      gender = "";
    }
    var newImg = new Image();
    newImg.src = `https://static2.pivotstudio.cn/2021-h5-questions/poster/${cMax}${pMax}${gender}.png`;
    newImg.onload = () => {
      // 图片加载成功后把地址给原来的img
      let loadingtime = Math.random() * 3000 + 2000;
      this.url = newImg.src;
      setTimeout(() => {
        this.loading = false;
      }, loadingtime);
    };
    window.addEventListener("beforeunload", this.leaveHandler);
  }
  async leaveHandler() {
    this.leaveTime = new Date().getTime();
    const remain = this.leaveTime - this.enterTime;
    const data = {
      page_id: "page_7",
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
<style lang="scss" scoped>
.poster_container {
  height: 100vh;
  width: 100%;
  position: relative;
}
#load_wrap {
  position: absolute;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100%;
  background-color: #4b9975;
}
.loading_music {
  position: absolute;
  height: 117px;
  width: 117px;
  top: 45vh;
  left: 50vw;
  z-index: 4;
  transform: translate(-50%, -50%);
}
.loading_music_pole {
  position: absolute;
  top: -15px;
  left: 38px;
  height: 63px;
  width: 89px;
  z-index: 4;
  background-image: url(../assets/loading/loading.svg);
}
.loading_music_cd {
  position: absolute;
  top: 14px;
  left: 10px;
  height: 100px;
  width: 100px;
  background-image: url(../assets/loading/loading_cd_notext.svg);
  background-size: contain;
  animation: rotate linear 4s infinite;
}
.loading_process {
  position: absolute;
  top: 54vh;
  left: 50vw;
  transform: translateX(-50%);
  font-family: Yuanti SC;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  z-index: 4;
  line-height: 20px;
  color: #fff;
}
.home_page {
  position: absolute;
  top: 0px;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: 3;
}
.poster {
  position: absolute;
  left: 0px;
  bottom: 0;
  height: 100%;
  width: 100vw;
  z-index: 1;
}
.btn {
  position: absolute;
  bottom: 9.48vh;
  left: 12.5vw;
  height: 4.94vh;
  width: 28.75vw;
  z-index: 100;
}
.fadeChange-leave-active {
  animation: blur 600ms ease-out;
}
.fadeChange-enter-active {
  animation: blur 1000ms ease-out reverse;
}
</style>