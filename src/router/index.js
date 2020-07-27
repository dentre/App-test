import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/home'

Vue.use(Router)

export default new Router({
  routes: [
      {path: '/', component: Login },
      {path: '/login', name: 'Login', redirect: '/' },
      {path: '/home', name: 'Home', component: Home }      
  ]
})
