<template>
  <section class="portfolio-area">
    <PortfolioCard></PortfolioCard>
    <PortfolioCard></PortfolioCard>
    <PortfolioCard></PortfolioCard>
    <PortfolioCard></PortfolioCard>
    <PortfolioCard></PortfolioCard>
  </section>
</template>

<script>
import PortfolioCard from '~/components/page/home/PortfolioCard.vue'

export default {
  components: {
    PortfolioCard
  }
}
</script>

<style lang="scss" scoped>
.portfolio-area {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(310px, 1fr));
  > .portfolio-card {
    margin: 1.6rem auto;
  }
}
</style>
