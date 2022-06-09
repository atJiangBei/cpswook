<template>
  <div class="field-item">
    <label class="field-item__label">{{ label }}</label>
    <div class="field-item__content">
      <slot></slot>
    </div>
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
  labelWidth?: string;
}
const props = defineProps<Props>();
</script>

<style lang="scss" scoped>
.field-item {
  --margin-bottom: 18px;
  --font-size: 14px;
  display: flex;
  margin-bottom: var(--margin-bottom);
  .field-item__label {
    display: inline-flex;
    justify-content: flex-end;
    align-items: flex-start;
    flex: 0 0 auto;
    font-size: var(--ym-font-size-label);
    color: var(--el-text-color-regular);
    height: 32px;
    line-height: 32px;
    padding: 0 12px 0 0;
    box-sizing: border-box;
    width: v-bind("props.labelWidth");
  }
  .field-item__content {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    flex: 1;
    line-height: 32px;
    position: relative;
    font-size: var(--font-size);
    min-width: 0;
  }
}
</style>
