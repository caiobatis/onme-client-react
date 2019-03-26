import { RECEIVE_COINS } from '../constants/actionsTypes'

export const getCoins = () => {
  return dispatch => {
    dispatch(receiveCoins([]))
  }
}

const receiveCoins = value => ({
  type: RECEIVE_COINS,
  payload: value
})
