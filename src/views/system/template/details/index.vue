<template>
  <div>
    <div>
      <el-button type="primary" v-if="stepStatus === 1">下一步</el-button>
      <div v-else>
        <el-button type="primary">上一步</el-button>
        <el-button type="primary">保存</el-button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import Basic from "./basic";
export default defineComponent({
  components: {
    Basic
  },
  setup() {
    const stepStatus = ref(1);
    return {
      stepStatus
    };
  }
});
</script>
