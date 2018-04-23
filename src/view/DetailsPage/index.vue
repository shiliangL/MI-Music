<template>
 <transition name="slide">
  <div class="DetailsPage">
    <div class="title-top">
      <AppHeader>
          <div slot="left" @click="goback"> <i class="icon iconfont icon-liebiao10"></i> </div>
          <div slot="content"> 歌单 </div>
          <div slot="right"></div>
      </AppHeader>
      <div class="section" :style="bgStyle">
        <div class="flex container">
          <div class="imgs">
            <img :src="picUrl" alt="">
          </div>
          <div class="desc">
            <h2> {{name}} </h2>
            <p> </p>
            <div></div>
          </div>
        </div>
        <div class="filter" ref="filter"></div>
      </div>
    </div>

    <Scroll>
      <div class="container">
        <div v-for="(item,index) in page.tracks" :key="index" class="list" v-if="page.tracks.length" @click="clickRow(item,index)">
          <div class="index">{{index+1}}</div>
          <div class="songsDc">
            <div class="songmsg">
              <div> {{item.name}} </div>
              <p> {{item.album.name}} </p>
            </div>
            <div class="play-icon">
              <i class="icon iconfont icon-music_play_button"></i>
            </div>
          </div>
        </div>
      </div>
    </Scroll>

  </div>
  </transition>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { AppHeader, Scroll } from '@/components/common.js'

import {fetchPersonalizedDetails} from '@/Api/cloudMusicApi'
export default {
  name: 'DetailsPage',
  components: {
    AppHeader,
    Scroll
  },
  data () {
    return {
      page: {
        name: null,
        picUrl: null,
        tracks: []
      }
    }
  },
  computed: {
    name () {
      return this.personalizedData.name
    },
    picUrl () {
      return this.personalizedData.picUrl
    },
    bgStyle () {
      if (this.personalizedData) {
        return `background-image:url(${this.personalizedData.picUrl})`
      } else {
        return ''
      }
    },
    ...mapGetters([
      'personalizedData'
    ])
  },
  created () {

  },
  mounted () {
    this.fetchData()
  },
  methods: {
    ...mapActions([
      'VX_SET_playList'
    ]),
    fetchData () {
      if (!this.personalizedData) {
        this.$router.push('/Find')
        return
      }
      fetchPersonalizedDetails({id: this.personalizedData.id}).then(({result}) => {
        console.log(result)
        this.page = result
      })
    },
    goback () {
      this.$router.back()
    },
    clickRow (item, index) {
      this.VX_SET_playList(this.page.tracks, index)
    }
  }
}
</script>

<style scoped lang="stylus">
.slide-enter-active, .slide-leave-active {
  transition: all 0.3s;
}

.slide-enter, .slide-leave-to {
  transform: translate3d(100%, 0, 0);
}
.DetailsPage
  background:#fff
  position: fixed
  z-index: 200
  top: 0
  left: 0
  bottom: 0
  right: 0
  .section
    position: relative;
    padding: 30px 10px 30px 15px;
    overflow: hidden;
    background-color: rgba(0,0,0,.25);
    .container
      z-index 30
      position relative
      width 100%
    .filter
        position: absolute
        top: 0
        left: 0
        width: 100%
        height: 100%
        background: rgba(7, 17, 27, 0.4)
        z-index 20
    .flex
      z-index 30
      display:flex
      .imgs
        width: 280px;
        height: 280px;
        img
          width 100%
      .desc
        color #ffffff
        width 100%
        margin-left 20px
        padding-top: 20px;
        h2
          padding-top: 1px;
          font-size: 30px;
          line-height: 1.3;
          height: 44px;
  .list
    height:100px
    display flex
    align-items:center
    .index
      width:84px
      color: #888;
      font-size :30px;
      font-weight 400;
      text-align: center
    .songsDc
      display flex
      flex: 1 1 auto;
      align-items:center
      width 100%
      height 100%
      justify-content space-between
      font-size: 12px;
      border-top: 0.5px solid rgba(0,0,0,.1);
      .play-icon
        width 60px
        i
          font-size 30px
      .songmsg
        div
          font-size: 28px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          word-break: normal;
          margin-bottom 8px;
        p
          font-size: 12px;
          color: #888;
</style>
