<template>
  <section class="post">
    <h1 class="title">あなたのポートフォリオを投稿しよう！</h1>
    <form class="form">
      <FormSet label="サイトURL" name="url" @input="getInput"></FormSet>
      <FormSet label="サイトタイトル" name="url" @input="getInput"></FormSet>
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
      <FormSet label="サイトURL" name="url" @input="getInput"></FormSet>
    </form>
  </section>
</template>

<script>
import Vue from 'vue'
import Croppa from 'vue-croppa'
import FormSet from '~/components/page/post/Formset.vue'
import 'vue-croppa/dist/vue-croppa.css'
Vue.use(Croppa)

export default {
  components: {
    FormSet
  },
  data() {
    return {
      input: ''
    }
  },
  methods: {
    getInput(value) {
      this.input = value
      console.log(this.input)
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
