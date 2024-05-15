<script>
export default {
  name: "ProductBox",
  methods: {
    sendItem(item) {
      this.$emit('itemClicked', {name: item.name, img: item.img}); // 상품 정보를 부모 컴포넌트로 전달
    }
  },
  data() {
    return {
      select_info: [
        {
          name: '[하루한킷]샌드위치',
          img: 'https://cdn.pixabay.com/photo/2014/04/03/10/44/sandwich-311262_1280.png',
          info: '풍부한 야채와 할리피뇨, 치즈가 들어간 한끼식사로 충분한 샌드위치',
          sale_price: 8900
        },
        {
          name: '[하루한킷]핑크컵케잌',
          img: 'https://cdn.pixabay.com/photo/2021/04/24/01/01/cupcake-6203012_1280.png',
          info: '로맨틱한 핑크 컵케잌으로 우울한 기본 탈출',
          sale_price: 5900
        },
        {
          name: '[특가세일]삼단케잌',
          img: 'https://cdn.pixabay.com/photo/2024/02/02/02/06/cake-8547111_1280.png',
          info: '우리의 친구, 가족, 동료의 기념을 3배로 축하하기 위한 삼단 케잌',
          sale_price: 23000
        },
      ]
    }
  }
}
</script>

<template>
  <div class="product-container">
    <table>
      <thead>
      <tr>
        <td v-for="item in select_info" :key="select_info.name" class="mt-4 p-6 bg-warning text-primary rounded">
          <span class="font-weight:bold;">{{ item.name }} </span>
        </td>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td v-for="item in select_info" :key="select_info.name" class="mt-4 p-5 bg-primary text-white rounded">
          <img :src="item.img" width="100" height="100">
          <br>
          {{ item.info }}
          <br>
          <span class="badge bg-secondary"> {{ item.sale_price }}원 </span>
          <hr>

          <button id="select" class="btn btn-info" @click="sendItem(item)">
            <img src="/img_12.png" width="50" height="50"><br>
            주문하기
          </button>
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
