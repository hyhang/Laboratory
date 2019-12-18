import axios from 'axios'
import qs from 'qs'
import { getItem } from '@/utils/sessionStore'
axios.defaults.timeout = 20000

axios.interceptors.request.use( config => {
  const { method, data, headers } = config
  const { needToken } = headers
  const userInfo = getItem('userInfo')
  if (method.toUpperCase() === 'POST' && data && typeof data === 'object') {
    //qs将｛｝转化为urlencoded编码的字符串
    config.data = qs.stringify(data)
  }
  if (needToken) {
    const token = userInfo.token
    if (token) {
      headers.Authorization = token
    } else {
      const error = new Error('没有授权的身份！')
      throw error
    }
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