<template>
  <section class="nav-bar">
    <NavLogo></NavLogo>
  </section>
</template>

<script>
import NavLogo from '~/components/layouts/NavLogo.vue'
export default {
  components: {
    NavLogo
  }
}
</script>

<style lang="scss" scoped>
.nav-bar {
  background-color: $main-color1;
  height: 60px;
}
</style>
