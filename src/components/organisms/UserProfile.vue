<script setup>
import user from "@/utils/mocks/user.mock.json";

//* todo later : dynamic form
</script>

<template>
  <div id="user-profile">
    <h2>Votre profil</h2>

    <form>
      <label>Vos revenus annuels:</label>
      <input type="text" v-model="user.annualRevenue" disabled />

      <label>Le numéro de votre entreprise:</label>
      <input type="text" v-model="user.enterpriseNumber" disabled />

      <label>Le nom de votre entreprise:</label>
      <input type="text" v-model="user.legalName" disabled />

      <label>Êtes-vous une personne physique ?</label>
      <div class="checkbox-field">
        <input
          type="radio"
          id="true"
          value="true"
          v-model="user.naturalPerson"
        />
        <label for="true">Oui</label>
      </div>
      <div class="checkbox-field">
        <input
          type="radio"
          id="false"
          value="false"
          v-model="user.naturalPerson"
          disabled
        />
        <label for="false">Non, je suis une personne morale</label>
      </div>

      <label>Vos codes NACE-BEL:</label>
      <div class="flex">
        <div v-for="code in user.nacebelCodes" :key="code" class="field">{{code}}</div>
      </div>
    </form>
  </div>
</template>