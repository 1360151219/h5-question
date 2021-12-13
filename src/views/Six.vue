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
        class="leave_cover old_leave_cover"
      />

      <img v-if="isNew" src="../assets/question/new_six.png" class="q_one" />
      <img v-else src="../assets/question/old_six.png" class="q_one" />
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
import { recordRemainTime, uuid } from "@/utils";
@Component
export default class Six extends Vue {
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
    window.addEventListener("beforeunload", this.leaveHandler);
  }
  beforeDestroy() {
    /* 停留时间 */
    this.leaveTime = new Date().getTime();
    const remain = this.leaveTime - this.enterTime;
    recordRemainTime({
      page_id: "page_6",
      time: remain,
      access_type: this.isQr ? 1 : 0,
      request_id: uuid,
    });
  }
  goback() {
    this.$router.go(-1);
  }
  async leaveHandler() {
    this.leaveTime = new Date().getTime();
    const remain = this.leaveTime - this.enterTime;
    const data = {
      page_id: "page_6",
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
  bottom: 0;
  left: 50%;
  z-index: 2;
  pointer-events: none;
  transform: translate(-50%);
  animation: leave 1s linear alternate;
}
.old_leave_cover {
  bottom: -10vh !important;
}
.option_new_one {
  height: 50px;
  width: 230px;
  position: absolute;
  top: 44%;
  left: 49%;
  transform: translate(-50%, -50%);
}
.option_new_two {
  height: 60px;
  width: 230px;
  position: absolute;
  top: 54%;
  left: 52%;
  transform: translate(-50%, -50%);
}
.option_new_three {
  height: 50px;
  width: 240px;
  position: absolute;
  top: 64%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.option_new_four {
  height: 50px;
  width: 230px;
  position: absolute;
  top: 73%;
  left: 54%;
  transform: translate(-50%, -50%);
}
.option_one {
  height: 60px;
  width: 230px;
  position: absolute;
  top: 40%;
  left: 48%;
  transform: translate(-50%, -50%);
}
.option_two {
  height: 60px;
  width: 240px;
  position: absolute;
  top: 50%;
  left: 53%;
  transform: translate(-50%, -50%);
}
.option_three {
  height: 60px;
  width: 230px;
  position: absolute;
  top: 61%;
  left: 48%;
  transform: translate(-50%, -50%);
}
.option_four {
  height: 60px;
  width: 240px;
  position: absolute;
  top: 70%;
  left: 54%;
  transform: translate(-50%, -50%);
}
.back {
  position: absolute;
  bottom: 14vh;
  left: 50%;
  transform: translateX(-50%);
  height: 70px;
  width: 100px;
}
</style>
