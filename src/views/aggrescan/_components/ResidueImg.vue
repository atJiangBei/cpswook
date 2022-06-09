<template>
  <div class="residue-img" :class="{ 'align-left': align === 'left' }">
    <div class="name-wrap">
      <span class="name-abbr ym-color-333">{{ residue.name }}</span>
      <span class="name-full">{{ residue.fullName }}</span>
    </div>
    <!-- <div class="img-wrap">
      <img src="./glu.svg" alt="residue" />
    </div> -->
    <div class="index-wrap">
      <span class="index">residue index: {{ residue.index }}</span>
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

export interface Residue {
  name: string;
  fullName: string;
  index: string | number;
  letter: string;
}
interface Props {
  align?: "left" | "right";
  residue: Residue;
}
const props = defineProps<Props>();
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
