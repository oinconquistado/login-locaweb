<script setup lang="ts">
  import {
    InputProps,
    inputTypes,
    sizesOfInputs,
    autocompleteStatus,
  } from "./interface/InputInterface";
  import { initInput } from "./controller/InputController";
  import { treatedLabel } from "./utils/InputLabelTreatment";

  const props: InputProps = defineProps<{
    label: string;
    modelValue: string;
    placeholder?: string;
    inputType: inputTypes;
    size?: sizesOfInputs;
    autocomplete?: autocompleteStatus;
    maxLength?: string;
    minLength?: string;
    isDisabled?: boolean;
    isReadOnly?: boolean;
    isRequired?: boolean;
    description?: string;
    descriptionIsVisible?: boolean;
    tabIndex?: number;
  }>();

  defineEmits(["update:modelValue"]);

  props && props.label && initInput(props);
</script>

<template>
  <div>
    <label :for="treatedLabel" id="`${treatedLabel}-label`">{{ label }} </label>
    <input
      :name="treatedLabel"
      :value="modelValue"
      :placeholder="placeholder"
      :type="inputType"
      :minlength="minLength"
      :maxlength="maxLength"
      :id="treatedLabel"
      :autocomplete="autocomplete"
      :required="isRequired"
      :disabled="isDisabled"
      :aria-labelledby="`${label}-label`"
      :aria-required="isRequired"
      :aria-describedby="description ? `${description}-description` : ''"
      :tabindex="isDisabled ? -1 : tabIndex ? tabIndex : undefined"
      @input="
        $emit('update:modelValue', ($event.target as HTMLInputElement).value)
      "
    />

    <div :id="`${treatedLabel}-description`">
      <p
        :hidden="descriptionIsVisible ? false : true"
        class="input-description"
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
