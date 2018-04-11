import request from '@/util/request'

// 推荐歌单
export function fetchPersonalizedList (params) {
  return request({
    url: '/personalized',
    method: 'get',
    params: params
  })
}

// 推荐歌单详情
export function fetchPersonalizedDetails (id) {
  return request({
    url: '/playlist/detail',
    method: 'get',
    params: id
  })
}
