<template>
  <div class="container mt-5">
    <h1 class="mb-4 text-primary">Insurance Form</h1>
    <form @submit.prevent="submitForm">
      <div class="mb-3">
        <label for="name" class="form-label">Name</label>
        <input v-model="formData.name" type="text" class="form-control" id="name" placeholder="Enter your name" required />
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input v-model="formData.email" type="email" class="form-control" id="email" placeholder="Enter your email" required />
      </div>
      <div class="mb-3">
        <label for="phone" class="form-label">Phone Number</label>
        <input v-model="formData.phone" type="tel" class="form-control" id="phone" placeholder="Enter your phone number" required />
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
  name: 'FormPage',
  data() {
    return {
      formData: {
        name: '',
        email: '',
        phone: ''
      }
    };
  },
  setup() {
    const router = useRouter();

    const submitForm = () => {
      router.push({ name: 'ConfirmPage', query: { ...formData } });
    };

    return {
      formData,
      submitForm
    };
  }
};
</script>
