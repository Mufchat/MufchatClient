<template>
  <div class="wrapper">
    <link rel="stylesheet" href="../../../static/login.css">
    <div class="logo">
      <h1>cosmo</h1>
      <div class="description">chat app</div>
    </div>
    <form @submit.prevent="login()">
      <input type="text" placeholder="nick" v-model="credentials.username">
      <input type="password" placeholder="password" v-model="credentials.password" id="password_field">
      <div class="error"></div>
      <input value="LOGIN" type="submit">
    </form>
    <div class="registration-cta">Nie masz konta? <a href="#">Zarejestruj się</a>!</div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import VueCookie from 'vue-cookie'
  import VueResource from 'vue-resource'
  import VueEvents from 'vue-events'
  import {auth} from '../../auth'
  import events from '../../events'

  Vue.use(VueResource)
  Vue.use(VueEvents)
  Vue.use(VueCookie)

  export default {
    name: 'login',
    data () {
      return {
        credentials: {
          username: '',
          password: ''
        }
      }
    },
    created () {
      let self = this
      events.$on('loginFailed', function () {
        self.showFailedLoginInfo()
      })
    },
    methods: {
      login () {
        auth.login(this.credentials)
      },
      showFailedLoginInfo () {
        document.getElementById('password_field').value = ''
        document.getElementsByClassName('error')[0].innerHTML = 'Incorrect username or password'
      }
    }
  }

</script>
