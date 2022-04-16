import axios from 'axios'

const requests = axios.create({
  timeout: 5000
})

requests.interceptors.request.use((config) => {
  return config
})

requests.interceptors.response.use((res) => {
  return res.data
}, (_error) => {
  return Promise.reject(new Error('failed'))
})

export default requests