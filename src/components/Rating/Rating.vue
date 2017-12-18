<template>
  <div class="rating" ref="rating">
    <div class="rating-wrapper">
      <div class="overview">
        <div class="overview-left">
          <div class="score">{{seller.score}}</div>
          <h1 class="title">综合评分</h1>
          <div class="rank">高于周边商家{{seller.rankRate}}%</div>
        </div>
        <div class="overview-right">
          <div class="score-wrapper">
            <h2 class="title">服务态度</h2>
            <star-rating :size="36" :score="seller.serviceScore"></star-rating>
            <span class="score">{{seller.serviceScore}}</span>
          </div>   
          <div class="score-wrapper">
            <h2 class="title">商品评分</h2>
            <star-rating :size="36" :score="seller.foodScore"></star-rating>
            <span class="score">{{seller.foodScore}}</span>
          </div>
          <div class="delivery-time">
            <h2 class="title">送达时间</h2>
            <span class="time">{{seller.deliveryTime}}分钟</span>
          </div>
        </div>
      </div>
      <split></split>
      <rating-select :ratings="ratings" :hasContent="hasContent" @select="selectRating" @toggle="toggleContent"></rating-select>
      <div class="rating-content">
        <ul>
          <li class="rating-item border-1px" v-for="rating in ratings" v-show="showRating(rating.rateType, rating.text)">
            <div class="avatar">
              <img :src="rating.avatar" width="28" height="28">
            </div>
            <div class="content">
              <div class="name">{{rating.username}}</div>
              <span class="rate-time">{{rating.rateTime | formatDate}}</span> 
              <div class="star-wrapper">
                <star-rating :size="24" :score="rating.score"></star-rating>
                <span class="time" v-show="rating.deliveryTime">{{rating.deliveryTime}}分钟送达</span>
              </div>
              <p class="text">{{rating.text}}</p>
              <div class="recommend">
                <i class="icon-thumb_up" :class="{'icon-thumb_up':rating.rateType===0, 'icon-thumb_down':rating.rateType===1}"></i>
                <span class="item" v-for="item in rating.recommend">{{item}}</span>
              </div>
            </div>
          </li>
        </ul>
        <div class="no-rating" v-show="!ratings || !ratings.length">暂无评价</div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
  import BetterScroll from 'better-scroll'
  import StarRating from 'components/StarRating/StarRating'
  import Split from 'components/Split/Split'
  import RatingSelect from 'components/RatingSelect/RatingSelect'
  import response from 'assets/data.json'
  import FormatDate from 'common/js/date'

  export default {
    name: 'Rating',
    props: {
      seller: {
        type: Object,
      },
    },
    components: {
      StarRating,
      Split,
      RatingSelect,
    },
    data() {
      return {
        ratings: {},
        rateType: 0,
        hasContent: false,
      }
    },
    filters: {
      formatDate(time) {
        const date = new Date(time)
        return FormatDate(date, 'yyyy-MM-dd hh:mm')
      },
    },
    created() {
      this.ratings = response.ratings
    },
    mounted() {
      this.ratingScroll = new BetterScroll(this.$refs.rating, { click: true })
    },
    methods: {
      selectRating(type) {
        this.rateType = type
      },
      toggleContent() {
        this.hasContent = !this.hasContent
      },
      showRating(type, text) {
        if (this.hasContent && !text) {
          return false
        }
        if (this.rateType === 2) {
          return true
        }
        return this.rateType === type
      },
    },
  }
</script>
<style type="text/css" lang="stylus" scoped>
   @import "../../assets/stylus/mixin.styl"
  
  .rating
    position: absolute
    top: 174px
    bottom: 0
    left: 0
    width: 100%
    overflow: hidden
    .rating-wrapper
      .overview
        display: flex
        padding: 18px 0
        .overview-left
          flex: 0 0 137px
          width: 137px
          padding: 6px 0
          text-align: center
          border-right: 1px solid rgba(7, 17, 27, 0.1)
          .score
            margin-bottom: 6px
            line-height: 28px
            font-size: 24px
            color: rgb(255, 153, 0)
          .title
            margin-bottom: 8px
            line-height: 12px
            font-size: 12px
            color: rgb(7, 17, 27)
          .rank
            line-height: 10px
            font-size: 10px
            color: rgb(147, 153, 159)
        .overview-right
          flex: 1
          padding: 6px 0px 6px 24px
          .score-wrapper
            line-height: 18px
            font-size: 0
            .title
              display: inline-block
              margin-bottom: 8px
              font-size: 12px
              color: rgb(7, 17, 27)
            .star
              display: inline-block
              vertical-align: middle
              margin: 0 12px
            .score
              font-size: 12px
              color: rgb(255, 153, 0)
          .delivery-time
              font-size: 0
            .title
              display: inline-block
              line-height: 18px
              font-size: 12px
              color: rgb(7, 17, 27)
            .time
              margin-left: 12px
              font-size: 12px
              color: rgb(147, 153, 159) 
      .rating-content
        padding: 0 18px
        .rating-item
          display: flex
          padding: 18px 0
          border-1px(rgba(7, 17, 27, 0.1))
          .avatar
            flex: 0 0 28px
            width: 28px
            margin-right: 12px
            img
              border-radius: 50%
          .content
            flex: 1
            position: relative
            .name
              line-height: 12px
              font-size: 10px
              color: rgb(7, 17, 27)
            .star-wrapper
              margin: 4px 6px 6px 0
              font-size: 0
              .star
                display: inline-block
              .time
                line-height: 12px
                font-size: 10px
                font-weight: 200
                color: rgb(147, 153, 159)
            .text
              margin-bottom: 8px
              line-height: 18px
              font-size: 12px
              color: rgb(7, 17, 27)
            .recommend
              line-height: 16px
              font-size: 0
              .icon-thumb_up, .item
                display: inline-block
                margin-bottom: 4px
                vertical-align: middle
              .icon-thumb_up
                font-size: 12px
                color: rgb(0, 160, 220)
              .item
                margin-left: 8px
                padding: 0px 6px
                border: 1px solid rgba(7, 17, 27, 0.1)
                border-radius: 1px
                font-size: 9px
                color: rgb(147, 153, 159)
                background: #fff
            .rate-time
              position: absolute
              top: 0
              right: 0
              line-height: 12px
              font-size: 10px
              font-weight: 200
              color: rgb(147, 153, 159)
</style>
