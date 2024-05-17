<template>
  <div class="container mt-5">
    <h1 class="text-primary mb-4">데이터 테이블</h1>
    <table class="table table-striped">
      <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">이름</th>
        <th scope="col">나이</th>
        <th scope="col">이메일</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item, index) in items" :key="index">
        <th scope="row">{{ index + 1 }}</th>
        <td>{{ item.userId }}</td>
        <td>{{ item.title }}</td>
        <td>{{ item.completed }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
  name: 'DataTable',
  setup() {
    const items = ref([]);

    // fake json server로부터 데이터 받아오기
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com)');
        const data = await response.json();
        items.value = data;
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // 컴포넌트가 마운트된 후 데이터 받아오기
    onMounted(() => {
      fetchData();
    });

    return {
      items,
    };
  },
};
</script>

<style scoped>
/* Bootstrap 5 테이블 스타일 */
.table {
  width: 100%;
  margin-bottom: 1rem;
  color: #212529;
}

.table th,
.table td {
  padding: 0.75rem;
  vertical-align: top;
  border-top: 1px solid #dee2e6;
}

.table thead th {
  vertical-align: bottom;
  border-bottom: 2px solid #dee2e6;
  background-color: #f8f9fa;
}

.table tbody+tbody {
  border-top: 2px solid #dee2e6;
}

.table-sm th,
.table-sm td {
  padding: 0.3rem;
}

.table-bordered {
  border: 1px solid #dee2e6;
}

.table-bordered th,
.table-bordered td {
  border: 1px solid #dee2e6;
}

.table-bordered thead th,
.table-bordered thead td {
  border-bottom-width: 2px;
}

.table-borderless th,
.table-borderless td,
.table-borderless thead th,
.table-borderless tbody+tbody {
  border: 0;
}

.table-striped tbody tr:nth-of-type(odd) {
  background-color: rgba(0, 0, 0, 0.05);
}

.table-hover tbody tr:hover {
  color: #212529;
  background-color: rgba(0, 0, 0, 0.075);
}
</style>
