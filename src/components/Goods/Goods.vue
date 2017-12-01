<template>
  <div class="goods">
    <div class="menu-wrapper">
      <ul>
        <li class="menu-item select" v-for="item in goods">
          <span class="text border-1px">{{item.name}}</span>
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
    },
    // methods: {

    // },
  }
</script>
<style type="text/css" lang="stylus" scoped>
  @import "../../assets/stylus/mixin.styl"
  
  .goods
    display: flex
    position: absolute
    top: 174px
    bottom: 46px
    width: 100%
    z-index: -1
    background-color: #ddd
    .menu-wrapper
      flex: 0 0 80px
      width: 80px
      overflow: hidden
      background: #f3f5f7
      .menu-item
        display: table
        height: 54px
        width: 56px
        padding: 0 12px
        line-height: 54px
        font-size: 12px
        font-weight: 200
        .text
          display: table-cell
          line-height: 14px
          vertical-align: middle
          border-1px(rgba(7, 17, 27, 0.1))
          font-size: 12px
        &.current
          background-color: #fff
    .goods-wrapper
      flex: 1
</style>