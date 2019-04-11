import axios from 'axios'

const baseURL = 'https://api.frentecorretora.com.br/v1/exchanges/'
const baseURLMail = 'https://onmecambio.com.br/wp/wp-json/contact-form-7/v1/contact-forms'
//https://onmecambio.com.br/wp/wp-json/contact-form-7/v1/contact-forms/9/feedback

const api = axios.create({
  baseURL
})

export const getProducts = city => {
  return new Promise((resolve, reject) => 
    api.get(`/products/${city}`)
      .then((res) => resolve(res))
      .catch((res) => reject(res)))
}

const options = {
  method: 'POST',
  headers: {
    'content-type': 'application/x-www-form-urlencoded'
  },
  url: `${baseURLMail}/5/feedback`,
}

const items = ['username', 'email', 'phone', 'message']

export const postContact = data => {
  return new Promise((resolve, reject) => {

    let form = new FormData()
    items.map((item)=> {
      if(data[item]) {
        form.append(item, data[item])
      }
      return null
    })
    options.data = form

    axios(options)
      .then((res) => resolve(res))
      .catch((res) => reject(res))
  })
}