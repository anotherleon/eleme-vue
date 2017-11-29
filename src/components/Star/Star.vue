<template>
  <div class="star" :class="starType">
    <span class="star-item" v-for="index in 5" :class="{active: index<=score}" :key="index"></span>
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
      itemClasses(){
        
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
        padding-right: 10px
        background-size: 20px 20px
        &.on
          bg-image(star48_on)
        &.off
          bg-image(star48_off)
        &.half  
          bg-image(star48_half)
    // &.star-36
    // &.star-24
</style>
