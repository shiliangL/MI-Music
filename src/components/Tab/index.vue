<template>
  <div class="Tab">
     <router-link tag="div" class="tab-item" to="/find">
      <span class="tab-link">发现</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/recommend">
      <span class="tab-link">推荐</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/singer">
      <span class="tab-link">歌手</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/rank">
      <span class="tab-link">排行
      </span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Tab'
}
</script>

<style scoped lang="stylus">
@import '../../styles/variable.styl';
.Tab {
  display: flex;
  height: 44px;
  line-height: 44px;
  font-size: $font-size-medium;
  .tab-item {
    flex: 1;
    text-align: center;
    .tab-link {
      padding-bottom: 5px;
    }
    &.router-link-active {
      .tab-link {
        color: #d43b33
        border-bottom: 2px solid  #d43b33
      }
    }
  }
}
</style>
