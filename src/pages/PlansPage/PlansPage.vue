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
    mounted() {
      window.scrollTo(0, 0);
    },
  });
</script>

<template>
  <!-- container principal -->
  <div class="container__logo-plans">
    <!-- header principal -->
    <Header subtitle="hospedar o seu site" cta="Escolha o seu plano" />
    <!-- container dos planos -->
    <PlansContainer />
  </div>
</template>
