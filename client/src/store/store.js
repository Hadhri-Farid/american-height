import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    token: null,
    user: null,
    isUserLoggedIn: false,
    isDarkMode: false,
    rooms: null
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
    setDark (state, isDarkMode) {
      state.isDarkMode = isDarkMode
    },
    setRoom (state, rooms) {
      state.rooms = rooms
      if (rooms) {
        state.rooms++
      }
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
    setRoom ({ commit }, rooms) {
      commit('setRoom', rooms)
    }
  },
  getters: {
    isDark: state => {
      return state.isDarkMode
    },
    roomsCount: state => {
      return state.rooms
    }
  }
})
