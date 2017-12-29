import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Register from '@/components/Register'
<<<<<<< HEAD
import Login from '@/components/Login'
=======
import LoginPage from '@/components/Login'
>>>>>>> 41ca216ca2a9852e9a16a2d467cba1afdee8e1a4

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'root',
      component: HelloWorld
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
<<<<<<< HEAD
      component: Login
=======
      component: LoginPage
>>>>>>> 41ca216ca2a9852e9a16a2d467cba1afdee8e1a4
    }
  ]
})
