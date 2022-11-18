<script setup>
import user from "@/utils/mocks/user.mock.json";
import LoaderElement from "@/components/atoms/LoaderElement";
import ErrorRequest from "@/components/atoms/ErrorRequest";
import EnglobeCovers from "@/components/molecules/EnglobeCovers";
import EnglobeCoverageDeductible from "@/components/molecules/EnglobeCoverageDeductible";
import { onMounted, ref, watch, computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

let loading = ref(true);
let error = ref(false);

const deductibleFormula = computed(() => {
  return store.state.deductibleFormula;
});
const coverageCeilingFormula = computed(() => {
  return store.state.coverageCeilingFormula;
});

watch(deductibleFormula, () => {
  fetchQuote();
});
watch(coverageCeilingFormula, () => {
  fetchQuote();
});

const fetchQuote = async function () {
  let payload = { ...user };
  console.log(deductibleFormula.value);
  if (deductibleFormula.value)
    payload.deductibleFormula = deductibleFormula.value;
  if (coverageCeilingFormula.value)
    payload.coverageCeilingFormula = coverageCeilingFormula.value;

  loading.value = true;
  error.value = false;
  store.commit("RESET_STATE");

  const response = await store.dispatch("fetchQuote", payload);

  if (response.error) error.value = true;
  loading.value = false;
};

onMounted(() => {
  fetchQuote();
});
</script>

<template>
  <div id="quote-simulation">
    <EnglobeCoverageDeductible />

    <div v-if="store.state.quote" class="englobe-quote">
      <h1>Votre devis RC Pro</h1>
      <EnglobeCovers />

      <div id="total">
        <h4>Votre total:</h4>
        <span class="price">{{ store.getters.totalPrice }}€</span>
      </div>

      <button>
        Me souscrire à l'assurance
        <i class="material-icons">play_arrow
</i>
      </button>
    </div>

    <LoaderElement v-if="loading" />
    <ErrorRequest v-if="error" />
  </div>
</template>