// Aplicativos suportados
type SupportedApps = {
  appsList: string[];
  title: string;
};

// beneficios do plano com destaque
type BenefitsHighlighted = {
  highlight: string;
  normal: string;
};

// Benefícios do plano
type PlanBenefits = {
  benefits: (string | BenefitsHighlighted)[];
  title: string;
  title_highlight?: string;
};

// Benefícios extras
type ExtraBenefits = {
  benefits: string[];
  title: string;
};

// Detalhes do plano
type PlanDetails = {
  description: string[];
  indication: string;
  price: string;
  title: string;
};

// Migrações
type Migrations = {
  description?: string;
  title?: string;
};

// Plano
type Plan = {
  [x: string]: any;
  extra_benefits: ExtraBenefits;
  migrations?: Migrations;
  plan_benefits: PlanBenefits;
  plan_details: PlanDetails;
  plan_support: string;
  supported_apps: SupportedApps;
};

// Todos os planos
type Plans = {
  [plan: string]: Plan;
};

// Exportando interfaces
export type {
  BenefitsHighlighted,
  ExtraBenefits,
  Migrations,
  Plan,
  PlanBenefits,
  PlanDetails,
  Plans,
  SupportedApps,
};
