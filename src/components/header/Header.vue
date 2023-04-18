<script lang="ts">
  // importação dos componentes e bibliotecas
  import { defineComponent } from "vue";
  import Logo from "../logo/Logo.vue";
  import Slogan from "../slogan/Slogan.vue";

  export default defineComponent({
    // propriedades do header
    props: {
      title: {
        type: String,
        default: "Você está muito próximo de mudar a forma de",
      },
      subtitle: {
        type: String,
        default: "",
      },
      cta: {
        type: String,
        default: "",
      },
    },
    setup() {
      return {};
    },
    // importação dos componentes
    components: { Logo, Slogan },
  });
</script>
<template>
  <!-- container do logo -->
  <div class="container__header">
    <!-- logo da locaweb -->
    <Logo />
    <Slogan :title="title" :subtitle="subtitle" :cta="cta" />
  </div>
</template>
<style scoped>
  /* importação do css */
  @import url("./style/HeaderStyle.css");
</style>
