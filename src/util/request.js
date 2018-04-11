import axios from 'axios'
// import store from '@/store'
// import { getToken } from '@/utils/auth'
const service = axios.create({
  // headers: { 'Content-Type': 'application/json' },
  timeout: 5000 // request timeout
})

// 请求拦截
service.interceptors.request.use(config => {
  // Do something before request is sent
//   if (store.getters.token) {
//     const token = ''
//     config.headers['Authorization'] = token // 让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改
//   }
  console.log(config)
  return config
}, error => {
  // Do something with request error
  console.log(error) // for debug
  Promise.reject(error)
})

// 返回响应 拦截
service.interceptors.response.use(
  response => {
    if (JSON.stringify(response.headers) === '{}') {
      return response
    } else {
      const data = response.data
      // 判断什么样的业务是正常返回
      if (data.code === 200) {
        return data
      } else {
        return Promise.reject(data)
      }
    }
  },
  error => {
    console.log('err' + error)// for debug
    const status = error.response.status
    let message = null
    if (status === 400) {
      message = '错误请求，请检查参数'
    } else if (status === 401) {
      message = '身份验证未通过'
    } else if (status === 403) {
      message = '服务器拒绝请求'
    } else if (status === 404) {
      message = '服务器找不到请求的地址'
    } else if (status === 500) {
      message = '服务器内部错误'
    } else if (status === 502 || status === 504) {
      message = '网关错误或网关超时'
    }
    const result = {
      resultCode: -1,
      message: status + '    ' + message,
      status: status
    }
    return Promise.reject(result)
  })

export default service
