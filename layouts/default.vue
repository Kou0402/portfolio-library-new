<template>
  <div>
    <header class="header">
      <NavBar></NavBar>
    </header>
    <main class="main">
      <nuxt />
    </main>
  </div>
</template>

<script>
import NavBar from '~/components/layouts/NavBar.vue'

export default {
  components: {
    NavBar
  }
}
</script>

<style lang="scss" scoped>
.header {
  margin: 0 0 40px 0;
}
</style>
