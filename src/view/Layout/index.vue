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
import { AppHeader, Tab } from '@/components/common.js'
export default {
  components: {
    AppHeader,
    Tab
  },
  name: 'Layout'
}
</script>

<style scoped lang="stylus">
.Layout
  .fixedBar
    position fixed
    width :100%
  .content
    padding-top: 82px
</style>
