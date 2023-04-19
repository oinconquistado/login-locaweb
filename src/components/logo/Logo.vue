<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    // importação dos componentes e bibliotecas
    setup() {
      return {};
    },
  });
</script>

<template>
  <!-- container do logo -->
  <div class="container__logo-plans--logobox">
    <!-- logo da locaweb -->
    <img
      alt="Logo da Locaweb"
      class="container__logo-plans--logobox--locaweb"
      src="@/assets/images/locaweb.svg"
    />
  </div>
</template>

<style scoped>
  /* importação do css */
  @import url("./style/LogoStyle.css");
</style>
