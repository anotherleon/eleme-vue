<template>
  <div class="rating-select">
    <div class="rating-type">
      <span class="all" :class="{current: type === 2}" @click="select(2, $event)">{{desc.all}}<span class="count">{{ratings.length}}</span></span>
      <span class="like" :class="{current: type === 0}"  @click="select(0, $event)">{{desc.like}}<span class="count">{{liked.length}}</span></span>
      <span class="dislike" :class="{current: type === 1}" @click="select(1, $event)">{{desc.dislike}}<span class="count">{{disliked.length}}</span></span>
    </div>
    <div class="has-content" :class="{'on': hasContent}" @click="toggleContent">
      <i class="icon-check_circle"></i><span class="text">只看有内容的评价</span>
    </div>
  </div>
</template>
<script>
  const POSITIVE = 0
  const NEGATIVE = 1
  // const ALL = 2

  export default {
    name: 'RatingSelect',
    props: {
      ratings: {
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
      hasContent: {
        type: Boolean,
        default: false,
      },
    },
    data() {
      return {
        type: 2,
        // hasContent: false,
      }
    },
    computed: {
      liked() {
        return this.ratings.filter(item => item.rateType === POSITIVE)
      },
      disliked() {
        return this.ratings.filter(item => item.rateType === NEGATIVE)
      },
    },
    methods: {
      select(type, event) {
        // eslint-disable-next-line
        if (!event._constructed) {
          console.log('++++click')
          return
        }
        this.type = type
        this.$emit('select', type)
      },
      toggleContent(event) {
        // eslint-disable-next-line
        if (!event._constructed) {
          return
        }
        // this.hasContent = !this.hasContent
        this.$emit('toggle')
      },
      // all() {
      //   this.$emit('select', ALL)
      // },
      // like() {
      //   this.$emit('select', POSITIVE)
      // },
      // dislike() {
      //   this.$emit('select', NEGATIVE)
      // },
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
        &.current
          color: #fff
      .all, .like
        background: rgba(0, 160, 220, 0.2)
        &.current
          background-color: rgb(0, 160, 220)
      .dislike
        background-color: rgba(77, 85, 93, 0.2)
        &.current
          background: rgb(77, 85, 93)
  .has-content
    padding: 12px 18px
    border-bottom: 1px solid rgba(7, 17, 27, 0.1)
    color: rgb(147, 153, 159)
    &.on
      .icon-check_circle
        color: #00c850
    .icon-check_circle
      margin-right: 4px
      line-height: 24px
      vertical-align: middle
      font-size: 24px
    .text
      line-height: 24px
      font-size: 12px
      vertical-align: middle
        
</style>