<template>
  <div class="cartcontrol">
    <transition name="move">
      <div class="cart-decrease" v-show="food.count>0" @click.stop.prevent="decreaseCount">
        <div class="inner icon-remove_circle_outline"></div>
      </div>
    </transition>
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
          return;//去掉原生的点击事件 只保留better-scroll派发的事件 event._constructed=true表示该事件是better-scroll派发的事件
        }
        if (!this.food.count) {
          Vue.set(this.food, 'count', 1);
        } else {
          this.food.count++;
        }
        this.$emit('cartAdd', event.target);
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
    .cart-decrease
      display inline-block
      padding 6px
      opacity 1
      transform translate3d(0,0,0)
      .inner
        display inline-block
        line-height 24px
        font-size 24px
        color rgb(0,160,220)
        transform rotate(0)
      &.move-enter-active, &.move-leave-active
        transition all 0.2s linear
        .inner
          transition all 0.2s linear
      &.move-enter, &.move-leave-to
        opacity 0
        transform translate3d(24px,0,0)
        .inner
          transform rotate(180deg)
    .cart-count
      display inline-block
      font-size 10px
      vertical-align top
      width 12px
      padding-top 6px
      line-height 24px
      text-align center
      color rgb(147,153,159)
    .cart-add
      display inline-block
      padding 6px
      line-height 24px
      font-size 24px
      color rgb(0,160,220)
</style>

