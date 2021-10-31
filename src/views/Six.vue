<template>
  <div>
    <div class="bg">
      <img
        v-if="isNew"
        src="../assets/question/leave_six_new.svg"
        class="leave_cover"
      />
      <img
        v-else
        src="../assets/question/leave_six_old.svg"
        class="leave_cover"
      />

      <img v-if="isNew" src="../assets/question/new_six.svg" class="q_one" />
      <img v-else src="../assets/question/old_six.svg" class="q_one" />
      <div
        :class="isNew ? 'option_new_one' : 'option_one'"
        @click="clickToNext(4, 5, '/res', 1.732)"
      ></div>
      <div
        :class="isNew ? 'option_new_two' : 'option_two'"
        @click="clickToNext(0, 2, '/res', 1.732)"
      ></div>
      <div
        :class="isNew ? 'option_new_three' : 'option_three'"
        @click="clickToNext(2, 0, '/res', 1.732)"
      ></div>
      <div
        :class="isNew ? 'option_new_four' : 'option_four'"
        @click="clickToNext(5, 1, '/res', 1.732)"
      ></div>
      <div class="back" @click="goback"></div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";
import { recordRemainTime, ParseQuery } from "@/utils";
@Component
export default class Six extends Vue {
  @Prop()
  clickToNext!: (c: number, p: number, url: string, point: number) => void;
  @Prop()
  isNew!: boolean;
  enterTime = 0;
  leaveTime = 0;
  created() {
    this.enterTime = new Date().getTime();
    window.addEventListener("beforeunload", this.leaveHandler);
  }
  beforeDestroy() {
    /* 停留时间 */
    this.leaveTime = new Date().getTime();
    const remain = (this.leaveTime - this.enterTime) / 1000;
    recordRemainTime({
      id: 6,
      time: remain,
    });
  }
  goback() {
    this.$router.go(-1);
  }
  async leaveHandler() {
    this.leaveTime = new Date().getTime();
    const remain = (this.leaveTime - this.enterTime) / 1000;
    const data = { id: 6, time: remain };
    window.navigator.sendBeacon("/api" + ParseQuery(data));
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
  height: 100%;
  width: 100%;
  left: 50%;
  bottom: 0;
  z-index: 2;
  pointer-events: none;
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
  top: 63%;
  left: 47%;
  transform: translate(-50%, -50%);
}
.option_new_four {
  height: 50px;
  width: 214px;
  position: absolute;
  top: 71%;
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
  height: 50px;
  width: 214px;
  position: absolute;
  top: 54%;
  left: 53%;
  transform: translate(-50%, -50%);
}
.option_three {
  height: 50px;
  width: 214px;
  position: absolute;
  top: 62%;
  left: 48%;
  transform: translate(-50%, -50%);
}
.option_four {
  height: 50px;
  width: 214px;
  position: absolute;
  top: 71%;
  left: 54%;
  transform: translate(-50%, -50%);
}
.back {
  position: absolute;
  bottom: 12vh;
  left: 50%;
  transform: translateX(-50%);
  height: 60px;
  width: 100px;
}
</style>
