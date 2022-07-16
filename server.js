const express = require('express');
const app = new express();
const portfolio = require('./src/data/portfolio');
const portfolio2 = require('./src/data/portfolio_2');
const getHistoryData = require('./src/historydata');
const dividends = require('./src/data/dividends');
const {convert_currency} = require('./src/currency_converter');
const closed = require('./src/data/closed');

app.get('/', function(request, response){
    response.sendFile('/view/new_overview.html',{root: __dirname});
});



app.get('/PortfolioData', async function(request, response){
    
    exchange_rates = await convert_currency();
    console.log('seind the data');
    response.send({
        portfolio: portfolio2,
        dividends: dividends,
        exchange_rates: exchange_rates
    } );
});

app.get('/old', function(request, response){
    response.sendFile('/view/index.html',{root: __dirname});
});


app.get('/dividends', function(request, response){
    response.sendFile('/view/dividends.html',{root: __dirname});
});

app.get('/PortfolioData_old', function(request, response){
    response.send({
        portfolio: portfolio,
        dividends: dividends,
        history: getHistoryData(),
        closed: closed
    } );
});

const port = process.env.PORT || 5300;

app.listen(port, () => {
    console.log('express is running on port 5300');
});

app.use('/public', express.static('public'))