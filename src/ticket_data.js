const ticket_data = {
    'TEL': {
        'url': 'https://www.nordnet.no/market/stocks/16105595-telenor',
        'selector': '$("[class*=StatsBox__StyledPriceText]").first()'
    },
    'DNB': {
        'url': 'https://www.nordnet.no/market/stocks/17534483-dnb-bank-asa',
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
    'POL': {
        'url': 'https://www.nordnet.no/market/stocks/16105742-polaris-media',
        'selector': '$("[class*=StatsBox__StyledPriceText]").first()'
    },
    'SCHB': {
        'url': 'https://www.nordnet.no/market/stocks/16408915-schibsted-b',
        'selector': '$("[class*=StatsBox__StyledPriceText]").first()'
    },
    'IVR':{
        'url': 'https://www.nordnet.no/market/stocks/16121755-invesco-mortgage-capital',
        'selector': '$("[class*=StatsBox__StyledPriceText]").first()'
    },
    'PSEC':{
        'url': 'https://www.nordnet.no/market/stocks/16119240-prospect-capital-corporation',
        'selector': '$("[class*=StatsBox__StyledPriceText]").first()'
    },
    'AGNC':{
        'url': 'https://www.nordnet.no/market/stocks/16118176-agnc-investment',
        'selector': '$("[class*=StatsBox__StyledPriceText]").first()'
    },
    'RYLD':{
        'url': 'https://www.nordnet.no/market/etfs/17037643-global-x-russell',
        'selector': '$("[class*=StatsBox__StyledPriceText]").first()'
    },
    'JEPI':{
        'url': 'https://www.nordnet.no/market/etfs/17277718-jp-morgan-equity-premium',
        'selector': '$("[class*=StatsBox__StyledPriceText]").first()'
    },
    'OD-ODUSD':{
        'url': 'https://www.morningstar.no/no/funds/snapshot/snapshot.aspx?id=F00000XXR8',
        'selector': '$(".line.text").first()',
    },
    'OD-AKSJD':{
        'url': 'https://www.morningstar.no/no/funds/snapshot/snapshot.aspx?id=F0000170KP',
        'selector': '$(".line.text").first()',
    },
}

module.exports = ticket_data;
