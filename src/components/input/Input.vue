<script lang="ts">
  import { defineComponent } from "vue";
  import * as Types from "./interface/InputInterface";
  import sizeStyles from "./data/inputSizes";
  import validateInputProps from "@/utils/validateButtonProps";

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

      placeholder: {
        type: String,
        default: "",
      },
      size: {
        type: String as () => Types.sizesOfInputs,
        default: "small",
      },
      tabIndex: {
        type: Number,
        default: 0,
      },
      tooltip: {
        type: String,
        default: "",
      },
      setter: {
        type: Function,
        default: () => {},
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
      // validateInputProps(props);
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
