<script lang="ts">
  // Importa a função defineComponent do Vue
  import { defineComponent } from "vue";
  // Importa os tipos de interface do botão
  import * as Types from "./interface/ButtonInterface";
  // Importa as métricas de tamanho do botão
  import buttonMetrics from "./data/buttonSizes";
  // Importa a função de validação das propriedades do botão
  import validateButtonProps from "./utils/validateButtonProps";

  // Define o componente Vue
  export default defineComponent({
    // Define as propriedades do componente
    props: {
      // Mensagem do botão
      button_msg: {
        type: String,
        required: true,
      },
      // Tamanho do botão
      size: {
        type: String as () => Types.SizesOfButtons,
        default: "md",
      },
      // Variante do botão
      variant: {
        type: String as () => Types.TypesOfButtons,
        default: "cta",
      },
    },
    // Função setup para inicializar o estado do componente
    setup(props) {
      // Valida as propriedades do componente
      validateButtonProps(props);
      // Obtém o tamanho do botão a partir das métricas de tamanho e da propriedade size
      const buttonSize = buttonMetrics[props.size];
      // Retorna o tamanho do botão para que ele possa ser usado no modelo
      return { buttonSize };
    },
  });
</script>

<template>
  <div>
    <!-- Define o elemento botão -->
    <button
      :style="{ height: buttonSize.height, width: buttonSize.width }"
      :aria-label="button_msg"
      :class="['button', variant]"
    >
      {{ button_msg }}
    </button>
  </div>
</template>

<!-- Importa o arquivo de estilo CSS -->
<style scoped>
  @import "./style/ButtonStyle.css";
</style>
