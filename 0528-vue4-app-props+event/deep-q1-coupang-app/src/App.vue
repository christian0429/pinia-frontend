<script>
import LeftBox from './components/LeftBox.vue'
import ProductBox from './components/ProductBox.vue'
import TopBox from './components/TopBox.vue'

export default {
  name: "App",
  components: {
    LeftBox,
    ProductBox,
    TopBox
  },
  data() {
    return {
      transferItem_show: ''
    };
  },
  methods: {
    showItem(item) {
      this.transferItem_show = item.count + "개를 " + item.sale_price+"원 선택함.";
      //item.count + "개를 " + item.sale_price+"원 선택함."
    }
  }
}

</script>

<template>
  <div id="total">
    <div>
      <TopBox/>
    </div>
    <br>
    <table>
      <tr>
        <td>
          <LeftBox/>
        </td>
      </tr>
      <tr>
        <td class="alert alert-danger">
          <div v-if="transferItem_show">
            <button>선택한 수량/가격</button> : <span class="alert bg-danger h1 text-warning">{{transferItem_show}}</span>
          </div>
        </td>
      </tr>
    </table>

    <table border="1">
      <tr>
        <td>
          <ProductBox @itemClicked="showItem"/>
        </td>
      </tr>
    </table>
  </div>
</template>

<style scoped>
* {
  font-size: 10px;
}

table {
  width: 100%;
}

/* 왼쪽 상세 정보 스타일링 */


/* 오른쪽 장바구니 스타일링 */
.right {
  background: bisque;
  color: white;
  width: 100px;
}

/* clear: both;를 사용하여 부모 요소의 높이를 자식 요소에 맞춤 */
.clear {
  clear: both;
}
</style>
