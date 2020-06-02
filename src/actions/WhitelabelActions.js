import { RECEIVE_SHIPPING_COINS, RECEIVE_COINS, RECEIVE_COIN, RECEIVE_COIN_REAL, FETCH_COINS } from '../lib/actionsTypes'
import {
  getProducts, getShipping
} from '../lib/api'

const serializeCoins = (list) => {
  return list.map((e, i) => {
    return {
      ...e,
      value: e.productCode,
      label: e.currency
    }
  })
}

export const getCoins = city => {
  return dispatch => {
    dispatch(fetchCoins(true))
    getProducts(city)
      .then((res) => {
        dispatch(fetchCoins(false))
        dispatch(receiveCoins(serializeCoins(res.data)))
      })
      .catch(() => dispatch(fetchCoins(false)))
  }
}

export const updateShipping = (reverse, options) => {
  return dispatch => {
    dispatch(fetchCoins(true))

    getShipping(reverse, options)
      .then((res) => {
        dispatch(fetchCoins(false))
        // console.log(res);
        dispatch(receiveShipping(res.data))
      })
      .catch(() => dispatch(fetchCoins(false)))
  }
}

const receiveCoins = value => ({
  type: RECEIVE_COINS,
  payload: value
})

const receiveShipping = value => ({
  type: RECEIVE_SHIPPING_COINS,
  payload: value
})

const fetchCoins = value => ({
  type: FETCH_COINS,
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