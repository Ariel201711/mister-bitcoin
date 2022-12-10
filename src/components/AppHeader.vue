<template>
  <header class="app-header full main-layout">
    <div class="flex align-center">
      <nav class="flex align-center">
        <RouterLink to="/" class="logo clean-link">
          <h3>misterBitcoin.com</h3>
        </RouterLink>
        <RouterLink to="/contact" class="clean-link">Contacts</RouterLink>
        <RouterLink to="/stats" class="clean-link">Statistics</RouterLink>
      </nav>
      <div class="loggedin-user"> 
        <h4>Welcome {{loggedInUser.name}}, Your Balance is: BTC {{loggedInUser.balance}}</h4>
      </div>
    </div>
  </header>
</template>

<script>
    import { userService } from "@/services/user.service.js"
    export default {
      data() {
        return {
          loggedInUser: null,
        }
      },
      created() {
        this.getLoggedinUser()
      },
      methods: {
        getLoggedinUser() {
          this.loggedInUser = userService.getLoggedinUser()
        }
      }
    }
</script>