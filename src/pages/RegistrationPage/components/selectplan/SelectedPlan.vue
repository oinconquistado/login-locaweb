<script lang="ts">
  // importações
  import { defineComponent } from "vue";
  import { PlanProps } from "@/types/PlanColInterfaces";
  import { plans } from "@/data/Plans";
  import Button from "@/components/button/Button.vue";
  import PlanCol from "@/components/plancol/PlanCol.vue";
  import useRegisterStore from "@/stores/useRegisterStore";

  export default defineComponent({
    props: {
      // plano escolhido
      plan: {
        required: true,
        type: String || (Array as () => PlanProps),
      },
    },
    // declaração dos componentes
    components: {
      Button,
      PlanCol,
    },
    setup() {
      // declaração do store
      const registerStore = useRegisterStore();
      return {
        plans,
        registerStore,
      };
    },
  });
</script>

<template>
  <!-- plano escolhido -->
  <div class="plancol_container">
    <!-- container trocar de plano -->
    <div class="change_plan_container">
      <router-link :to="`/plans`">
        <Button button_msg="Trocar plano" size="xs" variant="ghost" />
      </router-link>
    </div>
    <!-- botão do plano escolhido -->
    <div class="plan_selected_container">
      <p class="plan_selected_container--text">Plano Escolhido</p>
    </div>
    <!-- coluna do plano escolhido -->

    <PlanCol
      class="plancol_component"
      :sections="plans[plan]"
      :forcedHeight="'1033px'"
    />
  </div>
</template>
<style scoped>
  /* importação do arquivo de estilos */
  @import url("./style/SelectedPlan.css");
  /*importação do arquivo de estilos do componente PlanCol Mobile*/
  @import url("./style/SelectedPlanMobile.css");
</style>
