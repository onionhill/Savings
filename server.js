const express = require('express');
const app = new express();
const portfolio = require('./src/data/portfolio');
const getHistoryData = require('./src/historydata');
const dividends = require('./src/data/dividends');
const closed = require('./src/data/closed');


app.get('/', function(request, response){
    response.sendFile('/view/index.html',{root: __dirname});
});


app.get('/dividends', function(request, response){
    response.sendFile('/view/dividends.html',{root: __dirname});
});

app.get('/PortfolioData', function(request, response){
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