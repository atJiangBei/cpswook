<template>
  <div class="fine-form-item" :class="currentClassName">
    <label
      class="fine-form-item-label"
      :style="{ width: actualLabelWidth, textAlign: align }"
      v-if="label"
    >
      {{ label }}
    </label>
    <div class="fine-form-item-content">
      <slot></slot>
      <div
        class="fine-form-item-errmsg"
        v-if="currentData.validateMessage && showMessage"
      >
        {{ currentData.validateMessage }}
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, provide, inject, computed, reactive, ref } from "vue";
import {
  FORMPROVIDEKEY,
  FormProvideType,
  Validation,
  FORMITEMPROVIDEKEY
} from "../types/form";
import Validator from "async-validator";
export default defineComponent({
  name: "ym-form-item",
  props: {
    prop: String,
    label: String,
    showMessage: {
      type: Boolean,
      default: true
    },
    labelWidth: {
      type: String,
      default: "auto"
    },
    value: "",
    rule: {
      type: Object,
      default: () => ({
        required: false
      })
    },
    align: {
      type: String,
      default: "right"
    },
    block: {
      type: Boolean,
      default: true
    }
  },
  setup(props) {
    const form = inject<FormProvideType>(FORMPROVIDEKEY);
    const currentValue = props.value;
    const validateState = ref<boolean>(true);
    const actualLabelWidth = computed(
      () => form.labelWidth.value || props.labelWidth
    );
    const currentData = reactive({
      validateMessage: ""
    });
    const setMessage = (errors?: any[]) => {
      if (!errors) {
        currentData.validateMessage = "";
      } else {
        const error = errors[0];
        if (error) {
          currentData.validateMessage = error.message;
        }
      }
    };

    const validation: Validation = () => {
      const rules = [props.rule];
      const key = "validator-key";
      const validator = new Validator({
        [key]: rules
      });
      const currentValue = props.value;
      return new Promise((resolve, reject) => {
        validator.validate(
          {
            [key]: currentValue
          },
          (errors, fields) => {
            if (errors) {
              validateState.value = false;
              reject(errors);
              setMessage(errors);
            } else {
              validateState.value = true;
              resolve(fields);
              setMessage();
            }
          }
        );
      });
    };
    const clearValidate = () => {
      validateState.value = true;
      currentData.validateMessage = "";
    };
    const resetField = () => {
      if (form && form.model && props.prop && form.model[props.prop]) {
        form.model![props.prop!] = currentValue;
      }
      clearValidate();
    };
    form?.collectionValidation(validation);
    form?.addField(resetField);
    provide(FORMITEMPROVIDEKEY, validation);
    const isRequired = computed(() => {
      return props.rule.required;
    });
    const currentClassName = computed(() => ({
      "fine-item-is_block": props.block,
      "fine-item-is_inline": !props.block,
      "fine-item-is_required": isRequired.value,
      "fine-item-validation_failed": !validateState.value
    }));

    return {
      currentData,
      form,
      currentClassName,
      actualLabelWidth
    };
  }
});
</script>
<style lang="scss">
@import "./index.scss";
</style>
