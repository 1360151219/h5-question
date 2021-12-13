<template>
  <div>
    <div class="bg">
      <img src="../assets/question/leave_two.png" class="leave_cover" />
      <img v-if="isNew" src="../assets/question/new_two.png" class="q_one" />
      <img v-else src="../assets/question/old_two.png" class="q_one" />
      <div
        :class="isNew ? 'option_new_one' : 'option_one'"
        @click="clickToNext(1, 0, '/three', 1.623)"
      ></div>
      <div
        :class="isNew ? 'option_new_two' : 'option_two'"
        @click="clickToNext(4, 4, '/three', 1.623)"
      ></div>
      <div
        :class="isNew ? 'option_new_three' : 'option_three'"
        @click="clickToNext(3, 3, '/three', 1.623)"
      ></div>
      <div
        :class="isNew ? 'option_new_four' : 'option_four'"
        @click="clickToNext(1, 2, '/three', 1.623)"
      ></div>
      <div class="back" @click="goback"></div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

import { recordRemainTime, uuid } from "@/utils";
@Component
export default class Two extends Vue {
  @Prop()
  clickToNext!: (c: number, p: number, url: string, point: number) => void;
  @Prop()
  isNew!: boolean;
  @Prop()
  isQr!: boolean;
  enterTime = 0;
  leaveTime = 0;
  created() {
    this.enterTime = new Date().getTime();
  }
  goback() {
    this.$router.go(-1);
  }
  beforeDestroy() {
    /* 停留时间 */
    this.leaveTime = new Date().getTime();
    const remain = (this.leaveTime - this.enterTime) / 1000;
    recordRemainTime({
      page_id: 2,
      time: remain,
      access_type: this.isQr ? 1 : 0,
      request_id: uuid,
    });
    window.addEventListener("beforeunload", this.leaveHandler);
  }
  async leaveHandler() {
    this.leaveTime = new Date().getTime();
    const remain = (this.leaveTime - this.enterTime) / 1000;
    const data = {
      page_id: 2,
      time: remain,
      access_type: this.isQr ? 1 : 0,
      request_id: uuid,
    };
    window.navigator.sendBeacon("/api" + data);
  }
  destroyed() {
    window.removeEventListener("beforeunload", this.leaveHandler);
  }
}
</script>
<style lang="scss" scoped>
.bg {
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-image: url(../assets/cover/default_cover.svg);
  background-size: cover;
  background-position-y: -4vw;
  background-repeat: repeat-y;
}
.leave_cover {
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 50%;
  transform: translate(-50%);
  animation: leave 1s linear alternate;
}
.option_new_one {
  height: 50px;
  width: 214px;
  position: absolute;
  top: 45%;
  left: 47%;
  transform: translate(-50%, -50%);
}
.option_new_two {
  height: 50px;
  width: 214px;
  position: absolute;
  top: 55%;
  left: 52%;
  transform: translate(-50%, -50%);
}
.option_new_three {
  height: 50px;
  width: 214px;
  position: absolute;
  top: 65%;
  left: 47%;
  transform: translate(-50%, -50%);
}
.option_new_four {
  height: 50px;
  width: 214px;
  position: absolute;
  top: 74%;
  left: 54%;
  transform: translate(-50%, -50%);
}
.option_one {
  height: 50px;
  width: 214px;
  position: absolute;
  top: 45%;
  left: 47%;
  transform: translate(-50%, -50%);
}
.option_two {
  height: 60px;
  width: 230px;
  position: absolute;
  top: 55%;
  left: 53%;
  transform: translate(-50%, -50%);
}
.option_three {
  height: 50px;
  width: 240px;
  position: absolute;
  top: 65%;
  left: 48%;
  transform: translate(-50%, -50%);
}
.option_four {
  height: 50px;
  width: 250px;
  position: absolute;
  top: 74%;
  left: 54%;
  transform: translate(-50%, -50%);
}
.back {
  position: absolute;
  bottom: 14vh;
  left: 50%;
  transform: translateX(-50%);
  height: 60px;
  width: 100px;
}
</style>
