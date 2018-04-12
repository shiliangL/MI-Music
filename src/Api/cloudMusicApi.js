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

// 最新 或者最热
// /top/playlist ? limit = 10 & order= new

// 最新 或者最热  可选参数 : order: 可选值为 'new' 和 'hot', 分别对应最新和最热 , 默认为 'hot'
// params:{
//   limit:10,
//   order: new /hot
// }
export function fetchHotOrNewList (params) {
  return request({
    url: '/playlist/detail',
    method: 'get',
    params: params
  })
}

// 热门歌手
// /top/artists ? offset = 0 & limit= 30
export function fetchHotSingerList (params) {
  return request({
    url: '/top/artists',
    method: 'get',
    params: params
  })
}

// 歌手单曲, 传入歌手 id, 可获得歌手部分信息和热门歌曲
// /artists?id=6452
export function fetchHotSingerDetails (singerid) {
  return request({
    url: '/artists',
    method: 'get',
    params: {
      id: singerid
    }
  })
}
// 歌手 mv, 传入歌手 id,
// 说明: 调用此接口, 传入歌手 id, 可获得歌手 mv 信息,
// 具体 mv 播放地址可调 用 / mv传入此接口获得的 mvid 来拿到
export function fetchHotSingerMV (singerid) {
  return request({
    url: '/artist/mv',
    method: 'get',
    params: {
      id: singerid
    }
  })
}
// 专辑, 传入歌手 id,
// 说明: 调用此接口, 传入歌手 id, 可获得歌手 mv 信息,
// 具体 mv 播放地址可调 用 / mv传入此接口获得的 mvid 来拿到
export function fetchHotSingerAlbumList (params) {
  return request({
    url: '/artist/album',
    method: 'get',
    params: params
  })
}

export function fetchBannerList (params) {
  return request({
    url: 'banner',
    method: 'get',
    params: params
  })
}
