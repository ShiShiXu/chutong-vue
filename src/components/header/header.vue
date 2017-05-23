<template>
  <header id="header" class="am-topbar am-topbar-fixed-top">
          <div class="am-container">
            <h1 class="am-topbar-brand">
              <a href="/" class="am-text-ir">
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
                <li><router-link to="/business">商务联系</router-link></li>
                <li><router-link to="/about">关于触通</router-link></li>
              </ul>
            </div>
          </div>
      </header>
</template>

<script type="text/ecmascript-6">
  export default {
    created() {},
    mounted() {
      /* 给每个导航添加高亮事件 */
      (function () {
        let navbarLi = document.querySelectorAll('.navbar ul li');
        navbarLi.forEach(function (value, index, array) {
          value.addEventListener('click', function() {
            navbarLi.forEach(function (value, index, array) {
              value.className = '';
            });
            this.className = 'li-active';
          });
        });
      })();
      /* 点击logo 去掉所有导航的高亮 */
      (function () {
        let amTopbarBrand = document.querySelector('.am-topbar-brand');
        amTopbarBrand.addEventListener('click', function() {
          let navbarLi = document.querySelectorAll('.navbar ul li');
          navbarLi.forEach(function (value, index, array) {
            value.className = '';
          });
        });
      })();
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" type="text/less" scoped>
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
        margin: 0;
        padding: 0;
        &::after {
          width: 100px;
          height: 2px;
          display: inline-block;
          position: absolute;
          bottom: 0;
          left: 0;
          content: " ";
          transition: all .6s linear;
          transform: scale(0);
        }
      }

      .am-nav li.li-active:after {
        background-color: #00afec;
        transform: scale(1);
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
