<script>
export default {
  name: "TopBox",
  data() {
    return {
      image: "https://cdn.pixabay.com/photo/2013/07/12/14/53/shopping-cart-148959_1280.png",
      w_size: 100,
      h_size: 100
    }
  }
}
</script>

<template>
<div>
  <img :src = "image" :width="w_size" :height="h_size">
  <span class="text-primary title">마켓블루</span>
</div>
</template>

<style scoped>
.title {
  font-size: 20px;
}
</style>
