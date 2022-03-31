
'use strict';
var axios = require('axios');

const backup_crypto_price = {
    'CRO': 0.4835,
    'ELON': 0.000001080,
    'CRPT': 0.61
}

const get_crypto_coin_price = (coin, currency) => {
    const url = `https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=${coin}&to_currency=${currency}&apikey=I1G8TIKPFJ9UHGV0`;

    return axios.get(url,{
        json: true,
        headers: {'User-Agent': 'request'}
    }).then( (response) => {
        if(response.data['Error Message'] ){
            console.log('error?', coin);
            return backup_crypto_price[coin];
        }else{
            return response.data['Realtime Currency Exchange Rate']['5. Exchange Rate'];

        }
    });

}

module.exports = get_crypto_coin_price;
