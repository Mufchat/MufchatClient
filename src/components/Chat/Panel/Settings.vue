<template>
  <div class="list">
    <span class="list-title">Ustawienia</span>
    <ul>
      <li id="personalize-button"><i class="fa fa-picture-o" aria-hidden="true"></i>Personalizacja</li>

      <!-- PERSONALIZATION MENU -->
      <div id="personalize-content" class="hidden">
        <span class="list-title">Zmiana avatara</span>
        <img src="https://api.adorable.io/avatars/285/macholl.png">
        <div id="personalize-avatar-menu">
          <button id="send-file" class="button-main">Wybierz lokalny plik</button>
          <input type="file" id="send-file-core">
          <input type="text" id="send-link" placeholder="Lub link do obrazka">
        </div>
        <input type="submit" class="button-main" id="submit-avatar" value="Ustaw avatar">
      </div>

      <li class="no-arrow">
        <i class="fa fa-book" aria-hidden="true"></i>
        Tryb ciemny
        <label class="switch" id="theme-switcher">
          <input type="checkbox" id="theme-checkbox">
          <div class="slider"></div>
        </label>
      </li>
      <li class='red' @click="logout()"><i class="fa fa-sign-out" aria-hidden="true"></i><a>Wyloguj</a></li>
    </ul>
  </div>
</template>

<script>
  // import $ from 'jquery'
  import { auth } from '../../../auth'

  export default {
    name: 'settings',
    data () {
      return {
        themeCheckbox: true
      }
    },
    methods: {
      logout () {
        auth.logout()
      }
    }
  }
</script>

<style scoped>
</style>
