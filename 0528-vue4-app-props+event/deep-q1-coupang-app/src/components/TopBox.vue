<script>
export default {
  name: "TopMenu",
  data() {
    return {
      image: "https://cdn.pixabay.com/photo/2014/11/27/22/44/gift-548293_1280.jpg",
      w_size: 10,
      h_size: 10
    }
  }
}
</script>

<template>
  <header>
    <nav>
      <ul>
        <li><a href="#"><img :src="image" :width="w_size" :height="h_size">쿠팡플레이</a></li>
        <li><a href="#"><img :src="image" :width="w_size" :height="h_size">로켓배송</a></li>
        <li><a href="#"><img :src="image" :width="w_size" :height="h_size">로켓플래시</a></li>
        <li><a href="#"><img :src="image" :width="w_size" :height="h_size">쿠팡비즈</a></li>
        <li><a href="#"><img :src="image" :width="w_size" :height="h_size">로켓직구</a></li>
        <li><a href="#"><img :src="image" :width="w_size" :height="h_size">골드박스</a></li>
        <li><a href="#"><img :src="image" :width="w_size" :height="h_size">와우회원할인</a></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
/* ul 요소의 스타일링 */
ul {
  list-style-type: none; /* 리스트 스타일링 없애기 */
  padding: 0; /* 내부 여백 없애기 */
  margin: 0; /* 바깥 여백 없애기 */
}

/* li 요소의 스타일링 */
li {
  display: inline-block; /* 요소들을 가로로 배치 */
  margin-right: 20px; /* 각 요소 사이의 우측 여백 설정 */
}

/* 마지막 요소의 우측 여백 제거 */
li:last-child {
  margin-right: 0;
}

/* 링크 스타일링 */
li a {
  text-decoration: none; /* 링크 밑줄 제거 */
  color: black; /* 링크 색상 설정 */
}


</style>
