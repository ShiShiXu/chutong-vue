<template>
  <div id="main">
    <!-- 我们的优势 -->
    <div id="advantage-f" class="am-container">
      <div class="title">专业 高效 精准 分享</div>
      <div class="slogan">我们致力于为金融机构提供可靠的商业数据、智能风控等多项服务，提升决策效力，提高服务效率</div>
      <div class="adv-img-wrapper am-container">
        <div class="adv-img-box am-u-sm-4">
          <div class="box-img">
            <img src="../../assets/images/adv1.png">
          </div>
          <div class="mask"></div>
          <div class="adv-title">
            大数据风控平台
            <div class="adv-desc line1">以大数据、人工智能技术为基础，为金融机</div>
            <div class="adv-desc line2">构提供具有产业化和产品化能力的整体解决</div>
            <div class="adv-desc line3">方案</div>
          </div>
        </div>
        <div class="adv-img-box am-u-sm-4">
          <div class="box-img">
            <img src="../../assets/images/adv2.png">
          </div>
          <div class="mask"></div>
          <div class="adv-title">
            多端应用灵活定制
            <div class="adv-desc line1">内嵌智能风控引擎，覆盖多种应用场景，满</div>
            <div class="adv-desc line2">足金融机构发展消费金融、信贷业务等多样</div>
            <div class="adv-desc line3">化需求</div>
          </div>
        </div>
        <div class="adv-img-box am-u-sm-4">
          <div class="box-img">
            <img src="../../assets/images/adv3.png">
          </div>
          <div class="mask"></div>
          <div class="adv-title">
            金融综合解决方案
            <div class="adv-desc line1">技术、数据、算法融合，将不同渠道的数据</div>
            <div class="adv-desc line2">整合，为用户提供反欺诈、信息验证、全周</div>
            <div class="adv-desc line3">期风控等服务</div>
          </div>
        </div>
      </div>
      <div class="adv-button-wrapper">
        <button class="adv-button"> 了解更多 </button>
      </div>
    </div>
    <div id="advantage-s" class="am-container">
      <div class="title">定制化 维度全 可信赖</div>
      <div class="slogan">根据金融行业的实际业务需求，我们不断精益求精，推出一系列金融科技服务与解决方案</div>
      <div class="pentagon-box">
        <img class="pentagon" src="../../assets/images/pentagon.svg" width="545" height="545">

        <div class="pentagon-scale">
          <img src="../../assets/images/pentagon-move.svg" width="545" height="545">
        </div>

        <div class="pentagon-item fraud">
          <img src="../../assets/images/anti-fraud.svg" width="30" height="30">
          <div class="text">反欺诈信息验证</div>
        </div>

        <div class="pentagon-item credit">
          <img src="../../assets/images/credit-assessment.svg" width="30" height="30">
          <div class="text">信用评估查询</div>
        </div>

				<div class="pentagon-item decompress">
				  <img src="../../assets/images/decompress.svg" width="30" height="30">
          <div class="text">业务系统减负</div>
				</div>

         <div class="pentagon-item customer">
          <img src="../../assets/images/customer.svg" width="30" height="30">
          <div class="text">量化获客渠道</div>
         </div>

          <div class="pentagon-item bigdata">
            <img src="../../assets/images/bigdata.svg" width="30" height="30">
          <div class="text">大数据风控</div>
          </div>
      </div>
      <div class="adv-button-wrapper">
        <button class="adv-button"> 解决方案 </button>
      </div>
    </div>
    <div id="join">
      <div class="join">加入我们，成就下一个可能</div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import $ from 'jquery';
  export default {
    /* 元素插入后可以用jquery获取页面元素 */
    mounted() {
      $(function() {
        $('#advantage-s').on('inview.scrollspy.amui', function() {
          console.log('进入视口');
        }).on('outview.scrollspy.amui', function() {
          console.log('离开视口');
        });
      });
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" type="text/less" scoped>
  #main {
    /*background-color: rgba(216, 215, 215, 0.72);*/
  }
  #advantage-f {
    .title {
      color: #3C3C42;
      font-size: 30px;
      line-height: 30px;
      text-align: center;
      padding-top: 100px;
      font-weight: 800;
    }
    .slogan {
      color: #3C3C42;
      font-size: 18px;
      line-height: 18px;
      text-align: center;
      margin: 30px 0 60px;
    }
    .adv-img-wrapper {
      .adv-img-box {
        position: relative;
        width: 350px;
        height: 240px;
        margin-right: 40px;
        padding: 0;
        overflow: hidden;
        .box-img {
          position: absolute;
          top: 0;
          left: 0;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .adv-title {
          position: absolute;
          left: 18px;
          bottom: 20px;
          width: 306px;
          color: #fff;
          font-size: 20px;
          line-height: 20px;
          transition: all .4s ease;
          .adv-desc {
            position: absolute;
            color: #fff;
            font-size: 16px;
            line-height: 16px;
            opacity: 0;
            transition: all .4s ease;
            &.line1, &.line2, &.line3 {
              top: 0;
            }
          }
        }
        .mask {
          width: 100%;
          height: 240px;
          color: #fff;
          background-color: #22232f;
          opacity: .7;
          transform: translateY(180px);
          transition: all .4s ease;
        }
        &:hover {
          .adv-title {
            transform: translateY(-130px);
            .adv-desc {
              opacity: 1;
              &.line1 {
                top: 38px;
              }
              &.line2 {
                top: 62px;
              }
              &.line3 {
                top: 86px;
              }
            }
          }
          .mask {
            transform: translateY(0px);
          }
        }
      }
      & .adv-img-box:last-child {
        margin-right: 0;
      }
    }
    .adv-button-wrapper {
      margin: 65px auto 100px;
      width: 100%;
      text-align: center;
      .adv-button {
        width: 240px;
        height: 48px;
        border: 1px solid #00afec;
        background-color: transparent;
        border-radius: 5px;
        color: #00afec;
        font-size: 18px;
      }
    }
  }
  #advantage-s {
    .title {
      color: #3C3C42;
      font-size: 30px;
      line-height: 30px;
      text-align: center;
      font-weight: 800;
    }
    .slogan {
      color: #3C3C42;
      font-size: 18px;
      line-height: 18px;
      text-align: center;
      margin: 30px 0 60px;
    }
    .adv-button-wrapper {
      margin: 165px auto 100px;
      width: 100%;
      text-align: center;
      .adv-button {
        width: 240px;
        height: 48px;
        border: 1px solid #00afec;
        background-color: transparent;
        border-radius: 5px;
        color: #00afec;
        font-size: 18px;
      }
    }
    .pentagon-box {
      position: relative;
      font-size: 0;
      width: 545px;
      height: 545px;
      margin: 0 auto;
      background-color: transparent;/*
      background-color: rgba(0,174,236,.5);*/
      text-align: center;
      &:hover {
        .pentagon-item {
          opacity: 1;
/*          &.fraud {
            top: -32px;
            left: 214px;
          }
          &.credit {
            top: 149px;
            left: 475px;
          }
          &.decompress {
            top: 467px;
            left: 372px;
          }
          &.customer {
            top: 467px;
            left: 48px;
          }
          &.bigdata {
            top: 149px;
            left: -56px;
          }
          .text {
            opacity: 1;
            bottom: -38px;
          }*/
        }
      }
      /* 五边形图片 */
      .pentagon {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 100;
        display: block;
        opacity: 1;
      }
      /* 五边形色块 */
      .pentagon-scale {
        position: absolute;
        top: 0;
        left: 0;
        width: 545px;
        height: 545px;
        /*background-color: #00afec;*/
        /*background-image: url('../../assets/images/pentagon-move.svg');*/
        animation-name: pentagon-scale;
        animation-duration: 5s;
        animation-timing-function: ease;
        animation-delay: 1s;
        animation-iteration-count: infinite;
        animation-direction: normal;
        animation-play-state: running;
        animation-fill-mode: forwards;
        transform: scale(0.1);
        transform-origin:50% 299.5px;
        /*transform: scale3d(.465,.465,.46) translateY(31px);*/
        @keyframes pentagon-scale
        {
          from {
            transform: scale(0);
            opacity: .3;
          }
          to {
            transform: scale(1.01);
            opacity: 1;
          }
        }
      }
      /* 五边形 logo */
      .pentagon-item {
        position: absolute;
        top: 236px;
        left: 212.5px;
        width: 120px;
        height: 120px;
        background-color: #fff;
        border-radius: 50%;
        text-align: center;
        transition: all .4s ease;
        opacity: 1;
        z-index: 100;
        box-shadow: 0 0 4px rgba(0, 174, 252,.4);
        img {
          position: relative;
          display: inline-block;
        }
        .text {
          position: absolute;
          left: -60px;
          bottom: 30px;
          width: 240px;
          color: #3c3c42;
          font-size: 18px;
          text-align: center;
          opacity: 0;
          transition: all .4s ease;
          animation-name: textFadeIn;
          animation-duration: 5s;
          animation-timing-function: ease;
          animation-delay: 1s;
          animation-iteration-count: 1;
          animation-direction: normal;
          animation-play-state: running;
          animation-fill-mode: forwards;
          @keyframes textFadeIn
          {
            to {
              opacity: 1;
              bottom: -38px;
            }
          }
        }

        &.fraud {
          animation-name: fraudScale;
          animation-duration: 5s;
          animation-timing-function: ease;
          animation-delay: 1s;
          animation-iteration-count: 1;
          animation-direction: normal;
          animation-play-state: running;
          animation-fill-mode: forwards;
          @keyframes fraudScale
          {
            to {
              top: -32px;
              left: 214px;
            }
          }
          img {
            top: 24px;
            left: 6px;
            width: 66px;
            height: auto;
          }
        }
        &.credit {
          animation-name: creditScale;
          animation-duration: 5s;
          animation-timing-function: ease;
          animation-delay: 1s;
          animation-iteration-count: 1;
          animation-direction: normal;
          animation-play-state: running;
          animation-fill-mode: forwards;
          @keyframes creditScale
          {
            to {
              top: 149px;
              left: 475px;
            }
          }
          img {
            top: 30px;
            left: 2px;
            width: 78px;
            height: auto;
          }
        }
        &.decompress {
          animation-name: decompressScale;
          animation-duration: 5s;
          animation-timing-function: ease;
          animation-delay: 1s;
          animation-iteration-count: 1;
          animation-direction: normal;
          animation-play-state: running;
          animation-fill-mode: forwards;
          @keyframes decompressScale
          {
            to {
              top: 467px;
              left: 372px;
            }
          }
          img {
            top: 40px;
            left: 4px;
            width: 78px;
            height: auto;
          }
        }
        &.customer {
          animation-name: customerScale;
          animation-duration: 5s;
          animation-timing-function: ease;
          animation-delay: 1s;
          animation-iteration-count: 1;
          animation-direction: normal;
          animation-play-state: running;
          animation-fill-mode: forwards;
          @keyframes customerScale
          {
            to {
              top: 467px;
              left: 48px;
            }
          }
          img {
            top: 36px;
            left: 2px;
            width: 72px;
            height: auto;
          }
        }
        &.bigdata {
          animation-name: bigdataScale;
          animation-duration: 5s;
          animation-timing-function: ease;
          animation-delay: 1s;
          animation-iteration-count: 1;
          animation-direction: normal;
          animation-play-state: running;
          animation-fill-mode: forwards;
          @keyframes bigdataScale
          {
            to {
              top: 149px;
              left: -56px;
            }
          }
          img {
            top: 26px;
            left: -2px;
            width: 60px;
            height: auto;
          }
        }


      }
    }
  }
  #join {
    width: 100%;
    height: 120px;
    background: url('../../assets/images/join.png') no-repeat;
    background-size: cover;
    text-align: center;
    .join {
      font-size: 24px;
      line-height: 24px;
      padding-top: 48px;
      color: #fff;
    }
  }
</style>
