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
* 1.Good组件：
 + 在视频课程中，直接在CartControl组件中使用addFood(){this.food.count}来操作父组件传递来的prop，因为food是对象，所以这样的操作是生效的，但是在vue官方教程中并不推荐这样的做法，应该是在子组件中发送事件给父组件，由父组件完成对food对象的修改。
 + 因此更好的做法是this.$emit('add')、this.$emit('reduce')事件，Good组件监听到add、reduce后，调用addFood,和reduceFood方法，
 + 这样还有一个好处就是，在别的页面，如Food详情页中，点击添加购物车后发送一个add事件给Good就可以实现food.count的增加，而不用在Food也添加一个addFood方法了
 + 另外小球也可以做成一个组件，直接在CartControl、Food的购物车中复用

 2. 布局
  flex ：左边固定，右边适应 图片 + 文字
  div 左右。。。。

 圆形图片 border-radius: 50%

常用颜色
 color: rgb(147, 153, 159)
