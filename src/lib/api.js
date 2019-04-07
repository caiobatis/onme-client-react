import axios from 'axios'

const baseURL = 'https://api.frentecorretora.com.br/v1/exchanges/'
const baseURLMail = 'http://www.api.freesendmails.com/v1/mails'

const api = axios.create({
  baseURL
})
const apiMail = axios.create({
  baseURLMail
})

export const getProducts = city => {
  return new Promise((resolve, reject) => 
    api.get(`/products/${city}`)
      .then((res) => resolve(res))
      .catch((res) => reject(res)))
}

export const postContact = data => {
  return new Promise((resolve, reject) => 
    apiMail.post(`/caiobatis7@gmail.com`, data)
      .then((res) => resolve(res))
      .catch((res) => reject(res)))
}