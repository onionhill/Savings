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
        'url': 'https://www.morningstar.no/no/funds/snapshot/snapshot.aspx?id=F000015CV5',
        'selector': '$(".line.text").first()',
    },
    'Nordnet Indeksfond Emerging Market':{
        'url': 'https://www.morningstar.no/no/funds/snapshot/snapshot.aspx?id=F000015CUX',
        'selector': '$(".line.text").first()',
    },
    'Landkreditt Utbytte A':{
        'url': 'https://www.morningstar.no/no/funds/snapshot/snapshot.aspx?id=F00000PLTL',
        'selector': '$(".line.text").first()',
    },
    'OD-ODUSD':{
        'url': 'https://www.morningstar.no/no/funds/snapshot/snapshot.aspx?id=F00000XXR8',
        'selector': '$(".line.text").first()',
    },
    'OD-AKSJD':{
        'url': 'https://www.morningstar.no/no/funds/snapshot/snapshot.aspx?id=F0000170KP',
        'selector': '$(".line.text").first()',
    }

}

module.exports = ticket_data;
