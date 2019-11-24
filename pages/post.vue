<template>
  <section class="post">
    <h1 class="title">あなたのポートフォリオを投稿しよう！</h1>
    <form class="form">
      <FormSet label="サイトURL" name="url" @input="getInput"></FormSet>
      <FormSet label="サイトタイトル" name="url" @input="getInput"></FormSet>
      <FormSet label="サイトURL" name="url" @input="getInput"></FormSet>
    </form>
  </section>
</template>

<script>
import FormSet from '~/components/page/post/Formset.vue'

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
