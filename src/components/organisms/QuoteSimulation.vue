<script setup>
import LoaderElement from "@/components/atoms/LoaderElement";
import CoverElement from "@/components/atoms/CoverElement";
import { onMounted, ref } from "vue";
import { useStore } from "vuex";

const store = useStore();

// const covers =
let loading = ref(true);

onMounted(async () => {
  store.commit("RESET_STATE")
  await store.dispatch("fetchQuote");
  loading.value = false;
});
</script>

<template>
  <div id="quote-simulation">
    <div v-if="store.state.quote">
      <div class="englobe-coverage-deductible"></div>
      <h1>Votre devis RC Pro</h1>
      <!-- {{store.state.quote}} -->
      <div class="englobe-covers">
        <h3>Couvertures de base</h3>
        <CoverElement
          v-for="cover in store.getters.covers.filter(
            (cover) => cover.type === 'main'
          )"
          :key="cover"
          :element="cover"
        />

        <h3>Couvertures additionnelles</h3>
        <CoverElement
          v-for="cover in store.getters.covers.filter(
            (cover) => cover.type === 'additional'
          )"
          :key="cover"
          :element="cover"
        />
      </div>

      <h5>total </h5>
      {{store.state.selected_covers}}
    </div>

    <LoaderElement v-if="loading" />
  </div>
</template>