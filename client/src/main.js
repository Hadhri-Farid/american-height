// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import { sync } from 'vuex-router-sync'
import 'vuetify/dist/vuetify.min.css'
import store from '../src/store/store'

Vue.config.productionTip = false
Vue.use(Vuetify, {
  theme: {
    primary: '#ff0019',
    secondary: '#ff0019',
    accent: '#ff0019',
    error: '#ff0019'
  }
})

sync(store, router)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
