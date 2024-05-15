<script>
export default {
  name: "ProductBox",
  methods: {
    sendItem(item) {
      this.$emit('itemClicked', {count: item.count, sale_price: item.sale_price}); // 상품 정보를 부모 컴포넌트로 전달
    }
  },
  data() {
    return {
      price: 1000,
      image: "https://cdn.pixabay.com/photo/2014/10/20/12/57/egg-cooker-495240_960_720.jpg",
      common_image: "https://cdn.pixabay.com/photo/2013/07/12/18/18/rocket-153227_1280.png",
      select_info: [
        {count: 2, count_price: 2000, sale_price: 1900},
        {count: 4, count_price: 4000, sale_price: 3800},
        {count: 6, count_price: 6000, sale_price: 5500},
        {count: 8, count_price: 8000, sale_price: 7400}
      ]
    }
  }
}
</script>

<template>
  <div class="product-container">
    <p>가격: {{ price }}</p>
    <table>
      <thead>
      <tr>
        <th>Count</th>
        <th>Count Price</th>
        <th>Sale Price</th>
        <th>One Select</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in select_info" :key="select_info.count">
        <td>{{ item.count }}</td>
        <td>{{ item.count_price }}</td>
        <td>{{ item.sale_price }}</td>
        <td>
          <button id="select" class="btn btn-info" @click="sendItem(item)">선택</button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>

.product-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3px;
}

table {
  border-collapse: collapse; /* 테이블 셀 경계를 병합 */
  width: 100%; /* 테이블 전체 너비 */
}

/* 각 셀의 스타일 */
td {
  border: 1px solid black; /* 테두리 스타일 */
  padding: 8px; /* 셀 내부 여백 */
  text-align: center; /* 텍스트 가운데 정렬 */
}

/* 짝수 행의 배경색 지정 */
tr:nth-child(even) {
  background-color: #f2f2f2;
}

p {
  font-size: 20px;
  font-width: bold;
}
</style>
