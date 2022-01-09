const portfolio = {
    assets:{
        'stocks':{
            'EQNR':{
                'PROVIDER':'nordnet',
                'NAME': 'Equinor',
                'ORDERS':[
                    {
                        'PRICE': 176.84,
                        'CURRENCY': 'NOK',
                        'UNITS': 45,
                        'DATE':'2022-01-01',
                        'BUY': true

                    }
                ],
                'DIVIDENDS':[
                    { 'DATE': '2021-05-27', 'VALUE': 9.9, 'CURRENCY': 'NOK' },
                    { 'DATE': '2021-08-27', 'VALUE': 26.61, 'CURRENCY': 'NOK' },
                    { 'DATE': '2021-11-29', 'VALUE': 449, 'CURRENCY': 'NOK' }
                ],
                'METHOD': 'scrapper'
            },
            'TEL':{
                'PROVIDER':'nordnet',
                'NAME': 'Telenor',
                'ORDERS':[
                    {
                        'PRICE': 150.16,
                        'CURRENCY': 'NOK',
                        'UNITS': 51,
                        'DATE':'2022-01-01',
                        'BUY': true
                    },
                    {
                        'PRICE': 140,
                        'CURRENCY': 'NOK',
                        'UNITS': 20,
                        'DATE': '2022-01-04',
                        'BUY': true
                    }
                ],
                'DIVIDENDS':[
                    { 'DATE': '2021-06-09', 'VALUE': 150, 'CURRENCY': 'NOK' },
                    { 'DATE': '2021-10-20', 'VALUE': 204, 'CURRENCY': 'NOK' },
                ],
                'METHOD': 'scrapper'

            },
            'MING':{
                'PROVIDER':'nordnet',
                'NAME': 'SpareBank1 Midt Norge',
                'ORDERS':[
                    {
                        'PRICE': 129.56,
                        'CURRENCY': 'NOK',
                        'UNITS': 43,
                        'DATE':'2022-01-01',
                        'BUY': true
                    }
                ],
                'DIVIDENDS':[
                    { 'DATE': '2021-07-04', 'VALUE': 13, 'CURRENCY': 'NOK' },
                    { 'DATE': '2021-11-09', 'VALUE': 77.5, 'CURRENCY': 'NOK' },
                ],
                'METHOD': 'scrapper'

            },
            'AKRBP':{
                'PROVIDER':'nordnet',
                'NAME': 'Aker BP',
                'ORDERS':[
                    {
                        'PRICE': 242.04,
                        'CURRENCY': 'NOK',
                        'UNITS': 20,
                        'DATE':'2022-01-01',
                        'BUY': true
                    }
                ],
                'DIVIDENDS':[
                    { 'DATE': '2021-05-11', 'VALUE': 20.69, 'CURRENCY': 'NOK' },
                    { 'DATE': '2021-07-28', 'VALUE': 21.86, 'CURRENCY': 'NOK' },
                    { 'DATE': '2021-11-12', 'VALUE': 69.82, 'CURRENCY': 'NOK' },
                ],
                'METHOD': 'scrapper'

            },
            'MOWI':{
                'PROVIDER':'nordnet',
                'NAME': 'Mowi',
                'ORDERS':[
                    {
                        'PRICE': 219.474,
                        'CURRENCY': 'NOK',
                        'UNITS': 21,
                        'DATE':'2022-01-01',
                        'BUY': true
                    }
                ],
                'DIVIDENDS':[
                    { 'DATE': '2021-03-08', 'VALUE': 2.88, 'CURRENCY': 'NOK' },
                    { 'DATE': '2021-06-07', 'VALUE': 8.47, 'CURRENCY': 'NOK' },
                    { 'DATE': '2021-09-13', 'VALUE': 41.16, 'CURRENCY': 'NOK' },
                    { 'DATE': '2021-11-29', 'VALUE': 29.4, 'CURRENCY': 'NOK' },
                ],
                'METHOD': 'scrapper'

            },
            'YAR':{
                'PROVIDER':'nordnet',
                'NAME': 'Yara',
                'ORDERS':[
                    {
                        'PRICE': 434.95,
                        'CURRENCY': 'NOK',
                        'UNITS': 8,
                        'DATE':'2022-01-01',
                        'BUY': true
                    }
                ],
                'DIVIDENDS':[
                    { 'DATE': '2022-05-19', 'VALUE': 160, 'CURRENCY': 'NOK' },
                    { 'DATE': '2022-09-15', 'VALUE': 160, 'CURRENCY': 'NOK' },
                ],
                'METHOD': 'scrapper'

            },
            'NONG':{
                'PROVIDER':'nordnet',
                'NAME': 'SpareBank1 Nord Norge',
                'ORDERS':[
                    {
                        'PRICE': 84.87,
                        'CURRENCY': 'NOK',
                        'UNITS': 31,
                        'DATE':'2022-01-01',
                        'BUY': true
                    }
                ],
                'DIVIDENDS':[
                    { 'DATE': '2021-04-14', 'VALUE': 12.7, 'CURRENCY': 'NOK' },
                    { 'DATE': '2021-11-11', 'VALUE': 81.53, 'CURRENCY': 'NOK' },
                ],
                'METHOD': 'scrapper'

            },
            'KIT':{
                'PROVIDER':'nordnet',
                'NAME': 'Kitron',
                'ORDERS':[
                    {
                        'PRICE': 19.25,
                        'CURRENCY': 'NOK',
                        'UNITS': 150,
                        'DATE':'2022-01-01',
                        'BUY': true
                    }
                ],
                'METHOD': 'scrapper'

            },
            'B3':{
                'PROVIDER':'nordnet',
                'NAME': 'B3 Consulting Group AB',
                'ORDERS':[
                    {
                        'PRICE': 68.93,
                        'CURRENCY': 'SEK',
                        'UNITS': 15,
                        'DATE':'2022-01-01',
                        'BUY': true
                    }
                ],
                'METHOD': 'scrapper'

            },
            'HMONY':{
                'PROVIDER':'nordnet',
                'NAME': 'HarmonyChain AS',
                'ORDERS':[
                    {
                        'PRICE': 1.36,
                        'CURRENCY': 'NOK',
                        'UNITS': 4978,
                        'DATE':'2022-01-01',
                        'BUY': true
                    }
                ],
                'METHOD': 'scrapper'

            },
            'JPM':{
                'PROVIDER':'etoro',
                'NAME': 'JP Morgan',
                'ORDERS':[
                    {
                        'PRICE': 156.23,
                        'CURRENCY': 'USD',
                        'UNITS': 1,
                        'DATE':'2022-01-01',
                        'BUY': true
                    }
                ],
                'DIVIDENDS':[ ],
                'METHOD': 'API'
            },
            'AGNC':{
                'PROVIDER':'etoro',
                'NAME': 'AGNC Investment Corp',
                'ORDERS':[
                    {
                        'PRICE': 12.08,
                        'CURRENCY': 'USD',
                        'UNITS': 12.08,
                        'DATE':'2022-01-01',
                        'BUY': true
                    }
                ],
                'DIVIDENDS':[ ],
                'METHOD': 'API'
            },
            'PSEC':{
                'PROVIDER':'etoro',
                'NAME': 'Prospect Capital Corp',
                'ORDERS':[
                    {
                        'PRICE': 8.92,
                        'CURRENCY': 'USD',
                        'UNITS': 28.13,
                        'DATE':'2022-01-01',
                        'BUY': true
                    }
                ],
                'DIVIDENDS':[ ],
                'METHOD': 'API'
            },
            'PYPL':{
                'PROVIDER':'etoro',
                'NAME': 'PayPal',
                'ORDERS':[
                    {
                        'PRICE':191.63,
                        'CURRENCY': 'USD',
                        'UNITS': 0.52,
                        'DATE':'2022-01-01',
                        'BUY': true
                    }
                ],
                'DIVIDENDS':[ ],
                'METHOD': 'API'
            },

        },
        'etf':{
            'VOO':{
                'PROVIDER': 'etoro',
                'NAME': 'Vanguard S&P 500 ETF',
                'ORDERS':[
                    {
                        'PRICE': 401.41,
                        'CURRENCY': 'USD',
                        'UNITS': 0.52,
                        'DATE':'2022-01-01',
                        'BUY': true
                    }
                ],
                'DIVIDENDS':[ ],
                'METHOD': 'API'
            },
            'VTI':{
                'PROVIDER': 'etoro',
                'NAME': 'Vanguard S&P 500 ETF',
                'ORDERS':[
                    {
                        'PRICE': 223.81,
                        'CURRENCY': 'USD',
                        'UNITS': 0.67,
                        'DATE':'2022-01-01',
                        'BUY': true
                    }
                ],
                'DIVIDENDS':[ ],
                'METHOD': 'API'
            },
            'QYLD':{
                'PROVIDER': 'etoro',
                'NAME': 'Global X Nasdaq 100 Covered Call ETF',
                'ORDERS':[
                    {
                        'PRICE': 22.48,
                        'CURRENCY': 'USD',
                        'UNITS':7.11,
                        'DATE':'2022-01-01',
                        'BUY': true
                    }
                ],
                'DIVIDENDS':[ ],
                'METHOD': 'API'
            },
        },
        'fonds':{
            'OD-AKSJD':{
                'PROVIDER': 'SpareBank1',
                'NAME': 'ODIN Aksje D',
                'ORDERS':[
                    {
                        'PRICE': 110.43,
                        'CURRENCY': 'NOK',
                        'UNITS': 94.81,
                        'DATE':'2022-01-01',
                        'BUY': true
                    }
                ],
                'DIVIDENDS':[ ]
            },
            'OD-ODUSD':{
                'PROVIDER': 'SpareBank1',
                'NAME': 'ODIN USA D',
                'ORDERS':[
                    {
                        'PRICE': 237.77,
                        'CURRENCY': 'NOK',
                        'UNITS': 37.64,
                        'DATE':'2022-01-01',
                        'BUY': true
                    }
                ],
                'DIVIDENDS':[ ]
            },
            'Nordnet Indeksfond Global':{
                'PROVIDER': 'nordnet',
                'NAME': 'Nordnet Indeksfond Global',
                'ORDERS':[
                    {
                        'PRICE': 129.08,
                        'CURRENCY': 'NOK',
                        'UNITS': 12.87,
                        'DATE':'2022-01-01',
                        'BUY': true
                    }
                ],
                'DIVIDENDS':[ ]
            },
            'Nordnet Indeksfond Emerging Market':{
                'PROVIDER': 'nordnet',
                'NAME': 'Nordnet Indeksfond Emerging Market',
                'ORDERS':[
                    {
                        'PRICE': 111.72,
                        'CURRENCY': 'NOK',
                        'UNITS': 14.089,
                        'DATE':'2022-01-01',
                        'BUY': true
                    }
                ],
                'DIVIDENDS':[ ]
            },
            'Landkreditt Utbytte A':{
                'PROVIDER': 'nordnet',
                'NAME': 'Landkreditt Utbytte A',
                'ORDERS':[
                    {
                        'PRICE': 269.73,
                        'CURRENCY': 'NOK',
                        'UNITS': 5.0421,
                        'DATE':'2022-01-01',
                        'BUY': true
                    }
                ],
                'DIVIDENDS':[ ]
            }
        },
        'crypto':{
            'ADA':{
                'PROVIDER': 'firi',
                'NAME': 'Cardano',
                'ORDERS':[
                    {
                        'PRICE': 11.59,
                        'CURRENCY': 'NOK',
                        'UNITS': 12.56,
                        'DATE':'2022-01-01',
                        'BUY': true
                    }
                ]
            },
            'BTC':{
                'PROVIDER': 'firi',
                'NAME': 'Bitcoin',
                'ORDERS':[
                    {
                        'PRICE': 408174.94,
                        'CURRENCY': 'NOK',
                        'UNITS': 0.01397,
                        'DATE':'2022-01-01',
                        'BUY': true
                    },
                    {
                        'PRICE': 379075,
                        'CURRENCY': 'NOK',
                        'UNITS': 0.001319,
                        'DATE':'2022-09-01',
                        'BUY': true
                    }
                ]
            },
            'ETH':{
                'PROVIDER': 'firi',
                'NAME': 'Ethereum',
                'ORDERS':[
                    {
                        'PRICE': 33099.50,
                        'CURRENCY': 'NOK',
                        'UNITS': 0.7869,
                        'DATE':'2022-01-01',
                        'BUY': true
                    },
                    {
                        'PRICE': 28636,
                        'CURRENCY': 'NOK',
                        'UNITS': 0.01746,
                        'DATE':'2022-01-09',
                        'BUY': true
                    }
                ]
            },
            'LTC':{
                'PROVIDER': 'firi',
                'NAME': 'Litecoin',
                'ORDERS':[
                    {
                        'PRICE': 1304.05,
                        'CURRENCY': 'NOK',
                        'UNITS': 0.7869,
                        'DATE':'2022-01-01',
                        'BUY': true
                    }
                ]
            },
            'XRP':{
                'PROVIDER': 'firi',
                'NAME': 'XRP',
                'ORDERS':[
                    {
                        'PRICE': 7.28,
                        'CURRENCY': 'NOK',
                        'UNITS': 22.23,
                        'DATE':'2022-01-01',
                        'BUY': true
                    }
                ]
            },
            'LRC':{
                'PROVIDER': 'Coinbase',
                'NAME': 'Loopring',
                'ORDERS':[
                    {
                        'PRICE': 2.02,
                        'CURRENCY': 'USD',
                        'UNITS': 118.47,
                        'DATE':'2022-01-01',
                        'BUY': true
                    },
                    {
                        'PRICE': 1.70,
                        'CURRENCY': 'USD',
                        'UNITS': 54.64,
                        'DATE':'2022-01-07',
                        'BUY': true
                    }
                ]
            },
            'CRO':{
                'PROVIDER': 'Crypto.com',
                'NAME': 'Loopring',
                'ORDERS':[
                    {
                        'PRICE': 0.55,
                        'CURRENCY': 'USD',
                        'UNITS': 156,
                        'DATE':'2022-01-01',
                        'BUY': true
                    }
                ]
            },
            'SHIB':{
                'PROVIDER': 'Crypto.com',
                'NAME': 'Shib inu',
                'ORDERS':[
                    {
                        'PRICE': 0.0000334,
                        'CURRENCY': 'USD',
                        'UNITS': 10064182,
                        'DATE':'2022-01-01',
                        'BUY': true
                    }
                ]
            },
            'ELON':{
                'PROVIDER': 'Crypto.com',
                'NAME': 'Dogelon Mars',
                'ORDERS':[
                    {
                        'PRICE': 0.000001573,
                        'CURRENCY': 'USD',
                        'UNITS': 10000000,
                        'DATE':'2022-01-01',
                        'BUY': true
                    }
                ]
            },
            'AXS':{
                'PROVIDER': 'binance',
                'NAME': 'Axie Infinity',
                'ORDERS':[
                    {
                        'PRICE': 94.95,
                        'CURRENCY': 'USD',
                        'UNITS': 3.1905,
                        'DATE':'2022-01-01',
                        'BUY': true
                    }
                ]
            }
        },
    },
    results:{},


}


module.exports = portfolio;
