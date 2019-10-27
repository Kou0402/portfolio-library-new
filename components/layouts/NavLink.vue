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
    display: inline-block;
    position: relative;
    color: $base-color;
    font-size: 1.6rem;
    text-decoration: none;
  }
  > .name::after {
    position: absolute;
    bottom: -10px;
    left: 0;
    content: '';
    background: $base-color;
    width: 100%;
    height: 1px;
    transform: scale(0, 1);
    transform-origin: center top;
    transition: transform 0.3s;
  }
  > .name:hover::after {
    transform: scale(1.1, 1);
  }
  > .nuxt-link-exact-active::after {
    position: absolute;
    bottom: -10px;
    left: 0;
    content: '';
    width: 100%;
    height: 1px;
    background: $base-color;
    transform: scale(1, 1);
    transform-origin: center top;
  }
}
</style>
