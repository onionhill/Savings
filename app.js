const fs = require('fs');
let portfolio = require('./portfolio');
let assets = portfolio.assets;

const {get_stock_price_url, get_stock_price_api} = require('./stocks');
const get_crypto_coin_price = require('./crypto');
const write_to_cache = true;

const request = require('request');
var total_value = 0;



get_portfolio_value();
//
// var providers = [
//     'nordnet', ''
// ]
function get_portfolio_value(){
    // Check if the cache exists
    const date = new Date();
    const cache_file =  `./historical_data/${get_todays_date()}.json`;
    try{
        if(fs.existsSync(cache_file)){
            const cache = fs.readFileSync(cache_file, 'utf8');
            portfolio = JSON.parse( cache );
            assets = portfolio.assets;
        }
    }catch(err){
        console.log(err);
    }
    const provider_promises = update_portfolio_value();

    // const provider_promises = update_portfolio_value('etoro');
    Promise.allSettled(provider_promises).then( () => {
        const etoro = get_value_from_provider('etoro');
        const nordnet = get_value_from_provider('nordnet');
        const firi = get_value_from_provider('Firi');
        const binance = get_value_from_provider('Binance');
        const cdc = get_value_from_provider('Crypto.com');
        const coinbase = get_value_from_provider('Coinbase');
        const sb1 = get_value_from_provider('SpareBank1');

        etoro.value  = etoro.value  * 8.90;
        const portfolio_value = {
            'etoro': etoro,
            'nordnet': nordnet,
            'Firi': firi,
            'Binance': binance,
            'Crypto.com': cdc,
            'Coinbase': coinbase,
            'SpareBank1': sb1,
            'Total': ( (etoro.value ) +nordnet.value+firi.value+binance.value+cdc.value+coinbase.value+sb1.value).toFixed(2)
        };


        if(write_to_cache){
            portfolio.results = portfolio_value;

            fs.writeFileSync(cache_file, JSON.stringify(portfolio) , {encodeing: 'utf8'});

        }

        // console.log( portfolio.results );
    }).catch(error => {
        console.error(error.message)
    });
    //Check value of a provider
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
            if(asset.PROVIDER !== provider){
                return;
            }

            if(!asset.current_value){
                console.log('missing value for ticket',ticket);
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

    return get_crypto_coin_price(coin, 'NOK').then( (value) => {
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
    if(stock.current_value && stock.METHOD === 'API'){
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
    }).then( (ticket) => {
        // console.log(assets['fonds'] );
        // console.log(`${ticket} has an value of ${assets['fonds'][ticket].current_value}`);

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
function get_value_asset(asset){
    if(!asset.ORDERS){
        return;
    }


    if(asset.VALUE){
        return asset.VALUE;
    }

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
    let is_USD = false;
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



//
// function get_value_fond(name){
//     const fond = get_fond(name);
//     if(!fond.ORDERS){
//         return;
//     }
//
//
//     if(fond.VALUE){
//         return fond.VALUE;
//     }
//
//     fond.quantity = get_quantity(fond.ORDERS);
//     fond.avg_buy = get_avg_buy_value(fond.ORDERS);
//
//     fond.total_dividends = get_dividends(fond.DIVIDENDS);
//     fond.return = (fond.stock_price - fond.avg_buy) * fond.quantity;
//     fond.total_return = calculate_profitt(fond);
// //     console.log(`You own ${fond.quantity } shares in fond ${name} with avg price ${fond.avg_buy}.
// // The current stock price is ${fond.stock_price}
// // Dividends: ${fond.total_dividends}
// // Return: ${fond.return}
// // Profitt: ${fond.total_return}`);
//
// }
//
//
// function get_value_stock(ticket){
//
//
//     const stock = get_stock(ticket);
//     if(!stock.ORDERS){
//         return;
//     }
//
//     if(stock.VALUE){
//         return stock.VALUE;
//     }
//
//     stock.quantity = get_quantity(stock.ORDERS);
//     stock.avg_buy = get_avg_buy_value(stock.ORDERS);
//     //
//     // await get_stock_price_url(ticket).then( (value) => stock.stock_price = value);
//
//     stock.total_dividends = get_dividends(stock.DIVIDENDS);
//     stock.return = (stock.stock_price - stock.avg_buy) * stock.quantity;
//     stock.total_return = calculate_profitt(stock);
//
// //
// //     console.log(`You own ${stock.quantity } stocks in ticket ${ticket} with avg price ${stock.avg_buy}.
// // The current stock price is ${stock.stock_price}
// // Dividends: ${stock.total_dividends}
// // Return: ${stock.return}
// // Profitt: ${stock.total_return}`);
//
//     return stock;
// }
