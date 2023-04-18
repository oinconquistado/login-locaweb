<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
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
  });
</script>
<template>
  <!-- chamadas do principal -->
  <div class="plans_call">
    <h1>{{ title }}</h1>
    <h2 class="plans_call--subtitle">{{ subtitle }}</h2>
    <h2 class="plans_call--action-text">{{ cta }}</h2>
  </div>
</template>
<style scoped>
  /* importação do css */
  @import url("./style/SloganStyle.css");
</style>
