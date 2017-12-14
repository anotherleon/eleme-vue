<template>
  <div class="food" v-show="show" ref="food">
    <div class="content-wrapper">
      <div class="image-header">
        <div class="back" @click="hide"> <i class="icon-arrow_lift"></i> </div>
        <img :src="food.image" alt="">
      </div>
      <div class="content">
        <h1 class="title">{{food.name}}</h1>
        <div class="detail">
          <span class="sell-count">月售{{food.sellCount}}份</span><span class="rating">好评率{{food.rating}}%</span>
        </div>
        <div class="price">
          <span class="now">￥{{food.price}}</span><span class="old">{{food.oldPrice}}</span>
        </div>
        <div class="add-cart">加入购物车</div>
      </div> 
      <split></split>
      <div class="info">
        <h2 class="title">商品介绍</h2>
        <p class="text">{{food.info}}</p>
      </div> 
      <split></split>
      <div class="rating">
        <h2 class="title">商品评价</h2>
        <div class="rating-content">
          <ul>
            <li class="rating-item" v-for="rating in food.ratings">
              <span class="time"></span> <span class="user"></span>
              <p class="content">
                <span class="icon"></span><span class="text"></span>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Split from 'components/Split/Split'
  import BetterScroll from 'better-scroll'

  export default {
    name: 'Food',
    components: {
      Split,
    },
    props: {
      food: {
        type: Object,
      },
      show: {
        type: Boolean,
        default: true,
      },
    },
    data() {
      return {
        showDetail: false,
      }
    },
    updated() {
      console.log('--------------------------------')
      this.$nextTick(() => {
        this.foodScroll = new BetterScroll(this.$refs.food, { click: true })
      })
    },
    methods: {
      hide() {
        this.show = false
      },
    },
  }
</script>
<style type="text/css" lang="stylus" scoped>
  .food
    position: fixed
    top: 0
    left: 0
    bottom: 48px
    z-index: 30
    width: 100%
    height: 100%
    background: #fff
    .content-wrapper
      .image-header
        position: relative
        width: 100%
        height: 0
        padding-top: 100%
        .back
          position: absolute
          top: 10px
          left: 10px
          z-index: 1
          padding: 6px
          font-size: 20px
          color: #fff
        img
          position: absolute
          top: 0
          left: 0
          width: 100%
          height: 100%
      .content
        position: relative
        margin: 18px
        .title
          line-height: 14px
          font-size: 14px
          font-weight: 700
          color: rgb(7, 17, 27)
        .detail
          margin: 8px 0 18px 0
          font-size: 0
          .sell-count, .rating
            margin-right: 12px
            line-height: 10px
            font-size: 10px
            color: rgb(147,153,159)
        .price
          line-height: 24px
          .now
            font-size: 14px
            font-weight: 700
            color: rgb(240, 20, 20)
          .old
            text-decoration: line-through
            font-size: 10px
            color: rgb(147, 153, 159)
        .add-cart
          position: absolute
          bottom: 0
          right: 0
          padding: 6px 12px
          width: 72px
          height: 24px
          line-height: 24px
          text-align: center
          font-size: 12px
          color: #fff
          border-radius: 24px
          background-color: rgb(0, 160, 220)
      .info
        padding: 18px
        .title
          line-height: 14px
          font-size: 14px
          color: rgb(7, 17, 27)
        .text
          padding: 6px 8px 0 8px
          line-height: 24px
          font-size: 12px
          color: rgb(77, 85, 93)
            
</style>

