<template>
  <div id="chat-panel">
    <form id="chat-input-form">
      <input type="text" id="chat-input" autocomplete="off" placeholder="Napisz coś...">
      <button id="submit-message" onclick="return false;">
        <i class="fa fa-paper-plane-o" aria-hidden="true"></i>
      </button>

      <input type="submit" id="chat-input-submit" value="Wyślij" onclick="return false;">
    </form>
  </div>
</template>

<script>
  export default {
    name: 'chatPanel',
    components: {}
  }
</script>
<style>
</style>
