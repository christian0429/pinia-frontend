<template>
  <div class="container mt-5">
    <h1 class="mb-4 text-warning">Password Check</h1>
    <form @submit.prevent="checkPassword">
      <div class="mb-3">
        <input v-model="password" type="password" class="form-control" placeholder="Enter password again" required />
      </div>
      <button type="submit" class="btn btn-warning">Check Password</button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const password = ref('');
    const router = useRouter();

    const checkPassword = () => {
      if (password.value === 'password') {
        router.push({ name: 'AccountDetails' });
      } else {
        alert('Incorrect password');
      }
    };

    return {
      password,
      checkPassword
    };
  }
};
</script>

<style scoped>
/* 스타일링은 필요에 따라 추가하세요 */
</style>
