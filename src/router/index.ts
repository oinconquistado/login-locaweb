import { createRouter, createWebHistory } from "vue-router";
import LoginPageVue from "../pages/LoginPage/LoginPage.vue";
import RegistrationPage from "../pages/RegistrationPage/RegistrationPage.vue";
import PlansPage from "../pages/PlansPage/PlansPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // Public
    { path: "/", name: "Login", component: LoginPageVue },
    { path: "/plans", name: "Plans", component: PlansPage },
    { path: "/register/:id", name: "Register", component: RegistrationPage },
  ],
});

export default router;
