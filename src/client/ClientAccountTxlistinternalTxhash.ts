import * as request from 'request-promise-native'
import { Address } from '../entities/Address'
import { ApiKey } from '../entities/Apikey'
import { IClientAccountTxlistInternalTxhash } from '../interfaces/Account'
import { requestBuilder } from '../requestBuilder'
import { ClientBase } from './ClientBase'

/**
 * Client for the account balance
 */
export class ClientAccountTxlistinternalTxhash extends ClientBase implements IClientAccountTxlistInternalTxhash {
  /**
   * Api key to send with the request
   */
  apiKey: ApiKey
  /**
   * Hash of the transaction
   */
  txhash: string
  /**
   * module of the etherscan api to request
   */
  module: string
  /**
   * action of the etherscan api to request
   */
  action: string
  /**
   * Block to start reading data
   */
  startblock: string
  /**
   * Read data to
   */
  endblock: string
  /**
   * Sort
   */
  sort?: string
  /**
   * Page
   */
  page?: string
  /**
   * startpage
   */
  offset?: string

  constructor(
      apiKey: ApiKey,
      module: string,
      action: string,
      txhash: string,
      startblock: string,
      endblock: string,
      sort?: string,
      page?: string,
      offset?: string) {
    super()
    this.apiKey = apiKey
    this.module = module
    this.action = action
    this.txhash = txhash
    this.startblock = startblock
    this.endblock = endblock
    this.sort = sort
    this.page = page
    this.offset = offset
  }
  /**
   * Returns the serice url
   * @returns url
   */
  toUrl(): string {

    let params = {
      apiKey: this.apiKey.toString(),
      endblock: this.endblock.toString(),
      startblock: this.startblock.toString(),
      txhash: this.txhash.toString(),
    }

    if (this.sort) {
      params = Object.assign(params, {
        sort: this.sort,
      })
    }

    if (this.page) {
      params = Object.assign(params, {
        page: this.page,
      })
    }

    if (this.offset) {
      params = Object.assign(params, {
        offset: this.offset,
      })
    }
    return requestBuilder(this.module, this.action, params)
  }
  /**
   * Dies the actual request to the server
   */
  async request(): Promise<any> {
    const options = {
      uri: this.toUrl(),
    }
    const res = await request.get(options)
    return this.processResult(res)
  }
}
