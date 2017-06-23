<template>
  <div id="app">
    <div class="navbar navbar-inverse navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <button class="navbar-toggle collapsed" type="button" data-toggle="collapse" data-target=".navbar-collapse">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand hidden-sm" href="http://www.bootcss.com" onclick="_hmt.push(['_trackEvent', 'navbar', 'click', 'navbar-首页'])"><img src="../static/images/logo.png"></a>
        </div>
        <div class="navbar-collapse collapse" role="navigation">
          <ul class="nav navbar-nav">
            <li class="hidden-sm hidden-md"><router-link to="/home">首页</router-link></li>
            <li><router-link to="/aboutus">关于我们</router-link></li>
            <li><router-link to="/superiority">企业优势</router-link></li>
            <li><router-link to="/news">新闻中心</router-link></li>
            <li><router-link to="/contactus">联系我们</router-link></li>
          </ul>
        </div>
      </div>
    </div>
    <transition name="form-fade">
      <router-view></router-view>
    </transition>
    <footer class="home-footer">
      <!-- 友情链接 -->
      <div class="flink-container">
        <div class="box-title-flink"><span>友情链接</span></div>
        <div class="index-box-flink">
          <div class="index-box-panel">
            <a target="_blank" href="https://www.batiaoyu.com/" title="八条鱼理财">理财产品</a>
            <a target="_blank" href="http://bbs.changjiudai.com/">P2P理财</a>
            <a target="_blank" href="http://www.xinhuadazong.cc" title="东北亚北方商品交易中心">亚商所</a>
            <a target="_blank" href="http://www.ysemm.cn/sitemap.html">网站地图</a>
            <div class="flink-line"></div>
          </div>
          <div class="index-box-panel">
            <a target="_blank" href="http://www.ysemm.cn/a/cooperation/">PPP项目投资</a>
            <a target="_blank" href="http://www.chinappp.cn/">中国PPP服务平台</a>
            <a target="_blank" href="http://www.ysemm.cn/a/aboutus/">PPP项目投资推荐</a>
            <a target="_blank" href="http://www.ysemm.cn/a/aboutus/">政府项目融资平台</a>
            <div class="flink-line"></div>
          </div>
          <div class="index-box-panel">
            <a target="_blank" href="http://www.ysemm.cn/a/cooperation/">PPP项目资金合作</a>
            <a target="_blank" href="http://www.ysemm.cn/a/cooperation/">政府项目合作</a>
            <a target="_blank" href="http://www.ysemm.cn/a/cooperation/">政府融资</a>
            <a target="_blank" href="http://www.ysemm.cn/tags.php">网站标签</a>
            <div class="flink-line"></div>
          </div>
          <div class="index-box-panel">
            <a target="_blank" href="http://www.chinatzlt.org.cn/">中国投资论坛</a>
            <a target="_blank" href="http://www.ysemm.cn/a/contactus/">PPP项目融资</a>
            <a target="_blank" href="http://www.ysemm.cn/a/contactus/">政府平台引资</a>
            <a target="_blank" href="http://www.ysemm.cn/a/regionalagency/">省级代理人</a>
            <div class="flink-line"></div>
          </div>
          <div class="index-box-panel">
            <a target="_blank" href="http://www.wuyabuluo.com">乌鸦部落</a>
            <a target="_blank" href="http://www.ysemm.cn/a/regionalagency/">区域代理</a>
            <a target="_blank" href="http://www.ysemm.cn/news/">融资资讯</a>
            <a target="_blank" href="http://expo.bootcss.com/">Bootstrap优站精选</a>
          </div>
        </div>
      </div>
      <div class="footer">
        <div class="show-rz">
          <p>
            <a id="_pingansec_bottomimagelarge_p2p" href="http://si.trustutn.org/info?sn=321170316000571380559&amp;certType=4"><img class="zqrz" src="/templets/newysemmcn/images/netverify.jpg" alt="已通过互联网金融行业认证"></a>
            <a href="http://webscan.360.cn/index/checkwebsite/url/www.ysemm.cn"><img src="/templets/newysemmcn/images/360verify.jpg" alt="已通过360网站安全检测"></a>
          </p>
        </div>
        <p>Copyright © 2015 - 2017 Ysemm. All Rights Reserved</p>
        <p>
          <a href="http://www.miitbeian.gov.cn/publish/query/indexFirst.action" target="_blank" rel="nofollow">备案号：粤ICP备15071992号-1</a>
        </p>
      </div>
  
  
    </footer>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'hello bootstrap for vue'
    }
  }
}
</script>

<style>
  html,body{
    font-family:"ff-tisa-web-pro-1","ff-tisa-web-pro-2","Lucida Grande","Helvetica Neue",Helvetica,Arial,"Hiragino Sans GB","Hiragino Sans GB W3","Microsoft YaHei UI","Microsoft YaHei","WenQuanYi Micro Hei",sans-serif;
  }
  @import '../static/index.css';
  .navbar-inverse {
    background-color: #fff;
    border-color: #fff;
  }
  .navbar-brand{
    /*height:80px;*/
    padding: 10px 15px;
  }
  @media (min-width: 768px){
    .navbar-nav {
      float: right;
    }
  }
  @media (max-width: 768px){
    .navbar-nav {
      float: left;
    }
  }
  @media (max-width: 991px) and (min-width: 768px){
    .hidden-sm {
      display: block !important;
    }
  }

  .navbar-inverse .navbar-nav>li>a {
    color: #9F9FDA;
  }
  .navbar-nav>li>a {
    padding-top: 30px;
  }
  inverse .navbar-nav>li>a:hover {
    color: #9B9BFA;
    background-color: transparent;
  }
  .navbar-inverse .navbar-nav>li>a:focus, .navbar-inverse .navbar-nav>li>a:hover {
    color: #9B9BFA;
    background-color: transparent;
  }
  .navbar-toggle{
    margin-top: 20px;
  }

.jumbotron {
  padding-top: 80px;
  padding-bottom: 80px;
  margin-bottom: 30px;
  color: inherit;
  background-color: #61B1DE;
}
  .navbar-inverse .navbar-toggle {
    border-color: #82097C;
  }
  .navbar-inverse .navbar-toggle .icon-bar {
    background-color: #E8DDDD;
  }
  .navbar-inverse .navbar-toggle:focus, .navbar-inverse .navbar-toggle:hover {
    background-color: #E8DDDD;
  }
  .navbar-toggle:hover > span{
    background-color: #fff !important;
  }
  .navbar-inverse .navbar-toggle {
    border-color: #E8DDDD;
  }
  .form-fade-enter-active, .form-fade-leave-active {
    transition: all 1s;
  }
  .form-fade-enter, .form-fade-leave-active {
    transform: translate3d(0, -50px, 0);
    opacity: 0;
  }
</style>
