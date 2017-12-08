<template>
  <div class="control">
    <transition name="move">
      <span class="reduce icon-remove_circle_outline" v-show="food.count>0" @click="reduceCart"></span>
    </transition>
    <span class="count" v-show="food.count>0">{{food.count}}</span>
    <span class="add icon-add_circle" @click="addCart"></span>
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
    // computed: {

    // },
    methods: {
      addCart() {
        // if (!event._contructed) {
        //   return
        // }
        // console.log('click')
        if (!this.food.count) {
          this.$set(this.food, 'count', 1)
          console.log('====')
        } else {
          this.food.count += 1
        }
        this.$emit('update:food', this.food)
      },
      reduceCart() {
        this.food.count -= 1
        // if (this.food.count <= 0) {
        //   this.food.count = 0
        // }
      },
    },
  }
</script>
<style type="text/css" lang="stylus" scoped>
  .control
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
</style>

