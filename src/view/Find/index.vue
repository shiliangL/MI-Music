<template>
  <div class="Find">
    <ViewScroll>
      <ul>
        <li v-for="(item,index) in 100" :key="index">
        {{item}}
        </li>
      </ul>
    </ViewScroll>
  </div>
</template>

<script>
import { feachSongList } from '@/Api/index.js'
import { SongsTypeList, ViewScroll } from '@/components/common.js'
export default {
  name: 'Find',
  components: {
    ViewScroll,
    SongsTypeList
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
      feachSongList().then(({data}) => {
        if (data.code === 0) {
          this.$setKeyValue(this.page, {
            list: data.data.list
          })
        }
      })
    }
  }
}
</script>

<style scoped lang="stylus">
.Find
  height 100%
</style>
