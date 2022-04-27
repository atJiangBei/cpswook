<template>
  <teleport to="body" :disabled="inside">
    <transition name="lb-to-rt">
      <div :class="containerClassNames" v-show="modelValue">
        <div class="ym-flex ym-flex-jc-sb ym-flex-ai-center ym-padding-small">
          <span class="ym-flex-1">{{ title }}</span>
          <el-icon class="ym-custor-pointer" @click="close">
            <close />
          </el-icon>
        </div>
        <div
          class="flex-1 ym-padding-default ym-overflow-auto ym-scrollbar-basic"
        >
          <slot></slot>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, computed, PropsType } from "vue";
type teleportPropsType = {
  to?: string;
  disabled?: boolean;
};
export default defineComponent({
  name: "ym-popup-container",
  emits: ["update:modelValue"],
  props: {
    inside: {
      type: Boolean,
      default: true
    },
    modelValue: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ""
    },
    customClass: {
      type: String,
      default: ""
    }
  },
  setup(props, { emit, slots }) {
    const close = () => {
      emit("update:modelValue");
    };
    const containerClassNames = computed(() => ({
      [props.customClass]: !!props.customClass,
      "ym-popup-container ym-flex ym-flex-fd-column": true,
      "ym-popup-container-to-body": !props.inside
    }));
    return {
      containerClassNames,
      close
    };
  }
});
</script>
<style lang="scss">
.lb-to-rt-enter-active,
.lb-to-rt-leave-active {
  transition: all 0.25s cubic-bezier(0, 0, 0.2, 1);
}
.lb-to-rt-enter-from,
.lb-to-rt-leave-to {
  opacity: 0.3;
  transform: scale(0.1);
  transform-origin: left bottom;
}
.ym-popup-container {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background-color: #fff;
  z-index: 50;
  &.ym-popup-container-to-body {
    position: fixed;
    z-index: 1001;
  }
}
</style>
