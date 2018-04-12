<template>
  <div class="wrapper" ref="wrapper">
      <div class="content">
        <div class="list-wrapper">
          <slot>
            <ul class="list-content">
              <li v-for="item in 100" :key="item">
                {{item}}
              </li>
            </ul>
          </slot>
        </div>
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
      this.Scroll = new BScroll(this.$refs['wrapper'], {

      })
      console.log(this.Scroll)
    },
    refresh () {
      this.scroll && this.scroll.refresh()
    }
  },
  watch: {
    data () {
      if (this.Scroll) {
        this.refresh()
      }
    }
  }
}
</script>

<style  scoped lang="stylus">
.wrapper {
  position: relative;
  height: 100%;
  overflow: hidden;
  background: #ccc;
}
</style>
