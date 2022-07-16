const axios = require('axios');
const fs = require('fs');



async function convert_currency(){
    // console.log('Path of file in parent dir:', require('path').resolve(__dirname, '../app.js'));

    const cache_file = './src/data/exchange_rates.json';
    const cache = fs.readFileSync(cache_file, 'utf8');
    let exchange_rates = JSON.parse(cache );

    // Only need to get USD TO NOK and SEK TO NOK
    let currencys_in_use = ['USD', 'SEK', 'CAD'];
    let exchange_rate_promises = [];

    const today = new Date();
    const last_updated = new Date(exchange_rates.DATE);

    if(today.getDate() === last_updated.getDate() ){
        return exchange_rates;
    }
console.log('runing axio...');
    exchange_rates.DATE = today.toISOString().substring(0,10);
    currencys_in_use.forEach((from_currency) => {

        const url = `https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=${from_currency}&to_currency=NOK&apikey=I1G8TIKPFJ9UHGV0`;

        exchange_rate_promises.push(
            axios.get(url,{
                json:true,
                headers: {'User-Agent': 'request'}
            }).then( (response) => {
                try{
                    console.log(response.data['Realtime Currency Exchange Rate']);
                    exchange_rates[`${from_currency}_NOK`] = response.data['Realtime Currency Exchange Rate']['5. Exchange Rate']
                }catch(err){
                    console.log('error in gett exchange rate for ' + from_currency, err);
                }
                return 1;
            }).catch((error) => {
                console.log(error);
              })
        );

    });

    await Promise.all( exchange_rate_promises ).then( () => {
        fs.writeFileSync('./src/data/exchange_rates.json', JSON.stringify(exchange_rates) , {encodeing: 'utf8'});
    });

    return exchange_rates;


};
module.exports = {
    convert_currency: convert_currency,
}


