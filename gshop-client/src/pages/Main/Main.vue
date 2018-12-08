<!--首页-->
  <template>
    <div class="main-warp">
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
        <div class="tabWrap">
          <div class="nav">
            <ul class="list" v-if="cateList.length">
              <li class="txt" v-for="(Array, index) in cateList" :key="index">
                <a href="">{{Array.name}}</a>
              </li>
            </ul>
          </div>
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
      <div class="servicePolicy">
        <ul class="g-grow">
          <li class="item">
            <a href="">
              <i class="u-icon u-icon-servicePolicy-index"></i>
              <span class="text">网易自营品牌</span>
            </a>
          </li>
          <li class="item">
            <a href="">
              <i class="u-icon u-icon-servicePolicy-index"></i>
              <span class="text">网易自营品牌</span>
            </a>
          </li>
          <li class="item">
            <a href="">
              <i class="u-icon u-icon-servicePolicy-index"></i>
              <span class="text">网易自营品牌</span>
            </a>
          </li>
        </ul>
      </div>
      <div class="contentArea">
        <div class="commodity">
            <ul class="commodity-goods" v-for="(item, index) in kingKongList" :key="index">
              <li class="trade-name">
                <a href="">
                  <img :src="item.picUrl" alt="">
                  <span>{{item.text}}</span>
                </a>
              </li>
            </ul>
          </div>
        <div class="bigPromotionModule">
          <div class="activity-title">
            <div class="activityTitle">
              <a href="">
                <img src="https://yanxuan.nosdn.127.net/15435902145614507.gif" style="display: inline" alt="">
              </a>
            </div>
          </div>
          <div class="commodities-front">
               <div class="leftPicture promItem">
               <a href="">
                 <img src="https://yanxuan.nosdn.127.net/15435902383484509.png" style="display: inline;" alt="">
               </a>
              </div>
               <div class="rightPicture promItem">
              <a href="">
                <img src="https://yanxuan.nosdn.127.net/15435902616394510.png" style="display: inline;" alt="">
              </a>
              <a href="">
                <img class="change-plan" src="https://yanxuan.nosdn.127.net/15439064549673720.png" style="display: inline;" alt="">
              </a>
            </div>
          </div>
          <div class="commodities-after ">
            <div class="leftPicture promItem">
              <a href="">
                <img src="https://yanxuan.nosdn.127.net/15438955793172733.png" style="display: inline;" alt="">
              </a>
            </div>
              <div class="rightPicture promItem">
                <a href="">
                  <img src="https://yanxuan.nosdn.127.net/15435903918604513.png" style="display: inline;" alt="">
                </a>
              </div>
          </div>
        </div>
      </div>
      <div class="ContentDivision">
        <div class="subheading">
           <div class="contentWelfare">
             <a href="">

             </a>
           </div>
        </div>

      </div>
    </div>
  </template>

  <script>
    import BScroll from 'better-scroll'
    import {mapState} from 'vuex'
    import Swiper from 'swiper'
    import "swiper/dist/css/swiper.min.css"

    export default {
      mounted() {
        var mySwiper = new Swiper('.swiper-container', {
          loop: true, // 循环模式选项
          autoplay:{
            stopOnLastSlide:true
          }
        });
        this.$store.dispatch('getCateList', () =>{
          this.$nextTick(() => {
            new BScroll('.nav',{
              scrollX: true,
              click: true
            })
          })

        })
        this.$store.dispatch('getKingKongList')
        this.$store.dispatch('getPolicyDescList')
      },
      computed:{
        ...mapState(['cateList', 'kingKongList','policyDescList'])
      }
    }
  </script>

  <style lang="stylus" scoped>
    @import "../../common/stylus/mixins.styl"
    .main-warp
      height 100%
      width 100%
    .header
      width 100%
      height 100%
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
     .tabWrap
       width 100%
       height 100%
       background #fff
       margin-top -.55rem
       .nav
         display flex
         padding 0 .4rem
         overflow hidden
         box-sizing border-box

         .list
           display inline-block
           white-space nowrap
           .txt
             display inline-block
             padding 0 .21333rem
             line-height .6rem;
             font-size .3rem;
             color #333;
             text-align center;
             a
               width 100%
               height 100%
    .swiper-container
      width: 100%
      height: 4.9333rem
      img
        width: 100%
        height 5.333rem
    .servicePolicy
        width 100%
        background-color: #ffeddb
        font-size .25rem
        .g-grow
          display flex
          height 0.8rem
          .item
            flex 1
            text-align center
            line-height .74rem
            a
              vertical-align middle
              .u-icon-servicePolicy-index
                width .4rem
                height .4rem
                background-image url('http://yanxuan.nosdn.127.net/cae45612b8aae577d8bd73338e2fc02c.png')
                display inline-block
                background-size 100% 100%
                margin-top 0
                vertical-align middle
              .text
                color #B4282D
                vertical-align middle

    .commodity
      width 100%
      height 4.22667rem
      background-color #ffeddb
      .commodity-goods
          width 100%
          .trade-name
            display: block;
            width: 1rem;
            height: 2rem;
            float: left;
            margin: .1rem .24rem 0;
            a
              display inline-block
              text-align center
              img
               width: 1.2rem;
               height: 1.2rem;
              span
                display block
                margin-top: -0.1rem;
                margin-left: -0.1rem;
                text-align: center;
                font-size: .25rem;
                line-height: .48rem;
                white-space: nowrap;



    .bigPromotionModule
      width 100%
      .activity-title
        width 100%
        height 3.2rem
        background url(https://yanxuan.nosdn.127.net/15435901919894506.png?imageView&crop=0_0_750_496)
        background-size 100% 100%
        img
          width 100%
          height 100%
      .commodities-front
        width 100%
        height: 4rem;
        background: url(https://yanxuan.nosdn.127.net/15435901919894506.png?imageView&crop=0_496_750_588);
        background-size: 100% 100%;
        .leftPicture
          width 100%
          height 100%
          img
              width 100%
              height auto
        .rightPicture
          width 100%
          height 100%
          img
              width 98%
              height auto
        .promItem
          float left
          width 50%
          height 100%
      .commodities-after
        width: 100%;
        height: 2.222rem;
        background: url(https://yanxuan.nosdn.127.net/15435901919894506.png?imageView&crop=0_1084_750_305);
        background-size: 100% 100%;
        .leftPicture
          width 100%
          height 100%
          img
            width 100%
            height auto
        .rightPicture
           width 100%
           height 100%
           img
            width 100%
            height auto
        .promItem
           float left
           width 50%
           height 100%
      .ContentDivision
        width 100%
        height 100%
        .subheading
           width 100%
           height 100%
  </style>
