<template>
  <section >
    <div class="container">
      <div class="text-center">
        <h2 class="title-1 title-1--big title-1--style">{{ Advantage.title }}</h2>
      </div>
      <div class="advantage-properties flex-col sm:flex-row flex justify-center">
        <div class="advantage-properties__item text-center" v-for="item in Advantage.items" :key="item.id">
          <div class="advantage-properties__icon">
            <SvgIcon :name="item.path"/>
          </div>
          <div class="advantage-properties__number">{{ item.num }}</div>
          <div class="advantage-properties__text">{{ item.text }}</div>

        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Advantage",
  components: {},
  props: {
    Advantage: Object,
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/media';

section {
  padding: 3rem 0 6rem;

  @media (min-width: $bp-tablet-s) {
    padding-top: 16rem;
    padding-bottom: calc(24rem / 2);
  }

  .title-1 {
    position: relative;
    display: inline-block;
    margin: 0 auto 9rem;

    @media (max-width: $bp-tablet-s) {
      margin-bottom: 2rem;
    }
  }

  .advantage-properties {
    &__item {
      flex: 1 1 calc(91rem / 3);
      padding: 0 1.5rem;

    }

    &__icon {
      position: relative;
      svg {
        position: relative;
        margin: 0 auto;
        object-fit: cover ;
        object-position: center;
      }
    }

    &__text {
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      line-height: 122.4%;
      text-align: center;
      margin-top: .8em;
      color: var(--black-default);
    }
    &__number {
      font-style: normal;
      font-weight: 700;
      font-size: 5rem;
      line-height: 122.4%;
      color: var(--blue);
    }

  }
}
</style>
