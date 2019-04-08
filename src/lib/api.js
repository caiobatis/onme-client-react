import axios from 'axios'

const baseURL = 'https://api.frentecorretora.com.br/v1/exchanges/'
const baseURLMail = 'http://api.onmecambio.com.br/v1'

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
    axios.post(`${baseURLMail}/sendingEmail`, data)
      .then((res) => resolve(res))
      .catch((res) => reject(res)))
}