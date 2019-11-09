<template>
  <a href="https://portfolio-library.com" class="portfolio-card">
    <img src="sample.png" alt="" class="image" />
    <a href="https://twitter.com/ko_u_0402" class="icon">
      <i class="fab fa-twitter"></i>
    </a>
    <p class="description">
      テストテストテストテストテストテストテストテストテストテストテスト
    </p>
    <div class="favorite"><span class="star">★</span>999</div>
  </a>
</template>

<style lang="scss" scoped>
.portfolio-card {
  display: block;
  position: relative;
  width: 300px;
  height: 250px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  > .image {
    width: 300px;
    height: 200px;
  }
  > .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 150px;
    left: 250px;
    width: 40px;
    height: 40px;
    font-size: 24px;
    background-color: #1da1f2;
    color: #fff;
    border-radius: 50%;
  }
  > .description {
    font-size: 1.6rem;
    line-height: 2.4rem;
    padding: 0 4px;
  }
  > .favorite {
    position: absolute;
    font-size: 1.6rem;
    top: 230px;
    left: 256px;
    > .star {
      color: yellow;
    }
  }
}
</style>
