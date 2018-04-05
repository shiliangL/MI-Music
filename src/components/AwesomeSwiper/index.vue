
<template>
    <div class="AwesomeSwiper">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(item,index) in siderList" :key="index">
          <a :href="item.linkUrl" v-if="item.picUrl">
            <img v-if="item.picUrl" :src="item.picUrl" alt="" style="width: 375px;">
          </a>
          <div v-else class="swiper-lazy-preloader"></div>
        </swiper-slide>
        <div  class="swiper-pagination" slot="pagination"></div>
      </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'AwesomeSwiper',
  props: {
    siderList: {
      type: Array
    },
    loop: {
      type: Boolean,
      default: true
    },
    autoPlay: {
      type: Boolean,
      default: true
    },
    interval: {
      type: Number,
      default: 4000
    }
  },
  components: {
    swiper, swiperSlide
  },
  mounted () {
    this.$nextTick().then(() => {
      setTimeout(() => {
        // this.setSliderWidth()
        // this.initSider()
      }, 20)
    })
  },
  created () {

  },
  data () {
    return {
      swiperOption: {
        autoplay: {
          // fix 触摸后，自动播放停止无效
          disableOnInteraction: false
        },
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          dynamicBullets: true
        }
      }
    }
  },
  beforeDestroy () {

  },
  methods: {

  }
}
</script>

<style scoped lang="stylus">
.AwesomeSwiper
  .swiper-container
    .picHolder
      font-size 14px
      text-align center
      line-height 150px
      height 150px
      background #e8e8e8
</style>
