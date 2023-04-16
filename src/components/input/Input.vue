<script lang="ts">
  import { defineComponent } from "vue";
  import * as Types from "./interface/InputInterface";
  import sizeStyles from "./data/inputSizes";
  import validateInputProps from "./utils/validateInputProps";

  export default defineComponent({
    // Define as propriedades do componente
    props: {
      autocomplete: {
        type: String as () => Types.autocompleteStatus,
        default: "off",
      },
      description: {
        type: String,
        default: "",
      },
      descriptionIsVisible: {
        type: Boolean,
        default: false,
      },
      inputType: {
        type: String as () => Types.inputTypes,
        required: true,
      },
      isDisabled: {
        type: Boolean,
        default: false,
      },
      isReadOnly: {
        type: Boolean,
        default: false,
      },
      isRequired: {
        type: Boolean,
        default: false,
      },
      label: {
        type: String,
        required: true,
      },
      maxLength: {
        type: String,
        default: "",
      },
      minLength: {
        type: String,
        default: "",
      },
      modelValue: {
        type: String,
        required: true,
      },
      placeholder: {
        type: String,
        default: "",
      },
      size: {
        type: String as () => Types.sizesOfInputs,
        default: "form",
      },
      tabIndex: {
        type: Number,
        default: 0,
      },
    },
    // Define os eventos do componente
    emits: ["update:modelValue"],
    // Define as propriedades computadas
    computed: {
      // Calcula o estilo do input com base no tamanho passado
      inputStyle() {
        return sizeStyles[this.size] || sizeStyles.small;
      },
    },
    created() {
      validateInputProps(this.$props);
    },
  });
</script>

<template>
  <div>
    <label :for="label">
      {{ label }}
    </label>
    <input
      :style="inputStyle"
      :aria-describedby="description"
      :aria-labelledby="label"
      :aria-required="isRequired"
      :autocomplete="autocomplete"
      :disabled="isDisabled"
      :id="label"
      :maxlength="maxLength"
      :minlength="minLength"
      :placeholder="placeholder"
      :required="isRequired"
      :tabindex="tabIndex"
      :type="inputType"
      :value="modelValue"
      @input="
        $emit('update:modelValue', ($event.target as HTMLInputElement).value)
      "
    />
  </div>
</template>

<style scoped>
  /* Importa o estilo do componente */
  @import "./style/InputStyle.css";
</style>
