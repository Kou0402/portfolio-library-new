<template>
  <section class="mypage">
    <template v-if="portfolio.docId">
      <h2>サイトタイトル</h2>
      <h3>{{ portfolio.title }}</h3>
      <h2>サイトURL</h2>
      <h3>{{ portfolio.url }}</h3>
      <h2>サイト画像</h2>
      <img :src="portfolio.captureUrl" />
      <PushInButton @emitedClick="toPostPage">編集する</PushInButton>
    </template>
    <template v-else>
      <p>まだポートフォリオを投稿していません。</p>
      <p>投稿ページからポートフォリオを投稿しよう！</p>
      <PushInButton @emitedClick="toPostPage">投稿ページへ</PushInButton>
    </template>
  </section>
</template>

<script>
import firebase from '@/plugins/firebase'
import PushInButton from '~/components/ui/button/PushInButton.vue'

export default {
  components: {
    PushInButton
  },
  data() {
    return {
      portfolio: {
        uid: '',
        docId: '',
        title: '',
        url: '',
        captureUrl: '',
        twitterId: ''
      },
      isPosting: false
    }
  },
  created() {
    if (this.$store.getters['auth/isLogin']) {
      firebase.auth().onAuthStateChanged(async (currentUser) => {
        this.portfolio.uid = currentUser.uid
        await this.$store.dispatch(
          'portfolio/fetchPortfolio',
          this.portfolio.uid
        )
        this.setPortfolioData()
      })
    }
  },
  methods: {
    /**
     * Get portfolio data from store and set to data.
     */
    setPortfolioData() {
      const portfolioData = this.$store.getters['portfolio/portfolio']
      if (portfolioData.docId) {
        this.portfolio.docId = portfolioData.docId
        this.portfolio.title = portfolioData.title
        this.portfolio.url = portfolioData.url
        this.portfolio.captureUrl = portfolioData.captureUrl
        this.portfolio.twitterId = portfolioData.twitterId
      }
    },
    /**
     * Transition to the posting page.
     */
    toPostPage() {
      this.$router.push('/post')
    }
  }
}
</script>

<style lang="scss" scoped>
section {
  font-size: 3rem;
}
</style>
