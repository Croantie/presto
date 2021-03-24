<template>
  <nav class="uk-navbar-container uk-navbar-transparent" ref="navbar" uk-navbar>
    <div class="uk-navbar-left">
      <a href="#main" class="uk-navbar-item uk-logo" style="margin-top: 10px;">
        <img src="../assets/images/logo.svg" alt="Ozon logo" class="uk-visible@s">
        <img src="../assets/images/mobile-logo.svg" alt="Ozon logo" class="uk-hidden@s">
      </a>
    </div>
    <div class="uk-navbar-right uk-visible@s">
      <ul class="uk-navbar-nav uk-flex uk-flex-middle">
        <li>
          <a href="/start">С чего начать</a>
        </li>
        <li>
          <a href="/histories">Истории успеха</a>
        </li>
        <li>
          <a href="/learning">Обучение</a>
        </li>
        <li>
          <a href="/about" class="uk-visible@l">О компании</a>
        </li>
        <li>
          <a href="/services" class="uk-visible@l">Сервисы и партнёры</a>
        </li>
        <li>
          <a href="/events" class="uk-visible@l">Мероприятия</a>
        </li>
        <li>
          <a href="">Ещё <i uk-icon="more" /></a>
        </li>
        <li>
          <button>Войти</button>
        </li>
      </ul>
    </div>
    <div class="uk-navbar-right uk-hidden@s">
      <a class="uk-navbar-toggle" uk-toggle href="#offcanvas-usage">
        <img src="@/assets/images/menu-icon.svg" alt="menu">
      </a>
      <div id="offcanvas-usage" uk-offcanvas="overlay: true" @beforeshow="hideFilter" @hidden="showFilter">
        <div class="uk-offcanvas-bar">
          <button class="uk-offcanvas-close" type="button" uk-close />
          <ul class="uk-navbar-nav uk-flex uk-flex-column">
            <li>
              <a href="/start">С чего начать</a>
            </li>
            <li>
              <a href="/histories">Истории успеха</a>
            </li>
            <li>
              <a href="/about">О компании</a>
            </li>
            <li>
              <a href="/services">Наши сервисы</a>
            </li>
            <li>
              <a href="/events">Мероприятия</a>
            </li>
            <li>
              <a href="">Ещё <i uk-icon="chevron-down" /></a>
            </li>
            <li>
              <button>Войти</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  methods: {
    hideFilter() {
      console.log('hello')
      this.$refs.navbar.style.backdropFilter = 'none'
    },
    showFilter() {
      console.log('hide')
      this.$refs.navbar.style.backdropFilter = 'blur(8px)'
    }
  }
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
    .uk-offcanvas-bar {
      background-color: #fff;
      padding: 16px;
      ul {
        padding-top: 56px;
        li {
          height: 52px;
          a {
            color: #001A34;
            padding: 0;
            justify-content: start;
          }
          button {
            width: 100%;
            margin: 1rem 0;
          }
        }
      }
    }
  }
  @media screen and (max-width: 649px) {
    .uk-navbar-container {
      padding: 0 1rem;
    }
    .uk-close {
      color: #001A34 !important;
    }
  }
</style>
