<template>
    <div class="AppHeader">
        <div class="icon"> <slot name="left"> <div v-show="visible" @click="goback">返回</div></slot> </div>
        <div><slot>顶部</slot></div>
        <div class="icon"><slot name="right"></slot></div>
    </div>
</template>

<script>
export default {
  name: 'AppHeader',
  methods: {
    goback () {
      if (this.$router.history.current.name !== 'Layout') {
        this.$router.go(-1)
      }
    }
  },
  computed: {
    visible () {
      if (this.$router.history.current.name === 'Layout') {
        return false
      } else {
        return true
      }
    }
  }
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
