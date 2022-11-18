<script setup>
import { useStore } from "vuex";

const store = useStore();


</script>

<template>
  <div class="coverage-deductible-prices">
    <div class="box">
      <p>Votre franchise</p>
      <span class="price">{{ store.state.quote.deductible.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") }}€</span>
    </div>
    <div class="box">
      <p>Votre Plafond de couverture</p>
      <span class="price">{{ store.state.quote.coverageCeiling.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") }}€</span>
    </div>
  </div>
</template>
