<script lang="ts">
  import { defineComponent, ref } from "vue";

  export default defineComponent({
    setup() {
      const termsChecked = ref(false);

      return { termsChecked };
    },
  });
</script>
<template>
  <!-- termos de uso -->
  <div class="user_terms">
    <label>
      <!-- checkbox de termos de uso -->
      <input class="checkbox" v-model="termsChecked" type="checkbox" />
    </label>
    <!-- texto de termos de uso -->
    <p>
      Ao concluir com seu cadastro vocé concorda com nossos termos de uso e
      politicas de privacidade.
    </p>
  </div>
</template>
<style scoped>
  /* container do formulário de termos de usuário */
  @import url("./style/UserTermsStyle.css");
</style>
