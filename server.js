const express = require('express');
const app = new express();
const portfolio = require('./portfolio');
const getHistoryData = require('./historydata');


app.get('/', function(request, response){

    response.sendFile('/view/index.html',{root: __dirname});
});

app.get('/PortfolioData', function(request, response){
    console.log( typeof getHistoryData);
    response.send({
        portfolio: portfolio,
        history: getHistoryData()
    } );
});

app.listen(5000, () => {
    console.log('express is running on port 5000');
});

app.use('/public', express.static('public'))