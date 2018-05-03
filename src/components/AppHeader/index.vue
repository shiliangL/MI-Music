<template>
    <div class="AppHeader">
        <div class="icon">
          <div v-if="isGoback" @click="goback">
            <!-- 返回 -->
            <i class="icon iconfont icon-fanhui"></i>
          </div>
        </div>
        <div><slot>顶部</slot></div>
        <div class="icon"><slot name="right"></slot></div>
    </div>
</template>

<script>
export default {
  name: 'AppHeader',
  props: {
    isGoback: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    goback () {
      this.$router.go(-1)
    }
  },
  computed: {}
}
</script>

<style scoped lang="scss">
.AppHeader {
  font-size: 14px;
  color: #fff;
  width: 100%;
  height: 2.5rem;
  background: #007fff;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .icon {
    width: 40px;
    text-align: center;
  }
}
</style>
