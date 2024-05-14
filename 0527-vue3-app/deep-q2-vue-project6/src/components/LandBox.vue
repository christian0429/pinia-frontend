<template>
  <div class="container">
    <!-- 첫 번째 줄 -->
    <div class="row">
      <!-- 왼쪽에 SideBox.vue 포함 -->
      <div class="col-lg-6">
        <SideBox />
      </div>
      <!-- 오른쪽에 MenuBox.vue 포함 -->
      <div class="col-lg-6">
        <MenuBox />
      </div>
    </div>
    <!-- 두 번째 줄 -->
    <div class="row">
      <!-- Picture.vue 포함 -->
      <div class="col-lg-12">
        <Picture />
      </div>
    </div>
  </div>
</template>

<script>
import SideBox from './SideBox.vue';
import MenuBox from './MenuBox.vue';
import Picture from './PictureBox.vue';

export default {
  components: {
    SideBox,
    MenuBox,
    Picture
  }
}
</script>

<style scoped>
</style>
