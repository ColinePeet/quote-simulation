<script setup>
import CoverElement from "@/components/atoms/CoverElement";
import { useStore } from "vuex";

const store = useStore();
</script>

<template>
  <div class="englobe-covers">
    <h4>Couvertures de base</h4>
    <CoverElement
      v-for="cover in store.getters.covers.filter(
        (cover) => cover.type === 'main'
      )"
      :key="cover"
      :element="cover"
    />

    <h4>Couvertures additionnelles</h4>
    <CoverElement
      v-for="cover in store.getters.covers.filter(
        (cover) => cover.type === 'additional'
      )"
      :key="cover"
      :element="cover"
    />
  </div>
</template>