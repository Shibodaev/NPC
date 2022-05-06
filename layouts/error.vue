<template>
  <main class="main">
    <div class="container">
      <div class="error-404">
        <h1>Страница не найдена</h1>
        <logo class="error-404-logo"></logo>
        <div class="btn__wrap">
          <NuxtLink to="/" class="btn btn--gold"><span>На главную</span></NuxtLink>
        </div>
        </div>
    </div>
  </main>
</template>

<script>
import Logo from '../components/Logo'
export default {
  components: {
    Logo
  }
}
</script>


<style lang="scss">
.error-404{
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 9.3rem 2rem 12.8rem;
  h1 {
    color: var(--white);
  }
  &-logo{
    width: 44.8rem;
    height: 22.4rem;
    margin: 5.4rem 0 8.8rem;
  }
}
</style>
