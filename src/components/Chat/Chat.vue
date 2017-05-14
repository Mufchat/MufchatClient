<template>
  <div>
    <link rel="stylesheet" href="../../../static/main.css">
    <panel :username="username"></panel>
    <chat-window></chat-window>
    <chat-panel></chat-panel>
  </div>
</template>

<script>
  import Panel from './Panel/Panel'
  import { user } from '../../user'
  import events from '../../events'
  import ChatWindow from './ChatWindow/ChatWindow'
  import ChatPanel from './ChatPanel/ChatPanel'

  export default {
    name: 'chat',
    components: {ChatPanel, ChatWindow, Panel},
    data () {
      return {
        username: ''
      }
    },
    created () {
      user.fetchUserData()
      let self = this
      events.$on('userDataFetched', function () {
        self.setUserData()
      })
    },
    methods: {
      setUserData () {
        this.username = user.getUsername()
      }
    }
  }
</script>

<style>
</style>
