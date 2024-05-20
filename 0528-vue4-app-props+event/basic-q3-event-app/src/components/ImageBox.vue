<script>
export default {
  name: "ImageBox",
  data() {
    return {
      image: "https://cdn.pixabay.com/photo/2014/10/20/12/57/egg-cooker-495240_960_720.jpg",
      w_size: 200,
      h_size: 200,
      product_name: "달걀전기밥솥"
    }
  }
}
</script>

<template>
  <h1>{{ product_name }}</h1>
  <img  :src="image" :width="w_size" :height="h_size"alt="상품 이미지">
</template>

<style scoped>

h1 {
  color: blue;
}

</style>
