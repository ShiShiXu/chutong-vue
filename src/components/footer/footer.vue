<template>
    <footer id="footer">
      <div class="footer">
          <div class="am-container">
            <div class="footer-left am-u-sm-12 am-u-md-6 am-u-lg-6">
              <div class="contact-txt">
                  <h1>联系我们</h1>
                  <div class="contact-tel"></div>
                  <table class="footer-table">
                      <tbody>
                          <tr>
                              <td>地址：</td>
                              <td>广东省广州市海珠区新港西路135号中山大学科技园B座1305室</td>
                          </tr>
                          <tr>
                              <td>邮箱：</td>
                              <td>info<span class="am-icon-at"></span>chutong.cn</td>
                          </tr>
                      </tbody>
                  </table>
              </div>
            </div>
            <div class="footer-right am-u-sm-12 am-u-md-6 am-u-lg-6">
              <div class="wechat">
                <img src="../../assets/images/wechat.jpg">
              </div>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <div class="container">
              <div class="row">
                <div class="copyright">Copyright&nbsp;©&nbsp;2016&nbsp;
                  <a href="index.html">触通<sup>®</sup>科技</a>&nbsp;保留所有权利&nbsp;
                  <a href="http://www.miitbeian.gov.cn/" target="_blank">粤ICP备10100456号-1</a>
                </div>
              </div>
          </div>
        </div>
    </footer>
</template>

<script type="text/ecmascript-6">
  export default {};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" type="text/less">
  #footer {
    width: 100%;
    height: auto;
    color: #ffffff;
    background: #172730;
    position: relative;
    z-index: 100;
    bottom: 0;
    .footer {
      width: 100%;
      height: auto;
      overflow: hidden;
      .am-container {
        max-width: 1000px;
        border-bottom: 1px solid #4e5a61;
        .footer-left, .footer-right {
          padding: 0;
        }
        .footer-right {
          margin-top: 139px;
          float: right;
        }
        .wechat {
          float: right;
        }
      }
      .contact-txt {
        width: 100%;
        margin-top: 60px;
        margin-bottom: 40px;
        float: left;
        h1 {
          width: 100%;
          font-size: 24px;
          font-weight: bold;
          margin-bottom: 40px;
          float: left;
        }
      }
      .contact-tel {
        float: left;
        width: 500px;
        height: 63px;
        background: url('../../assets/images/tel_pc.svg') #5d6272 no-repeat center center;
        border-radius: 5px;
        margin-bottom: 30px;
      }
      .footer-table {
        background-color: transparent;
        font-size: 16px;
        tbody {
          tr {
            margin-bottom: 10px;
            display: block;
            td:first-child {
              min-width: 44px;
              vertical-align: top;
            }
          }
          & {
            tr:last-child {
              margin-bottom: 0;
            }
          }
        }
      }
    }
    .footer-bottom {
      width: 100%;
      height: 100px;
      margin: 0 auto;
      text-align: center;
      a {
        color: #337ab7;
        text-decoration: none;
        outline: none;
      }
      .copyright {
        color: #ffffff;
        font-size: 16px;
        line-height: 16px;
        padding-top: 20px;
      }
    }
  }
</style>
