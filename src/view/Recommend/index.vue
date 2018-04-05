<template>
  <div class="Recommend">
    <!-- <AppSider :siderList="page.slider"></AppSider> -->
    <AwesomeSwiper :siderList="page.slider"></AwesomeSwiper>
    <TitleGroupItem title="歌曲列表" :options="page.songList"></TitleGroupItem>
    <TitleGroupItem title="电台" :options="page.radioList"></TitleGroupItem>
  </div>
</template>

<script>
import { fetchRecommend } from '@/Api/recommendApi.js'
import { AppSider, AwesomeSwiper, TitleGroupItem } from '@/components/common.js'

export default {
  name: 'Recommend',
  components: {
    AppSider,
    AwesomeSwiper,
    TitleGroupItem
  },
  data () {
    return {
      page: {
        slider: [],
        songList: null,
        radioList: null
      }
    }
  },
  created () {

  },
  mounted () {
    this.fetchData()
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
          console.log(this.page)
        }
      }).catch((error) => {
        console.log(error)
      })
    }
  }
}
</script>

<style scoped lang="stylus">
</style>
