<template>
  <section class="home-hero">
    <h1 class="message">- あなたのポートフォリオを共有しよう -</h1>
    <h1 class="message">
      ポートフォリオ共有サイト<span class="title">『Portfolio Library』</span>
    </h1>
    <div class="bar"></div>
  </section>
</template>

<style lang="scss" scoped>
.home-hero {
  display: flex;
  height: 160px;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  > .message {
    color: $main-color1;
    font-size: 2.8rem;
    font-weight: 500;
    letter-spacing: 0.2rem;
  }
  > .bar {
    width: 100%;
    height: 3px;
    background-color: $main-color1;
    border-radius: 5px;
  }
}
</style>
