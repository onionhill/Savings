const cheerio = require('cheerio');
const request = require('request');
const ticket_data = require('./ticket_data');
const axios = require('axios');

const get_stock_price_url = (ticket) => {
    const item = ticket_data[ticket];
    let value;
    // request(item.url, (err, resp,html) => {
    //     if(!err && resp.statusCode == 200){
    //         const $ = cheerio.load(html);
    //         value = eval(item.selector );
    //         console.log(value.html());
    //
    //     }
    // })

    // item.url = 'https://motherfuckingwebsite.com/';

    aaxios.get(item.url).then( (resp) => {
        const $ = cheerio.load(resp.data);
        value = eval(item.selector );
        // value = $("[class*=StatsBox__StyledPriceText]").first();
        console.log('more' ,value.html() );
    });

    console.log('doe this run before??');

}

module.exports = get_stock_price_url;
