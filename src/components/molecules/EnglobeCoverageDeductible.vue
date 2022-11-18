<script setup>
import CoverageDeductiblePrices from "@/components/atoms/CoverageDeductiblePrices";
import { useStore } from "vuex";

const store = useStore();
</script>

<template>
  <CoverageDeductiblePrices v-if="store.state.quote" />
</template>
