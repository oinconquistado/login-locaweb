<script lang="ts">
  // importação dos componentes e bibliotecas
  import { defineComponent } from "vue";
  // componentes
  import { Logo, Slogan } from "@/components";

  export default defineComponent({
    // propriedades do header
    components: { Logo, Slogan },
    props: {
      cta: {
        default: "",
        type: String,
      },
      subtitle: {
        default: "",
        type: String,
      },
      title: {
        default: "Você está muito próximo de mudar a forma de",
        type: String,
      },
    },
    setup() {
      return {};
    },
    // importação dos componentes
  });
</script>
<template>
  <!-- container do logo -->
  <div class="container__header">
    <!-- logo da locaweb -->
    <Logo />
    <Slogan :cta="cta" :subtitle="subtitle" :title="title" />
  </div>
</template>
<style scoped>
  /* importação do css */
  @import url("./style/HeaderStyle.css");
</style>
