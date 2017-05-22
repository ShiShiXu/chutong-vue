<template>
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
                <li><router-link to="/product">平台产品</router-link></li>
                <li><router-link to="/solution">解决方案</router-link></li>
                <li><router-link to="/">商务联系</router-link></li>
                <li><router-link to="/">关于触通</router-link></li>
              </ul>
            </div>
          </div>
      </header>
</template>

<script type="text/ecmascript-6">
  export default {};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" type="text/less">
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
      .am-nav li {
        width: 100px;
        text-align: center;
      }
      .am-nav li.li-active:after {
        display: inline-block;
        position: absolute;
        bottom: 0;
        left: 0;
        content: " ";
        border: 2px solid #00afec;
        width: 100px;
        height: 2px;
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
</style>
