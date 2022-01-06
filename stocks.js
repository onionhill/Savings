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

}

const get_stock_price_api = (ticket) => {
    const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${ticket}&apikey=I1G8TIKPFJ9UHGV0`;

        // console.log('checking ticket', ticket);
    return axios.get(url,{
        json: true,
        headers: {'User-Agent': 'request'}
    }).then( (response) => {
        const last_data_point_date = response.data['Meta Data']['3. Last Refreshed'];
        const last_data_point = response.data['Time Series (Daily)'][last_data_point_date];
        return last_data_point['4. close'];

    })
}
function getYesterdayDate() {
  let d =  new Date(new Date().getTime() - 24*60*60*1000);
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) {
      month = '0' + month;
    }

    if (day.length < 2) {
      day = '0' + day;
    }
    return [year, month, day].join('-');

}






module.exports = {
    get_stock_price_url: get_stock_price_url,
    get_stock_price_api: get_stock_price_api
}
