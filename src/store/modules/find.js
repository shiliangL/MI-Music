const find = {
  state: {
    personalizedData: null,
    shiliangl: false
  },
  mutations: {
    TOGGLE_SH: state => {
      state.shiliangl = !state.shiliangl
    },
    SET_personalizedData: (state, personalizedData) => {
      state.personalizedData = personalizedData
    }
  },
  actions: {
    SET_ME ({ commit }) {
      commit('TOGGLE_SH')
    },
    VX_SET_PersonalizedData ({ commit }, personalizedData) {
      commit('SET_personalizedData', personalizedData)
    }

  }
}

export default find
