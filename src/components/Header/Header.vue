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
        <div class="description">
          {{seller.description}}/{{seller.deliveryTime}} 分钟送达
        </div>  <!-- delivery -->
        <div class="support"></div>      <!-- discounts -->
        <div class="support-count"></div> <!-- discounts-count -->
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
  .header
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
        .title
          .brand
            display: inline-block
            width: 30px
            height: 18px
            vertical-align:top
            background:url(brand@3x.png) no-repeat
            background-size: 30px 18px
          .name
            font-size: 16px
        .description
          font-size: 16px
</style>