import { createStore } from 'vuex'

export default createStore({
  state: {
    userDetails: {}
  },
  getters: {
    getUserDetails(state, getters) {
      return state.userDetails;
    }
  },
  mutations: {
    setUserDetails(state, value) {
      state.userDetails = value;
    }
  },
  actions: {
    fetchUserDetails(context) {
      context.commit('setUserDetails', {name: 'user'})
    }
  },
  modules: {
  }
})
