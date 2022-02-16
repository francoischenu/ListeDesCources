<template>
  <section class="container">
    <h2>My Ingredients</h2>
    <ul>
      <li v-for="ingredient in ingredients" :key="ingredient.id">{{ ingredient.text }}</li>
    </ul>
    {{ingredients }}
  </section>
</template>

<script>
export default {
  props: ["ingredients"],
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

li {
  margin: 1rem 0;
  border: 1px solid #ccc;
}
</style>