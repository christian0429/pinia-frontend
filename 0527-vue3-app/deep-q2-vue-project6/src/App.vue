<template>
  <div class="container">
    <!-- 첫 번째 줄 -->
    <div class="row">
      <!-- 왼쪽에 LandBox.vue 포함 -->
      <div class="col-lg-6">
        <LandBox />
      </div>
      <!-- 오른쪽에 MapBox.vue 포함 -->
      <div class="col-lg-6">
        <MapBox />
      </div>
    </div>
  </div>
</template>

<script>
import LandBox from './components/LandBox.vue';
import MapBox from './components/MapBox.vue';

export default {
  components: {
    LandBox,
    MapBox
  }
}
</script>

<style scoped>
</style>
