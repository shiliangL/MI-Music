<template>
 <transition name="slide">
  <div class="DetailsPage">
    <div class="topBar">
      <div @click="goback"> 返回 </div>
    </div>
      详情页面
  </div>
  </transition>
</template>

<script>
export default {
  name: 'DetailsPage',
  methods: {
    goback () {
      this.$router.back()
    }
  }
}
</script>

<style scoped lang="stylus">
.slide-enter-active, .slide-leave-active {
  transition: all 0.3s;
}

.slide-enter, .slide-leave-to {
  transform: translate3d(100%, 0, 0);
}
.DetailsPage
  background #fff
  position: fixed
  z-index: 100
  top: 0
  left: 0
  bottom: 0
  right: 0
</style>
