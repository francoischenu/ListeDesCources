<template>
  <section class="container">
    <form @submit.prevent="addIngredient">
      <div>
        <label for="ingredienttext">Ingredient</label>
        <input type="text" id="ingredienttext" v-model="enteredText" />
      </div>
      <div>
        <label for="ingredientQuantity">Quantity (ex: 0.5)</label>
        <input id="ingredientQuantity" v-model="enteredQuantity" />
      </div>
      <p v-if="invalidInput">Please enter a valid ingredient text (non-empty).</p>
      <button>Add Ingredient</button>
    </form>
  </section>
</template>

<script>
import { ref, watch } from "vue";

export default {
  emits: ["add-ingredient"],
  setup(_, context) {
    const enteredText = ref("");
    const enteredQuantity = ref("");
    const invalidInput = ref(false);

    watch(invalidInput, function (val) {
      if (val) {
        console.log("Analytics: Invalid Input");
      }
    });

    function addIngredient() {
      invalidInput.value = false;
      if (enteredText.value === "" || enteredQuantity.value === "") {
        invalidInput.value = true;
        return;
      }
      const text = enteredText.value;
      const quantity = enteredQuantity.value;
      context.emit("add-ingredient", { text, quantity });
      enteredText.value = "";
      enteredQuantity.value = "";
    }

    return {
      enteredText,
      enteredQuantity,
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
</style>