import { createRouter, createWebHistory } from "vue-router"; // Importa as funções createRouter e createWebHistory do pacote vue-router
import LoginPageVue from "@/pages/LoginPage/LoginPage.vue"; // Importa o componente LoginPageVue de um caminho relativo usando um alias
import PlansPage from "@/pages/PlansPage/PlansPage.vue"; // Importa o componente PlansPage de um caminho relativo usando um alias
import RegistrationPage from "@/pages/RegistrationPage/RegistrationPage.vue"; // Importa o componente RegistrationPage de um caminho relativo usando um alias

// routes
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // Define a configuração de histórico e URL base para o roteador
  routes: [
    // Public
    {
      // Rota para a página de login
      path: "/",
      name: "Login",
      component: LoginPageVue,
      meta: {
        requiresAuth: false,
        title: "Login",
      },
    },
    {
      // Rota para a página de planos
      path: "/plans",
      name: "Plans",
      component: PlansPage,
      meta: {
        requiresAuth: false,
        title: "Planos",
      },
    },
    {
      // Rota para a página de cadastro
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
  // Define um guardião de rotas que executa antes de cada mudança de rota
  document.title = to.name as string; // Define o título do documento HTML como o nome da rota atual
  // Continua para a próxima rota
  next();
});

// Exporta a instância do roteador como padrão, para que possa ser importada em outros arquivos.
export default router;
