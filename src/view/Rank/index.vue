<template>
  <div class="Rank">
      排行
    <v-touch v-on:swipeleft="onSwipeLeft" v-on:pressup="callback">
      <div class="box">左滑触发</div>
    </v-touch>
  </div>
</template>

<script>
export default {
  name: 'Rank',
  methods: {
    onSwipeLeft (e) {
      console.log(e)
    },
    callback (e) {
      console.log(e)
    }
  }
}
</script>

<style scoped lang="stylus">
.box
  height 60px
  line-height 60px
  background #ccc
</style>
