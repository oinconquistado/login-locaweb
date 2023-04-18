<script lang="ts">
  import { defineComponent, ref } from "vue";
  import { useRegisterStore } from "../../../../stores/useRegisterStore";

  export default defineComponent({
    setup() {
      // declaração do store
      const registerStore = useRegisterStore();

      // declaração do ref para o checkbox de termos de uso
      const termsChecked = ref(registerStore.termsAccepted);

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
