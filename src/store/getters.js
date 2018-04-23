const getters = {
  shiliangl: state => state.find.shiliangl,
  personalizedData: state => state.find.personalizedData,
  isPlay: state => state.play.isPlay,
  isFullScree: state => state.play.isFullScree,
  playList: state => state.play.playList,
  sequenceList: state => state.play.sequenceList,
  model: state => state.play.model,
  currentIndex: state => state.play.currentIndex,
  currentSong: state => state.play.playList[state.play.currentIndex]
}
export default getters
