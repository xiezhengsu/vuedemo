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
          <a class="navbar-brand hidden-sm" href="http://www.bootcss.com" onclick="_hmt.push(['_trackEvent', 'navbar', 'click', 'navbar-首页'])"><img src="./assets/header.png"></a>
        </div>
        <div class="navbar-collapse collapse" role="navigation">
          <ul class="nav navbar-nav">
            <li class="hidden-sm hidden-md"><router-link to="/home">首页</router-link></li>
            <li><router-link to="/aboutus">关于我们</router-link></li>
            <li><a href="http://v4.bootcss.com/" target="_blank" onclick="_hmt.push(['_trackEvent', 'navbar', 'click', 'v4doc'])">企业优势</a></li>
            <li><a href="/p/lesscss/" target="_blank" onclick="_hmt.push(['_trackEvent', 'navbar', 'click', 'less'])">新闻中心</a></li>
            <li><a href="http://www.jquery123.com/" target="_blank" onclick="_hmt.push(['_trackEvent', 'navbar', 'click', 'jquery'])">联系我们</a></li>
          </ul>
        </div>
      </div>
    </div>
    <transition name="form-fade">
      <router-view></router-view>
    </transition>
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
