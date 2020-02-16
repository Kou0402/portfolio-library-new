<template>
  <section class="portfolio-area">
    <PortfolioCard
      v-for="item in portfolioData"
      :key="item.id"
      :url="item.url"
      :title="item.title"
      :capture-url="item.captureUrl"
      :twitter-id="item.twitterId"
      :doc-id="item.docId"
    ></PortfolioCard>
  </section>
</template>

<script>
import PortfolioCard from '~/components/page/home/PortfolioCard.vue'

export default {
  components: {
    PortfolioCard
  },
  computed: {
    portfolioData() {
      return this.$store.getters['portfolio/portfolios']
    }
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
