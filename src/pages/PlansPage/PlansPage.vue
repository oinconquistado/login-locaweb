<script lang="ts">
  // importação dos componentes
  import { defineComponent } from "vue";
  import PlansContainer from "./components/PlansContainer/PlansContainer.vue";
  import PlansHeader from "./components/PlansHeader/PlansHeader.vue";

  export default defineComponent({
    // declaração dos componentes
    components: {
      PlansContainer,
      PlansHeader,
    },
    setup() {
      return {};
    },
  });
</script>

<template>
  <!-- container principal -->
  <div class="container__logo-plans">
    <!-- header principal -->
    <PlansHeader />
    <!-- container dos planos -->
    <PlansContainer />
  </div>
</template>
