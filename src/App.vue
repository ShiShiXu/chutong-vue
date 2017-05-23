<template>
  <div id="app">
    <ct-header></ct-header>
    <router-view></router-view>
    <ct-footer></ct-footer>
  </div>
</template>

<script>
import ctHeader from './components/header/header.vue';
import mainContent from './components/main/main.vue';
import ctFooter from './components/footer/footer.vue';

export default {
  components: {
    'ct-header': ctHeader,
    'mainContent': mainContent,
    'ct-footer': ctFooter
  },
  mounted() {
    let hash = document.location.hash;
    let title = document.getElementsByTagName('title')[0].innerText;
    console.log(hash + title);
    console.log(this.$route);
    console.log(this.$route.path);
    console.log(this.$route.params);
    console.log(this.$route.query);
    console.log(this.$route.hash);
    console.log(this.$route.fullPath);
    console.log(this.$route.matched);
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
