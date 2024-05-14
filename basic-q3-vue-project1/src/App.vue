<script setup>
</script>

<template>
  <div>
    <img src="https://cdn.pixabay.com/photo/2017/06/02/18/24/watermelon-2367029_1280.jpg">
    <table>
      <tr>
        <td class="td1">좋아하는 커피 종류</td>
        <td class="td1">좋아하는 쥬스 종류</td>
        <td class="td1">좋아하는 샐러드 종류</td>
      </tr>
      <tr>
        <td>아이스 라떼</td>
        <td>블루베리 주스</td>
        <td>치킨 샐러드</td>
      </tr>
    </table>
  </div>
</template>

<style scoped>
img {
  width: 300px;
  height: 200px;
}
table, tr, td {
  height: 150px;
  border: #0a53be solid 2px;
  background: yellow;
}
.td1 {
  height: 100px;
  width: 200px;
  background: #0dcaf0 ;
  font-weight: bold;
}
</style>
