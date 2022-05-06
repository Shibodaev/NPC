<template>
  <nav class="mobile-menu" v-if="data.menu.length">
    <div class="mobile-menu-item-wrapper">
      <NuxtLink class="mobile-menu-item " v-for="(menuItem, index) of data.menu" :key="index" :to="menuItem.LINK"
                :class="{'active': index}">
        <span v-html="menuItem.NAME"></span>
      </NuxtLink>
    </div>
    <div class="mobile-menu-bg" @click="$emit('close')"></div>
  </nav>
</template>

<script>
export default {
  name: "LeftMenu",
  data() {
    return {
      activeIndex: -1
    }
  },
  props: {
    data: Object
  }
}
</script>

<style lang="scss">
@import "~/assets/scss/media.scss";

.mobile-menu {
  position: relative;
  width: 100%;

  &-item-wrapper {
    position: absolute;
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: white;
    padding-top: 5.4rem;
    padding-bottom: 1.9rem;
    @media(max-width: $bp-mobile) {
      padding-top: 6.4rem;
    }
  }

  &-item {
    font-size: 1.7rem;
    line-height: 2.5rem;
    padding: 0.7rem var(--container-p);

    &.nuxt-link-active {
      font-weight: 700;
      color: var(--purple);
    }
  }

  &-bg {
    position: absolute;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    right: 0;
    background-color: var(--shadow);
    z-index: -1;
  }
}
</style>
