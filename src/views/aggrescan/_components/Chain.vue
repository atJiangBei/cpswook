<template>
  <div class="chain">
    <h3 class="ym-title-h3 ym-margin-default-y">{{ "Chain " + chain }}</h3>
    <div class="residues">
      <el-button
        v-for="(residue, index) in residues"
        :key="index"
        class="residue"
        :color="!!chosenMap[residue[0]] ? extraStyle.bgColor : ''"
        type="info"
        size="small"
        round
        @click="onClick(residue)"
        >{{ residue[1] }}&nbsp;<span class="residue-index">{{
          residue[0]
        }}</span></el-button
      >
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "Chain"
};
</script>

<script setup lang="ts">
import { ref, computed } from "vue";

export interface ChainChosenResidue {
  letter: string;
  index: string | number;
  chain: string;
}

type Chosen = (string | number)[];

interface Props {
  chain: string;
  residues: [];
  chosen?: Chosen;
}
const props = withDefaults(defineProps<Props>(), {
  chosen: () => []
});

const emit = defineEmits<{
  (e: "chooseResidue", payLoad: ChainChosenResidue): void;
}>();

const onClick = residue => {
  if (chosenMap.value[residue[0]]) return;
  emit("chooseResidue", {
    letter: residue[1],
    index: residue[0],
    chain: props.chain
  });
};

const chosenMap = computed(() => {
  const res = {};
  props.chosen.forEach(item => {
    res[item] = true;
  });
  return res;
});
const extraStyle = {
  bgColor: "#06cab6"
};
</script>

<style lang="scss" scoped>
.chain {
  --margin: 6px;
  --mutated-color: #06cab6;
  .residue {
    font-weight: bold;
    margin: 0 var(--margin) var(--margin) 0;
    &.mutated {
      background-color: var(--mutated-color);
    }
    .residue-index {
      margin-top: 4px;
    }
  }
}
</style>
