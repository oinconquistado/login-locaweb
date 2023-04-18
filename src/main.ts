import { createApp } from "vue";
import { createPinia } from "pinia";
import "./style/base.css";

import App from "./App.vue";

createApp(App).use(createPinia()).mount("#app");
