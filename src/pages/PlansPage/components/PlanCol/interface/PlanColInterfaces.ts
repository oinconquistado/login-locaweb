// Detalhes do plano
type PlanDetails = {
  title: string;
  price: string;
  indication: string;
  description: string[];
};

// beneficios do plano com destaque
type BenefitsHighlighted = {
  highlight: string;
  normal: string;
};

// Benefícios do plano
type PlanBenefits = {
  title: string;
  title_highlight?: string;
  benefits: (string | BenefitsHighlighted)[];
};

// Aplicativos suportados
type SupportedApps = {
  title: string;
  appsList: string[];
};

// Migrações
type Migrations = {
  title?: string;
  description?: string;
};

// Benefícios extras
type ExtraBenefits = {
  title: string;
  benefits: string[];
};

// Plano
type Plan = {
  [x: string]: any;
  plan_details: PlanDetails;
  plan_benefits: PlanBenefits;
  plan_support: string;
  supported_apps: SupportedApps;
  migrations?: Migrations;
  extra_benefits: ExtraBenefits;
};

// Todos os planos
type Plans = {
  [plan: string]: Plan;
};

// Exportando interfaces
export type {
  PlanDetails,
  PlanBenefits,
  SupportedApps,
  Migrations,
  ExtraBenefits,
  BenefitsHighlighted,
  Plan,
  Plans,
};
