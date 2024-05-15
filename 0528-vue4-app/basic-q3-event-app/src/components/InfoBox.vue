<script>
export default {
  name: "InfoBox",
  methods: {
    sendImage() {
      this.$emit('transfer', {transfer_image: this.image}); // 'aaa.png'을 부모 컴포넌트로 전달
    }
  },
  // emits : {
  //   transfer: (e) => {
  //     return e.image;
  //   }
  // },
  data() {
    return {
      price: 10000,
      image: "https://cdn.pixabay.com/photo/2014/10/20/12/57/egg-cooker-495240_960_720.jpg"
    }
  }
}
</script>

<template>
  <div class="product-container">
    <p>가격: {{ price }}</p>
    <table border="1">
      <tr>
        <td>고객님은 와우회원으로</td>
      </tr>
      <tr>
        <td>무조건 무료배송무료반품</td>
      </tr>
      <tr>
        <td>무료배송</td>
      </tr>
      <tr>
        <td>내일(목) 5/16 도착 보장 (7시간 13분 내 주문 시)</td>
      </tr>
      <tr>
        <td>판매자: 주식회사 포인트나인크루</td>
      </tr>
      <tr>
        <td>적립 최대 1,590원</td>
      </tr>
      <tr>
        <td>쿠팡캐시 적립</td>
      </tr>
      <tr>
        <td>
          <button id="order">바로 주문하기</button>
          <button id="basket" @click="sendImage">장바구니에 넣기</button>
        </td>
      </tr>
    </table>
    <!-- 여기에 더 많은 정보를 추가할 수 있습니다 -->
  </div>
</template>

<style scoped>
#order {
  background: blue;
  color: white;
  font-weight: bold;
}
#basket {
  background: red;
  color: white;
  font-weight: bold;
}
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
