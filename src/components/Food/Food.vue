<template>
  <transition name="move">
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
            <span class="now">￥{{food.price}}</span><span class="old" v-show="food.oldPrice">{{food.oldPrice}}</span>
          </div>
          <div class="add-cart" @click="addFood">
            <span>加入购物车<span class="count" v-show="food.count">({{food.count}})</span></span>
          </div>
        </div> 
        <split v-show="food.info"></split>
        <div class="info" v-show="food.info">
          <h2 class="title">商品介绍</h2>
          <p class="text">{{food.info}}</p>
        </div> 
        <split></split>
        <div class="rating">
          <h2 class="title">商品评价</h2>
          <rating-select :ratings="food.ratings" :desc="desc" :hasContent="hasContent" @select="selectRating" @toggle="toggleContent"></rating-select> 
          <div class="rating-content">
            <ul v-show="food.ratings && food.ratings.length">
              <li class="rating-item border-1px" v-show="showRating(rating.rateType, rating.text)" v-for="rating in food.ratings">
                <span class="time">{{rating.rateTime | formatDate}}</span> 
                <span class="user">
                  <span class="name">{{rating.username}}</span>
                  <img class="avatar" :src="rating.avatar" width="12" height="12">
                </span>
                <p class="content">
                  <i class="icon-thumb_up" :class="{'icon-thumb_up':rating.rateType===0, 'icon-thumb_down':rating.rateType===1}"></i>
                  {{rating.text}}
                </p>
              </li>
            </ul>
            <div class="no-rating" v-show="!food.ratings || !food.ratings.length">暂无评价</div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
  import BetterScroll from 'better-scroll'
  import Split from 'components/Split/Split'
  import RatingSelect from 'components/RatingSelect/RatingSelect'
  import FormatDate from 'common/js/date'

  export default {
    name: 'Food',
    components: {
      Split,
      RatingSelect,
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
        rateType: 2,
        desc: {
          all: '全部',
          like: '推荐',
          dislike: '吐槽',
        },
        hasContent: false,
        showAdd: false,
      }
    },
    filters: {
      formatDate(time) {
        const date = new Date(time)
        return FormatDate(date, 'yyyy-MM-dd hh:mm')
      },
    },
    mounted() {
      this.$nextTick(() => {
        if (!this.foodScroll) {
          // console.log('--------------------------------')
          this.foodScroll = new BetterScroll(this.$refs.food, { click: true })
        } else {
          this.foodScroll.refresh()
        }
      })
    },
    methods: {
      hide() {
        // this.show = false
        this.hasContent = false
        this.$emit('hide')
      },
      addFood() {
        if (!this.food.count) {
          this.$set(this.food, 'count', 1)
        } else {
          console.log('++++++')
          this.food.count += 1
        }
        this.showAdd = true
        this.$emit('update:food', this.food)
        this.showAdd = false
      },
      selectRating(type) {
        this.rateType = type
        this.$nextTick(() => {
          this.foodScroll.refresh()
        })
      },
      showRating(rateType, text) {
        if (this.hasContent) {
          if (this.rateType === 2) {
            return true && !!text
          }
          return (this.rateType === rateType) && !!text
        }
        if (this.rateType === 2) {
          return true
        }
        return this.rateType === rateType
      },
      toggleContent() {
        this.hasContent = !this.hasContent
        this.$nextTick(() => {
          this.foodScroll.refresh()
        })
      },
    },
  }
</script>
<style type="text/css" lang="stylus" scoped>
  @import "../../assets/stylus/mixin.styl"

  .food
    position: fixed
    top: 0
    left: 0
    bottom: 48px
    z-index: 30
    width: 100%
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
          width: 84px
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
      .rating
        padding-top: 18px 
        .title
          margin-left: 18px
          margin-bottom: 6px
          font-size: 14px
          line-height: 14px
        .rating-content
          padding: 0 18px
          .rating-item
            // margin: 0 18px
            padding: 16px 0
            border-1px(rgba(7, 17, 27, 0.1))
            .time
              margin-bottom: 6px
              line-height: 12px
              font-size: 10px
              color: rgb(147, 153, 159)
            .user
              position: absolute
              top: 16px
              right: 0
            .content
              line-height: 16px
              font-size: 12px
              color: rgb(7, 17, 27)
              .icon-thumb_up, icon-thumb_down
                margin-right: 4px
              .icon-thumb_up
                color: rgb(0, 160, 220)
              .icon-thumb_down
                color: rgb(147, 153, 159)
          .no-rating
            padding: 16px 0
            font-size: 12px
            color: rgb(147, 153, 159)
  .move-enter-active, .move-leave-active
    transition: all .4s ease
  .move-enter, .move-leave-to
    transform: translate(100%, 0)
</style>

