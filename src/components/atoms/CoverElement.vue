<script setup>
import { defineProps, ref, watch } from "vue";
import { useStore } from "vuex";

const store = useStore();
const props = defineProps(["element"]);
const selected = ref(props.element.selected);
const showDescription = ref(false);

function selectCover() {
  selected.value = !selected.value // change selected value
}

watch(selected, () => {
  store.commit("SET_SELECTED_COVERS", props.element.key); // mutation to set the cover selected/unselected
});
</script>

<template>
  <div class="cover" :class="{ active: selected }">
    <div class="head">
      <p @click="showDescription = !showDescription">
        {{ props.element.name }}
        <i class="material-icons" >{{
          showDescription ? "arrow_drop_up" : "arrow_drop_down"
        }}</i>
      </p>
      <div @click="selectCover()" class="select">
        <span class="price">{{ props.element.price }}€</span>
        <input type="checkbox" v-model="selected" />
      </div>
    </div>
    <p
      class="description"
      v-html="props.element.description"
      v-if="showDescription"
    ></p>
    
  </div>
</template>