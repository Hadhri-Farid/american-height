import Vue from 'vue'
import Router from 'vue-router'
import Lobby from '@/components/Lobby'
import Register from '@/components/Register'
import LoginPage from '@/components/Login'
import ToggleButton from 'vue-js-toggle-button'
import AlertPage from '@/components/Alert'

Vue.use(ToggleButton)
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginPage
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/lobby',
      name: 'lobby',
      component: Lobby
    },
    {
      path: '/alert',
      name: 'alert',
      component: AlertPage
    },
    {
      path: '*',
      redirect: '/lobby'
    }
  ]
})
