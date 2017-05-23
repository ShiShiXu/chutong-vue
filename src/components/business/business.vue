<template>
  <div>
    <div id="business-banner">
      <div class="banner-txt">
        <h1 data-am-scrollspy="{animation:'fade', delay: 200}">加入我们，成就下一个可能</h1>
        <p data-am-scrollspy="{animation:'fade', delay: 300}">我们提供更为贴合实际业务需求、且可以灵活组合的金融产品与解决方案，<br>
          让金融机构可以轻松应对日渐互联网化的用户习惯，帮助其更快、更好、更稳地拓展业务板块</p>
      </div>
      <div class="p-mask"></div>
    </div>
    <div class="cd-container">
        <div class="partner-box">
            <h1>优质的合作伙伴</h1>
        <div class="scroll_horizontal" id="pic_list">
          <div class="box">
            <ul class="list">
              <li>
                <div class="flink"><img src="../../assets/images/flink_logo1.jpg" ></div>
                <div  class="flink"><img src="../../assets/images/flink_logo2.jpg" ></div>
              </li>
              <li>
                <div  class="flink"><img src="../../assets/images/flink_logo3.jpg" ></div>
                <div  class="flink"><img src="../../assets/images/flink_logo1.jpg" ></div>
              </li>
              <li>
                <div  class="flink"><img src="../../assets/images/flink_logo2.jpg" ></div>
                <div  class="flink"><img src="../../assets/images/flink_logo3.jpg" ></div>
              </li>
            </ul>
          </div>
        </div>
        </div>
    </div>
    <div id="message-box">
        <div class="message-box">
            <h1>期待更多合作</h1>
            <form class="am-form">
                <div class="am-form-group am-u-md-6">
                    <input type="text" class="am-form-input" placeholder="姓名">
                </div>
                <div class="am-form-group am-u-md-6">
                    <input type="text" class="am-form-input" placeholder="联系方式">
                </div>
                <div class="am-form-group am-u-md-12">
                    <textarea class="am-form-textarea" rows="5" id="doc-ta-1" placeholder="请简单描述您的需求或合作意向。我们将会在收到信息后的2个工作日内及时联系您，请您保持通讯畅通，谢谢~"></textarea>
                </div>
                <div class="am-u-md-12">
                    <button type="submit" class="am-btn-sub">发送</button>
                </div>
            </form>
        </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import $ from 'jquery';
  export default {
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
<style lang="less" type="text/less" scoped>
/*商务合作*/
#business-banner {
  position: relative;
  height: 395px;
  width: 100%;
  background: url(../../assets/images/business_banner.jpg) no-repeat center;
  background-size: cover;
}
.p-mask {
  position: absolute;
  top: 237px;
  height: 205px;
  width: 100%;
  background-image: linear-gradient(0deg,rgb(255, 255, 255),rgba(255, 255, 255, 0));
}
.partner-box {
  max-width: 1000px;
  margin: 100px auto;
  overflow: hidden;
  h1 {
    font-size: 20px;
    color: #3c3c42;
    padding-bottom: 30px;
    text-align: center;
  }
}
.scroll_horizontal{
  position:relative;
  height:190px;
  padding:10px 0;
  width: 1000px;
  .box{
    overflow:hidden;
    position:relative;
    width:740px;
    height:190px;
    margin:0 auto;
  }
  .list{
    overflow:hidden;
    width:9999px;
    background: url(../../assets/images/dian.png) repeat-x 0;
    li{
      float: left;
      width: 250px;
      overflow:hidden;
      .flink{
        background: url(../../assets/images/flink_line.png) right no-repeat;
        padding: 20px 10px;
        overflow: hidden;
      }
    }
  }
  .prev,.next{
    position:absolute;
    top:50%;
    margin-top:-25px;
    width:22px;
    height:41px;
    background:url(../../assets/images/arrow.png) no-repeat;
    font:0/0 Arial;
    cursor:pointer;
  }
  .prev{
    left:5px;
    background-position:0 0;
  }
  .next{
    right:5px;
    background-position:-22px 0;
  }
}
#message-box{
  width: 100%;
  background: #eff1f4;
  margin: 0 auto;
  overflow: hidden;
}
.message-box{
  padding: 50px 0;
  margin: 0 auto;
  max-width: 740px;
  overflow: hidden;
  h1 {
    max-width: 740px;
    font-size: 20px;
    color: #3c3c42;
    padding-bottom: 30px;
    text-align: center;
  }
  .am-form-textarea{
    line-height: 24px;
  }
}
.am-form-input,.am-form-textarea{
  border-radius: 5px !important;
}
.am-btn-sub{
  width: 200px;
  height: 48px;
  color: #fff;
  font-size: 18px;
  background: #00afec;
  border-radius: 5px;
  border: none;
  margin: 5px auto 0;
  text-align: center;
  display: block;
  &:hover{
    background: #1cbdf5;
  }
}

</style>
