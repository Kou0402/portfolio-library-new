export default ({ req, store, route, redirect }) => {
  if (process.server) {
    if (req.headers.cookie) {
      const firebaseAdmin = require('firebase-admin')
      const cookieparser = require('cookieparser')
      const idToken = cookieparser.parse(req.headers.cookie).idToken
      if (!idToken) return
      firebaseAdmin
        .auth()
        .verifyIdToken(idToken)
        .then((decodedToken) => {
          store.dispatch('auth/updateLoginState', true)
          store.dispatch('user/fetchUser', decodedToken.uid)
        })
        .catch(() => {
          store.dispatch('auth/updateLoginState', false)
          console.log('認証有効期間を過ぎているため、再認証が必要です。')
        })
    }
  }

  // Control routing
  const isLogin = store.getters['auth/isLogin']
  if (!isLogin) {
    if (['/mypage'].includes(route.path) || ['/post'].includes(route.path)) {
      return redirect('/login')
    }
  }
}
