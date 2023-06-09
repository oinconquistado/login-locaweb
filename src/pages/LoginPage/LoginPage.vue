<script lang="ts">
  // outras bibliotecas
  import { computed, defineComponent } from "vue";
  import { useWindowSize } from "vue-window-size";
  // componentes
  import { Button, Input, Logo } from "@/components";
  // store
  import { useLoginStore } from "@/stores";

  export default defineComponent({
    components: {
      Button,
      Input,
      Logo,
    },

    setup() {
      // Obtém o estado do login
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

      // Retorna as propriedades computadas para que elas possam ser usadas no modelo
      return {
        loginStore,
        responsiveButton,
        responsiveInput,
      };
    },
  });
</script>

<template>
  <!-- página de login -->
  <div class="login-page">
    <!-- login container -->
    <div class="container">
      <!-- logo -->
      <Logo />
      <!-- main box -->
      <div class="mainbox">
        <!-- título -->
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
        <!-- botão de esqueci minha senha -->
        <div class="forgetbox">
          <a href="#" class="forgetbox--lost_password">Esqueci minha senha</a>
        </div>
        <div class="login_container">
          <!-- Usa a propriedade computada responsiveButton como valor para a propriedade size do botão -->
          <router-link :to="`/logged`">
            <Button
              button_msg="fazer login"
              variant="cta"
              :size="responsiveButton"
            />
          </router-link>
        </div>
      </div>
      <div>
        <!-- botão de cadastro -->
        <p class="whitout_account--text">
          Ainda não tem conta?
          <a class="whitout_account--join ." href="/plans">Cadastre-se</a>
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
  @import "./style/LoginPage.css";
  @import "./style/LoginPageMobile.css";
</style>
