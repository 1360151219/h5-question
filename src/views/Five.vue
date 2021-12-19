<template>
  <div>
    <div class="bg">
      <img src="../assets/question/leave_five.svg" class="leave_cover" />
      <img v-if="isNew" src="../assets/question/new_five.png" class="q_one" />
      <img v-else src="../assets/question/old_five.png" class="q_one" />
      <div
        :class="isNew ? 'option_new_one' : 'option_one'"
        @click="
          isNew
            ? clickToNext(2, 5, '/six', 1.628)
            : clickToNext(3, 1, '/six', 1.628)
        "
      ></div>
      <div
        :class="isNew ? 'option_new_two' : 'option_two'"
        @click="
          isNew
            ? clickToNext(3, 1, '/six', 1.628)
            : clickToNext(0, 0, '/six', 1.628)
        "
      ></div>
      <div
        :class="isNew ? 'option_new_three' : 'option_three'"
        @click="
          isNew
            ? clickToNext(0, 4, '/six', 1.628)
            : clickToNext(4, 4, '/six', 1.628)
        "
      ></div>
      <div
        :class="isNew ? 'option_new_four' : 'option_four'"
        @click="
          isNew
            ? clickToNext(4, 3, '/six', 1.628)
            : clickToNext(2, 5, '/six', 1.628)
        "
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
export default class Five extends Vue {
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
      page_id: "page_5",
      time: remain,
      access_type: this.isQr ? 1 : 0,
      request_id: uuid,
    });
  }

  async leaveHandler() {
    this.leaveTime = new Date().getTime();
    const remain = this.leaveTime - this.enterTime;
    const data = {
      page_id: "page_5",
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
  width: 100vw;
  bottom: 0vh;
  left: 50%;
  transform: translate(-50%);
  animation: leave 1s linear alternate;
}
.option_new_one {
  height: 60px;
  width: 230px;
  position: absolute;
  top: 40%;
  left: 47%;
  transform: translate(-50%, -50%);
}
.option_new_two {
  height: 60px;
  width: 230px;
  position: absolute;
  top: 50%;
  left: 52%;
  transform: translate(-50%, -50%);
}
.option_new_three {
  height: 60px;
  width: 230px;
  position: absolute;
  top: 61%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.option_new_four {
  height: 70px;
  width: 230px;
  position: absolute;
  top: 72%;
  left: 54%;
  transform: translate(-50%, -50%);
}
.option_one {
  height: 50px;
  width: 230px;
  position: absolute;
  top: 38%;
  left: 48%;
  transform: translate(-50%, -50%);
}
.option_two {
  height: 50px;
  width: 230px;
  position: absolute;
  top: 48%;
  left: 53%;
  transform: translate(-50%, -50%);
}
.option_three {
  height: 50px;
  width: 230px;
  position: absolute;
  top: 58%;
  left: 48%;
  transform: translate(-50%, -50%);
}
.option_four {
  height: 50px;
  width: 230px;
  position: absolute;
  top: 68%;
  left: 54%;
  transform: translate(-50%, -50%);
}
.back {
  position: absolute;
  bottom: 14vh;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 70px;
}
</style>
