// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App';
import goods from './components/goods/goods.vue';
import ratings from './components/ratings/ratings.vue';
import seller from './components/seller/seller.vue';
import './common/stylus/index.styl';

Vue.config.productionTip = false;
// 使用模块化机制编程，導入Vue和VueRouter，调用 Vue.use(VueRouter)
Vue.use(VueRouter);
Vue.use(VueResource);

// /* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   components: { App },
//   template: '<App/>'
// });
// let app = Vue.extend(App);
// let router = new VueRouter();
// router.map({
//   '/goods': {
//     component: goods
//   }
// });
// router.start(app, '#app');
// 定义路由
const routes = [
  {path: '/goods', component: goods},
  {path: '/ratings', component: ratings},
  {path: '/seller', component: seller}
];

// 创建 router 实例，然后传 `routes` 配置：
const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'active',
  routes
});
var vm = new Vue({
el: '#app',
  router,
  render: h => h(App)
});
Vue.use({
  vm
});
