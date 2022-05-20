const closed_posisions = {
    'EQNR':{
        'TYPE': 'Stock',
        'NAME': 'Equinor',
        'RESULT': 5992,
        'BUY': 7929,
        'SELL': 13021,
        'CURRENCY': 'NOK',
        'DATE': '2022-04-21'
    },
    'B3':{
        'TYPE':'Stock',
        'NAME': 'B3 Consulting Group AB',
        'RESULT':706,
        'BUY': 882,
        'SELL': 4351,
        'CURRENCY': 'SEK',
        'DATE': '2022-04-21'
    },
    'HMONY':{
        'TYPE':'Stock',
        'NAME': 'HarmonyChain AS',
        'RESULT':-2389,
        'BUY': 6740,
        'SELL': 4351,
        'CURRENCY': 'NOK',
        'DATE': '2022-04-21'
    },
    'JPM':{
        'TYPE':'Stock',
        'NAME': 'JP Morgan',
        'RESULT':-24.65,
        'BUY': 156.23,
        'SELL': 131.58,
        'CURRENCY': 'USD',
        'DATE': '2022-04-21'
    },
    'AGNC':{
        'TYPE':'Stock',
        'NAME': 'AGNC Investment Corp',
        'RESULT': -47.71,
        'BUY': 193.56,
        'SELL': 145.83,
        'CURRENCY': 'USD',
        'DATE': '2022-04-21'
    },
    'PSEC':{
        'TYPE':'Stock',
        'NAME': 'Prospect Capital Corp',
        'RESULT': -11.52,
        'BUY': 251.03,
        'SELL': 239.75,
        'CURRENCY': 'USD',
        'DATE': '2022-04-21'
    },
    'PYPL':{
        'TYPE':'Stock',
        'NAME': 'PayPal', 
        'RESULT': -52.97,
        'BUY': 100,
        'SELL': 47.03,
        'CURRENCY': 'USD',
        'DATE': '2022-04-21',
        
    },
    'VICI':{
        'TYPE':'Stock',
        'NAME': 'VICI Properties Inc',
        'RESULT': 12.33,
        'BUY': 150,
        'SELL': 162.34,
        'CURRENCY': 'USD',
        'DATE': '2022-04-21'
    },
    'T':{
        'TYPE':'Stock',
        'NAME': 'AT&T',
        'RESULT': -12.47,
        'BUY': '100',
        'SELL': '87.53',
        'CURRENCY': 'USD',
        'DATE': '2022-04-21'
    },
    'WBD':{
        'TYPE':'Stock',
        'NAME': 'Warner Bros Discovery INC',
        'RESULT': 22.03,
        'BUY': 0,
        'SELL': 22.03,
        'CURRENCY': 'USD',
        'DATE': '2022-04-21'
    },
    'NIO':{
        'TYPE':'Stock',
        'NAME': 'NIO',
        'RESULT': -7.95,
        'BUY': 100,
        'SELL': 92.05,
        'CURRENCY': 'USD',
        'DATE': '2022-04-21'
    },
    'POL':{
        'TYPE':'Stock',
        'NAME': 'PolarisMedia',
        'RESULT': 3692,
        'BUY': 14957,
        'SELL': 18649,
        'CURRENCY': 'NOK',
        'DATE': '2022-04-21'
    },
    'VOO':{
        'TYPE':'etf',
        'NAME': 'Vanguard S&P 500 ETF',
        'RESULT': 3.12,
        'BUY': 208.98,
        'SELL': 212.1,
        'CURRENCY': 'USD',
        'DATE': '2022-04-21'
    },
    'VTI':{
        'TYPE':'etf',
        'NAME': 'Vanguard Total Stock Market ETF',
        'RESULT': -0.87,
        'BUY': 150,
        'SELL': 149.13,
        'CURRENCY': 'USD',
        'DATE': '2022-04-21'
    },
    'SCHD':{
        'TYPE':'etf',
        'NAME': 'Schwab US Dividend Equity ETF',
        'RESULT': 2.9, 
        'BUY': 220,
        'SELL': 222.29,
        'CURRENCY': 'USD',
        'DATE': '2022-04-21'
    },
    'SDIV':{
        'TYPE':'etf',
        'NAME': 'Global X SuperDividend ETF',
        'RESULT': -1.23,
        'BUY': '50',
        'SELL': '48.77',
        'CURRENCY': 'USD',
        'DATE': '2022-04-21'
    },
    'SPHD':{
        'TYPE':'etf',
        'NAME': 'Invesco S&P 500 High dividend Low Volatility ETF',
        'RESULT': 2.18,    
        'BUY': 50,
        'SELL': 52.18,
        'CURRENCY': 'USD',
        'DATE': '2022-04-21'
    },
    'IEP':{
        'TYPE':'Stock',
        'NAME': 'Icahn Enterprises LP Common Stock NASDAQ: IEP',
        'RESULT': -4.25,
        'CURRENCY': 'USD',
        'BUY': '234.45',
        'SELL': '230.2',
        'DATE': '2022-04-28'
    },
    'QYLD':{
        'TYPE':'etf',
        'NAME': 'Global X Nasdaq 100 Covered Call ETF',
        'RESULT': -28.67,
        'BUY': 556,
        'SELL': 527,
        'CURRENCY': 'USD',
        'DATE': '2022-04-26'
    },
    'Landkreditt Utbytte A':{
        'TYPE': 'fond',
        'NAME': 'Landkreditt Utbytte A',
        'RESULT': -24,
        'BUY': 2061,
        'SELL': 2037,
        'CURRENCY': 'NOK',
        'DATE': '2022-04-26'
    },
    'Nordnet Indeksfond Global ESG':{
        'TYPE': 'fond',
        'NAME': 'Landkreditt Utbytte A',
        'RESULT': -59,
        'BUY': 2321,
        'SELL': 2262,
        'CURRENCY': 'NOK',
        'DATE': '2022-04-26'
    },
    'Nordnet Indeks Emerging Market ESG':{
        'TYPE': 'fond',
        'NAME': 'Landkreditt Utbytte A',
        'RESULT': -227,
        'BUY': 2233,
        'SELL': 2006,
        'CURRENCY': 'NOK',
        'DATE': '2022-04-26'
    },
    'KIT':{
        'TYPE': 'fond',
        'NAME': 'Kitron',
        'RESULT': -456,
        'BUY': 5896,
        'SELL': 5440,
        'CURRENCY': 'NOK',
        'DATE': '2022-05-19'
    },
    'SCHB':{
        'TYPE': 'Stock',
        'NAME': 'Schibsted',
        'RESULT': -756,
        'BUY': 5739,
        'SELL': 4983,
        'CURRENCY': 'NOK',
        'DATE': '2022-05-19'
    },
    'KAHOT':{
        'TYPE': 'Stock',
        'NAME': 'Kahot',
        'RESULT': -46,
        'BUY': 1702,
        'SELL': 1656,
        'CURRENCY': 'NOK',
        'DATE': '2022-05-19'
    }
}



module.exports = closed_posisions;
