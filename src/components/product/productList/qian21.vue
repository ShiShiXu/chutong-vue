<template>
  <div>
    <div id="qian-banner">
      <div class="banner-txt">
        <div class="title">金融产品分发平台</div>
        <div class="name">钱而已</div>
        <div class="download">
          <button class="iOS">iOS</button>
          <button class="android">Android</button>
        </div>
      </div>
    </div>

    <div id="product" class="am-container">
      <div class="product-introduce">
        <h1 class="title">产品介绍</h1>
        <div class="text">“钱而已”是触通科技旗下的金融产品分发平台，通过创新的互联网流量渠道运营模式，结合模型的有效判定，<br> 为金融机构打通互联网通道，可助其精准获客并有效甄别客户质量。</div>
      </div>
      <div class="product-advantage">
        <h1 class="title">产品优势</h1>
        <div class="am-g">
          <div class="am-u-sm-4">
            <div class="item-logo">
              <img src="../../../assets/images/qian21_1.svg">
            </div>
            <div class="text">人工智能引擎</div>
          </div>
          <div class="am-u-sm-4">
            <div class="item-logo">
              <img class="item-logo-mid" src="../../../assets/images/qian21_2.svg">
            </div>
            <div class="text">金融应用分发推广渠道</div>
          </div>
          <div class="am-u-sm-4">
            <div class="item-logo">
              <img src="../../../assets/images/qian21_3.svg">
            </div>
            <div class="text">大数据风控把控信用评估</div>
          </div>
        </div>
      </div>
    </div>

    <div id="func-feature">
      <div class="title">功能特性</div>
      <div class="feature-box">
        <span class="feature-img">
          <img src="../../../assets/images/ico_check.png">
        </span>
        <span class="feature-box-text">为个人用户提供贷前、贷中和贷后的一站式智能信贷管家服务</span>
      </div>
      <div class="feature-box">
        <span class="feature-img">
          <img src="../../../assets/images/ico_check.png">
        </span>
        <span class="feature-box-text">为金融机构提供一个可精准匹配优质客户的产品分发渠道</span>
      </div>
    </div>

    <div id="tech-feature">
      <div class="title">技术特点</div>
      <div class="name">钱而已</div>
      <div class="tree">
        <img src="../../../assets/images/tree_3.png">
      </div>
      <div class="tech-btn-box">
        <span class="tech-btn">智能推荐引擎</span>
        <span class="tech-btn">反欺诈验证程序</span>
        <span class="tech-btn">大数据风控技术</span>
      </div>
    </div>

    <div id="footer-download">
      <div class="download">
        <button class="iOS">iOS</button>
        <button class="android">Android</button>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" type="text/less" scoped>
#qian-banner {
  position: relative;
  height: 396px;
  width: 100%;
  background: url(../../../assets/images/qian21.jpg) no-repeat center;
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
      display: none;
      font-size: 0;
      .iOS {
        margin-right: 20px;
      }
      .iOS, .android {
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
  height: 326px;
  padding: 60px 0 70px;
  background-image: url(../../../assets/images/p_boxbg1.jpg);
  background-size: cover;
  .title {
    font-size: 20px;
    line-height: 20px;
    font-weight: bold;
    color: #3c3c42;
    text-align: center;
    margin-bottom: 40px;
  }
  .feature-box {
    position: relative;
    width: 512px;
    height: 50px;
    font-size: 16px;
    line-height: 50px;
    text-align: center;
    background-color: #fff;
    border-radius: 8px;
    margin-bottom: 30px;
    padding-left: 30px;
    box-shadow: 0 1px 4px 1px rgba(0, 0, 0, 0.2);
    &:last-child {
      margin-bottom: 0;
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
    color: #fb9400;
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
      box-shadow: 0 1px 4px 1px rgba(251, 148, 0, 0.2);
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
        background-color: #fb9400;
      }
    }
  }

}

#footer-download {
  display: none;
  width: 100%;
  height: 80px;
  background-image: linear-gradient(90deg,#ff8a00,#ffde00);
  text-align: center;
  padding: 20px 0;
  .download {
    font-size: 0;
    .iOS {
      margin-right: 20px;
    }
    .iOS, .android {
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

</style>
