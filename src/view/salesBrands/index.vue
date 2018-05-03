<template>
 <transition name="slide">
    <div class="page">
        品牌
    </div>
 </transition>
</template>

<script>
import { fetchSalesBrands } from '@/api/salesBrands'
export default {
  name: 'salesBrands',
  mounted () {
    this.fetchData()
  },
  methods: {
    fetchData (params = {}) {
      params.page = 0
      params.size = 10
      fetchSalesBrands(params)
        .then(({ data }) => {
          console.log(data)
        }).catch(error => {
          console.log(error)
        })
    }
  }
}
</script>

<style scoped>

</style>
