const userModule = {
  state: {
    userInfo: {}
  },
  mutations: {
    SET_USER_INFO(state, userInfo) {
      state.userInfo = userInfo
    }
  },
  actions: {
    setUserInfo({commit}, userInfo) {
      console.log(userInfo);
      
      commit('SET_USER_INFO', userInfo)
    }
  }
}

export default userModule