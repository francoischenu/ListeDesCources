<template>
    <button @click="onToogleIngredients()">Show ingredients</button>
    <div v-for="{ name, ingredients } in recipes" :key="name">
        <h1>{{ name }}</h1>
        <ul v-show="showIngredients">
            <li v-for="ingredient in ingredients" :key=ingredient>
                {{ ingredient.text }} {{ ingredient.quantity }}
            </li>
        </ul>
    </div>
</template>
<script>
import { ref } from '@vue/reactivity';
import { recipe1, recipe2 } from '../assets/recipes'

export default({
    setup() {
        const recipes = { recipe1, recipe2 };
        let showIngredients = ref(false);

        const onToogleIngredients = () => {
            showIngredients.value = !showIngredients.value;
        }

        return {
            recipes,
            showIngredients,
            onToogleIngredients,
        }
    },
})
</script>
