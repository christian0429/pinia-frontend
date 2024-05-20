<template>
  <div class="container mt-5 btn btn-primary">
    <h1 class="text-primary">요트 주문</h1>
    <div class="mb-3">
      <label for="yachtQuantity" class="form-label">요트 수량</label>
      <input type="number" v-model="order.quantity" class="form-control" id="yachtQuantity" placeholder="예: 10">
    </div>
    <div class="mb-3">
      <label for="yachtPrice" class="form-label">요트 가격</label>
      <input type="number" v-model="order.price" class="form-control" id="yachtPrice" placeholder="예: 20000">
    </div>
    <button class="btn btn-success" @click="calculateOrder">요트 주문 가격 비교</button>

    <div v-if="isCalculated" class="mt-4">
      <p class="alert alert-info">요트 이전 계산 주문 가격: {{ previousOrderPrice }}원</p>
      <p class="alert alert-info">요트 현재 계산 주문 가격: {{ currentOrderPrice }}원</p>
      <p class="alert alert-warning">가격 차이: {{ priceDifference }}원</p>
    </div>
  </div>
</template>

<script>
import { reactive, ref, watch } from 'vue';

export default {
  name: 'YachtOrder',
  setup() {
    const order = reactive({
      quantity: 10,
      price: 20000,
    });

    const previousOrderPrice = ref(0);
    const currentOrderPrice = ref(0);
    const isCalculated = ref(false);
    const priceDifference = ref(0);

    const calculateOrder = () => {
      previousOrderPrice.value = currentOrderPrice.value;
      currentOrderPrice.value = order.quantity * order.price;
      priceDifference.value = currentOrderPrice.value - previousOrderPrice.value;
      isCalculated.value = true;
    };

    // watch를 사용하여 order.quantity와 order.price의 변화를 감시
    watch([() => order.quantity, () => order.price], ([newQuantity, newPrice], [oldQuantity, oldPrice]) => {
      // 변화가 감지될 때 calculateOrder 함수 호출
      calculateOrder();
    });

    return {
      order,
      previousOrderPrice,
      currentOrderPrice,
      isCalculated,
      priceDifference,
      calculateOrder,
    };
  },
};

</script>

<style scoped>
</style>
