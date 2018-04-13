<template>
  <div class="Layout">
    <div class="fixedBar">
      <AppHeader></AppHeader>
      <Tab></Tab>
    </div>
    <div class="content">
      <keep-alive>
        <router-view :key="$route.fullpath"></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import { AppHeader, Tab, ViewScroll } from '@/components/common.js'

export default {
  components: {
    AppHeader,
    Tab,
    ViewScroll
  },
  name: 'Layout',
  mounted () {}
}
</script>

<style scoped lang="stylus">
.Layout {
  height: 100%;
  .fixedBar{
    position fixed
    width 100%;
    z-index 20
  }
  .content {
    height: 100%;
    position :relative
    top: 158px
  }
}
</style>
