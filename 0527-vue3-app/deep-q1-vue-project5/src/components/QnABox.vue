<template>
  <div class="container">
    <table class="info-table">
      <tr>
        <th>금융사고예방</th>
      </tr>
      <tr>
        <td>
          <strong>{{ info.strong_data[0] }}</strong><br>
          {{ info.general_data[0] }}
        </td>
      </tr>
      <tr>
        <td>
          <strong>{{ info.strong_data[1] }}</strong><br>
          {{ info.general_data[1] }}
        </td>
      </tr>
      <tr>
        <td>
          <strong>{{ info.strong_data[2] }}</strong><br>
          {{ info.general_data[2] }}
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'QnABox',
  data() {
    return {
      info: {
        strong_data: ['전자금융사기예방 서비스', '통장(카드) 매매·양도는 불법', '사진촬영·QR스캔 절대금지'],
        general_data: ['각종 금융사기수법에 한층 강화된 다양한 전자금융사기예방 서비스로 안전한 인터넷뱅킹 사용이 가능합니다.',
                        '고객님의 자산을 보호하고 금융사기를 예방하기 위한 최선의 방법은 대포통장 근절입니다.',
                        '타인이 OTP/보안카드 번호를 요구 (2개 초과) 하는 경우는 금융사기이니 절대 응하지 마십시오.'
        ]
      }
    };
  }
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
td {
  background: #badbcc;
}
th {
  color: green;
  font-size: 30px;
  font-weight: bold;
}
</style>
