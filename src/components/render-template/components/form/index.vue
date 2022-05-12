<template>
  <div>
    <form>
      <slot></slot>
    </form>
  </div>
</template>
<script lang="ts">
import { defineComponent, provide, reactive, toRefs } from "vue";
import { FORMPROVIDEKEY, Validation } from "../types/form";

export default defineComponent({
  name: "ym-form",
  props: {
    model: Object,
    labelWidth: {
      type: String,
      default: "auto"
    }
  },
  setup(props, context) {
    const validations = reactive<Array<Validation>>([]);
    const collectionValidation = (validation: Validation) => {
      validations.push(validation);
    };
    const fields = reactive<Array<() => void>>([]);
    const addField = (resetField: () => void) => {
      fields.push(resetField);
    };
    const validate = (callback: (result: any, msgData: any) => void) => {
      Promise.all(validations.map(va => va()))
        .then(res => {
          callback(true, res);
        })
        .catch(err => {
          callback(false, err);
        });
    };
    const resetFields = () => {
      fields.forEach(field => field());
    };
    context.expose({
      validate,
      resetFields
    });
    const { labelWidth } = toRefs(props);
    provide(FORMPROVIDEKEY, {
      collectionValidation,
      labelWidth,
      addField
    });
  }
});
</script>
