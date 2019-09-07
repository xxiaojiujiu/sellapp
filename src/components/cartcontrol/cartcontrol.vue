<template>
  <div class="cartcontrol">
    <div class="cart-decrease icon-remove_circle_outline" v-show="food.count>0" @click.stop.prevent="decreaseCount"></div>
    <div class="cart-count" v-show="food.count>0">{{food.count}}</div>
    <div class="cart-add icon-add_circle" @click.stop.prevent="addCount"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Vue from 'vue';
  export default {
    props: {
      food: {
        type: Object
      }
    },
    created() {

    },
    methods: {
      addCount(event) {
        if (!event._constructed){
          return;//不是手机端的情况
        }
        if (!this.food.count) {
          Vue.set(this.food, 'count', 1);
        } else {
          this.food.count++;
        }
      },
      decreaseCount(event) {
        if (!event._constructed){
          return;//不是手机端的情况
        }
        if (this.food.count) {
          this.food.count--;
        }
      }//decreaseCount
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus" type="text/stylus">
  .cartcontrol
    font-size 0px
    .cart-decrease, .cart-add
      display inline-block
      padding 6px
      line-height 24px
      font-size 24px
      color rgb(0,160,220)
    .cart-count
      display inline-block
      font-size 10px
      vertical-align top
      width 12px
      padding-top 6px
      line-height 24px
      text-align center
      color rgb(147,153,159)
</style>

