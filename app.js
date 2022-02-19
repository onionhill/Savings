const fs = require('fs');
let portfolio = require('./portfolio');
let assets = portfolio.assets;

const {get_stock_price_url, get_stock_price_api} = require('./stocks');
const get_crypto_coin_price = require('./crypto');
const write_to_cache = true;
const request = require('request');
const axios = require('axios');

let exchange_rates = {};

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
    // If we dont have exchange rates we delay the portfolio code to make sure the promises are done
    var timeout_timer = 2000;
    if( Object.keys(exchange_rates).length != 2){
        timeout_timer = 1000;
        Promise.all( get_exchange_rates() ).then( () => {
            console.log('done with exchange....', exchange_rates);
        } );
    }


    setTimeout(() => {

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
            //console.log('HOLDINGS');
           // console.log(portfolio);
           let gains = {};
            try{
                const yesterday_file =  `./historical_data/${getYesterdayDate()}.json`;
                if(fs.existsSync(yesterday_file)){
                    const cache = fs.readFileSync(yesterday_file, 'utf8');
                    const yesterday_portfolio = JSON.parse( cache );
                    const yesterday_results = yesterday_portfolio.results;

                   
                    let total_gains = 0;
                    Object.keys(portfolio.assets).forEach((type) => {
                        Object.keys(portfolio.assets[type] ).forEach((ticket) => {
                            if(!yesterday_portfolio.assets[type][ticket] ){
                                gains[ticket] = 0;
                            }else{
                                gains[ticket] = format_number(portfolio.assets[type][ticket].total_return - yesterday_portfolio.assets[type][ticket].total_return )
                            }
                            total_gains += parseFloat(gains[ticket] );
                        });
                    });
                   
                    // Object.keys(all_providers).forEach((provider) => {
                    //     gains[provider] = calculate_provider_changes(
                    //         portfolio_value[provider],
                    //         yesterday_results[provider]
                    //     )
                    //     total_gains = total_gains + parseFloat( gains[provider].value );
                    // });

                    gains.total = total_gains;
                    //Calculate return values...
                
                    // console.log('Todays changes...');
                    // console.log(gains);
                   
                }
            }catch(err) {
                console.log(err);
            }
            console.log(calculate_profit(gains));
            
            // console.log( portfolio.results );
        }).catch(error => {
            console.error('error here',error.message)
        });

    }, timeout_timer);


    //Check value of a provider
}

function calculate_provider_changes(today, yesterday){
    let provider_gains = {
        value: format_number( today.value - yesterday.value)
    };
    // Only check today vs yesterday. Dont care if today is not found in yesterday
    Object.keys(today.assets).forEach((type) => {
        Object.keys(today.assets[type] ).forEach((ticket) => {
            if(!yesterday.assets[type][ticket] ){
                provider_gains[ticket] = 0;
            }else{
                provider_gains[ticket] = format_number(today.assets[type][ticket] - yesterday.assets[type][ticket] )
            }
        });

    });

    return provider_gains;
}

function find_ticket(ticket, data){

}

function calculate_profit(gains){
    let profit = [];
    let total_profit = 0;
    let total_value = 0;
   

    Object.keys(assets).forEach((type) => {
        Object.keys(assets[type] ).forEach((ticket) => {
            let push_val =  [ticket, format_number( assets[type][ticket].current_value ), format_number( assets[type][ticket].return ) ];
            if(gains[ticket] ){
               // push_val.push(gains[ticket] );
            }
            profit.push( push_val);
            total_profit+= assets[type][ticket].return;
            total_value+=assets[type][ticket].current_value;
        });
    });
    profit.sort( (a,b) => {
        return b[1] - a[1];
    });
    
    profit.push(['TOTAL', format_number(total_value), format_number(total_profit)] );
    return profit;
}

function format_number(number){
    return parseFloat(number).toFixed(2);
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
    if(crypto.current_value ){
        return Promise.resolve(coin);

    }
    return get_crypto_coin_price(coin, crypto.ORDERS[0].CURRENCY).then( (value) => {
        crypto.stock_price = value;
        get_value_asset(crypto, coin);
        return coin
    }).catch( (err) => {
        console.log('error in get crypto promise', err);
    });
}
function get_etf_promise(ticket){
    // This should be the same as stocks....
    const etf = get_etf(ticket);
    if(etf.current_value  ){
        return Promise.resolve(ticket);
    }

    return get_stock_price_api(ticket).then( (value) => {
        etf.stock_price = value;
        get_value_asset(etf, ticket);
        return ticket
    }).catch( (err) => {
        console.log('error in get etf promise', err);
    });
}



function get_stock_promise(ticket){
    const stock = get_stock(ticket);

    // We have checked the price today. Dont cant about updating multiple times a day
    // Api has a limit off 500 request a day and 5 in a minute so this hould help on performance
    // if(stock.current_value && stock.METHOD === 'API'){
    if(stock.current_value){
        return Promise.resolve(ticket);
    }

    let stock_promise;
    if(stock.METHOD === 'scrapper'){
        stock_promise = get_stock_price_url(ticket);
    }else{
        stock_promise = get_stock_price_api(ticket);
    }


    return stock_promise.then( (value) => {
        stock.stock_price = value;
        get_value_asset(stock, ticket);
        return ticket;
    }).catch( (err) => {
        console.log('error in get stock promise', err);
    });

}

function get_fond_promise(ticket){
    const fond = get_fond(ticket);
    if(fond.current_value ){
        return Promise.resolve(fond.current_value);
    }

    return get_stock_price_url(ticket).then( (value) => {
        fond.stock_price = value;
        get_value_asset(fond,ticket);
        return ticket;
    }).catch( (err) => {
        console.log('error in get fond promise', err);
    });
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
function get_value_asset(asset, ticket){
    if(!asset.ORDERS){
        return;
    }
    if(asset.VALUE){
        return asset.VALUE;
    }
    asset.currency = asset.ORDERS[0].CURRENCY;
    asset.quantity = 0; //
    // asset.quantity = get_quantity(asset.ORDERS);
     // asset.avg_buy = get_avg_buy_value(asset.ORDERS);
    let buy_value = 0;
    asset.ORDERS.forEach( (order) => {
        if(order.BUY){
            asset.quantity += order.UNITS;
            buy_value = buy_value + (order.UNITS * order.PRICE);
        }else{
            asset.quantity -= order.UNITS;
            buy_value = buy_value - (order.UNITS * order.PRICE);
        }
    });
    asset.avg_buy = buy_value / asset.quantity ;
    asset.total_dividends = 0//get_dividends(asset.DIVIDENDS);;
    if(asset.DIVIDENDS){
        asset.DIVIDENDS.forEach( dividend => asset.total_dividends += dividend.VALUE );
    }
    asset.return = (asset.stock_price - asset.avg_buy) * asset.quantity;
    asset.current_value = parseFloat( asset.quantity * asset.stock_price);
    let exchange_rate = 1;
    if(asset.currency != 'NOK'){
        exchange_rate =  exchange_rates[`${asset.currency}_NOK`];
        asset.return = asset.return * exchange_rate;
        asset.current_value = asset.current_value * exchange_rate;
    }
       asset.total_return = asset.current_value + asset.total_dividends - (asset.quantity * asset.avg_buy * exchange_rate);
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
