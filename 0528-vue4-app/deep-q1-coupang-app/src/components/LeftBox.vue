<script>
export default {
  name: "LeftBox",
  data() {
    return {
      image: "https://cdn.pixabay.com/photo/2014/09/12/18/20/can-443123_1280.png",
      w_size: 180,
      h_size: 200,
      product_name: "최고시원콜라"
    }
  }
}
</script>

<template>
  <span class="btn btn-danger">{{ product_name }}</span>
  <img  :src="image" :width="w_size" :height="h_size" alt="상품 이미지">
</template>

<style scoped>
</style>
