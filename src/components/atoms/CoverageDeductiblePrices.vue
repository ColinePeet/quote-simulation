<script setup>
import { useStore } from "vuex";

const store = useStore();
</script>

<template>
  <div class="englobe-coverage-deductible">
    <div class="formula">
      <p>Votre franchise</p>
      <span class="price">{{ store.state.quote.deductible }}</span>
    </div>
    <div class="formula">
      <p>Votre Plafond de couverture</p>
      <span class="price">{{ store.state.quote.coverageCeiling }}</span>
    </div>
  </div>
</template>
