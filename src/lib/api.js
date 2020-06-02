import axios from 'axios'

const baseURL = 'https://api.frentecorretora.com.br/v1/exchanges/'
const baseURLMail = 'https://wp.onmecambio.com.br/wp-json/contact-form-7/v1/contact-forms'

const api = axios.create({
  baseURL
})

export const getProducts = city => {
  return new Promise((resolve, reject) =>
    api.get(`/products/${city}`)
      .then((res) => resolve(res))
      .catch((res) => reject(res)))
}

// https://api.frentecorretora.com.br/v1/exchanges/remittance/inbound/reverse?purposeCode=IR002&currency=USD&correspondentId=94&value=79444

export const getShipping = (reverse, options) => {
  return new Promise((resolve, reject) =>
    api.get(`remittance/outbound${reverse ? '/reverse' : ''}?${options}`)
      // api.get(`remittance/inbound/reverse?purposeCode=IR002&currency=USD&correspondentId=94&value=79444`)
      .then((res) => resolve(res))
      .catch((res) => reject(res)))
}

export const postContact = data => {
  return new Promise((resolve, reject) => {
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      url: `${baseURLMail}/5/feedback`,
    }

    const items = ['username', 'email', 'phone', 'message']

    let form = new FormData()
    items.map((item) => {
      if (data[item]) {
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

export const postShipping = data => {
  return new Promise((resolve, reject) => {
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      url: `${baseURLMail}/9/feedback`,
    }

    const items = ['nome', 'email', 'telefone', 'motivo', 'moeda', 'quantia']

    let form = new FormData()
    items.map((item) => {
      if (data[item]) {
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