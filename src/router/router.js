import Vue from 'vue'
import Router from 'vue-router'
import App from '@/App'
import Test from '@/components/Test/Test'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/home',
      name: 'app',
      component: App,
    },
    {
      path: '/test',
      name: 'test',
      component: Test,
      meta: {
        title: '测试',
      },
    },
  ],
})
