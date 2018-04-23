import { playModel } from '@/util/config.js'
const play = {
  state: {
    isPlay: false,
    isFullScree: false,
    playList: [],
    sequenceList: [],
    model: playModel.sequence,
    currentIndex: -1
  },
  mutations: {
    SET_isPlay: state => {
      state.isPlay = !state.isPlay
    },
    SET_isFullScree: state => {
      state.isFullScree = !state.isFullScree
    },
    VX_SET_playList: (state, playList) => {
      state.playList = playList
    }
  },
  actions: {
    SET_isPlay ({ commit }) {
      commit('SET_isPlay')
    },
    SET_isFullScree ({ commit }) {
      commit('SET_isFullScree')
    },
    VX_SET_playList ({ commit }, {playList, index}) {
      commit('VX_SET_playList', playList)
    }
  }
}

export default play
