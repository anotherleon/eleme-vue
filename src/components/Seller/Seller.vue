<template>
  <div class="seller">
    <div class="seller-wrapper">
      <div class="overview">
        <div class="title">{{seller.name}}</div>
        <div class="desc">
          <star-rating :size="36" :score="seller.score"></star-rating>
          <span class="count">({{seller.ratingCount}})</span>
          <span class="count">月售{{seller.sellCount}}单</span>
        </div>
        <ul class="delivery">
          <li class="delivery-item">
            <h2>起送价</h2>
            <em>{{seller.minPrice}}</em><span>元</span>
          </li>
          <li class="delivery-item">
            <h2>商家配送</h2>
            <em>{{seller.deliveryPrice}}</em><span>元</span>
          </li>
          <li class="delivery-item">
            <h2>平均配送时间</h2>
            <em>{{seller.deliveryTime}}</em><span>分钟</span>
          </li>
        </ul>
        <div class="favorite">
          <i class="icon-favorite"></i><br>
          <span class="text">已收藏</span>
        </div>
      </div>
      <split></split>
      <div class="bulletin">
        <h2 class="title">公告与活动</h2>
        <p class="content border-1px">{{seller.bulletin}}</p>
        <ul class="supports">
          <li class="support-item" v-for="support in seller.supports">
            <i  class="type" :class="classMap[support.type]"></i>
            <span class="text">{{support.description}}</span>
          </li>
        </ul>
      </div>
      <split></split>
      <div class="pics">
        <h2 class="title">商家实景</h2>
        <div class="pic-wrapper">
          <ul class="pic-list">
            <li class="pic-item" v-for="url in seller.pics"><img :src="url"  width="120" height="90"></li>
          </ul> 
        </div>
      </div>
      <split></split>
      <div class="infos">
        <ul>
          <li class="info-item" v-for="info in seller.infos">{{info}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
  // import BetterScroll from 'better-scroll'
  import StarRating from 'components/StarRating/StarRating'
  import Split from 'components/Split/Split'
  import response from 'assets/data.json'

  export default {
    name: 'Seller',
    components: {
      StarRating,
      Split,
    },
    data() {
      return {
        seller: {},
        classMap: [],
      }
    },
    created() {
      this.seller = response.seller
      this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
    },
  }
</script>
<style type="text/css" lang="stylus" scoped>
   @import "../../assets/stylus/mixin.styl"
   
  .seller
    .seller-wrapper
      .overview
        position: relative
        padding: 18px
        .title
          margin-bottom: 12px
          line-height: 14px
          font-size: 14px
          color: rgb(7, 17, 27)
        .desc
          padding-bottom: 18px
          line-height: 18px
          font-size: 0
          border-1px(rgba(7, 17, 27, 0.1))
          .star
            display: inline-block
            margin-right: 8px
            vertical-align: middle
          .count
            margin-right: 12px
            font-size: 10px
            color: rgb(77, 85, 93)
        .delivery
          display: flex
          padding-top: 18px
          .delivery-item
            flex: 1
            text-align: center
            border-right: 1px solid rgba(7, 17, 27, 0.1)
            line-height: 10px
            font-size: 10px
            color: rgb(147, 153, 159) 
            em
              line-height: 32px
              font-size: 24px
              font-style: normal
              color: rgb(7, 17, 27)
            &:last-child
              border: none
            span
              color: rgb(7, 17, 27)
        .favorite
          position: absolute
          top: 18px
          right: 18px
          text-align: center
          .icon-favorite
            margin-bottom: 4px
            line-height: 24px
            font-size: 24px
            color: rgb(240, 20, 20)
          .text
            line-height: 10px
            font-size: 10px
            color: rgb(77, 85, 93)
      .bulletin
        margin: 18px 18px 16px 18px
        .title
          margin-bottom: 8px
          line-height: 14px
          font-size: 14px
          color: rgb(7, 17, 27) 
        .content
          padding: 0 12px
          border-1px(rgba(7, 17, 27, 0.1))
          line-height: 24px
          font-size: 12px
          font-weight: 200
          color: rgb(240, 20, 20)
        .supports
        .support-item
          .type
            display: inline-block
            vertical-align: top
            width: 12px
            height: 12px
            margin-right: 4px
            background-size: 12px 12px
            &.decrease
              bg-image(decrease_4)
            &.discount
              bg-image(discount_4)
            &.special
              bg-image(special_4)
            &.invoice
              bg-image(invoice_4)
            &.guarantee
              bg-image(guarantee_4)
</style>
