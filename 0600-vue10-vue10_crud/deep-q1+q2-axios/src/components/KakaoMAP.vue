<template>
  <div id="map" style="width: 100%; height: 700px; border: 10px solid red">여기 지도 들어가</div>
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  const script = document.createElement('script');
  script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=5675f8f4dffbfd2b726b7b6393fd78`;
  script.onload = () => {
    kakao.maps.load(() => {
      const mapContainer = document.getElementById('map');
      const mapOption = {
        center: new kakao.maps.LatLng(37.5208119, 126.9278776),
        level: 3,
      };
      const map = new kakao.maps.Map(mapContainer, mapOption);

      const markerPosition = new kakao.maps.LatLng(37.5208119, 126.9278776);
      const marker = new kakao.maps.Marker({
        position: markerPosition,
      });

      marker.setMap(map);
    });
  };
  document.head.appendChild(script);
});
</script>

<style scoped>

</style>
