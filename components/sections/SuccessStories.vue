<template>
  <section>
    <div class="container">
      <div class="text-center  mb-10 sm:mb-0">
        <h2 class="title-1 title-1--big title-1--style">{{ SuccessStories.title }}</h2>
      </div>
      <div class="success-stories ">
        <article v-for="item in SuccessStories.items" :key="item.id"
                 class=" flex success-stories__item ">
          <div class="success-stories__item-img">
            <picture>
              <img :src="item.path" alt="">
            </picture>
          </div>
          <div class="success-stories__content flex  ">
            <h4>{{ item.title }}</h4>
            <blockquote>
              <div>
                <SvgIcon :name="item.svg"/>
              </div>
              <span>{{ item.blockquote }}</span>
            </blockquote>
            <div class="success-stories__text">{{ item.text }}</div>
            <NuxtLink class="btn btn--arrow btn--bg-blue btn--small" to="/">
              <span>Читать историю</span>
              <SvgIcon :name="item.svgArrow"/>

            </NuxtLink>
          </div>

        </article>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "SuccessStories",
  props: {
    SuccessStories: Object
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/media';

section {
  @media (min-width: $bp-tablet-s) {
    padding-top: calc(24rem / 2) + 1;
  }
}

.success-stories {

  @media (min-width: $bp-tablet-s) {
    width: 100rem;
    position: relative;
    margin: 3.8rem auto 0;
  }


  &__item {
    align-items: center;
    min-height: 33.5rem;
    &:not(:last-child) {
      margin-bottom: 2.7rem;
    }


    &:nth-child(even) {
      flex-direction: row-reverse;
      @media (max-width: $bp-tablet) {
        flex-direction: column;
      }
      img {
        left: 3rem;
      } ;

      .success-stories__content {
        margin-left: 0;
        margin-right: auto;
        @media (max-width: $bp-tablet) {
          margin: 0 auto;
        }
      }
    }
    @media (max-width: $bp-tablet) {
      flex-direction: column;
    }
  }

  &__item-img {
    width: calc(100% - 60rem);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    @media (max-width: $bp-tablet) {
      width: auto;
    }
    img {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: -2.4rem;
      right: 0;
      bottom: 0;
      @media (max-width: $bp-tablet) {
        position: relative;
        left: 0;
        top: 0;
        transform: translateY(0);
      }
    }
  }

  &__content {
    position: relative;
    flex-direction: column;
    margin-left: auto;
    width: 100%;
    max-width: 59rem;
    align-items: flex-start;
    height: 100%;
    min-height: 21.5rem;
    @media (max-width: $bp-tablet) {
      margin: 0 auto;
    }

  }

  &__text {
    display: block;
    margin-top: 1.2rem;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 115.4%;
  }

  blockquote {
    font-weight: 700;
    font-size: 1.6rem;
    line-height: 122.4%;
    margin-top: 2.2rem;
    display: flex;
    align-items: center;

    div {
      display: inline-block;
      margin-right: 1.9rem;
    }

    svg {
      width: 4.5rem;
      height: 3.2rem;
      display: inline-block;
    }

    span {
      text-align: left;
      color: var(--red);
    }
  }

  .btn {
    margin-top: 2rem;
  }
}
</style>
