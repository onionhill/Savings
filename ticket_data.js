const ticket_data = {
    'TEL': {
        'url': 'https://www.nordnet.no/market/stocks/16105595-telenor',
        'selector': '$("[class*=StatsBox__StyledPriceText]").first()'
    },
    'EQNR': {
        'url': 'https://www.nordnet.no/market/stocks/16105420-equinor',
        'selector': '$("[class*=StatsBox__StyledPriceText]").first()'
    },
    'MING': {
        'url': 'https://www.nordnet.no/market/stocks/16105415-sparebank-1-smn',
        'selector': '$("[class*=StatsBox__StyledPriceText]").first()'
    },
    'AKRBP': {
        'url': 'https://www.nordnet.no/market/stocks/16105717-aker-bp',
        'selector': '$("[class*=StatsBox__StyledPriceText]").first()'
    },
    'MOWI': {
        'url': 'https://www.nordnet.no/market/stocks/16105427-mowi',
        'selector': '$("[class*=StatsBox__StyledPriceText]").first()'
    },
    'YAR': {
        'url': 'https://www.nordnet.no/market/stocks/16105608-yara-international',
        'selector': '$("[class*=StatsBox__StyledPriceText]").first()'
    },
    'NONG': {
        'url': 'https://www.nordnet.no/market/stocks/16105416-sparebank-1-nordnorge',
        'selector': '$("[class*=StatsBox__StyledPriceText]").first()'
    },
    'KIT': {
        'url': 'https://www.nordnet.no/market/stocks/16105579-kitron',
        'selector': '$("[class*=StatsBox__StyledPriceText]").first()'
    },
    'B3': {
        'url': 'https://www.nordnet.no/market/stocks/16558617-b-3-consulting-group',
        'selector': '$("[class*=StatsBox__StyledPriceText]").first()'
    },
    'HMONY': {
        'url': 'https://www.nordnet.no/market/stocks/17436489-harmonychain',
        'selector': '$("[class*=StatsBox__StyledPriceText]").first()'
    },

    'Nordnet Indeksfond Global':{
        'url': 'https://www.nordnet.no/market/funds/17334521-nordnet-indeksfond-global',
        'selector': function($){
            let items = $("[class*=StatsBox__StyledPriceText]");
            let price = 0;
            items.each( (i,el) => {
                if(i == 1) price = $(el).html()
            })
            return parseFloat( price.replace(',','.') ).toFixed(2);
        }

    },
    'Nordnet Indeksfond Emerging Market':{
        'url': 'https://www.nordnet.no/market/funds/17334523-nordnet-indeks-emerging?accid=3',
        'selector': function($){
            let items = $("[class*=StatsBox__StyledPriceText]");
            let price = 0;
            items.each( (i,el) => {
                if(i == 1) price = $(el).html()
            })
            return parseFloat( price.replace(',','.') ).toFixed(2);
        }

    },
    'Landkreditt Utbytte A':{
        'url': 'https://www.nordnet.no/market/funds/16801444-landkreditt-utbytte-a?accid=3',
        'selector': function($){
            let items = $("[class*=StatsBox__StyledPriceText]");
            let price = 0;
            items.each( (i,el) => {
                if(i == 1) price = $(el).html()
            })
            return parseFloat( price.replace(',','.') ).toFixed(2);
        }

    }

}

module.exports = ticket_data;
