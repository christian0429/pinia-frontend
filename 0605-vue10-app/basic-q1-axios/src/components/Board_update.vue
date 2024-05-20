<template>
  <div>
    <h1 class="bg-success text-warning">Edit Post</h1>
    <form @submit.prevent="updatePost">
      <div class="mb-3">
        <label for="first_name" class="form-label text-primary font-monospace">First Name</label>
        <input type="text" v-model="post.first_name" class="form-control text-bg-secondary" id="first_name" required>
      </div>
      <div class="mb-3">
        <label for="last_name" class="form-label text-primary font-monospace">Last Name</label>
        <input type="text" v-model="post.last_name" class="form-control text-bg-secondary" id="last_name" required>
      </div>
      <div class="mb-3">
        <label for="email" class="form-label text-primary font-monospace">Email</label>
        <input type="email" v-model="post.email" class="form-control text-bg-secondary" id="email" required>
      </div>
      <div class="mb-3">
        <label for="gender" class="form-label text-primary font-monospace">Gender</label>
        <select v-model="post.gender" class="form-control text-bg-secondary" id="gender" required>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Unknown">Unknown</option>
        </select>
      </div>
      <button type="submit" class="btn btn-outline-success">Update</button>
      <router-link to="/" class="btn btn-outline-danger">Cancel</router-link>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'Board_update',
  data() {
    return {
      post: {
        id: null,
        first_name: '',
        last_name: '',
        email: '',
        gender: 'Unknown'
      }
    };
  },
  created() {
    this.fetchPost();
  },
  methods: {
    fetchPost() {
      const postId = parseInt(this.$route.params.id);
      axios.get(`http://localhost:3000/youth/${postId}`)
          .then(response => {
            const user = response.data;
            this.post = {
              id: user.id,
              first_name: user.first_name,
              last_name: user.last_name || '',
              email: user.email,
              gender: user.gender || 'Unknown'
            };
            console.log(user)
          })
          .catch(error => {
            console.error(error);
          });
    },
    updatePost() {
      // 실제 API 호출 없이 목록에서 업데이트
      const put_data = {
        id: this.post.id,
        first_name: this.post.first_name,
        last_name: this.post.last_name,
        email: this.post.email,
        gender: this.post.gender
      };
      console.log(put_data.id,'------' ,put_data)
      let id = put_data.id;
      const updateMemo = ({id, youth: put_data}) => axios.put(`http://localhost:3000/youth/${id}`, put_data);
      updateMemo({id, youth : put_data});
      this.$router.push('/');
    }

  }
};
</script>

<style>
/* Add your styles here */
</style>
