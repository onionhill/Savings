const express = require('express');
const app = new express();
const portfolio = require('./portfolio');
const getHistoryData = require('./historydata');


app.get('/', function(request, response){

    response.sendFile('/view/index.html',{root: __dirname});
});

app.get('/PortfolioData', function(request, response){
    response.send({
        portfolio: portfolio,
        history: getHistoryData()
    } );
});

app.listen(5300, () => {
    console.log('express is running on port 5300');
});

app.use('/public', express.static('public'))