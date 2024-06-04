<template>
  <div>
    <h1>Board List</h1>
    <router-link to="/create" class="btn btn-primary mb-3">Create New Post</router-link>
    <table v-if="posts.length" class="table table-primary table-striped">
      <thead>
      <tr>
        <th>id</th>
        <th>first_name</th>
        <th>last_name</th>
        <th>email</th>
        <th>gender</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="memo in posts" :key="memo.id">
        <td>{{memo.id}}</td>
        <td>{{memo.first_name}}</td>
        <td>{{memo.last_name}}</td>
        <td>
          {{memo.email}}
        </td>
        <td>{{memo.gender}}</td>
      </tr>
      </tbody>
    </table>
    <p v-else>No memos to display</p>
  </div>
</template>



<script>
import axios from "axios";
export default {
  name: 'BoardList',
  data() {
    return {
      posts: []
    };
  },
  created() {
    this.fetchPosts();
  },
  methods: {
    fetchPosts() {
      axios.get('/api/youth')
          .then(response => {
            this.posts = response.data.map(user => ({
              id: user.id,
              first_name: user.first_name,
              last_name: user.last_name,
              email: user.email,
              gender: user.gender || 'Unknown'
            }));
          })
          .catch(error => {
            console.error(error);
          });
    }
  }
};
</script>

<style>
/* Add your styles here */
</style>
