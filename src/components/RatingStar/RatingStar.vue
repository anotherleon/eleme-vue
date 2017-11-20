<template>
  <div class="rating-star">
    <span class="star" v-for="index in 5" :class="{active: index<=score}" :key="index"></span>
  </div>
</template>
<script type="text/javascript">
  export default {
    name: 'RatingStar',
    props: ['score'],
  }
</script>
<style type="text/css" lang="stylus" scoped>
  @import '../../assets/stylus/mixin.styl'
  .rating-star
    padding: 20px
    text-align: center
    .star
      display: inline-block
      width: 20px
      height: 20px
      padding-right: 10px
      bg-image(star24_off)
      background-repeat: no-repeat
      &.active
        bg-image(star24_on)
</style>
