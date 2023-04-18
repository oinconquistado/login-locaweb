<script lang="ts">
  // Importa a função defineComponent do Vue
  import { computed, defineComponent } from "vue";
  // Importa os tipos de interface do botão
  import * as Types from "@/types/ButtonInterface";
  // Importa as métricas de tamanho do botão
  import buttonMetrics from "@/data/buttonSizes";
  // Importa a função de validação das propriedades do botão
  import validateButtonProps from "@/utils/validateButtonProps";

  // Define o componente Vue
  export default defineComponent({
    // Define as propriedades do componente
    props: {
      // Mensagem do botão
      button_msg: {
        required: true,
        type: String,
      },
      // Tamanho do botão
      size: {
        default: "md",
        type: String as () => Types.SizesOfButtons,
      },
      // Variante do botão
      variant: {
        default: "cta",
        type: String as () => Types.TypesOfButtons,
      },
    },
    // Função setup para inicializar o estado do componente
    setup(props) {
      // Obtém o tamanho do botão a partir das métricas de tamanho e da propriedade size
      const buttonSize = computed(() => buttonMetrics[props.size]);
      // Valida as propriedades do componente
      validateButtonProps(props);
      // Retorna o tamanho do botão para que ele possa ser usado no modelo
      return { buttonSize };
    },
  });
</script>

<template>
  <div>
    <!-- Define o elemento botão -->
    <button
      :aria-label="button_msg"
      :class="['button', variant]"
      :style="{ height: buttonSize.height, width: buttonSize.width }"
    >
      {{ button_msg }}
    </button>
  </div>
</template>

<!-- Importa o arquivo de estilo CSS -->
<style scoped>
  @import "@/style/ButtonStyle.css";
</style>
