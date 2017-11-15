<template>
  <div id="app">
    <!-- <router-view></router-view> -->
    <VHeader :seller='seller'></VHeader>
    <router-view></router-view>
    <div class="">
      我是内容
    </div>
    <footer>
      我是页脚
    </footer>
  </div>
</template>

<script>
  // import Axios from 'axios'
  import Header from '@/components/Header/Header'
  import response from '@/assets/data.json'

  export default {
    name: 'app',
    components: {
      VHeader: Header,
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

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /*text-align: center;*/
    /*color: #2c3e50;*/
/*    margin-top: 60px;*/
  }
</style>
