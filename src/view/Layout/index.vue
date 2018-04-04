<template>
  <div class="Layout">
    <AppHeader></AppHeader>
    <Tab></Tab>
     <keep-alive>
      <router-view :key="$route.fullpath"></router-view>
    </keep-alive>
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

</style>
