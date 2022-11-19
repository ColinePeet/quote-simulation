<script setup>
import SelectFormula from "@/components/atoms/SelectFormula";
</script>

<template>
  <div class="controls-formulas">
    <SelectFormula :label="`Franchise`" :formula="`deductibleFormula`" />
    <SelectFormula
      :label="`Plafond de couverture`"
      :formula="`coverageCeilingFormula`"
    />
  </div>
</template>
