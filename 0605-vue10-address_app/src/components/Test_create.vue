<template>
  <div>
    <h1>Create Post</h1>
    <form @submit.prevent="createNewPost">
      id <input type="text" v-model="id" id="id" required>
      title  <input type="text" v-model="title"  id="title" required>
      hobby  <select v-model="hobby"  id="hobby" required>
          <option value="1">Run</option>
          <option value="2">Read</option>
          <option value="3">Swim</option>
        </select>
      <button type="submit" class="btn btn-success">Create</button>
      <router-link to="/" class="btn btn-secondary">Cancel</router-link>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: 'TestCreate',
  data() {
    return {
      id: '',
      title: '',
      hobby: 'Run'
    };
  },
  methods: {
    createNewPost() {
      const post_data = {
        id: this.id,
        title: this.title,
        hobby: this.hobby
      };
      console.log(post_data)
      const createMemo = (post_data) => axios.post('/api/memo', post_data);
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
