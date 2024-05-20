<template>
  <div>
  name : <span class="btn btn-danger"> {{nameData.name}} </span> <br>
  x :  <span class="btn btn-info">{{calcData.x}} </span> <br>
  y :  <span class="btn btn-primary">{{calcData.y}} </span> <br>
  </div>
</template>

<script>
import {reactive, computed, onMounted} from "vue";

export default {
  name: "CompositionAPI",
  setup(){
    const nameData = reactive({name: ""});
    const changeName = (name) => {
      console.log(name);
      this.name = name.trim().length < 2 ? "" : name.trim();
    }
    onMounted(() => nameData.name = "john");

    const calcData = reactive({ x: 0, y: 0});
    const result = computed(() => parseInt(this.x, 10) + parseInt(this.y, 10) )
    onMounted(() => {
      calcData.x = 10;
      calcData.y = 20;
    })
    const changeX = (strX) => {
      let x = parseInt(strX, 10);
      calcData.x = isNaN(x) ? 0 : x;
    }
    const changeY = (strY) => {
      let y = parseInt(strY, 10);
      calcData.y = isNaN(y) ? 0 : y;
    }
    return {nameData, calcData}
  }
}
</script>
