# Etherscan API

[![npm version](https://badge.fury.io/js/etherscan-api.svg)](https://badge.fury.io/js/etherscan-api) [![Build Status](https://travis-ci.org/sebs/etherscan-api.svg?branch=master)](https://travis-ci.org/sebs/etherscan-api)[![npm](https://img.shields.io/npm/dt/etherscan-api.svg?maxAge=2592000)]()

Promised API to access the etherscan.io REST interface

* account.getminedblocks
* account.tokensupply
* account.tokenbalance by name
* account.tokenbalance by address
* account.txlist
* account.txlistinternal
* account.balance
* account.balance multi
* stats.ethsupply
* stats.tokensupply
* stats.ethprice
* block.getblockreward
* transaction.getstatus
* contract.getabi


```javascript
var api = require('etherscan-api').init('YourApiKey');
var balance = api.account.balance('0xde0b295669a9fd93d5f28d9ec85e40f4cb697bae');
balance.then(function(balanceData){
  console.log(balanceData);
});
```

 ## Install

 ```bash
 npm install etherscan-api --save
 ```
