<template>
  <section class="home">
    <HomeHero></HomeHero>
  </section>
</template>

<script>
import HomeHero from '~/components/page/home/HomeHero.vue'

export default {
  components: {
    HomeHero
  }
}
</script>

<style lang="scss" scoped>
.home {
  width: 82vw;
  margin: 0 auto;
}
</style>
