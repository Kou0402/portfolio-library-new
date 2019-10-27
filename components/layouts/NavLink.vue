<template>
  <div class="nav-link">
    <nuxt-link :to="path" class="name"><slot></slot></nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    path: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.nav-link {
  display: flex;
  justify-content: center;
  align-items: center;
  > .name {
    color: $base-color;
    font-size: 1.6rem;
  }
}
</style>
