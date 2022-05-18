<template>
  <div class="chain">
    <el-button class="residue" type="info" round @click="$emit('choose-residue')"
      >S&nbsp;<span class="residue-index">5</span></el-button
    >
    <el-button class="residue" type="info" round @click="$emit('choose-residue')"
      >A&nbsp;<span class="residue-index">6</span></el-button
    >
  </div>
</template>

<script lang="ts">
export default {
  name: "Chain"
};
</script>

<script setup lang="ts">
import { ref } from "vue";
</script>

<style lang="scss" scoped>
.chain {
  .residue {
    font-weight: bold;
    .residue-index {
      margin-top: 4px;
    }
  }
}
</style>
