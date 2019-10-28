<template>
  <section class="nav-bar">
    <NavLogo></NavLogo>
    <NavLink path="/">ホーム</NavLink>
    <NavLink path="post">投稿する</NavLink>
    <NavLink path="about">サイトについて</NavLink>
    <NavLink path="news">お知らせ</NavLink>
    <NavLink path="lecture">ポートフォリオ作り方講座</NavLink>
    <NavLink path="contact">コンタクト</NavLink>
    <NavLink path="mypage" class="mypage">マイページ</NavLink>
    <NavLink path="login" class="login">ログイン</NavLink>
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
    margin: 0 23px;
  }
  > .mypage {
    margin-left: auto;
  }
}
</style>
