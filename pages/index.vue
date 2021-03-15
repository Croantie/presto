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
          <h4>Важное про Ozon</h4>
          <navigation-buttons />
        </div>
      </div>
      <about-carousel />
    </section>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import ScrollButton from "@/components/ScrollButton";
import AboutCarousel from "@/components/AboutCarousel/AboutCarousel";
import NavigationButtons from "@/components/AboutCarousel/NavigationButtons";

export default {
  components: {
    Navbar,
    ScrollButton,
    AboutCarousel,
    NavigationButtons
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

  .container {
    margin: 0 9.25rem;
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
      h4 {
        font-size: 1.875rem;
        color: $dark-blue;
        font-family: $font-medium;
        line-height: 2.25rem;
        letter-spacing: 0.038rem;
        margin: 0;
      }
    }
  }
</style>
