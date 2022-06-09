<template>
  <div class="residue-item ym-flex ym-flex-ai-center">
    <!-- <div class="img-wrap">
      <ALASvg></ALASvg>
    </div> -->
    <div class="name-wrap">
      <span class="name-abbr ym-color-333">{{ residue.name }}</span>
      <span class="name-full">{{ residue.fullName }}</span>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "ResidueItem"
};
</script>

<script setup lang="ts">
import { ref } from "vue";

export interface ResidueItem {
  letter: string;
  name: string;
  fullName: string;
}
interface Props {
  residue: ResidueItem;
}
const props = defineProps<Props>();
</script>

<style lang="scss" scoped>
.residue-item {
  padding: 20px 10px;

  .name-abbr {
    font-size: var(--ym-font-size-lg);
    font-weight: bold;
    margin-right: 4px;
  }
}
</style>
