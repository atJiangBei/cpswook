<template>
  <div class="info-tip ym-flex ym-flex-ai-center">
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
const props = defineProps<Props>();
</script>

<style lang="scss" scoped>
.info-tip {
  --ym-info-tip-padding: 20px;
  --ym-info-tip-border-radius: 5px;
  padding: var(--ym-info-tip-padding);
  border-radius: var(--ym-info-tip-border-radius);
  background-color: v-bind("props.bgColor");
  color: v-bind("props.color");
  .icon {
    margin-right: 5px;
  }
}
</style>
