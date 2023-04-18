import { createRouter, createWebHistory } from "vue-router";
import LoginPageVue from "../pages/LoginPage/LoginPage.vue";
import RegistrationPage from "../pages/RegistrationPage/RegistrationPage.vue";
import PlansPage from "../pages/PlansPage/PlansPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // Public
    {
      path: "/",
      name: "Login",
      component: LoginPageVue,
      meta: {
        title: "Login",
      },
    },
    {
      path: "/plans",
      name: "Plans",
      component: PlansPage,
      meta: { title: "Plans" },
    },
    {
      path: "/register/:id",
      name: "Register",
      component: RegistrationPage,
      meta: {
        title: "Register",
      },
    },
  ],
});

export default router;
