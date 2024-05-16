<script>
import NoSlotTest from './components/NoSlotTest.vue'
import SlotTest from './components/SlotTest.vue'
import NamedSlotTest from './components/NamedSlotTest.vue'

export default {
  name: 'App',
  components: { NoSlotTest, SlotTest, NamedSlotTest }
}
</script>

<template>
  <div>
    <NoSlotTest />
    <hr>
    <SlotTest />
    <hr>
    <NamedSlotTest />
  </div>
</template>


<style scoped>

</style>
