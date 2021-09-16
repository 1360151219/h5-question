<template>
  <div class="container">
    <div class="num">{{ num }}</div>
    <div class="problem">
      <v-img :src="problem" height="9.7vh" style="top: 1vh"></v-img>
    </div>
    <div class="btn" @click="goback">
      <img src="../assets/goback.svg" />
      <span>上一题</span>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

@Component({
  components: {},
})
export default class Problem extends Vue {
  @Prop()
  num?: number | string;
  @Prop()
  problem?: string;
  flag = true;
  goback() {
    if (!this.flag) return;
    this.flag = false;
    setTimeout(() => {
      if (this.num === 1) return;
      this.$router.back();
      this.flag = true;
    }, 1000);
  }
}
</script>

<style lang="scss" scoped>
.container {
  position: absolute;
  bottom: -13vh;
  height: 13vh;
  width: 100%;
  background-color: rgb(56, 100, 79);
  display: flex;
  z-index: 10;
}
.num {
  height: 26px;
  width: 26px;
  background-color: #fff;
  border-radius: 50%;
  align-self: center;
  line-height: 26px;
  margin-left: 4px;
}
.problem {
  flex: 14;
  font-size: 16px;
  color: #fff;
  z-index: 100;
  align-self: center;
  padding-left: 0.3vh;
}
.btn {
  z-index: 0;
  position: absolute;
  bottom: -4vh;
  left: 50%;
  transform: translateX(-50%);
  height: 7vh;
  width: 7vh;
  border-radius: 50%;
  background-color: rgb(56, 100, 79);
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 10vh;
  }
  span {
    position: absolute;
    top: 7vh;
    font-size: 18px;
    color: #fff;
    white-space: nowrap;
  }
}
</style>

