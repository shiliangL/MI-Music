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
  height: 72px;
  align-items center;
  background :#fff;
  font-size: $font-size-tabs;
  .tab-item {
    flex: 1;
    text-align: center;
    .tab-link {
      padding-bottom: 10px;
    }
    &.router-link-active {
      .tab-link {
        color: #d43b33
        border-bottom: 4px solid  #d43b33
      }
    }
  }
}
</style>
