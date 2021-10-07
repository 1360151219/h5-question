<template>
  <div class="poster_container" data-app="true">
    <img :src="url" class="poster_img" :class="loading ? 'loading_img' : ''" />
    <v-img
      src="../assets/music.svg"
      contain
      height="6vh"
      width="6vh"
      class="music"
      style="top: 27vh; z-index: 100"
      @click="$emit('music:change')"
      v-show="!loading"
    ></v-img>
    <!-- <v-snackbar v-model="snackbar" centered v-if="snackbar">
      正在生成海报，请稍等（亿会会）.....
    </v-snackbar>
    <div class="header d-flex justify-space-between">
      <div>
        <v-img
          class="name"
          src="../assets/poster/header_name.svg"
          height="30vw"
          contain
        ></v-img>
      </div>

      <div>
        <v-img class="time" src="../assets/2021.svg" height="4vw" contain>
          <div class="time_date">
            {{ this.time.month + "月" + this.time.day + "日" }}
          </div>
          <div class="time_minutes">
            {{ this.time.hour + ":" + this.time.min }}
          </div>
          <v-img src="../assets/2021_line.svg" class="time_line"></v-img>
          <v-img
            src="../assets/skew_line.svg"
            class="time_skewline"
            contain
          ></v-img>
        </v-img>
      </div>
    </div>
    <div class="d-flex">
      <div class="flex-item">
        <v-img
          :src="character_bg"
          contain
          max-width="54vw"
          min-height="70vh"
          class="character_bg"
        >
          <v-img
            contain
            src="../assets/poster/art_logo.svg"
            class="character_logo"
          ></v-img>
          <v-img
            contain
            :src="character"
            class="character"
            :class="c === 5 ? 'cat' : ''"
          ></v-img>
        </v-img>
        <v-img
          src="../assets/pivotStudio_logo.svg"
          contain
          height="7vh"
          class="logo"
        ></v-img>
      </div>
      <div class="flex-item">
        <div class="result">你的测试结果是：</div>

        <v-img :src="character_title" height="5vh" contain class="test_title">
          <v-img
            src="../assets/smail.svg"
            height="2.5vh"
            width="100%"
            contain
            style="top: 8vw"
          ></v-img>
        </v-img>

        <div class="text">
          <span style="font-size: 30px">{{
            description[c][p].detail.substr(0, 1)
          }}</span
          ><span>{{ description[c][p].detail.substr(1) }}</span>
        </div>

        <v-img
          src="../assets/poster/music.svg"
          contain
          height="8vh"
          width="8vh"
          class="music"
          @click="$emit('music:change')"
        ></v-img>

        <v-img
          src="../assets/poster/share.svg"
          contain
          height="8vh"
          width="8vh"
          class="share"
          @click="toImg"
        ></v-img>

        <v-img
          src="../assets/qrcode.png"
          contain
          height="13vh"
          width="13vh"
          class="qrcode"
        ></v-img>
      </div>
    </div> -->
    <div class="tip_save">长按即可保存</div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";
@Component
export default class Res extends Vue {
  @Prop()
  c!: number[];
  @Prop()
  p!: number[];
  @Prop()
  isMale!: boolean;
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
  url = "https://static2.pivotstudio.cn/2021-h5-questions/hust_img/load.gif";
  loading = true;

  created() {
    let cMax = this.getMax(this.c);
    let pMax = this.getMax(this.p);
    let gender = this.isMale ? "0" : "1";
    if (cMax === 5) {
      gender = "";
    }
    var newImg = new Image();
    newImg.src = `https://static2.pivotstudio.cn/2021-h5-questions/poster/${cMax}${pMax}${gender}.jpg`;
    newImg.onload = () => {
      // 图片加载成功后把地址给原来的img
      let loadingtime = Math.random() * 5000 + 3000;
      setTimeout(() => {
        this.url = newImg.src;
        this.loading = false;
      }, loadingtime);
    };
  }
}
</script>
<style lang="scss">
.poster_img {
  width: 100vw;
  transition: 0.3s all;
  transform: translateY(-0.8vh) scaleY(0.88);
}
.loading_img {
  width: 100vw;
}
.poster_container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.character_bg {
  position: absolute;
  top: 19vh;
  left: 0vw;
  .character {
    transform: scale(1.7);
  }
  .cat {
    transform: scale(1.1);
    top: 8vh;
    left: 0vw;
  }
  .character_logo {
    position: absolute;
    left: -17vw;
    top: -9.5vh;

    transform: scale(0.4);
  }
}
.v-image__placeholder {
  top: 50%;
  left: 60%;
}
.handlePos {
  transform: translateX(-52%) scale(1) !important;
  width: 104vw;
}
.handlePosTwo {
  transform: translateX(-50%) !important;
  width: 100vw;
}
.time {
  left: 31vw;
  top: 4vw;
  overflow: inherit;
  color: #fff;
  font-family: sans-serif;
  .time_line {
    left: auto;
    height: 1vw;
    top: 5vw;
    width: 42vw;
    right: 30vw;
  }
  .time_skewline {
    top: 4vh;
    right: -21vw;
    left: auto;
    height: 13vh;
  }
  .time_date {
    letter-spacing: 0.4vw;
    position: absolute;
    top: 5vh;
    right: 52vw;
    font-size: 5vw;
  }
  .time_minutes {
    letter-spacing: 0.9vw;
    position: absolute;
    top: 8vh;
    right: 28vw;
    font-size: 6vw;
  }
}
.logo {
  top: 84vh;
  left: -20vw;
}
.header {
  position: relative;
  height: 100%;
  top: 10vw;
  .name {
    left: -18vw;
    top: 2vw;
  }
}
.text {
  width: 42vw;
  position: absolute;
  left: auto;
  right: -1vw;
  padding: 0 1vw;
  top: 35vh;
  letter-spacing: 0.5vw;
  font-family: auto;
  text-indent: 5vw;
}
// .text::first-letter {
//   font-size: 8vw;
// }
.result {
  font-size: 5vw;
  letter-spacing: 1vw;
  position: absolute;
  left: auto;
  right: 1vw;
  top: 22vh;
  font-family: auto;
}
.test_title {
  position: absolute;
  left: auto;
  right: -27vw;
  top: 28vh;
  overflow: inherit;
}
.music {
  position: absolute;
  left: auto;
  right: 50vw;
  top: 78vh;
}
.share {
  position: absolute;
  left: auto;
  right: 2vw;
  top: 86vh;
}
.produce_img {
  transform: translateX(-12vw) scale(0.7);
  top: 10vw;
  left: 66vw;
}
.qrcode {
  left: auto;
  right: 18vw;
  top: 80vh;
}
.flex-item {
  flex: 1;
  height: 100%;
  position: relative;
}
</style>