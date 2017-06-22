<template>
  <div class="jumbotron masthead">
    <div class="container">
      <div class="row">
        <div class="col-md-5 col-xs-12">
          <div class="row">
            <div class="col-md-4 col-sm-12"><img src="../../../static/images/hexagon-blue.png" width="140"></div>
            <div class="col-md-4 col-sm-12"><img src="../../../static/images/hexagon-blue.png" width="140"></div>
            <div class="col-md-4 col-sm-12"><img src="../../../static/images/hexagon-blue.png" width="140"></div>
          </div>
        </div>
        <div class="col-md-5 col-sm-offset-2">
          <div class="row">
            <div class="col-md-4 col-sm-12"><img src="../../../static/images/hexagon-green.png" width="140"></div>
            <div class="col-md-4 col-sm-12"><img src="../../../static/images/hexagon-green.png" width="140"></div>
            <div class="col-md-4 col-sm-12"><img src="../../../static/images/hexagon-green.png" width="140"></div>
          </div>
        </div>
      </div>
      <div class="row typebr"></div>
      <div class="row">
        <div class="col-md-5  col-sm-offset-3 yellowDiv">
          <div class="row">
            <div class="col-md-4 col-sm-12"><img src="../../../static/images/hexagon-yellow.png" width="140"></div>
            <div class="col-md-4 col-sm-12"><img src="../../../static/images/hexagon-yellow.png" width="140"></div>
            <div class="col-md-4 col-sm-12"><img src="../../../static/images/hexagon-yellow.png" width="140"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">

</script>

<style>
  .jumbotron{
    background: linear-gradient(45deg,#020031 0,#6d3353 100%);
    background-image: linear-gradient(45deg, rgb(2, 0, 49) 0px, rgb(109, 51, 83) 100%);
    background-position-x: initial;
    background-position-y: initial;
    background-size: initial;
    background-repeat-x: initial;
    background-repeat-y: initial;
    background-attachment: initial;
    background-origin: initial;
    background-clip: initial;
    background-color: initial;
  }
  .jumbotron:after{
    content: '';
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: url("./bs-docs-masthead-pattern.png") ;
    opacity: .4;
  }
  @media (min-width: 768px){
    .typebr{
      height:30px;
    }
    .yellowDiv{
      margin-left: 29%;
    }
  }
</style>
