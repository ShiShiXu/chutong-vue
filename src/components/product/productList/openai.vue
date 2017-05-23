<template>
  <div>
    <div id="openai-banner">
      <div class="banner-txt">
        <div class="title">人工智能基础平台</div>
        <div class="name">OpenAi</div>
      </div>
    </div>
    <div id="product" class="am-container">
      <div class="product-introduce">
        <h1 class="title">产品介绍</h1>
        <div class="text">作为触通科技旗下的另一款重点产品OpenAI（人工智能平台）与大数据平台无缝对接<br>集成了逻辑回归，深度学习，随机森林等算法，采用并行计算架构，可以为上层提供智能风控，智能投顾等服务。</div>
      </div>
      <div class="product-advantage">
        <h1 class="title">产品优势</h1>
        <div class="text am-g">
          <div class="am-u-sm-4">
            <div>
              <img src="../../../assets/images/openAI_1.svg">
              <p>人工智能引擎</p>
            </div>
          </div>
          <div class="am-u-sm-4">
            <div>
              <img src="../../../assets/images/openAI_2.svg">
              <p>大数据处理平台基础</p>
            </div>
          </div>
          <div class="am-u-sm-4">
            <div>
              <img src="../../../assets/images/openAI_3.svg">
              <p>海量实时数据集成</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="features-box">
      <h1>功能特性</h1>
      <div class="feature-box">
        <div class="feature-list am-u-md-6">
          <h2>数据的快速存储和加载功能</h2>
          <p>基于Hadoop/Spark集群，通过分布式文件系统HDFS的数据接口，提供数据整合和数据质量管理等技术，支持海量数据快速存储和加载</p>
        </div>
        <div class="feature-list am-u-md-6">
          <h2>数据预处理和统计分析</h2>
          <p>采用多种数据处理和统计分析技术，通过交互式和可视化工具，实现数据处理、变量分析和数据可视化等</p>
        </div>
        <div class="feature-list am-u-md-6">
          <h2>预测性建模及模型评判</h2>
          <p>集合众多主流的机器学习算法，结合Hadoop / Spark平台的分布式能力，支持基于海量数据集的全量数据描述性建模</p>
        </div>
        <div class="feature-list am-u-md-6">
          <h2>全量数据的描述性建模</h2>
          <p>基于海量数据的描述性探究建模结果，通过对模型和数据的再处理，得到数据的独立化预测性模型，实现了对测试数据的一键式预测</p>
        </div>
      </div>
    </div>
    <div id="tech-feature">
      <div class="title">技术特点</div>
      <div class="name">Open AI</div>
      <div class="tree">
        <img src="../../../assets/images/tree_3.png">
      </div>
      <div class="tech-btn-box">
        <span class="tech-btn">智能化授信流程</span>
        <span class="tech-btn">大数据风控模型</span>
        <span class="tech-btn">业务环节灵活定制</span>
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
  #openai-banner {
    position: relative;
    height: 396px;
    width: 100%;
    background: url(../../../assets/images/openai.jpg) no-repeat center;
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
    background: url(../../../assets/images/p_boxbg4.jpg) no-repeat center;
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
    min-height: 140px;
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
      color: #8a00ff;
      text-align: center;
      width: 400px;
      margin: 0 auto;
      padding-bottom: 10px;
    }
    .tree {
      width: 485px;
      height: auto;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .tech-btn-box {
      font-size: 0;
      width: 656px;
      .tech-btn {
        position: relative;
        display: inline-block;
        width: 180px;
        height: 46px;
        border-radius: 23px;
        background-color: #fff;
        box-shadow: 0 1px 4px 1px rgba(138, 0, 255, 0.2);
        font-size: 18px;
        line-height: 46px;
        text-align: center;
        &:nth-child(2) {
          margin: 0 58px;
        }
        &::before {
          position: absolute;
          top: -6px;
          left: 84px;
          content: ' ';
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background-color: #8a00ff;
        }
      }
    }

  }

</style>
