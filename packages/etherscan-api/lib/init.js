var restify = require('restify');
const querystring = require('querystring');

const url = 'https://api.etherscan.io/api';

/**
 * @module etherscan/api
 */
module.exports = function (apiKey) {

  if (!apiKey) {
    apiKey = 'YourApiKeyToken';
  }

  var client = restify.createJsonClient({
    url: url,
    version: '*'
  });

  function getRequest(query) {
    var p = new Promise(function(resolve, reject) {
      client.get(url+'?'+query, function(err, req, res, data) {
        if (err) {
          return reject(err);
        }
        // reject a error from the normal RPC
        if (data.status && data.status != 1) {
          return reject(data.message);
        }

        resolve(data);
      });
    });
    return p;
  }
  /** @lends module:etherscan/api */
  return {
    /**
    * @namespace
    */
    log: {

      /**
       * The Event Log API was designed to provide an alternative to the native eth_getLogs.
       */
      getLogs(
        address,
        fromBlock,
        toBlock,
        topic0,
        topic0_1_opr,
        topic1,
        topic1_2_opr,
        topic2,
        topic2_3_opr,
        topic3) {

        const module = 'log';
        const action = 'getLogs';
        var params = {
          module, action, apiKey, address
        };

        if (toBlock) {
          params.tolock = toBlock;
        }

        if (fromBlock) {
          params.fromBlock = fromBlock;
        }

        if (toBlock) {
          params.tolock = toBlock;
        }

        if (topic0) {
          params.topic0 = topic0;
        }

        if (topic0_1_opr) {
          params.topic0_1_opr = topic0_1_opr;
        }

        if (topic1) {
          params.topic1 = topic1;
        }

        if (topic1_2_opr) {
          params.topic1_2_opr = topic1_2_opr;
        }

        if (topic2) {
          params.topic2 = topic2;
        }

        if (topic2_3_opr) {
          params.topic2_3_opr = topic2_3_opr;
        }

        if (topic3) {
          params.topic3 = topic3;
        }
        var query = querystring.stringify(params);
        return getRequest(query);
      }
    },
    /**
    * @namespace
    */
    proxy: {
      /**
      * Returns the number of most recent block
      * @returns {Promise.<integer>}
      */
      eth_blockNumber() {
        const module = 'proxy';
        const action = 'eth_blockNumber';
        var query = querystring.stringify({
          module, action, apiKey
        });
        return getRequest(query);
      },
      /**
      * Returns information about a block by block number.
      * @param {string} tag - Tag to look up
      * @returns {Promise.<integer>}
      */
      eth_getBlockByNumber(tag) {
        const module = 'proxy';
        const action = 'eth_getBlockByNumber';
        const boolean = true;
        var query = querystring.stringify({
          module, action, tag, apiKey, boolean
        });
        return getRequest(query);
      },
      /**
       * Returns information about a uncle by block number.
       * @param {string} tag - Tag to look up
       * @param {string} index - Index
       * @returns {Promise.<object>}
       */
      eth_getUncleByBlockNumberAndIndex(tag, index) {
        const module = 'proxy';
        const action = 'eth_getUncleByBlockNumberAndIndex';
        var query = querystring.stringify({
          module, action, apiKey, tag, index
        });
        return getRequest(query);
      },
      /**
       * Returns the number of transactions in a block from a block matching the given block number
       * @param {string} tag - Tag to look up
       * @returns {Promise.<object>}
       */
      eth_getBlockTransactionCountByNumber(tag) {
        const module = 'proxy';
        const action = 'eth_getBlockTransactionCountByNumber';
        var query = querystring.stringify({
          module, action, apiKey, tag
        });
        return getRequest(query);
      },
      /**
       * Returns the information about a transaction requested by transaction hash
       * @param {string} hash - Transaction hash
       * @returns {Promise.<object>}
       */
      eth_getTransactionByHash(hash) {
        const module = 'proxy';
        const action = 'eth_getTransactionByHash';
        var query = querystring.stringify({
          module, action, apiKey, hash
        });
        return getRequest(query);
      },
      /**
      * Returns information about a transaction by block number and transaction index position
      * @param {string} tag - Tag to look up
      * @param {string} index - Index
      * @returns {Promise.<object>}
      */
      eth_getTransactionByBlockNumberAndIndex(tag, index) {
        const module = 'proxy';
        const action = 'eth_getTransactionByBlockNumberAndIndex';
        var query = querystring.stringify({
          module, action, apiKey, tag, index
        });
        return getRequest(query);
      },
      /**
      * Returns the number of transactions sent from an address
      * @param {string} address - Address of the transaction
      * @returns {Promise.<object>}
      */
      eth_getTransactionCount(address) {
        const module = 'proxy';
        const action = 'eth_getTransactionCount';
        var query = querystring.stringify({
          module, action, apiKey, address
        });
        return getRequest(query);
      },
      /**
      * Creates new message call transaction or a contract creation for signed transactions
      * @param {string} hex - Serialized Message
      * @returns {Promise.<object>}
      */
      eth_sendRawTransaction(hex) {
        const module = 'proxy';
        const action = 'eth_sendRawTransaction';
        var query = querystring.stringify({
          module, action, apiKey, hex
        });
        return getRequest(query);
      },
      /**
      * Returns the receipt of a transaction by transaction hash
      * @param {string} txhash - Transaction hash
      * @returns {Promise.<object>}
      */
      eth_getTransactionReceipt(txhash) {
        const module = 'proxy';
        const action = 'eth_getTransactionReceipt';
        var query = querystring.stringify({
          module, action, apiKey, txhash
        });
        return getRequest(query);
      },
      /**
      * Executes a new message call immediately without creating a transaction on the block chain
      * @param {string} to - Address to execute from
      * @param {string} tag - Content
      * @returns {Promise.<object>}
      */
      eth_call(to, tag) {
        const module = 'proxy';
        const action = 'eth_call';
        var query = querystring.stringify({
          module, action, apiKey, to, tag
        });
        return getRequest(query);
      },
      /**
      * Returns code at a given address
      * @param {string} address - Address to get code from
      * @param {string} tag - ??
      * @returns {Promise.<object>}
      */
      eth_getCode(address, tag) {
        const module = 'proxy';
        const action = 'eth_getCode';
        var query = querystring.stringify({
          module, action, apiKey, address, tag
        });
        return getRequest(query);
      },
      /**
      * Returns the value from a storage position at a given address.
      * @param {string} address - Address to get code from
      * @param {string} position - Storage position
      * @param {string} tag - ??
      * @returns {Promise.<object>}
      */
      eth_getStorageAt(address, position, tag) {
        const module = 'proxy';
        const action = 'eth_getStorageAt';
        var query = querystring.stringify({
          module, action, apiKey, address, position, tag
        });
        return getRequest(query);
      },
      /**
      * Returns the current price per gas in wei.
      * @returns {Promise.<object>}
      */
      eth_gasPrice() {
        const module = 'proxy';
        const action = 'eth_gasPrice';
        var query = querystring.stringify({
          module, action, apiKey
        });
        return getRequest(query);
      },
      /**
      * Makes a call or transaction, which won't be added to the blockchain and returns the used gas, which can be used for estimating the used gas
      * @param {string} to - Address to get code from
      * @param {string} value - Storage position
      * @param {string} gasPrice - ??
      * @param {string} gas - ??
      * @returns {Promise.<object>}
      */
      eth_estimateGas(to, value, gasPrice, gas) {
        const module = 'proxy';
        const action = 'eth_estimateGas';
        var query = querystring.stringify({
          module, action, apiKey, to, value, gasPrice, gas
        });
        return getRequest(query);
      },
    },
    /**
    * @namespace
    */
    stats: {
      /**
       * Returns the supply of Tokens
       * @param {string} tokenname - Name of the Token
       * @param {string} contractaddress - Address from token contract
       * @returns {Promise.<object>}
       */
      tokensupply(tokenname, contractaddress) {
        const module = 'stats';
        const action = 'tokensupply';

        let params = {
          module, action, apiKey
        };

        if (tokenname) {
          params.tokenname = tokenname;
        }

        if (contractaddress) {
          params.contractaddress = contractaddress;
        }

        var query = querystring.stringify(params);
        return getRequest(query);
      },

      /**
       * Returns total supply of ether
       * @returns {Promise.<integer>}
       */
      ethsupply() {
        const module = 'stats';
        const action = 'ethsupply';
        var query = querystring.stringify({
          module, action, apiKey
        });
        return getRequest(query);
      },

      /**
       * Returns the price of ether now
       * @returns {Promise.<integer>}
       */
      ethprice() {
        const module = 'stats';
        const action = 'ethprice';
        var query = querystring.stringify({
          module, action, apiKey
        });
        return getRequest(query);
      }
    },
    /**
    * @namespace
    */
    block: {
      /**
       * Find the block reward for a given address and block
       * @param {string} address - Address of the block
       * @param {string} blockno - Block number
       * @returns {Promise.<object>}
       */
      getblockreward(address, blockno) {
        const module = 'block';
        const action = 'getblockreward';
        if (!blockno) {
          blockno = 0;
        }
        var query = querystring.stringify({
          module, action, address, blockno, apiKey
        });
        return getRequest(query);
      }
    },
    /**
    * @namespace
    */
    transaction: {
      /**
       * returns the status of a specific transaction hash
       * @param {string} txhash - Transaction hash
       * @returns {Promise.<object>}
       */
      getstatus(txhash) {
        const module = 'transaction';
        const action = 'getstatus';
        var query = querystring.stringify({
          module, action, txhash, apiKey
        });
        return getRequest(query);
      }
    },
    /**
    * @namespace
    */
    contract: {
      /**
       * Returns the ABI/Interface of a given contract
       * @param {string} address - Contract address
       * @returns {Promise.<object>}
       */
      getabi(address) {
        const module = 'contract';
        const action = 'getabi';

        var query = querystring.stringify({
          module, action, address, apiKey
        });

        return getRequest(query);
      }
    },
    /**
    * @namespace
    */
    account: {
      /**
       * Returns the amount of Tokens a specific account owns.
       * @param {string} address - Contract address
       * @param {string} tokenname - Name of the token
       * @param {string} contractaddress - Contract address
       * @returns {Promise.<object>}
       */
      tokenbalance(address, tokenname, contractaddress){

        const module = 'account';
        const action = 'tokenbalance';
        const  tag = 'latest';

        var queryObject = {
          module, action, apiKey, tag
        };

        if (contractaddress) {
          queryObject.contractaddress = contractaddress;
        }

        if (tokenname) {
          queryObject.tokenname = tokenname;
        }

        if (address) {
          queryObject.address = address;
        }

        var query = querystring.stringify(queryObject);
        return getRequest(query);
      },
      /**
       * Returns the balance of a sepcific account
       * @param {string} address - Address
       * @returns {Promise.<object>}
       */
      balance(address) {
        const module = 'account';
        let action = 'balance';
        const tag = 'latest';

        if (typeof address != 'string' && address.length) {
          address = address.join(',');
          action = 'balancemulti';
        }

        var query = querystring.stringify({
          module, action, tag, address, apiKey
        });
        return getRequest(query);
      },
      /**
       * Get a list of internal transactions
       * @param {string} txhash - Transaction hash
       * @returns {Promise.<object>}
       */
      txlistinternal(txhash) {
        const module = 'account';
        const action = 'txlistinternal';

        var query = querystring.stringify({
          module, action, txhash, apiKey
        });

        return getRequest(query);
      },
      /**
       * Get a list of transactions for a specfic address
       * @param {string} address - Transaction address
       * @param {string} startblock - start looking here
       * @param {string} endblock - end looking there
       * @param {string} sort - Sort asc/desc
       * @returns {Promise.<object>}
       */
      txlist(address, startblock, endblock, sort) {
        const module = 'account';
        const action = 'txlist';

        if (!startblock) {
          startblock = 0;
        }

        if (!endblock) {
          endblock = 'latest';
        }

        if (!sort) {
          sort = 'asc';
        }

        var query = querystring.stringify({
          module, action, startblock, endblock, sort, address, apiKey
        });

        return getRequest(query);
      },
      /**
       * Get a list of blocks that a specific account has mineds
       * @param {string} address - Transaction hash
       */
      getminedblocks(address) {
        const module = 'account';
        const action = 'getminedblocks';
        var query = querystring.stringify({
          module, action, address, apiKey
        });
        return getRequest(query);
      }
    }
  };
};
