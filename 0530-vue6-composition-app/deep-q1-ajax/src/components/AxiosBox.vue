<template>
  <div>
    <h1>Todo Item</h1>
    <div v-if="error">{{ error }}</div>
    <div v-else-if="!todo">{{ loadingMessage }}</div>
    <div v-else>
      <p>ID: {{ todo.id }}</p>
      <p>Title: {{ todo.title }}</p>
      <p>Completed: {{ todo.completed }}</p>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import axios from 'axios';

export default {
  setup() {
    const todo = ref(null);
    const error = ref(null);
    const loadingMessage = ref('Loading...');

    const fetchTodo = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
        todo.value = response.data;
      } catch (err) {
        error.value = 'Error fetching data';
      }
    };

    onMounted(() => {
      fetchTodo();
    });

    return {
      todo,
      error,
      loadingMessage
    };
  }
};
</script>

<style scoped>
h1 {
  font-size: 2em;
  margin-bottom: 0.5em;
}
</style>
