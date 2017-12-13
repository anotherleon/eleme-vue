<template>
  <div class="food">
    <div class="content-wrapper">
      <div class="image-header">
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
      </div> 
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Food',
    props: {
      food: {
        type: Object,
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
    z-index: 10
    width: 100%
    height: 100%
    background: #fff
    .content-wrapper
      .image-header
        position: relative
        width: 100%
        height: 0
        padding-top: 100%
        img
          position: absolute
          top: 0
          left: 0
          width: 100%
          height: 100%
      .content
        padding: 18px
        .title
          line-height: 14plx
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
            
</style>

