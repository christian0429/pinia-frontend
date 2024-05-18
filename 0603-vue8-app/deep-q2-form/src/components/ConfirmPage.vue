<template>
  <div class="container mt-5">
    <h1 class="mb-4 text-success">Confirm Your Information</h1>
    <p><strong>Name:</strong> {{ name }}</p>
    <p><strong>Email:</strong> {{ email }}</p>
    <p><strong>Phone Number:</strong> {{ phone }}</p>
    <button @click="goBack" class="btn btn-secondary">Back</button>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const name = ref('');
    const email = ref('');
    const phone = ref('');
    const router = useRouter();

    onMounted(() => {
      name.value = localStorage.getItem('name');
      email.value = localStorage.getItem('email');
      phone.value = localStorage.getItem('phone');
    });

    const goBack = () => {
      router.push({name: 'FormPage'});
    };

    return {
      name,
      email,
      phone,
      goBack
    };
  }
};
</script>
