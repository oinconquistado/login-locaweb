<script setup lang="ts">
  import * as Types from "./interface/InputInterface";
  import { initInput } from "./controller/InputController";
  import { treatedProps } from "./utils/inputSetDefaultProps";

  // definindo props para o componente
  const props: Types.InputProps = defineProps<{
    autocomplete?: Types.autocompleteStatus;
    description?: string;
    descriptionIsVisible?: boolean;
    inputType: Types.inputTypes;
    isDisabled?: boolean;
    isReadOnly?: boolean;
    isRequired?: boolean;
    label: string;
    maxLength?: string;
    minLength?: string;
    modelValue: string;
    placeholder?: string;
    size?: Types.sizesOfInputs;
    tabIndex?: number;
  }>();

  // definindo emmited events para o componente
  defineEmits(["update:modelValue"]);

  // inicializando as props do componente
  props && props.label && initInput(props);
</script>

<template>
  <div>
    <label
      :id="treatedProps.inputLabelIDProp"
      :for="treatedProps.inputLabelProp"
      >{{ label }}
    </label>
    <input
      :aria-describedby="treatedProps.inputAriaDescribedByProp"
      :aria-labelledby="treatedProps.inputAriaLabelProp"
      :aria-required="isRequired"
      :autocomplete="treatedProps.inputAutocompleteProp"
      :disabled="isDisabled"
      :id="treatedProps.inputLabelProp"
      :maxlength="maxLength"
      :minlength="minLength"
      :name="treatedProps.inputLabelProp"
      :placeholder="placeholder"
      :required="isRequired"
      :style="{
        width: treatedProps.inputSizeProp.width,
        height: treatedProps.inputSizeProp.height,
      }"
      :tabindex="treatedProps.inputTabIndexProp"
      :type="treatedProps.inputTypeProp"
      :value="modelValue"
      @input="
        $emit('update:modelValue', ($event.target as HTMLInputElement).value)
      "
    />

    <div :id="treatedProps.inputAriaDescribedByProp">
      <p
        class="input-description"
        :hidden="treatedProps.inputDescriptionVisibilityProp"
      >
        {{ description }}
      </p>
    </div>
    <p>{{ modelValue }}</p>
  </div>
</template>

<style scoped>
  @import "./style/InputStyle.css";
</style>
