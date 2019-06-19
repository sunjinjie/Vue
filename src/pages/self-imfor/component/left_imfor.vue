<template>
  <div class="left-imf">
    <img src="static/images/backgroud.jpg">
    <div>
      <div class="left-imf-buttom">
        <img src="/static/images/bird.jpg">
        <p class="left-imf-name">{{ name }}</p>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: '',
    data() {
      return {
        name: "厚积薄发"
      }
    }
  }
</script>
<style>
  .left-imf{
    position: absolute;
    top: 50px;
    left: 0px;
    width: 50%;
    height: 100%;
    background-color: slategrey;
    display: inline-block;
  }
  .left-imf>img{
    width: 100%;
    height: 70%;
  }
  .left-imf>div{
    text-align: center;
  }
  .left-imf-buttom{
    /*height: 20%;*/
    /*width: 100%;*/
    margin: auto;
    margin-top: 50px;
    text-align: center;
  }
  .left-imf-name{
    width: 150px;
    /*margin: auto;*/
    text-align: center;
    font-size: 25px;
    display: inline-block;
    top: -50px;
    position: relative;
    text-indent: 1em;
    color: #ededed;
  }
  .left-imf-buttom img{
    width: 100px;
    height: 100px;
    border-radius: 50px;
    border: white 2px solid;
  }
</style>
