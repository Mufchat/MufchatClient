<template>
  <div class="list">
    <span class="list-title">admin panel</span>
    <ul>
      <li><i class="fa fa-picture-o" aria-hidden="true"></i>usuń wiadomości</li>
      <li>
        <i class="fa fa-picture-o" aria-hidden="true"></i>MOTD
        <label class="switch">
          <input type="checkbox" checked>
          <div class="slider"></div>
        </label>
      </li>
      <li><i class="fa fa-picture-o" aria-hidden="true"></i>użytkownicy</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'AdminPanel'
  }
</script>

<style scoped>
</style>
