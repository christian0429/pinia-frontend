<template>
  <div>
    <h1>Top 10 Stocks</h1>
    <table>
      <thead>
      <tr>
        <th>Company Code</th>
        <th>Company Name</th>
        <th>Current Price</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(stock, index) in stocks" :key="index">
        <td>{{ stock.code }}</td>
        <td>{{ stock.name }}</td>
        <td>{{ stock.price }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      stocks: []
    };
  },
  methods: {
    async fetchData() {
      try {
        const response = await axios.get('API_ENDPOINT'); // 실제 API 엔드포인트로 변경
        // 여기서 response.data를 원하는 형식으로 파싱합니다
        const parsedData = this.parseStockData(response.data);
        this.stocks = parsedData.slice(0, 10);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
    parseStockData(data) {
      // 데이터를 원하는 형식으로 파싱합니다. 예를 들어, 아래는 가상의 파싱 예제입니다.
      return data.map(item => ({
        code: item.companyCode, // 실제 데이터 필드명으로 변경
        name: item.companyName, // 실제 데이터 필드명으로 변경
        price: item.currentPrice // 실제 데이터 필드명으로 변경
      }));
    }
  },
  mounted() {
    this.fetchData();
  }
};
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  border: 1px solid #ddd;
  padding: 8px;
}

th {
  background-color: #f2f2f2;
}
</style>















