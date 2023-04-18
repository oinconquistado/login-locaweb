<script lang="ts">
  import { computed, defineComponent, ref } from "vue";
  import { useWindowSize } from "vue-window-size";
  import Button from "../../components/button/Button.vue";
  import Input from "../../components/input/Input.vue";
  import Logo from "../../components/logo/Logo.vue";
  import { useLoginStore } from "@/store/loginStore/loginStore";

  export default defineComponent({
    components: {
      Button,
      Input,
      Logo,
    },

    setup() {
      const loginStore = useLoginStore();

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
        loginStore,
        responsiveButton,
        responsiveInput,
      };
    },
  });
</script>

<template>
  <div class="login-page">
    <div class="container">
      <Logo />
      <div class="mainbox">
        <h1 class="mainbox--title">Entre na sua conta</h1>
        <p class="mainbox--subtitle">
          Para acessar sua conta, informe e-mail e password
        </p>
        <!-- Usa a propriedade computada responsiveInput como valor para a propriedade size do input -->
        <Input
          class="mainbox--input_email"
          input-type="text"
          label="E-mail"
          :value="loginStore.getEmail"
          placeholder="Seu e-mail"
          :size="responsiveInput"
          @input="loginStore.setEmail($event.target.value)"
        />
        <!-- Usa a propriedade computada responsiveInput como valor para a propriedade size do input -->
        <Input
          class="mainbox--input_password"
          input-type="password"
          label="Senha"
          :value="loginStore.getPassword"
          :size="responsiveInput"
          placeholder="Sua senha"
          @input="loginStore.setPassword($event.target.value)"
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
          <a class="whitout_account--join ." href="/plans">Cadastre-se</a>
        </p>
      </div>
    </div>
  </div>
</template>

<style>
  @import "./style/LoginPage.css";
  @import "./style/LoginPageMobile.css";
</style>
