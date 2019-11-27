<template>
  <button class="push-in-button" @click="emitClick"><slot></slot></button>
</template>

<script>
export default {
  methods: {
    emitClick() {
      this.$emit('emitedClick')
    }
  }
}
</script>

<style lang="scss" scoped>
.push-in-button {
  display: inline-block;
  font-size: 1.6rem;
  height: 35px;
  padding: 0.3em 1.6em;
  text-decoration: none;
  background: $accent-color2;
  color: $main-color1;
  border-bottom: solid 4px rgba(0, 0, 0, 0.3);
  border-radius: 3px;
}
.push-in-button:active {
  -webkit-transform: translateY(4px);
  transform: translateY(4px);
  border-bottom: none;
}
.push-in-button:focus {
  outline: 0;
}
</style>
