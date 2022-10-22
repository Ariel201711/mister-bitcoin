<template>
  <header>
    <h1>The world's most popular way to buy, sell, and trade bitcoin</h1>
    <p>Trusted by millions since 2011 with over $1 Trillion in bitcoin transactions.</p>
    <h4>Welcome {{loggedInUser.name}}, Your Balance is: ${{loggedInUser.balance}}</h4>
    <section class="bitcoin-rates-container flex">
      <h4 v-if="bitcoinRate">{{currRate}}</h4>
      <h4 v-else>Loading...</h4>
      <select @change="getCurrExchangeRate" v-model="currency">
        <option v-for="currencyOption in currencyOptions" :key="currencyOption" :value="currencyOption">
        {{currencyOption}}
        </option>
      </select> 
    </section>
  </header>
  <main>
  
  </main>
</template>

<script>
import { userService } from "@/services/user.service.js";
import { bitcoinService } from "@/services/bitcoin.service.js";
export default {
  data() {
    return {
      loggedInUser: null,
      bitcoinRate: null,
      currency: 'USD',
      currencyOptions: []
    }
  },
  async created() {
    this.getLoggedinUser()
    await this.getCurrExchangeRate()
    await this.getCurrencyOptions()
  },
  methods: {
    getLoggedinUser() {
      this.loggedInUser = userService.getLoggedinUser()
    },
    async getCurrExchangeRate() {
      this.bitcoinRate = await bitcoinService.getRate(this.currency)
    },
    async getCurrencyOptions() {
      this.currencyOptions = await bitcoinService.getCurrencyOptions()
  },
  },
  computed: {
    currRate() {
      return `Bitcoin/${this.bitcoinRate.symbol} ${this.bitcoinRate.last}`
    }
  }
}
</script>