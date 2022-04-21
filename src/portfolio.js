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

                    },
                    {
                        'PRICE': 310,
                        'CURRENCY': 'NOK',
                        'UNITS': 45,
                        'DATE':'2022-03-03',
                        'BUY': false

                    }
                ],
                'METHOD': 'scrapper'
            },
            'DNB':{
                'PROVIDER':'nordnet',
                'NAME': 'DNB',
                'ORDERS':[
                    {
                        'PRICE': 193.90,
                        'CURRENCY': 'NOK',
                        'UNITS': 69,
                        'DATE':'2022-03-03',
                        'BUY': true

                    }
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
                    },
                    {
                        'PRICE': 136,
                        'CURRENCY': 'NOK',
                        'UNITS': 29,
                        'DATE': '2022-02-18',
                        'BUY': true
                    },
                    {
                        'PRICE': 129,
                        'CURRENCY': 'NOK',
                        'UNITS': 33,
                        'DATE': '2022-03-28',
                        'BUY': true
                    }
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
                    },
                    {
                        'PRICE': 322.40,
                        'CURRENCY': 'NOK',
                        'UNITS': 4,
                        'DATE':'2022-03-30',
                        'BUY': true
                    }
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
                    },
                    {
                        'PRICE': 240.60,
                        'CURRENCY': 'NOK',
                        'UNITS': 10,
                        'DATE':'2022-03-25',
                        'BUY': true
                    },
                    {
                        'PRICE': 250,
                        'CURRENCY': 'NOK',
                        'UNITS': 2,
                        'DATE':'2022-04-13',
                        'BUY': true
                    }
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
                    },
                    {
                        'PRICE': 107,
                        'CURRENCY': 'NOK',
                        'UNITS': 29,
                        'DATE':'2022-03-25',
                        'BUY': true
                    }
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
                    },
                    {
                        'PRICE': 20.06,
                        'CURRENCY': 'NOK',
                        'UNITS': 150,
                        'DATE':'2022-03-25',
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
                    },
                    {
                        'PRICE': 116,
                        'CURRENCY': 'SEK',
                        'UNITS': 15,
                        'DATE':'2022-03-30',
                        'BUY': false
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
                    },
                    {
                        'PRICE': 0.88,
                        'CURRENCY': 'NOK',
                        'UNITS': 4978,
                        'DATE':'2022-04-13',
                        'BUY': false
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
                'METHOD': 'API'
            },
            'IEP':{
                'PROVIDER':'etoro',
                'NAME': 'Icahn Enterprises',
                'ORDERS':[
                    {
                        'PRICE':54.42,
                        'CURRENCY': 'USD',
                        'UNITS': 2.48,
                        'DATE':'2022-01-19',
                        'BUY': true
                    },
                    {
                        'PRICE':52.64,
                        'CURRENCY': 'USD',
                        'UNITS': 1.89,
                        'DATE':'2022-01-28',
                        'BUY': true
                    }
                ],
                'METHOD': 'API'
            },
            'VICI':{
                'PROVIDER':'etoro',
                'NAME': 'VICI Properties Inc',
                'ORDERS':[
                    {
                        'PRICE':28.07,
                        'CURRENCY': 'USD',
                        'UNITS': 5.34,
                        'DATE':'2022-01-20',
                        'BUY': true
                    }
                ],
                'METHOD': 'API'
            },
            'T':{
                'PROVIDER':'etoro',
                'NAME': 'AT&T',
                'ORDERS':[
                    {
                        'PRICE':23.21,
                        'CURRENCY': 'USD',
                        'UNITS': 4.30,
                        'DATE':'2022-03-21',
                        'BUY': true
                    }
                ],
                'METHOD': 'API'
            },
            'WBD':{
                'PROVIDER':'etoro',
                'NAME': 'Warner Bros Discovery INC',
                'ORDERS':[
                    {
                        'PRICE': 24.47,
                        'CURRENCY': 'USD',
                        'UNITS': 1.03,
                        'DATE':'2022-04-13',
                        'BUY': true
                    }
                ],
                'METHOD': 'API'
            },
            'NIO':{
                'PROVIDER':'etoro',
                'NAME': 'Nio',
                'ORDERS':[
                    {
                        'PRICE':18.80,
                        'CURRENCY': 'USD',
                        'UNITS': 5.31,
                        'DATE':'2022-03-21',
                        'BUY': true
                    }
                ],
                'METHOD': 'API'
            },
            'POL': {
                'PROVIDER':'nordnet',
                'NAME': 'PolarisMedia',
                'ORDERS':[
                    {
                        'PRICE':72.05,
                        'CURRENCY': 'NOK',
                        'UNITS': 208,
                        'DATE':'2022-03-23',
                        'BUY': true
                    },
                    {
                        'PRICE':89.80,
                        'CURRENCY': 'NOK',
                        'UNITS': 208,
                        'DATE':'2022-03-24',
                        'BUY': false
                    }
                ],
                'METHOD': 'scrapper'

            },
            'SCHB': {
                'PROVIDER':'nordnet',
                'NAME': 'Schibsted',
                'ORDERS':[
                    {
                        'PRICE':191.80,
                        'CURRENCY': 'NOK',
                        'UNITS': 30,
                        'DATE':'2022-03-28',
                        'BUY': true
                    },
                ],
                'METHOD': 'scrapper'
            }

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
                    },
                    {
                        'PRICE': 21.39,
                        'CURRENCY': 'USD',
                        'UNITS':4.45,
                        'DATE':'2022-01-20',
                        'BUY': true
                    },
                    {
                        'PRICE': 20.02,
                        'CURRENCY': 'USD',
                        'UNITS':4.99,
                        'DATE':'2022-01-28',
                        'BUY': true
                    },
                    {
                        'PRICE': 20.20,
                        'CURRENCY': 'USD',
                        'UNITS':4.55,
                        'DATE':'2022-03-03',
                        'BUY': true
                    },
                    {
                        'PRICE': 20.51,
                        'CURRENCY': 'USD',
                        'UNITS':4.87,
                        'DATE':'2022-03-21',
                        'BUY': true
                    },
                    {
                        'PRICE': 21.00,
                        'CURRENCY': 'USD',
                        'UNITS': 0.47,
                        'DATE':'2022-04-13',
                        'BUY': true
                    }
                ],
                'METHOD': 'API'
            },
            'RYLD':{
                'PROVIDER': 'nordnet',
                'NAME': 'Global X Russell 2000 Covered Call ETF',
                'ORDERS':[
                    {
                        'PRICE': 23.43,
                        'CURRENCY': 'USD',
                        'UNITS': 21,
                        'DATE':'2022-04-13',
                        'BUY': true
                    }
                ],
                'METHOD': 'API'
            },
            'SCHD':{
                'PROVIDER': 'etoro',
                'NAME': 'Schwab US Dividend Equity ETF',
                'ORDERS':[
                    {
                        'PRICE': 79.87,
                        'CURRENCY': 'USD',
                        'UNITS':1.25,
                        'DATE':'2022-01-20',
                        'BUY': true
                    },
                    {
                        'PRICE': 78.47,
                        'CURRENCY': 'USD',
                        'UNITS':1.52,
                        'DATE':'2022-01-27',
                        'BUY': true
                    }
                ],
                'METHOD': 'API'
            },
            'SDIV':{
                'PROVIDER': 'etoro',
                'NAME': 'Global X SuperDividend ETF',
                'ORDERS':[
                    {
                        'PRICE': 11.30,
                        'CURRENCY': 'USD',
                        'UNITS': 4.42,
                        'DATE':'2022-03-29',
                        'BUY': true
                    }
                ],
                'METHOD': 'API'
            },
            'SPHD':{
                'PROVIDER': 'etoro',
                'NAME': 'Invesco S&P 500 High dividend Low Volatility ETF',
                'ORDERS':[
                    {
                        'PRICE': 47.41,
                        'CURRENCY': 'USD',
                        'UNITS': 1.05,
                        'DATE':'2022-03-29',
                        'BUY': true
                    }
                ],
                'METHOD': 'API'
            }
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
                    },
                    {
                        'PRICE': 103.05,
                        'CURRENCY': 'NOK',
                        'UNITS': 4.85,
                        'DATE':'2022-01-01',
                        'BUY': true
                    }
                ],
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
                    },
                    {
                        'PRICE': 237.39,
                        'CURRENCY': 'NOK',
                        'UNITS': 2.10,
                        'DATE':'2022-02-23',
                        'BUY': true
                    }
                ],
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
                    },
                    {
                        'PRICE': 120.08,
                        'CURRENCY': 'NOK',
                        'UNITS': 2.75,
                        'DATE':'2022-02-23',
                        'BUY': true
                    }
                ],
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
                    },
                    {
                        'PRICE': 108.72,
                        'CURRENCY': 'NOK',
                        'UNITS': 3.04,
                        'DATE':'2022-02-23',
                        'BUY': true
                    }
                ],
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
                    },
                    {
                        'PRICE': 275.53,
                        'CURRENCY': 'NOK',
                        'UNITS': 1.234,
                        'DATE':'2022-02-22',
                        'BUY': true
                    }
                ],
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
                    },
                    {
                        'PRICE': 9.14,
                        'CURRENCY': 'NOK',
                        'UNITS': 5.44,
                        'DATE':'2022-02-19',
                        'BUY': true
                    },
                    {
                        'PRICE': 7.61,
                        'CURRENCY': 'NOK',
                        'UNITS': 6.54,
                        'DATE':'2022-03-21',
                        'BUY': true
                    },
                    {
                        'PRICE': 8.41,
                        'CURRENCY': 'NOK',
                        'UNITS': 5.92,
                        'DATE':'2022-04-21',
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
                        'DATE':'2022-01-09',
                        'BUY': true
                    },
                    {
                        'PRICE': 362820,
                        'CURRENCY': 'NOK',
                        'UNITS': 0.001235,
                        'DATE':'2022-02-19',
                        'BUY': true
                    },
                    {
                        'PRICE': 367408,
                        'CURRENCY': 'NOK',
                        'UNITS': 0.001219,
                        'DATE':'2022-03-21',
                        'BUY': true
                    },
                    {
                        'PRICE': 369000,
                        'CURRENCY': 'NOK',
                        'UNITS': 0.001079,
                        'DATE':'2022-04-21',
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
                    },
                    {
                        'PRICE': 1,
                        'CURRENCY': 'NOK',
                        'UNITS': 0.01216,
                        'DATE':'2022-01-09',
                        'BUY': true
                    },
                    {
                        'PRICE': 25477,
                        'CURRENCY': 'NOK',
                        'UNITS': 0.01570,
                        'DATE':'2022-02-19',
                        'BUY': true
                    },
                    {
                        'PRICE': 25986,
                        'CURRENCY': 'NOK',
                        'UNITS': 0.01533,
                        'DATE':'2022-03-21',
                        'BUY': true
                    },
                    {
                        'PRICE': 27415,
                        'CURRENCY': 'NOK',
                        'UNITS': 0.0145,
                        'DATE':'2022-04-21',
                        'BUY': true
                    }
                ]
            },
            'LTC':{
                'PROVIDER': 'firi',
                'NAME': 'Litecoin',
                'ORDERS':[
                    {
                        'PRICE': 1141,
                        'CURRENCY': 'NOK',
                        'UNITS': 0.14,
                        'DATE':'2022-01-01',
                        'BUY': true
                    },
                    {
                        'PRICE': 1060,
                        'CURRENCY': 'NOK',
                        'UNITS': 0.046,
                        'DATE':'2022-02-19',
                        'BUY': true
                    },
                    {
                        'PRICE': 991,
                        'CURRENCY': 'NOK',
                        'UNITS': 0.050,
                        'DATE':'2022-03-21',
                        'BUY': true
                    },
                    {
                        'PRICE': 1,
                        'CURRENCY': 'NOK',
                        'UNITS': 0.023,
                        'DATE':'2022-03-21',
                        'BUY': true
                    },
                    {
                        'PRICE': 982,
                        'CURRENCY': 'NOK',
                        'UNITS': 0.506,
                        'DATE':'2022-04-21',
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
                    },
                    {
                        'PRICE': 7.20,
                        'CURRENCY': 'NOK',
                        'UNITS': 6.916,
                        'DATE':'2022-02-19',
                        'BUY': true
                    },
                    {
                        'PRICE': 7.16,
                        'CURRENCY': 'NOK',
                        'UNITS': 6.955,
                        'DATE':'2022-03-21',
                        'BUY': true
                    },
                    {
                        'PRICE': 6.59,
                        'CURRENCY': 'NOK',
                        'UNITS': 7.55,
                        'DATE':'2022-04-21',
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
                    },
                    {
                        'PRICE': 0.80,
                        'CURRENCY': 'USD',
                        'UNITS': 109.53,
                        'DATE':'2022-01-22',
                        'BUY': true
                    },
                    {
                        'PRICE': 0.88,
                        'CURRENCY': 'USD',
                        'UNITS': 98.51,
                        'DATE':'2022-02-03',
                        'BUY': true
                    }, 
                    {
                        'PRICE': 0.01,
                        'CURRENCY': 'USD',
                        'UNITS': 5.51,
                        'DATE':'2022-02-03',
                        'BUY': true
                    }, 
                    {
                        'PRICE': 0.98,
                        'CURRENCY': 'USD',
                        'UNITS': 22.03,
                        'DATE':'2022-04-20',
                        'BUY': true
                    }, 
                    {
                        'PRICE': 0.98,
                        'CURRENCY': 'USD',
                        'UNITS': 14.10,
                        'DATE':'2022-04-20',
                        'BUY': true
                    }, 
                    {
                        'PRICE': 0.01,
                        'CURRENCY': 'USD',
                        'UNITS': 1.01,
                        'DATE':'2022-04-20',
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
                    },
                    {
                        'PRICE': 0.1,
                        'CURRENCY': 'USD',
                        'UNITS': 0.3096,
                        'DATE':'2022-02-19',
                        'BUY': true
                    }
                ]
            },
            'DOT':{
                'PROVIDER': 'Firi',
                'NAME': 'Polkadot',
                'ORDERS':[
                    {
                        'PRICE': 169,
                        'CURRENCY': 'NOK',
                        'UNITS': 0.292,
                        'DATE':'2022-04-21',
                        'BUY': true
                    }
                ]
            },
        }
    },
    results:{},
}


module.exports = portfolio;