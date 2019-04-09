import { RECEIVE_CONTACT, FETCH_CONTACT } from '../lib/actionsTypes'
import {
  postContact
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

export const senMailContact = data => {
  return dispatch => {
    dispatch(fetchContact(true))
    postContact(data)
    .then((res)=> {
      dispatch(fetchContact(false))
      res.data.status === 'validation_failed' ? 
        dispatch(receiveContact(res.data.message, true)) :
          dispatch(receiveContact('Dados recebidos, entraremos em contato', false))
    })
    .catch(res => {
      dispatch(receiveContact(data.message, true))
      dispatch(fetchContact(false))
    })
  }
}

const receiveContact = (msg, err) => ({
  type: RECEIVE_CONTACT,
  msg,
  err
})

const fetchContact = value => ({
  type: FETCH_CONTACT,
  payload: value
})
