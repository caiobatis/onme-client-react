import axios from 'axios'

const baseURL = 'https://api.frentecorretora.com.br/v1/exchanges/'

const api = axios.create({
  baseURL
})

export const getProducts = city => {
  return new Promise((resolve, reject) => 
    api.get(`/products/${city}`)
      .then((res) => resolve(res))
      .catch((res) => reject(res)))
}