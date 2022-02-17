const path = require('path');
const fs = require('fs');

const directoryPath = path.join(__dirname, 'historical_data');


const getHistoryData = () => {
    let historical_data = {};

    const files = fs.readdirSync(directoryPath);
    files.forEach( (filename) => {
        const name = path.parse(filename).name;
        try{
            const cache = fs.readFileSync(directoryPath + '/' + filename, 'utf8');
            historical_data[name] = JSON.parse(cache);
        }catch(err){
            console.log('error reading file');
        }
    });
    return historical_data;
};


module.exports = getHistoryData;
