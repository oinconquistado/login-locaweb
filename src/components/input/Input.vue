<script lang="ts">
  import { defineComponent } from "vue";
  import * as Types from "../../types/InputTypes";
  import sizeStyles from "@/data/InputSizes";
  import ValidateInputProps from "@/utils/ValidateButtonProps";

  export default defineComponent({
    // Define as propriedades do componente
    props: {
      autocomplete: {
        default: "off",
        type: String as () => Types.autocompleteStatus,
      },
      description: {
        default: "",
        type: String,
      },
      descriptionIsVisible: {
        default: false,
        type: Boolean,
      },
      inputType: {
        required: true,
        type: String as () => Types.inputTypes,
      },
      isDisabled: {
        default: false,
        type: Boolean,
      },
      isReadOnly: {
        default: false,
        type: Boolean,
      },
      isRequired: {
        default: false,
        type: Boolean,
      },
      label: {
        required: true,
        type: String,
      },
      maxLength: {
        default: "",
        type: String,
      },
      minLength: {
        default: "",
        type: String,
      },

      placeholder: {
        default: "",
        type: String,
      },
      size: {
        default: "small",
        type: String as () => Types.sizesOfInputs,
      },
      tabIndex: {
        default: 0,
        type: Number,
      },
      tooltip: {
        default: "",
        type: String,
      },
      setter: {
        default: () => {},
        type: Function,
      },
    },

    // Define as propriedades computadas
    computed: {
      // Calcula o estilo do input com base no tamanho passado
      inputStyle() {
        return sizeStyles[this.size] || sizeStyles.small;
      },
    },

    setup() {
      // ValidateInputProps(props);
      return {};
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
      @input="(e: Event) => {
        setter((e.target as HTMLInputElement).value);} 
      "
    />
    <p>{{ tooltip }}</p>
  </div>
</template>
<style scoped>
  /* Importa o estilo do componente */
  @import "./style/InputStyle.css";
</style>
