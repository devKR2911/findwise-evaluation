import { createStore } from 'vuex'
import axios from 'axios';

const END_POINT = "https://randomuser.me/api/";

export default createStore({
  state: {
    userDetails: null
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
      axios.get(END_POINT).then((res) => {
        console.log(res.data.results[0]);
        context.commit('setUserDetails', res.data.results[0]);
      }).catch((err) => {
        console.log(err)
      })
    }
  },
  modules: {
  }
})
