import { InjectionKey, Ref } from 'vue';
// export type FormProvideType = {
//     link: (instance: ComponentInternalInstance | null) => void,
//     rules: any
// }

export type Model = {
  [key: string]: any;
};
export type Validation = (trigger?: 'change' | 'blur') => void;
export type FormProvideType = {
  collectionValidation: (validation: Validation) => void;
  rules?: any;
  model?: Model;
  labelWidth: Ref<string>;
  addField: (resetField: () => void) => void;
};

export const FORMPROVIDEKEY: InjectionKey<FormProvideType> =
  Symbol('form-provide-key');

export const FORMITEMPROVIDEKEY: InjectionKey<Validation> = Symbol(
  'form-item-provide-key'
);

export type RadioGroupProvideType = {
  inGroup: boolean;
  rgModelValue?: Ref<string | number | boolean>;
  updateRgModelValue: (rgModelValue: string | number | boolean) => void;
};

export const RADIOGROUPPROVIDEKEY: InjectionKey<RadioGroupProvideType> = Symbol(
  'radio-group-provide-key'
);

export type ButtonTypeType =
  | 'default'
  | 'primary'
  | 'success'
  | 'info'
  | 'warning'
  | 'danger';
