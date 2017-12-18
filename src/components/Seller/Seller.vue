<template>
  <div class="seller">
    <div class="seller-wrapper">
      <div class="overview">
        <div class="title">{{seller.name}}</div>
        <div class="desc">
          <star-rating :size="36" :score="seller.score"></star-rating>
          <span class="count">({{seller.ratingCount}})</span>
          <span class="count">{{seller.sellCount}}</span>
        </div>
        <ul class="delivery">
          <li class="delivery-item">
            <h2>起送价</h2>
            <em class="stress">{{seller.minPrice}}</em><span>元</span>
          </li>
          <li class="delivery-item">
            <h2>商家配送</h2>
            <em class="price">{{seller.deliveryPrice}}</em><span>元</span>
          </li>
          <li class="delivery-item">
            <h2>平均配送时间</h2>
            <em class="price">{{seller.deliveryTime}}</em><span>分钟</span>
          </li>
        </ul>
        <div class="favorite"></div>
      </div>
      <split></split>
      <div class="bulletin">
        <p class="content">{{seller.bulletin}}</p>
        <ul class="supports">
          <li class="support-item">
            <i></i>
            <span class="text"></span>
          </li>
        </ul>
      </div>
      <split></split>
      <div class="pics">
        <h2 class="title">商家实景</h2>
        <div class="pic-wrapper">
          <ul class="pic-list">
            <li class="pic-item" v-for="url in seller.pics"><img :src="url"  width="120" height="90"></li>
          </ul> 
        </div>
      </div>
      <split></split>
      <div class="infos">
        <ul>
          <li class="info-item" v-for="info in seller.infos">{{info}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
  // import BetterScroll from 'better-scroll'
  import StarRating from 'components/StarRating/StarRating'
  // import Split from 'components/Split/Split'
  import response from 'assets/data.json'

  export default {
    name: 'Seller',
    components: {
      StarRating,
    },
    data() {
      return {
        seller: {},
      }
    },
    created() {
      this.seller = response.seller
    },
  }
</script>
<style type="text/css" lang="stylus" scoped>
  
</style>
