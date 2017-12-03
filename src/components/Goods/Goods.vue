<template>
  <div class="goods">
    <div class="menu-wrapper" ref="menu">
      <ul>
        <li class="menu-item" :class="{current: currentIndex === index}" v-for="(item,index) in goods" @click="chooseMenu(index,$event)">
          <span class="text border-1px">{{item.name}}</span>
        </li>
      </ul>
    </div>
    <div class="foods-wrapper" ref="foods">
      <ul>
        <li class="foods-list" v-for="(item,index) in goods" :key="index">
          <h2 class="title">{{item.name}}</h2>
          <ul>
            <li class="foods-item border-1px" v-for="(food,index) in item.foods" :key="index">
              <img :src="food.icon" class="photo">
              <div class="content">
                <div class="name">{{food.name}}</div>
                <div class="desc">{{food.description}}</div>
                <div><span class="sell-count">月售{{food.sellCount}}份</span><span class="rating">好评率{{food.rating}}%</span></div>
                <div><span class="price">￥{{food.price}}</span><span class="old-price" v-if="!!food.oldPrice">￥{{food.oldPrice}}</span></div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>
<script type="text/javascript">
  import BetterScroll from 'better-scroll'
  import response from 'assets/data.json'
  
  export default {
    name: 'Goods',
    data() {
      return {
        goods: [],
        currentIndex: 1,
      }
    },
    created() {
      this.goods = response.goods
      this.$nextTick(() => {
        this.init()
      })
    },
    // mounted() {
    //   this.$nextTick(() => {
    //     console.log('================')
    //     // this.scroll = new BetterScroll(this.$refs.foods, {})
    //   })
    // },
    methods: {
      init() {
        console.log('================')
        this.scrollFoods = new BetterScroll(this.$refs.foods, {})
        // this.scrollMenu = new BetterScroll(this.$refs.menu, {})
      },
      chooseMenu(index, event) {
        this.currentIndex = index
        console.log(event.target.name)
        // event.target.previousSibling.style.backgroundColor = '#cc0'
      },
    },
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
    z-index: 10
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
        .text
          display: table-cell
          line-height: 14px
          vertical-align: middle
          border-1px(rgba(7, 17, 27, 0.1))
          font-size: 12px
          color: rgb(147,153,159)
        &.current
          position: relative
          margin-top: -1px
          background-color: #fff
          .text
            border-none()
            font-weight: 700
            color: rgb(0,0,0)
    .foods-wrapper
      flex: 1
      overflow: hidden
      .foods-list
        .title
          height: 26px
          line-height: 26px
          padding-left: 14px
          border-left: 4px solid #d9dde1
          font-size: 12px
          color: rgb(147,153,159)
          background-color: #f3f5f7
        .foods-item
          margin: 0 18px
          padding: 18px 0
          border-1px(rgba(7,17,27,0.1))
          font-size: 0
          .photo
            display:inline-block
            width: 57px
            height: 57px
            vertical-align: top
          .content
            display:inline-block
            font-size: 12px
            margin-left: 10px
            .name
              margin-top: 2px
              line-height: 14px
              font-size: 14px
              color: rgb(7,17,27)
            .desc
              margin: 8px auto
              font-size: 10px
              line-height: 10px
              color: rgb(147,153,159)
            .sell-count
              color: rgb(147,153,159)
              margin-right: 12px
            .rating
              color: rgb(147,153,159)
            .price
              margin-right: 8px
              line-height: 24px
              font-size: 14px
              font-weight: 700
              color: red
            .old-price
              line-height: 24px
              font-size: 10px
              font-weight: 700
              color: rgb(147,153,159)
</style>