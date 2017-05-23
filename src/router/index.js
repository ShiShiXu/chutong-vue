import Vue from 'vue';
import VueRouter from 'vue-router';
import mainContent from '@/components/main/main.vue';
import productIndex from '@/components/product/product-index.vue';
  import qian21 from '@/components/product/productList/qian21.vue';
  import credit21 from '@/components/product/productList/credit21.vue';
  import openrisk from '@/components/product/productList/openrisk.vue';
  import openai from '@/components/product/productList/openai.vue';
import product from '@/components/product/product.vue';
import solution from '@/components/solution/solution.vue';
import business from '@/components/business/business.vue';
import about from '@/components/about/about.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  /* 开启HTML5 的 history模式 */
  mode: 'history',
  /* 新打开页面滚动到页面顶部（需要打开H5的 history 模式） */
  scrollBehavior (to, from, savedPosition) {
    // return 期望滚动到哪个的位置
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
  routes: [
    {
      path: '/',
      name: 'mainContent',
      component: mainContent
    },
    {
      path: '/product',
      name: '',
      component: product,
      children: [
        {
          /* 默认路由 */
          path: '',
          name: 'productIndex',
          component: productIndex
        },
        {
          path: 'credit21',
          name: 'credit21',
          component: credit21
        },
        {
          path: 'qian21',
          name: 'qian21',
          component: qian21
        },
        {
          path: 'openrisk',
          name: 'openrisk',
          component: openrisk
        },
        {
          path: 'openai',
          name: 'openai',
          component: openai
        }
      ]
    },
    {
      path: '/solution',
      name: 'solution',
      component: solution
    },
    {
      path: '/business',
      name: 'business',
      component: business
    },
    {
      path: '/about',
      name: 'about',
      component: about
    }
  ]

});

export default router;
