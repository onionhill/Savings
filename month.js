const fs = require('fs');
let portfolio = require('./portfolio');
let assets = portfolio.assets;



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
try{
    const yesterday_file =  `./historical_data/20220106.json`;
    if(fs.existsSync(yesterday_file)){
        const cache = fs.readFileSync(yesterday_file, 'utf8');
        const yesterday_portfolio = JSON.parse( cache );
        const yesterday_results = yesterday_portfolio.results;


        const portfolio_value = {};
        const all_providers = get_all_providers();
        let total_value = 0;
        Object.keys(all_providers).forEach((provider) => {
            portfolio_value[provider] = get_value_from_provider(provider);
            total_value+= portfolio_value[provider].value;
        });


        portfolio_value.total = total_value;
        // console.log(assets);

        let gains = {};
        let total_gains = 0;
        Object.keys(all_providers).forEach((provider) => {
            gains[provider] = calculate_provider_changes(
                portfolio_value[provider],
                yesterday_results[provider]
            )
            total_gains = total_gains + parseFloat( gains[provider].value );
        });

        gains.total = total_gains;


        console.log('Todays changes...');
        console.log(gains);
    }
}catch(err) {
    console.log(err);
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



function get_value_from_provider(provider){
    let provider_value = 0;
    let provider_data = {
        value:0,
        assets:{}
    }


    Object.keys(assets).forEach(key => {
        Object.keys(assets[key]).forEach(ticket => {
            const asset = assets[key][ticket];
            // console.log(asset);
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



function calculate_provider_changes(today, yesterday){
    let provider_gains = {
        value: parseFloat( today.value - yesterday.value).toFixed(2)
    };
    // Only check today vs yesterday. Dont care if today is not found in yesterday
    Object.keys(today.assets).forEach((type) => {
        Object.keys(today.assets[type] ).forEach((ticket) => {
            if(!yesterday.assets[type][ticket] ){
                provider_gains[ticket] = 0;
            }else{
                provider_gains[ticket] = parseFloat(today.assets[type][ticket] - yesterday.assets[type][ticket] ).toFixed(2)
            }
        });

    });

    return provider_gains;
}
