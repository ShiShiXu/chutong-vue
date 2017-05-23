<template>
  <div>
    <div id="openrisk-banner">
      <div class="banner-txt">
        <div class="title">大数据风控平台</div>
        <div class="name">OpenRisk</div>
      </div>
    </div>
    <div id="product" class="am-container">
      <div class="product-introduce">
        <h1 class="title">产品介绍</h1>
        <div class="text">OpenRisk是触通科技旗下一个大数据风控平台，旨在利用大数据和人工智能技术，构建反欺诈和信用评分体系，<br>为个人和金融机构提供第三方信用风险计量服务，为金融机构运营现金贷等业务保驾护航。</div>
      </div>
      <div class="product-advantage">
        <h1 class="title">产品优势</h1>
        <div class="text am-g">
          <div class="am-u-sm-4">
            <div>
              <img src="../../../assets/images/openRisk_1.svg">
              <p>数据交叉验证分析</p>
            </div>
          </div>
          <div class="am-u-sm-4">
            <div>
              <img src="../../../assets/images/openRisk_2.svg">
              <p>智能化机器建模</p>
            </div>
          </div>
          <div class="am-u-sm-4">
            <div>
              <img src="../../../assets/images/openRisk_3.svg">
              <p>用户画像维度全</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="features-box">
      <h1>功能特性</h1>
      <div class="feature-box">
        <div class="feature-list am-u-md-6">
          <h2>反欺诈模型</h2>
          <p>实现计算机视觉验证人脸和身份证匹配度，帮助客户有效识别、规避潜在欺诈风险</p>
        </div>
        <div class="feature-list am-u-md-6">
          <h2>智能化数值模型</h2>
          <p>实现大规模数据的快速建模并找出隐含复杂非线性关系，对数据可视化，产生直观体验</p>
        </div>
        <div class="feature-list am-u-md-6">
          <h2>完整用户画像</h2>
          <p>可根据实际应用场景，利用模型多维度描绘用户画像综合用户画像，帮助客户更快速为用户授信</p>
        </div>
        <div class="feature-list am-u-md-6">
          <h2>全量数据的描述性建模</h2>
          <p>开发类似于pageRank算法，挖掘人物间关系，利用与黑白名单关联度，算出用户信用综合评分</p>
        </div>
      </div>
    </div>
    <div id="tech-feature">
      <div class="title">技术特点</div>
      <div class="name">Open Risk</div>
      <div class="tree">
        <img src="../../../assets/images/tree_6.png">
      </div>
      <div class="tech-btn-box">
        <span class="tech-btn-a">毫秒级数据响应</span>
        <span class="tech-btn-b">消息队列kafka实时数据</span>
        <span class="tech-btn-c">流计算框架storm处理实时数据</span>
        <span class="tech-btn-d">海量数据集成，处理，查询，备份</span>
        <span class="tech-btn-e">Map-reduce完成常规ETL数据处理</span>
        <span class="tech-btn-f">spark完成交互式应用</span>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
    export default {};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" type="text/less" scoped>
/*大数据风控平台*/
#openrisk-banner {
  position: relative;
  height: 396px;
  width: 100%;
  background: url(../../../assets/images/openrisk.jpg) no-repeat center;
  background-size: cover;
  .banner-txt {
    max-width: 1200px;
    padding: 160px 0 0 200px;
    .title {
      font-size: 24px;
      line-height: 24px;
      color: #fff;
    }
    .name {
      margin-top: 30px;
      margin-bottom: 40px;
      font-size: 40px;
      line-height: 40px;
      color: #fff;
    }
  }
}
#product {
  max-height: 1200px;
  text-align: center;
  .product-introduce {
    .title {
      font-size: 20px;
      line-height: 20px;
      color: #3c3c42;
      margin-top: 100px;
    }
    .text {
      color: #3c3c42;
      font-size: 16px;
      line-height: 32px;
      margin-top: 30px;
    }
  }
  .product-advantage {
    .title {
      font-size: 20px;
      line-height: 20px;
      color: #3c3c42;
      margin-top: 100px;
    }
    .text {
      margin-top: 50px;
      margin-bottom: 90px;
      p{
        padding-top: 25px;
        color: #3c3c42;
        font-size: 18px;
      }
    }
  }
}
#features-box{
  height: 500px;
  width: 100%;
  background: url(../../../assets/images/p_boxbg3.jpg) no-repeat center;
  background-size: cover;
  h1 {
    font-size: 20px;
    line-height: 20px;
    color: #3c3c42;
    padding: 60px 0 40px;
    text-align: center;
  }
}
.feature-box {
  max-width: 940px;
  margin: 0 auto;
  overflow: hidden;
}
.feature-list {
  width: 440px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 4px 1px rgba(0, 0, 0, 0.2);
  float: left;
  margin: 15px;
  padding: 15px;
  h2 {
    width: 410px;
    float: left;
    background: url(../../../assets/images/ico_check.png) no-repeat 0 5px;
    font-size: 16px;
    color: #3c3c42;
    padding: 0 0 10px 30px;
  }
  p {
    padding-left: 32px;
    font-size: 14px;
    line-height: 24px;
  }
  &:last-child {
    float: left !important;
  }
}
#tech-feature {
  padding: 90px 0 110px;
  overflow: hidden;
  .title {
    font-size: 20px;
    line-height: 20px;
    color: #3c3c42;
    font-weight: bold;
    text-align: center;
    margin-bottom: 50px;
  }
  .name {
    position: relative;
    font-size: 32px;
    line-height: 32px;
    color: #534ff0;
    text-align: center;
    width: 400px;
    margin: 0 auto;
    padding-bottom: 10px;
  }
  .tree {
    width: 716px;
    height: auto;
    margin: 0 auto;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .tech-btn-box {
    max-width: 1000px;
    display: block;
    margin: 0 auto;
    .tech-btn-a {
      position: relative;
      display: inline-block;
      height: 46px;
      border-radius: 23px;
      background-color: #fff;
      box-shadow: 0 1px 4px 1px rgba(64, 113, 255, 0.2);
      font-size: 18px;
      line-height: 46px;
      text-align: center;
      width: 180px;
      top:-55px;
      left: 56px;
      float: left;
      &::before {
        position: absolute;
        top: -6px;
        left: 84px;
        content: ' ';
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background-color: #534ff0;
      }
    }
    .tech-btn-b {
      position: relative;
      display: inline-block;
      height: 46px;
      border-radius: 23px;
      background-color: #fff;
      box-shadow: 0 1px 4px 1px rgba(64, 113, 255, 0.2);
      font-size: 18px;
      line-height: 46px;
      text-align: center;
      width: 220px;
      top:-55px;
      left: 100px;
      float: left;
      &::before {
        position: absolute;
        top: -6px;
        left: 108px;
        content: ' ';
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background-color: #534ff0;
      }
    }
    .tech-btn-c {
      position: relative;
      display: inline-block;
      height: 46px;
      border-radius: 23px;
      background-color: #fff;
      box-shadow: 0 1px 4px 1px rgba(64, 113, 255, 0.2);
      font-size: 18px;
      line-height: 46px;
      text-align: center;
      width: 270px;
      top:-55px;
      left: 175px;
      float: left;
      &::before {
        position: absolute;
        top: -6px;
        left: 123px;
        content: ' ';
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background-color: #534ff0;
      }
    }
    .tech-btn-d {
      position: relative;
      display: inline-block;
      height: 46px;
      border-radius: 23px;
      background-color: #fff;
      box-shadow: 0 1px 4px 1px rgba(64, 113, 255, 0.2);
      font-size: 18px;
      line-height: 46px;
      text-align: center;
      width: 300px;
      top:5px;
      left: -570px;
      float: left;
      &::before {
        position: absolute;
        top: -6px;
        left: 142px;
        content: ' ';
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background-color: #534ff0;
      }
    }
    .tech-btn-e {
      position: relative;
      display: inline-block;
      height: 46px;
      border-radius: 23px;
      background-color: #fff;
      box-shadow: 0 1px 4px 1px rgba(64, 113, 255, 0.2);
      font-size: 18px;
      line-height: 46px;
      text-align: center;
      width: 300px;
      top:-40px;
      left: 425px;
      float: left;
      &::before {
        position: absolute;
        top: -6px;
        left: 132px;
        content: ' ';
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background-color: #534ff0;
      }
    }
    .tech-btn-f {
      position: relative;
      display: inline-block;
      height: 46px;
      border-radius: 23px;
      background-color: #fff;
      box-shadow: 0 1px 4px 1px rgba(64, 113, 255, 0.2);
      font-size: 18px;
      line-height: 46px;
      text-align: center;
      width: 220px;
      top:-40px;
      left: 455px;
      float: left;
      &::before {
        position: absolute;
        top: -6px;
        left: 92px;
        content: ' ';
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background-color: #534ff0;
      }
    }
  }

}

</style>
