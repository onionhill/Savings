
let portfolioData = {};
let assets = {};
let history = {};
let todays_item = {};
let yesterdays_item;
let type_values = {};
let assets_clean = {};
let dividends = {};
let closed_posisions = {};

let flatten_assets = [];



function initPortFolio(){
    if(window.localStorage.getItem('portfolioData') !== null ){
        portfolioData = JSON.parse(window.localStorage.getItem('portfolioData'));
        assets = portfolioData.portfolio.assets;
        dividends = portfolioData.dividends;
        history = portfolioData.history;
        closed_posisions = portfolioData.closed;
        todays_item = history[get_todays_date()];


        if(typeof create_dividends_overview === 'function'){
            create_dividends_overview();
        }else{
            initValues();

        }

    }else{
        $.get('/portfolioData').then( (res) => {
            portfolioData = res;
            assets = portfolioData.portfolio.assets;
            history = portfolioData.history;
            dividends = portfolioData.dividends;
            todays_item = history[get_todays_date()];
            closed_posisions = portfolioData.closed;

            let sum_sold = 0;
            Object.keys(closed_posisions).forEach((ticket) => {
                sum_sold += convert_currency( closed_posisions[ticket].CURRENCY, closed_posisions[ticket].SELL );
            });

            console.log('test2', sum_sold);

            if(typeof create_dividends_overview === 'function'){
                create_dividends_overview();
            }else{
                initValues();

            }
        });
    }
}

function getDateElement(datestring){
    // Find the first history item after given date
    let dates = Object.keys( portfolioData.history).sort();

    return dates[ dates.findIndex(n => n >= datestring) ];

}

function initValues(){
    let counter = 1;

    while(!yesterdays_item && counter < 14 ){
        let date = new Date();
        var days = 60 * 60 * 24 * 1000 * counter;

        date = new Date( new Date().getTime() -  days );
        let datestring =   date.getFullYear() + 
                String(date.getMonth() + 1 ).padStart(2,0) + 
                String(date.getDate()  ).padStart(2,0);

        let prevDate = getDateElement(datestring );
        if(history[prevDate] ){
            yesterdays_item = history[prevDate];
        }
        counter++;
    }
    
    Object.keys(assets).forEach((type) => {
        Object.keys(assets[type] ).forEach((ticket) => {
            flatten_assets.push(assets[type][ticket]);
        });
    });
    let total_value = 0;

    if(todays_item ){
        Object.keys(assets).forEach((type) => {
            Object.keys(assets[type] ).forEach((ticket) => {
                const asset = todays_item.assets[type][ticket];
                total_value+= asset.current_value;
            });
        });


        $('#current_value').html( format_number(total_value, false ) );
        let changes = total_value - yesterdays_item.results.total;

        $('#today_change').html( format_number(changes) );

        
        $('#today_change_p').html( format_number( 
            ( (changes / yesterdays_item.results.total) * 100 ) , true, '%' ) );

    }else{
        $('#current_value').html('----');
    }

    let firstItem = getDateElement('20220106');
    let start_value = 0;
    if(history?.[firstItem] ){
        start_value = portfolioData.history[firstItem].results.total;
        $('#start_value').html( format_number( start_value, false) );
    }else{
        $('#start_value').html('----');
    }
    let total_dividens = calculate_total_divididens_payed();
    if(total_dividens){
        $('#dividend_value').html( format_number(total_dividens, false) );
    }else{
        total_dividens = 0;
        $('#dividend_value').html('----');
    }

    let total_buy = calculate_total_buy('20220106') - total_dividens;
    if(total_buy){
        $('#deposit_value').html( format_number(total_buy, false) );
    }else{
        $('#deposit_value').html('----');
    }

   

    let result = total_value - total_buy - start_value;
    let result_p = result / (start_value + total_buy) * 100;


    $('#result_value').html( format_number(result) );
    
    $('#result_value_p').html( format_number(result_p, true, '%') );

    show_all_positions();
}

function show_all_positions(){
    assets_clean = {};
    Object.keys(assets).forEach((type) => {
        Object.keys(assets[type] ).forEach((ticket) => {
            const asset = todays_item.assets[type][ticket];
            let y_asset = yesterdays_item.assets[type][ticket];
            if(!assets_clean[type] ){
                assets_clean[type] = [];
            }

            if(asset.quantity == 0){
                return;
            }

            if(!y_asset){
                y_asset = {
                    current_value: asset.current_value,
                };
            }


            assets_clean[type].push(
               [ 
                   ticket,
                   asset.quantity, //Antall
                   asset.current_value ,  //Verdi
                   (asset.current_value - y_asset.current_value), //Idag
                   ( ( asset.current_value - y_asset.current_value) / y_asset.current_value ) * 100, //Idag
                   asset.return , //Resultat
                   ( asset.return  / (asset.current_value - asset.return) ) * 100 //Resultat%
                ]
            )



        }) 
    });

  
    const stocks = $('#stocks_overview');
    const etf = $('#etf_overview');
    const crypto =$('#crypto_overview'); 
    const fond = $('#fonds_overview'); 

    Object.keys(assets).forEach((type) => {
        const sorted_elements = assets_clean[type].sort((a,b) => b[2] - a[2] );
        const asset_table = 
            $('<table class="table asset_table tablesorter"/>').append(
                $('<thead>').append(
                    $('<tr>').append(
                        '<th>Ticket</th>',
                        '<th>Antall</th>',
                        '<th>Verdi</th>',
                        '<th>Idag</th>',
                        '<th>Idag %</th>',
                        '<th>Resultat</th>',
                        '<th>Resultat % </th>'
                    )
                )  
            );
        
        const asset_table_body = $('<tbody>');
        sorted_elements.forEach( (item) => {
            const tr = $('<tr>').append(
                `<td>${item[0]}</td>`,                             //Ticket
                $('<td>').append(format_number(item[1], false ) ), //Antall
                $('<td>').append(format_number(item[2], false ) ), //Verdi
                $('<td>').append(format_number(item[3] ) ),        //Idag
                $('<td>').append(format_number(item[4],  true, '%' ) ), //Idag %
                $('<td>').append(format_number(item[5] ) ),        //Resultat
                $('<td>').append( format_number(item[6], true, '%')  ),  //Resultat %
            );
            asset_table_body.append(tr);
        });
        asset_table.append(asset_table_body);

        if(type === 'stocks') stocks.append(asset_table);
        if(type === 'etf') etf.append(asset_table);
        if(type === 'crypto') crypto.append(asset_table);
        if(type === 'fonds') fond.append(asset_table);
        
    });
    type_values = calculate_type_values(assets_clean);

    generate_donut_chart();

     drawCurrentValue();

    // $(".tablesorter").tablesorter({ sortList: [[0,0], [1,0]] });
}

function generate_donut_chart(data){
    let default_value;
    if(!data){
        data = type_values;
        default_value = $('#current_value').text();
        $('#back_button').hide();
    }else{
        //Convert ['BTC', 1000] to {BTC: 1000}
        let object_data = {};
        let sum =0; 
        data.forEach( (item) => { sum+= item[2]; object_data[item[0] ] = item[2]  } );
        data = object_data;
        default_value = parseFloat( parseFloat(sum).toFixed(0) ).toLocaleString('no-NO');
        $('#back_button').show();

    }

    var chart = c3.generate({
        bindto: '#donut_chart',
        data: {
            json: data,
            type : 'donut',
            onmouseover: function (d, i) {  
                let pre_fix = '';
                if(!assets_clean[d.id] ){
                    pre_fix = d.id + ': ';
                }
                let formated_value = parseFloat( parseFloat(d.value).toFixed(0) ).toLocaleString('no-NO');
                $('.c3-chart-arcs-title').html(pre_fix + formated_value); 
            },
            onmouseout: function (d, i) { $('.c3-chart-arcs-title').html(default_value) },
            onclick: function(d,i){
                if(assets_clean[d.id] ){
                    toggle_overviews(d.id, true);
                    generate_donut_chart(assets_clean[d.id] );
                }
            },
        },
        donut: {
            title: default_value
        }
    });
}


function calculate_total_buy(startDate = '20000101', endDate = '20990101'){
    let total_buy = 0;
    
  
    flatten_assets.forEach( (asset) => {
        let ticket_buy = 0;
        asset.ORDERS.forEach( (order) => {
            let orderDate = order.DATE.replace(/-/g,'');
            if(orderDate >= startDate && orderDate <= endDate){
                let order_buy = 0;
                
                

                if(order.BUY){
                    order_buy = (order.UNITS * order.PRICE);
                }else{
                    order_buy =  -(order.UNITS * order.PRICE);
                }

                
                if(order.CURRENCY != 'NOK'){
                    order_buy = convert_currency( order.CURRENCY, order_buy );
                }

                ticket_buy+= order_buy;
            }else{

            }           
        });
        total_buy += ticket_buy;
    });
    return total_buy;

}
function convert_date(date){
    let date_array = date.split('-');
    return date_array[2] + '.' + date_array[1] + '.' + date_array[0];
}


function convert_currency(curreny, amount){
    if(curreny === 'NOK') return amount;
    return amount * todays_item.exchange_rates[`${curreny}_NOK`];
}


function drawCurrentValue(){
    // Get all total values in a array
    let data = {};
    let dates = Object.keys( portfolioData.history).sort();
    let values = ['value'];
    dates.forEach( (date) => {
        values.push(portfolioData.history[date].results.total )
        
    });

    let dateformat = Object.keys( portfolioData.history).map( (x) => {
       return [x.slice(0,4), '-', x.slice(4,6) , '-', x.slice(6,8) ].join('');
    }).sort();

    dateformat.unshift('x');
    var chart = c3.generate({
        bindto: '#current_value_chart',
        data: {
            x: 'x',
            columns: [
                dateformat,
                values
            ]
        },
        axis: {
            x: {
                type: 'timeseries',
                tick: {
                    format: '%Y-%m-%d',
                    culling: {
                        max: 20
                    }, rotate: 90
                }
            }
        }
    });
}

function toggle_overviews(type, force_show = false){
    let overview = $(`#${type}_overview`);
    let icon = overview.closest('.row').find('h1 > i');

    if(force_show){
        overview.show();
        icon.removeClass('bi-caret-right');
        icon.addClass('bi-caret-down');
    }else{
        if(icon.hasClass('bi-caret-right') ){
            icon.removeClass('bi-caret-right');
            icon.addClass('bi-caret-down');
        }else{
            icon.removeClass('bi-caret-down');
            icon.addClass('bi-caret-right');
        }
        overview.toggle();
    }

  
}

function format_number(number, addColor = true, extra = ''){
    let formated_value = parseFloat( parseFloat(number).toFixed(2) ).toLocaleString('no-NO');

    let color = 'black';
    if(addColor){
        if(number < 0 ){
            color = 'red';
        }else{
            color = 'green';
        }
    }
    
    return $('<span>').css({
        color: color,
    }).html(formated_value + extra);
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

function calculate_type_values(assets_clean){
    const type_values = {};
    Object.keys(assets_clean).forEach( (type) => {
        const typevalue = assets_clean[type].reduce( (partial, a) => partial + a[2], 0 );
        const typechanges = assets_clean[type].reduce( (partial, a) => partial + a[5], 0 );

        type_values[type] = typevalue;
        $(`#${type}_value`).html(  format_number(typevalue, false) );

        $(`#${type}_result`).html( format_number(typechanges) );
    });
  

    return type_values;
    
}

function calculate_total_divididens_payed(){
    
    let total_dividens = 0;
    Object.keys(dividends).forEach( (ticket) => {
            const ticket_dividend = dividends[ticket];

            let item_dividens = 0;
            ticket_dividend.forEach( (dividend) => {
                if(dividend.CURRENCY === 'NOK'){
                    item_dividens += dividend.VALUE;
                }else{
                    item_dividens += ( convert_currency(dividend.CURRENCY, dividend.VALUE ) );
                }
            });
            total_dividens += item_dividens;
        
    });
    return total_dividens;
}

function get_name(input){
    let name = input;
    Object.keys(assets).forEach((type) => {
        Object.keys(assets[type] ).forEach((ticket) => {
            if(input === ticket){
                name = assets[type][ticket].NAME;
            }
        });
    });
    return name;
}