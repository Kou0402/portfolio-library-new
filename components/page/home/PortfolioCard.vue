<template>
  <article class="portfolio-card">
    <a :href="url" target="_blank" class="portfolio">
      <img :src="captureUrl" :alt="title" class="image" />
      <p class="description">
        {{ title }}
      </p>
    </a>
    <button type="button" class="favorite" @click="onFavoriteButton">
      <span class="star">★</span>999
    </button>
    <a v-show="twitterId" :href="twitterUrl" target="_blank" class="icon">
      <i class="fab fa-twitter"></i>
    </a>
  </article>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    captureUrl: {
      type: String,
      default: ''
    },
    twitterId: {
      type: String,
      required: false,
      default: ''
    },
    docId: {
      type: String,
      required: false,
      default: ''
    }
  },
  computed: {
    twitterUrl() {
      return `https://twitter.com/${this.twitterId}`
    }
  },
  methods: {
    onFavoriteButton(e) {
      // e.stopPropagation()
      this.updateLike()
    },
    updateLike() {
      const user = this.$store.getters['user/user']
      const portfolio = {}
      const likes = {}
      likes.like_from = user.uid
      likes.likedAt = new Date()
      portfolio.likes = likes
      portfolio.docId = this.docId
      this.$store.dispatch('portfolio/updateLikes', { portfolio })

      // TODO: userコレクションサイドへいいね情報を追加する。
    }
  }
}
</script>

<style lang="scss" scoped>
.portfolio-card {
  display: block;
  position: relative;
  width: 300px;
  height: 250px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  > .portfolio {
    > .image {
      width: 300px;
      height: 200px;
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
}
</style>
