<template>
  <div id="app">
    <router-view></router-view>
    <header>我是header</header>
    <div class="content-wrapper">
      我是内容
    </div>
    <footer>
      我是页脚
    </footer>
  </div>
</template>

<script>
  import Header from './components/Header/Header'

  export default {
    name: 'app',
    components: {
      Header
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
