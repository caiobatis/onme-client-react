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
      console.log(res)
      // dispatch(fetchContact(false))
      // dispatch(receiveCoins(serializeCoins(res.data)))
    })
    .catch(()=> dispatch(fetchContact(false)))
  }
}

const receiveContact = value => ({
  type: RECEIVE_CONTACT,
  payload: value
})

const fetchContact = value => ({
  type: FETCH_CONTACT,
  payload: value
})
