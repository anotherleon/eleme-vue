<template>
  <div class="goods" @click="increase">
    我是商品 {{count}}
  </div>
</template>
<script type="text/javascript">
  export default {
    name: 'Goods',
    data() {
      return {
        count: 0,
      }
    },
    methods:{
      increase() {
        this.count ++
      },
    },
  }
</script>
<style type="text/css" lang="stylus" scoped>
  
</style>