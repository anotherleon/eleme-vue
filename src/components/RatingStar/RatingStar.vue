<template>
  <div class="rating-star">
    <span v-for="(item,index) in 5"></span>
  </div>
</template>
<script type="text/javascript">
  export default {
    name: 'RatingStar',
    props: {
      score: 3,
    },

  }
</script>
<style type="text/css" lang="stylus" scoped>
  @import '../../assets/stylus/mixin.styl'
  .rating-star
    span
      display: inline-block
      width: 10px
      height: 10px
      bg-image(star24_on)
</style>
