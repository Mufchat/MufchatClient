/**
 * Created by ggere on 06.05.2017.
 */
import Vue from 'vue'
import { Url } from './url'
import {router} from '././routes'
import events from './events'

class Auth {
  authorization = false
  token = 'empty'
  login (credentials) {
    Vue.http.post(Url.LOGIN_URL,
      credentials).then((response) => {
        this.token = response.headers.map.Authorization
        localStorage.setItem('Authorization', this.token)
        router.replace('/')
      }, response => {
        events.$emit('loginFailed')
        console.log(response)
      })
  }
  logout () {
    localStorage.removeItem('Authorization')
    router.replace('/login')
  }
  checkAuth () {
    this.token = localStorage.getItem('Authorization')
    this.authorization = !!this.token
    return this.authorization
  }
}
export const auth = new Auth()

