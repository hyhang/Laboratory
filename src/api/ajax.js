import axios from 'axios'
import qs from 'qs'

axios.defaults.timeout = 20000

axios.interceptors.request.use( config => {
  const { method, data } = config
  if (method.toUpperCase() === 'POST' && data && typeof data === 'object') {
    //qs将｛｝转化为urlencoded编码的字符串
    config.data = qs.stringify(data)
  }
  
  return config
})

axios.interceptors.response.use( response => {
  return response.data
}, error => {
  console.log('请求异常' + error)
  return new Promise(()=>{})
  
})

export default axios