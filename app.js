const { readFileSync, writeFileSync } = require('fs');
const holdings = require('./holdings');

const request = require('request');

const stock_prices = {
    'EQNR': 235.50,
    'TEL': 139.65,
    'MING': 149,
    'AKRBP': 281.2,
    'MOWI': 210.7,
    'YAR': 468,
    'NONG': 111.4,
    'MPCC': 25.95,
    'KIT': 23.25,
    'B3': 86.40,
    'BELCO': 13.6,
    'NEXT': 7.51,
    'HMONY': 1.0062
}


function get_value_from_provider(provider){
    let total_value = 0;
    Object.keys(holdings).forEach(key => {
        total_value[key] = [];
        Object.keys(holdings[key]).forEach(item => {
            if(holdings[key][item].PROVIDER != provider){
               return;
            }
            if(key === 'stocks'){
                get_value_stock(item);
            }else if(key === 'fonds'){
                get_value_fond(item);
            }

            console.log(`${item} has an value of ${holdings[key][item].current_value}`)
            total_value += holdings[key][item].current_value;
        })
    });
    console.log(`Value of ${provider} is ${total_value}`);
}
function get_value_crypto(){
    const cryptos = holdings['Crypto'];
}



function get_current_stock_price(ticket){

   
    
   
    if(ticket === 'MING'){
        // var url = 'https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=SpareBank 1&apikey=SECRET';
        //  var url = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=SPXXF&interval=120min&outputsize=10&apikey=SECRET';
        request.get({
            url: url,
            json:true,
            headers:{'User-Agent': 'request'}
        }, (err, res, data) => {
            if(err){
                console.log('Error', err)
            }else if (res.statusCode !== 200) {
                console.log('Status:', res.statusCode);
              } else {
                // data is successfully parsed as a JSON object:
                console.log('this is data', data);
              }
    
        });

    }
   

    return stock_prices[ticket];
}


function get_current_fond_price(ticket){
    // Here we have to scrab from nornet to get the values...

    const fond_price = {
        'OD-AKSJD': 0,
        'OD-ODUSD': 0,
        'Nordnet Indeksfond Global': 134.01,
        'Nordnet Indeksfond Emerging Market': 109.19,
        'Landkreditt Utbytte A': 280.69,
    };
    if(fond_price[ticket]){
        return fond_price[ticket];
    }
    return 0;
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

    fond.stock_price = get_current_fond_price(name);

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
    stock.stock_price = get_current_stock_price(ticket);
    stock.total_dividends = get_dividends(stock.DIVIDENDS);
    stock.return = (stock.stock_price - stock.avg_buy) * stock.quantity;
    stock.total_return = calculate_profitt(stock);


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
    stock.current_value = stock.quantity * stock.stock_price;
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

get_value_from_provider('nordnet');
