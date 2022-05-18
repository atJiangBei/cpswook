<template>
  <div class="residue-item ym-flex ym-flex-ai-center">
    <div class="img-wrap">
      <ALASvg></ALASvg>
    </div>
    <div class="name-wrap">
      <span class="name-abbr ym-color-333">GLN</span>
      <span class="name-full">glutamine</span>
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
import ALASvg from "./ALA.svg";
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
