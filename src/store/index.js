import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import play from './modules/play'
import find from './modules/find'
import getters from './getters'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const store = new Vuex.Store({
  modules: {
    app,
    play,
    find
  },
  getters,
  strict: debug,
  plugins: debug ? [createLogger()] : []
})

export default store
