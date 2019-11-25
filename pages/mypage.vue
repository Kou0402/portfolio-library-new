<template>
  <section class="mypage">
    <template v-if="docId">
      <h2>サイトタイトル</h2>
      <h3>{{ title }}</h3>
      <h2>サイトURL</h2>
      <h3>{{ url }}</h3>
      <h2>サイト画像</h2>
      <img :src="captureUrl" />
      <PushInButton @click="toPostPage">編集する</PushInButton>
    </template>
    <template v-else>
      <p>まだポートフォリオを投稿していません。</p>
      <p>投稿ページからポートフォリオを投稿しよう！</p>
      <PushInButton @click="toPostPage">投稿ページへ</PushInButton>
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
      uid: '',
      title: '',
      url: '',
      captureUrl: '',
      selectedFile: {},
      isPosting: false,
      docId: ''
    }
  },
  async created() {
    this.checkLogin()
    await this.$store.dispatch('portfolio/fetchPortfolio', this.uid)
    this.setPortfolioData()
  },
  methods: {
    /**
     * Check login status and set uid if logged in.
     * Otherwise, transition to the login page.
     */
    checkLogin() {
      const currentUser = firebase.auth().currentUser
      if (currentUser) {
        this.uid = currentUser.uid
      } else {
        this.$router.push('/login')
      }
    },
    /**
     * Get portfolio data from store and set to data.
     */
    setPortfolioData() {
      const portfolioData = this.$store.getters['portfolio/portfolio']
      if (portfolioData.docId) {
        this.title = portfolioData.title
        this.url = portfolioData.url
        this.captureUrl = portfolioData.captureUrl
        this.docId = portfolioData.docId
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
