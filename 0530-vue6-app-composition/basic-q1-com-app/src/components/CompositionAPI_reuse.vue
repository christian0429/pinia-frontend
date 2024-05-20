<template>
  name :  <span class="btn btn-danger">{{nameObj.nameData.name}}</span> <br>
  x :  <span class="btn btn-danger">{{calsObj.calcData.x}}</span> <br>
  y :  <span class="btn btn-danger">{{calsObj.calcData.y}}</span><br>
</template>
<script>
import {reactive, computed, onMounted} from "vue";

export default {
  name: "CompositionAPI_reuse",
  setup() {
    const nameObj = useName("smith");
    console.log(nameObj.nameData.name)
    const calsObj = useCalc(100, 200);
    console.log(calsObj.calcData.x)
    return {nameObj, calsObj}
  }
}
const useName = (name = 'john') => {
  const nameData = reactive({name: ""});
  const changeName = (name) => {
    console.log(name);
    this.name = name.trim().length < 2 ? "" : name.trim();
  }
  onMounted(() => nameData.name = "john");
  return { nameData, changeName };
}
const useCalc = ( x = 0, y = 0) => {
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
  return {calcData, result, changeX, changeY};
}
</script>
