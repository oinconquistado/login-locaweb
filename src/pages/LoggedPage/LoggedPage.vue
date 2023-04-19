<script lang="ts">
  // bibliotecas
  import { defineComponent, ref, unref, VueElement } from "vue";
  import { queryData } from "@/services/";

  export default defineComponent({
    components: {},
    data() {
      return {
        isLoading: false,
        fetchedData: null,
      };
    },
    beforeMount() {
      const userDownloadData = new queryData(
        "userDownloadData",
        "get",
        "https://dummyjson.com/users/1"
      );
      const { isLoading, error, data } = userDownloadData.fetchData();
      this.isLoading = isLoading.value;
      this.fetchedData = data.value;
      console.log("Fetched Data:", this.fetchedData);
    },

    setup() {
      return {};
    },
  });
</script>
<template>
  <div class="logged_page">
    <div class="topbar">
      <div class="logo_container">
        <img src="@/assets/images/locaweb.svg" alt="" />
      </div>
      <div class="logout_box">
        <div>
          <div class="letter_box">
            <p class="letter_box--text">
              {{ fetchedData && (fetchedData as any).firstName.charAt(0) }}
            </p>
          </div>
          <img src="@/assets/icons/loggeduser.svg" alt="" />
        </div>
        <router-link to="/">
          <button>SAIR</button>
        </router-link>
      </div>
    </div>
    <div class="video_container">
      <div class="video_container-titles">
        <h1 class="video_container-titles--title">
          Olá, {{ fetchedData && (fetchedData as any).firstName }}!
        </h1>
        <h2 class="video_container-titles--subtitle">
          Seja bem-vindo à sua conta de hospedagem.
        </h2>
      </div>
      <div class="video">
        <iframe
          class="video--iframe"
          src="https://www.youtube.com/embed/fpa2W3YNg0Q"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
    <div class="logged_footer">
      <p class="footer-text">
        Caso tenha alguma düvida,
        <span class="footer-text-highlight">
          visite nossa central de ajuda.</span
        >
      </p>
    </div>
  </div>
</template>
<style scoped>
  /* importaçã de css */
  @import url("./style/LoggedPageStyle.css");
  /* mobile */
  @import url("./style/LoggedPageMobile.css");
</style>
