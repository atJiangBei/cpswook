<template>
  <transition name="lb-to-rt">
    <div class="ym-popup-container ym-flex ym-flex-fd-column" v-if="modelValue">
      <div class="ym-flex ym-flex-jc-sb ym-flex-ai-center ym-padding-default">
        <span class="ym-flex-1">{{ title }}</span>
        <el-icon class="ym-custor-pointer" @click="close">
          <close />
        </el-icon>
      </div>
      <div class="flex-1 ym-padding-default">
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "popup-container",
  emits: ["update:modelValue"],
  props: {
    modelValue: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ""
    }
  },
  setup(props, { emit }) {
    const close = () => {
      emit("update:modelValue");
    };
    return {
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
  opacity: 0.5;
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
  z-index: 10;
}
</style>
