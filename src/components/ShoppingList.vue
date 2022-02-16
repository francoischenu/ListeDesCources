<template>
    <h1>Liste de course</h1>
    <ul>
        <li v-for="ingredient in newIngredients" :key=ingredient>
            {{ ingredient.text }} {{ ingredient.quantity }}
        </li>
    </ul>
</template>
<script>
import { recipe1, recipe2, recipe3 } from '../assets/recipes'

export default({
    setup() {
        const recipes = [ recipe1, recipe2, recipe3 ];

        const rawIngredients = [];
        recipes.forEach(({ ingredients }) => {
            rawIngredients.push(ingredients);
        });
        const ingredients = rawIngredients.flat();

        const newIngredients = [];
        ingredients.forEach((ingredient) => {
            const duplicate = newIngredients.find((newIngredient) => newIngredient.text === ingredient.text);

            if (!duplicate) {
                newIngredients.push(ingredient);
            } else {
                const index = newIngredients.findIndex(({ text }) => text === ingredient.text);
                const newQuantity = Number.parseFloat(newIngredients[index].quantity) + Number.parseFloat(ingredient.quantity);
                newIngredients.splice(index, 1, {...ingredient, quantity: newQuantity});
            }
        })

        return {
            ingredients,
            newIngredients,
        }
    },
})
</script>
