<template>
  <div id="app">
    <router-view></router-view>
    <ct-footer></ct-footer>
  </div>
</template>

<script>
import ctFooter from './components/footer/footer.vue';
import mainContent from './components/main/main.vue';

export default {
  components: {
    'ct-footer': ctFooter,
    'mainContent': mainContent
  }
};
</script>

<style lang="less" type="text/less">
  * {
    -webkit-appearance: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    font-family: "Helvetica Neue", Helvetica, Arial, "PingFang SC", "Hiragino Sans GB", "WenQuanYi Micro Hei", "Microsoft Yahei", sans-serif;
    &:before, &:after {
      box-sizing: border-box;
    }
  }
  html, body {
    position: relative;
  }
  .am-container {
    max-width: 1130px;
    padding: 0;
  }
  .am-with-topbar-fixed-top {
    padding: 0;
  }
  @media only screen and (min-width: 641px) {
    .am-topbar-nav>li>a:after {
      border: 0 solid transparent;
    }
  }

</style>
