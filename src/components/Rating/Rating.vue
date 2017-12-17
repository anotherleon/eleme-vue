<template>
  <div class="rating">
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
      <rating-select></rating-select>
      <div class="rating-content">
        <ul>
          <li class="rating-item border-1px" v-for="rating in ratings">
            <div class="avatar">
              <img :src="rating.avatar" width="28" height="28">
            </div>
            <div class="content">
              <div>
                <span class="name">{{rating.username}}</span>
                <span class="time">{{rating.rateTime | formatDate}}</span> 
              </div>
              <div class="star-wrapper">
                <star-rating :size="24" :score="rating.score"></star-rating>
                <span class="time">{{rating.deliveryTime}}</span>
              </div>
              <p class="text">{{rating.text}}</p>
              <div class="recommend">
                <i class="icon-thumb_up"></i>
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
  import StarRating from 'components/StarRating/StarRating'
  import Split from 'components/Split/Split'
  import RatingSelect from 'components/RatingSelect/RatingSelect'
  import response from 'assets/data.json'

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
      }
    },
    created() {
      this.ratings = response.ratings
    },
  }
</script>
<style type="text/css" lang="stylus" scoped>
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
      .ratings-content
        padding: 18px
</style>
