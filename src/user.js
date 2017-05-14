/**
 * Created by ggere on 09.05.2017.
 */
import Vue from 'vue'
import jwtDecode from 'jwt-decode'
import { Url } from './url'
import {auth} from './auth'
import events from './events'

class User {
  user = null
  decodedToken = ''
  fetchUserData () {
    if (auth.token) {
      this.decodedToken = jwtDecode(auth.token)
    }
    Vue.http.get(Url.API_URL + this.decodedToken.sub, {
      headers: {
        'Authorization': auth.token
      }
    }).then((response) => {
      this.user = response.body
      events.$emit('userDataFetched')
    }, response => {
      console.log(response)
      auth.logout()
    })
  }
  getUsername () {
    return this.user.username
  }

}

export let user = new User()
