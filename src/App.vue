<template>
  <div>
    <v-header :seller="seller"></v-header>
    <div class="tap border-1px">
      <div class="tap-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tap-item">
        <router-link to="/ratings">评价</router-link>
      </div>
      <div class="tap-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <keep-alive>
      <router-view :seller="seller"></router-view>
    </keep-alive>
  </div>
</template>

<script>
  import header from './components/header/header';
  import {urlParse} from './common/js/util'

  const ERR_OK = 0;

  export default {
    data() {
       return {
         seller: {
           id: (() => {
             let queryParam = urlParse();
             return queryParam.id;
           })()
         }
       };
    },
    created() {
      this.$http.get('/api/seller?id='+this.seller.id).then((response) => {
        response = response.body;
        if(response.errno == ERR_OK){
          //获得seller数据
          // this.seller = response.data.data;
          this.seller = Object.assign({},this.seller,response.data.data);
        }
      })
    },
    components: {
      'v-header': header
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus" type="text/stylus">
  @import "./common/stylus/mixin.styl"
  .tap
    display: flex
    width: 100%
    height: 40px
    line-height: 40px
    border-1px(rgba(7,17,27,0.1))
    .tap-item
      flex: 1
      text-align: center
      & > a
        &.active
          color rgb(240,20,20)
</style>
