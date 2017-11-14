<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar">
        <img width="64" height="64" :src="seller.avatar"> 
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{seller.name}}</span>
        </div>
        <div class="description"> <!-- delivery -->
          {{seller.description}}/{{seller.deliveryTime}} 分钟送达   
        </div> 
        <div class="support">
          <span class="type"></span>
          <span class="desc">{{seller.supports[0].description}}</span>
        </div>      <!-- discounts -->
        <div class="support-count">{{seller.supports.length}}个</div> <!-- discounts-count -->
        <i class="icon-keyboard_arrow_right"></i>
      </div> 
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Header',
    props: {
      seller: {
        type: Object,
        required: true,
      },
    },
  }
</script>
<style type="text/css" lang="stylus" scoped>
  // @import('../../assets/stylus/iconfont.styl')
  .header
    position: relative
    .content-wrapper
      padding: 24px 12px 18px 24px
      font-size: 0
      background-color: #ccc
      .avatar
        display: inline-block
        margin-right: 16px
        background-color: #ccc
      .content
        display: inline-block
        vertical-align: top
        .title
          .brand
            display: inline-block
            width: 30px
            height: 18px
            margin-right: 6px
            vertical-align: bottom
            background:url(brand@3x.png) no-repeat
            background-size: 30px 18px
          .name
            font-size: 16px
        .description
          font-size: 12px
          margin: 8px 0 10px 0
        .support
          .type
            display: inline-block
            width: 16px
            height: 16px
            margin-right: 4px
            vertical-align: bottom
            background: url(decrease_1@3x.png) no-repeat 
            background-size: 16px 16px
          .desc
            font-size: 10px
    .support-count
      position: absolute
      display: block
      right: 12px
      bottom: 18px
      padding: 7px 8px
      border-radius: 8px
      font-size: 10px
      background-color: rgba(0,0,0,0.2)
</style>