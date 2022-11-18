<script setup>
import SelectFormula from "@/components/atoms/SelectFormula";
</script>

<template>
  <div class="controls-formulas">
    <SelectFormula :label="`Franchise`" :formula="`deductibleFormula`" />
    <SelectFormula
      :label="`Couverture de plafond`"
      :formula="`coverageCeilingFormula`"
    />
  </div>
</template>
