<template>
  <section class="question relative">
    <div class="z-10 relative container flex place-items-center flex-col">
      <h2 class=" ml-0 sm:ml-32 mb-16 ">{{ Questions.questions }}</h2>
      <div class="btn__wrap flex flex-col sm:flex-row">
        <NuxtLink to="/" class="btn  mb-6 sm:m-0 sm:mr-10 btn--bg-red btn--large ">{{ Questions.btn1 }}</NuxtLink>
        <NuxtLink to="/" class="pl-12  sm:m-0 pr-12 btn btn--bg-blue btn--large">{{ Questions.btn2 }}</NuxtLink>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "question",
  props: {
    Questions: Object,
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/media';
.question {
  padding: 8.2rem 0 13rem;
  box-sizing: border-box;
  object-fit: cover;
  width: 100%;
  height: 100%;
  @media (max-width: $bp-tablet-s) {
    padding-top: 18.5rem;
  }
  h2 {
    max-width: 59rem;
    box-sizing: border-box;

  }
}
.question:after {
  content: "";
  background-image: url(./static/img/no-name.png);
  background-repeat: no-repeat;
  height: 100%;
  background-position: bottom;
  background-size: contain;
  position: absolute;
  background-color: #F1F2F2;
  bottom: 0;
  left: 0;
  z-index: 0;
  box-sizing: border-box;
  width: 100%;
  right: 0;

}
</style>
