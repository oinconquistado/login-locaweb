<script lang="ts">
  import { computed, defineComponent, Ref } from "vue";
  import FormField from "./interface/UserFormTypes";
  import { useWindowSize } from "vue-window-size";
  import Input from "../../../../components/input/Input.vue";

  export default defineComponent({
    // declaração das props
    props: {
      formFields: {
        type: Array as () => FormField[],
        default: () => [],
      },
    },
    components: {
      Input,
    },
    setup() {
      const { width } = useWindowSize();

      // Define uma propriedade computada para o tamanho responsivo do input
      const responsiveInput = computed(() => {
        // Retorna "small" se a largura da janela for menor que 640px e "medium" caso contrário
        return width.value < 640 ? "small" : "medium";
      });

      return { responsiveInput };
    },
  });
</script>
<template>
  <!-- formulário de registro -->

  <!-- itera sobre os campos do formulário -->
  <Input
    v-for="(field, index) in formFields"
    :input-type="field.type"
    :key="index"
    :label="field.label"
    :name="field.name"
    :placeholder="field.placeholder"
    :required="field.required"
    :size="responsiveInput"
    v-model="field.model.value"
    :tooltip="field.tooltip"
  />
</template>
