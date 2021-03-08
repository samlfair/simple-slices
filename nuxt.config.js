export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "working-project",
    meta: [
      {
        charset: "utf-8"
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        hid: "description",
        name: "description",
        content: ""
      }
    ],
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/favicon.ico"
      }
    ]
  },
  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ["./styles/reset.css"],
  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],
  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,
  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [],
  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    [
      "@nuxtjs/prismic",
      {
        endpoint: "https://sams-slices.cdn.prismic.io/api/v2"
      }
    ],
    ["nuxt-sm"]
  ],
  build: {
    transpile: ["vue-slicezone", "nuxt-sm"]
  },
  storybook: {
    stories: ["~/slices/**/*.stories.js", "~/slices/**/*.stories.js"]
  },
  ignore: ["**/*.stories.js", "**/*.stories.js"] // Build Configuration (https://go.nuxtjs.dev/config-build)
};
