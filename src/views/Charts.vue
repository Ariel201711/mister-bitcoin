<template>
  <h1>Statistics</h1>
  <section class="charts-container">
      <MarketPriceHistory v-if="bitcoinPrices" :data="priceData" :labels="priceLabels" />
  </section>
</template>

<script>
/*
      coverting to date:
      function getDate(value) {
          const newDate = new Date(value.x * 1000)
          const dateToDisplay = new Intl.DateTimeFormat("en-US").format(newDate)
      }
  */
import { bitcoinService } from '../services/bitcoin.service'
import MarketPriceHistory from '../components/Chart.vue'

export default { 
  data() {
    return {
      bitcoinPrices: null,
    }
  },
  async created() {
    await this.getMarketPriceHistory();
  },
  methods: {
    async getMarketPriceHistory() {
      const { values } = await bitcoinService.getMarketPriceHistory()
      this.bitcoinPrices = values
    },
  },
  computed: {
    // priceLabels() {
    //     return this.bitcoinPrices.map((value, index) => new Date(Date.now() - ((365 - index) * 86400000)).toLocaleDateString())
    // },
    priceLabels() {
      // map(value, index)
      return this.bitcoinPrices.map((value) => {
        const newDate = new Date(value.x * 1000)
        const dateToDisplay = new Intl.DateTimeFormat("en-US").format(newDate)
        return dateToDisplay
      })
    },
    priceData() {
      return this.bitcoinPrices.map((value) => value.y)
    },
  },
  components: { 
    MarketPriceHistory 
    },
}
</script>