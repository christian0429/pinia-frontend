<!-- src/views/ProductDetail.vue -->
<template>
  <div class="container">
    <div v-if="product">
      <h1>상품 상세 정보</h1>
      <p>상품 ID: {{ product.id }}</p>
      <p>상품명: {{ product.name }}</p>
      <p>상품 제조 회사: {{ product.manufacturer }}</p>
      <p>상품 가격: {{ product.price }}</p>
      <p>상품 주문 총 주문량: {{ product.orderCount }}</p>
      <button class="btn btn-primary" @click="orderProduct">주문</button>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { useProductStore } from '../stores/ProductStore.js';
import 'bootstrap/dist/css/bootstrap.min.css';

const route = useRoute();
const productStore = useProductStore();
const product = productStore.products.find(p => p.id === parseInt(route.params.id));

const orderProduct = () => {
  productStore.orderProduct(product.id);
};
</script>
