<template>
  <div class="shopcart">
    <div class="content">
      <div class="left">
        <div class="icon-wrapper">
          <span class="icon"><i class="icon-shopping_cart"></i> </span>
        </div>
        <!-- <span class="icon"><i class="icon-shopping_cart"></i> </span> -->
        <span class="total">￥{{totalPrice}}</span>
        <span class="delivery">另需配送费{{deliveryPrice}}元</span> 
      </div>
      <div class="right">
        ￥{{minPrice}}元起送
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Shopcart',
    props: {
      chosenFoods: {
        type: Array,
        default() {
          return [
            {
              price: 99,
              count: 1,
            },
          ]
        },
      },
      deliveryPrice: {
        type: Number,
        default: 0,
      },
      minPrice: {
        type: Number,
        default: 0,
      },
    },
    computed: {
      totalPrice() {
        let total = 0
        this.chosenFoods.forEach((item) => {
          total += item.price * item.count
        })
        return total
      },
    },
  }
</script>
<style type="text/css" lang="stylus" scoped>
 .shopcart
   position: fixed
   bottom: 0
   width: 100%
   height: 48px
   .content
     display: flex
     height: 100%
     color: rgba(255,255,255,0.4)
     background-color: #141d17
     .left
       flex: 1
       height: 100%
       font-size: 0
       .icon-wrapper
         display: inline-block
         position: relative
         top: -10px
         margin: 0 12px
         padding: 6px
         width: 56px
         height: 56px
         box-sizing: border-box
         border-radius: 50%
         text-align: center
         background-color: #141d17
         .icon
           display: inline-block
           width: 100%
           height: 100%
           border-radius: 50%
           line-height: 44px
           font-size: 24px
           background-color: #2b343c
       .total
         display: inline-block
         vertical-align: top
         margin-top: 12px
         padding-right: 12px
         line-height: 24px
         box-sizing: border-box
         border-right: 1px solid rgba(255,255,255,0.1)
         font-size: 16px
         font-weight: 700
       .delivery
         display: inline-block  
         vertical-align: top
         margin-top: 12px
         margin-left: 12px
         line-height: 24px
         font-size: 10px  
     .right
       flex: 0 0 105px
       width: 105px
       height: 48px
       text-align: center
       line-height: 48px
       font-size: 12px
       font-weight: 700
       background: #2b333b
</style>
