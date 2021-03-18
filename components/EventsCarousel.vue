<template>
  <swiper :options="swiperOptions">
    <swiper-slide v-for="(event, key) in events" :key="key">
      <div class="slide__top-block uk-flex uk-flex-between uk-flex-middle">
        <div class="date">{{ $moment(event.date).format('D MMMM, hh:mm') }}</div>
        <div class="badge" :class="{'blue-bg': event.level === 'Для новичков'}">{{ event.level }}</div>
      </div>
      <div class="slide__content">
        <h3>{{ event.title }}</h3>
        <h5>Расскажем про</h5>
        <div class="slide__content-point">
          <ul class="uk-list">
            <li v-for="(point, key) in event.points" :key="key" class="uk-flex uk-flex-top">
              <img src="@/assets/images/check-icon.svg" alt="check-icon">
              <p>{{ point }}</p>
            </li>
          </ul>
        </div>
        <div class="slide__content-link uk-position-bottom">
          <a :href="`events/${event.slug}`">Подробнее</a>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script>
import {Swiper, SwiperSlide} from "vue-awesome-swiper";

export default {
  name: "EventsCarousel",
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      events: [],
      swiperOptions: {
        slidesPerView: 'auto',
        spaceBetween: 24,
        navigation: {
          nextEl: '.events-carousel-next',
          prevEl: '.events-carousel-prev'
        }
      }
    }
  },
  methods: {
    async getEvents() {
      await this.$prestoApi.get('/events')
        .then(res => {
          this.events = res.data
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  created() {
    this.getEvents()
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
      width: 23.5rem;
      margin: 2.3rem 0;
      height: auto;
      padding: 2rem 0 2rem 2rem;
      box-shadow: 0 0 2.313rem 0 rgba(0,0,0,.1);
      border-radius: 20px;
      .slide__top-block {
        .badge {
          padding: .5rem .75rem;
          background-color: #000912;
          border-radius: 5rem 0 0 5rem;
          color: #fff;
          font-size: .875rem;
        }
        .date {
          line-height: 1.25rem;
          color: #001A34;
          font-family: 'GTEestiProText-Light', sans-serif;
          letter-spacing: .025rem;
        }
        .blue-bg {
          background-color: #005BFF;
        }
      }
      .slide__content {
        padding-right: 2rem;
        h3 {
          margin: 1.5rem 0 1.25rem;
          font-size: 1.875rem;
          line-height: 2.25rem;
          letter-spacing: .038rem;
          font-family: 'GTEestiProDisplay-Medium', sans-serif;
          color: #001A34;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        h5 {
          font-size: 1.125rem;
          line-height: 1.5rem;
          letter-spacing: 0.038rem;
          color: #001A34;
          font-family: 'GTEestiProDisplay-Medium', sans-serif;
        }
        &-point {
          img {
            margin: 3px .813rem 0 0;
          }
          p {
            margin: 0 0 1rem;
            font-size: 0.875rem;
            line-height: 1rem;
            letter-spacing: .025rem;
            color: #001A34;
            font-family: 'GTEestiProText-Light', sans-serif;
          }
        }
        .uk-list>:nth-child(n+2) {
          margin-top: 0;
        }
        .uk-position-bottom {
          bottom: 2rem;
          left: 2rem;
          a {
            color: #004ED6;
            text-decoration: none;
            line-height: 1.25rem;
            letter-spacing: .025rem;
            font-family: 'GTEestiProText-Light', sans-serif;
          }
        }
      }
    }
  }
</style>
