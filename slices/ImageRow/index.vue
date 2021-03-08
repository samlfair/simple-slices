<template>
  <div class="slice-image-row">
    <div class="image-row" :style="{ gap: `10px`, marginBottom: `7px` }">
      <div
        v-for="(item, i) in slice.items"
        :key="`slice-item-${i}`"
        :style="{
          aspectRatio:
            item.image.dimensions.width / item.image.dimensions.height,
          flex: item.image.dimensions.width / item.image.dimensions.height
        }"
      >
        <Imgix :imageUrl="item.image.url" />
      </div>
    </div>
    <prismic-rich-text
      v-if="$prismic.asText(slice.primary.caption)"
      class="slice-image-row-caption"
      :field="slice.primary.caption"
    />
  </div>
</template>

<script>
import Imgix from "../../components/Imgix";

export default {
  name: "ImageRow",
  props: {
    slice: {
      type: Object,
      required: true,
      default() {
        return {};
      }
    }
  },
  components: {
    Imgix
  }
};
</script>

<style>
img {
  width: 100%;
  height: auto;
  padding: 0;
  display: block;
}

.image-row {
  width: 100%;
  display: flex;
  flex: 1 1 auto;
}
</style>
