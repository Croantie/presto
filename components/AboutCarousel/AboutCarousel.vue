<template>
  <swiper ref="mySwiper" :options="swiperOptions">
    <swiper-slide>
      <h3>22 года</h3>
      <p>на рынке электронной торговли</p>
    </swiper-slide>
    <swiper-slide>
      <h3>>40 млн</h3>
      <p>уникальных посетителей в месяц</p>
    </swiper-slide>
    <swiper-slide>
      <h3>+20</h3>
      <p>категорий товаров: от электроники до мебели</p>
    </swiper-slide>
    <swiper-slide>
      <h3>>12 000</h3>
      <p>точек выдачи заказов</p>
    </swiper-slide>
    <swiper-slide>
      <h3>>180 000</h3>
      <p>заказов ежедневно</p>
    </swiper-slide>
    <swiper-slide>
      <h3>9</h3>
      <p>фулфилмент- центра — в Москве, Твери, Казани и Питере.</p>
    </swiper-slide>
<!--    <div class="swiper-button-prev" slot="button-prev" />
    <div class="swiper-button-next" slot="button-next" />-->
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.min.css'

export default {
  name: "about-carousel",
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      swiperOptions: {
        slidesPerView: 'auto',
        spaceBetween: 24,
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        },
        navigation: {
          nextEl: '.next-slide',
          prevEl: '.prev-slide'
        }
      }
    }
  },
  /*computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper
    }
  },*/
}
</script>

<style scoped lang="scss">
  .swiper-container {
    margin-left: 9.25rem;
    .swiper-slide {
      width: 13.75rem;
      height: 15.625rem;
      border-radius: 20px;
      transition: all .3s ease;
      padding: 2.5rem 1.25rem;
      &:hover {
        box-shadow: 0 47px 304px rgba(0, 26, 52, 0.04), 0 30.463px 178.037px rgba(0, 26, 52, 0.0303704), 0 18.1037px 96.8296px rgba(0, 26, 52, 0.0242963), 0 9.4px 49.4px rgba(0, 26, 52, 0.02), 0 3.82963px 24.7704px rgba(0, 26, 52, 0.0157037), 0 0.87037px 11.963px rgba(0, 26, 52, 0.00962963);
      }
    }
  }
</style>
