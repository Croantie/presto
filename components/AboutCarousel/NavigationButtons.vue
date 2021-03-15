<template>
  <div class="uk-flex">
    <div class="prev-slide">
      <img src="../../assets/images/arrow-left.png" alt="left arrow">
    </div>
    <div class="next-slide">
      <img src="../../assets/images/arrow-right.png" alt="right arrow">
    </div>
  </div>
</template>

<script>
export default {
  name: "NavigationButtons"
}
</script>

<style scoped lang="scss">
  .prev-slide, .next-slide {
    cursor: pointer;
    outline: none;
  }
  .next-slide {
    margin-left: 0.75rem;
  }
</style>
