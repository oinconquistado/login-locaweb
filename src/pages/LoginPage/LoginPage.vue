<script lang="ts">
  import { computed, defineComponent, ref } from "vue";
  import Button from "../../components/button/Button.vue";
  import Input from "../../components/input/Input.vue";
  import { useWindowSize } from "vue-window-size";

  export default defineComponent({
    components: {
      Button,
      Input,
    },
    setup() {
      const email = ref("");
      const senha = ref("");

      // Obtém a largura da janela
      const { width } = useWindowSize();

      // Define uma propriedade computada para o tamanho responsivo do input
      const responsiveInput = computed(() => {
        // Retorna "small" se a largura da janela for menor que 640px e "large" caso contrário
        return width.value < 640 ? "small" : "large";
      });

      // Define uma propriedade computada para o tamanho responsivo do botão
      const responsiveButton = computed(() => {
        // Retorna "xs" se a largura da janela for menor que 640px e "xl" caso contrário
        return width.value < 640 ? "md" : "xl";
      });

      return {
        email,
        responsiveButton,
        responsiveInput,
        senha,
      };
    },
  });
</script>

<template>
  <div class="login-page">
    <div class="container">
      <div class="logobox">
        <img
          src="../../assets/images/locaweb.svg"
          class="logobox--locaweb"
          alt="Logo da Locaweb"
        />
      </div>
      <div class="mainbox">
        <h1 class="mainbox--title">Entre na sua conta</h1>
        <p class="mainbox--subtitle">
          Para acessar sua conta, informe e-mail e senha
        </p>
        <!-- Usa a propriedade computada responsiveInput como valor para a propriedade size do input -->
        <Input
          class="mainbox--input_email"
          input-type="text"
          label="E-mail"
          v-model="email"
          placeholder="Seu e-mail"
          :size="responsiveInput"
        />
        <!-- Usa a propriedade computada responsiveInput como valor para a propriedade size do input -->
        <Input
          class="mainbox--input_password"
          input-type="password"
          label="Senha"
          v-model="senha"
          :size="responsiveInput"
          placeholder="Sua senha"
        />
        <div class="forgetbox">
          <a href="#" class="forgetbox--lost_password">Esqueci minha senha</a>
        </div>
        <div class="login_container">
          <!-- Usa a propriedade computada responsiveButton como valor para a propriedade size do botão -->
          <Button
            button_msg="fazer login"
            variant="cta"
            :size="responsiveButton"
          />
        </div>
      </div>
      <div>
        <p class="whitout_account--text">
          Ainda não tem conta?
          <a class="whitout_account--join ." href="#">Cadastre-se</a>
        </p>
      </div>
    </div>
  </div>
</template>

<style>
  @import "./style/LoginPage.css";
  @import "./style/LoginPageMobile.css";
</style>
