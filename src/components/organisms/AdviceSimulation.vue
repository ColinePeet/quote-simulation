<script setup>
import advice from "@/utils/mocks/advice.mock.json"
</script>

<template>
  <div id="advice">
    <div class="modal">
      <h2>Notre conseil pour vous</h2>
      <div class="box">
        <div class="picture"><img src="https://images.unsplash.com/photo-1651684215020-f7a5b6610f23?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80" alt="expert picture" width="80"></div>
        <p v-html="advice.quote"></p>
        <span>John Doe, expert</span>
      </div>
    </div>
    
  </div>
</template>