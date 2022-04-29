const portfolio = {
    assets:{
        'stocks':{
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
            },
            'IVR': {
                'PROVIDER':'nordnet',
                'NAME': 'INVESCO MORTGAGE CAPITAL',
                'ORDERS':[
                    {
                        'PRICE':1.76,
                        'CURRENCY': 'USD',
                        'UNITS': 300,
                        'DATE':'2022-04-28',
                        'BUY': true
                    },
                ],
                'METHOD': 'scrapper'
            },
            'PSEC': {
                'PROVIDER':'nordnet',
                'NAME': 'Prospect Capital Corporation',
                'ORDERS':[
                    {
                        'PRICE':7.90,
                        'CURRENCY': 'USD',
                        'UNITS': 40,
                        'DATE':'2022-04-28',
                        'BUY': true
                    },
                ],
                'METHOD': 'scrapper'
            },
            'AGNC': {
                'PROVIDER':'nordnet',
                'NAME': 'AGNC Investment Corp',
                'ORDERS':[
                    {
                        'PRICE':11.56,
                        'CURRENCY': 'USD',
                        'UNITS': 24,
                        'DATE':'2022-04-28',
                        'BUY': true
                    },
                ],
                'METHOD': 'scrapper'
            }

        },
        'etf':{
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
                'METHOD': 'scrapper'
            },
            'JEPI':{
                'PROVIDER': 'nordnet',
                'NAME': 'JPMorgan Equity Premium Income ETF',
                'ORDERS':[
                    {
                        'PRICE':  60.08,
                        'CURRENCY': 'USD',
                        'UNITS': 16,
                        'DATE':'2022-04-28',
                        'BUY': true
                    }
                ],
                'METHOD': 'scrapper'
            },
            'SDIV':{
                'PROVIDER': 'nordnet',
                'NAME': 'Global X SuperDividend ETF',
                'ORDERS':[
                    {
                        'PRICE': 10.78,
                        'CURRENCY': 'USD',
                        'UNITS': 20,
                        'DATE':'2022-04-28',
                        'BUY': true
                    }
                ],
                'METHOD': 'scrapper'
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
                        'DATE':'2022-02-23',
                        'BUY': true
                    },
                    {
                        'PRICE': 103.64,
                        'CURRENCY': 'NOK',
                        'UNITS': 4.82,
                        'DATE':'2022-04-25',
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
                    },
                    {
                        'PRICE': 237.89,
                        'CURRENCY': 'NOK',
                        'UNITS': 2.10,
                        'DATE':'2022-04-25',
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
                    },{
                        'PRICE': 0.001,
                        'CURRENCY': 'USD',
                        'UNITS': 5.69,
                        'DATE':'2022-04-28',
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
                    },
                    {
                        'PRICE': 0.00000001,
                        'CURRENCY': 'USD',
                        'UNITS': 49631,
                        'DATE':'2022-04-28',
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
                    },
                    {
                        'PRICE': 0.1,
                        'CURRENCY': 'USD',
                        'UNITS': 0.630,
                        'DATE':'2022-04-28',
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
