<template>
  <footer>
    <small>
      <p>&copy; All rights reserved to <span>upbit</span>, {{ currYear }}</p> 
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