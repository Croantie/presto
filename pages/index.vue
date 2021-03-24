<template>
  <div>
    <main id="main">
      <navbar />
      <div class="container main__container">
        <div class="main__content uk-flex uk-flex-center uk-flex-column">
          <h1>Любому бизнесу <br> найдётся место <br class="uk-visible@l"> на Ozon</h1>
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
          <h2 class="section-header">Предлагаем <br class="uk-visible@s">бизнесу</h2>
          <div class="uk-grid uk-child-width-1-2@s" uk-grid>
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
          <p class="section-info">Узнавайте информацию из первых рук, общайтесь с действующими продавцами, <br class="uk-visible@s"> будьте в курсе новых инструментов и возможностей маркетплейса.</p>
          <div class="events__content-navigation uk-flex uk-flex-between uk-flex-middle uk-visible@s">
            <a href="/events" class="page-link">Все мероприятия</a>
            <navigation-buttons :nextSlide="'events-carousel-next'" :prevSlide="'events-carousel-prev'" />
          </div>
        </div>
      </div>
      <events-carousel />
      <div class="container uk-hidden@s">
        <a href="/events" class="page-link">Смотреть все мероприятия</a>
      </div>
    </section>
    <section id="understanding">
      <div class="container">
        <div class="understanding__content">
          <h2 class="section-header">Разбираемся</h2>
          <p class="section-info">Узнайте, с чего начать из серии коротких обучающих роликов. <br> Познакомьтесь с Личным кабинетом и инструментами для работы на маркетплейсе.
            <br class="uk-visible@s"> Настройте аналитику и научитесь запускать эффективные рекламные кампании.</p>
          <div class="understanding__content-navigation__news uk-flex uk-flex-between uk-flex-middle">
            <h4 class="section-small-header">Новости маркетплейса</h4>
            <div class="navigation-block uk-flex uk-visible@s">
              <a href="/news" class="page-link">Все новости</a>
              <navigation-buttons :nextSlide="'news-carousel-next'" :prevSlide="'news-carousel-prev'" />
            </div>
          </div>
        </div>
      </div>
      <news-carousel />
      <div class="container uk-hidden@s" style="margin-top: 2rem;">
        <a href="/news" class="page-link">Смотреть все новости</a>
      </div>
      <div class="container">
        <div class="understanding__content-navigation__articles uk-flex uk-flex-between uk-flex-middle">
          <h4 class="section-small-header">Статьи</h4>
          <div class="navigation-block uk-flex uk-visible@s">
            <a href="/articles" class="page-link">Все статьи</a>
            <navigation-buttons :nextSlide="'articles-carousel-next'" :prevSlide="'articles-carousel-prev'" />
          </div>
        </div>
      </div>
      <articles-carousel />
      <div class="container uk-hidden@s" style="margin-top: 2rem;">
        <a href="/articles" class="page-link">Читать все статьи</a>
      </div>
    </section>
    <section id="big-data">
      <div class="container">
        <transition name="fade" mode="out-in">
          <div class="big-data__content uk-flex uk-flex-between uk-flex-middle" v-if="bigDataVisible">
            <img src="~/assets/images/close-icon.svg" alt="close icon" class="uk-position-top-right" @click="hideBigDataBlock">
            <div class="text">
              <h3>Big data</h3>
              <p>Хотите узнать о популярных <br> поисковых запросах?</p>
            </div>
            <div class="button">
              <a href="/big-data">Хочу узнать</a>
            </div>
          </div>
        </transition>
      </div>
    </section>
    <section id="faq">
      <div class="container">
        <div class="faq__content uk-grid uk-child-width-1-2@s">
          <div>
            <div class="text">
              <h2 class="section-header">Остались <br class="uk-visible@s">вопросы?</h2>
              <p>Узнавайте информацию из первых рук, общайтесь с действующими продавцами, будьте в курсе новых инструментов и возможностей маркетплейса.</p>
              <a href="/faq" class="faq-link uk-visible@s">Все вопросы-ответы</a>
            </div>
          </div>
          <div>
            <div class="accordion">
              <faq-accordion />
            </div>
            <a href="/faq" class="faq-link uk-hidden@s">Все вопросы-ответы</a>
          </div>
        </div>
      </div>
    </section>
    <footer id="footer">
      <div class="container">
        <div class="footer__content">
          <div class="uk-grid uk-child-width-1-3@s">
            <div>
              <div class="usefull item">
                <p class="head">Полезные ссылки</p>
                <div class="links uk-flex uk-flex-column">
                  <a href="/locations/fbs">Адреса пунктов приема FBS</a>
                  <a href="/locations/ozon">Адреса складов Ozon</a>
                  <a href="/packing/fbo">Правила упаковки FBO</a>
                  <a href="/packing/fbs">Правила упаковки FBS</a>
                </div>
              </div>
            </div>
            <div>
              <div class="more item">
                <p class="head">Ещё есть</p>
                <div class="links uk-flex uk-flex-column">
                  <a href="/news">Новости</a>
                  <a href="/developers">Ozon Seller API</a>
                  <a href="/abroad-sales">Продажи из-за рубежа</a>
                </div>
              </div>
            </div>
            <div>
              <div class="socials item">
                <p class="head">Мы с соцсетях</p>
                <div class="links">
                  <a href="https://www.instagram.com/" target="_blank">
                    <img src="@/assets/images/instagram.svg" alt="instagram">
                  </a>
                  <a href="https://www.facebook.com/" target="_blank">
                    <img src="@/assets/images/facebook.svg" alt="facebook">
                  </a>
                  <a href="https://vk.com/" target="_blank">
                    <img src="@/assets/images/vk.svg" alt="vkontakte">
                  </a>
                  <a href="https://twitter.com/" target="_blank">
                    <img src="@/assets/images/twitter.svg" alt="twitter">
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
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
import FaqAccordion from "@/components/FaqAccordion";

export default {
  components: {
    Navbar,
    ScrollButton,
    AboutCarousel,
    NavigationButtons,
    EventsCarousel,
    NewsCarousel,
    ArticlesCarousel,
    FaqAccordion
  },
  data() {
    return {
      prevAccordionIndex: null,
      bigDataVisible: true
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
    hideBigDataBlock() {
      this.bigDataVisible = false
    }
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
  $header-letter-spacing: 0.8px;
  $text-letter-spacing: 0.6px;

  .fade-enter-active, .fade-leave-active {
    transition: opacity .7s ease;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
    //height: 0;
  }

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
    font-family: $font-regular;
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
      .uk-accordion {
        li {
          margin-bottom: 1.75rem;
          .uk-accordion-title {
            font-size: 1.5rem;
            font-family: $font-medium;
            color: $dark-blue;
            letter-spacing: .038rem;
            &::before {
              background-image: url('./assets/images/accordion-plus.svg');
              border-radius: 100%;
            }
          }
          .uk-accordion-content {
            font-size: 1.25rem;
            color: $dark-blue;
            letter-spacing: .038rem;
            font-family: $font-light;
            line-height: 1.75rem;
          }
        }
        .uk-open>.uk-accordion-title::before {
          background-image: url('./assets/images/accordion-minus.svg');
          border-radius: 100%;
        }
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
  #big-data {
    padding: 20px 0;
    .big-data__content {
      height: 10.5rem;
      width: 100%;
      padding: 0 5.25rem;
      position: relative;
      background-image: url('@/assets/images/big-data-bg.jpeg');
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center center;
      border-radius: 20px;
      img {
        top: 1.5rem;
        right: 1.5rem;
        cursor: pointer;
      }
      .text {
        h3, p {
          color: #fff;
          font-family: $font-regular;
        }
        h3 {
          font-size: 3.5rem;
          line-height: 3.75rem;
          letter-spacing: $header-letter-spacing;
          margin-bottom: 12px;
        }
        p {
          font-size: 1.25rem;
          line-height: 1.5rem;
          margin: 0;
          letter-spacing: $text-letter-spacing;
        }
      }
      .button {
        a {
          padding: 1rem 1.5rem;
          border-radius: 8px;
          text-decoration: none;
          background-color: #fff;
          color: $dark-blue;
          font-size: 1.125rem;
          line-height: 1.5rem;
          letter-spacing: .7px;
          font-family: $font-regular;
        }
      }
    }
  }
  #faq {
    background-color: #15171f;
    border-radius: 60px 60px 0 0;
    margin-top: 40px;
    .faq__content {
      padding: 7.5rem 0 6.75rem;
      .text {
        .section-header {
          color: #fff;
          margin-bottom: 2rem;
        }
        p {
          font-size: 1.25rem;
          line-height: 1.75rem;
          letter-spacing: $text-letter-spacing;
          color: #fff;
          font-family: $font-light;
          margin: 0 0 3rem;
        }
        a.faq-link {
          padding: 1rem 1.5rem;
          border-radius: 8px;
          text-decoration: none;
          background-color: #fff;
          color: $dark-blue;
          font-size: 1.125rem;
          line-height: 1.5rem;
          letter-spacing: .7px;
          font-family: $font-regular;
        }
      }
    }
  }
  #footer {
    background-color: #101117;
    padding: 3.75rem 0;
    .footer__content {
      .item {
        .head {
          font-size: 1.25rem;
          line-height: 1.5rem;
          letter-spacing: $text-letter-spacing;
          color: #fff;
          font-family: $font-regular;
          margin-bottom: 1rem;
        }
        .links {
          a {
            color: #fff;
            font-family: $font-light;
            text-decoration: none;
            line-height: 1.25rem;
            letter-spacing: .4px;
            margin-bottom: .5rem;
          }
        }
      }
      .socials {
        .links {
          a {
            margin-right: 1rem;
            &:last-child {
              margin-right: 0;
            }
          }
        }
      }
    }
  }
  @media screen and (max-width: 1199px) {
    .container {
      margin: 0 1.75rem;
      &.main__container {
        margin: 0 6.75rem;
      }
    }
    .section-header {
      font-size: 2.875rem;
      line-height: 3rem;
    }
    a.page-link {
      padding: .875rem 1.25rem;
    }
    #main {
      .main__content {
        h1 {
          font-size: 2.875rem;
          line-height: 3rem;
          width: 100%;
        }
        p {
          width: 70%;
        }
      }
    }
  }
  @media screen and (max-width: 649px) {
    .container, .container.main__container {
      margin: 0 1rem;
    }
    .section-header, .section-small-header {
      font-size: 1.5rem;
      line-height: 28px;
      letter-spacing: .6px;
    }
    a.page-link {
      color: #005BFF;
    }
    #main {
      background-position: center center;
      border-radius: 0 0 1.5rem 1.5rem;
      .main__content {
        h1 {
          font-size: 2.25rem;
          line-height: 2.5rem;
        }
        p {
          font-size: 1rem;
          line-height: 1.25rem;
          width: 100%;
        }
        .scroll-button {
          display: none;
        }
      }
    }
    #about {
      .about__content {
        padding: 2.5rem 0 1rem;
      }
    }
    #offer {
      padding: 20px 0;
      .offer__content {
        .section-header {
          margin-bottom: 2rem;
        }
        .uk-accordion {
          li {
            margin-bottom: 2rem;
            .uk-accordion-title {
              font-size: 18px;
              line-height: 24px;
              letter-spacing: .6px;
            }
            .uk-accordion-content {
              font-size: 1rem;
              line-height: 20px;
              letter-spacing: .4px;
            }
          }
        }
      }
    }
    #events {
      padding-top: 20px;
      .events__content {
        .section-header {
          margin-bottom: 12px;
        }
      }
    }
    #understanding {
      .understanding__content {
        .section-header {
          margin-bottom: 12px;
        }
      }
    }
    #big-data {
      padding-top: 42px;
      .big-data__content {
        flex-direction: column;
        height: 13rem;
        align-items: flex-start;
        justify-content: center;
        padding: 0 1rem;
        .text {
          h3 {
            font-size: 30px;
            line-height: 36px;
            letter-spacing: .6px;
          }
          p {
            font-size: 14px;
            line-height: 16px;
            letter-spacing: .4px;
            margin-bottom: 40px;
          }
        }
      }
    }
    #faq {
      border-radius: 2rem 2rem 0 0;
      .faq__content {
        padding: 40px 0;
        .text {
          .section-header {
            margin-bottom: 12px;
          }
          p {
            font-size: 16px;
            line-height: 20px;
            letter-spacing: .4px;
          }
        }
        .accordion {
          margin-bottom: 3rem;
        }
        a.faq-link {
          padding: 1rem 1.5rem;
          border-radius: 8px;
          text-decoration: none;
          background-color: #fff;
          color: $dark-blue;
          font-size: 1.125rem;
          line-height: 1.5rem;
          letter-spacing: .7px;
          font-family: $font-regular;
        }
      }
    }
    #footer {
      padding: 40px 0;
      .footer__content {
        .item {
          margin-bottom: 2rem;
          .head {
            font-size: 18px;
            line-height: 24px;
            letter-spacing: .6px;
          }
          .links {
            a {
              font-size: 14px;
              line-height: 16px;
              letter-spacing: .4px;
            }
          }
        }
      }
    }
  }
</style>
