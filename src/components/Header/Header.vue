<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar">
        <img width="64" height="64" :src="seller.avatar"> 
      </div>
      <div class="content">
        <div class="title">
        <div class="brand"></div>
        <div class="name"></div>
        </div>
        <div class="description"></div>  <!-- delivery -->
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
</style>