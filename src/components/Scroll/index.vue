<template>
  <div class="wrapper" ref="wrapper">
      <div class="content">
        <slot></slot>
      </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'Scroll',
  props: {
    data: {
      type: Array
    }
  },
  data () {
    return {}
  },
  created () {},
  mounted () {
    this.$nextTick().then(() => {
      this.initScroll()
    })
    window.addEventListener('resize', this.refresh)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.refresh)
  },
  methods: {
    initScroll () {
      this.scroll = new BScroll(this.$refs['wrapper'], {

      })
    },
    refresh () {
      this.scroll && this.scroll.refresh()
    }
  },
  watch: {
    data () {
      if (this.scroll) {
        setTimeout(() => {
          this.refresh()
        }, 20)
      }
    }
  }
}
</script>

<style  scoped lang="stylus">
.wrapper
  height: 100%;
  overflow: hidden;
</style>
