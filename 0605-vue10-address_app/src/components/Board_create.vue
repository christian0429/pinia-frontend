<template>
  <div>
    <h1>Create Post</h1>
    <form @submit.prevent="createNewPost">
      <div class="mb-3">
        <label for="first_name" class="form-label">First Name</label>
        <input type="text" v-model="first_name" class="form-control" id="first_name" required>
      </div>
      <div class="mb-3">
        <label for="last_name" class="form-label">Last Name</label>
        <input type="text" v-model="last_name" class="form-control" id="last_name" required>
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input type="email" v-model="email" class="form-control" id="email" required>
      </div>
      <div class="mb-3">
        <label for="gender" class="form-label">Gender</label>
        <select v-model="gender" class="form-control" id="gender" required>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Unknown">Unknown</option>
        </select>
      </div>
      <button type="submit" class="btn btn-success">Create</button>
      <router-link to="/" class="btn btn-secondary">Cancel</router-link>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: 'BoardCreate',
  data() {
    return {
      first_name: '',
      last_name: '',
      email: '',
      gender: 'Unknown'
    };
  },
  methods: {
    createNewPost() {
      const post_data = {
        id: Date.now(),
        first_name: this.first_name,
        last_name: this.last_name,
        email: this.email,
        gender: this.gender
      };
      console.log(post_data)
      const createMemo = (post_data) => axios.post('/api/youth', post_data);
      // 실제 API 호출 없이 목록에 추가
      createMemo(post_data);
      this.$router.push('/');
    }
  }
};
</script>

<style>
/* Add your styles here */
</style>
