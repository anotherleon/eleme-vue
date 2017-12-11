<template>
  <div class="shopcart">
    <div class="content">
      <div class="left">
        <div class="icon-wrapper" @click="toggleList">
          <span class="icon" :class="{'hightlight': totalCount>0}">
            <i class="icon-shopping_cart"></i>
          </span>
          <span class="num" v-if="totalCount>0">{{totalCount}}</span>
        </div>
        <!-- <span class="icon"><i class="icon-shopping_cart"></i> </span> -->
        <span class="total" :class="{'hightlight': totalPrice>0}">￥{{totalPrice}}</span>
        <span class="delivery">另需配送费{{deliveryPrice}}元</span> 
      </div>
      <div class="right">
        <div class="pay" :class="[minPrice>totalPrice?'not-meet':'meet']">{{payDesc}}</div>
      </div>
    </div>
    <div class="ball-container">
      <template v-for="(ball,index) in balls">
        <transition name="drop">
          <div class="ball" ref="ball" v-if="ball.show" :key="index">
            <span class="inner"></span>
          </div>  
        </transition>
      </template>
    </div>
    <transition name="fold">
      <div class="shopcart-list" v-show="listShow">
        <div class="list-header">
          <h1 class="title">购物车</h1>
          <span class="empty">清空</span>
        </div>
        <div class="list-content">
          <ul>
            <li v-for="food in chosenFoods">
              <span class="name">food.name</span>
              <div class="price">
                <span>￥{{}}</span>
              </div>
              <div class="cartcontrol-wrapper">
                
              </div>
            </li>
          </ul>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
  import CartControl from 'components/CartControl/CartControl'

  export default {
    name: 'Shopcart',
    props: {
      chosenFoods: {
        type: Array,
        default() {
          return [
            {
              price: 10,
              count: 2,
            },
          ]
        },
      },
      ballTarget: {
        type: Object,
      },
      deliveryPrice: {
        type: Number,
        default: 0,
      },
      minPrice: {
        type: Number,
        default: 0,
      },
    },
    components: {
      CartControl,
    },
    data() {
      return {
        balls: [{
          show: false,
        }, {
          show: false,
        }, {
          show: false,
        }, {
          show: false,
        }, {
          show: false,
        }],
        fold: true,
      }
    },
    computed: {
      totalPrice() {
        let total = 0
        this.chosenFoods.forEach((item) => {
          total += item.price * item.count
        })
        return total
      },
      totalCount() {
        let count = 0
        this.chosenFoods.forEach((item) => {
          count += item.count
        })
        return count
      },
      payDesc() {
        if (this.totalPrice === 0) {
          return `￥${this.minPrice}元起送`
        }
        const d = this.totalPrice - this.minPrice
        return (d >= 0 ? '去结算' : `还差￥${Math.abs(d)}元起送`)
      },
      listShow() {
        if (this.totalCount > 0 && !this.fold) {
          return true
        }
        return false
      },
    },
    watch: {
      chosenFoods: {
        handler() {
          // console.log('5555555555555555')
          this.dropBall(this.ballTarget)
        },
        deep: true,
      },
    },
    methods: {
      dropBall(el) {
        console.log(el)
      },
      toggleList() {
        if (!this.totalCount) {
          return
        }
        this.fold = !this.fold
      },
    },
  }
</script>
<style type="text/css" lang="stylus" scoped>
  .shopcart
   position: fixed
   bottom: 0
   width: 100%
   height: 48px
   .content
     display: flex
     height: 100%
     color: rgba(255,255,255,0.4)
     background-color: #141d17
     .left
       flex: 1
       height: 100%
       font-size: 0
       .icon-wrapper
         display: inline-block
         position: relative
         top: -10px
         margin: 0 12px
         padding: 6px
         width: 56px
         height: 56px
         box-sizing: border-box
         border-radius: 50%
         text-align: center
         background-color: #141d17
         // background-color: yellow
         .icon
           display: inline-block
           width: 100%
           height: 100%
           border-radius: 50%
           line-height: 44px
           font-size: 24px
           color: #80858a
           background-color: #2b343c
           &.hightlight
             color: #fff
             background-color: rgb(0, 160, 220)
         .num
           position: absolute
           top: 0
           right: 0
           width: 24px
           height: 16px
           border-radius: 12px
           line-height: 16px
           text-align: center
           font-size: 10px
           font-weight: 700
           color: #fff
           background-color:  rgb(240, 20, 20)
           box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.4)
       .total
         display: inline-block
         vertical-align: top
         margin-top: 12px
         padding-right: 12px
         line-height: 24px
         box-sizing: border-box
         border-right: 1px solid rgba(255,255,255,0.1)
         font-size: 16px
         font-weight: 700
         &.hightlight
           color: #fff
       .delivery
         display: inline-block  
         vertical-align: top
         margin-top: 12px
         margin-left: 12px
         line-height: 24px
         font-size: 10px  
     .right
       flex: 0 0 105px
       width: 105px
       line-height: 48px
       .pay
         text-align: center
         font-size: 12px
         font-weight: 700
         &.meet
           background: #00b43c
           color: #fff
         &.not-meet
           background-color: #2b333b
   .ball-container
     .ball
       position: fixed
       bottom: 22px
       left: 32px
       z-index: 20
       .inner
         display: inline-block
         width: 16px
         height: 16px
         border-radius: 50%
         background-color: rgb(0, 160, 220)
   .shopcart-list
     position: absolute
     left: 0
     top: 0
     z-index: -1
     width: 100%
     transform:translate3d(0,-100%,0)
     &.fold-enter, &fold-leave-to
       transform: translate3d(0, 0, 0)
     &.fold-enter-active, &.fold-enter-leave
       transition: all 1.4s ease
       transform: translate3d(0, -100%, 0)
     .list-header
       height: 40px
       line-height: 40px
       padding: 0 18px
       background-color: #f3f5f7
       border-bottom: 1px solid rgba(7, 17, 27, 0.1)
       .title
         float: left
         font-size: 14px
       .empty
         float: right
         font-size: 12px
</style>
