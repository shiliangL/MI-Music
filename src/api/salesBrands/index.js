import request from '@/utils/request'

export function fetchSalesBrands (query) {
  return request({
    url: '/api/fetchSalesBrands',
    method: 'get',
    params: query
  })
}
