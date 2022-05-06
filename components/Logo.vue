<template>
  <NuxtLink to="/">
    <SvgIcon name="logo" class="logo logo--header"/>
  </NuxtLink>
</template>
<style lang="scss" scoped=''>

@import '~/assets/scss/media';
.logo {
  width: 20.8rem;
  height: 6.1rem;
  box-sizing: border-box;
  margin-left: 1.5rem;
  @media (max-width: $bp-tablet-s) {
    margin-left: 0;
  }
}
</style>
