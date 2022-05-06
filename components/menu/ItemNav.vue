  <template >
<span :item="item">
    <NuxtLink to="/">
      {{item}}
    </NuxtLink>
</span>

</template>

<script>
export default {
 props: ['item']
}
</script>

<style lang="scss">
.menu {
  margin-left: 3.8em;
  &__item {
    font-style: normal;
    font-weight: bold;
    font-size: 1.4rem;
    line-height: 1.5;
    color: var(--white);
    text-transform: uppercase;
    margin: 0 1.3em;
  }
}
</style>
