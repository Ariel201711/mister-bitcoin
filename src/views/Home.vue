<template>
  <header>
    <h1>Hello {{user.name}}, Your Balance is: ${{user.balance}}</h1>
    <h3>Bitcoin Rate: {{bitcoinRate}}</h3>
  </header>
</template>

<script>
import { userService } from "@/services/user.service.js";
import { bitcoinService } from "@/services/bitcoin.service.js";
export default {
  data() {
    return {
      user: null,
      bitcoinRate: '',
    }
  },
  created() {
    this.user = userService.getUser()
    this.bitcoinRate = bitcoinService.getRate()
  },
  methods: {

  },
  computed: {

  }
}
</script>