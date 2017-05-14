<template>
  <div id="chat-window">
    <message v-for="message in messages" :author="newMessage.author" :date="newMessage.date" :content="newMessage.content" v-bind:data="message" v-bind:key="message.id"></message>
  </div>
</template>

<script>
  import Message from './Message'

  export default {
    name: 'chatWindow',
    components: {Message},
    data () {
      return {
        messages: [],
        newMessage: {
          author: '',
          date: '',
          content: ''
        }
      }
    },
    created () {
      this.newMessage = {author: 'matiko101', date: '13.05.17', content: 'To jest wiadomosc'}
      this.messages.push(Message)
      this.newMessage = {author: 'matiko101', date: '13.05.17', content: 'To jest wiadomosc numer 2'}
      this.messages.push(Message)
      this.newMessage = {author: 'matiko101', date: '13.05.17', content: 'To jest wiadomosc numer 3'}
      this.messages.push(Message)
    }
  }
</script>
<style>
</style>
