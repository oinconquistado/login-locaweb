<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    props: {
      // propriedades do slogan
      title: {
        default: "Você está muito próximo de mudar a forma de",
        type: String,
      },
      subtitle: {
        default: "",
        type: String,
      },
      cta: {
        default: "",
        type: String,
      },
    },
    setup() {
      return {};
    },
  });
</script>
<template>
  <!-- chamadas do principal -->
  <div class="plans_call">
    <!-- chamada principal -->
    <h1>{{ title }}</h1>
    <!-- chamada secundária -->
    <h2 class="plans_call--subtitle">{{ subtitle }}</h2>
    <!-- chamada de ação -->
    <h2 class="plans_call--action-text">{{ cta }}</h2>
  </div>
</template>
<style scoped>
  /* importação do css */
  @import url("./style/SloganStyle.css");
</style>
