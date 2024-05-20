<template>
  <div class="container mt-5">
    <h1 class="mb-4 text-primary">Login</h1>
    <form @submit.prevent="login">
      <div class="mb-3">
        <input v-model="username" type="text" class="form-control" placeholder="Username" required />
      </div>
      <div class="mb-3">
        <input v-model="password" type="password" class="form-control" placeholder="Password" required />
      </div>
      <button type="submit" class="btn btn-primary">Login</button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const username = ref('');
    const password = ref('');
    const router = useRouter();

    const login = () => {
      if (username.value === 'root' && password.value === '1234') {
        localStorage.setItem('isAuthenticated', 'true');
        router.push({ name: 'PasswordCheck' });
      } else {
        alert('Invalid credentials');
      }
    };

    return {
      username,
      password,
      login
    };
  }
};
</script>

<style scoped>
</style>
