<script lang="ts">
  import { computed, defineComponent, ref } from "vue";
  import FormDivider from "../../../../components/formdivider/FormDivider.vue";
  import { useWindowSize } from "vue-window-size";
  import Input from "../../../../components/input/Input.vue";

  export default defineComponent({
    // declaração dos componentes
    components: {
      FormDivider,
      Input,
    },
    setup() {
      // declaração das variáveis
      const websitename = ref("");

      // Obtém a largura da janela
      const { width } = useWindowSize();

      // Define uma propriedade computada para o tamanho responsivo do input
      const responsiveInput = computed(() => {
        // Retorna "small" se a largura da janela for menor que 640px e "large" caso contrário
        return width.value < 640 ? "small" : "medium";
      });

      const responsiveButton = computed(() => {
        // Retorna "xs" se a largura da janela for menor que 640px e "xl" caso contrário
        return width.value < 640 ? "md" : "xl";
      });
      return {
        responsiveButton,
        responsiveInput,
        websitename,
        width,
      };
    },
  });
</script>
<template>
  <!-- divider -->
  <FormDivider />

  <!-- segunda seção -->
  <div class="website_register">
    <!-- título da seção -->
    <div class="website_register-titles">
      <h1 class="website_register-titles--title">Dados do seu website</h1>
    </div>

    <!-- input do nome do site -->
    <Input
      input-type="text"
      name="WebsiteName"
      label="Nome do seu site"
      v-model="websitename"
      placeholder="Meu site"
      :size="responsiveInput"
      required="true"
      tooltip="Exatamente igual ao título do seu site."
    />
  </div>
  <!-- divider -->
  <FormDivider />
</template>
<style scoped>
  /* container do título de formulário de registro se site */
  .website_register-titles--title {
    color: var(--shark-950);
    font-weight: 700;
    font-size: 28px;
    line-height: 35px;
    margin: 0px 0 15px;
  }
</style>
