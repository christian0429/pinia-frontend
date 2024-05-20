<template>
  <div>
    <img :src="imageSrc" alt="Image">
  </div>
</template>

<script>
export default {
  name: 'ImageBox',
  data() {
    return {
      imageSrc: "https://oimg1.kbstar.com/img/oabout/2021/esg_img02_2021_n.jpg",
    }
  }
}
</script>

<style scoped>
img {
  width: 1000px;
  height: 300px;
  border: orange solid 10px;
}
</style>
