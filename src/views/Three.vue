<template>
  <div class="bg">
    <img src="../assets/question/leave_three.svg" class="leave_cover" />
    <img v-if="isNew" src="../assets/question/new_three.png" class="q_one" />
    <img v-else src="../assets/question/old_three.png" class="q_one" />
    <div
      :class="isNew ? 'option_new_one' : 'option_one'"
      @click="
        isNew
          ? clickToNext(1, 1, '/four', 1.42, null, 3)
          : clickToNext(5, 2, '/four', 1.42)
      "
    ></div>
    <div
      :class="isNew ? 'option_new_two' : 'option_two'"
      @click="
        isNew
          ? clickToNext(2, 5, '/four', 1.42)
          : clickToNext(5, 0, '/four', 1.42)
      "
    ></div>
    <div
      :class="isNew ? 'option_new_three' : 'option_three'"
      @click="
        isNew
          ? clickToNext(0, 1, '/four', 1.42)
          : clickToNext(1, 4, '/four', 1.42)
      "
    ></div>
    <div
      :class="isNew ? 'option_new_four' : 'option_four'"
      @click="
        isNew
          ? clickToNext(3, 4, '/four', 1.42)
          : clickToNext(1, 1, '/four', 1.42, 4)
      "
    ></div>
    <div class="back" @click="goback"></div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

import { recordRemainTime, uuid } from "@/utils";
@Component
export default class Three extends Vue {
  @Prop()
  clickToNext!: (
    c: number,
    p: number,
    url: string,
    point: number,
    ...args: any
  ) => void;
  @Prop()
  goback!: () => void;
  @Prop()
  isNew!: boolean;
  @Prop()
  isQr!: boolean;
  enterTime = 0;
  leaveTime = 0;
  created() {
    this.enterTime = new Date().getTime();

    window.addEventListener("beforeunload", this.leaveHandler);
  }
  beforeDestroy() {
    /* 停留时间 */
    this.leaveTime = new Date().getTime();
    const remain = this.leaveTime - this.enterTime;
    recordRemainTime({
      page_id: "page_3",
      time: remain,
      access_type: this.isQr ? 1 : 0,
      request_id: uuid,
    });
  }

  async leaveHandler() {
    this.leaveTime = new Date().getTime();
    const remain = this.leaveTime - this.enterTime;
    const data = {
      page_id: "page_3",
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
  bottom: -2vh;
  left: 50%;
  transform: translate(-50%);
  animation: leave 1s linear alternate;
}
.option_new_one {
  height: 64px;
  width: 230px;
  position: absolute;
  top: 40%;
  left: 47%;
  transform: translate(-50%, -50%);
}
.option_new_two {
  height: 64px;
  width: 230px;
  position: absolute;
  top: 52%;
  left: 52%;
  transform: translate(-50%, -50%);
}
.option_new_three {
  height: 64px;
  width: 230px;
  position: absolute;
  top: 62%;
  left: 47%;
  transform: translate(-50%, -50%);
}
.option_new_four {
  height: 50px;
  width: 240px;
  position: absolute;
  top: 73%;
  left: 54%;
  transform: translate(-50%, -50%);
}
.option_one {
  height: 50px;
  width: 230px;
  position: absolute;
  top: 41%;
  left: 47%;
  transform: translate(-50%, -50%);
}
.option_two {
  height: 50px;
  width: 236px;
  position: absolute;
  top: 50%;
  left: 53%;
  transform: translate(-50%, -50%);
}
.option_three {
  height: 60px;
  width: 240px;
  position: absolute;
  top: 60%;
  left: 48%;
  transform: translate(-50%, -50%);
}
.option_four {
  height: 60px;
  width: 240px;
  position: absolute;
  top: 69%;
  left: 54%;
  transform: translate(-50%, -50%);
}
.back {
  position: absolute;
  bottom: 15vh;
  left: 50%;
  transform: translateX(-50%);
  height: 70px;
  width: 100px;
}
</style>
