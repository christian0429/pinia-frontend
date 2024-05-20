<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-12 text-center mb-4">
        <h1>KB부동산 사이트2</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">사이트 설명</h5>
            <p class="card-text">
              이 사이트는 KB부동산 정보를 제공합니다. 지도뷰와 스카이뷰를 볼 수 있습니다.
            </p>
          </div>
        </div>
      </div>
      <div class="col-md-7">
        <KakaoMap2 />
      </div>
    </div>
  </div>
</template>

<script setup>
import KakaoMap from './components/KakaoMAP.vue';
import KakaoMap2 from './components/KakaoMAP2.vue';
</script>

<style>
body {
  background-color: #f8f9fa;
}

h1 {
  color: #007bff;
}

.card {
  background-color: #e9ecef;
  border: none;
  border-radius: 10px;
}

.card-title {
  color: #495057;
}
</style>
