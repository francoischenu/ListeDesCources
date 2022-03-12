<template>
  <div>
    <h1>Liste de course</h1>
    <div class="row">
      <div class="col-lg-4 col-s-12" v-for="category in categories" :key="category">
        <div class="category_card">
          <h2>{{ category.name }}</h2>
          <div v-for="subCategory in category.subCategories" :key=subCategory class="">
            <div v-if="subCategory.length" class="sub-category_card">
              <h3>{{ subCategory[0]?.subCategory }}</h3>
              <div v-for="ingredient in subCategory" :key=ingredient class="ingredient_row">
                <div class="ingredient-name">{{ ingredient.name }}</div>
                <div class="ingredient-quantity">{{ ingredient.quantity }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import recipes from '../assets/recipes';

export default ({
  setup() {
    const rawIngredients = [];
    recipes.forEach(({ ingredients }) => {
      rawIngredients.push(ingredients);
    });
    const ingredients = rawIngredients.flat();

    const newIngredients = [];
    ingredients.forEach((ingredient) => {
      const duplicate = newIngredients
        .find((newIngredient) => newIngredient.name === ingredient.name);

      if (!duplicate) {
        newIngredients.push(ingredient);
      } else {
        const index = newIngredients.findIndex(({ name }) => name === ingredient.name);
        const newQuantity = Number
          .parseFloat(newIngredients[index].quantity) + Number.parseFloat(ingredient.quantity);
        newIngredients.splice(index, 1, { ...ingredient, quantity: newQuantity });
      }
    });

    // Catégories
    const vegetables = newIngredients.filter(({ category }) => category === 'Fruits et légumes');
    const fresh = newIngredients.filter(({ category }) => category === 'Frais');
    const dry = newIngredients.filter(({ category }) => category === 'Epicerie');

    // Sous catégories
    // Fruits et légumes
    const vegetable = vegetables.filter(({ subCategory }) => subCategory === 'légume');
    const fruits = vegetables.filter(({ subCategory }) => subCategory === 'fruit');
    const herbs = vegetables.filter(({ subCategory }) => subCategory === 'herbe');
    // Rayon Frais
    const meats = fresh.filter(({ subCategory }) => subCategory === 'viande');
    const fish = fresh.filter(({ subCategory }) => subCategory === 'poisson');
    const cheeses = fresh.filter(({ subCategory }) => subCategory === 'fromage');
    // Epicerie
    const pasta = dry.filter(({ subCategory }) => subCategory === 'féculent');
    const salsas = dry.filter(({ subCategory }) => subCategory === 'sauces');
    const oils = dry.filter(({ subCategory }) => subCategory === 'huile');
    const asian = dry.filter(({ subCategory }) => subCategory === 'asiatique');
    const spices = dry.filter(({ subCategory }) => subCategory === 'épice');
    const bio = dry.filter(({ subCategory }) => subCategory === 'bio');

    // ne pas afficher les listes vides

    const categories = [
      {
        name: 'Fruits et légumes',
        subCategories: [
          vegetable, fruits, herbs,
        ],
      },
      {
        name: 'Frais',
        subCategories: [
          meats, fish, cheeses,
        ],
      },
      {
        name: 'Epicerie',
        subCategories: [
          pasta, salsas, oils, asian, spices, bio,
        ],
      },
    ];

    return {
      categories,
    };
  },
});
</script>

<style scoped>
h1, h2, div {
  text-align: center;
}

h1, h2 {
  margin-bottom: 2rem;
}

.category_card {
  border: #1f001f solid 1px;
  margin: 2rem;
  padding: 2rem 0;
}

.sub-category_card {
  background-color: #f5f5f5;
  margin: 1rem;
  padding: 1rem 0;
}

.ingredient_row {
  margin: 0 2rem;
  display: flex;
  justify-content: space-between;
}

.ingredient-name, .ingredient-quantity {
  display: flex;
}
</style>
