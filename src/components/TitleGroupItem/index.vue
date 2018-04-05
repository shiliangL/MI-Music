<template>
  <div class="TitleGroupItem">
      <div class="title">{{title}}</div>
      <div class="row cf">
        <div v-for="(item,index) in options" :key="index" class="row-item cf">
            <div class="img">
              <img :src="item.picUrl" alt="">
            </div>
            <p class="desc" v-text="item.songListDesc"></p>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'TitleGroupItem',
  props: {
    options: {
      type: Array
    },
    title: {
      type: String,
      default: '标题'
    }
  },
  mounted () {
    this.$nextTick().then(() => {
      setTimeout(() => {}, 20)
    })
  },
  created () {
    console.log(this.options)
  },
  methods: {}
}
</script>

<style scoped lang="stylus">
.TitleGroupItem {
  .title {
    border-left: 2px solid #d43b33;
    position: relative;
    margin-bottom: 8px;
    margin-top: 10px;
    padding-left: 9px;
    font-size: 16px;
    height: 20px;
    line-height: 20px;
  }

  .row {
    .row-item {
      display: inline-block;
      padding-bottom: 14px;
      width: 33.3%;
      padding-left: 1px;
      padding-right: 1px;
      box-sizing: border-box;

      .img {
        width: 100%;

        img {
          width: 100%;
        }
      }

      .desc {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        padding: 6px 2px 0 6px;
        line-height: 1.2;
        font-size: 13px;
        color: #333;
      }
    }
  }
}
</style>
