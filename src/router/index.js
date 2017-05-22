import Vue from 'vue';
import Router from 'vue-router';
import mainContent from '@/components/main/main.vue';
import product from '@/components/product/product.vue';
import solution from '@/components/solution/solution.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'mainContent',
      component: mainContent
    },
    {
      path: '/product',
      name: 'product',
      component: product
    },
    {
      path: '/solution',
      name: 'solution',
      component: solution
    }
  ]
});
