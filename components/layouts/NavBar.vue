<template>
  <section class="nav-bar">
    <NavLogo></NavLogo>
    <NavLink path="/">ホーム</NavLink>
  </section>
</template>

<script>
import NavLogo from '~/components/layouts/NavLogo.vue'
import NavLink from '~/components/layouts/NavLink.vue'

export default {
  components: {
    NavLogo,
    NavLink
  }
}
</script>

<style lang="scss" scoped>
.nav-bar {
  display: flex;
  background-color: $main-color1;
  height: 60px;
}
</style>
