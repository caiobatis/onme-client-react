import { RECEIVE_SHIPPING, FETCH_SHIPPING } from '../lib/actionsTypes'
import {
  postShipping
} from '../lib/api'


const sanitizate = (data) => {
  if(data.motivo.value)
    data.motivo = data.motivo.value 
  if(data.moeda.value)
    data.moeda = data.moeda.value

  return data
}

export const sendShipping = data => {
  return dispatch => {
    dispatch(fetchShipping(true))
    postShipping(sanitizate(data))
    .then((res)=> {
      dispatch(fetchShipping(false))
      res.data.status === 'validation_failed' ? 
        dispatch(receiveShipping(res.data.message, true)) :
          dispatch(receiveShipping('Dados recebidos, entraremos em contato', false))
    })
    .catch(res => {
      dispatch(receiveShipping(data.message, true))
      dispatch(fetchShipping(false))
    })
  }
}

const receiveShipping = (msg, err) => ({
  type: RECEIVE_SHIPPING,
  msg,
  err
})

const fetchShipping = value => ({
  type: FETCH_SHIPPING,
  payload: value
})
