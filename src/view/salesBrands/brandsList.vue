<template>
<div class="brandsList">
 <ScrollView :listen-scroll="listenScroll" :probe-type="probeType" ref="ScrollView" @scroll="onScroll">
    <ul class="scrollList">
      <li v-for="(item,index) in data" :key="index" class="list-group" ref="listGroup" >
        <p class="title" v-cloak>{{item.title}}</p>
        <ul>
          <li v-for="(value,index) in item.children" :key="index" class="list-group-item">
            <img class="img" :src="value.img"/>
            <span class="name">{{value.name}}</span>
          </li>
        </ul>
      </li>
    </ul>
 </ScrollView>
 <div class="bar" @touchstart.stop="onTouchStart" @touchmove="onTouchMove" v-if="barTitle.length">
    <ul>
      <li v-for="(item, index) in barTitle" :data-index="index" @click.stop="clickScrollSectionTo(index)" class="item" :key="index" :class="{'current':currentIndex===index}">{{item}} </li>
    </ul>
 </div>
 <!-- <div class="fixTitle" v-cloak>
    {{fixTitle}}
 </div> -->
</div>
</template>

<script>
const BAR_LIST_HEIGHT = 20

export default {
  name: 'brandsList',
  props: {
    data: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data () {
    return {
      barTitle: [],
      currentIndex: 0,
      scrollY: -1
    }
  },
  computed: {
    fixTitle () {
      if (Array.isArray(this.data) && this.data.length > 0) {
        if (this.scrollY >= 0) return this.data[0].title
        return this.data[this.currentIndex] ? this.data[this.currentIndex].title : ''
      }
    }
  },
  created () {
    this.probeType = 3
    this.listenScroll = true
    this.touch = {}
    this.listHeight = []
  },
  mounted () {

  },
  methods: {
    onTouchStart (e) {
      let touchFirstIndex = e.target.dataset.index
      this.touch.y1 = e.touches[0].pageY
      this.touch.index = touchFirstIndex
      this.scrollSectionTo(touchFirstIndex)
    },
    onTouchMove (e) {
      this.touch.y2 = e.touches[0].pageY
      let data = (this.touch.y2 - this.touch.y1) / BAR_LIST_HEIGHT | 0
      let dataIndex = parseInt(this.touch.index) + data
      this.scrollSectionTo(dataIndex)
    },
    scrollSectionTo (index) {
      if (!index) return
      this.$refs['ScrollView'].scrollToElement(this.$refs['listGroup'][index], 400)
    },
    clickScrollSectionTo (index) {
      this.scrollSectionTo(index)
      this.currentIndex = index
    },
    onScroll (pos) {
      this.scrollY = pos.y
    },
    calcHeight () {
      // 计算有多少组 每一组高度是多少
      this.listHeight = []
      let height = 0
      const list = this.$refs['listGroup']
      if (!list) return
      this.listHeight.push(height)
      list.forEach((item, index) => {
        height += item.clientHeight
        this.listHeight.push(height)
      })
    }
  },
  watch: {
    scrollY: {
      handler (value) {
        const { listHeight } = this
        // top
        if (value >= 0) {
          this.currentIndex = 0
          return
        }
        // middle
        listHeight.forEach((item, index) => {
          let h1 = listHeight[index]
          let h2 = listHeight[index + 1]
          if (-value >= h1 && -value < h2) {
            this.currentIndex = index
          }
        })
        // bottom
      }
    },
    data: {
      handler (val) {
        if (val) {
          if (Array.isArray(val) && val.length > 0) {
            this.barTitle = val.map(item => {
              return item.title
            })
          }
          setTimeout(() => {
            this.calcHeight()
          }, 20)
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
.brandsList {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  .scrollList {
    // padding-top: 26px;
  }
  .list-group {
    padding-bottom: 20px;
    .title {
      width: 100%;
      height: 30px;
      line-height: 30px;
      padding-left: 20px;
      text-align: left;
      font-size: 16px;
      background: #eee;
    }
    .list-group-item {
      display: flex;
      align-items: center;
      padding: 20px 0 0 30px;
      .img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        box-shadow: 4px 4px 2px #ccc;
      }
      .name {
        margin-left: 20px;
      }
    }
  }
  .bar{
    padding: 4px 0;
    position: fixed;
    background: rgba(0, 0, 0, 0.115);
    z-index: 30;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    border-radius: 10px;
    text-align: center;
    font-family: Helvetica;
    .item {
      cursor: pointer;
      padding: 2px;
      line-height: 1;
      &.current {
        color: #3a96fe;
      }
    }
  }
  .fixTitle{
    position: fixed;
    top: 40px;
    left: 0;
    width: 100%;
    height: 30px;
    line-height: 30px;
    text-align: left;
    font-size: 16px;
    padding-left: 20px;
    background: #eee;
  }
}
</style>
