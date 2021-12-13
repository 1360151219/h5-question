<template>
  <div @click="clickWrap">
    <img
      src="../assets/mask.png"
      class="home_page"
      :class="loading ? 'zIndex-1' : ''"
    />
    <transition-group name="fadeChange" tag="div">
      <div id="load_wrap" v-show="loading && !isGender && !isNew" key="1">
        <div class="loading_music">
          <div class="loading_music_pole"></div>
          <div class="loading_music_cd"></div>
        </div>
        <div class="loading_process"></div>
      </div>
      <v-container v-show="!loading && !isGender && !isNew" key="2">
        <div class="cover_container">
          <img src="../assets/cover/Pivot_Studio_logo.png" class="logo" />
          <img src="../assets/cover/cover.svg" class="cover" />
        </div>
        <div class="cover_btn">
          <img src="../assets/cover/start_btn.svg" />
          <div class="btn_mask"></div>
        </div>
        <div class="cover_click">
          <img src="../assets/cover/cover_click.svg" />
        </div>
      </v-container>
      <div
        class="gender_cover"
        v-show="isGender"
        key="3"
        :class="isNew ? 'remove' : ''"
      >
        <img src="../assets/cover/Q_gender.svg" class="Q_gender" />
        <div class="male" @click="chooseGender(true)">
          <div class="btn_mask male_mask"></div>
        </div>
        <div class="female" @click="chooseGender(false)">
          <div class="btn_mask female_mask"></div>
        </div>
      </div>
      <div class="new_cover" v-show="isNew" key="4">
        <img src="../assets/cover/leave_cover.svg" class="leave_cover" />
        <img src="../assets/cover/Q_isnew.png" class="Q_isnew" />
        <div class="new" @click="chooseNew(true)">
          <div class="btn_mask male_mask"></div>
        </div>
        <div class="nonew" @click="chooseNew(false)">
          <div class="btn_mask male_mask"></div>
        </div>
        <div class="back" @click="goback"></div>
      </div>
    </transition-group>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";
import { recordRemainTime, uuid } from "@/utils";
@Component
export default class Home extends Vue {
  @Prop()
  isQr!: boolean;
  isNew = false;
  loading = true;
  chooseNew(b: boolean) {
    this.$emit("newOrOld", b);
    this.$router.push("/one");
  }
  isGender = false;
  chooseGender(b: boolean) {
    this.isGender = false;
    this.isNew = true;
    this.$emit("genderChoose", b);
  }
  goback() {
    this.isGender = true;
    this.isNew = false;
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
    }, 4000);
    this.enterTime = new Date().getTime();
    window.addEventListener("beforeunload", this.leaveHandler);
  }
  beforeDestroy() {
    /* 停留时间 */
    this.leaveTime = new Date().getTime();
    const remain = this.leaveTime - this.enterTime;
    recordRemainTime({
      page_id: "page_0",
      time: remain,
      access_type: this.isQr ? 1 : 0,
      request_id: uuid,
    });
  }
  async leaveHandler() {
    this.leaveTime = new Date().getTime();
    const remain = this.leaveTime - this.enterTime;
    const data = {
      page_id: "page_0",
      time: remain,
      access_type: this.isQr ? 1 : 0,
      request_id: uuid,
    };
    window.navigator.sendBeacon("/api/stay" + data);
  }
  destroyed() {
    window.removeEventListener("beforeunload", this.leaveHandler);
  }
  isClick = false;
  clickWrap(ev: Event) {
    const event = ev || window.event;
    const target = event.target as HTMLElement;
    const masks = document.querySelectorAll(".btn_mask");
    if (!target?.className.includes("btn_mask")) {
      if (this.isClick) return;
      for (let mask of masks) {
        mask?.classList.add("flashBlue");
        this.isClick = true;
        setTimeout(() => {
          mask?.classList.remove("flashBlue");
          this.isClick = false;
        }, 1000);
      }
    } else {
      // this.$router.push("/gender");
      this.isGender = true;
    }
  }
}
</script>
<style lang="scss" scoped>
.container {
  padding: 0;
}
.remove {
  opacity: 0;
}
@keyframes blur {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
.fadeChange-leave-active {
  animation: blur 400ms ease-out;
}
.fadeChange-enter-active {
  animation: blur 600ms ease-out reverse;
}
.home_page {
  position: absolute;
  top: 0px;
  left: 0;
  height: 100vh;
  width: 100vw;
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
  top: 40vh;
  left: 50vw;
  transform: translate(-50%, -50%);
  z-index: 2;
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
  z-index: 2;
  color: #ffffff;
}
.logo {
  position: absolute;
  top: 3vh;
  left: 5vw;
}
.cover {
  transform: scale(1);
  width: 100vw;
  margin-top: 15vh;
}
.cover_btn {
  margin-top: -60px;
  margin-bottom: 13px;
  position: relative;
}
.cover_click {
  animation: upAndDown 1s linear infinite alternate;
}
.btn_mask {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  height: 44px;
  width: 264px;
}
.btn_mask.female_mask,
.btn_mask.male_mask {
  width: 208px;
}
.flashBlue {
  animation: flashBlue 1s linear alternate;
}
.gender_cover {
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-image: url(../assets/cover/gender_cover.svg);
  background-position-y: 0vw;
  background-size: cover;
  background-repeat: repeat-y;
  animation: small 1s linear alternate;
  .Q_gender {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -53%);
  }
  .male {
    height: 43px;
    width: 214px;
    position: absolute;
    top: 72vh;
    left: 54%;
    transform: translate(-50%, -53%);
  }
  .female {
    height: 43px;
    width: 214px;
    position: absolute;
    top: 53%;
    left: 48%;
    transform: translate(-50%, -53%);
  }
}
@keyframes leave {
  0% {
    transform: translate(-50%) scale(1.2);
  }
  100% {
    transform: translate(-50%) scale(1);
  }
}
.new_cover {
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-image: url(../assets/cover/default_cover.svg);
  background-size: cover;
  z-index: 2;
  .leave_cover {
    position: absolute;
    height: 100%;
    width: 100%;
    left: 50%;
    bottom: 0;
    transform: translate(-50%);
    animation: leave 1s linear alternate;
  }
  .Q_isnew {
    position: absolute;
    left: 50%;
    top: 44%;
    z-index: -1;
    transform: translate(-50%, -50%);
    width: 63vw;
  }
  .new {
    height: 43px;
    width: 214px;
    position: absolute;
    top: 51%;
    left: 50%;
    transform: translate(-50%, -53%);
  }
  .nonew {
    height: 43px;
    width: 214px;
    position: absolute;
    top: 68%;
    left: 53%;
    transform: translate(-50%, -53%);
  }
}
.back {
  position: absolute;
  top: auto !important;
  bottom: 17vh;
  left: 50%;
  transform: translateX(-50%);
  height: 60px;
  width: 100px;
}
</style>
