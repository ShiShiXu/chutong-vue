<template>
  <div>
    <div id="solution-banner">
      <ct-header></ct-header>
      <div class="banner-txt">
        <h1 data-am-scrollspy="{animation:'fade', delay: 200}">金融行业解决方案</h1>
        <p data-am-scrollspy="{animation:'fade', delay: 300}">以大数据、人工智能技术为基础，为金融机构提供具有产业化和产品化能力的整体解决方案</p>
      </div>
      <div class="p-mask"></div>
    </div>
    <div class="am-g" id="solution-box">
      <div class="solution-box">
          <div class="solution-con">
              <div class="row">
                  <div class="solution-boxleft"><img src="../../assets/images/s_01.jpg"></div>
                    <div class="solution-boxright" data-am-scrollspy="{animation:'fade', delay: 200}">
                      <i><img src="../../assets/images/index5.svg" width="64" height="64"></i>
                        <hr class="hrline_s1">
                        <h1>大数据风控</h1>
                        <div id="service2"></div>
                        <p>和国内80%第三方征信和数据机构合作，通过多种模型训练深度分析多维数据，为金融机构的相关业务提供全周期的风控服务</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="solution-box solution-bg">
          <div class="solution-con">
              <div class="row">
                  <div class="solution-boxleft pc_r"><img src="../../assets/images/s_02.jpg"></div>
                    <div class="solution-boxright" data-am-scrollspy="{animation:'fade', delay: 200}">
                      <i><img src="../../assets/images/index1.svg" width="64" height="64"></i>
                        <hr class="hrline_s2">
                        <h1>反欺诈信息验证</h1>
                        <div id="service3"></div>
                        <p>根据用户所提交的各项信息，经过反欺诈识别模型的有效性判断，识别信息的真实性，从而帮助金融机构减少审核成本及诈骗损失</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="solution-box">
          <div class="solution-con">
              <div class="row">
                  <div class="solution-boxleft"><img src="../../assets/images/s_03.jpg"></div>
                    <div class="solution-boxright" data-am-scrollspy="{animation:'fade', delay: 200}">
                      <i><img src="../../assets/images/index3.svg" width="64" height="64"></i>
                        <hr class="hrline_s3">
                        <h1>业务系统减负</h1>
                        <p>根据金融机构的实际业务需求，可针对性地定制开发相应的功能、组件或管理系统，从而实现互联网化运营转型</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="solution-box solution-bg">
          <div class="solution-con">
              <div class="row">
                  <div class="solution-boxleft pc_r"><img src="../../assets/images/s_04.jpg"></div>
                    <div class="solution-boxright" data-am-scrollspy="{animation:'fade', delay: 200}">
                      <i><img src="../../assets/images/index2.svg" width="64" height="64"></i>
                        <hr class="hrline_s4">
                        <h1>信用评估查询</h1>
                        <p>综合评估个人信用状况，提供个人信用评估查询，另一方面可为金融机构提供查询功能，以确保用户信息的正确和完整性</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="solution-box">
          <div class="solution-con">
              <div class="row">
                  <div class="solution-boxleft"><img src="../../assets/images/s_05.jpg"></div>
                    <div class="solution-boxright" data-am-scrollspy="{animation:'fade', delay: 200}">
                      <i><img src="../../assets/images/index4.svg" width="64" height="64"></i>
                        <hr class="hrline_s5">
                        <h1>量化获客渠道</h1>
                        <p>通过自建应用分发渠道或对接第三方渠道，经过大数据风控技术筛选用户质量</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="forward-box">
          <h1>更多期待</h1>
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
  import $ from 'jquery';
  import ctHeader from '../header/header.vue';
  export default {
    components: {
      'ct-header': ctHeader
    },
    mounted() {
      $(function() {
        let $h1 = $('.banner-txt h1');
        let $p = $('.banner-txt p');
        $h1.scrollspy({
          animation: 'fade',
          delay: 200
        });
        $p.scrollspy({
          animation: 'fade',
          delay: 300
        });
        let $solutionBox = $('.solution-boxright');
        $solutionBox.scrollspy({
          animation: 'fade',
          delay: 200
        });
      });
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" type="text/less">
/*解决方案*/
#solution-banner {
  position: relative;
  height: 395px;
  width: 100%;
  background: url(../../assets/images/solution_banner.jpg) no-repeat center;
  background-size: cover;
}
.p-mask {
  position: absolute;
  top: 237px;
  height: 205px;
  width: 100%;
  background-image: linear-gradient(0deg,rgb(255, 255, 255),rgba(255, 255, 255, 0));
}
#solution-box{
  margin-top: 80px;
}
.solution-box {
  width:100%;
  margin:0px auto 0px auto;
  overflow:hidden;
  height: 350px;
  max-width: 1200px;
}
.solution-bg {
  background:#f5f6fa;
}
.solution-con {
  width:1000px;
  margin:0px auto 0px auto;
}
.solution-boxleft {
  width:400px;
  float:left;
  height:350px;
}
.pc_r {
  float:right;
}
.solution-boxright{
  width:600px;
  float:left;
  height:350px;
  text-align:center;
  i{
    width:600px;
    margin-top:50px;
    display:block;
  }
  .hrline_s1 {
    width: 30px;
    background:#ecac00;
    border-color:#ecac00;
    margin:30px auto 30px auto;
    text-align:center;
    height:3px;
  }
  .hrline_s2 {
    width: 30px;
    background:#ae2ada;
    border-color:#ae2ada;
    margin:30px auto 30px auto;
    text-align:center;
    height:3px;
  }
  .hrline_s3 {
    width: 30px;
    background:#00bdec;
    border-color:#00bdec;
    margin:30px auto 30px auto;
    text-align:center;
    height:3px;
  }
  .hrline_s4 {
    width: 30px;
    background:#005eec;
    border-color:#005eec;
    margin:30px auto 30px auto;
    text-align:center;
    height:3px;
  }
  .hrline_s5 {
    width: 30px;
    background:#ec5e00;
    border-color:#ec5e00;
    margin:30px auto 30px auto;
    text-align:center;
    height:3px;
  }
  h1 {
    width:600px;
    font-size:24px;
    color:#333;
    font-weight:normal;
    line-height:36px;
    margin-bottom:30px;
  }
  p {
    width:500px;
    margin:0px 50px;
    font-size:14px;
    color:#333;
    line-height:24px;
  }
}
.forward-box{
  max-width: 1000px;
  margin: 40px auto 80px;
  overflow: hidden;
  border-top: 1px solid #c9c9c9;
  h1 {
    width: 100%;
    text-align: center;
    color: #949494;
    font-weight: normal;
    padding-top: 40px;
  }
}
</style>
