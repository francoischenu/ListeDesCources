<template>
  <div id="app">
    <amplify-authenticator>
      <div>
        <MainMenu @switch-page="onSwitchPage"/>
        <MyRecipes v-if="currentPage === 'recipes'"/>
        <CourseIngredients v-else-if="currentPage === 'ingredients'"/>
        <ShoppingList v-else-if="currentPage === 'shoppingList'"/>
        <AddIngredientV2 v-else-if="currentPage === 'addIngredientV2'"/>
      </div>
    </amplify-authenticator>
  </div>
</template>

<script>
import { ref } from 'vue';

import CourseIngredients from './components/Ingredients/CourseIngredients.vue';
import MyRecipes from './components/Recipes/MyRecipes.vue';
import ShoppingList from './components/ShoppingList.vue';
import MainMenu from './components/Layout/MainMenu.vue';
import AddIngredientV2 from './components/Ingredients/AddIngredientV2.vue';

export default {
  name: 'app',
  components: {
    AddIngredientV2,
    CourseIngredients,
    MyRecipes,
    ShoppingList,
    MainMenu,
  },
  setup() {
    const currentPage = ref('shoppingList');

    const onSwitchPage = (page) => {
      currentPage.value = page;
    };

    return {
      onSwitchPage,
      currentPage,
    };
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
}
body {
  margin: 0;
}
.container {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  max-width: 25rem;
  margin: 3rem auto;
  padding: 1rem;
  border-radius: 12px;
}
button {
  background-color: #1f001f;
  border: 1px solid #1f001f;
  border-radius: 0.125rem !important;
  color: white;
  font: inherit;
  cursor: pointer;
  padding: 0.5rem 1.5rem;
  margin-right: 1rem;
}
button:hover,
button:active {
  background-color: #ffffff;
  color: #1f001f;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
:root {
  --amazonOrange: #FF9900;
  --lightAmazonOrange: #FFAC31;
  --darkAmazonOrange: #E88B01;
  --squidInk: #232F3E;
  --lightSquidInk: #31465F;
  --deepSquidInk: #152939;
  --grey: #828282;
  --lightGrey: #C4C4C4;
  --silver: #E1E4EA;
  --darkBlue: #31465F;
  --red: #DD3F5B;
  --white: #FFFFFF;
  --light-blue: #00a1c9;
  --button-color: var(--white);
  --button-background-color: var(--amazonOrange);
  --button-click: var(--darkAmazonOrange);
  --link-color: var(--amazonOrange);
  --form-color: var(--white);
  --input-color: var(--deepSquidInk);
  --input-background-color: var(--white);
  --font-family: "Amazon Ember","Helvetica Neue Light","Helvetica Neue","Helvetica" ,"Arial";
  --body-background: #F8F4F4;
  --component-width-desktop: 460px;
  --component-width-mobile: 100%;
  --color-primary: #FF9900;
  --color-primary-accent: #232F3E;
  --color-primary-highlight: #FFC46D;
  --color-background: #232F3E;
  --color-secondary: #152939;
  --color-secondary-accent: #31465F;
  --color-danger: #DD3F5B;
  --color-error: #D0021B;
  --color-accent-brown: #828282;
  --color-accent-blue: #E1E4EA;
  --gradient-blaze: linear-gradient(270deg, #FFC300 0%, #FF9000 100%);
  --color-blue: #007EB9;
  --color-purple: #527FFF;
  --color-gray: #828282;
  --color-white: #FFFFFF;
  --input-border: 1px solid #C4C4C4;
  --input-padding: 0.5em 0.5em 0.3em 1em;
  --box-shadow: 1px 1px 4px 0 rgba(0,0,0,0.15);
  --button-height: 42px;
  --interactions-conversation-height: 250px;
  --ion-color-primary: #FF9900;
  --ion-color-primary-rgb: 255,153,0;
  --ion-color-primary-contrast: #fff;
  --ion-color-primary-contrast-rgb: 255,255,255;
  --ion-color-primary-shade: #232F3E;
  --ion-color-primary-tint: #FFC46D;
}
html,
body {
  font-family: "Amazon Ember", "Helvetica", "sans-serif";
  margin: 0;
}
a {
  color: #ff9900;
}
h1 {
  font-weight: 300;
}

button:hover {
  opacity: 0.8;
}
input {
  width: 100px;
  padding: 6px;
  font-size: 14px;
  color: var(--input-color);
  background-color: var(--input-background-color);
  background-image: none;
  border: 1px solid var(--lightGrey);
  border-radius: 3px;
  box-sizing: border-box;
  margin: 10px;
}
.card-container {
  display: flex;
  justify-content: center;
  align-items: center;
  display: -webkit-flex;
  -webkit-justify-content: center;
  -webkit-align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>
