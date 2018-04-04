<template>
  <div class="Recommend">
    <AppSider :siderList="page.slider"></AppSider>
       推荐
  </div>
</template>

<script>
import { fetchRecommend } from '@/Api/recommendApi.js'
import { AppSider } from '@/components/common.js'

export default {
  name: 'Recommend',
  components: {
    AppSider
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
