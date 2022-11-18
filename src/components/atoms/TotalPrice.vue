<script setup>
import { useStore } from "vuex";

const store = useStore();
</script>

<template>
  <div id="total">
    <h4>Votre total:</h4>
    <span class="price">{{ store.getters.totalPrice }}€</span>
  </div>
</template>