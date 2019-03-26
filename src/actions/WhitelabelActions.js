import { RECEIVE_COINS } from '../lib/actionsTypes'
import {
  getProducts
} from '../lib/api'

export const getCoins = city => {
  return dispatch => {
    getProducts(city)
      .then((res)=> 
        dispatch(receiveCoins(res.data))
      )
  }
}

const receiveCoins = value => ({
  type: RECEIVE_COINS,
  payload: value
})
