<template>
  <div>
    <ingredients-list :ingredients="ingredients"></ingredients-list>
    <add-ingredient @add-ingredient="addIngredient"></add-ingredient>
  </div>
</template>

<script>
import { ref } from 'vue';

import IngredientsList from './IngredientsList.vue';
import AddIngredient from './AddIngredient.vue';

export default {
  components: {
    IngredientsList,
    AddIngredient,
  },
  setup() {
    const ingredients = ref([]);

    function addIngredient(res) {
      console.log(res);
      const {
        name, quantity, category, subCategory,
      } = res;
      const newIngredient = {
        id: new Date().toISOString(),
        name,
        quantity,
        category,
        subCategory,
      };
      ingredients.value.push(newIngredient);
    }

    return {
      ingredients,
      addIngredient,
    };
  },
};
</script>

<style scoped>
div {
  text-align: center;
}
</style>
