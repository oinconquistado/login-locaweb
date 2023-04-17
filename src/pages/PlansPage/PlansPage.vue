<script lang="ts">
  import { defineComponent } from "vue";
  import PlansHeader from "./components/PlansHeader/PlansHeader.vue";
  import PlanContainer from "./components/PlanContainer/PlanContainer.vue";

  export default defineComponent({
    // declaração dos componentes
    components: {
      PlansHeader,
      PlanContainer,
    },
    setup() {
      return {};
    },
  });
</script>

<template>
  <div class="container__logo-plans">
    <!-- header principal -->
    <PlansHeader />
    <!-- container dos planos -->
    <PlanContainer />
  </div>
</template>
