<template>
  <div class="goods">
    <div class="menu-wrapper">
      <ul>
        <li v-for="item in goods">
          <span>{{item.name}}</span>
        </li>
      </ul>
    </div>
    <div class="foods-wrapper"></div>
  </div>
</template>
<script type="text/javascript">
  import response from 'assets/data.json'
  
  export default {
    name: 'Goods',
    data() {
      return {
        goods: [],
      }
    },
    created() {
      this.goods = response.goods
      this.test()
    },
    // methods: {

    // },
  }
</script>
<style type="text/css" lang="stylus" scoped>
  .goods
    display: flex
    position: absolute
    top: 174px
    bottom: 46px
    width: 100%
    background-color: #cc0
    .menu-wrapper
      flex: 0 0 80px
      width: 80px
      background-color: #f3f5f7
    .goods-wrapper
      flex: 1
</style>