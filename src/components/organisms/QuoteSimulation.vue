<script setup>
import user from "@/utils/mocks/user.mock.json";
import LoaderElement from "@/components/atoms/LoaderElement";
import ErrorRequest from "@/components/atoms/ErrorRequest";
import EnglobeCovers from "@/components/molecules/EnglobeCovers";
import CoverageDeductiblePrices from "@/components/atoms/CoverageDeductiblePrices";
import TotalPrice from "@/components/atoms/TotalPrice";
import { onMounted, ref, watch, computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

let loading = ref(true);
let error = ref(false);

const deductibleFormula = computed(() => {
  return store.state.deductibleFormula; // value computed used for the watch
});
const coverageCeilingFormula = computed(() => {
  return store.state.coverageCeilingFormula; // value computed used for the watch
});



//* fetch quote REQUEST 
const fetchQuote = async function () {
  let payload = { ...user }; // copy of user
  
  if (deductibleFormula.value)
    payload.deductibleFormula = deductibleFormula.value; // add deductible formula to payload if a value is set
  if (coverageCeilingFormula.value)
    payload.coverageCeilingFormula = coverageCeilingFormula.value; // add coverage ceiling formula to payload if a value is set


  loading.value = true; // reset loader
  error.value = false; // reset error
  store.commit("RESET_STATE"); // reset state

  const response = await store.dispatch("fetchQuote", payload); // request
  loading.value = false;

  if (response.error) error.value = true; // handling error on request 
};


//* request if coverage ceiling formula has change
watch(deductibleFormula, () => {
  fetchQuote(); 
});


//* request if coverage ceiling formula has change
watch(coverageCeilingFormula, () => {
  fetchQuote();
});


//* first request when component is mounted
onMounted(() => {
  fetchQuote();
});
</script>

<template>
  <div id="quote-simulation">
    <div v-if="store.state.quote" class="englobe-quote">
      <CoverageDeductiblePrices />

      <h1>Votre devis RC Pro</h1>
      <EnglobeCovers />

      <TotalPrice />

      <button>Me souscrire à l'assurance<i class="material-icons">play_arrow</i></button>
    </div>

    <LoaderElement v-if="loading" />
    <ErrorRequest v-if="error" />
  </div>
</template>