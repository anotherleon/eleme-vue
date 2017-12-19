import Vue from 'vue'
import Router from 'vue-router'
import Goods from 'components/Goods/Goods'
import Rating from 'components/Rating/Rating'
import Seller from 'components/Seller/Seller'
import Test from 'components/Test/Test'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/goods',
      name: 'Goods',
      component: Goods,
      meta: {
        title: '商品',
      },
    },
    {
      path: '/rating',
      name: 'Rating',
      component: Rating,
      meta: {
        title: '评价',
      },
    },
    {
      path: '/seller',
      name: 'Seller',
      component: Seller,
      meta: {
        title: '商家',
      },
    },
    {
      path: '/test',
      name: 'Test',
      component: Test,
      meta: {
        title: '测试',
      },
    },
  ],
  // linkExactActiveClass: 'active',
})
