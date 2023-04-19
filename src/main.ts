import { createApp } from "vue";
import { createPinia } from "pinia";
import "@/style/base.css";
import router from "@/router/";
import { VueQueryPlugin } from "@tanstack/vue-query";

import App from "@/App.vue";

createApp(App).use(VueQueryPlugin).use(createPinia()).use(router).mount("#app");
