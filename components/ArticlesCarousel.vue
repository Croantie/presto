<template>
  <swiper :options="swiperOptions">
    <swiper-slide v-for="(article, key) in articles" :key="key">
      <div class="slide__top-block uk-flex uk-flex-between uk-flex-middle">
        <div class="date-text">Дата публикации</div>
        <div class="uk-label">{{ $moment(article.date).format('D MMMM') }}</div>
      </div>
      <div class="slide__content">
        <div class="slide__content-text">
          <div class="slide__content-text__header">
            <h5>{{ article.title }}</h5>
          </div>
          <div class="slide__content-text__description">
            <p>{{ article.excerpt }}</p>
          </div>
          <div class="slide__content-text__link">
            <a :href="`/articles/${article.slug}`">Читать статью</a>
          </div>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script>
import {Swiper, SwiperSlide} from "vue-awesome-swiper";

export default {
  name: "ArticlesCarousel",
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      articles: [],
      swiperOptions: {
        slidesPerView: 2,
        slidesPerColumn: 2,
        spaceBetween: 24,
        navigation: {
          nextEl: '.articles-carousel-next',
          prevEl: '.articles-carousel-prev'
        }
      }
    }
  },
  methods: {
    async getArticles() {
      await this.$prestoApi.get('/articles')
        .then(res => {
          this.articles = res.data
          console.log(res.data)
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  created() {
    this.getArticles()
  }
}
</script>

<style scoped lang="scss">
.swiper-container {
  padding-left: 9.25rem;
  height: 43rem;
  display: flex;
  align-items: center;
  .swiper-slide {
    height: 19rem;
    border: 1px solid black;
    border-radius: 20px;
    .slide__top-block {
      padding: 2rem 1.188rem 1.125rem 2rem;
      .uk-label {
        padding: 2px .75rem;
        background-color: #000912;
        border-radius: 1000px;
        text-transform: lowercase;
        font-family: 'GTEestiProDisplay-Regular', sans-serif;
      }
    }
    .slide__content {
      padding: 0 2rem;
    }
  }
}
</style>
