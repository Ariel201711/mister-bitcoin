<template>
  <footer class="app footer full main-layout">
    <small>
      <p>&copy; All rights reserved to <span>misterBitcoin</span>, {{ currYear }}</p> 
    </small>
  </footer>
</template>

<script>
    export default {
      data() {
        return { 
          date: new Date()
        }
      },
      computed: {
        currYear() {
          return this.date.getFullYear()
        }
      }
    }
</script>