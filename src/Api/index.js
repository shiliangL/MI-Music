import axios from 'axios'
import { commonParams } from './config'
const songsListUrl = '/api/songsLists'

export function feachSongList () {
  const data = Object.assign({}, commonParams, {
    // picmid: 1,
    // rnd: 0.08187336754352503,
    // g_tk: 5381,
    // jsonpCallback: 'getPlaylist',
    // loginUin: 1462999406,
    // hostUin: 0,
    // format: 'jsonp',
    // inCharset: 'utf8',
    // outCharset: 'utf - 8',
    // notice: 0,
    // platform: 'yqq',
    // needNewCode: 0,
    // categoryId: 10000000,
    // sortId: 5,
    // sin: 0,
    // ein: 29
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
