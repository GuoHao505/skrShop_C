import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://192.168.210.45:9528',
  timeout: 3000,

})

instance.interceptors.request.use(config => {


  return config
})

instance.interceptors.response.use(response => {

  return response.data
})

export default instance

