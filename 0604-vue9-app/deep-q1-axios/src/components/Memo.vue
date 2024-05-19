<template>
  <div>
    <h1>Memo List</h1>
    <button @click="fetchMemos" class="btn btn-danger">Load Memos</button>
    <ul v-if="memos.length">
      <li v-for="memo in memos" :key="memo.id">{{ memo.title }}-{{memo.body}}</li>
    </ul>
    <p v-else>No memos to display</p>
  </div>
</template>

<script>
import { ref } from 'vue';
import axios from './axios';

export default {
  name: 'Memo',
  setup() {
    const memos = ref([]);

    const fetchMemos = async () => {
      try {
        const response = await axios.get('/memo');
        memos.value = response.data;
        console.log(memos.value)
        console.log(memos)
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
