<script setup>

</script>

<template>
  <div id="center">
    <hr>
    <br>
    <table align="center">
      <tr>
        <td class="td">제품번호</td>
        <td class="td2">100</td>
      </tr>
      <tr>
        <td class="td">제품이름</td>
        <td class="td2">
          <a href="product?no=100">shoes1</a>
        </td>
      </tr>
      <tr>
        <td class="td">제품설명</td>
        <td class="td2">fun shoes1</td>
      </tr>
      <tr>
        <td class="td">제품가격</td>
        <td class="td2">1000</td>
      </tr>
      <tr>
        <td class="td">제품회사</td>
        <td class="td2">c100</td>
      </tr>
      <tr>
        <td class="td">제품이미지</td>
        <td class="td2">
          <img src="../assets/img/c100.png" width="100" height="100">
        </td>
      </tr>
      <tr>
        <td colspan="2">
          <img src="../assets/img/basket.png" width="300" height="200">
        </td>
      </tr>
    </table>
  </div>
</template>

<style scoped>
td {
  width: 200px;
}
.td {
  background: #0dcaf0;
}
.td2 {
  background: #badbcc;
}
</style>
