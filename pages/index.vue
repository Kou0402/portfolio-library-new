<template>
  <section class="home">
    <HomeHero></HomeHero>
    <OrderArea></OrderArea>
    <PortfolioArea></PortfolioArea>
  </section>
</template>

<script>
import HomeHero from '~/components/page/home/HomeHero.vue'
import OrderArea from '~/components/page/home/OrderArea.vue'
import PortfolioArea from '~/components/page/home/PortfolioArea.vue'

export default {
  components: {
    HomeHero,
    OrderArea,
    PortfolioArea
  },
  async asyncData({ store }) {
    await store.dispatch('portfolio/initializePortfolios')
    await store.dispatch('portfolio/fetchPortfolios')
  }
}
</script>

<style lang="scss" scoped>
.home {
  width: 82vw;
  margin: 0 auto;
}
</style>
