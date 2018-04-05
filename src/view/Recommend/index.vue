<template>
  <div class="Recommend">
    <ViewScroll :data="page.radioList">
    <div>
      <!-- <AppSider :siderList="page.slider"></AppSider> -->
      <AwesomeSwiper :siderList="page.slider"></AwesomeSwiper>
      <TitleGroupItem title="热门歌单" :options="page.songList"></TitleGroupItem>
      <SongsTypeList title="分类歌单" :options="page.songsTypeList"></SongsTypeList>
    </div>
    </ViewScroll>
  </div>
</template>

<script>
import { fetchRecommend } from '@/Api/recommendApi.js'
import { feachSongList } from '@/Api/index.js'
import { AppSider, AwesomeSwiper, TitleGroupItem, SongsTypeList, ViewScroll } from '@/components/common.js'

export default {
  name: 'Recommend',
  components: {
    AppSider,
    AwesomeSwiper,
    TitleGroupItem,
    SongsTypeList,
    ViewScroll
  },
  data () {
    return {
      page: {
        slider: [],
        songsTypeList: [],
        songList: null,
        radioList: null
      }
    }
  },
  created () {

  },
  mounted () {
    this.fetchData()
    this.fetchSongsList()
  },
  methods: {
    fetchData () {
      fetchRecommend().then((req) => {
        if (req.code === 0) {
          let result = req.data
          this.$setKeyValue(this.page, {
            slider: result.slider,
            songList: result.songList,
            radioList: result.radioList
          })
        }
      }).catch((error) => {
        console.log(error)
      })
    },
    fetchSongsList () {
      feachSongList().then(({data}) => {
        if (data.code === 0) {
          console.log(data.data.list)
          this.$setKeyValue(this.page, {
            songsTypeList: data.data.list
          })
        }
      })
    }
  }
}
</script>

<style scoped lang="stylus">
.Recommend
  height: 100%
  overflow: hidden
</style>
