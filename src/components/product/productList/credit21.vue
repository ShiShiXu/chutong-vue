<template>
  <div>
    <div id="credit-banner">
      <div class="banner-txt">
        <div class="title">智能信贷SaaS平台</div>
        <div class="name">Credit21</div>
        <div class="download">
          <button class="experience">申请体验</button>
        </div>
      </div>
    </div>

    <div id="product" class="am-container">
      <div class="product-introduce">
        <h1 class="title">产品介绍</h1>
        <div class="text">“Credit21”是触通科技旗下的智能信贷业务SaaS平台，与分发平台“钱而已”连接<br>并内嵌大数据智能风控引擎“OpenRisk”,
          覆盖多种消费场景，可满足金融机构发展消费金融与信贷业务的多样化需求。</div>
      </div>
      <div class="product-advantage">
        <h1 class="title">产品优势</h1>
        <div class="am-g">
          <div class="am-u-sm-4">
            <div class="item-logo">
              <img src="../../../assets/images/credit21_1.svg">
            </div>
            <div class="text">应用场景多元化</div>
          </div>
          <div class="am-u-sm-4">
            <div class="item-logo">
              <img class="item-logo-mid" src="../../../assets/images/credit21_2.svg">
            </div>
            <div class="text">借贷风险最小化</div>
          </div>
          <div class="am-u-sm-4">
            <div class="item-logo">
              <img src="../../../assets/images/credit21_3.svg">
            </div>
            <div class="text">资金利用最大化</div>
          </div>
        </div>
      </div>
    </div>

    <div id="func-feature">
      <div class="title">功能特性</div>
      <div class="am-container">
        <div class="am-u-sm-12">
          <div class="feature-box">
            <span class="feature-img">
              <img src="../../../assets/images/ico_check.png">
            </span>
            <span class="feature-box-text">多端应用的覆盖，终端用户申请便捷</span>
          </div>
          <div class="feature-box">
            <span class="feature-img">
              <img src="../../../assets/images/ico_check.png">
            </span>
            <span class="feature-box-text">整合多家权威数据源，实现精准化需求分析</span>
          </div>
        </div>
        <div class="am-u-sm-12">
          <div class="feature-box">
            <span class="feature-img">
              <img src="../../../assets/images/ico_check.png">
            </span>
            <span class="feature-box-text">参数等参数可灵活配置，应用场景多元化</span>
          </div>
          <div class="feature-box">
            <span class="feature-img">
              <img src="../../../assets/images/ico_check.png">
            </span>
            <span class="feature-box-text">贷后体系完善，降低坏账与逾期率</span>
          </div>
        </div>
        <div class="am-u-sm-12">
          <div class="feature-box">
            <span class="feature-img">
              <img src="../../../assets/images/ico_check.png">
            </span>
            <span class="feature-box-text">融合多渠道管理，财务管理更轻松</span>
          </div>
          <div class="feature-box">
            <span class="feature-img">
              <img src="../../../assets/images/ico_check.png">
            </span>
            <span class="feature-box-text">数据报表功能，可做定期分析汇总</span>
          </div>
        </div>
      </div>
    </div>

    <div id="tech-feature">
      <div class="title">技术特点</div>
      <div class="name">Credit21</div>
      <div class="tree">
        <img src="../../../assets/images/tree_3.png">
      </div>
      <div class="tech-btn-box">
        <span class="tech-btn">智能化授信流程</span>
        <span class="tech-btn">大数据风控模型</span>
        <span class="tech-btn">业务环节灵活定制</span>
      </div>
    </div>

    <div id="footer-download">
      <div class="download">
        <button class="experience">立即体验</button>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" type="text/less" scoped>
#credit-banner {
  position: relative;
  height: 396px;
  width: 100%;
  background: url(../../../assets/images/credit21.jpg) no-repeat center;
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
    .download {
      font-size: 0;
      .experience {
        width: 100px;
        height: 40px;
        border-radius: 5px;
        font-size: 14px;
        color: #fff;
        background-color: transparent;
        border: 1px solid #fff;
        &:focus {
          outline: none;
        }
      }
    }
  }
}

#product {
  max-height: 1200px;
  text-align: center;
  padding: 100px 0 90px;
  .product-introduce {
    .title {
      font-size: 20px;
      line-height: 20px;
      color: #3c3c42;
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
      margin-bottom: 50px;
    }
    .item-logo {
      height: 80px;
      .item-logo-mid {
        position: relative;
        top: 4px;
      }
    }
    .text {
      color: #3c3c42;
      font-size: 16px;
      line-height: 16px;
      margin-top: 25px;
    }
  }
}

#func-feature {
  width: 100%;
  height: 400px;
  padding: 60px 0 70px;
  background-image: url(../../../assets/images/p_boxbg2.jpg);
  background-size: cover;
  .title {
    font-size: 20px;
    line-height: 20px;
    font-weight: bold;
    color: #3c3c42;
    text-align: center;
    margin-bottom: 40px;
  }
  .am-container {
    text-align: center;
    .am-u-sm-12 {
      margin-bottom: 25px;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
  .feature-box {
    display: inline-block;
    position: relative;
    width: 386px;
    height: 50px;
    font-size: 16px;
    line-height: 50px;
    text-align: left;
    background-color: #fff;
    border-radius: 8px;
    padding-left: 50px;
    box-shadow: 0 1px 4px 1px rgba(0, 0, 0, 0.2);
    &:last-child {
      margin-left: 40px;
    }
    .feature-img {
      position: absolute;
      left: 18px;
      display: inline-block;
      height: 100%;
      text-align: center;
    }
    .feature-box-text {
      width: 100%;
    }
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
    color: #00cd82;
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
      box-shadow: 0 1px 4px 1px rgba(0, 205, 130, 0.2);
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
        background-color: #00cd82;
      }
    }
  }

}

#footer-download {
  width: 100%;
  height: 80px;
  background-image: linear-gradient(90deg,#00cd82,#d8ff00);
  text-align: center;
  padding: 20px 0;
  .download {
    font-size: 0;
    .experience {
      width: 145px;
      height: 42px;
      border-radius: 5px;
      font-size: 14px;
      color: #fff;
      background-color: transparent;
      border: 1px solid #fff;
      &:focus {
        outline: none;
      }
    }
  }
}

</style>
