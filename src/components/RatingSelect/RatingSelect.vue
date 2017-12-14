<template>
  <div class="rating-select">
    <div class="rating-type">
      <span class="all">{{desc.all}}<span class="count">{{rating.length}}</span></span>
      <span class="like">{{desc.like}}<span class="count">{{like.length}}</span></span>
      <span class="dislike">{{desc.dislike}}<span class="count">{{dislike.length}}</span></span>
    </div>
    <div class="has-content">
      <i class="icon-check_circle"></i><span class="text">只看有内容的评价</span>
    </div>
  </div>
</template>
<script>
  const POSITIVE = 0
  const NEGATIVE = 1
  // const All = 2

  export default {
    name: 'RatingSelect',
    props: {
      rating: {
        type: Array,
        default() {
          return []
        },
      },
      desc: {
        type: Object,
        default() {
          return {
            all: '全部',
            like: '满意',
            dislike: '不满意',
          }
        },
      },
    },
    data() {
      return {

      }
    },
    computed: {
      like() {
        return this.rating.filter(item => item.ratingType === POSITIVE)
      },
      dislike() {
        return this.rating.filter(item => item.ratingType === NEGATIVE)
      },
    },
  }
</script>
<style type="text/css" lang="stylus" scoped>
  @import "../../assets/stylus/mixin.styl"
  
  .rating-select
    .rating-type
      padding: 18px 0
      margin: 0 18px
      border-1px(rgba(7, 17, 27, 0.1))
      font-size: 0
      .all, .like, .dislike
        padding: 8px 12px
        margin-right: 8px
        line-height: 16px
        border-radius: 2px
        font-size: 12px
        .count
          margin-left: 2px
          font-size: 10px
      .all
        background-color: rgb(0, 160, 220)
      .like,.dislike
        background-color: rgba(77, 85, 93, 0.2)
  .has-content
    padding: 12px 18px
    border-bottom: 1px solid rgba(7, 17, 27, 0.1)
    color: rgb(147, 153, 159)
    .icon-check_circle
      margin-right: 4px
      line-height: 24px
      vertical-align: middle
      font-size: 24px
      color: #00c850
    .text
      line-height: 24px
      font-size: 12px
      vertical-align: middle
        
</style>