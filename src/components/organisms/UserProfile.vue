<script setup>
import user from "@/utils/mocks/user.mock.json";
import {ref} from 'vue'

let showProfile = ref(true)
//* todo later : dynamic form
</script>

<template>
  <div id="user-profile" :class="{ 'closed' : !showProfile}">
    <h2>Votre profil</h2>

    <form v-if="showProfile">
      <div>
        <label>Vos revenus annuels:</label>
        <input type="text" v-model="user.annualRevenue" disabled />
      </div>

      <div>
        <label>Le numéro de votre entreprise:</label>
        <input type="text" v-model="user.enterpriseNumber" disabled />
      </div>

      <div>
        <label>Le nom de votre entreprise:</label>
        <input type="text" v-model="user.legalName" disabled />
      </div>

      <div>
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
      </div>

      <div>
        <label>Vos codes NACE-BEL:</label>
        <div class="flex">
          <div v-for="code in user.nacebelCodes" :key="code" class="field">
            {{ code }}
          </div>
        </div>
      </div>

      <button disabled><i class="material-icons">play_arrow</i> Modifier mes informations</button>
    </form>

    <button class="toggle-profile" @click="showProfile = !showProfile"><i class="material-icons">{{showProfile ? 'chevron_left' : 'chevron_right'}}</i></button>
  </div>
</template>