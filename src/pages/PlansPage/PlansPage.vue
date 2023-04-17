<script lang="ts">
  import { defineComponent } from "vue";
  import PlansHeader from "./components/PlansHeader/PlansHeader.vue";
  import PlansContainer from "./components/PlansContainer/PlansContainer.vue";

  export default defineComponent({
    // declaração dos componentes
    components: {
      PlansHeader,
      PlansContainer,
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
    <PlansContainer />
  </div>
</template>
