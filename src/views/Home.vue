<template>
  <div class="home_page">
    <div id="load_wrap" v-show="loading">
      <div class="loading_music">
        <div class="loading_music_pole"></div>
        <div class="loading_music_cd"></div>
      </div>
      <div class="loading_process"></div>
    </div>
    <v-container v-show="!loading"><div class="logo"></div></v-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import Stairs from "../components/stairs.vue";
import Problem from "../components/problems.vue";
import { Prop } from "vue-property-decorator";
import { recordRemainTime, ParseQuery } from "@/utils";
@Component({
  components: {
    Stairs,
    Problem,
  },
})
export default class Home extends Vue {
  @Prop()
  leave1!: string;
  @Prop()
  leave2!: string;
  isChoose = false;
  loading = true;
  handleClick(b: boolean) {
    this.$emit("newOrOld", b);
    this.isGender = true;
    this.isChoose = false;
  }
  isGender = false;
  chooseGender(b: boolean) {
    this.$emit("genderChoose", b);
    this.$router.push("/one");
  }
  enterTime = 0;
  leaveTime = 0;
  created() {
    this.$nextTick(() => {
      const process = document.querySelector(".loading_process") as HTMLElement;
      let i = 0;
      setInterval(() => {
        if (i <= 100) process.innerHTML = i++ + "%";
      }, 40);
    });
    setTimeout(() => {
      this.loading = false;
    }, 0);
    this.enterTime = new Date().getTime();
    window.addEventListener("beforeunload", this.leaveHandler);
  }
  beforeDestroy() {
    /* 停留时间 */
    this.leaveTime = new Date().getTime();
    const remain = (this.leaveTime - this.enterTime) / 1000;
    recordRemainTime({
      id: 0,
      time: remain,
    });
  }

  async leaveHandler() {
    this.leaveTime = new Date().getTime();
    const remain = (this.leaveTime - this.enterTime) / 1000;
    const data = { id: 0, time: remain };
    window.navigator.sendBeacon("/api" + ParseQuery(data));
  }
  destroyed() {
    window.removeEventListener("beforeunload", this.leaveHandler);
  }
}
</script>
<style lang="scss" scoped>
#load_wrap {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  z-index: 1000;
  background-color: #4b9975;
}
.loading_music {
  position: absolute;
  height: 117px;
  width: 117px;
  top: 40vh;
  left: 50vw;
  transform: translate(-50%, -50%);
}
.loading_music_pole {
  position: absolute;
  top: 0;
  left: 30px;
  height: 63px;
  width: 89px;
  z-index: 1;
  background-image: url(../assets/loading/loading.svg);
}
.loading_music_cd {
  position: absolute;
  top: 14px;
  left: 0;
  height: 118px;
  width: 118px;
  background-image: url(../assets/loading/loading_music_cd.svg);
  transform-origin: 50px 66.45px;
  background-size: contain;
  animation: rotate linear 4s infinite;
}
.loading_process {
  position: absolute;
  top: 52vh;
  left: 50vw;
  transform: translateX(-50%);
  font-family: Yuanti SC;
  font-style: normal;
  font-weight: normal;
  font-size: 21.0938px;
  line-height: 30px;

  color: #ffffff;
}
.logo {
  width: 107px;
  height: 34px;
  background-image: url(../assets/Pivot_Studio_logo.png);
}
</style>
