<template>
  <div>
    <div id="products-banner">
      <ct-header></ct-header>
      <div class="banner-txt">
        <h1>金融科技产品</h1>
        <p>以技术发展与创新为本，我们积极参与中国金融业迈向互联网化、大数据化、智能化的新历程<br>
          共同探索“金融+互联网”新模式</p>
      </div>
    </div>
    <div class="cd-container">
      <div class="products-box">
        <div class="am-u-md-6 products-con products-conbgA">
          <a href="qian21.html">
          <h2>金融产品分发平台</h2>
          <h1>钱而已</h1>
          <p>创新互联网流量渠道模式，<br>为终端用户提供精准的科技<br>金融服务</p>
          </a>
        </div>
        <div class="am-u-md-6 products-con products-conbgB">
          <a href="credit21.html">
          <h2>智能信贷SaaS平台</h2>
          <h1>Credit21</h1>
          <p>内嵌智能风控引擎，为金融<br>机构发展消费金融与信贷业<br>务提供定制化服务</p>
          </a>
        </div>
        <div class="am-u-md-6 products-con products-conbgC">
          <a href="openrisk.html">
          <h2>大数据风控平台</h2>
          <h1>OpenRisk</h1>
          <p>集成各渠道数据源，构建反<br>欺诈与信用评估体系提供大<br>数据征信、风控等服务</p>
          </a>
        </div>
        <div class="am-u-md-6 products-con products-conbgD">
          <a href="openai.html">
          <h2>人工智能基础平台</h2>
          <h1>OpenAI</h1>
          <p>采用并行云架构与集合多种<br>算法，提供大数据风控、智<br>能投顾等服务</p>
          </a>
        </div>
      </div>
    </div>
    <div class="choose-box">
      <div class="cd-container">
        <h1>选择我们</h1>
        <div class="am-g">
          <div class="am-u-md-3 choose-txt">
            <h2>专业专注</h2>
            <p>定位金融科技</p>
            <p>服务领域</p>
          </div>
          <div class="am-u-md-3 choose-txt">
            <h2>高效精准</h2>
            <p>亿级数据模型训练</p>
            <p>人工智能引擎</p>
          </div>
          <div class="am-u-md-3 choose-txt">
            <h2>技术领先</h2>
            <p>核心算法</p>
            <p>毫秒级响应速度</p>
          </div>
          <div class="am-u-md-3 choose-txt choose-txtno">
            <h2>服务保障</h2>
            <p>多家知名企业的</p>
            <p>明智选择</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import ctHeader from '../header/header.vue';
  export default {
    components: {
      'ct-header': ctHeader
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" type="text/less">
  /*平台产品*/
  #products-banner {
    position: relative;
    height: 395px;
    width: 100%;
    background: url('../../assets/images/products_bg.jpg') no-repeat center;
    background-size: cover;
  }


  .products-box{
    max-width: 860px;
    margin: 65px auto;
    overflow: hidden;
  }
  .products-con{
    width: 400px;
    height: 280px;
    float: left;
    overflow: hidden;
    margin: 15px;
  }
  .products-conbgA{
    background: url(../../assets/images/product_pic01.png) no-repeat;
  }
  .products-conbgB{
    background: url(../../assets/images/product_pic02.png) no-repeat;
  }
  .products-conbgC{
    background: url(../../assets/images/product_pic03.png) no-repeat;
  }
  .products-conbgD{
    background: url(../../assets/images/product_pic04.png) no-repeat;
  }
  .products-con h1{
    color: #fff;
    font-size: 24px;
    padding-top: 16px;
  }
  .products-con h2{
    color: #fff;
    font-size: 16px;
    padding-top: 35px;
    font-weight: normal;
  }
  .products-con p{
    color: #fff;
    font-size: 16px;
    padding-top: 70px;
  }

  .choose-box {
    width: 100%;
    background: url(../../assets/images/choose_us.jpg) no-repeat center;
    background-size: cover;
    height: 235px;
    margin: 0 auto;
  }

  .choose-box h1{
    text-align: center;
    padding: 45px 0px 25px;
    color: #3c3c42;
    font-size: 24px;
  }
  .choose-txt{
    background: url(../../assets/images/line.png) right no-repeat;
    float: left;
  }
  .choose-txtno{
    background: none;
  }
  .choose-txt h2{
    text-align: center;
    color: #1e1e23;
    font-size: 18px;
    padding-bottom: 18px;
  }
  .choose-txt p{
    text-align: center;
    color: #1e1e23;
    font-size: 14px;
    line-height: 24px;
  }


</style>
