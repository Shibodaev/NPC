<template>
  <section class="relative z-10 ">
    <BgSvg class="absolute z-0 top-0 left-0 sm:w-full sm:h-full bg-svg"></BgSvg>

    <div class="z-10 relative container ">
      <MainHeader/>
      <logo class="mb-3 block"></logo>
      <h1 class="mt-24 block max-w-4xl ">{{ title }}</h1>
    </div>
  </section>
  </template>

<script>
import Logo from '../Logo'
import MainHeader from "../MainHeader";

export default {
  name: "TopSections",
  props: {
    title: String
  },
  components: {
    MainHeader,
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/media';

section {
  min-height: calc(100vw * 0.43);
  @media (max-width: $bp-tablet-s) {
    padding-bottom: 4rem;

  }

}

h1 {
  margin-left: 1rem;
}
</style>
