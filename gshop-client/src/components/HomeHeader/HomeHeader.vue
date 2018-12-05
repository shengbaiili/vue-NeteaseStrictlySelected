<template>
  <div class="warp">
    <div class="header">
      <div class="line">
        <a href="" class="logo"></a>
        <div class="m-topSearchIpt ipt">
          <i class="icon"></i>
          <span class="placeholder" >
            <span >商品搜索, 共</span> <span >19906</span> <span >款好物</span>
        </span>
        </div>
        <div class="loginBtn">登录</div>
      </div>
    </div>
    <div class="topWarp">

    </div>
  </div>
</template>

<script>
    export default {
        name: "TopHeader"
    }
</script>

<style lang="stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .warp
   height 100%
   width 100%
  .header
   height .8rem
  .line
    position relative
    height .4rem
    display flex
    flex-flow row nowrap
    align-items center
    background #fff
    padding .21333rem .4rem

    .logo
      width: 1.84rem;
      height: .38rem;
      background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-11d65342f9.png);
      display: inline-block;
      margin-right: .26rem;
      background-size: cover;
      background-position: center;
    .m-topSearchIpt
      height .56rem
      width 4.42rem
      font-size .37333rem
      display flex
      align-items center
      background-color #ededed
      border-radius .10667rem
      justify-content center
      .icon
        display inline-block
        vertical-align middle
        background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-2fb94833aa.png)
        background-repeat no-repeat
        background-size 100% 100%
        width .27rem
        height .27rem
        margin-right .13333rem
        font-style normal
      .placeholder
        color: #666
        font-size .27rem
    .loginBtn
      width: .74rem;
      height: .36rem;
      line-height: .36333rem;
      text-align: center;
      color: #b4282d;
      border: 1px solid #b4282d;
      border-radius: .08rem;
      margin-left: .2rem;
      font-size .24rem
</style>
