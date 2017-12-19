<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <div class="tab border-1px">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/rating">评价</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <keep-alive>
      <router-view :seller="seller"></router-view>
    </keep-alive>
  </div>
</template>

<script>
  // import Axios from 'axios'
  import VHeader from 'components/VHeader/VHeader'
  import response from 'assets/data.json'

  export default {
    name: 'app',
    components: {
      VHeader,
    },
    data() {
      return {
        seller: {},
      }
    },
    created() {
      this.init()
    },
    methods: {
      async init() {
        // Axios.get()
        this.seller = response.seller
      },
    },
  }
</script>

<style type="text/css" lang="stylus" scoped>
  @import "./assets/stylus/mixin.styl"
  
  #app
    .tab
      display: flex
      width: 100%
      height: 40px
      line-height: 40px
      border-1px(rgba(7,17,27,0.1))
      .tab-item
        flex: 1
        text-align: center
        a
          display: block
          font-size: 14px
          color: rgb(77, 85, 93)
          &.router-link-active
            color: rgb(240, 20, 20)
</style>
