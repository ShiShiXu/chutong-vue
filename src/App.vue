<template>
  <div id="app">
    <ct-header></ct-header>
    <mian></mian>
    <ct-footer></ct-footer>
<!--    <router-view></router-view>-->
  </div>
</template>

<script>
import ctHeader from './components/header/header.vue';
import ctFooter from './components/footer/footer.vue';
import mian from './components/mian/mian.vue';

export default {
  components: {
    'ct-header': ctHeader,
    'ct-footer': ctFooter,
    'mian': mian
  }
};
</script>

<style lang="less" type="text/less">
  * {
    -webkit-appearance: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    font-family: 'PingFang SC', 'STHeitiSC-Light', 'Helvetica-Light', arial, sans-serif;
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
</style>
