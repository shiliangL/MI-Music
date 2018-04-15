<template>
  <div class="AppHeader">
    <div class="Header-icon">
      <slot name="left"><i class="icon iconfont icon-iconquanzinor"></i></slot>
    </div>
    <div class="searchBox">
     <slot name="content"> <input class="input" placeholder="搜索音乐"/> </slot>
    </div>
    <div class="Header-icon">
      <slot name="right"><i class="icon iconfont icon-22musicplaylist"></i></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppHeader',
  props: {
    type: {
      type: String,
      default: 'index'
    }
  }
}
</script>

<style scoped lang="stylus">
.AppHeader
  background: #d43b33;
  height: 84px;
  width: 100%;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: space-between;
  color #fff
  .searchBox
    width 70%
    text-align: center;
    .input
      border-radius: 60px 60px;
      padding-left: 20px;
      height: 52px;
      width: 100%;
      color: rgba(0, 0, 0, 0.3);
      border: none;
      -webkit-appearance: none;
      font-size: 14px;
      outline: none;
      border: 0px;
  .Header-icon
    width: 92px;
    font-weight 400
    text-align center
    color #fff
    i
     font-size 52px
</style>
