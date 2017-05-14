<template>
  <div id="greeting">
      Witaj,<span class="outstand">&nbsp;{{ username }}</span>!
  </div>
</template>

<script>
  export default {
    name: 'greeting',
    props: ['username']
  }
</script>

<style scoped>
</style>
