<template>
  <div class="Find">
    <!-- <div @click="toggleVX">测试使用 VUEX</div>
    <h1>{{shiliangl}}</h1> -->
    <Scroll :data="page.list" ref="Scroll">
      <div>
        <div class="siders">
          <AppSider :siderList="page.banners" v-if="page.banners.length" @loadImage="loadImage"></AppSider>
          <!-- <img :src="item.pic" alt="" v-for="(item,index) in page.banners" :key="index"> -->
        </div>
        <div class="Find-NavList">
          <div v-if="FindNavList" v-for="(item,index) in FindNavList" :key="index">
            <i class="icon iconfont icon-faxian"></i>
            <p>{{item.name}}</p>
          </div>
        </div>
        <TitleGroupItem title="推荐歌单" :options="page.list" @onClick="onClick"></TitleGroupItem>
      </div>
    </Scroll>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { fetchPersonalizedList, fetchBannerList } from '@/Api/cloudMusicApi.js'
import { SongsTypeList, ViewScroll, Scroll, TitleGroupItem, AppSider } from '@/components/common.js'
export default {
  name: 'Find',
  components: {
    TitleGroupItem,
    ViewScroll,
    SongsTypeList,
    Scroll,
    AppSider
  },
  data () {
    return {
      page: {
        list: [],
        banners: []
      }
    }
  },
  mounted () {
    this.fetchSongsList()
    this.fetchBanners()
  },
  created () {
    this.FindNavList = [
      {name: '每日推荐', path: '', icon: 'icon-faxian'},
      {name: '独家放送', path: '', icon: ''},
      {name: '精心挑选', path: '', icon: ''},
      {name: '最新 MV', path: '', icon: ''}
    ]
  },
  computed: {
    ...mapGetters([
      'shiliangl'
    ])
  },
  methods: {
    toggleVX () {
      this.$store.dispatch('SET_ME')
    },
    fetchSongsList () {
      fetchPersonalizedList({offset: 0, limit: 9}).then(({result}) => {
        this.$setKeyValue(this.page, {
          list: result
        })
      })
    },
    fetchBanners () {
      fetchBannerList().then(result => {
        this.page.banners = result.banners
      })
    },
    onClick (data) {
      this.$store.dispatch('VX_SET_PersonalizedData', data)
      this.$router.push({path: `/Find/${data.id}`})
    },
    loadImage () {
      if (this.$refs['Scroll']) {
        this.$refs['Scroll'].refresh()
      }
    }
  }
}
</script>

<style scoped lang="stylus">
@import '../../styles/variable.styl';
.Find
  height 100%
  margin-bottom 150px
  .siders
    min-height 1px
    font-size 16px
    // height 390px;
    background #ffffff
    overflow hidden

  .Find-NavList
    height 200px
    display flex
    align-items center
    justify-content center
    div
      width calc(100%/4)
      text-align center
      font-size $font-size-icons
    i
      font-size 50px
    p
      padding 16px 0
</style>
