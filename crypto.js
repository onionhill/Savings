
'use strict';
var axios = require('axios');

const get_crypto_coin_price = async (coin, currency) => {
    var url = `https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=${coin}&to_currency=${currency}&apikey=I1G8TIKPFJ9UHGV0`;

    const res = await axios.get(url,{
        json: true,
        headers: {'User-Agent': 'request'}
    });

    console.log('res here', res.data);
}

module.exports = get_crypto_coin_price;
