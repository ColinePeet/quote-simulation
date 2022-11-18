<script setup>
import informations from "@/utils/mocks/informations.mock.json";
import { defineProps, ref } from "vue";
import { useStore } from "vuex";

const store = useStore();
const props = defineProps(["label", "formula"]);

const formulas = ref([
  { name: "Bas", key: "small" },
  { name: "Élevé", key: "large" },
]);

if (props.formula === "deductibleFormula")
  formulas.value = [
    { name: "Bas", key: "small" },
    { name: "Moyen", key: "medium" },
    { name: "Élevé", key: "large" },
  ];

const selectFormula = function (key) {
  store.commit("SET_FORMULA", {
    name: props.formula,
    key: key,
  }); // mutation to set the formula selected
};
</script>

<template>
  <div class="flex control">
    <label>{{ props.label }}:</label>
    <div class="formula-switch">
      <div
        class="formula"
        v-for="formula in formulas"
        :key="formula"
        :class="{ active: formula.key === store.state[props.formula] }"
        @click="selectFormula(formula.key)"
      >
        <span>{{ formula.name }}</span>
      </div>
    </div>

    <div class="englobe-infos">
      <button class="info">?</button>
      <div class="description-box">
        <p v-html="informations[props.formula]"></p>
      </div>
    </div>
  </div>
</template>
