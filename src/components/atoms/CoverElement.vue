<script setup>
import { defineProps, ref, watch } from "vue";
import { useStore } from "vuex";

const store = useStore();
const props = defineProps(["element"]);
const selected = ref(props.element.selected)


watch(selected, () => {
    store.commit("SET_FORMULA", props.element.key)
})
</script>

<template>
  <div class="cover">
      {{selected}}
    <div class="head">
      <p>{{props.element.name}}</p>
      <div>
        <span class="price">{{props.element.price}}€</span>
        <input type="checkbox" v-model="selected" />
      </div>
    </div>
    <!-- <p class="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo tenetur enim asperiores cum libero similique molestiae, incidunt blanditiis iure quia sapiente voluptas obcaecati beatae veniam, excepturi neque doloremque? Ex, nihil.</p> -->
  </div>
</template>