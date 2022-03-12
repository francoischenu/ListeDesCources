<template>
  <div>
    <div v-for="recipe in recipes" :key="recipe">
      <SingleRecipe :recipe="recipe"/>
    </div>
  </div>
</template>
<script>
import recipes from '../../assets/recipes';

import SingleRecipe from './SingleRecipe.vue';

export default ({
  components: { SingleRecipe },
  setup() {
    return {
      recipes,
    };
  },
});
</script>

<style scoped>
div {
  text-align: center;
}
</style>
