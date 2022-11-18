<script setup>
import LoaderElement from "@/components/atoms/LoaderElement";
import EnglobeCovers from "@/components/molecules/EnglobeCovers";
import EnglobeCoverageDeductible from "@/components/molecules/EnglobeCoverageDeductible";
import { onMounted, ref } from "vue";
import { useStore } from "vuex";

const store = useStore();

let loading = ref(true);

onMounted(async () => {
  store.commit("RESET_STATE");
  await store.dispatch("fetchQuote");
  loading.value = false;
});
</script>

<template>
  <div id="quote-simulation">
    <EnglobeCoverageDeductible />

    <div v-if="store.state.quote">
      
      <h1>Votre devis RC Pro</h1>
      <EnglobeCovers />

      <h5>total : {{ store.getters.totalPrice }}€</h5>
      {{ store.state.selected_covers }}
    </div>

    <LoaderElement v-if="loading" />
  </div>
</template>