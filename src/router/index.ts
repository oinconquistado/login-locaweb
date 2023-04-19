import { createRouter, createWebHistory } from "vue-router"; // Importa as funções createRouter e createWebHistory do pacote vue-router
import { LoginPage, PlansPage, RegistrationPage, LoggedPage } from "@/pages"; // Importa as páginas de Login, Planos e Cadastro

// routes
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // Define a configuração de histórico e URL base para o roteador
  routes: [
    {
      // Rota para a página de login
      path: "/",
      name: "Login",
      component: LoginPage,
      meta: {
        requiresAuth: false,
        title: "Login",
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
      // Rota para a página logada
      path: "/logged",
      name: "Logged",
      component: LoggedPage,
      meta: {
        requiresAuth: true,
        title: "Logged",
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
