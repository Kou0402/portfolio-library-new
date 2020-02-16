import firebase from '~/plugins/firebase.js'
const db = firebase.firestore()

export const state = () => ({
  user: {
    uid: '',
    name: '',
    like: ''
  }
})

export const getters = {
  user: (state) => state.user
}

export const mutations = {
  commitUser(state, user) {
    state.user = user
  }
}

export const actions = {
  async publishUser({ commit }, user) {
    await db
      .collection('user')
      .doc(user.uid)
      .set({
        name: user.name,
        lastLoginDate: new Date()
      })
      .catch((error) => {
        console.error(error)
      })
    commit('commitUser', user)
  },
  async fetchUser({ commit }, uid) {
    const user = {}
    user.uid = uid
    await db
      .collection('user')
      .doc(uid)
      .get()
      .then((doc) => {
        user.name = doc.data().name
        user.like = doc.data().like
      })
      .catch((error) => {
        console.error(error)
      })
    commit('commitUser', user)
  }
}
