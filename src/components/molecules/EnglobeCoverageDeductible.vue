<script setup>
import CoverageDeductiblePrices from "@/components/atoms/CoverageDeductiblePrices";
import SelectFormula from "@/components/atoms/SelectFormula";

import { useStore } from "vuex";

const store = useStore();
</script>

<template>
  <div class="flex">
    <SelectFormula :label="`Franchise`" :formula="`deductibleFormula`" />
    <SelectFormula
      :label="`Couverture de plafond`"
      :formula="`coverageCeilingFormula`"
    />
  </div>
  <CoverageDeductiblePrices v-if="store.state.quote" />
</template>
