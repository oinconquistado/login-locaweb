import { Plans } from "../../PlanCol/interface/PlanColInterfaces";

export const plans: Plans = {
  plan1: {
    plan_details: {
      title: "Hospedagem 1",
      price: "Grátis",
      indication: "Ideal para quem está começando.",
      description: ["você não paga nada para usar", "sem taxa de setup"],
    },
    plan_benefits: {
      title: "Seu site em servidores",
      title_highlight: " nos Estados Unidos",
      benefits: [
        "Servidores em nossos data center americanos;",
        "ASP, ASP.NET 2.0/3.0/3.5/ e 4.0/4.5/4.5.1/4.5.2 (medium trust) ou PHP 5.3, 5.4, 5.5, 5.6 e 7.0;",
        "1 usuário de FTP para upload ou download;",
        "1 conta de e-mail profissional;",
        { highlight: "1 subdomínio", normal: " gratuito;" },
      ],
    },
    plan_support: "Suporte 24 horas, 7 dias por semana",
    supported_apps: {
      title: "Aplicativos disponíveis",
      appsList: ["Wordpress;", "Drupal;", "entre outros..."],
    },
    extra_benefits: {
      title: "Você ainda tem",
      benefits: [
        "Webmail RoundCube;",
        "AntiSpam;",
        "Painel de gerenciamento de DNS;",
        "Painel de controle web;",
        "Configuraqöes de PHP personalizáveis;",
        "Certificado SSL Grátis;",
        "Transferéncia ilimitada.",
      ],
    },
  },
  plan2: {
    plan_details: {
      title: "Hospedagem 1",
      price: "499",
      indication: "Ideal para site com mais de 30k de visitas",
      description: ["cobrado mensalmente", "sem taxa de setup"],
    },
    plan_benefits: {
      title: "Seu site em servidores",
      title_highlight: " no Brasil",
      benefits: [
        "Servidores em nosso data center em São Paulo;",
        "ASP, ASP.NET 2.0/3.0/3.5/ e 4.0/4.5/4.5.1/4.5.2 (medium trust) ou PHP 5.3, 5.4, 5.5, 5.6 e 7.0;",
        "10 usuários de FTP para upload ou download;",
        "30 contas de e-mails profissionais;",
        { highlight: "10 subdomínios", normal: " gratuitos;" },
      ],
    },
    plan_support: "Suporte 24 horas, 7 dias por semana",
    supported_apps: {
      title: "Aplicativos disponíveis",
      appsList: ["Wordpress;", "Drupal;", "entre outros..."],
    },
    migrations: {
      title: "Migração gratuita",
      description: "Migramos todos seus sites para nossos servidores;",
    },
    extra_benefits: {
      title: "Você ainda tem",
      benefits: [
        "Webmail RoundCube;",
        "AntiSpam;",
        "Painel de gerenciamento de DNS;",
        "Painel de controle web;",
        "Configuraqöes de PHP personalizáveis;",
        "Certificado SSL Grátis;",
        "Transferéncia ilimitada.",
      ],
    },
  },
  plan3: {
    plan_details: {
      title: "Hospedagem 1",
      price: "999",
      indication: "Ideal para quem está começando.",
      description: ["você não paga nada para usar", "sem taxa de setup"],
    },
    plan_benefits: {
      title: "Seu site em servidores",
      title_highlight: " no Brasil",
      benefits: [
        "Servidores em nossos data center americanos;",
        "ASP, ASP.NET 2.0/3.0/3.5/ e 4.0/4.5/4.5.1/4.5.2 (medium trust) ou PHP 5.3, 5.4, 5.5, 5.6 e 7.0;",
        {
          highlight: "ilimitados",
          normal: "   usuários de FTP para upload ou download;",
        },
        {
          highlight: "ilimitadas",
          normal: "  contas de  e-mails profissionais;",
        },
        { highlight: "50 subdomínios", normal: " gratuitos;" },
      ],
    },
    plan_support: "Suporte 24 horas, 7 dias por semana",
    supported_apps: {
      title: "Aplicativos disponíveis",
      appsList: ["Wordpress;", "Drupal;", "entre outros..."],
    },
    migrations: {
      title: "Migração gratuita",
      description: "Migramos todos seus sites para nossos servidores;",
    },
    extra_benefits: {
      title: "Você ainda tem",
      benefits: [
        "Webmail RoundCube;",
        "1 subdomínio gratuito;",
        "AntiSpam;",
        "Painel de gerenciamento de DNS;",
        "Painel de controle web;",
        "Configuraqöes de PHP personalizáveis;",
        "Certificado SSL Grátis;",
        "Transferéncia ilimitada.",
      ],
    },
  },
};
