<template>
  <div class="uk-flex">
    <div class="prev-slide" :class="prevSlide">
      <img src="../assets/images/arrow-left.png" alt="left arrow">
    </div>
    <div class="next-slide" :class="nextSlide">
      <img src="../assets/images/arrow-right.png" alt="right arrow">
    </div>
  </div>
</template>

<script>
export default {
  name: "NavigationButtons",
  props: ['nextSlide', 'prevSlide']
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
  .swiper-button-disabled {
    opacity: .5;
    cursor: auto;
  }
</style>
