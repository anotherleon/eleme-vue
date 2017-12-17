<template>
  <div class="control">
    <transition name="move">
      <span class="reduce icon-remove_circle_outline" v-show="food.count>0" @click.stop.prevent="reduceFood"></span>
    </transition>
    <span class="count" v-show="food.count>0">{{food.count}}</span>
    <span class="add icon-add_circle" @click.stop.prevent="addFood"></span>
    <span class="ball-container">
      <template v-for="(ball,index) in balls">
        <transition name="drop" 
          v-on:before-enter="beforeEnter"
          v-on:enter="enter"
          v-on:after-enter="afterEnter"
        >
          <span class="ball" ref="ball" v-if="ball.show" :key="index">
            <span class="inner"></span>
          </span>  
        </transition>
      </template>
    </span>
  </div>
</template>
<script>
  export default {
    name: 'CartControl',
    props: {
      food: {
        type: Object,
        default: {
          count: 0,
        },
      },
    },
    data() {
      return {
        // count: 0,
        balls: [{
          show: false,
          index: 1,
        }, {
          show: false,
          index: 2,
        }, {
          show: false,
          index: 3,
        }, {
          show: false,
          index: 4,
        }, {
          show: false,
          index: 5,
        }],
      }
    },
    methods: {
      /* 1.food传递的是对象的引用，子组件可以直接改变父组件的值，但不推荐这样做，应该用emit传递事件
      * 2.vue官方推荐使用计算属性或者定义一个局部变量，并用 prop 的值初始化它，而不是直接更改prop
      */
      addFood(event) { // addFood更符合语义，用于food数量的增减
        // eslint-disable-next-line
        if (!event._constructed) {
          return
        }
        console.log('click')
        if (!this.food.count) {
          this.$set(this.food, 'count', 1)
        } else {
          console.log('++++++')
          this.food.count += 1
        }
        // this.count += 1
        this.$emit('updateupdate:food', this.food)
        // this.balls[0].show = true
        this.drop()
      },
      reduceFood(event) {
        // eslint-disable-next-line
        if (!event._constructed) {
          return
        }
        console.log('------')
        this.food.count -= 1
        this.$emit('update:food', this.food) // 原版课程没有此句
        // if (this.food.count <= 0) {
        //   this.food.count = 0
        // }
      },
      drop() {
        // this.$nextTick(() => {
        for (let i = 0; i < this.balls.length; i += 1) {
          const ball = this.balls[i]
          if (!ball.show) {
            ball.show = true
            // console.log('============' + ball.index)
            return
          }
        }
        // })
      },
      dropBall(el) {
        let len = this.balls.length
        while (len) {
          const b = this.balls[len - 1]
          if (b.show) {
            // console.log('111111111111111111111111111111')
            const rect = el.getBoundingClientRect()
            const x = -(rect.left - 32)
            const y = (window.innerHeight - rect.top - 22)
            // el.style.display = ''
            const ball = el
            ball.style.webkitTransform = `translate3d(0, ${y}px, 0)`
            ball.style.transform = `translate3d(0, ${y}px, 0)`
            const inner = el.firstChild
            inner.style.webkitTransform = `translate3d(${x}px,0,0)`
            inner.style.transform = `translate3d(${x}px,0,0)`
          }
          len -= 1
        }
      },
      beforeEnter(el) {
        console.log('====================beforeEnter')
        console.log(el)
      },
      enter(el, done) {
        console.log('==========enter')
        console.log(el)
        this.dropBall(el)
        // done()
        el.addEventListener('transitionend', done)
      },
      afterEnter() {
        console.log('=========afterEnter')
        const ball = this.balls.shift()
        ball.show = false
        this.balls.push(ball)
      },
    },
  }
</script>
<style type="text/css" lang="stylus" scoped>
  .control
    position: relative
    font-size: 0
    // background: #ccc
    .reduce, .add
      display: inline-block
      vertical-align: middle
      padding: 6px
      font-size: 24px
      color: rgb(0, 160, 220)
    .count
      margin: 0 4px
      vertical-align: middle
      font-size: 12px
      color: rgb(147, 153, 159)
    .move-enter-active, .move-leave-active
      transition: all 0.4s ease
      transform: rotate(180deg)
    .move-enter, .move-leave-to
      opacity: 0
      transform: translate(24px, 0)
    .ball-container
      position: absolute
      z-index: 100
      top: 10px
      right: 10px
      .ball
        display: inline-block
        transition: all 0.4s cubic-bezier(0.49, -0.29, 0.75, 0.41)
        .inner
          display: inline-block
          width: 16px
          height: 16px
          border-radius: 50%
          background-color: rgb(0, 160, 220)
          transition: all 0.4s linear
        // .drop-enter-to
        //   transition: all .4s cubic-bezier(.51,-0.28,.83,.67)
        //   transform: translate(-200px, 100px)
</style>

