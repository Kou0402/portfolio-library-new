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
  data() {
    return {
      startScrollYOffset: 0
    }
  },
  async asyncData({ store }) {
    store.dispatch('portfolio/initializePortfolios')
    store.dispatch('portfolio/initializeLastData')
    await store.dispatch('portfolio/fetchPortfolios')
  },
  mounted() {
    this.setInfiniteScrollSetting()
  },
  methods: {
    setInfiniteScrollSetting() {
      window.addEventListener('scroll', this.infiniteScroll)
      this.startScrollYOffset = Math.floor(window.innerHeight / 3)
    },
    async infiniteScroll() {
      if (window.pageYOffset >= this.startScrollYOffset) {
        this.startScrollYOffset = window.innerHeight + window.pageYOffset
        await this.$store.dispatch('portfolio/fetchPortfolios')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  width: 82vw;
  margin: 0 auto;
}
</style>
