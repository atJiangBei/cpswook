<template>
  <div class="ym-flex ym-flex-fd-column" style="height: 100%">
    <div class="ym-flex-1">
      <basic v-if="stepStatus === 1"></basic>
      <DetailsBody v-else></DetailsBody>
    </div>
    <div class="ym-flex ym-flex-jc-center">
      <div v-if="stepStatus === 1">
        <el-button @click="$emit('cancel')">取消</el-button>
        <el-button type="primary" @click="onNext">下一步</el-button>
      </div>
      <div v-else>
        <el-button @click="$emit('cancel')">取消</el-button>
        <el-button type="primary" @click="onPrev">上一步</el-button>
        <el-button type="primary">保存</el-button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import Basic from "./basic";
import DetailsBody from "./details.vue";
export default defineComponent({
  components: {
    Basic,
    DetailsBody
  },
  setup(props, { emit }) {
    const stepStatus = ref(1);
    const onPrev = () => {
      stepStatus.value -= 1;
      emit("prev", stepStatus.value);
    };
    const onNext = () => {
      stepStatus.value += 1;
      emit("next", stepStatus.value);
    };
    return {
      onPrev,
      onNext,
      stepStatus
    };
  }
});
</script>
