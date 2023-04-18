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
        requiresAuth: false,
        title: "Login",
      },
    },
    {
      path: "/plans",
      name: "Plans",
      component: PlansPage,
      meta: {
        requiresAuth: false,
        title: "Plans",
      },
    },
    {
      path: "/register/:id",
      name: "Register",
      component: RegistrationPage,
      meta: {
        requiresAuth: false,
        title: "Register",
      },
    },
  ],
});

export default router;
