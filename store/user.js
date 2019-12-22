import firebase from '~/plugins/firebase.js'
const db = firebase.firestore()

export const state = () => ({
  user: {}
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
    console.log(user.uid)
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
  }
}
