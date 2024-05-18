<template>
  <div class="container mt-5">
    <h1 class="mb-4 text-success">Confirm Your Information</h1>
    <p><strong>Name:</strong> {{ formData.name }}</p>
    <p><strong>Email:</strong> {{ formData.email }}</p>
    <p><strong>Phone Number:</strong> {{ formData.phone }}</p>
    <router-link to="/" class="btn btn-secondary">Back</router-link>
  </div>
</template>

<script>
export default {
  name: 'ConfirmPage',
  props: {
    formData: Object
  }
};
</script>
