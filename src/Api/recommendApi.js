
import jsonp from '@/util/jsonp.js'
import { commonParams, options } from './config'
const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
export function fetchRecommend (params) {
  // 合并参数
  const data = Object.assign({}, commonParams, {
    platform: 'h5',
    uin: 0,
    needNewCode: 1
  })

  return jsonp(url, data, options).then()
}
