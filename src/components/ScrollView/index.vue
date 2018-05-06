<template>
    <div class="ScrollView" ref="ScrollView">
      <div class="conten">
        <slot></slot>
      </div>
    </div>
</template>

<script>
import Bscorll from 'better-scroll'
export default {
  name: 'ScrollView',
  props: {
    probeType: {
      type: Number,
      default: 1
    },
    listenScroll: {
      type: Boolean,
      default: false
    },
    click: {
      type: Boolean,
      default: true
    }
  },
  mounted () {
    setTimeout(() => {
      this.initScroll()
    }, 200)
    window.addEventListener('resize', () => {
      this.refresh()
    })
  },
  methods: {
    initScroll () {
      if (!this.$refs['ScrollView']) return
      this.scroll = new Bscorll(this.$refs['ScrollView'], {
        probeType: this.probeType,
        click: this.click
      })

      if (this.listenScroll) {
        let _vue = this
        this.scroll.on('scroll', (pos) => {
          _vue.$emit('scroll', pos)
        })
      }
    },
    disable () {
      this.scroll && this.scroll.disable()
    },
    enable () {
      this.scroll && this.scroll.enable()
    },
    refresh () {
      this.scroll && this.scroll.refresh()
    },
    scrollTo () {
      // apply 让 this 指向better-scroll 实例 方便参数传递
      this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments)
    },
    scrollToElement () {
      this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments)
    }
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.refresh)
  }

}
</script>

<style lang="scss">
.ScrollView{
  height: 100%;
  overflow: hidden;
  .conten{
    padding: 0;
    margin: 0;
  }
}
</style>
