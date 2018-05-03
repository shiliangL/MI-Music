import axios from 'axios'
axios.defaults.withCredentials = true
// 创建axios实例
const service = axios.create({
  timeout: 15000 // 请求超时时间
})

// 请求拦截
service.interceptors.request.use(config => {
//   if (store.getters.token) {
//     config.headers['X-Token'] = getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
//   }
  return config
}, error => {
  console.log(error) // for debug
  Promise.reject(error)
})

// 响应返回拦截
service.interceptors.response.use(
  response => {
    console.log('返回', response)
    return response
  },
  error => {
    console.log('错误' + error)// for debug
    return Promise.reject(error)
  }
)

export default service
