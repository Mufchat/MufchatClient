<template>
  <div class="list">
    <span class="list-title">ZALOGOWANI</span>
    <ul id="online-users" v-if="onlineUsers && onlineUsers.length">
      <li v-for="onlineUser in onlineUsers">
        <img v-bind:src="onlineUser.avatar">
        {{ onlineUser.nickname }}
      </li>
    </ul>
  </div>
</template>

<script>
  const onlineUsersList = [ // testowo
    {nickname: 'macholl', avatar: 'https://api.adorable.io/avatars/285/macholl.png'},
    {nickname: 'muflon', avatar: 'https://api.adorable.io/avatars/285/muflon.png'},
    {nickname: 'matiko101', avatar: 'https://api.adorable.io/avatars/285/matiko101.png'}
  ]

  export default {
    name: 'loggedUsers',
    data () {
      return {
        onlineUsers: onlineUsersList
      }
    }
  }
</script>

<style scoped>
</style>
