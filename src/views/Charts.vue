<template>
  <h1>Statistics</h1>
  <section class="charts-container">
      <MarketPriceHistory v-if="bitcoinPrices" :data="priceData" :labels="priceLabels" />
  </section>
</template>

<script>
import { bitcoinService } from '../services/bitcoin.service'
import MarketPriceHistory from '../components/Chart.vue'

export default { 
  data() {
    return {
      bitcoinPrices: null,
    }
  },
  async created() {
    await this.getMarketPriceHistory()
  },
  methods: {
    async getMarketPriceHistory() {
      const { values } = await bitcoinService.getMarketPriceHistory()
      this.bitcoinPrices = values
    },
  },
  computed: {
    priceLabels() {
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