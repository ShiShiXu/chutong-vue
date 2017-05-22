<template>
  <!-- 页头和轮播图 -->
  <div id="banner">
    <div class="am-container">
      <ct-header></ct-header>
      <div class="title" data-am-scrollspy="{animation:'fade', delay: 200}">Business AI  &  Big data</div>
      <div class="slogan" data-am-scrollspy="{animation:'fade', delay: 300}">专注于人工智能的金融科技专家</div>
      <div class="description" data-am-scrollspy="{animation:'fade', delay: 400}">
        大数据、机器学习的先进技术大爆发，新的时代已经到来<br>
        我们希望能成为新时代的引领者，所以我们专注于新一代人工智能在金融行业的应用<br>
        提供系统建设、数据运营、智能风控、安全管理等精准化解决方案
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import $ from 'jquery';
  import ctHeader from '../header/header.vue';
  export default {
    components: {
      'ct-header': ctHeader
    },
    beforeMount() {},
    mounted() {
      $(function () {
        let $title = $('.title');
        let $slogan = $('.slogan');
        let $description = $('.description');
        $title.scrollspy({
          animation: 'fade',
          delay: 300
        });
        $slogan.scrollspy({
          animation: 'fade',
          delay: 400
        });
        $description.scrollspy({
          animation: 'fade',
          delay: 500
        });
      });
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" type="text/less" scoped>
  #banner {
    position: relative;
    height: 600px;
    background-image: url('../../assets/images/banner.png');
    margin: 0 auto;
    .title {
      color: #fff;
      font-size: 50px;
      line-height: 40px;
      padding-top: 180px;
    }
    .slogan {
      color: #fff;
      font-size: 36px;
      line-height: 36px;
      margin-top: 20px;
    }
    .description {
      font-size: 16px;
      line-height: 32px;
      color: #a5bbf2;
      margin-top: 40px;
    }
  }
</style>
