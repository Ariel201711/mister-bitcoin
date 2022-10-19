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

export const bitcoinService = {
    getRate,
    getMarketPriceHistory,
    getAvgBlockSize,
}

function getRate() {
    return '0%'
}

function getMarketPriceHistory() {
    return 'No History'
}

function getAvgBlockSize() {
    return '50'
}