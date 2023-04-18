<script lang="ts">
  import { BenefitsHighlighted, Plan } from "@/types/PlanColTypes";
  import { defineComponent } from "vue";
  import Button from "@/components/button/Button.vue";

  export default defineComponent({
    // declaração dos componentes
    components: {
      Button,
    },
    props: {
      // propriedade que recebe os dados do plano
      sections: {
        type: Object as () => Plan,
        required: true,
      },
      forcedHeight: {
        type: String,
        default: "",
      },
    },
    setup() {
      return {};
    },
  });
</script>

<template>
  <!-- coluna do plano -->
  <div
    class="plan_column"
    :style="{ height: forcedHeight, maxHeight: forcedHeight }"
  >
    <!-- header -->
    <div class="plan_column--header">
      <!-- títulos da coluna do plano -->
      <div class="header-titles">
        <h3 class="plan_title">{{ sections.plan_details.title }}</h3>
        <!-- preço do plano -->
        <div class="plan_price_box">
          <h1
            :class="[
              sections.plan_details.price.toLowerCase() === 'grátis'
                ? 'plan-free'
                : 'plan-price',
            ]"
          >
            {{ sections.plan_details.price }}
          </h1>
        </div>
      </div>

      <!-- descrições no header do plano -->
      <div class="header-descriptions">
        <p
          v-for="(description, index) in sections.plan_details.description"
          :key="index"
          class="plan-short-description"
        >
          {{ description }}
        </p>
      </div>
    </div>

    <!-- indicação do plano -->
    <div class="plan_indication">
      <p class="plan_indication--text">
        {{ sections.plan_details.indication }}
      </p>
    </div>

    <!-- botão de ação -->
    <div v-if="forcedHeight === ''" class="button_container">
      <router-link :to="`/register/${sections.plan_id}`">
        <Button button_msg="Escolher esse plano" variant="cta" size="xs" />
      </router-link>
    </div>

    <!-- descrições do plano -->
    <div class="plan_benefits-items">
      <div class="plan_benefits-title">
        <h5>
          {{ sections.plan_benefits.title
          }}<span class="title_highlight">{{
            sections.plan_benefits.title_highlight
          }}</span>
        </h5>
      </div>
      <!-- benefits pode ser um string, que vai exibir um item do plano estilizado normal,
      ou pode ser um objeto com as propriedade "normal" e "highlight", caso seja um objeto,
      o valor de "highlight"  receberá uma classe de destaque (sublinhado) -->
      <template v-for="(benefit, index) in sections.plan_benefits.benefits">
        <p v-if="typeof benefit === 'string'" :key="index" class="plan_item">
          {{ benefit }}
        </p>
        <span v-else-if="typeof benefit === 'object'" :key="index + 'obj'">
          <p class="plan_item">
            <span class="plan_item--highlighted">
              {{ (benefit as BenefitsHighlighted).highlight }}
            </span>
            {{ (benefit as BenefitsHighlighted).normal }}
          </p>
        </span>
      </template>
    </div>

    <!-- suporte -->
    <div class="plan_support">
      <div class="plan_support-title">
        <h5 class="plan_support-title--text">{{ sections.plan_support }}</h5>
      </div>
    </div>

    <!-- aplicativos disponveis -->
    <div class="supported_apps">
      <div class="supported_apps-title">
        <h5 class="supported_apps-title--text">
          {{ sections.supported_apps.title }}
        </h5>
      </div>
      <div class="supported_apps-items">
        <p
          v-for="(app, index) in sections.supported_apps.appsList"
          :key="index"
          class="plan_item"
        >
          {{ app }}
        </p>
      </div>
    </div>

    <!--migrations-->
    <!-- somente serão exibidas se sections.migrations existir -->
    <div :v-if="sections.migrations" class="migration">
      <div v-if="sections.migrations" class="migration-title">
        <h5 class="migration-title--text">
          {{ sections.migrations && sections.migrations.title }}
        </h5>
      </div>
      <div class="migration-items">
        <p v-if="sections.migrations" class="plan_item">
          {{ sections.migrations.description }}
        </p>
      </div>
    </div>

    <!-- benefícios extras -->
    <div class="extra_benefits">
      <div class="extra_benefits-title">
        <h5 class="extra_benefits-title--text">
          {{ sections.extra_benefits.title }}
        </h5>
      </div>
      <div class="extra_benefits-items">
        <p
          class="plan_item"
          v-for="(extraBenefit, index) in sections.extra_benefits.benefits"
          :key="index"
        >
          {{ extraBenefit }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
  /* importa o css do componente */
  @import "./style/PlanColStyle.css";
</style>
