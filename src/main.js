// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import {router} from './routes'
import {auth} from './auth'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  mounted () {
    auth.checkAuth()
  }
})
