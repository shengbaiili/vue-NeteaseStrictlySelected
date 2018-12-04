<template>
  <div class="header">
    <div class="line" >
      <a href="" class="logo"></a>
        <div class="m-topSearchIpt ipt">
          <i></i>
          <span class="placeholder" >
            <span >商品搜索, 共</span> <span >5116</span> <span >款好物</span>
        </span>
          <div class="loginBtn">登录</div>
        </div>
    </div>
    <div class="tobWrap">

    </div>
  </div>
</template>

<script>
    export default {
        name: "TopHeader"
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"

  .header
    height 148px
   .line
    height 88px
    .logo
      width: 1.84rem;
      height: .53333rem;
      background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-11d65342f9.png);
      display: inline-block;
      margin-right: .26667rem;
      background-size: cover;
      background-position: center;








</style>
