import axios from 'axios'
import { commonParams } from './config'
const songsListUrl = '/api/songsLists'
export function feachSongList () {
  const data = Object.assign({}, commonParams, {
    platform: 'yqq',
    hostUin: 0,
    sin: 0,
    ein: 10,
    sortId: 5,
    needNewCode: 0,
    categoryId: 10000000,
    rnd: Math.random(),
    format: 'json'
  })
  return axios.get(songsListUrl, { params: data }).then((res) => {
    return Promise.resolve(res)
  })
}
