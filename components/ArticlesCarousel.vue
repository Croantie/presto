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
          <div class="slide__content-text__link uk-position-bottom">
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
  padding-top: 20px;
  .swiper-slide {
    cursor: pointer;
    height: 19rem;
    border-radius: 20px;
    transition: all .3s ease-in-out;
    &:hover {
      box-shadow: 0 0 2.313rem 0 rgba(0,0,0,0.1);
    }
    .slide__top-block {
      padding: 2rem 1.188rem 1.125rem 2rem;
      .date-text {
        color: #99A3AD;
        font-family: 'GTEestiProText-Light', sans-serif;
        line-height: 20px;
        letter-spacing: .4px;
      }
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
      &-text {
        &__header {
          h5 {
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
            font-size: 1.5rem;
            line-height: 1.75rem;
            letter-spacing: .038rem;
            font-family: 'GTEestiProDisplay-Regular', sans-serif;
            color: #001A34;
          }
        }
        &__description {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
          line-height: 1.25rem;
          font-family: 'GTEestiProText-Light', sans-serif;
          color: #001A34;
        }
        &__link {
          left: 2rem;
          bottom: 2rem;
          a {
            color: #005BFF;
            text-decoration: none;
            font-family: 'GTEestiProText-Light', sans-serif;
            line-height: 20px;
            letter-spacing: .4px;
          }
        }
      }

    }
  }
}
</style>
