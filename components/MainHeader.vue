<template>
  <!--  <header class="header" :btn="btn">-->
  <header class="header flex place-items-center flex-wrap sm:flex-no-wrap ">
    <button class="btn btn--bg-red btn--small order-1 md:ml-6">
      <span>Личный кабинет</span>
    </button>
    <div class="ml-0 mt-6  sm:ml-12 sm:mt-0 order-3 sm:order-2 w-full sm:w-auto md:ml-11 ">
      <b>
        <NuxtLink to="/" class="text-black">
          Каталог услуг
        </NuxtLink>
      </b>
    </div>
    <NuxtLink to="/" class=" order-2 sm:order-3  online-assistant flex place-items-center ml-auto">
      <SvgIcon name="online-assistant" class="mr-6 online-assistant__header-icon"/>
      <span>Онлайн помощник</span>
    </NuxtLink>
  </header>

</template>
<script>
import Logo from './Logo.vue';
import ItemNav from './menu/ItemNav.vue';

export default {

  components: {
    Logo
  },
  props: {
    menu: Array,
    btn: String
  }
}
</script>
<style lang="scss" scoped>
@import '~/assets/scss/media';

.header {

  background: transparent;

  @media (max-width: $bp-tablet-s) {
    padding: 1.5rem 0 3.5rem;
  }
  @media (min-width: $bp-tablet-s) {
    padding-top: 3.5rem;
    padding-bottom: 3.5rem;
    margin-bottom: calc(6.3rem / 2);
  }
}
</style>
