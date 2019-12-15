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
        .then(() => {
          store.dispatch('auth/updateLoginState', true)
        })
        .catch((error) => {
          store.dispatch('auth/updateLoginState', false)
          console.error(error)
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
