export const state = () => ({
  isLogin: false
})

export const getters = {
  isLogin: (state) => state.isLogin
}

export const mutations = {
  commitLoginState(state, isLogin) {
    state.isLogin = isLogin
  }
}

export const actions = {
  updateLoginState({ commit }, isLogin) {
    commit('commitLoginState', isLogin)
  }
}
