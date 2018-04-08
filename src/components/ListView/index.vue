
<!-- ListView 滚动组件应该具备比较完善功能的基础组件
所以一些相关的都应该配置在改组件中
 -->
<template>
    <div class="ListView">
      <ViewScroll :data="data" ref="ViewScroll" :probeType="3">
        <ul>
            <li v-for="(group,index) in data" class="list-group" ref="listGroup" :key="index">
                <h2 class="list-group-title">{{group.title}}</h2>
                <uL>
                  <li @click="selectItem(item)" v-for="item in group.data" class="list-group-item" :key="item.id">
                      <img class="avatar" :src="item.avatar"/>
                      <span class="name">{{item.name}}</span>
                  </li>
                </uL>
            </li>
        </ul>
      </ViewScroll>
      <div class="letter-bar"
        @touchstart.stop.prevent="touchToStart"
        @touchmove.stop.prevent="touchToMove">
        <ul>
          <li v-for="(item, index) in letterTitle" :data-index="index" class="item" :key="index"
              :class="{'current':currentIndex===index}">{{item}}
          </li>
        </ul>
      </div>
      <div class="letter-fixed" ref="letter-fixed">
        <div>{{NavTitle}}</div>
      </div>
  </div>
</template>

<script>
import { ViewScroll } from '@/components/common.js'

const TITLE_HEIGHT = 30
const ANCHOR_HEIGHT = 18
export default {
  name: 'ListView',
  components: {
    ViewScroll
  },
  props: {
    data: {
      type: Array
    }
  },
  computed: {
    letterTitle () {
      return this.data.map(item => {
        return item.title.substr(0, 1)
      })
    },
    NavTitle () {
      if (this.scrollY > 0) {
        return ''
      }
      return this.data[this.currentIndex]
        ? this.data[this.currentIndex].title
        : ''
    }
  },
  data () {
    return {
      scrollY: -1,
      currentIndex: 0,
      diff: -1
    }
  },
  created () {
    // 新技能get 并不是所有的东西都要在 data里面声明 只是为了方法之间可共享变量 并不需要 vue 的监测
    this.probeType = 3
    this.listenScroll = true
    this.touch = {}
    this.listHeight = []
  },
  methods: {
    touchToStart (e) {
      let clickIndex = e.target.dataset.index
      this.currentIndex = clickIndex
      let ele = this.$refs['listGroup']
      this.$refs['ViewScroll'].scrollToElement(ele[clickIndex], 250)
      this.touch.y1 = e.targetTouches[0].clientY
      this.touch.firstIndex = clickIndex
    },
    touchToMove (e) {
      this.touch.y2 = e.targetTouches[0].clientY
      // 中间滑动了几个元素
      let height = (this.touch.y2 - this.touch.y1) / ANCHOR_HEIGHT | 0
      let moveIndex = parseInt(this.touch.firstIndex) + height
      this.touchToMoveToScroll(moveIndex)
    },
    touchToMoveToScroll (index) {
      if (!index && index !== 0) return
      if (index < 0) {
        index = 0
      } else if (index > this.listHeight.length - 2) {
        index = this.listHeight.length - 2
      }
      this.scrollY = -this.listHeight[index]
      this.$refs.ViewScroll.scrollToElement(this.$refs.listGroup[index], 200)
    },
    selectItem (item) {
      this.$emit('selectRow', item)
    },
    refresh () {
      this.$refs.listview.refresh()
    },
    scroll (pos) {
      this.scrollY = pos.y
    },
    createdHeight () {
      // 计算区间高度
      this.listHeight = []
      const list = this.$refs.listGroup
      let height = 0
      this.listHeight.push(height)
      for (let i = 0; i < list.length; i++) {
        let item = list[i]
        height += item.clientHeight
        this.listHeight.push(height)
      }
    }
  },
  watch: {
    data () {
      setTimeout(() => {
        this.createdHeight()
      }, 20)
    },
    scrollY (newY) {
      const listHeight = this.listHeight
      // 当滚动到顶部，newY>0
      if (newY > 0) {
        this.currentIndex = 0
        return
      }
      // 在中间部分滚动
      for (let i = 0; i < listHeight.length - 1; i++) {
        let height1 = listHeight[i]
        let height2 = listHeight[i + 1]
        if (-newY >= height1 && -newY < height2) {
          this.currentIndex = i
          this.diff = height2 + newY
          return
        }
      }
      // 当滚动到底部，且-newY大于最后一个元素的上限
      this.currentIndex = listHeight.length - 2
    },
    diff (newVal) {
      let fixedTop =
        newVal > 0 && newVal < TITLE_HEIGHT ? newVal - TITLE_HEIGHT : 0
      if (this.fixedTop === fixedTop) {
        return
      }
      this.fixedTop = fixedTop
      this.$refs['letter-fixed'].style.transform = `translate3d(0,${fixedTop}px,0)`
    }
  }
}
</script>

<style scoped lang="stylus">
@import '../../styles/variable';
.ListView {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  color #333333
  background: $color-background;
  .list-group {
    padding-bottom: 20px;
    .list-group-title {
      height: 30px;
      line-height: 30px;
      padding-left: 20px;
      font-size: $font-size-small;
      background:#eee
    }
    .list-group-item {
      display: flex;
      align-items: center;
      padding: 20px 0 0 30px;
      .avatar {
        width: 50px;
        height: 50px;
        border-radius: 50%;
      }
      .name {
        margin-left: 20px;
        font-size: $font-size-medium;
      }
    }
  }
  .letter-bar {
    position: fixed;
    z-index: 30;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    padding: 20px 0;
    border-radius: 10px;
    text-align: center;
    background: $color-background-d;
    font-family: Helvetica;
    .item {
      padding: 3px;
      line-height: 1;
      color: $color-text-l;
      font-size: $font-size-small;
      &.current {
        color: $red-text-color;
      }
    }
  }
  .letter-fixed {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    div {
      height: 30px;
      line-height: 30px;
      padding-left: 20px;
      font-size: $font-size-small;
      background #eee
    }
  }
  .loading-container {
    position: absolute;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>
