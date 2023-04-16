<script setup lang="ts">
  import Button from "../../components/button/Button.vue";
  import Input from "../../components/input/Input.vue";
  import { ref } from "vue";

  const email = ref("");
  const senha = ref("");
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
        <Input
          class="mainbox--input_email"
          input-type="text"
          label="E-mail"
          v-model="email"
          placeholder="Seu e-mail"
        />
        <Input
          class="mainbox--input_password"
          input-type="password"
          label="Senha"
          v-model="senha"
          placeholder="Sua senha"
        />
        <div class="forgetbox">
          <a href="#" class="forgetbox--lost_password">Esqueci minha senha</a>
        </div>
        <div class="login_container">
          <Button button_msg="fazer login" variant="cta" size="xl" />
        </div>
      </div>
      <div>
        <p class="whitout_account--text">
          Ainda não tem conta?
          <a href="#" class="whitout_account--join">Cadastre-se</a>
        </p>
      </div>
    </div>
  </div>
</template>
<style>
  @import "./style/LoginPage.css";
</style>
