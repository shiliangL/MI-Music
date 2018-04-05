<template>
  <div class="AppHeader">
    <div class="Header-icon">
      <slot><i class="icon iconfont icon-iconquanzinor"></i></slot>
    </div>
    <div class="searchBox">
      <input class="input" placeholder="搜索音乐"/>
    </div>
    <div class="Header-icon">
      <slot><i class="icon iconfont icon-22musicplaylist"></i></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>

<style scoped lang="stylus">
.AppHeader
  background: #d43b33;
  height: 40px;
  width: 100%;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: space-between;
  .searchBox
    .input
      border-radius: 12px 12px;
      padding-left: 8px;
      height: 26px;
      width: 100%;
      color: rgba(0, 0, 0, 0.3);
      border: none;
      -webkit-appearance: none;
      font-size: 14px;
      outline: none;
      border: 0px;
  .Header-icon
    width: 40px;
    font-weight 400
    text-align center
    font-size 14
    color #fff
</style>
