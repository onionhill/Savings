const cheerio = require('cheerio');
const request = require('request');
const ticket_data = require('./ticket_data');
const axios = require('axios');



const stock_prices = {
    'OD-AKSJD': 0,
    'OD-ODUSD': 0,
    'Nordnet Indeksfond Global': 134.01,
    'Nordnet Indeksfond Emerging Market': 109.19,
    'Landkreditt Utbytte A': 280.69,
}


const get_stock_price_url = (ticket) => {
    const item = ticket_data[ticket];
    let value;

    if(item){
        return axios.get(item.url)
        .then( (resp) => {
            const $ = cheerio.load(resp.data);
            if(typeof item.selector == 'string'){
                return parseFloat(  eval(item.selector ).html().replace(',','.') ).toFixed(4);
            }else{
                return eval( item.selector($) );
            }
        });
    }else{
        return Promise.resolve(stock_prices[ticket]);
    }


    console.log('doe this run before??');

}

module.exports = get_stock_price_url;
