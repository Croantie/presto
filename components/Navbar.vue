<template>
  <nav class="uk-navbar-container uk-navbar-transparent" uk-navbar>
    <div class="uk-navbar-left">
      <a href="#main" class="uk-navbar-item uk-logo" style="margin-top: 10px;">
        <img src="../assets/images/logo.svg" alt="">
      </a>
    </div>
    <div class="uk-navbar-right uk-visible@s">
      <ul class="uk-navbar-nav uk-flex uk-flex-middle">
        <li>
          <a href="#about" uk-scroll>С чего начать</a>
        </li>
        <li>
          <a href="#testimonials" uk-scroll>Истории успеха</a>
        </li>
        <li>
          <a href="#get" uk-scroll>Обучение</a>
        </li>
        <li>
          <a href="#get" uk-scroll>О компании</a>
        </li>
        <li>
          <a href="#get" uk-scroll>Сервисы и партнёры</a>
        </li>
        <li>
          <a href="#get" uk-scroll>Мероприятия</a>
        </li>
        <li>
          <a href="#get" uk-scroll>Ещё <i uk-icon="more" /></a>
        </li>
        <li>
          <button>Войти</button>
        </li>
      </ul>
    </div>
    <div class="uk-navbar-right uk-hidden@s">
      <a class="uk-navbar-toggle" uk-toggle uk-icon="icon: menu" href="#offcanvas-usage" />
      <div id="offcanvas-usage" uk-offcanvas="overlay: true">
        <div class="uk-offcanvas-bar">
          <button class="uk-offcanvas-close" type="button" uk-close />
          <ul class="uk-navbar-nav uk-flex uk-flex-column">
            <li>
              <a href="#about" uk-scroll>About</a>
            </li>
            <li>
              <a href="#testimonials" uk-scroll>Testimonials</a>
            </li>
            <li>
              <a href="#get" uk-scroll>Mobile app</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar"
}
</script>


<style scoped lang="scss">
  .uk-navbar-container {
    background: rgba(0, 26, 52, 0.1);
    backdrop-filter: blur(8px);
    padding: 0 1.75rem;
    max-height: 5rem;
    a.uk-navbar-item.uk-logo {
      padding: 0;
      margin: 0 !important;
    }
    .uk-navbar-nav {
      li {
        a {
          padding: 0 1rem;
          text-transform: none;
          color: #fff;
          font-size: 1rem;
          letter-spacing: 0.04rem;
          font-family: 'GTEestiProDisplay-Regular', sans-serif;
          transition: all .3s ease;
          & i {
            margin-left: .625rem;
          }
          &:hover {
            text-shadow: 0 0 0.01px #fff;
          }
        }
        button {
          border: none;
          outline: none;
          background-color: #EFF3F6;
          cursor: pointer;
          width: 5.813rem;
          height: 2.5rem;
          margin-left: 2.875rem;
          color: #001A34;
          font-family: 'GTEestiProDisplay-Regular', sans-serif;
          font-size: 1rem;
          border-radius: 62.5rem;
          transition: all .3s ease;
          &:hover {
            box-shadow: 0 0 8px 0 rgba(0,0,0,0.55);
          }
        }
      }
    }
  }
</style>
