<template>
  <swiper :options="swiperOptions">
    <swiper-slide v-for="(slide, key) in slides" :key="key">
      <h3>{{ slide.title }}</h3>
      <p>{{ slide.text }}</p>
    </swiper-slide>
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
      slides: [
        {
          title: '22 года',
          text: 'на рынке электронной торговли'
        },
        {
          title: '>40 млн',
          text: 'уникальных посетителей в месяц'
        },
        {
          title: '+20',
          text: 'категорий товаров: от электроники до мебели'
        },
        {
          title: '>12 000',
          text: 'точек выдачи заказов'
        },
        {
          title: '>180 000',
          text: 'заказов ежедневно'
        },
        {
          title: '9',
          text: 'фулфилмент- центра — в Москве, Твери, Казани и Питере.'
        }
      ],
      swiperOptions: {
        slidesPerView: 'auto',
        spaceBetween: 24,
        navigation: {
          nextEl: '.about-carousel-next',
          prevEl: '.about-carousel-prev'
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .swiper-container {
    padding-left: 9.25rem;
    min-height: 18.125rem;
    display: flex;
    align-items: center;
    .swiper-slide {
      width: 13.75rem;
      height: 12.5rem;
      border-radius: 20px;
      transition: all .2s ease-in-out;
      padding: 2.5rem 1.25rem;
      h3 {
        color: #001A34;
        font-family: 'GTEestiProDisplay-Medium', sans-serif;
        font-size: 2.25rem;
        letter-spacing: .05rem;
        line-height: 2.5rem;
        margin: 0;
      }
      p {
        color: #001A34;
        font-family: 'GTEestiProText-Light', sans-serif;
        letter-spacing: 0.025rem;
        line-height: 1.25rem;
        margin: 0;
        width: 85%;
      }
      &:hover {
        transform: scaleY(1.15);
        box-shadow: 0 0 2.313rem 0 rgba(0,0,0,0.1);
        h3, p {
          transform: scaleY(.85);
        }
      }
    }
  }
  @media screen and (max-width: 1199px) {
    .swiper-container {
      padding-left: 1.75rem;
    }
  }
  @media screen and (max-width: 649px) {
    .swiper-container {
      padding-left: 1rem;
      min-height: 12.875rem;
      .swiper-slide {
        width: 7.5rem;
        height: 9.375rem;
        padding: 1.5rem 1rem;
        border-radius: 1rem;
        h3 {
          font-size: 1.25rem;
          line-height: 1.5rem;
          letter-spacing: .6px;
        }
        p {
          font-size: 14px;
          line-height: 16px;
          letter-spacing: .4px;
        }
        &:hover {
          box-shadow: 0 0 1.9rem 0 rgba(0,0,0,0.1);
        }
      }
    }
  }
</style>
