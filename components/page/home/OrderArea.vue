<template>
  <section class="order-area">
    <PushInButton>新着順▼</PushInButton>
    <PushInButton>人気順▼</PushInButton>
  </section>
</template>

<script>
import PushInButton from '~/components/ui/PushInButton.vue'

export default {
  components: {
    PushInButton
  }
}
</script>

<style lang="scss" scoped>
.order-area {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 60px;
  padding: 0 8%;
  .push-in-button {
    margin-left: 16px;
  }
}
</style>
