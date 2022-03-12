<template>
  <section class="container">
    <form @submit.prevent="addIngredient">
      <div>
        <label for="ingredienttext">Ingrédient</label>
        <input type="text" id="ingredienttext" v-model="enteredName" />
      </div>
      <div>
        <label for="ingredientQuantity">Quantitée</label>
        <input id="ingredientQuantity" v-model="enteredQuantity" />
      </div>
      <div>
        <label for="ingredientCategory">Catégorie</label>
        <select id="ingredientCategory" v-model="enteredCategory" class="form-select">
          <option v-for="category in categories" :value="category" :key="category.name">
            {{ category.name }}
          </option>
        </select>
      </div>
      <div v-if="enteredCategory">
        <label for="ingredientSubCategory">Sous Catégorie</label>
        <select id="ingredientSubCategory" v-model="enteredSubCategory" class="form-select">
          <option
            v-for="subCategory in enteredCategory.subCategories"
            :value="subCategory"
            :key="subCategory"
          >
            {{ subCategory }}
          </option>
        </select>
      </div>
      <p v-if="invalidInput">Please enter a valid ingredient text (non-empty).</p>
      <button>Add Ingredient</button>
    </form>
  </section>
</template>

<script>
import { ref, watch } from 'vue';

import categories from '../../assets/categories';

export default {
  emits: ['add-ingredient'],
  setup(_, context) {
    const enteredName = ref('');
    const enteredQuantity = ref('');
    const enteredCategory = ref('');
    const enteredSubCategory = ref('');
    const invalidInput = ref(false);

    watch(invalidInput, (value) => {
      if (value) {
        console.log('Analytics: Invalid Input');
      }
    });

    function addIngredient() {
      invalidInput.value = false;
      if (enteredName.value === '' || enteredQuantity.value === '') {
        invalidInput.value = true;
        return;
      }
      const name = enteredName.value;
      const quantity = enteredQuantity.value;
      const category = enteredCategory.value.name;
      const subCategory = enteredSubCategory.value;
      context.emit('add-ingredient', {
        name, quantity, category, subCategory,
      });

      // reset form
      enteredName.value = '';
      enteredQuantity.value = '';
      enteredCategory.value = '';
      enteredSubCategory.value = '';
    }

    return {
      categories,
      enteredName,
      enteredQuantity,
      enteredCategory,
      enteredSubCategory,
      invalidInput,
      addIngredient,
    };
  },
};
</script>

<style scoped>
form {
  text-align: center;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

input {
  font: inherit;
  display: block;
  width: 100%;
  margin-bottom: 0.5rem;
}

select {
  margin-bottom: 0.5rem;
}

button {
  margin-top: 1rem;
}

.container {
  padding: 2rem 7rem;
}
</style>
