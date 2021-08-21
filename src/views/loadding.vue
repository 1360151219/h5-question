<template>
  <div>
    <v-progress-circular
      :width="3"
      color="red"
      indeterminate
    ></v-progress-circular>
  </div>
</template>
<script lang="ts" type="module">
import Vue from "vue";
import Component from "vue-class-component";

@Component({})
export default class Loadding extends Vue {}
</script>