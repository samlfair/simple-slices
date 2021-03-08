<template>
  <div class="container">
    <slice-zone uid="home" type="page" />
  </div>
</template>

<script>
import SliceZone from "vue-slicezone";

export default {
  name: "Home",
  components: {
    SliceZone
  }
};
</script>

<style>
.container {
  width: 100%;
}
</style>
