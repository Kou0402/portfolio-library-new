<template>
  <section class="nav-bar">
    <NavLogo></NavLogo>
    <NavLink path="/">ホーム</NavLink>
    <NavLink path="/">投稿する</NavLink>
    <NavLink path="/">サイトについて</NavLink>
    <NavLink path="/">お知らせ</NavLink>
    <NavLink path="/">ポートフォリオ作り方講座</NavLink>
    <NavLink path="/">コンタクト</NavLink>
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
  > .nav-logo {
    margin: 0 10px;
  }
  > .nav-link {
    margin: 0 25px;
  }
}
</style>
