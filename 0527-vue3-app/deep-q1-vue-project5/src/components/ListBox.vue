<template>
  <div class="container">
    <table class="info-table">
      <tr>
        <td class="btn btn-info">빠른메뉴</td>
        <td class="btn btn-info">전체계좌조회</td>
        <td class="btn btn-info">계좌이체</td>
        <td class="btn btn-info">빠른조회</td>
        <td class="btn btn-info">고객우대제도</td>
        <td class="btn btn-info">소비자보호상담/예약상품공시실</td>
      </tr>
    </table>
  </div>

</template>

<script>
export default {
  name: 'ListBox',
};
</script>

<style>
.info-table {
  width: 100%;
}
.info-table th, .info-table td {
  padding: 10px;
  border-top: 1px solid #dee2e6;
}
</style>