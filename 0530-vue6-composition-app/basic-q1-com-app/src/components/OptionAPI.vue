<template>

  <form>
    <div class="mb-3 mt-3">
      <label for="name" class="form-label">name:</label>
      <input type="name"  v-model="name" class="form-control " id="name" placeholder="Enter name" name="name">
    </div>
    <div class="mb-3">
      <label for="x" class="form-label">x:</label>
      <input type="x" v-model="x" class="form-control" id="x" placeholder="Enter x" name="x">
    </div>
    <div class="mb-3">
      <label for="y" class="form-label">y:</label>
      <input type="y" v-model="y" class="form-control" id="y" placeholder="Enter y" name="y">
    </div>
  </form>

<hr>
  name : <span class="btn btn-danger"> {{name}} </span> <br>
  x :  <span class="btn btn-info">{{x}} </span> <br>
  y :  <span class="btn btn-primary">{{y}} </span> <br>
</template>
<script>
export default {
  name: "OptionAPI",
  data() {
    return {
      name : "",
      x: 0,
      y: 0
    }
  },
  computed : {
    result() {
      return parseInt(this.x, 10) + parseInt(this.y, 10)
    }
  },
  mounted() {
        this.name = "john",
        this.x = 10,
        this.y = 20;
  },
  methods : {
    changeX(strX) {
      let x = parseInt(strX, 10);
      this.x = isNaN(x) ? 0 : x;
    },
    changeY(strY) {
      let y = parseInt(strY, 10);
      this.y = isNaN(y) ? 0 : y;
    },
    changeName(name) {
      this.name = name.trim().length < 2 ? "" : name.trim();
    }
  }
}
</script>
