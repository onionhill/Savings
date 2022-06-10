const cheerio = require('cheerio');
const request = require('request');
const ticket_data = require('./ticket_data');
const axios = require('axios');


const get_stock_price_url = (ticket) => {
    const item = ticket_data[ticket];
    let value;

 

    if(item){
        return axios.get(item.url)
        .then( (resp) => {
            const $ = cheerio.load(resp.data);
            if(ticket === 'IVR'){
                return 15.52;
            }

            if(typeof item.selector == 'string'){
                return parseFloat(  eval(item.selector ).html().replace('NOK&nbsp;','').replace(',','.') ).toFixed(4);
            }
            else{
                return eval( item.selector($) );
             }
        });
    }else{
        console.log(`${ticket} has to be added to ticket_data.js...`);
        return 0;
    }

}

const backup_stock_price = {
    'WBD': 24.68,
}

const get_stock_price_api = (ticket) => {
    const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${ticket}&apikey=I1G8TIKPFJ9UHGV0`;
    console.log('this stock is runnin api', ticket);
    //This should only be in USD
    return axios.get(url,{
        json: true,
        headers: {'User-Agent': 'request'}
    }).then( (response) => {
        if(response.data['Error Message'] ){
            return backup_stock_price[ticket];
        }else{
            var last_data_point_date = response.data['Meta Data']['3. Last Refreshed'];
            if(last_data_point_date.length > 10){
                last_data_point_date = last_data_point_date.substring(0,10);
            }
            const last_data_point = response.data['Time Series (Daily)'][last_data_point_date];
            return last_data_point['4. close'];
        }
    })
}


module.exports = {
    get_stock_price_url: get_stock_price_url,
    get_stock_price_api: get_stock_price_api,
}
