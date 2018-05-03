<template>
    <!-- layout页面 -->
    <div class="layout">
      <AppHeader :isGoback="false" title="首页"> </AppHeader>

      <van-row>
        <van-col span="12" v-for="(item,index) in page.data" :key="index">
          <div class="item">
              <a :href="item.path">
                  <div>
                      <!-- <img src="../../assets/icons/data.png" alt=""> -->
                  </div>
                  <div v-cloak> {{item.name}}{{item.index}}</div>
              </a>
          </div>
        </van-col>
      </van-row>

      <router-view/>
    </div>
</template>

<script>
export default {
  name: 'layout',
  data () {
    return {
      page: {
        data: [
          { name: '品牌', path: '#/salesBrands', img: 'data' },
          { name: '项目', path: '#/progressForm', img: 'data' },
          { name: '项目', path: '#/progressForm', img: 'data' },
          { name: '项目', path: '#/progressForm', img: 'data' },
          { name: '项目', path: '#/progressForm', img: 'data' },
          { name: '项目', path: '#/progressForm', img: 'data' }
        ]
      }
    }
  }
}
</script>

<style scoped lang="scss">
.layout {
  width: 100%;
  height: 100%;
  padding-top: 50px;
  .item {
    padding: 20px;
  }
}
</style>
