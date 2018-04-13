<template>
  <div class="TitleGroupItem">
      <div class="title">
        <span>{{title}}</span>
      </div>
      <div class="row">
        <div v-for="(item,index) in options" :key="index" class="row-item" @click="onClick(item)">
            <div class="img">
              <img v-lazy="item.picUrl" alt="">
            </div>
            <p class="desc" v-text="item.name"></p>
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
  created () {},
  methods: {
    onClick (item) {
      console.log(item)
      this.$emit('onClick', item)
    }
  }
}
</script>

<style scoped lang="stylus">
@import '../../styles/variable.styl';

.TitleGroupItem {
  .title {
    position: relative;
    margin-top: 10px;
    font-size: $font-size-title;
    height: 70px;
    line-height: 80px;

    span {
      padding-left: 20px;
      border-left: 2px solid #d43b33;
    }
  }

  .row {
    display: flex;
    flex-wrap: wrap;

    .row-item {
      padding-bottom: 14px;
      width: 33.3%;
      padding-left: 1px;
      padding-right: 1px;
      box-sizing: border-box;

      .img {
        width: 100%;
        overflow: hidden;

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
      }
    }
  }
}
</style>
