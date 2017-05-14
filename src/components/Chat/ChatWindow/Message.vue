<template>
  <div class='message-box sendby-user'><img src='https://api.adorable.io/avatars/150/Macholl.png'>
    <div class='details'><span class='author'>{{author}}</span> @ <span class='date'>{{date}}</span></div>
    <div class='message'>{{content}}</div>
    <div style='clear: both;'></div>
  </div>
</template>

<script>
  export default {
    name: 'message',
    props: ['author', 'date', 'content']
  }
</script>
<style>
</style>
