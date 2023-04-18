import { createRouter, createWebHistory } from "vue-router";
import LoginPageVue from "../pages/LoginPage/LoginPage.vue";
import RegistrationPage from "../pages/RegistrationPage/RegistrationPage.vue";
import PlansPage from "../pages/PlansPage/PlansPage.vue";

// routes

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
        title: "Planos",
      },
    },
    {
      path: "/register/:id",
      name: "Cadastro",
      component: RegistrationPage,
      meta: {
        requiresAuth: false,
        title: "Register",
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  document.title = to.name as string;
  next();
});

export default router;
