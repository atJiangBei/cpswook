<template>
  <div class="residue-img" :class="{ 'align-left': align === 'left' }">
    <div class="name-wrap">
      <span class="name-abbr ym-color-333">GLN</span>
      <span class="name-full">glutamine</span>
    </div>
    <div class="img-wrap">
      <img src="./glu.svg" alt="residue" />
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

interface Props {
  align?: "left" | "right";
}
defineProps<Props>();
</script>

<style lang="scss" scoped>
.residue-img {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  &.align-left {
    align-items: flex-start;
  }
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
