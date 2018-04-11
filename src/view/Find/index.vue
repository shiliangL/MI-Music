<template>
  <div class="Find">
    <Scroll :data="page.list">
      <TitleGroupItem title="推荐歌单" :options="page.list"></TitleGroupItem>
    </Scroll>
  </div>
</template>

<script>
import { fetchPersonalizedList } from '@/Api/cloudMusicApi.js'
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
        list: []
      }
    }
  },
  mounted () {
    this.fetchSongsList()
  },
  methods: {
    fetchSongsList () {
      fetchPersonalizedList().then(({result}) => {
        this.$setKeyValue(this.page, {
          list: result
        })
      })
    }
  }
}
</script>

<style scoped lang="stylus">
.Find
  height 100%
</style>
