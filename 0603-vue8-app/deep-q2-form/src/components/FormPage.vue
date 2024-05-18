<template>
  <div class="container mt-5">
    <h1 class="mb-4 text-primary">Insurance Form</h1>
    <form @submit.prevent="submitForm">
      <div class="mb-3">
        <label for="name" class="form-label">Name</label>
        <input v-model="name" type="text" class="form-control" id="name" placeholder="Enter your name" required />
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input v-model="email" type="email" class="form-control" id="email" placeholder="Enter your email" required />
      </div>
      <div class="mb-3">
        <label for="phone" class="form-label">Phone Number</label>
        <input v-model="phone" type="tel" class="form-control" id="phone" placeholder="Enter your phone number" required />
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const name = ref('');
    const email = ref('');
    const phone = ref('');
    const router = useRouter();

    const submitForm = () => {
      localStorage.setItem('name', name.value);
      localStorage.setItem('email', email.value);
      localStorage.setItem('phone', phone.value);
      router.push({ name: 'ConfirmPage' });
    };

    return {
      name,
      email,
      phone,
      submitForm
    };
  }
};
</script>
