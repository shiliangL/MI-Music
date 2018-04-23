 <template>
  <div class="AppPlayer" v-show="playList.length">
      <div class="normal" v-show="isFullScree"> full播放器 </div>
      <div class="mini" v-show="!isFullScree"> mini播放器 </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'AppPlayer',
  computed: {
    ...mapGetters([
      'playList',
      'isFullScree'
    ])
  }
}
</script>
<style scoped lang="stylus">
@import '../../styles/variable.styl';
.AppPlayer {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 9999;
  background: #fff;
  .normal {
    z-index: 400;
    background #33333
    height 80px
  }
  .mini{

  }
}
</style>
