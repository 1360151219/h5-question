<template>
  <div>
    <div class="top zindex-100"></div>
    <div class="bottom zindex-100"></div>
  </div>
</template>
<style lang="scss" scoped>
.top,
.bottom {
  background-color: rgb(103, 168, 153);
  position: absolute;
  transform: translateX(-50%);
  left: 50%;
  bottom: 0;
  height: 1.5vh;
  box-shadow: -5px 0px 14px rgb(99, 76, 69, 0.6),
    0px -5px 14px rgb(99, 76, 69, 0.6),
    /*上边阴影*/ 5px 0px 14px rgb(99, 76, 69, 0.6),
    /*右边阴影*/ inset 0px -5px 5px rgb(99, 76, 69, 0.6);
}
.top {
  width: 71vw;
  bottom: 1.8vh;
}
.bottom {
  width: 84vw;
}
</style>

