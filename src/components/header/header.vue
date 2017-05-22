<template>
  <!-- 页头和轮播图 -->
  <div id="banner">
    <div class="am-container">
      <header id="header" class="am-topbar am-topbar-fixed-top">
          <div class="am-container">
            <h1 class="am-topbar-brand">
              <a href="#" class="am-text-ir">
                <img src="../../assets/images/logo.png" width="180" height="65">
              </a>
            </h1>

            <button class="am-topbar-btn am-topbar-toggle am-btn am-btn-sm am-btn-success am-show-sm-only"
                    data-am-collapse="{target: '#doc-topbar-collapse-4'}"><span class="am-sr-only">导航切换</span> <span
              class="am-icon-bars"></span></button>

            <div class="navbar am-collapse am-topbar-collapse" id="doc-topbar-collapse-4">
              <ul class="am-nav am-nav-pills am-topbar-nav">
                <li class="li-active"><a href="#">首页</a></li>
                <li><a href="#">平台产品</a></li>
                <li><a href="#">解决方案</a></li>
                <li><a href="#">商务联系</a></li>
                <li><a href="#">关于触通</a></li>
              </ul>
            </div>
          </div>
      </header>
      <div class="title" data-am-scrollspy="{animation:'fade', delay: 300}">Business AI  &  Big data</div>
      <div class="slogan" data-am-scrollspy="{animation:'fade', delay: 400}">专注于人工智能的金融科技专家</div>
      <div class="description" data-am-scrollspy="{animation:'fade', delay: 500}">
        大数据、机器学习的先进技术大爆发，新的时代已经到来<br>
        我们希望能成为新时代的引领者，所以我们专注于新一代人工智能在金融行业的应用<br>
        提供系统建设、数据运营、智能风控、安全管理等精准化解决方案
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" type="text/less" scoped>
  #banner {
    position: relative;
    height: 600px;
    background-image: url('../../assets/images/banner.png');
    margin: 0 auto;

    #header {
      height: 70px;
      background-color: rgba(255,255,255,.2);
      button:focus {
        outline: none;
      }
      &.am-topbar {
        background: rgba(23,39,48,.8);
        border: none;
      }
      .navbar {
        .am-topbar-nav {
          float: right;
          padding: 10px 0;
        }
        li {
          a {
            color: #fff;
            &:hover, &:focus {
              text-decoration: none;
              background-color: transparent;
            }
          }
        }
      }
    }
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
