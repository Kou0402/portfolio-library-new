<template>
  <section v-if="isWaiting" class="waiting-message-area">
    <p class="waiting-message">ログイン中...</p>
  </section>
  <section v-else class="login-area">
    <div class="login-message-area">
      <h3 class="login-message">
        あなたの作ったポートフォリオを投稿して<br />
        みんなで共有しよう！
      </h3>
      <br />
      <p class="login-message">
        投稿する方は下記からログイン
      </p>
    </div>
    <div class="login-button-area">
      <PushInButton @click="googleLogin">
        <i class="fab fa-google"></i>Googleでログイン
      </PushInButton>
      <button class="login-button" @click="twitterLogin">
        twitterでログイン
      </button>
    </div>
  </section>
</template>

<script>
import firebase from '@/plugins/firebase'
import PushInButton from '~/components/ui/button/PushInButton.vue'

export default {
  components: {
    PushInButton
  },
  data() {
    return {
      isWaiting: true
    }
  },
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        this.isWaiting = false
        return user
      }
      this.$router.push('/mypage')
    })
  },
  methods: {
    googleLogin() {
      const provider = new firebase.auth.GoogleAuthProvider()
      firebase.auth().signInWithRedirect(provider)
    },
    twitterLogin() {
      const provider = new firebase.auth.TwitterAuthProvider()
      firebase.auth().signInWithRedirect(provider)
    },
    logOut() {
      firebase.auth().signOut()
    }
  }
}
</script>

<style lang="scss" scoped>
.waiting-message-area {
  align-items: center;
  line-height: 12vh;
  text-align: center;
  .waiting-message {
    color: $main-color1;
    font-weight: 500;
    font-size: 2rem;
    letter-spacing: 0.2vw;
  }
}
.login-area {
  display: flex;
  justify-content: center;
  flex-flow: column;
  .login-message-area {
    line-height: 12vh;
    align-items: center;
    text-align: center;
    margin: 5vh 5vw;
    .login-message {
      color: $main-color1;
      font-weight: 500;
      font-size: 2rem;
      letter-spacing: 0.2vw;
      line-height: normal;
      display: inline-block;
    }
  }
  .login-button-area {
    text-align: center;
  }
}
</style>
