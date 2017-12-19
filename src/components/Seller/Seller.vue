<template>
  <div class="seller" ref="seller">
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
          <i class="icon-favorite" :class="{active: actived}" @click="toggleFavorite"></i><br>
          <span class="text">{{favoriteText}}</span>
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
      <div class="photo">
        <h2 class="title">商家实景</h2>
        <div class="photo-wrapper" ref="photoWrapper">
          <ul class="photo-list" ref="photoList">
            <li class="photo-item" v-for="url in seller.pics"><img :src="url"  width="120" height="90"></li>
          </ul> 
        </div>
      </div>
      <split></split>
      <div class="infos">
        <h2 class="title">商家信息</h2>
        <ul>
          <li class="info-item" v-for="info in seller.infos">{{info}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
  import BetterScroll from 'better-scroll'
  import { saveToLocal, loadFromLocal } from 'common/js/store'
  import StarRating from 'components/StarRating/StarRating'
  import Split from 'components/Split/Split'
  import response from 'assets/data.json'

  export default {
    name: 'Seller',
    components: {
      StarRating,
      Split,
    },
    props: {
      seller: {
        type: Object,
      },
    },
    data() {
      return {
        actived: () => loadFromLocal(this.seller.id, 'favorite', false)(),
        classMap: [],
        // actived: false,
      }
    },
    computed: {
      favoriteText() { return this.actived ? '已收藏' : '收藏' },
    },
    created() {
      this.seller = response.seller
      this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
    },
    mounted() {
      console.log('===========seller mounted=================')
      this.initScroll()
    },
    methods: {
      initScroll() {
        // console.log(this.$refs.seller)
        if (!this.sellerScroll) {
          this.sellerScroll = new BetterScroll(this.$refs.seller, { click: true })
        } else {
          this.sellerScroll.refresh()
        }

        if (!this.photoScroll) {
          const photoWidth = 120
          const margin = 6
          const listWidth = ((photoWidth + margin) * this.seller.pics.length) - margin
          this.$refs.photoList.style.width = `${listWidth}px`
          this.photoScroll = new BetterScroll(this.$refs.photoWrapper, { scrollX: true, eventPassthrough: 'vertical' })
        } else {
          this.photoScroll.refresh()
        }
      },
      toggleFavorite() {
        this.actived = !this.actived
        console.log(this.seller.id)
        saveToLocal(this.seller.id, 'actived', this.actived)
      },
    },
  }
</script>
<style type="text/css" lang="stylus" scoped>
   @import "../../assets/stylus/mixin.styl"
   
  .seller
    position: absolute
    top: 174px
    left: 0
    bottom: 0
    width: 100%
    overflow: hidden
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
            color: #d4d6d9
            &.active
              color: rgb(240, 20, 20)
          .text
            line-height: 10px
            font-size: 10px
            color: rgb(77, 85, 93)
      .bulletin
        margin: 18px 18px 16px 18px
        .title
          line-height: 14px
          font-size: 14px
          color: rgb(7, 17, 27) 
        .content
          padding: 8px 12px 16px 12px
          border-1px(rgba(7, 17, 27, 0.1))
          line-height: 24px
          font-size: 12px
          font-weight: 200
          color: rgb(240, 20, 20)
        .supports
          .support-item
            padding: 16px 12px
            line-height: 16px
            border-1px(rgba(7, 17, 27, 0.1))
            font-size: 0
            &:last-child
              border-none()
            .type
              display: inline-block
              width: 16px
              height: 16px
              margin-right: 6px
              vertical-align: middle
              background-size: 16px 16px
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
            .text
              line-height: 16px
              vertical-align: middle
              font-size: 12px
              font-weight: 200
              color: rgb(7, 17, 27)
      .photo
        padding: 18px
        .title
          margin-bottom: 12px
          line-height: 14px
          font-size: 14px
          color: rgb(7, 17, 27)
        .photo-wrapper
          width: 100%
          height: 90px
          overflow: hidden
          white-space: nowrap
          // overflow-x: scroll
          // overflow-y: hidden
          // &::-webkit-scrollbar
          //   display:none
          .photo-list
            font-size: 0
            .photo-item
              display: inline-block
              margin-right: 6px
              &:last-child
                margin-right: 0
      .infos
        padding: 18px
        color: rgb(7, 17, 27)
        .title
          margin-bottom: 12px
          line-height: 14px
          font-size: 14px
        .info-item
          padding: 16px 12px
          line-height: 16px
          font-size: 12px
          font-weight: 200
          border-1px(rgba(7, 17, 27, 0.1))
</style>
