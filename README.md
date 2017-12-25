# eleme-vue

> 仿饿了么app

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


# 总结

1. 开发准备：
  * 字体文件的准备
  * 需求分析

2. 技术栈：
  * vue + vue-router + es6 + webpack + stylus + flex + eslint 

3. 实现功能
  * 模仿饿了么App，页头，商品页，评价页，商家页
  * 页面可以滚动，购物车，购物动画及选购商品联动
  * 商品页menu和list同步滚动
  * 评论页筛选
  * 页面切换直接的过渡与动画
4. 目录结构
  * build/---- webpack配置文件
  * config/----开发相关配置项，如服务器端口、打包的目录等
  * dist/-----打包后的文件目录
  * src/assets/-----静态资源如css，fonts等
  * common/-----工具
  * components/------页面组件
  * router/-------页面路由配置
  * App.vue
  * main.js-----webpack入口文件
5. 开发过程（以iphone6的viewport大小375*667为基准）
  * 开发过程，先分析设计稿页面，html结构 -> css -> script
  * border-1px的实现 
    + src/assets/stylus/mixin.styl
      `
        border-1px($color)
          positon: relative
          &:after
            display: block
            position: absolute
            bottom: 0
            left: 0
            width: 100%
            border-bottom: 1px solid $color
            content: ''
          @media (-webkit-min-device-pixel-ratio: 1.5),(min-device-pixel-ratio: 1.5)
            &:after
              -webkit-transform: scaleY(0.7)
              transform: scaleY(0.7)
          @media (-webkit-min-device-pixel-ratio: 2),(min-device-pixel-ratio: 2)
            &:after
              -webkit-transform: scaleY(0.5)
              transform: scaleY(0.5)   
      `
  * bg-imgage，根据@media查询不同dpr载入@2x图或@3x图
    + src/assets/stylus/mixin.styl
      `
        bg-image($url)
          background-image: url($url + "@2x.png")
          @media (-webkit-min-device-pixel-ratio: 3),(min-device-pixel-ratio: 3)
            background-image: url($url + "@3x.png")
      `
  * Header组件
    + 文字过长时显示...
      `
        white-space: nowrap
        textover-flow: ellipsis
        over-flow: hidden
      `
    + 背景图片模糊化
      `filter: blur(10px)`
    + 使用flex实现优惠信息和商家公告功能
      `
        .support-title,.bulletin-tittle
          display: flex
          .line
            flex: 1
      `
    + stiky页脚
      `html:
         <div class="wrapper">
           <div class="main"></div>
           <div class="footer"></div>
         </div> 
      css:
        .wrapper
          width: 100%
          min-height: 100%
          .main
            padding-bottom: 40px
          .fotter
            marin-top: -40px
            height: 40px
      `
      > https://aotu.io/notes/2017/04/13/Sticky-footer/index.html
  * Goods组件：
   + 在视频课程中，直接在CartControl组件中使用addFood(){this.food.count}来操作父组件传递来的prop，因为food是对象，所以这样的操作是生效的，但是在vue官方教程中并不推荐这样的做法，应该是在子组件中发送事件给父组件，由父组件完成对food对象的修改。
   + 因此更好的做法是this.$emit('add')、this.$emit('reduce')事件，Good组件监听到add、reduce后，调用addFood,和reduceFood方法，
   + 这样还有一个好处就是，在别的页面，如Food详情页中，点击添加购物车后发送一个add事件给Goods就可以实现food.count的增加，而不用在Food也添加一个addFood方法了
   + 另外小球也可以做成一个组件，直接在CartControl、Food的购物车中复用
  * Food
    图片预占位黑魔法
    `
      width: 100%
      height: 0
      padding-top: 134% 
    `
5. 布局
  flex ：左边固定，右边适应 图片 + 文字
  div 左右。。。。
  圆形图片 border-radius: 50%
6. 常用字体及颜色：
  导航: color:rgb(77,85,93),border: rgba(7,17,27.0.1)
  header:
    标题: font-size: 16px, color: #fff
    内容: font-size: 12px, color: #fff
    描述: font-size: 10px, color: #fff
    详情: background: rgba(7, 17, 27, 0.8)
    公告: background: rgba(7, 17, 27, 0.8)
  Goods:
    菜单: font-size: 12px, background: #f3f5f7
    list-title：font-size: 12px, color: rgb(147, 153, 159)，background: #f3f5f7，border: #d9dde1
    price: color: rgb(240, 20, 20)
    cartControl: color: rgb(0, 160, 220)
    shopcart: color:rgb(255,255,255,0.4),background-color: #141d17
      .icon: background-color: #2b343c
      .pay: background: #00b43c, background-color: #2b333b
  RatingSelect:
    .all, .like
      background: rgba(0, 160, 220, 0.2)
      &.current
        background-color: rgb(0, 160, 220)
    .dislike
      background-color: rgba(77, 85, 93, 0.2)
      &.current
        background: rgb(77, 85, 93)
 浅灰色  rgb(147, 153, 159)
 深灰色  rgba(7, 17, 27, 0.8)
 深灰色  rgb(77, 85, 93)
 蓝色    rgb(0, 160, 220)
 红色    rgb(240, 20, 20)
 浅蓝色  #f3f5f7

