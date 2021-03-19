<template>
  <div>
    <main id="main">
      <navbar />
      <div class="container">
        <div class="main__content uk-flex uk-flex-center uk-flex-column">
          <h1>Любому бизнесу найдётся место <br> на Ozon</h1>
          <p>Ozon — это прямой доступ к миллионам клиентов по всей России. Вы больше не ограничены размером вашего бизнеса и конкуренцией с крупными игроками. Предлагайте покупателям хорошие товары по выгодным ценам, а мы позаботимся о сервисе и доставке.</p>
          <scroll-button class="scroll-button" />
        </div>
      </div>
    </main>
    <section id="about">
      <div class="container">
        <div class="about__content uk-flex uk-flex-between uk-flex-middle">
          <h4 class="section-small-header">Важное про Ozon</h4>
          <navigation-buttons :nextSlide="'about-carousel-next'" :prevSlide="'about-carousel-prev'" />
        </div>
      </div>
      <about-carousel />
    </section>
    <section id="offer">
      <div class="container">
        <div class="offer__content">
          <h2 class="section-header">Предлагаем <br>бизнесу</h2>
          <div class="uk-grid uk-child-width-1-2" uk-grid>
            <div>
              <ul uk-accordion>
                <li>
                  <a href="#" class="uk-accordion-title">Больше продаж</a>
                  <div class="uk-accordion-content">
                    <p>4 млн уникальных посетителей генерируют от 200 000 заказов ежедневно. В высокий сезон — больше ></p>
                  </div>
                </li>
                <li>
                  <a href="#" class="uk-accordion-title">Качественный трафик</a>
                  <div class="uk-accordion-content">
                    <p>Среднемесячная аудитория Ozon — больше 55 млн уникальных посетителей. Это качественный трафик с высокой конверсией в продажи.</p>
                  </div>
                </li>
                <li>
                  <a href="#" class="uk-accordion-title">Клиентский сервис</a>
                  <div class="uk-accordion-content">
                    <p>Мы общаемся с клиентами, принимаем платежи и разбираемся в сложных ситуациях, чтобы вы могли сосредоточиться на развитии собственного дела.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <ul uk-accordion>
                <li>
                  <a href="#" class="uk-accordion-title">Безграничную доставку</a>
                  <div class="uk-accordion-content">
                    <p>У нас самая широкая сеть доставки в стране. Одних только пунктов выдачи больше 12 000. </p>
                  </div>
                </li>
                <li>
                  <a href="#" class="uk-accordion-title">Собственную рекламную платформу</a>
                  <div class="uk-accordion-content">
                    <p>Среднемесячная аудитория Ozon — больше 55 млн уникальных посетителей. Это качественный трафик с высокой </p>
                  </div>
                </li>
                <li>
                  <a href="#" class="uk-accordion-title">Известный бренд</a>
                  <div class="uk-accordion-content">
                    <p>93% знание в России. Развивайте бизнес под крылом известного бренда которому доверяют.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="events">
      <div class="container">
        <div class="events__content">
          <h2 class="section-header">Мероприятия <br>для партнёров</h2>
          <p class="section-info">Узнавайте информацию из первых рук, общайтесь с действующими продавцами, <br> будьте в курсе новых инструментов и возможностей маркетплейса.</p>
          <div class="events__content-navigation uk-flex uk-flex-between uk-flex-middle">
            <a href="/events" class="page-link">Все мероприятия</a>
            <navigation-buttons :nextSlide="'events-carousel-next'" :prevSlide="'events-carousel-prev'" />
          </div>
        </div>
      </div>
      <events-carousel />
    </section>
    <section id="understanding">
      <div class="container">
        <div class="understanding__content">
          <h2 class="section-header">Разбираемся</h2>
          <p class="section-info">Узнайте, с чего начать из серии коротких обучающих роликов. <br> Познакомьтесь с Личным кабинетом и инструментами для работы на маркетплейсе.
            <br> Настройте аналитику и научитесь запускать эффективные рекламные кампании.</p>
          <div class="understanding__content-navigation__news uk-flex uk-flex-between uk-flex-middle">
            <h4 class="section-small-header">Новости маркетплейса</h4>
            <div class="navigation-block uk-flex">
              <a href="/news" class="page-link">Все новости</a>
              <navigation-buttons :nextSlide="'news-carousel-next'" :prevSlide="'news-carousel-prev'" />
            </div>
          </div>
        </div>
      </div>
      <news-carousel />
      <div class="container">
        <div class="understanding__content-navigation__articles uk-flex uk-flex-between uk-flex-middle">
          <h4 class="section-small-header">Статьи</h4>
          <div class="navigation-block uk-flex">
            <a href="/articles" class="page-link">Все статьи</a>
            <navigation-buttons :nextSlide="'articles-carousel-next'" :prevSlide="'articles-carousel-prev'" />
          </div>
        </div>
      </div>
      <articles-carousel />
    </section>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import ScrollButton from "@/components/ScrollButton";
import AboutCarousel from "@/components/AboutCarousel";
import NavigationButtons from "@/components/NavigationButtons";
import EventsCarousel from "@/components/EventsCarousel";
import NewsCarousel from "@/components/NewsCarousel";
import ArticlesCarousel from "@/components/ArticlesCarousel";

export default {
  components: {
    Navbar,
    ScrollButton,
    AboutCarousel,
    NavigationButtons,
    EventsCarousel,
    NewsCarousel,
    ArticlesCarousel
  },
  data() {
    return {
      prevAccordionIndex: null
    }
  },
  methods: {
    handleAccordionShow() {
      // if (this.prevAccordionIndex !== null) {
      //   this.$uikit.accordion(this.$refs.accordion[this.prevAccordionIndex]).toggle(0, false)
      //   this.prevAccordionIndex = index
      // } else {
      //   this.prevAccordionIndex = index
      // }
      this.$uikit.accordion(this.$refs.accordion1).hide()
    },

  }
}
</script>

<style lang="scss">
  @import '../assets/css/uikit.min.css';

  $text-color: #fff;
  $dark-blue: #001A34;
  $font-regular: 'GTEestiProDisplay-Regular', sans-serif;
  $font-medium: 'GTEestiProDisplay-Medium', sans-serif;
  $font-light: 'GTEestiProText-Light', sans-serif;
  $header-font-size: 4.5rem;
  $header-letter-spacing: 0.05rem;

  .container {
    margin: 0 9.25rem;
  }
  .section-header {
    font-size: $header-font-size;
    color: $dark-blue;
    letter-spacing: $header-letter-spacing;
    font-family: $font-medium;
    line-height: $header-font-size;
  }
  .section-info {
    color: $dark-blue;
    letter-spacing: .025rem;
    font-family: $font-light;
    line-height: 1.25rem;
  }
  .section-small-header {
    font-size: 1.875rem;
    color: $dark-blue;
    font-family: $font-medium;
    line-height: 2.25rem;
    letter-spacing: 0.038rem;
    margin: 0;
  }
  a.page-link {
    color: $dark-blue;
    line-height: 1.25rem;
    letter-spacing: .025rem;
    text-decoration: none;
    background-color: #EFF3F6;
    border-radius: 62.5rem;
    padding: .875rem 1.5rem;
    transition: all .3s ease-in-out;
    margin-right: .75rem;
    &:hover {
      background-color: #ccd8e4;
    }
  }

  #main {
    min-height: 100vh;
    background-image: url('./assets/images/main-bg.jpeg');
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 0 0 60px 60px;
    .main__content {
      min-height: calc(100vh - 80px);
      position: relative;
      h1 {
        font-size: 5rem;
        line-height: 5rem;
        letter-spacing: .05rem;
        color: $text-color;
        font-family: $font-medium;
        width: 60%;
        margin-bottom: 2rem;
      }
      p {
        color: $text-color;
        font-family: $font-light;
        margin: 0;
        width: 45%;
        font-size: 1.25rem;
        line-height: 1.75rem;
        letter-spacing: 0.038rem;
      }
      .scroll-button {
        position: absolute;
        right: 0;
        bottom: 6.75rem;
      }
    }
  }
  #about {
    .about__content {
      padding: 4.125rem 0 2.875rem;
    }
  }
  #offer {
    padding: 3.75rem 0 4.5rem;
    .offer__content {
      .section-header {
        margin-bottom: 3.75rem;
      }
      .uk-accordion-title {
        font-size: 1.5rem;
        font-family: $font-medium;
        color: $dark-blue;
        margin-bottom: 1.75rem;
        letter-spacing: .038rem;
        &::before {
          background-image: url('./assets/images/accordion-plus.svg');
          border-radius: 100%;
        }
      }
      .uk-open>.uk-accordion-title::before {
        background-image: url('./assets/images/accordion-minus.svg');
        border-radius: 100%;
      }
      .uk-accordion-content {
        font-size: 1.25rem;
        color: $dark-blue;
        letter-spacing: .038rem;
        font-family: $font-light;
        line-height: 1.75rem;
      }
    }
  }
  #events {
    padding-top: 3.75rem;
    .events__content {
      .section-header {
        margin-bottom: 1.5rem;
      }
      &-navigation {
        padding: 1.25rem 0;
      }
    }
  }
  #understanding {
    padding-top: 3.75rem;
    .understanding__content {
      .section-header {
        margin-bottom: 1.5rem;
      }
      &-navigation__news, &-navigation__articles {
        padding: 3.75rem 0 1.25rem;
      }
    }
  }
</style>
