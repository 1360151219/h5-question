<template>
  <div class="gender_cover"></div>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
@Component
export default class Gender extends Vue {}
</script>

<style lang="scss">
.gender_cover {
  height: 100vh;
  background-image: url(../assets/cover/gender_cover.png);
  animation: small 1s linear alternate;
}
</style>