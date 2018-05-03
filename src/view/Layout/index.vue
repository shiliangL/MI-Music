<template>
    <!-- layout页面 -->
    <div class="layout">
      <AppHeader> </AppHeader>
      <div class="flexBox" v-for="(item,index) in page.data" :key="index">
          <div class="item">
              <a :href="item.path">
                  <div>
                      <!-- <img src="../../assets/icons/data.png" alt=""> -->
                  </div>
                  <div v-cloak> {{item.name}} </div>
              </a>
          </div>
      </div>
      <router-view/>
    </div>
</template>

<script>
export default {
  name: 'layout',
  data () {
    return {
      page: {
        data: [{ name: '项目', path: '#/progressForm', icon: '' }]
      }
    }
  }
}
</script>

<style scoped lang="scss">
.layout {
  width: 100%;
  height: 100%;
  padding-top: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-content: center;
  .flexBox {
    width: 30%;
    height: 30%;
    display: 1;
    align-items: center;
    justify-content: space-around;
    .item {
      padding: 10px;
    }
  }
}
</style>
