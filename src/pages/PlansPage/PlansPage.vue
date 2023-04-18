<script lang="ts">
  // importação dos componentes
  import { defineComponent } from "vue";
  import PlansContainer from "./components/PlansContainer/PlansContainer.vue";
  import Header from "../../components/header/Header.vue";

  export default defineComponent({
    // declaração dos componentes
    components: {
      PlansContainer,
      Header,
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
    <Header />
    <!-- container dos planos -->
    <PlansContainer />
  </div>
</template>
