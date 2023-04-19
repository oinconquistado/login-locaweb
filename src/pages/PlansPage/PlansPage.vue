<script lang="ts">
  // importação dos componentes
  import { defineComponent } from "vue";
  import { Header } from "@/components";
  import { PlansContainer } from "@/pages/components";

  export default defineComponent({
    // declaração dos componentes
    components: {
      Header,
      PlansContainer,
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
