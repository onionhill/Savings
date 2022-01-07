const fs = require('fs');
let portfolio = require('./portfolio');
let assets = portfolio.assets;

const {get_stock_price_url, get_stock_price_api} = require('./stocks');
const get_crypto_coin_price = require('./crypto');
const write_to_cache = true;
const request = require('request');
const axios = require('axios');

let exchange_rates = {};

//
// var providers = [
//     'nordnet', ''
// ]
init_portfolio();

function init_portfolio(){
    const date = new Date();
    const cache_file =  `./historical_data/${get_todays_date()}.json`;
    try{
        if(fs.existsSync(cache_file)){
            const cache = fs.readFileSync(cache_file, 'utf8');
            portfolio = JSON.parse( cache );
            assets = portfolio.assets;
            exchange_rates = portfolio.exchange_rates;
            if(!exchange_rates){
                exchange_rates = {};
            }
        }
    }catch(err){
        console.log('error...',err);
    }

    if( Object.keys(exchange_rates) == 0){
        Promise.all( get_exchange_rates() ).then( () => {
            console.log('done with exchange....');
        } );
    }

    const provider_promises = update_portfolio_value();

    // const provider_promises = update_portfolio_value('etoro');
    Promise.allSettled(provider_promises).then( () => {

        const all_providers = get_all_providers();

        const portfolio_value = {};
        let total_value = 0;
        Object.keys(all_providers).forEach((provider) => {
            portfolio_value[provider] = get_value_from_provider(provider);
            total_value+= portfolio_value[provider].value;
        });
        portfolio_value.total = total_value;

        if(write_to_cache){
            portfolio.results = portfolio_value;
            portfolio.exchange_rates = exchange_rates;
            fs.writeFileSync(cache_file, JSON.stringify(portfolio) , {encodeing: 'utf8'});

        }

        const today_total = portfolio_value.Total;
        //Get yesteday json

        try{
            const yesterday_file =  `./historical_data/${getYesterdayDate()}.json`;
            if(fs.existsSync(yesterday_file)){
                const cache = fs.readFileSync(yesterday_file, 'utf8');
                const yesterday_portfolio = JSON.parse( cache );
                const yesterday_results = yesterday_portfolio.results;

                let gains = {};
                let total_gains = 0;
                Object.keys(all_providers).forEach((provider) => {
                    gains[provider] = calculate_provider_changes(
                        portfolio_value[provider],
                        yesterday_results[provider]
                    )
                    total_gains = total_gains + parseFloat( gains[provider].value );
                });

                gains.total = total_gains;

                console.log('HOLDINGS');
                console.log(portfolio_value['Crypto.com']);
                console.log('Todays changes...');
                console.log(gains);
            }
        }catch(err) {
            console.log(err);
        }
        // console.log( portfolio.results );
    }).catch(error => {
        console.error(error.message)
    });
    //Check value of a provider
}

function calculate_provider_changes(today, yesterday){
    let provider_gains = {
        value: parseFloat( today.value - yesterday.value).toFixed(2)
    };
    // Only check today vs yesterday. Dont care if today is not found in yesterday
    Object.keys(today.assets).forEach((type) => {
        Object.keys(today.assets[type] ).forEach((ticket) => {
            if(!yesterday.assets[type][ticket] ){
                provider_gains[ticket] = 0;
            }else{
                provider_gains[ticket] = parseFloat(today.assets[type][ticket] - yesterday.assets[type][ticket] ).toFixed(2)
            }
        });

    });

    return provider_gains;
}


function get_all_providers(){
    let providers = {};
    Object.keys(assets).forEach(key => {
        Object.keys(assets[key]).forEach(ticket => {
            const asset = assets[key][ticket];
            providers[asset.PROVIDER] = {}
            // console.log('setting stuff here',asset);
        });
    });
    return providers;
}




function get_value_from_provider(provider){
    let provider_value = 0;
    let provider_data = {
        value:0,
        assets:{}
    }


    Object.keys(assets).forEach(key => {
        Object.keys(assets[key]).forEach(ticket => {
            const asset = assets[key][ticket];
            if(asset.PROVIDER.toLowerCase() !== provider.toLowerCase()){
                return;
            }
            if(!asset.current_value){
                console.log('missing value for ', ticket);
                return;
            }
            provider_value += parseFloat(asset.current_value);
            if(!provider_data.assets[key]){
                provider_data.assets[key] = {};
            }


            provider_data.assets[key][ticket] = parseFloat(asset.current_value);
        });
    });
    provider_data.value = parseFloat(provider_value);
    // console.log(`Value off ${provider} is ${provider_value}`);


    return provider_data;
}


function update_portfolio_value(){
    let promises = [];
    Object.keys(assets).forEach(key => {
        Object.keys(assets[key]).forEach(ticket => {
            if(key === 'stocks' ){
                 promises.push(
                     get_stock_promise(ticket).then( (ticket) => {
                         // console.log(`${ticket} has an value of ${holdings[key][ticket].current_value}`);
                     })
                 );
            }else if(key === 'fonds'){
                 promises.push( get_fond_promise(ticket) );
            }else if(key === 'crypto' ){
                 promises.push(
                     get_crypto_promise(ticket).then( (ticket) => {
                         // console.log(`${ticket} has an value of ${holdings[key][ticket].current_value}`);
                     })
                 );
            }else if(key === 'etf'){
                promises.push(
                    get_etf_promise(ticket).then( (ticket) => {
                        // console.log(`${ticket} has an value of ${holdings[key][ticket].current_value}`);
                    })
                );
            }

        })
    });
    return promises;



}
function get_value_crypto(){
    const cryptos = assets['crypto'];
}

function get_crypto_promise(coin){
    const crypto = get_crypto(coin);
    if(crypto.current_value){
        return Promise.resolve(coin);

    }


    return get_crypto_coin_price(coin, crypto.ORDERS[0].CURRENCY).then( (value) => {
        crypto.stock_price = value;
        get_value_asset(crypto);
        return coin
    });
}
function get_etf_promise(ticket){
    // This should be the same as stocks....
    const etf = get_etf(ticket);
    if(etf.current_value){
        return Promise.resolve(ticket);
    }
    return get_stock_price_api(ticket).then( (value) => {
        etf.stock_price = value;
        get_value_asset(etf);
        return ticket
    });
}



function get_stock_promise(ticket){
    const stock = get_stock(ticket);

    // We have checked the price today. Dont cant about updating multiple times a day
    // Api has a limit off 500 request a day and 5 in a minute so this hould help on performance
    // if(stock.current_value && stock.METHOD === 'API'){
    if(stock.current_value ){
        return Promise.resolve(ticket);
    }

    let stock_promise;
    if(stock.METHOD === 'scrapper'){
        stock_promise = get_stock_price_url(ticket);
    }else{
        stock_promise = get_stock_price_api(ticket);
    }


    return stock_promise.then( (value) => {
        stock.stock_price = value
        // get_value_stock(ticket);
        get_value_asset(stock);
        return ticket;
    });

}

function get_fond_promise(ticket){
    const fond = get_fond(ticket);
    if(fond.current_value ){
        return Promise.resolve(fond.current_value);
    }

    return get_stock_price_url(ticket).then( (value) => {
        fond.stock_price = value;
        return ticket;
    }).then( (ticket) => {
         get_value_asset(fond);
        return ticket;
    })
}




function get_crypto(coin){
    if(assets.crypto[coin]){
        return assets.crypto[coin];
    }
    return {};
}

function get_stock(ticket){
    if(assets.stocks[ticket]){
        return assets.stocks[ticket];
    }
    return {};
}

function get_etf(ticket){
    if(assets.etf[ticket]){
        return assets.etf[ticket];
    }
    return {};
}

function get_fond(name){
    if(assets.fonds[name]){
        return assets.fonds[name];
    }
    return {};
}

// TODO: Handle currencys here?
function get_value_asset(asset){
    if(!asset.ORDERS){
        return;
    }

    if(asset.VALUE){
        return asset.VALUE;
    }
    asset.currency = asset.ORDERS[0].CURRENCY;
    asset.quantity = get_quantity(asset.ORDERS);
    asset.avg_buy = get_avg_buy_value(asset.ORDERS);
    asset.total_dividends = get_dividends(asset.DIVIDENDS);
    asset.return = (asset.stock_price - asset.avg_buy) * asset.quantity;

    asset.total_return = calculate_profitt(asset);
}

function get_dividends(dividends){
    if(!dividends){
        return 0;
    }
    let total_dividends = 0;
    dividends.forEach( dividend => total_dividends += dividend.VALUE );
    return total_dividends;

}

function calculate_profitt(stock){
    stock.current_value = parseFloat( stock.quantity * stock.stock_price).toFixed(2);
    if(stock.currency != 'NOK'){
        stock.current_value = stock.current_value * exchange_rates[`${stock.currency}_NOK`];
    }
    return stock.current_value + stock.total_dividends - (stock.quantity * stock.avg_buy);
}


function get_quantity(orders){
    let quantity = 0;
    orders.forEach(order => {
        if(order.BUY){
            quantity += order.UNITS;
        }else{
            quantity -= order.UNITS;
        }
    });

    return quantity;
}

function get_avg_buy_value(orders){
    let number_of_stocks = 0;
    let buy_value = 0;
    orders.forEach(order => {
        if(order.BUY){
            number_of_stocks += order.UNITS;
            buy_value = buy_value + (order.UNITS * order.PRICE);
        }else{
            number_of_stocks -= order.UNITS;
            buy_value = buy_value - (order.UNITS * order.PRICE);
        }
    });

    return buy_value/number_of_stocks;;
}

function convert_to_NOK(number){
    return number * 8.86;
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
    return [year, month, day].join('');

}

function get_todays_date(){
    var d = new Date(),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) {
        month = '0' + month;
    }

    if (day.length < 2) {
        day = '0' + day;
    }
    return [year, month, day].join('');
}

function get_exchange_rates(){
    // Only need to get USD TO NOK and SEK TO NOK
    var currencys_in_use = ['USD', 'SEK'];
    var exchange_rate_promises = [];
    currencys_in_use.forEach((from_currency) => {

        const url = `https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=${from_currency}&to_currency=NOK&apikey=I1G8TIKPFJ9UHGV0`;

        exchange_rate_promises.push(
            axios.get(url,{
                json:true,
                headers: {'User-Agent': 'request'}
            }).then( (response) => {
                try{
                    console.log(response.data);
                    exchange_rates[`${from_currency}_NOK`] =
                        response.data['Realtime Currency Exchange Rate']['5. Exchange Rate']
                }catch(err){
                    console.log('error in gett exchange rate for ' + from_currency, err);
                }
                return 1;
            }).catch((error) => {
                console.log(error);
              })
        );

    });

    return exchange_rate_promises;
}
