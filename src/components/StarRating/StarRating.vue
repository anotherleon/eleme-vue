<template>
  <div class="star" :class="starType">
    <span class="star-item" v-for="(item,index) in itemClasses" :class="item" :key="index"></span>
  </div>
</template>
<script type="text/javascript">
  const LENGTH = 5
  const ON = 'on'
  const HALF = 'half'
  const OFF = 'off'

  export default {
    name: 'star',
    props: {
      size: {
        type: Number,
      },
      score: {
        type: Number,
      },
    },
    computed: {
      starType() {
        return `star-${this.size}`
      },
      itemClasses() {
        const result = []
        const score = Math.floor(this.score * 2) / 2
        const integer = Math.floor(score)
        const hasDecimal = score % 1 !== 0
        for (let i = 0; i < integer; i += 1) {
          result.push(ON)
        }
        if (hasDecimal) {
          result.push(HALF)
        }
        while (result.length < LENGTH) {
          result.push(OFF)
        }
        return result
      },
    },
  }
</script>
<style type="text/css" lang="stylus" scoped>
  @import '../../assets/stylus/mixin.styl'
  .star
    font-size: 0
    .star-item
      display: inline-block
      background-repeat: no-repeat
    &.star-48
      .star-item
        width: 20px
        height: 20px
        margin-right: 10px
        background-size: 20px 20px
        &:last-child
          margin-right: 0
        &.on
          bg-image(star48_on)
        &.off
          bg-image(star48_off)
        &.half  
          bg-image(star48_half)
    &.star-36
      .star-item
        width: 15px
        height: 15px
        margin-right: 6px
        background-size: 15px 15px
        &.on
          bg-image(star36_on)
        &.off
          bg-image(star36_off)
        &.half  
          bg-image(star36_half)
    &.star-24
      .star-item
        width: 10px
        height: 10px
        margin-right: 3px
        background-size: 10px 10px
        &.on
          bg-image(star24_on)
        &.off
          bg-image(star24_off)
        &.half  
          bg-image(star24_half)
</style>
