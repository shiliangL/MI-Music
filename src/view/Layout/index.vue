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
    <AppPlayer></AppPlayer>
  </div>
</template>

<script>
import { AppHeader, Tab, ViewScroll, AppPlayer } from '@/components/common.js'

export default {
  components: {
    AppHeader,
    AppPlayer,
    ViewScroll,
    Tab
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
    padding-top: 158px
  }
}
</style>
