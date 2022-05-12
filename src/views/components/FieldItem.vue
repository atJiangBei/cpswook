<template>
  <div class="field-item">
    <el-row :gutter="20">
      <span class="ml-3 w-35 text-gray-600 inline-flex items-center">{{
        label
      }}</span>
      <slot></slot>
    </el-row>
  </div>
</template>

<script lang="ts">
export default {
  name: "FieldItem"
};
</script>

<script setup lang="ts">
interface Props {
  label?: string;
}
const props = defineProps<Props>();
</script>

<style lang="scss" scoped></style>
