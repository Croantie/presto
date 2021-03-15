<template>
  <div>
    <Nuxt />
  </div>
</template>

<style lang="scss">
@font-face {
  font-family: 'GTEestiProDisplay-Regular';
  src: url("./assets/fonts/GTEestiProDisplay/GTEestiProDisplay-Regular.woff"),
      url("./assets/fonts/GTEestiProDisplay/GTEestiProDisplay-Regular.woff2");
}
@font-face {
  font-family: 'GTEestiProDisplay-Medium';
  src: url("./assets/fonts/GTEestiProDisplay/GTEestiProDisplay-Medium.woff"),
  url("./assets/fonts/GTEestiProDisplay/GTEestiProDisplay-Medium.woff2");
}
@font-face {
  font-family: 'GTEestiProText-Light';
  src: url("./assets/fonts/GTEestiProDisplay/GTEestiProText-Light.woff"),
  url("./assets/fonts/GTEestiProDisplay/GTEestiProText-Light.woff2");
}
html {
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>
