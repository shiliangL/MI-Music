
import Vue from 'vue'

Vue.prototype.$empty = (obj) => {
  if (obj === undefined || obj === null || obj === '' || obj.length === 0) return true
  if (typeof obj === 'string') {
    if (obj.trim().length === 0) {
      return true
    }
  } else if (typeof obj === 'object') {
    if (JSON.stringify(obj) === '{}') {
      return true
    }
  }
  return false
}

Vue.prototype.$copy = (obj) => {
  if (obj === undefined) {
    return null
  }
  const newObj = {}
  for (const key in obj) {
    newObj[key] = obj[key]
  }
  return newObj
}

Vue.prototype.$setKeyValue = (original, obj) => {
  for (const key in obj) {
    original[key] = obj[key]
  }
}

Vue.prototype.$compareObjValue = (original, obj) => {
  for (const key in obj) {
    if (!original.hasOwnProperty(key) || obj[key] !== original[key]) {
      return false
    }
  }
  return true
}
