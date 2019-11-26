<template>
  <section class="post">
    <h1 class="title">あなたのポートフォリオを投稿しよう！</h1>
    <form class="form">
      <FormSet
        :initial-value="url"
        label="サイトURL"
        @emitedInput="setValue"
      ></FormSet>
      <FormSet
        :initial-value="title"
        label="サイトタイトル"
        @emitedInput="setValue"
      ></FormSet>
      <label class="form-title">
        サイト画像<span class="capture-ratio">（300×200）</span>
      </label>
      <croppa
        v-model="selectedFile"
        :width="300"
        :height="200"
        placeholder="ファイルを選択"
        :placeholder-font-size="16"
        remove-button-color="#464159"
        :prevent-white-space="true"
        class="file-form"
      ></croppa>
      <FormSet
        :initial-value="twitterUrl"
        label="TwitterURL"
        @emitedInput="setValue"
      ></FormSet>
      <PushInButton>投稿する</PushInButton>
    </form>
    <button class="logout-button" @click="logout">ログアウト</button>
  </section>
</template>

<script>
import Vue from 'vue'
import Croppa from 'vue-croppa'
import firebase from '@/plugins/firebase'
import FormSet from '~/components/page/post/Formset.vue'
import PushInButton from '~/components/ui/button/PushInButton.vue'
import 'vue-croppa/dist/vue-croppa.css'
Vue.use(Croppa)

export default {
  components: {
    FormSet,
    PushInButton
  },
  data() {
    return {
      input: '',
      uid: '',
      title: '',
      url: '',
      captureUrl: '',
      selectedFile: {},
      isPosting: false,
      docId: '',
      twitterUrl: ''
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
    setValue(value) {
      this.input = value
    },
    logout() {
      firebase.auth().signOut()
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss" scoped>
.post {
  width: 82vw;
  margin: 0 auto;
}
</style>
