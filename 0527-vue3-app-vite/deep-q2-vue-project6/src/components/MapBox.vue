<template>
  <div>
    <img :src="imageSrc" alt="Image">
  </div>
</template>

<script>
export default {
  name: 'MapBox',
  data() {
    return {
      imageSrc: "https://cdn.pixabay.com/photo/2016/03/22/04/23/map-1272165_1280.png",
    }
  }
}
</script>

<style scoped>
img {
  width: 1000px;
  height: 500px;
  border: orange solid 1px;
}
</style>
