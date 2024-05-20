<template>
  <div>

    <div class="input-group mb-4 input-group-lg">
      <span class="input-group-text  alert alert-info">X</span>
      <input type="text" class="form-control alert alert-success" v-model.number="state.x">
    </div>
    <div class="input-group mb-4 input-group-lg">
      <span class="input-group-text  alert alert-info">Y</span>
      <input type="text" class="form-control alert alert-success" v-model.number="state.y">
    </div>
    <div class="input-group mb-4 input-group-lg">
      <span class="input-group-text  alert alert-info">결과</span>
      <span class="form-control alert alert-danger">{{result}}</span>
    </div>
  </div>
</template>

<script>
import { reactive, computed } from 'vue';

export default {
  name:"Calc4",
  setup () {
    const state = reactive({ x:10, y:20 });
    const result = computed(()=>{
      return state.x + state.y;
    })
    return { state, result };
  }
}
</script>
