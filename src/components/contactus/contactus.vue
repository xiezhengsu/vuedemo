<template>
<div class="contactus">
  <div class="other-slide">
    <img src="../../../static/images/contactus-slide.jpg" alt="很高兴为您服务！">
  </div>
  <div class="position">
    <div class="container">
      <span class="position-home"></span>
      <router-link to="/home">主页</router-link> > <router-link to="/contactus">联系我们</router-link>
    </div>
  </div>
  <div id="content">
    <div class="container">
      <div class="row row-contactus-info">
        <div class="col-lg-4 col-xs-12">
          <span class="icon-contactus icon-address"></span>
          <div class="contactus-item">
            <p>总部地址：无锡市龙山路2号融智大厦E座5楼</p>
          </div>
        </div>
        <div class="col-lg-4 col-xs-12">
          <span class="icon-contactus icon-tel"></span>
          <div class="contactus-item">
            <p>联系电话：0510-8232 2245</p>
            <p>企业邮箱：dengjin@tojon.com.cn</p>
          </div>
        </div>
        <div class="col-lg-4 col-xs-12">
          <span class="icon-contactus icon-website"></span>
          <div class="contactus-item">
            <p>官网地址：www.tojob.com.cn</p>
            <p>移动网址：www.tojob.com.cn</p>
          </div>
        </div>
      </div>
      <div class="row changde-contactus-info">
        <div class="col-lg-4 col-xs-4 contact-box">
          <h2>常德运营中心</h2>
          <p><i class="icon-tel"></i>客服电话：0736-7226000</p>
          <p><i class="icon-ask"></i>融资咨询：0736-7216000</p>
          <p><i class="icon-man"></i>区域代理：0736-7777881</p>
          <p><i class="icon-money"></i>资金合作：188-7360-0000&nbsp;&nbsp;&nbsp;高经理</p>
          <p><i></i>gaoge@ysemm.com</p>
          <p><i class="icon-addr"></i>公司地址：常德市武陵区洞庭大道</p>
          <p><i></i>368号浙商广场B座16楼</p>
        </div>
        <div class="col-lg-8 col-xs-8" id="map">
          <!--<baidu-map class="bm-view">
          </baidu-map>-->
          <!--<baidu-map class="map" :center="{lng: 116.404, lat: 39.915}" :zoom="15" class="bm-view">
            <bm-label content="我爱北京天安门" :position="{lng: 116.404, lat: 39.915}" :labelStyle="{color: 'red', fontSize : '24px'}" title="Hover me"/>
          </baidu-map>-->
          <!--<baidu-map class="bm-view" :center="{lng: 120.3654280000, lat: 31.5446750000}" :zoom="15">
            <bm-marker :position="{lng: 120.3654010000, lat: 31.5447480000}" :dragging="true" animation="BMAP_ANIMATION_BOUNCE">
              <bm-label content="我爱北京天安门" :labelStyle="{color: 'red', fontSize : '24px'}" :offset="{width: -35, height: 30}"/>
            </bm-marker>
          </baidu-map>-->
          <baidu-map class="bm-view" :center="{lng: 120.3654280000, lat: 31.5446750000}" :zoom="15">
            <bm-info-window :position="{lng: 120.3654010000, lat: 31.5447480000}" title="无锡至德人力资源集团" :show="infoWindow.show">
              <p v-text="infoWindow.contents"></p>
              <p v-text="infoWindow.telephone"></p>
            </bm-info-window>
          </baidu-map>
          <!-- <img src="/templets/newysemmcn/images/contactus-map.jpg" alt="常德市武陵区洞庭大道368号浙商广场B座16楼"> -->
        </div>
      </div>
    
    </div>
  </div>
</div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
      infoWindow: {
        show: true,
        contents: '联系地址：无锡市龙山路2号融智大厦E座5楼',
        telephone: '联系电话：0510-8232 2245'
      }
    }
  }
}
</script>

<style>
  .bm-view {
    width: 100%;
    height: 100%;
  }
</style>
