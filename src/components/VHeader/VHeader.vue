<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar">
        <img width="64" height="64" :src="seller.avatar"> 
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{seller.name}}</span>
        </div>
        <div class="description"> <!-- delivery -->
          {{seller.description}}/{{seller.deliveryTime}} 分钟送达   
        </div> 
        <div class="support" v-if="seller.supports">
          <span class="type" :class="classMap[seller.supports[0].type]"></span>
          <span class="desc">{{seller.supports[0].description}}</span>
        </div>      <!-- discounts --> 
      </div> 
      <div class="support-count" @click="showDetail"> <!-- discounts-count -->
        <span class="count">{{seller.supports.length}}个</span>
        <i class="icon-keyboard_arrow_right"></i>
      </div>
    </div>
    <div class="bulletin-wrapper" @click="showDetail()">
      <span class="title"></span>
      <span class="text">{{seller.bulletin}}</span>
      <i class="icon-keyboard_arrow_right"></i>
    </div>
    <div class="background">
      <img :src="seller.avatar" width="100%" height="100%">
    </div>
    <transition name="fade">
      <div class="detail" v-show="isShowDetail">
        <div class="detail-wrapper clearfix">
          <div class="detail-main">
            <h1 class="title">{{seller.name}}</h1>
            <div class="rating">
              <star-rating :size="48" :score="seller.score"></star-rating>
            </div>
            <div class="support-title">
              <div class="line"></div>
              <div class="text">优惠信息</div>
              <div class="line"></div>
            </div>
            <ul class="supports" v-if="seller.supports">
              <li class="support-item" v-for="(item,index) in seller.supports">
                <span class="type" :class="classMap[item.type]"></span>
                <span class="desc">{{item.description}}</span>
              </li>
            </ul>
            <div class="bulletin-title">
              <div class="line"></div>
              <div class="text">商家公告</div>
              <div class="line"></div>
            </div>
            <div class="bulletin">
              <p> {{seller.bulletin}} </p>
              <p> {{seller.bulletin}} </p>
              <p> {{seller.bulletin}} </p>
            </div>
          </div>          
        </div>
        <div class="detail-close" @click="close">
          <i class="icon-close"></i>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
  import StarRating from '../StarRating/StarRating'

  export default {
    name: 'VHeader',
    components: {
      StarRating,
    },
    props: {
      seller: {
        type: Object,
        required: true,
      },
    },
    data() {
      return {
        isShowDetail: false,
      }
    },
    created() {
      this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
    },
    methods: {
      showDetail() {
        this.isShowDetail = true
      },
      close() {
        this.isShowDetail = false
      },
    },
  }
</script>
<style type="text/css" lang="stylus" scoped>
  @import('../../assets/stylus/mixin.styl')
  
  .header
    position: relative
    overflow: hidden
    background: rgba(7, 17, 27, 0.5)
    color: #fff
    .content-wrapper
      position: relative
      padding: 24px 12px 18px 24px
      font-size: 0
      .avatar
        display: inline-block
        vertical-align: top
        background-color: #ccc
        img
          border-radius: 2px
      .content
        display: inline-block
        margin-left: 16px
        // vertical-align: top
        .title
          margin: 2px 0 8px 0
          .brand
            display: inline-block
            vertical-align: top
            width: 30px
            height: 18px
            margin-right: 6px
            bg-image(brand)
            background-size: 30px 18px
          .name
            font-size: 16px
            line-height: 18px
            font-weight: 700
        .description
          margin-bottom: 10px
          line-height: 12px
          font-size: 12px
        .support
          .type
            display: inline-block
            vertical-align: top
            width: 12px
            height: 12px
            margin-right: 4px
            background-size: 12px 12px
            &.decrease
              bg-image(decrease_1)
            &.discount
              bg-image(discount_1)
            &.special
              bg-image(special_1)
            &.invoice
              bg-image(invoice_1)
            &.guarantee
              bg-image(guarantee_1)
          .desc
            line-height: 12px
            font-size: 10px
      .support-count
        position: absolute
        right: 12px
        bottom: 14px
        padding: 0px 8px
        height: 24px
        line-height: 24px
        border-radius: 14px
        background-color: rgba(0,0,0,0.2)
        .count
          font-size: 10px
        .icon-keyboard_arrow_right
         margin-left: 2px
         line-height: 24px
         font-size: 10px   
    .bulletin-wrapper 
      position: relative
      padding: 0px 22px 0px 12px
      height: 28px
      line-height: 28px
      white-space: nowrap
      overflow: hidden
      text-overflow: ellipsis
      background: rgba(7, 17, 27, 0.2)
      .title
        display: inline-block
        vertical-align: middle
        // margin-top: 8px
        width: 22px
        height: 12px
        bg-image(bulletin)
        background-size: 22px 12px
      .text
        margin: 0 4px
        font-size: 10px
        vertical-align: middle
      .icon-keyboard_arrow_right
        position: absolute
        rig
        ht: 12px
        top: 8px
        font-size: 10px
    .background
      position: absolute
      top: 0
      left: 0
      width: 100%
      height: 100%
      z-index: -1
      filter: blur(10px)
    .detail
      position: fixed
      top: 0
      left: 0
      width: 100%
      height: 100%
      overflow: auto
      z-index: 99
      background: rgba(7, 17, 27, 0.8)
      .detail-wrapper
         width: 100%
         min-height: 100%
        .detail-main
          margin: 0 auto
          margin-top: 64px
          padding-bottom: 64px
          width: 80%
          .title
            margin-bottom: 16px
            font-size:16px
            font-weight: bold
            text-align: center
          .rating
            margin: 18px
            padding: 2px 0
            text-align: center
          .support-title,.bulletin-title
            display: flex
            margin: 28px 0 24px 0;
            text-align: center
            .line
              flex: 1
              position: relative
              top: -8px
              border-bottom: 1px solid rgba(255, 255, 255, 0.2)
            .text
              margin: 0 10px
              font-size: 16px
              font-weight: bold
          .supports
            margin: 0 12px
             // line-height: 20px
             font-size: 0
            .type
              display: inline-block
              vertical-align: middle
              margin: 6px 0
              width: 16px
              height: 16px
              margin-right: 6px
              background-size: 16px 16px
              &.decrease
                bg-image(decrease_2)
              &.discount
                bg-image(discount_2)
              &.special
                bg-image(special_2)
              &.invoice
                bg-image(invoice_2)
              &.guarantee
                bg-image(guarantee_2)
            .desc
              display: inline-block
              vertical-align: middle
              font-size: 12px
          .bulletin
            margin: 0 12px
            line-height: 24px
            font-size: 12px
      .detail-close
        position: relative
        width: 32px
        height: 32px
        margin: -54px auto 0 auto
        text-align: center
        font-size: 32px
        clear: both
    .fade-enter, .fade-leave-to
      opacity: 0
    .fade-enter-active, .fade-leave-active
      transition: opacity .5s
</style>