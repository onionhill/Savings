const { readFileSync, writeFileSync } = require('fs');
const holdings = require('./holdings');
const get_stock_price_url = require('./scrapper');
const get_crypto_coin_price = require('./crypto');

const request = require('request');
var total_value = 0;

function get_value_from_provider(provider){
    let promises = [];
    Object.keys(holdings).forEach(key => {
        total_value[key] = [];
        Object.keys(holdings[key]).forEach(ticket => {
            if(holdings[key][ticket].PROVIDER != provider){
                return;
            }
            if(key === 'stocks' ){
                 promises.push( get_stock_promise(ticket) );
            }else if(key === 'fonds'){
                 promises.push( get_fond_promise(ticket) );
            }else if(key === 'crypto' && ticket === 'BTC'){
                 promises.push( get_crypto_promise(ticket) );
            }


        })
    });
    Promise.all(promises).then( () => {
        console.log(`Value of ${provider} is ${total_value.toFixed(2)}`);
    })
}
function get_value_crypto(){
    const cryptos = holdings['crypto'];
}

function get_crypto_promise(coin){
    return get_crypto_coin_price(coin, 'NOK');
}

function get_stock_promise(ticket){
    return get_stock_price_url(ticket).then( (value) => {
        const stock = get_stock(ticket);
        stock.stock_price = value;
        return ticket;
    }).then( (ticket) => {
        get_value_stock(ticket);
        return ticket;
    }).then( (ticket) => {
        console.log(`${ticket} has an value of ${holdings['stocks'][ticket].current_value}`);
        total_value+= parseFloat( holdings['stocks'][ticket].current_value );
    });

}

function get_fond_promise(ticket){
    return get_stock_price_url(ticket).then( (value) => {
        const fond = get_fond(ticket);
        fond.stock_price = value;
        return ticket;
    }).then( (ticket) => {
        get_value_fond(ticket);
        return ticket;
    }).then( (ticket) => {
        console.log(`${ticket} has an value of ${holdings['fonds'][ticket].current_value}`);
        total_value+= parseFloat( holdings['fonds'][ticket].current_value );
    });
}




function get_crypto(coin){
    if(holdings.Crypto[coin]){
        return holdings.Crypto[coin];
    }
    return {};
}

function get_stock(ticket){
    if(holdings.stocks[ticket]){
        return holdings.stocks[ticket];
    }
    return {};
}

function get_fond(name){
    if(holdings.fonds[name]){
        return holdings.fonds[name];
    }
    return {};
}



function get_value_fond(name){
    const fond = get_fond(name);
    if(!fond.ORDERS){
        return;
    }


    if(fond.VALUE){
        return fond.VALUE;
    }

    fond.quantity = get_quantity(fond.ORDERS);
    fond.avg_buy = get_avg_buy_value(fond.ORDERS);

    fond.total_dividends = get_dividends(fond.DIVIDENDS);
    fond.return = (fond.stock_price - fond.avg_buy) * fond.quantity;
    fond.total_return = calculate_profitt(fond);
//     console.log(`You own ${fond.quantity } shares in fond ${name} with avg price ${fond.avg_buy}.
// The current stock price is ${fond.stock_price}
// Dividends: ${fond.total_dividends}
// Return: ${fond.return}
// Profitt: ${fond.total_return}`);

}


function get_value_stock(ticket){


    const stock = get_stock(ticket);
    if(!stock.ORDERS){
        return;
    }

    if(stock.VALUE){
        return stock.VALUE;
    }

    stock.quantity = get_quantity(stock.ORDERS);
    stock.avg_buy = get_avg_buy_value(stock.ORDERS);
    //
    // await get_stock_price_url(ticket).then( (value) => stock.stock_price = value);

    stock.total_dividends = get_dividends(stock.DIVIDENDS);
    stock.return = (stock.stock_price - stock.avg_buy) * stock.quantity;
    stock.total_return = calculate_profitt(stock);

//
//     console.log(`You own ${stock.quantity } stocks in ticket ${ticket} with avg price ${stock.avg_buy}.
// The current stock price is ${stock.stock_price}
// Dividends: ${stock.total_dividends}
// Return: ${stock.return}
// Profitt: ${stock.total_return}`);

    return stock;
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

//
// get_value_stock('EQNR');

get_value_from_provider('Firi');

var providers = [
    'nordnet', ''
]
function get_portfolio_value(){
    let providers = {
        'nordnet': 0,
        'etoro': 0,
        'Binance': 0,
        'Firi': 0,
        'Coinbase': 0,
        'SpareBank1': 0,
        'Crypto.com': 0
    }
}



function get_current_stock_price(ticket){


    // if(ticket === 'MIsNG'){
    //      var url = 'https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=SpareBank 1&apikey=SECRET';
    //     //  var url = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=SPXXF&interval=120min&outputsize=10&apikey=SECRET';
    //     request.get({
    //         url: url,
    //         json:true,
    //         headers:{'User-Agent': 'request'}
    //     }, (err, res, data) => {
    //         if(err){
    //             console.log('Error', err)
    //         }else if (res.statusCode !== 200) {
    //             console.log('Status:', res.statusCode);
    //           } else {
    //             // data is successfully parsed as a JSON object:
    //             console.log('this is data', data);
    //           }
    //
    //     });
    //
    // }

    get_stock_price_url(ticket);

    return value;



}
