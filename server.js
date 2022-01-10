const express = require('express');
const app = new express();

app.get('/', function(request, response){
    response.sendFile(__dirname + '/index.html');
});

app.listen(5000, () => {
    console.log('express is running on port 5000');
});
