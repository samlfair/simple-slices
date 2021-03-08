# Sam's Simple Slices

This is the working project for developing a Slice Library with Prismic and Nuxt.

Currently, it has:

- [x] An Imgix masonry image row
- [x] A text block
- [ ] An embed
- [ ] A vertical masonry image grid

# To implement, ensure:

- CSS Reset is set in nuxt.config.js > css

# How to style

Slice styles are set in the layout files, using `::v-deep`:

```scss
::v-deep {
  .slice-text-block {
    color: red;
  }
}
```
