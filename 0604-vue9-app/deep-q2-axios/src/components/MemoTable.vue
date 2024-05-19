<template>
  <div>
    <h1>Memo Table</h1>
    <button @click="fetchMemos">Load Memos</button>
    <table v-if="memos.length" class="table table-primary table-striped">
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
      <tr v-for="(memo, index) in memos" :key="memo.id">
        <td>{{memo.id}}</td>
        <td>{{memo.first_name}}</td>
        <td>{{memo.last_name}}</td>
        <td>{{memo.email}}</td>
        <td>{{memo.gender}}</td>
      </tr>
      </tbody>
    </table>
    <p v-else>No memos to display</p>
  </div>
</template>

<script>
import { ref } from 'vue';
import axios from './axios';

export default {
  name: 'MemoTable',
  setup() {
    const memos = ref([]);

    const fetchMemos = async () => {
      try {
        const response = await axios.get('/youth');
        memos.value = response.data;
      } catch (error) {
        console.error('Error fetching memos:', error);
      }
    };

    return {
      memos,
      fetchMemos,
    };
  },
};
</script>

<style>
table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  border: 1px solid black;
  padding: 8px;
  text-align: center;
}
</style>
