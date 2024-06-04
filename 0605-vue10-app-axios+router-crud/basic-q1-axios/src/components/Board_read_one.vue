<template>
  <div>
    <h1 class="btn btn-danger" style="width: 500px">{{ post.first_name }} {{ post.last_name }}</h1>
    <hr class="btn btn-primary" style="width: 500px">
    <p><img src="@/assets/logo.svg" style="width: 100px; height: 50px;">
      Email: <span class="text-bg-secondary" style="font-size: large"> {{ post.email }}</span></p>
    <p><img src="@/assets/logo.svg" style="width: 100px; height: 50px;">
      Gender: <span class="text-bg-secondary" style="font-size: large"> {{ post.gender }}</span></p>
    <hr class="btn btn-primary" style="width: 500px"><br>
    <router-link :to="{ name: 'update', params: { id: post.id } }"
                 class="btn btn-warning"
                 style="width: 160px">Edit</router-link>
    <button @click="deletePost(post.id)"
            class="btn btn-primary"
            style="width: 160px">Delete</button>
    <router-link to="/"
                 class="btn btn-secondary"
                 style="width: 180px">Back to List</router-link>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: 'Board_read_one',
  data() {
    return {
      post: {}
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
              last_name: user.last_name,
              email: user.email,
              gender: user.gender || 'Unknown'
            };
          })
          .catch(error => {
            console.error(error);
          });
    },
    deletePost(id) {
      const deleteMemo = (id) => axios.delete(`http://localhost:3000/youth/${id}`);
      deleteMemo(id);
      this.$router.push('/');
    }
  }
};
</script>

<style>
</style>
