<!-- src/views/ProductList.vue -->
<template>
  <div class="container">
    <h1>전체 상품 리스트</h1>
    <table class="table">
      <thead>
      <tr>
        <th>상품 ID</th>
        <th>상품명</th>
        <th>총주문량</th>
        <th>상세정보</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="product in productStore.products" :key="product.id">
        <td>{{ product.id }}</td>
        <td>{{ product.name }}</td>
        <td>{{ product.orderCount }}</td>
        <td><router-link :to="{ name: 'ProductDetail', params: { id: product.id } }">상세정보</router-link></td>
      </tr>
      </tbody>
    </table>
    <p>총 주문량: {{ productStore.totalOrderCount }}</p>
  </div>
</template>

<script setup>
import { useProductStore } from '../stores/ProductStore.js';
import 'bootstrap/dist/css/bootstrap.min.css';

const productStore = useProductStore();
</script>
