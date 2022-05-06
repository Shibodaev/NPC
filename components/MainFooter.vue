<template>
    <footer class="footer relative">
      <div class="footer-top">
        <div class="container flex place-items-center">
          <div class="z-10 relative flex flex-col place-items-center justify-start">
            <h2 class="title-1 title-1--big">Есть вопросы?</h2>
            <b class="text-center  block ">
              Задайте интересующие вас вопросы
              онлайн помощнику
            </b>
            <NuxtLink to="/" class="btn  btn--bg-red btn--svg-assistant w-full">
              <SvgIcon name="missile"/>
              <span>Онлайн помощник</span>
            </NuxtLink>
          </div>
        </div>
      </div>
      <div class="footer-bottom z-10 relative">
        <div class="container">
          <div class="nav mb-10 sm:mb-0">
            <NuxtLink to='/' class=" sm:mr-24" v-for="item in links" :key="item.id">{{ item }}</NuxtLink>
          </div>
          <a href='mailto:service@in-line.ru' class="inline-block mr-12 ml-auto copyright">
            service@in-line.ru
          </a>
          <a href='tel:8-800-200-74-30' class="b-phone">
            8-800-200-74-30
          </a>
        </div>
      </div>
    </footer>
</template>

<script>
import {data} from "autoprefixer";

export default {
  name: "MainFooter",
  props: {
    links: Array,
    id: Number,
  },


}
</script>

<style lang="scss">

@import '~/assets/scss/media';
.footer {
  margin-top: 17.5rem;
  @media (max-width: $bp-tablet-s) {
    margin-top: 6rem;
  }
  .nav {
    display: inline-block;
  }

  &-top {
    padding: 4.8rem 0 7.2rem;
    background-color: #F1F2F2;
    b {
      font-weight: 400;
      font-size: 1.6rem;
      line-height: 2.4rem;
      text-align: center;
      color: var(--black-default);
      margin: 0.7rem 0 2.9rem;
    }

    > .container > div:first-child {
      max-width: 26.5rem;
      position: relative;
      margin: 0 auto;

    }

    &:after {
      content: "";
      background-image: url(./static/img/no-name.png);
      transform: rotate(180deg);
      background-repeat: no-repeat;
      height: 100%;
      background-position: bottom;
      background-size: contain;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 0;
      box-sizing: border-box;
      width: 100%;
      right: 0;
    }
  }

  &-bottom {
    color: var(--white);
    background: var(--black-dark);
    padding: 3rem 0;
  }

}

</style>
