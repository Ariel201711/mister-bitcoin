<template>
  <header class="app-header full main-layout flex">
    <nav>
      <RouterLink to="/" class="logo clean-link">
        <h3>misterBitcoin.com</h3>
      </RouterLink>
      <RouterLink to="/contact" class="clean-link">Contacs</RouterLink>
      <RouterLink to="/stats" class="clean-link">Statistics</RouterLink>
      <div class="loggedin-user"> 
        <h4>Welcome {{loggedInUser.name}}, Your Balance is: ${{loggedInUser.balance}}</h4>
      </div>
    </nav>
  </header>
</template>

<script>
    import { userService } from "@/services/user.service.js";
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