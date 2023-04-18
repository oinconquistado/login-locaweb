<script lang="ts">
  // importações
  import { defineComponent } from "vue";
  import { plans } from "@/data/Plans";
  import PlanCol from "@/components/plancol/PlanCol.vue";

  export default defineComponent({
    // declaração dos componentes
    components: {
      PlanCol,
    },
    setup() {
      return {
        plans,
      };
    },
  });
</script>

<template>
  <!-- container dos planos -->
  <div class="container_plans">
    <!-- botão mehor opção -->
    <div>
      <div class="best_plan">
        <p class="best_plan--text">Mais usado</p>
      </div>
    </div>

    <!-- container dos planos -->
    <div class="plans_columns">
      <PlanCol v-for="(plan, index) in plans" :key="index" :sections="plan" />
    </div>
  </div>
</template>

<style scoped>
  /* importação do css */
  @import url("./style/PlansContainer.css");
  /* importação do css mobile */
  @import url("./style/PlansContainerMobile.css");
</style>
