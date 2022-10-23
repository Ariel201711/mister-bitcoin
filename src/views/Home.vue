<template>
  <header class="home-header flex column">
    <h1>The world's most popular way to buy, sell, and trade bitcoin</h1>
    <p>Trusted by millions since 2022 with over $1 Trillion in bitcoin transactions.</p>
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

import { bitcoinService } from "@/services/bitcoin.service.js";
export default {
  data() {
    return {
      bitcoinRate: null,
      currency: 'USD',
      currencyOptions: []
    }
  },
  async created() {
    await this.getCurrExchangeRate()
    await this.getCurrencyOptions()
  },
  methods: {
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