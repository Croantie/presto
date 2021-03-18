<template>
  <swiper :options="swiperOptions">
    <swiper-slide>

    </swiper-slide>
    <swiper-slide v-for="(news, key) in newsList" :key="key">
      <div class="uk-card">
        <div class="uk-card-media-top">
          <div class="uk-card-badge uk-label">
            {{ $moment(news.date).format('D MMMM') }}
          </div>
          <img :src="news.image.url" :alt="news.image.alternativeText">
        </div>
        <div class="uk-card-body">
          <h5>{{ news.title }}</h5>
          <a :href="`news/${news.slug}`" class="uk-position-bottom">Подробнее</a>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script>
import {Swiper, SwiperSlide} from "vue-awesome-swiper";

export default {
  name: "NewsCarousel",
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      newsList: [],
      swiperOptions: {
        slidesPerView: 'auto',
        spaceBetween: 24,
        navigation: {
          nextEl: '.news-carousel-next',
          prevEl: '.news-carousel-prev'
        }
      }
    }
  },
  methods: {
    async getNews() {
      await this.$prestoApi.get('/news')
        .then(res => {
          this.newsList = res.data
          console.log(res.data)
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  created() {
    this.getNews()
  }
}
</script>

<style scoped lang="scss">
  .swiper-container {
    padding-left: 9.25rem;
    height: auto;
    display: flex;
    align-items: center;
    .swiper-slide {
      width: 17.25rem;
      height: auto;
      .uk-card {
        border-radius: 1.25rem;
        overflow: hidden;
        .uk-card-media-top {
          height: 11rem;
          img {
            height: 100%;
            object-fit: cover;
          }
          .uk-label {
            padding: 2px .75rem;
          }
          .uk-card-badge {
            top: 1rem;
            right: 1rem;
            background-color: #000912;
            border-radius: 1000px;
            text-transform: lowercase;
          }
        }
        .uk-card-body {
          background-color: #EDF3F9;
          height: 10.5rem;
          padding: 1.25rem 1.5rem 0;
          h5 {
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
            font-size: 1.25rem;
            line-height: 1.5rem;
            letter-spacing: 0.038rem;
            color: #001A34;
            font-family: 'GTEestiProDisplay-Regular', sans-serif;
          }
          .uk-position-bottom {
            left: 1.5rem;
            bottom: 2.125rem;
          }
        }
      }
    }
  }
</style>
