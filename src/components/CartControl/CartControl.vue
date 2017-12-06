<template>
  <div class="control">
    <span class="reduce icon-remove_circle_outline"></span>
    <span class="count">1</span>
    <span class="add icon-add_circle"></span>
  </div>
</template>
<script>
  export default {
    name: 'CartControl',
  }
</script>
<style type="text/css" lang="stylus" scoped>
  .control
    background: #ccc
    height: 24px
    .reduce, .add
      // display: inline-block
      // padding: 6px
      font-size: 24px
      color: rgb(0, 160, 220)
    .count
      line-height: 24px
      vertical-align: top
      font-size: 12px
      color: rgb(147, 153, 159)
</style>

