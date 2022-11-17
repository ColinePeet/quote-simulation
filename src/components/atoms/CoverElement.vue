<script setup>
import { defineProps } from "vue";
const props = defineProps(["element"]);

console.log(props)
</script>

<template>
  <div class="cover">
    <div class="head">
      <p>{{props.element.name}}</p>
      <div>
        <span class="price">{{props.element.price}}€</span>
        <input type="checkbox" :checked="props.element.selected" />
      </div>
    </div>
    <!-- <p class="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo tenetur enim asperiores cum libero similique molestiae, incidunt blanditiis iure quia sapiente voluptas obcaecati beatae veniam, excepturi neque doloremque? Ex, nihil.</p> -->
  </div>
</template>