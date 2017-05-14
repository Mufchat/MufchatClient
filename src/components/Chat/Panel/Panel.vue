<template>
  <div class="panel" id="panel">
    <greeting :username="username"></greeting>
    <div class="panel-list">
      <settings></settings>
      <channels></channels>
      <logged-users></logged-users>
      <admin-panel></admin-panel>
    </div>
  </div>
</template>

<script>
  import Greeting from './Greeting'
  import Settings from './Settings'
  import Channels from './Channels'
  import LoggedUsers from './LoggedUsers'
  import AdminPanel from './AdminPanel'

  export default {
    name: 'panel',
    components: {
      Greeting, Settings, Channels, LoggedUsers, AdminPanel
    },
    props: ['username']
  }
</script>
<style>
</style>
