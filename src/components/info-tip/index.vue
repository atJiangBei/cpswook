<template>
  <div
    class="info-tip ym-flex ym-flex-ai-center"
    :style="{ backgroundColor: bgColor, color }"
  >
    <el-icon :color="iconColor" class="icon">
      <component :is="icon"></component>
    </el-icon>
    <slot></slot>
  </div>
</template>

<script lang="ts">
export default {
  name: "InfoTip"
};
</script>
<script setup lang="ts">
interface Props {
  icon?: any;
  iconColor?: string;
  bgColor?: string;
  color?: string;
}
defineProps<Props>();
</script>

<style lang="scss" scoped>
.info-tip {
  --ym-info-tip-padding: 20px;
  --ym-info-tip-border-radius: 5px;
  padding: var(--ym-info-tip-padding);
  border-radius: var(--ym-info-tip-border-radius);
  .icon {
    margin-right: 5px;
  }
}
</style>
