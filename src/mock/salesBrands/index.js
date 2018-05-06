import Mock from 'mockjs'
import * as api from '@/api/salesBrands'
import utils from '../utils'

const salesBrands = []
const TotalPageSize = Math.random() * 100

for (let i = 0; i < TotalPageSize; i++) {
  salesBrands.push(Mock.mock({
    'id': '@string("number", 16)'
  }))
}

const Apis = {
  fetchSalesBrands (config) {
    const { page = 1,
      size = 20,
      name
    } = utils.getPranams(config)
    const pranams = [{
      type: 'like',
      key: 'name',
      value: name
    }]
    const filterMock = utils.query(salesBrands, pranams)
    const ret = utils.setPageRet(filterMock, page, size)
    utils.log('MockLists:', ret, config)
    return ret
  }
}

utils.createAllMock(Apis, api)

export default Apis
