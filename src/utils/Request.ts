import axios from 'axios'

const request = axios.create({
  baseURL: 'http://localhost:3000'
})

request.interceptors.request.use((config) => {
  return config
})

request.interceptors.response.use((response) => {
  return response
})

export default request
