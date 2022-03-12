<template>
  <div class="welcome">
    <h1>Hey, {{ username }}!</h1>
    <amplify-sign-out></amplify-sign-out>
  </div>
</template>

<script>
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import { ref } from 'vue';

export default {
  setup() {
    const username = ref('');

    // authentication state managament
    onAuthUIStateChange((state, user) => {
      // set current user and load data after login
      if (state === AuthState.SignedIn) {
        username.value = user.username;
      }
    });

    return {
      username,
    };
  },
};
</script>

<style scoped>
.welcome {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
}
.welcome h1 {
  margin-right: 40px;
}
</style>
