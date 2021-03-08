<template>
  <div class="layout-default-outer">
    <div class="layout-default-inner">
      <Nuxt />
    </div>
  </div>
</template>

<style lang="scss">
html {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-size: 18px;
}

.layout-default-outer {
  display: flex;
  width: 100vw;
  justify-content: center;
  padding: 20px 10px;
}

.layout-default-inner {
  width: 100%;
  max-width: 900px;
}

.slice-text-block {
  & > * {
    padding-bottom: 1em;
  }
}

.slice-image-row {
  .slice-image-row-caption {
    & > * {
      padding: 0.5em 0 1em;
    }
    text-align: center;
    color: grey;
    font-style: oblique;
    font-weight: 200;
    font-size: 0.9rem;
  }
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>
