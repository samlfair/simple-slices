<template>
  <div ref="image">
    <img
      :width="width"
      :height="height"
      :style="{ width: '100%' }"
      :src="root + `?w=` + width"
      :alt="alt"
    />
  </div>
</template>

<script>
export default {
  name: "Imgix",
  props: {
    imageUrl: String,
    width: String,
    height: String,
    alt: String
  },
  data() {
    return {
      blur: null,
      width: null
    };
  },
  computed: {
    root() {
      return this.imageUrl.split("?").shift();
    },
    blurUrl() {
      return `${this.root}?fm=blurhash`;
    }
  },
  async fetch() {
    this.blur = await this.$http.$get(`${this.root}?fm=blurhash`);
  },
  mounted() {
    this.getWidth();
  },
  methods: {
    getWidth() {
      this.width = this.$refs["image"].offsetWidth;
    }
  }
};
</script>

<style scoped>
img {
  width: 100%;
  height: auto;
  display: block;
}
</style>
