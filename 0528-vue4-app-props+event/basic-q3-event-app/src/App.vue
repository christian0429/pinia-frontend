<script>
import ImageBox from './components/ImageBox.vue'
import InfoBox from './components/InfoBox.vue'
import TopMenu from './components/TopMenu.vue'

export default {
  name: "App",
  components: {
    ImageBox,
    TopMenu,
    InfoBox
  },
  data() {
    return {
      transferImage: ''
    };
  },
  methods: {
    showImage(imageUrl) {
      this.transferImage = imageUrl.transfer_image;
    }
  }
}

</script>

<template>
  <div id="total">
    <table>
      <tr>
        <td span="2">
          <TopMenu/>
        </td>
      </tr>
      <tr>
        <td>
          <ImageBox/>
        </td>
        <td class="right">
          <button>장바구니 가기</button>
          <hr>
          <div v-if="transferImage">
            <img :src="transferImage" class="order">
          </div>
        </td>
      </tr>
    </table>

    <table border="1">
      <tr>
        <td>
          <InfoBox @transfer="showImage"/>
        </td>
      </tr>
    </table>
  </div>
</template>

<style scoped>
.order {
  width: 100px;
  height: 100px;
}

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
