<template>
  <div>
    <header>
      <NavBar></NavBar>
    </header>
    <nuxt />
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
