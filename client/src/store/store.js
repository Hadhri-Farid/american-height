import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    token: null,
    user: null,
    room: null,
    isUserLoggedIn: false,
    isDarkMode: false
  },
  mutations: {
    setToken (state, token) {
      state.token = token
      if (token) {
        state.isUserLoggedIn = true
      } else {
        state.isUserLoggedIn = false
      }
    },
    setUser (state, user) {
      state.user = user
    },
    setRoom (state, room) {
      state.room = room
    },
    setDark (state, isDarkMode) {
      state.isDarkMode = isDarkMode
    }
  },
  actions: {
    setToken ({ commit }, token) {
      commit('setToken', token)
    },
    setUser ({ commit }, user) {
      commit('setUser', user)
    },
    setDark ({ commit }, isDarkMode) {
      commit('setDark', isDarkMode)
    },
    setRoom ({ commit }, room) {
      commit('setRoom', room)
    }
  },
  getters: {
    isDark: state => {
      return state.isDarkMode
    }
  }
})
