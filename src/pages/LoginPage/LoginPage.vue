<script setup lang="ts">
  import Input from "../../components/input/Input.vue";
  import Button from "../../components/button/Button.vue";
  import { ref } from "vue";

  const email = ref("");
  const senha = ref("");
</script>
<template>
  <div class="login-page">
    <div class="container">
      <div class="logo-login-page">
        <img src="../../assets/images/locaweb.svg" alt="logo" />
      </div>
      <div class="login-box">
        <h1 class="login-to-your-account">Entre na sua conta</h1>
        <p class="subtitle">Para acessar sua conta, informe e-mail e senha</p>
        <Input
          class="input-email"
          input-type="text"
          label="E-mail"
          v-model="email"
          placeholder="Seu e-mail"
        />
        <Input
          class="input-password"
          input-type="password"
          label="Senha"
          v-model="senha"
          placeholder="Sua senha"
        />
        <div class="container-lost-password">
          <p class="lost-password">Esqueci minha senha</p>
        </div>
        <div class="container-login-button">
          <Button button_msg="fazer login" variant="cta" size="xl" />
        </div>
      </div>
      <div class="whitout-login">
        <p class="whitout-account-text">
          Ainda não tem conta? <a href="" class="join">Cadastre-se</a>
        </p>
      </div>
    </div>
  </div>
</template>
<style>
  .login-page {
    display: grid;
    place-items: center;
    height: 100vh;
  }

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .logo-login-page {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 176px;
    height: 77px;
  }

  .login-box {
    background-color: var(--white-50);
    width: 617px;
    height: 492px;
    padding-top: 28px;
    padding-left: 30px;
    margin: 32px 0px;
  }
  .login-to-your-account {
    font-weight: 700;
    font-size: 28px;
    line-height: 35px;
    color: var(--shark-950);
  }

  .subtitle {
    font-family: "Sora";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 23px;
    color: var(--shark-950);
    margin-top: 5px;
    margin-bottom: 4px;
  }

  .input-email,
  .input-password {
    margin-top: 15px;
  }

  .container-lost-password {
    display: flex;
    justify-content: flex-end;
    width: 551px;
    margin-top: 5px;

    /* border: solid 2px red; */
  }

  .lost-password {
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    text-align: right;
  }

  .container-login-button {
    margin-top: 50px;
  }

  .whitout-account-text {
    font-size: 18px;
    line-height: 23px;
  }

  .join {
    color: var(--rose-600);
    text-decoration: underline;
    font-weight: 400;
    line-height: 23px;
  }
</style>
