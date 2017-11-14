// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from '@/App'
import '@/assets/css/reset.css'
import '@/assets/stylus/iconfont.styl'
// require('./common/stylus/iconfont.styl')


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
})

// new Vue({
//     Router,
//     render: h=>h(App),
// }).$mount('#app')
