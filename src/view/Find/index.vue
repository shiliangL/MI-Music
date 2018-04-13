<template>
  <div class="Find">
    <Scroll :data="page.list">
      <div class="siders">
        <img :src="item.pic" alt="" v-for="(item,index) in page.banners" :key="index">
      </div>
      <TitleGroupItem title="推荐歌单" :options="page.list" @onClick="onClick"></TitleGroupItem>
      <router-view></router-view>
    </Scroll>
  </div>
</template>

<script>
import { fetchPersonalizedList, fetchBannerList } from '@/Api/cloudMusicApi.js'
import { SongsTypeList, ViewScroll, Scroll, TitleGroupItem } from '@/components/common.js'
export default {
  name: 'Find',
  components: {
    TitleGroupItem,
    ViewScroll,
    SongsTypeList,
    Scroll
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
  methods: {
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
      console.log(data)
      this.$router.push({path: '/Find/DetailsPage'})
    }
  }
}
</script>

<style scoped lang="stylus">
@import '../../styles/variable.styl';

.Find
  height 100%
  .siders
    font-size 16px
    height 390px;
    background #ffffff
    overflow hidden
    img
      height 100%
</style>
