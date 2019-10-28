<template>
  <div class="nav-logo">
    <nuxt-link to="/" class="logo-phrase">
      Portfolio<br />
      Library
    </nuxt-link>
  </div>
</template>

<style lang="scss" scoped>
.nav-logo {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  > .logo-phrase {
    color: $base-color;
    font-size: 1.9rem;
    text-align: center;
    font-weight: 500;
    line-height: 2rem;
    text-decoration: none;
  }
}
</style>
