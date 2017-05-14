/**
 * Created by ggere on 06.05.2017.
 */

import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'

import Login from './components/Login/Login.vue'
import Chat from './components/Chat/Chat.vue'
import {auth} from './auth'

Vue.use(VueResource)
Vue.use(VueRouter)

const routes = [
  {path: '/', component: Chat, name: 'chat'},
  {path: '/login', component: Login, name: 'login'}
]

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  if (!auth.checkAuth()) {
    if (to.path !== '/login' && from.path !== '/login') {
      next({
        path: '/login',
        query: {redirect: to.fullPath}
      })
    } else {
      next()
    }
  } else {
    if (to.path !== '/login') {
      next()
    } else {
      router.replace(from.path)
    }
  }
})

export { router }

