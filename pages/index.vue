<template>
  <section class="home">
    <HomeHero></HomeHero>
    <OrderArea></OrderArea>
  </section>
</template>

<script>
import HomeHero from '~/components/page/home/HomeHero.vue'
import OrderArea from '~/components/page/home/OrderArea.vue'

export default {
  components: {
    HomeHero,
    OrderArea
  }
}
</script>

<style lang="scss" scoped>
.home {
  width: 82vw;
  margin: 0 auto;
}
</style>
