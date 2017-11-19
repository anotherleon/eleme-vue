<template>
  <div id="app">
    <v-header :seller='seller'></v-header>
    <div class="tab">
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
    <router-view></router-view>
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
  #app
    .tab
      display: flex
      justify-content: center
      .tab-item
        flex: auto
        text-align: center
        background-color: #ccc
        height: 30px
        line-height: 30px
</style>
