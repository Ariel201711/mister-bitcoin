/*
    TODO: Implement the service using axios, and fetch data from the following API's:
    Exchange Rates - https://blockchain.info/tobtc?currency=USD&value=1
    Market Price History - https://api.blockchain.info/charts/marketprice?timespan=5months&format=json&cors=true
    Average Block Size - https://api.blockchain.info/charts/avg-blocksize?timespan=5months&format=json&cors=true
    More To Explore - https://www.blockchain.com/charts

    In order to prevent the API from getting blocked by too many
    requests during development, save the response as a hardcoded
    object in the service or to local storage. You can switch to
    using the real API when you finish development.

    Some API calls are available with CORS headers. Add a &cors=true parameter to the GET request.
    For example:
    https://api.blockchain.info/charts/market-price?timespan=5months&format=json &cors=true

    You can add timespan=X to fetch more or less data where X is a number followed by either 'years', 'months' or 'days’ - i.e 3days
    or 1years
    For example: https://api.blockchain.info/charts/market-price?timespan=5months &format=json&cors=true
*/

import axios from 'axios'
import { storageService } from './storage.service'

export const bitcoinService = {
    getRate,
    getMarketPriceHistory,
    getAvgBlockSize,
    getExchangeRates,
    getCurrencyOptions
}

async function getRate(currency = 'USD') {
    const exchangeRates = await getExchangeRates()
    // console.log(exchangeRates)
    // console.log(exchangeRates[currency])
    return exchangeRates[currency]
}

async function getExchangeRates() {
    let exchangeRates = storageService.load('EXCHANGE_RATES')
    if (!exchangeRates) {
        exchangeRates = await axios.get('https://blockchain.info/ticker')
        exchangeRates = exchangeRates.data
        storageService.save('EXCHANGE_RATES', exchangeRates)
    }
    return exchangeRates
}

async function getCurrencyOptions() {
    const exchangeRates = await getExchangeRates()
    const options = []
    for (let currency in exchangeRates) {
        options.push(currency)
    }
    return options
}

async function getMarketPriceHistory() {
    let marketPriceHistory = storageService.load('MARKET_PRICE_DATA')
    if (!marketPriceHistory) {
        marketPriceHistory = await axios.get('https://api.blockchain.info/charts/market-price?cors=true')
        marketPriceHistory = marketPriceHistory.data
        storageService.save('MARKET_PRICE_DATA', marketPriceHistory)
    }
    return marketPriceHistory
}

function getAvgBlockSize() {
    return '50'
}