import { RECEIVE_COINS, RECEIVE_COIN, RECEIVE_COIN_REAL } from '../lib/actionsTypes'
import {
  getProducts
} from '../lib/api'

const serializeCoins = (list) => {
  return list.map((e,i)=>{
    return {
      ...e,
      value: e.productCode,
      label: e.currency 
    }
  })
}

export const getCoins = city => {
  return dispatch => {
    getProducts(city)
      .then((res)=> 
        dispatch(receiveCoins(serializeCoins(res.data)))
      )
  }
}

const receiveCoins = value => ({
  type: RECEIVE_COINS,
  payload: value
})

export const receiveCoin = value => ({
  type: RECEIVE_COIN,
  payload: value
})

export const receiveCoinReal = value => ({
  type: RECEIVE_COIN_REAL,
  payload: value
})