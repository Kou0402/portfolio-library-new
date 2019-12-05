<template>
  <section class="post">
    <h1 class="title">あなたのポートフォリオを投稿しよう！</h1>
    <form class="form">
      <FormSet
        :initial-value="portfolio.url"
        label="サイトURL"
        name="url"
        @emitedInput="setValue"
      ></FormSet>
      <FormSet
        :initial-value="portfolio.title"
        label="サイトタイトル"
        name="title"
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
        :initial-value="portfolio.twitterId"
        label="TwitterID"
        name="twitterId"
        @emitedInput="setValue"
      ></FormSet>
      <PushInButton @emitedClick="postPortfolio">投稿する</PushInButton>
    </form>
    <button class="logout-button" @click="logout">ログアウト</button>
  </section>
</template>

<script>
import Vue from 'vue'
import Croppa from 'vue-croppa'
import firebase from '@/plugins/firebase'
import FormSet from '~/components/page/post/FormSet.vue'
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
      portfolio: {
        uid: '',
        docId: '',
        title: '',
        url: '',
        captureUrl: '',
        twitterId: ''
      },
      isPosting: false,
      selectedFile: {}
    }
  },
  async created() {
    this.checkLogin()
    await this.$store.dispatch('portfolio/fetchPortfolio', this.portfolio.uid)
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
        this.portfolio.uid = currentUser.uid
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
        this.portfolio.docId = portfolioData.docId
        this.portfolio.title = portfolioData.title
        this.portfolio.url = portfolioData.url
        this.portfolio.captureUrl = portfolioData.captureUrl
        this.portfolio.twitterId = portfolioData.twitterId
      }
    },
    /**
     * Receives a value from FormSet.vue and sets it to data.
     * @param {Object} valueSet object with value and data name
     */
    setValue(valueSet) {
      switch (valueSet.name) {
        case 'url':
          this.portfolio.url = valueSet.value
          break
        case 'title':
          this.portfolio.title = valueSet.value
          break
        case 'twitterId':
          this.portfolio.twitterId = valueSet.value
          break
      }
    },
    /**
     * Save portfolio data entered in the form in FireStore.
     * DB access is performed from Vuex.
     */
    async postPortfolio() {
      const captureUrl = await this.uploadCapture()
      const portfolioData = {}
      portfolioData.uid = this.portfolio.uid
      portfolioData.docId = this.portfolio.docId
      portfolioData.url = this.portfolio.url
      portfolioData.title = this.portfolio.title
      portfolioData.twitterId = this.portfolio.twitterId
      portfolioData.captureUrl = captureUrl
      if (this.portfolio.docId) {
        await this.$store.dispatch('portfolio/updatePortfolio', {
          portfolioData
        })
      } else {
        await this.$store.dispatch('portfolio/publishPortfolio', {
          portfolioData
        })
      }
      this.$router.push('/')
    },
    /**
     * Upload the file input to Croppa to FireStorage. Upload from Vuex.
     * @return {String} captureUrl
     */
    async uploadCapture() {
      if (!this.selectedFile.hasImage()) return this.portfolio.captureUrl
      const selectedFileBlob = await this.selectedFile.promisedBlob(
        'image/jpeg'
      )
      const storageRef = firebase
        .storage()
        .ref('image/portfolio/')
        .child(this.portfolio.uid)
      await storageRef.put(selectedFileBlob)
      const captureUrl = await storageRef.getDownloadURL()
      return captureUrl
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
