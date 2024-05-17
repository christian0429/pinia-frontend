<script setup>
import HelloWorld from './components/OptionAPI.vue'
import HelloWorld2 from './components/CompositionAPI.vue'
import HelloWorld3 from './components/CompositionAPI_reuse.vue'
</script>

<template>
  <div>
  </div>
  <HelloWorld/>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
