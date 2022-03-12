<template>
  <div class="form-body">
    <form v-on:submit.prevent autocomplete="off">
      <div>
        <label>Name: </label>
        <input v-model='form.name' class='input' autocomplete="off" />
      </div>
      <div>
        <label>Description: </label>
        <input v-model='form.description' class='input' autocomplete="off" />
      </div>
      <div>
        <label>City: </label>
        <input v-model='form.city' class='input' autocomplete="off" />
      </div>
      <button @click='onAddRestaurant' class='button'>Create</button>
      <button @click='getData' class='button'>Refresh</button>
    </form>
    <div class="app-body">
      <div v-if="loading" class="loading">Loading...</div>
      <div class="card-container" v-if="!loading">
        <div class="card" v-for="restaurant of restaurants" :key="restaurant.id">
          <div class="remove">
            <button @click='onRemoveRestaurant(restaurant)' class='button'>Delete</button>
          </div>
          <div class="name">{{ restaurant.city }}</div>
          <div class="price">{{ restaurant.name }}</div>
          <div class="symbol">{{ restaurant.description }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import { API, graphqlOperation } from 'aws-amplify';
import { ref } from 'vue';

import { onCreateRestaurant, onDeleteRestaurant } from '../../graphql/subscriptions';
import { createRestaurant, deleteRestaurant } from '../../graphql/mutations';
import { listRestaurants } from '../../graphql/queries';

export default {
  name: 'AddIngredientV2',
  setup() {
    const restaurants = ref([]);
    const form = ref({});
    const loading = ref(true);

    const getData = async () => {
      try {
        loading.value = true;
        const response = await API.graphql(graphqlOperation(listRestaurants));
        restaurants.value = response.data.listRestaurants.items;
      } catch (error) {
        console.log('Error loading restaurants...', error);
      } finally {
        loading.value = false;
      }
    };

    // authentication state managament
    onAuthUIStateChange((state, user) => {
      // set current user and load data after login
      console.log(state, user);
      if (state === AuthState.SignedIn) {
        getData();
      }
    });
    // Subscribe to changes
    API.graphql(graphqlOperation(onCreateRestaurant))
      .subscribe((sourceData) => {
        const newRestaurant = sourceData.value.data.onCreateRestaurant;
        if (newRestaurant) {
          // skip our own mutations and duplicates
          if (restaurants.value.some((r) => r.id === newRestaurant.id)) return;
          this.restaurants = [newRestaurant, ...this.restaurants];
        }
      });
    API.graphql(graphqlOperation(onDeleteRestaurant))
      .subscribe((sourceData) => {
        const deletedRestaurant = sourceData.value.data.onDeleteRestaurant;
        if (deletedRestaurant) {
          restaurants.value = restaurants.value.filter((r) => r.id !== deletedRestaurant.id);
        }
      });

    const onAddRestaurant = async () => {
      const { name, description, city } = form.value;
      if (!name || !description || !city) return;

      const restaurant = {
        name, description, city,
      };
      try {
        const res = await API.graphql(graphqlOperation(createRestaurant, { input: restaurant }));
        console.log('Item created!');
        restaurants.value = [...restaurants.value, res.data.createRestaurant];
        form.value = { name: '', description: '', city: '' };
      } catch (error) {
        console.log('Error creating restaurant...', error);
      }
    };

    const onRemoveRestaurant = async (restaurant) => {
      if (restaurant) {
        try {
          const { id } = restaurant;
          await API.graphql(graphqlOperation(deleteRestaurant, { input: { id } }));
          console.log('Item deleted!');
          restaurants.value = restaurants.value.filter((r) => r.id !== restaurant.id);
        } catch (error) {
          console.log('Error deleting restaurant...', error);
        }
      }
    };

    const sortedRestaurants = () => {
      const newRestaurants = [...restaurants.value];
      return newRestaurants.sort((a, b) => a.name.localeCompare(b.name));
    };

    return {
      sortedRestaurants,
      onAddRestaurant,
      onRemoveRestaurant,
      getData,
      restaurants,
      form,
      loading,
    };
  },
};
</script>

<style scoped>
.app-body {
  width: 60%;
  margin: 0 auto;
  text-align: center;
}.form-body {
  display: flex;
  justify-content: center;
  align-items: center;
  display: -webkit-flex;
  -webkit-justify-content: center;
  -webkit-align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
}
.form-body button {
  background-color: #ff9900;
  font-size: 14px;
  color: white;
  text-transform: uppercase;
  padding: 1em;
  border: none;
  cursor: pointer;
  margin: 10px;
}
.card {
  background-color: white;
  border-radius: 3px;
  box-shadow: 0 2px 8px 0 rgba(0,0,0,0.25);
  min-width: 180px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  /* height: 100%; */
  transition: transform .2s ease, box-shadow .2s ease;
  backface-visibility: hidden;
  margin: 25px;
}
.card:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 14px 0 rgba(0,0,0,0.15);
}
.name {
  font-style: italic;
}
.symbol {
  color: #999;
}
.price, .loading {
  font-weight: bold;
  font-size: 2em;
  line-height: 0.9;
  margin: 10px;
}
.loading {
  margin-top: 35px;
}
/* remove blue highlight */
textarea:hover,
input:hover:not([type="checkbox"]),
textarea:active,
input:active:not([type="checkbox"]),
textarea:focus,
input:focus:not([type="checkbox"]),
button:focus,
button:active,
button:hover,
label:focus,
.btn:active,
.btn.active,
select
{
  outline:0px !important;
  -webkit-appearance:none;
  box-shadow: none !important;
}
textarea {
  background-color: #eee;
  border-radius: 0 4px 4px 0;
}
textarea {
  border-radius: 4px 0 0 4px;
  border-right: 10px solid #dbdbdb;
}
.remove {
  top: -15px;
  position: relative;
  align-self: flex-end;
}
.remove button {
  background-color: #DD3F5B;
  color: white;
  border-radius: 31px;
  border: 0px;
}
</style>
