<template>
  <div class="Tab">
     <router-link tag="div" class="tab-item" to="/Find">
      <span class="tab-link">发现</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/Singer">
      <span class="tab-link">歌手</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/Recommend">
      <span class="tab-link">推荐</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/Rank">
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
  width :100%
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
