export const state = () => ({
  isLogin: false
})

export const getters = {
  isLogin: (state) => state.isLogin
}

export const mutations = {
  commitIsLogin(state, isLogin) {
    state.isLogin = isLogin
  }
}

export const actions = {
  updateLoginState({ commit }, isLogin) {
    commit('commitIsLogin', isLogin)
  }
}
