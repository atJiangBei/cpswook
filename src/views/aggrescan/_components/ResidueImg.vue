<template>
  <div class="residue-img">
    <div class="name-wrap">
      <span class="name-abbr ym-color-333">GLN</span>
      <span class="name-full">glutamine</span>
    </div>
    <div class="img-wrap">
      <!-- <img :src="GluSvg" alt="residue" /> -->
      <img :src="DogImg" alt="dog" />
      <!-- <GluSvg width="100%"></GluSvg> -->
    </div>
    <div class="index-wrap">
      <span class="index">residue index: 49</span>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "ResidueImg"
};
</script>

<script setup lang="ts">
import { ref } from "vue";
// import GluSvg from "./glu.svg?url";
import DogImg from "./dog.webp?url";
</script>

<style lang="scss" scoped>
.residue-img {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  .name-abbr {
    font-size: var(--ym-font-size-lg);
    font-weight: bold;
    margin-right: 4px;
  }
  .index {
    font-size: var(--ym-font-size-sm);
  }
}
</style>
