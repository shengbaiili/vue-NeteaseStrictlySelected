<!--首页-->
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
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img
              src="https://yanxuan.nosdn.127.net/850c005113e5becbfd98d797b8a2101a.jpg?imageView&amp;quality=75&amp;thumbnail=750x0">
          </div>
          <div class="swiper-slide">
            <img
              src="https://yanxuan.nosdn.127.net/1d66a50452354fa28b045853c078cbe3.jpg?imageView&amp;quality=75&amp;thumbnail=750x0">
          </div>
          <div class="swiper-slide">
            <img
              src="https://yanxuan.nosdn.127.net/03d8a81e7be4bb1a8d44dc2118f944a4.jpg?imageView&amp;quality=75&amp;thumbnail=750x0">
          </div>
          <div class="swiper-slide">
            <img
              src="https://yanxuan.nosdn.127.net/947479ba62a2ef4bababc8690cef0a80.jpg?watermark&type=1&gravity=northwest&dx=0&dy=0&image=YTRhMmIzYmI1Y2I1YTc4ZGM5MmE3Nzk2NzAwYTFiNjgucG5n|imageView&quality=75&thumbnail=750x0">
          </div>
        </div>
      </div>
    </div>
  </template>

  <script>
    import Swiper from 'swiper'
    import "swiper/dist/css/swiper.min.css"

    export default {
      name: "Main",
      mounted() {
        var mySwiper = new Swiper('.swiper-container', {
          loop: true, // 循环模式选项
          autoplay:{
            stopOnLastSlide:true
          }
        })
      }
    }
  </script>

  <style lang="stylus" scoped>
    @import "../../common/stylus/mixins.styl"
    .warp
      height 100%
      width 100%
    .header
      width 100%
      height 1.4rem
     .line
      width 100%
      position relative
      height .4rem
      display flex
      flex-flow row nowrap
      align-items center
      background #fff
      padding .21333rem .4rem
      .logo
        width 1.5rem
        height .32rem
        background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-11d65342f9.png)
        display inline-block
        margin-right .2rem
        margin-left -.15rem
        background-size cover
        background-position center
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
        width .74rem
        height .36rem
        line-height .36333rem
        text-align center
        color #b4282d
        border 1px solid #b4282d
        border-radius .08rem
        margin-left .2rem
        font-size .24rem
    .swiper-container
      width: 100%
      height: 4.9333rem
      img
        width: 100%
        height 5.333rem
  </style>
