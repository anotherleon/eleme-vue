<template>
  <div class="goods">
    <div class="menu-wrapper" ref="menu">
      <ul>
        <li class="menu-item" :class="{current: currentIndex === index}" v-for="(item,index) in goods" 
        @click="chooseMenu(index)" ref="menuList">
          <span class="text border-1px">{{item.name}}</span>
        </li>
      </ul>
    </div>
    <div class="foods-wrapper" ref="foods">
      <ul>
        <li class="foods-list" v-for="(item,index) in goods" :key="index" ref="foodsList">
          <h2 class="title">{{item.name}}</h2>
          <ul>
            <li class="foods-item border-1px" v-for="(food,index) in item.foods" :key="index">
              <img :src="food.icon" class="photo">
              <div class="content">
                <div class="name">{{food.name}}</div>
                <p class="desc">{{food.description}}</p>
                <div><span class="sell-count">月售{{food.sellCount}}份</span><span class="rating">好评率{{food.rating}}%</span></div>
                <div><span class="price">￥{{food.price}}</span><span class="old-price" v-if="!!food.oldPrice">￥{{food.oldPrice}}</span></div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <shopcart :deliveryPrice="seller.deliveryPrice" :minPrice="seller.minPrice"></shopcart>
  </div>
</template>
<script type="text/javascript">
  import BetterScroll from 'better-scroll'
  import response from 'assets/data.json'
  import Shopcart from 'components/Shopcart/Shopcart'
  
  export default {
    name: 'Goods',
    components: {
      Shopcart,
    },
    props: {
      seller: {
        type: Object,
      },
    },
    data() {
      return {
        goods: [],
        // currentIndex: 1,
        foodsListHeight: [],
        scrollY: 0,
        chosenFoods: [],
      }
    },
    computed: {
      currentIndex() {
        for (let i = 0; i < this.foodsListHeight.length; i += 1) {
          const h1 = this.foodsListHeight[i]
          const h2 = this.foodsListHeight[i + 1]
          // console.log(this.scrollY + '=====' + h1, h2)
          if (this.scrollY >= h1 && this.scrollY < h2) {
            this.syncScroll(i)
            // console.log('===:' + i)
            return i
          }
        }
        return 0
      },
    },
    created() {
      this.goods = response.goods
      this.$nextTick(() => {
        this.init()
        this.getFoodsListHeight()
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
        this.foodsScroll = new BetterScroll(this.$refs.foods, { click: true, probeType: 3 })
        this.menuScroll = new BetterScroll(this.$refs.menu, { click: true })
        this.foodsScroll.on('scroll', (pos) => {
          this.scrollY = Math.ceil(Math.abs(pos.y))
          // console.log(pos.y, this.scrollY)
        })
      },
      chooseMenu(index) {
        // this.currentIndex = index
        // console.log(event.target.name)
        /* eslint no-underscore-dangle:0 */
        // if (!event._constructed) {
        //   return
        // }
        console.log(index)
        const { foodsList } = this.$refs
        const el = foodsList[index]
        this.foodsScroll.scrollToElement(el, 300)
      },
      getFoodsListHeight() {
        const { foodsList } = this.$refs
        let height = 0
        this.foodsListHeight.push(height)

        for (let i = 0; i < foodsList.length; i += 1) {
          const item = foodsList[i]
          height += item.clientHeight
          this.foodsListHeight.push(height)
        }
      },
      syncScroll(index) {
        const { menuList } = this.$refs
        const el = menuList[index]
        this.menuScroll.scrollToElement(el, 300, 0, -200)
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
    overflow: hidden
    z-index: 10
    .menu-wrapper
      flex: 0 0 80px
      width: 80px
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
          display: flex
          margin: 0 18px
          padding: 18px 0
          border-1px(rgba(7,17,27,0.1))
          font-size: 0
          &:last-child
            border-none()
          .photo
            // display:inline-block
            flex: 0 0 57px
            width: 57px
            height: 57px
            vertical-align: top
          .content
            // display: inline-block
            flex: 1
            font-size: 12px
            margin-left: 10px
            .name
              margin-top: 2px
              line-height: 14px
              font-size: 14px
              color: rgb(7,17,27)
            .desc
              margin: 8px 0
              font-size: 10px
              line-height: 16px
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
              text-decoration: line-through
              font-size: 10px
              font-weight: 700
              color: rgb(147,153,159)
</style>