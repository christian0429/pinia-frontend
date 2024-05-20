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
      imageSrc: "https://cdn.pixabay.com/photo/2015/09/09/20/23/baby-933097_1280.jpg"
    }
  }
}
</script>

<style scoped>
/* 스타일링은 필요에 따라 추가하세요 */
img {
  width: 300px;
  height: 300px;
}
</style>
