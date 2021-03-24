<template>
  <ul uk-accordion>
    <li class="uk-open">
      <a href="#" class="uk-accordion-title">Как объединить товары в одну <br class="uk-visible@l"> карточку ?</a>
      <div class="uk-accordion-content">
        <p>Вы можете объединить товары одной модели, но с разными характеристиками: например, размером, цветом или объемом. Когда товары представлены на одной карточке, покупателям удобнее выбирать и они чаще приобретают несколько вариантов товара или упаковку из нескольких штук.</p>
        <p>Более подробную информацию можно посмотреть <a href="#">здесь</a></p>
      </div>
    </li>
    <li>
      <a href="#" class="uk-accordion-title">Качественный трафик</a>
      <div class="uk-accordion-content">
        <p>У нас самая широкая сеть доставки в стране. Одних только пунктов выдачи больше 12 000. </p>
      </div>
    </li>
    <li>
      <a href="#" class="uk-accordion-title">Качественный трафик</a>
      <div class="uk-accordion-content">
        <p>У нас самая широкая сеть доставки в стране. Одних только пунктов выдачи больше 12 000. </p>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
name: "FaqAccordion"
}
</script>

<style scoped lang="scss">
  .uk-accordion-title {
    font-size: 30px;
    line-height: 36px;
    letter-spacing: 0.6px;
    color: #fff;
    font-family: 'GTEestiProDisplay-Regular', sans-serif;
    &:hover, &:focus {
      color: #fff;
    }
    &::before {
      background-image: url('./assets/images/faq-accordion-plus.svg');
    }
  }
  .uk-open>.uk-accordion-title::before {
    background-image: url('./assets/images/faq-accordion-minus.svg');
  }
  .uk-accordion-content {
    font-size: 20px;
    line-height: 28px;
    letter-spacing: 0.6px;
    color: #fff;
    font-family: 'GTEestiProText-Light', sans-serif;
    width: 80%;
  }
  @media screen and (max-width: 649px) {
    .uk-accordion-title {
      font-size: 18px;
      line-height: 24px;
      letter-spacing: .6px;
    }
    .uk-accordion-content {
      font-size: 16px;
      line-height: 20px;
      letter-spacing: .4px;
    }
  }
</style>
